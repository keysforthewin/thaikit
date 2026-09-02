import * as THREE from 'three';

/**
 * Isuzu D-Max -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 1.87 x 1.79 x 5.3 m (mirrors to 2.15), origin base-center, +Y up, +Z forward.
 * Budget (hero): <=8000 triangles, <=6 draw calls, <=4 materials, <=8 unique geometries.
 *
 * This is one of thaikit's VEHICLES. The shared vocabulary is the SIDE-PROFILE EXTRUSION -- a
 * closed polygon in the (z, y) plane swept across the width and then shaped per vertex for
 * tumblehome and plan rounding -- plus a lathed WHEEL revolved about its axle and a polyline TUBE
 * for handlebars, rails and frames. Every colour difference inside one material is carried as a
 * vertex colour on a WHITE material, so a two-tone body, a black tyre on a silver rim and an amber
 * indicator all ride one shader and one submission.
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
    "id": "isuzu-d-max",
    "name": "Isuzu D-Max",
    "exportName": "IsuzuDMax",
    "envelope": "Envelope 1.87 x 1.79 x 5.3 m (mirrors to 2.15), origin base-center, +Y up, +Z forward.\n * Budget (hero): <=8000 triangles, <=6 draw calls, <=4 materials, <=8 unique geometries.",
    "materials": [
      {
        "id": "paint",
        "color": 8023640,
        "roughness": 0.5,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "glass",
        "color": 8028802,
        "roughness": 0.42,
        "metalness": 0.05,
        "opacity": 0.94
      },
      {
        "id": "trim",
        "color": 16777215,
        "roughness": 0.62,
        "metalness": 0,
        "vertexColors": true
      }
    ],
    "tiles": [
      {
        "material": "paint",
        "kind": "mud",
        "base": [
          0.588935857379158,
          0.9829873009473894,
          0.855231560891938
        ],
        "seed": 23,
        "coverage": 0.52,
        "size": 512,
        "opts": {
          "tone": [
            0.9999999999999999,
            0.9999999999999999,
            0.9999999999999999
          ],
          "floor": 0.23,
          "streaks": 220,
          "cloud": 0.12,
          "speckle": 4200,
          "zones": [
            [
              0.05,
              0.25,
              3
            ],
            [
              0.83,
              0.88,
              2
            ],
            [
              0.52,
              0.67,
              3
            ],
            [
              0,
              0.05,
              0.5
            ],
            [
              0.88,
              1,
              0.5
            ],
            [
              0.25,
              0.42,
              0.4
            ]
          ]
        }
      },
      {
        "material": "glass",
        "kind": "glass",
        "low": [
          0.7518103289836424,
          0.7655962506509285,
          0.7655962506509285
        ],
        "seed": 19,
        "size": 256,
        "streaks": 5
      }
    ],
    "pivots": [
      {
        "name": "wheel-front-l",
        "position": [
          0.8,
          0.375,
          1.75
        ],
        "axis": [
          1,
          0,
          0
        ],
        "component": "wheels",
        "instance": 0,
        "note": "front left hub, rolls about the axle"
      },
      {
        "name": "wheel-front-r",
        "position": [
          -0.8,
          0.375,
          1.75
        ],
        "axis": [
          1,
          0,
          0
        ],
        "component": "wheels",
        "instance": 1,
        "note": "front right hub"
      },
      {
        "name": "wheel-rear-l",
        "position": [
          0.8,
          0.375,
          -1.33
        ],
        "axis": [
          1,
          0,
          0
        ],
        "component": "wheels",
        "instance": 2,
        "note": "rear left hub"
      },
      {
        "name": "wheel-rear-r",
        "position": [
          -0.8,
          0.375,
          -1.33
        ],
        "axis": [
          1,
          0,
          0
        ],
        "component": "wheels",
        "instance": 3,
        "note": "rear right hub"
      }
    ],
    "geometry": {
      "width": 1.87,
      "sill": 0.46,
      "paintHex": 16777215,
      "mudScale": 2,
      "mudUScale": 5.3,
      "mudTopClean": true,
      "collider": {
        "shape": "convex",
        "localCenter": [
          0,
          0.895,
          0
        ],
        "halfExtents": [
          0.935,
          0.895,
          2.65
        ],
        "notes": "Declared on the asset as convex: the hull of the body shell."
      },
      "outline": [
        [
          2.56,
          0.46
        ],
        [
          2.6,
          0.6
        ],
        [
          2.6,
          0.9
        ],
        [
          2.5879,
          0.945
        ],
        [
          2.555,
          0.9779
        ],
        [
          2.51,
          0.99
        ],
        [
          2.3,
          1.005
        ],
        [
          2.1,
          1.02
        ],
        [
          1.9,
          1.04
        ],
        [
          1.7,
          1.065
        ],
        [
          1.52,
          1.1
        ],
        [
          1.14,
          1.68
        ],
        [
          1.0471,
          1.7419
        ],
        [
          1.011,
          1.7628
        ],
        [
          0.97,
          1.77
        ],
        [
          -0.4,
          1.77
        ],
        [
          -0.5659,
          1.7609
        ],
        [
          -0.6049,
          1.7349
        ],
        [
          -0.6309,
          1.6959
        ],
        [
          -0.64,
          1.65
        ],
        [
          -0.64,
          1.22
        ],
        [
          -0.64,
          0.82
        ],
        [
          -2.56,
          0.82
        ],
        [
          -2.6,
          0.78
        ],
        [
          -2.6,
          0.58
        ],
        [
          -2.56,
          0.46
        ]
      ],
      "tumble": {
        "belt": 1.22,
        "roof": 1.77,
        "k": 0.16
      },
      "plan": [
        [
          -2.6,
          0.98
        ],
        [
          -2.45,
          1
        ],
        [
          2.1,
          1
        ],
        [
          2.6,
          0.95
        ]
      ],
      "shape": {
        "steps": 14,
        "edgeBias": 0.6,
        "shoulder": {
          "r": 0.13,
          "zMin": -0.7,
          "zMax": 1.1,
          "fade": 0.15
        },
        "nose": {
          "r": 0.24
        },
        "tail": {
          "r": 0.06
        },
        "smooth": 50
      },
      "bodyBoxes": [
        [
          16777215,
          0.905,
          1.02,
          -1.645,
          0.056,
          0.4,
          1.91
        ],
        [
          16777215,
          -0.905,
          1.02,
          -1.645,
          0.056,
          0.4,
          1.91
        ],
        [
          16777215,
          0,
          1.02,
          -0.672,
          1.75,
          0.4,
          0.065
        ],
        [
          16777215,
          0,
          1.02,
          -2.63,
          1.75,
          0.4,
          0.06
        ],
        [
          16777215,
          0.905,
          1.225,
          -1.645,
          0.07,
          0.03,
          1.99
        ],
        [
          16777215,
          -0.905,
          1.225,
          -1.645,
          0.07,
          0.03,
          1.99
        ],
        [
          16777215,
          0,
          1.225,
          -2.63,
          1.87,
          0.03,
          0.08
        ]
      ],
      "glass": {
        "poly": [
          [
            1.53,
            1.12
          ],
          [
            1.19,
            1.62
          ],
          [
            -0.56,
            1.62
          ],
          [
            -0.646,
            1.58
          ],
          [
            -0.646,
            1.19
          ]
        ],
        "proud": 0.006,
        "hex": 16777215,
        "uvY": [
          1.12,
          1.63
        ],
        "uScale": 1.6
      },
      "pillars": [
        {
          "poly": [
            [
              1.44,
              1.12
            ],
            [
              1.55,
              1.12
            ],
            [
              1.19,
              1.66
            ],
            [
              1.08,
              1.66
            ]
          ],
          "strip": 0.1
        },
        {
          "poly": [
            [
              0.22,
              1.2
            ],
            [
              0.32,
              1.2
            ],
            [
              0.32,
              1.66
            ],
            [
              0.22,
              1.66
            ]
          ],
          "strip": 0.1
        },
        {
          "poly": [
            [
              -0.658,
              1.19
            ],
            [
              -0.558,
              1.19
            ],
            [
              -0.558,
              1.66
            ],
            [
              -0.658,
              1.66
            ]
          ],
          "strip": 0.1
        }
      ],
      "wheels": {
        "r": 0.36,
        "rim": 0.21,
        "halfW": 0.15,
        "track": 0.8,
        "zF": 1.75,
        "zR": -1.33,
        "seg": 24,
        "arch": 0.45999999999999996,
        "style": "steel",
        "tyreHex": 6182736,
        "lugHex": 4867133,
        "rimHex": 6049344,
        "ventHex": 3024416,
        "dish": 0.5,
        "lugs": {
          "n": 20,
          "h": 0.035,
          "w": 0.88,
          "d": 0.055,
          "skew": 0.35,
          "hex": 5656650
        },
        "flare": 0.1,
        "flareOut": 0.05,
        "flareHex": 5921368,
        "wellHex": 2827810,
        "positions": [
          [
            0.8,
            0.375,
            1.75
          ],
          [
            -0.8,
            0.375,
            1.75
          ],
          [
            0.8,
            0.375,
            -1.33
          ],
          [
            -0.8,
            0.375,
            -1.33
          ]
        ]
      },
      "trim": [
        [
          7105642,
          0,
          0.55,
          2.6,
          1.4,
          0.24,
          0.16
        ],
        [
          7105642,
          0,
          0.4,
          2.56,
          1.5,
          0.08,
          0.12
        ],
        [
          14211284,
          0,
          0.5,
          2.684,
          0.32,
          0.12,
          0.01
        ],
        [
          5526094,
          0,
          0.815,
          2.605,
          1.14,
          0.25,
          0.02
        ],
        [
          12896460,
          0,
          0.72,
          2.625,
          1.1,
          0.028,
          0.02
        ],
        [
          12896460,
          0,
          0.765,
          2.625,
          1.1,
          0.028,
          0.02
        ],
        [
          12896460,
          0,
          0.81,
          2.625,
          1.1,
          0.028,
          0.02
        ],
        [
          12896460,
          0,
          0.855,
          2.625,
          1.1,
          0.028,
          0.02
        ],
        [
          12896460,
          0,
          0.9,
          2.625,
          1.1,
          0.028,
          0.02
        ],
        [
          12896460,
          0,
          0.945,
          2.622,
          1.18,
          0.04,
          0.026
        ],
        [
          12896460,
          0,
          0.685,
          2.622,
          1.18,
          0.04,
          0.026
        ],
        [
          13685976,
          0,
          0.815,
          2.64,
          0.1,
          0.07,
          0.015
        ],
        [
          7105642,
          0,
          0.55,
          -2.6,
          1.85,
          0.22,
          0.14
        ],
        [
          14211284,
          0,
          1,
          -2.672,
          0.32,
          0.12,
          0.012
        ],
        [
          5129272,
          0,
          0.85,
          -1.645,
          1.75,
          0.03,
          1.87
        ],
        [
          3813928,
          0.867,
          1.02,
          -1.645,
          0.012,
          0.37,
          1.87
        ],
        [
          3813928,
          -0.867,
          1.02,
          -1.645,
          0.012,
          0.37,
          1.87
        ],
        [
          3813928,
          0,
          1.02,
          -0.712,
          1.72,
          0.37,
          0.012
        ],
        [
          3813928,
          0,
          1.02,
          -2.594,
          1.72,
          0.37,
          0.012
        ],
        [
          2760728,
          0.905,
          1.25,
          -1.645,
          0.075,
          0.02,
          1.99
        ],
        [
          2760728,
          -0.905,
          1.25,
          -1.645,
          0.075,
          0.02,
          1.99
        ],
        [
          2760728,
          0,
          1.25,
          -2.63,
          1.87,
          0.02,
          0.085
        ],
        [
          2828582,
          0,
          0.32,
          0.1,
          1.4,
          0.16,
          3.3
        ],
        [
          3821632,
          0,
          1.02,
          -2.664,
          1.2,
          0.3,
          0.012
        ]
      ],
      "trimMirrored": [
        [
          12896460,
          0.57,
          0.815,
          2.622,
          0.04,
          0.3,
          0.026
        ],
        [
          7105642,
          0.72,
          0.55,
          2.53,
          0.3,
          0.24,
          0.16,
          0,
          0.7
        ],
        [
          5526094,
          0.52,
          0.47,
          2.684,
          0.16,
          0.07,
          0.01
        ],
        [
          14212576,
          0.72,
          0.84,
          2.575,
          0.3,
          0.2,
          0.03,
          0,
          0.45
        ],
        [
          12089914,
          0.9,
          0.6,
          2.44,
          0.08,
          0.05,
          0.02,
          0,
          0.7
        ],
        [
          11546672,
          0.905,
          1.02,
          -2.64,
          0.06,
          0.34,
          0.07
        ],
        [
          4868680,
          0.945,
          1.3,
          1.08,
          0.12,
          0.03,
          0.03
        ],
        [
          4549706,
          1.03,
          1.34,
          1.06,
          0.09,
          0.15,
          0.2
        ],
        [
          4868680,
          0.941,
          1.08,
          0.75,
          0.012,
          0.03,
          0.15
        ],
        [
          4868680,
          0.941,
          1.08,
          -0.2,
          0.012,
          0.03,
          0.15
        ],
        [
          4868680,
          0.944,
          0.86,
          0.85,
          0.012,
          0.045,
          1.1
        ],
        [
          4868680,
          0.944,
          0.86,
          -0.28,
          0.012,
          0.045,
          0.7
        ],
        [
          10132118,
          0.95,
          0.4,
          0.3,
          0.22,
          0.05,
          2.1
        ],
        [
          4868680,
          0.941,
          0.95,
          0.27,
          0.004,
          0.52,
          0.02
        ],
        [
          4868680,
          0.941,
          0.95,
          -0.6,
          0.004,
          0.52,
          0.02
        ]
      ],
      "cyls": [
        {
          "at": [
            -0.55,
            0.3,
            -2.56
          ],
          "rt": 0.035,
          "rb": 0.035,
          "h": 0.3,
          "rx": 1.5707963267948966,
          "hex": 7236198
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
                    valley?: number[]): THREE.BufferGeometry {
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
    const f = Math.pow((1 - Math.cos(ribs * ((j % seg) * Math.PI * 2 / seg))) / 2, 0.55);
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

/* ------------------------------------------------------------------ vehicle helpers */

