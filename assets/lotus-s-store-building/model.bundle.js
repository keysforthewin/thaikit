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

// ../repo/scratch/lotus-s-store-building/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createLotussStoreBuildingModel: () => createLotussStoreBuildingModel,
  createModel: () => createModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "lotus-s-store-building",
  "name": "Lotus's Store Building",
  "exportName": "LotussStoreBuilding",
  "materials": [
    {
      "id": "wall",
      "color": 9080724,
      "roughness": 0.88,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 6250851,
      "roughness": 0.92,
      "metalness": 0
    },
    {
      "id": "clad",
      "color": 16777215,
      "roughness": 0.62,
      "metalness": 0
    },
    {
      "id": "fascia",
      "color": 15265001,
      "roughness": 0.35,
      "metalness": 0,
      "envMapIntensity": 0.6
    },
    {
      "id": "glass",
      "color": 8422786,
      "roughness": 0.16,
      "metalness": 0,
      "opacity": 0.92,
      "envMapIntensity": 1.1
    },
    {
      "id": "aluminium",
      "color": 11447979,
      "roughness": 0.42,
      "metalness": 0.35
    },
    {
      "id": "galv",
      "color": 10133670,
      "roughness": 0.52,
      "metalness": 0.3
    }
  ],
  "geometry": {
    "fasciaWall": {
      "cy": 3.995,
      "cz": 2.41,
      "h": 0.89,
      "d": 0.42
    },
    "fasciaWallMaterial": "wall",
    "parapetExtra": [
      [
        0,
        1.775,
        2.55,
        7.88,
        3.55,
        0.14
      ]
    ],
    "fascia": {
      "w": 2.93,
      "h": 1.08,
      "cy": 3.52,
      "cz": 2.76,
      "boards": [
        {
          "w": 2.93,
          "h": 1.08,
          "d": 0.16,
          "at": [
            -0.19,
            3.52,
            2.76
          ],
          "face": "+Z"
        }
      ]
    },
    "frameMaterial": "aluminium",
    "glazing": {
      "cx": -0.6,
      "w": 5.92,
      "h": 2.36,
      "cy": 1.24,
      "cz": 2.51,
      "d": 0.1
    },
    "frame": [
      [
        -3.56,
        1.24,
        2.6,
        0.09,
        2.44,
        0.18
      ],
      [
        2.36,
        1.24,
        2.6,
        0.09,
        2.44,
        0.18
      ],
      [
        -0.6,
        2.415,
        2.6,
        5.92,
        0.1,
        0.18
      ],
      [
        -0.6,
        0.07,
        2.6,
        5.92,
        0.14,
        0.18
      ],
      [
        -0.45,
        1.78,
        2.6,
        2.24,
        0.11,
        0.18
      ],
      [
        -0.45,
        0.925,
        2.61,
        0.07,
        1.71,
        0.08
      ]
    ],
    "mullions": {
      "w": 0.07,
      "h": 2.36,
      "cy": 1.24,
      "cz": 2.61,
      "x": [
        -2.85,
        -2.2,
        -1.55,
        0.65,
        1.3,
        1.9
      ]
    },
    "tintFeature": {
      "name": "Front cladding panels",
      "material": "clad",
      "boxes": [
        [
          -3.75,
          0.3741666666666667,
          2.67,
          0.35499999999999987,
          0.7233333333333334,
          0.14
        ],
        [
          -3.75,
          1.1225,
          2.67,
          0.35499999999999987,
          0.7233333333333334,
          0.14
        ],
        [
          -3.75,
          1.8708333333333336,
          2.67,
          0.35499999999999987,
          0.7233333333333333,
          0.14
        ],
        [
          -3.75,
          2.6191666666666666,
          2.67,
          0.35499999999999987,
          0.7233333333333335,
          0.14
        ],
        [
          -3.75,
          3.3675000000000006,
          2.67,
          0.35499999999999987,
          0.7233333333333335,
          0.14
        ],
        [
          -3.75,
          4.115833333333334,
          2.67,
          0.35499999999999987,
          0.723333333333333,
          0.14
        ],
        [
          -3.1375,
          2.6191666666666666,
          2.67,
          0.8200000000000002,
          0.7233333333333335,
          0.14
        ],
        [
          -3.1375,
          3.3675000000000006,
          2.67,
          0.8200000000000002,
          0.7233333333333335,
          0.14
        ],
        [
          -3.1375,
          4.115833333333334,
          2.67,
          0.8200000000000002,
          0.723333333333333,
          0.14
        ],
        [
          -2.2925,
          2.6191666666666666,
          2.67,
          0.8199999999999997,
          0.7233333333333335,
          0.14
        ],
        [
          -2.2925,
          3.3675000000000006,
          2.67,
          0.8199999999999997,
          0.7233333333333335,
          0.14
        ],
        [
          -2.2925,
          4.115833333333334,
          2.67,
          0.8199999999999997,
          0.723333333333333,
          0.14
        ],
        [
          -1.4475,
          2.6191666666666666,
          2.67,
          0.8200000000000002,
          0.7233333333333335,
          0.14
        ],
        [
          -1.4475,
          3.3675000000000006,
          2.67,
          0.8200000000000002,
          0.7233333333333335,
          0.14
        ],
        [
          -1.4475,
          4.115833333333334,
          2.67,
          0.8200000000000002,
          0.723333333333333,
          0.14
        ],
        [
          -0.6024999999999999,
          2.6191666666666666,
          2.67,
          0.82,
          0.7233333333333335,
          0.14
        ],
        [
          -0.6024999999999999,
          3.3675000000000006,
          2.67,
          0.82,
          0.7233333333333335,
          0.14
        ],
        [
          -0.6024999999999999,
          4.115833333333334,
          2.67,
          0.82,
          0.723333333333333,
          0.14
        ],
        [
          0.24250000000000002,
          2.6191666666666666,
          2.67,
          0.82,
          0.7233333333333335,
          0.14
        ],
        [
          0.24250000000000002,
          3.3675000000000006,
          2.67,
          0.82,
          0.7233333333333335,
          0.14
        ],
        [
          0.24250000000000002,
          4.115833333333334,
          2.67,
          0.82,
          0.723333333333333,
          0.14
        ],
        [
          1.0875,
          2.6191666666666666,
          2.67,
          0.82,
          0.7233333333333335,
          0.14
        ],
        [
          1.0875,
          3.3675000000000006,
          2.67,
          0.82,
          0.7233333333333335,
          0.14
        ],
        [
          1.0875,
          4.115833333333334,
          2.67,
          0.82,
          0.723333333333333,
          0.14
        ],
        [
          1.9325,
          2.6191666666666666,
          2.67,
          0.82,
          0.7233333333333335,
          0.14
        ],
        [
          1.9325,
          3.3675000000000006,
          2.67,
          0.82,
          0.7233333333333335,
          0.14
        ],
        [
          1.9325,
          4.115833333333334,
          2.67,
          0.82,
          0.723333333333333,
          0.14
        ],
        [
          2.7775,
          0.3741666666666667,
          2.67,
          0.8200000000000002,
          0.7233333333333334,
          0.14
        ],
        [
          2.7775,
          1.1225,
          2.67,
          0.8200000000000002,
          0.7233333333333334,
          0.14
        ],
        [
          2.7775,
          1.8708333333333336,
          2.67,
          0.8200000000000002,
          0.7233333333333333,
          0.14
        ],
        [
          2.7775,
          2.6191666666666666,
          2.67,
          0.8200000000000002,
          0.7233333333333335,
          0.14
        ],
        [
          2.7775,
          3.3675000000000006,
          2.67,
          0.8200000000000002,
          0.7233333333333335,
          0.14
        ],
        [
          2.7775,
          4.115833333333334,
          2.67,
          0.8200000000000002,
          0.723333333333333,
          0.14
        ],
        [
          3.5700000000000003,
          0.3741666666666667,
          2.7,
          0.7149999999999997,
          0.7233333333333334,
          0.2
        ],
        [
          3.5700000000000003,
          1.1225,
          2.7,
          0.7149999999999997,
          0.7233333333333334,
          0.2
        ],
        [
          3.5700000000000003,
          1.8708333333333336,
          2.7,
          0.7149999999999997,
          0.7233333333333333,
          0.2
        ],
        [
          3.5700000000000003,
          2.6191666666666666,
          2.7,
          0.7149999999999997,
          0.7233333333333335,
          0.2
        ],
        [
          3.5700000000000003,
          3.3675000000000006,
          2.7,
          0.7149999999999997,
          0.7233333333333335,
          0.2
        ],
        [
          3.5700000000000003,
          4.115833333333334,
          2.7,
          0.7149999999999997,
          0.723333333333333,
          0.2
        ],
        [
          3.88,
          0.3741666666666667,
          2.28,
          0.16,
          0.7233333333333334,
          0.64
        ],
        [
          3.88,
          1.1225,
          2.28,
          0.16,
          0.7233333333333334,
          0.64
        ],
        [
          3.88,
          1.8708333333333336,
          2.28,
          0.16,
          0.7233333333333333,
          0.64
        ],
        [
          3.88,
          2.6191666666666666,
          2.28,
          0.16,
          0.7233333333333335,
          0.64
        ],
        [
          3.88,
          3.3675000000000006,
          2.28,
          0.16,
          0.7233333333333335,
          0.64
        ],
        [
          3.88,
          4.115833333333334,
          2.28,
          0.16,
          0.723333333333333,
          0.64
        ],
        [
          -0.6,
          1.05,
          2.625,
          5.92,
          0.14,
          0.05
        ]
      ],
      "tones": [
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        15001313,
        5542e3,
        5542e3,
        15001313,
        15001313,
        5542e3,
        15001313,
        15001313,
        5542e3,
        15001313,
        15001313,
        5542e3,
        15001313,
        15001313,
        5542e3,
        15001313,
        15001313,
        5542e3,
        15001313,
        15001313,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        15001313,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        5542e3,
        5542e3
      ]
    },
    "frontFeature": {
      "name": "Parapet coping",
      "material": "aluminium",
      "boxes": [
        [
          0,
          4.52,
          2.44,
          7.96,
          0.16,
          0.84
        ],
        [
          -3.88,
          4.03,
          -0.65,
          0.16,
          0.16,
          5.66
        ],
        [
          3.88,
          4.03,
          -0.65,
          0.16,
          0.16,
          5.66
        ],
        [
          0,
          4.03,
          -3.37,
          7.96,
          0.16,
          0.14
        ]
      ]
    },
    "extraFeature": {
      "name": "Entrance canopy",
      "material": "aluminium",
      "boxes": [
        [
          -0.51,
          2.43,
          3.04,
          6.18,
          0.12,
          0.8
        ],
        [
          -0.51,
          2.535,
          2.77,
          6.18,
          0.09,
          0.14
        ],
        [
          -0.51,
          2.5,
          3.43,
          6.18,
          0.08,
          0.14
        ],
        [
          -0.51,
          2.32,
          3.39,
          6.18,
          0.12,
          0.1
        ],
        [
          -3.32,
          2.525,
          2.98,
          0.22,
          0.08,
          0.13
        ],
        [
          -2.22,
          2.525,
          2.98,
          0.22,
          0.08,
          0.13
        ],
        [
          -1.07,
          2.525,
          2.98,
          0.22,
          0.08,
          0.13
        ],
        [
          0.11,
          2.525,
          2.98,
          0.22,
          0.08,
          0.13
        ],
        [
          1.25,
          2.525,
          2.98,
          0.22,
          0.08,
          0.13
        ]
      ]
    },
    "sideFeature": {
      "name": "Roller shutter, head box and hood",
      "material": "galv",
      "boxes": [
        [
          3.945,
          0.20833333333333334,
          -1.75,
          0.09,
          0.12573333333333334,
          2.3
        ],
        [
          3.9375,
          0.345,
          -1.75,
          0.075,
          0.12573333333333334,
          2.3
        ],
        [
          3.945,
          0.4816666666666667,
          -1.75,
          0.09,
          0.12573333333333334,
          2.3
        ],
        [
          3.9375,
          0.6183333333333333,
          -1.75,
          0.075,
          0.12573333333333334,
          2.3
        ],
        [
          3.945,
          0.755,
          -1.75,
          0.09,
          0.12573333333333334,
          2.3
        ],
        [
          3.9375,
          0.8916666666666666,
          -1.75,
          0.075,
          0.12573333333333334,
          2.3
        ],
        [
          3.945,
          1.0283333333333333,
          -1.75,
          0.09,
          0.12573333333333334,
          2.3
        ],
        [
          3.9375,
          1.165,
          -1.75,
          0.075,
          0.12573333333333334,
          2.3
        ],
        [
          3.945,
          1.3016666666666667,
          -1.75,
          0.09,
          0.12573333333333334,
          2.3
        ],
        [
          3.9375,
          1.4383333333333335,
          -1.75,
          0.075,
          0.12573333333333334,
          2.3
        ],
        [
          3.945,
          1.5749999999999997,
          -1.75,
          0.09,
          0.12573333333333334,
          2.3
        ],
        [
          3.9375,
          1.7116666666666664,
          -1.75,
          0.075,
          0.12573333333333334,
          2.3
        ],
        [
          3.945,
          1.8483333333333332,
          -1.75,
          0.09,
          0.12573333333333334,
          2.3
        ],
        [
          3.9375,
          1.9849999999999999,
          -1.75,
          0.075,
          0.12573333333333334,
          2.3
        ],
        [
          3.945,
          2.1216666666666666,
          -1.75,
          0.09,
          0.12573333333333334,
          2.3
        ],
        [
          3.9375,
          2.2583333333333333,
          -1.75,
          0.075,
          0.12573333333333334,
          2.3
        ],
        [
          3.945,
          2.395,
          -1.75,
          0.09,
          0.12573333333333334,
          2.3
        ],
        [
          3.9375,
          2.5316666666666667,
          -1.75,
          0.075,
          0.12573333333333334,
          2.3
        ],
        [
          3.935,
          2.74,
          -1.75,
          0.11,
          0.28,
          2.4
        ],
        [
          4.1,
          2.93,
          -1.75,
          0.5,
          0.1,
          2.5999999999999996
        ],
        [
          4.33,
          2.85,
          -1.75,
          0.06,
          0.12,
          2.5999999999999996
        ],
        [
          4.08,
          2.82,
          -2.8,
          0.4,
          0.06,
          0.1
        ],
        [
          4.08,
          2.82,
          -0.7,
          0.4,
          0.06,
          0.1
        ]
      ]
    },
    "condensers": [],
    "extraFeature2": {
      "name": "Rooftop plant",
      "material": "galv",
      "boxes": [
        [
          0.1,
          3.975,
          -0.1,
          2.3,
          0.75,
          1.15
        ],
        [
          1.6,
          3.975,
          -1.55,
          2.3,
          0.75,
          1.15
        ],
        [
          0.6,
          3.94,
          -0.8,
          0.7,
          0.68,
          1.1
        ],
        {
          "cyl": [
            -0.45,
            4.395,
            -0.1,
            0.3,
            0.11,
            16
          ]
        },
        {
          "cyl": [
            0.55,
            4.395,
            -0.1,
            0.3,
            0.11,
            16
          ]
        },
        {
          "cyl": [
            1.05,
            4.395,
            -1.55,
            0.3,
            0.11,
            16
          ]
        },
        {
          "cyl": [
            2.05,
            4.395,
            -1.55,
            0.3,
            0.11,
            16
          ]
        },
        [
          -0.3,
          3.72,
          0.5,
          1.15,
          0.055,
          0.06
        ],
        [
          -0.3,
          3.8200000000000003,
          0.5,
          1.15,
          0.055,
          0.06
        ],
        [
          -0.3,
          3.9200000000000004,
          0.5,
          1.15,
          0.055,
          0.06
        ],
        [
          -0.3,
          4.0200000000000005,
          0.5,
          1.15,
          0.055,
          0.06
        ],
        [
          -0.3,
          4.12,
          0.5,
          1.15,
          0.055,
          0.06
        ],
        [
          -0.3,
          4.220000000000001,
          0.5,
          1.15,
          0.055,
          0.06
        ],
        [
          1.2,
          3.72,
          -0.95,
          1.15,
          0.055,
          0.06
        ],
        [
          1.2,
          3.8200000000000003,
          -0.95,
          1.15,
          0.055,
          0.06
        ],
        [
          1.2,
          3.9200000000000004,
          -0.95,
          1.15,
          0.055,
          0.06
        ],
        [
          1.2,
          4.0200000000000005,
          -0.95,
          1.15,
          0.055,
          0.06
        ],
        [
          1.2,
          4.12,
          -0.95,
          1.15,
          0.055,
          0.06
        ],
        [
          1.2,
          4.220000000000001,
          -0.95,
          1.15,
          0.055,
          0.06
        ]
      ]
    }
  },
  "graphic": {
    "baked": "data:image/webp;base64,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",
    "size": [
      1536,
      576
    ],
    "background": "#F2F4F1",
    "ops": [
      {
        "type": "text",
        "text": "Lotus",
        "x0": 0.102,
        "x1": 0.735,
        "cy": 0.55,
        "size": 0.44,
        "fill": "#0E7A4F"
      },
      {
        "type": "text",
        "text": "'s",
        "x0": 0.76,
        "x1": 0.911,
        "cy": 0.55,
        "size": 0.44,
        "fill": "#E3A81C"
      }
    ],
    "wall": {
      "meshes": [
        "building-shell",
        "parapet",
        "tint-feature"
      ],
      "tile": 3.2,
      "size": 512,
      "seed": 20260828,
      "base": 252,
      "patches": 40,
      "patchAmp": 10,
      "streaks": 70,
      "streakAmp": 12,
      "specks": 2e3,
      "speckAmp": 14
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
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute("position"), n = g.getAttribute("normal"), t = g.getAttribute("uv");
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
  out.computeBoundingBox();
  out.computeBoundingSphere();
  return out;
}
function boxAt(cx, cy, cz, w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(cx, cy, cz);
  return g;
}
function cylAt(cx, cy, cz, r, h, seg = 16) {
  const g = new THREE.CylinderGeometry(r, r, h, seg);
  g.translate(cx, cy, cz);
  return g;
}
function boxes(list) {
  return mergeGeos(list.map((b) => {
    if (!Array.isArray(b)) {
      const c = b.cyl;
      const g = new THREE.CylinderGeometry(c[3], c[3], c[4], c[5] ?? 12);
      if (c[6]) g.rotateX(c[6]);
      if (c[7]) g.rotateZ(c[7]);
      g.translate(c[0], c[1], c[2]);
      return g;
    }
    if (b[6]) {
      const g = new THREE.BoxGeometry(b[3], b[4], b[5]);
      g.rotateX(b[6]);
      g.translate(b[0], b[1], b[2]);
      return g;
    }
    return boxAt(b[0], b[1], b[2], b[3], b[4], b[5]);
  }));
}
function tonedBoxes(list, tones) {
  const parts = list.map((b) => boxes([b]));
  const geo = mergeGeos(parts.map((g) => g.clone()));
  const col = new Float32Array(geo.getAttribute("position").count * 3);
  const c = new THREE.Color();
  let v = 0;
  for (let i = 0; i < parts.length; i++) {
    const n = parts[i].getAttribute("position").count;
    c.setHex(tones[i] ?? 16777215);
    for (let k = 0; k < n; k++) {
      col[(v + k) * 3] = c.r;
      col[(v + k) * 3 + 1] = c.g;
      col[(v + k) * 3 + 2] = c.b;
    }
    v += n;
    parts[i].dispose();
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  return geo;
}
function finishVertexColors(materials, meshes, matId) {
  const m = materials[matId];
  if (!m || m.vertexColors) return;
  m.vertexColors = true;
  m.needsUpdate = true;
  for (const mesh of Object.values(meshes)) {
    if (mesh.material !== m) continue;
    const geo = mesh.geometry;
    if (geo.getAttribute("color")) continue;
    const n = geo.getAttribute("position").count;
    geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
  }
}
function buildMaterials(options) {
  const map = {};
  for (const s of CONFIG.materials) {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(s.color),
      roughness: s.roughness,
      metalness: s.metalness,
      wireframe: options.wireframe ?? false
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
function createLotussStoreBuildingModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Lotus's Store Building";
  const materials = buildMaterials(options);
  const nodes = {};
  const meshes = {};
  const sockets = {};
  const colliders = {};
  const destructionGroups = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;
  function add(id, name, geo, matId) {
    const node = new THREE.Group();
    node.name = name + "__node";
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
  const G = CONFIG.geometry;
  const SF = G.shellFront ?? 2.5;
  const SB = G.shellBox ?? [0, 1.775, (SF - 3.44) / 2, 7.88, 3.55, SF + 3.44];
  add(
    "building-shell",
    "Building shell",
    G.shellBoxes ? boxes(G.shellBoxes) : boxAt(SB[0], SB[1], SB[2], SB[3], SB[4], SB[5]),
    "wall"
  );
  colliders["building-shell"] = {
    // Half-height follows the parapet coping, so a taller module (FamilyMart's 5.20) is not
    // declared 2.3 m tall; every 4.60 sibling still gets exactly 2.3.
    shape: "box",
    localCenter: [0, ((G.fasciaWall?.cy ?? 4.075) + (G.fasciaWall?.h ?? 1.05) / 2) / 2, 0],
    halfExtents: [4, ((G.fasciaWall?.cy ?? 4.075) + (G.fasciaWall?.h ?? 1.05) / 2) / 2, 3.5],
    notes: 'Asset declares collider "box". One convex proxy over the whole envelope.'
  };
  const DB = G.deckBox ?? [0, G.deckY ?? 3.56, (SF - 0.02 - 3.42) / 2, 7.8, 0.12, SF + 3.4];
  const deckGeo = boxAt(DB[0], DB[1], DB[2], DB[3], DB[4], DB[5]);
  const tonedDeck = !!G.deckExtraTones;
  add(
    "roof-deck",
    "Roof deck",
    G.deckExtra ? tonedDeck ? tonedBoxes(
      [DB, ...G.deckExtra],
      [G.deckTone, ...G.deckExtraTones]
    ) : mergeGeos([deckGeo, boxes(G.deckExtra)]) : deckGeo,
    "deck"
  );
  if (tonedDeck) deckGeo.dispose();
  const PS = G.parapetSides ?? { cy: 3.75, h: 0.4, thick: 0.24 };
  const PW = G.parapetW ?? 8;
  const PCX = PS.cx ?? 3.88;
  add("parapet", "Parapet ring and fascia wall", boxes(G.parapetBoxes ? [...G.parapetBoxes, ...G.parapetExtra ?? []] : [
    [0, G.fasciaWall.cy, G.fasciaWall.cz, PW, G.fasciaWall.h, G.fasciaWall.d],
    // Side and rear upstands. `parapetSides` overrides the default 0.40 m upstand for a plate whose
    // parapet is a full-height ring rather than a low kerb; the front is always the taller face and
    // comes in through `fasciaWall`, which a plan extrusion could not express.
    [-PCX, PS.cy, (SF - 0.3 - 3.5) / 2, PS.thick, PS.h, SF + 3.2],
    [PCX, PS.cy, (SF - 0.3 - 3.5) / 2, PS.thick, PS.h, SF + 3.2],
    [0, PS.cy, -3.38, PW, PS.h, 0.24],
    // Anything else in the SAME material folds in here rather than costing its own draw call --
    // full-height facade cladding, corner pilasters, a plinth. This is the merge lever: two
    // parts that share a material should never be two submissions.
    ...G.parapetExtra ?? []
  ]), G.fasciaWallMaterial);
  {
    const f = G.fascia;
    let g;
    if (f.shape === "disc") {
      const r = f.w / 2;
      const face = new THREE.CircleGeometry(r, 32);
      face.translate(0, 0, 0.061);
      const body = new THREE.CylinderGeometry(r, r, 0.12, 32);
      body.rotateX(-Math.PI / 2);
      const buv = body.getAttribute("uv");
      for (let i = 0; i < buv.count; i++) buv.setXY(i, 0.02, 0.02);
      buv.needsUpdate = true;
      g = mergeGeos([face, body]);
      g.translate(0, f.cy, f.cz);
    } else {
      const FACE_SLICE = { "+X": 0, "-X": 4, "+Y": 8, "-Y": 12, "+Z": 16, "-Z": 20 };
      const boards = f.boards ?? [{ w: f.w, h: f.h, d: 0.12, at: [0, f.cy, f.cz], face: "+Z" }];
      const parts = [];
      for (const bd of boards) {
        const b = new THREE.BoxGeometry(bd.w, bd.h, bd.d ?? 0.12);
        const uv = b.getAttribute("uv");
        const plain = bd.plain === true;
        const startAt = FACE_SLICE[bd.face ?? "+Z"];
        const u0 = bd.u ? bd.u[0] : 0, u1 = bd.u ? bd.u[1] : 1;
        const pu = bd.plainUV ? bd.plainUV[0] : 0.015, pv = bd.plainUV ? bd.plainUV[1] : 0.015;
        for (let i = 0; i < uv.count; i++) {
          const R = f.uvRect ?? [0, 0.125, 1, 1];
          if (!plain && i >= startAt && i < startAt + 4) uv.setXY(i, R[0] + (u0 + uv.getX(i) * (u1 - u0)) * (R[2] - R[0]), R[1] + uv.getY(i) * (R[3] - R[1]));
          else uv.setXY(i, pu, pv);
        }
        uv.needsUpdate = true;
        b.translate(bd.at[0], bd.at[1], bd.at[2]);
        parts.push(b);
      }
      g = parts.length === 1 ? parts[0] : mergeGeos(parts);
    }
    if (f.curved) {
      const cparts = [g];
      for (const c of f.curved) {
        const R = (c.w * c.w / 4 + c.bulge * c.bulge) / (2 * c.bulge);
        const half = Math.asin(c.w / 2 / R);
        const cyl = new THREE.CylinderGeometry(R, R, c.h, c.seg ?? 12, 1, true, -half, 2 * half);
        const cuv = cyl.getAttribute("uv");
        const r = c.uvRect;
        for (let i = 0; i < cuv.count; i++) cuv.setXY(i, r[0] + cuv.getX(i) * (r[2] - r[0]), r[1] + cuv.getY(i) * (r[3] - r[1]));
        cyl.translate(c.x, c.y, c.z - R);
        cparts.push(cyl);
      }
      g = mergeGeos(cparts);
    }
    add("fascia-panel", "Brand fascia panel", g, "fascia");
  }
  {
    const pane = G.glazing.boxes ? boxes(G.glazing.boxes) : boxAt(G.glazing.cx ?? 0, G.glazing.cy, G.glazing.cz ?? 2.51, G.glazing.w, G.glazing.h, G.glazing.d ?? 0.1);
    const extra = G.glazingExtra ?? [];
    add(
      "shopfront-glazing",
      "Shopfront glazing",
      extra.length ? mergeGeos([pane, ...extra.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5]))]) : pane,
      "glass"
    );
  }
  add("shopfront-frame", "Shopfront framing and door bay", boxes(G.frame), G.frameMaterial);
  const pivotNodes = [];
  if (G.door) {
    const d = G.door;
    const hinge = new THREE.Group();
    hinge.name = "door-hinge";
    hinge.position.set(d.hinge[0], d.hinge[1], d.hinge[2]);
    hinge.userData.actionProfile = {
      animationRole: "articulated",
      pivot: {
        mode: "custom",
        localPosition: [0, 0, 0],
        axis: [0, 1, 0],
        name: "door-hinge",
        note: "Entrance door swings about the jamb stile. Closed at 0, opens outward toward +Z with negative yaw."
      }
    };
    root.add(hinge);
    pivotNodes.push(hinge);
    const w = d.w, h = d.h, y0 = d.y0, y1 = y0 + h, ym = (y0 + y1) / 2;
    const st = d.stile ?? 0.08, D = d.depth ?? 0.12;
    const sx = d.flip ? -1 : 1;
    const hx = w - (d.handle ? d.handle[0] ?? 0.16 : 0);
    const leafFrame = boxes([
      [sx * (st / 2), ym, 0, st, h, D],
      [sx * (w - st / 2), ym, 0, st, h, D],
      [sx * (w / 2), y1 - 0.04, 0, w, 0.08, D],
      [sx * (w / 2), y0 + 0.16, 0, w, 0.32, D],
      [sx * (w / 2), d.railY ?? 1.05, 0, w, 0.07, D],
      // Pull handle: a vertical bar on two stand-offs, on the swinging edge. The plate shows one
      // and it is the detail that reads a glass leaf as a door rather than as another pane.
      ...d.handle ? [
        { cyl: [sx * hx, d.handle[1] ?? 1.05, D / 2 + 0.05, 0.018, d.handle[2] ?? 0.8, 10] },
        [sx * hx, (d.handle[1] ?? 1.05) + (d.handle[2] ?? 0.8) / 2 - 0.03, D / 2 + 0.025, 0.036, 0.036, 0.1],
        [sx * hx, (d.handle[1] ?? 1.05) - (d.handle[2] ?? 0.8) / 2 + 0.03, D / 2 + 0.025, 0.036, 0.036, 0.1]
      ] : []
    ]);
    const leafPane = boxAt(sx * (w / 2), (y0 + 0.32 + y1 - 0.08) / 2, 0, w - 2 * st, y1 - 0.08 - (y0 + 0.32), 0.04);
    for (const [id, name, geo, mat] of [
      ["door-leaf-frame", "Entrance door leaf frame", leafFrame, G.frameMaterial],
      ["door-leaf-glass", "Entrance door leaf glass", leafPane, "glass"]
    ]) {
      const node = new THREE.Group();
      node.name = name + "__node";
      const mesh = new THREE.Mesh(geo, materials[mat]);
      mesh.name = name;
      mesh.castShadow = castShadow;
      mesh.receiveShadow = receiveShadow;
      node.add(mesh);
      hinge.add(node);
      nodes[id] = node;
      meshes[id] = mesh;
      colliders[id] = null;
    }
  }
  if (G.sideFeature) add("side-feature", G.sideFeature.name, boxes(G.sideFeature.boxes), G.sideFeature.material);
  if (G.frontFeature) add("front-feature", G.frontFeature.name, boxes(G.frontFeature.boxes), G.frontFeature.material);
  if (G.extraFeature) add("extra-feature", G.extraFeature.name, boxes(G.extraFeature.boxes), G.extraFeature.material);
  if (G.extraFeature2) add("extra-feature-2", G.extraFeature2.name, boxes(G.extraFeature2.boxes), G.extraFeature2.material);
  if (G.tintFeature) {
    const t = G.tintFeature;
    const list = t.boxes;
    const parts = list.map((b) => boxes([b]));
    const geo = mergeGeos(parts.map((g) => g.clone()));
    const col = new Float32Array(geo.getAttribute("position").count * 3);
    const c = new THREE.Color();
    let v = 0;
    for (let i = 0; i < parts.length; i++) {
      const n = parts[i].getAttribute("position").count;
      c.setHex(t.tones[i % t.tones.length]);
      for (let k = 0; k < n; k++) {
        col[(v + k) * 3] = c.r;
        col[(v + k) * 3 + 1] = c.g;
        col[(v + k) * 3 + 2] = c.b;
      }
      v += n;
      parts[i].dispose();
    }
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const mesh = add("tint-feature", t.name, geo, t.material);
    mesh.material.vertexColors = true;
    mesh.material.needsUpdate = true;
  }
  {
    const m = G.mullions;
    const mats = m.x.map((x) => new THREE.Matrix4().setPosition(x, m.cy, m.cz ?? 2.58));
    addInst("shopfront-mullions", "Shopfront mullions", new THREE.BoxGeometry(m.w, m.h, 0.08), G.frameMaterial, mats);
  }
  if ((G.condensers ?? []).length) {
    let unit;
    if (G.condenserParts && G.condenserTones) {
      unit = tonedBoxes(G.condenserParts, G.condenserTones);
    } else if (G.condenserParts) {
      unit = boxes(G.condenserParts);
    } else {
      const parts = [
        boxAt(0, 0.46, 0, 0.95, 0.72, 0.85),
        cylAt(0, 0.87, 0, 0.3, 0.1, 16)
      ];
      for (const fx of [-0.4, 0.4]) for (const fz of [-0.35, 0.35]) parts.push(boxAt(fx, 0.05, fz, 0.08, 0.1, 0.08));
      unit = mergeGeos(parts);
    }
    const mats = G.condensers.map(([x, z, yaw, s]) => new THREE.Matrix4().compose(
      new THREE.Vector3(x, G.condenserY ?? 3.6, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
      new THREE.Vector3(s ?? 1, s ?? 1, s ?? 1)
    ));
    addInst("plant-condensers", "Rooftop condenser units", unit, G.plantMaterial ?? "galv", mats);
  }
  if (G.extraSystem) {
    const e = G.extraSystem;
    let unit;
    if (e.kind === "plate") {
      unit = mergeGeos([boxAt(0, 0, 0, e.w, e.h, e.d), cylAt(0, -e.h / 2 - 0.015, 0, 0.085, 0.03, 12)]);
    } else {
      unit = boxAt(0, 0, 0, e.w, e.h, e.d);
    }
    const mats = e.at.map(([x, y, z]) => new THREE.Matrix4().setPosition(x, y, z));
    addInst(e.id, e.name, unit, e.material, mats, e.tones ? mats.map((_, i) => e.tones[i % e.tones.length]) : void 0);
  }
  if (tonedDeck) finishVertexColors(materials, meshes, "deck");
  if (G.condenserTones && (G.condensers ?? []).length) finishVertexColors(materials, meshes, G.plantMaterial ?? "galv");
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups, pivotNodes };
  return root;
}
function applyFasciaGraphic(root) {
  const rt = root.userData.sculptRuntime;
  const mesh = rt?.meshes?.["fascia-panel"];
  if (!mesh || typeof document === "undefined") return;
  const material = mesh.material;
  if (!material) return;
  const g = CONFIG.graphic;
  const srgb = THREE.SRGBColorSpace;
  if (g.baked) {
    const baked = new THREE.TextureLoader().load(g.baked, void 0, void 0, () => {
      const c = drawFasciaCanvas(g);
      if (!c) return;
      const t = new THREE.CanvasTexture(c);
      if (srgb) t.colorSpace = srgb;
      t.anisotropy = 4;
      material.map = t;
      material.needsUpdate = true;
    });
    if (srgb) baked.colorSpace = srgb;
    baked.anisotropy = 4;
    baked.needsUpdate = true;
    material.map = baked;
    material.color.setHex(16777215);
    material.needsUpdate = true;
    return;
  }
  const canvas = drawFasciaCanvas(g);
  if (!canvas) return;
  const tex = new THREE.CanvasTexture(canvas);
  if (srgb) tex.colorSpace = srgb;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  material.map = tex;
  material.color.setHex(16777215);
  material.needsUpdate = true;
}
function drawFasciaCanvas(g) {
  const square = !!g.square;
  const W = square ? 512 : g.size?.[0] ?? 2048, H = square ? 512 : g.size?.[1] ?? 320;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = g.background;
  ctx.fillRect(0, 0, W, H);
  const band = square ? H : H * (g.bandFrac ?? 0.875);
  const fit = (text, font, x0, x1, cy, fill, strokeCol, strokeW) => {
    ctx.font = font;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    const w = ctx.measureText(text).width;
    const s = (x1 - x0) / w;
    ctx.save();
    ctx.translate(x0, 0);
    ctx.scale(s, 1);
    if (strokeCol) {
      ctx.lineJoin = "round";
      ctx.strokeStyle = strokeCol;
      ctx.lineWidth = (strokeW ?? 6) / s;
      ctx.strokeText(text, 0, cy);
    }
    ctx.fillStyle = fill;
    ctx.fillText(text, 0, cy);
    ctx.restore();
  };
  for (const op of g.ops) {
    if (op.type === "rect") {
      ctx.fillStyle = op.fill;
      const x = op.x * W, y = op.y * band, w = op.w * W, h = op.h * band, r = (op.r ?? 0) * band;
      ctx.beginPath();
      if (r > 0) {
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
      } else ctx.rect(x, y, w, h);
      ctx.closePath();
      ctx.fill();
    } else if (op.type === "circle") {
      ctx.fillStyle = op.fill;
      ctx.beginPath();
      ctx.arc(op.cx * W, op.cy * band, op.r * band, 0, Math.PI * 2);
      ctx.fill();
    } else if (op.type === "poly") {
      ctx.fillStyle = op.fill;
      ctx.beginPath();
      const pts = op.points;
      ctx.moveTo(pts[0][0] * W, pts[0][1] * band);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0] * W, pts[i][1] * band);
      ctx.closePath();
      ctx.fill();
    } else if (op.type === "text") {
      fit(
        op.text,
        `${op.style ?? "bold"} ${Math.round(op.size * band)}px ${op.family ?? "Arial, Helvetica, sans-serif"}`,
        op.x0 * W,
        op.x1 * W,
        op.cy * band,
        op.fill,
        op.stroke,
        op.strokeW ? op.strokeW * band : void 0
      );
    }
  }
  return canvas;
}
function applyGlassGraphic(root) {
  const g = CONFIG.graphic?.glass;
  if (!g || typeof document === "undefined") return;
  const rt = root.userData.sculptRuntime;
  const [x0, y0, x1, y1] = g.rect;
  const targets = [{ id: "shopfront-glazing", off: [0, 0, 0] }, ...g.also ?? []];
  let material = null;
  for (const t of targets) {
    const mesh = rt?.meshes?.[t.id];
    if (!mesh) continue;
    const m = mesh.material;
    if (!m) continue;
    material = material ?? m;
    const geo = mesh.geometry;
    const pos = geo.getAttribute("position");
    const off = t.off ?? [0, 0, 0];
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      uv[i * 2] = (pos.getX(i) + off[0] - x0) / (x1 - x0);
      uv[i * 2 + 1] = (pos.getY(i) + off[1] - y0) / (y1 - y0);
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  }
  if (!material) return;
  const srgb = THREE.SRGBColorSpace;
  const tex = new THREE.TextureLoader().load(g.baked);
  if (srgb) tex.colorSpace = srgb;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  material.map = tex;
  material.color.setHex(16777215);
  if (g.roughness !== void 0) material.roughness = g.roughness;
  material.needsUpdate = true;
}
function applyWallGraphic(root) {
  const gr = CONFIG.graphic;
  if (!gr || typeof document === "undefined") return;
  const entries = [gr.wall, ...gr.walls ?? []].filter(Boolean);
  const rt = root.userData.sculptRuntime;
  if (!rt) return;
  for (const g of entries) applyOneWallGraphic(rt, g);
}
function applyOneWallGraphic(rt, g) {
  const tile = g.tile ?? 2.5;
  const N = g.size ?? 512;
  const clean = g.clean;
  const pin = 6 / N;
  let tex = null;
  for (const id of g.meshes) {
    const mesh = rt.meshes?.[id];
    if (!mesh) continue;
    const geo = mesh.geometry;
    const pos = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
    if (!pos || !nrm) continue;
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      if (clean && x >= clean[0] && x <= clean[2] && y >= clean[1] && y <= clean[3]) {
        uv[i * 2] = pin;
        uv[i * 2 + 1] = pin;
        continue;
      }
      const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
      let u, v;
      if (ax >= ay && ax >= az) {
        u = z;
        v = y;
      } else if (az >= ay) {
        u = x;
        v = y;
      } else {
        u = x;
        v = z;
      }
      uv[i * 2] = u / tile;
      uv[i * 2 + 1] = v / tile;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    if (!tex) {
      const srgb = THREE.SRGBColorSpace;
      if (g.image) {
        tex = new THREE.TextureLoader().load(g.image);
      } else {
        const canvas = drawWallCanvas(g);
        if (!canvas) return;
        tex = new THREE.CanvasTexture(canvas);
      }
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      if (srgb) tex.colorSpace = srgb;
      tex.anisotropy = 4;
      tex.needsUpdate = true;
    }
    const material = mesh.material;
    if (material && material.map !== tex) {
      material.map = tex;
      material.needsUpdate = true;
    }
  }
}
function drawWallCanvas(g) {
  const N = g.size ?? 512;
  const canvas = document.createElement("canvas");
  canvas.width = N;
  canvas.height = N;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  let seed = g.seed ?? 20260828;
  const rnd = () => {
    seed = seed * 1664525 + 1013904223 >>> 0;
    return seed / 4294967296;
  };
  const base = g.base ?? 246;
  ctx.fillStyle = `rgb(${base},${base},${base})`;
  ctx.fillRect(0, 0, N, N);
  for (let i = 0; i < (g.patches ?? 90); i++) {
    const x = rnd() * N, y = rnd() * N, r = (0.05 + rnd() * 0.18) * N;
    const v = base - rnd() * (g.patchAmp ?? 26);
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, `rgba(${v | 0},${v | 0},${v | 0},0.55)`);
    grad.addColorStop(1, `rgba(${v | 0},${v | 0},${v | 0},0)`);
    ctx.fillStyle = grad;
    for (const dx of [-N, 0, N]) {
      ctx.save();
      ctx.translate(dx, 0);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }
  for (let i = 0; i < (g.streaks ?? 130); i++) {
    const x = rnd() * N, w = (2e-3 + rnd() * 0.01) * N;
    const y0 = rnd() * N * 0.5, len = (0.25 + rnd() * 0.75) * N;
    const dark = base - (6 + rnd() * (g.streakAmp ?? 22));
    const grad = ctx.createLinearGradient(0, y0, 0, y0 + len);
    grad.addColorStop(0, `rgba(${dark | 0},${dark | 0},${dark | 0},0.42)`);
    grad.addColorStop(0.35, `rgba(${dark | 0},${dark | 0},${dark | 0},0.26)`);
    grad.addColorStop(1, `rgba(${dark | 0},${dark | 0},${dark | 0},0)`);
    ctx.fillStyle = grad;
    for (const dx of [-N, 0, N]) ctx.fillRect(x + dx - w / 2, y0, w, len);
  }
  if (g.seams) {
    const pitch = (g.seamPitch ?? 0.375) * N;
    const amp = g.seamAmp ?? 9;
    for (let y = pitch * 0.5; y < N + pitch; y += pitch) {
      const yy = y % N;
      const d = base - amp, l = Math.min(255, base + amp * 0.35);
      ctx.fillStyle = `rgba(${d | 0},${d | 0},${d | 0},0.5)`;
      ctx.fillRect(0, yy, N, 1.6);
      ctx.fillStyle = `rgba(${l | 0},${l | 0},${l | 0},0.35)`;
      ctx.fillRect(0, yy + 1.6, N, 1.2);
    }
  }
  for (let i = 0; i < (g.specks ?? 2600); i++) {
    const x = rnd() * N, y = rnd() * N, r = 0.5 + rnd() * 1.6;
    const v = base - rnd() * (g.speckAmp ?? 30);
    ctx.fillStyle = `rgba(${v | 0},${v | 0},${v | 0},0.30)`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = `rgb(${base},${base},${base})`;
  for (const [x, y] of [[0, 0], [N - 12, 0], [0, N - 12], [N - 12, N - 12]]) ctx.fillRect(x, y, 12, 12);
  return canvas;
}
function createObjectModel(spec, options = {}) {
  const root = createLotussStoreBuildingModel(options);
  if (spec !== void 0 && spec !== null) root.userData.sculptSpec = spec;
  applyFasciaGraphic(root);
  applyGlassGraphic(root);
  applyWallGraphic(root);
  const rt = root.userData.sculptRuntime;
  if (rt) {
    const nodes = rt.nodes ?? {};
    const pivots = [...rt.pivotNodes ?? []];
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogTG90dXNcXCdzIFN0b3JlIEJ1aWxkaW5nIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nIGFuZFxuICogaW5zdGFuY2luZyBhcmUgaGFuZC1yb2xsZWQgYmVsb3cgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSA4LjAwIHggNC42MCB4IDcuMDAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgc2hvcGZyb250IGZhY2luZyArWi5cbiAqIEJ1ZGdldCAoaGVybzJ4KTogPD0xNjAwMCB0cmlhbmdsZXMsIDw9MTIgZHJhdyBjYWxscywgPD04IG1hdGVyaWFscywgPD0xNiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBPbmUgb2YgdGhhaWtpdCdzIHNoYXJlZCByZXRhaWwtbW9kdWxlIGJ1aWxkaW5ncy4gVGhlIHNoZWxsIGZyb250IGZhY2Ugc2l0cyBhdCB6PSsyLjUwIHJhdGhlclxuICogdGhhbiB0aGUgZW52ZWxvcGUgZWRnZSBzbyB0aGUgZW50cmFuY2UgY2Fub3B5IGNhbiBjYW50aWxldmVyIGZvcndhcmQgYW5kIHN0aWxsIGxhbmQgZXhhY3RseSBvblxuICogdGhlIGRlY2xhcmVkIDcuMCBtIGRlcHRoLiBFdmVyeSBzdXJmYWNlIHBhaXIgb24gdGhlIGZhY2FkZSBpcyBkZWxpYmVyYXRlbHkgb2Zmc2V0IGluIGRlcHRoOlxuICogdHdvIHN1cmZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgdGVhciBpbnRvIGludGVybGVhdmVkIHRyaWFuZ2xlcyBhcyB0aGVcbiAqIGNhbWVyYSBtb3ZlcywgYW5kIGF1dGhvcmluZyBjb21wb25lbnRzIGZsdXNoIGFnYWluc3Qgb25lIGFub3RoZXIgcHJvZHVjZXMgdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXaGVyZSB0aGlzIHByb3AncyBzaGlwcGVkIGZpbGVzIGxpdmUsIHdpdGggYSB0cmFpbGluZyBzbGFzaC5cbiAgICpcbiAgICogVGhlIG1hcHMgYXJlIHJlY29yZGVkIGFzIGJhcmUgZmlsZW5hbWVzIGJlY2F1c2UgdGhlIGJ1bmRsZSBpcyBFVkFMVUFURURcbiAgICogcmF0aGVyIHRoYW4gaW1wb3J0ZWQ6IGl0IGhhcyBubyBpbXBvcnQubWV0YSBhbmQgbm8gY3VycmVudFNjcmlwdCwgc28gaXRcbiAgICogY2Fubm90IHNlZSBpdHMgb3duIFVSTC4gRXZlcnkgaG9zdCBkZXJpdmVzIHRoaXMgZnJvbSB0aGUgbW9kdWxlIFVSTC5cbiAgICovXG4gIGJhc2VVcmw/OiBzdHJpbmc7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwibG90dXMtcy1zdG9yZS1idWlsZGluZ1wiLFxuICAgIFwibmFtZVwiOiBcIkxvdHVzJ3MgU3RvcmUgQnVpbGRpbmdcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJMb3R1c3NTdG9yZUJ1aWxkaW5nXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwid2FsbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDkwODA3MjQsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkZWNrXCIsXG4gICAgICAgIFwiY29sb3JcIjogNjI1MDg1MSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImNsYWRcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC42MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImZhc2NpYVwiLFxuICAgICAgICBcImNvbG9yXCI6IDE1MjY1MDAxLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjM1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAwLjZcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJnbGFzc1wiLFxuICAgICAgICBcImNvbG9yXCI6IDg0MjI3ODYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMTYsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwib3BhY2l0eVwiOiAwLjkyLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAxLjFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJhbHVtaW5pdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTQ0Nzk3OSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC40MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdhbHZcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMDEzMzY3MCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC41MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiZmFzY2lhV2FsbFwiOiB7XG4gICAgICAgIFwiY3lcIjogMy45OTUsXG4gICAgICAgIFwiY3pcIjogMi40MSxcbiAgICAgICAgXCJoXCI6IDAuODksXG4gICAgICAgIFwiZFwiOiAwLjQyXG4gICAgICB9LFxuICAgICAgXCJmYXNjaWFXYWxsTWF0ZXJpYWxcIjogXCJ3YWxsXCIsXG4gICAgICBcInBhcmFwZXRFeHRyYVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEuNzc1LFxuICAgICAgICAgIDIuNTUsXG4gICAgICAgICAgNy44OCxcbiAgICAgICAgICAzLjU1LFxuICAgICAgICAgIDAuMTRcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwiZmFzY2lhXCI6IHtcbiAgICAgICAgXCJ3XCI6IDIuOTMsXG4gICAgICAgIFwiaFwiOiAxLjA4LFxuICAgICAgICBcImN5XCI6IDMuNTIsXG4gICAgICAgIFwiY3pcIjogMi43NixcbiAgICAgICAgXCJib2FyZHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwid1wiOiAyLjkzLFxuICAgICAgICAgICAgXCJoXCI6IDEuMDgsXG4gICAgICAgICAgICBcImRcIjogMC4xNixcbiAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAtMC4xOSxcbiAgICAgICAgICAgICAgMy41MixcbiAgICAgICAgICAgICAgMi43NlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiZmFjZVwiOiBcIitaXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImZyYW1lTWF0ZXJpYWxcIjogXCJhbHVtaW5pdW1cIixcbiAgICAgIFwiZ2xhemluZ1wiOiB7XG4gICAgICAgIFwiY3hcIjogLTAuNixcbiAgICAgICAgXCJ3XCI6IDUuOTIsXG4gICAgICAgIFwiaFwiOiAyLjM2LFxuICAgICAgICBcImN5XCI6IDEuMjQsXG4gICAgICAgIFwiY3pcIjogMi41MSxcbiAgICAgICAgXCJkXCI6IDAuMVxuICAgICAgfSxcbiAgICAgIFwiZnJhbWVcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTMuNTYsXG4gICAgICAgICAgMS4yNCxcbiAgICAgICAgICAyLjYsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAyLjQ0LFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuMzYsXG4gICAgICAgICAgMS4yNCxcbiAgICAgICAgICAyLjYsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAyLjQ0LFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjYsXG4gICAgICAgICAgMi40MTUsXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIDUuOTIsXG4gICAgICAgICAgMC4xLFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjYsXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAyLjYsXG4gICAgICAgICAgNS45MixcbiAgICAgICAgICAwLjE0LFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjQ1LFxuICAgICAgICAgIDEuNzgsXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIDIuMjQsXG4gICAgICAgICAgMC4xMSxcbiAgICAgICAgICAwLjE4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC40NSxcbiAgICAgICAgICAwLjkyNSxcbiAgICAgICAgICAyLjYxLFxuICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgMS43MSxcbiAgICAgICAgICAwLjA4XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcIm11bGxpb25zXCI6IHtcbiAgICAgICAgXCJ3XCI6IDAuMDcsXG4gICAgICAgIFwiaFwiOiAyLjM2LFxuICAgICAgICBcImN5XCI6IDEuMjQsXG4gICAgICAgIFwiY3pcIjogMi42MSxcbiAgICAgICAgXCJ4XCI6IFtcbiAgICAgICAgICAtMi44NSxcbiAgICAgICAgICAtMi4yLFxuICAgICAgICAgIC0xLjU1LFxuICAgICAgICAgIDAuNjUsXG4gICAgICAgICAgMS4zLFxuICAgICAgICAgIDEuOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJ0aW50RmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIkZyb250IGNsYWRkaW5nIHBhbmVsc1wiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiY2xhZFwiLFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy43NSxcbiAgICAgICAgICAgIDAuMzc0MTY2NjY2NjY2NjY2NyxcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjM1NDk5OTk5OTk5OTk5OTg3LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTMuNzUsXG4gICAgICAgICAgICAxLjEyMjUsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC4zNTQ5OTk5OTk5OTk5OTk4NyxcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0zLjc1LFxuICAgICAgICAgICAgMS44NzA4MzMzMzMzMzMzMzM2LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuMzU0OTk5OTk5OTk5OTk5ODcsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy43NSxcbiAgICAgICAgICAgIDIuNjE5MTY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjM1NDk5OTk5OTk5OTk5OTg3LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTMuNzUsXG4gICAgICAgICAgICAzLjM2NzUwMDAwMDAwMDAwMDYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC4zNTQ5OTk5OTk5OTk5OTk4NyxcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0zLjc1LFxuICAgICAgICAgICAgNC4xMTU4MzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC4zNTQ5OTk5OTk5OTk5OTk4NyxcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTMuMTM3NSxcbiAgICAgICAgICAgIDIuNjE5MTY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyMDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzUsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy4xMzc1LFxuICAgICAgICAgICAgMy4zNjc1MDAwMDAwMDAwMDA2LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIwMDAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0zLjEzNzUsXG4gICAgICAgICAgICA0LjExNTgzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyMDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0yLjI5MjUsXG4gICAgICAgICAgICAyLjYxOTE2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MTk5OTk5OTk5OTk5OTk3LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTIuMjkyNSxcbiAgICAgICAgICAgIDMuMzY3NTAwMDAwMDAwMDAwNixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgxOTk5OTk5OTk5OTk5OTcsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzUsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMi4yOTI1LFxuICAgICAgICAgICAgNC4xMTU4MzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MTk5OTk5OTk5OTk5OTk3LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMS40NDc1LFxuICAgICAgICAgICAgMi42MTkxNjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIwMDAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0xLjQ0NzUsXG4gICAgICAgICAgICAzLjM2NzUwMDAwMDAwMDAwMDYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MjAwMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTEuNDQ3NSxcbiAgICAgICAgICAgIDQuMTE1ODMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIwMDAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNjAyNDk5OTk5OTk5OTk5OSxcbiAgICAgICAgICAgIDIuNjE5MTY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNjAyNDk5OTk5OTk5OTk5OSxcbiAgICAgICAgICAgIDMuMzY3NTAwMDAwMDAwMDAwNixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNjAyNDk5OTk5OTk5OTk5OSxcbiAgICAgICAgICAgIDQuMTE1ODMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuMjQyNTAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAyLjYxOTE2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuMjQyNTAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAzLjM2NzUwMDAwMDAwMDAwMDYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuMjQyNTAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICA0LjExNTgzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjA4NzUsXG4gICAgICAgICAgICAyLjYxOTE2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuMDg3NSxcbiAgICAgICAgICAgIDMuMzY3NTAwMDAwMDAwMDAwNixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS4wODc1LFxuICAgICAgICAgICAgNC4xMTU4MzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS45MzI1LFxuICAgICAgICAgICAgMi42MTkxNjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzUsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjkzMjUsXG4gICAgICAgICAgICAzLjM2NzUwMDAwMDAwMDAwMDYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuOTMyNSxcbiAgICAgICAgICAgIDQuMTE1ODMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuNzc3NSxcbiAgICAgICAgICAgIDAuMzc0MTY2NjY2NjY2NjY2NyxcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyMDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjc3NzUsXG4gICAgICAgICAgICAxLjEyMjUsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MjAwMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi43Nzc1LFxuICAgICAgICAgICAgMS44NzA4MzMzMzMzMzMzMzM2LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIwMDAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuNzc3NSxcbiAgICAgICAgICAgIDIuNjE5MTY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyMDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzUsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjc3NzUsXG4gICAgICAgICAgICAzLjM2NzUwMDAwMDAwMDAwMDYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MjAwMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi43Nzc1LFxuICAgICAgICAgICAgNC4xMTU4MzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MjAwMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjU3MDAwMDAwMDAwMDAwMDMsXG4gICAgICAgICAgICAwLjM3NDE2NjY2NjY2NjY2NjcsXG4gICAgICAgICAgICAyLjcsXG4gICAgICAgICAgICAwLjcxNDk5OTk5OTk5OTk5OTcsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAwLjJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuNTcwMDAwMDAwMDAwMDAwMyxcbiAgICAgICAgICAgIDEuMTIyNSxcbiAgICAgICAgICAgIDIuNyxcbiAgICAgICAgICAgIDAuNzE0OTk5OTk5OTk5OTk5NyxcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDAuMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy41NzAwMDAwMDAwMDAwMDAzLFxuICAgICAgICAgICAgMS44NzA4MzMzMzMzMzMzMzM2LFxuICAgICAgICAgICAgMi43LFxuICAgICAgICAgICAgMC43MTQ5OTk5OTk5OTk5OTk3LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgMC4yXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjU3MDAwMDAwMDAwMDAwMDMsXG4gICAgICAgICAgICAyLjYxOTE2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAyLjcsXG4gICAgICAgICAgICAwLjcxNDk5OTk5OTk5OTk5OTcsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzUsXG4gICAgICAgICAgICAwLjJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuNTcwMDAwMDAwMDAwMDAwMyxcbiAgICAgICAgICAgIDMuMzY3NTAwMDAwMDAwMDAwNixcbiAgICAgICAgICAgIDIuNyxcbiAgICAgICAgICAgIDAuNzE0OTk5OTk5OTk5OTk5NyxcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy41NzAwMDAwMDAwMDAwMDAzLFxuICAgICAgICAgICAgNC4xMTU4MzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAyLjcsXG4gICAgICAgICAgICAwLjcxNDk5OTk5OTk5OTk5OTcsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIDAuMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy44OCxcbiAgICAgICAgICAgIDAuMzc0MTY2NjY2NjY2NjY2NyxcbiAgICAgICAgICAgIDIuMjgsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMC42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy44OCxcbiAgICAgICAgICAgIDEuMTIyNSxcbiAgICAgICAgICAgIDIuMjgsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMC42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy44OCxcbiAgICAgICAgICAgIDEuODcwODMzMzMzMzMzMzMzNixcbiAgICAgICAgICAgIDIuMjgsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgMC42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy44OCxcbiAgICAgICAgICAgIDIuNjE5MTY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgIDIuMjgsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy44OCxcbiAgICAgICAgICAgIDMuMzY3NTAwMDAwMDAwMDAwNixcbiAgICAgICAgICAgIDIuMjgsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy44OCxcbiAgICAgICAgICAgIDQuMTE1ODMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi4yOCxcbiAgICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIDAuNjRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjYsXG4gICAgICAgICAgICAxLjA1LFxuICAgICAgICAgICAgMi42MjUsXG4gICAgICAgICAgICA1LjkyLFxuICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgIDAuMDVcbiAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIFwidG9uZXNcIjogW1xuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDE1MDAxMzEzLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICAxNTAwMTMxMyxcbiAgICAgICAgICAxNTAwMTMxMyxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDE1MDAxMzEzLFxuICAgICAgICAgIDE1MDAxMzEzLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgMTUwMDEzMTMsXG4gICAgICAgICAgMTUwMDEzMTMsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICAxNTAwMTMxMyxcbiAgICAgICAgICAxNTAwMTMxMyxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDE1MDAxMzEzLFxuICAgICAgICAgIDE1MDAxMzEzLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgMTUwMDEzMTMsXG4gICAgICAgICAgMTUwMDEzMTMsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICAxNTAwMTMxMyxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJmcm9udEZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJQYXJhcGV0IGNvcGluZ1wiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiYWx1bWluaXVtXCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA0LjUyLFxuICAgICAgICAgICAgMi40NCxcbiAgICAgICAgICAgIDcuOTYsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC44NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTMuODgsXG4gICAgICAgICAgICA0LjAzLFxuICAgICAgICAgICAgLTAuNjUsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDUuNjZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuODgsXG4gICAgICAgICAgICA0LjAzLFxuICAgICAgICAgICAgLTAuNjUsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDUuNjZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA0LjAzLFxuICAgICAgICAgICAgLTMuMzcsXG4gICAgICAgICAgICA3Ljk2LFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImV4dHJhRmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIkVudHJhbmNlIGNhbm9weVwiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiYWx1bWluaXVtXCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjUxLFxuICAgICAgICAgICAgMi40MyxcbiAgICAgICAgICAgIDMuMDQsXG4gICAgICAgICAgICA2LjE4LFxuICAgICAgICAgICAgMC4xMixcbiAgICAgICAgICAgIDAuOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNTEsXG4gICAgICAgICAgICAyLjUzNSxcbiAgICAgICAgICAgIDIuNzcsXG4gICAgICAgICAgICA2LjE4LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjUxLFxuICAgICAgICAgICAgMi41LFxuICAgICAgICAgICAgMy40MyxcbiAgICAgICAgICAgIDYuMTgsXG4gICAgICAgICAgICAwLjA4LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNTEsXG4gICAgICAgICAgICAyLjMyLFxuICAgICAgICAgICAgMy4zOSxcbiAgICAgICAgICAgIDYuMTgsXG4gICAgICAgICAgICAwLjEyLFxuICAgICAgICAgICAgMC4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy4zMixcbiAgICAgICAgICAgIDIuNTI1LFxuICAgICAgICAgICAgMi45OCxcbiAgICAgICAgICAgIDAuMjIsXG4gICAgICAgICAgICAwLjA4LFxuICAgICAgICAgICAgMC4xM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTIuMjIsXG4gICAgICAgICAgICAyLjUyNSxcbiAgICAgICAgICAgIDIuOTgsXG4gICAgICAgICAgICAwLjIyLFxuICAgICAgICAgICAgMC4wOCxcbiAgICAgICAgICAgIDAuMTNcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0xLjA3LFxuICAgICAgICAgICAgMi41MjUsXG4gICAgICAgICAgICAyLjk4LFxuICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAwLjEzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjExLFxuICAgICAgICAgICAgMi41MjUsXG4gICAgICAgICAgICAyLjk4LFxuICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAwLjEzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjI1LFxuICAgICAgICAgICAgMi41MjUsXG4gICAgICAgICAgICAyLjk4LFxuICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAwLjEzXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJzaWRlRmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJvbGxlciBzaHV0dGVyLCBoZWFkIGJveCBhbmQgaG9vZFwiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiZ2FsdlwiLFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk0NSxcbiAgICAgICAgICAgIDAuMjA4MzMzMzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjEyNTczMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi4zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAwLjM0NSxcbiAgICAgICAgICAgIC0xLjc1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjEyNTczMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi4zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk0NSxcbiAgICAgICAgICAgIDAuNDgxNjY2NjY2NjY2NjY2NyxcbiAgICAgICAgICAgIC0xLjc1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTI1NzMzMzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAyLjNcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM3NSxcbiAgICAgICAgICAgIDAuNjE4MzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIC0xLjc1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjEyNTczMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi4zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk0NSxcbiAgICAgICAgICAgIDAuNzU1LFxuICAgICAgICAgICAgLTEuNzUsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMC4xMjU3MzMzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDIuM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMC44OTE2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgLTEuNzUsXG4gICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgIDAuMTI1NzMzMzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAyLjNcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMS4wMjgzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgLTEuNzUsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMC4xMjU3MzMzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDIuM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMS4xNjUsXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMjU3MzMzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDIuM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAxLjMwMTY2NjY2NjY2NjY2NjcsXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjEyNTczMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi4zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAxLjQzODMzMzMzMzMzMzMzMzUsXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMjU3MzMzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDIuM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAxLjU3NDk5OTk5OTk5OTk5OTcsXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjEyNTczMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi4zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAxLjcxMTY2NjY2NjY2NjY2NjQsXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMjU3MzMzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDIuM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAxLjg0ODMzMzMzMzMzMzMzMzIsXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjEyNTczMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi4zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAxLjk4NDk5OTk5OTk5OTk5OTksXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMjU3MzMzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDIuM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAyLjEyMTY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjEyNTczMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi4zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAyLjI1ODMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMjU3MzMzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDIuM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAyLjM5NSxcbiAgICAgICAgICAgIC0xLjc1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTI1NzMzMzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAyLjNcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM3NSxcbiAgICAgICAgICAgIDIuNTMxNjY2NjY2NjY2NjY2NyxcbiAgICAgICAgICAgIC0xLjc1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjEyNTczMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi4zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNSxcbiAgICAgICAgICAgIDIuNzQsXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDAuMTEsXG4gICAgICAgICAgICAwLjI4LFxuICAgICAgICAgICAgMi40XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICA0LjEsXG4gICAgICAgICAgICAyLjkzLFxuICAgICAgICAgICAgLTEuNzUsXG4gICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAyLjU5OTk5OTk5OTk5OTk5OTZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDQuMzMsXG4gICAgICAgICAgICAyLjg1LFxuICAgICAgICAgICAgLTEuNzUsXG4gICAgICAgICAgICAwLjA2LFxuICAgICAgICAgICAgMC4xMixcbiAgICAgICAgICAgIDIuNTk5OTk5OTk5OTk5OTk5NlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgNC4wOCxcbiAgICAgICAgICAgIDIuODIsXG4gICAgICAgICAgICAtMi44LFxuICAgICAgICAgICAgMC40LFxuICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgIDAuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgNC4wOCxcbiAgICAgICAgICAgIDIuODIsXG4gICAgICAgICAgICAtMC43LFxuICAgICAgICAgICAgMC40LFxuICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgIDAuMVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiY29uZGVuc2Vyc1wiOiBbXSxcbiAgICAgIFwiZXh0cmFGZWF0dXJlMlwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJvb2Z0b3AgcGxhbnRcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcImdhbHZcIixcbiAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgMy45NzUsXG4gICAgICAgICAgICAtMC4xLFxuICAgICAgICAgICAgMi4zLFxuICAgICAgICAgICAgMC43NSxcbiAgICAgICAgICAgIDEuMTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuNixcbiAgICAgICAgICAgIDMuOTc1LFxuICAgICAgICAgICAgLTEuNTUsXG4gICAgICAgICAgICAyLjMsXG4gICAgICAgICAgICAwLjc1LFxuICAgICAgICAgICAgMS4xNVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC42LFxuICAgICAgICAgICAgMy45NCxcbiAgICAgICAgICAgIC0wLjgsXG4gICAgICAgICAgICAwLjcsXG4gICAgICAgICAgICAwLjY4LFxuICAgICAgICAgICAgMS4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImN5bFwiOiBbXG4gICAgICAgICAgICAgIC0wLjQ1LFxuICAgICAgICAgICAgICA0LjM5NSxcbiAgICAgICAgICAgICAgLTAuMSxcbiAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAwLjExLFxuICAgICAgICAgICAgICAxNlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjeWxcIjogW1xuICAgICAgICAgICAgICAwLjU1LFxuICAgICAgICAgICAgICA0LjM5NSxcbiAgICAgICAgICAgICAgLTAuMSxcbiAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAwLjExLFxuICAgICAgICAgICAgICAxNlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjeWxcIjogW1xuICAgICAgICAgICAgICAxLjA1LFxuICAgICAgICAgICAgICA0LjM5NSxcbiAgICAgICAgICAgICAgLTEuNTUsXG4gICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgMC4xMSxcbiAgICAgICAgICAgICAgMTZcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY3lsXCI6IFtcbiAgICAgICAgICAgICAgMi4wNSxcbiAgICAgICAgICAgICAgNC4zOTUsXG4gICAgICAgICAgICAgIC0xLjU1LFxuICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgIDAuMTEsXG4gICAgICAgICAgICAgIDE2XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC4zLFxuICAgICAgICAgICAgMy43MixcbiAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAwLjA1NSxcbiAgICAgICAgICAgIDAuMDZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjMsXG4gICAgICAgICAgICAzLjgyMDAwMDAwMDAwMDAwMDMsXG4gICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAxLjE1LFxuICAgICAgICAgICAgMC4wNTUsXG4gICAgICAgICAgICAwLjA2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC4zLFxuICAgICAgICAgICAgMy45MjAwMDAwMDAwMDAwMDA0LFxuICAgICAgICAgICAgMC41LFxuICAgICAgICAgICAgMS4xNSxcbiAgICAgICAgICAgIDAuMDU1LFxuICAgICAgICAgICAgMC4wNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuMyxcbiAgICAgICAgICAgIDQuMDIwMDAwMDAwMDAwMDAwNSxcbiAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAwLjA1NSxcbiAgICAgICAgICAgIDAuMDZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjMsXG4gICAgICAgICAgICA0LjEyLFxuICAgICAgICAgICAgMC41LFxuICAgICAgICAgICAgMS4xNSxcbiAgICAgICAgICAgIDAuMDU1LFxuICAgICAgICAgICAgMC4wNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuMyxcbiAgICAgICAgICAgIDQuMjIwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgMC41LFxuICAgICAgICAgICAgMS4xNSxcbiAgICAgICAgICAgIDAuMDU1LFxuICAgICAgICAgICAgMC4wNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS4yLFxuICAgICAgICAgICAgMy43MixcbiAgICAgICAgICAgIC0wLjk1LFxuICAgICAgICAgICAgMS4xNSxcbiAgICAgICAgICAgIDAuMDU1LFxuICAgICAgICAgICAgMC4wNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS4yLFxuICAgICAgICAgICAgMy44MjAwMDAwMDAwMDAwMDAzLFxuICAgICAgICAgICAgLTAuOTUsXG4gICAgICAgICAgICAxLjE1LFxuICAgICAgICAgICAgMC4wNTUsXG4gICAgICAgICAgICAwLjA2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjIsXG4gICAgICAgICAgICAzLjkyMDAwMDAwMDAwMDAwMDQsXG4gICAgICAgICAgICAtMC45NSxcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAwLjA1NSxcbiAgICAgICAgICAgIDAuMDZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuMixcbiAgICAgICAgICAgIDQuMDIwMDAwMDAwMDAwMDAwNSxcbiAgICAgICAgICAgIC0wLjk1LFxuICAgICAgICAgICAgMS4xNSxcbiAgICAgICAgICAgIDAuMDU1LFxuICAgICAgICAgICAgMC4wNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS4yLFxuICAgICAgICAgICAgNC4xMixcbiAgICAgICAgICAgIC0wLjk1LFxuICAgICAgICAgICAgMS4xNSxcbiAgICAgICAgICAgIDAuMDU1LFxuICAgICAgICAgICAgMC4wNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS4yLFxuICAgICAgICAgICAgNC4yMjAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAtMC45NSxcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAwLjA1NSxcbiAgICAgICAgICAgIDAuMDZcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiZ3JhcGhpY1wiOiB7XG4gICAgICBcImJha2VkXCI6IFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUnVBdUFBQlhSVUpRVmxBNElOUXVBQUNRY0FHZEFTb0FCa0FDUGlrVWlFTWhvU0VSK2p4QUdBS0VzN2QrQ1M3OEMvcExNWWYxLyt3ZnJWNUIxeitzZjI3OWQvNjkvN1A4VjFnV3hQYlgrWWY5ei9KOVVwWVhtUStKZm9uK0svdWYrTi81WDkvLy8vMDcvMlAvQTlqMzVVL3l2dUFmd3orSmYyVCswLzREL2MvM2YvLy8rendvLzJIL3Jlb0wrVi8wUC9ZLzNMOTgvbXMvem45dS9xdnViLzVuOTgvdy91QWYyRCswLzlIMWx2WVg5QUwrZS8yai9yZXp4L3EvL1gvcFArSC8vL28yL1pyL3gvNm45Ly9vYS9tSDk0LzdmNS85d0I2QUhxNzlLLzdqL1pQRXArY2YzWCtuL3R6L2ZQYzNyQmV5M0tBaUkvRWZ0bit6L3VuN2svbWQ4by83M3dOL0tmM1gwQXZ4UCtMZjMzKzBmdVIvaVAzYStseCtqeG4rVi9ZWDJCZlliNTEvci84RC9rLzJYK1FIMzcvTStpMzlsNmdIK0UvdC8vUDhzVHdVNkFIOHAvd1Avay9yL3V5L3huL2svMHZvSi9NZjh2LzZmOHI4Q244by9yZi9WL3Z2YWc5Rno5dHYvK0pMZ0N6SHBWMnp6M0hudVBQY2VlNDg5eDU3anozSG51UFBjZWU0ODl4NTdqejNIbnVQUGNlZTQ4OXg1N2p6M0hudVBQY2VlNDg5eDU3anozSG51UFBjZWU0ODl4NTdqejNIbnVQUGNlZTQ4OXg1N2p6M0hudVBQY2VlNDg5eDU3anozSG51UFBjZWVteGxGZERHazlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhTYmxsc1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I2MzVqMUVPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYrdzB0YmRIMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDF0RFBBZFdQc1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRcHBVZzlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZkVhaG1KS2FUMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDF2ekhxSWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlocGEyNlBzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cmFHZUE2c2ZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaHp6UU1tbFZwZjFZK3hEdXZzUTdsSHE2aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloSko3b3A2OFhaR1ZlWUVlUkpUU2V4RHBOeXkySWQxcFV6OGRzbVBrUHBtUHNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYwaGowWDBxWGpxTFdSNElDUElrcHBQVy9NZW9oM1h3aEpLdTFlTko3RU82K3hEdXZzUTdqTTJWU0FITE03WXNFQjNTUkpUU2V4RHV2c1E3cjdFTzYrdEZMV3hpSllUTW9VVTQ3STF1elo3RU82K3QrWTlSRHV2aENYVHhiQkVsTko3REZJRitENSt4TnR2Umg5ZTdGT2l0VERmZVp0S1hUSFlXTjRmd2FDWXE4VzlxeTFyMWpBNFp3c0dsR29LV05wWGNQZ2JyLzZwRVdrWFRIcXVId040SmVMczhsQ0VmeVRlY2tzV3RzNTd1QVpWUHRGTzR6TFZOSlFTSk9sSVVteG5JVHcxdXpaN0VPNitJMURNU1UwbFpzWkEwWDNaczloaTFlaTlZdmIxWjNxMHJWOVdXOXUxQmRZUjN2aG9oYkJWN0wyVDlPVFVsamdTbExQaWZlRkNkL0FLTDRnSU1CaW9xWjlTUlhmZ2RRRUwxelR0TVBxWCtLUGdvQVJGMDhQYWFHKzRjM2IwaTN2bHJJbFBtYkN0dUdLYm1YWUpYaEl5bWJVU3N5NVBoZmtvSlN1dVVDODlxeDlpSFNibGxzUTdyV2JHUU5GOTJiUFdwbGtkc3JSSW9BTUJPZk8wQ0JlMDBsajRNU3ZHQ0FLQzErd3dhL3RxZEIrZWp4NUdkSksrNDlpbEFpaWd1TGNnUGsxZUxwS3JKZGMwcFkyNmhZWXJUcG9nay8yUEh6U3NBMkczbHBMWThua3FadStLM0xTQ0Foc3JhM0VKKzIyWmdjaG5HVW9HSmJmV0JERDRVV2kya3MxWEV1K0RrV3RnSHREWjdFS2FWSVBZaDNJckQyVC9CN3MyZDlMQmhBOUZSQkcrQkxDWUYrMnFrZU5RN3MxeHAwQklvTWhLQWt0NjhKR1ZtNCtWZUxQeG9GZ1FvMGpQbW9QVUZkQUtURGNNSWN3dUdQOHRoVkJpQkoyY3VJZDE5aGc0QUJ6Sk5jWk9HdVE4Q3NRMGgxTS9QcVZHSTVCTDVhWUh1RnJGYis3TmxvWjREcXg5Yk90eWhrSldQc1FtZTJOZ0kycWtaQTdzY1Qwb0pLV3k0dWdhTHVXd09lNFFUVkUvNE5tbGUyQmVMSnpiUVRQb2xjTVozM2tyb0Q0SlBHUUxFOHJoU1owRjVxMjZicGxabW1NSnQ0ZW9iUkM0c1F6RVc4WFJKdDd4ZmtsTFhwRnJzMjhyUjFHRTJRZlMrejJJVTBxUWV4RHVSV0hzbitEM1pzNzZZbkpDVjV2Q2NObnVOQXFnT05ZV2d0QytlRjBza0JreVM3YTQzaXVLMlNHSDkyRk9xTHpYeHlWRmk0Q1JydG1XR2IvTHZSMENva2lVd0VsVlhzbEFVWmZqZ3NCYk5PMnJ6QXNINm9YY0V1Tm1JZDE3NXlpaEZ3MGQ5aG55ay94Z0Q4eHJVTDkybDcyYXM5Q3JEWVNVME1lcnFJZDE4SVM2ZHFueGpjRHF1TzJUSzdpbTlMT2l1NjRpdHNORm5ZaTAxYlFOdG05YlU4b2UyNkxRTjZaM2tlaGlYbXV0OXljZzZqTXYvdDRQT3dWQXBTSnF3ZnNTbjI2UktaVDdaenduZGFrMHlJdmd2ek44Q1pLU3JsSVBibGhvTTFTV2lZTEVvOEVoL2lIS09JMUhhZFpOMHlZS2NCaXBLNGFuNnUxNS9ic0RZOXZPdkNvWkZCQy9DWXdYb0ZtOEl0N0dYL2M3aWRxWGxZRE5aOFJsc3JlSHE2ZktMdTl4bVd4SStMdVJOSHVQbHhLZXdER3dxbitTZlgwT1dqZHZCRHhNc09TSWtwZVZRekVsTkpTSndkM1NhUGdkVngyeVpYY1ZCd09uVDE3WWxKa2puc0J2S3A1SkQ0Z1Y0NFpTU2FwN1JwL0l0UXJqS2JtaVFuMFdVT0F0blRpalVFZG9rUWJTSS9GRGFXTkNVbVJzajdHMTRwZmVKNDVVdEhaVTFZUUg2eTM5bFZSMWtLVC82UWNYU2twSW8rdFZBZDlVbjFPdWFUNjBjMkJPNDhqUCtpd2lEOUZycEQ0SWpuRXRmZXdndUFkSXloL0g2YXpPeGZuOHd4MVkrdEc0TUE5ZHVSS0huQWhqZ0FSa0hLUUduOGVaQlg2cjNGVC9ROVk2c2JRendIVmo3RVdwQzVPUkpUU2V4ZEpENFZFYTF2TUVlVVJvTExGei9iYjYya0FmaGtabXhWSktkNkJhb2pKejZMN0VPNit4WDhvZDZnRWpyTm5zUXBwVWc5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZFYWhtSkthVDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gxdnpIcUlkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aHBhMjZQc1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3JhR2VBNnNmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloVFNwQjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K0kxRE1TVTBuc1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnJmbVBVUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdEU3pUTFdvRlhpdldqNEhWY2RzbVYzRlFjRHF1TzJUSzdpb09CMVhIYkpsZHhVSEE2cmp0a3l1NHFEZ2RWeDJ5WlhjVkJ3T3E0N1pNcnVLZzRIVmNkc21WM0ZRY0RxdU8yVEs3aW9PQjFYSGJKbGR4VUhBNnJqdGt5dTRxRGdkVngyeVpYY1ZCd09xNDdaTXJ1S2c0SFZjZHNtVjNGUWIxaG1Ja2lVMG5zUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdU1BRCs5N2hwTHFlUXU3Vm4wUUFBQUUwUHg0V0lac2VZWkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFWYlB1MXVKays1cXZNamp2YkN2REpwN1hJOWdhcitnWkU0bnhWRHU5N1ZDK2o3bTBYTUtDeEhsZmN2aERXSC8rRnJwTUx5ZVdJTGdpV0hDUGRuRVM0NW5SdXUxSlVjZU1ZUTB1MGFMMkhuL3EwZ3daUUpRSzBDKzd2b1ZpOHNySWxWNUNtaVlxd0FBQUNKM1dlWEczNk5DSUNEQmd5ck9vWmI0Q2pSUjZSMEZuSlBzQTZmM3NDNHpSWFRrak5nRHQzMmlIK1MxbUo5dDZUbWtZYkRYNE4xT2s0K2VUWVJ5VGV2QVIxZmVyYWVXUlRSNC9zanh0SDdsc0tLa1JvWkVHWEIyaStMTlVoZVY5bFAzTEY0S2Voa1ZkMGViK0RmeEY0SGxPdjVuNWtIaE1heHpEbElBUTM4WmdvSHZ4aW1vQjZGNGpWU3JNZ09xc2pQc1dmZGZoNmNvb2k1UkhlSXJIT2VnbnJqM1AvM3c4TUdxYk1qdmhWWU1DRXV5OUlHcGdBQkg2VFlURUtKaU52eWozRFJwMHlsb1V3VkNSTWROa3hDWEVJSVovV2R4SG85RjlRdEhic1E2bEg4VHFVaE9wZENBaVFxZVY4UDFiNW5hMkd0OHA3T0N3TmtlSzN1NTN5bURNc3RDTEtQZVMrUDJVOFo5aDNLV0wySG4vcTBjZnQxQ3AvdXBSWVBIOHd3MDgydkFFb0hPbUZMRDJLUDNCWFQ1dmIxNnY2SFhpV0I5ZDBjcWtKMHNiNHVaSmlGai9pY2NHNEZpdDNodEJ4Y3pBaXUvSEV0bzBBdFdUemo1ZXV4NzExT0VZRnRTc00vMDB2KzV1b3pqL0ErZ1VrRzBTaXFZbW9SaTVDOFlpUzJGSllkWmVHaUJGeWZORlBDQmhmUnJIUkxzY3dpY3hxVmJhb1dlQmJEcTVBcUl1VVVSYUJOSzRETS9JZzdCZm44ZkNOZWhkMFhoRVhKM3poQytQK1lPeXByWEFDelp2ZmFaMndqa1o2L0t0WFE1TnU4TXNGUlVVWXU0b2FXL1ViZHA3L1VST1c2MXoyZkRDc011dHplTEJlSE8wS1NGU2R1N09HWWNmamdwMFJHVzRUZlkzZUdSVnlzKzBJQnZHQy9DZEFCQ3FXNmZqalBqOTc2ZzdHUm80ZWpnZ2xCS1NXaWc5UTRIRTk4TW44SEpzenZrMGc5YlRXR2M4Q0NiUjMzbnh6WTZ2Mk1HYjE3ajlBazY2YjNZUUEzSWJKZ1lIMkkyQ2U4NzFTekxtL0pUQlVOVnNqTmovNEcvTWtxbHh1OU5uZm9URGZSaXh3NmxQYXNVaFhxN0V2UFhsLytmbjF1cndaMStyTytCMFVDNXhOR2lneGNNSDYwVlRENUh4M2J2WHdzZFRWZXpXbjNrUDlNVlJyYzFwTU5MREZ4WmJrUGErRzVMWTNvOFJEODM2eDFXUlV3NFN1SVNxY2VTWjNlVUltWldxakJFVHgwTGdRWkoyNGJBR1E2N1NlTS9TUWw0RFRyN3c0aEdrcU5XVU43d2YwT1o5ejJ1ZUlCOU9lbXpkU05sMm1QTHQ2cFRhN3RQT3d4NFJGaFNHemsrdURYSllLV2w0cFErL1lqamhMaFJ6S2RmeVdXWjVWNE1hWjVtMlJXWmdISVF0ZzY0RzRlZDVxeDRVQ1kwSk9UYjRLaXFVL2RaVEd0ZUdkRzJPbTYxdkZCZXBGRlFLT2VCSmp0T2ZqeGIwWWFUMktESi95QWtZd3JCaHNKOTFyQVJjVXJaeXV3Uk9abEI0UU1LM0RWaE9rWFZQNkM1MFUzNjNjNjZpSWhYQXBtdEhQNGtEMEMrZmwrQnFBdm0veHVBVnN2bm1ONVpldDJLOVRVdk9HU3RPSnUvZld5UWpUS29Pd1VIS2JPKzlSam9ISk5LdVlVcTR0cTQvS3hVQUZORVE5MTJYbDlPNFVuV0xmN2JkN2szRldXMXlqdXBKVy9EcTdzdFdPMkJTZjZ6b1QwK3NqdDN3QlFraW9TNjkzYXFhemwvUXFDUzluUVkxdUlPbFhqVnUzNU1WTm1uSE9uUnFYUG4xK2QrUEI4MmtRYzhhSDc4a3F4VGFOZUlleWF0S3FEbVhBbUNIZ2grODB0WCtoVlFzNE5yK2drVUZzMHNXdmUvaDNsQU1LMVBZSDNXRFdZemRsMXFIaFJiSnFWMmdvS1NzOXU4bWdUa2xJSURjc3EwSUFnMlNyWGMyNisyRmlJNnhYemdlZUFEc2hmSk1wdHlubE5ocHk0QUFyRzl5MnRYNEhWWk5OOVVWWnlVVnhHUjRrdjhoS2gyYkpsWVVhRUx5Vk9DLzl5RGlpemZoOGJGV3ZnT00rTDVqSXFXaWQrMFl2RG1USnY5THhZa1ZvSFRseGJ0TFlsRTBvWGFLRWRBKzFkZ2o1bERXTDJnRTJpOWw5b1JmSnNvTEtKUDd3dWdlRWpPTEVGQ28vOTVtcW1OVnY1VHRmblh1VkFkOEh5VGY3aENFVThMR2VBSURrdVY5ZHRvdWJSVVZvT29TeWlwS0d3QUFIb29QWmkwaWJSMU5Pb3ZURzgrdTZnZnJoV1Z2ZFJVUU9TalgrcU1JdHp2Vm1NTStOa3BmMmFVYk44U0JGd0FEd0t3UjU3aXZOa0t5Y2pBT2h6OTIxa2FhSG40Vzg4dE5oTTFzaXNCZno5a2N4SkU3ekptbWJIUzFLbnBxMGpORExnc3pWVGVnUUd2WklPQTdQQ2hVbjhVZmVHSjZDMWowNVhZdkVYOGxQVUo5VlNCZGd5c25WMjRrVVFqbDF6ZzB6Vm9BbHN1RTZOTnJ2WVZqOGNvVHdWOUNZVDlzamtBRG5SMGhmTzJkOGNLdWlFelpvUDJGR2pOVStBeXRpZXk2NDRNRHQrWDdtWjhuN3AvaEMwdkJERDFhbWhieUJmSGtGdFAzVFNua0NSMlpIamwxNCtSZHJIcHRacHNZOFFzTlMyTWNVSlNFRTdFRW9UZ3BHTjg3emkzMUJlR3F1VWIvRUlDczhCVUd0eWRkV1dqcHlZQ3RLbkU0cTlqaDdVejhITUZCUjJScVlJb0RPaWlSbHc2S0pCckkwRTEyd2dGZXdDbVZoRG1yTTRWbmtEQmhYMFlGUnMwKzFoaW9hME9XQy9oNzVpMHpCSHhsU1JDd2JJYVRpYmwyVnhFcmNvODVjVWRxQ1dTd2xBZ2NYUFFVd1lyV0ZoOThDakxtTXVZeTVqSHBVZ1E2UDVKNWhCeTZJc3lrMUwvUnhrTFJIM0NmL2xqdnhiSjJnN3E3RS80Z1NsYnhJVFpscFlucDdSam1IY0hKSnlIV0FrQnN2RnJFVS8wQzVPdjBZTjlnSnBGS0w2dmVSZm9EOTI3RElOTUpNT0o1SGltRXBUelhnL2JHVDhIdXRwUmQwR1JVVjJ2L0YwR0RxMGtZbXgzS21kN0w2QUhmN2FrOEZvUmpIQTZUWDFRcnNZYTluekJQNUx3QzZiYVZlaFlFUlYyYllySy8wd0VBdUJTTkJPU0lHVmY3d01aZTM4d0txMDZPYUE3ZEs2VG54QnpUQitDejA3RVhqdkJUTGg5T2gwUlNGZEVZSVBQZDJVOG0xdXFRcENuWVJhaFFmQUFoVEhkaktrbGszV1JHNHRKczlTUG5pam5YQzA4VCszSURNUTNTbGNQUnYrTTJhNUJid1MzYW5yWWdRUlVRTTh2VjdWZnFJT0Q1M3MxZitob1JCVHlaSzArbjR2b21WTTlHQWpIQlJ0NlA5VFRySCtOazc3VnJYa3BRSzJZVGlkTWFqMnNoc2kwbFpzL2dTZG91Sk4zanZOUjJUVTFXNk42UVVxbHk2TjUvR0d3OUx3UlBIVmhMb2JMOUs1MDlNRTBzNUxWZno3SXIvTk9vSFk1SGdsWUg5djhYbE0xUWx1K2VoRm9zM21Nb3RLTTNpWWJwTEdMY1hyS0ZFbTdIa2h3a3JCUzZyL1FONFluTDVlTzVIcmNTbUFUV0lNazF5YzFiTmR0YVd1QzZnM3Q5Uit0MzNRWkNzd01OWHdCdE9GMDJ2RUZzeUJWYW5GK2ZpZlljUnRYQlV3aFVkRk8xbkpEcWhITjdDNzQxQTRVNHE2T3cyOGN1bGN6ZXR3R3NVZEF1TW9qZnlWejRnSk9ITStLY0ZhS1h0QTlOczc1NTNwQVYwN3N0T24vaEtSK3IxZWxUNjROYjFkQjJjWWZrcU1xZ2xERDZwaHBQNXdUZXduMW5RM3dEUFRRL21pKy9ncTEyNXR0azdodXBOa2M0d0J0RUpoYUhyQVJKZUdIVkNqV0xEbzRIVThVK3FWVWRQWVkyNkVEelhSYndkbVRoY011YWFSTzBiUXNBSHJDamlWLytNUkthd3N6aUx2eHJ5ZjhQei8zL2I3YklES1hPSDloNmZZT0hDSTlRTStOa3BmMXNEL2JnREpoK1NDTGVuelVteEpxT1FvUG9ZVHMyelNxYmRCNnQ0NU1VeFVSdWdkSE01S1dLaDU0aW16Tkw5WVMxam9MZ3cvQTluUWR5WXJpM09PcEUyVHRoY205WlVlS2QvVjhEc3FQYnd2ZEJDSUU0RUpQSlFOVUpGSUQrMjczaEZnNVVlMysxLzJKQWRtc1ZYc1BJbStydlNYMld6VGpqMGZ5RForNElBRVJvNTUrR0labzdrR3dKNVVSdHJmV3hvSkFMZVpDejgvdlprRTI0ZGtHOThOeXcwWitoUGRjbzd1aFpOeDdGdTNmdXpZSVFsQTdWS1NDOWhQOWlZZzliYVZmVC81SFlBOHRTemRqb2ZEZFdOTHJNNkoyelc1TlhaMkRNcklad1VWWEl4ZXJXdUdyaXh6Q2xiK3ZnaEZUZTNZRWJoaGJ6dGlHT0RXMjBvaU52MkUrNjN6UUd6cE94dTRKV0tuU3lUZ3BlaVUyeGJxREpUbHhjemFkNGFKZVI1ME02dmxmSmFtMnJEbGN1OG9PdCtjQkd0LytQZ0tsZlZnNGtJR1UzWm4vcGZHc2taTklIQkhwSTRIbjhZeW9OQU1UcUplM3IwWUZ0ano5SXdxaHNRam1wbG1JckhhL21pWTM3cWRuTFlFLzkzRVBlSmNOY3d2eW1hSDhsWEsxR2grUFgyZEdQSmxidTZudHd3bWJGRlp0V2oxQWZWY3pMOW56ZDE0bFpCRmtiaG1tYU5oZjZveHR3aEwvVzZYYXNDN09xSUgxbEtBNzhKeldvdFRJa0VmNzNzMFFxUmxDS0w0YTFrdWZleE9zNzd1bEE4ZlQrN1NyVjQ4TUpOQnBBK2dHTm16Y3MwMnJLSVRGMU10Y3dPQ1dFRU9vR1A1Zkx6YWwvaHJlWGRxZ3FEK0Y0UDZzOWYrUFJXZ1lyM2xZMDBFbU1Qc3g3dUlDZnNHRk5wQmo5NUUrTTNUekZPaUFIbE1QbXdpcFZud1k3NlJnY0xqK2J0NEpuZFFqZzZ2QXVJeHZhdlhndy9yMkVNdW92NjUyQzNaUGVCSFFESWNGOVJjYkFlZkJPb3d3enh4MG9QOENpQlEyemJGWTArb2VtOSt3enNHWHNRa3c4cjlyNFhhLzAzV1Q4VXJHYmY0N1ZzNE82TzVPcVR5alFCNkEzYWkwTTRUMEQrY2k5YzhrdUZzemJmQmwva2YrVXI1aFEwUForRjRuUDRucXUzMndlcms2WjExQXdCL2xZbXB4R3JKRGN5Z1ZqbmRuRTFzMEVBTXdIZXhhOURNckNGNnY3bFdrbG1MR0tScTBoc0d1L2t3eVB3UEsyWnJwNy9hWXdKMGhIYy9JUWE4RFZXNkQ4SndWekFuQ2NCWTd0VlhaSmFDRjJNNVZqR0krMkxpUFdiQ1pBTjVQazlsOVJZRm1zcW9xVmpIL3p2K0Nwc1cycVJOOGVSdHZxM1VIWlQybFJML0ZmSk9WMXVZcmt5OTZpZ3JkM1lpUHpzUm5VTlMxdmZZVmZpb0hzVWc2SlFGUUtrL0xvd2hVMDhwRnFKZi9KYW5NdEw3MlpzWTFOd0EwZ1BGR3JZMnZEOGZ1UXJyWTJydTFjSEpMY01MQkJFZGR1Uy9hdXZ5VHZhNmdYVVhvOElXL1ZDbG5nMmdJT0FXWU04VWZSMVUvbHk3UzA5eUMycThEaVJJc1B2YW5MbFJUMnZSQ1I2eW1NeTZmeTdMVTZrMHRIQVJZaldGclpGb0twYldHcFIzWVI0UjNwWkg2NzFFYUxLWHBuQiszWW5mazl6OWhKMk5kVWx4b2JQRE04SzZrRGRiK2dBQXY5aS8ra3hzVGJEWmVFaWhrczloT20weDlLOEt5dk51R1hRYnRwczNZL2pndTM3VWlVMXFmM0I1TGhNTWs5RDIyc1NRRnI0QVRiS1dMQ1o1OFh2eWpRVU9JMnVkRGR4M0ZDVllnckN0cGNsYXZCdmQ4Z2c5RW5sUG5xRE9Rc0kwak9yTDBGckJnK0lxejNxSnM0VVlBWlY3S2UxU0IwUmtLZCt6NWYvTU5EOXUxOE1YM2VVMUdoSndTMEdZU2cyQUZXZUVjMVdOM3JpUHpVcEpzYVdhcjYxTGRXWVdOT0ZrV05FeU9iczNLTit2S29JNTlSMTI2a3BYRUlMWnJJT0t6Wk1VRlNTbjY2WUdiSVBXUVlrSkJJcGNTM0ZpU2wxVStiYVUzRzI0Z1B3TTFxVHQrUVArckJSdHJQenpidmFtdmZFOGtWd2lIRWFwUktKWUEvVDR2S1Q3M1I2UUVxb3VmNXgxejM0OXpsWU16UVNhaVhYOGlRejAxU29CYy94cXZSR3dPMnNDQXFUdDdrZEE3bkR3U00wZEN1d0l2Y1lEeEZEQUhPZWE3Q3plRnN4S29zOGJzdU9xaTN1UjRmS0s3Nmp5cE1kejlrK0pEL0xhbkVjV05WQ2RpcmNZRXl6ZWZVMm1SL3Q3Nyt2UjdaWDdFVTBFZE0zNWJzcENQWEJGQ1ZKR3kxMjNkUHhld2x2cDBWRTV3OE1yVm9MZjBQRllRenpXcXE0NXZjUkhjamRIQmpWc3VWS1B6cXMvVVZSR05qeGtSNVFQcnpVcTIvNURsYjBxK1oyWnVBZGRCc05Pd3B0dzZWQjNGT3pNRnV6eGF4aitQbmEzNzdtQ0FNMGhzQ0R3aTl0dkllWmNWMmdWWXUwWjlkVytVeVZLZWZmNHpZazBZUVNLdm9qcHdKMGYvYTZBOUtwcTlMa296aUc4b1Q1cU1yUjdlNE1xdUJKb0tGaHppYTJBeU5BbllyMnBtaVZrUmNWVUZRR0RzL1hrUlhMM05ZNTRJTWxTS1oyVmFDczE2cjNtOXRveXcrckdDTEhNL1l1SkF0MGNUSk5PVGVXZUZFOEJuSlZVQ21XZWRlTTdjNlUzZklhdUVDNGtOYzBWQmk5VGlPWDA3QkdNamJRKzRhdVVIZ2FIbVMwT3k3cForaDhHUFB3cVRNZHhBSUhRTkNBaFZBSEk2am9VTHZ1bFl5eDR1Q3Y4TmV0UG1ZQUFMK0lxUjRVcVhRZzUyS3NEd2FkT2FBd0EwNFNLQzNpK1k4MW9jVEZzeWFpcitUako3eTRjbWNuanFUTU52Q3gzT29tcWo0VkdPVXBCanpxaG51eWZjZTRaaDRKSnY1WHhkR1NHdnFjbk1wYWpWMk5Hb0NGMFdPOHJmZ3IzL1ZPU05CalZvbnRneUFGSkN1QXJ5emI4dnBGY3BXNHNjOHMvN3VGUmlPRHJhODA0cG0weVByVndsMDdXUGVwbDJ0S1RaUER0NlV6N3lCM1hXemM1L09SOHpmYnYyeUtJYzdBQmwvRFlsNmRZc1hyanhUeUhzc3dLRFJSRTRURGR6Mjg4YUlSN3hiZytoZFRjUXdQZDVBNmYrVGVaVTZxcXQzc1F5WXQxa1lCLzhZaklzQzUyaVJqcEgyN1BUUWVoVkE1ZmNoQU54YWtuODVNbVZoclBpUFVJN0RLMGV6U2F1Q2FvTEM2c2J4Zm9OTWFydWQ5b0tSRVo3OUtIbkd3QWtXdlZZUVQrLzRmNlJBWkNxZlVJZzRpNXhMbzBlanU0VTJsUTAwclV0V1A4RVFIM2hMZFI1bVQrNllhYUdWd1pNdlhXM3RERC9nNEY2eDIrWlgxSDIzL2dCYzJNMlB6dlhNVVE1d3hyMW9KdnRURzFlWGdpMXVQRTJ2MWtjMHJnaTVBeU9telhDLzVoTzJUczNJTHFPdjhKLytodFlLTzZWVndFSkthZjVxQ3V6QXR1ZDRrM244aDN3VXQzN0ErZTc4ZlFXTGVJc0JWSGYwTzNlZ2Vxb0k2ZHNNM3pIbjJXblI1cXdZTlBWTFY5cjJCV1Zja2dzUDg2VVNkQTBVQlJWOWgrblpzQWdseGxZZHdha2Ywc2ZMeElaYXBsUG8vZVE0bFZVeXFqcDV3NlpQRk1BeFVFUzRUbndlVG5INEtZbW8vYThsOUxEb0FLc2NkSTFPL295VnB2ZFV2Y2J4UTBPNzc5djB5WVJOUEtHRlI0RytjdGlFcjlHcXU0QWNqYVhGV0hxRjRhZnJIeHAwcmJFZTNxQlI0V2tZQTRpTHRFa2YwZG05emZnbERlUE5TdFdSRTdWWHpJUld5cUtoQitjUUMyMjVjRHdxRExmc1ZsZXMvMEV0aElhb1l6VkR4ZVorVTlYSFRWcWRMam94Ym83Znk0dWdHVlZyNWRDMHdwa016cGpVYU91bHlTT2RHRUtzbzJLQWdUVVl2QysxMDR5SHE5MTQ5cTRVQkFuWmpDVE55R2pvRlpmZVEzUGliYk5CQzNOOS90VGhGSzEwRDhmZUY5RXFsVXlDd1BlWnhCNkp6dVk5TnJ2ZFlVS1ovenBocVcrYVZOeGJVWmRaK0k4ZnZMbmxMV2tpamYwL2VrVEhsWngyR2c5TDFQZmhlblROSGk5bmVrWG41elJvejZMeVlmZEtzQzZnang0djF5QlRUYnA3UWdmdFFJRndaOTA4eFFMUXdsNERBaFQxVG5PS2g1VXh4TzlUdDBwSmhQWE5CdHlEaFdUNzNuc3o2TDZZTnAwM2t6eU1DVk1LNEpUMjlGM0h4REhvNEkvK3B4OVVYNnBTRjdrb20vcTEvMDY5MU9LZFlNblhONDM2d2tyNGFwQkZQZFI3YUl1V1VvYVFIdVpJQll0QmZGN1NhS0RydFk2enNHK2JZblIvMTR5YkNqdW5BUEpsZk1BRzExZW9meU5pUWJyN2NEOEx1cnZ0S1h6MkZHOWtUc0JlSDZNZ3FXQklJdVFVYXZPbWpzRVpuaWJZSDBYNFBRemQzRWxPektoY3BxSFZsd2YyZWVSSWV2TnpPRmYrQzlyeXR2U2pEUit3Q3RNTGdzaHAyaXZIWVV6M3ZCT2J6dTU2a3NyeTdiSURpQUJlZVZIOEQzNjhXd2xMQklteCtaQ2dvbHhGOEFpQUE2SjhTUUt0R1R4WEpFNmlzb1N6Nk1ncWlMdWVCZHNhakZEanNnZitXdGlPVGZmWWkwT3NpSnpRYU5EMU1HSDlHb01UVmVYTnZISDhrbmYyUlpOOFNuYzM3MzhONGlhcTQ5cEg2ZXdSV25yTUlxNVhMcU15aWk5em43QVZNdnVwQy9OSW03VzhNd05HcUtDOHVYMDhLVjNadHlVcDBGR2xIaXRsUHRKcVd4RjFKMm84NXNWVUtnYmxZWTk0WEpqZ1ZxeDFwMGx3U1NhNlA5Zk5BSTVZNG1wT1JXOTJxRktweWlJUDJ1Ni9XWXFyUmRQc2UrMTZCNVRqa1c4VkpNNzRkQ3VHSmNXdDNneTUrT29jOVVUSVByVFB2Mi84c3JqM2RqTU12c2dBdi85aS9hWmlIQ2FZUjNIWmJNVDdZWTRINjlkV0diNGdqUjFzb0oyTkhOcXptd2tHYU9mOGNBUS80UEhBQkFJWVdLU2N3N005ZS9oMS9TU2ZWdytJUjdQekdSTit1aVM3NGJaZThvVDh3QjFOaFMzUmdxWlFiNkpPM2hFbXZ6QzJUSzd4blJ2cStqRTRyN3hZNldJTi9xSCt2OUJIYXVwUCtwMFJlaHhrYUxtYXBvamVHMGUyS2twTVJPZ0dkS1pGbnRQL0JqMkI0QmYxcWdxbnVMMGI0TUVVa0E3NzRYOUMzSGtHNGxDSkN5TExMbXh5OHh1emtoaUJMZE1yWW9saklxb2lVTFNrc1VKT0lPN0p5NmwrUUJPVGtZeG95blV3SjFCYXJZNVg0ZVorVmM4cHVEWXY4T1VkUjFIVWRETjJYUHZHTDNuUERHb2U2MXBIeHNXTW03emtDK3VUNHBGT1J1Yjg2UUg3YXo1bVpaSXJjT2RYM1JPaThUOElGdGo4ZFBHQUVTVncwSnR1WEZEaW1KektJRm5qQk1SQ3NFZmJ5MkZjYXM1L0JBZ0FhUS93Qm5VaVBIRko2TGQ5N1ZaWGdoMVNqbTVHQXJQOFZPTTVjSDlCZE5XYUIwT2xVbURkUUg2NGg3bVVoa3NYK2hSUGVnNEpRWWJkU1Y5OFc5L0JkeTByRXUrbDZadXpWZldmcnlIRTAzOXFMcjdxcTR6NUY0dzlWbUNCbVBMTjd1TUdVRFBjeXBvcEY3WkNDc1E0RFRvNUlJYWdXdmR0Sk9pQ050eDc4VVVJL0FRSDJ3RlJaTytMZFplWU5lL0YxZ2c3dGdVQzhxcURiQ3BDWWRFeEhDYzFSamQ2a2pOcjUwc2NhaEZyZWdlcFF0czVkSXhLVGsyVVhPdkhueVE3ZXFtWFlSVEVrSUZqaEExdUtqMWJ5UDgwQ0RFWCtCNzJHa045dnlKYmFWQWNxZ0RBT21UWE1mNWFMUlVSVHdZOTFpTmZ1ZTVBa1hzNWVpV0l0STVLOHZaTXJDVjAyNVRzbWlyeVVndlE3cWdpQkNYVkl3ajRzRnpyc1VtbGVXVTBpbE90RnNqUWFkZXB1b1hrOVVMc0Y0U29RU2RuQzl3UkxjSjBpS1pYakpTWm1oaklxb2VrdTNUN2YwVTh5SkFaUVZxajVhbWwxVkkvMGY5L1A3dnZRMk5Ea1hHck9SYlRXQW1VZFNqOEU1M0ZWNlJ4SjBUSFMzaFhZSHFibGVidHYrbmZZenFmVnVHL2E5N3B6b2p3aVBtd0tmNDFDbEtPbUVvUi91STdxTE5EK09sTmFBeTRZUnMxVWRObyt4d3NPM1F0VjFId3ZVb0ZnOHgvWHJSRWJQNVE2ZG91dGhmSW5BUDZsZms2T0lPM3pMelNGbjBFN3NJYjI0QkNLcmp0em5MU1lCSTJGd2Z0WHBoWjJrWjh1VDZZelE2ZFN3MGZWM0g3Sm9GYldNUmkvMWlVWms1R0M5V1VvN0RxQXpLak4yT2htb01PRDhGamptSThvNDFZQ3RnYnlCOGN6dVFjT0ZFaVp5NzB6aGJuVzVqOXVweUFTT3IxMlh6dFRLZGhJWm1lRC8vN01mNm5WODYrL2Vxamk3VnorcnJJVnZOVGcvL0VQMGtCeHF1cmlFc1MxWEdzVzQvc2krL0luS1dMeFBjY3NTS1dOL3Zhc3lmVzBJL1ZmL2NoZ2FpN1BLM3I1NHA3NTNiWHhlT1ZaYmFqWUVBSWNIT3RRZEFIQ1hZRVR4RjFQYUcwK0RYcHROWG9NblpWNkRxa3laTENxUXpJZXdOeC95R1FjdTlneE5iOVFBcXJjLzdNb1hybS9aNllzSmxWSldyaTlBTlNQcXRXLzlMdkEwaWExQlA5V2FkaGhGY3cvWDlEWGdEK0lOdklKY1pLSStrOUJyYkVFVFk4Z3FBNXdEZUJyMTlBdFk3WXdHTkFNL1JsOGhOVFRPZTlSK2d2NXZaRkk1TkIvNnBPVVA3NElmMzRMcUJ4NlhSSXZDdlZNOVNLVjFudjRhQ2k5MldXL0lSNldtZzk5YnIzUUxJK0M5MlRKdnpNdkdTc21SNytZR01mZEZmT3hXT0dxUCtTczU3QXpqWWtGMGdOdmlLVlVpWTUycmZKbHM3VEpJdHpCZkdOOEkxU1Y1MnV5cmViUjh4alRjNTRYWGNFUGZNdExCRHNtTmx2bStEdmFxOWlBUGFuc0dPNjZxZHNmL09Ed2pBcWNsNmhmbXpEWStaQUdrMzBNT3FQaVlFQWFQWXRLbHJhc2ovTGtCdXp5Z3FXSTE3YU5GQytLRGhaS3VNMm1nMVVyQ0c5YTh5NnF5b1laTVNMODFISTQ3bzdYNFdpNFNBZTUrdnlYcjBTUTNJazdhTXd5WEFuRkkwa3lEWHQ2cklrRWx0bzcwTXZYMDVUdFhPR0hUZU1YMnRmQWJmSmZsczNRMUhmSVk4UXhoNHRveWhHU1hNT1Q5eDVTUkRiRGFGRHg5WmwzWGlwNkRqbS9yUWlIc1lxVnB5c0N4dSsvUjJUdGk5VTZ5UkJ5ZW9lRVVqM0tZcXRYRkRhd2ZSOHh3anlvejJuVmIxODgxUzc5eitVazJtcUpZaTJYK1llSk1CQnIvQ0l0Ni9pYXZVcGZEL1JyUENadzRIOGs2TGF3a2NaM2FueitGdW1UY2c0MzdIeUI1R2x6clVkb0lqcnAyZGtUZzIxb2NMaFpZWEhOTVBjaTZubVVOd1JsdHlDTWdaUENXeHpETmp4S3hFeEJUVHJ4bFM5bEZ2dEhaK3htMVIxbUVBTEY4Qk5JREVFVFVHSnQ2d1IrSkFTMk90Qzlkdk9CcmdjNm9qZmxoVTRFeG42R3V3TjZucGxSQjBMMldhTUorYUFDUDBaUTh4WDBLNUgrd1p1TTJGWGhGYW1OQUREVmIvVVVOc1V3YmZRYThHOGlXcExmMlNnVTlkUnBiWENHdW9SajZlc3g1WS8yMEFNWElWZ3hDd2UvR2gxRnhKSFpXaXY4eU9TUDJrTEpNSDg5YXhXdE43MXF2YnZIdHA2MVF5TksrVDZvV2tzRXlLT2hBb1FLY3ZnZmh3cUNtNW9PUzRzWXB0S1FIalVNNkdNTjhtWnRoUFppd0MxSXp3cWc2OFltZzRoQitZTGdaTHFPR3Q1TUc5cXRpQ3BmOEVKdzIyZFB0dWJma1ZUeHpacjNkckRTYzVSSHR1SEtnL0Vtd0NGTHEzbTZtVmFGWnlPSStjZ0V3OWVLTmp2WHBvUVROQUYyNWgvRTVFM1Jxc0h5a2MzNUZXOVd3bFVnQi9ENlZVRmo2UjFia0JpWGNwbmo0SU1rcWZiTDJoNFUxa3hDSkpIekFRK2lWenJpV0x0djhhb2dwNnViTE5uQlNxU3pJMG85aitzUG1RSnFjTWs3QWpyaExBSjcrL2tDei8rakc1cnhLTENWaWFoVEh5SCtTeFVrVjN3VXJpL3BoWFlpbWlXVFR0ck9LVmcrQWo3TjJKdHN4anp2b2NjdkJxTjlxME5xODF3SVdVT0krVm8vbFV4TUxMWTRzQzE3d0wzTTFqZ1hPTVZHUldzMEMrNjJzMC83QS8vdDB1d0ZUYVowOHVuV0VpRGN1ZWgrMlRodTR1dWFqTnZDRE9XS2x5WUgxcGI2RGNsN1ltM3pDUHBzWjJYQUlWNzdVVDAyb1g4aUw0UXZKTWJwcklLc2NGNFB4Q2hLYndRcWJpb0h0VHBPajErV0ZxaWdya1krbWdieUdnaWkyajl5SUhpbU1UdnJmRFg3YzdxSUw4MVhNZUNZNW03ZXoyNUUrajVWMlRPVlRxR0d1d2M4SDF2b3FtcmY5STNveFVuRGhCL1kvMTBwamVIYlFRc2IremRBVkxiTlhiMURiOWZZU1dRQUNVSWErSjBESXpqOWpxNWZxa2l5eXdPcWQ0S1pyZFQ2UGphYndrMENJemVIYXRuMDYzTC84SDN2eHBsOW9NUDJqTTJqQmxYcURNYzVGYVBRclFsZ3lzTVNFdzlhVVB4eVk3NkRiU2o5YUd1QkN5Zyt6SUkxYXAyT1NWaFZyWVFNY09vdnFMSVpEOHUxWVhLemNQaXZSUDNGa1dyZVdOTEcxRWFqdEU0RlBUaEd6K1hsMVRKVmMvRnRWdk5aUzBFV0k1QldTZkNrVXhpQ3VZcUtya0lUaFhia3c2cjhOQWZXUEorZEp0NVFSTkNYSVZSYmVTV1laYlJsNk5TWDhlNGE2QWJpRG5wWWFqWkRTRmVab0wzYSswenJhMmRGbWR6elhIY2srWFJScG53TEdiQTQxVEpMMHlJMHkxeFl1VjlEOHZhUkhTWkQvdWpKSENuMXpDa1hnNHZ4Ty9EaHFUTzhtMFNjUjhyalByTVQvdFo3VGdEaEdCdThLMVZwOElBWDdjRXNUeGE4aENMQ0xWVjFVTTRmcXBwSkpYbnJJdEY1K2o3MXNyQzJwMk5iQnRlUklWei8rT1p1N1hiWWUvRHRpSEJXR3B4bDYrdTE2UUhGQjJJYXJTbXZPcEpCUlBpU3FIS1ozQ0JiUm5pQ3VIUTlyTHpJM2pnQi9mK3RYUzB3ZVZjR2luUFNSSnIxaVhVUmZuSXMrY3ExNWV4K3NHNkg5ZnlkbGFzZjRqUlMvM2pvMzdGRno2WXNPSlpEdGNaK0hjQUg1TjBZM2N2RVlxVi8vd2dRUHpWSGFWWGpXLzFCN2oyN2Y2dnExYXM4cEh5WEJVaC92a3JIbHRyc2I0b1p2Y3BTVnp3RTdmbGNCZ0VrRFYwVUhhODgrS2FxSTZ6YmhLUGdaMXlpb1dTQWVPTEt5dXc5cnNsRnpibmhvWjhDbEhHaHBTcEI5Ym9BM04zN3dJK3hoaG5qWVVyd2JlZ2gxNzRwUERXd0U3L3lLZEFFL2oxWmZQc2IzZGtTdGhZaXd0THEwVW9QSkRrYlZCZmNqMXAwRTFiU21kM3lxKytJbjBIaWFKS0VGUGxIM2c2bTJSWkZkQUYyUVNhVksyd3lUb3RScUl4NG5UN2NXTXhEVUtXVGN3QjJMa0dUWUlLUERzcmRRb0NhRDFFQjBEbWN1dEpnUVFtTGMrdm9ZN3RiYVQzMHhiWmtOTUpGMFVLRDFIWll4RDBZbjZYMS8yd3MrRnJ2V3lQaFl6bnFDS1ZQK0M1bDB5VXZ4Tk14Mi9vZUJuYmhyS1NTRXNIVEFrVjU3Mm5jUTF5c1FHdSs5UG92ZDJFY1FaZWN6STFQNjNBc1NuQ3dHdmszYmJzSzdJMVM1OHBZUnNQMnpJck85TnpuZUxPdE5zWHUyemFHUnpoaUE1VFRUdmNBdzNvc0dHOEtrU0h4UW5ZRTJHYTJKMW50dGZJVi95WUtaSEtzQVEwUzZHZytISG5oQ3pMRzBUdXNxMzdJcnpRNWRyQjF4Smp6enJFK2J4NDFYZ1o5S2FvTlVLdnluTkZ3T1pGRmJ1Ym02U2F5c0lROFJuMGx2VEtOYXVHemt6Yjc0S1BRSkh4VjlLeWdtS3pHemNiZ1FnTVBJeUJ2VDFBcDVSVzZxWmZocTVrblRqbUVPNzlsRDVoTzVIdVJ3TTJTazVxcjFZa0QrM3VDdUlIR1FCLytYZTlqNCs0dWV6SUF2NWorSTZmOTdjZTZHcXZyY0ZTS3RMaXl1QzVvcHNPK0VUY2dzOEdvdzJ1Um1Cdmo1R0padWtJODIybWNiWjFrVWZCMGgySksyM01oNGFkODhNb0E1NW10cVRDRUdWSGUzbzlla0VDdVdmOGVleksvL2lSOE1YbnM3VUJ0UWVra0RGSWpKTWlPNDVaaU43RFdBMkRHbG83RGRzVFJ6blNmRCtyVllMM015ZU1xMGlObjQ2VkRna0lMaGRnNnU0emw2OG1XQmNrSXZuMTVGQkZzVjlvd09uUWx1ZWVrcWF3T3BlUmZrTVIwMExobll3QTYxcm83d3I0RUl6N1I5QkhrTHR3eE1PajR6eWFad0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVpaVpKdVpIZXRqdHI4cVpsVVBUcUJpWTFpZUVzck1VQUFBQXJ3L1QzaEd4T3hBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE9XCIsXG4gICAgICBcInNpemVcIjogW1xuICAgICAgICAxNTM2LFxuICAgICAgICA1NzZcbiAgICAgIF0sXG4gICAgICBcImJhY2tncm91bmRcIjogXCIjRjJGNEYxXCIsXG4gICAgICBcIm9wc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiTG90dXNcIixcbiAgICAgICAgICBcIngwXCI6IDAuMTAyLFxuICAgICAgICAgIFwieDFcIjogMC43MzUsXG4gICAgICAgICAgXCJjeVwiOiAwLjU1LFxuICAgICAgICAgIFwic2l6ZVwiOiAwLjQ0LFxuICAgICAgICAgIFwiZmlsbFwiOiBcIiMwRTdBNEZcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIidzXCIsXG4gICAgICAgICAgXCJ4MFwiOiAwLjc2LFxuICAgICAgICAgIFwieDFcIjogMC45MTEsXG4gICAgICAgICAgXCJjeVwiOiAwLjU1LFxuICAgICAgICAgIFwic2l6ZVwiOiAwLjQ0LFxuICAgICAgICAgIFwiZmlsbFwiOiBcIiNFM0E4MUNcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ3YWxsXCI6IHtcbiAgICAgICAgXCJtZXNoZXNcIjogW1xuICAgICAgICAgIFwiYnVpbGRpbmctc2hlbGxcIixcbiAgICAgICAgICBcInBhcmFwZXRcIixcbiAgICAgICAgICBcInRpbnQtZmVhdHVyZVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwidGlsZVwiOiAzLjIsXG4gICAgICAgIFwic2l6ZVwiOiA1MTIsXG4gICAgICAgIFwic2VlZFwiOiAyMDI2MDgyOCxcbiAgICAgICAgXCJiYXNlXCI6IDI1MixcbiAgICAgICAgXCJwYXRjaGVzXCI6IDQwLFxuICAgICAgICBcInBhdGNoQW1wXCI6IDEwLFxuICAgICAgICBcInN0cmVha3NcIjogNzAsXG4gICAgICAgIFwic3RyZWFrQW1wXCI6IDEyLFxuICAgICAgICBcInNwZWNrc1wiOiAyMDAwLFxuICAgICAgICBcInNwZWNrQW1wXCI6IDE0XG4gICAgICB9XG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgcjogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG4vKiogQSBib3ggbGlzdCBpcyB0aGUgbWVyZ2UgbGV2ZXIgZm9yIGV2ZXJ5dGhpbmcgaW4gb25lIG1hdGVyaWFsLiBBbiBlbnRyeSBpc1xuICogIFtjeCwgY3ksIGN6LCB3LCBoLCBkXSB3aXRoIGFuIG9wdGlvbmFsIHNldmVudGggbnVtYmVyLCBhIHJvdGF0aW9uIGFib3V0IFggaW4gcmFkaWFucyBhcHBsaWVkXG4gKiAgYmVmb3JlIHRoZSB0cmFuc2xhdGUgKGEgc2xvcGVkIGtleXBhZCBzaGVsZiksIG9yIGB7IGN5bDogW2N4LCBjeSwgY3osIHIsIGgsIHNlZz8sIHJvdFg/LCByb3RaP10gfWBcbiAqICBmb3IgYSByb3VuZCBwYXJ0IGluIHRoZSBzYW1lIHN1Ym1pc3Npb24gKGEgZG9vciBwdWxsIGJhcikuICovXG5mdW5jdGlvbiBib3hlcyhsaXN0OiAobnVtYmVyW10gfCB7IGN5bDogbnVtYmVyW10gfSlbXSkge1xuICByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgICBjb25zdCBjID0gYi5jeWw7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoY1szXSwgY1szXSwgY1s0XSwgY1s1XSA/PyAxMik7XG4gICAgICBpZiAoY1s2XSkgZy5yb3RhdGVYKGNbNl0pO1xuICAgICAgaWYgKGNbN10pIGcucm90YXRlWihjWzddKTtcbiAgICAgIGcudHJhbnNsYXRlKGNbMF0sIGNbMV0sIGNbMl0pO1xuICAgICAgcmV0dXJuIGc7XG4gICAgfVxuICAgIGlmIChiWzZdKSB7IGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYlszXSwgYls0XSwgYls1XSk7IGcucm90YXRlWChiWzZdKTsgZy50cmFuc2xhdGUoYlswXSwgYlsxXSwgYlsyXSk7IHJldHVybiBnOyB9XG4gICAgcmV0dXJuIGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pO1xuICB9KSk7XG59XG5cbi8qKiBNZXJnZSBhIGJveCBsaXN0IHdpdGggYSBwZXItRU5UUlkgdG9uZSB3cml0dGVuIGludG8gYSB2ZXJ0ZXggY29sb3VyIGF0dHJpYnV0ZS4gVGhlIG1hdGVyaWFsXG4gKiAgdGhhdCBkcmF3cyBpdCBtdXN0IHRoZW4gaGF2ZSBgdmVydGV4Q29sb3JzYCBvbiAtLSBzZWUgYGZpbmlzaFZlcnRleENvbG9yc2AgLS0gYW5kIGV2ZXJ5IG90aGVyXG4gKiAgZ2VvbWV0cnkgb24gdGhhdCBtYXRlcmlhbCBuZWVkcyBhIHdoaXRlIGF0dHJpYnV0ZSwgb3IgaXQgcmVuZGVycyBibGFjay4gVG9uZXMgYXJlIHNSR0IgaGV4ZXMsXG4gKiAgZGVjb2RlZCB0byBsaW5lYXIgYnkgc2V0SGV4LCB3aGljaCBpcyB0aGUgc3BhY2UgdGhlIHNoYWRlciBtdWx0aXBsaWVzIGluLiAqL1xuZnVuY3Rpb24gdG9uZWRCb3hlcyhsaXN0OiAobnVtYmVyW10gfCB7IGN5bDogbnVtYmVyW10gfSlbXSwgdG9uZXM6IChudW1iZXIgfCB1bmRlZmluZWQpW10pIHtcbiAgY29uc3QgcGFydHMgPSBsaXN0Lm1hcCgoYikgPT4gYm94ZXMoW2JdKSk7XG4gIGNvbnN0IGdlbyA9IG1lcmdlR2VvcyhwYXJ0cy5tYXAoKGcpID0+IGcuY2xvbmUoKSkpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQgKiAzKTtcbiAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICBsZXQgdiA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuID0gcGFydHNbaV0uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgIGMuc2V0SGV4KHRvbmVzW2ldID8/IDB4ZmZmZmZmKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykgeyBjb2xbKHYgKyBrKSAqIDNdID0gYy5yOyBjb2xbKHYgKyBrKSAqIDMgKyAxXSA9IGMuZzsgY29sWyh2ICsgaykgKiAzICsgMl0gPSBjLmI7IH1cbiAgICB2ICs9IG47XG4gICAgcGFydHNbaV0uZGlzcG9zZSgpO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgcmV0dXJuIGdlbztcbn1cbi8qKiBUdXJuIGB2ZXJ0ZXhDb2xvcnNgIG9uIGZvciBhIG1hdGVyaWFsIGFuZCBnaXZlIGV2ZXJ5IGdlb21ldHJ5IHRoYXQgc2hhcmVzIGl0IGEgV0hJVEUgY29sb3VyXG4gKiAgYXR0cmlidXRlIHdoZXJlIG9uZSBpcyBtaXNzaW5nLiBUaGUgc2hhZGVyIHJlYWRzIGFuIGFic2VudCBhdHRyaWJ1dGUgYXMgKDAsMCwwKTogb25lIHRpbnRlZFxuICogIHBhcnQgbWFrZXMgaXRzIHdob2xlIG1hdGVyaWFsIHBvaXNvbm91cyB0byBldmVyeSB1bnRpbnRlZCBtZXNoIG9uIGl0LiAqL1xuZnVuY3Rpb24gZmluaXNoVmVydGV4Q29sb3JzKG1hdGVyaWFsczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+LCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+LCBtYXRJZDogc3RyaW5nKSB7XG4gIGNvbnN0IG0gPSBtYXRlcmlhbHNbbWF0SWRdO1xuICBpZiAoIW0gfHwgbS52ZXJ0ZXhDb2xvcnMpIHJldHVybjtcbiAgbS52ZXJ0ZXhDb2xvcnMgPSB0cnVlOyBtLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgZm9yIChjb25zdCBtZXNoIG9mIE9iamVjdC52YWx1ZXMobWVzaGVzKSkge1xuICAgIGlmIChtZXNoLm1hdGVyaWFsICE9PSBtKSBjb250aW51ZTtcbiAgICBjb25zdCBnZW8gPSBtZXNoLmdlb21ldHJ5IGFzIFRIUkVFLkJ1ZmZlckdlb21ldHJ5O1xuICAgIGlmIChnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSBjb250aW51ZTtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8gLS0gd2hpY2ggaXNcbiAqIHdoYXQgcmVuZGVycyBhIGJ1aWxkaW5nIG1pZC1ncmV5LlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgbWV0YWxzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGEgaGVtaXNwaGVyZVxuICogbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG8gcmVmbGVjdFxuICogcmVuZGVycyBibGFjay4gVGhlIGFsYmVkbyBzdGF5cyBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqXG4gKiBUaGUgb25lIHByaW50ZWQgZ3JhcGhpYywgdGhlIGJyYW5kIGZhc2NpYSwgaXMgYSBjYW52YXMgYXNzaWduZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLlxuICogVGhlIHRleHR1cmVsZXNzIGRlY2xhcmF0aW9uIGRvZXMgbm90IGFmZmVjdCB0aGF0LCBhbmQgaXQgaXMgdGhlIGRvY3VtZW50ZWQgcm91dGUuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb3R1c3NTdG9yZUJ1aWxkaW5nTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdMb3R1c1xcJ3MgU3RvcmUgQnVpbGRpbmcnO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG4gIC8qIFNoZWxsOiBTT0xJRCBib3gsIG5vdCBhIHJpbmcuIFRoZSBwcm9wIGlzIGFuIGV4dGVyaW9yIHNoZWxsIG9ubHkgZXZlciBzZWVuIGZyb20gb3V0c2lkZSwgc29cbiAgICogYW4gaW50ZXJpb3IgY29zdHMgZHJhdyBjYWxscywgZ2VvbWV0cmllcyBhbmQgVlJBTSBmb3Igc29tZXRoaW5nIG5vYm9keSBzZWVzIC0tIGFuZCBzb2xpZFxuICAgKiBtZWFucyB0aGUgc2hvcGZyb250IG5lZWRzIG5vIG9wZW5pbmcgY3V0IGluIGl0LCB3aGljaCByZW1vdmVzIGFsbCBmb3VyIHJldmVhbCBmYWNlcyBhbmQgdGhlXG4gICAqIHotZmlnaHRpbmcgdGhleSBjYXVzZS4gU2V0IDAuMDYgbSBJTlNJREUgdGhlIHBhcmFwZXQgcmluZyBvbiBldmVyeSBlbGV2YXRpb24gc28gbm8gd2FsbCBmYWNlXG4gICAqIGlzIGV2ZXIgY29wbGFuYXIgYW5kIGNvLWZhY2luZyB3aXRoIGEgcGFyYXBldCBmYWNlLiAqL1xuICAvLyBIb3cgZmFyIGZvcndhcmQgdGhlIHNoZWxsIGZhY2Ugc2l0cy4gVGhlIERFRkFVTFQgMi41MCBsZWF2ZXMgMS4wMCBtIGZvciBhbiBlbnRyYW5jZSBjYW5vcHkgdG9cbiAgLy8gY2FudGlsZXZlciBpbnRvLCBzbyB0aGUgY2Fub3B5IG5vc2UgbGFuZHMgZXhhY3RseSBvbiB0aGUgZGVjbGFyZWQgNy4wIG0gZGVwdGguIEEgYnVpbGRpbmcgd2l0aFxuICAvLyBOTyBmb3J3YXJkIGNhbnRpbGV2ZXIgbXVzdCBwdXNoIHRoaXMgb3V0IGluc3RlYWQsIG9yIHRoZSBwcm9wIGlzIGJ1aWx0IHNob3J0IG9mIGl0cyBkZWNsYXJlZFxuICAvLyBlbnZlbG9wZSAtLSBNSyBmaXJzdCBjYW1lIG91dCA2LjMgbSBkZWVwIGFnYWluc3QgYSBkZWNsYXJlZCA3LjAgZm9yIGV4YWN0bHkgdGhhdCByZWFzb24uXG4gIGNvbnN0IFNGID0gKEcuc2hlbGxGcm9udCA/PyAyLjUwKSBhcyBudW1iZXI7XG4gIC8vIGBzaGVsbEJveGAgW2N4LCBjeSwgY3osIHcsIGgsIGRdIHJlcGxhY2VzIHRoZSBmdWxsLW1vZHVsZSBzaGVsbCBmb3IgYSBwbGF0ZSB3aG9zZSBlbmNsb3NlZCB2b2x1bWVcbiAgLy8gZG9lcyBub3QgZmlsbCB0aGUgc2xhYiAtLSB0aGUgUFRUIGtpb3NrIHNpdHMgdW5kZXIgdGhlIHJlYXItcmlnaHQgb2YgYW4gOCB4IDcgY2Fub3B5IHNsYWIuXG4gIGNvbnN0IFNCID0gKEcuc2hlbGxCb3ggYXMgbnVtYmVyW10gfCB1bmRlZmluZWQpID8/IFswLCAxLjc3NSwgKFNGIC0gMy40NCkgLyAyLCA3Ljg4LCAzLjU1LCBTRiArIDMuNDRdO1xuICAvLyBgc2hlbGxCb3hlc2AgcmVwbGFjZXMgdGhlIHNoZWxsIHdpdGggU0VWRVJBTCBib3hlcyBpbiBvbmUgc3VibWlzc2lvbiwgZm9yIGEgcGxhdGUgd2hvc2Ugd2FsbCBoYXNcbiAgLy8gYSByZWNlc3MgaW4gaXQgLS0gYSBzZXJ2aWNlIGRvb3Igc2V0IGJhY2sgaW50byBhIHJldmVhbCAoTUspLiBUaGUgcG9ja2V0IGlzIGxlZnQgb3BlbiBieSB0aGVcbiAgLy8gYm94ZXMgYXJvdW5kIGl0LCBzbyB0aGUgbGVhZiBpbnNpZGUgY2FuIHNpdCBCRUhJTkQgdGhlIHdhbGwgZmFjZSB3aXRob3V0IGEgaG9sZSBiZWluZyBjdXQuXG4gIGFkZCgnYnVpbGRpbmctc2hlbGwnLCAnQnVpbGRpbmcgc2hlbGwnLFxuICAgICAgRy5zaGVsbEJveGVzID8gYm94ZXMoRy5zaGVsbEJveGVzIGFzIG51bWJlcltdW10pIDogYm94QXQoU0JbMF0sIFNCWzFdLCBTQlsyXSwgU0JbM10sIFNCWzRdLCBTQls1XSksICd3YWxsJyk7XG4gIGNvbGxpZGVyc1snYnVpbGRpbmctc2hlbGwnXSA9IHtcbiAgICAvLyBIYWxmLWhlaWdodCBmb2xsb3dzIHRoZSBwYXJhcGV0IGNvcGluZywgc28gYSB0YWxsZXIgbW9kdWxlIChGYW1pbHlNYXJ0J3MgNS4yMCkgaXMgbm90XG4gICAgLy8gZGVjbGFyZWQgMi4zIG0gdGFsbDsgZXZlcnkgNC42MCBzaWJsaW5nIHN0aWxsIGdldHMgZXhhY3RseSAyLjMuXG4gICAgc2hhcGU6ICdib3gnLCBsb2NhbENlbnRlcjogWzAsICgoRy5mYXNjaWFXYWxsPy5jeSA/PyA0LjA3NSkgKyAoRy5mYXNjaWFXYWxsPy5oID8/IDEuMDUpIC8gMikgLyAyLCAwXSwgaGFsZkV4dGVudHM6IFs0LjAsICgoRy5mYXNjaWFXYWxsPy5jeSA/PyA0LjA3NSkgKyAoRy5mYXNjaWFXYWxsPy5oID8/IDEuMDUpIC8gMikgLyAyLCAzLjVdLFxuICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZS4nLFxuICB9O1xuXG4gIC8qIFJvb2YgZGVjayBzcGFucyB5IDMuNTAuLjMuNjIgYnkgZGVmYXVsdCwgc28gaXRzIHVuZGVyc2lkZSBpcyBzdW5rIElOVE8gdGhlIHNoZWxsIHJhdGhlciB0aGFuXG4gICAqIHJlc3Rpbmcgb24gaXQuIEF1dGhvcmVkIGZsdXNoLCB0aGUgZGVjaydzIGJvdHRvbSBmYWNlIGFuZCB0aGUgcGFyYXBldCByaW5nJ3MgYm90dG9tIGZhY2Ugd2VyZVxuICAgKiBib3RoIGF0IHk9My41NTAgYW5kIGJvdGggZmFjaW5nIGRvd24gLS0gNDYgbTIgb2YgY29wbGFuYXIgY28tZmFjaW5nIHN1cmZhY2UuXG4gICAqXG4gICAqIGBkZWNrWWAgcmFpc2VzIGl0IGluc2lkZSB0aGUgcGFyYXBldCByaW5nLCB3aGljaCBpcyB3aGF0IGEgcGxhdGUgc2hvd2luZyBhIFNIQUxMT1cgcm9vZiB3ZWxsXG4gICAqIG5lZWRzOiB3aXRoIHRoZSBkZWNrIGF0IHRoZSBzaGVsbCB0b3AgYW5kIGEgcmluZyB0aGF0IHJ1bnMgdG8gdGhlIGNvcGluZywgdGhlIHJvb2Z0b3AgcGxhbnRcbiAgICogc2l0cyBpbiBhIDAuOCBtIHBpdCBhbmQgb25seSBpdHMgbGlkcyBjbGVhciB0aGUgcGFyYXBldCwgd2hlbiB0aGUgcGxhdGUgc2hvd3MgbW9zdCBvZiBlYWNoXG4gICAqIHVuaXQgc3RhbmRpbmcgYWJvdmUgaXQuIFJhaXNpbmcgdGhlIGRlY2sgY2Fubm90IHJhaXNlIHRoZSBwbGFudCBwYXN0IHRoZSBkZWNsYXJlZCA0LjYwIG0gLS1cbiAgICogdGhhdCBpcyB3aGF0IHRoZSBjb3BpbmcgaXMgLS0gYnV0IGl0IGlzIHdoYXQgZGVjaWRlcyBob3cgbXVjaCBvZiBpdCBhIHZpZXdlciBzZWVzLiAqL1xuICAvLyBgZGVja0V4dHJhYCBmb2xkcyBtb3JlIGJveGVzIGludG8gdGhlIGRlY2sncyBzdWJtaXNzaW9uIC0tIGEgZGFyayBiYWNrZHJvcCBzbGFiIGJlaGluZCBhIGdsYXplZFxuICAvLyBvcGVuaW5nLCBzbyBhIHNob3Bmcm9udCB3aXRoIG5vIGludGVyaW9yIGltYWdlIHNob3dzIGEgZGFyayByb29tIHRocm91Z2ggaXRzIGdsYXNzIGFuZCBpdHNcbiAgLy8gZGVsaXZlcnkgaGF0Y2ggcmVhZHMgYXMgYSBIT0xFIHJhdGhlciB0aGFuIGFzIGEgcGF0Y2ggb2YgdGhlIHJlbmRlciB3YWxsLlxuICAvLyBgZGVja0JveGAgW2N4LCBjeSwgY3osIHcsIGgsIGRdIHJlcGxhY2VzIHRoZSBmdWxsLW1vZHVsZSBkZWNrIHRoZSBzYW1lIHdheSBgc2hlbGxCb3hgIGRvZXMuXG4gIGNvbnN0IERCID0gKEcuZGVja0JveCBhcyBudW1iZXJbXSB8IHVuZGVmaW5lZCkgPz8gWzAsIChHLmRlY2tZID8/IDMuNTYpIGFzIG51bWJlciwgKFNGIC0gMC4wMiAtIDMuNDIpIC8gMiwgNy44LCAwLjEyLCBTRiArIDMuNDBdO1xuICBjb25zdCBkZWNrR2VvID0gYm94QXQoREJbMF0sIERCWzFdLCBEQlsyXSwgREJbM10sIERCWzRdLCBEQls1XSk7XG4gIC8vIGBkZWNrRXh0cmFUb25lc2AgKG9uZSBwZXIgZGVja0V4dHJhIGJveDsgdGhlIGRlY2sgaXRzZWxmIHN0YXlzIHdoaXRlKSBpcyBob3cgdGhlIGJhY2tkcm9wIGlzXG4gIC8vIERBUksgd2hpbGUgdGhlIGRlY2sga2VlcHMgaXRzIG1lYXN1cmVkIHRvbmU6IG9uZSBtYXRlcmlhbCwgb25lIGRyYXcgY2FsbCwgYSB2ZXJ0ZXggY29sb3VyLlxuICBjb25zdCB0b25lZERlY2sgPSAhIUcuZGVja0V4dHJhVG9uZXM7XG4gIGFkZCgncm9vZi1kZWNrJywgJ1Jvb2YgZGVjaycsXG4gICAgICBHLmRlY2tFeHRyYVxuICAgICAgICA/ICh0b25lZERlY2tcbiAgICAgICAgICAgIC8vIGBkZWNrVG9uZWAgdGludHMgdGhlIGRlY2sgYm94IGl0c2VsZiwgZm9yIGEgcGxhdGUgd2hvc2UgcGxhbnQgcmlkZXMgdGhlIGRlY2sgTUFURVJJQUxcbiAgICAgICAgICAgIC8vIChhIGdhbHZhbmlzZWQgdGlsZSBzaGFyZWQgYnkgdGhlIHVuaXRzIGFuZCB0aGUgbWVtYnJhbmUpIHdoaWxlIHRoZSBtZW1icmFuZSBrZWVwcyBpdHNcbiAgICAgICAgICAgIC8vIG93biBtZWFzdXJlZCB0b25lLiBMZWZ0IHVuc2V0IHRoZSBkZWNrIGlzIHdoaXRlLCBpLmUuIHRoZSBtYXRlcmlhbCdzIGF1dGhvcmVkIGNvbG91ci5cbiAgICAgICAgICAgID8gdG9uZWRCb3hlcyhbREIsIC4uLihHLmRlY2tFeHRyYSBhcyBudW1iZXJbXVtdKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgW0cuZGVja1RvbmUgYXMgbnVtYmVyIHwgdW5kZWZpbmVkLCAuLi4oRy5kZWNrRXh0cmFUb25lcyBhcyBudW1iZXJbXSldKVxuICAgICAgICAgICAgOiBtZXJnZUdlb3MoW2RlY2tHZW8sIGJveGVzKEcuZGVja0V4dHJhIGFzIG51bWJlcltdW10pXSkpXG4gICAgICAgIDogZGVja0dlbywgJ2RlY2snKTtcbiAgaWYgKHRvbmVkRGVjaykgZGVja0dlby5kaXNwb3NlKCk7XG5cbiAgLyogUGFyYXBldDogZnJvbnQgZmFzY2lhIHdhbGwgcGx1cyB0aHJlZSB1cHN0YW5kcywgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudCBhbmQgb25lIGRyYXcgY2FsbC5cbiAgICogVGhlIGZyb250IGlzIHRhbGxlciB0aGFuIHRoZSBzaWRlcywgd2hpY2ggYSBwbGFuIGV4dHJ1c2lvbiBjYW5ub3QgZXhwcmVzcy4gT3V0ZXIgZmFjZXMgc3RhbmRcbiAgICogMC4wNiBtIHByb3VkIG9mIHRoZSB3YWxscyAtLSBhIGNvcGluZyBkcmlwIGVkZ2UsIGFuZCB3aGF0IGtlZXBzIHRoZW0gb2ZmIHRoZSB3YWxsIHBsYW5lcy4gKi9cbiAgY29uc3QgUFMgPSAoRy5wYXJhcGV0U2lkZXMgPz8geyBjeTogMy43NSwgaDogMC40LCB0aGljazogMC4yNCB9KSBhcyBhbnk7XG4gIC8vIFBhcmFwZXQgcGxhbiBzaXplLiBJdCBkZWZhdWx0cyB0byB0aGUgZnVsbCA4LjAwIG0gZW52ZWxvcGUgd2lkdGgsIGJ1dCBhIGJ1aWxkaW5nIHdob3NlIEZBU0NJQVxuICAvLyB0dXJucyB0aGUgY29ybmVyIGhhcyB0byBwdWxsIHRoZSByaW5nIGluOiB0aGUgcmV0dXJuIGJvYXJkIGlzIHRoZSBvdXRlcm1vc3QgdGhpbmcgb24gdGhhdFxuICAvLyBlbGV2YXRpb24sIGFuZCBhIHBhcmFwZXQgYXQgdGhlIHNhbWUgKy00LjAwIGJvdGggaGlkZXMgaXQgYW5kIHB1dHMgdHdvIGNvLWZhY2luZyBwbGFuZXMgYXQgdGhlXG4gIC8vIHNhbWUgeC4gYHBhcmFwZXRXYCBhbmQgYFBTLmN4YCBhcmUgaG93IGEgY29uZmlnIGJ1eXMgdGhhdCBjbGVhcmFuY2Ugd2l0aG91dCBldmVyeSBzaWJsaW5nXG4gIC8vIG1vdmluZy5cbiAgY29uc3QgUFcgPSAoRy5wYXJhcGV0VyA/PyA4LjApIGFzIG51bWJlcjtcbiAgY29uc3QgUENYID0gKFBTLmN4ID8/IDMuODgpIGFzIG51bWJlcjtcbiAgLy8gYHBhcmFwZXRCb3hlc2AgcmVwbGFjZXMgdGhlIHdob2xlIGRlZmF1bHQgcmluZyAoZmFzY2lhIHdhbGwgKyB0aHJlZSB1cHN0YW5kcykgZm9yIGEgcGxhdGUgd2hvc2VcbiAgLy8gcm9vZiBlZGdlIGlzIG5vdCB0aGUgc2hhcmVkIG1vZHVsZSdzIC0tIGEgY2Fub3B5IHNsYWIgd2l0aCBpdHMgb3duIGZhc2NpYSBkZXB0aHMgcGVyIHNpZGUuXG4gIGFkZCgncGFyYXBldCcsICdQYXJhcGV0IHJpbmcgYW5kIGZhc2NpYSB3YWxsJywgYm94ZXMoRy5wYXJhcGV0Qm94ZXMgPyBbLi4uKEcucGFyYXBldEJveGVzIGFzIG51bWJlcltdW10pLCAuLi4oKEcucGFyYXBldEV4dHJhID8/IFtdKSBhcyBudW1iZXJbXVtdKV0gOiBbXG4gICAgWzAsIEcuZmFzY2lhV2FsbC5jeSwgRy5mYXNjaWFXYWxsLmN6LCBQVywgRy5mYXNjaWFXYWxsLmgsIEcuZmFzY2lhV2FsbC5kXSxcbiAgICAvLyBTaWRlIGFuZCByZWFyIHVwc3RhbmRzLiBgcGFyYXBldFNpZGVzYCBvdmVycmlkZXMgdGhlIGRlZmF1bHQgMC40MCBtIHVwc3RhbmQgZm9yIGEgcGxhdGUgd2hvc2VcbiAgICAvLyBwYXJhcGV0IGlzIGEgZnVsbC1oZWlnaHQgcmluZyByYXRoZXIgdGhhbiBhIGxvdyBrZXJiOyB0aGUgZnJvbnQgaXMgYWx3YXlzIHRoZSB0YWxsZXIgZmFjZSBhbmRcbiAgICAvLyBjb21lcyBpbiB0aHJvdWdoIGBmYXNjaWFXYWxsYCwgd2hpY2ggYSBwbGFuIGV4dHJ1c2lvbiBjb3VsZCBub3QgZXhwcmVzcy5cbiAgICBbLVBDWCwgUFMuY3ksIChTRiAtIDAuMzAgLSAzLjUpIC8gMiwgUFMudGhpY2ssIFBTLmgsIFNGICsgMy4yMF0sXG4gICAgW1BDWCwgUFMuY3ksIChTRiAtIDAuMzAgLSAzLjUpIC8gMiwgUFMudGhpY2ssIFBTLmgsIFNGICsgMy4yMF0sXG4gICAgWzAsIFBTLmN5LCAtMy4zOCwgUFcsIFBTLmgsIDAuMjRdLFxuICAgIC8vIEFueXRoaW5nIGVsc2UgaW4gdGhlIFNBTUUgbWF0ZXJpYWwgZm9sZHMgaW4gaGVyZSByYXRoZXIgdGhhbiBjb3N0aW5nIGl0cyBvd24gZHJhdyBjYWxsIC0tXG4gICAgLy8gZnVsbC1oZWlnaHQgZmFjYWRlIGNsYWRkaW5nLCBjb3JuZXIgcGlsYXN0ZXJzLCBhIHBsaW50aC4gVGhpcyBpcyB0aGUgbWVyZ2UgbGV2ZXI6IHR3b1xuICAgIC8vIHBhcnRzIHRoYXQgc2hhcmUgYSBtYXRlcmlhbCBzaG91bGQgbmV2ZXIgYmUgdHdvIHN1Ym1pc3Npb25zLlxuICAgIC4uLigoRy5wYXJhcGV0RXh0cmEgPz8gW10pIGFzIG51bWJlcltdW10pLFxuICBdKSwgRy5mYXNjaWFXYWxsTWF0ZXJpYWwpO1xuXG4gIC8qIEJyYW5kIGZhc2NpYSBwYW5lbC4gU3VuayBJTlRPIHRoZSBmYXNjaWEgd2FsbCBhdCB0aGUgYmFjayBhbmQgc3RhbmRpbmcgcHJvdWQgYXQgdGhlIGZyb250LCBzb1xuICAgKiBpdCBvdmVybGFwcyBpdHMgc3Vycm91bmQgaW5zdGVhZCBvZiBtZWV0aW5nIGl0LiBVVnMgYXJlIEFVVEhPUkVEOiB0aGUgK1ogZmFjZSBzYW1wbGVzIHRoZVxuICAgKiB3b3JkbWFyayBiYW5kIG9mIHRoZSBjYW52YXMgYW5kIHRoZSBvdGhlciBmaXZlIGZhY2VzIHNhbXBsZSBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZVxuICAgKiBjYW52YXMsIHdoaWNoIGtlZXBzIHRoZSBicmFuZCBncmFwaGljIGF0IE9ORSBtYXRlcmlhbCBhbmQgT05FIGRyYXcgY2FsbC4gKi9cbiAge1xuICAgIGNvbnN0IGYgPSBHLmZhc2NpYTtcbiAgICBsZXQgZzogVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gICAgaWYgKGYuc2hhcGUgPT09ICdkaXNjJykge1xuICAgICAgLy8gQSByb3VuZCBzaWduIGRpc2MsIGJ1aWx0IGFzIGEgQ2lyY2xlR2VvbWV0cnkgZmFjZSBwbHVzIGEgc2hhbGxvdyBjeWxpbmRlciBib2R5LlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBvYnZpb3VzIGNvbnN0cnVjdGlvbiAtLSBvbmUgY3lsaW5kZXIgcm90YXRlZCB0byBmYWNlICtaIC0tIHB1dHMgdGhlIHdvcmRtYXJrIG9uIGl0c1xuICAgICAgLy8gc2lkZSwgYmVjYXVzZSBDeWxpbmRlckdlb21ldHJ5IGxheXMgaXRzIGNhcCBVVnMgb3V0IGluIHRoZSBjeWxpbmRlcidzIG93biBYWiBwbGFuZSBhbmRcbiAgICAgIC8vIHJvdGF0aW5nIHRoZSBnZW9tZXRyeSBkb2VzIG5vdCByb3RhdGUgdGhlbSB3aXRoIGl0LiBDaXJjbGVHZW9tZXRyeSdzIFVWcyBhcmUgYWxyZWFkeVxuICAgICAgLy8gKHgsIHkpIGluIHRoZSBwbGFuZSBpdCBmYWNlcywgc28gdGhlIHNxdWFyZSBjYW52YXMgbGFuZHMgdGhlIHJpZ2h0IHdheSB1cCB3aXRoIG5vXG4gICAgICAvLyBjb3JyZWN0aW9uLiBUaGUgYm9keSdzIFVWcyBhcmUgY29sbGFwc2VkIG9udG8gYSBwbGFpbiBjb3JuZXIgb2YgdGhlIHNhbWUgY2FudmFzIHNvIHRoZVxuICAgICAgLy8gZGlzYydzIGVkZ2UgZG9lcyBub3Qgc21lYXIgdGhlIHdvcmRtYXJrIGFyb3VuZCBpdHMgcmltLlxuICAgICAgY29uc3QgciA9IGYudyAvIDI7XG4gICAgICBjb25zdCBmYWNlID0gbmV3IFRIUkVFLkNpcmNsZUdlb21ldHJ5KHIsIDMyKTtcbiAgICAgIGZhY2UudHJhbnNsYXRlKDAsIDAsIDAuMDYxKTtcbiAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCAwLjEyLCAzMik7XG4gICAgICBib2R5LnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgICAgIGNvbnN0IGJ1diA9IGJvZHkuZ2V0QXR0cmlidXRlKCd1dicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV2LmNvdW50OyBpKyspIGJ1di5zZXRYWShpLCAwLjAyLCAwLjAyKTtcbiAgICAgIGJ1di5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICBnID0gbWVyZ2VHZW9zKFtmYWNlLCBib2R5XSk7XG4gICAgICBnLnRyYW5zbGF0ZSgwLCBmLmN5LCBmLmN6KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQm94R2VvbWV0cnkgdmVydGV4IG9yZGVyIGlzIHB4LCBueCwgcHksIG55LCBweiwgbnogLS0gZm91ciB2ZXJ0aWNlcyBwZXIgZmFjZSAtLSBzbyB0aGVcbiAgICAgIC8vIG91dHdhcmQgZmFjZSBvZiBhIGJvYXJkIGlzIGEga25vd24gc2xpY2Ugb2YgdGhlIHV2IGF0dHJpYnV0ZS4gQSBidWlsZGluZyBjYW4gY2FycnkgdGhlXG4gICAgICAvLyBzYW1lIG1hcmsgb24gbW9yZSB0aGFuIG9uZSBlbGV2YXRpb24gKHRoaXMga2l0J3MgaG9zcGl0YWwgc2lnbnMgaXRzIGZyb250IEFORCBpdHMgc2lkZSksXG4gICAgICAvLyBzbyBgYm9hcmRzYCBsZXRzIGVhY2ggYm9hcmQgbmFtZSB0aGUgZmFjZSB0aGF0IHNhbXBsZXMgdGhlIGdyYXBoaWMgd2hpbGUgZXZlcnkgb3RoZXIgZmFjZVxuICAgICAgLy8gc2FtcGxlcyBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZSBjYW52YXMuIE9uZSBtYXRlcmlhbCwgb25lIGRyYXcgY2FsbCwgYW55IG51bWJlciBvZlxuICAgICAgLy8gYm9hcmRzIGZhY2luZyBhbnkgd2F5LlxuICAgICAgY29uc3QgRkFDRV9TTElDRTogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgJytYJzogMCwgJy1YJzogNCwgJytZJzogOCwgJy1ZJzogMTIsICcrWic6IDE2LCAnLVonOiAyMCB9O1xuICAgICAgY29uc3QgYm9hcmRzID0gKGYuYm9hcmRzIGFzIGFueVtdKSA/PyBbeyB3OiBmLncsIGg6IGYuaCwgZDogMC4xMiwgYXQ6IFswLCBmLmN5LCBmLmN6XSwgZmFjZTogJytaJyB9XTtcbiAgICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgICBmb3IgKGNvbnN0IGJkIG9mIGJvYXJkcykge1xuICAgICAgICBjb25zdCBiID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJkLncsIGJkLmgsIGJkLmQgPz8gMC4xMik7XG4gICAgICAgIGNvbnN0IHV2ID0gYi5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgICAvLyBgcGxhaW5gIGJvYXJkcyBjYXJyeSBubyBncmFwaGljIGF0IGFsbDogYSBiYW5kIHRoYXQgd3JhcHMgdGhyZWUgc2lkZXMgb2YgYSBjYW5vcHkgc2hvdWxkXG4gICAgICAgIC8vIHJlcGVhdCBpdHMgbWFyayBvbiBub25lIG9mIHRoZSByZXR1cm5zLCBvbmx5IG9uIHRoZSBmYWNlIHRoYXQgZnJvbnRzIHRoZSBzdHJlZXQuXG4gICAgICAgIC8vIFRoZSB0ZXN0IGlzIGFuIGV4cGxpY2l0IGJvb2xlYW4sIE5PVCBhIHNlbnRpbmVsIGluZGV4IC0tIHNldHRpbmcgdGhlIHNsaWNlIHN0YXJ0IHRvIC0xXG4gICAgICAgIC8vIHN0aWxsIHNhdGlzZmllZCBgaSA+PSBzdGFydCAmJiBpIDwgc3RhcnQgKyA0YCBmb3IgdmVydGljZXMgMCwgMSBhbmQgMiwgc28gdGhyZWUgY29ybmVyc1xuICAgICAgICAvLyBvZiB0aGUgK1ggZmFjZSBrZXB0IHNhbXBsaW5nIHRoZSB3b3JkbWFyayBiYW5kIGFuZCBzbWVhcmVkIGEgc3RyZXRjaGVkIGdob3N0IG9mIHRoZSBtYXJrXG4gICAgICAgIC8vIGFsb25nIGV2ZXJ5IHJldHVybi5cbiAgICAgICAgY29uc3QgcGxhaW4gPSBiZC5wbGFpbiA9PT0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc3RhcnRBdCA9IEZBQ0VfU0xJQ0VbYmQuZmFjZSA/PyAnK1onXTtcbiAgICAgICAgLy8gYHU6IFt1MCwgdTFdYCBsZXRzIGEgYm9hcmQgc2FtcGxlIGEgaG9yaXpvbnRhbCBTTElDRSBvZiB0aGUgY2FudmFzIGJhbmQgaW5zdGVhZCBvZiBhbGwgb2ZcbiAgICAgICAgLy8gaXQsIHNvIHR3byBib2FyZHMgd2l0aCB0d28gZGlmZmVyZW50IGdyYXBoaWNzIChhIGJsdWUgYm9hcmQgd2l0aCB3aGl0ZSB0ZXh0LCBhIHdoaXRlIGJvYXJkXG4gICAgICAgIC8vIHdpdGggYmx1ZSB0ZXh0KSBzdGlsbCBzaGFyZSBvbmUgY2FudmFzLCBvbmUgbWF0ZXJpYWwgYW5kIG9uZSBkcmF3IGNhbGwuIGBwbGFpblVWYCBpcyB0aGVcbiAgICAgICAgLy8gY2FudmFzIHBvaW50IHRoZSBib2FyZCdzIG90aGVyIGZpdmUgZmFjZXMgc2FtcGxlOyBpdCBkZWZhdWx0cyB0byB0aGUgYm90dG9tLWxlZnQgY29ybmVyXG4gICAgICAgIC8vIGFuZCBhIGJvYXJkIHdob3NlIGdyb3VuZCBpcyBub3QgdGhlIGNhbnZhcyBiYWNrZ3JvdW5kIG5hbWVzIGl0cyBvd24uXG4gICAgICAgIGNvbnN0IHUwID0gYmQudSA/IGJkLnVbMF0gOiAwLCB1MSA9IGJkLnUgPyBiZC51WzFdIDogMTtcbiAgICAgICAgY29uc3QgcHUgPSBiZC5wbGFpblVWID8gYmQucGxhaW5VVlswXSA6IDAuMDE1LCBwdiA9IGJkLnBsYWluVVYgPyBiZC5wbGFpblVWWzFdIDogMC4wMTU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykge1xuICAgICAgICAgIC8vIGBmLnV2UmVjdGAgW3UwLCB2MCwgdTEsIHYxXSBuYW1lcyB0aGUgQVRMQVMgcmVnaW9uIHRoZSBiYW5kIG9jY3VwaWVzIHdoZW4gdGhlIHNpZ25cbiAgICAgICAgICAvLyBzaGFyZXMgaXRzIGltYWdlIHdpdGggb3RoZXIgdGV4dHVyZWQgcGFydHM7IGRlZmF1bHQgaXMgdGhlIGNhbnZhcyBjb250cmFjdCAodG9wIDg3LjUgJSkuXG4gICAgICAgICAgY29uc3QgUiA9IChmLnV2UmVjdCBhcyBudW1iZXJbXSkgPz8gWzAsIDAuMTI1LCAxLCAxXTtcbiAgICAgICAgICBpZiAoIXBsYWluICYmIGkgPj0gc3RhcnRBdCAmJiBpIDwgc3RhcnRBdCArIDQpIHV2LnNldFhZKGksIFJbMF0gKyAodTAgKyB1di5nZXRYKGkpICogKHUxIC0gdTApKSAqIChSWzJdIC0gUlswXSksIFJbMV0gKyB1di5nZXRZKGkpICogKFJbM10gLSBSWzFdKSk7XG4gICAgICAgICAgZWxzZSB1di5zZXRYWShpLCBwdSwgcHYpO1xuICAgICAgICB9XG4gICAgICAgIHV2Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgYi50cmFuc2xhdGUoYmQuYXRbMF0sIGJkLmF0WzFdLCBiZC5hdFsyXSk7XG4gICAgICAgIHBhcnRzLnB1c2goYik7XG4gICAgICB9XG4gICAgICBnID0gcGFydHMubGVuZ3RoID09PSAxID8gcGFydHNbMF0gOiBtZXJnZUdlb3MocGFydHMpO1xuICAgIH1cbiAgICAvLyBgY3VydmVkYDogdGV4dHVyZWQgYnVsZ2VkIGZyb250cyAoYW4gQVRNIGtpb3NrIGZhY2UpIHRoYXQgcmlkZSB0aGUgU0FNRSBtYXRlcmlhbCBhbmRcbiAgICAvLyBzdWJtaXNzaW9uIGFzIHRoZSBzaWduLCBzYW1wbGluZyB0aGVpciBvd24gcmVnaW9uIG9mIHRoZSBiYWtlZCBhdGxhcy4gRWFjaCBpcyBhIHBhcnRpYWxcbiAgICAvLyBjeWxpbmRlciBhYm91dCBZLCBhcGV4IGF0IHosIGVkZ2VzIGF0IHogLSBidWxnZSwgc3Bhbm5pbmcgdyBieSBoLCBVVnMgcmVtYXBwZWQgdG8gdXZSZWN0LlxuICAgIGlmIChmLmN1cnZlZCkge1xuICAgICAgY29uc3QgY3BhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW2ddO1xuICAgICAgZm9yIChjb25zdCBjIG9mIGYuY3VydmVkIGFzIGFueVtdKSB7XG4gICAgICAgIGNvbnN0IFIgPSAoYy53ICogYy53IC8gNCArIGMuYnVsZ2UgKiBjLmJ1bGdlKSAvICgyICogYy5idWxnZSk7XG4gICAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmFzaW4oYy53IC8gMiAvIFIpO1xuICAgICAgICBjb25zdCBjeWwgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShSLCBSLCBjLmgsIGMuc2VnID8/IDEyLCAxLCB0cnVlLCAtaGFsZiwgMiAqIGhhbGYpO1xuICAgICAgICBjb25zdCBjdXYgPSBjeWwuZ2V0QXR0cmlidXRlKCd1dicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICAgICAgY29uc3QgciA9IGMudXZSZWN0IGFzIG51bWJlcltdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1di5jb3VudDsgaSsrKSBjdXYuc2V0WFkoaSwgclswXSArIGN1di5nZXRYKGkpICogKHJbMl0gLSByWzBdKSwgclsxXSArIGN1di5nZXRZKGkpICogKHJbM10gLSByWzFdKSk7XG4gICAgICAgIGN5bC50cmFuc2xhdGUoYy54LCBjLnksIGMueiAtIFIpO1xuICAgICAgICBjcGFydHMucHVzaChjeWwpO1xuICAgICAgfVxuICAgICAgZyA9IG1lcmdlR2VvcyhjcGFydHMpO1xuICAgIH1cbiAgICBhZGQoJ2Zhc2NpYS1wYW5lbCcsICdCcmFuZCBmYXNjaWEgcGFuZWwnLCBnLCAnZmFzY2lhJyk7XG4gIH1cblxuICAvKiBPbmUgZ2xhemluZyBwYW5lLCBub3Qgb25lIHBlciBiYXk6IHRoZSBtdWxsaW9uIGdyaWQgaW4gZnJvbnQgZG9lcyB0aGUgZGl2aWRpbmcuIE92ZXJsYXBzIElOVE9cbiAgICogdGhlIGZhY2FkZSBhdCB0aGUgYmFjayBhbmQgc2l0cyBSRUNFU1NFRCBiZWhpbmQgdGhlIGZyYW1pbmcgYXQgdGhlIGZyb250LiBNb3N0bHkgb3BhcXVlIGJ5XG4gICAqIGRlc2lnbiAtLSB0aGVyZSBpcyBubyBpbnRlcmlvciBiZWhpbmQgaXQsIHNvIGEgdHJhbnNwYXJlbnQgcGFuZSB3b3VsZCByZWFkIGFzIGEgaG9sZS4gKi9cbiAgLy8gVGhlIHBhbmUgaXMgbm90IGFsd2F5cyBjZW50cmVkOiBhIGJyYW5jaCBwbGFuIGNhbiBwdXQgaXRzIGdsYXppbmcgdG8gb25lIHNpZGUgb2YgdGhlIGVudHJhbmNlLlxuICAvLyBBdXRob3JlZCBjZW50cmVkIHdoaWxlIGl0cyBmcmFtaW5nIHNhdCBvZmYgdG8gdGhlIGxlZnQsIHRoZSB0d28gcmVhZCBhcyB1bnJlbGF0ZWQgcGFydHMuXG4gIC8vIGBnbGF6aW5nRXh0cmFgIGZvbGRzIGZ1cnRoZXIgcGFuZXMgLS0gYSBzaWRlIHdpbmRvdywgYSBjbGVyZXN0b3J5IC0tIGludG8gdGhlIFNBTUUgY29tcG9uZW50OlxuICAvLyBvbmUgbWF0ZXJpYWwsIG9uZSBkcmF3IGNhbGwsIGhvd2V2ZXIgbWFueSBvcGVuaW5ncyB0aGUgcGxhdGUgc2hvd3MuXG4gIHtcbiAgICAvLyBgYm94ZXNgIGxldHMgdGhlIHBhbmUgYmUgc2V2ZXJhbCBQQU5FTFMgaW4gb25lIGNvbXBvbmVudCAtLSBhIGZpeGVkIHJ1biwgYSB0cmFuc29tIGxpZ2h0XG4gICAgLy8gb3ZlciB0aGUgZG9vciBiYXksIGFuZCBhIGdhcCB3aGVyZSBhIGRlbGl2ZXJ5IGhhdGNoIG9wZW5zIC0tIHdpdGhvdXQgY29zdGluZyBhIGRyYXcgY2FsbFxuICAgIC8vIHBlciBwYW5lbC4gYGdsYXppbmdFeHRyYWAgaXMgdGhlIG9sZGVyIHNpbmdsZS1wYW5lLXBsdXMtZXh0cmFzIGZvcm0gYW5kIHN0aWxsIHdvcmtzLlxuICAgIGNvbnN0IHBhbmUgPSBHLmdsYXppbmcuYm94ZXNcbiAgICAgID8gYm94ZXMoRy5nbGF6aW5nLmJveGVzIGFzIG51bWJlcltdW10pXG4gICAgICA6IGJveEF0KEcuZ2xhemluZy5jeCA/PyAwLCBHLmdsYXppbmcuY3ksIEcuZ2xhemluZy5jeiA/PyAyLjUxLCBHLmdsYXppbmcudywgRy5nbGF6aW5nLmgsIEcuZ2xhemluZy5kID8/IDAuMTApO1xuICAgIGNvbnN0IGV4dHJhID0gKEcuZ2xhemluZ0V4dHJhID8/IFtdKSBhcyBudW1iZXJbXVtdO1xuICAgIGFkZCgnc2hvcGZyb250LWdsYXppbmcnLCAnU2hvcGZyb250IGdsYXppbmcnLFxuICAgICAgICBleHRyYS5sZW5ndGggPyBtZXJnZUdlb3MoW3BhbmUsIC4uLmV4dHJhLm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpXSkgOiBwYW5lLCAnZ2xhc3MnKTtcbiAgfVxuXG4gIC8qIEZyYW1pbmcsIHRyYW5zb20sIGtpY2sgcmFpbCwgZG9vciBqYW1icyBhbmQgaGVhZGVyIE1FUkdFRCBpbnRvIG9uZSBjb21wb25lbnQuIEV2ZXJ5IHBhcnQgaXNcbiAgICogdGhlIHNhbWUgbWV0YWw7IGZvbGRpbmcgdGhlbSB0b2dldGhlciBpcyB0aGUgZHJhdy1jYWxsIGxldmVyIGNob3NlbiBpbiB0aGUgYmxvY2tvdXQsIG5vdCBhblxuICAgKiBvcHRpbWlzYXRpb24gZGVmZXJyZWQgdG8gdGhlIGVuZCAtLSBhIHBhcnQgc3BsaXQgZm9yIGF1dGhvcmluZyBjb252ZW5pZW5jZSBjYW5ub3QgYmUgbWVyZ2VkXG4gICAqIGFmdGVyd2FyZHMgb25jZSBhIHBpdm90IGhhbmdzIG9mZiBpdC4gRnJvbnQgZmFjZSBzdGFuZHMgcHJvdWQgb2YgZ2xhemluZyBhbmQgbXVsbGlvbnMuICovXG4gIGFkZCgnc2hvcGZyb250LWZyYW1lJywgJ1Nob3Bmcm9udCBmcmFtaW5nIGFuZCBkb29yIGJheScsIGJveGVzKEcuZnJhbWUpLCBHLmZyYW1lTWF0ZXJpYWwpO1xuXG4gIC8qIEVudHJhbmNlIGRvb3I6IGEgcmVhbCBMRUFGIG9uIGEgcmVhbCBISU5HRSwgbm90IGEgcmVjdGFuZ2xlIHBhaW50ZWQgaW50byB0aGUgZ2xhemluZy4gVGhlXG4gICAqIGxlYWYgaXMgYnVpbHQgaW4gaGluZ2UtbG9jYWwgY29vcmRpbmF0ZXMgKHggcnVucyBmcm9tIHRoZSBoaW5nZSBzdGlsZSBvdXR3YXJkKSB1bmRlciBhIHBpdm90XG4gICAqIG5vZGUgYXQgdGhlIGphbWIsIHNvIHJvdGF0aW5nIHRoYXQgbm9kZSBhYm91dCArWSBzd2luZ3MgdGhlIGRvb3IuIFR3byBtZXNoZXMgLS0gc3RpbGVzIGFuZFxuICAgKiByYWlscyBpbiB0aGUgZnJhbWUgbWV0YWwsIGEgcGFuZSBpbiB0aGUgZ2xhc3MgLS0gYW5kIHRoaXMgaXMgdGhlIG9uZSBwYXJ0IG9mIGFuIG90aGVyd2lzZVxuICAgKiBzdGF0aWMgc2hlbGwgdGhhdCBlYXJucyBhIG5hbWVkIHBpdm90LiBUaGUgbGVhZiBzaXRzIGluIGl0cyBvd24gZGVwdGggYmFuZCBiZXR3ZWVuIHRoZVxuICAgKiBnbGF6aW5nIGFuZCB0aGUgZml4ZWQgZnJhbWUgc28gbm90aGluZyBvbiBpdCBpcyBjb3BsYW5hciB3aXRoIGEgZml4ZWQgZmFjZSBhdCBhbnkgYW5nbGUuICovXG4gIGNvbnN0IHBpdm90Tm9kZXM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgaWYgKEcuZG9vcikge1xuICAgIGNvbnN0IGQgPSBHLmRvb3I7XG4gICAgY29uc3QgaGluZ2UgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICBoaW5nZS5uYW1lID0gJ2Rvb3ItaGluZ2UnO1xuICAgIGhpbmdlLnBvc2l0aW9uLnNldChkLmhpbmdlWzBdLCBkLmhpbmdlWzFdLCBkLmhpbmdlWzJdKTtcbiAgICBoaW5nZS51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ2FydGljdWxhdGVkJyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ2Rvb3ItaGluZ2UnLFxuICAgICAgICAgICAgICAgbm90ZTogJ0VudHJhbmNlIGRvb3Igc3dpbmdzIGFib3V0IHRoZSBqYW1iIHN0aWxlLiBDbG9zZWQgYXQgMCwgb3BlbnMgb3V0d2FyZCB0b3dhcmQgK1ogd2l0aCBuZWdhdGl2ZSB5YXcuJyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQoaGluZ2UpO1xuICAgIHBpdm90Tm9kZXMucHVzaChoaW5nZSk7XG4gICAgY29uc3QgdyA9IGQudyBhcyBudW1iZXIsIGggPSBkLmggYXMgbnVtYmVyLCB5MCA9IGQueTAgYXMgbnVtYmVyLCB5MSA9IHkwICsgaCwgeW0gPSAoeTAgKyB5MSkgLyAyO1xuICAgIGNvbnN0IHN0ID0gZC5zdGlsZSA/PyAwLjA4LCBEID0gZC5kZXB0aCA/PyAwLjEyO1xuICAgIC8vIGBmbGlwYCBoYW5ncyB0aGUgbGVhZiBvbiB0aGUgT1RIRVIgamFtYjogbG9jYWwgK3ggcnVucyB0b3dhcmQgLVggaW5zdGVhZCBvZiArWCwgc28gdGhlXG4gICAgLy8gaGFuZGxlIGxhbmRzIG9uIHRoZSBjb3JyZWN0IGVkZ2UgZm9yIGEgcGxhdGUgd2hvc2UgZG9vciBwdWxsIGlzIG9uIHRoZSBsZWZ0LiBJdCBpcyBhIHNpZ25cbiAgICAvLyBvbiB0aGUgeCBjb29yZGluYXRlcyByYXRoZXIgdGhhbiBhIG1pcnJvcmVkIHRyYW5zZm9ybSwgYmVjYXVzZSBhIG5lZ2F0aXZlIHNjYWxlIGludmVydHNcbiAgICAvLyBldmVyeSBub3JtYWwgb24gdGhlIGxlYWYgYW5kIHRoZSBnbGFzcyB0aGVuIHJlbmRlcnMgaW5zaWRlLW91dC5cbiAgICBjb25zdCBzeCA9IGQuZmxpcCA/IC0xIDogMTtcbiAgICBjb25zdCBoeCA9IHcgLSAoZC5oYW5kbGUgPyAoZC5oYW5kbGVbMF0gPz8gMC4xNikgOiAwKTtcbiAgICBjb25zdCBsZWFmRnJhbWUgPSBib3hlcyhbXG4gICAgICBbc3ggKiAoc3QgLyAyKSwgeW0sIDAsIHN0LCBoLCBEXSxcbiAgICAgIFtzeCAqICh3IC0gc3QgLyAyKSwgeW0sIDAsIHN0LCBoLCBEXSxcbiAgICAgIFtzeCAqICh3IC8gMiksIHkxIC0gMC4wNCwgMCwgdywgMC4wOCwgRF0sXG4gICAgICBbc3ggKiAodyAvIDIpLCB5MCArIDAuMTYsIDAsIHcsIDAuMzIsIERdLFxuICAgICAgW3N4ICogKHcgLyAyKSwgZC5yYWlsWSA/PyAxLjA1LCAwLCB3LCAwLjA3LCBEXSxcbiAgICAgIC8vIFB1bGwgaGFuZGxlOiBhIHZlcnRpY2FsIGJhciBvbiB0d28gc3RhbmQtb2Zmcywgb24gdGhlIHN3aW5naW5nIGVkZ2UuIFRoZSBwbGF0ZSBzaG93cyBvbmVcbiAgICAgIC8vIGFuZCBpdCBpcyB0aGUgZGV0YWlsIHRoYXQgcmVhZHMgYSBnbGFzcyBsZWFmIGFzIGEgZG9vciByYXRoZXIgdGhhbiBhcyBhbm90aGVyIHBhbmUuXG4gICAgICAuLi4oZC5oYW5kbGUgPyBbXG4gICAgICAgIHsgY3lsOiBbc3ggKiBoeCwgKGQuaGFuZGxlWzFdID8/IDEuMDUpLCBEIC8gMiArIDAuMDUsIDAuMDE4LCBkLmhhbmRsZVsyXSA/PyAwLjgwLCAxMF0gfSxcbiAgICAgICAgW3N4ICogaHgsIChkLmhhbmRsZVsxXSA/PyAxLjA1KSArIChkLmhhbmRsZVsyXSA/PyAwLjgwKSAvIDIgLSAwLjAzLCBEIC8gMiArIDAuMDI1LCAwLjAzNiwgMC4wMzYsIDAuMTBdLFxuICAgICAgICBbc3ggKiBoeCwgKGQuaGFuZGxlWzFdID8/IDEuMDUpIC0gKGQuaGFuZGxlWzJdID8/IDAuODApIC8gMiArIDAuMDMsIEQgLyAyICsgMC4wMjUsIDAuMDM2LCAwLjAzNiwgMC4xMF0sXG4gICAgICBdIDogW10pLFxuICAgIF0gYXMgYW55KTtcbiAgICBjb25zdCBsZWFmUGFuZSA9IGJveEF0KHN4ICogKHcgLyAyKSwgKHkwICsgMC4zMiArIHkxIC0gMC4wOCkgLyAyLCAwLCB3IC0gMiAqIHN0LCB5MSAtIDAuMDggLSAoeTAgKyAwLjMyKSwgMC4wNCk7XG4gICAgZm9yIChjb25zdCBbaWQsIG5hbWUsIGdlbywgbWF0XSBvZiBbXG4gICAgICBbJ2Rvb3ItbGVhZi1mcmFtZScsICdFbnRyYW5jZSBkb29yIGxlYWYgZnJhbWUnLCBsZWFmRnJhbWUsIEcuZnJhbWVNYXRlcmlhbF0sXG4gICAgICBbJ2Rvb3ItbGVhZi1nbGFzcycsICdFbnRyYW5jZSBkb29yIGxlYWYgZ2xhc3MnLCBsZWFmUGFuZSwgJ2dsYXNzJ10sXG4gICAgXSBhcyBbc3RyaW5nLCBzdHJpbmcsIFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzdHJpbmddW10pIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdF0pO1xuICAgICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICAgIG5vZGUuYWRkKG1lc2gpOyBoaW5nZS5hZGQobm9kZSk7XG4gICAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyogU2lkZSBmZWF0dXJlOiBzaHV0dGVyLCBzZXJ2aWNlIGRvb3Igb3IgbG91dnJlLCBwZXIgcGxhdGUuIFN0YW5kcyBwcm91ZCBvZiB0aGUgd2FsbCBmYWNlIGJ1dFxuICAgKiBkZWxpYmVyYXRlbHkgTk9UIG91dCB0byB0aGUgcGFyYXBldCBwbGFuZSBhdCArLTQuMDAgLS0gYSBmYWNlIGF0IGV4YWN0bHkgKy00LjAwIHdvdWxkIGJlXG4gICAqIGNvcGxhbmFyIGFuZCBjby1mYWNpbmcgd2l0aCB0aGUgcGFyYXBldCBvdXRlciBmYWNlLCB3aGljaCB0aGUgYm91bmRpbmctYm94IGNvcGxhbmFyaXR5IGNoZWNrXG4gICAqIGZsYWdzIGV2ZW4gdGhvdWdoIHRoZSB0d28gbmV2ZXIgb3ZlcmxhcCBpbiBZLiAqL1xuICBpZiAoRy5zaWRlRmVhdHVyZSkgYWRkKCdzaWRlLWZlYXR1cmUnLCBHLnNpZGVGZWF0dXJlLm5hbWUsIGJveGVzKEcuc2lkZUZlYXR1cmUuYm94ZXMpLCBHLnNpZGVGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBGcm9udCBmZWF0dXJlOiBjbGFkZGluZyBiYW5kLCBBVE0gYmFuaywgdXBwZXItc3RvcmV5IGJhbmQgb3IgZm9yZWNvdXJ0LCBwZXIgcGxhdGUuICovXG4gIGlmIChHLmZyb250RmVhdHVyZSkgYWRkKCdmcm9udC1mZWF0dXJlJywgRy5mcm9udEZlYXR1cmUubmFtZSwgYm94ZXMoRy5mcm9udEZlYXR1cmUuYm94ZXMpLCBHLmZyb250RmVhdHVyZS5tYXRlcmlhbCk7XG5cbiAgLyogQSB0aGlyZCBtZXJnZWQgc2xvdCwgZm9yIHdoYXRldmVyIHRoZSBwbGF0ZSBoYXMgdGhhdCB0aGUgdHdvIGFib3ZlIGRvIG5vdCBjb3ZlciAtLSBhIHBhcmFwZXRcbiAgICogY29waW5nLCBhIGtlcmIsIGEgZm9yZWNvdXJ0IGNvbHVtbiBiYXNlLiBTYW1lIHJ1bGUgYXMgdGhlIG90aGVyczogZXZlcnl0aGluZyBpbiBpdCBzaGFyZXMgb25lXG4gICAqIG1hdGVyaWFsIGFuZCBpcyBzdWJtaXR0ZWQgb25jZS4gKi9cbiAgaWYgKEcuZXh0cmFGZWF0dXJlKSBhZGQoJ2V4dHJhLWZlYXR1cmUnLCBHLmV4dHJhRmVhdHVyZS5uYW1lLCBib3hlcyhHLmV4dHJhRmVhdHVyZS5ib3hlcyksIEcuZXh0cmFGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBBIGZvdXJ0aCBtZXJnZWQgc2xvdC4gVHdvIGZlYXR1cmVzIGluIERJRkZFUkVOVCBtYXRlcmlhbHMgY2Fubm90IHNoYXJlIGEgY29tcG9uZW50LCBhbmQgYVxuICAgKiBwbGF0ZSB0aGF0IHNob3dzIGEgZ2FsdmFuaXNlZCBwbGFudCBkZWNrIEFORCBhIHBhaW50ZWQgc3RlZWwgc2VydmljZSBkb29yIG5lZWRzIGJvdGguICovXG4gIGlmIChHLmV4dHJhRmVhdHVyZTIpIGFkZCgnZXh0cmEtZmVhdHVyZS0yJywgRy5leHRyYUZlYXR1cmUyLm5hbWUsIGJveGVzKEcuZXh0cmFGZWF0dXJlMi5ib3hlcyksIEcuZXh0cmFGZWF0dXJlMi5tYXRlcmlhbCk7XG5cbiAgLyogQSBUSU5URUQgbWVyZ2VkIHNsb3Q6IG9uZSBjb21wb25lbnQsIG9uZSBtYXRlcmlhbCwgYW5kIGEgcGVyLUJPWCBjb2xvdXIgd3JpdHRlbiBpbnRvIGEgdmVydGV4XG4gICAqIGNvbG91ciBhdHRyaWJ1dGUuIFRoaXMgaXMgaG93IGEgdHdvLWNvbG91ciBhcHBsaWVkIGdyYXBoaWMgLS0gYSB2aW55bCBkZWNhbCBiYW5kIG9uIGEgc2hvcGZyb250LFxuICAgKiBhIHBhaW50ZWQgc3RyaXBlIG9uIGEga2VyYiAtLSBzaGlwcyB3aXRob3V0IGEgbWF0ZXJpYWwgcGVyIGNvbG91ciwgb24gYSBraXQgd2hvc2UgbWF0ZXJpYWxcbiAgICogY2VpbGluZyBpcyB0aGUgYXhpcyB0aGVzZSBwcm9wcyBhcmUgdGlnaHRlc3Qgb24gYWZ0ZXIgZHJhdyBjYWxscy5cbiAgICpcbiAgICogVHdvIHJ1bGVzIG1ha2UgaXQgc2FmZS4gVGhlIG1hdGVyaWFsIG11c3QgYmUgV0hJVEUsIGJlY2F1c2UgYSB2ZXJ0ZXggY29sb3VyIE1VTFRJUExJRVMgd2l0aFxuICAgKiBtYXRlcmlhbC5jb2xvciBhbmQgYSB0aW50ZWQgYmFzZSB3b3VsZCBkYXJrZW4gZXZlcnkgdG9uZS4gQW5kIEVWRVJZIHZlcnRleCBoYXMgdG8gYmUgd3JpdHRlbixcbiAgICogYmVjYXVzZSB0aGUgc2hhZGVyIHJlYWRzIGEgbWlzc2luZyBjb2xvdXIgYXR0cmlidXRlIGFzICgwLDAsMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggYmxhY2sgLS1cbiAgICogdGhlIGZhaWx1cmUgdGhhdCBzaGlwcGVkIHRoZSB1Ym9zb3QncyB3YWxscyBhbmQgZWlnaHQgYm91bmRhcnkgc3RvbmVzIGFzIHNpbGhvdWV0dGVzLiBCb3RoIGFyZVxuICAgKiBzYXRpc2ZpZWQgaGVyZSBieSBjb25zdHJ1Y3Rpb246IHRoZSBhdHRyaWJ1dGUgaXMgZmlsbGVkIGJveCBieSBib3ggb3ZlciB0aGUgd2hvbGUgbWVyZ2UuIFRoZVxuICAgKiB0b25lcyBhcmUgTElORUFSLCBtYXRjaGluZyBob3cgdGhyZWUuanMgbXVsdGlwbGllcyB0aGVtLiAqL1xuICBpZiAoRy50aW50RmVhdHVyZSkge1xuICAgIGNvbnN0IHQgPSBHLnRpbnRGZWF0dXJlO1xuICAgIGNvbnN0IGxpc3QgPSB0LmJveGVzIGFzIChudW1iZXJbXSB8IHsgY3lsOiBudW1iZXJbXSB9KVtdO1xuICAgIGNvbnN0IHBhcnRzID0gbGlzdC5tYXAoKGIpID0+IGJveGVzKFtiXSkpO1xuICAgIGNvbnN0IGdlbyA9IG1lcmdlR2VvcyhwYXJ0cy5tYXAoKGcpID0+IGcuY2xvbmUoKSkpO1xuICAgIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkoZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCAqIDMpO1xuICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICBsZXQgdiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbiA9IHBhcnRzW2ldLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICAgIGMuc2V0SGV4KHQudG9uZXNbaSAlIHQudG9uZXMubGVuZ3RoXSk7XG4gICAgICAvLyBzZXRIZXggb24gYSBDb2xvciBpcyBzUkdCLWRlY29kZWQgYnkgdGhyZWUuanMgd2hlbiBjb2xvck1hbmFnZW1lbnQgaXMgb24sIHdoaWNoIGlzIHdoYXQgYVxuICAgICAgLy8gdmVydGV4IGNvbG91ciB3YW50czogdGhlIG11bHRpcGx5IGhhcHBlbnMgaW4gbGluZWFyIHNwYWNlLlxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHsgY29sWyh2ICsgaykgKiAzXSA9IGMucjsgY29sWyh2ICsgaykgKiAzICsgMV0gPSBjLmc7IGNvbFsodiArIGspICogMyArIDJdID0gYy5iOyB9XG4gICAgICB2ICs9IG47XG4gICAgICBwYXJ0c1tpXS5kaXNwb3NlKCk7XG4gICAgfVxuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgICBjb25zdCBtZXNoID0gYWRkKCd0aW50LWZlYXR1cmUnLCB0Lm5hbWUsIGdlbywgdC5tYXRlcmlhbCk7XG4gICAgKG1lc2gubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpLnZlcnRleENvbG9ycyA9IHRydWU7XG4gICAgKG1lc2gubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qIE11bGxpb25zOiB0aGUgZmluZSB2ZXJ0aWNhbCBncmlkIGlzIHRoZSBtb3N0IHJlY29nbmlzYWJsZSB0aGluZyBhYm91dCBhIHNob3Bmcm9udC4gSW5zdGFuY2VzXG4gICAqIG9uIG9uZSBnZW9tZXRyeSBjb3N0IG9uZSBkcmF3IGNhbGw7IGFzIGNvbXBvbmVudHMgdGhleSB3b3VsZCBoYXZlIGNvc3Qgb25lIGVhY2ggYW5kIGJsb3duIHRoZVxuICAgKiBjZWlsaW5nIG9uIHRoZWlyIG93bi4gVGhleSBzaXQgSU5TSURFIHRoZSBmcmFtZSBkZXB0aCBiYW5kIGF0IGJvdGggZW5kcyBzbyB0aGV5IGFyZSBub3RcbiAgICogY29wbGFuYXIgd2l0aCBpdCwgd2hpbGUgc3RpbGwgc3RhbmRpbmcgcHJvdWQgb2YgdGhlIGdsYXppbmcgc28gdGhlIGdsYXNzIHJlYWRzIGFzIHJlY2Vzc2VkLiAqL1xuICB7XG4gICAgY29uc3QgbSA9IEcubXVsbGlvbnM7XG4gICAgY29uc3QgbWF0cyA9IChtLnggYXMgbnVtYmVyW10pLm1hcCgoeCkgPT4gbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCBtLmN5LCBtLmN6ID8/IDIuNTgpKTtcbiAgICBhZGRJbnN0KCdzaG9wZnJvbnQtbXVsbGlvbnMnLCAnU2hvcGZyb250IG11bGxpb25zJywgbmV3IFRIUkVFLkJveEdlb21ldHJ5KG0udywgbS5oLCAwLjA4KSwgRy5mcmFtZU1hdGVyaWFsLCBtYXRzKTtcbiAgfVxuXG4gIC8qIFJvb2Z0b3AgY29uZGVuc2VyczogY2FzaW5nLCBmYW4gY293bCBhbmQgZm91ciBmZWV0IE1FUkdFRCBpbnRvIGEgc2luZ2xlIGluc3RhbmNlZCBnZW9tZXRyeS5cbiAgICogRmVldCBzdGFydCBiZWxvdyB0aGUgZGVjayB0b3Agc28gdGhlIHR3byBvdmVybGFwIHJhdGhlciB0aGFuIHNoYXJpbmcgYSBwbGFuZS5cbiAgICpcbiAgICogQW4gRU1QVFkgbGlzdCBpcyBhIGxlZ2l0aW1hdGUgYW5zd2VyLCBub3QgYSBtaXNzaW5nIGNvbmZpZy4gSW5zdGFuY2luZyBvbmUgY2FzaW5nIGlzIHRoZSByaWdodFxuICAgKiBsZXZlciB3aGVuIGEgcGxhdGUgc2hvd3MgdGhlIHNhbWUgYm94IHR3byBvciB0aHJlZSB0aW1lczsgaXQgaXMgdGhlIHdyb25nIG9uZSB3aGVuIHRoZSBwbGF0ZVxuICAgKiBzaG93cyBnZW51aW5lbHkgZGlmZmVyZW50IHVuaXRzIC0tIGEgaG9vZGVkIGR1Y3QgcnVuLCBhIHdhbGwtdHlwZSBjb25kZW5zZXIgd2l0aCBhIHNxdWFyZSBmYW5cbiAgICogZ3VhcmQsIGEgdGFsbCBsb3V2cmVkIHRvd2VyIC0tIGFuZCByZXBlYXRpbmcgb25lIGNhc2luZyB0aHJlZSB0aW1lcyBpcyB0aGVuIGEgc2ltcGxpZmljYXRpb25cbiAgICogdGhhdCBjb3N0cyBmaWRlbGl0eSB0byBzYXZlIG5vdGhpbmcuIFN1Y2ggYSBwbGFudCBkZWNrIGNvbWVzIGluIHRocm91Z2ggYGV4dHJhRmVhdHVyZWAgYXNcbiAgICogbWVyZ2VkIGdlb21ldHJ5OiBzdGlsbCBPTkUgZHJhdyBjYWxsLCBhbmQgZXZlcnkgdW5pdCBpdHMgb3duIHNoYXBlLiAqL1xuICBpZiAoKEcuY29uZGVuc2VycyBhcyBudW1iZXJbXVtdID8/IFtdKS5sZW5ndGgpIHtcbiAgICAvKiBgY29uZGVuc2VyUGFydHNgIHJlcGxhY2VzIHRoZSBkZWZhdWx0IGNhc2luZyB3aXRoIGFuIGF1dGhvcmVkIHVuaXQgaW4gdGhlIFNBTUUgYm94L2N5bFxuICAgICAqIGdyYW1tYXIsIGluIHVuaXQtbG9jYWwgY29vcmRpbmF0ZXMgKG9yaWdpbiBvbiB0aGUgZGVjaywgdGhlIGdyaWxsZSBmYWNpbmcgK1ogYmVmb3JlIHlhdykuXG4gICAgICogQSBwYWNrYWdlZCByb29mdG9wIHVuaXQgaXMgbm90IGEgcGxhaW4gYm94OiB0aGUgcGxhdGUgc2hvd3MgYSByZWNlc3NlZCBsb3V2cmUgcGFuZWwgd2l0aCBhXG4gICAgICogZmFuIGRpc2MgYmVoaW5kIGl0LCBhIGxpZGRlZCB0b3Agd2l0aCBhIHJvdW5kIGNvd2wgb3BlbmluZywgYW5kIHBhbmVsIHNlYW1zIGRvd24gdGhlIGxvbmdcbiAgICAgKiBzaWRlLiBBbGwgb2YgaXQgbWVyZ2VzIGludG8gdGhlIE9ORSBpbnN0YW5jZWQgZ2VvbWV0cnksIHNvIHRoZSBkZXRhaWwgaXMgZnJlZSBwZXIgdW5pdC4gKi9cbiAgICBsZXQgdW5pdDogVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gICAgaWYgKEcuY29uZGVuc2VyUGFydHMgJiYgRy5jb25kZW5zZXJUb25lcykge1xuICAgICAgLy8gUGVyLXBhcnQgdG9uZXM6IGEgZGFyayBiYWNrIHBsYXRlIGFuZCBmYW4gZGlzYyBiZWhpbmQgbGlnaHRlciBibGFkZXMgaXMgd2hhdCBtYWtlcyBhIGxvdXZyZVxuICAgICAgLy8gZ3JpbGxlIHJlYWQgYXMgYW4gaW50YWtlIHJhdGhlciB0aGFuIGFzIGEgcGFuZWwgb2YgdGhlIGNhc2luZy4gVGhlIHRpbnQgcmlkZXMgYSB2ZXJ0ZXhcbiAgICAgIC8vIGNvbG91ciBvbiB0aGUgcGxhbnQgbWF0ZXJpYWwsIGFuZCBldmVyeSBvdGhlciBtZXNoIG9uIHRoYXQgbWF0ZXJpYWwgaXMgZmlsbGVkIHdoaXRlIGJlbG93LlxuICAgICAgdW5pdCA9IHRvbmVkQm94ZXMoRy5jb25kZW5zZXJQYXJ0cyBhcyAobnVtYmVyW10gfCB7IGN5bDogbnVtYmVyW10gfSlbXSwgRy5jb25kZW5zZXJUb25lcyBhcyBudW1iZXJbXSk7XG4gICAgfSBlbHNlIGlmIChHLmNvbmRlbnNlclBhcnRzKSB7XG4gICAgICB1bml0ID0gYm94ZXMoRy5jb25kZW5zZXJQYXJ0cyBhcyAobnVtYmVyW10gfCB7IGN5bDogbnVtYmVyW10gfSlbXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW1xuICAgICAgICBib3hBdCgwLCAwLjQ2LCAwLCAwLjk1LCAwLjcyLCAwLjg1KSxcbiAgICAgICAgY3lsQXQoMCwgMC44NywgMCwgMC4zMCwgMC4xMCwgMTYpLFxuICAgICAgXTtcbiAgICAgIGZvciAoY29uc3QgZnggb2YgWy0wLjQsIDAuNF0pIGZvciAoY29uc3QgZnogb2YgWy0wLjM1LCAwLjM1XSkgcGFydHMucHVzaChib3hBdChmeCwgMC4wNSwgZnosIDAuMDgsIDAuMTAsIDAuMDgpKTtcbiAgICAgIHVuaXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICAgIH1cbiAgICAvLyBBbiBvcHRpb25hbCBmb3VydGggbnVtYmVyIGlzIGEgVU5JRk9STSBTQ0FMRSwgc28gb25lIGluc3RhbmNlZCB1bml0IGNhbiBzdGFuZCBpbiBmb3IgYSBwbGF0ZVxuICAgIC8vIHRoYXQgc2hvd3Mgb25lIGxhcmdlIGNvbmRlbnNlciBiZXNpZGUgdHdvIHNtYWxsIG9uZXMgd2l0aG91dCBhIHNlY29uZCBnZW9tZXRyeS5cbiAgICBjb25zdCBtYXRzID0gKEcuY29uZGVuc2VycyBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB6LCB5YXcsIHNdKSA9PlxuICAgICAgbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyh4LCAoRy5jb25kZW5zZXJZID8/IDMuNjApIGFzIG51bWJlciwgeiksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgeWF3KSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMocyA/PyAxLCBzID8/IDEsIHMgPz8gMSksXG4gICAgICApKTtcbiAgICAvLyBUaGUgcGxhbnQgbWF0ZXJpYWwgaXMgQ09ORklHVVJBQkxFLCBub3QgaGFyZC1jb2RlZC4gUmVmZXJlbmNpbmcgYSAnZ2FsdicgaWQgdGhhdCBhIGNvbmZpZ1xuICAgIC8vIGRvZXMgbm90IGRlZmluZSBzaWxlbnRseSBoYW5kcyBJbnN0YW5jZWRNZXNoIGFuIHVuZGVmaW5lZCBtYXRlcmlhbCwgdGhyZWUuanMgc3Vic3RpdHV0ZXMgYVxuICAgIC8vIGRlZmF1bHQsIGFuZCB0aGUgcHJvcCBzaGlwcyBvbmUgbWF0ZXJpYWwgb3ZlciBpdHMgY2VpbGluZyB3aXRoIG5vdGhpbmcgaW4gdGhlIGNvbmZpZyB0b1xuICAgIC8vIGV4cGxhaW4gdGhlIGV4dHJhLlxuICAgIGFkZEluc3QoJ3BsYW50LWNvbmRlbnNlcnMnLCAnUm9vZnRvcCBjb25kZW5zZXIgdW5pdHMnLCB1bml0LCBHLnBsYW50TWF0ZXJpYWwgPz8gJ2dhbHYnLCBtYXRzKTtcbiAgfVxuXG4gIC8qIE9wdGlvbmFsIGluc3RhbmNlZCBleHRyYTogY2Fub3B5IHBsYXRlcywgcGlsYXN0ZXJzIG9yIGZvcmVjb3VydCBjb2x1bW5zLCBwZXIgcGxhdGUuICovXG4gIGlmIChHLmV4dHJhU3lzdGVtKSB7XG4gICAgY29uc3QgZSA9IEcuZXh0cmFTeXN0ZW07XG4gICAgbGV0IHVuaXQ6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5O1xuICAgIGlmIChlLmtpbmQgPT09ICdwbGF0ZScpIHtcbiAgICAgIHVuaXQgPSBtZXJnZUdlb3MoW2JveEF0KDAsIDAsIDAsIGUudywgZS5oLCBlLmQpLCBjeWxBdCgwLCAtZS5oIC8gMiAtIDAuMDE1LCAwLCAwLjA4NSwgMC4wMywgMTIpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXQgPSBib3hBdCgwLCAwLCAwLCBlLncsIGUuaCwgZS5kKTtcbiAgICB9XG4gICAgY29uc3QgbWF0cyA9IChlLmF0IGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHksIHpdKSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIHksIHopKTtcbiAgICBhZGRJbnN0KGUuaWQsIGUubmFtZSwgdW5pdCwgZS5tYXRlcmlhbCwgbWF0cywgZS50b25lcyA/IG1hdHMubWFwKChfLCBpKSA9PiBlLnRvbmVzW2kgJSBlLnRvbmVzLmxlbmd0aF0pIDogdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qIFZlcnRleC1jb2xvdXIgZmlsbC1pbiBydW5zIExBU1QsIG92ZXIgZXZlcnkgbWVzaCB0aGF0IGV4aXN0cy4gSXQgdXNlZCB0byBydW4gcmlnaHQgYWZ0ZXIgdGhlXG4gICAqIGRlY2sgYW5kIHRoZSBwbGFudCB3ZXJlIGFkZGVkLCBzbyBhbnkgbGF0ZXIgbWVzaCBvbiB0aGUgc2FtZSBtYXRlcmlhbCAtLSBNYWtybydzIGNvbmNyZXRlXG4gICAqIGNhbm9weSBhbmQgcGxpbnRoIG9uIHRoZSB0b25lZCBkZWNrIG1hdGVyaWFsIC0tIGhhZCBubyBjb2xvdXIgYXR0cmlidXRlIGFuZCByZW5kZXJlZCBCTEFDSy4gKi9cbiAgaWYgKHRvbmVkRGVjaykgZmluaXNoVmVydGV4Q29sb3JzKG1hdGVyaWFscywgbWVzaGVzLCAnZGVjaycpO1xuICBpZiAoRy5jb25kZW5zZXJUb25lcyAmJiAoRy5jb25kZW5zZXJzIGFzIG51bWJlcltdW10gPz8gW10pLmxlbmd0aCkgZmluaXNoVmVydGV4Q29sb3JzKG1hdGVyaWFscywgbWVzaGVzLCBHLnBsYW50TWF0ZXJpYWwgPz8gJ2dhbHYnKTtcblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMsIHBpdm90Tm9kZXMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZSAmIHsgcGl2b3ROb2RlczogVEhSRUUuT2JqZWN0M0RbXSB9O1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJyYW5kIGZhc2NpYSBjYW52YXMgKi9cblxuLyoqIERyYXcgdGhlIGJyYW5kIHdvcmRtYXJrIG9udG8gYSBjYW52YXMgYW5kIGFzc2lnbiBpdCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24uIFRoaXMgaXMgdGhlXG4gKiAgZG9jdW1lbnRlZCByb3V0ZSBmb3IgYSBwcmludGVkIGJyYW5kIGZhc2NpYSBhbmQgaXMgdW5hZmZlY3RlZCBieSB0aGUgbWF0ZXJpYWwncyBgdGV4dHVyZWxlc3NgXG4gKiAgZGVjbGFyYXRpb24gLS0gd2hhdCB0aGF0IHNraXBzIGlzIHRoZSBmaXZlLWNhbnZhcyBQUk9DRURVUkFMIHNldCwgYSBkaWZmZXJlbnQgdGhpbmcgZW50aXJlbHkuXG4gKlxuICogIFRleHQgaXMgZml0dGVkIHRvIGl0cyBmaWVsZCBieSBNRUFTVVJFTUVOVCByYXRoZXIgdGhhbiBieSBhIGZvbnQtc2l6ZSByYXRpbzogaGVhZGxlc3MgQ2hyb21lJ3NcbiAqICBmb250IGZhbGxiYWNrIGRlY2lkZXMgdGhlIHJlYWwgYWR2YW5jZSB3aWR0aHMsIHNvIHRoZSBvbmx5IHJlbGlhYmxlIHdheSB0byBmaWxsIGEga25vd24gYm94IGlzXG4gKiAgdG8gbWVhc3VyZSB0aGUgc3RyaW5nIGFuZCBzY2FsZSBpdCBob3Jpem9udGFsbHkuICovXG5mdW5jdGlvbiBhcHBseUZhc2NpYUdyYXBoaWMocm9vdDogVEhSRUUuR3JvdXApOiB2b2lkIHtcbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZSB8IHVuZGVmaW5lZDtcbiAgY29uc3QgbWVzaCA9IHJ0Py5tZXNoZXM/LlsnZmFzY2lhLXBhbmVsJ107XG4gIGlmICghbWVzaCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gIGNvbnN0IG1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgaWYgKCFtYXRlcmlhbCkgcmV0dXJuO1xuXG4gIGNvbnN0IGcgPSBDT05GSUcuZ3JhcGhpYyBhcyBhbnk7XG4gIGNvbnN0IHNyZ2IgPSAoVEhSRUUgYXMgYW55KS5TUkdCQ29sb3JTcGFjZTtcblxuICAvLyBBIEJBS0VEIHNpZ24gLS0gdGhlIGZhY2UgaW1hZ2UgY29tcG9zZWQgb25jZSBmcm9tIGEgcmVhbCBmb250IGFuZCB2ZWN0b3IgbWFya3MgYW5kIGVtYmVkZGVkXG4gIC8vIGFzIGEgV2ViUCBkYXRhIFVSSSAtLSBiZWF0cyBmaWxsVGV4dCwgd2hpY2ggZHJhd3MgYSBkaWZmZXJlbnQgd29yZG1hcmsgb24gZXZlcnkgbWFjaGluZSdzXG4gIC8vIGZvbnQgZmFsbGJhY2suIExhaWQgb3V0IHRvIHRoZSBzYW1lIFVWIGNvbnRyYWN0IGFzIHRoZSBjYW52YXM6IHRoZSB0b3AgODcuNSAlIGlzIHRoZSBiYW5kXG4gIC8vIHRoZSArWiBmYWNlIHNhbXBsZXMgYW5kIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgaXMgdGhlIHBsYWluIGZpZWxkIGV2ZXJ5IG90aGVyIGZhY2Ugc2FtcGxlcy5cbiAgLy8gQXNzaWduZWQgc3luY2hyb25vdXNseSBzbyB0aGUgaGFybmVzcyB3YWl0cyBvbiB0aGUgZGVjb2RlOyB0aGUgY2FudmFzIG9wcyBiZWxvdyBhcmUgdGhlXG4gIC8vIGRlY29kZSBGQUxMQkFDSyBvbmx5LlxuICBpZiAoZy5iYWtlZCkge1xuICAgIGNvbnN0IGJha2VkID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKGcuYmFrZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAoKSA9PiB7XG4gICAgICBjb25zdCBjID0gZHJhd0Zhc2NpYUNhbnZhcyhnKTtcbiAgICAgIGlmICghYykgcmV0dXJuO1xuICAgICAgY29uc3QgdCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGMpO1xuICAgICAgaWYgKHNyZ2IpIHQuY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgICB0LmFuaXNvdHJvcHkgPSA0O1xuICAgICAgbWF0ZXJpYWwubWFwID0gdDtcbiAgICAgIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBpZiAoc3JnYikgYmFrZWQuY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgYmFrZWQuYW5pc290cm9weSA9IDQ7XG4gICAgYmFrZWQubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG1hdGVyaWFsLm1hcCA9IGJha2VkO1xuICAgIG1hdGVyaWFsLmNvbG9yLnNldEhleCgweGZmZmZmZik7XG4gICAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNhbnZhcyA9IGRyYXdGYXNjaWFDYW52YXMoZyk7XG4gIGlmICghY2FudmFzKSByZXR1cm47XG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGNhbnZhcyk7XG4gIGlmIChzcmdiKSB0ZXguY29sb3JTcGFjZSA9IHNyZ2I7XG4gIHRleC5hbmlzb3Ryb3B5ID0gNDtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgbWF0ZXJpYWwubWFwID0gdGV4O1xuICAvLyBXaGl0ZSBiYXNlIHNvIHRoZSBjYW52YXMgc2hvd3MgYXMgZHJhd24gcmF0aGVyIHRoYW4gdGludGVkIC0tIHRoZSBtZWFzdXJlZCBmYXNjaWEgY29sb3VyIGlzXG4gIC8vIGFscmVhZHkgcGFpbnRlZCBpbnRvIHRoZSBjYW52YXMgYmFja2dyb3VuZC5cbiAgbWF0ZXJpYWwuY29sb3Iuc2V0SGV4KDB4ZmZmZmZmKTtcbiAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBkcmF3RmFzY2lhQ2FudmFzKGc6IGFueSk6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCB7XG4gIC8vIEEgcm91bmQgc2lnbiBuZWVkcyBhIFNRVUFSRSBjYW52YXM6IHRoZSBjeWxpbmRlciBjYXAgbWFwcyB0aGUgY2lyY2xlIGludG8gdGhlIHVuaXQgc3F1YXJlLFxuICAvLyBzbyBhIDIwNDh4MzIwIHN0cmlwIHdvdWxkIHNxdWFzaCB0aGUgbWFyayBmbGF0LiBBIHJlY3Rhbmd1bGFyIGZhc2NpYSBrZWVwcyB0aGUgd2lkZSBzdHJpcCxcbiAgLy8gd2hlcmUgdGhlIGJvdHRvbSAxMi41JSBpcyB0aGUgcGxhaW4gY29ybmVyIGV2ZXJ5IG5vbi1mcm9udCBmYWNlIHNhbXBsZXMuXG4gIGNvbnN0IHNxdWFyZSA9ICEhZy5zcXVhcmU7XG4gIGNvbnN0IFcgPSBzcXVhcmUgPyA1MTIgOiAoZy5zaXplPy5bMF0gPz8gMjA0OCksIEggPSBzcXVhcmUgPyA1MTIgOiAoZy5zaXplPy5bMV0gPz8gMzIwKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy53aWR0aCA9IFc7IGNhbnZhcy5oZWlnaHQgPSBIO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBnLmJhY2tncm91bmQ7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBXLCBIKTtcbiAgY29uc3QgYmFuZCA9IHNxdWFyZSA/IEggOiBIICogKGcuYmFuZEZyYWMgPz8gMC44NzUpO1xuXG4gIGNvbnN0IGZpdCA9ICh0ZXh0OiBzdHJpbmcsIGZvbnQ6IHN0cmluZywgeDA6IG51bWJlciwgeDE6IG51bWJlciwgY3k6IG51bWJlciwgZmlsbDogc3RyaW5nLCBzdHJva2VDb2w/OiBzdHJpbmcsIHN0cm9rZVc/OiBudW1iZXIpID0+IHtcbiAgICBjdHguZm9udCA9IGZvbnQ7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgY29uc3QgdyA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICBjb25zdCBzID0gKHgxIC0geDApIC8gdztcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoeDAsIDApO1xuICAgIGN0eC5zY2FsZShzLCAxKTtcbiAgICBpZiAoc3Ryb2tlQ29sKSB7IGN0eC5saW5lSm9pbiA9ICdyb3VuZCc7IGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbDsgY3R4LmxpbmVXaWR0aCA9IChzdHJva2VXID8/IDYpIC8gczsgY3R4LnN0cm9rZVRleHQodGV4dCwgMCwgY3kpOyB9XG4gICAgY3R4LmZpbGxTdHlsZSA9IGZpbGw7XG4gICAgY3R4LmZpbGxUZXh0KHRleHQsIDAsIGN5KTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9O1xuXG4gIGZvciAoY29uc3Qgb3Agb2YgZy5vcHMgYXMgYW55W10pIHtcbiAgICBpZiAob3AudHlwZSA9PT0gJ3JlY3QnKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gb3AuZmlsbDtcbiAgICAgIGNvbnN0IHggPSBvcC54ICogVywgeSA9IG9wLnkgKiBiYW5kLCB3ID0gb3AudyAqIFcsIGggPSBvcC5oICogYmFuZCwgciA9IChvcC5yID8/IDApICogYmFuZDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGlmIChyID4gMCkge1xuICAgICAgICBjdHgubW92ZVRvKHggKyByLCB5KTsgY3R4LmxpbmVUbyh4ICsgdyAtIHIsIHkpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgdywgeSwgeCArIHcsIHkgKyByKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgdywgeSArIGggLSByKTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHcsIHkgKyBoLCB4ICsgdyAtIHIsIHkgKyBoKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgciwgeSArIGgpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaCwgeCwgeSArIGggLSByKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgcik7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByLCB5KTtcbiAgICAgIH0gZWxzZSBjdHgucmVjdCh4LCB5LCB3LCBoKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gb3AuZmlsbDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmMob3AuY3ggKiBXLCBvcC5jeSAqIGJhbmQsIG9wLnIgKiBiYW5kLCAwLCBNYXRoLlBJICogMik7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH0gZWxzZSBpZiAob3AudHlwZSA9PT0gJ3BvbHknKSB7XG4gICAgICAvLyBBbiBhcmJpdHJhcnkgcG9seWdvbiBpbiBub3JtYWxpc2VkIGNhbnZhcyBjb29yZHMsIGZvciBhIG1hcmsgYSBmb250IGNhbm5vdCBzZXQgLS0gYVxuICAgICAgLy8gbGlnaHRuaW5nIGJvbHQsIGEgY2hldnJvbiwgYSBsZWFmLiBQb2ludHMgYXJlIFt4LCB5XSB3aXRoIHggYSBmcmFjdGlvbiBvZiB0aGUgY2FudmFzIHdpZHRoXG4gICAgICAvLyBhbmQgeSBhIGZyYWN0aW9uIG9mIHRoZSBiYW5kIGhlaWdodC5cbiAgICAgIGN0eC5maWxsU3R5bGUgPSBvcC5maWxsO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY29uc3QgcHRzID0gb3AucG9pbnRzIGFzIG51bWJlcltdW107XG4gICAgICBjdHgubW92ZVRvKHB0c1swXVswXSAqIFcsIHB0c1swXVsxXSAqIGJhbmQpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIGN0eC5saW5lVG8ocHRzW2ldWzBdICogVywgcHRzW2ldWzFdICogYmFuZCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH0gZWxzZSBpZiAob3AudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBmaXQob3AudGV4dCwgYCR7b3Auc3R5bGUgPz8gJ2JvbGQnfSAke01hdGgucm91bmQob3Auc2l6ZSAqIGJhbmQpfXB4ICR7b3AuZmFtaWx5ID8/ICdBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJ31gLFxuICAgICAgICBvcC54MCAqIFcsIG9wLngxICogVywgb3AuY3kgKiBiYW5kLCBvcC5maWxsLCBvcC5zdHJva2UsIG9wLnN0cm9rZVcgPyBvcC5zdHJva2VXICogYmFuZCA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNhbnZhcztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsYXppbmcgZ3JhcGhpYyAqL1xuXG4vKiogQSBidWlsZGluZyBpcyBhbiBleHRlcmlvciBzaGVsbCB3aXRoIG5vIGludGVyaW9yLCBzbyBhIHBsYWluIHRpbnRlZCBwYW5lIHJlYWRzIGFzIGEgYmxpbmQgc2xhYlxuICogIC0tIG9yLCBkYXJrIGVub3VnaCwgYXMgYSBob2xlLiBgZ3JhcGhpYy5nbGFzc2AgcGFpbnRzIGEgZGUtbGl0IGludGVyaW9yIHZpZXcgaW50byB0aGUgZ2xhemluZzpcbiAqICBvbmUgYmFrZWQgaW1hZ2UgcHJvamVjdGVkIGJ5IFdPUkxEIHgveSBvdmVyIGByZWN0YCBbeDAsIHkwLCB4MSwgeTFdIHNvIGl0IGxpbmVzIHVwIGFjcm9zcyB0aGVcbiAqICB3aW5kb3cgcGFuZSwgdGhlIHRyYW5zb20gYW5kIHRoZSBkb29yIGxlYXZlcywgd2hpY2ggYXJlIHNlcGFyYXRlIGJveGVzIGluIG9uZSBtZXJnZWQgbWVzaC5cbiAqICBBc3NpZ25lZCBhZnRlciBtYXRlcmlhbCBjb25zdHJ1Y3Rpb247IHRoZSBtYXRlcmlhbCBzdGF5cyBgdGV4dHVyZWxlc3NgIGluIHRoZSBzcGVjLiAqL1xuZnVuY3Rpb24gYXBwbHlHbGFzc0dyYXBoaWMocm9vdDogVEhSRUUuR3JvdXApOiB2b2lkIHtcbiAgY29uc3QgZyA9IChDT05GSUcuZ3JhcGhpYyBhcyBhbnkpPy5nbGFzcztcbiAgLy8gTm9kZSBoYXMgbm8gYGRvY3VtZW50YCwgYW5kIHRoYWlraXQncyBjb3BsYW5hciBjaGVja2VyIGFuZCBwYXJ0IG1hbmlmZXN0IGV2YWx1YXRlIHRoaXNcbiAgLy8gbW9kdWxlIHRoZXJlOiBUZXh0dXJlTG9hZGVyIHdvdWxkIHRocm93LCBzbyB0aGUgZ2xhemluZyBrZWVwcyBpdHMgZmxhdCBmYWxsYmFjayBhbGJlZG8uXG4gIGlmICghZyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IFt4MCwgeTAsIHgxLCB5MV0gPSBnLnJlY3QgYXMgbnVtYmVyW107XG4gIC8vIGBhbHNvYCBleHRlbmRzIHRoZSBwcm9qZWN0aW9uIHRvIHBhbmVzIHRoYXQgYXJlIE5PVCBpbiB0aGUgZ2xhemluZyBjb21wb25lbnQgLS0gYSBoaW5nZWQgZG9vclxuICAvLyBsZWFmLCB3aG9zZSBnZW9tZXRyeSBpcyBhdXRob3JlZCBpbiBISU5HRS1sb2NhbCBjb29yZGluYXRlcywgc28gaXQgbmFtZXMgdGhlIG9mZnNldCBmcm9tIHRoZVxuICAvLyBoaW5nZSB0byB0aGUgd29ybGQgb3JpZ2luIGFuZCB0aGUgc2FtZSB3b3JsZCByZWN0IHRoZW4gbGFuZHMgb24gaXQuIFdpdGhvdXQgdGhpcyB0aGUgbGVhZiBpc1xuICAvLyB0aGUgb25lIHBhbmUgaW4gdGhlIHNob3Bmcm9udCB3aXRoIG5vIGludGVyaW9yIGJlaGluZCBpdCwgd2hpY2ggcmVhZHMgYXMgYSBibGluZCBwYW5lbCBpblxuICAvLyB0aGUgbWlkZGxlIG9mIGEgd2luZG93LlxuICBjb25zdCB0YXJnZXRzID0gW3sgaWQ6ICdzaG9wZnJvbnQtZ2xhemluZycsIG9mZjogWzAsIDAsIDBdIH0sIC4uLigoZy5hbHNvID8/IFtdKSBhcyBhbnlbXSldO1xuICBsZXQgbWF0ZXJpYWw6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsIHwgbnVsbCA9IG51bGw7XG4gIGZvciAoY29uc3QgdCBvZiB0YXJnZXRzKSB7XG4gICAgY29uc3QgbWVzaCA9IHJ0Py5tZXNoZXM/Llt0LmlkXTtcbiAgICBpZiAoIW1lc2gpIGNvbnRpbnVlO1xuICAgIGNvbnN0IG0gPSBtZXNoLm1hdGVyaWFsIGFzIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuICAgIGlmICghbSkgY29udGludWU7XG4gICAgbWF0ZXJpYWwgPSBtYXRlcmlhbCA/PyBtO1xuICAgIGNvbnN0IGdlbyA9IG1lc2guZ2VvbWV0cnkgYXMgVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gICAgY29uc3QgcG9zID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgICBjb25zdCBvZmYgPSAodC5vZmYgPz8gWzAsIDAsIDBdKSBhcyBudW1iZXJbXTtcbiAgICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocG9zLmNvdW50ICogMik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MuY291bnQ7IGkrKykge1xuICAgICAgdXZbaSAqIDJdID0gKHBvcy5nZXRYKGkpICsgb2ZmWzBdIC0geDApIC8gKHgxIC0geDApO1xuICAgICAgdXZbaSAqIDIgKyAxXSA9IChwb3MuZ2V0WShpKSArIG9mZlsxXSAtIHkwKSAvICh5MSAtIHkwKTtcbiAgICB9XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIH1cbiAgaWYgKCFtYXRlcmlhbCkgcmV0dXJuO1xuICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChnLmJha2VkKTtcbiAgaWYgKHNyZ2IpIHRleC5jb2xvclNwYWNlID0gc3JnYjtcbiAgdGV4LmFuaXNvdHJvcHkgPSA0O1xuICB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBtYXRlcmlhbC5tYXAgPSB0ZXg7XG4gIC8vIFRoZSBpbWFnZSBjYXJyaWVzIHRoZSB0aW50OyBhIGNvbG91cmVkIGJhc2Ugd291bGQgYXBwbHkgaXQgdHdpY2UuXG4gIG1hdGVyaWFsLmNvbG9yLnNldEhleCgweGZmZmZmZik7XG4gIGlmIChnLnJvdWdobmVzcyAhPT0gdW5kZWZpbmVkKSBtYXRlcmlhbC5yb3VnaG5lc3MgPSBnLnJvdWdobmVzcztcbiAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd2FsbCByZW5kZXIgZ3JhcGhpYyAqL1xuXG4vKiogQSByZW5kZXJlZCBjb25jcmV0ZSB3YWxsIGlzIG5vdCBhIGZsYXQgY29sb3VyLiBFdmVyeSBwbGF0ZSBpbiB0aGlzIHNldCBzaG93cyB0aGUgc2FtZSB0aGluZyAtLVxuICogIHZlcnRpY2FsIHJhaW4gc3RyZWFraW5nIG9mZiB0aGUgY29waW5nLCBwYXRjaHkgZmxvYXQgbWFya3MsIGEgZGFya2VyIGJhbmQgd2hlcmUgdGhlIHdhbGwgbWVldHNcbiAqICB0aGUgZ3JvdW5kIC0tIGFuZCBhIHdhbGwgYXV0aG9yZWQgYXMgb25lIGFsYmVkbyByZWFkcyBhcyBwYWludGVkIGNhcmQgbmV4dCB0byB0aGUgc2hvcGZyb250J3NcbiAqICByZWFsIGRldGFpbC4gYGdyYXBoaWMud2FsbGAgcGFpbnRzIGEgU0VBTUxFU1MgdGlsZSBvbmNlIGFuZCByZXBlYXRzIGl0IG92ZXIgdGhlIHdhbGwgbWVzaGVzLlxuICpcbiAqICBJdCBpcyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcywgc28gdGhlIG1hdGVyaWFsIHN0YXlzIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNwZWM6IHdoYXQgdGhhdFxuICogIGRlY2xhcmF0aW9uIHNraXBzIGlzIGNyZWF0ZVNjdWxwdE1hdGVyaWFsJ3MgZml2ZS1jYW52YXMgcHJvY2VkdXJhbCBzZXQsIHdoaWNoIGNvc3RzIHRoZSBzcXVhcmVcbiAqICBvZiBpdHMgcmVzb2x1dGlvbiBhbmQgZGlzY2FyZHMgdGhlIG1lYXN1cmVkIGFsYmVkby4gT25lIHRpbGUgZHJhd24gb25jZSBjb3N0cyBtaWxsaXNlY29uZHMgYW5kXG4gKiAga2VlcHMgdGhlIGFsYmVkbywgYmVjYXVzZSB0aGUgdGlsZSBpcyBhdXRob3JlZCBpbiBNVUxUSVBMSUVSIHNwYWNlIC0tIG1pZC1ncmV5IDEyOCBpcyBcImxlYXZlIHRoZVxuICogIG1lYXN1cmVkIGNvbG91ciBhbG9uZVwiIC0tIGFuZCBpcyBhcHBsaWVkIGFzIGBtYXBgIG92ZXIgdGhlIG1hdGVyaWFsJ3Mgb3duIGNvbG91ci5cbiAqXG4gKiAgVVZzIGFyZSBtZXRyaWMgYW5kIFdPUkxELVBMQU5BUiwgY2hvc2VuIHBlciB2ZXJ0ZXggb2ZmIHRoZSBmYWNlIG5vcm1hbDogYW4gWC1mYWNpbmcgZmFjZSBpc1xuICogIHByb2plY3RlZCAoeiwgeSksIGEgWi1mYWNpbmcgZmFjZSAoeCwgeSksIGEgWS1mYWNpbmcgZmFjZSAoeCwgeikuIEJveCBVVnMgd291bGQgc3RyZXRjaCBvbmVcbiAqICB0aWxlIG92ZXIgZWFjaCBmYWNlLCB3aGljaCBwdXRzIGEgNy1tZXRyZS13aWRlIHN0cmVhayBvbiB0aGUgc2lkZSB3YWxsIGFuZCBhIDAuMjQtbWV0cmUtd2lkZSBvbmVcbiAqICBvbiB0aGUgcGFyYXBldCBjb3BpbmcuICovXG5mdW5jdGlvbiBhcHBseVdhbGxHcmFwaGljKHJvb3Q6IFRIUkVFLkdyb3VwKTogdm9pZCB7XG4gIGNvbnN0IGdyID0gQ09ORklHLmdyYXBoaWMgYXMgYW55O1xuICBpZiAoIWdyIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgLy8gYGdyYXBoaWMud2FsbGAgaXMgdGhlIG9yaWdpbmFsIHNpbmdsZSBlbnRyeTsgYGdyYXBoaWMud2FsbHNgIGlzIGEgbGlzdCBvZiBmdXJ0aGVyIGVudHJpZXMgaW5cbiAgLy8gdGhlIHNhbWUgc2hhcGUsIG9uZSBwZXIgbWF0ZXJpYWwgdGhhdCBjYXJyaWVzIGl0cyBvd24gdGlsZSAtLSBhIGdyaW1lIHRpbGUgb24gdGhlIGNvcGluZyBhbmRcbiAgLy8gdGhlIHNodXR0ZXIgaG9vZCwgYSBkaXJ0IHRpbGUgb24gdGhlIHllbGxvdyBzdXJyb3VuZCwgYSBnYWx2YW5pc2VkIHNwYW5nbGUgb24gdGhlIHBsYW50LlxuICBjb25zdCBlbnRyaWVzID0gW2dyLndhbGwsIC4uLigoZ3Iud2FsbHMgPz8gW10pIGFzIGFueVtdKV0uZmlsdGVyKEJvb2xlYW4pO1xuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lIHwgdW5kZWZpbmVkO1xuICBpZiAoIXJ0KSByZXR1cm47XG4gIGZvciAoY29uc3QgZyBvZiBlbnRyaWVzKSBhcHBseU9uZVdhbGxHcmFwaGljKHJ0LCBnKTtcbn1cblxuZnVuY3Rpb24gYXBwbHlPbmVXYWxsR3JhcGhpYyhydDogUHJvY2VkdXJhbE1vZGVsUnVudGltZSwgZzogYW55KTogdm9pZCB7XG4gIGNvbnN0IHRpbGUgPSBnLnRpbGUgPz8gMi41O1xuICBjb25zdCBOID0gZy5zaXplID8/IDUxMjtcbiAgLy8gYGNsZWFuYCBpcyBhIHdvcmxkLXNwYWNlIFhZIHJlY3RhbmdsZSB3aG9zZSB2ZXJ0aWNlcyBhcmUgcGlubmVkIHRvIG9uZSB0ZXhlbCB0aGUgdGlsZSBsZWF2ZXNcbiAgLy8gdW50b3VjaGVkIC0tIHRoZSBkZWxpdmVyeSBjb3VudGVyIGhhcyB0byBzdGF5IHNwb3RsZXNzIHllbGxvdyB3aGlsZSB0aGUgbGludGVsIGFuZCBqYW1icyBpdFxuICAvLyBzaGFyZXMgYSBtYXRlcmlhbCB3aXRoIHRha2UgdGhlIHdlYXRoZXIuIFRoZSBwaW4gbGFuZHMgb24gYSBjb3JuZXIgdGhlIGNhbnZhcyBmaWxscyB3aXRoIHRoZVxuICAvLyBiYXNlIHZhbHVlIGFmdGVyIGV2ZXJ5IG1hcmsgaXMgZHJhd24gKGFsbCBmb3VyIGNvcm5lcnMsIHNpbmNlIHRoZSB0aWxlIHdyYXBzKS5cbiAgY29uc3QgY2xlYW4gPSBnLmNsZWFuIGFzIG51bWJlcltdIHwgdW5kZWZpbmVkO1xuICBjb25zdCBwaW4gPSA2IC8gTjtcbiAgbGV0IHRleDogVEhSRUUuVGV4dHVyZSB8IG51bGwgPSBudWxsO1xuICBmb3IgKGNvbnN0IGlkIG9mIChnLm1lc2hlcyBhcyBzdHJpbmdbXSkpIHtcbiAgICBjb25zdCBtZXNoID0gcnQubWVzaGVzPy5baWRdO1xuICAgIGlmICghbWVzaCkgY29udGludWU7XG4gICAgY29uc3QgZ2VvID0gbWVzaC5nZW9tZXRyeSBhcyBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBjb25zdCBwb3MgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgICBpZiAoIXBvcyB8fCAhbnJtKSBjb250aW51ZTtcbiAgICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocG9zLmNvdW50ICogMik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MuY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHBvcy5nZXRYKGkpLCB5ID0gcG9zLmdldFkoaSksIHogPSBwb3MuZ2V0WihpKTtcbiAgICAgIGlmIChjbGVhbiAmJiB4ID49IGNsZWFuWzBdICYmIHggPD0gY2xlYW5bMl0gJiYgeSA+PSBjbGVhblsxXSAmJiB5IDw9IGNsZWFuWzNdKSB7XG4gICAgICAgIHV2W2kgKiAyXSA9IHBpbjsgdXZbaSAqIDIgKyAxXSA9IHBpbjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXkgPSBNYXRoLmFicyhucm0uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgICAgaWYgKGF4ID49IGF5ICYmIGF4ID49IGF6KSB7IHUgPSB6OyB2ID0geTsgfVxuICAgICAgZWxzZSBpZiAoYXogPj0gYXkpIHsgdSA9IHg7IHYgPSB5OyB9XG4gICAgICBlbHNlIHsgdSA9IHg7IHYgPSB6OyB9XG4gICAgICB1dltpICogMl0gPSB1IC8gdGlsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyB0aWxlO1xuICAgIH1cbiAgICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBpZiAoIXRleCkge1xuICAgICAgY29uc3Qgc3JnYiA9IChUSFJFRSBhcyBhbnkpLlNSR0JDb2xvclNwYWNlO1xuICAgICAgaWYgKGcuaW1hZ2UpIHtcbiAgICAgICAgLy8gQSBCQUtFRCB0aWxlIC0tIGEgc2VhbWxlc3MsIG11bHRpcGxpZXItbm9ybWFsaXNlZCBpbWFnZSBlbWJlZGRlZCBhcyBhIGRhdGEgVVJJLCB0aGUgd2F5XG4gICAgICAgIC8vIHRoZSBmYXNjaWEgaXMgLS0gZm9yIGEgc3VyZmFjZSB3aG9zZSBmaW5pc2ggYSBkcmF3biBjYW52YXMgY2Fubm90IHJlYWNoOiBnYWx2YW5pc2VkXG4gICAgICAgIC8vIHNwYW5nbGUuIEFzc2lnbmVkIHN5bmNocm9ub3VzbHkgc28gdGhlIGhhcm5lc3Mgd2FpdHMgb24gdGhlIGRlY29kZS5cbiAgICAgICAgdGV4ID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKGcuaW1hZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZHJhd1dhbGxDYW52YXMoZyk7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG4gICAgICAgIHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGNhbnZhcyk7XG4gICAgICB9XG4gICAgICB0ZXgud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZzsgdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgICBpZiAoc3JnYikgdGV4LmNvbG9yU3BhY2UgPSBzcmdiO1xuICAgICAgdGV4LmFuaXNvdHJvcHkgPSA0OyB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gICAgLy8gT05FIHRleHR1cmUgZm9yIGhvd2V2ZXIgbWFueSBtZXNoZXMgc2hhcmUgdGhlIG1hdGVyaWFsOiBhc3NpZ25pbmcgcGVyIG1lc2ggd291bGQgdXBsb2FkIHRoZVxuICAgIC8vIHNhbWUgY2FudmFzIHR3aWNlIGFuZCBjb3N0IFZSQU0gZm9yIG5vdGhpbmcuXG4gICAgaWYgKG1hdGVyaWFsICYmIG1hdGVyaWFsLm1hcCAhPT0gdGV4KSB7IG1hdGVyaWFsLm1hcCA9IHRleDsgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlOyB9XG4gIH1cbn1cblxuLyoqIFNlYW1sZXNzIHJlbmRlciB0aWxlIGluIE1VTFRJUExJRVIgc3BhY2UsIGFuZCB0aGUgbmV1dHJhbCB2YWx1ZSBpcyBXSElURSwgbm90IG1pZC1ncmV5LlxuICogIGBtYXBgIG11bHRpcGxpZXMgdGhlIG1hdGVyaWFsIGNvbG91ciBieSB0aGUgdGV4dHVyZSdzIExJTkVBUiB2YWx1ZSwgYW5kIHRoZSB0ZXh0dXJlIGlzIGRlY29kZWRcbiAqICBhcyBzUkdCLCBzbyBhIHRpbGUgZHJhd24gYXJvdW5kIDEyOCBtdWx0aXBsaWVzIHRoZSBtZWFzdXJlZCBhbGJlZG8gYnkgMC4yMTYgYW5kIHJlbmRlcnMgYSBsaWdodFxuICogIGdyZXkgcmVuZGVyIHdhbGwgbmVhciBibGFjayAtLSB3aGljaCBpcyBleGFjdGx5IHdoYXQgdGhlIGZpcnN0IGJ1aWxkIG9mIHRoaXMgdGlsZSBkaWQuIGBiYXNlYFxuICogIHRoZXJlZm9yZSBzaXRzIGp1c3QgdW5kZXIgd2hpdGUgYW5kIGV2ZXJ5IG1hcmsgREFSS0VOUyBmcm9tIGl0OyB0aGUgd2FsbCdzIG93biBhbGJlZG8gc3RheXMgdGhlXG4gKiAgbWF0ZXJpYWwncywgYW5kIHRoZSB0aWxlIG9ubHkgZXZlciB0YWtlcyB2YWx1ZSBhd2F5LlxuICpcbiAqICBFdmVyeXRoaW5nIHdyYXBzIGJ5IGRyYXdpbmcgZWFjaCBtYXJrIGEgc2Vjb25kIHRpbWUgYXQgeC1XIGFuZCB4K1csIHdoaWNoIGlzIHdoYXQgbWFrZXMgdGhlXG4gKiAgdGlsZSBzZWFtbGVzcyAtLSBhIG1hcmsgY2xpcHBlZCBhdCB0aGUgZWRnZSBpcyB0aGUgc2luZ2xlIG1vc3QgdmlzaWJsZSBhcnRlZmFjdCB3aGVuIGEgd2FsbCBpc1xuICogIDggdGlsZXMgd2lkZS4gKi9cbmZ1bmN0aW9uIGRyYXdXYWxsQ2FudmFzKGc6IGFueSk6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IE4gPSBnLnNpemUgPz8gNTEyO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzLndpZHRoID0gTjsgY2FudmFzLmhlaWdodCA9IE47XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBpZiAoIWN0eCkgcmV0dXJuIG51bGw7XG4gIGxldCBzZWVkID0gZy5zZWVkID8/IDIwMjYwODI4O1xuICBjb25zdCBybmQgPSAoKSA9PiB7IHNlZWQgPSAoc2VlZCAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMDsgcmV0dXJuIHNlZWQgLyA0Mjk0OTY3Mjk2OyB9O1xuICBjb25zdCBiYXNlID0gZy5iYXNlID8/IDI0NjtcbiAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtiYXNlfSwke2Jhc2V9LCR7YmFzZX0pYDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIE4sIE4pO1xuXG4gIC8vIEJyb2FkIGZsb2F0LW1hcmsgYmxvdGNoZXM6IGxvdy1mcmVxdWVuY3kgcGF0Y2hpbmVzcyBpbiB0aGUgcmVuZGVyIGNvYXQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgKGcucGF0Y2hlcyA/PyA5MCk7IGkrKykge1xuICAgIGNvbnN0IHggPSBybmQoKSAqIE4sIHkgPSBybmQoKSAqIE4sIHIgPSAoMC4wNSArIHJuZCgpICogMC4xOCkgKiBOO1xuICAgIGNvbnN0IHYgPSBiYXNlIC0gcm5kKCkgKiAoZy5wYXRjaEFtcCA/PyAyNik7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3YgfCAwfSwke3YgfCAwfSwke3YgfCAwfSwwLjU1KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7diB8IDB9LCR7diB8IDB9LCR7diB8IDB9LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7XG4gICAgZm9yIChjb25zdCBkeCBvZiBbLU4sIDAsIE5dKSB7IGN0eC5zYXZlKCk7IGN0eC50cmFuc2xhdGUoZHgsIDApOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyBjdHgucmVzdG9yZSgpOyB9XG4gIH1cbiAgLy8gVmVydGljYWwgcmFpbiBzdHJlYWtzLiBOYXJyb3csIHNvZnQtZWRnZWQsIHRvcC13ZWlnaHRlZCAtLSB3YXRlciBydW5zIERPV04gZnJvbSB0aGUgY29waW5nIGFuZFxuICAvLyBmYWRlcyBvdXQsIHNvIHRoZSBhbHBoYSByYW1wcyB0byBub3RoaW5nIGF0IHRoZSBib3R0b20gb2YgZWFjaCBzdHJlYWsgcmF0aGVyIHRoYW4gc3RvcHBpbmcuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgKGcuc3RyZWFrcyA/PyAxMzApOyBpKyspIHtcbiAgICBjb25zdCB4ID0gcm5kKCkgKiBOLCB3ID0gKDAuMDAyICsgcm5kKCkgKiAwLjAxMCkgKiBOO1xuICAgIGNvbnN0IHkwID0gcm5kKCkgKiBOICogMC41LCBsZW4gPSAoMC4yNSArIHJuZCgpICogMC43NSkgKiBOO1xuICAgIGNvbnN0IGRhcmsgPSBiYXNlIC0gKDYgKyBybmQoKSAqIChnLnN0cmVha0FtcCA/PyAyMikpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2RhcmsgfCAwfSwke2RhcmsgfCAwfSwke2RhcmsgfCAwfSwwLjQyKWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuMzUsIGByZ2JhKCR7ZGFyayB8IDB9LCR7ZGFyayB8IDB9LCR7ZGFyayB8IDB9LDAuMjYpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtkYXJrIHwgMH0sJHtkYXJrIHwgMH0sJHtkYXJrIHwgMH0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDtcbiAgICBmb3IgKGNvbnN0IGR4IG9mIFstTiwgMCwgTl0pIGN0eC5maWxsUmVjdCh4ICsgZHggLSB3IC8gMiwgeTAsIHcsIGxlbik7XG4gIH1cbiAgLy8gQm9hcmQgbWFya3M6IHRoZSBob3Jpem9udGFsIHNlYW1zIGEgc2h1dHRlcmVkIGNvbmNyZXRlIHBvdXIgbGVhdmVzLCBvbmUgcGVyIGJvYXJkLiBGYWludCAtLVxuICAvLyB0aGlzIGlzIGEgcmVuZGVyZWQgd2FsbCBhbmQgdGhlIHNlYW0gc2hvd3MgdGhyb3VnaCB0aGUgY29hdCByYXRoZXIgdGhhbiBvbiBpdCAtLSBhbmQgZHJhd24gYXNcbiAgLy8gYSBzb2Z0IHBhaXIgKGEgZGFyayBsaW5lIHVuZGVyIGEgc2xpZ2h0bHkgbGlnaHRlciBvbmUpIGJlY2F1c2UgdGhhdCBpcyB3aGF0IGEgbGlwcGVkIHNodXR0ZXJcbiAgLy8gam9pbnQgZG9lcyB0byB0aGUgbGlnaHQuIGBzZWFtUGl0Y2hgIGlzIGluIFRJTEUgZnJhY3Rpb25zLCBzbyBpdCBsYW5kcyBvbiB0aGUgc2FtZSBtZXRyaWNcbiAgLy8gc3BhY2luZyB3aGVyZXZlciB0aGUgdGlsZSByZXBlYXRzLlxuICBpZiAoZy5zZWFtcykge1xuICAgIGNvbnN0IHBpdGNoID0gKGcuc2VhbVBpdGNoID8/IDAuMzc1KSAqIE47XG4gICAgY29uc3QgYW1wID0gZy5zZWFtQW1wID8/IDk7XG4gICAgZm9yIChsZXQgeSA9IHBpdGNoICogMC41OyB5IDwgTiArIHBpdGNoOyB5ICs9IHBpdGNoKSB7XG4gICAgICBjb25zdCB5eSA9IHkgJSBOO1xuICAgICAgY29uc3QgZCA9IGJhc2UgLSBhbXAsIGwgPSBNYXRoLm1pbigyNTUsIGJhc2UgKyBhbXAgKiAwLjM1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke2QgfCAwfSwke2QgfCAwfSwke2QgfCAwfSwwLjUpYDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCB5eSwgTiwgMS42KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke2wgfCAwfSwke2wgfCAwfSwke2wgfCAwfSwwLjM1KWA7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgeXkgKyAxLjYsIE4sIDEuMik7XG4gICAgfVxuICB9XG4gIC8vIEZpbmUgc3BlY2tsZTogdGhlIGFnZ3JlZ2F0ZSBpbiB0aGUgcmVuZGVyLCBhdCB0aGUgbGltaXQgb2Ygd2hhdCBhIHByb3AtZGlzdGFuY2Ugdmlld2VyIHJlc29sdmVzLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IChnLnNwZWNrcyA/PyAyNjAwKTsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHJuZCgpICogTiwgeSA9IHJuZCgpICogTiwgciA9IDAuNSArIHJuZCgpICogMS42O1xuICAgIGNvbnN0IHYgPSBiYXNlIC0gcm5kKCkgKiAoZy5zcGVja0FtcCA/PyAzMCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7diB8IDB9LCR7diB8IDB9LCR7diB8IDB9LDAuMzApYDtcbiAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICB9XG4gIC8vIEEgY2xlYW4gdGV4ZWwgZm9yIGBjbGVhbmAtcGlubmVkIHZlcnRpY2VzOiBldmVyeSBjb3JuZXIsIGJlY2F1c2UgdGhlIHRpbGUgd3JhcHMgYW5kIHRoZSBwaW5cbiAgLy8gc2l0cyA2IHB4IGluIGZyb20gKDAsIDApLlxuICBjdHguZmlsbFN0eWxlID0gYHJnYigke2Jhc2V9LCR7YmFzZX0sJHtiYXNlfSlgO1xuICBmb3IgKGNvbnN0IFt4LCB5XSBvZiBbWzAsIDBdLCBbTiAtIDEyLCAwXSwgWzAsIE4gLSAxMl0sIFtOIC0gMTIsIE4gLSAxMl1dKSBjdHguZmlsbFJlY3QoeCwgeSwgMTIsIDEyKTtcbiAgcmV0dXJuIGNhbnZhcztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZUxvdHVzc1N0b3JlQnVpbGRpbmdNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGFwcGx5RmFzY2lhR3JhcGhpYyhyb290KTtcbiAgYXBwbHlHbGFzc0dyYXBoaWMocm9vdCk7XG4gIGFwcGx5V2FsbEdyYXBoaWMocm9vdCk7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogdGhlIHJvb3QsIHBsdXMgd2hhdGV2ZXIgdGhlIGNvbmZpZyBhY3R1YWxseSBodW5nIGEgbWVjaGFuaXNtIG9uIC0tIGBkb29yLWhpbmdlYFxuICAgIC8vIGZvciBhIHN3aW5naW5nIGVudHJhbmNlIGxlYWYsIGFuZCBub3RoaW5nIGVsc2UuIEEgcm9sbGVyIHNodXR0ZXIgYXV0aG9yZWQgYXMgZml4ZWRcbiAgICAvLyBnZW9tZXRyeSBnZXRzIG5vIGF4aXM6IGEgbmFtZWQgcGl2b3QgaXMgYSBwcm9taXNlIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wXG4gICAgLy8gdGhhdCBkZWNsYXJlcyBwaXZvdHMgaXQgaGFzIG5vIG1lY2hhbmlzbXMgZm9yIGhhcyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gWy4uLigoKHJ0IGFzIGFueSkucGl2b3ROb2RlcyA/PyBbXSkgYXMgVEhSRUUuT2JqZWN0M0RbXSldO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuXG4gICAgLy8gU29ja2V0czogTk9ORS4gTm90aGluZyBhdHRhY2hlcyB0byB0aGlzIHByb3AgYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuIFRoZSBlbWl0dGVkIGBtb2RlbC50c2AgYmVzaWRlIHRoaXNcbiAqIGZpbGUgSU1QT1JUUyBpdCBieSBuYW1lLCBzbyBhIGZhY3Rvcnkgd2l0aG91dCBpdCBmYWlscyB0aGUgcGFjayBidWlsZCB3aXRoXG4gKiBcIk5vIG1hdGNoaW5nIGV4cG9ydCAuLi4gZm9yIGltcG9ydCBjcmVhdGVNb2RlbFwiIC0tIHdoaWNoIGlzIGhvdyBpdCB3YXMgZm91bmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJldHVybiBjcmVhdGVPYmplY3RNb2RlbCh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBNkN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLGNBQWM7QUFBQSxNQUNaLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxzQkFBc0I7QUFBQSxJQUN0QixnQkFBZ0I7QUFBQSxNQUNkO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsaUJBQWlCO0FBQUEsSUFDakIsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsUUFDSDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFjLENBQUM7QUFBQSxJQUNmLGlCQUFpQjtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBYztBQUFBLElBQ2QsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFB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
