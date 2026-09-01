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
          "text": "◆",
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

  /* Roof deck spans y 3.50..3.62 so its underside is sunk INTO the shell rather than resting on
   * it. Authored flush, the deck's bottom face and the parapet ring's bottom face were both at
   * y=3.550 and both facing down -- 46 m2 of coplanar co-facing surface. */
  add('roof-deck', 'Roof deck', boxAt(0, 3.56, (SF - 0.02 - 3.42) / 2, 7.8, 0.12, SF + 3.40), 'deck');

  /* Parapet: front fascia wall plus three upstands, MERGED into one component and one draw call.
   * The front is taller than the sides, which a plan extrusion cannot express. Outer faces stand
   * 0.06 m proud of the walls -- a coping drip edge, and what keeps them off the wall planes. */
  add('parapet', 'Parapet ring and fascia wall', boxes([
    [0, G.fasciaWall.cy, G.fasciaWall.cz, 8.0, G.fasciaWall.h, G.fasciaWall.d],
    [-3.88, 3.75, (SF - 0.30 - 3.5) / 2, 0.24, 0.4, SF + 3.20],
    [3.88, 3.75, (SF - 0.30 - 3.5) / 2, 0.24, 0.4, SF + 3.20],
    [0, 3.75, -3.38, 8.0, 0.4, 0.24],
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
    const pane = boxAt(G.glazing.cx ?? 0, G.glazing.cy, G.glazing.cz ?? 2.51, G.glazing.w, G.glazing.h, G.glazing.d ?? 0.10);
    const extra = (G.glazingExtra ?? []) as number[][];
    add('shopfront-glazing', 'Shopfront glazing',
        extra.length ? mergeGeos([pane, ...extra.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5]))]) : pane, 'glass');
  }

  /* Framing, transom, kick rail, door jambs and header MERGED into one component. Every part is
   * the same metal; folding them together is the draw-call lever chosen in the blockout, not an
   * optimisation deferred to the end -- a part split for authoring convenience cannot be merged
   * afterwards once a pivot hangs off it. Front face stands proud of glazing and mullions. */
  add('shopfront-frame', 'Shopfront framing and door bay', boxes(G.frame), G.frameMaterial);

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
   * Feet start below the deck top so the two overlap rather than sharing a plane. */
  {
    const parts: THREE.BufferGeometry[] = [
      boxAt(0, 0.46, 0, 0.95, 0.72, 0.85),
      cylAt(0, 0.87, 0, 0.30, 0.10, 16),
    ];
    for (const fx of [-0.4, 0.4]) for (const fz of [-0.35, 0.35]) parts.push(boxAt(fx, 0.05, fz, 0.08, 0.10, 0.08));
    const unit = mergeGeos(parts);
    const mats = (G.condensers as number[][]).map(([x, z, yaw]) =>
      new THREE.Matrix4().compose(
        new THREE.Vector3(x, 3.60, z),
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

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
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
  const mesh = rt?.meshes?.['shopfront-glazing'];
  if (!mesh) return;
  const material = mesh.material as THREE.MeshStandardMaterial;
  if (!material) return;
  const geo = mesh.geometry as THREE.BufferGeometry;
  const pos = geo.getAttribute('position');
  const [x0, y0, x1, y1] = g.rect as number[];
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    uv[i * 2] = (pos.getX(i) - x0) / (x1 - x0);
    uv[i * 2 + 1] = (pos.getY(i) - y0) / (y1 - y0);
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
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

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. A static exterior shell -- nothing opens, turns or swings. The doors and any
    // shutter are authored as fixed geometry, so they get no axis: a named pivot is a promise
    // that a part turns on it, and a prop that declares pivots it has no mechanisms for has
    // described a machine that does not exist.
    const pivots: THREE.Object3D[] = [];
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
 * what a vibe3d consumer installs and calls.
 */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}