/** Paint a whole geometry one vertex colour. Every vehicle material here is WHITE with
 *  vertexColors on, so a colour difference costs an attribute rather than a material: the body's
 *  two-tone, the tyre against its rim, an amber indicator on a black bumper all ride one shader.
 *  Vertex colours multiply in LINEAR space, so the hex is converted through THREE.Color, which
 *  does the sRGB-to-linear step. */
function tintGeo(geo: THREE.BufferGeometry, hex: number): THREE.BufferGeometry {
  const c = new THREE.Color(hex);
  const n = geo.getAttribute('position').count;
  const col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geo;
}

/** Box-project world-metre UVs so a post-construction canvas tile (mud, rust, corrugation) repeats
 *  at a real size on every face. `scale` is metres per tile. The dominant normal axis picks the
 *  pair of world axes used, so a roof reads (x, z) and a side reads (z, y). */
function worldUV(geo: THREE.BufferGeometry, scale: number): THREE.BufferGeometry {
  const p = geo.getAttribute('position'), nrm = geo.getAttribute('normal');
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
    let u: number, v: number;
    if (ax >= ay && ax >= az) { u = p.getZ(i); v = p.getY(i); }
    else if (ay >= az) { u = p.getX(i); v = p.getZ(i); }
    else { u = p.getX(i); v = p.getY(i); }
    uv[i * 2] = u / scale; uv[i * 2 + 1] = v / scale;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}

/**
 * SIDE-PROFILE EXTRUSION: a closed polygon of [z, y] points (the vehicle's side silhouette, wheel
 * arches included as notches) swept across the full width, then shaped per vertex:
 *
 *  - `tumble`  narrows the section above the belt line -- x is scaled by (1 - k * t) where t runs
 *              0 at `belt` to 1 at `roof`. That is the tumblehome of a real car body and is what
 *              stops the glasshouse reading as a box on a box.
 *  - `plan`    rounds the plan at the nose and tail: an optional list of [z, xScale] stations
 *              interpolated along z, so a bonnet can taper to 0.9 of the width at the bumper line.
 *
 * ExtrudeGeometry builds in its own (u, v, depth) frame; rotateY(-PI/2) maps depth to -x and u to
 * world z, and the translate re-centres the slab on x = 0. Any shaping is applied AFTER that, and
 * normals are recomputed last so the shaded faces follow the shaped surface.
 */
function sideExtrude(profile: number[][], width: number, opts: ShapeOpts = {}): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  shape.moveTo(profile[0][0], profile[0][1]);
  for (let i = 1; i < profile.length; i++) shape.lineTo(profile[i][0], profile[i][1]);
  shape.closePath();
  const g = new THREE.ExtrudeGeometry(shape, { depth: width, bevelEnabled: false,
                                                curveSegments: opts.curveSegments ?? 6, steps: opts.steps ?? 1 });
  g.rotateY(-Math.PI / 2);
  g.translate(width / 2, 0, 0);
  if (opts.edgeBias && (opts.steps ?? 1) > 1) {
    // Pull the width columns toward the two edges (|t|^p, p < 1) so a shoulder fillet gets four
    // real segments instead of one chamfer at the outermost column; the flat middle needs none.
    const q = g.getAttribute('position'), hw = width / 2;
    for (let i = 0; i < q.count; i++) {
      const t = Math.max(-1, Math.min(1, q.getX(i) / hw));
      q.setX(i, hw * Math.sign(t) * Math.pow(Math.abs(t), opts.edgeBias));
    }
  }
  shapeWidth(g, opts, width);
  if (opts.smooth) smoothNormals(g, opts.smooth);
  return g;
}

/** Shaping options shared by a body and everything swept proud of it (glass band, pillars).
 *  `shoulder`, `nose` and `tail` are ROUNDINGS -- see shapeWidth -- and need `steps` > 1 so the
 *  swept faces carry vertices across the width to bend; `baseWidth` is the body's width, so a
 *  band swept wider than it is rounded about the SAME centres at a larger radius and stays
 *  exactly as proud as it was authored; `topOf` is the body's own profile, which is where the
 *  roof line every shoulder hangs off is read. All optional: unset, the sweep is the old slab. */
type ShapeOpts = { tumble?: { belt: number, roof: number, k: number }, plan?: number[][],
                   curveSegments?: number, steps?: number,
                   shoulder?: { r: number, zMin?: number, zMax?: number, fade?: number },
                   nose?: { r: number }, tail?: { r: number },
                   smooth?: number, edgeBias?: number, baseWidth?: number, topOf?: number[][] };

/** Highest y of a closed [z, y] profile on the vertical line at z -- the roof line at that
 *  station. Vertical edges count by their own top; a z outside the profile returns -Infinity. */
function profileTop(profile: number[][], z: number, tol = 0): number {
  let top = -Infinity;
  const n = profile.length;
  for (let i = 0; i < n; i++) {
    const a = profile[i], b = profile[(i + 1) % n];
    const lo = Math.min(a[0], b[0]), hi = Math.max(a[0], b[0]);
    if (z < lo - tol - 1e-6 || z > hi + tol + 1e-6) continue;
    // `tol` lets a band standing a few mm proud of a vertical face (a rear pane, a C-pillar strip
    // behind the cab back) read the roof line of the face it stands on, not the bed floor behind it
    const zc = Math.max(lo, Math.min(hi, z));
    const y = hi - lo < 1e-6 ? Math.max(a[1], b[1]) : a[1] + (b[1] - a[1]) * (zc - a[0]) / (b[0] - a[0]);
    if (y > top) top = y;
  }
  return top;
}

/** The per-vertex x shaping shared by the body and its glass band, so a pane offset 5 mm proud of
 *  the body stays 5 mm proud after both are narrowed by the same function. */
