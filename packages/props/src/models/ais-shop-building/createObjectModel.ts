import * as THREE from 'three';

/**
 * AIS Shop Building -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging and
 * instancing are hand-rolled below -- anything under three/examples/jsm is a second import.
 *
 * Envelope 8.00 x 5.70 x 7.00 m, origin base-center, +Y up, shopfront facing +Z.
 * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=16 unique geometries.
 *
 * One of thaikit's shared retail-module buildings. The shell front face sits at z=+2.50 rather
 * than the envelope edge so the entrance canopy can cantilever forward and still land exactly on
 * the declared 7.0 m depth. Every surface pair on the facade is deliberately offset in depth:
 * two surfaces in the same plane facing the same way tear into interleaved triangles as the
 * camera moves, and authoring components flush against one another produces that by default.
 */

export interface ProceduralModelOptions {
  /**
   * Where this prop's shipped files live, with a trailing slash.
   *
   * The maps are recorded as bare filenames because the bundle is EVALUATED
   * rather than imported: it has no import.meta and no currentScript, so it
   * cannot see its own URL. Every host derives this from the module URL.
   */
  baseUrl?: string;
  wireframe?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
  textureSize?: number;
  textureAnisotropy?: number;
  qualityPriority?: 'reference-fidelity' | 'balanced';
}

export type ProceduralModelRuntime = {
  nodes: Record<string, THREE.Object3D>;
  meshes: Record<string, THREE.Mesh>;
  sockets: Record<string, THREE.Object3D>;
  colliders: Record<string, unknown>;
  destructionGroups: Record<string, THREE.Object3D[]>;
};

