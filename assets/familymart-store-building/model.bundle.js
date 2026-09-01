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

// assets/familymart-store-building/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createFamilyMartStoreBuildingModel: () => createFamilyMartStoreBuildingModel,
  createModel: () => createModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "familymart-store-building",
  "name": "FamilyMart Store Building",
  "exportName": "FamilyMartStoreBuilding",
  "materials": [
    {
      "id": "wall",
      "color": 9672602,
      "roughness": 0.94,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 7238261,
      "roughness": 0.95,
      "metalness": 0
    },
    {
      "id": "fascia",
      "color": 15066856,
      "roughness": 0.34,
      "metalness": 0,
      "envMapIntensity": 0.6
    },
    {
      "id": "glass",
      "color": 7304049,
      "roughness": 0.14,
      "metalness": 0,
      "opacity": 0.94,
      "envMapIntensity": 1.1
    },
    {
      "id": "alu",
      "color": 13948629,
      "roughness": 0.38,
      "metalness": 0.18
    },
    {
      "id": "galv",
      "color": 11053997,
      "roughness": 0.55,
      "metalness": 0.28
    },
    {
      "id": "decal",
      "color": 16777215,
      "roughness": 0.3,
      "metalness": 0
    },
    {
      "id": "steel",
      "color": 7633019,
      "roughness": 0.62,
      "metalness": 0.22
    }
  ],
  "geometry": {
    "shellFront": 3.1,
    "fasciaWall": {
      "cy": 4.075,
      "cz": 3.1,
      "h": 1.05,
      "d": 0.6
    },
    "fasciaWallMaterial": "wall",
    "parapetW": 7.95,
    "parapetSides": {
      "cy": 4.075,
      "h": 1.05,
      "thick": 0.24,
      "cx": 3.855
    },
    "parapetExtra": [
      [
        -3.745,
        1.71,
        3.15,
        0.45,
        3.42,
        0.3
      ],
      [
        0,
        0.06,
        -0.01,
        7.91,
        0.12,
        6.9
      ]
    ],
    "frameMaterial": "alu",
    "fascia": {
      "boards": [
        {
          "w": 7.98,
          "h": 1.07,
          "d": 0.12,
          "at": [
            0,
            3.935,
            3.44
          ],
          "face": "+Z"
        },
        {
          "w": 0.12,
          "h": 1.07,
          "d": 2.55,
          "at": [
            3.94,
            3.935,
            2.225
          ],
          "face": "+X",
          "u": [
            0.02,
            0.3
          ]
        }
      ]
    },
    "glazing": {
      "cx": 0.205,
      "cy": 1.7,
      "cz": 3.2,
      "w": 7.17,
      "h": 3.04,
      "d": 0.08
    },
    "glazingExtra": [
      [
        -0.295,
        1.34,
        3.29,
        0.99,
        2.36,
        0.06
      ],
      [
        0.745,
        1.34,
        3.29,
        0.87,
        2.36,
        0.06
      ],
      [
        3.92,
        1.7,
        2.99,
        0.08,
        3.04,
        0.86
      ]
    ],
    "frame": [
      [
        0.205,
        3.29,
        3.29,
        7.45,
        0.14,
        0.14
      ],
      [
        0.205,
        0.15,
        3.29,
        7.45,
        0.2,
        0.14
      ],
      [
        -3.34,
        1.7,
        3.29,
        0.2,
        3.04,
        0.14
      ],
      [
        3.8,
        1.7,
        3.31,
        0.28,
        3.04,
        0.24
      ],
      [
        0.19499999999999984,
        2.665,
        3.325,
        4.5,
        0.21,
        0.17
      ],
      [
        0.255,
        1.35,
        3.36,
        0.125,
        2.5,
        0.1
      ],
      [
        0.16,
        2.665,
        3.415,
        0.36,
        0.09,
        0.04
      ],
      [
        -0.295,
        2.52,
        3.325,
        0.99,
        0.06,
        0.07
      ],
      [
        0.745,
        2.52,
        3.325,
        0.87,
        0.06,
        0.07
      ],
      [
        3.94,
        3.29,
        3.02,
        0.09,
        0.14,
        0.92
      ],
      [
        3.94,
        0.15,
        3.02,
        0.09,
        0.2,
        0.92
      ],
      [
        3.94,
        1.7,
        2.6,
        0.09,
        3.04,
        0.1
      ],
      [
        3.95,
        2.815,
        -2.5,
        0.07,
        0.09,
        0.99
      ],
      [
        3.95,
        2.065,
        -2.5,
        0.07,
        0.09,
        0.99
      ],
      [
        3.95,
        2.44,
        -2.975,
        0.07,
        0.84,
        0.05
      ],
      [
        3.95,
        2.44,
        -2.025,
        0.07,
        0.84,
        0.05
      ],
      [
        3.9625,
        1.225,
        0.815,
        0.045,
        2.45,
        0.08
      ],
      [
        3.9625,
        1.225,
        -0.315,
        0.045,
        2.45,
        0.08
      ],
      [
        3.9625,
        2.415,
        0.25,
        0.045,
        0.07,
        1.21
      ]
    ],
    "mullions": {
      "w": 0.065,
      "h": 3.07,
      "cy": 1.685,
      "cz": 3.33,
      "x": [
        -2.02,
        -0.83,
        1.21,
        2.41
      ]
    },
    "sideFeature": {
      "name": "Service door, louvre and side window",
      "material": "steel",
      "boxes": [
        [
          3.96,
          1.2,
          0.25,
          0.04,
          2.4,
          1.05
        ],
        [
          3.9875,
          0.45,
          0.42,
          0.015,
          0.3,
          0.7
        ],
        [
          3.9875,
          1.15,
          0.7,
          0.015,
          0.05,
          0.16
        ],
        [
          3.965,
          2.44,
          -2.5,
          0.03,
          0.66,
          0.85
        ]
      ]
    },
    "extraFeature": {
      "name": "Rooftop plant deck",
      "material": "galv",
      "boxes": [
        [
          -0.75,
          3.87,
          -1.75,
          2.3,
          0.5,
          0.55
        ],
        [
          -0.75,
          4.145,
          -1.75,
          2.42,
          0.05,
          0.7
        ],
        [
          -1.7,
          3.79,
          -1.75,
          0.06,
          0.34,
          0.6
        ],
        [
          0.2,
          3.79,
          -1.75,
          0.06,
          0.34,
          0.6
        ],
        [
          1.2,
          3.96,
          -1.65,
          1.05,
          0.68,
          0.72
        ],
        [
          1.2,
          3.96,
          -1.275,
          0.66,
          0.56,
          0.04
        ],
        {
          "cyl": [
            1.2,
            3.96,
            -1.245,
            0.21,
            0.03,
            16,
            1.5707963267948966
          ]
        },
        [
          2.05,
          4.02,
          -2.45,
          0.46,
          0.8,
          0.52
        ],
        {
          "cyl": [
            2.05,
            3.86,
            -2.17,
            0.035,
            0.48,
            8
          ]
        },
        [
          2.9,
          4.09,
          -1.95,
          1,
          0.94,
          0.9
        ],
        [
          2.9,
          4.09,
          -1.49,
          0.84,
          0.78,
          0.04
        ],
        [
          2.9,
          4.575,
          -1.95,
          1.06,
          0.03,
          0.96
        ]
      ]
    },
    "tintFeature": {
      "name": "Glazing decal bands",
      "material": "decal",
      "tones": [
        3121482,
        3121482,
        3121482,
        3121482,
        2068676,
        2068676,
        2068676,
        2068676
      ],
      "boxes": [
        [
          -2.105,
          1.25,
          3.245,
          2.51,
          0.03,
          0.012
        ],
        [
          0.185,
          1.25,
          3.325,
          2.03,
          0.03,
          0.012
        ],
        [
          2.495,
          1.25,
          3.245,
          2.59,
          0.03,
          0.012
        ],
        [
          3.965,
          1.25,
          2.99,
          0.012,
          0.03,
          0.82
        ],
        [
          -2.105,
          1.165,
          3.245,
          2.51,
          0.03,
          0.012
        ],
        [
          0.185,
          1.165,
          3.325,
          2.03,
          0.03,
          0.012
        ],
        [
          2.495,
          1.165,
          3.245,
          2.59,
          0.03,
          0.012
        ],
        [
          3.965,
          1.165,
          2.99,
          0.012,
          0.03,
          0.82
        ]
      ]
    },
    "condensers": []
  },
  "graphic": {
    "baked": "data:image/webp;base64,UklGRjohAABXRUJQVlA4IC4hAACQMwGdASoACIABPjEYiEQiIYm0GBABgllbvhfvft/3mrcCX/+X8bSOlR9qEmAT5FtP0P80+DM7z+p/z39h/7T+1nVNbbdzP6Z+yv40+wHAs8mPy38a/w/9X/wn/n/vv0Z/on9U/pP9V/1n9h+nP5l/vnuAfpd/h/6r/h/2Q7j3mF/m39N/7X9x91r/M/8b+o+4v9e/2I+AD+S/1P/tfn/82X+R9ln91/YJ/oP+J///s6f7b9tvhE/bP/2/6b4I/6P/hf/T+f/yAf//2yf4B//+tX6Of0Ltw/wH4vdFN7X80jqbxU/VD8R+S/s//cvwz9ReAd6c/uv9N/b/+08ZKAD8e/in+L/u37v+enqHeAPYA/m/9E/332s/OH9Y/w3kS0B/51/Jf+16Lf+X/n/Qr+af632Ef5n/Q/+9wGf7YCSW6QZerkt0t6uS3S3q5LdLerkt0t6uS3S3q5LdLerkt0t6uS3S3q5LdLerkt0t6uS3S3q5LdLerkt0t6pbahLt3co6nuUdT3KOp657iev3KOp7lHU9yjqe5Pppk9inK8y1XeZarvMtV3mWq7JVRZTBDm2KobUFUNqCqG1BVDagqhtQVQ2oKobUFUNqCqG1BVDagqhtQVQ2oKobUFUNqCqG1BVDUv2w5heZarvMtV3mWq7zLVd5lp62om7n6ZLLzLVd5lqu8y08//+yy8y1XeZarvMtndavD5+JdUZAZXh8/Euip39MsHHVQ+xQHc1xAyHfXEDId9cQMh31xAyHfXEDId9cD7Zz0t6uS3SsiERxDf8AwcQm2fwDBxDf8AXkt0t6p6S6F+9X2HA2znpb1clge6FukGXq5LdLerkt0t6uS3S3q5LdLerksEUiI64gZDvm9bNclulvOXrdIMvVyW6W9XIrVC/er7z7RldEdcQMhxFhzXEDId9cQMh31xAyHfXEDId9cQMh31wPtnPS3q5LdKyI/ZS3SDLcDnJbpb1clulvVvzqelvVyWB7oW6QZerkVkdlkO+uIGQ764gZDvriBkO+uIGQ764gZA6E64gZDvrh6ULdIMvVyK1Qv3q+9C/er70Kw+kGXq5LA90LdIMvVyKyOyyHfXEDId9cQMh31xAyHfXEDId9cQMgdEKKuS3S3q352xUgy9XIrVC/er7wPjOZTxeZarvMtV3mWq7NSfwfMCEig7CRQdhIoOwkPpVZ997pdu+mp7lHU9yjqe5R1PcoMVk2glSepkMWoKobUFUNqCqG1BVDagqhtQVQ2oKobUFUNqCqG1BVDagqhtQVQ2oKobUFUNqCqG1BVDWOt+/Z1eZarvMtV3mWq7zLVd5lqITb23aLUFUNqCqG1BVDagqUBv6dR5FB2Eig7CRQdhJNDriBkPJr0L96vv6c1yW6W9XnN4gZDvriBkO+uIGQ764gZDvriBkO+uIMJ6vvQv3q+/jIq5LdLfVdIMvVyW6W9XJcW5rkt0t9cz1xAyHfY/AaczFUNqCqG1BUzEUghzfJFEiS4/+A56TNbLBMrrMKJiGBL77IIq5LdLerkt2Xkt0gy9XJcW5rkt0t66kgy9XJbpb1cluy8lukGXrsVXEDId9c0EcQVyW6ECe7PPE0UOoUUw/8bDAKeBGWn6IeT4of81wL4DIccag1U+0lGyZKSdveA1D4BYAYmqZQziIpET9BbOG7fneSPJXK3fBXwbDTG1RrK0i9GqhSwOk9oPgdEXdIaYDhjzPGdM0DsAkVrhwKMqQZerkt0t9V0gy9XJbpc9kt0t6uTLC9XJbpb1clulvqukGXq5MvfJbpBl6vOY3Nw3Ow6sD9Mll5lqu1t5REHhQQMUTA6/X2uTpf/zBjl13+xz+7MkYR57Dm4qsOm6bIqrrY8Wocwpm1+l/9x4SuOQLrpaF3Or5E04n+0A82VC3WFiMPuOIqN6SBU16IjEK5/0p2TWqfZ20iYy6o3S6+uw/D0npb1clulvXUkGXq5LdLfVdIMvVyXFua5LdLerkt0t66kgy9XJcY05DvriBkwfgVBv81OOIb/Jhq1qQkt1s7La5FyAzbcoZxSSqV2Ut0gy9XJbprRbpBl6uS3ZeS3SDL1eYBl6uS3S3q5LdNaLdIMvV5zeIGQ764lpKBzkt0rIj9lLdIMvVyW6W9XJbpb1clulz2S3S3q5LdNaLdIMvVy4iGa5LdLerkt0ueyW6W9XLnrgZDvriDGVP8qG8/TJZeZarvMWdjuwf96vvQv3q+9C/er70L96vvQw2eS3S3q5Ldl5LdIMvV5gGXq5LdLerkt01ot0gy9XnN4gZDvriWla5LdLerkt0t6uS3S3q5LdLerkt0t6uXEQzXJbpb1eYBl6uS3TWi3SDL1clulvVy4iGa5LdNfVEdcQMh5RJpb1clulvVyW6W9XJbpb1clulvVyW6XPZLdLerkt01ot0gy9XLiIZrktrk03uGobUFUNqCqG1BUth4q64xgsvMtV3mWq7zLT84ZfdSx60kOzbFUNqCqG1BVDagqT+wRe9zHSStWB+mSy8y1XeZarvMtV3mWq7zLVd5lqu8y1XeZarvMtV3mWq7zLVd5lqu8y1XeZarvMtQhPkh6VVYH6ZLLzLVd5lqu8y1XeYko7wjdASKDsJFB2Eig7CRQadPbFi5KZLLzLVd5lqu84UZerktsksirkt0rH0IK5LdLeqeS1s1yW6W9XJbpb1clulvVyW6W9XJbpb1T0l0L96vvQvhQnXEDId84EN96F+8UvhoHWnuUdT3KOp7lHTYE4a+O5R1Pco6nuUdT3KDKzRXok/8b6M/FUNqCqG1BVDagqYDqMNKM1usCqG1BVDagqhtQVQ2oKobUFUNqCqG1BVDagqhtQVQ2oKobUFUNqCqG1BVDagqhtQVQ2n9FGkywB2FDagqhtQVQ2oKobUFUNY7+Sb/bzMHPmWDnzLBz5lg5EFShHkNqCqG1BVDagrJbNKV4+T1ObUDhv+AYOIctfpjiG/4Bg4h0rMAOIb/gGDiG/4Bg4hv+AYOIb/gGDiG/4Bg4hv+AYOIb/ipYd9cQMh32YvG6Y4hv+AYOcDhv+AYOIbDdC/er/WZDvriBv7zriBkO+0QpbpBl6uS3S3q5LdLerkt0t6uS3S3q5NflvVyW6W9X46F+9X3ojHfXEDId9cQMh31xAyHfXEDId9cQMh31xAyHfXEDId9cQMh31xAyHfXEDId9cQMh31xAyHfXEDId9cQMh31xAyHfXEDId9cQMh31xAyHfXEDId9cQMh31xAyHfXEDId9cQMh31xAyHfXEDId9cQMh31xAyHfXEDId9cQMh31jAA/v/ZYQx3wAAAAAAAAC5fHZTjCkh43OxgCF65Fu2lDzgV3wYmTwuvgu0AjZKjeOLPO0cWedo4s87Ro5L62PTZxE1OR8fUqr/AxX1v5g0ARnrlZT29dAh2www1HV3zEqb3OkmZ/dJMz+6SZn90kzP7ozO6LVVbqOvU996Z2+B4WOWP7PwjKTvXERPhuGorZ86sG6wMr0VCwZCg8RAU3cS/L4VdRerPHjPrF0AWY1j6BXMGTDHUSXLoqJErYFU2yTP+fyj5L/GScey8FDG/R1BSnVA/+7dcQQ82ayYLgAAARnC31IP7it9Xh0faqOvPlPYFfCAnNq52uIYzeMUzNbeA/KdSje9xH4iBRZo06Z0mYSXpElwq8l8z6xerPHjPqJ9Fvyq+aTd8NVnvNURPhuGorOm9PZiCj62ursDOA/KdSje+Mh8RAAXPh4RR9oclyx/g4Wkq0GsDfBsntHfL/XMUPtggoweAYd7OnuxbMFmNY+gVzBsfzmBN1bH5R8l/jJOnSBWkIvM0CfKraaTfMuo51hVul6Z1hVul6Z1hVul6Z1hVul6Z1hVul6cXA4rOEf2iQAEfhBDLgFWHXiBuUEAAXqDmGTv0MI2EJ+Uvp7SH5Sz0PTXjHe+CEBE12pEXl2xtkKJ9HSado7pAAABMA78mJZs6v3b05jU75hNc868Y7z0SgqINZk5cDc0rTdjDcswqwACSPVwgCp/zLtT61qU6AAAGAlDgGLi8xRcD0HASWwAADrPeoFgED4VhVK42LEP4vVaWRAFIV/akDl7SAfjgAALeO8qd8wEaVqXc4do8aDKXCA5jx40fsGXwArXAAAClsPK6/2ApxaqlVTMIgniv8KP1ZLvgabkQAAEwveVO+YCH3whPAFllTL3iPIa21xEVQEfXl6n95ADLRNvt8fY/4O+Nchp3K8zboc0BQsoWMMjuV5kk71lMdtqIqy5obq0QDYP03KdGSj+xrKEWMMjuV5m3Q5oChZQsYZHcrzIIsgcyjaBKgHOBbzwd8i8naspJLxeMAoq0AJ7SHM5+dh1YAryl3Hcw4174BiCMDiVwjA4lcIwOJXCMDiVwjA4lcIwOIrnDBo8lSBGU+2RARoN8Joar8Ub1hA9mu72Hba8pzgVaul7X+U6ogAAAefFJvk4BJl40deKG5TCZW9r3u01xBqd2kKf3IifptnGuwsWl5+fn5+fn5+fn5+eFyPvPNADcpBNL0xIcQ88VXJMzwd8i8nc6gUtVgoGHNA3Nk4MFpNcY2ed4ix8xs87xFj5jZ53iLHzE8n05Nj2KvKemYorXWg40hwR7PKwTsUIsfMbPO8RY+Y2ed4ix8xs87xFKbaoo9Jl9gAAA9FTpMvs7V2G6TL7WiwHTgC3l5qgZyxN6c6MD8GyFG0Z6O4UdrjAp7p/4l13mCx82FBFrxP43yVuKrv6RS6op9VD1EvjLRxWS3rDudfGx0KkoiIiIiIlTnN5+0HPL/Xxx4ZwfvwIvskOXyEAdhpigrekHEhlU1w8BYH038dtl6jfpTgc45hOHkXxUfOWOLzB8lIdYcF1Wfetot63MkTEXEycUPEaAI+wunyF8O5GkvIB5g5LfJwKkpKZQDvR4YuINQFzfpdl+Y8JdBm65NQu5/AhWVukrwS5Gpvq05FijAvuiFfH8GnAl/780dXoXXp53WzuN/BJoTaoxFonur8Bb2AuRO7tS1QVHcx7wdlvV0w4Qs1JlNQGQHNxY2XiIgpBQ4yeZBai8ukElJaElinEe/ZgWFweMF4u1vUOKlpHmWFLUWCOMyytRNtjuoRJC2cgcXPCdBva8NqfLTIVJIhzzCAxnlYGDL/lsNey9v/KYAAA28wS2AK1YSMmODwmNWnnetyDLIgdwwIKOowL/0bQ9mH+6ney4JsUmNLjxZ93f99BT+IvazyGzcLPBEnzXPhk6zkRQQOgHwKt/TZabyBjqyvKmBkzU4hvjB2VvJFGhu+bopLNgrSAZKneKNj2Sf/KJ1AcL8at0lLMFEEPJcgB/QVrufxw7WafH4xsQ24EWpS7kE33zYnUpMmsy3TioNBHGl2//pt7jacmWFKaJ4PIKhhKbxFHpETWUxoHf3GulymF3M9PlEOfoqWEWYZFLDDacJ9PDDlVSWBSjCM+UBlOlrc2goTxdHLfXsy6YpSmVEZVuILDqW+V5RKatjSELORHX6xZPSTppj4kg/TPV4T44hN/d4PfaTxYzevmQdAr6ocSer2yDJLuWCIdDB6FQXxhsVJsnqPhqhRxn8DfHVGkUsK7NrFEXO7z3Acc+t0m74MEpfHTX/X6+P+gvEzCgJ/uoBJ/k4oFYogpaMagEiYHQw2jTrD4/G2nTdVAL55wHBJ5O0qj5w3lYkTusnSnc1jmh/srORYzjaKEU89+4FzXVaGMWwQ3vSJ4GGu4VsF5tHXRAX9i4ka44H6TwW+PmEGIsuTMFCtHOemvwsz6y4IjuUdZrGtGWgrfBSlEvyovELKSKwpTJ/gIQfgYY0o3/xC+MU/HLgK4cTCk3jo4kcSjd6N9nvQW582C2fXEHFMAnR6Gc0PH1Zw/ar+wWmDshTNEmiJymWIP//LmWdTetPp4kjzGTyrF6aRRfyvvNdiDeQQnjSaFHZq0jlCX70ez54bcFkY4A7z7uE3yTyxtP7x6Z5Ajg8ZfHvYKvNlgZoRQSXNhEGOxOydNwhoPl3U0ofVvx9G+nzix8+BpiNNyHupYAchHfa+TuqnnhgypK1khtj8zSaRLBp/E+O0wf9v//L1/aoRe+nUf++lQXcnknvX/vtjfSWwveVW9x4LyrtSdYYQqSPw/lEE/PIqyeMHbMezt1cAr3+dQv2bXIcLXjjOnYkNiC+XSE3jwwuqF97UqujcYWglRfi6f+8DBi3fc8hVS93ercll7ibTRcrQVmNyQg4BUBksoBMqOVQO/DwNkHpBrBz59byJ5VIenwpl+l5fdIUcH1Db2EQh1uOhm4ygr7YE2m/YcQQlgBF5RM7Yc0JdsXU+3Nu/AQSgww+QZkVV7b0HDcTC2uiaCJto+kT/TNVbGCV9b6VJUYXi9++bSspdz+u4XOspFm3D0/5SJ9BlSkUUHJGLI1isVq5Ta55Y5xS6YaTzQHLqZM+s4u+2PUuJS0wGR3ilzvwdyEMx13LNMXbd21J9ar9JhnIcfQXtRp1ymO5KWJ1AEbSrDwH8V+Yves+/u8z54dvYRCHMCnPSsyCBvCC7tq/a2/8ANiK9BdEUi7P5fmTIKDGf2s0VX7x3GKVqSmLKS31/sfssr8nAMfYWPkyTvEeUnaNlL/hL3kHYq6I7DmstcyxEEEQknGjmSE7W1h9az1Z6MFqwfmzS6K8erj8Z0Tf9d8rLHIJcV8Nvc8JPz7ZmqkN+8dH2A/WdfgwwbUMkgYNGe8dzxPEu5K7O3PtL37i3zAORI27F6A58rjfT5Ll1ClkhzB0ncmc99UJs2JDJywDcj+A8mRmPVeyx2pvaydkZ5+cKebxBDimGHtu2mXnu9tVQJrS/FcPlUwho8w+RP/4hVNS2nW33oHY8n7z7SjGruFRUTWVAOjHRr8WZaYzQrOU1T8Fq0EIaP4n6VObQqmNrHUP/ykpL97kDxofl6emy6WxaVr/0ESxi+vxjUxzoaJ8cPjZdT3LAUO5vatmk9VBd8eatNAgqE76+V/HbxvGE+nGT179bw30EWuM2EfqkdWxtDekRbvSgaasuraprK7gmHFOBsFpn44my9pagHSGC6pZ49a4s9XwNs1ezh9p54k/0FvWj4GwryWF3EfrluU8TBoY9TfVMSi0XbAQZ1+cj99Wf6311Ti/28Yx9+II7uJ1SUHWUDVeLejdHzbtFLuykXsSidremJ+vXNMSf8DiGGXG9LFpb48nczAtYNSi9Qd9a1P2fZtX7uo7b2giVpQ7oVhWaXdyRO78sxNsuEuhMIzNr3j+breeumTp9AT0YQy/Rs+BXi2czEVuWJiKkW4YwF9aLDaTuWme0NZ7K9J5jhkAAqfNNLnGHOkfI9GR1eOuO+vawwLsSYaGbGzopTlt4Qn1Fv9dBNnZmkNH78W8KcWtFhHbEYXowAAadwI1gC8+Bam+i7UGyZ3+c73m/UjQkeaCU1SrExV35O0/EfjAI2dBPIfmVV9uA/g5xTKwXldU7QbVglXVN706KDNzdbrnhIgDyBRdGYAhKu3sa8UgST9IJMFfwQosEKllMvsVlG4eNcbU98iTL4/cKj9ig4hbi6ik7QwzzSf6O1GbkdUSG74PrxyjgWUJMU2aL5pnlXcufyPDfm8NIiEVVvmbewraCzOZbxXosfRSFnnVJpvCA2yp2d1nBeiHNf5X7ru5eY+U3tN+uNgyGzDDFbbbmmgjKuqWP9Rjfc+saf6u75e0OaGuQle2MR+M15NzSQ3s+7l+Eb9vpgUoIuCxx5R7zlOJTFc8aLfW4dtA1R6z+PIDLmofGTWZPJxVWACcJMJxYD/nwzR3BSf7M9aohT9Ktp+klNauhBicG4uvWrF/wGXfdlq8PlazCPL2t+vEVL97Ql2ELzf4sS9Gs6p6CZre71wZOrvVbvb0oaiS7Hpg/cvjcfLj4s/nkbSq63NHoSncGl2A50G4lWT/xI01JldUTZvbokuwl3pcsN+TBzIIY4q3cAOjAP5rezx0V9duf+DjNKndLB2OfLYZr44NWvhXrK/sgiiTaUJLtJpOUc7QnHaOxe+jtKWwv5n9Iuk3gXgAi/P2G1deGa9APAk+2r/IPa8NPA+9nxoRq73b5FVm6XnoeduA7jfICvhNwPggzIUrOD2cMerTGIqbFJmuM1gZyyLXMm+Rcslps1FKcb/V4s3U5t7ec9IKJGhJZxEOYORh8DyKEsurVaISXQvOfYTUa4NX2p4Rb+dxoAaMW6bIOIQrMdrzOkbWmb0mLPGpZOTXlg4s0Bh7PsuMEHtHAEFMiNO3++7coA+89+YANVy2kFCHcBOAYgwnYWJaFT/rVji+YcfVhh21w4zKt1LT/Ju9BlO3HgCI4fNxJfXCq3Ah7m8n17+hewRx2nnMItssLBFo5mLQy1kgh3nSD6111xItbk9e+6cEld5+UcpQFKjvKlvLc51AmF2S+gZs3ScgZ6SJhphuG+WEuRdMyCNCWnSVfzszCKXll+32WNyD9XaUIcMxcITv2rBPYkj4oK9ZiNok7QCQsr9U8Et8e0pBBigpleZM7HqZr3z9Uh3K48Njs44XCvTP66a4nfhsgWvi1ILUpDNLRQyKNwwtZ/XZ9HH48zQeiKkcXqo9cjdw8pEiWXGk8tZZAH5LvPzfiVKbyH2tICPOD4zDQEGrE8peBs+O5lX5Ep2qIHVbNX9fvF8dluBSiPyuTeP3xA6Dwyk70b+E7SZnuPlBHJ+t729fZqYPVQRxhHz+LLWZclBem9xrqRYOk5pOt+tY21Yy3UcM5g/GGs0v4CCpd0CdYRaYK9zw0JUS9PVg46e8LwqyPvjGGkb1BGrLebVNSA6dMqDFWYihXNneRdpUEVfUpG9Rk8IB3PNQlL1oEf0LNtY/Ifw86PQmMwwmUAzgTihUWqfHPbqwwwtFTfMWF6Zlk+FbnJ4Q9HtuqtIefEeszfwAO0fW0K2wDhzkQlYsY0FEQ/x0QOU7iKB6+YBkQGyyQuLJrnEerkxPWDlWmfiQVrFGYnJBt73Y1FPIpZQVdLPVIEdAub6rl5x57dF0yR/yApTB/529rrDslsh6yCp997jQhQfWd7V+5lXf81DkuRZB/g/x3QNG9aHfmF8UGs7cOmU5AN+hpp43Zn68jk0n2CVvne6DSgsTvf8j3Igi4MgMSuTjETnGIWuzBd8qQq3XIHPHzX50FLngDtKpxg2709cMuQT6kfDPp93Cja7lLdXuSuRHtMtigxoql9M5J6PLr8Eie4zwwlFOhh1q/WInlXmu1RAD9wz1GReFCljHMNuW1gTF21eaMmUxYzclLpoVzXjkpviA29e+WshWW/c3saaymprB/ZL4kBcwmab8kt3hgK1M1mAAALM0D9QB9kjU4R6RwuHQF8NA2Jd9OTGTdbyn5le1QX8G6VNsxKkihq51oTeO7gADCPLUQG9p3ipCpWDf8JODIn5muZc0upWKOchKfGtga97jGZoCMgHgO9tzgAAALyOjp6wqobWA1vRSKa7rlT3RFioNAa/g+w+4t9haFfYO0MqKZz/CxMNi370E3ZuAWTxb+vt5qX2BGyvfINj3aN6oTEKFFALa2AAAAAAA4uQS2AFgNEQdNn1kAAAAAZoII1gD8xojR3hqtZRbAjim3/8do3bU5dTuFajxP0zaIDX1VzdLDOxMX7dVQV+HYJtX5wt9VAyaZkmCr2Q9rJ5X7Hvcr9aFqXn6urwzcZQIdLfkO7w7jbisUn+lhgmzLGm3Pc4byXpzNnf7/god4qDQIAAAA4uQS2AAAAAAAF/6CA4AAAAAABX0Qx5/wFRgfwcT7AQvb4+U4l77L6dulq6/1dadsQFrIq8Ix7Dtaemi1nNzZ0Yh0W2XjCah4ObmzoyQRKdn6bhUe39zyf8mAPW6+y2RbgZsWvA3OqXG6bagb1AVE+RVTleuH1S7gCG6Ap/3PCaznNmzVZDocQ6LbLxhNQ8HNzZ0Yh0RU96PYkRWiRbXph/gVIoew5A4k93WrzXZWx4I4hQBTSaNYoX8KclQA6vXgURAPuwuoq0B4ZmMLIDedGq2RcQoE/Q9iNYlFqpwIcUVTrjz3styGyjQeC3QP16xMDdcIG64QN1wgbrhA3Vs14ru53A4MkcZqRSZ/l3ZeCF41co3ZXcHUopkwRZwzA/sQxkLa/MokSq0zWqszbMVLV9r4cpAcf42N+nb//dkKE0L/Uwnyg2otSW1Ca5Fu5lBDUJgYw7iV0fljldH5Y5XR+WOV0fljldH5Y5XR+WOV0fljldH5Y5XR+WOV0fljldH5Y5XR+WOV0fljldH5Y5XR+WOV0fljldH5Y5XR+WOV0fljldH5Y5XR+WOV0fljldH5Y5XR/p70aedWonb5oBTd2/3K2rA7bWeNdH6Vv/fiPTMpvyFB2WaxcXfSikYMsqIdRBD6Ru0baR/qpIDeCMN2eNbPVoNQ1iPQ0KCDYKkYuIOyGqxIXZpqtAgpELFI111P8yF2aarQIKRCxSNddT/MhdmQN5iwCNDtl55aOSl8b+qExiHc/amCuo4RtiQ8zangqXP3rnZ5vIInaQcbfptKiqHP56ve8sOhmVLR6aKQ1rkDXjKqKFK5vw8STEI5wusfl2izkqNwkQB5ArKisptVw3W655UCorCBDcoqdtIxP/W8HZYVdW4TL4aN9zohJ/TmRoIdmtOjNzks9N7dO2t472R+bvF/ecFYPKBwhB2hcCsqKym1XDdbrnhIbA0m8K8t3Ni0oZVl1zt9hwLpMF1cPYOOEAAAbMZN3YGAAAEsvAOAA0KOQQe/lKIAAMgLkHyhFvHsb9ixwTEq16wfERv4P3K4ju/8MNUJ/2oT/tQnu2bLPpF9+68tDmhj8Tb35WNBOxPzwK7ZU2T/UJ/2oT/tQn/afLV0l9BW+4sJMRDQ/DjP1je4ibutALp9vKNWWnckk76ThtX6pZLu6cVJcarivzMTYg752zY69YzyzYF4N2pMq/bDuSkiGJQ9ViOYRV3Rgw8MHo/G0AlYmYv+l7TBRX3T1fNvd3yh/nmpwhjDu4J9eHrw9eHrw9eHrw9eHrw9eHrw9eHrw9eHrw9eHrw9eHrw9eHrw9eHrw9eGgRbk1+mk2CcWiYv/8ipOhXeGkmgB4CJ4dc86dITsxvhsZ9GqZIKf63geIA9RY1B9EJwF/+FD4F08orjSHSnZDLe8V6l0BbQ3pBF6CMNVBWm1uIHbYyxI+qvK2wQRwAbfbsz5TtCB2SgldGvXO7gt7FvYt7FvXKiSrGHrhw5Uhb9nkJRDfJcmYfvgUKXulZElcpypszObwkfNcr2Lexb2LQ8XQEcDT9oHJAS8QEvkKywASFya1fEm4AAAAAAAAAKpeySZfgNCMaEY0IUJRJl9gCAAwcEcEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "size": [
      2048,
      384
    ],
    "background": "#E5E6E8",
    "ops": [
      {
        "type": "rect",
        "x": 0,
        "y": 0.03,
        "w": 1,
        "h": 0.284,
        "fill": "#35A24B"
      },
      {
        "type": "rect",
        "x": 0,
        "y": 0.814,
        "w": 1,
        "h": 0.118,
        "fill": "#2191C5"
      },
      {
        "type": "rect",
        "x": 0.32,
        "y": 0.402,
        "w": 0.072,
        "h": 0.115,
        "fill": "#35A24B"
      },
      {
        "type": "rect",
        "x": 0.32,
        "y": 0.54,
        "w": 0.072,
        "h": 0.115,
        "fill": "#1A90C8"
      },
      {
        "type": "text",
        "text": "FamilyMart",
        "x0": 0.404,
        "x1": 0.664,
        "cy": 0.545,
        "size": 0.24,
        "fill": "#2191C5"
      }
    ],
    "wall": {
      "meshes": [
        "building-shell",
        "parapet"
      ],
      "tile": 2.5,
      "size": 512,
      "seed": 20260828,
      "base": 248,
      "patches": 55,
      "patchAmp": 22,
      "streaks": 260,
      "streakAmp": 52,
      "specks": 3200,
      "speckAmp": 36
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
function createFamilyMartStoreBuildingModel(options = {}) {
  const root = new THREE.Group();
  root.name = "FamilyMart Store Building";
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
  const root = createFamilyMartStoreBuildingModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogRmFtaWx5TWFydCBTdG9yZSBCdWlsZGluZyAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyBhbmRcbiAqIGluc3RhbmNpbmcgYXJlIGhhbmQtcm9sbGVkIGJlbG93IC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpcyBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgOC4wMCB4IDQuNjAgeCA3LjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsIHNob3Bmcm9udCBmYWNpbmcgK1ouXG4gKiBCdWRnZXQgKGhlcm8yeCk6IDw9MTYwMDAgdHJpYW5nbGVzLCA8PTEyIGRyYXcgY2FsbHMsIDw9OCBtYXRlcmlhbHMsIDw9MTYgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogT25lIG9mIHRoYWlraXQncyBzaGFyZWQgcmV0YWlsLW1vZHVsZSBidWlsZGluZ3MuIFRoZSBzaGVsbCBmcm9udCBmYWNlIHNpdHMgYXQgej0rMi41MCByYXRoZXJcbiAqIHRoYW4gdGhlIGVudmVsb3BlIGVkZ2Ugc28gdGhlIGVudHJhbmNlIGNhbm9weSBjYW4gY2FudGlsZXZlciBmb3J3YXJkIGFuZCBzdGlsbCBsYW5kIGV4YWN0bHkgb25cbiAqIHRoZSBkZWNsYXJlZCA3LjAgbSBkZXB0aC4gRXZlcnkgc3VyZmFjZSBwYWlyIG9uIHRoZSBmYWNhZGUgaXMgZGVsaWJlcmF0ZWx5IG9mZnNldCBpbiBkZXB0aDpcbiAqIHR3byBzdXJmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IHRlYXIgaW50byBpbnRlcmxlYXZlZCB0cmlhbmdsZXMgYXMgdGhlXG4gKiBjYW1lcmEgbW92ZXMsIGFuZCBhdXRob3JpbmcgY29tcG9uZW50cyBmbHVzaCBhZ2FpbnN0IG9uZSBhbm90aGVyIHByb2R1Y2VzIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICAvKipcbiAgICogV2hlcmUgdGhpcyBwcm9wJ3Mgc2hpcHBlZCBmaWxlcyBsaXZlLCB3aXRoIGEgdHJhaWxpbmcgc2xhc2guXG4gICAqXG4gICAqIFRoZSBtYXBzIGFyZSByZWNvcmRlZCBhcyBiYXJlIGZpbGVuYW1lcyBiZWNhdXNlIHRoZSBidW5kbGUgaXMgRVZBTFVBVEVEXG4gICAqIHJhdGhlciB0aGFuIGltcG9ydGVkOiBpdCBoYXMgbm8gaW1wb3J0Lm1ldGEgYW5kIG5vIGN1cnJlbnRTY3JpcHQsIHNvIGl0XG4gICAqIGNhbm5vdCBzZWUgaXRzIG93biBVUkwuIEV2ZXJ5IGhvc3QgZGVyaXZlcyB0aGlzIGZyb20gdGhlIG1vZHVsZSBVUkwuXG4gICAqL1xuICBiYXNlVXJsPzogc3RyaW5nO1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcImZhbWlseW1hcnQtc3RvcmUtYnVpbGRpbmdcIixcbiAgICBcIm5hbWVcIjogXCJGYW1pbHlNYXJ0IFN0b3JlIEJ1aWxkaW5nXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiRmFtaWx5TWFydFN0b3JlQnVpbGRpbmdcIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJ3YWxsXCIsXG4gICAgICAgIFwiY29sb3JcIjogOTY3MjYwMixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImRlY2tcIixcbiAgICAgICAgXCJjb2xvclwiOiA3MjM4MjYxLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjk1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZmFzY2lhXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTUwNjY4NTYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMzQsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDAuNlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdsYXNzXCIsXG4gICAgICAgIFwiY29sb3JcIjogNzMwNDA0OSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4xNCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJvcGFjaXR5XCI6IDAuOTQsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDEuMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImFsdVwiLFxuICAgICAgICBcImNvbG9yXCI6IDEzOTQ4NjI5LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjM4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjE4XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ2FsdlwiLFxuICAgICAgICBcImNvbG9yXCI6IDExMDUzOTk3LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjU1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjI4XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZGVjYWxcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4zLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwic3RlZWxcIixcbiAgICAgICAgXCJjb2xvclwiOiA3NjMzMDE5LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjYyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjIyXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwic2hlbGxGcm9udFwiOiAzLjEsXG4gICAgICBcImZhc2NpYVdhbGxcIjoge1xuICAgICAgICBcImN5XCI6IDQuMDc1LFxuICAgICAgICBcImN6XCI6IDMuMSxcbiAgICAgICAgXCJoXCI6IDEuMDUsXG4gICAgICAgIFwiZFwiOiAwLjZcbiAgICAgIH0sXG4gICAgICBcImZhc2NpYVdhbGxNYXRlcmlhbFwiOiBcIndhbGxcIixcbiAgICAgIFwicGFyYXBldFdcIjogNy45NSxcbiAgICAgIFwicGFyYXBldFNpZGVzXCI6IHtcbiAgICAgICAgXCJjeVwiOiA0LjA3NSxcbiAgICAgICAgXCJoXCI6IDEuMDUsXG4gICAgICAgIFwidGhpY2tcIjogMC4yNCxcbiAgICAgICAgXCJjeFwiOiAzLjg1NVxuICAgICAgfSxcbiAgICAgIFwicGFyYXBldEV4dHJhXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIC0zLjc0NSxcbiAgICAgICAgICAxLjcxLFxuICAgICAgICAgIDMuMTUsXG4gICAgICAgICAgMC40NSxcbiAgICAgICAgICAzLjQyLFxuICAgICAgICAgIDAuM1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIC0wLjAxLFxuICAgICAgICAgIDcuOTEsXG4gICAgICAgICAgMC4xMixcbiAgICAgICAgICA2LjlcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwiZnJhbWVNYXRlcmlhbFwiOiBcImFsdVwiLFxuICAgICAgXCJmYXNjaWFcIjoge1xuICAgICAgICBcImJvYXJkc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ3XCI6IDcuOTgsXG4gICAgICAgICAgICBcImhcIjogMS4wNyxcbiAgICAgICAgICAgIFwiZFwiOiAwLjEyLFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDMuOTM1LFxuICAgICAgICAgICAgICAzLjQ0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJmYWNlXCI6IFwiK1pcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ3XCI6IDAuMTIsXG4gICAgICAgICAgICBcImhcIjogMS4wNyxcbiAgICAgICAgICAgIFwiZFwiOiAyLjU1LFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIDMuOTQsXG4gICAgICAgICAgICAgIDMuOTM1LFxuICAgICAgICAgICAgICAyLjIyNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiZmFjZVwiOiBcIitYXCIsXG4gICAgICAgICAgICBcInVcIjogW1xuICAgICAgICAgICAgICAwLjAyLFxuICAgICAgICAgICAgICAwLjNcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImdsYXppbmdcIjoge1xuICAgICAgICBcImN4XCI6IDAuMjA1LFxuICAgICAgICBcImN5XCI6IDEuNyxcbiAgICAgICAgXCJjelwiOiAzLjIsXG4gICAgICAgIFwid1wiOiA3LjE3LFxuICAgICAgICBcImhcIjogMy4wNCxcbiAgICAgICAgXCJkXCI6IDAuMDhcbiAgICAgIH0sXG4gICAgICBcImdsYXppbmdFeHRyYVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAtMC4yOTUsXG4gICAgICAgICAgMS4zNCxcbiAgICAgICAgICAzLjI5LFxuICAgICAgICAgIDAuOTksXG4gICAgICAgICAgMi4zNixcbiAgICAgICAgICAwLjA2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLjc0NSxcbiAgICAgICAgICAxLjM0LFxuICAgICAgICAgIDMuMjksXG4gICAgICAgICAgMC44NyxcbiAgICAgICAgICAyLjM2LFxuICAgICAgICAgIDAuMDZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuOTIsXG4gICAgICAgICAgMS43LFxuICAgICAgICAgIDIuOTksXG4gICAgICAgICAgMC4wOCxcbiAgICAgICAgICAzLjA0LFxuICAgICAgICAgIDAuODZcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwiZnJhbWVcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgMC4yMDUsXG4gICAgICAgICAgMy4yOSxcbiAgICAgICAgICAzLjI5LFxuICAgICAgICAgIDcuNDUsXG4gICAgICAgICAgMC4xNCxcbiAgICAgICAgICAwLjE0XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLjIwNSxcbiAgICAgICAgICAwLjE1LFxuICAgICAgICAgIDMuMjksXG4gICAgICAgICAgNy40NSxcbiAgICAgICAgICAwLjIsXG4gICAgICAgICAgMC4xNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTMuMzQsXG4gICAgICAgICAgMS43LFxuICAgICAgICAgIDMuMjksXG4gICAgICAgICAgMC4yLFxuICAgICAgICAgIDMuMDQsXG4gICAgICAgICAgMC4xNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy44LFxuICAgICAgICAgIDEuNyxcbiAgICAgICAgICAzLjMxLFxuICAgICAgICAgIDAuMjgsXG4gICAgICAgICAgMy4wNCxcbiAgICAgICAgICAwLjI0XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLjE5NDk5OTk5OTk5OTk5OTg0LFxuICAgICAgICAgIDIuNjY1LFxuICAgICAgICAgIDMuMzI1LFxuICAgICAgICAgIDQuNSxcbiAgICAgICAgICAwLjIxLFxuICAgICAgICAgIDAuMTdcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAuMjU1LFxuICAgICAgICAgIDEuMzUsXG4gICAgICAgICAgMy4zNixcbiAgICAgICAgICAwLjEyNSxcbiAgICAgICAgICAyLjUsXG4gICAgICAgICAgMC4xXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLjE2LFxuICAgICAgICAgIDIuNjY1LFxuICAgICAgICAgIDMuNDE1LFxuICAgICAgICAgIDAuMzYsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAwLjA0XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC4yOTUsXG4gICAgICAgICAgMi41MixcbiAgICAgICAgICAzLjMyNSxcbiAgICAgICAgICAwLjk5LFxuICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgMC4wN1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMC43NDUsXG4gICAgICAgICAgMi41MixcbiAgICAgICAgICAzLjMyNSxcbiAgICAgICAgICAwLjg3LFxuICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgMC4wN1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy45NCxcbiAgICAgICAgICAzLjI5LFxuICAgICAgICAgIDMuMDIsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAwLjE0LFxuICAgICAgICAgIDAuOTJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuOTQsXG4gICAgICAgICAgMC4xNSxcbiAgICAgICAgICAzLjAyLFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMC4yLFxuICAgICAgICAgIDAuOTJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuOTQsXG4gICAgICAgICAgMS43LFxuICAgICAgICAgIDIuNixcbiAgICAgICAgICAwLjA5LFxuICAgICAgICAgIDMuMDQsXG4gICAgICAgICAgMC4xXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjk1LFxuICAgICAgICAgIDIuODE1LFxuICAgICAgICAgIC0yLjUsXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAwLjA5LFxuICAgICAgICAgIDAuOTlcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuOTUsXG4gICAgICAgICAgMi4wNjUsXG4gICAgICAgICAgLTIuNSxcbiAgICAgICAgICAwLjA3LFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMC45OVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy45NSxcbiAgICAgICAgICAyLjQ0LFxuICAgICAgICAgIC0yLjk3NSxcbiAgICAgICAgICAwLjA3LFxuICAgICAgICAgIDAuODQsXG4gICAgICAgICAgMC4wNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy45NSxcbiAgICAgICAgICAyLjQ0LFxuICAgICAgICAgIC0yLjAyNSxcbiAgICAgICAgICAwLjA3LFxuICAgICAgICAgIDAuODQsXG4gICAgICAgICAgMC4wNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy45NjI1LFxuICAgICAgICAgIDEuMjI1LFxuICAgICAgICAgIDAuODE1LFxuICAgICAgICAgIDAuMDQ1LFxuICAgICAgICAgIDIuNDUsXG4gICAgICAgICAgMC4wOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy45NjI1LFxuICAgICAgICAgIDEuMjI1LFxuICAgICAgICAgIC0wLjMxNSxcbiAgICAgICAgICAwLjA0NSxcbiAgICAgICAgICAyLjQ1LFxuICAgICAgICAgIDAuMDhcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuOTYyNSxcbiAgICAgICAgICAyLjQxNSxcbiAgICAgICAgICAwLjI1LFxuICAgICAgICAgIDAuMDQ1LFxuICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgMS4yMVxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJtdWxsaW9uc1wiOiB7XG4gICAgICAgIFwid1wiOiAwLjA2NSxcbiAgICAgICAgXCJoXCI6IDMuMDcsXG4gICAgICAgIFwiY3lcIjogMS42ODUsXG4gICAgICAgIFwiY3pcIjogMy4zMyxcbiAgICAgICAgXCJ4XCI6IFtcbiAgICAgICAgICAtMi4wMixcbiAgICAgICAgICAtMC44MyxcbiAgICAgICAgICAxLjIxLFxuICAgICAgICAgIDIuNDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwic2lkZUZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJTZXJ2aWNlIGRvb3IsIGxvdXZyZSBhbmQgc2lkZSB3aW5kb3dcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcInN0ZWVsXCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTYsXG4gICAgICAgICAgICAxLjIsXG4gICAgICAgICAgICAwLjI1LFxuICAgICAgICAgICAgMC4wNCxcbiAgICAgICAgICAgIDIuNCxcbiAgICAgICAgICAgIDEuMDVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTg3NSxcbiAgICAgICAgICAgIDAuNDUsXG4gICAgICAgICAgICAwLjQyLFxuICAgICAgICAgICAgMC4wMTUsXG4gICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAwLjdcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTg3NSxcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAwLjcsXG4gICAgICAgICAgICAwLjAxNSxcbiAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAwLjE2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk2NSxcbiAgICAgICAgICAgIDIuNDQsXG4gICAgICAgICAgICAtMi41LFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuNjYsXG4gICAgICAgICAgICAwLjg1XG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJleHRyYUZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJSb29mdG9wIHBsYW50IGRlY2tcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcImdhbHZcIixcbiAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNzUsXG4gICAgICAgICAgICAzLjg3LFxuICAgICAgICAgICAgLTEuNzUsXG4gICAgICAgICAgICAyLjMsXG4gICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAwLjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC43NSxcbiAgICAgICAgICAgIDQuMTQ1LFxuICAgICAgICAgICAgLTEuNzUsXG4gICAgICAgICAgICAyLjQyLFxuICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgIDAuN1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTEuNyxcbiAgICAgICAgICAgIDMuNzksXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgICAwLjM0LFxuICAgICAgICAgICAgMC42XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjIsXG4gICAgICAgICAgICAzLjc5LFxuICAgICAgICAgICAgLTEuNzUsXG4gICAgICAgICAgICAwLjA2LFxuICAgICAgICAgICAgMC4zNCxcbiAgICAgICAgICAgIDAuNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS4yLFxuICAgICAgICAgICAgMy45NixcbiAgICAgICAgICAgIC0xLjY1LFxuICAgICAgICAgICAgMS4wNSxcbiAgICAgICAgICAgIDAuNjgsXG4gICAgICAgICAgICAwLjcyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjIsXG4gICAgICAgICAgICAzLjk2LFxuICAgICAgICAgICAgLTEuMjc1LFxuICAgICAgICAgICAgMC42NixcbiAgICAgICAgICAgIDAuNTYsXG4gICAgICAgICAgICAwLjA0XG4gICAgICAgICAgXSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImN5bFwiOiBbXG4gICAgICAgICAgICAgIDEuMixcbiAgICAgICAgICAgICAgMy45NixcbiAgICAgICAgICAgICAgLTEuMjQ1LFxuICAgICAgICAgICAgICAwLjIxLFxuICAgICAgICAgICAgICAwLjAzLFxuICAgICAgICAgICAgICAxNixcbiAgICAgICAgICAgICAgMS41NzA3OTYzMjY3OTQ4OTY2XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjA1LFxuICAgICAgICAgICAgNC4wMixcbiAgICAgICAgICAgIC0yLjQ1LFxuICAgICAgICAgICAgMC40NixcbiAgICAgICAgICAgIDAuOCxcbiAgICAgICAgICAgIDAuNTJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY3lsXCI6IFtcbiAgICAgICAgICAgICAgMi4wNSxcbiAgICAgICAgICAgICAgMy44NixcbiAgICAgICAgICAgICAgLTIuMTcsXG4gICAgICAgICAgICAgIDAuMDM1LFxuICAgICAgICAgICAgICAwLjQ4LFxuICAgICAgICAgICAgICA4XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjksXG4gICAgICAgICAgICA0LjA5LFxuICAgICAgICAgICAgLTEuOTUsXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgMC45NCxcbiAgICAgICAgICAgIDAuOVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi45LFxuICAgICAgICAgICAgNC4wOSxcbiAgICAgICAgICAgIC0xLjQ5LFxuICAgICAgICAgICAgMC44NCxcbiAgICAgICAgICAgIDAuNzgsXG4gICAgICAgICAgICAwLjA0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjksXG4gICAgICAgICAgICA0LjU3NSxcbiAgICAgICAgICAgIC0xLjk1LFxuICAgICAgICAgICAgMS4wNixcbiAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAwLjk2XG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJ0aW50RmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIkdsYXppbmcgZGVjYWwgYmFuZHNcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcImRlY2FsXCIsXG4gICAgICAgIFwidG9uZXNcIjogW1xuICAgICAgICAgIDMxMjE0ODIsXG4gICAgICAgICAgMzEyMTQ4MixcbiAgICAgICAgICAzMTIxNDgyLFxuICAgICAgICAgIDMxMjE0ODIsXG4gICAgICAgICAgMjA2ODY3NixcbiAgICAgICAgICAyMDY4Njc2LFxuICAgICAgICAgIDIwNjg2NzYsXG4gICAgICAgICAgMjA2ODY3NlxuICAgICAgICBdLFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMi4xMDUsXG4gICAgICAgICAgICAxLjI1LFxuICAgICAgICAgICAgMy4yNDUsXG4gICAgICAgICAgICAyLjUxLFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuMDEyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjE4NSxcbiAgICAgICAgICAgIDEuMjUsXG4gICAgICAgICAgICAzLjMyNSxcbiAgICAgICAgICAgIDIuMDMsXG4gICAgICAgICAgICAwLjAzLFxuICAgICAgICAgICAgMC4wMTJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuNDk1LFxuICAgICAgICAgICAgMS4yNSxcbiAgICAgICAgICAgIDMuMjQ1LFxuICAgICAgICAgICAgMi41OSxcbiAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAwLjAxMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NjUsXG4gICAgICAgICAgICAxLjI1LFxuICAgICAgICAgICAgMi45OSxcbiAgICAgICAgICAgIDAuMDEyLFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuODJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0yLjEwNSxcbiAgICAgICAgICAgIDEuMTY1LFxuICAgICAgICAgICAgMy4yNDUsXG4gICAgICAgICAgICAyLjUxLFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuMDEyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjE4NSxcbiAgICAgICAgICAgIDEuMTY1LFxuICAgICAgICAgICAgMy4zMjUsXG4gICAgICAgICAgICAyLjAzLFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuMDEyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjQ5NSxcbiAgICAgICAgICAgIDEuMTY1LFxuICAgICAgICAgICAgMy4yNDUsXG4gICAgICAgICAgICAyLjU5LFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuMDEyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk2NSxcbiAgICAgICAgICAgIDEuMTY1LFxuICAgICAgICAgICAgMi45OSxcbiAgICAgICAgICAgIDAuMDEyLFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuODJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImNvbmRlbnNlcnNcIjogW11cbiAgICB9LFxuICAgIFwiZ3JhcGhpY1wiOiB7XG4gICAgICBcImJha2VkXCI6IFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmpvaEFBQlhSVUpRVmxBNElDNGhBQUNRTXdHZEFTb0FDSUFCUGpFWWlFUWlJWW0wR0JBQmdsbGJ2aGZ2ZnQvM21yY0NYLytYOGJTT2xSOXFFbUFUNUZ0UDBQODArRE03eitwL3ozOWgvN1QrMW5WTmJiZHpQNloreXY0MCt3SEFzOG1QeTM4YS93LzlYL3duL24vdnYwWi9vbjlVL3BQOVYvMW45aCtuUDVsL3ZudUFmcGQvaC82ci9oLzJRN2ozbUYvbTM5Ti83WDl4OTFyL00vOGIrbys0djllLzJJK0FEK1MvMVAvdGZuLzgyWCtSOWxuOTEvWUovb1ArSi8vL3M2ZjdiOXR2aEUvYlAvMi82YjRJLzZQL2hmL1QrZi95QWYvLzJ5ZjRCLy8rdFg2T2YwTHR3L3dINHZkRk43WDgwanFieFUvVkQ4UitTL3MvL2N2d3o5UmVBZDZjL3V2OU4vYi8rMDhaS0FEOGUvaW4rTC91Mzd2K2VucUhlQVBZQS9tLzlFLzMzMnMvT0g5WS93M2tTMEIvNTEvSmYrMTZMZitYL24vUXIrYWY2MzJFZjVuL1EvKzl3R2Y3WUNTVzZRWmVya3QwdDZ1UzNTM3E1TGRMZXJrdDB0NnVTM1MzcTVMZExlcmt0MHQ2dVMzUzNxNUxkTGVya3QwdDZ1UzNTM3E1TGRMZXJrdDB0NnBiYWhMdDNjbzZudVVkVDNLT3A2NTdpZXYzS09wN2xIVTl5anFlNVBwcGs5aW5LOHkxWGVaYXJ2TXRWM21XcTdKVlJaVEJEbTJLb2JVRlVOcUNxRzFCVkRhZ3FodFFWUTJvS29iVUZVTnFDcUcxQlZEYWdxaHRRVlEyb0tvYlVGVU5xQ3FHMUJWRFV2Mnc1aGVaYXJ2TXRWM21XcTd6TFZkNWxwNjJvbTduNlpMTHpMVmQ1bHF1OHkwOC8vK3l5OHkxWGVaYXJ2TXRuZGF2RDUrSmRVWkFaWGg4L0V1aXAzOU1zSEhWUSt4UUhjMXhBeUhmWEVESWQ5Y1FNaDMxeEF5SGZYRURJZDljRDdaejB0NnVTM1NzaUVSeERmOEF3Y1FtMmZ3REJ4RGY4QVhrdDB0NnA2UzZGKzlYMkhBMnpucGIxY2xnZTZGdWtHWHE1TGRMZXJrdDB0NnVTM1MzcTVMZExlcmtzRVVpSTY0Z1pEdm05Yk5jbHVsdk9YcmRJTXZWeVc2VzlYSXJWQy9lcjd6N1JsZEVkY1FNaHhGaHpYRURJZDljUU1oMzF4QXlIZlhFRElkOWNRTWgzMXdQdG5QUzNxNUxkS3lJL1pTM1NETGNEbkpicGIxY2x1bHZWdnpxZWx2VnlXQjdvVzZRWmVya1ZrZGxrTyt1SUdRNzY0Z1pEdnJpQmtPK3VJR1E3NjRnWkE2RTY0Z1pEdnJoNlVMZElNdlZ5SzFRdjNxKzlDL2VyNzBLdytrR1hxNUxBOTBMZElNdlZ5S3lPeXlIZlhFRElkOWNRTWgzMXhBeUhmWEVESWQ5Y1FNZ2RFS0t1UzNTM3EzNTJ4VWd5OVhJclZDL2VyN3dQak9aVHhlWmFydk10VjNtV3E3TlNmd2ZNQ0VpZzdDUlFkaElvT3drUHBWWjk5N3BkdSttcDdsSFU5eWpxZTVSMVBjb01WazJnbFNlcGtNV29Lb2JVRlVOcUNxRzFCVkRhZ3FodFFWUTJvS29iVUZVTnFDcUcxQlZEYWdxaHRRVlEyb0tvYlVGVU5xQ3FHMUJWRFdPdCsvWjFlWmFydk10VjNtV3E3ekxWZDVscUlUYjIzYUxVRlVOcUNxRzFCVkRhZ3FVQnY2ZFI1RkIyRWlnN0NSUWRoSk5EcmlCa1BKcjBMOTZ2djZjMXlXNlc5WG5ONGdaRHZyaUJrTyt1SUdRNzY0Z1pEdnJpQmtPK3VJTUo2dnZRdjNxKy9qSXE1TGRMZlZkSU12VnlXNlc5WEpjVzVya3QwdDljejF4QXlIZlkvQWFjekZVTnFDcUcxQlV6RVVnaHpmSkZFaVM0LytBNTZUTmJMQk1yck1LSmlHQkw3N0lJcTVMZExlcmt0MlhrdDBneTlYSmNXNXJrdDB0NjZrZ3k5WEpicGIxY2x1eThsdWtHWHJzVlhFRElkOWMwRWNRVnlXNkVDZTdQUEUwVU9vVVV3LzhiREFLZUJHV242SWVUNG9mODF3TDRESWNjYWcxVSswbEd5WktTZHZlQTFENEJZQVltcVpRemlJcEVUOUJiT0c3Zm5lU1BKWEszZkJYd2JEVEcxUnJLMGk5R3FoU3dPazlvUGdkRVhkSWFZRGhqelBHZE0wRHNBa1ZyaHdLTXFRWmVya3QwdDlWMGd5OVhKYnBjOWt0MHQ2dVRMQzlYSmJwYjFjbHVsdnF1a0dYcTVNdmZKYnBCbDZ2T1kzTnczT3c2c0Q5TWxsNWxxdTF0NVJFSGhRUU1VVEE2L1gydVRwZi96QmpsMTMreHorN01rWVI1N0RtNHFzT202YklxcnJZOFdvY3dwbTErbC85eDRTdU9RTHJwYUYzT3I1RTA0biswQTgyVkMzV0ZpTVB1T0lxTjZTQlUxNklqRUs1LzBwMlRXcWZaMjBpWXk2bzNTNit1dy9EMG5wYjFjbHVsdlhVa0dYcTVMZExmVmRJTXZWeVhGdWE1TGRMZXJrdDB0NjZrZ3k5WEpjWTA1RHZyaUJrd2ZnVkJ2ODFPT0liL0pocTFxUWt0MXM3TGE1RnlBemJjb1p4U1NxVjJVdDBneTlYSmJwclJicEJsNnVTM1plUzNTREwxZVlCbDZ1UzNTM3E1TGROYUxkSU12VjV6ZUlHUTc2NGxwS0J6a3QwcklqOWxMZElNdlZ5VzZXOVhKYnBiMWNsdWx6MlMzUzNxNUxkTmFMZElNdlZ5NGlHYTVMZExlcmt0MHVleVc2VzlYTG5yZ1pEdnJpREdWUDhxRzgvVEpaZVphcnZNV2RqdXdmOTZ2dlF2M3ErOUMvZXI3MEw5NnZ2UXcyZVMzUzNxNUxkbDVMZElNdlY1Z0dYcTVMZExlcmt0MDFvdDBneTlYbk40Z1pEdnJpV2xhNUxkTGVya3QwdDZ1UzNTM3E1TGRMZXJrdDB0NnVYRVF6WEpicGIxZVlCbDZ1UzNUV2kzU0RMMWNsdWx2Vnk0aUdhNUxkTmZWRWRjUU1oNVJKcGIxY2x1bHZWeVc2VzlYSmJwYjFjbHVsdlZ5VzZYUFpMZExlcmt0MDFvdDBneTlYTGlJWnJrdHJrMDN1R29iVUZVTnFDcUcxQlV0aDRxNjR4Z3N2TXRWM21XcTd6TFQ4NFpmZFN4NjBrT3piRlVOcUNxRzFCVkRhZ3FUK3dSZTl6SFNTdFdCK21TeTh5MVhlWmFydk10VjNtV3E3ekxWZDVscXU4eTFYZVphcnZNdFYzbVdxN3pMVmQ1bHF1OHkxWGVaYXJ2TXRRaFBraDZWVllINlpMTHpMVmQ1bHF1OHkxWGVZa283d2pkQVNLRHNKRkIyRWlnN0NSUWFkUGJGaTVLWkxMekxWZDVscXU4NFVaZXJrdHNrc2lya3QwckgwSUs1TGRMZXFlUzFzMXlXNlc5WEpicGIxY2x1bHZWeVc2VzlYSmJwYjFUMGwwTDk2dnZRdmhRblhFRElkODRFTjk2Ris4VXZob0hXbnVVZFQzS09wN2xIVFlFNGErTzVSMVBjbzZudVVkVDNLREt6Ulhvay84YjZNL0ZVTnFDcUcxQlZEYWdxWURxTU5LTTF1c0NxRzFCVkRhZ3FodFFWUTJvS29iVUZVTnFDcUcxQlZEYWdxaHRRVlEyb0tvYlVGVU5xQ3FHMUJWRGFncWh0UVZRMm45RkdreXdCMkZEYWdxaHRRVlEyb0tvYlVGVU5ZNytTYi9iek1IUG1XRG56TEJ6NWxnNUVGU2hIa05xQ3FHMUJWRGFnckpiTktWNCtUMU9iVURoditBWU9JY3RmcGppRy80Qmc0aDByTUFPSWIvZ0dEaUcvNEJnNGh2K0FZT0liL2dHRGlHLzRCZzRoditBWU9JYi9pcFlkOWNRTWgzMll2RzZZNGh2K0FZT2NEaHYrQVlPSWJEZEMvZXIvV1pEdnJpQnY3enJpQmtPKzBRcGJwQmw2dVMzUzNxNUxkTGVya3QwdDZ1UzNTM3E1TmZsdlZ5VzZXOVg0NkYrOVgzb2pIZlhFRElkOWNRTWgzMXhBeUhmWEVESWQ5Y1FNaDMxeEF5SGZYRURJZDljUU1oMzF4QXlIZlhFRElkOWNRTWgzMXhBeUhmWEVESWQ5Y1FNaDMxeEF5SGZYRURJZDljUU1oMzF4QXlIZlhFRElkOWNRTWgzMXhBeUhmWEVESWQ5Y1FNaDMxeEF5SGZYRURJZDljUU1oMzF4QXlIZlhFRElkOWNRTWgzMWpBQS92L1pZUXgzd0FBQUFBQUFBQzVmSFpUakNraDQzT3hnQ0Y2NUZ1MmxEemdWM3dZbVR3dXZndTBBalpLamVPTFBPMGNXZWRvNHM4N1JvNUw2MlBUWnhFMU9SOGZVcXIvQXhYMXY1ZzBBUm5ybFpUMjlkQWgyd3d3MUhWM3pFcWIzT2ttWi9kSk16KzZTWm45MGt6UDdvek82TFZWYnFPdlU5OTZaMitCNFdPV1A3UHdqS1R2WEVSUGh1R29yWjg2c0c2d01yMFZDd1pDZzhSQVUzY1MvTDRWZFJlclBIalByRjBBV1kxajZCWE1HVERIVVNYTG9xSkVyWUZVMnlUUCtmeWo1TC9HU2NleThGREcvUjFCU25WQS8rN2RjUVE4MmF5WUxnQUFBUm5DMzFJUDdpdDlYaDBmYXFPdlBsUFlGZkNBbk5xNTJ1SVl6ZU1Vek5iZUEvS2RTamU5eEg0aUJSWm8wNlowbVlTWHBFbHdxOGw4ejZ4ZXJQSGpQcUo5RnZ5cSthVGQ4TlZudk5VUlBodUdvck9tOVBaaUNqNjJ1cnNET0EvS2RTamUrTWg4UkFBWFBoNFJSOW9jbHl4L2c0V2txMEdzRGZCc250SGZML1hNVVB0Z2dvd2VBWWQ3T251eGJNRm1OWStnVnpCc2Z6bUJOMWJINVI4bC9qSk9uU0JXa0l2TTBDZktyYWFUZk11bzUxaFZ1bDZaMWhWdWw2WjFoVnVsNloxaFZ1bDZaMWhWdWw2Y1hBNHJPRWYyaVFBRWZoQkRMZ0ZXSFhpQnVVRUFBWHFEbUdUdjBNSTJFSitVdnA3U0g1U3owUFRYakhlK0NFQkUxMnBFWGwyeHRrS0o5SFNhZG83cEFBQUJNQTc4bUpaczZ2M2IwNWpVNzVoTmM4NjhZN3owU2dxSU5aazVjRGMwclRkakRjc3dxd0FDU1BWd2dDcC96THRUNjFxVTZBQUFHQWxEZ0dMaTh4UmNEMEhBU1d3QUFEclBlb0ZnRUQ0VmhWSzQyTEVQNHZWYVdSQUZJVi9ha0RsN1NBZmpnQUFMZU84cWQ4d0VhVnFYYzRkbzhhREtYQ0E1ang0MGZzR1h3QXJYQUFBQ2xzUEs2LzJBcHhhcWxWVE1JZ25pdjhLUDFaTHZnYWJrUUFBRXd2ZVZPK1lDSDN3aFBBRmxsVEwzaVBJYTIxeEVWUUVmWGw2bjk1QURMUk52dDhmWS80TytOY2hwM0s4emJvYzBCUXNvV01NanVWNWtrNzFsTWR0cUlxeTVvYnEwUURZUDAzS2RHU2oreHJLRVdNTWp1VjVtM1E1b0NoWlFzWVpIY3J6SUlzZ2N5amFCS2dIT0JiendkOGk4bmFzcEpMeGVNQW9xMEFKN1NITTUrZGgxWUFyeWwzSGN3NDE3NEJpQ01EaVZ3akE0bGNJd09KWENNRGlWd2pBNGxjSXdPSXJuREJvOGxTQkdVKzJSQVJvTjhKb2FyOFViMWhBOW11NzJIYmE4cHpnVmF1bDdYK1U2b2dBQUFlZkZKdms0QkpsNDBkZUtHNVRDWlc5cjN1MDF4QnFkMmtLZjNJaWZwdG5HdXdzV2w1K2ZuNStmbjUrZm41K2VGeVB2UE5BRGNwQk5MMHhJY1E4OFZYSk16d2Q4aThuYzZnVXRWZ29HSE5BM05rNE1GcE5jWTJlZDRpeDh4czg3eEZqNWpaNTNpTEh6RThuMDVOajJLdktlbVlvclhXZzQwaHdSN1BLd1RzVUlzZk1iUE84UlkrWTJlZDRpeDh4czg3eEZLYmFvbzlKbDlnQUFBOUZUcE12czdWMkc2VEw3V2l3SFRnQzNsNXFnWnl4TjZjNk1EOEd5RkcwWjZPNFVkcmpBcDdwLzRsMTNtQ3g4MkZCRnJ4UDQzeVZ1S3J2NlJTNm9wOVZEMUV2akxSeFdTM3JEdWRmR3gwS2tvaUlpSWlJbFRuTjUrMEhQTC9YeHg0WndmdndJdnNrT1h5RUFkaHBpZ3Jla0hFaGxVMXc4QllIMDM4ZHRsNmpmcFRnYzQ1aE9Ia1h4VWZPV09MekI4bElkWWNGMVdmZXRvdDYzTWtURVhFeWNVUEVhQUkrd3VueUY4TzVHa3ZJQjVnNUxmSndLa3BLWlFEdlI0WXVJTlFGemZwZGwrWThKZEJtNjVOUXU1L0FoV1Z1a3J3UzVHcHZxMDVGaWpBdnVpRmZIOEduQWwvNzgwZFhvWFhwNTNXenVOL0JKb1Rhb3hGb251cjhCYjJBdVJPN3RTMVFWSGN4N3dkbHZWMHc0UXMxSmxOUUdRSE54WTJYaUlncEJRNHllWkJhaTh1a0VsSmFFbGluRWUvWmdXRndlTUY0dTF2VU9LbHBIbVdGTFVXQ09NeXl0Uk50anVvUkpDMmNnY1hQQ2RCdmE4TnFmTFRJVkpJaHp6Q0F4bmxZR0RML2xzTmV5OXYvS1lBQUEyOHdTMkFLMVlTTW1PRHdtTldubmV0eURMSWdkd3dJS09vd0wvMGJROW1IKzZuZXk0SnNVbU5ManhaOTNmOTlCVCtJdmF6eUd6Y0xQQkVuelhQaGs2emtSUVFPZ0h3S3QvVFphYnlCanF5dkttQmt6VTRodmpCMlZ2SkZHaHUrYm9wTE5nclNBWktuZUtOajJTZi9LSjFBY0w4YXQwbExNRkVFUEpjZ0IvUVZydWZ4dzdXYWZINHhzUTI0RVdwUzdrRTMzelluVXBNbXN5M1Rpb05CSEdsMi8vcHQ3amFjbVdGS2FKNFBJS2hoS2J4RkhwRVRXVXhvSGYzR3VseW1GM005UGxFT2ZvcVdFV1laRkxERGFjSjlQRERsVlNXQlNqQ00rVUJsT2xyYzJnb1R4ZEhMZlhzeTZZcFNtVkVaVnVJTERxVytWNVJLYXRqU0VMT1JIWDZ4WlBTVHBwajRrZy9UUFY0VDQ0aE4vZDRQZmFUeFl6ZXZtUWRBcjZvY1NlcjJ5REpMdVdDSWREQjZGUVh4aHNWSnNucVBocWhSeG44RGZIVkdrVXNLN05yRkVYTzd6M0FjYyt0MG03NE1FcGZIVFgvWDYrUCtndkV6Q2dKL3VvQkovazRvRllvZ3BhTWFnRWlZSFF3MmpUckQ0L0cyblRkVkFMNTV3SEJKNU8wcWo1dzNsWWtUdXNuU25jMWptaC9zck9SWXpqYUtFVTg5KzRGelhWYUdNV3dRM3ZTSjRHR3U0VnNGNXRIWFJBWDlpNGthNDRINlR3VytQbUVHSXN1VE1GQ3RIT2VtdndzejZ5NElqdVVkWnJHdEdXZ3JmQlNsRXZ5b3ZFTEtTS3dwVEovZ0lRZmdZWTBvMy94QytNVS9ITGdLNGNUQ2szam80a2NTamQ2TjludlFXNTgyQzJmWEVIRk1BblI2R2MwUEgxWncvYXIrd1dtRHNoVE5FbWlKeW1XSVAvL0xtV2RUZXRQcDRranpHVHlyRjZhUlJmeXZ2TmRpRGVRUW5qU2FGSFpxMGpsQ1g3MGV6NTRiY0ZrWTRBN3o3dUUzeVR5eHRQN3g2WjVBamc4WmZIdllLdk5sZ1pvUlFTWE5oRUdPeE95ZE53aG9QbDNVMG9mVnZ4OUcrbnppeDgrQnBpTk55SHVwWUFjaEhmYStUdXFubmhneXBLMWtodGo4elNhUkxCcC9FK08wd2Y5di8vTDEvYW9SZStuVWYrK2xRWGNua252WC92dGpmU1d3dmVWVzl4NEx5cnRTZFlZUXFTUHcvbEVFL1BJcXllTUhiTWV6dDFjQXIzK2RRdjJiWEljTFhqak9uWWtOaUMrWFNFM2p3d3VxRjk3VXF1amNZV2dsUmZpNmYrOERCaTNmYzhoVlM5M2VyY2xsN2liVFJjclFWbU55UWc0QlVCa3NvQk1xT1ZRTy9Ed05rSHBCckJ6NTlieUo1VkllbndwbCtsNWZkSVVjSDFEYjJFUWgxdU9obTR5Z3I3WUUybS9ZY1FRbGdCRjVSTTdZYzBKZHNYVSszTnUvQVFTZ3d3K1Faa1ZWN2IwSERjVEMydWlhQ0p0bytrVC9UTlZiR0NWOWI2VkpVWVhpOSsrYlNzcGR6K3U0WE9zcEZtM0QwLzVTSjlCbFNrVVVISkdMSTFpc1ZxNVRhNTVZNXhTNllhVHpRSExxWk0rczR1KzJQVXVKUzB3R1IzaWx6dndkeUVNeDEzTE5NWGJkMjFKOWFyOUpobkljZlFYdFJwMXltTzVLV0oxQUViU3JEd0g4VitZdmVzKy91OHo1NGR2WVJDSE1DblBTc3lDQnZDQzd0cS9hMi84QU5pSzlCZEVVaTdQNWZtVElLREdmMnMwVlg3eDNHS1ZxU21MS1MzMS9zZnNzcjhuQU1mWVdQa3lUdkVlVW5hTmxML2hMM2tIWXE2STdEbXN0Y3l4RUVFUWtuR2ptU0U3VzFoOWF6MVo2TUZxd2ZtelM2Szhlcmo4WjBUZjlkOHJMSElKY1Y4TnZjOEpQejdabXFrTis4ZEgyQS9XZGZnd3diVU1rZ1lOR2U4ZHp4UEV1NUs3TzNQdEwzN2kzekFPUkkyN0Y2QTU4cmpmVDVMbDFDbGtoekIwbmNtYzk5VUpzMkpESnl3RGNqK0E4bVJtUFZleXgycHZheWRrWjUrY0tlYnhCRGltR0h0dTJtWG51OXRWUUpyUy9GY1BsVXdobzh3K1JQLzRoVk5TMm5XMzNvSFk4bjd6N1NqR3J1RlJVVFdWQU9qSFJyOFdaYVl6UXJPVTFUOEZxMEVJYVA0bjZWT2JRcW1OckhVUC95a3BMOTdrRHhvZmw2ZW15Nld4YVZyLzBFU3hpK3Z4alV4em9hSjhjUGpaZFQzTEFVTzV2YXRtazlWQmQ4ZWF0TkFncUU3NitWL0hieHZHRStuR1QxNzlidzMwRVd1TTJFZnFrZFd4dERla1JidlNnYWFzdXJhcHJLN2dtSEZPQnNGcG40NG15OXBhZ0hTR0M2cFo0OWE0czlYd05zMWV6aDlwNTRrLzBGdldqNEd3cnlXRjNFZnJsdVU4VEJvWTlUZlZNU2kwWGJBUVoxK2NqOTlXZjYzMTFUaS8yOFl4OStJSTd1SjFTVUhXVURWZUxlamRIemJ0Rkx1eWtYc1NpZHJlbUordlhOTVNmOERpR0dYRzlMRnBiNDhuY3pBdFlOU2k5UWQ5YTFQMmZadFg3dW83YjJnaVZwUTdvVmhXYVhkeVJPNzhzeE5zdUV1aE1Jek5yM2orYnJlZXVtVHA5QVQwWVF5L1JzK0JYaTJjekVWdVdKaUtrVzRZd0Y5YUxEYVR1V21lME5aN0s5SjVqaGtBQXFmTk5MbkdIT2tmSTlHUjFlT3VPK3Zhd3dMc1NZYUdiR3pvcFRsdDRRbjFGdjlkQk5uWm1rTkg3OFc4S2NXdEZoSGJFWVhvd0FBYWR3STFnQzgrQmFtK2k3VUd5WjMrYzczbS9ValFrZWFDVTFTckV4VjM1TzAvRWZqQUkyZEJQSWZtVlY5dUEvZzV4VEt3WGxkVTdRYlZnbFhWTjcwNktETnpkYnJuaElnRHlCUmRHWUFoS3Uzc2E4VWdTVDlJSk1GZndRb3NFS2xsTXZzVmxHNGVOY2JVOThpVEw0L2NLajlpZzRoYmk2aWs3UXd6elNmNk8xR2JrZFVTRzc0UHJ4eWpnV1VKTVUyYUw1cG5sWGN1ZnlQRGZtOE5JaUVWVnZtYmV3cmFDek9aYnhYb3NmUlNGbm5WSnB2Q0EyeXAyZDFuQmVpSE5mNVg3cnU1ZVkrVTN0Tit1Tmd5R3pEREZiYmJtbWdqS3VxV1A5UmpmYytzYWY2dTc1ZTBPYUd1UWxlMk1SK00xNU56U1Ezcys3bCtFYjl2cGdVb0l1Q3h4NVI3emxPSlRGYzhhTGZXNGR0QTFSNnorUElETG1vZkdUV1pQSnhWV0FDY0pNSnhZRC9ud3pSM0JTZjdNOWFvaFQ5S3RwK2tsTmF1aEJpY0c0dXZXckYvd0dYZmRscThQbGF6Q1BMMnQrdkVWTDk3UWwyRUx6ZjRzUzlHczZwNkNacmU3MXdaT3J2VmJ2YjBvYWlTN0hwZy9jdmpjZkxqNHMvbmtiU3E2M05Ib1NuY0dsMkE1MEc0bFdUL3hJMDFKbGRVVFp2Ym9rdXdsM3Bjc04rVEJ6SUlZNHEzY0FPakFQNXJlengwVjlkdWYrRGpOS25kTEIyT2ZMWVpyNDROV3ZoWHJLL3NnaWlUYVVKTHRKcE9VYzdRbkhhT3hlK2p0S1d3djVuOUl1azNnWGdBaS9QMkcxZGVHYTlBUEFrKzJyL0lQYThOUEErOW54b1JxNzNiNUZWbTZYbm9lZHVBN2pmSUN2aE53UGdneklVck9EMmNNZXJUR0lxYkZKbXVNMWdaeXlMWE1tK1Jjc2xwczFGS2NiL1Y0czNVNXQ3ZWM5SUtKR2hKWnhFT1lPUmg4RHlLRXN1clZhSVNYUXZPZllUVWE0TlgycDRSYitkeG9BYU1XNmJJT0lRck1kcnpPa2JXbWIwbUxQR3BaT1RYbGc0czBCaDdQc3VNRUh0SEFFRk1pTk8zKys3Y29BKzg5K1lBTlZ5MmtGQ0hjQk9BWWd3bllXSmFGVC9yVmppK1ljZlZoaDIxdzR6S3QxTFQvSnU5QmxPM0hnQ0k0Zk54SmZYQ3EzQWg3bThuMTcraGV3Ungybm5NSXRzc0xCRm81bUxReTFrZ2gzblNENjExMXhJdGJrOWUrNmNFbGQ1K1VjcFFGS2p2S2x2TGM1MUFtRjJTK2daczNTY2daNlNKaHBodUcrV0V1UmRNeUNOQ1duU1ZmenN6Q0tYbGwrMzJXTnlEOVhhVUljTXhjSVR2MnJCUFlrajRvSzlaaU5vazdRQ1FzcjlVOEV0OGUwcEJCaWdwbGVaTTdIcVpyM3o5VWgzSzQ4TmpzNDRYQ3ZUUDY2YTRuZmhzZ1d2aTFJTFVwRE5MUlF5S053d3RaL1haOUhINDh6UWVpS2tjWHFvOWNqZHc4cEVpV1hHazh0WlpBSDVMdlB6ZmlWS2J5SDJ0SUNQT0Q0ekRRRUdyRThwZUJzK081bFg1RXAycUlIVmJOWDlmdkY4ZGx1QlNpUHl1VGVQM3hBNkR3eWs3MGIrRTdTWm51UGxCSEordDcyOWZacVlQVlFSeGhIeitMTFdaY2xCZW05eHJxUllPazVwT3QrdFkyMVl5M1VjTTVnL0dHczB2NENDcGQwQ2RZUmFZSzl6dzBKVVM5UFZnNDZlOEx3cXlQdmpHR2tiMUJHckxlYlZOU0E2ZE1xREZXWWloWE5uZVJkcFVFVmZVcEc5Ums4SUIzUE5RbEwxb0VmMExOdFkvSWZ3ODZQUW1Nd3dtVUF6Z1RpaFVXcWZIUGJxd3d3dEZUZk1XRjZabGsrRmJuSjRROUh0dXF0SWVmRWVzemZ3QU8wZlcwSzJ3RGh6a1FsWXNZMEZFUS94MFFPVTdpS0I2K1lCa1FHeXlRdUxKcm5FZXJreFBXRGxXbWZpUVZyRkdZbkpCdDczWTFGUElwWlFWZExQVklFZEF1YjZybDV4NTdkRjB5Ui95QXBUQi81MjlyckRzbHNoNnlDcDk5N2pRaFFmV2Q3Vis1bFhmODFEa3VSWkIvZy94M1FORzlhSGZtRjhVR3M3Y09tVTVBTitocHA0M1puNjhqazBuMkNWdm5lNkRTZ3NUdmY4ajNJZ2k0TWdNU3VUakVUbkdJV3V6QmQ4cVFxM1hJSFBIelg1MEZMbmdEdEtweGcyNzA5Y011UVQ2a2ZEUHA5M0NqYTdsTGRYdVN1Ukh0TXRpZ3hvcWw5TTVKNlBMcjhFaWU0end3bEZPaGgxcS9XSW5sWG11MVJBRDl3ejFHUmVGQ2xqSE1OdVcxZ1RGMjFlYU1tVXhZemNsTHBvVnpYamtwdmlBMjllK1dzaFdXL2Mzc2FheW1wckIvWkw0a0Jjd21hYjhrdDNoZ0sxTTFtQUFBTE0wRDlRQjlralU0UjZSd3VIUUY4TkEySmQ5T1RHVGRieW41bGUxUVg4RzZWTnN4S2tpaHE1MW9UZU83Z0FEQ1BMVVFHOXAzaXBDcFdEZjhKT0RJbjVtdVpjMHVwV0tPY2hLZkd0Z2E5N2pHWm9DTWdIZ085dHpnQUFBTHlPanA2d3FvYldBMXZSU0thN3JsVDNSRmlvTkFhL2crdys0dDloYUZmWU8wTXFLWnovQ3hNTmkzNzBFM1p1QVdUeGIrdnQ1cVgyQkd5dmZJTmozYU42b1RFS0ZGQUxhMkFBQUFBQUE0dVFTMkFGZ05FUWRObjFrQUFBQUFab0lJMWdEOHhvalIzaHF0WlJiQWppbTMvOGRvM2JVNWRUdUZhanhQMHphSURYMVZ6ZExET3hNWDdkVlFWK0hZSnRYNXd0OVZBeWFaa21DcjJROXJKNVg3SHZjcjlhRnFYbjZ1cnd6Y1pRSWRMZmtPN3c3amJpc1VuK2xoZ216TEdtM1BjNGJ5WHB6Tm5mNy9nb2Q0cURRSUFBQUE0dVFTMkFBQUFBQUFGLzZDQTRBQUFBQUFCWDBReDUvd0ZSZ2Z3Y1Q3QVF2YjQrVTRsNzdMNmR1bHE2LzFkYWRzUUZySXE4SXg3RHRhZW1pMW5OelowWWgwVzJYakNhaDRPYm16b3lRUktkbjZiaFVlMzl6eWY4bUFQVzYreTJSYmdac1d2QTNPcVhHNmJhZ2IxQVZFK1JWVGxldUgxUzdnQ0c2QXAvM1BDYXpuTm16VlpEb2NRNkxiTHhoTlE4SE56WjBZaDBSVTk2UFlrUldpUmJYcGgvZ1ZJb2V3NUE0azkzV3J6WFpXeDRJNGhRQlRTYU5Zb1g4S2NsUUE2dlhnVVJBUHV3dW9xMEI0Wm1NTElEZWRHcTJSY1FvRS9ROWlOWWxGcXB3SWNVVlRyanozc3R5R3lqUWVDM1FQMTZ4TURkY0lHNjRRTjF3Z2JyaEEzVnMxNHJ1NTNBNE1rY1pxUlNaL2wzWmVDRjQxY28zWlhjSFVvcGt3Ulp3ekEvc1F4a0xhL01va1NxMHpXcXN6Yk1WTFY5cjRjcEFjZjQyTituYi8vZGtLRTBML1V3bnlnMm90U1cxQ2E1RnU1bEJEVUpnWXc3aVYwZmxqbGRINVk1WFIrV09WMGZsamxkSDVZNVhSK1dPVjBmbGpsZEg1WTVYUitXT1YwZmxqbGRINVk1WFIrV09WMGZsamxkSDVZNVhSK1dPVjBmbGpsZEg1WTVYUitXT1YwZmxqbGRINVk1WFIrV09WMGZsamxkSDVZNVhSL3A3MGFlZFdvbmI1b0JUZDIvM0syckE3YldlTmRINlZ2L2ZpUFRNcHZ5RkIyV2F4Y1hmU2lrWU1zcUlkUkJENlJ1MGJhUi9xcElEZUNNTjJlTmJQVm9OUTFpUFEwS0NEWUtrWXVJT3lHcXhJWFpwcXRBZ3BFTEZJMTExUDh5RjJhYXJRSUtSQ3hTTmRkVC9NaGRtUU41aXdDTkR0bDU1YU9TbDhiK3FFeGlIYy9hbUN1bzRSdGlROHphbmdxWFAzcm5aNXZJSW5hUWNiZnB0S2lxSFA1NnZlOHNPaG1WTFI2YUtRMXJrRFhqS3FLRks1dnc4U1RFSTV3dXNmbDJpemtxTndrUUI1QXJLaXNwdFZ3M1c2NTVVQ29yQ0JEY29xZHRJeFAvVzhIWllWZFc0VEw0YU45em9oSi9UbVJvSWRtdE9qTnprczlON2RPMnQ0NzJSK2J2Ri9lY0ZZUEtCd2hCMmhjQ3NxS3ltMVhEZGJybmhJYkEwbThLOHQzTmkwb1pWbDF6dDlod0xwTUYxY1BZT09FQUFBYk1aTjNZR0FBQUVzdkFPQUEwS09RUWUvbEtJQUFNZ0xrSHloRnZIc2I5aXh3VEVxMTZ3ZkVSdjRQM0s0anUvOE1OVUovMm9UL3RRbnUyYkxQcEY5KzY4dERtaGo4VGIzNVdOQk94UHp3SzdaVTJUL1VKLzJvVC90UW4vYWZMVjBsOUJXKzRzSk1SRFEvRGpQMWplNGlidXRBTHA5dktOV1duY2trNzZUaHRYNnBaTHU2Y1ZKY2FyaXZ6TVRZZzc1MnpZNjlZenl6WUY0TjJwTXEvYkR1U2tpR0pROVZpT1lSVjNSZ3c4TUhvL0cwQWxZbVl2K2w3VEJSWDNUMWZOdmQzeWgvbm1wd2hqRHU0SjllSHJ3OWVIcnc5ZUhydzllSHJ3OWVIcnc5ZUhydzllSHJ3OWVIcnc5ZUhydzllSHJ3OWVIcnc5ZUdnUmJrMSttazJDY1dpWXYvOGlwT2hYZUdrbWdCNENKNGRjODZkSVRzeHZoc1o5R3FaSUtmNjNnZUlBOVJZMUI5RUp3Ri8rRkQ0RjA4b3JqU0hTblpETGU4VjZsMEJiUTNwQkY2Q01OVkJXbTF1SUhiWXl4SStxdksyd1FSd0FiZmJzejVUdENCMlNnbGRHdlhPN2d0N0Z2WXQ3RnZYS2lTckdIcmh3NVVoYjlua0pSRGZKY21ZZnZnVUtYdWxaRWxjcHlwc3pPYndrZk5jcjJMZXhiMkxROFhRRWNEVDlvSEpBUzhRRXZrS3l3QVNGeWExZkVtNEFBQUFBQUFBQUtwZXlTWmZnTkNNYUVZMElVSlJKbDlnQ0FBd2NFY0VBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFcIixcbiAgICAgIFwic2l6ZVwiOiBbXG4gICAgICAgIDIwNDgsXG4gICAgICAgIDM4NFxuICAgICAgXSxcbiAgICAgIFwiYmFja2dyb3VuZFwiOiBcIiNFNUU2RThcIixcbiAgICAgIFwib3BzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInJlY3RcIixcbiAgICAgICAgICBcInhcIjogMCxcbiAgICAgICAgICBcInlcIjogMC4wMyxcbiAgICAgICAgICBcIndcIjogMSxcbiAgICAgICAgICBcImhcIjogMC4yODQsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiIzM1QTI0QlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJyZWN0XCIsXG4gICAgICAgICAgXCJ4XCI6IDAsXG4gICAgICAgICAgXCJ5XCI6IDAuODE0LFxuICAgICAgICAgIFwid1wiOiAxLFxuICAgICAgICAgIFwiaFwiOiAwLjExOCxcbiAgICAgICAgICBcImZpbGxcIjogXCIjMjE5MUM1XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInJlY3RcIixcbiAgICAgICAgICBcInhcIjogMC4zMixcbiAgICAgICAgICBcInlcIjogMC40MDIsXG4gICAgICAgICAgXCJ3XCI6IDAuMDcyLFxuICAgICAgICAgIFwiaFwiOiAwLjExNSxcbiAgICAgICAgICBcImZpbGxcIjogXCIjMzVBMjRCXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInJlY3RcIixcbiAgICAgICAgICBcInhcIjogMC4zMixcbiAgICAgICAgICBcInlcIjogMC41NCxcbiAgICAgICAgICBcIndcIjogMC4wNzIsXG4gICAgICAgICAgXCJoXCI6IDAuMTE1LFxuICAgICAgICAgIFwiZmlsbFwiOiBcIiMxQTkwQzhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkZhbWlseU1hcnRcIixcbiAgICAgICAgICBcIngwXCI6IDAuNDA0LFxuICAgICAgICAgIFwieDFcIjogMC42NjQsXG4gICAgICAgICAgXCJjeVwiOiAwLjU0NSxcbiAgICAgICAgICBcInNpemVcIjogMC4yNCxcbiAgICAgICAgICBcImZpbGxcIjogXCIjMjE5MUM1XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwid2FsbFwiOiB7XG4gICAgICAgIFwibWVzaGVzXCI6IFtcbiAgICAgICAgICBcImJ1aWxkaW5nLXNoZWxsXCIsXG4gICAgICAgICAgXCJwYXJhcGV0XCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJ0aWxlXCI6IDIuNSxcbiAgICAgICAgXCJzaXplXCI6IDUxMixcbiAgICAgICAgXCJzZWVkXCI6IDIwMjYwODI4LFxuICAgICAgICBcImJhc2VcIjogMjQ4LFxuICAgICAgICBcInBhdGNoZXNcIjogNTUsXG4gICAgICAgIFwicGF0Y2hBbXBcIjogMjIsXG4gICAgICAgIFwic3RyZWFrc1wiOiAyNjAsXG4gICAgICAgIFwic3RyZWFrQW1wXCI6IDUyLFxuICAgICAgICBcInNwZWNrc1wiOiAzMjAwLFxuICAgICAgICBcInNwZWNrQW1wXCI6IDM2XG4gICAgICB9XG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgcjogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG4vKiogQSBib3ggbGlzdCBpcyB0aGUgbWVyZ2UgbGV2ZXIgZm9yIGV2ZXJ5dGhpbmcgaW4gb25lIG1hdGVyaWFsLiBBbiBlbnRyeSBpc1xuICogIFtjeCwgY3ksIGN6LCB3LCBoLCBkXSB3aXRoIGFuIG9wdGlvbmFsIHNldmVudGggbnVtYmVyLCBhIHJvdGF0aW9uIGFib3V0IFggaW4gcmFkaWFucyBhcHBsaWVkXG4gKiAgYmVmb3JlIHRoZSB0cmFuc2xhdGUgKGEgc2xvcGVkIGtleXBhZCBzaGVsZiksIG9yIGB7IGN5bDogW2N4LCBjeSwgY3osIHIsIGgsIHNlZz8sIHJvdFg/LCByb3RaP10gfWBcbiAqICBmb3IgYSByb3VuZCBwYXJ0IGluIHRoZSBzYW1lIHN1Ym1pc3Npb24gKGEgZG9vciBwdWxsIGJhcikuICovXG5mdW5jdGlvbiBib3hlcyhsaXN0OiAobnVtYmVyW10gfCB7IGN5bDogbnVtYmVyW10gfSlbXSkge1xuICByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgICBjb25zdCBjID0gYi5jeWw7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoY1szXSwgY1szXSwgY1s0XSwgY1s1XSA/PyAxMik7XG4gICAgICBpZiAoY1s2XSkgZy5yb3RhdGVYKGNbNl0pO1xuICAgICAgaWYgKGNbN10pIGcucm90YXRlWihjWzddKTtcbiAgICAgIGcudHJhbnNsYXRlKGNbMF0sIGNbMV0sIGNbMl0pO1xuICAgICAgcmV0dXJuIGc7XG4gICAgfVxuICAgIGlmIChiWzZdKSB7IGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYlszXSwgYls0XSwgYls1XSk7IGcucm90YXRlWChiWzZdKTsgZy50cmFuc2xhdGUoYlswXSwgYlsxXSwgYlsyXSk7IHJldHVybiBnOyB9XG4gICAgcmV0dXJuIGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pO1xuICB9KSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8gLS0gd2hpY2ggaXNcbiAqIHdoYXQgcmVuZGVycyBhIGJ1aWxkaW5nIG1pZC1ncmV5LlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgbWV0YWxzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGEgaGVtaXNwaGVyZVxuICogbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG8gcmVmbGVjdFxuICogcmVuZGVycyBibGFjay4gVGhlIGFsYmVkbyBzdGF5cyBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqXG4gKiBUaGUgb25lIHByaW50ZWQgZ3JhcGhpYywgdGhlIGJyYW5kIGZhc2NpYSwgaXMgYSBjYW52YXMgYXNzaWduZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLlxuICogVGhlIHRleHR1cmVsZXNzIGRlY2xhcmF0aW9uIGRvZXMgbm90IGFmZmVjdCB0aGF0LCBhbmQgaXQgaXMgdGhlIGRvY3VtZW50ZWQgcm91dGUuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGYW1pbHlNYXJ0U3RvcmVCdWlsZGluZ01vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnRmFtaWx5TWFydCBTdG9yZSBCdWlsZGluZyc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cbiAgLyogU2hlbGw6IFNPTElEIGJveCwgbm90IGEgcmluZy4gVGhlIHByb3AgaXMgYW4gZXh0ZXJpb3Igc2hlbGwgb25seSBldmVyIHNlZW4gZnJvbSBvdXRzaWRlLCBzb1xuICAgKiBhbiBpbnRlcmlvciBjb3N0cyBkcmF3IGNhbGxzLCBnZW9tZXRyaWVzIGFuZCBWUkFNIGZvciBzb21ldGhpbmcgbm9ib2R5IHNlZXMgLS0gYW5kIHNvbGlkXG4gICAqIG1lYW5zIHRoZSBzaG9wZnJvbnQgbmVlZHMgbm8gb3BlbmluZyBjdXQgaW4gaXQsIHdoaWNoIHJlbW92ZXMgYWxsIGZvdXIgcmV2ZWFsIGZhY2VzIGFuZCB0aGVcbiAgICogei1maWdodGluZyB0aGV5IGNhdXNlLiBTZXQgMC4wNiBtIElOU0lERSB0aGUgcGFyYXBldCByaW5nIG9uIGV2ZXJ5IGVsZXZhdGlvbiBzbyBubyB3YWxsIGZhY2VcbiAgICogaXMgZXZlciBjb3BsYW5hciBhbmQgY28tZmFjaW5nIHdpdGggYSBwYXJhcGV0IGZhY2UuICovXG4gIC8vIEhvdyBmYXIgZm9yd2FyZCB0aGUgc2hlbGwgZmFjZSBzaXRzLiBUaGUgREVGQVVMVCAyLjUwIGxlYXZlcyAxLjAwIG0gZm9yIGFuIGVudHJhbmNlIGNhbm9weSB0b1xuICAvLyBjYW50aWxldmVyIGludG8sIHNvIHRoZSBjYW5vcHkgbm9zZSBsYW5kcyBleGFjdGx5IG9uIHRoZSBkZWNsYXJlZCA3LjAgbSBkZXB0aC4gQSBidWlsZGluZyB3aXRoXG4gIC8vIE5PIGZvcndhcmQgY2FudGlsZXZlciBtdXN0IHB1c2ggdGhpcyBvdXQgaW5zdGVhZCwgb3IgdGhlIHByb3AgaXMgYnVpbHQgc2hvcnQgb2YgaXRzIGRlY2xhcmVkXG4gIC8vIGVudmVsb3BlIC0tIE1LIGZpcnN0IGNhbWUgb3V0IDYuMyBtIGRlZXAgYWdhaW5zdCBhIGRlY2xhcmVkIDcuMCBmb3IgZXhhY3RseSB0aGF0IHJlYXNvbi5cbiAgY29uc3QgU0YgPSAoRy5zaGVsbEZyb250ID8/IDIuNTApIGFzIG51bWJlcjtcbiAgYWRkKCdidWlsZGluZy1zaGVsbCcsICdCdWlsZGluZyBzaGVsbCcsIGJveEF0KDAsIDEuNzc1LCAoU0YgLSAzLjQ0KSAvIDIsIDcuODgsIDMuNTUsIFNGICsgMy40NCksICd3YWxsJyk7XG4gIGNvbGxpZGVyc1snYnVpbGRpbmctc2hlbGwnXSA9IHtcbiAgICBzaGFwZTogJ2JveCcsIGxvY2FsQ2VudGVyOiBbMCwgMi4zLCAwXSwgaGFsZkV4dGVudHM6IFs0LjAsIDIuMywgMy41XSxcbiAgICBub3RlczogJ0Fzc2V0IGRlY2xhcmVzIGNvbGxpZGVyIFwiYm94XCIuIE9uZSBjb252ZXggcHJveHkgb3ZlciB0aGUgd2hvbGUgZW52ZWxvcGUuJyxcbiAgfTtcblxuICAvKiBSb29mIGRlY2sgc3BhbnMgeSAzLjUwLi4zLjYyIHNvIGl0cyB1bmRlcnNpZGUgaXMgc3VuayBJTlRPIHRoZSBzaGVsbCByYXRoZXIgdGhhbiByZXN0aW5nIG9uXG4gICAqIGl0LiBBdXRob3JlZCBmbHVzaCwgdGhlIGRlY2sncyBib3R0b20gZmFjZSBhbmQgdGhlIHBhcmFwZXQgcmluZydzIGJvdHRvbSBmYWNlIHdlcmUgYm90aCBhdFxuICAgKiB5PTMuNTUwIGFuZCBib3RoIGZhY2luZyBkb3duIC0tIDQ2IG0yIG9mIGNvcGxhbmFyIGNvLWZhY2luZyBzdXJmYWNlLiAqL1xuICBhZGQoJ3Jvb2YtZGVjaycsICdSb29mIGRlY2snLCBib3hBdCgwLCAzLjU2LCAoU0YgLSAwLjAyIC0gMy40MikgLyAyLCA3LjgsIDAuMTIsIFNGICsgMy40MCksICdkZWNrJyk7XG5cbiAgLyogUGFyYXBldDogZnJvbnQgZmFzY2lhIHdhbGwgcGx1cyB0aHJlZSB1cHN0YW5kcywgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudCBhbmQgb25lIGRyYXcgY2FsbC5cbiAgICogVGhlIGZyb250IGlzIHRhbGxlciB0aGFuIHRoZSBzaWRlcywgd2hpY2ggYSBwbGFuIGV4dHJ1c2lvbiBjYW5ub3QgZXhwcmVzcy4gT3V0ZXIgZmFjZXMgc3RhbmRcbiAgICogMC4wNiBtIHByb3VkIG9mIHRoZSB3YWxscyAtLSBhIGNvcGluZyBkcmlwIGVkZ2UsIGFuZCB3aGF0IGtlZXBzIHRoZW0gb2ZmIHRoZSB3YWxsIHBsYW5lcy4gKi9cbiAgY29uc3QgUFMgPSAoRy5wYXJhcGV0U2lkZXMgPz8geyBjeTogMy43NSwgaDogMC40LCB0aGljazogMC4yNCB9KSBhcyBhbnk7XG4gIC8vIFBhcmFwZXQgcGxhbiBzaXplLiBJdCBkZWZhdWx0cyB0byB0aGUgZnVsbCA4LjAwIG0gZW52ZWxvcGUgd2lkdGgsIGJ1dCBhIGJ1aWxkaW5nIHdob3NlIEZBU0NJQVxuICAvLyB0dXJucyB0aGUgY29ybmVyIGhhcyB0byBwdWxsIHRoZSByaW5nIGluOiB0aGUgcmV0dXJuIGJvYXJkIGlzIHRoZSBvdXRlcm1vc3QgdGhpbmcgb24gdGhhdFxuICAvLyBlbGV2YXRpb24sIGFuZCBhIHBhcmFwZXQgYXQgdGhlIHNhbWUgKy00LjAwIGJvdGggaGlkZXMgaXQgYW5kIHB1dHMgdHdvIGNvLWZhY2luZyBwbGFuZXMgYXQgdGhlXG4gIC8vIHNhbWUgeC4gYHBhcmFwZXRXYCBhbmQgYFBTLmN4YCBhcmUgaG93IGEgY29uZmlnIGJ1eXMgdGhhdCBjbGVhcmFuY2Ugd2l0aG91dCBldmVyeSBzaWJsaW5nXG4gIC8vIG1vdmluZy5cbiAgY29uc3QgUFcgPSAoRy5wYXJhcGV0VyA/PyA4LjApIGFzIG51bWJlcjtcbiAgY29uc3QgUENYID0gKFBTLmN4ID8/IDMuODgpIGFzIG51bWJlcjtcbiAgYWRkKCdwYXJhcGV0JywgJ1BhcmFwZXQgcmluZyBhbmQgZmFzY2lhIHdhbGwnLCBib3hlcyhbXG4gICAgWzAsIEcuZmFzY2lhV2FsbC5jeSwgRy5mYXNjaWFXYWxsLmN6LCBQVywgRy5mYXNjaWFXYWxsLmgsIEcuZmFzY2lhV2FsbC5kXSxcbiAgICAvLyBTaWRlIGFuZCByZWFyIHVwc3RhbmRzLiBgcGFyYXBldFNpZGVzYCBvdmVycmlkZXMgdGhlIGRlZmF1bHQgMC40MCBtIHVwc3RhbmQgZm9yIGEgcGxhdGUgd2hvc2VcbiAgICAvLyBwYXJhcGV0IGlzIGEgZnVsbC1oZWlnaHQgcmluZyByYXRoZXIgdGhhbiBhIGxvdyBrZXJiOyB0aGUgZnJvbnQgaXMgYWx3YXlzIHRoZSB0YWxsZXIgZmFjZSBhbmRcbiAgICAvLyBjb21lcyBpbiB0aHJvdWdoIGBmYXNjaWFXYWxsYCwgd2hpY2ggYSBwbGFuIGV4dHJ1c2lvbiBjb3VsZCBub3QgZXhwcmVzcy5cbiAgICBbLVBDWCwgUFMuY3ksIChTRiAtIDAuMzAgLSAzLjUpIC8gMiwgUFMudGhpY2ssIFBTLmgsIFNGICsgMy4yMF0sXG4gICAgW1BDWCwgUFMuY3ksIChTRiAtIDAuMzAgLSAzLjUpIC8gMiwgUFMudGhpY2ssIFBTLmgsIFNGICsgMy4yMF0sXG4gICAgWzAsIFBTLmN5LCAtMy4zOCwgUFcsIFBTLmgsIDAuMjRdLFxuICAgIC8vIEFueXRoaW5nIGVsc2UgaW4gdGhlIFNBTUUgbWF0ZXJpYWwgZm9sZHMgaW4gaGVyZSByYXRoZXIgdGhhbiBjb3N0aW5nIGl0cyBvd24gZHJhdyBjYWxsIC0tXG4gICAgLy8gZnVsbC1oZWlnaHQgZmFjYWRlIGNsYWRkaW5nLCBjb3JuZXIgcGlsYXN0ZXJzLCBhIHBsaW50aC4gVGhpcyBpcyB0aGUgbWVyZ2UgbGV2ZXI6IHR3b1xuICAgIC8vIHBhcnRzIHRoYXQgc2hhcmUgYSBtYXRlcmlhbCBzaG91bGQgbmV2ZXIgYmUgdHdvIHN1Ym1pc3Npb25zLlxuICAgIC4uLigoRy5wYXJhcGV0RXh0cmEgPz8gW10pIGFzIG51bWJlcltdW10pLFxuICBdKSwgRy5mYXNjaWFXYWxsTWF0ZXJpYWwpO1xuXG4gIC8qIEJyYW5kIGZhc2NpYSBwYW5lbC4gU3VuayBJTlRPIHRoZSBmYXNjaWEgd2FsbCBhdCB0aGUgYmFjayBhbmQgc3RhbmRpbmcgcHJvdWQgYXQgdGhlIGZyb250LCBzb1xuICAgKiBpdCBvdmVybGFwcyBpdHMgc3Vycm91bmQgaW5zdGVhZCBvZiBtZWV0aW5nIGl0LiBVVnMgYXJlIEFVVEhPUkVEOiB0aGUgK1ogZmFjZSBzYW1wbGVzIHRoZVxuICAgKiB3b3JkbWFyayBiYW5kIG9mIHRoZSBjYW52YXMgYW5kIHRoZSBvdGhlciBmaXZlIGZhY2VzIHNhbXBsZSBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZVxuICAgKiBjYW52YXMsIHdoaWNoIGtlZXBzIHRoZSBicmFuZCBncmFwaGljIGF0IE9ORSBtYXRlcmlhbCBhbmQgT05FIGRyYXcgY2FsbC4gKi9cbiAge1xuICAgIGNvbnN0IGYgPSBHLmZhc2NpYTtcbiAgICBsZXQgZzogVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gICAgaWYgKGYuc2hhcGUgPT09ICdkaXNjJykge1xuICAgICAgLy8gQSByb3VuZCBzaWduIGRpc2MsIGJ1aWx0IGFzIGEgQ2lyY2xlR2VvbWV0cnkgZmFjZSBwbHVzIGEgc2hhbGxvdyBjeWxpbmRlciBib2R5LlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBvYnZpb3VzIGNvbnN0cnVjdGlvbiAtLSBvbmUgY3lsaW5kZXIgcm90YXRlZCB0byBmYWNlICtaIC0tIHB1dHMgdGhlIHdvcmRtYXJrIG9uIGl0c1xuICAgICAgLy8gc2lkZSwgYmVjYXVzZSBDeWxpbmRlckdlb21ldHJ5IGxheXMgaXRzIGNhcCBVVnMgb3V0IGluIHRoZSBjeWxpbmRlcidzIG93biBYWiBwbGFuZSBhbmRcbiAgICAgIC8vIHJvdGF0aW5nIHRoZSBnZW9tZXRyeSBkb2VzIG5vdCByb3RhdGUgdGhlbSB3aXRoIGl0LiBDaXJjbGVHZW9tZXRyeSdzIFVWcyBhcmUgYWxyZWFkeVxuICAgICAgLy8gKHgsIHkpIGluIHRoZSBwbGFuZSBpdCBmYWNlcywgc28gdGhlIHNxdWFyZSBjYW52YXMgbGFuZHMgdGhlIHJpZ2h0IHdheSB1cCB3aXRoIG5vXG4gICAgICAvLyBjb3JyZWN0aW9uLiBUaGUgYm9keSdzIFVWcyBhcmUgY29sbGFwc2VkIG9udG8gYSBwbGFpbiBjb3JuZXIgb2YgdGhlIHNhbWUgY2FudmFzIHNvIHRoZVxuICAgICAgLy8gZGlzYydzIGVkZ2UgZG9lcyBub3Qgc21lYXIgdGhlIHdvcmRtYXJrIGFyb3VuZCBpdHMgcmltLlxuICAgICAgY29uc3QgciA9IGYudyAvIDI7XG4gICAgICBjb25zdCBmYWNlID0gbmV3IFRIUkVFLkNpcmNsZUdlb21ldHJ5KHIsIDMyKTtcbiAgICAgIGZhY2UudHJhbnNsYXRlKDAsIDAsIDAuMDYxKTtcbiAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCAwLjEyLCAzMik7XG4gICAgICBib2R5LnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgICAgIGNvbnN0IGJ1diA9IGJvZHkuZ2V0QXR0cmlidXRlKCd1dicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV2LmNvdW50OyBpKyspIGJ1di5zZXRYWShpLCAwLjAyLCAwLjAyKTtcbiAgICAgIGJ1di5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICBnID0gbWVyZ2VHZW9zKFtmYWNlLCBib2R5XSk7XG4gICAgICBnLnRyYW5zbGF0ZSgwLCBmLmN5LCBmLmN6KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQm94R2VvbWV0cnkgdmVydGV4IG9yZGVyIGlzIHB4LCBueCwgcHksIG55LCBweiwgbnogLS0gZm91ciB2ZXJ0aWNlcyBwZXIgZmFjZSAtLSBzbyB0aGVcbiAgICAgIC8vIG91dHdhcmQgZmFjZSBvZiBhIGJvYXJkIGlzIGEga25vd24gc2xpY2Ugb2YgdGhlIHV2IGF0dHJpYnV0ZS4gQSBidWlsZGluZyBjYW4gY2FycnkgdGhlXG4gICAgICAvLyBzYW1lIG1hcmsgb24gbW9yZSB0aGFuIG9uZSBlbGV2YXRpb24gKHRoaXMga2l0J3MgaG9zcGl0YWwgc2lnbnMgaXRzIGZyb250IEFORCBpdHMgc2lkZSksXG4gICAgICAvLyBzbyBgYm9hcmRzYCBsZXRzIGVhY2ggYm9hcmQgbmFtZSB0aGUgZmFjZSB0aGF0IHNhbXBsZXMgdGhlIGdyYXBoaWMgd2hpbGUgZXZlcnkgb3RoZXIgZmFjZVxuICAgICAgLy8gc2FtcGxlcyBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZSBjYW52YXMuIE9uZSBtYXRlcmlhbCwgb25lIGRyYXcgY2FsbCwgYW55IG51bWJlciBvZlxuICAgICAgLy8gYm9hcmRzIGZhY2luZyBhbnkgd2F5LlxuICAgICAgY29uc3QgRkFDRV9TTElDRTogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgJytYJzogMCwgJy1YJzogNCwgJytZJzogOCwgJy1ZJzogMTIsICcrWic6IDE2LCAnLVonOiAyMCB9O1xuICAgICAgY29uc3QgYm9hcmRzID0gKGYuYm9hcmRzIGFzIGFueVtdKSA/PyBbeyB3OiBmLncsIGg6IGYuaCwgZDogMC4xMiwgYXQ6IFswLCBmLmN5LCBmLmN6XSwgZmFjZTogJytaJyB9XTtcbiAgICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgICBmb3IgKGNvbnN0IGJkIG9mIGJvYXJkcykge1xuICAgICAgICBjb25zdCBiID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJkLncsIGJkLmgsIGJkLmQgPz8gMC4xMik7XG4gICAgICAgIGNvbnN0IHV2ID0gYi5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgICAvLyBgcGxhaW5gIGJvYXJkcyBjYXJyeSBubyBncmFwaGljIGF0IGFsbDogYSBiYW5kIHRoYXQgd3JhcHMgdGhyZWUgc2lkZXMgb2YgYSBjYW5vcHkgc2hvdWxkXG4gICAgICAgIC8vIHJlcGVhdCBpdHMgbWFyayBvbiBub25lIG9mIHRoZSByZXR1cm5zLCBvbmx5IG9uIHRoZSBmYWNlIHRoYXQgZnJvbnRzIHRoZSBzdHJlZXQuXG4gICAgICAgIC8vIFRoZSB0ZXN0IGlzIGFuIGV4cGxpY2l0IGJvb2xlYW4sIE5PVCBhIHNlbnRpbmVsIGluZGV4IC0tIHNldHRpbmcgdGhlIHNsaWNlIHN0YXJ0IHRvIC0xXG4gICAgICAgIC8vIHN0aWxsIHNhdGlzZmllZCBgaSA+PSBzdGFydCAmJiBpIDwgc3RhcnQgKyA0YCBmb3IgdmVydGljZXMgMCwgMSBhbmQgMiwgc28gdGhyZWUgY29ybmVyc1xuICAgICAgICAvLyBvZiB0aGUgK1ggZmFjZSBrZXB0IHNhbXBsaW5nIHRoZSB3b3JkbWFyayBiYW5kIGFuZCBzbWVhcmVkIGEgc3RyZXRjaGVkIGdob3N0IG9mIHRoZSBtYXJrXG4gICAgICAgIC8vIGFsb25nIGV2ZXJ5IHJldHVybi5cbiAgICAgICAgY29uc3QgcGxhaW4gPSBiZC5wbGFpbiA9PT0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc3RhcnRBdCA9IEZBQ0VfU0xJQ0VbYmQuZmFjZSA/PyAnK1onXTtcbiAgICAgICAgLy8gYHU6IFt1MCwgdTFdYCBsZXRzIGEgYm9hcmQgc2FtcGxlIGEgaG9yaXpvbnRhbCBTTElDRSBvZiB0aGUgY2FudmFzIGJhbmQgaW5zdGVhZCBvZiBhbGwgb2ZcbiAgICAgICAgLy8gaXQsIHNvIHR3byBib2FyZHMgd2l0aCB0d28gZGlmZmVyZW50IGdyYXBoaWNzIChhIGJsdWUgYm9hcmQgd2l0aCB3aGl0ZSB0ZXh0LCBhIHdoaXRlIGJvYXJkXG4gICAgICAgIC8vIHdpdGggYmx1ZSB0ZXh0KSBzdGlsbCBzaGFyZSBvbmUgY2FudmFzLCBvbmUgbWF0ZXJpYWwgYW5kIG9uZSBkcmF3IGNhbGwuIGBwbGFpblVWYCBpcyB0aGVcbiAgICAgICAgLy8gY2FudmFzIHBvaW50IHRoZSBib2FyZCdzIG90aGVyIGZpdmUgZmFjZXMgc2FtcGxlOyBpdCBkZWZhdWx0cyB0byB0aGUgYm90dG9tLWxlZnQgY29ybmVyXG4gICAgICAgIC8vIGFuZCBhIGJvYXJkIHdob3NlIGdyb3VuZCBpcyBub3QgdGhlIGNhbnZhcyBiYWNrZ3JvdW5kIG5hbWVzIGl0cyBvd24uXG4gICAgICAgIGNvbnN0IHUwID0gYmQudSA/IGJkLnVbMF0gOiAwLCB1MSA9IGJkLnUgPyBiZC51WzFdIDogMTtcbiAgICAgICAgY29uc3QgcHUgPSBiZC5wbGFpblVWID8gYmQucGxhaW5VVlswXSA6IDAuMDE1LCBwdiA9IGJkLnBsYWluVVYgPyBiZC5wbGFpblVWWzFdIDogMC4wMTU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykge1xuICAgICAgICAgIC8vIGBmLnV2UmVjdGAgW3UwLCB2MCwgdTEsIHYxXSBuYW1lcyB0aGUgQVRMQVMgcmVnaW9uIHRoZSBiYW5kIG9jY3VwaWVzIHdoZW4gdGhlIHNpZ25cbiAgICAgICAgICAvLyBzaGFyZXMgaXRzIGltYWdlIHdpdGggb3RoZXIgdGV4dHVyZWQgcGFydHM7IGRlZmF1bHQgaXMgdGhlIGNhbnZhcyBjb250cmFjdCAodG9wIDg3LjUgJSkuXG4gICAgICAgICAgY29uc3QgUiA9IChmLnV2UmVjdCBhcyBudW1iZXJbXSkgPz8gWzAsIDAuMTI1LCAxLCAxXTtcbiAgICAgICAgICBpZiAoIXBsYWluICYmIGkgPj0gc3RhcnRBdCAmJiBpIDwgc3RhcnRBdCArIDQpIHV2LnNldFhZKGksIFJbMF0gKyAodTAgKyB1di5nZXRYKGkpICogKHUxIC0gdTApKSAqIChSWzJdIC0gUlswXSksIFJbMV0gKyB1di5nZXRZKGkpICogKFJbM10gLSBSWzFdKSk7XG4gICAgICAgICAgZWxzZSB1di5zZXRYWShpLCBwdSwgcHYpO1xuICAgICAgICB9XG4gICAgICAgIHV2Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgYi50cmFuc2xhdGUoYmQuYXRbMF0sIGJkLmF0WzFdLCBiZC5hdFsyXSk7XG4gICAgICAgIHBhcnRzLnB1c2goYik7XG4gICAgICB9XG4gICAgICBnID0gcGFydHMubGVuZ3RoID09PSAxID8gcGFydHNbMF0gOiBtZXJnZUdlb3MocGFydHMpO1xuICAgIH1cbiAgICAvLyBgY3VydmVkYDogdGV4dHVyZWQgYnVsZ2VkIGZyb250cyAoYW4gQVRNIGtpb3NrIGZhY2UpIHRoYXQgcmlkZSB0aGUgU0FNRSBtYXRlcmlhbCBhbmRcbiAgICAvLyBzdWJtaXNzaW9uIGFzIHRoZSBzaWduLCBzYW1wbGluZyB0aGVpciBvd24gcmVnaW9uIG9mIHRoZSBiYWtlZCBhdGxhcy4gRWFjaCBpcyBhIHBhcnRpYWxcbiAgICAvLyBjeWxpbmRlciBhYm91dCBZLCBhcGV4IGF0IHosIGVkZ2VzIGF0IHogLSBidWxnZSwgc3Bhbm5pbmcgdyBieSBoLCBVVnMgcmVtYXBwZWQgdG8gdXZSZWN0LlxuICAgIGlmIChmLmN1cnZlZCkge1xuICAgICAgY29uc3QgY3BhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW2ddO1xuICAgICAgZm9yIChjb25zdCBjIG9mIGYuY3VydmVkIGFzIGFueVtdKSB7XG4gICAgICAgIGNvbnN0IFIgPSAoYy53ICogYy53IC8gNCArIGMuYnVsZ2UgKiBjLmJ1bGdlKSAvICgyICogYy5idWxnZSk7XG4gICAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmFzaW4oYy53IC8gMiAvIFIpO1xuICAgICAgICBjb25zdCBjeWwgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShSLCBSLCBjLmgsIGMuc2VnID8/IDEyLCAxLCB0cnVlLCAtaGFsZiwgMiAqIGhhbGYpO1xuICAgICAgICBjb25zdCBjdXYgPSBjeWwuZ2V0QXR0cmlidXRlKCd1dicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICAgICAgY29uc3QgciA9IGMudXZSZWN0IGFzIG51bWJlcltdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1di5jb3VudDsgaSsrKSBjdXYuc2V0WFkoaSwgclswXSArIGN1di5nZXRYKGkpICogKHJbMl0gLSByWzBdKSwgclsxXSArIGN1di5nZXRZKGkpICogKHJbM10gLSByWzFdKSk7XG4gICAgICAgIGN5bC50cmFuc2xhdGUoYy54LCBjLnksIGMueiAtIFIpO1xuICAgICAgICBjcGFydHMucHVzaChjeWwpO1xuICAgICAgfVxuICAgICAgZyA9IG1lcmdlR2VvcyhjcGFydHMpO1xuICAgIH1cbiAgICBhZGQoJ2Zhc2NpYS1wYW5lbCcsICdCcmFuZCBmYXNjaWEgcGFuZWwnLCBnLCAnZmFzY2lhJyk7XG4gIH1cblxuICAvKiBPbmUgZ2xhemluZyBwYW5lLCBub3Qgb25lIHBlciBiYXk6IHRoZSBtdWxsaW9uIGdyaWQgaW4gZnJvbnQgZG9lcyB0aGUgZGl2aWRpbmcuIE92ZXJsYXBzIElOVE9cbiAgICogdGhlIGZhY2FkZSBhdCB0aGUgYmFjayBhbmQgc2l0cyBSRUNFU1NFRCBiZWhpbmQgdGhlIGZyYW1pbmcgYXQgdGhlIGZyb250LiBNb3N0bHkgb3BhcXVlIGJ5XG4gICAqIGRlc2lnbiAtLSB0aGVyZSBpcyBubyBpbnRlcmlvciBiZWhpbmQgaXQsIHNvIGEgdHJhbnNwYXJlbnQgcGFuZSB3b3VsZCByZWFkIGFzIGEgaG9sZS4gKi9cbiAgLy8gVGhlIHBhbmUgaXMgbm90IGFsd2F5cyBjZW50cmVkOiBhIGJyYW5jaCBwbGFuIGNhbiBwdXQgaXRzIGdsYXppbmcgdG8gb25lIHNpZGUgb2YgdGhlIGVudHJhbmNlLlxuICAvLyBBdXRob3JlZCBjZW50cmVkIHdoaWxlIGl0cyBmcmFtaW5nIHNhdCBvZmYgdG8gdGhlIGxlZnQsIHRoZSB0d28gcmVhZCBhcyB1bnJlbGF0ZWQgcGFydHMuXG4gIC8vIGBnbGF6aW5nRXh0cmFgIGZvbGRzIGZ1cnRoZXIgcGFuZXMgLS0gYSBzaWRlIHdpbmRvdywgYSBjbGVyZXN0b3J5IC0tIGludG8gdGhlIFNBTUUgY29tcG9uZW50OlxuICAvLyBvbmUgbWF0ZXJpYWwsIG9uZSBkcmF3IGNhbGwsIGhvd2V2ZXIgbWFueSBvcGVuaW5ncyB0aGUgcGxhdGUgc2hvd3MuXG4gIHtcbiAgICBjb25zdCBwYW5lID0gYm94QXQoRy5nbGF6aW5nLmN4ID8/IDAsIEcuZ2xhemluZy5jeSwgRy5nbGF6aW5nLmN6ID8/IDIuNTEsIEcuZ2xhemluZy53LCBHLmdsYXppbmcuaCwgRy5nbGF6aW5nLmQgPz8gMC4xMCk7XG4gICAgY29uc3QgZXh0cmEgPSAoRy5nbGF6aW5nRXh0cmEgPz8gW10pIGFzIG51bWJlcltdW107XG4gICAgYWRkKCdzaG9wZnJvbnQtZ2xhemluZycsICdTaG9wZnJvbnQgZ2xhemluZycsXG4gICAgICAgIGV4dHJhLmxlbmd0aCA/IG1lcmdlR2VvcyhbcGFuZSwgLi4uZXh0cmEubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSldKSA6IHBhbmUsICdnbGFzcycpO1xuICB9XG5cbiAgLyogRnJhbWluZywgdHJhbnNvbSwga2ljayByYWlsLCBkb29yIGphbWJzIGFuZCBoZWFkZXIgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudC4gRXZlcnkgcGFydCBpc1xuICAgKiB0aGUgc2FtZSBtZXRhbDsgZm9sZGluZyB0aGVtIHRvZ2V0aGVyIGlzIHRoZSBkcmF3LWNhbGwgbGV2ZXIgY2hvc2VuIGluIHRoZSBibG9ja291dCwgbm90IGFuXG4gICAqIG9wdGltaXNhdGlvbiBkZWZlcnJlZCB0byB0aGUgZW5kIC0tIGEgcGFydCBzcGxpdCBmb3IgYXV0aG9yaW5nIGNvbnZlbmllbmNlIGNhbm5vdCBiZSBtZXJnZWRcbiAgICogYWZ0ZXJ3YXJkcyBvbmNlIGEgcGl2b3QgaGFuZ3Mgb2ZmIGl0LiBGcm9udCBmYWNlIHN0YW5kcyBwcm91ZCBvZiBnbGF6aW5nIGFuZCBtdWxsaW9ucy4gKi9cbiAgYWRkKCdzaG9wZnJvbnQtZnJhbWUnLCAnU2hvcGZyb250IGZyYW1pbmcgYW5kIGRvb3IgYmF5JywgYm94ZXMoRy5mcmFtZSksIEcuZnJhbWVNYXRlcmlhbCk7XG5cbiAgLyogU2lkZSBmZWF0dXJlOiBzaHV0dGVyLCBzZXJ2aWNlIGRvb3Igb3IgbG91dnJlLCBwZXIgcGxhdGUuIFN0YW5kcyBwcm91ZCBvZiB0aGUgd2FsbCBmYWNlIGJ1dFxuICAgKiBkZWxpYmVyYXRlbHkgTk9UIG91dCB0byB0aGUgcGFyYXBldCBwbGFuZSBhdCArLTQuMDAgLS0gYSBmYWNlIGF0IGV4YWN0bHkgKy00LjAwIHdvdWxkIGJlXG4gICAqIGNvcGxhbmFyIGFuZCBjby1mYWNpbmcgd2l0aCB0aGUgcGFyYXBldCBvdXRlciBmYWNlLCB3aGljaCB0aGUgYm91bmRpbmctYm94IGNvcGxhbmFyaXR5IGNoZWNrXG4gICAqIGZsYWdzIGV2ZW4gdGhvdWdoIHRoZSB0d28gbmV2ZXIgb3ZlcmxhcCBpbiBZLiAqL1xuICBpZiAoRy5zaWRlRmVhdHVyZSkgYWRkKCdzaWRlLWZlYXR1cmUnLCBHLnNpZGVGZWF0dXJlLm5hbWUsIGJveGVzKEcuc2lkZUZlYXR1cmUuYm94ZXMpLCBHLnNpZGVGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBGcm9udCBmZWF0dXJlOiBjbGFkZGluZyBiYW5kLCBBVE0gYmFuaywgdXBwZXItc3RvcmV5IGJhbmQgb3IgZm9yZWNvdXJ0LCBwZXIgcGxhdGUuICovXG4gIGlmIChHLmZyb250RmVhdHVyZSkgYWRkKCdmcm9udC1mZWF0dXJlJywgRy5mcm9udEZlYXR1cmUubmFtZSwgYm94ZXMoRy5mcm9udEZlYXR1cmUuYm94ZXMpLCBHLmZyb250RmVhdHVyZS5tYXRlcmlhbCk7XG5cbiAgLyogQSB0aGlyZCBtZXJnZWQgc2xvdCwgZm9yIHdoYXRldmVyIHRoZSBwbGF0ZSBoYXMgdGhhdCB0aGUgdHdvIGFib3ZlIGRvIG5vdCBjb3ZlciAtLSBhIHBhcmFwZXRcbiAgICogY29waW5nLCBhIGtlcmIsIGEgZm9yZWNvdXJ0IGNvbHVtbiBiYXNlLiBTYW1lIHJ1bGUgYXMgdGhlIG90aGVyczogZXZlcnl0aGluZyBpbiBpdCBzaGFyZXMgb25lXG4gICAqIG1hdGVyaWFsIGFuZCBpcyBzdWJtaXR0ZWQgb25jZS4gKi9cbiAgaWYgKEcuZXh0cmFGZWF0dXJlKSBhZGQoJ2V4dHJhLWZlYXR1cmUnLCBHLmV4dHJhRmVhdHVyZS5uYW1lLCBib3hlcyhHLmV4dHJhRmVhdHVyZS5ib3hlcyksIEcuZXh0cmFGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBBIGZvdXJ0aCBtZXJnZWQgc2xvdC4gVHdvIGZlYXR1cmVzIGluIERJRkZFUkVOVCBtYXRlcmlhbHMgY2Fubm90IHNoYXJlIGEgY29tcG9uZW50LCBhbmQgYVxuICAgKiBwbGF0ZSB0aGF0IHNob3dzIGEgZ2FsdmFuaXNlZCBwbGFudCBkZWNrIEFORCBhIHBhaW50ZWQgc3RlZWwgc2VydmljZSBkb29yIG5lZWRzIGJvdGguICovXG4gIGlmIChHLmV4dHJhRmVhdHVyZTIpIGFkZCgnZXh0cmEtZmVhdHVyZS0yJywgRy5leHRyYUZlYXR1cmUyLm5hbWUsIGJveGVzKEcuZXh0cmFGZWF0dXJlMi5ib3hlcyksIEcuZXh0cmFGZWF0dXJlMi5tYXRlcmlhbCk7XG5cbiAgLyogQSBUSU5URUQgbWVyZ2VkIHNsb3Q6IG9uZSBjb21wb25lbnQsIG9uZSBtYXRlcmlhbCwgYW5kIGEgcGVyLUJPWCBjb2xvdXIgd3JpdHRlbiBpbnRvIGEgdmVydGV4XG4gICAqIGNvbG91ciBhdHRyaWJ1dGUuIFRoaXMgaXMgaG93IGEgdHdvLWNvbG91ciBhcHBsaWVkIGdyYXBoaWMgLS0gYSB2aW55bCBkZWNhbCBiYW5kIG9uIGEgc2hvcGZyb250LFxuICAgKiBhIHBhaW50ZWQgc3RyaXBlIG9uIGEga2VyYiAtLSBzaGlwcyB3aXRob3V0IGEgbWF0ZXJpYWwgcGVyIGNvbG91ciwgb24gYSBraXQgd2hvc2UgbWF0ZXJpYWxcbiAgICogY2VpbGluZyBpcyB0aGUgYXhpcyB0aGVzZSBwcm9wcyBhcmUgdGlnaHRlc3Qgb24gYWZ0ZXIgZHJhdyBjYWxscy5cbiAgICpcbiAgICogVHdvIHJ1bGVzIG1ha2UgaXQgc2FmZS4gVGhlIG1hdGVyaWFsIG11c3QgYmUgV0hJVEUsIGJlY2F1c2UgYSB2ZXJ0ZXggY29sb3VyIE1VTFRJUExJRVMgd2l0aFxuICAgKiBtYXRlcmlhbC5jb2xvciBhbmQgYSB0aW50ZWQgYmFzZSB3b3VsZCBkYXJrZW4gZXZlcnkgdG9uZS4gQW5kIEVWRVJZIHZlcnRleCBoYXMgdG8gYmUgd3JpdHRlbixcbiAgICogYmVjYXVzZSB0aGUgc2hhZGVyIHJlYWRzIGEgbWlzc2luZyBjb2xvdXIgYXR0cmlidXRlIGFzICgwLDAsMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggYmxhY2sgLS1cbiAgICogdGhlIGZhaWx1cmUgdGhhdCBzaGlwcGVkIHRoZSB1Ym9zb3QncyB3YWxscyBhbmQgZWlnaHQgYm91bmRhcnkgc3RvbmVzIGFzIHNpbGhvdWV0dGVzLiBCb3RoIGFyZVxuICAgKiBzYXRpc2ZpZWQgaGVyZSBieSBjb25zdHJ1Y3Rpb246IHRoZSBhdHRyaWJ1dGUgaXMgZmlsbGVkIGJveCBieSBib3ggb3ZlciB0aGUgd2hvbGUgbWVyZ2UuIFRoZVxuICAgKiB0b25lcyBhcmUgTElORUFSLCBtYXRjaGluZyBob3cgdGhyZWUuanMgbXVsdGlwbGllcyB0aGVtLiAqL1xuICBpZiAoRy50aW50RmVhdHVyZSkge1xuICAgIGNvbnN0IHQgPSBHLnRpbnRGZWF0dXJlO1xuICAgIGNvbnN0IGxpc3QgPSB0LmJveGVzIGFzIChudW1iZXJbXSB8IHsgY3lsOiBudW1iZXJbXSB9KVtdO1xuICAgIGNvbnN0IHBhcnRzID0gbGlzdC5tYXAoKGIpID0+IGJveGVzKFtiXSkpO1xuICAgIGNvbnN0IGdlbyA9IG1lcmdlR2VvcyhwYXJ0cy5tYXAoKGcpID0+IGcuY2xvbmUoKSkpO1xuICAgIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkoZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCAqIDMpO1xuICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICBsZXQgdiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbiA9IHBhcnRzW2ldLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICAgIGMuc2V0SGV4KHQudG9uZXNbaSAlIHQudG9uZXMubGVuZ3RoXSk7XG4gICAgICAvLyBzZXRIZXggb24gYSBDb2xvciBpcyBzUkdCLWRlY29kZWQgYnkgdGhyZWUuanMgd2hlbiBjb2xvck1hbmFnZW1lbnQgaXMgb24sIHdoaWNoIGlzIHdoYXQgYVxuICAgICAgLy8gdmVydGV4IGNvbG91ciB3YW50czogdGhlIG11bHRpcGx5IGhhcHBlbnMgaW4gbGluZWFyIHNwYWNlLlxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHsgY29sWyh2ICsgaykgKiAzXSA9IGMucjsgY29sWyh2ICsgaykgKiAzICsgMV0gPSBjLmc7IGNvbFsodiArIGspICogMyArIDJdID0gYy5iOyB9XG4gICAgICB2ICs9IG47XG4gICAgICBwYXJ0c1tpXS5kaXNwb3NlKCk7XG4gICAgfVxuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgICBjb25zdCBtZXNoID0gYWRkKCd0aW50LWZlYXR1cmUnLCB0Lm5hbWUsIGdlbywgdC5tYXRlcmlhbCk7XG4gICAgKG1lc2gubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpLnZlcnRleENvbG9ycyA9IHRydWU7XG4gICAgKG1lc2gubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qIE11bGxpb25zOiB0aGUgZmluZSB2ZXJ0aWNhbCBncmlkIGlzIHRoZSBtb3N0IHJlY29nbmlzYWJsZSB0aGluZyBhYm91dCBhIHNob3Bmcm9udC4gSW5zdGFuY2VzXG4gICAqIG9uIG9uZSBnZW9tZXRyeSBjb3N0IG9uZSBkcmF3IGNhbGw7IGFzIGNvbXBvbmVudHMgdGhleSB3b3VsZCBoYXZlIGNvc3Qgb25lIGVhY2ggYW5kIGJsb3duIHRoZVxuICAgKiBjZWlsaW5nIG9uIHRoZWlyIG93bi4gVGhleSBzaXQgSU5TSURFIHRoZSBmcmFtZSBkZXB0aCBiYW5kIGF0IGJvdGggZW5kcyBzbyB0aGV5IGFyZSBub3RcbiAgICogY29wbGFuYXIgd2l0aCBpdCwgd2hpbGUgc3RpbGwgc3RhbmRpbmcgcHJvdWQgb2YgdGhlIGdsYXppbmcgc28gdGhlIGdsYXNzIHJlYWRzIGFzIHJlY2Vzc2VkLiAqL1xuICB7XG4gICAgY29uc3QgbSA9IEcubXVsbGlvbnM7XG4gICAgY29uc3QgbWF0cyA9IChtLnggYXMgbnVtYmVyW10pLm1hcCgoeCkgPT4gbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCBtLmN5LCBtLmN6ID8/IDIuNTgpKTtcbiAgICBhZGRJbnN0KCdzaG9wZnJvbnQtbXVsbGlvbnMnLCAnU2hvcGZyb250IG11bGxpb25zJywgbmV3IFRIUkVFLkJveEdlb21ldHJ5KG0udywgbS5oLCAwLjA4KSwgRy5mcmFtZU1hdGVyaWFsLCBtYXRzKTtcbiAgfVxuXG4gIC8qIFJvb2Z0b3AgY29uZGVuc2VyczogY2FzaW5nLCBmYW4gY293bCBhbmQgZm91ciBmZWV0IE1FUkdFRCBpbnRvIGEgc2luZ2xlIGluc3RhbmNlZCBnZW9tZXRyeS5cbiAgICogRmVldCBzdGFydCBiZWxvdyB0aGUgZGVjayB0b3Agc28gdGhlIHR3byBvdmVybGFwIHJhdGhlciB0aGFuIHNoYXJpbmcgYSBwbGFuZS5cbiAgICpcbiAgICogQW4gRU1QVFkgbGlzdCBpcyBhIGxlZ2l0aW1hdGUgYW5zd2VyLCBub3QgYSBtaXNzaW5nIGNvbmZpZy4gSW5zdGFuY2luZyBvbmUgY2FzaW5nIGlzIHRoZSByaWdodFxuICAgKiBsZXZlciB3aGVuIGEgcGxhdGUgc2hvd3MgdGhlIHNhbWUgYm94IHR3byBvciB0aHJlZSB0aW1lczsgaXQgaXMgdGhlIHdyb25nIG9uZSB3aGVuIHRoZSBwbGF0ZVxuICAgKiBzaG93cyBnZW51aW5lbHkgZGlmZmVyZW50IHVuaXRzIC0tIGEgaG9vZGVkIGR1Y3QgcnVuLCBhIHdhbGwtdHlwZSBjb25kZW5zZXIgd2l0aCBhIHNxdWFyZSBmYW5cbiAgICogZ3VhcmQsIGEgdGFsbCBsb3V2cmVkIHRvd2VyIC0tIGFuZCByZXBlYXRpbmcgb25lIGNhc2luZyB0aHJlZSB0aW1lcyBpcyB0aGVuIGEgc2ltcGxpZmljYXRpb25cbiAgICogdGhhdCBjb3N0cyBmaWRlbGl0eSB0byBzYXZlIG5vdGhpbmcuIFN1Y2ggYSBwbGFudCBkZWNrIGNvbWVzIGluIHRocm91Z2ggYGV4dHJhRmVhdHVyZWAgYXNcbiAgICogbWVyZ2VkIGdlb21ldHJ5OiBzdGlsbCBPTkUgZHJhdyBjYWxsLCBhbmQgZXZlcnkgdW5pdCBpdHMgb3duIHNoYXBlLiAqL1xuICBpZiAoKEcuY29uZGVuc2VycyBhcyBudW1iZXJbXVtdID8/IFtdKS5sZW5ndGgpIHtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtcbiAgICAgIGJveEF0KDAsIDAuNDYsIDAsIDAuOTUsIDAuNzIsIDAuODUpLFxuICAgICAgY3lsQXQoMCwgMC44NywgMCwgMC4zMCwgMC4xMCwgMTYpLFxuICAgIF07XG4gICAgZm9yIChjb25zdCBmeCBvZiBbLTAuNCwgMC40XSkgZm9yIChjb25zdCBmeiBvZiBbLTAuMzUsIDAuMzVdKSBwYXJ0cy5wdXNoKGJveEF0KGZ4LCAwLjA1LCBmeiwgMC4wOCwgMC4xMCwgMC4wOCkpO1xuICAgIGNvbnN0IHVuaXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICAgIGNvbnN0IG1hdHMgPSAoRy5jb25kZW5zZXJzIGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHosIHlhd10pID0+XG4gICAgICBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHgsIDMuNjAsIHopLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIHlhdyksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpLFxuICAgICAgKSk7XG4gICAgLy8gVGhlIHBsYW50IG1hdGVyaWFsIGlzIENPTkZJR1VSQUJMRSwgbm90IGhhcmQtY29kZWQuIFJlZmVyZW5jaW5nIGEgJ2dhbHYnIGlkIHRoYXQgYSBjb25maWdcbiAgICAvLyBkb2VzIG5vdCBkZWZpbmUgc2lsZW50bHkgaGFuZHMgSW5zdGFuY2VkTWVzaCBhbiB1bmRlZmluZWQgbWF0ZXJpYWwsIHRocmVlLmpzIHN1YnN0aXR1dGVzIGFcbiAgICAvLyBkZWZhdWx0LCBhbmQgdGhlIHByb3Agc2hpcHMgb25lIG1hdGVyaWFsIG92ZXIgaXRzIGNlaWxpbmcgd2l0aCBub3RoaW5nIGluIHRoZSBjb25maWcgdG9cbiAgICAvLyBleHBsYWluIHRoZSBleHRyYS5cbiAgICBhZGRJbnN0KCdwbGFudC1jb25kZW5zZXJzJywgJ1Jvb2Z0b3AgY29uZGVuc2VyIHVuaXRzJywgdW5pdCwgRy5wbGFudE1hdGVyaWFsID8/ICdnYWx2JywgbWF0cyk7XG4gIH1cblxuICAvKiBPcHRpb25hbCBpbnN0YW5jZWQgZXh0cmE6IGNhbm9weSBwbGF0ZXMsIHBpbGFzdGVycyBvciBmb3JlY291cnQgY29sdW1ucywgcGVyIHBsYXRlLiAqL1xuICBpZiAoRy5leHRyYVN5c3RlbSkge1xuICAgIGNvbnN0IGUgPSBHLmV4dHJhU3lzdGVtO1xuICAgIGxldCB1bml0OiBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBpZiAoZS5raW5kID09PSAncGxhdGUnKSB7XG4gICAgICB1bml0ID0gbWVyZ2VHZW9zKFtib3hBdCgwLCAwLCAwLCBlLncsIGUuaCwgZS5kKSwgY3lsQXQoMCwgLWUuaCAvIDIgLSAwLjAxNSwgMCwgMC4wODUsIDAuMDMsIDEyKV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gYm94QXQoMCwgMCwgMCwgZS53LCBlLmgsIGUuZCk7XG4gICAgfVxuICAgIGNvbnN0IG1hdHMgPSAoZS5hdCBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB5LCB6XSkgPT4gbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCB5LCB6KSk7XG4gICAgYWRkSW5zdChlLmlkLCBlLm5hbWUsIHVuaXQsIGUubWF0ZXJpYWwsIG1hdHMsIGUudG9uZXMgPyBtYXRzLm1hcCgoXywgaSkgPT4gZS50b25lc1tpICUgZS50b25lcy5sZW5ndGhdKSA6IHVuZGVmaW5lZCk7XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBicmFuZCBmYXNjaWEgY2FudmFzICovXG5cbi8qKiBEcmF3IHRoZSBicmFuZCB3b3JkbWFyayBvbnRvIGEgY2FudmFzIGFuZCBhc3NpZ24gaXQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLiBUaGlzIGlzIHRoZVxuICogIGRvY3VtZW50ZWQgcm91dGUgZm9yIGEgcHJpbnRlZCBicmFuZCBmYXNjaWEgYW5kIGlzIHVuYWZmZWN0ZWQgYnkgdGhlIG1hdGVyaWFsJ3MgYHRleHR1cmVsZXNzYFxuICogIGRlY2xhcmF0aW9uIC0tIHdoYXQgdGhhdCBza2lwcyBpcyB0aGUgZml2ZS1jYW52YXMgUFJPQ0VEVVJBTCBzZXQsIGEgZGlmZmVyZW50IHRoaW5nIGVudGlyZWx5LlxuICpcbiAqICBUZXh0IGlzIGZpdHRlZCB0byBpdHMgZmllbGQgYnkgTUVBU1VSRU1FTlQgcmF0aGVyIHRoYW4gYnkgYSBmb250LXNpemUgcmF0aW86IGhlYWRsZXNzIENocm9tZSdzXG4gKiAgZm9udCBmYWxsYmFjayBkZWNpZGVzIHRoZSByZWFsIGFkdmFuY2Ugd2lkdGhzLCBzbyB0aGUgb25seSByZWxpYWJsZSB3YXkgdG8gZmlsbCBhIGtub3duIGJveCBpc1xuICogIHRvIG1lYXN1cmUgdGhlIHN0cmluZyBhbmQgc2NhbGUgaXQgaG9yaXpvbnRhbGx5LiAqL1xuZnVuY3Rpb24gYXBwbHlGYXNjaWFHcmFwaGljKHJvb3Q6IFRIUkVFLkdyb3VwKTogdm9pZCB7XG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IG1lc2ggPSBydD8ubWVzaGVzPy5bJ2Zhc2NpYS1wYW5lbCddO1xuICBpZiAoIW1lc2ggfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICBjb25zdCBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gIGlmICghbWF0ZXJpYWwpIHJldHVybjtcblxuICBjb25zdCBnID0gQ09ORklHLmdyYXBoaWMgYXMgYW55O1xuICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG5cbiAgLy8gQSBCQUtFRCBzaWduIC0tIHRoZSBmYWNlIGltYWdlIGNvbXBvc2VkIG9uY2UgZnJvbSBhIHJlYWwgZm9udCBhbmQgdmVjdG9yIG1hcmtzIGFuZCBlbWJlZGRlZFxuICAvLyBhcyBhIFdlYlAgZGF0YSBVUkkgLS0gYmVhdHMgZmlsbFRleHQsIHdoaWNoIGRyYXdzIGEgZGlmZmVyZW50IHdvcmRtYXJrIG9uIGV2ZXJ5IG1hY2hpbmUnc1xuICAvLyBmb250IGZhbGxiYWNrLiBMYWlkIG91dCB0byB0aGUgc2FtZSBVViBjb250cmFjdCBhcyB0aGUgY2FudmFzOiB0aGUgdG9wIDg3LjUgJSBpcyB0aGUgYmFuZFxuICAvLyB0aGUgK1ogZmFjZSBzYW1wbGVzIGFuZCB0aGUgYm90dG9tLWxlZnQgY29ybmVyIGlzIHRoZSBwbGFpbiBmaWVsZCBldmVyeSBvdGhlciBmYWNlIHNhbXBsZXMuXG4gIC8vIEFzc2lnbmVkIHN5bmNocm9ub3VzbHkgc28gdGhlIGhhcm5lc3Mgd2FpdHMgb24gdGhlIGRlY29kZTsgdGhlIGNhbnZhcyBvcHMgYmVsb3cgYXJlIHRoZVxuICAvLyBkZWNvZGUgRkFMTEJBQ0sgb25seS5cbiAgaWYgKGcuYmFrZWQpIHtcbiAgICBjb25zdCBiYWtlZCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChnLmJha2VkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgKCkgPT4ge1xuICAgICAgY29uc3QgYyA9IGRyYXdGYXNjaWFDYW52YXMoZyk7XG4gICAgICBpZiAoIWMpIHJldHVybjtcbiAgICAgIGNvbnN0IHQgPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjKTtcbiAgICAgIGlmIChzcmdiKSB0LmNvbG9yU3BhY2UgPSBzcmdiO1xuICAgICAgdC5hbmlzb3Ryb3B5ID0gNDtcbiAgICAgIG1hdGVyaWFsLm1hcCA9IHQ7XG4gICAgICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfSk7XG4gICAgaWYgKHNyZ2IpIGJha2VkLmNvbG9yU3BhY2UgPSBzcmdiO1xuICAgIGJha2VkLmFuaXNvdHJvcHkgPSA0O1xuICAgIGJha2VkLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBtYXRlcmlhbC5tYXAgPSBiYWtlZDtcbiAgICBtYXRlcmlhbC5jb2xvci5zZXRIZXgoMHhmZmZmZmYpO1xuICAgIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjYW52YXMgPSBkcmF3RmFzY2lhQ2FudmFzKGcpO1xuICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjYW52YXMpO1xuICBpZiAoc3JnYikgdGV4LmNvbG9yU3BhY2UgPSBzcmdiO1xuICB0ZXguYW5pc290cm9weSA9IDQ7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIG1hdGVyaWFsLm1hcCA9IHRleDtcbiAgLy8gV2hpdGUgYmFzZSBzbyB0aGUgY2FudmFzIHNob3dzIGFzIGRyYXduIHJhdGhlciB0aGFuIHRpbnRlZCAtLSB0aGUgbWVhc3VyZWQgZmFzY2lhIGNvbG91ciBpc1xuICAvLyBhbHJlYWR5IHBhaW50ZWQgaW50byB0aGUgY2FudmFzIGJhY2tncm91bmQuXG4gIG1hdGVyaWFsLmNvbG9yLnNldEhleCgweGZmZmZmZik7XG4gIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZHJhd0Zhc2NpYUNhbnZhcyhnOiBhbnkpOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwge1xuICAvLyBBIHJvdW5kIHNpZ24gbmVlZHMgYSBTUVVBUkUgY2FudmFzOiB0aGUgY3lsaW5kZXIgY2FwIG1hcHMgdGhlIGNpcmNsZSBpbnRvIHRoZSB1bml0IHNxdWFyZSxcbiAgLy8gc28gYSAyMDQ4eDMyMCBzdHJpcCB3b3VsZCBzcXVhc2ggdGhlIG1hcmsgZmxhdC4gQSByZWN0YW5ndWxhciBmYXNjaWEga2VlcHMgdGhlIHdpZGUgc3RyaXAsXG4gIC8vIHdoZXJlIHRoZSBib3R0b20gMTIuNSUgaXMgdGhlIHBsYWluIGNvcm5lciBldmVyeSBub24tZnJvbnQgZmFjZSBzYW1wbGVzLlxuICBjb25zdCBzcXVhcmUgPSAhIWcuc3F1YXJlO1xuICBjb25zdCBXID0gc3F1YXJlID8gNTEyIDogKGcuc2l6ZT8uWzBdID8/IDIwNDgpLCBIID0gc3F1YXJlID8gNTEyIDogKGcuc2l6ZT8uWzFdID8/IDMyMCk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBXOyBjYW52YXMuaGVpZ2h0ID0gSDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSByZXR1cm4gbnVsbDtcblxuICBjdHguZmlsbFN0eWxlID0gZy5iYWNrZ3JvdW5kO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgVywgSCk7XG4gIGNvbnN0IGJhbmQgPSBzcXVhcmUgPyBIIDogSCAqIChnLmJhbmRGcmFjID8/IDAuODc1KTtcblxuICBjb25zdCBmaXQgPSAodGV4dDogc3RyaW5nLCBmb250OiBzdHJpbmcsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGN5OiBudW1iZXIsIGZpbGw6IHN0cmluZywgc3Ryb2tlQ29sPzogc3RyaW5nLCBzdHJva2VXPzogbnVtYmVyKSA9PiB7XG4gICAgY3R4LmZvbnQgPSBmb250O1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIGNvbnN0IHcgPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgY29uc3QgcyA9ICh4MSAtIHgwKSAvIHc7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKHgwLCAwKTtcbiAgICBjdHguc2NhbGUocywgMSk7XG4gICAgaWYgKHN0cm9rZUNvbCkgeyBjdHgubGluZUpvaW4gPSAncm91bmQnOyBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2w7IGN0eC5saW5lV2lkdGggPSAoc3Ryb2tlVyA/PyA2KSAvIHM7IGN0eC5zdHJva2VUZXh0KHRleHQsIDAsIGN5KTsgfVxuICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsO1xuICAgIGN0eC5maWxsVGV4dCh0ZXh0LCAwLCBjeSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfTtcblxuICBmb3IgKGNvbnN0IG9wIG9mIGcub3BzIGFzIGFueVtdKSB7XG4gICAgaWYgKG9wLnR5cGUgPT09ICdyZWN0Jykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjb25zdCB4ID0gb3AueCAqIFcsIHkgPSBvcC55ICogYmFuZCwgdyA9IG9wLncgKiBXLCBoID0gb3AuaCAqIGJhbmQsIHIgPSAob3AuciA/PyAwKSAqIGJhbmQ7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBpZiAociA+IDApIHtcbiAgICAgICAgY3R4Lm1vdmVUbyh4ICsgciwgeSk7IGN0eC5saW5lVG8oeCArIHcgLSByLCB5KTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHcsIHksIHggKyB3LCB5ICsgcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHcsIHkgKyBoIC0gcik7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3LCB5ICsgaCwgeCArIHcgLSByLCB5ICsgaCk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHIsIHkgKyBoKTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGgsIHgsIHkgKyBoIC0gcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSArIHIpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgciwgeSk7XG4gICAgICB9IGVsc2UgY3R4LnJlY3QoeCwgeSwgdywgaCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgfSBlbHNlIGlmIChvcC50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKG9wLmN4ICogVywgb3AuY3kgKiBiYW5kLCBvcC5yICogYmFuZCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICdwb2x5Jykge1xuICAgICAgLy8gQW4gYXJiaXRyYXJ5IHBvbHlnb24gaW4gbm9ybWFsaXNlZCBjYW52YXMgY29vcmRzLCBmb3IgYSBtYXJrIGEgZm9udCBjYW5ub3Qgc2V0IC0tIGFcbiAgICAgIC8vIGxpZ2h0bmluZyBib2x0LCBhIGNoZXZyb24sIGEgbGVhZi4gUG9pbnRzIGFyZSBbeCwgeV0gd2l0aCB4IGEgZnJhY3Rpb24gb2YgdGhlIGNhbnZhcyB3aWR0aFxuICAgICAgLy8gYW5kIHkgYSBmcmFjdGlvbiBvZiB0aGUgYmFuZCBoZWlnaHQuXG4gICAgICBjdHguZmlsbFN0eWxlID0gb3AuZmlsbDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGNvbnN0IHB0cyA9IG9wLnBvaW50cyBhcyBudW1iZXJbXVtdO1xuICAgICAgY3R4Lm1vdmVUbyhwdHNbMF1bMF0gKiBXLCBwdHNbMF1bMV0gKiBiYW5kKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBjdHgubGluZVRvKHB0c1tpXVswXSAqIFcsIHB0c1tpXVsxXSAqIGJhbmQpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgZml0KG9wLnRleHQsIGAke29wLnN0eWxlID8/ICdib2xkJ30gJHtNYXRoLnJvdW5kKG9wLnNpemUgKiBiYW5kKX1weCAke29wLmZhbWlseSA/PyAnQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZid9YCxcbiAgICAgICAgb3AueDAgKiBXLCBvcC54MSAqIFcsIG9wLmN5ICogYmFuZCwgb3AuZmlsbCwgb3Auc3Ryb2tlLCBvcC5zdHJva2VXID8gb3Auc3Ryb2tlVyAqIGJhbmQgOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjYW52YXM7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbGF6aW5nIGdyYXBoaWMgKi9cblxuLyoqIEEgYnVpbGRpbmcgaXMgYW4gZXh0ZXJpb3Igc2hlbGwgd2l0aCBubyBpbnRlcmlvciwgc28gYSBwbGFpbiB0aW50ZWQgcGFuZSByZWFkcyBhcyBhIGJsaW5kIHNsYWJcbiAqICAtLSBvciwgZGFyayBlbm91Z2gsIGFzIGEgaG9sZS4gYGdyYXBoaWMuZ2xhc3NgIHBhaW50cyBhIGRlLWxpdCBpbnRlcmlvciB2aWV3IGludG8gdGhlIGdsYXppbmc6XG4gKiAgb25lIGJha2VkIGltYWdlIHByb2plY3RlZCBieSBXT1JMRCB4L3kgb3ZlciBgcmVjdGAgW3gwLCB5MCwgeDEsIHkxXSBzbyBpdCBsaW5lcyB1cCBhY3Jvc3MgdGhlXG4gKiAgd2luZG93IHBhbmUsIHRoZSB0cmFuc29tIGFuZCB0aGUgZG9vciBsZWF2ZXMsIHdoaWNoIGFyZSBzZXBhcmF0ZSBib3hlcyBpbiBvbmUgbWVyZ2VkIG1lc2guXG4gKiAgQXNzaWduZWQgYWZ0ZXIgbWF0ZXJpYWwgY29uc3RydWN0aW9uOyB0aGUgbWF0ZXJpYWwgc3RheXMgYHRleHR1cmVsZXNzYCBpbiB0aGUgc3BlYy4gKi9cbmZ1bmN0aW9uIGFwcGx5R2xhc3NHcmFwaGljKHJvb3Q6IFRIUkVFLkdyb3VwKTogdm9pZCB7XG4gIGNvbnN0IGcgPSAoQ09ORklHLmdyYXBoaWMgYXMgYW55KT8uZ2xhc3M7XG4gIC8vIE5vZGUgaGFzIG5vIGBkb2N1bWVudGAsIGFuZCB0aGFpa2l0J3MgY29wbGFuYXIgY2hlY2tlciBhbmQgcGFydCBtYW5pZmVzdCBldmFsdWF0ZSB0aGlzXG4gIC8vIG1vZHVsZSB0aGVyZTogVGV4dHVyZUxvYWRlciB3b3VsZCB0aHJvdywgc28gdGhlIGdsYXppbmcga2VlcHMgaXRzIGZsYXQgZmFsbGJhY2sgYWxiZWRvLlxuICBpZiAoIWcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lIHwgdW5kZWZpbmVkO1xuICBjb25zdCBtZXNoID0gcnQ/Lm1lc2hlcz8uWydzaG9wZnJvbnQtZ2xhemluZyddO1xuICBpZiAoIW1lc2gpIHJldHVybjtcbiAgY29uc3QgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsIGFzIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuICBpZiAoIW1hdGVyaWFsKSByZXR1cm47XG4gIGNvbnN0IGdlbyA9IG1lc2guZ2VvbWV0cnkgYXMgVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gIGNvbnN0IHBvcyA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IFt4MCwgeTAsIHgxLCB5MV0gPSBnLnJlY3QgYXMgbnVtYmVyW107XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwb3MuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MuY291bnQ7IGkrKykge1xuICAgIHV2W2kgKiAyXSA9IChwb3MuZ2V0WChpKSAtIHgwKSAvICh4MSAtIHgwKTtcbiAgICB1dltpICogMiArIDFdID0gKHBvcy5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChnLmJha2VkKTtcbiAgaWYgKHNyZ2IpIHRleC5jb2xvclNwYWNlID0gc3JnYjtcbiAgdGV4LmFuaXNvdHJvcHkgPSA0O1xuICB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBtYXRlcmlhbC5tYXAgPSB0ZXg7XG4gIC8vIFRoZSBpbWFnZSBjYXJyaWVzIHRoZSB0aW50OyBhIGNvbG91cmVkIGJhc2Ugd291bGQgYXBwbHkgaXQgdHdpY2UuXG4gIG1hdGVyaWFsLmNvbG9yLnNldEhleCgweGZmZmZmZik7XG4gIGlmIChnLnJvdWdobmVzcyAhPT0gdW5kZWZpbmVkKSBtYXRlcmlhbC5yb3VnaG5lc3MgPSBnLnJvdWdobmVzcztcbiAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd2FsbCByZW5kZXIgZ3JhcGhpYyAqL1xuXG4vKiogQSByZW5kZXJlZCBjb25jcmV0ZSB3YWxsIGlzIG5vdCBhIGZsYXQgY29sb3VyLiBFdmVyeSBwbGF0ZSBpbiB0aGlzIHNldCBzaG93cyB0aGUgc2FtZSB0aGluZyAtLVxuICogIHZlcnRpY2FsIHJhaW4gc3RyZWFraW5nIG9mZiB0aGUgY29waW5nLCBwYXRjaHkgZmxvYXQgbWFya3MsIGEgZGFya2VyIGJhbmQgd2hlcmUgdGhlIHdhbGwgbWVldHNcbiAqICB0aGUgZ3JvdW5kIC0tIGFuZCBhIHdhbGwgYXV0aG9yZWQgYXMgb25lIGFsYmVkbyByZWFkcyBhcyBwYWludGVkIGNhcmQgbmV4dCB0byB0aGUgc2hvcGZyb250J3NcbiAqICByZWFsIGRldGFpbC4gYGdyYXBoaWMud2FsbGAgcGFpbnRzIGEgU0VBTUxFU1MgdGlsZSBvbmNlIGFuZCByZXBlYXRzIGl0IG92ZXIgdGhlIHdhbGwgbWVzaGVzLlxuICpcbiAqICBJdCBpcyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcywgc28gdGhlIG1hdGVyaWFsIHN0YXlzIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNwZWM6IHdoYXQgdGhhdFxuICogIGRlY2xhcmF0aW9uIHNraXBzIGlzIGNyZWF0ZVNjdWxwdE1hdGVyaWFsJ3MgZml2ZS1jYW52YXMgcHJvY2VkdXJhbCBzZXQsIHdoaWNoIGNvc3RzIHRoZSBzcXVhcmVcbiAqICBvZiBpdHMgcmVzb2x1dGlvbiBhbmQgZGlzY2FyZHMgdGhlIG1lYXN1cmVkIGFsYmVkby4gT25lIHRpbGUgZHJhd24gb25jZSBjb3N0cyBtaWxsaXNlY29uZHMgYW5kXG4gKiAga2VlcHMgdGhlIGFsYmVkbywgYmVjYXVzZSB0aGUgdGlsZSBpcyBhdXRob3JlZCBpbiBNVUxUSVBMSUVSIHNwYWNlIC0tIG1pZC1ncmV5IDEyOCBpcyBcImxlYXZlIHRoZVxuICogIG1lYXN1cmVkIGNvbG91ciBhbG9uZVwiIC0tIGFuZCBpcyBhcHBsaWVkIGFzIGBtYXBgIG92ZXIgdGhlIG1hdGVyaWFsJ3Mgb3duIGNvbG91ci5cbiAqXG4gKiAgVVZzIGFyZSBtZXRyaWMgYW5kIFdPUkxELVBMQU5BUiwgY2hvc2VuIHBlciB2ZXJ0ZXggb2ZmIHRoZSBmYWNlIG5vcm1hbDogYW4gWC1mYWNpbmcgZmFjZSBpc1xuICogIHByb2plY3RlZCAoeiwgeSksIGEgWi1mYWNpbmcgZmFjZSAoeCwgeSksIGEgWS1mYWNpbmcgZmFjZSAoeCwgeikuIEJveCBVVnMgd291bGQgc3RyZXRjaCBvbmVcbiAqICB0aWxlIG92ZXIgZWFjaCBmYWNlLCB3aGljaCBwdXRzIGEgNy1tZXRyZS13aWRlIHN0cmVhayBvbiB0aGUgc2lkZSB3YWxsIGFuZCBhIDAuMjQtbWV0cmUtd2lkZSBvbmVcbiAqICBvbiB0aGUgcGFyYXBldCBjb3BpbmcuICovXG5mdW5jdGlvbiBhcHBseVdhbGxHcmFwaGljKHJvb3Q6IFRIUkVFLkdyb3VwKTogdm9pZCB7XG4gIGNvbnN0IGcgPSAoQ09ORklHLmdyYXBoaWMgYXMgYW55KT8ud2FsbDtcbiAgaWYgKCFnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZSB8IHVuZGVmaW5lZDtcbiAgaWYgKCFydCkgcmV0dXJuO1xuICBjb25zdCB0aWxlID0gZy50aWxlID8/IDIuNTtcbiAgbGV0IHRleDogVEhSRUUuVGV4dHVyZSB8IG51bGwgPSBudWxsO1xuICBmb3IgKGNvbnN0IGlkIG9mIChnLm1lc2hlcyBhcyBzdHJpbmdbXSkpIHtcbiAgICBjb25zdCBtZXNoID0gcnQubWVzaGVzPy5baWRdO1xuICAgIGlmICghbWVzaCkgY29udGludWU7XG4gICAgY29uc3QgZ2VvID0gbWVzaC5nZW9tZXRyeSBhcyBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBjb25zdCBwb3MgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgICBpZiAoIXBvcyB8fCAhbnJtKSBjb250aW51ZTtcbiAgICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocG9zLmNvdW50ICogMik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MuY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF5ID0gTWF0aC5hYnMobnJtLmdldFkoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICAgIGxldCB1OiBudW1iZXIsIHY6IG51bWJlcjtcbiAgICAgIGlmIChheCA+PSBheSAmJiBheCA+PSBheikgeyB1ID0gcG9zLmdldFooaSk7IHYgPSBwb3MuZ2V0WShpKTsgfVxuICAgICAgZWxzZSBpZiAoYXogPj0gYXkpIHsgdSA9IHBvcy5nZXRYKGkpOyB2ID0gcG9zLmdldFkoaSk7IH1cbiAgICAgIGVsc2UgeyB1ID0gcG9zLmdldFgoaSk7IHYgPSBwb3MuZ2V0WihpKTsgfVxuICAgICAgdXZbaSAqIDJdID0gdSAvIHRpbGU7IHV2W2kgKiAyICsgMV0gPSB2IC8gdGlsZTtcbiAgICB9XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gICAgaWYgKCF0ZXgpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGRyYXdXYWxsQ2FudmFzKGcpO1xuICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcbiAgICAgIHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGNhbnZhcyk7XG4gICAgICB0ZXgud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZzsgdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG4gICAgICBpZiAoc3JnYikgdGV4LmNvbG9yU3BhY2UgPSBzcmdiO1xuICAgICAgdGV4LmFuaXNvdHJvcHkgPSA0OyB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gICAgLy8gT05FIHRleHR1cmUgZm9yIGhvd2V2ZXIgbWFueSBtZXNoZXMgc2hhcmUgdGhlIG1hdGVyaWFsOiBhc3NpZ25pbmcgcGVyIG1lc2ggd291bGQgdXBsb2FkIHRoZVxuICAgIC8vIHNhbWUgY2FudmFzIHR3aWNlIGFuZCBjb3N0IFZSQU0gZm9yIG5vdGhpbmcuXG4gICAgaWYgKG1hdGVyaWFsICYmIG1hdGVyaWFsLm1hcCAhPT0gdGV4KSB7IG1hdGVyaWFsLm1hcCA9IHRleDsgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlOyB9XG4gIH1cbn1cblxuLyoqIFNlYW1sZXNzIHJlbmRlciB0aWxlIGluIE1VTFRJUExJRVIgc3BhY2UsIGFuZCB0aGUgbmV1dHJhbCB2YWx1ZSBpcyBXSElURSwgbm90IG1pZC1ncmV5LlxuICogIGBtYXBgIG11bHRpcGxpZXMgdGhlIG1hdGVyaWFsIGNvbG91ciBieSB0aGUgdGV4dHVyZSdzIExJTkVBUiB2YWx1ZSwgYW5kIHRoZSB0ZXh0dXJlIGlzIGRlY29kZWRcbiAqICBhcyBzUkdCLCBzbyBhIHRpbGUgZHJhd24gYXJvdW5kIDEyOCBtdWx0aXBsaWVzIHRoZSBtZWFzdXJlZCBhbGJlZG8gYnkgMC4yMTYgYW5kIHJlbmRlcnMgYSBsaWdodFxuICogIGdyZXkgcmVuZGVyIHdhbGwgbmVhciBibGFjayAtLSB3aGljaCBpcyBleGFjdGx5IHdoYXQgdGhlIGZpcnN0IGJ1aWxkIG9mIHRoaXMgdGlsZSBkaWQuIGBiYXNlYFxuICogIHRoZXJlZm9yZSBzaXRzIGp1c3QgdW5kZXIgd2hpdGUgYW5kIGV2ZXJ5IG1hcmsgREFSS0VOUyBmcm9tIGl0OyB0aGUgd2FsbCdzIG93biBhbGJlZG8gc3RheXMgdGhlXG4gKiAgbWF0ZXJpYWwncywgYW5kIHRoZSB0aWxlIG9ubHkgZXZlciB0YWtlcyB2YWx1ZSBhd2F5LlxuICpcbiAqICBFdmVyeXRoaW5nIHdyYXBzIGJ5IGRyYXdpbmcgZWFjaCBtYXJrIGEgc2Vjb25kIHRpbWUgYXQgeC1XIGFuZCB4K1csIHdoaWNoIGlzIHdoYXQgbWFrZXMgdGhlXG4gKiAgdGlsZSBzZWFtbGVzcyAtLSBhIG1hcmsgY2xpcHBlZCBhdCB0aGUgZWRnZSBpcyB0aGUgc2luZ2xlIG1vc3QgdmlzaWJsZSBhcnRlZmFjdCB3aGVuIGEgd2FsbCBpc1xuICogIDggdGlsZXMgd2lkZS4gKi9cbmZ1bmN0aW9uIGRyYXdXYWxsQ2FudmFzKGc6IGFueSk6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IE4gPSBnLnNpemUgPz8gNTEyO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzLndpZHRoID0gTjsgY2FudmFzLmhlaWdodCA9IE47XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBpZiAoIWN0eCkgcmV0dXJuIG51bGw7XG4gIGxldCBzZWVkID0gZy5zZWVkID8/IDIwMjYwODI4O1xuICBjb25zdCBybmQgPSAoKSA9PiB7IHNlZWQgPSAoc2VlZCAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMDsgcmV0dXJuIHNlZWQgLyA0Mjk0OTY3Mjk2OyB9O1xuICBjb25zdCBiYXNlID0gZy5iYXNlID8/IDI0NjtcbiAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtiYXNlfSwke2Jhc2V9LCR7YmFzZX0pYDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIE4sIE4pO1xuXG4gIC8vIEJyb2FkIGZsb2F0LW1hcmsgYmxvdGNoZXM6IGxvdy1mcmVxdWVuY3kgcGF0Y2hpbmVzcyBpbiB0aGUgcmVuZGVyIGNvYXQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgKGcucGF0Y2hlcyA/PyA5MCk7IGkrKykge1xuICAgIGNvbnN0IHggPSBybmQoKSAqIE4sIHkgPSBybmQoKSAqIE4sIHIgPSAoMC4wNSArIHJuZCgpICogMC4xOCkgKiBOO1xuICAgIGNvbnN0IHYgPSBiYXNlIC0gcm5kKCkgKiAoZy5wYXRjaEFtcCA/PyAyNik7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3YgfCAwfSwke3YgfCAwfSwke3YgfCAwfSwwLjU1KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7diB8IDB9LCR7diB8IDB9LCR7diB8IDB9LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7XG4gICAgZm9yIChjb25zdCBkeCBvZiBbLU4sIDAsIE5dKSB7IGN0eC5zYXZlKCk7IGN0eC50cmFuc2xhdGUoZHgsIDApOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyBjdHgucmVzdG9yZSgpOyB9XG4gIH1cbiAgLy8gVmVydGljYWwgcmFpbiBzdHJlYWtzLiBOYXJyb3csIHNvZnQtZWRnZWQsIHRvcC13ZWlnaHRlZCAtLSB3YXRlciBydW5zIERPV04gZnJvbSB0aGUgY29waW5nIGFuZFxuICAvLyBmYWRlcyBvdXQsIHNvIHRoZSBhbHBoYSByYW1wcyB0byBub3RoaW5nIGF0IHRoZSBib3R0b20gb2YgZWFjaCBzdHJlYWsgcmF0aGVyIHRoYW4gc3RvcHBpbmcuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgKGcuc3RyZWFrcyA/PyAxMzApOyBpKyspIHtcbiAgICBjb25zdCB4ID0gcm5kKCkgKiBOLCB3ID0gKDAuMDAyICsgcm5kKCkgKiAwLjAxMCkgKiBOO1xuICAgIGNvbnN0IHkwID0gcm5kKCkgKiBOICogMC41LCBsZW4gPSAoMC4yNSArIHJuZCgpICogMC43NSkgKiBOO1xuICAgIGNvbnN0IGRhcmsgPSBiYXNlIC0gKDYgKyBybmQoKSAqIChnLnN0cmVha0FtcCA/PyAyMikpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2RhcmsgfCAwfSwke2RhcmsgfCAwfSwke2RhcmsgfCAwfSwwLjQyKWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuMzUsIGByZ2JhKCR7ZGFyayB8IDB9LCR7ZGFyayB8IDB9LCR7ZGFyayB8IDB9LDAuMjYpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtkYXJrIHwgMH0sJHtkYXJrIHwgMH0sJHtkYXJrIHwgMH0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDtcbiAgICBmb3IgKGNvbnN0IGR4IG9mIFstTiwgMCwgTl0pIGN0eC5maWxsUmVjdCh4ICsgZHggLSB3IC8gMiwgeTAsIHcsIGxlbik7XG4gIH1cbiAgLy8gRmluZSBzcGVja2xlOiB0aGUgYWdncmVnYXRlIGluIHRoZSByZW5kZXIsIGF0IHRoZSBsaW1pdCBvZiB3aGF0IGEgcHJvcC1kaXN0YW5jZSB2aWV3ZXIgcmVzb2x2ZXMuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgKGcuc3BlY2tzID8/IDI2MDApOyBpKyspIHtcbiAgICBjb25zdCB4ID0gcm5kKCkgKiBOLCB5ID0gcm5kKCkgKiBOLCByID0gMC41ICsgcm5kKCkgKiAxLjY7XG4gICAgY29uc3QgdiA9IGJhc2UgLSBybmQoKSAqIChnLnNwZWNrQW1wID8/IDMwKTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2IHwgMH0sJHt2IHwgMH0sJHt2IHwgMH0sMC4zMClgO1xuICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gIH1cbiAgcmV0dXJuIGNhbnZhcztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZUZhbWlseU1hcnRTdG9yZUJ1aWxkaW5nTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBhcHBseUZhc2NpYUdyYXBoaWMocm9vdCk7XG4gIGFwcGx5R2xhc3NHcmFwaGljKHJvb3QpO1xuICBhcHBseVdhbGxHcmFwaGljKHJvb3QpO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IE9ORS4gQSBzdGF0aWMgZXh0ZXJpb3Igc2hlbGwgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBUaGUgZG9vcnMgYW5kIGFueVxuICAgIC8vIHNodXR0ZXIgYXJlIGF1dGhvcmVkIGFzIGZpeGVkIGdlb21ldHJ5LCBzbyB0aGV5IGdldCBubyBheGlzOiBhIG5hbWVkIHBpdm90IGlzIGEgcHJvbWlzZVxuICAgIC8vIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvciBoYXNcbiAgICAvLyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qKlxuICogVGhlIG9uZS1hcmd1bWVudCBlbnRyeSBwb2ludDogdmliZTNkJ3MgY29udHJhY3QsIGFuZCBpbWcydGhyZWVqcydzIG93bi5cbiAqXG4gKiBgY3JlYXRlT2JqZWN0TW9kZWxgIGFib3ZlIGtlZXBzIHRoYWlraXQncyBoaXN0b3JpY2FsIChzcGVjLCBvcHRpb25zKSBzaGFwZSBzb1xuICogdGhlIGhhcm5lc3MsIHRoZSBsZXZlbCBlZGl0b3IgYW5kIHRoZSBOb2RlLXNpZGUgZ2F0ZXMgY2Fycnkgb24gdW5jaGFuZ2VkLlxuICogYHNwZWNgIGhhcyBuZXZlciBiZWVuIHBhc3NlZCBieSBhbnkgY2FsbGVyIC0tIGl0IGlzIGluc3BlY3Rpb24gZGF0YSB0aGF0IGlzXG4gKiBhbHJlYWR5IGJha2VkIGludG8gdGhpcyBtb2R1bGUgLS0gc28gdGhpcyBpcyB0aGUgaG9uZXN0IHNpZ25hdHVyZSwgYW5kIGl0IGlzXG4gKiB3aGF0IGEgdmliZTNkIGNvbnN1bWVyIGluc3RhbGxzIGFuZCBjYWxscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgcmV0dXJuIGNyZWF0ZU9iamVjdE1vZGVsKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUE2Q3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixjQUFjO0FBQUEsSUFDZCxjQUFjO0FBQUEsTUFDWixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0Esc0JBQXNCO0FBQUEsSUFDdEIsWUFBWTtBQUFBLElBQ1osZ0JBQWdCO0FBQUEsTUFDZCxNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZDtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGlCQUFpQjtBQUFBLElBQ2pCLFVBQVU7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsUUFBUTtBQUFBLFVBQ1IsS0FBSztBQUFBLFlBQ0g7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2Q7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxRQUNIO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBYyxDQUFDO0FBQUEsRUFDakI7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxJQUNkLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsS0FBSztBQUFBLFFBQ0wsS0FB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