function shapeWidth(g: THREE.BufferGeometry, opts: ShapeOpts, width = 0): void {
  const p = g.getAttribute('position');
  const tumbleAt = (y: number) => {
    if (!opts.tumble) return 1;
    const t = Math.min(1, Math.max(0, (y - opts.tumble.belt) / (opts.tumble.roof - opts.tumble.belt)));
    return 1 - opts.tumble.k * t;
  };
  const planAt = (z: number) => {
    if (!opts.plan || opts.plan.length < 2) return 1;
    const st = opts.plan;
    if (z <= st[0][0]) return st[0][1];
    if (z >= st[st.length - 1][0]) return st[st.length - 1][1];
    for (let k = 0; k < st.length - 1; k++) {
      if (z >= st[k][0] && z <= st[k + 1][0]) {
        const u = (z - st[k][0]) / (st[k + 1][0] - st[k][0]);
        return st[k][1] + (st[k + 1][1] - st[k][1]) * u;
      }
    }
    return 1;
  };
  // ROUNDINGS. A sweep is a slab: its roof meets its side at a hard edge, and its nose meets both
  // sides at two more. Real sheet metal crowns over the fender and wraps round the nose, so any
  // vertex inside a corner quadrant (within r of the top AND within r of the side) is projected
  // onto the circle of radius r about that corner's centre -- a fillet, in x/y for the shoulder
  // and in x/z at the two ends. The centres are placed off the BODY's width (`baseWidth`) and
  // roof line (`topOf`), so a glass band swept `e` wider is filleted at r + e about the same
  // centre and stays `e` proud all the way round the corner.
  const extra = opts.baseWidth ? (width - opts.baseWidth) / 2 : 0;
  const baseHalf = (opts.baseWidth ?? width) / 2;
  const top = opts.topOf ?? null;
  let zMax = -Infinity, zMin = Infinity;
  if (top) for (const q of top) { if (q[0] > zMax) zMax = q[0]; if (q[0] < zMin) zMin = q[0]; }
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const tf = tumbleAt(y), pf = planAt(z);
    x *= tf * pf;
    if (opts.shoulder && top) {
      const sh = opts.shoulder;
      // The fillet lives on a z-range: hard at zMin (the cab back), faded over `fade` metres at
      // zMax (the top of the windscreen rake -- a rake is a plane, its edge a crease, and a fade
      // keyed on the roof line's SLOPE varied inside the rear corner and folded it).
      const zLo = sh.zMin ?? -Infinity, zHi = sh.zMax ?? Infinity, fd = sh.fade ?? 0;
      const w = z < zLo || z > zHi ? 0 : fd > 0 ? Math.min(1, (zHi - z) / fd) : 1;
      const yt = profileTop(top, z, 0.03);
      if (w > 0 && isFinite(yt)) {
        const r = sh.r + extra, cy = yt - sh.r;
        const hw = baseHalf * tumbleAt(cy) * pf, cx = hw - sh.r;
        const ax = Math.abs(x);
        if (y > cy && ax > cx && r > 1e-6) {
          const dx = ax - cx, dy = y - cy, d = Math.hypot(dx, dy) || 1;
          let nx = ax, ny = y, hit = false;
          if (dx >= r - 1e-4) {
            // the EDGE column, shared with the side: the arc's foot, tangent to the side at cy
            nx = cx + r; ny = cy; hit = true;
          } else if (dy >= sh.r - 1e-4 && dx <= r + 1e-6) {
            // a top-row vertex: its column position picks its angle on the arc
            const th = Math.PI / 2 * (1 - dx / r);
            nx = cx + Math.cos(th) * r; ny = cy + Math.sin(th) * r; hit = true;
          } else if (dx <= r + 1e-6 && dy <= r + 1e-6 && d >= r - 1e-4) {
            // a proud band's outer vertex below the top: onto its own circle; inside it, leave
            nx = cx + dx / d * r; ny = cy + dy / d * r; hit = true;
          }
          if (hit) { x = Math.sign(x || 1) * (ax + (nx - ax) * w); y = y + (ny - y) * w; }
        }
      }
    }
    for (const end of [opts.nose ? { r: opts.nose.r, zc: zMax - opts.nose.r, s: 1 } : null,
                       opts.tail ? { r: opts.tail.r, zc: zMin + opts.tail.r, s: -1 } : null]) {
      if (!end || !top) continue;
      const r = end.r + extra;
      const hw = baseHalf * tumbleAt(y) * planAt(end.zc), cx = hw - end.r;
      const ax = Math.abs(x), dz = (z - end.zc) * end.s;
      if (dz > 0 && ax > cx && r > 1e-6) {
        const dx = ax - cx, d = Math.hypot(dx, dz) || 1;
        // Only a vertex OUTSIDE the circle is projected onto it (the shoulder's rule): a side
        // strip's inner face lies inside, and projecting it too lands it on the outer face,
        // which z-fights -- the Commuter van's wrapped A-pillars crumpled from exactly that.
        if (d >= r - 1e-4) { x = Math.sign(x || 1) * (cx + dx / d * r); z = end.zc + end.s * (dz / d * r); }
      }
    }
    p.setXYZ(i, x, y, z);
  }
  p.needsUpdate = true;
  g.computeVertexNormals();
}

/** Angle-limited SMOOTH NORMALS on a non-indexed geometry. Every vertex sharing a position
 *  averages the face normals of its neighbours that lie within `maxDeg` of its own face, so a
 *  filleted shoulder, a plan-rounded nose and the tumblehome kink at the belt shade as one
 *  continuous surface, while a 90-degree edge -- the arch cut, the nose against the bumper --
 *  stays a crease. Without this every quad the roundings bend splits into two differently lit
 *  triangles, which is the "blocky" a viewer sees before any silhouette. */
function smoothNormals(geo: THREE.BufferGeometry, maxDeg: number): THREE.BufferGeometry {
  const p = geo.getAttribute('position'), nrm = geo.getAttribute('normal');
  if (!nrm || geo.getIndex()) return geo;
  const n = p.count, cosLim = Math.cos(maxDeg * Math.PI / 180);
  const groups = new Map<string, number[]>();
  for (let i = 0; i < n; i++) {
    const k = `${Math.round(p.getX(i) * 2000)},${Math.round(p.getY(i) * 2000)},${Math.round(p.getZ(i) * 2000)}`;
    const g = groups.get(k); if (g) g.push(i); else groups.set(k, [i]);
  }
  const face = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { face[i * 3] = nrm.getX(i); face[i * 3 + 1] = nrm.getY(i); face[i * 3 + 2] = nrm.getZ(i); }
  const out = new Float32Array(n * 3);
  for (const g of groups.values()) {
    for (const i of g) {
      let sx = 0, sy = 0, sz = 0;
      const ax = face[i * 3], ay = face[i * 3 + 1], az = face[i * 3 + 2];
      for (const j of g) {
        const bx = face[j * 3], by = face[j * 3 + 1], bz = face[j * 3 + 2];
        if (ax * bx + ay * by + az * bz >= cosLim) { sx += bx; sy += by; sz += bz; }
      }
      const l = Math.hypot(sx, sy, sz) || 1;
      out[i * 3] = sx / l; out[i * 3 + 1] = sy / l; out[i * 3 + 2] = sz / l;
    }
  }
  geo.setAttribute('normal', new THREE.BufferAttribute(out, 3));
  return geo;
}

/** A PILLAR STRIP: the pillar polygon swept only `stripW` deep at each outer edge of `width`,
 *  mirrored, and shaped exactly as the body. The old full-width sweep put a slab across the
 *  windscreen wherever the A-pillar polygon lay on the rake -- a pillar is at the side of the
 *  glass, not through it. The mirrored half has its winding restored. */
function sideStrip(profile: number[][], width: number, stripW: number, opts: ShapeOpts = {}): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  shape.moveTo(profile[0][0], profile[0][1]);
  for (let i = 1; i < profile.length; i++) shape.lineTo(profile[i][0], profile[i][1]);
  shape.closePath();
  const mk = (sx: number) => {
    const g = new THREE.ExtrudeGeometry(shape, { depth: stripW, bevelEnabled: false, steps: 2 });
    g.rotateY(-Math.PI / 2);                 // depth now runs along -x from x = 0
    g.translate(width / 2, 0, 0);            // outer face at +width/2, inner at width/2 - stripW
    if (sx < 0) {
      g.scale(-1, 1, 1);
      const q = g.getAttribute('position');
      for (let i = 0; i < q.count; i += 3) {
        const x1 = q.getX(i + 1), y1 = q.getY(i + 1), z1 = q.getZ(i + 1);
        q.setXYZ(i + 1, q.getX(i + 2), q.getY(i + 2), q.getZ(i + 2)); q.setXYZ(i + 2, x1, y1, z1);
      }
    }
    g.computeVertexNormals();
    shapeWidth(g, opts, width);
    if (opts.smooth) smoothNormals(g, opts.smooth);
    return g;
  };
  return mergeGeos([mk(1), mk(-1)]);
}

/** A semicircular wheel-arch notch as profile points, to be spliced into a side profile that runs
 *  along the sill from +z to -z (i.e. z DECREASING). `n` segments; the arc is the TOP half. */
function archNotch(zc: number, ySill: number, r: number, n = 7): number[][] {
  const pts: number[][] = [];
  for (let i = 0; i <= n; i++) {
    const a = i * Math.PI / n;               // 0 .. PI, from +z round the top to -z
    pts.push([zc + Math.cos(a) * r, ySill + Math.sin(a) * r]);
  }
  return pts;
}

/**
 * A WHEEL: one lathe about the axle. The profile runs from the hub face on one side over the rim
 * lip, the tyre sidewall, the tread and back down the far side, so the wheel is a closed solid with
 * no open end for the turntable gate to read through. Revolved about Y and then laid on X, so the
 * axle is the x axis and the wheel rolls about it -- which is the axis its pivot declares.
 *
 * Two vertex colours: `rimHex` on the hub and rim points, `tyreHex` on the sidewall and tread. The
 * lathe orders vertices segment-major (index = seg * pointCount + point), which is what lets a
 * per-profile-point colour be written without a second geometry.
 */
