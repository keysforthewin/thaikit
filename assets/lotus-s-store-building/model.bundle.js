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

// assets/lotus-s-store-building/src/createObjectModel.ts
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
      "name": "Roller shutter and head box",
      "material": "galv",
      "boxes": [
        [
          3.945,
          0.20111111111111113,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          0.32333333333333336,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          0.4455555555555556,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          0.5677777777777778,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          0.6900000000000001,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          0.8122222222222223,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          0.9344444444444445,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          1.0566666666666666,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          1.1788888888888889,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          1.301111111111111,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          1.4233333333333333,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          1.5455555555555556,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          1.6677777777777778,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          1.79,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          1.9122222222222223,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          2.0344444444444445,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          2.1566666666666667,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          2.2788888888888894,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.935,
          2.46,
          0.35,
          0.11,
          0.28,
          1.65
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
  add("building-shell", "Building shell", boxAt(0, 1.775, (SF - 3.44) / 2, 7.88, 3.55, SF + 3.44), "wall");
  colliders["building-shell"] = {
    shape: "box",
    localCenter: [0, 2.3, 0],
    halfExtents: [4, 2.3, 3.5],
    notes: 'Asset declares collider "box". One convex proxy over the whole envelope.'
  };
  add("roof-deck", "Roof deck", boxAt(0, 3.56, (SF - 0.02 - 3.42) / 2, 7.8, 0.12, SF + 3.4), "deck");
  const PS = G.parapetSides ?? { cy: 3.75, h: 0.4, thick: 0.24 };
  const PW = G.parapetW ?? 8;
  const PCX = PS.cx ?? 3.88;
  add("parapet", "Parapet ring and fascia wall", boxes([
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
    const pane = boxAt(G.glazing.cx ?? 0, G.glazing.cy, G.glazing.cz ?? 2.51, G.glazing.w, G.glazing.h, G.glazing.d ?? 0.1);
    const extra = G.glazingExtra ?? [];
    add(
      "shopfront-glazing",
      "Shopfront glazing",
      extra.length ? mergeGeos([pane, ...extra.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5]))]) : pane,
      "glass"
    );
  }
  add("shopfront-frame", "Shopfront framing and door bay", boxes(G.frame), G.frameMaterial);
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
    const parts = [
      boxAt(0, 0.46, 0, 0.95, 0.72, 0.85),
      cylAt(0, 0.87, 0, 0.3, 0.1, 16)
    ];
    for (const fx of [-0.4, 0.4]) for (const fz of [-0.35, 0.35]) parts.push(boxAt(fx, 0.05, fz, 0.08, 0.1, 0.08));
    const unit = mergeGeos(parts);
    const mats = G.condensers.map(([x, z, yaw]) => new THREE.Matrix4().compose(
      new THREE.Vector3(x, 3.6, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
      new THREE.Vector3(1, 1, 1)
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
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
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
  const mesh = rt?.meshes?.["shopfront-glazing"];
  if (!mesh) return;
  const material = mesh.material;
  if (!material) return;
  const geo = mesh.geometry;
  const pos = geo.getAttribute("position");
  const [x0, y0, x1, y1] = g.rect;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    uv[i * 2] = (pos.getX(i) - x0) / (x1 - x0);
    uv[i * 2 + 1] = (pos.getY(i) - y0) / (y1 - y0);
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
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
  const g = CONFIG.graphic?.wall;
  if (!g || typeof document === "undefined") return;
  const rt = root.userData.sculptRuntime;
  if (!rt) return;
  const tile = g.tile ?? 2.5;
  let tex = null;
  for (const id of g.meshes) {
    const mesh = rt.meshes?.[id];
    if (!mesh) continue;
    const geo = mesh.geometry;
    const pos = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
    if (!pos || !nrm) continue;
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
      let u, v;
      if (ax >= ay && ax >= az) {
        u = pos.getZ(i);
        v = pos.getY(i);
      } else if (az >= ay) {
        u = pos.getX(i);
        v = pos.getY(i);
      } else {
        u = pos.getX(i);
        v = pos.getZ(i);
      }
      uv[i * 2] = u / tile;
      uv[i * 2 + 1] = v / tile;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    if (!tex) {
      const canvas = drawWallCanvas(g);
      if (!canvas) return;
      tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      const srgb = THREE.SRGBColorSpace;
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
  for (let i = 0; i < (g.specks ?? 2600); i++) {
    const x = rnd() * N, y = rnd() * N, r = 0.5 + rnd() * 1.6;
    const v = base - rnd() * (g.speckAmp ?? 30);
    ctx.fillStyle = `rgba(${v | 0},${v | 0},${v | 0},0.30)`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogTG90dXNcXCdzIFN0b3JlIEJ1aWxkaW5nIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nIGFuZFxuICogaW5zdGFuY2luZyBhcmUgaGFuZC1yb2xsZWQgYmVsb3cgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSA4LjAwIHggNC42MCB4IDcuMDAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgc2hvcGZyb250IGZhY2luZyArWi5cbiAqIEJ1ZGdldCAoaGVybzJ4KTogPD0xNjAwMCB0cmlhbmdsZXMsIDw9MTIgZHJhdyBjYWxscywgPD04IG1hdGVyaWFscywgPD0xNiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBPbmUgb2YgdGhhaWtpdCdzIHNoYXJlZCByZXRhaWwtbW9kdWxlIGJ1aWxkaW5ncy4gVGhlIHNoZWxsIGZyb250IGZhY2Ugc2l0cyBhdCB6PSsyLjUwIHJhdGhlclxuICogdGhhbiB0aGUgZW52ZWxvcGUgZWRnZSBzbyB0aGUgZW50cmFuY2UgY2Fub3B5IGNhbiBjYW50aWxldmVyIGZvcndhcmQgYW5kIHN0aWxsIGxhbmQgZXhhY3RseSBvblxuICogdGhlIGRlY2xhcmVkIDcuMCBtIGRlcHRoLiBFdmVyeSBzdXJmYWNlIHBhaXIgb24gdGhlIGZhY2FkZSBpcyBkZWxpYmVyYXRlbHkgb2Zmc2V0IGluIGRlcHRoOlxuICogdHdvIHN1cmZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgdGVhciBpbnRvIGludGVybGVhdmVkIHRyaWFuZ2xlcyBhcyB0aGVcbiAqIGNhbWVyYSBtb3ZlcywgYW5kIGF1dGhvcmluZyBjb21wb25lbnRzIGZsdXNoIGFnYWluc3Qgb25lIGFub3RoZXIgcHJvZHVjZXMgdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXaGVyZSB0aGlzIHByb3AncyBzaGlwcGVkIGZpbGVzIGxpdmUsIHdpdGggYSB0cmFpbGluZyBzbGFzaC5cbiAgICpcbiAgICogVGhlIG1hcHMgYXJlIHJlY29yZGVkIGFzIGJhcmUgZmlsZW5hbWVzIGJlY2F1c2UgdGhlIGJ1bmRsZSBpcyBFVkFMVUFURURcbiAgICogcmF0aGVyIHRoYW4gaW1wb3J0ZWQ6IGl0IGhhcyBubyBpbXBvcnQubWV0YSBhbmQgbm8gY3VycmVudFNjcmlwdCwgc28gaXRcbiAgICogY2Fubm90IHNlZSBpdHMgb3duIFVSTC4gRXZlcnkgaG9zdCBkZXJpdmVzIHRoaXMgZnJvbSB0aGUgbW9kdWxlIFVSTC5cbiAgICovXG4gIGJhc2VVcmw/OiBzdHJpbmc7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwibG90dXMtcy1zdG9yZS1idWlsZGluZ1wiLFxuICAgIFwibmFtZVwiOiBcIkxvdHVzJ3MgU3RvcmUgQnVpbGRpbmdcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJMb3R1c3NTdG9yZUJ1aWxkaW5nXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwid2FsbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDkwODA3MjQsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkZWNrXCIsXG4gICAgICAgIFwiY29sb3JcIjogNjI1MDg1MSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImNsYWRcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC42MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImZhc2NpYVwiLFxuICAgICAgICBcImNvbG9yXCI6IDE1MjY1MDAxLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjM1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAwLjZcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJnbGFzc1wiLFxuICAgICAgICBcImNvbG9yXCI6IDg0MjI3ODYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMTYsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwib3BhY2l0eVwiOiAwLjkyLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAxLjFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJhbHVtaW5pdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTQ0Nzk3OSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC40MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdhbHZcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMDEzMzY3MCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC41MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiZmFzY2lhV2FsbFwiOiB7XG4gICAgICAgIFwiY3lcIjogMy45OTUsXG4gICAgICAgIFwiY3pcIjogMi40MSxcbiAgICAgICAgXCJoXCI6IDAuODksXG4gICAgICAgIFwiZFwiOiAwLjQyXG4gICAgICB9LFxuICAgICAgXCJmYXNjaWFXYWxsTWF0ZXJpYWxcIjogXCJ3YWxsXCIsXG4gICAgICBcInBhcmFwZXRFeHRyYVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEuNzc1LFxuICAgICAgICAgIDIuNTUsXG4gICAgICAgICAgNy44OCxcbiAgICAgICAgICAzLjU1LFxuICAgICAgICAgIDAuMTRcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwiZmFzY2lhXCI6IHtcbiAgICAgICAgXCJ3XCI6IDIuOTMsXG4gICAgICAgIFwiaFwiOiAxLjA4LFxuICAgICAgICBcImN5XCI6IDMuNTIsXG4gICAgICAgIFwiY3pcIjogMi43NixcbiAgICAgICAgXCJib2FyZHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwid1wiOiAyLjkzLFxuICAgICAgICAgICAgXCJoXCI6IDEuMDgsXG4gICAgICAgICAgICBcImRcIjogMC4xNixcbiAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAtMC4xOSxcbiAgICAgICAgICAgICAgMy41MixcbiAgICAgICAgICAgICAgMi43NlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiZmFjZVwiOiBcIitaXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImZyYW1lTWF0ZXJpYWxcIjogXCJhbHVtaW5pdW1cIixcbiAgICAgIFwiZ2xhemluZ1wiOiB7XG4gICAgICAgIFwiY3hcIjogLTAuNixcbiAgICAgICAgXCJ3XCI6IDUuOTIsXG4gICAgICAgIFwiaFwiOiAyLjM2LFxuICAgICAgICBcImN5XCI6IDEuMjQsXG4gICAgICAgIFwiY3pcIjogMi41MSxcbiAgICAgICAgXCJkXCI6IDAuMVxuICAgICAgfSxcbiAgICAgIFwiZnJhbWVcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTMuNTYsXG4gICAgICAgICAgMS4yNCxcbiAgICAgICAgICAyLjYsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAyLjQ0LFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuMzYsXG4gICAgICAgICAgMS4yNCxcbiAgICAgICAgICAyLjYsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAyLjQ0LFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjYsXG4gICAgICAgICAgMi40MTUsXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIDUuOTIsXG4gICAgICAgICAgMC4xLFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjYsXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAyLjYsXG4gICAgICAgICAgNS45MixcbiAgICAgICAgICAwLjE0LFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjQ1LFxuICAgICAgICAgIDEuNzgsXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIDIuMjQsXG4gICAgICAgICAgMC4xMSxcbiAgICAgICAgICAwLjE4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC40NSxcbiAgICAgICAgICAwLjkyNSxcbiAgICAgICAgICAyLjYxLFxuICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgMS43MSxcbiAgICAgICAgICAwLjA4XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcIm11bGxpb25zXCI6IHtcbiAgICAgICAgXCJ3XCI6IDAuMDcsXG4gICAgICAgIFwiaFwiOiAyLjM2LFxuICAgICAgICBcImN5XCI6IDEuMjQsXG4gICAgICAgIFwiY3pcIjogMi42MSxcbiAgICAgICAgXCJ4XCI6IFtcbiAgICAgICAgICAtMi44NSxcbiAgICAgICAgICAtMi4yLFxuICAgICAgICAgIC0xLjU1LFxuICAgICAgICAgIDAuNjUsXG4gICAgICAgICAgMS4zLFxuICAgICAgICAgIDEuOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJ0aW50RmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIkZyb250IGNsYWRkaW5nIHBhbmVsc1wiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiY2xhZFwiLFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy43NSxcbiAgICAgICAgICAgIDAuMzc0MTY2NjY2NjY2NjY2NyxcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjM1NDk5OTk5OTk5OTk5OTg3LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTMuNzUsXG4gICAgICAgICAgICAxLjEyMjUsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC4zNTQ5OTk5OTk5OTk5OTk4NyxcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0zLjc1LFxuICAgICAgICAgICAgMS44NzA4MzMzMzMzMzMzMzM2LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuMzU0OTk5OTk5OTk5OTk5ODcsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy43NSxcbiAgICAgICAgICAgIDIuNjE5MTY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjM1NDk5OTk5OTk5OTk5OTg3LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTMuNzUsXG4gICAgICAgICAgICAzLjM2NzUwMDAwMDAwMDAwMDYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC4zNTQ5OTk5OTk5OTk5OTk4NyxcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0zLjc1LFxuICAgICAgICAgICAgNC4xMTU4MzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC4zNTQ5OTk5OTk5OTk5OTk4NyxcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTMuMTM3NSxcbiAgICAgICAgICAgIDIuNjE5MTY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyMDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzUsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy4xMzc1LFxuICAgICAgICAgICAgMy4zNjc1MDAwMDAwMDAwMDA2LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIwMDAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0zLjEzNzUsXG4gICAgICAgICAgICA0LjExNTgzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyMDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0yLjI5MjUsXG4gICAgICAgICAgICAyLjYxOTE2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MTk5OTk5OTk5OTk5OTk3LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTIuMjkyNSxcbiAgICAgICAgICAgIDMuMzY3NTAwMDAwMDAwMDAwNixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgxOTk5OTk5OTk5OTk5OTcsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzUsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMi4yOTI1LFxuICAgICAgICAgICAgNC4xMTU4MzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MTk5OTk5OTk5OTk5OTk3LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMS40NDc1LFxuICAgICAgICAgICAgMi42MTkxNjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIwMDAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0xLjQ0NzUsXG4gICAgICAgICAgICAzLjM2NzUwMDAwMDAwMDAwMDYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MjAwMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTEuNDQ3NSxcbiAgICAgICAgICAgIDQuMTE1ODMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIwMDAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNjAyNDk5OTk5OTk5OTk5OSxcbiAgICAgICAgICAgIDIuNjE5MTY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNjAyNDk5OTk5OTk5OTk5OSxcbiAgICAgICAgICAgIDMuMzY3NTAwMDAwMDAwMDAwNixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNjAyNDk5OTk5OTk5OTk5OSxcbiAgICAgICAgICAgIDQuMTE1ODMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuMjQyNTAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAyLjYxOTE2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuMjQyNTAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAzLjM2NzUwMDAwMDAwMDAwMDYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuMjQyNTAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICA0LjExNTgzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjA4NzUsXG4gICAgICAgICAgICAyLjYxOTE2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuMDg3NSxcbiAgICAgICAgICAgIDMuMzY3NTAwMDAwMDAwMDAwNixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS4wODc1LFxuICAgICAgICAgICAgNC4xMTU4MzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS45MzI1LFxuICAgICAgICAgICAgMi42MTkxNjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzUsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjkzMjUsXG4gICAgICAgICAgICAzLjM2NzUwMDAwMDAwMDAwMDYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuOTMyNSxcbiAgICAgICAgICAgIDQuMTE1ODMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuNzc3NSxcbiAgICAgICAgICAgIDAuMzc0MTY2NjY2NjY2NjY2NyxcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyMDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjc3NzUsXG4gICAgICAgICAgICAxLjEyMjUsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MjAwMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi43Nzc1LFxuICAgICAgICAgICAgMS44NzA4MzMzMzMzMzMzMzM2LFxuICAgICAgICAgICAgMi42NyxcbiAgICAgICAgICAgIDAuODIwMDAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuNzc3NSxcbiAgICAgICAgICAgIDIuNjE5MTY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAwLjgyMDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzUsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjc3NzUsXG4gICAgICAgICAgICAzLjM2NzUwMDAwMDAwMDAwMDYsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MjAwMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi43Nzc1LFxuICAgICAgICAgICAgNC4xMTU4MzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAyLjY3LFxuICAgICAgICAgICAgMC44MjAwMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjU3MDAwMDAwMDAwMDAwMDMsXG4gICAgICAgICAgICAwLjM3NDE2NjY2NjY2NjY2NjcsXG4gICAgICAgICAgICAyLjcsXG4gICAgICAgICAgICAwLjcxNDk5OTk5OTk5OTk5OTcsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAwLjJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuNTcwMDAwMDAwMDAwMDAwMyxcbiAgICAgICAgICAgIDEuMTIyNSxcbiAgICAgICAgICAgIDIuNyxcbiAgICAgICAgICAgIDAuNzE0OTk5OTk5OTk5OTk5NyxcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNCxcbiAgICAgICAgICAgIDAuMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy41NzAwMDAwMDAwMDAwMDAzLFxuICAgICAgICAgICAgMS44NzA4MzMzMzMzMzMzMzM2LFxuICAgICAgICAgICAgMi43LFxuICAgICAgICAgICAgMC43MTQ5OTk5OTk5OTk5OTk3LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgMC4yXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjU3MDAwMDAwMDAwMDAwMDMsXG4gICAgICAgICAgICAyLjYxOTE2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAyLjcsXG4gICAgICAgICAgICAwLjcxNDk5OTk5OTk5OTk5OTcsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMzUsXG4gICAgICAgICAgICAwLjJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuNTcwMDAwMDAwMDAwMDAwMyxcbiAgICAgICAgICAgIDMuMzY3NTAwMDAwMDAwMDAwNixcbiAgICAgICAgICAgIDIuNyxcbiAgICAgICAgICAgIDAuNzE0OTk5OTk5OTk5OTk5NyxcbiAgICAgICAgICAgIDAuNzIzMzMzMzMzMzMzMzMzNSxcbiAgICAgICAgICAgIDAuMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy41NzAwMDAwMDAwMDAwMDAzLFxuICAgICAgICAgICAgNC4xMTU4MzMzMzMzMzMzMzQsXG4gICAgICAgICAgICAyLjcsXG4gICAgICAgICAgICAwLjcxNDk5OTk5OTk5OTk5OTcsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIDAuMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy44OCxcbiAgICAgICAgICAgIDAuMzc0MTY2NjY2NjY2NjY2NyxcbiAgICAgICAgICAgIDIuMjgsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMC42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy44OCxcbiAgICAgICAgICAgIDEuMTIyNSxcbiAgICAgICAgICAgIDIuMjgsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMC42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy44OCxcbiAgICAgICAgICAgIDEuODcwODMzMzMzMzMzMzMzNixcbiAgICAgICAgICAgIDIuMjgsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgMC42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy44OCxcbiAgICAgICAgICAgIDIuNjE5MTY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgIDIuMjgsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy44OCxcbiAgICAgICAgICAgIDMuMzY3NTAwMDAwMDAwMDAwNixcbiAgICAgICAgICAgIDIuMjgsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC43MjMzMzMzMzMzMzMzMzM1LFxuICAgICAgICAgICAgMC42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy44OCxcbiAgICAgICAgICAgIDQuMTE1ODMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgMi4yOCxcbiAgICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgICAwLjcyMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIDAuNjRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjYsXG4gICAgICAgICAgICAxLjA1LFxuICAgICAgICAgICAgMi42MjUsXG4gICAgICAgICAgICA1LjkyLFxuICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgIDAuMDVcbiAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIFwidG9uZXNcIjogW1xuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDE1MDAxMzEzLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICAxNTAwMTMxMyxcbiAgICAgICAgICAxNTAwMTMxMyxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDE1MDAxMzEzLFxuICAgICAgICAgIDE1MDAxMzEzLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgMTUwMDEzMTMsXG4gICAgICAgICAgMTUwMDEzMTMsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICAxNTAwMTMxMyxcbiAgICAgICAgICAxNTAwMTMxMyxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDE1MDAxMzEzLFxuICAgICAgICAgIDE1MDAxMzEzLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgMTUwMDEzMTMsXG4gICAgICAgICAgMTUwMDEzMTMsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICAxNTAwMTMxMyxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMCxcbiAgICAgICAgICA1NTQyMDAwLFxuICAgICAgICAgIDU1NDIwMDAsXG4gICAgICAgICAgNTU0MjAwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJmcm9udEZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJQYXJhcGV0IGNvcGluZ1wiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiYWx1bWluaXVtXCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA0LjUyLFxuICAgICAgICAgICAgMi40NCxcbiAgICAgICAgICAgIDcuOTYsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC44NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTMuODgsXG4gICAgICAgICAgICA0LjAzLFxuICAgICAgICAgICAgLTAuNjUsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDUuNjZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuODgsXG4gICAgICAgICAgICA0LjAzLFxuICAgICAgICAgICAgLTAuNjUsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDUuNjZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA0LjAzLFxuICAgICAgICAgICAgLTMuMzcsXG4gICAgICAgICAgICA3Ljk2LFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImV4dHJhRmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIkVudHJhbmNlIGNhbm9weVwiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiYWx1bWluaXVtXCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjUxLFxuICAgICAgICAgICAgMi40MyxcbiAgICAgICAgICAgIDMuMDQsXG4gICAgICAgICAgICA2LjE4LFxuICAgICAgICAgICAgMC4xMixcbiAgICAgICAgICAgIDAuOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNTEsXG4gICAgICAgICAgICAyLjUzNSxcbiAgICAgICAgICAgIDIuNzcsXG4gICAgICAgICAgICA2LjE4LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjUxLFxuICAgICAgICAgICAgMi41LFxuICAgICAgICAgICAgMy40MyxcbiAgICAgICAgICAgIDYuMTgsXG4gICAgICAgICAgICAwLjA4LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNTEsXG4gICAgICAgICAgICAyLjMyLFxuICAgICAgICAgICAgMy4zOSxcbiAgICAgICAgICAgIDYuMTgsXG4gICAgICAgICAgICAwLjEyLFxuICAgICAgICAgICAgMC4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy4zMixcbiAgICAgICAgICAgIDIuNTI1LFxuICAgICAgICAgICAgMi45OCxcbiAgICAgICAgICAgIDAuMjIsXG4gICAgICAgICAgICAwLjA4LFxuICAgICAgICAgICAgMC4xM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTIuMjIsXG4gICAgICAgICAgICAyLjUyNSxcbiAgICAgICAgICAgIDIuOTgsXG4gICAgICAgICAgICAwLjIyLFxuICAgICAgICAgICAgMC4wOCxcbiAgICAgICAgICAgIDAuMTNcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0xLjA3LFxuICAgICAgICAgICAgMi41MjUsXG4gICAgICAgICAgICAyLjk4LFxuICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAwLjEzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjExLFxuICAgICAgICAgICAgMi41MjUsXG4gICAgICAgICAgICAyLjk4LFxuICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAwLjEzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjI1LFxuICAgICAgICAgICAgMi41MjUsXG4gICAgICAgICAgICAyLjk4LFxuICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAwLjEzXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJzaWRlRmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJvbGxlciBzaHV0dGVyIGFuZCBoZWFkIGJveFwiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiZ2FsdlwiLFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk0NSxcbiAgICAgICAgICAgIDAuMjAxMTExMTExMTExMTExMTMsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTEyNDQ0NDQ0NDQ0NDQ0NDYsXG4gICAgICAgICAgICAxLjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAwLjMyMzMzMzMzMzMzMzMzMzM2LFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMTI0NDQ0NDQ0NDQ0NDQ0NixcbiAgICAgICAgICAgIDEuNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMC40NDU1NTU1NTU1NTU1NTU2LFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMC41Njc3Nzc3Nzc3Nzc3Nzc4LFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMTI0NDQ0NDQ0NDQ0NDQ0NixcbiAgICAgICAgICAgIDEuNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMC42OTAwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMC44MTIyMjIyMjIyMjIyMjIzLFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMTI0NDQ0NDQ0NDQ0NDQ0NixcbiAgICAgICAgICAgIDEuNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMC45MzQ0NDQ0NDQ0NDQ0NDQ1LFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMS4wNTY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMTI0NDQ0NDQ0NDQ0NDQ0NixcbiAgICAgICAgICAgIDEuNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMS4xNzg4ODg4ODg4ODg4ODg5LFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMS4zMDExMTExMTExMTExMTEsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAxLjQyMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTEyNDQ0NDQ0NDQ0NDQ0NDYsXG4gICAgICAgICAgICAxLjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAxLjU0NTU1NTU1NTU1NTU1NTYsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAxLjY2Nzc3Nzc3Nzc3Nzc3NzgsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTEyNDQ0NDQ0NDQ0NDQ0NDYsXG4gICAgICAgICAgICAxLjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAxLjc5LFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMTI0NDQ0NDQ0NDQ0NDQ0NixcbiAgICAgICAgICAgIDEuNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMS45MTIyMjIyMjIyMjIyMjIzLFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMi4wMzQ0NDQ0NDQ0NDQ0NDQ1LFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMTI0NDQ0NDQ0NDQ0NDQ0NixcbiAgICAgICAgICAgIDEuNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMi4xNTY2NjY2NjY2NjY2NjY3LFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMi4yNzg4ODg4ODg4ODg4ODk0LFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMTI0NDQ0NDQ0NDQ0NDQ0NixcbiAgICAgICAgICAgIDEuNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM1LFxuICAgICAgICAgICAgMi40NixcbiAgICAgICAgICAgIDAuMzUsXG4gICAgICAgICAgICAwLjExLFxuICAgICAgICAgICAgMC4yOCxcbiAgICAgICAgICAgIDEuNjVcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImNvbmRlbnNlcnNcIjogW10sXG4gICAgICBcImV4dHJhRmVhdHVyZTJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJSb29mdG9wIHBsYW50XCIsXG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJnYWx2XCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDMuOTc1LFxuICAgICAgICAgICAgLTAuMSxcbiAgICAgICAgICAgIDIuMyxcbiAgICAgICAgICAgIDAuNzUsXG4gICAgICAgICAgICAxLjE1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjYsXG4gICAgICAgICAgICAzLjk3NSxcbiAgICAgICAgICAgIC0xLjU1LFxuICAgICAgICAgICAgMi4zLFxuICAgICAgICAgICAgMC43NSxcbiAgICAgICAgICAgIDEuMTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgIDMuOTQsXG4gICAgICAgICAgICAtMC44LFxuICAgICAgICAgICAgMC43LFxuICAgICAgICAgICAgMC42OCxcbiAgICAgICAgICAgIDEuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjeWxcIjogW1xuICAgICAgICAgICAgICAtMC40NSxcbiAgICAgICAgICAgICAgNC4zOTUsXG4gICAgICAgICAgICAgIC0wLjEsXG4gICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgMC4xMSxcbiAgICAgICAgICAgICAgMTZcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY3lsXCI6IFtcbiAgICAgICAgICAgICAgMC41NSxcbiAgICAgICAgICAgICAgNC4zOTUsXG4gICAgICAgICAgICAgIC0wLjEsXG4gICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgMC4xMSxcbiAgICAgICAgICAgICAgMTZcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY3lsXCI6IFtcbiAgICAgICAgICAgICAgMS4wNSxcbiAgICAgICAgICAgICAgNC4zOTUsXG4gICAgICAgICAgICAgIC0xLjU1LFxuICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgIDAuMTEsXG4gICAgICAgICAgICAgIDE2XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImN5bFwiOiBbXG4gICAgICAgICAgICAgIDIuMDUsXG4gICAgICAgICAgICAgIDQuMzk1LFxuICAgICAgICAgICAgICAtMS41NSxcbiAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAwLjExLFxuICAgICAgICAgICAgICAxNlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuMyxcbiAgICAgICAgICAgIDMuNzIsXG4gICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAxLjE1LFxuICAgICAgICAgICAgMC4wNTUsXG4gICAgICAgICAgICAwLjA2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC4zLFxuICAgICAgICAgICAgMy44MjAwMDAwMDAwMDAwMDAzLFxuICAgICAgICAgICAgMC41LFxuICAgICAgICAgICAgMS4xNSxcbiAgICAgICAgICAgIDAuMDU1LFxuICAgICAgICAgICAgMC4wNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuMyxcbiAgICAgICAgICAgIDMuOTIwMDAwMDAwMDAwMDAwNCxcbiAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAwLjA1NSxcbiAgICAgICAgICAgIDAuMDZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjMsXG4gICAgICAgICAgICA0LjAyMDAwMDAwMDAwMDAwMDUsXG4gICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAxLjE1LFxuICAgICAgICAgICAgMC4wNTUsXG4gICAgICAgICAgICAwLjA2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC4zLFxuICAgICAgICAgICAgNC4xMixcbiAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAwLjA1NSxcbiAgICAgICAgICAgIDAuMDZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjMsXG4gICAgICAgICAgICA0LjIyMDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAwLjA1NSxcbiAgICAgICAgICAgIDAuMDZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuMixcbiAgICAgICAgICAgIDMuNzIsXG4gICAgICAgICAgICAtMC45NSxcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAwLjA1NSxcbiAgICAgICAgICAgIDAuMDZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuMixcbiAgICAgICAgICAgIDMuODIwMDAwMDAwMDAwMDAwMyxcbiAgICAgICAgICAgIC0wLjk1LFxuICAgICAgICAgICAgMS4xNSxcbiAgICAgICAgICAgIDAuMDU1LFxuICAgICAgICAgICAgMC4wNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS4yLFxuICAgICAgICAgICAgMy45MjAwMDAwMDAwMDAwMDA0LFxuICAgICAgICAgICAgLTAuOTUsXG4gICAgICAgICAgICAxLjE1LFxuICAgICAgICAgICAgMC4wNTUsXG4gICAgICAgICAgICAwLjA2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjIsXG4gICAgICAgICAgICA0LjAyMDAwMDAwMDAwMDAwMDUsXG4gICAgICAgICAgICAtMC45NSxcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAwLjA1NSxcbiAgICAgICAgICAgIDAuMDZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuMixcbiAgICAgICAgICAgIDQuMTIsXG4gICAgICAgICAgICAtMC45NSxcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAwLjA1NSxcbiAgICAgICAgICAgIDAuMDZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuMixcbiAgICAgICAgICAgIDQuMjIwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgLTAuOTUsXG4gICAgICAgICAgICAxLjE1LFxuICAgICAgICAgICAgMC4wNTUsXG4gICAgICAgICAgICAwLjA2XG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcImdyYXBoaWNcIjoge1xuICAgICAgXCJiYWtlZFwiOiBcImRhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1J1QXVBQUJYUlVKUVZsQTRJTlF1QUFDUWNBR2RBU29BQmtBQ1Bpa1VpRU1ob1NFUitqeEFHQUtFczdkK0NTNzhDL3BMTVlmMS8rd2ZyVjVCMXorc2YyNzlkLzY5LzdQOFYxZ1d4UGJYK1lmOXovSjlVcFlYbVErSmZvbitLL3VmK04vNVg5Ly8vLzA3LzJQL0E5ajM1VS95dnVBZnd6K0pmMlQrMC80RC9jLzNmLy8vK3p3by8ySC9yZW9MK1YvMFAvWS8zTDk4L21zL3puOXUvcXZ1Yi81bjk4L3cvdUFmMkQrMC85SDFsdllYOUFMK2UvMmovcmV6eC9xLy9YL3BQK0gvLy9vMi9aci94LzZuOS8vb2EvbUg5NC83ZjUvOXdCNkFIcTc5Sy83ai9aUEVwK2NmM1grbi90ei9mUGMzckJleTNLQWlJL0VmdG4rei91bjdrL21kOG8vNzN3Ti9LZjNYMEF2eFArTGYzMyswZnVSL2lQM2ErbHgranhuK1YvWVgyQmZZYjUxL3IvOEQvay8yWCtRSDM3L00raTM5bDZnSCtFL3QvL1A4c1R3VTZBSDhwL3dQL2svci91eS94bi9rLzB2b0ovTWY4di82ZjhyOENuOG8vcmYvVi92dmFnOUZ6OXR2LytKTGdDekhwVjJ6ejNIbnVQUGNlZTQ4OXg1N2p6M0hudVBQY2VlNDg5eDU3anozSG51UFBjZWU0ODl4NTdqejNIbnVQUGNlZTQ4OXg1N2p6M0hudVBQY2VlNDg5eDU3anozSG51UFBjZWU0ODl4NTdqejNIbnVQUGNlZTQ4OXg1N2p6M0hudVBQY2VlbXhsRmRER2s5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIU2JsbHNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyNjM1ajFFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3cwdGJkSDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxdERQQWRXUHNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUXBwVWc5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZFYWhtSkthVDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gxdnpIcUlkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aHBhMjZQc1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3JhR2VBNnNmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWh6elFNbWxWcGYxWSt4RHV2c1E3bEhxNmlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaEpKN29wNjhYWkdWZVlFZVJKVFNleERwTnl5MklkMXBVejhkc21Qa1BwbVBzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82MGhqMFgwcVhqcUxXUjRJQ1BJa3BwUFcvTWVvaDNYd2hKS3UxZU5KN0VPNit4RHV2c1E3ak0yVlNBSExNN1lzRUIzU1JKVFNleER1dnNRN3I3RU82K3RGTFd4aUpZVE1vVVU0N0kxdXpaN0VPNit0K1k5UkR1dmhDWFR4YkJFbE5KN0RGSUYrRDUreE50dlJoOWU3Rk9pdFREZmVadEtYVEhZV040ZndhQ1lxOFc5cXkxcjFqQTRad3NHbEdvS1dOcFhjUGdici82cEVXa1hUSHF1SHdONEplTHM4bENFZnlUZWNrc1d0czU3dUFaVlB0Rk80ekxWTkpRU0pPbElVbXhuSVR3MXV6WjdFTzYrSTFETVNVMGxac1pBMFgzWnM5aGkxZWk5WXZiMVozcTByVjlXVzl1MUJkWVIzdmhvaGJCVjdMMlQ5T1RVbGpnU2xMUGlmZUZDZC9BS0w0Z0lNQmlvcVo5U1JYZmdkUUVMMXpUdE1QcVgrS1Bnb0FSRjA4UGFhRys0YzNiMGkzdmxySWxQbWJDdHVHS2JtWFlKWGhJeW1iVVNzeTVQaGZrb0pTdXVVQzg5cXg5aUhTYmxsc1E3cldiR1FORjkyYlBXcGxrZHNyUklvQU1CT2ZPMENCZTAwbGo0TVN2R0NBS0MxK3d3YS90cWRCK2VqeDVHZEpLKzQ5aWxBaWlndUxjZ1BrMWVMcEtySmRjMHBZMjZoWVlyVHBvZ2svMlBIelNzQTJHM2xwTFk4bmtxWnUrSzNMU0NBaHNyYTNFSisyMlpnY2huR1VvR0piZldCREQ0VVdpMmtzMVhFdStEa1d0Z0h0RFo3RUthVklQWWgzSXJEMlQvQjdzMmQ5TEJoQTlGUkJHK0JMQ1lGKzJxa2VOUTdzMXhwMEJJb01oS0FrdDY4SkdWbTQrVmVMUHhvRmdRbzBqUG1vUFVGZEFLVERjTUljd3VHUDh0aFZCaUJKMmN1SWQxOWhnNEFCekpOY1pPR3VROENzUTBoMU0vUHFWR0k1Qkw1YVlIdUZyRmIrN05sb1o0RHF4OWJPdHloa0pXUHNRbWUyTmdJMnFrWkE3c2NUMG9KS1d5NHVnYUx1V3dPZTRRVFZFLzRObWxlMkJlTEp6YlFUUG9sY01aMzNrcm9ENEpQR1FMRThyaFNaMEY1cTI2YnBsWm1tTUp0NGVvYlJDNHNRekVXOFhSSnQ3eGZrbExYcEZyczI4clIxR0UyUWZTK3oySVUwcVFleER1UldIc24rRDNaczc2WW5KQ1Y1dkNjTm51TkFxZ09OWVdndEMrZUYwc2tCa3lTN2E0M2l1SzJTR0g5MkZPcUx6WHh5VkZpNENScnRtV0diL0x2UjBDb2tpVXdFbFZYc2xBVVpmamdzQmJOTzJyekFzSDZvWGNFdU5tSWQxNzV5aWhGdzBkOWhueWsveGdEOHhyVUw5Mmw3MmFzOUNyRFlTVTBNZXJxSWQxOElTNmRxbnhqY0RxdU8yVEs3aW05TE9pdTY0aXRzTkZuWWkwMWJRTnRtOWJVOG9lMjZMUU42WjNrZWhpWG11dDl5Y2c2ak12L3Q0UE93VkFwU0pxd2ZzU24yNlJLWlQ3Wnp3bmRhazB5SXZndnpOOENaS1NybElQYmxob00xU1dpWUxFbzhFaC9pSEtPSTFIYWRaTjB5WUtjQmlwSzRhbjZ1MTUvYnNEWTl2T3ZDb1pGQkMvQ1l3WG9GbThJdDdHWC9jN2lkcVhsWUROWjhSbHNyZUhxNmZLTHU5eG1XeEkrTHVSTkh1UGx4S2V3REd3cW4rU2ZYME9XamR2QkR4TXNPU0lrcGVWUXpFbE5KU0p3ZDNTYVBnZFZ4MnlaWGNWQndPblQxN1lsSmtqbnNCdktwNUpENGdWNDRaU1NhcDdScC9JdFFyaktibWlRbjBXVU9BdG5UaWpVRWRva1FiU0kvRkRhV05DVW1Sc2o3RzE0cGZlSjQ1VXRIWlUxWVFINnkzOWxWUjFrS1QvNlFjWFNrcElvK3RWQWQ5VW4xT3VhVDYwYzJCTzQ4alAraXdpRDlGcnBENElqbkV0ZmV3Z3VBZEl5aC9INmF6T3hmbjh3eDFZK3RHNE1BOWR1UktIbkFoamdBUmtIS1FHbjhlWkJYNnIzRlQvUTlZNnNiUXp3SFZqN0VXcEM1T1JKVFNleGRKRDRWRWExdk1FZVVSb0xMRnovYmI2MmtBZmhrWm14VkpLZDZCYW9qSno2TDdFTzYreFg4b2Q2Z0Vqck5uc1FwcFVnOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmRWFobUpLYVQySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMXZ6SHFJZDE5aUhkZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWhwYTI2UHNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyYUdlQTZzZlloM1gySWQxOWlIZGZZaDNYMklkMTlpSGRmWWgzWDJJZDE5aUhkZlloM1gySWQxOWlIZGZZaFRTcEI3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNitJMURNU1UwbnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZyZm1QVVE3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RFN6VExXb0ZYaXZXajRIVmNkc21WM0ZRY0RxdU8yVEs3aW9PQjFYSGJKbGR4VUhBNnJqdGt5dTRxRGdkVngyeVpYY1ZCd09xNDdaTXJ1S2c0SFZjZHNtVjNGUWNEcXVPMlRLN2lvT0IxWEhiSmxkeFVIQTZyanRreXU0cURnZFZ4MnlaWGNWQndPcTQ3Wk1ydUtnNEhWY2RzbVYzRlFiMWhtSWtpVTBuc1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHV2c1E3cjdFTzYreER1dnNRN3I3RU82K3hEdXZzUTdyN0VPNit4RHVNQUQrOTdocExxZVF1N1ZuMFFBQUFFMFB4NFdJWnNlWVpBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBVmJQdTF1SmsrNXF2TWpqdmJDdkRKcDdYSTlnYXIrZ1pFNG54VkR1OTdWQytqN20wWE1LQ3hIbGZjdmhEV0gvK0ZycE1MeWVXSUxnaVdIQ1BkbkVTNDVuUnV1MUpVY2VNWVEwdTBhTDJIbi9xMGd3WlFKUUswQys3dm9WaThzcklsVjVDbWlZcXdBQUFDSjNXZVhHMzZOQ0lDREJneXJPb1piNENqUlI2UjBGbkpQc0E2ZjNzQzR6UlhUa2pOZ0R0MzJpSCtTMW1KOXQ2VG1rWWJEWDROMU9rNCtlVFlSeVRldkFSMWZlcmFlV1JUUjQvc2p4dEg3bHNLS2tSb1pFR1hCMmkrTE5VaGVWOWxQM0xGNEtlaGtWZDBlYitEZnhGNEhsT3Y1bjVrSGhNYXh6RGxJQVEzOFpnb0h2eGltb0I2RjRqVlNyTWdPcXNqUHNXZmRmaDZjb29pNVJIZUlySE9lZ25yajNQLzN3OE1HcWJNanZoVllNQ0V1eTlJR3BnQUJINlRZVEVLSmlOdnlqM0RScDB5bG9Vd1ZDUk1kTmt4Q1hFSUlaL1dkeEhvOUY5UXRIYnNRNmxIOFRxVWhPcGRDQWlRcWVWOFAxYjVuYTJHdDhwN09Dd05rZUszdTUzeW1ETXN0Q0xLUGVTK1AyVThaOWgzS1dMMkhuL3EwY2Z0MUNwL3VwUllQSDh3dzA4MnZBRW9IT21GTEQyS1AzQlhUNXZiMTZ2NkhYaVdCOWQwY3FrSjBzYjR1WkppRmovaWNjRzRGaXQzaHRCeGN6QWl1L0hFdG8wQXRXVHpqNWV1eDcxMU9FWUZ0U3NNLzAwdis1dW96ai9BK2dVa0cwU2lxWW1vUmk1QzhZaVMyRkpZZFplR2lCRnlmTkZQQ0JoZlJySFJMc2N3aWN4cVZiYW9XZUJiRHE1QXFJdVVVUmFCTks0RE0vSWc3QmZuOGZDTmVoZDBYaEVYSjN6aEMrUCtZT3lwclhBQ3padmZhWjJ3amtaNi9LdFhRNU51OE1zRlJVVVl1NG9hVy9VYmRwNy9VUk9XNjF6MmZEQ3NNdXR6ZUxCZUhPMEtTRlNkdTdPR1ljZmpncDBSR1c0VGZZM2VHUlZ5cyswSUJ2R0MvQ2RBQkNxVzZmampQajk3Nmc3R1JvNGVqZ2dsQktTV2lnOVE0SEU5OE1uOEhKc3p2azBnOWJUV0djOENDYlIzM254elk2djJNR2IxN2o5QWs2NmIzWVFBM0liSmdZSDJJMkNlODcxU3pMbS9KVEJVTlZzak5qLzRHL01rcWx4dTlObmZvVERmUml4dzZsUGFzVWhYcTdFdlBYbC8rZm4xdXJ3WjErck8rQjBVQzV4TkdpZ3hjTUg2MFZURDVIeDNidlh3c2RUVmV6V24za1A5TVZScmMxcE1OTERGeFpia1BhK0c1TFkzbzhSRDgzNngxV1JVdzRTdUlTcWNlU1ozZVVJbVpXcWpCRVR4MExnUVpKMjRiQUdRNjdTZU0vU1FsNERUcjd3NGhHa3FOV1VON3dmME9aOXoydWVJQjlPZW16ZFNObDJtUEx0NnBUYTd0UE93eDRSRmhTR3prK3VEWEpZS1dsNHBRKy9ZampoTGhSektkZnlXV1o1VjRNYVo1bTJSV1pnSElRdGc2NEc0ZWQ1cXg0VUNZMEpPVGI0S2lxVS9kWlRHdGVHZEcyT202MXZGQmVwRkZRS09lQkpqdE9manhiMFlhVDJLREoveUFrWXdyQmhzSjkxckFSY1VyWnl1d1JPWmxCNFFNSzNEVmhPa1hWUDZDNTBVMzYzYzY2aUloWEFwbXRIUDRrRDBDK2ZsK0JxQXZtL3h1QVZzdm5tTjVaZXQySzlUVXZPR1N0T0p1L2ZXeVFqVEtvT3dVSEtiTys5UmpvSEpOS3VZVXE0dHE0L0t4VUFGTkVROTEyWGw5TzRVbldMZjdiZDdrM0ZXVzF5anVwSlcvRHE3c3RXTzJCU2Y2em9UMCtzanQzd0JRa2lvUzY5M2FxYXpsL1FxQ1M5blFZMXVJT2xYalZ1MzVNVk5tbkhPblJxWFBuMStkK1BCODJrUWM4YUg3OGtxeFRhTmVJZXlhdEtxRG1YQW1DSGdoKzgwdFgraFZRczROcitna1VGczBzV3ZlL2gzbEFNSzFQWUgzV0RXWXpkbDFxSGhSYkpxVjJnb0tTczl1OG1nVGtsSUlEY3NxMElBZzJTclhjMjYrMkZpSTZ4WHpnZWVBRHNoZkpNcHR5bmxOaHB5NEFBckc5eTJ0WDRIVlpOTjlVVlp5VVZ4R1I0a3Y4aEtoMmJKbFlVYUVMeVZPQy85eURpaXpmaDhiRld2Z09NK0w1aklxV2lkKzBZdkRtVEp2OUx4WWtWb0hUbHhidExZbEUwb1hhS0VkQSsxZGdqNWxEV0wyZ0UyaTlsOW9SZkpzb0xLSlA3d3VnZUVqT0xFRkNvLzk1bXFtTlZ2NVR0Zm5YdVZBZDhIeVRmN2hDRVU4TEdlQUlEa3VWOWR0b3ViUlVWb09vU3lpcEtHd0FBSG9vUFppMGliUjFOT292VEc4K3U2Z2ZyaFdWdmRSVVFPU2pYK3FNSXR6dlZtTU0rTmtwZjJhVWJOOFNCRndBRHdLd1I1N2l2TmtLeWNqQU9oejkyMWthYUhuNFc4OHROaE0xc2lzQmZ6OWtjeEpFN3pKbW1iSFMxS25wcTBqTkRMZ3N6VlRlZ1FHdlpJT0E3UENoVW44VWZlR0o2QzFqMDVYWXZFWDhsUFVKOVZTQmRneXNuVjI0a1VRamwxemcwelZvQWxzdUU2Tk5ydllWajhjb1R3VjlDWVQ5c2prQURuUjBoZk8yZDhjS3VpRXpab1AyRkdqTlUrQXl0aWV5NjQ0TUR0K1g3bVo4bjdwL2hDMHZCREQxYW1oYnlCZkhrRnRQM1RTbmtDUjJaSGpsMTQrUmRySHB0WnBzWThRc05TMk1jVUpTRUU3RUVvVGdwR044N3ppMzFCZUdxdVViL0VJQ3M4QlVHdHlkZFdXanB5WUN0S25FNHE5amg3VXo4SE1GQlIyUnFZSW9ET2lpUmx3NktKQnJJMEUxMndnRmV3Q21WaERtck00Vm5rREJoWDBZRlJzMCsxaGlvYTBPV0MvaDc1aTB6Qkh4bFNSQ3diSWFUaWJsMlZ4RXJjbzg1Y1VkcUNXU3dsQWdjWFBRVXdZcldGaDk4Q2pMbU11WXk1akhwVWdRNlA1SjVoQnk2SXN5azFML1J4a0xSSDNDZi9sanZ4YkoyZzdxN0UvNGdTbGJ4SVRabHBZbnA3UmptSGNISkp5SFdBa0JzdkZyRVUvMEM1T3YwWU45Z0pwRktMNnZlUmZvRDkyN0RJTk1KTU9KNUhpbUVwVHpYZy9iR1Q4SHV0cFJkMEdSVVYydi9GMEdEcTBrWW14M0ttZDdMNkFIZjdhazhGb1JqSEE2VFgxUXJzWWE5bnpCUDVMd0M2YmFWZWhZRVJWMmJZcksvMHdFQXVCU05CT1NJR1ZmN3dNWmUzOHdLcTA2T2FBN2RLNlRueEJ6VEIrQ3owN0VYanZCVExoOU9oMFJTRmRFWUlQUGQyVThtMXVxUXBDbllSYWhRZkFBaFRIZGpLa2xrM1dSRzR0SnM5U1BuaWpuWEMwOFQrM0lETVEzU2xjUFJ2K00yYTVCYndTM2FucllnUVJVUU04dlY3VmZxSU9ENTNzMWYraG9SQlR5WkswK240dm9tVk05R0FqSEJSdDZQOVRUckgrTms3N1ZyWGtwUUsyWVRpZE1hajJzaHNpMGxacy9nU2RvdUpOM2p2TlIyVFUxVzZONlFVcWx5Nk41L0dHdzlMd1JQSFZoTG9iTDlLNTA5TUUwczVMVmZ6N0lyL05Pb0hZNUhnbFlIOXY4WGxNMVFsdStlaEZvczNtTW90S00zaVlicExHTGNYcktGRW03SGtod2tyQlM2ci9RTjRZbkw1ZU81SHJjU21BVFdJTWsxeWMxYk5kdGFXdUM2ZzN0OVIrdDMzUVpDc3dNTlh3QnRPRjAydkVGc3lCVmFuRitmaWZZY1J0WEJVd2hVZEZPMW5KRHFoSE43Qzc0MUE0VTRxNk93MjhjdWxjemV0d0dzVWRBdU1vamZ5Vno0Z0pPSE0rS2NGYUtYdEE5TnM3NTUzcEFWMDdzdE9uL2hLUityMWVsVDY0TmIxZEIyY1lma3FNcWdsREQ2cGhwUDV3VGV3bjFuUTN3RFBUUS9taSsvZ3ExMjV0dGs3aHVwTmtjNHdCdEVKaGFIckFSSmVHSFZDaldMRG80SFU4VStxVlVkUFlZMjZFRHpYUmJ3ZG1UaGNNdWFhUk8wYlFzQUhyQ2ppVi8rTVJLYXdzemlMdnhyeWY4UHovMy9iN2JJREtYT0g5aDZmWU9IQ0k5UU0rTmtwZjFzRC9iZ0RKaCtTQ0xlbnpVbXhKcU9Rb1BvWVRzMnpTcWJkQjZ0NDVNVXhVUnVnZEhNNUtXS2g1NGltek5MOVlTMWpvTGd3L0E5blFkeVlyaTNPT3BFMlR0aGNtOVpVZUtkL1Y4RHNxUGJ3dmRCQ0lFNEVKUEpRTlVKRklEKzI3M2hGZzVVZTMrMS8ySkFkbXNWWHNQSW0rcnZTWDJXelRqajBmeURaKzRJQUVSbzU1K0dJWm83a0d3SjVVUnRyZld4b0pBTGVaQ3o4L3Zaa0UyNGRrRzk4Tnl3MForaFBkY283dWhaTng3RnUzZnV6WUlRbEE3VktTQzloUDlpWWc5YmFWZlQvNUhZQTh0U3pkam9mRGRXTkxyTTZKMnpXNU5YWjJETXJJWndVVlhJeGVyV3VHcml4ekNsYit2Z2hGVGUzWUViaGhienRpR09EVzIwb2lOdjJFKzYzelFHenBPeHU0SldLblN5VGdwZWlVMnhicURKVGx4Y3phZDRhSmVSNTBNNnZsZkphbTJyRGxjdThvT3QrY0JHdC8rUGdLbGZWZzRrSUdVM1puL3BmR3NrWk5JSEJIcEk0SG44WXlvTkFNVHFKZTNyMFlGdGp6OUl3cWhzUWptcGxtSXJIYS9taVkzN3FkbkxZRS85M0VQZUpjTmN3dnltYUg4bFhLMUdoK1BYMmRHUEpsYnU2bnR3d21iRkZadFdqMUFmVmN6TDluemQxNGxaQkZrYmhtbWFOaGY2b3h0d2hML1c2WGFzQzdPcUlIMWxLQTc4SnpXb3RUSWtFZjczczBRcVJsQ0tMNGExa3VmZXhPczc3dWxBOGZUKzdTclY0OE1KTkJwQStnR05temNzMDJyS0lURjFNdGN3T0NXRUVPb0dQNWZMemFsL2hyZVhkcWdxRCtGNFA2czlmK1BSV2dZcjNsWTAwRW1NUHN4N3VJQ2ZzR0ZOcEJqOTVFK00zVHpGT2lBSGxNUG13aXBWbndZNzZSZ2NMaitidDRKbmRRamc2dkF1SXh2YXZYZ3cvcjJFTXVvdjY1MkMzWlBlQkhRREljRjlSY2JBZWZCT293d3p4eDBvUDhDaUJRMnpiRlkwK29lbTkrd3pzR1hzUWt3OHI5cjRYYS8wM1dUOFVyR2JmNDdWczRPNk81T3FUeWpRQjZBM2FpME00VDBEK2NpOWM4a3VGc3piZkJsL2tmK1VyNWhRMFBaK0Y0blA0bnF1MzJ3ZXJrNloxMUF3Qi9sWW1weEdySkRjeWdWam5kbkUxczBFQU13SGV4YTlETXJDRjZ2N2xXa2xtTEdLUnEwaHNHdS9rd3lQd1BLMlpycDcvYVl3SjBoSGMvSVFhOERWVzZEOEp3VnpBbkNjQlk3dFZYWkphQ0YyTTVWakdJKzJMaVBXYkNaQU41UGs5bDlSWUZtc3FvcVZqSC96ditDcHNXMnFSTjhlUnR2cTNVSFpUMmxSTC9GZkpPVjF1WXJreTk2aWdyZDNZaVB6c1JuVU5TMXZmWVZmaW9Ic1VnNkpRRlFLay9Mb3doVTA4cEZxSmYvSmFuTXRMNzJac1kxTndBMGdQRkdyWTJ2RDhmdVFyclkycnUxY0hKTGNNTEJCRWRkdVMvYXV2eVR2YTZnWFVYbzhJVy9WQ2xuZzJnSU9BV1lNOFVmUjFVL2x5N1MwOXlDMnE4RGlSSXNQdmFuTGxSVDJ2UkNSNnltTXk2Znk3TFU2azB0SEFSWWpXRnJaRm9LcGJXR3BSM1lSNFIzcFpINjcxRWFMS1hwbkIrM1luZms5ejloSjJOZFVseG9iUERNOEs2a0RkYitnQUF2OWkvK2t4c1RiRFplRWloa3M5aE9tMHg5SzhLeXZOdUdYUWJ0cHMzWS9qZ3UzN1VpVTFxZjNCNUxoTU1rOUQyMnNTUUZyNEFUYktXTENaNThYdnlqUVVPSTJ1ZERkeDNGQ1ZZZ3JDdHBjbGF2QnZkOGdnOUVubFBucURPUXNJMGpPckwwRnJCZytJcXozcUpzNFVZQVpWN0tlMVNCMFJrS2QrejVmL01ORDl1MThNWDNlVTFHaEp3UzBHWVNnMkFGV2VFYzFXTjNyaVB6VXBKc2FXYXI2MUxkV1lXTk9Ga1dORXlPYnMzS04rdktvSTU5UjEyNmtwWEVJTFpySU9LelpNVUZTU242NllHYklQV1FZa0pCSXBjUzNGaVNsMVUrYmFVM0cyNGdQd00xcVR0K1FQK3JCUnRyUHp6YnZhbXZmRThrVndpSEVhcFJLSllBL1Q0dktUNzNSNlFFcW91ZjV4MXozNDl6bFlNelFTYWlYWDhpUXowMVNvQmMveHF2Ukd3TzJzQ0FxVHQ3a2RBN25Ed1NNMGRDdXdJdmNZRHhGREFIT2VhN0N6ZUZzeEtvczhic3VPcWkzdVI0ZktLNzZqeXBNZHo5aytKRC9MYW5FY1dOVkNkaXJjWUV5emVmVTJtUi90NzcrdlI3Wlg3RVUwRWRNMzVic3BDUFhCRkNWSkd5MTIzZFB4ZXdsdnAwVkU1dzhNclZvTGYwUEZZUXp6V3FxNDV2Y1JIY2pkSEJqVnN1VktQenFzL1VWUkdOanhrUjVRUHJ6VXEyLzVEbGIwcStaMlp1QWRkQnNOT3dwdHc2VkIzRk96TUZ1enhheGorUG5hMzc3bUNBTTBoc0NEd2k5dHZJZVpjVjJnVll1MFo5ZFcrVXlWS2VmZjR6WWswWVFTS3ZvanB3SjBmL2E2QTlLcHE5TGtvemlHOG9UNXFNclI3ZTRNcXVCSm9LRmh6aWEyQXlOQW5ZcjJwbWlWa1JjVlVGUUdEcy9Ya1JYTDNOWTU0SU1sU0taMlZhQ3MxNnIzbTl0b3l3K3JHQ0xITS9ZdUpBdDBjVEpOT1RlV2VGRThCbkpWVUNtV2VkZU03YzZVM2ZJYXVFQzRrTmMwVkJpOVRpT1gwN0JHTWpiUSs0YXVVSGdhSG1TME95N3BaK2g4R1BQd3FUTWR4QUlIUU5DQWhWQUhJNmpvVUx2dWxZeXg0dUN2OE5ldFBtWUFBTCtJcVI0VXFYUWc1MktzRHdhZE9hQXdBMDRTS0MzaStZODFvY1RGc3lhaXIrVGpKN3k0Y21jbmpxVE1OdkN4M09vbXFqNFZHT1VwQmp6cWhudXlmY2U0Wmg0Skp2NVh4ZEdTR3ZxY25NcGFqVjJOR29DRjBXTzhyZmdyMy9WT1NOQmpWb250Z3lBRkpDdUFyeXpiOHZwRmNwVzRzYzhzLzd1RlJpT0RyYTgwNHBtMHlQclZ3bDA3V1BlcGwydEtUWlBEdDZVejd5QjNYV3pjNS9PUjh6ZmJ2MnlLSWM3QUJsL0RZbDZkWXNYcmp4VHlIc3N3S0RSUkU0VERkejI4OGFJUjd4YmcraGRUY1F3UGQ1QTZmK1RlWlU2cXF0M3NReVl0MWtZQi84WWpJc0M1MmlSanBIMjdQVFFlaFZBNWZjaEFOeGFrbjg1TW1WaHJQaVBVSTdESzBlelNhdUNhb0xDNnNieGZvTk1hcnVkOW9LUkVaNzlLSG5Hd0FrV3ZWWVFUKy80ZjZSQVpDcWZVSWc0aTV4TG8wZWp1NFUybFEwMHJVdFdQOEVRSDNoTGRSNW1UKzZZYWFHVndaTXZYVzN0REQvZzRGNngyK1pYMUgyMy9nQmMyTTJQenZYTVVRNXd4cjFvSnZ0VEcxZVhnaTF1UEUydjFrYzByZ2k1QXlPbXpYQy81aE8yVHMzSUxxT3Y4Si8raHRZS082VlZ3RUpLYWY1cUN1ekF0dWQ0azNuOGgzd1V0MzdBK2U3OGZRV0xlSXNCVkhmME8zZWdlcW9JNmRzTTN6SG4yV25SNXF3WU5QVkxWOXIyQldWY2tnc1A4NlVTZEEwVUJSVjloK25ac0FnbHhsWWR3YWtmMHNmTHhJWmFwbFBvL2VRNGxWVXlxanA1dzZaUEZNQXhVRVM0VG53ZVRuSDRLWW1vL2E4bDlMRG9BS3NjZEkxTy9veVZwdmRVdmNieFEwTzc3OXYweVlSTlBLR0ZSNEcrY3RpRXI5R3F1NEFjamFYRldIcUY0YWZySHhwMHJiRWUzcUJSNFdrWUE0aUx0RWtmMGRtOXpmZ2xEZVBOU3RXUkU3Vlh6SVJXeXFLaEIrY1FDMjI1Y0R3cURMZnNWbGVzLzBFdGhJYW9ZelZEeGVaK1U5WEhUVnFkTGpveGJvN2Z5NHVnR1ZWcjVkQzB3cGtNenBqVWFPdWx5U09kR0VLc28yS0FnVFVZdkMrMTA0eUhxOTE0OXE0VUJBblpqQ1ROeUdqb0ZaZmVRM1BpYmJOQkMzTjkvdFRoRksxMEQ4ZmVGOUVxbFV5Q3dQZVp4QjZKenVZOU5ydmRZVUtaL3pwaHFXK2FWTnhiVVpkWitJOGZ2TG5sTFdraWpmMC9la1RIbFp4MkdnOUwxUGZoZW5UTkhpOW5la1huNXpSb3o2THlZZmRLc0M2Z2p4NHYxeUJUVGJwN1FnZnRRSUZ3WjkwOHhRTFF3bDREQWhUMVRuT0toNVV4eE85VHQwcEpoUFhOQnR5RGhXVDczbnN6Nkw2WU5wMDNrenlNQ1ZNSzRKVDI5RjNIeERIbzRJLytweDlVWDZwU0Y3a29tL3ExLzA2OTFPS2RZTW5YTjQzNndrcjRhcEJGUGRSN2FJdVdVb2FRSHVaSUJZdEJmRjdTYUtEcnRZNnpzRytiWW5SLzE0eWJDanVuQVBKbGZNQUcxMWVvZnlOaVFicjdjRDhMdXJ2dEtYejJGRzlrVHNCZUg2TWdxV0JJSXVRVWF2T21qc0VabmliWUgwWDRQUXpkM0VsT3pLaGNwcUhWbHdmMmVlUklldk56T0ZmK0M5cnl0dlNqRFIrd0N0TUxnc2hwMml2SFlVejN2Qk9ienU1Nmtzcnk3YklEaUFCZWVWSDhEMzY4V3dsTEJJbXgrWkNnb2x4RjhBaUFBNko4U1FLdEdUeFhKRTZpc29TejZNZ3FpTHVlQmRzYWpGRGpzZ2YrV3RpT1RmZllpME9zaUp6UWFORDFNR0g5R29NVFZlWE52SEg4a25mMlJaTjhTbmMzNzM4TjRpYXE0OXBINmV3Ulduck1JcTVYTHFNeWlpOXpuN0FWTXZ1cEMvTkltN1c4TXdOR3FLQzh1WDA4S1YzWnR5VXAwRkdsSGl0bFB0SnFXeEYxSjJvODVzVlVLZ2JsWVk5NFhKamdWcXgxcDBsd1NTYTZQOWZOQUk1WTRtcE9SVzkycUZLcHlpSVAydTYvV1lxclJkUHNlKzE2QjVUamtXOFZKTTc0ZEN1R0pjV3QzZ3k1K09vYzlVVElQclRQdjIvOHNyajNkak1NdnNnQXYvOWkvYVppSENhWVIzSFpiTVQ3WVk0SDY5ZFdHYjRnalIxc29KMk5ITnF6bXdrR2FPZjhjQVEvNFBIQUJBSVlXS1NjdzdNOWUvaDEvU1NmVncrSVI3UHpHUk4rdWlTNzRiWmU4b1Q4d0IxTmhTM1JncVpRYjZKTzNoRW12ekMyVEs3eG5SdnErakU0cjd4WTZXSU4vcUgrdjlCSGF1cFArcDBSZWh4a2FMbWFwb2plRzBlMktrcE1ST2dHZEtaRm50UC9CajJCNEJmMXFncW51TDBiNE1FVWtBNzc0WDlDM0hrRzRsQ0pDeUxMTG14eTh4dXpraGlCTGRNcllvbGpJcW9pVUxTa3NVSk9JTzdKeTZsK1FCT1RrWXhveW5Vd0oxQmFyWTVYNGVaK1ZjOHB1RFl2OE9VZFIxSFVkRE4yWFB2R0wzblBER29lNjFwSHhzV01tN3prQyt1VDRwRk9SdWI4NlFIN2F6NW1aWklyY09kWDNST2k4VDhJRnRqOGRQR0FFU1Z3MEp0dVhGRGltSnpLSUZuakJNUkNzRWZieTJGY2FzNS9CQWdBYVEvd0JuVWlQSEZKNkxkOTdWWlhnaDFTam01R0FyUDhWT001Y0g5QmROV2FCME9sVW1EZFFINjRoN21VaGtzWCtoUlBlZzRKUVliZFNWOThXOS9CZHkwckV1K2w2WnV6VmZXZnJ5SEUwMzlxTHI3cXE0ejVGNHc5Vm1DQm1QTE43dU1HVURQY3lwb3BGN1pDQ3NRNERUbzVJSWFnV3ZkdEpPaUNOdHg3OFVVSS9BUUgyd0ZSWk8rTGRaZVlOZS9GMWdnN3RnVUM4cXFEYkNwQ1lkRXhIQ2MxUmpkNmtqTnI1MHNjYWhGcmVnZXBRdHM1ZEl4S1RrMlVYT3ZIbnlRN2VxbVhZUlRFa0lGamhBMXVLajFieVA4MENERVgrQjcyR2tOOXZ5SmJhVkFjcWdEQU9tVFhNZjVhTFJVUlR3WTkxaU5mdWU1QWtYczVlaVdJdEk1Szh2Wk1yQ1YwMjVUc21pcnlVZ3ZRN3FnaUJDWFZJd2o0c0Z6cnNVbWxlV1UwaWxPdEZzalFhZGVwdW9YazlVTHNGNFNvUVNkbkM5d1JMY0owaUtaWGpKU1ptaGpJcW9la3UzVDdmMFU4eUpBWlFWcWo1YW1sMVZJLzBmOS9QN3Z2UTJORGtYR3JPUmJUV0FtVWRTajhFNTNGVjZSeEowVEhTM2hYWUhxYmxlYnR2K25mWXpxZlZ1Ry9hOTdwem9qd2lQbXdLZjQxQ2xLT21Fb1IvdUk3cUxORCtPbE5hQXk0WVJzMVVkTm8reHdzTzNRdFYxSHd2VW9GZzh4L1hyUkViUDVRNmRvdXRoZkluQVA2bGZrNk9JTzN6THpTRm4wRTdzSWIyNEJDS3JqdHpuTFNZQkkyRndmdFhwaFoya1o4dVQ2WXpRNmRTdzBmVjNIN0pvRmJXTVJpLzFpVVprNUdDOVdVbzdEcUF6S2pOMk9obW9NT0Q4RmpqbUk4bzQxWUN0Z2J5QjhjenVRY09GRWlaeTcwemhiblc1ajl1cHlBU09yMTJYenRUS2RoSVptZUQvLzdNZjZuVjg2Ky9lcWppN1Z6K3JySVZ2TlRnLy9FUDBrQnhxdXJpRXNTMVhHc1c0L3NpKy9JbktXTHhQY2NzU0tXTi92YXN5ZlcwSS9WZi9jaGdhaTdQSzNyNTRwNzUzYlh4ZU9WWmJhallFQUljSE90UWRBSENYWUVUeEYxUGFHMCtEWHB0TlhvTW5aVjZEcWt5WkxDcVF6SWV3TngveUdRY3U5Z3hOYjlRQXFyYy83TW9Ycm0vWjZZc0psVkpXcmk5QU5TUHF0Vy85THZBMGlhMUJQOVdhZGhoRmN3L1g5RFhnRCtJTnZJSmNaS0krazlCcmJFRVRZOGdxQTV3RGVCcjE5QXRZN1l3R05BTS9SbDhoTlRUT2U5UitndjV2WkZJNU5CLzZwT1VQNzRJZjM0THFCeDZYUkl2Q3ZWTTlTS1YxbnY0YUNpOTJXVy9JUjZXbWc5OWJyM1FMSStDOTJUSnZ6TXZHU3NtUjcrWUdNZmRGZk94V09HcVArU3M1N0F6allrRjBnTnZpS1ZVaVk1MnJmSmxzN1RKSXR6QmZHTjhJMVNWNTJ1eXJlYlI4eGpUYzU0WFhjRVBmTXRMQkRzbU5sdm0rRHZhcTlpQVBhbnNHTzY2cWRzZi9PRHdqQXFjbDZoZm16RFkrWkFHazMwTU9xUGlZRUFhUFl0S2xyYXNqL0xrQnV6eWdxV0kxN2FORkMrS0RoWkt1TTJtZzFVckNHOWE4eTZxeW9ZWk1TTDgxSEk0N283WDRXaTRTQWU1K3Z5WHIwU1EzSWs3YU13eVhBbkZJMGt5RFh0NnJJa0VsdG83ME12WDA1VHRYT0dIVGVNWDJ0ZkFiZkpmbHMzUTFIZklZOFF4aDR0b3loR1NYTU9UOXg1U1JEYkRhRkR4OVpsM1hpcDZEam0vclFpSHNZcVZweXNDeHUrL1IyVHRpOVU2eVJCeWVvZUVVajNLWXF0WEZEYXdmUjh4d2p5b3oyblZiMTg4MVM3OXorVWsybXFKWWkyWCtZZUpNQkJyL0NJdDYvaWF2VXBmRC9SclBDWnc0SDhrNkxhd2tjWjNhbnorRnVtVGNnNDM3SHlCNUdsenJVZG9JanJwMmRrVGcyMW9jTGhaWVhITk1QY2k2bm1VTndSbHR5Q01nWlBDV3h6RE5qeEt4RXhCVFRyeGxTOWxGdnRIWit4bTFSMW1FQUxGOEJOSURFRVRVR0p0NndSK0pBUzJPdEM5ZHZPQnJnYzZvamZsaFU0RXhuNkd1d042bnBsUkIwTDJXYU1KK2FBQ1AwWlE4eFgwSzVIK3dadU0yRlhoRmFtTkFERFZiL1VVTnNVd2JmUWE4RzhpV3BMZjJTZ1U5ZFJwYlhDR3VvUmo2ZXN4NVkvMjBBTVhJVmd4Q3dlL0doMUZ4SkhaV2l2OHlPU1Aya0xKTUg4OWF4V3RONzFxdmJ2SHRwNjFReU5LK1Q2b1drc0V5S09oQW9RS2N2Z2Zod3FDbTVvT1M0c1lwdEtRSGpVTTZHTU44bVp0aFBaaXdDMUl6d3FnNjhZbWc0aEIrWUxnWkxxT0d0NU1HOXF0aUNwZjhFSncyMmRQdHViZmtWVHh6WnIzZHJEU2M1Ukh0dUhLZy9FbXdDRkxxM202bVZhRlp5T0krY2dFdzllS05qdlhwb1FUTkFGMjVoL0U1RTNScXNIeWtjMzVGVzlXd2xVZ0IvRDZWVUZqNlIxYmtCaVhjcG5qNElNa3FmYkwyaDRVMWt4Q0pKSHpBUStpVnpyaVdMdHY4YW9ncDZ1YkxObkJTcVN6STBvOWorc1BtUUpxY01rN0FqcmhMQUo3Ky9rQ3ovK2pHNXJ4S0xDVmlhaFRIeUgrU3hVa1Yzd1VyaS9waFhZaW1pV1RUdHJPS1ZnK0FqN04ySnRzeGp6dm9jY3ZCcU45cTBOcTgxd0lXVU9JK1ZvL2xVeE1MTFk0c0MxN3dMM00xamdYT01WR1JXczBDKzYyczAvN0EvL3QwdXdGVGFaMDh1bldFaURjdWVoKzJUaHU0dXVhak52Q0RPV0tseVlIMXBiNkRjbDdZbTN6Q1Bwc1oyWEFJVjc3VVQwMm9YOGlMNFF2Sk1icHJJS3NjRjRQeENoS2J3UXFiaW9IdFRwT2oxK1dGcWlncmtZK21nYnlHZ2lpMmo5eUlIaW1NVHZyZkRYN2M3cUlMODFYTWVDWTVtN2V6MjVFK2o1VjJUT1ZUcUdHdXdjOEgxdm9xbXJmOUkzb3hVbkRoQi9ZLzEwcGplSGJRUXNiK3pkQVZMYk5YYjFEYjlmWVNXUUFDVUlhK0owREl6ajlqcTVmcWtpeXl3T3FkNEtacmRUNlBqYWJ3azBDSXplSGF0bjA2M0wvOEgzdnhwbDlvTVAyak0yakJsWHFETWM1RmFQUXJRbGd5c01TRXc5YVVQeHlZNzZEYlNqOWFHdUJDeWcreklJMWFwMk9TVmhWcllRTWNPb3ZxTElaRDh1MVlYS3pjUGl2UlAzRmtXcmVXTkxHMUVhanRFNEZQVGhHeitYbDFUSlZjL0Z0VnZOWlMwRVdJNUJXU2ZDa1V4aUN1WXFLcmtJVGhYYmt3NnI4TkFmV1BKK2RKdDVRUk5DWElWUmJlU1dZWmJSbDZOU1g4ZTRhNkFiaURucFlhalpEU0ZlWm9MM2ErMHpyYTJkRm1kenpYSGNrK1hSUnBud0xHYkE0MVRKTDB5STB5MXhZdVY5RDh2YVJIU1pEL3VqSkhDbjF6Q2tYZzR2eE8vRGhxVE84bTBTY1I4cmpQck1UL3RaN1RnRGhHQnU4SzFWcDhJQVg3Y0VzVHhhOGhDTENMVlYxVU00ZnFwcEpKWG5ySXRGNStqNzFzckMycDJOYkJ0ZVJJVnovK09adTdYYlllL0R0aUhCV0dweGw2K3UxNlFIRkIySWFyU212T3BKQlJQaVNxSEtaM0NCYlJuaUN1SFE5ckx6STNqZ0IvZit0WFMwd2VWY0dpblBTUkpyMWlYVVJmbklzK2NxMTVleCtzRzZIOWZ5ZGxhc2Y0alJTLzNqbzM3RkZ6NllzT0paRHRjWitIY0FINU4wWTNjdkVZcVYvL3dnUVB6VkhhVlhqVy8xQjdqMjdmNnZxMWFzOHBIeVhCVWgvdmtySGx0cnNiNG9admNwU1Z6d0U3ZmxjQmdFa0RWMFVIYTg4K0thcUk2emJoS1BnWjF5aW9XU0FlT0xLeXV3OXJzbEZ6Ym5ob1o4Q2xIR2hwU3BCOWJvQTNOMzd3SSt4aGhuallVcndiZWdoMTc0cFBEV3dFNy95S2RBRS9qMVpmUHNiM2RrU3RoWWl3dExxMFVvUEpEa2JWQmZjajFwMEUxYlNtZDN5cSsrSW4wSGlhSktFRlBsSDNnNm0yUlpGZEFGMlFTYVZLMnd5VG90UnFJeDRuVDdjV014RFVLV1Rjd0IyTGtHVFlJS1BEc3JkUW9DYUQxRUIwRG1jdXRKZ1FRbUxjK3ZvWTd0YmFUMzB4YlprTk1KRjBVS0QxSFpZeEQwWW42WDEvMndzK0Zydld5UGhZem5xQ0tWUCtDNWwweVV2eE5NeDIvb2VCbmJocktTU0VzSFRBa1Y1NzJuY1ExeXNRR3UrOVBvdmQyRWNRWmVjekkxUDYzQXNTbkN3R3ZrM2Jic0s3STFTNThwWVJzUDJ6SXJPOU56bmVMT3ROc1h1MnphR1J6aGlBNVRUVHZjQXczb3NHRzhLa1NIeFFuWUUyR2EySjFudHRmSVYveVlLWkhLc0FRMFM2R2crSEhuaEN6TEcwVHVzcTM3SXJ6UTVkckIxeEpqenpyRStieDQxWGdaOUthb05VS3Z5bk5Gd09aRkZidWJtNlNheXNJUThSbjBsdlRLTmF1R3premI3NEtQUUpIeFY5S3lnbUt6R3pjYmdRZ01QSXlCdlQxQXA1Ulc2cVpmaHE1a25Uam1FTzc5bEQ1aE81SHVSd00yU2s1cXIxWWtEKzN1Q3VJSEdRQi8rWGU5ajQrNHVleklBdjVqK0k2Zjk3Y2U2R3F2cmNGU0t0TGl5dUM1b3BzTytFVGNnczhHb3cydVJtQnZqNUdKWnVrSTgyMm1jYloxa1VmQjBoMkpLMjNNaDRhZDg4TW9BNTVtdHFUQ0VHVkhlM285ZWtFQ3VXZjhlZXpLLy9pUjhNWG5zN1VCdFFla2tERklqSk1pTzQ1WmlON0RXQTJER2xvN0Rkc1RSem5TZkQrclZZTDNNeWVNcTBpTm40NlZEZ2tJTGhkZzZ1NHpsNjhtV0Jja0l2bjE1RkJGc1Y5b3dPblFsdWVla3Fhd09wZVJma01SMDBMaG5Zd0E2MXJvN3dyNEVJejdSOUJIa0x0d3hNT2o0enlhWndBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVaWlaSnVaSGV0anRyOHFabFVQVHFCaVkxaWVFc3JNVUFBQUFydy9UM2hHeE94QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBPVwiLFxuICAgICAgXCJzaXplXCI6IFtcbiAgICAgICAgMTUzNixcbiAgICAgICAgNTc2XG4gICAgICBdLFxuICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwiI0YyRjRGMVwiLFxuICAgICAgXCJvcHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkxvdHVzXCIsXG4gICAgICAgICAgXCJ4MFwiOiAwLjEwMixcbiAgICAgICAgICBcIngxXCI6IDAuNzM1LFxuICAgICAgICAgIFwiY3lcIjogMC41NSxcbiAgICAgICAgICBcInNpemVcIjogMC40NCxcbiAgICAgICAgICBcImZpbGxcIjogXCIjMEU3QTRGXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInRleHRcIjogXCInc1wiLFxuICAgICAgICAgIFwieDBcIjogMC43NixcbiAgICAgICAgICBcIngxXCI6IDAuOTExLFxuICAgICAgICAgIFwiY3lcIjogMC41NSxcbiAgICAgICAgICBcInNpemVcIjogMC40NCxcbiAgICAgICAgICBcImZpbGxcIjogXCIjRTNBODFDXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwid2FsbFwiOiB7XG4gICAgICAgIFwibWVzaGVzXCI6IFtcbiAgICAgICAgICBcImJ1aWxkaW5nLXNoZWxsXCIsXG4gICAgICAgICAgXCJwYXJhcGV0XCIsXG4gICAgICAgICAgXCJ0aW50LWZlYXR1cmVcIlxuICAgICAgICBdLFxuICAgICAgICBcInRpbGVcIjogMy4yLFxuICAgICAgICBcInNpemVcIjogNTEyLFxuICAgICAgICBcInNlZWRcIjogMjAyNjA4MjgsXG4gICAgICAgIFwiYmFzZVwiOiAyNTIsXG4gICAgICAgIFwicGF0Y2hlc1wiOiA0MCxcbiAgICAgICAgXCJwYXRjaEFtcFwiOiAxMCxcbiAgICAgICAgXCJzdHJlYWtzXCI6IDcwLFxuICAgICAgICBcInN0cmVha0FtcFwiOiAxMixcbiAgICAgICAgXCJzcGVja3NcIjogMjAwMCxcbiAgICAgICAgXCJzcGVja0FtcFwiOiAxNFxuICAgICAgfVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHI6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkociwgciwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuLyoqIEEgYm94IGxpc3QgaXMgdGhlIG1lcmdlIGxldmVyIGZvciBldmVyeXRoaW5nIGluIG9uZSBtYXRlcmlhbC4gQW4gZW50cnkgaXNcbiAqICBbY3gsIGN5LCBjeiwgdywgaCwgZF0gd2l0aCBhbiBvcHRpb25hbCBzZXZlbnRoIG51bWJlciwgYSByb3RhdGlvbiBhYm91dCBYIGluIHJhZGlhbnMgYXBwbGllZFxuICogIGJlZm9yZSB0aGUgdHJhbnNsYXRlIChhIHNsb3BlZCBrZXlwYWQgc2hlbGYpLCBvciBgeyBjeWw6IFtjeCwgY3ksIGN6LCByLCBoLCBzZWc/LCByb3RYPywgcm90Wj9dIH1gXG4gKiAgZm9yIGEgcm91bmQgcGFydCBpbiB0aGUgc2FtZSBzdWJtaXNzaW9uIChhIGRvb3IgcHVsbCBiYXIpLiAqL1xuZnVuY3Rpb24gYm94ZXMobGlzdDogKG51bWJlcltdIHwgeyBjeWw6IG51bWJlcltdIH0pW10pIHtcbiAgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShiKSkge1xuICAgICAgY29uc3QgYyA9IGIuY3lsO1xuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGNbM10sIGNbM10sIGNbNF0sIGNbNV0gPz8gMTIpO1xuICAgICAgaWYgKGNbNl0pIGcucm90YXRlWChjWzZdKTtcbiAgICAgIGlmIChjWzddKSBnLnJvdGF0ZVooY1s3XSk7XG4gICAgICBnLnRyYW5zbGF0ZShjWzBdLCBjWzFdLCBjWzJdKTtcbiAgICAgIHJldHVybiBnO1xuICAgIH1cbiAgICBpZiAoYls2XSkgeyBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJbM10sIGJbNF0sIGJbNV0pOyBnLnJvdGF0ZVgoYls2XSk7IGcudHJhbnNsYXRlKGJbMF0sIGJbMV0sIGJbMl0pOyByZXR1cm4gZzsgfVxuICAgIHJldHVybiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKTtcbiAgfSkpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvIC0tIHdoaWNoIGlzXG4gKiB3aGF0IHJlbmRlcnMgYSBidWlsZGluZyBtaWQtZ3JleS5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIG1ldGFscy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhIGhlbWlzcGhlcmVcbiAqIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvIHJlZmxlY3RcbiAqIHJlbmRlcnMgYmxhY2suIFRoZSBhbGJlZG8gc3RheXMgbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKlxuICogVGhlIG9uZSBwcmludGVkIGdyYXBoaWMsIHRoZSBicmFuZCBmYXNjaWEsIGlzIGEgY2FudmFzIGFzc2lnbmVkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbi5cbiAqIFRoZSB0ZXh0dXJlbGVzcyBkZWNsYXJhdGlvbiBkb2VzIG5vdCBhZmZlY3QgdGhhdCwgYW5kIGl0IGlzIHRoZSBkb2N1bWVudGVkIHJvdXRlLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG90dXNzU3RvcmVCdWlsZGluZ01vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnTG90dXNcXCdzIFN0b3JlIEJ1aWxkaW5nJztcblxuICBjb25zdCBtYXRlcmlhbHMgPSBidWlsZE1hdGVyaWFscyhvcHRpb25zKTtcbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0ge307XG4gIGNvbnN0IHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIGNvbnN0IGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPiA9IHt9O1xuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICBmdW5jdGlvbiBhZGQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuICAvKiBTaGVsbDogU09MSUQgYm94LCBub3QgYSByaW5nLiBUaGUgcHJvcCBpcyBhbiBleHRlcmlvciBzaGVsbCBvbmx5IGV2ZXIgc2VlbiBmcm9tIG91dHNpZGUsIHNvXG4gICAqIGFuIGludGVyaW9yIGNvc3RzIGRyYXcgY2FsbHMsIGdlb21ldHJpZXMgYW5kIFZSQU0gZm9yIHNvbWV0aGluZyBub2JvZHkgc2VlcyAtLSBhbmQgc29saWRcbiAgICogbWVhbnMgdGhlIHNob3Bmcm9udCBuZWVkcyBubyBvcGVuaW5nIGN1dCBpbiBpdCwgd2hpY2ggcmVtb3ZlcyBhbGwgZm91ciByZXZlYWwgZmFjZXMgYW5kIHRoZVxuICAgKiB6LWZpZ2h0aW5nIHRoZXkgY2F1c2UuIFNldCAwLjA2IG0gSU5TSURFIHRoZSBwYXJhcGV0IHJpbmcgb24gZXZlcnkgZWxldmF0aW9uIHNvIG5vIHdhbGwgZmFjZVxuICAgKiBpcyBldmVyIGNvcGxhbmFyIGFuZCBjby1mYWNpbmcgd2l0aCBhIHBhcmFwZXQgZmFjZS4gKi9cbiAgLy8gSG93IGZhciBmb3J3YXJkIHRoZSBzaGVsbCBmYWNlIHNpdHMuIFRoZSBERUZBVUxUIDIuNTAgbGVhdmVzIDEuMDAgbSBmb3IgYW4gZW50cmFuY2UgY2Fub3B5IHRvXG4gIC8vIGNhbnRpbGV2ZXIgaW50bywgc28gdGhlIGNhbm9weSBub3NlIGxhbmRzIGV4YWN0bHkgb24gdGhlIGRlY2xhcmVkIDcuMCBtIGRlcHRoLiBBIGJ1aWxkaW5nIHdpdGhcbiAgLy8gTk8gZm9yd2FyZCBjYW50aWxldmVyIG11c3QgcHVzaCB0aGlzIG91dCBpbnN0ZWFkLCBvciB0aGUgcHJvcCBpcyBidWlsdCBzaG9ydCBvZiBpdHMgZGVjbGFyZWRcbiAgLy8gZW52ZWxvcGUgLS0gTUsgZmlyc3QgY2FtZSBvdXQgNi4zIG0gZGVlcCBhZ2FpbnN0IGEgZGVjbGFyZWQgNy4wIGZvciBleGFjdGx5IHRoYXQgcmVhc29uLlxuICBjb25zdCBTRiA9IChHLnNoZWxsRnJvbnQgPz8gMi41MCkgYXMgbnVtYmVyO1xuICBhZGQoJ2J1aWxkaW5nLXNoZWxsJywgJ0J1aWxkaW5nIHNoZWxsJywgYm94QXQoMCwgMS43NzUsIChTRiAtIDMuNDQpIC8gMiwgNy44OCwgMy41NSwgU0YgKyAzLjQ0KSwgJ3dhbGwnKTtcbiAgY29sbGlkZXJzWydidWlsZGluZy1zaGVsbCddID0ge1xuICAgIHNoYXBlOiAnYm94JywgbG9jYWxDZW50ZXI6IFswLCAyLjMsIDBdLCBoYWxmRXh0ZW50czogWzQuMCwgMi4zLCAzLjVdLFxuICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZS4nLFxuICB9O1xuXG4gIC8qIFJvb2YgZGVjayBzcGFucyB5IDMuNTAuLjMuNjIgc28gaXRzIHVuZGVyc2lkZSBpcyBzdW5rIElOVE8gdGhlIHNoZWxsIHJhdGhlciB0aGFuIHJlc3Rpbmcgb25cbiAgICogaXQuIEF1dGhvcmVkIGZsdXNoLCB0aGUgZGVjaydzIGJvdHRvbSBmYWNlIGFuZCB0aGUgcGFyYXBldCByaW5nJ3MgYm90dG9tIGZhY2Ugd2VyZSBib3RoIGF0XG4gICAqIHk9My41NTAgYW5kIGJvdGggZmFjaW5nIGRvd24gLS0gNDYgbTIgb2YgY29wbGFuYXIgY28tZmFjaW5nIHN1cmZhY2UuICovXG4gIGFkZCgncm9vZi1kZWNrJywgJ1Jvb2YgZGVjaycsIGJveEF0KDAsIDMuNTYsIChTRiAtIDAuMDIgLSAzLjQyKSAvIDIsIDcuOCwgMC4xMiwgU0YgKyAzLjQwKSwgJ2RlY2snKTtcblxuICAvKiBQYXJhcGV0OiBmcm9udCBmYXNjaWEgd2FsbCBwbHVzIHRocmVlIHVwc3RhbmRzLCBNRVJHRUQgaW50byBvbmUgY29tcG9uZW50IGFuZCBvbmUgZHJhdyBjYWxsLlxuICAgKiBUaGUgZnJvbnQgaXMgdGFsbGVyIHRoYW4gdGhlIHNpZGVzLCB3aGljaCBhIHBsYW4gZXh0cnVzaW9uIGNhbm5vdCBleHByZXNzLiBPdXRlciBmYWNlcyBzdGFuZFxuICAgKiAwLjA2IG0gcHJvdWQgb2YgdGhlIHdhbGxzIC0tIGEgY29waW5nIGRyaXAgZWRnZSwgYW5kIHdoYXQga2VlcHMgdGhlbSBvZmYgdGhlIHdhbGwgcGxhbmVzLiAqL1xuICBjb25zdCBQUyA9IChHLnBhcmFwZXRTaWRlcyA/PyB7IGN5OiAzLjc1LCBoOiAwLjQsIHRoaWNrOiAwLjI0IH0pIGFzIGFueTtcbiAgLy8gUGFyYXBldCBwbGFuIHNpemUuIEl0IGRlZmF1bHRzIHRvIHRoZSBmdWxsIDguMDAgbSBlbnZlbG9wZSB3aWR0aCwgYnV0IGEgYnVpbGRpbmcgd2hvc2UgRkFTQ0lBXG4gIC8vIHR1cm5zIHRoZSBjb3JuZXIgaGFzIHRvIHB1bGwgdGhlIHJpbmcgaW46IHRoZSByZXR1cm4gYm9hcmQgaXMgdGhlIG91dGVybW9zdCB0aGluZyBvbiB0aGF0XG4gIC8vIGVsZXZhdGlvbiwgYW5kIGEgcGFyYXBldCBhdCB0aGUgc2FtZSArLTQuMDAgYm90aCBoaWRlcyBpdCBhbmQgcHV0cyB0d28gY28tZmFjaW5nIHBsYW5lcyBhdCB0aGVcbiAgLy8gc2FtZSB4LiBgcGFyYXBldFdgIGFuZCBgUFMuY3hgIGFyZSBob3cgYSBjb25maWcgYnV5cyB0aGF0IGNsZWFyYW5jZSB3aXRob3V0IGV2ZXJ5IHNpYmxpbmdcbiAgLy8gbW92aW5nLlxuICBjb25zdCBQVyA9IChHLnBhcmFwZXRXID8/IDguMCkgYXMgbnVtYmVyO1xuICBjb25zdCBQQ1ggPSAoUFMuY3ggPz8gMy44OCkgYXMgbnVtYmVyO1xuICBhZGQoJ3BhcmFwZXQnLCAnUGFyYXBldCByaW5nIGFuZCBmYXNjaWEgd2FsbCcsIGJveGVzKFtcbiAgICBbMCwgRy5mYXNjaWFXYWxsLmN5LCBHLmZhc2NpYVdhbGwuY3osIFBXLCBHLmZhc2NpYVdhbGwuaCwgRy5mYXNjaWFXYWxsLmRdLFxuICAgIC8vIFNpZGUgYW5kIHJlYXIgdXBzdGFuZHMuIGBwYXJhcGV0U2lkZXNgIG92ZXJyaWRlcyB0aGUgZGVmYXVsdCAwLjQwIG0gdXBzdGFuZCBmb3IgYSBwbGF0ZSB3aG9zZVxuICAgIC8vIHBhcmFwZXQgaXMgYSBmdWxsLWhlaWdodCByaW5nIHJhdGhlciB0aGFuIGEgbG93IGtlcmI7IHRoZSBmcm9udCBpcyBhbHdheXMgdGhlIHRhbGxlciBmYWNlIGFuZFxuICAgIC8vIGNvbWVzIGluIHRocm91Z2ggYGZhc2NpYVdhbGxgLCB3aGljaCBhIHBsYW4gZXh0cnVzaW9uIGNvdWxkIG5vdCBleHByZXNzLlxuICAgIFstUENYLCBQUy5jeSwgKFNGIC0gMC4zMCAtIDMuNSkgLyAyLCBQUy50aGljaywgUFMuaCwgU0YgKyAzLjIwXSxcbiAgICBbUENYLCBQUy5jeSwgKFNGIC0gMC4zMCAtIDMuNSkgLyAyLCBQUy50aGljaywgUFMuaCwgU0YgKyAzLjIwXSxcbiAgICBbMCwgUFMuY3ksIC0zLjM4LCBQVywgUFMuaCwgMC4yNF0sXG4gICAgLy8gQW55dGhpbmcgZWxzZSBpbiB0aGUgU0FNRSBtYXRlcmlhbCBmb2xkcyBpbiBoZXJlIHJhdGhlciB0aGFuIGNvc3RpbmcgaXRzIG93biBkcmF3IGNhbGwgLS1cbiAgICAvLyBmdWxsLWhlaWdodCBmYWNhZGUgY2xhZGRpbmcsIGNvcm5lciBwaWxhc3RlcnMsIGEgcGxpbnRoLiBUaGlzIGlzIHRoZSBtZXJnZSBsZXZlcjogdHdvXG4gICAgLy8gcGFydHMgdGhhdCBzaGFyZSBhIG1hdGVyaWFsIHNob3VsZCBuZXZlciBiZSB0d28gc3VibWlzc2lvbnMuXG4gICAgLi4uKChHLnBhcmFwZXRFeHRyYSA/PyBbXSkgYXMgbnVtYmVyW11bXSksXG4gIF0pLCBHLmZhc2NpYVdhbGxNYXRlcmlhbCk7XG5cbiAgLyogQnJhbmQgZmFzY2lhIHBhbmVsLiBTdW5rIElOVE8gdGhlIGZhc2NpYSB3YWxsIGF0IHRoZSBiYWNrIGFuZCBzdGFuZGluZyBwcm91ZCBhdCB0aGUgZnJvbnQsIHNvXG4gICAqIGl0IG92ZXJsYXBzIGl0cyBzdXJyb3VuZCBpbnN0ZWFkIG9mIG1lZXRpbmcgaXQuIFVWcyBhcmUgQVVUSE9SRUQ6IHRoZSArWiBmYWNlIHNhbXBsZXMgdGhlXG4gICAqIHdvcmRtYXJrIGJhbmQgb2YgdGhlIGNhbnZhcyBhbmQgdGhlIG90aGVyIGZpdmUgZmFjZXMgc2FtcGxlIGEgcGxhaW4gY29ybmVyIG9mIHRoZSBzYW1lXG4gICAqIGNhbnZhcywgd2hpY2gga2VlcHMgdGhlIGJyYW5kIGdyYXBoaWMgYXQgT05FIG1hdGVyaWFsIGFuZCBPTkUgZHJhdyBjYWxsLiAqL1xuICB7XG4gICAgY29uc3QgZiA9IEcuZmFzY2lhO1xuICAgIGxldCBnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBpZiAoZi5zaGFwZSA9PT0gJ2Rpc2MnKSB7XG4gICAgICAvLyBBIHJvdW5kIHNpZ24gZGlzYywgYnVpbHQgYXMgYSBDaXJjbGVHZW9tZXRyeSBmYWNlIHBsdXMgYSBzaGFsbG93IGN5bGluZGVyIGJvZHkuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIG9idmlvdXMgY29uc3RydWN0aW9uIC0tIG9uZSBjeWxpbmRlciByb3RhdGVkIHRvIGZhY2UgK1ogLS0gcHV0cyB0aGUgd29yZG1hcmsgb24gaXRzXG4gICAgICAvLyBzaWRlLCBiZWNhdXNlIEN5bGluZGVyR2VvbWV0cnkgbGF5cyBpdHMgY2FwIFVWcyBvdXQgaW4gdGhlIGN5bGluZGVyJ3Mgb3duIFhaIHBsYW5lIGFuZFxuICAgICAgLy8gcm90YXRpbmcgdGhlIGdlb21ldHJ5IGRvZXMgbm90IHJvdGF0ZSB0aGVtIHdpdGggaXQuIENpcmNsZUdlb21ldHJ5J3MgVVZzIGFyZSBhbHJlYWR5XG4gICAgICAvLyAoeCwgeSkgaW4gdGhlIHBsYW5lIGl0IGZhY2VzLCBzbyB0aGUgc3F1YXJlIGNhbnZhcyBsYW5kcyB0aGUgcmlnaHQgd2F5IHVwIHdpdGggbm9cbiAgICAgIC8vIGNvcnJlY3Rpb24uIFRoZSBib2R5J3MgVVZzIGFyZSBjb2xsYXBzZWQgb250byBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZSBjYW52YXMgc28gdGhlXG4gICAgICAvLyBkaXNjJ3MgZWRnZSBkb2VzIG5vdCBzbWVhciB0aGUgd29yZG1hcmsgYXJvdW5kIGl0cyByaW0uXG4gICAgICBjb25zdCByID0gZi53IC8gMjtcbiAgICAgIGNvbnN0IGZhY2UgPSBuZXcgVEhSRUUuQ2lyY2xlR2VvbWV0cnkociwgMzIpO1xuICAgICAgZmFjZS50cmFuc2xhdGUoMCwgMCwgMC4wNjEpO1xuICAgICAgY29uc3QgYm9keSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIDAuMTIsIDMyKTtcbiAgICAgIGJvZHkucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICAgICAgY29uc3QgYnV2ID0gYm9keS5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXYuY291bnQ7IGkrKykgYnV2LnNldFhZKGksIDAuMDIsIDAuMDIpO1xuICAgICAgYnV2Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGcgPSBtZXJnZUdlb3MoW2ZhY2UsIGJvZHldKTtcbiAgICAgIGcudHJhbnNsYXRlKDAsIGYuY3ksIGYuY3opO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCb3hHZW9tZXRyeSB2ZXJ0ZXggb3JkZXIgaXMgcHgsIG54LCBweSwgbnksIHB6LCBueiAtLSBmb3VyIHZlcnRpY2VzIHBlciBmYWNlIC0tIHNvIHRoZVxuICAgICAgLy8gb3V0d2FyZCBmYWNlIG9mIGEgYm9hcmQgaXMgYSBrbm93biBzbGljZSBvZiB0aGUgdXYgYXR0cmlidXRlLiBBIGJ1aWxkaW5nIGNhbiBjYXJyeSB0aGVcbiAgICAgIC8vIHNhbWUgbWFyayBvbiBtb3JlIHRoYW4gb25lIGVsZXZhdGlvbiAodGhpcyBraXQncyBob3NwaXRhbCBzaWducyBpdHMgZnJvbnQgQU5EIGl0cyBzaWRlKSxcbiAgICAgIC8vIHNvIGBib2FyZHNgIGxldHMgZWFjaCBib2FyZCBuYW1lIHRoZSBmYWNlIHRoYXQgc2FtcGxlcyB0aGUgZ3JhcGhpYyB3aGlsZSBldmVyeSBvdGhlciBmYWNlXG4gICAgICAvLyBzYW1wbGVzIGEgcGxhaW4gY29ybmVyIG9mIHRoZSBzYW1lIGNhbnZhcy4gT25lIG1hdGVyaWFsLCBvbmUgZHJhdyBjYWxsLCBhbnkgbnVtYmVyIG9mXG4gICAgICAvLyBib2FyZHMgZmFjaW5nIGFueSB3YXkuXG4gICAgICBjb25zdCBGQUNFX1NMSUNFOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0geyAnK1gnOiAwLCAnLVgnOiA0LCAnK1knOiA4LCAnLVknOiAxMiwgJytaJzogMTYsICctWic6IDIwIH07XG4gICAgICBjb25zdCBib2FyZHMgPSAoZi5ib2FyZHMgYXMgYW55W10pID8/IFt7IHc6IGYudywgaDogZi5oLCBkOiAwLjEyLCBhdDogWzAsIGYuY3ksIGYuY3pdLCBmYWNlOiAnK1onIH1dO1xuICAgICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgYmQgb2YgYm9hcmRzKSB7XG4gICAgICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYmQudywgYmQuaCwgYmQuZCA/PyAwLjEyKTtcbiAgICAgICAgY29uc3QgdXYgPSBiLmdldEF0dHJpYnV0ZSgndXYnKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgICAgIC8vIGBwbGFpbmAgYm9hcmRzIGNhcnJ5IG5vIGdyYXBoaWMgYXQgYWxsOiBhIGJhbmQgdGhhdCB3cmFwcyB0aHJlZSBzaWRlcyBvZiBhIGNhbm9weSBzaG91bGRcbiAgICAgICAgLy8gcmVwZWF0IGl0cyBtYXJrIG9uIG5vbmUgb2YgdGhlIHJldHVybnMsIG9ubHkgb24gdGhlIGZhY2UgdGhhdCBmcm9udHMgdGhlIHN0cmVldC5cbiAgICAgICAgLy8gVGhlIHRlc3QgaXMgYW4gZXhwbGljaXQgYm9vbGVhbiwgTk9UIGEgc2VudGluZWwgaW5kZXggLS0gc2V0dGluZyB0aGUgc2xpY2Ugc3RhcnQgdG8gLTFcbiAgICAgICAgLy8gc3RpbGwgc2F0aXNmaWVkIGBpID49IHN0YXJ0ICYmIGkgPCBzdGFydCArIDRgIGZvciB2ZXJ0aWNlcyAwLCAxIGFuZCAyLCBzbyB0aHJlZSBjb3JuZXJzXG4gICAgICAgIC8vIG9mIHRoZSArWCBmYWNlIGtlcHQgc2FtcGxpbmcgdGhlIHdvcmRtYXJrIGJhbmQgYW5kIHNtZWFyZWQgYSBzdHJldGNoZWQgZ2hvc3Qgb2YgdGhlIG1hcmtcbiAgICAgICAgLy8gYWxvbmcgZXZlcnkgcmV0dXJuLlxuICAgICAgICBjb25zdCBwbGFpbiA9IGJkLnBsYWluID09PSB0cnVlO1xuICAgICAgICBjb25zdCBzdGFydEF0ID0gRkFDRV9TTElDRVtiZC5mYWNlID8/ICcrWiddO1xuICAgICAgICAvLyBgdTogW3UwLCB1MV1gIGxldHMgYSBib2FyZCBzYW1wbGUgYSBob3Jpem9udGFsIFNMSUNFIG9mIHRoZSBjYW52YXMgYmFuZCBpbnN0ZWFkIG9mIGFsbCBvZlxuICAgICAgICAvLyBpdCwgc28gdHdvIGJvYXJkcyB3aXRoIHR3byBkaWZmZXJlbnQgZ3JhcGhpY3MgKGEgYmx1ZSBib2FyZCB3aXRoIHdoaXRlIHRleHQsIGEgd2hpdGUgYm9hcmRcbiAgICAgICAgLy8gd2l0aCBibHVlIHRleHQpIHN0aWxsIHNoYXJlIG9uZSBjYW52YXMsIG9uZSBtYXRlcmlhbCBhbmQgb25lIGRyYXcgY2FsbC4gYHBsYWluVVZgIGlzIHRoZVxuICAgICAgICAvLyBjYW52YXMgcG9pbnQgdGhlIGJvYXJkJ3Mgb3RoZXIgZml2ZSBmYWNlcyBzYW1wbGU7IGl0IGRlZmF1bHRzIHRvIHRoZSBib3R0b20tbGVmdCBjb3JuZXJcbiAgICAgICAgLy8gYW5kIGEgYm9hcmQgd2hvc2UgZ3JvdW5kIGlzIG5vdCB0aGUgY2FudmFzIGJhY2tncm91bmQgbmFtZXMgaXRzIG93bi5cbiAgICAgICAgY29uc3QgdTAgPSBiZC51ID8gYmQudVswXSA6IDAsIHUxID0gYmQudSA/IGJkLnVbMV0gOiAxO1xuICAgICAgICBjb25zdCBwdSA9IGJkLnBsYWluVVYgPyBiZC5wbGFpblVWWzBdIDogMC4wMTUsIHB2ID0gYmQucGxhaW5VViA/IGJkLnBsYWluVVZbMV0gOiAwLjAxNTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB7XG4gICAgICAgICAgLy8gYGYudXZSZWN0YCBbdTAsIHYwLCB1MSwgdjFdIG5hbWVzIHRoZSBBVExBUyByZWdpb24gdGhlIGJhbmQgb2NjdXBpZXMgd2hlbiB0aGUgc2lnblxuICAgICAgICAgIC8vIHNoYXJlcyBpdHMgaW1hZ2Ugd2l0aCBvdGhlciB0ZXh0dXJlZCBwYXJ0czsgZGVmYXVsdCBpcyB0aGUgY2FudmFzIGNvbnRyYWN0ICh0b3AgODcuNSAlKS5cbiAgICAgICAgICBjb25zdCBSID0gKGYudXZSZWN0IGFzIG51bWJlcltdKSA/PyBbMCwgMC4xMjUsIDEsIDFdO1xuICAgICAgICAgIGlmICghcGxhaW4gJiYgaSA+PSBzdGFydEF0ICYmIGkgPCBzdGFydEF0ICsgNCkgdXYuc2V0WFkoaSwgUlswXSArICh1MCArIHV2LmdldFgoaSkgKiAodTEgLSB1MCkpICogKFJbMl0gLSBSWzBdKSwgUlsxXSArIHV2LmdldFkoaSkgKiAoUlszXSAtIFJbMV0pKTtcbiAgICAgICAgICBlbHNlIHV2LnNldFhZKGksIHB1LCBwdik7XG4gICAgICAgIH1cbiAgICAgICAgdXYubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgICBiLnRyYW5zbGF0ZShiZC5hdFswXSwgYmQuYXRbMV0sIGJkLmF0WzJdKTtcbiAgICAgICAgcGFydHMucHVzaChiKTtcbiAgICAgIH1cbiAgICAgIGcgPSBwYXJ0cy5sZW5ndGggPT09IDEgPyBwYXJ0c1swXSA6IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgfVxuICAgIC8vIGBjdXJ2ZWRgOiB0ZXh0dXJlZCBidWxnZWQgZnJvbnRzIChhbiBBVE0ga2lvc2sgZmFjZSkgdGhhdCByaWRlIHRoZSBTQU1FIG1hdGVyaWFsIGFuZFxuICAgIC8vIHN1Ym1pc3Npb24gYXMgdGhlIHNpZ24sIHNhbXBsaW5nIHRoZWlyIG93biByZWdpb24gb2YgdGhlIGJha2VkIGF0bGFzLiBFYWNoIGlzIGEgcGFydGlhbFxuICAgIC8vIGN5bGluZGVyIGFib3V0IFksIGFwZXggYXQgeiwgZWRnZXMgYXQgeiAtIGJ1bGdlLCBzcGFubmluZyB3IGJ5IGgsIFVWcyByZW1hcHBlZCB0byB1dlJlY3QuXG4gICAgaWYgKGYuY3VydmVkKSB7XG4gICAgICBjb25zdCBjcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbZ107XG4gICAgICBmb3IgKGNvbnN0IGMgb2YgZi5jdXJ2ZWQgYXMgYW55W10pIHtcbiAgICAgICAgY29uc3QgUiA9IChjLncgKiBjLncgLyA0ICsgYy5idWxnZSAqIGMuYnVsZ2UpIC8gKDIgKiBjLmJ1bGdlKTtcbiAgICAgICAgY29uc3QgaGFsZiA9IE1hdGguYXNpbihjLncgLyAyIC8gUik7XG4gICAgICAgIGNvbnN0IGN5bCA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KFIsIFIsIGMuaCwgYy5zZWcgPz8gMTIsIDEsIHRydWUsIC1oYWxmLCAyICogaGFsZik7XG4gICAgICAgIGNvbnN0IGN1diA9IGN5bC5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgICBjb25zdCByID0gYy51dlJlY3QgYXMgbnVtYmVyW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3V2LmNvdW50OyBpKyspIGN1di5zZXRYWShpLCByWzBdICsgY3V2LmdldFgoaSkgKiAoclsyXSAtIHJbMF0pLCByWzFdICsgY3V2LmdldFkoaSkgKiAoclszXSAtIHJbMV0pKTtcbiAgICAgICAgY3lsLnRyYW5zbGF0ZShjLngsIGMueSwgYy56IC0gUik7XG4gICAgICAgIGNwYXJ0cy5wdXNoKGN5bCk7XG4gICAgICB9XG4gICAgICBnID0gbWVyZ2VHZW9zKGNwYXJ0cyk7XG4gICAgfVxuICAgIGFkZCgnZmFzY2lhLXBhbmVsJywgJ0JyYW5kIGZhc2NpYSBwYW5lbCcsIGcsICdmYXNjaWEnKTtcbiAgfVxuXG4gIC8qIE9uZSBnbGF6aW5nIHBhbmUsIG5vdCBvbmUgcGVyIGJheTogdGhlIG11bGxpb24gZ3JpZCBpbiBmcm9udCBkb2VzIHRoZSBkaXZpZGluZy4gT3ZlcmxhcHMgSU5UT1xuICAgKiB0aGUgZmFjYWRlIGF0IHRoZSBiYWNrIGFuZCBzaXRzIFJFQ0VTU0VEIGJlaGluZCB0aGUgZnJhbWluZyBhdCB0aGUgZnJvbnQuIE1vc3RseSBvcGFxdWUgYnlcbiAgICogZGVzaWduIC0tIHRoZXJlIGlzIG5vIGludGVyaW9yIGJlaGluZCBpdCwgc28gYSB0cmFuc3BhcmVudCBwYW5lIHdvdWxkIHJlYWQgYXMgYSBob2xlLiAqL1xuICAvLyBUaGUgcGFuZSBpcyBub3QgYWx3YXlzIGNlbnRyZWQ6IGEgYnJhbmNoIHBsYW4gY2FuIHB1dCBpdHMgZ2xhemluZyB0byBvbmUgc2lkZSBvZiB0aGUgZW50cmFuY2UuXG4gIC8vIEF1dGhvcmVkIGNlbnRyZWQgd2hpbGUgaXRzIGZyYW1pbmcgc2F0IG9mZiB0byB0aGUgbGVmdCwgdGhlIHR3byByZWFkIGFzIHVucmVsYXRlZCBwYXJ0cy5cbiAgLy8gYGdsYXppbmdFeHRyYWAgZm9sZHMgZnVydGhlciBwYW5lcyAtLSBhIHNpZGUgd2luZG93LCBhIGNsZXJlc3RvcnkgLS0gaW50byB0aGUgU0FNRSBjb21wb25lbnQ6XG4gIC8vIG9uZSBtYXRlcmlhbCwgb25lIGRyYXcgY2FsbCwgaG93ZXZlciBtYW55IG9wZW5pbmdzIHRoZSBwbGF0ZSBzaG93cy5cbiAge1xuICAgIGNvbnN0IHBhbmUgPSBib3hBdChHLmdsYXppbmcuY3ggPz8gMCwgRy5nbGF6aW5nLmN5LCBHLmdsYXppbmcuY3ogPz8gMi41MSwgRy5nbGF6aW5nLncsIEcuZ2xhemluZy5oLCBHLmdsYXppbmcuZCA/PyAwLjEwKTtcbiAgICBjb25zdCBleHRyYSA9IChHLmdsYXppbmdFeHRyYSA/PyBbXSkgYXMgbnVtYmVyW11bXTtcbiAgICBhZGQoJ3Nob3Bmcm9udC1nbGF6aW5nJywgJ1Nob3Bmcm9udCBnbGF6aW5nJyxcbiAgICAgICAgZXh0cmEubGVuZ3RoID8gbWVyZ2VHZW9zKFtwYW5lLCAuLi5leHRyYS5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKV0pIDogcGFuZSwgJ2dsYXNzJyk7XG4gIH1cblxuICAvKiBGcmFtaW5nLCB0cmFuc29tLCBraWNrIHJhaWwsIGRvb3IgamFtYnMgYW5kIGhlYWRlciBNRVJHRUQgaW50byBvbmUgY29tcG9uZW50LiBFdmVyeSBwYXJ0IGlzXG4gICAqIHRoZSBzYW1lIG1ldGFsOyBmb2xkaW5nIHRoZW0gdG9nZXRoZXIgaXMgdGhlIGRyYXctY2FsbCBsZXZlciBjaG9zZW4gaW4gdGhlIGJsb2Nrb3V0LCBub3QgYW5cbiAgICogb3B0aW1pc2F0aW9uIGRlZmVycmVkIHRvIHRoZSBlbmQgLS0gYSBwYXJ0IHNwbGl0IGZvciBhdXRob3JpbmcgY29udmVuaWVuY2UgY2Fubm90IGJlIG1lcmdlZFxuICAgKiBhZnRlcndhcmRzIG9uY2UgYSBwaXZvdCBoYW5ncyBvZmYgaXQuIEZyb250IGZhY2Ugc3RhbmRzIHByb3VkIG9mIGdsYXppbmcgYW5kIG11bGxpb25zLiAqL1xuICBhZGQoJ3Nob3Bmcm9udC1mcmFtZScsICdTaG9wZnJvbnQgZnJhbWluZyBhbmQgZG9vciBiYXknLCBib3hlcyhHLmZyYW1lKSwgRy5mcmFtZU1hdGVyaWFsKTtcblxuICAvKiBTaWRlIGZlYXR1cmU6IHNodXR0ZXIsIHNlcnZpY2UgZG9vciBvciBsb3V2cmUsIHBlciBwbGF0ZS4gU3RhbmRzIHByb3VkIG9mIHRoZSB3YWxsIGZhY2UgYnV0XG4gICAqIGRlbGliZXJhdGVseSBOT1Qgb3V0IHRvIHRoZSBwYXJhcGV0IHBsYW5lIGF0ICstNC4wMCAtLSBhIGZhY2UgYXQgZXhhY3RseSArLTQuMDAgd291bGQgYmVcbiAgICogY29wbGFuYXIgYW5kIGNvLWZhY2luZyB3aXRoIHRoZSBwYXJhcGV0IG91dGVyIGZhY2UsIHdoaWNoIHRoZSBib3VuZGluZy1ib3ggY29wbGFuYXJpdHkgY2hlY2tcbiAgICogZmxhZ3MgZXZlbiB0aG91Z2ggdGhlIHR3byBuZXZlciBvdmVybGFwIGluIFkuICovXG4gIGlmIChHLnNpZGVGZWF0dXJlKSBhZGQoJ3NpZGUtZmVhdHVyZScsIEcuc2lkZUZlYXR1cmUubmFtZSwgYm94ZXMoRy5zaWRlRmVhdHVyZS5ib3hlcyksIEcuc2lkZUZlYXR1cmUubWF0ZXJpYWwpO1xuXG4gIC8qIEZyb250IGZlYXR1cmU6IGNsYWRkaW5nIGJhbmQsIEFUTSBiYW5rLCB1cHBlci1zdG9yZXkgYmFuZCBvciBmb3JlY291cnQsIHBlciBwbGF0ZS4gKi9cbiAgaWYgKEcuZnJvbnRGZWF0dXJlKSBhZGQoJ2Zyb250LWZlYXR1cmUnLCBHLmZyb250RmVhdHVyZS5uYW1lLCBib3hlcyhHLmZyb250RmVhdHVyZS5ib3hlcyksIEcuZnJvbnRGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBBIHRoaXJkIG1lcmdlZCBzbG90LCBmb3Igd2hhdGV2ZXIgdGhlIHBsYXRlIGhhcyB0aGF0IHRoZSB0d28gYWJvdmUgZG8gbm90IGNvdmVyIC0tIGEgcGFyYXBldFxuICAgKiBjb3BpbmcsIGEga2VyYiwgYSBmb3JlY291cnQgY29sdW1uIGJhc2UuIFNhbWUgcnVsZSBhcyB0aGUgb3RoZXJzOiBldmVyeXRoaW5nIGluIGl0IHNoYXJlcyBvbmVcbiAgICogbWF0ZXJpYWwgYW5kIGlzIHN1Ym1pdHRlZCBvbmNlLiAqL1xuICBpZiAoRy5leHRyYUZlYXR1cmUpIGFkZCgnZXh0cmEtZmVhdHVyZScsIEcuZXh0cmFGZWF0dXJlLm5hbWUsIGJveGVzKEcuZXh0cmFGZWF0dXJlLmJveGVzKSwgRy5leHRyYUZlYXR1cmUubWF0ZXJpYWwpO1xuXG4gIC8qIEEgZm91cnRoIG1lcmdlZCBzbG90LiBUd28gZmVhdHVyZXMgaW4gRElGRkVSRU5UIG1hdGVyaWFscyBjYW5ub3Qgc2hhcmUgYSBjb21wb25lbnQsIGFuZCBhXG4gICAqIHBsYXRlIHRoYXQgc2hvd3MgYSBnYWx2YW5pc2VkIHBsYW50IGRlY2sgQU5EIGEgcGFpbnRlZCBzdGVlbCBzZXJ2aWNlIGRvb3IgbmVlZHMgYm90aC4gKi9cbiAgaWYgKEcuZXh0cmFGZWF0dXJlMikgYWRkKCdleHRyYS1mZWF0dXJlLTInLCBHLmV4dHJhRmVhdHVyZTIubmFtZSwgYm94ZXMoRy5leHRyYUZlYXR1cmUyLmJveGVzKSwgRy5leHRyYUZlYXR1cmUyLm1hdGVyaWFsKTtcblxuICAvKiBBIFRJTlRFRCBtZXJnZWQgc2xvdDogb25lIGNvbXBvbmVudCwgb25lIG1hdGVyaWFsLCBhbmQgYSBwZXItQk9YIGNvbG91ciB3cml0dGVuIGludG8gYSB2ZXJ0ZXhcbiAgICogY29sb3VyIGF0dHJpYnV0ZS4gVGhpcyBpcyBob3cgYSB0d28tY29sb3VyIGFwcGxpZWQgZ3JhcGhpYyAtLSBhIHZpbnlsIGRlY2FsIGJhbmQgb24gYSBzaG9wZnJvbnQsXG4gICAqIGEgcGFpbnRlZCBzdHJpcGUgb24gYSBrZXJiIC0tIHNoaXBzIHdpdGhvdXQgYSBtYXRlcmlhbCBwZXIgY29sb3VyLCBvbiBhIGtpdCB3aG9zZSBtYXRlcmlhbFxuICAgKiBjZWlsaW5nIGlzIHRoZSBheGlzIHRoZXNlIHByb3BzIGFyZSB0aWdodGVzdCBvbiBhZnRlciBkcmF3IGNhbGxzLlxuICAgKlxuICAgKiBUd28gcnVsZXMgbWFrZSBpdCBzYWZlLiBUaGUgbWF0ZXJpYWwgbXVzdCBiZSBXSElURSwgYmVjYXVzZSBhIHZlcnRleCBjb2xvdXIgTVVMVElQTElFUyB3aXRoXG4gICAqIG1hdGVyaWFsLmNvbG9yIGFuZCBhIHRpbnRlZCBiYXNlIHdvdWxkIGRhcmtlbiBldmVyeSB0b25lLiBBbmQgRVZFUlkgdmVydGV4IGhhcyB0byBiZSB3cml0dGVuLFxuICAgKiBiZWNhdXNlIHRoZSBzaGFkZXIgcmVhZHMgYSBtaXNzaW5nIGNvbG91ciBhdHRyaWJ1dGUgYXMgKDAsMCwwKSBhbmQgcmVuZGVycyB0aGUgbWVzaCBibGFjayAtLVxuICAgKiB0aGUgZmFpbHVyZSB0aGF0IHNoaXBwZWQgdGhlIHVib3NvdCdzIHdhbGxzIGFuZCBlaWdodCBib3VuZGFyeSBzdG9uZXMgYXMgc2lsaG91ZXR0ZXMuIEJvdGggYXJlXG4gICAqIHNhdGlzZmllZCBoZXJlIGJ5IGNvbnN0cnVjdGlvbjogdGhlIGF0dHJpYnV0ZSBpcyBmaWxsZWQgYm94IGJ5IGJveCBvdmVyIHRoZSB3aG9sZSBtZXJnZS4gVGhlXG4gICAqIHRvbmVzIGFyZSBMSU5FQVIsIG1hdGNoaW5nIGhvdyB0aHJlZS5qcyBtdWx0aXBsaWVzIHRoZW0uICovXG4gIGlmIChHLnRpbnRGZWF0dXJlKSB7XG4gICAgY29uc3QgdCA9IEcudGludEZlYXR1cmU7XG4gICAgY29uc3QgbGlzdCA9IHQuYm94ZXMgYXMgKG51bWJlcltdIHwgeyBjeWw6IG51bWJlcltdIH0pW107XG4gICAgY29uc3QgcGFydHMgPSBsaXN0Lm1hcCgoYikgPT4gYm94ZXMoW2JdKSk7XG4gICAgY29uc3QgZ2VvID0gbWVyZ2VHZW9zKHBhcnRzLm1hcCgoZykgPT4gZy5jbG9uZSgpKSk7XG4gICAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50ICogMyk7XG4gICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgIGxldCB2ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuID0gcGFydHNbaV0uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgICAgYy5zZXRIZXgodC50b25lc1tpICUgdC50b25lcy5sZW5ndGhdKTtcbiAgICAgIC8vIHNldEhleCBvbiBhIENvbG9yIGlzIHNSR0ItZGVjb2RlZCBieSB0aHJlZS5qcyB3aGVuIGNvbG9yTWFuYWdlbWVudCBpcyBvbiwgd2hpY2ggaXMgd2hhdCBhXG4gICAgICAvLyB2ZXJ0ZXggY29sb3VyIHdhbnRzOiB0aGUgbXVsdGlwbHkgaGFwcGVucyBpbiBsaW5lYXIgc3BhY2UuXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykgeyBjb2xbKHYgKyBrKSAqIDNdID0gYy5yOyBjb2xbKHYgKyBrKSAqIDMgKyAxXSA9IGMuZzsgY29sWyh2ICsgaykgKiAzICsgMl0gPSBjLmI7IH1cbiAgICAgIHYgKz0gbjtcbiAgICAgIHBhcnRzW2ldLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICAgIGNvbnN0IG1lc2ggPSBhZGQoJ3RpbnQtZmVhdHVyZScsIHQubmFtZSwgZ2VvLCB0Lm1hdGVyaWFsKTtcbiAgICAobWVzaC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkudmVydGV4Q29sb3JzID0gdHJ1ZTtcbiAgICAobWVzaC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgLyogTXVsbGlvbnM6IHRoZSBmaW5lIHZlcnRpY2FsIGdyaWQgaXMgdGhlIG1vc3QgcmVjb2duaXNhYmxlIHRoaW5nIGFib3V0IGEgc2hvcGZyb250LiBJbnN0YW5jZXNcbiAgICogb24gb25lIGdlb21ldHJ5IGNvc3Qgb25lIGRyYXcgY2FsbDsgYXMgY29tcG9uZW50cyB0aGV5IHdvdWxkIGhhdmUgY29zdCBvbmUgZWFjaCBhbmQgYmxvd24gdGhlXG4gICAqIGNlaWxpbmcgb24gdGhlaXIgb3duLiBUaGV5IHNpdCBJTlNJREUgdGhlIGZyYW1lIGRlcHRoIGJhbmQgYXQgYm90aCBlbmRzIHNvIHRoZXkgYXJlIG5vdFxuICAgKiBjb3BsYW5hciB3aXRoIGl0LCB3aGlsZSBzdGlsbCBzdGFuZGluZyBwcm91ZCBvZiB0aGUgZ2xhemluZyBzbyB0aGUgZ2xhc3MgcmVhZHMgYXMgcmVjZXNzZWQuICovXG4gIHtcbiAgICBjb25zdCBtID0gRy5tdWxsaW9ucztcbiAgICBjb25zdCBtYXRzID0gKG0ueCBhcyBudW1iZXJbXSkubWFwKCh4KSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIG0uY3ksIG0uY3ogPz8gMi41OCkpO1xuICAgIGFkZEluc3QoJ3Nob3Bmcm9udC1tdWxsaW9ucycsICdTaG9wZnJvbnQgbXVsbGlvbnMnLCBuZXcgVEhSRUUuQm94R2VvbWV0cnkobS53LCBtLmgsIDAuMDgpLCBHLmZyYW1lTWF0ZXJpYWwsIG1hdHMpO1xuICB9XG5cbiAgLyogUm9vZnRvcCBjb25kZW5zZXJzOiBjYXNpbmcsIGZhbiBjb3dsIGFuZCBmb3VyIGZlZXQgTUVSR0VEIGludG8gYSBzaW5nbGUgaW5zdGFuY2VkIGdlb21ldHJ5LlxuICAgKiBGZWV0IHN0YXJ0IGJlbG93IHRoZSBkZWNrIHRvcCBzbyB0aGUgdHdvIG92ZXJsYXAgcmF0aGVyIHRoYW4gc2hhcmluZyBhIHBsYW5lLlxuICAgKlxuICAgKiBBbiBFTVBUWSBsaXN0IGlzIGEgbGVnaXRpbWF0ZSBhbnN3ZXIsIG5vdCBhIG1pc3NpbmcgY29uZmlnLiBJbnN0YW5jaW5nIG9uZSBjYXNpbmcgaXMgdGhlIHJpZ2h0XG4gICAqIGxldmVyIHdoZW4gYSBwbGF0ZSBzaG93cyB0aGUgc2FtZSBib3ggdHdvIG9yIHRocmVlIHRpbWVzOyBpdCBpcyB0aGUgd3Jvbmcgb25lIHdoZW4gdGhlIHBsYXRlXG4gICAqIHNob3dzIGdlbnVpbmVseSBkaWZmZXJlbnQgdW5pdHMgLS0gYSBob29kZWQgZHVjdCBydW4sIGEgd2FsbC10eXBlIGNvbmRlbnNlciB3aXRoIGEgc3F1YXJlIGZhblxuICAgKiBndWFyZCwgYSB0YWxsIGxvdXZyZWQgdG93ZXIgLS0gYW5kIHJlcGVhdGluZyBvbmUgY2FzaW5nIHRocmVlIHRpbWVzIGlzIHRoZW4gYSBzaW1wbGlmaWNhdGlvblxuICAgKiB0aGF0IGNvc3RzIGZpZGVsaXR5IHRvIHNhdmUgbm90aGluZy4gU3VjaCBhIHBsYW50IGRlY2sgY29tZXMgaW4gdGhyb3VnaCBgZXh0cmFGZWF0dXJlYCBhc1xuICAgKiBtZXJnZWQgZ2VvbWV0cnk6IHN0aWxsIE9ORSBkcmF3IGNhbGwsIGFuZCBldmVyeSB1bml0IGl0cyBvd24gc2hhcGUuICovXG4gIGlmICgoRy5jb25kZW5zZXJzIGFzIG51bWJlcltdW10gPz8gW10pLmxlbmd0aCkge1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW1xuICAgICAgYm94QXQoMCwgMC40NiwgMCwgMC45NSwgMC43MiwgMC44NSksXG4gICAgICBjeWxBdCgwLCAwLjg3LCAwLCAwLjMwLCAwLjEwLCAxNiksXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IGZ4IG9mIFstMC40LCAwLjRdKSBmb3IgKGNvbnN0IGZ6IG9mIFstMC4zNSwgMC4zNV0pIHBhcnRzLnB1c2goYm94QXQoZngsIDAuMDUsIGZ6LCAwLjA4LCAwLjEwLCAwLjA4KSk7XG4gICAgY29uc3QgdW5pdCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgY29uc3QgbWF0cyA9IChHLmNvbmRlbnNlcnMgYXMgbnVtYmVyW11bXSkubWFwKChbeCwgeiwgeWF3XSkgPT5cbiAgICAgIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoeCwgMy42MCwgeiksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgeWF3KSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSksXG4gICAgICApKTtcbiAgICAvLyBUaGUgcGxhbnQgbWF0ZXJpYWwgaXMgQ09ORklHVVJBQkxFLCBub3QgaGFyZC1jb2RlZC4gUmVmZXJlbmNpbmcgYSAnZ2FsdicgaWQgdGhhdCBhIGNvbmZpZ1xuICAgIC8vIGRvZXMgbm90IGRlZmluZSBzaWxlbnRseSBoYW5kcyBJbnN0YW5jZWRNZXNoIGFuIHVuZGVmaW5lZCBtYXRlcmlhbCwgdGhyZWUuanMgc3Vic3RpdHV0ZXMgYVxuICAgIC8vIGRlZmF1bHQsIGFuZCB0aGUgcHJvcCBzaGlwcyBvbmUgbWF0ZXJpYWwgb3ZlciBpdHMgY2VpbGluZyB3aXRoIG5vdGhpbmcgaW4gdGhlIGNvbmZpZyB0b1xuICAgIC8vIGV4cGxhaW4gdGhlIGV4dHJhLlxuICAgIGFkZEluc3QoJ3BsYW50LWNvbmRlbnNlcnMnLCAnUm9vZnRvcCBjb25kZW5zZXIgdW5pdHMnLCB1bml0LCBHLnBsYW50TWF0ZXJpYWwgPz8gJ2dhbHYnLCBtYXRzKTtcbiAgfVxuXG4gIC8qIE9wdGlvbmFsIGluc3RhbmNlZCBleHRyYTogY2Fub3B5IHBsYXRlcywgcGlsYXN0ZXJzIG9yIGZvcmVjb3VydCBjb2x1bW5zLCBwZXIgcGxhdGUuICovXG4gIGlmIChHLmV4dHJhU3lzdGVtKSB7XG4gICAgY29uc3QgZSA9IEcuZXh0cmFTeXN0ZW07XG4gICAgbGV0IHVuaXQ6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5O1xuICAgIGlmIChlLmtpbmQgPT09ICdwbGF0ZScpIHtcbiAgICAgIHVuaXQgPSBtZXJnZUdlb3MoW2JveEF0KDAsIDAsIDAsIGUudywgZS5oLCBlLmQpLCBjeWxBdCgwLCAtZS5oIC8gMiAtIDAuMDE1LCAwLCAwLjA4NSwgMC4wMywgMTIpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXQgPSBib3hBdCgwLCAwLCAwLCBlLncsIGUuaCwgZS5kKTtcbiAgICB9XG4gICAgY29uc3QgbWF0cyA9IChlLmF0IGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHksIHpdKSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIHksIHopKTtcbiAgICBhZGRJbnN0KGUuaWQsIGUubmFtZSwgdW5pdCwgZS5tYXRlcmlhbCwgbWF0cywgZS50b25lcyA/IG1hdHMubWFwKChfLCBpKSA9PiBlLnRvbmVzW2kgJSBlLnRvbmVzLmxlbmd0aF0pIDogdW5kZWZpbmVkKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJyYW5kIGZhc2NpYSBjYW52YXMgKi9cblxuLyoqIERyYXcgdGhlIGJyYW5kIHdvcmRtYXJrIG9udG8gYSBjYW52YXMgYW5kIGFzc2lnbiBpdCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24uIFRoaXMgaXMgdGhlXG4gKiAgZG9jdW1lbnRlZCByb3V0ZSBmb3IgYSBwcmludGVkIGJyYW5kIGZhc2NpYSBhbmQgaXMgdW5hZmZlY3RlZCBieSB0aGUgbWF0ZXJpYWwncyBgdGV4dHVyZWxlc3NgXG4gKiAgZGVjbGFyYXRpb24gLS0gd2hhdCB0aGF0IHNraXBzIGlzIHRoZSBmaXZlLWNhbnZhcyBQUk9DRURVUkFMIHNldCwgYSBkaWZmZXJlbnQgdGhpbmcgZW50aXJlbHkuXG4gKlxuICogIFRleHQgaXMgZml0dGVkIHRvIGl0cyBmaWVsZCBieSBNRUFTVVJFTUVOVCByYXRoZXIgdGhhbiBieSBhIGZvbnQtc2l6ZSByYXRpbzogaGVhZGxlc3MgQ2hyb21lJ3NcbiAqICBmb250IGZhbGxiYWNrIGRlY2lkZXMgdGhlIHJlYWwgYWR2YW5jZSB3aWR0aHMsIHNvIHRoZSBvbmx5IHJlbGlhYmxlIHdheSB0byBmaWxsIGEga25vd24gYm94IGlzXG4gKiAgdG8gbWVhc3VyZSB0aGUgc3RyaW5nIGFuZCBzY2FsZSBpdCBob3Jpem9udGFsbHkuICovXG5mdW5jdGlvbiBhcHBseUZhc2NpYUdyYXBoaWMocm9vdDogVEhSRUUuR3JvdXApOiB2b2lkIHtcbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZSB8IHVuZGVmaW5lZDtcbiAgY29uc3QgbWVzaCA9IHJ0Py5tZXNoZXM/LlsnZmFzY2lhLXBhbmVsJ107XG4gIGlmICghbWVzaCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gIGNvbnN0IG1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgaWYgKCFtYXRlcmlhbCkgcmV0dXJuO1xuXG4gIGNvbnN0IGcgPSBDT05GSUcuZ3JhcGhpYyBhcyBhbnk7XG4gIGNvbnN0IHNyZ2IgPSAoVEhSRUUgYXMgYW55KS5TUkdCQ29sb3JTcGFjZTtcblxuICAvLyBBIEJBS0VEIHNpZ24gLS0gdGhlIGZhY2UgaW1hZ2UgY29tcG9zZWQgb25jZSBmcm9tIGEgcmVhbCBmb250IGFuZCB2ZWN0b3IgbWFya3MgYW5kIGVtYmVkZGVkXG4gIC8vIGFzIGEgV2ViUCBkYXRhIFVSSSAtLSBiZWF0cyBmaWxsVGV4dCwgd2hpY2ggZHJhd3MgYSBkaWZmZXJlbnQgd29yZG1hcmsgb24gZXZlcnkgbWFjaGluZSdzXG4gIC8vIGZvbnQgZmFsbGJhY2suIExhaWQgb3V0IHRvIHRoZSBzYW1lIFVWIGNvbnRyYWN0IGFzIHRoZSBjYW52YXM6IHRoZSB0b3AgODcuNSAlIGlzIHRoZSBiYW5kXG4gIC8vIHRoZSArWiBmYWNlIHNhbXBsZXMgYW5kIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgaXMgdGhlIHBsYWluIGZpZWxkIGV2ZXJ5IG90aGVyIGZhY2Ugc2FtcGxlcy5cbiAgLy8gQXNzaWduZWQgc3luY2hyb25vdXNseSBzbyB0aGUgaGFybmVzcyB3YWl0cyBvbiB0aGUgZGVjb2RlOyB0aGUgY2FudmFzIG9wcyBiZWxvdyBhcmUgdGhlXG4gIC8vIGRlY29kZSBGQUxMQkFDSyBvbmx5LlxuICBpZiAoZy5iYWtlZCkge1xuICAgIGNvbnN0IGJha2VkID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKGcuYmFrZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAoKSA9PiB7XG4gICAgICBjb25zdCBjID0gZHJhd0Zhc2NpYUNhbnZhcyhnKTtcbiAgICAgIGlmICghYykgcmV0dXJuO1xuICAgICAgY29uc3QgdCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGMpO1xuICAgICAgaWYgKHNyZ2IpIHQuY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgICB0LmFuaXNvdHJvcHkgPSA0O1xuICAgICAgbWF0ZXJpYWwubWFwID0gdDtcbiAgICAgIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBpZiAoc3JnYikgYmFrZWQuY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgYmFrZWQuYW5pc290cm9weSA9IDQ7XG4gICAgYmFrZWQubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG1hdGVyaWFsLm1hcCA9IGJha2VkO1xuICAgIG1hdGVyaWFsLmNvbG9yLnNldEhleCgweGZmZmZmZik7XG4gICAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNhbnZhcyA9IGRyYXdGYXNjaWFDYW52YXMoZyk7XG4gIGlmICghY2FudmFzKSByZXR1cm47XG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGNhbnZhcyk7XG4gIGlmIChzcmdiKSB0ZXguY29sb3JTcGFjZSA9IHNyZ2I7XG4gIHRleC5hbmlzb3Ryb3B5ID0gNDtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgbWF0ZXJpYWwubWFwID0gdGV4O1xuICAvLyBXaGl0ZSBiYXNlIHNvIHRoZSBjYW52YXMgc2hvd3MgYXMgZHJhd24gcmF0aGVyIHRoYW4gdGludGVkIC0tIHRoZSBtZWFzdXJlZCBmYXNjaWEgY29sb3VyIGlzXG4gIC8vIGFscmVhZHkgcGFpbnRlZCBpbnRvIHRoZSBjYW52YXMgYmFja2dyb3VuZC5cbiAgbWF0ZXJpYWwuY29sb3Iuc2V0SGV4KDB4ZmZmZmZmKTtcbiAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBkcmF3RmFzY2lhQ2FudmFzKGc6IGFueSk6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCB7XG4gIC8vIEEgcm91bmQgc2lnbiBuZWVkcyBhIFNRVUFSRSBjYW52YXM6IHRoZSBjeWxpbmRlciBjYXAgbWFwcyB0aGUgY2lyY2xlIGludG8gdGhlIHVuaXQgc3F1YXJlLFxuICAvLyBzbyBhIDIwNDh4MzIwIHN0cmlwIHdvdWxkIHNxdWFzaCB0aGUgbWFyayBmbGF0LiBBIHJlY3Rhbmd1bGFyIGZhc2NpYSBrZWVwcyB0aGUgd2lkZSBzdHJpcCxcbiAgLy8gd2hlcmUgdGhlIGJvdHRvbSAxMi41JSBpcyB0aGUgcGxhaW4gY29ybmVyIGV2ZXJ5IG5vbi1mcm9udCBmYWNlIHNhbXBsZXMuXG4gIGNvbnN0IHNxdWFyZSA9ICEhZy5zcXVhcmU7XG4gIGNvbnN0IFcgPSBzcXVhcmUgPyA1MTIgOiAoZy5zaXplPy5bMF0gPz8gMjA0OCksIEggPSBzcXVhcmUgPyA1MTIgOiAoZy5zaXplPy5bMV0gPz8gMzIwKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy53aWR0aCA9IFc7IGNhbnZhcy5oZWlnaHQgPSBIO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBnLmJhY2tncm91bmQ7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBXLCBIKTtcbiAgY29uc3QgYmFuZCA9IHNxdWFyZSA/IEggOiBIICogKGcuYmFuZEZyYWMgPz8gMC44NzUpO1xuXG4gIGNvbnN0IGZpdCA9ICh0ZXh0OiBzdHJpbmcsIGZvbnQ6IHN0cmluZywgeDA6IG51bWJlciwgeDE6IG51bWJlciwgY3k6IG51bWJlciwgZmlsbDogc3RyaW5nLCBzdHJva2VDb2w/OiBzdHJpbmcsIHN0cm9rZVc/OiBudW1iZXIpID0+IHtcbiAgICBjdHguZm9udCA9IGZvbnQ7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgY29uc3QgdyA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICBjb25zdCBzID0gKHgxIC0geDApIC8gdztcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoeDAsIDApO1xuICAgIGN0eC5zY2FsZShzLCAxKTtcbiAgICBpZiAoc3Ryb2tlQ29sKSB7IGN0eC5saW5lSm9pbiA9ICdyb3VuZCc7IGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbDsgY3R4LmxpbmVXaWR0aCA9IChzdHJva2VXID8/IDYpIC8gczsgY3R4LnN0cm9rZVRleHQodGV4dCwgMCwgY3kpOyB9XG4gICAgY3R4LmZpbGxTdHlsZSA9IGZpbGw7XG4gICAgY3R4LmZpbGxUZXh0KHRleHQsIDAsIGN5KTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9O1xuXG4gIGZvciAoY29uc3Qgb3Agb2YgZy5vcHMgYXMgYW55W10pIHtcbiAgICBpZiAob3AudHlwZSA9PT0gJ3JlY3QnKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gb3AuZmlsbDtcbiAgICAgIGNvbnN0IHggPSBvcC54ICogVywgeSA9IG9wLnkgKiBiYW5kLCB3ID0gb3AudyAqIFcsIGggPSBvcC5oICogYmFuZCwgciA9IChvcC5yID8/IDApICogYmFuZDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGlmIChyID4gMCkge1xuICAgICAgICBjdHgubW92ZVRvKHggKyByLCB5KTsgY3R4LmxpbmVUbyh4ICsgdyAtIHIsIHkpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgdywgeSwgeCArIHcsIHkgKyByKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgdywgeSArIGggLSByKTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHcsIHkgKyBoLCB4ICsgdyAtIHIsIHkgKyBoKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgciwgeSArIGgpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaCwgeCwgeSArIGggLSByKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgcik7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByLCB5KTtcbiAgICAgIH0gZWxzZSBjdHgucmVjdCh4LCB5LCB3LCBoKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gb3AuZmlsbDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmMob3AuY3ggKiBXLCBvcC5jeSAqIGJhbmQsIG9wLnIgKiBiYW5kLCAwLCBNYXRoLlBJICogMik7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH0gZWxzZSBpZiAob3AudHlwZSA9PT0gJ3BvbHknKSB7XG4gICAgICAvLyBBbiBhcmJpdHJhcnkgcG9seWdvbiBpbiBub3JtYWxpc2VkIGNhbnZhcyBjb29yZHMsIGZvciBhIG1hcmsgYSBmb250IGNhbm5vdCBzZXQgLS0gYVxuICAgICAgLy8gbGlnaHRuaW5nIGJvbHQsIGEgY2hldnJvbiwgYSBsZWFmLiBQb2ludHMgYXJlIFt4LCB5XSB3aXRoIHggYSBmcmFjdGlvbiBvZiB0aGUgY2FudmFzIHdpZHRoXG4gICAgICAvLyBhbmQgeSBhIGZyYWN0aW9uIG9mIHRoZSBiYW5kIGhlaWdodC5cbiAgICAgIGN0eC5maWxsU3R5bGUgPSBvcC5maWxsO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY29uc3QgcHRzID0gb3AucG9pbnRzIGFzIG51bWJlcltdW107XG4gICAgICBjdHgubW92ZVRvKHB0c1swXVswXSAqIFcsIHB0c1swXVsxXSAqIGJhbmQpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIGN0eC5saW5lVG8ocHRzW2ldWzBdICogVywgcHRzW2ldWzFdICogYmFuZCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH0gZWxzZSBpZiAob3AudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBmaXQob3AudGV4dCwgYCR7b3Auc3R5bGUgPz8gJ2JvbGQnfSAke01hdGgucm91bmQob3Auc2l6ZSAqIGJhbmQpfXB4ICR7b3AuZmFtaWx5ID8/ICdBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJ31gLFxuICAgICAgICBvcC54MCAqIFcsIG9wLngxICogVywgb3AuY3kgKiBiYW5kLCBvcC5maWxsLCBvcC5zdHJva2UsIG9wLnN0cm9rZVcgPyBvcC5zdHJva2VXICogYmFuZCA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNhbnZhcztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsYXppbmcgZ3JhcGhpYyAqL1xuXG4vKiogQSBidWlsZGluZyBpcyBhbiBleHRlcmlvciBzaGVsbCB3aXRoIG5vIGludGVyaW9yLCBzbyBhIHBsYWluIHRpbnRlZCBwYW5lIHJlYWRzIGFzIGEgYmxpbmQgc2xhYlxuICogIC0tIG9yLCBkYXJrIGVub3VnaCwgYXMgYSBob2xlLiBgZ3JhcGhpYy5nbGFzc2AgcGFpbnRzIGEgZGUtbGl0IGludGVyaW9yIHZpZXcgaW50byB0aGUgZ2xhemluZzpcbiAqICBvbmUgYmFrZWQgaW1hZ2UgcHJvamVjdGVkIGJ5IFdPUkxEIHgveSBvdmVyIGByZWN0YCBbeDAsIHkwLCB4MSwgeTFdIHNvIGl0IGxpbmVzIHVwIGFjcm9zcyB0aGVcbiAqICB3aW5kb3cgcGFuZSwgdGhlIHRyYW5zb20gYW5kIHRoZSBkb29yIGxlYXZlcywgd2hpY2ggYXJlIHNlcGFyYXRlIGJveGVzIGluIG9uZSBtZXJnZWQgbWVzaC5cbiAqICBBc3NpZ25lZCBhZnRlciBtYXRlcmlhbCBjb25zdHJ1Y3Rpb247IHRoZSBtYXRlcmlhbCBzdGF5cyBgdGV4dHVyZWxlc3NgIGluIHRoZSBzcGVjLiAqL1xuZnVuY3Rpb24gYXBwbHlHbGFzc0dyYXBoaWMocm9vdDogVEhSRUUuR3JvdXApOiB2b2lkIHtcbiAgY29uc3QgZyA9IChDT05GSUcuZ3JhcGhpYyBhcyBhbnkpPy5nbGFzcztcbiAgLy8gTm9kZSBoYXMgbm8gYGRvY3VtZW50YCwgYW5kIHRoYWlraXQncyBjb3BsYW5hciBjaGVja2VyIGFuZCBwYXJ0IG1hbmlmZXN0IGV2YWx1YXRlIHRoaXNcbiAgLy8gbW9kdWxlIHRoZXJlOiBUZXh0dXJlTG9hZGVyIHdvdWxkIHRocm93LCBzbyB0aGUgZ2xhemluZyBrZWVwcyBpdHMgZmxhdCBmYWxsYmFjayBhbGJlZG8uXG4gIGlmICghZyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IG1lc2ggPSBydD8ubWVzaGVzPy5bJ3Nob3Bmcm9udC1nbGF6aW5nJ107XG4gIGlmICghbWVzaCkgcmV0dXJuO1xuICBjb25zdCBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gIGlmICghbWF0ZXJpYWwpIHJldHVybjtcbiAgY29uc3QgZ2VvID0gbWVzaC5nZW9tZXRyeSBhcyBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgY29uc3QgcG9zID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgW3gwLCB5MCwgeDEsIHkxXSA9IGcucmVjdCBhcyBudW1iZXJbXTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHBvcy5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcy5jb3VudDsgaSsrKSB7XG4gICAgdXZbaSAqIDJdID0gKHBvcy5nZXRYKGkpIC0geDApIC8gKHgxIC0geDApO1xuICAgIHV2W2kgKiAyICsgMV0gPSAocG9zLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCk7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGNvbnN0IHNyZ2IgPSAoVEhSRUUgYXMgYW55KS5TUkdCQ29sb3JTcGFjZTtcbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKGcuYmFrZWQpO1xuICBpZiAoc3JnYikgdGV4LmNvbG9yU3BhY2UgPSBzcmdiO1xuICB0ZXguYW5pc290cm9weSA9IDQ7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIG1hdGVyaWFsLm1hcCA9IHRleDtcbiAgLy8gVGhlIGltYWdlIGNhcnJpZXMgdGhlIHRpbnQ7IGEgY29sb3VyZWQgYmFzZSB3b3VsZCBhcHBseSBpdCB0d2ljZS5cbiAgbWF0ZXJpYWwuY29sb3Iuc2V0SGV4KDB4ZmZmZmZmKTtcbiAgaWYgKGcucm91Z2huZXNzICE9PSB1bmRlZmluZWQpIG1hdGVyaWFsLnJvdWdobmVzcyA9IGcucm91Z2huZXNzO1xuICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB3YWxsIHJlbmRlciBncmFwaGljICovXG5cbi8qKiBBIHJlbmRlcmVkIGNvbmNyZXRlIHdhbGwgaXMgbm90IGEgZmxhdCBjb2xvdXIuIEV2ZXJ5IHBsYXRlIGluIHRoaXMgc2V0IHNob3dzIHRoZSBzYW1lIHRoaW5nIC0tXG4gKiAgdmVydGljYWwgcmFpbiBzdHJlYWtpbmcgb2ZmIHRoZSBjb3BpbmcsIHBhdGNoeSBmbG9hdCBtYXJrcywgYSBkYXJrZXIgYmFuZCB3aGVyZSB0aGUgd2FsbCBtZWV0c1xuICogIHRoZSBncm91bmQgLS0gYW5kIGEgd2FsbCBhdXRob3JlZCBhcyBvbmUgYWxiZWRvIHJlYWRzIGFzIHBhaW50ZWQgY2FyZCBuZXh0IHRvIHRoZSBzaG9wZnJvbnQnc1xuICogIHJlYWwgZGV0YWlsLiBgZ3JhcGhpYy53YWxsYCBwYWludHMgYSBTRUFNTEVTUyB0aWxlIG9uY2UgYW5kIHJlcGVhdHMgaXQgb3ZlciB0aGUgd2FsbCBtZXNoZXMuXG4gKlxuICogIEl0IGlzIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzLCBzbyB0aGUgbWF0ZXJpYWwgc3RheXMgYHRleHR1cmVsZXNzYCBpbiB0aGUgc3BlYzogd2hhdCB0aGF0XG4gKiAgZGVjbGFyYXRpb24gc2tpcHMgaXMgY3JlYXRlU2N1bHB0TWF0ZXJpYWwncyBmaXZlLWNhbnZhcyBwcm9jZWR1cmFsIHNldCwgd2hpY2ggY29zdHMgdGhlIHNxdWFyZVxuICogIG9mIGl0cyByZXNvbHV0aW9uIGFuZCBkaXNjYXJkcyB0aGUgbWVhc3VyZWQgYWxiZWRvLiBPbmUgdGlsZSBkcmF3biBvbmNlIGNvc3RzIG1pbGxpc2Vjb25kcyBhbmRcbiAqICBrZWVwcyB0aGUgYWxiZWRvLCBiZWNhdXNlIHRoZSB0aWxlIGlzIGF1dGhvcmVkIGluIE1VTFRJUExJRVIgc3BhY2UgLS0gbWlkLWdyZXkgMTI4IGlzIFwibGVhdmUgdGhlXG4gKiAgbWVhc3VyZWQgY29sb3VyIGFsb25lXCIgLS0gYW5kIGlzIGFwcGxpZWQgYXMgYG1hcGAgb3ZlciB0aGUgbWF0ZXJpYWwncyBvd24gY29sb3VyLlxuICpcbiAqICBVVnMgYXJlIG1ldHJpYyBhbmQgV09STEQtUExBTkFSLCBjaG9zZW4gcGVyIHZlcnRleCBvZmYgdGhlIGZhY2Ugbm9ybWFsOiBhbiBYLWZhY2luZyBmYWNlIGlzXG4gKiAgcHJvamVjdGVkICh6LCB5KSwgYSBaLWZhY2luZyBmYWNlICh4LCB5KSwgYSBZLWZhY2luZyBmYWNlICh4LCB6KS4gQm94IFVWcyB3b3VsZCBzdHJldGNoIG9uZVxuICogIHRpbGUgb3ZlciBlYWNoIGZhY2UsIHdoaWNoIHB1dHMgYSA3LW1ldHJlLXdpZGUgc3RyZWFrIG9uIHRoZSBzaWRlIHdhbGwgYW5kIGEgMC4yNC1tZXRyZS13aWRlIG9uZVxuICogIG9uIHRoZSBwYXJhcGV0IGNvcGluZy4gKi9cbmZ1bmN0aW9uIGFwcGx5V2FsbEdyYXBoaWMocm9vdDogVEhSRUUuR3JvdXApOiB2b2lkIHtcbiAgY29uc3QgZyA9IChDT05GSUcuZ3JhcGhpYyBhcyBhbnkpPy53YWxsO1xuICBpZiAoIWcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lIHwgdW5kZWZpbmVkO1xuICBpZiAoIXJ0KSByZXR1cm47XG4gIGNvbnN0IHRpbGUgPSBnLnRpbGUgPz8gMi41O1xuICBsZXQgdGV4OiBUSFJFRS5UZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gIGZvciAoY29uc3QgaWQgb2YgKGcubWVzaGVzIGFzIHN0cmluZ1tdKSkge1xuICAgIGNvbnN0IG1lc2ggPSBydC5tZXNoZXM/LltpZF07XG4gICAgaWYgKCFtZXNoKSBjb250aW51ZTtcbiAgICBjb25zdCBnZW8gPSBtZXNoLmdlb21ldHJ5IGFzIFRIUkVFLkJ1ZmZlckdlb21ldHJ5O1xuICAgIGNvbnN0IHBvcyA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICAgIGlmICghcG9zIHx8ICFucm0pIGNvbnRpbnVlO1xuICAgIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwb3MuY291bnQgKiAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcy5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXkgPSBNYXRoLmFicyhucm0uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgICAgaWYgKGF4ID49IGF5ICYmIGF4ID49IGF6KSB7IHUgPSBwb3MuZ2V0WihpKTsgdiA9IHBvcy5nZXRZKGkpOyB9XG4gICAgICBlbHNlIGlmIChheiA+PSBheSkgeyB1ID0gcG9zLmdldFgoaSk7IHYgPSBwb3MuZ2V0WShpKTsgfVxuICAgICAgZWxzZSB7IHUgPSBwb3MuZ2V0WChpKTsgdiA9IHBvcy5nZXRaKGkpOyB9XG4gICAgICB1dltpICogMl0gPSB1IC8gdGlsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyB0aWxlO1xuICAgIH1cbiAgICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBpZiAoIXRleCkge1xuICAgICAgY29uc3QgY2FudmFzID0gZHJhd1dhbGxDYW52YXMoZyk7XG4gICAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuICAgICAgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY2FudmFzKTtcbiAgICAgIHRleC53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nOyB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgICAgIGNvbnN0IHNyZ2IgPSAoVEhSRUUgYXMgYW55KS5TUkdCQ29sb3JTcGFjZTtcbiAgICAgIGlmIChzcmdiKSB0ZXguY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgICB0ZXguYW5pc290cm9weSA9IDQ7IHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IG1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgICAvLyBPTkUgdGV4dHVyZSBmb3IgaG93ZXZlciBtYW55IG1lc2hlcyBzaGFyZSB0aGUgbWF0ZXJpYWw6IGFzc2lnbmluZyBwZXIgbWVzaCB3b3VsZCB1cGxvYWQgdGhlXG4gICAgLy8gc2FtZSBjYW52YXMgdHdpY2UgYW5kIGNvc3QgVlJBTSBmb3Igbm90aGluZy5cbiAgICBpZiAobWF0ZXJpYWwgJiYgbWF0ZXJpYWwubWFwICE9PSB0ZXgpIHsgbWF0ZXJpYWwubWFwID0gdGV4OyBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7IH1cbiAgfVxufVxuXG4vKiogU2VhbWxlc3MgcmVuZGVyIHRpbGUgaW4gTVVMVElQTElFUiBzcGFjZSwgYW5kIHRoZSBuZXV0cmFsIHZhbHVlIGlzIFdISVRFLCBub3QgbWlkLWdyZXkuXG4gKiAgYG1hcGAgbXVsdGlwbGllcyB0aGUgbWF0ZXJpYWwgY29sb3VyIGJ5IHRoZSB0ZXh0dXJlJ3MgTElORUFSIHZhbHVlLCBhbmQgdGhlIHRleHR1cmUgaXMgZGVjb2RlZFxuICogIGFzIHNSR0IsIHNvIGEgdGlsZSBkcmF3biBhcm91bmQgMTI4IG11bHRpcGxpZXMgdGhlIG1lYXN1cmVkIGFsYmVkbyBieSAwLjIxNiBhbmQgcmVuZGVycyBhIGxpZ2h0XG4gKiAgZ3JleSByZW5kZXIgd2FsbCBuZWFyIGJsYWNrIC0tIHdoaWNoIGlzIGV4YWN0bHkgd2hhdCB0aGUgZmlyc3QgYnVpbGQgb2YgdGhpcyB0aWxlIGRpZC4gYGJhc2VgXG4gKiAgdGhlcmVmb3JlIHNpdHMganVzdCB1bmRlciB3aGl0ZSBhbmQgZXZlcnkgbWFyayBEQVJLRU5TIGZyb20gaXQ7IHRoZSB3YWxsJ3Mgb3duIGFsYmVkbyBzdGF5cyB0aGVcbiAqICBtYXRlcmlhbCdzLCBhbmQgdGhlIHRpbGUgb25seSBldmVyIHRha2VzIHZhbHVlIGF3YXkuXG4gKlxuICogIEV2ZXJ5dGhpbmcgd3JhcHMgYnkgZHJhd2luZyBlYWNoIG1hcmsgYSBzZWNvbmQgdGltZSBhdCB4LVcgYW5kIHgrVywgd2hpY2ggaXMgd2hhdCBtYWtlcyB0aGVcbiAqICB0aWxlIHNlYW1sZXNzIC0tIGEgbWFyayBjbGlwcGVkIGF0IHRoZSBlZGdlIGlzIHRoZSBzaW5nbGUgbW9zdCB2aXNpYmxlIGFydGVmYWN0IHdoZW4gYSB3YWxsIGlzXG4gKiAgOCB0aWxlcyB3aWRlLiAqL1xuZnVuY3Rpb24gZHJhd1dhbGxDYW52YXMoZzogYW55KTogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgTiA9IGcuc2l6ZSA/PyA1MTI7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBOOyBjYW52YXMuaGVpZ2h0ID0gTjtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSByZXR1cm4gbnVsbDtcbiAgbGV0IHNlZWQgPSBnLnNlZWQgPz8gMjAyNjA4Mjg7XG4gIGNvbnN0IHJuZCA9ICgpID0+IHsgc2VlZCA9IChzZWVkICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwOyByZXR1cm4gc2VlZCAvIDQyOTQ5NjcyOTY7IH07XG4gIGNvbnN0IGJhc2UgPSBnLmJhc2UgPz8gMjQ2O1xuICBjdHguZmlsbFN0eWxlID0gYHJnYigke2Jhc2V9LCR7YmFzZX0sJHtiYXNlfSlgO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgTiwgTik7XG5cbiAgLy8gQnJvYWQgZmxvYXQtbWFyayBibG90Y2hlczogbG93LWZyZXF1ZW5jeSBwYXRjaGluZXNzIGluIHRoZSByZW5kZXIgY29hdC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZy5wYXRjaGVzID8/IDkwKTsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHJuZCgpICogTiwgeSA9IHJuZCgpICogTiwgciA9ICgwLjA1ICsgcm5kKCkgKiAwLjE4KSAqIE47XG4gICAgY29uc3QgdiA9IGJhc2UgLSBybmQoKSAqIChnLnBhdGNoQW1wID8/IDI2KTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7diB8IDB9LCR7diB8IDB9LCR7diB8IDB9LDAuNTUpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHt2IHwgMH0sJHt2IHwgMH0sJHt2IHwgMH0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDtcbiAgICBmb3IgKGNvbnN0IGR4IG9mIFstTiwgMCwgTl0pIHsgY3R4LnNhdmUoKTsgY3R4LnRyYW5zbGF0ZShkeCwgMCk7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IGN0eC5yZXN0b3JlKCk7IH1cbiAgfVxuICAvLyBWZXJ0aWNhbCByYWluIHN0cmVha3MuIE5hcnJvdywgc29mdC1lZGdlZCwgdG9wLXdlaWdodGVkIC0tIHdhdGVyIHJ1bnMgRE9XTiBmcm9tIHRoZSBjb3BpbmcgYW5kXG4gIC8vIGZhZGVzIG91dCwgc28gdGhlIGFscGhhIHJhbXBzIHRvIG5vdGhpbmcgYXQgdGhlIGJvdHRvbSBvZiBlYWNoIHN0cmVhayByYXRoZXIgdGhhbiBzdG9wcGluZy5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZy5zdHJlYWtzID8/IDEzMCk7IGkrKykge1xuICAgIGNvbnN0IHggPSBybmQoKSAqIE4sIHcgPSAoMC4wMDIgKyBybmQoKSAqIDAuMDEwKSAqIE47XG4gICAgY29uc3QgeTAgPSBybmQoKSAqIE4gKiAwLjUsIGxlbiA9ICgwLjI1ICsgcm5kKCkgKiAwLjc1KSAqIE47XG4gICAgY29uc3QgZGFyayA9IGJhc2UgLSAoNiArIHJuZCgpICogKGcuc3RyZWFrQW1wID8/IDIyKSk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7ZGFyayB8IDB9LCR7ZGFyayB8IDB9LCR7ZGFyayB8IDB9LDAuNDIpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC4zNSwgYHJnYmEoJHtkYXJrIHwgMH0sJHtkYXJrIHwgMH0sJHtkYXJrIHwgMH0sMC4yNilgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2RhcmsgfCAwfSwke2RhcmsgfCAwfSwke2RhcmsgfCAwfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkO1xuICAgIGZvciAoY29uc3QgZHggb2YgWy1OLCAwLCBOXSkgY3R4LmZpbGxSZWN0KHggKyBkeCAtIHcgLyAyLCB5MCwgdywgbGVuKTtcbiAgfVxuICAvLyBGaW5lIHNwZWNrbGU6IHRoZSBhZ2dyZWdhdGUgaW4gdGhlIHJlbmRlciwgYXQgdGhlIGxpbWl0IG9mIHdoYXQgYSBwcm9wLWRpc3RhbmNlIHZpZXdlciByZXNvbHZlcy5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZy5zcGVja3MgPz8gMjYwMCk7IGkrKykge1xuICAgIGNvbnN0IHggPSBybmQoKSAqIE4sIHkgPSBybmQoKSAqIE4sIHIgPSAwLjUgKyBybmQoKSAqIDEuNjtcbiAgICBjb25zdCB2ID0gYmFzZSAtIHJuZCgpICogKGcuc3BlY2tBbXAgPz8gMzApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3YgfCAwfSwke3YgfCAwfSwke3YgfCAwfSwwLjMwKWA7XG4gICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgfVxuICByZXR1cm4gY2FudmFzO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlTG90dXNzU3RvcmVCdWlsZGluZ01vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgYXBwbHlGYXNjaWFHcmFwaGljKHJvb3QpO1xuICBhcHBseUdsYXNzR3JhcGhpYyhyb290KTtcbiAgYXBwbHlXYWxsR3JhcGhpYyhyb290KTtcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiBPTkUuIEEgc3RhdGljIGV4dGVyaW9yIHNoZWxsIC0tIG5vdGhpbmcgb3BlbnMsIHR1cm5zIG9yIHN3aW5ncy4gVGhlIGRvb3JzIGFuZCBhbnlcbiAgICAvLyBzaHV0dGVyIGFyZSBhdXRob3JlZCBhcyBmaXhlZCBnZW9tZXRyeSwgc28gdGhleSBnZXQgbm8gYXhpczogYSBuYW1lZCBwaXZvdCBpcyBhIHByb21pc2VcbiAgICAvLyB0aGF0IGEgcGFydCB0dXJucyBvbiBpdCwgYW5kIGEgcHJvcCB0aGF0IGRlY2xhcmVzIHBpdm90cyBpdCBoYXMgbm8gbWVjaGFuaXNtcyBmb3IgaGFzXG4gICAgLy8gZGVzY3JpYmVkIGEgbWFjaGluZSB0aGF0IGRvZXMgbm90IGV4aXN0LlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuXG4gICAgLy8gU29ja2V0czogTk9ORS4gTm90aGluZyBhdHRhY2hlcyB0byB0aGlzIHByb3AgYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJldHVybiBjcmVhdGVPYmplY3RNb2RlbCh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBNkN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLGNBQWM7QUFBQSxNQUNaLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxzQkFBc0I7QUFBQSxJQUN0QixnQkFBZ0I7QUFBQSxNQUNkO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsaUJBQWlCO0FBQUEsSUFDakIsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsUUFDSDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBYyxDQUFDO0FBQUEsSUFDZixpQkFBaUI7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxJQUNkLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixRQUFR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
