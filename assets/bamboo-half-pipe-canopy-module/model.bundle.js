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

// ../repo/scratch/bamboo-half-pipe-canopy-module/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createBambooHalfPipeCanopyModuleModel: () => createBambooHalfPipeCanopyModuleModel,
  createModel: () => createModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "bamboo-half-pipe-canopy-module",
  "name": "Bamboo Half-Pipe Canopy Module",
  "exportName": "BambooHalfPipeCanopyModule",
  "envelope": "Envelope 4.00 x 3.10 x 4.00 m, origin base-center, +Y up, ridge along X.\n * Budget (large): <=4000 triangles, <=4 draw calls, <=3 materials, <=6 unique geometries.",
  "materials": [
    {
      "id": "bamboo",
      "color": 16777215,
      "roughness": 0.62,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "split",
      "color": 16777215,
      "roughness": 0.6,
      "metalness": 0,
      "doubleSided": true
    },
    {
      "id": "rope",
      "color": 16777215,
      "roughness": 0.85,
      "metalness": 0,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "bamboo",
      "kind": "culm",
      "size": 512,
      "seed": 621
    },
    {
      "material": "split",
      "kind": "split",
      "size": 512,
      "seed": 622
    },
    {
      "material": "rope",
      "kind": "rope",
      "size": 256,
      "seed": 623
    }
  ],
  "geometry": {
    "components": [
      {
        "id": "frame",
        "name": "Bamboo pole frame, rafters and ridge",
        "material": "bamboo",
        "uv": "culm",
        "uvScale": 0.6,
        "cyls": [
          {
            "at": [
              -1.68,
              1.185,
              -1.68
            ],
            "rt": 0.08,
            "rb": 0.08,
            "h": 2.37,
            "seg": 10,
            "hex": 9933439,
            "vOff": -2.352
          },
          {
            "at": [
              -1.68,
              1.185,
              1.68
            ],
            "rt": 0.08,
            "rb": 0.08,
            "h": 2.37,
            "seg": 10,
            "hex": 10722960,
            "vOff": 0
          },
          {
            "at": [
              1.68,
              1.185,
              -1.68
            ],
            "rt": 0.08,
            "rb": 0.08,
            "h": 2.37,
            "seg": 10,
            "hex": 9933439,
            "vOff": 0
          },
          {
            "at": [
              1.68,
              1.185,
              1.68
            ],
            "rt": 0.08,
            "rb": 0.08,
            "h": 2.37,
            "seg": 10,
            "hex": 10722960,
            "vOff": 2.352
          },
          {
            "at": [
              0,
              2.27,
              -1.68
            ],
            "rt": 0.08,
            "rb": 0.08,
            "h": 3.9,
            "seg": 10,
            "rz": 1.5707963267948966,
            "hex": 10722960,
            "vOff": 2.27
          },
          {
            "at": [
              0,
              2.27,
              1.68
            ],
            "rt": 0.08,
            "rb": 0.08,
            "h": 3.9,
            "seg": 10,
            "rz": 1.5707963267948966,
            "hex": 9933439,
            "vOff": 2.67
          },
          {
            "at": [
              -1.68,
              2.11,
              0
            ],
            "rt": 0.08,
            "rb": 0.08,
            "h": 3.9,
            "seg": 10,
            "rx": 1.5707963267948966,
            "hex": 9933439,
            "vOff": 3.0700000000000003
          },
          {
            "at": [
              1.68,
              2.11,
              0
            ],
            "rt": 0.08,
            "rb": 0.08,
            "h": 3.9,
            "seg": 10,
            "rx": 1.5707963267948966,
            "hex": 10722960,
            "vOff": 3.4699999999999998
          },
          {
            "at": [
              0,
              2.03,
              -1.68
            ],
            "rt": 0.08,
            "rb": 0.08,
            "h": 3.9,
            "seg": 10,
            "rz": 1.5707963267948966,
            "hex": 10722960,
            "vOff": 2.03
          },
          {
            "at": [
              0,
              2.03,
              1.68
            ],
            "rt": 0.08,
            "rb": 0.08,
            "h": 3.9,
            "seg": 10,
            "rz": 1.5707963267948966,
            "hex": 9933439,
            "vOff": 2.4299999999999997
          },
          {
            "at": [
              -1.68,
              1.8699999999999999,
              0
            ],
            "rt": 0.08,
            "rb": 0.08,
            "h": 3.9,
            "seg": 10,
            "rx": 1.5707963267948966,
            "hex": 9933439,
            "vOff": 2.83
          },
          {
            "at": [
              1.68,
              1.8699999999999999,
              0
            ],
            "rt": 0.08,
            "rb": 0.08,
            "h": 3.9,
            "seg": 10,
            "rx": 1.5707963267948966,
            "hex": 10722960,
            "vOff": 3.2299999999999995
          },
          {
            "at": [
              -1.68,
              2.535,
              0
            ],
            "rt": 0.064,
            "rb": 0.064,
            "h": 0.5300000000000002,
            "seg": 8,
            "hex": 9933439,
            "vOff": -1.68
          },
          {
            "at": [
              1.68,
              2.535,
              0
            ],
            "rt": 0.064,
            "rb": 0.064,
            "h": 0.5300000000000002,
            "seg": 8,
            "hex": 9933439,
            "vOff": 1.68
          },
          {
            "at": [
              0,
              2.8000000000000003,
              0
            ],
            "rt": 0.07,
            "rb": 0.07,
            "h": 3.9,
            "seg": 10,
            "rz": 1.5707963267948966,
            "hex": 10722960,
            "vOff": 0.2
          },
          {
            "at": [
              -1.86,
              2.5422000000000002,
              -1.01
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 1.8232595099703965,
            "seg": 8,
            "rx": -1.843805029881607,
            "hex": 10328200,
            "vOff": -2.8600000000000003
          },
          {
            "at": [
              -1.86,
              2.5422000000000002,
              1.01
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 1.8232595099703965,
            "seg": 8,
            "rx": 1.843805029881607,
            "hex": 10328200,
            "vOff": -0.8600000000000001
          },
          {
            "at": [
              -0.93,
              2.5422000000000002,
              -1.01
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 1.8232595099703965,
            "seg": 8,
            "rx": -1.843805029881607,
            "hex": 10328200,
            "vOff": -1.9300000000000002
          },
          {
            "at": [
              -0.93,
              2.5422000000000002,
              1.01
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 1.8232595099703965,
            "seg": 8,
            "rx": 1.843805029881607,
            "hex": 10328200,
            "vOff": 0.06999999999999995
          },
          {
            "at": [
              0,
              2.5422000000000002,
              -1.01
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 1.8232595099703965,
            "seg": 8,
            "rx": -1.843805029881607,
            "hex": 10328200,
            "vOff": -1
          },
          {
            "at": [
              0,
              2.5422000000000002,
              1.01
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 1.8232595099703965,
            "seg": 8,
            "rx": 1.843805029881607,
            "hex": 10328200,
            "vOff": 1
          },
          {
            "at": [
              0.93,
              2.5422000000000002,
              -1.01
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 1.8232595099703965,
            "seg": 8,
            "rx": -1.843805029881607,
            "hex": 10328200,
            "vOff": -0.06999999999999995
          },
          {
            "at": [
              0.93,
              2.5422000000000002,
              1.01
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 1.8232595099703965,
            "seg": 8,
            "rx": 1.843805029881607,
            "hex": 10328200,
            "vOff": 1.9300000000000002
          },
          {
            "at": [
              1.86,
              2.5422000000000002,
              -1.01
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 1.8232595099703965,
            "seg": 8,
            "rx": -1.843805029881607,
            "hex": 10328200,
            "vOff": 0.8600000000000001
          },
          {
            "at": [
              1.86,
              2.5422000000000002,
              1.01
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 1.8232595099703965,
            "seg": 8,
            "rx": 1.843805029881607,
            "hex": 10328200,
            "vOff": 2.8600000000000003
          },
          {
            "at": [
              0,
              2.9953837832075334,
              0
            ],
            "rt": 0.11,
            "rb": 0.11,
            "h": 3.9,
            "seg": 10,
            "rz": 1.5707963267948966,
            "hex": 10722960,
            "vOff": 0.6
          }
        ]
      },
      {
        "id": "lashings",
        "name": "Rope and cord lashings",
        "material": "rope",
        "uv": "culm",
        "uvScale": 0.12,
        "cyls": [
          {
            "at": [
              -1.68,
              2.07,
              -1.68
            ],
            "rt": 0.10400000000000001,
            "rb": 0.10400000000000001,
            "h": 0.46,
            "seg": 8,
            "hex": 10851439,
            "vOff": -3.36
          },
          {
            "at": [
              -1.68,
              1.5699999999999998,
              -1.68
            ],
            "rt": 0.092,
            "rb": 0.092,
            "h": 0.06,
            "seg": 8,
            "hex": 6706234,
            "vOff": -1.68
          },
          {
            "at": [
              -1.68,
              2.07,
              1.68
            ],
            "rt": 0.10400000000000001,
            "rb": 0.10400000000000001,
            "h": 0.46,
            "seg": 8,
            "hex": 11575164,
            "vOff": 0
          },
          {
            "at": [
              -1.68,
              1.5699999999999998,
              1.68
            ],
            "rt": 0.092,
            "rb": 0.092,
            "h": 0.06,
            "seg": 8,
            "hex": 6706234,
            "vOff": 1.68
          },
          {
            "at": [
              1.68,
              2.07,
              -1.68
            ],
            "rt": 0.10400000000000001,
            "rb": 0.10400000000000001,
            "h": 0.46,
            "seg": 8,
            "hex": 10851439,
            "vOff": 0
          },
          {
            "at": [
              1.68,
              1.5699999999999998,
              -1.68
            ],
            "rt": 0.092,
            "rb": 0.092,
            "h": 0.06,
            "seg": 8,
            "hex": 6706234,
            "vOff": -1.68
          },
          {
            "at": [
              1.68,
              2.07,
              1.68
            ],
            "rt": 0.10400000000000001,
            "rb": 0.10400000000000001,
            "h": 0.46,
            "seg": 8,
            "hex": 11575164,
            "vOff": 3.36
          },
          {
            "at": [
              1.68,
              1.5699999999999998,
              1.68
            ],
            "rt": 0.092,
            "rb": 0.092,
            "h": 0.06,
            "seg": 8,
            "hex": 6706234,
            "vOff": 1.68
          },
          {
            "at": [
              -1.8299999999999998,
              2.27,
              -1.68
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 11575164,
            "vOff": 1.27,
            "rz": 1.5707963267948966
          },
          {
            "at": [
              -1.8299999999999998,
              2.27,
              1.68
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 10851439,
            "vOff": 3.27,
            "rz": 1.5707963267948966
          },
          {
            "at": [
              -1.68,
              2.11,
              -1.8299999999999998
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 10851439,
            "vOff": 0.27,
            "rx": 1.5707963267948966
          },
          {
            "at": [
              1.68,
              2.11,
              -1.8299999999999998
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 11575164,
            "vOff": 4.27,
            "rx": 1.5707963267948966
          },
          {
            "at": [
              1.8299999999999998,
              2.27,
              -1.68
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 11575164,
            "vOff": 3.27,
            "rz": 1.5707963267948966
          },
          {
            "at": [
              1.8299999999999998,
              2.27,
              1.68
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 10851439,
            "vOff": 1.27,
            "rz": 1.5707963267948966
          },
          {
            "at": [
              -1.68,
              2.11,
              1.8299999999999998
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 10851439,
            "vOff": 4.27,
            "rx": 1.5707963267948966
          },
          {
            "at": [
              1.68,
              2.11,
              1.8299999999999998
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 11575164,
            "vOff": 0.27,
            "rx": 1.5707963267948966
          },
          {
            "at": [
              -1.8299999999999998,
              2.03,
              -1.68
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 11575164,
            "vOff": 1.0299999999999998,
            "rz": 1.5707963267948966
          },
          {
            "at": [
              -1.8299999999999998,
              2.03,
              1.68
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 10851439,
            "vOff": 3.03,
            "rz": 1.5707963267948966
          },
          {
            "at": [
              -1.68,
              1.8699999999999999,
              -1.8299999999999998
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 10851439,
            "vOff": 0.029999999999999805,
            "rx": 1.5707963267948966
          },
          {
            "at": [
              1.68,
              1.8699999999999999,
              -1.8299999999999998
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 11575164,
            "vOff": 4.029999999999999,
            "rx": 1.5707963267948966
          },
          {
            "at": [
              1.8299999999999998,
              2.03,
              -1.68
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 11575164,
            "vOff": 3.03,
            "rz": 1.5707963267948966
          },
          {
            "at": [
              1.8299999999999998,
              2.03,
              1.68
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 10851439,
            "vOff": 1.0299999999999998,
            "rz": 1.5707963267948966
          },
          {
            "at": [
              -1.68,
              1.8699999999999999,
              1.8299999999999998
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 10851439,
            "vOff": 4.029999999999999,
            "rx": 1.5707963267948966
          },
          {
            "at": [
              1.68,
              1.8699999999999999,
              1.8299999999999998
            ],
            "rt": 0.1,
            "rb": 0.1,
            "h": 0.13,
            "seg": 8,
            "hex": 11575164,
            "vOff": 0.029999999999999805,
            "rx": 1.5707963267948966
          },
          {
            "at": [
              -1.86,
              2.3546,
              -1.68
            ],
            "rt": 0.065,
            "rb": 0.065,
            "h": 0.11,
            "seg": 8,
            "hex": 11575164,
            "vOff": -1.86,
            "rx": -1.843805029881607
          },
          {
            "at": [
              -1.86,
              2.3546,
              1.68
            ],
            "rt": 0.065,
            "rb": 0.065,
            "h": 0.11,
            "seg": 8,
            "hex": 11575164,
            "vOff": -1.86,
            "rx": 1.843805029881607
          },
          {
            "at": [
              -0.93,
              2.3546,
              -1.68
            ],
            "rt": 0.065,
            "rb": 0.065,
            "h": 0.11,
            "seg": 8,
            "hex": 11575164,
            "vOff": -0.93,
            "rx": -1.843805029881607
          },
          {
            "at": [
              -0.93,
              2.3546,
              1.68
            ],
            "rt": 0.065,
            "rb": 0.065,
            "h": 0.11,
            "seg": 8,
            "hex": 11575164,
            "vOff": -0.93,
            "rx": 1.843805029881607
          },
          {
            "at": [
              0,
              2.3546,
              -1.68
            ],
            "rt": 0.065,
            "rb": 0.065,
            "h": 0.11,
            "seg": 8,
            "hex": 11575164,
            "vOff": 0,
            "rx": -1.843805029881607
          },
          {
            "at": [
              0,
              2.3546,
              1.68
            ],
            "rt": 0.065,
            "rb": 0.065,
            "h": 0.11,
            "seg": 8,
            "hex": 11575164,
            "vOff": 0,
            "rx": 1.843805029881607
          },
          {
            "at": [
              0.93,
              2.3546,
              -1.68
            ],
            "rt": 0.065,
            "rb": 0.065,
            "h": 0.11,
            "seg": 8,
            "hex": 11575164,
            "vOff": 0.93,
            "rx": -1.843805029881607
          },
          {
            "at": [
              0.93,
              2.3546,
              1.68
            ],
            "rt": 0.065,
            "rb": 0.065,
            "h": 0.11,
            "seg": 8,
            "hex": 11575164,
            "vOff": 0.93,
            "rx": 1.843805029881607
          },
          {
            "at": [
              1.86,
              2.3546,
              -1.68
            ],
            "rt": 0.065,
            "rb": 0.065,
            "h": 0.11,
            "seg": 8,
            "hex": 11575164,
            "vOff": 1.86,
            "rx": -1.843805029881607
          },
          {
            "at": [
              1.86,
              2.3546,
              1.68
            ],
            "rt": 0.065,
            "rb": 0.065,
            "h": 0.11,
            "seg": 8,
            "hex": 11575164,
            "vOff": 1.86,
            "rx": 1.843805029881607
          },
          {
            "at": [
              -1.68,
              2.8000000000000003,
              0
            ],
            "rt": 0.092,
            "rb": 0.092,
            "h": 0.12,
            "seg": 8,
            "hex": 10851439,
            "vOff": -1.68,
            "rz": 1.5707963267948966
          },
          {
            "at": [
              1.68,
              2.8000000000000003,
              0
            ],
            "rt": 0.092,
            "rb": 0.092,
            "h": 0.12,
            "seg": 8,
            "hex": 10851439,
            "vOff": 1.68,
            "rz": 1.5707963267948966
          },
          {
            "at": [
              -1.68,
              2.29,
              0
            ],
            "rt": 0.086,
            "rb": 0.086,
            "h": 0.1,
            "seg": 8,
            "hex": 11575164,
            "vOff": -0.6799999999999999
          },
          {
            "at": [
              1.68,
              2.29,
              0
            ],
            "rt": 0.086,
            "rb": 0.086,
            "h": 0.1,
            "seg": 8,
            "hex": 11575164,
            "vOff": 2.6799999999999997
          }
        ]
      }
    ],
    "instanced": [
      {
        "id": "channels",
        "name": "Split bamboo channels, hollow up",
        "material": "split",
        "uv": "culm",
        "uvScale": 0.7,
        "cyls": [
          {
            "at": [
              0,
              2.673,
              1.025
            ],
            "rt": 0.085,
            "rb": 0.085,
            "h": 1.9566285697993628,
            "seg": 10,
            "open": true,
            "th0": -1.5707963267948966,
            "thLen": 3.141592653589793,
            "rx": 1.843805029881607,
            "hex": 16777215,
            "vOff": 0.07
          },
          {
            "at": [
              0,
              2.673,
              -1.025
            ],
            "rt": 0.085,
            "rb": 0.085,
            "h": 1.9566285697993628,
            "seg": 10,
            "open": true,
            "th0": 1.5707963267948966,
            "thLen": 3.141592653589793,
            "rx": -1.843805029881607,
            "hex": 16777215,
            "vOff": 0.07
          }
        ],
        "placements": [
          [
            -1.885,
            0,
            0
          ],
          [
            -1.649375,
            0,
            0
          ],
          [
            -1.41375,
            0,
            0
          ],
          [
            -1.178125,
            0,
            0
          ],
          [
            -0.9425,
            0,
            0
          ],
          [
            -0.7068749999999999,
            0,
            0
          ],
          [
            -0.47124999999999995,
            0,
            0
          ],
          [
            -0.23562499999999997,
            0,
            0
          ],
          [
            0,
            0,
            0
          ],
          [
            0.23562499999999997,
            0,
            0
          ],
          [
            0.47125000000000017,
            0,
            0
          ],
          [
            0.7068749999999999,
            0,
            0
          ],
          [
            0.9425000000000001,
            0,
            0
          ],
          [
            1.1781249999999999,
            0,
            0
          ],
          [
            1.41375,
            0,
            0
          ],
          [
            1.6493749999999998,
            0,
            0
          ],
          [
            1.885,
            0,
            0
          ]
        ],
        "colors": [
          9412714,
          11580314,
          9083504,
          10726022,
          10003832,
          12039070,
          8360548,
          13943706,
          9412714,
          11580314,
          9083504,
          10726022,
          10003832,
          12039070,
          8360548,
          13943706,
          9412714
        ]
      },
      {
        "id": "caps",
        "name": "Split bamboo caps, hollow down",
        "material": "split",
        "uv": "culm",
        "uvScale": 0.7,
        "cyls": [
          {
            "at": [
              0,
              2.5852999999999997,
              1.0525
            ],
            "rt": 0.12,
            "rb": 0.12,
            "h": 1.8487594358962824,
            "seg": 10,
            "open": true,
            "th0": 1.5707963267948966,
            "thLen": 3.141592653589793,
            "rx": 1.843805029881607,
            "hex": 16777215,
            "vOff": 0.31
          },
          {
            "at": [
              0,
              2.5852999999999997,
              -1.0525
            ],
            "rt": 0.12,
            "rb": 0.12,
            "h": 1.8487594358962824,
            "seg": 10,
            "open": true,
            "th0": -1.5707963267948966,
            "thLen": 3.141592653589793,
            "rx": -1.843805029881607,
            "hex": 16777215,
            "vOff": 0.31
          }
        ],
        "placements": [
          [
            -1.7671875,
            0,
            0
          ],
          [
            -1.5315625,
            0,
            0
          ],
          [
            -1.2959375,
            0,
            0
          ],
          [
            -1.0603125,
            0,
            0
          ],
          [
            -0.8246875,
            0,
            0
          ],
          [
            -0.5890625,
            0,
            0
          ],
          [
            -0.35343750000000007,
            0,
            0
          ],
          [
            -0.1178125000000001,
            0,
            0
          ],
          [
            0.1178125000000001,
            0,
            0
          ],
          [
            0.35343749999999985,
            0,
            0
          ],
          [
            0.5890625,
            0,
            0
          ],
          [
            0.8246874999999998,
            0,
            0
          ],
          [
            1.0603125,
            0,
            0
          ],
          [
            1.2959375000000002,
            0,
            0
          ],
          [
            1.5315625,
            0,
            0
          ],
          [
            1.7671875000000001,
            0,
            0
          ]
        ],
        "colors": [
          13615258,
          12432794,
          14733995,
          11907222,
          10791814,
          10397828,
          14469536,
          13220239,
          13615258,
          12432794,
          14733995,
          11907222,
          10791814,
          10397828,
          14469536,
          13220239
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
function lathe(pts, seg, yOffset = 0, sharp = true, weldSeam = false) {
  const v = (sharp ? splitCorners(pts) : pts).map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
  if (weldSeam) {
    const n = g.getAttribute("normal");
    const rows = n.count / (seg + 1);
    for (let r = 0; r < rows; r++) {
      const a = r, b = seg * rows + r;
      const x = n.getX(a) + n.getX(b), y = n.getY(a) + n.getY(b), z = n.getZ(a) + n.getZ(b);
      const l = Math.hypot(x, y, z) || 1;
      n.setXYZ(a, x / l, y / l, z / l);
      n.setXYZ(b, x / l, y / l, z / l);
    }
    n.needsUpdate = true;
  }
  return g;
}
function extrudeAlongZ(shape, z0, z1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  g.computeVertexNormals();
  return g;
}
function ribbedDome(profile, ribs, amp, seg, valley) {
  const tri = [];
  const col = [];
  const tint = (j) => {
    if (!valley) return [1, 1, 1];
    const f = Math.pow((1 - Math.cos(ribs * (j % seg * Math.PI * 2 / seg))) / 2, 0.55);
    return [1 + (valley[0] - 1) * f, 1 + (valley[1] - 1) * f, 1 + (valley[2] - 1) * f];
  };
  const push = (a, b, c) => tri.push(...a, ...b, ...c);
  const at = (i, j) => {
    const th = j % seg * Math.PI * 2 / seg;
    const f = 1 + amp * Math.cos(ribs * th);
    const r = profile[i][0] * f;
    return [Math.sin(th) * r, profile[i][1], Math.cos(th) * r];
  };
  for (let i = 0; i < profile.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = at(i, j), b = at(i, j + 1), c = at(i + 1, j + 1), d = at(i + 1, j);
      push(a, b, c);
      push(a, c, d);
      const ta = tint(j), tb = tint(j + 1);
      col.push(...ta, ...tb, ...tb, ...ta, ...tb, ...ta);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(tri), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(tri.length / 3 * 2), 2));
  if (valley) g.setAttribute("color", new THREE.BufferAttribute(new Float32Array(col), 3));
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
  const rAt = (i) => typeof r === "number" ? r : r[Math.min(i, r.length - 1)];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const d = b.clone().sub(a);
    const len = d.length();
    if (len < 1e-6) continue;
    const ra = rAt(i), rb = rAt(i + 1);
    const g = new THREE.CylinderGeometry(rb, ra, len + (ra + rb) * 0.6, seg, 1, false);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    g.applyQuaternion(q);
    const m = a.clone().add(b).multiplyScalar(0.5);
    g.translate(m.x, m.y, m.z);
    parts.push(g);
  }
  const out = mergeGeos(parts);
  return hex === void 0 ? out : tintGeo(out, hex);
}
function strap(pts, w, t, about, hex) {
  const parts = [];
  const c = new THREE.Vector3(about[0], about[1], about[2]);
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const dir = b.clone().sub(a);
    const len = dir.length();
    if (len < 1e-6) continue;
    dir.normalize();
    const mid = a.clone().add(b).multiplyScalar(0.5);
    let nrm = mid.clone().sub(c);
    nrm.sub(dir.clone().multiplyScalar(nrm.dot(dir)));
    if (nrm.lengthSq() < 1e-12) nrm = new THREE.Vector3(0, 0, 1).sub(dir.clone().multiplyScalar(dir.z));
    nrm.normalize();
    const side = new THREE.Vector3().crossVectors(dir, nrm).normalize();
    const g = new THREE.BoxGeometry(w, len + t, t);
    g.applyMatrix4(new THREE.Matrix4().makeBasis(side, dir, nrm));
    g.translate(mid.x, mid.y, mid.z);
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
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const tone = o.tone ?? [0.72, 0.66, 0.58], m = s * 0.06;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.clouds ?? 26); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.08 + rnd() * 0.18), a = 0.04 + rnd() * 0.1;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(tone)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(tone)},0)`);
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
      g2.addColorStop(0, `rgba(${rgb2(pc)},0.55)`);
      g2.addColorStop(0.6, `rgba(${rgb2(pc)},0.3)`);
      g2.addColorStop(1, `rgba(${rgb2(pc)},0)`);
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
      ctx.strokeStyle = light ? `rgba(255,250,240,${0.05 + rnd() * 0.1})` : `rgba(${rgb2(tone)},${0.06 + rnd() * 0.14})`;
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
  const ZS = Array.isArray(s.zs) ? s.zs : null;
  const Z = (j) => ZS ? ZS[j] : s.z0 + (s.z1 - s.z0) * j / nz;
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
  const paintGrid = (g, HG) => {
    const n = g.getAttribute("position").count, col = new Float32Array(n * 3), c = new THREE.Color();
    let k = 0;
    for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
      c.setHex(HG[j][i]);
      col[k++] = c.r;
      col[k++] = c.g;
      col[k++] = c.b;
    }
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return g;
  };
  const top0 = grid(0, false), und0 = grid(-t, true);
  const parts = s.hexGrid !== void 0 ? [paintGrid(top0, s.hexGrid), paint(und0, s.hexUnder ?? 16777215)] : s.hexUnder !== void 0 ? [paint(top0, s.hexTop ?? 16777215), paint(und0, s.hexUnder)] : [top0, und0];
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
  const rimHex = s.hexRim ?? s.hexUnder;
  parts.push(...rimHex !== void 0 ? edges.map((g) => paint(g, rimHex)) : edges);
  return mergeGeos(parts);
}
function paintTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1], rust = o.rust ?? base, chalk = o.chalk ?? base;
    const run = o.run ?? rust;
    const wrap = (draw) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    const blob = (c, x, y, r, a, ry = 1) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb2(c)},${a})`);
      g.addColorStop(0.55, `rgba(${rgb2(c)},${a * 0.45})`);
      g.addColorStop(1, `rgba(${rgb2(c)},0)`);
      ctx.fillStyle = g;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * ry, 0, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    ctx.fillStyle = `rgb(${rgb2(base)})`;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (o.drift ?? 14); i++) {
      const c = rnd() < 0.5 ? rust : chalk;
      blob(c, rnd() * s, rnd() * s, s * (0.18 + rnd() * 0.3) * (o.driftScale ?? 1), 0.05 + rnd() * 0.07, 0.6 + rnd() * 0.8);
    }
    for (let k = 0; k < (o.rustClusters ?? 16); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.04 + rnd() * 0.11) * (o.clusterScale ?? 1);
      blob(rust, cx, cy, cr, (o.rustAlpha ?? 0.3) + rnd() * (o.rustAlphaVar ?? 0.35), 0.7 + rnd() * 0.6);
      for (let i = 0; i < (o.specksPerCluster ?? 40); i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.8 + rnd() * 2.4;
        ctx.fillStyle = `rgba(${rgb2(rust)},${0.25 + rnd() * 0.5})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      if (rnd() < (o.runChance ?? 0.55)) {
        const w = 1 + rnd() * s * 0.01, len = s * (0.1 + rnd() * 0.35);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        g.addColorStop(0, `rgba(${rgb2(run)},${0.16 + rnd() * 0.18})`);
        g.addColorStop(1, `rgba(${rgb2(run)},0)`);
        ctx.fillStyle = g;
        wrap((dx) => ctx.fillRect(cx + dx + (rnd() - 0.5) * cr, cy, w, len));
      }
    }
    const cscale = o.chalkScale ?? 1, calpha = o.chalkAlpha ?? 0.35;
    for (let k = 0; k < (o.chalkPatches ?? 9); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.05 + rnd() * 0.1) * cscale;
      blob(chalk, cx, cy, cr, calpha + rnd() * 0.3, 0.5 + rnd() * 0.7);
      for (let i = 0; i < 26; i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr * 1.25;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.7, r = 1 + rnd() * 3;
        ctx.fillStyle = `rgba(${rgb2(chalk)},${0.2 + rnd() * 0.4})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
    for (let i = 0; i < (o.topStreaks ?? 0); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.014, len = s * (0.25 + rnd() * 0.55);
      const a = 0.1 + rnd() * 0.22;
      const g = ctx.createLinearGradient(0, 0, 0, len);
      g.addColorStop(0, `rgba(${rgb2(run)},${a})`);
      g.addColorStop(0.25, `rgba(${rgb2(rust)},${a * 0.8})`);
      g.addColorStop(1, `rgba(${rgb2(rust)},0)`);
      ctx.fillStyle = g;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, 0, w, len);
    }
    if (o.groundBand) {
      const b = o.groundBand, g = ctx.createLinearGradient(0, s, 0, s * (1 - (o.groundHeight ?? 0.22)));
      g.addColorStop(0, `rgba(${rgb2(run)},${b})`);
      g.addColorStop(0.45, `rgba(${rgb2(run)},${b * 0.4})`);
      g.addColorStop(1, `rgba(${rgb2(run)},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, s, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.grain ?? 1800); i++) {
      const x = rnd() * s, y = rnd() * s, r = 0.5 + rnd() * 1.3, a = 0.03 + rnd() * 0.07;
      ctx.fillStyle = `rgba(150,140,130,${a})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function sweepTube(pts, r, seg = 10, hex, cap = true) {
  const P = pts.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
  for (let i = P.length - 1; i > 0; i--) if (P[i].distanceTo(P[i - 1]) < 1e-7) P.splice(i, 1);
  if (P.length < 2) return new THREE.BufferGeometry();
  const n = P.length;
  const segDir = [];
  for (let i = 0; i < n - 1; i++) segDir.push(P[i + 1].clone().sub(P[i]).normalize());
  const T = P.map((_, i) => i === 0 ? segDir[0].clone() : i === n - 1 ? segDir[n - 2].clone() : segDir[i - 1].clone().add(segDir[i]).normalize());
  let N = Math.abs(T[0].y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  N.sub(T[0].clone().multiplyScalar(N.dot(T[0]))).normalize();
  const pos = [], idx = [];
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      const q = new THREE.Quaternion().setFromUnitVectors(T[i - 1], T[i]);
      N.applyQuaternion(q);
      N.sub(T[i].clone().multiplyScalar(N.dot(T[i]))).normalize();
    }
    const B = new THREE.Vector3().crossVectors(T[i], N).normalize();
    const k = i > 0 && i < n - 1 ? 1 / Math.max(0.5, segDir[i - 1].dot(T[i])) : 1;
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      const c = Math.cos(th), s = Math.sin(th);
      pos.push(P[i].x + (N.x * c + B.x * s * k) * r, P[i].y + (N.y * c + B.y * s * k) * r, P[i].z + (N.z * c + B.z * s * k) * r);
    }
  }
  for (let i = 0; i < n - 1; i++) for (let j = 0; j < seg; j++) {
    const a = i * seg + j, b = (i + 1) * seg + j, c2 = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
    idx.push(a, c2, b, a, d, c2);
  }
  if (cap) {
    for (const [ring, at, flip] of [[0, P[0], true], [n - 1, P[n - 1], false]]) {
      const base = pos.length / 3;
      for (let j = 0; j < seg; j++) {
        const k = (ring * seg + j) * 3;
        pos.push(pos[k], pos[k + 1], pos[k + 2]);
      }
      const ci = pos.length / 3;
      pos.push(at.x, at.y, at.z);
      for (let j = 0; j < seg; j++) {
        const a = base + j, b = base + (j + 1) % seg;
        if (flip) idx.push(ci, b, a);
        else idx.push(ci, a, b);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return hex === void 0 ? g : tintGeo(g, hex);
}
function frontAtlasUV(geo, a) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  const uv = new Float32Array(p.count * 2);
  const col = geo.getAttribute("color");
  const base = a.base !== void 0 ? new THREE.Color(a.base) : null;
  const minNz = a.minNz ?? 0.7;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i);
    const front = nrm.getZ(i) > minNz && x >= a.x0 && x <= a.x1 && y >= (a.yMin ?? a.y1) && y <= a.y0;
    if (front) {
      uv[i * 2] = (x - a.x0) / (a.x1 - a.x0);
      uv[i * 2 + 1] = (y - a.y1) / (a.y0 - a.y1);
      if (base && col) col.setXYZ(i, base.r, base.g, base.b);
    } else {
      uv[i * 2] = a.pin[0];
      uv[i * 2 + 1] = a.pin[1];
    }
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  if (col) col.needsUpdate = true;
  return geo;
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
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const wash = o.wash ?? [0.62, 0.62, 0.58], washA = o.washAlpha ?? 0.7, cov = o.coverage ?? 0.3;
    const base = o.base ?? [1, 1, 1];
    ctx.fillStyle = `rgb(${rgb2(base)})`;
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.streaks ?? 26); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.012, len = s * (0.15 + rnd() * 0.6), a = 0.05 + rnd() * 0.12;
      const g2 = ctx.createLinearGradient(0, 0, 0, len);
      g2.addColorStop(0, `rgba(${rgb2(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(wash)},0)`);
      ctx.fillStyle = g2;
      ctx.fillRect(x, 0, w, len);
      ctx.fillRect(x - s, 0, w, len);
    }
    if (o.washFlat) {
      ctx.fillStyle = `rgba(${rgb2(wash)},${washA})`;
      ctx.fillRect(0, 0, s, s);
    } else {
      const grad = ctx.createLinearGradient(0, s, 0, s * (1 - cov));
      grad.addColorStop(0, `rgba(${rgb2(wash)},${washA})`);
      grad.addColorStop(0.5, `rgba(${rgb2(wash)},${washA * 0.45})`);
      grad.addColorStop(1, `rgba(${rgb2(wash)},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, s, s);
    }
    for (let i = 0; i < (o.blotches ?? 40); i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 1.6) * s, r = 3 + rnd() * s * 0.06, a = 0.08 + rnd() * 0.3;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(wash)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.rubs) {
      const rub = o.rub ?? [0.3, 0.28, 0.3];
      for (let i = 0; i < o.rubs; i++) {
        const x = rnd() * s, y = s * (0.6 + rnd() * 0.38);
        const w = s * (0.05 + rnd() * 0.22), h = s * (6e-3 + rnd() * 0.03), a = 0.2 + rnd() * 0.45;
        const g2 = ctx.createLinearGradient(x - w / 2, 0, x + w / 2, 0);
        g2.addColorStop(0, `rgba(${rgb2(rub)},0)`);
        g2.addColorStop(0.5, `rgba(${rgb2(rub)},${a})`);
        g2.addColorStop(1, `rgba(${rgb2(rub)},0)`);
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) ctx.fillRect(x - w / 2 + dx, y - h / 2, w, h);
      }
    }
    if (o.scuffs) {
      ctx.globalCompositeOperation = "source-over";
      for (let i = 0; i < o.scuffs; i++) {
        const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * (o.scuffScale ?? 0.14));
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
        g2.addColorStop(0, `rgba(255,255,255,${o.scuffAlpha ?? 0.55})`);
        g2.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalCompositeOperation = "multiply";
    }
    for (let i = 0; i < (o.clouds ?? 0); i++) {
      const v = o.cloud ?? [0.86, 0.86, 0.84];
      const x = rnd() * s, y = rnd() * s, r = s * (o.cloudR ?? 0.16) * (0.4 + rnd() * 1.4), a = (o.cloudAlpha ?? 0.12) * (0.4 + rnd());
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.scuffs) {
      const v = o.scuff ?? [0.62, 0.62, 0.64], band = o.scuffBand ?? [0.3, 0.7];
      for (let i = 0; i < o.scuffs; i++) {
        const cx = rnd() * s, cy = s * (1 - (band[0] + rnd() * (band[1] - band[0])));
        const w = s * (0.05 + rnd() * 0.11), h = w * (0.05 + rnd() * 0.1);
        const a = (o.scuffAlpha ?? 0.34) * (0.5 + rnd());
        for (const dx of [-s, 0, s]) {
          ctx.save();
          ctx.translate(cx + dx, cy);
          ctx.rotate((rnd() - 0.5) * 0.45);
          ctx.scale(1, h / w);
          const g2 = ctx.createRadialGradient(0, 0, 0, 0, 0, w);
          g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
          g2.addColorStop(0.45, `rgba(${rgb2(v)},${a * 0.55})`);
          g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
          ctx.fillStyle = g2;
          ctx.beginPath();
          ctx.arc(0, 0, w, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }
    if (o.seams) {
      const v = o.seam ?? [0.72, 0.71, 0.68];
      for (let i = 0; i < o.seams; i++) {
        const x = Math.round(s * ((o.seamAt ?? 0.42) + i / o.seams)) % s;
        const wpx = Math.max(1, Math.round(s * 4e-3));
        ctx.fillStyle = `rgba(${rgb2(v)},${o.seamAlpha ?? 0.5})`;
        ctx.fillRect(x, 0, wpx, s);
        ctx.fillStyle = `rgba(${rgb2(v)},${(o.seamAlpha ?? 0.5) * 0.3})`;
        ctx.fillRect(x + wpx, 0, wpx, s);
      }
    }
    for (let i = 0; i < (o.pits ?? 0); i++) {
      const v = o.pit ?? [0.42, 0.4, 0.36];
      const x = rnd() * s, y = rnd() * s, r = (o.pitR ?? 1.6) * (0.5 + rnd() * 1.3);
      const a = 0.25 + rnd() * 0.5;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r * 2);
      g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      g2.addColorStop(0.4, `rgba(${rgb2(v)},${a * 0.45})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.moss) {
      const m = o.moss, band = o.mossBand ?? 0.22;
      const mg = ctx.createLinearGradient(0, s, 0, s * (1 - band * 1.3));
      mg.addColorStop(0, `rgba(${rgb2(m)},${o.mossWash ?? 0.35})`);
      mg.addColorStop(1, `rgba(${rgb2(m)},0)`);
      ctx.fillStyle = mg;
      ctx.fillRect(0, 0, s, s);
      for (let k = 0; k < (o.mossClusters ?? 14); k++) {
        const cx = rnd() * s, cy = s - Math.pow(rnd(), 1.6) * s * band, cr = s * (0.015 + rnd() * 0.04);
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
        cg.addColorStop(0, `rgba(${rgb2(m)},0.7)`);
        cg.addColorStop(0.6, `rgba(${rgb2(m)},0.35)`);
        cg.addColorStop(1, `rgba(${rgb2(m)},0)`);
        ctx.fillStyle = cg;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(cx + dx, cy, cr, cr * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 24; i++) {
          const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
          const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.6, r = 1 + rnd() * 3;
          ctx.fillStyle = `rgba(${rgb2(m)},${0.35 + rnd() * 0.5})`;
          for (const dx of [-s, 0, s]) {
            ctx.beginPath();
            ctx.arc(x + dx, y, r, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }
    for (let i = 0; i < (o.grain ?? 1500); i++) {
      const lo = o.grainLo ?? 200;
      const x = rnd() * s, y = rnd() * s, v = lo + Math.round(rnd() * (255 - lo));
      ctx.fillStyle = `rgba(${v},${v},${v},${o.grainAlpha ?? 0.12})`;
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
function stripeTile(size, bands, a, b, seed, o = {}) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    const w = s / bands;
    for (let i = 0; i < bands; i++) {
      ctx.fillStyle = rgb2(i % 2 ? b : a);
      ctx.fillRect(Math.floor(i * w), 0, Math.ceil(w) + 1, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.smudges ?? 40); i++) {
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
    for (let i = 0; i < (o.specks ?? 1200); i++) {
      const v = 200 + Math.round(rnd() * 55);
      ctx.fillStyle = `rgba(${v},${v},${v},0.10)`;
      ctx.fillRect(rnd() * s, rnd() * s, 1.5, 1.5);
    }
    if (o.broad) {
      const lo = o.broadLo ?? 0.8, hi = o.broadHi ?? 1;
      const g3 = ctx.createLinearGradient(0, 0, s, 0);
      for (let i = 0; i <= 64; i++) {
        const t = i / 64;
        const v = lo + (hi - lo) * (0.5 + 0.5 * Math.cos(2 * Math.PI * o.broad * t));
        const c = Math.round(255 * v);
        g3.addColorStop(t, `rgb(${c},${c},${c})`);
      }
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, s, s);
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
    const rgb2 = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    ctx.fillStyle = rgb2(o.ground ?? [0.45, 0.42, 0.38]);
    ctx.fillRect(0, 0, s, s);
    const pal = o.palette ?? [[0.85, 0.78, 0.66], [0.72, 0.62, 0.5], [0.6, 0.58, 0.55], [0.9, 0.86, 0.8]];
    const n = o.count ?? 900, rMin = s * (o.rMin ?? 0.012), rMax = s * (o.rMax ?? 0.028);
    for (let i = 0; i < n; i++) {
      const x = rnd() * s, y = rnd() * s, rx = rMin + rnd() * (rMax - rMin), ry = rx * (0.6 + rnd() * 0.5), a = rnd() * Math.PI;
      const c = pal[Math.floor(rnd() * pal.length)], k = 0.85 + rnd() * 0.3;
      if (o.shade) {
        ctx.fillStyle = rgb2((o.ground ?? [0.45, 0.42, 0.38]).map((v) => v * o.shade));
        for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(x + dx + rx * 0.16, y + dy + ry * 0.22, rx * 1.1, ry * 1.1, a, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.fillStyle = rgb2(c.map((v) => Math.min(1, v * k)));
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, rx, ry, a, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = `rgba(255,255,255,${o.gloss ?? 0.18})`;
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
    const base = o.base ?? [1, 1, 1];
    ctx.fillStyle = `rgb(${rgb(base)})`;
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
function zincTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const mid = o.mid ?? 0.88, lo = o.lo ?? 0.74;
    const g = (v) => {
      const b = Math.round(255 * v);
      return `rgb(${b},${b},${b})`;
    };
    ctx.fillStyle = g(mid);
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (o.clouds ?? 60); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.06 + rnd() * 0.16);
      const up = rnd() < 0.5;
      const v = up ? mid + (1 - mid) * (0.35 + rnd() * 0.5) : lo + (mid - lo) * rnd();
      const gr = ctx.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${o.cloudAlpha ?? 0.28})`);
      gr.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gr;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const cl = Array.from({ length: o.spangleClusters ?? 0 }, () => [rnd() * s, rnd() * s, s * (0.04 + rnd() * 0.1)]);
    for (let i = 0; i < (o.spangle ?? 520); i++) {
      let x = rnd() * s, y = rnd() * s;
      if (cl.length && rnd() > (o.spangleLoose ?? 0.25)) {
        const c = cl[rnd() * cl.length | 0], a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * c[2];
        x = c[0] + Math.cos(a) * d;
        y = c[1] + Math.sin(a) * d;
      }
      const r = s * ((o.spangleMin ?? 4e-3) + Math.pow(rnd(), 2) * (o.spangleMax ?? 0.013));
      const v = mid + (1 - mid) * (0.5 + rnd() * 0.5);
      const k = 4 + Math.floor(rnd() * 3);
      const a0 = rnd() * Math.PI * 2;
      ctx.fillStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${(o.spangleAlpha ?? 0.2) + rnd() * (o.spangleAlphaVar ?? 0.35)})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        for (let j = 0; j < k; j++) {
          const a = a0 + j * Math.PI * 2 / k, rr = r * (0.55 + rnd() * 0.75);
          const px = x + dx + Math.cos(a) * rr, py = y + dy + Math.sin(a) * rr * 0.8;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
      }
    }
    for (let i = 0; i < (o.streaks ?? 30); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.01, y0 = rnd() * s * 0.5, len = s * (0.2 + rnd() * 0.7);
      const v = lo + (mid - lo) * rnd() * 0.6, a = 0.06 + rnd() * 0.14;
      const gr = ctx.createLinearGradient(0, y0, 0, y0 + len);
      gr.addColorStop(0, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},0)`);
      gr.addColorStop(0.25, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${a})`);
      gr.addColorStop(1, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},0)`);
      ctx.fillStyle = gr;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0, w, len);
    }
    for (let i = 0; i < (o.grain ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, w = 1 + rnd() * 2, h = 1 + rnd() * 2;
      const up = rnd() < 0.5;
      const v = up ? mid + (1 - mid) * (0.4 + rnd() * 0.6) : lo + (mid - lo) * rnd();
      ctx.fillStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${0.1 + rnd() * 0.3})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) ctx.fillRect(x + dx, y + dy, w, h);
    }
    ctx.lineCap = "round";
    for (let i = 0; i < (o.scratches ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, len = s * (6e-3 + rnd() * 0.055), a = (rnd() - 0.5) * 0.7 + Math.PI / 2;
      const up = rnd() < 0.45;
      const v = up ? mid + (1 - mid) * (0.5 + rnd() * 0.5) : lo + (mid - lo) * rnd() * 0.8;
      ctx.strokeStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${0.1 + rnd() * 0.28})`;
      ctx.lineWidth = 0.7 + rnd() * 1.6;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.moveTo(x + dx, y + dy);
        ctx.lineTo(x + dx + Math.cos(a) * len, y + dy + Math.sin(a) * len);
        ctx.stroke();
      }
    }
    if (o.rust) {
      const c = o.rust, band = o.rustBand ?? 0.16;
      const rgbs = `${Math.round(255 * c[0])},${Math.round(255 * c[1])},${Math.round(255 * c[2])}`;
      for (const [edge, dir, b] of [[0, 1, o.rustBandTop ?? band], [s, -1, band]]) {
        const gr = ctx.createLinearGradient(0, edge, 0, edge + dir * s * b);
        gr.addColorStop(0, `rgba(${rgbs},${o.rustWash ?? 0.3})`);
        gr.addColorStop(1, `rgba(${rgbs},0)`);
        ctx.fillStyle = gr;
        ctx.fillRect(0, 0, s, s);
      }
      for (let i = 0; i < (o.rustRuns ?? 22); i++) {
        const x = rnd() * s, w = 1 + rnd() * s * 0.014;
        const top = rnd() < 0.5;
        const y0 = top ? 0 : s - s * band * (0.3 + rnd());
        const len = s * (0.1 + rnd() * 0.32);
        const gr = ctx.createLinearGradient(0, y0, 0, y0 + len);
        gr.addColorStop(0, `rgba(${rgbs},${0.18 + rnd() * 0.32})`);
        gr.addColorStop(1, `rgba(${rgbs},0)`);
        ctx.fillStyle = gr;
        for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0, w, len);
      }
    }
  });
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
function galvTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1], chalk = o.chalk ?? base, rust = o.rust ?? base, dark = o.dark ?? base;
    const wrap = (draw) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    const blob = (c, x, y, r, a, ry = 1, rot = 0) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb2(c)},${a})`);
      g.addColorStop(0.55, `rgba(${rgb2(c)},${a * 0.5})`);
      g.addColorStop(1, `rgba(${rgb2(c)},0)`);
      ctx.fillStyle = g;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * ry, rot, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    const fl = o.flutes ?? 0, flow = o.fluteLow ?? 0.88;
    if (fl > 0) {
      for (let x = 0; x < s; x++) {
        const t = (1 - Math.cos(x / s * Math.PI * 2 * fl)) / 2;
        const k = flow + (1 - flow) * t;
        ctx.fillStyle = `rgb(${rgb2(base.map((v) => v * k))})`;
        ctx.fillRect(x, 0, 1, s);
      }
    } else {
      ctx.fillStyle = `rgb(${rgb2(base)})`;
      ctx.fillRect(0, 0, s, s);
    }
    for (let i = 0; i < (o.drift ?? 16); i++)
      blob(dark, rnd() * s, rnd() * s, s * (0.16 + rnd() * 0.3) * (o.driftScale ?? 1), 0.1 + rnd() * 0.18, 0.5 + rnd() * 0.9, rnd() * Math.PI);
    for (let k = 0; k < (o.chalkPatches ?? 14); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.08 + rnd() * 0.18) * (o.chalkScale ?? 1);
      blob(chalk, cx, cy, cr, (o.chalkAlpha ?? 0.55) + rnd() * 0.3, 0.5 + rnd() * 0.9, rnd() * Math.PI);
      for (let i = 0; i < 40; i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr * 1.3;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.8 + rnd() * 2.4;
        ctx.fillStyle = `rgba(${rgb2(chalk)},${0.2 + rnd() * 0.45})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
    for (let k = 0; k < (o.rustClusters ?? 10); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.02 + rnd() * 0.055);
      blob(rust, cx, cy, cr, 0.25 + rnd() * 0.3, 0.7 + rnd() * 0.7, rnd() * Math.PI);
      for (let i = 0; i < (o.specksPerCluster ?? 26); i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.7 + rnd() * 1.8;
        ctx.fillStyle = `rgba(${rgb2(rust)},${0.25 + rnd() * 0.45})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      if (rnd() < 0.6) {
        const w = 1 + rnd() * s * 6e-3, len = s * (0.05 + rnd() * 0.16);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        g.addColorStop(0, `rgba(${rgb2(rust)},${0.14 + rnd() * 0.16})`);
        g.addColorStop(1, `rgba(${rgb2(rust)},0)`);
        ctx.fillStyle = g;
        wrap((dx) => ctx.fillRect(cx + dx + (rnd() - 0.5) * cr, cy, w, len));
      }
    }
    const rolls = o.rolls ?? 40;
    for (let i = 0; i < rolls; i++) {
      const x = (i + 0.35 + rnd() * 0.3) * s / rolls, up = rnd() < 0.45;
      const c = up ? chalk : dark, a = 0.06 + rnd() * 0.12;
      ctx.strokeStyle = `rgba(${rgb2(c)},${a})`;
      ctx.lineWidth = 0.7 + rnd() * 1.3;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.moveTo(x + dx, 0);
        ctx.lineTo(x + dx, s);
        ctx.stroke();
      }
    }
  });
}
function splitTile(size, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = "88,76,58", LIGHT = "255,255,255";
    ctx.fillStyle = "#f3f0e8";
    ctx.fillRect(0, 0, s, s);
    const ga = ctx.createLinearGradient(0, 0, s, 0);
    ga.addColorStop(0, "rgba(90,84,74,0.14)");
    ga.addColorStop(0.5, "rgba(255,255,255,0.08)");
    ga.addColorStop(1, "rgba(90,84,74,0.14)");
    ctx.fillStyle = ga;
    ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, 10, 0.1, 0.34);
    const node = s * (0.3 + rnd() * 0.4);
    for (const [y0, y1] of [[0, node], [node, s]]) grainLines(ctx, rnd, 0, s, y0, y1, 320, DARK, LIGHT, 0.24);
    for (let k = 0; k < 3; k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.3 + rnd() * 0.6);
      ctx.fillStyle = "rgba(40,34,26,0.55)";
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.6, len);
      ctx.fillStyle = "rgba(255,255,255,0.20)";
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.6, y + dy, 1.2, len);
    }
    {
      const y = node;
      const gs = ctx.createLinearGradient(0, y - s * 0.03, 0, y);
      gs.addColorStop(0, "rgba(60,50,40,0)");
      gs.addColorStop(1, "rgba(60,50,40,0.24)");
      ctx.fillStyle = gs;
      ctx.fillRect(0, y - s * 0.03, s, s * 0.03);
      ctx.fillStyle = "rgba(52,44,36,0.66)";
      ctx.fillRect(0, y, s, 3);
      ctx.fillStyle = "rgba(255,255,255,0.36)";
      ctx.fillRect(0, y + 3, s, 5);
      ctx.fillStyle = "rgba(60,50,40,0.30)";
      ctx.fillRect(0, y + 8, s, 2);
    }
    for (let k = 0; k < 4; k++) {
      const cx = rnd() * s, cy = rnd() * s, rx = s * (0.012 + rnd() * 0.03), ry = rx * (1.4 + rnd() * 1.6), rot = (rnd() - 0.5) * 0.6;
      for (const dy of [-s, 0, s]) {
        const halo = ctx.createRadialGradient(cx, cy + dy, 0, cx, cy + dy, Math.max(rx, ry) * 2.4);
        halo.addColorStop(0, "rgba(96,74,40,0.42)");
        halo.addColorStop(0.5, "rgba(96,74,40,0.20)");
        halo.addColorStop(1, "rgba(96,74,40,0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.ellipse(cx, cy + dy, rx * 2.6, ry * 2.4, rot, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(36,28,18,0.82)";
        ctx.beginPath();
        ctx.ellipse(cx, cy + dy, rx, ry, rot, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(14,10,6,0.9)";
        ctx.beginPath();
        ctx.ellipse(cx + rx * 0.2, cy + dy - ry * 0.1, rx * 0.5, ry * 0.55, rot, 0, Math.PI * 2);
        ctx.fill();
      }
      for (let i = 0; i < 6; i++) {
        const x = cx + (rnd() - 0.5) * s * 0.12, y = cy + (rnd() - 0.5) * s * 0.2, r = 1 + rnd() * 1.8;
        ctx.fillStyle = "rgba(30,24,16,0.85)";
        for (const dy of [-s, 0, s]) {
          ctx.beginPath();
          ctx.arc(x, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    mouldClusters(ctx, rnd, s, [[rnd() * s, node + s * 0.04], [rnd() * s, rnd() * s]], s * 0.08, s * 0.05, 60, 0.26);
  });
}
function ropeTile(size, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#f4efe4";
    ctx.fillRect(0, 0, s, s);
    const n = 10, pitch = s / n, ang = 0.32;
    const dx = Math.tan(ang) * s;
    ctx.save();
    for (let k = -3; k < n + 3; k++) {
      const x0 = k * pitch;
      for (const oy of [-s, 0, s]) {
        ctx.strokeStyle = "rgba(70,58,40,0.55)";
        ctx.lineWidth = pitch * 0.22;
        ctx.beginPath();
        ctx.moveTo(x0, oy);
        ctx.lineTo(x0 + dx, oy + s);
        ctx.stroke();
        ctx.strokeStyle = "rgba(255,255,255,0.30)";
        ctx.lineWidth = pitch * 0.3;
        ctx.beginPath();
        ctx.moveTo(x0 + pitch * 0.5, oy);
        ctx.lineTo(x0 + pitch * 0.5 + dx, oy + s);
        ctx.stroke();
        ctx.strokeStyle = "rgba(90,76,52,0.28)";
        ctx.lineWidth = 1.2;
        for (let t = 0; t < 12; t++) {
          const yy = oy + (t + rnd()) * s / 12, xx = x0 + pitch * 0.5 + dx * ((yy - oy) / s);
          ctx.beginPath();
          ctx.moveTo(xx - pitch * 0.35, yy - pitch * 0.18);
          ctx.lineTo(xx + pitch * 0.35, yy + pitch * 0.18);
          ctx.stroke();
        }
      }
    }
    ctx.restore();
    for (let i = 0; i < 500; i++) {
      const x = rnd() * s, y = rnd() * s;
      ctx.fillStyle = rnd() < 0.6 ? "rgba(70,58,40,0.18)" : "rgba(255,255,255,0.22)";
      ctx.fillRect(x, y, 1, 1 + rnd() * 2);
    }
    for (let i = 0; i < 3; i++) {
      const y = rnd() * s, h = s * (0.06 + rnd() * 0.1);
      const g2 = ctx.createLinearGradient(0, y, 0, y + h);
      g2.addColorStop(0, "rgba(60,48,32,0)");
      g2.addColorStop(0.5, "rgba(60,48,32,0.22)");
      g2.addColorStop(1, "rgba(60,48,32,0)");
      ctx.fillStyle = g2;
      for (const dy of [-s, 0]) ctx.fillRect(0, y + dy, s, h);
    }
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
function createBambooHalfPipeCanopyModuleModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Bamboo Half-Pipe Canopy Module";
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
    for (const t of c.sweeps ?? []) gs.push(sweepTube(t.pts, t.r, t.seg ?? 10, t.hex, t.cap !== false));
    for (const st of c.straps ?? []) gs.push(strap(st.pts, st.w, st.t, st.about, st.hex));
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
      const g2 = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false, l.weldSeam === true);
      if (l.cylUV) {
        const cu = Array.isArray(l.cylUV) ? l.cylUV : [l.cylUV, l.cylUV, 0];
        latheUV(g2, g2.getAttribute("position").count / ((l.seg ?? 12) + 1) | 0, l.seg ?? 12, cu[0], cu[1], cu[2] ?? 0);
      }
      if (l.scale) {
        g2.scale(l.scale[0], l.scale[1], l.scale[2]);
        g2.computeVertexNormals();
      }
      if (l.ry) g2.rotateY(l.ry);
      if (l.rx) g2.rotateX(l.rx);
      if (l.rz) g2.rotateZ(l.rz);
      g2.translate(l.at[0], l.at[1], l.at[2]);
      gs.push(tintGeo(g2, l.hex));
    }
    for (const d of c.domes ?? []) {
      const g2 = ribbedDome(d.pts, d.ribs, d.amp, d.seg ?? 24, d.valley);
      if (d.ry) g2.rotateY(d.ry);
      if (d.rx) g2.rotateX(d.rx);
      if (d.rz) g2.rotateZ(d.rz);
      if (d.at) g2.translate(d.at[0], d.at[1], d.at[2]);
      if (d.valley && d.hex !== void 0) {
        const col = g2.getAttribute("color");
        const t = new THREE.Color(d.hex);
        for (let i = 0; i < col.count; i++) col.setXYZ(i, col.getX(i) * t.r, col.getY(i) * t.g, col.getZ(i) * t.b);
        gs.push(g2);
      } else gs.push(d.valley ? g2 : tintGeo(g2, d.hex));
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
    for (const s of c.sheets ?? []) {
      const g2 = sheet(s);
      gs.push(s.hexUnder !== void 0 ? g2 : tintGeo(g2, s.hex));
    }
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
    if (c.uv === "front") g = frontAtlasUV(g, c.atlas);
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
      const g2 = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false, l.weldSeam === true);
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
    if (t.kind === "paint") tex = paintTile(t.size ?? 512, t.seed ?? 17, t);
    if (t.kind === "corrugation") tex = corrugationTile(t.size ?? 512, t.pitch ?? 12, t.low ?? 0.7, t.seed ?? 3);
    if (t.kind === "grime") tex = grimeTile(t.size ?? 512, t.seed ?? 11, t);
    if (t.kind === "zinc") tex = zincTile(t.size ?? 512, t.seed ?? 19, t);
    if (t.kind === "fur") tex = furTile(t.size ?? 512, t.seed ?? 13, t);
    if (t.kind === "chainlink") tex = chainlinkTile(t.size ?? 256, t.wire ?? 0.09, t.seed ?? 4);
    if (t.kind === "bamboo") tex = bambooTile(t.size ?? 512, t.strips ?? 10, t.seed ?? 6);
    if (t.kind === "stripes") tex = stripeTile(t.size ?? 256, t.bands ?? 8, t.a, t.b, t.seed ?? 9, t);
    if (t.kind === "poster") tex = posterTile(t.size ?? 512, t.seed ?? 8, t.lines ?? []);
    if (t.kind === "pebble") tex = pebbleTile(t.size ?? 512, t.seed ?? 21, t);
    if (t.kind === "tread") tex = treadTile(t.size ?? 256, t.seed ?? 23, t);
    if (t.kind === "tyre") tex = tyreTile(t.size ?? 256, t.seed ?? 29, t);
    if (t.kind === "culm") tex = culmTile(t.size ?? 512, t.seed ?? 31);
    if (t.kind === "sawn") tex = sawnTile(t.size ?? 512, t.seed ?? 43, t);
    if (t.kind === "thatch") tex = thatchTile(t.size ?? 512, t.seed ?? 37, t);
    if (t.kind === "tarp") tex = tarpTile(t.size ?? 512, t.seed ?? 41, t);
    if (t.kind === "galv") tex = galvTile(t.size ?? 512, t.seed ?? 47, t);
    if (t.kind === "split") tex = splitTile(t.size ?? 512, t.seed ?? 53);
    if (t.kind === "rope") tex = ropeTile(t.size ?? 512, t.seed ?? 59);
    bindTile(mat, tex, t.bump ?? 0);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createBambooHalfPipeCanopyModuleModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQmFtYm9vIEhhbGYtUGlwZSBDYW5vcHkgTW9kdWxlIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDQuMDAgeCAzLjEwIHggNC4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCByaWRnZSBhbG9uZyBYLlxuICogQnVkZ2V0IChsYXJnZSk6IDw9NDAwMCB0cmlhbmdsZXMsIDw9NCBkcmF3IGNhbGxzLCA8PTMgbWF0ZXJpYWxzLCA8PTYgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIFNUUkVFVCBBTkQgVkVORE9SIFBST1BTIC0tIGEgY29uZSwgYSBiYXJyaWVyLCBhIGNhcnQsIGEgc3Rvb2wuIFRoZVxuICogc2hhcmVkIHZvY2FidWxhcnkgaXMgdGhlIFRJTlRFRCBCT1ggYW5kIHRoZSBwb2x5bGluZSBUVUJFIG1lcmdlZCBpbnRvIG9uZSBnZW9tZXRyeSBwZXIgbWF0ZXJpYWwsXG4gKiB3aXRoIGV2ZXJ5IGNvbG91ciBkaWZmZXJlbmNlIGluc2lkZSBhIG1hdGVyaWFsIGNhcnJpZWQgYXMgYSB2ZXJ0ZXggY29sb3VyIG9uIGEgV0hJVEUgbWF0ZXJpYWwsXG4gKiBhbmQgc3VyZmFjZSBpZGVudGl0eSAoY29ycnVnYXRpb24sIGdyaW1lIHdhc2gsIG1vc3MsIHBsYW5rIGpvaW50cywgcnVzdCkgZGVsaXZlcmVkIGFzIE9ORVxuICogcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgcGVyIG1hdGVyaWFsIHJhdGhlciB0aGFuIGFzIGdlb21ldHJ5IG9yIGEgcHJvY2VkdXJhbCB0ZXh0dXJlIHNldC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcImJhbWJvby1oYWxmLXBpcGUtY2Fub3B5LW1vZHVsZVwiLFxuICAgIFwibmFtZVwiOiBcIkJhbWJvbyBIYWxmLVBpcGUgQ2Fub3B5IE1vZHVsZVwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIkJhbWJvb0hhbGZQaXBlQ2Fub3B5TW9kdWxlXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDQuMDAgeCAzLjEwIHggNC4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCByaWRnZSBhbG9uZyBYLlxcbiAqIEJ1ZGdldCAobGFyZ2UpOiA8PTQwMDAgdHJpYW5nbGVzLCA8PTQgZHJhdyBjYWxscywgPD0zIG1hdGVyaWFscywgPD02IHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImJhbWJvb1wiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjYyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwic3BsaXRcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC42LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcImRvdWJsZVNpZGVkXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJyb3BlXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwidGlsZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiYmFtYm9vXCIsXG4gICAgICAgIFwia2luZFwiOiBcImN1bG1cIixcbiAgICAgICAgXCJzaXplXCI6IDUxMixcbiAgICAgICAgXCJzZWVkXCI6IDYyMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcInNwbGl0XCIsXG4gICAgICAgIFwia2luZFwiOiBcInNwbGl0XCIsXG4gICAgICAgIFwic2l6ZVwiOiA1MTIsXG4gICAgICAgIFwic2VlZFwiOiA2MjJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJyb3BlXCIsXG4gICAgICAgIFwia2luZFwiOiBcInJvcGVcIixcbiAgICAgICAgXCJzaXplXCI6IDI1NixcbiAgICAgICAgXCJzZWVkXCI6IDYyM1xuICAgICAgfVxuICAgIF0sXG4gICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICBcImNvbXBvbmVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcImZyYW1lXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQmFtYm9vIHBvbGUgZnJhbWUsIHJhZnRlcnMgYW5kIHJpZGdlXCIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcImJhbWJvb1wiLFxuICAgICAgICAgIFwidXZcIjogXCJjdWxtXCIsXG4gICAgICAgICAgXCJ1dlNjYWxlXCI6IDAuNixcbiAgICAgICAgICBcImN5bHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS42OCxcbiAgICAgICAgICAgICAgICAxLjE4NSxcbiAgICAgICAgICAgICAgICAtMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDgsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wOCxcbiAgICAgICAgICAgICAgXCJoXCI6IDIuMzcsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcImhleFwiOiA5OTMzNDM5LFxuICAgICAgICAgICAgICBcInZPZmZcIjogLTIuMzUyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS42OCxcbiAgICAgICAgICAgICAgICAxLjE4NSxcbiAgICAgICAgICAgICAgICAxLjY4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wOCxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA4LFxuICAgICAgICAgICAgICBcImhcIjogMi4zNyxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEwNzIyOTYwLFxuICAgICAgICAgICAgICBcInZPZmZcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS42OCxcbiAgICAgICAgICAgICAgICAxLjE4NSxcbiAgICAgICAgICAgICAgICAtMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDgsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wOCxcbiAgICAgICAgICAgICAgXCJoXCI6IDIuMzcsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcImhleFwiOiA5OTMzNDM5LFxuICAgICAgICAgICAgICBcInZPZmZcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS42OCxcbiAgICAgICAgICAgICAgICAxLjE4NSxcbiAgICAgICAgICAgICAgICAxLjY4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wOCxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA4LFxuICAgICAgICAgICAgICBcImhcIjogMi4zNyxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEwNzIyOTYwLFxuICAgICAgICAgICAgICBcInZPZmZcIjogMi4zNTJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMi4yNyxcbiAgICAgICAgICAgICAgICAtMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDgsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wOCxcbiAgICAgICAgICAgICAgXCJoXCI6IDMuOSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwicnpcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMDcyMjk2MCxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IDIuMjdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMi4yNyxcbiAgICAgICAgICAgICAgICAxLjY4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wOCxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA4LFxuICAgICAgICAgICAgICBcImhcIjogMy45LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDk5MzM0MzksXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAyLjY3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS42OCxcbiAgICAgICAgICAgICAgICAyLjExLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA4LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDgsXG4gICAgICAgICAgICAgIFwiaFwiOiAzLjksXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgICAgXCJoZXhcIjogOTkzMzQzOSxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IDMuMDcwMDAwMDAwMDAwMDAwM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS42OCxcbiAgICAgICAgICAgICAgICAyLjExLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA4LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDgsXG4gICAgICAgICAgICAgIFwiaFwiOiAzLjksXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTA3MjI5NjAsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAzLjQ2OTk5OTk5OTk5OTk5OThcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMi4wMyxcbiAgICAgICAgICAgICAgICAtMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDgsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wOCxcbiAgICAgICAgICAgICAgXCJoXCI6IDMuOSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwicnpcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMDcyMjk2MCxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IDIuMDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMi4wMyxcbiAgICAgICAgICAgICAgICAxLjY4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wOCxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA4LFxuICAgICAgICAgICAgICBcImhcIjogMy45LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDk5MzM0MzksXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAyLjQyOTk5OTk5OTk5OTk5OTdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0xLjY4LFxuICAgICAgICAgICAgICAgIDEuODY5OTk5OTk5OTk5OTk5OSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wOCxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA4LFxuICAgICAgICAgICAgICBcImhcIjogMy45LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJyeFwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDk5MzM0MzksXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAyLjgzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAxLjY4LFxuICAgICAgICAgICAgICAgIDEuODY5OTk5OTk5OTk5OTk5OSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wOCxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA4LFxuICAgICAgICAgICAgICBcImhcIjogMy45LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJyeFwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEwNzIyOTYwLFxuICAgICAgICAgICAgICBcInZPZmZcIjogMy4yMjk5OTk5OTk5OTk5OTk1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS42OCxcbiAgICAgICAgICAgICAgICAyLjUzNSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNjQsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNjQsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjUzMDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDk5MzM0MzksXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAtMS42OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS42OCxcbiAgICAgICAgICAgICAgICAyLjUzNSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNjQsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNjQsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjUzMDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDk5MzM0MzksXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAxLjY4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDIuODAwMDAwMDAwMDAwMDAwMyxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNyxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA3LFxuICAgICAgICAgICAgICBcImhcIjogMy45LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEwNzIyOTYwLFxuICAgICAgICAgICAgICBcInZPZmZcIjogMC4yXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS44NixcbiAgICAgICAgICAgICAgICAyLjU0MjIwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAgICAgLTEuMDFcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJoXCI6IDEuODIzMjU5NTA5OTcwMzk2NSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJyeFwiOiAtMS44NDM4MDUwMjk4ODE2MDcsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEwMzI4MjAwLFxuICAgICAgICAgICAgICBcInZPZmZcIjogLTIuODYwMDAwMDAwMDAwMDAwM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTEuODYsXG4gICAgICAgICAgICAgICAgMi41NDIyMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgICAgIDEuMDFcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJoXCI6IDEuODIzMjU5NTA5OTcwMzk2NSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJyeFwiOiAxLjg0MzgwNTAyOTg4MTYwNyxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTAzMjgyMDAsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAtMC44NjAwMDAwMDAwMDAwMDAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMC45MyxcbiAgICAgICAgICAgICAgICAyLjU0MjIwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAgICAgLTEuMDFcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJoXCI6IDEuODIzMjU5NTA5OTcwMzk2NSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJyeFwiOiAtMS44NDM4MDUwMjk4ODE2MDcsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEwMzI4MjAwLFxuICAgICAgICAgICAgICBcInZPZmZcIjogLTEuOTMwMDAwMDAwMDAwMDAwMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTAuOTMsXG4gICAgICAgICAgICAgICAgMi41NDIyMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgICAgIDEuMDFcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJoXCI6IDEuODIzMjU5NTA5OTcwMzk2NSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJyeFwiOiAxLjg0MzgwNTAyOTg4MTYwNyxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTAzMjgyMDAsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAwLjA2OTk5OTk5OTk5OTk5OTk1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDIuNTQyMjAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgICAgICAtMS4wMVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDQ1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDQ1LFxuICAgICAgICAgICAgICBcImhcIjogMS44MjMyNTk1MDk5NzAzOTY1LFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcInJ4XCI6IC0xLjg0MzgwNTAyOTg4MTYwNyxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTAzMjgyMDAsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAtMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAyLjU0MjIwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAgICAgMS4wMVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDQ1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDQ1LFxuICAgICAgICAgICAgICBcImhcIjogMS44MjMyNTk1MDk5NzAzOTY1LFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuODQzODA1MDI5ODgxNjA3LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMDMyODIwMCxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAuOTMsXG4gICAgICAgICAgICAgICAgMi41NDIyMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgICAgIC0xLjAxXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwiaFwiOiAxLjgyMzI1OTUwOTk3MDM5NjUsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwicnhcIjogLTEuODQzODA1MDI5ODgxNjA3LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMDMyODIwMCxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IC0wLjA2OTk5OTk5OTk5OTk5OTk1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLjkzLFxuICAgICAgICAgICAgICAgIDIuNTQyMjAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgICAgICAxLjAxXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwiaFwiOiAxLjgyMzI1OTUwOTk3MDM5NjUsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwicnhcIjogMS44NDM4MDUwMjk4ODE2MDcsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEwMzI4MjAwLFxuICAgICAgICAgICAgICBcInZPZmZcIjogMS45MzAwMDAwMDAwMDAwMDAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAxLjg2LFxuICAgICAgICAgICAgICAgIDIuNTQyMjAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgICAgICAtMS4wMVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDQ1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDQ1LFxuICAgICAgICAgICAgICBcImhcIjogMS44MjMyNTk1MDk5NzAzOTY1LFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcInJ4XCI6IC0xLjg0MzgwNTAyOTg4MTYwNyxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTAzMjgyMDAsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAwLjg2MDAwMDAwMDAwMDAwMDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDEuODYsXG4gICAgICAgICAgICAgICAgMi41NDIyMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgICAgIDEuMDFcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJoXCI6IDEuODIzMjU5NTA5OTcwMzk2NSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJyeFwiOiAxLjg0MzgwNTAyOTg4MTYwNyxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTAzMjgyMDAsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAyLjg2MDAwMDAwMDAwMDAwMDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMi45OTUzODM3ODMyMDc1MzM0LFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjExLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMTEsXG4gICAgICAgICAgICAgIFwiaFwiOiAzLjksXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcInJ6XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTA3MjI5NjAsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAwLjZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwibGFzaGluZ3NcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJSb3BlIGFuZCBjb3JkIGxhc2hpbmdzXCIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcInJvcGVcIixcbiAgICAgICAgICBcInV2XCI6IFwiY3VsbVwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAwLjEyLFxuICAgICAgICAgIFwiY3lsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0xLjY4LFxuICAgICAgICAgICAgICAgIDIuMDcsXG4gICAgICAgICAgICAgICAgLTEuNjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjEwNDAwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMTA0MDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjQ2LFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMDg1MTQzOSxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IC0zLjM2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS42OCxcbiAgICAgICAgICAgICAgICAxLjU2OTk5OTk5OTk5OTk5OTgsXG4gICAgICAgICAgICAgICAgLTEuNjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA5MixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA5MixcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDY3MDYyMzQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAtMS42OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTEuNjgsXG4gICAgICAgICAgICAgICAgMi4wNyxcbiAgICAgICAgICAgICAgICAxLjY4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4xMDQwMDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjEwNDAwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICBcImhcIjogMC40NixcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE1NzUxNjQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS42OCxcbiAgICAgICAgICAgICAgICAxLjU2OTk5OTk5OTk5OTk5OTgsXG4gICAgICAgICAgICAgICAgMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDkyLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDkyLFxuICAgICAgICAgICAgICBcImhcIjogMC4wNixcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogNjcwNjIzNCxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IDEuNjhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDEuNjgsXG4gICAgICAgICAgICAgICAgMi4wNyxcbiAgICAgICAgICAgICAgICAtMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMTA0MDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4xMDQwMDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuNDYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEwODUxNDM5LFxuICAgICAgICAgICAgICBcInZPZmZcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS42OCxcbiAgICAgICAgICAgICAgICAxLjU2OTk5OTk5OTk5OTk5OTgsXG4gICAgICAgICAgICAgICAgLTEuNjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA5MixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA5MixcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDY3MDYyMzQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAtMS42OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS42OCxcbiAgICAgICAgICAgICAgICAyLjA3LFxuICAgICAgICAgICAgICAgIDEuNjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjEwNDAwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMTA0MDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjQ2LFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMTU3NTE2NCxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IDMuMzZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDEuNjgsXG4gICAgICAgICAgICAgICAgMS41Njk5OTk5OTk5OTk5OTk4LFxuICAgICAgICAgICAgICAgIDEuNjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA5MixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA5MixcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDY3MDYyMzQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAxLjY4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS44Mjk5OTk5OTk5OTk5OTk4LFxuICAgICAgICAgICAgICAgIDIuMjcsXG4gICAgICAgICAgICAgICAgLTEuNjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjEsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4xLFxuICAgICAgICAgICAgICBcImhcIjogMC4xMyxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE1NzUxNjQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAxLjI3LFxuICAgICAgICAgICAgICBcInJ6XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTEuODI5OTk5OTk5OTk5OTk5OCxcbiAgICAgICAgICAgICAgICAyLjI3LFxuICAgICAgICAgICAgICAgIDEuNjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjEsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4xLFxuICAgICAgICAgICAgICBcImhcIjogMC4xMyxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTA4NTE0MzksXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAzLjI3LFxuICAgICAgICAgICAgICBcInJ6XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTEuNjgsXG4gICAgICAgICAgICAgICAgMi4xMSxcbiAgICAgICAgICAgICAgICAtMS44Mjk5OTk5OTk5OTk5OTk4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4xLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMTMsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEwODUxNDM5LFxuICAgICAgICAgICAgICBcInZPZmZcIjogMC4yNyxcbiAgICAgICAgICAgICAgXCJyeFwiOiAxLjU3MDc5NjMyNjc5NDg5NjZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDEuNjgsXG4gICAgICAgICAgICAgICAgMi4xMSxcbiAgICAgICAgICAgICAgICAtMS44Mjk5OTk5OTk5OTk5OTk4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4xLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMTMsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExNTc1MTY0LFxuICAgICAgICAgICAgICBcInZPZmZcIjogNC4yNyxcbiAgICAgICAgICAgICAgXCJyeFwiOiAxLjU3MDc5NjMyNjc5NDg5NjZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDEuODI5OTk5OTk5OTk5OTk5OCxcbiAgICAgICAgICAgICAgICAyLjI3LFxuICAgICAgICAgICAgICAgIC0xLjY4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4xLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMTMsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExNTc1MTY0LFxuICAgICAgICAgICAgICBcInZPZmZcIjogMy4yNyxcbiAgICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDEuODI5OTk5OTk5OTk5OTk5OCxcbiAgICAgICAgICAgICAgICAyLjI3LFxuICAgICAgICAgICAgICAgIDEuNjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjEsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4xLFxuICAgICAgICAgICAgICBcImhcIjogMC4xMyxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTA4NTE0MzksXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAxLjI3LFxuICAgICAgICAgICAgICBcInJ6XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTEuNjgsXG4gICAgICAgICAgICAgICAgMi4xMSxcbiAgICAgICAgICAgICAgICAxLjgyOTk5OTk5OTk5OTk5OThcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjEsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4xLFxuICAgICAgICAgICAgICBcImhcIjogMC4xMyxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTA4NTE0MzksXG4gICAgICAgICAgICAgIFwidk9mZlwiOiA0LjI3LFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS42OCxcbiAgICAgICAgICAgICAgICAyLjExLFxuICAgICAgICAgICAgICAgIDEuODI5OTk5OTk5OTk5OTk5OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjEsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjEzLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMTU3NTE2NCxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IDAuMjcsXG4gICAgICAgICAgICAgIFwicnhcIjogMS41NzA3OTYzMjY3OTQ4OTY2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS44Mjk5OTk5OTk5OTk5OTk4LFxuICAgICAgICAgICAgICAgIDIuMDMsXG4gICAgICAgICAgICAgICAgLTEuNjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjEsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4xLFxuICAgICAgICAgICAgICBcImhcIjogMC4xMyxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE1NzUxNjQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAxLjAyOTk5OTk5OTk5OTk5OTgsXG4gICAgICAgICAgICAgIFwicnpcIjogMS41NzA3OTYzMjY3OTQ4OTY2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS44Mjk5OTk5OTk5OTk5OTk4LFxuICAgICAgICAgICAgICAgIDIuMDMsXG4gICAgICAgICAgICAgICAgMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjEsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjEzLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMDg1MTQzOSxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IDMuMDMsXG4gICAgICAgICAgICAgIFwicnpcIjogMS41NzA3OTYzMjY3OTQ4OTY2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS42OCxcbiAgICAgICAgICAgICAgICAxLjg2OTk5OTk5OTk5OTk5OTksXG4gICAgICAgICAgICAgICAgLTEuODI5OTk5OTk5OTk5OTk5OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjEsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjEzLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMDg1MTQzOSxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IDAuMDI5OTk5OTk5OTk5OTk5ODA1LFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS42OCxcbiAgICAgICAgICAgICAgICAxLjg2OTk5OTk5OTk5OTk5OTksXG4gICAgICAgICAgICAgICAgLTEuODI5OTk5OTk5OTk5OTk5OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjEsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjEzLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMTU3NTE2NCxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IDQuMDI5OTk5OTk5OTk5OTk5LFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS44Mjk5OTk5OTk5OTk5OTk4LFxuICAgICAgICAgICAgICAgIDIuMDMsXG4gICAgICAgICAgICAgICAgLTEuNjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjEsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4xLFxuICAgICAgICAgICAgICBcImhcIjogMC4xMyxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE1NzUxNjQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAzLjAzLFxuICAgICAgICAgICAgICBcInJ6XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS44Mjk5OTk5OTk5OTk5OTk4LFxuICAgICAgICAgICAgICAgIDIuMDMsXG4gICAgICAgICAgICAgICAgMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjEsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjEzLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMDg1MTQzOSxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IDEuMDI5OTk5OTk5OTk5OTk5OCxcbiAgICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0xLjY4LFxuICAgICAgICAgICAgICAgIDEuODY5OTk5OTk5OTk5OTk5OSxcbiAgICAgICAgICAgICAgICAxLjgyOTk5OTk5OTk5OTk5OThcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjEsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4xLFxuICAgICAgICAgICAgICBcImhcIjogMC4xMyxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTA4NTE0MzksXG4gICAgICAgICAgICAgIFwidk9mZlwiOiA0LjAyOTk5OTk5OTk5OTk5OSxcbiAgICAgICAgICAgICAgXCJyeFwiOiAxLjU3MDc5NjMyNjc5NDg5NjZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDEuNjgsXG4gICAgICAgICAgICAgICAgMS44Njk5OTk5OTk5OTk5OTk5LFxuICAgICAgICAgICAgICAgIDEuODI5OTk5OTk5OTk5OTk5OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjEsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjEzLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMTU3NTE2NCxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IDAuMDI5OTk5OTk5OTk5OTk5ODA1LFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTEuODYsXG4gICAgICAgICAgICAgICAgMi4zNTQ2LFxuICAgICAgICAgICAgICAgIC0xLjY4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNjUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNjUsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjExLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMTU3NTE2NCxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IC0xLjg2LFxuICAgICAgICAgICAgICBcInJ4XCI6IC0xLjg0MzgwNTAyOTg4MTYwN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTEuODYsXG4gICAgICAgICAgICAgICAgMi4zNTQ2LFxuICAgICAgICAgICAgICAgIDEuNjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA2NSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA2NSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMTEsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExNTc1MTY0LFxuICAgICAgICAgICAgICBcInZPZmZcIjogLTEuODYsXG4gICAgICAgICAgICAgIFwicnhcIjogMS44NDM4MDUwMjk4ODE2MDdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0wLjkzLFxuICAgICAgICAgICAgICAgIDIuMzU0NixcbiAgICAgICAgICAgICAgICAtMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcImhcIjogMC4xMSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE1NzUxNjQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAtMC45MyxcbiAgICAgICAgICAgICAgXCJyeFwiOiAtMS44NDM4MDUwMjk4ODE2MDdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0wLjkzLFxuICAgICAgICAgICAgICAgIDIuMzU0NixcbiAgICAgICAgICAgICAgICAxLjY4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNjUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNjUsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjExLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMTU3NTE2NCxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IC0wLjkzLFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuODQzODA1MDI5ODgxNjA3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDIuMzU0NixcbiAgICAgICAgICAgICAgICAtMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcImhcIjogMC4xMSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE1NzUxNjQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAwLFxuICAgICAgICAgICAgICBcInJ4XCI6IC0xLjg0MzgwNTAyOTg4MTYwN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAyLjM1NDYsXG4gICAgICAgICAgICAgICAgMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcImhcIjogMC4xMSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE1NzUxNjQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAwLFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuODQzODA1MDI5ODgxNjA3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLjkzLFxuICAgICAgICAgICAgICAgIDIuMzU0NixcbiAgICAgICAgICAgICAgICAtMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcImhcIjogMC4xMSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE1NzUxNjQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAwLjkzLFxuICAgICAgICAgICAgICBcInJ4XCI6IC0xLjg0MzgwNTAyOTg4MTYwN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMC45MyxcbiAgICAgICAgICAgICAgICAyLjM1NDYsXG4gICAgICAgICAgICAgICAgMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcImhcIjogMC4xMSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE1NzUxNjQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAwLjkzLFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuODQzODA1MDI5ODgxNjA3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAxLjg2LFxuICAgICAgICAgICAgICAgIDIuMzU0NixcbiAgICAgICAgICAgICAgICAtMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcImhcIjogMC4xMSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE1NzUxNjQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAxLjg2LFxuICAgICAgICAgICAgICBcInJ4XCI6IC0xLjg0MzgwNTAyOTg4MTYwN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS44NixcbiAgICAgICAgICAgICAgICAyLjM1NDYsXG4gICAgICAgICAgICAgICAgMS42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDY1LFxuICAgICAgICAgICAgICBcImhcIjogMC4xMSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE1NzUxNjQsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAxLjg2LFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuODQzODA1MDI5ODgxNjA3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS42OCxcbiAgICAgICAgICAgICAgICAyLjgwMDAwMDAwMDAwMDAwMDMsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDkyLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDkyLFxuICAgICAgICAgICAgICBcImhcIjogMC4xMixcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTA4NTE0MzksXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAtMS42OCxcbiAgICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDEuNjgsXG4gICAgICAgICAgICAgICAgMi44MDAwMDAwMDAwMDAwMDAzLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA5MixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA5MixcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMTIsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEwODUxNDM5LFxuICAgICAgICAgICAgICBcInZPZmZcIjogMS42OCxcbiAgICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0xLjY4LFxuICAgICAgICAgICAgICAgIDIuMjksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDg2LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDg2LFxuICAgICAgICAgICAgICBcImhcIjogMC4xLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMTU3NTE2NCxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IC0wLjY3OTk5OTk5OTk5OTk5OTlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDEuNjgsXG4gICAgICAgICAgICAgICAgMi4yOSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wODYsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wODYsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjEsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExNTc1MTY0LFxuICAgICAgICAgICAgICBcInZPZmZcIjogMi42Nzk5OTk5OTk5OTk5OTk3XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0YW5jZWRcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcImNoYW5uZWxzXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiU3BsaXQgYmFtYm9vIGNoYW5uZWxzLCBob2xsb3cgdXBcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwic3BsaXRcIixcbiAgICAgICAgICBcInV2XCI6IFwiY3VsbVwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAwLjcsXG4gICAgICAgICAgXCJjeWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAyLjY3MyxcbiAgICAgICAgICAgICAgICAxLjAyNVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDg1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDg1LFxuICAgICAgICAgICAgICBcImhcIjogMS45NTY2Mjg1Njk3OTkzNjI4LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJvcGVuXCI6IHRydWUsXG4gICAgICAgICAgICAgIFwidGgwXCI6IC0xLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICAgIFwidGhMZW5cIjogMy4xNDE1OTI2NTM1ODk3OTMsXG4gICAgICAgICAgICAgIFwicnhcIjogMS44NDM4MDUwMjk4ODE2MDcsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE2Nzc3MjE1LFxuICAgICAgICAgICAgICBcInZPZmZcIjogMC4wN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAyLjY3MyxcbiAgICAgICAgICAgICAgICAtMS4wMjVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA4NSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA4NSxcbiAgICAgICAgICAgICAgXCJoXCI6IDEuOTU2NjI4NTY5Nzk5MzYyOCxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwib3BlblwiOiB0cnVlLFxuICAgICAgICAgICAgICBcInRoMFwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICAgIFwidGhMZW5cIjogMy4xNDE1OTI2NTM1ODk3OTMsXG4gICAgICAgICAgICAgIFwicnhcIjogLTEuODQzODA1MDI5ODgxNjA3LFxuICAgICAgICAgICAgICBcImhleFwiOiAxNjc3NzIxNSxcbiAgICAgICAgICAgICAgXCJ2T2ZmXCI6IDAuMDdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwicGxhY2VtZW50c1wiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0xLjg4NSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuNjQ5Mzc1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMS40MTM3NSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuMTc4MTI1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC45NDI1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC43MDY4NzQ5OTk5OTk5OTk5LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC40NzEyNDk5OTk5OTk5OTk5NSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMjM1NjI0OTk5OTk5OTk5OTcsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuMjM1NjI0OTk5OTk5OTk5OTcsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuNDcxMjUwMDAwMDAwMDAwMTcsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuNzA2ODc0OTk5OTk5OTk5OSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC45NDI1MDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxLjE3ODEyNDk5OTk5OTk5OTksXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEuNDEzNzUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEuNjQ5Mzc0OTk5OTk5OTk5OCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMS44ODUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29sb3JzXCI6IFtcbiAgICAgICAgICAgIDk0MTI3MTQsXG4gICAgICAgICAgICAxMTU4MDMxNCxcbiAgICAgICAgICAgIDkwODM1MDQsXG4gICAgICAgICAgICAxMDcyNjAyMixcbiAgICAgICAgICAgIDEwMDAzODMyLFxuICAgICAgICAgICAgMTIwMzkwNzAsXG4gICAgICAgICAgICA4MzYwNTQ4LFxuICAgICAgICAgICAgMTM5NDM3MDYsXG4gICAgICAgICAgICA5NDEyNzE0LFxuICAgICAgICAgICAgMTE1ODAzMTQsXG4gICAgICAgICAgICA5MDgzNTA0LFxuICAgICAgICAgICAgMTA3MjYwMjIsXG4gICAgICAgICAgICAxMDAwMzgzMixcbiAgICAgICAgICAgIDEyMDM5MDcwLFxuICAgICAgICAgICAgODM2MDU0OCxcbiAgICAgICAgICAgIDEzOTQzNzA2LFxuICAgICAgICAgICAgOTQxMjcxNFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJjYXBzXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiU3BsaXQgYmFtYm9vIGNhcHMsIGhvbGxvdyBkb3duXCIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcInNwbGl0XCIsXG4gICAgICAgICAgXCJ1dlwiOiBcImN1bG1cIixcbiAgICAgICAgICBcInV2U2NhbGVcIjogMC43LFxuICAgICAgICAgIFwiY3lsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMi41ODUyOTk5OTk5OTk5OTk3LFxuICAgICAgICAgICAgICAgIDEuMDUyNVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMTIsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4xMixcbiAgICAgICAgICAgICAgXCJoXCI6IDEuODQ4NzU5NDM1ODk2MjgyNCxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwib3BlblwiOiB0cnVlLFxuICAgICAgICAgICAgICBcInRoMFwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICAgIFwidGhMZW5cIjogMy4xNDE1OTI2NTM1ODk3OTMsXG4gICAgICAgICAgICAgIFwicnhcIjogMS44NDM4MDUwMjk4ODE2MDcsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE2Nzc3MjE1LFxuICAgICAgICAgICAgICBcInZPZmZcIjogMC4zMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAyLjU4NTI5OTk5OTk5OTk5OTcsXG4gICAgICAgICAgICAgICAgLTEuMDUyNVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMTIsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4xMixcbiAgICAgICAgICAgICAgXCJoXCI6IDEuODQ4NzU5NDM1ODk2MjgyNCxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwib3BlblwiOiB0cnVlLFxuICAgICAgICAgICAgICBcInRoMFwiOiAtMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcInRoTGVuXCI6IDMuMTQxNTkyNjUzNTg5NzkzLFxuICAgICAgICAgICAgICBcInJ4XCI6IC0xLjg0MzgwNTAyOTg4MTYwNyxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTY3NzcyMTUsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAwLjMxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInBsYWNlbWVudHNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMS43NjcxODc1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMS41MzE1NjI1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMS4yOTU5Mzc1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMS4wNjAzMTI1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC44MjQ2ODc1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC41ODkwNjI1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC4zNTM0Mzc1MDAwMDAwMDAwNyxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMTE3ODEyNTAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC4xMTc4MTI1MDAwMDAwMDAxLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjM1MzQzNzQ5OTk5OTk5OTg1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjU4OTA2MjUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuODI0Njg3NDk5OTk5OTk5OCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMS4wNjAzMTI1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxLjI5NTkzNzUwMDAwMDAwMDIsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEuNTMxNTYyNSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMS43NjcxODc1MDAwMDAwMDAxLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbG9yc1wiOiBbXG4gICAgICAgICAgICAxMzYxNTI1OCxcbiAgICAgICAgICAgIDEyNDMyNzk0LFxuICAgICAgICAgICAgMTQ3MzM5OTUsXG4gICAgICAgICAgICAxMTkwNzIyMixcbiAgICAgICAgICAgIDEwNzkxODE0LFxuICAgICAgICAgICAgMTAzOTc4MjgsXG4gICAgICAgICAgICAxNDQ2OTUzNixcbiAgICAgICAgICAgIDEzMjIwMjM5LFxuICAgICAgICAgICAgMTM2MTUyNTgsXG4gICAgICAgICAgICAxMjQzMjc5NCxcbiAgICAgICAgICAgIDE0NzMzOTk1LFxuICAgICAgICAgICAgMTE5MDcyMjIsXG4gICAgICAgICAgICAxMDc5MTgxNCxcbiAgICAgICAgICAgIDEwMzk3ODI4LFxuICAgICAgICAgICAgMTQ0Njk1MzYsXG4gICAgICAgICAgICAxMzIyMDIzOVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIC8vIENPTE9SIGhhcyB0byBiZSBjYXJyaWVkIHRvbywgYW5kIGl0IGlzIGVhc3kgdG8gZm9yZ2V0OiB0aGlzIGZ1bmN0aW9uIGNvcGllZCBwb3NpdGlvbiwgbm9ybWFsXG4gIC8vIGFuZCB1diBvbmx5LCBhbmQgdGhlIG1vc3F1ZSdzIHJpYmJlZCBkb21lcyBsb3N0IHRoZWlyIGdyZWVuLWFuZC1wYWxlIHN0cmlwaW5nIHRoZSBtb21lbnQgdGhleVxuICAvLyB3ZXJlIG1lcmdlZCB3aXRoIGFueXRoaW5nLiBUaGUgZmFpbHVyZSBpcyBzaWxlbnQgLS0gdGhlIGRvbWUgcmVuZGVycywgaW4gb25lIGZsYXQgY29sb3VyIC0tIGFuZFxuICAvLyB0b29rIGEgd3JvbmcgdGhlb3J5IGFib3V0IHNSR0IgZ2FtbWEgYmVmb3JlIHRoZSBhdHRyaWJ1dGUgbGlzdCB3YXMgcmVhZC4gQW55IGlucHV0IGNhcnJ5aW5nIGFcbiAgLy8gY29sb3VyIG1lYW5zIGV2ZXJ5IGlucHV0IGdldHMgb25lLCB3aGl0ZSB3aGVyZSBpdCBoYWQgbm9uZS5cbiAgY29uc3QgYW55Q29sb3IgPSBwYXJ0cy5zb21lKChnKSA9PiAhIWcuZ2V0QXR0cmlidXRlKCdjb2xvcicpKTtcbiAgY29uc3QgY29sb3IgPSBhbnlDb2xvciA/IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKS5maWxsKDEpIDogbnVsbDtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCBjID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgICBpZiAoY29sb3IgJiYgYykgeyBjb2xvclsodiArIGkpICogM10gPSBjLmdldFgoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMV0gPSBjLmdldFkoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMl0gPSBjLmdldFooaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbG9yKSBvdXQuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3IsIDMpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByVG9wOiBudW1iZXIsIHJCb3Q6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCwgckJvdCwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuXG4vKipcbiAqIFJldm9sdmUgYSBwcm9maWxlIGFib3V0ICtZLiBgcHRzYCBhcmUgW3JhZGl1cywgeV0gaW4gbWV0cmVzLCBib3R0b20gdG8gdG9wLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNoYXBlIHZvY2FidWxhcnkgdGhlIHdob2xlIG1vbnVtZW50YWwgc2V0IGlzIGJ1aWx0IGZyb20gLS0gYSBjaGVkaSdzIGJlbGwsIGEgcHJhbmcnc1xuICogY29ybi1jb2IgdGFwZXIsIGEgZG9tZSwgYSByaW5nZWQgc3BpcmUgYXJlIGFsbCBvbmUgcHJvZmlsZSBlYWNoLiBUd28gdGhpbmdzIGFyZSB3b3J0aCBzdGF0aW5nXG4gKiBiZWNhdXNlIGJvdGggY29zdCBhIHJlYnVpbGQgdG8gbGVhcm46XG4gKlxuICogLSBMYXRoZUdlb21ldHJ5IGlzIE9QRU4gYXQgdG9wIGFuZCBib3R0b20uIEEgcHJvZmlsZSB0aGF0IGRvZXMgbm90IGNsb3NlIG9uIHRoZSBheGlzIChyYWRpdXMgMClcbiAqICAgbGVhdmVzIGEgaG9sZSB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZHMgYXMgYmFja2dyb3VuZCBlbmNsb3NlZCBieSB0aGUgc2lsaG91ZXR0ZS4gQ2xvc2UgaXQsIG9yXG4gKiAgIGNhcCBpdCB3aXRoIHdoYXQgc2l0cyBhYm92ZS5cbiAqIC0gUkFESUFMIFNFR01FTlQgQ09VTlQgaXMgdGhlIHRyaWFuZ2xlIGJ1ZGdldCdzIG1haW4gbGV2ZXIgaGVyZSBhbmQgaXQgaXMgcGVyLWxhdGhlOiBhIHByb2ZpbGUgb2ZcbiAqICAgbiBwb2ludHMgYXQgcyBzZWdtZW50cyBpcyAyKihuLTEpKnMgdHJpYW5nbGVzLiBBIDI0LXJpbmcgc3BpcmUgYXQgMzIgc2VnbWVudHMgaXMgMSw0NzJcbiAqICAgdHJpYW5nbGVzIG9uIGl0cyBvd24sIHdoaWNoIGlzIHdoeSB0aGUgbG93LXJlbGllZiByaW5ncyBhcmUgYSBwcm9maWxlIHJhdGhlciB0aGFuIDI0IHJpbmdzLlxuICovXG4vKiogTGF0aGVHZW9tZXRyeSBzaGFyZXMgdGhlIGNvcm5lciB2ZXJ0ZXggYmV0d2VlbiBhbiBlbmQgZGlzYyBhbmQgdGhlIHNpZGUgd2FsbCwgc29cbiAqICBjb21wdXRlVmVydGV4Tm9ybWFscyB0aWx0cyB0aGUgd2FsbCdzIGZpcnN0IHJpbmcgNDUgZGVncmVlcyB0b3dhcmQgdGhlIGRpc2MgYW5kIHRoZSBoYXJuZXNzIHNoYWRlc1xuICogIGEgZGFyayBncmFkaWVudCB0aGVyZSAtLSBhIHJpbmcgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgYXMgYSBIT0xFIHVuZGVyIHRoZSBzdGFpbmxlc3MgYmluJ3MgY2FwLlxuICogIEluc2VydGluZyBhIHBvaW50IDAuOCBtbSBwYXN0IGV2ZXJ5IHNoYXJwIGNvcm5lciAoPiA3MCBkZWdyZWVzKSBjb25maW5lcyB0aGUgYXZlcmFnZWQgbm9ybWFsIHRvIHRoYXRcbiAqICBzbGl2ZXIuIENvc3RzIG9uZSByaW5nIHBlciBjb3JuZXI7IHBhc3MgYHNoYXJwID0gZmFsc2VgIHdoZXJlIHRoZSBidWRnZXQgY2Fubm90IGNhcnJ5IGl0LiAqL1xuZnVuY3Rpb24gc3BsaXRDb3JuZXJzKHB0czogbnVtYmVyW11bXSwgbWluRGVnID0gNzAsIGVwcyA9IDAuMDAwOCk6IG51bWJlcltdW10ge1xuICBjb25zdCBvdXQ6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwID0gcHRzW2ldLCBhID0gcHRzW2kgLSAxXSwgYiA9IHB0c1tpICsgMV07XG4gICAgbGV0IHNoYXJwID0gZmFsc2U7XG4gICAgaWYgKGEgJiYgYikge1xuICAgICAgY29uc3QgdXggPSBwWzBdIC0gYVswXSwgdXkgPSBwWzFdIC0gYVsxXSwgdnggPSBiWzBdIC0gcFswXSwgdnkgPSBiWzFdIC0gcFsxXTtcbiAgICAgIGNvbnN0IGx1ID0gTWF0aC5oeXBvdCh1eCwgdXkpLCBsdiA9IE1hdGguaHlwb3QodngsIHZ5KTtcbiAgICAgIGlmIChsdSA+IDAgJiYgbHYgPiAwKSBzaGFycCA9IE1hdGguYWNvcyhNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgKHV4ICogdnggKyB1eSAqIHZ5KSAvIChsdSAqIGx2KSkpKSA+IG1pbkRlZyAqIE1hdGguUEkgLyAxODA7XG4gICAgICBpZiAoc2hhcnAgJiYgbHUgPiAzICogZXBzKSBvdXQucHVzaChbcFswXSAtIHV4IC8gbHUgKiBlcHMsIHBbMV0gLSB1eSAvIGx1ICogZXBzXSk7XG4gICAgICBvdXQucHVzaChwKTtcbiAgICAgIGlmIChzaGFycCAmJiBsdiA+IDMgKiBlcHMpIG91dC5wdXNoKFtwWzBdICsgdnggLyBsdiAqIGVwcywgcFsxXSArIHZ5IC8gbHYgKiBlcHNdKTtcbiAgICB9IGVsc2Ugb3V0LnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIGB3ZWxkU2VhbWAgYXZlcmFnZXMgdGhlIG5vcm1hbHMgb2YgdGhlIGZpcnN0IGFuZCBsYXN0IHJhZGlhbCBjb2x1bW4sIHdoaWNoIGlzIHdoYXQgY2xvc2VzIHRoZVxuICogIHJldm9sdmUncyBTSEFESU5HIHNlYW0uIExhdGhlR2VvbWV0cnkgYWxyZWFkeSBkb2VzIHRoaXMgaXRzZWxmIC0tIGl0IGV4cGxpY2l0bHkgYXZlcmFnZXMgdGhlIHR3b1xuICogIGVuZCBjb2x1bW5zIGZvciBhIGZ1bGwgMipQSSBzd2VlcCAtLSBhbmQgdGhlIGBjb21wdXRlVmVydGV4Tm9ybWFscygpYCBiZWxvdyB0aHJvd3MgdGhhdCB3b3JrXG4gKiAgYXdheSwgYmVjYXVzZSBhIHJlY29tcHV0ZSBzZWVzIHRoZSBzZWFtIGFzIHR3byB1bmNvbm5lY3RlZCBlZGdlcyBhbmQgZ2l2ZXMgZWFjaCB0aGUgbm9ybWFsIG9mXG4gKiAgdGhlIGZhY2VzIG9uIGl0cyBvd24gc2lkZSBvbmx5LiBPbiBhIG1hdHRlIHByb3AgdGhlIHJlc3VsdGluZyBjcmVhc2UgaXMgaW52aXNpYmxlLCB3aGljaCBpcyB3aHlcbiAqICBpdCBzdXJ2aXZlZDsgb24gYSBzYXRpbiBtZXRhbCBpdCBpcyBhIGhhcmQgdmVydGljYWwgbGluZSBkb3duIHRoZSByZXZvbHZlLiBNZWFzdXJlZCBvbiB0aGVcbiAqICBub29kbGUtc2hvcCB0YWJsZSdzIHJpbSBhdCBhemltdXRoIDA6IGEgMzEtbGV2ZWwgbHVtYSBzdGVwIGF0IHg9NTEyICgyNDUgLT4gMjE0IGF0IHk9MjU4KSxcbiAqICBSRVZFUlNJTkcgdG8gKzI3IGF0IHk9MjY2IC0tIGEgZGlzY29udGludWl0eSwgbm90IGEgZ3JhZGllbnQuXG4gKiAgRGVmYXVsdCBPRkYgc28gbm8gYWxyZWFkeS1lbWl0dGVkIHByb3AgY2hhbmdlcyBzaGFkaW5nIGlmIGl0IGlzIGV2ZXIgcmUtZW1pdHRlZDsgdGhlIHJlY29tcHV0ZVxuICogIGlzIHN0aWxsIG5lZWRlZCBmb3IgdGhlIHNoYXJwLWNvcm5lciBzcGxpdHMsIHNvIHRoaXMgd2VsZHMgYWZ0ZXJ3YXJkcyByYXRoZXIgdGhhbiBza2lwcGluZyBpdC4gKi9cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwLCBzaGFycCA9IHRydWUsIHdlbGRTZWFtID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSAoc2hhcnAgPyBzcGxpdENvcm5lcnMocHRzKSA6IHB0cykubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgaWYgKHdlbGRTZWFtKSB7XG4gICAgLy8gTGF0aGVHZW9tZXRyeSBsYXlzIG91dCAoc2VnICsgMSkgY29sdW1ucyBvZiBgcm93c2AgdmVydGljZXM7IGNvbHVtbiAwIGFuZCBjb2x1bW4gc2VnIGFyZSB0aGVcbiAgICAvLyBzYW1lIHBsYWNlIGluIHNwYWNlLiBBdmVyYWdlIHRoZSBwYWlyIGFuZCB3cml0ZSBpdCBiYWNrIHRvIGJvdGguXG4gICAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgICBjb25zdCByb3dzID0gbi5jb3VudCAvIChzZWcgKyAxKTtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHJvd3M7IHIrKykge1xuICAgICAgY29uc3QgYSA9IHIsIGIgPSBzZWcgKiByb3dzICsgcjtcbiAgICAgIGNvbnN0IHggPSBuLmdldFgoYSkgKyBuLmdldFgoYiksIHkgPSBuLmdldFkoYSkgKyBuLmdldFkoYiksIHogPSBuLmdldFooYSkgKyBuLmdldFooYik7XG4gICAgICBjb25zdCBsID0gTWF0aC5oeXBvdCh4LCB5LCB6KSB8fCAxO1xuICAgICAgbi5zZXRYWVooYSwgeCAvIGwsIHkgLyBsLCB6IC8gbCk7XG4gICAgICBuLnNldFhZWihiLCB4IC8gbCwgeSAvIGwsIHogLyBsKTtcbiAgICB9XG4gICAgbi5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIElOREVYRUQsIHdpdGggc2hhcmVkIHJpbmcgdmVydGljZXMsIHNvIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGF2ZXJhZ2VzIGFjcm9zcyB0aGUgcXVhZHMgYW5kIHRoZVxuICAvLyBzdXJmYWNlIHNoYWRlcyBzbW9vdGguIFRoZSBmaXJzdCBidWlsZCBlbWl0dGVkIGxvb3NlIHRyaWFuZ2xlcywgYW5kIGEgZmxhdC1zaGFkZWQgc29mdCBib2R5XG4gIC8vIHNob3dzIGV2ZXJ5IHN0YXRpb24gYXMgYSBjcmVhc2UgLS0gYSByZWNsaW5pbmcgZmlndXJlIHRoYXQgbG9va2VkIGNydW1wbGVkIHJhdGhlciB0aGFuIGRyYXBlZC5cbiAgLy9cbiAgLy8gQSBzaXh0aCBzdGF0aW9uIGVsZW1lbnQgYGZsYXRZYCBDTEFNUFMgdGhlIHJpbmcncyB1bmRlcnNpZGUgdG8gdGhhdCBoZWlnaHQuIEEgYm9keSByZXN0aW5nIG9uXG4gIC8vIHRoZSBncm91bmQgaXMgbm90IGEgZmxvYXRpbmcgZWxsaXBzZTogaXQgc3ByZWFkcyB3aGVyZSBpdCBiZWFycywgYW5kIGFuIHVuY2xhbXBlZCB0dWJlIHJlYWRzIGFzXG4gIC8vIGEgc2F1c2FnZSBvbiBhIHRhYmxlLiBUaGUgY2xhbXAgaXMgYSBzb2Z0IG9uZSAtLSB0aGUgcmluZyBrZWVwcyBpdHMgd2lkdGggYW5kIGxvc2VzIGl0cyBkcm9vcCAtLVxuICAvLyBzbyB0aGUgY3JlYXNlIGl0IGxlYXZlcyBpcyB0aGUgY29udGFjdCBlZGdlIHJhdGhlciB0aGFuIGEgY3V0LlxuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFt6LCBjeCwgY3ksIHJ4LCByeSwgZmxhdFldID0gc3RhdGlvbnNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLnNpbih0aCkgKiByeDtcbiAgICAgIGxldCB5ID0gY3kgKyBNYXRoLmNvcyh0aCkgKiByeTtcbiAgICAgIGlmIChmbGF0WSAhPT0gdW5kZWZpbmVkICYmIHkgPCBmbGF0WSkgeSA9IGZsYXRZO1xuICAgICAgcG9zLnB1c2goeCwgeSwgeik7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgICAgaWR4LnB1c2goYSwgYiwgYywgYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KChwb3MubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLnNldEluZGV4KGlkeCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBjdXJsZWQgaG9ybjogYG5gIHRhcGVyaW5nIGJveCBzZWdtZW50cyBzYW1wbGVkIGFsb25nIGEgc2luZSwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudC5cbiAqIFNoYXJlZCBieSB0aGUgdWJvc290J3MgY2hvZmEsIHRoZSBwcmFuZydzIHRyaWRlbnQgcHJvbmdzIGFuZCB0aGUgQ2hpbmVzZSBzaHJpbmUncyBmbHlpbmcgZWF2ZXMsXG4gKiBiZWNhdXNlIGFsbCB0aHJlZSBhcmUgdGhlIHNhbWUgcHJvYmxlbSAtLSBhIHN0cmFpZ2h0IHNwaWtlIGF0IGEgcm9vZiBlbmQgcmVhZHMgYXMgYSBsaWdodG5pbmcgcm9kXG4gKiBhbmQgdGhlIGN1cmwgaXMgdGhlIHdob2xlIGZlYXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGN1cmxlZEhvcm4ocmVhY2g6IG51bWJlciwgcmlzZTogbnVtYmVyLCB0aGljazogbnVtYmVyLCBuID0gNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtyZWFjaCAqIE1hdGguc2luKHUgKiBNYXRoLlBJICogMC40NiksIHJpc2UgKiB1XTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBjb25zdCBhID0gYXQoaiAvIG4pLCBiID0gYXQoKGogKyAxKSAvIG4pO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgdyA9IHRoaWNrICogKDEgLSBqIC8gbikgKyB0aGljayAqIDAuMjg7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBNYXRoLmh5cG90KGR4LCBkeSkgKyB0aGljayAqIDAuMiwgdyk7XG4gICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZlaGljbGUgaGVscGVycyAqL1xuXG4vKiogUGFpbnQgYSB3aG9sZSBnZW9tZXRyeSBvbmUgdmVydGV4IGNvbG91ci4gRXZlcnkgdmVoaWNsZSBtYXRlcmlhbCBoZXJlIGlzIFdISVRFIHdpdGhcbiAqICB2ZXJ0ZXhDb2xvcnMgb24sIHNvIGEgY29sb3VyIGRpZmZlcmVuY2UgY29zdHMgYW4gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgbWF0ZXJpYWw6IHRoZSBib2R5J3NcbiAqICB0d28tdG9uZSwgdGhlIHR5cmUgYWdhaW5zdCBpdHMgcmltLCBhbiBhbWJlciBpbmRpY2F0b3Igb24gYSBibGFjayBidW1wZXIgYWxsIHJpZGUgb25lIHNoYWRlci5cbiAqICBWZXJ0ZXggY29sb3VycyBtdWx0aXBseSBpbiBMSU5FQVIgc3BhY2UsIHNvIHRoZSBoZXggaXMgY29udmVydGVkIHRocm91Z2ggVEhSRUUuQ29sb3IsIHdoaWNoXG4gKiAgZG9lcyB0aGUgc1JHQi10by1saW5lYXIgc3RlcC4gKi9cbmZ1bmN0aW9uIHRpbnRHZW8oZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgaGV4OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoaGV4KTtcbiAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7IH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQm94LXByb2plY3Qgd29ybGQtbWV0cmUgVVZzIHNvIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgKG11ZCwgcnVzdCwgY29ycnVnYXRpb24pIHJlcGVhdHNcbiAqICBhdCBhIHJlYWwgc2l6ZSBvbiBldmVyeSBmYWNlLiBgc2NhbGVgIGlzIG1ldHJlcyBwZXIgdGlsZS4gVGhlIGRvbWluYW50IG5vcm1hbCBheGlzIHBpY2tzIHRoZVxuICogIHBhaXIgb2Ygd29ybGQgYXhlcyB1c2VkLCBzbyBhIHJvb2YgcmVhZHMgKHgsIHopIGFuZCBhIHNpZGUgcmVhZHMgKHosIHkpLiAqL1xuZnVuY3Rpb24gd29ybGRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF5ID0gTWF0aC5hYnMobnJtLmdldFkoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBsZXQgdTogbnVtYmVyLCB2OiBudW1iZXI7XG4gICAgaWYgKGF4ID49IGF5ICYmIGF4ID49IGF6KSB7IHUgPSBwLmdldFooaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICBlbHNlIGlmIChheSA+PSBheikgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRaKGkpOyB9XG4gICAgZWxzZSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSB2IC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKlxuICogU0lERS1QUk9GSUxFIEVYVFJVU0lPTjogYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzICh0aGUgdmVoaWNsZSdzIHNpZGUgc2lsaG91ZXR0ZSwgd2hlZWxcbiAqIGFyY2hlcyBpbmNsdWRlZCBhcyBub3RjaGVzKSBzd2VwdCBhY3Jvc3MgdGhlIGZ1bGwgd2lkdGgsIHRoZW4gc2hhcGVkIHBlciB2ZXJ0ZXg6XG4gKlxuICogIC0gYHR1bWJsZWAgIG5hcnJvd3MgdGhlIHNlY3Rpb24gYWJvdmUgdGhlIGJlbHQgbGluZSAtLSB4IGlzIHNjYWxlZCBieSAoMSAtIGsgKiB0KSB3aGVyZSB0IHJ1bnNcbiAqICAgICAgICAgICAgICAwIGF0IGBiZWx0YCB0byAxIGF0IGByb29mYC4gVGhhdCBpcyB0aGUgdHVtYmxlaG9tZSBvZiBhIHJlYWwgY2FyIGJvZHkgYW5kIGlzIHdoYXRcbiAqICAgICAgICAgICAgICBzdG9wcyB0aGUgZ2xhc3Nob3VzZSByZWFkaW5nIGFzIGEgYm94IG9uIGEgYm94LlxuICogIC0gYHBsYW5gICAgIHJvdW5kcyB0aGUgcGxhbiBhdCB0aGUgbm9zZSBhbmQgdGFpbDogYW4gb3B0aW9uYWwgbGlzdCBvZiBbeiwgeFNjYWxlXSBzdGF0aW9uc1xuICogICAgICAgICAgICAgIGludGVycG9sYXRlZCBhbG9uZyB6LCBzbyBhIGJvbm5ldCBjYW4gdGFwZXIgdG8gMC45IG9mIHRoZSB3aWR0aCBhdCB0aGUgYnVtcGVyIGxpbmUuXG4gKlxuICogRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBpbiBpdHMgb3duICh1LCB2LCBkZXB0aCkgZnJhbWU7IHJvdGF0ZVkoLVBJLzIpIG1hcHMgZGVwdGggdG8gLXggYW5kIHUgdG9cbiAqIHdvcmxkIHosIGFuZCB0aGUgdHJhbnNsYXRlIHJlLWNlbnRyZXMgdGhlIHNsYWIgb24geCA9IDAuIEFueSBzaGFwaW5nIGlzIGFwcGxpZWQgQUZURVIgdGhhdCwgYW5kXG4gKiBub3JtYWxzIGFyZSByZWNvbXB1dGVkIGxhc3Qgc28gdGhlIHNoYWRlZCBmYWNlcyBmb2xsb3cgdGhlIHNoYXBlZCBzdXJmYWNlLlxuICovXG5mdW5jdGlvbiBzaWRlRXh0cnVkZShwcm9maWxlOiBudW1iZXJbXVtdLCB3aWR0aDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgb3B0czogeyB0dW1ibGU/OiB7IGJlbHQ6IG51bWJlciwgcm9vZjogbnVtYmVyLCBrOiBudW1iZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbj86IG51bWJlcltdW10sIGN1cnZlU2VnbWVudHM/OiBudW1iZXIgfSA9IHt9KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHJvZmlsZVswXVswXSwgcHJvZmlsZVswXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvZmlsZS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHByb2ZpbGVbaV1bMF0sIHByb2ZpbGVbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHdpZHRoLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmVTZWdtZW50czogb3B0cy5jdXJ2ZVNlZ21lbnRzID8/IDYgfSk7XG4gIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIDAsIDApO1xuICBzaGFwZVdpZHRoKGcsIG9wdHMpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIFRoZSBwZXItdmVydGV4IHggc2hhcGluZyBzaGFyZWQgYnkgdGhlIGJvZHkgYW5kIGl0cyBnbGFzcyBiYW5kLCBzbyBhIHBhbmUgb2Zmc2V0IDUgbW0gcHJvdWQgb2ZcbiAqICB0aGUgYm9keSBzdGF5cyA1IG1tIHByb3VkIGFmdGVyIGJvdGggYXJlIG5hcnJvd2VkIGJ5IHRoZSBzYW1lIGZ1bmN0aW9uLiAqL1xuZnVuY3Rpb24gc2hhcGVXaWR0aChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSxcbiAgICAgICAgICAgICAgICAgICAgb3B0czogeyB0dW1ibGU/OiB7IGJlbHQ6IG51bWJlciwgcm9vZjogbnVtYmVyLCBrOiBudW1iZXIgfSwgcGxhbj86IG51bWJlcltdW10gfSk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgbGV0IHggPSBwLmdldFgoaSk7IGNvbnN0IHkgPSBwLmdldFkoaSksIHogPSBwLmdldFooaSk7XG4gICAgaWYgKG9wdHMudHVtYmxlKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHkgLSBvcHRzLnR1bWJsZS5iZWx0KSAvIChvcHRzLnR1bWJsZS5yb29mIC0gb3B0cy50dW1ibGUuYmVsdCkpKTtcbiAgICAgIHggKj0gMSAtIG9wdHMudHVtYmxlLmsgKiB0O1xuICAgIH1cbiAgICBpZiAob3B0cy5wbGFuICYmIG9wdHMucGxhbi5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBzdCA9IG9wdHMucGxhbjtcbiAgICAgIGxldCBzID0gc3RbMF1bMV07XG4gICAgICBpZiAoeiA8PSBzdFswXVswXSkgcyA9IHN0WzBdWzFdO1xuICAgICAgZWxzZSBpZiAoeiA+PSBzdFtzdC5sZW5ndGggLSAxXVswXSkgcyA9IHN0W3N0Lmxlbmd0aCAtIDFdWzFdO1xuICAgICAgZWxzZSBmb3IgKGxldCBrID0gMDsgayA8IHN0Lmxlbmd0aCAtIDE7IGsrKykge1xuICAgICAgICBpZiAoeiA+PSBzdFtrXVswXSAmJiB6IDw9IHN0W2sgKyAxXVswXSkge1xuICAgICAgICAgIGNvbnN0IHUgPSAoeiAtIHN0W2tdWzBdKSAvIChzdFtrICsgMV1bMF0gLSBzdFtrXVswXSk7XG4gICAgICAgICAgcyA9IHN0W2tdWzFdICsgKHN0W2sgKyAxXVsxXSAtIHN0W2tdWzFdKSAqIHU7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB4ICo9IHM7XG4gICAgfVxuICAgIHAuc2V0WChpLCB4KTtcbiAgfVxuICBwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xufVxuXG4vKiogQSBzZW1pY2lyY3VsYXIgd2hlZWwtYXJjaCBub3RjaCBhcyBwcm9maWxlIHBvaW50cywgdG8gYmUgc3BsaWNlZCBpbnRvIGEgc2lkZSBwcm9maWxlIHRoYXQgcnVuc1xuICogIGFsb25nIHRoZSBzaWxsIGZyb20gK3ogdG8gLXogKGkuZS4geiBERUNSRUFTSU5HKS4gYG5gIHNlZ21lbnRzOyB0aGUgYXJjIGlzIHRoZSBUT1AgaGFsZi4gKi9cbmZ1bmN0aW9uIGFyY2hOb3RjaCh6YzogbnVtYmVyLCB5U2lsbDogbnVtYmVyLCByOiBudW1iZXIsIG4gPSA3KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgLyBuOyAgICAgICAgICAgICAgIC8vIDAgLi4gUEksIGZyb20gK3ogcm91bmQgdGhlIHRvcCB0byAtelxuICAgIHB0cy5wdXNoKFt6YyArIE1hdGguY29zKGEpICogciwgeVNpbGwgKyBNYXRoLnNpbihhKSAqIHJdKTtcbiAgfVxuICByZXR1cm4gcHRzO1xufVxuXG4vKipcbiAqIEEgV0hFRUw6IG9uZSBsYXRoZSBhYm91dCB0aGUgYXhsZS4gVGhlIHByb2ZpbGUgcnVucyBmcm9tIHRoZSBodWIgZmFjZSBvbiBvbmUgc2lkZSBvdmVyIHRoZSByaW1cbiAqIGxpcCwgdGhlIHR5cmUgc2lkZXdhbGwsIHRoZSB0cmVhZCBhbmQgYmFjayBkb3duIHRoZSBmYXIgc2lkZSwgc28gdGhlIHdoZWVsIGlzIGEgY2xvc2VkIHNvbGlkIHdpdGhcbiAqIG5vIG9wZW4gZW5kIGZvciB0aGUgdHVybnRhYmxlIGdhdGUgdG8gcmVhZCB0aHJvdWdoLiBSZXZvbHZlZCBhYm91dCBZIGFuZCB0aGVuIGxhaWQgb24gWCwgc28gdGhlXG4gKiBheGxlIGlzIHRoZSB4IGF4aXMgYW5kIHRoZSB3aGVlbCByb2xscyBhYm91dCBpdCAtLSB3aGljaCBpcyB0aGUgYXhpcyBpdHMgcGl2b3QgZGVjbGFyZXMuXG4gKlxuICogVHdvIHZlcnRleCBjb2xvdXJzOiBgcmltSGV4YCBvbiB0aGUgaHViIGFuZCByaW0gcG9pbnRzLCBgdHlyZUhleGAgb24gdGhlIHNpZGV3YWxsIGFuZCB0cmVhZC4gVGhlXG4gKiBsYXRoZSBvcmRlcnMgdmVydGljZXMgc2VnbWVudC1tYWpvciAoaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpLCB3aGljaCBpcyB3aGF0IGxldHMgYVxuICogcGVyLXByb2ZpbGUtcG9pbnQgY29sb3VyIGJlIHdyaXR0ZW4gd2l0aG91dCBhIHNlY29uZCBnZW9tZXRyeS5cbiAqL1xuZnVuY3Rpb24gd2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIGRpc2ggPSAwLjU1KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXG4gICAgWzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuMzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuNjIsIC1odyAqIDAuODBdLCBbclJpbSwgLWh3ICogMC44Nl0sIFtyUmltLCAtaHcgKiAwLjk4XSxcbiAgICBbclR5cmUgKiAwLjkzLCAtaHddLCBbclR5cmUsIC1odyAqIDAuNzJdLCBbclR5cmUsIGh3ICogMC43Ml0sIFtyVHlyZSAqIDAuOTMsIGh3XSxcbiAgICBbclJpbSwgaHcgKiAwLjk4XSwgW3JSaW0sIGh3ICogMC44Nl0sIFtyUmltICogMC42MiwgaHcgKiAwLjgwXSwgW3JSaW0gKiAwLjMwLCBodyAqIGRpc2hdLCBbMCwgaHcgKiBkaXNoXSxcbiAgXTtcbiAgY29uc3QgcmltUG9pbnQgPSAoajogbnVtYmVyKSA9PiBqIDw9IDQgfHwgaiA+PSA5O1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBzZWcpO1xuICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBjb25zdCBjdCA9IG5ldyBUSFJFRS5Db2xvcih0eXJlSGV4KSwgY3IgPSBuZXcgVEhSRUUuQ29sb3IocmltSGV4KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBjID0gcmltUG9pbnQoaSAlIHB0cy5sZW5ndGgpID8gY3IgOiBjdDtcbiAgICBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgZy5yb3RhdGVaKE1hdGguUEkgLyAyKTsgICAgLy8gbGF0aGUgYXhpcyBZIC0+IGF4bGUgb24gWFxuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogV2lyZS1zcG9rZWQgd2hlZWwgZHJlc3Npbmc6IGBuYCB0aGluIGJveGVzIHJhZGlhdGluZyBmcm9tIHRoZSBodWIsIGxhY2VkIGFsdGVybmF0ZWx5IHRvIGVhY2hcbiAqICBzaWRlIG9mIHRoZSByaW0gc28gdGhleSBjcm9zcyB0aGUgd2F5IHJlYWwgc3Bva2VzIGRvLiBNZXJnZWQgaW50byB0aGUgd2hlZWwgZ2VvbWV0cnkgc28gdGhlXG4gKiAgd2hlZWwgc3RheXMgT05FIGluc3RhbmNlZCBnZW9tZXRyeS4gKi9cbmZ1bmN0aW9uIHNwb2tlcyhySHViOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgbjogbnVtYmVyLCBoZXg6IG51bWJlciwgdCA9IDAuMDA2LCBwcmlzbSA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJICogMiAvIG47XG4gICAgY29uc3Qgc2lkZSA9IChpICUgMiA9PT0gMCA/IDEgOiAtMSkgKiBoYWxmVyAqIDAuMzU7XG4gICAgY29uc3QgbGVuID0gclJpbSAtIHJIdWI7XG4gICAgLy8gYHByaXNtYDogYW4gb3BlbiB0aHJlZS1zaWRlZCBwcmlzbSBhdCBzaXggdHJpYW5nbGVzIHdoZXJlIHRoZSBib3ggY29zdHMgdHdlbHZlIC0tIGEgd2lyZVxuICAgIC8vIHNwb2tlIGhhcyBubyByZXNvbHZhYmxlIHNlY3Rpb24gYXQgcHJvcCBkaXN0YW5jZSwgYW5kIDI4IG9mIHRoZW0gb24gdGhyZWUgd2hlZWxzIGlzIHRoZVxuICAgIC8vIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGxhcmdlIHByb3AgaW5zaWRlIGl0cyB0cmlhbmdsZSBjZWlsaW5nIGFuZCBvbmUgb3ZlciBpdFxuICAgIGNvbnN0IGcgPSBwcmlzbSA/IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHQgKiAwLjYyLCB0ICogMC42MiwgbGVuLCAzLCAxLCB0cnVlKSA6IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh0LCBsZW4sIHQpO1xuICAgIGcudHJhbnNsYXRlKDAsIHJIdWIgKyBsZW4gLyAyLCAwKTtcbiAgICBnLnJvdGF0ZVgoTWF0aC5hdGFuMihzaWRlLCBsZW4pICogMC42KTtcbiAgICBnLnJvdGF0ZVgoMCk7IGcudHJhbnNsYXRlKDAsIDAsIHNpZGUgKiAwLjUpO1xuICAgIGcucm90YXRlWChhKTsgICAgICAgICAgICAvLyByYWRpYXRlIGFyb3VuZCB0aGUgYXhsZSAoeClcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIHRpbnRHZW8obWVyZ2VHZW9zKHNlZ3MpLCBoZXgpO1xufVxuXG4vKiogQSBwb2x5bGluZSBUVUJFOiBvbmUgY3lsaW5kZXIgcGVyIHNlZ21lbnQsIGVhY2ggcm90YXRlZCBvbnRvIGl0cyBjaG9yZCwgd2l0aCBhIHNtYWxsIHNwaGVyZS1sZXNzXG4gKiAgb3ZlcmxhcCBzbyB0aGUgam9pbnRzIGNsb3NlLiBIYW5kbGViYXJzLCBjYW5vcHkgcmFpbHMsIHJvbGwgY2FnZXMgYW5kIGZyYW1lIHR1YmVzLiAqL1xuLyoqXG4gKiBgcmAgbWF5IGJlIGEgc2luZ2xlIHJhZGl1cyAoZXZlcnkgc2VnbWVudCB0aGUgc2FtZSwgdGhlIG9yaWdpbmFsIGJlaGF2aW91cikgb3IgT05FIFJBRElVUyBQRVJcbiAqIFNUQVRJT04sIHdoaWNoIHRhcGVycyB0aGUgdHViZS4gQSBjYXBwZWQgY29uc3RhbnQtcmFkaXVzIHR1YmUgZW5kcyBpbiBhIGZsYXQgZGlzYywgYW5kIG9uIHRoZVxuICogc3Bpcml0IGhvdXNlJ3MgZWF2ZSBob3JucyB0aGF0IHJlYWQgYXMgZm91ciBjdXQtb2ZmIHBvc3RzIHJhdGhlciB0aGFuIHBvaW50czsgYSBob3JuLCBhIHNwaWtlIG9yXG4gKiBhIHdoaXNrZXIgbmVlZHMgaXRzIGxhc3Qgc3RhdGlvbiBhdCB+MC4yNSBvZiB0aGUgZmFzY2lhIHJhZGl1cy4gVGhlIGpvaW50IG92ZXJsYXAgdGhhdCBoaWRlcyB0aGVcbiAqIHNlYW0gYmV0d2VlbiBzZWdtZW50cyBpcyAocmEgKyByYikgKiAwLjYsIHdoaWNoIGlzIGV4YWN0bHkgdGhlIG9sZCBgciAqIDEuMmAgd2hlbiB0aGV5IGFyZSBlcXVhbCxcbiAqIHNvIGEgbnVtYmVyIHN0aWxsIHByb2R1Y2VzIGJ5dGUtaWRlbnRpY2FsIGdlb21ldHJ5LlxuICovXG5mdW5jdGlvbiB0dWJlKHB0czogbnVtYmVyW11bXSwgcjogbnVtYmVyIHwgbnVtYmVyW10sIHNlZyA9IDgsIGhleD86IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgckF0ID0gKGk6IG51bWJlcikgPT4gKHR5cGVvZiByID09PSAnbnVtYmVyJyA/IHIgOiByW01hdGgubWluKGksIHIubGVuZ3RoIC0gMSldKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkID0gYi5jbG9uZSgpLnN1YihhKTsgY29uc3QgbGVuID0gZC5sZW5ndGgoKTtcbiAgICBpZiAobGVuIDwgMWUtNikgY29udGludWU7XG4gICAgY29uc3QgcmEgPSByQXQoaSksIHJiID0gckF0KGkgKyAxKTtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkocmIsIHJhLCBsZW4gKyAocmEgKyByYikgKiAwLjYsIHNlZywgMSwgZmFsc2UpO1xuICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgZC5ub3JtYWxpemUoKSk7XG4gICAgZy5hcHBseVF1YXRlcm5pb24ocSk7XG4gICAgY29uc3QgbSA9IGEuY2xvbmUoKS5hZGQoYikubXVsdGlwbHlTY2FsYXIoMC41KTtcbiAgICBnLnRyYW5zbGF0ZShtLngsIG0ueSwgbS56KTtcbiAgICBwYXJ0cy5wdXNoKGcpO1xuICB9XG4gIGNvbnN0IG91dCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IG91dCA6IHRpbnRHZW8ob3V0LCBoZXgpO1xufVxuXG4vKipcbiAqIEEgRkxBVCBTVFJBUCBzd2VwdCBhbG9uZyBhIHBvbHlsaW5lOiBhIGNoYWluIG9mIGJveGVzLCBlYWNoIG9yaWVudGVkIHNvIGl0cyBMRU5HVEggcnVucyBhbG9uZyB0aGVcbiAqIHNlZ21lbnQsIGl0cyBUSElDS05FU1MgYWxvbmcgdGhlIG91dHdhcmQgbm9ybWFsIGZyb20gYGFib3V0YCwgYW5kIGl0cyBXSURUSCB0YW5nZW50IHRvIHRoYXRcbiAqIHN1cmZhY2UuIFRoaXMgaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGd1YXJkIGFuZCBhIHdpcmU6IGEgYnVsa2hlYWQgbGFtcCdzIGNhZ2UgaXMgcHJlc3NlZFxuICogZmxhdCBiYXIsIGFuZCBhIHJvdW5kIHR1YmUgb2YgdGhlIHNhbWUgbWVhc3VyZWQgd2lkdGggc2hhZGVzIHRvIGEgbmFycm93IGhpZ2hsaWdodCBhbmQgcmVhZHMgYXNcbiAqIHdpcmUgLS0gd2hpY2ggaXMgdGhlIHRoaW5nIHRoaXMga2l0J3MgYXNzZXQgbm90ZXMgcnVsZSBvdXQuIEl0IGlzIGFsc28gQ0hFQVBFUiB0aGFuIGB0dWJlYDogYSBib3hcbiAqIGlzIDEyIHRyaWFuZ2xlcyBhZ2FpbnN0IGEgY2FwcGVkIDUtc2lkZWQgY3lsaW5kZXIncyAyMC5cbiAqL1xuZnVuY3Rpb24gc3RyYXAocHRzOiBudW1iZXJbXVtdLCB3OiBudW1iZXIsIHQ6IG51bWJlciwgYWJvdXQ6IG51bWJlcltdLCBoZXg/OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGMgPSBuZXcgVEhSRUUuVmVjdG9yMyhhYm91dFswXSwgYWJvdXRbMV0sIGFib3V0WzJdKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkaXIgPSBiLmNsb25lKCkuc3ViKGEpOyBjb25zdCBsZW4gPSBkaXIubGVuZ3RoKCk7XG4gICAgaWYgKGxlbiA8IDFlLTYpIGNvbnRpbnVlO1xuICAgIGRpci5ub3JtYWxpemUoKTtcbiAgICBjb25zdCBtaWQgPSBhLmNsb25lKCkuYWRkKGIpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG4gICAgLy8gT3V0d2FyZCBub3JtYWwgYXQgdGhlIG1pZHBvaW50LCByZS1vcnRob2dvbmFsaXNlZCBhZ2FpbnN0IHRoZSBydW4gc28gdGhlIGJhc2lzIHN0YXlzIHNxdWFyZVxuICAgIC8vIHdoZXJlIHRoZSBzdHJhcCBjbGltYnMgc3RlZXBseSBhbmQgdGhlIHR3byB3b3VsZCBvdGhlcndpc2UgYmUgbmVhcmx5IHBhcmFsbGVsLlxuICAgIGxldCBucm0gPSBtaWQuY2xvbmUoKS5zdWIoYyk7XG4gICAgbnJtLnN1YihkaXIuY2xvbmUoKS5tdWx0aXBseVNjYWxhcihucm0uZG90KGRpcikpKTtcbiAgICBpZiAobnJtLmxlbmd0aFNxKCkgPCAxZS0xMikgbnJtID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSkuc3ViKGRpci5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKGRpci56KSk7XG4gICAgbnJtLm5vcm1hbGl6ZSgpO1xuICAgIC8vIGRpciB4IG5ybSwgTk9UIG5ybSB4IGRpci4gVGhlIGJhc2lzIGNvbHVtbnMgYXJlIChzaWRlLCBkaXIsIG5ybSkgYWdhaW5zdCBhIGJveCdzICh3LCBsZW4sIHQpLFxuICAgIC8vIHNvIGEgcmlnaHQtaGFuZGVkIGJhc2lzIG5lZWRzIHNpZGUgeCBkaXIgPSBucm07IG5ybSB4IGRpciBnaXZlcyAtbnJtLCBhIG1pcnJvcmVkIGJhc2lzIHdpdGggYVxuICAgIC8vIG5lZ2F0aXZlIGRldGVybWluYW50LCBhbmQgZXZlcnkgc3RyYXAgcmVuZGVycyBpbnNpZGUgb3V0IC0tIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGRhcmtcbiAgICAvLyBzbGl2ZXIgcmF0aGVyIHRoYW4gYW4gb2J2aW91c2x5IGZsaXBwZWQgZmFjZSwgc28gaXQgcmVhZHMgYXMgYSBnZW9tZXRyeSBidWcsIG5vdCBhIHdpbmRpbmcgb25lLlxuICAgIGNvbnN0IHNpZGUgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNyb3NzVmVjdG9ycyhkaXIsIG5ybSkubm9ybWFsaXplKCk7XG4gICAgLy8gT3ZlcmxhcCB0aGUgam9pbnRzIGJ5IHRoZSB0aGlja25lc3Mgc28gY29uc2VjdXRpdmUgYm94ZXMgY2xvc2UgdGhlIG1pdHJlIHJhdGhlciB0aGFuXG4gICAgLy8gbGVhdmluZyBhIHdlZGdlIG9mIGRheWxpZ2h0IGF0IGV2ZXJ5IHN0YXRpb24uXG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBsZW4gKyB0LCB0KTtcbiAgICBnLmFwcGx5TWF0cml4NChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VCYXNpcyhzaWRlLCBkaXIsIG5ybSkpO1xuICAgIGcudHJhbnNsYXRlKG1pZC54LCBtaWQueSwgbWlkLnopO1xuICAgIHBhcnRzLnB1c2goZyk7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gb3V0IDogdGludEdlbyhvdXQsIGhleCk7XG59XG5cbi8qKiBBIHJvdGF0ZWQgYm94OiBbY3gsIGN5LCBjeiwgdywgaCwgZCwgcngsIHJ5LCByel0gd2l0aCB0aGUgcm90YXRpb25zIGFwcGxpZWQgaW4geCwgeSwgeiBvcmRlclxuICogIGFib3V0IHRoZSBib3gncyBvd24gY2VudHJlLiBBIGJvbm5ldCBsaXAsIGEgcmFrZWQgbWlycm9yIHN0ZW0sIGEgY2Fub3B5IHN0YXkuICovXG5mdW5jdGlvbiByYm94KGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJbM10sIGJbNF0sIGJbNV0pO1xuICBpZiAoYls2XSkgZy5yb3RhdGVYKGJbNl0pOyBpZiAoYls3XSkgZy5yb3RhdGVZKGJbN10pOyBpZiAoYls4XSkgZy5yb3RhdGVaKGJbOF0pO1xuICBnLnRyYW5zbGF0ZShiWzBdLCBiWzFdLCBiWzJdKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIGJhdGNoIG9mIGJveGVzLCBlYWNoIHRpbnRlZCwgbWVyZ2VkOiBbW2hleCwgY3gsIGN5LCBjeiwgdywgaCwgZCwgcng/LCByeT8sIHJ6P10sIC4uLl0uIFRoZVxuICogIHRyaW0gY29tcG9uZW50IG9mIGV2ZXJ5IHZlaGljbGUgaXMgb25lIG9mIHRoZXNlIC0tIGJ1bXBlcnMsIGdyaWxsZSwgbGFtcHMsIG1pcnJvcnMsIGhhbmRsZXMsXG4gKiAgc3RlcHMsIGFyY2ggZmxhcmVzIC0tIHNvIGZvcnR5IHBhcnRzIHJpZGUgb25lIHN1Ym1pc3Npb24uICovXG5mdW5jdGlvbiB0aW50ZWRCb3hlcyhsaXN0OiBudW1iZXJbXVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiB0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKSk7XG59XG5cbi8qKiBNaXJyb3IgYSBib3ggbGlzdCBhY3Jvc3MgeCA9IDAgKGxlZnQvcmlnaHQgcGFpcnMpLiBSb3RhdGlvbnMgYWJvdXQgeSBhbmQgeiBmbGlwIHNpZ24uICovXG5mdW5jdGlvbiBtaXJyb3JYKGxpc3Q6IG51bWJlcltdW10pOiBudW1iZXJbXVtdIHtcbiAgcmV0dXJuIGxpc3QuZmxhdE1hcCgoYikgPT4gW2IsIFtiWzBdLCAtYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSwgYls2XSwgYls3XSA/PyAwLCAtKGJbOF0gPz8gMCksIC0oYls5XSA/PyAwKV1dKTtcbn1cblxuLyoqIEEgc2VhbWxlc3MgQ2FudmFzIDJEIHRpbGU6IGBkcmF3KGN0eCwgc2l6ZSlgIHBhaW50cyBpdCwgYW5kIHRoZSByZXN1bHQgaXMgYSByZXBlYXRpbmcgdGV4dHVyZVxuICogIGluIHNSR0IuIFVzZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLCBzbyB0aGUgdGV4dHVyZWxlc3MgZGVjbGFyYXRpb24gc3RhbmRzIGFuZCBub1xuICogIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQuIFJldHVybnMgbnVsbCB3aGVyZSB0aGVyZSBpcyBubyBET00gKHRoZSBoZWFkbGVzcyBoYXJuZXNzXG4gKiAgaGFzIG9uZTsgYSBub2RlLXNpZGUgcHJvYmUgZG9lcyBub3QpLCBhbmQgZXZlcnkgY2FsbGVyIHRvbGVyYXRlcyBudWxsLiAqL1xuZnVuY3Rpb24gY2FudmFzVGlsZShzaXplOiBudW1iZXIsIGRyYXc6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgczogbnVtYmVyKSA9PiB2b2lkKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGN2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IGN2LndpZHRoID0gc2l6ZTsgY3YuaGVpZ2h0ID0gc2l6ZTtcbiAgLy8gd2lsbFJlYWRGcmVxdWVudGx5IGtlZXBzIHRoZSB0aWxlIG9uIHRoZSBDUFUgcmFzdGVyIHBhdGg6IGEgR1BVLWJhY2tlZCBjYW52YXMgY29zdHMgc2Vjb25kcyBwZXJcbiAgLy8gdGhvdXNhbmQgcGF0aCBmaWxscyB3aGVyZSB0aGUgc29mdHdhcmUgcGF0aCB0YWtlcyB0ZW5zIG9mIG1pbGxpc2Vjb25kcy5cbiAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsOyBpZiAoIWN0eCkgcmV0dXJuIG51bGw7XG4gIGRyYXcoY3R4LCBzaXplKTtcbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3YpO1xuICB0ZXgud3JhcFMgPSB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgdGV4LmNvbG9yU3BhY2UgPSBUSFJFRS5TUkdCQ29sb3JTcGFjZTtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgcmV0dXJuIHRleDtcbn1cblxuLyoqIERldGVybWluaXN0aWMgcHNldWRvLXJhbmRvbSBmb3IgY2FudmFzIGRyZXNzaW5nIC0tIGFzc2lnbmVkIGJ5IGluZGV4LCBuZXZlciBNYXRoLnJhbmRvbSwgc28gdGhlXG4gKiAgbW9kZWwgaXMgYnl0ZS1pZGVudGljYWwgb24gZXZlcnkgYnVpbGQuICovXG5mdW5jdGlvbiBsY2coc2VlZDogbnVtYmVyKTogKCkgPT4gbnVtYmVyIHtcbiAgbGV0IHMgPSBzZWVkID4+PiAwO1xuICByZXR1cm4gKCkgPT4geyBzID0gKHMgKiAxNjY0NTI1ICsgMTAxMzkwNDIyMykgPj4+IDA7IHJldHVybiBzIC8gNDI5NDk2NzI5NjsgfTtcbn1cblxuLyoqXG4gKiBNVUQgLyBST0FELUdSSU1FIHRpbGUsIFJFLUJBU0VELiBUaGFpIHJvYWQgbXVkIGlzIHRhbiBhbmQgQlJJR0hURVIgdGhhbiBtb3N0IHBhaW50LCBhbmQgYVxuICogbXVsdGlwbGllciBjYW5ub3QgYnJpZ2h0ZW46IHNvIHRoZSBwYWludCBtYXRlcmlhbCBjYXJyaWVzIHRoZSBNVUQgRU5WRUxPUEUgY29sb3VyIChtZWFzdXJlZCBvblxuICogdGhlIG11ZGR5IHNpbGwpLCB0aGlzIHRpbGUgY2FycmllcyB0aGUgY2xlYW4gcGFpbnQgYXMgYSBSQVRJTyBvZiB0aGF0IGVudmVsb3BlIG92ZXIgbW9zdCBvZiBpdHNcbiAqIGFyZWEgKGBiYXNlYCksIGFuZCB0aGUgbXVkIGlzIHBhaW50ZWQgYXMgd2hpdGUgLS0gaS5lLiB0aGUgZW52ZWxvcGUgaXRzZWxmIC0tIGluIGEgd2FzaCByaXNpbmdcbiAqIGZyb20gdGhlIGJvdHRvbSB0byBgY292ZXJhZ2VgIG9mIHRoZSB0aWxlIGhlaWdodCBwbHVzIHNwbGF0dGVyIGFib3ZlIGl0LiBCb3VuZCB3aXRoIGhlaWdodCBVVnNcbiAqIHNvIHYgPSAwIGlzIHRoZSBncm91bmQgYW5kIHRoZSB3YXNoIHNpdHMgb24gdGhlIHNpbGxzIGFuZCBhcmNoZXMuXG4gKi9cbmZ1bmN0aW9uIG11ZFRpbGUoc2l6ZTogbnVtYmVyLCBiYXNlOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzMpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgdG9IZXggPSAodjogbnVtYmVyW10pID0+ICcjJyArIHYubWFwKChjKSA9PiBNYXRoLnJvdW5kKE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGMpKSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0b0hleChiYXNlKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjU1LDI1NSwwLjg4KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNDUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpJyk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuMzU7XG4gICAgICBjb25zdCByID0gMyArIHJuZCgpICogcyAqIDAuMDU7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4yODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDI1NSwyNTAsMjQwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjUwLDI0MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBhIGxpdHRsZSBncmFpbiBzbyB0aGUgY2xlYW4gcGFpbnQgaXMgbm90IGEgZmxhdCBmaWxsXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7IGNvbnN0IHYgPSBybmQoKSA8IDAuNSA/IDAgOiAyNTU7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4wMzUpYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEuNSwgMS41KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogRFVTVCB0aWxlIGZvciBwYWludCB0aGF0IGlzIEJSSUdIVEVSIHRoYW4gaXRzIGRpcnQgKGEgd2hpdGUgdmFuKTogYSBwbGFpbiBtdWx0aXBsaWVyLCB3aGl0ZVxuICogIGJhc2UgYW5kIGEgZ3JleS1icm93biB3YXNoIHJpc2luZyBmcm9tIHRoZSBncm91bmQgdG8gYGNvdmVyYWdlYCwgcGx1cyBzb2Z0IGJsb2JzLiAqL1xuZnVuY3Rpb24gZHVzdFRpbGUoc2l6ZTogbnVtYmVyLCBkdXN0OiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGMgPSBkdXN0Lm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiBNYXRoLm1pbigxLCB2KSkpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjkpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjQpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuNCwgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA1LCBhID0gMC4wOCArIHJuZCgpICogMC4yNTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBDT1JSVUdBVEVEIFNIRUVUIHRpbGU6IHZlcnRpY2FsIHJpZGdlcyBhcyBhIHNpbmUtc2hhZGVkIHN0cmlwZSBmaWVsZCwgdXNlZCBhcyBtYXAgQU5EIGJ1bXBNYXAgb25cbiAqICBhIHNvbmd0aGFldyByb29mIHNvIHRoZSByaWRnZXMgY2F0Y2ggbGlnaHQuIGBwaXRjaGAgcmlkZ2VzIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gY29ycnVnYXRpb25UaWxlKHNpemU6IG51bWJlciwgcGl0Y2g6IG51bWJlciwgbG93OiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgY29uc3QgdCA9IChNYXRoLmNvcyh4IC8gcyAqIE1hdGguUEkgKiAyICogcGl0Y2gpICsgMSkgLyAyOyAgIC8vIDEgYXQgY3Jlc3QsIDAgaW4gdHJvdWdoXG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiAobG93ICsgKDEgLSBsb3cpICogdCkpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMTg7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTIwLDkwLDYwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMjAsOTAsNjAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFBMQU5LIHRpbGU6IGJvYXJkcyBydW5uaW5nIGFsb25nIHUgd2l0aCBkYXJrIGpvaW50cyBhbmQgZ3JhaW4gc3RyZWFrcywgYSBtdWx0aXBsaWVyIG9uIGFcbiAqICBtZWFzdXJlZCB0aW1iZXIgYWxiZWRvLiBgYm9hcmRzYCBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIHBsYW5rVGlsZShzaXplOiBudW1iZXIsIGJvYXJkczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGJoID0gcyAvIGJvYXJkcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IGJvYXJkczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgYmgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDMwLDIwLDAuNTUpJzsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDE0OyBrKyspIHtcbiAgICAgICAgY29uc3QgeSA9IGIgKiBiaCArIHJuZCgpICogYmgsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjYpLCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSg2MCw0NSwzMCwkezAuMDUgKyBybmQoKSAqIDAuMTJ9KWA7IGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgbGVuLCB5KTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgbGVuLCB5KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBSVVNUIHRpbGU6IGEgbXVsdGlwbGllciBvZiBibG90Y2hlZCBvcmFuZ2UtYnJvd24gb3ZlciBhIGJhc2UsIGRhcmsgY29yZXMgbGlmdGVkIHNvIG5vdGhpbmcgbGFuZHNcbiAqICBvbiB0aGUgbHVtYS01OCBob2xlIGdhdGUuICovXG5mdW5jdGlvbiBydXN0VGlsZShzaXplOiBudW1iZXIsIHJhdGlvOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBkZW5zaXR5ID0gOTApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVuc2l0eTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDk7XG4gICAgICBjb25zdCBhID0gMC4xNSArIHJuZCgpICogMC40NTtcbiAgICAgIGNvbnN0IGMgPSByYXRpby5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogdikpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBIZWlnaHQta2V5ZWQgVVZzOiB2IGlzIHdvcmxkIEhFSUdIVCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB1IHJ1bnMgYWxvbmcgdGhlIGRvbWluYW50IGhvcml6b250YWxcbiAqICBheGlzLiBBIG11ZCB0aWxlIGJvdW5kIHRoaXMgd2F5IGRhcmtlbnMgdGhlIHNpbGxzIGFuZCBzdGF5cyBjbGVhbiBvbiB0aGUgcm9vZiAtLSBhIHBsYWluIGJveFxuICogIHByb2plY3Rpb24gd291bGQgcmVwZWF0IHRoZSB0aWxlJ3MgZGlydHkgYmFuZCBhY3Jvc3MgdGhlIHJvb2YgYXMgc3RyaXBlcy4gKi9cbi8qKlxuICogU0hPUlQgRlVSOiBhIHNlYW1sZXNzIHRpbGUgb2YgZGVuc2UsIHNob3J0LCBkaXJlY3Rpb25hbCBoYWlyIHN0cm9rZXMgb3ZlciBhIGNsb3VkeSB0b25lIGRyaWZ0LCBhcyBhXG4gKiBtdWx0aXBseSBtYXAgKGFuZCBidW1wKSBvbiBhIHdoaXRlIHZlcnRleC1jb2xvdXJlZCBjb2F0LiBUaGUgc3Ryb2tlcyBydW4gYWxvbmcgdiB3aXRoIGEgaml0dGVyZWRcbiAqIGxlYW4gYW5kIGEgbmFycm93IHRvbmUgc3ByZWFkIC0tIGEgd2lkZSBzcHJlYWQgcmVhZHMgYXMgc2NhbGVzLCBhIHBlcmZlY3QgbGF5IHJlYWRzIGFzIGNvbWJlZFxuICogcGxhc3RpYy4gYHBhdGNoZXNgIGFkZHMgYSBmZXcgc29mdCBwaW5rLWdyZXkgYmFyZSBwYXRjaGVzLCB0aGUgbWFuZ2UgbWFya3Mgb2YgYSBzdHJlZXQgZG9nLlxuICovXG5mdW5jdGlvbiBmdXJUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IHRvbmUgPSBvLnRvbmUgPz8gWzAuNzIsIDAuNjYsIDAuNThdLCBtID0gcyAqIDAuMDY7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGNsb3VkeSBkcmlmdCB1bmRlcm5lYXRoIHNvIHRoZSBjb2F0IGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uY2xvdWRzID8/IDI2KTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA4ICsgcm5kKCkgKiAwLjE4KSwgYSA9IDAuMDQgKyBybmQoKSAqIDAuMTA7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih0b25lKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHRvbmUpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYmFyZSBwYXRjaGVzOiBzb2Z0LCBzcGFyc2UsIHdhcm0gZ3JleS1waW5rXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5wYXRjaGVzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMDUpLCBwYyA9IG8ucGF0Y2hUb25lID8/IFswLjcyLCAwLjU2LCAwLjUyXTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHBjKX0sMC41NSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2IocGMpfSwwLjMpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihwYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByICogMS4zLCByLCBybmQoKSAqIE1hdGguUEksIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBoYWlyIHN0cm9rZXM6IGRhcmsgYW5kIGxpZ2h0LCBzaG9ydCwgbGVhbmluZyB3aXRoaW4gKy0yMiBkZWdyZWVzIG9mIHZcbiAgICBjb25zdCBzdHJva2VzID0gby5zdHJva2VzID8/IDUwMDAsIGxlbiA9IHMgKiAoby5sZW5ndGggPz8gMC4wMjIpO1xuICAgIGNvbnN0IGRyYXdTdHJva2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIHc6IG51bWJlcikgPT4ge1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHc7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTtcbiAgICAgIGlmICh4IDwgbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIHMsIHkpOyBjdHgubGluZVRvKHggKyBzICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHggPiBzIC0gbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHkgPCBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5ICsgcyk7IGN0eC5saW5lVG8oeCArIGR4LCB5ICsgcyArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeSA+IHMgLSBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5IC0gcyk7IGN0eC5saW5lVG8oeCArIGR4LCB5IC0gcyArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgfTtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJva2VzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHRoID0gKHJuZCgpIC0gMC41KSAqIDAuNzgsIGwgPSBsZW4gKiAoMC42ICsgcm5kKCkgKiAwLjgpO1xuICAgICAgY29uc3QgbGlnaHQgPSBybmQoKSA8IDAuNDI7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gbGlnaHQgPyAnc2NyZWVuJyA6ICdtdWx0aXBseSc7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBsaWdodCA/IGByZ2JhKDI1NSwyNTAsMjQwLCR7MC4wNSArIHJuZCgpICogMC4xMH0pYCA6IGByZ2JhKCR7cmdiKHRvbmUpfSwkezAuMDYgKyBybmQoKSAqIDAuMTR9KWA7XG4gICAgICBkcmF3U3Ryb2tlKHgsIHksIE1hdGguc2luKHRoKSAqIGwsIE1hdGguY29zKHRoKSAqIGwsIDAuNiArIHJuZCgpICogMS4yKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoZWlnaHRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGNvbnN0IHUgPSBheCA+PSBheiA/IHAuZ2V0WihpKSA6IHAuZ2V0WChpKTtcbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSBwLmdldFkoaSkgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIE9mZnNldCBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgb3V0d2FyZCBieSBgZGAgYWxvbmcgdGhlIGF2ZXJhZ2VkIGVkZ2Ugbm9ybWFscy4gVXNlZFxuICogIHRvIHN0YW5kIHRoZSBnbGFzcyBiYW5kIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBib2R5J3MgcmFrZWQgd2luZHNjcmVlbiBhbmQgcmVhciBnbGFzc1xuICogIGZhY2VzLCBzbyB0aGUgcGFuZSBhbmQgdGhlIGJvZHkgbmV2ZXIgc2hhcmUgYSBwbGFuZS4gV2luZGluZzogY291bnRlci1jbG9ja3dpc2UgaW4gKHosIHkpLiAqL1xuZnVuY3Rpb24gb2Zmc2V0UG9seShwdHM6IG51bWJlcltdW10sIGQ6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBuID0gcHRzLmxlbmd0aCwgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IHB0c1soaSArIG4gLSAxKSAlIG5dLCBiID0gcHRzW2ldLCBjID0gcHRzWyhpICsgMSkgJSBuXTtcbiAgICBjb25zdCBlMSA9IFtiWzBdIC0gYVswXSwgYlsxXSAtIGFbMV1dLCBlMiA9IFtjWzBdIC0gYlswXSwgY1sxXSAtIGJbMV1dO1xuICAgIGNvbnN0IGwxID0gTWF0aC5oeXBvdChlMVswXSwgZTFbMV0pIHx8IDEsIGwyID0gTWF0aC5oeXBvdChlMlswXSwgZTJbMV0pIHx8IDE7XG4gICAgLy8gb3V0d2FyZCBub3JtYWwgb2YgYSBDQ1cgZWRnZSAoZHosIGR5KSBpcyAoZHksIC1keilcbiAgICBjb25zdCBuMSA9IFtlMVsxXSAvIGwxLCAtZTFbMF0gLyBsMV0sIG4yID0gW2UyWzFdIC8gbDIsIC1lMlswXSAvIGwyXTtcbiAgICBsZXQgbnggPSBuMVswXSArIG4yWzBdLCBueSA9IG4xWzFdICsgbjJbMV07XG4gICAgY29uc3QgbmwgPSBNYXRoLmh5cG90KG54LCBueSkgfHwgMTsgbnggLz0gbmw7IG55IC89IG5sO1xuICAgIGNvbnN0IGNvc0hhbGYgPSBNYXRoLm1heCgwLjM1LCBueCAqIG4xWzBdICsgbnkgKiBuMVsxXSk7XG4gICAgb3V0LnB1c2goW2JbMF0gKyBueCAqIGQgLyBjb3NIYWxmLCBiWzFdICsgbnkgKiBkIC8gY29zSGFsZl0pO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBBIHdoZWVsLWFyY2ggRkxBUkU6IGEgaGFsZi1hbm51bHVzIGluIHRoZSAoeiwgeSkgcGxhbmUsIGV4dHJ1ZGVkIGFjcm9zcyB4MC4ueDEgb24gYm90aCBzaWRlc1xuICogIGFuZCB0aW50ZWQuIFN0YW5kcyBwcm91ZCBvZiB0aGUgYm9keSBzaWRlIGFuZCBoaWRlcyB0aGUgYXJjaCdzIGN1dCBlZGdlLiAqL1xuZnVuY3Rpb24gZmxhcmUoemM6IG51bWJlciwgeWM6IG51bWJlciwgckluOiBudW1iZXIsIHJPdXQ6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgaGV4OiBudW1iZXIsIG4gPSA5KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IGNvbnN0IHogPSB6YyArIE1hdGguY29zKGEpICogck91dCwgeSA9IHljICsgTWF0aC5zaW4oYSkgKiByT3V0OyBpZiAoaSA9PT0gMCkgc2hhcGUubW92ZVRvKHosIHkpOyBlbHNlIHNoYXBlLmxpbmVUbyh6LCB5KTsgfVxuICBmb3IgKGxldCBpID0gbjsgaSA+PSAwOyBpLS0pIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IHNoYXBlLmxpbmVUbyh6YyArIE1hdGguY29zKGEpICogckluLCB5YyArIE1hdGguc2luKGEpICogckluKTsgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgbWsgPSAoc3g6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB4MSAtIHgwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlIH0pO1xuICAgIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpOyBnLnRyYW5zbGF0ZSh4MSwgMCwgMCk7IGlmIChzeCA8IDApIGcuc2NhbGUoLTEsIDEsIDEpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIHRpbnRHZW8oZywgaGV4KTtcbiAgfTtcbiAgY29uc3QgbCA9IG1rKC0xKSwgciA9IG1rKDEpO1xuICAvLyBhIG5lZ2F0aXZlIHNjYWxlIGZsaXBzIHRoZSB3aW5kaW5nOyByZXN0b3JlIGl0IHNvIHRoZSBmbGFyZSBpcyBub3QgaW5zaWRlIG91dFxuICBjb25zdCBpZHggPSBsLmdldEluZGV4KCk7IGlmIChpZHgpIHsgY29uc3QgYSA9IGlkeC5hcnJheSBhcyBhbnk7IGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMykgeyBjb25zdCB0ID0gYVtpICsgMV07IGFbaSArIDFdID0gYVtpICsgMl07IGFbaSArIDJdID0gdDsgfSBpZHgubmVlZHNVcGRhdGUgPSB0cnVlOyB9XG4gIGVsc2UgeyBjb25zdCBwID0gbC5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSArPSAzKSB7IGNvbnN0IHgxXyA9IHAuZ2V0WChpICsgMSksIHkxXyA9IHAuZ2V0WShpICsgMSksIHoxXyA9IHAuZ2V0WihpICsgMSk7IHAuc2V0WFlaKGkgKyAxLCBwLmdldFgoaSArIDIpLCBwLmdldFkoaSArIDIpLCBwLmdldFooaSArIDIpKTsgcC5zZXRYWVooaSArIDIsIHgxXywgeTFfLCB6MV8pOyB9IH1cbiAgbC5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gbWVyZ2VHZW9zKFtsLCByXSk7XG59XG5cbi8qKiBCaW5kIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgdG8gYSBtYXRlcmlhbCBhcyBtYXAgKGFuZCBidW1wKSwgbGVhdmluZyB0aGUgdGV4dHVyZWxlc3NcbiAqICBkZWNsYXJhdGlvbiBpbnRhY3Q6IG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQsIHRoZSBtZWFzdXJlZCBjb2xvdXIgc3RheXMgdGhlXG4gKiAgbXVsdGlwbGljYW5kLCBhbmQgdGhlIHdob2xlIHRoaW5nIGNvc3RzIG9uZSBjYW52YXMuICovXG5mdW5jdGlvbiBiaW5kVGlsZShtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsLCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsLCBidW1wID0gMCk6IHZvaWQge1xuICBpZiAoIXRleCkgcmV0dXJuO1xuICBtYXQubWFwID0gdGV4O1xuICBpZiAoYnVtcCA+IDApIHsgbWF0LmJ1bXBNYXAgPSB0ZXg7IG1hdC5idW1wU2NhbGUgPSBidW1wOyB9XG4gIG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cblxuLyoqXG4gKiBBIERSQVBFRCBTSEVFVDogYGhlaWdodHNbal1baV1gIGlzIHRoZSB0b3Agc3VyZmFjZSBhdCB4ID0geDAuLngxIChpIG92ZXIgbngpIGFuZCB6ID0gejAuLnoxIChqIG92ZXJcbiAqIG56KTsgdGhlIHNoZWV0IGlzIGB0YCB0aGljay4gVG9wIGFuZCB1bmRlcnNpZGUgYXJlIHNtb290aC1zaGFkZWQgZ3JpZHMsIHRoZSBmb3VyIGVkZ2VzIGFyZSBmbGF0XG4gKiBzdHJpcHMgd291bmQgb3V0d2FyZC4gQSB0YXJwIGNhbm9weSBpcyBhIHJpZGdlIGxpbmUgbWludXMgdGhlIHNhZyBiZXR3ZWVuIGl0cyBwb2xlcyBtaW51cyB0aGVcbiAqIGRyb29wIG9mIGl0cyBmcmVlIGVkZ2VzIC0tIGNsb3RoLCB3aGVyZSBhIHNsYWIgcmVhZHMgYXMgYSBwYWludGVkIGJveC5cbiAqL1xuZnVuY3Rpb24gc2hlZXQoczogYW55KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBueDogbnVtYmVyID0gcy5ueCwgbno6IG51bWJlciA9IHMubnosIEhoOiBudW1iZXJbXVtdID0gcy5oZWlnaHRzLCB0OiBudW1iZXIgPSBzLnQgPz8gMC4wMTI7XG4gIGNvbnN0IFggPSAoaTogbnVtYmVyKSA9PiBzLngwICsgKHMueDEgLSBzLngwKSAqIGkgLyBueDtcbiAgLy8gYHpzYCBnaXZlcyB0aGUgeiBTVEFUSU9OUyBleHBsaWNpdGx5IGluc3RlYWQgb2YgZGl2aWRpbmcgejAuLnoxIGV2ZW5seS4gQSByb29mIHdob3NlIGVhdmUgYW5kXG4gIC8vIHJha2Ugd2FudCBhIG5hcnJvdyBydXN0ZWQgYmFuZCBuZWVkcyByb3dzIDAuMTAgbSBpbiBmcm9tIHRoZSBlZGdlLCBhbmQgcmVhY2hpbmcgdGhhdCBieSByYWlzaW5nXG4gIC8vIG56IGFsb25lIHdvdWxkIG11bHRpcGx5IHRoZSB3aG9sZSBncmlkIC0tIDEwNCBmbHV0ZSBjb2x1bW5zIGlzIHdoYXQgbWFrZXMgYSByb3cgZXhwZW5zaXZlLlxuICBjb25zdCBaUzogbnVtYmVyW10gfCBudWxsID0gQXJyYXkuaXNBcnJheShzLnpzKSA/IHMuenMgOiBudWxsO1xuICBjb25zdCBaID0gKGo6IG51bWJlcikgPT4gKFpTID8gWlNbal0gOiBzLnowICsgKHMuejEgLSBzLnowKSAqIGogLyBueik7XG4gIGNvbnN0IGdyaWQgPSAoeU9mZjogbnVtYmVyLCBmbGlwOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCB1djogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDw9IG54OyBpKyspIHsgcG9zLnB1c2goWChpKSwgSGhbal1baV0gKyB5T2ZmLCBaKGopKTsgdXYucHVzaChpIC8gbngsIGogLyBueik7IH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDwgbng7IGkrKykge1xuICAgICAgY29uc3QgYSA9IGogKiAobnggKyAxKSArIGksIGIgPSBhICsgMSwgYyA9IGEgKyBueCArIDEsIGQgPSBjICsgMTtcbiAgICAgIGlmIChmbGlwKSBpZHgucHVzaChhLCBiLCBjLCBiLCBkLCBjKTsgZWxzZSBpZHgucHVzaChhLCBjLCBiLCBiLCBjLCBkKTtcbiAgICB9XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvcywgMykpO1xuICAgIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gICAgZy5zZXRJbmRleChpZHgpOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiBnO1xuICB9O1xuICAvLyBgaGV4VG9wYCAvIGBoZXhVbmRlcmA6IGEgY29sb3VyIGF0dHJpYnV0ZSB3cml0dGVuIHBlciBncmlkLCBzbyBhIHRhcnAgY2FuIGJlIGJsdWUgb24gdG9wIGFuZFxuICAvLyBvcmFuZ2UgdW5kZXJuZWF0aCBvbiBPTkUgbWF0ZXJpYWwgYW5kIE9ORSBkcmF3IGNhbGwuIEEgY29tcG9uZW50IHRpbnQgY2Fubm90IGRvIGl0IC0tIHRoZSB0d29cbiAgLy8gc3VyZmFjZXMgYXJlIG1pbGxpbWV0cmVzIGFwYXJ0IGluIHksIHNvIG5vIGF4aXMgYmxlbmQgc2VwYXJhdGVzIHRoZW0gLS0gYW5kIGEgc2Vjb25kIHNoZWV0XG4gIC8vIHdvdWxkIGRvdWJsZSB0aGUgcm9vZidzIHRyaWFuZ2xlcyBmb3IgYSBjb2xvdXIuIE9taXR0ZWQsIHRoZSBnZW9tZXRyeSBpcyB1bnRpbnRlZCBhcyBiZWZvcmUuXG4gIGNvbnN0IHBhaW50ID0gKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBoZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCwgYyA9IG5ldyBUSFJFRS5Db2xvcihoZXgpLCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7IH1cbiAgICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpOyByZXR1cm4gZztcbiAgfTtcbiAgLy8gYGhleEdyaWRbal1baV1gIGlzIGEgY29sb3VyIFBFUiBUT1AtR1JJRCBWRVJURVgsIGNvbXB1dGVkIGF0IGVtaXQgdGltZSAtLSB3aGljaCBpcyB0aGUgb25seSB3YXlcbiAgLy8gdG8gcHV0IGEgbWFyayBhdCBhIGtub3duIHBsYWNlIG9uIHRoZSBzaGVldC4gQSBjYW52YXMgdGlsZSByZXBlYXRzIGJ5IHdvcmxkIHBvc2l0aW9uIGFuZCBrbm93c1xuICAvLyBub3RoaW5nIGFib3V0IHdoZXJlIHRoZSBlYXZlIGlzOyBgaGV4VG9wYCBpcyBvbmUgZmxhdCB0b25lIGZvciB0aGUgd2hvbGUgc3VyZmFjZS4gVGhpcyBpcyB3aGF0XG4gIC8vIGNhcnJpZXMgdGhlIHJ1c3RlZCBiYW5kIGFsb25nIHRoZSBlYXZlIGFuZCB0aGUgcmFrZXMsIGFuZCB0aGUgc3RhaW5pbmcgYmVzaWRlIGVhY2ggc2hlZXQgbGFwLlxuICBjb25zdCBwYWludEdyaWQgPSAoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIEhHOiBudW1iZXJbXVtdKSA9PiB7XG4gICAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50LCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKSwgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgIGxldCBrID0gMDtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8PSBueDsgaSsrKSB7IGMuc2V0SGV4KEhHW2pdW2ldKTsgY29sW2srK10gPSBjLnI7IGNvbFtrKytdID0gYy5nOyBjb2xbaysrXSA9IGMuYjsgfVxuICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7IHJldHVybiBnO1xuICB9O1xuICBjb25zdCB0b3AwID0gZ3JpZCgwLCBmYWxzZSksIHVuZDAgPSBncmlkKC10LCB0cnVlKTtcbiAgY29uc3QgcGFydHMgPSBzLmhleEdyaWQgIT09IHVuZGVmaW5lZFxuICAgID8gW3BhaW50R3JpZCh0b3AwLCBzLmhleEdyaWQpLCBwYWludCh1bmQwLCBzLmhleFVuZGVyID8/IDB4ZmZmZmZmKV1cbiAgICA6IHMuaGV4VW5kZXIgIT09IHVuZGVmaW5lZFxuICAgICAgPyBbcGFpbnQodG9wMCwgcy5oZXhUb3AgPz8gMHhmZmZmZmYpLCBwYWludCh1bmQwLCBzLmhleFVuZGVyKV1cbiAgICAgIDogW3RvcDAsIHVuZDBdO1xuICAvLyBlZGdlIHN0cmlwczogZWFjaCBxdWFkIGZyb20gdGhlIHRvcCBlZGdlIGRvd24gdG8gdGhlIHVuZGVyc2lkZSwgd291bmQgc28gaXRzIG5vcm1hbCBmYWNlcyBgb3V0YFxuICBjb25zdCBzdHJpcCA9IChwdHM6IG51bWJlcltdW11bXSwgb3V0OiBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXY6IG51bWJlcltdID0gW107XG4gICAgZm9yIChjb25zdCBbcDAsIHAxXSBvZiBwdHMpIHtcbiAgICAgIGNvbnN0IHEwID0gcDAsIHExID0gcDEsIHEyID0gW3AxWzBdLCBwMVsxXSAtIHQsIHAxWzJdXSwgcTMgPSBbcDBbMF0sIHAwWzFdIC0gdCwgcDBbMl1dO1xuICAgICAgY29uc3QgZTEgPSBbcTFbMF0gLSBxMFswXSwgcTFbMV0gLSBxMFsxXSwgcTFbMl0gLSBxMFsyXV0sIGUyID0gW3EyWzBdIC0gcTBbMF0sIHEyWzFdIC0gcTBbMV0sIHEyWzJdIC0gcTBbMl1dO1xuICAgICAgY29uc3QgbiA9IFtlMVsxXSAqIGUyWzJdIC0gZTFbMl0gKiBlMlsxXSwgZTFbMl0gKiBlMlswXSAtIGUxWzBdICogZTJbMl0sIGUxWzBdICogZTJbMV0gLSBlMVsxXSAqIGUyWzBdXTtcbiAgICAgIGNvbnN0IHRyaSA9IG5bMF0gKiBvdXRbMF0gKyBuWzFdICogb3V0WzFdICsgblsyXSAqIG91dFsyXSA+PSAwID8gW3EwLCBxMSwgcTIsIHEwLCBxMiwgcTNdIDogW3EwLCBxMiwgcTEsIHEwLCBxMywgcTJdO1xuICAgICAgZm9yIChjb25zdCBxIG9mIHRyaSkgeyBwb3MucHVzaChxWzBdLCBxWzFdLCBxWzJdKTsgdXYucHVzaCgwLCAwKTsgfVxuICAgIH1cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zLCAzKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiBnO1xuICB9O1xuICBjb25zdCB0b3AgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IFtYKGkpLCBIaFtqXVtpXSwgWihqKV07XG4gIGNvbnN0IGUwOiBudW1iZXJbXVtdW10gPSBbXSwgZTE6IG51bWJlcltdW11bXSA9IFtdLCBlMjogbnVtYmVyW11bXVtdID0gW10sIGUzOiBudW1iZXJbXVtdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBueDsgaSsrKSB7IGUwLnB1c2goW3RvcChpLCAwKSwgdG9wKGkgKyAxLCAwKV0pOyBlMS5wdXNoKFt0b3AoaSwgbnopLCB0b3AoaSArIDEsIG56KV0pOyB9XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbno7IGorKykgeyBlMi5wdXNoKFt0b3AoMCwgaiksIHRvcCgwLCBqICsgMSldKTsgZTMucHVzaChbdG9wKG54LCBqKSwgdG9wKG54LCBqICsgMSldKTsgfVxuICBjb25zdCBlZGdlcyA9IFtzdHJpcChlMCwgWzAsIDAsIC0xXSksIHN0cmlwKGUxLCBbMCwgMCwgMV0pLCBzdHJpcChlMiwgWy0xLCAwLCAwXSksIHN0cmlwKGUzLCBbMSwgMCwgMF0pXTtcbiAgLy8gVGhlIHJpbSBpcyB0aGUgc2VhbSBiZXR3ZWVuIHRoZSB0d28gZmFjZXMsIHNvIGl0IHRha2VzIHRoZSBVTkRFUiBjb2xvdXI6IG9uIGEgZHJhcGVkIHRhcnAgdGhlXG4gIC8vIGVkZ2UgaXMgd2hhdCBhIHZpZXdlciBzdGFuZGluZyBiZXNpZGUgaXQgYWN0dWFsbHkgc2VlcywgYW5kIGl0IGlzIHRoZSBsaW5pbmcsIG5vdCB0aGUgdG9wLiBPbiBhXG4gIC8vIHJvb2YgZGVjayBpdCBpcyB0aGUgZmx1dGVkIGVhdmUsIHdoaWNoIGlzIHdoZXJlIHRoZSBydXN0IGlzLCBzbyBgaGV4UmltYCBvdmVycmlkZXMgaXQuXG4gIGNvbnN0IHJpbUhleCA9IHMuaGV4UmltID8/IHMuaGV4VW5kZXI7XG4gIHBhcnRzLnB1c2goLi4uKHJpbUhleCAhPT0gdW5kZWZpbmVkID8gZWRnZXMubWFwKChnKSA9PiBwYWludChnLCByaW1IZXgpKSA6IGVkZ2VzKSk7XG4gIHJldHVybiBtZXJnZUdlb3MocGFydHMpO1xufVxuXG4vKipcbiAqIFdFQVRIRVJFRCBQQUlOVCBvbiBhIHN0ZWVsIGNvbnRhaW5lcjogb25lIHNlYW1sZXNzIG11bHRpcGxpZXIgdGlsZSBjYXJyeWluZyBjbGVhbiBwYWludCwgcnVzdFxuICogYW5kIGNoYWxrZWQgYmxvb20gdG9nZXRoZXIuXG4gKlxuICogVGhlIHRocmVlIHRvbmVzIGNhbm5vdCByaWRlIGEgcGxhaW4gbXVsdGlwbHkgb3ZlciB0aGUgY2xlYW4gcGFpbnQsIGJlY2F1c2UgYSBjaGFsayBibG9vbSBpc1xuICogQlJJR0hURVIgdGhhbiB0aGUgcGFpbnQgaXQgc2l0cyBvbiBpbiB0d28gY2hhbm5lbHMgLS0gYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4uIFNvIHRoZSB2ZXJ0ZXhcbiAqIGNvbG91ciBpcyBSRS1CQVNFRCB0byBhbiBlbnZlbG9wZSBhYm92ZSBldmVyeSB0b25lIHRoZSB0aWxlIGhhcyB0byByZWFjaCAoYG8uYmFzZWAgaXMgdGhlIGNsZWFuXG4gKiBwYWludCdzIG93biBtdWx0aXBsaWVyIGFnYWluc3QgdGhhdCBlbnZlbG9wZSwgYW5kIGl0IGlzIHdoYXQgbW9zdCBvZiB0aGUgdGlsZSBpcyBmaWxsZWQgd2l0aCksXG4gKiBleGFjdGx5IGFzIHRoZSBsaWNoZW4tb24tc3RvbmUgcm91dGUgZG9lcy4gRXZlcnl0aGluZyBhZnRlciB0aGUgZmlsbCBpcyBkcmF3biBzb3VyY2Utb3ZlciBpblxuICogYWJzb2x1dGUgbXVsdGlwbGllciBzcGFjZSwgc28gYSBtYXJrIG1heSBsYW5kIGVpdGhlciBzaWRlIG9mIGNsZWFuLlxuICpcbiAqIE9yZGVyIG1hdHRlcnMgYW5kIGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gd2VhdGhlcmluZyBhbmQgY2Ftb3VmbGFnZTogYSBzb2Z0IGNsb3VkeSBkcmlmdFxuICogZmlyc3QsIHRoZW4gdGhlIHJ1c3QgYXMgY2x1c3RlcmVkIGdyYW51bGFyIHBhdGNoZXMgcmF0aGVyIHRoYW4gaGFyZCBibG90Y2hlcywgdGhlbiB0aGUgcnVucyBpdFxuICogbGVhdmVzIEJFTE9XIGl0c2VsZiwgdGhlbiB0aGUgY2hhbGsgYmxvb21zLCB0aGVuIGEgZmluZSBncmFpbiBvdmVyIHRoZSBsb3QuXG4gKi9cbmZ1bmN0aW9uIHBhaW50VGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXSwgcnVzdCA9IG8ucnVzdCA/PyBiYXNlLCBjaGFsayA9IG8uY2hhbGsgPz8gYmFzZTtcbiAgICBjb25zdCBydW4gPSBvLnJ1biA/PyBydXN0O1xuICAgIC8vIHdyYXAgZXZlcnkgbWFyayB0aHJlZSB3YXlzIHNvIG5vdGhpbmcgaXMgY3V0IGJ5IHRoZSB0aWxlIGVkZ2VcbiAgICBjb25zdCB3cmFwID0gKGRyYXc6IChkeDogbnVtYmVyLCBkeTogbnVtYmVyKSA9PiB2b2lkKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgZHJhdyhkeCwgZHkpO1xuICAgIH07XG4gICAgY29uc3QgYmxvYiA9IChjOiBudW1iZXJbXSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgYTogbnVtYmVyLCByeSA9IDEpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihjKX0sJHthfSlgKTsgZy5hZGRDb2xvclN0b3AoMC41NSwgYHJnYmEoJHtyZ2IoYyl9LCR7YSAqIDAuNDV9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IoYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogcnksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgfTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG5cbiAgICAvLyAxLiBjbG91ZHkgZHJpZnQ6IGJyb2FkLCB2ZXJ5IHNvZnQsIGJhcmVseSBvZmYgY2xlYW4gLS0gd2hhdCBzdG9wcyB0aGUgZmxhdCBhcmVhcyByZWFkaW5nIGFzIHBhaW50IGNoaXBzIG9uIHBsYXN0aWNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmRyaWZ0ID8/IDE0KTsgaSsrKSB7XG4gICAgICBjb25zdCBjID0gcm5kKCkgPCAwLjUgPyBydXN0IDogY2hhbGs7XG4gICAgICBibG9iKGMsIHJuZCgpICogcywgcm5kKCkgKiBzLCBzICogKDAuMTggKyBybmQoKSAqIDAuMzApICogKG8uZHJpZnRTY2FsZSA/PyAxKSwgMC4wNSArIHJuZCgpICogMC4wNywgMC42ICsgcm5kKCkgKiAwLjgpO1xuICAgIH1cblxuICAgIC8vIDIuIHJ1c3Q6IGNsdXN0ZXJzLCBlYWNoIGEgc29mdCBwYXRjaCB3aXRoIGdyYW51bGFyIHNwZWNrcyBvdmVyIGl0LiBCYXJlIHN0ZWVsIGNvcnJvZGVzIGluXG4gICAgLy8gICAgZmllbGRzLCBub3QgaW4gZG90czsgYSBzcGVjayBmaWVsZCB3aXRoIG5vIHBhdGNoIHVuZGVyIGl0IHJlYWRzIGFzIGNvbmZldHRpLlxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ucnVzdENsdXN0ZXJzID8/IDE2KTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjA0ICsgcm5kKCkgKiAwLjExKSAqIChvLmNsdXN0ZXJTY2FsZSA/PyAxKTtcbiAgICAgIC8vIFRoZSBjbHVzdGVyIHBhdGNoJ3MgT1BBQ0lUWS4gVGhlIHRpbGUgaXMgY29tcG9zaXRlZCBzb3VyY2Utb3ZlciBvbiB0aGUgYmFzZSBmaWxsLCBzbyBhXG4gICAgICAvLyBjbHVzdGVyIGF0IGFscGhhIDAuMzAtMC42NSBibGVuZHMgdG8gYW4gaW50ZXJtZWRpYXRlIHRvbmUgYW5kIG9ubHkgdGhlIHNwZWNrcyBvdmVyIGl0IGV2ZXJcbiAgICAgIC8vIHJlYWNoIHRoZSBhdXRob3JlZCBydXN0IC0tIHdoaWNoIGlzIHJpZ2h0IGZvciBhIHJ1c3QgQkxPT00gb24gcGFpbnRlZCBzdGVlbCBhbmQgd3JvbmcgZm9yXG4gICAgICAvLyB0aGUgYm9sZCBjaGlwcGVkIHBhdGNoZXMgYSBwZWVsaW5nIGxpZCBjYXJyaWVzLCB3aGVyZSBiYXJlIG1ldGFsIGlzIHNpbXBseSBleHBvc2VkLlxuICAgICAgLy8gRGVmYXVsdHMgYXJlIHRoZSBwcmV2aW91cyBjb25zdGFudHMgZXhhY3RseSwgc28gbm8gZXhpc3RpbmcgY2FsbGVyIGNoYW5nZXMuXG4gICAgICBibG9iKHJ1c3QsIGN4LCBjeSwgY3IsIChvLnJ1c3RBbHBoYSA/PyAwLjMwKSArIHJuZCgpICogKG8ucnVzdEFscGhhVmFyID8/IDAuMzUpLCAwLjcgKyBybmQoKSAqIDAuNik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwZWNrc1BlckNsdXN0ZXIgPz8gNDApOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkLCByID0gMC44ICsgcm5kKCkgKiAyLjQ7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihydXN0KX0sJHswLjI1ICsgcm5kKCkgKiAwLjV9KWA7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgICAvLyB0aGUgcnVuIGl0IGxlYXZlcyBiZWxvdyBpdHNlbGY6IHJ1c3QgYmxlZWRzIERPV04gYSB2ZXJ0aWNhbCBwYW5lbCBhbmQgbm93aGVyZSBlbHNlXG4gICAgICBpZiAocm5kKCkgPCAoby5ydW5DaGFuY2UgPz8gMC41NSkpIHtcbiAgICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMCwgbGVuID0gcyAqICgwLjEwICsgcm5kKCkgKiAwLjM1KTtcbiAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBjeSwgMCwgY3kgKyBsZW4pO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwkezAuMTYgKyBybmQoKSAqIDAuMTh9KWApOyBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydW4pfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgICAgd3JhcCgoZHgpID0+IGN0eC5maWxsUmVjdChjeCArIGR4ICsgKHJuZCgpIC0gMC41KSAqIGNyLCBjeSwgdywgbGVuKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gY2hhbGsgYmxvb206IGxhcmdlLCB2ZXJ5IHNvZnQsIGxvdy1jb250cmFzdC4gSXQgaXMgdGhlIHRvbmUgdGhlIHRpbGUgd2FzIHJlLWJhc2VkIGZvci5cbiAgICBjb25zdCBjc2NhbGUgPSBvLmNoYWxrU2NhbGUgPz8gMSwgY2FscGhhID0gby5jaGFsa0FscGhhID8/IDAuMzU7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5jaGFsa1BhdGNoZXMgPz8gOSk7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xMCkgKiBjc2NhbGU7XG4gICAgICBibG9iKGNoYWxrLCBjeCwgY3ksIGNyLCBjYWxwaGEgKyBybmQoKSAqIDAuMzAsIDAuNSArIHJuZCgpICogMC43KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjY7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjciAqIDEuMjU7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkICogMC43LCByID0gMSArIHJuZCgpICogMztcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKGNoYWxrKX0sJHswLjIgKyBybmQoKSAqIDAuNH0pYDtcbiAgICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA0LiB0aGUgdHdvIG1hcmtzIHRoYXQgb25seSBtYWtlIHNlbnNlIG9uY2UgdGhlIHRpbGUgaXMgSEVJR0hULWtleWVkOiBsb25nIHJ1bnMgYmxlZWRpbmcgZG93blxuICAgIC8vICAgIGZyb20gdGhlIHRvcCBlZGdlICh0aGUgdG9wIHJhaWwgaXMgd2hlcmUgd2F0ZXIgc2l0cyBhbmQgdGhlIHBhaW50IGdvZXMgZmlyc3QpIGFuZCBhIGRpcnRcbiAgICAvLyAgICBiYW5kIGFsb25nIHRoZSBib3R0b20uIEJvdGggYXJlIG5vLW9wcyBvbiBhIHdvcmxkLXNwYWNlIHRpbGUsIHdoZXJlIHRoZXJlIGlzIG5vIHVwLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8udG9wU3RyZWFrcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDE0LCBsZW4gPSBzICogKDAuMjUgKyBybmQoKSAqIDAuNTUpO1xuICAgICAgY29uc3QgYSA9IDAuMTAgKyBybmQoKSAqIDAuMjI7XG4gICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcCgwLjI1LCBgcmdiYSgke3JnYihydXN0KX0sJHthICogMC44fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1c3QpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIDAsIHcsIGxlbik7XG4gICAgfVxuICAgIGlmIChvLmdyb3VuZEJhbmQpIHtcbiAgICAgIGNvbnN0IGIgPSBvLmdyb3VuZEJhbmQsIGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gKG8uZ3JvdW5kSGVpZ2h0ID8/IDAuMjIpKSk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2J9KWApOyBnLmFkZENvbG9yU3RvcCgwLjQ1LCBgcmdiYSgke3JnYihydW4pfSwke2IgKiAwLjR9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVuKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuXG4gICAgLy8gNS4gZmluZSBncmFpbjogdGhlIHRvb3RoIG9mIGEgYnJ1c2gtcm9sbGVkIGluZHVzdHJpYWwgcGFpbnQuIE11bHRpcGx5LCBzbyBpdCBvbmx5IGRhcmtlbnMuXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAxODAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMC41ICsgcm5kKCkgKiAxLjMsIGEgPSAwLjAzICsgcm5kKCkgKiAwLjA3O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDE1MCwxNDAsMTMwLCR7YX0pYDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBIFNXRVBUIHBvbHlsaW5lIHR1YmU6IE9ORSByaW5nIG9mIGBzZWdgIHZlcnRpY2VzIHBlciBwb2ludCwgbWl0cmVkIGF0IGV2ZXJ5IGJlbmQsIGluZGV4ZWQgYW5kXG4gKiBzbW9vdGgtc2hhZGVkLiBUaGlzIGlzIG5vdCB3aGF0IGB0dWJlYCBkb2VzLCBhbmQgdGhlIGRpZmZlcmVuY2UgaXMgYSB2aXNpYmxlIGRlZmVjdCByYXRoZXIgdGhhbiBhXG4gKiByZWZpbmVtZW50LiBgdHViZWAgY2hhaW5zIGEgc2VwYXJhdGUgY3lsaW5kZXIgcGVyIHNlZ21lbnQgYW5kIEVYVEVORFMgZWFjaCBvbmUgYnkgYHIgKiAxLjJgIHNvIHRoZVxuICogam9pbnRzIGNsb3NlIC0tIHdoaWNoIGlzIGZpbmUgd2hpbGUgdGhlIHNlZ21lbnRzIGFyZSBsb25nLCBhbmQgY2F0YXN0cm9waGljIG9uIGEgdGlnaHQgY3VydmU6IGFcbiAqIDAuMTIgbSBjb3JuZXIgcmFkaXVzIHNhbXBsZWQgaW4gZml2ZSBzdGVwcyBoYXMgYSAwLjAzOCBtIGNob3JkIGFnYWluc3QgYSAwLjAyNSBtIG92ZXJsYXAsIHNvXG4gKiBjb25zZWN1dGl2ZSBjeWxpbmRlcnMgb3ZlcnNob290IGVhY2ggb3RoZXIgYnkgdHdvIHRoaXJkcyBvZiB0aGVpciBsZW5ndGggYW5kIHRoZSBiZW5kIHJlbmRlcnMgYXMgYVxuICogY3J1bXBsZWQgYWNjb3JkaW9uIG9mIHBsZWF0cy4gVGhlIGNyb3dkIGJhcnJpZXIncyByb3VuZGVkIHRvcCBjb3JuZXJzIHNoaXBwZWQgdGhhdCB3YXkuXG4gKlxuICogVGhlIGZyYW1lIGlzIHJvdGF0aW9uLW1pbmltaXNpbmcgKHBhcmFsbGVsIHRyYW5zcG9ydCksIG5vdCBGcmVuZXQ6IGEgRnJlbmV0IGZyYW1lIGZsaXBzIGl0cyBub3JtYWxcbiAqIHRocm91Z2ggYW4gaW5mbGVjdGlvbiBhbmQgdHdpc3RzIHRoZSB0dWJlLCB3aGljaCBhIFVWIG9yIGEgdmVydGV4IGNvbG91ciB0aGVuIHNob3dzIGFzIGEgc3RyaXBlXG4gKiBzcGlyYWxsaW5nIGFsb25nIGEgcmFpbCB0aGF0IGlzIG1lYW50IHRvIGJlIHN0cmFpZ2h0LiBJbnRlcmlvciBwb2ludHMgcmluZyBvbiB0aGUgQklTRUNUT1Igb2YgdGhlXG4gKiB0d28gYWRqYWNlbnQgdGFuZ2VudHMsIHdoaWNoIGlzIHRoZSBtaXRyZSBhIHJlYWwgYmVudCB0dWJlIGhhcy5cbiAqL1xuZnVuY3Rpb24gc3dlZXBUdWJlKHB0czogbnVtYmVyW11bXSwgcjogbnVtYmVyLCBzZWcgPSAxMCwgaGV4PzogbnVtYmVyLCBjYXAgPSB0cnVlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBQID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSkpO1xuICAvLyBkcm9wIHJlcGVhdGVkIHBvaW50czogYSB6ZXJvLWxlbmd0aCBzZWdtZW50IGhhcyBubyB0YW5nZW50LCBhbmQgb25lIGR1cGxpY2F0ZSBpcyBlbm91Z2ggdG9cbiAgLy8gcHV0IGEgTmFOIHRocm91Z2ggdGhlIHdob2xlIHRyYW5zcG9ydCBjaGFpblxuICBmb3IgKGxldCBpID0gUC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSBpZiAoUFtpXS5kaXN0YW5jZVRvKFBbaSAtIDFdKSA8IDFlLTcpIFAuc3BsaWNlKGksIDEpO1xuICBpZiAoUC5sZW5ndGggPCAyKSByZXR1cm4gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGNvbnN0IG4gPSBQLmxlbmd0aDtcbiAgY29uc3Qgc2VnRGlyOiBUSFJFRS5WZWN0b3IzW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSBzZWdEaXIucHVzaChQW2kgKyAxXS5jbG9uZSgpLnN1YihQW2ldKS5ub3JtYWxpemUoKSk7XG4gIC8vIHBlci1wb2ludCB0YW5nZW50OiB0aGUgc2VnbWVudCBkaXJlY3Rpb24gYXQgdGhlIGVuZHMsIHRoZSBiaXNlY3RvciBiZXR3ZWVuIHR3byBzZWdtZW50cyBpbnNpZGVcbiAgY29uc3QgVCA9IFAubWFwKChfLCBpKSA9PiBpID09PSAwID8gc2VnRGlyWzBdLmNsb25lKClcbiAgICA6IGkgPT09IG4gLSAxID8gc2VnRGlyW24gLSAyXS5jbG9uZSgpXG4gICAgOiBzZWdEaXJbaSAtIDFdLmNsb25lKCkuYWRkKHNlZ0RpcltpXSkubm9ybWFsaXplKCkpO1xuICAvLyBzZWVkIGEgbm9ybWFsIHRoYXQgaXMgbm90IHBhcmFsbGVsIHRvIHRoZSBmaXJzdCB0YW5nZW50LCB0aGVuIHRyYW5zcG9ydCBpdCBwb2ludCB0byBwb2ludFxuICBsZXQgTiA9IE1hdGguYWJzKFRbMF0ueSkgPiAwLjkgPyBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKSA6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApO1xuICBOLnN1YihUWzBdLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoTi5kb3QoVFswXSkpKS5ub3JtYWxpemUoKTtcbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgaWYgKGkgPiAwKSB7XG4gICAgICAvLyByb3RhdGUgdGhlIGNhcnJpZWQgbm9ybWFsIGJ5IHRoZSBzYW1lIHJvdGF0aW9uIHRoYXQgdGFrZXMgdGhlIHByZXZpb3VzIHRhbmdlbnQgdG8gdGhpcyBvbmVcbiAgICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhUW2kgLSAxXSwgVFtpXSk7XG4gICAgICBOLmFwcGx5UXVhdGVybmlvbihxKTtcbiAgICAgIE4uc3ViKFRbaV0uY2xvbmUoKS5tdWx0aXBseVNjYWxhcihOLmRvdChUW2ldKSkpLm5vcm1hbGl6ZSgpO1xuICAgIH1cbiAgICBjb25zdCBCID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jcm9zc1ZlY3RvcnMoVFtpXSwgTikubm9ybWFsaXplKCk7XG4gICAgLy8gYSBtaXRyZWQgcmluZyBpcyBhbiBFTExJUFNFIGluIGl0cyBvd24gcGxhbmU6IHdpZGVuIGl0IGJ5IDEvY29zKGhhbGYtYW5nbGUpIGFsb25nIHRoZSBiZW5kIHNvXG4gICAgLy8gdGhlIHN3ZXB0IHNlY3Rpb24gc3RheXMgY2lyY3VsYXIgdGhyb3VnaCB0aGUgY29ybmVyIHJhdGhlciB0aGFuIHBpbmNoaW5nIHRvIGEgd2Fpc3RcbiAgICBjb25zdCBrID0gaSA+IDAgJiYgaSA8IG4gLSAxID8gMSAvIE1hdGgubWF4KDAuNSwgc2VnRGlyW2kgLSAxXS5kb3QoVFtpXSkpIDogMTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyh0aCksIHMgPSBNYXRoLnNpbih0aCk7XG4gICAgICBwb3MucHVzaChQW2ldLnggKyAoTi54ICogYyArIEIueCAqIHMgKiBrKSAqIHIsIFBbaV0ueSArIChOLnkgKiBjICsgQi55ICogcyAqIGspICogciwgUFtpXS56ICsgKE4ueiAqIGMgKyBCLnogKiBzICogaykgKiByKTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgLy8gKGEsIGMyLCBiKSwgTk9UIChhLCBiLCBjMikuIFRoZSByaW5nIHJ1bnMgTiAtPiBCIHdpdGggQiA9IFQgeCBOLCBzbyB3aW5kaW5nIGFsb25nIHRoZSB0dWJlXG4gICAgLy8gZmlyc3QgYW5kIGFyb3VuZCBpdCBzZWNvbmQgZ2l2ZXMgYSBmYWNlIG5vcm1hbCBvZiBUIHggQiA9IC1OOiBldmVyeSB3YWxsIHRyaWFuZ2xlIGZhY2VzIElOV0FSRC5cbiAgICAvLyBCYWNrZmFjZSBjdWxsaW5nIHRoZW4gaGlkZXMgdGhlIG5lYXIgd2FsbCBhbmQgc2hvd3MgdGhlIEZBUiBvbmUsIHdoaWNoIGZvciBhIGxpdCBncmV5IHR1YmUgbG9va3NcbiAgICAvLyBhbG1vc3QgcmlnaHQgLS0gYW5kIHdyaXRlcyBpdHMgZGVwdGggb24gdGhlIGZhciBzaWRlLCBzbyBhbnl0aGluZyBwYXNzaW5nIHRocm91Z2ggdGhlIHR1YmUgZHJhd3NcbiAgICAvLyBpbiBmcm9udCBvZiBpdC4gVGhlIGZvb3Qgc3R1YnMgc3Rvb2QgcHJvdWRseSB0aHJvdWdoIHRoZSBib3R0b20gcmFpbCBiZWNhdXNlIG9mIHRoaXMsIGFuZCBpdFxuICAgIC8vIHJlYWQgYXMgYSBnZW9tZXRyeSBlcnJvciBpbiB0aGUgc3R1YiByYXRoZXIgdGhhbiBhIHdpbmRpbmcgZXJyb3IgaW4gdGhlIHN3ZWVwLlxuICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjMiA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgaWR4LnB1c2goYSwgYzIsIGIsIGEsIGQsIGMyKTtcbiAgfVxuICBpZiAoY2FwKSB7XG4gICAgLy8gRmxhdCBlbmQgZGlzY3MsIG9uIHRoZWlyIE9XTiBDT1BZIG9mIHRoZSByaW0gdmVydGljZXMuIEZhbm5pbmcgdGhlbSBvZmYgdGhlIHNpZGUgd2FsbCdzIHJpbmdcbiAgICAvLyBzaGFyZXMgdGhvc2UgdmVydGljZXMsIGFuZCBgY29tcHV0ZVZlcnRleE5vcm1hbHNgIHRoZW4gYXZlcmFnZXMgdGhlIGRpc2MncyBheGlhbCBub3JtYWwgaW50b1xuICAgIC8vIHRoZSB3YWxsJ3MgcmFkaWFsIG9uZSAtLSB3aGljaCBkb2VzIG5vdCBzaGFkZSBhIHNsaWdodGx5IHdyb25nIHJpbSwgaXQgdGlsdHMgdGhlIG5vcm1hbCBhdCBCT1RIXG4gICAgLy8gZW5kcyBvZiBhIHR3by1wb2ludCB0dWJlIGFuZCBzbyBzaGFkZXMgdGhlIFdIT0xFIHR1YmUgd3JvbmcuIFRoZSBmb290IHN0dWJzIHJlbmRlcmVkIGFzIGdsYXNzXG4gICAgLy8gdGVzdCB0dWJlcyB3aXRoIGEgYnJpZ2h0IGJhbmQgdW5kZXIgdGhlIHJhaWwsIGFuZCB0aGUgYmFuZCByZWFkIGFzIGEgc2VwYXJhdGUgb2JqZWN0IHNpdHRpbmcgb25cbiAgICAvLyBpdC4gU2FtZSBmYXVsdCwgc2FtZSBmaXgsIGFzIHRoZSBzaGFycC1jb3JuZXIgc3BsaXQgaW4gYGxhdGhlYC5cbiAgICBmb3IgKGNvbnN0IFtyaW5nLCBhdCwgZmxpcF0gb2YgW1swLCBQWzBdLCB0cnVlXSwgW24gLSAxLCBQW24gLSAxXSwgZmFsc2VdXSBhcyBbbnVtYmVyLCBUSFJFRS5WZWN0b3IzLCBib29sZWFuXVtdKSB7XG4gICAgICBjb25zdCBiYXNlID0gcG9zLmxlbmd0aCAvIDM7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7IGNvbnN0IGsgPSAocmluZyAqIHNlZyArIGopICogMzsgcG9zLnB1c2gocG9zW2tdLCBwb3NbayArIDFdLCBwb3NbayArIDJdKTsgfVxuICAgICAgY29uc3QgY2kgPSBwb3MubGVuZ3RoIC8gMzsgcG9zLnB1c2goYXQueCwgYXQueSwgYXQueik7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBiYXNlICsgaiwgYiA9IGJhc2UgKyAoaiArIDEpICUgc2VnO1xuICAgICAgICBpZiAoZmxpcCkgaWR4LnB1c2goY2ksIGIsIGEpOyBlbHNlIGlkeC5wdXNoKGNpLCBhLCBiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBnIDogdGludEdlbyhnLCBoZXgpO1xufVxuXG4vKipcbiAqIEZST05ULUFUTEFTIFVWczogZXZlcnkgdmVydGV4IHdob3NlIG5vcm1hbCBmYWNlcyArWiBhbmQgdGhhdCBsaWVzIGluc2lkZSB0aGUgYXRsYXMncyB3b3JsZFxuICogcmVjdGFuZ2xlIHRha2VzIGEgUExBTkFSICh4LCB5KSBVViBpbnRvIGEgYmFrZWQgZnJvbnQtZWxldmF0aW9uIGltYWdlLCBhbmQgZXZlcnkgb3RoZXIgdmVydGV4IGlzXG4gKiBwaW5uZWQgdG8gb25lIGNsZWFuIHRleGVsIG9mIGl0LiBBIHdhbGwtbW91bnRlZCBib3ggc2VlbiBmcm9tIHRoZSBmcm9udCBJUyBpdHMgZWxldmF0aW9uLCBzbyB0aGVcbiAqIHBsYXRlJ3Mgb3duIHByaW50ZWQgbGFiZWxzLCBzY3JldyBoZWFkcywgZ2Fza2V0IGxpbmUgYW5kIHJ1c3QgbGFuZCBleGFjdGx5IHdoZXJlIHRoZSBnZW9tZXRyeVxuICogcHV0cyB0aGVtLCBvbiBvbmUgbWF0ZXJpYWwuIGBiYXNlYCBvdmVycmlkZXMgdGhlIGZyb250IHZlcnRpY2VzJyBjb2xvdXIsIGJlY2F1c2UgdGhlIGF0bGFzIGlzIGFcbiAqIHJhdGlvIG92ZXIgb25lIHJlZmVyZW5jZSB0b25lIGFuZCB0aGUgcGVyLXBhcnQgdGludHMgb25seSBiZWxvbmcgb24gdGhlIGZhY2VzIHRoZSBhdGxhcyBkb2VzIG5vdFxuICogcmVhY2guIGB5TWluYCBrZWVwcyBwYXJ0cyBoYW5naW5nIGJlbG93IHRoZSBhdGxhcyAoYSBjb25kdWl0IHN0dWIpIG91dCBvZiBpdC5cbiAqL1xuZnVuY3Rpb24gZnJvbnRBdGxhc1VWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGE6IGFueSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBjb25zdCBjb2wgPSBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSB8IG51bGw7XG4gIGNvbnN0IGJhc2UgPSBhLmJhc2UgIT09IHVuZGVmaW5lZCA/IG5ldyBUSFJFRS5Db2xvcihhLmJhc2UpIDogbnVsbDtcbiAgY29uc3QgbWluTnogPSBhLm1pbk56ID8/IDAuNztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB4ID0gcC5nZXRYKGkpLCB5ID0gcC5nZXRZKGkpO1xuICAgIGNvbnN0IGZyb250ID0gbnJtLmdldFooaSkgPiBtaW5OeiAmJiB4ID49IGEueDAgJiYgeCA8PSBhLngxICYmIHkgPj0gKGEueU1pbiA/PyBhLnkxKSAmJiB5IDw9IGEueTA7XG4gICAgaWYgKGZyb250KSB7XG4gICAgICB1dltpICogMl0gPSAoeCAtIGEueDApIC8gKGEueDEgLSBhLngwKTtcbiAgICAgIHV2W2kgKiAyICsgMV0gPSAoeSAtIGEueTEpIC8gKGEueTAgLSBhLnkxKTtcbiAgICAgIGlmIChiYXNlICYmIGNvbCkgY29sLnNldFhZWihpLCBiYXNlLnIsIGJhc2UuZywgYmFzZS5iKTtcbiAgICB9IGVsc2UgeyB1dltpICogMl0gPSBhLnBpblswXTsgdXZbaSAqIDIgKyAxXSA9IGEucGluWzFdOyB9XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2wpIGNvbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIHJldHVybiBnZW87XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmZW5jZSBoZWxwZXJzICovXG5cbi8qKiBQYW5lbCBVVnM6IHUgYWxvbmcgd29ybGQgWCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB2IHdvcmxkIEhFSUdIVCBvdmVyIHRoZSBzYW1lLCByZWdhcmRsZXNzIG9mIHRoZVxuICogIGZhY2Ugbm9ybWFsLiBPbiBhIHRoaW4gc2xhYiB0aGlzIG1lYW5zIHRoZSBmcm9udCBhbmQgYmFjayBmYWNlcyBzaGFyZSB0aGUgc2FtZSB0aWxlIHBsYWNlbWVudFxuICogIGFuZCB0aGUgZWRnZXMgdGFrZSBhIHNsaXZlciBvZiBpdDsgYSBncmltZSB3YXNoIHRoYXQga2V5cyBvbiB2IHRoZW4gbGFuZHMgYXQgdGhlIHNhbWUgaGVpZ2h0IG9uXG4gKiAgZXZlcnkgZmFjZSwgd2hpY2ggaXMgd2hhdCByYWluIGFuZCBhbGdhZSBkby4gKi9cbmZ1bmN0aW9uIHBhbmVsVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlciwgcm90ID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICAvLyBgcm90YCBzd2FwcyB0aGUgYXhlcyBzbyBhIHRpbGUgb2YgVkVSVElDQUwgc3RyaXBzIHJlYWRzIGhvcml6b250YWwgLS0gdGhlIHdvdmVuIGJhbmRzIG9mIGFcbiAgLy8gYmFtYm9vIHBhbmVsIGFnYWluc3QgaXRzIHZlcnRpY2FsIG11bGxpb25zLCBvbmUgdGlsZSwgb25lIG1hdGVyaWFsLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHUgPSByb3QgPyBwLmdldFkoaSkgOiBwLmdldFgoaSksIHYgPSByb3QgPyBwLmdldFgoaSkgOiBwLmdldFkoaSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQSBzcXVhcmUgcHlyYW1pZCBTUElLRTogYmFzZSB3IHggdyBhdCBgYXRgLCBhcGV4IGggYWJvdmUuIEEgcGlja2V0J3Mgc3BlYXIgcG9pbnQsIGEgcGllciBjYXAuICovXG5mdW5jdGlvbiBzcGlrZShhdDogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkNvbmVHZW9tZXRyeSh3IC8gTWF0aC5TUVJUMiwgaCwgNCwgMSwgZmFsc2UpO1xuICBnLnJvdGF0ZVkoTWF0aC5QSSAvIDQpO1xuICBnLnRyYW5zbGF0ZShhdFswXSwgYXRbMV0gKyBoIC8gMiwgYXRbMl0pO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEdSSU1FIHRpbGU6IGEgbXVsdGlwbGllciBvZiB3aGl0ZSB3aXRoIChhKSBhIGRhcmsgd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsXG4gKiAoYikgdmVydGljYWwgcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcCwgKGMpIHNvZnQgZGFyayBibG90Y2hlcywgKGMyKSBicm9hZCBDTE9VRCBtb3R0bGluZyxcbiAqIChkKSBzd2VwdCB0eXJlIFNDVUZGUyBvdmVyIGFcbiAqIGhlaWdodCBiYW5kLCAoZSkgdmVydGljYWwgZm9ybSBTRUFNUywgKGYpIFBJTkhPTEVTIC0tIHRoZSBhaXIgYnViYmxlcyBvZiBhIHByZWNhc3QgZmFjZSwgKGcpXG4gKiBvcHRpb25hbCBncmVlbiBtb3NzL2FsZ2FlIGJsb2JzIGNvbmNlbnRyYXRlZCBpbiB0aGUgYm90dG9tIGJhbmQsIGFuZCAoaCkgZmluZSBncmFpbi4gKGQpLCAoZSlcbiAqIGFuZCAoZikgYXJlIG9mZiB1bmxlc3MgYXNrZWQgZm9yLCBzbyBub3RoaW5nIGFscmVhZHkgZW1pdHRlZCBjaGFuZ2VzLiBFdmVyeSBjb2xvdXIgaXMgYSBmcmFjdGlvbiBvZiB0aGVcbiAqIG1hdGVyaWFsJ3MgbWVhc3VyZWQgYWxiZWRvLCBhbmQgdGhlIGRhcmtlc3QgY29yZSBpcyBjbGFtcGVkIHNvIG5vdGhpbmcgb24gYSB3aGl0ZSBvciBjcmVhbVxuICogc3VyZmFjZSBkcm9wcyB0b3dhcmQgdGhlIGhvbGUgZ2F0ZSdzIGx1bWEgNTguXG4gKi9cbmZ1bmN0aW9uIGdyaW1lVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCB3YXNoID0gby53YXNoID8/IFswLjYyLCAwLjYyLCAwLjU4XSwgd2FzaEEgPSBvLndhc2hBbHBoYSA/PyAwLjcsIGNvdiA9IG8uY292ZXJhZ2UgPz8gMC4zO1xuICAgIC8vIGBiYXNlYCBpcyB0aGUgdG9uZSB0aGUgVU4tZ3JpbWVkIHBhcnQgb2YgdGhlIHRpbGUgY2FycmllcywgZGVmYXVsdGluZyB0byB3aGl0ZSAtLSBpLmUuIHRvXG4gICAgLy8gXCJsZWF2ZSB0aGUgdmVydGV4IGNvbG91ciBhbG9uZVwiLCB3aGljaCBpcyBldmVyeSBleGlzdGluZyBjYWxsZXIuIEl0IGV4aXN0cyBmb3IgRU5WRUxPUEVcbiAgICAvLyBSRS1CQVNJTkc6IGEgbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLCBzbyBhIHBhcnQgdGhhdCBtdXN0IHJlYWQgY2xlYW4gb3JhbmdlIGluIG9uZSBwbGFjZSBhbmRcbiAgICAvLyBncmV5IHJvYWQgZ3JpbWUgaW4gYW5vdGhlciBjYW5ub3QgZG8gaXQgZnJvbSBhIHNpbmdsZSB2ZXJ0ZXggY29sb3VyLCBiZWNhdXNlIHRoZSBncmltZSBpc1xuICAgIC8vIEhJR0hFUiBpbiBibHVlIHRoYW4gdGhlIG9yYW5nZSBpcy4gVGhlIHZlcnRleCBjb2xvdXIgYmVjb21lcyB0aGUgcGVyLWNoYW5uZWwgbWF4aW11bSBvZiBib3RoXG4gICAgLy8gYW5kIHRoaXMgZmlsbCBwYWludHMgdGhlIGNsZWFuIHRvbmUgYmFjayBvdXQgb2YgaXQuXG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICAvLyByYWluIHN0cmVha3MgZnJvbSB0aGUgdG9wXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zdHJlYWtzID8/IDI2KTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDEyLCBsZW4gPSBzICogKDAuMTUgKyBybmQoKSAqIDAuNiksIGEgPSAwLjA1ICsgcm5kKCkgKiAwLjEyO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgbGVuKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBjdHguZmlsbFJlY3QoeCwgMCwgdywgbGVuKTsgY3R4LmZpbGxSZWN0KHggLSBzLCAwLCB3LCBsZW4pO1xuICAgIH1cbiAgICAvLyBncm91bmQgd2FzaC4gYHdhc2hGbGF0YCBtYWtlcyBpdCBVTklGT1JNIGluc3RlYWQgb2YgYSBib3R0b20tdXAgZ3JhZGllbnQsIHdoaWNoIGlzIHdoYXQgYVxuICAgIC8vIGhvcml6b250YWwgc2xhYiBuZWVkczogYSBncmFkaWVudCBrZXllZCB0byB0aGUgdGlsZSdzIHYgbWFwcyBzdHJhaWdodCBhY3Jvc3MgYSBmbGF0IGZhY2UgYW5kXG4gICAgLy8gc3BsaXRzIGl0IGludG8gYSBwYWxlIGhhbGYgYW5kIGEgZGFyayBoYWxmIHdpdGggYSBoYXJkIGVkZ2UgYmV0d2VlbiB0aGVtLiBEZWZhdWx0ZWQgb2ZmLCBzb1xuICAgIC8vIGV2ZXJ5IHByb3AgdGhhdCBkb2VzIG5vdCBhc2sgZm9yIGl0IGlzIHVuY2hhbmdlZC5cbiAgICBpZiAoby53YXNoRmxhdCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292KSk7XG4gICAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQX0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEEgKiAwLjQ1fSlgKTsgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIH1cbiAgICAvLyBibG90Y2hlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uYmxvdGNoZXMgPz8gNDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuNikgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDYsIGEgPSAwLjA4ICsgcm5kKCkgKiAwLjM7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBSVUJTOiBuZWFyLWJsYWNrIHR5cmUgc21lYXJzIGxvdyBvbiB0aGUgdGlsZS4gRGlzdGluY3QgZnJvbSBgYmxvdGNoZXNgLCB3aGljaCBkYXJrZW4gdG93YXJkXG4gICAgLy8gdGhlIGdyaW1lIHRvbmU6IGEgdHlyZSBydWIgaXMgYSBkaWZmZXJlbnQgY29sb3VyIGFuZCBhIGRpZmZlcmVudCBzaGFwZSAtLSBsb25nLCBsb3csIGFuZCBtdWNoXG4gICAgLy8gZGFya2VyIHRoYW4gYW55dGhpbmcgd2VhdGhlciBkb2VzLiBEZWZhdWx0IDAsIHNvIG5vIGV4aXN0aW5nIGNhbGxlciBjaGFuZ2VzLlxuICAgIGlmIChvLnJ1YnMpIHtcbiAgICAgIGNvbnN0IHJ1YiA9IG8ucnViID8/IFswLjMwLCAwLjI4LCAwLjMwXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5ydWJzOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgKiAoMC42MCArIHJuZCgpICogMC4zOCk7XG4gICAgICAgIGNvbnN0IHcgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMjIpLCBoID0gcyAqICgwLjAwNiArIHJuZCgpICogMC4wMzApLCBhID0gMC4yMCArIHJuZCgpICogMC40NTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoeCAtIHcgLyAyLCAwLCB4ICsgdyAvIDIsIDApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnViKX0sMClgKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtyZ2IocnViKX0sJHthfSlgKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1Yil9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCAtIHcgLyAyICsgZHgsIHkgLSBoIC8gMiwgdywgaCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFNDVUZGUzogc29mdCBwYXRjaGVzIHdoZXJlIHRoZSB3YXNoIGlzIGVyYXNlZCBiYWNrIHRvd2FyZCB3aGl0ZS4gVGhlIHRpbGUgaXMgY29tcG9zaXRlZFxuICAgIC8vIG11bHRpcGx5LW9uLXdoaXRlLCBzbyBwYWludGluZyB3aGl0ZSBzb3VyY2Utb3ZlciBpcyBwYWludGluZyBcIm5vdCBkYXJrZW5lZFwiIC0tIHdoaWNoIGlzIHRoZVxuICAgIC8vIG9ubHkgd2F5IGEgbXVsdGlwbHkgdGlsZSBjYW4gcHV0IFBBTEUgd2VhciBvbiBhIGRhcmsgYmFzZSB3aXRob3V0IHJlLWJhc2luZyB0aGUgZW52ZWxvcGVcbiAgICAvLyB0d2ljZS4gRGVmYXVsdGVkIHRvIG5vbmUuXG4gICAgaWYgKG8uc2N1ZmZzKSB7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5zY3VmZnM7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAoby5zY3VmZlNjYWxlID8/IDAuMTQpKTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsMjU1LDI1NSwke28uc2N1ZmZBbHBoYSA/PyAwLjU1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTUsMjU1LDApJyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIH1cblxuICAgIC8vIENMT1VEUzogYnJvYWQsIHZlcnkgc29mdCBwYXRjaGVzIG92ZXIgdGhlIFdIT0xFIHRpbGUuIEEgY2FzdCBmYWNlIGlzIG1vdHRsZWQgYXQgdGhlIHNjYWxlIG9mXG4gICAgLy8gdGVucyBvZiBjZW50aW1ldHJlcyAtLSBwb3VyIGxpbmVzLCBkYW1wLCB0aGUgbW91bGQncyBvd24gaGlzdG9yeSAtLSBhbmQgdGhhdCBsb3cgZnJlcXVlbmN5IGlzXG4gICAgLy8gbW9zdCBvZiB3aGF0IHNlcGFyYXRlcyBhIHJlbmRlcmVkIHN0YW5kYXJkIGRldmlhdGlvbiBvZiA2IGZyb20gdGhlIHBsYXRlJ3MgMTIuIFNtYWxsIG1hcmtzXG4gICAgLy8gY2Fubm90IHN1cHBseSBpdDogYXQgcHJvcCBkaXN0YW5jZSBhIHRob3VzYW5kIG9mIHRoZW0gYXZlcmFnZSBiYWNrIG91dCB0byBvbmUgZmxhdCB0b25lLlxuICAgIC8vIEtlZXAgdGhlbSBTTUFMTCByZWxhdGl2ZSB0byB0aGUgdGlsZSwgdGhvdWdoLiBBIHRpbGUgdGhhdCByZXBlYXRzIHR3byBvciB0aHJlZSB0aW1lcyBhY3Jvc3MgYVxuICAgIC8vIHByb3AgcmVwZWF0cyBpdHMgY2xvdWRzIHRvbywgYW5kIGEgY2xvdWQgdGhlIHNpemUgb2YgYSB0aGlyZCBvZiB0aGUgdGlsZSB0aGVuIHJlYWRzIGFzXG4gICAgLy8gY2Ftb3VmbGFnZSB3aXRoIGEgdmlzaWJsZSBzZWFtIC0tIHRoZSBzYW1lIGZhaWx1cmUgYXMgaGFyZCBibG90Y2hlcywgb25lIG9jdGF2ZSBsb3dlci5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmNsb3VkcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB2ID0gby5jbG91ZCA/PyBbMC44NiwgMC44NiwgMC44NF07XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqIChvLmNsb3VkUiA/PyAwLjE2KSAqICgwLjQgKyBybmQoKSAqIDEuNCksIGEgPSAoby5jbG91ZEFscGhhID8/IDAuMTIpICogKDAuNCArIHJuZCgpKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBTQ1VGRiBhcmNzOiB0aGUgdHlyZSBhbmQgYnVtcGVyIG1hcmtzIGEgcm9hZHNpZGUgYmFycmllciBjb2xsZWN0cyBvbiB0aGUgYmFuZCB0aGUgdHJhZmZpY1xuICAgIC8vIGFjdHVhbGx5IHJlYWNoZXMuIEJyb2FkLCBzb2Z0LCBuZWFyLWhvcml6b250YWwgc21lYXJzIHdpdGggYSBzd2VwdCBzaGFwZSAtLSBhIGJsb3RjaCByZWFkcyBhc1xuICAgIC8vIGEgc3RhaW4sIGFuZCB3aGF0IHRoZSBwbGF0ZSBjYXJyaWVzIGlzIHNvbWV0aGluZyB0aGF0IHdlbnQgcGFzdC4gYHNjdWZmQmFuZGAgaXMgYSBwYWlyIG9mXG4gICAgLy8gSEVJR0hUIGZyYWN0aW9ucyAoMCBhdCB0aGUgZ3JvdW5kKSwgc28gaXQgaXMgc3RhdGVkIGluIHRoZSBzYW1lIHRlcm1zIGFzIGBjb3ZlcmFnZWAuXG4gICAgaWYgKG8uc2N1ZmZzKSB7XG4gICAgICBjb25zdCB2ID0gby5zY3VmZiA/PyBbMC42MiwgMC42MiwgMC42NF0sIGJhbmQgPSBvLnNjdWZmQmFuZCA/PyBbMC4zMCwgMC43MF07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8uc2N1ZmZzOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcyAqICgxIC0gKGJhbmRbMF0gKyBybmQoKSAqIChiYW5kWzFdIC0gYmFuZFswXSkpKTtcbiAgICAgICAgY29uc3QgdyA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xMSksIGggPSB3ICogKDAuMDUgKyBybmQoKSAqIDAuMTApO1xuICAgICAgICBjb25zdCBhID0gKG8uc2N1ZmZBbHBoYSA/PyAwLjM0KSAqICgwLjUgKyBybmQoKSk7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICAgIGN0eC5zYXZlKCk7IGN0eC50cmFuc2xhdGUoY3ggKyBkeCwgY3kpOyBjdHgucm90YXRlKChybmQoKSAtIDAuNSkgKiAwLjQ1KTsgY3R4LnNjYWxlKDEsIGggLyB3KTtcbiAgICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCgwLCAwLCAwLCAwLCAwLCB3KTtcbiAgICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjQ1LCBgcmdiYSgke3JnYih2KX0sJHthICogMC41NX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYygwLCAwLCB3LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBGT1JNIFNFQU1TOiB0aGUgdmVydGljYWwgam9pbnQgbGluZXMgYSBwcmVjYXN0IG1vdWxkIGxlYXZlcywgb25lIHBlciB0aWxlLiBBIGRhcmsgaGFpcmxpbmUgd2l0aFxuICAgIC8vIGEgcGFsZXIgbGlwIGJlc2lkZSBpdCwgd2hpY2ggaXMgd2hhdCBhIHByb3VkIHNlYW0gbG9va3MgbGlrZSAtLSBhIHNpbmdsZSBkYXJrIGxpbmUgcmVhZHMgYXMgYVxuICAgIC8vIHNjcmF0Y2guIGBzZWFtQXRgIHBsYWNlcyBpdCBhcyBhIGZyYWN0aW9uIG9mIHRoZSB0aWxlIHNvIGl0IGRvZXMgbm90IGxhbmQgb24gdGhlIHdyYXAuXG4gICAgaWYgKG8uc2VhbXMpIHtcbiAgICAgIGNvbnN0IHYgPSBvLnNlYW0gPz8gWzAuNzIsIDAuNzEsIDAuNjhdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnNlYW1zOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQocyAqICgoby5zZWFtQXQgPz8gMC40MikgKyBpIC8gby5zZWFtcykpICUgcztcbiAgICAgICAgY29uc3Qgd3B4ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChzICogMC4wMDQpKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHYpfSwke28uc2VhbUFscGhhID8/IDAuNX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIHdweCwgcyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sJHsoby5zZWFtQWxwaGEgPz8gMC41KSAqIDAuM30pYDsgY3R4LmZpbGxSZWN0KHggKyB3cHgsIDAsIHdweCwgcyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFBJTkhPTEVTOiB0aGUgYWlyIGJ1YmJsZXMgYSBwcmVjYXN0IGZhY2UgaXMgY292ZXJlZCBpbi4gVGhleSBhcmUgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nXG4gICAgLy8gbWFyayBvZiBiYXJlIGNvbmNyZXRlIGF0IHByb3AgZGlzdGFuY2UgLS0gd2l0aG91dCB0aGVtIHRoZSBmYWNlIGlzIGEgcGFpbnRlZCBzbGFiLCB3aGljaCBpc1xuICAgIC8vIG1lYXN1cmFibGUgYXMgYSByZW5kZXJlZCBzdGFuZGFyZCBkZXZpYXRpb24gYSB0aGlyZCBvZiB0aGUgcGxhdGUncy4gU21hbGwsIGRhcmssIGFuZCBNQU5ZLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucGl0cyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB2ID0gby5waXQgPz8gWzAuNDIsIDAuNDAsIDAuMzZdO1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IChvLnBpdFIgPz8gMS42KSAqICgwLjUgKyBybmQoKSAqIDEuMyk7XG4gICAgICBjb25zdCBhID0gMC4yNSArIHJuZCgpICogMC41O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgciAqIDIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMC40LCBgcmdiYSgke3JnYih2KX0sJHthICogMC40NX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByICogMiwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIG1vc3MgLyBhbGdhZSBpbiB0aGUgYm90dG9tIGJhbmQ6IGNsdXN0ZXJlZCBzcGVja3MsIGJyaWdodGVyLXRoYW4td2FzaCBncmVlblxuICAgIGlmIChvLm1vc3MpIHtcbiAgICAgIGNvbnN0IG0gPSBvLm1vc3MsIGJhbmQgPSBvLm1vc3NCYW5kID8/IDAuMjI7XG4gICAgICAvLyBhIGZhaW50IGdyZWVuIHdhc2ggb3ZlciB0aGUgd2hvbGUgYmFuZCBmaXJzdCwgc28gdGhlIGNhcnBldHMgc2l0IGluIGRhbXAgZ3JvdW5kIHJhdGhlciB0aGFuXG4gICAgICAvLyBhcyBpc29sYXRlZCBkb3RzIG9uIGNsZWFuIHBhaW50XG4gICAgICBjb25zdCBtZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBiYW5kICogMS4zKSk7XG4gICAgICBtZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobSl9LCR7by5tb3NzV2FzaCA/PyAwLjM1fSlgKTsgbWcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKG0pfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG1nOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLm1vc3NDbHVzdGVycyA/PyAxNCk7IGsrKykge1xuICAgICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuNikgKiBzICogYmFuZCwgY3IgPSBzICogKDAuMDE1ICsgcm5kKCkgKiAwLjA0KTtcbiAgICAgICAgLy8gdGhlIGNhcnBldDogYSBzb2Z0IGJsb2IsIHRoZW4gc3BlY2tzIG92ZXIgaXQgZm9yIHRoZSB0dWZ0ZWQgZWRnZVxuICAgICAgICBjb25zdCBjZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3ksIDAsIGN4LCBjeSwgY3IpO1xuICAgICAgICBjZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobSl9LDAuNylgKTsgY2cuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2IobSl9LDAuMzUpYCk7IGNnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihtKX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNnO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCArIGR4LCBjeSwgY3IsIGNyICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQgKiAwLjYsIHIgPSAxICsgcm5kKCkgKiAzO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihtKX0sJHswLjM1ICsgcm5kKCkgKiAwLjV9KWA7XG4gICAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGdyYWluLiBgZ3JhaW5gL2BncmFpbkFscGhhYCBkZWZhdWx0IHRvIHRoZSBvcmlnaW5hbCAxNTAwIGF0IDAuMTIsIHNvIG5vIGFscmVhZHktZW1pdHRlZCBwcm9wXG4gICAgLy8gY2hhbmdlczsgYSB0aWxlIHN0cmV0Y2hlZCBvdmVyIGEgV0hPTEUgcHJvcCAodXZTY2FsZSA+IGl0cyBoZWlnaHQpIHNhbXBsZXMgb25seSB0aGUgZnJhY3Rpb25cbiAgICAvLyBvZiB0aGUgdGlsZSB3aWR0aCBoZWlnaHRVViBmb2xkcyBvbnRvIGl0LCBhbmQgbmVlZHMgdGhlIGNvdW50IHJhaXNlZCB0byBrZWVwIHRoZSBzYW1lIGRlbnNpdHkuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAxNTAwKTsgaSsrKSB7XG4gICAgICBjb25zdCBsbyA9IG8uZ3JhaW5MbyA/PyAyMDA7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHYgPSBsbyArIE1hdGgucm91bmQocm5kKCkgKiAoMjU1IC0gbG8pKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwke28uZ3JhaW5BbHBoYSA/PyAwLjEyfSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMS41LCAxLjUpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBDSEFJTi1MSU5LIHRpbGU6IGEgZGlhbW9uZCB3aXJlIGxhdHRpY2UgZHJhd24gb3BhcXVlIG92ZXIgYSBUUkFOU1BBUkVOVCBncm91bmQsIGJvdW5kIGFzIG1hcFxuICogIG9uIGFuIGFscGhhLXRlc3RlZCBtYXRlcmlhbCBzbyB0aGUgY2VsbHMgYXJlIG9wZW4uIE9uZSB0aWxlIGlzIG9uZSBkaWFtb25kIGNlbGw7IHRoZSBwYW5lJ3NcbiAqICBVVnMgcmVwZWF0IGl0IGF0IHRoZSByZWFsIG1lc2ggcGl0Y2guIGB3aXJlYCBpcyB0aGUgd2lyZSB3aWR0aCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBjZWxsLiAqL1xuZnVuY3Rpb24gY2hhaW5saW5rVGlsZShzaXplOiBudW1iZXIsIHdpcmU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IE1hdGgubWF4KDEuNSwgd2lyZSAqIHMpO1xuICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICBjb25zdCB2ID0gMTUwICsgTWF0aC5yb3VuZChybmQoKSAqIDMwKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiKCR7dn0sJHt2ICsgMn0sJHt2ICsgNH0pYDtcbiAgICAvLyB0d28gZGlhZ29uYWxzIHRocm91Z2ggdGhlIHRpbGUsIG9mZnNldCBzbyB0aGUgd3JhcCBtYWtlcyBhIGNvbnRpbnVvdXMgZGlhbW9uZCBsYXR0aWNlXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgMCk7IGN0eC5saW5lVG8ocywgcyk7XG4gICAgY3R4Lm1vdmVUbyhzLCAwKTsgY3R4LmxpbmVUbygwLCBzKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gdGhlIGtudWNrbGUgd2hlcmUgd2lyZXMgdHdpc3Qgcm91bmQgZWFjaCBvdGhlciwgYXQgdGhlIHR3byBjcm9zc2luZ3Mgb24gdGhlIHRpbGUgZWRnZXNcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3YgLSAyMH0sJHt2IC0gMTh9LCR7diAtIDE2fSlgO1xuICAgIGZvciAoY29uc3QgW3gsIHldIG9mIFtbMCwgMF0sIFtzLCAwXSwgWzAsIHNdLCBbcywgc10sIFtzIC8gMiwgcyAvIDJdXSkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHksIGN0eC5saW5lV2lkdGggKiAwLjksIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogQkFNQk9PIFNUUklQIHRpbGU6IHZlcnRpY2FsIHNwbGl0LWJhbWJvbyBzdHJpcHMgd2l0aCBwYWxlIGN1bG0gZmFjZXMsIGRhcmsgam9pbnRzIGJldHdlZW4gdGhlbVxuICogIGFuZCBhIG5vZGUgbGluZSBvciB0d28gLS0gYSBtdWx0aXBsaWVyIG9uIHRoZSBtZWFzdXJlZCBzaWx2ZXItZ3JleS4gKi9cbmZ1bmN0aW9uIGJhbWJvb1RpbGUoc2l6ZTogbnVtYmVyLCBzdHJpcHM6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBzdyA9IHMgLyBzdHJpcHM7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBzdHJpcHM7IGIrKykge1xuICAgICAgY29uc3QgdG9uZSA9IDAuODAgKyBybmQoKSAqIDAuMiwgdiA9IE1hdGgucm91bmQoMjU1ICogdG9uZSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7diAtIDJ9LCR7diAtIDZ9KWA7IGN0eC5maWxsUmVjdChiICogc3csIDAsIHN3LCBzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1MCw0MiwzNCwwLjYpJzsgY3R4LmZpbGxSZWN0KGIgKiBzdywgMCwgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSwgcyk7XG4gICAgICAvLyBhIGhpZ2hsaWdodCBkb3duIHRoZSBjdWxtJ3Mgcm91bmRcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjEwKSc7IGN0eC5maWxsUmVjdChiICogc3cgKyBzdyAqIDAuMzUsIDAsIHN3ICogMC4yNSwgcyk7XG4gICAgICAvLyBub2RlIHJpbmdzXG4gICAgICBjb25zdCBuID0gMSArIE1hdGguZmxvb3Iocm5kKCkgKiAyKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7IGNvbnN0IHkgPSBybmQoKSAqIHM7IGN0eC5maWxsU3R5bGUgPSAncmdiYSg3MCw2MCw0OCwwLjQ1KSc7IGN0eC5maWxsUmVjdChiICogc3csIHksIHN3LCBNYXRoLm1heCgxLCBzICogMC4wMDgpKTsgfVxuICAgICAgLy8gZmluZSBncmFpbiBsaW5lc1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA2OyBrKyspIHsgY29uc3QgeCA9IGIgKiBzdyArIHJuZCgpICogc3c7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSg4MCw3MCw1OCwkezAuMDUgKyBybmQoKSAqIDAuMX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpOyB9XG4gICAgfVxuICAgIC8vIG1vdWxkIHNwZWNrbGVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwMDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7IGN0eC5maWxsU3R5bGUgPSAncmdiYSgzMCwyOCwyNCwwLjE4KSc7IGN0eC5maWxsUmVjdCh4LCB5LCAxICsgcm5kKCkgKiAyLCAxICsgcm5kKCkgKiAyKTsgfVxuICB9KTtcbn1cblxuLyoqIFBPU1RFUiB0aWxlIGZvciBhIGhvYXJkaW5nOiB0b3JuIHBhc3RlLXVwIHNoZWV0cyBhbmQgYSBzcHJheSBzdGVuY2lsIG92ZXIgYSBUUkFOU1BBUkVOVCBncm91bmQsXG4gKiAgYm91bmQgb24gYW4gYWxwaGEtdGVzdGVkIHBhbmUgYSBmZXcgbWlsbGltZXRyZXMgcHJvdWQgb2YgdGhlIHNoZWV0LiBgbGluZXNgIGFyZSB0aGUgc3RlbmNpbFxuICogIHN0cmluZ3M7IGEgcHJpbnRlZCBncmFwaGljIGlzIGV4YWN0bHkgdGhlIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyBjYXNlLiAqL1xuZnVuY3Rpb24gcG9zdGVyVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbGluZXM6IHN0cmluZ1tdKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gcGFzdGUtdXBzOiBvdmVybGFwcGluZyBvZmYtd2hpdGUgcmVjdGFuZ2xlcyB3aXRoIHRvcm4gZWRnZXMgYW5kIGZhaW50IHByaW50IGxpbmVzXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMzApLCB5ID0gcyAqICgwLjE1ICsgcm5kKCkgKiAwLjQ1KSwgdyA9IHMgKiAoMC4xNCArIHJuZCgpICogMC4xNiksIGggPSBzICogKDAuMTggKyBybmQoKSAqIDAuMjIpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7MjI1ICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKX0sJHsyMjIgKyBNYXRoLnJvdW5kKHJuZCgpICogMTgpfSwkezIxMCArIE1hdGgucm91bmQocm5kKCkgKiAyMCl9LDAuOTYpYDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgIGNvbnN0IG4gPSA5O1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKSBjdHgubGluZVRvKHggKyB3ICogaSAvIG4sIHkgKyAocm5kKCkgLSAwLjUpICogaCAqIDAuMDgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKSBjdHgubGluZVRvKHggKyB3ICsgKHJuZCgpIC0gMC41KSAqIHcgKiAwLjA4LCB5ICsgaCAqIGkgLyBuKTtcbiAgICAgIGZvciAobGV0IGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIGN0eC5saW5lVG8oeCArIHcgKiBpIC8gbiwgeSArIGggKyAocm5kKCkgLSAwLjUpICogaCAqIDAuMTIpO1xuICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkgY3R4LmxpbmVUbyh4ICsgKHJuZCgpIC0gMC41KSAqIHcgKiAwLjA4LCB5ICsgaCAqIGkgLyBuKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCw0MCw0NSwwLjU1KSc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykgY3R4LmZpbGxSZWN0KHggKyB3ICogMC4xLCB5ICsgaCAqICgwLjIgKyBpICogMC4xKSwgdyAqICgwLjMgKyBybmQoKSAqIDAuNSksIE1hdGgubWF4KDEsIHMgKiAwLjAwNikpO1xuICAgIH1cbiAgICAvLyBzcHJheSBzdGVuY2lsLCBzbGlnaHRseSBzb2Z0IGFuZCB1bmV2ZW5cbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjAsMjAsMjIsMC44OCknO1xuICAgIGN0eC5mb250ID0gYGJvbGQgJHtNYXRoLnJvdW5kKHMgKiAwLjA3KX1weCBzYW5zLXNlcmlmYDtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHMgKiAwLjQwLCB5ID0gcyAqICgwLjQ0ICsgaSAqIDAuMTMpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAzOyBrKyspIHsgY3R4Lmdsb2JhbEFscGhhID0gMC42OyBjdHguZmlsbFRleHQobGluZXNbaV0sIHggKyAocm5kKCkgLSAwLjUpICogMywgeSArIChybmQoKSAtIDAuNSkgKiAzKTsgfVxuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogU1RSSVBFIHRpbGU6IGFsdGVybmF0aW5nIGNvbG91ciBiYW5kcyBhbG9uZyB1IChhbiBhd25pbmcpLCB3aXRoIGEgc29mdCBncmltZSBtdWx0aXBseSBzbyB0aGUgY2xvdGhcbiAqICByZWFkcyB3b3JuIHJhdGhlciB0aGFuIHByaW50ZWQuIGBhYC9gYmAgYXJlIHRoZSB0d28gYmFuZCBjb2xvdXJzIGFzIFtyLGcsYl0gMC0xLiBCb3VuZCBhcyBtYXAgb24gYVxuICogIFdISVRFIG1hdGVyaWFsIHNvIHRoZSBiYW5kcyBjYXJyeSB0aGUgd2hvbGUgYWxiZWRvLiAqL1xuLy8gYG9gIGlzIG9wdGlvbmFsIGFuZCBldmVyeSBmaWVsZCBkZWZhdWx0cyB0byB0aGUgcHJldmlvdXMgaGFyZC1jb2RlZCBiZWhhdmlvdXIsIHNvIG5vIHByb3AgdGhhdFxuLy8gZG9lcyBub3QgcGFzcyBpdCBjaGFuZ2VzLiBgc211ZGdlc2AgYW5kIGBzcGVja3NgIGV4aXN0IGJlY2F1c2UgYnJ1c2hlZCBTVEVFTCB3YW50cyB0aGUgYmFuZGluZ1xuLy8gd2l0aG91dCB0aGUgZGlydDogdGhlIDQwIHJhZGlhbCBzbXVkZ2VzIGFuZCAxMjAwIGxpZ2h0IHNwZWNrcyByZWFkIGFzIG1vdWxkIG9uIGEgY2xlYW4gc2F0aW5cbi8vIHN1cmZhY2UsIHdoaWNoIGlzIHRoZSBvcHBvc2l0ZSBvZiB3aGF0IGEgc3RyaXBlIHRpbGUgaXMgZm9yIHRoZXJlLlxuZnVuY3Rpb24gc3RyaXBlVGlsZShzaXplOiBudW1iZXIsIGJhbmRzOiBudW1iZXIsIGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBvOiBhbnkgPSB7fSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX0pYDtcbiAgICBjb25zdCB3ID0gcyAvIGJhbmRzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFuZHM7IGkrKykgeyBjdHguZmlsbFN0eWxlID0gcmdiKGkgJSAyID8gYiA6IGEpOyBjdHguZmlsbFJlY3QoTWF0aC5mbG9vcihpICogdyksIDAsIE1hdGguY2VpbCh3KSArIDEsIHMpOyB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zbXVkZ2VzID8/IDQwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gNCArIHJuZCgpICogcyAqIDAuMDgsIGFsID0gMC4wNiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDE1MCwxNDAsMTI1LCR7YWx9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTUwLDE0MCwxMjUsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zcGVja3MgPz8gMTIwMCk7IGkrKykgeyBjb25zdCB2ID0gMjAwICsgTWF0aC5yb3VuZChybmQoKSAqIDU1KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMTApYDsgY3R4LmZpbGxSZWN0KHJuZCgpICogcywgcm5kKCkgKiBzLCAxLjUsIDEuNSk7IH1cbiAgICAvLyBCUk9BRCByZWZsZWN0aW9uIGJhbmRpbmc6IGBvLmJyb2FkYCB3aG9sZSBicmlnaHQvZGFyayBjeWNsZXMgYWNyb3NzIHRoZSB0aWxlLCBkcmF3biBhcyBvbmVcbiAgICAvLyB3cmFwcGluZyBjb3NpbmUgZ3JhZGllbnQuIEJydXNoZWQgc3RlZWwgd2l0aCBubyBlbnZpcm9ubWVudCBtYXAgdG8gcmVmbGVjdCBoYXMgbm90aGluZyB0b1xuICAgIC8vIG1ha2UgaXRzIGZsYW5rcyBicmlnaHQgYW5kIGl0cyBtaWRkbGUgZGFyaywgYW5kIHRoZSBmaW5lIGdyYWluIGNhbm5vdCBzdXBwbHkgaXQgLS0gYSAzIG1tXG4gICAgLy8gcGl0Y2ggYXZlcmFnZXMgdG8gb25lIGZsYXQgdG9uZSBhdCBwcm9wIGRpc3RhbmNlLCB3aGljaCBpcyB3aGF0IGEgcmVuZGVyZWQgc3RhaW5sZXNzIGJpblxuICAgIC8vIGxvb2tzIGxpa2Ugd2hlbiBpdCByZWFkcyBhcyBwYWludGVkIG1ldGFsLiBXaG9sZSBjeWNsZXMsIHNvIHRoZSB0aWxlIHN0aWxsIG1lZXRzIGl0c2VsZi5cbiAgICAvLyBEZWZhdWx0ZWQgT0ZGLCBzbyBldmVyeSBleGlzdGluZyBjYWxsZXIgaXMgYnl0ZS1pZGVudGljYWwuXG4gICAgaWYgKG8uYnJvYWQpIHtcbiAgICAgIGNvbnN0IGxvID0gby5icm9hZExvID8/IDAuODAsIGhpID0gby5icm9hZEhpID8/IDEuMDtcbiAgICAgIGNvbnN0IGczID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHMsIDApO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjQ7IGkrKykge1xuICAgICAgICBjb25zdCB0ID0gaSAvIDY0O1xuICAgICAgICBjb25zdCB2ID0gbG8gKyAoaGkgLSBsbykgKiAoMC41ICsgMC41ICogTWF0aC5jb3MoMiAqIE1hdGguUEkgKiBvLmJyb2FkICogdCkpO1xuICAgICAgICBjb25zdCBjID0gTWF0aC5yb3VuZCgyNTUgKiB2KTtcbiAgICAgICAgZzMuYWRkQ29sb3JTdG9wKHQsIGByZ2IoJHtjfSwke2N9LCR7Y30pYCk7XG4gICAgICB9XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzM7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogU2VhbWxlc3MgYXJvdW5kLWJ5LXVwIFVWcyBmb3IgYSBMYXRoZUdlb21ldHJ5OiB1IGZyb20gdGhlIFNFR01FTlQgaW5kZXggKHRoZSBsYXRoZSBvcmRlcnMgaXRzXG4gKiAgdmVydGljZXMgc2VnbWVudC1tYWpvciwgaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpLCBzbyB0aGUgZHVwbGljYXRlZCBzZWFtIGNvbHVtbiByZWFkc1xuICogIHUgPSByZXBlYXRzIGV4YWN0bHkgYW5kIFJlcGVhdFdyYXBwaW5nIGNsb3NlcyBpdC4gYHNjYWxlYCBpcyB0aGUgdGlsZSBzaXplIGluIG1ldHJlczsgdGhlXG4gKiAgYXJvdW5kLXJlcGVhdCBjb3VudCBpcyByb3VuZGVkIHNvIHRoZSB0aWxlIG1lZXRzIGl0c2VsZiwgZnJvbSB0aGUgcHJvZmlsZSdzIHdpZGVzdCByYWRpdXMuICovXG5mdW5jdGlvbiBsYXRoZVVWKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBwb2ludENvdW50OiBudW1iZXIsIHNlZzogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCB2U2NhbGUgPSBzY2FsZSwgdjAgPSAwKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgbGV0IHJNYXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykgck1heCA9IE1hdGgubWF4KHJNYXgsIE1hdGguaHlwb3QocC5nZXRYKGkpLCBwLmdldFooaSkpKTtcbiAgY29uc3QgcmVwID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCgyICogTWF0aC5QSSAqIHJNYXggLyBzY2FsZSkpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKGkgLyBwb2ludENvdW50KTtcbiAgICB1dltpICogMl0gPSAocyAvIHNlZykgKiByZXA7IHV2W2kgKiAyICsgMV0gPSAocC5nZXRZKGkpIC0gdjApIC8gdlNjYWxlO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbn1cblxuLyoqIEVYUE9TRUQtQUdHUkVHQVRFIHRpbGU6IGEgZGFyayBtb3J0YXIgZ3JvdW5kIHBhY2tlZCB3aXRoIHJvdW5kZWQgcGViYmxlcyBpbiBhIG1lYXN1cmVkIHBhbGV0dGUsXG4gKiAgZWFjaCBkcmF3biBhdCBuaW5lIHdyYXBwZWQgb2Zmc2V0cyBzbyB0aGUgdGlsZSBpcyBzZWFtbGVzcy4gYG8ucGFsZXR0ZWAgaXMgYSBsaXN0IG9mIFtyLGcsYl1cbiAqICByYXRpb3MgYWdhaW5zdCB0aGUgbWF0ZXJpYWwgY29sb3VyLCBgby5ncm91bmRgIHRoZSBtb3J0YXIgcmF0aW8sIGBvLmNvdW50YCB0aGUgcGViYmxlIGNvdW50LiAqL1xuZnVuY3Rpb24gcGViYmxlVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYHJnYigke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfSlgO1xuICAgIGN0eC5maWxsU3R5bGUgPSByZ2Ioby5ncm91bmQgPz8gWzAuNDUsIDAuNDIsIDAuMzhdKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IHBhbDogbnVtYmVyW11bXSA9IG8ucGFsZXR0ZSA/PyBbWzAuODUsIDAuNzgsIDAuNjZdLCBbMC43MiwgMC42MiwgMC41MF0sIFswLjYwLCAwLjU4LCAwLjU1XSwgWzAuOTAsIDAuODYsIDAuODBdXTtcbiAgICBjb25zdCBuID0gby5jb3VudCA/PyA5MDAsIHJNaW4gPSBzICogKG8uck1pbiA/PyAwLjAxMiksIHJNYXggPSBzICogKG8uck1heCA/PyAwLjAyOCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHJ4ID0gck1pbiArIHJuZCgpICogKHJNYXggLSByTWluKSwgcnkgPSByeCAqICgwLjYgKyBybmQoKSAqIDAuNSksIGEgPSBybmQoKSAqIE1hdGguUEk7XG4gICAgICBjb25zdCBjID0gcGFsW01hdGguZmxvb3Iocm5kKCkgKiBwYWwubGVuZ3RoKV0sIGsgPSAwLjg1ICsgcm5kKCkgKiAwLjM7XG4gICAgICAvLyBDT05UQUNUIFNIQURPVyBmaXJzdCwgb2Zmc2V0IGRvd24tcmlnaHQgYW5kIGEgdG91Y2ggbGFyZ2VyLCBzbyB3aGF0IHN1cnZpdmVzIGFyb3VuZCBlYWNoXG4gICAgICAvLyBzdG9uZSBpcyB0aGUgZGFyayBtb3J0YXIgY3Jlc2NlbnQgdGhhdCBtYWtlcyBhIHBhY2tlZCBhZ2dyZWdhdGUgcmVhZCBhcyBzdG9uZXMgcmF0aGVyIHRoYW5cbiAgICAgIC8vIGFzIG92ZXJsYXBwaW5nIGZsYXQgZGlzY3MuIGBzaGFkZWAgaXMgYSByYXRpbyBhZ2FpbnN0IHRoZSBtb3J0YXIgZ3JvdW5kOyAwIGtlZXBzIHRoZSBvbGRcbiAgICAgIC8vIGxvb2sgZm9yIGV2ZXJ5IHRpbGUgYWxyZWFkeSBzaGlwcGVkLlxuICAgICAgaWYgKG8uc2hhZGUpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHJnYigoby5ncm91bmQgPz8gWzAuNDUsIDAuNDIsIDAuMzhdKS5tYXAoKHYpID0+IHYgKiBvLnNoYWRlKSk7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4ICsgcnggKiAwLjE2LCB5ICsgZHkgKyByeSAqIDAuMjIsIHJ4ICogMS4xLCByeSAqIDEuMSwgYSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgICBjdHguZmlsbFN0eWxlID0gcmdiKGMubWFwKCh2KSA9PiBNYXRoLm1pbigxLCB2ICogaykpKTtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHJ4LCByeSwgYSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAvLyBhIGhpZ2hsaWdodCBjcmVzY2VudCBvbiB0aGUgbGl0IHNpZGUgc28gZWFjaCBzdG9uZSByZWFkcyBhcyBhIGJ1bXBcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgyNTUsMjU1LDI1NSwke28uZ2xvc3MgPz8gMC4xOH0pYDtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4IC0gcnggKiAwLjIsIHkgKyBkeSAtIHJ5ICogMC4yNSwgcnggKiAwLjUsIHJ5ICogMC40LCBhLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogVFlSRSBUUkVBRCB0aWxlIGZvciBhIGxhdGhlIGNhcnJ5aW5nIGBjeWxVVmA6IHUgcnVucyBBUk9VTkQgdGhlIHR5cmUgYW5kIHYgVVAgaXQsIHNvIHRyZWFkIHNsb3RzIGFyZVxuICogIGJhcnMgYXQgY29uc3RhbnQgdSBhbmQgdGhlIGNpcmN1bWZlcmVudGlhbCBncm9vdmVzIGFyZSBsaW5lcyBhdCBjb25zdGFudCB2LiBEcmF3biBhcyByYXRpb3Mgb24gd2hpdGVcbiAqICBhbmQgbXVsdGlwbGllZCBpbnRvIHRoZSAobGlmdGVkKSBydWJiZXIgY29sb3VyOyBgby5ncm9vdmVgIGlzIHRoZSBkYXJrZXN0IHJhdGlvLCBrZXB0IGFib3ZlIHRoZVxuICogIGx1bWEtNTggaG9sZSBiYW5kIGJ5IHRoZSBjYWxsZXIuIGBvLnNsb3RzYCBiYXJzIHBlciB0aWxlLCBgby5yaW5nc2AgY2lyY3VtZmVyZW50aWFsIGxpbmVzLiAqL1xuZnVuY3Rpb24gdHJlYWRUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgZ3Jvb3ZlID0gby5ncm9vdmUgPz8gMC44MCwgc2xvdHMgPSBvLnNsb3RzID8/IDIsIHJpbmdzID0gby5yaW5ncyA/PyAyO1xuICAgIC8vIGBiYXNlYCBpcyB0aGUgdG9uZSB0aGUgVU4tZ3JpbWVkIHBhcnQgb2YgdGhlIHRpbGUgY2FycmllcywgZGVmYXVsdGluZyB0byB3aGl0ZSAtLSBpLmUuIHRvXG4gICAgLy8gXCJsZWF2ZSB0aGUgdmVydGV4IGNvbG91ciBhbG9uZVwiLCB3aGljaCBpcyBldmVyeSBleGlzdGluZyBjYWxsZXIuIEl0IGV4aXN0cyBmb3IgRU5WRUxPUEVcbiAgICAvLyBSRS1CQVNJTkc6IGEgbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLCBzbyBhIHBhcnQgdGhhdCBtdXN0IHJlYWQgY2xlYW4gb3JhbmdlIGluIG9uZSBwbGFjZSBhbmRcbiAgICAvLyBncmV5IHJvYWQgZ3JpbWUgaW4gYW5vdGhlciBjYW5ub3QgZG8gaXQgZnJvbSBhIHNpbmdsZSB2ZXJ0ZXggY29sb3VyLCBiZWNhdXNlIHRoZSBncmltZSBpc1xuICAgIC8vIEhJR0hFUiBpbiBibHVlIHRoYW4gdGhlIG9yYW5nZSBpcy4gVGhlIHZlcnRleCBjb2xvdXIgYmVjb21lcyB0aGUgcGVyLWNoYW5uZWwgbWF4aW11bSBvZiBib3RoXG4gICAgLy8gYW5kIHRoaXMgZmlsbCBwYWludHMgdGhlIGNsZWFuIHRvbmUgYmFjayBvdXQgb2YgaXQuXG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBjb25zdCBndiA9IE1hdGgucm91bmQoMjU1ICogZ3Jvb3ZlKTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2d2fSwke2d2fSwke2d2fSlgO1xuICAgIGNvbnN0IHBpdGNoID0gcyAvIHNsb3RzLCB3ID0gcGl0Y2ggKiAoby5zbG90V2lkdGggPz8gMC4xNik7XG4gICAgLy8gdHJlYWQgc2xvdHMgc3BhbiB0aGUgYmFuZCBiZXR3ZWVuIHRoZSB0d28gZWRnZSBzaG91bGRlcnMgKHYgMC4xMi4uMC44OCBvZiB0aGUgdGlsZSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsb3RzOyBpKyspIHsgY29uc3QgeCA9IGkgKiBwaXRjaCArIHBpdGNoICogMC40ICsgKHJuZCgpIC0gMC41KSAqIHBpdGNoICogMC4xOyBjdHguZmlsbFJlY3QoeCwgcyAqIDAuMTIsIHcsIHMgKiAwLjc2KTsgY3R4LmZpbGxSZWN0KHggLSBzLCBzICogMC4xMiwgdywgcyAqIDAuNzYpOyB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByaW5nczsgaSsrKSB7IGNvbnN0IHkgPSBzICogKDAuMiArIDAuNiAqIChpICsgMC41KSAvIHJpbmdzKTsgY3R4LmZpbGxSZWN0KDAsIHkgLSAxLjUsIHMsIDMpOyB9XG4gICAgLy8gc2lkZXdhbGwgc2hlZW46IGEgc29mdCBsaWdodGVyIHdhc2ggc28gdGhlIHJ1YmJlciBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xMiksIHYgPSAyMzUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7IGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjUpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogT0xEIFRZUkUgdGlsZTogVFdPIHR5cmUgaGVpZ2h0cyB0YWxsIGJ5IGBvLnBpdGNoYCBtZXRyZXMgYXJvdW5kIChjeWxVVikuIFRoZSB1cHBlciBoYWxmICh2IDAuNS0xKVxuICogIGlzIGEgdHJlYWRlZCB0eXJlLCB0aGUgbG93ZXIgaGFsZiAodiAwLTAuNSkgYSB3b3JuIFNMSUNLIHdpdGggY2lyY3VtZmVyZW50aWFsIGdyb292ZXMgYW5kIHNob3J0XG4gKiAgc2hvdWxkZXIgc2lwZXMgb25seSwgc28gYSBzdGFjayBtaXhlcyBiYWxkIGFuZCB0cmVhZGVkIHR5cmVzIG9mZiBvbmUgY2FudmFzIGJ5IHYwLiBEcmF3biBhcyBSQVRJT1NcbiAqICBhZ2FpbnN0IHRoZSB2ZXJ0ZXgtY29sb3VyZWQgcnViYmVyIGF0IGBiYXNlYCAoMjAwLzI1NSAtPiB2ZXJ0ZXggdG9uZXMgYXJlIGF1dGhvcmVkIDEuMjc1eCB0aGVcbiAqICBpbnRlbmRlZCBhbGJlZG8gc28gZHVzdCBhbmQgc2N1ZmZzIGNhbiBnbyBCUklHSFRFUiB0aGFuIHRoZSBydWJiZXIgdW5kZXIgYSBtdWx0aXBseSBjYW52YXMpLlxuICogIFJvd3MgYXJlIGhlaWdodHM6IGxvd2VyIHNpZGV3YWxsLCB0cmVhZCBiYW5kICh2IGBvLmJhbmRbMF1gLi5gby5iYW5kWzFdYCBvZiB0aGUgc3RyaXApLCB1cHBlclxuICogIHNpZGV3YWxsIHdpdGggYmVhZCByaW5ncyBhbmQgbW91bGQgbGluZXMuIFdlYXI6IGEgd2FybSBkdXN0IHdhc2ggb24gdGhlIGxvd2VyIHNob3VsZGVyLCBncmV5IHNjdWZmc1xuICogIG9uIGJvdGggc2hvdWxkZXJzLCBkdXN0IGNhdWdodCBpbiB0aGUgY3V0cywgZ3JhaW4gb3ZlciBldmVyeXRoaW5nLiAqL1xuZnVuY3Rpb24gdHlyZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IDIwMCwgYmFuZCA9IG8uYmFuZCA/PyBbMC4yNCwgMC43Nl0sIGdyb292ZSA9IG8uZ3Jvb3ZlID8/IDAuNDU7XG4gICAgY29uc3QgZ3YgPSBNYXRoLnJvdW5kKGJhc2UgKiBncm9vdmUpLCBydiA9IE1hdGgucm91bmQoYmFzZSAqIDAuNyksIG12ID0gTWF0aC5yb3VuZChiYXNlICogMC45KTtcbiAgICBjb25zdCBkdXN0ID0gby5kdXN0ID8/IFsyMzIsIDIxNCwgMTkwXTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2Jhc2V9LCR7YmFzZX0sJHtiYXNlfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzICogcyAvIDY7IGkrKykgeyBjb25zdCB2ID0gYmFzZSArIE1hdGgucm91bmQoKHJuZCgpIC0gMC41KSAqIDIyKTsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHJuZCgpICogcywgcm5kKCkgKiBzLCAyLCAyKTsgfVxuICAgIC8vIG9uZSB0eXJlIHN0cmlwIGJldHdlZW4gY2FudmFzIHJvd3MgeWEgKHRvcCkgYW5kIHliIChib3R0b20pOyBjYW52YXMgeSBncm93cyBET1dOLCB2IGdyb3dzIFVQXG4gICAgY29uc3Qgc3RyaXAgPSAoeWE6IG51bWJlciwgeWI6IG51bWJlciwgdHJlYWRlZDogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc3QgaCA9IHliIC0geWEsIGIwID0geWEgKyBoICogKDEgLSBiYW5kWzFdKSwgYjEgPSB5YSArIGggKiAoMSAtIGJhbmRbMF0pO1xuICAgICAgY29uc3QgbmcgPSBvLmdyb292ZXMgPz8gMywgZ3cgPSBoICogMC4wMjQ7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2d2fSwke2d2fSwke2d2fSlgO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZzsgaSsrKSB7IGNvbnN0IHkgPSBiMCArIChiMSAtIGIwKSAqIChpICsgMSkgLyAobmcgKyAxKTsgY3R4LmZpbGxSZWN0KDAsIHkgLSBndyAvIDIsIHMsIGd3KTsgfVxuICAgICAgY29uc3QgbnMgPSBvLnNpcGVzID8/IDIsIHcgPSBzICogKG8uc2lwZVdpZHRoID8/IDAuMDUpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPD0gbmc7IGsrKykge1xuICAgICAgICBjb25zdCB5MCA9IGsgPT09IDAgPyBiMCA6IGIwICsgKGIxIC0gYjApICogayAvIChuZyArIDEpICsgZ3cgLyAyLCB5MSA9IGsgPT09IG5nID8gYjEgOiBiMCArIChiMSAtIGIwKSAqIChrICsgMSkgLyAobmcgKyAxKSAtIGd3IC8gMjtcbiAgICAgICAgLy8gYSBzbGljayBrZWVwcyBvbmx5IFNIT1JUIHNpcGVzIGF0IHRoZSB0d28gc2hvdWxkZXIgcm93cywgY3V0IGluIGZyb20gdGhlIGJhbmQgZWRnZVxuICAgICAgICBjb25zdCBvdXRlciA9IGsgPT09IDAgfHwgayA9PT0gbmc7XG4gICAgICAgIGlmICghdHJlYWRlZCAmJiAhb3V0ZXIpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCB5czAgPSB0cmVhZGVkID8geTAgOiAoayA9PT0gMCA/IHkwIDogeTEgLSAoeTEgLSB5MCkgKiAwLjQ1KSwgeXMxID0gdHJlYWRlZCA/IHkxIDogKGsgPT09IDAgPyB5MCArICh5MSAtIHkwKSAqIDAuNDUgOiB5MSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnM7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHggPSAoKGkgKyAwLjUpIC8gbnMgKyAoayAlIDIpICogMC41IC8gbnMpICogcyArIChybmQoKSAtIDAuNSkgKiBzICogMC4wNiwgc2wgPSAocm5kKCkgLSAwLjUpICogcyAqIDAuMDg7XG4gICAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIHlzMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdywgeXMwKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3ICsgc2wsIHlzMSk7IGN0eC5saW5lVG8oeCArIGR4ICsgc2wsIHlzMSk7IGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBzaG91bGRlciBzdGVwIGF0IHRoZSB0b3Agb2YgdGhlIGJhbmQsIGJlYWQgcmluZ3MgYW5kIG1vdWxkIGxpbmVzIG9uIHRoZSBzaWRld2FsbHNcbiAgICAgIGNvbnN0IHNoID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGIwIC0gaCAqIDAuMDMsIDAsIGIwICsgaCAqIDAuMDIpOyBzaC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtndn0sJHtndn0sJHtndn0sMClgKTsgc2guYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9LDAuNDUpYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gc2g7IGN0eC5maWxsUmVjdCgwLCBiMCAtIGggKiAwLjAzLCBzLCBoICogMC4wNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3J2fSwke3J2fSwke3J2fSlgOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC4wNDUsIHMsIGggKiAwLjAxMik7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjk0LCBzLCBoICogMC4wMTIpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHttdn0sJHttdn0sJHttdn0pYDsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuMTEsIHMsIDIpOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC44OCwgcywgMik7XG4gICAgICAvLyB3ZWFyOiB3YXJtIHJvYWQgZHVzdCBvbiB0aGUgbG93ZXIgc2hvdWxkZXIgYW5kIHNpZGV3YWxsLCBncmV5IHNjdWZmcyBvbiBib3RoIHNob3VsZGVyc1xuICAgICAgY29uc3QgZGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeWIsIDAsIHlhICsgaCAqIDAuNik7IGRnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2R1c3RbMF19LCR7ZHVzdFsxXX0sJHtkdXN0WzJdfSwke28uZHVzdEFscGhhID8/IDAuMzV9KWApOyBkZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtkdXN0WzBdfSwke2R1c3RbMV19LCR7ZHVzdFsyXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBkZzsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuNiwgcywgaCAqIDAuNCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNjdWZmcyA/PyAxNCk7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgPCAwLjUgPyBiMCArIChybmQoKSAtIDAuMykgKiBoICogMC4wOCA6IGIxICsgKHJuZCgpIC0gMC43KSAqIGggKiAwLjA4LCByID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjA1KSwgdiA9IDIyNSArIE1hdGgucm91bmQocm5kKCkgKiAyNSk7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpOyBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC41KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHksIHIgKiAyLjIsIHIgKiAwLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdsaWdodGVyJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gYjAgKyBybmQoKSAqIChiMSAtIGIwKSwgdiA9IDYgKyBNYXRoLnJvdW5kKHJuZCgpICogMTQpOyBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7TWF0aC5yb3VuZCh2ICogMC45KX0sJHtNYXRoLnJvdW5kKHYgKiAwLjc1KX0pYDsgY3R4LmZpbGxSZWN0KHgsIHksIDIgKyBybmQoKSAqIDYsIDIgKyBybmQoKSAqIDMpOyB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9O1xuICAgIHN0cmlwKDAsIHMgLyAyLCB0cnVlKTsgICAgICAvLyB2IDAuNS4uMTogdHJlYWRlZFxuICAgIHN0cmlwKHMgLyAyLCBzLCBmYWxzZSk7ICAgICAvLyB2IDAuLjAuNTogc2xpY2tcbiAgfSk7XG59XG5cbi8qKiBBIHRhcGVyZWQgYm94OiBCb3hHZW9tZXRyeSgxLCBoLCAxKSB3aG9zZSB4L3ogYXJlIHNjYWxlZCBwZXIgdmVydGV4IGJ5IHRoZSBmb290cHJpbnQgaW50ZXJwb2xhdGVkXG4gKiAgZnJvbSAodzAsIGQwKSBhdCB0aGUgYm90dG9tIHRvICh3MSwgZDEpIGF0IHRoZSB0b3AuIE5vcm1hbHMgcmVjb21wdXRlZCBzbyB0aGUgc2xhbnRlZCBmYWNlcyBzaGFkZVxuICogIGZsYXQuIGBiYCA9IFtjeCwgeUJvdHRvbSwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXS4gKi9cbmZ1bmN0aW9uIGZydXN0dW0oYjogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IFtjeCwgeTAsIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0gPSBiO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIGgsIDEpO1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IChwLmdldFkoaSkgKyBoIC8gMikgLyBoO1xuICAgIHAuc2V0WChpLCBwLmdldFgoaSkgKiAodzAgKyAodzEgLSB3MCkgKiB0KSk7IHAuc2V0WihpLCBwLmdldFooaSkgKiAoZDAgKyAoZDEgLSBkMCkgKiB0KSk7XG4gIH1cbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICBnLnRyYW5zbGF0ZShjeCwgeTAgKyBoIC8gMiwgY3opO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBIT1QtRElQIEdBTFZBTklTRUQgWklOQzogY2xvdWR5IHRvbmUgZHJpZnQsIGNyeXN0YWxsaW5lIFNQQU5HTEUsIGFuZCBydXN0IGJsZWVkaW5nIGZyb20gdGhlIHdlbGRzLlxuICpcbiAqIFRoaXMgZXhpc3RzIGJlY2F1c2UgYGdyaW1lVGlsZWAgbWVhc3VyYWJseSBjYW5ub3Qgc2F5IGBnYWx2YW5pc2VkYC4gTWVhc3VyZWQgb24gdGhlIGNyb3dkXG4gKiBiYXJyaWVyJ3MgcGxhdGUgYWdhaW5zdCBpdHMgZmlyc3QgYnVpbGQsIG92ZXIgbWF0Y2hlZCBmbGF0IHBhbmVsIGNyb3BzOiB0aGUgcGxhdGUgcmVhZHMgbWVhbiBsdW1hXG4gKiAxNTctMTU5IHdpdGggc2QgMTItMTYgYW5kIGEgcDUuLnA5NSBzcGFuIG9mIH40MiwgYW5kIHRoZSByZW5kZXIgcmVhZCBtZWFuIDE0MiB3aXRoIHNkIDgtMTAgYW5kIGFcbiAqIHNwYW4gb2YgfjIxIC0tIGhhbGYgdGhlIHRvbmFsIHZhcmlhdGlvbiwgYW5kIENMSVBQRUQgYXQgdGhlIHRvcCAocDc1ID0gcDk1ID0gMTQ3LCB0aGUgdGlsZSBkb2luZ1xuICogbm90aGluZyBhdCBhbGwgb3ZlciB0aGUgdXBwZXIgaGFsZiBvZiB0aGUgcGFuZWwpLiBBIGdhbHZhbmlzZWQgc3VyZmFjZSBpcyBub3QgZGlydCBvbiBncmV5IHBhaW50OlxuICogaXQgaXMgYSBmcm96ZW4gY3J5c3RhbCBzdHJ1Y3R1cmUsIGJyaWdodCBpcnJlZ3VsYXIgc3BhbmdsZSBmYWNldHMgc3RhbmRpbmcgQUJPVkUgdGhlIGJhc2UgdG9uZVxuICogd2l0aCBkdWxsIGdyZXktYnJvd24gZHJpZnQgYmV0d2VlbiB0aGVtLCBhbmQgdGhlIGJyaWdodGVzdCBmaWZ0aCBvZiBpdCBpcyB0aGUgcGFydCB0aGF0IHJlYWRzLlxuICpcbiAqIEEgY2FudmFzIHRpbGUgaXMgYm91bmQgYXMgYSBNVUxUSVBMWSBtYXAsIHNvIGl0IGNhbiBvbmx5IGV2ZXIgZGFya2VuIC0tIHdoaWNoIGlzIHdoeSB0aGUgc3ByZWFkXG4gKiB3YXMgb25lLXNpZGVkLiBUaGUgdGlsZSBpcyB0aGVyZWZvcmUgYXV0aG9yZWQgYXJvdW5kIGEgYG1pZGAgbXVsdGlwbGllciB3ZWxsIGJlbG93IDEgYW5kIHRoZVxuICogY2FsbGVyIHJhaXNlcyB0aGUgYmFzZSBhbGJlZG8gYnkgMS9taWQ6IHRoZSBzcGFuZ2xlIHRoZW4gcmVhY2hlcyBiYWNrIHVwIHRvIHRoZSBiYXNlIHdoaWxlIHRoZVxuICogZHJpZnQgZmFsbHMgYXdheSBiZWxvdyBpdCwgYW5kIHRoZSBzdXJmYWNlIHZhcmllcyBpbiBCT1RIIGRpcmVjdGlvbnMgYWJvdXQgaXRzIG1lYW4uIEF1dGhvciB0aGVcbiAqIGFsYmVkbyBmb3IgdGhhdCwgb3IgdGhlIHByb3Agc2hpcHMgYXMgYnJpZ2h0IGFzIHRoZSBzcGFuZ2xlIGV2ZXJ5d2hlcmUuXG4gKlxuICogYHJ1c3RCYW5kYCBibGVlZHMgYSBkZXNhdHVyYXRlZCBicm93biBkb3duIGZyb20gdGhlIHRvcCBhbmQgdXAgZnJvbSB0aGUgYm90dG9tIC0tIHRoZSB0d28gcGxhY2VzIGFcbiAqIGJhcnJpZXIncyB3ZWxkcyBhcmUgLS0gYmVjYXVzZSBydXN0IG9uIGdhbHZhbmlzZWQgc3RlZWwgc3RhcnRzIGF0IGEgd2VsZCwgd2hlcmUgdGhlIHppbmMgd2FzXG4gKiBidXJudCBvZmYsIGFuZCBSVU5TLiBUaGUgcGxhdGUncyBydXN0IG1lYXN1cmVzICM4MjZlNTggb3ZlciAyLjIlIG9mIHRoZSBmcmFtZTogYSB3YXNoLCBub3QgdGhlXG4gKiBvcmFuZ2UgcG9sa2EgZG90cyBhIGJsb3RjaCB0aWxlIGdpdmVzLlxuICovXG5mdW5jdGlvbiB6aW5jVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IG1pZCA9IG8ubWlkID8/IDAuODgsIGxvID0gby5sbyA/PyAwLjc0O1xuICAgIGNvbnN0IGcgPSAodjogbnVtYmVyKSA9PiB7IGNvbnN0IGIgPSBNYXRoLnJvdW5kKDI1NSAqIHYpOyByZXR1cm4gYHJnYigke2J9LCR7Yn0sJHtifSlgOyB9O1xuICAgIGN0eC5maWxsU3R5bGUgPSBnKG1pZCk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBjbG91ZHkgZHJpZnQ6IGJyb2FkIHNvZnQgYmxvYnMgYm90aCBhYm92ZSBhbmQgYmVsb3cgdGhlIG1pZCwgdGhlIG1vdHRsZSBhIGRpcCBsZWF2ZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmNsb3VkcyA/PyA2MCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNiArIHJuZCgpICogMC4xNik7XG4gICAgICBjb25zdCB1cCA9IHJuZCgpIDwgMC41O1xuICAgICAgY29uc3QgdiA9IHVwID8gbWlkICsgKDEgLSBtaWQpICogKDAuMzUgKyBybmQoKSAqIDAuNSkgOiBsbyArIChtaWQgLSBsbykgKiBybmQoKTtcbiAgICAgIGNvbnN0IGdyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7by5jbG91ZEFscGhhID8/IDAuMjh9KWApO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDAsMCwwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3I7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBTUEFOR0xFOiBpcnJlZ3VsYXIgYnJpZ2h0IGNyeXN0YWwgZmFjZXRzLCBhbmd1bGFyIHJhdGhlciB0aGFuIHJvdW5kLCB1cCB0byB0aGUgYmFzZSB0b25lLlxuICAgIC8vIFNtYWxsIGFuZCBkZW5zZSAtLSBsYXJnZSBvbmVzIHJlYWQgYXMgc3BsYXNoZXMgb2Ygd2hpdGUgcGFpbnQsIHdoaWNoIGlzIHRoZSBmYWlsdXJlIG1vZGUgYVxuICAgIC8vIGJsb3RjaCB0aWxlIGZhbGxzIGludG8uXG4gICAgLy8gQ0xVU1RFUkVELCBub3Qgc2NhdHRlcmVkLiBVbmlmb3JtbHkgc3ByZWFkIGZhY2V0cyByZWFkIGFzIHNub3cgb3IgZHVzdCBzcGVja3MgLS0gaXNvbGF0ZWRcbiAgICAvLyBicmlnaHQgZG90cyBvbiBhIHNtb290aCBmaWVsZCwgd2hpY2ggaXMgd2hhdCB0aGUgc2Vjb25kIHR1bmluZyBzaGlwcGVkIGFuZCB3aGF0IHRoZSBwbGF0ZSBoYXNcbiAgICAvLyBub25lIG9mLiBSZWFsIHNwYW5nbGUgYmxvb21zOiB0aGUgY3J5c3RhbHMgbnVjbGVhdGUgdG9nZXRoZXIsIHNvIHRoZSBzdXJmYWNlIGlzIHBhdGNoZXMgb2ZcbiAgICAvLyBkZW5zZSBicmlnaHQgZmFjZXRzIHdpdGggcXVpZXQgZ3JleSBiZXR3ZWVuIHRoZW0uIGBzcGFuZ2xlQ2x1c3RlcnNgIGNlbnRyZXMgY2FycnlcbiAgICAvLyBgMSAtIHNwYW5nbGVMb29zZWAgb2YgdGhlIGZhY2V0cywgZGlzdHJpYnV0ZWQgc3FydC11bmlmb3JtbHkgc28gZWFjaCBibG9vbSBpcyBkZW5zZSBhdCBpdHNcbiAgICAvLyBtaWRkbGUgYW5kIHRoaW5zIGF0IGl0cyBlZGdlOyB0aGUgcmVzdCBzdGF5IHNjYXR0ZXJlZCBzbyB0aGUgZmllbGQgaXMgbmV2ZXIgYmFsZC5cbiAgICBjb25zdCBjbCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IG8uc3BhbmdsZUNsdXN0ZXJzID8/IDAgfSwgKCkgPT4gW3JuZCgpICogcywgcm5kKCkgKiBzLCBzICogKDAuMDQgKyBybmQoKSAqIDAuMTApXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zcGFuZ2xlID8/IDUyMCk7IGkrKykge1xuICAgICAgbGV0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7XG4gICAgICBpZiAoY2wubGVuZ3RoICYmIHJuZCgpID4gKG8uc3BhbmdsZUxvb3NlID8/IDAuMjUpKSB7XG4gICAgICAgIGNvbnN0IGMgPSBjbFsocm5kKCkgKiBjbC5sZW5ndGgpIHwgMF0sIGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNbMl07XG4gICAgICAgIHggPSBjWzBdICsgTWF0aC5jb3MoYSkgKiBkOyB5ID0gY1sxXSArIE1hdGguc2luKGEpICogZDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHIgPSBzICogKChvLnNwYW5nbGVNaW4gPz8gMC4wMDQpICsgTWF0aC5wb3cocm5kKCksIDIpICogKG8uc3BhbmdsZU1heCA/PyAwLjAxMykpO1xuICAgICAgY29uc3QgdiA9IG1pZCArICgxIC0gbWlkKSAqICgwLjUgKyBybmQoKSAqIDAuNSk7XG4gICAgICBjb25zdCBrID0gNCArIE1hdGguZmxvb3Iocm5kKCkgKiAzKTtcbiAgICAgIGNvbnN0IGEwID0gcm5kKCkgKiBNYXRoLlBJICogMjtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwkeyhvLnNwYW5nbGVBbHBoYSA/PyAwLjIpICsgcm5kKCkgKiAoby5zcGFuZ2xlQWxwaGFWYXIgPz8gMC4zNSl9KWA7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgY29uc3QgYSA9IGEwICsgaiAqIE1hdGguUEkgKiAyIC8gaywgcnIgPSByICogKDAuNTUgKyBybmQoKSAqIDAuNzUpO1xuICAgICAgICAgIGNvbnN0IHB4ID0geCArIGR4ICsgTWF0aC5jb3MoYSkgKiByciwgcHkgPSB5ICsgZHkgKyBNYXRoLnNpbihhKSAqIHJyICogMC44O1xuICAgICAgICAgIGlmIChqID09PSAwKSBjdHgubW92ZVRvKHB4LCBweSk7IGVsc2UgY3R4LmxpbmVUbyhweCwgcHkpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZGFyayBkcmlwIHN0cmVha3MgcnVubmluZyBkb3duOiB3ZWF0aGVyaW5nLCBhbmQgd2hhdCBnaXZlcyBhIGZsYXQgcGFuZWwgYSB2ZXJ0aWNhbCByZWFkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zdHJlYWtzID8/IDMwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDEwLCB5MCA9IHJuZCgpICogcyAqIDAuNSwgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNyk7XG4gICAgICBjb25zdCB2ID0gbG8gKyAobWlkIC0gbG8pICogcm5kKCkgKiAwLjYsIGEgPSAwLjA2ICsgcm5kKCkgKiAwLjE0O1xuICAgICAgY29uc3QgZ3IgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwwKWApO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAuMjUsIGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7YX0pYCk7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCwgeTAsIHcsIGxlbik7XG4gICAgfVxuICAgIC8vIEZJTkUgR1JBSU4gYW5kIFNDUkFUQ0hFUy4gTWVhc3VyZWQgYWdhaW5zdCB0aGUgcGxhdGUgYXQgbWF0Y2hlZCBtYWduaWZpY2F0aW9uLCB0aGlzIGlzIHRoZVxuICAgIC8vIGxheWVyIHRoZSBmaXJzdCB0dW5pbmcgd2FzIG1pc3NpbmcgZW50aXJlbHk6IHRoZSBwbGF0ZSdzIHppbmMgaXMgc2NyYXRjaHkgYXQgMS0yIHB4IGV2ZXJ5d2hlcmVcbiAgICAvLyAtLSBkcmF3aW5nIG1hcmtzLCBoYW5kbGluZyBzY3VmZnMsIHRoZSBjcnlzdGFsIGJvdW5kYXJpZXMgdGhlbXNlbHZlcyAtLSBhbmQgd2l0aG91dCBpdCB0aGVcbiAgICAvLyBkcmlmdCBhbmQgdGhlIHNwYW5nbGUgcmVhZCBhcyBzb2Z0IHNub3cgb24gc21vb3RoIGdyZXkgaG93ZXZlciB3ZWxsIHRoZSBISVNUT0dSQU0gbWF0Y2hlcy4gVHdvXG4gICAgLy8gY3JvcHMgd2l0aCBpZGVudGljYWwgbWVhbiwgc2QgYW5kIHBlcmNlbnRpbGVzIGNhbiBsb29rIG5vdGhpbmcgYWxpa2U7IHRoZSBzdGF0aXN0aWMgdGhhdFxuICAgIC8vIHNlcGFyYXRlcyB0aGVtIGlzIHNwYXRpYWwgZnJlcXVlbmN5LCBzbyB0dW5lIHRoaXMgYnkgZXllIGFnYWluc3QgYSBtYXRjaGVkIGNyb3AsIG5vdCBieSBzZC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyYWluID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiAyLCBoID0gMSArIHJuZCgpICogMjtcbiAgICAgIGNvbnN0IHVwID0gcm5kKCkgPCAwLjU7XG4gICAgICBjb25zdCB2ID0gdXAgPyBtaWQgKyAoMSAtIG1pZCkgKiAoMC40ICsgcm5kKCkgKiAwLjYpIDogbG8gKyAobWlkIC0gbG8pICogcm5kKCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHswLjEwICsgcm5kKCkgKiAwLjMwfSlgO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkgKyBkeSwgdywgaCk7XG4gICAgfVxuICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNjcmF0Y2hlcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMDA2ICsgcm5kKCkgKiAwLjA1NSksIGEgPSAocm5kKCkgLSAwLjUpICogMC43ICsgTWF0aC5QSSAvIDI7XG4gICAgICBjb25zdCB1cCA9IHJuZCgpIDwgMC40NTtcbiAgICAgIGNvbnN0IHYgPSB1cCA/IG1pZCArICgxIC0gbWlkKSAqICgwLjUgKyBybmQoKSAqIDAuNSkgOiBsbyArIChtaWQgLSBsbykgKiBybmQoKSAqIDAuODtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7MC4xMCArIHJuZCgpICogMC4yOH0pYDtcbiAgICAgIGN0eC5saW5lV2lkdGggPSAwLjcgKyBybmQoKSAqIDEuNjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIHkgKyBkeSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIGR4ICsgTWF0aC5jb3MoYSkgKiBsZW4sIHkgKyBkeSArIE1hdGguc2luKGEpICogbGVuKTsgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSVVNUIGZyb20gdGhlIHdlbGRzOiBhIHdhc2ggaW4gdGhlIHRvcCBhbmQgYm90dG9tIGJhbmRzLCBwbHVzIHJ1bnMgdHJhaWxpbmcgb3V0IG9mIGl0XG4gICAgaWYgKG8ucnVzdCkge1xuICAgICAgY29uc3QgYyA9IG8ucnVzdCwgYmFuZCA9IG8ucnVzdEJhbmQgPz8gMC4xNjtcbiAgICAgIGNvbnN0IHJnYnMgPSBgJHtNYXRoLnJvdW5kKDI1NSAqIGNbMF0pfSwke01hdGgucm91bmQoMjU1ICogY1sxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiBjWzJdKX1gO1xuICAgICAgLy8gdGhlIHR3byBiYW5kcyBhcmUgU0VQQVJBVEU6IG9uIGEgYmFycmllciB0aGUgZ3JvdW5kIGVuZCBjYXJyaWVzIHRoZSBmZWV0LCB0aGUgc3R1YiB3ZWxkcyBhbmRcbiAgICAgIC8vIGV2ZXJ5IHJ1biBvZmYgdGhlbSwgYW5kIHRoZSB0b3AgZW5kIGNhcnJpZXMgb25seSB0aGUgcmFpbCdzIG93biB3ZWxkcy4gT25lIHN5bW1ldHJpYyBiYW5kXG4gICAgICAvLyB3aWRlIGVub3VnaCB0byByZWFjaCB0aGUgcmFpbCB3ZWxkcyBhdCB2ID0gMC4yNiBhbHNvIHdhc2hlcyB0aGUgd2hvbGUgdXBwZXIgdGhpcmQgb2YgZXZlcnlcbiAgICAgIC8vIHBhbmVsLCB3aGljaCB0aGUgcGxhdGUgZG9lcyBub3QgaGF2ZS5cbiAgICAgIGZvciAoY29uc3QgW2VkZ2UsIGRpciwgYl0gb2YgW1swLCAxLCBvLnJ1c3RCYW5kVG9wID8/IGJhbmRdLCBbcywgLTEsIGJhbmRdXSBhcyBudW1iZXJbXVtdKSB7XG4gICAgICAgIGNvbnN0IGdyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGVkZ2UsIDAsIGVkZ2UgKyBkaXIgKiBzICogYik7XG4gICAgICAgIGdyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYnN9LCR7by5ydXN0V2FzaCA/PyAwLjMwfSlgKTsgZ3IuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdic30sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnJ1c3RSdW5zID8/IDIyKTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTQ7XG4gICAgICAgIGNvbnN0IHRvcCA9IHJuZCgpIDwgMC41O1xuICAgICAgICBjb25zdCB5MCA9IHRvcCA/IDAgOiBzIC0gcyAqIGJhbmQgKiAoMC4zICsgcm5kKCkpO1xuICAgICAgICBjb25zdCBsZW4gPSBzICogKDAuMTAgKyBybmQoKSAqIDAuMzIpO1xuICAgICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2JzfSwkezAuMTggKyBybmQoKSAqIDAuMzJ9KWApOyBnci5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2JzfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3I7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCwgeTAsIHcsIGxlbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjYW5vcHktbW9kdWxlIGhlbHBlcnNcbiAqIFRoZSBmaXZlIENBTk9QWSBNT0RVTEVTIC0tIG5pcGEgdGhhdGNoLCB2ZXRpdmVyIHRoYXRjaCwgc3BsaXQgYmFtYm9vLCBjb3JydWdhdGVkIG1ldGFsLFxuICogdGFycGF1bGluIC0tIGFyZSBvbmUgZmFtaWx5OiBmb3VyIGNvcm5lciBwb3N0cyBpbnNpZGUgYSA0IHggNCBtIG1vZHVsZSwgYSBoZWFkIGZyYW1lLCBhbmQgYSByb29mXG4gKiB3aG9zZSBtYXRlcmlhbCBpcyB0aGUgd2hvbGUgaWRlbnRpdHkuIFdoYXQgdGhleSBuZWVkIGJleW9uZCB0aGUgc3RyZWV0LXByb3Agdm9jYWJ1bGFyeSBpcyBhXG4gKiByb29maW5nIHRpbGUgcGVyIG1hdGVyaWFsIGFuZCB0aGUgY3VsbSBtYXBwaW5nIGEgcm91bmQgYmFtYm9vIHBvbGUgd2FudHMuXG4gKlxuICogYGN1bG1VVmAsIGBncmFpbkxpbmVzYCwgYHdlYXRoZXJQYXRjaGVzYCwgYG1vdWxkQ2x1c3RlcnNgIGFuZCBgY3VsbVRpbGVgIGFyZSBwb3J0ZWQgVkVSQkFUSU0gZnJvbVxuICogc2NyYXRjaC9fZmVuY2UvZmVuY2UuaGVscGVycy50bXBsLCB3aGVyZSB0aGV5IHdlcmUgd3JpdHRlbiBmb3IgdGhlIGJhbWJvbyBmZW5jZSBwYW5lbCBhbmQgd2hlcmVcbiAqIHRoZSByZWFzb25pbmcgYmVoaW5kIGV2ZXJ5IG51bWJlciBpcyByZWNvcmRlZC4gVGhleSBhcmUgY29waWVkIHJhdGhlciB0aGFuIHNoYXJlZCBiZWNhdXNlIHRoZSB0d29cbiAqIGZhbWlsaWVzIGtlZXAgc2VwYXJhdGUgdGVtcGxhdGUgc2V0czsgYSB0aGlyZCBmYW1pbHkgd2FudGluZyB0aGVtIHNob3VsZCBtb3ZlIHRoZW0gdXAgaW50b1xuICogaGVscGVycy50bXBsIHJhdGhlciB0aGFuIGNvcHkgdGhlbSBhIHNlY29uZCB0aW1lLlxuICovXG5cbi8qKiBDVUxNIFVWczogdSBhcm91bmQgdGhlIGNpcmN1bWZlcmVuY2UgYW5kIHYgYWxvbmcgdGhlIGxlbmd0aCwgYm90aCBpbiBtZXRyZXMgb3ZlciBgc2NhbGVgLCBzbyBhXG4gKiAgY3VsbSB0aWxlJ3Mgbm9kZSByaW5ncyBjcm9zcyB0aGUgY3VsbSBhdCByZWFsIHNwYWNpbmcgd2hpY2hldmVyIHdheSB0aGUgY3lsaW5kZXIgaXMgdGhlbiByb3RhdGVkLlxuICogIEFwcGx5IEJFRk9SRSByb3RhdGUvdHJhbnNsYXRlLiBgdk9mZmAgcGhhc2VzIHRoZSB0aWxlIGFsb25nIHRoZSBjdWxtIHNvIG5vIHR3byBjdWxtcyAob3IgYSBjb3JkXG4gKiAgY29sbGFyKSByaW5nIGF0IHRoZSBzYW1lIHN0YXRpb24uICovXG5mdW5jdGlvbiBjdWxtVVYoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHI6IG51bWJlciwgaDogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCB2T2ZmID0gMCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgY29uc3Qga3UgPSAoMiAqIE1hdGguUEkgKiByKSAvIHNjYWxlLCBrdiA9IGggLyBzY2FsZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1di5nZXRYKGkpICoga3UsIHV2LmdldFkoaSkgKiBrdiArIHZPZmYpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEZpbmUgbG9uZ2l0dWRpbmFsIGdyYWluIGJldHdlZW4geTAgYW5kIHkxIGFjcm9zcyBhIGJhbmQgeDAuLngxOiBtYW55IGhhaXJsaW5lcywgbW9zdGx5IGEgZGFya1xuICogIGZpYnJlIHRvbmUsIGEgZmV3IGJsZWFjaGVkLCBzbyB0aGUgc3VyZmFjZSByZWFkcyBhcyBmaWJyb3VzIGJhbWJvbyByYXRoZXIgdGhhbiBwYWludC4gKi9cbmZ1bmN0aW9uIGdyYWluTGluZXMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJuZDogKCkgPT4gbnVtYmVyLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBuOiBudW1iZXIsIGRhcms6IHN0cmluZywgbGlnaHQ6IHN0cmluZywgYU1heDogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgY29uc3QgeCA9IHgwICsgcm5kKCkgKiAoeDEgLSB4MCksIGEgPSAwLjA0ICsgcm5kKCkgKiBhTWF4LCB3ID0gcm5kKCkgPCAwLjc1ID8gMSA6IDEuNjtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtybmQoKSA8IDAuNzIgPyBkYXJrIDogbGlnaHR9LCR7YS50b0ZpeGVkKDMpfSlgO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5MCwgdywgeTEgLSB5MCk7XG4gIH1cbn1cblxuLyoqIFNvZnQgY2xvdWR5IHdlYXRoZXJpbmcgYWxvbmcgdGhlIGZpYnJlIGRpcmVjdGlvbjogbGVuZ3Rod2lzZSBwYXRjaGVzIG9mIHdhcm0gYnJvd24tZ3JleSAob2xkXG4gKiAgbGlnbmluIHNob3dpbmcgdGhyb3VnaCB0aGUgYmxlYWNoKSBhbmQgb2YgbmVhci13aGl0ZSAoc3VuLWJsZWFjaGVkIGZhY2VzKSwgc28gdGhlIHRvbmUgZHJpZnRzXG4gKiAgdGhlIHdheSB3ZWF0aGVyZWQgYmFtYm9vIGRvZXMgaW5zdGVhZCBvZiBzaXR0aW5nIGF0IG9uZSBncmV5LiBWZXJ0aWNhbCA9IGFsb25nIHRoZSBmaWJyZS4gKi9cbmZ1bmN0aW9uIHdlYXRoZXJQYXRjaGVzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBybmQ6ICgpID0+IG51bWJlciwgczogbnVtYmVyLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCBuOiBudW1iZXIsIHdhcm1BOiBudW1iZXIsIGJsZWFjaEE6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykge1xuICAgIGNvbnN0IHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4xMiArIHJuZCgpICogMC40NSksIHdhcm0gPSBybmQoKSA8IDAuNTtcbiAgICBjb25zdCBjID0gd2FybSA/ICcxMTIsMTAwLDg4JyA6ICcyNTUsMjU1LDI1NScsIGEgPSB3YXJtID8gd2FybUEgKiAoMC40ICsgcm5kKCkgKiAwLjYpIDogYmxlYWNoQSAqICgwLjQgKyBybmQoKSAqIDAuNik7XG4gICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSwgMCwgeSArIGxlbik7XG4gICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y30sMClgKTsgZzIuYWRkQ29sb3JTdG9wKDAuMzUsIGByZ2JhKCR7Y30sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNjUsIGByZ2JhKCR7Y30sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y30sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeDAsIHkgKyBkeSwgeDEgLSB4MCwgbGVuKTtcbiAgfVxufVxuXG4vKiogTW91bGQ6IGNsdXN0ZXJzIG9mIHNtYWxsIGRhcmsgc3BlY2tzIChhIGZldyBkb3plbiBlYWNoKSwgdGhlIHdheSBibGFjayBtb3VsZCBzaXRzIG9uIG91dGRvb3JcbiAqICBiYW1ib28gLS0gZGVuc2UgYXQgYSBmZXcgc3BvdHMsIGFic2VudCBlbHNld2hlcmUuIEFscGhhIGNhcHBlZCBzbyB0aGUgZGFya2VzdCBzcGVjayBvdmVyIHRoZVxuICogIG1lYXN1cmVkIGFsYmVkbyBzdGF5cyB3ZWxsIGNsZWFyIG9mIHRoZSBob2xlIGdhdGUncyBsdW1hIDU4LiBXcmFwcyBpbiB5LiAqL1xuZnVuY3Rpb24gbW91bGRDbHVzdGVycyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcm5kOiAoKSA9PiBudW1iZXIsIHM6IG51bWJlciwgc3BvdHM6IG51bWJlcltdW10sIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIG46IG51bWJlciwgYU1heDogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAoY29uc3QgW2N4LCBjeV0gb2Ygc3BvdHMpIHtcbiAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3ksIDAsIGN4LCBjeSwgTWF0aC5tYXgocngsIHJ5KSAqIDAuOCk7XG4gICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDI4LDI2LDIyLCR7KGFNYXggKiAwLjkpLnRvRml4ZWQoMyl9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjgsMjYsMjIsMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3gsIGN5ICsgZHksIHJ4LCByeSwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBjeCArIChybmQoKSArIHJuZCgpIC0gMSkgKiByeCwgeSA9IGN5ICsgKHJuZCgpICsgcm5kKCkgLSAxKSAqIHJ5O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDI4LDI2LDIyLCR7KDAuMDggKyBybmQoKSAqIGFNYXgpLnRvRml4ZWQoMyl9KWA7XG4gICAgICBjb25zdCB3ID0gMSArIHJuZCgpICogMiwgaCA9IDEgKyBybmQoKSAqIDM7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4LCB5ICsgZHksIHcsIGgpO1xuICAgIH1cbiAgfVxufVxuXG4vKiogQ1VMTSB0aWxlIGZvciB0aGUgd2hvbGUtYmFtYm9vIHBvc3QgYW5kIHJhaWxzOiB4IHJ1bnMgQVJPVU5EIHRoZSBjdWxtLCB5IEFMT05HIGl0IChzZWUgY3VsbVVWKSxcbiAqICAwLjYgbSBvZiBjdWxtIHBlciB0aWxlLiBUd28gbm9kZSByaW5ncyBwZXIgdGlsZSBhdCBpcnJlZ3VsYXIgc3RhdGlvbnMgLS0gYSBkYXJrIGdyb292ZSB1bmRlciBhXG4gKiAgcGFsZSByYWlzZWQgcmlkZ2UsIHRoZSBncmFpbiBicmVha2luZyBhdCBlYWNoIC0tIHdpdGggZmluZSBsb25naXR1ZGluYWwgZ3JhaW4gYmV0d2VlbiB0aGVtLCBhXG4gKiAgbG9uZyBkcnlpbmcgc3BsaXQsIGxlbmd0aHdpc2Ugd2VhdGhlcmluZyBwYXRjaGVzIGFuZCBibGFjayBtb3VsZCBnYXRoZXJlZCBqdXN0IGJlbG93IGVhY2ggbm9kZSxcbiAqICBhcyBpbiB0aGUgcGxhdGUncyBwb3N0IGFuZCByYWlsIGNyb3BzLiBBIG11bHRpcGxpZXIgb24gdGhlIG1lYXN1cmVkIGN1bG0gZ3JleS4gKi9cbmZ1bmN0aW9uIGN1bG1UaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IERBUksgPSAnOTIsNzgsNjInLCBMSUdIVCA9ICcyNTUsMjU1LDI1NSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjBlZmVjJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGEgc29mdCB0b25lIGRyaWZ0IGFyb3VuZCB0aGUgY3VsbSwgc28gdGhlIHJvdW5kIGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGNvbnN0IGdhID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHMsIDApO1xuICAgIGdhLmFkZENvbG9yU3RvcCgwLCAncmdiYSgxMDAsOTIsODQsMC4xMiknKTsgZ2EuYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoMjU1LDI1NSwyNTUsMC4xMCknKTsgZ2EuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDEwMCw5Miw4NCwwLjEyKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnYTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCAxNCwgMC4xMiwgMC4zMCk7XG4gICAgLy8gbm9kZSBzdGF0aW9uczogdHdvIHBlciB0aWxlLCBpcnJlZ3VsYXIsIG5ldmVyIHdpdGhpbiAwLjE4IG9mIGVhY2ggb3RoZXIgb3IgdGhlIHdyYXBcbiAgICBjb25zdCBub2RlcyA9IFtzICogKDAuMjAgKyBybmQoKSAqIDAuMTApLCBzICogKDAuNjYgKyBybmQoKSAqIDAuMTIpXTtcbiAgICAvLyBncmFpbiBpbiBzZWdtZW50cyBiZXR3ZWVuIHRoZSBub2RlcyBzbyBpdCBicmVha3MgYXQgZWFjaCByaW5nXG4gICAgY29uc3Qgc3RhdGlvbnMgPSBbMCwgLi4ubm9kZXMsIHNdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpICsgMSA8IHN0YXRpb25zLmxlbmd0aDsgaSsrKSBncmFpbkxpbmVzKGN0eCwgcm5kLCAwLCBzLCBzdGF0aW9uc1tpXSwgc3RhdGlvbnNbaSArIDFdLCAyNjAsIERBUkssIExJR0hULCAwLjI2KTtcbiAgICAvLyBhIGNvdXBsZSBvZiBsb25nIGRyeWluZyBzcGxpdHMgYWxvbmcgdGhlIGZpYnJlXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAyOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4yNSArIHJuZCgpICogMC41KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgzOCwzMiwyNiwwLjU1KSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5ICsgZHksIDEuNCwgbGVuKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjE4KSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4ICsgMS40LCB5ICsgZHksIDEsIGxlbik7XG4gICAgfVxuICAgIC8vIHRoZSBub2RlIHJpbmdzXG4gICAgZm9yIChjb25zdCB5IG9mIG5vZGVzKSB7XG4gICAgICBjb25zdCBncyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5IC0gcyAqIDAuMDMsIDAsIHkpO1xuICAgICAgZ3MuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDYwLDUwLDQwLDApJyk7IGdzLmFkZENvbG9yU3RvcCgxLCAncmdiYSg2MCw1MCw0MCwwLjIyKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdzOyBjdHguZmlsbFJlY3QoMCwgeSAtIHMgKiAwLjAzLCBzLCBzICogMC4wMyk7ICAgICAgICAgIC8vIHNoYWRlIHVwIHRvIHRoZSByaW5nXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTIsNDQsMzYsMC42MiknOyBjdHguZmlsbFJlY3QoMCwgeSwgcywgMi41KTsgICAgICAgIC8vIHRoZSBncm9vdmVcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjM0KSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgMi41LCBzLCA0KTsgLy8gdGhlIHJhaXNlZCBzaGVhdGggcmlkZ2VcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg2MCw1MCw0MCwwLjMwKSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgNi41LCBzLCAxLjUpOyAgLy8gaXRzIGxvd2VyIGVkZ2VcbiAgICAgIGNvbnN0IGdkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkgKyA4LCAwLCB5ICsgcyAqIDAuMDUpO1xuICAgICAgZ2QuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDYwLDUwLDQwLDAuMjApJyk7IGdkLmFkZENvbG9yU3RvcCgxLCAncmdiYSg2MCw1MCw0MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdkOyBjdHguZmlsbFJlY3QoMCwgeSArIDgsIHMsIHMgKiAwLjA1KTtcbiAgICB9XG4gICAgLy8gbW91bGQgZ2F0aGVycyBqdXN0IGJlbG93IHRoZSBub2RlcyBhbmQgaW4gYSBjb3VwbGUgb2YgbG9vc2UgcGF0Y2hlc1xuICAgIGNvbnN0IHNwb3RzOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChjb25zdCB5IG9mIG5vZGVzKSBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCB5ICsgcyAqICgwLjAyICsgcm5kKCkgKiAwLjA1KV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSBzcG90cy5wdXNoKFtybmQoKSAqIHMsIHJuZCgpICogc10pO1xuICAgIG1vdWxkQ2x1c3RlcnMoY3R4LCBybmQsIHMsIHNwb3RzLCBzICogMC4xMCwgcyAqIDAuMDYsIDkwLCAwLjMwKTtcbiAgfSk7XG59XG5cblxuLyoqXG4gKiBUSEFUQ0ggdGlsZSwgZm9yIGEgcm9vZiBtYXBwZWQgd2l0aCBXT1JMRCBVVnMgc28gdSBydW5zIGFsb25nIHRoZSByaWRnZSBhbmQgdiB1cCB0aGUgc2xvcGUuXG4gKlxuICogVGhhdGNoIGlzIGxhaWQgaW4gQ09VUlNFUzogZWFjaCBjb3Vyc2UgaXMgYSBidW5kbGUgb2Ygc3RlbXMgcGVnZ2VkIHRvIGEgcHVybGluIHdpdGggaXRzIGJ1dHRzXG4gKiBoYW5naW5nIG92ZXIgdGhlIGNvdXJzZSBiZWxvdywgc28gd2hhdCBhIHZpZXdlciBhY3R1YWxseSByZXNvbHZlcyBhdCBwcm9wIGRpc3RhbmNlIGlzIGEgc3RhY2sgb2ZcbiAqIGhvcml6b250YWwgYmFuZHMgd2l0aCBhIHNoYWRvdyBsaW5lIHVuZGVyIGVhY2ggYnV0dCwgYW5kIGEgZmlicmUgdGV4dHVyZSBydW5uaW5nIGRvd24gdGhlIHNsb3BlXG4gKiBpbnNpZGUgdGhlbS4gTW9kZWxsaW5nIHRoZSBzdGVtcyBpcyB3aGF0IHRoZSByZWdpc3RyeSBub3RlcyBmb3JiaWQ7IHRoaXMgaXMgd2hlcmUgdGhhdCBkZXRhaWxcbiAqIGdvZXMgaW5zdGVhZC5cbiAqXG4gKiBPbmUgdGlsZSBpcyBgY291cnNlc2AgY291cnNlcyB0YWxsLiBUaGUga25vYnMgYXJlIHdoYXQgc2VwYXJhdGVzIHRoZSB0d28gdGhhdGNoZXMgb24gdGhlIHBsYXRlczpcbiAqICAgbmlwYSAgICAgYnJvYWQgZmxhdCBwYWxtIGJsYWRlcyAtLSBmZXcgd2lkZSBzdHJva2VzIChgc3RlbVdgIDMtNyBweCksIGEgd2lkZSB0b25hbCBgc3ByZWFkYCxcbiAqICAgICAgICAgICAgYSBkZWVwbHkgUkFHR0VEIGJ1dHQgbGluZSBhbmQgb2NjYXNpb25hbCBtaXNzaW5nIGJsYWRlcy5cbiAqICAgdmV0aXZlciAgY29tYmVkIGdyYXNzIC0tIGh1bmRyZWRzIG9mIGhhaXJsaW5lcywgYSBuYXJyb3cgc3ByZWFkLCBhbiBhbG1vc3Qgc3RyYWlnaHQgYnV0dC5cbiAqIGBtb3NzYCBtdWx0aXBsaWVzIGEgZ3JlZW4gY2FzdCBpbnRvIHNjYXR0ZXJlZCBwYXRjaGVzOiB0aGUgdGlsZSBpcyBhIE1VTFRJUExJRVIgb24gYSBwYWxlIHN0cmF3XG4gKiBhbGJlZG8sIGFuZCBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbiwgc28gZ3JlZW4gaGFzIHRvIGFycml2ZSBhcyBcImxlc3MgcmVkIGFuZCBibHVlXCIgYW5kIG5ldmVyXG4gKiBhcyBhIHBhaW50ZWQgZ3JlZW4uIE5vdGhpbmcgaGVyZSBnb2VzIGJlbG93IDAuNDIgb2YgdGhlIGFsYmVkbywgd2hpY2gga2VlcHMgdGhlIGRhcmtlc3QgdGV4ZWwgb2ZcbiAqIGEgc3RyYXcgYXQgbHVtYSB+MTUwIHdlbGwgY2xlYXIgb2YgdGhlIHNpbGhvdWV0dGUgZ2F0ZSdzIGJhY2tkcm9wIGJhbmQuXG4gKi9cbmZ1bmN0aW9uIHRoYXRjaFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBuYzogbnVtYmVyID0gby5jb3Vyc2VzID8/IDQsIGNoID0gcyAvIG5jO1xuICAgIGNvbnN0IHN0ZW1zOiBudW1iZXIgPSBvLnN0ZW1zID8/IDI2MCwgc3ByZWFkOiBudW1iZXIgPSBvLnNwcmVhZCA/PyAwLjEyO1xuICAgIGNvbnN0IHdNaW46IG51bWJlciA9IG8uc3RlbVc/LlswXSA/PyAxLCB3TWF4OiBudW1iZXIgPSBvLnN0ZW1XPy5bMV0gPz8gMjtcbiAgICBjb25zdCByYWdnZWQ6IG51bWJlciA9IG8ucmFnZ2VkID8/IDAuMDY7ICAgICAgICAgICAgICAgICAvLyBidXR0LWxpbmUgd2F2aW5lc3MsIGFzIGEgc2hhcmUgb2YgY2hcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG5cbiAgICAvLyB0aGUgYnV0dCBsaW5lIG9mIGVhY2ggY291cnNlLCBqaXR0ZXJlZCBwZXIgY29sdW1uIGFuZCBTSEFSRUQgd2l0aCB0aGUgY291cnNlIGFib3ZlIHNvIHRoZVxuICAgIC8vIHNoYWRvdyBhbmQgdGhlIGJsYWRlcyBhZ3JlZSBvbiB3aGVyZSB0aGUgZWRnZSBpc1xuICAgIGNvbnN0IGJ1dHRzOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPD0gbmM7IGMrKykge1xuICAgICAgY29uc3Qgcm93OiBudW1iZXJbXSA9IFtdO1xuICAgICAgbGV0IHkgPSAwO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPD0gczsgeCsrKSB7XG4gICAgICAgIGlmICh4ICUgTWF0aC5tYXgoMiwgTWF0aC5yb3VuZChzIC8gNDgpKSA9PT0gMCkgeSA9IChybmQoKSAqIDIgLSAxKSAqIHJhZ2dlZCAqIGNoO1xuICAgICAgICByb3cucHVzaChjICogY2ggKyB5KTtcbiAgICAgIH1cbiAgICAgIGJ1dHRzLnB1c2gocm93KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IG5jOyBjKyspIHtcbiAgICAgIGNvbnN0IHkwID0gYyAqIGNoO1xuICAgICAgLy8gdGhlIGNvdXJzZSdzIG93biB0b25lOiB0aGF0Y2ggd2VhdGhlcnMgY291cnNlIGJ5IGNvdXJzZSwgdGhlIGxvd2VyIG9uZXMgZ3JleWVyXG4gICAgICBjb25zdCB0ID0gMSAtIHNwcmVhZCAqIHJuZCgpO1xuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogdCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7TWF0aC5yb3VuZCh2ICogMC45ODUpfSwke01hdGgucm91bmQodiAqIDAuOTUpfSlgO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIHkwIC0gcmFnZ2VkICogY2ggLSAxLCBzLCBjaCArIDIgKiByYWdnZWQgKiBjaCArIDIpO1xuICAgICAgLy8gc3RlbXMgcnVubmluZyBET1dOIHRoZSBzbG9wZSBpbnNpZGUgdGhlIGNvdXJzZSwgZWFjaCBhIGxpdHRsZSBwYXN0IGl0cyBidXR0IGxpbmVcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc3RlbXM7IGsrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjb25zdCB3ID0gd01pbiArIHJuZCgpICogKHdNYXggLSB3TWluKTtcbiAgICAgICAgY29uc3QgdG9uZSA9IDEgLSBzcHJlYWQgKiAoMC4zICsgcm5kKCkgKiAwLjcpO1xuICAgICAgICBjb25zdCBhID0gMC4xOCArIHJuZCgpICogMC4zMjtcbiAgICAgICAgY29uc3QgZGFyayA9IHJuZCgpIDwgMC42MjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGRhcmsgPyBgcmdiYSgke01hdGgucm91bmQoMTIwICogdG9uZSl9LCR7TWF0aC5yb3VuZCgxMDYgKiB0b25lKX0sJHtNYXRoLnJvdW5kKDg0ICogdG9uZSl9LCR7YS50b0ZpeGVkKDMpfSlgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYHJnYmEoMjU1LDI1MywyNDYsJHsoYSAqIDAuNikudG9GaXhlZCgzKX0pYDtcbiAgICAgICAgY29uc3QgeVRvcCA9IHkwIC0gY2ggKiAoMC4xNSArIHJuZCgpICogMC4yNSk7XG4gICAgICAgIGNvbnN0IHlCb3QgPSBidXR0c1tjICsgMV1bTWF0aC5taW4ocywgTWF0aC5yb3VuZCh4KSldICsgY2ggKiAocm5kKCkgKiAwLjEwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHlUb3AsIHcsIE1hdGgubWF4KDIsIHlCb3QgLSB5VG9wKSk7XG4gICAgICB9XG4gICAgICAvLyBNSVNTSU5HIGJsYWRlczogYSBmZXcgZ2FwcyB3aGVyZSB0aGUgY291cnNlIGhhcyB0aGlubmVkLCBkYXJrIGJ1dCBuZXZlciBibGFja1xuICAgICAgY29uc3QgZ2FwcyA9IG8uZ2FwcyA/PyAwO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBnYXBzOyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IHMgKiAoMC4wMSArIHJuZCgpICogMC4wMyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSg5Niw4NCw2NiwkeygwLjIwICsgcm5kKCkgKiAwLjE4KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeTAgKyBjaCAqIDAuMjUsIHcsIGNoICogKDAuNCArIHJuZCgpICogMC41KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhlIHNoYWRvdyBlYWNoIGNvdXJzZSdzIGJ1dHQgY2FzdHMgb24gdGhlIG9uZSBiZWxvdzogYSBncmFkaWVudCBmYWxsaW5nIEFXQVkgZnJvbSB0aGUgbGluZSxcbiAgICAvLyBkcmF3biBhbG9uZyB0aGUgaml0dGVyZWQgYnV0dCBzbyB0aGUgc2hhZG93IGlzIGFzIHJhZ2dlZCBhcyB0aGUgZWRnZSB0aGF0IGNhc3RzIGl0LCB3aXRoIHRoZVxuICAgIC8vIExJVCBUSVBTIG9mIHRoZSBjb3Vyc2UgYWJvdmUgaXQgYXMgYSBwYWxlIGxpbmUuIFRoZSBwYWlyIGlzIHdoYXQgbWFrZXMgdGhlIHJvb2YgcmVhZCBhc1xuICAgIC8vIHN0YWNrZWQgbGF5ZXJzOyB0aGUgc2hhZG93IGFsb25lIHJlYWRzIGFzIGdyYWluLCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBidWlsZCBsb29rZWQgbGlrZS5cbiAgICBmb3IgKGxldCBjID0gMTsgYyA8PSBuYzsgYysrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgICBjb25zdCB5YiA9IGJ1dHRzW2NdW3hdO1xuICAgICAgICBjb25zdCBnaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiAtIGNoICogMC4wOSwgMCwgeWIpO1xuICAgICAgICBnaC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LDI1MiwyNDIsMCknKTsgZ2guYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDI1NSwyNTIsMjQyLCR7KG8udGlwID8/IDAuMzQpLnRvRml4ZWQoMyl9KWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ2g7XG4gICAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHliIC0gY2ggKiAwLjA5ICsgZHksIDEsIGNoICogMC4wOSk7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliLCAwLCB5YiArIGNoICogMC4yMik7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSg1OCw0OCwzNiwkeyhvLnNoYWRvdyA/PyAwLjQyKS50b0ZpeGVkKDMpfSlgKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDU4LDQ4LDM2LDApJyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeWIgKyBkeSwgMSwgY2ggKiAwLjIyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNT1NTIC8gTU9VTEQ6IGxlc3MgcmVkIGFuZCBibHVlIG92ZXIgc29mdCBwYXRjaGVzLCBuZXZlciBhIHBhaW50ZWQgZ3JlZW5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLm1vc3MgPz8gMCk7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xNCk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGNvbnN0IGEgPSAwLjE0ICsgcm5kKCkgKiAwLjIyO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDE1MCwxOTAsMTEwLCR7YS50b0ZpeGVkKDMpfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDE1MCwxOTAsMTEwLDApJyk7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JzsgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH1cbiAgICAvLyBzb2Z0IHRvbmFsIGRyaWZ0IHNvIHRoZSBjb3Vyc2VzIGRvIG5vdCByZWFkIGFzIGEgcHJpbnRlZCBzdHJpcGVcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgby53ZWF0aGVyID8/IDEwLCAwLjEwLCAwLjIyKTtcbiAgfSk7XG59XG5cbi8qKlxuICogV09WRU4gVEFSUEFVTElOIHRpbGU6IHRoZSBjb2Fyc2UgY3Jvc3Mtd292ZW4gcG9seXByb3B5bGVuZSB0YXBlIG9mIGEgVGhhaSBidWlsZGVyJ3MgdGFycCwgcGx1c1xuICogdGhlIGNyZWFzZXMgYSBmb2xkZWQgc2hlZXQga2VlcHMgZm9yIGxpZmUgYW5kIHRoZSBzdW4tYmxlYWNoaW5nIGFsb25nIHRoZSByaWRnZXMuIEEgbXVsdGlwbGllciBvblxuICogdGhlIG1lYXN1cmVkIGJsdWUsIHNvIHRoZSB3ZWF2ZSBkYXJrZW5zIGFuZCB0aGUgYmxlYWNoIGxpZnRzIHRvd2FyZCB3aGl0ZS5cbiAqL1xuZnVuY3Rpb24gdGFycFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgcGl0Y2ggPSBNYXRoLm1heCgzLCBNYXRoLnJvdW5kKHMgLyAoby50YXBlcyA/PyA2NCkpKTtcbiAgICAvLyB0aGUgd2VhdmU6IHdhcnAgYW5kIHdlZnQgdGFwZXMsIGVhY2ggcGFpciB3aXRoIGEgc2hhZG93IGF0IGl0cyBqb2luLCBhbHRlcm5hdGluZyBvdmVyL3VuZGVyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4ICs9IHBpdGNoKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMzAsMzQsNDQsJHsoMC4xMCArIHJuZCgpICogMC4wOCkudG9GaXhlZCgzKX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDcpJzsgY3R4LmZpbGxSZWN0KHggKyAxLCAwLCBNYXRoLm1heCgxLCBwaXRjaCAqIDAuMzUpLCBzKTtcbiAgICB9XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzOyB5ICs9IHBpdGNoKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMzAsMzQsNDQsJHsoMC4xMCArIHJuZCgpICogMC4wOCkudG9GaXhlZCgzKX0pYDsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIDEpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDcpJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyAxLCBzLCBNYXRoLm1heCgxLCBwaXRjaCAqIDAuMzUpKTtcbiAgICB9XG4gICAgLy8gZm9sZCBjcmVhc2VzOiBsb25nIHBhbGUgbGluZXMgd2l0aCBhIHNoYWRvdyBvbiBvbmUgc2lkZSwgYXQgdGhlIHR3byBheGVzIGEgdGFycCBpcyBmb2xkZWQgb25cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmNyZWFzZXMgPz8gNik7IGsrKykge1xuICAgICAgY29uc3QgaG9yaXogPSBybmQoKSA8IDAuNSwgcCA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjUgKyBybmQoKSAqIDAuNSksIHEgPSBybmQoKSAqIHM7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yNiknO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMjYpJztcbiAgICAgIGlmIChob3JpeikgeyBjdHguZmlsbFJlY3QocSAtIGxlbiAvIDIsIHAsIGxlbiwgMS42KTsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDI2LDM4LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHEgLSBsZW4gLyAyLCBwICsgMS42LCBsZW4sIDIpOyB9XG4gICAgICBlbHNlIHsgY3R4LmZpbGxSZWN0KHAsIHEgLSBsZW4gLyAyLCAxLjYsIGxlbik7IGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyNiwzOCwwLjE4KSc7IGN0eC5maWxsUmVjdChwICsgMS42LCBxIC0gbGVuIC8gMiwgMiwgbGVuKTsgfVxuICAgIH1cbiAgICAvLyBzdW4tYmxlYWNoZWQgc3RyZWFrcyBhbmQgYSBsaXR0bGUgZ3JpbWVcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgby53ZWF0aGVyID8/IDEyLCAwLjEwLCAwLjM0KTtcbiAgfSk7XG59XG5cbi8qKlxuICogU0FXTiBUSU1CRVIgdGlsZSBmb3IgYSB3ZWF0aGVyZWQgcG9zdC1hbmQtcGxhdGUgZnJhbWU6IGZpbmUgbG9uZ2l0dWRpbmFsIGdyYWluLCBhIGZldyBrbm90cywgdGhlXG4gKiBvZGQgZHJ5aW5nIHNwbGl0LCBhbmQgY2xvdWR5IHNpbHZlciB3ZWF0aGVyaW5nLiBEZWxpYmVyYXRlbHkgV0VBS0xZIGRpcmVjdGlvbmFsIC0tIHRoZSBmcmFtZSBpc1xuICogbWFwcGVkIHdpdGggd29ybGQgVVZzLCB3aGljaCBwdXQgdiBhbG9uZyB0aGUgcG9zdCBidXQgQUNST1NTIGEgYmVhbSwgYW5kIGEgc3Ryb25nbHkgc3RyaXBlZCB0aWxlXG4gKiB3b3VsZCB0aGVuIHJlYWQgYXMgYSBwbGFuayBqb2ludCBydW5uaW5nIHRoZSB3cm9uZyB3YXkgb24gaGFsZiB0aGUgZnJhbWUuIFRoZSB3ZWF0aGVyaW5nIGNhcnJpZXNcbiAqIG1vc3Qgb2YgdGhlIHJlYWQgYW5kIHRoZSBncmFpbiBvbmx5IHNoYXJwZW5zIGl0LCB3aGljaCBzdXJ2aXZlcyBib3RoIG9yaWVudGF0aW9ucy5cbiAqL1xuZnVuY3Rpb24gc2F3blRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBEQVJLID0gJzk2LDg0LDY4JywgTElHSFQgPSAnMjU1LDI1NSwyNTUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2Y0ZjJlZSc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgby53ZWF0aGVyID8/IDIwLCAwLjE0LCAwLjMwKTtcbiAgICBncmFpbkxpbmVzKGN0eCwgcm5kLCAwLCBzLCAwLCBzLCBvLmdyYWluID8/IDIyMCwgREFSSywgTElHSFQsIDAuMTgpO1xuICAgIC8vIGtub3RzOiBhIGRhcmsgZWxsaXBzZSB3aXRoIHRoZSBncmFpbiBzd2VlcGluZyByb3VuZCBpdFxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ua25vdHMgPz8gNCk7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wMTIgKyBybmQoKSAqIDAuMDIpO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDc0LDYwLDQ0LDAuNDUpJztcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciwgciAqIDEuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSg5Niw4MCw2MCwwLjIyKSc7IGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBmb3IgKGxldCBxID0gMTsgcSA8PSAzOyBxKyspIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciAqICgxICsgcSAqIDAuNiksIHIgKiAoMS42ICsgcSAqIDAuOSksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGRyeWluZyBzcGxpdHMgYWxvbmcgdGhlIGZpYnJlXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5zcGxpdHMgPz8gMyk7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNDUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDU4LDQ4LDM2LDAuNDIpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHkgKyBkeSwgMS40LCBsZW4pO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTYpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHggKyAxLjQsIHkgKyBkeSwgMSwgbGVuKTtcbiAgICB9XG4gICAgY29uc3Qgc3BvdHM6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLm1vdWxkID8/IDMpOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgcm5kKCkgKiBzXSk7XG4gICAgbW91bGRDbHVzdGVycyhjdHgsIHJuZCwgcywgc3BvdHMsIHMgKiAwLjA5LCBzICogMC4wNywgNzAsIDAuMjQpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHQUxWQU5JU0VEIFNIRUVUIHdlYXRoZXJpbmc6IG9uZSBzZWFtbGVzcyBtdWx0aXBsaWVyIHRpbGUgY2FycnlpbmcgdGhlIHRocmVlIHRoaW5ncyBhIHppbmMgcm9vZlxuICogYWN0dWFsbHkgc2hvd3MgLS0gdGhlIGNoYWxreSB3aGl0ZSBveGlkYXRpb24gdGhhdCBlYXRzIHRoZSBzcGFuZ2xlLCB0aGUgZGFya2VyIGdyZXkgZHJpZnQgd2hlcmVcbiAqIGl0IGhhcyBub3QsIGFuZCB0aGUgd2FybSBydXN0IGZyZWNrbGVzIHRoYXQgc3RhcnQgYXQgZXZlcnkgZml4aW5nIGFuZCBsYXAuXG4gKlxuICogTGlrZSBgcGFpbnRUaWxlYCBpdCBpcyBkcmF3biBpbiBBQlNPTFVURSBtdWx0aXBsaWVyIHNwYWNlIG92ZXIgYSBSRS1CQVNFRCBlbnZlbG9wZSwgYmVjYXVzZVxuICogY2hhbGtpbmcgaXMgQlJJR0hURVIgdGhhbiB0aGUgY2xlYW4gc2hlZXQgaXQgc2l0cyBvbiBhbmQgYSBwbGFpbiBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4uIGBvLmJhc2VgXG4gKiBpcyB0aGUgY2xlYW4gemluYydzIG93biBtdWx0aXBsaWVyIGFnYWluc3QgdGhhdCBlbnZlbG9wZSBhbmQgaXMgd2hhdCBtb3N0IG9mIHRoZSB0aWxlIGlzIGZpbGxlZFxuICogd2l0aDsgYG8uY2hhbGtgIHJlYWNoZXMgYmFjayB1cCB0byB0aGUgZW52ZWxvcGUuIE1lYXN1cmVkIG9mZiB0aGUgcGxhdGUsIHRoZSBkZWNrIHJ1bnMgMTcyIHRvIDE5N1xuICogbHVtYSBhY3Jvc3MgaXRzIG93biBzdXJmYWNlIGF0IGEgc2F0dXJhdGlvbiBvZiAwLjA0IC0tIGEgMjUtbHVtYSBzcHJlYWQgb24gYSBub21pbmFsbHkgZmxhdCBncmV5LFxuICogd2hpY2ggaXMgdGhlIHdob2xlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIHJvb2YgYW5kIGEgc2hlZXQgb2YgcGxhc3RpYy5cbiAqXG4gKiBgY2hhbGtTY2FsZWAgLyBgZHJpZnRTY2FsZWAgZXhpc3QgYmVjYXVzZSBvbiBhIHJvb2YgdGhlIHRpbGUgaXMgc21hbGwgYWdhaW5zdCB0aGUgc3VyZmFjZTogdGhlXG4gKiBkZWNrIHJlcGVhdHMgaXQgZm91ciB0aW1lcyBhY3Jvc3MsIHNvIGFueSBtYXJrIHdpZGVyIHRoYW4gYSB0ZW50aCBvZiBpdCBkcmF3cyBhIHZpc2libGUgbGF0dGljZS5cbiAqIFRoZSBCUk9BRCBjaGFsayB6b25lcyBiZWxvbmcgb24gdGhlIHNoZWV0J3Mgb3duIHZlcnRleCBncmlkLCB3aGljaCBkb2VzIG5vdCByZXBlYXQ7IHdoYXQgdGhlIHRpbGVcbiAqIG93ZXMgaXMgdGhlIGZpbmUgc3BlY2tsZSBpbnNpZGUgdGhlbS5cbiAqXG4gKiBUaGUgcm9sbCBtYXJrcyBhcmUgZHJhd24gTEFTVCBhbmQgYWxvbmcgdSwgd2hpY2ggb24gdGhlIGRlY2sncyB3b3JsZCBVVnMgaXMgdGhlIGF4aXMgdGhlIG1vZGVsbGVkXG4gKiBmbHV0ZXMgcnVuIGFjcm9zcy4gVGhleSBhcmUgd2hhdCB0aGUgdGlsZSBzdGlsbCBvd2VzIHRoZSBnZW9tZXRyeSBvbmNlIHRoZSBjb3JydWdhdGlvbiBpdHNlbGYgaXNcbiAqIHJlYWw6IGEgcm9sbCBmb3JtZXIgbGVhdmVzIGZpbmUgbGVuZ3Rod2lzZSBzdHJpYXRpb24gYmV0d2VlbiB0aGUgZmx1dGVzLCBhbmQgYGJ1bXBgIHBpY2tzIGl0IHVwLlxuICovXG5mdW5jdGlvbiBnYWx2VGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXSwgY2hhbGsgPSBvLmNoYWxrID8/IGJhc2UsIHJ1c3QgPSBvLnJ1c3QgPz8gYmFzZSwgZGFyayA9IG8uZGFyayA/PyBiYXNlO1xuICAgIGNvbnN0IHdyYXAgPSAoZHJhdzogKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpID0+IHZvaWQpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBkcmF3KGR4LCBkeSk7XG4gICAgfTtcbiAgICBjb25zdCBibG9iID0gKGM6IG51bWJlcltdLCB4OiBudW1iZXIsIHk6IG51bWJlciwgcjogbnVtYmVyLCBhOiBudW1iZXIsIHJ5ID0gMSwgcm90ID0gMCkgPT4ge1xuICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKGMpfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcCgwLjU1LCBgcmdiYSgke3JnYihjKX0sJHthICogMC41fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKGMpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciwgciAqIHJ5LCByb3QsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgfTtcblxuICAgIC8vIFRoZSBiYXNlIGZpbGwgY2FycmllcyB0aGUgRkxVVEUgc2hhZGluZyB3aGVuIGBmbHV0ZXNgIGlzIHNldDogYGZsdXRlc2AgcmlwcGxlcyBwZXIgdGlsZSwgaW5cbiAgICAvLyBwaGFzZSB3aXRoIHRoZSBtb2RlbGxlZCBjb3JydWdhdGlvbiAoYSB0cm91Z2ggYXQgdSA9IDAsIHdoaWNoIGlzIHdoZXJlIHRoZSBkZWNrJ3Mgd29ybGQgVVZzIHB1dFxuICAgIC8vIG9uZSkuIFRoZSBnZW9tZXRyeSBhbHJlYWR5IHR1cm5zIHRoZSBmbHV0ZXMgdG8gdGhlIGxpZ2h0IC0tIHRoaXMgaXMgdGhlIGFtYmllbnQgZGFya2VuaW5nIGluXG4gICAgLy8gdGhlIHZhbGxleXMgYW5kIHRoZSByb2xsLWZvcm1lcidzIG93biBwb2xpc2ggb24gdGhlIGNyZXN0cywgd2hpY2ggZmxhdCBzdHVkaW8gbGlnaHRpbmcgb24gYVxuICAgIC8vIHNtb290aC1zaGFkZWQgdHJpYW5nbGUgd2F2ZSBnaXZlcyBub25lIG9mLiBPdXQgb2YgcGhhc2UgaXQgd291bGQgQkVBVCB3aXRoIHRoZSBnZW9tZXRyeSwgd2hpY2hcbiAgICAvLyBpcyB3aHkgdGhlIHBpdGNoIGlzIGxvY2tlZCB0byB0aGUgZGVjaydzIG93biAxMyBmbHV0ZXMgcGVyIG1ldHJlIHJhdGhlciB0aGFuIGNob3Nlbi5cbiAgICBjb25zdCBmbCA9IG8uZmx1dGVzID8/IDAsIGZsb3cgPSBvLmZsdXRlTG93ID8/IDAuODg7XG4gICAgaWYgKGZsID4gMCkge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgICAgY29uc3QgdCA9ICgxIC0gTWF0aC5jb3MoeCAvIHMgKiBNYXRoLlBJICogMiAqIGZsKSkgLyAyOyAgIC8vIDAgaW4gdGhlIHRyb3VnaCwgMSBhdCB0aGUgY3Jlc3RcbiAgICAgICAgY29uc3QgayA9IGZsb3cgKyAoMSAtIGZsb3cpICogdDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZS5tYXAoKHY6IG51bWJlcikgPT4gdiAqIGspKX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7IH1cblxuICAgIC8vIDEuIHRoZSBncmV5IGRyaWZ0OiBicm9hZCwgdmVyeSBzb2Z0LCB0aGUgYXJlYXMgdGhlIGNoYWxrIGhhcyBub3QgcmVhY2hlZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZHJpZnQgPz8gMTYpOyBpKyspXG4gICAgICBibG9iKGRhcmssIHJuZCgpICogcywgcm5kKCkgKiBzLCBzICogKDAuMTYgKyBybmQoKSAqIDAuMzApICogKG8uZHJpZnRTY2FsZSA/PyAxKSwgMC4xMCArIHJuZCgpICogMC4xOCwgMC41ICsgcm5kKCkgKiAwLjksIHJuZCgpICogTWF0aC5QSSk7XG5cbiAgICAvLyAyLiB0aGUgY2hhbGsgYmxvb206IExBUkdFLCBzb2Z0IGFuZCBpcnJlZ3VsYXIsIHdpdGggYSBncmFudWxhciBmcmluZ2UuIE9uIGEgcm9vZiBpdCBpcyB0aGVcbiAgICAvLyAgICBkb21pbmFudCBtYXJrIC0tIHRoZSBwbGF0ZSdzIGRlY2sgaXMgbW9yZSBjaGFsayB0aGFuIGNsZWFuIHNoZWV0IC0tIHNvIGl0IGlzIGRyYXduIHdpZGUgYW5kXG4gICAgLy8gICAgYXQgaGlnaCBhbHBoYSwgdW5saWtlIHRoZSBzcGFyc2UgYmxvb21zIG9mIGEgcGFpbnRlZCBwYW5lbC5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmNoYWxrUGF0Y2hlcyA/PyAxNCk7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wOCArIHJuZCgpICogMC4xOCkgKiAoby5jaGFsa1NjYWxlID8/IDEpO1xuICAgICAgYmxvYihjaGFsaywgY3gsIGN5LCBjciwgKG8uY2hhbGtBbHBoYSA/PyAwLjU1KSArIHJuZCgpICogMC4zMCwgMC41ICsgcm5kKCkgKiAwLjksIHJuZCgpICogTWF0aC5QSSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3IgKiAxLjM7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkLCByID0gMC44ICsgcm5kKCkgKiAyLjQ7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihjaGFsayl9LCR7MC4yICsgcm5kKCkgKiAwLjQ1fSlgO1xuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIHJ1c3Q6IHNtYWxsIHdhcm0gZnJlY2tsZSBjbHVzdGVycywgZWFjaCBhIHNvZnQgcGF0Y2ggdW5kZXIgYSBmaWVsZCBvZiBzcGVja3MsIHdpdGggYSBzaG9ydFxuICAgIC8vICAgIHJ1biBiZWxvdyBpdC4gWmluYyBkb2VzIG5vdCBzaGVldC1ydXN0IHRoZSB3YXkgYmFyZSBzdGVlbCBkb2VzIC0tIGl0IGZyZWNrbGVzIGZpcnN0LlxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ucnVzdENsdXN0ZXJzID8/IDEwKTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjA1NSk7XG4gICAgICBibG9iKHJ1c3QsIGN4LCBjeSwgY3IsIDAuMjUgKyBybmQoKSAqIDAuMzAsIDAuNyArIHJuZCgpICogMC43LCBybmQoKSAqIE1hdGguUEkpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zcGVja3NQZXJDbHVzdGVyID8/IDI2KTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyO1xuICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCwgciA9IDAuNyArIHJuZCgpICogMS44O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IocnVzdCl9LCR7MC4yNSArIHJuZCgpICogMC40NX0pYDtcbiAgICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChybmQoKSA8IDAuNikge1xuICAgICAgICBjb25zdCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDA2LCBsZW4gPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTYpO1xuICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGN5LCAwLCBjeSArIGxlbik7XG4gICAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1c3QpfSwkezAuMTQgKyBybmQoKSAqIDAuMTZ9KWApOyBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydXN0KX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICAgIHdyYXAoKGR4KSA9PiBjdHguZmlsbFJlY3QoY3ggKyBkeCArIChybmQoKSAtIDAuNSkgKiBjciwgY3ksIHcsIGxlbikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDQuIHJvbGwgbWFya3M6IGZpbmUgbGluZXMgb2YgY29uc3RhbnQgdSwgYXQgYHJvbGxzYCBwZXIgdGlsZSwgYWx0ZXJuYXRlbHkgYSBzaGFkZSB1bmRlciBhbmQgYVxuICAgIC8vICAgIHNoYWRlIG92ZXIgdGhlIHRvbmUgdGhleSBjcm9zcy4gQm91bmQgYXMgYSBidW1wIG1hcCB0aGV5IGFyZSB0aGUgc3RyaWF0aW9uIGJldHdlZW4gZmx1dGVzLlxuICAgIGNvbnN0IHJvbGxzID0gby5yb2xscyA/PyA0MDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvbGxzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSAoaSArIDAuMzUgKyBybmQoKSAqIDAuMykgKiBzIC8gcm9sbHMsIHVwID0gcm5kKCkgPCAwLjQ1O1xuICAgICAgY29uc3QgYyA9IHVwID8gY2hhbGsgOiBkYXJrLCBhID0gMC4wNiArIHJuZCgpICogMC4xMjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKCR7cmdiKGMpfSwke2F9KWA7IGN0eC5saW5lV2lkdGggPSAwLjcgKyBybmQoKSAqIDEuMztcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCAwKTsgY3R4LmxpbmVUbyh4ICsgZHgsIHMpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogU1BMSVQtQ1VMTSB0aWxlIGZvciB0aGUgaGFsZi1waXBlIHJvb2Zpbmc6IHggQVJPVU5EIHRoZSBoYWxmIGN1bG0gKGN1bG1VViBvdmVyIDAuNzAgbSwgc28gdGhlXG4gKiAgc2VhbSBsYW5kcyBvbiB0aGUgaGlkZGVuIHVuZGVyc2lkZSksIHkgQUxPTkcgaXQuIFdoYXQgdGhlIHBsYXRlIHNob3dzIG9uIGEgcm9vZmluZyBjdWxtIHRoYXQgYVxuICogIHdob2xlIHBvbGUgZG9lcyBub3Q6IE9ORSBub2RlIHJpbmcgcGVyIDAuNzAgbSAodGhlIHJvb2YgY3VsbXMgYXJlIGxvbmdlciBpbnRlcm5vZGVzIHRoYW4gdGhlXG4gKiAgcG9zdHMpLCBkZW5zZSBsb25naXR1ZGluYWwgZmlicmUsIGEgbG9uZyBkcnlpbmcgc3BsaXQsIGJsZWFjaGVkIGZhY2VzLCBhbmQgUk9UIC0tIGRhcmtcbiAqICBpcnJlZ3VsYXIgaG9sZXMgd2l0aCBhIHN0YWluZWQgaGFsbyBhbmQgYSBzY2F0dGVyIG9mIGluc2VjdCBwaW5ob2xlcywgdGhyZWUgb3IgZm91ciBwZXIgdGlsZS5cbiAqICBBIG11bHRpcGxpZXIgb24gdGhlIHBlci1pbnN0YW5jZSB0b25lOyB0aGUgcm90IGNvcmVzIGFyZSBzbWFsbCBlbm91Z2ggKDEwLTIwIHB4IG9mIDUxMiwgb24gYVxuICogIDAuNzAgbSB0aWxlLCBzbyAxNS0zMCBtbSkgdGhhdCBubyBlbmNsb3NlZCBkYXJrIHBhdGNoIHJlYWNoZXMgdGhlIHNpbGhvdWV0dGUgZ2F0ZS4gKi9cbmZ1bmN0aW9uIHNwbGl0VGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBEQVJLID0gJzg4LDc2LDU4JywgTElHSFQgPSAnMjU1LDI1NSwyNTUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2YzZjBlOCc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBhIHNvZnQgcm91bmQtb2ZmIGFjcm9zcyB0aGUgYXJjOiB0aGUgcmltcyBhIHRvdWNoIGRhcmtlciB0aGFuIHRoZSBjcm93blxuICAgIGNvbnN0IGdhID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHMsIDApO1xuICAgIGdhLmFkZENvbG9yU3RvcCgwLCAncmdiYSg5MCw4NCw3NCwwLjE0KScpOyBnYS5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgyNTUsMjU1LDI1NSwwLjA4KScpOyBnYS5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoOTAsODQsNzQsMC4xNCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ2E7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgMTAsIDAuMTAsIDAuMzQpO1xuICAgIGNvbnN0IG5vZGUgPSBzICogKDAuMzAgKyBybmQoKSAqIDAuNDApO1xuICAgIGZvciAoY29uc3QgW3kwLCB5MV0gb2YgW1swLCBub2RlXSwgW25vZGUsIHNdXSkgZ3JhaW5MaW5lcyhjdHgsIHJuZCwgMCwgcywgeTAsIHkxLCAzMjAsIERBUkssIExJR0hULCAwLjI0KTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDM7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjMgKyBybmQoKSAqIDAuNik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsMzQsMjYsMC41NSknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjYsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yMCknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNiwgeSArIGR5LCAxLjIsIGxlbik7XG4gICAgfVxuICAgIC8vIHRoZSBub2RlIHJpbmdcbiAgICB7XG4gICAgICBjb25zdCB5ID0gbm9kZTtcbiAgICAgIGNvbnN0IGdzID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkgLSBzICogMC4wMywgMCwgeSk7XG4gICAgICBncy5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNTAsNDAsMCknKTsgZ3MuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDUwLDQwLDAuMjQpJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3M7IGN0eC5maWxsUmVjdCgwLCB5IC0gcyAqIDAuMDMsIHMsIHMgKiAwLjAzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1Miw0NCwzNiwwLjY2KSc7IGN0eC5maWxsUmVjdCgwLCB5LCBzLCAzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjM2KSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgMywgcywgNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNjAsNTAsNDAsMC4zMCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDgsIHMsIDIpO1xuICAgIH1cbiAgICAvLyBST1Q6IGFuIGlycmVndWxhciBkYXJrIGNvcmUgd2l0aCBhIHdhcm0gc3RhaW5lZCBoYWxvLCBhbmQgcGluaG9sZXMgYXJvdW5kIGl0XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgcnggPSBzICogKDAuMDEyICsgcm5kKCkgKiAwLjAzKSwgcnkgPSByeCAqICgxLjQgKyBybmQoKSAqIDEuNiksIHJvdCA9IChybmQoKSAtIDAuNSkgKiAwLjY7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY29uc3QgaGFsbyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3kgKyBkeSwgMCwgY3gsIGN5ICsgZHksIE1hdGgubWF4KHJ4LCByeSkgKiAyLjQpO1xuICAgICAgICBoYWxvLmFkZENvbG9yU3RvcCgwLCAncmdiYSg5Niw3NCw0MCwwLjQyKScpOyBoYWxvLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDk2LDc0LDQwLDAuMjApJyk7IGhhbG8uYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDk2LDc0LDQwLDApJyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBoYWxvOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4LCBjeSArIGR5LCByeCAqIDIuNiwgcnkgKiAyLjQsIHJvdCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzYsMjgsMTgsMC44MiknOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4LCBjeSArIGR5LCByeCwgcnksIHJvdCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTQsMTAsNiwwLjkpJzsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCArIHJ4ICogMC4yLCBjeSArIGR5IC0gcnkgKiAwLjEsIHJ4ICogMC41LCByeSAqIDAuNTUsIHJvdCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgKHJuZCgpIC0gMC41KSAqIHMgKiAwLjEyLCB5ID0gY3kgKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMiwgciA9IDEgKyBybmQoKSAqIDEuODtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLDI0LDE2LDAuODUpJztcbiAgICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBsb29zZSBtb3VsZCBiZWxvdyB0aGUgbm9kZVxuICAgIG1vdWxkQ2x1c3RlcnMoY3R4LCBybmQsIHMsIFtbcm5kKCkgKiBzLCBub2RlICsgcyAqIDAuMDRdLCBbcm5kKCkgKiBzLCBybmQoKSAqIHNdXSwgcyAqIDAuMDgsIHMgKiAwLjA1LCA2MCwgMC4yNik7XG4gIH0pO1xufVxuXG4vKiogUk9QRSB0aWxlIGZvciB0aGUgbGFzaGluZ3M6IHggQVJPVU5EIHRoZSBjb2xsYXIsIHkgQUxPTkcgdGhlIHBvbGUgaXQgd3JhcHMuIEEgbGFzaGluZyBpcyB0dXJuc1xuICogIG9mIGxhaWQgcm9wZSwgc28gdGhlIHN1cmZhY2UgaXMgZGlhZ29uYWwgU1RSQU5EUyAtLSBhIGdyb292ZSBhbmQgYSBsaXQgcmlkZ2UgcGVyIHN0cmFuZCBhdCBhXG4gKiAgc2hhbGxvdyB3cmFwIGFuZ2xlIC0tIHdpdGggZmlicmUgZnV6eiBhbmQgYSBmZXcgZGFya2VyIHNvaWxlZCB0dXJucy4gT3ZlciAwLjEyIG0gcGVyIHRpbGUgdGhlXG4gKiAgc3RyYW5kIHBpdGNoIGlzIH4xMiBtbSwgd2hpY2ggaXMgdGhlIHBsYXRlJ3Mgcm9wZS4gU2VhbWxlc3M6IGV2ZXJ5IHN0cm9rZSBpcyBkcmF3biBhdCB0aHJlZVxuICogIHkgb2Zmc2V0cyBhbmQgdGhlIHN0cmFuZCBydW5zIGFjcm9zcyB0aGUgd3JhcC4gKi9cbmZ1bmN0aW9uIHJvcGVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2Y0ZWZlNCc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBuID0gMTAsIHBpdGNoID0gcyAvIG4sIGFuZyA9IDAuMzI7ICAgICAgICAgICAgICAgIC8vIHdyYXAgYW5nbGUsIHJhZGlhbnNcbiAgICBjb25zdCBkeCA9IE1hdGgudGFuKGFuZykgKiBzOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBob3cgZmFyIGEgc3RyYW5kIGRyaWZ0cyBpbiB4IG92ZXIgb25lIHRpbGUgaGVpZ2h0XG4gICAgY3R4LnNhdmUoKTtcbiAgICBmb3IgKGxldCBrID0gLTM7IGsgPCBuICsgMzsgaysrKSB7XG4gICAgICBjb25zdCB4MCA9IGsgKiBwaXRjaDtcbiAgICAgIGZvciAoY29uc3Qgb3kgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICAvLyBncm9vdmUgYmV0d2VlbiB0dXJuc1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSg3MCw1OCw0MCwwLjU1KSc7IGN0eC5saW5lV2lkdGggPSBwaXRjaCAqIDAuMjI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4MCwgb3kpOyBjdHgubGluZVRvKHgwICsgZHgsIG95ICsgcyk7IGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gdGhlIGxpdCBjcm93biBvZiB0aGUgdHVyblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjMwKSc7IGN0eC5saW5lV2lkdGggPSBwaXRjaCAqIDAuMzA7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4MCArIHBpdGNoICogMC41LCBveSk7IGN0eC5saW5lVG8oeDAgKyBwaXRjaCAqIDAuNSArIGR4LCBveSArIHMpOyBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIHR3aXN0IG1hcmtzIGFjcm9zcyBlYWNoIHR1cm5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoOTAsNzYsNTIsMC4yOCknOyBjdHgubGluZVdpZHRoID0gMS4yO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDEyOyB0KyspIHtcbiAgICAgICAgICBjb25zdCB5eSA9IG95ICsgKHQgKyBybmQoKSkgKiBzIC8gMTIsIHh4ID0geDAgKyBwaXRjaCAqIDAuNSArIGR4ICogKCh5eSAtIG95KSAvIHMpO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4eCAtIHBpdGNoICogMC4zNSwgeXkgLSBwaXRjaCAqIDAuMTgpOyBjdHgubGluZVRvKHh4ICsgcGl0Y2ggKiAwLjM1LCB5eSArIHBpdGNoICogMC4xOCk7IGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjdHgucmVzdG9yZSgpO1xuICAgIC8vIGZ1enogYW5kIHNvaWxpbmdcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHJuZCgpIDwgMC42ID8gJ3JnYmEoNzAsNTgsNDAsMC4xOCknIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC4yMiknO1xuICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIDEsIDEgKyBybmQoKSAqIDIpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgY29uc3QgeSA9IHJuZCgpICogcywgaCA9IHMgKiAoMC4wNiArIHJuZCgpICogMC4xMCk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5LCAwLCB5ICsgaCk7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNDgsMzIsMCknKTsgZzIuYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoNjAsNDgsMzIsMC4yMiknKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDQ4LDMyLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KDAsIHkgKyBkeSwgcywgaCk7XG4gICAgfVxuICB9KTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgLy8gQSBMSVQgc3VyZmFjZSAoYSBmbHVvcmVzY2VudCB0dWJlLCBhIGNoYXJjb2FsIGVtYmVyIGJlZCk6IGVtaXNzaXZlIGNhcnJpZXMgdGhlIGdsb3cgd2l0aG91dCBhXG4gICAgLy8gbGlnaHQgc291cmNlLCB3aGljaCB0aGUga2l0J3MgcHJvcHMgbmV2ZXIgb3duIC0tIHRoZSBob3N0IHNjZW5lIG93bnMgbGlnaHRpbmcuXG4gICAgaWYgKHMuZW1pc3NpdmUgIT09IHVuZGVmaW5lZCkgeyBtLmVtaXNzaXZlID0gbmV3IFRIUkVFLkNvbG9yKHMuZW1pc3NpdmUpOyBtLmVtaXNzaXZlSW50ZW5zaXR5ID0gcy5lbWlzc2l2ZUludGVuc2l0eSA/PyAxOyB9XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICAvLyBBbiBBTFBIQS1DVVQgcGFuZSAoY2hhaW4tbGluayBtZXNoKTogdGhlIGNhbnZhcyB0aWxlIGNhcnJpZXMgdGhlIGN1dC1vdXQgaW4gaXRzIGFscGhhIGNoYW5uZWwgYW5kXG4gICAgLy8gYWxwaGFUZXN0IGRpc2NhcmRzIHRoZSBvcGVuIGNlbGxzLCBzbyB0aGUgd2lyZSBzdGF5cyBvcGFxdWUgYW5kIHNvcnRzIGxpa2UgYSBzb2xpZC5cbiAgICBpZiAocy5hbHBoYVRlc3QgIT09IHVuZGVmaW5lZCkgeyBtLmFscGhhVGVzdCA9IHMuYWxwaGFUZXN0OyBtLnRyYW5zcGFyZW50ID0gZmFsc2U7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmFtYm9vSGFsZlBpcGVDYW5vcHlNb2R1bGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ0JhbWJvbyBIYWxmLVBpcGUgQ2Fub3B5IE1vZHVsZSc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbXBvbmVudHNcbiAgICogRWFjaCBlbnRyeSBvZiBDT05GSUcuZ2VvbWV0cnkuY29tcG9uZW50cyBpcyBPTkUgbWVyZ2VkIGdlb21ldHJ5IG9uIE9ORSBtYXRlcmlhbCAtLSBvbmUgZHJhd1xuICAgKiBjYWxsLiBFdmVyeSBwYXJ0IGluc2lkZSBpdCBpcyBhIHRpbnRlZCBib3gsIHR1YmUsIGN5bGluZGVyLCBsYXRoZSBvciBwbGFuZTsgY29sb3VyIGRpZmZlcmVuY2VzXG4gICAqIGFyZSB2ZXJ0ZXggY29sb3Vycy4gYHV2YCBwaWNrcyBob3cgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSByZXBlYXRzIG92ZXIgaXQuICovXG4gIGZvciAoY29uc3QgYyBvZiBHLmNvbXBvbmVudHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoYy5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgbWlycm9yWCgoYy5ib3hlc01pcnJvcmVkID8/IFtdKSBhcyBudW1iZXJbXVtdKSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgKGMudHViZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgICAvLyBTV0VQVCB0dWJlczogb25lIG1pdHJlZCByaW5nIHBlciBwb2ludCBpbnN0ZWFkIG9mIGEgY3lsaW5kZXIgcGVyIHNlZ21lbnQgLS0gdGhlIG9ubHkgdGhpbmcgdGhhdFxuICAgIC8vIHN1cnZpdmVzIGEgdGlnaHQgYmVuZC4gU2VlIHN3ZWVwVHViZS5cbiAgICBmb3IgKGNvbnN0IHQgb2YgKGMuc3dlZXBzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaChzd2VlcFR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gMTAsIHQuaGV4LCB0LmNhcCAhPT0gZmFsc2UpKTtcbiAgICBmb3IgKGNvbnN0IHN0IG9mIChjLnN0cmFwcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2goc3RyYXAoc3QucHRzLCBzdC53LCBzdC50LCBzdC5hYm91dCwgc3QuaGV4KSk7XG4gICAgZm9yIChjb25zdCBjeSBvZiAoYy5jeWxzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHRoMGAvYHRoTGVuYCBtYWtlIGEgUEFSVElBTCBjeWxpbmRlciAoYSBjdXJ2ZWQgc3RpY2tlciBwYXRjaCB3cmFwcGVkIG9uIGEgcm91bmQgYm9keSkgYW5kXG4gICAgICAvLyBgb3BlbmAgZHJvcHMgdGhlIGNhcHM7IHRoZSBzaWRlIFVWcyB0aGVuIHJ1biAwLi4xIGFjcm9zcyB0aGUgYXJjIGFuZCB1cCB0aGUgaGVpZ2h0LCB3aGljaCBpc1xuICAgICAgLy8gd2hhdCBhIGJha2VkIGdyYXBoaWMgd2FudHMuIGB1dlJlcGAgbXVsdGlwbGllcyB0aGVtIGZvciBhIHJlcGVhdGluZyB0aWxlLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGN5LnJ0LCBjeS5yYiwgY3kuaCwgY3kuc2VnID8/IDEyLCAxLCBjeS5vcGVuID8/IGZhbHNlLCBjeS50aDAgPz8gMCwgY3kudGhMZW4gPz8gTWF0aC5QSSAqIDIpO1xuICAgICAgaWYgKGN5LnV2UmVwKSB7IGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7IGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIGN5LnV2UmVwWzBdLCB1di5nZXRZKGkpICogY3kudXZSZXBbMV0pOyB9XG4gICAgICAvLyBgc2lkZVVWYCBwaW5zIHRoZSBTSURFIHdhbGwncyBVVnMgdG8gb25lIHRleGVsIHNvIGEgZGlzYyBjYXJyeWluZyBhIGJha2VkIHRvcC1kb3duIGltYWdlIHNob3dzXG4gICAgICAvLyB0aGF0IGltYWdlIG9uIGl0cyBjYXAgYWxvbmUsIHdpdGggaXRzIHJpbSBpbiB3aGF0ZXZlciB0aGUgcGlubmVkIHRleGVsIGhvbGRzIChhIGJhZyB0b25lKS5cbiAgICAgIGlmIChjeS5zaWRlVVYpIHsgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKSwgbiA9ICgoY3kuc2VnID8/IDEyKSArIDEpICogMjsgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHV2LnNldFhZKGksIGN5LnNpZGVVVlswXSwgY3kuc2lkZVVWWzFdKTsgfVxuICAgICAgLy8gYHNjYWxlYCBiZWZvcmUgdGhlIHJvdGF0aW9uczogYW4gT1ZBTCBiYXNpbiBvciBkaXNjLCB3aGljaCBhIGxhdGhlIG9yIGEgY3lsaW5kZXIgY2Fubm90XG4gICAgICAvLyByZXZvbHZlIG9uIGl0cyBvd24uIE5vcm1hbHMgYXJlIHJlY29tcHV0ZWQgYmVjYXVzZSBhIG5vbi11bmlmb3JtIHNjYWxlIHNrZXdzIHRoZW0uXG4gICAgICBpZiAoY3kuc2NhbGUpIHsgZy5zY2FsZShjeS5zY2FsZVswXSwgY3kuc2NhbGVbMV0sIGN5LnNjYWxlWzJdKTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyB9XG4gICAgICAvLyBDVUxNIFVWczogdSBhcm91bmQgdGhlIGNpcmN1bWZlcmVuY2UsIHYgYWxvbmcgdGhlIGxlbmd0aCwgYm90aCBpbiBtZXRyZXMgLS0gc28gdGhlIG5vZGVcbiAgICAgIC8vIHJpbmdzIG9mIGEgY3VsbSB0aWxlIGNyb3NzIGEgYmFtYm9vIHBvbGUgYXQgcmVhbCBzcGFjaW5nIGhvd2V2ZXIgdGhlIHBvbGUgaXMgdGhlbiB0dXJuZWQuXG4gICAgICAvLyBJdCBoYXMgdG8gaGFwcGVuIEJFRk9SRSB0aGUgcm90YXRpb25zLCB3aGlsZSB0aGUgY3lsaW5kZXIgc3RpbGwgcnVucyBhbG9uZyBpdHMgb3duIFkuXG4gICAgICBpZiAoYy51diA9PT0gJ2N1bG0nKSBjdWxtVVYoZywgY3kucnQsIGN5LmgsIGMudXZTY2FsZSA/PyAxLCBjeS52T2ZmID8/IDApO1xuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnkpIGcucm90YXRlWShjeS5yeSk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbCBvZiAoYy5sYXRoZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgcnlgIHlhd3MgdGhlIHJldm9sdXRpb246IGEgNC1zZWdtZW50IGxhdGhlIHR1cm5lZCA0NSBkZWdyZWVzIGlzIGEgY2hhbWZlcmVkIFNRVUFSRSBzbGFiIGluIG9uZVxuICAgICAgLy8gZ2VvbWV0cnkgKGEgY29uZSdzIHJ1YmJlciBiYXNlKSwgd2hlcmUgdHdvIHN0YWNrZWQgYm94ZXMgd291bGQgY29zdCB0d28gYW5kIGEgY29wbGFuYXIgcGFpci5cbiAgICAgIC8vIGBjeWxVVmAgKGEgdGlsZSBzaXplIGluIG1ldHJlcykgd3JpdGVzIGEgc2VhbWxlc3MgYXJvdW5kLWJ5LXVwIFVWIGZyb20gdGhlIGxhdGhlJ3Mgb3duIHNlZ21lbnRcbiAgICAgIC8vIGluZGV4IC0tIGF0YW4yIHdvdWxkIGZvbGQgYSB3aG9sZSB0aWxlIGludG8gdGhlIHNlYW0gY29sdW1uIC0tIGZvciB0cmVhZCwgZmx1dGluZyBhbmQgZ3JhaW4uXG4gICAgICBjb25zdCBnID0gbGF0aGUobC5wdHMsIGwuc2VnID8/IDEyLCAwLCBsLnNoYXJwICE9PSBmYWxzZSwgbC53ZWxkU2VhbSA9PT0gdHJ1ZSk7XG4gICAgICBpZiAobC5jeWxVVikgeyBjb25zdCBjdSA9IEFycmF5LmlzQXJyYXkobC5jeWxVVikgPyBsLmN5bFVWIDogW2wuY3lsVVYsIGwuY3lsVVYsIDBdOyBsYXRoZVVWKGcsIChnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCAvICgobC5zZWcgPz8gMTIpICsgMSkpIHwgMCwgbC5zZWcgPz8gMTIsIGN1WzBdLCBjdVsxXSwgY3VbMl0gPz8gMCk7IH1cbiAgICAgIGlmIChsLnNjYWxlKSB7IGcuc2NhbGUobC5zY2FsZVswXSwgbC5zY2FsZVsxXSwgbC5zY2FsZVsyXSk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgfVxuICAgICAgLy8gYHJ5YCB5YXdzIHRoZSByZXZvbHV0aW9uIChhYm92ZSkuIGByeGAvYHJ6YCBUSUxUIHRoZSBheGlzIGl0c2VsZiwgd2hpY2ggaXMgd2hhdCBhIFdBTEwgb3JcbiAgICAgIC8vIGNlaWxpbmcgZml0dGluZyBuZWVkczogYSBsYXRoZSByZXZvbHZlcyBhYm91dCArWSwgYW5kIGEgYnVsa2hlYWQgbGFtcCdzIGF4aXMgaXMgdGhlIHdhbGxcbiAgICAgIC8vIG5vcm1hbCwgc28gaXRzIGJhY2twbGF0ZSBhbmQgZG9tZSBhcmUgYXV0aG9yZWQgYWJvdXQgWSBhbmQgbGFpZCBkb3duIHdpdGggcnggPSBQSS8yLlxuICAgICAgaWYgKGwucnkpIGcucm90YXRlWShsLnJ5KTsgaWYgKGwucngpIGcucm90YXRlWChsLnJ4KTsgaWYgKGwucnopIGcucm90YXRlWihsLnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGwuYXRbMF0sIGwuYXRbMV0sIGwuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgbC5oZXgpKTtcbiAgICB9XG4gICAgLy8gUklCQkVEIERPTUVTOiBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiBjYXJyeWluZyB2ZXJ0aWNhbCBGTFVURVMsIGFzIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgXG4gICAgLy8gc2FtcGxlZCBwZXIgc2VjdG9yIHJhdGhlciB0aGFuIGEgbGF0aGUuIEEgcHJlc3NlZC1nbGFzcyBsYW1wIGRvbWUgaXMgZmx1dGVkLCBhbmQgYSBzbW9vdGggb25lXG4gICAgLy8gcmVhZHMgYXMgYSBwbGFzdGljIGJ1YmJsZSAtLSB0aGUgcmlicyBhcmUgbW9zdCBvZiB3aGF0IHNheXMgYGdsYXNzYCBhdCBwcm9wIGRpc3RhbmNlLiBBdXRob3JlZFxuICAgIC8vIGFib3V0ICtZIGxpa2UgYSBsYXRoZSwgc28gYSB3YWxsIGZpdHRpbmcgbGF5cyBpdCBkb3duIHdpdGggcnguXG4gICAgZm9yIChjb25zdCBkIG9mIChjLmRvbWVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHJpYmJlZERvbWUoZC5wdHMsIGQucmlicywgZC5hbXAsIGQuc2VnID8/IDI0LCBkLnZhbGxleSk7XG4gICAgICBpZiAoZC5yeSkgZy5yb3RhdGVZKGQucnkpOyBpZiAoZC5yeCkgZy5yb3RhdGVYKGQucngpOyBpZiAoZC5yeikgZy5yb3RhdGVaKGQucnopO1xuICAgICAgaWYgKGQuYXQpIGcudHJhbnNsYXRlKGQuYXRbMF0sIGQuYXRbMV0sIGQuYXRbMl0pO1xuICAgICAgLy8gQSBmbHV0ZWQgZG9tZSB3cml0ZXMgaXRzIE9XTiBjb2xvdXIgYXR0cmlidXRlICh0aGUgY3Jlc3QtdG8tdmFsbGV5IG11bHRpcGxpZXIpLCBzbyB0aW50R2VvXG4gICAgICAvLyB3b3VsZCBvdmVyd3JpdGUgdGhlIGZsdXRlIHN0cmlwaW5nIHdpdGggb25lIGZsYXQgaGV4IC0tIHRoZSBzYW1lIHRyYXAgYHNoZWV0YCdzIGhleFVuZGVyXG4gICAgICAvLyBmZWxsIGludG8uIE11bHRpcGx5IHRoZSB0b25lIElOVE8gdGhlIG11bHRpcGxpZXIgaW5zdGVhZCwgc28gdGhlIGRvbWUgY2FycmllcyBib3RoLlxuICAgICAgaWYgKGQudmFsbGV5ICYmIGQuaGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY29sID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgICBjb25zdCB0ID0gbmV3IFRIUkVFLkNvbG9yKGQuaGV4KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2wuY291bnQ7IGkrKykgY29sLnNldFhZWihpLCBjb2wuZ2V0WChpKSAqIHQuciwgY29sLmdldFkoaSkgKiB0LmcsIGNvbC5nZXRaKGkpICogdC5iKTtcbiAgICAgICAgZ3MucHVzaChnKTtcbiAgICAgIH0gZWxzZSBncy5wdXNoKGQudmFsbGV5ID8gZyA6IHRpbnRHZW8oZywgZC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwIG9mIChjLnBsYW5lcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgUEFORTogYSBzaW5nbGUgcXVhZCBpbiB0aGUgWFkgcGxhbmUgYXQgZGVwdGggeiwgZG91YmxlLXNpZGVkIGJ5IGl0cyBtYXRlcmlhbC4gSXRzIFVWcyBydW5cbiAgICAgIC8vIDAuLjEgYWNyb3NzIHRoZSBwYW5lIHNvIGFuIGFscGhhLWN1dCB0aWxlIHJlcGVhdHMgYHJlcGAgdGltZXMgYWNyb3NzIGFuZCBkb3duLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHAudywgcC5oLCAxLCAxKTtcbiAgICAgIGcudHJhbnNsYXRlKHAuYXRbMF0sIHAuYXRbMV0sIHAuYXRbMl0pO1xuICAgICAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIChwLnJlcD8uWzBdID8/IDEpLCB1di5nZXRZKGkpICogKHAucmVwPy5bMV0gPz8gMSkpO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIHAuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5leHRydWRlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgcHJvZmlsZSBpbiB0aGUgWFkgcGxhbmUgZXh0cnVkZWQgYWxvbmcgWiBiZXR3ZWVuIHowIGFuZCB6MSAtLSBhIHNsYWIgd2l0aCBhIG1vdWxkZWQgZWRnZSxcbiAgICAgIC8vIGEgcHlyYW1pZCBjYXAgYXMgYSBzdGVwcGVkIHByb2ZpbGUsIGEgc3BlYXIgZmluaWFsLlxuICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIHNoYXBlLm1vdmVUbyhlLnBvbHlbMF1bMF0sIGUucG9seVswXVsxXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGUucG9seS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKGUucG9seVtpXVswXSwgZS5wb2x5W2ldWzFdKTtcbiAgICAgIHNoYXBlLmNsb3NlUGF0aCgpO1xuICAgICAgZm9yIChjb25zdCBoIG9mIChlLmhvbGVzID8/IFtdKSBhcyBudW1iZXJbXVtdW10pIHtcbiAgICAgICAgY29uc3QgaHAgPSBuZXcgVEhSRUUuUGF0aCgpOyBocC5tb3ZlVG8oaFswXVswXSwgaFswXVsxXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaC5sZW5ndGg7IGkrKykgaHAubGluZVRvKGhbaV1bMF0sIGhbaV1bMV0pO1xuICAgICAgICBocC5jbG9zZVBhdGgoKTsgc2hhcGUuaG9sZXMucHVzaChocCk7XG4gICAgICB9XG4gICAgICBjb25zdCBnID0gZXh0cnVkZUFsb25nWihzaGFwZSwgZS56MCwgZS56MSk7XG4gICAgICBpZiAoZS5yeCkgZy5yb3RhdGVYKGUucngpO1xuICAgICAgaWYgKGUucnkpIGcucm90YXRlWShlLnJ5KTtcbiAgICAgIGlmIChlLnJ6KSBnLnJvdGF0ZVooZS5yeik7XG4gICAgICBpZiAoZS5hdCkgZy50cmFuc2xhdGUoZS5hdFswXSwgZS5hdFsxXSwgZS5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgZS5oZXgpKTtcbiAgICB9XG4gICAgLy8gRUxMSVBTT0lEUzogW2hleCwgY3gsIGN5LCBjeiwgcngsIHJ5LCByeiwgcm90WD8sIHJvdFk/LCByb3RaP10gLS0gYSB1bml0IHNwaGVyZSBzY2FsZWQgcGVyIGF4aXNcbiAgICAvLyBhbmQgdHVybmVkIGFib3V0IGl0cyBvd24gY2VudHJlLiBBIHNrdWxsIGRvbWUsIGEgcGF3LCBhIG5vc2UgcGFkOiB0aGUgcm91bmRlZCBzb2xpZHMgb2YgYW5cbiAgICAvLyBhbmltYWwgdGhhdCBhIGJveCBvciBhIHN0YXRpb24gdHViZSBjYW5ub3QgZ2l2ZSwgc2hhcmluZyBzbW9vdGggbm9ybWFscyB0aHJvdWdoIHRoZSBtZXJnZS5cbiAgICBmb3IgKGNvbnN0IGUgb2YgKGMuZWxsaXBzb2lkcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkge1xuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLCBlWzEwXSA/PyAxNiwgZVsxMV0gPz8gMTIpO1xuICAgICAgZy5zY2FsZShlWzRdLCBlWzVdLCBlWzZdKTtcbiAgICAgIGlmIChlWzddKSBnLnJvdGF0ZVgoZVs3XSk7IGlmIChlWzhdKSBnLnJvdGF0ZVkoZVs4XSk7IGlmIChlWzldKSBnLnJvdGF0ZVooZVs5XSk7XG4gICAgICBnLnRyYW5zbGF0ZShlWzFdLCBlWzJdLCBlWzNdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlWzBdKSk7XG4gICAgfVxuICAgIC8vIEZSVVNUQTogW2hleCwgY3gsIHlCb3R0b20sIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0gLS0gYSBib3ggd2hvc2UgZm9vdHByaW50IGNoYW5nZXMgZnJvbSAodzAsIGQwKSBhdFxuICAgIC8vIHRoZSBib3R0b20gdG8gKHcxLCBkMSkgYXQgdGhlIHRvcDogdGhlIHRhcGVyZWQgYm9keSBvZiBhIHdoZWVsaWUgYmluIG9yIGEgc3RlZWwgY29udGFpbmVyLlxuICAgIGZvciAoY29uc3QgZiBvZiAoYy5mcnVzdGEgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhmcnVzdHVtKGYuc2xpY2UoMSkpLCBmWzBdKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgLy8gRFJBUEVEIFNIRUVUUzogYSB0YXJwIG9yIGF3bmluZyBhcyBhIGhlaWdodCBncmlkIHdpdGggdGhpY2tuZXNzIC0tIGEgcmlkZ2UsIHRoZSBzYWcgYmV0d2VlblxuICAgIC8vIGl0cyBwb2xlcyBhbmQgdGhlIGRyb29wIG9mIGl0cyBmcmVlIGVkZ2VzIGFyZSBudW1iZXJzIGluIHRoZSBncmlkLCBjb21wdXRlZCBhdCBlbWl0IHRpbWUuXG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNoZWV0cyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgc2hlZXQgZ2l2ZW4gYGhleFVuZGVyYCBoYXMgYWxyZWFkeSB3cml0dGVuIGl0cyBPV04gY29sb3VyIGF0dHJpYnV0ZSwgb25lIHRvbmUgZm9yIHRoZSB0b3BcbiAgICAgIC8vIGdyaWQgYW5kIGFub3RoZXIgZm9yIHRoZSB1bmRlcnNpZGUgYW5kIHJpbS4gdGludEdlbyB3b3VsZCBvdmVyd3JpdGUgdGhlIGxvdCB3aXRoIGEgc2luZ2xlXG4gICAgICAvLyBoZXggLS0gd2hpY2ggaXMgd2hhdCBzaGlwcGVkIHRoZSB0YXJwYXVsaW4gYmF5J3MgYmx1ZS1vdmVyLW9yYW5nZSB0YXJwIGFzIGEgd2hpdGUgc2FpbC5cbiAgICAgIGNvbnN0IGcgPSBzaGVldChzKTtcbiAgICAgIGdzLnB1c2gocy5oZXhVbmRlciAhPT0gdW5kZWZpbmVkID8gZyA6IHRpbnRHZW8oZywgcy5oZXgpKTtcbiAgICB9XG4gICAgLy8gT1JHQU5JQyBzdGF0aW9uIHR1YmVzOiBbeiwgY3gsIGN5LCByeCwgcnldIHN0YXRpb25zIHN3ZXB0IGFsb25nIFogLS0gdGhlIG9ubHkgc29mdCBmb3JtIGluIHRoZVxuICAgIC8vIGtpdCwgYSBseWluZyBhbmltYWwuIExpdCBzbW9vdGggYnkgdGhlIGhlbHBlcidzIHNoYXJlZCByaW5nIHZlcnRpY2VzLlxuICAgIGZvciAoY29uc3QgdCBvZiAoYy50dWJlc0Fsb25nID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHR1YmVBbG9uZyh0LnN0YXRpb25zLCB0LnNlZyA/PyAxMik7XG4gICAgICBpZiAodC5yeSkgZy5yb3RhdGVZKHQucnkpOyBpZiAodC5hdCkgZy50cmFuc2xhdGUodC5hdFswXSwgdC5hdFsxXSwgdC5hdFsyXSk7XG4gICAgICAvLyBgaGV4ZXNgIC0tIG9uZSBjb2xvdXIgcGVyIFNUQVRJT04sIGJsZW5kZWQgYWxvbmcgdGhlIHN3ZWVwIC0tIGlzIGhvdyBhIGNvYXQgcGF0dGVybiB0aGF0IHJ1bnNcbiAgICAgIC8vIGFsb25nIHRoZSBib2R5IChhIHdoaXRlIGNvbGxhciBiZXR3ZWVuIGEgdGFuIHNrdWxsIGFuZCBhIHRhbiBzYWRkbGUpIGlzIGNhcnJpZWQgb24gYSBzaW5nbGVcbiAgICAgIC8vIG1lcmdlZCBtZXNoLiBUaGUgY29tcG9uZW50J3MgYXhpcyB0aW50IHRoZW4gbXVsdGlwbGllcyB0aGUgZG9yc2FsLXRvLXZlbnRyYWwgZmFkZSBpbnRvIGl0LFxuICAgICAgLy8gYW5kIG5laXRoZXIgY29zdHMgYSBtYXRlcmlhbC4gQSBzaW5nbGUgYGhleGAgc3RheXMgdGhlIGRlZmF1bHQuXG4gICAgICBpZiAodC5oZXhlcykge1xuICAgICAgICAvLyBBIHN0YXRpb24gZW50cnkgbWF5IGJlIG9uZSBoZXgsIG9yIGEgUEFJUiBbZG9yc2FsLCB2ZW50cmFsXSBibGVuZGVkIGFyb3VuZCB0aGUgcmluZyBieSB0aGVcbiAgICAgICAgLy8gc2FtZSBzaW4odGhldGEpIHR1YmVBbG9uZyBzd2VwdCB0aGUgc2VjdGlvbiB3aXRoIC0tIHNvIHRoZSBjb2F0IHJ1bnMgYm90aCBBTE9ORyB0aGUgYm9keVxuICAgICAgICAvLyAoYSB3aGl0ZSBjb2xsYXIgYmV0d2VlbiBhIHRhbiBza3VsbCBhbmQgYSB0YW4gc2FkZGxlKSBhbmQgQUNST1NTIGl0ICh0aGUgc2FkZGxlIGdpdmluZyB3YXlcbiAgICAgICAgLy8gdG8gYSBkdXN0eSBmbGFuayBhbmQgYSBwYWxlIGJlbGx5KS4gQW4gYXhpcyB0aW50IGNhbm5vdCBkbyB0aGUgc2Vjb25kIGhhbGY6IG9uIGFuIGFuaW1hbFxuICAgICAgICAvLyBseWluZyBvbiBpdHMgc2lkZSB0aGUgZG9yc2FsLXRvLXZlbnRyYWwgYXhpcyBpcyBob3Jpem9udGFsLCBzbyBhIGJhbmQgaW4geCBjdXRzIHRoZSBjcm93blxuICAgICAgICAvLyBvZiB0aGUgc3dlZXAgaW4gaGFsZiwgYW5kIGEgTVVMVElQTFkgY2FuIG9ubHkgZXZlciBkYXJrZW4gLS0gaXQgY2Fubm90IHRha2UgYSB3YXJtIHRhbiB0b1xuICAgICAgICAvLyBhIGNvb2xlciBncmV5LiBUd28gY29sb3VycyBwZXIgc3RhdGlvbiwgb25lIGF0dHJpYnV0ZSwgc3RpbGwgb25lIGRyYXcgY2FsbC5cbiAgICAgICAgY29uc3Qgc2VnID0gdC5zZWcgPz8gMTIsIG4gPSB0LnN0YXRpb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShzZWcgKiBuICogMyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZSA9IHQuaGV4ZXNbTWF0aC5taW4odC5oZXhlcy5sZW5ndGggLSAxLCBpKV07XG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBUSFJFRS5Db2xvcihBcnJheS5pc0FycmF5KGUpID8gZVswXSA6IGUpLCB2ID0gbmV3IFRIUkVFLkNvbG9yKEFycmF5LmlzQXJyYXkoZSkgPyBlWzFdIDogZSk7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZiA9IChNYXRoLnNpbihqICogTWF0aC5QSSAqIDIgLyBzZWcpICsgMSkgLyAyO1xuICAgICAgICAgICAgY29uc3QgayA9IChpICogc2VnICsgaikgKiAzO1xuICAgICAgICAgICAgY29sW2tdID0gZC5yICsgKHYuciAtIGQucikgKiBmOyBjb2xbayArIDFdID0gZC5nICsgKHYuZyAtIGQuZykgKiBmOyBjb2xbayArIDJdID0gZC5iICsgKHYuYiAtIGQuYikgKiBmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICAgICAgICBncy5wdXNoKGcpO1xuICAgICAgfSBlbHNlIGdzLnB1c2godGludEdlbyhnLCB0LmhleCA/PyAweGZmZmZmZikpO1xuICAgIH1cbiAgICBsZXQgZyA9IG1lcmdlR2Vvcyhncyk7XG4gICAgLy8gYSBwZXItY29tcG9uZW50IHNjYWxlLCBhcHBsaWVkIHRvIHRoZSBtZXJnZSBiZWZvcmUgdGludGluZzogaG93IGEgbHlpbmcgYW5pbWFsIGF1dGhvcmVkIGF0XG4gICAgLy8gaXRzIG93biBwcm9wb3J0aW9ucyBpcyBmaXR0ZWQgaW50byB0aGUgZGVjbGFyZWQgZW52ZWxvcGUgd2l0aG91dCByZS1yZWFkaW5nIGV2ZXJ5IHN0YXRpb25cbiAgICBpZiAoYy5zY2FsZSkgZy5zY2FsZShjLnNjYWxlWzBdLCBjLnNjYWxlWzFdLCBjLnNjYWxlWzJdKTtcbiAgICAvLyBBWElTIFRJTlQ6IGEgcGVyLXZlcnRleCBibGVuZCBmcm9tIGMwIGF0IGBmcm9tYCB0byBjMSBhdCBgdG9gIGFsb25nIG9uZSBheGlzLCBvdmVyIHRoZSB3aG9sZVxuICAgIC8vIG1lcmdlIC0tIGEgdGFuIGJhY2sgZmFkaW5nIHRvIGEgd2hpdGUgYmVsbHkgY29zdHMgYW4gYXR0cmlidXRlLCBub3QgYSBzZWNvbmQgbWF0ZXJpYWwuIEFwcGxpZWRcbiAgICAvLyBpbiBMSU5FQVIgc3BhY2UgdGhyb3VnaCBUSFJFRS5Db2xvci4gYGtlZXBgIG11bHRpcGxpZXMgdGhlIGJsZW5kIGludG8gdGhlIGV4aXN0aW5nIHRpbnQgaW5zdGVhZFxuICAgIC8vIG9mIHJlcGxhY2luZyBpdCwgc28gYSBkYXJrIG5vc2Ugc3RheXMgZGFyay5cbiAgICBpZiAoYy50aW50KSB7XG4gICAgICBjb25zdCBhID0gbmV3IFRIUkVFLkNvbG9yKGMudGludC5jMCksIGIgPSBuZXcgVEhSRUUuQ29sb3IoYy50aW50LmMxKTtcbiAgICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTsgbGV0IGNvbCA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSB8IG51bGw7XG4gICAgICBpZiAoIWNvbCkgeyBjb2wgPSBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpLmZpbGwoMSksIDMpOyBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBjb2wpOyB9XG4gICAgICBjb25zdCBheCA9IGMudGludC5heGlzID09PSAneCcgPyAwIDogYy50aW50LmF4aXMgPT09ICd5JyA/IDEgOiAyO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgdiA9IGF4ID09PSAwID8gcC5nZXRYKGkpIDogYXggPT09IDEgPyBwLmdldFkoaSkgOiBwLmdldFooaSk7XG4gICAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAodiAtIGMudGludC5mcm9tKSAvIChjLnRpbnQudG8gLSBjLnRpbnQuZnJvbSkpKTtcbiAgICAgICAgY29uc3QgciA9IGEuciArIChiLnIgLSBhLnIpICogdCwgZ2cgPSBhLmcgKyAoYi5nIC0gYS5nKSAqIHQsIGJiID0gYS5iICsgKGIuYiAtIGEuYikgKiB0O1xuICAgICAgICBpZiAoYy50aW50LmtlZXApIGNvbC5zZXRYWVooaSwgY29sLmdldFgoaSkgKiByLCBjb2wuZ2V0WShpKSAqIGdnLCBjb2wuZ2V0WihpKSAqIGJiKTsgZWxzZSBjb2wuc2V0WFlaKGksIHIsIGdnLCBiYik7XG4gICAgICB9XG4gICAgICBjb2wubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoYy51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAnaGVpZ2h0JykgZyA9IGhlaWdodFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ3BhbmVsJykgZyA9IHBhbmVsVVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAncGFuZWwtcm90JykgZyA9IHBhbmVsVVYoZywgYy51dlNjYWxlID8/IDEsIHRydWUpO1xuICAgIC8vICdmcm9udCc6IHBsYW5hciBVVnMgaW50byBhIGJha2VkIGZyb250LWVsZXZhdGlvbiBhdGxhcyBvbiArWiBmYWNlcywgb25lIHBpbm5lZCB0ZXhlbCBlbHNld2hlcmUuXG4gICAgaWYgKGMudXYgPT09ICdmcm9udCcpIGcgPSBmcm9udEF0bGFzVVYoZywgYy5hdGxhcyk7XG4gICAgLy8gJ2N1bG0nIGlzIGRlbGliZXJhdGVseSBhYnNlbnQgaGVyZTogaXQgaXMgd3JpdHRlbiBwZXIgY3lsaW5kZXIgYWJvdmUsIGJlZm9yZSB0aGUgcm90YXRpb25zLFxuICAgIC8vIGFuZCBhIHdob2xlLW1lcmdlIHBhc3Mgd291bGQgZmxhdHRlbiBpdCBiYWNrIHRvIHRoZSBjeWxpbmRlcidzIGRlZmF1bHQgMC4uMSB3cmFwLlxuICAgIGFkZChjLmlkLCBjLm5hbWUsIGcsIGMubWF0ZXJpYWwpO1xuICAgIGlmIChjLmNvbGxpZGVyKSBjb2xsaWRlcnNbYy5pZF0gPSBjLmNvbGxpZGVyO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByZXBldGl0aW9uIHN5c3RlbXNcbiAgICogUGlja2V0cywgc2xhdHMsIGxhdHRpY2Ugc3RyaXBzOiBvbmUgZ2VvbWV0cnksIG9uZSBJbnN0YW5jZWRNZXNoLCBvbmUgZHJhdyBjYWxsLiAqL1xuICBmb3IgKGNvbnN0IHIgb2YgKEcuaW5zdGFuY2VkID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIChyLmJveGVzID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgcyBvZiAoci5zcGlrZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHRpbnRHZW8oc3Bpa2Uocy5hdCwgcy53LCBzLmgpLCBzLmhleCkpO1xuICAgIGZvciAoY29uc3QgZiBvZiAoci5mcnVzdGEgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhmcnVzdHVtKGYuc2xpY2UoMSkpLCBmWzBdKSk7XG4gICAgZm9yIChjb25zdCBjeSBvZiAoci5jeWxzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHRoMGAvYHRoTGVuYCBjdXQgYSBQQVJUSUFMIGN5bGluZGVyIHRoZSBzYW1lIHdheSB0aGUgY29tcG9uZW50IGJyYW5jaCBkb2VzOiBhIHNwbGl0IGJhbWJvb1xuICAgICAgLy8gY3VsbSBpcyBhIGhhbGYgcGlwZSwgdGhMZW4gPSBQSSwgYG9wZW5gIHNvIGl0IGlzIGEgc2hlbGwgd2l0aCBubyBkaXNjcyBhdCBpdHMgZW5kcy4gVGhlXG4gICAgICAvLyBtYXRlcmlhbCBjYXJyaWVzIGRvdWJsZVNpZGVkLCBiZWNhdXNlIGEgaG9sbG93LXVwIGN1bG0gaXMgc2VlbiBmcm9tIHRoZSBpbnNpZGUuXG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoY3kucnQsIGN5LnJiLCBjeS5oLCBjeS5zZWcgPz8gMTIsIDEsIGN5Lm9wZW4gPz8gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3kudGgwID8/IDAsIGN5LnRoTGVuID8/IE1hdGguUEkgKiAyKTtcbiAgICAgIGlmIChyLnV2ID09PSAnY3VsbScpIGN1bG1VVihnLCBjeS5ydCwgY3kuaCwgci51dlNjYWxlID8/IDEsIGN5LnZPZmYgPz8gMCk7XG4gICAgICBpZiAoY3kucngpIGcucm90YXRlWChjeS5yeCk7IGlmIChjeS5yeSkgZy5yb3RhdGVZKGN5LnJ5KTsgaWYgKGN5LnJ6KSBnLnJvdGF0ZVooY3kucnopO1xuICAgICAgZy50cmFuc2xhdGUoY3kuYXRbMF0sIGN5LmF0WzFdLCBjeS5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBjeS5oZXgpKTtcbiAgICB9XG4gICAgLy8gQW4gT1BFTiB3aGVlbCAtLSB0eXJlIGFuZCByaW0gYXMgY2xvc2VkIHJpbmcgbGF0aGVzLCBhIGh1YiwgYW5kIHdpcmUgc3Bva2VzIC0tIGZvciBhIGJpY3ljbGVcbiAgICAvLyB3aG9zZSB3aGVlbHMgcmVhZCBhcyBiaWN5Y2xlIHdoZWVscyByYXRoZXIgdGhhbiBkaXNjcy4gTGF0aGVzIHJldm9sdmUgYWJvdXQgWSAoYHJ4YCBsYXlzIHRoZVxuICAgIC8vIGF4bGUgd2hlcmUgdGhlIHBsYWNlbWVudCB3YW50cyBpdCk7IGBzcG9rZXNgIHJhZGlhdGUgYWJvdXQgWCBieSB0aGUgaGVscGVyJ3MgY29udmVudGlvbiwgc28gYW5cbiAgICAvLyBheGxlIG9uIFogdGFrZXMgYHJ5OiBQSS8yYC5cbiAgICBmb3IgKGNvbnN0IGwgb2YgKHIubGF0aGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IGxhdGhlKGwucHRzLCBsLnNlZyA/PyAxMiwgMCwgbC5zaGFycCAhPT0gZmFsc2UsIGwud2VsZFNlYW0gPT09IHRydWUpO1xuICAgICAgaWYgKGwucngpIGcucm90YXRlWChsLnJ4KTsgaWYgKGwucnkpIGcucm90YXRlWShsLnJ5KTsgaWYgKGwucnopIGcucm90YXRlWihsLnJ6KTtcbiAgICAgIGlmIChsLmF0KSBnLnRyYW5zbGF0ZShsLmF0WzBdLCBsLmF0WzFdLCBsLmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGwuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcyBvZiAoci5zcG9rZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gc3Bva2VzKHMuckh1Yiwgcy5yUmltLCBzLmhhbGZXLCBzLm4sIHMuaGV4LCBzLnQgPz8gMC4wMDYsIHMucHJpc20gPz8gZmFsc2UpO1xuICAgICAgaWYgKHMucngpIGcucm90YXRlWChzLnJ4KTsgaWYgKHMucnkpIGcucm90YXRlWShzLnJ5KTsgaWYgKHMucnopIGcucm90YXRlWihzLnJ6KTtcbiAgICAgIGlmIChzLmF0KSBnLnRyYW5zbGF0ZShzLmF0WzBdLCBzLmF0WzFdLCBzLmF0WzJdKTsgZ3MucHVzaChnKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB0IG9mIChyLnR1YmVzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0dWJlKHQucHRzLCB0LnIsIHQuc2VnID8/IDgsIHQuaGV4KSk7XG4gICAgbGV0IGcgPSBtZXJnZUdlb3MoZ3MpO1xuICAgIGlmIChyLnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCByLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKHIudXYgPT09ICdoZWlnaHQnKSBnID0gaGVpZ2h0VVYoZywgci51dlNjYWxlID8/IDEpO1xuICAgIC8vICdjdWxtJyBhZ2FpbiB3cml0dGVuIHBlciBjeWxpbmRlciBhYm92ZSwgYmVmb3JlIHRoZSByb3RhdGlvbnMuXG4gICAgY29uc3QgbWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gICAgZm9yIChjb25zdCBwIG9mIHIucGxhY2VtZW50cyBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBtYXRzLnB1c2gobmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhwWzBdLCBwWzFdLCBwWzJdKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tRXVsZXIobmV3IFRIUkVFLkV1bGVyKHBbM10gPz8gMCwgcFs0XSA/PyAwLCBwWzVdID8/IDApKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpKTtcbiAgICB9XG4gICAgYWRkSW5zdChyLmlkLCByLm5hbWUsIGcsIHIubWF0ZXJpYWwsIG1hdHMsIHIuY29sb3JzKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzZXMgKi9cbiAgZm9yIChjb25zdCB0IG9mIChDT05GSUcudGlsZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbWF0ID0gbWF0ZXJpYWxzW3QubWF0ZXJpYWxdO1xuICAgIGlmICghbWF0KSBjb250aW51ZTtcbiAgICAvLyBBIEJBS0VEIGdyYXBoaWMgKGEgcHJpbnRlZCBzaWduIGZhY2UpOiBvbmUgV2ViUCBkYXRhIFVSSSBjb21wb3NlZCBvZmZsaW5lIGZyb20gdGhlIHBsYXRlJ3Mgb3duXG4gICAgLy8gcHJpbnRlZCByZWdpb24gYW5kIHZlY3RvciBtYXJrcywgbG9hZGVkIHRocm91Z2ggVGV4dHVyZUxvYWRlci4gQXNzaWduZWQgc3luY2hyb25vdXNseSBzbyB0aGVcbiAgICAvLyBoYXJuZXNzIHdhaXRzIG9uIHRoZSBkZWNvZGUuIEl0IGJlYXRzIGZpbGxUZXh0LCB3aGljaCBkcmF3cyBhIGRpZmZlcmVudCB3b3JkbWFyayBwZXIgbWFjaGluZS5cbiAgICBpZiAodC5raW5kID09PSAnYmFrZWQnKSB7XG4gICAgICAvLyBVbmRlciBwbGFpbiBOb2RlICh0aGUgY29wbGFuYXIgY2hlY2ssIHRoZSBydW50aW1lIHByb2JlKSB0aGVyZSBpcyBubyBkb2N1bWVudCBmb3IgSW1hZ2VMb2FkZXI6XG4gICAgICAvLyBrZWVwIHRoZSB3aGl0ZSBmYWxsYmFjayByYXRoZXIgdGhhbiB0aHJvdywgZXhhY3RseSBhcyB0aGUgcmV0YWlsIGdsYXppbmcgZG9lcy5cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGJha2VkID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKHQudXJpKTtcbiAgICAgIGNvbnN0IHNyZ2IgPSAoVEhSRUUgYXMgYW55KS5TUkdCQ29sb3JTcGFjZTtcbiAgICAgIGlmIChzcmdiKSBiYWtlZC5jb2xvclNwYWNlID0gc3JnYjtcbiAgICAgIGJha2VkLmFuaXNvdHJvcHkgPSA0O1xuICAgICAgbWF0Lm1hcCA9IGJha2VkOyBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGxldCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgICBpZiAodC5raW5kID09PSAnbXVkJykgdGV4ID0gbXVkVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJhc2UsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdkdXN0JykgdGV4ID0gZHVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5kdXN0LCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMwKTtcbiAgICBpZiAodC5raW5kID09PSAncGxhbmsnKSB0ZXggPSBwbGFua1RpbGUodC5zaXplID8/IDUxMiwgdC5ib2FyZHMgPz8gNiwgdC5zZWVkID8/IDUpO1xuICAgIGlmICh0LmtpbmQgPT09ICdydXN0JykgdGV4ID0gcnVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5yYXRpbywgdC5zZWVkID8/IDcsIHQuZGVuc2l0eSA/PyA5MCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BhaW50JykgdGV4ID0gcGFpbnRUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxNywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2NvcnJ1Z2F0aW9uJykgdGV4ID0gY29ycnVnYXRpb25UaWxlKHQuc2l6ZSA/PyA1MTIsIHQucGl0Y2ggPz8gMTIsIHQubG93ID8/IDAuNywgdC5zZWVkID8/IDMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdncmltZScpIHRleCA9IGdyaW1lVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd6aW5jJykgdGV4ID0gemluY1RpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDE5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnZnVyJykgdGV4ID0gZnVyVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjaGFpbmxpbmsnKSB0ZXggPSBjaGFpbmxpbmtUaWxlKHQuc2l6ZSA/PyAyNTYsIHQud2lyZSA/PyAwLjA5LCB0LnNlZWQgPz8gNCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2JhbWJvbycpIHRleCA9IGJhbWJvb1RpbGUodC5zaXplID8/IDUxMiwgdC5zdHJpcHMgPz8gMTAsIHQuc2VlZCA/PyA2KTtcbiAgICBpZiAodC5raW5kID09PSAnc3RyaXBlcycpIHRleCA9IHN0cmlwZVRpbGUodC5zaXplID8/IDI1NiwgdC5iYW5kcyA/PyA4LCB0LmEsIHQuYiwgdC5zZWVkID8/IDksIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdwb3N0ZXInKSB0ZXggPSBwb3N0ZXJUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA4LCB0LmxpbmVzID8/IFtdKTtcbiAgICBpZiAodC5raW5kID09PSAncGViYmxlJykgdGV4ID0gcGViYmxlVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMjEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0cmVhZCcpIHRleCA9IHRyZWFkVGlsZSh0LnNpemUgPz8gMjU2LCB0LnNlZWQgPz8gMjMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0eXJlJykgdGV4ID0gdHlyZVRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDI5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY3VsbScpIHRleCA9IGN1bG1UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAzMSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3Nhd24nKSB0ZXggPSBzYXduVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0aGF0Y2gnKSB0ZXggPSB0aGF0Y2hUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAzNywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3RhcnAnKSB0ZXggPSB0YXJwVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdnYWx2JykgdGV4ID0gZ2FsdlRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQ3LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnc3BsaXQnKSB0ZXggPSBzcGxpdFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDUzKTtcbiAgICBpZiAodC5raW5kID09PSAncm9wZScpIHRleCA9IHJvcGVUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA1OSk7XG4gICAgYmluZFRpbGUobWF0LCB0ZXgsIHQuYnVtcCA/PyAwKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZUJhbWJvb0hhbGZQaXBlQ2Fub3B5TW9kdWxlTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiB0aGUgcm9vdCwgcGx1cyBPTkUgUEVSIFdIRUVMIChhbmQgYW55IG90aGVyIG1lY2hhbmlzbSBDT05GSUcucGl2b3RzIG5hbWVzIC0tIGFcbiAgICAvLyBzdGVlcmluZyBoZWFkLCBhIGNhbm9weSBzdGF5KS4gQSB2ZWhpY2xlJ3Mgd2hlZWxzIGdlbnVpbmVseSB0dXJuLCBzbyBlYWNoIG9uZSBpcyBhIHByb21pc2VcbiAgICAvLyBrZXB0OiB0aGUgcGl2b3Qgc2l0cyBhdCB0aGUgaHViLCBpdHMgYXhpcyBpcyB0aGUgYXhsZSwgYW5kIGBpbnN0YW5jZWAgbmFtZXMgd2hpY2ggaW5zdGFuY2VcbiAgICAvLyBvZiB0aGUgd2hlZWwgSW5zdGFuY2VkTWVzaCBpdCBkcml2ZXMuIE5vdGhpbmcgZWxzZSBvbiB0aGUgcHJvcCBtb3ZlcyAtLSB0aGUgZG9vcnMgYXJlIHBhcnRcbiAgICAvLyBvZiB0aGUgYm9keSBzaGVsbCAtLSBzbyBub3RoaW5nIGVsc2UgZ2V0cyBhbiBheGlzLlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuICAgIGZvciAoY29uc3QgcHYgb2YgKENPTkZJRy5waXZvdHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBvID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICBvLm5hbWUgPSBwdi5uYW1lO1xuICAgICAgby5wb3NpdGlvbi5zZXQocHYucG9zaXRpb25bMF0sIHB2LnBvc2l0aW9uWzFdLCBwdi5wb3NpdGlvblsyXSk7XG4gICAgICBvLnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICAgIGFuaW1hdGlvblJvbGU6ICdjaGlsZCcsXG4gICAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBwdi5wb3NpdGlvbiwgYXhpczogcHYuYXhpcywgbmFtZTogcHYubmFtZSxcbiAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBwdi5jb21wb25lbnQsIGluc3RhbmNlOiBwdi5pbnN0YW5jZSA/PyBudWxsLCBub3RlczogcHYubm90ZSA/PyAnJyB9LFxuICAgICAgfTtcbiAgICAgIHJvb3QuYWRkKG8pO1xuICAgICAgcGl2b3RzLnB1c2gobyk7XG4gICAgfVxuXG4gICAgLy8gU29ja2V0czogTk9ORSB1bmxlc3MgQ09ORklHLnNvY2tldHMgbmFtZXMgb25lLiBOb3RoaW5nIGF0dGFjaGVzIHRvIGEgdmVoaWNsZSBpbiB0aGlzIGtpdFxuICAgIC8vIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cblxuLyoqXG4gKiBUaGUgb25lLWFyZ3VtZW50IGVudHJ5IHBvaW50OiB2aWJlM2QncyBjb250cmFjdCwgYW5kIGltZzJ0aHJlZWpzJ3Mgb3duLlxuICpcbiAqIGBjcmVhdGVPYmplY3RNb2RlbGAgYWJvdmUga2VlcHMgdGhhaWtpdCdzIGhpc3RvcmljYWwgKHNwZWMsIG9wdGlvbnMpIHNoYXBlIHNvXG4gKiB0aGUgaGFybmVzcywgdGhlIGxldmVsIGVkaXRvciBhbmQgdGhlIE5vZGUtc2lkZSBnYXRlcyBjYXJyeSBvbiB1bmNoYW5nZWQuXG4gKiBgc3BlY2AgaGFzIG5ldmVyIGJlZW4gcGFzc2VkIGJ5IGFueSBjYWxsZXIgLS0gaXQgaXMgaW5zcGVjdGlvbiBkYXRhIHRoYXQgaXNcbiAqIGFscmVhZHkgYmFrZWQgaW50byB0aGlzIG1vZHVsZSAtLSBzbyB0aGlzIGlzIHRoZSBob25lc3Qgc2lnbmF0dXJlLCBhbmQgaXQgaXNcbiAqIHdoYXQgYSB2aWJlM2QgY29uc3VtZXIgaW5zdGFsbHMgYW5kIGNhbGxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICByZXR1cm4gY3JlYXRlT2JqZWN0TW9kZWwodW5kZWZpbmVkLCBvcHRpb25zKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQXNDdkIsSUFBTSxTQUFTO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsSUFDWDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixlQUFlO0FBQUEsSUFDakI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxNQUNFLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixjQUFjO0FBQUEsTUFDWjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1g7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxjQUFjO0FBQUEsVUFDWjtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixPQUFPO0FBQUEsWUFDUCxTQUFTO0FBQUEsWUFDVCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixPQUFPO0FBQUEsWUFDUCxTQUFTO0FBQUEsWUFDVCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGNBQWM7QUFBQSxVQUNaO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBT0YsU0FBUyxVQUFVLE1BQW9EO0FBQ3JFLFFBQU0sUUFBZ0MsQ0FBQztBQUN2QyxRQUFNLE9BQWtCLENBQUM7QUFDekIsYUFBVyxLQUFLLE1BQU07QUFDcEIsUUFBSSxFQUFFLE9BQU87QUFBRSxZQUFNLEtBQUssRUFBRSxhQUFhLENBQUM7QUFBRyxXQUFLLEtBQUssSUFBSTtBQUFBLElBQUcsT0FDekQ7QUFBRSxZQUFNLEtBQUssQ0FBQztBQUFHLFdBQUssS0FBSyxLQUFLO0FBQUEsSUFBRztBQUFBLEVBQzFDO0FBQ0EsTUFBSSxRQUFRO0FBQ1osYUFBVyxLQUFLLE1BQU8sVUFBUyxFQUFFLGFBQWEsVUFBVSxFQUFFO0FBQzNELFFBQU0sV0FBVyxJQUFJLGFBQWEsUUFBUSxDQUFDO0FBQzNDLFFBQU0sU0FBUyxJQUFJLGFBQWEsUUFBUSxDQUFDO0FBQ3pDLFFBQU0sS0FBSyxJQUFJLGFBQWEsUUFBUSxDQUFDO0FBTXJDLFFBQU0sV0FBVyxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLGFBQWEsT0FBTyxDQUFDO0FBQzVELFFBQU0sUUFBUSxXQUFXLElBQUksYUFBYSxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSTtBQUMvRCxNQUFJLElBQUk7QUFDUixhQUFXLEtBQUssT0FBTztBQUNyQixVQUFNLElBQUksRUFBRSxhQUFhLFVBQVUsR0FBRyxJQUFJLEVBQUUsYUFBYSxRQUFRLEdBQUcsSUFBSSxFQUFFLGFBQWEsSUFBSTtBQUMzRixVQUFNLElBQUksRUFBRSxhQUFhLE9BQU87QUFDaEMsYUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxnQkFBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsZ0JBQVUsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsZ0JBQVUsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQzlHLFVBQUksR0FBRztBQUFFLGdCQUFRLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxnQkFBUSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxnQkFBUSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBQSxNQUFHO0FBQ3BILFVBQUksR0FBRztBQUFFLFlBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFHLFlBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEsTUFBRztBQUN2RSxVQUFJLFNBQVMsR0FBRztBQUFFLGVBQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFHLGVBQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsZUFBTyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBQSxNQUFHO0FBQUEsSUFDNUg7QUFDQSxTQUFLLEVBQUU7QUFBQSxFQUNUO0FBQ0EsV0FBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUFFLFFBQUksS0FBSyxDQUFDLEVBQUcsT0FBTSxDQUFDLEVBQUUsUUFBUTtBQUFHLFNBQUssQ0FBQyxFQUFFLFFBQVE7QUFBQSxFQUFHO0FBQzdGLFFBQU0sTUFBTSxJQUFVLHFCQUFlO0FBQ3JDLE1BQUksYUFBYSxZQUFZLElBQVUsc0JBQWdCLFVBQVUsQ0FBQyxDQUFDO0FBQ25FLE1BQUksYUFBYSxVQUFVLElBQVUsc0JBQWdCLFFBQVEsQ0FBQyxDQUFDO0FBQy9ELE1BQUksYUFBYSxNQUFNLElBQVUsc0JBQWdCLElBQUksQ0FBQyxDQUFDO0FBQ3ZELE1BQUksTUFBTyxLQUFJLGFBQWEsU0FBUyxJQUFVLHNCQUFnQixPQUFPLENBQUMsQ0FBQztBQUN4RSxNQUFJLG1CQUFtQjtBQUFHLE1BQUksc0JBQXNCO0FBQ3BELFNBQU87QUFDVDtBQTZCQSxTQUFTLGFBQWEsS0FBaUIsU0FBUyxJQUFJLE1BQU0sTUFBb0I7QUFDNUUsUUFBTSxNQUFrQixDQUFDO0FBQ3pCLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxRQUFRLEtBQUs7QUFDbkMsVUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQy9DLFFBQUksUUFBUTtBQUNaLFFBQUksS0FBSyxHQUFHO0FBQ1YsWUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMzRSxZQUFNLEtBQUssS0FBSyxNQUFNLElBQUksRUFBRSxHQUFHLEtBQUssS0FBSyxNQUFNLElBQUksRUFBRTtBQUNyRCxVQUFJLEtBQUssS0FBSyxLQUFLLEVBQUcsU0FBUSxLQUFLLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxLQUFLLEtBQUs7QUFDekgsVUFBSSxTQUFTLEtBQUssSUFBSSxJQUFLLEtBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxHQUFHLENBQUM7QUFDaEYsVUFBSSxLQUFLLENBQUM7QUFDVixVQUFJLFNBQVMsS0FBSyxJQUFJLElBQUssS0FBSSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxLQUFLLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxLQUFLLEdBQUcsQ0FBQztBQUFBLElBQ2xGLE1BQU8sS0FBSSxLQUFLLENBQUM7QUFBQSxFQUNuQjtBQUNBLFNBQU87QUFDVDtBQVlBLFNBQVMsTUFBTSxLQUFpQixLQUFhLFVBQVUsR0FBRyxRQUFRLE1BQU0sV0FBVyxPQUE2QjtBQUM5RyxRQUFNLEtBQUssUUFBUSxhQUFhLEdBQUcsSUFBSSxLQUFLLElBQUksQ0FBQyxNQUFNLElBQVUsY0FBUSxLQUFLLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQztBQUMzRyxRQUFNLElBQUksSUFBVSxvQkFBYyxHQUFHLEdBQUc7QUFDeEMsSUFBRSxxQkFBcUI7QUFDdkIsTUFBSSxVQUFVO0FBR1osVUFBTSxJQUFJLEVBQUUsYUFBYSxRQUFRO0FBQ2pDLFVBQU0sT0FBTyxFQUFFLFNBQVMsTUFBTTtBQUM5QixhQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sS0FBSztBQUM3QixZQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sT0FBTztBQUM5QixZQUFNLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUNwRixZQUFNLElBQUksS0FBSyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUs7QUFDakMsUUFBRSxPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFDL0IsUUFBRSxPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFBQSxJQUNqQztBQUNBLE1BQUUsY0FBYztBQUFBLEVBQ2xCO0FBQ0EsU0FBTztBQUNUO0FBeUhBLFNBQVMsY0FBYyxPQUFvQixJQUFZLElBQWtDO0FBQ3ZGLFFBQU0sSUFBSSxJQUFVLHNCQUFnQixPQUFPLEVBQUUsT0FBTyxLQUFLLElBQUksY0FBYyxPQUFPLGVBQWUsRUFBRSxDQUFDO0FBQ3BHLElBQUUsVUFBVSxHQUFHLEdBQUcsRUFBRTtBQUNwQixJQUFFLHFCQUFxQjtBQUN2QixTQUFPO0FBQ1Q7QUE2R0EsU0FBUyxXQUFXLFNBQXFCLE1BQWMsS0FBYSxLQUNoRCxRQUF5QztBQUMzRCxRQUFNLE1BQWdCLENBQUM7QUFDdkIsUUFBTSxNQUFnQixDQUFDO0FBTXZCLFFBQU0sT0FBTyxDQUFDLE1BQWM7QUFDMUIsUUFBSSxDQUFDLE9BQVEsUUFBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBSTVCLFVBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLElBQUksUUFBUyxJQUFJLE1BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSTtBQUNuRixXQUFPLENBQUMsS0FBSyxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUM7QUFBQSxFQUNuRjtBQUNBLFFBQU0sT0FBTyxDQUFDLEdBQWEsR0FBYSxNQUFnQixJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDakYsUUFBTSxLQUFLLENBQUMsR0FBVyxNQUFjO0FBQ25DLFVBQU0sS0FBTSxJQUFJLE1BQU8sS0FBSyxLQUFLLElBQUk7QUFDckMsVUFBTSxJQUFJLElBQUksTUFBTSxLQUFLLElBQUksT0FBTyxFQUFFO0FBQ3RDLFVBQU0sSUFBSSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUk7QUFDMUIsV0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBQUEsRUFDM0Q7QUFDQSxXQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsU0FBUyxHQUFHLEtBQUs7QUFDM0MsYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUM7QUFDM0UsV0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNaLFdBQUssR0FBRyxHQUFHLENBQUM7QUFDWixZQUFNLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQztBQUNuQyxVQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFBQSxJQUNuRDtBQUFBLEVBQ0Y7QUFDQSxRQUFNLElBQUksSUFBVSxxQkFBZTtBQUNuQyxJQUFFLGFBQWEsWUFBWSxJQUFVLHNCQUFnQixJQUFJLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5RSxJQUFFLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLGFBQWMsSUFBSSxTQUFTLElBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6RixNQUFJLE9BQVEsR0FBRSxhQUFhLFNBQVMsSUFBVSxzQkFBZ0IsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdkYsSUFBRSxxQkFBcUI7QUFDdkIsU0FBTztBQUNUO0FBMENBLFNBQVMsVUFBVSxVQUFzQixLQUFtQztBQVMxRSxRQUFNLE1BQWdCLENBQUMsR0FBRyxNQUFnQixDQUFDO0FBQzNDLFdBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxRQUFRLEtBQUs7QUFDeEMsVUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksU0FBUyxDQUFDO0FBQzdDLGFBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLO0FBQzVCLFlBQU0sS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJO0FBQzdCLFlBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLElBQUk7QUFDOUIsVUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsSUFBSTtBQUM1QixVQUFJLFVBQVUsVUFBYSxJQUFJLE1BQU8sS0FBSTtBQUMxQyxVQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFDQSxXQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsU0FBUyxHQUFHLEtBQUs7QUFDNUMsYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBTSxJQUFJLElBQUksTUFBTSxHQUFHLEtBQUssSUFBSSxLQUFLLE1BQU0sR0FBRyxLQUFLLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLElBQUksS0FBSztBQUN6RyxVQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUMzQjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLElBQUksSUFBVSxxQkFBZTtBQUNuQyxJQUFFLGFBQWEsWUFBWSxJQUFVLHNCQUFnQixJQUFJLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5RSxJQUFFLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLGFBQWMsSUFBSSxTQUFTLElBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6RixJQUFFLFNBQVMsR0FBRztBQUNkLElBQUUscUJBQXFCO0FBQ3ZCLFNBQU87QUFDVDtBQWlEQSxTQUFTLFFBQVEsS0FBMkIsS0FBbUM7QUFDN0UsUUFBTSxJQUFJLElBQVUsWUFBTSxHQUFHO0FBQzdCLFFBQU0sSUFBSSxJQUFJLGFBQWEsVUFBVSxFQUFFO0FBQ3ZDLFFBQU0sTUFBTSxJQUFJLGFBQWEsSUFBSSxDQUFDO0FBQ2xDLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQUUsUUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQUcsUUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFBRyxRQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUFBLEVBQUc7QUFDNUYsTUFBSSxhQUFhLFNBQVMsSUFBVSxzQkFBZ0IsS0FBSyxDQUFDLENBQUM7QUFDM0QsU0FBTztBQUNUO0FBS0EsU0FBUyxRQUFRLEtBQTJCLE9BQXFDO0FBQy9FLFFBQU0sSUFBSSxJQUFJLGFBQWEsVUFBVSxHQUFHLE1BQU0sSUFBSSxhQUFhLFFBQVE7QUFDdkUsUUFBTSxLQUFLLElBQUksYUFBYSxFQUFFLFFBQVEsQ0FBQztBQUN2QyxXQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsT0FBTyxLQUFLO0FBQ2hDLFVBQU0sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ3ZGLFFBQUksR0FBVztBQUNmLFFBQUksTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUFFLFVBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxVQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEsSUFBRyxXQUNqRCxNQUFNLElBQUk7QUFBRSxVQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsVUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLElBQUcsT0FDOUM7QUFBRSxVQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsVUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLElBQUc7QUFDckMsT0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJO0FBQU8sT0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUk7QUFBQSxFQUM3QztBQUNBLE1BQUksYUFBYSxNQUFNLElBQVUsc0JBQWdCLElBQUksQ0FBQyxDQUFDO0FBQ3ZELFNBQU87QUFDVDtBQTRHQSxTQUFTLE9BQU8sTUFBYyxNQUFjLE9BQWUsR0FBVyxLQUFhLElBQUksTUFBTyxRQUFRLE9BQTZCO0FBQ2pJLFFBQU0sT0FBK0IsQ0FBQztBQUN0QyxXQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixVQUFNLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSTtBQUM1QixVQUFNLFFBQVEsSUFBSSxNQUFNLElBQUksSUFBSSxNQUFNLFFBQVE7QUFDOUMsVUFBTSxNQUFNLE9BQU87QUFJbkIsVUFBTSxJQUFJLFFBQVEsSUFBVSx1QkFBaUIsSUFBSSxNQUFNLElBQUksTUFBTSxLQUFLLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBVSxrQkFBWSxHQUFHLEtBQUssQ0FBQztBQUNuSCxNQUFFLFVBQVUsR0FBRyxPQUFPLE1BQU0sR0FBRyxDQUFDO0FBQ2hDLE1BQUUsUUFBUSxLQUFLLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRztBQUNyQyxNQUFFLFFBQVEsQ0FBQztBQUFHLE1BQUUsVUFBVSxHQUFHLEdBQUcsT0FBTyxHQUFHO0FBQzFDLE1BQUUsUUFBUSxDQUFDO0FBQ1gsU0FBSyxLQUFLLENBQUM7QUFBQSxFQUNiO0FBQ0EsU0FBTyxRQUFRLFVBQVUsSUFBSSxHQUFHLEdBQUc7QUFDckM7QUFZQSxTQUFTLEtBQUssS0FBaUIsR0FBc0IsTUFBTSxHQUFHLEtBQW9DO0FBQ2hHLFFBQU0sUUFBZ0MsQ0FBQztBQUN2QyxRQUFNLE1BQU0sQ0FBQyxNQUFlLE9BQU8sTUFBTSxXQUFXLElBQUksRUFBRSxLQUFLLElBQUksR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25GLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxTQUFTLEdBQUcsS0FBSztBQUN2QyxVQUFNLElBQUksSUFBVSxjQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzNELFVBQU0sSUFBSSxJQUFVLGNBQVEsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkUsVUFBTSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztBQUFHLFVBQU0sTUFBTSxFQUFFLE9BQU87QUFDakQsUUFBSSxNQUFNLEtBQU07QUFDaEIsVUFBTSxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7QUFDakMsVUFBTSxJQUFJLElBQVUsdUJBQWlCLElBQUksSUFBSSxPQUFPLEtBQUssTUFBTSxLQUFLLEtBQUssR0FBRyxLQUFLO0FBQ2pGLFVBQU0sSUFBSSxJQUFVLGlCQUFXLEVBQUUsbUJBQW1CLElBQVUsY0FBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDO0FBQzdGLE1BQUUsZ0JBQWdCLENBQUM7QUFDbkIsVUFBTSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLGVBQWUsR0FBRztBQUM3QyxNQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDekIsVUFBTSxLQUFLLENBQUM7QUFBQSxFQUNkO0FBQ0EsUUFBTSxNQUFNLFVBQVUsS0FBSztBQUMzQixTQUFPLFFBQVEsU0FBWSxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBQ25EO0FBVUEsU0FBUyxNQUFNLEtBQWlCLEdBQVcsR0FBVyxPQUFpQixLQUFvQztBQUN6RyxRQUFNLFFBQWdDLENBQUM7QUFDdkMsUUFBTSxJQUFJLElBQVUsY0FBUSxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUN4RCxXQUFTLElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxHQUFHLEtBQUs7QUFDdkMsVUFBTSxJQUFJLElBQVUsY0FBUSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzRCxVQUFNLElBQUksSUFBVSxjQUFRLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZFLFVBQU0sTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7QUFBRyxVQUFNLE1BQU0sSUFBSSxPQUFPO0FBQ3JELFFBQUksTUFBTSxLQUFNO0FBQ2hCLFFBQUksVUFBVTtBQUNkLFVBQU0sTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxlQUFlLEdBQUc7QUFHL0MsUUFBSSxNQUFNLElBQUksTUFBTSxFQUFFLElBQUksQ0FBQztBQUMzQixRQUFJLElBQUksSUFBSSxNQUFNLEVBQUUsZUFBZSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDaEQsUUFBSSxJQUFJLFNBQVMsSUFBSSxNQUFPLE9BQU0sSUFBVSxjQUFRLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLE1BQU0sRUFBRSxlQUFlLElBQUksQ0FBQyxDQUFDO0FBQ2xHLFFBQUksVUFBVTtBQUtkLFVBQU0sT0FBTyxJQUFVLGNBQVEsRUFBRSxhQUFhLEtBQUssR0FBRyxFQUFFLFVBQVU7QUFHbEUsVUFBTSxJQUFJLElBQVUsa0JBQVksR0FBRyxNQUFNLEdBQUcsQ0FBQztBQUM3QyxNQUFFLGFBQWEsSUFBVSxjQUFRLEVBQUUsVUFBVSxNQUFNLEtBQUssR0FBRyxDQUFDO0FBQzVELE1BQUUsVUFBVSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUMvQixVQUFNLEtBQUssQ0FBQztBQUFBLEVBQ2Q7QUFDQSxRQUFNLE1BQU0sVUFBVSxLQUFLO0FBQzNCLFNBQU8sUUFBUSxTQUFZLE1BQU0sUUFBUSxLQUFLLEdBQUc7QUFDbkQ7QUFJQSxTQUFTLEtBQUssR0FBbUM7QUFDL0MsUUFBTSxJQUFJLElBQVUsa0JBQVksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDaEQsTUFBSSxFQUFFLENBQUMsRUFBRyxHQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFBRyxNQUFJLEVBQUUsQ0FBQyxFQUFHLEdBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUFHLE1BQUksRUFBRSxDQUFDLEVBQUcsR0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLElBQUUsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUM1QixTQUFPO0FBQ1Q7QUFVQSxTQUFTLFFBQVEsTUFBOEI7QUFDN0MsU0FBTyxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNwSDtBQU1BLFNBQVMsV0FBVyxNQUFjLE1BQXNGO0FBQ3RILE1BQUksT0FBTyxhQUFhLFlBQWEsUUFBTztBQUM1QyxRQUFNLEtBQUssU0FBUyxjQUFjLFFBQVE7QUFBRyxLQUFHLFFBQVE7QUFBTSxLQUFHLFNBQVM7QUFHMUUsUUFBTSxNQUFNLEdBQUcsV0FBVyxNQUFNLEVBQUUsb0JBQW9CLEtBQUssQ0FBQztBQUFzQyxNQUFJLENBQUMsSUFBSyxRQUFPO0FBQ25ILE9BQUssS0FBSyxJQUFJO0FBQ2QsUUFBTSxNQUFNLElBQVUsb0JBQWMsRUFBRTtBQUN0QyxNQUFJLFFBQVEsSUFBSSxRQUFjO0FBQzlCLE1BQUksYUFBbUI7QUFDdkIsTUFBSSxjQUFjO0FBQ2xCLFNBQU87QUFDVDtBQUlBLFNBQVMsSUFBSSxNQUE0QjtBQUN2QyxNQUFJLElBQUksU0FBUztBQUNqQixTQUFPLE1BQU07QUFBRSxRQUFLLElBQUksVUFBVSxlQUFnQjtBQUFHLFdBQU8sSUFBSTtBQUFBLEVBQVk7QUFDOUU7QUFVQSxTQUFTLFFBQVEsTUFBYyxNQUFnQixNQUFjLFdBQVcsTUFBa0M7QUFDeEcsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNLFFBQVEsQ0FBQyxNQUFnQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFO0FBQ3RJLFFBQUksWUFBWSxNQUFNLElBQUk7QUFBRyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxVQUFNLE9BQU8sSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsS0FBSyxJQUFJLFNBQVM7QUFDakUsU0FBSyxhQUFhLEdBQUcsd0JBQXdCO0FBQzdDLFNBQUssYUFBYSxNQUFNLHdCQUF3QjtBQUNoRCxTQUFLLGFBQWEsR0FBRyxxQkFBcUI7QUFDMUMsUUFBSSxZQUFZO0FBQU0sUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDN0MsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLFdBQVc7QUFDbkUsWUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFDMUIsWUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQ3pCLFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxTQUFHLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHO0FBQUcsU0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQ3RGLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUNyRztBQUVBLGFBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxLQUFLO0FBQzdCLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSTtBQUFHLFlBQU0sSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJO0FBQ2hFLFVBQUksWUFBWSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUFXLFVBQUksU0FBUyxHQUFHLEdBQUcsS0FBSyxHQUFHO0FBQUEsSUFDM0U7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUlBLFNBQVMsU0FBUyxNQUFjLE1BQWdCLE1BQWMsV0FBVyxLQUFrQztBQUN6RyxTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xELFVBQU0sSUFBSSxLQUFLLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFELFVBQU0sT0FBTyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxLQUFLLElBQUksU0FBUztBQUNqRSxTQUFLLGFBQWEsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPO0FBQ3hELFNBQUssYUFBYSxLQUFLLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU87QUFDMUQsU0FBSyxhQUFhLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSztBQUN0RCxRQUFJLFlBQVk7QUFBTSxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM3QyxhQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksV0FBVyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxNQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDckgsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFNBQUcsYUFBYSxHQUFHLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSztBQUM5RyxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDckc7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUlBLFNBQVMsZ0JBQWdCLE1BQWMsT0FBZSxLQUFhLE1BQTBDO0FBQzNHLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUs7QUFDeEQsWUFBTSxJQUFJLEtBQUssTUFBTSxPQUFPLE9BQU8sSUFBSSxPQUFPLEVBQUU7QUFDaEQsVUFBSSxZQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQUssVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUNoRTtBQUNBLFFBQUksMkJBQTJCO0FBQy9CLGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUN4RCxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsWUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQ3pCLFNBQUcsYUFBYSxHQUFHLGtCQUFrQixDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxtQkFBbUI7QUFDbEYsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3ZJO0FBQ0EsUUFBSSwyQkFBMkI7QUFBQSxFQUNqQyxDQUFDO0FBQ0g7QUFJQSxTQUFTLFVBQVUsTUFBYyxRQUFnQixNQUEwQztBQUN6RixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xELFVBQU0sS0FBSyxJQUFJO0FBQ2YsYUFBUyxJQUFJLEdBQUcsSUFBSSxRQUFRLEtBQUs7QUFDL0IsWUFBTSxPQUFPLE9BQU8sSUFBSSxJQUFJO0FBQzVCLFlBQU0sSUFBSSxLQUFLLE1BQU0sTUFBTSxJQUFJO0FBQy9CLFVBQUksWUFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUFLLFVBQUksU0FBUyxHQUFHLElBQUksSUFBSSxHQUFHLEVBQUU7QUFDcEUsVUFBSSxZQUFZO0FBQXVCLFVBQUksU0FBUyxHQUFHLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSyxDQUFDO0FBQ3hGLGVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLGNBQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUk7QUFDMUUsWUFBSSxjQUFjLGlCQUFpQixPQUFPLElBQUksSUFBSSxJQUFJO0FBQUssWUFBSSxZQUFZO0FBQzNFLFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxJQUFJLEdBQUcsQ0FBQztBQUFHLFlBQUksT0FBTyxJQUFJLElBQUksS0FBSyxDQUFDO0FBQUcsWUFBSSxPQUFPLEdBQUcsQ0FBQztBQUFHLFlBQUksT0FBTyxJQUFJLEtBQUssQ0FBQztBQUFHLFlBQUksT0FBTztBQUFBLE1BQzFIO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBSUEsU0FBUyxTQUFTLE1BQWMsT0FBaUIsTUFBYyxVQUFVLElBQWdDO0FBQ3ZHLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsUUFBSSxZQUFZO0FBQVcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbEQsUUFBSSwyQkFBMkI7QUFDL0IsYUFBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEtBQUs7QUFDaEMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3hELFlBQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUN6QixZQUFNLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUM7QUFDOUMsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFNBQUcsYUFBYSxHQUFHLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSztBQUM5RyxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDdkk7QUFDQSxRQUFJLDJCQUEyQjtBQUFBLEVBQ2pDLENBQUM7QUFDSDtBQVdBLFNBQVMsUUFBUSxNQUFjLE1BQWMsR0FBb0M7QUFDL0UsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNQSxPQUFNLENBQUMsTUFBZ0IsR0FBRyxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUcsVUFBTSxPQUFPLEVBQUUsUUFBUSxDQUFDLE1BQU0sTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJO0FBQ25ELFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBRWxELFFBQUksMkJBQTJCO0FBQy9CLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxVQUFVLEtBQUssS0FBSztBQUN6QyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQ3RGLFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksSUFBSSxDQUFDLEtBQUs7QUFDeEYsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3ZJO0FBRUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFdBQVcsSUFBSSxLQUFLO0FBQ3pDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxPQUFPLEtBQUssRUFBRSxhQUFhLENBQUMsTUFBTSxNQUFNLElBQUk7QUFDeEcsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksRUFBRSxDQUFDLFFBQVE7QUFBRyxTQUFHLGFBQWEsS0FBSyxRQUFRQSxLQUFJLEVBQUUsQ0FBQyxPQUFPO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxFQUFFLENBQUMsS0FBSztBQUNsSSxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDcks7QUFFQSxVQUFNLFVBQVUsRUFBRSxXQUFXLEtBQU0sTUFBTSxLQUFLLEVBQUUsVUFBVTtBQUMxRCxVQUFNLGFBQWEsQ0FBQyxHQUFXLEdBQVcsSUFBWSxJQUFZLE1BQWM7QUFDOUUsVUFBSSxZQUFZO0FBQUcsVUFBSSxVQUFVO0FBQUcsVUFBSSxPQUFPLEdBQUcsQ0FBQztBQUFHLFVBQUksT0FBTyxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUcsVUFBSSxPQUFPO0FBQzdGLFVBQUksSUFBSSxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLElBQUksR0FBRyxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUFHLFlBQUksT0FBTztBQUFBLE1BQUc7QUFDbEcsVUFBSSxJQUFJLElBQUksR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxJQUFJLEdBQUcsQ0FBQztBQUFHLFlBQUksT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBRyxZQUFJLE9BQU87QUFBQSxNQUFHO0FBQ3RHLFVBQUksSUFBSSxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUFHLFlBQUksT0FBTztBQUFBLE1BQUc7QUFDbEcsVUFBSSxJQUFJLElBQUksR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxHQUFHLElBQUksQ0FBQztBQUFHLFlBQUksT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBRyxZQUFJLE9BQU87QUFBQSxNQUFHO0FBQUEsSUFDeEc7QUFDQSxRQUFJLFVBQVU7QUFDZCxhQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsS0FBSztBQUNoQyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLElBQUksSUFBSSxPQUFPLE1BQU0sSUFBSSxPQUFPLE1BQU0sSUFBSSxJQUFJO0FBQ3hGLFlBQU0sUUFBUSxJQUFJLElBQUk7QUFDdEIsVUFBSSwyQkFBMkIsUUFBUSxXQUFXO0FBQ2xELFVBQUksY0FBYyxRQUFRLG9CQUFvQixPQUFPLElBQUksSUFBSSxHQUFJLE1BQU0sUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJO0FBQy9HLGlCQUFXLEdBQUcsR0FBRyxLQUFLLElBQUksRUFBRSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUUsSUFBSSxHQUFHLE1BQU0sSUFBSSxJQUFJLEdBQUc7QUFBQSxJQUN4RTtBQUNBLFFBQUksMkJBQTJCO0FBQUEsRUFDakMsQ0FBQztBQUNIO0FBRUEsU0FBUyxTQUFTLEtBQTJCLE9BQXFDO0FBQ2hGLFFBQU0sSUFBSSxJQUFJLGFBQWEsVUFBVSxHQUFHLE1BQU0sSUFBSSxhQUFhLFFBQVE7QUFDdkUsUUFBTSxLQUFLLElBQUksYUFBYSxFQUFFLFFBQVEsQ0FBQztBQUN2QyxXQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsT0FBTyxLQUFLO0FBQ2hDLFVBQU0sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUM7QUFDM0QsVUFBTSxJQUFJLE1BQU0sS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQ3pDLE9BQUcsSUFBSSxDQUFDLElBQUksSUFBSTtBQUFPLE9BQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO0FBQUEsRUFDckQ7QUFDQSxNQUFJLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLENBQUMsQ0FBQztBQUN2RCxTQUFPO0FBQ1Q7QUE0Q0EsU0FBUyxTQUFTLEtBQWlDLEtBQWlDLE9BQU8sR0FBUztBQUNsRyxNQUFJLENBQUMsSUFBSztBQUNWLE1BQUksTUFBTTtBQUNWLE1BQUksT0FBTyxHQUFHO0FBQUUsUUFBSSxVQUFVO0FBQUssUUFBSSxZQUFZO0FBQUEsRUFBTTtBQUN6RCxNQUFJLGNBQWM7QUFDcEI7QUFTQSxTQUFTLE1BQU0sR0FBOEI7QUFDM0MsUUFBTSxLQUFhLEVBQUUsSUFBSSxLQUFhLEVBQUUsSUFBSSxLQUFpQixFQUFFLFNBQVMsSUFBWSxFQUFFLEtBQUs7QUFDM0YsUUFBTSxJQUFJLENBQUMsTUFBYyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxJQUFJO0FBSXBELFFBQU0sS0FBc0IsTUFBTSxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSztBQUN6RCxRQUFNLElBQUksQ0FBQyxNQUFlLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sSUFBSTtBQUNsRSxRQUFNLE9BQU8sQ0FBQyxNQUFjLFNBQWtCO0FBQzVDLFVBQU0sTUFBZ0IsQ0FBQyxHQUFHLEtBQWUsQ0FBQyxHQUFHLE1BQWdCLENBQUM7QUFDOUQsYUFBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUssVUFBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLEtBQUs7QUFBRSxVQUFJLEtBQUssRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFBRyxTQUFHLEtBQUssSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLElBQUc7QUFDOUgsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUssVUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDeEQsWUFBTSxJQUFJLEtBQUssS0FBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUk7QUFDL0QsVUFBSSxLQUFNLEtBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLFVBQVEsS0FBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFDdEU7QUFDQSxVQUFNLElBQUksSUFBVSxxQkFBZTtBQUNuQyxNQUFFLGFBQWEsWUFBWSxJQUFVLDZCQUF1QixLQUFLLENBQUMsQ0FBQztBQUNuRSxNQUFFLGFBQWEsTUFBTSxJQUFVLDZCQUF1QixJQUFJLENBQUMsQ0FBQztBQUM1RCxNQUFFLFNBQVMsR0FBRztBQUFHLE1BQUUscUJBQXFCO0FBQUcsV0FBTztBQUFBLEVBQ3BEO0FBS0EsUUFBTSxRQUFRLENBQUMsR0FBeUIsUUFBZ0I7QUFDdEQsVUFBTSxJQUFJLEVBQUUsYUFBYSxVQUFVLEVBQUUsT0FBTyxJQUFJLElBQVUsWUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLGFBQWEsSUFBSSxDQUFDO0FBQ2xHLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQUUsVUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQUcsVUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFBRyxVQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUFBLElBQUc7QUFDNUYsTUFBRSxhQUFhLFNBQVMsSUFBVSxzQkFBZ0IsS0FBSyxDQUFDLENBQUM7QUFBRyxXQUFPO0FBQUEsRUFDckU7QUFLQSxRQUFNLFlBQVksQ0FBQyxHQUF5QixPQUFtQjtBQUM3RCxVQUFNLElBQUksRUFBRSxhQUFhLFVBQVUsRUFBRSxPQUFPLE1BQU0sSUFBSSxhQUFhLElBQUksQ0FBQyxHQUFHLElBQUksSUFBVSxZQUFNO0FBQy9GLFFBQUksSUFBSTtBQUNSLGFBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFLLFVBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFLO0FBQUUsUUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUFHLFVBQUksR0FBRyxJQUFJLEVBQUU7QUFBRyxVQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUcsVUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLElBQUc7QUFDbEksTUFBRSxhQUFhLFNBQVMsSUFBVSxzQkFBZ0IsS0FBSyxDQUFDLENBQUM7QUFBRyxXQUFPO0FBQUEsRUFDckU7QUFDQSxRQUFNLE9BQU8sS0FBSyxHQUFHLEtBQUssR0FBRyxPQUFPLEtBQUssQ0FBQyxHQUFHLElBQUk7QUFDakQsUUFBTSxRQUFRLEVBQUUsWUFBWSxTQUN4QixDQUFDLFVBQVUsTUFBTSxFQUFFLE9BQU8sR0FBRyxNQUFNLE1BQU0sRUFBRSxZQUFZLFFBQVEsQ0FBQyxJQUNoRSxFQUFFLGFBQWEsU0FDYixDQUFDLE1BQU0sTUFBTSxFQUFFLFVBQVUsUUFBUSxHQUFHLE1BQU0sTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUMzRCxDQUFDLE1BQU0sSUFBSTtBQUVqQixRQUFNLFFBQVEsQ0FBQyxLQUFtQixRQUFrQjtBQUNsRCxVQUFNLE1BQWdCLENBQUMsR0FBRyxLQUFlLENBQUM7QUFDMUMsZUFBVyxDQUFDLElBQUksRUFBRSxLQUFLLEtBQUs7QUFDMUIsWUFBTSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDckYsWUFBTUMsTUFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUdDLE1BQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUMzRyxZQUFNLElBQUksQ0FBQ0QsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxJQUFJRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLEdBQUdELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsSUFBSUQsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxHQUFHRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLElBQUlELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsQ0FBQztBQUN0RyxZQUFNLE1BQU0sRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUNuSCxpQkFBVyxLQUFLLEtBQUs7QUFBRSxZQUFJLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFBRyxXQUFHLEtBQUssR0FBRyxDQUFDO0FBQUEsTUFBRztBQUFBLElBQ3BFO0FBQ0EsVUFBTSxJQUFJLElBQVUscUJBQWU7QUFDbkMsTUFBRSxhQUFhLFlBQVksSUFBVSw2QkFBdUIsS0FBSyxDQUFDLENBQUM7QUFDbkUsTUFBRSxhQUFhLE1BQU0sSUFBVSw2QkFBdUIsSUFBSSxDQUFDLENBQUM7QUFDNUQsTUFBRSxxQkFBcUI7QUFBRyxXQUFPO0FBQUEsRUFDbkM7QUFDQSxRQUFNLE1BQU0sQ0FBQyxHQUFXLE1BQWMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDM0QsUUFBTSxLQUFtQixDQUFDLEdBQUcsS0FBbUIsQ0FBQyxHQUFHLEtBQW1CLENBQUMsR0FBRyxLQUFtQixDQUFDO0FBQy9GLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQUUsT0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUFHLE9BQUcsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFBQSxFQUFHO0FBQzNHLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQUUsT0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUFHLE9BQUcsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUFHO0FBQzNHLFFBQU0sUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUl2RyxRQUFNLFNBQVMsRUFBRSxVQUFVLEVBQUU7QUFDN0IsUUFBTSxLQUFLLEdBQUksV0FBVyxTQUFZLE1BQU0sSUFBSSxDQUFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQU07QUFDakYsU0FBTyxVQUFVLEtBQUs7QUFDeEI7QUFpQkEsU0FBUyxVQUFVLE1BQWMsTUFBYyxHQUFvQztBQUNqRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU1DLE9BQU0sQ0FBQyxNQUFnQixHQUFHLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRyxVQUFNLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFPLEVBQUUsUUFBUSxNQUFNLFFBQVEsRUFBRSxTQUFTO0FBQzVFLFVBQU0sTUFBTSxFQUFFLE9BQU87QUFFckIsVUFBTSxPQUFPLENBQUMsU0FBMkM7QUFDdkQsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsTUFBSyxJQUFJLEVBQUU7QUFBQSxJQUN2RTtBQUNBLFVBQU0sT0FBTyxDQUFDLEdBQWEsR0FBVyxHQUFXLEdBQVcsR0FBVyxLQUFLLE1BQU07QUFDaEYsWUFBTSxJQUFJLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ25ELFFBQUUsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsUUFBRSxhQUFhLE1BQU0sUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRztBQUM3RixRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxLQUFLO0FBQ3JDLFVBQUksWUFBWTtBQUNoQixXQUFLLENBQUMsSUFBSSxPQUFPO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRyxDQUFDO0FBQUEsSUFDOUc7QUFFQSxRQUFJLFlBQVksT0FBT0EsS0FBSSxJQUFJLENBQUM7QUFBSyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUc1RCxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsU0FBUyxLQUFLLEtBQUs7QUFDeEMsWUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLE9BQU87QUFDL0IsV0FBSyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEtBQUssT0FBTyxJQUFJLElBQUksUUFBUyxFQUFFLGNBQWMsSUFBSSxPQUFPLElBQUksSUFBSSxNQUFNLE1BQU0sSUFBSSxJQUFJLEdBQUc7QUFBQSxJQUN2SDtBQUlBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxnQkFBZ0IsS0FBSyxLQUFLO0FBQy9DLFlBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSSxTQUFTLEVBQUUsZ0JBQWdCO0FBTTFGLFdBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLGFBQWEsT0FBUSxJQUFJLEtBQUssRUFBRSxnQkFBZ0IsT0FBTyxNQUFNLElBQUksSUFBSSxHQUFHO0FBQ2xHLGVBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxvQkFBb0IsS0FBSyxLQUFLO0FBQ25ELGNBQU0sSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUk7QUFDdEQsY0FBTSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLElBQUksSUFBSTtBQUM1RSxZQUFJLFlBQVksUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxHQUFHO0FBQ3ZELGFBQUssQ0FBQyxJQUFJLE9BQU87QUFBRSxjQUFJLFVBQVU7QUFBRyxjQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFBQSxRQUFHLENBQUM7QUFBQSxNQUMvRjtBQUVBLFVBQUksSUFBSSxLQUFLLEVBQUUsYUFBYSxPQUFPO0FBQ2pDLGNBQU0sSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU8sTUFBTSxLQUFLLE1BQU8sSUFBSSxJQUFJO0FBQzNELGNBQU0sSUFBSSxJQUFJLHFCQUFxQixHQUFHLElBQUksR0FBRyxLQUFLLEdBQUc7QUFDckQsVUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxHQUFHLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLEdBQUc7QUFBRyxVQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxLQUFLO0FBQ3RHLFlBQUksWUFBWTtBQUNoQixhQUFLLENBQUMsT0FBTyxJQUFJLFNBQVMsS0FBSyxNQUFNLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUFBLE1BQ3JFO0FBQUEsSUFDRjtBQUdBLFVBQU0sU0FBUyxFQUFFLGNBQWMsR0FBRyxTQUFTLEVBQUUsY0FBYztBQUMzRCxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsZ0JBQWdCLElBQUksS0FBSztBQUM5QyxZQUFNLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLEtBQUssT0FBTyxJQUFJLElBQUksT0FBUTtBQUN2RSxXQUFLLE9BQU8sSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksS0FBTSxNQUFNLElBQUksSUFBSSxHQUFHO0FBQ2hFLGVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLGNBQU0sSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSztBQUMzRCxjQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLElBQUk7QUFDaEYsWUFBSSxZQUFZLFFBQVFBLEtBQUksS0FBSyxDQUFDLElBQUksTUFBTSxJQUFJLElBQUksR0FBRztBQUN2RCxhQUFLLENBQUMsSUFBSSxPQUFPO0FBQUUsY0FBSSxVQUFVO0FBQUcsY0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRyxDQUFDO0FBQUEsTUFDL0Y7QUFBQSxJQUNGO0FBS0EsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLGNBQWMsSUFBSSxLQUFLO0FBQzVDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksT0FBTyxNQUFNLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDMUUsWUFBTSxJQUFJLE1BQU8sSUFBSSxJQUFJO0FBQ3pCLFlBQU0sSUFBSSxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQy9DLFFBQUUsYUFBYSxHQUFHLFFBQVFBLEtBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsUUFBRSxhQUFhLE1BQU0sUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRztBQUNqRyxRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxLQUFLO0FBQ3hDLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUc7QUFBQSxJQUM3RDtBQUNBLFFBQUksRUFBRSxZQUFZO0FBQ2hCLFlBQU0sSUFBSSxFQUFFLFlBQVksSUFBSSxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssRUFBRSxnQkFBZ0IsTUFBTTtBQUNoRyxRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFFBQUUsYUFBYSxNQUFNLFFBQVFBLEtBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUc7QUFDaEcsUUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxHQUFHLENBQUMsS0FBSztBQUN2QyxVQUFJLFlBQVk7QUFBRyxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQzVDO0FBR0EsUUFBSSwyQkFBMkI7QUFDL0IsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsT0FBTyxLQUFLO0FBQzFDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQzlFLFVBQUksWUFBWSxvQkFBb0IsQ0FBQztBQUNyQyxVQUFJLFVBQVU7QUFBRyxVQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFVBQUksS0FBSztBQUFBLElBQzlEO0FBQ0EsUUFBSSwyQkFBMkI7QUFBQSxFQUNqQyxDQUFDO0FBQ0g7QUFnQkEsU0FBUyxVQUFVLEtBQWlCLEdBQVcsTUFBTSxJQUFJLEtBQWMsTUFBTSxNQUE0QjtBQUN2RyxRQUFNLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFVLGNBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUc1RCxXQUFTLElBQUksRUFBRSxTQUFTLEdBQUcsSUFBSSxHQUFHLElBQUssS0FBSSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFNLEdBQUUsT0FBTyxHQUFHLENBQUM7QUFDMUYsTUFBSSxFQUFFLFNBQVMsRUFBRyxRQUFPLElBQVUscUJBQWU7QUFDbEQsUUFBTSxJQUFJLEVBQUU7QUFDWixRQUFNLFNBQTBCLENBQUM7QUFDakMsV0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSyxRQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztBQUVsRixRQUFNLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxNQUFNLE1BQU0sSUFBSSxPQUFPLENBQUMsRUFBRSxNQUFNLElBQ2hELE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUNsQyxPQUFPLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDO0FBRXBELE1BQUksSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sSUFBVSxjQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBVSxjQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ3ZGLElBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVTtBQUMxRCxRQUFNLE1BQWdCLENBQUMsR0FBRyxNQUFnQixDQUFDO0FBQzNDLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFFBQUksSUFBSSxHQUFHO0FBRVQsWUFBTSxJQUFJLElBQVUsaUJBQVcsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNsRSxRQUFFLGdCQUFnQixDQUFDO0FBQ25CLFFBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVTtBQUFBLElBQzVEO0FBQ0EsVUFBTSxJQUFJLElBQVUsY0FBUSxFQUFFLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVU7QUFHOUQsVUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7QUFDNUUsYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBTSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUk7QUFDN0IsWUFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxLQUFLLElBQUksRUFBRTtBQUN2QyxVQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLENBQUM7QUFBQSxJQUMzSDtBQUFBLEVBQ0Y7QUFDQSxXQUFTLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxJQUFLLFVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLO0FBTzVELFVBQU0sSUFBSSxJQUFJLE1BQU0sR0FBRyxLQUFLLElBQUksS0FBSyxNQUFNLEdBQUcsTUFBTSxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUs7QUFDMUcsUUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDN0I7QUFDQSxNQUFJLEtBQUs7QUFPUCxlQUFXLENBQUMsTUFBTSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBeUM7QUFDaEgsWUFBTSxPQUFPLElBQUksU0FBUztBQUMxQixlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUFFLGNBQU0sS0FBSyxPQUFPLE1BQU0sS0FBSztBQUFHLFlBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7QUFBQSxNQUFHO0FBQzFHLFlBQU0sS0FBSyxJQUFJLFNBQVM7QUFBRyxVQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsY0FBTSxJQUFJLE9BQU8sR0FBRyxJQUFJLFFBQVEsSUFBSSxLQUFLO0FBQ3pDLFlBQUksS0FBTSxLQUFJLEtBQUssSUFBSSxHQUFHLENBQUM7QUFBQSxZQUFRLEtBQUksS0FBSyxJQUFJLEdBQUcsQ0FBQztBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLElBQUksSUFBVSxxQkFBZTtBQUNuQyxJQUFFLGFBQWEsWUFBWSxJQUFVLHNCQUFnQixJQUFJLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5RSxJQUFFLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLGFBQWMsSUFBSSxTQUFTLElBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6RixJQUFFLFNBQVMsR0FBRztBQUNkLElBQUUscUJBQXFCO0FBQ3ZCLFNBQU8sUUFBUSxTQUFZLElBQUksUUFBUSxHQUFHLEdBQUc7QUFDL0M7QUFXQSxTQUFTLGFBQWEsS0FBMkIsR0FBOEI7QUFDN0UsUUFBTSxJQUFJLElBQUksYUFBYSxVQUFVLEdBQUcsTUFBTSxJQUFJLGFBQWEsUUFBUTtBQUN2RSxRQUFNLEtBQUssSUFBSSxhQUFhLEVBQUUsUUFBUSxDQUFDO0FBQ3ZDLFFBQU0sTUFBTSxJQUFJLGFBQWEsT0FBTztBQUNwQyxRQUFNLE9BQU8sRUFBRSxTQUFTLFNBQVksSUFBVSxZQUFNLEVBQUUsSUFBSSxJQUFJO0FBQzlELFFBQU0sUUFBUSxFQUFFLFNBQVM7QUFDekIsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxVQUFNLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQ2pDLFVBQU0sUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLFNBQVMsS0FBSyxFQUFFLE1BQU0sS0FBSyxFQUFFLE1BQU0sTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEtBQUssRUFBRTtBQUMvRixRQUFJLE9BQU87QUFDVCxTQUFHLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ25DLFNBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN2QyxVQUFJLFFBQVEsSUFBSyxLQUFJLE9BQU8sR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUFBLElBQ3ZELE9BQU87QUFBRSxTQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBQUcsU0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBQUEsSUFBRztBQUFBLEVBQzNEO0FBQ0EsTUFBSSxhQUFhLE1BQU0sSUFBVSxzQkFBZ0IsSUFBSSxDQUFDLENBQUM7QUFDdkQsTUFBSSxJQUFLLEtBQUksY0FBYztBQUMzQixTQUFPO0FBQ1Q7QUFRQSxTQUFTLFFBQVEsS0FBMkIsT0FBZSxNQUFNLE9BQTZCO0FBQzVGLFFBQU0sSUFBSSxJQUFJLGFBQWEsVUFBVTtBQUNyQyxRQUFNLEtBQUssSUFBSSxhQUFhLEVBQUUsUUFBUSxDQUFDO0FBR3ZDLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLEtBQUs7QUFDaEMsVUFBTSxJQUFJLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQ3JFLE9BQUcsSUFBSSxDQUFDLElBQUksSUFBSTtBQUFPLE9BQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJO0FBQUEsRUFDN0M7QUFDQSxNQUFJLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLENBQUMsQ0FBQztBQUN2RCxTQUFPO0FBQ1Q7QUFHQSxTQUFTLE1BQU0sSUFBYyxHQUFXLEdBQWlDO0FBQ3ZFLFFBQU0sSUFBSSxJQUFVLG1CQUFhLElBQUksS0FBSyxPQUFPLEdBQUcsR0FBRyxHQUFHLEtBQUs7QUFDL0QsSUFBRSxRQUFRLEtBQUssS0FBSyxDQUFDO0FBQ3JCLElBQUUsVUFBVSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdkMsSUFBRSxxQkFBcUI7QUFDdkIsU0FBTztBQUNUO0FBWUEsU0FBUyxVQUFVLE1BQWMsTUFBYyxHQUFvQztBQUNqRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU1BLE9BQU0sQ0FBQyxNQUFnQixHQUFHLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRyxVQUFNLE9BQU8sRUFBRSxRQUFRLENBQUMsTUFBTSxNQUFNLElBQUksR0FBRyxRQUFRLEVBQUUsYUFBYSxLQUFLLE1BQU0sRUFBRSxZQUFZO0FBTzNGLFVBQU0sT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMvQixRQUFJLFlBQVksT0FBT0EsS0FBSSxJQUFJLENBQUM7QUFBSyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM1RCxRQUFJLDJCQUEyQjtBQUUvQixhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsV0FBVyxLQUFLLEtBQUs7QUFDMUMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sS0FBSyxPQUFPLElBQUksSUFBSSxNQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDbkcsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDaEQsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxLQUFLO0FBQ3hGLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQUcsVUFBSSxTQUFTLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRztBQUFBLElBQy9FO0FBS0EsUUFBSSxFQUFFLFVBQVU7QUFDZCxVQUFJLFlBQVksUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxLQUFLO0FBQUssVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUN4RSxPQUFPO0FBQ0wsWUFBTSxPQUFPLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEtBQUssSUFBSSxJQUFJO0FBQzVELFdBQUssYUFBYSxHQUFHLFFBQVFBLEtBQUksSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHO0FBQUcsV0FBSyxhQUFhLEtBQUssUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxRQUFRLElBQUksR0FBRztBQUFHLFdBQUssYUFBYSxHQUFHLFFBQVFBLEtBQUksSUFBSSxDQUFDLEtBQUs7QUFDOUosVUFBSSxZQUFZO0FBQU0sVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUMvQztBQUVBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxZQUFZLEtBQUssS0FBSztBQUMzQyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUNwRyxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxLQUFLO0FBQ3hGLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUNyRztBQUlBLFFBQUksRUFBRSxNQUFNO0FBQ1YsWUFBTSxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQU0sTUFBTSxHQUFJO0FBQ3RDLGVBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxNQUFNLEtBQUs7QUFDL0IsY0FBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxNQUFPLElBQUksSUFBSTtBQUM3QyxjQUFNLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxPQUFRLElBQUksSUFBSSxPQUFRLElBQUksTUFBTyxJQUFJLElBQUk7QUFDekYsY0FBTSxLQUFLLElBQUkscUJBQXFCLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUM5RCxXQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxLQUFLO0FBQ3hDLFdBQUcsYUFBYSxLQUFLLFFBQVFBLEtBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQzdDLFdBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksR0FBRyxDQUFDLEtBQUs7QUFDeEMsWUFBSSxZQUFZO0FBQ2hCLG1CQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFDM0U7QUFBQSxJQUNGO0FBS0EsUUFBSSxFQUFFLFFBQVE7QUFDWixVQUFJLDJCQUEyQjtBQUMvQixlQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxLQUFLO0FBQ2pDLGNBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxFQUFFLGNBQWM7QUFDN0UsY0FBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFdBQUcsYUFBYSxHQUFHLG9CQUFvQixFQUFFLGNBQWMsSUFBSSxHQUFHO0FBQUcsV0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQ3pHLFlBQUksWUFBWTtBQUNoQixtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGNBQUksS0FBSztBQUFBLFFBQUc7QUFBQSxNQUN2STtBQUNBLFVBQUksMkJBQTJCO0FBQUEsSUFDakM7QUFTQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsVUFBVSxJQUFJLEtBQUs7QUFDeEMsWUFBTSxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sTUFBTSxJQUFJO0FBQ3RDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFLFVBQVUsU0FBUyxNQUFNLElBQUksSUFBSSxNQUFNLEtBQUssRUFBRSxjQUFjLFNBQVMsTUFBTSxJQUFJO0FBQzlILFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLEtBQUs7QUFDbEYsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3ZJO0FBS0EsUUFBSSxFQUFFLFFBQVE7QUFDWixZQUFNLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxNQUFNLElBQUksR0FBRyxPQUFPLEVBQUUsYUFBYSxDQUFDLEtBQU0sR0FBSTtBQUMxRSxlQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxLQUFLO0FBQ2pDLGNBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLEtBQUssS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDO0FBQ3hFLGNBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzdELGNBQU0sS0FBSyxFQUFFLGNBQWMsU0FBUyxNQUFNLElBQUk7QUFDOUMsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUMzQixjQUFJLEtBQUs7QUFBRyxjQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7QUFBRyxjQUFJLFFBQVEsSUFBSSxJQUFJLE9BQU8sSUFBSTtBQUFHLGNBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUM1RixnQkFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELGFBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsYUFBRyxhQUFhLE1BQU0sUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRztBQUFHLGFBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLEtBQUs7QUFDeEksY0FBSSxZQUFZO0FBQUksY0FBSSxVQUFVO0FBQUcsY0FBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFDaEYsY0FBSSxRQUFRO0FBQUEsUUFDZDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBSUEsUUFBSSxFQUFFLE9BQU87QUFDWCxZQUFNLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxNQUFNLElBQUk7QUFDckMsZUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxjQUFNLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxVQUFVLFFBQVEsSUFBSSxFQUFFLE1BQU0sSUFBSTtBQUMvRCxjQUFNLE1BQU0sS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLElBQUksSUFBSyxDQUFDO0FBQzdDLFlBQUksWUFBWSxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxHQUFHO0FBQUssWUFBSSxTQUFTLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDbEYsWUFBSSxZQUFZLFFBQVFBLEtBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxhQUFhLE9BQU8sR0FBRztBQUFLLFlBQUksU0FBUyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7QUFBQSxNQUNsRztBQUFBLElBQ0Y7QUFJQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsUUFBUSxJQUFJLEtBQUs7QUFDdEMsWUFBTSxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sS0FBTSxJQUFJO0FBQ3BDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssRUFBRSxRQUFRLFFBQVEsTUFBTSxJQUFJLElBQUk7QUFDekUsWUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQ3pCLFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ3hELFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsU0FBRyxhQUFhLEtBQUssUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLEtBQUs7QUFDdkksVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDekc7QUFFQSxRQUFJLEVBQUUsTUFBTTtBQUNWLFlBQU0sSUFBSSxFQUFFLE1BQU0sT0FBTyxFQUFFLFlBQVk7QUFHdkMsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEtBQUssSUFBSSxPQUFPLElBQUk7QUFDakUsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLFlBQVksSUFBSSxHQUFHO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSztBQUNuRyxVQUFJLFlBQVk7QUFBSSxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUMzQyxlQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsZ0JBQWdCLEtBQUssS0FBSztBQUMvQyxjQUFNLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksTUFBTSxLQUFLLEtBQUssUUFBUSxJQUFJLElBQUk7QUFFMUYsY0FBTSxLQUFLLElBQUkscUJBQXFCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO0FBQ3pELFdBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLE9BQU87QUFBRyxXQUFHLGFBQWEsS0FBSyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxRQUFRO0FBQUcsV0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSztBQUMvSCxZQUFJLFlBQVk7QUFDaEIsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksUUFBUSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFBQSxRQUFHO0FBQ3ZILGlCQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixnQkFBTSxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSTtBQUN0RCxnQkFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ2hGLGNBQUksWUFBWSxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLEdBQUc7QUFDcEQscUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGdCQUFJLFVBQVU7QUFBRyxnQkFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGdCQUFJLEtBQUs7QUFBQSxVQUFHO0FBQUEsUUFDckc7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUlBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxTQUFTLE9BQU8sS0FBSztBQUMxQyxZQUFNLEtBQUssRUFBRSxXQUFXO0FBQUssWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssTUFBTSxJQUFJLEtBQUssTUFBTSxHQUFHO0FBQ3ZHLFVBQUksWUFBWSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsY0FBYyxJQUFJO0FBQUssVUFBSSxTQUFTLEdBQUcsR0FBRyxLQUFLLEdBQUc7QUFBQSxJQUM3RjtBQUNBLFFBQUksMkJBQTJCO0FBQUEsRUFDakMsQ0FBQztBQUNIO0FBS0EsU0FBUyxjQUFjLE1BQWMsTUFBYyxNQUEwQztBQUMzRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFFBQUksVUFBVSxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3hCLFFBQUksWUFBWSxLQUFLLElBQUksS0FBSyxPQUFPLENBQUM7QUFDdEMsUUFBSSxVQUFVO0FBQ2QsVUFBTSxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3JDLFFBQUksY0FBYyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7QUFFNUMsUUFBSSxVQUFVO0FBQ2QsUUFBSSxPQUFPLEdBQUcsQ0FBQztBQUFHLFFBQUksT0FBTyxHQUFHLENBQUM7QUFDakMsUUFBSSxPQUFPLEdBQUcsQ0FBQztBQUFHLFFBQUksT0FBTyxHQUFHLENBQUM7QUFDakMsUUFBSSxPQUFPO0FBRVgsUUFBSSxZQUFZLE9BQU8sSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO0FBQ2pELGVBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRztBQUNyRSxVQUFJLFVBQVU7QUFBRyxVQUFJLElBQUksR0FBRyxHQUFHLElBQUksWUFBWSxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxVQUFJLEtBQUs7QUFBQSxJQUNoRjtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBSUEsU0FBUyxXQUFXLE1BQWMsUUFBZ0IsTUFBMEM7QUFDMUYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsRCxVQUFNLEtBQUssSUFBSTtBQUNmLGFBQVMsSUFBSSxHQUFHLElBQUksUUFBUSxLQUFLO0FBQy9CLFlBQU0sT0FBTyxNQUFPLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxNQUFNLE1BQU0sSUFBSTtBQUMxRCxVQUFJLFlBQVksT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO0FBQUssVUFBSSxTQUFTLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUM1RSxVQUFJLFlBQVk7QUFBc0IsVUFBSSxTQUFTLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSyxHQUFHLENBQUM7QUFFdkYsVUFBSSxZQUFZO0FBQTBCLFVBQUksU0FBUyxJQUFJLEtBQUssS0FBSyxNQUFNLEdBQUcsS0FBSyxNQUFNLENBQUM7QUFFMUYsWUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDO0FBQ2xDLGVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQUUsY0FBTSxJQUFJLElBQUksSUFBSTtBQUFHLFlBQUksWUFBWTtBQUF1QixZQUFJLFNBQVMsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUssQ0FBQztBQUFBLE1BQUc7QUFFL0ksZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFBRSxjQUFNLElBQUksSUFBSSxLQUFLLElBQUksSUFBSTtBQUFJLFlBQUksWUFBWSxpQkFBaUIsT0FBTyxJQUFJLElBQUksR0FBRztBQUFLLFlBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFBRztBQUFBLElBQ2pKO0FBRUEsYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFBRSxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUk7QUFBRyxVQUFJLFlBQVk7QUFBdUIsVUFBSSxTQUFTLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUM7QUFBQSxJQUFHO0FBQUEsRUFDL0osQ0FBQztBQUNIO0FBS0EsU0FBUyxXQUFXLE1BQWMsTUFBYyxPQUE2QztBQUMzRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFFBQUksVUFBVSxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBRXhCLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFlBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE1BQU8sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzNILFVBQUksWUFBWSxRQUFRLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNwSCxVQUFJLFVBQVU7QUFBRyxVQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2hDLFlBQU0sSUFBSTtBQUNWLGVBQVMsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFLLEtBQUksT0FBTyxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQ25GLGVBQVMsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFLLEtBQUksT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdkYsZUFBUyxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSyxLQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQzNGLGVBQVMsSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUssS0FBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdkYsVUFBSSxVQUFVO0FBQUcsVUFBSSxLQUFLO0FBQzFCLFVBQUksWUFBWTtBQUNoQixlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSyxLQUFJLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLE1BQU0sSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUssQ0FBQztBQUFBLElBQ2hJO0FBRUEsUUFBSSxZQUFZO0FBQ2hCLFFBQUksT0FBTyxRQUFRLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQztBQUN2QyxRQUFJLGVBQWU7QUFDbkIsYUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxZQUFNLElBQUksSUFBSSxLQUFNLElBQUksS0FBSyxPQUFPLElBQUk7QUFDeEMsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFBRSxZQUFJLGNBQWM7QUFBSyxZQUFJLFNBQVMsTUFBTSxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxHQUFHLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQztBQUFBLE1BQUc7QUFDM0gsVUFBSSxjQUFjO0FBQUEsSUFDcEI7QUFBQSxFQUNGLENBQUM7QUFDSDtBQVNBLFNBQVMsV0FBVyxNQUFjLE9BQWUsR0FBYSxHQUFhLE1BQWMsSUFBUyxDQUFDLEdBQStCO0FBQ2hJLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTUEsT0FBTSxDQUFDLE1BQWdCLE9BQU8sS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlHLFVBQU0sSUFBSSxJQUFJO0FBQ2QsYUFBUyxJQUFJLEdBQUcsSUFBSSxPQUFPLEtBQUs7QUFBRSxVQUFJLFlBQVlBLEtBQUksSUFBSSxJQUFJLElBQUksQ0FBQztBQUFHLFVBQUksU0FBUyxLQUFLLE1BQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQUc7QUFDL0gsUUFBSSwyQkFBMkI7QUFDL0IsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFdBQVcsS0FBSyxLQUFLO0FBQzFDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxNQUFNLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDbEYsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFNBQUcsYUFBYSxHQUFHLG9CQUFvQixFQUFFLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFDdkYsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3JHO0FBQ0EsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFVBQVUsT0FBTyxLQUFLO0FBQUUsWUFBTSxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFO0FBQUcsVUFBSSxZQUFZLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQVUsVUFBSSxTQUFTLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEtBQUssR0FBRztBQUFBLElBQUc7QUFPbEwsUUFBSSxFQUFFLE9BQU87QUFDWCxZQUFNLEtBQUssRUFBRSxXQUFXLEtBQU0sS0FBSyxFQUFFLFdBQVc7QUFDaEQsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDOUMsZUFBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLEtBQUs7QUFDNUIsY0FBTSxJQUFJLElBQUk7QUFDZCxjQUFNLElBQUksTUFBTSxLQUFLLE9BQU8sTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLFFBQVEsQ0FBQztBQUMxRSxjQUFNLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQztBQUM1QixXQUFHLGFBQWEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUEsTUFDMUM7QUFDQSxVQUFJLFlBQVk7QUFBSSxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQzdDO0FBQ0EsUUFBSSwyQkFBMkI7QUFBQSxFQUNqQyxDQUFDO0FBQ0g7QUFNQSxTQUFTLFFBQVEsR0FBeUIsWUFBb0IsS0FBYSxPQUFlLFNBQVMsT0FBTyxLQUFLLEdBQVM7QUFDdEgsUUFBTSxJQUFJLEVBQUUsYUFBYSxVQUFVO0FBQ25DLE1BQUksT0FBTztBQUNYLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLElBQUssUUFBTyxLQUFLLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDeEYsUUFBTSxNQUFNLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxPQUFPLEtBQUssQ0FBQztBQUM5RCxRQUFNLEtBQUssSUFBSSxhQUFhLEVBQUUsUUFBUSxDQUFDO0FBQ3ZDLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLEtBQUs7QUFDaEMsVUFBTSxJQUFJLEtBQUssTUFBTSxJQUFJLFVBQVU7QUFDbkMsT0FBRyxJQUFJLENBQUMsSUFBSyxJQUFJLE1BQU87QUFBSyxPQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNO0FBQUEsRUFDbEU7QUFDQSxJQUFFLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLENBQUMsQ0FBQztBQUN2RDtBQUtBLFNBQVMsV0FBVyxNQUFjLE1BQWMsR0FBb0M7QUFDbEYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNQSxPQUFNLENBQUMsTUFBZ0IsT0FBTyxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUcsUUFBSSxZQUFZQSxLQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sTUFBTSxJQUFJLENBQUM7QUFBRyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM1RSxVQUFNLE1BQWtCLEVBQUUsV0FBVyxDQUFDLENBQUMsTUFBTSxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sTUFBTSxHQUFJLEdBQUcsQ0FBQyxLQUFNLE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBTSxNQUFNLEdBQUksQ0FBQztBQUNwSCxVQUFNLElBQUksRUFBRSxTQUFTLEtBQUssT0FBTyxLQUFLLEVBQUUsUUFBUSxRQUFRLE9BQU8sS0FBSyxFQUFFLFFBQVE7QUFDOUUsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxPQUFPLElBQUksS0FBSyxPQUFPLE9BQU8sS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksS0FBSztBQUN2SCxZQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxPQUFPLElBQUksSUFBSTtBQUtsRSxVQUFJLEVBQUUsT0FBTztBQUNYLFlBQUksWUFBWUEsTUFBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxLQUFLLENBQUM7QUFDNUUsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxjQUFJLFVBQVU7QUFBRyxjQUFJLFFBQVEsSUFBSSxLQUFLLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRztBQUFBLE1BQ3ZMO0FBQ0EsVUFBSSxZQUFZQSxLQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNwRCxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBRWpKLFVBQUksWUFBWSxvQkFBb0IsRUFBRSxTQUFTLElBQUk7QUFDbkQsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLFFBQVEsSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3RMO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFNQSxTQUFTLFVBQVUsTUFBYyxNQUFjLEdBQW9DO0FBQ2pGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTSxTQUFTLEVBQUUsVUFBVSxLQUFNLFFBQVEsRUFBRSxTQUFTLEdBQUcsUUFBUSxFQUFFLFNBQVM7QUFPMUUsVUFBTSxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQy9CLFFBQUksWUFBWSxPQUFPLElBQUksSUFBSSxDQUFDO0FBQUssUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDNUQsUUFBSSwyQkFBMkI7QUFDL0IsVUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLE1BQU07QUFDbEMsUUFBSSxZQUFZLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3JDLFVBQU0sUUFBUSxJQUFJLE9BQU8sSUFBSSxTQUFTLEVBQUUsYUFBYTtBQUVyRCxhQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sS0FBSztBQUFFLFlBQU0sSUFBSSxJQUFJLFFBQVEsUUFBUSxPQUFPLElBQUksSUFBSSxPQUFPLFFBQVE7QUFBSyxVQUFJLFNBQVMsR0FBRyxJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUk7QUFBRyxVQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxHQUFHLElBQUksSUFBSTtBQUFBLElBQUc7QUFDdkwsYUFBUyxJQUFJLEdBQUcsSUFBSSxPQUFPLEtBQUs7QUFBRSxZQUFNLElBQUksS0FBSyxNQUFNLE9BQU8sSUFBSSxPQUFPO0FBQVEsVUFBSSxTQUFTLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQztBQUFBLElBQUc7QUFFakgsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFBRSxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFO0FBQy9ILFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO0FBQ2xKLFVBQUksWUFBWTtBQUFJLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQUU7QUFDN0osUUFBSSwyQkFBMkI7QUFBQSxFQUNqQyxDQUFDO0FBQ0g7QUFVQSxTQUFTLFNBQVMsTUFBYyxNQUFjLEdBQW9DO0FBQ2hGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTSxPQUFPLEVBQUUsUUFBUSxLQUFLLE9BQU8sRUFBRSxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsU0FBUyxFQUFFLFVBQVU7QUFDaEYsVUFBTSxLQUFLLEtBQUssTUFBTSxPQUFPLE1BQU0sR0FBRyxLQUFLLEtBQUssTUFBTSxPQUFPLEdBQUcsR0FBRyxLQUFLLEtBQUssTUFBTSxPQUFPLEdBQUc7QUFDN0YsVUFBTSxPQUFPLEVBQUUsUUFBUSxDQUFDLEtBQUssS0FBSyxHQUFHO0FBQ3JDLFFBQUksWUFBWSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUFLLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3ZFLGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSztBQUFFLFlBQU0sSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxFQUFFO0FBQUcsVUFBSSxZQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQUssVUFBSSxTQUFTLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQUc7QUFFeEssVUFBTSxRQUFRLENBQUMsSUFBWSxJQUFZLFlBQXFCO0FBQzFELFlBQU0sSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQztBQUN6RSxZQUFNLEtBQUssRUFBRSxXQUFXLEdBQUcsS0FBSyxJQUFJO0FBQ3BDLFVBQUksWUFBWSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNyQyxlQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUFFLGNBQU0sSUFBSSxNQUFNLEtBQUssT0FBTyxJQUFJLE1BQU0sS0FBSztBQUFJLFlBQUksU0FBUyxHQUFHLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtBQUFBLE1BQUc7QUFDbEgsWUFBTSxLQUFLLEVBQUUsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLGFBQWE7QUFDakQsZUFBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLEtBQUs7QUFDNUIsY0FBTSxLQUFLLE1BQU0sSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLLEtBQUssS0FBSztBQUVsSSxjQUFNLFFBQVEsTUFBTSxLQUFLLE1BQU07QUFDL0IsWUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFPO0FBQ3hCLGNBQU0sTUFBTSxVQUFVLEtBQU0sTUFBTSxJQUFJLEtBQUssTUFBTSxLQUFLLE1BQU0sTUFBTyxNQUFNLFVBQVUsS0FBTSxNQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sT0FBTztBQUMzSCxpQkFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsZ0JBQU0sTUFBTSxJQUFJLE9BQU8sS0FBTSxJQUFJLElBQUssTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLE9BQU8sSUFBSSxNQUFNLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSTtBQUN6RyxxQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsZ0JBQUksVUFBVTtBQUFHLGdCQUFJLE9BQU8sSUFBSSxJQUFJLEdBQUc7QUFBRyxnQkFBSSxPQUFPLElBQUksS0FBSyxHQUFHLEdBQUc7QUFBRyxnQkFBSSxPQUFPLElBQUksS0FBSyxJQUFJLElBQUksR0FBRztBQUFHLGdCQUFJLE9BQU8sSUFBSSxLQUFLLElBQUksR0FBRztBQUFHLGdCQUFJLFVBQVU7QUFBRyxnQkFBSSxLQUFLO0FBQUEsVUFBRztBQUFBLFFBQ3JNO0FBQUEsTUFDRjtBQUVBLFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEtBQUssSUFBSSxNQUFNLEdBQUcsS0FBSyxJQUFJLElBQUk7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUTtBQUMzSyxVQUFJLFlBQVk7QUFBSSxVQUFJLFNBQVMsR0FBRyxLQUFLLElBQUksTUFBTSxHQUFHLElBQUksSUFBSTtBQUM5RCxVQUFJLFlBQVksT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFBSyxVQUFJLFNBQVMsR0FBRyxLQUFLLElBQUksT0FBTyxHQUFHLElBQUksS0FBSztBQUFHLFVBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLO0FBQ3BJLFVBQUksWUFBWSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUFLLFVBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxNQUFNLEdBQUcsQ0FBQztBQUFHLFVBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxNQUFNLEdBQUcsQ0FBQztBQUVuSCxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxJQUFJLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLO0FBQy9NLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHO0FBQzVELGVBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxVQUFVLEtBQUssS0FBSztBQUN6QyxjQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksTUFBTSxNQUFNLElBQUksSUFBSSxPQUFPLElBQUksT0FBTyxNQUFNLElBQUksSUFBSSxPQUFPLElBQUksTUFBTSxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3BLLGNBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFHLFdBQUcsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87QUFBRyxXQUFHLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO0FBQ2xKLFlBQUksWUFBWTtBQUFJLG1CQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxjQUFJLFVBQVU7QUFBRyxjQUFJLFFBQVEsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFBQSxRQUFHO0FBQUEsTUFDL0k7QUFDQSxVQUFJLDJCQUEyQjtBQUMvQixlQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUFFLGNBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFO0FBQUcsWUFBSSxZQUFZLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQztBQUFLLFlBQUksU0FBUyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQUEsTUFBRztBQUM5TyxVQUFJLDJCQUEyQjtBQUFBLElBQ2pDO0FBQ0EsVUFBTSxHQUFHLElBQUksR0FBRyxJQUFJO0FBQ3BCLFVBQU0sSUFBSSxHQUFHLEdBQUcsS0FBSztBQUFBLEVBQ3ZCLENBQUM7QUFDSDtBQUtBLFNBQVMsUUFBUSxHQUFtQztBQUNsRCxRQUFNLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUk7QUFDeEMsUUFBTSxJQUFJLElBQVUsa0JBQVksR0FBRyxHQUFHLENBQUM7QUFDdkMsUUFBTSxJQUFJLEVBQUUsYUFBYSxVQUFVO0FBQ25DLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLEtBQUs7QUFDaEMsVUFBTSxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLO0FBQ2hDLE1BQUUsS0FBSyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssTUFBTSxLQUFLLE1BQU0sRUFBRTtBQUFHLE1BQUUsS0FBSyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssTUFBTSxLQUFLLE1BQU0sRUFBRTtBQUFBLEVBQ3pGO0FBQ0EsSUFBRSxxQkFBcUI7QUFDdkIsSUFBRSxVQUFVLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTtBQUM5QixTQUFPO0FBQ1Q7QUF3QkEsU0FBUyxTQUFTLE1BQWMsTUFBYyxHQUFvQztBQUNoRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU0sTUFBTSxFQUFFLE9BQU8sTUFBTSxLQUFLLEVBQUUsTUFBTTtBQUN4QyxVQUFNLElBQUksQ0FBQyxNQUFjO0FBQUUsWUFBTSxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUM7QUFBRyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQUEsSUFBSztBQUN4RixRQUFJLFlBQVksRUFBRSxHQUFHO0FBQUcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFFL0MsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFVBQVUsS0FBSyxLQUFLO0FBQ3pDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksSUFBSTtBQUM1RCxZQUFNLEtBQUssSUFBSSxJQUFJO0FBQ25CLFlBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxRQUFRLE9BQU8sSUFBSSxJQUFJLE9BQU8sTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUM5RSxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsUUFBUSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLGNBQWMsSUFBSSxHQUFHO0FBQ3ZILFNBQUcsYUFBYSxHQUFHLGVBQWU7QUFDbEMsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3ZJO0FBVUEsVUFBTSxLQUFLLE1BQU0sS0FBSyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxLQUFLLE9BQU8sSUFBSSxJQUFJLElBQUssQ0FBQztBQUNqSCxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsV0FBVyxNQUFNLEtBQUs7QUFDM0MsVUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJO0FBQy9CLFVBQUksR0FBRyxVQUFVLElBQUksS0FBSyxFQUFFLGdCQUFnQixPQUFPO0FBQ2pELGNBQU0sSUFBSSxHQUFJLElBQUksSUFBSSxHQUFHLFNBQVUsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMxRixZQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUk7QUFBRyxZQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUk7QUFBQSxNQUN2RDtBQUNBLFlBQU0sSUFBSSxNQUFNLEVBQUUsY0FBYyxRQUFTLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUUsY0FBYztBQUMvRSxZQUFNLElBQUksT0FBTyxJQUFJLFFBQVEsTUFBTSxJQUFJLElBQUk7QUFDM0MsWUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDO0FBQ2xDLFlBQU0sS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLO0FBQzdCLFVBQUksWUFBWSxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLE9BQU8sSUFBSSxLQUFLLEVBQUUsbUJBQW1CLEtBQUs7QUFDMUosaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFDeEQsWUFBSSxVQUFVO0FBQ2QsaUJBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLGdCQUFNLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLEdBQUcsS0FBSyxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzdELGdCQUFNLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUs7QUFDdkUsY0FBSSxNQUFNLEVBQUcsS0FBSSxPQUFPLElBQUksRUFBRTtBQUFBLGNBQVEsS0FBSSxPQUFPLElBQUksRUFBRTtBQUFBLFFBQ3pEO0FBQ0EsWUFBSSxVQUFVO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFDNUI7QUFBQSxJQUNGO0FBRUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFdBQVcsS0FBSyxLQUFLO0FBQzFDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksTUFBTyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJO0FBQy9GLFlBQU0sSUFBSSxNQUFNLE1BQU0sTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQzVELFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLElBQUksR0FBRyxLQUFLLEdBQUc7QUFDdEQsU0FBRyxhQUFhLEdBQUcsUUFBUSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsS0FBSztBQUNqRyxTQUFHLGFBQWEsTUFBTSxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUN2RyxTQUFHLGFBQWEsR0FBRyxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxLQUFLO0FBQ2pHLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUc7QUFBQSxJQUM5RDtBQU9BLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxTQUFTLElBQUksS0FBSztBQUN2QyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSTtBQUN2RSxZQUFNLEtBQUssSUFBSSxJQUFJO0FBQ25CLFlBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxRQUFRLE1BQU0sSUFBSSxJQUFJLE9BQU8sTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUM3RSxVQUFJLFlBQVksUUFBUSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFPLElBQUksSUFBSSxHQUFJO0FBQ2hILGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQzdGO0FBQ0EsUUFBSSxVQUFVO0FBQ2QsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLGFBQWEsSUFBSSxLQUFLO0FBQzNDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLE1BQU0sS0FBSyxPQUFRLElBQUksSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLE9BQU8sTUFBTSxLQUFLLEtBQUs7QUFDM0csWUFBTSxLQUFLLElBQUksSUFBSTtBQUNuQixZQUFNLElBQUksS0FBSyxPQUFPLElBQUksUUFBUSxNQUFNLElBQUksSUFBSSxPQUFPLE1BQU0sTUFBTSxNQUFNLElBQUksSUFBSTtBQUNqRixVQUFJLGNBQWMsUUFBUSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFPLElBQUksSUFBSSxJQUFJO0FBQ2xILFVBQUksWUFBWSxNQUFNLElBQUksSUFBSTtBQUM5QixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUN4RCxZQUFJLFVBQVU7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksRUFBRTtBQUMxQyxZQUFJLE9BQU8sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHO0FBQUcsWUFBSSxPQUFPO0FBQUEsTUFDakY7QUFBQSxJQUNGO0FBRUEsUUFBSSxFQUFFLE1BQU07QUFDVixZQUFNLElBQUksRUFBRSxNQUFNLE9BQU8sRUFBRSxZQUFZO0FBQ3ZDLFlBQU0sT0FBTyxHQUFHLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUsxRixpQkFBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLGVBQWUsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFpQjtBQUN6RixjQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxNQUFNLEdBQUcsT0FBTyxNQUFNLElBQUksQ0FBQztBQUNsRSxXQUFHLGFBQWEsR0FBRyxRQUFRLElBQUksSUFBSSxFQUFFLFlBQVksR0FBSSxHQUFHO0FBQUcsV0FBRyxhQUFhLEdBQUcsUUFBUSxJQUFJLEtBQUs7QUFDL0YsWUFBSSxZQUFZO0FBQUksWUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxNQUM3QztBQUNBLGVBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxZQUFZLEtBQUssS0FBSztBQUMzQyxjQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3pDLGNBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsY0FBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksUUFBUSxNQUFNLElBQUk7QUFDL0MsY0FBTSxNQUFNLEtBQUssTUFBTyxJQUFJLElBQUk7QUFDaEMsY0FBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRztBQUN0RCxXQUFHLGFBQWEsR0FBRyxRQUFRLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLEdBQUc7QUFBRyxXQUFHLGFBQWEsR0FBRyxRQUFRLElBQUksS0FBSztBQUNoRyxZQUFJLFlBQVk7QUFDaEIsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHO0FBQUEsTUFDOUQ7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFrQkEsU0FBUyxPQUFPLEdBQXlCLEdBQVcsR0FBVyxPQUFlLE9BQU8sR0FBeUI7QUFDNUcsUUFBTSxLQUFLLEVBQUUsYUFBYSxJQUFJO0FBQzlCLFFBQU0sS0FBTSxJQUFJLEtBQUssS0FBSyxJQUFLLE9BQU8sS0FBSyxJQUFJO0FBQy9DLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxPQUFPLElBQUssSUFBRyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJO0FBQ3RGLFNBQU87QUFDVDtBQUlBLFNBQVMsV0FBVyxLQUErQixLQUFtQixJQUFZLElBQVksSUFBWSxJQUFZLEdBQVcsTUFBYyxPQUFlLE1BQW9CO0FBQ2hMLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFVBQU0sSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSTtBQUNsRixRQUFJLFlBQVksUUFBUSxJQUFJLElBQUksT0FBTyxPQUFPLEtBQUssSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ25FLFFBQUksU0FBUyxHQUFHLElBQUksR0FBRyxLQUFLLEVBQUU7QUFBQSxFQUNoQztBQUNGO0FBS0EsU0FBUyxlQUFlLEtBQStCLEtBQW1CLEdBQVcsSUFBWSxJQUFZLEdBQVcsT0FBZSxTQUF1QjtBQUM1SixXQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixVQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsTUFBTSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sT0FBTyxJQUFJLElBQUk7QUFDckUsVUFBTSxJQUFJLE9BQU8sZUFBZSxlQUFlLElBQUksT0FBTyxTQUFTLE1BQU0sSUFBSSxJQUFJLE9BQU8sV0FBVyxNQUFNLElBQUksSUFBSTtBQUNqSCxVQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHO0FBQ3BELE9BQUcsYUFBYSxHQUFHLFFBQVEsQ0FBQyxLQUFLO0FBQUcsT0FBRyxhQUFhLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsT0FBRyxhQUFhLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsT0FBRyxhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUs7QUFDekosUUFBSSxZQUFZO0FBQ2hCLGVBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHO0FBQUEsRUFDakU7QUFDRjtBQUtBLFNBQVMsY0FBYyxLQUErQixLQUFtQixHQUFXLE9BQW1CLElBQVksSUFBWSxHQUFXLE1BQW9CO0FBQzVKLGFBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxPQUFPO0FBQzVCLFVBQU0sS0FBSyxJQUFJLHFCQUFxQixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxJQUFJLEdBQUc7QUFDN0UsT0FBRyxhQUFhLEdBQUcsa0JBQWtCLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxHQUFHO0FBQUcsT0FBRyxhQUFhLEdBQUcsa0JBQWtCO0FBQ3RHLFFBQUksWUFBWTtBQUNoQixlQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxVQUFJLFVBQVU7QUFBRyxVQUFJLFFBQVEsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFVBQUksS0FBSztBQUFBLElBQUc7QUFDakgsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksS0FBSztBQUN4RSxVQUFJLFlBQVksa0JBQWtCLE9BQU8sSUFBSSxJQUFJLE1BQU0sUUFBUSxDQUFDLENBQUM7QUFDakUsWUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSTtBQUN6QyxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxHQUFHLElBQUksSUFBSSxHQUFHLENBQUM7QUFBQSxJQUMzRDtBQUFBLEVBQ0Y7QUFDRjtBQU9BLFNBQVMsU0FBUyxNQUFjLE1BQTBDO0FBQ3hFLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTSxPQUFPLFlBQVksUUFBUTtBQUNqQyxRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUVsRCxVQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM5QyxPQUFHLGFBQWEsR0FBRyxzQkFBc0I7QUFBRyxPQUFHLGFBQWEsS0FBSyx3QkFBd0I7QUFBRyxPQUFHLGFBQWEsR0FBRyxzQkFBc0I7QUFDckksUUFBSSxZQUFZO0FBQUksUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDM0MsbUJBQWUsS0FBSyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksTUFBTSxHQUFJO0FBRWhELFVBQU0sUUFBUSxDQUFDLEtBQUssTUFBTyxJQUFJLElBQUksTUFBTyxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUs7QUFFbkUsVUFBTSxXQUFXLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztBQUNoQyxhQUFTLElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxRQUFRLElBQUssWUFBVyxLQUFLLEtBQUssR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxDQUFDLEdBQUcsS0FBSyxNQUFNLE9BQU8sSUFBSTtBQUU3SCxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDOUQsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUc7QUFDMUQsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRztBQUFBLElBQ2hFO0FBRUEsZUFBVyxLQUFLLE9BQU87QUFDckIsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsSUFBSSxJQUFJLE1BQU0sR0FBRyxDQUFDO0FBQ3pELFNBQUcsYUFBYSxHQUFHLGtCQUFrQjtBQUFHLFNBQUcsYUFBYSxHQUFHLHFCQUFxQjtBQUNoRixVQUFJLFlBQVk7QUFBSSxVQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksSUFBSTtBQUM3RCxVQUFJLFlBQVk7QUFBdUIsVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDaEUsVUFBSSxZQUFZO0FBQTBCLFVBQUksU0FBUyxHQUFHLElBQUksS0FBSyxHQUFHLENBQUM7QUFDdkUsVUFBSSxZQUFZO0FBQXVCLFVBQUksU0FBUyxHQUFHLElBQUksS0FBSyxHQUFHLEdBQUc7QUFDdEUsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUk7QUFDN0QsU0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQUcsU0FBRyxhQUFhLEdBQUcsa0JBQWtCO0FBQ2hGLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksSUFBSTtBQUFBLElBQ3hEO0FBRUEsVUFBTSxRQUFvQixDQUFDO0FBQzNCLGVBQVcsS0FBSyxNQUFPLFVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFLLE9BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxLQUFLLENBQUM7QUFDeEcsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUssT0FBTSxLQUFLLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUM3RCxrQkFBYyxLQUFLLEtBQUssR0FBRyxPQUFPLElBQUksS0FBTSxJQUFJLE1BQU0sSUFBSSxHQUFJO0FBQUEsRUFDaEUsQ0FBQztBQUNIO0FBcUJBLFNBQVMsV0FBVyxNQUFjLE1BQWMsR0FBb0M7QUFDbEYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNLEtBQWEsRUFBRSxXQUFXLEdBQUcsS0FBSyxJQUFJO0FBQzVDLFVBQU0sUUFBZ0IsRUFBRSxTQUFTLEtBQUssU0FBaUIsRUFBRSxVQUFVO0FBQ25FLFVBQU0sT0FBZSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsT0FBZSxFQUFFLFFBQVEsQ0FBQyxLQUFLO0FBQ3ZFLFVBQU0sU0FBaUIsRUFBRSxVQUFVO0FBQ25DLFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBSWxELFVBQU0sUUFBb0IsQ0FBQztBQUMzQixhQUFTLElBQUksR0FBRyxLQUFLLElBQUksS0FBSztBQUM1QixZQUFNLE1BQWdCLENBQUM7QUFDdkIsVUFBSSxJQUFJO0FBQ1IsZUFBUyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUs7QUFDM0IsWUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUcsTUFBSyxJQUFJLElBQUksSUFBSSxLQUFLLFNBQVM7QUFDOUUsWUFBSSxLQUFLLElBQUksS0FBSyxDQUFDO0FBQUEsTUFDckI7QUFDQSxZQUFNLEtBQUssR0FBRztBQUFBLElBQ2hCO0FBRUEsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsWUFBTSxLQUFLLElBQUk7QUFFZixZQUFNLElBQUksSUFBSSxTQUFTLElBQUk7QUFDM0IsWUFBTSxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUM7QUFDNUIsVUFBSSxZQUFZLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQztBQUN6RSxVQUFJLFNBQVMsR0FBRyxLQUFLLFNBQVMsS0FBSyxHQUFHLEdBQUcsS0FBSyxJQUFJLFNBQVMsS0FBSyxDQUFDO0FBRWpFLGVBQVMsSUFBSSxHQUFHLElBQUksT0FBTyxLQUFLO0FBQzlCLGNBQU0sSUFBSSxJQUFJLElBQUk7QUFDbEIsY0FBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLE9BQU87QUFDakMsY0FBTSxPQUFPLElBQUksVUFBVSxNQUFNLElBQUksSUFBSTtBQUN6QyxjQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDekIsY0FBTSxPQUFPLElBQUksSUFBSTtBQUNyQixZQUFJLFlBQVksT0FBTyxRQUFRLEtBQUssTUFBTSxNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsTUFDakcscUJBQXFCLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQztBQUMvRCxjQUFNLE9BQU8sS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJO0FBQ3ZDLGNBQU0sT0FBTyxNQUFNLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJO0FBQ3RFLFlBQUksU0FBUyxHQUFHLE1BQU0sR0FBRyxLQUFLLElBQUksR0FBRyxPQUFPLElBQUksQ0FBQztBQUFBLE1BQ25EO0FBRUEsWUFBTSxPQUFPLEVBQUUsUUFBUTtBQUN2QixlQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sS0FBSztBQUM3QixjQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzdDLFlBQUksWUFBWSxrQkFBa0IsTUFBTyxJQUFJLElBQUksTUFBTSxRQUFRLENBQUMsQ0FBQztBQUNqRSxZQUFJLFNBQVMsR0FBRyxLQUFLLEtBQUssTUFBTSxHQUFHLE1BQU0sTUFBTSxJQUFJLElBQUksSUFBSTtBQUFBLE1BQzdEO0FBQUEsSUFDRjtBQU1BLGFBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFLO0FBQzVCLGVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLGNBQU0sS0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQ3JCLGNBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEtBQUssS0FBSyxNQUFNLEdBQUcsRUFBRTtBQUM1RCxXQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFBRyxXQUFHLGFBQWEsR0FBRyxxQkFBcUIsRUFBRSxPQUFPLE1BQU0sUUFBUSxDQUFDLENBQUMsR0FBRztBQUMvRyxZQUFJLFlBQVk7QUFDaEIsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLEdBQUcsS0FBSyxLQUFLLE9BQU8sSUFBSSxHQUFHLEtBQUssSUFBSTtBQUMzRSxjQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsS0FBSyxLQUFLLElBQUk7QUFDNUQsV0FBRyxhQUFhLEdBQUcsa0JBQWtCLEVBQUUsVUFBVSxNQUFNLFFBQVEsQ0FBQyxDQUFDLEdBQUc7QUFDcEUsV0FBRyxhQUFhLEdBQUcsa0JBQWtCO0FBQ3JDLFlBQUksWUFBWTtBQUNoQixtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUk7QUFBQSxNQUNqRTtBQUFBLElBQ0Y7QUFHQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsUUFBUSxJQUFJLEtBQUs7QUFDdEMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzVELFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxZQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDekIsU0FBRyxhQUFhLEdBQUcsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLHFCQUFxQjtBQUNqRyxVQUFJLDJCQUEyQjtBQUFZLFVBQUksWUFBWTtBQUMzRCxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFDckksVUFBSSwyQkFBMkI7QUFBQSxJQUNqQztBQUVBLG1CQUFlLEtBQUssS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLFdBQVcsSUFBSSxLQUFNLElBQUk7QUFBQSxFQUMvRCxDQUFDO0FBQ0g7QUFPQSxTQUFTLFNBQVMsTUFBYyxNQUFjLEdBQW9DO0FBQ2hGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsUUFBSSxZQUFZO0FBQVcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbEQsVUFBTSxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxLQUFLLEVBQUUsU0FBUyxHQUFHLENBQUM7QUFFekQsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssT0FBTztBQUNqQyxVQUFJLFlBQVksa0JBQWtCLE1BQU8sSUFBSSxJQUFJLE1BQU0sUUFBUSxDQUFDLENBQUM7QUFBSyxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM3RixVQUFJLFlBQVk7QUFBMEIsVUFBSSxTQUFTLElBQUksR0FBRyxHQUFHLEtBQUssSUFBSSxHQUFHLFFBQVEsSUFBSSxHQUFHLENBQUM7QUFBQSxJQUMvRjtBQUNBLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLE9BQU87QUFDakMsVUFBSSxZQUFZLGtCQUFrQixNQUFPLElBQUksSUFBSSxNQUFNLFFBQVEsQ0FBQyxDQUFDO0FBQUssVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDN0YsVUFBSSxZQUFZO0FBQTBCLFVBQUksU0FBUyxHQUFHLElBQUksR0FBRyxHQUFHLEtBQUssSUFBSSxHQUFHLFFBQVEsSUFBSSxDQUFDO0FBQUEsSUFDL0Y7QUFFQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsV0FBVyxJQUFJLEtBQUs7QUFDekMsWUFBTSxRQUFRLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUk7QUFDckYsVUFBSSxZQUFZO0FBQ2hCLFVBQUksWUFBWTtBQUNoQixVQUFJLE9BQU87QUFBRSxZQUFJLFNBQVMsSUFBSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEdBQUc7QUFBRyxZQUFJLFlBQVk7QUFBdUIsWUFBSSxTQUFTLElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxLQUFLLENBQUM7QUFBQSxNQUFHLE9BQ25JO0FBQUUsWUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHO0FBQUcsWUFBSSxZQUFZO0FBQXVCLFlBQUksU0FBUyxJQUFJLEtBQUssSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHO0FBQUEsTUFBRztBQUFBLElBQ3BJO0FBRUEsbUJBQWUsS0FBSyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsV0FBVyxJQUFJLEtBQU0sSUFBSTtBQUFBLEVBQy9ELENBQUM7QUFDSDtBQVNBLFNBQVMsU0FBUyxNQUFjLE1BQWMsR0FBb0M7QUFDaEYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNLE9BQU8sWUFBWSxRQUFRO0FBQ2pDLFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xELG1CQUFlLEtBQUssS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLFdBQVcsSUFBSSxNQUFNLEdBQUk7QUFDN0QsZUFBVyxLQUFLLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLFNBQVMsS0FBSyxNQUFNLE9BQU8sSUFBSTtBQUVsRSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsU0FBUyxJQUFJLEtBQUs7QUFDdkMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJO0FBQzdELGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQ3hELFlBQUksWUFBWTtBQUNoQixZQUFJLFVBQVU7QUFBRyxZQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFDdEYsWUFBSSxjQUFjO0FBQXVCLFlBQUksWUFBWTtBQUN6RCxpQkFBUyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUs7QUFBRSxjQUFJLFVBQVU7QUFBRyxjQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLE1BQU0sR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxPQUFPO0FBQUEsUUFBRztBQUFBLE1BQ3hKO0FBQUEsSUFDRjtBQUVBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxVQUFVLElBQUksS0FBSztBQUN4QyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUk7QUFDN0QsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUc7QUFDMUQsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRztBQUFBLElBQ2hFO0FBQ0EsVUFBTSxRQUFvQixDQUFDO0FBQzNCLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxTQUFTLElBQUksSUFBSyxPQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQzFFLGtCQUFjLEtBQUssS0FBSyxHQUFHLE9BQU8sSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJLElBQUk7QUFBQSxFQUNoRSxDQUFDO0FBQ0g7QUF1QkEsU0FBUyxTQUFTLE1BQWMsTUFBYyxHQUFvQztBQUNoRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU1BLE9BQU0sQ0FBQyxNQUFnQixHQUFHLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRyxVQUFNLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxRQUFRLEVBQUUsU0FBUyxNQUFNLE9BQU8sRUFBRSxRQUFRLE1BQU0sT0FBTyxFQUFFLFFBQVE7QUFDbkcsVUFBTSxPQUFPLENBQUMsU0FBMkM7QUFDdkQsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsTUFBSyxJQUFJLEVBQUU7QUFBQSxJQUN2RTtBQUNBLFVBQU0sT0FBTyxDQUFDLEdBQWEsR0FBVyxHQUFXLEdBQVcsR0FBVyxLQUFLLEdBQUcsTUFBTSxNQUFNO0FBQ3pGLFlBQU0sSUFBSSxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNuRCxRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFFBQUUsYUFBYSxNQUFNLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUc7QUFDNUYsUUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSztBQUNyQyxVQUFJLFlBQVk7QUFDaEIsV0FBSyxDQUFDLElBQUksT0FBTztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUcsQ0FBQztBQUFBLElBQ2hIO0FBUUEsVUFBTSxLQUFLLEVBQUUsVUFBVSxHQUFHLE9BQU8sRUFBRSxZQUFZO0FBQy9DLFFBQUksS0FBSyxHQUFHO0FBQ1YsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsY0FBTSxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLEtBQUs7QUFDckQsY0FBTSxJQUFJLFFBQVEsSUFBSSxRQUFRO0FBQzlCLFlBQUksWUFBWSxPQUFPQSxLQUFJLEtBQUssSUFBSSxDQUFDLE1BQWMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUFLLFlBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFDeEY7QUFBQSxJQUNGLE9BQU87QUFBRSxVQUFJLFlBQVksT0FBT0EsS0FBSSxJQUFJLENBQUM7QUFBSyxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQUc7QUFHeEUsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsS0FBSztBQUNuQyxXQUFLLE1BQU0sSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsS0FBSyxPQUFPLElBQUksSUFBSSxRQUFTLEVBQUUsY0FBYyxJQUFJLE1BQU8sSUFBSSxJQUFJLE1BQU0sTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxFQUFFO0FBSzNJLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxnQkFBZ0IsS0FBSyxLQUFLO0FBQy9DLFlBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSSxTQUFTLEVBQUUsY0FBYztBQUN4RixXQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssRUFBRSxjQUFjLFFBQVEsSUFBSSxJQUFJLEtBQU0sTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxFQUFFO0FBQ2pHLGVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLGNBQU0sSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSztBQUMzRCxjQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxJQUFJO0FBQzVFLFlBQUksWUFBWSxRQUFRQSxLQUFJLEtBQUssQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUk7QUFDeEQsYUFBSyxDQUFDLElBQUksT0FBTztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGNBQUksS0FBSztBQUFBLFFBQUcsQ0FBQztBQUFBLE1BQy9GO0FBQUEsSUFDRjtBQUlBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxnQkFBZ0IsS0FBSyxLQUFLO0FBQy9DLFlBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSTtBQUMvRCxXQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksS0FBTSxNQUFNLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEVBQUU7QUFDOUUsZUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLG9CQUFvQixLQUFLLEtBQUs7QUFDbkQsY0FBTSxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSTtBQUN0RCxjQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxJQUFJO0FBQzVFLFlBQUksWUFBWSxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUk7QUFDeEQsYUFBSyxDQUFDLElBQUksT0FBTztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGNBQUksS0FBSztBQUFBLFFBQUcsQ0FBQztBQUFBLE1BQy9GO0FBQ0EsVUFBSSxJQUFJLElBQUksS0FBSztBQUNmLGNBQU0sSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU8sTUFBTSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzNELGNBQU0sSUFBSSxJQUFJLHFCQUFxQixHQUFHLElBQUksR0FBRyxLQUFLLEdBQUc7QUFDckQsVUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLEdBQUc7QUFBRyxVQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxLQUFLO0FBQ3hHLFlBQUksWUFBWTtBQUNoQixhQUFLLENBQUMsT0FBTyxJQUFJLFNBQVMsS0FBSyxNQUFNLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUFBLE1BQ3JFO0FBQUEsSUFDRjtBQUlBLFVBQU0sUUFBUSxFQUFFLFNBQVM7QUFDekIsYUFBUyxJQUFJLEdBQUcsSUFBSSxPQUFPLEtBQUs7QUFDOUIsWUFBTSxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUk7QUFDN0QsWUFBTSxJQUFJLEtBQUssUUFBUSxNQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDaEQsVUFBSSxjQUFjLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztBQUFLLFVBQUksWUFBWSxNQUFNLElBQUksSUFBSTtBQUN4RSxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxDQUFDO0FBQUcsWUFBSSxPQUFPO0FBQUEsTUFBRztBQUFBLElBQzlHO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFTQSxTQUFTLFVBQVUsTUFBYyxNQUEwQztBQUN6RSxTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU0sT0FBTyxZQUFZLFFBQVE7QUFDakMsUUFBSSxZQUFZO0FBQVcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFFbEQsVUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDOUMsT0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQUcsT0FBRyxhQUFhLEtBQUssd0JBQXdCO0FBQUcsT0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQ25JLFFBQUksWUFBWTtBQUFJLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzNDLG1CQUFlLEtBQUssS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLEtBQU0sSUFBSTtBQUNoRCxVQUFNLE9BQU8sS0FBSyxNQUFPLElBQUksSUFBSTtBQUNqQyxlQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRyxZQUFXLEtBQUssS0FBSyxHQUFHLEdBQUcsSUFBSSxJQUFJLEtBQUssTUFBTSxPQUFPLElBQUk7QUFDeEcsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJO0FBQzdELFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHO0FBQzFELFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEdBQUc7QUFBQSxJQUNsRTtBQUVBO0FBQ0UsWUFBTSxJQUFJO0FBQ1YsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsSUFBSSxJQUFJLE1BQU0sR0FBRyxDQUFDO0FBQ3pELFNBQUcsYUFBYSxHQUFHLGtCQUFrQjtBQUFHLFNBQUcsYUFBYSxHQUFHLHFCQUFxQjtBQUNoRixVQUFJLFlBQVk7QUFBSSxVQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksSUFBSTtBQUM3RCxVQUFJLFlBQVk7QUFBdUIsVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDOUQsVUFBSSxZQUFZO0FBQTBCLFVBQUksU0FBUyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7QUFDckUsVUFBSSxZQUFZO0FBQXVCLFVBQUksU0FBUyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7QUFBQSxJQUNwRTtBQUVBLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFlBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxRQUFRLElBQUksSUFBSSxPQUFPLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxNQUFNLE9BQU8sSUFBSSxJQUFJLE9BQU87QUFDNUgsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUMzQixjQUFNLE9BQU8sSUFBSSxxQkFBcUIsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLElBQUksR0FBRztBQUN6RixhQUFLLGFBQWEsR0FBRyxxQkFBcUI7QUFBRyxhQUFLLGFBQWEsS0FBSyxxQkFBcUI7QUFBRyxhQUFLLGFBQWEsR0FBRyxrQkFBa0I7QUFDbkksWUFBSSxZQUFZO0FBQU0sWUFBSSxVQUFVO0FBQUcsWUFBSSxRQUFRLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQ25ILFlBQUksWUFBWTtBQUF1QixZQUFJLFVBQVU7QUFBRyxZQUFJLFFBQVEsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUN4SCxZQUFJLFlBQVk7QUFBcUIsWUFBSSxVQUFVO0FBQUcsWUFBSSxRQUFRLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUMzSjtBQUNBLGVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLGNBQU0sSUFBSSxNQUFNLElBQUksSUFBSSxPQUFPLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLElBQUk7QUFDM0YsWUFBSSxZQUFZO0FBQ2hCLG1CQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxjQUFJLFVBQVU7QUFBRyxjQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRztBQUFBLE1BQ3JHO0FBQUEsSUFDRjtBQUVBLGtCQUFjLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxPQUFPLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJO0FBQUEsRUFDakgsQ0FBQztBQUNIO0FBT0EsU0FBUyxTQUFTLE1BQWMsTUFBMEM7QUFDeEUsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsRCxVQUFNLElBQUksSUFBSSxRQUFRLElBQUksR0FBRyxNQUFNO0FBQ25DLFVBQU0sS0FBSyxLQUFLLElBQUksR0FBRyxJQUFJO0FBQzNCLFFBQUksS0FBSztBQUNULGFBQVMsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUs7QUFDL0IsWUFBTSxLQUFLLElBQUk7QUFDZixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBRTNCLFlBQUksY0FBYztBQUF1QixZQUFJLFlBQVksUUFBUTtBQUNqRSxZQUFJLFVBQVU7QUFBRyxZQUFJLE9BQU8sSUFBSSxFQUFFO0FBQUcsWUFBSSxPQUFPLEtBQUssSUFBSSxLQUFLLENBQUM7QUFBRyxZQUFJLE9BQU87QUFFN0UsWUFBSSxjQUFjO0FBQTBCLFlBQUksWUFBWSxRQUFRO0FBQ3BFLFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxLQUFLLFFBQVEsS0FBSyxFQUFFO0FBQUcsWUFBSSxPQUFPLEtBQUssUUFBUSxNQUFNLElBQUksS0FBSyxDQUFDO0FBQUcsWUFBSSxPQUFPO0FBRXpHLFlBQUksY0FBYztBQUF1QixZQUFJLFlBQVk7QUFDekQsaUJBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLGdCQUFNLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFFBQVEsTUFBTSxPQUFPLEtBQUssTUFBTTtBQUNoRixjQUFJLFVBQVU7QUFBRyxjQUFJLE9BQU8sS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRLElBQUk7QUFBRyxjQUFJLE9BQU8sS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRLElBQUk7QUFBRyxjQUFJLE9BQU87QUFBQSxRQUNsSTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQ0EsUUFBSSxRQUFRO0FBRVosYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJO0FBQ2pDLFVBQUksWUFBWSxJQUFJLElBQUksTUFBTSx3QkFBd0I7QUFDdEQsVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUM7QUFBQSxJQUNyQztBQUNBLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDN0MsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztBQUNsRCxTQUFHLGFBQWEsR0FBRyxrQkFBa0I7QUFBRyxTQUFHLGFBQWEsS0FBSyxxQkFBcUI7QUFBRyxTQUFHLGFBQWEsR0FBRyxrQkFBa0I7QUFDMUgsVUFBSSxZQUFZO0FBQUksaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQzVFO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFlQSxTQUFTLGVBQWUsU0FBNkU7QUFDbkcsUUFBTSxNQUFrRCxDQUFDO0FBQ3pELGFBQVcsS0FBSyxPQUFPLFdBQW9CO0FBQ3pDLFVBQU0sSUFBSSxJQUFVLDJCQUFxQjtBQUFBLE1BQ3ZDLE9BQU8sSUFBVSxZQUFNLEVBQUUsS0FBSztBQUFBLE1BQzlCLFdBQVcsRUFBRTtBQUFBLE1BQ2IsV0FBVyxFQUFFO0FBQUEsTUFDYixXQUFXLFFBQVEsYUFBYTtBQUFBLE1BQ2hDLE1BQU0sRUFBRSxjQUFvQixtQkFBbUI7QUFBQSxNQUMvQyxjQUFjLEVBQUUsaUJBQWlCO0FBQUEsSUFDbkMsQ0FBQztBQUNELFFBQUksRUFBRSxvQkFBb0IsT0FBVyxHQUFFLGtCQUFrQixFQUFFO0FBRzNELFFBQUksRUFBRSxhQUFhLFFBQVc7QUFBRSxRQUFFLFdBQVcsSUFBVSxZQUFNLEVBQUUsUUFBUTtBQUFHLFFBQUUsb0JBQW9CLEVBQUUscUJBQXFCO0FBQUEsSUFBRztBQUMxSCxRQUFJLEVBQUUsWUFBWSxRQUFXO0FBQUUsUUFBRSxjQUFjO0FBQU0sUUFBRSxVQUFVLEVBQUU7QUFBUyxRQUFFLGFBQWE7QUFBQSxJQUFNO0FBR2pHLFFBQUksRUFBRSxjQUFjLFFBQVc7QUFBRSxRQUFFLFlBQVksRUFBRTtBQUFXLFFBQUUsY0FBYztBQUFBLElBQU87QUFDbkYsTUFBRSxPQUFPLEVBQUU7QUFDWCxRQUFJLEVBQUUsRUFBRSxJQUFJO0FBQUEsRUFDZDtBQUNBLFNBQU87QUFDVDtBQUlPLFNBQVMsc0NBQXNDLFVBQWtDLENBQUMsR0FBZ0I7QUFDdkcsUUFBTSxPQUFPLElBQVUsWUFBTTtBQUM3QixPQUFLLE9BQU87QUFFWixRQUFNLFlBQVksZUFBZSxPQUFPO0FBQ3hDLFFBQU0sUUFBd0MsQ0FBQztBQUMvQyxRQUFNLFNBQXFDLENBQUM7QUFDNUMsUUFBTSxVQUEwQyxDQUFDO0FBQ2pELFFBQU0sWUFBcUMsQ0FBQztBQUM1QyxRQUFNLG9CQUFzRCxDQUFDO0FBQzdELFFBQU0sYUFBYSxRQUFRLGNBQWM7QUFDekMsUUFBTSxnQkFBZ0IsUUFBUSxpQkFBaUI7QUFhL0MsV0FBUyxrQkFBa0IsS0FBMkIsS0FBaUM7QUFDckYsUUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGdCQUFnQixJQUFJLGFBQWEsT0FBTyxFQUFHO0FBQzVELFVBQU0sSUFBSSxJQUFJLGFBQWEsVUFBVSxFQUFFO0FBQ3ZDLFFBQUksYUFBYSxTQUFTLElBQVUsc0JBQWdCLElBQUksYUFBYSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFBQSxFQUN6RjtBQUVBLFdBQVMsSUFBSSxJQUFZLE1BQWMsS0FBMkIsT0FBZTtBQUMvRSxVQUFNLE9BQU8sSUFBVSxZQUFNO0FBQUcsU0FBSyxPQUFPLE9BQU87QUFDbkQsc0JBQWtCLEtBQUssVUFBVSxLQUFLLENBQUM7QUFDdkMsVUFBTSxPQUFPLElBQVUsV0FBSyxLQUFLLFVBQVUsS0FBSyxDQUFDO0FBQ2pELFNBQUssT0FBTztBQUFNLFNBQUssYUFBYTtBQUFZLFNBQUssZ0JBQWdCO0FBQ3JFLFNBQUssSUFBSSxJQUFJO0FBQUcsU0FBSyxJQUFJLElBQUk7QUFDN0IsVUFBTSxFQUFFLElBQUk7QUFBTSxXQUFPLEVBQUUsSUFBSTtBQUFNLGNBQVUsRUFBRSxJQUFJO0FBQ3JELFdBQU87QUFBQSxFQUNUO0FBQ0EsV0FBUyxRQUFRLElBQVksTUFBYyxLQUEyQixPQUFlLE1BQXVCLE1BQWlCO0FBQzNILFVBQU0sT0FBTyxJQUFVLFlBQU07QUFBRyxTQUFLLE9BQU8sT0FBTztBQUNuRCxzQkFBa0IsS0FBSyxVQUFVLEtBQUssQ0FBQztBQUN2QyxVQUFNLE9BQU8sSUFBVSxvQkFBYyxLQUFLLFVBQVUsS0FBSyxHQUFHLEtBQUssTUFBTTtBQUN2RSxTQUFLLE9BQU87QUFBTSxTQUFLLGFBQWE7QUFBWSxTQUFLLGdCQUFnQjtBQUNyRSxhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFLLE1BQUssWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2pFLFFBQUksTUFBTTtBQUdSLFlBQU0sSUFBSSxJQUFVLFlBQU07QUFDMUIsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsSUFBSyxNQUFLLFdBQVcsR0FBRyxFQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMxRSxVQUFJLEtBQUssY0FBZSxNQUFLLGNBQWMsY0FBYztBQUFBLElBQzNEO0FBQ0EsU0FBSyxlQUFlLGNBQWM7QUFDbEMsU0FBSyxJQUFJLElBQUk7QUFBRyxTQUFLLElBQUksSUFBSTtBQUM3QixVQUFNLEVBQUUsSUFBSTtBQUFNLFdBQU8sRUFBRSxJQUFJO0FBQStCLGNBQVUsRUFBRSxJQUFJO0FBQzlFLFdBQU87QUFBQSxFQUNUO0FBR0EsV0FBUyxLQUFLLFFBQWdCLEdBQVcsUUFBUSxHQUFvQjtBQUNuRSxXQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNO0FBQzdCLFlBQU0sSUFBSSxRQUFRLElBQUksS0FBSyxLQUFLO0FBQ2hDLGFBQU8sSUFBVSxjQUFRLEVBQUU7QUFBQSxRQUN6QixJQUFVLGNBQVEsS0FBSyxJQUFJLENBQUMsSUFBSSxRQUFRLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNO0FBQUEsUUFDL0QsSUFBVSxpQkFBVyxFQUFFLGlCQUFpQixJQUFVLGNBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQUEsUUFDckUsSUFBVSxjQUFRLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFBQztBQUFBLElBQzlCLENBQUM7QUFBQSxFQUNIO0FBRUEsUUFBTSxJQUFJLE9BQU87QUFPakIsYUFBVyxLQUFLLEVBQUUsWUFBcUI7QUFDckMsVUFBTSxLQUE2QixDQUFDO0FBQ3BDLGVBQVcsS0FBTSxFQUFFLFNBQVMsQ0FBQyxFQUFrQixJQUFHLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RGLGVBQVcsS0FBSyxRQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBZ0IsRUFBRyxJQUFHLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZHLGVBQVcsS0FBTSxFQUFFLFNBQVMsQ0FBQyxFQUFhLElBQUcsS0FBSyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFHckYsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEVBQWEsSUFBRyxLQUFLLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEtBQUssQ0FBQztBQUM3RyxlQUFXLE1BQU8sRUFBRSxVQUFVLENBQUMsRUFBYSxJQUFHLEtBQUssTUFBTSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDL0YsZUFBVyxNQUFPLEVBQUUsUUFBUSxDQUFDLEdBQWE7QUFJeEMsWUFBTUMsS0FBSSxJQUFVLHVCQUFpQixHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLE9BQU8sSUFBSSxHQUFHLEdBQUcsUUFBUSxPQUFPLEdBQUcsT0FBTyxHQUFHLEdBQUcsU0FBUyxLQUFLLEtBQUssQ0FBQztBQUNoSSxVQUFJLEdBQUcsT0FBTztBQUFFLGNBQU0sS0FBS0EsR0FBRSxhQUFhLElBQUk7QUFBRyxpQkFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sSUFBSyxJQUFHLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQUEsTUFBRztBQUdySixVQUFJLEdBQUcsUUFBUTtBQUFFLGNBQU0sS0FBS0EsR0FBRSxhQUFhLElBQUksR0FBRyxNQUFNLEdBQUcsT0FBTyxNQUFNLEtBQUs7QUFBRyxpQkFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUssSUFBRyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQUEsTUFBRztBQUdySixVQUFJLEdBQUcsT0FBTztBQUFFLFFBQUFBLEdBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUFHLFFBQUFBLEdBQUUscUJBQXFCO0FBQUEsTUFBRztBQUkxRixVQUFJLEVBQUUsT0FBTyxPQUFRLFFBQU9BLElBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLFdBQVcsR0FBRyxHQUFHLFFBQVEsQ0FBQztBQUN4RSxVQUFJLEdBQUcsR0FBSSxDQUFBQSxHQUFFLFFBQVEsR0FBRyxFQUFFO0FBQUcsVUFBSSxHQUFHLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEdBQUcsRUFBRTtBQUFHLFVBQUksR0FBRyxHQUFJLENBQUFBLEdBQUUsUUFBUSxHQUFHLEVBQUU7QUFDcEYsTUFBQUEsR0FBRSxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQUcsU0FBRyxLQUFLLFFBQVFBLElBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUN2RTtBQUNBLGVBQVcsS0FBTSxFQUFFLFVBQVUsQ0FBQyxHQUFhO0FBS3pDLFlBQU1BLEtBQUksTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksR0FBRyxFQUFFLFVBQVUsT0FBTyxFQUFFLGFBQWEsSUFBSTtBQUM3RSxVQUFJLEVBQUUsT0FBTztBQUFFLGNBQU0sS0FBSyxNQUFNLFFBQVEsRUFBRSxLQUFLLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0FBQUcsZ0JBQVFBLElBQUlBLEdBQUUsYUFBYSxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sTUFBTSxLQUFNLEdBQUcsRUFBRSxPQUFPLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUFBLE1BQUc7QUFDck0sVUFBSSxFQUFFLE9BQU87QUFBRSxRQUFBQSxHQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFBRyxRQUFBQSxHQUFFLHFCQUFxQjtBQUFBLE1BQUc7QUFJdEYsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUFHLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQzlFLE1BQUFBLEdBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUFHLFNBQUcsS0FBSyxRQUFRQSxJQUFHLEVBQUUsR0FBRyxDQUFDO0FBQUEsSUFDbkU7QUFLQSxlQUFXLEtBQU0sRUFBRSxTQUFTLENBQUMsR0FBYTtBQUN4QyxZQUFNQSxLQUFJLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksRUFBRSxNQUFNO0FBQ2hFLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQUcsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUM5RSxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFJL0MsVUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLFFBQVc7QUFDbkMsY0FBTSxNQUFNQSxHQUFFLGFBQWEsT0FBTztBQUNsQyxjQUFNLElBQUksSUFBVSxZQUFNLEVBQUUsR0FBRztBQUMvQixpQkFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLE9BQU8sSUFBSyxLQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6RyxXQUFHLEtBQUtBLEVBQUM7QUFBQSxNQUNYLE1BQU8sSUFBRyxLQUFLLEVBQUUsU0FBU0EsS0FBSSxRQUFRQSxJQUFHLEVBQUUsR0FBRyxDQUFDO0FBQUEsSUFDakQ7QUFDQSxlQUFXLEtBQU0sRUFBRSxVQUFVLENBQUMsR0FBYTtBQUd6QyxZQUFNQSxLQUFJLElBQVUsb0JBQWMsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDaEQsTUFBQUEsR0FBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLFlBQU0sS0FBS0EsR0FBRSxhQUFhLElBQUk7QUFDOUIsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sSUFBSyxJQUFHLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUM3RyxTQUFHLEtBQUssUUFBUUEsSUFBRyxFQUFFLEdBQUcsQ0FBQztBQUFBLElBQzNCO0FBQ0EsZUFBVyxLQUFNLEVBQUUsWUFBWSxDQUFDLEdBQWE7QUFHM0MsWUFBTSxRQUFRLElBQVUsWUFBTTtBQUM5QixZQUFNLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkMsZUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLEtBQUssUUFBUSxJQUFLLE9BQU0sT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMvRSxZQUFNLFVBQVU7QUFDaEIsaUJBQVcsS0FBTSxFQUFFLFNBQVMsQ0FBQyxHQUFvQjtBQUMvQyxjQUFNLEtBQUssSUFBVSxXQUFLO0FBQUcsV0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkQsaUJBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLElBQUssSUFBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0QsV0FBRyxVQUFVO0FBQUcsY0FBTSxNQUFNLEtBQUssRUFBRTtBQUFBLE1BQ3JDO0FBQ0EsWUFBTUEsS0FBSSxjQUFjLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUN6QyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQ3hCLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFDeEIsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUN4QixVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0MsU0FBRyxLQUFLLFFBQVFBLElBQUcsRUFBRSxHQUFHLENBQUM7QUFBQSxJQUMzQjtBQUlBLGVBQVcsS0FBTSxFQUFFLGNBQWMsQ0FBQyxHQUFrQjtBQUNsRCxZQUFNQSxLQUFJLElBQVUscUJBQWUsR0FBRyxFQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUU7QUFDOUQsTUFBQUEsR0FBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLFVBQUksRUFBRSxDQUFDLEVBQUcsQ0FBQUEsR0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQUcsVUFBSSxFQUFFLENBQUMsRUFBRyxDQUFBQSxHQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFBRyxVQUFJLEVBQUUsQ0FBQyxFQUFHLENBQUFBLEdBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUM5RSxNQUFBQSxHQUFFLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDNUIsU0FBRyxLQUFLLFFBQVFBLElBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUFBLElBQzFCO0FBR0EsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEVBQWtCLElBQUcsS0FBSyxRQUFRLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUYsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEVBQWEsSUFBRyxLQUFLLFFBQVEsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBR3hGLGVBQVcsS0FBTSxFQUFFLFVBQVUsQ0FBQyxHQUFhO0FBSXpDLFlBQU1BLEtBQUksTUFBTSxDQUFDO0FBQ2pCLFNBQUcsS0FBSyxFQUFFLGFBQWEsU0FBWUEsS0FBSSxRQUFRQSxJQUFHLEVBQUUsR0FBRyxDQUFDO0FBQUEsSUFDMUQ7QUFHQSxlQUFXLEtBQU0sRUFBRSxjQUFjLENBQUMsR0FBYTtBQUM3QyxZQUFNQSxLQUFJLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFO0FBQzNDLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFLMUUsVUFBSSxFQUFFLE9BQU87QUFRWCxjQUFNLE1BQU0sRUFBRSxPQUFPLElBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsY0FBTSxNQUFNLElBQUksYUFBYSxNQUFNLElBQUksQ0FBQztBQUN4QyxpQkFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsZ0JBQU0sSUFBSSxFQUFFLE1BQU0sS0FBSyxJQUFJLEVBQUUsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ2pELGdCQUFNLElBQUksSUFBVSxZQUFNLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBVSxZQUFNLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztBQUN2RyxtQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsa0JBQU0sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSztBQUNsRCxrQkFBTSxLQUFLLElBQUksTUFBTSxLQUFLO0FBQzFCLGdCQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSztBQUFHLGdCQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLO0FBQUcsZ0JBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUs7QUFBQSxVQUN2RztBQUFBLFFBQ0Y7QUFDQSxRQUFBQSxHQUFFLGFBQWEsU0FBUyxJQUFVLHNCQUFnQixLQUFLLENBQUMsQ0FBQztBQUN6RCxXQUFHLEtBQUtBLEVBQUM7QUFBQSxNQUNYLE1BQU8sSUFBRyxLQUFLLFFBQVFBLElBQUcsRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUFBLElBQzlDO0FBQ0EsUUFBSSxJQUFJLFVBQVUsRUFBRTtBQUdwQixRQUFJLEVBQUUsTUFBTyxHQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFLdkQsUUFBSSxFQUFFLE1BQU07QUFDVixZQUFNLElBQUksSUFBVSxZQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxJQUFVLFlBQU0sRUFBRSxLQUFLLEVBQUU7QUFDbkUsWUFBTSxJQUFJLEVBQUUsYUFBYSxVQUFVO0FBQUcsVUFBSSxNQUFNLEVBQUUsYUFBYSxPQUFPO0FBQ3RFLFVBQUksQ0FBQyxLQUFLO0FBQUUsY0FBTSxJQUFVLHNCQUFnQixJQUFJLGFBQWEsRUFBRSxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQUcsVUFBRSxhQUFhLFNBQVMsR0FBRztBQUFBLE1BQUc7QUFDckgsWUFBTSxLQUFLLEVBQUUsS0FBSyxTQUFTLE1BQU0sSUFBSSxFQUFFLEtBQUssU0FBUyxNQUFNLElBQUk7QUFDL0QsZUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxjQUFNLElBQUksT0FBTyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksT0FBTyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFDaEUsY0FBTSxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRSxLQUFLLEtBQUssRUFBRSxLQUFLLEtBQUssQ0FBQztBQUNoRixjQUFNLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSztBQUN0RixZQUFJLEVBQUUsS0FBSyxLQUFNLEtBQUksT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQUEsWUFBUSxLQUFJLE9BQU8sR0FBRyxHQUFHLElBQUksRUFBRTtBQUFBLE1BQ25IO0FBQ0EsVUFBSSxjQUFjO0FBQUEsSUFDcEI7QUFDQSxRQUFJLEVBQUUsT0FBTyxRQUFTLEtBQUksUUFBUSxHQUFHLEVBQUUsV0FBVyxDQUFDO0FBQ25ELFFBQUksRUFBRSxPQUFPLFNBQVUsS0FBSSxTQUFTLEdBQUcsRUFBRSxXQUFXLENBQUM7QUFDckQsUUFBSSxFQUFFLE9BQU8sUUFBUyxLQUFJLFFBQVEsR0FBRyxFQUFFLFdBQVcsQ0FBQztBQUNuRCxRQUFJLEVBQUUsT0FBTyxZQUFhLEtBQUksUUFBUSxHQUFHLEVBQUUsV0FBVyxHQUFHLElBQUk7QUFFN0QsUUFBSSxFQUFFLE9BQU8sUUFBUyxLQUFJLGFBQWEsR0FBRyxFQUFFLEtBQUs7QUFHakQsUUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsRUFBRSxRQUFRO0FBQy9CLFFBQUksRUFBRSxTQUFVLFdBQVUsRUFBRSxFQUFFLElBQUksRUFBRTtBQUFBLEVBQ3RDO0FBSUEsYUFBVyxLQUFNLEVBQUUsYUFBYSxDQUFDLEdBQWE7QUFDNUMsVUFBTSxLQUE2QixDQUFDO0FBQ3BDLGVBQVcsS0FBTSxFQUFFLFNBQVMsQ0FBQyxFQUFrQixJQUFHLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RGLGVBQVcsS0FBTSxFQUFFLFVBQVUsQ0FBQyxFQUFhLElBQUcsS0FBSyxRQUFRLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUN4RixlQUFXLEtBQU0sRUFBRSxVQUFVLENBQUMsRUFBa0IsSUFBRyxLQUFLLFFBQVEsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRixlQUFXLE1BQU8sRUFBRSxRQUFRLENBQUMsR0FBYTtBQUl4QyxZQUFNQSxLQUFJLElBQVU7QUFBQSxRQUFpQixHQUFHO0FBQUEsUUFBSSxHQUFHO0FBQUEsUUFBSSxHQUFHO0FBQUEsUUFBRyxHQUFHLE9BQU87QUFBQSxRQUFJO0FBQUEsUUFBRyxHQUFHLFFBQVE7QUFBQSxRQUNoRCxHQUFHLE9BQU87QUFBQSxRQUFHLEdBQUcsU0FBUyxLQUFLLEtBQUs7QUFBQSxNQUFDO0FBQ3pFLFVBQUksRUFBRSxPQUFPLE9BQVEsUUFBT0EsSUFBRyxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsV0FBVyxHQUFHLEdBQUcsUUFBUSxDQUFDO0FBQ3hFLFVBQUksR0FBRyxHQUFJLENBQUFBLEdBQUUsUUFBUSxHQUFHLEVBQUU7QUFBRyxVQUFJLEdBQUcsR0FBSSxDQUFBQSxHQUFFLFFBQVEsR0FBRyxFQUFFO0FBQUcsVUFBSSxHQUFHLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEdBQUcsRUFBRTtBQUNwRixNQUFBQSxHQUFFLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFBRyxTQUFHLEtBQUssUUFBUUEsSUFBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ3ZFO0FBS0EsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEdBQWE7QUFDekMsWUFBTUEsS0FBSSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sSUFBSSxHQUFHLEVBQUUsVUFBVSxPQUFPLEVBQUUsYUFBYSxJQUFJO0FBQzdFLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQUcsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUM5RSxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFBRyxTQUFHLEtBQUssUUFBUUEsSUFBRyxFQUFFLEdBQUcsQ0FBQztBQUFBLElBQzdFO0FBQ0EsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEdBQWE7QUFDekMsWUFBTUEsS0FBSSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLE1BQU8sRUFBRSxTQUFTLEtBQUs7QUFDcEYsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUFHLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQzlFLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUFHLFNBQUcsS0FBS0EsRUFBQztBQUFBLElBQzdEO0FBQ0EsZUFBVyxLQUFNLEVBQUUsU0FBUyxDQUFDLEVBQWEsSUFBRyxLQUFLLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUNyRixRQUFJLElBQUksVUFBVSxFQUFFO0FBQ3BCLFFBQUksRUFBRSxPQUFPLFFBQVMsS0FBSSxRQUFRLEdBQUcsRUFBRSxXQUFXLENBQUM7QUFDbkQsUUFBSSxFQUFFLE9BQU8sU0FBVSxLQUFJLFNBQVMsR0FBRyxFQUFFLFdBQVcsQ0FBQztBQUVyRCxVQUFNLE9BQXdCLENBQUM7QUFDL0IsZUFBVyxLQUFLLEVBQUUsWUFBMEI7QUFDMUMsV0FBSyxLQUFLLElBQVUsY0FBUSxFQUFFO0FBQUEsUUFDNUIsSUFBVSxjQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUEsUUFDbEMsSUFBVSxpQkFBVyxFQUFFLGFBQWEsSUFBVSxZQUFNLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFBQSxRQUNwRixJQUFVLGNBQVEsR0FBRyxHQUFHLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUMvQjtBQUNBLFlBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxHQUFHLEVBQUUsVUFBVSxNQUFNLEVBQUUsTUFBTTtBQUFBLEVBQ3JEO0FBR0EsYUFBVyxLQUFNLE9BQU8sU0FBUyxDQUFDLEdBQWE7QUFDN0MsVUFBTSxNQUFNLFVBQVUsRUFBRSxRQUFRO0FBQ2hDLFFBQUksQ0FBQyxJQUFLO0FBSVYsUUFBSSxFQUFFLFNBQVMsU0FBUztBQUd0QixVQUFJLE9BQU8sYUFBYSxZQUFhO0FBQ3JDLFlBQU0sUUFBUSxJQUFVLG9CQUFjLEVBQUUsS0FBSyxFQUFFLEdBQUc7QUFDbEQsWUFBTSxPQUFzQjtBQUM1QixVQUFJLEtBQU0sT0FBTSxhQUFhO0FBQzdCLFlBQU0sYUFBYTtBQUNuQixVQUFJLE1BQU07QUFBTyxVQUFJLGNBQWM7QUFDbkM7QUFBQSxJQUNGO0FBQ0EsUUFBSSxNQUFrQztBQUN0QyxRQUFJLEVBQUUsU0FBUyxNQUFPLE9BQU0sUUFBUSxFQUFFLFFBQVEsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEdBQUcsRUFBRSxZQUFZLElBQUk7QUFDMUYsUUFBSSxFQUFFLFNBQVMsT0FBUSxPQUFNLFNBQVMsRUFBRSxRQUFRLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxHQUFHLEVBQUUsWUFBWSxHQUFJO0FBQzVGLFFBQUksRUFBRSxTQUFTLFFBQVMsT0FBTSxVQUFVLEVBQUUsUUFBUSxLQUFLLEVBQUUsVUFBVSxHQUFHLEVBQUUsUUFBUSxDQUFDO0FBQ2pGLFFBQUksRUFBRSxTQUFTLE9BQVEsT0FBTSxTQUFTLEVBQUUsUUFBUSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsR0FBRyxFQUFFLFdBQVcsRUFBRTtBQUMxRixRQUFJLEVBQUUsU0FBUyxRQUFTLE9BQU0sVUFBVSxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsSUFBSSxDQUFDO0FBQ3RFLFFBQUksRUFBRSxTQUFTLGNBQWUsT0FBTSxnQkFBZ0IsRUFBRSxRQUFRLEtBQUssRUFBRSxTQUFTLElBQUksRUFBRSxPQUFPLEtBQUssRUFBRSxRQUFRLENBQUM7QUFDM0csUUFBSSxFQUFFLFNBQVMsUUFBUyxPQUFNLFVBQVUsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLElBQUksQ0FBQztBQUN0RSxRQUFJLEVBQUUsU0FBUyxPQUFRLE9BQU0sU0FBUyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsSUFBSSxDQUFDO0FBQ3BFLFFBQUksRUFBRSxTQUFTLE1BQU8sT0FBTSxRQUFRLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFDbEUsUUFBSSxFQUFFLFNBQVMsWUFBYSxPQUFNLGNBQWMsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLE1BQU0sRUFBRSxRQUFRLENBQUM7QUFDMUYsUUFBSSxFQUFFLFNBQVMsU0FBVSxPQUFNLFdBQVcsRUFBRSxRQUFRLEtBQUssRUFBRSxVQUFVLElBQUksRUFBRSxRQUFRLENBQUM7QUFDcEYsUUFBSSxFQUFFLFNBQVMsVUFBVyxPQUFNLFdBQVcsRUFBRSxRQUFRLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsR0FBRyxDQUFDO0FBQ2hHLFFBQUksRUFBRSxTQUFTLFNBQVUsT0FBTSxXQUFXLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFBUSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDbkYsUUFBSSxFQUFFLFNBQVMsU0FBVSxPQUFNLFdBQVcsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLElBQUksQ0FBQztBQUN4RSxRQUFJLEVBQUUsU0FBUyxRQUFTLE9BQU0sVUFBVSxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsSUFBSSxDQUFDO0FBQ3RFLFFBQUksRUFBRSxTQUFTLE9BQVEsT0FBTSxTQUFTLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFDcEUsUUFBSSxFQUFFLFNBQVMsT0FBUSxPQUFNLFNBQVMsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDakUsUUFBSSxFQUFFLFNBQVMsT0FBUSxPQUFNLFNBQVMsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLElBQUksQ0FBQztBQUNwRSxRQUFJLEVBQUUsU0FBUyxTQUFVLE9BQU0sV0FBVyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsSUFBSSxDQUFDO0FBQ3hFLFFBQUksRUFBRSxTQUFTLE9BQVEsT0FBTSxTQUFTLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFDcEUsUUFBSSxFQUFFLFNBQVMsT0FBUSxPQUFNLFNBQVMsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLElBQUksQ0FBQztBQUNwRSxRQUFJLEVBQUUsU0FBUyxRQUFTLE9BQU0sVUFBVSxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUNuRSxRQUFJLEVBQUUsU0FBUyxPQUFRLE9BQU0sU0FBUyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUNqRSxhQUFTLEtBQUssS0FBSyxFQUFFLFFBQVEsQ0FBQztBQUFBLEVBQ2hDO0FBRUEsT0FBSyxTQUFTLGdCQUFnQixFQUFFLE9BQU8sUUFBUSxTQUFTLFdBQVcsa0JBQWtCO0FBQ3JGLFNBQU87QUFDVDtBQVNPLFNBQVMsa0JBQWtCLE1BQWdCLFVBQWtDLENBQUMsR0FBZ0I7QUFDbkcsUUFBTSxPQUFPLHNDQUFzQyxPQUFPO0FBQzFELE1BQUksU0FBUyxVQUFhLFNBQVMsS0FBTSxNQUFLLFNBQVMsYUFBYTtBQUVwRSxRQUFNLEtBQUssS0FBSyxTQUFTO0FBQ3pCLE1BQUksSUFBSTtBQUNOLFVBQU0sUUFBUyxHQUFHLFNBQVMsQ0FBQztBQU81QixVQUFNLFNBQTJCLENBQUM7QUFDbEMsVUFBTSxZQUFZLElBQVUsZUFBUztBQUNyQyxjQUFVLE9BQU87QUFDakIsY0FBVSxTQUFTLElBQUksR0FBRyxHQUFHLENBQUM7QUFDOUIsY0FBVSxTQUFTLGdCQUFnQjtBQUFBLE1BQ2pDLGVBQWU7QUFBQSxNQUNmLE9BQU8sRUFBRSxNQUFNLFVBQVUsZUFBZSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxPQUFPO0FBQUEsSUFDbkY7QUFDQSxTQUFLLElBQUksU0FBUztBQUNsQixXQUFPLEtBQUssU0FBUztBQUNyQixlQUFXLE1BQU8sT0FBTyxVQUFVLENBQUMsR0FBYTtBQUMvQyxZQUFNLElBQUksSUFBVSxlQUFTO0FBQzdCLFFBQUUsT0FBTyxHQUFHO0FBQ1osUUFBRSxTQUFTLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDN0QsUUFBRSxTQUFTLGdCQUFnQjtBQUFBLFFBQ3pCLGVBQWU7QUFBQSxRQUNmLE9BQU87QUFBQSxVQUFFLE1BQU07QUFBQSxVQUFVLGVBQWUsR0FBRztBQUFBLFVBQVUsTUFBTSxHQUFHO0FBQUEsVUFBTSxNQUFNLEdBQUc7QUFBQSxVQUNwRSxXQUFXLEdBQUc7QUFBQSxVQUFXLFVBQVUsR0FBRyxZQUFZO0FBQUEsVUFBTSxPQUFPLEdBQUcsUUFBUTtBQUFBLFFBQUc7QUFBQSxNQUN4RjtBQUNBLFdBQUssSUFBSSxDQUFDO0FBQ1YsYUFBTyxLQUFLLENBQUM7QUFBQSxJQUNmO0FBUUEsVUFBTSxZQUFZLE9BQU8sUUFBUyxHQUFHLGFBQWEsQ0FBQyxDQUF5QixFQUN6RSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQ3pFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxJQUFJLEdBQUksRUFBYSxFQUFFO0FBS3BELFVBQU0sVUFBVSxvQkFBSSxJQUE4QjtBQUNsRCxlQUFXLENBQUMsTUFBTSxPQUFPLEtBQUssT0FBTyxRQUFTLEdBQUcscUJBQXFCLENBQUMsQ0FBc0MsR0FBRztBQUM5RyxjQUFRLElBQUksTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQUEsSUFDaEM7QUFDQSxlQUFXLFFBQVEsT0FBTyxPQUFPLEtBQUssR0FBRztBQUN2QyxZQUFNLFFBQVMsTUFBYyxVQUFVLGVBQWUsYUFBYTtBQUNuRSxVQUFJLE9BQU8sVUFBVSxZQUFZLENBQUMsTUFBTztBQUN6QyxVQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssRUFBRyxTQUFRLElBQUksT0FBTyxDQUFDLENBQUM7QUFDOUMsY0FBUSxJQUFJLEtBQUssRUFBRyxLQUFLLElBQUk7QUFBQSxJQUMvQjtBQUVBLFNBQUssU0FBUyxnQkFBZ0I7QUFBQSxNQUM1QixHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtILE9BQU8sT0FBTyxLQUFLLEtBQUssRUFBRTtBQUFBLE1BQzFCO0FBQUEsTUFDQSxTQUFTLE9BQU8sT0FBUSxHQUFHLFdBQVcsQ0FBQyxDQUFvQztBQUFBLE1BQzNFO0FBQUEsTUFDQSxtQkFBbUIsQ0FBQyxHQUFHLFFBQVEsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxPQUFPLE9BQU8sRUFBRSxNQUFNLFFBQVEsRUFBRTtBQUFBLE1BQ3RGLE1BQU0sRUFBRSxPQUFPLFFBQVEsR0FBRyxVQUFVLENBQUMsR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDLEVBQUU7QUFBQSxJQUNwRTtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUFXTyxTQUFTLFlBQVksVUFBa0MsQ0FBQyxHQUFnQjtBQUM3RSxTQUFPLGtCQUFrQixRQUFXLE9BQU87QUFDN0M7IiwKICAibmFtZXMiOiBbInJnYiIsICJlMSIsICJlMiIsICJyZ2IiLCAiZyJdCn0K