function wheelGeo(rTyre: number, rRim: number, halfW: number, seg: number,
                  tyreHex: number, rimHex: number, dish = 0.55, rimBand = 4): THREE.BufferGeometry {
  const hw = halfW;
  const pts: number[][] = [
    [0, -hw * dish], [rRim * 0.30, -hw * dish], [rRim * 0.62, -hw * 0.80], [rRim, -hw * 0.86], [rRim, -hw * 0.98],
    [rTyre * 0.93, -hw], [rTyre, -hw * 0.72], [rTyre, hw * 0.72], [rTyre * 0.93, hw],
    [rRim, hw * 0.98], [rRim, hw * 0.86], [rRim * 0.62, hw * 0.80], [rRim * 0.30, hw * dish], [0, hw * dish],
  ];
  // `rimBand` is the LAST profile point that carries the rim colour. Vertex colours interpolate,
  // so with the default 4 the whole sidewall from rRim out to rTyre * 0.93 is a gradient from the
  // rim tone to the tyre tone -- on a wheel whose rim is a small hub that paints most of the visible
  // disc pale, and the tuk-tuk's wheels read as grey plates rather than black tyres. Passing 2
  // stops the chrome at the hub cap and makes the sidewall tyre all the way in. The default is
  // unchanged, so every existing prop is byte-identical.
  const rimPoint = (j: number) => j <= rimBand || j >= pts.length - 1 - rimBand;
  const g = new THREE.LatheGeometry(pts.map((p) => new THREE.Vector2(p[0], p[1])), seg);
  const n = g.getAttribute('position').count;
  const col = new Float32Array(n * 3);
  const ct = new THREE.Color(tyreHex), cr = new THREE.Color(rimHex);
  for (let i = 0; i < n; i++) {
    const c = rimPoint(i % pts.length) ? cr : ct;
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.rotateZ(Math.PI / 2);    // lathe axis Y -> axle on X
  g.computeVertexNormals();
  return g;
}

/**
 * A STEEL WHEEL: the same closed lathe as wheelGeo, with the profile of a pressed-steel rim -- a
 * flat outer face, a dished centre stepping in past a dark VENT RING (the row of oval holes,
 * delivered as a band of vertex colour rather than as holes a turntable gate would read through),
 * a small hub cap standing proud -- and a chunkier tyre whose tread ring alternates a lighter and
 * a darker tone segment by segment, so the lugs read at prop distance for zero geometry. Per-point
 * colours ride the lathe's segment-major vertex order exactly as in wheelGeo.
 */
function steelWheelGeo(rTyre: number, rRim: number, halfW: number, seg: number,
                       tyreHex: number, rimHex: number, ventHex: number, lugHex: number, dish = 0.50): THREE.BufferGeometry {
  const hw = halfW, d = hw * dish;
  // [radius, axial] and a colour class per point: 0 rim, 1 vent ring, 2 tyre sidewall, 3 tread
  const pts: number[][] = [
    [0, -d + 0.02], [rRim * 0.22, -d + 0.02], [rRim * 0.24, -d],                       // hub cap
    [rRim * 0.40, -d], [rRim * 0.42, -d - 0.006],                                        // dish floor
    [rRim * 0.62, -d - 0.006], [rRim * 0.64, -hw * 0.86],                                // vent ring (dark)
    [rRim * 0.90, -hw * 0.86], [rRim, -hw * 0.90], [rRim, -hw * 0.98],                  // rim face and lip
    [rTyre * 0.88, -hw], [rTyre * 0.97, -hw * 0.86], [rTyre, -hw * 0.70],               // sidewall
    [rTyre, hw * 0.70],                                                                  // tread
    [rTyre * 0.97, hw * 0.86], [rTyre * 0.88, hw], [rRim, hw * 0.98],                   // far sidewall
    [rRim, hw * 0.88], [rRim * 0.30, hw * 0.80], [0, hw * 0.80],                          // back of the rim
  ];
  const cls = [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 2, 3, 3, 2, 2, 0, 0, 0, 0];
  const g = new THREE.LatheGeometry(pts.map((p) => new THREE.Vector2(p[0], p[1])), seg);
  const n = g.getAttribute('position').count;
  const col = new Float32Array(n * 3);
  const C = [new THREE.Color(rimHex), new THREE.Color(ventHex), new THREE.Color(tyreHex), new THREE.Color(lugHex)];
  const ct = new THREE.Color(tyreHex);
  for (let i = 0; i < n; i++) {
    const j = i % pts.length, s = Math.floor(i / pts.length);
    let c = C[cls[j]];
    if (cls[j] === 3) c = (s % 2 === 0) ? ct : C[3];
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.rotateZ(Math.PI / 2);
  g.computeVertexNormals();
  return g;
}

/**
 * An ALLOY WHEEL: the steel lathe's tyre with a shallow open dish -- a dark WINDOW floor between a
 * small centre cap and a bright rim lip -- and `spokeN` flat spoke bars laid across the dish in the
 * lathe's own axial frame, merged BEFORE the axle rotation so they ride the same instanced geometry.
 * The bars stand 12 mm off the floor (opposed faces, no z-fight) and read as a multi-spoke alloy at
 * prop distance where a per-segment vertex-colour star would blur across every face. Default-off:
 * only `wheels.style: 'alloy'` gets it. Colour classes: 0 rim, 1 window floor, 2 tyre, 3 tread.
 */
function alloyWheelGeo(rTyre: number, rRim: number, halfW: number, seg: number,
                       tyreHex: number, rimHex: number, windowHex: number, lugHex: number, dish = 0.35,
                       spokeN = 10, spokeW = 0.16): THREE.BufferGeometry {
  const hw = halfW, d = hw * dish;
  const pts: number[][] = [
    [0, -d + 0.015], [rRim * 0.16, -d + 0.015], [rRim * 0.18, -d],                       // centre cap
    [rRim * 0.20, -d], [rRim * 0.86, -d],                                                // window floor (dark)
    [rRim * 0.88, -hw * 0.88], [rRim, -hw * 0.92], [rRim, -hw * 0.98],                   // rim lip
    [rTyre * 0.88, -hw], [rTyre * 0.97, -hw * 0.86], [rTyre, -hw * 0.70],                // sidewall
    [rTyre, hw * 0.70],                                                                  // tread
    [rTyre * 0.97, hw * 0.86], [rTyre * 0.88, hw], [rRim, hw * 0.98],                    // far sidewall
    [rRim, hw * 0.88], [rRim * 0.30, hw * 0.80], [0, hw * 0.80],                          // back of the rim
  ];
  const cls = [0, 0, 0, 1, 1, 0, 0, 0, 2, 2, 3, 3, 2, 2, 0, 0, 0, 0];
  const g = new THREE.LatheGeometry(pts.map((p) => new THREE.Vector2(p[0], p[1])), seg);
  const n = g.getAttribute('position').count;
  const col = new Float32Array(n * 3);
  const C = [new THREE.Color(rimHex), new THREE.Color(windowHex), new THREE.Color(tyreHex), new THREE.Color(lugHex)];
  const ct = new THREE.Color(tyreHex);
  for (let i = 0; i < n; i++) {
    const j = i % pts.length, s = Math.floor(i / pts.length);
    let c = C[cls[j]];
    if (cls[j] === 3) c = (s % 2 === 0) ? ct : C[3];
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  // spokes: flat bars from the cap to the lip, in the lathe frame (axial = y), then rotated with it
  const bars: THREE.BufferGeometry[] = [];
  const r0 = rRim * 0.17, r1 = rRim * 0.89, len = r1 - r0, t = 0.024;
  for (let i = 0; i < spokeN; i++) {
    const b = new THREE.BoxGeometry(rRim * spokeW, t, len);
    b.translate(0, -d - 0.0115, r0 + len / 2);
    b.rotateY((i / spokeN) * Math.PI * 2);
    bars.push(tintGeo(b, rimHex));
  }
  const all = mergeGeos([g, ...bars]);
  all.rotateZ(Math.PI / 2);
  all.computeVertexNormals();
  return all;
}

/** Wire-spoked wheel dressing: `n` thin boxes radiating from the hub, laced alternately to each
 *  side of the rim so they cross the way real spokes do. Merged into the wheel geometry so the
 *  wheel stays ONE instanced geometry. */
function spokes(rHub: number, rRim: number, halfW: number, n: number, hex: number, t = 0.006, prism = false): THREE.BufferGeometry {
  const segs: THREE.BufferGeometry[] = [];
  for (let i = 0; i < n; i++) {
    const a = i * Math.PI * 2 / n;
    const side = (i % 2 === 0 ? 1 : -1) * halfW * 0.35;
    const len = rRim - rHub;
    // `prism`: an open three-sided prism at six triangles where the box costs twelve -- a wire
    // spoke has no resolvable section at prop distance, and sixty of them on three wheels is the
    // difference between a large prop inside its triangle ceiling and one over it
    const g = prism ? new THREE.CylinderGeometry(t * 0.62, t * 0.62, len, 3, 1, true) : new THREE.BoxGeometry(t, len, t);
    g.translate(0, rHub + len / 2, 0);
    g.rotateX(Math.atan2(side, len) * 0.6);
    g.rotateX(0); g.translate(0, 0, side * 0.5);
    g.rotateX(a);            // radiate around the axle (x)
    segs.push(g);
  }
  return tintGeo(mergeGeos(segs), hex);
}

/** A polyline TUBE: one cylinder per segment, each rotated onto its chord, with a small sphere-less
 *  overlap so the joints close. Handlebars, canopy rails, roll cages and frame tubes. */
function tube(pts: number[][], r: number, seg = 8, hex?: number, open = false): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const d = b.clone().sub(a); const len = d.length();
    if (len < 1e-6) continue;
    // `open`: no end discs -- for a run whose every end is buried in a joint, a ring or a hub, the
    // two caps are half the segment's triangles spent on faces nothing can see
    const g = new THREE.CylinderGeometry(r, r, len + r * 1.2, seg, 1, open);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    g.applyQuaternion(q);
    const m = a.clone().add(b).multiplyScalar(0.5);
    g.translate(m.x, m.y, m.z);
    parts.push(g);
  }
  const out = mergeGeos(parts);
  return hex === undefined ? out : tintGeo(out, hex);
}

/** A rotated box: [cx, cy, cz, w, h, d, rx, ry, rz] with the rotations applied in x, y, z order
 *  about the box's own centre. A bonnet lip, a raked mirror stem, a canopy stay. */
function rbox(b: number[]): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(b[3], b[4], b[5]);
  if (b[6]) g.rotateX(b[6]); if (b[7]) g.rotateY(b[7]); if (b[8]) g.rotateZ(b[8]);
  g.translate(b[0], b[1], b[2]);
  return g;
}

/** A batch of boxes, each tinted, merged: [[hex, cx, cy, cz, w, h, d, rx?, ry?, rz?], ...]. The
 *  trim component of every vehicle is one of these -- bumpers, grille, lamps, mirrors, handles,
 *  steps, arch flares -- so forty parts ride one submission. */
function tintedBoxes(list: number[][]): THREE.BufferGeometry {
  return mergeGeos(list.map((b) => tintGeo(rbox(b.slice(1)), b[0])));
}

/** Mirror a box list across x = 0 (left/right pairs). Rotations about y and z flip sign. */
function mirrorX(list: number[][]): number[][] {
  return list.flatMap((b) => [b, [b[0], -b[1], b[2], b[3], b[4], b[5], b[6], b[7] ?? 0, -(b[8] ?? 0), -(b[9] ?? 0)]]);
}

/** A seamless Canvas 2D tile: `draw(ctx, size)` paints it, and the result is a repeating texture
 *  in sRGB. Used AFTER material construction, so the textureless declaration stands and no
 *  procedural texture set is synthesised. Returns null where there is no DOM (the headless harness
 *  has one; a node-side probe does not), and every caller tolerates null. */
