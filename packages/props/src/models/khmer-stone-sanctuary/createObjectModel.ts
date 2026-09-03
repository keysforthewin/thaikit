import * as THREE from 'three';

/**
 * Khmer Stone Sanctuary -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 10.60 x 9.00 x 12.00 m, origin base-center, +Y up.
 * Budget (hero2x): <=16000 triangles, <=16 draw calls, <=16 materials, <=16 unique geometries.
 *
 * This is one of thaikit's MONUMENTAL buildings, and unlike the shared retail module its form is
 * not a box: the recognisable feature is a curved or tiered profile that has to survive at the
 * distance a village skyline is read from. The shared vocabulary here is therefore the LATHE --
 * a profile revolved about +Y -- and the tiered/stepped merge, not the parameterised shopfront.
 */

export type ProceduralModelOptions = {
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
    "id": "khmer-stone-sanctuary",
    "name": "Khmer Stone Sanctuary",
    "exportName": "KhmerStoneSanctuary",
    "envelope": "Envelope 10.60 x 9.00 x 12.00 m, origin base-center, +Y up.\n * Budget (hero2x): <=16000 triangles, <=16 draw calls, <=16 materials, <=16 unique geometries.",
    "materials": [
      {
        "id": "laterite",
        "color": 9201746,
        "roughness": 0.96,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "lateriteBlock",
        "color": 16777215,
        "roughness": 0.96,
        "metalness": 0
      },
      {
        "id": "sandstone",
        "color": 9139290,
        "roughness": 0.94,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "ledge",
        "color": 9139290,
        "roughness": 0.95,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "carved",
        "color": 9139290,
        "roughness": 0.94,
        "metalness": 0
      },
      {
        "id": "pale",
        "color": 16777215,
        "roughness": 0.93,
        "metalness": 0
      },
      {
        "id": "void",
        "color": 3812900,
        "roughness": 0.98,
        "metalness": 0
      },
      {
        "id": "grass",
        "color": 9407058,
        "roughness": 0.9,
        "metalness": 0,
        "doubleSided": true
      }
    ],
    "geometry": {
      "platform": [
        [
          0,
          0.7,
          5.3
        ],
        [
          0.7,
          1.38,
          5.18
        ]
      ],
      "bay": {
        "z0": 5.18,
        "z1": 6.7,
        "halfW": 1.85,
        "cheek": 0.6,
        "steps": 5
      },
      "wall": {
        "outer": 4.82,
        "thick": 0.72,
        "course": 0.34,
        "courses": 2,
        "y0": 1.38,
        "gapHalf": 1.9,
        "len": [
          0.85,
          1.2
        ],
        "tones": [
          9201746,
          8281160,
          9859676,
          7492162,
          8807504
        ]
      },
      "plan": {
        "s": 0.3,
        "pw": 0.3,
        "rd": 0.14,
        "bw": 1.3
      },
      "plinth": [
        [
          1.38,
          1.72,
          3.02
        ],
        [
          1.72,
          2.05,
          2.9
        ]
      ],
      "body": {
        "y0": 2.05,
        "y1": 5.05,
        "a": 2.82
      },
      "door": {
        "w": 1.19,
        "sill": 2.05,
        "head": 4.32,
        "jamb": 0.32,
        "jambProud": 0.22,
        "recess": 1.05,
        "col": {
          "r": 0.15,
          "ring": 0.185,
          "x": 1.09,
          "proud": 0.3
        },
        "lintel": {
          "y0": 4.32,
          "y1": 4.78,
          "w": 2.62,
          "proud": 0.3
        },
        "pediment": {
          "y0": 4.78,
          "y1": 5.02,
          "w": 2.5,
          "proud": 0.22
        },
        "steps": [
          [
            1.83,
            0.36
          ],
          [
            1.61,
            0.72
          ]
        ]
      },
      "cornice": [
        [
          5.05,
          5.5,
          3.18
        ],
        [
          5.5,
          6.05,
          3.42
        ],
        [
          6.05,
          6.6,
          3.58
        ]
      ],
      "tier1": {
        "y0": 6.6,
        "y1": 7.35,
        "a": 2.85,
        "aed": {
          "sx": 0.42,
          "sy": 0.16,
          "sz": 0.42
        }
      },
      "tier1cap": {
        "y0": 7.35,
        "y1": 7.52,
        "a": 3,
        "corner": 0.28
      },
      "tier2": {
        "y0": 7.52,
        "y1": 8.32,
        "a": 2.55,
        "aed": {
          "sx": 0.34,
          "sy": 0.14,
          "sz": 0.34
        }
      },
      "brokenTier": {
        "y0": 8.32,
        "y1": 8.72,
        "a": 2.42,
        "t": 0.72
      },
      "blocks": {
        "unit": [
          1.1,
          0.5,
          0.7
        ],
        "list": [
          [
            -2.06,
            8.72,
            0.4,
            1.6,
            0,
            0,
            1.2,
            0.56,
            0.9,
            2
          ],
          [
            -2.06,
            8.72,
            -1.3,
            1.52,
            0,
            0,
            1,
            0.52,
            0.85,
            2
          ],
          [
            0.3,
            8.72,
            2.06,
            0.05,
            0,
            0,
            1.25,
            0.54,
            0.9,
            0
          ],
          [
            -1.05,
            8.72,
            2.06,
            -0.04,
            0,
            0,
            0.95,
            0.5,
            0.85,
            3
          ],
          [
            2.06,
            8.61,
            1.2,
            1.58,
            0,
            0,
            1,
            0.66,
            0.85,
            2
          ],
          [
            -0.9,
            8.66,
            -2.06,
            0.03,
            0,
            0,
            1.1,
            0.62,
            0.85,
            3
          ],
          [
            0.2,
            8.32,
            0.2,
            0.5,
            0,
            0,
            1.25,
            0.8,
            1.05,
            2
          ],
          [
            -0.75,
            8.32,
            -0.55,
            1.2,
            0,
            0,
            1,
            0.72,
            0.9,
            1
          ],
          [
            0.95,
            8.32,
            0.9,
            -0.7,
            0,
            0,
            0.9,
            0.66,
            0.8,
            2
          ],
          [
            -0.3,
            8.32,
            0.95,
            2.1,
            0,
            0,
            1,
            0.6,
            0.85,
            2
          ],
          [
            0.85,
            8.32,
            -0.8,
            -1.9,
            0,
            0,
            0.95,
            0.7,
            0.8,
            3
          ],
          [
            0.22,
            8.72,
            0.2,
            0.5,
            0,
            0,
            0.85,
            0.54,
            0.6,
            0
          ],
          [
            2.76,
            7.52,
            -0.6,
            1.6,
            0,
            0,
            1,
            0.72,
            0.5,
            2
          ],
          [
            0.55,
            7.52,
            -2.76,
            0.04,
            0,
            0,
            0.95,
            0.66,
            0.5,
            1
          ],
          [
            3.1,
            6.6,
            -1.5,
            1.62,
            0,
            0,
            1.05,
            0.7,
            0.8,
            2
          ],
          [
            0.75,
            6.6,
            -3.2,
            0.02,
            0,
            0,
            1,
            0.64,
            0.8,
            0
          ],
          [
            3.2,
            6.6,
            0.3,
            1.55,
            0,
            0,
            0.9,
            0.6,
            0.75,
            3
          ],
          [
            3.55,
            1.38,
            3.6,
            0.4,
            0,
            0,
            1.2,
            0.8,
            1,
            0
          ],
          [
            3.6,
            1.38,
            -2.2,
            1,
            0,
            0,
            1.1,
            0.7,
            0.9,
            1
          ],
          [
            -3.62,
            1.38,
            2.9,
            -0.5,
            0,
            0,
            1,
            0.8,
            1,
            0
          ],
          [
            -3.7,
            1.38,
            -3.3,
            0.9,
            0,
            0,
            1,
            0.65,
            0.9,
            2
          ],
          [
            2.95,
            1.38,
            -3.7,
            0.2,
            0,
            0,
            1.2,
            0.75,
            1,
            3
          ],
          [
            -2.55,
            1.38,
            -3.8,
            2,
            0,
            0,
            1,
            0.7,
            0.9,
            1
          ],
          [
            -3.8,
            1.38,
            3.7,
            1.4,
            0,
            0,
            1.1,
            0.75,
            1,
            0
          ],
          [
            3.8,
            1.38,
            3.65,
            -0.8,
            0,
            0,
            1,
            0.7,
            1,
            4
          ],
          [
            -2.2,
            1.38,
            -3.55,
            0.3,
            0,
            0,
            0.9,
            0.8,
            0.8,
            0
          ],
          [
            -3.62,
            1.78,
            2.88,
            -0.5,
            0,
            0,
            0.8,
            0.6,
            0.7,
            2
          ],
          [
            3.75,
            1.38,
            1.2,
            1.6,
            0,
            0,
            1,
            0.7,
            0.9,
            1
          ],
          [
            3.75,
            1.38,
            -3.6,
            0.5,
            0,
            0,
            0.9,
            0.65,
            0.8,
            2
          ],
          [
            1.6,
            1.38,
            -3.7,
            -0.4,
            0,
            0,
            1.1,
            0.75,
            1,
            3
          ],
          [
            -3.8,
            1.38,
            -0.6,
            1.55,
            0,
            0,
            1,
            0.68,
            0.9,
            4
          ],
          [
            -3.3,
            1.38,
            3.75,
            0.6,
            0,
            0,
            0.8,
            0.55,
            0.7,
            0
          ],
          [
            0.6,
            1.38,
            -3.75,
            1.3,
            0,
            0,
            0.85,
            0.6,
            0.75,
            1
          ],
          [
            -4.46,
            1.72,
            -0.9,
            1.58,
            0,
            0,
            0.9,
            0.68,
            0.85,
            2
          ],
          [
            2.2,
            2.06,
            -4.46,
            0.05,
            0,
            0,
            0.85,
            0.68,
            0.85,
            1
          ],
          [
            2.6,
            0.04,
            5.6,
            0.3,
            0,
            0,
            1,
            0.7,
            0.85,
            3
          ]
        ],
        "tones": [
          13605752,
          11049606,
          9139290,
          6969928,
          9866880
        ]
      },
      "tufts": [
        [
          3.35,
          6.6,
          1.2,
          1,
          0.3
        ],
        [
          -3.3,
          6.6,
          -0.8,
          0.9,
          1.2
        ],
        [
          0.9,
          6.6,
          3.35,
          1.1,
          2
        ],
        [
          -1.6,
          6.6,
          3.15,
          0.8,
          0.5
        ],
        [
          2.2,
          6.6,
          -3.15,
          1,
          1.7
        ],
        [
          -3.15,
          6.6,
          2.1,
          0.9,
          0.9
        ],
        [
          2.76,
          7.52,
          0.9,
          0.9,
          0.4
        ],
        [
          -2.76,
          7.52,
          0.6,
          0.8,
          2.2
        ],
        [
          0.2,
          7.52,
          -2.76,
          1,
          1.1
        ],
        [
          2.3,
          1.38,
          3.1,
          1.2,
          0.2
        ],
        [
          -3.95,
          1.38,
          -2.3,
          1.1,
          1.5
        ],
        [
          3.95,
          1.38,
          -0.9,
          1,
          2.4
        ],
        [
          -1.2,
          1.38,
          -3.95,
          1.2,
          0.7
        ],
        [
          3.4,
          1.38,
          3.95,
          0.9,
          1.9
        ],
        [
          -3.95,
          1.38,
          3.9,
          1.1,
          0.1
        ],
        [
          -2.4,
          1.38,
          3.95,
          1,
          1.3
        ],
        [
          3.95,
          1.38,
          2.3,
          0.9,
          2.8
        ],
        [
          1.1,
          1.38,
          3.95,
          1.1,
          0.6
        ],
        [
          -4.46,
          2.06,
          -1.2,
          0.9,
          1
        ],
        [
          1.5,
          2.06,
          -4.46,
          1,
          2.1
        ],
        [
          4.46,
          2.06,
          3.6,
          0.8,
          0.4
        ],
        [
          3.25,
          1.38,
          -1.6,
          1,
          1.6
        ],
        [
          -0.6,
          1.38,
          3.6,
          0.9,
          0.8
        ],
        [
          -3.3,
          1.38,
          0.8,
          1.1,
          2.6
        ]
      ],
      "wear": {
        "size": 512,
        "laterite": {
          "tile": 3.2,
          "course": 0.4,
          "block": 1.07,
          "joint": 14,
          "bump": 0.05,
          "jointTone": [
            0.3,
            0.28,
            0.28
          ],
          "edge": [
            0.58,
            0.56,
            0.56
          ],
          "pit": [
            0.42,
            0.4,
            0.42
          ],
          "blockLo": 0.74,
          "blockHi": 1,
          "mottle": [
            0.86,
            0.86,
            0.88
          ]
        },
        "sandstone": {
          "tile": 3.2,
          "course": 0.42,
          "block": 0.84,
          "joint": 2,
          "bump": 0.035,
          "clean": [
            0.79,
            0.725,
            0.643
          ],
          "side": [
            1,
            1,
            1
          ],
          "crust": [
            0.92,
            0.88,
            0.8
          ],
          "lichen": [
            1,
            0.76,
            0.51
          ],
          "paleLichen": [
            0.97,
            1,
            1
          ],
          "black": [
            0.26,
            0.25,
            0.245
          ],
          "jointTone": [
            0.76,
            0.76,
            0.76
          ],
          "pit": [
            0.5,
            0.55,
            0.58
          ],
          "blockLo": 0.92,
          "blockHi": 1,
          "mottle": [
            0.88,
            0.88,
            0.89
          ],
          "light": [
            1,
            1,
            1
          ]
        },
        "ledge": {
          "tile": 3.2,
          "course": 0.8,
          "block": 0.8,
          "joint": 3,
          "bump": 0.05,
          "clean": [
            0.79,
            0.725,
            0.643
          ],
          "soil": [
            0.34,
            0.3,
            0.26
          ],
          "moss": [
            0.42,
            0.42,
            0.3
          ],
          "lichen": [
            1,
            0.76,
            0.51
          ],
          "paleLichen": [
            0.97,
            1,
            1
          ],
          "jointTone": [
            0.7,
            0.7,
            0.7
          ],
          "pit": [
            0.5,
            0.55,
            0.58
          ],
          "blockLo": 0.88,
          "blockHi": 1,
          "mottle": [
            0.86,
            0.86,
            0.87
          ],
          "light": [
            1,
            1,
            1
          ]
        },
        "carved": {
          "base": [
            0.92,
            0.92,
            0.92
          ],
          "groove": [
            0.42,
            0.42,
            0.44
          ],
          "ridge": [
            1,
            1,
            1
          ],
          "black": [
            0.55,
            0.55,
            0.56
          ],
          "bump": 0.06
        },
        "rubble": {
          "tile": 1.2,
          "bump": 0.03,
          "pit": [
            0.6,
            0.6,
            0.6
          ],
          "mottle": [
            0.86,
            0.86,
            0.86
          ],
          "dark": [
            0.68,
            0.68,
            0.68
          ]
        }
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
  // COLOR has to be carried too, and it is easy to forget: this function copied position, normal
  // and uv only, and the mosque's ribbed domes lost their green-and-pale striping the moment they
  // were merged with anything. The failure is silent -- the dome renders, in one flat colour -- and
  // took a wrong theory about sRGB gamma before the attribute list was read. Any input carrying a
  // colour means every input gets one, white where it had none.
  const anyColor = parts.some((g) => !!g.getAttribute('color'));
  const color = anyColor ? new Float32Array(total * 3).fill(1) : null;
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute('position'), n = g.getAttribute('normal'), t = g.getAttribute('uv');
    const c = g.getAttribute('color');
    for (let i = 0; i < p.count; i++) {
      position[(v + i) * 3] = p.getX(i); position[(v + i) * 3 + 1] = p.getY(i); position[(v + i) * 3 + 2] = p.getZ(i);
      if (n) { normal[(v + i) * 3] = n.getX(i); normal[(v + i) * 3 + 1] = n.getY(i); normal[(v + i) * 3 + 2] = n.getZ(i); }
      if (t) { uv[(v + i) * 2] = t.getX(i); uv[(v + i) * 2 + 1] = t.getY(i); }
      if (color && c) { color[(v + i) * 3] = c.getX(i); color[(v + i) * 3 + 1] = c.getY(i); color[(v + i) * 3 + 2] = c.getZ(i); }
    }
    v += p.count;
  }
  for (let i = 0; i < parts.length; i++) { if (temp[i]) parts[i].dispose(); geos[i].dispose(); }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(position, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  if (color) out.setAttribute('color', new THREE.BufferAttribute(color, 3));
  out.computeBoundingBox(); out.computeBoundingSphere();
  return out;
}

function boxAt(cx: number, cy: number, cz: number, w: number, h: number, d: number) {
  const g = new THREE.BoxGeometry(w, h, d); g.translate(cx, cy, cz); return g;
}
function boxes(list: number[][]) { return mergeGeos(list.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5]))); }
function cylAt(cx: number, cy: number, cz: number, rTop: number, rBot: number, h: number, seg = 16) {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, seg); g.translate(cx, cy, cz); return g;
}

