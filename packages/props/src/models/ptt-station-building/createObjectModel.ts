import * as THREE from 'three';

/**
 * PTT Station Building -- procedural Three.js factory.
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
    "id": "ptt-station-building",
    "name": "PTT Station Building",
    "exportName": "PTTStationBuilding",
    "materials": [
      {
        "id": "wall",
        "color": 14869215,
        "roughness": 0.88,
        "metalness": 0
      },
      {
        "id": "deck",
        "color": 16777215,
        "roughness": 0.9,
        "metalness": 0
      },
      {
        "id": "fascia",
        "color": 3422290,
        "roughness": 0.42,
        "metalness": 0,
        "envMapIntensity": 0.6
      },
      {
        "id": "glass",
        "color": 16777215,
        "roughness": 0.12,
        "metalness": 0,
        "opacity": 0.93,
        "envMapIntensity": 1.1
      },
      {
        "id": "frame",
        "color": 11053997,
        "roughness": 0.5,
        "metalness": 0.25
      },
      {
        "id": "red",
        "color": 11807276,
        "roughness": 0.5,
        "metalness": 0
      },
      {
        "id": "galv",
        "color": 12896717,
        "roughness": 0.55,
        "metalness": 0.25
      }
    ],
    "geometry": {
      "shellFront": 0.5,
      "plantMaterial": "galv",
      "shellBox": [
        1.2,
        1.86,
        -1.47,
        4.4,
        3.72,
        3.94
      ],
      "fasciaWall": {
        "cy": 4.45,
        "cz": 3.37,
        "h": 0.3,
        "d": 0.14
      },
      "fasciaWallMaterial": "wall",
      "frameMaterial": "frame",
      "parapetBoxes": [
        [
          -0.02,
          3.96,
          -0.015,
          7.76,
          0.6799999999999997,
          6.83
        ],
        [
          0.03,
          4.449999999999999,
          3.37,
          7.94,
          0.2999999999999998,
          0.14
        ],
        [
          -0.04,
          4.109999999999999,
          -3.43,
          7.8,
          0.9799999999999995,
          0.14
        ],
        [
          3.92,
          4.109999999999999,
          -0.03,
          0.14,
          0.9799999999999995,
          6.92
        ],
        [
          -3.87,
          4.449999999999999,
          -0.03,
          0.14,
          0.2999999999999998,
          6.92
        ],
        [
          1.43,
          4.4399999999999995,
          0.5,
          4.859999999999999,
          0.28,
          0.12
        ],
        [
          -1,
          4.4399999999999995,
          -1.47,
          0.12,
          0.28,
          3.82
        ],
        [
          -1.85,
          1.86,
          2.72,
          0.42,
          3.72,
          0.42
        ],
        [
          1.85,
          1.86,
          2.72,
          0.42,
          3.72,
          0.42
        ],
        [
          3.415,
          1.05,
          -2.75,
          0.03,
          2.1,
          0.8200000000000003
        ]
      ],
      "fascia": {
        "boards": [
          {
            "w": 7.96,
            "h": 0.8199999999999998,
            "d": 0.12,
            "at": [
              0,
              4.1899999999999995,
              3.44
            ],
            "face": "+Z",
            "u": [
              0,
              0.72
            ]
          },
          {
            "w": 0.12,
            "h": 0.8199999999999998,
            "d": 6.86,
            "at": [
              -3.94,
              4.1899999999999995,
              -0.05
            ],
            "face": "-X",
            "u": [
              0.74,
              1
            ]
          }
        ]
      },
      "glazing": {
        "boxes": [
          [
            0.55,
            1.78,
            0.52,
            2.6,
            3.56,
            0.06
          ],
          [
            2.7,
            2.0500000000000003,
            0.52,
            1.3000000000000003,
            2.8000000000000003,
            0.06
          ]
        ]
      },
      "frame": [
        [
          -0.75,
          1.78,
          0.57,
          0.08,
          3.56,
          0.1
        ],
        [
          1.85,
          1.78,
          0.57,
          0.08,
          3.56,
          0.1
        ],
        [
          0.55,
          3.52,
          0.57,
          2.68,
          0.08,
          0.1
        ],
        [
          0.55,
          3.1,
          0.57,
          2.68,
          0.06,
          0.1
        ],
        [
          0.55,
          0.06,
          0.57,
          2.68,
          0.12,
          0.1
        ],
        [
          0.9,
          1.61,
          0.5599999999999999,
          0.06,
          2.98,
          0.08
        ],
        [
          1,
          1.61,
          0.5599999999999999,
          0.06,
          2.98,
          0.08
        ],
        {
          "cyl": [
            1.45,
            1.45,
            0.6499999999999999,
            0.015,
            0.6,
            8
          ]
        },
        [
          1.45,
          1.72,
          0.61,
          0.03,
          0.03,
          0.08
        ],
        [
          1.45,
          1.18,
          0.61,
          0.03,
          0.03,
          0.08
        ],
        [
          2.05,
          2.0500000000000003,
          0.57,
          0.08,
          2.8000000000000003,
          0.1
        ],
        [
          3.35,
          2.0500000000000003,
          0.57,
          0.08,
          2.8000000000000003,
          0.1
        ],
        [
          2.7,
          3.41,
          0.57,
          1.3800000000000003,
          0.08,
          0.1
        ],
        [
          2.7,
          2.9,
          0.57,
          1.3800000000000003,
          0.06,
          0.1
        ],
        [
          2.7,
          0.6900000000000001,
          0.57,
          1.3800000000000003,
          0.08,
          0.1
        ],
        [
          2.7,
          2.0500000000000003,
          0.5599999999999999,
          0.06,
          2.64,
          0.08
        ]
      ],
      "mullions": {
        "w": 0.06,
        "h": 2.98,
        "cy": 1.61,
        "cz": 0.54,
        "x": [
          0,
          1.55
        ]
      },
      "extraFeature": {
        "name": "Canopy red stripe",
        "material": "red",
        "boxes": [
          [
            0,
            3.705,
            3.425,
            7.96,
            0.15,
            0.13
          ],
          [
            -3.935,
            3.705,
            -0.06,
            0.12,
            0.15,
            6.88
          ],
          [
            3.935,
            3.705,
            3.3,
            0.13,
            0.15,
            0.24
          ]
        ]
      },
      "extraFeature2": {
        "name": "Service-door frame and fittings",
        "material": "galv",
        "boxes": [
          [
            3.4225,
            2.13,
            -2.75,
            0.045,
            0.06,
            0.9400000000000003
          ],
          [
            3.4225,
            1.05,
            -3.19,
            0.045,
            2.16,
            0.06
          ],
          [
            3.4225,
            1.05,
            -2.31,
            0.045,
            2.16,
            0.06
          ],
          [
            3.4499999999999997,
            1.05,
            -2.46,
            0.04,
            0.03,
            0.12
          ],
          {
            "cyl": [
              1.25,
              4.5,
              -0.45,
              0.02,
              1.4,
              8,
              0,
              1.5707963267948966
            ]
          }
        ]
      },
      "deckBox": [
        1.2,
        4.359999999999999,
        -1.47,
        4.36,
        0.12,
        3.9
      ],
      "deckTone": 7304572,
      "deckExtra": [
        [
          0,
          4.35,
          1.95,
          7.72,
          0.1,
          2.86
        ],
        [
          -2.4299999999999997,
          4.35,
          -1.45,
          2.86,
          0.1,
          3.94
        ],
        [
          1.2,
          2,
          0.47,
          4.300000000000001,
          3.6,
          0.01
        ]
      ],
      "deckExtraTones": [
        12106685,
        12106685,
        6183767
      ],
      "extraSystem": {
        "id": "canopy-ribs",
        "name": "Canopy deck ribs",
        "kind": "box",
        "w": 0.05,
        "h": 0.03,
        "d": 0.94,
        "material": "deck",
        "at": [
          [
            -3.8,
            4.414999999999999,
            0.99
          ],
          [
            -3.8,
            4.414999999999999,
            1.93
          ],
          [
            -3.8,
            4.414999999999999,
            2.87
          ],
          [
            -3.64,
            4.414999999999999,
            0.99
          ],
          [
            -3.64,
            4.414999999999999,
            1.93
          ],
          [
            -3.64,
            4.414999999999999,
            2.87
          ],
          [
            -3.48,
            4.414999999999999,
            0.99
          ],
          [
            -3.48,
            4.414999999999999,
            1.93
          ],
          [
            -3.48,
            4.414999999999999,
            2.87
          ],
          [
            -3.32,
            4.414999999999999,
            0.99
          ],
          [
            -3.32,
            4.414999999999999,
            1.93
          ],
          [
            -3.32,
            4.414999999999999,
            2.87
          ],
          [
            -3.16,
            4.414999999999999,
            0.99
          ],
          [
            -3.16,
            4.414999999999999,
            1.93
          ],
          [
            -3.16,
            4.414999999999999,
            2.87
          ],
          [
            -3,
            4.414999999999999,
            0.99
          ],
          [
            -3,
            4.414999999999999,
            1.93
          ],
          [
            -3,
            4.414999999999999,
            2.87
          ],
          [
            -2.84,
            4.414999999999999,
            0.99
          ],
          [
            -2.84,
            4.414999999999999,
            1.93
          ],
          [
            -2.84,
            4.414999999999999,
            2.87
          ],
          [
            -2.68,
            4.414999999999999,
            0.99
          ],
          [
            -2.68,
            4.414999999999999,
            1.93
          ],
          [
            -2.68,
            4.414999999999999,
            2.87
          ],
          [
            -2.52,
            4.414999999999999,
            0.99
          ],
          [
            -2.52,
            4.414999999999999,
            1.93
          ],
          [
            -2.52,
            4.414999999999999,
            2.87
          ],
          [
            -2.36,
            4.414999999999999,
            0.99
          ],
          [
            -2.36,
            4.414999999999999,
            1.93
          ],
          [
            -2.36,
            4.414999999999999,
            2.87
          ],
          [
            -2.2,
            4.414999999999999,
            0.99
          ],
          [
            -2.2,
            4.414999999999999,
            1.93
          ],
          [
            -2.2,
            4.414999999999999,
            2.87
          ],
          [
            -2.04,
            4.414999999999999,
            0.99
          ],
          [
            -2.04,
            4.414999999999999,
            1.93
          ],
          [
            -2.04,
            4.414999999999999,
            2.87
          ],
          [
            -1.88,
            4.414999999999999,
            0.99
          ],
          [
            -1.88,
            4.414999999999999,
            1.93
          ],
          [
            -1.88,
            4.414999999999999,
            2.87
          ],
          [
            -1.72,
            4.414999999999999,
            0.99
          ],
          [
            -1.72,
            4.414999999999999,
            1.93
          ],
          [
            -1.72,
            4.414999999999999,
            2.87
          ],
          [
            -1.56,
            4.414999999999999,
            0.99
          ],
          [
            -1.56,
            4.414999999999999,
            1.93
          ],
          [
            -1.56,
            4.414999999999999,
            2.87
          ],
          [
            -1.4,
            4.414999999999999,
            0.99
          ],
          [
            -1.4,
            4.414999999999999,
            1.93
          ],
          [
            -1.4,
            4.414999999999999,
            2.87
          ],
          [
            -1.24,
            4.414999999999999,
            0.99
          ],
          [
            -1.24,
            4.414999999999999,
            1.93
          ],
          [
            -1.24,
            4.414999999999999,
            2.87
          ],
          [
            -1.08,
            4.414999999999999,
            0.99
          ],
          [
            -1.08,
            4.414999999999999,
            1.93
          ],
          [
            -1.08,
            4.414999999999999,
            2.87
          ],
          [
            -0.92,
            4.414999999999999,
            0.99
          ],
          [
            -0.92,
            4.414999999999999,
            1.93
          ],
          [
            -0.92,
            4.414999999999999,
            2.87
          ],
          [
            -0.76,
            4.414999999999999,
            0.99
          ],
          [
            -0.76,
            4.414999999999999,
            1.93
          ],
          [
            -0.76,
            4.414999999999999,
            2.87
          ],
          [
            -0.6,
            4.414999999999999,
            0.99
          ],
          [
            -0.6,
            4.414999999999999,
            1.93
          ],
          [
            -0.6,
            4.414999999999999,
            2.87
          ],
          [
            -0.44,
            4.414999999999999,
            0.99
          ],
          [
            -0.44,
            4.414999999999999,
            1.93
          ],
          [
            -0.44,
            4.414999999999999,
            2.87
          ],
          [
            -0.28,
            4.414999999999999,
            0.99
          ],
          [
            -0.28,
            4.414999999999999,
            1.93
          ],
          [
            -0.28,
            4.414999999999999,
            2.87
          ],
          [
            -0.12,
            4.414999999999999,
            0.99
          ],
          [
            -0.12,
            4.414999999999999,
            1.93
          ],
          [
            -0.12,
            4.414999999999999,
            2.87
          ],
          [
            0.04,
            4.414999999999999,
            0.99
          ],
          [
            0.04,
            4.414999999999999,
            1.93
          ],
          [
            0.04,
            4.414999999999999,
            2.87
          ],
          [
            0.2,
            4.414999999999999,
            0.99
          ],
          [
            0.2,
            4.414999999999999,
            1.93
          ],
          [
            0.2,
            4.414999999999999,
            2.87
          ],
          [
            0.36,
            4.414999999999999,
            0.99
          ],
          [
            0.36,
            4.414999999999999,
            1.93
          ],
          [
            0.36,
            4.414999999999999,
            2.87
          ],
          [
            0.52,
            4.414999999999999,
            0.99
          ],
          [
            0.52,
            4.414999999999999,
            1.93
          ],
          [
            0.52,
            4.414999999999999,
            2.87
          ],
          [
            0.68,
            4.414999999999999,
            0.99
          ],
          [
            0.68,
            4.414999999999999,
            1.93
          ],
          [
            0.68,
            4.414999999999999,
            2.87
          ],
          [
            0.84,
            4.414999999999999,
            0.99
          ],
          [
            0.84,
            4.414999999999999,
            1.93
          ],
          [
            0.84,
            4.414999999999999,
            2.87
          ],
          [
            1,
            4.414999999999999,
            0.99
          ],
          [
            1,
            4.414999999999999,
            1.93
          ],
          [
            1,
            4.414999999999999,
            2.87
          ],
          [
            1.16,
            4.414999999999999,
            0.99
          ],
          [
            1.16,
            4.414999999999999,
            1.93
          ],
          [
            1.16,
            4.414999999999999,
            2.87
          ],
          [
            1.32,
            4.414999999999999,
            0.99
          ],
          [
            1.32,
            4.414999999999999,
            1.93
          ],
          [
            1.32,
            4.414999999999999,
            2.87
          ],
          [
            1.48,
            4.414999999999999,
            0.99
          ],
          [
            1.48,
            4.414999999999999,
            1.93
          ],
          [
            1.48,
            4.414999999999999,
            2.87
          ],
          [
            1.64,
            4.414999999999999,
            0.99
          ],
          [
            1.64,
            4.414999999999999,
            1.93
          ],
          [
            1.64,
            4.414999999999999,
            2.87
          ],
          [
            1.8,
            4.414999999999999,
            0.99
          ],
          [
            1.8,
            4.414999999999999,
            1.93
          ],
          [
            1.8,
            4.414999999999999,
            2.87
          ],
          [
            1.96,
            4.414999999999999,
            0.99
          ],
          [
            1.96,
            4.414999999999999,
            1.93
          ],
          [
            1.96,
            4.414999999999999,
            2.87
          ],
          [
            2.12,
            4.414999999999999,
            0.99
          ],
          [
            2.12,
            4.414999999999999,
            1.93
          ],
          [
            2.12,
            4.414999999999999,
            2.87
          ],
          [
            2.28,
            4.414999999999999,
            0.99
          ],
          [
            2.28,
            4.414999999999999,
            1.93
          ],
          [
            2.28,
            4.414999999999999,
            2.87
          ],
          [
            2.44,
            4.414999999999999,
            0.99
          ],
          [
            2.44,
            4.414999999999999,
            1.93
          ],
          [
            2.44,
            4.414999999999999,
            2.87
          ],
          [
            2.6,
            4.414999999999999,
            0.99
          ],
          [
            2.6,
            4.414999999999999,
            1.93
          ],
          [
            2.6,
            4.414999999999999,
            2.87
          ],
          [
            2.76,
            4.414999999999999,
            0.99
          ],
          [
            2.76,
            4.414999999999999,
            1.93
          ],
          [
            2.76,
            4.414999999999999,
            2.87
          ],
          [
            2.92,
            4.414999999999999,
            0.99
          ],
          [
            2.92,
            4.414999999999999,
            1.93
          ],
          [
            2.92,
            4.414999999999999,
            2.87
          ],
          [
            3.08,
            4.414999999999999,
            0.99
          ],
          [
            3.08,
            4.414999999999999,
            1.93
          ],
          [
            3.08,
            4.414999999999999,
            2.87
          ],
          [
            3.24,
            4.414999999999999,
            0.99
          ],
          [
            3.24,
            4.414999999999999,
            1.93
          ],
          [
            3.24,
            4.414999999999999,
            2.87
          ],
          [
            3.4,
            4.414999999999999,
            0.99
          ],
          [
            3.4,
            4.414999999999999,
            1.93
          ],
          [
            3.4,
            4.414999999999999,
            2.87
          ],
          [
            3.56,
            4.414999999999999,
            0.99
          ],
          [
            3.56,
            4.414999999999999,
            1.93
          ],
          [
            3.56,
            4.414999999999999,
            2.87
          ],
          [
            3.72,
            4.414999999999999,
            0.99
          ],
          [
            3.72,
            4.414999999999999,
            1.93
          ],
          [
            3.72,
            4.414999999999999,
            2.87
          ],
          [
            -3.8,
            4.414999999999999,
            -2.95
          ],
          [
            -3.8,
            4.414999999999999,
            -2.01
          ],
          [
            -3.8,
            4.414999999999999,
            -1.07
          ],
          [
            -3.8,
            4.414999999999999,
            -0.13
          ],
          [
            -3.64,
            4.414999999999999,
            -2.95
          ],
          [
            -3.64,
            4.414999999999999,
            -2.01
          ],
          [
            -3.64,
            4.414999999999999,
            -1.07
          ],
          [
            -3.64,
            4.414999999999999,
            -0.13
          ],
          [
            -3.48,
            4.414999999999999,
            -2.95
          ],
          [
            -3.48,
            4.414999999999999,
            -2.01
          ],
          [
            -3.48,
            4.414999999999999,
            -1.07
          ],
          [
            -3.48,
            4.414999999999999,
            -0.13
          ],
          [
            -3.32,
            4.414999999999999,
            -2.95
          ],
          [
            -3.32,
            4.414999999999999,
            -2.01
          ],
          [
            -3.32,
            4.414999999999999,
            -1.07
          ],
          [
            -3.32,
            4.414999999999999,
            -0.13
          ],
          [
            -3.16,
            4.414999999999999,
            -2.95
          ],
          [
            -3.16,
            4.414999999999999,
            -2.01
          ],
          [
            -3.16,
            4.414999999999999,
            -1.07
          ],
          [
            -3.16,
            4.414999999999999,
            -0.13
          ],
          [
            -3,
            4.414999999999999,
            -2.95
          ],
          [
            -3,
            4.414999999999999,
            -2.01
          ],
          [
            -3,
            4.414999999999999,
            -1.07
          ],
          [
            -3,
            4.414999999999999,
            -0.13
          ],
          [
            -2.84,
            4.414999999999999,
            -2.95
          ],
          [
            -2.84,
            4.414999999999999,
            -2.01
          ],
          [
            -2.84,
            4.414999999999999,
            -1.07
          ],
          [
            -2.84,
            4.414999999999999,
            -0.13
          ],
          [
            -2.68,
            4.414999999999999,
            -2.95
          ],
          [
            -2.68,
            4.414999999999999,
            -2.01
          ],
          [
            -2.68,
            4.414999999999999,
            -1.07
          ],
          [
            -2.68,
            4.414999999999999,
            -0.13
          ],
          [
            -2.52,
            4.414999999999999,
            -2.95
          ],
          [
            -2.52,
            4.414999999999999,
            -2.01
          ],
          [
            -2.52,
            4.414999999999999,
            -1.07
          ],
          [
            -2.52,
            4.414999999999999,
            -0.13
          ],
          [
            -2.36,
            4.414999999999999,
            -2.95
          ],
          [
            -2.36,
            4.414999999999999,
            -2.01
          ],
          [
            -2.36,
            4.414999999999999,
            -1.07
          ],
          [
            -2.36,
            4.414999999999999,
            -0.13
          ],
          [
            -2.2,
            4.414999999999999,
            -2.95
          ],
          [
            -2.2,
            4.414999999999999,
            -2.01
          ],
          [
            -2.2,
            4.414999999999999,
            -1.07
          ],
          [
            -2.2,
            4.414999999999999,
            -0.13
          ],
          [
            -2.04,
            4.414999999999999,
            -2.95
          ],
          [
            -2.04,
            4.414999999999999,
            -2.01
          ],
          [
            -2.04,
            4.414999999999999,
            -1.07
          ],
          [
            -2.04,
            4.414999999999999,
            -0.13
          ],
          [
            -1.88,
            4.414999999999999,
            -2.95
          ],
          [
            -1.88,
            4.414999999999999,
            -2.01
          ],
          [
            -1.88,
            4.414999999999999,
            -1.07
          ],
          [
            -1.88,
            4.414999999999999,
            -0.13
          ],
          [
            -1.72,
            4.414999999999999,
            -2.95
          ],
          [
            -1.72,
            4.414999999999999,
            -2.01
          ],
          [
            -1.72,
            4.414999999999999,
            -1.07
          ],
          [
            -1.72,
            4.414999999999999,
            -0.13
          ],
          [
            -1.56,
            4.414999999999999,
            -2.95
          ],
          [
            -1.56,
            4.414999999999999,
            -2.01
          ],
          [
            -1.56,
            4.414999999999999,
            -1.07
          ],
          [
            -1.56,
            4.414999999999999,
            -0.13
          ],
          [
            -1.4,
            4.414999999999999,
            -2.95
          ],
          [
            -1.4,
            4.414999999999999,
            -2.01
          ],
          [
            -1.4,
            4.414999999999999,
            -1.07
          ],
          [
            -1.4,
            4.414999999999999,
            -0.13
          ],
          [
            -1.24,
            4.414999999999999,
            -2.95
          ],
          [
            -1.24,
            4.414999999999999,
            -2.01
          ],
          [
            -1.24,
            4.414999999999999,
            -1.07
          ],
          [
            -1.24,
            4.414999999999999,
            -0.13
          ]
        ],
        "tones": [
          12895944
        ]
      },
      "condenserY": 4.42,
      "condenserParts": [
        [
          0,
          0.44,
          0,
          1,
          0.8,
          0.9
        ],
        [
          0,
          0.8600000000000001,
          0,
          1.04,
          0.04,
          0.9400000000000001
        ],
        {
          "cyl": [
            0,
            0.8950000000000001,
            0,
            0.3,
            0.03,
            20
          ]
        },
        {
          "cyl": [
            0,
            0.9100000000000001,
            0,
            0.24,
            0.012,
            20
          ]
        },
        [
          0,
          0.44,
          0.456,
          0.86,
          0.66,
          0.012
        ],
        [
          0,
          0.18,
          0.466,
          0.84,
          0.035,
          0.012
        ],
        [
          0,
          0.31,
          0.466,
          0.84,
          0.035,
          0.012
        ],
        [
          0,
          0.44,
          0.466,
          0.84,
          0.035,
          0.012
        ],
        [
          0,
          0.5700000000000001,
          0.466,
          0.84,
          0.035,
          0.012
        ],
        [
          0,
          0.7,
          0.466,
          0.84,
          0.035,
          0.012
        ],
        [
          -0.42,
          0.03,
          -0.38,
          0.08,
          0.08,
          0.08
        ],
        [
          0.42,
          0.03,
          -0.38,
          0.08,
          0.08,
          0.08
        ],
        [
          -0.42,
          0.03,
          0.38,
          0.08,
          0.08,
          0.08
        ],
        [
          0.42,
          0.03,
          0.38,
          0.08,
          0.08,
          0.08
        ]
      ],
      "condenserTones": [
        null,
        null,
        10133154,
        3948612,
        3817026,
        11843772,
        11843772,
        11843772,
        11843772,
        11843772,
        null,
        null,
        null,
        null
      ],
      "condensers": [
        [
          0.5,
          -0.65,
          0,
          1
        ],
        [
          2.4,
          -1.05,
          0,
          0.62
        ],
        [
          3.02,
          -1.1,
          0,
          0.62
        ]
      ]
    },
    "graphic": {
      "background": "#343852",
      "baked": "data:image/webp;base64,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",
      "size": [
        2048,
        1024
      ],
      "bandFrac": 0.875,
      "ops": [
        {
          "type": "text",
          "text": "◗",
          "x0": 0.455,
          "x1": 0.48,
          "cy": 0.6,
          "size": 0.6,
          "fill": "#FFFFFF"
        },
        {
          "type": "text",
          "text": "ptt",
          "x0": 0.485,
          "x1": 0.535,
          "cy": 0.62,
          "size": 0.62,
          "fill": "#FFFFFF",
          "style": "italic bold"
        }
      ],
      "glass": {
        "baked": "data:image/webp;base64,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",
        "rect": [
          -1,
          0,
          3.45,
          4
        ],
        "roughness": 0.12
      },
      "wall": {
        "meshes": [
          "building-shell",
          "parapet"
        ],
        "tile": 3,
        "size": 512,
        "seed": 31,
        "base": 250,
        "patches": 50,
        "patchAmp": 9,
        "streaks": 22,
        "streakAmp": 9,
        "specks": 1500,
        "speckAmp": 8
      },
      "walls": [
        {
          "meshes": [
            "roof-deck"
          ],
          "tile": 2,
          "size": 512,
          "seed": 9,
          "base": 250,
          "patches": 40,
          "patchAmp": 14,
          "streaks": 0,
          "specks": 2500,
          "speckAmp": 20,
          "seams": true,
          "seamPitch": 0.5,
          "seamAmp": 30,
          "clean": [
            -1,
            0,
            3.45,
            3.9
          ]
        },
        {
          "meshes": [
            "plant-condensers",
            "extra-feature-2"
          ],
          "tile": 1.4,
          "image": "data:image/webp;base64,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"
        }
      ]
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

/** Merge a box list with a per-ENTRY tone written into a vertex colour attribute. The material
 *  that draws it must then have `vertexColors` on -- see `finishVertexColors` -- and every other
 *  geometry on that material needs a white attribute, or it renders black. Tones are sRGB hexes,
 *  decoded to linear by setHex, which is the space the shader multiplies in. */