function canvasTile(size: number, draw: (ctx: CanvasRenderingContext2D, s: number) => void): THREE.CanvasTexture | null {
  if (typeof document === 'undefined') return null;
  const cv = document.createElement('canvas'); cv.width = size; cv.height = size;
  const ctx = cv.getContext('2d'); if (!ctx) return null;
  draw(ctx, size);
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

/** Deterministic pseudo-random for canvas dressing -- assigned by index, never Math.random, so the
 *  model is byte-identical on every build. */
function lcg(seed: number): () => number {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/**
 * MUD / ROAD-GRIME tile, RE-BASED. Thai road mud is tan and BRIGHTER than most paint, and a
 * multiplier cannot brighten: so the paint material carries the MUD ENVELOPE colour (measured on
 * the muddy sill), this tile carries the clean paint as a RATIO of that envelope over most of its
 * area (`base`), and the mud is painted as white -- i.e. the envelope itself -- in a wash rising
 * from the bottom to `coverage` of the tile height plus splatter above it. Bound with height UVs
 * so v = 0 is the ground and the wash sits on the sills and arches.
 */
function mudTile(size: number, base: number[], seed: number, coverage = 0.33,
                 opts: { floor?: number, streaks?: number, cloud?: number, speckle?: number, tone?: number[], zones?: number[][] } = {}): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const toHex = (v: number[]) => '#' + v.map((c) => Math.round(Math.min(1, Math.max(0, c)) * 255).toString(16).padStart(2, '0')).join('');
    ctx.fillStyle = toHex(base); ctx.fillRect(0, 0, s, s);
    // `floor` is the fraction of the tile height (i.e. of the world height the tile spans) below
    // which the wash is FULL: a body whose sill is 0.46 m up a 2 m tile wants the mud solid to
    // 0.23 and fading from there, not fading from the ground it never reaches.
    const fl = Math.min(coverage, opts.floor ?? 0);
    // `tone` is the MUD as a ratio of the envelope, for a paint whose envelope is the per-channel
    // max of clean paint and mud (a green whose mud is tan is brighter in red, darker in green):
    // unset, the mud is white -- the envelope itself.
    const T = opts.tone ? opts.tone.map((v) => Math.round(255 * Math.min(1, Math.max(0, v)))) : null;
    const mud = (a: number) => T ? `rgba(${T[0]},${T[1]},${T[2]},${a})` : `rgba(255,252,244,${a})`;
    const grad = ctx.createLinearGradient(0, s * (1 - fl), 0, s * (1 - coverage));
    grad.addColorStop(0, T ? mud(0.88) : 'rgba(255,255,255,0.88)');
    grad.addColorStop(0.45, T ? mud(0.45) : 'rgba(255,255,255,0.45)');
    grad.addColorStop(1, T ? mud(0) : 'rgba(255,255,255,0)');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, s, s);
    // `zones` are [u0, u1, weight] spans of the tile's width the spray concentrates in -- with
    // the tile fitted to the vehicle's length (heightUV uScale = L), that is "behind the front
    // wheel", "ahead of the rear arch", "along the bed side": where a wheel actually throws mud.
    const zones = opts.zones ?? [[0, 1, 1]];
    const zsum = zones.reduce((acc, zn) => acc + zn[2], 0);
    const pickU = () => { let t = rnd() * zsum; for (const zn of zones) { if (t < zn[2]) return (zn[0] + rnd() * (zn[1] - zn[0])) * s; t -= zn[2]; } return rnd() * s; };
    // DUST FILM: soft cloudy patches of the envelope over the clean paint everywhere, so the
    // upper body is not a flat fill -- the plate's green is a dull, dusty green.
    if (opts.cloud) for (let i = 0; i < 40; i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.08 + rnd() * 0.18), a = opts.cloud * (0.4 + rnd() * 0.6);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, mud(a)); g2.addColorStop(1, mud(0));
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); }
    }
    // SPRAY: the mud a wheel throws is a field of small splats streaked along the direction of
    // travel (u), densest just above the wash and thinning upward in clusters -- not a gradient.
    if (opts.streaks) for (let i = 0; i < opts.streaks; i++) {
      const cx0 = pickU(), band = coverage;
      const cy0 = s - s * (fl + Math.pow(rnd(), 1.6) * (band - fl));
      const count = 6 + Math.floor(rnd() * 18), spread = s * (0.02 + rnd() * 0.05);
      for (let k = 0; k < count; k++) {
        const x = cx0 + (rnd() - 0.5) * spread * 3, y = cy0 + (rnd() - 0.5) * spread;
        const w = 1 + rnd() * s * 0.006, h = 0.8 + rnd() * s * 0.003, a = 0.35 + rnd() * 0.55;
        ctx.fillStyle = mud(a);
        for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.ellipse(x + dx, y, w, h, 0, 0, Math.PI * 2); ctx.fill(); }
      }
    }
    if (opts.speckle) for (let i = 0; i < opts.speckle; i++) {
      const x = pickU(), y = s - Math.pow(rnd(), 1.3) * s * coverage, r = 0.6 + rnd() * 1.4, a = 0.3 + rnd() * 0.6;
      ctx.fillStyle = mud(a);
      for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y, r, 0, Math.PI * 2); ctx.fill(); }
    }
    for (let i = 0; i < 90; i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 2.2) * s * coverage * 1.35;
      const r = 3 + rnd() * s * 0.05;
      const a = 0.08 + rnd() * 0.28;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, T ? mud(a) : `rgba(255,250,240,${a})`); g2.addColorStop(1, T ? mud(0) : 'rgba(255,250,240,0)');
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y, r, 0, Math.PI * 2); ctx.fill(); }
    }
    // a little grain so the clean paint is not a flat fill
    for (let i = 0; i < 1200; i++) {
      const x = rnd() * s, y = rnd() * s; const v = rnd() < 0.5 ? 0 : 255;
      ctx.fillStyle = `rgba(${v},${v},${v},0.035)`; ctx.fillRect(x, y, 1.5, 1.5);
    }
  });
}

/** DUST tile for paint that is BRIGHTER than its dirt (a white van): a plain multiplier, white
 *  base and a grey-brown wash rising from the ground to `coverage`, plus soft blobs. */
function dustTile(size: number, dust: number[], seed: number, coverage = 0.30): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, s, s);
    const c = dust.map((v) => Math.round(255 * Math.min(1, v)));
    const grad = ctx.createLinearGradient(0, s, 0, s * (1 - coverage));
    grad.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},0.9)`);
    grad.addColorStop(0.5, `rgba(${c[0]},${c[1]},${c[2]},0.4)`);
    grad.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
    ctx.fillStyle = grad; ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 80; i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 2.2) * s * coverage * 1.4, r = 3 + rnd() * s * 0.05, a = 0.08 + rnd() * 0.25;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${a})`); g2.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y, r, 0, Math.PI * 2); ctx.fill(); }
    }
  });
}

/** GLASS tile for a vehicle's glazing band, bound as `map` on the glass material AFTER
 *  construction (the material stays textureless-declared). The pane's UVs are height-keyed
 *  (`heightUV`), so v runs sill-to-roof: the tile is a vertical gradient from the material's
 *  own tone at the top (white, i.e. the sky-lit value the material is re-based to) down to
 *  `low` at the bottom -- a real screen reflects sky at the top and the dark dash and road below
 *  -- plus a few soft diagonal reflection streaks and a faint tint band. `low` is a linear-space
 *  ratio (see emit.mjs `ratio`) of the measured side-glass tone over the sky-lit tone. */
function glassTile(size: number, low: number[], seed: number, streaks = 5): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const c = low.map((v) => Math.round(255 * Math.min(1, v)));
    const grad = ctx.createLinearGradient(0, s, 0, 0);
    grad.addColorStop(0, `rgb(${c[0]},${c[1]},${c[2]})`);
    grad.addColorStop(0.45, `rgb(${Math.round((c[0] + 255) / 2)},${Math.round((c[1] + 255) / 2)},${Math.round((c[2] + 255) / 2)})`);
    grad.addColorStop(1, '#ffffff');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, s, s);
    // reflection streaks: long soft diagonal bands, lighter, tiled in u so the seam never shows
    for (let i = 0; i < streaks; i++) {
      const x = rnd() * s, w = s * (0.04 + rnd() * 0.10), a = 0.10 + rnd() * 0.16, tilt = s * (0.25 + rnd() * 0.35);
      for (const dx of [-s, 0, s]) {
        const g2 = ctx.createLinearGradient(x + dx, 0, x + dx + w, 0);
        g2.addColorStop(0, 'rgba(255,255,255,0)'); g2.addColorStop(0.5, `rgba(255,255,255,${a})`); g2.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g2;
        ctx.beginPath(); ctx.moveTo(x + dx, s); ctx.lineTo(x + dx + w, s); ctx.lineTo(x + dx + w + tilt, 0); ctx.lineTo(x + dx + tilt, 0); ctx.closePath(); ctx.fill();
      }
    }
    // a darker film in the lowest tenth: the dash / cowl shadow behind the pane
    const g3 = ctx.createLinearGradient(0, s, 0, s * 0.88);
    g3.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},0.55)`); g3.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
    ctx.fillStyle = g3; ctx.fillRect(0, 0, s, s);
  });
}

/** CORRUGATED SHEET tile: vertical ridges as a sine-shaded stripe field, used as map AND bumpMap on
 *  a songthaew roof so the ridges catch light. `pitch` ridges per tile. */
function corrugationTile(size: number, pitch: number, low: number, seed: number): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    for (let x = 0; x < s; x++) {
      const t = (Math.cos(x / s * Math.PI * 2 * pitch) + 1) / 2;   // 1 at crest, 0 in trough
      const v = Math.round(255 * (low + (1 - low) * t));
      ctx.fillStyle = `rgb(${v},${v},${v})`; ctx.fillRect(x, 0, 1, s);
    }
    ctx.globalCompositeOperation = 'multiply';
    for (let i = 0; i < 60; i++) {
      const x = rnd() * s, y = rnd() * s, r = 4 + rnd() * s * 0.08;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.08 + rnd() * 0.18;
      g2.addColorStop(0, `rgba(120,90,60,${a})`); g2.addColorStop(1, 'rgba(120,90,60,0)');
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); }
    }
    ctx.globalCompositeOperation = 'source-over';
  });
}

/** PLANK tile: boards running along u with dark joints and grain streaks, a multiplier on a
 *  measured timber albedo. `boards` per tile. */
function plankTile(size: number, boards: number, seed: number): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, s, s);
    const bh = s / boards;
    for (let b = 0; b < boards; b++) {
      const tone = 0.82 + rnd() * 0.18;
      const v = Math.round(255 * tone);
      ctx.fillStyle = `rgb(${v},${v},${v})`; ctx.fillRect(0, b * bh, s, bh);
      ctx.fillStyle = 'rgba(40,30,20,0.55)'; ctx.fillRect(0, b * bh, s, Math.max(1, s * 0.006));
      for (let k = 0; k < 14; k++) {
        const y = b * bh + rnd() * bh, len = s * (0.2 + rnd() * 0.6), x = rnd() * s;
        ctx.strokeStyle = `rgba(60,45,30,${0.05 + rnd() * 0.12})`; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x - s, y); ctx.lineTo(x - s + len, y); ctx.moveTo(x, y); ctx.lineTo(x + len, y); ctx.stroke();
      }
    }
  });
}

/** RUST tile: a multiplier of blotched orange-brown over a base, dark cores lifted so nothing lands
 *  on the luma-58 hole gate. */
function rustTile(size: number, ratio: number[], seed: number, density = 90): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = 'multiply';
    for (let i = 0; i < density; i++) {
      const x = rnd() * s, y = rnd() * s, r = 3 + rnd() * s * 0.09;
      const a = 0.15 + rnd() * 0.45;
      const c = ratio.map((v) => Math.round(255 * v));
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${a})`); g2.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); }
    }
    ctx.globalCompositeOperation = 'source-over';
  });
}