const CONFIG = {
  "id": "ais-shop-building",
  "name": "AIS Shop Building",
  "exportName": "AisShopBuilding",
  "materials": [
    {
      "id": "wall",
      "color": 16771002,
      "roughness": 0.88,
      "metalness": 0
    },
    {
      "id": "white",
      "color": 16776955,
      "roughness": 0.6,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 9078918,
      "roughness": 0.92,
      "metalness": 0
    },
    {
      "id": "fascia",
      "color": 9422636,
      "roughness": 0.45,
      "metalness": 0
    },
    {
      "id": "glass",
      "color": 16777215,
      "roughness": 0.1,
      "metalness": 0,
      "opacity": 1,
      "envMapIntensity": 1.1
    },
    {
      "id": "frame",
      "color": 13488851,
      "roughness": 0.35,
      "metalness": 0.35
    },
    {
      "id": "galv",
      "color": 15658732,
      "roughness": 0.52,
      "metalness": 0.3
    }
  ],
  "geometry": {
    "shellFront": 3.06,
    "plantMaterial": "galv",
    "shellBoxes": [
      [
        0.05,
        1.77,
        -1.59,
        7.78,
        3.54,
        3.7
      ],
      [
        3.78,
        1.9,
        1.655,
        0.32,
        3.8,
        2.81
      ],
      [
        -3.74,
        1.9,
        1.665,
        0.2,
        3.8,
        2.79
      ],
      [
        0,
        2.995,
        2.8,
        7.55,
        0.59,
        0.52
      ],
      [
        0,
        0.13,
        2.8,
        7.56,
        0.26,
        0.52
      ],
      [
        -3.885,
        1.9,
        -3.2199999999999998,
        0.10999999999999988,
        3.8,
        0.43999999999999995
      ],
      [
        -3.885,
        1.9,
        0.68,
        0.10999999999999988,
        3.8,
        4.76
      ],
      [
        -3.885,
        2.9749999999999996,
        -2.35,
        0.10999999999999988,
        1.65,
        1.3
      ],
      [
        -3.875,
        1.055,
        -2.35,
        0.05,
        2.09,
        1.26
      ],
      [
        0.05,
        3.655,
        -3.4,
        7.78,
        0.31,
        0.08
      ],
      [
        3.82,
        3.665,
        -1.58,
        0.24,
        0.27,
        3.72
      ]
    ],
    "deckY": 3.89,
    "fasciaWall": {
      "cy": 4.075,
      "cz": 2.94,
      "h": 1.05,
      "d": 0.36
    },
    "fasciaWallMaterial": "wall",
    "parapetSides": {
      "cy": 4.14,
      "h": 0.68,
      "thick": 0.24,
      "cx": 3.82
    },
    "frameMaterial": "frame",
    "fascia": {
      "w": 6.15,
      "h": 0.95,
      "cy": 3.6999999999999997,
      "cz": 3.4,
      "boards": [
        {
          "w": 6.15,
          "h": 0.95,
          "d": 0.12,
          "at": [
            0,
            3.6999999999999997,
            3.4
          ],
          "face": "+Z"
        },
        {
          "w": 6.15,
          "h": 0.018,
          "d": 0.015,
          "at": [
            0,
            3.235,
            3.468
          ],
          "plain": true
        },
        {
          "w": 6.15,
          "h": 0.018,
          "d": 0.015,
          "at": [
            0,
            4.165,
            3.468
          ],
          "plain": true
        },
        {
          "w": 0.018,
          "h": 0.93,
          "d": 0.015,
          "at": [
            -3.0660000000000003,
            3.6999999999999997,
            3.468
          ],
          "plain": true
        },
        {
          "w": 0.018,
          "h": 0.93,
          "d": 0.015,
          "at": [
            3.0660000000000003,
            3.6999999999999997,
            3.468
          ],
          "plain": true
        }
      ]
    },
    "frontFeature": {
      "name": "White fascia board",
      "material": "white",
      "boxes": [
        [
          4,
          3.69,
          3.05,
          0.12,
          1.7800000000000002,
          0.58
        ],
        [
          -3.33,
          3.69,
          3.2,
          1.2000000000000002,
          1.7800000000000002,
          0.28
        ],
        [
          -0.0009999999999998899,
          3.69,
          3.2,
          5.442,
          1.7800000000000002,
          0.28
        ],
        [
          3.329,
          3.69,
          3.2,
          1.202,
          1.7800000000000002,
          0.28
        ]
      ]
    },
    "glazing": {
      "boxes": [
        [
          -2.3899999999999997,
          1.5,
          3.0300000000000002,
          2.78,
          2.4000000000000004,
          0.08
        ],
        [
          2.05,
          1.5,
          3.0300000000000002,
          2.5,
          2.4000000000000004,
          0.08
        ],
        [
          -0.09999999999999998,
          2.49,
          3.0300000000000002,
          1.8,
          0.4200000000000004,
          0.08
        ],
        [
          0.35000000000000003,
          1.225,
          3.08,
          0.78,
          1.75,
          0.04
        ]
      ]
    },
    "frame": [
      [
        -0.24,
        2.75,
        3.15,
        7.24,
        0.1,
        0.14
      ],
      [
        -2.3899999999999997,
        0.3,
        3.15,
        2.78,
        0.1,
        0.14
      ],
      [
        2.05,
        0.3,
        3.15,
        2.5,
        0.1,
        0.14
      ],
      [
        -2.3899999999999997,
        2.23,
        3.15,
        2.78,
        0.08,
        0.14
      ],
      [
        2.05,
        2.23,
        3.15,
        2.5,
        0.08,
        0.14
      ],
      [
        -0.09999999999999998,
        2.2399999999999998,
        3.15,
        1.8,
        0.1,
        0.14
      ],
      [
        -3.82,
        1.5,
        3.15,
        0.08,
        2.5,
        0.14
      ],
      [
        3.34,
        1.5,
        3.15,
        0.08,
        2.5,
        0.14
      ],
      [
        -1.04,
        1.115,
        3.15,
        0.08,
        2.23,
        0.14
      ],
      [
        0.8400000000000001,
        1.115,
        3.15,
        0.08,
        2.23,
        0.14
      ],
      [
        -0.07,
        1.105,
        3.1,
        0.06,
        2.15,
        0.1
      ],
      [
        0.765,
        1.105,
        3.1,
        0.05,
        2.15,
        0.1
      ],
      [
        0.35000000000000003,
        0.075,
        3.1,
        0.88,
        0.09,
        0.1
      ],
      [
        0.35000000000000003,
        2.14,
        3.1,
        0.88,
        0.08,
        0.1
      ],
      {
        "cyl": [
          0.04000000000000001,
          1.05,
          3.1999999999999997,
          0.018,
          0.4,
          10
        ]
      },
      [
        0.04000000000000001,
        1.22,
        3.175,
        0.036,
        0.036,
        0.1
      ],
      [
        0.04000000000000001,
        0.88,
        3.175,
        0.036,
        0.036,
        0.1
      ],
      [
        -3.955,
        1.0899999999999999,
        -3.025,
        0.03,
        2.1799999999999997,
        0.05
      ],
      [
        -3.955,
        1.0899999999999999,
        -1.675,
        0.03,
        2.1799999999999997,
        0.05
      ],
      [
        -3.955,
        2.155,
        -2.35,
        0.03,
        0.05,
        1.4000000000000001
      ],
      [
        -3.915,
        1.05,
        -1.8499999999999999,
        0.03,
        0.03,
        0.14
      ]
    ],
    "mullions": {
      "w": 0.06,
      "h": 2.4000000000000004,
      "cy": 1.5,
      "cz": 3.16,
      "x": [
        -2.45,
        2.05
      ]
    },
    "door": {
      "hinge": [
        -1,
        0,
        3.15
      ],
      "w": 0.9,
      "h": 2.15,
      "y0": 0.03,
      "stile": 0.06,
      "depth": 0.1,
      "handle": [
        0.14,
        1.05,
        0.4
      ],
      "railY": -9
    },
    "condenserY": 3.944,
    "condenserParts": [
      [
        0,
        0.37,
        0,
        0.9,
        0.66,
        0.46
      ],
      [
        0,
        0.706,
        0,
        0.94,
        0.018,
        0.49
      ],
      [
        -0.11,
        0.39,
        0.235,
        0.59,
        0.56,
        0.009
      ],
      {
        "cyl": [
          -0.11,
          0.39,
          0.246,
          0.252,
          0.01,
          32,
          1.5707963267948966
        ]
      },
      [
        0.34,
        0.37,
        0.241,
        0.18,
        0.54,
        0.01
      ],
      [
        -0.362,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        -0.32599999999999996,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        -0.29,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        -0.254,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        -0.21799999999999997,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        -0.182,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        -0.146,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        -0.11,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        -0.07400000000000001,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        -0.038000000000000006,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        -0.0020000000000000157,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        0.03399999999999999,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        0.06999999999999999,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        0.10599999999999997,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        0.14200000000000002,
        0.39,
        0.26,
        0.008,
        0.53,
        0.009
      ],
      [
        -0.11,
        0.138,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.17400000000000004,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.21000000000000002,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.24600000000000002,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.28200000000000003,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.318,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.35400000000000004,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.39,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.426,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.462,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.498,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.534,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.5700000000000001,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.606,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        -0.11,
        0.642,
        0.273,
        0.55,
        0.008,
        0.009
      ],
      [
        0.34,
        0.17,
        0.25,
        0.13,
        0.009,
        0.006
      ],
      [
        0.34,
        0.23,
        0.25,
        0.13,
        0.009,
        0.006
      ],
      [
        0.34,
        0.29,
        0.25,
        0.13,
        0.009,
        0.006
      ],
      [
        0.34,
        0.35,
        0.25,
        0.13,
        0.009,
        0.006
      ],
      [
        0.34,
        0.41,
        0.25,
        0.13,
        0.009,
        0.006
      ],
      [
        0.34,
        0.47,
        0.25,
        0.13,
        0.009,
        0.006
      ],
      [
        0.34,
        0.53,
        0.25,
        0.13,
        0.009,
        0.006
      ],
      [
        0.34,
        0.59,
        0.25,
        0.13,
        0.009,
        0.006
      ],
      [
        -0.36,
        0.025,
        0,
        0.08,
        0.05,
        0.53
      ],
      [
        0.36,
        0.025,
        0,
        0.08,
        0.05,
        0.53
      ]
    ],
    "condenserTones": [
      13816263,
      14934748,
      9080972,
      3357752,
      12566968,
      11646640,
      11646640,
      11646640,
      11646640,
      11646640,
      11646640,
      11646640,
      11646640,
      11646640,
      11646640,
      11646640,
      11646640,
      11646640,
      11646640,
      11646640,
      11055017,
      11055017,
      11055017,
      11055017,
      11055017,
      11055017,
      11055017,
      11055017,
      11055017,
      11055017,
      11055017,
      11055017,
      11055017,
      11055017,
      11055017,
      9081743,
      9081743,
      9081743,
      9081743,
      9081743,
      9081743,
      9081743,
      9081743,
      9212554,
      9212554
    ],
    "condensers": [
      [
        -1.53,
        -0.4,
        0,
        1.2,
        0.9
      ],
      [
        -1.56,
        -2.19,
        3.141592653589793,
        1.15,
        0.86
      ],
      [
        2.02,
        -0.16,
        0,
        1.2,
        0.9
      ]
    ],
    "extraFeature": {
      "name": "Rooftop duct run",
      "material": "galv",
      "boxes": [
        [
          1.68,
          4.25554,
          -1.8299999999999996,
          1.9,
          0.6142,
          0.72
        ],
        [
          0.75,
          4.256279999999999,
          -1.453,
          0.023,
          0.61124,
          0.024
        ],
        [
          0.75,
          4.56782,
          -1.8299999999999996,
          0.023,
          0.00888,
          0.73
        ],
        [
          1.68,
          4.256279999999999,
          -1.453,
          0.023,
          0.61124,
          0.024
        ],
        [
          1.68,
          4.56782,
          -1.8299999999999996,
          0.023,
          0.00888,
          0.73
        ],
        [
          2.61,
          4.256279999999999,
          -1.453,
          0.023,
          0.61124,
          0.024
        ],
        [
          2.61,
          4.56782,
          -1.8299999999999996,
          0.023,
          0.00888,
          0.73
        ],
        [
          1.4,
          4.00394,
          -1.2100000000000002,
          2.9,
          0.074,
          0.11
        ],
        [
          1.4,
          4.00394,
          -0.9600000000000002,
          2.9,
          0.074,
          0.11
        ],
        [
          0.19999999999999996,
          3.9743399999999998,
          -1.0850000000000002,
          0.11,
          0.051800000000000006,
          0.4
        ],
        [
          2.5900000000000003,
          3.9743399999999998,
          -1.0850000000000002,
          0.11,
          0.051800000000000006,
          0.4
        ]
      ]
    },
    "parapetExtra": [
      [
        -3.88,
        4.54,
        -0.22,
        0.24,
        0.12,
        6.56
      ],
      [
        3.88,
        4.54,
        -0.22,
        0.24,
        0.12,
        6.56
      ],
      [
        0,
        4.54,
        -3.38,
        7.53,
        0.12,
        0.24
      ],
      [
        0,
        4.54,
        2.94,
        7.53,
        0.12,
        0.36
      ]
    ],
    "parapetW": 7.88,
    "ductVerticalFit": {
      "oldBase": 3.654,
      "newBase": 3.944,
      "scale": 0.74
    },
    "ductFinish": 11912911
  },
  "graphic": {
    "baked": "data:image/webp;base64,UklGRoyKAABXRUJQVlA4TICKAAAv/8dPAE3IkiTJUiOL7IZBFsn9DzzNCEm7o+dHRP8nwD9F+R+fCoDry+cMaFXhE1a1aFHQfCbyDtV7wT2g/H//aZtvJy11tennIvcJqD6nLRULg/0d5b/8D4PrnAD37o8QGNSKynJokk8HMMPybk1YtgBaHo+h/Lf/ccJMy9GCuH409NOybA49N8JnJkBCnjIfZDfBfEo2r4BPEVDZ28Im2aXlEuDW1d2cOOcErqCvQhSzyyidySolIQ5FgHnmYE6BjWUfaXsJa+sAbj4YixdAIXjumDOs3WMXjvEgaTJI88BFRiIKnDyYBnkoAmUc6YjM9PaaZN7dx7PHdUazWnagB8bIi7e0F1cmbDMTwLueP7ySY6/sYosmiyy22aByvZjzx2N3kiOXJhNoTQK6AAEyYeb8HV0cTzPCvpAEdRUEZsInor4uGQnLQI9YNkGT6KfhmakZdEf0FkxiUgFsxzCOz4valyjoLXanJluyk+HQfGLKGCxlatimJgigAso/+wwss1gmgd1B/QT9x//+4fffRG5q267tzP5rky9ALLnLYTHZbBQr8+Z9G0FSbNu1Kqu+Obu4HB5mL7ZsfoiRbKuKBnfIPylb950QcOee/k9ACB6Bl+HGVIm7K9jS4sKYJzr7eRncDe3VIH/L7sWKRZEdfUmswd2o2NDKl3Ttl/BHJFSMhtMHALj7rvt7gjuTtPg2aMc+ZD28q1HtLg42GhvLJQAAwy76cMES3KXxs4Z9G4QQ/CLZ6TnDFwRLIvwuhAAA9pKWyxv3hhudqzNoZZAAhCEA1mz/vhzembOFoKscWmIHQGh49EHsjMEoH9IgbxpY9mlz5j56lhZjvgi9qZaurKGxmxDCWFrSOlwAEB6MNTgAne7CYrlxgH89YgXDj3+tc1Xnrbphw9bJZwEAAAP0Iy0XAgCDa1/BlOHI3CQeb3jrANintT1Wb+Jr9KrpXbxrdZIrIQBg3zhfdGaWroBpBA7cXK5hw7oTg8GFvHnzAABswygyBN9z1vLNGoBYgiluz+a8EcIjQaxHfAtYo7vgV4NJZSQM1A1jeyFK9zf0SMdOt0+Pigf2S94pZ+NOBAGAn48p0w1YLDA0NuLRGDMI75RfDiEEnA0heGapFsdtIzmSmH/Y3edv98wrIiag7zBH5khzG4QO0rwGKjpQe2YrHStdjY7WvIAqDIp4cw1ktpRR4v1FLW3iug6QRdNMq3kAN2puRI6GSMl+OBVyqf9qLNq2zbIs5Y/YufNU3/dVo4BhMrYeiepb1Z4mz95rifVHrBURK3fSxKp4bI3hDAB7bDKGY3/56bDIz1IToAeNxO45HEdcuF/HFGIe9PjWBopr27SJXJZmBmlpFT5HQKe4rr5Jx3VsIRceizqzQOGRlTZLpizGsCZB34NlBGcKVfbIT9GNIXGMoJ8CtpfbVtKDDFtMoWxZOlv2WOy2YSsHQJeaTiOZQDuGmkJcF4o9BkmSJCmSZBbZ3MvMvMd51X52ZE77gn0AM3ZluNzatlVtWfuc+z75cYdiyAmpQyKNiAhdQ2sBKtAy3N3t03t2TID3/f+XW5Is5Xvf91prW+zw9Pbu0f//T0CfORwrz8zIiMjQHbFlrXXf94O9IvbOiKiqkd7X9cY7cI48KuaMDw411tcV43L85MFv/Hc1j3rjFP7DIXGXPoZWD16N735YjVfid6F94/Q9Xj3owmHcves0Ou6+cAIncHbhN87CrR5tnHH3mUqkr6vGZxIZWfEwcAInCz0bJ3GrscDdXSoTr6oHPVcGTgQeeCRONb5wG/eZxH2s5/g5kXjgROAk/sOpfIpDjrtPYsVVg7v08bNxNk5snMAXTifO+PR1xmcKO5LIkRx8fKb6wZFdaC2cXOM+UxuHfkaPT1/njLsmMu558MTX+PTCCRzetm2rtm2ryjmXWmvrNmRN2Y7DGzy681G8QViCOx/k7u5wdclca8qYQ7q11motpXjYtu3Y3vj/tn0/zuu+74dR3Y/9CmzbxqhK0qZxUwza6ZRpqqgYfGzbxiv4muOJ8/jWdZ5HTMBrvNnDxP8T/2df7fn/DrgQoBNwkkLV3mveOtijd0NVf+xR3R88VuHnbyr8gmfifzBPqPADI1Dpbw0xVPpV/4dIqPYjUO0fmPh/4v+J/yf+n/h/4v+J/yf+n/h/4v+JFa2UpADjUyP4hYBAIWZQPOJeJQQdA5QiHYMuIEyIVdWpqj10DGgEiQE6yLAqPCohhZVhiGYxrqruJhOACiiAGJLNys4r78AmdpKlIxtE+JBHVSzipz2ATdUBlVTBUVqUK6XEfLWquqtHVBHR2n6TSay0J1zJFxqtQSVK5aGISte8AyeybaQCy0q70e1EvpyXT9VqGWJJKWAVnIlMUbtoE/NIx+FZQcFC7b18wEIma6EB0B/OdaVL7DQ376UbdZq4rHYzTyAGMbQBIdKaNsy9gmfSM9vbUh3IlOgQaeo7u7WDONRb7nz1kuwWxAai7rUE3XWCQNALqqBNSc4lZhJz6ZNH/Lj/OIbuKjpFimcvSkNd8aaMDtFWKFRWOsZXJpGxocnqycntA3LNhv1J1l5tTQtIF1hIlh5edbar1+0TWOg5kYWh5/Sc1nNaK4Wm2WxKViEyprJML/y0/97QhoE38DJrI7ZpFExjglqIVrXRE0aP6tiDRRqQdh236E7RSS8C7S279+p6dd6uy1IWBCPBUHLgoyS6tgugyWCl0D5DewISK+Vh7mST4+fOe7//XKjP5SeM1K5jKoqdgNLTPl02WqEk3W9KZaQk25ya1FVZArrF4ptzUhdkWpQ2nBCV4pyEGU/mdrHZWgM6Hi9baZ9pR5Wc558+ce/nI8ugrMsKRnLDSiiBwcT4ppue5ZvjcfPcQ19fFzIDlv7mDdFIWIQDaYsSRSJOTk4mMoZmV8guhvOp4+OSTTiRMpOXm6/n/PCyyP5B+4IEI7ahQWUlJ5RKWinKo/qZiVg60CeQMaWaFomlYMHumbzdKlyVukdi8PEXdfHVa2IQAoQgITAGlCqgFFqPh/5CItiRen3V+/vOMy+T7TXtwVNPjFdGODNAODwKXWUyOdhfXMtQ7chuMp+cFuShBTeviG6TcoecZhJVXLKUANAaCENQCrRmqFrvlaUK5uJTmW98D/uR9cEa4Y1sG5x4alhLRjhDoYGEeChRiXI8GvsZbo1MYb5xBnV91/1Zsb1SdsmQcEPWmWB6RFBn0UohsNIMVs1mUwsKm6/LCgsWn7/R3KdL5/7wyOozy5vEm+2kB7YrHB83tRHNDBgwYRJgwJc2I0xmfONRV175CcwHr9tVNB/Nvj0vm7vFd0lMbhb2KFSzyWYbjGHTCtDEYKEdufmBMsb3/B8HL3hm/SWn23qTSJ8EN4U6ZKRzYcLMeCmsRHEtVnrmOCgnTcVP9ULWpPxebY1uRifjDHrpzWv2frdoIBZi5ZaJYnECtNIMVmgNGNBqAlAalFJal4mx000Z6/J0bdmPR84/5vIXUl1OcsAbIuIAESOmG3zQChmfjD1DRMuC30kH3AV3bliwpX3DaV+clbIiXBYsChfEJMqYCoBCM2SjAWUuH4S+kmTHAyWn4tvL/u/7lz9p5bn5nT+y7Z4KqdWMYuRzFRqYNtO7MYkkB4KKFT7Yt8GZ1G5OV59h7qg+5/6C7Jbf4GtNSIYwbhFFSIWL1pxSqqRATxBKtM9X+vrKb/cvP7LsSbnRxOlW5oYCGw51I2EE9DAUElKBhgJdnrkST2qctaN7Yqm84JcXxHb/2CWGubTDsIsZbLio41gxWlIE4Y4HSozP+z/3rjzyO86tmQkyypO5kC2Fh8IGZiQ09LgNqJMXKeFR30Q6de07aStubzqt+DRj6eGV1Ot9YkPJ8hTJbmJCiyk0gy76CrpY0nqHjLnEzDuvXfDjoQtetPaI18kv4aTSIIppGHVgT0OPLGYeF/IhQT6d2GKXyL2lK6cKWbGUnEVu+3Tli1+Rdpf08S//VBKGocIAcYHKRRECXOpHb3kvpcrYkdPaBT8cO//IiiP+SmqkE779gJqisXsG6ow4bgQKTC7OZJI3uwppyrSywHLeJl/gzUtSbpO2T8ZIYq+MicwzQf84kabRGMUwK/TmAXbIU7qjyTJOc9zz/TtWLlozWHv2T0Iyu4QXuuGpkrLTia/kWaKMEWhkMQNLgQ4EjwFGCMQ6bAyU+Fe1F35FZ5RcUFjwy/Ny2CU+mVXKDyxJWhP0h8Npo43hItSDFAofacFNlMT8U5F1kjpe9pfN1/N0fNWinpGpJWXww704n6oTjgcwM7NbIAA1ghjKNIwWKtE6xMT79/vAAx7kQNiUDfUpHMmTM02Lblg48Vw3Z2xbttousZGUgbA48yYaADu3wgyqm4o2q3pTBJpQqeYlElMfadlgzMz+w2Rev/D7AysHq5y+SPH0Uk6wXdrF+A2uI5nqcAOGVk0gBNYtgCp7HWAZlrlPrrVTjuk0+AyR2aj7Nxdksyq2LBi+GwobEAJmQFQtFLG5VbgJSFCqKdE8VJsW8QRRL9fNVZ/23/tUNs70RHt2Gq1u06HT5rtOJbnRgiTZqw07LWZYTRouXfUoT+Fs6SyxxLSw+OzDOZmWZRqKitTBdYLYRxyqY3JHUCVi6NUEqNKU7O2UP+z3sW3ra97dd273hZ3sKmfgZHOYN1S3j1N5HtVaNYR5PEHf6Cv6VToKC1k7LM9uOuvVS7LbJ2NRtnufIoMx3xCzQDomYXirVG24qhILvWB2lRzHffO1u38+tWpWz2ipkelkT71KNa7EarNAkSQ6yspp4ZA8LI5QbinzCme32mma/8VHpd0iMbhuYuISganNUDAZRICQzUpccMNbbzL1mUtfW/7T/RcurF7Vu+IMHna1CE5BREiVeQBWgEE3MtIG6wbUSXWq6nTOz8mZBPabX5O4w89plqRVQpL9QAwJxMQBDPWQF81RJJKTq+S8vfb/HLj3YMPKhrVJz/TwCStBpF2xgZE1BH3HFkAHulbzVVwr7SUW1jJ/F0u31bt5W8rd0ocSG1fVMzmHqqqjMcyqYjFmaH00H70Nycg/klXGPf/l4Hn/Dxe+Y6PLcmyQCu2p3mRsNmNiyoShOuNYuOYzzIB5Xx4MhIkaVB5UgrgWa0/2anFb55Xuj/P8pT+jcs6b82333yh5l3Aql9nUrNGEVXaaQWpWFSfKmwpYP9GQInxgowmmj5bTeM3/PrTs/9Oqd2z4lF9xu6dqVSe3az5AA3EtHrfgsaqL4xnMDKAU1cxuv6RfMNaw5X5fIqxwCYyJrcy9oR0EOdIGTI6+8UHfant1xy4Wb1hsLL59K7O7TdipS44ERoCeBQNKMVgpdFEHH/0VNoDipgRoJlNy3Vj1L/ff49//xd3+a2741LyFt5wyuQVDFUJOoRg8pRpzBnC+Ro6t8AF27dqV8L48JrEJbXeQEGO2uwnJpZ3SWvPvJyO306cn/3UPOv3n563tPqm3CBau4yok0AyjQiMzjxk5FWhQTSKY/cxFVWJHXtZf/989svz/1cof0pvz6Q7VMmayDIkJG5VxTBgqKjTP12tmHEiomBMvd2L8fWFIQgWVSogh1g6UyuSjyln0tTLf4nTF4tRpu4tS7pJ2uyySzUgQT/FZuHNKa7ZspRRNTbNJU6urBJvy8ul7/esT9/xfWv0us5fckzKE1EMaRGU2GVIxCVRo+Gd2mTipEYbvC0OIohICtUA3PLrf4l/VTbWL53J9hvLm16R9wYP31poKzaxqCrylDVZNrVB33PF4ya1l/2b/vf43q9/RIdJkD35IhxiGGlKh6fT1JNresjt16h9fglV4Y77JorXWUH9fFKBaT0H1PipDXjqf7ofbEpvRUbywRFeJxbfnhbvF7pK+KL4pMZGaISil0FoTE21KozZDF6WVVkrpCf0MYZPT9WX/ef99/rdX/5SpoD2xUq/+6iERg8qbN2KmzSKpJMVj7+e/J+G23wxMzlUPFPeb97cOHZpkGM17hmbCGV1rWEXf6q5vZGHmfOk0zzyc+cVvfBTiO7JMZDRBjk0fBnzmTihqhn/YAK3HpqYFazKuZH/6f6/vX51a8f8z8Kx2cLUZDVsqAkZ1zIicbbxiqx3jaWfRPWZny+7CwuaO5idLYS4ZjZ4zHGDGmXpMo5Evdku0NbcXLW5a2HLx649IvUt0q7hlbMqYiNr14owplIZZ0IC24C0mwGxCMmZ9nwnW88dP3PPfHF72P0rfo9zOvB3uiqqAxawDCMXInTPm24d4ytnlrRs7f3fR33nj9L/+0tnt2xb732YKlkVvtVfkD9kuKzi26xjhQYyZKCJitHbGY2bWR2tGQmwaDc/U6Fd0VS1q+mJPa1r86qwcVj4f4UTmJqM1Ay05a0rQJABoClIDSiu9WXozUMtT0M+sq3BMohdsW3n9vH/1o/f4v3PN97V9KX+I0WznAzMoahQIEyAcZELAVGdElPfnoNR6Yd7tMfmnKxIreSz6ti+1/8Ilb373fTj8yvt889r7SK8l66D1KW/N+ZeWd+1yQq4U67otoaYxMKMhvL8nxkqDqoTADGloNBtqG/agZ7mN3o1+pr/tX9IZjDO3ryzALimdqBMWYVziugNYgEMwBaFQ6UMZcohBNV3WUP7E/3csZV3Lvlz+Hr77QF4/ZI/4DB8+6DZG9hBIAVUCFZ0RDYteTfVA6eMLp/3rA/tEwxQWrbIoWvHrXtnd3lnvtnJHLusrzsd6Qispr2c/NJ5jfsNtxCb5dBQqAzQoYO6PMWAIdHA7zGBCG8pLLsnBGff38yt6D90lF4NFyu7b12W627JdowAmKBgj7intlFZX2X/6v8h57V6fD91rvd6p70iF2ntkoHvwt3gDlZ11UHnkxmRjpH867a7bcp008Z1rWjxDhJJ5ItftFacHV5nWKddnup7iabsyjh0KJc0mKtMx99eYE4GWTDsch7vLxheRI95OTvaq0yrzpNNSZ2+f7dreKm0kNZ7ybkbZFs5QUaDyqqkcNr3l2rpv77nn9RO9+uE/Xoa+PJVyoN2mRwWoRWnqHlgXuQpxYSsXLI//fGXeeTORmMBjs7JYBFm2RGO53lj78NCKzrLwQNfP2fE8USIhJEyojnN/jtIqqYLWZc/83vwip3iBtKh4KVnw9qLsdkkfSVkUukFJkgJaR01FMPv3s0rzrzsXfLz3HvhOa6gD+gXlFYfrutFqkJ1YklAIHDrgIfnRXI/16fVJdr0h0Y+LNxqNClamZJs9ImyCqZy3Vnx6cPnC+lVre9qRdqYEretTrlDck/s9Yth/f0xETZgzut/IhG0qn/oqUkUyuXOjpRud8eq5+dOtUkeiwWuJyr59vqJR0VqhDZpRV8pDjtuYy3wzd738ej49ds+LT4PaEGnYTR067iPiDqoGiQJaJtZJVDr0IpkVWVllXt2f+MJ/m6Len0a+VFFoGlw/9dUKNnu/v2ddZ9XwBqc36AufkE5mKBM8PUtPc/9tPRDapfKVTmpDwTU6053w0qIlk+d/8XJ6d5tMK1IX9ylBgwfpRgXAaLZ+H+lH82Nue29h+/wf9t/t4r45LU+OnzREL90K1SCxptZq1aMoCf+U6S6n42XNs/Wxen1dhNiKb1Fp4su6gSDtbEcE9QlSJOvOZ37up0MrhgcW/TWslS86E1ni/kOFHq49iStckyulm7oLS+iuytn3b1vT6ocoiH37fIaGy/AVQKjYNkpWYZX15qrv7ll+ZcXF2VWfjmQen6FljsOMalCjqbUg0DWmx1xleWPR6uY+bncdvlBsad/2ueIpndBULpuDgfY4t7N/sJSZHNfXvD984eoLh7JOX2AHd13mhErQgDAhRAgQg7kfSyXEQAkUppCOadDw6UflzJ/iX2Bh0p3qunlVdncLbxes+CxxBTRUFLrBYK23BlFoPYOiokOaO4585u/hHu8O3+fKhplMz86hvgiHWDAto5ORQyBSQRRrMKJmxJjTlvvjPm9+X/74WdFE+szNOtOsJKC1g6JmZ3fsuEMsJXq5TDas1+/zfGpl19o123tNrTzMCRuvZlVSlbBiJR51PNaYGXU/looAzTFVUtrM1IHrw+2X9ksdoLe5nWSkNvPpO59+f65zWr1FrLtlYp9goNm0pgKGrTNsppg71VCvWVLT069+WHqT83T5y6m7vzCwMuBq72mHclTK0k9zAIMhpEJ0Z6BNTGTgwF0nojxYl1p2fUJOa49xslo+91TLgNZFmiESIKYJwVhiU67XL/zp4RWrVq3Krcq5HOR/Q435Kd9thfeyCz2DUWZycnJSm/uVsJjEUVxqVBQoVY0/wzycY+TMUtKS5yEvPSuzHXShpW8uyP5Ovy5Psi3N1E41fKF4TRf1DvGZxI63bvdIWVPfOdOdSx0m2zlpQyEQc6BKhCgGShSsdazOXOnv2Rttw8OhI1+CaMHGAnEco2kG7MXUmkem5uSy6Z827/N8bGXwn+gf1R/5OnelnL0hLbQQFOwC06rdz2RUzSdRbGJTwsxQXl+KTacRqV35hXcY5+yeE+z6+ATLgpHghnBpkm2rKAWNRmPGb7JrSpkLd5YtT6xzbUz9/dLOpZ8MQB0DMSORFjC+YWekut+Fn9lv+QH3GHIdi88FkyYFdyhCkSTTgJ54tlj9+YqP86drK5+OrR+sDXkj16XvKpUOVaIDqqJp1TDcDwVaGQ768KlTXuVxePICqFs6HZrXkLu3xG4V7DxWTd8xtU/pbQsoRUPPXCaoYtPssrO2snzCiva6KefkdhcG9psZRiotsLvGwffmtRSlG+5fWL3E2k8PPwH12jEJswGhNgbKJGqHZC8xl5h901OS02UfD20cWhPaMJTr5AdWZGeQgQZGfMEpUcMQm/uFFOhqPQVaf4zP0EZ+ij82y8Ix+zVSNyyqOg3MPzw3T3uttvhP3/eWjsyKNcJ9zIHaxhSWMX7kyvOTayE/lHE5zEYybsMeobWfEUwLIaS1e3fJczIL9qrVjRWFgcvaW5R1nIpmpzaFoazRaidaNa+alb4t85bXt85//+jaOVed6Zuxu70hcaVStkRrxnARGhD2BhHEAtEqt8k9JTy6Q3SS93cRmc9c8otXZbsideXdPG1C40dMzV4WakK2xaGMKrUXjOVpozdL1jtxZ4ZKO4XNYpvWLfYz4ompcVdYGnVpS/rY8q1uyNZz4cKfTspx7aOZ9ZkFMGCKxRh2UmbnjmcHtaOCyRcuffpF3uf79667sPZEfkUig5pFH78o9pax1tu9EpkpuosXF3fLS+4uit0i5Vbhnuv2UdQKfKKUagWabXG44wf9F1txOn5+drnepS6jHDofpeFbvpSltnuckBFNVcJgK309ipviMS+xu/7/a7t6IvPr9uOtnFroJUMrtNbUNMQMVsENdhYj4lo3Z2nEtyYxlvP66vcn1l/YGBqQ+6BaTdsZNTvwBE/0BYG5BdN+QilZxnpFn/R1EMM1Xz51qjygmCctUXa2WJi14+6sTF/wiX0vHzv15YFSaMpWBoAJDaC3HSlER3HFDsm5xFb+5fq9L0+ea1o/upSntRRrlH4USWtlJwzZfFYd0ltMgU6Y+Sn9rHyLtq2fr+n5fvWmTHvctbrZ/OyP1oSx/dSpBlQGVYAQLlU7d0jWW++QnEtMs6e1c9+f2riy6pwfQW6k60pn2kybHKreQFL3IF25gQgdE41FTO+qi2Qae/fuDRMgBEjCTZh4WwFGhaBBI0mFY+iYEgWNR7HdSXFDKvkWHdOtGW8f8+QuTh7i6Y/8lNcXH3Zj/8+50Vy1+x3pbIvF/kplARoVFdQAJJeOQkhYrR7wUsXitHj/BFnWNzwcX31Je6HdcYgE+1U72K8gAGmrr6rTGCoYz5xtkW5lafPzbhDtOFNzrFlmyW6fjhuNBlSgQkHlIymo6kce+WXKw/VV70+uvbJx1Rqkm5kD+ZQN9thQSZxKRVX2MAgrM2Iaoeo60ZAAGEkBodlEwDbThJgQpVEcQJ0AraACoS+Y8eWZcrmcOFRb4XH39NibevxtHvHwptvtcqutbmxW2xBgZqBkIyglGgKxTXGzH1OxsZTpP2VVpwdsGPjB3jT0LgxxCcqxpVL1gArxqZzJL7JNHVW9UeV0U+a59IHEYELFDFaVikJvVk1bcHNKvIo3iV59gHLcyK4by84nNyI3RutHbkz+E20LqZ4OCHaGxINKXEaoK7RKSdIAamyz4wOgKAEzQMgJCo+bRw1U25VXtKq7ja7CErVFd69s3zjgxuTPLvzTBZfE9oVyNwYf1VgqoqGgrnh6eN2o//mcEONlHmWbW6FhJFaJoOOU5adoQ07VOmhdaP3jie9AML5K2OtCzSZovRmmPDmJz/RDVtiitXqpj+YLlxxL31j/dLA3+U+sXekbbEhsZDYzUieOlVSkSqpkSJIamAo02IbHFbSKKxTWITONRnm8fJN2G2e2WXurC0h74UuVafVTEu/cZpMzoIWIX7W0KippSt/5W+Uv2+vklUMpzxSb2fVh5uBPwIYiKINpK1YwQLUIG6/e7u0Cz/uMtvHzPT9j0cCPgZuqVqAIWlOwiQaU0go0YahUc3ZqtrnDyDzJjXE2ty48nfiN9kT2d3KnZvXqAT9yh4WUaEGbONp6+1nFLodusR29LQMfJDZ9myuqXnrSTkoixl3Ko3lcfkOb8V/IiC56Hjl9/7w3DdoOI2safIkC/y0+/glhpGNoAWIMgIJS3lXxoZSRzLP1D4d61nyJJB22U5NYSksY0wDDiKvGNYOK7HQ4bu701By0XORqaKVLzlvfy3ROnWwCgKJmczSqqQCtNWgAhYZbfcwtzcW3XN+0lp2N7w/3LbkGsTHcG5lLBlKuk0fEvllkl2odtw0sQXXbFnnATeekNuBBxhNiadO7Rn36X9UFZ0wLa8uU7KK63pz9uYkW/95SBmKKKz6pSBLWntsSI1EkBFBKPJGc/8/H+nr0rMXupFds164TYACtoDECyxxUJTkQGq82r+Zo8dnZJVfN7cKHA+7lsp/bVwFoNllIBRDqmqagMBU+AItWs0o1L3/ikU9FrusDY+uC49H+gZ8hcL+V99iO9CiXdiGb7Wi9ejLZhqmb9jiUDffAaegt2xaZXf5CuukO+szDi+3aZe9Wf+Ky9ghDEMLulom5OcXguKUDXAyBfUp+bGLH+nf7LxzkZqXmSC+dvRZ7aNexqMKIrU5IRUPJgivhtNeqqVR8x+36A2xwffeuR/vOn5DrNcHWGJtbgCAA2Cwo+mjaookTiHdY2Qvrk77pRfdftah8XvfxhW+ivSptskr4pfQEWZADSZCEpVIFlSgqKDAqCqLNqDM2sGDQZYPKGB3DjCmPx1rf6Iq0aA9lwHyQoTqTz/C0n5/5MKQNxRYlRsKRz5FRl82QUFDrGCUQ98MMQLV0BAUvsWHU7JEH/5J7wrkhj+knHY4T/poPVyqKwkJGZGFGB6jpEN8wAD5dzjZ1U2ennv9wWu4+T2Lpd2/LlxKGwdiOHRTUGqOYVoXQDNZsUil1q0SV6Js7mjuaR96rv477crLu9OhfpT/ZkB4YuCv+IJ8ad4M7v+HgmmDMBp/M2Jif+gw96hHbj8Yv4ZFHoQR2ZfEcaHeLe05IR11f0FKk+pEWv0UP6s58iTw1Tp0gsZIIgsRwwE1uyiR79vA6TJpP4EauffLBQ77cRv0yv78dyq6JJTcvtdmSIH5pt0jphOWWCYElLYqJtw5qksKhQKZSAGewD0GVspWzLNSmPScXSER21OYje4/3X3DknisDoTZPe3ijEValJJXW/kLEI6+AVSA0GJgBwoTDjuRtnNr4hTJPv3tb7lYmxoK9Y02lDFoDCIUysAldaKg+INABdx4R9A+8Waqe8QTxSe+HA+7glXKpgSQb6ktloTd45ZfvAj/Sy8QL/NANkx70MU484IZbrNmOtLiCuIXu6RJz5vg9UuUQE5OvQ4Su1kEIuFD1hsl90Z7W6J49QreJlPLDcUp2Wc1YdiL/tF99583rf6o/1Yf4YQqjKIgJkQ7rAOPTBqhCDSsFaDbd6krCSkPpbM6ymNnmNIJMXZDey2VnVXhFZf0522Zew06pGSq1oGFoFBqR1RgcJ8QGqFCx3J7sFrkbMpWzk+fbnEm/vuNlzWW+NVGa2pzP8GkAY7joC93RbFqycXs/LSZh3vykXdNjT9wh3g57Ps/lLJ8TLybrjo/9MXKO53r2gzzwc/EzPeSBn08kiRJ0E7qt/0+btrmAf9KCDkXlvU5SqjfQr+jLfpqGUaQVlUN7T72fHVCGdqAMWbJ7PqOBpYFVB9I6qZ14FVng7WKhZRA+6lqBisXDIYMVw6+ymlG2IgIyE6b57X157nVrw0pvp5oZVL98B/o+M2Ks8QUFK6EEHuyTQ2LkprRrZFqcDeR0XbAusX3zTqUUW26huuKAR9lpi961C5rops8WWuz07JEHCvpdPPtjkzF5hozx43tfHtpxX7ir/Tvott5u4T1e9rxrLS1VJlPg6Q55ukMdcsDRDiT4ihLKALrz7o0v8Zf2Kl/N4XFBEQ72jeviqWL57QOod+6hHbMAWjI0F71ioWRENizYnBVMhdue76y+PPbn8N0yZA1Xv8W/9Ssz2GA2z0Ily6YrYWUi0rsPHvyO8xutUn/v6xFZNmZDP3RVM6pur24hQBBQMFBK2ERSGg1IoBTXoHRtrNm8udlUJgogRxv6VlqDCkBgycExzbFAU9S6tktrXSzqWllbMDEV0KBQIeEgXTMXRRlvjnAM8AX+OvV9Y6PXDdl+DtMeLOFqJU9F1ZAJm7DZNQKqXSuEh/HlWoPLnnz9OsRKdGs+PSJ9LLlj2bQo0SDe4pQKlDBrBo2GazQ60MR1QCkAVQCzHArUGCEoQwABwPS0AbTGE1hpCisNhCoYdF93c6SOltC7rtz8PhDjCyP6Q8fsoKQTIiKGXItJKl7ChLhRa4wLshRao7Rfwrn6/7Uc6nn/kHAmswI2P8RsEU3QQhsUgCamSol6QIBSAKpg5EApUITaoNlkoKaNRgNxfHU8SDVnm1cAKlDo+z4i8IHu36s3/Hk81zO9yPM4wHRc88k0I9TGnIKwZIWdEY7r2Tnk2sJKi/Na8Z92xG/aY2x7XyIGpca1ZmxaXzQUUkrrGoVjICaIIgJAqR4YeZUCtMYwOBjENJrBMRGbHkRTYbTejMrmaBG09lk5BBDTFNaEo2/5wPT329fj7Ju52UW2rUqFToYlEkIqBQSCeBNBQlD5YmQDRGy603rf7jYfeWPygs6Z+7fkzVdIH0otNJpWZjAeglHBRdJbQMkKSp8ZPBSCh74DRl5BVDMCKEULSomGhCglkgQesWX8QPrUGmvLXu4/X6yS7JWThOyc+jHESJFGFWwm0DvFSfgwfzNaDJ+TOuf178jmFuGwqJpFrUDoZm2LOJMMCYAxj82GxXjiWxo4Xb7n/Mhy8Av6DNp6/k2MEQiFVMPmMZKWx3j4L+kM8Nx055vfld0dEnEJepdpBJIu3p+FGkMQPpHInX72/xErNs57Pny+5XrYd/nDj/WgQKWuEV73Y8s357aDbnWn0S+4ecN69YXPEQ6OFlXRM1kJ9283Z8Pi2KfyaDlvrj4dvJf8q/mfWENt3S+act9GqNgRO1N7xadOWSrdGUuh53/7UanLPypX1UG4IuUqoXVR31+l1NiDxdcv/LR/pVgF9wKny3as0OFxj7aIUrFzGKHZO+5Z8Tfd2ucHzlyvn715zSlLbzGV3Y37uH/7DomZ2PwP5b6svR5//FezHpKRacfKDCs+rH0ZrGKHCIOOtW++QFpn7r/c87yXmwt2b8r2VsEC93c/Q3xtw4/3LTMtY/S67dWWKxVYpR6Fm3gQU6p262BOcVnQ1msftGzT3Wc/XPDwjucdj7SfL/2uBDtT9+co0AWa6OYdkvPH/xa++8+H14Z6Mv2ujhm7h5VhvFr9AirmFIeVO0BgRb5aQKlxyivh1kE7dcaap5kW/+KCv1kVrVgoEKom6CIQzjACpbTWplFhtlmclXXTP10773T83qIn5XQ97MQJK6zxLQ0YRvAtKdB5izm/xN/09NaeZ/9M5+4O0dLfW9hprVC6BtiZBooiBmZn36is80fe6+ngeam12boufKa2q2HYtCGs7EGBD5265ZRIA8XzqDOSs8H81+dks1s2S4KuQYX7UxtQIbj5dyPL2nnHQ8vIhZDVJUPOcGpQYvdmjOg7CE8idEa4hYFtOhudLRaWPGf3htVWpC49ba7WgEZzxtGAyuU3P/63ueqnB5aTC5QDzntOueyIiduVoWE2o/LlFT0lBVBF6fFTB92pZSfapBdZmnqe29el7JK2JBqJ7BkPr3DGqXzag53wZy7XG+ue7rsA3E381R/2MDtsJUgKMOzeHKp89SSXnTqld5t8yb1eVcY8Xz7Lfc7Nq7Jd/TOLhp7Fg844muJVojYFk/zD1de3PrICmfV0FjlDoUowhFuLAS6cFgwIVRelEtUGJU6dqqrLzKlTOxteyd16Liu3WS4EZ4XPeX1atvvE9l0XCxHd+0hxkv2DpW+u+3Dfhc4y0DeUD3V1PKQyRHo3IRUaZivIBogDiTQlEmkKEbQCQgMeIAgVp2o3chki4mNmlwHL41k/LLsq03w69ALTi23bW/7vm+8+6wvBJ4Ij2r2O5AkJjalGs3fcfPNn3vd07R7zEysiB0bKmh1L2Ok8ZTHfGMaCGrXG7YohNtAMgSFGYBZDRgS9cV09EsMBBFFiAHTUDIxAiEFWDSw9Rop8HQpaHRrLCAqzNYF6muhUa6M01o9EZC2RIBFCzAjcABTC+Lo6iXLh22woaQv3mapptX7ZAXdFGiec1JMDB27Ssc9wTbZpXvHinZcULX79thz2SQ6FQYNKGFArMKbmuJ9Ya0Dh0wnh4fDwro/cVbWSVFThWJ4vX/Du0IpnvenbTw919atiAoEb0qyYQhrSjjxDayqYcarTfM17Jl/nNnPjjbnKXbdFVDl8mQR2aG97MomXsqik1aodP34cGSmwKuYE4bT2Ux+pm9EHdyCDSTQPZzppaI2VNiSRGZpabFRJow7YSVB9s07wsIFwpmjNzcieSi0FZxVpkIFS1Hapxy68/E60E3dx0t4NL/mKS1HYjhZ6QaUVXsGhujH7RdlqJUnSeuHr9iTqZDJnybaib1dyJkmUx/xzXH3MyjhghyOLSix4slw+4ANAqtNbLzCfFbnkZx9552KDOUEIPC4Jem6QLhbv99GKwVoptCY4PH541w9XsCNjLL697P87cP6LLjzK6u0W6tth1eCdMtplRULLF3l4JiX6LD6wDvDJLGr1X9WV/LNyIqxYoZVJNvieZl39jhVpBw5k0bVazcQtylDHFQWJBxyRIWsUrWnqlZ0+Kd0OUYSBJJJh0SZECxNMiE/vc9NPT0OdRem7bl7VfGQtQzvQvJuzUobfpJ7N3W5ZvsO3Y2n7gZffHnZCT+qVekOvNIAslZzIlMuOrPipSoTBaI3WWr1wdRJBy2badJfFwk2mdspWPujcYCDwRnM7xs6oJFF4QIcNzSRV5rI1pDhVWco8G7n09hXrfp9g6UuUDEVtbqIBCfH9PmhQSinGtdZKocdvlfWGLFfv+f3h84/8MPIde3getPN3TUmGpoxQSlkZnvKt9xd2pRSLirqMcw4vtE17ZAqtkWgg2cSQ6zR3nax9PLF8pWdtPb35Ix1TTURtF7XWyIWoPFpT+kRUH5A88YH9N8S03yEeecDH74XSq96qHa7sjKIakDCs4xV0DL6o3iT0HyVfy+Ia3dVnWC6+f0te3Sno9F5BEZbtAmtGRMSxdul//SnnXGklZfRmvMtm1rdXnE9uDK1N9Q2+16leHec7tF3HQqwIidBJTZSg1QtTF1uATkFLpLOn2vmb15ztknAuy+bKz49eOLx6+B+cR6npFnWtZwZ5FIzb1P/BbXKalpDFUJfy9MNbMi1OfJgf5iXCELhMzP3ISqH0uFZqbOrmI7d+5t/9/7F/3Tl75vpXd3t2ACfjy+8W5RDCuNLKYjYo91f9ZU+TTkN2vz0nccfP2NfcyqGgNUcBFY1dIzH5ai/89r4Lel012qe4W4hpgQVLnNoIuRAI0cqY8o3fcRr+FrrJOaiHPje34K/RK61n/G9XInKu/3+q0zIiamZLIqwx4ykajRu/8QWFpaYFxZ2/+lXZ7BFbkuyEwytjAc/kxrgFCJHL3SDoRmZeFmWhtzh7yc9cxuS3sOzj4d6VNUM9rlzH6VhBiahaM0aQfrrOC2eH0Cnz/CmdzYrs9u6beouP9K4by54fySKy0tdhSx8gJ1uxBh8wo9ltGr7Cl33Tm3u+zmJyxuvXZLPr5/O70nOiKBIDFnS/jkKzSS+mNpFlW3L9t33BCz1XejsPs0OX3VXCSjXlAOMQKWGmSb74B7YUOkd03l+UzRdLbr+kn7QqChSEAcWxI8LpB7P807t7SD/Yn2b6qURbcE28PkIQqKjK5ftduq+U002LTaftX5XdXRK3F8Xr2NwVEkV8vuzhgZWh5Yk78ItFiFRLtpxLv2IH1D3gFk69kyXSEjJfOvP+rXTZbe2Wxy/Zt327wDUKfgfKnAOpERogJmnePDU1dZVkL9GLz+7z44Prh1Z1beg8Kb44TWWZTxl3UhLEmvoLRycRcNJlWLJT9MRQOHJjwQkLq9j8Rz3/8J2Z8Ze2/KhX6o/4/bTTh08W2m3U7SdC/R3nJ9vV7fJi8t6351K7XXIYXicYCab7JmLuB1YUq7TwY/6FWzb/DnKnjbv9cHLliYFrDlyxorUzrRQ6VBGhr3pKPTJJNVG1lFjD6JTPKdord78q61S6pLSbpqykpCAAFRbngDHJtfT1D/JUP8mm0qHAQgCpMNIxVHqm3s+YZ34+1d+o3P/6l/mb2DUm7K+ZmBg/LLYjj58773jkPNgt8VpzJoE5HYo+umbeyeManXQ39T6yZin5+UcFe/+Ykp3xU1HANIABUrxiDkIN1JoBn7lTqbLaaUUv6j8z97Kx/unw+qrekh+4S3mpP0dbSPsQL1x9oqHlQS50cPnnB097+ytPsEbNM7/ifV9h9usfdOpi56sfW/iXX7fWv7MRWZBKpzu224eYhEbDTJdCGJdRbLp/wxdpTbmUeVryc1nws7etafcrHBF0MfH9OropqEUfpdX8en+Qv6Nl/8/xVS9ecZU3yHk6ydUOUqFPhUSqxoU+qBnZJIxo4Mp/lXnV31/54jfEpxJVhMxYEZExQGCUoqjDw6EEkrPuw48tmL66d/mnP/7TSxJmKhCZjkwMJUzZg7tMCyzm378m7UuFOzKHPnxYsgiKaWClvJzY6gVb637Yn2G4LLckkZ7TDGUb1Qaq+RIdxQsLS0HX2zcEX/Tty/d85oKhjyCw4EBNY9AauCIIQKeEiIJqDT5QTaCklES75qozNl+8eLpblgvr6WxYhn4OdjjWL1ydESoBF3bBxSuvIZer9u1dwuWUSUyz3+p1/l/8b/ZXXz/u1G7R/js7lr9KwSsu/ILs0N69dloSDjJdAmwPe5STfkm70LvFb8o1/Ye+Bz8eXNgkx4//mb9QwcK7uWRMFVCAQqPv6ylAb0YVJTn72JpHfjfL/+f9539Pz8fceLS94KClwdVVj7oi2V9uaAGqQr+BkW6w85Y+xTlVnZK8+g2Zp2PiTbyXECGiZLBSaB0ePrxXmJ5GbYfdnX/mof70xsCBxi2YFVmVEUE0PKq/xvOxzb977ZP6HHy3lW6iNbuBkqf51YLJ6X/099pk13xL0qoZK8oy4UAz+lX6aiebWHrw2Ym8eUvKF0vf2eGRI01dCTiAwrCJAyG7QjBAa40PFKoCunxSN5x/csP+p5fPuD981j/6Rjm9tlFeS3+66Uwr0naFt8fCxMbOaYXGRtqkz91vMT+qPa18GP8EEIQm5UVdIrZy/aLf/Zv9z5fOfTix7Er/Sm6lbWRqeNI3YwUVn4ke1/qhu81BX36xgfCGlR92z/Gv06c/b29fL9Oo6FsnpbNYNCilUAotcDEGKij0tBMWUAU0GMBD2nS15frE/DpW/Z8Hej7nqvet90UbT9jQW71LRa0QTEwFCAkQOshjTebA0wxbvPtz8yrTDtRHDVhKyz/XDkSAAlMAaGJCc7lkSE27NLn2qd2Ln83JFGyL60wRUUa1MWNm3ty8WxbcI6/3iTp1O4ChsHrkkp9/dPE2uw3X9LiGUlIU1y0sD8Lz9a72oM3Ze8u85jN36v4tb/3chIuXXCL0XQoNCJPCgy4LKH6lTwXokwBWpmT9HAQ7cllf9nRwxWiZPU/Opy23NeJrNoyfV0BsE2zPN/gZ5ksRG0i0IgX3vZv/sGjxkdLXZV1f8/7wyrNWzlq/qi3ok6/OjEy5StVTetep0jQw7gfOkIz0glXQBjp7+Qf7/McLfuvHpCx+0E+RHMwZgqZSRheL3NcuoNhkDZSgnzoiMX9n/c/ry//70TXvc/WHmru0p199ZSsAWoAeZ7AFBfqdAoI3DhszM0+21HojX847T2ZvnB0HxeYrDCDKcfGBROt/ejwH6g8wIiAjA8Q05lXNf/Pqb95XJBLGGDazKbu9Zx1eWwB1pE9pYyjcUEAZgDZaeHRXahH4qX/7kgt/qgkID2MMw6q+/NU4CQkpfY7PEIzlen2xmE9rJ4vH0hA1NRs7BzFAmIeLd7V5+kv5VgtpYGpW+/O2Vebu0817P5y84MLGRDp+pNNlh0unTu1vmEakQrTGNlmmnLQheNunTV7UfNbPzv9oxXZ/RCa2QgxCDzLo+0I0SgAaUKim9iCL1crxh9T7P+/peWDFD2x4Zt1LepE73vI1B6YFSVhomFPgxT2GP6mIMpe5olerT9zTVHyuGf7w8Bf+OfSBXGInhxtBQUbHp9A+vQB0YLGYMOR96d2u/4JTfPDUg05pYTMuMmdGyTbaG26L+b/+6O/lqeI5ztZYBUkuC+dUc0o0/6Zlf9uSuzNdxW0K2/RQO9IexDF0BUt24AQZ55J8id2icXMQoHw2C0WTH31q9NL6L/bCjw+tpC8oyoaclZe1wtNivLGGIa5iwVWq9dtuS6f6FDfNs9I96X14e1bu9ooNJbuiIIoTc1oBGPAB69MPCtCEalayHpk60hQ5/7xx3n95sPczK78jd8r8WRazg7XqBX6IwRfNKMd2aHo5tPLlsFN7Ce/V+iII75iWMenL9JFpBQiz5TKMiiYa/X56LM1de81Q/JDEoE1KI3wGaAoPEMA+tY+xs9sQFbFFmZZkhLj0VqKCy4I5UB8bohXBsLOudKXbUoSMr3+5vbbLE3lj1tZ8ojnbVKCaTV3UzSCQ7D9Hmbf7Lmv3mh9f06N38B/sHNm3zZf+hivXehK3By1drVdutyJ8+VGN9/aP6Z44vWl+U/fb89/+V/kf9jX0WewEYSBKmOS+tAvZcJ3DD3lLP2MZG/6yceH1VNa54FtvfNKGF77iY7fZKSXdQqh6gDphqNnWJglAesiKXAk95md8TehR118E8ImITfpzc6M4VemI4512Aok0TRyVxqZ8Ol6c2Ai7LmolFEP1VaSOFm9Oz0sxHlN4WBLYKu46sdKtlS8mQhzJamQqoji8dQAqCBQiaY3PgXqItFEK9qQ+KKVsx9eF4e6+Ql4MIH7K4ttHBFVpQIHWMVba8NHIZVOer50/n1qZWm3KlTbtRJZKo9s1Ley0HX4520NCApvLvy2v4Bd51W7VgqKuwhL69MOZts1e0UDMoiLa3lfUqujD+jQk0WRUH701xRHxevSnn/WdCy/Hc9lWgn62jVCu8wGmIJtIkDwn4tdYJU6MViE63NaEYQL6a/pVr7lek7CwHmI7F6FB2GZltJxPH7Ob7Bo7+D/AhcDoVrGhNuoNFgWph4QwPBvegKoMHxe5zrvdCW7kk69saj1qVy7qzBsTGWMItwrCYBaRihBTLMpS+0lvkEabj617avlD8FqzajqQNTs3ewDbYk0VJygcEmLCsVuljwVT4WTtpwfPRdngXluqNdKJloq88SahLLhih2333gMWosxrGk/ZcE037mrZotgtz5OWKLsa3sv/tTaLVlkQLQkG1yXmtLM/9k1/5l/m323t85GepC9Y3/Up9EhZ2EZeff1dDlVp+e7IDyfR4QMccpmjMUnINgfChPK6Vas+vPd3c4UGH7oowANCCyzL+OlXNj9sMzqFEhyXjPCLVm340sWHV56mGbqgSeCr0xyOhi/ud9DSyUs7Ix+z3/SsW9ulSRQptLxXK2REEkGo2EpC1dylNYdP0BQ117fWRZ/LOh1bN2780nZ7wnNnrvKB7ObfjETT+waFgwglUfCxeejfvr9MrE3f+//cu4asLW1ZU4759MMWffh6KzxVmRHKoyxJ7a/gUlxsjEe7sif7DHej78rHkx2V+eTc737m9JtXMlqV3dK++5zpyAsXFqrWQuwlqEcABcSjfTREgvkEBRogIoD2ISgEECQ46silHx051v979MHyMl71cngtc0OyHuQz+5nuILViO5BBwonxMPFD4eEk2o9PqhigMmnBm+VT65DDeqQwJAYGPW7BIZ5pteeqj/cKNv1ozMQeVRma3oRSfJ62xAfz5BubH3dt08lt+8Y5o+yB7S2bYXE08VSthmTMGxNLjBk+IluyU9yKH36YPuPWtqc8v6f/KLZJlKA1tcBslkYDSqEqIhtAQQupUmnW0OFzmjNK4G/t/IfjA2vOx9aBQZgllX1Ib02rp0RchyqAMcKUoAahze4p1rT49u5oPmbj5fK5z6eWjZqbNXDq25Y+lTmWQnpM1+xJIiWBHVjOMdTljdquerTnLe1ulH3Ez+W/MJ9qn9qCA/Nen/1ZSVuWdSgcinW11/SU6FE0drhCRSn0OKAUGK1RCkJQtUEp+JYeQyl0GWIgUZFCa00IGJSPrMzVICQw11zzkO/Tp/eYt7jq4WS/sw7Z56wv/jTzwEa+UTsbr3aNlYnykwAPWEgrHdsZfqqeCnbd7opsdbl4VyZaxn0eqPuBCE0/o6gncaAs7ZEFpkU3ufiXb0qR5OhJVzKc0gMUcJllXv14ahdW9QBKpbI12dCNr2PLFheeum8fQ+6Uzp3cj77VDZr1orhGBtphhz4Zv2r+/gfkr6w64n4IRlb6CTXQMLpJSNhsKoXWGoPWPh0nyeZtWtSrSLvs3nSquqPq2hg7r+XR2mo+7koZOXXVpo4eBtDj+wRVX9f8wGTc8NZrKz4e3XjpV4DVxY5Xy5uTNe3t4myJ+NgzX/eYYsY0oH694wnhlWWPLueb5JCdTYtM8xhn3byU1kqqLsm2+/fo4sS+ffuKkxCp0IRagwow1DQBqEEBGKDtw0ABlAcl7FQFdIGmagYwJt6aR4VVVGWZyWX28z3/fHKds9Z5tf+z6+QzPeebcTJ3EKDA8GrHAkrXjtZGa/oLqbomi5EWTroTPPPnMIC2RVztqq7WZYx9jLgRQkLNlp3C6V88a21Wi0axBf72q6Sm73gdl2FRbM1RxZJTaUsDL3WlHhr2gnNgVtyle5+eT+7Mrn9ufaXrKDgEGhQ2zaYK0BqMQl+J3oQaAjRxoJ/2pRbMuPtzVs2/lHGcDZ9OiVcJnqYL0GSwAqUn8FDtkoKUsSkFOV4673JgVebq3tzee6OmvPoUgZ2AMBE1Y5FWnKhJCLmkhUh+JW+6ZHuK7pDnyx/zgm3LVLVNdP7sLeGq5KJwdJ3QoaKGQdcIGaQhBKVQAE81WGkKdIBMAwko0ABqTClqWheJIZqdnVWz6ogct+W4s+p4sj/ZmNkf9Lj6QjnkYTsU7okOEXEMOIhRxyyXNRRcRrT7NQ+KkTN884+ti+6C/l4dlB2u5SKzg3sTlBBtZCnLkgBUgqt0aKt6MVhQb30FLShE+qLb7Et93XnLn+cgL9tfwGxF1ej7nKFFRjOM+0C7pnCFB2xkjpkssG+TP/9Bim9gqKAQNmLQwqJjKwGlmgq0wMUCegiXqOasIJ7odee7l+PuXNkqrWG7BlaHJ5Qkd2CMMSg9aLCe03paqKZnTXJs50yuV3vfv/OZn0R/ZI9kZXs1O9OOHLuMmkbHLSwYKvVLyVNVEXiAcvn9cwuyaelKp6nN3KUyX3HG7cuude02klakduMCz9WEcclEsVgsahRaA0w3IdQYwFTxpwAkoBRIoALVbCqlpgOFQrIdmdox9Q1szJ3l5w/0D+XO8SY3Jh/Tsac/vVKx4UPGF1dUYw0IgdFRButGY8aXZwbkv+sS5kK0riS1f1nsVrE9EosPt5e1DY8Hb4GXfP8pdVjXkZIMmGTUeHSbZdrCor9CQaeLqCYyKDwV+dpt+qbi5KTWW49K9n/FY0oNB1wiMMCfcFaySS4zP/7Kaovy5943GQsDKhJNsh6ZaiqDIkAkHertmrmJoi5OFBi6nv1o5HTlDzAwOBh3d+5ZNzkj2uDn9FzUtyLRH/5bPEeca645fFgpEAoUgCi1ptmcesiDHyjZ/4zv9vSuVWItWv9onfPM6dUZiSt71CVxq2bBJFSoA645jqiW6w3ftNv4jHKj3DgNmTb+JhmqG3Kk99Oq6nz95kckNhAOf1eSnbDjY0MUZBObZc8elAZ0CIoksOSYgMFuU61fnKCaU+JVogZKanmIjH6HsIrPpU9kTNa9nMi53vbv6hedTX262dAX4ybFq23X4chPJWEU2HCYxJZA4wkQwkFFseQgd7+5Y2/IlnLSK6blTvgFkPP3r8jmjq9SsOu3INi5KmxKdV+f3pa2qLfB6rouC0DVYk/6My0yde1ff4XrAKW2AG19+XSKwzb/qyz5ntmBH1T9FNS3irGr00manovqw3DDYMkA43mJB+fkNPMXKRzIl08lFB275JCdOiyaybIjuf3p9X7cf+Urv4tcchmNl3GKvj4HXvTFReHol/97eVVRVxPYh0dxCQrUZk1NTQTi456P9/fM2rj44rg7a9jut+qHrkhREuodEvnJot5HFTZVZJMaBSKhQREEBIKp5MYffO2HX1idbVXkh/IbfUu2ZMkOVbMIkwmbcKWaokqdhqkbYuI8HR/fO/lMR9hyW1G6qAtkpCWHZ1JcTHOUYmebpPjX9tP+fYmFlDCCNTat6L4L+/v7AbeZbjZulkQLmrMf0Ffl96nrc2+d9rwcz6Vd8Agv/YCTG4L/zkDq/c2iHTt2+xUS+Knozj2HPBCdhBAINSYG7EwaQCn+sm50SxGp9ri97dRSMD9Z4Dg3F6R8iYypBJK+dUyY+LA1+vyyndssv023pLWuL1ltJRGARtRozDcyQDaf//HHCWi2wJr11YdEpXP3/b3pxAkFbK0RVWaupdXQ/CEUhgO8pI8a6H++x2JY3zxN/gaVQbOS8+mvyn355PoP/+2Cy5M9wHf9k29/Fw/IJ5epl/m6f4222YHbpc+wQ/r8z7x9pq2sdtZF2Y4mXkUyXt3F3FU2m2y2ajbFJ7+nv/KalWPj7SRCyR6q+JRVdIk/lPX0NzWHjS/z2TMCM6sKoShqUTI4CAgQ8lJXfdOSUxlb7unK3fvx37MXTp6GtqlgEsKkFZPcgE/jCfboBhYBUJXq64S15NKXz7U8WNYO9dZ/hXc+/bY0dXk3saFnNuYVfAsIVASsidybwmWOSeOk/e7p9J6BpBd6xxuhR3yer/ErdV0/4Xdx1IPy0GFs2IH2R2p60gPJxYeEuMRPR4QJoHTZFwkKOAhwLKzU78pPJT913XKntDRyye602B2Stwp3y8NcMJaszwlropwsJV/m+S+PpPc//vJuE1OZ1yudl4O/0abosuy4PS+cSnYJQLwFJBaelG8sCvfyJ1bIHbIjB5WItzwBykLXFMPcDTEWpi3Pt90Dz6vf8WTvmyb44DAo9KAfisT1dd/9+DJoVdDjlm5xp4b+fpN+on4jCs9wqw9a6dhVTCT6A2s3OorSxYuLOosWv3ldNqvOmF/jIj3k5gnEkYHl+rmfH1q5tl5Xpudy7F0YNnw5D9up/3pbocfY2PHn2UN2BLPKaKWQNCgtsDFAoxQQACLymSkZQe+vm1Zrst5YfPmLdtlrTlf1FnumWiMqjYeHdKgkoKyvVYfQ8SEUBCejPZXtJ6vXtlnmCxNVQ1XfML693Dhkw/vXKULggAK6A45ZkwDAK5N2Mn3ZXo/ppaJSVGnrVFTdgjwyUTWaeL+Qp0zaQk1g6mwy0q44TpAwuNYQyZd98w251s0DiyO7TGcknW9+VdqqYChz70f7VCxUyX72cgVI5ueb/fRfNrbPd0S3qWlttTJKc5w35klLal4vutM9NaEBYi56aQo+oOWrbMfX++Fn/41jtAL00HG1aRw0qtkcWsNHvQjSKBRmUpF/6LXjL91o1pftp8AkMYcMGnuIxFRi7bv1ef8a50tJd9rPabn8LFbYYgqwkfhJNbJGe5lGYFEEVxRd2qc98+Ocqv9Pl9HevPr433LHjzvrFXu9Ib4hsS0xuVkYAoOGI+/10eKT+3w8+PpnZS/8Kz9Sxt4nNCCsnMqSX6n7pDXfPyLX/KJl1KKwzAnbrAqhWGTowZigCevN/7CrZBn3jGvnv7xv/ch1g/yK63m1nb7tG678d6pWsr9s4IbEIqrCfsDEUAXehQzGmQGqCBTXy6F2LjYhGEgbsIYIBLIliIBKRVG9EVvCIwo9UZ2uE5HEhljPgKFSrU4k9Xprqu7DB/trpKUfUUruhLosnm/zQke5ta2tXiIabJdYFXqupOeK4xrju70sgkGGIwdOj5Aef0qkVGOYN723hbWlVDL3v/KSfldxULIFMIawPa3t5u7Oy6eykatVauVYK6UZ/mDSn5SpXG5A6aEod/ydffWVyw9eKkx7inQpXaXYdWk7JORWqtGUPpOXmxd8+4vfze8eWqve8Wxf0nYJ841JqRABAWgrFADH+HD0tdqVarFXZBd1Vr7mjqazi7tenZfNyvdYottudA1kjOV6Y/n//9B9Ild7OqPZgRWupDL2bpOVT6Y9STlfSi4s6KXOzfaZppqr1YwxZmhIYDAHLLajn5SULbmurXl/vKdrRbIx/L3Zm3b2ylCpxH5IQlUpZGbKMEp4gjDgmIGTMNN6Zgi3h5iZQkYIsPRsWgFlo0hAkcQkhMkMsZ7RIEyCEGy45dGXhOWBVlJSG+kOFkZ2y6ffvCb7O0S3iJaoodQ0Cq2FTHPUzoqrYdqUKVhpe7jbUdflQhrKSukSXYX0zSs/FOl8YBRMksExFkoWwei0u+cHrkf6QuUSgNoKJm8U4+cusiTxKENuQnfWxUgTQlHxJR/Kotszto0EDlWcD6WO/G7uc3zg3p31s1LoLTTAXE7hAI4NggQ7BBBnlHnTQHPeyv+1q+o7eqUzbl90rMuosy2kyO11Y87WPz6+6uS+KxuiWZEppCqfZEx+EmZTWTgnrJKest/rJyUW/4QZyj6Lz9DGMJx7DTR3+MnHZmX/O/0c/nrTffPG8tPJn9CaQd9goCvlKQOJDIP9SUhoAbAIApnYoD3CibB+Qiu2Qq1QJDF1YDw2ZU0MCSpq4VFe2pUcC1slrfhUz0D+es6aztptVTSUNhKzZAgHQlFQo7VSTe3J02/UIaOp2n5FlK7ZTNucsVgIRHd/KrMWo9AWGIJaKIigbX9Lx7j6t5mzUS9TGtTwPeAGC7blYllrAjCbdQywXlK8S3VAnVz6zWutya/UZQ9efnzPuWwXih2KzQ8YcpIWHvRaDa/gWnjiknZxxyeTIinoO9vA+BTe7M3pzMgHJ7fr8XnVi11lqpCy/Fuvm50dY+njl7SQlMuUtRmGIIAd0zWhQXrPf0a8TYnNfkf/r9U/HX7iP3l9V1/Ql1wTRapkuyuo/Qk+ZcpQ5UTAVh+iKet45tQMOkbHvtEmd1EZeSGjw9xd1fnL839m2e4WLP723lCqdEjMBAGgdbGIBvSsqHk1jr+xAerLyhBdGmbmmQ6YziCfv+w/LNzx0epqiyFEJJ0nqbZ8+vaZ3vORX+MNgGYrzFPb9bdZ1DoMGbLIHAjFff7v54SgK2qGU13z4HuDDZFpb5lgZvMChhiToKjWLcNcW72WGBsmOORAyndTJWZcfkTDFf92q/Aa2dDN3qirT8el74hHMQEdMxwEMCZECVPrGlpNzUr0ElWiPeQJ+dP6uacTPcHGyIFsf9Jcp2OVPWyB6ljdIbx81QNETioMbphUW4UitmA8YsM+wILDCqEledBruIXcBjH93IVOmbvgBXJHZf6Gxfennd2KYPj3FhWBhUXUCUMQWqsxtCQKKAoRFKUo+sjJx9iY20aa+dL95gGYbe+8t2ie1C1JuVtOUrq5xajSQikr/WBnd8ui+VLG1K+SlW1kHG8NGWDSctfhXFGHk2ZI61UCLYoW5tMW3WHR3nYrgaGUb9/T3vOqy2dyC+6ajvMAS3kj2KkCAZsbUaXOfur4ALAh4pqn3F1mfyWkEiZ+ijqmg2U8nqJsbInr7dDXFK1RXtjJ9158IpipJCEcrlDNTtfmihQMD4eSVXIumAh25HJzzcvh3mRg6GefX7WRfNA7g0jZ4cr1dQkmj11fjarUtwJI4tiC45oNi3DJa4x7lEs7dIa2G10bfjOdUhu9WDHv9nWZFv+wUuJVhEPhYEL7hFNQojQnSaAYrNHgobeyP+pfLm/f9dK25W7GtyFOIK6hbW9yRPvuonAyVddc5CI+NMS/dwlLWVq6/9BP/fMvgd4aokst2eZoQjOckkLSgFK4ecVLX6uoUeRWz9rnkO/TntOTn4IzKCmgwuCAYfaUULk+xFy7OzYtKoQVCmqMY/FA11o2cALbeTkLdhN35U2ueXhI1o1ZSBgWgiBk6uguYRRjSAhDMEd91odOTSFoMpqcpwN9fe3xxBrkQNKXmevqncMaeGCsdMwOgquvj9gatSAVuqY9OivyJmn8dechMsXdcqfirJtXncOqWNn+uImJ7ftE3iUsGmLKoFQlCIKAwarZFDhmj3A7u1y5+8fDf1k37Ras0ryauy2Pl/vy0hAgrElQR4k73pNcuEqrcPhSgAgiIpkQjAlKTdFMfNjWdi0WaZW5GKW3ghRwoG/T5rCIBQ9Dvc+A2+AUvf0wwzl3S+bVPMz85JgVRgOEGCRhmH3hlTZTud0OVyqhJ2iYOoQAtdinkzQ6P4vj8UCS0jd8SDL4SDtCr9vTybnF+yd809eEQbAZCjRAQBAye7S2XRMnEGKAOCaB28XrVY98SxLjL/ztrfrxsXx3H3jl/+0H/Z3t/RS8VACqoqgo6qXw9rAM6EJXiChzT2ygDNoSsY5rsW40YvQS0EE+1w64q6mtMv/NWdksiy+IFsQWPkzCvT5oPdxADFGsaVCCgIDQKAWExVCyiW3K8eo9Pjx8n6tyaW/14bqo+aVxuDwQIGhCdtXMHF4Xbgl63WToCQAipEJDJIqACIBBAALXpCx2bbv2qfyKkjAMtoK4danFTmuGU1zWjQyi7MgW/fH7Cq310HC8c1je/nStoWu7TahK+DIFg9LmGfCFcWtSuf3620OqNKgzOIlNuYwyTj/S6ozBM3nVZxQ/b9HC31x89rMlpqL+YwvD0AxCoQaBCSbCSlv6bABikM3R0dHmrDiBajZloQ+TbE7tta0/PdmnmgXvIQ9l2Vww5iLziZeMR8HD7KFjAIfoCJcBHAISRXu9Wzp0PCdcKL4jBaWUHrnz60vBjpGBO9NpS3/q59+e6EBkFFYrDxdZ6GuFEoSkBZ6YG1cF1GlyCgkNhEYppfciGXKpctz2j825trdffrY9soRftIvSVJpKfGLmUd30zpzvLuAYFmp9xSQxJs/cn4piwQNl2uYLDLQ+hhg1FoQhgDGBAV0UxZ+3Y/Ojv3Ox/J6FwWXR0KVEXjplyz5DV5TSQzt7688z+ww0pbCKf1Qey+G9N/hQvtjO3lo3+z7+9AXzrKe3NuJYfiEi7WlNBlFCA0gIBxlgP1AH47gISmEjwPhkgGCkYMRL8TCVcXrZcrKzfGXWoqP4nA1v5r0KdqTXH6FEYajGGPo2T7GjLy5RJdoOyXrkITLaY3vPD3kjP6Zc8h5KgrRDfSv55JUfoYC3K2qyc+D6L3z0tvxwPUXez997nIZ+uF/fnZZl5/0zYoN3I+xuufHGh8/V5m5KiijFYE/fSSEgxDQZz/bp7H9/Mu/pOu7ItxaUJAiCON52FFRX/mrajK3/P7+/dQRK3wkksZ0W9FdddeSwqBMsTqS9xBDtbILWDDaAhg/Q0ig9fUuzmkZYSWSGjslDLRtFK6WUHpI8GOpBlMsdh+eFRoeaAj64R4uv3XNpGwYZ5os6IkpIDGgGhxRssJl7KQGGKT3NAIlTxusLmv26XvboP8p6tpVPxz6539U732dMIY0etKWOQjIuw4GwHW2OjQVNda0om7PN5uNkzGWdS58T4COvXqUBVOHTVlvVupvmVhIpNNpocV5Emuf27ZvQL3K0SehH+GFL0koxSTQshWcAEoWWcCiXnVXnBwes+myXe2abImLbqhVxZeZUSj7b80Np6D9OQiC89dFyXl/7eGAg+b07ioX3b8rtqiJh506KQtXY/KKUhbbs/Pmvq3WLuWsrcCiHvu3hNZRi6IHBRqrv/L6mUgyj+MwPbudjV71/x0Aqi9zhBInWYtq7S1eSmJEMpSbWVeo2lDdlUz2pjd5J1nc2exTDKBas2eJvsiKuwAOqbglDKIEParvYqYwkisGCXwFXUhBYXaxUBb0PzeBmc0L7aJM+ksHRKBWlaE84oVgl6o6PRsZ4A/hW88qUkRFpyqe2OaBVo/HDbTO1ffFmZ/lN0zR9AWEomZK9jO2+z5dWPD2x3HM18lfbzlha4uzXzwgrSWJnRsWiZijyleUb++sftrLSrpiht7pNbOrhDG9oEhkId04ftSEFca44+1ALlui/T59ub2Qb8zVKutao1SGsDCVidDNGMeP+sqpKC/31dSI/qhXOuodDj266gVWwZXSZRG9pjEsIjSgBH6CwZAhVQDhIe0gGr7CfbTaLgqGGUUVFAxasfCQRoEfRsTDXlHIDTenXe75/z8ox9kZLHPr967ccVYptrZ4mftzbXgQEX9iZc4jkDZ565Hez4cd7v/vn6F/JZvVDf/QcI2XRtU+v9TeKc3jMBzdVGXIgfLrDvvfG/kJeCG3RQ8e1u95PsTBGa3xCafNSvf+Fvw7TAWCD5p3m8no9VzP10J1HbnlnnpSWVwcZthTVKo21WuMhQ4wobIlSQOM4pHEFQAS0sIWH3Jln9tErMmSdiiavUFSXjloIzZZ/E+g7AR8KMEJhQYSEDN18erBgoEERU2JwxGAdU6LgBDzlx2ZnivjB3OPTgXNXbYje7k0i0wnasO0BGhl5EVNu3np8p1fkTVDKfDT9L5de38Kai38sY2lofx72admS2bHAdosPJAdROM7QjeSTc87mm1xmFJSGbzIyQjG8L2TAWZIDNzebDL1VpScmxItEv9cRXmq94kO1kw/ZDm5PavEQEhSRLwgoaBgRMIKI8sy1HuUy0lH+Uf0za94fkvm6v91TtRgWzNboU+MzUQScBPaj0IQGiPuo8Y5WlCpOKCY0mlGGqDXDf+hOJVl/1Gu+u+c+q5at8jt/DmcgQQraQ0OzzVXgMzpM8yjZfV5tP48oQJg/svs8vW/ZSnpRptuWLq5WrxjY4G9ZLAv3yVislaNIDUXdIXi/1C6Dzul/lwfZkB0avs0sDelLARlEL/zKT7xVqaGhesJn57N4jIeLQtSdVW/bsJ7fmO6Bnd5Sg7cWuM2MfKgSIhrXuvQVT0mHHzbQ/RF+935898DxE+1lt7TFT1LYEW951wJ2eggQM9QaYBR0UaEHMVogLKQ1wxuimLbQyzqWOvM/b9798di9Vr75l00FY56TD1woKLHtDU+2DrqVpZB7ePOTapI7ILz1H3bu84E1XbJiB6mwA+OSNujijYWvc5Gp6/aVt/CBYWUdY8hKC6NlrX/yHl7krdnFiyJDNSpwPKEHDWOMwgCjfJe38mYeOG1MkgviOIr2IF6tw55zpvvb5hc9aEUpA4iaZfaNaUqoio6BsAKEmGDQaDIKjPWoe9g4PlQCxqM0FqGMZ5rwAnv+m4XTd0vb7cfI/ebf5JtvAdTmhYFt9QrNkFPoFdZcb24iLWSsX/i/H7rnaKudV3umlValkp0IId4GVfxhcX8KfVEdjv2cXEXuEKribHf52h5lb7oLcjOTyVZKHK+mmc/OD7LL37dbCpvgKcn3zQZD0SikjObffSz19O6eqFk0p+u6jjFGYKrDkBLllJxSeVpxeDZ3tnYw1MVJys1ypuXiraSt/i0+/jkKjYA7jtwq0SQn2ZdPnvt8eJln/6i5Nf3eru6M9tSwkvgZVagDMxDoQbphKYQyLergwRpPBaA4X7HFGGDp3nxjG0fWfmB/+W02RHO2qTaHkMNKRKG5KKMxXO6wOph+MPKy9T1499iamQ3enGwOQINPRZTZFluDrllrB2/g8eSH5ObsyNCckozDwmKV8Prf/k5ftG5mGBw9x4b3D6x/qiV9hxYwdN287vvYjbGN/I7qmmHXHbszgtDDIxJjLcW1XmSRMX/nrjcfeS8+Fxh+NRtegQgZV2S5vOLzfevnfCOrMnpDlmcq8q34Q+KEdXW0nsQ7Y1AaEGpOiKEepQ3+hmrAJKzYdM0jbkmr/9P8+i3OX/p+YVMW6mxTqc0p72Fr6AKCqJoWIUpv3f4dnf9wYkO0vpXsUBp8xVmaCEXMttmO5l/Us9i/bjhj5rIJ+lnJgxQkLDXS7Rvy1FxealFYt1wpC3pTXfW79+lL9FCUUk1hvIUz9xc2Xu5fFa1rLHtNdTgiqAEEAQjZrA5hDNgKe5Ode5/19hXrcJtgIdHFqTDE9eqoXS/XG9KqXDb61vXlL4+tDTYM1g35a6aXlvLcYzHvrEfEwkQI01DzhSFqRTVRX1WglaZSD11x0JZ9dOJ/5y/rX/IPZUoXUVJ+F6kIcuTxkhO7tQufT6yA1qb6Uzd/KZN98FsmYpvsA2Dmmt4ryx4fE/WO48qjHms++QuXZJR0lr71n/ogYTqUDUMyKLSp2mtvTHnrX901NjEkFEKKEuWH3OXjcqJwxs1VnVGG08xgjNZaBxg2X5kO5rZcc/tOZ9SWur1LOJr10aQoCNgbTKqmVfnJiNJdt50t7uPlC47H3IU1q/t6boAdttfeGZWOBUTTwKjGJNQSpWqAWs03+xaelE9vEBuyX/v5viMylPXu7fjM+2pNGiWdW+W1y2r6La7/Yf/qayybw3LeT8sUhagEn+ay/dueyomXmMQ3/ySza5N5u+mE91kIRd4gf/6qTIOF+oZU2s6w0zaxYJJwEC0btlMVNzWP3yBT+TgYBq1F/nkvvjktL8f+PNxsVquaoXUy2rrW1NDasNlTqC2FBAZjwb9yp2bGWHz/yms92kU/ECQbevqIEjiUaHfcLNkf/fTcdWvt+ejb/5OuC/cN7GvzR8tn9bJlkA5IISOH8aI+yMCuUavFz//yCgFTIBYx50t1J7K+c12PVUuRh/WbM+rTqBbEaTvSdPWdJ2/Vwrn8a2/ZPJ+6AHwzz3SGIkKIoBxqte0JD2WSZPLlV3ms/HDg0X5UisWhIXjG5tBd//HAgXGdJBAOGteJBd8u899aNhR8SA1FoSkrS4NU2dcVN57TCYtVHYHpkGAccpyhTwGUFDEdxDjKk89odLQFKdUtGgCwF4yvHp9hZYxXAqME/TMeLaV/P2Td2fB4OHfu+32+0ed9OV+VUzfriXxUG3agt+6BOnFElaAQTEjSOFjbJcw7y37YW7zmqnXXPP/hofzzpx8t8P5pK3ui5s6++/vPG53fWX1xdmYgtNsvOa2iio6JymXNtrj64ey9rYNeM0LOY0u9G3NiTe6NbKNr+20eeQ8ebMPjbFq3rvegAbrWvfkusRDUoQBFNfXxp/32Jbtnt+aTndRi2WnhBHRYDqXhDIZC6yENZyVKGt21pWr9gp5GnyLFeKbZ6Nj4FUU/3bTYxGiqHU0V3vplfpn+fGPl8b61mPWts54+PzbAdNlSgHqrziXoWD8kSWZ82UwndQtOu9JD7V4zXtd6rnCtfH5ETjfd8tUtv9/VdQ+IWOgRPCIllkIjXUDYdNIdsy1evenFlTc7P/SYh4fzQ/MWnp0Lh0CIjhPKcbAtIovIma2ijure5ab0TEFe9qWYoZ7lr50vP+qtf5+GX92HdItAFzANjQVPvPXc+KsbmptSBZSuBVwmKL4NM6elR/p8Z7Diy5crmzKkbezIKQ40wz4dSEI4k69kq1LNwnA9++uzIYSwv9ls0Fx+ykC886HBuGQp7gIPqS0JwjpKOP8cTv/t//yMN7zg/HKKzplc8yrOj5vjnRPd0EvoILLXxvkBomRnCZy71O1K/va3fs8bvOP1L46kr3/RUb9Z9ou/q32uPf3RepYWBuGhQSEFlVJq24VrRB57J8ukz/plWr62/qeD95rZsGj9kNW1DUuygpKdUrpKl5l++9niM4Gs2+NWhodkSEqyildRW7D5nkyUm2yxHxu2oFgRAY1aDUv+O/bTGXSn3f2wPzJGDRKfk7BScQzU24ctz3P/8oKJ/Ia8sFLjNPQWseahUyottoqfRYtRUJDiVqv1PI12p079k/t+V3pfGxOYMBzbgSA0qCEMtoNmcbsuAtgyN4Ax1NQH3RS2I5/vzcHjz/vwjgtHW+Fpz/P8mpmBA+lyAjVKCSMK3sDp+07MSoG3+sAGRC8iv/zdAnyTte/Emv3N3435tpSQKB3TMIZtfZwwe5Vg50jf8XN3f3js/FlyxV5l9ahw7MHwWls6g/NUu9RV9A/+zOcsuDIM4aWyjlOXv3TgGyzS2jUzWaGg2mXmahfn6VSWdP8Ly+cxelDvlaLAZ8l2X7dpfqRDmDaGLVXnW+iEgxbkj8WBcUv00r99z1zVr1/W2dd0+HCIZDVqHLQwh9aUJDQ1PQhMDFdDLYDpKYqSvXAs85WeT7/4Y/zDPeLlM7ArIKnVEgqmUBXQ80WdKTfcE+pPrP5X3ukPO6bvki//8xWkDJoq1kUMg7XWehuklEIXAfEm1su87r9cvfvjyRXe1gwyQ7bLcklEQu/GU8Ktw6qRE+3yQob1xYft3sMwFF/lUn8Zp0p69NNsamZuu0+rpAD1Vs1c+souZRd767as7alhHIdhr54XpK6eMZ2eB0nRQbbkq9uyNdqCEf3y1Rbxsl+9VfVW9Wf683TOUgkxwkITQA9t2IOjFNUTv09Sm8ybCzc/lut/+h6zwo42RkkXiOeoGlw6odJOi/TKLmxndNVvyLy65ZcvKsJu374riyUzCK3ZFgmqQu9rPuajkTGTl427PRy7T6e3Z9vIVKYftkD9pE6aXuUdVWPb1A4tujnzeMsTKhWGGiLR57CZMhzIo+pmpqE1BRMLNnPExgMuvWG+Yq9TcaqAklySww7csjCzk/IqfkGoLcgecqvQAehgrH3fNr6iI5qX9CE2Xk5+mf+2WcOWrhX4wIIN70w0qi0q3+Isf9EX7fPcXk1qc7XynKZS8FI7Azsdbtf6tr70j+e5923phrN+dU5sl0x7BQOKTWVE7GJbnc/qJJZJ4Nk3I7m18Yf7ly2s7axycqs7Iu3QzmT/DDpt+kiBGhotlzrXe1A9ep2FckYS+3ylGE6DnePzccwt6SM94BFtaqhCYMFoc+l0v+mCz+/zLmsfbggqCJbDER+m3O6ZL7U15bb2qsxNo1vKfBt1C1cKLpYwm/Wa9zVA+fJoWitbrZhKxSnPddk2Kn83jxWv0jo4PDxCK/SmIjspZAIClFLCNFrLNyHf6Bapi938tmz/6/XMT9OGMiAF36QTFGh1gDdsGSCp2xvsyR3NSzd6gbevyW75X/A0wUzQT81evs1qPuYxj5e1H3i+ec+nx1f27FnTHnI80ilxfJAgSiGapN2Hv2TAAeFrPECM0xhtN8+Ib3mWDGteeuTfal3LgxaTKtP1BEIMhKBbl9bvlHTPzPKHg9/at2EhdwYU+LTum7f/lOkiKRzclWwpTFFENhtn9eotxEFQ45RCN9HFv52M2pE+M1qHkGX+6F+7cCAYiuIwSqkhDbMJCJQ6Om0QxJW+npavn7a+fGbWaravv5+LzFvpZ/iKDMMiJrJSDhqqA+ct1NMYC47naHnCMvqr7EnpjU7bcFpj0evT/nr9CbNNpbZVgoksV/r8sz2PJ5efBmtW9TjtSSnwUndG1GmNK9JWrvLNpLJQ2uhE2LJMd35Zoq3msNjZxKZrloNra8ubgjrV+p1RmU3XzK5aS69a2TCn9C3RXNA31XAclt2u555eWMD0inPFY9EWgy4UkQ29Y68IUpxanYkHeEWfW92XfURPeu3Qz/S5bp6Vde9b8DizchTNbimAZML00aPNos8u5qh8ObE4l+r2v/T9p+OTbRzlFQOQQ9mpGilohYABc9Oq6VoNGyq50ozV6G1ymqTR3eJuTz/bc/3vcv6ELJf/4F/vI6eam6c2pQpo9BbXnHqiZL/jkb3nT19wPnmBct3I9KlLdflJLtVBqi4xl4K24DDhlaX3EpZlh9wpUoczX6asaWUbFvWk/HV7Le0OypOVMJycrIMpFGujTR1vtPXRsqdr0idTik0r4rHD4vEpOYfbF4es6uOH9BaTCKqKiPTqWxigGgr1werFDl6PE3yHv721lmsuJ05f1l6oPuncrYjffJpw/WnNeEh6kNJDU2PaTB+d1T6Hcel6K5+yvka+7sJzfvHs2fx4x2bY34onOVBC3WY6UA3AZYAKBUPDTKPRuDFrpdNYilxEPdf9OTnc/r+XQLS0r1BMBaVUIaWUQmtJF7U2Q5oBli887EK6vmeXB0nO3v4blutO7/fvWY38jtayvXKW2CFr8NTkA3QBNuQDBmu2/bU519TWOJOIvuCRz7Ey9HA0b+1/+cTrOT9wn+7sijOA/Uk4g08nxIAmNocUSTvb+tSK6xNnT08JlgXRDBfBg/kCohANpOw+e/vSQthiZM1smQ9dq1P1XYuFKqO6xKK7lOZ1O3v1zV7LP8oPdhH8XGDx7cty2P1NiXbti4EKEGIGAao5HIMNm1RqVhiyX+3+5VvuNhwjn5lPtbkARZBYCVCsnemW6N8M7BpdrXSbTgNn7M45h9uEI2E3IWFB51uZ0BE0N6E3oSVjOIpXEv3//MFSe2/e6MXGqqdTF8zKz9mLZo/qoV2fWABAMckmdemZvDRfsg1n/5rgpnCuGBbJJvO0//H/3+16eDn4b1+W7IeQBgU1wCGFyhrq1S3M01gwSpizmedQ6GmMaNRmty9KOkM16lsEcHOqeqiK5hMkIoMC6gpFaLvqNvGkbI2/VLpGu2kxvdA4/fUFqy1JHewTDa67Lq4QNo3WhVSzODybf+3EDlK9vdUwlSCgilJVOO1BjTfkmL0SeYvGPLAE/DUWMTvvL7xrKSuvIBzsExmlFEaD1ppNaob+Ar4cENAQgimgfDbLJ2K9nK/1fLw36+0j7A1WMbIhp2ONdKKlMqslX+a+roic5eIsafqPLNw8EiLI4ZiSMXavn7rnOHr+Bqu3Z/qMOpQIdQVQaKCOEqVXUkho5cBS6o82dFBkUW52nV1P/7P+Uo3rtxRYAUrv4DM2AhGJAytYIbQg4sZfaqBJpBS9iCwlS1uztu58++HPXurqF1Kh2VS6qDVbqqe5y14QH//6x4O54MBlVnO50bZpKwpMfRoPIqzkZNvU1wb/rM//B9thXpDMB52H85nd0v/hkqIgihPbrxVa62IRYqDC8CtAoAI1PSvsZ6fU+5HrO/l16/zHUxtHrkk2Ii1vvuME7UmlHy61o+VhBfq+THLcKZpHurbnv9pbp5oMa3P2Dd8zj5x7kDtXZ1DXKgkqOiw0uAWfW1r2THZiYUEGF7dULgkxtTeYqXsWMjukR+Fkjm4pvNCNIndgHyFrDGnowYSlxDPSxIZzUi4iLfmTOzacsWm/vNPevPmn+lsIysT27cWiQJIeJESCLUBNpHzhGrluDWR6UccSaa9Ao0pVAcIkDGQoOHbwY/CaKzUrXdG/toVTbW9tYfIbXXJ3+hWkLUkbXXLLxPbrNIODamIAH7kZNcqXM0t0SnSI9bVDygHTs031jEfLeW3jx4PZyDVgffKN2B13tpfMTU8b4ooVIqyoEsT6vkndS6ehzopHiW41U7OhCocDnpiL6tL3PKas1U8eEvnAoioqtGFcyk+zvwWTbipD0TvZbzodnr97RbjjM6OahJEcgBBRO2Afdp2GTLXIV3tSwkWfRjvACfnxP4DmwRlMpx6DQPYb/hzmRjMkKG6y0yEcI3nUd+xVflXthfnMT+ucVhd/8ZLsbxMtixYlB8+RdDkxhmrE3r17g4sGbUdcJtF/UtloPWRXTi0kUQpAhcFBjgUyOBEYd2O/cCI4Fuz1iwe22EVpyqEv6aDmUW01l7x6Mt0WurQk29HEhNCSIVkEFoZAV4xLqiYlNKqQiLDYuKXvr4z9fZf6VAT97JQsk9yYbMjx+qfH/6XZTm9mf+Bneys7HmavtsMHfbNf9ChIQk4oStzXNMZAUs0Tj1qq8O/OfL3SB4KmlGI4G26lGR5b/uHgms6KdE/QgZz0Ul4oYvJwRgA2VG/pnJSHbCk16QXh1P604KrMoIoUqZSYXqX7/iMLoBTM6CEwxgbiXdPgn2YAcwGQpm0ZYpPMhDo8cawCsVc46Ilry/nG/7WtaokonXl41bZlmYbShmILl2g9HgZltkQlXgXVH+Ms2NpGd0SrdY1UFBhQaKrBMe0bDA6N0dqDJiKHkkLvjozRqWwHXaAN6lTL0G10591r/wexgWgo6oTdLa9SM4BSIAqbfbes3Vzd7bJyp9m3vcP3o83GIBv0pgZSvWAgtDGdG/w6bM9Dh540GeDD3Gg0qAQrCYFT9z0wlcQBieP+ANuLfH6er6lbdhwfVaZDFQwlgIfPWNnPItl7563+3Fp+PP6N9Ee+m0y2fOgR+fS3GIZMBjZJybbCltsZS0yLqvz9rwrX5BTXfnAWQiM5XAgY1GVzstu7ILVgJHnpG66wNbvuu+n3JzBEjYr5uWvGLZfltgNV5uDMrpn6wZfPmmsfYDvdSRaS9sbZb89Z025pi6/w2oLhdQJfZEo1Z2ddn5uxfMyeeGeytc4VIkJ1weA4IMAKMA1A3JEdVkzaqWe5VW6hUfbo2iGRuoQj0tAd7SBD2plOYf79i+kySDMGAUIa79hPudqdy7f/fnp34Xb4ife8fyfsxr/vMT90ewdbVBFn8rCkAGMagA4VUQWgoe97zJiKFXag446RNtp3r3+0nqqfvY3QwpSEIYdC0bhs1kp/iW7aSUnp/XXHar2sW5Iz0fyxvY8nve4flQ9BlEvScFruun9Ztss/ZMFAovPG2F8kDCcGjGLwq0qGlTGgLxGNlu7Pzzf8Fr45Ciu7dw9ubouCmpRKIAkYN2xgJ4CG2c0Mvny7BCfsICQ+WLcpj8pTxZmP1AlyIouYs2hvI2fXtbfoJn/ARWTp4aK13/M0iSuSN7/aR0+pQvGwNJtKZ6M66IRFlu1nPp/+pCvNLMZYSWD0G+gdZ4BYqlOBBm1e3Gqj50nVyW1M4RG7bLpK4JjbLWF5K/3iAQfI8kAihAiziMAUFAIgxAbl9Gkm7Qi+Dqu4e6fT1U5c3utoHeKTmOvK8khYgQAuYnN0tDlyKREIIBsc4cgLi8VNZ95sgQjmAZ+GRintMydlrC/dOb2LvurYElAb2Cc9gvawy1ddsoOK6VRc7HSlXZcvnztm8EFACTAEQClI8cwSwLqAd84Nt4avIHaon8QCZnvVwk2kprLwzYdld+ubftWJnNJj76pdl4M8KlFqSCCosv+ZS1//yjlQJjNLFJbz4qWRCIY8DS2sgRSAbQVXmwfYWxqlQ2xTu5EqYR8uOqeO6BARUPIqQxow8is0SOwseHNx0U7zWuZNvphBDYxP6zBeUGhY3RMAs8EFELBJA1wJQCCnD6q4pfibLtNKR410K6dXnX3/trPfJ+jSOX2SkyUF/R3ttGLIiv87Zbqlq3bzgU3phg6CER4uo6y5AlzBK+w1A53svjFl+qu0JbL7gucy2oHCH+jc3Hp60YKmgVoe16AyuOJFGMFBxe4v1cs3uIr4C7FKOLUsLTq96V/3PxfvZITv5akMv0uXunLW9NEuK9Y08Cz0br9gRniAK6yBy0BHAZcSSfGVPQaVmZnHdZi6QPrwpjzqAhBjCe141dN+9pHFk5yt3twMwRDUGOhc+zMOQwBaLYf9Dpj8Fv2UQyxmEFvmvIpY/EHPDd3jp+NyHr+lHUmohi08zWp75ysWwL6Zg6Yx4oMA3RKQYPzKnmP7G3Iq84oW718Ubr+aMynpYEJ2e57rZ2fP3iJVIipWejagV3XRw6S7ynPnjpnRv8FZgIbptBTAKADdivXjZPRrZy48x/mfDsl1LNZL9ncRx/GwIPJ7Wbx/c775p238Kq/JjPQgEbgMpKHHfA+hFFCpe5TV9KG0y77ulmtzLbWsuFK04Nzc8fxvn88031CWpIMGlPPLe/VWZcgvEoMOSEqKtpX//393XdILe8v4PyKqAcMu1jltzzxwyvhFLzPSg0Ry7SFVkiggrFlFp1u23Vw44p6UFlJaRr+Xts2tS6eUIgu+PQAiA1mtkMyXU4IXBUAY2MmxkrLdXtpP/creejZbDpti9VMZLmlOO225OyGo1RojTUz3EAkkoJVVnClayJTtF5FV/W1paYGn4pel05rSNXaZQ5C6jrEo5YYrmQiiDLMBAmVAB0QGDKWLrKAuRcdKqk8YW5jR/nA245D4+LKx0WEyYsP5+wu+GQmC0ggPgER6T5U9pAJQNPKB9Fwdksu65E5HDiyEa6K0m0UrbdfFRTevutcDK2Q7SFGMNUSJBQhr/c+twb/9jjNSWkRkqAC1UxOjIuJElRg1enRLUDO7XkaRqc0txJPtww9a9+I38O4Dclp/4jEPTalhoLbjEmFnArsnI0Bqijugvqmyd5SYDEqIc86GJXuva+LtKpJtGIdagqlVlxZg22OulZxmsNPr110JEUTCKocyG0wAQZ2ggYkYHKP1RQczwEkIb0t1V5cvvuDDka9Tojnw8FCTqKbB63Jw5Ac0hQNgzp5SagpHjZ7hVZ8f/T5Jemdip+LyCiNhkyhWHZ11eKH3fGJNlqmn1bYgYIV/BtYPyjIMIEhCCJRFGmAMaIhriTFsocepHq//JJcHTmzeaiGUoA2HVrOzJUaKbNiLRpTLUP4erQvlTjeOegnb9Ioo1S4fXbotdWIrByXSeFoGKAbMZjOMfg1FCwsggIDaDCaocBnEetREbNG2dHE/csPpyCxKqaGpz+TIEVUyI0TsQbWBBB2XPcWC4pWnYz+ZZ+bVPBFXT5ZWKGmMvkI2i2c8vdJ3OvFl11pAtZg6QQ/cEj0sOscV8jcADTALRUTEwNXGFdtFNnmp5Kz6j15WV9vjWnAowWwRxwtU7xxA9lBH0XoYiG1UQf+pKMWItcp4VcfaZ7SZ55eSO68H6SiXxjPKT5VW0NTFK78vNm1tVxfE2smdPigjFN9RbFTRHA3ZCFAXERABLnEl28I2e/KvsZ1KUZkZ1zOXNc/an/UrdkApsiCtW1vEJnWbSIlptNZIrlNNN3bWXY+VAKVHpkFjDT59S8bKc5tkjLFTs7O+JduYAJgCYbOpv0nsbK5Itz3n7J5/7A0+X1uJUYrLKsWGECg0UgSY+BvJy46iXXF2KWmLRbcftra75Tz+K+RyvOF84Dxs9/l0bYwH+tQJ7KReS7Ykn243zb99LvTQa0EwjDv8rP022VDFSLaNJuRUpqlrr3m/7aOSvZ1hp32iXkrdEPppWhDEpRzl6BuRswEkl4KaKqroaqXejPTYD4qZBkJUrTbNqIewNbB97+Pu1ImDO+tCz9OBwrR25Mw5ptgA1hAKiEt7tjdO/bT9UubJZ4JFxXLzexL7bg3F2dF8jNiOXD+76uMvXDC2PkzPnDUOWhQ6yWWb2hkQR/Gmyp4pbcUue67wkBo9DPg5z/vGm7QyjdIlXaBROUPVgkuxX1n8s1z6e176oRwOQxuhoEJQKI5bbEd7WW1YZMHkI5Zqwc7n/Q/7Gpv0no5qH7QAJ70ecfuGoiqbhWKxKNNCGAhDShGVieK+4sQ+DQoNNKDZDAIX75PV++8ndhlFnJPuww++gzwzG7VyuyYarrlTz1skBYjkC6IATIn8OlQ4woNyhjTOvON9ePVyx81uie6TFA72AcwK+quukpx4zzfv+Z9Onvv/Zv+R7AspkJZtOPRhCLkefANUhd1aSDzISnRUtqBRC471KHCDI/cqnjvxrmO/8w17qAyvrbbh/zu1+p2iUSNIggL16hntg/rEvBulp5Ryh7AdlsCKuNSw2XF9D16mn/VXIGqfuffyufucDq1N3sUr5T39MrJgOm7ercJp4LgXAawTERNnYIdy4OPtNVJyitF9eDWjpRQXbFv8zf/mixIpLGKDP+8+UM3ZpgoCgocVEeCzRF1u/RMHaSEdWhuG/xHHc45MhDmFBkSACrlCanMeZFWWiDPJOb++mD7cGb6LlIZFjGGwDz20Kbgmx6vn/eeTy79T76N7nm257CHbHYV22EoIqTWmsVI0hMR6kJbEJHFIEkexReI3lKcXW/xlrTH+gm0EoIdBorrzzsbP6ntRHc0mw1g5A6PleXd0/eyMcKd50wE0aDAF1EObOz62Jzk2+M0/Zv3//UPLl1wRGsjcmNjCpq62DEOgTQB0il4hBgyIEpfkkXNi2HIaTtENB/6939Vu/rj/lIvvLsrmzv/9j103rZw/5iqljSGvI4Xd/P0Pf4AuMJZShBk+QFWLUKoUgKLAJNZ50S23t1jw+uy7DnWqDK9RmgJVeKgXE1spYyIcX/gfD654p54H+tb0Bo+wQilXGGoA3wDjw+NgCMdNtZToUR1hkYfv+oqc2i0s0fbFr1ixc5jhbUr2f5+NT9l7ykhX9SaooDEetf3MnyH4fOnNR2MUNGAo3DxqlNfHR+Sy1lP0eo+489zN9jtty+aD7ZI40iRGT7aANYpkZMmxtIjoR0sujoxP0UgawaP6W/nAMiardc+DOOPm7LzpC171kU1CLdQw6HP+6bL+8QNyzGnD8HcMrlKoMg9FqZ2U8kWxfvg3skCaf3Naxo6wCIPmrnBaD6pCtWmjMCt9/mipU3m5ce/Hk2uSVZI7/G+xh178diGbYJOxBcdEROVGueYpvvqlYtHhDYlNyXkwTDs+mJX/68jAETtoVX0yeqCQoXK24lEPOudXmbp/4xlyAQMGDJsuGmUrQtZGE6v5uXd6VdFOJUnpxiRo+eC4B+gzCtZAbRTqMG3Qo5ogDg++jG/ObkpbLc+N8j4c3pB1TYI3KDnYV5uelpADyafHO9r3ekW7diWoYfOr5kLl0P8kv8UosDKJeWKcxD5Ld9F8S9l8kUQVWhNg0AJDFaAZoXbskOyPSMz9dbLBby4/fmCFs7Er12nvOGAabkyONmKXQAsb4rC5vO5SHvgWPWLJvmypnK5YWKPt8LE/+BfeZJifKGNz5fesf1DGskItBjCaavUMHvxjbts22dyh/MgIwxC1L4viidd00ilmis3vaXuiTEAJYDRhcyVOMW00TDMNBkYJS8FhRHnQLfJbsWrXVQYXfv5x6Tck6rhqCtt0IG8g+OCN2f4n+WwmiRh2yajSfwRKsnqoXuJlsjMKyJ3E2hdtRR03Z76kHUJrQSphQlPgIlQhElSldZUxLQwr25Qs6zKvrfp0bKV7FfMXnAf/4OBJt33DDjR53KMmbZgr67virOTScQrxvbFpiz4DnA4+TX/3R8KUU5PsGd5JHrj8Px/oe+KYCZMq1QR0lZFo4647nfm7zkpu+2witAWzuUpB46DYyFXXpqz1yq8ondJOhMQ+I9hpjDJqs7JKS8BOVAnwCccgBNU4VTPZ/fDePrvw8cf+VrNTU01FPsFTUrp5hx+wmeN+UBq+W3+fFmBK3igKxKubddxPMZxarTXNL1Pa6Bmu0smhVgYUxaIGCI4oyU4YHuBSGlaKq75PYjnbd7q58fOxta5V4rX7kD7wMz0oqjuwn3YN8KTJg29fjDZFu9Sl6JTO2p0W3iW7L5J16WXlpE9Fjw3LJOT7dPVP2vgZO2XTSZjQYqRZEUCEa+fdZqZaps979KROODBIoUAp1WwKPO1p5JSuI9UJsJW+u7STRrlMbRRKZihKE3RQUlzGZgag+6X2SCezb1tW9f5e0W9YPy597Wb0KJbDjNhTYhaL7PonuZTlGQ0fDgu9Qy9Qkv2tk37kGHGQq0kwtIEv8QaRaxitKWrQGsJgSglK0QOmQMMz3NJSo/hZHZ/9UwTTP9+al0cG2DZCvSL5SQ7AFnkA0E59Mm1GG7QAylHy+s2fpn++/mQtY3IYoRlOxeRbefC64/9b+yFlNEf4YQhDwFRHknF4iTdZacA4+3fy3L/3jORoe1VXLRhAoVAa1Kx2I5y/MJqPb/ra+zpWz6dadKtVq7X22+RiRYQCzmfU5w0AFKBNgRK0ERFucdpxXQM9e5e/zOREasjXQ+nlM1XzHorvEJ+EFqdn5q/3fP7ZDX0mo8XDksIurE4gHD7og+AzsGPqr3vXftBa89Ayb/2gPfm03bc5N3uz37zDUx731Ea1wH8mn1GkoG4arQ2FfWVDH7Oi7ZiV7KckmmRtjiEBblbAgaWEWCeID/MWYdknWSbCGkapoYXl0ekPU4o6NWjbsOEhjzkEDMQJVUaUwX+j41bz35DZ7xZ0PkJXEzZTodE7bA2ek5//wnWO2YMKJbQua6WIUABLoKXoGeBYA2igbE8/GSAb1j+VLyUr8mc5EfD3YFRjoftZnfHqyQ1PJ9ev89qwZEVEeriA3wSGHZKzXOYDLj4ANLksYqLdb6w9/37e3Y9Z33wckgDNpg0YNql8JpBQWAMKJplstTRopQMMw3rlqM8xaVtsU2YqTqQN/JA2JFBlRNr5P3XcxILXkv2u6yaSBAWMxiUNoIkfKnWQ2nyTRz7DerSzzlbrUK3X7CMd+Ob/tnglvy4q/X9Y+LwygPV1y3x02KJQZICSMc0lLvQBElfIfdiatmBc+gNbOn2ns91lj7AiTllpCioFxrC5Q/CRbNKmNYOVZnhjfHbXPdD1aWcqn8rSNoQZZUTa6RKYazJi/ist+G1vCYZXaiI0m6mBqfRofevf76zXdyqjtppDrT039Pe/caI2xSR5lJ2jWjvb5c6cDKDFw+ZX1X4kAcY8zHPIl7CpWGNymCEimdS26DPn/G+WbL5bfPbihyU9XgClGKrPVJvSWDS6kOKioVK+7n/QBjJU/Q1GAGEBM8gqYxS4tmXc9STH81/L2e69xJKVmgafQEWh0Bp4qPQr/csf9Se5kJO5N4x9YbYaO1W9Jgeyib/8kdVCpFxEUGxKW+iweRtlScOSRDcXdEtuPe7WGEDJK8rP4U/qJp/nr9ZMB9IfrMoarjyZTWWvf/aZibcv+im1OEYxrEqxaY3SCoXmIq74CNHii9kMB/yWale0Bm16lITq2OmSmIb5VrUlv/M1KSOE1cpExZWYggrgyA+6/7TlgSg4FFRosNUG4Ylj+UgvM2Xf8ihHzxWwi3FZr1mstdFh4YHUSMIO5XotNXkNoLyc55OX2AMYcloKmiSUjOqDXum89/fLck1s7PbZUxn2zdpiJWtThjzKYny6xuzxgs0ahdEKGYUttKPqW4j220UpvkaJJLDQFuIGK2xAK5rap3jo1yu+fffz4/0kl/Jhm9aSrsWorcVKhSde90V7pfX6uxRLrhBgRuvCgWPVEfGwxKvxCz/uQ6SeYv0NVl5Of1c5kqZGgTpHA4kF68lg9BGvf857vLtfjp9xbDwGSm0jfPBAcbywBI7Lhh3KL2mV9iJ+eHNGno3N8TYhCiSrUGE4riuRDwnR6KZWRFOPyZ7W1+LOfuWkLe8qJroMyqCAONKbaIo7NsOxTdUMUTozS/VJufX3Hf+PBF0sFPEoRCBS9/25vueHGdb1Q7+WxMnS09P/szDFCB6n0TCtAon13seHvd78oM4wdiKw4El0zWIGfVfd4xzf/R8fWfvDO8RvWDG1s98JWutNhYABUGpTGtAopVEXgUSVnEtOxa95qTztQamg4nvnpT3Lw+OY6iaSUZLqGBV431253AEd6FqgmUbY0AYQRNNn33wvksuLs/u3P/k1fcu3HxwLPBEYYiNnYqouLIXu32yf/vp10XCsWizHhIXAqKY3ZnaZ2skAQg+DqrZd6o6aLNqU9+7ugnVzt8vFmKSaMFgppjU+2p1z39f+WblZdjCKD6on2/4MCAKmd46+7G2PyFukb4cv9Pv2PNfv/z3Z3e3lyFbnw9VyEhWohIfBGAOgQKHZtAa0Gp4pj83KQSS+JevVNS8/e/cdK9FS1/m34YFIQMiVlha/kQ1VMdmOxOYLM9deNikWtVCpcBoYpLXAzcx2d1sZtKlMzoh4TQMBo34g31hwk6LBhGSxUGJgfBOq2bRbfGw9z4+5rmAYvPfNLz6rSO7uyg05TBI2bTSURHXKO2+v7/ZXDnkAHcfan9cEGCLb4eBXINvh6b91+YX+wEc7f/1VkgPB4N18mL48ExFT2TxQgN7UsCr0oOYjHys+9p4+cTcePn+TG9G3n2f2SICAa1TVClPiK3aKW7GLG92xJFMn3sEUE+MKYQPVjAWLX2GHRbqWlIWXMDozw7bwuo7mtoEzBk8ReGZ2alrCBVRzthnMyfPVDU5/Z9jOXb90m4vfviXo0kaYJIX0tCbkaw4fu9bX1wZuYgNUXCxS4CSACRj1aNecp7vvhwtfj16w0Pn2w7LbJzH6uj+wo8pnaKiEgGFLVYoiKPGJcFM+/59z++FzW/awZSO7r9VDMvKtSjfagmZn0nv80Pzbo4LViSbo6wiUmVJYUFNy+Dy/+uN/u11UkyBiGxkPMOwIy8ujnvhSgllTsUlJhTv+Prnl5obVPYNouFYfwsJGewvZLdZoNpWkAYMGwgPiTZbNtY+Pe952KiCesQIKTgLxqGX+XB8lVs6oOrvotDcXvjOxTuQb380EaLbs5uyOOyR7iZl3vHz3PHBBq/3Re+vcWVp6zT1uUWPkG3QHHjzZepvU2h7zX44u4i/9CMUoTiAQKDyf+1mdUtwM0UhO03kaOgzb8ETANtP3aHenHRu598WaObV0jArpMBQ2WeZyvXLupxMXrpLBsJ3rK+pvtkrplr4aYfGzP0phYTanduz1e3O4teLje1bPbX0QUCcyFK0iqgg0GQWxJ+eKpOT8ylmV7ubTfnZetrf8ft+N0SJtYUrG+LcpfX3d+wMXLFqNlo06IKxsKU91DEMw8g2w7E6t8VjppfP/O3r29XdlXv6OpQz2ATQfIqgv9QxhfJ9d2afqvmHMtiJ5Tsli7u5rfsmv9xkehpLUBqn/v2Xtt+itl+/28dA9r8peaEOtDNf64d+bv6MlpW+el5hLmVtCFVLNHaGM3qnjvpdPnj/nyp525JhFaVCmqIhAm4AgMraUN/IiXyRNTvX84u7iF7h5qd1Wrc3wKV+NqLtx38SWMTlpRbVUZz9v9+XmeY8PrxptdU9/wZ57Z63m2uMNoMTIuP9oDa9MNrrsp0Pn/OYDryoYARwWzZuzP+hVjz+XH/2P1nMmtVfwKiK2GSd41ue2qsjzfuPj/R+S+D7XFh24BuywbCK52fv+HStnnXfJH8gf2UnUcMlbT4HvsxfykRuuj3/TXrRNcOlRGS23Xlv/8YHzFq3tzevYIYijKNpZlA6sACNIYK8YM9VrPSrL2OuUTMNLlItNbcWfbeebi7JfedU3Xdwykv+X+OX13x1YNljT2bjo3/Di3Z6XXhr4EuiAEXLlJXbad62ClkO9H55YjJvP+/lt6/Z/CEdFQRXMxeY/9PXz1nlPzyzHZD3mfjbfmxVpOzxrm3FnyXxuvqXFZmVb67Gml+d6e97pV2S9+seuKUEv47Nf6gVPp85fuWCxvdLu+Rv5BzPclhU4YT80wPw6NtL+umntVySu7pvQzIrflJw/0TuPlz0fueecGxcsb13eQq3xaS5KCSJlokkPjDbAIpUUqGapFHVtr5V0dUfxosJi04/+9NuzdluSTSfw4WJRaJGLWgtD6c1RzammUl+vRGs2m6Im5+labA70G/f69NTatWVX2kdmVsngz7hTCqKsgkdVRswBzOhMtmAZnWKRtECKo2gNtBFshJzQtO1pZe5kxhBsK4gEio1veCbP7FksMv4xL/e269n0QJILVq4x4OoDJ5zgRMVKhk2F2fLT5RnX4o3NbyzZZEdRt8X8t6/KZiS99n4+JIs+5OUjzk8PZPsO7cCGxFUJw3HtM8q6uCBS0aShWjWoBGCm0aj5sidOdZA/erflH71d/K0Xvj4tN8uvLTYQ64RDweA6UE3Jpg0Bc03J/sgRyZn47Pv0jN4Ph/u7+pM1yPXBeuJ0eYvsoWMlL4jFGp4hxE48Cd2AUjBSzmAPVI978nYV7bTBoej4KNteg2H7426xFJYcS+Rb2WmHFF46PBQkw5YNAbfIn7AmORaOnKYf8CBv4M/hd7mpnQ6bLQ59VOF4hXJMXBzspApMAgUMJsbE2pdc+cqZ97Odmap0TS1jdDIX7Z9t16LPwReinVaaCkNI37qx08rewvyC04MDWTeiz6/9f8Lt6kf+nu1oJSewXXYPyw11X4AOPVobTEDj2Mg5lhL8NB4Fk1HVAdRHj2+LUB6Ul47b8vF6sie54QqXGj+EAlQURZEqStWe1fgz0apM7rVTT3eYe4oulIdAkSi2xM1iBtAzyXaXcfmePTO1Wvh20CjAEABEPhs+8uqr9xaryknZoWOYkJF7J2m9dRsCqgoNo9seQJkUFVPliqpH7HQdqgUSgCRXoKCqXksrCQ5hU/tPFrPQoSqAUmxZYJgBTr5EXnShTUzyTFz6ikwC7KTwFwOmvv/S/f3QoXp0qBKeZETfSVpYStAMVmyb69UE1YJyFcWW6dFhovaQ4Lu5fuZ16oO2QgMwCToqgwGeiSJCFfATMCJAnwQi4ERYqA4YAjgWjKAz+K2j2aZRoWDZgLrIzCAPDhNlMyGBWLd0tHUUrAIRhSKoMFgVYD/EgxIgZKTf/QCKbXYSokNmSFQZZbYAo9gHHFIJiS6jFVvxSeBqVWGaMpHRAKNAVGRnsB84qSlHaKXVCEAKEka3XYzHBpUAM4XiQXFxJymzP1FhQxMfpnAFKiOjQBtj0KMUPkAU1FXEdnScoBVgNhUUMAFgqnP2lEafggYAiS0Y2TBs3oi/UQADAkBEUFpyGxCY+H/i/4n/J/6f+H/i/4n/J/6f+H/i/4n/J/6f+H/i/4n/J/6f+P/Z6/7Yyr+J/yf+n/i/8v/VPz6u/Jv4f+L/if8n/p/4f+L/if8n/p/4f+L/if8n/p/4f+L/if8n/p/4/9kQBA==",
    "background": "#8FC72C",
    "ops": [
      {
        "type": "text",
        "text": "AIS",
        "x0": 0.44,
        "x1": 0.6,
        "cy": 0.52,
        "size": 0.55,
        "fill": "#FFFFFF",
        "style": "bold"
      }
    ],
    "glass": {
      "baked": "data:image/webp;base64,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",
      "rect": [
        -3.78,
        0,
        3.3,
        2.7
      ],
      "roughness": 0.12,
      "also": [
        {
          "id": "door-leaf-glass",
          "off": [
            -1,
            0,
            0
          ]
        }
      ]
    },
    "wall": {
      "meshes": [
        "building-shell",
        "parapet"
      ],
      "tile": 3.2,
      "size": 512,
      "seed": 47,
      "base": 254,
      "patches": 90,
      "patchAmp": 24,
      "streaks": 48,
      "streakAmp": 18,
      "specks": 2300,
      "speckAmp": 13
    },
    "walls": [
      {
        "meshes": [
          "roof-deck"
        ],
        "tile": 2.4,
        "size": 512,
        "seed": 12,
        "base": 250,
        "patches": 60,
        "patchAmp": 16,
        "streaks": 0,
        "specks": 2500,
        "speckAmp": 18
      },
      {
        "meshes": [
          "plant-condensers",
          "extra-feature"
        ],
        "tile": 1.4,
        "image": "data:image/webp;base64,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"
      }
    ],
    "signFinish": {
      "greenScale": [
        0.91,
        0.96,
        0.25
      ],
      "emissiveIntensity": 0.18,
      "returnLinear": 0.42,
      "rimPixels": 4,
      "rimColor": "#638b15",
      "prebaked": true
    }
  },
  "measuredHeightM": 5.7
} as any;