/**
 * Revolve a profile about +Y. `pts` are [radius, y] in metres, bottom to top.
 *
 * This is the shape vocabulary the whole monumental set is built from -- a chedi's bell, a prang's
 * corn-cob taper, a dome, a ringed spire are all one profile each. Two things are worth stating
 * because both cost a rebuild to learn:
 *
 * - LatheGeometry is OPEN at top and bottom. A profile that does not close on the axis (radius 0)
 *   leaves a hole the turntable gate reads as background enclosed by the silhouette. Close it, or
 *   cap it with what sits above.
 * - RADIAL SEGMENT COUNT is the triangle budget's main lever here and it is per-lathe: a profile of
 *   n points at s segments is 2*(n-1)*s triangles. A 24-ring spire at 32 segments is 1,472
 *   triangles on its own, which is why the low-relief rings are a profile rather than 24 rings.
 */
function lathe(pts: number[][], seg: number, yOffset = 0): THREE.BufferGeometry {
  const v = pts.map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
  return g;
}

/** A stepped taper as a lathe profile: `rings` alternating out/in radii climbing from y0 to y1.
 *  One geometry, one draw call, and the step count is a profile-point count rather than a mesh
 *  count -- which is what keeps a 20-ring chedi spire inside a 32-geometry ceiling. */
function ringedTaper(y0: number, y1: number, r0: number, r1: number, rings: number, bulge: number): number[][] {
  const pts: number[][] = [];
  for (let i = 0; i <= rings; i++) {
    const t = i / rings;
    const y = y0 + (y1 - y0) * t;
    const r = r0 + (r1 - r0) * t;
    const step = (y1 - y0) / rings;
    pts.push([r + bulge, y]);
    pts.push([r + bulge, y + step * 0.45]);
    pts.push([r, y + step * 0.55]);
  }
  pts.push([r1, y1]);
  return pts;
}


/**
 * The REDENTED square plan -- a square whose four corners are cut back in two right-angled steps.
 * It is the plan of a Thai chedi's terrace and of a prang's base, and building it as a Shape that
 * is then extruded is not a stylistic choice: the obvious alternative, a wide box crossed by a
 * deep box, puts the two boxes' top faces in the same plane facing the same way over their whole
 * intersection, which z-fights. One extrusion of one closed plan has no interior coincidence at
 * all.
 *
 * `a` is the half-width across the flats; `r` is the depth of each redent step.
 */
function redentedShape(a: number, r: number): THREE.Shape {
  const quad = [[a, a - 2 * r], [a - r, a - 2 * r], [a - r, a - r], [a - 2 * r, a - r], [a - 2 * r, a]];
  const pts: number[][] = [];
  for (let k = 0; k < 4; k++) {
    for (const [x, z] of quad) {
      // rot90^k, applied k times: (x, z) -> (-z, x)
      let px = x, pz = z;
      for (let i = 0; i < k; i++) { const t = px; px = -pz; pz = t; }
      pts.push([px, pz]);
    }
  }
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
}

/** Extrude a plan Shape between two heights. ExtrudeGeometry builds along +Z, so the result is
 *  rotated onto +Y; `-Math.PI / 2` about X maps +Z to +Y and leaves the plan's own x as x. */
function extrudeSlab(shape: THREE.Shape, y0: number, y1: number): THREE.BufferGeometry {
  const g = new THREE.ExtrudeGeometry(shape, { depth: y1 - y0, bevelEnabled: false, curveSegments: 4 });
  // rotateX(-PI/2) maps (x, y, z) -> (x, z, -y), so the extrusion depth becomes height and the
  // plan's own second axis becomes -z. Every plan here is four-fold symmetric, so that sign is
  // immaterial; what matters is that the slab now runs UP from y=0 and needs lifting by y0.
  g.rotateX(-Math.PI / 2);
  g.translate(0, y0, 0);
  g.computeVertexNormals();
  return g;
}

/**
 * A square plan with a rectangular NOTCH cut into its +X face -- the stair well of a temple
 * terrace. Cutting the stair out of the plan rather than hanging it off the outside is what keeps
 * an asymmetric feature inside a symmetric declared envelope: a flight projecting past a 9 m
 * terrace would put the prop's bounding box off-centre and over its declared width on one side.
 */
function notchedSquare(a: number, notchHalfZ: number, xInner: number): THREE.Shape {
  const pts = [[a, -a], [a, -notchHalfZ], [xInner, -notchHalfZ], [xInner, notchHalfZ],
               [a, notchHalfZ], [a, a], [-a, a], [-a, -a]];
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
}

/**
 * A RECTANGULAR plan with a notch cut into its +Z face. The square version above is what a chedi or
 * a prang terrace needs; a hall that is twice as long as it is wide needs the two half-extents kept
 * apart, and its stair is on a short end rather than a long one.
 */
function notchedRect(hx: number, hz: number, nx: number, zInner: number): THREE.Shape {
  const pts = [[hx, -hz], [hx, hz], [nx, hz], [nx, zInner], [-nx, zInner], [-nx, hz], [-hx, hz], [-hx, -hz]];
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
}