/** Height-keyed UVs: v is world HEIGHT over `scale` metres, u runs along the dominant horizontal
 *  axis. A mud tile bound this way darkens the sills and stays clean on the roof -- a plain box
 *  projection would repeat the tile's dirty band across the roof as stripes. */
function heightUV(geo: THREE.BufferGeometry, scale: number,
                  opts: { uScale?: number, topClean?: boolean } = {}): THREE.BufferGeometry {
  const p = geo.getAttribute('position'), nrm = geo.getAttribute('normal');
  const uv = new Float32Array(p.count * 2);
  const us = opts.uScale ?? scale;
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
    const u = ax >= az ? p.getZ(i) : p.getX(i);
    let v = p.getY(i) / scale;
    // A tile keyed on height cannot tell a bonnet from a door at the same height, and a bonnet
    // is clean where a door is sprayed: `topClean` sends every upward face into the tile's top
    // band (v 0.75..0.95), above any wash, where only the dust film applies.
    if (opts.topClean && ay >= 0.8) v = 0.75 + 0.2 * (v - Math.floor(v));
    uv[i * 2] = u / us; uv[i * 2 + 1] = v;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}

/** Offset a closed polygon of [z, y] points outward by `d` along the averaged edge normals. Used
 *  to stand the glass band a few millimetres proud of the body's raked windscreen and rear glass
 *  faces, so the pane and the body never share a plane. Winding: counter-clockwise in (z, y). */
function offsetPoly(pts: number[][], d: number): number[][] {
  const n = pts.length, out: number[][] = [];
  for (let i = 0; i < n; i++) {
    const a = pts[(i + n - 1) % n], b = pts[i], c = pts[(i + 1) % n];
    const e1 = [b[0] - a[0], b[1] - a[1]], e2 = [c[0] - b[0], c[1] - b[1]];
    const l1 = Math.hypot(e1[0], e1[1]) || 1, l2 = Math.hypot(e2[0], e2[1]) || 1;
    // outward normal of a CCW edge (dz, dy) is (dy, -dz)
    const n1 = [e1[1] / l1, -e1[0] / l1], n2 = [e2[1] / l2, -e2[0] / l2];
    let nx = n1[0] + n2[0], ny = n1[1] + n2[1];
    const nl = Math.hypot(nx, ny) || 1; nx /= nl; ny /= nl;
    const cosHalf = Math.max(0.35, nx * n1[0] + ny * n1[1]);
    out.push([b[0] + nx * d / cosHalf, b[1] + ny * d / cosHalf]);
  }
  return out;
}

/** A wheel-arch FLARE: a half-annulus in the (z, y) plane, extruded across x0..x1 on both sides
 *  and tinted. Stands proud of the body side and hides the arch's cut edge. */
function flare(zc: number, yc: number, rIn: number, rOut: number, x0: number, x1: number, hex: number, n = 9): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  for (let i = 0; i <= n; i++) { const a = Math.PI - i * Math.PI / n; const z = zc + Math.cos(a) * rOut, y = yc + Math.sin(a) * rOut; if (i === 0) shape.moveTo(z, y); else shape.lineTo(z, y); }
  for (let i = n; i >= 0; i--) { const a = Math.PI - i * Math.PI / n; shape.lineTo(zc + Math.cos(a) * rIn, yc + Math.sin(a) * rIn); }
  shape.closePath();
  const mk = (sx: number) => {
    const g = new THREE.ExtrudeGeometry(shape, { depth: x1 - x0, bevelEnabled: false });
    g.rotateY(-Math.PI / 2); g.translate(x1, 0, 0); if (sx < 0) g.scale(-1, 1, 1);
    g.computeVertexNormals(); return tintGeo(g, hex);
  };
  const l = mk(-1), r = mk(1);
  // a negative scale flips the winding; restore it so the flare is not inside out
  const idx = l.getIndex(); if (idx) { const a = idx.array as any; for (let i = 0; i < a.length; i += 3) { const t = a[i + 1]; a[i + 1] = a[i + 2]; a[i + 2] = t; } idx.needsUpdate = true; }
  else { const p = l.getAttribute('position'); for (let i = 0; i < p.count; i += 3) { const x1_ = p.getX(i + 1), y1_ = p.getY(i + 1), z1_ = p.getZ(i + 1); p.setXYZ(i + 1, p.getX(i + 2), p.getY(i + 2), p.getZ(i + 2)); p.setXYZ(i + 2, x1_, y1_, z1_); } }
  l.computeVertexNormals();
  return mergeGeos([l, r]);
}

/** Seamless around-by-profile UVs for a LatheGeometry revolved about Y: u from the SEGMENT index
 *  (the lathe orders its vertices segment-major, index = seg * pointCount + point) so the duplicated
 *  seam column reads u = repeats exactly and RepeatWrapping closes it; v per PROFILE POINT from
 *  `vs` (one value per profile point), so the caller decides which tile rows land on the tread and
 *  which on the sidewalls. `pitch` is the tile size in metres around the widest radius. */
function latheUV(g: THREE.BufferGeometry, pointCount: number, seg: number, pitch: number, vs: number[]): void {
  const p = g.getAttribute('position');
  let rMax = 0;
  for (let i = 0; i < p.count; i++) rMax = Math.max(rMax, Math.hypot(p.getX(i), p.getZ(i)));
  const rep = Math.max(1, Math.round(2 * Math.PI * rMax / pitch));
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const s = Math.floor(i / pointCount), j = i % pointCount;
    uv[i * 2] = (s / seg) * rep; uv[i * 2 + 1] = vs[Math.min(j, vs.length - 1)];
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}

/** Pin every UV of a geometry to one texel -- the WHITE band a tyre tile keeps at its top -- so a
 *  rim, hub or spoke sharing the tyre's material renders its vertex colour unmultiplied. */
function pinUV(g: THREE.BufferGeometry, u: number, v: number): THREE.BufferGeometry {
  const uv = g.getAttribute('uv');
  for (let i = 0; i < uv.count; i++) uv.setXY(i, u, v);
  return g;
}

/**
 * An OPEN spoked wheel about the X axle: a tyre RING lathe (bead, sidewall, shoulder, tread and back
 * down the far side -- a closed torus-like profile, so nothing is open to the gate), a rim ring, a
 * brake-drum hub, and wire spokes as three-sided prisms. The closed dish `wheelGeo` fills the wheel
 * with a solid disc that HIDES the spokes it carries; a motorcycle's wire wheel reads by the daylight
 * through it, so the dish is gone. Tyre UVs are around-by-profile for a tread tile (`o.pitch` metres
 * per repeat around; v 0.5..0.96 is the treaded strip of `tyreTile`), rim, hub and spokes are pinned
 * to the tile's white band. Revolved about Y, then laid onto X.
 */
function openWheelGeo(rTyre: number, rRim: number, halfW: number, seg: number, o: any): THREE.BufferGeometry {
  const hw = halfW, rr = rRim * 1.02;
  const prof: number[][] = [
    [rr, -hw * 0.72], [rTyre * 0.90, -hw * 0.98], [rTyre * 0.985, -hw * 0.66], [rTyre, -hw * 0.30],
    [rTyre, hw * 0.30], [rTyre * 0.985, hw * 0.66], [rTyre * 0.90, hw * 0.98], [rr, hw * 0.72], [rr, -hw * 0.72],
  ];
  // v per profile point: sidewall 0.50..0.66, tread 0.66..0.80, sidewall 0.80..0.96 (0.96..1 is white)
  const vs = [0.50, 0.56, 0.64, 0.68, 0.78, 0.82, 0.90, 0.96, 0.96];
  const tyre = new THREE.LatheGeometry(prof.map((p) => new THREE.Vector2(p[0], p[1])), seg);
  latheUV(tyre, prof.length, seg, o.pitch ?? 0.05, vs);
  tyre.computeVertexNormals();
  const rimProf = [[rRim * 0.90, -hw * 0.50], [rRim, -hw * 0.62], [rRim, hw * 0.62], [rRim * 0.90, hw * 0.50], [rRim * 0.90, -hw * 0.50]];
  const rim = new THREE.LatheGeometry(rimProf.map((p) => new THREE.Vector2(p[0], p[1])), seg);
  rim.computeVertexNormals();
  const hubR = o.hubR ?? rRim * 0.32, hubW = o.hubW ?? hw * 2.6;
  const hub = new THREE.CylinderGeometry(hubR, hubR, hubW, o.hubSeg ?? 12);
  const hubCap = new THREE.CylinderGeometry(hubR * 0.55, hubR * 0.55, hubW * 1.25, o.hubSeg ?? 12);
  const parts = [tintGeo(tyre, o.tyreHex), pinUV(tintGeo(rim, o.rimHex), 0.5, 0.985),
                 pinUV(tintGeo(hub, o.hubHex ?? o.rimHex), 0.5, 0.985), pinUV(tintGeo(hubCap, o.capHex ?? o.rimHex), 0.5, 0.985)];
  const g = mergeGeos(parts);
  g.rotateZ(Math.PI / 2);                     // lathe axis Y -> the axle on X
  const sp = pinUV(spokes(hubR * 0.9, rRim * 0.95, hw, o.spokes ?? 20, o.spokeHex ?? 0xb0aea9, o.spokeT ?? 0.006, true), 0.5, 0.985);
  return mergeGeos([g, sp]);
}

/** TYRE tile, ported from the prop template: `o.pitch` metres around (via latheUV), the strip at
 *  v 0.5..0.96 a treaded tyre (circumferential grooves cut by staggered sipes, bead rings, mould
 *  lines, road dust on the lower shoulder, grey scuffs, grain), v 0..0.5 a worn slick, and the top
 *  4% pure WHITE so pinned parts render their vertex colour. Drawn as RATIOS against the
 *  vertex-coloured rubber at `base` (200/255 -> the tyre tone is authored 1.275x its albedo so dust
 *  and scuffs can go BRIGHTER than the rubber under a multiply canvas). `o.band` is the tread's
 *  share of the strip, top to bottom, and must agree with openWheelGeo's tread rows. */