/* ------------------------------------------------------------------ geometry helpers */

/** Local stand-in for BufferGeometryUtils.mergeGeometries, which cannot be imported here.
 *  Everything is converted to non-indexed so attribute arrays can be appended; that changes the
 *  vertex count but NOT the triangle count, which is the axis the budget measures. */
function mergeGeos(geos: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const temp: boolean[] = [];
  for (const g of geos) {
    if (g.index) { parts.push(g.toNonIndexed()); temp.push(true); }
    else { parts.push(g); temp.push(false); }
  }
  let total = 0;
  for (const g of parts) total += g.getAttribute('position').count;
  const position = new Float32Array(total * 3);
  const normal = new Float32Array(total * 3);
  const uv = new Float32Array(total * 2);
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute('position'), n = g.getAttribute('normal'), t = g.getAttribute('uv');
    for (let i = 0; i < p.count; i++) {
      position[(v + i) * 3] = p.getX(i); position[(v + i) * 3 + 1] = p.getY(i); position[(v + i) * 3 + 2] = p.getZ(i);
      if (n) { normal[(v + i) * 3] = n.getX(i); normal[(v + i) * 3 + 1] = n.getY(i); normal[(v + i) * 3 + 2] = n.getZ(i); }
      if (t) { uv[(v + i) * 2] = t.getX(i); uv[(v + i) * 2 + 1] = t.getY(i); }
    }
    v += p.count;
  }
  for (let i = 0; i < parts.length; i++) { if (temp[i]) parts[i].dispose(); geos[i].dispose(); }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(position, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  out.computeBoundingBox(); out.computeBoundingSphere();
  return out;
}