/**
 * The cross-section of one roof tier, as a closed trapezoid in XY: eaves at (+-halfBase, y0)
 * rising at `pitch` (as a tangent) to a flat top at y1.
 *
 * Thai temple roofs nest, and that is the reason for the TRUNCATION. Three full gables at one
 * pitch cannot nest -- the widest tier's ridge would be the highest, which is upside down. What
 * actually happens is that each lower tier is cut off at the height where the next tier's eaves
 * begin, and its upper part is hidden behind that tier; only the topmost tier is a real gable,
 * closed by passing y1 at the apex.
 */
function tierProfile(halfBase: number, y0: number, y1: number, pitch: number): THREE.Shape {
  const inset = (y1 - y0) / pitch;
  const halfTop = halfBase - inset;
  const shape = new THREE.Shape();
  shape.moveTo(-halfBase, y0);
  shape.lineTo(halfBase, y0);
  if (halfTop > 0.02) {
    shape.lineTo(halfTop, y1);
    shape.lineTo(-halfTop, y1);
  } else {
    shape.lineTo(0, y0 + halfBase * pitch);   // a real ridge: the topmost tier closes to a point
  }
  shape.closePath();
  return shape;
}

/** Extrude a plan Shape along +Z between two depths, with no rotation -- the native direction of
 *  ExtrudeGeometry. Used where the profile genuinely lives in the XY plane, such as the raking
 *  triangle of a stair cheek. */
function extrudeAlongZ(shape: THREE.Shape, z0: number, z1: number): THREE.BufferGeometry {
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  g.computeVertexNormals();
  return g;
}

/** A rectangular plate whose head is a half-round arch, optionally carrying an arched aperture of
 *  the same form. The aperture arc is ALWAYS swept from angle 0 to PI: written the other way it
 *  runs under the circle instead of over it and leaves the arch head filled solid, which reads as
 *  a square window with a ghost arch drawn across it. */
function archedPlate(w: number, h: number, archR: number, spring: number,
                     hole?: { r: number, spring: number, sill: number }): THREE.Shape {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2, 0);
  shape.lineTo(w / 2, 0);
  shape.lineTo(w / 2, spring);
  shape.absarc(0, spring, archR, 0, Math.PI, false);
  shape.lineTo(-w / 2, spring);
  shape.closePath();
  if (hole) {
    const p = new THREE.Path();
    p.moveTo(hole.r, hole.sill);
    p.lineTo(hole.r, hole.spring);
    p.absarc(0, hole.spring, hole.r, 0, Math.PI, false);
    p.lineTo(-hole.r, hole.sill);
    p.closePath();
    shape.holes.push(p);
  }
  return shape;
}

/**
 * A HIP ROOF with a concave slope and upswept corners -- the East Asian roof, which none of the
 * other shape helpers here can express.
 *
 * It is generated as a ring of rectangles climbing from the eaves to the ridge rather than as an
 * extruded profile, because a hip slopes on all four sides: an extrusion gives vertical gable ends,
 * which is a different building.
 *
 * The horizontal shrink follows `(1 - t)^curveExp`, and the exponent must be ABOVE one. The slope
 * at any height is dy/dx, so a plan that shrinks FAST for a given rise is a shallow slope: with
 * q > 1 the derivative q(1-t)^(q-1) is large at the eaves and small at the ridge, which is shallow
 * eaves and a steep ridge -- the East Asian roof. Below one it is the other way round and builds a
 * flat-topped tent, which is what the first attempt here rendered. A linear shrink gives the
 * straight pyramid of a hip roof anywhere else in the world.
 *
 * `cornerLift` raises and pushes out the four eaves corners, tapering away by a third of the way
 * up. That upsweep is the single most identifying thing about the roof, and it is why the plan
 * half-width passed in must leave room: the corners end up further out than the eaves line.
 *
 * The result is a closed solid -- outer surface, a soffit `drop` below the eaves, and a fascia band
 * between them. An open shell would let the turntable gate read straight through the roof from any
 * low angle.
 */
function hipRoof(hx: number, hz: number, ridgeHalfZ: number, y0: number, y1: number,
                 curveExp: number, steps: number, drop: number, cornerLift: number): THREE.BufferGeometry {
  // EIGHT points per ring, not four: the four corners and the four edge midpoints. With four the
  // corner lift has nowhere to fall away to and raises the ENTIRE eaves line, which built a saddle
  // instead of a roof. The midpoints are what hold the eaves down between the corners.
  //
  // The order is (+x,-z), mid, (-x,-z), mid, (-x,+z), mid, (+x,+z), mid, which is counter-clockwise
  // seen from ABOVE -- the winding an upward-facing surface needs. Wound the other way the whole
  // roof renders inside out, which looks like a thin black membrane rather than a mistake.
  const ring = (t: number) => {
    const f = Math.pow(1 - t, curveExp);
    const g = Math.pow(Math.max(0, 1 - t / 0.34), 2);
    const lift = cornerLift * g, out = 1 + 0.045 * g;
    const ax = hx * f * out, az = (ridgeHalfZ + (hz - ridgeHalfZ) * f) * out;
    const y = y0 + (y1 - y0) * t;
    const c = (x: number, z: number) => [x, y + lift, z];
    const m = (x: number, z: number) => [x, y, z];
    return [c(ax, -az), m(0, -az), c(-ax, -az), m(-ax, 0),
            c(-ax, az), m(0, az), c(ax, az), m(ax, 0)];
  };
  const tri: number[] = [];
  const push = (a: number[], b: number[], c: number[]) => tri.push(...a, ...b, ...c);
  let prev = ring(0);
  for (let i = 1; i <= steps; i++) {
    const cur = ring(i / steps);
    for (let k = 0; k < 8; k++) {
      const k2 = (k + 1) % 8;
      push(prev[k], prev[k2], cur[k2]);
      push(prev[k], cur[k2], cur[k]);
    }
    prev = cur;
  }
  // Fascia band and soffit, so the roof is a solid rather than a shell. An open shell lets the
  // turntable gate read straight through the roof from any low angle.
  const e = ring(0);
  const low = e.map((p) => [p[0], p[1] - drop, p[2]]);
  for (let k = 0; k < 8; k++) {
    const k2 = (k + 1) % 8;
    push(low[k], e[k], e[k2]);
    push(low[k], e[k2], low[k2]);
  }
  for (let k = 1; k < 7; k++) push(low[0], low[k + 1], low[k]);   // soffit fan, facing down

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(tri), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((tri.length / 3) * 2), 2));
  g.computeVertexNormals();
  return g;
}

/**
 * A RIBBED dome -- a surface of revolution whose radius is modulated around the axis, so it reads
 * as the melon-ribbed dome of a mosque rather than a smooth hemisphere.
 *
 * LatheGeometry cannot do this: a lathe revolves one profile at one radius per height, and ribs are
 * a variation AROUND the axis, not along it. So the surface is generated directly, sampling
 * `1 + amp * cos(ribs * theta)` per sector. The ribs are the reason the dome is recognisable at the
 * distance a village skyline is read from -- a smooth green hemisphere reads as a water tank.
 */
function ribbedDome(profile: number[][], ribs: number, amp: number, seg: number,
                    valley?: number[], crest = 0.55): THREE.BufferGeometry {
  const tri: number[] = [];
  const col: number[] = [];
  // The ribs are not only a shape. On the mosque's domes the crests are pale and the valleys are
  // green, and that stripe is most of what the dome reads as at distance. It is carried as a
  // per-vertex MULTIPLIER off the same cosine that shapes the rib -- two measurements, the crest
  // colour on the material and the valley as the ratio between them -- so the striping costs an
  // attribute rather than a texture set or a second draw call.
  const tint = (j: number) => {
    if (!valley) return [1, 1, 1];
    // Raised to 0.55 rather than left linear. A cosine spends half its area near each extreme, and
    // that renders a dome that is pale overall where the plate's is green overall: the crest is a
    // narrow highlight on a real rib, not half of it. The exponent widens the valley.
    // `crest` below 0.55 narrows the pale crest further: the mosque's plate at 3x shows the pale
    // rib as about a quarter of the pitch, which is 0.35.
    const f = Math.pow((1 - Math.cos(ribs * ((j % seg) * Math.PI * 2 / seg))) / 2, crest);
    return [1 + (valley[0] - 1) * f, 1 + (valley[1] - 1) * f, 1 + (valley[2] - 1) * f];
  };
  const push = (a: number[], b: number[], c: number[]) => tri.push(...a, ...b, ...c);
  const at = (i: number, j: number) => {
    const th = (j % seg) * Math.PI * 2 / seg;
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
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(tri), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((tri.length / 3) * 2), 2));
  if (valley) g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(col), 3));
  g.computeVertexNormals();
  return g;
}

/**
 * A POINTED arch plate -- the two-centred arch of a mosque, not the half-round of a Roman one.
 * `archedPlate` above sweeps a single semicircle, which is the wrong arch here and reads as a
 * railway viaduct; this one runs each side up to a shared apex through a quadratic, which gives the
 * ogee point.
 */
function pointedArchShape(w: number, spring: number, apexRise: number, sill: number,
                          hole?: { w: number, spring: number, apexRise: number, sill: number }): THREE.Shape {
  const build = (target: THREE.Shape | THREE.Path, ww: number, sp: number, rise: number, sl: number) => {
    const hw = ww / 2;
    target.moveTo(hw, sl);
    target.lineTo(hw, sp);
    target.quadraticCurveTo(hw, sp + rise * 0.72, 0, sp + rise);
    target.quadraticCurveTo(-hw, sp + rise * 0.72, -hw, sp);
    target.lineTo(-hw, sl);
    target.closePath();
  };
  const shape = new THREE.Shape();
  build(shape, w, spring, apexRise, sill);
  if (hole) {
    const p = new THREE.Path();
    build(p, hole.w, hole.spring, hole.apexRise, hole.sill);
    shape.holes.push(p);
  }
  return shape;
}

/**
 * A TAPERING TUBE along +Z, built from a list of stations. Each station is
 * [z, centreX, centreY, radiusX, radiusY], and consecutive stations are joined by a ring of `seg`
 * points, so the radius, the centre and the ellipse ratio can all vary along the length.
 *
 * This is the only ORGANIC form in the whole kit, and it exists for one prop: a reclining figure is
 * a long soft mass whose section changes at every point along it -- shoulder to waist to hip to
 * calf -- and neither a lathe nor a stack of boxes can say that. A box decomposition of a lying
 * body is not a low-poly body, it is a pile of luggage.
 *
 * A station with a radius at or near zero closes the tube, so the ends can be capped by the
 * station list itself rather than by a separate fan.
 */
