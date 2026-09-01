import * as THREE from 'three';

/**
 * Flash Express Parcel Shop Building -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging and
 * instancing are hand-rolled below -- anything under three/examples/jsm is a second import.
 *
 * Envelope 8.00 x 4.60 x 7.00 m, origin base-center, +Y up, shopfront facing +Z.
 * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=16 unique geometries.
 *
 * One of thaikit's shared retail-module buildings. The shell front face sits at z=+2.50 rather
 * than the envelope edge so the entrance canopy can cantilever forward and still land exactly on
 * the declared 7.0 m depth. Every surface pair on the facade is deliberately offset in depth:
 * two surfaces in the same plane facing the same way tear into interleaved triangles as the
 * camera moves, and authoring components flush against one another produces that by default.
 */

export type ProceduralModelOptions = {
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
};

export type ProceduralModelRuntime = {
  nodes: Record<string, THREE.Object3D>;
  meshes: Record<string, THREE.Mesh>;
  sockets: Record<string, THREE.Object3D>;
  colliders: Record<string, unknown>;
  destructionGroups: Record<string, THREE.Object3D[]>;
};

const CONFIG = {
    "id": "flash-express-parcel-shop-building",
    "name": "Flash Express Parcel Shop Building",
    "exportName": "FlashExpressParcelShopBuilding",
    "materials": [
      {
        "id": "wall",
        "color": 13159113,
        "roughness": 0.9,
        "metalness": 0
      },
      {
        "id": "deck",
        "color": 6251884,
        "roughness": 0.93,
        "metalness": 0
      },
      {
        "id": "yellow",
        "color": 16774656,
        "roughness": 0.5,
        "metalness": 0
      },
      {
        "id": "fascia",
        "color": 16774656,
        "roughness": 0.36,
        "metalness": 0,
        "envMapIntensity": 0.6
      },
      {
        "id": "glass",
        "color": 8225148,
        "roughness": 0.18,
        "metalness": 0,
        "opacity": 0.96,
        "envMapIntensity": 1.1
      },
      {
        "id": "frame",
        "color": 7040876,
        "roughness": 0.52,
        "metalness": 0.25
      },
      {
        "id": "galv",
        "color": 11975873,
        "roughness": 0.5,
        "metalness": 0.3
      },
      {
        "id": "coping",
        "color": 11120049,
        "roughness": 0.86,
        "metalness": 0
      }
    ],
    "geometry": {
      "shellFront": 3.14,
      "plantMaterial": "galv",
      "fasciaWall": {
        "cy": 3.995,
        "cz": 3.02,
        "h": 0.89,
        "d": 0.36
      },
      "fasciaWallMaterial": "wall",
      "frameMaterial": "frame",
      "parapetSides": {
        "cy": 3.995,
        "h": 0.89,
        "thick": 0.24
      },
      "fascia": {
        "w": 7.5,
        "h": 0.94,
        "cy": 3.86,
        "cz": 3.31,
        "boards": [
          {
            "w": 7.5,
            "h": 0.94,
            "d": 0.38,
            "at": [
              -0.12,
              3.86,
              3.29
            ],
            "face": "+Z"
          }
        ]
      },
      "glazing": {
        "cy": 1.455,
        "cz": 3.2,
        "boxes": [
          [
            -2.34,
            1.47,
            3.2,
            1.6400000000000001,
            2.3000000000000003,
            0.09
          ],
          [
            -0.015000000000000013,
            2.035,
            3.2,
            3.01,
            1.1700000000000002,
            0.09
          ],
          [
            -0.015000000000000013,
            0.77,
            3.2,
            3.01,
            0.8999999999999999,
            0.09
          ],
          [
            2.215,
            2.485,
            3.2,
            1.45,
            0.27,
            0.09
          ]
        ]
      },
      "frame": [
        [
          -0.12,
          4.375,
          3.32,
          7.68,
          0.09,
          0.36
        ],
        [
          -0.12,
          3.345,
          3.32,
          7.68,
          0.09,
          0.36
        ],
        [
          -3.915,
          3.86,
          3.32,
          0.09,
          1.11,
          0.36
        ],
        [
          3.675,
          3.86,
          3.32,
          0.09,
          1.11,
          0.36
        ],
        [
          -3.115,
          1.455,
          3.19,
          0.09,
          2.33,
          0.1
        ],
        [
          2.895,
          1.455,
          3.19,
          0.09,
          2.33,
          0.1
        ],
        [
          -0.11,
          2.665,
          3.19,
          6.1,
          0.1,
          0.1
        ],
        [
          -0.11,
          1.495,
          3.19,
          6.1,
          0.09000000000000008,
          0.1
        ],
        [
          -0.11,
          0.38,
          3.19,
          6.1,
          0.18,
          0.1
        ],
        [
          1.53,
          1.355,
          3.19,
          0.08,
          2.13,
          0.1
        ],
        [
          2.215,
          2.375,
          3.19,
          1.45,
          0.09,
          0.1
        ]
      ],
      "mullions": {
        "w": 0.07,
        "h": 2.31,
        "cy": 1.455,
        "cz": 3.225,
        "x": [
          -1.52
        ]
      },
      "door": {
        "hinge": [
          2.89,
          0,
          3.26
        ],
        "w": 1.36,
        "h": 2.11,
        "y0": 0.31,
        "flip": true,
        "handle": [
          0.3,
          1.12,
          0.86
        ],
        "railY": 1.12
      },
      "frontFeature": {
        "name": "Yellow shopfront surround, lintel and delivery counter",
        "material": "yellow",
        "boxes": [
          [
            -3.335,
            1.685,
            3.21,
            0.35,
            3.01,
            0.18
          ],
          [
            3.115,
            1.685,
            3.21,
            0.35,
            3.01,
            0.18
          ],
          [
            -0.11,
            2.945,
            3.29,
            6.8,
            0.49,
            0.34
          ],
          [
            0,
            1.4,
            3.28,
            2.6,
            0.08,
            0.3
          ],
          [
            0,
            1.325,
            3.42,
            2.6,
            0.1,
            0.045
          ]
        ]
      },
      "sideFeature": {
        "name": "Roller shutter, guides and bottom rail",
        "material": "galv",
        "boxes": [
          {
            "cyl": [
              3.918,
              0.1325,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              0.1975,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              0.2625,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              0.3275,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              0.39249999999999996,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              0.4575,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              0.5225,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              0.5875,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              0.6525,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              0.7175,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              0.7825,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              0.8475,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              0.9125,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              0.9775,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.0425,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.1075000000000002,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.1725,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.2375,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.3025000000000002,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.3675000000000002,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.4325,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.4975,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.5625000000000002,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.6275000000000002,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.6925000000000001,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.7575,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.8225000000000002,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.8875000000000002,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              1.9525000000000001,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              2.0175,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              2.0825,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              2.1475,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              2.2125000000000004,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              2.2775000000000003,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              2.3425000000000002,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              2.4075,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              2.4725,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              2.5375,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              2.6025,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          {
            "cyl": [
              3.918,
              2.6675,
              0.30999999999999994,
              0.04,
              4.4399999999999995,
              12,
              1.5707963267948966
            ]
          },
          [
            3.96,
            1.3800000000000001,
            2.585,
            0.06,
            2.7600000000000002,
            0.11
          ],
          [
            3.96,
            1.3800000000000001,
            -1.9649999999999999,
            0.06,
            2.7600000000000002,
            0.11
          ],
          [
            3.955,
            0.055,
            0.30999999999999994,
            0.07,
            0.11,
            4.4399999999999995
          ]
        ]
      },
      "extraFeature": {
        "name": "Parapet coping, shutter hood and front plinth",
        "material": "coping",
        "boxes": [
          [
            0,
            4.52,
            3.02,
            7.96,
            0.16,
            0.44
          ],
          [
            -3.88,
            4.52,
            -0.31,
            0.16,
            0.16,
            6.3
          ],
          [
            3.88,
            4.52,
            -0.31,
            0.16,
            0.16,
            6.3
          ],
          [
            0,
            4.52,
            -3.37,
            7.96,
            0.16,
            0.14
          ],
          [
            3.9625,
            2.9,
            0.31,
            0.065,
            0.4,
            5.1
          ],
          [
            -0.11,
            0.09,
            3.26,
            7.6,
            0.18,
            0.2
          ]
        ]
      },
      "deckY": 3.86,
      "condenserY": 3.92,
      "condenserParts": [
        [
          0,
          0.41,
          0,
          1.34,
          0.82,
          0.88
        ],
        [
          0,
          0.845,
          0,
          1.38,
          0.05,
          0.92
        ],
        {
          "cyl": [
            0.36,
            0.885,
            0,
            0.28,
            0.04,
            16
          ]
        },
        {
          "cyl": [
            0.36,
            0.9,
            0,
            0.23,
            0.02,
            16
          ]
        },
        [
          -0.29,
          0.415,
          0.365,
          0.62,
          0.65,
          0.03
        ],
        {
          "cyl": [
            -0.29,
            0.415,
            0.39,
            0.24,
            0.02,
            20,
            1.5707963267948966
          ]
        },
        [
          -0.29,
          0.11954545454545454,
          0.425,
          0.62,
          0.029545454545454545,
          0.034
        ],
        [
          -0.29,
          0.17863636363636365,
          0.425,
          0.62,
          0.029545454545454545,
          0.034
        ],
        [
          -0.29,
          0.23772727272727273,
          0.425,
          0.62,
          0.029545454545454545,
          0.034
        ],
        [
          -0.29,
          0.2968181818181818,
          0.425,
          0.62,
          0.029545454545454545,
          0.034
        ],
        [
          -0.29,
          0.35590909090909095,
          0.425,
          0.62,
          0.029545454545454545,
          0.034
        ],
        [
          -0.29,
          0.41500000000000004,
          0.425,
          0.62,
          0.029545454545454545,
          0.034
        ],
        [
          -0.29,
          0.4740909090909091,
          0.425,
          0.62,
          0.029545454545454545,
          0.034
        ],
        [
          -0.29,
          0.5331818181818182,
          0.425,
          0.62,
          0.029545454545454545,
          0.034
        ],
        [
          -0.29,
          0.5922727272727273,
          0.425,
          0.62,
          0.029545454545454545,
          0.034
        ],
        [
          -0.29,
          0.6513636363636364,
          0.425,
          0.62,
          0.029545454545454545,
          0.034
        ],
        [
          -0.29,
          0.7104545454545454,
          0.425,
          0.62,
          0.029545454545454545,
          0.034
        ],
        [
          -0.29,
          0.77,
          0.446,
          0.73,
          0.06,
          0.05
        ],
        [
          -0.29,
          0.06,
          0.446,
          0.73,
          0.06,
          0.05
        ],
        [
          -0.63,
          0.415,
          0.446,
          0.06,
          0.76,
          0.05
        ],
        [
          0.05,
          0.415,
          0.446,
          0.06,
          0.76,
          0.05
        ],
        [
          0.22,
          0.41,
          -0.448,
          0.025,
          0.82,
          0.02
        ],
        [
          0.68,
          0.41,
          -0.448,
          0.025,
          0.82,
          0.02
        ],
        [
          -0.57,
          0.04,
          -0.35,
          0.1,
          0.12,
          0.1
        ],
        [
          -0.57,
          0.04,
          0.35,
          0.1,
          0.12,
          0.1
        ],
        [
          0.57,
          0.04,
          -0.35,
          0.1,
          0.12,
          0.1
        ],
        [
          0.57,
          0.04,
          0.35,
          0.1,
          0.12,
          0.1
        ]
      ],
      "condensers": [
        [
          -1.35,
          0.15,
          0
        ],
        [
          1.15,
          -0.45,
          -0.22
        ]
      ],
      "parapetExtra": [
        [
          0.02,
          4.01,
          -0.4,
          0.5,
          0.18,
          1.7
        ]
      ]
    },
    "graphic": {
      "background": "#FFF600",
      "baked": "data:image/webp;base64,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",
      "ops": [
        {
          "type": "text",
          "text": "FLA",
          "x0": 0.233,
          "x1": 0.44,
          "cy": 0.52,
          "size": 0.36,
          "fill": "#1A1A1A",
          "style": "bold"
        },
        {
          "type": "poly",
          "fill": "#F4F4F1",
          "stroke": "#141414",
          "strokeW": 0.02,
          "points": [
            [
              0.512,
              0.13
            ],
            [
              0.462,
              0.586
            ],
            [
              0.487,
              0.586
            ],
            [
              0.456,
              0.91
            ],
            [
              0.532,
              0.454
            ],
            [
              0.503,
              0.454
            ]
          ]
        },
        {
          "type": "text",
          "text": "H",
          "x0": 0.548,
          "x1": 0.619,
          "cy": 0.52,
          "size": 0.36,
          "fill": "#1A1A1A",
          "style": "bold"
        },
        {
          "type": "text",
          "text": "EXPRESS",
          "x0": 0.497,
          "x1": 0.626,
          "cy": 0.808,
          "size": 0.185,
          "fill": "#1A1A1A",
          "style": "bold"
        }
      ],
      "glass": {
        "baked": "data:image/webp;base64,UklGRkZSAABXRUJQVlA4IDpSAAAQSAKdASoABIgBPj0ei0QiJSKiJ3RKyKAHiWdr/cDZX5/FY/T6f/66UrwJJVvH/Mu83bP+UxFJXnaIBOSa7UfHeBv136Wf/G7mLbP2Bv2N5VNpQpG/8P7b+mD7Uvpvi3SF8qYCiR5W/c+V5713rPVJ+oumd5OuikfGf327nurk/k7qOU/7f/28COan/l7VH8xxL1A7cgYA0vZfZle8n/47/9PTaAhWCJBjucnNU2vgZgWl9i7uHC+MSwnIhzrma+f9cFoIc1STq9kCTlyj9ZduydtBeGGdV4P6sqiakC7AJazCam4xIWnmQnYiUB4Kub1LU8gUseAqozcMdaeWGG1uMG0OneDOkMa6Qjp/WATsHL9oTYbEAa5Y8BRUNQ3FdIrlirNrW45gJjqfQLxJa3ZTLV5XzZ8n2oUotDiEG5bLhCKIMCgjj0gLIxioHHdOFkOIQMTDNBIMJQGNePLFXgeaurwAFQV5rOnbxL4JECkH20y0ns0xTo/M3gAICCfDc+giwlTYeWOzQNrj4KJz/fMHbFqmBp0jqEcQHJ4z2ZHyHJ6TQ0T8AISw9o04F5Ly7/HR1K48xmydT8+0knaHdkSrwHNFfn1hD+IlmGG5eRbi9HRHWwkh/zLSDzJQcMFp43dY7HZtEfaiXpusKp3Huz8PxguEDTe80n0quuz45SOWwsQMCVeiAmb7JvsPpytzL9K9i0H+yItA182//SpqOLvDkb1MQRh90M5Bo/g8JvDIuteUZKgmJP5hy0Ewu7z9VViXe0ff9E813OUPMBjA7X4d1uvCWKVl0BqUU89BJVemXoDIwok4MOVgZVnImgb3jRmM0UTW3xVlLAk2NJAETivdbqT3nQJ54u0jRDf2DYBQYtkMzFNy3xfBBQZSLl17z45boDRjH4U0JPqGugK6nXgiinaTmoMheh6JdFnRpQuxWPEXEqUtNkC8yZbrWWmbAo7f+bL4QbKIfIx31jzyQ0/2MedhGOTAG8tO089+ilQ9dD+DyiVIVUQLXcaI5lE5lytoEKrRSwOQZJKq+A0hgZESvDr5gj9M1X2kN1SjiqOkq1fK8v85acf34uMWu/gmiHsBPeg4qwc7mz9u6Zy9Xot6w+a0L1GxIN/MpWbSjNlngC+HXyGEIhQBVrrbv5Lap0BiMB6ABCZx+y9FEd+mL5q+XgaRn3RFeHzNYh0GD7Zi0iuoChbA2JyUGqITEGeFFHdDgFLGDaxS0H3C/+moiniCEEmvy/f8859mqXUjGkMFxC8aA5qAGgl4P0Jrk1a9/l5y7KtKAeIqo9WdBwZ/2svFoE3KiU+NHNN6+gVy8f0WzfcQVybdRrL8gcrU/BBMQ4jZnlBZdgXaY7XewRDyLLg4CRhEciebxHJ3+/UonSD/zoBdJ/P7dzt0GtxCyxyxQFQinqvd5F17U83zuSSdpNTOADakDYG9j72RreMAD72Xuj4lkeOGz00VoF0HUxObKZQb/Nbwo1X3/G7uBkfZWDul4fRhJJtclZWxPCGVd0/p4EzJCNPkWbkfavZtw/99P7so5yXjxu75Db8BfTnzBWy1mbjRTp9dCzx/OJSotgjSj1mkHKXrIIO4mTyPwQb73Dn+EyyvUQb9WLrf67mvDSOtp21zCxiymNn6Ktebsw4HDO7yzYDz1jS86AE3mey4nH4GF70IPEhbrZZBmbZkIgSz/4dC/qfwJUOXff39FRKI+9TRzT3tb8teAaI2YUT1QCO+T03iRTsZCQUFW3gY10LO2lEmOeIYwI8CMc3eIDPjFqGCUH5lSvThn1Oh/N9npgfCPVgHHEju8730+pf/imU//1q1mNC9f/KiT95u+oP6aJSZMJ3nGoNLdAMiCo74KJVaVMctkD2g5e/PYPWpTNOyak/K5DN/0JtwfywHR7Uz01q03GYjk/cQyPLPyS68VtttA8hTDiJmJoYJBNpSDM/kDXl0nn7xUl+1/u5xi+SyCzx7rsH+9qCUGW52JvbaujravfnFBx0HBSTga0FtaOPML0k83GpbANpM9gl8XaQ9RQXkkAw/t9Iht5oMZBqILjv/dgELLyzeofjuDIwfd5iLc8ELv36NGx/9NYrQ3n+rAEqj4b6DDgM2uJsNqUCrvPbhIgzJG/LQ3RKpz/JZArsAGduDwiylpUZ6hPylZXi7nOAcV9bDDHifC0IR5wSlioD8q2AYBDfAEF/dbRhDRWr9qHD9gBQYz34q0cj4mDpi/hpeUZ3qzmGUrcHrVT5SyNqNWavqnNXXRWgT7b7xJ62BKeef0/79fU/w60YnAOG+KCmafcmHuc3JReSyKNQzt8YGgI403Cz0WWT4GdlsBMgEirWGn8WuWmmbY8LzzL/xqvrNqEu2W4IOpLNqkUSZsql/DVVKeZsjbg38OlFUyCNmEAv1R0U+OARXsmIfu3+L/zk0i3eQ+A/TSTUUo16vhefL05K8JTP7wP4AlyEgZIDqsndECuD7L9mxtrvbUfu6LH35xajYeKDn45bDgCRWRW1h6FKM6aQNmvf7jszK8VTambeG7iK4GnL73J55kxAJnNmYh7+f8KoDOGqcvlFXW4bjFBFmQYP83fDOpNuwTDM3JNmOTX0EmPXCJ6dDB5zv1ytGxAKw/mNsmiHtlYt/1gE7N/recaNiTE1+DIStIr2nlzjyT5AIoZ2T/i5lSop4cb1iJWYoRsy2YTVnnEtJQbXJMo+AFgvgY85tr3NkP0RdR3Y0Rno359UgQ44zMQ/3AQxpDt+OOKpeCzc6iHxBZXXcctU+prqHkl+0JraHi+lLftkouUwAoF9TAMFc1vUgPOx+StUs/x3/sj0uhiTNBXnohDcd0W/SWBqAjbPaGC8ShU19QUgshmisBFwp0dZI1Y/Rk8OGZsxVqmNt5fSRUSehfHxeWllmk+JDHJKo1lI/G5OMfFk9/Ik0OCGsIPeqEHG1MSqnXLIeR9/q2J/ndlA28nay+bejRp2TflawZYJxpMchUuWi/c1c5t9CTgHiXfqsEpVLL8SWOPVWOotmnk10eaiaqTdCX33pym5pecjcE04uAOLQOnwiSGxAnTFGoF7V3Hchhq628eDFjk6Qr7+ZaPR815SP4KrEwWsmPmNzDXHl+NzwD9lkEZxPlVAH8wRCxRi4Tyukfr+BGKeW6A/c+amGfUR/Eg6X/+6HdwTxOLZlMoP+PNrc03BBvSzXiAimLjUTEpGX4r/gXja/+HsWXelQyL+X802myY/7bJ1Ke7v9NX/m1f/zaE259KokSqBiDRpz+/u42r/UtAqcIQYq/ceCS4ew6zWBen+NcKr1qta5NgPFKZ8n4G/gblcycZtfNsbh17GdedYwiCErT+2Mt7D5Qic31Ent5ohIl6goeuzWc0SYufwfJaq49F8fgICLGarIwqGx3yKegsjfdndVOlR4k6XvKaeYZpJBj3njNb9nn3i+/FPrzPtnWSC5mAOxmK8h6RaRc2EcgrmCPSWTWj060iOUCnN8fGXRoEyLY+SXVMX29xQZfhYOEBkTQieF4m2W81wsfiaYRn/Gdl3KM6ZI6XIvbvnuQKxuEITzJ2dk8arvh+xCfmt1ckdfCfVFXJ50OHiLkOLf2DFvPzd1whkUU9FWtrGnIpGu+SNUWPZdDuqfquQkFIbqL0LGdSvOg1dlAWRhMBwiss1UgQ4V6rJFDova+Eh2ui+xClqrfhOINpMixSvKlN0WrjledN7t1vJQp6lexJwG4vtHt++BKdKEMQf+WRSennrGqQG2K4LIeiV3XaS53XOYi9cWRHpnxoqVRdWPzid5ankte6youI9Ru/NJ9WB9gjgMYZTniGegqIyczgqUVKr6MPcgd0bqcq7d8IetmaPZCgNLSBCgIFdohzzJ+CgRUYx+4KKw0Yv9+y7nslTBVFC8+apLIZgIsmdnb7agm/58ad+2VX2R+3mKBbGUnEY2KN6gmYsidddXdmN7phxz1mW7K1EVGoCS072hBWcuqr0Lq1TMMpztkwFMemjlGoAWtSQHqQwQUV6+dRsEeoQYcw0PW/WpP/iZ///6hkJukrZB+PhxcrAo7OFWfuWxzugxtftEzLp0KEfhi5qy87j3Cte/SB1VinnPf63GD3wpxeNkTttiSchkkpgWvwtsZagy4qk/o7b+y6nhkXSF94ibKVYErVTzrVb1/UBh5XOxJxGJEy7WFkpBQc65DatXidDWAk5yBvE/QMAx0YNn+zYKDY7HswJr/rt+uqKU4soZnXqpkF6/AVDp4XmN9Wi3DN8drrWPF+JW6wKH3YHSubRzLo+GtSgAcYHlezMdsdT030aJG7YKiW9E64bLsiV8WM+AaL6F+KVNgGAd1uscrXW2D82/n6nOlUyOKZh1+DvsEYeAm7Nl4GAVkOojG07s6/rPXQdvGJEbNgSy/yrWlFGA+s+41noiPBpuFBhKG+FseBN5dJe+MOXJ2et3N4+P4WcGF0LUrX/MQbt9CDVlbQ/jYdcx0MKlQA/G0bfOhSzA2Z0uBIB+J46F2ybEyccCozS8ytjXdvMRmsKTBE5P/EbKr+oszKnDv18xzfzOI9nyF0vdFnUOZnFWx+3/9qO9tt0wCYjRgGracDGk7o7JxxkyaINVZr9bvsDznwZO6qBHIbbcE+J5Fr9+9xyUD2tr0n87LrAkMho43o2W81N0iVEM0pCKUJ6X76yBns7PBxLjwJV8MoqTaJs1Ph4AGbdecyKz1wDMfZ0BMm2BYNwCfdnCHqIIu7fLPjcSQTEDg7flqoFQck+iexQmrKmAEFxxAcnand02ROjm3tsFxQ6uTQKl5/cN7LqVRa0scse9St3YM31kxtNNLPguPQ5+77FtLzmTxtW7TDOScBRgxnVGKmHelZi1wiY4fFsH/Pv8JzWkrMt/CZyz2so/wEJcTkRtmbghopWtT9CqSpsqEU++h9AtCtozmmtABp3zokWT3PiqP3e8m/7u6jm0mBrZ9uJQhBRems+f8nf9qHPKck+AwbJoaAF/eh2YY6eVaAdUp2lpFBbku9p1/Ty+3v/xtHHFDC45EXwUQbpIU23TK0BalOlJrNuSwFFKfNuSUMs1dRcUav+lF+z4XalSc+NzH5165qKxMSxrd46JhMcXzAJSAimzUfwkBzuK0tjv0BusFfXuMEohfmjIVYAkOxEDZCHFHoCyLwe8K2fiDQ08p/+BK2pXINVDW7BPN18dAGpAJdqZbjzm/hbafOPboNwpgcozrb/xurCK2Z+ZC+NInUHZBeKaDEb9OoBCYAvRWD2IJUnBaj9enKCY8vFY2z4BuNRDtmj+WSVS3XyUR1zHhbpVmYw86myI+RUxL7FI28COWSceiUSeEhPqaHes3mTHTU2IG0Ir7Zop1J47+Vw388/i54CFdlXv41yJ1qi60Av/BMUDmVISPXlVdCz/uA8cm9pw76dyKyVBH8Ir3Kp+h0SEQpuMgFyk8dg6VwAGX2MoBHxyLRtLK28XiEmG7GcY1QlUfNe1mET8S7p1xgR/Vd37FgiFt6C3FkjuMsbOS6USTGgjIb6XnKxdQFn2l+oWLaB5Zav6xEBhNTdBf/wANcFxn+9APW0R9UFe0LxsJ7M7R6ff2jx5t6b+iQbYDFkU5rLkslwx4XXfitNUZtgq1/PjmGG94TAUL8OD13wpW4/zbUi33sI3U5ABPZ1m6VP9OgcnRXe0fprIdlpvWy1StKg568xcXjinX/hifQXzMctB1TekFYdWXfpBm1CzOLZWRWkYQhYnkLYYYdHNRNVzkAHpYdYwqJ7H1zBXwVzQBxUN4vN3r2aeyLcohkoqitKRsEe9ZW0Xn9y0jFP7YA7mpwdwg1NV3nNmyPYBiZZixAD9/kbSaWkGOmkXwT6F2dZF7vPc8bCQ8Lwp1YHdmXt5aveJLlKR59oqH0BxWIJoKaZAHZXV3ZjI2IbYVfXhGYyKdIfjhtGIpNa9LVWASoU5onGlcEaFXN5buoxEmRbcYDaMil5Yi4gNsm7Bl3akk9qB3SGqp3jAvNXGDi17iYu/3xjdReURizIsx06B8oQHg77qzjEcHPchsmX52lhL//568uMG4Yjo7O/7tP8bRY5NiT6P3pFNaxhl/RgEh9LLorz/w5ILUEzFhG/QSr8EWuytKQdreeNQ7Y0ULV0mLGZBLmoUGyuL8GspJ50X+Bimavh2Kpfjdl+a2PjO0JmYLmSOQaWJz5vlpwYOeeeg5BZNakv6aHMYyuEqgK/D1XEgq855YCnmENxbKbN+svzuIBKgizz9kHMY591rOm8g7HAsgk0sgRCwAHj4jpIJJ89pL/lrbxeVnn5T/91X4x+ADwFM+i8rrQ79g5f5npVC27VYLiSOQ5Wr9dUNllX3HEne7W3/Nek0PCXiGQWHGhcfcZMfw872yyuk04+56b0p7/SD+21FKcDPRL3ZeTyVX6pNZSjbQM1jkt7DQrbEtlJKWLGiaLtOqFHB4pm2+MXdq2Zk1wO4MtYVkR6KvfxsBqeCZNbfHu/+klLlj+dBeFuwDGlR0ofeoM19xdlb3xDaeOCvSCvA4MbIm+f66ekPFmCKCgZbA7/MqG1uJPEddIHe0hREKV1UPSVuFtxieIUaoJUEtfOOmV+DbiqeQPECcSKPGAeGsUiVoYJLg2RKVkjC7b+hTS1WeKzNKgwae0cYutbZncVSqnQD9vruuh1enTdkhO0BcaP+BmfkPmdKac5WK/J371ZkMw7/xD6s/+4aYms138SMVNg2B7Wr6QiSDnvwaixMNxUYxA/eV43KTPttOY5MyZ60X5X0U24hOvVK55z9FlbSxlm/KyQGNH5BrNjVZcxW35t58C8FXnQTHZf/WgxVVS1eWA068rm/BNr3QW/HDyoNwMwIw3qVfiRzcHbgPsSmLKnDp6zx25Bh5mEIzrNhot5KHOVIIeFA1hRMp3o3YrRLiOaqikognL//lAv8IZfhMjPlgPjHCwSgx7DEMhygvySTOaR8Tsh20XZC3XcbT6AE+X2wy0BD1AkWH41m+GL8vkFbm0+ob1OZtZUDhDOCZ+NaI62ARP0fjjsl7rq3NPkddqP1l1c4o9SJCX3C+QrdAcUfuqk3yhbXqPSsEIJAWW77m22B1LhBD3dls85O+jc1wKr8RpytZbxJ7lJ0LyUWMgDbFE3zqfXMeu/epJwZpiZFfOBvTprWGqUDLmNC2RpfVE5dWB5Y4lM8NmlW5z+Xo0AgQqXjfjSWsDNIppDBWI1u2QiMFxNDYEjp95nMOsU0ytO75pong8nDNjTv81I0eTWgFK/Trh8jzBRvNI9y12JrsYkWvhfOdPUFvd7SNk29Ij/9/Itio9p50+8vyfLC7qz/jueyta3GxAx0iWXw41y86QcpJHi9QYu63+S8ufYOwHtcyTYp2LI+Mb3aH+M/lMHdcIv4nJdeVAR0Oe7Ct0BY3VId6eryENzRq4lnXVWlePUCdYl66nFghA+ICMvEr3F8IeRo0qew2iXVjik9yXyJdMy6AX5jBYnOn8AnPL5kDi3YsJQB6ODXUK/kAGn6IcBjCn3yQZBWc0y9Gx81TRN/gHutIX9Dl6d1fQD4Z8FG7uIY8IGqHtwjDrAegNJuIgVJ8Tm5SgjbqRKlMj3D3dCVYvS1ajWt3FZ3hC6eDC72K221XSCjjeq/F3zyf2G7pqqw6IsZQGeTjBMZnS+UY2hL/hqTWGTjotRAV0We7EDZvNs8N6uC9zIjbf6Yj/+bq5IEwo67cYkYfdm1DvzRYuzkiALktht4thIULndXT+JZEsJLwkEHJBg2lgMAukT12Eg+XFl6wvg2YWYHJu/Hx/qJv6Z+GuM01y469QM8CuoYSvVgELuGz0YJsSe9WFzLcqCpnG42VNyaY6rUYzf9QuVE7fi/JC9FKkHMuCVZhzjUdpKDWYqEJ9KRkHTYBDtd37WtYvjlCCFuc9M0r5V42sB9KJo2BCPg2imtQunusxs11o94kxNVCGAGLOLugPXVpew0sRkNjMiFCXAwQkMEsQb7NPqV5kqcoATLQOBt5h6ajpJ7xtAsmOTKzMjAreb5xRwxIpRjkRUSt+yFBNTw9joAqyDx9nMvXZdslATH+DGCoUSuuYn6l+EgKUrGMuBcSbXy0Ajh+EBbP0tCo52C3u0NQfpY1C0C2Z9L8pGxLP+BEXbb02NK+pkSjsHHKoWzp2NqiMDPQCN3NSdZSLyjhcpddmm/1E8rKrN5DlkUSwrvnDpjGD0WU9MAPZkjC1BGcZS7ZDcHXWNdT0YcnZN8OR61XZhwYSp/ZiXD9s9S/3LVD/nYEp0Sebj/qIHHZEWk/NlQFNKWbn3iZga+Z/GSRELLJkTyUCSump0AGIRgFAVzxdynd3mW9GWux9WCfb/e/oLkWG7HReazPyBINg3pilDbpR7p2k4Stha9QMH57C9OhNAApo6zEeSD84yyCE/rfBICNLxF5YmKSty+wvGZ4z+6uS1hO4dLPw6RLYUdAUUDp3+vrMS1vhBoms5fWoNhK4ILT7oh0yvfDAGGNPIm7ix2qb8GDWxiC2UYUN8DmWpU6AoTmSDTrdYvMcettwTd7QGMDgWIUUFdreorKSxPsrIDHzEkx6h3m9FeeVh4SBxCYWUoQWGf7wbCc3RYGBOdPXRcY3cqNTdwMCa+g9ivBgGUhZgKqbHP/zcMbJ+LxC7Pepo2a4AWJfdVbYkNtgkJo1gkAICDJBirVTdsn/P1fwMdy2FiXbtGLd/YdCBsvtWcc/E1mo+sZeHoS8mDnxV1kTUZyfeK/WzDm9ysPjoKZ4wRx0bZWWNH5qE2jxRMF/0Dz2lfqy92HYJLTsO4+dXb1q7FZWNXxfececrf3U2SuOKVxnVm086JKvBTrRWG25oAan//w0ze8docdZcAbhuDDJV/8co3P3bw1t4ZYpJbWEgFX0MkCwopezjOhCskz8LbX4o7rWeafg/v3psDoyJfxKgGFXyopPJrFM2zYMdXzLQvWH2KpdF2wNt++Pt6sRM93+NAoJp66YmAfke135xibpEPrsk4iXCr8Iv+KUXnD2DMpXwPgka3w92G31QfiK1+hZoqk1IV2d1QysfwyjSlbqsAfG69SlYNVznOdkL/fhNk91lxTWd+n2TbRtT3FFxqz+d7eXT1zILHUNlrqgB+DTJ5Gc2yaEUxvmY+NICWkpjMGofIy1Hu7cqbQxiiPptxcEeBb+sZT7GHs1XpwJ05u6x4apoNRuc1gXwPxIzOI0/7yiH4lxuKw/sie5upk3pWS0Ikm+iGXzDeiLu8e2u7WWD4ymJJ/TF/OVPkqqHYx72JIqSyAZIPNwgxiGDX+8aMqjtAiNFBAKht0qfg80K0MDZp0zZqJOwyDDGzcDtJ6hg3G0JmE0TTEFIt8dWrhajukptfMihYJaVUB+nMnEE7Yr+MUe099VuYVoUKwCPM86IfRKtSGOdTAT3CvrpyJupPvEbKrkrSdlLWiIAYcw3EaDVZZppuz0YYSxA0igYcWXfTmxmiuqnpT0k+iG/nc68JAAwB7Uig74/BOogBPiqAvWZRAVVJVsHLm9rgiNlWRNjOVNZnAK5bCOHbsFF6sxZWIxGNKRVmYF7RpxE6YokRc9xo5gK3cUOu+Ww3+srgaDrQSED0p4E7MxkOmz7SSqdzBjVMGe+GlOcQ5ABNKHWDuLijytfyo9vmiALuSvxYvg6UVBJLyBIlXYEndI71WEWH0YmXLWcBmZ++/nPjLWO1YDlbTA8PocRK+VlalBKxTCBIO7oS9eraAFhXtm7cOYa98IyIiuQQDX+MO7BFUjh+r2+KxRdxZiMO1eLlmD4/jNW3iYngkDq8Wk7oshKJVuuu/NDLy5KIHqKRRMP5SerQh+b2jImg3aBo+7uqmFYCkhRTgviKJnt42/lf4jmQWfnJc+nKb83Vujxt9iEjI8VhBh9gW4zsEWPDDsVsHXn/a/ByzyCwSCv2bxEic6vNe5ICa9EYrGu1PJ1ZfEwOY7M4uYOu8C7wnSu0uNp38bShAKPGiBdN7A8yrUIQsgfHyhsUlqvotfRqtpxUVgX6uyXzjbgTaNahqyDabkX0QsXxoYBpGiWBhrLsQB7L1otHEQiixaDyK1fg1ML7wbKSIoxDFZvXJFrlVkS7Xd2ZtYW694HtQP/sX3cSkGY3h9/i6rPVsgpvyELUWeld+7BcZ4qRWZNuGDU/00eoaVDusmmADIsfzngVPns/qRWQE4EbI3JYjqw+QiXSxNsZ+I5Iil5sbs2QCfwfqHhoZlo0G7/8/lhKxaq7ahrMEoxj1+oG3TMV/qF5xp+SKAKHWBY59YpTN7tIIYoJovzrARDznh2QQ0is66lnnCsvlFWhHPFuQ+TO+qG6nMa+Gxqn3SDjq/Lzoe4cRHysVfqXMKXjvSu8UN4BPCsUBJx6U/HfaofahqS/Q32pZm/jSNeS9XtGVT1yw+I6qI+gWNGkcioQ6rUaYt8Muofq0xS/+5/ARZmoj/Pmt4tqST6WNhxIKUnnl82BiNbEEAtvIaOdxNE9SDWpilEZMFcl5RdgSF+PgzOCMQwA8pMlGENUtAsizl8uZviWaLjsH3EVIxZUcFVkoMrE2HoXOZbpcexQlce6mUEykxW5721c9xeUmjllL7isck+kAd5EqGeAIKMkEz89xwNRsuGvheG3uJWLgB2PmmXZFYE8puDAj8SkjkVO28FG22vUMzvHYuE1fWsaY5aKILpSUv6ILCNJywxrhRACKAuIGBo864jN1ogyPcsT1I72ZFOlASCWU1eVDzszr+NrrnWlWCPX9Ik4UmH0/Zp+qJwfQUAskJu6N9qFMZYHajygFapNgLqCk0PHYCe/TuzEXgMUUbqv/ch6LPy8NsW8nLJsE8LCj7OYD009Un5uzr4Oh62LCFzgSqKJV/15AMoJiPo+e8OfRO0Ea8JnF9DOh+/6BZoKJ0G81GP53+0E5NAQvKPUay2QqnbIIp4Uve633QahgcpETsO7VqKLv4NerOrELA1a0WoOaRGOgcfNDF9fP+5POQAgdzdde942mwFt6iabOApjXEn+MryLAH4RjbcVr8+OdHdfvuTcfWcelVZVb/GXXRz96wxDpvZrAUlwkOuwlidK3G6VHVd6y8FGQAShrHarY1cSO6i67DLBSI7ePAQCzJgNeOfj1y89zOI+w8PFUgbtcdhQbL+74sHOR5wAG1tmpoBquWU54EXKKBXHFCnHtD7fMKB1HM6i7YOtjj1M9L/9sOK8UtJFZJK7QDSLFxmh7mtUPKcVxXlQwMsNPEL4fDSmGm52Bpqppj/gn7cHh9HZIf8WbUP9+E96/VuMwbb7jSFVtK/XQ06meYFPLr7IR+SkzOCN/1GBhsNeiC+g8vLZ0nS6bZKECo64d5frB0I2lvYXM+NdpF8nOzzGcBumRROLC68RZdL7Cu6HdbU0jC07a7Yl7OoE6EnB/jzrANHyI7dfhvsKV52fiR784rENvhbqQXCbRrxfS/dCCxtiShaTGhguH+TSFGe7e1KQ2BiL8XMMUl0Mmejmg/Q7ltJPfutNyihr5qWjJAGMZoR4lPFmYPZKvpTH1wIM3Y7lRKF++kWFCzbv/oL7zIKyXEXNm2oXtGdg2YAKXwa+bVysqFj0ezckp9M64ctdFIzKCCZ9RfFp1FTeYm7Xk4Sc7Rep6sDbnhOTME8np13lFIfz14UURkwiaUlXfi8Ao97Qu59/QCucw5LBmGUyKIbsd3A8ppEEWQxA3z1AfAw6IpZGCGYIekSD3rHfFLZ0nYHHFet+Hm+Zr+BhTsfRmSE1vEIq0NWb7cwfkt0gAp4Vj1WXeFrdYz32RF2UNPgNgjWJ+Jr4xnrxyz72zTr28Bg2gO9lChb6d+1K3NAQVpFrKJmSkaOl6n5Zmj4UqUGxW6cXd+KeSX/PF9j35KNxuJB2fJ3rd4h9SbQ3EX7uWoRUfcC6iZqJnff55cG6kbfjlf9nr/7cjzfwW7+2HEINIuZjT4TVc2bv4zSoRc1XNaS1s+gciqiF5FflwRzwHZBoYSkc+2e4XsNqRo1u/9FYl5UbQ6MsnxE1m3J7hG+uPLwtWFfUip3UginrYkXN667e190vq89PaqnT54x2FaOXxq+5xRJK1yFD/TIh3Mq1KPuXVz1iCTJdaqPAGKBFoocljyKAV/KaWbUQ6XT3tdUn+7GaA3W/8NgbjN9I2fD6p1TUCSHQSIqjkC5pIvi/LSMOxhnz/jd5tQyzvZ7BWa0v9Ra05FSZTeSVB95aRlIfS9dxGgVrco5DfqcYRVUUfCBs87biDIgjXFqLr8Pg/q956AMRaBN6CNzRy0UgK+DUJOz3GqZdHd2+wmHfqo8CIgAIOmXM8hoExXtF6vzgclqmNV5mKztKF4KyO9mTsIL9n2RrsbIEms7FVokStx/79bJQvym8MUnoQ5yfv7w79McHfcP7TNBat+cgGA9Cas4XDgLw+q7nWSmuh/3nCBArYYerwvoeMWKbtQ9Tqm0FlIHtVIf6NY3X8WLFlPf+bwKHHWwj9K3ojk/lBz9Kxwpm9ct2suwXbYFN5lmgcEhi3fI0w1SiK8qVxHB1K0DkTlHGSzmjOWuu1eg6qqjxvUXdy35s5L+7HpYS5MIb4B82fwgin1jzoUCEWsHGUQQfHsRdy39bNgNOt6mJoTp0fM2AwTflH6n3Uu5553/a1ktvx02bl3uF/uVoKb1u88VRaYYIg7mo1luS2hmWZPqfCgrlaqa/EA/8NZoCyjBbdtTDDrsnyjvxoQyaMylviKVNwU8cwJngm9Vkszr4HZVj96N9GS+dGlDP86NlJM/k/WcnfDeVYoHXkaof2H+2tEITZa2C3OfIR17WfUrTe8kUAhPAJV9cWpLzqoyjCEdt7ZY3eut3f/Xf0cratpUm9DW4IBSHKjOmYA0j0+qVR/8L2ZlKG0koEnJn+lQTEtBmNHC2mJS3+UCqYVg7egkBa8H/yIsoiAuL57T0+SmBT/M8DY11hNIMw3h09xgwqioGmatvvu48+7l34vHJvq8wMHrSdrMW5+4CqPjKJaYBYL8BaL1jwhxYZOIOgGrk45q9hPIgrOW7xEhXC+I53/AOyX7Et8z9ewbz94lvsk5zk/jOt+ryx+xtu+1NW7OLg52KfxFQPabWkDLPeUJHYYZGwve3v9Oe91uml/KmG1xJQxFWx08gRg4IUplKDSR8jYlIUqG/V2A2pN/wvATQ0aCTvNX+x2dLo6C95gjrQOgfoxU1IM7lUrrSYDfqUBzH3wXCZLPShrMwwc3GTw10ufys6xtIQeMBJA+qam4tCvzmY68fbO0gwOYx7U+e+f01j4vc3aH3vwknHPFaO2s6/YUvAT8tpUOGSTsGQ7y0/pYnBDpe/4LFHWeVqBn7ZFswaJZa1KuXAHfPSrLtxeFLBADkpCgjeYXudj8z1dUmo82i4W0dzqpg8K8flKxg1/+CRFZxRwkxVovAos8/z3veeDYpxySZLPy47nqQf0V0bO8/99qMTAwqm8+vn9aift4lmkNksWLvrBpUrMJQIJDrM56dv+SjnEZwpsqlA0dpA0Qn3OlokE3qluVnFBCQAIT8MZg2QW7QevuJeCU2SaJ1AlmR3KNI5O71ZSEjtgS6u8lBGxGeB6w7W0pKE8K/e9TxvihTun1Ph6r5YfKZx+HgBIAN9xXGt0w/RkP2gyY7uGtOEqPXv4NN65AwnL1m0r7K9/w4/ooQ+NL8Bqt1I811N2drJ8UCcQQ+xs4jeq1KfPVZwZXZEcHr2ekg5RgkyeEyEeVu1J2cUDIXDC+S1CGN2Nz0+SyItKH/CJ+tYOtKL1jmJSnN7/TVu5tD4pbLdTEXELmAhzTTZf8a83ZTPvoE74XRmKYaCSyZGgxL/zXF67iyLzFFjiXS1Wsu1dUyZLpk18YxQ2eGS0ZampstLELi4HqHTbAvy4/g8vB+RG3OoI2AK9gioDySju01JhJK6oH4sFugYqK3DyYrrx3wLQZElp58ULlvncOpkh1CxZUqC8YWW8bFVYcD3lLiY18YrqiUShP9dQETSAOhjIlKZEWIrpROLQSqfd71Wc9zptUSOHl3W8clh90rCEFwZWwfWduUTMYoYZleZSewd2Ipsh9bKK/0AScBTaf9CGR/9GCAZ6WRACjJkqzIXf6TheYaz1Qg5kiR9yVR7aMzBIIV92M5WsfeC4EcTAGybAcDN2vah5iZpaCFW2XswoQc4LvmtYkp3PNfF6hkjmE3/uQl62qmcxlbc7DOrTotgHxlEjlQY4QEG8yj87a1wFhOiB0CzQOFO53a6ejHJ9Cuz39yF1gDTb1rllqoo+dcxcy9pMylU6dC+8MdN1eyfCZm30PmVPTfMEWQWq5nITvO7GD//encf2SRNtkx2L3+kvm3y+RcpcwW3az/ZzlkDdW/JvdhkOdP/VZ4LesApp1abEUREM9N9QWInhiOD5Sjm62gqvvHjC82xZjRvU6uDcOCrqlAiAtC7kyJL6YJ0tsueK34uUI+67NwhJrrVDtFnR3rfz/b94MP5AK3oDQwQ2GphqnteV4TehazuLZPQqGJxdqbXTiEFZ38pFitZPIYJVUzDknikYKRlDdfRuk5wRQm7G7Efi1nXE9N9hy/puzCTKUBoH3PPzJyfk3IS1bWGpuz49zcZg0BSrLlbHw1plHGml2rUd5AYF651WfnKZ+ryg0weeYpktdmXQ4AdpRzfEvedNE7hV34wAplgi0a+2lUz8Vs77nb5u5PfPMQagmbNVLDmxCyIEp8wmu3AZc0AFWtL1tAKKmD9Ug7rObHuQi1SQbD8r/D4xm8BNQxE26FNLoF8rDvzDsrA4ZOOvBnliIP5YmypnOtxsLJlxR7HjhBXlM4xzFBHZ34QkeK+tKCd+7llCsQb60luL4zFurhIZSc4cMvQWtddWFSTiepQSzLu74j3Ey+g/dw6VYZfJvJpi929IY6gK444L/l3Jy0WrIduSi8v69+22cRFQ1wa8/N7Z6Oft64Mx2B0kUpDHKIQ+18NWT1713c4bFRZgWfyD08EXCWgaRsWRZ91cRdZozNwPia464Qn8tJYSwMWZQPEwhV7XlCPlQfkhAWbpuOGRwFHc0ucG6uqQCl0UASVWkMopbEanSKqYYpbdkFSum+qOZiNmyK0hWO3MjffXL625JcjLTcs6Mb52w6Gkq7Sl11Ey7D/gtpMNh1ebcxdmaODs/mEWY8n4/0OOS/OjK2LdzB2JA4/kZWseP6QLQMXs/XFQw0qabxTEIuXxITwWGRJxsrjbJ2NPmbVjuLnO3xxxh61vVRvIR2h7wVZgd1sFO20U4a6Rx8IRQtkCC0cUOeKfGkW2O/lq563lG5RwMayC84eZRmDjMaWz8dj3B31Ad4nXXS537sAAxFN1c8oNAKIR45FF4ybBkuQdC7Aq9FI8sJn2CyKlZihLqZ9CN+gZF5mvSBkDO8t2xrJv2dSv5QjVYX97n9kCUCma/Bc25RDo8vNHLGJTBFGcN2LguCF4sSXFQXYEYUMOTsUlxv5hKsCe0fFz24f7Tn89oY9kGMaK/Okzb1+KqK9/KzYLfcDERBtS20+Wxg4uFtoIE4kDUYNUbbbuplBTaC9rHuuL/0xx05vnEet1KbiOArzvvjbwYWLRGlXa0MxETL6GQ+7hSZLybV6tEQ/TUGgjdLR8oUsZGOOtpFPPepSmhzUzq26FbCNU5dKRRQ38oSYpqjW8fCT+K9subGjbpNqjh5N9WyF/+SnGS4Zruec5ptbAhYxuezkmBRRjkFskOe/+IqrvXajvRPqrXMpeCGP6HOY/wIofioC3InpF6Yrv5xwbO/tywCZQROLtAlucLAxk3N48/7qmr6aAfiLxE3rtRXKzwWsMts6Qypg44DlszpEVznzfMkZi88oLCukA0+7Y1CwAPtt2G0PFcSA+OH//uOMzYBG3j3c/SAwWmqsQg+YX+yLI/dm/n53zJfwxtdaEQc3Wt9pHjuVD9WoN+v4x/JaWeKMOHzJlGctgyYHgSVbMZHBZsCqakJ+2Ogq1hl96mgJ2c4TxWkonwhoEiK6S3u2+3zES2XybHBZ7OHhNSndhrYC3fRa/3P9H63PPSehwE5qIOPGSpWoMcbCxKOb1reZ3yeqSaiisWngEoqaP+smfW56rEOCdsAUzaPGIxvrBwAz+SY84F7+svSaeIho+hbCAmc0PxT9qWDEtIq39/z1SJSijWCO84Hmz68yHWQVL/KtGShKRrB3/regfFHcL8/b3+2o2S6KHMu2456BFmEdeDtML3g4Y4oY/gkIzjkuOoWhR73cBOYIXzWPKVGR46Ez41iIvBqh1DVzNKNySsqiEmaYNQs3xeFZTKAW3+IZM9PoJeACKL0Nlp+nuEAQXLpITdlJOCFbIBZzOWfCh8VsmbAkHUqpNtxPEkO7jyO7Ja5+bF4CYCPjOvvDlg69s+WtWRCk6tgdrlDPBPREGev6itGHKo5p20sU18S1wQwPc5a946iITlzrUyE3RoG+wbG2G5ATOfi5G4Mfhju5ZwWps/pw+ce7FiLVZCcGahClkCdbEoAmGs9Yw2TcinagyuLgoNFf98M/i5vdHLlC8eDvp7b3SNw0Sm8B5TTcdCVgocTmziP0dLUmUyAxRVTl4TT+BQrH+dlV4KAFyngEH9yyuU5wD/JwnEzqz3SHcVy9DO/B9bMRMMckIKi4rDXBcLZ43GTIwOnau3M0l25b/v/gSB8pgpgKkpwyW3cCV4wJRILFDVSKAxDWDIDRsh1AU44h74blzYlusSq22q43aSAd6x4lnA8zpVtee4RiGBy4SWP5D9gJhc2aKXtVBozK2sYidHux2YGrNMJizc5S5PFvRpB/5WwCiwjVc5mY46UVfXVsCVfiQ5OSBzlbpfNjKOCpjZuMybdOihj1//Xw+/pDoKK7pQCjSHphFjDHryYigUu9WW1pSk2jRjiuQakUTPLR1jCIa7NAA6LaqaO2UFAe8lYfLCVvkog8eVhW+e8Os/GxH0vU9tha6lHVQ+3lt0JvCKgFfksASlTPasKI1QGHhU68zAcfvsNXyczFC7PfDoaUG4cZ/yLAjTFSSzedc3IRH+LAWTyP72EETCS4IzpTVeIpAZObsTImt3ew6aK+VXwaMMgfuCc9vcZ27K7FPTd+OqBcqTDEb7XbFZkQ+zzg1QtsGKPSpxzRA3E4hYHTNS598FsrtTq2eQLtV4Ng/RMe4W4tNAODJWNFmn2LiehLRddFcXnEgwYmFGm7mjaX3L1aki2ma6ozadd7mrxhjbBsSef2rBINoB2ivb0iXFupwe4zRgf0zqT0BcY5Z6MKNOPpV8Wx0lU6/4Z6aKQTulTB78DptUB1gEh5AQhyN6z+nCpkKmODYP/bxFjTnxYVjl/pUB5Grdd3KeDNoj4nftrVRigw4ccwvIKLFd27zW04QI9LdxploucMDYpWoIVXpctxLbgeYEwslFvn8DnAHpHe8KyrT7RUiMFofdcnMW9PJ0Gp+0O8fgBamG67DjwFC6ke4v5lVJKhZS6Cg0TkVu8sL6k1IixqhEekUJxK2AhRtJzAf2gKqPnU8B9uqDLiJGJ/qfih+JYClAard8ZvrHRnpa0zHkNAZVPvaIVffqW66P7SeVRDmtC+Xbp2RX/PuC3nlFW5XYZoTqwNjy4ECQZ8RZBwaDfnWXu2cC6Bb8sY7U3jFvw5HpfIw9+oPp4ztdEC2O6Uf641J3AhzWWLjVnKIF0SQTdpI25MpZNl/Q3xEWaApuPgUp906AeNeTY0ifS+WjSdkbxodJHGWWscvfNqyioKVv860oSfLK2K0VhYkYIXOcBMucIioSzs0ihBt7BMOLTka2jp2Na29+uUyA3d4WDXJgKTriGU1ChdUU5M5swv19We6hxbIkmCZwXmlk4RwykMHy4omV2mBDjWLJdGSY+Y6cpX4HpA5zq42KWMhHlmaFZ2FW+UQLf6frVf85ynzwi3Zm7fPHqQ4q2wcErRJbggAGwpNa0zsZlChjoNqCbGFO0DROqTRBybnmg9s6nBfxQMcPDdoxrbCsEVoR8aDUOfYa/p3vFHgzb1rdgbDCUu1SKdTCIMZmZszEb6Yp54t4VkfAKNz/6iLM7dpiWbFz+Fwov2QfdMqWsdFEpEVehTbdf0Kviuiha7xnPkVDIS2idcyZXWpnU+7K9DRT3JtneN/6jhvdiuIispQ6NZ5NZzHjWYIaY8ONEPPaJa/4cq2ZrGS4TwTH6Xvz7/g0QaxOyX/yJ+thODcY9iGIpmx3L23V4tjnFuLBa5an0uTPsdGCuryn/e0MmucWF7SgUYa1dDLCa4iLSbKozpNr1cdKtazXwh/e6M0O1X5TxZh6clbM4JAUBioixmYX8a6P+FpY/WbcNUVres2qPlkMRh8F3FeCe+hiRfShDiHEX/s4GMAaau15YedId6DdaO/ZND2otHRE1G+OBECqFrCzm1+cQHd2zYym30LpxeiEVBiFV98desmPNOaymmN483VV3alWrtZu5LDlae0Xtqobtxinve1k+Mk72Rd+R1o3KtzlH7lr5FotZPd9CbZ7wR5vnsbuzbIWdCvrfb2G3z2OZoQqMG0qkD7A+7HVncAsBsqKxByFxc7AsCFSzJ9JXiexq7kcSX3CDySPGa+T70nefSjz4Bvro1NWwC//un9lbZBuPDHW3Uk1KXItuq+30w7+gxc0pUhvd5M5QVMl8ozPemlmvGmWdREYGYmfoHb7wnOx2X8hnIFzhpBSceibID8KgtU9loM0Qh+5fD71sMfFxmIpScQzhpEFs6gmy0NWWTWB85uavphwtf9AqgfKG4vFAKpY6241J3BmAFd/UUtp83AQ5hEDu4UdbYjSEbcmYZBGGH7tyCjtA4uWB6PFiyoHGethRKqJA+pvuvFVKW2L4ywqtuFBgEVMKaotcOxvt7GOpyZ+STLfyvUFQuUHyeN2nLM1KF+wSwkrqy9eEKeLoiJWijB1sWog12WcmxrLVBfg2rrcryOlr1JmHrkq0JX0q/uvK7t6l7erRh4N2IxNyK1Edy9H6Zj+iJ1WMD/Df2keSpzLq7nSEUu5s3g5FY8hgnSfvp3qBSD4418Ug8LPq1NHiAogQB2ncTRqCWy2gpioC7c5na29eUT0HoA9jVVR0QoH5KdRxJP0YDSfOTKJCT722rY0n3l1a9rhHt7EdBA21+GMQDkgHSRh/wFwOWS8BKCftcIaFnbTJB6gjTTOhH6mnAV1rSkN0pt0HpF9ufIYG/FYgqcrfG+soy2CVL3F28AYzTNrabDveCqOnhgqmvA1Ly3EnnGJspE+nDWvRzqL44JZaHmcbAl+1TSBsEhHuauq5O8MZ7Kbo/sUyNBDpy4r4eCMiGR8egPqxIJ5LVe5mYiz4I+W7CshzvCt4qpDCySiGDNBOz8AYmRxlOf/hHkMVFPrmgF9Kuu7pmTybNtC1wuUZ47crpI2cAcWSSBAmpUyryK2AtfGRrrXrj3qtVzS0e0a82mIMrQjwQVn2IXhfzyWBvGd06DrKauQXV6Mc2mtDsv032nR4gahRuLKWk73g6dqzbFGy1aSRqxt5gsN5gtvqXxOh8BALba7ud99yM0qQjEgiR/MDR3Mx/UELrwJdHSDzFhkd3AMJqPNy+Hoe4uvFSLNOYsciCP3ZXjKsYfTBMcOJo32HVAYSmg98O08sRnTrh0MMQWhDCelFujdIW6GOKH06/yR6xN5WcV2utXFSEwS2sWy4xGnQWZbjkIC9Q026QAGstbZ+tIoTatzDkzKda7MnWvz24Disoc8GGIhwDBKTKNN+wsUTsRLSyq4DfinA3npno3wv1jfTajRXYSHK57h1eCsbcNLoj4gxM8BM4bu6fdax8d12V6PVlwlOLwVuzTxhx2ApLGRlXE2ZVxUrE775OStqNTZtPaHjBcDkuPVQnMAPvBZw9QxjtRDZRb/beSCHbuToHXX5Auu1HANl6GP1b803l3UwE1DROVw8m5E+82lrdY0W6DqgKLIGPvee9b2N9zjhCE1ZNpwDp3FB/39sNhIeTHl9IlbJ2C7ha6P59FMoBZmvksn+k2PeYqsNQ6C/iejmKMYZXVZekQcmNi2iivGY2J4AORALyOcU6xAgjeUxqR0vX+Q8aM4HI4Gm+T7CGG4do34HCSgbjMD/2taOXk2VbC00csgEORZh+8cKisbFqfoE76Y8Ajjp3+/S79b5aDoyhFdw3wR6Rs6V9gpL02rChEITSdJyxjhrMIE7AC4oP/gLXtdgyXAQkkwg6HNj+OqLxBDvFsAszdG2XT0aqkyzcIpevyN1EeHQ6LGsNzKoNBD5yH6KTWiiGOivWFVjFI9wfFJ5G2dBbkDafyi9WM00SddIdpZBtcUIaavKVBUpn/ZC9sAEytSlqZbYunkL5ulfGSKzPUG09XUDVRdAjKjxrc0ARHe0pvZ/MTX/keD7sJhJ02L4l5ujbr5NIxWMt5jpQKXovi91tb5jYXCXoWH+lDGbtXhosO2L+zfcak2m2qaiI2rYYUzWmk0FWXLK4epNBGloAwuWwHhUTjH203C8nQNyPfW8bfJ/dKTk03uHsNp5hklENO9lghml7V+3HxXFlomRuX0IPKj6ibXcO8HdmQd1o04I5Rpve7eSvOsTjBav5hVNILDQ9gw4PBj3pUIT3VA2qkrkP4srpGPzcrbYIBYSd30Qsm1R9PtuxRzufFkbyjNCjztqo60ySQFdZYd9B/S5UnrtCsBju+Bx7rnJ/B6aKwtnBKiWOqoeWK5+5j7tCY2mBZOgOiZxs2iW7PXkYTuNhqYoyw/0bywSnwF47jJDYRTQ2812GLEcN3goPrOEMzG3Ydv2GEpxeJnPPQNlHbyMeh5gxaEtaJIKyyiaX/rdJkcz1SE9b2ALY0bvO3DaKCDCkTHD9haGQd9wdYJBXredfxD4mj1TcV49xYcTXRvAthe6g+X2gBgvu6SAQNv0jjiqEbTd0K2N/XjlbKZmeJObQjK6R5GSZ5a0RARVvOpGWe34ey0NFfMQcE+UZpkKekUEIGiLlrySJK1bcw0pMrPtqk7GsqInXG/14lQ+Sa4S5h3OTJwBNSzxUZpWGgCI2INowo+LCJbYNwEbp3XWJaEPtNm1lV1Hbo3VzyPKW3NF1vsGmhkIvvSP9F5oOjjD/Uq9uOa0NCMw2RPtO9cXQsEXP8ANnT2VaCPbmHTtI27qqKM3zaqKaECDvzcc1YGHoIQTc8eO1DKn71m/pQFCh9PofoA0tjYoIudFnXfhMp/Ye1JGUNGSsqWi/QnhnbsbjT5f4Ft0DDHBjcNpUcQ1+x0HslEhYGJlBVWXm36Uwsa/peddYNUJZcrhRkt7OG6fRkspNC8l5QcuTrcD7lROuSo3f1RT4XqqYBSc8knn6u49IEeabkhcUac+u1F2FSTtUFNhgEJFnjas6gu+dVUOvNW0ztpniuv9uZNKZ469FcHJdnP4nSiCP3dzqILUs4kn6w82/yZuGevDZU1KhoshWNHnwUhl537HGRyGwmfJKjEHrxeIxC36JI0pOjIt2r0eu0Cupi1bSFem5GhHjpp5Mcq1wYRNQBq4LVfMIaYaSlSa2/I07S8A0xjL6ayxf6ps12TO4tDY2WAT75jVVUgRQK9V1uWXWqDeogp392LvxD/FSdKQbZy2MF2gQqjfxjhuEgt1bv1rDmGD8ojkfeDvCL7LTXrYyP5uxW1N+GhdigDtrQoCjT5oeP4fFvtvuhmoxxJwkz8Ke27EIfA2RhupqJ8D32t/yVWXPv/NOxWWfqywWQZF8S7jWecpo94Pvz6TrngC9ryEHLYhnzzpZtprFuMlwwOqNvqyQhwDmCmx/pLD+Jl/HLjndzArtjLmjvVD4493OtgU2b0RQgcrqOQQAT62Mhoe2I58J76QbtHL+u1ddgHgTN0yHCOKJic9I1JYFeoiWUNzRYO60+4/9Bmd7Z+CxZznn6H14UU7Ns3cnvDU1/elN1C1PdMA6+xkCG3o+z5j+GBOWm33sWazTgNWo/4BB79Yai5kcYOFAazu3GgYASao5Y0a3Tn/gD3+l+WqrFueB/ALYuxxeYarW9d3jOgExI5pWNpbpl1esfbS7LoHyly/oHqzE2gK7OIuHq25f2nK9l6zRR6IIUCt1ERrnuos0G4GGkDgWiJXL9vFwcjaIZinu1QN5AvxMp5VolVtQ/HQh9Ab3Ef1qej1Y00c+uB21im5ULMTYsjxpcF9p/e+LyZFBHvJKQmeA1t+yd7BMaFlBC7Q4ZjoVt6nu6PZrIQ/jd7DQwfwrAOOjBMzbx/ktSupgsGiSMkRpZ2Fn8qKvgMLDyVmDGpHKVO7FGvNbqVud1Ft2nHbjovDFcyypBzN9IhSrEQ3HkdO+EwMok+j2MhWjxnzU/BR8MrSgijxItu5V4ixvjWUhBNuxYWixprd+gsv12DAf0qQoEGgDjJXNvEGEyPvQcMg3tOGL1/NhP+WaEwNNyq6plwfh94t3J4vY/A43154qhakAAkUpID0zLQ3dPOayCRZ7OYCBeCzu0nm3K8nGkW0pB4wyHdguyGj0oHJuFgh4by4AcMV8HrJUrBdJuU5mzrb6w6Pywchlsggu7YpNTQVYgAZgbu24WFb0i8zfDacZuc1O2U5tYaG7XsKXyTsqVfPxXlT00udz8VZekSPkRFLrOK/isvVRWkO9sZMH5BXtNSr2hb1Xyq97Iik1j4YvaVeVa/Ni/THHSTtNVhio5sBwknGJgdOxTq4RdWkvSbeI8Y6OQA2rOC5RxWuGcTPSyUJwavcwa1SB9m0k4Uk6aZQikw6kamCw3t2kyeNoU72UcdQuUTCuQACZ1j0fbrt2oMChigkadQxGFMJrQEFeQQ30GZgNObvnF7PYBxl1a7ScWxgpTshQ8DPxvN38SWn1Xgh93Ik9KtCCoLAtVJdz9PwXT2WqlC2V+Cdso+HKu2mx3jicaFe++nwQMA1mE0EPVmY37P1s18wkcGoqz4sU42D3hHv7fVBjpItIICCY2gw/t2YzDAhTEm6JGO0sNEwkwqsFUYDHXDAoTxPbzxTc8LYReQx7l1j3feZoNOCLLKdVRVoVLMSgbfjckokmTqCNhhl3x06gcSWLnnzFa/2yMyi9DqDNOWj9SMlPVGCVEDPBwIIse1ZLMChgwSICQiKuel741lizWrIlHhRh+8sGyXr6lZjlwDMAKu9Gd6+mZcCABJzO9lrWwZvMxmYrBJxyR+tczKXAJ7W4mZ4wXRSjQTOHxe77Pvd4Ng4c54vKQCfNDcw1/idVZ0HgAAFRp2ZWrINkEkoxJS2/1/LOSII8eSzFnbzOkck63DY0vcjlVLkAC1p7N2lcFhiyuUt16k6P9RZ/w/N0lAG4vhGeYuhbe1kqjNVFIyLV6Y63rK8W9T4d7HogjrexR9Hbw1+/QqM9VMYXuB9FzlmXwvwrOupMvABALK6MTJWbselaKw3FWVFN5SNcT5nws4vaafL42w0eTdX+20Ah1nvDsG7g5ilV+BdlePaNaWcAdQT9S6+Ptbq4k0CO1RQM3B1KDIDgGbOX+769qJrl/PMgwBj1AgH5vQpXMk04Hjdo19dVfiaXWdLfIgrJnrL7enclkAP5aRn/dKthKdBi6JAKC8T7xtmCgINxsdTTbAO2QgqsQ8AEetBvxmIQvaAub2RxAI5aL8YdxccWNLzN+2Mtl0ZQ08RYxWlb98KclWw5byaubdd/CBdJKZ7qF0JnQJzBojnDlhNNR7AYR3rCUuAFK4YzS/vExg4JTpsHUCMnN2lDzjHn5550hFzIp+ZTJzYRIIe3wKrb5Zj0W1h+1UdEVpVs6Um/reofHJSC2mYGmoYGY1o018pfAIdZy/H3uVHndS1Q8vo6rYGa/FEUMHiTN3v/Xf9tLYFKFe+UfbYj1xks9ZW11h8vv6vUSAfg4C7HS/AyuJWtZtmiAsHlz62OY/GthTOV2ZkIfgQfEBXOPkzc64mptXsW4cq4Vv4X2LNK5tpCxhvvT1dtNInArHNIf0qI1OGPGuImSJDgcjkj5cknPVpKrRSDEmTEKd+ToF3T/ARD761jmBlDfdJXhdRDLufBZ8bYFij+FqzaGgn680D+mbL84qFQy1IhWidA1vJB1sFaRjNR+UOZOlmdK5WoEhAQHS/h/EtN6yfzVxTwKTng2NhCPqZ1MTVUR+50FijggYLaI9d2vgx01mlGIH8qmz4Jtt7yvqEuLQJuDbYPjniel6pAsBJpjfVcckLYyHjLGieis81JRqRfZut2X8BpvMG8RK/V0f1f8GwoQ+5D/Fi34RU+6fIbOlEDlSnDRiLsosJfKSRMcF8AAMBTLeJGAAnJNoEQAWEWeDqDV8OPCXO4Ngijvqy6RQCTlk72vNRkufb7zA2Yf0+EohnFNrC8Wkmx0Bm5BoZsrzmRxU0LRpRp8r9l75ZPVTw3mi7rt9AOKZHkqkbfx2ow3d4qnm0mP27wdAlvbwCSpGRNH9EvUAnBq+6w1q+sHlcpaM//QF1Rw7oxXnJI8jxA4L98i8yY4xbB7XIZJXWjn7/02PWyO5dUCh3KSdtONbL/QbcRHtfo5py7X++9rMcOskNS8hMUVJk/1kJtl88NRHuPMurb/vx4eIm9ump3tYJmmtqKHCkRIB4LqOMEO01NSCO0k79bJdAG0cIGEwhmRI7bPC/YVRLmYAMZBJo6dupgNnHEfFogAwNcTsla/dl/8u48IRx6NqScYYG2D73WUTGjVhNMblydRqQWCgIMC9vYl2ZejqADZpsyhRopCaJ5Y9DKe+CjGfFM6a8u9n7XalrtpWQ6tbquSUUZcjPdVLj+te1ygYV2GjxsOuHZnD7J8TVSx0QAmwfMZnAUsCk80axLCv07G+x31Gg/BGeVWKpYWBW3A6/KaQlTx6r0GFfRU3oeBXqgzF8L22DI9RufvaQjLcjsulJpaSD8q/NVrNxL9Dj8pAO8yWoqi5mmFVuRmnpbcuWbu+1hlRdelGBMnR5nKZ86EzVmfdNHShh8Q0rduA8Ji4swuEgwTyWf5C06IqMEd4RP4l4ccDlDqCTB81YYzvIwwwkSjg2Ki9vKMQHXXoaYwVwvwoSSjuWkzQ3JxXpZiv59urR67Zy49ioxhkGw3cxhm0VgABLROMt+ABdyM/gtNvZggNaGQLFGcEpc5TJk4yfu/fZhhwMQjzXVgt94IcVVXANK9L9niMYi9ABw2VWJSmfwKjP5mTFYFtqcedD7miQeEhMPITGrV6D/ygFrt+9MMpOYMKccARnGObq5GkT9bdOW5V4nU1CgYNkey2u521B7WjvOdWnGMioqQCv7DA2zoERv5fpdZUEr1RoiZSXhETr7z4Y+3RgJhjA66Na9lmpPV3oqtjbDUwktsWIGec3dQo1Z1O2qpiL/wTtIWQ7jhWntH0gMtFLfLIZRTysfEpyMVKK05nSu7Cs38pOYeoPJkZy5uxafOC84MTYOfEDNGc6AoYicvXQgO2Hx1s+HUAtxRvb9CmNEA0jnK0G5eME9DETVnphsYldMlCaz5t5sBAEVhwSHAkzjJWvGFQCrqTJlgMAleecJgBDe+FPX9rzbzm5sd29+sBNjkdZfurlAawD1yvi/XKhVRIuhRb5rEd3WpdD9oMjZQimaxrIdqotIq9BY/sO/ovOGov6AlLVoMrJT1vvFFQYo38gKLsiyudc0pgC8SZmSRaTdWCp3hiHxzgQanSPPeF9aO0AtdfI0mJlaf6Pc2BSiIEnwV4/4XEkd4yxMgGXCtGOpHZKujFYbFtYSbgwjmh25Iyucodp73A2OSrSHVwGDLN2i3Uwgr40Xe//6er/IGxx9b/61BnbCoPCrOhMjQqKrkJURC8NShoepLfj4kCXZJ/+pAK6mUJHGh8jwad9H8ghCrarw0i7EIqc6BIfJ86LpRu0e5EGWjk5ex1UCFyaKr3E7liTECiWA1s7Pm1SNKs2iwCXJbYY6CDMoVxT0GpWOW27Pr0bjG+Aeq3quPDewKPj76uaFp8PlD1HK/WRyAaSrHGs+VEungDjud3zeEpKk+hwyrh+DIJklI0A7XLRp0Ca5HQzEOQcZFlP0QA59b9wPUNJwNJGlVKrB7W4naMZ/m+K9WKKAmUR4G+VgE+O4Ee5xgP/Zy6aRfMagAoOKx9dj21f+T7YMufEiRuCy2qhWXZ/MyN2WpGX/q1mo+stpXIiAzoP/jnHKoJM21hYdGBsP83QBgr86gY6zW/k0Y8sDNOJgNgHWphT9Sh1wA07JpL/kMKse/VqxaKsghOk9+5Ym0x89ws2eWM6WFFLmJDL/osNTHuO+WXlxBI6R2yUZtHiTwiAbE7g10uAiZaNKKr2BVM/HRQDOdZBu2+e3lPcXV1eK7pru6/vI+iRwTSJLJPipFw89Dvf3dmQxY+XmnW93At5VDivHWY5ndAWeUJ/FibUHYH04zWvu5zQ3U9u+NfTZIpYQ2J/OEEGo0xL5e8c/giYXhY0iIIVzgN5PIYn2CaivH5jKeb7QQkBpkYtQCFXnUwTgRpIir0FtPr560PIrwAVuVB5XLcBUY4F58wsaXp4ElIx9EsN5Wy2yAHk0Y0wvBmJwHd65U4TxxOiy0ZOg2vrMNJO9Rcc9cOOHFVnGUyZIBgIVsiLQgDaxms6vqbtLkCGDJ8x6Ms4dtG47QCePwLAb/rTeEwVpC2/fNG2qeXJ/5Ztj6AZv0T7IS2trC9c/5kmqmjKRn+A5IsDwozLrxPsLLAE6Ilx87Kdf0rb29l5NulDXH+rN8zZe9Htu3C/y7aa68Dx2AfL8hZwvaOX6QTOiAgPzK8nNy63kmQnedx5ZjjdbautQFkULZvG9N28qbAbmnIN66mEGI+5OVTJRUKT2UgxM1KkKJ48CW+xJ3c1TENgwTJeTmQfZD08jZt1Sv5WFFIH8Y8J/yNJWDQIbN00bGCg1HQf80LvcOQhc/t+Y39tULU/ES/5ovNFMfwh0tAGdtiJhUswPntONijDrcWhgyg2IrCbZ9/adVXYxYbEGcO4iOZHVGZfLY+vyf01IDoLVmHpQr3sqmJ2ND5B7TXA7c09IorRy+Hwn5YHxsDgqHY+44MSCzB1iHdle/0aDhqwPRpeHS6VR8Eox1h597AsniDFcOq6+MIEpfppBdRawZcVAcKOpC5f4iao3RVHtqxBBMLsO+ldu5ywUFUSvfNqbK5/eXenPA8M3h8hOM38kBay/Ec+TjhroYkF+D1ysK21s6P+XWaD3zzk403FNkwBMtS+ojldt8r2sLOfBwjTyClg2+x5HYu6k0n43XM77JAOI7YegLoXPOSrKR0TsVenFhcnkCgvIWoAjGaebz/PYjQMLWbnlLLOsJdGHfp50JrLws590sJDbBjaortK1Poz1ow73SHiW+CyjQOvIDcZJAuAfPdn+qPAFt6rO6B5q3RBcl45KKo7mNBRoQ5gpueYM/E9V2LmRZCRiy9SENBEJG9UmbzOoRjPXHxXx+qb6mtuHdBkZoDg880mcHuMzX3XUpNPt/RUVxABWKzPl1AfrL25QOb2nStjfDsQtdKCVkLLYsTO90X6hf/hkZUt1onk/rc7MKRIZRr6Yaxwl3GGpUqpCch6pkOmrcjFz4n4grdAYH45B6F0eivv6SAJorRj34LulfjZt3qCSVTgpOy8XDjNhn4oet9i6FbtBn5sWDVEYUf7Zveqo8leevwxwRLxaNGWJqQJvT6D7K/yBlfsmzPjhZdC5dOGQuEvLSvh2RFMeaE2D+HPMZU6/wSykgX6LTR6H6VsXsvdu8Op8mYTRUgOSb0CC/fv3TbELCRUjbcGKyWct9LOg3X9yp3/kWxNE66brg/3mx/TrBAmYxbBPi8tGLqoZJO1wxxGwxtrOZhy++ZljQgEk+DE9GRLOQMZD1muj3LVqsv7A19igY0dBYatquxiFPj4wbDKSu0L8SHmXrG024sUGih5TkpI4rXosN/1SG3QJFwYOBYa+xgQZdMJ8rzA3y/9S6HURiO8xe+jgiuYjhj7warv2V+Lg33xVlaUa93885XRhjlHHB2M3fcPlGMiErYOaqqvm1AJ0qeNGzEJ5s+DkePVcQ70PiMFATcYA9Kb3tQ8slxpxYc8impkeZn/iYk2v91w+v31RUCzhsnyTaN1NVYoaKLOtHemkF1rmPM391beRONzjXTT1RuCpiWWcytdGS4X7xL42+YsuElOpyo2bHyW3H9GxxsH4Gin+WC225XLFgyK4HEZ2Q2PH9ZYL/64xdhBGRYZtp6+iHUh3ZfQAA==",
        "rect": [
          -3.16,
          0.29,
          2.94,
          2.62
        ],
        "roughness": 0.18,
        "also": [
          {
            "id": "door-leaf-glass",
            "off": [
              2.89,
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
        "seed": 20260901,
        "base": 252,
        "patches": 70,
        "patchAmp": 11,
        "streaks": 70,
        "streakAmp": 12,
        "specks": 2200,
        "speckAmp": 14,
        "seams": true,
        "seamPitch": 0.375,
        "seamAmp": 9
      }
    }
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
function boxes(list: (number[] | { cyl: number[] })[]) {
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

export function createFlashExpressParcelShopBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Flash Express Parcel Shop Building';

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
    mesh.name = name; mesh.castShadow = castShadow; mesh.receiveShadow = receiveShadow;
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
  add('building-shell', 'Building shell', boxAt(0, 1.775, (SF - 3.44) / 2, 7.88, 3.55, SF + 3.44), 'wall');
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
  add('roof-deck', 'Roof deck', boxAt(0, (G.deckY ?? 3.56) as number, (SF - 0.02 - 3.42) / 2, 7.8, 0.12, SF + 3.40), 'deck');

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
  add('parapet', 'Parapet ring and fascia wall', boxes([
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
      [sx * (w / 2), y0 + 0.16, 0, w, 0.32, D],
      [sx * (w / 2), d.railY ?? 1.05, 0, w, 0.07, D],
      // Pull handle: a vertical bar on two stand-offs, on the swinging edge. The plate shows one
      // and it is the detail that reads a glass leaf as a door rather than as another pane.
      ...(d.handle ? [
        { cyl: [sx * hx, (d.handle[1] ?? 1.05), D / 2 + 0.05, 0.018, d.handle[2] ?? 0.80, 10] },
        [sx * hx, (d.handle[1] ?? 1.05) + (d.handle[2] ?? 0.80) / 2 - 0.03, D / 2 + 0.025, 0.036, 0.036, 0.10],
        [sx * hx, (d.handle[1] ?? 1.05) - (d.handle[2] ?? 0.80) / 2 + 0.03, D / 2 + 0.025, 0.036, 0.036, 0.10],
      ] : []),
    ] as any);
    const leafPane = boxAt(sx * (w / 2), (y0 + 0.32 + y1 - 0.08) / 2, 0, w - 2 * st, y1 - 0.08 - (y0 + 0.32), 0.04);
    for (const [id, name, geo, mat] of [
      ['door-leaf-frame', 'Entrance door leaf frame', leafFrame, G.frameMaterial],
      ['door-leaf-glass', 'Entrance door leaf glass', leafPane, 'glass'],
    ] as [string, string, THREE.BufferGeometry, string][]) {
      const node = new THREE.Group(); node.name = name + '__node';
      const mesh = new THREE.Mesh(geo, materials[mat]);
      mesh.name = name; mesh.castShadow = castShadow; mesh.receiveShadow = receiveShadow;
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
    if (G.condenserParts) {
      unit = boxes(G.condenserParts as (number[] | { cyl: number[] })[]);
    } else {
      const parts: THREE.BufferGeometry[] = [
        boxAt(0, 0.46, 0, 0.95, 0.72, 0.85),
        cylAt(0, 0.87, 0, 0.30, 0.10, 16),
      ];
      for (const fx of [-0.4, 0.4]) for (const fz of [-0.35, 0.35]) parts.push(boxAt(fx, 0.05, fz, 0.08, 0.10, 0.08));
      unit = mergeGeos(parts);
    }
    const mats = (G.condensers as number[][]).map(([x, z, yaw]) =>
      new THREE.Matrix4().compose(
        new THREE.Vector3(x, (G.condenserY ?? 3.60) as number, z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
        new THREE.Vector3(1, 1, 1),
      ));
    // The plant material is CONFIGURABLE, not hard-coded. Referencing a 'galv' id that a config
    // does not define silently hands InstancedMesh an undefined material, three.js substitutes a
    // default, and the prop ships one material over its ceiling with nothing in the config to
    // explain the extra.
    addInst('plant-condensers', 'Rooftop condenser units', unit, G.plantMaterial ?? 'galv', mats);
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
    const baked = new THREE.TextureLoader().load(g.baked, undefined, undefined, () => {
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
  const tex = new THREE.TextureLoader().load(g.baked);
  if (srgb) tex.colorSpace = srgb;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  material.map = tex;
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
  const g = (CONFIG.graphic as any)?.wall;
  if (!g || typeof document === 'undefined') return;
  const rt = root.userData.sculptRuntime as ProceduralModelRuntime | undefined;
  if (!rt) return;
  const tile = g.tile ?? 2.5;
  let tex: THREE.Texture | null = null;
  for (const id of (g.meshes as string[])) {
    const mesh = rt.meshes?.[id];
    if (!mesh) continue;
    const geo = mesh.geometry as THREE.BufferGeometry;
    const pos = geo.getAttribute('position'), nrm = geo.getAttribute('normal');
    if (!pos || !nrm) continue;
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
      let u: number, v: number;
      if (ax >= ay && ax >= az) { u = pos.getZ(i); v = pos.getY(i); }
      else if (az >= ay) { u = pos.getX(i); v = pos.getY(i); }
      else { u = pos.getX(i); v = pos.getZ(i); }
      uv[i * 2] = u / tile; uv[i * 2 + 1] = v / tile;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    if (!tex) {
      const canvas = drawWallCanvas(g);
      if (!canvas) return;
      tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.RepeatWrapping;
      const srgb = (THREE as any).SRGBColorSpace;
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
  return canvas;
}

/* ------------------------------------------------------------------ thaikit entry point */

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it with
 * (spec, options). `spec` is accepted and attached for host-side inspection -- the reconstruction
 * data already lives in this module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createFlashExpressParcelShopBuildingModel(options);
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
