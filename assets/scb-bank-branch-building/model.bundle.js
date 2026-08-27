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

// scratch/scb-bank-branch-building/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createSCBBankBranchBuildingModel: () => createSCBBankBranchBuildingModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "scb-bank-branch-building",
  "name": "SCB Bank Branch Building",
  "exportName": "SCBBankBranchBuilding",
  "materials": [
    {
      "id": "wall",
      "color": 14207406,
      "roughness": 0.88,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 8949651,
      "roughness": 0.93,
      "metalness": 0
    },
    {
      "id": "purple",
      "color": 3678050,
      "roughness": 0.45,
      "metalness": 0
    },
    {
      "id": "fascia",
      "color": 3678050,
      "roughness": 0.4,
      "metalness": 0,
      "envMapIntensity": 0.6
    },
    {
      "id": "glass",
      "color": 7172976,
      "roughness": 0.13,
      "metalness": 0,
      "opacity": 0.94,
      "envMapIntensity": 1.1
    },
    {
      "id": "frame",
      "color": 3289395,
      "roughness": 0.52,
      "metalness": 0.25
    },
    {
      "id": "metal",
      "color": 9407634,
      "roughness": 0.45,
      "metalness": 0.35
    },
    {
      "id": "stone",
      "color": 10985878,
      "roughness": 0.6,
      "metalness": 0
    }
  ],
  "geometry": {
    "shellFront": 3.1,
    "plantMaterial": "metal",
    "fasciaWall": {
      "cy": 4.06,
      "cz": 2.98,
      "h": 1.08,
      "d": 0.36
    },
    "fasciaWallMaterial": "wall",
    "frameMaterial": "frame",
    "fascia": {
      "w": 7.7,
      "h": 0.86,
      "cy": 3.6,
      "cz": 3.32,
      "uvRect": [
        0,
        0.7744,
        1,
        1
      ],
      "curved": [
        {
          "x": 2.13,
          "y": 1.0725,
          "z": 3.45,
          "w": 0.46,
          "h": 1.795,
          "bulge": 0.07,
          "seg": 10,
          "uvRect": [
            0.906,
            0,
            1,
            0.756
          ]
        },
        {
          "x": 2.93,
          "y": 1.0725,
          "z": 3.45,
          "w": 0.46,
          "h": 1.795,
          "bulge": 0.07,
          "seg": 10,
          "uvRect": [
            0.906,
            0,
            1,
            0.756
          ]
        }
      ]
    },
    "glazing": {
      "cx": -1.2,
      "w": 4.6,
      "h": 2.955,
      "cy": 1.6425,
      "cz": 3.23
    },
    "glazingExtra": [
      [
        -0.8975,
        1.0325,
        3.305,
        0.665,
        1.735,
        0.07
      ],
      [
        -0.20250000000000007,
        1.0325,
        3.305,
        0.665,
        1.735,
        0.07
      ]
    ],
    "frame": [
      [
        -0.55,
        1.03,
        3.32,
        0.03,
        1.74,
        0.08
      ],
      [
        -0.9,
        0.21,
        3.32,
        0.66,
        0.1,
        0.08
      ],
      [
        -0.20000000000000007,
        0.21,
        3.32,
        0.66,
        0.1,
        0.08
      ],
      [
        -0.55,
        1.875,
        3.32,
        1.36,
        0.05,
        0.08
      ],
      [
        1.8499999999999999,
        1.255,
        3.405,
        0.03,
        2.19,
        0.03
      ],
      [
        2.41,
        1.255,
        3.405,
        0.03,
        2.19,
        0.03
      ],
      [
        2.13,
        2.335,
        3.405,
        0.59,
        0.03,
        0.03
      ],
      [
        2.6500000000000004,
        1.255,
        3.405,
        0.03,
        2.19,
        0.03
      ],
      [
        3.21,
        1.255,
        3.405,
        0.03,
        2.19,
        0.03
      ],
      [
        2.93,
        2.335,
        3.405,
        0.59,
        0.03,
        0.03
      ]
    ],
    "mullions": {
      "w": 0.05,
      "h": 2.8,
      "cy": 1.65,
      "cz": 3.29,
      "x": [
        -2.93
      ]
    },
    "frontFeature": {
      "name": "Purple fascia band, entrance portal and ATM surround",
      "material": "purple",
      "boxes": [
        [
          0,
          3.6,
          3.2,
          7.92,
          0.94,
          0.18
        ],
        [
          -1.35,
          1.17,
          3.22,
          0.24,
          2,
          0.2
        ],
        [
          0.25,
          1.17,
          3.22,
          0.24,
          2,
          0.2
        ],
        [
          -0.55,
          2.045,
          3.22,
          1.36,
          0.25,
          0.2
        ],
        [
          1.47,
          1.58,
          3.24,
          0.74,
          2.82,
          0.32
        ],
        [
          3.59,
          1.58,
          3.24,
          0.74,
          2.82,
          0.32
        ],
        [
          2.53,
          1.26,
          3.24,
          0.22,
          2.18,
          0.32
        ],
        [
          2.53,
          2.67,
          3.24,
          1.38,
          0.64,
          0.32
        ],
        [
          2.53,
          1.26,
          3.12,
          1.38,
          2.18,
          0.06
        ]
      ]
    },
    "sideFeature": {
      "name": "Metal fittings: glazing frame, door pulls, ATM kiosks and service door",
      "material": "metal",
      "boxes": [
        [
          -3.5,
          1.65,
          3.31,
          0.08,
          2.96,
          0.1
        ],
        [
          -1.2,
          0.21,
          3.31,
          4.68,
          0.08,
          0.1
        ],
        [
          -1.2,
          3.09,
          3.31,
          4.68,
          0.08,
          0.1
        ],
        [
          -1.2,
          2.21,
          3.31,
          4.68,
          0.08,
          0.1
        ],
        {
          "cyl": [
            -0.63,
            1,
            3.41,
            0.015,
            0.55,
            10
          ]
        },
        {
          "cyl": [
            -0.47000000000000003,
            1,
            3.41,
            0.015,
            0.55,
            10
          ]
        },
        [
          -0.63,
          1.22,
          3.37,
          0.03,
          0.03,
          0.06
        ],
        [
          -0.63,
          0.78,
          3.37,
          0.03,
          0.03,
          0.06
        ],
        [
          -0.47000000000000003,
          1.22,
          3.37,
          0.03,
          0.03,
          0.06
        ],
        [
          -0.47000000000000003,
          0.78,
          3.37,
          0.03,
          0.03,
          0.06
        ],
        [
          2.13,
          1.0725,
          3.27,
          0.46,
          1.795,
          0.22
        ],
        [
          2.93,
          1.0725,
          3.27,
          0.46,
          1.795,
          0.22
        ],
        [
          3.96,
          1.15,
          -0.3,
          0.06,
          2.2,
          1.3
        ],
        [
          3.96,
          2.9,
          1.3,
          0.06,
          0.44,
          0.52
        ],
        [
          3.96,
          2.9,
          2.05,
          0.06,
          0.44,
          0.52
        ]
      ]
    },
    "extraFeature": {
      "name": "Stone plinth",
      "material": "stone",
      "boxes": [
        [
          0,
          0.09,
          3.05,
          7.92,
          0.18,
          0.9
        ],
        [
          0,
          0.04,
          3.3,
          7.6,
          0.08,
          0.4
        ]
      ]
    },
    "condensers": [
      [
        -0.55,
        -0.95,
        0
      ],
      [
        0.45,
        -0.95,
        0
      ],
      [
        1.45,
        -0.95,
        0
      ],
      [
        2.35,
        -1.55,
        1.5707963267948966
      ]
    ]
  },
  "graphic": {
    "background": "#381F62",
    "baked": "data:image/webp;base64,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CBAgQIECBAgQIECBAgQIECBAgQIECBAgQIEB8DYnVdpQNN1I65hGyEsoi0B9NdWPDX4voAcd47/Po5LXHjbIbLkf506dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06FT5VBMMeRB+7sM+C1OFn8+Ri3yWloSZHaLJP86dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp02OsXY8ea67jU7chF6sjAsXkTJ8EeRqUNe83jH4j+dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOmyxIgO3e8+sj31i41zm7BC/e+LRnrnyc4xeU3ly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5WSYrIRKnJ1srq0Y9IsLF4KpgCp9q+nOYBTfFMFXu/arcdgKA6J7w0CBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgJiEk3E3xUsc0pFpwOsEPetcxZSbAPxwfC9bZs6tYHDMjTC8T3hoECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgJiEPB2uzX5/LwRZfBNPP5SToO4hNPT/gZmuMBogMSqmlunTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnQvdwJuW87Re1j0Gi0/0QwvE94aBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQICYhOqBT2/bVez6kl5Apf4QOdJ/nTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnQvdtzOhccrfutMeTUYR0aONMbuFM0mGF4nvDQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBATEJwVoy6uZKGyay1eoEhrY50n+dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dC928quGwYUWHBG07YmWvE94aBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQHxfK93REt5scq7Nbr4dcHMR5CiwXTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp0KXOpCj8SyhfRFEGicI1p6i+Naef1hvPx9P4asMvgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQICVOoQpeBD2ELLn6h3yU/lx5sUOA1wq+ZfFRRo5CmPfOG/OfX0m4NMJgbLUXvUF+J0T3hoECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIEB8PjmgUCYdt839v//foXW7YZFsbGa6auDR8oihCVA0v6UifgJQYXie8NAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIEBMQg06vUbSEhWwRnKsB6gWgM74ZV0UJY4fNHvRgudJrO8gu86GfwYXie8NAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIEBKVtgNQ5pKtrsgAN/k/5YcOdguC72sWiPiOScfucDNpFbNmt+GvxEUP4glYJ2+uJ7lHLozJbp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp0KsQJbz8rDNEgiKqVSvYZ1VX8UfekFqQX4nRPeGgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBASPsg+OEY9zxypbLUs3jHCFL3E+m9D+7YWLIRvSC/E6J7w0CBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIEB8YECucbUubcAEoQkZbxQfz4bby+US3Rf7Qk4o6zF9TvE6J7w0CBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAfGB9afWQOwoDUajUaQEPg2v25DbC8gvxOie8NAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgJic6HjmsrPsoc3e2bBCCL4JZPTrfP6F4Y6QX4nRPeGgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECA+G0ZUka5xC9Xa/Yz3qQSCQSAOaFTavq6rOkDDptH6axN+U5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5crH8qAoQDloef25vtCCcIVarVVLGLxOie8NAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQHxgSmDQELNnIZxo6QX4nRPeGgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgPi/aNgsT6FRgLZTS3oJFdfB0gvxOie8NAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAfGCEr6xStdH0SI85WehSzUY94nRPeGgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQID4vmYGLN6jXyOHkB1wQY6QX4nRPeGgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBATELDgNY1iJvqq3RJ/nTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnQvrKWbc9PsBIkhsPonvDQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgJijS5SyVdqiKj08ONZ/OnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTYzJ3hIDg0oIF7Ry9m19bp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp02WbxEBhflvSjdJs+uCfLvLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLlytFKnHcTG2/V0Sf506dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp0KX1Df5ra7oaNoU4lHarVX7xOie8NAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQHxgJ+cah/cULd8KkF+J0T3hoECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIEBMTL/yf6z/LxBjpBfidE94aBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIEBMQuZWLhbvffpbp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp0L5vsgTHjaAO6QX4nRPeGgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgJiFSt5Xh4XL+dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOmyzc1BKMOKkOCJ7w0CBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQICYmlDhrc5O8IQ+ET4L8TonvDQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIEBMQvKk+13zZgie8NAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECAlQkNRkEvNv2VeACBD0t06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06bH8IifvRFInvwAplIL8TonvDQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQHw8a3w7U8QAMhRHTTXie8NAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQID4eP1OQR+vjXlxt2241GIbV2wAP7/SK/+zBPUa/fePvN33tJAAAAAQYQAAAAAAAEKTD9MBFSj71dKV9Y6FMx14NCN7bleXmgPkYG6FyrPZcroi2NVuentlE8sEqrpECE2gLKAAAAIRJEvvvVlHJK35JAiovbkt9rpup8Eb3BmDlKaJIJeHc48uhJu3jyPYTFfKO+rt46iNg5BfoN9c9vJu15fAHhQQ0TyTSJQVlINoo1wSgr/iucfSycznzaCO366Gx05XwEWWt+zfYz4kpL2WleKHSmJi2TFllh8zt+PhY7+N5TDRJtEOkJZkeij74Roc7D9mgbgPMrT6vLsUQZP0T02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",
    "size": [
      2048,
      1024
    ],
    "bandFrac": 0.2255859375,
    "ops": [
      {
        "type": "text",
        "text": "SCB",
        "x0": 0.317,
        "x1": 0.474,
        "cy": 0.5,
        "size": 0.6,
        "fill": "#F4F2F6"
      },
      {
        "type": "text",
        "text": "\u25C6",
        "x0": 0.494,
        "x1": 0.563,
        "cy": 0.5,
        "size": 0.55,
        "fill": "#E9A21F"
      }
    ],
    "glass": {
      "baked": "data:image/webp;base64,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",
      "rect": [
        -3.5,
        0.17,
        1.1,
        3.13
      ],
      "roughness": 0.18
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
function createSCBBankBranchBuildingModel(options = {}) {
  const root = new THREE.Group();
  root.name = "SCB Bank Branch Building";
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
  add("parapet", "Parapet ring and fascia wall", boxes([
    [0, G.fasciaWall.cy, G.fasciaWall.cz, 8, G.fasciaWall.h, G.fasciaWall.d],
    [-3.88, 3.75, (SF - 0.3 - 3.5) / 2, 0.24, 0.4, SF + 3.2],
    [3.88, 3.75, (SF - 0.3 - 3.5) / 2, 0.24, 0.4, SF + 3.2],
    [0, 3.75, -3.38, 8, 0.4, 0.24],
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
  {
    const m = G.mullions;
    const mats = m.x.map((x) => new THREE.Matrix4().setPosition(x, m.cy, m.cz ?? 2.58));
    addInst("shopfront-mullions", "Shopfront mullions", new THREE.BoxGeometry(m.w, m.h, 0.08), G.frameMaterial, mats);
  }
  {
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
function createObjectModel(spec, options = {}) {
  const root = createSCBBankBranchBuildingModel(options);
  if (spec !== void 0 && spec !== null) root.userData.sculptSpec = spec;
  applyFasciaGraphic(root);
  applyGlassGraphic(root);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogU0NCIEJhbmsgQnJhbmNoIEJ1aWxkaW5nIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nIGFuZFxuICogaW5zdGFuY2luZyBhcmUgaGFuZC1yb2xsZWQgYmVsb3cgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSA4LjAwIHggNC42MCB4IDcuMDAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgc2hvcGZyb250IGZhY2luZyArWi5cbiAqIEJ1ZGdldCAoaGVybzJ4KTogPD0xNjAwMCB0cmlhbmdsZXMsIDw9MTIgZHJhdyBjYWxscywgPD04IG1hdGVyaWFscywgPD0xNiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBPbmUgb2YgdGhhaWtpdCdzIHNoYXJlZCByZXRhaWwtbW9kdWxlIGJ1aWxkaW5ncy4gVGhlIHNoZWxsIGZyb250IGZhY2Ugc2l0cyBhdCB6PSsyLjUwIHJhdGhlclxuICogdGhhbiB0aGUgZW52ZWxvcGUgZWRnZSBzbyB0aGUgZW50cmFuY2UgY2Fub3B5IGNhbiBjYW50aWxldmVyIGZvcndhcmQgYW5kIHN0aWxsIGxhbmQgZXhhY3RseSBvblxuICogdGhlIGRlY2xhcmVkIDcuMCBtIGRlcHRoLiBFdmVyeSBzdXJmYWNlIHBhaXIgb24gdGhlIGZhY2FkZSBpcyBkZWxpYmVyYXRlbHkgb2Zmc2V0IGluIGRlcHRoOlxuICogdHdvIHN1cmZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgdGVhciBpbnRvIGludGVybGVhdmVkIHRyaWFuZ2xlcyBhcyB0aGVcbiAqIGNhbWVyYSBtb3ZlcywgYW5kIGF1dGhvcmluZyBjb21wb25lbnRzIGZsdXNoIGFnYWluc3Qgb25lIGFub3RoZXIgcHJvZHVjZXMgdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwic2NiLWJhbmstYnJhbmNoLWJ1aWxkaW5nXCIsXG4gICAgXCJuYW1lXCI6IFwiU0NCIEJhbmsgQnJhbmNoIEJ1aWxkaW5nXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiU0NCQmFua0JyYW5jaEJ1aWxkaW5nXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwid2FsbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDE0MjA3NDA2LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjg4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZGVja1wiLFxuICAgICAgICBcImNvbG9yXCI6IDg5NDk2NTEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJwdXJwbGVcIixcbiAgICAgICAgXCJjb2xvclwiOiAzNjc4MDUwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQ1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZmFzY2lhXCIsXG4gICAgICAgIFwiY29sb3JcIjogMzY3ODA1MCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC40LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAwLjZcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJnbGFzc1wiLFxuICAgICAgICBcImNvbG9yXCI6IDcxNzI5NzYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMTMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwib3BhY2l0eVwiOiAwLjk0LFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAxLjFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJmcmFtZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDMyODkzOTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNTIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMjVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJtZXRhbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDk0MDc2MzQsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNDUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMzVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzdG9uZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDEwOTg1ODc4LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjYsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJzaGVsbEZyb250XCI6IDMuMSxcbiAgICAgIFwicGxhbnRNYXRlcmlhbFwiOiBcIm1ldGFsXCIsXG4gICAgICBcImZhc2NpYVdhbGxcIjoge1xuICAgICAgICBcImN5XCI6IDQuMDYsXG4gICAgICAgIFwiY3pcIjogMi45OCxcbiAgICAgICAgXCJoXCI6IDEuMDgsXG4gICAgICAgIFwiZFwiOiAwLjM2XG4gICAgICB9LFxuICAgICAgXCJmYXNjaWFXYWxsTWF0ZXJpYWxcIjogXCJ3YWxsXCIsXG4gICAgICBcImZyYW1lTWF0ZXJpYWxcIjogXCJmcmFtZVwiLFxuICAgICAgXCJmYXNjaWFcIjoge1xuICAgICAgICBcIndcIjogNy43LFxuICAgICAgICBcImhcIjogMC44NixcbiAgICAgICAgXCJjeVwiOiAzLjYsXG4gICAgICAgIFwiY3pcIjogMy4zMixcbiAgICAgICAgXCJ1dlJlY3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMC43NzQ0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMVxuICAgICAgICBdLFxuICAgICAgICBcImN1cnZlZFwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ4XCI6IDIuMTMsXG4gICAgICAgICAgICBcInlcIjogMS4wNzI1LFxuICAgICAgICAgICAgXCJ6XCI6IDMuNDUsXG4gICAgICAgICAgICBcIndcIjogMC40NixcbiAgICAgICAgICAgIFwiaFwiOiAxLjc5NSxcbiAgICAgICAgICAgIFwiYnVsZ2VcIjogMC4wNyxcbiAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgXCJ1dlJlY3RcIjogW1xuICAgICAgICAgICAgICAwLjkwNixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgMC43NTZcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwieFwiOiAyLjkzLFxuICAgICAgICAgICAgXCJ5XCI6IDEuMDcyNSxcbiAgICAgICAgICAgIFwielwiOiAzLjQ1LFxuICAgICAgICAgICAgXCJ3XCI6IDAuNDYsXG4gICAgICAgICAgICBcImhcIjogMS43OTUsXG4gICAgICAgICAgICBcImJ1bGdlXCI6IDAuMDcsXG4gICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgIFwidXZSZWN0XCI6IFtcbiAgICAgICAgICAgICAgMC45MDYsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgIDAuNzU2XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJnbGF6aW5nXCI6IHtcbiAgICAgICAgXCJjeFwiOiAtMS4yLFxuICAgICAgICBcIndcIjogNC42LFxuICAgICAgICBcImhcIjogMi45NTUsXG4gICAgICAgIFwiY3lcIjogMS42NDI1LFxuICAgICAgICBcImN6XCI6IDMuMjNcbiAgICAgIH0sXG4gICAgICBcImdsYXppbmdFeHRyYVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAtMC44OTc1LFxuICAgICAgICAgIDEuMDMyNSxcbiAgICAgICAgICAzLjMwNSxcbiAgICAgICAgICAwLjY2NSxcbiAgICAgICAgICAxLjczNSxcbiAgICAgICAgICAwLjA3XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC4yMDI1MDAwMDAwMDAwMDAwNyxcbiAgICAgICAgICAxLjAzMjUsXG4gICAgICAgICAgMy4zMDUsXG4gICAgICAgICAgMC42NjUsXG4gICAgICAgICAgMS43MzUsXG4gICAgICAgICAgMC4wN1xuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJmcmFtZVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAtMC41NSxcbiAgICAgICAgICAxLjAzLFxuICAgICAgICAgIDMuMzIsXG4gICAgICAgICAgMC4wMyxcbiAgICAgICAgICAxLjc0LFxuICAgICAgICAgIDAuMDhcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjksXG4gICAgICAgICAgMC4yMSxcbiAgICAgICAgICAzLjMyLFxuICAgICAgICAgIDAuNjYsXG4gICAgICAgICAgMC4xLFxuICAgICAgICAgIDAuMDhcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjIwMDAwMDAwMDAwMDAwMDA3LFxuICAgICAgICAgIDAuMjEsXG4gICAgICAgICAgMy4zMixcbiAgICAgICAgICAwLjY2LFxuICAgICAgICAgIDAuMSxcbiAgICAgICAgICAwLjA4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC41NSxcbiAgICAgICAgICAxLjg3NSxcbiAgICAgICAgICAzLjMyLFxuICAgICAgICAgIDEuMzYsXG4gICAgICAgICAgMC4wNSxcbiAgICAgICAgICAwLjA4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjg0OTk5OTk5OTk5OTk5OTksXG4gICAgICAgICAgMS4yNTUsXG4gICAgICAgICAgMy40MDUsXG4gICAgICAgICAgMC4wMyxcbiAgICAgICAgICAyLjE5LFxuICAgICAgICAgIDAuMDNcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuNDEsXG4gICAgICAgICAgMS4yNTUsXG4gICAgICAgICAgMy40MDUsXG4gICAgICAgICAgMC4wMyxcbiAgICAgICAgICAyLjE5LFxuICAgICAgICAgIDAuMDNcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuMTMsXG4gICAgICAgICAgMi4zMzUsXG4gICAgICAgICAgMy40MDUsXG4gICAgICAgICAgMC41OSxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDAuMDNcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuNjUwMDAwMDAwMDAwMDAwNCxcbiAgICAgICAgICAxLjI1NSxcbiAgICAgICAgICAzLjQwNSxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDIuMTksXG4gICAgICAgICAgMC4wM1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy4yMSxcbiAgICAgICAgICAxLjI1NSxcbiAgICAgICAgICAzLjQwNSxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDIuMTksXG4gICAgICAgICAgMC4wM1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi45MyxcbiAgICAgICAgICAyLjMzNSxcbiAgICAgICAgICAzLjQwNSxcbiAgICAgICAgICAwLjU5LFxuICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgMC4wM1xuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJtdWxsaW9uc1wiOiB7XG4gICAgICAgIFwid1wiOiAwLjA1LFxuICAgICAgICBcImhcIjogMi44LFxuICAgICAgICBcImN5XCI6IDEuNjUsXG4gICAgICAgIFwiY3pcIjogMy4yOSxcbiAgICAgICAgXCJ4XCI6IFtcbiAgICAgICAgICAtMi45M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJmcm9udEZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJQdXJwbGUgZmFzY2lhIGJhbmQsIGVudHJhbmNlIHBvcnRhbCBhbmQgQVRNIHN1cnJvdW5kXCIsXG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJwdXJwbGVcIixcbiAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDMuNixcbiAgICAgICAgICAgIDMuMixcbiAgICAgICAgICAgIDcuOTIsXG4gICAgICAgICAgICAwLjk0LFxuICAgICAgICAgICAgMC4xOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTEuMzUsXG4gICAgICAgICAgICAxLjE3LFxuICAgICAgICAgICAgMy4yMixcbiAgICAgICAgICAgIDAuMjQsXG4gICAgICAgICAgICAyLFxuICAgICAgICAgICAgMC4yXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjI1LFxuICAgICAgICAgICAgMS4xNyxcbiAgICAgICAgICAgIDMuMjIsXG4gICAgICAgICAgICAwLjI0LFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgIDAuMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNTUsXG4gICAgICAgICAgICAyLjA0NSxcbiAgICAgICAgICAgIDMuMjIsXG4gICAgICAgICAgICAxLjM2LFxuICAgICAgICAgICAgMC4yNSxcbiAgICAgICAgICAgIDAuMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS40NyxcbiAgICAgICAgICAgIDEuNTgsXG4gICAgICAgICAgICAzLjI0LFxuICAgICAgICAgICAgMC43NCxcbiAgICAgICAgICAgIDIuODIsXG4gICAgICAgICAgICAwLjMyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjU5LFxuICAgICAgICAgICAgMS41OCxcbiAgICAgICAgICAgIDMuMjQsXG4gICAgICAgICAgICAwLjc0LFxuICAgICAgICAgICAgMi44MixcbiAgICAgICAgICAgIDAuMzJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuNTMsXG4gICAgICAgICAgICAxLjI2LFxuICAgICAgICAgICAgMy4yNCxcbiAgICAgICAgICAgIDAuMjIsXG4gICAgICAgICAgICAyLjE4LFxuICAgICAgICAgICAgMC4zMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi41MyxcbiAgICAgICAgICAgIDIuNjcsXG4gICAgICAgICAgICAzLjI0LFxuICAgICAgICAgICAgMS4zOCxcbiAgICAgICAgICAgIDAuNjQsXG4gICAgICAgICAgICAwLjMyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjUzLFxuICAgICAgICAgICAgMS4yNixcbiAgICAgICAgICAgIDMuMTIsXG4gICAgICAgICAgICAxLjM4LFxuICAgICAgICAgICAgMi4xOCxcbiAgICAgICAgICAgIDAuMDZcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInNpZGVGZWF0dXJlXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiTWV0YWwgZml0dGluZ3M6IGdsYXppbmcgZnJhbWUsIGRvb3IgcHVsbHMsIEFUTSBraW9za3MgYW5kIHNlcnZpY2UgZG9vclwiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwibWV0YWxcIixcbiAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTMuNSxcbiAgICAgICAgICAgIDEuNjUsXG4gICAgICAgICAgICAzLjMxLFxuICAgICAgICAgICAgMC4wOCxcbiAgICAgICAgICAgIDIuOTYsXG4gICAgICAgICAgICAwLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0xLjIsXG4gICAgICAgICAgICAwLjIxLFxuICAgICAgICAgICAgMy4zMSxcbiAgICAgICAgICAgIDQuNjgsXG4gICAgICAgICAgICAwLjA4LFxuICAgICAgICAgICAgMC4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMS4yLFxuICAgICAgICAgICAgMy4wOSxcbiAgICAgICAgICAgIDMuMzEsXG4gICAgICAgICAgICA0LjY4LFxuICAgICAgICAgICAgMC4wOCxcbiAgICAgICAgICAgIDAuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTEuMixcbiAgICAgICAgICAgIDIuMjEsXG4gICAgICAgICAgICAzLjMxLFxuICAgICAgICAgICAgNC42OCxcbiAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAwLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY3lsXCI6IFtcbiAgICAgICAgICAgICAgLTAuNjMsXG4gICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgIDMuNDEsXG4gICAgICAgICAgICAgIDAuMDE1LFxuICAgICAgICAgICAgICAwLjU1LFxuICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjeWxcIjogW1xuICAgICAgICAgICAgICAtMC40NzAwMDAwMDAwMDAwMDAwMyxcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgMy40MSxcbiAgICAgICAgICAgICAgMC4wMTUsXG4gICAgICAgICAgICAgIDAuNTUsXG4gICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC42MyxcbiAgICAgICAgICAgIDEuMjIsXG4gICAgICAgICAgICAzLjM3LFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAwLjA2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC42MyxcbiAgICAgICAgICAgIDAuNzgsXG4gICAgICAgICAgICAzLjM3LFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAwLjA2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC40NzAwMDAwMDAwMDAwMDAwMyxcbiAgICAgICAgICAgIDEuMjIsXG4gICAgICAgICAgICAzLjM3LFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAwLjA2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC40NzAwMDAwMDAwMDAwMDAwMyxcbiAgICAgICAgICAgIDAuNzgsXG4gICAgICAgICAgICAzLjM3LFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAwLjA2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjEzLFxuICAgICAgICAgICAgMS4wNzI1LFxuICAgICAgICAgICAgMy4yNyxcbiAgICAgICAgICAgIDAuNDYsXG4gICAgICAgICAgICAxLjc5NSxcbiAgICAgICAgICAgIDAuMjJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuOTMsXG4gICAgICAgICAgICAxLjA3MjUsXG4gICAgICAgICAgICAzLjI3LFxuICAgICAgICAgICAgMC40NixcbiAgICAgICAgICAgIDEuNzk1LFxuICAgICAgICAgICAgMC4yMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NixcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAtMC4zLFxuICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgIDIuMixcbiAgICAgICAgICAgIDEuM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NixcbiAgICAgICAgICAgIDIuOSxcbiAgICAgICAgICAgIDEuMyxcbiAgICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgICAwLjQ0LFxuICAgICAgICAgICAgMC41MlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NixcbiAgICAgICAgICAgIDIuOSxcbiAgICAgICAgICAgIDIuMDUsXG4gICAgICAgICAgICAwLjA2LFxuICAgICAgICAgICAgMC40NCxcbiAgICAgICAgICAgIDAuNTJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImV4dHJhRmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIlN0b25lIHBsaW50aFwiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwic3RvbmVcIixcbiAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAzLjA1LFxuICAgICAgICAgICAgNy45MixcbiAgICAgICAgICAgIDAuMTgsXG4gICAgICAgICAgICAwLjlcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjA0LFxuICAgICAgICAgICAgMy4zLFxuICAgICAgICAgICAgNy42LFxuICAgICAgICAgICAgMC4wOCxcbiAgICAgICAgICAgIDAuNFxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiY29uZGVuc2Vyc1wiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAtMC41NSxcbiAgICAgICAgICAtMC45NSxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLjQ1LFxuICAgICAgICAgIC0wLjk1LFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEuNDUsXG4gICAgICAgICAgLTAuOTUsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi4zNSxcbiAgICAgICAgICAtMS41NSxcbiAgICAgICAgICAxLjU3MDc5NjMyNjc5NDg5NjZcbiAgICAgICAgXVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJncmFwaGljXCI6IHtcbiAgICAgIFwiYmFja2dyb3VuZFwiOiBcIiMzODFGNjJcIixcbiAgICAgIFwiYmFrZWRcIjogXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdScnc2QUFCWFJVSlFWbEE0SUxBNkFBQndnUUtkQVNvQUNBQUVQa2tra1VZaW9pUW1JSk9ZVU1BSkNXbHUrd09uazVsL3Z6YmxMTGc2MHYvaC9QZDhsdzMvb0ROMVUraVFOOTEvK3g5dS81SVBTNDhhSCsxa1k4Yy9zZnpBMjVMdm41VWYyMzl0dXRkNHI4RC8yUC93OWhZaG4yUzk1dnp2OW4vYjcvYmYvLy8vL2J6L2pmOEwyZS9xVC9nZTRCK2t2K2kvdUg3VmY1VC8vLy8vNnF2VzM1Z1AxOC83WCtzOTQ3L1ZmdDM3bWY4Ri9wZjg1N2dmODcvd25XVCtnZi9QUDhsNlozN2MvQ2grMlAvcC96ZndLL3I1L3hmei8rUUQwQU9wZjdQLzMvdDMvdzM5Ni9IRHFJWnYxeTM4aisyMzczKzcvVkgwYjhBNzhrL21uK1QrMkxpd3RaL2NyMUJlNmYrNi90SGp5L00vOWk5bHZzaC94L2NBNE9hZ0wvTi83ci81ZjhyN0JuL1ovbWZTRitmLzZILzQvNmo0R2Y1Ny9iUCt4NjVudEkvYlAyZ3dVdXlDMUlMOFRvbnZEUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFoWXlRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFTSC9kSENaYThUM2hvRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVCOEtIQmZRaHlxWWVtazZiYU9wenJIKzJBLzhmMVBsZHB3TXVIZkM2ZTkzSU1NbmNHaWNCMGZORjA3TjdseXNCQ0NxVUlBQndEempSRWM5SDl2ZmNweTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VFcFBJVmlsL1VSZ0paS2x1NXdhTFZtR0o5Z0ZodS83eWFNMTVyNFNKNU5TVlZnY1JYWHJ6d2dmUEg2c0lRQlRzc2NGbFloWkg4UlFaYzBnR1RNVUtud05TNkQ4Z0FkVDk2NUlZOURoSWlJSFpqcEJmaWRFOTRhQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFmRU5XRlo5QWFrSEc0NVYxelNteDVkb3h5NkJ1dVFuSnVTMFgvY2I0UDZvdlRaMG85WWJ0Ly9paVNIcEtxQUhhTXp2QzlidmhwQUl1S1NhbGdJeTZtRG10RlJRZDZFa0JsWTVEQWs3ZWlmYUJBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUQ0SUVySTZXSWFrSkNFTXZTczRYQ1NONW1id3I5ZUlWbmlBUENIRk9sTDA1UW1wM0xWNkRscWt3YWJpMTdUNkNOR3ZKblN0RWlDdnRxcElWSGdEeUFBcmNRaTFwcEVkK1l0T25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNkVhN1o0TjlrYkhOTG1mak5QWjMwUjlISUxob1JlMDl6bExSTHlVNm9YSlIySEM0MDhycFFHVk5nVm1nM3NUQVFDT1NHdU56WittTzloQ1oxMk5ER3g1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExoS1F4aFNLeWQzTTNMQjhZM1BVYmdoT2h3V1oyYndDU05YbFU1Kzd4OVV4dkRHQ1cxQVh3aUd1TU1rVEpZZUpIYmhXZ0pHMVQ0VG5icVg4UlFLOE5BZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdKR3ZLc3M4OHYxcjk3Tkx5UDVyUDhuSk95bndoWW8vTkRaZm5tZnM4Q2xKTkxHSFo3cndVYThnVUtRUC9XWDJTRUtzcmU3dkJWSUQ5N1Y1VFZLUEVJR2Q4UytlQXJjTmswbGhrY3JvMFJyclRZUUc2UDEwejg2Y2M4TWRJTDhUb252RFFJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FFaXg0U3ArVHVMbWNOVnNqU2I1VGFGM2hIVE1TUEl0MTBCMDdHd1ArWktPcUYveDVTL0NzTHJ3M3pmamNqZFdYbnVuQ05YSU1wWE42L2JxTXpOSkNzVTN6SkZ2dERBSzl5b1NrVmdrUitGOUViRUFPeEw1cmlqOWpmNm9INkhBSWN4N3UveUZsSWgrR09rRitKMFQzaG9FQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFRFRRZ2dabmxrSTMvT25UcCtvdkRvTWhLTmh3VFI3QWNCak9seDVQeXZmRjEvK0hJM3phbEtjUWJ3d0xVZ3Z4T2llOE5BZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUU5FblEzdVU1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjckkzMVlSb0ZnTTBqQVdTb0JsRExjY0kxWnhlTXZHZHhUREtWS0JuTXBtaUd4YW5SUGVHZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQjhEWW5WZHBRTk4xSTY1aEd5RXNvaTBCOU5kV1BEWDR2b0FjZDQ3L1BvNUxYSGpiSWJMa2Y1MDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZGVDVWQk1NZVJCKzdzTStDMU9GbjgrUmkzeVdsb1NaSGFMSlA4NmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwMk9zWFk4ZWE2N2pVN2NoRjZzakFzWGtUSjhFZVJxVU5lODNqSDRqK2RPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPbXl4SWdPM2U4K3NqMzFpNDF6bTdCQy9lK0xSbnJueWM0eGVVM2x5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NVdTWXJJUktuSjFzcnEwWTlJc0xGNEtwZ0NwOXErbk9ZQlRmRk1GWHUvYXJjZGdLQTZKN3cwQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnSmlFazNFM3hVc2MwcEZwd09zRVBldGN4WlNiQVB4d2ZDOWJaczZ0WUhETWpUQzhUM2hvRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ0ppRVBCMnV6WDUvTHdSWmZCTlBQNVNUb080aE5QVC9nWm11TUJvZ01TcW1sdW5UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25RdmR3SnVXODdSZTFqMEdpMC8wUXd2RTk0YUJBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlDWWhPcUJUMi9iVmV6NmtsNUFwZjRRT2RKL25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25RdmR0ek9oY2NyZnV0TWVUVVlSMGFPTk1idUZNMG1HRjRudkRRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQVRFSndWb3k2dVpLR3lheTFlb0Voclk1MG4rZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZEM5MjhxdUd3WVVXSEJHMDdZbVd2RTk0YUJBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUh4Zks5M1JFdDVzY3E3TmJyNGRjSE1SNUNpd1hUcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDBLWE9wQ2o4U3loZlJGRUdpY0kxcDZpK05hZWYxaHZQeDlQNGFzTXZnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlDVk9vUXBlQkQyRUxMbjZoM3lVL2x4NXNVT0Exd3ErWmZGUlJvNUNtUGZPRy9PZlgwbTROTUpnYkxVWHZVRitKMFQzaG9FQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVCOFBqbWdVQ1lkdDgzOXYvL2ZvWFc3WVpGc2JHYTZhdURSOG9paENWQTB2NlVpZmdKUVlYaWU4TkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVCTVFnMDZ2VWJTRWhXd1JuS3NCNmdXZ003NFpWMFVKWTRmTkh2Umd1ZEpyTzhndTg2R2Z3WVhpZThOQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUJLVnRnTlE1cEt0cnNnQU4vay81WWNPZGd1Qzcyc1dpUGlPU2NmdWNETnBGYk5tdCtHdnhFVVA0Z2xZSjIrdUo3bEhMb3pKYnAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwS3NRSmJ6OHJETkVnaUtxVlN2WVoxVlg4VWZla0ZxUVg0blJQZUdnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQVNQc2crT0VZOXp4eXBiTFVzM2pIQ0ZMM0UrbTlEKzdZV0xJUnZTQy9FNko3dzBDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUI4WUVDdWNiVXViY0FFb1FrWmJ4UWZ6NGJieStVUzNSZjdRazRvNnpGOVR2RTZKN3cwQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFmR0I5YWZXUU93b0RVYWpVYVFFUGcydjI1RGJDOGd2eE9pZThOQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ0ppYzZIam1zclBzb2MzZTJiQkNDTDRKWlBUcmZQNkY0WTZRWDRuUlBlR2dRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0ErRzBaVWthNXhDOVhhL1l6M3FRU0NRU0FPYUZUYXZxNnJPa0REcHRINmF4TitVNWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWNySDhxQW9RRGxvZWYyNXZ0Q0NjSVZhclZWTEdMeE9pZThOQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FIeGdTbURRRUxObklaeG82UVg0blJQZUdnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdQaS9hTmdzVDZGUmdMWlRTM29KRmRmQjBndnhPaWU4TkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWZHQ0VyNnhTdGRIMFNJODVXZWhTelVZOTRuUlBlR2dRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRDR2bVlHTE42alh5T0hrQjF3UVk2UVg0blJQZUdnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQVRFTERnTlkxaUp2cXEzUkovblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblF2cktXYmM5UHNCSWtoc1BvbnZEUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnSmlqUzVTeVZkcWlLajA4T05aL09uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVFl6SjNoSURnMG9JRjdSeTltMTlicDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDAyV2J4RUJoZmx2U2pkSnMrdUNmTHZMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHk1Y3VYTGx5NWN1WExseTVjdVhMbHl0RktuSGNURzIvVjBTZjUwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwS1gxRGY1cmE3b2FOb1U0bEhhclZYN3hPaWU4TkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSHhnSitjYWgvY1VMZDhLa0YrSjBUM2hvRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQk1UTC95ZjZ6L0x4QmpwQmZpZEU5NGFCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQk1RdVpXTGhidmZmcGJwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMEw1dnNnVEhqYUFPNlFYNG5SUGVHZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnSmlGU3Q1WGg0WEwrZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9teXpjMUJLTU9La09DSjd3MENCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJQ1ltbERocmM1TzhJUStFVDRMOFRvbnZEUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVCTVF2S2srMTN6WmdpZThOQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNBbFFrTlJrRXZOdjJWZUFDQkQwdDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2ZE9uVHAwNmRPblRwMDZkT25UcDA2Ykg4SWlmdlJGSW52d0FwbElMOFRvbnZEUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSHc4YTN3N1U4UUFNaFJIVFRYaWU4TkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUVDQkFnUUlFQ0JBZ1FJRUNCQWdRSUQ0ZVAxT1FSK3ZqWGx4dDIyNDFHSWJWMndBUDcvU0svK3pCUFVhL2ZlUHZOMzN0SkFBQUFBUVlRQUFBQUFBQUVLVEQ5TUJGU2o3MWRLVjlZNkZNeDE0TkNON2JsZVhtZ1BrWUc2RnlyUFpjcm9pMk5WdWVudGxFOHNFcXJwRUNFMmdMS0FBQUFJUkpFdnZ2VmxISkszNUpBaW92Ymt0OXJwdXA4RWIzQm1EbEthSklKZUhjNDh1aEp1M2p5UFlURmZLTytydDQ2aU5nNUJmb045Yzl2SnUxNWZBSGhRUTBUeVRTSlFWbElOb28xd1Nnci9pdWNmU3ljem56YUNPMzY2R3gwNVh3RVdXdCt6Zll6NGtwTDJXbGVLSFNtSmkyVEZsbGg4enQrUGhZNytONVREUkp0RU9rSlprZWlqNzRSb2M3RDltZ2JnUE1yVDZ2THNVUVpQMFQwMlg3bUhjSTQ3QlRDK3NnZmtFNGdpLzBSWFFhTlpEK0FkTTRjaFZ2OC9UNEE1b1Q4MlF5K0MwTWU3d2E4VExCcDllTllUSXkrWlBFUmZka3dpS3V5MTlsd0Fucnc3eXFtOEF2bHBqZFBJVUdKc1BuOHFBWnZCamxicUlIZVpUTlRhTWF0WHNjNjM2bXMwOVRZVE5ydURJRjVMZGpQL2VyeTY0ZmtHZGlqVnpyNUV3Z1Z0UVVMNVdOa1hsRzlza1gvbytiUGc3dEdsN0xpbWpJdElBazVWYXNBWkxSMlFCN2hHWE9OR2lXY2dWNGk5Q2ZuMjBYMGh0NU1uSTRCUnFjU3p1bXhjTmtlUHcxNHZ0SFFSNEFtMFZINDloNmlvU0piSDIwalp4QWwxWWpSL0RGR0VLTndodlVQWWpFVFFHRUJhSUNiT1dDVlYyWVMrV2NjN3lJUzBpK25DNjR6S1BwaWRrelM2VTlCMFI1djd2ekt6cjJlMEl0Z2RVeUNPS3BxV0RHSzlLZFRXbllYdURJT3NJcXRvTDFPQlgvdWYrTWVLdy8vL0RTWW5ZbEltQzFWbzU1UnZnY2RSYU8xc1VMOUF5djJTNDhUdnF6KzVUUVB3MWdBQUFCVVZ2dllSM2xkQ3BxWHNPNnEvZWIwd3dRb2wxZGJ3bGl3L3dJejVVUjg4ZTBaM3ZxV3B4V3hDNVZRQVNmM2NqdUU5bDJrTExlU2x1N2FNSGN6MXVvTGVQOWo1ZTFmMkord1RncEJ5MXVyQ0FCQ0djRmpIcWZZQVduNlRINStEOEJKMHJybHBKcm11aHBIUlpPUEVaTWMwZktMRDF0L2dtY1AvTUhoM2YvYWxkcHZBbkwyVC9rVWFvdG9MQWY2Um9aMlRBTlF5allVdm5aNExiYnpwTE8ydWpkdThlSStMQjdHYjVkZG5pUytOM3dGVnYrM2Z6VVlqNFpkbGZmYlZVMnYvTHZmK1JFMHZ1bWJNWm1QZTkvSUxKUkZQN1dyYzRybTc1NFlEc1B5c2pSTnlLWEFlWldOOW5mY1hPS0ZmcEFaTXZVdzFLbUJ5S1hPSm1XdFg3VWZlbllGMFI0M2MxTFM1MCtDa0c3MmZzNHFmdlRmU3F6VmR2am92RU5NaU1iN2lwZ3E5RHNJZlhUY0Zvd2psbzlaVXpBUWVBK0RPaFJnWk5ESitnNzhRd1REUjZGTzJoOHhpVXBHQnRkKzBwU2FiQVdrMkRucVk5U1ZQOFUxT1doNXpkSjQvMzBaVkhKY3A2U1dweEZXMlBEUklYUUUwR2tkdzdyWFUzVEF0b3UwVG4vNEQwWDVtaEJwdEFYWU9sOGI3ZXNkbTMvU1AxajVZWk96WGZyM05lSTBtYTZ2MUxIUG5aaVBUcVlESkwzL3BMUW0rQzVmRm9JSit5eXdQNzRXU0UvclVCYmZtZlZteGlKOVc3bndDWGQzMGl4ZEF4VVh0SFhML2ViMi9zU0JpbkNKUDFaaWV4SEcrZ1BpYkZ3MXlib3VKdlVQWEZBbmV3bVlkK1pITXo5SVd4WWNIcVU3a0ZQK3lSNHZINVFBNTdLTmZSZVZzLzN2Y0ovNVp4enZJZno1WnhuMWcvTjg4WW5kMlQycFlFS3ZvRWVsamZFUTNkaG1aMXZleldTeVZKVnhEbGFVU3VJNVdOTXJ0NUd1RDZnYmtMaXltakpFUENxU1pBZ0ZuR3FiKzB5bURLQ3h5c0gyZTZMa2sza2tJMUQ1YzZiR0Y2QWhpRVBkOFBpRlU4N2RRVkFjQVY0M1ladktmSW8vc0NVRWs5ZXFrZzQ0SU1IRzhBTXNZV1pGb1kxeEJyQ25GbnRZR3k0SzVCYXIzOWFHMGc5VzRUWHlndDZHNm45ZHJ4a1doZHZaMFUzbHI4SVNPeUhISHRMY1ZNdEtIK3BmYVFtQjlSamo5S0JHNHhldkY5ZklvSjV0Qll1SDgzVmFiNFloS09JTm92cnZLSVZGM3k1dTJMV3pFNnhiTU5Jc2I4ajE2OFRiTnhtVjdZa0tQOTNhZ1lBQ1pRSkVIamphY2R2NjU1bXRTZk5zMkZjOHFsOWxmTGpVdmlKQ1FBQUFkT21tVkhidkFwcU85aGR3RHg2d2lXN1k0N3lsSXJWRW80RWdPK3VRTm9uT09sWXVUL0RTRlFSODhNOXR0UGUrKzJkM2tiTjczS1luRTR0RHl1UFdkMnNOSnJnVW1ENG5BT3pEYk5INUpqSW5HMVJSMkRvdVlBek83VStYUUxubFFGd1hOZnhzei80ZGtNamZsUDVvVVVpbktSRjhPMHFJV3pqUkFOTWFJT1A0V1pQRnNpbVF2WXMwZ2s4NmJHVTl6OEFic1UzYUF2dW1lTDFlSzJ0NmRoT21mUnBvVWhLTE44L0dnQXdPcTFuMnRBVHkxYXBLaVhqWW5OU2NNYVBwdFcvclRPOTJyYXBCL1gzUDFqa3lyZFBmMy96ZUFkWC9YYVNuMHF1SG4xbjJXeW1UOFh2NEQvME4wTEorQW5QZXZ1Zm9OY2ZrMzNiQTM5TnpON1FPY0ViOVpLT1J0WmtKN1l5M0lqbXhJNmZVN3dCdFJ2cWFtekIvRkZQNDdsMUVzUXYvUENaUDRpVmJ3ci9HMElKc1MrTm90c3ZsZnk3Z1l0V0tFWmZWYmNBcG5qQ2d5c3lHdlVZZERCZjJ3L1R2ekxBV0p2clc5eVhHV28vZnFDWDlmKzFFZ0k5NnZyTHRmUUhPbGd0TmhOL1poSkdpak9uYjZHOTNFMGNpdFladEZxQk1SV3ZDb3paSTFuSE41QkgvNmh4cVBlK0g1cklRcmhOVit5OHUvMlpuY0p0U0VqZkN3WXRWcXhXRDNPcjA1bzN2TWtLWHFVa2VnNzZRZUpDbjlGWmlPN3Z0UDNKcWwzOWVhbStuZmJSVTVhcDJSUHFoY05KZUdxMm9IdGN3K2Z1U2YwWjBmZWlxdkduOHZVMWdoTFN1UXV2SG9Wa3NUbmJ0Nm9rV3phR2wveXlVRDBQL29sZVpiRi9HWjJwYUxEUy9lM1gwR3AzV2xEY1YrTHBONndZZ2xtV1gvMW1BanIvUGVRVXRMK2tQeWt0QzVValhabUFHbjJGMkdsRVdDdzdYVTQ5cmhBSlZLYUhGVmZpR2JFUVdxellxNmtQTmx6alpobCt3Z0RzTnV0NS9TYUJVT1M2YVQrMkJoWWJvc04rWjVyWkhnNEpZR1lKMGFaa0JlWURqUzQ2OHhJbDk3dkhxRm81cXhTTXpaTnU4aGlQb0xVU2JpSS9ianphUUhsS0lXYmN2V1hXVkZvMTl0UXBpcW1CbHRGbXJrV1IyRGdpWTErV0NGK1ZaVXNmSE9RYks1dzBKN0tpZHFrOXV6OFltYzNwVmllUU81QXpFMEUrdHZyVnZKSUE5b2o1YnV1Nk9YVXYxdE40WER0elVzdyt3dUl4eFBReGJtakdaYjAzVEVJVXRYeGdBQUFMZS85Rzg3eDgwN29EZy93TkNXdWd4MGVpR0pFajY3T0FYM0tHY245dndHNHJZMXUxdEswdXBITEY1MHNlNUN4dEVPcmdCeVlPL0J1U1N5cnlVZ295OWowQWxIZlJUYnB1b1o5RUtvWGRxditkU3NkSjM3enVCYlJSNWd0MWIzWUdCdGJXd2kyaWs4bVpIcjJjREV1bHlybm1mMkVDMEVQRkFhWWt1dmxKdlk5TmtPTXpnQ1JtdTE5dnd6MlFLeFRsckxIZmprTDU0QXBuQ3U3a2Y4MWsxM1Zrdmc4bytKaE9KcDVwK1dUcHJJaUt1MDJRNFpVRmRadGNVSERxSzgvL0cxVU9XUHh4RmcxSnVlQ3hXZkttYzdVaDk5OG1DZmlpa2l4NHl1bEYwU3VJdGVsaFBTRDFqTFN0L2tHaS9XZnRJcy8vdGY4TTA0bkVmVndlVlFEL0ZDRytZNC80WTBvRkZtc1krOTRpcnhSL0ROUm5UODFheUt3OFZkbHNpOGFEOHVlZXdYSFhHZ0dyRUFLQ0FVNGNsdlVrdHo0VitqL3ZnaFJkMzBQR3FSRkE4Y1ROVnQzNUcvSGJaV0xGV3ZkdXAvYmVwTkN1V0FOV09RWVA5b3VYWllvZWxKSlFMak50SlpNWFp5SVpMZVFvczB5ZG5CMUhZb2tGa2xMRVdOcTV4VGVOU2JvZHRQaDZ3RzdJdWxnK3B5MTdidmV4bEJibnFKNlR2NnAwcFdUTDhMbUdTR1NZMlFNRlRvbloyK3dIalR0RHJkTUV3V3F0NkZURUpmL3lWYWRiTEtXcVA0VGxBVEVOdWUxSU5qdkNiWGYrZ0tySUUyWG1XT3ZrSktZdHRnc0hZRm56WjdkMElVUXpHdTRqZjlPbC95OFpsamFSTERSalhXZHE1Q21ZL01UZWVIUFNHS2IzNEcwMk9hSGhaSFg0anZNRHYyR0JuejhYZEd6RTRPeTBMSk5FTkNmdncyUy96SzJQRHliZ2N5N01BaFVCZTJqVFUzRnpJQTFnTEVRckoxanZhM3ZxY0N3SWZPUnVBaGE0VFErVlV2bXZ1bVF6WUFBQVMvSUhWZEl2NG9scjVZSXFkMmZoN2N5UXo5eGd0bmRsd25iMEp6TEd5SHJidEdNdTVuS1o5b1FzNTZqTVZ3VWJsS3BrY0pYVC90Rzk0S2gwN0IrZnhZdkRtUUE1VGRSR3I4ai83dHd6RmxRK1o1UDBqVmgyR1hVWmdzZTZOa2FLZ1hHTWk3S1R6WW5vQ285SkIya3gyaUZmSFMzSWJXSU9XQUQ5YjRreGErbDIvY2tNdmhVUnlWLzVGcXEwSm9GTFR4clh4RWtxZzllTGIrVkIzYWtwdGk0Y0lGOVZZUlI1M0N6TmJmcHdycjdKREo4NitrMTRHdGhIclVTZEtnZjlYbmRFVGF0QjhqUVV6Sm1FT292Y2hVN2Y5ZldxekpkZG0yNU1IMERhYU1uZ3QvLzdVUkdTZ1p0eUozL0ZibGI1bVBjcmZDakdqVGRwTk9HVGptTGVhc296d1ltMzJaZC9tc0U2aE1CVmVmSkc2SHRXZUNhVjBQMGZqRHViUjlZdXgzdWlaeVlpSTl1dS9hd3hqLzM4dU9BUlo5WS9vMGliM1V3azZqamVkUlNWUVRjR21oYUlNQTZTbDhxK1NkWnlMem9qVi92aVQraFZWbXROQjNYbGVhbmNiMzRXL1pDRkswT1Z5MkpWM2pzMXJZQU5lWGE0ZnVnQ0xQL0RRaG9Fazh0N2hyWm1sVkpMcUcrdENndnp1YkU3SnBLTjFwWHNzTjl4L0tHRUpxUDdmc0tpNXJ4RG8zTDZPRmVDZjlLQ0s2bzZJUmp4d0xPZzdUTXBiR05CaGtYeVBFVDhRaHpod1BFRFlqRHRSWm94S0xNbGM1Q3JtczBqWmFKUDFUSUhzL3FxMkxkZ0NKN1QvTnM3L0lNOHlydlBrb2QrU3U4R2JFb291bUtnY3RkNG11TWtSMUFtSWk0bGlsRTJCZDYyQTM2SmVobldRSGw3bDllQ0hTeUR6SUhXUzJkY3Yyak0zYUhwbVRzckM5MFEzYTdnOENxZXhnQUFCcVY2NlZtY0NORHJyZzFtajlDTzYwejB4amI1Ly9LUE1USkp6bXZBb0xNNm5zY09ERmJXU1R5WTJqV3dVbkNHbENjSHlTZU92MXRrTWw1TlB6cmozRWJLTVE2WGZsL3dzUmMyN2podm52V2ZwL0g2VWJOa09rWkRaa1hhK01zOHBCMVY1VC8zSWw1MG1icFVkK2QvbDlmcEFCV01FSW01YUEwMkYwVkc3RGs0c2JCcEVOc0pyVEVMcTFvanZLbHFqWHI2aEVaUHY1S2I1TzlLS2ZtY0dmK2E4SU1kZHlRVEg1bitiZGpEQ3hJQ2E3Rnk5TnJWdkNFNzl5MytER1Q0V3lRZ1FEcGZWYjFHTHMzazRTd1NnSG83Y1BoSGp0Z2ZKUzM2cm1HTTVOdGpuZTV1VGsrUWZGaDRZWTR4SlIzYmlhY2ovQ0VEcSttRk56TTBXQzRNTGNNRGYySHZWdnpxWnJqZEFKZEUyUWJPRWVYd1pvbVpCdnJtV1NyYnhxaFB4UUFnWXZtZW1oeUpJZ25SVG1mWlRUSk5ITWkwM2pFaE5jeU1uN3AvYWphMGRCRkVNRlZITGhGdEtla3p3UzArckYyQS9WVTBNWlMzWDZ3Q3Q0VFA4RlJaMXV6SHFDU1BqbWNGTE5HR05OWEdGUUhObVVFTXd0SS9TU1Q0di9ZL21MRzVMbEIydFBwNHp6emZIb3RsS01vUGZiY2FaRi9ZUktUOXpTMk8xbm1mbEwvTXZQM0FsK0w5TUs3WHVDY2N0SHk1MlpEeWl0Z0FBQUpkeXkvUEUvMHRpbnlhTUROU2ZlVkhaZkhvOGRwMmpkdFFiZ2xzeSsxbFh1YXQvN2JWZUcyYVQ3azdMWVJRSmt0OGRHQlRxUWtmSUxoUnR1RW5mbXpLQkhxVXJmZ3FSZDNGc1RjYWJTYm5uRDM5WmxYaCtnUldCc2VxSjl3VlJPb2ZwSXpRTVphTGNZQ08xVjhLWWJlSHBYMzJveGo2elRWUUhCNTJ6c0l4dnpIcWszUEVrd0QwS05MRS9hWEJ4bldGbitpNkdEb0dQOWF0M0M5YUVuczRkVnlEeFFvUnhJQjlBMzRyY0I3VjNzOHJvT3VjZ2JKaVBsNVR2VFRBck1henNvOVQxQzVmMm5TSStkTUlXRncvRk4zYjRua1MzTnRtZGlUeVZ1ZVVVSW1VZUZ0dFlvSW1uVVZBVlRBYUpGYnI4anZOUHVENk5EdWxsazE2N1F2bmg0ZFhuQXpFUHpzWHZxZS9VbW90eG4zTThjdXZEdzdFeUpuZ1dLeEZsZFFNeHdIaDZUNDhhcEdaMzJFV1JTYjNYNy9CNnlKTVd6eFI5U0ZmT0YzbG55QVdkZ0xiWWlDcFcxdkpIbmVKODc4QXVEV3grMHVxbE0vbThlQ1FCT2M5cEdnNEd6OU9pSWdFMXZqOEx1RjA1R1lzdEtkN2tRcis2WFYvR0xGK2xTclBNZXdqVEI4ZFBIZi9wZlZCb0U0OWNRM29GZG1MRS9XMUpmQ2Q5S0NkQnZxY1RQa1U2MWtaNi9PUHZ5bWZJZkdGK3FiZmZUVys2NDRxcTlpaC9LSXRMcGV4T252bXJvL2VzOTBrTUhwdU1CSTBTK1p5NFd2d2xsRjdheXE1Mm1oeEtFNUg2elZ0VDBOVUFoT0JOblBXQVFvOEgveWt0em53bFF5UDlrQnpQcjNoM2VzcVF5MDNwZHdQc1FkZUI3Y2dFS3lKbGt6bzdhcVl3RXFpWDVLSldZd0UvdE9mMWZSWFA0akVuM1RoeUY0UEsxajZvZXVINUpGREE1R3JQbmpYaDE2VDh3VHV4dm9MdVR6ZVc5dzF5L0QyejZvUjVISWpQVkxKcnFQWWhvdVowNTFWUkxwVm9LdG1jbThwVEx4M3BqcVptclVJUDNZUU1TOUZST1c4U2crQ0s4UEVZcGtyU0tsUHE0OE5jUGEyTmVPREtUNHh3TzNMSStMem8rMjZhUFE3dlNnWmR4bi9mTXZKbWdXN2F5NHRzL1BIZHJPb1BLMkIwaHdVTmtDazZlUFhySWRaanBQRlNGemRrZ0FBQVV1TFltbHVJWS8rekMwam9OSjNyRDVzcGxrWnBKMkVKOHA0cjVPMmd0VjVkbHdENVZmbFU3d1kwOFU3WS92dVdabFdESjBYUEdZVXliZ1lvWUlvSFNmR0o3NmVnQUJIWHBvK3FkbDJ2clhYTU9hS0M5Vm1uS3ZUY08yeTRHbURNTDNXdmJJQXQrMWlwaENQOGpvbDAwOEVFZ2s3cEx1Nzc1Q1VQSzNwelR5ZjMzS2dTb2lyUWliZlczU1lmOVN2SDIrL1VFOW5GRko1OHJ6L1llM010VHREdCt0SzgxbC9tNkNDcld3dEdvTjlvTE9QaHZyQUxpbGJKWFJWVE9BdUlRSWxLVzI4UUltQjl1YXRrOTNrenh4Z1hxeXlBb3NYMk1xNFZ6YmdKRmtXZnZPNGUzZHMzbUtoNDEzTW1SMVBaZ2VXaVhOU1BCZEo5cm03YnBSMURwOGxmcmw1VTU0Y3lQa1pibXU5ZEIvUjVxMkM0RnpxWGJ5SlFBWW5pYzZOT1g3ajMzMUNRYXZqMHg5U3A3UnZwVHc1S1Y3eXNaOG1jTEVxak9FN01HVThjano0MXNRZFNodWFuZHh5OHp2bzgzNnU2S0kybVJmQUR0c2ZYTjdQVTkxL3lkK1JaYm5QaDBMQm1wM2hhT0pLYWZkMlBtUjZRSGJhMnA3d3VvT2VEWWZUTzBWa2lvNHAyMjdUNXVZVHd6ajRPMS9aN2dzRXkzM0VMYkc3OEpYQjc2R3daQVo1anNVbWpvZGJPZ3IzZzQ5VDZBQnM0cDZlUFB6Y2xuRFY4NnNXNVhpZThOcG9TMmJVZjZpb2RTTXF3N3c1MkNvQjlkenl6am5vS3ZWRVdQbXd0aFhrWk13cDBWWHFKaC96dExqRllGaENVendsYUtRSEZldXRXazFiLyt3UzF2dHNnOGpiN2taUFBjYXJ2TzNWZmR4TmJIVFFNZUJSRXA2Mm5ST0hQRUtQWWJXNHpnMjhOejd3Y2VsczdkMXROM2dSbHY2WkMvNlNxSUgvbWQycGNhOUViclRuNURkV0h0V2FrZ1pKcmxsNmV1NVBnQ3hLQjZPc3pFVWRFNmNIb1NYb2dmamFUdGMxK0U0Nzd0eFVndjJIMS9pWkdweHFuV3RuRmxwejBUTUUxd0ZsN1EwYUxKaXpvaEdBaFhFMlhJQ1ViNFM0T0tuODZ0MWNRRE1ORnNEU2RqNTN0ZFVZWmtDV3hGVUFIQk1xa1ZKd0NnU05oT2RJUWc3WDFsZUVESjhJTVMxUXo5Rm1jcytkRGVVQjI1eFdDNkNGSHl2ekZFT3B3OGg2UGVCZGZLYldQQkUycGZBMTJIUCtqTUt2WGo2LzlIekxVcE5nU1N6OXRyK1VMaVF3c0cybFRpTzNiWHNCRDA5L3piNGJvSGtla2xPcFlvdXZMeE05ZFBsM2ZLTi9PMWEraUxFWUdodkpadkhXbHd0SitTNUNUR2o4djliVm94WGJoNXJyb3g2eUdIaXRBUGt3KzdXR1UwWEVjc2ZyL1UzRnRwZXAxQ0lKVjh5Mklmakc0MWhoSkFJM0tRSnJuL0FRQ01IdUhERU53Mjg2dGRmdEZPTXd3K0g5Q0Z6K1NqWk1RK1FpMTVYUGNwNHZrYnhMeUF6N1hJcGpkNzl4bHQydGhKNExUQzlhSXhhK01yMEQzWnc5Q3hUSkNXVW5JQUFBQUFBQUFBQUNlSTBNUzdVejlUenZycTlSdmFOalZxelBYL1ZnTmlHRXlPQjNLTGtQNWJQYmgyZ2lxSmJxT3FMY21SZHNOL0xNUlArM3IwVHRvbkYvMnAzQmJSU3dGZzZaVWRzNzhuVDVzUW5iL2lZTmkzREJWam8zQzNXbnpWM1pFMXlwTWhkUW02N1Q1bmlJZ2VoM2lTOWlUNnZobWk3MHFOOHFWM0JVVWdkcWlaNmVYMTd1V0kvZjBaTnI2Qi9jLy8wWk5yNkJuR1QyajZncDdhUG9sWHQwNEVVMEZsQnMrbHZ5eXRvK3YrZk5pZ3VUZHhJMStpanVjNVNLK25USXhDTEpvemJ0RHlvaFc1K1U5S1A2NlB4dVhJRHdGZGpPU3hzZit4L09Xc3dQcHNnSXFLZGk4cTdGUWZheTYyUDNoZjNhREUxa2d3cjdLRFJSUXBCbzhjRWtPVjRxRWdlU1NVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFvUHVHZi8rNVNZZnhqWFdSWG9Wd0dhVDIzOUNmdUFUUldvZDF4a1hld1VuZ2RUdGtPbnphc0V3R09UVjN5bTBkUVhGNUJFRG5yakZuSHRGdngvb0hYVWtKV0llYWVpOTYxcm1hYktyb2lUNXEyRkw4SDYrUzZyeE1IYWU3Ny9kNTYrbEJ2TkYxYXdKeWlFVEIzMFFKRmFrSG1GNUtxVWQzOWdxRndObHVqMlZvVFNCMmhVZUZ1NDNXRXBnSVVUTkZuWjduWEg3VkVpRUxDREE5eEwrVWVNeWNjY1FMWDJJbUk0WWRpZ2xMSzk4UW5VQUFBRHMwL3NGY3lHakZ1Q25FRGJhRmZNbGxVWmNDUjQ2c3Q1MVJxeGNTbkhadHkyRjNRTHBmRmI3SDk5dnkzV1NCY1pTdVpQUFFxTkpvOXM5YmthNkIvbnQ1L3FpK2RBVVJVcnpLVXRTUVY0ODZIbWdNTE5VVmtvNjJ5SWhaRmFRd3ZqS2tDSW94VU9JZE1yVENscTg3VG1Sb3J4ME5EbS9CVU03QTFkN0FMcUVsWTA3SXlyVTFxQXVNNXZxbHJJOFN3emI3a2dBQUFJZmJXckdFNXd1WXIzTTVRaVJoMFJXY2VSZjMxQyt2THNoMHFMYjA0VGFFV2RPRHpIYysra2ZxOU9IUDBGNHFKcDRVcHFhYWNaL0dHVnE4bnJNMDNYQWY0OHRnSjlSTzVkY2ZGMU4xeWd1VDJZaTExMXg5UFFCQkpoMzkyeU1wZzNLcjFhM1p5ajN1ZjNHMC9qdXhoUUFBQUE5NDZIUnFJWjZHWnBjck40eHBpSHpTVWFXWnVTbjlTNEdVcWZxUm9MNzRPQWdKc0hKSnUxS3UyZlk4U1g1QmVMVnltNXlOSDN1V2NMSWZMeW5VTUZkVGJrbDBNM015R2hlZFFvSTlqTytPaCtOeFNmSS9CU1lETS9tN0IzdnZLTG1MVHRQY0p4U1Bic0RkZlJib2hldkhlNXhRQUFBRktaTnlQVWZsRjE0UCtYNVZSMnFZblNWa0dPTWRBS01YbmxySEczNExZSlpQU0RFbk0rTnZCM3BacllTbHk4WWd2ZVlRSHozaUhHVWx0RWlmN0k1ZWRuRDhRZytlSGhlNklNTlQ5YnBDU3pQWVZTRzlja2pwSDFjU3FSdGJMdm52ZlBpMHZYcEdUUHQ1Y201RmZZelBMdndyeEwvSDlZVGZaWjJuenRnQUFBQTZXdkNtcGw3RnJVeXMzbEZkcVptelVRWHJNY0dFcHQ3N1V6MW1GSUpldlo0cUU3YXN6aFREYW5zNXdKd3EvQ0pNUkhqdE85dWVsSVhUclJTOXJYOFkvMHJDY1U2RElCMDhBZUNqVHM3ZnZoVFhVVFZ5eURZdjI5RGFsUFJuMlV4UzNMYURoVW1uK05KOVBQejFQMHlBQUFCV3J6R2hyaU1NcXFYajdsa1NyOS9SWTYzQTdUVjRpTDh2bFVmbjNPMWdHTXJxYzBJU3JzNVhvY2QvNi9NbTdDYjRydHAvbWVyNnpZNlp1anBGMzlHM0U3TnhRaE85N2xyL1ArTVhtZ3RtK0w5eDE3dHYvTEhIYytocGlEOWVabFZYdGw0QnE5V0Z6TmdJYTM3bFVaWUR6ZlpaQnd5QWVOaXk3Vk8ySTA3U0xISnBuc3g3OGcyVlp5UCszWWdBQUFBbXZkSWJ1TGV2ZlZLVTBlTWtZWDJ0QVZHcVpuM1I5R3JqSGs4MjlReVZ2SlN0aTU1NmVqZ0dCdHIzdE00b3Z2Z2RBMzdRVUpXSy9mTGFUSUoxcWF4ejgyTHAwQ0E3a2c2bVJXcG9pT25LTXVuSEVqMzF5RXZ1RHE5Uys5NDQyci9jV2Jvc1R6aHlQcDY2QXlLZVFKeUpucHZVOVJZbHU4OGEvdVFOQldTakNvY3Z6YUVadGpLVGhBQUFBU2FUWjlnbUVFRUFVelBaYlNKWlFaU2UyODFEeENMYWlCTWdBemMwZ3JoNUJKWkl4QTcxaEp2OHZvMEwxSCsyQnNwQmZYWW9MV3FTd1I3VEFRM1YzYk5pWmZtR2RMeFkrbEtIY2FLTGN0N3grWlRyck0zbjdOQVREZ0FBQVhkaWpLUG8vUGl0UWNuYW9nRHlFU1g4b3BJYjdNcFhFVWZaYmJmL0QvWmRTOEVhRHpRdkNLblhsTUQrRC82T1VhNDc3ckI5L3FoZkJRNHB3eHQvWndSc0xpZ0FBQUxZSCs0WXpNVUFIZDFuNy9TUytGRjRXOTIrUmlCOEVhMkw0dTl4SDVmd0JHL0FnMFh0OEdxRmNCK2JIVklKS2ROUG11SVdGMUFRQUFBSzNMK1Z2ZTcxenBDZ3Nzd3RYL3htUmsraG13Y3NIUTI4WDZ1akZTZ3FHUnpQWVM3SU5wdlFZbkNkakdEcXBRMVdsRmEyUFNKdTB4REFzMklQMDNjVUZIbXNFWU80SVdBQUFBWEh1S3FFRzVmeHVmRTBWUm5DNi83Wlg1SnZQeW1oWWFVeXNNY3d3dm5BQXliaDVWZDFVSGEyeWJpcHZ3dVJKaHdYOFZGTWVMZkh1dzJGT3Q5eVBsSkRBTGxPQUFBQWdPWEJqZzhtaktSbHhaS0pVSVIxdDlNRm0vQ1JxQ25ua1kyWnA2eG05dmpzNzFrcW12Z283bnZlaGVUbjREbXpVUG5mWlNZSTJ2cmdvYytaVUJnanJGbjRKb1E1amM4dUZ0Ri8yd20vc1F6cHZFRC9yNndPWGFlSCtjR2YwYjBBQUFBVUhxUU5BYlNpVWUwcVFYN25HVkVEb3JnOXZLeDJNZkExdzNwQmhUUWdLbnBqZE5EWGF1blJCWDQ4QS8xYmNOMnN5eStJczZaYTlnMUh0ZC9PUVhzZ0s5dk5UN3FNYUNIV3dKUVE2Mnk5bFZ0T0RPL2h6L2NHcE54M1Jka1dsSzh3SVdrNE5vU1IwUCtDK1k5YzZvUVdaTGI5VG1abW1XM2EzWU5ZeEtDczNib05oRklnSDFhRzlYZWxqYzhJS1Ntcnh2N2FGc1RPVnJwZTFmd3dEMHJuYlRxV1ZxQUFBQUl3UXB1L1E5ckZDNU9ONDYxSEN3V3VLeDMxS3UwM0FuTk44bG53a3BwSjFsZlc0WXNzZjlLQ0RMUFZxTkphMWpBbHN0a01rK2JsVkk4OVg0SThmN0hacjZMWEtHcDNzKzY5KzI0dm5wcTcwN1FVVVN0eERaVDIrZ1Nyc2NxTDlqRmpwUU9zSFJmd2FZVDdialQ3b1gwU3lXRXRmMlRmV3B0WnU2Y0Q2Rkp2L0FnSndLUHJaSHdXcjRQb1E5ZkdwM1VaQWViNE9oM2tKWG1kTkROSFZoSlF2SVVVUzRGMEg2N2oxbkxhWFQwRFBQeTlzdndvM0cyK2Q0K0RuTkVueWpSUUFBQUQwajY5Z001aEhLYXlWMWxmbzFxM3lEeG1LRDNGSWdwZlVhNjFWT0dPVGtReHNmcXRDQmF1WlZ2UG5NdUsrWVBrZk1LTnJNNnM2N1RCRW1Ed3JEOUVObUFGL1NubnJiMVVpS0hqZ2lsbkRqTzZEQXJSMWV1aWI3V1VUMVY5WTJBMFVOdXFUelk5M1hvVGpWNWUrK0h0YWF1ZmVhc28xUXRzeFIreFlZdlpuODJja2hDTHg1elkwLyswdmg5ZnRVWm13TlRXd0tKcGNtc1pxejNmbDlNdVJrbzI3SGh6aStIcFUzUUhDbGIwaFhhOXpvcUZuS0R1UCtWVk84MWNSeFhKclRPaUg5eE9ISHdpNU1WQUFBQUNoa2dvUExyNWhqVGZ2SnozZ1Jia1p2VEZGN3c1UWYxZHVYQWd2Y0hmbFNEbFp1SCsydUlDK3FRejduNnRBamU3NjVoTDZSMFhiTGVVbFp3TEgvemRTY0k1ejR5eHhnVFlQSEppY1lJOEVkS3IrNmVvd1E3cGtONGNaK1Z4Y01zaEZ4N2xkcEVyT3NIRkJYb2g2bFplcTgxZHpCWDQyU3I4bjg3OUtPRHI1WTNoOTJwUFU0emRhM3lKM2ZsM1Qzdkx2ZWJlaVY0cGJHMW9XUHBzQ2gyQ29oRmpQcHBaZnBuS3hYYXdXT2hpdGZ2eUROQ01sQXJqWS9Pd2gwbXZQamFVOXFNYmI0S3VhQWYxSm5NZXAxd0xWUUFBQUFFRFZwRzNhdGgvL1RuTjU0SDFUby9CaVJsczc3V1V3MjI0RUhGNnlGQzB2TXpYMFhxR0tEUnpoOXp2VkVzQ2g4TkF6eWQzeTFjNjhPMURnUzVtK3dCdTBybzk3VDFlZlR5VStpT0ZGbnZ3UEtWUUNqcVBUeXZ6VmNmUGpOT0hXSmhSaFpaRWlRNC9oc01ycFNUNkhzam5veDRxT2cwVDZZaWkrWWVkMUtiY2NJMG5VeFpNamRSWXo1T3NLbHI1bk5MbHlHSFlPeHY1ZHZORko5SzUyZkRqUThvQWNqZFlZbTZISVhsN3BtWmtOMHptdlJrZmhGQVJ5eWtxTUJWUlZFR0lrYm53aW44SGRsKzR0dUtSUmhLL2k0K2NkcTYrK0ZiQWRrUW92bXkzR1FZa0JaYlUwZjRYSy9tOTJaTXlqOFhFNFRHNk5qWU0xcHU1UWd0eU1ya1EyTWREUDFObXZBdFBRTXpuRUJ6WndSZkd3V2xMWSt3b2hMYU9vQUFBSENpV3dyNFNpTk42NHJabWlCRmtVQWxzUW03THE4WXlIR0ZDSXV0eVI3bkx3c2xXYkNzanExUEFwaFRxVlF4NzFNY0VPdHNqWUZxMjFMdGtPOVZqMEtZRmpUSk1EejUzVUVSSWpLSFFBQUFBN0hTYy9Db1FjcmpSUDBad0k1Q3dyeGxlMzFXYVY0SGwzWXM5WmxkcURFUTB1b3Z4TGNKZVZxZGNlVFE5bkJaaXJDSFNxbzdnUzlOZVh4Y28wR3IyVCtMSXRpUmt3b09DMzNHWVdYMjJPYTZLU3F6SXNoNDZORDI2aXhrTEc2alhnNkdsaEFWQUFBQU92Y2NWMXVoejBLZXdhbVRleTJmZy9XeXZjTUtlK1pnbFRNREdJbkNCaDJ6T1B0N3FiWkVVdkpMNFpvK1ZnUXFpQ3lPeVJsbEh0MW9UUFlSVWo5RUlLY2FyNUQxejNDbE9TdkFMOG44eUQwdVdTVkhqMDlubTA1L0xyNzJ6ZkROa2NqclhyeEhtdFBELzlMQ2Q5NEJScXJzbEMrOHJoL3FDUFcrT3FIbHBKR0VheTlITjNDeW9WODVET1ZEclpIOWdBczJnM0RkZVJpLytBNHAzZUVKRklBQUFFYisvL1FtMGtrbk4vRXJRKzU1MXVqTnpjNTFpaFBweHl0S0ZzYlRVSGNucHVIOFdVU2doMXJzaS9zcjJBSUIrK29jcXp1bzk1SlBwejNHR0xEdGFPK0RWMnZxQUFBQTNIU25DMGJGcnJIYUtzVGR4aE1wQjVGTXg0LzlDSUkxUWVMekd1VXVyL3U1ODNTSTR0M1hERlFyVUx1N2pSYXZkYndJNm1FQStId0dRclRpVG1USzBTc2dreC9JT05ycnlaeFFhYjdybk1VYUNCY1BzdDVJam1yYytoK1B6WlJvUTRIQTMwZ0FBQUxTd2ZVckZNa1JHOFFEZnZoMUtvM3lVd3h3OG1NaEdtcVhzY1hGOFhNdWc3SXY3MWZFZTZtb1piRThzMjZBNjBQL0lKVGlFeEZMZzVpWGdHdWVQUG9JY1FYMTRiLzVKVFJBTzRnSGRYSmRkUzVFZ0FBQUVQMEtCekxpVE5UR0ZYdzF3WE5kYkNmcFlXenVFNFltMElXa01IeE1idjZmNjFRcVFNdkFTTnM3UVFFL0pYRVg0KzlabFRKVFovUlRTYWJqdldkdWxRRjZaZmpkN1RXdk1venBjSWJyZ3Z6WEJmdmQxUWgwNUVMK2RZejA5ZWdBQUFFMDhxNjNrUW05TjFOUC85MEdJOHhMczFoZ0EzUjRNQ1F2UVdGNSs0TFhYYzh5Tk83S0V1b0FBQUUyR3VXbHlKZGVUM3MxbXJqUm5EcExRSlNNQTk0Q3hNbTNoWmZYZm5BaTZvcEZBUzdYVUFBQUVHS2huOCtEczFwaTBTenI0ME5lejB0OXhuaDBIdTRpQUNJdVdRQUFBSkJoOGRGUmxTNTI3WVNMR20vSjJzZGN4RUREQ0tmc0xvT2M1RWN1RlhwZjVHQzYzQlRzZnZtQUFBQXhEcHRZTTFaTEw0SEt3cmFvTVZ2aUJKNEFtWHFnUlRTSmN4TXhJMEl5Y1VkZDVXV3dBQUFBQmtDNDE5SGgyZWR6QmJQNUF6NGczdXZLOE53QTVoS0M3SSt0eWlCRU9pN0RUTnh2UE9BQUFBM2I2Rkdxb3hXRkhpYjFNd2JDVldGM0F0UmRBRU8zaS9lSzJ1ZkNDb2FJbUsvTzYybzVYSTFkc1BiTjFBQUFBVGNtZmVqbFViQlRMQUd5WG95eUplRCtjZkJYNGY3ZHF3SHN5azZnUkE2Z0FBQW0zbWRDNFhPRVdqVkNnWXZlRXhwcjlxNFZ2bmVQc0kvWGtOazhaV2tld0IxaVdNcjVwYWx3Q1BRQUFBS2NPNkFjWVhhQ0pCU1dOaUVNNTBOamY3WXFxOHd4Ni9aM0hNNTRqYUpCbHBraElYN1U0UzhyTHFBQUFBRGVPNDNtTHZGUjN0eHBlOEhEd2MwQ0h2amFvcmRrcW9WZkZFMGpMLzY2NkcvQUFBQXBkYTJWSFRoUklWMDZ0UHZHbGg3QmlTVFRPeXN4OFpTMHhodlBPQUFBQXJmWHdsTUQyL3ZMYWdyZU1pbk5LMmI3NmFEODNnNjhtSTZBUjJLdWhrY1ZPT29BQUFIWmUycSsvMlpwK3pBQWVIVjJTb0c5eDVxM3pTdVhFell4R1RmbU1YWUFBQUFyeEJUREdHWG1jdHo3RERjQ2dhWlNJdDJCMUFBQUFyL1h6NEFLb2xXR0lkTG0wRk1paTdhOE1tSmVBQUFBUThULzdaMkNlT1NKQXJtdkIvYjhhRjJ1b0FBQUprZnFPcnp3VmFVZ1hCQUtnWE9pNXVIZjNmVTZBQUFBZGh1WDBCQ0hCK0J1RjY5cXlJcVdIVXJoRUJJQUFBQVZOTVl0QVBpMWlXaS9OVUZ6eUUvVXZjM0QzZFFBQUFIemFaYUFsdDh0c3N5S3h0MWlUK05EWlJVQ3JjQUFBQWJBdityZnM5dGhFZTFrazZnQUFBZDgvaXA1QnVwM3gyczByLzdLU3gwYkVUY2F0M0l0WVAxanNVd2I5WXUrV0owOVZSbkJtRTRYUUxFR1dRWDNLYW0vTDQvbksyZ0x2MUFBQUE9XCIsXG4gICAgICBcInNpemVcIjogW1xuICAgICAgICAyMDQ4LFxuICAgICAgICAxMDI0XG4gICAgICBdLFxuICAgICAgXCJiYW5kRnJhY1wiOiAwLjIyNTU4NTkzNzUsXG4gICAgICBcIm9wc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiU0NCXCIsXG4gICAgICAgICAgXCJ4MFwiOiAwLjMxNyxcbiAgICAgICAgICBcIngxXCI6IDAuNDc0LFxuICAgICAgICAgIFwiY3lcIjogMC41LFxuICAgICAgICAgIFwic2l6ZVwiOiAwLjYsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiI0Y0RjJGNlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiXHUyNUM2XCIsXG4gICAgICAgICAgXCJ4MFwiOiAwLjQ5NCxcbiAgICAgICAgICBcIngxXCI6IDAuNTYzLFxuICAgICAgICAgIFwiY3lcIjogMC41LFxuICAgICAgICAgIFwic2l6ZVwiOiAwLjU1LFxuICAgICAgICAgIFwiZmlsbFwiOiBcIiNFOUEyMUZcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJnbGFzc1wiOiB7XG4gICAgICAgIFwiYmFrZWRcIjogXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSaFliQUFCWFJVSlFWbEE0SUFvYkFBQVFPd0dkQVNvQUJMQUNQbTAybFVta0lxdXRJRkg0dWFBTmlXbHU4Yk1xVzlmNFFFbndaeXJ0MmQzejhaanRVQnpkQ1AvKzJtNmVsZE1tUU1PaG4yRXRqRGg4RkpJazVaa2N2S2NGY0psMDVadFh0RkwrdFNuMXBQb3FZbXdUTmpCYlFreHhTL3JOcTlvcGY5UllKUm9jWExpWXFqM2JXQmFtWUwrdENuejlvaUpVL29LV1AzTFBjczJ4T0hnTU54ZEhndURqMnRWbENGZVEyaXZMTzFFWW5NQVNjT0d4N3lSVnpYWFM5ZldiVjdSWnMyR1ZuZERUaWtCL2Y4azFZWmxIemdNZ0lCeVducElVdFBVMFhCWXpvK2plOHdGUG42MUwrUUZadFh4MDNDOC83ZHZxR01ON1l6YXZXb1FuQ3BGMFJWZ2tDYjMwZGh6MU5HNzh0KzlieFFOa1NJN1J0S3M2VW81Z0dOMGwzWXZhcHhUZXEvWDRQRjdHZEFVMkNac1lMV3hNdk5GTXRsemN1ay8zSTBjT3lZNTVxOEJjOTdiS08zVG9JbkFpUXNieDd6clRlaEh0eC9UVHJ6WE5QVlFPWVAraGFNYWFSSlhsZ214VVV2NnphbmQyTk5Rb3R3N3VWVkJiVmwxMkdnRXBuMWY1VWU4dFVNTGwwNVlESGkzSmRCRjhVNWtmVTBieUpTVHFsMlpYOFJwaVQ3ZTBkUVF2U3RaL0pMUmlYMTk1ZG4rOXVrZkhMblRrNzdENXc0MUc3c016eTBHdDJnY2hOZ3gvZFB5ajZONzBjRm1YYkZHTjl3L3hHb3BnVk5vTUVDeDZkZnQwYnZEd1l6cDBqUEgreVdVMVdnR0VEMU5reGVPTFUvODErc0o5QUFuVzVYeGhsQ1pvamZSM2ozS1pOVGZPVFJtN3JtVnN6TTlkUTVJNzhGc3FtYWFiUE54cjlNOUt5YVBtVjBFbG5PMGhaQWh4QysvK2NkdDN5bWh0WC9FMi81WURDajRVOWhjdmc5aVV5S0lGTjRtSXNmRVorMWljRW1TVkh0UU1oMWg1L3VZbEkxN0NFYkh5THl5ZmVGOVo3eE1IRWZxc3grYVlvTzMwVEFQZkxMZCtUVUtVNHhvWEpOTVBJZStEamMveTRKU2lwaXp2MlpnbWs1WTl5S3RaRWQxOHlHekZaOS9UNSt0T1lheHZTOFNsZEZGOWc4UmZOcStWQURDUW1GZjRRTkVLQkxnOUtGS21FRSs0RHFONDkza3c4VkptTFgvVi8yZ1NySG0vbTdscWNRMis0aXR6a0psenFBQ0tkemZkTnBWSDZXOW0xaVpSeDR6VGxnTzl0L0paMTR0dVlES1BlZGJ4UnhpS3B6eFFaQXZDRHpBUlVkdmF1ak0wcGQzR3Z2TXlRRHhTS0NRUVFZQ0ZsK2p2aXgyU0ZHVi82MFVjMzNwdkMvRlF2aFVSQXlMZHpUTVBZcFYwcXVsMFZpSy9jWFovNGoyT2NjVnVhZW8rOHE5b3BmbmljdkdTWndpa3k2YlA0cU9rU25tM1NQUTJxQkpDN01FU284UXJsQ3VoVHZ5RkhreWNFaFRwWVRkU3FrVVFGYk1YZm5GSndmMjN2T2o2TjdrZ1RldDRvK0d2OW9xb0tSMTRjTTBrUmtwWWhBcERCZ0ZGdGM1d05XU1BpbHhKakdpSUlSM0dia1k1OEIyUk9uYVBvN0RtRDkwSUZvQml1L2hFQlZ1Y1hPb0hPTEMwNlltd1NvOXNuN015QndZSlU0TEl3SjlaM1l6WTBXNmNSNk9GUUJhM2dnekh0Z2hWSklGeSt1TlU3aWduZkxFN09ETy9TbSs1MGRpNmVkQXpKVmw2U2syRThlQ3hLK21nV25nelhrTTREUEV2RE1FZU9yUkczT1Z5YlNzQ3hlamNZNmkydVhxM2wwMFBHYjdUY2tmYUVGVzV6Y0svUENLS1pJV3RxZ2JUK1UzSjhHOEdHL0RwMWNvN2Q3bkdoTG1GYXFibEtYQVdsVm10eFR0cWlaZEpTNDRROGNmeExFNmM4Z3ByUEJLSnRPM0RVK1JJTWVGcy9ZZ0ViWEJLMkY2WEJVMnAraGtVM3Z0Z21yVWtUaExLNVBicW9VYjF2TWQvYTYyWHpLRmp5NXY0YS9OUnFFMTBtY0Z5M2RIWEFDeDVzOWN6Y1Q4RU5wNDk2QUppdGtrQlhORGZUQ3ArOGdCRDloeGFkb005QWFTTHhQVlJNZmdDd0J0M2h1MGJIUi8yWUFPc3pUYTBqR0kvK1RZVDRzcC9pVW9teURnRTJHNUNxTEQzMktlYXZEZGJlK1R5R1BIRnNnV20wVDJjVC9nZjY5ZmVIY0ZTMUdjcFRYVkdkUTNLS2g3dVVUZ1dqbEtYankvY1dNQ1haMWxxdDRsdTBpQXcyZk1JYjBSRmF4NGFhUFJXL01QaDZQYTZBTXIwd0JCRklTa1NsaTNWN3BSM2dXblVieVNIU0pxWTFHc3QwTUNwSExEdzhxNExnTnRwNmNNLzZGcndIVkd0SW93TVJMSTVqcWRVbWdKVUJ4VnQvMExVNmVLbm94ZWlqUW9lVFpZZ3NUWjBDVG1YbzE0U2V5OFdFRlpJUFYveEcyc0JlL0k0L05pVnZ0MVNKSm9tTGJVVmRQeXdkUExYcFpmWTV1RXkySnErc3YyWWR1Sm5lcEpQbkxpUG9McjhHTXFIWDllbEQ3bEtiU2d0YU5vbHViT3lYb0F3V0RNN1VTNjZnOW8rOWxGLzI3dGdqMkhLU3RhM0c5b3FqOFdpMkRkamdiMGwvZTY3dEF1OE9qS0VlWDRLMS9tb3lJTjR1WDNOWExZbndQeGhMUC9VcUVvUkUycHhhcStoWEVyUTI2MzA1Y1VITFAvQlZ2OUtndnZBUFBDRGJGYjgrSUJ0SzRJWVM1VEt1cWJYR1Nhc2dmTGwvcENVRkxaN24xNURsTlE2MVZzQXExL25mRUt2aUZSZHFDQWZoUEQyYkVESFRlaU9qcUlNb0RIVFlHZTJ4dXpQRllxdDJKWGFkTmFuaFZQSWFyVlk3cUFQQTFXZ2o5blhCYTB0YmxpNmdwaW0xeXhnbVNWbk1FR09zekxrcTNGWEwvZEhRd045Z3V5dERlenR6bkxyVzNvemF2Ykk4NytVeUNTdGF6cWk1eHhGMEFKZWhYZ3Jyc0pMSG9MSGxUL3UwcVRQdS9zd2lKMDVoWEk1NHZFSUowOWIxakhZdTVpSUM5eURwWFhPRUcvRVp5WWpKMDVvaWwvV2JXTTZNL2FPMW84NnlZNUszSHdVWjNTQmxIR09mZm1aSC9YaklsejkwdWNQdHFzU1NYVGxuYzN2RFdremxvYW1kZUcwTUJKek8wL2R4R3lWb2tYMlp5MEtlMDB6aHJhN0lic3FEREppVjh6UFhYU0IzWmtwNVY3UlRTZzZYOWVkamhqUjNYL1hBcTJWUHpKck03cSszbTNlM3dhNGVJOFRGY3ZCdVdsdnRrcDE1c2N6SGNkbUJvQm53a211YXM0K3pydzRwZ2dOTTBBMjhSWERweWY5YUJGNTYvL1dOb1FwTlAwd092NmZCdWtnMGlJeWRLZ0ZCR25ObHBNUFJMVHZWZ2Fmc0NYQVJhU0ZtN29tak0wWVpxZVptcWhmN2FVaXNueFVXRmM5TTY2Wjk2RzdwMFRVR2RPWGpKSlJGOEpiSVUycVlUZHBXMFJLa0tXcFpXMFV3ZnNYa0VBblhXQUpPK29MQlNvbW5GSHpKY3hBQWhqbVhZR01WeDJ5TTJzUXMxSi92bDNZd0hBYUxTWGRqQlJ5eXhkcUkzbVNCbGh3djl2eUxweThaSmkxbHhMMkx5RERhaGkxbk5EekpBMmVwbzN1SWFtcnV2T3FzVHZTNjlmdVVSUnIvclhGQmlGZlVadGljVWxvTWVxWFcycU8ySDN3ZlVVTC9DSk02U3BFbnNEVDBiNHNCSDBWMDRvUm9UVmNYd3N3QVZBdWhkWnRpY1ZRejZKcWFKdzR6WU9KOHJobUJxRWcvYVMwTEtrekRWYXNYakNKTk0yT0xjay9PUDJpT2VvU29xbjQxYmZ4OU1FcWl5ajdvMjQxWUl4dmcyY1BSdlpJL3YvTEtMbXRMNXRnWk9nL3BVaHVkbzNaQnpQdktjSGhkekZHQU1YajBubitrY0NMblVVb1FYTWZja2JlWHg2cUp0cFk5NVdDTjBkRW83MGVLQ3hoUkxDVFJUTHUrZFpCZE9XYlkwaTRia20vNnJMZVVKMU44SFl0OWRrK1g2L0JqTnlwN1JnVUE0MVNSMWV6TWN6YjJaZERPVk1zK3c0RjRGV3RGVStPS0lHNUtOZjF2V2srWThJSGJCdHNBOE5lWThaTHkzWk1KOXJFeW5wZy82MnNsZU1DelF3QnFzMks1VnY1MXFHdldpcVd6dmUzZE5KNHlKVXlJdDdJbFNPWjVyamYxKzlCU3cvWE84MFU2R21LblBDVTdZQUEvdTZxUnNuZWxhYXQrbEZLTlMrU1hYUXVLVVZMdGpSZzdoQk5TbjNCYjl3aWdzQzFhamdMZmFOZFVEbWI2QVNlOUFJZXlIcFVPVUpXRWF3cEF4Skw0UUhBWUhvZWhxY2dzcFJLZmtwbzU0Y3dzOWNOajhubEtLandCaWErTTVwVFBPcEZjUk9oVU0xQUFMRXEvbG9BSnBXRHhFMVJqeUVaTmpGNEFZUDZMUkc1QUNUeGlMNUM4eCtVem5hdVFselRCNjI1K21xR0FmV0lUaGUza0FUazhpd2IzRzhETWVBR2hNSHhTaHp1WmtHYjRqMDM1aytqZGdsSjVBMi8rcWY2SHRQZk1CeVkyT2M5SUp6dWFJQ2U5RWZaTythcW9YZzgwQURCVC9FUGp3MmFMVjd5b1V2YnV6R0M0aFRWNEwwY2NaZC8yN0ppaVJyUldOQUZ1WGJvREpGMUVxdUJaanlXbHhYR3M5REZTajVUVVYzcWhPanVUalptU05Ia2JYTmN1V3ZWSnllQkpSTkhQdkRNdVRDdDl0TjQwSVVVc3loa3VHalQ0MzdjVGVEZFVhNmdha0hXUXNIdExsa0hTQWxEUTgxaHJZTEFMc0dRSHNhUmVHQzdFdVkvdmdYOTBUaW9UWXB1bTJFOWJybEp2QnpTVkhmaTBIVnNxcExOcmhwSUM4K0hPa3doanhaS01UeEtQQmduVW5uYUE3ckhzc0NYSmV0dVBBcTZhWWFMTWhPZUdoWGdEVnc0a1RBRy8zbjFFSC9yeW1LZTQ2Yml3ejlXZ25UOWdkc3dEU1l5a1JyOHZOVFpsTkx0bzdaM2NjOE5rRFVXRHdUR0M2V2tTTGt2aUdQbmZFOFZmZ1ludXQzRk5YSENhdlJqbUFGcnRqc0toSDVrZlVtZ3pLRVEwTm9vSCtvTGlVZkszVUp4bUhBV3lpRjk1Ty9sTHBoNTlPUEJyazBCSjNMUTlURDNCL3k5VWF6Ynplc1llRFpiTEZUNFphZTdQTlZNZ0VGR3pKVXp2UFIwbVliVkVhaVd2VDNucWR5MlFGcEJiVXhMeWpJcUJHcEtJT1lDM2JiMGZqSGpUWXFjWTVFTnBJNXVFK3RuQjh4SU1kY09KOEszbXRKMllpQXpENkRoa3hlUW1Pcm5JRFpVaXFCTHY1QnFqRkx2Sk9leUtoOW43VUJYRVZFZXk1bThaNXRIc25nMXRQd2srSVNLajdHc1lIUFRlekN5UlZ3ZHVlV1hRS3FNUUVXZEtCM1BkQThJb1RzYjYvZ0JYQkNsVmJuM3V1ZHY4Y0p1aG5qWXZLclFWcnk5WEZ1T1FxUTRiVS9sK0x0clNWUnRYMEZkVm01dityY0o1dGR5REpydGtZSzJiZzBvWVp2NzJnc3lDTnh6T1JCWjk1OGVua1F4R0tBcHJ6UTBxYkwzbnhIbFF5R3Q0eTN2N2oybWJHcUJlTjJmRE1SVENva0FBdkpiQUE2SzRLQ2R1ajYreXlDSno4bWoyVmhBeTd1QnhsNDZEbmZMVHRudTFpb3NFaDRENldWLzJvanlNdG93YVBsbG9uczNlQXZQelJwa0FTbUFBQmhjb2dFTlg2VzFhQ0trTFBwbkxsQ3RCSVF5cnpXYzJzcnpxRjZDRC9EVGJvYmJnN1NMNEx2ai8yMjhzOTd6MGtTWTJ3ZFN1WGJQR3VlN3EvMndBU3NBdzZ3bnkvVzh4QmR6UU5qaVMzSXU4ckxDY3ZZL0hkdFJSTGhhaVRubTZ0a3AvaEdXOXZtT2ZDQUxZNXU5SnhONkV1a0FwUUZaQnNmNkhINm4rZVA1MUQyOWlqNmoxa3NCVEVDUloxd0RZQTc1V3Y3UmxRTkpKcDBhcld5cWFaQmRkYnFSN3gyWmdoR1JHcGxPNENTT0JwTUFZVGtodkZ6cEp5dGJMVDI5RWluNzZ3VDg4aktiRXQ5b3Z4cGFla2s4QkdIUUFCUnRTWmowYTQzV2J5c2VmUW1Gd1JmY2IwQVJRVmZVamxOZmkralZoZFN4eUJIRXBBTkErdXVSVHNBcXRLSkdidEFrallYYzAzcWNYeVhYZGVLZVhnM0xIOFhWS0pnMmlOSFNlVkxyc2NRNHJWbVRlNDQrV09PNjJjMFBuSDlDRDdZRVNhWGRVSXFWcnNBQnk2dDR5ZUVSQTdGaVFjM3JjdnFuMzVQSFNwV3dMVWlzQ0ppR2Z1T2JqRFZ5cDdwdld0bkNvZkw5YVpEOTBPQlI1SnlaSGpKTmtJNUFQQ3JydlBSQVJKY3VlWVo3cDZIMmdLcEdMdjJoQS96SDMzaU9hUlNRcFFzTFpEa05taXc2UmFUK2lISUxlT1djU1RZUDJHLzE5QmZRYndPbmsvUGJxNENkOUNHdTR5UkVKWGFVR3hIRjBsVDM4OFhyemkzWWVoaWVWVGs2eDg2UFQ3YTl3QXNaQW9Kb2VaMzNoRlFaQ0tOb2dDNGIyQXMzZTdpQjVPUFZScjNTY1prTjJlV1VVVmt6TnY1ZldjRFFkTzBmSHNzbHNleXdwNnJOTG1tSldzMmtna2JoNi9FaG12ckFSbzhlcHJDREE1N205UUtrWU9CS3V4dlpEOSt3dnFmbW03d2diSURkRjhnWXdzaEUxaERlaHg5dDd3Z2xuTURlMDN4MjJaOU9ra1JlQ0lzWitodGJIU1RNZ1RFYWl0UE85NTZoTjNmL1dpVmgzbERuOUx4a0lJcVF4MWlPc25YaEM1TVNtT1Qxc3NQSG5Hb0Z3SCtSNGYvWEt1SkZFdkRrVXloUUczRXVmRmg4ZnR1MzVpS3l1aUNSclBuS2pOS0cxVUEwNko1a0hTdlRCZ1pkM2VZUzN1dkZhblFqRWN6MzJ5S0RoeXpGZVp5eElLL2VVNE9keGRnUmpodlV4dXQ5OEZvRFpMVjdEdExBNFA5eGtqZDNzMlJRY3hLTGRMaVVpWE9XOE5KZGRRUWhuSDlvamJYRnlpSjFNRHEwYkdURHI2Q3R2L1c2NC95K2NpenZLWE9OL25scGs2a1ROdmZyVno1bTcxUEw5R2haVXd5RGx5UmdtZnE0MFZvcm93Q2NxbzVjNHl3VnNxS0ZUdHF2cHlNSXhIZ1hweWhQV2ZTcGt0MWw4NS9oajMycGk4VHJhUk5HekFtL0JBYkxNaVp4MVF1ZTM0NHNETm8wbWQ2MUdJbHpaZVRzSWVnb0ZmWHo4QVVkK2ErM1BtYVNqNjMreDZDWHNQb1l2eVc0c1krc3c3RG5EZWJpUVJZVDZIQ1RHMGhpSXZQSEtZbHl3MS9sV0FLN0p1bndyMzJUUnJkRmw4enNkbk5BR2F0TUJSY0NvY25BT1Q5YmhCakpKaDVaUXZTbjBzZ0dKc25vbFpuUnlXOHR0b3pFdmhETzZNWVY0djRZQ2xDckNiMEVkQXNWWk5MKzBWdUhySTUxZHc5OG5KbWpWSjY0ZzJIR3BJRjVOUGdQZE1QcnhKVFpITDFVcG1GSlp0ek9sYnphUnRzKzJJeUFwZWhVNXY3QTFGdXBUQXJkazZrdTNPRGR2azRQMnlWbU1nbDZ5NjNiRTF3L2FjYXFxZ2VGemJWZmlKMVBqcWFWaVUwM01uMVNaemovMTRLT3lXR0dpMVBhcVZoelhXaWh2d3d2Zllidi9wcTJUdG5Cdm1xQ0JjR1JsN3BDKzRSaytsMFBWVHh0NFZjNFRHb0hzemd4emU5M2FNNllORmVucGVJQURqR2gzNTZIMFBwbjFjYWcyV2pseHJuRHMvOHVBVloyRjhxNFRZdkg3VnVFZ05pUXhjRHdqV0kxNjZ1eG9YS0tWMkpkSlRTNnFYMGpHc2JLWm5QdlhHTjV0WHdHdUFYZmZJTVFIZ1k2SXJKN05GNzZqL08wRDBySFFvdTdneHRwYTI0dFBvUDBuQkx1dGRqMTdCalhwdUlWQlZsMUFxajc3Qi9qN25BS3pCSy8wbEJXVWJTankrL1F1OW00dUZCT1ArVEl2K2JCYkxlVWpjVTI2NWRWaCtqYjgyZjd5aDVReHRRdDJ4R3M3M2tib2JSRTgzSWZhMlhKWnZRZmU1M3podnU0a1pCR2czeDFqTzFOTU5TejRoeEtvWm9YR0JKYnpRaUx5Sm1oL1kvS1RVOXhreVlCdk92NWRhVCtYdHdEeVhTeHRhSERUREVIMlZ5MVg2RG1LV3RCaTQ2MlBJZ2cwRUI0TzljZ25GNzF4YmRtUlRBSklsS2VqUWdMMFk2RkdqM0dxUjRmbDdyZGRETjNpOU5BSFJZY0d3N0ZHRlByZVpVN1lPWGVneTk0T0xtWU1pSVdDNnNyb3FKOHl1T2ZYVDl2NDMyS0d4NEU3K1RMcG4zRkxsVHNqbVFhdE44cjYzSytzUkdRNEJuc0NNaktUR1Q0d3NGMm5iUElHcVBaRlpPbDJERVdhYnloSFBCSDBwWC9yd2t1ZXJhOWFMTEtGYm8wWCtRbXdtNEJrZFZ4YnlnNEdsTmtzelpreWhJQ09GRHcrTzFldjVwUmdpdmNUSVhzcy9mUnVYN2dKcWJWa0FCK0JtNEVFVmsvbkJ3SnFOOS9qNDRJQTRzUmh0T0lqRHdCaWt1bjI5TVJFMndhQ0sra1RXc2svcSs5aERSMEs3cWl1RGxHdVV0dzNzWTh0SXU2V0RibGxleGg1R2xTUmlUNU80STJwaEdkSTUrQkt1QWJhT3lVNldDcE1FNVBNU1E1SnNWdkZGdU1qOEhvUmxvbjk5TVhvdGJLdWpuVDQrVDhKWU9HbWNnSnhDY3kzbmN2RkNJY3lndTZ6WU1EdnJTU2tIdFc5S1FOTDZ1YXlubU5POExNYWFzbHpGQU9DYWZaRUFjY1N3REhzZEdFQWFFUmFUUWdNVHBmYmVkQUN0MFVmQWwyRkdCWHAzcDRmeXVJZmpES2RwenFBZkdBd0RWaTVHS2lKTEZZWEh6d0FBQ0VZaGdOQWlQVnQ1NDJsblRiUHNwZElmU20rQTl3RTFubkFoMHo1R2l3OStJallSQTFFa255WERlcHpVQmEyV0djSmVOTTJRbXFwREYwcitSb0pjb2FXMjEvc09sTVpmS2tKZmNkUEZQK1JoVDhIY1EzbE16S3A0dkloRXVOQjl6SWRpYUNKSFRMY2ZkRUhncGR5VEdUMmZhQlZoRFduUUlKeDNmN1BFamplcEU1Rnd5bGdOa09BWmRIYTFLaytjYTNJbEV1cmZZNGg0Q0ZENExlRnhnR01SQ0xoc1JHYU5udHBWMWxyaFc0d0c2bkc3cjRadHVDb2pyTEIrZTRnNE1zeW9PblBsbWFZQkhwbGJCQlhJR0doN1ZZMjJPVHhTcWg2SlpDdVFlT3ZyK2E0K09XZEU5andnTXNKdnJpanI4QnpyN1R0cGYvTGFYalFtRlNmVi9RL1JCek1uMXJsY2VncXJ2QUZ6Yzl5MzUycTByUkpWOFFONm9JQ2JWZjhnQ3dzZUs4Si96NjBDR0Q2czNPUCt3T2RHamswRGFrdFNuRlQvOXFDRmJ2V1N3N2JVVXR0VHNYWU9yMm9QR1c2S2x4VVZiS2Zhd3I0ZnBBUTczKzRBWDQwbUtLZnNoWTVpMHVXcVJSNzlkZ0xwekN6Y0JPeFYyT2pmRmcxNzVQRm0vK21rbXVTWitsWktPYTh1OVVwUmVuVSs4YVVxdTlFbWlhNXRFdUZ2cmlrclhReWNhMHZzWjVwNGlwU0cyajU3clhFMDJMRDhaZDM1SVRXekhYc1NaSFJ1Z0xDNkdLMHhvbGdRU205b0RyRWF3ZkcvUGtXN2xEOGtJTnV6aEZKWVJnYzJudDhYOXg5UnU5anJxVVQ0dU8zNXNENmdiTnJ2S2Nob1krM1p0b3JPQ3pXNFVkeUJTQk40QlNiY25jeGticmw5R3dwQlFhMnIwT2doQ0IyVkNLUXhJb3p3RWxiSno4b3VLVXVBNEIybE9iU0pTdXdRME1ZRXV6ZVYwcG5jWWI3ODNUR0R3LzN0NXlrUmNlWWx2YmhBZ2NRWGdFc0hySG1kN3VFNmMxT2FoZms2Z3Zod1lqZ3JpN0R2djRXUGYveXNsejJHeU40NjJSOVh4Lyt1Y1ZlWldTeVZESFN2NWltVzlYMzl2RVdEemthSnRRaWthSkwrNTl0Y25BcXBXQ05mTkhUZWFjVEl4eXFwTnZ5UjYwcnYya2lBZ0dzSDQrY3lmRmhXTmliNkg0Ukw3Y21vOUp3K0x0V04welVWc1d6Q2dLSUNWd295VnVPa245NWsvSlJ5MEw2ZlExVlpzeGphcVRCNVRMMDhIbnE0N3l2dlRyTDQyQ0w5dWFuVlg0SWQzWXFqdE8va0szN25Kd2lDb2hqVWhPdkJBMERxZjB3VlNkbXFaMW83N1R4YXRkanljUUFrbjVxZGVwcXdWbWwvSHFDdFRrQnNIa2RRNnQrL3lMMTExaFVVa1pibThBRTI0VkFqQm1YLzVGOUVCTHNoQ29qWmdEdHRyUWFzYmJzQjdUeXFPTFJ6eGh2Z0txc2dmOGFxL3picGZwclVtVkZPYjZuWmc1d2tLLzZWZkw1RUFGdjluQ0lqckZQcFV0cm5vRnRrS3E0SU56ZzdtS1RnQWh2T2VTeURLTCtGOW5kdVJ4eUZoRjdnOGFuZlFMQlNjTnVDMlIrdTFQRUJuMUZvS3VFc2tWNWM5YzQzNldadkowd1FaUUFHWWxmdGZPNStTbHRuTzlKYU0zS1FuTGxqdUozdndvd2VHcmk0N1VkZEMxWVhUOVZPdkdza0lCaDA0NVBTNnBOcEt5dHRlU25jNEs4anluUS9ROVJqcmVLUlRJSVhna3hiN1dMZEFNMVZKUnZVMEFRVTZRb2NuY0hLTGVNNXBuM3cycnpWbnp6VEYrQzBHN3hmQUsvOHZmbWVMNm1LKzN2K1JGMXAwS0hDeVpCYUlEQ3FhMkp5aDBKeUk0MjFvanRUSWRUUzhZUTlDRFY0WEtGY1NCcXVrU3VlZ0FDRWF3akdteGM1WXdhNU5BSWxOczBxeXc0S0huUS9DUENQTmRwTmpkR2xsZlBJOHVmQWI1KzhIR056a094dE9lZlp4bmsxRWpoZHVwMnAzamNaV2VDTndnYlZGaUdaU0cxdnB0dGF2L0QraEZiWko5RmZwMWI1enRVbDFEdUxHRXhERlBTbjNpQndDOUpqSFJzOHMwYW5TdHB0UlY5dk9tZlY3YW1mQk4yS3llRlR3WWZpcVRodnp6ZWlDZTg1enpsWmFJVUFiaXdKbmhSSmkvdjYydVRhTkpsQThnTlFpRjdEcTViL0E4MXNMTFlndTUyUzJ2bnZzaUtLd2gzdnpBZ0M3cUYwZHpSTlh4VWR0M1NoVUFJTkN6MTNzWVVFMU4rdWptemxxZWV6K01BL0tYejE4cWdmakc1bWlxQUx6V1p6eVN2dVhvQVEveFpWbTUwVENUZEJoTHVtQk4xOGJTaWdpek8rMURldm5aOE81ZittNkplaThCN096VFpPZzZpWTNwQ1ZaL1R2ejF1eEVwaU9KTFRtd0Uxc002bFZpYUR1UG9DeU9IdDFlT3dTdno2eEkrUm91QTliajQ2dFlrQ0lVOFQ3WW5GRTI4QWZJeUxzcDRraDNGeXJCUmRtSTF0NlN4dnpiK3dWbVpyYTJsdEY5SFoxRHE3NS81SnZyUjBwZ1N0dXVTR0FBY2F5Rm1sT1VkTmwrUDdBcHg0VUw0ZlorLzlJOVAzMnBna01WcDhrMkY2cjd3Q2h5dXpPR2Flcno0QW01cWdDc2NtSlNpemxjdjZESVY1ZWFDL1NTUTNSTkNkUi9DOVFyUUFBQUFcIixcbiAgICAgICAgXCJyZWN0XCI6IFtcbiAgICAgICAgICAtMy41LFxuICAgICAgICAgIDAuMTcsXG4gICAgICAgICAgMS4xLFxuICAgICAgICAgIDMuMTNcbiAgICAgICAgXSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4xOFxuICAgICAgfVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHI6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkociwgciwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuLyoqIEEgYm94IGxpc3QgaXMgdGhlIG1lcmdlIGxldmVyIGZvciBldmVyeXRoaW5nIGluIG9uZSBtYXRlcmlhbC4gQW4gZW50cnkgaXNcbiAqICBbY3gsIGN5LCBjeiwgdywgaCwgZF0gd2l0aCBhbiBvcHRpb25hbCBzZXZlbnRoIG51bWJlciwgYSByb3RhdGlvbiBhYm91dCBYIGluIHJhZGlhbnMgYXBwbGllZFxuICogIGJlZm9yZSB0aGUgdHJhbnNsYXRlIChhIHNsb3BlZCBrZXlwYWQgc2hlbGYpLCBvciBgeyBjeWw6IFtjeCwgY3ksIGN6LCByLCBoLCBzZWc/LCByb3RYPywgcm90Wj9dIH1gXG4gKiAgZm9yIGEgcm91bmQgcGFydCBpbiB0aGUgc2FtZSBzdWJtaXNzaW9uIChhIGRvb3IgcHVsbCBiYXIpLiAqL1xuZnVuY3Rpb24gYm94ZXMobGlzdDogKG51bWJlcltdIHwgeyBjeWw6IG51bWJlcltdIH0pW10pIHtcbiAgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShiKSkge1xuICAgICAgY29uc3QgYyA9IGIuY3lsO1xuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGNbM10sIGNbM10sIGNbNF0sIGNbNV0gPz8gMTIpO1xuICAgICAgaWYgKGNbNl0pIGcucm90YXRlWChjWzZdKTtcbiAgICAgIGlmIChjWzddKSBnLnJvdGF0ZVooY1s3XSk7XG4gICAgICBnLnRyYW5zbGF0ZShjWzBdLCBjWzFdLCBjWzJdKTtcbiAgICAgIHJldHVybiBnO1xuICAgIH1cbiAgICBpZiAoYls2XSkgeyBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJbM10sIGJbNF0sIGJbNV0pOyBnLnJvdGF0ZVgoYls2XSk7IGcudHJhbnNsYXRlKGJbMF0sIGJbMV0sIGJbMl0pOyByZXR1cm4gZzsgfVxuICAgIHJldHVybiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKTtcbiAgfSkpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvIC0tIHdoaWNoIGlzXG4gKiB3aGF0IHJlbmRlcnMgYSBidWlsZGluZyBtaWQtZ3JleS5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIG1ldGFscy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhIGhlbWlzcGhlcmVcbiAqIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvIHJlZmxlY3RcbiAqIHJlbmRlcnMgYmxhY2suIFRoZSBhbGJlZG8gc3RheXMgbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKlxuICogVGhlIG9uZSBwcmludGVkIGdyYXBoaWMsIHRoZSBicmFuZCBmYXNjaWEsIGlzIGEgY2FudmFzIGFzc2lnbmVkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbi5cbiAqIFRoZSB0ZXh0dXJlbGVzcyBkZWNsYXJhdGlvbiBkb2VzIG5vdCBhZmZlY3QgdGhhdCwgYW5kIGl0IGlzIHRoZSBkb2N1bWVudGVkIHJvdXRlLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU0NCQmFua0JyYW5jaEJ1aWxkaW5nTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdTQ0IgQmFuayBCcmFuY2ggQnVpbGRpbmcnO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG4gIC8qIFNoZWxsOiBTT0xJRCBib3gsIG5vdCBhIHJpbmcuIFRoZSBwcm9wIGlzIGFuIGV4dGVyaW9yIHNoZWxsIG9ubHkgZXZlciBzZWVuIGZyb20gb3V0c2lkZSwgc29cbiAgICogYW4gaW50ZXJpb3IgY29zdHMgZHJhdyBjYWxscywgZ2VvbWV0cmllcyBhbmQgVlJBTSBmb3Igc29tZXRoaW5nIG5vYm9keSBzZWVzIC0tIGFuZCBzb2xpZFxuICAgKiBtZWFucyB0aGUgc2hvcGZyb250IG5lZWRzIG5vIG9wZW5pbmcgY3V0IGluIGl0LCB3aGljaCByZW1vdmVzIGFsbCBmb3VyIHJldmVhbCBmYWNlcyBhbmQgdGhlXG4gICAqIHotZmlnaHRpbmcgdGhleSBjYXVzZS4gU2V0IDAuMDYgbSBJTlNJREUgdGhlIHBhcmFwZXQgcmluZyBvbiBldmVyeSBlbGV2YXRpb24gc28gbm8gd2FsbCBmYWNlXG4gICAqIGlzIGV2ZXIgY29wbGFuYXIgYW5kIGNvLWZhY2luZyB3aXRoIGEgcGFyYXBldCBmYWNlLiAqL1xuICAvLyBIb3cgZmFyIGZvcndhcmQgdGhlIHNoZWxsIGZhY2Ugc2l0cy4gVGhlIERFRkFVTFQgMi41MCBsZWF2ZXMgMS4wMCBtIGZvciBhbiBlbnRyYW5jZSBjYW5vcHkgdG9cbiAgLy8gY2FudGlsZXZlciBpbnRvLCBzbyB0aGUgY2Fub3B5IG5vc2UgbGFuZHMgZXhhY3RseSBvbiB0aGUgZGVjbGFyZWQgNy4wIG0gZGVwdGguIEEgYnVpbGRpbmcgd2l0aFxuICAvLyBOTyBmb3J3YXJkIGNhbnRpbGV2ZXIgbXVzdCBwdXNoIHRoaXMgb3V0IGluc3RlYWQsIG9yIHRoZSBwcm9wIGlzIGJ1aWx0IHNob3J0IG9mIGl0cyBkZWNsYXJlZFxuICAvLyBlbnZlbG9wZSAtLSBNSyBmaXJzdCBjYW1lIG91dCA2LjMgbSBkZWVwIGFnYWluc3QgYSBkZWNsYXJlZCA3LjAgZm9yIGV4YWN0bHkgdGhhdCByZWFzb24uXG4gIGNvbnN0IFNGID0gKEcuc2hlbGxGcm9udCA/PyAyLjUwKSBhcyBudW1iZXI7XG4gIGFkZCgnYnVpbGRpbmctc2hlbGwnLCAnQnVpbGRpbmcgc2hlbGwnLCBib3hBdCgwLCAxLjc3NSwgKFNGIC0gMy40NCkgLyAyLCA3Ljg4LCAzLjU1LCBTRiArIDMuNDQpLCAnd2FsbCcpO1xuICBjb2xsaWRlcnNbJ2J1aWxkaW5nLXNoZWxsJ10gPSB7XG4gICAgc2hhcGU6ICdib3gnLCBsb2NhbENlbnRlcjogWzAsIDIuMywgMF0sIGhhbGZFeHRlbnRzOiBbNC4wLCAyLjMsIDMuNV0sXG4gICAgbm90ZXM6ICdBc3NldCBkZWNsYXJlcyBjb2xsaWRlciBcImJveFwiLiBPbmUgY29udmV4IHByb3h5IG92ZXIgdGhlIHdob2xlIGVudmVsb3BlLicsXG4gIH07XG5cbiAgLyogUm9vZiBkZWNrIHNwYW5zIHkgMy41MC4uMy42MiBzbyBpdHMgdW5kZXJzaWRlIGlzIHN1bmsgSU5UTyB0aGUgc2hlbGwgcmF0aGVyIHRoYW4gcmVzdGluZyBvblxuICAgKiBpdC4gQXV0aG9yZWQgZmx1c2gsIHRoZSBkZWNrJ3MgYm90dG9tIGZhY2UgYW5kIHRoZSBwYXJhcGV0IHJpbmcncyBib3R0b20gZmFjZSB3ZXJlIGJvdGggYXRcbiAgICogeT0zLjU1MCBhbmQgYm90aCBmYWNpbmcgZG93biAtLSA0NiBtMiBvZiBjb3BsYW5hciBjby1mYWNpbmcgc3VyZmFjZS4gKi9cbiAgYWRkKCdyb29mLWRlY2snLCAnUm9vZiBkZWNrJywgYm94QXQoMCwgMy41NiwgKFNGIC0gMC4wMiAtIDMuNDIpIC8gMiwgNy44LCAwLjEyLCBTRiArIDMuNDApLCAnZGVjaycpO1xuXG4gIC8qIFBhcmFwZXQ6IGZyb250IGZhc2NpYSB3YWxsIHBsdXMgdGhyZWUgdXBzdGFuZHMsIE1FUkdFRCBpbnRvIG9uZSBjb21wb25lbnQgYW5kIG9uZSBkcmF3IGNhbGwuXG4gICAqIFRoZSBmcm9udCBpcyB0YWxsZXIgdGhhbiB0aGUgc2lkZXMsIHdoaWNoIGEgcGxhbiBleHRydXNpb24gY2Fubm90IGV4cHJlc3MuIE91dGVyIGZhY2VzIHN0YW5kXG4gICAqIDAuMDYgbSBwcm91ZCBvZiB0aGUgd2FsbHMgLS0gYSBjb3BpbmcgZHJpcCBlZGdlLCBhbmQgd2hhdCBrZWVwcyB0aGVtIG9mZiB0aGUgd2FsbCBwbGFuZXMuICovXG4gIGFkZCgncGFyYXBldCcsICdQYXJhcGV0IHJpbmcgYW5kIGZhc2NpYSB3YWxsJywgYm94ZXMoW1xuICAgIFswLCBHLmZhc2NpYVdhbGwuY3ksIEcuZmFzY2lhV2FsbC5jeiwgOC4wLCBHLmZhc2NpYVdhbGwuaCwgRy5mYXNjaWFXYWxsLmRdLFxuICAgIFstMy44OCwgMy43NSwgKFNGIC0gMC4zMCAtIDMuNSkgLyAyLCAwLjI0LCAwLjQsIFNGICsgMy4yMF0sXG4gICAgWzMuODgsIDMuNzUsIChTRiAtIDAuMzAgLSAzLjUpIC8gMiwgMC4yNCwgMC40LCBTRiArIDMuMjBdLFxuICAgIFswLCAzLjc1LCAtMy4zOCwgOC4wLCAwLjQsIDAuMjRdLFxuICAgIC8vIEFueXRoaW5nIGVsc2UgaW4gdGhlIFNBTUUgbWF0ZXJpYWwgZm9sZHMgaW4gaGVyZSByYXRoZXIgdGhhbiBjb3N0aW5nIGl0cyBvd24gZHJhdyBjYWxsIC0tXG4gICAgLy8gZnVsbC1oZWlnaHQgZmFjYWRlIGNsYWRkaW5nLCBjb3JuZXIgcGlsYXN0ZXJzLCBhIHBsaW50aC4gVGhpcyBpcyB0aGUgbWVyZ2UgbGV2ZXI6IHR3b1xuICAgIC8vIHBhcnRzIHRoYXQgc2hhcmUgYSBtYXRlcmlhbCBzaG91bGQgbmV2ZXIgYmUgdHdvIHN1Ym1pc3Npb25zLlxuICAgIC4uLigoRy5wYXJhcGV0RXh0cmEgPz8gW10pIGFzIG51bWJlcltdW10pLFxuICBdKSwgRy5mYXNjaWFXYWxsTWF0ZXJpYWwpO1xuXG4gIC8qIEJyYW5kIGZhc2NpYSBwYW5lbC4gU3VuayBJTlRPIHRoZSBmYXNjaWEgd2FsbCBhdCB0aGUgYmFjayBhbmQgc3RhbmRpbmcgcHJvdWQgYXQgdGhlIGZyb250LCBzb1xuICAgKiBpdCBvdmVybGFwcyBpdHMgc3Vycm91bmQgaW5zdGVhZCBvZiBtZWV0aW5nIGl0LiBVVnMgYXJlIEFVVEhPUkVEOiB0aGUgK1ogZmFjZSBzYW1wbGVzIHRoZVxuICAgKiB3b3JkbWFyayBiYW5kIG9mIHRoZSBjYW52YXMgYW5kIHRoZSBvdGhlciBmaXZlIGZhY2VzIHNhbXBsZSBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZVxuICAgKiBjYW52YXMsIHdoaWNoIGtlZXBzIHRoZSBicmFuZCBncmFwaGljIGF0IE9ORSBtYXRlcmlhbCBhbmQgT05FIGRyYXcgY2FsbC4gKi9cbiAge1xuICAgIGNvbnN0IGYgPSBHLmZhc2NpYTtcbiAgICBsZXQgZzogVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gICAgaWYgKGYuc2hhcGUgPT09ICdkaXNjJykge1xuICAgICAgLy8gQSByb3VuZCBzaWduIGRpc2MsIGJ1aWx0IGFzIGEgQ2lyY2xlR2VvbWV0cnkgZmFjZSBwbHVzIGEgc2hhbGxvdyBjeWxpbmRlciBib2R5LlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBvYnZpb3VzIGNvbnN0cnVjdGlvbiAtLSBvbmUgY3lsaW5kZXIgcm90YXRlZCB0byBmYWNlICtaIC0tIHB1dHMgdGhlIHdvcmRtYXJrIG9uIGl0c1xuICAgICAgLy8gc2lkZSwgYmVjYXVzZSBDeWxpbmRlckdlb21ldHJ5IGxheXMgaXRzIGNhcCBVVnMgb3V0IGluIHRoZSBjeWxpbmRlcidzIG93biBYWiBwbGFuZSBhbmRcbiAgICAgIC8vIHJvdGF0aW5nIHRoZSBnZW9tZXRyeSBkb2VzIG5vdCByb3RhdGUgdGhlbSB3aXRoIGl0LiBDaXJjbGVHZW9tZXRyeSdzIFVWcyBhcmUgYWxyZWFkeVxuICAgICAgLy8gKHgsIHkpIGluIHRoZSBwbGFuZSBpdCBmYWNlcywgc28gdGhlIHNxdWFyZSBjYW52YXMgbGFuZHMgdGhlIHJpZ2h0IHdheSB1cCB3aXRoIG5vXG4gICAgICAvLyBjb3JyZWN0aW9uLiBUaGUgYm9keSdzIFVWcyBhcmUgY29sbGFwc2VkIG9udG8gYSBwbGFpbiBjb3JuZXIgb2YgdGhlIHNhbWUgY2FudmFzIHNvIHRoZVxuICAgICAgLy8gZGlzYydzIGVkZ2UgZG9lcyBub3Qgc21lYXIgdGhlIHdvcmRtYXJrIGFyb3VuZCBpdHMgcmltLlxuICAgICAgY29uc3QgciA9IGYudyAvIDI7XG4gICAgICBjb25zdCBmYWNlID0gbmV3IFRIUkVFLkNpcmNsZUdlb21ldHJ5KHIsIDMyKTtcbiAgICAgIGZhY2UudHJhbnNsYXRlKDAsIDAsIDAuMDYxKTtcbiAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCAwLjEyLCAzMik7XG4gICAgICBib2R5LnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgICAgIGNvbnN0IGJ1diA9IGJvZHkuZ2V0QXR0cmlidXRlKCd1dicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV2LmNvdW50OyBpKyspIGJ1di5zZXRYWShpLCAwLjAyLCAwLjAyKTtcbiAgICAgIGJ1di5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICBnID0gbWVyZ2VHZW9zKFtmYWNlLCBib2R5XSk7XG4gICAgICBnLnRyYW5zbGF0ZSgwLCBmLmN5LCBmLmN6KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQm94R2VvbWV0cnkgdmVydGV4IG9yZGVyIGlzIHB4LCBueCwgcHksIG55LCBweiwgbnogLS0gZm91ciB2ZXJ0aWNlcyBwZXIgZmFjZSAtLSBzbyB0aGVcbiAgICAgIC8vIG91dHdhcmQgZmFjZSBvZiBhIGJvYXJkIGlzIGEga25vd24gc2xpY2Ugb2YgdGhlIHV2IGF0dHJpYnV0ZS4gQSBidWlsZGluZyBjYW4gY2FycnkgdGhlXG4gICAgICAvLyBzYW1lIG1hcmsgb24gbW9yZSB0aGFuIG9uZSBlbGV2YXRpb24gKHRoaXMga2l0J3MgaG9zcGl0YWwgc2lnbnMgaXRzIGZyb250IEFORCBpdHMgc2lkZSksXG4gICAgICAvLyBzbyBgYm9hcmRzYCBsZXRzIGVhY2ggYm9hcmQgbmFtZSB0aGUgZmFjZSB0aGF0IHNhbXBsZXMgdGhlIGdyYXBoaWMgd2hpbGUgZXZlcnkgb3RoZXIgZmFjZVxuICAgICAgLy8gc2FtcGxlcyBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZSBjYW52YXMuIE9uZSBtYXRlcmlhbCwgb25lIGRyYXcgY2FsbCwgYW55IG51bWJlciBvZlxuICAgICAgLy8gYm9hcmRzIGZhY2luZyBhbnkgd2F5LlxuICAgICAgY29uc3QgRkFDRV9TTElDRTogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgJytYJzogMCwgJy1YJzogNCwgJytZJzogOCwgJy1ZJzogMTIsICcrWic6IDE2LCAnLVonOiAyMCB9O1xuICAgICAgY29uc3QgYm9hcmRzID0gKGYuYm9hcmRzIGFzIGFueVtdKSA/PyBbeyB3OiBmLncsIGg6IGYuaCwgZDogMC4xMiwgYXQ6IFswLCBmLmN5LCBmLmN6XSwgZmFjZTogJytaJyB9XTtcbiAgICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgICBmb3IgKGNvbnN0IGJkIG9mIGJvYXJkcykge1xuICAgICAgICBjb25zdCBiID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJkLncsIGJkLmgsIGJkLmQgPz8gMC4xMik7XG4gICAgICAgIGNvbnN0IHV2ID0gYi5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgICAvLyBgcGxhaW5gIGJvYXJkcyBjYXJyeSBubyBncmFwaGljIGF0IGFsbDogYSBiYW5kIHRoYXQgd3JhcHMgdGhyZWUgc2lkZXMgb2YgYSBjYW5vcHkgc2hvdWxkXG4gICAgICAgIC8vIHJlcGVhdCBpdHMgbWFyayBvbiBub25lIG9mIHRoZSByZXR1cm5zLCBvbmx5IG9uIHRoZSBmYWNlIHRoYXQgZnJvbnRzIHRoZSBzdHJlZXQuXG4gICAgICAgIC8vIFRoZSB0ZXN0IGlzIGFuIGV4cGxpY2l0IGJvb2xlYW4sIE5PVCBhIHNlbnRpbmVsIGluZGV4IC0tIHNldHRpbmcgdGhlIHNsaWNlIHN0YXJ0IHRvIC0xXG4gICAgICAgIC8vIHN0aWxsIHNhdGlzZmllZCBgaSA+PSBzdGFydCAmJiBpIDwgc3RhcnQgKyA0YCBmb3IgdmVydGljZXMgMCwgMSBhbmQgMiwgc28gdGhyZWUgY29ybmVyc1xuICAgICAgICAvLyBvZiB0aGUgK1ggZmFjZSBrZXB0IHNhbXBsaW5nIHRoZSB3b3JkbWFyayBiYW5kIGFuZCBzbWVhcmVkIGEgc3RyZXRjaGVkIGdob3N0IG9mIHRoZSBtYXJrXG4gICAgICAgIC8vIGFsb25nIGV2ZXJ5IHJldHVybi5cbiAgICAgICAgY29uc3QgcGxhaW4gPSBiZC5wbGFpbiA9PT0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc3RhcnRBdCA9IEZBQ0VfU0xJQ0VbYmQuZmFjZSA/PyAnK1onXTtcbiAgICAgICAgLy8gYHU6IFt1MCwgdTFdYCBsZXRzIGEgYm9hcmQgc2FtcGxlIGEgaG9yaXpvbnRhbCBTTElDRSBvZiB0aGUgY2FudmFzIGJhbmQgaW5zdGVhZCBvZiBhbGwgb2ZcbiAgICAgICAgLy8gaXQsIHNvIHR3byBib2FyZHMgd2l0aCB0d28gZGlmZmVyZW50IGdyYXBoaWNzIChhIGJsdWUgYm9hcmQgd2l0aCB3aGl0ZSB0ZXh0LCBhIHdoaXRlIGJvYXJkXG4gICAgICAgIC8vIHdpdGggYmx1ZSB0ZXh0KSBzdGlsbCBzaGFyZSBvbmUgY2FudmFzLCBvbmUgbWF0ZXJpYWwgYW5kIG9uZSBkcmF3IGNhbGwuIGBwbGFpblVWYCBpcyB0aGVcbiAgICAgICAgLy8gY2FudmFzIHBvaW50IHRoZSBib2FyZCdzIG90aGVyIGZpdmUgZmFjZXMgc2FtcGxlOyBpdCBkZWZhdWx0cyB0byB0aGUgYm90dG9tLWxlZnQgY29ybmVyXG4gICAgICAgIC8vIGFuZCBhIGJvYXJkIHdob3NlIGdyb3VuZCBpcyBub3QgdGhlIGNhbnZhcyBiYWNrZ3JvdW5kIG5hbWVzIGl0cyBvd24uXG4gICAgICAgIGNvbnN0IHUwID0gYmQudSA/IGJkLnVbMF0gOiAwLCB1MSA9IGJkLnUgPyBiZC51WzFdIDogMTtcbiAgICAgICAgY29uc3QgcHUgPSBiZC5wbGFpblVWID8gYmQucGxhaW5VVlswXSA6IDAuMDE1LCBwdiA9IGJkLnBsYWluVVYgPyBiZC5wbGFpblVWWzFdIDogMC4wMTU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykge1xuICAgICAgICAgIC8vIGBmLnV2UmVjdGAgW3UwLCB2MCwgdTEsIHYxXSBuYW1lcyB0aGUgQVRMQVMgcmVnaW9uIHRoZSBiYW5kIG9jY3VwaWVzIHdoZW4gdGhlIHNpZ25cbiAgICAgICAgICAvLyBzaGFyZXMgaXRzIGltYWdlIHdpdGggb3RoZXIgdGV4dHVyZWQgcGFydHM7IGRlZmF1bHQgaXMgdGhlIGNhbnZhcyBjb250cmFjdCAodG9wIDg3LjUgJSkuXG4gICAgICAgICAgY29uc3QgUiA9IChmLnV2UmVjdCBhcyBudW1iZXJbXSkgPz8gWzAsIDAuMTI1LCAxLCAxXTtcbiAgICAgICAgICBpZiAoIXBsYWluICYmIGkgPj0gc3RhcnRBdCAmJiBpIDwgc3RhcnRBdCArIDQpIHV2LnNldFhZKGksIFJbMF0gKyAodTAgKyB1di5nZXRYKGkpICogKHUxIC0gdTApKSAqIChSWzJdIC0gUlswXSksIFJbMV0gKyB1di5nZXRZKGkpICogKFJbM10gLSBSWzFdKSk7XG4gICAgICAgICAgZWxzZSB1di5zZXRYWShpLCBwdSwgcHYpO1xuICAgICAgICB9XG4gICAgICAgIHV2Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgYi50cmFuc2xhdGUoYmQuYXRbMF0sIGJkLmF0WzFdLCBiZC5hdFsyXSk7XG4gICAgICAgIHBhcnRzLnB1c2goYik7XG4gICAgICB9XG4gICAgICBnID0gcGFydHMubGVuZ3RoID09PSAxID8gcGFydHNbMF0gOiBtZXJnZUdlb3MocGFydHMpO1xuICAgIH1cbiAgICAvLyBgY3VydmVkYDogdGV4dHVyZWQgYnVsZ2VkIGZyb250cyAoYW4gQVRNIGtpb3NrIGZhY2UpIHRoYXQgcmlkZSB0aGUgU0FNRSBtYXRlcmlhbCBhbmRcbiAgICAvLyBzdWJtaXNzaW9uIGFzIHRoZSBzaWduLCBzYW1wbGluZyB0aGVpciBvd24gcmVnaW9uIG9mIHRoZSBiYWtlZCBhdGxhcy4gRWFjaCBpcyBhIHBhcnRpYWxcbiAgICAvLyBjeWxpbmRlciBhYm91dCBZLCBhcGV4IGF0IHosIGVkZ2VzIGF0IHogLSBidWxnZSwgc3Bhbm5pbmcgdyBieSBoLCBVVnMgcmVtYXBwZWQgdG8gdXZSZWN0LlxuICAgIGlmIChmLmN1cnZlZCkge1xuICAgICAgY29uc3QgY3BhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW2ddO1xuICAgICAgZm9yIChjb25zdCBjIG9mIGYuY3VydmVkIGFzIGFueVtdKSB7XG4gICAgICAgIGNvbnN0IFIgPSAoYy53ICogYy53IC8gNCArIGMuYnVsZ2UgKiBjLmJ1bGdlKSAvICgyICogYy5idWxnZSk7XG4gICAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmFzaW4oYy53IC8gMiAvIFIpO1xuICAgICAgICBjb25zdCBjeWwgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShSLCBSLCBjLmgsIGMuc2VnID8/IDEyLCAxLCB0cnVlLCAtaGFsZiwgMiAqIGhhbGYpO1xuICAgICAgICBjb25zdCBjdXYgPSBjeWwuZ2V0QXR0cmlidXRlKCd1dicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICAgICAgY29uc3QgciA9IGMudXZSZWN0IGFzIG51bWJlcltdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1di5jb3VudDsgaSsrKSBjdXYuc2V0WFkoaSwgclswXSArIGN1di5nZXRYKGkpICogKHJbMl0gLSByWzBdKSwgclsxXSArIGN1di5nZXRZKGkpICogKHJbM10gLSByWzFdKSk7XG4gICAgICAgIGN5bC50cmFuc2xhdGUoYy54LCBjLnksIGMueiAtIFIpO1xuICAgICAgICBjcGFydHMucHVzaChjeWwpO1xuICAgICAgfVxuICAgICAgZyA9IG1lcmdlR2VvcyhjcGFydHMpO1xuICAgIH1cbiAgICBhZGQoJ2Zhc2NpYS1wYW5lbCcsICdCcmFuZCBmYXNjaWEgcGFuZWwnLCBnLCAnZmFzY2lhJyk7XG4gIH1cblxuICAvKiBPbmUgZ2xhemluZyBwYW5lLCBub3Qgb25lIHBlciBiYXk6IHRoZSBtdWxsaW9uIGdyaWQgaW4gZnJvbnQgZG9lcyB0aGUgZGl2aWRpbmcuIE92ZXJsYXBzIElOVE9cbiAgICogdGhlIGZhY2FkZSBhdCB0aGUgYmFjayBhbmQgc2l0cyBSRUNFU1NFRCBiZWhpbmQgdGhlIGZyYW1pbmcgYXQgdGhlIGZyb250LiBNb3N0bHkgb3BhcXVlIGJ5XG4gICAqIGRlc2lnbiAtLSB0aGVyZSBpcyBubyBpbnRlcmlvciBiZWhpbmQgaXQsIHNvIGEgdHJhbnNwYXJlbnQgcGFuZSB3b3VsZCByZWFkIGFzIGEgaG9sZS4gKi9cbiAgLy8gVGhlIHBhbmUgaXMgbm90IGFsd2F5cyBjZW50cmVkOiBhIGJyYW5jaCBwbGFuIGNhbiBwdXQgaXRzIGdsYXppbmcgdG8gb25lIHNpZGUgb2YgdGhlIGVudHJhbmNlLlxuICAvLyBBdXRob3JlZCBjZW50cmVkIHdoaWxlIGl0cyBmcmFtaW5nIHNhdCBvZmYgdG8gdGhlIGxlZnQsIHRoZSB0d28gcmVhZCBhcyB1bnJlbGF0ZWQgcGFydHMuXG4gIC8vIGBnbGF6aW5nRXh0cmFgIGZvbGRzIGZ1cnRoZXIgcGFuZXMgLS0gYSBzaWRlIHdpbmRvdywgYSBjbGVyZXN0b3J5IC0tIGludG8gdGhlIFNBTUUgY29tcG9uZW50OlxuICAvLyBvbmUgbWF0ZXJpYWwsIG9uZSBkcmF3IGNhbGwsIGhvd2V2ZXIgbWFueSBvcGVuaW5ncyB0aGUgcGxhdGUgc2hvd3MuXG4gIHtcbiAgICBjb25zdCBwYW5lID0gYm94QXQoRy5nbGF6aW5nLmN4ID8/IDAsIEcuZ2xhemluZy5jeSwgRy5nbGF6aW5nLmN6ID8/IDIuNTEsIEcuZ2xhemluZy53LCBHLmdsYXppbmcuaCwgRy5nbGF6aW5nLmQgPz8gMC4xMCk7XG4gICAgY29uc3QgZXh0cmEgPSAoRy5nbGF6aW5nRXh0cmEgPz8gW10pIGFzIG51bWJlcltdW107XG4gICAgYWRkKCdzaG9wZnJvbnQtZ2xhemluZycsICdTaG9wZnJvbnQgZ2xhemluZycsXG4gICAgICAgIGV4dHJhLmxlbmd0aCA/IG1lcmdlR2VvcyhbcGFuZSwgLi4uZXh0cmEubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSldKSA6IHBhbmUsICdnbGFzcycpO1xuICB9XG5cbiAgLyogRnJhbWluZywgdHJhbnNvbSwga2ljayByYWlsLCBkb29yIGphbWJzIGFuZCBoZWFkZXIgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudC4gRXZlcnkgcGFydCBpc1xuICAgKiB0aGUgc2FtZSBtZXRhbDsgZm9sZGluZyB0aGVtIHRvZ2V0aGVyIGlzIHRoZSBkcmF3LWNhbGwgbGV2ZXIgY2hvc2VuIGluIHRoZSBibG9ja291dCwgbm90IGFuXG4gICAqIG9wdGltaXNhdGlvbiBkZWZlcnJlZCB0byB0aGUgZW5kIC0tIGEgcGFydCBzcGxpdCBmb3IgYXV0aG9yaW5nIGNvbnZlbmllbmNlIGNhbm5vdCBiZSBtZXJnZWRcbiAgICogYWZ0ZXJ3YXJkcyBvbmNlIGEgcGl2b3QgaGFuZ3Mgb2ZmIGl0LiBGcm9udCBmYWNlIHN0YW5kcyBwcm91ZCBvZiBnbGF6aW5nIGFuZCBtdWxsaW9ucy4gKi9cbiAgYWRkKCdzaG9wZnJvbnQtZnJhbWUnLCAnU2hvcGZyb250IGZyYW1pbmcgYW5kIGRvb3IgYmF5JywgYm94ZXMoRy5mcmFtZSksIEcuZnJhbWVNYXRlcmlhbCk7XG5cbiAgLyogU2lkZSBmZWF0dXJlOiBzaHV0dGVyLCBzZXJ2aWNlIGRvb3Igb3IgbG91dnJlLCBwZXIgcGxhdGUuIFN0YW5kcyBwcm91ZCBvZiB0aGUgd2FsbCBmYWNlIGJ1dFxuICAgKiBkZWxpYmVyYXRlbHkgTk9UIG91dCB0byB0aGUgcGFyYXBldCBwbGFuZSBhdCArLTQuMDAgLS0gYSBmYWNlIGF0IGV4YWN0bHkgKy00LjAwIHdvdWxkIGJlXG4gICAqIGNvcGxhbmFyIGFuZCBjby1mYWNpbmcgd2l0aCB0aGUgcGFyYXBldCBvdXRlciBmYWNlLCB3aGljaCB0aGUgYm91bmRpbmctYm94IGNvcGxhbmFyaXR5IGNoZWNrXG4gICAqIGZsYWdzIGV2ZW4gdGhvdWdoIHRoZSB0d28gbmV2ZXIgb3ZlcmxhcCBpbiBZLiAqL1xuICBpZiAoRy5zaWRlRmVhdHVyZSkgYWRkKCdzaWRlLWZlYXR1cmUnLCBHLnNpZGVGZWF0dXJlLm5hbWUsIGJveGVzKEcuc2lkZUZlYXR1cmUuYm94ZXMpLCBHLnNpZGVGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBGcm9udCBmZWF0dXJlOiBjbGFkZGluZyBiYW5kLCBBVE0gYmFuaywgdXBwZXItc3RvcmV5IGJhbmQgb3IgZm9yZWNvdXJ0LCBwZXIgcGxhdGUuICovXG4gIGlmIChHLmZyb250RmVhdHVyZSkgYWRkKCdmcm9udC1mZWF0dXJlJywgRy5mcm9udEZlYXR1cmUubmFtZSwgYm94ZXMoRy5mcm9udEZlYXR1cmUuYm94ZXMpLCBHLmZyb250RmVhdHVyZS5tYXRlcmlhbCk7XG5cbiAgLyogQSB0aGlyZCBtZXJnZWQgc2xvdCwgZm9yIHdoYXRldmVyIHRoZSBwbGF0ZSBoYXMgdGhhdCB0aGUgdHdvIGFib3ZlIGRvIG5vdCBjb3ZlciAtLSBhIHBhcmFwZXRcbiAgICogY29waW5nLCBhIGtlcmIsIGEgZm9yZWNvdXJ0IGNvbHVtbiBiYXNlLiBTYW1lIHJ1bGUgYXMgdGhlIG90aGVyczogZXZlcnl0aGluZyBpbiBpdCBzaGFyZXMgb25lXG4gICAqIG1hdGVyaWFsIGFuZCBpcyBzdWJtaXR0ZWQgb25jZS4gKi9cbiAgaWYgKEcuZXh0cmFGZWF0dXJlKSBhZGQoJ2V4dHJhLWZlYXR1cmUnLCBHLmV4dHJhRmVhdHVyZS5uYW1lLCBib3hlcyhHLmV4dHJhRmVhdHVyZS5ib3hlcyksIEcuZXh0cmFGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBNdWxsaW9uczogdGhlIGZpbmUgdmVydGljYWwgZ3JpZCBpcyB0aGUgbW9zdCByZWNvZ25pc2FibGUgdGhpbmcgYWJvdXQgYSBzaG9wZnJvbnQuIEluc3RhbmNlc1xuICAgKiBvbiBvbmUgZ2VvbWV0cnkgY29zdCBvbmUgZHJhdyBjYWxsOyBhcyBjb21wb25lbnRzIHRoZXkgd291bGQgaGF2ZSBjb3N0IG9uZSBlYWNoIGFuZCBibG93biB0aGVcbiAgICogY2VpbGluZyBvbiB0aGVpciBvd24uIFRoZXkgc2l0IElOU0lERSB0aGUgZnJhbWUgZGVwdGggYmFuZCBhdCBib3RoIGVuZHMgc28gdGhleSBhcmUgbm90XG4gICAqIGNvcGxhbmFyIHdpdGggaXQsIHdoaWxlIHN0aWxsIHN0YW5kaW5nIHByb3VkIG9mIHRoZSBnbGF6aW5nIHNvIHRoZSBnbGFzcyByZWFkcyBhcyByZWNlc3NlZC4gKi9cbiAge1xuICAgIGNvbnN0IG0gPSBHLm11bGxpb25zO1xuICAgIGNvbnN0IG1hdHMgPSAobS54IGFzIG51bWJlcltdKS5tYXAoKHgpID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgbS5jeSwgbS5jeiA/PyAyLjU4KSk7XG4gICAgYWRkSW5zdCgnc2hvcGZyb250LW11bGxpb25zJywgJ1Nob3Bmcm9udCBtdWxsaW9ucycsIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShtLncsIG0uaCwgMC4wOCksIEcuZnJhbWVNYXRlcmlhbCwgbWF0cyk7XG4gIH1cblxuICAvKiBSb29mdG9wIGNvbmRlbnNlcnM6IGNhc2luZywgZmFuIGNvd2wgYW5kIGZvdXIgZmVldCBNRVJHRUQgaW50byBhIHNpbmdsZSBpbnN0YW5jZWQgZ2VvbWV0cnkuXG4gICAqIEZlZXQgc3RhcnQgYmVsb3cgdGhlIGRlY2sgdG9wIHNvIHRoZSB0d28gb3ZlcmxhcCByYXRoZXIgdGhhbiBzaGFyaW5nIGEgcGxhbmUuICovXG4gIHtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtcbiAgICAgIGJveEF0KDAsIDAuNDYsIDAsIDAuOTUsIDAuNzIsIDAuODUpLFxuICAgICAgY3lsQXQoMCwgMC44NywgMCwgMC4zMCwgMC4xMCwgMTYpLFxuICAgIF07XG4gICAgZm9yIChjb25zdCBmeCBvZiBbLTAuNCwgMC40XSkgZm9yIChjb25zdCBmeiBvZiBbLTAuMzUsIDAuMzVdKSBwYXJ0cy5wdXNoKGJveEF0KGZ4LCAwLjA1LCBmeiwgMC4wOCwgMC4xMCwgMC4wOCkpO1xuICAgIGNvbnN0IHVuaXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICAgIGNvbnN0IG1hdHMgPSAoRy5jb25kZW5zZXJzIGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHosIHlhd10pID0+XG4gICAgICBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHgsIDMuNjAsIHopLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIHlhdyksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpLFxuICAgICAgKSk7XG4gICAgLy8gVGhlIHBsYW50IG1hdGVyaWFsIGlzIENPTkZJR1VSQUJMRSwgbm90IGhhcmQtY29kZWQuIFJlZmVyZW5jaW5nIGEgJ2dhbHYnIGlkIHRoYXQgYSBjb25maWdcbiAgICAvLyBkb2VzIG5vdCBkZWZpbmUgc2lsZW50bHkgaGFuZHMgSW5zdGFuY2VkTWVzaCBhbiB1bmRlZmluZWQgbWF0ZXJpYWwsIHRocmVlLmpzIHN1YnN0aXR1dGVzIGFcbiAgICAvLyBkZWZhdWx0LCBhbmQgdGhlIHByb3Agc2hpcHMgb25lIG1hdGVyaWFsIG92ZXIgaXRzIGNlaWxpbmcgd2l0aCBub3RoaW5nIGluIHRoZSBjb25maWcgdG9cbiAgICAvLyBleHBsYWluIHRoZSBleHRyYS5cbiAgICBhZGRJbnN0KCdwbGFudC1jb25kZW5zZXJzJywgJ1Jvb2Z0b3AgY29uZGVuc2VyIHVuaXRzJywgdW5pdCwgRy5wbGFudE1hdGVyaWFsID8/ICdnYWx2JywgbWF0cyk7XG4gIH1cblxuICAvKiBPcHRpb25hbCBpbnN0YW5jZWQgZXh0cmE6IGNhbm9weSBwbGF0ZXMsIHBpbGFzdGVycyBvciBmb3JlY291cnQgY29sdW1ucywgcGVyIHBsYXRlLiAqL1xuICBpZiAoRy5leHRyYVN5c3RlbSkge1xuICAgIGNvbnN0IGUgPSBHLmV4dHJhU3lzdGVtO1xuICAgIGxldCB1bml0OiBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBpZiAoZS5raW5kID09PSAncGxhdGUnKSB7XG4gICAgICB1bml0ID0gbWVyZ2VHZW9zKFtib3hBdCgwLCAwLCAwLCBlLncsIGUuaCwgZS5kKSwgY3lsQXQoMCwgLWUuaCAvIDIgLSAwLjAxNSwgMCwgMC4wODUsIDAuMDMsIDEyKV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gYm94QXQoMCwgMCwgMCwgZS53LCBlLmgsIGUuZCk7XG4gICAgfVxuICAgIGNvbnN0IG1hdHMgPSAoZS5hdCBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB5LCB6XSkgPT4gbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCB5LCB6KSk7XG4gICAgYWRkSW5zdChlLmlkLCBlLm5hbWUsIHVuaXQsIGUubWF0ZXJpYWwsIG1hdHMsIGUudG9uZXMgPyBtYXRzLm1hcCgoXywgaSkgPT4gZS50b25lc1tpICUgZS50b25lcy5sZW5ndGhdKSA6IHVuZGVmaW5lZCk7XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBicmFuZCBmYXNjaWEgY2FudmFzICovXG5cbi8qKiBEcmF3IHRoZSBicmFuZCB3b3JkbWFyayBvbnRvIGEgY2FudmFzIGFuZCBhc3NpZ24gaXQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLiBUaGlzIGlzIHRoZVxuICogIGRvY3VtZW50ZWQgcm91dGUgZm9yIGEgcHJpbnRlZCBicmFuZCBmYXNjaWEgYW5kIGlzIHVuYWZmZWN0ZWQgYnkgdGhlIG1hdGVyaWFsJ3MgYHRleHR1cmVsZXNzYFxuICogIGRlY2xhcmF0aW9uIC0tIHdoYXQgdGhhdCBza2lwcyBpcyB0aGUgZml2ZS1jYW52YXMgUFJPQ0VEVVJBTCBzZXQsIGEgZGlmZmVyZW50IHRoaW5nIGVudGlyZWx5LlxuICpcbiAqICBUZXh0IGlzIGZpdHRlZCB0byBpdHMgZmllbGQgYnkgTUVBU1VSRU1FTlQgcmF0aGVyIHRoYW4gYnkgYSBmb250LXNpemUgcmF0aW86IGhlYWRsZXNzIENocm9tZSdzXG4gKiAgZm9udCBmYWxsYmFjayBkZWNpZGVzIHRoZSByZWFsIGFkdmFuY2Ugd2lkdGhzLCBzbyB0aGUgb25seSByZWxpYWJsZSB3YXkgdG8gZmlsbCBhIGtub3duIGJveCBpc1xuICogIHRvIG1lYXN1cmUgdGhlIHN0cmluZyBhbmQgc2NhbGUgaXQgaG9yaXpvbnRhbGx5LiAqL1xuZnVuY3Rpb24gYXBwbHlGYXNjaWFHcmFwaGljKHJvb3Q6IFRIUkVFLkdyb3VwKTogdm9pZCB7XG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IG1lc2ggPSBydD8ubWVzaGVzPy5bJ2Zhc2NpYS1wYW5lbCddO1xuICBpZiAoIW1lc2ggfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICBjb25zdCBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gIGlmICghbWF0ZXJpYWwpIHJldHVybjtcblxuICBjb25zdCBnID0gQ09ORklHLmdyYXBoaWMgYXMgYW55O1xuICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG5cbiAgLy8gQSBCQUtFRCBzaWduIC0tIHRoZSBmYWNlIGltYWdlIGNvbXBvc2VkIG9uY2UgZnJvbSBhIHJlYWwgZm9udCBhbmQgdmVjdG9yIG1hcmtzIGFuZCBlbWJlZGRlZFxuICAvLyBhcyBhIFdlYlAgZGF0YSBVUkkgLS0gYmVhdHMgZmlsbFRleHQsIHdoaWNoIGRyYXdzIGEgZGlmZmVyZW50IHdvcmRtYXJrIG9uIGV2ZXJ5IG1hY2hpbmUnc1xuICAvLyBmb250IGZhbGxiYWNrLiBMYWlkIG91dCB0byB0aGUgc2FtZSBVViBjb250cmFjdCBhcyB0aGUgY2FudmFzOiB0aGUgdG9wIDg3LjUgJSBpcyB0aGUgYmFuZFxuICAvLyB0aGUgK1ogZmFjZSBzYW1wbGVzIGFuZCB0aGUgYm90dG9tLWxlZnQgY29ybmVyIGlzIHRoZSBwbGFpbiBmaWVsZCBldmVyeSBvdGhlciBmYWNlIHNhbXBsZXMuXG4gIC8vIEFzc2lnbmVkIHN5bmNocm9ub3VzbHkgc28gdGhlIGhhcm5lc3Mgd2FpdHMgb24gdGhlIGRlY29kZTsgdGhlIGNhbnZhcyBvcHMgYmVsb3cgYXJlIHRoZVxuICAvLyBkZWNvZGUgRkFMTEJBQ0sgb25seS5cbiAgaWYgKGcuYmFrZWQpIHtcbiAgICBjb25zdCBiYWtlZCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChnLmJha2VkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgKCkgPT4ge1xuICAgICAgY29uc3QgYyA9IGRyYXdGYXNjaWFDYW52YXMoZyk7XG4gICAgICBpZiAoIWMpIHJldHVybjtcbiAgICAgIGNvbnN0IHQgPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjKTtcbiAgICAgIGlmIChzcmdiKSB0LmNvbG9yU3BhY2UgPSBzcmdiO1xuICAgICAgdC5hbmlzb3Ryb3B5ID0gNDtcbiAgICAgIG1hdGVyaWFsLm1hcCA9IHQ7XG4gICAgICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfSk7XG4gICAgaWYgKHNyZ2IpIGJha2VkLmNvbG9yU3BhY2UgPSBzcmdiO1xuICAgIGJha2VkLmFuaXNvdHJvcHkgPSA0O1xuICAgIGJha2VkLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBtYXRlcmlhbC5tYXAgPSBiYWtlZDtcbiAgICBtYXRlcmlhbC5jb2xvci5zZXRIZXgoMHhmZmZmZmYpO1xuICAgIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjYW52YXMgPSBkcmF3RmFzY2lhQ2FudmFzKGcpO1xuICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjYW52YXMpO1xuICBpZiAoc3JnYikgdGV4LmNvbG9yU3BhY2UgPSBzcmdiO1xuICB0ZXguYW5pc290cm9weSA9IDQ7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIG1hdGVyaWFsLm1hcCA9IHRleDtcbiAgLy8gV2hpdGUgYmFzZSBzbyB0aGUgY2FudmFzIHNob3dzIGFzIGRyYXduIHJhdGhlciB0aGFuIHRpbnRlZCAtLSB0aGUgbWVhc3VyZWQgZmFzY2lhIGNvbG91ciBpc1xuICAvLyBhbHJlYWR5IHBhaW50ZWQgaW50byB0aGUgY2FudmFzIGJhY2tncm91bmQuXG4gIG1hdGVyaWFsLmNvbG9yLnNldEhleCgweGZmZmZmZik7XG4gIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZHJhd0Zhc2NpYUNhbnZhcyhnOiBhbnkpOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwge1xuICAvLyBBIHJvdW5kIHNpZ24gbmVlZHMgYSBTUVVBUkUgY2FudmFzOiB0aGUgY3lsaW5kZXIgY2FwIG1hcHMgdGhlIGNpcmNsZSBpbnRvIHRoZSB1bml0IHNxdWFyZSxcbiAgLy8gc28gYSAyMDQ4eDMyMCBzdHJpcCB3b3VsZCBzcXVhc2ggdGhlIG1hcmsgZmxhdC4gQSByZWN0YW5ndWxhciBmYXNjaWEga2VlcHMgdGhlIHdpZGUgc3RyaXAsXG4gIC8vIHdoZXJlIHRoZSBib3R0b20gMTIuNSUgaXMgdGhlIHBsYWluIGNvcm5lciBldmVyeSBub24tZnJvbnQgZmFjZSBzYW1wbGVzLlxuICBjb25zdCBzcXVhcmUgPSAhIWcuc3F1YXJlO1xuICBjb25zdCBXID0gc3F1YXJlID8gNTEyIDogKGcuc2l6ZT8uWzBdID8/IDIwNDgpLCBIID0gc3F1YXJlID8gNTEyIDogKGcuc2l6ZT8uWzFdID8/IDMyMCk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBXOyBjYW52YXMuaGVpZ2h0ID0gSDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSByZXR1cm4gbnVsbDtcblxuICBjdHguZmlsbFN0eWxlID0gZy5iYWNrZ3JvdW5kO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgVywgSCk7XG4gIGNvbnN0IGJhbmQgPSBzcXVhcmUgPyBIIDogSCAqIChnLmJhbmRGcmFjID8/IDAuODc1KTtcblxuICBjb25zdCBmaXQgPSAodGV4dDogc3RyaW5nLCBmb250OiBzdHJpbmcsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGN5OiBudW1iZXIsIGZpbGw6IHN0cmluZywgc3Ryb2tlQ29sPzogc3RyaW5nLCBzdHJva2VXPzogbnVtYmVyKSA9PiB7XG4gICAgY3R4LmZvbnQgPSBmb250O1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIGNvbnN0IHcgPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgY29uc3QgcyA9ICh4MSAtIHgwKSAvIHc7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKHgwLCAwKTtcbiAgICBjdHguc2NhbGUocywgMSk7XG4gICAgaWYgKHN0cm9rZUNvbCkgeyBjdHgubGluZUpvaW4gPSAncm91bmQnOyBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2w7IGN0eC5saW5lV2lkdGggPSAoc3Ryb2tlVyA/PyA2KSAvIHM7IGN0eC5zdHJva2VUZXh0KHRleHQsIDAsIGN5KTsgfVxuICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsO1xuICAgIGN0eC5maWxsVGV4dCh0ZXh0LCAwLCBjeSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfTtcblxuICBmb3IgKGNvbnN0IG9wIG9mIGcub3BzIGFzIGFueVtdKSB7XG4gICAgaWYgKG9wLnR5cGUgPT09ICdyZWN0Jykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjb25zdCB4ID0gb3AueCAqIFcsIHkgPSBvcC55ICogYmFuZCwgdyA9IG9wLncgKiBXLCBoID0gb3AuaCAqIGJhbmQsIHIgPSAob3AuciA/PyAwKSAqIGJhbmQ7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBpZiAociA+IDApIHtcbiAgICAgICAgY3R4Lm1vdmVUbyh4ICsgciwgeSk7IGN0eC5saW5lVG8oeCArIHcgLSByLCB5KTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHcsIHksIHggKyB3LCB5ICsgcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHcsIHkgKyBoIC0gcik7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3LCB5ICsgaCwgeCArIHcgLSByLCB5ICsgaCk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHIsIHkgKyBoKTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGgsIHgsIHkgKyBoIC0gcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSArIHIpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgciwgeSk7XG4gICAgICB9IGVsc2UgY3R4LnJlY3QoeCwgeSwgdywgaCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgfSBlbHNlIGlmIChvcC50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKG9wLmN4ICogVywgb3AuY3kgKiBiYW5kLCBvcC5yICogYmFuZCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICdwb2x5Jykge1xuICAgICAgLy8gQW4gYXJiaXRyYXJ5IHBvbHlnb24gaW4gbm9ybWFsaXNlZCBjYW52YXMgY29vcmRzLCBmb3IgYSBtYXJrIGEgZm9udCBjYW5ub3Qgc2V0IC0tIGFcbiAgICAgIC8vIGxpZ2h0bmluZyBib2x0LCBhIGNoZXZyb24sIGEgbGVhZi4gUG9pbnRzIGFyZSBbeCwgeV0gd2l0aCB4IGEgZnJhY3Rpb24gb2YgdGhlIGNhbnZhcyB3aWR0aFxuICAgICAgLy8gYW5kIHkgYSBmcmFjdGlvbiBvZiB0aGUgYmFuZCBoZWlnaHQuXG4gICAgICBjdHguZmlsbFN0eWxlID0gb3AuZmlsbDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGNvbnN0IHB0cyA9IG9wLnBvaW50cyBhcyBudW1iZXJbXVtdO1xuICAgICAgY3R4Lm1vdmVUbyhwdHNbMF1bMF0gKiBXLCBwdHNbMF1bMV0gKiBiYW5kKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBjdHgubGluZVRvKHB0c1tpXVswXSAqIFcsIHB0c1tpXVsxXSAqIGJhbmQpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgZml0KG9wLnRleHQsIGAke29wLnN0eWxlID8/ICdib2xkJ30gJHtNYXRoLnJvdW5kKG9wLnNpemUgKiBiYW5kKX1weCAke29wLmZhbWlseSA/PyAnQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZid9YCxcbiAgICAgICAgb3AueDAgKiBXLCBvcC54MSAqIFcsIG9wLmN5ICogYmFuZCwgb3AuZmlsbCwgb3Auc3Ryb2tlLCBvcC5zdHJva2VXID8gb3Auc3Ryb2tlVyAqIGJhbmQgOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjYW52YXM7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbGF6aW5nIGdyYXBoaWMgKi9cblxuLyoqIEEgYnVpbGRpbmcgaXMgYW4gZXh0ZXJpb3Igc2hlbGwgd2l0aCBubyBpbnRlcmlvciwgc28gYSBwbGFpbiB0aW50ZWQgcGFuZSByZWFkcyBhcyBhIGJsaW5kIHNsYWJcbiAqICAtLSBvciwgZGFyayBlbm91Z2gsIGFzIGEgaG9sZS4gYGdyYXBoaWMuZ2xhc3NgIHBhaW50cyBhIGRlLWxpdCBpbnRlcmlvciB2aWV3IGludG8gdGhlIGdsYXppbmc6XG4gKiAgb25lIGJha2VkIGltYWdlIHByb2plY3RlZCBieSBXT1JMRCB4L3kgb3ZlciBgcmVjdGAgW3gwLCB5MCwgeDEsIHkxXSBzbyBpdCBsaW5lcyB1cCBhY3Jvc3MgdGhlXG4gKiAgd2luZG93IHBhbmUsIHRoZSB0cmFuc29tIGFuZCB0aGUgZG9vciBsZWF2ZXMsIHdoaWNoIGFyZSBzZXBhcmF0ZSBib3hlcyBpbiBvbmUgbWVyZ2VkIG1lc2guXG4gKiAgQXNzaWduZWQgYWZ0ZXIgbWF0ZXJpYWwgY29uc3RydWN0aW9uOyB0aGUgbWF0ZXJpYWwgc3RheXMgYHRleHR1cmVsZXNzYCBpbiB0aGUgc3BlYy4gKi9cbmZ1bmN0aW9uIGFwcGx5R2xhc3NHcmFwaGljKHJvb3Q6IFRIUkVFLkdyb3VwKTogdm9pZCB7XG4gIGNvbnN0IGcgPSAoQ09ORklHLmdyYXBoaWMgYXMgYW55KT8uZ2xhc3M7XG4gIC8vIE5vZGUgaGFzIG5vIGBkb2N1bWVudGAsIGFuZCB0aGFpa2l0J3MgY29wbGFuYXIgY2hlY2tlciBhbmQgcGFydCBtYW5pZmVzdCBldmFsdWF0ZSB0aGlzXG4gIC8vIG1vZHVsZSB0aGVyZTogVGV4dHVyZUxvYWRlciB3b3VsZCB0aHJvdywgc28gdGhlIGdsYXppbmcga2VlcHMgaXRzIGZsYXQgZmFsbGJhY2sgYWxiZWRvLlxuICBpZiAoIWcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lIHwgdW5kZWZpbmVkO1xuICBjb25zdCBtZXNoID0gcnQ/Lm1lc2hlcz8uWydzaG9wZnJvbnQtZ2xhemluZyddO1xuICBpZiAoIW1lc2gpIHJldHVybjtcbiAgY29uc3QgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsIGFzIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuICBpZiAoIW1hdGVyaWFsKSByZXR1cm47XG4gIGNvbnN0IGdlbyA9IG1lc2guZ2VvbWV0cnkgYXMgVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gIGNvbnN0IHBvcyA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IFt4MCwgeTAsIHgxLCB5MV0gPSBnLnJlY3QgYXMgbnVtYmVyW107XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwb3MuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MuY291bnQ7IGkrKykge1xuICAgIHV2W2kgKiAyXSA9IChwb3MuZ2V0WChpKSAtIHgwKSAvICh4MSAtIHgwKTtcbiAgICB1dltpICogMiArIDFdID0gKHBvcy5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChnLmJha2VkKTtcbiAgaWYgKHNyZ2IpIHRleC5jb2xvclNwYWNlID0gc3JnYjtcbiAgdGV4LmFuaXNvdHJvcHkgPSA0O1xuICB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBtYXRlcmlhbC5tYXAgPSB0ZXg7XG4gIC8vIFRoZSBpbWFnZSBjYXJyaWVzIHRoZSB0aW50OyBhIGNvbG91cmVkIGJhc2Ugd291bGQgYXBwbHkgaXQgdHdpY2UuXG4gIG1hdGVyaWFsLmNvbG9yLnNldEhleCgweGZmZmZmZik7XG4gIGlmIChnLnJvdWdobmVzcyAhPT0gdW5kZWZpbmVkKSBtYXRlcmlhbC5yb3VnaG5lc3MgPSBnLnJvdWdobmVzcztcbiAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlU0NCQmFua0JyYW5jaEJ1aWxkaW5nTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBhcHBseUZhc2NpYUdyYXBoaWMocm9vdCk7XG4gIGFwcGx5R2xhc3NHcmFwaGljKHJvb3QpO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IE9ORS4gQSBzdGF0aWMgZXh0ZXJpb3Igc2hlbGwgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBUaGUgZG9vcnMgYW5kIGFueVxuICAgIC8vIHNodXR0ZXIgYXJlIGF1dGhvcmVkIGFzIGZpeGVkIGdlb21ldHJ5LCBzbyB0aGV5IGdldCBubyBheGlzOiBhIG5hbWVkIHBpdm90IGlzIGEgcHJvbWlzZVxuICAgIC8vIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvciBoYXNcbiAgICAvLyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBcUN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsY0FBYztBQUFBLElBQ2QsaUJBQWlCO0FBQUEsSUFDakIsY0FBYztBQUFBLE1BQ1osTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLHNCQUFzQjtBQUFBLElBQ3RCLGlCQUFpQjtBQUFBLElBQ2pCLFVBQVU7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLFNBQVM7QUFBQSxVQUNULE9BQU87QUFBQSxVQUNQLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxTQUFTO0FBQUEsVUFDVCxPQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLFFBQ0g7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxNQUNaO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxjQUFjO0FBQUEsSUFDZCxTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsSUFDWixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixN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