function boxAt(cx: number, cy: number, cz: number, w: number, h: number, d: number) {
  const g = new THREE.BoxGeometry(w, h, d); g.translate(cx, cy, cz); return g;
}
function cylAt(cx: number, cy: number, cz: number, r: number, h: number, seg = 16) {
  const g = new THREE.CylinderGeometry(r, r, h, seg); g.translate(cx, cy, cz); return g;
}
/** A box list is the merge lever for everything in one material. An entry is
 *  [cx, cy, cz, w, h, d] with an optional seventh number, a rotation about X in radians applied
 *  before the translate (a sloped keypad shelf), or `{ cyl: [cx, cy, cz, r, h, seg?, rotX?, rotZ?] }`
 *  for a round part in the same submission (a door pull bar). */
function separateBoxes(list: (number[] | { cyl: number[] })[]) {
  return mergeGeos(list.map((b) => {
    if (!Array.isArray(b)) {
      const c = b.cyl;
      const g = new THREE.CylinderGeometry(c[3], c[3], c[4], c[5] ?? 12);
      if (c[6]) g.rotateX(c[6]);
      if (c[7]) g.rotateZ(c[7]);
      g.translate(c[0], c[1], c[2]);
      return g;
    }
    if (b[6]) { const g = new THREE.BoxGeometry(b[3], b[4], b[5]); g.rotateX(b[6]); g.translate(b[0], b[1], b[2]); return g; }
    return boxAt(b[0], b[1], b[2], b[3], b[4], b[5]);
  }));
}