function tyreTile(size: number, seed: number, o: any): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const base = o.base ?? 200, band = o.band ?? [0.35, 0.65], groove = o.groove ?? 0.45;
    const gv = Math.round(base * groove), rv = Math.round(base * 0.7), mv = Math.round(base * 0.9);
    const dust = o.dust ?? [232, 214, 190];
    const white = Math.round(s * 0.04);
    ctx.fillStyle = `rgb(${base},${base},${base})`; ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < s * s / 6; i++) { const v = base + Math.round((rnd() - 0.5) * 22); ctx.fillStyle = `rgb(${v},${v},${v})`; ctx.fillRect(rnd() * s, rnd() * s, 2, 2); }
    const strip = (ya: number, yb: number, treaded: boolean) => {
      const h = yb - ya, b0 = ya + h * (1 - band[1]), b1 = ya + h * (1 - band[0]);
      const ng = o.grooves ?? 3, gw = h * 0.024;
      ctx.fillStyle = `rgb(${gv},${gv},${gv})`;
      for (let i = 0; i < ng; i++) { const y = b0 + (b1 - b0) * (i + 1) / (ng + 1); ctx.fillRect(0, y - gw / 2, s, gw); }
      const ns = o.sipes ?? 2, w = s * (o.sipeWidth ?? 0.05);
      for (let k = 0; k <= ng; k++) {
        const y0 = k === 0 ? b0 : b0 + (b1 - b0) * k / (ng + 1) + gw / 2, y1 = k === ng ? b1 : b0 + (b1 - b0) * (k + 1) / (ng + 1) - gw / 2;
        const outer = k === 0 || k === ng;
        if (!treaded && !outer) continue;
        const ys0 = treaded ? y0 : (k === 0 ? y0 : y1 - (y1 - y0) * 0.45), ys1 = treaded ? y1 : (k === 0 ? y0 + (y1 - y0) * 0.45 : y1);
        for (let i = 0; i < ns; i++) {
          const x = ((i + 0.5) / ns + (k % 2) * 0.5 / ns) * s + (rnd() - 0.5) * s * 0.06, sl = (rnd() - 0.5) * s * 0.08;
          for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.moveTo(x + dx, ys0); ctx.lineTo(x + dx + w, ys0); ctx.lineTo(x + dx + w + sl, ys1); ctx.lineTo(x + dx + sl, ys1); ctx.closePath(); ctx.fill(); }
        }
      }
      const sh = ctx.createLinearGradient(0, b0 - h * 0.03, 0, b0 + h * 0.02); sh.addColorStop(0, `rgba(${gv},${gv},${gv},0)`); sh.addColorStop(1, `rgba(${gv},${gv},${gv},0.45)`);
      ctx.fillStyle = sh; ctx.fillRect(0, b0 - h * 0.03, s, h * 0.05);
      ctx.fillStyle = `rgb(${rv},${rv},${rv})`; ctx.fillRect(0, ya + h * 0.045, s, h * 0.012); ctx.fillRect(0, ya + h * 0.94, s, h * 0.012);
      ctx.fillStyle = `rgb(${mv},${mv},${mv})`; ctx.fillRect(0, ya + h * 0.11, s, 2); ctx.fillRect(0, ya + h * 0.88, s, 2);
      const dg = ctx.createLinearGradient(0, yb, 0, ya + h * 0.6); dg.addColorStop(0, `rgba(${dust[0]},${dust[1]},${dust[2]},${o.dustAlpha ?? 0.35})`); dg.addColorStop(1, `rgba(${dust[0]},${dust[1]},${dust[2]},0)`);
      ctx.fillStyle = dg; ctx.fillRect(0, ya + h * 0.6, s, h * 0.4);
      for (let i = 0; i < (o.scuffs ?? 14); i++) {
        const x = rnd() * s, y = rnd() < 0.5 ? b0 + (rnd() - 0.3) * h * 0.08 : b1 + (rnd() - 0.7) * h * 0.08, r = s * (0.02 + rnd() * 0.05), v = 225 + Math.round(rnd() * 25);
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, r); g2.addColorStop(0, `rgba(${v},${v},${v},0.5)`); g2.addColorStop(1, `rgba(${v},${v},${v},0)`);
        ctx.fillStyle = g2; for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.ellipse(x + dx, y, r * 2.2, r * 0.6, 0, 0, Math.PI * 2); ctx.fill(); }
      }
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < 60; i++) { const x = rnd() * s, y = b0 + rnd() * (b1 - b0), v = 6 + Math.round(rnd() * 14); ctx.fillStyle = `rgb(${v},${Math.round(v * 0.9)},${Math.round(v * 0.75)})`; ctx.fillRect(x, y, 2 + rnd() * 6, 2 + rnd() * 3); }
      ctx.globalCompositeOperation = 'source-over';
    };
    strip(white, s / 2, true);   // v 0.5..0.96: treaded
    strip(s / 2, s, false);      // v 0..0.5: slick
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, s, white);   // v 0.96..1: white, for pinned parts
  });
}

/**
 * A DRAPED SHEET (ported from the prop template): `heights[j][i]` is the top surface at x = x0..x1
 * (i over nx) and z = z0..z1 (j over nz); the sheet is `t` thick. Top and underside are smooth-shaded
 * grids, the four edges are flat strips wound outward. A canvas canopy is a ridge line minus the sag
 * between its posts minus the droop of its free edges -- cloth, where a slab reads as a painted box.
 */
