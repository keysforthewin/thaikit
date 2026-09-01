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

// ../repo/scratch/vetiver-thatch-canopy-module/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createVetiverThatchCanopyModuleModel: () => createVetiverThatchCanopyModuleModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "vetiver-thatch-canopy-module",
  "name": "Vetiver Thatch Canopy Module",
  "exportName": "VetiverThatchCanopyModule",
  "envelope": "Envelope 4.00 x 3.30 x 4.00 m, origin base-center, +Y up, ridge along X.\n * Budget (large): <=4000 triangles, <=4 draw calls, <=3 materials, <=6 unique geometries.",
  "materials": [
    {
      "id": "timber",
      "color": 14469280,
      "roughness": 0.86,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "thatch",
      "color": 11051414,
      "roughness": 0.96,
      "metalness": 0,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "timber",
      "kind": "sawn",
      "size": 512,
      "seed": 611,
      "grain": 200,
      "knots": 3,
      "splits": 2,
      "mould": 2,
      "weather": 16
    },
    {
      "material": "thatch",
      "kind": "thatch",
      "size": 512,
      "seed": 612,
      "courses": 7,
      "stems": 620,
      "stemW": [
        1,
        2
      ],
      "spread": 0.1,
      "ragged": 0.05,
      "shadow": 0.34,
      "tip": 0.3,
      "gaps": 0,
      "moss": 9,
      "weather": 14
    }
  ],
  "geometry": {
    "components": [
      {
        "id": "frame",
        "name": "Timber frame, truss and barge boards",
        "material": "timber",
        "uv": "world",
        "uvScale": 0.6,
        "boxes": [
          [
            13811616,
            -1.908,
            0.9850000000000001,
            -1.908,
            0.16,
            1.9700000000000002,
            0.16
          ],
          [
            13811616,
            -1.908,
            0.9850000000000001,
            1.908,
            0.16,
            1.9700000000000002,
            0.16
          ],
          [
            13811616,
            1.908,
            0.9850000000000001,
            -1.908,
            0.16,
            1.9700000000000002,
            0.16
          ],
          [
            13811616,
            1.908,
            0.9850000000000001,
            1.908,
            0.16,
            1.9700000000000002,
            0.16
          ],
          [
            14733492,
            0,
            2.055,
            -1.925,
            3.98,
            0.17,
            0.13
          ],
          [
            14733492,
            0,
            2.055,
            1.925,
            3.98,
            0.17,
            0.13
          ],
          [
            14733492,
            -1.925,
            2.055,
            0,
            0.13,
            0.17,
            3.7199999999999998
          ],
          [
            14733492,
            1.925,
            2.055,
            0,
            0.13,
            0.17,
            3.7199999999999998
          ],
          [
            12955798,
            -1.908,
            1.7366547622084396,
            -1.6746547622084393,
            0.1,
            0.1,
            0.66,
            -0.7853981633974483,
            0,
            0
          ],
          [
            12955798,
            -1.6746547622084393,
            1.7366547622084396,
            -1.908,
            0.66,
            0.1,
            0.1,
            0,
            0,
            0.7853981633974483
          ],
          [
            12955798,
            -1.908,
            1.7366547622084396,
            1.6746547622084393,
            0.1,
            0.1,
            0.66,
            0.7853981633974483,
            0,
            0
          ],
          [
            12955798,
            -1.6746547622084393,
            1.7366547622084396,
            1.908,
            0.66,
            0.1,
            0.1,
            0,
            0,
            0.7853981633974483
          ],
          [
            12955798,
            1.908,
            1.7366547622084396,
            -1.6746547622084393,
            0.1,
            0.1,
            0.66,
            -0.7853981633974483,
            0,
            0
          ],
          [
            12955798,
            1.6746547622084393,
            1.7366547622084396,
            -1.908,
            0.66,
            0.1,
            0.1,
            0,
            0,
            -0.7853981633974483
          ],
          [
            12955798,
            1.908,
            1.7366547622084396,
            1.6746547622084393,
            0.1,
            0.1,
            0.66,
            0.7853981633974483,
            0,
            0
          ],
          [
            12955798,
            1.6746547622084393,
            1.7366547622084396,
            1.908,
            0.66,
            0.1,
            0.1,
            0,
            0,
            -0.7853981633974483
          ],
          [
            13811616,
            -1.908,
            2.4399999999999995,
            0,
            0.13,
            0.5999999999999996,
            0.13
          ],
          [
            13811616,
            1.908,
            2.4399999999999995,
            0,
            0.13,
            0.5999999999999996,
            0.13
          ],
          [
            14733492,
            0,
            2.8149999999999995,
            0,
            3.98,
            0.15,
            0.15
          ],
          [
            12955798,
            -1.908,
            2.3949999999999996,
            -1,
            0.09,
            0.11,
            2.0860009363293828,
            -0.3587706702705722,
            0,
            0
          ],
          [
            12955798,
            -1.908,
            2.3949999999999996,
            1,
            0.09,
            0.11,
            2.0860009363293828,
            0.3587706702705722,
            0,
            0
          ],
          [
            12955798,
            0,
            2.3949999999999996,
            -1,
            0.09,
            0.11,
            2.0860009363293828,
            -0.3587706702705722,
            0,
            0
          ],
          [
            12955798,
            0,
            2.3949999999999996,
            1,
            0.09,
            0.11,
            2.0860009363293828,
            0.3587706702705722,
            0,
            0
          ],
          [
            12955798,
            1.908,
            2.3949999999999996,
            -1,
            0.09,
            0.11,
            2.0860009363293828,
            -0.3587706702705722,
            0,
            0
          ],
          [
            12955798,
            1.908,
            2.3949999999999996,
            1,
            0.09,
            0.11,
            2.0860009363293828,
            0.3587706702705722,
            0,
            0
          ],
          [
            15392198,
            -1.94,
            2.815,
            -0.99,
            0.1,
            0.17,
            2.0860009363293828,
            -0.3587706702705722,
            0,
            0
          ],
          [
            15392198,
            -1.94,
            2.815,
            0.99,
            0.1,
            0.17,
            2.0860009363293828,
            0.3587706702705722,
            0,
            0
          ],
          [
            15392198,
            1.94,
            2.815,
            -0.99,
            0.1,
            0.17,
            2.0860009363293828,
            -0.3587706702705722,
            0,
            0
          ],
          [
            15392198,
            1.94,
            2.815,
            0.99,
            0.1,
            0.17,
            2.0860009363293828,
            0.3587706702705722,
            0,
            0
          ],
          [
            10125400,
            -1.908,
            1.9000000000000001,
            -1.908,
            0.18,
            0.08,
            0.18
          ],
          [
            10125400,
            -1.908,
            1.77,
            -1.908,
            0.18,
            0.05,
            0.18
          ],
          [
            10125400,
            -1.908,
            1.9000000000000001,
            1.908,
            0.18,
            0.08,
            0.18
          ],
          [
            10125400,
            -1.908,
            1.77,
            1.908,
            0.18,
            0.05,
            0.18
          ],
          [
            10125400,
            1.908,
            1.9000000000000001,
            -1.908,
            0.18,
            0.08,
            0.18
          ],
          [
            10125400,
            1.908,
            1.77,
            -1.908,
            0.18,
            0.05,
            0.18
          ],
          [
            10125400,
            1.908,
            1.9000000000000001,
            1.908,
            0.18,
            0.08,
            0.18
          ],
          [
            10125400,
            1.908,
            1.77,
            1.908,
            0.18,
            0.05,
            0.18
          ]
        ]
      },
      {
        "id": "thatch",
        "name": "Vetiver grass thatch roof with bound ridge",
        "material": "thatch",
        "uv": "world",
        "uvScale": 1.7,
        "sheets": [
          {
            "hex": 16777215,
            "x0": -1.88,
            "x1": 1.88,
            "z0": -2,
            "z1": 2,
            "nx": 18,
            "nz": 14,
            "t": 0.26,
            "heights": [
              [
                2.388022202765569,
                2.3952549602487125,
                2.3509045894490552,
                2.399949290452059,
                2.380886315461248,
                2.382439735450316,
                2.388847038964741,
                2.3557293867575937,
                2.395689284848049,
                2.395058300590608,
                2.355987183586694,
                2.354956243687775,
                2.379720995016396,
                2.37742626798572,
                2.396915532252751,
                2.3645196122000924,
                2.3956939603667706,
                2.3775761002325453,
                2.39643617880065
              ],
              [
                2.5269794666335206,
                2.5294111563713386,
                2.5145003368404324,
                2.5309894139871947,
                2.5245803451409796,
                2.5251026128175527,
                2.5272567807458186,
                2.5161224581585557,
                2.529557178503776,
                2.529345038397168,
                2.5162091307595973,
                2.515862523538444,
                2.5241885584989388,
                2.5234170596363548,
                2.529969449098634,
                2.5190777765210823,
                2.529558750436876,
                2.5234674339974266,
                2.5298082880375894
              ],
              [
                2.6569811012270326,
                2.6571654826585283,
                2.656034878615122,
                2.6572851531057715,
                2.6567991892634097,
                2.6568387899000916,
                2.6570021284050496,
                2.6561578750015626,
                2.6571765547000763,
                2.6571604693023687,
                2.656164446900108,
                2.656138165613228,
                2.6567694822737487,
                2.656710983830272,
                2.6572078148733054,
                2.6563819602628254,
                2.657176673890971,
                2.65671480343631,
                2.6571955949314785
              ],
              [
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572
              ],
              [
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287
              ],
              [
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027
              ],
              [
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085
              ],
              [
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15,
                3.15
              ],
              [
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085,
                3.0667207485086085
              ],
              [
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027,
                2.978715017250027
              ],
              [
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287,
                2.8821924637414287
              ],
              [
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572,
                2.775049606598572
              ],
              [
                2.6569811012270326,
                2.6571654826585283,
                2.656034878615122,
                2.6572851531057715,
                2.6567991892634097,
                2.6568387899000916,
                2.6570021284050496,
                2.6561578750015626,
                2.6571765547000763,
                2.6571604693023687,
                2.656164446900108,
                2.656138165613228,
                2.6567694822737487,
                2.656710983830272,
                2.6572078148733054,
                2.6563819602628254,
                2.657176673890971,
                2.65671480343631,
                2.6571955949314785
              ],
              [
                2.5269794666335206,
                2.5294111563713386,
                2.5145003368404324,
                2.5309894139871947,
                2.5245803451409796,
                2.5251026128175527,
                2.5272567807458186,
                2.5161224581585557,
                2.529557178503776,
                2.529345038397168,
                2.5162091307595973,
                2.515862523538444,
                2.5241885584989388,
                2.5234170596363548,
                2.529969449098634,
                2.5190777765210823,
                2.529558750436876,
                2.5234674339974266,
                2.5298082880375894
              ],
              [
                2.388022202765569,
                2.3952549602487125,
                2.3509045894490552,
                2.399949290452059,
                2.380886315461248,
                2.382439735450316,
                2.388847038964741,
                2.3557293867575937,
                2.395689284848049,
                2.395058300590608,
                2.355987183586694,
                2.354956243687775,
                2.379720995016396,
                2.37742626798572,
                2.396915532252751,
                2.3645196122000924,
                2.3956939603667706,
                2.3775761002325453,
                2.39643617880065
              ]
            ]
          }
        ],
        "cyls": [
          {
            "at": [
              0,
              3.142,
              0
            ],
            "rt": 0.15,
            "rb": 0.15,
            "h": 3.76,
            "seg": 12,
            "rz": 1.5707963267948966,
            "hex": 16777215
          },
          {
            "at": [
              -1.5,
              3.142,
              0
            ],
            "rt": 0.158,
            "rb": 0.158,
            "h": 0.045,
            "seg": 10,
            "open": true,
            "rz": 1.5707963267948966,
            "th0": 0.47123889803846897,
            "thLen": 2.199114857512855,
            "hex": 10125400
          },
          {
            "at": [
              -1,
              3.142,
              0
            ],
            "rt": 0.158,
            "rb": 0.158,
            "h": 0.045,
            "seg": 10,
            "open": true,
            "rz": 1.5707963267948966,
            "th0": 0.47123889803846897,
            "thLen": 2.199114857512855,
            "hex": 10125400
          },
          {
            "at": [
              -0.5,
              3.142,
              0
            ],
            "rt": 0.158,
            "rb": 0.158,
            "h": 0.045,
            "seg": 10,
            "open": true,
            "rz": 1.5707963267948966,
            "th0": 0.47123889803846897,
            "thLen": 2.199114857512855,
            "hex": 10125400
          },
          {
            "at": [
              0,
              3.142,
              0
            ],
            "rt": 0.158,
            "rb": 0.158,
            "h": 0.045,
            "seg": 10,
            "open": true,
            "rz": 1.5707963267948966,
            "th0": 0.47123889803846897,
            "thLen": 2.199114857512855,
            "hex": 10125400
          },
          {
            "at": [
              0.5,
              3.142,
              0
            ],
            "rt": 0.158,
            "rb": 0.158,
            "h": 0.045,
            "seg": 10,
            "open": true,
            "rz": 1.5707963267948966,
            "th0": 0.47123889803846897,
            "thLen": 2.199114857512855,
            "hex": 10125400
          },
          {
            "at": [
              1,
              3.142,
              0
            ],
            "rt": 0.158,
            "rb": 0.158,
            "h": 0.045,
            "seg": 10,
            "open": true,
            "rz": 1.5707963267948966,
            "th0": 0.47123889803846897,
            "thLen": 2.199114857512855,
            "hex": 10125400
          },
          {
            "at": [
              1.5,
              3.142,
              0
            ],
            "rt": 0.158,
            "rb": 0.158,
            "h": 0.045,
            "seg": 10,
            "open": true,
            "rz": 1.5707963267948966,
            "th0": 0.47123889803846897,
            "thLen": 2.199114857512855,
            "hex": 10125400
          }
        ]
      }
    ],
    "instanced": [
      {
        "id": "purlins",
        "name": "Roof purlins",
        "material": "timber",
        "uv": "world",
        "uvScale": 0.6,
        "boxes": [
          [
            12955798,
            0,
            0,
            0,
            3.6999999999999997,
            0.07,
            0.07
          ]
        ],
        "placements": [
          [
            0,
            2.64375,
            -0.55
          ],
          [
            0,
            2.64375,
            0.55
          ],
          [
            0,
            2.4374999999999996,
            -1.1
          ],
          [
            0,
            2.4374999999999996,
            1.1
          ],
          [
            0,
            2.2499999999999996,
            -1.6
          ],
          [
            0,
            2.2499999999999996,
            1.6
          ],
          [
            0,
            2.1449999999999996,
            -1.88
          ],
          [
            0,
            2.1449999999999996,
            1.88
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
function splitCorners(pts, minDeg = 70, eps = 8e-4) {
  const out = [];
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], a = pts[i - 1], b = pts[i + 1];
    let sharp = false;
    if (a && b) {
      const ux = p[0] - a[0], uy = p[1] - a[1], vx = b[0] - p[0], vy = b[1] - p[1];
      const lu = Math.hypot(ux, uy), lv = Math.hypot(vx, vy);
      if (lu > 0 && lv > 0) sharp = Math.acos(Math.max(-1, Math.min(1, (ux * vx + uy * vy) / (lu * lv)))) > minDeg * Math.PI / 180;
      if (sharp && lu > 3 * eps) out.push([p[0] - ux / lu * eps, p[1] - uy / lu * eps]);
      out.push(p);
      if (sharp && lv > 3 * eps) out.push([p[0] + vx / lv * eps, p[1] + vy / lv * eps]);
    } else out.push(p);
  }
  return out;
}
function lathe(pts, seg, yOffset = 0, sharp = true) {
  const v = (sharp ? splitCorners(pts) : pts).map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
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
    const [z, cx, cy, rx, ry, flatY] = stations[i];
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      const x = cx + Math.sin(th) * rx;
      let y = cy + Math.cos(th) * ry;
      if (flatY !== void 0 && y < flatY) y = flatY;
      pos.push(x, y, z);
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
  const paint = (g, hex) => {
    const n = g.getAttribute("position").count, c = new THREE.Color(hex), col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return g;
  };
  const top0 = grid(0, false), und0 = grid(-t, true);
  const parts = s.hexUnder !== void 0 ? [paint(top0, s.hexTop ?? 16777215), paint(und0, s.hexUnder)] : [top0, und0];
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
  const edges = [strip(e0, [0, 0, -1]), strip(e1, [0, 0, 1]), strip(e2, [-1, 0, 0]), strip(e3, [1, 0, 0])];
  parts.push(...s.hexUnder !== void 0 ? edges.map((g) => paint(g, s.hexUnder)) : edges);
  return mergeGeos(parts);
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
function latheUV(g, pointCount, seg, scale, vScale = scale, v0 = 0) {
  const p = g.getAttribute("position");
  let rMax = 0;
  for (let i = 0; i < p.count; i++) rMax = Math.max(rMax, Math.hypot(p.getX(i), p.getZ(i)));
  const rep = Math.max(1, Math.round(2 * Math.PI * rMax / scale));
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const s = Math.floor(i / pointCount);
    uv[i * 2] = s / seg * rep;
    uv[i * 2 + 1] = (p.getY(i) - v0) / vScale;
  }
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
}
function pebbleTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    ctx.fillStyle = rgb(o.ground ?? [0.45, 0.42, 0.38]);
    ctx.fillRect(0, 0, s, s);
    const pal = o.palette ?? [[0.85, 0.78, 0.66], [0.72, 0.62, 0.5], [0.6, 0.58, 0.55], [0.9, 0.86, 0.8]];
    const n = o.count ?? 900, rMin = s * (o.rMin ?? 0.012), rMax = s * (o.rMax ?? 0.028);
    for (let i = 0; i < n; i++) {
      const x = rnd() * s, y = rnd() * s, rx = rMin + rnd() * (rMax - rMin), ry = rx * (0.6 + rnd() * 0.5), a = rnd() * Math.PI;
      const c = pal[Math.floor(rnd() * pal.length)], k = 0.85 + rnd() * 0.3;
      ctx.fillStyle = rgb(c.map((v) => Math.min(1, v * k)));
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, rx, ry, a, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx - rx * 0.2, y + dy - ry * 0.25, rx * 0.5, ry * 0.4, a, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  });
}
function treadTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const groove = o.groove ?? 0.8, slots = o.slots ?? 2, rings = o.rings ?? 2;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    const gv = Math.round(255 * groove);
    ctx.fillStyle = `rgb(${gv},${gv},${gv})`;
    const pitch = s / slots, w = pitch * (o.slotWidth ?? 0.16);
    for (let i = 0; i < slots; i++) {
      const x = i * pitch + pitch * 0.4 + (rnd() - 0.5) * pitch * 0.1;
      ctx.fillRect(x, s * 0.12, w, s * 0.76);
      ctx.fillRect(x - s, s * 0.12, w, s * 0.76);
    }
    for (let i = 0; i < rings; i++) {
      const y = s * (0.2 + 0.6 * (i + 0.5) / rings);
      ctx.fillRect(0, y - 1.5, s, 3);
    }
    for (let i = 0; i < 24; i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * 0.12), v = 235 + Math.round(rnd() * 20);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${v},${v},${v},0.5)`);
      g2.addColorStop(1, `rgba(${v},${v},${v},0)`);
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
function tyreTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const base = o.base ?? 200, band = o.band ?? [0.24, 0.76], groove = o.groove ?? 0.45;
    const gv = Math.round(base * groove), rv = Math.round(base * 0.7), mv = Math.round(base * 0.9);
    const dust = o.dust ?? [232, 214, 190];
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
    strip(0, s / 2, true);
    strip(s / 2, s, false);
  });
}
function frustum(b) {
  const [cx, y0, cz, w0, d0, w1, d1, h] = b;
  const g = new THREE.BoxGeometry(1, h, 1);
  const p = g.getAttribute("position");
  for (let i = 0; i < p.count; i++) {
    const t = (p.getY(i) + h / 2) / h;
    p.setX(i, p.getX(i) * (w0 + (w1 - w0) * t));
    p.setZ(i, p.getZ(i) * (d0 + (d1 - d0) * t));
  }
  g.computeVertexNormals();
  g.translate(cx, y0 + h / 2, cz);
  return g;
}
function culmUV(g, r, h, scale, vOff = 0) {
  const uv = g.getAttribute("uv");
  const ku = 2 * Math.PI * r / scale, kv = h / scale;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * ku, uv.getY(i) * kv + vOff);
  return g;
}
function grainLines(ctx, rnd, x0, x1, y0, y1, n, dark, light, aMax) {
  for (let k = 0; k < n; k++) {
    const x = x0 + rnd() * (x1 - x0), a = 0.04 + rnd() * aMax, w = rnd() < 0.75 ? 1 : 1.6;
    ctx.fillStyle = `rgba(${rnd() < 0.72 ? dark : light},${a.toFixed(3)})`;
    ctx.fillRect(x, y0, w, y1 - y0);
  }
}
function weatherPatches(ctx, rnd, s, x0, x1, n, warmA, bleachA) {
  for (let k = 0; k < n; k++) {
    const y = rnd() * s, len = s * (0.12 + rnd() * 0.45), warm = rnd() < 0.5;
    const c = warm ? "112,100,88" : "255,255,255", a = warm ? warmA * (0.4 + rnd() * 0.6) : bleachA * (0.4 + rnd() * 0.6);
    const g2 = ctx.createLinearGradient(0, y, 0, y + len);
    g2.addColorStop(0, `rgba(${c},0)`);
    g2.addColorStop(0.35, `rgba(${c},${a})`);
    g2.addColorStop(0.65, `rgba(${c},${a})`);
    g2.addColorStop(1, `rgba(${c},0)`);
    ctx.fillStyle = g2;
    for (const dy of [-s, 0]) ctx.fillRect(x0, y + dy, x1 - x0, len);
  }
}
function mouldClusters(ctx, rnd, s, spots, rx, ry, n, aMax) {
  for (const [cx, cy] of spots) {
    const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry) * 0.8);
    g2.addColorStop(0, `rgba(28,26,22,${(aMax * 0.9).toFixed(3)})`);
    g2.addColorStop(1, "rgba(28,26,22,0)");
    ctx.fillStyle = g2;
    for (const dy of [-s, 0, s]) {
      ctx.beginPath();
      ctx.ellipse(cx, cy + dy, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < n; i++) {
      const x = cx + (rnd() + rnd() - 1) * rx, y = cy + (rnd() + rnd() - 1) * ry;
      ctx.fillStyle = `rgba(28,26,22,${(0.08 + rnd() * aMax).toFixed(3)})`;
      const w = 1 + rnd() * 2, h = 1 + rnd() * 3;
      for (const dy of [-s, 0, s]) ctx.fillRect(x, y + dy, w, h);
    }
  }
}
function culmTile(size, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = "92,78,62", LIGHT = "255,255,255";
    ctx.fillStyle = "#f0efec";
    ctx.fillRect(0, 0, s, s);
    const ga = ctx.createLinearGradient(0, 0, s, 0);
    ga.addColorStop(0, "rgba(100,92,84,0.12)");
    ga.addColorStop(0.5, "rgba(255,255,255,0.10)");
    ga.addColorStop(1, "rgba(100,92,84,0.12)");
    ctx.fillStyle = ga;
    ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, 14, 0.12, 0.3);
    const nodes = [s * (0.2 + rnd() * 0.1), s * (0.66 + rnd() * 0.12)];
    const stations = [0, ...nodes, s];
    for (let i = 0; i + 1 < stations.length; i++) grainLines(ctx, rnd, 0, s, stations[i], stations[i + 1], 260, DARK, LIGHT, 0.26);
    for (let k = 0; k < 2; k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.25 + rnd() * 0.5);
      ctx.fillStyle = "rgba(38,32,26,0.55)";
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.4, len);
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.4, y + dy, 1, len);
    }
    for (const y of nodes) {
      const gs = ctx.createLinearGradient(0, y - s * 0.03, 0, y);
      gs.addColorStop(0, "rgba(60,50,40,0)");
      gs.addColorStop(1, "rgba(60,50,40,0.22)");
      ctx.fillStyle = gs;
      ctx.fillRect(0, y - s * 0.03, s, s * 0.03);
      ctx.fillStyle = "rgba(52,44,36,0.62)";
      ctx.fillRect(0, y, s, 2.5);
      ctx.fillStyle = "rgba(255,255,255,0.34)";
      ctx.fillRect(0, y + 2.5, s, 4);
      ctx.fillStyle = "rgba(60,50,40,0.30)";
      ctx.fillRect(0, y + 6.5, s, 1.5);
      const gd = ctx.createLinearGradient(0, y + 8, 0, y + s * 0.05);
      gd.addColorStop(0, "rgba(60,50,40,0.20)");
      gd.addColorStop(1, "rgba(60,50,40,0)");
      ctx.fillStyle = gd;
      ctx.fillRect(0, y + 8, s, s * 0.05);
    }
    const spots = [];
    for (const y of nodes) for (let i = 0; i < 2; i++) spots.push([rnd() * s, y + s * (0.02 + rnd() * 0.05)]);
    for (let i = 0; i < 3; i++) spots.push([rnd() * s, rnd() * s]);
    mouldClusters(ctx, rnd, s, spots, s * 0.1, s * 0.06, 90, 0.3);
  });
}
function thatchTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const nc = o.courses ?? 4, ch = s / nc;
    const stems = o.stems ?? 260, spread = o.spread ?? 0.12;
    const wMin = o.stemW?.[0] ?? 1, wMax = o.stemW?.[1] ?? 2;
    const ragged = o.ragged ?? 0.06;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const butts = [];
    for (let c = 0; c <= nc; c++) {
      const row = [];
      let y = 0;
      for (let x = 0; x <= s; x++) {
        if (x % Math.max(2, Math.round(s / 48)) === 0) y = (rnd() * 2 - 1) * ragged * ch;
        row.push(c * ch + y);
      }
      butts.push(row);
    }
    for (let c = 0; c < nc; c++) {
      const y0 = c * ch;
      const t = 1 - spread * rnd();
      const v = Math.round(255 * t);
      ctx.fillStyle = `rgb(${v},${Math.round(v * 0.985)},${Math.round(v * 0.95)})`;
      ctx.fillRect(0, y0 - ragged * ch - 1, s, ch + 2 * ragged * ch + 2);
      for (let k = 0; k < stems; k++) {
        const x = rnd() * s;
        const w = wMin + rnd() * (wMax - wMin);
        const tone = 1 - spread * (0.3 + rnd() * 0.7);
        const a = 0.18 + rnd() * 0.32;
        const dark = rnd() < 0.62;
        ctx.fillStyle = dark ? `rgba(${Math.round(120 * tone)},${Math.round(106 * tone)},${Math.round(84 * tone)},${a.toFixed(3)})` : `rgba(255,253,246,${(a * 0.6).toFixed(3)})`;
        const yTop = y0 - ch * (0.15 + rnd() * 0.25);
        const yBot = butts[c + 1][Math.min(s, Math.round(x))] + ch * (rnd() * 0.1);
        ctx.fillRect(x, yTop, w, Math.max(2, yBot - yTop));
      }
      const gaps = o.gaps ?? 0;
      for (let k = 0; k < gaps; k++) {
        const x = rnd() * s, w = s * (0.01 + rnd() * 0.03);
        ctx.fillStyle = `rgba(96,84,66,${(0.2 + rnd() * 0.18).toFixed(3)})`;
        ctx.fillRect(x, y0 + ch * 0.25, w, ch * (0.4 + rnd() * 0.5));
      }
    }
    for (let c = 1; c <= nc; c++) {
      for (let x = 0; x < s; x++) {
        const yb = butts[c][x];
        const gh = ctx.createLinearGradient(0, yb - ch * 0.09, 0, yb);
        gh.addColorStop(0, "rgba(255,252,242,0)");
        gh.addColorStop(1, `rgba(255,252,242,${(o.tip ?? 0.34).toFixed(3)})`);
        ctx.fillStyle = gh;
        for (const dy of [-s, 0]) ctx.fillRect(x, yb - ch * 0.09 + dy, 1, ch * 0.09);
        const g2 = ctx.createLinearGradient(0, yb, 0, yb + ch * 0.22);
        g2.addColorStop(0, `rgba(58,48,36,${(o.shadow ?? 0.42).toFixed(3)})`);
        g2.addColorStop(1, "rgba(58,48,36,0)");
        ctx.fillStyle = g2;
        for (const dy of [-s, 0]) ctx.fillRect(x, yb + dy, 1, ch * 0.22);
      }
    }
    for (let k = 0; k < (o.moss ?? 0); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * 0.14);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.14 + rnd() * 0.22;
      g2.addColorStop(0, `rgba(150,190,110,${a.toFixed(3)})`);
      g2.addColorStop(1, "rgba(150,190,110,0)");
      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 10, 0.1, 0.22);
  });
}
function tarpTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const pitch = Math.max(3, Math.round(s / (o.tapes ?? 64)));
    for (let x = 0; x < s; x += pitch) {
      ctx.fillStyle = `rgba(30,34,44,${(0.1 + rnd() * 0.08).toFixed(3)})`;
      ctx.fillRect(x, 0, 1, s);
      ctx.fillStyle = "rgba(255,255,255,0.07)";
      ctx.fillRect(x + 1, 0, Math.max(1, pitch * 0.35), s);
    }
    for (let y = 0; y < s; y += pitch) {
      ctx.fillStyle = `rgba(30,34,44,${(0.1 + rnd() * 0.08).toFixed(3)})`;
      ctx.fillRect(0, y, s, 1);
      ctx.fillStyle = "rgba(255,255,255,0.07)";
      ctx.fillRect(0, y + 1, s, Math.max(1, pitch * 0.35));
    }
    for (let k = 0; k < (o.creases ?? 6); k++) {
      const horiz = rnd() < 0.5, p = rnd() * s, len = s * (0.5 + rnd() * 0.5), q = rnd() * s;
      ctx.fillStyle = "rgba(255,255,255,0.26)";
      ctx.fillStyle = "rgba(255,255,255,0.26)";
      if (horiz) {
        ctx.fillRect(q - len / 2, p, len, 1.6);
        ctx.fillStyle = "rgba(20,26,38,0.18)";
        ctx.fillRect(q - len / 2, p + 1.6, len, 2);
      } else {
        ctx.fillRect(p, q - len / 2, 1.6, len);
        ctx.fillStyle = "rgba(20,26,38,0.18)";
        ctx.fillRect(p + 1.6, q - len / 2, 2, len);
      }
    }
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 12, 0.1, 0.34);
  });
}
function sawnTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = "96,84,68", LIGHT = "255,255,255";
    ctx.fillStyle = "#f4f2ee";
    ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 20, 0.14, 0.3);
    grainLines(ctx, rnd, 0, s, 0, s, o.grain ?? 220, DARK, LIGHT, 0.18);
    for (let k = 0; k < (o.knots ?? 4); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.012 + rnd() * 0.02);
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.fillStyle = "rgba(74,60,44,0.45)";
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * 1.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(96,80,60,0.22)";
        ctx.lineWidth = 1;
        for (let q = 1; q <= 3; q++) {
          ctx.beginPath();
          ctx.ellipse(x + dx, y + dy, r * (1 + q * 0.6), r * (1.6 + q * 0.9), 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }
    for (let k = 0; k < (o.splits ?? 3); k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.2 + rnd() * 0.45);
      ctx.fillStyle = "rgba(58,48,36,0.42)";
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.4, len);
      ctx.fillStyle = "rgba(255,255,255,0.16)";
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.4, y + dy, 1, len);
    }
    const spots = [];
    for (let i = 0; i < (o.mould ?? 3); i++) spots.push([rnd() * s, rnd() * s]);
    mouldClusters(ctx, rnd, s, spots, s * 0.09, s * 0.07, 70, 0.24);
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
function createVetiverThatchCanopyModuleModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Vetiver Thatch Canopy Module";
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
      const g2 = new THREE.CylinderGeometry(cy.rt, cy.rb, cy.h, cy.seg ?? 12, 1, cy.open ?? false, cy.th0 ?? 0, cy.thLen ?? Math.PI * 2);
      if (cy.uvRep) {
        const uv = g2.getAttribute("uv");
        for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * cy.uvRep[0], uv.getY(i) * cy.uvRep[1]);
      }
      if (cy.sideUV) {
        const uv = g2.getAttribute("uv"), n = ((cy.seg ?? 12) + 1) * 2;
        for (let i = 0; i < n; i++) uv.setXY(i, cy.sideUV[0], cy.sideUV[1]);
      }
      if (cy.scale) {
        g2.scale(cy.scale[0], cy.scale[1], cy.scale[2]);
        g2.computeVertexNormals();
      }
      if (c.uv === "culm") culmUV(g2, cy.rt, cy.h, c.uvScale ?? 1, cy.vOff ?? 0);
      if (cy.rx) g2.rotateX(cy.rx);
      if (cy.ry) g2.rotateY(cy.ry);
      if (cy.rz) g2.rotateZ(cy.rz);
      g2.translate(cy.at[0], cy.at[1], cy.at[2]);
      gs.push(tintGeo(g2, cy.hex));
    }
    for (const l of c.lathes ?? []) {
      const g2 = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false);
      if (l.cylUV) {
        const cu = Array.isArray(l.cylUV) ? l.cylUV : [l.cylUV, l.cylUV, 0];
        latheUV(g2, g2.getAttribute("position").count / ((l.seg ?? 12) + 1) | 0, l.seg ?? 12, cu[0], cu[1], cu[2] ?? 0);
      }
      if (l.scale) {
        g2.scale(l.scale[0], l.scale[1], l.scale[2]);
        g2.computeVertexNormals();
      }
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
    for (const f of c.frusta ?? []) gs.push(tintGeo(frustum(f.slice(1)), f[0]));
    for (const s of c.spikes ?? []) gs.push(tintGeo(spike(s.at, s.w, s.h), s.hex));
    for (const s of c.sheets ?? []) gs.push(tintGeo(sheet(s), s.hex));
    for (const t of c.tubesAlong ?? []) {
      const g2 = tubeAlong(t.stations, t.seg ?? 12);
      if (t.ry) g2.rotateY(t.ry);
      if (t.at) g2.translate(t.at[0], t.at[1], t.at[2]);
      if (t.hexes) {
        const seg = t.seg ?? 12, n = t.stations.length;
        const col = new Float32Array(seg * n * 3);
        for (let i = 0; i < n; i++) {
          const e = t.hexes[Math.min(t.hexes.length - 1, i)];
          const d = new THREE.Color(Array.isArray(e) ? e[0] : e), v = new THREE.Color(Array.isArray(e) ? e[1] : e);
          for (let j = 0; j < seg; j++) {
            const f = (Math.sin(j * Math.PI * 2 / seg) + 1) / 2;
            const k = (i * seg + j) * 3;
            col[k] = d.r + (v.r - d.r) * f;
            col[k + 1] = d.g + (v.g - d.g) * f;
            col[k + 2] = d.b + (v.b - d.b) * f;
          }
        }
        g2.setAttribute("color", new THREE.BufferAttribute(col, 3));
        gs.push(g2);
      } else gs.push(tintGeo(g2, t.hex ?? 16777215));
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
    for (const f of r.frusta ?? []) gs.push(tintGeo(frustum(f.slice(1)), f[0]));
    for (const cy of r.cyls ?? []) {
      const g2 = new THREE.CylinderGeometry(
        cy.rt,
        cy.rb,
        cy.h,
        cy.seg ?? 12,
        1,
        cy.open ?? false,
        cy.th0 ?? 0,
        cy.thLen ?? Math.PI * 2
      );
      if (r.uv === "culm") culmUV(g2, cy.rt, cy.h, r.uvScale ?? 1, cy.vOff ?? 0);
      if (cy.rx) g2.rotateX(cy.rx);
      if (cy.ry) g2.rotateY(cy.ry);
      if (cy.rz) g2.rotateZ(cy.rz);
      g2.translate(cy.at[0], cy.at[1], cy.at[2]);
      gs.push(tintGeo(g2, cy.hex));
    }
    for (const l of r.lathes ?? []) {
      const g2 = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false);
      if (l.rx) g2.rotateX(l.rx);
      if (l.ry) g2.rotateY(l.ry);
      if (l.rz) g2.rotateZ(l.rz);
      if (l.at) g2.translate(l.at[0], l.at[1], l.at[2]);
      gs.push(tintGeo(g2, l.hex));
    }
    for (const s of r.spokes ?? []) {
      const g2 = spokes(s.rHub, s.rRim, s.halfW, s.n, s.hex, s.t ?? 6e-3, s.prism ?? false);
      if (s.rx) g2.rotateX(s.rx);
      if (s.ry) g2.rotateY(s.ry);
      if (s.rz) g2.rotateZ(s.rz);
      if (s.at) g2.translate(s.at[0], s.at[1], s.at[2]);
      gs.push(g2);
    }
    for (const t of r.tubes ?? []) gs.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
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
    if (t.kind === "pebble") tex = pebbleTile(t.size ?? 512, t.seed ?? 21, t);
    if (t.kind === "tread") tex = treadTile(t.size ?? 256, t.seed ?? 23, t);
    if (t.kind === "tyre") tex = tyreTile(t.size ?? 256, t.seed ?? 29, t);
    if (t.kind === "culm") tex = culmTile(t.size ?? 512, t.seed ?? 31);
    if (t.kind === "sawn") tex = sawnTile(t.size ?? 512, t.seed ?? 43, t);
    if (t.kind === "thatch") tex = thatchTile(t.size ?? 512, t.seed ?? 37, t);
    if (t.kind === "tarp") tex = tarpTile(t.size ?? 512, t.seed ?? 41, t);
    bindTile(mat, tex, t.bump ?? 0);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createVetiverThatchCanopyModuleModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogVmV0aXZlciBUaGF0Y2ggQ2Fub3B5IE1vZHVsZSAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyxcbiAqIGluc3RhbmNpbmcgYW5kIHRoZSBsYXRoZSBoZWxwZXJzIGJlbG93IGFyZSBoYW5kLXJvbGxlZCAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXNcbiAqIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSA0LjAwIHggMy4zMCB4IDQuMDAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgcmlkZ2UgYWxvbmcgWC5cbiAqIEJ1ZGdldCAobGFyZ2UpOiA8PTQwMDAgdHJpYW5nbGVzLCA8PTQgZHJhdyBjYWxscywgPD0zIG1hdGVyaWFscywgPD02IHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoYWlraXQncyBTVFJFRVQgQU5EIFZFTkRPUiBQUk9QUyAtLSBhIGNvbmUsIGEgYmFycmllciwgYSBjYXJ0LCBhIHN0b29sLiBUaGVcbiAqIHNoYXJlZCB2b2NhYnVsYXJ5IGlzIHRoZSBUSU5URUQgQk9YIGFuZCB0aGUgcG9seWxpbmUgVFVCRSBtZXJnZWQgaW50byBvbmUgZ2VvbWV0cnkgcGVyIG1hdGVyaWFsLFxuICogd2l0aCBldmVyeSBjb2xvdXIgZGlmZmVyZW5jZSBpbnNpZGUgYSBtYXRlcmlhbCBjYXJyaWVkIGFzIGEgdmVydGV4IGNvbG91ciBvbiBhIFdISVRFIG1hdGVyaWFsLFxuICogYW5kIHN1cmZhY2UgaWRlbnRpdHkgKGNvcnJ1Z2F0aW9uLCBncmltZSB3YXNoLCBtb3NzLCBwbGFuayBqb2ludHMsIHJ1c3QpIGRlbGl2ZXJlZCBhcyBPTkVcbiAqIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHBlciBtYXRlcmlhbCByYXRoZXIgdGhhbiBhcyBnZW9tZXRyeSBvciBhIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJ2ZXRpdmVyLXRoYXRjaC1jYW5vcHktbW9kdWxlXCIsXG4gICAgXCJuYW1lXCI6IFwiVmV0aXZlciBUaGF0Y2ggQ2Fub3B5IE1vZHVsZVwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIlZldGl2ZXJUaGF0Y2hDYW5vcHlNb2R1bGVcIixcbiAgICBcImVudmVsb3BlXCI6IFwiRW52ZWxvcGUgNC4wMCB4IDMuMzAgeCA0LjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsIHJpZGdlIGFsb25nIFguXFxuICogQnVkZ2V0IChsYXJnZSk6IDw9NDAwMCB0cmlhbmdsZXMsIDw9NCBkcmF3IGNhbGxzLCA8PTMgbWF0ZXJpYWxzLCA8PTYgdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwidGltYmVyXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTQ0NjkyODAsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODYsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJ0aGF0Y2hcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTA1MTQxNCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJ0aWxlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJ0aW1iZXJcIixcbiAgICAgICAgXCJraW5kXCI6IFwic2F3blwiLFxuICAgICAgICBcInNpemVcIjogNTEyLFxuICAgICAgICBcInNlZWRcIjogNjExLFxuICAgICAgICBcImdyYWluXCI6IDIwMCxcbiAgICAgICAgXCJrbm90c1wiOiAzLFxuICAgICAgICBcInNwbGl0c1wiOiAyLFxuICAgICAgICBcIm1vdWxkXCI6IDIsXG4gICAgICAgIFwid2VhdGhlclwiOiAxNlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcInRoYXRjaFwiLFxuICAgICAgICBcImtpbmRcIjogXCJ0aGF0Y2hcIixcbiAgICAgICAgXCJzaXplXCI6IDUxMixcbiAgICAgICAgXCJzZWVkXCI6IDYxMixcbiAgICAgICAgXCJjb3Vyc2VzXCI6IDcsXG4gICAgICAgIFwic3RlbXNcIjogNjIwLFxuICAgICAgICBcInN0ZW1XXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDJcbiAgICAgICAgXSxcbiAgICAgICAgXCJzcHJlYWRcIjogMC4xLFxuICAgICAgICBcInJhZ2dlZFwiOiAwLjA1LFxuICAgICAgICBcInNoYWRvd1wiOiAwLjM0LFxuICAgICAgICBcInRpcFwiOiAwLjMsXG4gICAgICAgIFwiZ2Fwc1wiOiAwLFxuICAgICAgICBcIm1vc3NcIjogOSxcbiAgICAgICAgXCJ3ZWF0aGVyXCI6IDE0XG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiY29tcG9uZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiZnJhbWVcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJUaW1iZXIgZnJhbWUsIHRydXNzIGFuZCBiYXJnZSBib2FyZHNcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwidGltYmVyXCIsXG4gICAgICAgICAgXCJ1dlwiOiBcIndvcmxkXCIsXG4gICAgICAgICAgXCJ1dlNjYWxlXCI6IDAuNixcbiAgICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTM4MTE2MTYsXG4gICAgICAgICAgICAgIC0xLjkwOCxcbiAgICAgICAgICAgICAgMC45ODUwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICAtMS45MDgsXG4gICAgICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgICAgIDEuOTcwMDAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgICAgMC4xNlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTM4MTE2MTYsXG4gICAgICAgICAgICAgIC0xLjkwOCxcbiAgICAgICAgICAgICAgMC45ODUwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICAxLjkwOCxcbiAgICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgICAgMS45NzAwMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgICAwLjE2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMzgxMTYxNixcbiAgICAgICAgICAgICAgMS45MDgsXG4gICAgICAgICAgICAgIDAuOTg1MDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgLTEuOTA4LFxuICAgICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgICAxLjk3MDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAgIDAuMTZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEzODExNjE2LFxuICAgICAgICAgICAgICAxLjkwOCxcbiAgICAgICAgICAgICAgMC45ODUwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICAxLjkwOCxcbiAgICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgICAgMS45NzAwMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgICAwLjE2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxNDczMzQ5MixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMi4wNTUsXG4gICAgICAgICAgICAgIC0xLjkyNSxcbiAgICAgICAgICAgICAgMy45OCxcbiAgICAgICAgICAgICAgMC4xNyxcbiAgICAgICAgICAgICAgMC4xM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTQ3MzM0OTIsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDIuMDU1LFxuICAgICAgICAgICAgICAxLjkyNSxcbiAgICAgICAgICAgICAgMy45OCxcbiAgICAgICAgICAgICAgMC4xNyxcbiAgICAgICAgICAgICAgMC4xM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTQ3MzM0OTIsXG4gICAgICAgICAgICAgIC0xLjkyNSxcbiAgICAgICAgICAgICAgMi4wNTUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMTMsXG4gICAgICAgICAgICAgIDAuMTcsXG4gICAgICAgICAgICAgIDMuNzE5OTk5OTk5OTk5OTk5OFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTQ3MzM0OTIsXG4gICAgICAgICAgICAgIDEuOTI1LFxuICAgICAgICAgICAgICAyLjA1NSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4xMyxcbiAgICAgICAgICAgICAgMC4xNyxcbiAgICAgICAgICAgICAgMy43MTk5OTk5OTk5OTk5OTk4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMjk1NTc5OCxcbiAgICAgICAgICAgICAgLTEuOTA4LFxuICAgICAgICAgICAgICAxLjczNjY1NDc2MjIwODQzOTYsXG4gICAgICAgICAgICAgIC0xLjY3NDY1NDc2MjIwODQzOTMsXG4gICAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAwLjY2LFxuICAgICAgICAgICAgICAtMC43ODUzOTgxNjMzOTc0NDgzLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMjk1NTc5OCxcbiAgICAgICAgICAgICAgLTEuNjc0NjU0NzYyMjA4NDM5MyxcbiAgICAgICAgICAgICAgMS43MzY2NTQ3NjIyMDg0Mzk2LFxuICAgICAgICAgICAgICAtMS45MDgsXG4gICAgICAgICAgICAgIDAuNjYsXG4gICAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjc4NTM5ODE2MzM5NzQ0ODNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEyOTU1Nzk4LFxuICAgICAgICAgICAgICAtMS45MDgsXG4gICAgICAgICAgICAgIDEuNzM2NjU0NzYyMjA4NDM5NixcbiAgICAgICAgICAgICAgMS42NzQ2NTQ3NjIyMDg0MzkzLFxuICAgICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgICAgMC42NixcbiAgICAgICAgICAgICAgMC43ODUzOTgxNjMzOTc0NDgzLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMjk1NTc5OCxcbiAgICAgICAgICAgICAgLTEuNjc0NjU0NzYyMjA4NDM5MyxcbiAgICAgICAgICAgICAgMS43MzY2NTQ3NjIyMDg0Mzk2LFxuICAgICAgICAgICAgICAxLjkwOCxcbiAgICAgICAgICAgICAgMC42NixcbiAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuNzg1Mzk4MTYzMzk3NDQ4M1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTI5NTU3OTgsXG4gICAgICAgICAgICAgIDEuOTA4LFxuICAgICAgICAgICAgICAxLjczNjY1NDc2MjIwODQzOTYsXG4gICAgICAgICAgICAgIC0xLjY3NDY1NDc2MjIwODQzOTMsXG4gICAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAwLjY2LFxuICAgICAgICAgICAgICAtMC43ODUzOTgxNjMzOTc0NDgzLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMjk1NTc5OCxcbiAgICAgICAgICAgICAgMS42NzQ2NTQ3NjIyMDg0MzkzLFxuICAgICAgICAgICAgICAxLjczNjY1NDc2MjIwODQzOTYsXG4gICAgICAgICAgICAgIC0xLjkwOCxcbiAgICAgICAgICAgICAgMC42NixcbiAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIC0wLjc4NTM5ODE2MzM5NzQ0ODNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEyOTU1Nzk4LFxuICAgICAgICAgICAgICAxLjkwOCxcbiAgICAgICAgICAgICAgMS43MzY2NTQ3NjIyMDg0Mzk2LFxuICAgICAgICAgICAgICAxLjY3NDY1NDc2MjIwODQzOTMsXG4gICAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAwLjY2LFxuICAgICAgICAgICAgICAwLjc4NTM5ODE2MzM5NzQ0ODMsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEyOTU1Nzk4LFxuICAgICAgICAgICAgICAxLjY3NDY1NDc2MjIwODQzOTMsXG4gICAgICAgICAgICAgIDEuNzM2NjU0NzYyMjA4NDM5NixcbiAgICAgICAgICAgICAgMS45MDgsXG4gICAgICAgICAgICAgIDAuNjYsXG4gICAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAtMC43ODUzOTgxNjMzOTc0NDgzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMzgxMTYxNixcbiAgICAgICAgICAgICAgLTEuOTA4LFxuICAgICAgICAgICAgICAyLjQzOTk5OTk5OTk5OTk5OTUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMTMsXG4gICAgICAgICAgICAgIDAuNTk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgMC4xM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTM4MTE2MTYsXG4gICAgICAgICAgICAgIDEuOTA4LFxuICAgICAgICAgICAgICAyLjQzOTk5OTk5OTk5OTk5OTUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMTMsXG4gICAgICAgICAgICAgIDAuNTk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgMC4xM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTQ3MzM0OTIsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDIuODE0OTk5OTk5OTk5OTk5NSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMy45OCxcbiAgICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgICAgMC4xNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTI5NTU3OTgsXG4gICAgICAgICAgICAgIC0xLjkwOCxcbiAgICAgICAgICAgICAgMi4zOTQ5OTk5OTk5OTk5OTk2LFxuICAgICAgICAgICAgICAtMSxcbiAgICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgICAgMC4xMSxcbiAgICAgICAgICAgICAgMi4wODYwMDA5MzYzMjkzODI4LFxuICAgICAgICAgICAgICAtMC4zNTg3NzA2NzAyNzA1NzIyLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMjk1NTc5OCxcbiAgICAgICAgICAgICAgLTEuOTA4LFxuICAgICAgICAgICAgICAyLjM5NDk5OTk5OTk5OTk5OTYsXG4gICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAgIDAuMTEsXG4gICAgICAgICAgICAgIDIuMDg2MDAwOTM2MzI5MzgyOCxcbiAgICAgICAgICAgICAgMC4zNTg3NzA2NzAyNzA1NzIyLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMjk1NTc5OCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMi4zOTQ5OTk5OTk5OTk5OTk2LFxuICAgICAgICAgICAgICAtMSxcbiAgICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgICAgMC4xMSxcbiAgICAgICAgICAgICAgMi4wODYwMDA5MzYzMjkzODI4LFxuICAgICAgICAgICAgICAtMC4zNTg3NzA2NzAyNzA1NzIyLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMjk1NTc5OCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMi4zOTQ5OTk5OTk5OTk5OTk2LFxuICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgICAwLjExLFxuICAgICAgICAgICAgICAyLjA4NjAwMDkzNjMyOTM4MjgsXG4gICAgICAgICAgICAgIDAuMzU4NzcwNjcwMjcwNTcyMixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTI5NTU3OTgsXG4gICAgICAgICAgICAgIDEuOTA4LFxuICAgICAgICAgICAgICAyLjM5NDk5OTk5OTk5OTk5OTYsXG4gICAgICAgICAgICAgIC0xLFxuICAgICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgICAwLjExLFxuICAgICAgICAgICAgICAyLjA4NjAwMDkzNjMyOTM4MjgsXG4gICAgICAgICAgICAgIC0wLjM1ODc3MDY3MDI3MDU3MjIsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEyOTU1Nzk4LFxuICAgICAgICAgICAgICAxLjkwOCxcbiAgICAgICAgICAgICAgMi4zOTQ5OTk5OTk5OTk5OTk2LFxuICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgICAwLjExLFxuICAgICAgICAgICAgICAyLjA4NjAwMDkzNjMyOTM4MjgsXG4gICAgICAgICAgICAgIDAuMzU4NzcwNjcwMjcwNTcyMixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTUzOTIxOTgsXG4gICAgICAgICAgICAgIC0xLjk0LFxuICAgICAgICAgICAgICAyLjgxNSxcbiAgICAgICAgICAgICAgLTAuOTksXG4gICAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgICAgMC4xNyxcbiAgICAgICAgICAgICAgMi4wODYwMDA5MzYzMjkzODI4LFxuICAgICAgICAgICAgICAtMC4zNTg3NzA2NzAyNzA1NzIyLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxNTM5MjE5OCxcbiAgICAgICAgICAgICAgLTEuOTQsXG4gICAgICAgICAgICAgIDIuODE1LFxuICAgICAgICAgICAgICAwLjk5LFxuICAgICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAgIDAuMTcsXG4gICAgICAgICAgICAgIDIuMDg2MDAwOTM2MzI5MzgyOCxcbiAgICAgICAgICAgICAgMC4zNTg3NzA2NzAyNzA1NzIyLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxNTM5MjE5OCxcbiAgICAgICAgICAgICAgMS45NCxcbiAgICAgICAgICAgICAgMi44MTUsXG4gICAgICAgICAgICAgIC0wLjk5LFxuICAgICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAgIDAuMTcsXG4gICAgICAgICAgICAgIDIuMDg2MDAwOTM2MzI5MzgyOCxcbiAgICAgICAgICAgICAgLTAuMzU4NzcwNjcwMjcwNTcyMixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTUzOTIxOTgsXG4gICAgICAgICAgICAgIDEuOTQsXG4gICAgICAgICAgICAgIDIuODE1LFxuICAgICAgICAgICAgICAwLjk5LFxuICAgICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAgIDAuMTcsXG4gICAgICAgICAgICAgIDIuMDg2MDAwOTM2MzI5MzgyOCxcbiAgICAgICAgICAgICAgMC4zNTg3NzA2NzAyNzA1NzIyLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMDEyNTQwMCxcbiAgICAgICAgICAgICAgLTEuOTA4LFxuICAgICAgICAgICAgICAxLjkwMDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIC0xLjkwOCxcbiAgICAgICAgICAgICAgMC4xOCxcbiAgICAgICAgICAgICAgMC4wOCxcbiAgICAgICAgICAgICAgMC4xOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTAxMjU0MDAsXG4gICAgICAgICAgICAgIC0xLjkwOCxcbiAgICAgICAgICAgICAgMS43NyxcbiAgICAgICAgICAgICAgLTEuOTA4LFxuICAgICAgICAgICAgICAwLjE4LFxuICAgICAgICAgICAgICAwLjA1LFxuICAgICAgICAgICAgICAwLjE4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMDEyNTQwMCxcbiAgICAgICAgICAgICAgLTEuOTA4LFxuICAgICAgICAgICAgICAxLjkwMDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIDEuOTA4LFxuICAgICAgICAgICAgICAwLjE4LFxuICAgICAgICAgICAgICAwLjA4LFxuICAgICAgICAgICAgICAwLjE4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMDEyNTQwMCxcbiAgICAgICAgICAgICAgLTEuOTA4LFxuICAgICAgICAgICAgICAxLjc3LFxuICAgICAgICAgICAgICAxLjkwOCxcbiAgICAgICAgICAgICAgMC4xOCxcbiAgICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgICAgMC4xOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTAxMjU0MDAsXG4gICAgICAgICAgICAgIDEuOTA4LFxuICAgICAgICAgICAgICAxLjkwMDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIC0xLjkwOCxcbiAgICAgICAgICAgICAgMC4xOCxcbiAgICAgICAgICAgICAgMC4wOCxcbiAgICAgICAgICAgICAgMC4xOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTAxMjU0MDAsXG4gICAgICAgICAgICAgIDEuOTA4LFxuICAgICAgICAgICAgICAxLjc3LFxuICAgICAgICAgICAgICAtMS45MDgsXG4gICAgICAgICAgICAgIDAuMTgsXG4gICAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAgIDAuMThcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEwMTI1NDAwLFxuICAgICAgICAgICAgICAxLjkwOCxcbiAgICAgICAgICAgICAgMS45MDAwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICAxLjkwOCxcbiAgICAgICAgICAgICAgMC4xOCxcbiAgICAgICAgICAgICAgMC4wOCxcbiAgICAgICAgICAgICAgMC4xOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTAxMjU0MDAsXG4gICAgICAgICAgICAgIDEuOTA4LFxuICAgICAgICAgICAgICAxLjc3LFxuICAgICAgICAgICAgICAxLjkwOCxcbiAgICAgICAgICAgICAgMC4xOCxcbiAgICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgICAgMC4xOFxuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJ0aGF0Y2hcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJWZXRpdmVyIGdyYXNzIHRoYXRjaCByb29mIHdpdGggYm91bmQgcmlkZ2VcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwidGhhdGNoXCIsXG4gICAgICAgICAgXCJ1dlwiOiBcIndvcmxkXCIsXG4gICAgICAgICAgXCJ1dlNjYWxlXCI6IDEuNyxcbiAgICAgICAgICBcInNoZWV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE2Nzc3MjE1LFxuICAgICAgICAgICAgICBcIngwXCI6IC0xLjg4LFxuICAgICAgICAgICAgICBcIngxXCI6IDEuODgsXG4gICAgICAgICAgICAgIFwiejBcIjogLTIsXG4gICAgICAgICAgICAgIFwiejFcIjogMixcbiAgICAgICAgICAgICAgXCJueFwiOiAxOCxcbiAgICAgICAgICAgICAgXCJuelwiOiAxNCxcbiAgICAgICAgICAgICAgXCJ0XCI6IDAuMjYsXG4gICAgICAgICAgICAgIFwiaGVpZ2h0c1wiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMi4zODgwMjIyMDI3NjU1NjksXG4gICAgICAgICAgICAgICAgICAyLjM5NTI1NDk2MDI0ODcxMjUsXG4gICAgICAgICAgICAgICAgICAyLjM1MDkwNDU4OTQ0OTA1NTIsXG4gICAgICAgICAgICAgICAgICAyLjM5OTk0OTI5MDQ1MjA1OSxcbiAgICAgICAgICAgICAgICAgIDIuMzgwODg2MzE1NDYxMjQ4LFxuICAgICAgICAgICAgICAgICAgMi4zODI0Mzk3MzU0NTAzMTYsXG4gICAgICAgICAgICAgICAgICAyLjM4ODg0NzAzODk2NDc0MSxcbiAgICAgICAgICAgICAgICAgIDIuMzU1NzI5Mzg2NzU3NTkzNyxcbiAgICAgICAgICAgICAgICAgIDIuMzk1Njg5Mjg0ODQ4MDQ5LFxuICAgICAgICAgICAgICAgICAgMi4zOTUwNTgzMDA1OTA2MDgsXG4gICAgICAgICAgICAgICAgICAyLjM1NTk4NzE4MzU4NjY5NCxcbiAgICAgICAgICAgICAgICAgIDIuMzU0OTU2MjQzNjg3Nzc1LFxuICAgICAgICAgICAgICAgICAgMi4zNzk3MjA5OTUwMTYzOTYsXG4gICAgICAgICAgICAgICAgICAyLjM3NzQyNjI2Nzk4NTcyLFxuICAgICAgICAgICAgICAgICAgMi4zOTY5MTU1MzIyNTI3NTEsXG4gICAgICAgICAgICAgICAgICAyLjM2NDUxOTYxMjIwMDA5MjQsXG4gICAgICAgICAgICAgICAgICAyLjM5NTY5Mzk2MDM2Njc3MDYsXG4gICAgICAgICAgICAgICAgICAyLjM3NzU3NjEwMDIzMjU0NTMsXG4gICAgICAgICAgICAgICAgICAyLjM5NjQzNjE3ODgwMDY1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAyLjUyNjk3OTQ2NjYzMzUyMDYsXG4gICAgICAgICAgICAgICAgICAyLjUyOTQxMTE1NjM3MTMzODYsXG4gICAgICAgICAgICAgICAgICAyLjUxNDUwMDMzNjg0MDQzMjQsXG4gICAgICAgICAgICAgICAgICAyLjUzMDk4OTQxMzk4NzE5NDcsXG4gICAgICAgICAgICAgICAgICAyLjUyNDU4MDM0NTE0MDk3OTYsXG4gICAgICAgICAgICAgICAgICAyLjUyNTEwMjYxMjgxNzU1MjcsXG4gICAgICAgICAgICAgICAgICAyLjUyNzI1Njc4MDc0NTgxODYsXG4gICAgICAgICAgICAgICAgICAyLjUxNjEyMjQ1ODE1ODU1NTcsXG4gICAgICAgICAgICAgICAgICAyLjUyOTU1NzE3ODUwMzc3NixcbiAgICAgICAgICAgICAgICAgIDIuNTI5MzQ1MDM4Mzk3MTY4LFxuICAgICAgICAgICAgICAgICAgMi41MTYyMDkxMzA3NTk1OTczLFxuICAgICAgICAgICAgICAgICAgMi41MTU4NjI1MjM1Mzg0NDQsXG4gICAgICAgICAgICAgICAgICAyLjUyNDE4ODU1ODQ5ODkzODgsXG4gICAgICAgICAgICAgICAgICAyLjUyMzQxNzA1OTYzNjM1NDgsXG4gICAgICAgICAgICAgICAgICAyLjUyOTk2OTQ0OTA5ODYzNCxcbiAgICAgICAgICAgICAgICAgIDIuNTE5MDc3Nzc2NTIxMDgyMyxcbiAgICAgICAgICAgICAgICAgIDIuNTI5NTU4NzUwNDM2ODc2LFxuICAgICAgICAgICAgICAgICAgMi41MjM0Njc0MzM5OTc0MjY2LFxuICAgICAgICAgICAgICAgICAgMi41Mjk4MDgyODgwMzc1ODk0XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAyLjY1Njk4MTEwMTIyNzAzMjYsXG4gICAgICAgICAgICAgICAgICAyLjY1NzE2NTQ4MjY1ODUyODMsXG4gICAgICAgICAgICAgICAgICAyLjY1NjAzNDg3ODYxNTEyMixcbiAgICAgICAgICAgICAgICAgIDIuNjU3Mjg1MTUzMTA1NzcxNSxcbiAgICAgICAgICAgICAgICAgIDIuNjU2Nzk5MTg5MjYzNDA5NyxcbiAgICAgICAgICAgICAgICAgIDIuNjU2ODM4Nzg5OTAwMDkxNixcbiAgICAgICAgICAgICAgICAgIDIuNjU3MDAyMTI4NDA1MDQ5NixcbiAgICAgICAgICAgICAgICAgIDIuNjU2MTU3ODc1MDAxNTYyNixcbiAgICAgICAgICAgICAgICAgIDIuNjU3MTc2NTU0NzAwMDc2MyxcbiAgICAgICAgICAgICAgICAgIDIuNjU3MTYwNDY5MzAyMzY4NyxcbiAgICAgICAgICAgICAgICAgIDIuNjU2MTY0NDQ2OTAwMTA4LFxuICAgICAgICAgICAgICAgICAgMi42NTYxMzgxNjU2MTMyMjgsXG4gICAgICAgICAgICAgICAgICAyLjY1Njc2OTQ4MjI3Mzc0ODcsXG4gICAgICAgICAgICAgICAgICAyLjY1NjcxMDk4MzgzMDI3MixcbiAgICAgICAgICAgICAgICAgIDIuNjU3MjA3ODE0ODczMzA1NCxcbiAgICAgICAgICAgICAgICAgIDIuNjU2MzgxOTYwMjYyODI1NCxcbiAgICAgICAgICAgICAgICAgIDIuNjU3MTc2NjczODkwOTcxLFxuICAgICAgICAgICAgICAgICAgMi42NTY3MTQ4MDM0MzYzMSxcbiAgICAgICAgICAgICAgICAgIDIuNjU3MTk1NTk0OTMxNDc4NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMi43NzUwNDk2MDY1OTg1NzIsXG4gICAgICAgICAgICAgICAgICAyLjc3NTA0OTYwNjU5ODU3MixcbiAgICAgICAgICAgICAgICAgIDIuNzc1MDQ5NjA2NTk4NTcyLFxuICAgICAgICAgICAgICAgICAgMi43NzUwNDk2MDY1OTg1NzIsXG4gICAgICAgICAgICAgICAgICAyLjc3NTA0OTYwNjU5ODU3MixcbiAgICAgICAgICAgICAgICAgIDIuNzc1MDQ5NjA2NTk4NTcyLFxuICAgICAgICAgICAgICAgICAgMi43NzUwNDk2MDY1OTg1NzIsXG4gICAgICAgICAgICAgICAgICAyLjc3NTA0OTYwNjU5ODU3MixcbiAgICAgICAgICAgICAgICAgIDIuNzc1MDQ5NjA2NTk4NTcyLFxuICAgICAgICAgICAgICAgICAgMi43NzUwNDk2MDY1OTg1NzIsXG4gICAgICAgICAgICAgICAgICAyLjc3NTA0OTYwNjU5ODU3MixcbiAgICAgICAgICAgICAgICAgIDIuNzc1MDQ5NjA2NTk4NTcyLFxuICAgICAgICAgICAgICAgICAgMi43NzUwNDk2MDY1OTg1NzIsXG4gICAgICAgICAgICAgICAgICAyLjc3NTA0OTYwNjU5ODU3MixcbiAgICAgICAgICAgICAgICAgIDIuNzc1MDQ5NjA2NTk4NTcyLFxuICAgICAgICAgICAgICAgICAgMi43NzUwNDk2MDY1OTg1NzIsXG4gICAgICAgICAgICAgICAgICAyLjc3NTA0OTYwNjU5ODU3MixcbiAgICAgICAgICAgICAgICAgIDIuNzc1MDQ5NjA2NTk4NTcyLFxuICAgICAgICAgICAgICAgICAgMi43NzUwNDk2MDY1OTg1NzJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4NyxcbiAgICAgICAgICAgICAgICAgIDIuODgyMTkyNDYzNzQxNDI4N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMi45Nzg3MTUwMTcyNTAwMjcsXG4gICAgICAgICAgICAgICAgICAyLjk3ODcxNTAxNzI1MDAyNyxcbiAgICAgICAgICAgICAgICAgIDIuOTc4NzE1MDE3MjUwMDI3LFxuICAgICAgICAgICAgICAgICAgMi45Nzg3MTUwMTcyNTAwMjcsXG4gICAgICAgICAgICAgICAgICAyLjk3ODcxNTAxNzI1MDAyNyxcbiAgICAgICAgICAgICAgICAgIDIuOTc4NzE1MDE3MjUwMDI3LFxuICAgICAgICAgICAgICAgICAgMi45Nzg3MTUwMTcyNTAwMjcsXG4gICAgICAgICAgICAgICAgICAyLjk3ODcxNTAxNzI1MDAyNyxcbiAgICAgICAgICAgICAgICAgIDIuOTc4NzE1MDE3MjUwMDI3LFxuICAgICAgICAgICAgICAgICAgMi45Nzg3MTUwMTcyNTAwMjcsXG4gICAgICAgICAgICAgICAgICAyLjk3ODcxNTAxNzI1MDAyNyxcbiAgICAgICAgICAgICAgICAgIDIuOTc4NzE1MDE3MjUwMDI3LFxuICAgICAgICAgICAgICAgICAgMi45Nzg3MTUwMTcyNTAwMjcsXG4gICAgICAgICAgICAgICAgICAyLjk3ODcxNTAxNzI1MDAyNyxcbiAgICAgICAgICAgICAgICAgIDIuOTc4NzE1MDE3MjUwMDI3LFxuICAgICAgICAgICAgICAgICAgMi45Nzg3MTUwMTcyNTAwMjcsXG4gICAgICAgICAgICAgICAgICAyLjk3ODcxNTAxNzI1MDAyNyxcbiAgICAgICAgICAgICAgICAgIDIuOTc4NzE1MDE3MjUwMDI3LFxuICAgICAgICAgICAgICAgICAgMi45Nzg3MTUwMTcyNTAwMjdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NSxcbiAgICAgICAgICAgICAgICAgIDMuMDY2NzIwNzQ4NTA4NjA4NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMy4xNSxcbiAgICAgICAgICAgICAgICAgIDMuMTUsXG4gICAgICAgICAgICAgICAgICAzLjE1LFxuICAgICAgICAgICAgICAgICAgMy4xNSxcbiAgICAgICAgICAgICAgICAgIDMuMTUsXG4gICAgICAgICAgICAgICAgICAzLjE1LFxuICAgICAgICAgICAgICAgICAgMy4xNSxcbiAgICAgICAgICAgICAgICAgIDMuMTUsXG4gICAgICAgICAgICAgICAgICAzLjE1LFxuICAgICAgICAgICAgICAgICAgMy4xNSxcbiAgICAgICAgICAgICAgICAgIDMuMTUsXG4gICAgICAgICAgICAgICAgICAzLjE1LFxuICAgICAgICAgICAgICAgICAgMy4xNSxcbiAgICAgICAgICAgICAgICAgIDMuMTUsXG4gICAgICAgICAgICAgICAgICAzLjE1LFxuICAgICAgICAgICAgICAgICAgMy4xNSxcbiAgICAgICAgICAgICAgICAgIDMuMTUsXG4gICAgICAgICAgICAgICAgICAzLjE1LFxuICAgICAgICAgICAgICAgICAgMy4xNVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1LFxuICAgICAgICAgICAgICAgICAgMy4wNjY3MjA3NDg1MDg2MDg1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAyLjk3ODcxNTAxNzI1MDAyNyxcbiAgICAgICAgICAgICAgICAgIDIuOTc4NzE1MDE3MjUwMDI3LFxuICAgICAgICAgICAgICAgICAgMi45Nzg3MTUwMTcyNTAwMjcsXG4gICAgICAgICAgICAgICAgICAyLjk3ODcxNTAxNzI1MDAyNyxcbiAgICAgICAgICAgICAgICAgIDIuOTc4NzE1MDE3MjUwMDI3LFxuICAgICAgICAgICAgICAgICAgMi45Nzg3MTUwMTcyNTAwMjcsXG4gICAgICAgICAgICAgICAgICAyLjk3ODcxNTAxNzI1MDAyNyxcbiAgICAgICAgICAgICAgICAgIDIuOTc4NzE1MDE3MjUwMDI3LFxuICAgICAgICAgICAgICAgICAgMi45Nzg3MTUwMTcyNTAwMjcsXG4gICAgICAgICAgICAgICAgICAyLjk3ODcxNTAxNzI1MDAyNyxcbiAgICAgICAgICAgICAgICAgIDIuOTc4NzE1MDE3MjUwMDI3LFxuICAgICAgICAgICAgICAgICAgMi45Nzg3MTUwMTcyNTAwMjcsXG4gICAgICAgICAgICAgICAgICAyLjk3ODcxNTAxNzI1MDAyNyxcbiAgICAgICAgICAgICAgICAgIDIuOTc4NzE1MDE3MjUwMDI3LFxuICAgICAgICAgICAgICAgICAgMi45Nzg3MTUwMTcyNTAwMjcsXG4gICAgICAgICAgICAgICAgICAyLjk3ODcxNTAxNzI1MDAyNyxcbiAgICAgICAgICAgICAgICAgIDIuOTc4NzE1MDE3MjUwMDI3LFxuICAgICAgICAgICAgICAgICAgMi45Nzg3MTUwMTcyNTAwMjcsXG4gICAgICAgICAgICAgICAgICAyLjk3ODcxNTAxNzI1MDAyN1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3LFxuICAgICAgICAgICAgICAgICAgMi44ODIxOTI0NjM3NDE0Mjg3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAyLjc3NTA0OTYwNjU5ODU3MixcbiAgICAgICAgICAgICAgICAgIDIuNzc1MDQ5NjA2NTk4NTcyLFxuICAgICAgICAgICAgICAgICAgMi43NzUwNDk2MDY1OTg1NzIsXG4gICAgICAgICAgICAgICAgICAyLjc3NTA0OTYwNjU5ODU3MixcbiAgICAgICAgICAgICAgICAgIDIuNzc1MDQ5NjA2NTk4NTcyLFxuICAgICAgICAgICAgICAgICAgMi43NzUwNDk2MDY1OTg1NzIsXG4gICAgICAgICAgICAgICAgICAyLjc3NTA0OTYwNjU5ODU3MixcbiAgICAgICAgICAgICAgICAgIDIuNzc1MDQ5NjA2NTk4NTcyLFxuICAgICAgICAgICAgICAgICAgMi43NzUwNDk2MDY1OTg1NzIsXG4gICAgICAgICAgICAgICAgICAyLjc3NTA0OTYwNjU5ODU3MixcbiAgICAgICAgICAgICAgICAgIDIuNzc1MDQ5NjA2NTk4NTcyLFxuICAgICAgICAgICAgICAgICAgMi43NzUwNDk2MDY1OTg1NzIsXG4gICAgICAgICAgICAgICAgICAyLjc3NTA0OTYwNjU5ODU3MixcbiAgICAgICAgICAgICAgICAgIDIuNzc1MDQ5NjA2NTk4NTcyLFxuICAgICAgICAgICAgICAgICAgMi43NzUwNDk2MDY1OTg1NzIsXG4gICAgICAgICAgICAgICAgICAyLjc3NTA0OTYwNjU5ODU3MixcbiAgICAgICAgICAgICAgICAgIDIuNzc1MDQ5NjA2NTk4NTcyLFxuICAgICAgICAgICAgICAgICAgMi43NzUwNDk2MDY1OTg1NzIsXG4gICAgICAgICAgICAgICAgICAyLjc3NTA0OTYwNjU5ODU3MlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMi42NTY5ODExMDEyMjcwMzI2LFxuICAgICAgICAgICAgICAgICAgMi42NTcxNjU0ODI2NTg1MjgzLFxuICAgICAgICAgICAgICAgICAgMi42NTYwMzQ4Nzg2MTUxMjIsXG4gICAgICAgICAgICAgICAgICAyLjY1NzI4NTE1MzEwNTc3MTUsXG4gICAgICAgICAgICAgICAgICAyLjY1Njc5OTE4OTI2MzQwOTcsXG4gICAgICAgICAgICAgICAgICAyLjY1NjgzODc4OTkwMDA5MTYsXG4gICAgICAgICAgICAgICAgICAyLjY1NzAwMjEyODQwNTA0OTYsXG4gICAgICAgICAgICAgICAgICAyLjY1NjE1Nzg3NTAwMTU2MjYsXG4gICAgICAgICAgICAgICAgICAyLjY1NzE3NjU1NDcwMDA3NjMsXG4gICAgICAgICAgICAgICAgICAyLjY1NzE2MDQ2OTMwMjM2ODcsXG4gICAgICAgICAgICAgICAgICAyLjY1NjE2NDQ0NjkwMDEwOCxcbiAgICAgICAgICAgICAgICAgIDIuNjU2MTM4MTY1NjEzMjI4LFxuICAgICAgICAgICAgICAgICAgMi42NTY3Njk0ODIyNzM3NDg3LFxuICAgICAgICAgICAgICAgICAgMi42NTY3MTA5ODM4MzAyNzIsXG4gICAgICAgICAgICAgICAgICAyLjY1NzIwNzgxNDg3MzMwNTQsXG4gICAgICAgICAgICAgICAgICAyLjY1NjM4MTk2MDI2MjgyNTQsXG4gICAgICAgICAgICAgICAgICAyLjY1NzE3NjY3Mzg5MDk3MSxcbiAgICAgICAgICAgICAgICAgIDIuNjU2NzE0ODAzNDM2MzEsXG4gICAgICAgICAgICAgICAgICAyLjY1NzE5NTU5NDkzMTQ3ODVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDIuNTI2OTc5NDY2NjMzNTIwNixcbiAgICAgICAgICAgICAgICAgIDIuNTI5NDExMTU2MzcxMzM4NixcbiAgICAgICAgICAgICAgICAgIDIuNTE0NTAwMzM2ODQwNDMyNCxcbiAgICAgICAgICAgICAgICAgIDIuNTMwOTg5NDEzOTg3MTk0NyxcbiAgICAgICAgICAgICAgICAgIDIuNTI0NTgwMzQ1MTQwOTc5NixcbiAgICAgICAgICAgICAgICAgIDIuNTI1MTAyNjEyODE3NTUyNyxcbiAgICAgICAgICAgICAgICAgIDIuNTI3MjU2NzgwNzQ1ODE4NixcbiAgICAgICAgICAgICAgICAgIDIuNTE2MTIyNDU4MTU4NTU1NyxcbiAgICAgICAgICAgICAgICAgIDIuNTI5NTU3MTc4NTAzNzc2LFxuICAgICAgICAgICAgICAgICAgMi41MjkzNDUwMzgzOTcxNjgsXG4gICAgICAgICAgICAgICAgICAyLjUxNjIwOTEzMDc1OTU5NzMsXG4gICAgICAgICAgICAgICAgICAyLjUxNTg2MjUyMzUzODQ0NCxcbiAgICAgICAgICAgICAgICAgIDIuNTI0MTg4NTU4NDk4OTM4OCxcbiAgICAgICAgICAgICAgICAgIDIuNTIzNDE3MDU5NjM2MzU0OCxcbiAgICAgICAgICAgICAgICAgIDIuNTI5OTY5NDQ5MDk4NjM0LFxuICAgICAgICAgICAgICAgICAgMi41MTkwNzc3NzY1MjEwODIzLFxuICAgICAgICAgICAgICAgICAgMi41Mjk1NTg3NTA0MzY4NzYsXG4gICAgICAgICAgICAgICAgICAyLjUyMzQ2NzQzMzk5NzQyNjYsXG4gICAgICAgICAgICAgICAgICAyLjUyOTgwODI4ODAzNzU4OTRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDIuMzg4MDIyMjAyNzY1NTY5LFxuICAgICAgICAgICAgICAgICAgMi4zOTUyNTQ5NjAyNDg3MTI1LFxuICAgICAgICAgICAgICAgICAgMi4zNTA5MDQ1ODk0NDkwNTUyLFxuICAgICAgICAgICAgICAgICAgMi4zOTk5NDkyOTA0NTIwNTksXG4gICAgICAgICAgICAgICAgICAyLjM4MDg4NjMxNTQ2MTI0OCxcbiAgICAgICAgICAgICAgICAgIDIuMzgyNDM5NzM1NDUwMzE2LFxuICAgICAgICAgICAgICAgICAgMi4zODg4NDcwMzg5NjQ3NDEsXG4gICAgICAgICAgICAgICAgICAyLjM1NTcyOTM4Njc1NzU5MzcsXG4gICAgICAgICAgICAgICAgICAyLjM5NTY4OTI4NDg0ODA0OSxcbiAgICAgICAgICAgICAgICAgIDIuMzk1MDU4MzAwNTkwNjA4LFxuICAgICAgICAgICAgICAgICAgMi4zNTU5ODcxODM1ODY2OTQsXG4gICAgICAgICAgICAgICAgICAyLjM1NDk1NjI0MzY4Nzc3NSxcbiAgICAgICAgICAgICAgICAgIDIuMzc5NzIwOTk1MDE2Mzk2LFxuICAgICAgICAgICAgICAgICAgMi4zNzc0MjYyNjc5ODU3MixcbiAgICAgICAgICAgICAgICAgIDIuMzk2OTE1NTMyMjUyNzUxLFxuICAgICAgICAgICAgICAgICAgMi4zNjQ1MTk2MTIyMDAwOTI0LFxuICAgICAgICAgICAgICAgICAgMi4zOTU2OTM5NjAzNjY3NzA2LFxuICAgICAgICAgICAgICAgICAgMi4zNzc1NzYxMDAyMzI1NDUzLFxuICAgICAgICAgICAgICAgICAgMi4zOTY0MzYxNzg4MDA2NVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjeWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAzLjE0MixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4xNSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjE1LFxuICAgICAgICAgICAgICBcImhcIjogMy43NixcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTIsXG4gICAgICAgICAgICAgIFwicnpcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcImhleFwiOiAxNjc3NzIxNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTEuNSxcbiAgICAgICAgICAgICAgICAzLjE0MixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4xNTgsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4xNTgsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwib3BlblwiOiB0cnVlLFxuICAgICAgICAgICAgICBcInJ6XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgICAgXCJ0aDBcIjogMC40NzEyMzg4OTgwMzg0Njg5NyxcbiAgICAgICAgICAgICAgXCJ0aExlblwiOiAyLjE5OTExNDg1NzUxMjg1NSxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTAxMjU0MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgICAgICAgIDMuMTQyLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjE1OCxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjE1OCxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDQ1LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJvcGVuXCI6IHRydWUsXG4gICAgICAgICAgICAgIFwicnpcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcInRoMFwiOiAwLjQ3MTIzODg5ODAzODQ2ODk3LFxuICAgICAgICAgICAgICBcInRoTGVuXCI6IDIuMTk5MTE0ODU3NTEyODU1LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMDEyNTQwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTAuNSxcbiAgICAgICAgICAgICAgICAzLjE0MixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4xNTgsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4xNTgsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwib3BlblwiOiB0cnVlLFxuICAgICAgICAgICAgICBcInJ6XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgICAgXCJ0aDBcIjogMC40NzEyMzg4OTgwMzg0Njg5NyxcbiAgICAgICAgICAgICAgXCJ0aExlblwiOiAyLjE5OTExNDg1NzUxMjg1NSxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTAxMjU0MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMy4xNDIsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMTU4LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMTU4LFxuICAgICAgICAgICAgICBcImhcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICAgIFwidGgwXCI6IDAuNDcxMjM4ODk4MDM4NDY4OTcsXG4gICAgICAgICAgICAgIFwidGhMZW5cIjogMi4xOTkxMTQ4NTc1MTI4NTUsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEwMTI1NDAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAgICAgMy4xNDIsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMTU4LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMTU4LFxuICAgICAgICAgICAgICBcImhcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICAgIFwidGgwXCI6IDAuNDcxMjM4ODk4MDM4NDY4OTcsXG4gICAgICAgICAgICAgIFwidGhMZW5cIjogMi4xOTkxMTQ4NTc1MTI4NTUsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEwMTI1NDAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgIDMuMTQyLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjE1OCxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjE1OCxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDQ1LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJvcGVuXCI6IHRydWUsXG4gICAgICAgICAgICAgIFwicnpcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcInRoMFwiOiAwLjQ3MTIzODg5ODAzODQ2ODk3LFxuICAgICAgICAgICAgICBcInRoTGVuXCI6IDIuMTk5MTE0ODU3NTEyODU1LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMDEyNTQwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS41LFxuICAgICAgICAgICAgICAgIDMuMTQyLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjE1OCxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjE1OCxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDQ1LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJvcGVuXCI6IHRydWUsXG4gICAgICAgICAgICAgIFwicnpcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcInRoMFwiOiAwLjQ3MTIzODg5ODAzODQ2ODk3LFxuICAgICAgICAgICAgICBcInRoTGVuXCI6IDIuMTk5MTE0ODU3NTEyODU1LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMDEyNTQwMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdGFuY2VkXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJwdXJsaW5zXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUm9vZiBwdXJsaW5zXCIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcInRpbWJlclwiLFxuICAgICAgICAgIFwidXZcIjogXCJ3b3JsZFwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAwLjYsXG4gICAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEyOTU1Nzk4LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAzLjY5OTk5OTk5OTk5OTk5OTcsXG4gICAgICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgICAgIDAuMDdcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwicGxhY2VtZW50c1wiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDIuNjQzNzUsXG4gICAgICAgICAgICAgIC0wLjU1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAyLjY0Mzc1LFxuICAgICAgICAgICAgICAwLjU1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAyLjQzNzQ5OTk5OTk5OTk5OTYsXG4gICAgICAgICAgICAgIC0xLjFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDIuNDM3NDk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgMS4xXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAyLjI0OTk5OTk5OTk5OTk5OTYsXG4gICAgICAgICAgICAgIC0xLjZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDIuMjQ5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgMS42XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAyLjE0NDk5OTk5OTk5OTk5OTYsXG4gICAgICAgICAgICAgIC0xLjg4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAyLjE0NDk5OTk5OTk5OTk5OTYsXG4gICAgICAgICAgICAgIDEuODhcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICAvLyBDT0xPUiBoYXMgdG8gYmUgY2FycmllZCB0b28sIGFuZCBpdCBpcyBlYXN5IHRvIGZvcmdldDogdGhpcyBmdW5jdGlvbiBjb3BpZWQgcG9zaXRpb24sIG5vcm1hbFxuICAvLyBhbmQgdXYgb25seSwgYW5kIHRoZSBtb3NxdWUncyByaWJiZWQgZG9tZXMgbG9zdCB0aGVpciBncmVlbi1hbmQtcGFsZSBzdHJpcGluZyB0aGUgbW9tZW50IHRoZXlcbiAgLy8gd2VyZSBtZXJnZWQgd2l0aCBhbnl0aGluZy4gVGhlIGZhaWx1cmUgaXMgc2lsZW50IC0tIHRoZSBkb21lIHJlbmRlcnMsIGluIG9uZSBmbGF0IGNvbG91ciAtLSBhbmRcbiAgLy8gdG9vayBhIHdyb25nIHRoZW9yeSBhYm91dCBzUkdCIGdhbW1hIGJlZm9yZSB0aGUgYXR0cmlidXRlIGxpc3Qgd2FzIHJlYWQuIEFueSBpbnB1dCBjYXJyeWluZyBhXG4gIC8vIGNvbG91ciBtZWFucyBldmVyeSBpbnB1dCBnZXRzIG9uZSwgd2hpdGUgd2hlcmUgaXQgaGFkIG5vbmUuXG4gIGNvbnN0IGFueUNvbG9yID0gcGFydHMuc29tZSgoZykgPT4gISFnLmdldEF0dHJpYnV0ZSgnY29sb3InKSk7XG4gIGNvbnN0IGNvbG9yID0gYW55Q29sb3IgPyBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMykuZmlsbCgxKSA6IG51bGw7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgY29uc3QgYyA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgICAgaWYgKGNvbG9yICYmIGMpIHsgY29sb3JbKHYgKyBpKSAqIDNdID0gYy5nZXRYKGkpOyBjb2xvclsodiArIGkpICogMyArIDFdID0gYy5nZXRZKGkpOyBjb2xvclsodiArIGkpICogMyArIDJdID0gYy5nZXRaKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2xvcikgb3V0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9yLCAzKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuLyoqIExhdGhlR2VvbWV0cnkgc2hhcmVzIHRoZSBjb3JuZXIgdmVydGV4IGJldHdlZW4gYW4gZW5kIGRpc2MgYW5kIHRoZSBzaWRlIHdhbGwsIHNvXG4gKiAgY29tcHV0ZVZlcnRleE5vcm1hbHMgdGlsdHMgdGhlIHdhbGwncyBmaXJzdCByaW5nIDQ1IGRlZ3JlZXMgdG93YXJkIHRoZSBkaXNjIGFuZCB0aGUgaGFybmVzcyBzaGFkZXNcbiAqICBhIGRhcmsgZ3JhZGllbnQgdGhlcmUgLS0gYSByaW5nIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIGFzIGEgSE9MRSB1bmRlciB0aGUgc3RhaW5sZXNzIGJpbidzIGNhcC5cbiAqICBJbnNlcnRpbmcgYSBwb2ludCAwLjggbW0gcGFzdCBldmVyeSBzaGFycCBjb3JuZXIgKD4gNzAgZGVncmVlcykgY29uZmluZXMgdGhlIGF2ZXJhZ2VkIG5vcm1hbCB0byB0aGF0XG4gKiAgc2xpdmVyLiBDb3N0cyBvbmUgcmluZyBwZXIgY29ybmVyOyBwYXNzIGBzaGFycCA9IGZhbHNlYCB3aGVyZSB0aGUgYnVkZ2V0IGNhbm5vdCBjYXJyeSBpdC4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29ybmVycyhwdHM6IG51bWJlcltdW10sIG1pbkRlZyA9IDcwLCBlcHMgPSAwLjAwMDgpOiBudW1iZXJbXVtdIHtcbiAgY29uc3Qgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcCA9IHB0c1tpXSwgYSA9IHB0c1tpIC0gMV0sIGIgPSBwdHNbaSArIDFdO1xuICAgIGxldCBzaGFycCA9IGZhbHNlO1xuICAgIGlmIChhICYmIGIpIHtcbiAgICAgIGNvbnN0IHV4ID0gcFswXSAtIGFbMF0sIHV5ID0gcFsxXSAtIGFbMV0sIHZ4ID0gYlswXSAtIHBbMF0sIHZ5ID0gYlsxXSAtIHBbMV07XG4gICAgICBjb25zdCBsdSA9IE1hdGguaHlwb3QodXgsIHV5KSwgbHYgPSBNYXRoLmh5cG90KHZ4LCB2eSk7XG4gICAgICBpZiAobHUgPiAwICYmIGx2ID4gMCkgc2hhcnAgPSBNYXRoLmFjb3MoTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsICh1eCAqIHZ4ICsgdXkgKiB2eSkgLyAobHUgKiBsdikpKSkgPiBtaW5EZWcgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgaWYgKHNoYXJwICYmIGx1ID4gMyAqIGVwcykgb3V0LnB1c2goW3BbMF0gLSB1eCAvIGx1ICogZXBzLCBwWzFdIC0gdXkgLyBsdSAqIGVwc10pO1xuICAgICAgb3V0LnB1c2gocCk7XG4gICAgICBpZiAoc2hhcnAgJiYgbHYgPiAzICogZXBzKSBvdXQucHVzaChbcFswXSArIHZ4IC8gbHYgKiBlcHMsIHBbMV0gKyB2eSAvIGx2ICogZXBzXSk7XG4gICAgfSBlbHNlIG91dC5wdXNoKHApO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwLCBzaGFycCA9IHRydWUpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSAoc2hhcnAgPyBzcGxpdENvcm5lcnMocHRzKSA6IHB0cykubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIElOREVYRUQsIHdpdGggc2hhcmVkIHJpbmcgdmVydGljZXMsIHNvIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGF2ZXJhZ2VzIGFjcm9zcyB0aGUgcXVhZHMgYW5kIHRoZVxuICAvLyBzdXJmYWNlIHNoYWRlcyBzbW9vdGguIFRoZSBmaXJzdCBidWlsZCBlbWl0dGVkIGxvb3NlIHRyaWFuZ2xlcywgYW5kIGEgZmxhdC1zaGFkZWQgc29mdCBib2R5XG4gIC8vIHNob3dzIGV2ZXJ5IHN0YXRpb24gYXMgYSBjcmVhc2UgLS0gYSByZWNsaW5pbmcgZmlndXJlIHRoYXQgbG9va2VkIGNydW1wbGVkIHJhdGhlciB0aGFuIGRyYXBlZC5cbiAgLy9cbiAgLy8gQSBzaXh0aCBzdGF0aW9uIGVsZW1lbnQgYGZsYXRZYCBDTEFNUFMgdGhlIHJpbmcncyB1bmRlcnNpZGUgdG8gdGhhdCBoZWlnaHQuIEEgYm9keSByZXN0aW5nIG9uXG4gIC8vIHRoZSBncm91bmQgaXMgbm90IGEgZmxvYXRpbmcgZWxsaXBzZTogaXQgc3ByZWFkcyB3aGVyZSBpdCBiZWFycywgYW5kIGFuIHVuY2xhbXBlZCB0dWJlIHJlYWRzIGFzXG4gIC8vIGEgc2F1c2FnZSBvbiBhIHRhYmxlLiBUaGUgY2xhbXAgaXMgYSBzb2Z0IG9uZSAtLSB0aGUgcmluZyBrZWVwcyBpdHMgd2lkdGggYW5kIGxvc2VzIGl0cyBkcm9vcCAtLVxuICAvLyBzbyB0aGUgY3JlYXNlIGl0IGxlYXZlcyBpcyB0aGUgY29udGFjdCBlZGdlIHJhdGhlciB0aGFuIGEgY3V0LlxuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFt6LCBjeCwgY3ksIHJ4LCByeSwgZmxhdFldID0gc3RhdGlvbnNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLnNpbih0aCkgKiByeDtcbiAgICAgIGxldCB5ID0gY3kgKyBNYXRoLmNvcyh0aCkgKiByeTtcbiAgICAgIGlmIChmbGF0WSAhPT0gdW5kZWZpbmVkICYmIHkgPCBmbGF0WSkgeSA9IGZsYXRZO1xuICAgICAgcG9zLnB1c2goeCwgeSwgeik7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgICAgaWR4LnB1c2goYSwgYiwgYywgYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KChwb3MubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLnNldEluZGV4KGlkeCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBjdXJsZWQgaG9ybjogYG5gIHRhcGVyaW5nIGJveCBzZWdtZW50cyBzYW1wbGVkIGFsb25nIGEgc2luZSwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudC5cbiAqIFNoYXJlZCBieSB0aGUgdWJvc290J3MgY2hvZmEsIHRoZSBwcmFuZydzIHRyaWRlbnQgcHJvbmdzIGFuZCB0aGUgQ2hpbmVzZSBzaHJpbmUncyBmbHlpbmcgZWF2ZXMsXG4gKiBiZWNhdXNlIGFsbCB0aHJlZSBhcmUgdGhlIHNhbWUgcHJvYmxlbSAtLSBhIHN0cmFpZ2h0IHNwaWtlIGF0IGEgcm9vZiBlbmQgcmVhZHMgYXMgYSBsaWdodG5pbmcgcm9kXG4gKiBhbmQgdGhlIGN1cmwgaXMgdGhlIHdob2xlIGZlYXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGN1cmxlZEhvcm4ocmVhY2g6IG51bWJlciwgcmlzZTogbnVtYmVyLCB0aGljazogbnVtYmVyLCBuID0gNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtyZWFjaCAqIE1hdGguc2luKHUgKiBNYXRoLlBJICogMC40NiksIHJpc2UgKiB1XTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBjb25zdCBhID0gYXQoaiAvIG4pLCBiID0gYXQoKGogKyAxKSAvIG4pO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgdyA9IHRoaWNrICogKDEgLSBqIC8gbikgKyB0aGljayAqIDAuMjg7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBNYXRoLmh5cG90KGR4LCBkeSkgKyB0aGljayAqIDAuMiwgdyk7XG4gICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZlaGljbGUgaGVscGVycyAqL1xuXG4vKiogUGFpbnQgYSB3aG9sZSBnZW9tZXRyeSBvbmUgdmVydGV4IGNvbG91ci4gRXZlcnkgdmVoaWNsZSBtYXRlcmlhbCBoZXJlIGlzIFdISVRFIHdpdGhcbiAqICB2ZXJ0ZXhDb2xvcnMgb24sIHNvIGEgY29sb3VyIGRpZmZlcmVuY2UgY29zdHMgYW4gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgbWF0ZXJpYWw6IHRoZSBib2R5J3NcbiAqICB0d28tdG9uZSwgdGhlIHR5cmUgYWdhaW5zdCBpdHMgcmltLCBhbiBhbWJlciBpbmRpY2F0b3Igb24gYSBibGFjayBidW1wZXIgYWxsIHJpZGUgb25lIHNoYWRlci5cbiAqICBWZXJ0ZXggY29sb3VycyBtdWx0aXBseSBpbiBMSU5FQVIgc3BhY2UsIHNvIHRoZSBoZXggaXMgY29udmVydGVkIHRocm91Z2ggVEhSRUUuQ29sb3IsIHdoaWNoXG4gKiAgZG9lcyB0aGUgc1JHQi10by1saW5lYXIgc3RlcC4gKi9cbmZ1bmN0aW9uIHRpbnRHZW8oZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgaGV4OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoaGV4KTtcbiAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7IH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQm94LXByb2plY3Qgd29ybGQtbWV0cmUgVVZzIHNvIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgKG11ZCwgcnVzdCwgY29ycnVnYXRpb24pIHJlcGVhdHNcbiAqICBhdCBhIHJlYWwgc2l6ZSBvbiBldmVyeSBmYWNlLiBgc2NhbGVgIGlzIG1ldHJlcyBwZXIgdGlsZS4gVGhlIGRvbWluYW50IG5vcm1hbCBheGlzIHBpY2tzIHRoZVxuICogIHBhaXIgb2Ygd29ybGQgYXhlcyB1c2VkLCBzbyBhIHJvb2YgcmVhZHMgKHgsIHopIGFuZCBhIHNpZGUgcmVhZHMgKHosIHkpLiAqL1xuZnVuY3Rpb24gd29ybGRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF5ID0gTWF0aC5hYnMobnJtLmdldFkoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBsZXQgdTogbnVtYmVyLCB2OiBudW1iZXI7XG4gICAgaWYgKGF4ID49IGF5ICYmIGF4ID49IGF6KSB7IHUgPSBwLmdldFooaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICBlbHNlIGlmIChheSA+PSBheikgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRaKGkpOyB9XG4gICAgZWxzZSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSB2IC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKlxuICogU0lERS1QUk9GSUxFIEVYVFJVU0lPTjogYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzICh0aGUgdmVoaWNsZSdzIHNpZGUgc2lsaG91ZXR0ZSwgd2hlZWxcbiAqIGFyY2hlcyBpbmNsdWRlZCBhcyBub3RjaGVzKSBzd2VwdCBhY3Jvc3MgdGhlIGZ1bGwgd2lkdGgsIHRoZW4gc2hhcGVkIHBlciB2ZXJ0ZXg6XG4gKlxuICogIC0gYHR1bWJsZWAgIG5hcnJvd3MgdGhlIHNlY3Rpb24gYWJvdmUgdGhlIGJlbHQgbGluZSAtLSB4IGlzIHNjYWxlZCBieSAoMSAtIGsgKiB0KSB3aGVyZSB0IHJ1bnNcbiAqICAgICAgICAgICAgICAwIGF0IGBiZWx0YCB0byAxIGF0IGByb29mYC4gVGhhdCBpcyB0aGUgdHVtYmxlaG9tZSBvZiBhIHJlYWwgY2FyIGJvZHkgYW5kIGlzIHdoYXRcbiAqICAgICAgICAgICAgICBzdG9wcyB0aGUgZ2xhc3Nob3VzZSByZWFkaW5nIGFzIGEgYm94IG9uIGEgYm94LlxuICogIC0gYHBsYW5gICAgIHJvdW5kcyB0aGUgcGxhbiBhdCB0aGUgbm9zZSBhbmQgdGFpbDogYW4gb3B0aW9uYWwgbGlzdCBvZiBbeiwgeFNjYWxlXSBzdGF0aW9uc1xuICogICAgICAgICAgICAgIGludGVycG9sYXRlZCBhbG9uZyB6LCBzbyBhIGJvbm5ldCBjYW4gdGFwZXIgdG8gMC45IG9mIHRoZSB3aWR0aCBhdCB0aGUgYnVtcGVyIGxpbmUuXG4gKlxuICogRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBpbiBpdHMgb3duICh1LCB2LCBkZXB0aCkgZnJhbWU7IHJvdGF0ZVkoLVBJLzIpIG1hcHMgZGVwdGggdG8gLXggYW5kIHUgdG9cbiAqIHdvcmxkIHosIGFuZCB0aGUgdHJhbnNsYXRlIHJlLWNlbnRyZXMgdGhlIHNsYWIgb24geCA9IDAuIEFueSBzaGFwaW5nIGlzIGFwcGxpZWQgQUZURVIgdGhhdCwgYW5kXG4gKiBub3JtYWxzIGFyZSByZWNvbXB1dGVkIGxhc3Qgc28gdGhlIHNoYWRlZCBmYWNlcyBmb2xsb3cgdGhlIHNoYXBlZCBzdXJmYWNlLlxuICovXG5mdW5jdGlvbiBzaWRlRXh0cnVkZShwcm9maWxlOiBudW1iZXJbXVtdLCB3aWR0aDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgb3B0czogeyB0dW1ibGU/OiB7IGJlbHQ6IG51bWJlciwgcm9vZjogbnVtYmVyLCBrOiBudW1iZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbj86IG51bWJlcltdW10sIGN1cnZlU2VnbWVudHM/OiBudW1iZXIgfSA9IHt9KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHJvZmlsZVswXVswXSwgcHJvZmlsZVswXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvZmlsZS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHByb2ZpbGVbaV1bMF0sIHByb2ZpbGVbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHdpZHRoLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmVTZWdtZW50czogb3B0cy5jdXJ2ZVNlZ21lbnRzID8/IDYgfSk7XG4gIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIDAsIDApO1xuICBzaGFwZVdpZHRoKGcsIG9wdHMpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIFRoZSBwZXItdmVydGV4IHggc2hhcGluZyBzaGFyZWQgYnkgdGhlIGJvZHkgYW5kIGl0cyBnbGFzcyBiYW5kLCBzbyBhIHBhbmUgb2Zmc2V0IDUgbW0gcHJvdWQgb2ZcbiAqICB0aGUgYm9keSBzdGF5cyA1IG1tIHByb3VkIGFmdGVyIGJvdGggYXJlIG5hcnJvd2VkIGJ5IHRoZSBzYW1lIGZ1bmN0aW9uLiAqL1xuZnVuY3Rpb24gc2hhcGVXaWR0aChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSxcbiAgICAgICAgICAgICAgICAgICAgb3B0czogeyB0dW1ibGU/OiB7IGJlbHQ6IG51bWJlciwgcm9vZjogbnVtYmVyLCBrOiBudW1iZXIgfSwgcGxhbj86IG51bWJlcltdW10gfSk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgbGV0IHggPSBwLmdldFgoaSk7IGNvbnN0IHkgPSBwLmdldFkoaSksIHogPSBwLmdldFooaSk7XG4gICAgaWYgKG9wdHMudHVtYmxlKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHkgLSBvcHRzLnR1bWJsZS5iZWx0KSAvIChvcHRzLnR1bWJsZS5yb29mIC0gb3B0cy50dW1ibGUuYmVsdCkpKTtcbiAgICAgIHggKj0gMSAtIG9wdHMudHVtYmxlLmsgKiB0O1xuICAgIH1cbiAgICBpZiAob3B0cy5wbGFuICYmIG9wdHMucGxhbi5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBzdCA9IG9wdHMucGxhbjtcbiAgICAgIGxldCBzID0gc3RbMF1bMV07XG4gICAgICBpZiAoeiA8PSBzdFswXVswXSkgcyA9IHN0WzBdWzFdO1xuICAgICAgZWxzZSBpZiAoeiA+PSBzdFtzdC5sZW5ndGggLSAxXVswXSkgcyA9IHN0W3N0Lmxlbmd0aCAtIDFdWzFdO1xuICAgICAgZWxzZSBmb3IgKGxldCBrID0gMDsgayA8IHN0Lmxlbmd0aCAtIDE7IGsrKykge1xuICAgICAgICBpZiAoeiA+PSBzdFtrXVswXSAmJiB6IDw9IHN0W2sgKyAxXVswXSkge1xuICAgICAgICAgIGNvbnN0IHUgPSAoeiAtIHN0W2tdWzBdKSAvIChzdFtrICsgMV1bMF0gLSBzdFtrXVswXSk7XG4gICAgICAgICAgcyA9IHN0W2tdWzFdICsgKHN0W2sgKyAxXVsxXSAtIHN0W2tdWzFdKSAqIHU7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB4ICo9IHM7XG4gICAgfVxuICAgIHAuc2V0WChpLCB4KTtcbiAgfVxuICBwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xufVxuXG4vKiogQSBzZW1pY2lyY3VsYXIgd2hlZWwtYXJjaCBub3RjaCBhcyBwcm9maWxlIHBvaW50cywgdG8gYmUgc3BsaWNlZCBpbnRvIGEgc2lkZSBwcm9maWxlIHRoYXQgcnVuc1xuICogIGFsb25nIHRoZSBzaWxsIGZyb20gK3ogdG8gLXogKGkuZS4geiBERUNSRUFTSU5HKS4gYG5gIHNlZ21lbnRzOyB0aGUgYXJjIGlzIHRoZSBUT1AgaGFsZi4gKi9cbmZ1bmN0aW9uIGFyY2hOb3RjaCh6YzogbnVtYmVyLCB5U2lsbDogbnVtYmVyLCByOiBudW1iZXIsIG4gPSA3KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgLyBuOyAgICAgICAgICAgICAgIC8vIDAgLi4gUEksIGZyb20gK3ogcm91bmQgdGhlIHRvcCB0byAtelxuICAgIHB0cy5wdXNoKFt6YyArIE1hdGguY29zKGEpICogciwgeVNpbGwgKyBNYXRoLnNpbihhKSAqIHJdKTtcbiAgfVxuICByZXR1cm4gcHRzO1xufVxuXG4vKipcbiAqIEEgV0hFRUw6IG9uZSBsYXRoZSBhYm91dCB0aGUgYXhsZS4gVGhlIHByb2ZpbGUgcnVucyBmcm9tIHRoZSBodWIgZmFjZSBvbiBvbmUgc2lkZSBvdmVyIHRoZSByaW1cbiAqIGxpcCwgdGhlIHR5cmUgc2lkZXdhbGwsIHRoZSB0cmVhZCBhbmQgYmFjayBkb3duIHRoZSBmYXIgc2lkZSwgc28gdGhlIHdoZWVsIGlzIGEgY2xvc2VkIHNvbGlkIHdpdGhcbiAqIG5vIG9wZW4gZW5kIGZvciB0aGUgdHVybnRhYmxlIGdhdGUgdG8gcmVhZCB0aHJvdWdoLiBSZXZvbHZlZCBhYm91dCBZIGFuZCB0aGVuIGxhaWQgb24gWCwgc28gdGhlXG4gKiBheGxlIGlzIHRoZSB4IGF4aXMgYW5kIHRoZSB3aGVlbCByb2xscyBhYm91dCBpdCAtLSB3aGljaCBpcyB0aGUgYXhpcyBpdHMgcGl2b3QgZGVjbGFyZXMuXG4gKlxuICogVHdvIHZlcnRleCBjb2xvdXJzOiBgcmltSGV4YCBvbiB0aGUgaHViIGFuZCByaW0gcG9pbnRzLCBgdHlyZUhleGAgb24gdGhlIHNpZGV3YWxsIGFuZCB0cmVhZC4gVGhlXG4gKiBsYXRoZSBvcmRlcnMgdmVydGljZXMgc2VnbWVudC1tYWpvciAoaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpLCB3aGljaCBpcyB3aGF0IGxldHMgYVxuICogcGVyLXByb2ZpbGUtcG9pbnQgY29sb3VyIGJlIHdyaXR0ZW4gd2l0aG91dCBhIHNlY29uZCBnZW9tZXRyeS5cbiAqL1xuZnVuY3Rpb24gd2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIGRpc2ggPSAwLjU1KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXG4gICAgWzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuMzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuNjIsIC1odyAqIDAuODBdLCBbclJpbSwgLWh3ICogMC44Nl0sIFtyUmltLCAtaHcgKiAwLjk4XSxcbiAgICBbclR5cmUgKiAwLjkzLCAtaHddLCBbclR5cmUsIC1odyAqIDAuNzJdLCBbclR5cmUsIGh3ICogMC43Ml0sIFtyVHlyZSAqIDAuOTMsIGh3XSxcbiAgICBbclJpbSwgaHcgKiAwLjk4XSwgW3JSaW0sIGh3ICogMC44Nl0sIFtyUmltICogMC42MiwgaHcgKiAwLjgwXSwgW3JSaW0gKiAwLjMwLCBodyAqIGRpc2hdLCBbMCwgaHcgKiBkaXNoXSxcbiAgXTtcbiAgY29uc3QgcmltUG9pbnQgPSAoajogbnVtYmVyKSA9PiBqIDw9IDQgfHwgaiA+PSA5O1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBzZWcpO1xuICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBjb25zdCBjdCA9IG5ldyBUSFJFRS5Db2xvcih0eXJlSGV4KSwgY3IgPSBuZXcgVEhSRUUuQ29sb3IocmltSGV4KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBjID0gcmltUG9pbnQoaSAlIHB0cy5sZW5ndGgpID8gY3IgOiBjdDtcbiAgICBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgZy5yb3RhdGVaKE1hdGguUEkgLyAyKTsgICAgLy8gbGF0aGUgYXhpcyBZIC0+IGF4bGUgb24gWFxuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogV2lyZS1zcG9rZWQgd2hlZWwgZHJlc3Npbmc6IGBuYCB0aGluIGJveGVzIHJhZGlhdGluZyBmcm9tIHRoZSBodWIsIGxhY2VkIGFsdGVybmF0ZWx5IHRvIGVhY2hcbiAqICBzaWRlIG9mIHRoZSByaW0gc28gdGhleSBjcm9zcyB0aGUgd2F5IHJlYWwgc3Bva2VzIGRvLiBNZXJnZWQgaW50byB0aGUgd2hlZWwgZ2VvbWV0cnkgc28gdGhlXG4gKiAgd2hlZWwgc3RheXMgT05FIGluc3RhbmNlZCBnZW9tZXRyeS4gKi9cbmZ1bmN0aW9uIHNwb2tlcyhySHViOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgbjogbnVtYmVyLCBoZXg6IG51bWJlciwgdCA9IDAuMDA2LCBwcmlzbSA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJICogMiAvIG47XG4gICAgY29uc3Qgc2lkZSA9IChpICUgMiA9PT0gMCA/IDEgOiAtMSkgKiBoYWxmVyAqIDAuMzU7XG4gICAgY29uc3QgbGVuID0gclJpbSAtIHJIdWI7XG4gICAgLy8gYHByaXNtYDogYW4gb3BlbiB0aHJlZS1zaWRlZCBwcmlzbSBhdCBzaXggdHJpYW5nbGVzIHdoZXJlIHRoZSBib3ggY29zdHMgdHdlbHZlIC0tIGEgd2lyZVxuICAgIC8vIHNwb2tlIGhhcyBubyByZXNvbHZhYmxlIHNlY3Rpb24gYXQgcHJvcCBkaXN0YW5jZSwgYW5kIDI4IG9mIHRoZW0gb24gdGhyZWUgd2hlZWxzIGlzIHRoZVxuICAgIC8vIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGxhcmdlIHByb3AgaW5zaWRlIGl0cyB0cmlhbmdsZSBjZWlsaW5nIGFuZCBvbmUgb3ZlciBpdFxuICAgIGNvbnN0IGcgPSBwcmlzbSA/IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHQgKiAwLjYyLCB0ICogMC42MiwgbGVuLCAzLCAxLCB0cnVlKSA6IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh0LCBsZW4sIHQpO1xuICAgIGcudHJhbnNsYXRlKDAsIHJIdWIgKyBsZW4gLyAyLCAwKTtcbiAgICBnLnJvdGF0ZVgoTWF0aC5hdGFuMihzaWRlLCBsZW4pICogMC42KTtcbiAgICBnLnJvdGF0ZVgoMCk7IGcudHJhbnNsYXRlKDAsIDAsIHNpZGUgKiAwLjUpO1xuICAgIGcucm90YXRlWChhKTsgICAgICAgICAgICAvLyByYWRpYXRlIGFyb3VuZCB0aGUgYXhsZSAoeClcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIHRpbnRHZW8obWVyZ2VHZW9zKHNlZ3MpLCBoZXgpO1xufVxuXG4vKiogQSBwb2x5bGluZSBUVUJFOiBvbmUgY3lsaW5kZXIgcGVyIHNlZ21lbnQsIGVhY2ggcm90YXRlZCBvbnRvIGl0cyBjaG9yZCwgd2l0aCBhIHNtYWxsIHNwaGVyZS1sZXNzXG4gKiAgb3ZlcmxhcCBzbyB0aGUgam9pbnRzIGNsb3NlLiBIYW5kbGViYXJzLCBjYW5vcHkgcmFpbHMsIHJvbGwgY2FnZXMgYW5kIGZyYW1lIHR1YmVzLiAqL1xuZnVuY3Rpb24gdHViZShwdHM6IG51bWJlcltdW10sIHI6IG51bWJlciwgc2VnID0gOCwgaGV4PzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBhID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2ldWzBdLCBwdHNbaV1bMV0sIHB0c1tpXVsyXSk7XG4gICAgY29uc3QgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpICsgMV1bMF0sIHB0c1tpICsgMV1bMV0sIHB0c1tpICsgMV1bMl0pO1xuICAgIGNvbnN0IGQgPSBiLmNsb25lKCkuc3ViKGEpOyBjb25zdCBsZW4gPSBkLmxlbmd0aCgpO1xuICAgIGlmIChsZW4gPCAxZS02KSBjb250aW51ZTtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkociwgciwgbGVuICsgciAqIDEuMiwgc2VnLCAxLCBmYWxzZSk7XG4gICAgY29uc3QgcSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBkLm5vcm1hbGl6ZSgpKTtcbiAgICBnLmFwcGx5UXVhdGVybmlvbihxKTtcbiAgICBjb25zdCBtID0gYS5jbG9uZSgpLmFkZChiKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuICAgIGcudHJhbnNsYXRlKG0ueCwgbS55LCBtLnopO1xuICAgIHBhcnRzLnB1c2goZyk7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gb3V0IDogdGludEdlbyhvdXQsIGhleCk7XG59XG5cbi8qKiBBIHJvdGF0ZWQgYm94OiBbY3gsIGN5LCBjeiwgdywgaCwgZCwgcngsIHJ5LCByel0gd2l0aCB0aGUgcm90YXRpb25zIGFwcGxpZWQgaW4geCwgeSwgeiBvcmRlclxuICogIGFib3V0IHRoZSBib3gncyBvd24gY2VudHJlLiBBIGJvbm5ldCBsaXAsIGEgcmFrZWQgbWlycm9yIHN0ZW0sIGEgY2Fub3B5IHN0YXkuICovXG5mdW5jdGlvbiByYm94KGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJbM10sIGJbNF0sIGJbNV0pO1xuICBpZiAoYls2XSkgZy5yb3RhdGVYKGJbNl0pOyBpZiAoYls3XSkgZy5yb3RhdGVZKGJbN10pOyBpZiAoYls4XSkgZy5yb3RhdGVaKGJbOF0pO1xuICBnLnRyYW5zbGF0ZShiWzBdLCBiWzFdLCBiWzJdKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIGJhdGNoIG9mIGJveGVzLCBlYWNoIHRpbnRlZCwgbWVyZ2VkOiBbW2hleCwgY3gsIGN5LCBjeiwgdywgaCwgZCwgcng/LCByeT8sIHJ6P10sIC4uLl0uIFRoZVxuICogIHRyaW0gY29tcG9uZW50IG9mIGV2ZXJ5IHZlaGljbGUgaXMgb25lIG9mIHRoZXNlIC0tIGJ1bXBlcnMsIGdyaWxsZSwgbGFtcHMsIG1pcnJvcnMsIGhhbmRsZXMsXG4gKiAgc3RlcHMsIGFyY2ggZmxhcmVzIC0tIHNvIGZvcnR5IHBhcnRzIHJpZGUgb25lIHN1Ym1pc3Npb24uICovXG5mdW5jdGlvbiB0aW50ZWRCb3hlcyhsaXN0OiBudW1iZXJbXVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiB0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKSk7XG59XG5cbi8qKiBNaXJyb3IgYSBib3ggbGlzdCBhY3Jvc3MgeCA9IDAgKGxlZnQvcmlnaHQgcGFpcnMpLiBSb3RhdGlvbnMgYWJvdXQgeSBhbmQgeiBmbGlwIHNpZ24uICovXG5mdW5jdGlvbiBtaXJyb3JYKGxpc3Q6IG51bWJlcltdW10pOiBudW1iZXJbXVtdIHtcbiAgcmV0dXJuIGxpc3QuZmxhdE1hcCgoYikgPT4gW2IsIFtiWzBdLCAtYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSwgYls2XSwgYls3XSA/PyAwLCAtKGJbOF0gPz8gMCksIC0oYls5XSA/PyAwKV1dKTtcbn1cblxuLyoqIEEgc2VhbWxlc3MgQ2FudmFzIDJEIHRpbGU6IGBkcmF3KGN0eCwgc2l6ZSlgIHBhaW50cyBpdCwgYW5kIHRoZSByZXN1bHQgaXMgYSByZXBlYXRpbmcgdGV4dHVyZVxuICogIGluIHNSR0IuIFVzZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLCBzbyB0aGUgdGV4dHVyZWxlc3MgZGVjbGFyYXRpb24gc3RhbmRzIGFuZCBub1xuICogIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQuIFJldHVybnMgbnVsbCB3aGVyZSB0aGVyZSBpcyBubyBET00gKHRoZSBoZWFkbGVzcyBoYXJuZXNzXG4gKiAgaGFzIG9uZTsgYSBub2RlLXNpZGUgcHJvYmUgZG9lcyBub3QpLCBhbmQgZXZlcnkgY2FsbGVyIHRvbGVyYXRlcyBudWxsLiAqL1xuZnVuY3Rpb24gY2FudmFzVGlsZShzaXplOiBudW1iZXIsIGRyYXc6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgczogbnVtYmVyKSA9PiB2b2lkKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGN2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IGN2LndpZHRoID0gc2l6ZTsgY3YuaGVpZ2h0ID0gc2l6ZTtcbiAgLy8gd2lsbFJlYWRGcmVxdWVudGx5IGtlZXBzIHRoZSB0aWxlIG9uIHRoZSBDUFUgcmFzdGVyIHBhdGg6IGEgR1BVLWJhY2tlZCBjYW52YXMgY29zdHMgc2Vjb25kcyBwZXJcbiAgLy8gdGhvdXNhbmQgcGF0aCBmaWxscyB3aGVyZSB0aGUgc29mdHdhcmUgcGF0aCB0YWtlcyB0ZW5zIG9mIG1pbGxpc2Vjb25kcy5cbiAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsOyBpZiAoIWN0eCkgcmV0dXJuIG51bGw7XG4gIGRyYXcoY3R4LCBzaXplKTtcbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3YpO1xuICB0ZXgud3JhcFMgPSB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgdGV4LmNvbG9yU3BhY2UgPSBUSFJFRS5TUkdCQ29sb3JTcGFjZTtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgcmV0dXJuIHRleDtcbn1cblxuLyoqIERldGVybWluaXN0aWMgcHNldWRvLXJhbmRvbSBmb3IgY2FudmFzIGRyZXNzaW5nIC0tIGFzc2lnbmVkIGJ5IGluZGV4LCBuZXZlciBNYXRoLnJhbmRvbSwgc28gdGhlXG4gKiAgbW9kZWwgaXMgYnl0ZS1pZGVudGljYWwgb24gZXZlcnkgYnVpbGQuICovXG5mdW5jdGlvbiBsY2coc2VlZDogbnVtYmVyKTogKCkgPT4gbnVtYmVyIHtcbiAgbGV0IHMgPSBzZWVkID4+PiAwO1xuICByZXR1cm4gKCkgPT4geyBzID0gKHMgKiAxNjY0NTI1ICsgMTAxMzkwNDIyMykgPj4+IDA7IHJldHVybiBzIC8gNDI5NDk2NzI5NjsgfTtcbn1cblxuLyoqXG4gKiBNVUQgLyBST0FELUdSSU1FIHRpbGUsIFJFLUJBU0VELiBUaGFpIHJvYWQgbXVkIGlzIHRhbiBhbmQgQlJJR0hURVIgdGhhbiBtb3N0IHBhaW50LCBhbmQgYVxuICogbXVsdGlwbGllciBjYW5ub3QgYnJpZ2h0ZW46IHNvIHRoZSBwYWludCBtYXRlcmlhbCBjYXJyaWVzIHRoZSBNVUQgRU5WRUxPUEUgY29sb3VyIChtZWFzdXJlZCBvblxuICogdGhlIG11ZGR5IHNpbGwpLCB0aGlzIHRpbGUgY2FycmllcyB0aGUgY2xlYW4gcGFpbnQgYXMgYSBSQVRJTyBvZiB0aGF0IGVudmVsb3BlIG92ZXIgbW9zdCBvZiBpdHNcbiAqIGFyZWEgKGBiYXNlYCksIGFuZCB0aGUgbXVkIGlzIHBhaW50ZWQgYXMgd2hpdGUgLS0gaS5lLiB0aGUgZW52ZWxvcGUgaXRzZWxmIC0tIGluIGEgd2FzaCByaXNpbmdcbiAqIGZyb20gdGhlIGJvdHRvbSB0byBgY292ZXJhZ2VgIG9mIHRoZSB0aWxlIGhlaWdodCBwbHVzIHNwbGF0dGVyIGFib3ZlIGl0LiBCb3VuZCB3aXRoIGhlaWdodCBVVnNcbiAqIHNvIHYgPSAwIGlzIHRoZSBncm91bmQgYW5kIHRoZSB3YXNoIHNpdHMgb24gdGhlIHNpbGxzIGFuZCBhcmNoZXMuXG4gKi9cbmZ1bmN0aW9uIG11ZFRpbGUoc2l6ZTogbnVtYmVyLCBiYXNlOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzMpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgdG9IZXggPSAodjogbnVtYmVyW10pID0+ICcjJyArIHYubWFwKChjKSA9PiBNYXRoLnJvdW5kKE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGMpKSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0b0hleChiYXNlKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjU1LDI1NSwwLjg4KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNDUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpJyk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuMzU7XG4gICAgICBjb25zdCByID0gMyArIHJuZCgpICogcyAqIDAuMDU7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4yODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDI1NSwyNTAsMjQwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjUwLDI0MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBhIGxpdHRsZSBncmFpbiBzbyB0aGUgY2xlYW4gcGFpbnQgaXMgbm90IGEgZmxhdCBmaWxsXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7IGNvbnN0IHYgPSBybmQoKSA8IDAuNSA/IDAgOiAyNTU7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4wMzUpYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEuNSwgMS41KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogRFVTVCB0aWxlIGZvciBwYWludCB0aGF0IGlzIEJSSUdIVEVSIHRoYW4gaXRzIGRpcnQgKGEgd2hpdGUgdmFuKTogYSBwbGFpbiBtdWx0aXBsaWVyLCB3aGl0ZVxuICogIGJhc2UgYW5kIGEgZ3JleS1icm93biB3YXNoIHJpc2luZyBmcm9tIHRoZSBncm91bmQgdG8gYGNvdmVyYWdlYCwgcGx1cyBzb2Z0IGJsb2JzLiAqL1xuZnVuY3Rpb24gZHVzdFRpbGUoc2l6ZTogbnVtYmVyLCBkdXN0OiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGMgPSBkdXN0Lm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiBNYXRoLm1pbigxLCB2KSkpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjkpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjQpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuNCwgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA1LCBhID0gMC4wOCArIHJuZCgpICogMC4yNTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBDT1JSVUdBVEVEIFNIRUVUIHRpbGU6IHZlcnRpY2FsIHJpZGdlcyBhcyBhIHNpbmUtc2hhZGVkIHN0cmlwZSBmaWVsZCwgdXNlZCBhcyBtYXAgQU5EIGJ1bXBNYXAgb25cbiAqICBhIHNvbmd0aGFldyByb29mIHNvIHRoZSByaWRnZXMgY2F0Y2ggbGlnaHQuIGBwaXRjaGAgcmlkZ2VzIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gY29ycnVnYXRpb25UaWxlKHNpemU6IG51bWJlciwgcGl0Y2g6IG51bWJlciwgbG93OiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgY29uc3QgdCA9IChNYXRoLmNvcyh4IC8gcyAqIE1hdGguUEkgKiAyICogcGl0Y2gpICsgMSkgLyAyOyAgIC8vIDEgYXQgY3Jlc3QsIDAgaW4gdHJvdWdoXG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiAobG93ICsgKDEgLSBsb3cpICogdCkpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMTg7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTIwLDkwLDYwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMjAsOTAsNjAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFBMQU5LIHRpbGU6IGJvYXJkcyBydW5uaW5nIGFsb25nIHUgd2l0aCBkYXJrIGpvaW50cyBhbmQgZ3JhaW4gc3RyZWFrcywgYSBtdWx0aXBsaWVyIG9uIGFcbiAqICBtZWFzdXJlZCB0aW1iZXIgYWxiZWRvLiBgYm9hcmRzYCBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIHBsYW5rVGlsZShzaXplOiBudW1iZXIsIGJvYXJkczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGJoID0gcyAvIGJvYXJkcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IGJvYXJkczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgYmgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDMwLDIwLDAuNTUpJzsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDE0OyBrKyspIHtcbiAgICAgICAgY29uc3QgeSA9IGIgKiBiaCArIHJuZCgpICogYmgsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjYpLCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSg2MCw0NSwzMCwkezAuMDUgKyBybmQoKSAqIDAuMTJ9KWA7IGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgbGVuLCB5KTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgbGVuLCB5KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBSVVNUIHRpbGU6IGEgbXVsdGlwbGllciBvZiBibG90Y2hlZCBvcmFuZ2UtYnJvd24gb3ZlciBhIGJhc2UsIGRhcmsgY29yZXMgbGlmdGVkIHNvIG5vdGhpbmcgbGFuZHNcbiAqICBvbiB0aGUgbHVtYS01OCBob2xlIGdhdGUuICovXG5mdW5jdGlvbiBydXN0VGlsZShzaXplOiBudW1iZXIsIHJhdGlvOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBkZW5zaXR5ID0gOTApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVuc2l0eTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDk7XG4gICAgICBjb25zdCBhID0gMC4xNSArIHJuZCgpICogMC40NTtcbiAgICAgIGNvbnN0IGMgPSByYXRpby5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogdikpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBIZWlnaHQta2V5ZWQgVVZzOiB2IGlzIHdvcmxkIEhFSUdIVCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB1IHJ1bnMgYWxvbmcgdGhlIGRvbWluYW50IGhvcml6b250YWxcbiAqICBheGlzLiBBIG11ZCB0aWxlIGJvdW5kIHRoaXMgd2F5IGRhcmtlbnMgdGhlIHNpbGxzIGFuZCBzdGF5cyBjbGVhbiBvbiB0aGUgcm9vZiAtLSBhIHBsYWluIGJveFxuICogIHByb2plY3Rpb24gd291bGQgcmVwZWF0IHRoZSB0aWxlJ3MgZGlydHkgYmFuZCBhY3Jvc3MgdGhlIHJvb2YgYXMgc3RyaXBlcy4gKi9cbi8qKlxuICogU0hPUlQgRlVSOiBhIHNlYW1sZXNzIHRpbGUgb2YgZGVuc2UsIHNob3J0LCBkaXJlY3Rpb25hbCBoYWlyIHN0cm9rZXMgb3ZlciBhIGNsb3VkeSB0b25lIGRyaWZ0LCBhcyBhXG4gKiBtdWx0aXBseSBtYXAgKGFuZCBidW1wKSBvbiBhIHdoaXRlIHZlcnRleC1jb2xvdXJlZCBjb2F0LiBUaGUgc3Ryb2tlcyBydW4gYWxvbmcgdiB3aXRoIGEgaml0dGVyZWRcbiAqIGxlYW4gYW5kIGEgbmFycm93IHRvbmUgc3ByZWFkIC0tIGEgd2lkZSBzcHJlYWQgcmVhZHMgYXMgc2NhbGVzLCBhIHBlcmZlY3QgbGF5IHJlYWRzIGFzIGNvbWJlZFxuICogcGxhc3RpYy4gYHBhdGNoZXNgIGFkZHMgYSBmZXcgc29mdCBwaW5rLWdyZXkgYmFyZSBwYXRjaGVzLCB0aGUgbWFuZ2UgbWFya3Mgb2YgYSBzdHJlZXQgZG9nLlxuICovXG5mdW5jdGlvbiBmdXJUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IHRvbmUgPSBvLnRvbmUgPz8gWzAuNzIsIDAuNjYsIDAuNThdLCBtID0gcyAqIDAuMDY7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGNsb3VkeSBkcmlmdCB1bmRlcm5lYXRoIHNvIHRoZSBjb2F0IGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uY2xvdWRzID8/IDI2KTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA4ICsgcm5kKCkgKiAwLjE4KSwgYSA9IDAuMDQgKyBybmQoKSAqIDAuMTA7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih0b25lKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHRvbmUpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYmFyZSBwYXRjaGVzOiBzb2Z0LCBzcGFyc2UsIHdhcm0gZ3JleS1waW5rXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5wYXRjaGVzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMDUpLCBwYyA9IG8ucGF0Y2hUb25lID8/IFswLjcyLCAwLjU2LCAwLjUyXTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHBjKX0sMC41NSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2IocGMpfSwwLjMpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihwYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByICogMS4zLCByLCBybmQoKSAqIE1hdGguUEksIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBoYWlyIHN0cm9rZXM6IGRhcmsgYW5kIGxpZ2h0LCBzaG9ydCwgbGVhbmluZyB3aXRoaW4gKy0yMiBkZWdyZWVzIG9mIHZcbiAgICBjb25zdCBzdHJva2VzID0gby5zdHJva2VzID8/IDUwMDAsIGxlbiA9IHMgKiAoby5sZW5ndGggPz8gMC4wMjIpO1xuICAgIGNvbnN0IGRyYXdTdHJva2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIHc6IG51bWJlcikgPT4ge1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHc7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTtcbiAgICAgIGlmICh4IDwgbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIHMsIHkpOyBjdHgubGluZVRvKHggKyBzICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHggPiBzIC0gbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHkgPCBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5ICsgcyk7IGN0eC5saW5lVG8oeCArIGR4LCB5ICsgcyArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeSA+IHMgLSBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5IC0gcyk7IGN0eC5saW5lVG8oeCArIGR4LCB5IC0gcyArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgfTtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJva2VzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHRoID0gKHJuZCgpIC0gMC41KSAqIDAuNzgsIGwgPSBsZW4gKiAoMC42ICsgcm5kKCkgKiAwLjgpO1xuICAgICAgY29uc3QgbGlnaHQgPSBybmQoKSA8IDAuNDI7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gbGlnaHQgPyAnc2NyZWVuJyA6ICdtdWx0aXBseSc7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBsaWdodCA/IGByZ2JhKDI1NSwyNTAsMjQwLCR7MC4wNSArIHJuZCgpICogMC4xMH0pYCA6IGByZ2JhKCR7cmdiKHRvbmUpfSwkezAuMDYgKyBybmQoKSAqIDAuMTR9KWA7XG4gICAgICBkcmF3U3Ryb2tlKHgsIHksIE1hdGguc2luKHRoKSAqIGwsIE1hdGguY29zKHRoKSAqIGwsIDAuNiArIHJuZCgpICogMS4yKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoZWlnaHRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGNvbnN0IHUgPSBheCA+PSBheiA/IHAuZ2V0WihpKSA6IHAuZ2V0WChpKTtcbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSBwLmdldFkoaSkgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIE9mZnNldCBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgb3V0d2FyZCBieSBgZGAgYWxvbmcgdGhlIGF2ZXJhZ2VkIGVkZ2Ugbm9ybWFscy4gVXNlZFxuICogIHRvIHN0YW5kIHRoZSBnbGFzcyBiYW5kIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBib2R5J3MgcmFrZWQgd2luZHNjcmVlbiBhbmQgcmVhciBnbGFzc1xuICogIGZhY2VzLCBzbyB0aGUgcGFuZSBhbmQgdGhlIGJvZHkgbmV2ZXIgc2hhcmUgYSBwbGFuZS4gV2luZGluZzogY291bnRlci1jbG9ja3dpc2UgaW4gKHosIHkpLiAqL1xuZnVuY3Rpb24gb2Zmc2V0UG9seShwdHM6IG51bWJlcltdW10sIGQ6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBuID0gcHRzLmxlbmd0aCwgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IHB0c1soaSArIG4gLSAxKSAlIG5dLCBiID0gcHRzW2ldLCBjID0gcHRzWyhpICsgMSkgJSBuXTtcbiAgICBjb25zdCBlMSA9IFtiWzBdIC0gYVswXSwgYlsxXSAtIGFbMV1dLCBlMiA9IFtjWzBdIC0gYlswXSwgY1sxXSAtIGJbMV1dO1xuICAgIGNvbnN0IGwxID0gTWF0aC5oeXBvdChlMVswXSwgZTFbMV0pIHx8IDEsIGwyID0gTWF0aC5oeXBvdChlMlswXSwgZTJbMV0pIHx8IDE7XG4gICAgLy8gb3V0d2FyZCBub3JtYWwgb2YgYSBDQ1cgZWRnZSAoZHosIGR5KSBpcyAoZHksIC1keilcbiAgICBjb25zdCBuMSA9IFtlMVsxXSAvIGwxLCAtZTFbMF0gLyBsMV0sIG4yID0gW2UyWzFdIC8gbDIsIC1lMlswXSAvIGwyXTtcbiAgICBsZXQgbnggPSBuMVswXSArIG4yWzBdLCBueSA9IG4xWzFdICsgbjJbMV07XG4gICAgY29uc3QgbmwgPSBNYXRoLmh5cG90KG54LCBueSkgfHwgMTsgbnggLz0gbmw7IG55IC89IG5sO1xuICAgIGNvbnN0IGNvc0hhbGYgPSBNYXRoLm1heCgwLjM1LCBueCAqIG4xWzBdICsgbnkgKiBuMVsxXSk7XG4gICAgb3V0LnB1c2goW2JbMF0gKyBueCAqIGQgLyBjb3NIYWxmLCBiWzFdICsgbnkgKiBkIC8gY29zSGFsZl0pO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBBIHdoZWVsLWFyY2ggRkxBUkU6IGEgaGFsZi1hbm51bHVzIGluIHRoZSAoeiwgeSkgcGxhbmUsIGV4dHJ1ZGVkIGFjcm9zcyB4MC4ueDEgb24gYm90aCBzaWRlc1xuICogIGFuZCB0aW50ZWQuIFN0YW5kcyBwcm91ZCBvZiB0aGUgYm9keSBzaWRlIGFuZCBoaWRlcyB0aGUgYXJjaCdzIGN1dCBlZGdlLiAqL1xuZnVuY3Rpb24gZmxhcmUoemM6IG51bWJlciwgeWM6IG51bWJlciwgckluOiBudW1iZXIsIHJPdXQ6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgaGV4OiBudW1iZXIsIG4gPSA5KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IGNvbnN0IHogPSB6YyArIE1hdGguY29zKGEpICogck91dCwgeSA9IHljICsgTWF0aC5zaW4oYSkgKiByT3V0OyBpZiAoaSA9PT0gMCkgc2hhcGUubW92ZVRvKHosIHkpOyBlbHNlIHNoYXBlLmxpbmVUbyh6LCB5KTsgfVxuICBmb3IgKGxldCBpID0gbjsgaSA+PSAwOyBpLS0pIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IHNoYXBlLmxpbmVUbyh6YyArIE1hdGguY29zKGEpICogckluLCB5YyArIE1hdGguc2luKGEpICogckluKTsgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgbWsgPSAoc3g6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB4MSAtIHgwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlIH0pO1xuICAgIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpOyBnLnRyYW5zbGF0ZSh4MSwgMCwgMCk7IGlmIChzeCA8IDApIGcuc2NhbGUoLTEsIDEsIDEpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIHRpbnRHZW8oZywgaGV4KTtcbiAgfTtcbiAgY29uc3QgbCA9IG1rKC0xKSwgciA9IG1rKDEpO1xuICAvLyBhIG5lZ2F0aXZlIHNjYWxlIGZsaXBzIHRoZSB3aW5kaW5nOyByZXN0b3JlIGl0IHNvIHRoZSBmbGFyZSBpcyBub3QgaW5zaWRlIG91dFxuICBjb25zdCBpZHggPSBsLmdldEluZGV4KCk7IGlmIChpZHgpIHsgY29uc3QgYSA9IGlkeC5hcnJheSBhcyBhbnk7IGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMykgeyBjb25zdCB0ID0gYVtpICsgMV07IGFbaSArIDFdID0gYVtpICsgMl07IGFbaSArIDJdID0gdDsgfSBpZHgubmVlZHNVcGRhdGUgPSB0cnVlOyB9XG4gIGVsc2UgeyBjb25zdCBwID0gbC5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSArPSAzKSB7IGNvbnN0IHgxXyA9IHAuZ2V0WChpICsgMSksIHkxXyA9IHAuZ2V0WShpICsgMSksIHoxXyA9IHAuZ2V0WihpICsgMSk7IHAuc2V0WFlaKGkgKyAxLCBwLmdldFgoaSArIDIpLCBwLmdldFkoaSArIDIpLCBwLmdldFooaSArIDIpKTsgcC5zZXRYWVooaSArIDIsIHgxXywgeTFfLCB6MV8pOyB9IH1cbiAgbC5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gbWVyZ2VHZW9zKFtsLCByXSk7XG59XG5cbi8qKiBCaW5kIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgdG8gYSBtYXRlcmlhbCBhcyBtYXAgKGFuZCBidW1wKSwgbGVhdmluZyB0aGUgdGV4dHVyZWxlc3NcbiAqICBkZWNsYXJhdGlvbiBpbnRhY3Q6IG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQsIHRoZSBtZWFzdXJlZCBjb2xvdXIgc3RheXMgdGhlXG4gKiAgbXVsdGlwbGljYW5kLCBhbmQgdGhlIHdob2xlIHRoaW5nIGNvc3RzIG9uZSBjYW52YXMuICovXG5mdW5jdGlvbiBiaW5kVGlsZShtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsLCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsLCBidW1wID0gMCk6IHZvaWQge1xuICBpZiAoIXRleCkgcmV0dXJuO1xuICBtYXQubWFwID0gdGV4O1xuICBpZiAoYnVtcCA+IDApIHsgbWF0LmJ1bXBNYXAgPSB0ZXg7IG1hdC5idW1wU2NhbGUgPSBidW1wOyB9XG4gIG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cblxuLyoqXG4gKiBBIERSQVBFRCBTSEVFVDogYGhlaWdodHNbal1baV1gIGlzIHRoZSB0b3Agc3VyZmFjZSBhdCB4ID0geDAuLngxIChpIG92ZXIgbngpIGFuZCB6ID0gejAuLnoxIChqIG92ZXJcbiAqIG56KTsgdGhlIHNoZWV0IGlzIGB0YCB0aGljay4gVG9wIGFuZCB1bmRlcnNpZGUgYXJlIHNtb290aC1zaGFkZWQgZ3JpZHMsIHRoZSBmb3VyIGVkZ2VzIGFyZSBmbGF0XG4gKiBzdHJpcHMgd291bmQgb3V0d2FyZC4gQSB0YXJwIGNhbm9weSBpcyBhIHJpZGdlIGxpbmUgbWludXMgdGhlIHNhZyBiZXR3ZWVuIGl0cyBwb2xlcyBtaW51cyB0aGVcbiAqIGRyb29wIG9mIGl0cyBmcmVlIGVkZ2VzIC0tIGNsb3RoLCB3aGVyZSBhIHNsYWIgcmVhZHMgYXMgYSBwYWludGVkIGJveC5cbiAqL1xuZnVuY3Rpb24gc2hlZXQoczogYW55KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBueDogbnVtYmVyID0gcy5ueCwgbno6IG51bWJlciA9IHMubnosIEhoOiBudW1iZXJbXVtdID0gcy5oZWlnaHRzLCB0OiBudW1iZXIgPSBzLnQgPz8gMC4wMTI7XG4gIGNvbnN0IFggPSAoaTogbnVtYmVyKSA9PiBzLngwICsgKHMueDEgLSBzLngwKSAqIGkgLyBueDtcbiAgY29uc3QgWiA9IChqOiBudW1iZXIpID0+IHMuejAgKyAocy56MSAtIHMuejApICogaiAvIG56O1xuICBjb25zdCBncmlkID0gKHlPZmY6IG51bWJlciwgZmxpcDogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXY6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8PSBueDsgaSsrKSB7IHBvcy5wdXNoKFgoaSksIEhoW2pdW2ldICsgeU9mZiwgWihqKSk7IHV2LnB1c2goaSAvIG54LCBqIC8gbnopOyB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSBqICogKG54ICsgMSkgKyBpLCBiID0gYSArIDEsIGMgPSBhICsgbnggKyAxLCBkID0gYyArIDE7XG4gICAgICBpZiAoZmxpcCkgaWR4LnB1c2goYSwgYiwgYywgYiwgZCwgYyk7IGVsc2UgaWR4LnB1c2goYSwgYywgYiwgYiwgYywgZCk7XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuc2V0SW5kZXgoaWR4KTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gZztcbiAgfTtcbiAgLy8gYGhleFRvcGAgLyBgaGV4VW5kZXJgOiBhIGNvbG91ciBhdHRyaWJ1dGUgd3JpdHRlbiBwZXIgZ3JpZCwgc28gYSB0YXJwIGNhbiBiZSBibHVlIG9uIHRvcCBhbmRcbiAgLy8gb3JhbmdlIHVuZGVybmVhdGggb24gT05FIG1hdGVyaWFsIGFuZCBPTkUgZHJhdyBjYWxsLiBBIGNvbXBvbmVudCB0aW50IGNhbm5vdCBkbyBpdCAtLSB0aGUgdHdvXG4gIC8vIHN1cmZhY2VzIGFyZSBtaWxsaW1ldHJlcyBhcGFydCBpbiB5LCBzbyBubyBheGlzIGJsZW5kIHNlcGFyYXRlcyB0aGVtIC0tIGFuZCBhIHNlY29uZCBzaGVldFxuICAvLyB3b3VsZCBkb3VibGUgdGhlIHJvb2YncyB0cmlhbmdsZXMgZm9yIGEgY29sb3VyLiBPbWl0dGVkLCB0aGUgZ2VvbWV0cnkgaXMgdW50aW50ZWQgYXMgYmVmb3JlLlxuICBjb25zdCBwYWludCA9IChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgaGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQsIGMgPSBuZXcgVEhSRUUuQ29sb3IoaGV4KSwgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHRvcDAgPSBncmlkKDAsIGZhbHNlKSwgdW5kMCA9IGdyaWQoLXQsIHRydWUpO1xuICBjb25zdCBwYXJ0cyA9IHMuaGV4VW5kZXIgIT09IHVuZGVmaW5lZFxuICAgID8gW3BhaW50KHRvcDAsIHMuaGV4VG9wID8/IDB4ZmZmZmZmKSwgcGFpbnQodW5kMCwgcy5oZXhVbmRlcildXG4gICAgOiBbdG9wMCwgdW5kMF07XG4gIC8vIGVkZ2Ugc3RyaXBzOiBlYWNoIHF1YWQgZnJvbSB0aGUgdG9wIGVkZ2UgZG93biB0byB0aGUgdW5kZXJzaWRlLCB3b3VuZCBzbyBpdHMgbm9ybWFsIGZhY2VzIGBvdXRgXG4gIGNvbnN0IHN0cmlwID0gKHB0czogbnVtYmVyW11bXVtdLCBvdXQ6IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCB1djogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtwMCwgcDFdIG9mIHB0cykge1xuICAgICAgY29uc3QgcTAgPSBwMCwgcTEgPSBwMSwgcTIgPSBbcDFbMF0sIHAxWzFdIC0gdCwgcDFbMl1dLCBxMyA9IFtwMFswXSwgcDBbMV0gLSB0LCBwMFsyXV07XG4gICAgICBjb25zdCBlMSA9IFtxMVswXSAtIHEwWzBdLCBxMVsxXSAtIHEwWzFdLCBxMVsyXSAtIHEwWzJdXSwgZTIgPSBbcTJbMF0gLSBxMFswXSwgcTJbMV0gLSBxMFsxXSwgcTJbMl0gLSBxMFsyXV07XG4gICAgICBjb25zdCBuID0gW2UxWzFdICogZTJbMl0gLSBlMVsyXSAqIGUyWzFdLCBlMVsyXSAqIGUyWzBdIC0gZTFbMF0gKiBlMlsyXSwgZTFbMF0gKiBlMlsxXSAtIGUxWzFdICogZTJbMF1dO1xuICAgICAgY29uc3QgdHJpID0gblswXSAqIG91dFswXSArIG5bMV0gKiBvdXRbMV0gKyBuWzJdICogb3V0WzJdID49IDAgPyBbcTAsIHExLCBxMiwgcTAsIHEyLCBxM10gOiBbcTAsIHEyLCBxMSwgcTAsIHEzLCBxMl07XG4gICAgICBmb3IgKGNvbnN0IHEgb2YgdHJpKSB7IHBvcy5wdXNoKHFbMF0sIHFbMV0sIHFbMl0pOyB1di5wdXNoKDAsIDApOyB9XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHRvcCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4gW1goaSksIEhoW2pdW2ldLCBaKGopXTtcbiAgY29uc3QgZTA6IG51bWJlcltdW11bXSA9IFtdLCBlMTogbnVtYmVyW11bXVtdID0gW10sIGUyOiBudW1iZXJbXVtdW10gPSBbXSwgZTM6IG51bWJlcltdW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHsgZTAucHVzaChbdG9wKGksIDApLCB0b3AoaSArIDEsIDApXSk7IGUxLnB1c2goW3RvcChpLCBueiksIHRvcChpICsgMSwgbnopXSk7IH1cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSB7IGUyLnB1c2goW3RvcCgwLCBqKSwgdG9wKDAsIGogKyAxKV0pOyBlMy5wdXNoKFt0b3AobngsIGopLCB0b3AobngsIGogKyAxKV0pOyB9XG4gIGNvbnN0IGVkZ2VzID0gW3N0cmlwKGUwLCBbMCwgMCwgLTFdKSwgc3RyaXAoZTEsIFswLCAwLCAxXSksIHN0cmlwKGUyLCBbLTEsIDAsIDBdKSwgc3RyaXAoZTMsIFsxLCAwLCAwXSldO1xuICAvLyB0aGUgcmltIGlzIHRoZSBzZWFtIGJldHdlZW4gdGhlIHR3byBmYWNlcywgc28gaXQgdGFrZXMgdGhlIFVOREVSIGNvbG91cjogb24gYSBkcmFwZWQgdGFycCB0aGVcbiAgLy8gZWRnZSBpcyB3aGF0IGEgdmlld2VyIHN0YW5kaW5nIGJlc2lkZSBpdCBhY3R1YWxseSBzZWVzLCBhbmQgaXQgaXMgdGhlIGxpbmluZywgbm90IHRoZSB0b3AuXG4gIHBhcnRzLnB1c2goLi4uKHMuaGV4VW5kZXIgIT09IHVuZGVmaW5lZCA/IGVkZ2VzLm1hcCgoZykgPT4gcGFpbnQoZywgcy5oZXhVbmRlcikpIDogZWRnZXMpKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhwYXJ0cyk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmZW5jZSBoZWxwZXJzICovXG5cbi8qKiBQYW5lbCBVVnM6IHUgYWxvbmcgd29ybGQgWCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB2IHdvcmxkIEhFSUdIVCBvdmVyIHRoZSBzYW1lLCByZWdhcmRsZXNzIG9mIHRoZVxuICogIGZhY2Ugbm9ybWFsLiBPbiBhIHRoaW4gc2xhYiB0aGlzIG1lYW5zIHRoZSBmcm9udCBhbmQgYmFjayBmYWNlcyBzaGFyZSB0aGUgc2FtZSB0aWxlIHBsYWNlbWVudFxuICogIGFuZCB0aGUgZWRnZXMgdGFrZSBhIHNsaXZlciBvZiBpdDsgYSBncmltZSB3YXNoIHRoYXQga2V5cyBvbiB2IHRoZW4gbGFuZHMgYXQgdGhlIHNhbWUgaGVpZ2h0IG9uXG4gKiAgZXZlcnkgZmFjZSwgd2hpY2ggaXMgd2hhdCByYWluIGFuZCBhbGdhZSBkby4gKi9cbmZ1bmN0aW9uIHBhbmVsVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlciwgcm90ID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICAvLyBgcm90YCBzd2FwcyB0aGUgYXhlcyBzbyBhIHRpbGUgb2YgVkVSVElDQUwgc3RyaXBzIHJlYWRzIGhvcml6b250YWwgLS0gdGhlIHdvdmVuIGJhbmRzIG9mIGFcbiAgLy8gYmFtYm9vIHBhbmVsIGFnYWluc3QgaXRzIHZlcnRpY2FsIG11bGxpb25zLCBvbmUgdGlsZSwgb25lIG1hdGVyaWFsLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHUgPSByb3QgPyBwLmdldFkoaSkgOiBwLmdldFgoaSksIHYgPSByb3QgPyBwLmdldFgoaSkgOiBwLmdldFkoaSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQSBzcXVhcmUgcHlyYW1pZCBTUElLRTogYmFzZSB3IHggdyBhdCBgYXRgLCBhcGV4IGggYWJvdmUuIEEgcGlja2V0J3Mgc3BlYXIgcG9pbnQsIGEgcGllciBjYXAuICovXG5mdW5jdGlvbiBzcGlrZShhdDogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkNvbmVHZW9tZXRyeSh3IC8gTWF0aC5TUVJUMiwgaCwgNCwgMSwgZmFsc2UpO1xuICBnLnJvdGF0ZVkoTWF0aC5QSSAvIDQpO1xuICBnLnRyYW5zbGF0ZShhdFswXSwgYXRbMV0gKyBoIC8gMiwgYXRbMl0pO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEdSSU1FIHRpbGU6IGEgbXVsdGlwbGllciBvZiB3aGl0ZSB3aXRoIChhKSBhIGRhcmsgd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsXG4gKiAoYikgdmVydGljYWwgcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcCwgKGMpIHNvZnQgZGFyayBibG90Y2hlcywgKGQpIG9wdGlvbmFsIGdyZWVuIG1vc3MvYWxnYWVcbiAqIGJsb2JzIGNvbmNlbnRyYXRlZCBpbiB0aGUgYm90dG9tIGJhbmQsIGFuZCAoZSkgZmluZSBncmFpbi4gRXZlcnkgY29sb3VyIGlzIGEgZnJhY3Rpb24gb2YgdGhlXG4gKiBtYXRlcmlhbCdzIG1lYXN1cmVkIGFsYmVkbywgYW5kIHRoZSBkYXJrZXN0IGNvcmUgaXMgY2xhbXBlZCBzbyBub3RoaW5nIG9uIGEgd2hpdGUgb3IgY3JlYW1cbiAqIHN1cmZhY2UgZHJvcHMgdG93YXJkIHRoZSBob2xlIGdhdGUncyBsdW1hIDU4LlxuICovXG5mdW5jdGlvbiBncmltZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3Qgd2FzaCA9IG8ud2FzaCA/PyBbMC42MiwgMC42MiwgMC41OF0sIHdhc2hBID0gby53YXNoQWxwaGEgPz8gMC43LCBjb3YgPSBvLmNvdmVyYWdlID8/IDAuMztcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgLy8gcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAyNik7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMiwgbGVuID0gcyAqICgwLjE1ICsgcm5kKCkgKiAwLjYpLCBhID0gMC4wNSArIHJuZCgpICogMC4xMjtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgY3R4LmZpbGxSZWN0KHgsIDAsIHcsIGxlbik7IGN0eC5maWxsUmVjdCh4IC0gcywgMCwgdywgbGVuKTtcbiAgICB9XG4gICAgLy8gZ3JvdW5kIHdhc2hcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdikpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBfSlgKTsgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQSAqIDAuNDV9KWApOyBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGJsb3RjaGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ibG90Y2hlcyA/PyA0MCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMS42KSAqIHMsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNiwgYSA9IDAuMDggKyBybmQoKSAqIDAuMztcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIG1vc3MgLyBhbGdhZSBpbiB0aGUgYm90dG9tIGJhbmQ6IGNsdXN0ZXJlZCBzcGVja3MsIGJyaWdodGVyLXRoYW4td2FzaCBncmVlblxuICAgIGlmIChvLm1vc3MpIHtcbiAgICAgIGNvbnN0IG0gPSBvLm1vc3MsIGJhbmQgPSBvLm1vc3NCYW5kID8/IDAuMjI7XG4gICAgICAvLyBhIGZhaW50IGdyZWVuIHdhc2ggb3ZlciB0aGUgd2hvbGUgYmFuZCBmaXJzdCwgc28gdGhlIGNhcnBldHMgc2l0IGluIGRhbXAgZ3JvdW5kIHJhdGhlciB0aGFuXG4gICAgICAvLyBhcyBpc29sYXRlZCBkb3RzIG9uIGNsZWFuIHBhaW50XG4gICAgICBjb25zdCBtZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBiYW5kICogMS4zKSk7XG4gICAgICBtZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobSl9LCR7by5tb3NzV2FzaCA/PyAwLjM1fSlgKTsgbWcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKG0pfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG1nOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLm1vc3NDbHVzdGVycyA/PyAxNCk7IGsrKykge1xuICAgICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuNikgKiBzICogYmFuZCwgY3IgPSBzICogKDAuMDE1ICsgcm5kKCkgKiAwLjA0KTtcbiAgICAgICAgLy8gdGhlIGNhcnBldDogYSBzb2Z0IGJsb2IsIHRoZW4gc3BlY2tzIG92ZXIgaXQgZm9yIHRoZSB0dWZ0ZWQgZWRnZVxuICAgICAgICBjb25zdCBjZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3ksIDAsIGN4LCBjeSwgY3IpO1xuICAgICAgICBjZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobSl9LDAuNylgKTsgY2cuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2IobSl9LDAuMzUpYCk7IGNnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihtKX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNnO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCArIGR4LCBjeSwgY3IsIGNyICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQgKiAwLjYsIHIgPSAxICsgcm5kKCkgKiAzO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihtKX0sJHswLjM1ICsgcm5kKCkgKiAwLjV9KWA7XG4gICAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGdyYWluXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHYgPSAyMDAgKyBNYXRoLnJvdW5kKHJuZCgpICogNTUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMTIpYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEuNSwgMS41KTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogQ0hBSU4tTElOSyB0aWxlOiBhIGRpYW1vbmQgd2lyZSBsYXR0aWNlIGRyYXduIG9wYXF1ZSBvdmVyIGEgVFJBTlNQQVJFTlQgZ3JvdW5kLCBib3VuZCBhcyBtYXBcbiAqICBvbiBhbiBhbHBoYS10ZXN0ZWQgbWF0ZXJpYWwgc28gdGhlIGNlbGxzIGFyZSBvcGVuLiBPbmUgdGlsZSBpcyBvbmUgZGlhbW9uZCBjZWxsOyB0aGUgcGFuZSdzXG4gKiAgVVZzIHJlcGVhdCBpdCBhdCB0aGUgcmVhbCBtZXNoIHBpdGNoLiBgd2lyZWAgaXMgdGhlIHdpcmUgd2lkdGggYXMgYSBmcmFjdGlvbiBvZiB0aGUgY2VsbC4gKi9cbmZ1bmN0aW9uIGNoYWlubGlua1RpbGUoc2l6ZTogbnVtYmVyLCB3aXJlOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5saW5lV2lkdGggPSBNYXRoLm1heCgxLjUsIHdpcmUgKiBzKTtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgY29uc3QgdiA9IDE1MCArIE1hdGgucm91bmQocm5kKCkgKiAzMCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYigke3Z9LCR7diArIDJ9LCR7diArIDR9KWA7XG4gICAgLy8gdHdvIGRpYWdvbmFscyB0aHJvdWdoIHRoZSB0aWxlLCBvZmZzZXQgc28gdGhlIHdyYXAgbWFrZXMgYSBjb250aW51b3VzIGRpYW1vbmQgbGF0dGljZVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDApOyBjdHgubGluZVRvKHMsIHMpO1xuICAgIGN0eC5tb3ZlVG8ocywgMCk7IGN0eC5saW5lVG8oMCwgcyk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIHRoZSBrbnVja2xlIHdoZXJlIHdpcmVzIHR3aXN0IHJvdW5kIGVhY2ggb3RoZXIsIGF0IHRoZSB0d28gY3Jvc3NpbmdzIG9uIHRoZSB0aWxlIGVkZ2VzXG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2IC0gMjB9LCR7diAtIDE4fSwke3YgLSAxNn0pYDtcbiAgICBmb3IgKGNvbnN0IFt4LCB5XSBvZiBbWzAsIDBdLCBbcywgMF0sIFswLCBzXSwgW3MsIHNdLCBbcyAvIDIsIHMgLyAyXV0pIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCBjdHgubGluZVdpZHRoICogMC45LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIEJBTUJPTyBTVFJJUCB0aWxlOiB2ZXJ0aWNhbCBzcGxpdC1iYW1ib28gc3RyaXBzIHdpdGggcGFsZSBjdWxtIGZhY2VzLCBkYXJrIGpvaW50cyBiZXR3ZWVuIHRoZW1cbiAqICBhbmQgYSBub2RlIGxpbmUgb3IgdHdvIC0tIGEgbXVsdGlwbGllciBvbiB0aGUgbWVhc3VyZWQgc2lsdmVyLWdyZXkuICovXG5mdW5jdGlvbiBiYW1ib29UaWxlKHNpemU6IG51bWJlciwgc3RyaXBzOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3Qgc3cgPSBzIC8gc3RyaXBzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgc3RyaXBzOyBiKyspIHtcbiAgICAgIGNvbnN0IHRvbmUgPSAwLjgwICsgcm5kKCkgKiAwLjIsIHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3YgLSAyfSwke3YgLSA2fSlgOyBjdHguZmlsbFJlY3QoYiAqIHN3LCAwLCBzdywgcyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTAsNDIsMzQsMC42KSc7IGN0eC5maWxsUmVjdChiICogc3csIDAsIE1hdGgubWF4KDEsIHMgKiAwLjAwNiksIHMpO1xuICAgICAgLy8gYSBoaWdobGlnaHQgZG93biB0aGUgY3VsbSdzIHJvdW5kXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xMCknOyBjdHguZmlsbFJlY3QoYiAqIHN3ICsgc3cgKiAwLjM1LCAwLCBzdyAqIDAuMjUsIHMpO1xuICAgICAgLy8gbm9kZSByaW5nc1xuICAgICAgY29uc3QgbiA9IDEgKyBNYXRoLmZsb29yKHJuZCgpICogMik7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykgeyBjb25zdCB5ID0gcm5kKCkgKiBzOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNzAsNjAsNDgsMC40NSknOyBjdHguZmlsbFJlY3QoYiAqIHN3LCB5LCBzdywgTWF0aC5tYXgoMSwgcyAqIDAuMDA4KSk7IH1cbiAgICAgIC8vIGZpbmUgZ3JhaW4gbGluZXNcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNjsgaysrKSB7IGNvbnN0IHggPSBiICogc3cgKyBybmQoKSAqIHN3OyBjdHguZmlsbFN0eWxlID0gYHJnYmEoODAsNzAsNTgsJHswLjA1ICsgcm5kKCkgKiAwLjF9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTsgfVxuICAgIH1cbiAgICAvLyBtb3VsZCBzcGVja2xlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDA7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzAsMjgsMjQsMC4xOCknOyBjdHguZmlsbFJlY3QoeCwgeSwgMSArIHJuZCgpICogMiwgMSArIHJuZCgpICogMik7IH1cbiAgfSk7XG59XG5cbi8qKiBQT1NURVIgdGlsZSBmb3IgYSBob2FyZGluZzogdG9ybiBwYXN0ZS11cCBzaGVldHMgYW5kIGEgc3ByYXkgc3RlbmNpbCBvdmVyIGEgVFJBTlNQQVJFTlQgZ3JvdW5kLFxuICogIGJvdW5kIG9uIGFuIGFscGhhLXRlc3RlZCBwYW5lIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBzaGVldC4gYGxpbmVzYCBhcmUgdGhlIHN0ZW5jaWxcbiAqICBzdHJpbmdzOyBhIHByaW50ZWQgZ3JhcGhpYyBpcyBleGFjdGx5IHRoZSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgY2FzZS4gKi9cbmZ1bmN0aW9uIHBvc3RlclRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIGxpbmVzOiBzdHJpbmdbXSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIHBhc3RlLXVwczogb3ZlcmxhcHBpbmcgb2ZmLXdoaXRlIHJlY3RhbmdsZXMgd2l0aCB0b3JuIGVkZ2VzIGFuZCBmYWludCBwcmludCBsaW5lc1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjMwKSwgeSA9IHMgKiAoMC4xNSArIHJuZCgpICogMC40NSksIHcgPSBzICogKDAuMTQgKyBybmQoKSAqIDAuMTYpLCBoID0gcyAqICgwLjE4ICsgcm5kKCkgKiAwLjIyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgkezIyNSArIE1hdGgucm91bmQocm5kKCkgKiAyMCl9LCR7MjIyICsgTWF0aC5yb3VuZChybmQoKSAqIDE4KX0sJHsyMTAgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwwLjk2KWA7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICBjb25zdCBuID0gOTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgY3R4LmxpbmVUbyh4ICsgdyAqIGkgLyBuLCB5ICsgKHJuZCgpIC0gMC41KSAqIGggKiAwLjA4KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgY3R4LmxpbmVUbyh4ICsgdyArIChybmQoKSAtIDAuNSkgKiB3ICogMC4wOCwgeSArIGggKiBpIC8gbik7XG4gICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSBjdHgubGluZVRvKHggKyB3ICogaSAvIG4sIHkgKyBoICsgKHJuZCgpIC0gMC41KSAqIGggKiAwLjEyKTtcbiAgICAgIGZvciAobGV0IGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIGN0eC5saW5lVG8oeCArIChybmQoKSAtIDAuNSkgKiB3ICogMC4wOCwgeSArIGggKiBpIC8gbik7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsNDAsNDUsMC41NSknO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIGN0eC5maWxsUmVjdCh4ICsgdyAqIDAuMSwgeSArIGggKiAoMC4yICsgaSAqIDAuMSksIHcgKiAoMC4zICsgcm5kKCkgKiAwLjUpLCBNYXRoLm1heCgxLCBzICogMC4wMDYpKTtcbiAgICB9XG4gICAgLy8gc3ByYXkgc3RlbmNpbCwgc2xpZ2h0bHkgc29mdCBhbmQgdW5ldmVuXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDIwLDIyLDAuODgpJztcbiAgICBjdHguZm9udCA9IGBib2xkICR7TWF0aC5yb3VuZChzICogMC4wNyl9cHggc2Fucy1zZXJpZmA7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBzICogMC40MCwgeSA9IHMgKiAoMC40NCArIGkgKiAwLjEzKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMzsgaysrKSB7IGN0eC5nbG9iYWxBbHBoYSA9IDAuNjsgY3R4LmZpbGxUZXh0KGxpbmVzW2ldLCB4ICsgKHJuZCgpIC0gMC41KSAqIDMsIHkgKyAocm5kKCkgLSAwLjUpICogMyk7IH1cbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFNUUklQRSB0aWxlOiBhbHRlcm5hdGluZyBjb2xvdXIgYmFuZHMgYWxvbmcgdSAoYW4gYXduaW5nKSwgd2l0aCBhIHNvZnQgZ3JpbWUgbXVsdGlwbHkgc28gdGhlIGNsb3RoXG4gKiAgcmVhZHMgd29ybiByYXRoZXIgdGhhbiBwcmludGVkLiBgYWAvYGJgIGFyZSB0aGUgdHdvIGJhbmQgY29sb3VycyBhcyBbcixnLGJdIDAtMS4gQm91bmQgYXMgbWFwIG9uIGFcbiAqICBXSElURSBtYXRlcmlhbCBzbyB0aGUgYmFuZHMgY2FycnkgdGhlIHdob2xlIGFsYmVkby4gKi9cbmZ1bmN0aW9uIHN0cmlwZVRpbGUoc2l6ZTogbnVtYmVyLCBiYW5kczogbnVtYmVyLCBhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX0pYDtcbiAgICBjb25zdCB3ID0gcyAvIGJhbmRzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFuZHM7IGkrKykgeyBjdHguZmlsbFN0eWxlID0gcmdiKGkgJSAyID8gYiA6IGEpOyBjdHguZmlsbFJlY3QoTWF0aC5mbG9vcihpICogdyksIDAsIE1hdGguY2VpbCh3KSArIDEsIHMpOyB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gNCArIHJuZCgpICogcyAqIDAuMDgsIGFsID0gMC4wNiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDE1MCwxNDAsMTI1LCR7YWx9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTUwLDE0MCwxMjUsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjAwOyBpKyspIHsgY29uc3QgdiA9IDIwMCArIE1hdGgucm91bmQocm5kKCkgKiA1NSk7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjEwKWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMS41LCAxLjUpOyB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogU2VhbWxlc3MgYXJvdW5kLWJ5LXVwIFVWcyBmb3IgYSBMYXRoZUdlb21ldHJ5OiB1IGZyb20gdGhlIFNFR01FTlQgaW5kZXggKHRoZSBsYXRoZSBvcmRlcnMgaXRzXG4gKiAgdmVydGljZXMgc2VnbWVudC1tYWpvciwgaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpLCBzbyB0aGUgZHVwbGljYXRlZCBzZWFtIGNvbHVtbiByZWFkc1xuICogIHUgPSByZXBlYXRzIGV4YWN0bHkgYW5kIFJlcGVhdFdyYXBwaW5nIGNsb3NlcyBpdC4gYHNjYWxlYCBpcyB0aGUgdGlsZSBzaXplIGluIG1ldHJlczsgdGhlXG4gKiAgYXJvdW5kLXJlcGVhdCBjb3VudCBpcyByb3VuZGVkIHNvIHRoZSB0aWxlIG1lZXRzIGl0c2VsZiwgZnJvbSB0aGUgcHJvZmlsZSdzIHdpZGVzdCByYWRpdXMuICovXG5mdW5jdGlvbiBsYXRoZVVWKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBwb2ludENvdW50OiBudW1iZXIsIHNlZzogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCB2U2NhbGUgPSBzY2FsZSwgdjAgPSAwKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgbGV0IHJNYXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykgck1heCA9IE1hdGgubWF4KHJNYXgsIE1hdGguaHlwb3QocC5nZXRYKGkpLCBwLmdldFooaSkpKTtcbiAgY29uc3QgcmVwID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCgyICogTWF0aC5QSSAqIHJNYXggLyBzY2FsZSkpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKGkgLyBwb2ludENvdW50KTtcbiAgICB1dltpICogMl0gPSAocyAvIHNlZykgKiByZXA7IHV2W2kgKiAyICsgMV0gPSAocC5nZXRZKGkpIC0gdjApIC8gdlNjYWxlO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbn1cblxuLyoqIEVYUE9TRUQtQUdHUkVHQVRFIHRpbGU6IGEgZGFyayBtb3J0YXIgZ3JvdW5kIHBhY2tlZCB3aXRoIHJvdW5kZWQgcGViYmxlcyBpbiBhIG1lYXN1cmVkIHBhbGV0dGUsXG4gKiAgZWFjaCBkcmF3biBhdCBuaW5lIHdyYXBwZWQgb2Zmc2V0cyBzbyB0aGUgdGlsZSBpcyBzZWFtbGVzcy4gYG8ucGFsZXR0ZWAgaXMgYSBsaXN0IG9mIFtyLGcsYl1cbiAqICByYXRpb3MgYWdhaW5zdCB0aGUgbWF0ZXJpYWwgY29sb3VyLCBgby5ncm91bmRgIHRoZSBtb3J0YXIgcmF0aW8sIGBvLmNvdW50YCB0aGUgcGViYmxlIGNvdW50LiAqL1xuZnVuY3Rpb24gcGViYmxlVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYHJnYigke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfSlgO1xuICAgIGN0eC5maWxsU3R5bGUgPSByZ2Ioby5ncm91bmQgPz8gWzAuNDUsIDAuNDIsIDAuMzhdKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IHBhbDogbnVtYmVyW11bXSA9IG8ucGFsZXR0ZSA/PyBbWzAuODUsIDAuNzgsIDAuNjZdLCBbMC43MiwgMC42MiwgMC41MF0sIFswLjYwLCAwLjU4LCAwLjU1XSwgWzAuOTAsIDAuODYsIDAuODBdXTtcbiAgICBjb25zdCBuID0gby5jb3VudCA/PyA5MDAsIHJNaW4gPSBzICogKG8uck1pbiA/PyAwLjAxMiksIHJNYXggPSBzICogKG8uck1heCA/PyAwLjAyOCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHJ4ID0gck1pbiArIHJuZCgpICogKHJNYXggLSByTWluKSwgcnkgPSByeCAqICgwLjYgKyBybmQoKSAqIDAuNSksIGEgPSBybmQoKSAqIE1hdGguUEk7XG4gICAgICBjb25zdCBjID0gcGFsW01hdGguZmxvb3Iocm5kKCkgKiBwYWwubGVuZ3RoKV0sIGsgPSAwLjg1ICsgcm5kKCkgKiAwLjM7XG4gICAgICBjdHguZmlsbFN0eWxlID0gcmdiKGMubWFwKCh2KSA9PiBNYXRoLm1pbigxLCB2ICogaykpKTtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHJ4LCByeSwgYSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAvLyBhIGhpZ2hsaWdodCBjcmVzY2VudCBvbiB0aGUgbGl0IHNpZGUgc28gZWFjaCBzdG9uZSByZWFkcyBhcyBhIGJ1bXBcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjE4KSc7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCAtIHJ4ICogMC4yLCB5ICsgZHkgLSByeSAqIDAuMjUsIHJ4ICogMC41LCByeSAqIDAuNCwgYSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFRZUkUgVFJFQUQgdGlsZSBmb3IgYSBsYXRoZSBjYXJyeWluZyBgY3lsVVZgOiB1IHJ1bnMgQVJPVU5EIHRoZSB0eXJlIGFuZCB2IFVQIGl0LCBzbyB0cmVhZCBzbG90cyBhcmVcbiAqICBiYXJzIGF0IGNvbnN0YW50IHUgYW5kIHRoZSBjaXJjdW1mZXJlbnRpYWwgZ3Jvb3ZlcyBhcmUgbGluZXMgYXQgY29uc3RhbnQgdi4gRHJhd24gYXMgcmF0aW9zIG9uIHdoaXRlXG4gKiAgYW5kIG11bHRpcGxpZWQgaW50byB0aGUgKGxpZnRlZCkgcnViYmVyIGNvbG91cjsgYG8uZ3Jvb3ZlYCBpcyB0aGUgZGFya2VzdCByYXRpbywga2VwdCBhYm92ZSB0aGVcbiAqICBsdW1hLTU4IGhvbGUgYmFuZCBieSB0aGUgY2FsbGVyLiBgby5zbG90c2AgYmFycyBwZXIgdGlsZSwgYG8ucmluZ3NgIGNpcmN1bWZlcmVudGlhbCBsaW5lcy4gKi9cbmZ1bmN0aW9uIHRyZWFkVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGdyb292ZSA9IG8uZ3Jvb3ZlID8/IDAuODAsIHNsb3RzID0gby5zbG90cyA/PyAyLCByaW5ncyA9IG8ucmluZ3MgPz8gMjtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgY29uc3QgZ3YgPSBNYXRoLnJvdW5kKDI1NSAqIGdyb292ZSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICBjb25zdCBwaXRjaCA9IHMgLyBzbG90cywgdyA9IHBpdGNoICogKG8uc2xvdFdpZHRoID8/IDAuMTYpO1xuICAgIC8vIHRyZWFkIHNsb3RzIHNwYW4gdGhlIGJhbmQgYmV0d2VlbiB0aGUgdHdvIGVkZ2Ugc2hvdWxkZXJzICh2IDAuMTIuLjAuODggb2YgdGhlIHRpbGUpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbG90czsgaSsrKSB7IGNvbnN0IHggPSBpICogcGl0Y2ggKyBwaXRjaCAqIDAuNCArIChybmQoKSAtIDAuNSkgKiBwaXRjaCAqIDAuMTsgY3R4LmZpbGxSZWN0KHgsIHMgKiAwLjEyLCB3LCBzICogMC43Nik7IGN0eC5maWxsUmVjdCh4IC0gcywgcyAqIDAuMTIsIHcsIHMgKiAwLjc2KTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmluZ3M7IGkrKykgeyBjb25zdCB5ID0gcyAqICgwLjIgKyAwLjYgKiAoaSArIDAuNSkgLyByaW5ncyk7IGN0eC5maWxsUmVjdCgwLCB5IC0gMS41LCBzLCAzKTsgfVxuICAgIC8vIHNpZGV3YWxsIHNoZWVuOiBhIHNvZnQgbGlnaHRlciB3YXNoIHNvIHRoZSBydWJiZXIgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTIpLCB2ID0gMjM1ICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpOyBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC41KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0gfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIE9MRCBUWVJFIHRpbGU6IFRXTyB0eXJlIGhlaWdodHMgdGFsbCBieSBgby5waXRjaGAgbWV0cmVzIGFyb3VuZCAoY3lsVVYpLiBUaGUgdXBwZXIgaGFsZiAodiAwLjUtMSlcbiAqICBpcyBhIHRyZWFkZWQgdHlyZSwgdGhlIGxvd2VyIGhhbGYgKHYgMC0wLjUpIGEgd29ybiBTTElDSyB3aXRoIGNpcmN1bWZlcmVudGlhbCBncm9vdmVzIGFuZCBzaG9ydFxuICogIHNob3VsZGVyIHNpcGVzIG9ubHksIHNvIGEgc3RhY2sgbWl4ZXMgYmFsZCBhbmQgdHJlYWRlZCB0eXJlcyBvZmYgb25lIGNhbnZhcyBieSB2MC4gRHJhd24gYXMgUkFUSU9TXG4gKiAgYWdhaW5zdCB0aGUgdmVydGV4LWNvbG91cmVkIHJ1YmJlciBhdCBgYmFzZWAgKDIwMC8yNTUgLT4gdmVydGV4IHRvbmVzIGFyZSBhdXRob3JlZCAxLjI3NXggdGhlXG4gKiAgaW50ZW5kZWQgYWxiZWRvIHNvIGR1c3QgYW5kIHNjdWZmcyBjYW4gZ28gQlJJR0hURVIgdGhhbiB0aGUgcnViYmVyIHVuZGVyIGEgbXVsdGlwbHkgY2FudmFzKS5cbiAqICBSb3dzIGFyZSBoZWlnaHRzOiBsb3dlciBzaWRld2FsbCwgdHJlYWQgYmFuZCAodiBgby5iYW5kWzBdYC4uYG8uYmFuZFsxXWAgb2YgdGhlIHN0cmlwKSwgdXBwZXJcbiAqICBzaWRld2FsbCB3aXRoIGJlYWQgcmluZ3MgYW5kIG1vdWxkIGxpbmVzLiBXZWFyOiBhIHdhcm0gZHVzdCB3YXNoIG9uIHRoZSBsb3dlciBzaG91bGRlciwgZ3JleSBzY3VmZnNcbiAqICBvbiBib3RoIHNob3VsZGVycywgZHVzdCBjYXVnaHQgaW4gdGhlIGN1dHMsIGdyYWluIG92ZXIgZXZlcnl0aGluZy4gKi9cbmZ1bmN0aW9uIHR5cmVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyAyMDAsIGJhbmQgPSBvLmJhbmQgPz8gWzAuMjQsIDAuNzZdLCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjQ1O1xuICAgIGNvbnN0IGd2ID0gTWF0aC5yb3VuZChiYXNlICogZ3Jvb3ZlKSwgcnYgPSBNYXRoLnJvdW5kKGJhc2UgKiAwLjcpLCBtdiA9IE1hdGgucm91bmQoYmFzZSAqIDAuOSk7XG4gICAgY29uc3QgZHVzdCA9IG8uZHVzdCA/PyBbMjMyLCAyMTQsIDE5MF07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtiYXNlfSwke2Jhc2V9LCR7YmFzZX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcyAqIHMgLyA2OyBpKyspIHsgY29uc3QgdiA9IGJhc2UgKyBNYXRoLnJvdW5kKChybmQoKSAtIDAuNSkgKiAyMik7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMiwgMik7IH1cbiAgICAvLyBvbmUgdHlyZSBzdHJpcCBiZXR3ZWVuIGNhbnZhcyByb3dzIHlhICh0b3ApIGFuZCB5YiAoYm90dG9tKTsgY2FudmFzIHkgZ3Jvd3MgRE9XTiwgdiBncm93cyBVUFxuICAgIGNvbnN0IHN0cmlwID0gKHlhOiBudW1iZXIsIHliOiBudW1iZXIsIHRyZWFkZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IGggPSB5YiAtIHlhLCBiMCA9IHlhICsgaCAqICgxIC0gYmFuZFsxXSksIGIxID0geWEgKyBoICogKDEgLSBiYW5kWzBdKTtcbiAgICAgIGNvbnN0IG5nID0gby5ncm9vdmVzID8/IDMsIGd3ID0gaCAqIDAuMDI0O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmc7IGkrKykgeyBjb25zdCB5ID0gYjAgKyAoYjEgLSBiMCkgKiAoaSArIDEpIC8gKG5nICsgMSk7IGN0eC5maWxsUmVjdCgwLCB5IC0gZ3cgLyAyLCBzLCBndyk7IH1cbiAgICAgIGNvbnN0IG5zID0gby5zaXBlcyA/PyAyLCB3ID0gcyAqIChvLnNpcGVXaWR0aCA/PyAwLjA1KTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDw9IG5nOyBrKyspIHtcbiAgICAgICAgY29uc3QgeTAgPSBrID09PSAwID8gYjAgOiBiMCArIChiMSAtIGIwKSAqIGsgLyAobmcgKyAxKSArIGd3IC8gMiwgeTEgPSBrID09PSBuZyA/IGIxIDogYjAgKyAoYjEgLSBiMCkgKiAoayArIDEpIC8gKG5nICsgMSkgLSBndyAvIDI7XG4gICAgICAgIC8vIGEgc2xpY2sga2VlcHMgb25seSBTSE9SVCBzaXBlcyBhdCB0aGUgdHdvIHNob3VsZGVyIHJvd3MsIGN1dCBpbiBmcm9tIHRoZSBiYW5kIGVkZ2VcbiAgICAgICAgY29uc3Qgb3V0ZXIgPSBrID09PSAwIHx8IGsgPT09IG5nO1xuICAgICAgICBpZiAoIXRyZWFkZWQgJiYgIW91dGVyKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgeXMwID0gdHJlYWRlZCA/IHkwIDogKGsgPT09IDAgPyB5MCA6IHkxIC0gKHkxIC0geTApICogMC40NSksIHlzMSA9IHRyZWFkZWQgPyB5MSA6IChrID09PSAwID8geTAgKyAoeTEgLSB5MCkgKiAwLjQ1IDogeTEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5zOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0gKChpICsgMC41KSAvIG5zICsgKGsgJSAyKSAqIDAuNSAvIG5zKSAqIHMgKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMDYsIHNsID0gKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA4O1xuICAgICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcsIHlzMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdyArIHNsLCB5czEpOyBjdHgubGluZVRvKHggKyBkeCArIHNsLCB5czEpOyBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gc2hvdWxkZXIgc3RlcCBhdCB0aGUgdG9wIG9mIHRoZSBiYW5kLCBiZWFkIHJpbmdzIGFuZCBtb3VsZCBsaW5lcyBvbiB0aGUgc2lkZXdhbGxzXG4gICAgICBjb25zdCBzaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBiMCAtIGggKiAwLjAzLCAwLCBiMCArIGggKiAwLjAyKTsgc2guYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9LDApYCk7IHNoLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2d2fSwke2d2fSwke2d2fSwwLjQ1KWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHNoOyBjdHguZmlsbFJlY3QoMCwgYjAgLSBoICogMC4wMywgcywgaCAqIDAuMDUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtydn0sJHtydn0sJHtydn0pYDsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuMDQ1LCBzLCBoICogMC4wMTIpOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC45NCwgcywgaCAqIDAuMDEyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7bXZ9LCR7bXZ9LCR7bXZ9KWA7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjExLCBzLCAyKTsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuODgsIHMsIDIpO1xuICAgICAgLy8gd2Vhcjogd2FybSByb2FkIGR1c3Qgb24gdGhlIGxvd2VyIHNob3VsZGVyIGFuZCBzaWRld2FsbCwgZ3JleSBzY3VmZnMgb24gYm90aCBzaG91bGRlcnNcbiAgICAgIGNvbnN0IGRnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliLCAwLCB5YSArIGggKiAwLjYpOyBkZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtkdXN0WzBdfSwke2R1c3RbMV19LCR7ZHVzdFsyXX0sJHtvLmR1c3RBbHBoYSA/PyAwLjM1fSlgKTsgZGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZGc7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjYsIHMsIGggKiAwLjQpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3VmZnMgPz8gMTQpOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpIDwgMC41ID8gYjAgKyAocm5kKCkgLSAwLjMpICogaCAqIDAuMDggOiBiMSArIChybmQoKSAtIDAuNykgKiBoICogMC4wOCwgciA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSksIHYgPSAyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjUpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTsgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuNSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5LCByICogMi4yLCByICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcic7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IGIwICsgcm5kKCkgKiAoYjEgLSBiMCksIHYgPSA2ICsgTWF0aC5yb3VuZChybmQoKSAqIDE0KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOSl9LCR7TWF0aC5yb3VuZCh2ICogMC43NSl9KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAyICsgcm5kKCkgKiA2LCAyICsgcm5kKCkgKiAzKTsgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfTtcbiAgICBzdHJpcCgwLCBzIC8gMiwgdHJ1ZSk7ICAgICAgLy8gdiAwLjUuLjE6IHRyZWFkZWRcbiAgICBzdHJpcChzIC8gMiwgcywgZmFsc2UpOyAgICAgLy8gdiAwLi4wLjU6IHNsaWNrXG4gIH0pO1xufVxuXG4vKiogQSB0YXBlcmVkIGJveDogQm94R2VvbWV0cnkoMSwgaCwgMSkgd2hvc2UgeC96IGFyZSBzY2FsZWQgcGVyIHZlcnRleCBieSB0aGUgZm9vdHByaW50IGludGVycG9sYXRlZFxuICogIGZyb20gKHcwLCBkMCkgYXQgdGhlIGJvdHRvbSB0byAodzEsIGQxKSBhdCB0aGUgdG9wLiBOb3JtYWxzIHJlY29tcHV0ZWQgc28gdGhlIHNsYW50ZWQgZmFjZXMgc2hhZGVcbiAqICBmbGF0LiBgYmAgPSBbY3gsIHlCb3R0b20sIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0uICovXG5mdW5jdGlvbiBmcnVzdHVtKGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBbY3gsIHkwLCBjeiwgdzAsIGQwLCB3MSwgZDEsIGhdID0gYjtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCBoLCAxKTtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSAocC5nZXRZKGkpICsgaCAvIDIpIC8gaDtcbiAgICBwLnNldFgoaSwgcC5nZXRYKGkpICogKHcwICsgKHcxIC0gdzApICogdCkpOyBwLnNldFooaSwgcC5nZXRaKGkpICogKGQwICsgKGQxIC0gZDApICogdCkpO1xuICB9XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgZy50cmFuc2xhdGUoY3gsIHkwICsgaCAvIDIsIGN6KTtcbiAgcmV0dXJuIGc7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY2Fub3B5LW1vZHVsZSBoZWxwZXJzXG4gKiBUaGUgZml2ZSBDQU5PUFkgTU9EVUxFUyAtLSBuaXBhIHRoYXRjaCwgdmV0aXZlciB0aGF0Y2gsIHNwbGl0IGJhbWJvbywgY29ycnVnYXRlZCBtZXRhbCxcbiAqIHRhcnBhdWxpbiAtLSBhcmUgb25lIGZhbWlseTogZm91ciBjb3JuZXIgcG9zdHMgaW5zaWRlIGEgNCB4IDQgbSBtb2R1bGUsIGEgaGVhZCBmcmFtZSwgYW5kIGEgcm9vZlxuICogd2hvc2UgbWF0ZXJpYWwgaXMgdGhlIHdob2xlIGlkZW50aXR5LiBXaGF0IHRoZXkgbmVlZCBiZXlvbmQgdGhlIHN0cmVldC1wcm9wIHZvY2FidWxhcnkgaXMgYVxuICogcm9vZmluZyB0aWxlIHBlciBtYXRlcmlhbCBhbmQgdGhlIGN1bG0gbWFwcGluZyBhIHJvdW5kIGJhbWJvbyBwb2xlIHdhbnRzLlxuICpcbiAqIGBjdWxtVVZgLCBgZ3JhaW5MaW5lc2AsIGB3ZWF0aGVyUGF0Y2hlc2AsIGBtb3VsZENsdXN0ZXJzYCBhbmQgYGN1bG1UaWxlYCBhcmUgcG9ydGVkIFZFUkJBVElNIGZyb21cbiAqIHNjcmF0Y2gvX2ZlbmNlL2ZlbmNlLmhlbHBlcnMudG1wbCwgd2hlcmUgdGhleSB3ZXJlIHdyaXR0ZW4gZm9yIHRoZSBiYW1ib28gZmVuY2UgcGFuZWwgYW5kIHdoZXJlXG4gKiB0aGUgcmVhc29uaW5nIGJlaGluZCBldmVyeSBudW1iZXIgaXMgcmVjb3JkZWQuIFRoZXkgYXJlIGNvcGllZCByYXRoZXIgdGhhbiBzaGFyZWQgYmVjYXVzZSB0aGUgdHdvXG4gKiBmYW1pbGllcyBrZWVwIHNlcGFyYXRlIHRlbXBsYXRlIHNldHM7IGEgdGhpcmQgZmFtaWx5IHdhbnRpbmcgdGhlbSBzaG91bGQgbW92ZSB0aGVtIHVwIGludG9cbiAqIGhlbHBlcnMudG1wbCByYXRoZXIgdGhhbiBjb3B5IHRoZW0gYSBzZWNvbmQgdGltZS5cbiAqL1xuXG4vKiogQ1VMTSBVVnM6IHUgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlIGFuZCB2IGFsb25nIHRoZSBsZW5ndGgsIGJvdGggaW4gbWV0cmVzIG92ZXIgYHNjYWxlYCwgc28gYVxuICogIGN1bG0gdGlsZSdzIG5vZGUgcmluZ3MgY3Jvc3MgdGhlIGN1bG0gYXQgcmVhbCBzcGFjaW5nIHdoaWNoZXZlciB3YXkgdGhlIGN5bGluZGVyIGlzIHRoZW4gcm90YXRlZC5cbiAqICBBcHBseSBCRUZPUkUgcm90YXRlL3RyYW5zbGF0ZS4gYHZPZmZgIHBoYXNlcyB0aGUgdGlsZSBhbG9uZyB0aGUgY3VsbSBzbyBubyB0d28gY3VsbXMgKG9yIGEgY29yZFxuICogIGNvbGxhcikgcmluZyBhdCB0aGUgc2FtZSBzdGF0aW9uLiAqL1xuZnVuY3Rpb24gY3VsbVVWKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCByOiBudW1iZXIsIGg6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdk9mZiA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gIGNvbnN0IGt1ID0gKDIgKiBNYXRoLlBJICogcikgLyBzY2FsZSwga3YgPSBoIC8gc2NhbGU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIGt1LCB1di5nZXRZKGkpICoga3YgKyB2T2ZmKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBGaW5lIGxvbmdpdHVkaW5hbCBncmFpbiBiZXR3ZWVuIHkwIGFuZCB5MSBhY3Jvc3MgYSBiYW5kIHgwLi54MTogbWFueSBoYWlybGluZXMsIG1vc3RseSBhIGRhcmtcbiAqICBmaWJyZSB0b25lLCBhIGZldyBibGVhY2hlZCwgc28gdGhlIHN1cmZhY2UgcmVhZHMgYXMgZmlicm91cyBiYW1ib28gcmF0aGVyIHRoYW4gcGFpbnQuICovXG5mdW5jdGlvbiBncmFpbkxpbmVzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBybmQ6ICgpID0+IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgbjogbnVtYmVyLCBkYXJrOiBzdHJpbmcsIGxpZ2h0OiBzdHJpbmcsIGFNYXg6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykge1xuICAgIGNvbnN0IHggPSB4MCArIHJuZCgpICogKHgxIC0geDApLCBhID0gMC4wNCArIHJuZCgpICogYU1heCwgdyA9IHJuZCgpIDwgMC43NSA/IDEgOiAxLjY7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cm5kKCkgPCAwLjcyID8gZGFyayA6IGxpZ2h0fSwke2EudG9GaXhlZCgzKX0pYDtcbiAgICBjdHguZmlsbFJlY3QoeCwgeTAsIHcsIHkxIC0geTApO1xuICB9XG59XG5cbi8qKiBTb2Z0IGNsb3VkeSB3ZWF0aGVyaW5nIGFsb25nIHRoZSBmaWJyZSBkaXJlY3Rpb246IGxlbmd0aHdpc2UgcGF0Y2hlcyBvZiB3YXJtIGJyb3duLWdyZXkgKG9sZFxuICogIGxpZ25pbiBzaG93aW5nIHRocm91Z2ggdGhlIGJsZWFjaCkgYW5kIG9mIG5lYXItd2hpdGUgKHN1bi1ibGVhY2hlZCBmYWNlcyksIHNvIHRoZSB0b25lIGRyaWZ0c1xuICogIHRoZSB3YXkgd2VhdGhlcmVkIGJhbWJvbyBkb2VzIGluc3RlYWQgb2Ygc2l0dGluZyBhdCBvbmUgZ3JleS4gVmVydGljYWwgPSBhbG9uZyB0aGUgZmlicmUuICovXG5mdW5jdGlvbiB3ZWF0aGVyUGF0Y2hlcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcm5kOiAoKSA9PiBudW1iZXIsIHM6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgbjogbnVtYmVyLCB3YXJtQTogbnVtYmVyLCBibGVhY2hBOiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICBjb25zdCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMTIgKyBybmQoKSAqIDAuNDUpLCB3YXJtID0gcm5kKCkgPCAwLjU7XG4gICAgY29uc3QgYyA9IHdhcm0gPyAnMTEyLDEwMCw4OCcgOiAnMjU1LDI1NSwyNTUnLCBhID0gd2FybSA/IHdhcm1BICogKDAuNCArIHJuZCgpICogMC42KSA6IGJsZWFjaEEgKiAoMC40ICsgcm5kKCkgKiAwLjYpO1xuICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHksIDAsIHkgKyBsZW4pO1xuICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2N9LDApYCk7IGcyLmFkZENvbG9yU3RvcCgwLjM1LCBgcmdiYSgke2N9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjY1LCBgcmdiYSgke2N9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2N9LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgwLCB5ICsgZHksIHgxIC0geDAsIGxlbik7XG4gIH1cbn1cblxuLyoqIE1vdWxkOiBjbHVzdGVycyBvZiBzbWFsbCBkYXJrIHNwZWNrcyAoYSBmZXcgZG96ZW4gZWFjaCksIHRoZSB3YXkgYmxhY2sgbW91bGQgc2l0cyBvbiBvdXRkb29yXG4gKiAgYmFtYm9vIC0tIGRlbnNlIGF0IGEgZmV3IHNwb3RzLCBhYnNlbnQgZWxzZXdoZXJlLiBBbHBoYSBjYXBwZWQgc28gdGhlIGRhcmtlc3Qgc3BlY2sgb3ZlciB0aGVcbiAqICBtZWFzdXJlZCBhbGJlZG8gc3RheXMgd2VsbCBjbGVhciBvZiB0aGUgaG9sZSBnYXRlJ3MgbHVtYSA1OC4gV3JhcHMgaW4geS4gKi9cbmZ1bmN0aW9uIG1vdWxkQ2x1c3RlcnMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJuZDogKCkgPT4gbnVtYmVyLCBzOiBudW1iZXIsIHNwb3RzOiBudW1iZXJbXVtdLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCBuOiBudW1iZXIsIGFNYXg6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGNvbnN0IFtjeCwgY3ldIG9mIHNwb3RzKSB7XG4gICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIE1hdGgubWF4KHJ4LCByeSkgKiAwLjgpO1xuICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyOCwyNiwyMiwkeyhhTWF4ICogMC45KS50b0ZpeGVkKDMpfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI4LDI2LDIyLDApJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4LCBjeSArIGR5LCByeCwgcnksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gY3ggKyAocm5kKCkgKyBybmQoKSAtIDEpICogcngsIHkgPSBjeSArIChybmQoKSArIHJuZCgpIC0gMSkgKiByeTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgyOCwyNiwyMiwkeygwLjA4ICsgcm5kKCkgKiBhTWF4KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIDIsIGggPSAxICsgcm5kKCkgKiAzO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCB3LCBoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIENVTE0gdGlsZSBmb3IgdGhlIHdob2xlLWJhbWJvbyBwb3N0IGFuZCByYWlsczogeCBydW5zIEFST1VORCB0aGUgY3VsbSwgeSBBTE9ORyBpdCAoc2VlIGN1bG1VViksXG4gKiAgMC42IG0gb2YgY3VsbSBwZXIgdGlsZS4gVHdvIG5vZGUgcmluZ3MgcGVyIHRpbGUgYXQgaXJyZWd1bGFyIHN0YXRpb25zIC0tIGEgZGFyayBncm9vdmUgdW5kZXIgYVxuICogIHBhbGUgcmFpc2VkIHJpZGdlLCB0aGUgZ3JhaW4gYnJlYWtpbmcgYXQgZWFjaCAtLSB3aXRoIGZpbmUgbG9uZ2l0dWRpbmFsIGdyYWluIGJldHdlZW4gdGhlbSwgYVxuICogIGxvbmcgZHJ5aW5nIHNwbGl0LCBsZW5ndGh3aXNlIHdlYXRoZXJpbmcgcGF0Y2hlcyBhbmQgYmxhY2sgbW91bGQgZ2F0aGVyZWQganVzdCBiZWxvdyBlYWNoIG5vZGUsXG4gKiAgYXMgaW4gdGhlIHBsYXRlJ3MgcG9zdCBhbmQgcmFpbCBjcm9wcy4gQSBtdWx0aXBsaWVyIG9uIHRoZSBtZWFzdXJlZCBjdWxtIGdyZXkuICovXG5mdW5jdGlvbiBjdWxtVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBEQVJLID0gJzkyLDc4LDYyJywgTElHSFQgPSAnMjU1LDI1NSwyNTUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2YwZWZlYyc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBhIHNvZnQgdG9uZSBkcmlmdCBhcm91bmQgdGhlIGN1bG0sIHNvIHRoZSByb3VuZCBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBjb25zdCBnYSA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBzLCAwKTtcbiAgICBnYS5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMTAwLDkyLDg0LDAuMTIpJyk7IGdhLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTApJyk7IGdhLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMDAsOTIsODQsMC4xMiknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ2E7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgMTQsIDAuMTIsIDAuMzApO1xuICAgIC8vIG5vZGUgc3RhdGlvbnM6IHR3byBwZXIgdGlsZSwgaXJyZWd1bGFyLCBuZXZlciB3aXRoaW4gMC4xOCBvZiBlYWNoIG90aGVyIG9yIHRoZSB3cmFwXG4gICAgY29uc3Qgbm9kZXMgPSBbcyAqICgwLjIwICsgcm5kKCkgKiAwLjEwKSwgcyAqICgwLjY2ICsgcm5kKCkgKiAwLjEyKV07XG4gICAgLy8gZ3JhaW4gaW4gc2VnbWVudHMgYmV0d2VlbiB0aGUgbm9kZXMgc28gaXQgYnJlYWtzIGF0IGVhY2ggcmluZ1xuICAgIGNvbnN0IHN0YXRpb25zID0gWzAsIC4uLm5vZGVzLCBzXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSArIDEgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykgZ3JhaW5MaW5lcyhjdHgsIHJuZCwgMCwgcywgc3RhdGlvbnNbaV0sIHN0YXRpb25zW2kgKyAxXSwgMjYwLCBEQVJLLCBMSUdIVCwgMC4yNik7XG4gICAgLy8gYSBjb3VwbGUgb2YgbG9uZyBkcnlpbmcgc3BsaXRzIGFsb25nIHRoZSBmaWJyZVxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMjsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMjUgKyBybmQoKSAqIDAuNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzgsMzIsMjYsMC41NSknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjQsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xOCknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNCwgeSArIGR5LCAxLCBsZW4pO1xuICAgIH1cbiAgICAvLyB0aGUgbm9kZSByaW5nc1xuICAgIGZvciAoY29uc3QgeSBvZiBub2Rlcykge1xuICAgICAgY29uc3QgZ3MgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSAtIHMgKiAwLjAzLCAwLCB5KTtcbiAgICAgIGdzLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwKScpOyBncy5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMC4yMiknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnczsgY3R4LmZpbGxSZWN0KDAsIHkgLSBzICogMC4wMywgcywgcyAqIDAuMDMpOyAgICAgICAgICAvLyBzaGFkZSB1cCB0byB0aGUgcmluZ1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUyLDQ0LDM2LDAuNjIpJzsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIDIuNSk7ICAgICAgICAvLyB0aGUgZ3Jvb3ZlXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4zNCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDIuNSwgcywgNCk7IC8vIHRoZSByYWlzZWQgc2hlYXRoIHJpZGdlXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNjAsNTAsNDAsMC4zMCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDYuNSwgcywgMS41KTsgIC8vIGl0cyBsb3dlciBlZGdlXG4gICAgICBjb25zdCBnZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5ICsgOCwgMCwgeSArIHMgKiAwLjA1KTtcbiAgICAgIGdkLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwLjIwKScpOyBnZC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnZDsgY3R4LmZpbGxSZWN0KDAsIHkgKyA4LCBzLCBzICogMC4wNSk7XG4gICAgfVxuICAgIC8vIG1vdWxkIGdhdGhlcnMganVzdCBiZWxvdyB0aGUgbm9kZXMgYW5kIGluIGEgY291cGxlIG9mIGxvb3NlIHBhdGNoZXNcbiAgICBjb25zdCBzcG90czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAoY29uc3QgeSBvZiBub2RlcykgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgeSArIHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSldKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCBybmQoKSAqIHNdKTtcbiAgICBtb3VsZENsdXN0ZXJzKGN0eCwgcm5kLCBzLCBzcG90cywgcyAqIDAuMTAsIHMgKiAwLjA2LCA5MCwgMC4zMCk7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogVEhBVENIIHRpbGUsIGZvciBhIHJvb2YgbWFwcGVkIHdpdGggV09STEQgVVZzIHNvIHUgcnVucyBhbG9uZyB0aGUgcmlkZ2UgYW5kIHYgdXAgdGhlIHNsb3BlLlxuICpcbiAqIFRoYXRjaCBpcyBsYWlkIGluIENPVVJTRVM6IGVhY2ggY291cnNlIGlzIGEgYnVuZGxlIG9mIHN0ZW1zIHBlZ2dlZCB0byBhIHB1cmxpbiB3aXRoIGl0cyBidXR0c1xuICogaGFuZ2luZyBvdmVyIHRoZSBjb3Vyc2UgYmVsb3csIHNvIHdoYXQgYSB2aWV3ZXIgYWN0dWFsbHkgcmVzb2x2ZXMgYXQgcHJvcCBkaXN0YW5jZSBpcyBhIHN0YWNrIG9mXG4gKiBob3Jpem9udGFsIGJhbmRzIHdpdGggYSBzaGFkb3cgbGluZSB1bmRlciBlYWNoIGJ1dHQsIGFuZCBhIGZpYnJlIHRleHR1cmUgcnVubmluZyBkb3duIHRoZSBzbG9wZVxuICogaW5zaWRlIHRoZW0uIE1vZGVsbGluZyB0aGUgc3RlbXMgaXMgd2hhdCB0aGUgcmVnaXN0cnkgbm90ZXMgZm9yYmlkOyB0aGlzIGlzIHdoZXJlIHRoYXQgZGV0YWlsXG4gKiBnb2VzIGluc3RlYWQuXG4gKlxuICogT25lIHRpbGUgaXMgYGNvdXJzZXNgIGNvdXJzZXMgdGFsbC4gVGhlIGtub2JzIGFyZSB3aGF0IHNlcGFyYXRlcyB0aGUgdHdvIHRoYXRjaGVzIG9uIHRoZSBwbGF0ZXM6XG4gKiAgIG5pcGEgICAgIGJyb2FkIGZsYXQgcGFsbSBibGFkZXMgLS0gZmV3IHdpZGUgc3Ryb2tlcyAoYHN0ZW1XYCAzLTcgcHgpLCBhIHdpZGUgdG9uYWwgYHNwcmVhZGAsXG4gKiAgICAgICAgICAgIGEgZGVlcGx5IFJBR0dFRCBidXR0IGxpbmUgYW5kIG9jY2FzaW9uYWwgbWlzc2luZyBibGFkZXMuXG4gKiAgIHZldGl2ZXIgIGNvbWJlZCBncmFzcyAtLSBodW5kcmVkcyBvZiBoYWlybGluZXMsIGEgbmFycm93IHNwcmVhZCwgYW4gYWxtb3N0IHN0cmFpZ2h0IGJ1dHQuXG4gKiBgbW9zc2AgbXVsdGlwbGllcyBhIGdyZWVuIGNhc3QgaW50byBzY2F0dGVyZWQgcGF0Y2hlczogdGhlIHRpbGUgaXMgYSBNVUxUSVBMSUVSIG9uIGEgcGFsZSBzdHJhd1xuICogYWxiZWRvLCBhbmQgYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4sIHNvIGdyZWVuIGhhcyB0byBhcnJpdmUgYXMgXCJsZXNzIHJlZCBhbmQgYmx1ZVwiIGFuZCBuZXZlclxuICogYXMgYSBwYWludGVkIGdyZWVuLiBOb3RoaW5nIGhlcmUgZ29lcyBiZWxvdyAwLjQyIG9mIHRoZSBhbGJlZG8sIHdoaWNoIGtlZXBzIHRoZSBkYXJrZXN0IHRleGVsIG9mXG4gKiBhIHN0cmF3IGF0IGx1bWEgfjE1MCB3ZWxsIGNsZWFyIG9mIHRoZSBzaWxob3VldHRlIGdhdGUncyBiYWNrZHJvcCBiYW5kLlxuICovXG5mdW5jdGlvbiB0aGF0Y2hUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgbmM6IG51bWJlciA9IG8uY291cnNlcyA/PyA0LCBjaCA9IHMgLyBuYztcbiAgICBjb25zdCBzdGVtczogbnVtYmVyID0gby5zdGVtcyA/PyAyNjAsIHNwcmVhZDogbnVtYmVyID0gby5zcHJlYWQgPz8gMC4xMjtcbiAgICBjb25zdCB3TWluOiBudW1iZXIgPSBvLnN0ZW1XPy5bMF0gPz8gMSwgd01heDogbnVtYmVyID0gby5zdGVtVz8uWzFdID8/IDI7XG4gICAgY29uc3QgcmFnZ2VkOiBudW1iZXIgPSBvLnJhZ2dlZCA/PyAwLjA2OyAgICAgICAgICAgICAgICAgLy8gYnV0dC1saW5lIHdhdmluZXNzLCBhcyBhIHNoYXJlIG9mIGNoXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuXG4gICAgLy8gdGhlIGJ1dHQgbGluZSBvZiBlYWNoIGNvdXJzZSwgaml0dGVyZWQgcGVyIGNvbHVtbiBhbmQgU0hBUkVEIHdpdGggdGhlIGNvdXJzZSBhYm92ZSBzbyB0aGVcbiAgICAvLyBzaGFkb3cgYW5kIHRoZSBibGFkZXMgYWdyZWUgb24gd2hlcmUgdGhlIGVkZ2UgaXNcbiAgICBjb25zdCBidXR0czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDw9IG5jOyBjKyspIHtcbiAgICAgIGNvbnN0IHJvdzogbnVtYmVyW10gPSBbXTtcbiAgICAgIGxldCB5ID0gMDtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDw9IHM7IHgrKykge1xuICAgICAgICBpZiAoeCAlIE1hdGgubWF4KDIsIE1hdGgucm91bmQocyAvIDQ4KSkgPT09IDApIHkgPSAocm5kKCkgKiAyIC0gMSkgKiByYWdnZWQgKiBjaDtcbiAgICAgICAgcm93LnB1c2goYyAqIGNoICsgeSk7XG4gICAgICB9XG4gICAgICBidXR0cy5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBuYzsgYysrKSB7XG4gICAgICBjb25zdCB5MCA9IGMgKiBjaDtcbiAgICAgIC8vIHRoZSBjb3Vyc2UncyBvd24gdG9uZTogdGhhdGNoIHdlYXRoZXJzIGNvdXJzZSBieSBjb3Vyc2UsIHRoZSBsb3dlciBvbmVzIGdyZXllclxuICAgICAgY29uc3QgdCA9IDEgLSBzcHJlYWQgKiBybmQoKTtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHQpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOTg1KX0sJHtNYXRoLnJvdW5kKHYgKiAwLjk1KX0pYDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCB5MCAtIHJhZ2dlZCAqIGNoIC0gMSwgcywgY2ggKyAyICogcmFnZ2VkICogY2ggKyAyKTtcbiAgICAgIC8vIHN0ZW1zIHJ1bm5pbmcgRE9XTiB0aGUgc2xvcGUgaW5zaWRlIHRoZSBjb3Vyc2UsIGVhY2ggYSBsaXR0bGUgcGFzdCBpdHMgYnV0dCBsaW5lXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHN0ZW1zOyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcztcbiAgICAgICAgY29uc3QgdyA9IHdNaW4gKyBybmQoKSAqICh3TWF4IC0gd01pbik7XG4gICAgICAgIGNvbnN0IHRvbmUgPSAxIC0gc3ByZWFkICogKDAuMyArIHJuZCgpICogMC43KTtcbiAgICAgICAgY29uc3QgYSA9IDAuMTggKyBybmQoKSAqIDAuMzI7XG4gICAgICAgIGNvbnN0IGRhcmsgPSBybmQoKSA8IDAuNjI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBkYXJrID8gYHJnYmEoJHtNYXRoLnJvdW5kKDEyMCAqIHRvbmUpfSwke01hdGgucm91bmQoMTA2ICogdG9uZSl9LCR7TWF0aC5yb3VuZCg4NCAqIHRvbmUpfSwke2EudG9GaXhlZCgzKX0pYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGByZ2JhKDI1NSwyNTMsMjQ2LCR7KGEgKiAwLjYpLnRvRml4ZWQoMyl9KWA7XG4gICAgICAgIGNvbnN0IHlUb3AgPSB5MCAtIGNoICogKDAuMTUgKyBybmQoKSAqIDAuMjUpO1xuICAgICAgICBjb25zdCB5Qm90ID0gYnV0dHNbYyArIDFdW01hdGgubWluKHMsIE1hdGgucm91bmQoeCkpXSArIGNoICogKHJuZCgpICogMC4xMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5VG9wLCB3LCBNYXRoLm1heCgyLCB5Qm90IC0geVRvcCkpO1xuICAgICAgfVxuICAgICAgLy8gTUlTU0lORyBibGFkZXM6IGEgZmV3IGdhcHMgd2hlcmUgdGhlIGNvdXJzZSBoYXMgdGhpbm5lZCwgZGFyayBidXQgbmV2ZXIgYmxhY2tcbiAgICAgIGNvbnN0IGdhcHMgPSBvLmdhcHMgPz8gMDtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZ2FwczsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSBzICogKDAuMDEgKyBybmQoKSAqIDAuMDMpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoOTYsODQsNjYsJHsoMC4yMCArIHJuZCgpICogMC4xOCkudG9GaXhlZCgzKX0pYDtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHkwICsgY2ggKiAwLjI1LCB3LCBjaCAqICgwLjQgKyBybmQoKSAqIDAuNSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZSBzaGFkb3cgZWFjaCBjb3Vyc2UncyBidXR0IGNhc3RzIG9uIHRoZSBvbmUgYmVsb3c6IGEgZ3JhZGllbnQgZmFsbGluZyBBV0FZIGZyb20gdGhlIGxpbmUsXG4gICAgLy8gZHJhd24gYWxvbmcgdGhlIGppdHRlcmVkIGJ1dHQgc28gdGhlIHNoYWRvdyBpcyBhcyByYWdnZWQgYXMgdGhlIGVkZ2UgdGhhdCBjYXN0cyBpdCwgd2l0aCB0aGVcbiAgICAvLyBMSVQgVElQUyBvZiB0aGUgY291cnNlIGFib3ZlIGl0IGFzIGEgcGFsZSBsaW5lLiBUaGUgcGFpciBpcyB3aGF0IG1ha2VzIHRoZSByb29mIHJlYWQgYXNcbiAgICAvLyBzdGFja2VkIGxheWVyczsgdGhlIHNoYWRvdyBhbG9uZSByZWFkcyBhcyBncmFpbiwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYnVpbGQgbG9va2VkIGxpa2UuXG4gICAgZm9yIChsZXQgYyA9IDE7IGMgPD0gbmM7IGMrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgICAgY29uc3QgeWIgPSBidXR0c1tjXVt4XTtcbiAgICAgICAgY29uc3QgZ2ggPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeWIgLSBjaCAqIDAuMDksIDAsIHliKTtcbiAgICAgICAgZ2guYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTIsMjQyLDApJyk7IGdoLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgyNTUsMjUyLDI0MiwkeyhvLnRpcCA/PyAwLjM0KS50b0ZpeGVkKDMpfSlgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdoO1xuICAgICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5YiAtIGNoICogMC4wOSArIGR5LCAxLCBjaCAqIDAuMDkpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiwgMCwgeWIgKyBjaCAqIDAuMjIpO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoNTgsNDgsMzYsJHsoby5zaGFkb3cgPz8gMC40MikudG9GaXhlZCgzKX0pYCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSg1OCw0OCwzNiwwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHliICsgZHksIDEsIGNoICogMC4yMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTU9TUyAvIE1PVUxEOiBsZXNzIHJlZCBhbmQgYmx1ZSBvdmVyIHNvZnQgcGF0Y2hlcywgbmV2ZXIgYSBwYWludGVkIGdyZWVuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5tb3NzID8/IDApOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTQpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4xNCArIHJuZCgpICogMC4yMjtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxNTAsMTkwLDExMCwke2EudG9GaXhlZCgzKX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxNTAsMTkwLDExMCwwKScpO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7IGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9XG4gICAgLy8gc29mdCB0b25hbCBkcmlmdCBzbyB0aGUgY291cnNlcyBkbyBub3QgcmVhZCBhcyBhIHByaW50ZWQgc3RyaXBlXG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIG8ud2VhdGhlciA/PyAxMCwgMC4xMCwgMC4yMik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFdPVkVOIFRBUlBBVUxJTiB0aWxlOiB0aGUgY29hcnNlIGNyb3NzLXdvdmVuIHBvbHlwcm9weWxlbmUgdGFwZSBvZiBhIFRoYWkgYnVpbGRlcidzIHRhcnAsIHBsdXNcbiAqIHRoZSBjcmVhc2VzIGEgZm9sZGVkIHNoZWV0IGtlZXBzIGZvciBsaWZlIGFuZCB0aGUgc3VuLWJsZWFjaGluZyBhbG9uZyB0aGUgcmlkZ2VzLiBBIG11bHRpcGxpZXIgb25cbiAqIHRoZSBtZWFzdXJlZCBibHVlLCBzbyB0aGUgd2VhdmUgZGFya2VucyBhbmQgdGhlIGJsZWFjaCBsaWZ0cyB0b3dhcmQgd2hpdGUuXG4gKi9cbmZ1bmN0aW9uIHRhcnBUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IHBpdGNoID0gTWF0aC5tYXgoMywgTWF0aC5yb3VuZChzIC8gKG8udGFwZXMgPz8gNjQpKSk7XG4gICAgLy8gdGhlIHdlYXZlOiB3YXJwIGFuZCB3ZWZ0IHRhcGVzLCBlYWNoIHBhaXIgd2l0aCBhIHNoYWRvdyBhdCBpdHMgam9pbiwgYWx0ZXJuYXRpbmcgb3Zlci91bmRlclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCArPSBwaXRjaCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDMwLDM0LDQ0LCR7KDAuMTAgKyBybmQoKSAqIDAuMDgpLnRvRml4ZWQoMyl9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA3KSc7IGN0eC5maWxsUmVjdCh4ICsgMSwgMCwgTWF0aC5tYXgoMSwgcGl0Y2ggKiAwLjM1KSwgcyk7XG4gICAgfVxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgczsgeSArPSBwaXRjaCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDMwLDM0LDQ0LCR7KDAuMTAgKyBybmQoKSAqIDAuMDgpLnRvRml4ZWQoMyl9KWA7IGN0eC5maWxsUmVjdCgwLCB5LCBzLCAxKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA3KSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgMSwgcywgTWF0aC5tYXgoMSwgcGl0Y2ggKiAwLjM1KSk7XG4gICAgfVxuICAgIC8vIGZvbGQgY3JlYXNlczogbG9uZyBwYWxlIGxpbmVzIHdpdGggYSBzaGFkb3cgb24gb25lIHNpZGUsIGF0IHRoZSB0d28gYXhlcyBhIHRhcnAgaXMgZm9sZGVkIG9uXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5jcmVhc2VzID8/IDYpOyBrKyspIHtcbiAgICAgIGNvbnN0IGhvcml6ID0gcm5kKCkgPCAwLjUsIHAgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC41ICsgcm5kKCkgKiAwLjUpLCBxID0gcm5kKCkgKiBzO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMjYpJztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjI2KSc7XG4gICAgICBpZiAoaG9yaXopIHsgY3R4LmZpbGxSZWN0KHEgLSBsZW4gLyAyLCBwLCBsZW4sIDEuNik7IGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyNiwzOCwwLjE4KSc7IGN0eC5maWxsUmVjdChxIC0gbGVuIC8gMiwgcCArIDEuNiwgbGVuLCAyKTsgfVxuICAgICAgZWxzZSB7IGN0eC5maWxsUmVjdChwLCBxIC0gbGVuIC8gMiwgMS42LCBsZW4pOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjAsMjYsMzgsMC4xOCknOyBjdHguZmlsbFJlY3QocCArIDEuNiwgcSAtIGxlbiAvIDIsIDIsIGxlbik7IH1cbiAgICB9XG4gICAgLy8gc3VuLWJsZWFjaGVkIHN0cmVha3MgYW5kIGEgbGl0dGxlIGdyaW1lXG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIG8ud2VhdGhlciA/PyAxMiwgMC4xMCwgMC4zNCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNBV04gVElNQkVSIHRpbGUgZm9yIGEgd2VhdGhlcmVkIHBvc3QtYW5kLXBsYXRlIGZyYW1lOiBmaW5lIGxvbmdpdHVkaW5hbCBncmFpbiwgYSBmZXcga25vdHMsIHRoZVxuICogb2RkIGRyeWluZyBzcGxpdCwgYW5kIGNsb3VkeSBzaWx2ZXIgd2VhdGhlcmluZy4gRGVsaWJlcmF0ZWx5IFdFQUtMWSBkaXJlY3Rpb25hbCAtLSB0aGUgZnJhbWUgaXNcbiAqIG1hcHBlZCB3aXRoIHdvcmxkIFVWcywgd2hpY2ggcHV0IHYgYWxvbmcgdGhlIHBvc3QgYnV0IEFDUk9TUyBhIGJlYW0sIGFuZCBhIHN0cm9uZ2x5IHN0cmlwZWQgdGlsZVxuICogd291bGQgdGhlbiByZWFkIGFzIGEgcGxhbmsgam9pbnQgcnVubmluZyB0aGUgd3Jvbmcgd2F5IG9uIGhhbGYgdGhlIGZyYW1lLiBUaGUgd2VhdGhlcmluZyBjYXJyaWVzXG4gKiBtb3N0IG9mIHRoZSByZWFkIGFuZCB0aGUgZ3JhaW4gb25seSBzaGFycGVucyBpdCwgd2hpY2ggc3Vydml2ZXMgYm90aCBvcmllbnRhdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIHNhd25UaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgREFSSyA9ICc5Niw4NCw2OCcsIExJR0hUID0gJzI1NSwyNTUsMjU1JztcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmNGYyZWUnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIG8ud2VhdGhlciA/PyAyMCwgMC4xNCwgMC4zMCk7XG4gICAgZ3JhaW5MaW5lcyhjdHgsIHJuZCwgMCwgcywgMCwgcywgby5ncmFpbiA/PyAyMjAsIERBUkssIExJR0hULCAwLjE4KTtcbiAgICAvLyBrbm90czogYSBkYXJrIGVsbGlwc2Ugd2l0aCB0aGUgZ3JhaW4gc3dlZXBpbmcgcm91bmQgaXRcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmtub3RzID8/IDQpOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDEyICsgcm5kKCkgKiAwLjAyKTtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg3NCw2MCw0NCwwLjQ1KSc7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIsIHIgKiAxLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoOTYsODAsNjAsMC4yMiknOyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgZm9yIChsZXQgcSA9IDE7IHEgPD0gMzsgcSsrKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIgKiAoMSArIHEgKiAwLjYpLCByICogKDEuNiArIHEgKiAwLjkpLCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBkcnlpbmcgc3BsaXRzIGFsb25nIHRoZSBmaWJyZVxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uc3BsaXRzID8/IDMpOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjQ1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1OCw0OCwzNiwwLjQyKSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5ICsgZHksIDEuNCwgbGVuKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjE2KSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4ICsgMS40LCB5ICsgZHksIDEsIGxlbik7XG4gICAgfVxuICAgIGNvbnN0IHNwb3RzOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5tb3VsZCA/PyAzKTsgaSsrKSBzcG90cy5wdXNoKFtybmQoKSAqIHMsIHJuZCgpICogc10pO1xuICAgIG1vdWxkQ2x1c3RlcnMoY3R4LCBybmQsIHMsIHNwb3RzLCBzICogMC4wOSwgcyAqIDAuMDcsIDcwLCAwLjI0KTtcbiAgfSk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvLlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgdGhlIGdpbGRlZCBzdXJmYWNlcy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhXG4gKiBoZW1pc3BoZXJlIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvXG4gKiByZWZsZWN0IHJlbmRlcnMgYmxhY2sgLS0gd2hpY2ggb24gYSBnb2xkIGZpbmlhbCBpcyB0aGUgd2hvbGUgZmVhdHVyZSBsb3N0LiBUaGUgYWxiZWRvIHN0YXlzXG4gKiBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRlcmlhbHMob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyk6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBDT05GSUcubWF0ZXJpYWxzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgICAgc2lkZTogcy5kb3VibGVTaWRlZCA/IFRIUkVFLkRvdWJsZVNpZGUgOiBUSFJFRS5Gcm9udFNpZGUsXG4gICAgICB2ZXJ0ZXhDb2xvcnM6IHMudmVydGV4Q29sb3JzID09PSB0cnVlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIC8vIEEgTElUIHN1cmZhY2UgKGEgZmx1b3Jlc2NlbnQgdHViZSwgYSBjaGFyY29hbCBlbWJlciBiZWQpOiBlbWlzc2l2ZSBjYXJyaWVzIHRoZSBnbG93IHdpdGhvdXQgYVxuICAgIC8vIGxpZ2h0IHNvdXJjZSwgd2hpY2ggdGhlIGtpdCdzIHByb3BzIG5ldmVyIG93biAtLSB0aGUgaG9zdCBzY2VuZSBvd25zIGxpZ2h0aW5nLlxuICAgIGlmIChzLmVtaXNzaXZlICE9PSB1bmRlZmluZWQpIHsgbS5lbWlzc2l2ZSA9IG5ldyBUSFJFRS5Db2xvcihzLmVtaXNzaXZlKTsgbS5lbWlzc2l2ZUludGVuc2l0eSA9IHMuZW1pc3NpdmVJbnRlbnNpdHkgPz8gMTsgfVxuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkgeyBtLnRyYW5zcGFyZW50ID0gdHJ1ZTsgbS5vcGFjaXR5ID0gcy5vcGFjaXR5OyBtLmRlcHRoV3JpdGUgPSB0cnVlOyB9XG4gICAgLy8gQW4gQUxQSEEtQ1VUIHBhbmUgKGNoYWluLWxpbmsgbWVzaCk6IHRoZSBjYW52YXMgdGlsZSBjYXJyaWVzIHRoZSBjdXQtb3V0IGluIGl0cyBhbHBoYSBjaGFubmVsIGFuZFxuICAgIC8vIGFscGhhVGVzdCBkaXNjYXJkcyB0aGUgb3BlbiBjZWxscywgc28gdGhlIHdpcmUgc3RheXMgb3BhcXVlIGFuZCBzb3J0cyBsaWtlIGEgc29saWQuXG4gICAgaWYgKHMuYWxwaGFUZXN0ICE9PSB1bmRlZmluZWQpIHsgbS5hbHBoYVRlc3QgPSBzLmFscGhhVGVzdDsgbS50cmFuc3BhcmVudCA9IGZhbHNlOyB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZldGl2ZXJUaGF0Y2hDYW5vcHlNb2R1bGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ1ZldGl2ZXIgVGhhdGNoIENhbm9weSBNb2R1bGUnO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hdGVyaWFsIHdpdGggYHZlcnRleENvbG9yc2AgcmVhZHMgYSBgY29sb3JgIGF0dHJpYnV0ZSBvdXQgb2YgRVZFUlkgZ2VvbWV0cnkgYm91bmQgdG8gaXQsIGFuZFxuICAgKiBhIGdlb21ldHJ5IHRoYXQgaGFzIG5vbmUgaGFuZHMgdGhlIHNoYWRlciBhbiB1bmRlZmluZWQgYXR0cmlidXRlIC0tIHdoaWNoIGNvbWVzIGJhY2sgYXNcbiAgICogKDAsIDAsIDApIGFuZCByZW5kZXJzIHRoZSBtZXNoIEJMQUNLLiBUaGF0IGlzIG5vdCBhIGh5cG90aGV0aWNhbDogdGhlIHVib3NvdCdzIHdhbGwgYm9keSBhbmRcbiAgICogaXRzIGVpZ2h0IGJvdW5kYXJ5IHN0b25lcyBzaGlwcGVkIGFzIGJsYWNrIHNpbGhvdWV0dGVzIGZyb20gb25lIHRpbnRlZCBwbGF0Zm9ybSBzaGFyaW5nIHRoZWlyXG4gICAqIHN0b25lIG1hdGVyaWFsLCBhbmQgdGhlIGZhaWx1cmUgaXMgc2lsZW50IGJlY2F1c2UgdGhlIHRpbnRlZCBjb21wb25lbnQgaXRzZWxmIGxvb2tzIHBlcmZlY3QuXG4gICAqXG4gICAqIEFuIEluc3RhbmNlZE1lc2ggaGlkZXMgaXQgLS0gaXQgZmFsbHMgYmFjayB0byBpbnN0YW5jZUNvbG9yIGFuZCBjb21lcyBvdXQgd2hpdGUgLS0gc28gdGhlIHNhbWVcbiAgICogbWlzdGFrZSBvbiB0aGUgY2hlZGkncyBuaWNoZSBmcmFtZXMgcmVuZGVyZWQgY29ycmVjdGx5IGFuZCB0YXVnaHQgbm90aGluZy4gR3VhcmQgaXQgaGVyZSwgb25jZSxcbiAgICogZm9yIGV2ZXJ5IGdlb21ldHJ5OiBubyBjb2xvciBhdHRyaWJ1dGUgYW5kIGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIG1lYW5zIGZpbGwgd2l0aCB3aGl0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGd1YXJkVmVydGV4Q29sb3JzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcbiAgICBpZiAoIW1hdCB8fCAhbWF0LnZlcnRleENvbG9ycyB8fCBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSByZXR1cm47XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoMSksIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgLy8gc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IsIHNvIGFuIGluc3RhbmNlZCBtYXRlcmlhbCBjYXJyeWluZyBwZXItaW5zdGFuY2VcbiAgICAgIC8vIHRvbmVzIG11c3QgYmUgd2hpdGUgb3IgZXZlcnkgdG9uZSBjb21lcyBvdXQgZGFya2VuZWQgYnkgdGhlIGJhc2UuXG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKiogRm91ciBpbnN0YW5jZXMgYXQgOTAtZGVncmVlIHlhdyBhYm91dCB0aGUgYXhpcyAtLSB0aGUgY29ybmVyL2ZhY2UgcmVwZXRpdGlvbiB0aGF0IGV2ZXJ5XG4gICAqICBidWlsZGluZyBpbiB0aGlzIHNldCB1c2VzIGZvciBuaWNoZXMsIGZpbmlhbHMsIGJvdW5kYXJ5IHN0b25lcyBhbmQgY29ybmVyIGRvbWVzLiAqL1xuICBmdW5jdGlvbiBxdWFkKHJhZGl1czogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlID0gMCk6IFRIUkVFLk1hdHJpeDRbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBwaGFzZSArIGkgKiBNYXRoLlBJIC8gMjtcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguc2luKGEpICogcmFkaXVzLCB5LCBNYXRoLmNvcyhhKSAqIHJhZGl1cyksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgYSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb21wb25lbnRzXG4gICAqIEVhY2ggZW50cnkgb2YgQ09ORklHLmdlb21ldHJ5LmNvbXBvbmVudHMgaXMgT05FIG1lcmdlZCBnZW9tZXRyeSBvbiBPTkUgbWF0ZXJpYWwgLS0gb25lIGRyYXdcbiAgICogY2FsbC4gRXZlcnkgcGFydCBpbnNpZGUgaXQgaXMgYSB0aW50ZWQgYm94LCB0dWJlLCBjeWxpbmRlciwgbGF0aGUgb3IgcGxhbmU7IGNvbG91ciBkaWZmZXJlbmNlc1xuICAgKiBhcmUgdmVydGV4IGNvbG91cnMuIGB1dmAgcGlja3MgaG93IGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgcmVwZWF0cyBvdmVyIGl0LiAqL1xuICBmb3IgKGNvbnN0IGMgb2YgRy5jb21wb25lbnRzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgKGMuYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCBiIG9mIG1pcnJvclgoKGMuYm94ZXNNaXJyb3JlZCA/PyBbXSkgYXMgbnVtYmVyW11bXSkpIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCB0IG9mIChjLnR1YmVzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0dWJlKHQucHRzLCB0LnIsIHQuc2VnID8/IDgsIHQuaGV4KSk7XG4gICAgZm9yIChjb25zdCBjeSBvZiAoYy5jeWxzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHRoMGAvYHRoTGVuYCBtYWtlIGEgUEFSVElBTCBjeWxpbmRlciAoYSBjdXJ2ZWQgc3RpY2tlciBwYXRjaCB3cmFwcGVkIG9uIGEgcm91bmQgYm9keSkgYW5kXG4gICAgICAvLyBgb3BlbmAgZHJvcHMgdGhlIGNhcHM7IHRoZSBzaWRlIFVWcyB0aGVuIHJ1biAwLi4xIGFjcm9zcyB0aGUgYXJjIGFuZCB1cCB0aGUgaGVpZ2h0LCB3aGljaCBpc1xuICAgICAgLy8gd2hhdCBhIGJha2VkIGdyYXBoaWMgd2FudHMuIGB1dlJlcGAgbXVsdGlwbGllcyB0aGVtIGZvciBhIHJlcGVhdGluZyB0aWxlLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGN5LnJ0LCBjeS5yYiwgY3kuaCwgY3kuc2VnID8/IDEyLCAxLCBjeS5vcGVuID8/IGZhbHNlLCBjeS50aDAgPz8gMCwgY3kudGhMZW4gPz8gTWF0aC5QSSAqIDIpO1xuICAgICAgaWYgKGN5LnV2UmVwKSB7IGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7IGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIGN5LnV2UmVwWzBdLCB1di5nZXRZKGkpICogY3kudXZSZXBbMV0pOyB9XG4gICAgICAvLyBgc2lkZVVWYCBwaW5zIHRoZSBTSURFIHdhbGwncyBVVnMgdG8gb25lIHRleGVsIHNvIGEgZGlzYyBjYXJyeWluZyBhIGJha2VkIHRvcC1kb3duIGltYWdlIHNob3dzXG4gICAgICAvLyB0aGF0IGltYWdlIG9uIGl0cyBjYXAgYWxvbmUsIHdpdGggaXRzIHJpbSBpbiB3aGF0ZXZlciB0aGUgcGlubmVkIHRleGVsIGhvbGRzIChhIGJhZyB0b25lKS5cbiAgICAgIGlmIChjeS5zaWRlVVYpIHsgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKSwgbiA9ICgoY3kuc2VnID8/IDEyKSArIDEpICogMjsgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHV2LnNldFhZKGksIGN5LnNpZGVVVlswXSwgY3kuc2lkZVVWWzFdKTsgfVxuICAgICAgLy8gYHNjYWxlYCBiZWZvcmUgdGhlIHJvdGF0aW9uczogYW4gT1ZBTCBiYXNpbiBvciBkaXNjLCB3aGljaCBhIGxhdGhlIG9yIGEgY3lsaW5kZXIgY2Fubm90XG4gICAgICAvLyByZXZvbHZlIG9uIGl0cyBvd24uIE5vcm1hbHMgYXJlIHJlY29tcHV0ZWQgYmVjYXVzZSBhIG5vbi11bmlmb3JtIHNjYWxlIHNrZXdzIHRoZW0uXG4gICAgICBpZiAoY3kuc2NhbGUpIHsgZy5zY2FsZShjeS5zY2FsZVswXSwgY3kuc2NhbGVbMV0sIGN5LnNjYWxlWzJdKTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyB9XG4gICAgICAvLyBDVUxNIFVWczogdSBhcm91bmQgdGhlIGNpcmN1bWZlcmVuY2UsIHYgYWxvbmcgdGhlIGxlbmd0aCwgYm90aCBpbiBtZXRyZXMgLS0gc28gdGhlIG5vZGVcbiAgICAgIC8vIHJpbmdzIG9mIGEgY3VsbSB0aWxlIGNyb3NzIGEgYmFtYm9vIHBvbGUgYXQgcmVhbCBzcGFjaW5nIGhvd2V2ZXIgdGhlIHBvbGUgaXMgdGhlbiB0dXJuZWQuXG4gICAgICAvLyBJdCBoYXMgdG8gaGFwcGVuIEJFRk9SRSB0aGUgcm90YXRpb25zLCB3aGlsZSB0aGUgY3lsaW5kZXIgc3RpbGwgcnVucyBhbG9uZyBpdHMgb3duIFkuXG4gICAgICBpZiAoYy51diA9PT0gJ2N1bG0nKSBjdWxtVVYoZywgY3kucnQsIGN5LmgsIGMudXZTY2FsZSA/PyAxLCBjeS52T2ZmID8/IDApO1xuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnkpIGcucm90YXRlWShjeS5yeSk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbCBvZiAoYy5sYXRoZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgcnlgIHlhd3MgdGhlIHJldm9sdXRpb246IGEgNC1zZWdtZW50IGxhdGhlIHR1cm5lZCA0NSBkZWdyZWVzIGlzIGEgY2hhbWZlcmVkIFNRVUFSRSBzbGFiIGluIG9uZVxuICAgICAgLy8gZ2VvbWV0cnkgKGEgY29uZSdzIHJ1YmJlciBiYXNlKSwgd2hlcmUgdHdvIHN0YWNrZWQgYm94ZXMgd291bGQgY29zdCB0d28gYW5kIGEgY29wbGFuYXIgcGFpci5cbiAgICAgIC8vIGBjeWxVVmAgKGEgdGlsZSBzaXplIGluIG1ldHJlcykgd3JpdGVzIGEgc2VhbWxlc3MgYXJvdW5kLWJ5LXVwIFVWIGZyb20gdGhlIGxhdGhlJ3Mgb3duIHNlZ21lbnRcbiAgICAgIC8vIGluZGV4IC0tIGF0YW4yIHdvdWxkIGZvbGQgYSB3aG9sZSB0aWxlIGludG8gdGhlIHNlYW0gY29sdW1uIC0tIGZvciB0cmVhZCwgZmx1dGluZyBhbmQgZ3JhaW4uXG4gICAgICBjb25zdCBnID0gbGF0aGUobC5wdHMsIGwuc2VnID8/IDEyLCAwLCBsLnNoYXJwICE9PSBmYWxzZSk7XG4gICAgICBpZiAobC5jeWxVVikgeyBjb25zdCBjdSA9IEFycmF5LmlzQXJyYXkobC5jeWxVVikgPyBsLmN5bFVWIDogW2wuY3lsVVYsIGwuY3lsVVYsIDBdOyBsYXRoZVVWKGcsIChnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCAvICgobC5zZWcgPz8gMTIpICsgMSkpIHwgMCwgbC5zZWcgPz8gMTIsIGN1WzBdLCBjdVsxXSwgY3VbMl0gPz8gMCk7IH1cbiAgICAgIGlmIChsLnNjYWxlKSB7IGcuc2NhbGUobC5zY2FsZVswXSwgbC5zY2FsZVsxXSwgbC5zY2FsZVsyXSk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgfVxuICAgICAgaWYgKGwucnkpIGcucm90YXRlWShsLnJ5KTsgZy50cmFuc2xhdGUobC5hdFswXSwgbC5hdFsxXSwgbC5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBsLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHAgb2YgKGMucGxhbmVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBQQU5FOiBhIHNpbmdsZSBxdWFkIGluIHRoZSBYWSBwbGFuZSBhdCBkZXB0aCB6LCBkb3VibGUtc2lkZWQgYnkgaXRzIG1hdGVyaWFsLiBJdHMgVVZzIHJ1blxuICAgICAgLy8gMC4uMSBhY3Jvc3MgdGhlIHBhbmUgc28gYW4gYWxwaGEtY3V0IHRpbGUgcmVwZWF0cyBgcmVwYCB0aW1lcyBhY3Jvc3MgYW5kIGRvd24uXG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkocC53LCBwLmgsIDEsIDEpO1xuICAgICAgZy50cmFuc2xhdGUocC5hdFswXSwgcC5hdFsxXSwgcC5hdFsyXSk7XG4gICAgICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogKHAucmVwPy5bMF0gPz8gMSksIHV2LmdldFkoaSkgKiAocC5yZXA/LlsxXSA/PyAxKSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgcC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlIG9mIChjLmV4dHJ1ZGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBwcm9maWxlIGluIHRoZSBYWSBwbGFuZSBleHRydWRlZCBhbG9uZyBaIGJldHdlZW4gejAgYW5kIHoxIC0tIGEgc2xhYiB3aXRoIGEgbW91bGRlZCBlZGdlLFxuICAgICAgLy8gYSBweXJhbWlkIGNhcCBhcyBhIHN0ZXBwZWQgcHJvZmlsZSwgYSBzcGVhciBmaW5pYWwuXG4gICAgICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgc2hhcGUubW92ZVRvKGUucG9seVswXVswXSwgZS5wb2x5WzBdWzFdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZS5wb2x5Lmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8oZS5wb2x5W2ldWzBdLCBlLnBvbHlbaV1bMV0pO1xuICAgICAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gICAgICBmb3IgKGNvbnN0IGggb2YgKGUuaG9sZXMgPz8gW10pIGFzIG51bWJlcltdW11bXSkge1xuICAgICAgICBjb25zdCBocCA9IG5ldyBUSFJFRS5QYXRoKCk7IGhwLm1vdmVUbyhoWzBdWzBdLCBoWzBdWzFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoLmxlbmd0aDsgaSsrKSBocC5saW5lVG8oaFtpXVswXSwgaFtpXVsxXSk7XG4gICAgICAgIGhwLmNsb3NlUGF0aCgpOyBzaGFwZS5ob2xlcy5wdXNoKGhwKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGcgPSBleHRydWRlQWxvbmdaKHNoYXBlLCBlLnowLCBlLnoxKTtcbiAgICAgIGlmIChlLnJ4KSBnLnJvdGF0ZVgoZS5yeCk7XG4gICAgICBpZiAoZS5yeSkgZy5yb3RhdGVZKGUucnkpO1xuICAgICAgaWYgKGUucnopIGcucm90YXRlWihlLnJ6KTtcbiAgICAgIGlmIChlLmF0KSBnLnRyYW5zbGF0ZShlLmF0WzBdLCBlLmF0WzFdLCBlLmF0WzJdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlLmhleCkpO1xuICAgIH1cbiAgICAvLyBFTExJUFNPSURTOiBbaGV4LCBjeCwgY3ksIGN6LCByeCwgcnksIHJ6LCByb3RYPywgcm90WT8sIHJvdFo/XSAtLSBhIHVuaXQgc3BoZXJlIHNjYWxlZCBwZXIgYXhpc1xuICAgIC8vIGFuZCB0dXJuZWQgYWJvdXQgaXRzIG93biBjZW50cmUuIEEgc2t1bGwgZG9tZSwgYSBwYXcsIGEgbm9zZSBwYWQ6IHRoZSByb3VuZGVkIHNvbGlkcyBvZiBhblxuICAgIC8vIGFuaW1hbCB0aGF0IGEgYm94IG9yIGEgc3RhdGlvbiB0dWJlIGNhbm5vdCBnaXZlLCBzaGFyaW5nIHNtb290aCBub3JtYWxzIHRocm91Z2ggdGhlIG1lcmdlLlxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5lbGxpcHNvaWRzID8/IFtdKSBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEsIGVbMTBdID8/IDE2LCBlWzExXSA/PyAxMik7XG4gICAgICBnLnNjYWxlKGVbNF0sIGVbNV0sIGVbNl0pO1xuICAgICAgaWYgKGVbN10pIGcucm90YXRlWChlWzddKTsgaWYgKGVbOF0pIGcucm90YXRlWShlWzhdKTsgaWYgKGVbOV0pIGcucm90YXRlWihlWzldKTtcbiAgICAgIGcudHJhbnNsYXRlKGVbMV0sIGVbMl0sIGVbM10pO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIGVbMF0pKTtcbiAgICB9XG4gICAgLy8gRlJVU1RBOiBbaGV4LCBjeCwgeUJvdHRvbSwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXSAtLSBhIGJveCB3aG9zZSBmb290cHJpbnQgY2hhbmdlcyBmcm9tICh3MCwgZDApIGF0XG4gICAgLy8gdGhlIGJvdHRvbSB0byAodzEsIGQxKSBhdCB0aGUgdG9wOiB0aGUgdGFwZXJlZCBib2R5IG9mIGEgd2hlZWxpZSBiaW4gb3IgYSBzdGVlbCBjb250YWluZXIuXG4gICAgZm9yIChjb25zdCBmIG9mIChjLmZydXN0YSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKGZydXN0dW0oZi5zbGljZSgxKSksIGZbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgKGMuc3Bpa2VzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNwaWtlKHMuYXQsIHMudywgcy5oKSwgcy5oZXgpKTtcbiAgICAvLyBEUkFQRUQgU0hFRVRTOiBhIHRhcnAgb3IgYXduaW5nIGFzIGEgaGVpZ2h0IGdyaWQgd2l0aCB0aGlja25lc3MgLS0gYSByaWRnZSwgdGhlIHNhZyBiZXR3ZWVuXG4gICAgLy8gaXRzIHBvbGVzIGFuZCB0aGUgZHJvb3Agb2YgaXRzIGZyZWUgZWRnZXMgYXJlIG51bWJlcnMgaW4gdGhlIGdyaWQsIGNvbXB1dGVkIGF0IGVtaXQgdGltZS5cbiAgICBmb3IgKGNvbnN0IHMgb2YgKGMuc2hlZXRzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNoZWV0KHMpLCBzLmhleCkpO1xuICAgIC8vIE9SR0FOSUMgc3RhdGlvbiB0dWJlczogW3osIGN4LCBjeSwgcngsIHJ5XSBzdGF0aW9ucyBzd2VwdCBhbG9uZyBaIC0tIHRoZSBvbmx5IHNvZnQgZm9ybSBpbiB0aGVcbiAgICAvLyBraXQsIGEgbHlpbmcgYW5pbWFsLiBMaXQgc21vb3RoIGJ5IHRoZSBoZWxwZXIncyBzaGFyZWQgcmluZyB2ZXJ0aWNlcy5cbiAgICBmb3IgKGNvbnN0IHQgb2YgKGMudHViZXNBbG9uZyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSB0dWJlQWxvbmcodC5zdGF0aW9ucywgdC5zZWcgPz8gMTIpO1xuICAgICAgaWYgKHQucnkpIGcucm90YXRlWSh0LnJ5KTsgaWYgKHQuYXQpIGcudHJhbnNsYXRlKHQuYXRbMF0sIHQuYXRbMV0sIHQuYXRbMl0pO1xuICAgICAgLy8gYGhleGVzYCAtLSBvbmUgY29sb3VyIHBlciBTVEFUSU9OLCBibGVuZGVkIGFsb25nIHRoZSBzd2VlcCAtLSBpcyBob3cgYSBjb2F0IHBhdHRlcm4gdGhhdCBydW5zXG4gICAgICAvLyBhbG9uZyB0aGUgYm9keSAoYSB3aGl0ZSBjb2xsYXIgYmV0d2VlbiBhIHRhbiBza3VsbCBhbmQgYSB0YW4gc2FkZGxlKSBpcyBjYXJyaWVkIG9uIGEgc2luZ2xlXG4gICAgICAvLyBtZXJnZWQgbWVzaC4gVGhlIGNvbXBvbmVudCdzIGF4aXMgdGludCB0aGVuIG11bHRpcGxpZXMgdGhlIGRvcnNhbC10by12ZW50cmFsIGZhZGUgaW50byBpdCxcbiAgICAgIC8vIGFuZCBuZWl0aGVyIGNvc3RzIGEgbWF0ZXJpYWwuIEEgc2luZ2xlIGBoZXhgIHN0YXlzIHRoZSBkZWZhdWx0LlxuICAgICAgaWYgKHQuaGV4ZXMpIHtcbiAgICAgICAgLy8gQSBzdGF0aW9uIGVudHJ5IG1heSBiZSBvbmUgaGV4LCBvciBhIFBBSVIgW2RvcnNhbCwgdmVudHJhbF0gYmxlbmRlZCBhcm91bmQgdGhlIHJpbmcgYnkgdGhlXG4gICAgICAgIC8vIHNhbWUgc2luKHRoZXRhKSB0dWJlQWxvbmcgc3dlcHQgdGhlIHNlY3Rpb24gd2l0aCAtLSBzbyB0aGUgY29hdCBydW5zIGJvdGggQUxPTkcgdGhlIGJvZHlcbiAgICAgICAgLy8gKGEgd2hpdGUgY29sbGFyIGJldHdlZW4gYSB0YW4gc2t1bGwgYW5kIGEgdGFuIHNhZGRsZSkgYW5kIEFDUk9TUyBpdCAodGhlIHNhZGRsZSBnaXZpbmcgd2F5XG4gICAgICAgIC8vIHRvIGEgZHVzdHkgZmxhbmsgYW5kIGEgcGFsZSBiZWxseSkuIEFuIGF4aXMgdGludCBjYW5ub3QgZG8gdGhlIHNlY29uZCBoYWxmOiBvbiBhbiBhbmltYWxcbiAgICAgICAgLy8gbHlpbmcgb24gaXRzIHNpZGUgdGhlIGRvcnNhbC10by12ZW50cmFsIGF4aXMgaXMgaG9yaXpvbnRhbCwgc28gYSBiYW5kIGluIHggY3V0cyB0aGUgY3Jvd25cbiAgICAgICAgLy8gb2YgdGhlIHN3ZWVwIGluIGhhbGYsIGFuZCBhIE1VTFRJUExZIGNhbiBvbmx5IGV2ZXIgZGFya2VuIC0tIGl0IGNhbm5vdCB0YWtlIGEgd2FybSB0YW4gdG9cbiAgICAgICAgLy8gYSBjb29sZXIgZ3JleS4gVHdvIGNvbG91cnMgcGVyIHN0YXRpb24sIG9uZSBhdHRyaWJ1dGUsIHN0aWxsIG9uZSBkcmF3IGNhbGwuXG4gICAgICAgIGNvbnN0IHNlZyA9IHQuc2VnID8/IDEyLCBuID0gdC5zdGF0aW9ucy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkoc2VnICogbiAqIDMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIGNvbnN0IGUgPSB0LmhleGVzW01hdGgubWluKHQuaGV4ZXMubGVuZ3RoIC0gMSwgaSldO1xuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgVEhSRUUuQ29sb3IoQXJyYXkuaXNBcnJheShlKSA/IGVbMF0gOiBlKSwgdiA9IG5ldyBUSFJFRS5Db2xvcihBcnJheS5pc0FycmF5KGUpID8gZVsxXSA6IGUpO1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGYgPSAoTWF0aC5zaW4oaiAqIE1hdGguUEkgKiAyIC8gc2VnKSArIDEpIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGsgPSAoaSAqIHNlZyArIGopICogMztcbiAgICAgICAgICAgIGNvbFtrXSA9IGQuciArICh2LnIgLSBkLnIpICogZjsgY29sW2sgKyAxXSA9IGQuZyArICh2LmcgLSBkLmcpICogZjsgY29sW2sgKyAyXSA9IGQuYiArICh2LmIgLSBkLmIpICogZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgICAgICAgZ3MucHVzaChnKTtcbiAgICAgIH0gZWxzZSBncy5wdXNoKHRpbnRHZW8oZywgdC5oZXggPz8gMHhmZmZmZmYpKTtcbiAgICB9XG4gICAgbGV0IGcgPSBtZXJnZUdlb3MoZ3MpO1xuICAgIC8vIGEgcGVyLWNvbXBvbmVudCBzY2FsZSwgYXBwbGllZCB0byB0aGUgbWVyZ2UgYmVmb3JlIHRpbnRpbmc6IGhvdyBhIGx5aW5nIGFuaW1hbCBhdXRob3JlZCBhdFxuICAgIC8vIGl0cyBvd24gcHJvcG9ydGlvbnMgaXMgZml0dGVkIGludG8gdGhlIGRlY2xhcmVkIGVudmVsb3BlIHdpdGhvdXQgcmUtcmVhZGluZyBldmVyeSBzdGF0aW9uXG4gICAgaWYgKGMuc2NhbGUpIGcuc2NhbGUoYy5zY2FsZVswXSwgYy5zY2FsZVsxXSwgYy5zY2FsZVsyXSk7XG4gICAgLy8gQVhJUyBUSU5UOiBhIHBlci12ZXJ0ZXggYmxlbmQgZnJvbSBjMCBhdCBgZnJvbWAgdG8gYzEgYXQgYHRvYCBhbG9uZyBvbmUgYXhpcywgb3ZlciB0aGUgd2hvbGVcbiAgICAvLyBtZXJnZSAtLSBhIHRhbiBiYWNrIGZhZGluZyB0byBhIHdoaXRlIGJlbGx5IGNvc3RzIGFuIGF0dHJpYnV0ZSwgbm90IGEgc2Vjb25kIG1hdGVyaWFsLiBBcHBsaWVkXG4gICAgLy8gaW4gTElORUFSIHNwYWNlIHRocm91Z2ggVEhSRUUuQ29sb3IuIGBrZWVwYCBtdWx0aXBsaWVzIHRoZSBibGVuZCBpbnRvIHRoZSBleGlzdGluZyB0aW50IGluc3RlYWRcbiAgICAvLyBvZiByZXBsYWNpbmcgaXQsIHNvIGEgZGFyayBub3NlIHN0YXlzIGRhcmsuXG4gICAgaWYgKGMudGludCkge1xuICAgICAgY29uc3QgYSA9IG5ldyBUSFJFRS5Db2xvcihjLnRpbnQuYzApLCBiID0gbmV3IFRIUkVFLkNvbG9yKGMudGludC5jMSk7XG4gICAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGxldCBjb2wgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUgfCBudWxsO1xuICAgICAgaWYgKCFjb2wpIHsgY29sID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKS5maWxsKDEpLCAzKTsgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgY29sKTsgfVxuICAgICAgY29uc3QgYXggPSBjLnRpbnQuYXhpcyA9PT0gJ3gnID8gMCA6IGMudGludC5heGlzID09PSAneScgPyAxIDogMjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHYgPSBheCA9PT0gMCA/IHAuZ2V0WChpKSA6IGF4ID09PSAxID8gcC5nZXRZKGkpIDogcC5nZXRaKGkpO1xuICAgICAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHYgLSBjLnRpbnQuZnJvbSkgLyAoYy50aW50LnRvIC0gYy50aW50LmZyb20pKSk7XG4gICAgICAgIGNvbnN0IHIgPSBhLnIgKyAoYi5yIC0gYS5yKSAqIHQsIGdnID0gYS5nICsgKGIuZyAtIGEuZykgKiB0LCBiYiA9IGEuYiArIChiLmIgLSBhLmIpICogdDtcbiAgICAgICAgaWYgKGMudGludC5rZWVwKSBjb2wuc2V0WFlaKGksIGNvbC5nZXRYKGkpICogciwgY29sLmdldFkoaSkgKiBnZywgY29sLmdldFooaSkgKiBiYik7IGVsc2UgY29sLnNldFhZWihpLCByLCBnZywgYmIpO1xuICAgICAgfVxuICAgICAgY29sLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGMudXYgPT09ICd3b3JsZCcpIGcgPSB3b3JsZFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ2hlaWdodCcpIGcgPSBoZWlnaHRVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdwYW5lbCcpIGcgPSBwYW5lbFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ3BhbmVsLXJvdCcpIGcgPSBwYW5lbFVWKGcsIGMudXZTY2FsZSA/PyAxLCB0cnVlKTtcbiAgICAvLyAnY3VsbScgaXMgZGVsaWJlcmF0ZWx5IGFic2VudCBoZXJlOiBpdCBpcyB3cml0dGVuIHBlciBjeWxpbmRlciBhYm92ZSwgYmVmb3JlIHRoZSByb3RhdGlvbnMsXG4gICAgLy8gYW5kIGEgd2hvbGUtbWVyZ2UgcGFzcyB3b3VsZCBmbGF0dGVuIGl0IGJhY2sgdG8gdGhlIGN5bGluZGVyJ3MgZGVmYXVsdCAwLi4xIHdyYXAuXG4gICAgYWRkKGMuaWQsIGMubmFtZSwgZywgYy5tYXRlcmlhbCk7XG4gICAgaWYgKGMuY29sbGlkZXIpIGNvbGxpZGVyc1tjLmlkXSA9IGMuY29sbGlkZXI7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlcGV0aXRpb24gc3lzdGVtc1xuICAgKiBQaWNrZXRzLCBzbGF0cywgbGF0dGljZSBzdHJpcHM6IG9uZSBnZW9tZXRyeSwgb25lIEluc3RhbmNlZE1lc2gsIG9uZSBkcmF3IGNhbGwuICovXG4gIGZvciAoY29uc3QgciBvZiAoRy5pbnN0YW5jZWQgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgKHIuYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIChyLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgZm9yIChjb25zdCBmIG9mIChyLmZydXN0YSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKGZydXN0dW0oZi5zbGljZSgxKSksIGZbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGN5IG9mIChyLmN5bHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgdGgwYC9gdGhMZW5gIGN1dCBhIFBBUlRJQUwgY3lsaW5kZXIgdGhlIHNhbWUgd2F5IHRoZSBjb21wb25lbnQgYnJhbmNoIGRvZXM6IGEgc3BsaXQgYmFtYm9vXG4gICAgICAvLyBjdWxtIGlzIGEgaGFsZiBwaXBlLCB0aExlbiA9IFBJLCBgb3BlbmAgc28gaXQgaXMgYSBzaGVsbCB3aXRoIG5vIGRpc2NzIGF0IGl0cyBlbmRzLiBUaGVcbiAgICAgIC8vIG1hdGVyaWFsIGNhcnJpZXMgZG91YmxlU2lkZWQsIGJlY2F1c2UgYSBob2xsb3ctdXAgY3VsbSBpcyBzZWVuIGZyb20gdGhlIGluc2lkZS5cbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjeS5ydCwgY3kucmIsIGN5LmgsIGN5LnNlZyA/PyAxMiwgMSwgY3kub3BlbiA/PyBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeS50aDAgPz8gMCwgY3kudGhMZW4gPz8gTWF0aC5QSSAqIDIpO1xuICAgICAgaWYgKHIudXYgPT09ICdjdWxtJykgY3VsbVVWKGcsIGN5LnJ0LCBjeS5oLCByLnV2U2NhbGUgPz8gMSwgY3kudk9mZiA/PyAwKTtcbiAgICAgIGlmIChjeS5yeCkgZy5yb3RhdGVYKGN5LnJ4KTsgaWYgKGN5LnJ5KSBnLnJvdGF0ZVkoY3kucnkpOyBpZiAoY3kucnopIGcucm90YXRlWihjeS5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShjeS5hdFswXSwgY3kuYXRbMV0sIGN5LmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGN5LmhleCkpO1xuICAgIH1cbiAgICAvLyBBbiBPUEVOIHdoZWVsIC0tIHR5cmUgYW5kIHJpbSBhcyBjbG9zZWQgcmluZyBsYXRoZXMsIGEgaHViLCBhbmQgd2lyZSBzcG9rZXMgLS0gZm9yIGEgYmljeWNsZVxuICAgIC8vIHdob3NlIHdoZWVscyByZWFkIGFzIGJpY3ljbGUgd2hlZWxzIHJhdGhlciB0aGFuIGRpc2NzLiBMYXRoZXMgcmV2b2x2ZSBhYm91dCBZIChgcnhgIGxheXMgdGhlXG4gICAgLy8gYXhsZSB3aGVyZSB0aGUgcGxhY2VtZW50IHdhbnRzIGl0KTsgYHNwb2tlc2AgcmFkaWF0ZSBhYm91dCBYIGJ5IHRoZSBoZWxwZXIncyBjb252ZW50aW9uLCBzbyBhblxuICAgIC8vIGF4bGUgb24gWiB0YWtlcyBgcnk6IFBJLzJgLlxuICAgIGZvciAoY29uc3QgbCBvZiAoci5sYXRoZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gbGF0aGUobC5wdHMsIGwuc2VnID8/IDEyLCAwLCBsLnNoYXJwICE9PSBmYWxzZSk7XG4gICAgICBpZiAobC5yeCkgZy5yb3RhdGVYKGwucngpOyBpZiAobC5yeSkgZy5yb3RhdGVZKGwucnkpOyBpZiAobC5yeikgZy5yb3RhdGVaKGwucnopO1xuICAgICAgaWYgKGwuYXQpIGcudHJhbnNsYXRlKGwuYXRbMF0sIGwuYXRbMV0sIGwuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgbC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzIG9mIChyLnNwb2tlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBzcG9rZXMocy5ySHViLCBzLnJSaW0sIHMuaGFsZlcsIHMubiwgcy5oZXgsIHMudCA/PyAwLjAwNiwgcy5wcmlzbSA/PyBmYWxzZSk7XG4gICAgICBpZiAocy5yeCkgZy5yb3RhdGVYKHMucngpOyBpZiAocy5yeSkgZy5yb3RhdGVZKHMucnkpOyBpZiAocy5yeikgZy5yb3RhdGVaKHMucnopO1xuICAgICAgaWYgKHMuYXQpIGcudHJhbnNsYXRlKHMuYXRbMF0sIHMuYXRbMV0sIHMuYXRbMl0pOyBncy5wdXNoKGcpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHQgb2YgKHIudHViZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgICBsZXQgZyA9IG1lcmdlR2Vvcyhncyk7XG4gICAgaWYgKHIudXYgPT09ICd3b3JsZCcpIGcgPSB3b3JsZFVWKGcsIHIudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoci51diA9PT0gJ2hlaWdodCcpIGcgPSBoZWlnaHRVVihnLCByLnV2U2NhbGUgPz8gMSk7XG4gICAgLy8gJ2N1bG0nIGFnYWluIHdyaXR0ZW4gcGVyIGN5bGluZGVyIGFib3ZlLCBiZWZvcmUgdGhlIHJvdGF0aW9ucy5cbiAgICBjb25zdCBtYXRzOiBUSFJFRS5NYXRyaXg0W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHAgb2Ygci5wbGFjZW1lbnRzIGFzIG51bWJlcltdW10pIHtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHBbMF0sIHBbMV0sIHBbMl0pLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21FdWxlcihuZXcgVEhSRUUuRXVsZXIocFszXSA/PyAwLCBwWzRdID8/IDAsIHBbNV0gPz8gMCkpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSkpO1xuICAgIH1cbiAgICBhZGRJbnN0KHIuaWQsIHIubmFtZSwgZywgci5tYXRlcmlhbCwgbWF0cywgci5jb2xvcnMpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXNlcyAqL1xuICBmb3IgKGNvbnN0IHQgb2YgKENPTkZJRy50aWxlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBtYXQgPSBtYXRlcmlhbHNbdC5tYXRlcmlhbF07XG4gICAgaWYgKCFtYXQpIGNvbnRpbnVlO1xuICAgIC8vIEEgQkFLRUQgZ3JhcGhpYyAoYSBwcmludGVkIHNpZ24gZmFjZSk6IG9uZSBXZWJQIGRhdGEgVVJJIGNvbXBvc2VkIG9mZmxpbmUgZnJvbSB0aGUgcGxhdGUncyBvd25cbiAgICAvLyBwcmludGVkIHJlZ2lvbiBhbmQgdmVjdG9yIG1hcmtzLCBsb2FkZWQgdGhyb3VnaCBUZXh0dXJlTG9hZGVyLiBBc3NpZ25lZCBzeW5jaHJvbm91c2x5IHNvIHRoZVxuICAgIC8vIGhhcm5lc3Mgd2FpdHMgb24gdGhlIGRlY29kZS4gSXQgYmVhdHMgZmlsbFRleHQsIHdoaWNoIGRyYXdzIGEgZGlmZmVyZW50IHdvcmRtYXJrIHBlciBtYWNoaW5lLlxuICAgIGlmICh0LmtpbmQgPT09ICdiYWtlZCcpIHtcbiAgICAgIC8vIFVuZGVyIHBsYWluIE5vZGUgKHRoZSBjb3BsYW5hciBjaGVjaywgdGhlIHJ1bnRpbWUgcHJvYmUpIHRoZXJlIGlzIG5vIGRvY3VtZW50IGZvciBJbWFnZUxvYWRlcjpcbiAgICAgIC8vIGtlZXAgdGhlIHdoaXRlIGZhbGxiYWNrIHJhdGhlciB0aGFuIHRocm93LCBleGFjdGx5IGFzIHRoZSByZXRhaWwgZ2xhemluZyBkb2VzLlxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgYmFrZWQgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQodC51cmkpO1xuICAgICAgY29uc3Qgc3JnYiA9IChUSFJFRSBhcyBhbnkpLlNSR0JDb2xvclNwYWNlO1xuICAgICAgaWYgKHNyZ2IpIGJha2VkLmNvbG9yU3BhY2UgPSBzcmdiO1xuICAgICAgYmFrZWQuYW5pc290cm9weSA9IDQ7XG4gICAgICBtYXQubWFwID0gYmFrZWQ7IG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbGV0IHRleDogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwgPSBudWxsO1xuICAgIGlmICh0LmtpbmQgPT09ICdtdWQnKSB0ZXggPSBtdWRUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYmFzZSwgdC5zZWVkID8/IDEsIHQuY292ZXJhZ2UgPz8gMC4zMyk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2R1c3QnKSB0ZXggPSBkdXN0VGlsZSh0LnNpemUgPz8gNTEyLCB0LmR1c3QsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzApO1xuICAgIGlmICh0LmtpbmQgPT09ICdwbGFuaycpIHRleCA9IHBsYW5rVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJvYXJkcyA/PyA2LCB0LnNlZWQgPz8gNSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3J1c3QnKSB0ZXggPSBydXN0VGlsZSh0LnNpemUgPz8gNTEyLCB0LnJhdGlvLCB0LnNlZWQgPz8gNywgdC5kZW5zaXR5ID8/IDkwKTtcbiAgICBpZiAodC5raW5kID09PSAnY29ycnVnYXRpb24nKSB0ZXggPSBjb3JydWdhdGlvblRpbGUodC5zaXplID8/IDUxMiwgdC5waXRjaCA/PyAxMiwgdC5sb3cgPz8gMC43LCB0LnNlZWQgPz8gMyk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2dyaW1lJykgdGV4ID0gZ3JpbWVUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxMSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2Z1cicpIHRleCA9IGZ1clRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDEzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY2hhaW5saW5rJykgdGV4ID0gY2hhaW5saW5rVGlsZSh0LnNpemUgPz8gMjU2LCB0LndpcmUgPz8gMC4wOSwgdC5zZWVkID8/IDQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdiYW1ib28nKSB0ZXggPSBiYW1ib29UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc3RyaXBzID8/IDEwLCB0LnNlZWQgPz8gNik7XG4gICAgaWYgKHQua2luZCA9PT0gJ3N0cmlwZXMnKSB0ZXggPSBzdHJpcGVUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuYmFuZHMgPz8gOCwgdC5hLCB0LmIsIHQuc2VlZCA/PyA5KTtcbiAgICBpZiAodC5raW5kID09PSAncG9zdGVyJykgdGV4ID0gcG9zdGVyVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gOCwgdC5saW5lcyA/PyBbXSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BlYmJsZScpIHRleCA9IHBlYmJsZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDIxLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndHJlYWQnKSB0ZXggPSB0cmVhZFRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDIzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndHlyZScpIHRleCA9IHR5cmVUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuc2VlZCA/PyAyOSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2N1bG0nKSB0ZXggPSBjdWxtVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMzEpO1xuICAgIGlmICh0LmtpbmQgPT09ICdzYXduJykgdGV4ID0gc2F3blRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndGhhdGNoJykgdGV4ID0gdGhhdGNoVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMzcsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0YXJwJykgdGV4ID0gdGFycFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQxLCB0KTtcbiAgICBiaW5kVGlsZShtYXQsIHRleCwgdC5idW1wID8/IDApO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlVmV0aXZlclRoYXRjaENhbm9weU1vZHVsZU1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogdGhlIHJvb3QsIHBsdXMgT05FIFBFUiBXSEVFTCAoYW5kIGFueSBvdGhlciBtZWNoYW5pc20gQ09ORklHLnBpdm90cyBuYW1lcyAtLSBhXG4gICAgLy8gc3RlZXJpbmcgaGVhZCwgYSBjYW5vcHkgc3RheSkuIEEgdmVoaWNsZSdzIHdoZWVscyBnZW51aW5lbHkgdHVybiwgc28gZWFjaCBvbmUgaXMgYSBwcm9taXNlXG4gICAgLy8ga2VwdDogdGhlIHBpdm90IHNpdHMgYXQgdGhlIGh1YiwgaXRzIGF4aXMgaXMgdGhlIGF4bGUsIGFuZCBgaW5zdGFuY2VgIG5hbWVzIHdoaWNoIGluc3RhbmNlXG4gICAgLy8gb2YgdGhlIHdoZWVsIEluc3RhbmNlZE1lc2ggaXQgZHJpdmVzLiBOb3RoaW5nIGVsc2Ugb24gdGhlIHByb3AgbW92ZXMgLS0gdGhlIGRvb3JzIGFyZSBwYXJ0XG4gICAgLy8gb2YgdGhlIGJvZHkgc2hlbGwgLS0gc28gbm90aGluZyBlbHNlIGdldHMgYW4gYXhpcy5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcbiAgICBmb3IgKGNvbnN0IHB2IG9mIChDT05GSUcucGl2b3RzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgbyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgICAgby5uYW1lID0gcHYubmFtZTtcbiAgICAgIG8ucG9zaXRpb24uc2V0KHB2LnBvc2l0aW9uWzBdLCBwdi5wb3NpdGlvblsxXSwgcHYucG9zaXRpb25bMl0pO1xuICAgICAgby51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgICBhbmltYXRpb25Sb2xlOiAnY2hpbGQnLFxuICAgICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogcHYucG9zaXRpb24sIGF4aXM6IHB2LmF4aXMsIG5hbWU6IHB2Lm5hbWUsXG4gICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcHYuY29tcG9uZW50LCBpbnN0YW5jZTogcHYuaW5zdGFuY2UgPz8gbnVsbCwgbm90ZXM6IHB2Lm5vdGUgPz8gJycgfSxcbiAgICAgIH07XG4gICAgICByb290LmFkZChvKTtcbiAgICAgIHBpdm90cy5wdXNoKG8pO1xuICAgIH1cblxuICAgIC8vIFNvY2tldHM6IE5PTkUgdW5sZXNzIENPTkZJRy5zb2NrZXRzIG5hbWVzIG9uZS4gTm90aGluZyBhdHRhY2hlcyB0byBhIHZlaGljbGUgaW4gdGhpcyBraXRcbiAgICAvLyBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBc0N2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixjQUFjO0FBQUEsTUFDWjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLFdBQVc7QUFBQSxjQUNUO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsT0FBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsY0FBYztBQUFBLFVBQ1o7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFPRixTQUFTLFVBQVUsTUFBb0Q7QUFDckUsUUFBTSxRQUFnQyxDQUFDO0FBQ3ZDLFFBQU0sT0FBa0IsQ0FBQztBQUN6QixhQUFXLEtBQUssTUFBTTtBQUNwQixRQUFJLEVBQUUsT0FBTztBQUFFLFlBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQztBQUFHLFdBQUssS0FBSyxJQUFJO0FBQUEsSUFBRyxPQUN6RDtBQUFFLFlBQU0sS0FBSyxDQUFDO0FBQUcsV0FBSyxLQUFLLEtBQUs7QUFBQSxJQUFHO0FBQUEsRUFDMUM7QUFDQSxNQUFJLFFBQVE7QUFDWixhQUFXLEtBQUssTUFBTyxVQUFTLEVBQUUsYUFBYSxVQUFVLEVBQUU7QUFDM0QsUUFBTSxXQUFXLElBQUksYUFBYSxRQUFRLENBQUM7QUFDM0MsUUFBTSxTQUFTLElBQUksYUFBYSxRQUFRLENBQUM7QUFDekMsUUFBTSxLQUFLLElBQUksYUFBYSxRQUFRLENBQUM7QUFNckMsUUFBTSxXQUFXLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsYUFBYSxPQUFPLENBQUM7QUFDNUQsUUFBTSxRQUFRLFdBQVcsSUFBSSxhQUFhLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJO0FBQy9ELE1BQUksSUFBSTtBQUNSLGFBQVcsS0FBSyxPQUFPO0FBQ3JCLFVBQU0sSUFBSSxFQUFFLGFBQWEsVUFBVSxHQUFHLElBQUksRUFBRSxhQUFhLFFBQVEsR0FBRyxJQUFJLEVBQUUsYUFBYSxJQUFJO0FBQzNGLFVBQU0sSUFBSSxFQUFFLGFBQWEsT0FBTztBQUNoQyxhQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsT0FBTyxLQUFLO0FBQ2hDLGdCQUFVLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxnQkFBVSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxnQkFBVSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFDOUcsVUFBSSxHQUFHO0FBQUUsZ0JBQVEsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFHLGdCQUFRLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFHLGdCQUFRLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLE1BQUc7QUFDcEgsVUFBSSxHQUFHO0FBQUUsWUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsWUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBQSxNQUFHO0FBQ3ZFLFVBQUksU0FBUyxHQUFHO0FBQUUsZUFBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsZUFBTyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxlQUFPLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLE1BQUc7QUFBQSxJQUM1SDtBQUNBLFNBQUssRUFBRTtBQUFBLEVBQ1Q7QUFDQSxXQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLO0FBQUUsUUFBSSxLQUFLLENBQUMsRUFBRyxPQUFNLENBQUMsRUFBRSxRQUFRO0FBQUcsU0FBSyxDQUFDLEVBQUUsUUFBUTtBQUFBLEVBQUc7QUFDN0YsUUFBTSxNQUFNLElBQVUscUJBQWU7QUFDckMsTUFBSSxhQUFhLFlBQVksSUFBVSxzQkFBZ0IsVUFBVSxDQUFDLENBQUM7QUFDbkUsTUFBSSxhQUFhLFVBQVUsSUFBVSxzQkFBZ0IsUUFBUSxDQUFDLENBQUM7QUFDL0QsTUFBSSxhQUFhLE1BQU0sSUFBVSxzQkFBZ0IsSUFBSSxDQUFDLENBQUM7QUFDdkQsTUFBSSxNQUFPLEtBQUksYUFBYSxTQUFTLElBQVUsc0JBQWdCLE9BQU8sQ0FBQyxDQUFDO0FBQ3hFLE1BQUksbUJBQW1CO0FBQUcsTUFBSSxzQkFBc0I7QUFDcEQsU0FBTztBQUNUO0FBNkJBLFNBQVMsYUFBYSxLQUFpQixTQUFTLElBQUksTUFBTSxNQUFvQjtBQUM1RSxRQUFNLE1BQWtCLENBQUM7QUFDekIsV0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLFFBQVEsS0FBSztBQUNuQyxVQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUM7QUFDL0MsUUFBSSxRQUFRO0FBQ1osUUFBSSxLQUFLLEdBQUc7QUFDVixZQUFNLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzNFLFlBQU0sS0FBSyxLQUFLLE1BQU0sSUFBSSxFQUFFLEdBQUcsS0FBSyxLQUFLLE1BQU0sSUFBSSxFQUFFO0FBQ3JELFVBQUksS0FBSyxLQUFLLEtBQUssRUFBRyxTQUFRLEtBQUssS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxPQUFPLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLEtBQUssS0FBSztBQUN6SCxVQUFJLFNBQVMsS0FBSyxJQUFJLElBQUssS0FBSSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxLQUFLLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxLQUFLLEdBQUcsQ0FBQztBQUNoRixVQUFJLEtBQUssQ0FBQztBQUNWLFVBQUksU0FBUyxLQUFLLElBQUksSUFBSyxLQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEtBQUssS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEtBQUssR0FBRyxDQUFDO0FBQUEsSUFDbEYsTUFBTyxLQUFJLEtBQUssQ0FBQztBQUFBLEVBQ25CO0FBQ0EsU0FBTztBQUNUO0FBRUEsU0FBUyxNQUFNLEtBQWlCLEtBQWEsVUFBVSxHQUFHLFFBQVEsTUFBNEI7QUFDNUYsUUFBTSxLQUFLLFFBQVEsYUFBYSxHQUFHLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxJQUFVLGNBQVEsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUM7QUFDM0csUUFBTSxJQUFJLElBQVUsb0JBQWMsR0FBRyxHQUFHO0FBQ3hDLElBQUUscUJBQXFCO0FBQ3ZCLFNBQU87QUFDVDtBQXlIQSxTQUFTLGNBQWMsT0FBb0IsSUFBWSxJQUFrQztBQUN2RixRQUFNLElBQUksSUFBVSxzQkFBZ0IsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLGNBQWMsT0FBTyxlQUFlLEVBQUUsQ0FBQztBQUNwRyxJQUFFLFVBQVUsR0FBRyxHQUFHLEVBQUU7QUFDcEIsSUFBRSxxQkFBcUI7QUFDdkIsU0FBTztBQUNUO0FBOExBLFNBQVMsVUFBVSxVQUFzQixLQUFtQztBQVMxRSxRQUFNLE1BQWdCLENBQUMsR0FBRyxNQUFnQixDQUFDO0FBQzNDLFdBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxRQUFRLEtBQUs7QUFDeEMsVUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksU0FBUyxDQUFDO0FBQzdDLGFBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLO0FBQzVCLFlBQU0sS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJO0FBQzdCLFlBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLElBQUk7QUFDOUIsVUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsSUFBSTtBQUM1QixVQUFJLFVBQVUsVUFBYSxJQUFJLE1BQU8sS0FBSTtBQUMxQyxVQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFDQSxXQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsU0FBUyxHQUFHLEtBQUs7QUFDNUMsYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBTSxJQUFJLElBQUksTUFBTSxHQUFHLEtBQUssSUFBSSxLQUFLLE1BQU0sR0FBRyxLQUFLLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLElBQUksS0FBSztBQUN6RyxVQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUMzQjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLElBQUksSUFBVSxxQkFBZTtBQUNuQyxJQUFFLGFBQWEsWUFBWSxJQUFVLHNCQUFnQixJQUFJLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5RSxJQUFFLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLGFBQWMsSUFBSSxTQUFTLElBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6RixJQUFFLFNBQVMsR0FBRztBQUNkLElBQUUscUJBQXFCO0FBQ3ZCLFNBQU87QUFDVDtBQWlEQSxTQUFTLFFBQVEsS0FBMkIsS0FBbUM7QUFDN0UsUUFBTSxJQUFJLElBQVUsWUFBTSxHQUFHO0FBQzdCLFFBQU0sSUFBSSxJQUFJLGFBQWEsVUFBVSxFQUFFO0FBQ3ZDLFFBQU0sTUFBTSxJQUFJLGFBQWEsSUFBSSxDQUFDO0FBQ2xDLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQUUsUUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQUcsUUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFBRyxRQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUFBLEVBQUc7QUFDNUYsTUFBSSxhQUFhLFNBQVMsSUFBVSxzQkFBZ0IsS0FBSyxDQUFDLENBQUM7QUFDM0QsU0FBTztBQUNUO0FBS0EsU0FBUyxRQUFRLEtBQTJCLE9BQXFDO0FBQy9FLFFBQU0sSUFBSSxJQUFJLGFBQWEsVUFBVSxHQUFHLE1BQU0sSUFBSSxhQUFhLFFBQVE7QUFDdkUsUUFBTSxLQUFLLElBQUksYUFBYSxFQUFFLFFBQVEsQ0FBQztBQUN2QyxXQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsT0FBTyxLQUFLO0FBQ2hDLFVBQU0sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ3ZGLFFBQUksR0FBVztBQUNmLFFBQUksTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUFFLFVBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxVQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEsSUFBRyxXQUNqRCxNQUFNLElBQUk7QUFBRSxVQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsVUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLElBQUcsT0FDOUM7QUFBRSxVQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsVUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLElBQUc7QUFDckMsT0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJO0FBQU8sT0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUk7QUFBQSxFQUM3QztBQUNBLE1BQUksYUFBYSxNQUFNLElBQVUsc0JBQWdCLElBQUksQ0FBQyxDQUFDO0FBQ3ZELFNBQU87QUFDVDtBQTRHQSxTQUFTLE9BQU8sTUFBYyxNQUFjLE9BQWUsR0FBVyxLQUFhLElBQUksTUFBTyxRQUFRLE9BQTZCO0FBQ2pJLFFBQU0sT0FBK0IsQ0FBQztBQUN0QyxXQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixVQUFNLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSTtBQUM1QixVQUFNLFFBQVEsSUFBSSxNQUFNLElBQUksSUFBSSxNQUFNLFFBQVE7QUFDOUMsVUFBTSxNQUFNLE9BQU87QUFJbkIsVUFBTSxJQUFJLFFBQVEsSUFBVSx1QkFBaUIsSUFBSSxNQUFNLElBQUksTUFBTSxLQUFLLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBVSxrQkFBWSxHQUFHLEtBQUssQ0FBQztBQUNuSCxNQUFFLFVBQVUsR0FBRyxPQUFPLE1BQU0sR0FBRyxDQUFDO0FBQ2hDLE1BQUUsUUFBUSxLQUFLLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRztBQUNyQyxNQUFFLFFBQVEsQ0FBQztBQUFHLE1BQUUsVUFBVSxHQUFHLEdBQUcsT0FBTyxHQUFHO0FBQzFDLE1BQUUsUUFBUSxDQUFDO0FBQ1gsU0FBSyxLQUFLLENBQUM7QUFBQSxFQUNiO0FBQ0EsU0FBTyxRQUFRLFVBQVUsSUFBSSxHQUFHLEdBQUc7QUFDckM7QUFJQSxTQUFTLEtBQUssS0FBaUIsR0FBVyxNQUFNLEdBQUcsS0FBb0M7QUFDckYsUUFBTSxRQUFnQyxDQUFDO0FBQ3ZDLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxTQUFTLEdBQUcsS0FBSztBQUN2QyxVQUFNLElBQUksSUFBVSxjQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzNELFVBQU0sSUFBSSxJQUFVLGNBQVEsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkUsVUFBTSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztBQUFHLFVBQU0sTUFBTSxFQUFFLE9BQU87QUFDakQsUUFBSSxNQUFNLEtBQU07QUFDaEIsVUFBTSxJQUFJLElBQVUsdUJBQWlCLEdBQUcsR0FBRyxNQUFNLElBQUksS0FBSyxLQUFLLEdBQUcsS0FBSztBQUN2RSxVQUFNLElBQUksSUFBVSxpQkFBVyxFQUFFLG1CQUFtQixJQUFVLGNBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQztBQUM3RixNQUFFLGdCQUFnQixDQUFDO0FBQ25CLFVBQU0sSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxlQUFlLEdBQUc7QUFDN0MsTUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLFVBQU0sS0FBSyxDQUFDO0FBQUEsRUFDZDtBQUNBLFFBQU0sTUFBTSxVQUFVLEtBQUs7QUFDM0IsU0FBTyxRQUFRLFNBQVksTUFBTSxRQUFRLEtBQUssR0FBRztBQUNuRDtBQUlBLFNBQVMsS0FBSyxHQUFtQztBQUMvQyxRQUFNLElBQUksSUFBVSxrQkFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNoRCxNQUFJLEVBQUUsQ0FBQyxFQUFHLEdBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUFHLE1BQUksRUFBRSxDQUFDLEVBQUcsR0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQUcsTUFBSSxFQUFFLENBQUMsRUFBRyxHQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDOUUsSUFBRSxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLFNBQU87QUFDVDtBQVVBLFNBQVMsUUFBUSxNQUE4QjtBQUM3QyxTQUFPLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3BIO0FBTUEsU0FBUyxXQUFXLE1BQWMsTUFBc0Y7QUFDdEgsTUFBSSxPQUFPLGFBQWEsWUFBYSxRQUFPO0FBQzVDLFFBQU0sS0FBSyxTQUFTLGNBQWMsUUFBUTtBQUFHLEtBQUcsUUFBUTtBQUFNLEtBQUcsU0FBUztBQUcxRSxRQUFNLE1BQU0sR0FBRyxXQUFXLE1BQU0sRUFBRSxvQkFBb0IsS0FBSyxDQUFDO0FBQXNDLE1BQUksQ0FBQyxJQUFLLFFBQU87QUFDbkgsT0FBSyxLQUFLLElBQUk7QUFDZCxRQUFNLE1BQU0sSUFBVSxvQkFBYyxFQUFFO0FBQ3RDLE1BQUksUUFBUSxJQUFJLFFBQWM7QUFDOUIsTUFBSSxhQUFtQjtBQUN2QixNQUFJLGNBQWM7QUFDbEIsU0FBTztBQUNUO0FBSUEsU0FBUyxJQUFJLE1BQTRCO0FBQ3ZDLE1BQUksSUFBSSxTQUFTO0FBQ2pCLFNBQU8sTUFBTTtBQUFFLFFBQUssSUFBSSxVQUFVLGVBQWdCO0FBQUcsV0FBTyxJQUFJO0FBQUEsRUFBWTtBQUM5RTtBQVVBLFNBQVMsUUFBUSxNQUFjLE1BQWdCLE1BQWMsV0FBVyxNQUFrQztBQUN4RyxTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU0sUUFBUSxDQUFDLE1BQWdCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLFNBQVMsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUU7QUFDdEksUUFBSSxZQUFZLE1BQU0sSUFBSTtBQUFHLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFVBQU0sT0FBTyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxLQUFLLElBQUksU0FBUztBQUNqRSxTQUFLLGFBQWEsR0FBRyx3QkFBd0I7QUFDN0MsU0FBSyxhQUFhLE1BQU0sd0JBQXdCO0FBQ2hELFNBQUssYUFBYSxHQUFHLHFCQUFxQjtBQUMxQyxRQUFJLFlBQVk7QUFBTSxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM3QyxhQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksV0FBVztBQUNuRSxZQUFNLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUMxQixZQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDekIsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFNBQUcsYUFBYSxHQUFHLG9CQUFvQixDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFDdEYsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3JHO0FBRUEsYUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLEtBQUs7QUFDN0IsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJO0FBQUcsWUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLElBQUk7QUFDaEUsVUFBSSxZQUFZLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQVcsVUFBSSxTQUFTLEdBQUcsR0FBRyxLQUFLLEdBQUc7QUFBQSxJQUMzRTtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBSUEsU0FBUyxTQUFTLE1BQWMsTUFBZ0IsTUFBYyxXQUFXLEtBQWtDO0FBQ3pHLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsUUFBSSxZQUFZO0FBQVcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbEQsVUFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUQsVUFBTSxPQUFPLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEtBQUssSUFBSSxTQUFTO0FBQ2pFLFNBQUssYUFBYSxHQUFHLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU87QUFDeEQsU0FBSyxhQUFhLEtBQUssUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTztBQUMxRCxTQUFLLGFBQWEsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLO0FBQ3RELFFBQUksWUFBWTtBQUFNLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzdDLGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxXQUFXLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUNySCxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLO0FBQzlHLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUNyRztBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBSUEsU0FBUyxnQkFBZ0IsTUFBYyxPQUFlLEtBQWEsTUFBMEM7QUFDM0csU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSztBQUN4RCxZQUFNLElBQUksS0FBSyxNQUFNLE9BQU8sT0FBTyxJQUFJLE9BQU8sRUFBRTtBQUNoRCxVQUFJLFlBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFBSyxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ2hFO0FBQ0EsUUFBSSwyQkFBMkI7QUFDL0IsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3hELFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxZQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDekIsU0FBRyxhQUFhLEdBQUcsa0JBQWtCLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLG1CQUFtQjtBQUNsRixVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDdkk7QUFDQSxRQUFJLDJCQUEyQjtBQUFBLEVBQ2pDLENBQUM7QUFDSDtBQUlBLFNBQVMsVUFBVSxNQUFjLFFBQWdCLE1BQTBDO0FBQ3pGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsUUFBSSxZQUFZO0FBQVcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbEQsVUFBTSxLQUFLLElBQUk7QUFDZixhQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsS0FBSztBQUMvQixZQUFNLE9BQU8sT0FBTyxJQUFJLElBQUk7QUFDNUIsWUFBTSxJQUFJLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBSSxZQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQUssVUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLEdBQUcsRUFBRTtBQUNwRSxVQUFJLFlBQVk7QUFBdUIsVUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFLLENBQUM7QUFDeEYsZUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsY0FBTSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksSUFBSTtBQUMxRSxZQUFJLGNBQWMsaUJBQWlCLE9BQU8sSUFBSSxJQUFJLElBQUk7QUFBSyxZQUFJLFlBQVk7QUFDM0UsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLElBQUksR0FBRyxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxLQUFLLENBQUM7QUFBRyxZQUFJLE9BQU8sR0FBRyxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksS0FBSyxDQUFDO0FBQUcsWUFBSSxPQUFPO0FBQUEsTUFDMUg7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFJQSxTQUFTLFNBQVMsTUFBYyxPQUFpQixNQUFjLFVBQVUsSUFBZ0M7QUFDdkcsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsRCxRQUFJLDJCQUEyQjtBQUMvQixhQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsS0FBSztBQUNoQyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFDeEQsWUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQ3pCLFlBQU0sSUFBSSxNQUFNLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQztBQUM5QyxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLO0FBQzlHLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUN2STtBQUNBLFFBQUksMkJBQTJCO0FBQUEsRUFDakMsQ0FBQztBQUNIO0FBV0EsU0FBUyxRQUFRLE1BQWMsTUFBYyxHQUFvQztBQUMvRSxTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU0sTUFBTSxDQUFDLE1BQWdCLEdBQUcsS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFHLFVBQU0sT0FBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSTtBQUNuRCxRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUVsRCxRQUFJLDJCQUEyQjtBQUMvQixhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsVUFBVSxLQUFLLEtBQUs7QUFDekMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksSUFBSTtBQUN0RixZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSztBQUN4RixVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDdkk7QUFFQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsV0FBVyxJQUFJLEtBQUs7QUFDekMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sS0FBSyxFQUFFLGFBQWEsQ0FBQyxNQUFNLE1BQU0sSUFBSTtBQUN4RyxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQyxRQUFRO0FBQUcsU0FBRyxhQUFhLEtBQUssUUFBUSxJQUFJLEVBQUUsQ0FBQyxPQUFPO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQyxLQUFLO0FBQ2xJLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUNySztBQUVBLFVBQU0sVUFBVSxFQUFFLFdBQVcsS0FBTSxNQUFNLEtBQUssRUFBRSxVQUFVO0FBQzFELFVBQU0sYUFBYSxDQUFDLEdBQVcsR0FBVyxJQUFZLElBQVksTUFBYztBQUM5RSxVQUFJLFlBQVk7QUFBRyxVQUFJLFVBQVU7QUFBRyxVQUFJLE9BQU8sR0FBRyxDQUFDO0FBQUcsVUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBRyxVQUFJLE9BQU87QUFDN0YsVUFBSSxJQUFJLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLE9BQU8sSUFBSSxHQUFHLENBQUM7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUcsWUFBSSxPQUFPO0FBQUEsTUFBRztBQUNsRyxVQUFJLElBQUksSUFBSSxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLElBQUksR0FBRyxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUFHLFlBQUksT0FBTztBQUFBLE1BQUc7QUFDdEcsVUFBSSxJQUFJLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUcsWUFBSSxPQUFPO0FBQUEsTUFBRztBQUNsRyxVQUFJLElBQUksSUFBSSxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUFHLFlBQUksT0FBTztBQUFBLE1BQUc7QUFBQSxJQUN4RztBQUNBLFFBQUksVUFBVTtBQUNkLGFBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxLQUFLO0FBQ2hDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxJQUFJLE9BQU8sTUFBTSxJQUFJLE9BQU8sTUFBTSxJQUFJLElBQUk7QUFDeEYsWUFBTSxRQUFRLElBQUksSUFBSTtBQUN0QixVQUFJLDJCQUEyQixRQUFRLFdBQVc7QUFDbEQsVUFBSSxjQUFjLFFBQVEsb0JBQW9CLE9BQU8sSUFBSSxJQUFJLEdBQUksTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksT0FBTyxJQUFJLElBQUksSUFBSTtBQUMvRyxpQkFBVyxHQUFHLEdBQUcsS0FBSyxJQUFJLEVBQUUsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFLElBQUksR0FBRyxNQUFNLElBQUksSUFBSSxHQUFHO0FBQUEsSUFDeEU7QUFDQSxRQUFJLDJCQUEyQjtBQUFBLEVBQ2pDLENBQUM7QUFDSDtBQUVBLFNBQVMsU0FBUyxLQUEyQixPQUFxQztBQUNoRixRQUFNLElBQUksSUFBSSxhQUFhLFVBQVUsR0FBRyxNQUFNLElBQUksYUFBYSxRQUFRO0FBQ3ZFLFFBQU0sS0FBSyxJQUFJLGFBQWEsRUFBRSxRQUFRLENBQUM7QUFDdkMsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxVQUFNLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQzNELFVBQU0sSUFBSSxNQUFNLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUN6QyxPQUFHLElBQUksQ0FBQyxJQUFJLElBQUk7QUFBTyxPQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtBQUFBLEVBQ3JEO0FBQ0EsTUFBSSxhQUFhLE1BQU0sSUFBVSxzQkFBZ0IsSUFBSSxDQUFDLENBQUM7QUFDdkQsU0FBTztBQUNUO0FBNENBLFNBQVMsU0FBUyxLQUFpQyxLQUFpQyxPQUFPLEdBQVM7QUFDbEcsTUFBSSxDQUFDLElBQUs7QUFDVixNQUFJLE1BQU07QUFDVixNQUFJLE9BQU8sR0FBRztBQUFFLFFBQUksVUFBVTtBQUFLLFFBQUksWUFBWTtBQUFBLEVBQU07QUFDekQsTUFBSSxjQUFjO0FBQ3BCO0FBU0EsU0FBUyxNQUFNLEdBQThCO0FBQzNDLFFBQU0sS0FBYSxFQUFFLElBQUksS0FBYSxFQUFFLElBQUksS0FBaUIsRUFBRSxTQUFTLElBQVksRUFBRSxLQUFLO0FBQzNGLFFBQU0sSUFBSSxDQUFDLE1BQWMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sSUFBSTtBQUNwRCxRQUFNLElBQUksQ0FBQyxNQUFjLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLElBQUk7QUFDcEQsUUFBTSxPQUFPLENBQUMsTUFBYyxTQUFrQjtBQUM1QyxVQUFNLE1BQWdCLENBQUMsR0FBRyxLQUFlLENBQUMsR0FBRyxNQUFnQixDQUFDO0FBQzlELGFBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFLLFVBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFLO0FBQUUsVUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQUcsU0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxJQUFHO0FBQzlILGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFLLFVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQ3hELFlBQU0sSUFBSSxLQUFLLEtBQUssS0FBSyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJO0FBQy9ELFVBQUksS0FBTSxLQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxVQUFRLEtBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ3RFO0FBQ0EsVUFBTSxJQUFJLElBQVUscUJBQWU7QUFDbkMsTUFBRSxhQUFhLFlBQVksSUFBVSw2QkFBdUIsS0FBSyxDQUFDLENBQUM7QUFDbkUsTUFBRSxhQUFhLE1BQU0sSUFBVSw2QkFBdUIsSUFBSSxDQUFDLENBQUM7QUFDNUQsTUFBRSxTQUFTLEdBQUc7QUFBRyxNQUFFLHFCQUFxQjtBQUFHLFdBQU87QUFBQSxFQUNwRDtBQUtBLFFBQU0sUUFBUSxDQUFDLEdBQXlCLFFBQWdCO0FBQ3RELFVBQU0sSUFBSSxFQUFFLGFBQWEsVUFBVSxFQUFFLE9BQU8sSUFBSSxJQUFVLFlBQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxhQUFhLElBQUksQ0FBQztBQUNsRyxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUFFLFVBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUFHLFVBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQUcsVUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFBQSxJQUFHO0FBQzVGLE1BQUUsYUFBYSxTQUFTLElBQVUsc0JBQWdCLEtBQUssQ0FBQyxDQUFDO0FBQUcsV0FBTztBQUFBLEVBQ3JFO0FBQ0EsUUFBTSxPQUFPLEtBQUssR0FBRyxLQUFLLEdBQUcsT0FBTyxLQUFLLENBQUMsR0FBRyxJQUFJO0FBQ2pELFFBQU0sUUFBUSxFQUFFLGFBQWEsU0FDekIsQ0FBQyxNQUFNLE1BQU0sRUFBRSxVQUFVLFFBQVEsR0FBRyxNQUFNLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFDM0QsQ0FBQyxNQUFNLElBQUk7QUFFZixRQUFNLFFBQVEsQ0FBQyxLQUFtQixRQUFrQjtBQUNsRCxVQUFNLE1BQWdCLENBQUMsR0FBRyxLQUFlLENBQUM7QUFDMUMsZUFBVyxDQUFDLElBQUksRUFBRSxLQUFLLEtBQUs7QUFDMUIsWUFBTSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDckYsWUFBTUEsTUFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUdDLE1BQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUMzRyxZQUFNLElBQUksQ0FBQ0QsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxJQUFJRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLEdBQUdELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsSUFBSUQsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxHQUFHRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLElBQUlELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsQ0FBQztBQUN0RyxZQUFNLE1BQU0sRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUNuSCxpQkFBVyxLQUFLLEtBQUs7QUFBRSxZQUFJLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENB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VUFDcEUsV0FBVyxHQUFHO0FBQUEsVUFBVyxVQUFVLEdBQUcsWUFBWTtBQUFBLFVBQU0sT0FBTyxHQUFHLFFBQVE7QUFBQSxRQUFHO0FBQUEsTUFDeEY7QUFDQSxXQUFLLElBQUksQ0FBQztBQUNWLGFBQU8sS0FBSyxDQUFDO0FBQUEsSUFDZjtBQVFBLFVBQU0sWUFBWSxPQUFPLFFBQVMsR0FBRyxhQUFhLENBQUMsQ0FBeUIsRUFDekUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUN6RSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxHQUFJLEVBQWEsRUFBRTtBQUtwRCxVQUFNLFVBQVUsb0JBQUksSUFBOEI7QUFDbEQsZUFBVyxDQUFDLE1BQU0sT0FBTyxLQUFLLE9BQU8sUUFBUyxHQUFHLHFCQUFxQixDQUFDLENBQXNDLEdBQUc7QUFDOUcsY0FBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUFBLElBQ2hDO0FBQ0EsZUFBVyxRQUFRLE9BQU8sT0FBTyxLQUFLLEdBQUc7QUFDdkMsWUFBTSxRQUFTLE1BQWMsVUFBVSxlQUFlLGFBQWE7QUFDbkUsVUFBSSxPQUFPLFVBQVUsWUFBWSxDQUFDLE1BQU87QUFDekMsVUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQUcsU0FBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLGNBQVEsSUFBSSxLQUFLLEVBQUcsS0FBSyxJQUFJO0FBQUEsSUFDL0I7QUFFQSxTQUFLLFNBQVMsZ0JBQWdCO0FBQUEsTUFDNUIsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLSCxPQUFPLE9BQU8sS0FBSyxLQUFLLEVBQUU7QUFBQSxNQUMxQjtBQUFBLE1BQ0EsU0FBUyxPQUFPLE9BQVEsR0FBRyxXQUFXLENBQUMsQ0FBb0M7QUFBQSxNQUMzRTtBQUFBLE1BQ0EsbUJBQW1CLENBQUMsR0FBRyxRQUFRLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sT0FBTyxPQUFPLEVBQUUsTUFBTSxRQUFRLEVBQUU7QUFBQSxNQUN0RixNQUFNLEVBQUUsT0FBTyxRQUFRLEdBQUcsVUFBVSxDQUFDLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQyxFQUFFO0FBQUEsSUFDcEU7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUOyIsCiAgIm5hbWVzIjogWyJlMSIsICJlMiIsICJnIl0KfQo=