/** Boundary union of axis-aligned closed boxes, retaining per-face colors.
 * Removes buried and coincident faces without adding scene nodes or draw calls.
 * Non-box details remain separate closed shells; no reference mesh is sampled.
 */
function unionBoxes(list: number[][], tones?: (number|undefined)[]): THREE.BufferGeometry {
  const bounds=list.map(b=>[[b[0]-b[3]/2,b[1]-b[4]/2,b[2]-b[5]/2],[b[0]+b[3]/2,b[1]+b[4]/2,b[2]+b[5]/2]]);
  const positions:number[]=[],normals:number[]=[],uvs:number[]=[],colors:number[]=[]; const faces:any[]=[];
  const color=new THREE.Color();
  for(let i=0;i<bounds.length;i++)for(let ax=0;ax<3;ax++)for(const side of [-1,1]) {
    const a=(ax+1)%3,b=(ax+2)%3,B=bounds[i],plane=B[side<0?0:1][ax];
    let rects=[[B[0][a],B[0][b],B[1][a],B[1][b]]];
    for(let j=0;j<bounds.length&&rects.length;j++){
      if(i===j)continue;const C=bounds[j],eps=1e-7;
      const inside=plane>C[0][ax]+eps&&plane<C[1][ax]-eps;
      const opposed=side>0?Math.abs(plane-C[0][ax])<eps:Math.abs(plane-C[1][ax])<eps;
      const same=j<i&&(side>0?Math.abs(plane-C[1][ax])<eps:Math.abs(plane-C[0][ax])<eps);
      if(!inside&&!opposed&&!same)continue;
      const next:number[][]=[];
      for(const R of rects){
        const x0=Math.max(R[0],C[0][a]),y0=Math.max(R[1],C[0][b]),x1=Math.min(R[2],C[1][a]),y1=Math.min(R[3],C[1][b]);
        if(x1<=x0+eps||y1<=y0+eps){next.push(R);continue;}
        if(x0>R[0]+eps)next.push([R[0],R[1],x0,R[3]]);
        if(x1<R[2]-eps)next.push([x1,R[1],R[2],R[3]]);
        if(y0>R[1]+eps)next.push([x0,R[1],x1,y0]);
        if(y1<R[3]-eps)next.push([x0,y1,x1,R[3]]);
      }rects=next;
    }
    for(const R of rects) faces.push({ax,side,a,b,B,plane,R,tone:tones?.[i]??0xffffff});
  }
  const allCorners:number[][]=[];
  for(const f of faces)for(const [u,v] of [[f.R[0],f.R[1]],[f.R[2],f.R[1]],[f.R[2],f.R[3]],[f.R[0],f.R[3]]]){const p=[0,0,0];p[f.ax]=f.plane;p[f.a]=u;p[f.b]=v;allCorners.push(p);}
  for(const f of faces){
   const {ax,side,a,b,B,plane,R}=f;const corner=[[R[0],R[1]],[R[2],R[1]],[R[2],R[3]],[R[0],R[3]]];const poly:number[][]=[];
   for(let e=0;e<4;e++){
    const p=corner[e],q=corner[(e+1)%4],dx=q[0]-p[0],dy=q[1]-p[1],len=dx*dx+dy*dy;
    const cuts=[0];for(const v of allCorners){if(Math.abs(v[ax]-plane)>1e-7)continue;const u=v[a]-p[0],w=v[b]-p[1];if(Math.abs(u*dy-w*dx)>1e-7)continue;const r=(u*dx+w*dy)/len;if(r>1e-7&&r<1-1e-7&&!cuts.some(x=>Math.abs(x-r)<1e-7))cuts.push(r);}
    cuts.sort((x,y)=>x-y);for(const r of cuts)poly.push([p[0]+r*dx,p[1]+r*dy]);
   }
   color.setHex(f.tone);const mid=[(R[0]+R[2])/2,(R[1]+R[3])/2];
   for(let k=0;k<poly.length;k++)for(const p of side>0?[mid,poly[k],poly[(k+1)%poly.length]]:[mid,poly[(k+1)%poly.length],poly[k]]){
    const v=[0,0,0],n=[0,0,0];v[ax]=plane;v[a]=p[0];v[b]=p[1];n[ax]=side;
    positions.push(...v);normals.push(...n);uvs.push((v[a]-B[0][a])/(B[1][a]-B[0][a]),(v[b]-B[0][b])/(B[1][b]-B[0][b]));colors.push(color.r,color.g,color.b);
   }
  }
  const out=new THREE.BufferGeometry();out.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));out.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));out.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));if(tones)out.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));out.computeBoundingBox();out.computeBoundingSphere();return out;
}