function tonedBoxes(list: (number[] | { cyl: number[] })[], tones: (number | undefined)[]) {
  const parts = list.map((b) => boxes([b]));
  const geo = mergeGeos(parts.map((g) => g.clone()));
  const col = new Float32Array(geo.getAttribute('position').count * 3);
  const c = new THREE.Color();
  let v = 0;
  for (let i = 0; i < parts.length; i++) {
    const n = parts[i].getAttribute('position').count;
    c.setHex(tones[i] ?? 0xffffff);
    for (let k = 0; k < n; k++) { col[(v + k) * 3] = c.r; col[(v + k) * 3 + 1] = c.g; col[(v + k) * 3 + 2] = c.b; }
    v += n;
    parts[i].dispose();
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geo;
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

export function createPTTStationBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'PTT Station Building';

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
  // `shellBox` [cx, cy, cz, w, h, d] replaces the full-module shell for a plate whose enclosed volume
  // does not fill the slab -- the PTT kiosk sits under the rear-right of an 8 x 7 canopy slab.
  const SB = (G.shellBox as number[] | undefined) ?? [0, 1.775, (SF - 3.44) / 2, 7.88, 3.55, SF + 3.44];
  add('building-shell', 'Building shell', boxAt(SB[0], SB[1], SB[2], SB[3], SB[4], SB[5]), 'wall');
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
    const mats = (G.condensers as number[][]).map(([x, z, yaw, s]) =>
      new THREE.Matrix4().compose(
        new THREE.Vector3(x, (G.condenserY ?? 3.60) as number, z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
        new THREE.Vector3(s ?? 1, s ?? 1, s ?? 1),
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
  const root = createPTTStationBuildingModel(options);
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