function sheet(s: any): THREE.BufferGeometry {
  const nx: number = s.nx, nz: number = s.nz, Hh: number[][] = s.heights, t: number = s.t ?? 0.012;
  const X = (i: number) => s.x0 + (s.x1 - s.x0) * i / nx;
  const Z = (j: number) => s.z0 + (s.z1 - s.z0) * j / nz;
  const grid = (yOff: number, flip: boolean) => {
    const pos: number[] = [], uv: number[] = [], idx: number[] = [];
    for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) { pos.push(X(i), Hh[j][i] + yOff, Z(j)); uv.push(i / nx, j / nz); }
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1;
      if (flip) idx.push(a, b, c, b, d, c); else idx.push(a, c, b, b, c, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals(); return g;
  };
  const parts = [grid(0, false), grid(-t, true)];
  const strip = (pts: number[][][], out: number[]) => {
    const pos: number[] = [], uv: number[] = [];
    for (const [p0, p1] of pts) {
      const q0 = p0, q1 = p1, q2 = [p1[0], p1[1] - t, p1[2]], q3 = [p0[0], p0[1] - t, p0[2]];
      const e1 = [q1[0] - q0[0], q1[1] - q0[1], q1[2] - q0[2]], e2 = [q2[0] - q0[0], q2[1] - q0[1], q2[2] - q0[2]];
      const n = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
      const tri = n[0] * out[0] + n[1] * out[1] + n[2] * out[2] >= 0 ? [q0, q1, q2, q0, q2, q3] : [q0, q2, q1, q0, q3, q2];
      for (const q of tri) { pos.push(q[0], q[1], q[2]); uv.push(0, 0); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.computeVertexNormals(); return g;
  };
  const top = (i: number, j: number) => [X(i), Hh[j][i], Z(j)];
  const e0: number[][][] = [], e1: number[][][] = [], e2: number[][][] = [], e3: number[][][] = [];
  for (let i = 0; i < nx; i++) { e0.push([top(i, 0), top(i + 1, 0)]); e1.push([top(i, nz), top(i + 1, nz)]); }
  for (let j = 0; j < nz; j++) { e2.push([top(0, j), top(0, j + 1)]); e3.push([top(nx, j), top(nx, j + 1)]); }
  parts.push(strip(e0, [0, 0, -1]), strip(e1, [0, 0, 1]), strip(e2, [-1, 0, 0]), strip(e3, [1, 0, 0]));
  return mergeGeos(parts);
}

/** Bind a post-construction canvas tile to a material as map (and bump), leaving the textureless
 *  declaration intact: no procedural texture set is synthesised, the measured colour stays the
 *  multiplicand, and the whole thing costs one canvas. */
/** Tractor-tyre LUGS: `n` bars laid across the tread, each yawed alternately +-`skew` rad about
 *  its own radial so consecutive bars read as the chevron of an agricultural tyre, standing `h`
 *  proud of the tread ring. Built about the X axle like wheelGeo and merged INTO the wheel
 *  geometry, so the wheel stays ONE instanced geometry and the lugs cost nothing per instance.
 *  Default-off: only a cfg that sets `bike.lugs` gets them. */
function lugs(rTyre: number, halfW: number, o: any): THREE.BufferGeometry {
  const n = o.n ?? 16, h = o.h ?? 0.04, parts: THREE.BufferGeometry[] = [];
  for (let i = 0; i < n; i++) {
    const g = new THREE.BoxGeometry(halfW * 2 * (o.w ?? 0.85), h, o.d ?? 0.06);
    g.rotateY((i % 2 === 0 ? 1 : -1) * (o.skew ?? 0.4));
    g.translate(0, rTyre - h * 0.35, 0);
    g.rotateX((i / n) * Math.PI * 2 + (o.phase ?? 0));
    parts.push(g);
  }
  return tintGeo(mergeGeos(parts), o.hex ?? 0x555555);
}

function bindTile(mat: THREE.MeshStandardMaterial, tex: THREE.CanvasTexture | null, bump = 0): void {
  if (!tex) return;
  mat.map = tex;
  if (bump > 0) { mat.bumpMap = tex; mat.bumpScale = bump; }
  mat.needsUpdate = true;
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

export function createIsuzuDMaxModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Isuzu D-Max';

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

  /* ---------------------------------------------------------------- car body (shared template) */
  const W = G.width as number;
  const wh = G.wheels as any;

  // 1. BODY: the side outline closed along the sill with a wheel-arch notch at each axle, swept
  //    across the width, then narrowed above the belt (tumblehome) and rounded in plan at the ends.
  const outline: number[][] = (G.outline as number[][]).slice();
  const sill = G.sill as number;
  const rA = wh.arch as number;
  const archPts = (zc: number) => { const p: number[][] = []; for (let i = 0; i <= 8; i++) { const a = Math.PI - i * Math.PI / 8; p.push([zc + Math.cos(a) * rA, wh.r + Math.sin(a) * rA]); } return p; };
  const zRearSill = outline[outline.length - 1][0], zFrontSill = outline[0][0];
  const sillRun: number[][] = [];
  for (const zc of [wh.zR, wh.zF]) {
    if (zc - rA > zRearSill && zc + rA < zFrontSill) sillRun.push(...archPts(zc));
  }
  const profile = outline.concat(sillRun.length ? sillRun : []);
  // `shape` may add steps and shoulder / nose / tail roundings; the body's own profile and width
  // are the reference every proud band is rounded against, so they are set here and not per cfg.
  const shapeOpts: any = { tumble: G.tumble, plan: G.plan, ...((G.shape as any) ?? {}), baseWidth: W, topOf: profile };
  const bodyGeos: THREE.BufferGeometry[] = [tintGeo(sideExtrude(profile, W, shapeOpts), G.paintHex)];
  for (const b of (G.bodyBoxes ?? []) as number[][]) bodyGeos.push(tintGeo(rbox(b.slice(1)), b[0]));
  for (const ex of (G.bodyExtrudes ?? []) as any[]) {
    bodyGeos.push(tintGeo(sideExtrude(ex.poly, ex.width ?? W, ex.shape ?? {}), ex.hex ?? G.paintHex));
  }
  const uvOpts = { uScale: G.mudUScale as number | undefined, topClean: !!G.mudTopClean };
  const bodyGeo = heightUV(mergeGeos(bodyGeos), G.mudScale ?? 1.2, uvOpts);
  const body = add('body', 'Body shell', bodyGeo, 'paint');
  if (G.collider) colliders['body'] = G.collider;

  // 2. GLASS: the glasshouse polygon offset outward so every pane stands proud of the body's own
  //    raked faces, swept at the body width plus the same margin, narrowed by the same tumblehome.
  const glassGeos: THREE.BufferGeometry[] = [];
  const gl = G.glass as any;
  if (gl?.poly) glassGeos.push(sideExtrude(offsetPoly(gl.poly, gl.proud ?? 0.006), W + 2 * (gl.proud ?? 0.006), shapeOpts));
  for (const b of (gl?.boxes ?? []) as number[][]) glassGeos.push(rbox(b));
  if (glassGeos.length) {
    let gg = tintGeo(mergeGeos(glassGeos), gl.hex ?? 0xffffff);
    // pane UVs: v runs 0..1 from the glass sill `uvY[0]` to the pane top `uvY[1]`, u along the
    // pane in metres over `uScale`, so a glass tile's sky gradient spans every pane top to
    // bottom; harmless without a tile
    if (gl.uvY) {
      const q = gg.getAttribute('position'), nq = gg.getAttribute('normal'), uv = new Float32Array(q.count * 2);
      const us = gl.uScale ?? 1.6, y0 = gl.uvY[0], y1 = gl.uvY[1];
      for (let i = 0; i < q.count; i++) {
        const u = Math.abs(nq.getX(i)) >= Math.abs(nq.getZ(i)) ? q.getZ(i) : q.getX(i);
        uv[i * 2] = u / us; uv[i * 2 + 1] = Math.min(1, Math.max(0, (q.getY(i) - y0) / (y1 - y0)));
      }
      gg.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    }
    add('glazing', 'Glazing', gg, 'glass');
  }

  // 3. PILLARS and roof details ride the body's paint but are a separate merge so they can stand
  //    proud of the glass; they join the body component (one draw call) by being merged in.
  const pillarGeos: THREE.BufferGeometry[] = [];
  for (const pl of (G.pillars ?? []) as any[]) {
    // a plain polygon sweeps the full width (the old behaviour); { poly, strip } sweeps only a
    // strip that deep at each side, which is what a pillar beside a pane is
    if (Array.isArray(pl)) pillarGeos.push(tintGeo(sideExtrude(pl, W + 2 * 0.013, shapeOpts), G.paintHex));
    // `hex` tints one strip away from the paint (a black window gasket or drip rail); default the paint
    else pillarGeos.push(tintGeo(sideStrip(pl.poly, W + 2 * (pl.proud ?? 0.013), pl.strip ?? 0.10, shapeOpts), pl.hex ?? G.paintHex));
  }
  if (pillarGeos.length) {
    const pg = heightUV(mergeGeos(pillarGeos), G.mudScale ?? 1.2, uvOpts);
    const merged = heightUV(mergeGeos([body.geometry as THREE.BufferGeometry, pg]), G.mudScale ?? 1.2, uvOpts);
    body.geometry = merged;
  }

  // 4. TRIM: bumpers, grille, lamps, mirrors, handles, steps, arch flares and the inner wings that
  //    stop the through-arch reading as daylight -- every one a tinted box on ONE white material.
  const trimList: number[][] = [];
  for (const b of (G.trim ?? []) as number[][]) trimList.push(b);
  for (const b of mirrorX((G.trimMirrored ?? []) as number[][])) trimList.push(b);
  const trimGeos: THREE.BufferGeometry[] = [tintedBoxes(trimList)];
  for (const zc of [wh.zF, wh.zR]) {
    if (wh.flare) trimGeos.push(flare(zc, wh.r, rA + 0.005, rA + wh.flare, W / 2 - 0.012, W / 2 + (wh.flareOut ?? 0.03), wh.flareHex ?? 0x2a2a2a));
    // inner wing: a dark box between the wheels' inner faces filling the arch void
    const innerHalf = wh.track - wh.halfW - 0.005;
    trimGeos.push(tintGeo(boxAt(0, (sill + wh.r + rA - 0.02) / 2 + 0.0, zc, innerHalf * 2, (wh.r + rA - 0.02) - sill + 0.10, (rA - 0.03) * 2), wh.wellHex ?? 0x2b2926));
  }
  for (const t of (G.tubes ?? []) as any[]) trimGeos.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
  for (const c of (G.cyls ?? []) as any[]) {
    const g = new THREE.CylinderGeometry(c.rt, c.rb, c.h, c.seg ?? 12);
    if (c.rx) g.rotateX(c.rx); if (c.rz) g.rotateZ(c.rz);
    g.translate(c.at[0], c.at[1], c.at[2]);
    trimGeos.push(tintGeo(g, c.hex));
  }
  add('trim', 'Trim, lamps, bumpers and wheel wells', mergeGeos(trimGeos), 'trim');

  // 5. WHEELS: one lathe, four (or however many) instances, each a named pivot on the axle.
  const wheelG = wh.style === 'alloy'
    ? alloyWheelGeo(wh.r, wh.rim, wh.halfW, wh.seg ?? 24, wh.tyreHex, wh.rimHex, wh.windowHex ?? 0x2a2826, wh.lugHex ?? wh.tyreHex, wh.dish ?? 0.35, wh.spokes ?? 10, wh.spokeW ?? 0.16)
    : wh.style === 'steel'
    ? steelWheelGeo(wh.r, wh.rim, wh.halfW, wh.seg ?? 24, wh.tyreHex, wh.rimHex, wh.ventHex ?? 0x4a4842, wh.lugHex ?? wh.tyreHex, wh.dish ?? 0.50)
    : wheelGeo(wh.r, wh.rim, wh.halfW, wh.seg ?? 20, wh.tyreHex, wh.rimHex, wh.dish ?? 0.55);
  // `lugs` merges a ring of tread blocks into the SAME wheel geometry (one unique geometry, one
  // instanced submission): mud-terrain tyres whose lugs stand off the tread read at prop distance.
  const wheelG2 = wh.lugs ? mergeGeos([wheelG, lugs(wh.r, wh.halfW, wh.lugs)]) : wheelG;
  const wheelMats: THREE.Matrix4[] = [];
  for (const p of wh.positions as number[][]) {
    wheelMats.push(new THREE.Matrix4().compose(new THREE.Vector3(p[0], p[1], p[2]),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), p[0] < 0 ? Math.PI : 0), new THREE.Vector3(1, 1, 1)));
  }
  addInst('wheels', 'Wheels', wheelG2, 'trim', wheelMats);

  // 6. EXTRA components declared by the cfg (a corrugated roof, a bed floor, a canopy) -- each
  //    its own material and submission, costed in the blockout.
  for (const ex of (G.extras ?? []) as any[]) {
    const gs: THREE.BufferGeometry[] = [];
    for (const b of (ex.boxes ?? []) as number[][]) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const b of mirrorX((ex.boxesMirrored ?? []) as number[][])) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const t of (ex.tubes ?? []) as any[]) gs.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
    for (const e of (ex.extrudes ?? []) as any[]) gs.push(tintGeo(sideExtrude(e.poly, e.width, e.shape ?? {}), e.hex));
    let g = mergeGeos(gs);
    if (ex.uv === 'world') g = worldUV(g, ex.uvScale ?? 1);
    if (ex.uv === 'height') g = heightUV(g, ex.uvScale ?? 1);
    add(ex.id, ex.name, g, ex.material);
  }

  // 7. Post-construction canvases: bound AFTER material construction so the textureless
  //    declarations stand. Every tone is a measured ratio recorded on the material in the spec.
  for (const t of (CONFIG.tiles ?? []) as any[]) {
    const mat = materials[t.material];
    if (!mat) continue;
    let tex: THREE.CanvasTexture | null = null;
    if (t.kind === 'mud') tex = mudTile(t.size ?? 512, t.base, t.seed ?? 1, t.coverage ?? 0.33, t.opts ?? {});
    if (t.kind === 'dust') tex = dustTile(t.size ?? 512, t.dust, t.seed ?? 1, t.coverage ?? 0.30);
    if (t.kind === 'corrugation') tex = corrugationTile(t.size ?? 256, t.pitch ?? 24, t.low ?? 0.72, t.seed ?? 3);
    if (t.kind === 'plank') tex = plankTile(t.size ?? 512, t.boards ?? 6, t.seed ?? 5);
    if (t.kind === 'rust') tex = rustTile(t.size ?? 512, t.ratio, t.seed ?? 7, t.density ?? 90);
    if (t.kind === 'glass') tex = glassTile(t.size ?? 256, t.low, t.seed ?? 9, t.streaks ?? 5);
    bindTile(mat, tex, t.bump ?? 0);
  }

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
  const root = createIsuzuDMaxModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: the root, plus ONE PER WHEEL (and any other mechanism CONFIG.pivots names -- a
    // steering head, a canopy stay). A vehicle's wheels genuinely turn, so each one is a promise
    // kept: the pivot sits at the hub, its axis is the axle, and `instance` names which instance
    // of the wheel InstancedMesh it drives. Nothing else on the prop moves -- the doors are part
    // of the body shell -- so nothing else gets an axis.
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
    for (const pv of (CONFIG.pivots ?? []) as any[]) {
      const o = new THREE.Object3D();
      o.name = pv.name;
      o.position.set(pv.position[0], pv.position[1], pv.position[2]);
      o.userData.actionProfile = {
        animationRole: 'child',
        pivot: { mode: 'custom', localPosition: pv.position, axis: pv.axis, name: pv.name,
                 component: pv.component, instance: pv.instance ?? null, notes: pv.note ?? '' },
      };
      root.add(o);
      pivots.push(o);
    }

    // Sockets: NONE unless CONFIG.sockets names one. Nothing attaches to a vehicle in this kit
    // and nothing is emitted from it.

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