function boxes(list: (number[] | {cyl:number[]})[]) {
 const plain=list.filter(b=>Array.isArray(b)&&!b[6]) as number[][];
 const rest=list.filter(b=>!Array.isArray(b)||b[6]);
 const parts:THREE.BufferGeometry[]=[];if(plain.length)parts.push(unionBoxes(plain));if(rest.length)parts.push(separateBoxes(rest));
 return parts.length===1?parts[0]:mergeGeos(parts);
}

/** Merge a box list with a per-ENTRY tone written into a vertex colour attribute. The material
 *  that draws it must then have `vertexColors` on -- see `finishVertexColors` -- and every other
 *  geometry on that material needs a white attribute, or it renders black. Tones are sRGB hexes,
 *  decoded to linear by setHex, which is the space the shader multiplies in. */
function tonedBoxes(list: (number[] | {cyl:number[]})[], tones: (number|undefined)[]) {
 const plain:number[][]=[],pt:(number|undefined)[]=[],gs:THREE.BufferGeometry[]=[];
 list.forEach((b,i)=>{
  if(Array.isArray(b)&&!b[6]){plain.push(b);pt.push(tones[i]);return;}
  const g=separateBoxes([b]);const c=new THREE.Color(tones[i]??0xffffff),a=new Float32Array(g.getAttribute('position').count*3);
  for(let k=0;k<a.length;k+=3){a[k]=c.r;a[k+1]=c.g;a[k+2]=c.b;}g.setAttribute('color',new THREE.BufferAttribute(a,3));gs.push(g);
 });
 if(plain.length)gs.unshift(unionBoxes(plain,pt));
 const out=mergeGeos(gs.map(g=>g.clone()));let off=0;const a=new Float32Array(out.getAttribute('position').count*3);
 for(const g of gs){const c=g.getAttribute('color');a.set(c.array as Float32Array,off);off+=c.array.length;g.dispose();}out.setAttribute('color',new THREE.BufferAttribute(a,3));return out;
}

/** Turn `vertexColors` on for a material and give every geometry that shares it a WHITE colour
 *  attribute where one is missing. The shader reads an absent attribute as (0,0,0): one tinted
 *  part makes its whole material poisonous to every untinted mesh on it. */
function finishVertexColors(materials: Record<string, THREE.MeshStandardMaterial>, meshes: Record<string, THREE.Mesh>, matId: string) {
  const m = materials[matId];
  if (!m || m.vertexColors) return;
  m.vertexColors = true; m.needsUpdate = true;
  for (const mesh of Object.values(meshes)) {
    if (mesh.material !== m) continue;
    const geo = mesh.geometry as THREE.BufferGeometry;
    if (geo.getAttribute('color')) continue;
    const n = geo.getAttribute('position').count;
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
  }
}

/* ------------------------------------------------------------------ materials */

/**
 * Every material is declared `textureless` in the sculpt spec, so no procedural texture set is
 * synthesised. That matters twice. Speed: makeProceduralTextureSet writes FIVE canvases per
 * material pixel by pixel in JavaScript, at a cost that is the SQUARE of the resolution.
 * Correctness: whenever a texture set exists the generator forces color to white and roughness
 * to 1 and reads both back from the generated maps, discarding the measured albedo -- which is
 * what renders a building mid-grey.
 *
 * Metalness is capped well below physical for metals. The thaikit harness supplies a hemisphere
 * light and three directionals and NO environment map, and a metal with nothing to reflect
 * renders black. The albedo stays measured; the metalness is what is wrong for this rig.
 *
 * The one printed graphic, the brand fascia, is a canvas assigned AFTER material construction.
 * The textureless declaration does not affect that, and it is the documented route.
 */
function buildMaterials(options: ProceduralModelOptions): Record<string, THREE.MeshStandardMaterial> {
  const map: Record<string, THREE.MeshStandardMaterial> = {};
  for (const s of CONFIG.materials as any[]) {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(s.color),
      roughness: s.roughness,
      metalness: s.metalness,
      wireframe: options.wireframe ?? false,
    });
    if (s.envMapIntensity !== undefined) m.envMapIntensity = s.envMapIntensity;
    if (s.opacity !== undefined) { m.transparent = true; m.opacity = s.opacity; m.depthWrite = true; }
    m.name = s.id;
    map[s.id] = m;
  }
  return map;
}

/* ------------------------------------------------------------------ the model */

