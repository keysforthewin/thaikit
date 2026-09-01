import * as THREE from 'three';

/**
 * SCB Bank Branch Building -- procedural Three.js factory.
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
    "id": "scb-bank-branch-building",
    "name": "SCB Bank Branch Building",
    "exportName": "SCBBankBranchBuilding",
    "materials": [
      {
        "id": "wall",
        "color": 14997179,
        "roughness": 0.88,
        "metalness": 0
      },
      {
        "id": "deck",
        "color": 13949663,
        "roughness": 0.55,
        "metalness": 0.25
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
        "color": 4938848,
        "roughness": 0.12,
        "metalness": 0,
        "opacity": 0.9,
        "envMapIntensity": 1.3
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
      "plantMaterial": "deck",
      "fasciaWall": {
        "cy": 3.99,
        "cz": 2.98,
        "h": 0.94,
        "d": 0.36
      },
      "fasciaWallMaterial": "wall",
      "parapetSides": {
        "cy": 3.99,
        "h": 0.94,
        "thick": 0.24
      },
      "parapetExtra": [
        [
          0,
          4.52,
          3,
          8.04,
          0.16,
          0.44
        ],
        [
          -3.88,
          4.52,
          -0.3,
          0.28,
          0.16,
          6.4
        ],
        [
          3.88,
          4.52,
          -0.3,
          0.28,
          0.16,
          6.4
        ],
        [
          0,
          4.52,
          -3.38,
          8.04,
          0.16,
          0.28
        ],
        [
          3.975,
          2.66,
          0.74,
          0.15,
          0.16,
          1.5999999999999999
        ],
        [
          3.975,
          3.2199999999999998,
          -0.985,
          0.15,
          0.14,
          1.0499999999999998
        ],
        [
          3.975,
          3.2199999999999998,
          -2.465,
          0.15,
          0.14,
          0.9900000000000001
        ]
      ],
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
        ],
        [
          3.955,
          2.75,
          -0.985,
          0.02,
          0.7399999999999998,
          0.8699999999999999
        ],
        [
          3.955,
          2.75,
          -2.465,
          0.02,
          0.7399999999999998,
          0.81
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
        ],
        [
          3.9525,
          1.325,
          0.74,
          0.025,
          2.5500000000000003,
          1.5
        ],
        [
          3.975,
          1.325,
          0.74,
          0.02,
          2.47,
          0.02
        ],
        [
          3.9525,
          2.75,
          -0.985,
          0.025,
          0.7999999999999998,
          0.9299999999999999
        ],
        [
          3.9525,
          2.75,
          -2.465,
          0.025,
          0.7999999999999998,
          0.8700000000000001
        ],
        [
          3.975,
          2.75,
          -1.24,
          0.02,
          0.7199999999999999,
          0.02
        ],
        [
          3.975,
          2.75,
          -1.0699999999999998,
          0.02,
          0.7199999999999999,
          0.02
        ],
        [
          3.975,
          2.75,
          -0.8999999999999999,
          0.02,
          0.7199999999999999,
          0.02
        ],
        [
          3.975,
          2.75,
          -0.73,
          0.02,
          0.7199999999999999,
          0.02
        ],
        [
          3.975,
          2.75,
          -0.985,
          0.02,
          0.02,
          0.85
        ],
        [
          3.975,
          2.75,
          -2.702,
          0.02,
          0.7199999999999999,
          0.02
        ],
        [
          3.975,
          2.75,
          -2.5439999999999996,
          0.02,
          0.7199999999999999,
          0.02
        ],
        [
          3.975,
          2.75,
          -2.3859999999999997,
          0.02,
          0.7199999999999999,
          0.02
        ],
        [
          3.975,
          2.75,
          -2.2279999999999998,
          0.02,
          0.7199999999999999,
          0.02
        ],
        [
          3.975,
          2.75,
          -2.465,
          0.02,
          0.02,
          0.7900000000000001
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
        "name": "Metal fittings: glazing frame, door pulls, ATM kiosks, service door and window frames",
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
            3.98,
            1.325,
            0.38,
            0.03,
            2.47,
            0.7
          ],
          [
            3.98,
            1.325,
            1.1,
            0.03,
            2.47,
            0.7
          ],
          {
            "cyl": [
              4.005,
              1.05,
              0.84,
              0.012,
              0.14,
              8,
              1.5707963267948966
            ]
          },
          [
            4,
            1.05,
            0.77,
            0.02,
            0.05,
            0.05
          ],
          [
            3.98,
            3.13,
            -0.985,
            0.03,
            0.04,
            0.9299999999999999
          ],
          [
            3.98,
            2.37,
            -0.985,
            0.03,
            0.04,
            0.9299999999999999
          ],
          [
            3.98,
            2.75,
            -0.54,
            0.03,
            0.7999999999999998,
            0.04
          ],
          [
            3.98,
            2.75,
            -1.43,
            0.03,
            0.7999999999999998,
            0.04
          ],
          [
            3.98,
            3.13,
            -2.465,
            0.03,
            0.04,
            0.8700000000000001
          ],
          [
            3.98,
            2.37,
            -2.465,
            0.03,
            0.04,
            0.8700000000000001
          ],
          [
            3.98,
            2.75,
            -2.05,
            0.03,
            0.7999999999999998,
            0.04
          ],
          [
            3.98,
            2.75,
            -2.88,
            0.03,
            0.7999999999999998,
            0.04
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
      "deckY": 4.15,
      "deckTone": 15130579,
      "deckExtra": [
        [
          -1.2,
          1.65,
          3.106,
          4.7,
          2.98,
          0.008
        ]
      ],
      "deckExtraTones": [
        4737096
      ],
      "condenserY": 4.21,
      "condenserTones": [
        null,
        null,
        null,
        3948612,
        3553854,
        11843772,
        11843772,
        11843772,
        11843772,
        11843772,
        4869714,
        11054256,
        11054256,
        11054256,
        11054256,
        11054256,
        11054256,
        11054256,
        11054256,
        11054256,
        8685708,
        8685708,
        null,
        null,
        null,
        null
      ],
      "condenserParts": [
        [
          0,
          0.35,
          0,
          1.1,
          0.62,
          0.8
        ],
        [
          0,
          0.685,
          0,
          1.14,
          0.05,
          0.84
        ],
        {
          "cyl": [
            0.3,
            0.725,
            0,
            0.26,
            0.03,
            16
          ]
        },
        {
          "cyl": [
            0.3,
            0.748,
            0,
            0.22,
            0.015,
            16
          ]
        },
        {
          "cyl": [
            0,
            0.36,
            0.425,
            0.27,
            0.03,
            24,
            1.5707963267948966
          ]
        },
        [
          0,
          0.13999999999999999,
          0.455,
          0.56,
          0.016,
          0.012
        ],
        [
          0,
          0.25,
          0.455,
          0.56,
          0.016,
          0.012
        ],
        [
          0,
          0.36,
          0.455,
          0.56,
          0.016,
          0.012
        ],
        [
          0,
          0.47,
          0.455,
          0.56,
          0.016,
          0.012
        ],
        [
          0,
          0.58,
          0.455,
          0.56,
          0.016,
          0.012
        ],
        [
          -0.562,
          0.37,
          0,
          0.025,
          0.52,
          0.64
        ],
        [
          -0.575,
          0.16555555555555557,
          0,
          0.04,
          0.02811111111111111,
          0.6
        ],
        [
          -0.575,
          0.21666666666666667,
          0,
          0.04,
          0.02811111111111111,
          0.6
        ],
        [
          -0.575,
          0.2677777777777778,
          0,
          0.04,
          0.02811111111111111,
          0.6
        ],
        [
          -0.575,
          0.3188888888888889,
          0,
          0.04,
          0.02811111111111111,
          0.6
        ],
        [
          -0.575,
          0.37,
          0,
          0.04,
          0.02811111111111111,
          0.6
        ],
        [
          -0.575,
          0.4211111111111111,
          0,
          0.04,
          0.02811111111111111,
          0.6
        ],
        [
          -0.575,
          0.4722222222222222,
          0,
          0.04,
          0.02811111111111111,
          0.6
        ],
        [
          -0.575,
          0.5233333333333333,
          0,
          0.04,
          0.02811111111111111,
          0.6
        ],
        [
          -0.575,
          0.5744444444444444,
          0,
          0.04,
          0.02811111111111111,
          0.6
        ],
        [
          0.556,
          0.35,
          -0.18,
          0.012,
          0.56,
          0.02
        ],
        [
          0.556,
          0.35,
          0.18,
          0.012,
          0.56,
          0.02
        ],
        [
          -0.48,
          0.04,
          -0.33,
          0.08,
          0.12,
          0.08
        ],
        [
          -0.48,
          0.04,
          0.33,
          0.08,
          0.12,
          0.08
        ],
        [
          0.48,
          0.04,
          -0.33,
          0.08,
          0.12,
          0.08
        ],
        [
          0.48,
          0.04,
          0.33,
          0.08,
          0.12,
          0.08
        ]
      ],
      "condensers": [
        [
          -1.35,
          0.55,
          0.25
        ],
        [
          0.05,
          0.3,
          0
        ],
        [
          1.6,
          -0.5,
          -1.5707963267948966
        ],
        [
          3.05,
          0.6,
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
          "text": "◆",
          "x0": 0.494,
          "x1": 0.563,
          "cy": 0.5,
          "size": 0.55,
          "fill": "#E9A21F"
        }
      ],
      "wall": {
        "meshes": [
          "building-shell",
          "parapet"
        ],
        "tile": 3.2,
        "size": 512,
        "seed": 26,
        "base": 252,
        "patches": 60,
        "patchAmp": 8,
        "streaks": 36,
        "streakAmp": 9,
        "specks": 1500,
        "speckAmp": 9
      },
      "walls": [
        {
          "meshes": [
            "extra-feature"
          ],
          "tile": 1.2,
          "size": 512,
          "seed": 5,
          "base": 250,
          "patches": 110,
          "patchAmp": 30,
          "streaks": 0,
          "specks": 5000,
          "speckAmp": 40
        },
        {
          "meshes": [
            "plant-condensers",
            "roof-deck"
          ],
          "tile": 1.4,
          "image": "data:image/webp;base64,UklGRmCTAABXRUJQVlA4IFSTAACQggKdASoAAgACPlEmjkUjoiET2c3YOAUEtKYQrNtn1D/A8FPvf97/WXWbx6uy/8P0Jv1bUVxF9VzzFuKiS7x+/+vk9/dfMlZkEQbI4J4hGE1h+Y/0A5xHDf5T/rN4GmMf0f/H+k3gDedf3X2AP1C/2H3HfBT9N8wP4Z/Rv8h9lf0Lfz7/Ieav0AvxX+h+h9/rv6h7Kf1z9gPMv+bf2D/z/473CfzL+v/+H/Df6r3oPYz/bf9gOfmf+yfP+yGlow/pNfzX+G71/zr32/sD94/kK/bMUfq/+j5m/Hj1r9sP6x/pehH+rf67/7+O/u9ua8yzydxs/d32CeL6oNeTN/4+b37j9gwCvx3+S4FLtOFMhidGWV0x61iZUrRS/wUvNSeNrSokr/QpMYJ1LDQexdxuFYDXSY/1T3W9hHAUfarh0Es1abqhiM6xhj5OE4LCeGkMXvHf+4vO0Bqt7piJ+6BKz2yUHMMr/Al9FtoTbc3r3z2qfrrmJNObwDsiosKg8HYFGKLV31LZMg+AZ1bS+ndPT+5UfD5Bj2y6Ou/bMNYChmkHvkX2/wuvHdwekLrmbKs1pPJX+kdSsfgDcu3x7KGLGUP88mW30DZ1/V+SJpGncZI4oToAWqwIfvXg3SlgFEi4KsmygwcNB+87WM3vWIJFHwSGtNPDuUa/j400pnpLiiWScxBcNkWkjCxDNbQTuofLfdZDAkeDSPloQtjch0Q6M6VqInhxAR5/hLcTNxF92F3pYGBoLwt9sM4+HB98vxlxXYMoDE3eOdXPDqK3NyW6IVptMpR2WFe2KtRSFzkhv2Tmw6VhcvLzQA3opyHilZ9ty1TgFwhOvbQwXaj5o/p/EXrb62sXxLl9kyiwU2xM3R0/Av4WwjmN/ii4Ljt9PbE4nHJsNuDIiMEzQPJDgX2X7/svJ3MeJ04393oa2RVBd5j22HGROMWLIi6snQB4TC7ZvRtb5pmy131DwXdPy4Uy/+rhKTs2kG+ny4mFoEjSWjLfJR925HfSe858HmzQMBuA+aoNI6IPGJBzw1oMx36EMYoySmKDtgkMzvEvYB0KNJTPBa/8hJSNtQXXv6SYTR4dLj2o7MIyrWjCBliZX0vqgrX/ft8/u7godNlz5b8Ch/GKU0BeoercgvyagyfrSQRBG7c13JD2eSQyiFTyvWWJKBkPUPlf7n6du35QmsMkUSGD1tIlqTG6C7QISSZO54wBMRY5/U09iKwh1E7Rie+JA9GoYSSmTKUd+cL+4DpACxIX1CRWXegsyTlBwilUyMdmn42/Lv2GLk8edDOh1UxrxoZy06kY+kpoWRr7YDK6nJZVrZeggDFfID+znbTf+G5nS+eGtxP+3lcT4FqRBB/tt9N7uIQj/Vmzz/VDecYsg11Wc/1hdtFm9QXGO3NUidiA4aSakRT+yEC03ieNNIrSsBG5jomzEo38sfrD7/EI/g7MRBExYW0qtszXwYlLwB9UQUASPSeBH21Z+TrSOy72SnpDqjsjFJTBoOQJbHXB2USEnWN2TfhsLtbI02SzuyOYMylQPSQl+eLWOJNSImKKCqlyGxL1ZyUIEjHsOcsnxxd6e6Mag+ls0eXR3/RTd4QIzVV2d1dZpDrVHJwE2KyvKl+8UTwefoIbnRmHHVdkkIPXREJ1U33+y0kBXr9IZnz3PYT221uUgt9d3Dl7r/jIKvfAjWhrRcdVHFAbbKiMGdpF1l3Fh2jTbWmLJWgIQdrT1xZm3a7lpoAdhOkdKEXnXTc/mWLz03z89bDeRLYV7jeLliKHnG/TLgb+yXnhK0qug5T/eCYBZeJwDQy/n2GxFsmZigYtjLV0OvAAfEXv3fVXMN1K0zyX4hZqGPnpiScSfM+iPpHXiMr5QMKlV/gNJ3j1W9ssXx9/LCTWRFHiTEgM2ShWha4iW3P40myt7351J0sdJVHKh0VLhyjRkVF5pxPufuLoA5B+qYNKrV6fJvMGj100OfB1aBwCR2Mcs0RxWw6c589CJ3nKQPu7/j5BBC3XAxBtJPFvoRTvb6jopizXnFTjmIiOnKXO3t1CasHZfbz4GA5UJ7owCrJ77ZDjn0Ek68yEuy4fgzDQStoVgjnLj9SI5Pvn2xfgG4cN5lPHxNgGbDufbX1bb/lv7sUhMoltPVkpJtFQtcjRphldOFx58KJSNKQlhsdIz61Cyr7mkcTl1nQ4hvMIUi5e6gaUQiTCET/RSVjI+UxZ9JzfUMkmA+XmafjCutT24HX5zILVaONakY6XrNKBVfqgud7U8HHrfENs0Pfkg+AZJKQJCIZLVS6PV4UhtOXYaRJVVDXdoCd59JTShPa90aFzPt/GGzI1q6LOjBWzemSuJKWWwiAz4Flq/8gXBVrIlKnnU1fSOORbc4hUVJlsmkyyB5osaDZ9YlfzR3o5XdUjaPx4JCLGPa2N9PyFsBdDGj7OBK4J131XyOj8KYlVapAK/B3EfFOQ1Kgmz5now4G1QutBRk9Pdh3H1cIRGmpXEM0WSuJVvxUOEPFOcV/Qxaid5oKXd8yCj59nCvMesqZOm386xtb7WK3cOQuqglaVJGikktfqnECs/KZUYRXipCqqqFsn1JvyIvnyE7GiFpYplUW4Aewtk0SurBBTfEglHqR406Sg4p4G6BCQJpxE0aBVBDFLHfdGBVPslIpxMlWPxZ2OaMjUVzpQyih7DQ0v2KtkhBg6YS5if8OF4Pjn8MIWVWjS2NhguN5fauQZ9rAD9PZvXLzhAkdr5Z2Cn5Lj1EY/dqzAwdci4B1RbYev6cEtURTrxHo0/w6nNqQNCVUnv7zyTtu0M6Nme6JNdsXZPkTX1fKTdEXEYbW3WCz3O46QxkZSAlAG/GpXI1YIrFbZdEd8y+ibhWAEDuhModiT0mSFCN2beUgQ/K6P+pbJqGSEh+L5w+Xyh6gciH59uZ+uIW35o37LEKWnPclqaezXbKSVCPT2p5aXQlNlWaka+kDGoyrlsyFBcE1J60AvG4zQo+lanOAPzwobvyItxrnXpHdnuKtnYcWJ+vcbXIMlI55ycb/Zh1hkv5ffSKC/f7AihWGAuXggBirinvpAnszKsQ6R9Igb4kL6rE5xbYOoX/ZHeWL/+jJCqofeRS3XBrnyTwCSotP8AeUsQOKv2GDtOalGy1RI0qIAMQZIrZa391Bi3eRV5hWZgBE6TYUGwChsOMlrP+q2QHKGTcvh6ebiTImy6A/KucFYRgvu/yRFSnA9Ya+IWrN8XHGLpJjAmfZk3MT8x28CEWKXz08yRUROATpp9PktkqC69JG8BneNOya5luEvnK+WWy4dZl1O7bctTp8pX1PdS9gO4ytmXzFmoHS15n9i7MgUAbAlk/4/mFzMeasbzwhJTgEO006eo0pSny0XHOZdebs1XVHhtWZRMGeN1FSFan7Syx52dPbSHOx/x5H98HG5Yd5t+9HEJ6s6b2u2hRlKOLleBKwJE2CFPPTu9kJs7xiQcEG8sxuSlBxQ3jgB1PoXhMq4uOgKZBAFvsmuA3bXIzNYbfYlfObMFwgcamyEVANQcFMnevF/j53QKlXvVajvO5QhT+oGZDipxS/Y099XcTWUi9gcH4oxvxrfxheAEREqA9lVloiBcnz2fZ+vbg7Ow5E266U/nl71BxCNOFnyL2bYuzWGI35dVMF0YjdTALfnWxDrGvQoxDVP2B0PRMC/qF0vSE4y0iTo0vrBnuf/WgqssnrUsF4CvqRcAx9mIwnsp3A8NwdErchtdXGR5rEAvG2B8QOrOuDtSSywGzMihV119OuuRqMb191lqMH3OY5NYpg3L5aqxcc9c2ab3nOuPpfhvyrDBl+Fqzu7BTFGky6Q7cOAsjoFL11/C8eiDDGhx3D4i1qDPyhg0yUFawsmO9gD4aYMAKfXXLd2AlvP0gncDjrV9ISusZVHEjgREPPaKz1DRr67wOnEZsJUP5z8RmLtLGobkbKRuZx/g9teBJcbBCsXw+zAKK1IYVhx6p9sw7NmTIOZ/wMCC7lMFlC2XY83ox2B/iQQP5bKxv5wIHzjHRecRbJAMAYyBNIdAFQCtXegUrrKfZne/IPViXWJ+rNZY1l2FPheVeX+mflzG8kVSnwwivx0ktJxTtB4tLbDPHy97sDn+f3ZhxSVHRYVf6LnmjP9d7BTjW5nbDgGroHsj9eLQa3uDX8ybBlKBQfYKXGn/qpPwsUxVeq8+DoU7qr2BysjlNa+0fFzCOmGmDgbAIJYH2EXrgodTNuU0lWDFHWMHtqrlWDeut6JB29DMTTbcvGGiKky/7rQBVoRFJ8mfUNesAqWZejkA0JfqjEMuY+cOIcBQGTZUKhf5E3I/TI3occXb7yTjbU9G3lHfaYeFiTa6eMlYgjxgwTMvZrTh8HDn1Zx3/MIfIAl5VGFoyq3t0GVev8FJ6Q66OD2UdCyMbYXfiZMwRHMrOIUTL0T4U9WwTCyz9yZTfkpmtJJAn2cOt3vLPwaGkJDITRWEAWenSuk+7vurAXjmhKHM33mRvh5B/3uFs+voxtuw4usUCRYRPqEdMNp9H9rvkqlnwzSo0ptbwogapxvcU105Sj5hEFSQXhZDoFDpVVc9qQquMpv6ilQ60oi7AyV03TS6B2LVnoRNdodtFh9f/HOksapAzqnJSkYWMF5O9d+0WAKyKy43U0nNZIJQA/jRJBBXm+/jKrvmIKei3IVYZ5/71Ce4tdgIdWVBEftgp7LFc+8n3/wPSwywYyZh0iNost8cAVb3cd9egQ5gs06oI5FFB9n2H6VXgYrrvbJVy/3oeFUvJ94XjGBzTQDP3B4yKjZFvix9011qvw8nVuzd2TeK8SdYFdsggyDHGhtPwyAgy1Hd/SvBGjYV/cXtMRC5N9WeEsKucKhuJV3TXCBwfOsESVmTq9lMEyjHogDWkMgoe60scqbACZ7tMMsbTc5kTf4SIK5exRLuUc7mNKM/rzmLJLH2z8OB8s3BqfN5u1RmHeNjQ6RCgX1SXLoA/SL6RufVvd0tctwd9UFRlH2SX8jcB0uurFcRMCD6G0ZrGMwk9O/Kuy9kyRsnPmzpjH+eFrUkYTnCh0WhB69LWfcVaRE7A0ck4fL22tXbvOwrclDvb4H9Sl96gugJxeTnaNLKQVhNUXyfnoGY4tGglOhxFTUAaYAgwjzQb4VRHPOg4w8nhU6jzf+u+zaSQ/W7C61c8osHqQn0e2/LmU9xHHyHg6BzfguEsxGw2gU11V18bFr63DdZ+/IEdtDdxkEsa7s+bYOHh+4tkdgGqRyT0wMqYtXvGypITgSYZlOioLRHI2O1Q+C0SYvOlB/SkvvkzdkjEmx8XUTwZzA0l77IkTAU3Mrs/M3eaopPZcpqZm4Wldo43szpxe9jljkQKrPc/OX6zcvwReOskArjDY6SSxE3okzOKVF4kmG7xwOBsYPVcQbNTtcRYZUH9PEL6h7kel70fr3TT4Hw40WBdDBefM6pYEtsgD+mOQbF2VC8bCwdhYoxr4xW3tdWzSoUqU4PhcAW94MxD2cxEMeMnJpY7qZWjkFrKOHTTncfTstAisbwxu9q/wyUWVQ9WN5z9oYNCZnJzxjX4q7+8fDh0b+705O0a7ggcCr9D27OK7oe0x002tXX1/vKaCRQLyedmXK6bM41xMZdfZ2HQrIUdItuhss2lVaVMEgTaCDQabUmx+IbHukdLIIth5Ia1cbI5OH81xivoHA6ZU6eHxdXi+uhYSwS+fX/Ox8GGmdX11PnP1xpJjVZZ8LNMCH1bEUnH/AWR5C7wHDSq24Y9/fM/D7mLUNlFngHK7AhZ/+JG0WlLveMPrLY4pBTsqJJCqPQhZd0xgiRky6ERQbyI2+IT1IULzwjLZJh1hrlRkOTMoF50F/V3VFHCf+Db8ZnEegYQxvmQs9n+qD6mY9ceCK8tdvvs5lYVVji4OB4LR/YRYEex2aK4uoUZkRyqMomaZ1NwB69r8gXGbgtHfUNYjxXkNRzKiOmX9CXUQHawfqhaLT8C82awf4oYsn2lIjHUDLMmIhW5Tp8LkGt2L+3ElfUuiMjoq2SnQZb0Vh6rC/qYREVSl+tuYAft9PdlkzeUn2ef7YWgICCbvR5/v3gEuRwLcBQQHztoygvaCBLx9TywKZ2W8Q7CfExfYLCPKrU+bCRMun85/wGtR4QG29P6FnyrM+He4sbeXOY4ehdG1tyfDfSHEL4EeqvZB7EEUQcpfJwQhiKFITgr5j4O6nVaXFEdKe9e9TkijToqhgTzHpfHd3rVYkV7XAuuCVq7D2AaFib5kTFJkV4qA39mzIVbCAexSwFFgHUTx11IcIaKlSn+OYKgoQR0Q5I0o35vmGoQVvVHCRx0awcej9l+E0Ro1R2sHuJ/vKdPEdhoGmvQQCj+q8Fs+biKDQroz1wsVo6EzbX7cWwWIMBt3z+ou4h8/NPTbzjZRpAb+8KBtcxSnce3y637E7aBxlP6fEtk6j70ACKPjg3IAF+ZVLVm5L4jzzK8+9oLtoIpukAYbTqHt9wrUFl4biHm9noA6ORedE4cMHCrYU85BPHP9dD2EeN1JJ+dTqOj4xSgunA5h2fPEQ65R/7MO4L+AxHzE9Wh2o9beT686RfR3YqzooqqaLQeQy+81uBfaZRbMRyUAP9jU2+XsJV5nCgpgupKZWG0gH5UoqBHmiCMKAa0zj5JSj7HOYLM9FJz26MtSHrZPkXTHAEnGS8zJI0I9Jf32bZmzlKx7dVYZts/oFrsj0ZujyYkzvMX82ht+by/iphVzqGrfMituTKv+Xi9ODNLfeE+65arFJIXSOOd7oWklIglkjKSfzq+CSY5RP8OEJ1EehCYPcRDhayS+Li+SbOiJHFbGprqDhN/9fDHjZd5NFich0SFXP7gRkvPLgzqPF6kYgJZF+Md1RJIWAAP7uL2e8wTq03fRNwoyGaR378S328QVsjWYENEJ3qdkuBtn1M2AKA0KLhRvf5oIP04jTzrgNoMGNg6O94TFPCgRGXGCoeU0/K7YhotejBtfzq25sf68sG149DSEFRN+6u62VtZylVs509uyE9TUPwtYf5JDWuaRE34DQUGwpqYnmWvkwCrn5zQJGHX2aQqoDvw17si/8LRg/aTpF+kP0Wm4yJLwo/IbrM8YWP92aqUNmvjiPYA6uq5haJ2rIyw52WfFlOWX4zRuoGpyMjB6q2a6aD0ifWcOHeFMgZ2p/E9FYT1nMgvpfEd6izhhAm3q1mKGODLd3sq16wMYz2DYpexVVIKlBPhBsmSCjqij0/BrJFrQ+kzHwb4XDxGPOdOq9QIzUXpABa7yFUU3Z7OpWGus50b9AWCOo/ox0ZZUdEteAEpDQfUINAbWgUXCd2dCD/U3+J9mQQrjavVJK5ERirx+8USOwpVgSsZw2H4dx8rjetvLN/rCEMGizZ8j6qU5pXNg1JE3toOhKKqZJVGcWrsTOK5Wn/1nNlgcbNLaQK0SOTbCc9LFGbyMMBP+F9Gj/ZbVAkI/Qpf0mL1LuJv8bkKS8EAR9t8i8M00XXsaFjlopTi/jw/hJTOpCsiQfk8/GiAXC+yvZTTlAk6DXoi7T2SzbiPm+OBAkcotNNoXlWTSipH14VKCXio1Wym05V9NQ7999dclCI4yUqNl0/qdglGDQZx9E43RtrSxhu1e98KqBZq+pn/47f6OVPFg9Xyt2CjL3IqV7JvX6ApAN1STjAJRZGIqhs37Uxme5BXP4tXcL/pX8/xGdF5hixKPdCAlB1m39DOvxrMTfIdYUhqgK8YLsGuNvfBU5XW7qEme8brt1IbjjyUTQ2h1pGmKv3Kfx0CL4DrufPEpQwd3NWR7hZCL7ngZnq6bjhCs/foyxib8SxI+7wNpq0xiIOoj7q00HSZgyszbKLfYuUWQ2mwNO7S9VTUULGNEeoQuK7Y0P8scquXZwlxxkYwle4NegGHpPUeHll7Xj94NPOG6X7tfdxOHvkNO77indwWkDTdXbhCr9f8FgWzOPXVgsaxyX9GIO+KZ3w3YGYEzcDrUfDeKgZo/uAcq8A/TNwYNvHpg/8yyjakUwgXeTIuecme2oiKmzjMOzO9+vdG0FTkqpnR/kpD7QUB6pDzjfRn0frEKlIjEexg1yfhT+JVvVfGyoGrNb5TkzeU4tP2W8m44FogNLCD1LC5IpzFEMSSaOVa3O6/LNV0s1zO1/WPVLe4Q3VlpYic128Cfs/gpNj9sLkR3oFhCgp4093Nah6BEorderFh7/dlr24l1IES+czatNvvDDXrKgACqxhYtRZD9zXudOP9hAKjY3VyZEwDo2eWkpUS97qqPVK4O+aHYkO3ibUV4eBSXpq6Y9PIc0WHEjOJTd2NMDr70P6J/CuYcfuyuQld6FKEwHztJ+XcizCzhpRUSAXsE0EAD2kV0nq0MxmgRKr4Zs4UMoVemrnv+zOxfQXte+tm74yWErrvtsZ7A+cYVr8PwqUu6ZZG4+njF9boE4xneBxRsx/QQO2Y2MPOC6wc5B/190/A1/iuftN8u3b6WNyo52xk4chh3ELmrS9w99m1aktg0xlCT34QFaOpv8I4imUiB1ADEWYYa1ruWENofLcz/t1nyq/LHH0qCrLEI58S9d+YLxAACvwAlcADK+qopqvpzNtvDMoaXZWinYu3Y1HgwRQOLrtemHiR22E1D18qFnWOw6nwrwo2quLFSlTXh5idrKE/NrLGOuHDF2Y7TiJe98RK3he62BkTyskcM0Mc58vmT3dE8PtVQ0TscC7cF6TKkuHSSbXJC0bShjebMhOxfi4gb5lSNH7m924XGa+Ij8/iris/m3Hu1Jz3gGYTIjtTVSua1tIMwpAizQ/Rx1tvJkSCmaSzUv6IMfuw3hHO+miabX07SIif8WJ8pgj1Hd2+NiZgHoArMwyaVYvXp8KzBdRVSMihb8HR5TN6A2Ts6NZbqXARvV8n/MNBGpjTm2Saupc6IR8Y2aYG2/9ZaEZ7CGbwELI+e9ud56HtiApQQawir/8wbKhhRRKVzAsWLVQBDsZluTBbMSf0NusZSgD+093pM4Bk/HCNFZoupRXknFrv1FGCzmpaADprS6afWsCntkF6cqzmlM5az4chv3RRZW45a8kRQl7danlo0W/Xklc9IWHPh08EYvoKh4GgJZjbcalclKjxheOk2OQV8RnkrI2ij5yAY/alX71EGq2V3hOA13BP/qqe0dyCUkl9O3oj+EAFEu16TO45Qd3ZWSoYmh/geYXU22EdPlXpsD5fsbF2x3s0GzwmQPySe9wWmMdBc5Udaci7/U0C1GYWAcdNzj7vdbPnus2Ez97B6MD+nFDYXoXGCna6O+BiIQhkKwLI5WX0pqG8GyUKNMcXob8Tbu4NaI+Bi98/5t0gX9pbaH66OQkYhc5qiCHU7/JAIe7bVYaOeF1+nUweEnaxXI0vEbFk0gRkvv0AUlllCi4pMpKKWmaC1vVPE/Cwx7M+FfCFuAMeSTRgDCNckyEfpLtLB88g/BgoXXMvbXwFzyQYKC6pHUsnQyiQDc6VwF9WEK2bMjAj3VSWdGN7gQ0Gr8fzsVXpaPqyhCUDt7y+x29AncTfCBSxyor5X/BFeRZFd3dq0hdnhWiWgP7iZ9oIrinvppOzeSnjk0Ulai9GGSZhktsoIgHYkqaXEgFv1Q0shrvVV9QHMu2UKhsMaTQRvK76c/xbyGFceYKvOR17xCcGA2b13QTT+EZ5SN0BxeEA7Yxl2tHSs0LuYh29egCM0JW8R6TNsfKwpVVZD95HzUC7w+2/0V5pq+0cjxuv2ettIiR43WsjfYY0Su0BuFrFWR3q3bUuHQnp0saMXYXWOWX84UAAaBxTu4HN0D73ASnjvua/KvZ4/ALFa645ziDiF6vznR3iY6b40NrIUUXqFxNY6/RP8ncCF4/5if7YJs8CPY/y0nK/Aqp8km/MHMUNyETokFMnkIIHVyAIY1Mmk7n9uJnLZdbgUn5hCH/IojCMttKuNjLe7Fdw99lWwMT8e7HfnI4AsJmHL8yjnbF/jmwH3G9vCXQaiPJBEoS54EOuUYmddnSoW70wSAPVWEMq2HdsTWS7fBEl3Xni4bBCTXx5lsM2xzAX2nG1EdwO0T0mcdpo+uax77dscQkn5XykE043SHsyPrHQvHfe3lYlhy4EKYtwDy/lalQrKcFY5YUSUF9L+z82z6orgkXj+CME6KtbN0tTqoYIQdcz69N6+0TrHI7CHl1qURDbsH8Jq2Cpmu4iZ+EHqf8bbqCcjU8kq4pmRw39Co8tg0Y2Nd01j/LCyJWWj/76ju48YwK8630Bks2TU8tm6irswtHRkjWJk44zvPvlO1T3iQU7Hg62aWtrPboMyOWVw9h1SaQSulHtIrLs8VJFONEbn/B47c29mb9eysPxhujnRIlRPtCGWHH977Nhi0c2+u4H7jzcxwMa3GOu7EkepfhaYHEHl4lrSyR9L6sHxQfA8hLVJBRUrZGxk3chSyITQ/k8fzlRNjUkwNwiOHwpC7FPcJUQeFmVdX3A3VAzbXnmAN6AeXB32UlXmVTIXvmkAotapo+JfFbFDFQUvvy1+Qs25Y62vCFKq4IEJyrsRLEGDFnzh3uu/NFhJ/LAu0ImeSENvO9twT8VQJ7Maz3EgrI79zgi9PzGNls9v4EBzbDqM9ucep0Gd5f97gyIB0UCfzHrTGpsy57iHLDK7Ji00GsqWR5dn2ek8hB/GeLjvZK5aijNly4Lvq0Yfz8qHU6wIcyaW1YcCPwaSnd0sZnnRDWGZgzNi4+0Qcp1DqQVibVWokPIZfmsb/hsLcPwxJNRrtYbMhCIFcRqTc8BbCTe572xlX3oI9eeb6gwRcty/+I431B6e5Q73VB8e+TnZqxBVgiP3GUIFBpcm5PxkG4o8akr4I/5j9mIEnuWYZbK2k0pMteJsnYay+oHqrASHbVmOgEc6c5MzPN3W3RkAgVeZWHTptfzcAEu1mxZVogh9l9TSpBc7kZuJDBbfpyKFF8W6ZnK81++PEKmKT3yKHFcIP9Nr86xFhXNWzcIgtFVk1Uq7xKdkrqxgFzr4TKGTDr17soA+OCmxQs4sszDEiDaVuiYv1Npn2VUWKvOV20uhq6fzQlucPqT+uFRR3qvllS4EI8MVMWlJZYj6Pz9e3zQp/ywu1dDvExyEn1680XqxcUd4ydkij0w4t49zDvOzHWO4rxV9hf0kNpGVmlXGWkZv5ffybQVtewtR3Xra2DcIVx/qu8WyaX1sYlYv1DnZV7FPZ4xdJNpQHsyyRtxXkn/sTkETiNiAxi8PWPea1K/ITAih3oZ/7zxXPbGG8R3fBayJbVsbqfwbmBOQ/JZK1ge/nUIuTaMCXVDFwCIM8HvjTxwGeS2uuXcKMchw/kbGmb/kY0LewnWtsHx9WfQtvNil0jfoUY7+2iAaNtJvLDDi4yzqRGaFvzCprKPmtSnoC9J1I20oszwMFPv0r0cRnyE8Bybr8EeLApHUzzjezDRf/HdrE8LDjG5ZZvKnU4nqYc0zrMKq2nqiI9q49dXV9PGPXpa4Jn0ZJPNWibA2wDRkUxQ9qHId1ofS6CoUEluRQcYxb5g/BEZYH5OvJQN1o2REvL6L9K3N8VBsoYoAa6db2I2Z+UDyszXZx/rYrbB3U1u0uhudDb46b918bNn4UXesw9sz+d02pfPxRhwFDAcIMI3EN97kqh/cYoz4Piq57uLT1AwnQ7IuY0OaKLMId4A3XDLU2HN39HjxDwTM/VIlvi0SNyfR8PrfDk5NKRihOVgFLG5KUTgHiyMdyRqCUKV60Bf3LQJbtrgYK6R1Qvq/5PAehD6KujN6s+bFuzOYFHnbM+c1B7Kp0PRo7dM+cfZlKkvwWGowVY/4tqCTpz7Gm1BXM3O5v4hyLtScRj6BzxtJnI16ovXkP8NRafcjRRDyHDrc67+utaLe7PAnY7LzcRn8631LVn4UZfUnTjnyUvqHObtoWu7PEDsVrhj6ol5gF0KdqKfCSYDPNJ94RVKCSCoT6D4cmZ2EsIbWCeMx9SBLeO6cOWXeBGhndtV5SCWIuHwBvc7CCzE/7bBjqZ2DRnxgjtGLQxmzK/CUcq8I7pcFQdF85swbpokww6uVYEtY9MOWCAhOGhn/3ZlXtUYUPot6cCWlV5EeXZv9AChxZZkwBLiHUJxJet8uCODQEnKpU07HbCeQzBHpzzU8G06iTMdGkW7bQCFHoZuKSsOpD4/S66J3w6CmpcKQOkHhoYvuNTG8cVg3M4CJRtf8Adf0hBf1lx3GxHVDxcHujnJWzkeGgzjnP3aL48TRx7/R6R2derB/gUDrGX9vUOO7rrQxDbj//v61ug43nBcUfXxF8qI28QXEoAGSbFd4NVGOj5482270WHbZIc6nTq9t9t49lj+TYrffn5N/lP5JVy4OS6Pkw3XPq/z1vDVlviOrFCYzzQ27JPLu1yL8HDwNgqoQSiNY3YEmoecuzGQxtPo4oESTay1uNoAuwyYGDB8aF4TMG39Trl+TxHCMAFPEX6SBoZQaSqYVwAfKO6AoWvM4PdeKXa3BCLL2/l/4OA2rnmOhqyrmYs5LddneHimcTXh58iyZc+xyHPSY/VDz8zmxqUnIRkh+mDCZ06N8tJaFuT7BHdr5kn3pwtWAZTAZtdhg2fzwvGH1i0BT47u8piRgjgMtp6EH3xhlMJZuZsIMq/+eLiO8Nb/Zm1PHJ2AO918Gf92Q+M2QGajTBJNKl7G5jcfySAb76FsRGaXKHxHIaezZSMQLPbMAf0avifKmT+8tS1gec4t/MJXJqlbvA09Y5ZpACK1RPPo7+bW0UgGKRa80y9PZF7FIuCKrfFunxJXEPwCOHOYIxCRa5zj1aCfwCltFx2s9aKORYZ7wTXD49CJwAGPCB3yTkjEUNM680N5pwYrHQEWm0EOj6wDLkeZTn+IJ4b3o96wkaV3H7I+lCf0VGjiemRHYFp7dRNmz9/LmEm6Wsl07jWqzsxjhpcBwhme2IMLOVD/tmKhnWayB8Ww38sMi6fhpavlMIgJ1/mIBwgCCSxQ77oEYhUme2XeeYTYMgEMUe6gQofDKd4R2i5ZfdOm5Pfe7VV+Fjh7wRMLA5hxirQmKAv9e6tHw0TW2VP8qGvHH/PdZRpcRbPMA8MjxOvDCPD8zX08OWw4M8EF/erQ54qepRU8yU/jJyEpfeybsilznLEJC/bE4lOZ9VmqNNyjZb21a/nkEK4iTDZQw1x/BGBsnD8phsw4md5LV6hLB9QGLnWzWqqmd9adGQ/eoTUItqx/whsI0Dq2uLbpYdwLGwCxIIs7+neUYUKNHnJZQvqIBCGwy6E4QsMgMA0NWNVq1RSyu2Cc8kTtHU8cMJY08EawJx3NqYiHh8PXI5wDAVZLAH/e5WQJGzxkbiUJK3NdRGALS3wvqFcYpj8c70N8yM6a91xvAHEn/hG3mfY7i/Cj/Ff/vzEezenX+TPyjjNkbFmi4KFCB54LpbABn6hlXkc5oB56l/pg1mOoiQKYcJjpOSBOLv8TdssEm8odKWZcHRtd5zyhJpkta0YUMlIs3c0NYvWddUOhi46kbaoqmpcysgC2SNXt9wBMGYHJufgVxMhfe6Nj0TZxEV9QI0ziGou+2D+Y3ytoVMxnATCwlLxXMJ9xeTaWjwi4o/nxBu2ILSA8RW+Ca5w/AA4oTchrKxXblZd/lT8NOvRIcK2E7+XA9gBhSn9zGrR8uLuE9pk1kchk70s5rXdQ3Isls8ZAY7cp9/uYZlW/cGaq2ufQ7yY2flshUEC1ewpNTP6WoBmG1zsJMJG1q0AS9Bq+fZN6AuZ11xCzjwZy4VcKz5H8YhQ0+As8KudQnab3X8en/V6afjBZpTu8rKyEAw9jd3b94Ej6UvWKIgY7ibAk0GHXJ/2nlw1pu/Ca4eg4z9I19qCa/yvLJqBbGfLQbd+9vytQmjNJV5YW8ejcAQ4GbBLLlN+io3epmxlp7Q3PL7ojcN61f8Dq70GrTAzTb6dt83CmGyGbulthZ0tKn3au78jLB/Chcg74gnpVg+N4uTIsD5VoEgVkOt0UWy7znScSPxaBnQwL0MyCi5CCv44x+ZMXc4RcnrHNgMBJ2+UZ8wYW63hNeYMZZekTTN0Y5tW4l0iyByvmO6/GTnJNh5ygYBELzBYazvyc1CPgOA3XaLt0OR18mhOMy/JGxmO7p/FiIBv/aKN2O0IoAHtPsIlpu7Pfd3GyZdXv/x9r1IVaEWNfND3bGvnYODLklWl7fgsUfUQu4q/c+CnvgmSI87d8rwJ/EslBie7S4dWA9PmqxOWbayS+kdTXafyt5lCqAud87+sKsMsibNgHslvQLiEmuSU9QrC4iDrbQOAF3wGfZjBIK6V/B5bk9MtVwcRfJ+DYCgDRNeup817vXrGnXugS/Vj9cPXmLHbqfiqxicrBNk3FpFWkUBgJ3GET6Fdl3xXCvbFYqjDTjg/2Ti+Hjtrkh0JjirPLtcxzzHIG5V+Lfj2+68zbyoa6Td6tA16HWqnU3xSKgZr7VHgw0BKgF2HBVgS65uWMpYjBi5vjww5Dwm6ubMKXd662juP3xOLDuSKCjK/gRSjhF+SJlABlDJCYcf9v7NnMu9DHcvkuqSIr4BFN0k8L6zHT/DjiWXjqtKw1+WY5D/ztYRJ1Y21jHVaNecrfDgs1/6lGaExso4AIiBL5kqx/1wG/rQgkgKCgDnmDSdK9rbwsuZVU+3+1zxTeRKwtQZ0Sa1kd8ETP8HrlMbhWvpDnx5BFSy7Nje980tfbhPhKxN531s8O/3RTiJzGyvNqQVjdgcVSuaCDF+UTpRmIaCGUmNBZk//eUHx615GNyUUsR/kRCoy0GQJO8sDR9iO0zYtGnWEoHbDbPfioPcfACs/MlHeEX9J3JDJb5wE3tXn33WvlmDIV9vds0ozRDdb0mD+ODIN3gTz84MHy/h44VK6wjw9aT/y+NzVkCdLoZFHaaikDJes2NefRlDsPiBqune5gp4o4b9KqjxVrhORj0GLpcjLvrhdLXQvAKVDDY7TVw/6CQoYxtGN9Bk1GUJT2bY0SMBAbxg13j6Xh/RH2HrluhQte0nWGXcrxwhdpMhUKakfnROsw33WN7JDE5Ap59Ha4BNogTVoNYaVSNAhjTMYOskxEMOI1pCK1/HEbjc+OQJfpnhib9RER/cgintCRn19Dxb+DaGa78Sk0irR3CuKiAoB7ne36RQuYPEmMid8Yxro1QPUy3MNZ9Em25FRYNwQdbFPbxpdxUGZ6cKiph5/WfcFjV+ESKAT66IWx5EQbkYGi2V+PY74wwySXv0FnKoZlyKZBXFAgYvQsDda1AHQ+oxQFubLTetodSVB7fW5TjJhbJ9xgdsCtHnniBQU6JYBZzjhi7q1BtJtGMLiAk52px6LbiCJtqwVC9/wI+3ud9UVYftIFKqu8MHkePuRdSrXh37Zh+7kFtz8IgUmUFSbcMr6mKlU5nwkZc9x3Z/kkznGJBpXGIAumcrFtJidLurA6BDoIKkuT3tvjFHs/pSOrhSZ86nL814tMPTAigL0p29t6bk6kXCEZbvRYjcgoNFlLK11AsYAvWxhUDnBVj0KSAldSdWKBrbZG/t+6JXgSadfssFcBnsglRwsL7zxM1Jc9bdmg1rbdKuMe0ojYHGDtF+0poU0ILW3ywru2seoWxZ2mYhE+Ty5ewYEhn5fcLy95q5ae6oqFih5gILCVX0TQGVjXcXvoFzp2lRQ7xohcN7bvnXoc2Wu5J6gB7J+ghYVacermkp5wcQRdj8Lyw/hVGLnI6VDkX7HEtfhbid9I2lhI8SQmC/09guIX5cKxY0eVcMOlXZWuxkAmH4An1Dtbq/ZZ0gpv/tABKJwRUY8PB6pv1w9jtJ1KpTYFay1Yeubaz8RWQRW5nWQXdL93X0EETFrOFPwXQYmp7MvZb3KT/haN60s29pzFGxSSP84yB/l/JBIchUYQwi4/mri7VdA60wYdgVvsTttHYEKHHYcmM+ev0c7l40rCnAg7yrMl7ocvfIXH2DQKnXG5u5OD67xpOy0ku8VwuqaP05uP9OjY88VWlKDxaDva+O5PoMRn7KiNPrbFVUDdydeMZJmdmcfv+Ce5a56InHASEq2pkL9dQgbzoOmAxG4P+Fip0irUUphD3G7VairlsAcPJEw5ATvgimz6LY4kxW/opW2gN9yjnOCToW2JVvComINgx/63S9wczYAJN3cGKUj6a4pwc5pzcVzJgMaEo73djtMz4cT6MdrosBQCAFcbTHuZDhHiTcvwgRlTzgdA1y5DCsmoJPFxQWcF0IdKdRyYMLXESSH+Ff0zcG+RvXl9qHzACX8nyhOdMz6WlHNmZUSAp2GBfQU1yGlBxWkub8lY78saWC92gGb/NZxD+PLYxy9RedPPjYvxbssTnTCuLwXhazPFNgJorUSjy68dnV5a9ZeGEYEehAUUBBEQY9W+275pLjBPDETEWorzeZGnDuMrccqzWdPtE5WgX3Q43IYq9D23IhPItlYIMXuGWD8NEL9fmsWtLtGeRJCfi0xVmhSi4VfmSE7b49Xf1zQkP0kev/QfDpW1jRn30NcjaL97vrDhMp+ei4nZXDFvrglw5EdOogAAED//VAhTp/8WkkY2Cp6dWF8sNaOrtO6G1/mE1O+9TKdPKhsffpQ1MFjb/RZx6lBdvHFsqSNwN9VY2zVUgvdgFtHZbq7iuYYfdBBDuNFu5VEmcauEsdTI/mXsRpN9czZixUrmnjPi5jaaaIp8hr2FoZPCxvyMSzjGPRuTRG82gX8aoIwuybIML6GTgd3OJ5Ao+C8XmDpeXwetg4CqTd+vDtf2M9Buw537JFV7l1vxvdqD2AQ6ZHxpX/NSUQvdN5oR8XnF4ZCzbqtJs40rHDRQqtbxl7w8XvK4HhP6ya3e9v0TqlqqEOLjGVxhNe6YzQLx5aJ29/wBTKChngkxbVy1PtLyqIgUAkY2G1e1AHT+7S+7AQoknue/JjGwhIWZLphH6hEwYTAjtu5aexfY3mHqHIZjbOm0YhpQxXSJriuiXZmgp0TaluDfhJsN0zIfv6Vjlzfiil0to4x3gfjKHWODUdGmMWcx3q9kINkSZGEMMP47vYRIDhxK5FSF7d3kS+srV1Kj0O62a3bGknM6wRQ9jlJ5GDK6R+NE1XRhwZDHqyqyemxSVoTh4QA+A2AH1Vpo3ygiVtT/hGS8q1E5+xJSC8nH+H8UWSWBy7ly+WiV+Dr7RbRzEkLaWB33UM1SEiL/UKr7ypANfpjwi1PWY+2h6GWNaheEUAu8lwcbivsfPitN/d7K4151H5EbY72eR+iR7mqqOqpi4EAyg4gWUhUhCMWW0j9m9wTmoqgZXECc5+2P4+PypCl6HieTF2Y82LxQthcNwiGW6nSYJt/ZOZDN/jVrsIKEs1qX5vgFbX51kVKDeWSqxcGo4X7blcCzCxm5mIJEnH85TnmAioXQp/bIrqq6GU7NNPYzn+pLTtgVaMYPrAiFI62YaxhRe5A02LgwV8HJUlaJH2IyieifFa/cERVEk77yzq5bpTRchRH/qdfS3oLO3Gf3V+gJHIivW31AEa4P+YDkhdU8SDZPC5QqHzVZ+gHJJxbs4MEfz+ZzLK9zOKyLOa+7tDE7zt/x3x5oDG9M+IZYSpEYgE0KekcWTP3jsmRPLMavgqHz6iPO99fG+xA49eFltwc3v2CkRCJQi09kPozZ1vvpShHcqEfl7CjGyTyrai6pSPZnpNxz7hP9kit7esgLmLkNUiv1pCxC2X7KJCKmOhYKDWejQaZbFVxqqDTWw/RoZDERgzLQXwkH9LErwYYxPc+VsV52MHfAfdwQ7XAdpaIutUzUsBcMkWFvsEjbqdAViTZKG6XJJ5wV6oMFJNAgEmyBt6oIjwBfTyZpaQuCI94H/mDo3m/bmDYRQqLbUAmp1nnFMs0PQEJBiGVkNF/PGT9QjtBBVDnFQtICGoZce/xQGLIzQApRTEaw0RDKOhcRACgcBz5AfsMfTmocACHgGo672BWUs5mYPbeFw7fb4J1LB7flmscy6OEk9v26tJt7Zefs+VZaOXsWimtK2Yl9knhbKG0G6SfqPNDuQtUJAOIZH0qpdPRFavGnZ7pV8IIDLMZH/zB/ZMcwYaI4nC4fP5ZaxtL2bkRZB9H2c+FjmplP9NSoVfQacR3iIqb1yjytUQAAWS7tIRYDdoOjumPrJ5RnUY499TGQ4/7Rrl8Np41LFf88lUK+8L+YnrKWdZPu3qf0aN8yzwp5+ZM7+3AV7KVe8ulsra02F0sa2NQc3bFZrqm+/nsv+scJuLHYPcc0d+18A5CyoQSqBXFAG33BVg2v4wLF7TzrlTr0By21qZTI70HVUaX9Mfxila+oJYAZHxkHR/dPQKaTtm0R/eAlW9Oylyu0mwqkFI9jv7DpmyXNbqyuFaItPTRj+bQ0iYnRjcq69/1RnqlTPNhMsV2YAA3hUrlPv7PgpSU7M7BVb15Nr5koDm0qvJtjqVZow31M0MBB7yw78igSlf89dgViQagJ79arUbWhQjjKy/Nm50I1A3mmn3+wcj/RuJqsHTi/UXMOXfinXoh/zJVzp+FHj7gYzycxrtttlsCu43He6e5L7GDsgUFI6J04o12lenB5rDbUERu/c8BW218X/TSgJZEjqNsjfaajfVr+J8q+MJQ6VsBhavyCEMTgGOimuF7PFPtxSYAaZ8ovEkFEkRpOfGn/dB3csJAzQTyW1HE8IGe4NmrcjfrFOicODHume8al6YCQcRk0mdBHoTyMmzVYAhxs7LLiNKGbsjbBygaLI0nmNqcepGGdJLuG7Pa+VzHkWHb4JimLu4ct4MdKTnWKLPfgC3/+YSvbdxrFrtxBGC+bK7XDBsKQi8bJPo7EWPOojC9z9xUKhlqfJN+7VFTqeDPAANPOxIeh6IN+E+uLErv8PWA3nrGgncLLql9kNfbs4xKaHwJddqg7hmTR4Bp8sqAqKkvMtMCFCtEYzVSE42uZCG5O2yrW7/cxjr11jRODGSAR+qu6LWrU9JCdCWQjZtKHXM8evWQkDICgf7r81xpDOCkW44FFwLAogYeoi+JZNTKlCC67c5dvjWxagssCeNHstP3lQ10wjOT0mxA6GBLbV9GK/2dwwUIM3dumVg/0zVcb8gyufJpyo6N6NBAdbd6cE7YqFhG7MRphxq47xCShJpcBJDUGvqpI8mAoiFwrSGJ/pFtIFwVHk1bbvIVOffN+nz/DIXfvl0lnHAP1w+gaSyYVjZi9JdZdYR8plPOKSuocCcbO0Mriz/DlPB3T8xrIfBWpsOUfF7pRt/5rn1e6DzFXP7Gv8fxqSl74BOyeeqdk0D7tixZ8cZcH0lzVo71Vpo4LcCgA3RM2cH5e5idqW/2ZZOTSw+V0o9vvCwtwEueZa4+9zpUVFzLI0UxM1cCnCIEZen9yhhWQlSCNRMPR6OdUg8+S1DDFP4JvUmZhD/Blf+g9tAMF7kuJiq/4NpK2aLIWJ97msY2gzACr3UgSW1r8MEMsgxfb5lLanLk9r2rIQRdtkSFbNYjI7o/Ow/pCs6BIYfBWRejWByRY0qN8nVVWwStP1LiCzi6z6gAq6vatfoIRDlKQhUstc0KiZolD7FNckR4C6n5zZ02rjYdRITH6Sq3c7BnaCmkCKunroMK5y7JZakmIQGp9ydd8ns6m9fuTwd5rnZtR6wwPoN32+NeeufDDKhnDvnr1nINrjxWt6OHycgGVKcHdbjAPu5K0BjD2xc9J79nHrPgLoawIDhzgthBL0iNc2bldpX2oxhBjLCm479ssCmmkQEubpfiqwYfZ8fHjA3PlghpNpx14aEu4S67Conhi1aq0g5ZZfd+8w9l0D/ntvgXN/BdN1jYmvdojVOg/qVRJLoOiy49Zvzc+pJVU1Yx5UovnPTOigqEygN1+Dpl+AVY3bW4xht6sO8Dw3/KLgS7AIbkpJ0FxzsXnPYX79hUHW7BDNUrB6pDqNucENDOMhv1sufpjR5db36l/e+8CBXMNx2BjlT/rV4mrGIlYRz4yuVx5PaB9VmIWs5W/4Bj1RlV96TaGDd3cBQNUehnd3dCQtuVsZ5YIfAf40tl+cf3znzhKQxO1mugo1JJ3+9SMkjcXPGtl6SlGtGQEFJk+kK71bpvZ1SCQRbYCmunTv1oyRklru/ge6u+TJfrZK5QrcraIbN6bB9JhrFeb/QNp4zu6U8MLapq7nmGoYG48XhaqkY2TXOKHyMWqnMqfu1WNBnbtiUPLeltceuA5AIvu14UP5kjDJj4utUw0V4l22kknLDJVexPcODu9BSSmFIb9M073G3K3PMa/iS4gwbNENgWXiLAoVU1Tukurvt7oek3S2QfAe6ZsOtpN51VHU42bRCELfH8bwRplmiUyF023qWhcRDdtyFK0tEaWiC5FQTTA6O5ViafoEJ3VO/KLflv/V4oV0RKt6FBP70FaS82c8rTSJZPDKrhzZtvRTLe4SV/wpzqtdci3VO0U7jKz7VjFkQrbQd9X1y63Mr6oHajTkZLABbaxlRGhzZvlS1lQjJtj3mAbB3hTH4F+smaITjETvbB+fLpg7UqVs9y3dCKZpiRth/IWB6tHPugBlnrOLhETIBbi+44UpBEYml4ZQSj3ZJbnNGE//ucQgsSUTNCRSJ0/We/IfUABKDqG3rrNFUFmNXZEMNDP5snsjDScFRxX/7p9CH6fhKshR84M215pBA2DEjgr4AyOHH/KRz3V2HXbmn0hehyM8SA6diLukHaNvVr1ezeJBJVtk5y+2+qZKb9pGBjMuAGFYkhM77sDUE2/36Vsl9RJ2YU9WrQu3r/e2eUkX6x2N35eswOcUt4Dxo+XP4keONJ8jZ5WNtMU09mxJaPsfKvdnsua5W7jhJgXdpt4CrTIabHNQdVsiHV4ICBu+AnMBZn1u43oPegK0f0YuiNJZW8GE9KaFXf53oZVY0phkd/vayUTGO3Nqwpa1eOaGmF06l5BU39QPEE8As7NYWHqX03N26D5I0+uQtfqsr28QYuphPq3DN82ndrFV3QWZKrFsDGzpOWuAvHIjXb+g3gFx8ZMgDcfA/Ws9RriiMNQWNj6OOHA2nJrx9WElNBBAfo/Bm6oXzoxLpyRB8fXsf66PxYvDpHeaTYG2JKoAoV+pBpHO5J7pmBgJpbPz/LGxBFfStVZeB9HSaIOsvoeN14jTb08jpJfzTVnNJ/wHfJfngcY72l1pJ8f3ePyocJg73NcEUcoPs3ZGpD/WA/NLeF6CQt2Pwx88Hjjpm6E1IMDryvmNprDlMwUqLAGBgkU4ZqoZ42/WyTqhIeXTdNQELeHOLTZ3xKisvYqlS3egQL4pvwWoWmpOCz0D0ViLNuJ1UgSlZ7KVRTQP20a86Nbce+nJGMAY/bVCokndMJdfO1Jqyv4rH1GQBaeJEKSEqn9gKUEDRD191Raqw2jiQk8lHUqk1w26fF+ypTqnRPPY4qDa9N1DmVSMvqiaYIhcpWBMibIXjqlcxfei+jnA6DH/irmKSwbiZ4OhfENUxU4oszUv2Fsk7oSNuzxNbMDmnhR5THJYSqpW+xTHAorPRaX53+lmuVVYTwzKwBGZmegJOyPdkkYBwxycsNvmK4OFem8tnCTPG21pgtm2/RHHE6Cc0wpuE6SittE8UeR2+ChySPxrEgnAm/u770ZyUVY+M2zT9cGRBqIFIF40lbhIrPzjPsCPbnhBt+GSUIylMehW0Tx7uvM70gGB9cxQ0vI+JDH0UDdBJE+CgW5dCV5tjJVGZE+MMH17PROi22MIPQajqApJHt9IXmyraTTC7OwIguSUyh89ovy2XlffHQnh/+eP43J56Ip/ZVxzhseHlvlwIFH7EXc75oGSnvZw8AcQ0EvRZ7Xu7gSHuOBhtqAAhcJU34TReiUUddpHLEvq6i8LRXiNet0yawr1GTIdeaNfvKEbn8mLf7bGgg6tmPpAthu+DNKaTTwGBMuajh6SDFyzdFo5AZ+X80YlwnXSqw+6L4lDtkazt7ix/+Mj1KrBGSt6dVS4KEDq9hQw0rzPMpHRT9tKNZow2051Fi0Lt/yNNAMOJoMaY4agGiclvY/H1pttfvSfz2IuRQdluKpCqAGH+kN8XiSuaD9bWCk7phEXq7plCQ2bgEPCki0NktLaler70lQ3Uj+2uav+eqzS84Tizat5UdaNhNvF7l2r623YV0YKL3m65TMzegIiBQynaR76Ce/DOEkOAZkgGYOSiKGo7PqNS4a8ZSclp08PqUpcXvDI3g+YPLQ/5Ceex6mZU+DQcZl0Rx5OFUs+BjHJaAi8fjzLUV4WXldZmJtNqHRDeh9w88V1G78O/5m6pvhrBCyihkPTGTySGTzXpz31qN6h0zyyzMhds+M8/czq5Apl6OWPbWi5KODTLyC95RlF5pb4G3+mAor/xXDSKXj4msz1QPMZijJ+Q09ou7ADPeo41/EoB0X6aV4O/AIwAQ4tsk73eqh04DH09dT/n3reKZlOo2fQzBEAgAO98xCHJYMog8aX+OAuXVtD/fG18Q8UCd5cSR1kQZuQ+I0/L+rVz6y0hZSyuDB8wGBD80mOd/YapWSHRuBhEnoqDn2AgKztg1fJuZUN7xVdon24ovUBaug8z6RlHeTRaT9enqUjgR47dH2zbaZrT3D96XI2dhEAFpZa0BpMlSnEp7SGPs51bW6QWUKJyr8Ra89SJ7QkLTAWaEfpN1aIrT1/c7SBiYMhsuXpfg7/9vMxgC1rT+uxJlu76ewgaDQ0D7/PpHJW3vJaoeklKEyP9/ZFOCiQbXTojsRwzi4Jmrm1kKeSfvTpOlPEGeF0U+DrcNSVV7JKepSmocE+Nehp3Kl80+6cZ/+Kp2fbwr+VPE29wQjDInT/hZXbXX0GMX71cLO4q8q4ZajUcJxlzT3aKx+x96hHDaQVnGGFHVPj8Qcu0y75KlHzGvv+y+44JIBG6BhOyEZUmVAn6b9dwbZMBNPgtvfjLZH7xeDfgM8VKD8DmLwAvGSMs3ybNwgh3CmbA/a0AuaNtx8xya0eBnsGmNci/YHtgW2Lw4ois0jenDnEzIIUKQUJYQBTJYbz0Cr5xxAlhDA1YO/3seV8abv9iQiNVV7eT1k9TEEZ3XwJSn2xsXPz2pWaDaTT0jJ1e/mMBPt5JEyTPm6MzpL3715nGQWqBEpJhq3BhpgZdonxPD/E3bRQqjq2Q4OooKjXrDsJvFxn6MnRrp6QPNt0c2E7vbPOUsvNuUhzr8ps5JHs5LEPsPnuhXGX+Nyh+saBRbn9lbbFLewjJgbg3NxDgcB9uX49iMfYvQ76jqJu0QvZfgPlAtpsmvurlSfeXZ/2+xME6/3AOx4qX4kLUpNFND/m2bDIDlwTnPsTpT8wkYlCA3bKZDlIs2zgVctJKWqYN44iAb8Eg74nEn+K/juNvm/B/+tGvrM0mjULZhEyZPdWiW9fqlpH3oQzCRN0msSd8NPK8r0KxyMSAQtQjYqT4xoTgXoIZhiBS6AJjqU8u4lR5Sac9YfidZqOdbL90YJC7Ugo2jvOnN52bt669ej7G0HE8+s6Rrq7ViiATNzXKE6jowWoGpgD4G2wFiKrnc9W1UilWJjGYZrvLkwHL2cC6s4UC7f10Sfp2P5TF/Kow6Yf0JMMqPQgqCmeGabcpY5EfQSNOLeY6pMYoIBMavLWacF+vbrWXXpJSngc/nUtnPKkWfFh+DDut/GNMpM+VpiWAzohXriFMVpkbYiQhdSNkEQ59ztwJxZphG61b67LllLJDkbLaZxWPxKzY/fXkaYAr1eTQMdKgKIuQ7NPwrCTwEOfPQjeth5z7MaPBujFCrV4+x58yURoYB+Ap/tvZyAGLFfmry80gK+EXZN6hYp/u6a9f1cGzK+UBlXUmqCo7Iat4cLWrmLm0zTGOm+N/ib2ViIXMyPIQtMS8F/zYUHNe68OelNt3u/8vC86cc0fRMQNE9CU//9YviHbP0QfJkgxPvqNOiAHYoHcAv2tEO+eiK+x8HVQZEQNH8T1Tbb2MZ10bPL8osbrKMnUINvd9d2zq0lwpSkzAsxgZPTSnJfl3dP2nB+l2DmUwe3x5z2W46hSLwV8snZMx72JHz36d/s/y4ntorcR0g8GgvGEA4QkzU2n71Oursi8G+H3Tj61eYpH3wsAbX3QSE08lwVKNbYGdWxB2LAJypPE4EK7o0iQUncWADiDMQMp5eRoIeoGtAuSwMn2vDuVDdpzUMvmR4BlAkSFzLfZ86spQTlWicFWwpnsPAnx/qYompzJ2wnSVQjEjsC1NKN/3B5ELNnuqEu+xLjpXAvx+4Kg0xLh89F7izXAIn1PBI5u/jYWo0zExfDwJcH7/i8UYS8GKRgPgMcQg/SKGLlEzqEYmkJ+BhBWE6JfWcStFVAbIEZZWoeVKu1eBXuDS+hdXrOC8LkvVi8bud5dpCQ4KoCCnnzczGNb2g7PK47hTuQdEFBB6UvxZE3MLR2DcxlFlQIwjrFfXyACfZIZPPI7fFQUfyt0cS2t6QoKE+rRR3iENFdWc34aKJd9AG9nAPYoZRhG+9q+PgZAv8xyDbXC7ooP7V73I4xpfzy3kMZn3NJF+GwuNNT3lYnSDOXHJjaaK/40PRQrMpKJQ3hjcJxmMIJcQHFPBAqZ3bhCC8v4O0KTB/vSZ/4LQcyjU27cs5MqESvPhHAZsHLsSB3BYBF4SbX2iP53w6n+qBWxihl3NhS1DctggdM+ALn/5qVRE/OCqvAo4hL2lj+JHIBGcf9svHD/Legagz9THNm9IHQnPOKZPm0bJh1UbqEVRs3af7iDkjWVHUQyCcc/aQAakuNhUvGerNkzUHj1xpIVVwhS+DwK9L/T7EQaJPHE3OU1l4nAaEYbFm4DQi7h4xssLBYgojVfknJdsTSERb79P+pp330/sdvbnFHrvIYWZvDQWauCbO5OIph5pDJ2QeYWdXn2RWSuZ6ynYN17pqACjAm/fNaev8E4XjY4jHJhucAOhMWRiI1qkAYalHQlXby5sjUsQ2PUzjE0I60Oz3KbboRSEBOiqny2lwpjQ05x/X3jgj0vJdiiBn9OkjmTeVNjYA1jfrhcsWyjN579UdHnSGM3w9v6vIG+lVSsILqS1mgTYfCKfwCBZn2bqwYQuH8WoilxckDUzpsiyxz6atxMgMb446T7ouLT0YSUBFTWwiIdY40AUxXFU1RmwN0fwHSEyAkSgDjHqbhyRyp9K+fbH1lkdtTbnZtgzHX2yQJhESkRHQxPgxV4O+3PPfw1IygVdN8Qs05/oRN/vjZ/Zu0Vw/ysI7iLICLUJ2B/Qw408HtCYSYZYEkAqICcie5f3ntFcqJVC03R9mHRm3KnXvj2SIZqIH/rIp3db4aMWyrk7ExTlyBBiV+zfueZ18FmVAHZ/XwyeejtvDpnn+a4OwIDPCJWiUMOvu16Vq9VLLrKNqv9yZR/7YWc0zl/4OxLNul0mdDD6aDLKPWolE6O3bXLOCoQ4irQwjDxUjfU9q5TEsGpqHWpf4fW0TM4U5QIkhaboW7ZzyEbduVE4RD9Jeg8wAOj/8RmExgUhnfus7GBjQUuZJNjEyVmo08VdBaaSbLG5TIeLrCHmcHoJoWH/eho1C13HfvS5WdJqF4Vjleje6tkj3LJmERsUqxpfSSlWT2IFiaxkua7zf2zRRg/iMRBnjyAx/taKWJG46kdKLhI+wRwbdBjGQ0ppqBUYJsA0mPOH5raDS9DzFgUwvKobLryfd8eVnRpFjitUnS3Z5buJJWtMsxsKLBkgH5ndi5t/lW9YukcrWQIYa+aWdZq2KcAwtHhixe9HnffWpTJkWXv1svU4QM2h19SXBexD/ytIASj3TJyj705C/9pPM8KLojRVlWyKJ7UNFMERonCwhCSp87+cHKOi+/abdCM9l7vWiyIERpnaB4kh7QXet88Wfe92e5wJO06ibJeHuG7xPKTdzabp/trTExiRvBKlcR92ORefgWL0/W81H6t5hn3gfWvGGU9quGCkWZnsC9QK0433hBMRHij9ZW9qhP42V7ImrM8FRQdg6XzIH5uOxdAogt8Pdckn1DL0tHLHcnhsfm3bfG/ZJqh/aliSdAjtUmv3xqoRoP8ODWLslrPkeVwhd0u0QyOIHmBjfn+t8Ppl11FfP4Sd+SonBfHDqwzJ2TI5u9MLki5lieBPeH6hybyosG9mKXGNX+HKFpvpqEfCdXhvawZt8VemiFJkZax10snOxYb81P9Npk+VF9R1IUCLAy2r+E2aVMkRc6qUckWwxs3x7I8w770qBbpZ3pbMkwbEF1ycYFbimsJ7pzn1Wxmg2ycpaS3u88sztpoAGRXE4dauEv7PgSXAAGFM0mHTAafHUaG2XmOJ8k958KB3ztgADvIudJ72WbTnuWamfC0cpr6BPzBdZlKvcBEO9JVjx9/WeGi8+VbvSK2aXkl6Hnak1sYouiRQyglURxowNsStYtR1z05lvXCFblCasLmmqZAEHDGi/3nK9fP778CS/o0q47B/wwuRTgAo6R4YsCpi7hYTGOROjn7+jLkSgiT4E71Umy9WWOy4JFH8HuZzovbWBgZ06BKPv3ng6FSJ7HcSgSPd/IeheQZfpNT4TIbPfCLubJI+ruDPFzVx51dfs6NQVKPaR2zpHX5LDpODJqv59i3VbrvgyYXN38kx2X8OFka2TQDDkD2kPOM3FJYBYbXHrYfW8mY1uKl1MF5gYvdm9sj85BxHsI6AhsFfkm28KXChC1Mg48JjEoqEw2g5HmU2nETrl4hImog8rwfx0eoLsqJB8XlPpPRmvS3v3QofRUk5AiEBYNgZsak9UfHCS6SzwXoBF27g4zrdrnS+c1sz8HrwnzkP+8L58ElcRhs1OzbGzt/T566SHx1XRwyYh9gabk63iDUFQkpVWC/ecJMsSMbs7J20i4x8UJP+9gG2pPbs1SEj3MRoBsJxmdfRWVx8gjjOkqWo4JG19P1pAmYsYuCz8LeSmGWZ9hJ2x/ieh1JDClvlhkV9H3soUwbA9ZbA5M3P1e8X1FiddbtWHRRuaujxCYW/pxnjzcIa626h85cBwxdqnJAyQllk/1+pQzXnvl3K9MbC9AheASaPGrE0s3G3XXDQD/WJZm5z1YGkGxzV050ZKKSwK6Kq8SQuFTjn7IXyN6AAoeJLPZUIzuN5QlcT7rYyCHDjgyZb/4zUzXyULVc9ApnqBM95aPuswcT3P4zIftvxjuooebwIhfUJQp13ikARcISGTup598cllpgZV0qpA+4ebVwKYf+4654B/fuCsiBezKPvI6kD7Xfncki5OYR9fYzVoMO8/DWEOAuNhQC2OH4S788hnz23NLSf99gJFjezPXR4L48l54hfMxwkLD/5DOeADteT28IYE42CruHbexOPoKHyfKHjHhVRv+SGfbQZxnwzLkWIoinFMtn370arVBqJxRVuKhAupx+Mt9FPAVljWpc5N4brYv4nDxe/xdvnN4Od30fWCJ4N41m4kWirki0MNgk7NrGMD/6pDKYMBNs57N3NLeHJZgmvilgP+HWhW681+OLE65Nm6ILxBtJXLwULvDNc+PPjzwy7KGPhLDYqq/4g6pE0MNMI5ma3Sxq1Pfxu0QgEjcaUHx16goGqgofgRVd/Gv+y5XpKDAb9rSXtVIezBBarXC+IpdjzPSBKZjhLw6g2tUhd4oAPL3PwpfcG/Iok0C+akgsBbLtZDakG3fqyomuDisMBMqeZ4D8gYY0tkEuZkYsyNAGB+MFqwRVdEA66NJKJtQ05I+5gEw5aW39i1db8q2Mxx01yc5paD4WMg7a5ZA0hMw2Z+XnrtTiXI2CW6DTm8+ajoajDPv47blnJHDYC9BQT+AdxZ8E5giIx+3s5D938sqBdsZv5ZslG25pBn5/AJ6z1pYtdAVlwLKBoHub2uGxiJFbEngAS/D5ShWFWQImYHMVlxZtu1mygGIWYY1Ie94j1w1LChyTGWAQxzB+CQPIqymWsiRbRKrrwhdm6zyUZ12/19mw5sDOF4qPzSzig3w/UetAUqpEK/33mJvl8tmhhN0eu8VYrsCDPZ8bNOUqmMM+YGm5nMkaWMYAB2CZr4w4lBMG6gtTsL1C+fSbxkd1MCRW29zBs63g9hHTzeekBFukPfw2DBDX58rwLpnw+PL7K1RSXqzcpKQhfFMzD2ReS12X8IMzsMT1Jta8V+CRr/nh0Y9cCQlN+cUjRewuZzrrrIoOgzli4bRrr5VoZBvBzRVSNtlwkodSZQi4wrXMmXcBk1p33jfagrxuCjCiVooksKvolItcZXJcJ7DuKwyKlBOmOmmTDU4bWuWc/q8vWtL4zmR+ri+RnRcxBTqWqYi87eW3NmF+pyIAABRRuLTLWLjD7BBsUPk9Xg1etK3n3xhLB5fnnWYpUkzEOzLmczs4cPQ9e00rOE68Nes5FGna+8GMEs6vBagpa3VfqBJwTc2CifPZ8+wX8fgcus8CV50sTt43ISFimvGRN5blURwtvtRiFAdykZpBJB+lRTRKG6jHX3qysHRF7VRzKnoGNWpuWgXJlRvLGV4Mn6Q0Vaw7UwS5VX2alTIr+et8elOdaXztrpOuMqTiIaEOhDSk3MKIQlZIrX8oHCeyLYWN832ajEPIYFPQCHRCRR5w2Bo470S04c6SHE28UKoXO16FNdlz9Tvp8n3d2fwa2JtKNhZvDAjZ1xPdMjAJh9MjiqOuQkI7GDBBb7pT7n9WvXfsqA8r1hLWcuQorFUjGmYdz+gPo7i3BUuv1PqgNu+uCWJeHP/r+VJCOFLxRll41Uz3x6njpoMWpjOnCFwcYDSrwUwQFNiZdgeyawOj0chB5td04/zQ3mvgZqQFMT0N+PV92EBNW1fmJo0XyRKaFvugayQjrYwt1HNf1NjHDRRAfd5CmX5XcEgrLOtd+lbMGhjSzwc90KbI2+PZIqZa6REpLf7+VA/e0iVjRR8ENh92nuQuS5Jg03u2roHYSxj5aQsCc5owyMKVCwihqRHCmlyLH+W3nuZhk6s9+gqFH3LJCYdBfYy3DJdCjE24bHFYZLYh6X6pQqUO/B/IWPM4s5xUwOD0sNb199TIPVFqZJ1y/ReYXQ5eYvs793F8ORbr4o4Eb6Gv3oJ/UW9qHIKx6qylm40OtFbamIm6fftI4OMkrFwtUg1ujXokhHnYQ+3tsqyJc2MYv7yzr2hNDUqccls3qsQ6aQgpwFj58uCWNNRVZJC25AWu3DBkHQ8ZCzM1urX19ovnEC59Wa2i5upwm6xx4kmvwqclu2+97mgtgrlu5itMBtnqcj37/6ILMaVPjABp0av1wskXTj77F3Rwsd0buet0Gh+cLBTVM7r5rpcq1+qWQQfAxgC9NGPYjFGnR4LabhH4Gtd+5S022NyMgzukkiskcEgiiDxhVl0FSp2LzZNRJq3D/zsL+ikjWXW5cwGdZTOH1s7+NFUkeDYiN7g/3SayYzjnu6WKGFiRdEu3ytFIa+UFg84EiwsJCTIUV5roLJxVXMZlGtCYNmbiPWdnFpMSUkUMdkGq8ToSNO4N3ktv5iOFffKYuhljpaxAnSSM5jugiEUHQFyZ51CfPnKPQFGrFReQ1IcpRmZROCwxxyQj9qeWxwBdNhJ8U0r8762dy7F2kOwnXrfIPOT6QeEbZsnqnWTjwW9Yb50F8iUeT2KsC+/PP7GxLT281o0Efcjmo8DIKOywBP1Ck6O/kK4ex8UuMu4Kme9V3dHkQTlLrAUD0OAlwEfHWbZDwHKcSEudUojqs4qN4gtwXVFbYCgYtLN2yvC+zp9j22kzz8UBKbEPajupOlWoeL3GRurfgg2xQC4D23hLM4hR/UkgISLwMEcECM/cNFEgtJ/j873+l/uE9X6IC53KZ+ES/KgvMVK2YRHt8kiID08naWqmb6lrfgAWuw0nytsfAMsqNU4xHKbQsz8LIgZouOc2o0CTmyEq2JAJl1KdOai3gF9zJQweMguz6giESZalJa29ffsoFdyre+TC91sBYhr8b0Jm85hWvKgbyZBHOxp1G/SROUbFvg71fLL4h2iyS1c6V9F1oEXNarUe69iBulHAI6sB1bRakBVoB3IN3KZyjKeYVJynU5y49XYwEMVCZnMcseKGtnd0x+AyBlLSiQOT1k2to1pHS+dlW2XQ/7oQEdfsST3oybMZCWpJtwJMuPG1VusQ63fnlUJBvPx7QvLZKt4qbmN1bnRCvF3SDxV5k/uoFcCl1zcMhpX7Qwlxu5ZkURZbPUiAYsfTNN+6JlglrTQtbsprO9ZDVS/t2wiBpK8q+YJlWpzCXYWBFiqi8W2X2a5PAsIuBw3BJaN04IcwwAypt1EI6hiuU0nQpj183VdYxFfrA2SOG0HBkzh8iEGuUDPFObUAcEsvwzUXqgB3lfskaYvARZiwJs3kMx32TfBiGsfDgp+gXYw+taJBXFmAhe4ErkZRE7oMa989uhj0cZqwbVamL46hyXzYxLpk7Ku1BNYVJpTtt92GdfpMMjOdJm9P+sKlTxzOczXgIg/+BH+R8oZk1qtcpt9isPwkcUV46fzmGSkCyyI03FuoVkIHunHNMv8urEylbElm4JNriEkDgLopKuN2cKXVNuwbK9CCOo9OgWycl2a9MrtEUS00Yo+keOd3rVmL63fEm4BLu7ivYkjmr6U2ZwsXw52JrEY/HFiq9yT3xl5yQtj96s8OU/Hz/krsKtyY9lOqhW42FFy31LOCH421ct7HTkKjyRmO7jdf/pLOlXIxDHgUDyU00cvgu/7EAIOMZ9JcWlAGBo7fz6vhHY40oaYEBBRd1uUn7eQc8bgVRjLxjaYiheyNZObHg6hVJoqSdEN5C8klON0UN6C6J8EPFAvmq7L9wkn/ezBVwyRVwFGCUVx17a7zR5549lyug6YiDsW67BVesC8ebb5BekhObXzhQ3XHmKo+9Pb3uZMEEMk7mK1d6iGRA5ihgYoYbG2DvL93KuGn6JX12pcuPmWT5WX+JP69N2XM/CrBqktvPBwwiGLA8hDMtH2CRez4cCsVHMl47KzCKYoV1600rx7cWOo9WpQhPz+Y4Jbs8MRcfcwJExRIBWXVMxvjfm0CzeOdKzaWwwFgrwcO2KI3SR9rLw0w+0lOqUOoPhaYEo1Dc1JiCTIQDl2/PbtZeXouZrs3U2jMvNuGRI9zXC5HkSwd5lNK/vvmPBcLaNzKEaeRxTys/UHrt3UUxst4M8FyzOZ5hHOk+YmS362TSimniqWZdxSivlD8QrBt6MQAJckZnROqbdNBxNAqB40S7ERgYwel6yYZku/ACx7S4S7+OEqIw/Oizdtoba2xndivYkTT1bEezceymrljMXB+j6tTdFGyeKZFQSFAveVlzUy9Ll00/dwnQ/vH+mphKA8NlAozFhDz6M8PifNiblJUTAOSb4yccljHmYtDa6FaA1kWPf6e/A6pMRKAfrfvNcJX+PY/5oYZUOexDRes6nO2L+ROVnB9bZTRUqrBO3O0L9BHggpdN0AnQjjJk2oBhkOgnc5fsA5AaLtZsihw4cMn05IN/k2Bas7hGMSlv5GC9D9Bcv0wjmiRSCFlYNY8Yb/SHzzo2PxDU1EXGTS5i03SOsvEYxj5H0/Db66G5Doh52KJhFCIUz2LEYCi/eifdMRqYmE6aGU9fTiHf7rUhHpNJ0JnTruZqS6SaZZkdDsVxRi/57D3siFWD5SRquWXMtJQQRfF5gxD8Ololigp4JohIDDTzHeNm1iOw/6YqcwcmaXcr2Jy5qT7Exo1lBr+YxNhp9UrWnML6hqSe2LBL9vUKBB7N1kP4SMW+BpFsSN1MW58suolOn0zhtGHr/B4Vw2cZ8zNwHwYktjcYle3/nlykBYjhrfeuXcZQ8nUcNEK6lAppYOAz8sJQVmKzCeWkqGcpAaK2H51TVQkF/qnXhh5OaKa5/qkl8DKdM7zaGJmweT1Qjdbt5UjYX5DA3lzGBPZNKXnQbuLYVw4WCp5dDhoHImSv0FfWjL/NQd4EaaecbVbGaGcoumuR74p1icGgjfDkqs0sETbhDTfSOLQu6RLv1B9yBrDoNOc0798AGaBfSXVgQH4sPhF5sg/UtPkIbLl2hP+YxT72iy2Oznj0DNELJmY3q13ZT3F8bx9bUsZyQvFTQgvdPjFGeArAdSs6TMEKp99DEyxQsN3SQxjLimWyjBykH2h3VsHcOY+5tNpMbAD6nMjQtp7TycJkY2EpLA0oDO2hK3hxtVzFWXHQVkQGVDRivN2A8iWKey4iskh4GfnMZhiHseWWeq/KTMPHYZvA/3i8Da1nKhahtMgMZvwLoyaVZei5uB9TFVZvYdUNvNlvRmVeb+ocL5xO1N1QCIxY+hjJhRmGTLnUhGmRgOEFI5VWvwychoqD07tvAf5+/ozyow/uOdM6eRiHr+yZzobV3glqWhUq9CQO3Fx+P9s17iGspNXOO9TdkdiZdNp/jWTxkKvJdm1QWWan9OW43VC6/JnuUK9NrtRj2dLubUsQikfcKwS9vLZ8urnHKPWQLOS3Aye0Q/vjNwK4IqYDdXXsRTDWnimFac4opwTMZ5pTJACOK7l+m3ZJHDwjYv1B9ZLsPYgYGNQlQlF0EEroXljQoM/eNbxkQfTu2OWRml7TMZ3KtKWgq0qQQXdCKRQa3WHUH3luSEB65NWFbXVdWFdWmPUadJC5AA/yChtTVtFp0pUzUzWHBSZ+RlF6FLiW34dUzYPCMl+2HkcticB5vMLjxalb8Ru1lDT8HTJtjmIqTvwCGdF3KOyaqT/3V/BvIM35clzit0Qct6sFfZwynm28PVlBi0q812YJ3UiQsljcxzA2i3HWubQM03Up9GFM28PbgeVnB6ASM11uGOI4Eal1ZtW2b75/NupXme6fjdJz3NW+VHCsqYRBFjtAcRXHTuWA1hibhH6N/fI0Myg9X6A6zj6k2J5JcP1jKAIIlhAzch8COQvIXDsESz0Mg86TdwpUOe61rt9YNWaywQdCTn1dST/YCb2udIiq33OruuVshAffUrPlxM+PnCpnZsKO53pCtsGHWWNjWykTnwZBtGzz0fk+m+T7UT4WCQQQU3ikaVVhbTtptGNZSsZXpxB+ZUoKM3Bh4Y9pRUcInqLLy4duJy15+lEncYVUCMCOw5Ra8b2AF0jB7KBN/5QrRAYCvjEh1DKP40omAXoaRQvVaWmPjFBz1jcOieh4jqr50P501dc7CbeMZyeMtWxz6m9yHEJk32KGC611KcRYMmepxm0eCkpWBlhvqaHSIAs/Q3/gI8yWGOTlnegdJoZJS3AUtWEOFuo7OCY1EvIncuYC8kzNLhpJblVB1zccg7fJ4BW8a7uZ++lrO1ICXZLFyYV9EaYyhD103hDMGWpOgxn47CRNFLim5lQY7+Zd3/VBN5RG7afYQ8nzEaW0rMqJx71dpKqrnJxUAnRz15cw8vHhsNVrIE0cG7YsDW4qYVJSUPjwjaTQFSfhNqa/yErsg1RUq9qBdk2C/Afv5JDrJoGFDeZWwvjphfinWPTSpHDEy79McrL2KZvTvSwpTbuhVpc0uX5rhRyKUjmr1QlnHDA+umfV4mfptZtps3gioIKEujguwPWMq7AepAGwZ4AwlZ0hcOYxmzzApwN9PkIxrm+AGjHxpjwxQ7pqpXGkKecSQezaWjQAxn6tYAESJiLynJ7YgQrrtN/dewRad9MfIwkchix7pcUI5qHLN5HjUJfrqSDQ1oougoscfJbuaPgj6UCWszJCNB9pYKn24q9HDo3i3XaQh5E8/mGsHYAexlXsqoDPWiMwFs7LPKlK287TXVCbo5zt2ogGO6hnkVdfl5UUZcz1ZT+ZDCXIrPy+s2PheeqqGb3SL79EHTQ4wXOia9HdCXUtmKeia6B/cMz6O+cDEU298iLMjpH1KuE+z37Tj8QHOWaeACvaU0TutKa35LXsWh3+M307/GBetdZdVSzYojdjR+QiX0Ig8aWCf8YH/GKh04GzmfPpC5p4mZUJOa2gm2dXD1AR7Va1sVE79b3FWC7UIjYu6h7AClF8wu2iVULoDcmzPuw6fLFcIi+njEBy2Lt/rr2mCzcTWQ7x4zuzChGPJauUnnV0vXu6KwoCBAjUl7fEmHajBVeIA0fxRjj18mBn5kT8FsCwx7aCFnqBI/r/gxe/Q3hTBoHyGJQCzUYSeUaXHYq16JT71iOVRsrcKCEx44C0WsEwqjOC+UrpQtXRjqpiGBIWQjmi8NU52wpKgYW9XDW55lJV/1s1jnIqDg6t9YDNyUj1xwyg2tyOpcWoNetiwF7sHYW/S2G77ixkauhv7SvkzD3Zn7VccA+IebOhUmcQ0r3PwZUw1idMwMbDlCg01IoSGzKyXWUYkxiPX1idDLpwb/iq8bfZxMknRVx/mUVbQ5lxJW07nVwxkVvfIUBOCIqXtkor++THAlBIpj21wBjjeLDRr1hvxwS9WvG5Pofs7h3p/VqIIX5ZYiMfVHQMBw0vLdlGDn7gwr3XJ6eS422u1r1HDk9NxCmsWjnx2bp1ZtsMvgy6Qla92wU8alRNPNZcLIhItiIK9GqiJQfQZYPTGx5X3UCgxCm7gqxXTwbejbaIeTs/U5IJJyryLU+gb2eXR8G7TkcZo+m/1rnGplzPIqDMhPkN81U23ts7+I5xR85YlpdGibUWIqqVIZ2vahk9lUvjpAHg756ZBopOe7rvwBwbxEEvgbGyP9EgQJoJvQ4kfFiWfAwqcJyb0187blPR3CHvUNj0UCpf8jWFZMjqjB4MrHf4NeRVIRUwBtYnsmGj72WfUlKiN6SiPRFOkAAG6OStiIGPvUtWrMCIYTkJgyc/tUSZGgjmgBP4Me29eX2jb4m+y8vETfDxaTWf7Rwo32nIljBSbjHS+gD04MBQHITySVTx0k0DMfHXSQy5jq2ghrDsWRRL9GFzwCkzvmzRbai3l+kwB4W1tuTw7KS/AM2/eyukVfuVBrbuUgQXjkeTQF3Wq/3SUnHyi0YG+dT9M0Mnxlq0O2rUN/YV97WSfpv1iBS8qJSWXJ/RomXYV6zAqD75+SSfbFZOcwFRybhtU+o/8ITLCYEh1Lx2ElIJqPH/5HnsNs4r9uCT7/q4CeD2vMVwYfuycHSUelOmdW4tXx5sVwoeqa8eK6QrTU42f3C5GwaSzFt8lSq8HxdDA8EbPPdquarAcA5kC8gAS0A30dOABpG0FGT45wxk1Co5lClmwaaNtKVuoBPx47GI9jqwybJ2iicpIIQyVGOvxOighKvDIa0YtIZZCfh7aldntCvM0rlVZm11aj9xpAHrwOW98aa8XPdhRYjKhtp9LGwdCQpSw/5qHxgRAGztXbybmMlCmj/FCd2yZYLz2X5cQPGJBnTfrZ0R4D5dM8RJZEZnTiwycvKD+eIs4/UIdRCtpnQd3q4O80Fo0lcqvrHsjhrbKtMfI96nRxs5zRPdonFVYQbxSwlK4HQbYnSxnNrC5X212pZi7XRlYFYxtDhqrCvl+fge0vZulsV/jq/X6Qsg7EMt44ch1Z1V/l3R7WsrWa2k43+CZYUYY+0zXLxjr6glIlx0hxgu8Qvosf1Ov9kMqVp+VDIHi3ZWmEPjSMK8OXhdR+WpPLliPT372947kJoZqxGTZWMEnPnW1eeg6V3LYCIEqc6pOPsJYVEqzM/eACQK0MxiHof8Ohn7obTcPqQXChIYlV0g1b9zfGasOUdPqeoI/dC8cCe4Z2LjcB4m1mercIQkKYycr9cWzwk+yXnIyPGiA7V0eC+WbFIbRpwAFwsE8ym25rznRN/OQ0azEg9xqRuGSilyxv5KL5ckwkutZZdyqhs0gAKcGNHXFwtJshL272+7WL68OMtMKLoc7WlC5q5DETbpn7LCipB5ubq8quzf4OrWr84kTN47WbNR0+B82N8H7FLY/zkndZrineJglmkWAwwoOgUVT3cT9cRQ+HlQDqulNa8q9oWh8yHVptkXqfyHRZbt9M/B/y+oS4+u+iGD+lwjbAhZMxS/20Grh0etqSYTfjZytT3EDvB4d2+n0wg7A1lMSeJurLi4bfNSfwcuYEHbo9u9qo/DIZ7zz6rhNoKD/m4HzVwTRih4oR86/BR26sNMjB7LUlx2ctIcHhBTrxxAe4cKYdgDqhGJXLHsnvnKk6w6QTtAHuT2YZK25ywTsIgDH+hFe59PBcG6+fuzDCh2kfDqFVqgH+wMaXWj+ul4rwiz2dSSJNsnP78pBUZ6l/RZTxQlA2tUlg5zTJI3QhZxE6ZheefOa7+EuTywsjrd5aoFg4EgcKux6Vb/87WmaljgIuPQUWsrFnVjuXpkR4ngwJaCMqRsh2u8cZhhAftSqqwqtspi5GRYScmL0C0eL+UNcNLtD8slFv61c6saLBSHltQMgfsRFM4HTQhVDkIUPR6ewR19JblVSdKpejGPW3myamV4Mpc8H14qcE2RxUDWg4OaEQ0CKd1dRKc5rzIreY9WFVoH+JuhajwXXPVFKm7MEpTD00FMZ+ALhUMO0XzHE3lYjQVkYUCZq/aGuTcC4NcaGxwlxVm4sQI2PrJ0nb8Zmb+IlZWb8HWW4nkYuIIZiJsbC9SfTnS1OlPmhmr2aXRdilkkEkAA1a4QoyJs5Uq5c0wE9UramsgQ6iCnof6E+SudkrbF2G/lCpMyWOaNR7iCM2WpcRK4I/+b8bRhxRqgrxNqBqXUpZ3wfvM7rjzqj5Pw59BqVuVXuxAi57AUQwSAbIL28EYjxbRhFxaO6S0vsWWs99SJ43lfd3I9/NNIYhfjVvmzGyQf+4b/KYjp7/GfEY9EZMQ7L33pMd2IA/v+ntRHJ+MklmwdMS4ndcyMS92NEFE6BQstvK2k9Zn7awJJmOp+gVcylN48qv0953UWv2WLXR47rHg4iSs11RALtnC6KiDSi5JPhtP0W3keAlqmOr12Sfk3QB0xzSEj1W0/XabY4r1H577TOERRMmD/dA0nirtCOWbOy6Ow37/6hA3BrqdeC2RP7sbL9iNI0QTTQZxOe3oF0+lnrBe02g7dV/9/iU+6MjFhs1bKhc6gcOP3o/BzKiiR5mgGNivR8iEpPwCzbITSRsYuANvAkn/vFT8VG0muyLfRX5pYWFt0lYa5SzPX9G64A9+aCxMk6UPzFncS/0vO8zX3aIXpNvjEn6L27vifnN93oCvNbisOYDFGJ9bDlwpqO32owMDclK2r+qOeZrM7mbbxrQKjvHtfFRL75L2hUjTIzmYcrxJzkAHkOrLDNF3Tkrhn4DW/rJlgP8ijiRM6X+ziSMaq4DX/T6b0ozeExveWgml9kbEz8IBVstq71dv6QAPbpPLzKh7ie+LNPRCjwH1pkzXrxm7sq/F3vHEBe/YOb/0+m6qMhHX0EHgO4Fl07H7WGyfnCK8UyyYud95ZlE0tcCJpIupx2sj0jxRpkEd8jf2qEnzWMRjUd94AoeA1AddP4AZaJf4AVbiS/9mXkZAuZ3Eefg0Pnx7FHjLLml+fztSviBJCRe51U79Cl3OWdX0mqNvGTx3ABYn2RWA+NW6XffNKSFu3jr1ZfuJfw3DNePR0zWeKQ0ARBX4C6fzpN+9NCgrk41hGkqNsXf2e7LEbhhL3ZLdaR5CHfitleN3IBu2wH/vMEL0WZOi5UJ5zmf3xT6WgJyut4pQyVEoW41a8o3ZKRu6x3gW4v5GJDWZ6fItZe+VPlb6FPUtoaBBsqKBy1TVTRo4c7IHuHQSDVrwuJ0y3/jrzeLUNXIFKap1jUQdZzahDhVJdiTeiMydE9Cf31lNugybvWLqzkAnC1Up1CneK4kEmf+rCOPF5K/lHf012jheHIVrNrCLgxsUi0WO4XKS/zzMuJRazY01J4eWlVve1wvklLrdwIgcBKqIBau9CZJVNJ1PFpr1/o3nj6ItH8JZks3QcFGeegLQkAEyKRIqgoHOyn7RxKfzrCSmB4qxzVbbIBZAoT4w6BeIq9lSG0G2OZNxfLYM6XddxwVTZ797tS3Q/WnowlaA97wcnlomCCpry1HkpSU+sC6bTT3TIoIVhvpsaR9U/CbuV2aAGwryP9hfJ7ytMfamIV05DPvD1F4yn1FUlVwTjWTI66BEL3fIjZwcZUY0+uI2x6y/djUZKv/gQORQqHxMN0bcM/WxttN+1gAi2hXFyPO3l1B2Kjb7fonyDLAJr6emUNojTl6+X4nhLYfFVpytZWyfk3TNB8gWzyeg+IU4dGuW5bESgInFkjHPIxWUIKl4hlIENw8P8rHJ9Lky+VaM+eakI0EJ0BrzCSF/2tL2jbRIzEUMIH06wQmKLz2ahKc+ueGgD56pm/lV7ngwkz4AoWvRVDUTYkCirCBuU73anew7olLAUAlnDoaW/Mlpb/ciQ8eyj2gDxKXvd81b/YEuObzMyxXiXKQsi1Pz8FGz19KStE220tCcQqI0Do0Mg+6/okayjFHeCWCEr/3LjILCCcsCJmCIe4EdoD02ALolB47dfXPgUIrMCCntoaEBzj1u6VvC0gvQGsaELKy02AfSvGNReZHG8TfGK0NeOS/ioQZTS2zp0P9CFVAcuv4ST4QxBG9OoAbiO1tMa3oVs9SHfABaENzOl4fuPIeFA6nYImRINWEodrIule12E1jorFlzrchD7m9jalxzhAGiTO2DSJ3L42fk1WHYfQDndJTsRrdlK23sQSkxmpvBdRj5QerfddjVg4ib0xsPzIZFKdK74pBRq/hFpHVxWGlHewuxst+TGkIfeaZTrf7Q02J7vlychjmGQtRF6y6BAmbYr1Z7eWMcsxUDg0T5zFcEK+tiPTTdjlnvl9eguu10K33vPTqfWI5A0NiPqmzxjcX8aGVFJMU1d2Nax4OwnZU1v6EiT+Svb9xcP82hCV8J3+hXl0huzkqrvzdfjWNbTd4APlCklyllhkV0IKV9BbPcv/MvtLFQaQYIxiOMAV6BAubwUhsFM/8yV+WujEJ2/y7k0Ehb1t7AgfpkeZ9mgB+qgQeasy7KrRnwbewMM+dpdkJ95RBcITvpTpZudOMHQgpU4mxQ6H+6P2AQpB1qmoU45ayY3BIkJQaEN4YLMg6TCqb5VaGq8VDTTStGDNmP/fbtmn5ly/t3ikwdEeFYK8d2ipZI9GEHRwgSR7JwWli4j2MUWOeV1x/JUBS290Y+6OFgiq1PtYAgghLYNOabqkUxr8ESUIsxD5ivIX7gKCe+w1a5sLPsG4kWM+7OCuAGW2F/8bt3U0iu5iixtJ3hLjzXpMi+CsEvAJguZPrOu6NZTcC9Okd5M/iKD6EvAGPMPcM7qD+wsI58PEOa76iJ8H1MaCkzgg9z/WklzWXH+44aBiGrc+vHuO+VYnaz/GKuPepuaIk/0O/1zZf11pt6hJy0hjMXdooi27pALaMNPr0X7EZ32MwQnnH9v9V1dwIs4mC6v8uCzJjhXHjGdVR7bml0AqmTu22NRy6fzlgePGFSlHU+COHOM3/Hvm08W+f6QT1pg2z6E4QEkvIIUkSbtA8Rfptd1HFFX5ikGAlyO1nZ8kySDgsfWJOadnxHZlxnRRWRRFR4fVhb5MZEuod1KQmzJWbX3G267z6CBSg7vXYkLacZHOtRyLIuGrDODtYxMFwNYh5HuGZQtbnyXPwdJ7IEnSmOKkSb8SQ8SWsgE76/KOBOMLi4j2kbkfB+c7u4lIiKlfkGb9xxZElt0StXjD06wLmii1SJ3J/Db3Ufo5FO/Mrf0z/ZuIDqNFIcmTAPoNsw35VrCoPak629poEZbAVoPN36APRHEbrlHGLOwiBfzKB7YFFOc0NJLdZGqyjm1D4kECBuqBdszkwY6h3XHDoQajOYWUvdu6h8IiKVBROaaWbAB29TjlChl5oxaAYCumZ853rLaYuRsYBAkswFqb9QAZx3zZsUfkE2FfoHJ01kSnL1ZLIfqhMeAcT5UBGVhh6M1PuO9MecCgHTVan10+q3kcclH3QvCTPI9rP67yRpd0qUBR1CAkQLAmXYJ9nuwSK3GUPaIrnFuZa4n4f6Cy+F3Rw7Sj1a+5SF9sSBXSsYVVn+G+BZ5vDRI1tfPeAJNmXmtoasYmxeg2Wf8eEVsDbOvXKnIuyCMSgbU5pTz8gi0ykrlIvmbOyl9/gRuVrRHbTgn47qHEk7q794oIGvlM/W/KZk8/uu/GKTr1ONfMNfNPGv/+TkSLdnkW4IJWyHfn3tVcDEBwPUU+5xcl/0Tu4umiYz9AfbpalbzdRmKMjDjk7IP8qGziVpYRQhCcY+z41qKEGT7kv0mkLZtEbkmbRqgHMGIbb8em3PJ0BlMDhNDAHG7ut6Wn28qYAkFTUry3bie5/BoEv58qx9KeGv6+j2MvoeDHak2bkzcJsht8Ycqqxh6+qdv8HUgJegTccSLZ48wMAK/Qhh/QktIz2airWgztLltvrN5iWL46kklmEJsPug1r7P6uQqzidB0fD+/0NTKcGlY7FfkTFAOVEPbbcXV9xph9mPZLy7Oan2ZXzz1aetEj2Iv4CF2+nCCaj8lQmLEaCC4h9R1r+bICPHsRlAOSs+fF0cpDy18sVz4fsJBUeUluIoTy8keIuIlBH2EdfCPGrcJmA4spzNu2w5+SNL4UBpHoadmbsMWsQI1kAWUv4lUFxFBaFjdGUQ0zvJVw8ghSW7liSiZ9mCvrimGTguuSOiZnLgpbymje/zS1tGR0aipxtv3H2vIbqB9KZRIPdk1XPTGWWju0q92Zu07fzsQc4LNJdz+DtnH4cnpSMxBXiBUhMuGYkTmYz8zHf6AT4sY6ISZAWP8dzEpm8JQubcs2pQhO2LlGhJrc3RQDpIzerAKSiAdrl7M2/vFIQ7l6xfh5SSuz/7squmv3S+f5h0VnBCWEfOEpy42h9BnANwDvr0f1cD9n6KCflwNeAPR2eaMV79BC6+GSx+KTDebEQD0otsnCjuB4bDqv5ymzMtP6e9Mo5e3lk0xWcAKZiPrFAUItMpRz0HEZyxXjTxAA0VfdeIXM75Wrl33I7Mn6LUPzloMZxpTyIMjUzyomknOUS92JWnCPcfd8XK8iA2+DQTLTVXo6coAZFgMNoEkUb5F+vCvN1PfqpySFS1Dygf2iDSYsSYeyZqPhqUfTlm2id9S3HRwukHM06rAoU374wESauXpU6P77YMxXxumnLqIjb6vfD7yAXk9LFqRqRLl5YIYXoyNpNHEja8QGhdj/Cm09W9sBnhiES9MihuV2JqaIyoqWDFV5ExHR75HdoHGoTWFecVjhLi/Un52TyGjaOCZCacWSyV0oaBmWaemXULwfOWoI1XqsOl+Zhf+3fkaEJ/i2HF8UZ22cv5As4n3Inm4XTfeKZcOgv+Q7PjHrKd6FQFZnDnzKxQhJg6RxPhYazzajJbYz/9gDcfwnjTJBWYufXXe84fM5iFWMbSUujV/JuXSQUpJ/X7WV93zufBmqevqJove5SRo2VkgQ27uX0ztmj7NwZ1E/B3qsBfNI1CqOzvCWVb9qKufmRCkbaJGQxhV4Le1gY9cuH+PRMYEts1A3W8nevL1VoXRIBr46PW5/J5bQPyI4CuVoJovGGfYe5CsFX9wY3HW98/hnvS0kyIwGql25h4sssxNaYaUzHur2QPBOJm2bYR/WS4Qxv7Q3j+YadQpW5077Ng3R9pp4nva+Vh3gSKUp/TirRLa3A1ElrL60ofTnlO65qGKLNYL/VJvayAumXu8ZzL3na7R5mfJeUV50cXVZ4oxY+4WCRqSjjP+ap29hpYkd9l9K7uQHQK9Z8c5Oi95UGp689pfn6yIncyRStIRO7Ss3CqzmEqm6dpSIex8Y4B0ObkcgMic873549LRWZT9XXQk52vK7DR6Rzr/i+CGinKDs8we616PGMwcA8DqzaKdD3DqSIF97jki9e3Gjwd3iZBy9Nv+JIgx5AcIGpTg5bC4S20bM7JJTJA+O9JBrbech/6+8B8bk4/PX6HRnPiRmFXje2ARBrLvlaK1SmkUXVDZraHE7uR6CI2CszX/4Jr8wSTocUDyxBP6jkg8Zz3o/4DESXWGRbuUqlm+C6yHzKM3Yy2nwwZRpdyXGmoAaw8T/AwqUVTsgNwMYFzCr9WjQjgfxZ+hnrbDVnKj6W+22g20/NVtnOVRRv006YkeO1YuW3clNsuTR2jaSRFqEBJrLu3MNgL+LR5WXizJjZSEHExqgeDSQjrKLXuP8lxivS9if3s+v4noubSZe4vHnH6sHIxUXKY8TU2Z0DltFNgto9iJPVG4LWUZPcpRmBMKWeZn2Y6wWTkOmOkTdE+uZMZ5KMXjjhmFigLb2Bpml0asck+y2RyJfKi87HyhWboGtagxMBfzrfyVcAHjhyPxHde7GwgizCTCL7VWQ1/vs5j+mTZo5kjFIlHZee2az8bgirTlnAuFTbHU0CmbEOqx7E4t8CDVoYj0gkwTRqlrTCg8cnzElfwCut/jdtgFibXXY5f5FaNQhiMxYn/GmTiDCpObXPDf2GYZrmDGFOv6GPmG8lE5DA6rdW0O/t2pXeIecTlafCDv8VJPOF35e+MXOvNPnBPmnBiqNfPN4zw/bwmRQjT1VpMrrl3/aZE/k2nbvGFT1DsZAhfzdsfxPNK3du3dpaJyod0ytaIT8ana/CoZyqTFO5WSe72471S1j5TIaVIGfCyU4MWilq9T4CF4IyAMKZ86FLqUWGgPQ+XsCR79ViEoXwSJBpMRm2rGFrj86aEqjFTQ+LsN5/P+mjpEfwq7CHaBuiQlZK9egS9FS5JUK87Zy+fbBy7l53wSXi+cj8YQ56UrCSp9709zOIxUThZ2RP0ANCgGifwVk4maO0gsiwdTD0mmEpJXHUWbbfNYRQkGEezHobuJ2C0ymkhB2u+AWIrTbpfnZ9pQ28zTnKttQtCq2lWmo7rSAdP2UiqwQ7vdhRZf2dL93XJm2e42RMxTtWRKA9OGhMDuzSpeXhsbyn0eKCxjjEB/FPScGcllc48Np+/ReHPVu/NvLImVBmKw71UcaL1ItTCjJZrmLKQot1tch3bmodDUAbKDseZsuCQ2fTjo4DsYiiPvJjYQ/UMtcRLJT8pqE7YZ2SQuoW2H75nU4i/ywP5DvHqc0NQHJNUYoCxfZU7llu4/DLA36KpUWlDGWnFKiKkVLmWHUk+UcnZ4V29XobQW9nLZfVbIuz33G1SoL2x8PG1mnKEr2hnTsHaFk2WCTdKgsr/fJ/u/K2RJyNk5u0kQOZzD+VGntLbY9yLXE9yl/IHxFIev67XM7po0ofVoBnRVxiTq2O4xCLmujKHyBYgxnLVHs1iyi47kw110+Z29Pwe0pYMV/WtfGS3sZGgQDJwSJytHXjCKW5Nx/53gp9WJUpH4Ubznk20vGNyeF0oq35NbWEdPMpom822K4Bfe5eKlI1CCrKa4UNiSkN6L0M4s06Zb0UAZdlob4z6SakGlGpNPfvAuSAE2sd07rFnL26mWbYxHFMOiaEerDq6SW9SkwyAf00liF3LatwPAlul87lXh80BKAuzcyKZfEoRHaIBvb0jPzKoCR5lWQv6WgE7MMThWzkwwg/9PvQvPouLUMVM8HB3IMvSQbgmyJUlLJlxn9Mk+Ry/RRk00+QM1pB49VaI305YY9shAfwYs0O4fzV+u1v8Nwai/z5NN8aem9CmMjewoCc0wHD2tDvu5luyTJDAO8Dx5hpnNbMLyD6PGstRePF6H5vnVx1DBPyiqviRQDOo2LRwFIYNAEVWCFItGh7gRj6N4fGdbz3hiddNOwCh5wvv1imDwDc0voVk41pQF0kzMc/EjPAJW7de7kDrC+bVoUCqP9xLk8OmQqOM379kv3m/BJlSMs/pO9EU8nBHyPTeoXaWQOKPWjXo35bP9hnxGY0DUZzIzUJm4GbkDsbl7iI8OOdokt1Za208Ity7LEknb9GCFOILav0LlEmz4afptyeRlCNK814/UgCsabpCVu0XFCEUXKyNjRKb4iwjP2rzSGwemNyzEKfn+y7CXWfedSzIZDjBTI/jF6xOo+TqJEVaA45L+0siFdEXu7OPOxAhxxEbC8qg6Y+WU8AeFzM3nigZ1IEvD+nr+kkhOUHTY18b5iJooD1YuSle4OQP6W72kd1/y98JXy8q6jrBwam2UDw0B+qkqzYhRjM/yPq/d01NeXOEE44shwmRd69IPhqqSvxTaS+VdHEkxlqBMTutkGKAEiTZ3srP0WQd63zFhj9DuBsE2RHvJFjg6lgRusrtF8jO5hym+1u8VMpdNP+Leu50sueabEX7fjbI3duU+BMjFPsePpoUHHFi3tpHKmwQv33u0Qb21dnUDI/NJrgfwrjXBFKAvuvfwdxRAyRgSvrb79aeBAYmlvwl2Ijd9KFEJs4Ad/Hm3ZdfwJqeIib8y5tvSgzP1p6+c/B61O/Wp09FEdlcy5gSODmFLxYqXuRK5kAACP6mRsP9Mo6bFZoNszhfs21QCmn6xCtl363XqgTPXFlcA3R1g9R9oUjUWp9iYuD/VrHdgXWqK6xu+WX8ljgvMMa7069oc/jglVzrt6dam2cW6IUx0s8WwOVQSdnufMqPUNdbJzOQL0/TG3A/B3S8uIuqI/9ecGKYyZwCBRamqnh+CJENlZ3W4De4TcedzxCSvtz2V+IuKBkUoK5m8sno5kPagLDtP65/0oMQOPS1kGo57U7aaiv6F6yPdstkK+XXKr4/QeWwPlSeM3IB6Av1lQsIe1iaK/MCI/vOAm8mTGNIJjcPCHiX+TlOe/g07tWcL7M7+PGdjPj/5C+hSK3fYpXGmNfxd9dbo1K3EXYt3LkHnof64vaynJK3Bgr/t0mIV3MZc82ULbHg+0i7BPIZcZj7UYp8RetQzikJtwQAmg1j44d3JzzJSaEAGXIlJVZQhhDZgj2kVTYW+lhDJ9PBkh/1XeqB+NVNUUEvWsEw3W9w1VMPBq4t7x8IWk/BP415DCZ1SKKCAlJ6GflNAUrjcN2uZ5fI7qHFkYi3CGgBJe3/2B09UiMqPtWILNeEPM2OZcwalFHJ8dGY+Po0LlxXKaE1Y41g6hF+rK3LcFQljTW40eOnNEuSlehUXAYnGJxwZs5GSLQpKdS6iyFM8ZQUo5FtxwMfHOXsgz8sVB4EJln9aON/KhA/SSYTdd/9N1hY7IjXt287hvgFVCulOR2FZSZRx2ejV2uRoXBweJju1a1Th7fYdTj4ZPY7danZWPcJ8S2cEi8pzzxFTtXNdCAa2rmaezTzwjR6vrTyBEyPTHsCIeTsjl8KpKnVqWmRXH6iQkQ7GmFHIanPDi9k1wRuGe7EuO3/yhAEsaM23xbWghdj1rGs6YfFRDngGCRiNNTKPYcyKSA+8/Q9d+r5Sk9Ef7YyKIwvcJWXlD5qqemiNCJUVAdcRTXrasWPSfb+s81+PNqSwhvj/eMEobgc6Z0EwhNh/UvPfBu3f9coAg9X46VTtcmCUFxg3Ebv9Uzmm8YN5nstd9GdCdrlnuCcqPGAndbhox6n7nVglPVcAuy49oXg6ALK1W6sUWKvmKHqQ1vJuIObjAFgnc2C6kJP4skSikhvrB+LRKKlnzFZeQaEgMnJxlD8gV2LNLwxrFYUbqhSl7sEAO4Qze2CLyKXitwukTsTxZjCbBNRo0xXjjHMDTnNLbvBRWWWhk+0/qH5FKpbHQdsQu5tHpqM0Zep90rHIBQuJUTt0/3RfGArFIbBwECeXz3ZOLblzBsszKRAkZeENuY7eipktevxNWU+BVFI4Tn4zs/vjnL8wse2kYx/KmP6jYqneDrWIArIMmN//EpZjkwIE53js+WdmRzqUaf1kCbe7UFOvaNMiGX59D4O+squZ81F3dsXc9/kHrXJfUYxbD7/L0XBf2zHMdpR5op55kfdD5bfChtPQxG1S1K2q/WRt/4aJohTsHpzYjCDqCY24TqySoQGTXoiS1QaIU8UgZ4WfibzjLXaMMKTq7VBhYmw+KMh1VNl7wyyUWVcGCVo54T4fLZ/C/YcaodqaTrJtnmLuYeC4q6Jv83sEu2fcVquQkH/AP3QpWU4ufE484k8UMePgXKKclO0PSXcfO/hLaJutwP+kLIa/+nzS8jQMXEnaFwnxdg16lBKgxAGv76YRz2EI6Az8r3CXXOOqhte2Tuvy2adotTSbUsuelAduhb5axrnPoZkQQPaara8AQqjDRYXGTl2bHpuVxE6HPFLgcP9QsPqd2nh489RvTHV00lGPjYLOL0EKK88XAXjkK1bQe2IdX2po1nh/zs2YxopVd8YVL5WMn5ZuK9E7iUS5VMjXhzh6z4vuFucGSj/Un9Fn52C4clXv5xDgxzk4uRXkposGChm+c9WwCmD6Lky0OSy+7OVa02DdZ5bYE2as8LZv8UNPky4PB6vm7uxXek7nC4D6cn3igu5nM6nbs9L4jpgLs/ABHsvdNtNsoMLtJnfyh3I282mZMyrLSYhIa6WjWcZf1BkWrmagQLF6qvr3iTi0pgJzOi+11SUQKwdyOXuMo8GcHBLqOy+WFRnjj8BV2uiaAuqODeikPBgFHr2NKymqJVORgrXxkw9pPftymvetm+QF4sCeKjyPPStqm8oznIUj9hBnVxszTYR/6XNN9LTYmG87PQ0X3O6uS4mX7av7SwCkHd6ZARrqKKKK08Xf0CerdsVmRW52qjUOIUW4vHdAB4EJ3ehek0nj/2gasMiuht2OHvyNbgAv7kuHfrUZA/NToBIzv9J/dxv4oXQ7KOFgGs+jYMhVpf3SVByzO0+TKuVCPzZNwQQxnThTwBCgaYdi7Co9qaVx75ZMOU4y1hCH2teixKnuNC6r5QDw+evwQCSWAnY1AUzt6l0Vg5niX/oJ2M5Pg8oGyhf7RUpTvJIN8KUV27pJv7oUndSxjSrn8YcJIAc6spkI5GcCpgFEBCHmz/q4wj8IfSBDOuLKZ8KqIRY236wASrdt1rfpEE406SoSiL1+7JZ5DAnYqEXjJqJBTQEVOoUINn74nLoJMnxWZgCJ46AEzfEmYXOv1Gu/GZREy1G/VYCRabjqMjVnoOsTTW4hmh/8Rdy2uVl5egkTYqQl8ToKm0eUfSuu8tI000IgVRwmxNWGLBOinWyZMtPexaHDQtZ7bydfNy3KhJULI3BeriHn6gwcZbAyE9OYioh5K/hxR+OKgJUiTSFbc0kJ5C78eiyu6ZXju5LsnWmGDhPvLYMLSq9/kcZQ0wAmOJuc16m6f93is3X01usqtvrO2SDMOU8FM3b73ipSvqc5VW9nsgwOq6zxHb4aJDgixkfrsH5Xoz20Zln4+tQFzYcfOmfg+zRPJKvzEikhUgFCiPyu4IcVwIbRiBHHWGgS4hBQvuvcJygLeOv+2ja7uUCejm8d7JW0q6aWbIY+P2kJe/qHyWe/JnSoj4oUhOa+qv2jUBD1BKWqAmRylnzuVrpdmu9TWRMX/xkvXwaMa5Dcryee/vr/p4Sb+VWdxqV9sreShy87Ldgob/a6Q4DoMHrXygCtYEgdKES7KTlv3U+2a7M43JU0Trap6RAOV+DBAVQHg7hCd2oKI1bBJNyYo9kS63Ilz92Z5yBt/gwDRG59ybe4TQT+0G+I8mX79NDEI9uCSmqBMTBN1H4glu2U0bYYLpOO05+qPOOBbcYoYEkxqdoNFpdOkRO40cIK+emPlMYcopxUIfURnWeQpaD9mO442fgf0xaHc6MEFECcmSE5A/0c1FPTgl3SVX9HSfAeaertxJ1eGkk5k2UG1PxwvkYLLHR9h2uZaHf70TPv866as6rKSvs8Jsyfubp845qviam+QKFX1UkyqpU7OBipgLaMDyK4/2geTPpKYjiaEIljGWFfGjwtDt2DRp3yLxnrSkyrFbBtvNS5o1GpSpb7NDqhOYyN/R1einmL/dcNMfbSrBNCpTY8IIfRxH4Bec9LtsMmXctVCk1gr0TgNpAVDt7JsEzRea3N6vtkm8H6i27sw7EVbclQe01v+VK179jnytM6d4Nqu/NXqTzk9mGw3NEdgZgL48Wuh6MMmzWHiXs72Ea+ZivUFD7e917K5KkswZQtM9JrKgfvlp4Ded9mWowwTWVV6sgUPVYDriMVC0Rel+WIvoLgOy4Z7CCpsRxHcgr5zVwFp0rA/vVrF6+HgpS8NXegV3/tuguT9ltXr2vlIeV4w+4Y2e/Q3XD87ZaKpq4Nw6MSBH43ukOTVAekD3J2M3a2CG+lhHOBd/FA0d1hy4n9o4Fz8RG15ThOf1JampYTbRvW/mBbtgneNiBdRIHu10TGoF/r2i/z2U7XV3sIXXdw3FHk6QQWZKSeK5BDfW1gP2JAvzqiXRES16jJeXCM6lhujRVR2K13/l9LEqYb4mQZ4S+Zrn5AOwqS5dLr07NN9DKR6iQZOUKYKliZ+n62SLejOEY4u8V3fCvh4FoT5Yn25TbQDsb4rE/domroBmACulDqbrYUy1hLWJXuOcY/EuxYywj/t863o6StS9f8rUevsOXkDAZH8slGN8ZS465mF48rpFt6HWPOxPOfc/cstXuKhTAQteRdULkPYThF2phme19kejIQQG/HnYsjBnJpbNUOaGO69JJS25g//lIP3S4bsz7e5hS67f+sPnbiSHXiNbkftzmUDDnAwNbJqHSZjEYCUW9wPWTvd6R9+SXM0mOIuahsLSCeaD0MvJUc9pIsaaXp1rnrGUcWjPeg48bOhjKUwLxEwSyzZq792ELDHW6DWGEmQesWp9zE7fJs5uHYKmfSvmVB7qHvWPzbMW+LP3El7ikTobd5mBC+LEX5eENFZnUXrFxoi1Ww4bk/Xg8QFaNUr3Y3OALCErigb4mUlmBsy3LrGvJCM7ZjYKz/To54eocqzlPa3jbYMl/tRM59FMg/ora/OAudXENsCySRPEZpoy/yEV4UXT//asgpZNT+ZzVRbsHryX3ItnzLbdaS/aaOr83NpIKXytHgQLHNqGNQAAr850kPYiYhVWoI/5GtfxNLvGZND7O7GXZziwtGkav0hlk8PJcnXD33V4mrW8DRtcbKe66rQmxUv4uKyB+wkyUz/rz+2w8UzdI0Rdy1Jwg/+EAO4ffdGrwkNIECwmU4+nnEDDwusZJrcKl7XM3xFoRPHMvmCjpUxiWpXShgFR3T5BpupdQY4qqeRMmGb6JWkAb8SRhAC7vVH5OTCO69ZbKIDcc17mxwS+wo5NpPbjR7PQLSASTAWvBUE+7hkD1VAmgFbzlZBBpjyB8I1D35fVCkj8pNwz0j6qMHeF/k6ljobvEpIHIdWz5zSdDdlOf+eQ4WEUOWlJSnD0aOXZTEjx7iJ78/2ZJ5nmbihpexANM/0YrY4x0QHgVQ4ww9OqP0ae9ZawI+nA3UvjYtPPYs5siU7jMA9zEi92x4A2lK04C3SvZKBELdwnmi371PX2P7qeJQjvjkVHqLwqZVeMMzXswhF+RhTG+5I+k1BwWHjLs4/TnlGngjpk9VwOL0h2xQM/BPYqpM/+l2jStZ+QA/3mSI7CrOBaOSv2AgVuSiWEc0IG1ng28pZfKdQL5Ova6Xp3/5x+CA/RvSz/IbuAHDc1iJJMY+v8NfpdHtInZuodLV+8kubUKpWcPuJ9WyDaSql691a15pDdWEeNhjwAoQZKTkEp9+1TSgmUJxnM8SgUechVwJBBU+v3TO+ltTXFwrT56I7moDSaL35sMKKQ0BXKi17csvpWrD01pC7J6XYzquMhij1aNsU0DWKEoSUXG+fKgPjK28pbUPjp+CwTtVzXHIFYjpI6XYHcJdcbclctIr+LfTCIjSgopEJEG/2tPE3Zo3ebTH4J5njbqIMtSvnBeE31Go55VdizGBW443v4H7UgMzZMHAYiCkByuSdt53cOWDgo5jfKtn/lOXCRj5mTJ1KRzEY7UibpbudUJub/0qc3WvNXLkY6Hj0N3pPJCe4Gldt/8+c57mOUfrAqHe+Rcc7lU426yC0Fwh29KREFcHISFSoyoEz630WXCK02QSdQYSRueyQfA8cMroXBErNlcXf3EVUVjkfXqVjTyb7HrfsolrLu52227tP4jGQLwV/J4fPkBASeo1V9N48WJSRHw48EwsmB84xwy8Skp7+MqkXGvVG4wzdfHE8Q14EUpfHEoOFjTZr+0bS7gPQIg9eIuDbXRhQx1+mRIdKppDn+MK0h8O721gL1n2gSFOFyFY5fuVFYfs77mfOLRe/IV8HMkEc9lMgBdzp0LYGxZs/x08kkimiETFSW4pN1osNZAQhytNlGUmt391XVZdv7wgrLFTjAYwNGHcLxbc7xj1DXPyZ6FX5luKY/rHHt7uTZ9cfHtZf44a5ajggNwhy7uODCyGEmuEL13TU3it/kKNtePPikQuOgsjMwUPTpuRLvMQZ54+hMyojssOfh8En2DnEbAXAEfiQRR11+PJg8BiutE2tjX6GMI4DAqICFPkV94eU5rNd6AjMG1HNn6RyIylNji+hkqrDhIT04JA+pP5a4vnccEyVZsFVQXCuRATfKDEb/6Mic3eIxlXK1unVt7BdKhglRNpB13qnWrK8JoxKnBKazNVQQG+oFCMQ80nM4OfmI99AAA="
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

export function createSCBBankBranchBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'SCB Bank Branch Building';

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
  // `deckExtra` folds more boxes into the deck's submission -- a dark backdrop slab behind a glazed
  // opening, so a shopfront with no interior image shows a dark room through its glass and its
  // delivery hatch reads as a HOLE rather than as a patch of the render wall.
  const deckGeo = boxAt(0, (G.deckY ?? 3.56) as number, (SF - 0.02 - 3.42) / 2, 7.8, 0.12, SF + 3.40);
  // `deckExtraTones` (one per deckExtra box; the deck itself stays white) is how the backdrop is
  // DARK while the deck keeps its measured tone: one material, one draw call, a vertex colour.
  const tonedDeck = !!G.deckExtraTones;
  add('roof-deck', 'Roof deck',
      G.deckExtra
        ? (tonedDeck
            // `deckTone` tints the deck box itself, for a plate whose plant rides the deck MATERIAL
            // (a galvanised tile shared by the units and the membrane) while the membrane keeps its
            // own measured tone. Left unset the deck is white, i.e. the material's authored colour.
            ? tonedBoxes([[0, (G.deckY ?? 3.56) as number, (SF - 0.02 - 3.42) / 2, 7.8, 0.12, SF + 3.40], ...(G.deckExtra as number[][])],
                         [G.deckTone as number | undefined, ...(G.deckExtraTones as number[])])
            : mergeGeos([deckGeo, boxes(G.deckExtra as number[][])]))
        : deckGeo, 'deck');
  if (tonedDeck) { deckGeo.dispose(); finishVertexColors(materials, meshes, 'deck'); }

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
    if (G.condenserTones) finishVertexColors(materials, meshes, G.plantMaterial ?? 'galv');
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
  const root = createSCBBankBranchBuildingModel(options);
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