function tubeAlong(stations: number[][], seg: number): THREE.BufferGeometry {
  // INDEXED, with shared ring vertices, so computeVertexNormals averages across the quads and the
  // surface shades smooth. The first build emitted loose triangles, and a flat-shaded soft body
  // shows every station as a crease -- a reclining figure that looked crumpled rather than draped.
  const pos: number[] = [], idx: number[] = [];
  for (let i = 0; i < stations.length; i++) {
    const [z, cx, cy, rx, ry] = stations[i];
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      pos.push(cx + Math.sin(th) * rx, cy + Math.cos(th) * ry, z);
    }
  }
  for (let i = 0; i < stations.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = i * seg + j, b = (i + 1) * seg + j, c = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
      idx.push(a, b, c, a, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/**
 * A curled horn: `n` tapering box segments sampled along a sine, each rotated to its own tangent.
 * Shared by the ubosot's chofa, the prang's trident prongs and the Chinese shrine's flying eaves,
 * because all three are the same problem -- a straight spike at a roof end reads as a lightning rod
 * and the curl is the whole feature.
 */
function curledHorn(reach: number, rise: number, thick: number, n = 6): THREE.BufferGeometry {
  const segs: THREE.BufferGeometry[] = [];
  const at = (u: number) => [reach * Math.sin(u * Math.PI * 0.46), rise * u];
  for (let j = 0; j < n; j++) {
    const a = at(j / n), b = at((j + 1) / n);
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const w = thick * (1 - j / n) + thick * 0.28;
    const g = new THREE.BoxGeometry(w, Math.hypot(dx, dy) + thick * 0.2, w);
    g.rotateZ(Math.atan2(-dx, dy));
    g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 0);
    segs.push(g);
  }
  return mergeGeos(segs);
}

/**
 * Ramp a per-vertex tint over a height band, as a MULTIPLIER on the material colour.
 *
 * This is how a local material override gets delivered on a merged component that is one mesh and
 * must stay one draw call: a second material would cost a submission and a shader switch to say
 * that the bottom of a wall is dirtier than the top. `rgb0` is the measured tint at y0 expressed
 * as a fraction of the material's own measured albedo, so the top of the band is untinted 1.0 and
 * the numbers below stay traceable to two crop measurements rather than to a chosen darkening.
 */
function tintByHeight(geo: THREE.BufferGeometry, y0: number, y1: number, rgb0: number[]): void {
  const p = geo.getAttribute('position');
  const col = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) {
    const t = Math.min(1, Math.max(0, (p.getY(i) - y0) / (y1 - y0)));
    for (let c = 0; c < 3; c++) col[i * 3 + c] = rgb0[c] + (1 - rgb0[c]) * t;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
}

/* ------------------------------------------------------------------ materials */

/**
 * Every material is declared `textureless` in the sculpt spec, so no procedural texture set is
 * synthesised. That matters twice. Speed: makeProceduralTextureSet writes FIVE canvases per
 * material pixel by pixel in JavaScript, at a cost that is the SQUARE of the resolution.
 * Correctness: whenever a texture set exists the generator forces color to white and roughness
 * to 1 and reads both back from the generated maps, discarding the measured albedo.
 *
 * Metalness is capped well below physical for the gilded surfaces. The thaikit harness supplies a
 * hemisphere light and three directionals and NO environment map, and a metal with nothing to
 * reflect renders black -- which on a gold finial is the whole feature lost. The albedo stays
 * measured; the metalness is what is wrong for this rig.
 */
function buildMaterials(options: ProceduralModelOptions): Record<string, THREE.MeshStandardMaterial> {
  const map: Record<string, THREE.MeshStandardMaterial> = {};
  for (const s of CONFIG.materials as any[]) {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(s.color),
      roughness: s.roughness,
      metalness: s.metalness,
      wireframe: options.wireframe ?? false,
      side: s.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
      vertexColors: s.vertexColors === true,
    });
    if (s.envMapIntensity !== undefined) m.envMapIntensity = s.envMapIntensity;
    if (s.opacity !== undefined) { m.transparent = true; m.opacity = s.opacity; m.depthWrite = true; }
    m.name = s.id;
    map[s.id] = m;
  }
  return map;
}

/* ------------------------------------------------------------------ the model */

export function createKhmerStoneSanctuaryModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Khmer Stone Sanctuary';

  const materials = buildMaterials(options);
  const nodes: Record<string, THREE.Object3D> = {};
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;

  /**
   * A material with `vertexColors` reads a `color` attribute out of EVERY geometry bound to it, and
   * a geometry that has none hands the shader an undefined attribute -- which comes back as
   * (0, 0, 0) and renders the mesh BLACK. That is not a hypothetical: the ubosot's wall body and
   * its eight boundary stones shipped as black silhouettes from one tinted platform sharing their
   * stone material, and the failure is silent because the tinted component itself looks perfect.
   *
   * An InstancedMesh hides it -- it falls back to instanceColor and comes out white -- so the same
   * mistake on the chedi's niche frames rendered correctly and taught nothing. Guard it here, once,
   * for every geometry: no color attribute and a vertexColors material means fill with white.
   */
  function guardVertexColors(geo: THREE.BufferGeometry, mat: THREE.MeshStandardMaterial) {
    if (!mat || !mat.vertexColors || geo.getAttribute('color')) return;
    const n = geo.getAttribute('position').count;
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
  }

  function add(id: string, name: string, geo: THREE.BufferGeometry, matId: string) {
    const node = new THREE.Group(); node.name = name + '__node';
    guardVertexColors(geo, materials[matId]);
    const mesh = new THREE.Mesh(geo, materials[matId]);
    mesh.name = name; mesh.castShadow = castShadow; mesh.receiveShadow = receiveShadow;
    node.add(mesh); root.add(node);
    nodes[id] = node; meshes[id] = mesh; colliders[id] = null;
    return mesh;
  }
  function addInst(id: string, name: string, geo: THREE.BufferGeometry, matId: string, mats: THREE.Matrix4[], cols?: number[]) {
    const node = new THREE.Group(); node.name = name + '__node';
    guardVertexColors(geo, materials[matId]);
    const inst = new THREE.InstancedMesh(geo, materials[matId], mats.length);
    inst.name = name; inst.castShadow = castShadow; inst.receiveShadow = receiveShadow;
    for (let i = 0; i < mats.length; i++) inst.setMatrixAt(i, mats[i]);
    if (cols) {
      // setColorAt MULTIPLIES with material.color, so an instanced material carrying per-instance
      // tones must be white or every tone comes out darkened by the base.
      const c = new THREE.Color();
      for (let i = 0; i < cols.length; i++) inst.setColorAt(i, c.setHex(cols[i]));
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    }
    inst.instanceMatrix.needsUpdate = true;
    node.add(inst); root.add(node);
    nodes[id] = node; meshes[id] = inst as unknown as THREE.Mesh; colliders[id] = null;
    return inst;
  }
  /** Four instances at 90-degree yaw about the axis -- the corner/face repetition that every
   *  building in this set uses for niches, finials, boundary stones and corner domes. */
  function quad(radius: number, y: number, phase = 0): THREE.Matrix4[] {
    return [0, 1, 2, 3].map((i) => {
      const a = phase + i * Math.PI / 2;
      return new THREE.Matrix4().compose(
        new THREE.Vector3(Math.sin(a) * radius, y, Math.cos(a) * radius),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), a),
        new THREE.Vector3(1, 1, 1));
    });
  }

  const G = CONFIG.geometry as any;


  /** Box-project UVs by each vertex's dominant normal axis, in metres over the tile size, so the
   *  coursing tile lands at true block scale and lines up across every merged part. */
  function boxUv(geo: THREE.BufferGeometry, tile: number): void {
    const p = geo.getAttribute('position'), n = geo.getAttribute('normal');
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
      let u: number, v: number;
      if (ay >= ax && ay >= az) { u = p.getX(i); v = p.getZ(i); }
      else if (ax >= az) { u = p.getZ(i); v = p.getY(i); }
      else { u = p.getX(i); v = p.getY(i); }
      out[i * 2] = u / tile; out[i * 2 + 1] = v / tile;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(out, 2));
  }
  /** Per-vertex tint by FACING: one display-space ratio for upward faces, another for the rest,
   *  raised to 2.2 because vertex colours multiply in linear space. */
  function tintByFacing(geo: THREE.BufferGeometry, side: number[], top: number[]): void {
    const p = geo.getAttribute('position'), n = geo.getAttribute('normal');
    const col = new Float32Array(p.count * 3);
    const lin = (t: number[]) => t.map((v) => Math.pow(v, 2.2));
    const S = lin(side), T = lin(top);
    for (let i = 0; i < p.count; i++) {
      const up = n.getY(i) > 0.7 ? T : S;
      col[i * 3] = up[0]; col[i * 3 + 1] = up[1]; col[i * 3 + 2] = up[2];
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  }
  /** Split a non-indexed geometry into its up-facing triangles and the rest, so the ledge tops can
   *  take their own material. Triangles are whole: a face never straddles the split. */
  function splitByFacing(geo: THREE.BufferGeometry): [THREE.BufferGeometry, THREE.BufferGeometry] {
    const p = geo.getAttribute('position'), n = geo.getAttribute('normal'), t = geo.getAttribute('uv');
    const c = geo.getAttribute('color');
    const pick = (up: boolean) => {
      const P: number[] = [], N: number[] = [], U: number[] = [], C: number[] = [];
      for (let i = 0; i < p.count; i += 3) {
        const ny = (n.getY(i) + n.getY(i + 1) + n.getY(i + 2)) / 3;
        if ((ny > 0.7) !== up) continue;
        for (let k = i; k < i + 3; k++) {
          P.push(p.getX(k), p.getY(k), p.getZ(k)); N.push(n.getX(k), n.getY(k), n.getZ(k));
          if (t) U.push(t.getX(k), t.getY(k));
          if (c) C.push(c.getX(k), c.getY(k), c.getZ(k));
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(P), 3));
      g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(N), 3));
      if (t) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(U), 2));
      if (c) g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(C), 3));
      g.computeBoundingBox(); g.computeBoundingSphere();
      return g;
    };
    return [pick(false), pick(true)];
  }
  /** The Khmer plan: four-fold, each face carrying a stepped CORNER BUNDLE (two steps of s and a
   *  pilaster of pw, all at the full half-extent a), a wall RECESSED by rd between the bundle and
   *  the door bay, and the door BAY of half-width bw standing at a again. The +Z face may also
   *  carry the real doorway's NOTCH (half-width nw, depth nd) cut into the bay. One closed
   *  polygon per slab, so there is no interior coincidence anywhere in the mass. The ordering
   *  follows the preamble's redentedShape: the corner group starts on the +X face and the whole
   *  group is rotated (x, z) -> (-z, x) three more times. extrudeSlab maps the plan's +y onto
   *  world -z, so the notch goes on the k = 2 face to land on world +Z. */
  function khmerPlan(a: number, s: number, pw: number, rd: number, bw: number,
                     notch?: { nw: number, nd: number }): THREE.Shape {
    const p = a - 2 * s - pw;
    const group: number[][] = [
      [a, a - 2 * s], [a - s, a - 2 * s], [a - s, a - s], [a - 2 * s, a - s], [a - 2 * s, a],
      [p, a], [p, a - rd], [bw, a - rd], [bw, a],
    ];
    const tail: number[][] = [[-bw, a], [-bw, a - rd], [-p, a - rd], [-p, a]];
    const pts: number[][] = [];
    for (let k = 0; k < 4; k++) {
      const seq = (k === 2 && notch)
        ? group.concat([[notch.nw, a], [notch.nw, a - notch.nd], [-notch.nw, a - notch.nd], [-notch.nw, a]], tail)
        : group.concat(tail);
      for (const [x, z] of seq) {
        let px = x, pz = z;
        for (let i = 0; i < k; i++) { const t = px; px = -pz; pz = t; }
        pts.push([px, pz]);
      }
    }
    const shape = new THREE.Shape();
    shape.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
    shape.closePath();
    return shape;
  }
  /** Atlas UVs for a relief plate: the +Z face maps into one v band of the carved atlas across
   *  its full width; every other face box-projects into the plain band, wrapping on u only. */
  function atlasUv(geo: THREE.BufferGeometry, band: number[], plain: number[], tile: number): void {
    geo.computeBoundingBox();
    const bb = geo.boundingBox!;
    const p = geo.getAttribute('position'), n = geo.getAttribute('normal');
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      if (n.getZ(i) > 0.7) {
        out[i * 2] = (p.getX(i) - bb.min.x) / (bb.max.x - bb.min.x);
        out[i * 2 + 1] = band[0] + (p.getY(i) - bb.min.y) / (bb.max.y - bb.min.y) * (band[1] - band[0]);
      } else {
        const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i));
        const u = ay > 0.7 ? p.getX(i) : (ax > 0.7 ? p.getZ(i) : p.getX(i));
        const v = ay > 0.7 ? p.getZ(i) : p.getY(i);
        out[i * 2] = u / tile;
        out[i * 2 + 1] = plain[0] + ((v / tile) % 1 + 1) % 1 * (plain[1] - plain[0]);
      }
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(out, 2));
  }
  /** A grass tuft: five tapering blades at 72 degrees, each leaning sideways in its own plane so
   *  the tuft splays like dry grass rather than closing to a cone. Ten triangles. */
  function tuftGeo(w: number, h: number): THREE.BufferGeometry {
    const pos: number[] = [], nor: number[] = [], uv: number[] = [];
    for (let k = 0; k < 5; k++) {
      const a = k * Math.PI * 2 / 5, c = Math.cos(a), s = Math.sin(a);
      const lean = (k % 2 ? 1 : -1) * w * (0.6 + 0.25 * (k % 3)), hh = h * (0.75 + 0.12 * ((k * 7) % 3));
      const q = [[-w / 2, 0], [w / 2, 0], [lean + w / 12, hh * 0.96], [lean - w / 12, hh]];
      const tri = [q[0], q[1], q[2], q[0], q[2], q[3]];
      for (const [x, y] of tri) { pos.push(x * c, y, -x * s); nor.push(s, 0, c); uv.push(0.5, y / h); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
    g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(nor), 3));
    g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uv), 2));
    return g;
  }
  const mat4 = (x: number, y: number, z: number, yaw: number, sx = 1, sy = 1, sz = 1, tx = 0, tz = 0) =>
    new THREE.Matrix4().compose(new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(tx, yaw, tz)), new THREE.Vector3(sx, sy, sz));
  const rng = (seed: number) => () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const SAND = G.wear.sandstone, PL = G.plan;
  const ledgeTops: THREE.BufferGeometry[] = [];
  const plan = (a: number, k: number, notch?: { nw: number, nd: number }) =>
    khmerPlan(a, PL.s * k, PL.pw * k, PL.rd * k, PL.bw * k, notch);
  /** The whole prop is authored with the tower at the origin and the stair bay on +Z; the bounding
   *  box then runs -5.30..+6.70 in z, so every node is shifted by ZO at the end to centre it. */
  const ZO = -0.70;

  /* ---------------------------------------------------------------- laterite platform
   * Two square courses, a projecting stair bay with two cheeks and five treads, and two door steps
   * -- all the same red laterite and therefore ONE component and ONE draw call. The enclosure wall
   * is a separate INSTANCED component because it is made of individual blocks. */
  {
    const B = G.bay;
    const parts: THREE.BufferGeometry[] = (G.platform as number[][]).map(
      ([y0, y1, a]) => boxAt(0, (y0 + y1) / 2, 0, a * 2, y1 - y0, a * 2));
    // stair bay cheeks, tops a few millimetres UNDER the platform top so no two tops share a plane
    const bl = B.z1 - B.z0, top = (G.platform as number[][])[1][1];
    for (const s of [-1, 1]) {
      parts.push(boxAt(s * (B.halfW - B.cheek / 2), (top - 0.03) / 2, B.z0 + bl / 2 - 0.005, B.cheek, top - 0.03, bl - 0.01));
    }
    // treads between the cheeks, each occupying its own going, rising to the platform top
    const run = bl / B.steps, rise = top / B.steps, tw = (B.halfW - B.cheek) * 2;
    for (let i = 0; i < B.steps; i++) {
      const z1 = B.z1 - i * run, h = (i + 1) * rise - 0.003 * (B.steps - 1 - i);
      parts.push(boxAt(0, h / 2, z1 - run / 2, tw, h, run));
    }
    const geo = mergeGeos(parts);
    // Ground dirt and the darker weathering of the lower course, as a per-vertex tint.
    tintByHeight(geo, 0, 1.38, [0.76, 0.77, 0.78]);
    boxUv(geo, G.wear.laterite.tile);
    add('platform', 'Laterite platform and stair', geo, 'laterite');
    colliders['platform'] = {
      shape: 'box', localCenter: [0, 4.5, -ZO], halfExtents: [5.3, 4.5, 6.0],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level '
           + 'builder collides with the sanctuary, not with its fallen blocks.',
    };
  }

  /* ---------------------------------------------------------------- enclosure wall
   * Two courses of individual laterite blocks around the platform edge, in running bond, broken
   * at the stair head and missing every ninth block or so -- one InstancedMesh, one geometry, and
   * the plate's chunky broken wall rather than a box with a brick texture on it. */
  {
    const W = G.wall;
    const r = rng(20260902);
    const unit = boxAt(0, 0, 0, 1.0, W.course, W.thick);
    // Each block samples ONE cell of the coursing tile -- its own block, arris and pits -- rather
    // than a box-projected cut through several: the first render's wall read as brickwork.
    {
      const P = G.wear.laterite, cols = Math.round(P.tile / P.block), rows = Math.round(P.tile / P.course);
      const p = unit.getAttribute('position'), n = unit.getAttribute('normal'), uv = unit.getAttribute('uv');
      const r0 = rng(77);
      for (let i = 0; i < p.count; i += 4) {
        const col = Math.floor(r0() * cols), row = Math.floor(r0() * rows);
        for (let k = i; k < i + 4; k++) {
          uv.setXY(k, (col + 0.04 + 0.92 * uv.getX(k)) / cols, (row + 0.06 + 0.88 * uv.getY(k)) / rows);
        }
      }
      uv.needsUpdate = true;
    }
    const mats: THREE.Matrix4[] = [], cols: number[] = [];
    const c = W.outer - W.thick / 2;      // centre line of the wall
    const half = W.outer;                 // side runs carry the corners
    const inner = W.outer - W.thick;      // front and back runs stop between them
    for (let course = 0; course < W.courses; course++) {
      const y = W.y0 + W.course * (course + 0.5) - 0.002 * course;
      for (const side of ['+x', '-x', '+z', '-z']) {
        const long = side[1] === 'x';
        const lim = long ? half : inner;
        let pos = -lim + (course % 2 ? 0.55 : 0) * r();
        while (pos < lim - 0.3) {
          let len = W.len[0] + (W.len[1] - W.len[0]) * r();
          if (pos + len > lim) len = lim - pos;
          const mid = pos + len / 2;
          pos += len + 0.03;
          // the gap at the stair head, and the odd block gone
          if (side === '+z' && Math.abs(mid) < W.gapHalf) continue;
          if (r() < 0.09 && course === 1) continue;
          if (r() < 0.04) continue;
          const sign = side[0] === '+' ? 1 : -1;
          const x = long ? sign * c : mid, z = long ? mid : sign * c;
          const yaw = (long ? Math.PI / 2 : 0) + (r() - 0.5) * 0.06;
          const sy = 0.94 + 0.08 * r();
          mats.push(mat4(x + (r() - 0.5) * 0.03, y - (1 - sy) * W.course / 2, z + (r() - 0.5) * 0.03, yaw,
                         len - 0.05, sy, 0.94 + 0.08 * r(), (r() - 0.5) * 0.03, (r() - 0.5) * 0.03));
          cols.push(W.tones[Math.floor(r() * W.tones.length)]);
        }
      }
    }
    addInst('enclosure', 'Enclosure wall blocks', unit, 'lateriteBlock', mats, cols);
  }

  /* ---------------------------------------------------------------- sanctuary tower
   * Plinth, body, entablature, first tier and its cap, all sandstone and all ONE component. The
   * plan is the Khmer plan above, one closed polygon per slab. The body is split at the door head:
   * the lower slab carries the doorway's notch on +Z, the upper does not, and they meet as an
   * opposed butt under the lintel. */
  {
    const B = G.body, D = G.door, T1 = G.tier1, C1 = G.tier1cap, T2 = G.tier2;
    const parts: THREE.BufferGeometry[] = [];
    for (const [y0, y1, a] of G.plinth as number[][]) parts.push(extrudeSlab(plan(a, 1.06), y0, y1));
    parts.push(extrudeSlab(plan(B.a, 1.0, { nw: D.w / 2, nd: D.recess }), B.y0, D.head));
    parts.push(extrudeSlab(plan(B.a, 1.0), D.head, B.y1));
    for (const [y0, y1, a] of G.cornice as number[][]) parts.push(extrudeSlab(plan(a, 1.08), y0, y1));
    parts.push(extrudeSlab(plan(T1.a, 0.9), T1.y0, T1.y1));
    parts.push(extrudeSlab(plan(C1.a, 0.9), C1.y0, C1.y1));
    parts.push(extrudeSlab(plan(T2.a, 0.8), T2.y0, T2.y1));
    // The two door steps in front of the +Z plinth, running back INTO it.
    for (const [top, going] of D.steps as number[][]) {
      const pa = (G.plinth as number[][])[0][2];
      const pt = (G.plinth as number[][])[0][0];
      parts.push(boxAt(0, (pt + top) / 2, pa + going / 2 - 0.15, D.w + 1.30, top - pt, going + 0.30));
    }
    // Corner blocks -- acroteria -- on the cap ledge, on the three corners still standing. They
    // sit on the ledge square inside the cap's corner step (cut back to 2.46), outside the second
    // tier's own corner step (2.01), so each stands on cap and not on air.
    {
      const c = C1.corner, o = C1.a - 2 * PL.s * 0.9 - c / 2 - 0.01;
      for (const [sx, sz] of [[1, 1], [-1, 1], [-1, -1]]) {
        parts.push(boxAt(sx * o, C1.y1 + c / 2, sz * o, c, c, c));
      }
    }
    const geo = mergeGeos(parts);
    boxUv(geo, SAND.tile);
    tintByFacing(geo, SAND.side, SAND.crust);
    // The ledge tops -- plinth, every entablature band, both tiers, the cap -- go to the ledge
    // material with the broken tier's tops; the sides stay on the streaked sandstone.
    const [sides, tops] = splitByFacing(geo);
    add('tower', 'Sanctuary tower and roof tiers', sides, 'sandstone');
    ledgeTops.push(tops);
  }

  /* ---------------------------------------------------------------- collapsed top tier
   * The second tier is authored as a PARTIAL ring with the (+X, -Z) corner gone -- the same corner
   * whose acroterion is missing below it and whose blocks lie on the ledges and the platform. */
  {
    const R = G.brokenTier;
    const h = R.y1 - R.y0, t = R.t, a = R.a, ai = a - t;
    const geo = mergeGeos([
      boxAt(-(a - t / 2), R.y0 + h / 2, 0, t, h, a * 2),                          // -X, full
      boxAt(0, R.y0 + h / 2, a - t / 2, ai * 2, h, t),                            // +Z, between
      boxAt(a - t / 2, R.y0 + h * 0.36, (a - 0.3) / 2, t, h * 0.72, a + 0.3),      // +X, stops at z=-0.3
      boxAt((-ai + 1.0) / 2, R.y0 + h * 0.43, -(a - t / 2), ai + 1.0, h * 0.86, t),   // -Z, stops at x=+1.0
    ]);
    boxUv(geo, SAND.tile);
    tintByFacing(geo, SAND.side, SAND.crust);
    const [sides, tops] = splitByFacing(geo);
    add('broken-tier', 'Collapsed top tier', sides, 'sandstone');
    ledgeTops.push(tops);
    add('ledges', 'Ledge tops', mergeGeos(ledgeTops), 'ledge');
  }

  /* ---------------------------------------------------------------- door aedicules
   * Four faces, each with the Khmer door surround: two RINGED COLONNETTES on square bases standing
   * in front of plain jambs. The lintel and pediment are a separate instanced unit on the carved
   * material. The same unit, non-uniformly scaled, is each roof tier's miniature aedicule on all
   * four faces: twelve instances of one geometry. */
  const face = G.body.a;
  const D = G.door;
  const tierMats = ((): THREE.Matrix4[] => {
    const out: THREE.Matrix4[] = [];
    for (const T of [G.tier1, G.tier2]) {
      const s = T.aed;
      // the unit's wall plane is at z = face; scaled by sz it lands at face * sz, so the instance
      // is pushed out to the tier's own face
      const rad = T.a - face * s.sz;
      const y = T.y0 - D.sill * s.sy - 0.02;
      for (let i = 0; i < 4; i++) {
        const a = i * Math.PI / 2;
        out.push(mat4(Math.sin(a) * rad, y, Math.cos(a) * rad, a, s.sx, s.sy, s.sz));
      }
    }
    return out;
  })();
  {
    const hw = D.w / 2 + D.jamb;
    const hF = D.head - D.sill + 0.06;
    const yF = D.sill - 0.06 + hF / 2;
    const parts: THREE.BufferGeometry[] = [
      // jambs, proud of the body face, standing on the plinth top and running 6 cm into it
      boxAt(-(D.w / 2 + D.jamb / 2), yF, face + D.jambProud / 2 - 0.01, D.jamb, hF, D.jambProud + 0.02),
      boxAt(D.w / 2 + D.jamb / 2, yF, face + D.jambProud / 2 - 0.01, D.jamb, hF, D.jambProud + 0.02),
    ];
    // Colonnettes: an engaged column each side on a square base with a square capital and five
    // ring collars -- the plate's most recognisable door feature. Twelve segments.
    for (const s of [-1, 1]) {
      const x = s * D.col.x, z = face + D.col.proud - D.col.r;
      const b = D.col.ring * 2.1;
      parts.push(boxAt(x, D.sill + 0.12, z, b, 0.24, b));
      parts.push(cylAt(x, D.sill + 0.24 + (hF - 0.30 - 0.24) / 2, z, D.col.r, D.col.r, hF - 0.30 - 0.24, 12));
      for (const y of [2.62, 3.02, 3.42, 3.82]) parts.push(cylAt(x, y, z, D.col.ring, D.col.ring, 0.09, 12));
      parts.push(boxAt(x, D.head - 0.10, z, b * 0.95, 0.20, b * 0.95));
    }
    const unit = mergeGeos(parts);
    boxUv(unit, SAND.tile);
    tintByFacing(unit, SAND.side, SAND.side);
    addInst('door-frames', 'Door colonnettes and jambs', unit, 'sandstone', quad(0, 0).concat(tierMats));

    // Lintel and pediment on the CARVED material. The lintel is a deep beam across the jambs; the
    // pediment a tall pointed panel standing on it. Each front face maps to its own band of the
    // relief atlas.
    const L = D.lintel, P = D.pediment;
    const lintel = boxAt(0, (L.y0 + L.y1) / 2, face + L.proud / 2 - 0.02, L.w, L.y1 - L.y0, L.proud + 0.04);
    atlasUv(lintel, [0.78, 0.98], [0.02, 0.36], 1.0);
    const sh = new THREE.Shape();
    const w = P.w / 2, y0 = P.y0, y1 = P.y1;
    sh.moveTo(-w, y0); sh.lineTo(w, y0); sh.lineTo(w, y0 + (y1 - y0) * 0.42);
    sh.lineTo(w * 0.72, y0 + (y1 - y0) * 0.66); sh.lineTo(w * 0.38, y0 + (y1 - y0) * 0.88); sh.lineTo(0, y1);
    sh.lineTo(-w * 0.38, y0 + (y1 - y0) * 0.88); sh.lineTo(-w * 0.72, y0 + (y1 - y0) * 0.66); sh.lineTo(-w, y0 + (y1 - y0) * 0.42);
    sh.closePath();
    const ped = extrudeAlongZ(sh, face - 0.04, face + P.proud);
    atlasUv(ped, [0.40, 0.76], [0.02, 0.36], 1.0);
    const carvedUnit = mergeGeos([lintel, ped]);
    addInst('lintels', 'Carved lintels and pediments', carvedUnit, 'carved', quad(0, 0).concat(tierMats));

    // THREE blind doors on the body and four on each tier. The blind leaves stand proud of the
    // bay face between the jambs with a central rib -- the closed leaves of a Khmer false door.
    const hB = D.head - D.sill - 0.04;
    const blind = mergeGeos([
      boxAt(0, D.sill + hB / 2 + 0.01, face + 0.05, D.w - 0.02, hB, 0.10),
      boxAt(0, D.sill + hB / 2 + 0.04, face + 0.10, 0.26, hB - 0.30, 0.10),
      boxAt(0, D.sill + hB * 0.55, face + 0.10, D.w - 0.30, 0.14, 0.10),
    ]);
    boxUv(blind, SAND.tile);
    tintByFacing(blind, SAND.side, SAND.side);
    addInst('blind-doors', 'Blind door panels', blind, 'sandstone', quad(0, 0).slice(1).concat(tierMats));

    // The one real doorway: a dark cell at the BACK of the recess cut into the body. The recess
    // is real -- its reveals are the body's own stone -- and the void panel fills its rear half.
    const hV = D.head - D.sill - 0.02;
    add('doorway', 'Cell interior', boxAt(0, D.sill + hV / 2 + 0.005, face - D.recess + 0.30, D.w - 0.02, hV, 0.56), 'void');
  }

  /* ---------------------------------------------------------------- fallen blocks
   * Thirty-six blocks as ONE InstancedMesh: a heap on the truncated top, the slide of the fallen
   * corner down the ledges, and the scatter across the platform. Every placement is AUTHORED. */
  {
    const U = G.blocks.unit as number[];
    const unit = boxAt(0, 0, 0, U[0], U[1], U[2]);
    boxUv(unit, G.wear.rubble.tile);
    const list = G.blocks.list as number[][];
    // restY is the surface the block lies on; each block is sunk a few DISTINCT millimetres so
    // no two undersides share a plane with each other or with the tower's base.
    const mats = list.map(([x, ry, z, yaw, tx, tz, sx, sy, sz], i) =>
      mat4(x, ry + U[1] * sy / 2 - 0.004 * (1 + (i % 9)) - 0.0013 * ((i * 7) % 5), z, yaw, sx, sy, sz, tx, tz));
    const tones = G.blocks.tones as number[];
    addInst('fallen-blocks', 'Fallen blocks', unit, 'pale', mats, list.map((b) => tones[b[9]]));
  }

  /* ---------------------------------------------------------------- grass tufts
   * Twenty-four tufts in the joints, on the ledges and on the wall tops: six triangles each, one
   * geometry, one draw call. The plate's ruin is overgrown at every ledge. */
  {
    const unit = tuftGeo(0.30, 0.34);
    // sunk a distinct 2-3 cm each, so no tuft's base shares a plane with a block's underside
    const mats = (G.tufts as number[][]).map(([x, y, z, s, yaw], i) => mat4(x, y - 0.015 - 0.0023 * (i % 7), z, yaw, s, s * (0.85 + 0.03 * (i % 6)), s));
    addInst('tufts', 'Grass tufts', unit, 'grass', mats);
  }

  /* ---------------------------------------------------------------- weathering
   * Four Canvas 2D tiles assigned AFTER material construction: laterite coursing with deep joints,
   * eroded arrises and vesicular pitting; sandstone ashlar with cloudy drift, grain, heavy black
   * washes, orange and pale lichen; the carved relief atlas; rubble mottle. Each is a MULTIPLIER on
   * the material colour, bound as both map and bumpMap. The sandstone's lichens are BRIGHTER than
   * the clean stone, so that material is re-based to their per-channel envelope and the clean
   * stone painted as a ratio of it, on LINEAR components. Under Node there is no canvas and the
   * materials keep their flat measured colours. */
  {
    const W = G.wear;
    const hasDom = typeof document !== 'undefined' && typeof (document as any).createElement === 'function';
    const size = Math.min(W.size, options.textureSize ?? W.size);
    const css = (t: number[], a: number) =>
      'rgba(' + Math.round(t[0] * 255) + ',' + Math.round(t[1] * 255) + ',' + Math.round(t[2] * 255) + ',' + a + ')';

    function makeTile(seed: number, draw: (ctx: CanvasRenderingContext2D, r: () => number, S: number,
                                           wrapped: (fn: () => void) => void) => void): HTMLCanvasElement | null {
      if (!hasDom) return null;
      const cv = document.createElement('canvas');
      cv.width = cv.height = size;
      const ctx = cv.getContext('2d', { willReadFrequently: true } as any);
      if (!ctx) return null;
      const S = size;
      const wrapped = (fn: () => void) => {
        for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
          ctx.save(); ctx.translate(ox * S, oy * S); fn(); ctx.restore();
        }
      };
      draw(ctx, rng(seed), S, wrapped);
      return cv;
    }

    /** Ashlar coursing in running bond: jittered quadrilaterals over a joint-coloured ground, each
     *  block its own tone, and an eroded ARRIS drawn as a translucent inner stroke. */
    const coursing = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                      P: any, edge?: number[], edgeW = 0) => {
      const rows = Math.round(P.tile / P.course), cols = Math.round(P.tile / P.block);
      const ch = S / rows, bw = S / cols, j = P.joint / 2;
      ctx.fillStyle = css(P.jointTone, 1); ctx.fillRect(0, 0, S, S);
      const blocks: { p: Path2D, tone: number[] }[] = [];
      for (let row = 0; row < rows; row++) {
        const off = (row % 2) * bw / 2;
        for (let col = 0; col < cols; col++) {
          const x0 = col * bw + off + j, x1 = x0 + bw - 2 * j, y0 = row * ch + j, y1 = y0 + ch - 2 * j;
          const q = () => (r() - 0.5) * P.joint * 0.9;
          const p = new Path2D();
          p.moveTo(x0 + q(), y0 + q()); p.lineTo(x1 + q(), y0 + q());
          p.lineTo(x1 + q(), y1 + q()); p.lineTo(x0 + q(), y1 + q()); p.closePath();
          const t = P.blockLo + (P.blockHi - P.blockLo) * r();
          blocks.push({ p, tone: [t, t * (0.96 + 0.04 * r()), t * (0.94 + 0.06 * r())] });
        }
      }
      wrapped(() => {
        for (const b of blocks) { ctx.fillStyle = css(b.tone, 1); ctx.fill(b.p); }
        if (edge) {
          ctx.lineWidth = edgeW; ctx.lineJoin = 'round';
          ctx.strokeStyle = css(edge, 0.55);
          for (const b of blocks) ctx.stroke(b.p);
          ctx.lineWidth = edgeW * 2.2; ctx.strokeStyle = css(edge, 0.22);
          for (const b of blocks) ctx.stroke(b.p);
        }
      });
    };
    const blotch = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                    tone: number[], count: number, rad: number, alpha: number) => {
      for (let i = 0; i < count; i++) {
        const halo = new Path2D(), core = new Path2D();
        let cx = r() * S, cy = r() * S, a = r() * Math.PI * 2;
        const R = rad * S * (0.5 + r()), n = 8 + Math.floor(r() * 16);
        for (let k = 0; k < n; k++) {
          a += (r() - 0.5) * 2.2;
          cx += Math.cos(a) * R * 0.4; cy += Math.abs(Math.sin(a)) * R * 0.4;
          const rr = R * (0.35 + 0.5 * r());
          halo.moveTo(cx + rr, cy); halo.arc(cx, cy, rr, 0, Math.PI * 2);
          core.moveTo(cx + rr * 0.6, cy); core.arc(cx, cy, rr * 0.6, 0, Math.PI * 2);
        }
        const al = alpha * (0.6 + 0.4 * r());
        wrapped(() => {
          ctx.fillStyle = css(tone, al * 0.55); ctx.fill(halo);
          ctx.fillStyle = css(tone, al * 0.45); ctx.fill(core);
        });
      }
    };
    /** Pits: small dark ellipses, the vesicles of laterite and the pocking of old sandstone. */
    const pits = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                  tone: number[], count: number, maxPx: number, alpha: number) => {
      const p = new Path2D();
      for (let i = 0; i < count; i++) {
        const x = r() * S, y = r() * S, rx = 1 + r() * maxPx, ry = rx * (0.6 + 0.6 * r());
        p.moveTo(x + rx, y); p.ellipse(x, y, rx, ry, r() * Math.PI, 0, Math.PI * 2);
      }
      wrapped(() => { ctx.fillStyle = css(tone, alpha); ctx.fill(p); });
    };
    /** Fine grain: a scatter of near-transparent specks, so a flat area is not flat. */
    const grain = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                   tone: number[], count: number, alpha: number) => {
      const p = new Path2D();
      for (let i = 0; i < count; i++) { const x = r() * S, y = r() * S, d = 0.6 + r() * 1.4; p.rect(x, y, d, d); }
      wrapped(() => { ctx.fillStyle = css(tone, alpha); ctx.fill(p); });
    };
    /** Soft low-frequency mottle: large discs through a canvas blur, so the tone drifts cloud-like.
     *  Hard-edged blotches on this prop read as CAMOUFLAGE PAINT. */
    const cloud = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                   tone: number[], count: number, rad: number, alpha: number, blurPx: number) => {
      const marks: number[][] = [];
      for (let i = 0; i < count; i++) marks.push([r() * S, r() * S, rad * S * (0.5 + r()), alpha * (0.5 + 0.5 * r())]);
      wrapped(() => {
        ctx.filter = 'blur(' + blurPx + 'px)';
        for (const [x, y, rr, a] of marks) { ctx.fillStyle = css(tone, a); ctx.beginPath(); ctx.arc(x, y, rr, 0, Math.PI * 2); ctx.fill(); }
        ctx.filter = 'none';
      });
    };
    /** Soft weathering washes: vertical gradient streaks fading DOWN the face, blurred so they
     *  read as water-borne staining rather than as stripes. */
    const washes = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                    tone: number[], count: number, alpha: number, blurPx: number, wMin = 18, wMax = 78) => {
      const marks: number[][] = [];
      for (let i = 0; i < count; i++) marks.push([r() * S, r() * S, S * (0.15 + 0.5 * r()), wMin + (wMax - wMin) * r(), alpha * (0.5 + 0.5 * r())]);
      wrapped(() => {
        ctx.filter = 'blur(' + blurPx + 'px)';
        for (const [x, y0, len, w, a] of marks) {
          const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
          g.addColorStop(0, css(tone, a)); g.addColorStop(0.4, css(tone, a * 0.6)); g.addColorStop(1, css(tone, 0));
          ctx.fillStyle = g; ctx.fillRect(x - w / 2, y0, w, len);
        }
        ctx.filter = 'none';
      });
    };
    /** Lichen as CRUST: clusters of tiny specks, the way it grows, not a painted patch. */
    const crust = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                   tone: number[], clusters: number, perCluster: number, rad: number, alpha: number) => {
      const p = new Path2D();
      for (let i = 0; i < clusters; i++) {
        const cx = r() * S, cy = r() * S, R = rad * S * (0.4 + r());
        for (let k = 0; k < perCluster; k++) {
          const a = r() * Math.PI * 2, d = R * Math.sqrt(r());
          const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.7, rr = 1 + 1.7 * r();
          p.moveTo(x + rr, y); p.arc(x, y, rr, 0, Math.PI * 2);
        }
      }
      wrapped(() => { ctx.fillStyle = css(tone, alpha); ctx.fill(p); });
    };

    const bind = (mat: THREE.MeshStandardMaterial, cv: HTMLCanvasElement | null, bump: number, wrap = true) => {
      if (!cv) return;
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = wrap ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex;
      mat.bumpMap = tex;
      mat.bumpScale = bump;
      mat.needsUpdate = true;
    };

    // Laterite: big blocks with deep joints and eroded arrises, then the pitting that is the
    // stone's whole character. One tile, two materials (the platform and the wall blocks).
    {
      const P = W.laterite;
      const cv = makeTile(20260902, (ctx, r, S, wrapped) => {
        coursing(ctx, r, S, wrapped, P, P.edge, 5);
        cloud(ctx, r, S, wrapped, P.mottle, 14, 0.13, 0.6, 12);
        pits(ctx, r, S, wrapped, P.pit, 1100, 4.5, 0.75);
        pits(ctx, r, S, wrapped, P.pit, 600, 2.0, 0.5);
        grain(ctx, r, S, wrapped, P.pit, 2200, 0.10);
      });
      bind(materials.laterite, cv, P.bump);
      bind(materials.lateriteBlock, cv, P.bump);
    }
    // Sandstone: tight ashlar, cloudy drift, heavy black washes, pocking, two lichens.
    {
      const P = W.sandstone;
      const m = materials.sandstone;
      if (hasDom) {
        const c = m.color.clone();
        m.color.setRGB(c.r / Math.pow(P.clean[0], 2.2), c.g / Math.pow(P.clean[1], 2.2), c.b / Math.pow(P.clean[2], 2.2));
      }
      bind(m, makeTile(8261403, (ctx, r, S, wrapped) => {
        coursing(ctx, r, S, wrapped, P);
        cloud(ctx, r, S, wrapped, P.mottle, 12, 0.16, 0.5, 14);
        cloud(ctx, r, S, wrapped, P.light, 8, 0.14, 0.4, 14);
        grain(ctx, r, S, wrapped, P.jointTone, 5000, 0.07);
        grain(ctx, r, S, wrapped, P.light, 2500, 0.07);
        // the clean ratio of the envelope, one multiply fill; everything after it is a ratio of E
        ctx.globalCompositeOperation = 'multiply';
        ctx.fillStyle = css(P.clean, 1); ctx.fillRect(0, 0, S, S);
        ctx.globalCompositeOperation = 'source-over';
        // black biological weathering: the plate's tower is close to half covered. Long washes
        // running down, broad soft clouds under them, then fine dark grain over the lot.
        // Coverage is the whole tone of the tower: the first tile of this build ran 34 washes
        // and 20 wide ones and averaged ~0.45 of clean, rendering the lit faces at luma 36-69
        // against the plate's 76-128. Fourteen washes, six wide, five clouds average ~0.70.
        washes(ctx, r, S, wrapped, P.black, 12, 0.75, 5);
        washes(ctx, r, S, wrapped, P.black, 5, 0.38, 9, 40, 120);
        cloud(ctx, r, S, wrapped, P.black, 5, 0.10, 0.34, 16);
        grain(ctx, r, S, wrapped, P.black, 1200, 0.08);
        pits(ctx, r, S, wrapped, P.pit, 420, 2.2, 0.5);
        // lichen as a few PATCHES of dense specks rather than a scatter of clusters: the first
        // tile's 44 small clusters read as confetti on every face
        crust(ctx, r, S, wrapped, P.paleLichen, 7, 90, 0.05, 0.50);
        crust(ctx, r, S, wrapped, P.lichen, 11, 110, 0.05, 0.60);
      }), P.bump);
    }
    // Ledge tops: flag coursing, then the crusts the plate piles on every horizontal -- dark soil
    // and moss in cloudy drifts, orange lichen in dense patches, pale lichen between.
    {
      const P = W.ledge;
      const m = materials.ledge;
      if (hasDom) {
        const c = m.color.clone();
        m.color.setRGB(c.r / Math.pow(P.clean[0], 2.2), c.g / Math.pow(P.clean[1], 2.2), c.b / Math.pow(P.clean[2], 2.2));
      }
      bind(m, makeTile(3140926, (ctx, r, S, wrapped) => {
        coursing(ctx, r, S, wrapped, P);
        cloud(ctx, r, S, wrapped, P.mottle, 10, 0.16, 0.5, 14);
        grain(ctx, r, S, wrapped, P.jointTone, 4000, 0.07);
        ctx.globalCompositeOperation = 'multiply';
        ctx.fillStyle = css(P.clean, 1); ctx.fillRect(0, 0, S, S);
        ctx.globalCompositeOperation = 'source-over';
        cloud(ctx, r, S, wrapped, P.soil, 16, 0.10, 0.55, 12);
        cloud(ctx, r, S, wrapped, P.moss, 10, 0.07, 0.45, 10);
        grain(ctx, r, S, wrapped, P.soil, 3000, 0.10);
        pits(ctx, r, S, wrapped, P.pit, 300, 2.2, 0.5);
        crust(ctx, r, S, wrapped, P.paleLichen, 12, 110, 0.05, 0.55);
        crust(ctx, r, S, wrapped, P.lichen, 22, 150, 0.055, 0.70);
      }), P.bump);
    }
    // The carved atlas: three bands. Top band (v 0.78..0.98) the lintel frieze -- a scroll of
    // foliage rosettes either side of a central medallion under a garland, over a beaded rail;
    // middle band (v 0.40..0.76) the pediment's naga frame -- nested pointed arches with a
    // flame-scalloped outer edge over a dense field; bottom band (v 0.02..0.36) plain stone for
    // the sides and returns. Grooves are dark ratios, ridges the full material colour, and the
    // same canvas is the bump map, so the relief reads as relief.
    {
      const P = W.carved;
      bind(materials.carved, makeTile(9040261, (ctx, r, S, wrapped) => {
        ctx.fillStyle = css(P.base, 1); ctx.fillRect(0, 0, S, S);
        const gr = (a: number) => css(P.groove, a), rd = (a: number) => css(P.ridge, a);
        // plain band
        {
          const y0 = S * 0.64, y1 = S * 0.98;
          const p = new Path2D();
          for (let i = 0; i < 1400; i++) { const x = r() * S, y = y0 + r() * (y1 - y0), d = 0.6 + r() * 1.6; p.rect(x, y, d, d); }
          ctx.fillStyle = gr(0.12); ctx.fill(p);
          ctx.filter = 'blur(10px)';
          for (let i = 0; i < 6; i++) { ctx.fillStyle = gr(0.18); ctx.beginPath(); ctx.arc(r() * S, y0 + r() * (y1 - y0), 30 + r() * 50, 0, Math.PI * 2); ctx.fill(); }
          ctx.filter = 'none';
        }
        // lintel frieze: canvas rows 0.02..0.22 of S (v 0.98..0.78)
        {
          const y0 = S * 0.02, y1 = S * 0.22, h = y1 - y0, cy = (y0 + y1) / 2;
          ctx.fillStyle = css([0.84, 0.84, 0.84], 1); ctx.fillRect(0, y0, S, h);
          // beaded rails top and bottom
          for (const yy of [y0 + h * 0.08, y1 - h * 0.08]) {
            ctx.fillStyle = gr(0.9); ctx.fillRect(0, yy - 2, S, 4);
            ctx.fillStyle = rd(0.9); ctx.fillRect(0, yy - 4, S, 2);
            for (let x = 4; x < S; x += 9) { ctx.fillStyle = rd(0.8); ctx.beginPath(); ctx.arc(x, yy + 5, 2.4, 0, Math.PI * 2); ctx.fill(); }
          }
          // foliage scroll: rosettes alternating up and down, linked by a wave
          ctx.lineWidth = 3; ctx.strokeStyle = gr(0.85); ctx.beginPath();
          for (let x = 0; x <= S; x += 4) { const y = cy + Math.sin(x / S * Math.PI * 14) * h * 0.18; x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
          ctx.stroke();
          ctx.lineWidth = 1.5; ctx.strokeStyle = rd(0.9); ctx.beginPath();
          for (let x = 0; x <= S; x += 4) { const y = cy - 3 + Math.sin(x / S * Math.PI * 14) * h * 0.18; x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
          ctx.stroke();
          const n = 14;
          for (let i = 0; i < n; i++) {
            const x = (i + 0.5) * S / n, up = i % 2 === 0, y = cy + (up ? -1 : 1) * h * 0.22, R = h * 0.17;
            ctx.strokeStyle = gr(0.9); ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, R, 0, Math.PI * 2); ctx.stroke();
            ctx.strokeStyle = rd(0.9); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(x, y, R - 3, 0, Math.PI * 2); ctx.stroke();
            for (let k = 0; k < 7; k++) {
              const a = k / 7 * Math.PI * 2, px = x + Math.cos(a) * R * 0.55, py = y + Math.sin(a) * R * 0.55;
              ctx.fillStyle = gr(0.8); ctx.beginPath(); ctx.arc(px, py, R * 0.22, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = rd(0.8); ctx.beginPath(); ctx.arc(px - 1, py - 1, R * 0.12, 0, Math.PI * 2); ctx.fill();
            }
            // hanging pendants under the wave
            ctx.fillStyle = gr(0.75); ctx.beginPath(); ctx.moveTo(x - 4, cy + h * 0.02); ctx.lineTo(x + 4, cy + h * 0.02); ctx.lineTo(x, cy + h * 0.14); ctx.closePath(); ctx.fill();
          }
          // central medallion -- the kala head of the plate's lintel, as a ringed disc
          const R = h * 0.36;
          ctx.fillStyle = css([0.84, 0.84, 0.84], 1); ctx.beginPath(); ctx.arc(S / 2, cy, R + 4, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = gr(0.95); ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(S / 2, cy, R, 0, Math.PI * 2); ctx.stroke();
          ctx.strokeStyle = rd(0.9); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(S / 2, cy, R - 4, 0, Math.PI * 2); ctx.stroke();
          ctx.fillStyle = gr(0.9);
          for (const [dx, dy, rr] of [[-R * 0.32, -R * 0.15, R * 0.14], [R * 0.32, -R * 0.15, R * 0.14], [0, R * 0.32, R * 0.22]]) { ctx.beginPath(); ctx.arc(S / 2 + dx, cy + dy, rr, 0, Math.PI * 2); ctx.fill(); }
          ctx.fillStyle = gr(0.6); ctx.beginPath(); ctx.moveTo(S / 2 - R * 0.6, cy + R * 0.5); ctx.lineTo(S / 2 + R * 0.6, cy + R * 0.5); ctx.lineTo(S / 2, cy + R * 0.95); ctx.closePath(); ctx.fill();
          // dirt in the relief
          const p = new Path2D();
          for (let i = 0; i < 700; i++) { const x = r() * S, y = y0 + r() * h, d = 0.6 + r() * 1.4; p.rect(x, y, d, d); }
          ctx.fillStyle = gr(0.2); ctx.fill(p);
        }
        // pediment naga frame: canvas rows 0.24..0.60 of S (v 0.76..0.40); the plate's front face
        // spans the pointed panel, so the arch is drawn to the panel's own outline
        {
          const y0 = S * 0.24, y1 = S * 0.60, h = y1 - y0;
          ctx.fillStyle = css([0.86, 0.86, 0.86], 1); ctx.fillRect(0, y0, S, h);
          const arch = (inset: number) => {
            const p = new Path2D();
            p.moveTo(inset, y1 - inset); p.lineTo(inset, y1 - h * 0.42 - inset * 0.3);
            p.lineTo(S * 0.28 + inset * 0.5, y1 - h * 0.66 - inset * 0.5); p.lineTo(S * 0.5 - inset * 0.6 * 0, y1 - h * 0.88 - inset * 0.8);
            p.lineTo(S * 0.5, y0 + inset * 1.1);
            p.lineTo(S * 0.5, y1 - h * 0.88 - inset * 0.8); p.lineTo(S * 0.72 - inset * 0.5, y1 - h * 0.66 - inset * 0.5);
            p.lineTo(S - inset, y1 - h * 0.42 - inset * 0.3); p.lineTo(S - inset, y1 - inset);
            return p;
          };
          for (const [ins, lw, a, light] of [[6, 5, 0.9, false], [12, 2, 0.9, true], [22, 4, 0.8, false], [28, 2, 0.8, true], [40, 3, 0.7, false]] as any[]) {
            ctx.lineWidth = lw; ctx.strokeStyle = light ? rd(a) : gr(a); ctx.stroke(arch(ins));
          }
          // flame scallops along the outer edge
          ctx.fillStyle = gr(0.85);
          const edge = [[0, y1 - h * 0.42], [S * 0.28, y1 - h * 0.66], [S * 0.5, y1 - h * 0.88], [S * 0.5, y0]];
          for (let side = -1; side <= 1; side += 2) {
            for (let e = 0; e < 3; e++) {
              const [ax, ay] = edge[e], [bx, by] = edge[e + 1];
              const len = Math.hypot(bx - ax, by - ay), n = Math.max(3, Math.round(len / 16));
              for (let k = 0; k < n; k++) {
                const t = (k + 0.5) / n, x = S / 2 + side * (ax + (bx - ax) * t - S / 2), y = ay + (by - ay) * t;
                ctx.beginPath(); ctx.moveTo(x - 6, y + 4); ctx.lineTo(x + 6, y + 4); ctx.lineTo(x + side * 3, y - 9); ctx.closePath(); ctx.fill();
              }
            }
          }
          // the tympanum field: dense foliage stipple with a central figure blob
          const p = new Path2D();
          for (let i = 0; i < 2600; i++) {
            const x = r() * S, y = y1 - r() * h * 0.62, d = 1 + r() * 3;
            if (Math.abs(x - S / 2) / (S / 2) > 1 - (y1 - y) / h * 1.05) continue;
            p.moveTo(x + d, y); p.arc(x, y, d, 0, Math.PI * 2);
          }
          ctx.fillStyle = gr(0.42); ctx.fill(p);
          ctx.strokeStyle = gr(0.9); ctx.lineWidth = 3;
          ctx.beginPath(); ctx.ellipse(S / 2, y1 - h * 0.30, S * 0.09, h * 0.22, 0, 0, Math.PI * 2); ctx.stroke();
          ctx.strokeStyle = rd(0.8); ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.ellipse(S / 2, y1 - h * 0.30, S * 0.075, h * 0.19, 0, 0, Math.PI * 2); ctx.stroke();
          const q = new Path2D();
          for (let i = 0; i < 900; i++) { const x = r() * S, y = y0 + r() * h, d = 0.6 + r() * 1.4; q.rect(x, y, d, d); }
          ctx.fillStyle = gr(0.2); ctx.fill(q);
        }
        // black weathering over the whole atlas, lighter than on the walls: the lintels are under
        // the pediment's shelter in the plate and read cleaner than the pilasters
        washes(ctx, r, S, wrapped, P.black, 10, 0.35, 6, 30, 90);
      }), P.bump, false);
    }
    // Rubble: no coursing -- each instance is one block -- just mottle, pocking and a dark side.
    {
      const P = W.rubble;
      bind(materials.pale, makeTile(11052011, (ctx, r, S, wrapped) => {
        ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, S, S);
        blotch(ctx, r, S, wrapped, P.mottle, 16, 0.12, 0.7);
        blotch(ctx, r, S, wrapped, P.dark, 6, 0.06, 0.6);
        pits(ctx, r, S, wrapped, P.pit, 300, 2.5, 0.6);
        grain(ctx, r, S, wrapped, P.dark, 1400, 0.10);
      }), P.bump);
    }
  }

  // Centre the bounding box: the stair bay projects 1.40 m past the platform on +Z.
  for (const n of Object.values(nodes)) n.position.z += ZO;

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  return root;
}

/* ------------------------------------------------------------------ thaikit entry point */

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it with
 * (spec, options). `spec` is accepted and attached for host-side inspection -- the reconstruction
 * data already lives in this module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createKhmerStoneSanctuaryModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. Static landmark geometry -- nothing opens, turns or swings. A named pivot is a
    // promise that a part turns on it, and a prop that declares pivots it has no mechanisms for
    // has described a machine that does not exist.
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
 * vibe3d's one-argument entry: the same factory under the name a pack consumer installs and
 * calls. `model.ts` beside this file re-exports it as the item's `createModel`.
 */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}