export function createAisShopBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'AIS Shop Building';

  const materials = buildMaterials(options);
  const nodes: Record<string, THREE.Object3D> = {};
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;

  function add(id: string, name: string, geo: THREE.BufferGeometry, matId: string) {
    const node = new THREE.Group(); node.name = name + '__node';
    const mesh = new THREE.Mesh(geo, materials[matId]);
    mesh.name = name; mesh.castShadow = castShadow && matId !== 'glass'; mesh.receiveShadow = receiveShadow;
    node.add(mesh); root.add(node);
    nodes[id] = node; meshes[id] = mesh; colliders[id] = null;
    return mesh;
  }
  function addInst(id: string, name: string, geo: THREE.BufferGeometry, matId: string, mats: THREE.Matrix4[], cols?: number[]) {
    const node = new THREE.Group(); node.name = name + '__node';
    const inst = new THREE.InstancedMesh(geo, materials[matId], mats.length);
    inst.name = name; inst.castShadow = castShadow; inst.receiveShadow = receiveShadow;
    for (let i = 0; i < mats.length; i++) inst.setMatrixAt(i, mats[i]);
    if (cols) {
      const c = new THREE.Color();
      for (let i = 0; i < cols.length; i++) inst.setColorAt(i, c.setHex(cols[i]));
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    }
    inst.instanceMatrix.needsUpdate = true;
    node.add(inst); root.add(node);
    nodes[id] = node; meshes[id] = inst as unknown as THREE.Mesh; colliders[id] = null;
    return inst;
  }

  const G = CONFIG.geometry as any;

  /* Shell: SOLID box, not a ring. The prop is an exterior shell only ever seen from outside, so
   * an interior costs draw calls, geometries and VRAM for something nobody sees -- and solid
   * means the shopfront needs no opening cut in it, which removes all four reveal faces and the
   * z-fighting they cause. Set 0.06 m INSIDE the parapet ring on every elevation so no wall face
   * is ever coplanar and co-facing with a parapet face. */
  // How far forward the shell face sits. The DEFAULT 2.50 leaves 1.00 m for an entrance canopy to
  // cantilever into, so the canopy nose lands exactly on the declared 7.0 m depth. A building with
  // NO forward cantilever must push this out instead, or the prop is built short of its declared
  // envelope -- MK first came out 6.3 m deep against a declared 7.0 for exactly that reason.
  const SF = (G.shellFront ?? 2.50) as number;
  // `shellBox` [cx, cy, cz, w, h, d] replaces the full-module shell for a plate whose enclosed volume
  // does not fill the slab -- the PTT kiosk sits under the rear-right of an 8 x 7 canopy slab.
  const SB = (G.shellBox as number[] | undefined) ?? [0, 1.775, (SF - 3.44) / 2, 7.88, 3.55, SF + 3.44];
  // `shellBoxes` replaces the shell with SEVERAL boxes in one submission, for a plate whose wall has
  // a recess in it -- a service door set back into a reveal (MK). The pocket is left open by the
  // boxes around it, so the leaf inside can sit BEHIND the wall face without a hole being cut.
  add('building-shell', 'Building shell',
      G.shellBoxes ? boxes(G.shellBoxes as number[][]) : boxAt(SB[0], SB[1], SB[2], SB[3], SB[4], SB[5]), 'wall');
  colliders['building-shell'] = {
    shape: 'box', localCenter: [0, 2.3, 0], halfExtents: [4.0, 2.3, 3.5],
    notes: 'Asset declares collider "box". One convex proxy over the whole envelope.',
  };

  /* Roof deck spans y 3.50..3.62 by default, so its underside is sunk INTO the shell rather than
   * resting on it. Authored flush, the deck's bottom face and the parapet ring's bottom face were
   * both at y=3.550 and both facing down -- 46 m2 of coplanar co-facing surface.
   *
   * `deckY` raises it inside the parapet ring, which is what a plate showing a SHALLOW roof well
   * needs: with the deck at the shell top and a ring that runs to the coping, the rooftop plant
   * sits in a 0.8 m pit and only its lids clear the parapet, when the plate shows most of each
   * unit standing above it. Raising the deck cannot raise the plant past the declared 4.60 m --
   * that is what the coping is -- but it is what decides how much of it a viewer sees. */
  // `deckExtra` folds more boxes into the deck's submission -- a dark backdrop slab behind a glazed
  // opening, so a shopfront with no interior image shows a dark room through its glass and its
  // delivery hatch reads as a HOLE rather than as a patch of the render wall.
  // `deckBox` [cx, cy, cz, w, h, d] replaces the full-module deck the same way `shellBox` does.
  const DB = (G.deckBox as number[] | undefined) ?? [0, (G.deckY ?? 3.56) as number, (SF - 0.02 - 3.42) / 2, 7.8, 0.12, SF + 3.40];
  const deckGeo = boxAt(DB[0], DB[1], DB[2], DB[3], DB[4], DB[5]);
  // `deckExtraTones` (one per deckExtra box; the deck itself stays white) is how the backdrop is
  // DARK while the deck keeps its measured tone: one material, one draw call, a vertex colour.
  const tonedDeck = !!G.deckExtraTones;
  add('roof-deck', 'Roof deck',
      G.deckExtra
        ? (tonedDeck
            // `deckTone` tints the deck box itself, for a plate whose plant rides the deck MATERIAL
            // (a galvanised tile shared by the units and the membrane) while the membrane keeps its
            // own measured tone. Left unset the deck is white, i.e. the material's authored colour.
            ? tonedBoxes([DB, ...(G.deckExtra as number[][])],
                         [G.deckTone as number | undefined, ...(G.deckExtraTones as number[])])
            : mergeGeos([deckGeo, boxes(G.deckExtra as number[][])]))
        : deckGeo, 'deck');
  if (tonedDeck) deckGeo.dispose();

  /* Parapet: front fascia wall plus three upstands, MERGED into one component and one draw call.
   * The front is taller than the sides, which a plan extrusion cannot express. Outer faces stand
   * 0.06 m proud of the walls -- a coping drip edge, and what keeps them off the wall planes. */
  const PS = (G.parapetSides ?? { cy: 3.75, h: 0.4, thick: 0.24 }) as any;
  // Parapet plan size. It defaults to the full 8.00 m envelope width, but a building whose FASCIA
  // turns the corner has to pull the ring in: the return board is the outermost thing on that
  // elevation, and a parapet at the same +-4.00 both hides it and puts two co-facing planes at the
  // same x. `parapetW` and `PS.cx` are how a config buys that clearance without every sibling
  // moving.
  const PW = (G.parapetW ?? 8.0) as number;
  const PCX = (PS.cx ?? 3.88) as number;
  // `parapetBoxes` replaces the whole default ring (fascia wall + three upstands) for a plate whose
  // roof edge is not the shared module's -- a canopy slab with its own fascia depths per side.
  add('parapet', 'Parapet ring and fascia wall', boxes(G.parapetBoxes ? [...(G.parapetBoxes as number[][]), ...((G.parapetExtra ?? []) as number[][])] : [
    [0, G.fasciaWall.cy, G.fasciaWall.cz, PW, G.fasciaWall.h, G.fasciaWall.d],
    // Side and rear upstands. `parapetSides` overrides the default 0.40 m upstand for a plate whose
    // parapet is a full-height ring rather than a low kerb; the front is always the taller face and
    // comes in through `fasciaWall`, which a plan extrusion could not express.
    [-PCX, PS.cy, (SF - 0.30 - 3.5) / 2, PS.thick, PS.h, SF + 3.20],
    [PCX, PS.cy, (SF - 0.30 - 3.5) / 2, PS.thick, PS.h, SF + 3.20],
    [0, PS.cy, -3.38, PW, PS.h, 0.24],
    // Anything else in the SAME material folds in here rather than costing its own draw call --
    // full-height facade cladding, corner pilasters, a plinth. This is the merge lever: two
    // parts that share a material should never be two submissions.
    ...((G.parapetExtra ?? []) as number[][]),
  ]), G.fasciaWallMaterial);

  /* Brand fascia panel. Sunk INTO the fascia wall at the back and standing proud at the front, so
   * it overlaps its surround instead of meeting it. UVs are AUTHORED: the +Z face samples the
   * wordmark band of the canvas and the other five faces sample a plain corner of the same
   * canvas, which keeps the brand graphic at ONE material and ONE draw call. */
  {
    const f = G.fascia;
    let g: THREE.BufferGeometry;
    if (f.shape === 'disc') {
      // A round sign disc, built as a CircleGeometry face plus a shallow cylinder body.
      //
      // The obvious construction -- one cylinder rotated to face +Z -- puts the wordmark on its
      // side, because CylinderGeometry lays its cap UVs out in the cylinder's own XZ plane and
      // rotating the geometry does not rotate them with it. CircleGeometry's UVs are already
      // (x, y) in the plane it faces, so the square canvas lands the right way up with no
      // correction. The body's UVs are collapsed onto a plain corner of the same canvas so the
      // disc's edge does not smear the wordmark around its rim.
      const r = f.w / 2;
      const face = new THREE.CircleGeometry(r, 32);
      face.translate(0, 0, 0.061);
      const body = new THREE.CylinderGeometry(r, r, 0.12, 32);
      body.rotateX(-Math.PI / 2);
      const buv = body.getAttribute('uv') as THREE.BufferAttribute;
      for (let i = 0; i < buv.count; i++) buv.setXY(i, 0.02, 0.02);
      buv.needsUpdate = true;
      g = mergeGeos([face, body]);
      g.translate(0, f.cy, f.cz);
    } else {
      // BoxGeometry vertex order is px, nx, py, ny, pz, nz -- four vertices per face -- so the
      // outward face of a board is a known slice of the uv attribute. A building can carry the
      // same mark on more than one elevation (this kit's hospital signs its front AND its side),
      // so `boards` lets each board name the face that samples the graphic while every other face
      // samples a plain corner of the same canvas. One material, one draw call, any number of
      // boards facing any way.
      const FACE_SLICE: Record<string, number> = { '+X': 0, '-X': 4, '+Y': 8, '-Y': 12, '+Z': 16, '-Z': 20 };
      const boards = (f.boards as any[]) ?? [{ w: f.w, h: f.h, d: 0.12, at: [0, f.cy, f.cz], face: '+Z' }];
      const parts: THREE.BufferGeometry[] = [];
      for (const bd of boards) {
        const b = new THREE.BoxGeometry(bd.w, bd.h, bd.d ?? 0.12);
        const uv = b.getAttribute('uv') as THREE.BufferAttribute;
        // `plain` boards carry no graphic at all: a band that wraps three sides of a canopy should
        // repeat its mark on none of the returns, only on the face that fronts the street.
        // The test is an explicit boolean, NOT a sentinel index -- setting the slice start to -1
        // still satisfied `i >= start && i < start + 4` for vertices 0, 1 and 2, so three corners
        // of the +X face kept sampling the wordmark band and smeared a stretched ghost of the mark
        // along every return.
        const plain = bd.plain === true;
        const startAt = FACE_SLICE[bd.face ?? '+Z'];
        // `u: [u0, u1]` lets a board sample a horizontal SLICE of the canvas band instead of all of
        // it, so two boards with two different graphics (a blue board with white text, a white board
        // with blue text) still share one canvas, one material and one draw call. `plainUV` is the
        // canvas point the board's other five faces sample; it defaults to the bottom-left corner
        // and a board whose ground is not the canvas background names its own.
        const u0 = bd.u ? bd.u[0] : 0, u1 = bd.u ? bd.u[1] : 1;
        const pu = bd.plainUV ? bd.plainUV[0] : 0.015, pv = bd.plainUV ? bd.plainUV[1] : 0.015;
        for (let i = 0; i < uv.count; i++) {
          // `f.uvRect` [u0, v0, u1, v1] names the ATLAS region the band occupies when the sign
          // shares its image with other textured parts; default is the canvas contract (top 87.5 %).
          const R = (f.uvRect as number[]) ?? [0, 0.125, 1, 1];
          if (!plain && i >= startAt && i < startAt + 4) uv.setXY(i, R[0] + (u0 + uv.getX(i) * (u1 - u0)) * (R[2] - R[0]), R[1] + uv.getY(i) * (R[3] - R[1]));
          else uv.setXY(i, pu, pv);
        }
        uv.needsUpdate = true;
        b.translate(bd.at[0], bd.at[1], bd.at[2]);
        parts.push(b);
      }
      g = parts.length === 1 ? parts[0] : mergeGeos(parts);
    }
    // `curved`: textured bulged fronts (an ATM kiosk face) that ride the SAME material and
    // submission as the sign, sampling their own region of the baked atlas. Each is a partial
    // cylinder about Y, apex at z, edges at z - bulge, spanning w by h, UVs remapped to uvRect.
    if (f.curved) {
      const cparts: THREE.BufferGeometry[] = [g];
      for (const c of f.curved as any[]) {
        const R = (c.w * c.w / 4 + c.bulge * c.bulge) / (2 * c.bulge);
        const half = Math.asin(c.w / 2 / R);
        const cyl = new THREE.CylinderGeometry(R, R, c.h, c.seg ?? 12, 1, true, -half, 2 * half);
        const cuv = cyl.getAttribute('uv') as THREE.BufferAttribute;
        const r = c.uvRect as number[];
        for (let i = 0; i < cuv.count; i++) cuv.setXY(i, r[0] + cuv.getX(i) * (r[2] - r[0]), r[1] + cuv.getY(i) * (r[3] - r[1]));
        cyl.translate(c.x, c.y, c.z - R);
        cparts.push(cyl);
      }
      g = mergeGeos(cparts);
    }
    add('fascia-panel', 'Brand fascia panel', g, 'fascia');
  }

  /* One glazing pane, not one per bay: the mullion grid in front does the dividing. Overlaps INTO
   * the facade at the back and sits RECESSED behind the framing at the front. Mostly opaque by
   * design -- there is no interior behind it, so a transparent pane would read as a hole. */
  // The pane is not always centred: a branch plan can put its glazing to one side of the entrance.
  // Authored centred while its framing sat off to the left, the two read as unrelated parts.
  // `glazingExtra` folds further panes -- a side window, a clerestory -- into the SAME component:
  // one material, one draw call, however many openings the plate shows.
  {
    // `boxes` lets the pane be several PANELS in one component -- a fixed run, a transom light
    // over the door bay, and a gap where a delivery hatch opens -- without costing a draw call
    // per panel. `glazingExtra` is the older single-pane-plus-extras form and still works.
    const pane = G.glazing.boxes
      ? boxes(G.glazing.boxes as number[][])
      : boxAt(G.glazing.cx ?? 0, G.glazing.cy, G.glazing.cz ?? 2.51, G.glazing.w, G.glazing.h, G.glazing.d ?? 0.10);
    const extra = (G.glazingExtra ?? []) as number[][];
    add('shopfront-glazing', 'Shopfront glazing',
        extra.length ? mergeGeos([pane, ...extra.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5]))]) : pane, 'glass');
  }

  /* Framing, transom, kick rail, door jambs and header MERGED into one component. Every part is
   * the same metal; folding them together is the draw-call lever chosen in the blockout, not an
   * optimisation deferred to the end -- a part split for authoring convenience cannot be merged
   * afterwards once a pivot hangs off it. Front face stands proud of glazing and mullions. */
  add('shopfront-frame', 'Shopfront framing and door bay', boxes(G.frame), G.frameMaterial);

  /* Entrance door: a real LEAF on a real HINGE, not a rectangle painted into the glazing. The
   * leaf is built in hinge-local coordinates (x runs from the hinge stile outward) under a pivot
   * node at the jamb, so rotating that node about +Y swings the door. Two meshes -- stiles and
   * rails in the frame metal, a pane in the glass -- and this is the one part of an otherwise
   * static shell that earns a named pivot. The leaf sits in its own depth band between the
   * glazing and the fixed frame so nothing on it is coplanar with a fixed face at any angle. */
  const pivotNodes: THREE.Object3D[] = [];
  if (G.door) {
    const d = G.door;
    const hinge = new THREE.Group();
    hinge.name = 'door-hinge';
    hinge.position.set(d.hinge[0], d.hinge[1], d.hinge[2]);
    hinge.userData.actionProfile = {
      animationRole: 'articulated',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'door-hinge',
               note: 'Entrance door swings about the jamb stile. Closed at 0, opens outward toward +Z with negative yaw.' },
    };
    root.add(hinge);
    pivotNodes.push(hinge);
    const w = d.w as number, h = d.h as number, y0 = d.y0 as number, y1 = y0 + h, ym = (y0 + y1) / 2;
    const st = d.stile ?? 0.08, D = d.depth ?? 0.12;
    // `flip` hangs the leaf on the OTHER jamb: local +x runs toward -X instead of +X, so the
    // handle lands on the correct edge for a plate whose door pull is on the left. It is a sign
    // on the x coordinates rather than a mirrored transform, because a negative scale inverts
    // every normal on the leaf and the glass then renders inside-out.
    const sx = d.flip ? -1 : 1;
    const hx = w - (d.handle ? (d.handle[0] ?? 0.16) : 0);
    const leafFrame = boxes([
      [sx * (st / 2), ym, 0, st, h, D],
      [sx * (w - st / 2), ym, 0, st, h, D],
      [sx * (w / 2), y1 - 0.04, 0, w, 0.08, D],
      [sx * (w / 2), y0 + 0.045, 0, w, 0.09, D],
      ...((d.railY ?? 1.05) > 0 ? [[sx * (w / 2), d.railY ?? 1.05, 0, w, 0.07, D]] : []),
      // Pull handle: a vertical bar on two stand-offs, on the swinging edge. The plate shows one
      // and it is the detail that reads a glass leaf as a door rather than as another pane.
      ...(d.handle ? [
        { cyl: [sx * hx, (d.handle[1] ?? 1.05), D / 2 + 0.05, 0.018, d.handle[2] ?? 0.80, 10] },
        [sx * hx, (d.handle[1] ?? 1.05) + (d.handle[2] ?? 0.80) / 2 - 0.03, D / 2 + 0.025, 0.036, 0.036, 0.10],
        [sx * hx, (d.handle[1] ?? 1.05) - (d.handle[2] ?? 0.80) / 2 + 0.03, D / 2 + 0.025, 0.036, 0.036, 0.10],
      ] : []),
    ] as any);
    const leafPane = boxAt(sx * (w / 2), (y0 + 0.09 + y1 - 0.08) / 2, 0, w - 2 * st, y1 - 0.08 - (y0 + 0.09), 0.04);
    for (const [id, name, geo, mat] of [
      ['door-leaf-frame', 'Entrance door leaf frame', leafFrame, G.frameMaterial],
      ['door-leaf-glass', 'Entrance door leaf glass', leafPane, 'glass'],
    ] as [string, string, THREE.BufferGeometry, string][]) {
      const node = new THREE.Group(); node.name = name + '__node';
      const mesh = new THREE.Mesh(geo, materials[mat]);
      mesh.name = name; mesh.castShadow = castShadow && mat !== 'glass'; mesh.receiveShadow = receiveShadow;
      node.add(mesh); hinge.add(node);
      nodes[id] = node; meshes[id] = mesh; colliders[id] = null;
    }
  }

  /* Side feature: shutter, service door or louvre, per plate. Stands proud of the wall face but
   * deliberately NOT out to the parapet plane at +-4.00 -- a face at exactly +-4.00 would be
   * coplanar and co-facing with the parapet outer face, which the bounding-box coplanarity check
   * flags even though the two never overlap in Y. */
  if (G.sideFeature) add('side-feature', G.sideFeature.name, boxes(G.sideFeature.boxes), G.sideFeature.material);

  /* Front feature: cladding band, ATM bank, upper-storey band or forecourt, per plate. */
  if (G.frontFeature) add('front-feature', G.frontFeature.name, boxes(G.frontFeature.boxes), G.frontFeature.material);

  /* A third merged slot, for whatever the plate has that the two above do not cover -- a parapet
   * coping, a kerb, a forecourt column base. Same rule as the others: everything in it shares one
   * material and is submitted once. */
  if (G.extraFeature) add('extra-feature', G.extraFeature.name, boxes(G.extraFeature.boxes), G.extraFeature.material);

  /* A fourth merged slot. Two features in DIFFERENT materials cannot share a component, and a
   * plate that shows a galvanised plant deck AND a painted steel service door needs both. */
  if (G.extraFeature2) add('extra-feature-2', G.extraFeature2.name, boxes(G.extraFeature2.boxes), G.extraFeature2.material);

  /* A TINTED merged slot: one component, one material, and a per-BOX colour written into a vertex
   * colour attribute. This is how a two-colour applied graphic -- a vinyl decal band on a shopfront,
   * a painted stripe on a kerb -- ships without a material per colour, on a kit whose material
   * ceiling is the axis these props are tightest on after draw calls.
   *
   * Two rules make it safe. The material must be WHITE, because a vertex colour MULTIPLIES with
   * material.color and a tinted base would darken every tone. And EVERY vertex has to be written,
   * because the shader reads a missing colour attribute as (0,0,0) and renders the mesh black --
   * the failure that shipped the ubosot's walls and eight boundary stones as silhouettes. Both are
   * satisfied here by construction: the attribute is filled box by box over the whole merge. The
   * tones are LINEAR, matching how three.js multiplies them. */
  if (G.tintFeature) {
    const t = G.tintFeature;
    const list = t.boxes as (number[] | { cyl: number[] })[];
    const parts = list.map((b) => boxes([b]));
    const geo = mergeGeos(parts.map((g) => g.clone()));
    const col = new Float32Array(geo.getAttribute('position').count * 3);
    const c = new THREE.Color();
    let v = 0;
    for (let i = 0; i < parts.length; i++) {
      const n = parts[i].getAttribute('position').count;
      c.setHex(t.tones[i % t.tones.length]);
      // setHex on a Color is sRGB-decoded by three.js when colorManagement is on, which is what a
      // vertex colour wants: the multiply happens in linear space.
      for (let k = 0; k < n; k++) { col[(v + k) * 3] = c.r; col[(v + k) * 3 + 1] = c.g; col[(v + k) * 3 + 2] = c.b; }
      v += n;
      parts[i].dispose();
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const mesh = add('tint-feature', t.name, geo, t.material);
    (mesh.material as THREE.MeshStandardMaterial).vertexColors = true;
    (mesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
  }

  /* Mullions: the fine vertical grid is the most recognisable thing about a shopfront. Instances
   * on one geometry cost one draw call; as components they would have cost one each and blown the
   * ceiling on their own. They sit INSIDE the frame depth band at both ends so they are not
   * coplanar with it, while still standing proud of the glazing so the glass reads as recessed. */
  {
    const m = G.mullions;
    const mats = (m.x as number[]).map((x) => new THREE.Matrix4().setPosition(x, m.cy, m.cz ?? 2.58));
    addInst('shopfront-mullions', 'Shopfront mullions', new THREE.BoxGeometry(m.w, m.h, 0.08), G.frameMaterial, mats);
  }

  /* Rooftop condensers: casing, fan cowl and four feet MERGED into a single instanced geometry.
   * Feet start below the deck top so the two overlap rather than sharing a plane.
   *
   * An EMPTY list is a legitimate answer, not a missing config. Instancing one casing is the right
   * lever when a plate shows the same box two or three times; it is the wrong one when the plate
   * shows genuinely different units -- a hooded duct run, a wall-type condenser with a square fan
   * guard, a tall louvred tower -- and repeating one casing three times is then a simplification
   * that costs fidelity to save nothing. Such a plant deck comes in through `extraFeature` as
   * merged geometry: still ONE draw call, and every unit its own shape. */
  if ((G.condensers as number[][] ?? []).length) {
    /* `condenserParts` replaces the default casing with an authored unit in the SAME box/cyl
     * grammar, in unit-local coordinates (origin on the deck, the grille facing +Z before yaw).
     * A packaged rooftop unit is not a plain box: the plate shows a recessed louvre panel with a
     * fan disc behind it, a lidded top with a round cowl opening, and panel seams down the long
     * side. All of it merges into the ONE instanced geometry, so the detail is free per unit. */
    let unit: THREE.BufferGeometry;
    if (G.condenserParts && G.condenserTones) {
      // Per-part tones: a dark back plate and fan disc behind lighter blades is what makes a louvre
      // grille read as an intake rather than as a panel of the casing. The tint rides a vertex
      // colour on the plant material, and every other mesh on that material is filled white below.
      unit = tonedBoxes(G.condenserParts as (number[] | { cyl: number[] })[], G.condenserTones as number[]);
    } else if (G.condenserParts) {
      unit = boxes(G.condenserParts as (number[] | { cyl: number[] })[]);
    } else {
      const parts: THREE.BufferGeometry[] = [
        boxAt(0, 0.46, 0, 0.95, 0.72, 0.85),
        cylAt(0, 0.87, 0, 0.30, 0.10, 16),
      ];
      for (const fx of [-0.4, 0.4]) for (const fz of [-0.35, 0.35]) parts.push(boxAt(fx, 0.05, fz, 0.08, 0.10, 0.08));
      unit = mergeGeos(parts);
    }
    // An optional fourth number is a UNIFORM SCALE, so one instanced unit can stand in for a plate
    // that shows one large condenser beside two small ones without a second geometry.
    const mats = (G.condensers as number[][]).map(([x, z, yaw, s, sy]) =>
      new THREE.Matrix4().compose(
        new THREE.Vector3(x, (G.condenserY ?? 3.60) as number, z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
        new THREE.Vector3(s ?? 1, sy ?? s ?? 1, s ?? 1),
      ));
    // The plant material is CONFIGURABLE, not hard-coded. Referencing a 'galv' id that a config
    // does not define silently hands InstancedMesh an undefined material, three.js substitutes a
    // default, and the prop ships one material over its ceiling with nothing in the config to
    // explain the extra.
    addInst('plant-condensers', 'Rooftop condenser units', unit, G.plantMaterial ?? 'galv', mats);
  }

  // Curved sheet-metal inlet: closed extruded profile, not a stepped stack of boxes.
  const duct=meshes['extra-feature'];
  if(duct){
    const shape=new THREE.Shape();shape.moveTo(-1.47,3.665);shape.lineTo(-1.47,3.81);
    shape.quadraticCurveTo(-1.42,4.43,-.756,4.49);shape.lineTo(-.756,3.665);shape.closePath();
    const elbow=new THREE.ExtrudeGeometry(shape,{depth:.70,bevelEnabled:false,curveSegments:16});const vf=G.ductVerticalFit; if(vf){elbow.translate(0,-vf.oldBase,0);elbow.scale(1,vf.scale,1);elbow.translate(0,vf.newBase,0);} elbow.translate(1.48,0,-2.18);
    const merged=mergeGeos([duct.geometry,elbow]);duct.geometry=merged;
    const dc=new THREE.Color(G.ductFinish ?? 0xffffff);const colors=new Float32Array(merged.getAttribute('position').count*3);
    for(let i=0;i<colors.length;i+=3){colors[i]=dc.r;colors[i+1]=dc.g;colors[i+2]=dc.b;}merged.setAttribute('color',new THREE.BufferAttribute(colors,3));
  }

  /* Optional instanced extra: canopy plates, pilasters or forecourt columns, per plate. */
  if (G.extraSystem) {
    const e = G.extraSystem;
    let unit: THREE.BufferGeometry;
    if (e.kind === 'plate') {
      unit = mergeGeos([boxAt(0, 0, 0, e.w, e.h, e.d), cylAt(0, -e.h / 2 - 0.015, 0, 0.085, 0.03, 12)]);
    } else {
      unit = boxAt(0, 0, 0, e.w, e.h, e.d);
    }
    const mats = (e.at as number[][]).map(([x, y, z]) => new THREE.Matrix4().setPosition(x, y, z));
    addInst(e.id, e.name, unit, e.material, mats, e.tones ? mats.map((_, i) => e.tones[i % e.tones.length]) : undefined);
  }

  // Reference-visible showroom furniture shares the white laminate component.
  const interior = meshes['front-feature'];
  if (interior) {
    const parts: number[][] = []; const tones: number[] = [];
    const put = (b: number[], tone: number) => { parts.push(b); tones.push(tone); };
    put([0, 1.43, .285, 7.5, 2.66, .08], 0xc5c3af);
    put([0, .15, 1.63, 7.5, .07, 2.7], 0x91938a);
    for (let x=-3.35; x<3.6; x+=.74) for(let z=.64;z<2.98;z+=.74)
      put([x,.195,z,.73,.025,.73],0xc4c8c2);
    for (const [cx,cz,w] of [[-1.5,2.1,2.0],[1.8,1.25,1.65]]) {
      put([cx,.30,cz,w-.1,.19,.62],0x747b74);
      put([cx,.68,cz,w,.65,.68],0xb6b09b);
      put([cx,1.025,cz,w+.08,.045,.77],0xe8eae0);
      for(let dx=-.6;dx<.7;dx+=.42) {
        put([cx+dx,1.059,cz+.035,.19,.025,.23],0xa4aca7);
        put([cx+dx,1.151,cz-.015,.105,.16,.019,-.32],0x424c49);
        put([cx+dx,1.155,cz+.001,.083,.119,.003,-.32],0x758681);
      }
      for(let dx=-w/2+.05;dx<w/2;dx+=.32)
        put([cx+dx,.69,cz+.342,.004,.59,.004],0x96937f);
    }
    const old = interior.geometry;
    const merged=mergeGeos([old.clone(),tonedBoxes(parts,tones)]);
    const first=old.getAttribute('position').count;
    const cs=new Float32Array(merged.getAttribute('position').count*3).fill(1);
    const detail=tonedBoxes(parts,tones);
    cs.set((detail.getAttribute('color') as THREE.BufferAttribute).array as Float32Array,first*3);
    detail.dispose(); old.dispose();
    merged.setAttribute('color',new THREE.BufferAttribute(cs,3)); interior.geometry=merged;
    finishVertexColors(materials,meshes,'white');
  }

  /* Vertex-colour fill-in runs LAST, over every mesh that exists. It used to run right after the
   * deck and the plant were added, so any later mesh on the same material -- Makro's concrete
   * canopy and plinth on the toned deck material -- had no colour attribute and rendered BLACK. */
  if (tonedDeck) finishVertexColors(materials, meshes, 'deck');
  if (G.condenserTones && (G.condensers as number[][] ?? []).length) finishVertexColors(materials, meshes, G.plantMaterial ?? 'galv');

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups, pivotNodes } satisfies ProceduralModelRuntime & { pivotNodes: THREE.Object3D[] };
  return root;
}

/* ------------------------------------------------------------------ brand fascia canvas */

/** Draw the brand wordmark onto a canvas and assign it AFTER material construction. This is the
 *  documented route for a printed brand fascia and is unaffected by the material's `textureless`
 *  declaration -- what that skips is the five-canvas PROCEDURAL set, a different thing entirely.
 *
 *  Text is fitted to its field by MEASUREMENT rather than by a font-size ratio: headless Chrome's
 *  font fallback decides the real advance widths, so the only reliable way to fill a known box is
 *  to measure the string and scale it horizontally. */
function applyFasciaGraphic(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as ProceduralModelRuntime | undefined;
  const mesh = rt?.meshes?.['fascia-panel'];
  if (!mesh || typeof document === 'undefined') return;
  const material = mesh.material as THREE.MeshStandardMaterial;
  if (!material) return;

  const g = CONFIG.graphic as any;
  const srgb = (THREE as any).SRGBColorSpace;

  // A BAKED sign -- the face image composed once from a real font and vector marks and embedded
  // as a WebP data URI -- beats fillText, which draws a different wordmark on every machine's
  // font fallback. Laid out to the same UV contract as the canvas: the top 87.5 % is the band
  // the +Z face samples and the bottom-left corner is the plain field every other face samples.
  // Assigned synchronously so the harness waits on the decode; the canvas ops below are the
  // decode FALLBACK only.
  if (g.baked) {
    const baked = new THREE.TextureLoader().load(g.baked, (loaded) => {
      const finish=g.signFinish;if(!finish || finish.prebaked)return;
      const canvas=document.createElement('canvas');canvas.width=loaded.image.width;canvas.height=loaded.image.height;
      const ctx=canvas.getContext('2d')!;ctx.drawImage(loaded.image,0,0);
      const pixels=ctx.getImageData(0,0,canvas.width,canvas.height);const d=pixels.data;
      for(let i=0;i<d.length;i+=4){if(d[i+1]>d[i+2]*1.3 && d[i+1]>d[i]*1.05){for(let k=0;k<3;k++)d[i+k]*=finish.greenScale[k];}}
      ctx.putImageData(pixels,0,0);ctx.strokeStyle=finish.rimColor;ctx.lineWidth=finish.rimPixels*2;
      ctx.strokeRect(0,0,canvas.width,canvas.height*.875);
      loaded.image=canvas;loaded.needsUpdate=true;
    }, undefined, () => {
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
    const ns=mesh.geometry.getAttribute('normal');const colors=new Float32Array(ns.count*3);
    for(let i=0;i<ns.count;i++){const value=ns.getZ(i)>.5?1:(g.signFinish?.returnLinear ?? .42);colors.fill(value,i*3,i*3+3);}
    mesh.geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));material.vertexColors=true;
    material.emissiveMap=baked; material.emissive.setHex(0xffffff); material.emissiveIntensity=g.signFinish?.emissiveIntensity ?? .10;
    material.color.setHex(0xffffff);
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
  // White base so the canvas shows as drawn rather than tinted -- the measured fascia colour is
  // already painted into the canvas background.
  material.color.setHex(0xffffff);
  material.needsUpdate = true;
}

function drawFasciaCanvas(g: any): HTMLCanvasElement | null {
  // A round sign needs a SQUARE canvas: the cylinder cap maps the circle into the unit square,
  // so a 2048x320 strip would squash the mark flat. A rectangular fascia keeps the wide strip,
  // where the bottom 12.5% is the plain corner every non-front face samples.
  const square = !!g.square;
  const W = square ? 512 : (g.size?.[0] ?? 2048), H = square ? 512 : (g.size?.[1] ?? 320);
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.fillStyle = g.background;
  ctx.fillRect(0, 0, W, H);
  const band = square ? H : H * (g.bandFrac ?? 0.875);

  const fit = (text: string, font: string, x0: number, x1: number, cy: number, fill: string, strokeCol?: string, strokeW?: number) => {
    ctx.font = font;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    const w = ctx.measureText(text).width;
    const s = (x1 - x0) / w;
    ctx.save();
    ctx.translate(x0, 0);
    ctx.scale(s, 1);
    if (strokeCol) { ctx.lineJoin = 'round'; ctx.strokeStyle = strokeCol; ctx.lineWidth = (strokeW ?? 6) / s; ctx.strokeText(text, 0, cy); }
    ctx.fillStyle = fill;
    ctx.fillText(text, 0, cy);
    ctx.restore();
  };

  for (const op of g.ops as any[]) {
    if (op.type === 'rect') {
      ctx.fillStyle = op.fill;
      const x = op.x * W, y = op.y * band, w = op.w * W, h = op.h * band, r = (op.r ?? 0) * band;
      ctx.beginPath();
      if (r > 0) {
        ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y);
      } else ctx.rect(x, y, w, h);
      ctx.closePath(); ctx.fill();
    } else if (op.type === 'circle') {
      ctx.fillStyle = op.fill;
      ctx.beginPath();
      ctx.arc(op.cx * W, op.cy * band, op.r * band, 0, Math.PI * 2);
      ctx.fill();
    } else if (op.type === 'poly') {
      // An arbitrary polygon in normalised canvas coords, for a mark a font cannot set -- a
      // lightning bolt, a chevron, a leaf. Points are [x, y] with x a fraction of the canvas width
      // and y a fraction of the band height.
      ctx.fillStyle = op.fill;
      ctx.beginPath();
      const pts = op.points as number[][];
      ctx.moveTo(pts[0][0] * W, pts[0][1] * band);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0] * W, pts[i][1] * band);
      ctx.closePath();
      ctx.fill();
    } else if (op.type === 'text') {
      fit(op.text, `${op.style ?? 'bold'} ${Math.round(op.size * band)}px ${op.family ?? 'Arial, Helvetica, sans-serif'}`,
        op.x0 * W, op.x1 * W, op.cy * band, op.fill, op.stroke, op.strokeW ? op.strokeW * band : undefined);
    }
  }

  return canvas;
}

/* ------------------------------------------------------------------ glazing graphic */

/** A building is an exterior shell with no interior, so a plain tinted pane reads as a blind slab
 *  -- or, dark enough, as a hole. `graphic.glass` paints a de-lit interior view into the glazing:
 *  one baked image projected by WORLD x/y over `rect` [x0, y0, x1, y1] so it lines up across the
 *  window pane, the transom and the door leaves, which are separate boxes in one merged mesh.
 *  Assigned after material construction; the material stays `textureless` in the spec. */
function applyGlassGraphic(root: THREE.Group): void {
  const g = (CONFIG.graphic as any)?.glass;
  // Node has no `document`, and thaikit's coplanar checker and part manifest evaluate this
  // module there: TextureLoader would throw, so the glazing keeps its flat fallback albedo.
  if (!g || typeof document === 'undefined') return;
  const rt = root.userData.sculptRuntime as ProceduralModelRuntime | undefined;
  const [x0, y0, x1, y1] = g.rect as number[];
  // `also` extends the projection to panes that are NOT in the glazing component -- a hinged door
  // leaf, whose geometry is authored in HINGE-local coordinates, so it names the offset from the
  // hinge to the world origin and the same world rect then lands on it. Without this the leaf is
  // the one pane in the shopfront with no interior behind it, which reads as a blind panel in
  // the middle of a window.
  const targets = [{ id: 'shopfront-glazing', off: [0, 0, 0] }, ...((g.also ?? []) as any[])];
  let material: THREE.MeshStandardMaterial | null = null;
  for (const t of targets) {
    const mesh = rt?.meshes?.[t.id];
    if (!mesh) continue;
    const m = mesh.material as THREE.MeshStandardMaterial;
    if (!m) continue;
    material = material ?? m;
    const geo = mesh.geometry as THREE.BufferGeometry;
    const pos = geo.getAttribute('position');
    const off = (t.off ?? [0, 0, 0]) as number[];
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      uv[i * 2] = (pos.getX(i) + off[0] - x0) / (x1 - x0);
      uv[i * 2 + 1] = (pos.getY(i) + off[1] - y0) / (y1 - y0);
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  }
  if (!material) return;
  const srgb = (THREE as any).SRGBColorSpace;
  const canvas = document.createElement('canvas'); canvas.width=1062; canvas.height=405;
  const ctx=canvas.getContext('2d')!;
  const tex=new THREE.CanvasTexture(canvas);
  const draw=() => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='rgba(40,44,40,0.58)';ctx.fillRect(0,0,canvas.width,canvas.height);
    const img=new Image();img.onload=()=>{
      // Plate pixels describe printed boards only. Empty inner bays expose real geometry.
      const left=(-2.45-x0)/(x1-x0)*canvas.width;
      const right=(2.05-x0)/(x1-x0)*canvas.width;
      ctx.drawImage(img,0,0,img.width*left/canvas.width,img.height,0,0,left,canvas.height);
      ctx.drawImage(img,img.width*right/canvas.width,0,img.width*(1-right/canvas.width),img.height,right,0,canvas.width-right,canvas.height);
      tex.needsUpdate=true;
    };img.src=g.baked;
  };draw();
  if (srgb) tex.colorSpace=srgb; tex.anisotropy=4;
  material.transparent=true; material.opacity=1;material.depthWrite=false;
  material.map=tex;
  // The image carries the tint; a coloured base would apply it twice.
  material.color.setHex(0xffffff);
  if (g.roughness !== undefined) material.roughness = g.roughness;
  material.needsUpdate = true;
}

/* ------------------------------------------------------------------ wall render graphic */

/** A rendered concrete wall is not a flat colour. Every plate in this set shows the same thing --
 *  vertical rain streaking off the coping, patchy float marks, a darker band where the wall meets
 *  the ground -- and a wall authored as one albedo reads as painted card next to the shopfront's
 *  real detail. `graphic.wall` paints a SEAMLESS tile once and repeats it over the wall meshes.
 *
 *  It is a post-construction canvas, so the material stays `textureless` in the spec: what that
 *  declaration skips is createSculptMaterial's five-canvas procedural set, which costs the square
 *  of its resolution and discards the measured albedo. One tile drawn once costs milliseconds and
 *  keeps the albedo, because the tile is authored in MULTIPLIER space -- mid-grey 128 is "leave the
 *  measured colour alone" -- and is applied as `map` over the material's own colour.
 *
 *  UVs are metric and WORLD-PLANAR, chosen per vertex off the face normal: an X-facing face is
 *  projected (z, y), a Z-facing face (x, y), a Y-facing face (x, z). Box UVs would stretch one
 *  tile over each face, which puts a 7-metre-wide streak on the side wall and a 0.24-metre-wide one
 *  on the parapet coping. */
function applyWallGraphic(root: THREE.Group): void {
  const gr = CONFIG.graphic as any;
  if (!gr || typeof document === 'undefined') return;
  // `graphic.wall` is the original single entry; `graphic.walls` is a list of further entries in
  // the same shape, one per material that carries its own tile -- a grime tile on the coping and
  // the shutter hood, a dirt tile on the yellow surround, a galvanised spangle on the plant.
  const entries = [gr.wall, ...((gr.walls ?? []) as any[])].filter(Boolean);
  const rt = root.userData.sculptRuntime as ProceduralModelRuntime | undefined;
  if (!rt) return;
  for (const g of entries) applyOneWallGraphic(rt, g);
}

function applyOneWallGraphic(rt: ProceduralModelRuntime, g: any): void {
  const tile = g.tile ?? 2.5;
  const N = g.size ?? 512;
  // `clean` is a world-space XY rectangle whose vertices are pinned to one texel the tile leaves
  // untouched -- the delivery counter has to stay spotless yellow while the lintel and jambs it
  // shares a material with take the weather. The pin lands on a corner the canvas fills with the
  // base value after every mark is drawn (all four corners, since the tile wraps).
  const clean = g.clean as number[] | undefined;
  const pin = 6 / N;
  let tex: THREE.Texture | null = null;
  for (const id of (g.meshes as string[])) {
    const mesh = rt.meshes?.[id];
    if (!mesh) continue;
    const geo = mesh.geometry as THREE.BufferGeometry;
    const pos = geo.getAttribute('position'), nrm = geo.getAttribute('normal');
    if (!pos || !nrm) continue;
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      if (clean && x >= clean[0] && x <= clean[2] && y >= clean[1] && y <= clean[3]) {
        uv[i * 2] = pin; uv[i * 2 + 1] = pin;
        continue;
      }
      const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
      let u: number, v: number;
      if (ax >= ay && ax >= az) { u = z; v = y; }
      else if (az >= ay) { u = x; v = y; }
      else { u = x; v = z; }
      uv[i * 2] = u / tile; uv[i * 2 + 1] = v / tile;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    if (!tex) {
      const srgb = (THREE as any).SRGBColorSpace;
      if (g.image) {
        // A BAKED tile -- a seamless, multiplier-normalised image embedded as a data URI, the way
        // the fascia is -- for a surface whose finish a drawn canvas cannot reach: galvanised
        // spangle. Assigned synchronously so the harness waits on the decode.
        tex = new THREE.TextureLoader().load(g.image);
      } else {
        const canvas = drawWallCanvas(g);
        if (!canvas) return;
        tex = new THREE.CanvasTexture(canvas);
      }
      tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.RepeatWrapping;
      if (srgb) tex.colorSpace = srgb;
      tex.anisotropy = 4; tex.needsUpdate = true;
    }
    const material = mesh.material as THREE.MeshStandardMaterial;
    // ONE texture for however many meshes share the material: assigning per mesh would upload the
    // same canvas twice and cost VRAM for nothing.
    if (material && material.map !== tex) { material.map = tex; material.needsUpdate = true; }
  }
}

/** Seamless render tile in MULTIPLIER space, and the neutral value is WHITE, not mid-grey.
 *  `map` multiplies the material colour by the texture's LINEAR value, and the texture is decoded
 *  as sRGB, so a tile drawn around 128 multiplies the measured albedo by 0.216 and renders a light
 *  grey render wall near black -- which is exactly what the first build of this tile did. `base`
 *  therefore sits just under white and every mark DARKENS from it; the wall's own albedo stays the
 *  material's, and the tile only ever takes value away.
 *
 *  Everything wraps by drawing each mark a second time at x-W and x+W, which is what makes the
 *  tile seamless -- a mark clipped at the edge is the single most visible artefact when a wall is
 *  8 tiles wide. */
function drawWallCanvas(g: any): HTMLCanvasElement | null {
  const N = g.size ?? 512;
  const canvas = document.createElement('canvas');
  canvas.width = N; canvas.height = N;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  let seed = g.seed ?? 20260828;
  const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const base = g.base ?? 246;
  ctx.fillStyle = `rgb(${base},${base},${base})`;
  ctx.fillRect(0, 0, N, N);

  // Broad float-mark blotches: low-frequency patchiness in the render coat.
  for (let i = 0; i < (g.patches ?? 90); i++) {
    const x = rnd() * N, y = rnd() * N, r = (0.05 + rnd() * 0.18) * N;
    const v = base - rnd() * (g.patchAmp ?? 26);
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, `rgba(${v | 0},${v | 0},${v | 0},0.55)`);
    grad.addColorStop(1, `rgba(${v | 0},${v | 0},${v | 0},0)`);
    ctx.fillStyle = grad;
    for (const dx of [-N, 0, N]) { ctx.save(); ctx.translate(dx, 0); ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
  }
  // Vertical rain streaks. Narrow, soft-edged, top-weighted -- water runs DOWN from the coping and
  // fades out, so the alpha ramps to nothing at the bottom of each streak rather than stopping.
  for (let i = 0; i < (g.streaks ?? 130); i++) {
    const x = rnd() * N, w = (0.002 + rnd() * 0.010) * N;
    const y0 = rnd() * N * 0.5, len = (0.25 + rnd() * 0.75) * N;
    const dark = base - (6 + rnd() * (g.streakAmp ?? 22));
    const grad = ctx.createLinearGradient(0, y0, 0, y0 + len);
    grad.addColorStop(0, `rgba(${dark | 0},${dark | 0},${dark | 0},0.42)`);
    grad.addColorStop(0.35, `rgba(${dark | 0},${dark | 0},${dark | 0},0.26)`);
    grad.addColorStop(1, `rgba(${dark | 0},${dark | 0},${dark | 0},0)`);
    ctx.fillStyle = grad;
    for (const dx of [-N, 0, N]) ctx.fillRect(x + dx - w / 2, y0, w, len);
  }
  // Board marks: the horizontal seams a shuttered concrete pour leaves, one per board. Faint --
  // this is a rendered wall and the seam shows through the coat rather than on it -- and drawn as
  // a soft pair (a dark line under a slightly lighter one) because that is what a lipped shutter
  // joint does to the light. `seamPitch` is in TILE fractions, so it lands on the same metric
  // spacing wherever the tile repeats.
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
  // Fine speckle: the aggregate in the render, at the limit of what a prop-distance viewer resolves.
  for (let i = 0; i < (g.specks ?? 2600); i++) {
    const x = rnd() * N, y = rnd() * N, r = 0.5 + rnd() * 1.6;
    const v = base - rnd() * (g.speckAmp ?? 30);
    ctx.fillStyle = `rgba(${v | 0},${v | 0},${v | 0},0.30)`;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  // A clean texel for `clean`-pinned vertices: every corner, because the tile wraps and the pin
  // sits 6 px in from (0, 0).
  ctx.fillStyle = `rgb(${base},${base},${base})`;
  for (const [x, y] of [[0, 0], [N - 12, 0], [0, N - 12], [N - 12, N - 12]]) ctx.fillRect(x, y, 12, 12);
  return canvas;
}

/* ------------------------------------------------------------------ thaikit entry point */

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it with
 * (spec, options). `spec` is accepted and attached for host-side inspection -- the reconstruction
 * data already lives in this module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createAisShopBuildingModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  applyFasciaGraphic(root);
  applyGlassGraphic(root);
  applyWallGraphic(root);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: the root, plus whatever the config actually hung a mechanism on -- `door-hinge`
    // for a swinging entrance leaf, and nothing else. A roller shutter authored as fixed
    // geometry gets no axis: a named pivot is a promise that a part turns on it, and a prop
    // that declares pivots it has no mechanisms for has described a machine that does not exist.
    const pivots: THREE.Object3D[] = [...(((rt as any).pivotNodes ?? []) as THREE.Object3D[])];
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);
    pivots.push(rootPivot);

    // Sockets: NONE. Nothing attaches to this prop and nothing is emitted from it.

    // Colliders are plain DATA, not Object3D, so they carry no .name of their own. Give each the
    // id of the component it owns and drop the empty ones -- a nameless empty proxy in the
    // runtime list reads as a physics shape that exists and does nothing.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups: this prop declares NONE, and promotion checks built against declared as
    // an equality in BOTH directions. Derived rather than assumed empty, so a component that
    // somehow carried a fractureGroup fails the gate loudly instead of being dropped here.
    const grouped = new Map<string, THREE.Object3D[]>();
    for (const [name, members] of Object.entries((rt.destructionGroups ?? {}) as Record<string, THREE.Object3D[]>)) {
      grouped.set(name, [...members]);
    }
    for (const node of Object.values(nodes)) {
      const group = (node as any)?.userData?.actionProfile?.destruction?.fractureGroup;
      if (typeof group !== 'string' || !group) continue;
      if (!grouped.has(group)) grouped.set(group, []);
      grouped.get(group)!.push(node);
    }

    root.userData.sculptRuntime = {
      ...rt,
      // A COUNT, not the Record. thaikit's harness returns this field straight across the
      // puppeteer bridge and its registry field is a number; a Record of Object3D is circular and
      // fails to serialise, which surfaces as the whole stats object arriving undefined. The
      // Record stays reachable under byId.
      nodes: Object.keys(nodes).length,
      pivots,
      sockets: Object.values((rt.sockets ?? {}) as Record<string, THREE.Object3D>),
      colliders,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: rt.sockets ?? {} },
    };
  }
  const calibrated=new THREE.Group(); calibrated.name='height-calibration';
  for(const child of [...root.children])calibrated.add(child);
  calibrated.scale.y=CONFIG.measuredHeightM/4.6; root.add(calibrated);
  for(const collider of root.userData.sculptRuntime.colliders){
    if(collider.localCenter)collider.localCenter[1]*=calibrated.scale.y;
    if(collider.halfExtents)collider.halfExtents[1]*=calibrated.scale.y;
  }
  root.userData.heightCalibration = { declaredMeters: CONFIG.measuredHeightM, source: "quality95/height-measurement.json" };
  return root;
}

/**
 * The one-argument entry point: vibe3d's contract, and img2threejs's own.
 *
 * `createObjectModel` above keeps thaikit's historical (spec, options) shape so
 * the harness, the level editor and the Node-side gates carry on unchanged.
 * `spec` has never been passed by any caller -- it is inspection data that is
 * already baked into this module -- so this is the honest signature, and it is
 * what a vibe3d consumer installs and calls. The emitted `model.ts` beside this
 * file IMPORTS it by name, so a factory without it fails the pack build with
 * "No matching export ... for import createModel" -- which is how it was found.
 */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}
