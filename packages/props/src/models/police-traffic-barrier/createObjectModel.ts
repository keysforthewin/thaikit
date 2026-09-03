import * as THREE from 'three';

/**
 * Police Traffic Barrier -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 1.5 x 1.1 x 0.66 m, origin base-center, +Y up, +Z front (the sign face), +X along the panel.
 * Budget (medium): <=2000 triangles, <=2 draw calls, <=2 materials, <=4 unique geometries.
 *
 * This is one of thaikit's STREET AND VENDOR PROPS -- a cone, a barrier, a cart, a stool. The
 * shared vocabulary is the TINTED BOX and the polyline TUBE merged into one geometry per material,
 * with every colour difference inside a material carried as a vertex colour on a WHITE material,
 * and surface identity (corrugation, grime wash, moss, plank joints, rust) delivered as ONE
 * post-construction canvas tile per material rather than as geometry or a procedural texture set.
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
    "id": "police-traffic-barrier",
    "name": "Police Traffic Barrier",
    "exportName": "PoliceTrafficBarrier",
    "envelope": "Envelope 1.5 x 1.1 x 0.66 m, origin base-center, +Y up, +Z front (the sign face), +X along the panel.\n * Budget (medium): <=2000 triangles, <=2 draw calls, <=2 materials, <=4 unique geometries.",
    "materials": [
      {
        "id": "steel",
        "color": 16777215,
        "roughness": 0.55,
        "metalness": 0.3,
        "vertexColors": true
      },
      {
        "id": "sign",
        "color": 16777215,
        "roughness": 0.5,
        "metalness": 0
      }
    ],
    "tiles": [
      {
        "material": "steel",
        "kind": "rust",
        "size": 256,
        "seed": 161,
        "ratio": [
          0.7,
          0.52,
          0.38
        ],
        "density": 30
      },
      {
        "material": "sign",
        "kind": "baked",
        "uri": "data:image/webp;base64,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"
      }
    ],
    "geometry": {
      "components": [
        {
          "id": "frame",
          "name": "Tube A-frames",
          "material": "steel",
          "uv": "height",
          "uvScale": 0.35,
          "collider": {
            "shape": "box",
            "localCenter": [
              0,
              0.55,
              0
            ],
            "halfExtents": [
              0.75,
              0.55,
              0.33
            ],
            "notes": "Declared on the asset as box: the whole barrier envelope."
          },
          "tubes": [
            {
              "pts": [
                [
                  -0.732,
                  1.08,
                  0
                ],
                [
                  -0.732,
                  0.012,
                  0.31
                ]
              ],
              "r": 0.018,
              "seg": 8,
              "hex": 10132636
            },
            {
              "pts": [
                [
                  -0.732,
                  1.08,
                  0
                ],
                [
                  -0.732,
                  0.012,
                  -0.31
                ]
              ],
              "r": 0.018,
              "seg": 8,
              "hex": 10132636
            },
            {
              "pts": [
                [
                  -0.732,
                  0.24,
                  0.2531111111111111
                ],
                [
                  -0.732,
                  0.24,
                  -0.2531111111111111
                ]
              ],
              "r": 0.0144,
              "seg": 8,
              "hex": 10132636
            },
            {
              "pts": [
                [
                  -0.732,
                  0.012,
                  0.3065555555555556
                ],
                [
                  -0.732,
                  0.08,
                  0.28703703703703703
                ]
              ],
              "r": 0.0195,
              "seg": 8,
              "hex": 7298122
            },
            {
              "pts": [
                [
                  -0.732,
                  0.012,
                  -0.3065555555555556
                ],
                [
                  -0.732,
                  0.08,
                  -0.28703703703703703
                ]
              ],
              "r": 0.0195,
              "seg": 8,
              "hex": 7298122
            },
            {
              "pts": [
                [
                  -0.732,
                  0.215,
                  0.24828703703703703
                ],
                [
                  -0.732,
                  0.265,
                  0.2339351851851852
                ]
              ],
              "r": 0.0195,
              "seg": 8,
              "hex": 8747628
            },
            {
              "pts": [
                [
                  -0.732,
                  0.215,
                  -0.24828703703703703
                ],
                [
                  -0.732,
                  0.265,
                  -0.2339351851851852
                ]
              ],
              "r": 0.0195,
              "seg": 8,
              "hex": 8747628
            },
            {
              "pts": [
                [
                  -0.732,
                  1.06,
                  0
                ],
                [
                  -0.732,
                  1.082,
                  0
                ]
              ],
              "r": 0.0195,
              "seg": 8,
              "hex": 8747628
            },
            {
              "pts": [
                [
                  0.732,
                  1.08,
                  0
                ],
                [
                  0.732,
                  0.012,
                  0.31
                ]
              ],
              "r": 0.018,
              "seg": 8,
              "hex": 10132636
            },
            {
              "pts": [
                [
                  0.732,
                  1.08,
                  0
                ],
                [
                  0.732,
                  0.012,
                  -0.31
                ]
              ],
              "r": 0.018,
              "seg": 8,
              "hex": 10132636
            },
            {
              "pts": [
                [
                  0.732,
                  0.24,
                  0.2531111111111111
                ],
                [
                  0.732,
                  0.24,
                  -0.2531111111111111
                ]
              ],
              "r": 0.0144,
              "seg": 8,
              "hex": 10132636
            },
            {
              "pts": [
                [
                  0.732,
                  0.012,
                  0.3065555555555556
                ],
                [
                  0.732,
                  0.08,
                  0.28703703703703703
                ]
              ],
              "r": 0.0195,
              "seg": 8,
              "hex": 7298122
            },
            {
              "pts": [
                [
                  0.732,
                  0.012,
                  -0.3065555555555556
                ],
                [
                  0.732,
                  0.08,
                  -0.28703703703703703
                ]
              ],
              "r": 0.0195,
              "seg": 8,
              "hex": 7298122
            },
            {
              "pts": [
                [
                  0.732,
                  0.215,
                  0.24828703703703703
                ],
                [
                  0.732,
                  0.265,
                  0.2339351851851852
                ]
              ],
              "r": 0.0195,
              "seg": 8,
              "hex": 8747628
            },
            {
              "pts": [
                [
                  0.732,
                  0.215,
                  -0.24828703703703703
                ],
                [
                  0.732,
                  0.265,
                  -0.2339351851851852
                ]
              ],
              "r": 0.0195,
              "seg": 8,
              "hex": 8747628
            },
            {
              "pts": [
                [
                  0.732,
                  1.06,
                  0
                ],
                [
                  0.732,
                  1.082,
                  0
                ]
              ],
              "r": 0.0195,
              "seg": 8,
              "hex": 8747628
            },
            {
              "pts": [
                [
                  -0.75,
                  1.04,
                  -0.03
                ],
                [
                  0.75,
                  1.04,
                  -0.03
                ]
              ],
              "r": 0.018,
              "seg": 8,
              "hex": 10132636
            },
            {
              "pts": [
                [
                  -0.732,
                  0.24,
                  0.217
                ],
                [
                  -0.495,
                  0.49,
                  0
                ]
              ],
              "r": 0.012599999999999998,
              "seg": 6,
              "hex": 10132636
            },
            {
              "pts": [
                [
                  0.732,
                  0.24,
                  -0.217
                ],
                [
                  0.495,
                  0.49,
                  0
                ]
              ],
              "r": 0.012599999999999998,
              "seg": 6,
              "hex": 10132636
            }
          ],
          "boxes": [
            [
              10132636,
              -0.69,
              1.04,
              0.014,
              0.016,
              0.016,
              0.008
            ],
            [
              10132636,
              -0.69,
              0.52,
              0.014,
              0.016,
              0.016,
              0.008
            ],
            [
              10132636,
              0.69,
              1.04,
              0.014,
              0.016,
              0.016,
              0.008
            ],
            [
              10132636,
              0.69,
              0.52,
              0.014,
              0.016,
              0.016,
              0.008
            ]
          ]
        },
        {
          "id": "sign",
          "name": "Chevron sign panel",
          "material": "sign",
          "parent": "frame",
          "boxes": [
            [
              16777215,
              0,
              0.78,
              0,
              1.44,
              0.6,
              0.02
            ]
          ]
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
/** LatheGeometry shares the corner vertex between an end disc and the side wall, so
 *  computeVertexNormals tilts the wall's first ring 45 degrees toward the disc and the harness shades
 *  a dark gradient there -- a ring the turntable gate read as a HOLE under the stainless bin's cap.
 *  Inserting a point 0.8 mm past every sharp corner (> 70 degrees) confines the averaged normal to that
 *  sliver. Costs one ring per corner; pass `sharp = false` where the budget cannot carry it. */
function splitCorners(pts: number[][], minDeg = 70, eps = 0.0008): number[][] {
  const out: number[][] = [];
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

/** `weldSeam` averages the normals of the first and last radial column, which is what closes the
 *  revolve's SHADING seam. LatheGeometry already does this itself -- it explicitly averages the two
 *  end columns for a full 2*PI sweep -- and the `computeVertexNormals()` below throws that work
 *  away, because a recompute sees the seam as two unconnected edges and gives each the normal of
 *  the faces on its own side only. On a matte prop the resulting crease is invisible, which is why
 *  it survived; on a satin metal it is a hard vertical line down the revolve. Measured on the
 *  noodle-shop table's rim at azimuth 0: a 31-level luma step at x=512 (245 -> 214 at y=258),
 *  REVERSING to +27 at y=266 -- a discontinuity, not a gradient.
 *  Default OFF so no already-emitted prop changes shading if it is ever re-emitted; the recompute
 *  is still needed for the sharp-corner splits, so this welds afterwards rather than skipping it. */
function lathe(pts: number[][], seg: number, yOffset = 0, sharp = true, weldSeam = false): THREE.BufferGeometry {
  const v = (sharp ? splitCorners(pts) : pts).map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
  if (weldSeam) {
    // LatheGeometry lays out (seg + 1) columns of `rows` vertices; column 0 and column seg are the
    // same place in space. Average the pair and write it back to both.
    const n = g.getAttribute('normal');
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
  //
  // A sixth station element `flatY` CLAMPS the ring's underside to that height. A body resting on
  // the ground is not a floating ellipse: it spreads where it bears, and an unclamped tube reads as
  // a sausage on a table. The clamp is a soft one -- the ring keeps its width and loses its droop --
  // so the crease it leaves is the contact edge rather than a cut.
  const pos: number[] = [], idx: number[] = [];
  for (let i = 0; i < stations.length; i++) {
    const [z, cx, cy, rx, ry, flatY] = stations[i];
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      const x = cx + Math.sin(th) * rx;
      let y = cy + Math.cos(th) * ry;
      if (flatY !== undefined && y < flatY) y = flatY;
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
function sideExtrude(profile: number[][], width: number,
                     opts: { tumble?: { belt: number, roof: number, k: number },
                             plan?: number[][], curveSegments?: number } = {}): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  shape.moveTo(profile[0][0], profile[0][1]);
  for (let i = 1; i < profile.length; i++) shape.lineTo(profile[i][0], profile[i][1]);
  shape.closePath();
  const g = new THREE.ExtrudeGeometry(shape, { depth: width, bevelEnabled: false,
                                                curveSegments: opts.curveSegments ?? 6 });
  g.rotateY(-Math.PI / 2);
  g.translate(width / 2, 0, 0);
  shapeWidth(g, opts);
  return g;
}

/** The per-vertex x shaping shared by the body and its glass band, so a pane offset 5 mm proud of
 *  the body stays 5 mm proud after both are narrowed by the same function. */
function shapeWidth(g: THREE.BufferGeometry,
                    opts: { tumble?: { belt: number, roof: number, k: number }, plan?: number[][] }): void {
  const p = g.getAttribute('position');
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i); const y = p.getY(i), z = p.getZ(i);
    if (opts.tumble) {
      const t = Math.min(1, Math.max(0, (y - opts.tumble.belt) / (opts.tumble.roof - opts.tumble.belt)));
      x *= 1 - opts.tumble.k * t;
    }
    if (opts.plan && opts.plan.length > 1) {
      const st = opts.plan;
      let s = st[0][1];
      if (z <= st[0][0]) s = st[0][1];
      else if (z >= st[st.length - 1][0]) s = st[st.length - 1][1];
      else for (let k = 0; k < st.length - 1; k++) {
        if (z >= st[k][0] && z <= st[k + 1][0]) {
          const u = (z - st[k][0]) / (st[k + 1][0] - st[k][0]);
          s = st[k][1] + (st[k + 1][1] - st[k][1]) * u; break;
        }
      }
      x *= s;
    }
    p.setX(i, x);
  }
  p.needsUpdate = true;
  g.computeVertexNormals();
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
                  tyreHex: number, rimHex: number, dish = 0.55): THREE.BufferGeometry {
  const hw = halfW;
  const pts: number[][] = [
    [0, -hw * dish], [rRim * 0.30, -hw * dish], [rRim * 0.62, -hw * 0.80], [rRim, -hw * 0.86], [rRim, -hw * 0.98],
    [rTyre * 0.93, -hw], [rTyre, -hw * 0.72], [rTyre, hw * 0.72], [rTyre * 0.93, hw],
    [rRim, hw * 0.98], [rRim, hw * 0.86], [rRim * 0.62, hw * 0.80], [rRim * 0.30, hw * dish], [0, hw * dish],
  ];
  const rimPoint = (j: number) => j <= 4 || j >= 9;
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
    // spoke has no resolvable section at prop distance, and 28 of them on three wheels is the
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
/**
 * `r` may be a single radius (every segment the same, the original behaviour) or ONE RADIUS PER
 * STATION, which tapers the tube. A capped constant-radius tube ends in a flat disc, and on the
 * spirit house's eave horns that read as four cut-off posts rather than points; a horn, a spike or
 * a whisker needs its last station at ~0.25 of the fascia radius. The joint overlap that hides the
 * seam between segments is (ra + rb) * 0.6, which is exactly the old `r * 1.2` when they are equal,
 * so a number still produces byte-identical geometry.
 */
function tube(pts: number[][], r: number | number[], seg = 8, hex?: number): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const rAt = (i: number) => (typeof r === 'number' ? r : r[Math.min(i, r.length - 1)]);
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const d = b.clone().sub(a); const len = d.length();
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
  return hex === undefined ? out : tintGeo(out, hex);
}

/**
 * A FLAT STRAP swept along a polyline: a chain of boxes, each oriented so its LENGTH runs along the
 * segment, its THICKNESS along the outward normal from `about`, and its WIDTH tangent to that
 * surface. This is the difference between a guard and a wire: a bulkhead lamp's cage is pressed
 * flat bar, and a round tube of the same measured width shades to a narrow highlight and reads as
 * wire -- which is the thing this kit's asset notes rule out. It is also CHEAPER than `tube`: a box
 * is 12 triangles against a capped 5-sided cylinder's 20.
 */
function strap(pts: number[][], w: number, t: number, about: number[], hex?: number): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const c = new THREE.Vector3(about[0], about[1], about[2]);
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const dir = b.clone().sub(a); const len = dir.length();
    if (len < 1e-6) continue;
    dir.normalize();
    const mid = a.clone().add(b).multiplyScalar(0.5);
    // Outward normal at the midpoint, re-orthogonalised against the run so the basis stays square
    // where the strap climbs steeply and the two would otherwise be nearly parallel.
    let nrm = mid.clone().sub(c);
    nrm.sub(dir.clone().multiplyScalar(nrm.dot(dir)));
    if (nrm.lengthSq() < 1e-12) nrm = new THREE.Vector3(0, 0, 1).sub(dir.clone().multiplyScalar(dir.z));
    nrm.normalize();
    // dir x nrm, NOT nrm x dir. The basis columns are (side, dir, nrm) against a box's (w, len, t),
    // so a right-handed basis needs side x dir = nrm; nrm x dir gives -nrm, a mirrored basis with a
    // negative determinant, and every strap renders inside out -- which looks like a thin dark
    // sliver rather than an obviously flipped face, so it reads as a geometry bug, not a winding one.
    const side = new THREE.Vector3().crossVectors(dir, nrm).normalize();
    // Overlap the joints by the thickness so consecutive boxes close the mitre rather than
    // leaving a wedge of daylight at every station.
    const g = new THREE.BoxGeometry(w, len + t, t);
    g.applyMatrix4(new THREE.Matrix4().makeBasis(side, dir, nrm));
    g.translate(mid.x, mid.y, mid.z);
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
  // willReadFrequently keeps the tile on the CPU raster path: a GPU-backed canvas costs seconds per
  // thousand path fills where the software path takes tens of milliseconds.
  const ctx = cv.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D | null; if (!ctx) return null;
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
function mudTile(size: number, base: number[], seed: number, coverage = 0.33): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const toHex = (v: number[]) => '#' + v.map((c) => Math.round(Math.min(1, Math.max(0, c)) * 255).toString(16).padStart(2, '0')).join('');
    ctx.fillStyle = toHex(base); ctx.fillRect(0, 0, s, s);
    const grad = ctx.createLinearGradient(0, s, 0, s * (1 - coverage));
    grad.addColorStop(0, 'rgba(255,255,255,0.88)');
    grad.addColorStop(0.45, 'rgba(255,255,255,0.45)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 90; i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 2.2) * s * coverage * 1.35;
      const r = 3 + rnd() * s * 0.05;
      const a = 0.08 + rnd() * 0.28;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(255,250,240,${a})`); g2.addColorStop(1, 'rgba(255,250,240,0)');
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
/**
 * SHORT FUR: a seamless tile of dense, short, directional hair strokes over a cloudy tone drift, as a
 * multiply map (and bump) on a white vertex-coloured coat. The strokes run along v with a jittered
 * lean and a narrow tone spread -- a wide spread reads as scales, a perfect lay reads as combed
 * plastic. `patches` adds a few soft pink-grey bare patches, the mange marks of a street dog.
 */
function furTile(size: number, seed: number, o: any): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v: number[]) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const tone = o.tone ?? [0.72, 0.66, 0.58], m = s * 0.06;
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, s, s);
    // cloudy drift underneath so the coat is not one flat value
    ctx.globalCompositeOperation = 'multiply';
    for (let i = 0; i < (o.clouds ?? 26); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.08 + rnd() * 0.18), a = 0.04 + rnd() * 0.10;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb(tone)},${a})`); g2.addColorStop(1, `rgba(${rgb(tone)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); }
    }
    // bare patches: soft, sparse, warm grey-pink
    for (let i = 0; i < (o.patches ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.04 + rnd() * 0.05), pc = o.patchTone ?? [0.72, 0.56, 0.52];
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb(pc)},0.55)`); g2.addColorStop(0.6, `rgba(${rgb(pc)},0.3)`); g2.addColorStop(1, `rgba(${rgb(pc)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.ellipse(x + dx, y + dy, r * 1.3, r, rnd() * Math.PI, 0, Math.PI * 2); ctx.fill(); }
    }
    // hair strokes: dark and light, short, leaning within +-22 degrees of v
    const strokes = o.strokes ?? 5000, len = s * (o.length ?? 0.022);
    const drawStroke = (x: number, y: number, dx: number, dy: number, w: number) => {
      ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + dx, y + dy); ctx.stroke();
      if (x < m) { ctx.beginPath(); ctx.moveTo(x + s, y); ctx.lineTo(x + s + dx, y + dy); ctx.stroke(); }
      if (x > s - m) { ctx.beginPath(); ctx.moveTo(x - s, y); ctx.lineTo(x - s + dx, y + dy); ctx.stroke(); }
      if (y < m) { ctx.beginPath(); ctx.moveTo(x, y + s); ctx.lineTo(x + dx, y + s + dy); ctx.stroke(); }
      if (y > s - m) { ctx.beginPath(); ctx.moveTo(x, y - s); ctx.lineTo(x + dx, y - s + dy); ctx.stroke(); }
    };
    ctx.lineCap = 'round';
    for (let i = 0; i < strokes; i++) {
      const x = rnd() * s, y = rnd() * s, th = (rnd() - 0.5) * 0.78, l = len * (0.6 + rnd() * 0.8);
      const light = rnd() < 0.42;
      ctx.globalCompositeOperation = light ? 'screen' : 'multiply';
      ctx.strokeStyle = light ? `rgba(255,250,240,${0.05 + rnd() * 0.10})` : `rgba(${rgb(tone)},${0.06 + rnd() * 0.14})`;
      drawStroke(x, y, Math.sin(th) * l, Math.cos(th) * l, 0.6 + rnd() * 1.2);
    }
    ctx.globalCompositeOperation = 'source-over';
  });
}

function heightUV(geo: THREE.BufferGeometry, scale: number): THREE.BufferGeometry {
  const p = geo.getAttribute('position'), nrm = geo.getAttribute('normal');
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(nrm.getX(i)), az = Math.abs(nrm.getZ(i));
    const u = ax >= az ? p.getZ(i) : p.getX(i);
    uv[i * 2] = u / scale; uv[i * 2 + 1] = p.getY(i) / scale;
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

/** Bind a post-construction canvas tile to a material as map (and bump), leaving the textureless
 *  declaration intact: no procedural texture set is synthesised, the measured colour stays the
 *  multiplicand, and the whole thing costs one canvas. */
function bindTile(mat: THREE.MeshStandardMaterial, tex: THREE.CanvasTexture | null, bump = 0): void {
  if (!tex) return;
  mat.map = tex;
  if (bump > 0) { mat.bumpMap = tex; mat.bumpScale = bump; }
  mat.needsUpdate = true;
}


/**
 * A DRAPED SHEET: `heights[j][i]` is the top surface at x = x0..x1 (i over nx) and z = z0..z1 (j over
 * nz); the sheet is `t` thick. Top and underside are smooth-shaded grids, the four edges are flat
 * strips wound outward. A tarp canopy is a ridge line minus the sag between its poles minus the
 * droop of its free edges -- cloth, where a slab reads as a painted box.
 */
function sheet(s: any): THREE.BufferGeometry {
  const nx: number = s.nx, nz: number = s.nz, Hh: number[][] = s.heights, t: number = s.t ?? 0.012;
  const X = (i: number) => s.x0 + (s.x1 - s.x0) * i / nx;
  // `zs` gives the z STATIONS explicitly instead of dividing z0..z1 evenly. A roof whose eave and
  // rake want a narrow rusted band needs rows 0.10 m in from the edge, and reaching that by raising
  // nz alone would multiply the whole grid -- 104 flute columns is what makes a row expensive.
  const ZS: number[] | null = Array.isArray(s.zs) ? s.zs : null;
  const Z = (j: number) => (ZS ? ZS[j] : s.z0 + (s.z1 - s.z0) * j / nz);
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
  // `hexTop` / `hexUnder`: a colour attribute written per grid, so a tarp can be blue on top and
  // orange underneath on ONE material and ONE draw call. A component tint cannot do it -- the two
  // surfaces are millimetres apart in y, so no axis blend separates them -- and a second sheet
  // would double the roof's triangles for a colour. Omitted, the geometry is untinted as before.
  const paint = (g: THREE.BufferGeometry, hex: number) => {
    const n = g.getAttribute('position').count, c = new THREE.Color(hex), col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3)); return g;
  };
  // `hexGrid[j][i]` is a colour PER TOP-GRID VERTEX, computed at emit time -- which is the only way
  // to put a mark at a known place on the sheet. A canvas tile repeats by world position and knows
  // nothing about where the eave is; `hexTop` is one flat tone for the whole surface. This is what
  // carries the rusted band along the eave and the rakes, and the staining beside each sheet lap.
  const paintGrid = (g: THREE.BufferGeometry, HG: number[][]) => {
    const n = g.getAttribute('position').count, col = new Float32Array(n * 3), c = new THREE.Color();
    let k = 0;
    for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) { c.setHex(HG[j][i]); col[k++] = c.r; col[k++] = c.g; col[k++] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3)); return g;
  };
  const top0 = grid(0, false), und0 = grid(-t, true);
  const parts = s.hexGrid !== undefined
    ? [paintGrid(top0, s.hexGrid), paint(und0, s.hexUnder ?? 0xffffff)]
    : s.hexUnder !== undefined
      ? [paint(top0, s.hexTop ?? 0xffffff), paint(und0, s.hexUnder)]
      : [top0, und0];
  // edge strips: each quad from the top edge down to the underside, wound so its normal faces `out`
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
  const edges = [strip(e0, [0, 0, -1]), strip(e1, [0, 0, 1]), strip(e2, [-1, 0, 0]), strip(e3, [1, 0, 0])];
  // The rim is the seam between the two faces, so it takes the UNDER colour: on a draped tarp the
  // edge is what a viewer standing beside it actually sees, and it is the lining, not the top. On a
  // roof deck it is the fluted eave, which is where the rust is, so `hexRim` overrides it.
  const rimHex = s.hexRim ?? s.hexUnder;
  parts.push(...(rimHex !== undefined ? edges.map((g) => paint(g, rimHex)) : edges));
  return mergeGeos(parts);
}

/**
 * WEATHERED PAINT on a steel container: one seamless multiplier tile carrying clean paint, rust
 * and chalked bloom together.
 *
 * The three tones cannot ride a plain multiply over the clean paint, because a chalk bloom is
 * BRIGHTER than the paint it sits on in two channels -- a multiply can only darken. So the vertex
 * colour is RE-BASED to an envelope above every tone the tile has to reach (`o.base` is the clean
 * paint's own multiplier against that envelope, and it is what most of the tile is filled with),
 * exactly as the lichen-on-stone route does. Everything after the fill is drawn source-over in
 * absolute multiplier space, so a mark may land either side of clean.
 *
 * Order matters and is the difference between weathering and camouflage: a soft cloudy drift
 * first, then the rust as clustered granular patches rather than hard blotches, then the runs it
 * leaves BELOW itself, then the chalk blooms, then a fine grain over the lot.
 */
function paintTile(size: number, seed: number, o: any): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v: number[]) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1], rust = o.rust ?? base, chalk = o.chalk ?? base;
    const run = o.run ?? rust;
    // wrap every mark three ways so nothing is cut by the tile edge
    const wrap = (draw: (dx: number, dy: number) => void) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    const blob = (c: number[], x: number, y: number, r: number, a: number, ry = 1) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb(c)},${a})`); g.addColorStop(0.55, `rgba(${rgb(c)},${a * 0.45})`);
      g.addColorStop(1, `rgba(${rgb(c)},0)`);
      ctx.fillStyle = g;
      wrap((dx, dy) => { ctx.beginPath(); ctx.ellipse(x + dx, y + dy, r, r * ry, 0, 0, Math.PI * 2); ctx.fill(); });
    };

    ctx.fillStyle = `rgb(${rgb(base)})`; ctx.fillRect(0, 0, s, s);

    // 1. cloudy drift: broad, very soft, barely off clean -- what stops the flat areas reading as paint chips on plastic
    for (let i = 0; i < (o.drift ?? 14); i++) {
      const c = rnd() < 0.5 ? rust : chalk;
      blob(c, rnd() * s, rnd() * s, s * (0.18 + rnd() * 0.30) * (o.driftScale ?? 1), 0.05 + rnd() * 0.07, 0.6 + rnd() * 0.8);
    }

    // 2. rust: clusters, each a soft patch with granular specks over it. Bare steel corrodes in
    //    fields, not in dots; a speck field with no patch under it reads as confetti.
    for (let k = 0; k < (o.rustClusters ?? 16); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.04 + rnd() * 0.11) * (o.clusterScale ?? 1);
      // The cluster patch's OPACITY. The tile is composited source-over on the base fill, so a
      // cluster at alpha 0.30-0.65 blends to an intermediate tone and only the specks over it ever
      // reach the authored rust -- which is right for a rust BLOOM on painted steel and wrong for
      // the bold chipped patches a peeling lid carries, where bare metal is simply exposed.
      // Defaults are the previous constants exactly, so no existing caller changes.
      blob(rust, cx, cy, cr, (o.rustAlpha ?? 0.30) + rnd() * (o.rustAlphaVar ?? 0.35), 0.7 + rnd() * 0.6);
      for (let i = 0; i < (o.specksPerCluster ?? 40); i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.8 + rnd() * 2.4;
        ctx.fillStyle = `rgba(${rgb(rust)},${0.25 + rnd() * 0.5})`;
        wrap((dx, dy) => { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); });
      }
      // the run it leaves below itself: rust bleeds DOWN a vertical panel and nowhere else
      if (rnd() < (o.runChance ?? 0.55)) {
        const w = 1 + rnd() * s * 0.010, len = s * (0.10 + rnd() * 0.35);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        g.addColorStop(0, `rgba(${rgb(run)},${0.16 + rnd() * 0.18})`); g.addColorStop(1, `rgba(${rgb(run)},0)`);
        ctx.fillStyle = g;
        wrap((dx) => ctx.fillRect(cx + dx + (rnd() - 0.5) * cr, cy, w, len));
      }
    }

    // 3. chalk bloom: large, very soft, low-contrast. It is the tone the tile was re-based for.
    const cscale = o.chalkScale ?? 1, calpha = o.chalkAlpha ?? 0.35;
    for (let k = 0; k < (o.chalkPatches ?? 9); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.05 + rnd() * 0.10) * cscale;
      blob(chalk, cx, cy, cr, calpha + rnd() * 0.30, 0.5 + rnd() * 0.7);
      for (let i = 0; i < 26; i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr * 1.25;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.7, r = 1 + rnd() * 3;
        ctx.fillStyle = `rgba(${rgb(chalk)},${0.2 + rnd() * 0.4})`;
        wrap((dx, dy) => { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); });
      }
    }

    // 4. the two marks that only make sense once the tile is HEIGHT-keyed: long runs bleeding down
    //    from the top edge (the top rail is where water sits and the paint goes first) and a dirt
    //    band along the bottom. Both are no-ops on a world-space tile, where there is no up.
    for (let i = 0; i < (o.topStreaks ?? 0); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.014, len = s * (0.25 + rnd() * 0.55);
      const a = 0.10 + rnd() * 0.22;
      const g = ctx.createLinearGradient(0, 0, 0, len);
      g.addColorStop(0, `rgba(${rgb(run)},${a})`); g.addColorStop(0.25, `rgba(${rgb(rust)},${a * 0.8})`);
      g.addColorStop(1, `rgba(${rgb(rust)},0)`);
      ctx.fillStyle = g;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, 0, w, len);
    }
    if (o.groundBand) {
      const b = o.groundBand, g = ctx.createLinearGradient(0, s, 0, s * (1 - (o.groundHeight ?? 0.22)));
      g.addColorStop(0, `rgba(${rgb(run)},${b})`); g.addColorStop(0.45, `rgba(${rgb(run)},${b * 0.4})`);
      g.addColorStop(1, `rgba(${rgb(run)},0)`);
      ctx.fillStyle = g; ctx.fillRect(0, 0, s, s);
    }

    // 5. fine grain: the tooth of a brush-rolled industrial paint. Multiply, so it only darkens.
    ctx.globalCompositeOperation = 'multiply';
    for (let i = 0; i < (o.grain ?? 1800); i++) {
      const x = rnd() * s, y = rnd() * s, r = 0.5 + rnd() * 1.3, a = 0.03 + rnd() * 0.07;
      ctx.fillStyle = `rgba(150,140,130,${a})`;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
  });
}

/**
 * A SWEPT polyline tube: ONE ring of `seg` vertices per point, mitred at every bend, indexed and
 * smooth-shaded. This is not what `tube` does, and the difference is a visible defect rather than a
 * refinement. `tube` chains a separate cylinder per segment and EXTENDS each one by `r * 1.2` so the
 * joints close -- which is fine while the segments are long, and catastrophic on a tight curve: a
 * 0.12 m corner radius sampled in five steps has a 0.038 m chord against a 0.025 m overlap, so
 * consecutive cylinders overshoot each other by two thirds of their length and the bend renders as a
 * crumpled accordion of pleats. The crowd barrier's rounded top corners shipped that way.
 *
 * The frame is rotation-minimising (parallel transport), not Frenet: a Frenet frame flips its normal
 * through an inflection and twists the tube, which a UV or a vertex colour then shows as a stripe
 * spiralling along a rail that is meant to be straight. Interior points ring on the BISECTOR of the
 * two adjacent tangents, which is the mitre a real bent tube has.
 */
function sweepTube(pts: number[][], r: number, seg = 10, hex?: number, cap = true): THREE.BufferGeometry {
  const P = pts.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
  // drop repeated points: a zero-length segment has no tangent, and one duplicate is enough to
  // put a NaN through the whole transport chain
  for (let i = P.length - 1; i > 0; i--) if (P[i].distanceTo(P[i - 1]) < 1e-7) P.splice(i, 1);
  if (P.length < 2) return new THREE.BufferGeometry();
  const n = P.length;
  const segDir: THREE.Vector3[] = [];
  for (let i = 0; i < n - 1; i++) segDir.push(P[i + 1].clone().sub(P[i]).normalize());
  // per-point tangent: the segment direction at the ends, the bisector between two segments inside
  const T = P.map((_, i) => i === 0 ? segDir[0].clone()
    : i === n - 1 ? segDir[n - 2].clone()
    : segDir[i - 1].clone().add(segDir[i]).normalize());
  // seed a normal that is not parallel to the first tangent, then transport it point to point
  let N = Math.abs(T[0].y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  N.sub(T[0].clone().multiplyScalar(N.dot(T[0]))).normalize();
  const pos: number[] = [], idx: number[] = [];
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      // rotate the carried normal by the same rotation that takes the previous tangent to this one
      const q = new THREE.Quaternion().setFromUnitVectors(T[i - 1], T[i]);
      N.applyQuaternion(q);
      N.sub(T[i].clone().multiplyScalar(N.dot(T[i]))).normalize();
    }
    const B = new THREE.Vector3().crossVectors(T[i], N).normalize();
    // a mitred ring is an ELLIPSE in its own plane: widen it by 1/cos(half-angle) along the bend so
    // the swept section stays circular through the corner rather than pinching to a waist
    const k = i > 0 && i < n - 1 ? 1 / Math.max(0.5, segDir[i - 1].dot(T[i])) : 1;
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      const c = Math.cos(th), s = Math.sin(th);
      pos.push(P[i].x + (N.x * c + B.x * s * k) * r, P[i].y + (N.y * c + B.y * s * k) * r, P[i].z + (N.z * c + B.z * s * k) * r);
    }
  }
  for (let i = 0; i < n - 1; i++) for (let j = 0; j < seg; j++) {
    // (a, c2, b), NOT (a, b, c2). The ring runs N -> B with B = T x N, so winding along the tube
    // first and around it second gives a face normal of T x B = -N: every wall triangle faces INWARD.
    // Backface culling then hides the near wall and shows the FAR one, which for a lit grey tube looks
    // almost right -- and writes its depth on the far side, so anything passing through the tube draws
    // in front of it. The foot stubs stood proudly through the bottom rail because of this, and it
    // read as a geometry error in the stub rather than a winding error in the sweep.
    const a = i * seg + j, b = (i + 1) * seg + j, c2 = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
    idx.push(a, c2, b, a, d, c2);
  }
  if (cap) {
    // Flat end discs, on their OWN COPY of the rim vertices. Fanning them off the side wall's ring
    // shares those vertices, and `computeVertexNormals` then averages the disc's axial normal into
    // the wall's radial one -- which does not shade a slightly wrong rim, it tilts the normal at BOTH
    // ends of a two-point tube and so shades the WHOLE tube wrong. The foot stubs rendered as glass
    // test tubes with a bright band under the rail, and the band read as a separate object sitting on
    // it. Same fault, same fix, as the sharp-corner split in `lathe`.
    for (const [ring, at, flip] of [[0, P[0], true], [n - 1, P[n - 1], false]] as [number, THREE.Vector3, boolean][]) {
      const base = pos.length / 3;
      for (let j = 0; j < seg; j++) { const k = (ring * seg + j) * 3; pos.push(pos[k], pos[k + 1], pos[k + 2]); }
      const ci = pos.length / 3; pos.push(at.x, at.y, at.z);
      for (let j = 0; j < seg; j++) {
        const a = base + j, b = base + (j + 1) % seg;
        if (flip) idx.push(ci, b, a); else idx.push(ci, a, b);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return hex === undefined ? g : tintGeo(g, hex);
}

/**
 * FRONT-ATLAS UVs: every vertex whose normal faces +Z and that lies inside the atlas's world
 * rectangle takes a PLANAR (x, y) UV into a baked front-elevation image, and every other vertex is
 * pinned to one clean texel of it. A wall-mounted box seen from the front IS its elevation, so the
 * plate's own printed labels, screw heads, gasket line and rust land exactly where the geometry
 * puts them, on one material. `base` overrides the front vertices' colour, because the atlas is a
 * ratio over one reference tone and the per-part tints only belong on the faces the atlas does not
 * reach. `yMin` keeps parts hanging below the atlas (a conduit stub) out of it.
 */
function frontAtlasUV(geo: THREE.BufferGeometry, a: any): THREE.BufferGeometry {
  const p = geo.getAttribute('position'), nrm = geo.getAttribute('normal');
  const uv = new Float32Array(p.count * 2);
  const col = geo.getAttribute('color') as THREE.BufferAttribute | null;
  const base = a.base !== undefined ? new THREE.Color(a.base) : null;
  const minNz = a.minNz ?? 0.7;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i);
    const front = nrm.getZ(i) > minNz && x >= a.x0 && x <= a.x1 && y >= (a.yMin ?? a.y1) && y <= a.y0;
    if (front) {
      uv[i * 2] = (x - a.x0) / (a.x1 - a.x0);
      uv[i * 2 + 1] = (y - a.y1) / (a.y0 - a.y1);
      if (base && col) col.setXYZ(i, base.r, base.g, base.b);
    } else { uv[i * 2] = a.pin[0]; uv[i * 2 + 1] = a.pin[1]; }
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  if (col) col.needsUpdate = true;
  return geo;
}

/* ------------------------------------------------------------------ fence helpers */

/** Panel UVs: u along world X over `scale` metres, v world HEIGHT over the same, regardless of the
 *  face normal. On a thin slab this means the front and back faces share the same tile placement
 *  and the edges take a sliver of it; a grime wash that keys on v then lands at the same height on
 *  every face, which is what rain and algae do. */
function panelUV(geo: THREE.BufferGeometry, scale: number, rot = false): THREE.BufferGeometry {
  const p = geo.getAttribute('position');
  const uv = new Float32Array(p.count * 2);
  // `rot` swaps the axes so a tile of VERTICAL strips reads horizontal -- the woven bands of a
  // bamboo panel against its vertical mullions, one tile, one material.
  for (let i = 0; i < p.count; i++) {
    const u = rot ? p.getY(i) : p.getX(i), v = rot ? p.getX(i) : p.getY(i);
    uv[i * 2] = u / scale; uv[i * 2 + 1] = v / scale;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}

/** A square pyramid SPIKE: base w x w at `at`, apex h above. A picket's spear point, a pier cap. */
function spike(at: number[], w: number, h: number): THREE.BufferGeometry {
  const g = new THREE.ConeGeometry(w / Math.SQRT2, h, 4, 1, false);
  g.rotateY(Math.PI / 4);
  g.translate(at[0], at[1] + h / 2, at[2]);
  g.computeVertexNormals();
  return g;
}

/**
 * GRIME tile: a multiplier of white with (a) a dark wash rising from the ground to `coverage`,
 * (b) vertical rain streaks from the top, (c) soft dark blotches, (c2) broad CLOUD mottling,
 * (d) swept tyre SCUFFS over a
 * height band, (e) vertical form SEAMS, (f) PINHOLES -- the air bubbles of a precast face, (g)
 * optional green moss/algae blobs concentrated in the bottom band, and (h) fine grain. (d), (e)
 * and (f) are off unless asked for, so nothing already emitted changes. Every colour is a fraction of the
 * material's measured albedo, and the darkest core is clamped so nothing on a white or cream
 * surface drops toward the hole gate's luma 58.
 */
function grimeTile(size: number, seed: number, o: any): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v: number[]) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const wash = o.wash ?? [0.62, 0.62, 0.58], washA = o.washAlpha ?? 0.7, cov = o.coverage ?? 0.3;
    // `base` is the tone the UN-grimed part of the tile carries, defaulting to white -- i.e. to
    // "leave the vertex colour alone", which is every existing caller. It exists for ENVELOPE
    // RE-BASING: a multiply can only darken, so a part that must read clean orange in one place and
    // grey road grime in another cannot do it from a single vertex colour, because the grime is
    // HIGHER in blue than the orange is. The vertex colour becomes the per-channel maximum of both
    // and this fill paints the clean tone back out of it.
    const base = o.base ?? [1, 1, 1];
    ctx.fillStyle = `rgb(${rgb(base)})`; ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = 'multiply';
    // rain streaks from the top
    for (let i = 0; i < (o.streaks ?? 26); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.012, len = s * (0.15 + rnd() * 0.6), a = 0.05 + rnd() * 0.12;
      const g2 = ctx.createLinearGradient(0, 0, 0, len);
      g2.addColorStop(0, `rgba(${rgb(wash)},${a})`); g2.addColorStop(1, `rgba(${rgb(wash)},0)`);
      ctx.fillStyle = g2; ctx.fillRect(x, 0, w, len); ctx.fillRect(x - s, 0, w, len);
    }
    // ground wash. `washFlat` makes it UNIFORM instead of a bottom-up gradient, which is what a
    // horizontal slab needs: a gradient keyed to the tile's v maps straight across a flat face and
    // splits it into a pale half and a dark half with a hard edge between them. Defaulted off, so
    // every prop that does not ask for it is unchanged.
    if (o.washFlat) {
      ctx.fillStyle = `rgba(${rgb(wash)},${washA})`; ctx.fillRect(0, 0, s, s);
    } else {
      const grad = ctx.createLinearGradient(0, s, 0, s * (1 - cov));
      grad.addColorStop(0, `rgba(${rgb(wash)},${washA})`); grad.addColorStop(0.5, `rgba(${rgb(wash)},${washA * 0.45})`); grad.addColorStop(1, `rgba(${rgb(wash)},0)`);
      ctx.fillStyle = grad; ctx.fillRect(0, 0, s, s);
    }
    // blotches
    for (let i = 0; i < (o.blotches ?? 40); i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 1.6) * s, r = 3 + rnd() * s * 0.06, a = 0.08 + rnd() * 0.3;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb(wash)},${a})`); g2.addColorStop(1, `rgba(${rgb(wash)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y, r, 0, Math.PI * 2); ctx.fill(); }
    }
    // RUBS: near-black tyre smears low on the tile. Distinct from `blotches`, which darken toward
    // the grime tone: a tyre rub is a different colour and a different shape -- long, low, and much
    // darker than anything weather does. Default 0, so no existing caller changes.
    if (o.rubs) {
      const rub = o.rub ?? [0.30, 0.28, 0.30];
      for (let i = 0; i < o.rubs; i++) {
        const x = rnd() * s, y = s * (0.60 + rnd() * 0.38);
        const w = s * (0.05 + rnd() * 0.22), h = s * (0.006 + rnd() * 0.030), a = 0.20 + rnd() * 0.45;
        const g2 = ctx.createLinearGradient(x - w / 2, 0, x + w / 2, 0);
        g2.addColorStop(0, `rgba(${rgb(rub)},0)`);
        g2.addColorStop(0.5, `rgba(${rgb(rub)},${a})`);
        g2.addColorStop(1, `rgba(${rgb(rub)},0)`);
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) ctx.fillRect(x - w / 2 + dx, y - h / 2, w, h);
      }
    }
    // SCUFFS: soft patches where the wash is erased back toward white. The tile is composited
    // multiply-on-white, so painting white source-over is painting "not darkened" -- which is the
    // only way a multiply tile can put PALE wear on a dark base without re-basing the envelope
    // twice. Defaulted to none.
    if (o.scuffs) {
      ctx.globalCompositeOperation = 'source-over';
      for (let i = 0; i < o.scuffs; i++) {
        const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * (o.scuffScale ?? 0.14));
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
        g2.addColorStop(0, `rgba(255,255,255,${o.scuffAlpha ?? 0.55})`); g2.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); }
      }
      ctx.globalCompositeOperation = 'multiply';
    }

    // CLOUDS: broad, very soft patches over the WHOLE tile. A cast face is mottled at the scale of
    // tens of centimetres -- pour lines, damp, the mould's own history -- and that low frequency is
    // most of what separates a rendered standard deviation of 6 from the plate's 12. Small marks
    // cannot supply it: at prop distance a thousand of them average back out to one flat tone.
    // Keep them SMALL relative to the tile, though. A tile that repeats two or three times across a
    // prop repeats its clouds too, and a cloud the size of a third of the tile then reads as
    // camouflage with a visible seam -- the same failure as hard blotches, one octave lower.
    for (let i = 0; i < (o.clouds ?? 0); i++) {
      const v = o.cloud ?? [0.86, 0.86, 0.84];
      const x = rnd() * s, y = rnd() * s, r = s * (o.cloudR ?? 0.16) * (0.4 + rnd() * 1.4), a = (o.cloudAlpha ?? 0.12) * (0.4 + rnd());
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb(v)},${a})`); g2.addColorStop(1, `rgba(${rgb(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); }
    }
    // SCUFF arcs: the tyre and bumper marks a roadside barrier collects on the band the traffic
    // actually reaches. Broad, soft, near-horizontal smears with a swept shape -- a blotch reads as
    // a stain, and what the plate carries is something that went past. `scuffBand` is a pair of
    // HEIGHT fractions (0 at the ground), so it is stated in the same terms as `coverage`.
    if (o.scuffs) {
      const v = o.scuff ?? [0.62, 0.62, 0.64], band = o.scuffBand ?? [0.30, 0.70];
      for (let i = 0; i < o.scuffs; i++) {
        const cx = rnd() * s, cy = s * (1 - (band[0] + rnd() * (band[1] - band[0])));
        const w = s * (0.05 + rnd() * 0.11), h = w * (0.05 + rnd() * 0.10);
        const a = (o.scuffAlpha ?? 0.34) * (0.5 + rnd());
        for (const dx of [-s, 0, s]) {
          ctx.save(); ctx.translate(cx + dx, cy); ctx.rotate((rnd() - 0.5) * 0.45); ctx.scale(1, h / w);
          const g2 = ctx.createRadialGradient(0, 0, 0, 0, 0, w);
          g2.addColorStop(0, `rgba(${rgb(v)},${a})`); g2.addColorStop(0.45, `rgba(${rgb(v)},${a * 0.55})`); g2.addColorStop(1, `rgba(${rgb(v)},0)`);
          ctx.fillStyle = g2; ctx.beginPath(); ctx.arc(0, 0, w, 0, Math.PI * 2); ctx.fill();
          ctx.restore();
        }
      }
    }
    // FORM SEAMS: the vertical joint lines a precast mould leaves, one per tile. A dark hairline with
    // a paler lip beside it, which is what a proud seam looks like -- a single dark line reads as a
    // scratch. `seamAt` places it as a fraction of the tile so it does not land on the wrap.
    if (o.seams) {
      const v = o.seam ?? [0.72, 0.71, 0.68];
      for (let i = 0; i < o.seams; i++) {
        const x = Math.round(s * ((o.seamAt ?? 0.42) + i / o.seams)) % s;
        const wpx = Math.max(1, Math.round(s * 0.004));
        ctx.fillStyle = `rgba(${rgb(v)},${o.seamAlpha ?? 0.5})`; ctx.fillRect(x, 0, wpx, s);
        ctx.fillStyle = `rgba(${rgb(v)},${(o.seamAlpha ?? 0.5) * 0.3})`; ctx.fillRect(x + wpx, 0, wpx, s);
      }
    }
    // PINHOLES: the air bubbles a precast face is covered in. They are the single most identifying
    // mark of bare concrete at prop distance -- without them the face is a painted slab, which is
    // measurable as a rendered standard deviation a third of the plate's. Small, dark, and MANY.
    for (let i = 0; i < (o.pits ?? 0); i++) {
      const v = o.pit ?? [0.42, 0.40, 0.36];
      const x = rnd() * s, y = rnd() * s, r = (o.pitR ?? 1.6) * (0.5 + rnd() * 1.3);
      const a = 0.25 + rnd() * 0.5;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r * 2);
      g2.addColorStop(0, `rgba(${rgb(v)},${a})`); g2.addColorStop(0.4, `rgba(${rgb(v)},${a * 0.45})`); g2.addColorStop(1, `rgba(${rgb(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y, r * 2, 0, Math.PI * 2); ctx.fill(); }
    }
    // moss / algae in the bottom band: clustered specks, brighter-than-wash green
    if (o.moss) {
      const m = o.moss, band = o.mossBand ?? 0.22;
      // a faint green wash over the whole band first, so the carpets sit in damp ground rather than
      // as isolated dots on clean paint
      const mg = ctx.createLinearGradient(0, s, 0, s * (1 - band * 1.3));
      mg.addColorStop(0, `rgba(${rgb(m)},${o.mossWash ?? 0.35})`); mg.addColorStop(1, `rgba(${rgb(m)},0)`);
      ctx.fillStyle = mg; ctx.fillRect(0, 0, s, s);
      for (let k = 0; k < (o.mossClusters ?? 14); k++) {
        const cx = rnd() * s, cy = s - Math.pow(rnd(), 1.6) * s * band, cr = s * (0.015 + rnd() * 0.04);
        // the carpet: a soft blob, then specks over it for the tufted edge
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
        cg.addColorStop(0, `rgba(${rgb(m)},0.7)`); cg.addColorStop(0.6, `rgba(${rgb(m)},0.35)`); cg.addColorStop(1, `rgba(${rgb(m)},0)`);
        ctx.fillStyle = cg;
        for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.ellipse(cx + dx, cy, cr, cr * 0.6, 0, 0, Math.PI * 2); ctx.fill(); }
        for (let i = 0; i < 24; i++) {
          const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
          const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.6, r = 1 + rnd() * 3;
          ctx.fillStyle = `rgba(${rgb(m)},${0.35 + rnd() * 0.5})`;
          for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y, r, 0, Math.PI * 2); ctx.fill(); }
        }
      }
    }
    // grain. `grain`/`grainAlpha` default to the original 1500 at 0.12, so no already-emitted prop
    // changes; a tile stretched over a WHOLE prop (uvScale > its height) samples only the fraction
    // of the tile width heightUV folds onto it, and needs the count raised to keep the same density.
    for (let i = 0; i < (o.grain ?? 1500); i++) {
      const lo = o.grainLo ?? 200; const x = rnd() * s, y = rnd() * s, v = lo + Math.round(rnd() * (255 - lo));
      ctx.fillStyle = `rgba(${v},${v},${v},${o.grainAlpha ?? 0.12})`; ctx.fillRect(x, y, 1.5, 1.5);
    }
    ctx.globalCompositeOperation = 'source-over';
  });
}

/** CHAIN-LINK tile: a diamond wire lattice drawn opaque over a TRANSPARENT ground, bound as map
 *  on an alpha-tested material so the cells are open. One tile is one diamond cell; the pane's
 *  UVs repeat it at the real mesh pitch. `wire` is the wire width as a fraction of the cell. */
function chainlinkTile(size: number, wire: number, seed: number): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.clearRect(0, 0, s, s);
    ctx.lineWidth = Math.max(1.5, wire * s);
    ctx.lineCap = 'round';
    const v = 150 + Math.round(rnd() * 30);
    ctx.strokeStyle = `rgb(${v},${v + 2},${v + 4})`;
    // two diagonals through the tile, offset so the wrap makes a continuous diamond lattice
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(s, s);
    ctx.moveTo(s, 0); ctx.lineTo(0, s);
    ctx.stroke();
    // the knuckle where wires twist round each other, at the two crossings on the tile edges
    ctx.fillStyle = `rgb(${v - 20},${v - 18},${v - 16})`;
    for (const [x, y] of [[0, 0], [s, 0], [0, s], [s, s], [s / 2, s / 2]]) {
      ctx.beginPath(); ctx.arc(x, y, ctx.lineWidth * 0.9, 0, Math.PI * 2); ctx.fill();
    }
  });
}

/** BAMBOO STRIP tile: vertical split-bamboo strips with pale culm faces, dark joints between them
 *  and a node line or two -- a multiplier on the measured silver-grey. */
function bambooTile(size: number, strips: number, seed: number): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, s, s);
    const sw = s / strips;
    for (let b = 0; b < strips; b++) {
      const tone = 0.80 + rnd() * 0.2, v = Math.round(255 * tone);
      ctx.fillStyle = `rgb(${v},${v - 2},${v - 6})`; ctx.fillRect(b * sw, 0, sw, s);
      ctx.fillStyle = 'rgba(50,42,34,0.6)'; ctx.fillRect(b * sw, 0, Math.max(1, s * 0.006), s);
      // a highlight down the culm's round
      ctx.fillStyle = 'rgba(255,255,255,0.10)'; ctx.fillRect(b * sw + sw * 0.35, 0, sw * 0.25, s);
      // node rings
      const n = 1 + Math.floor(rnd() * 2);
      for (let k = 0; k < n; k++) { const y = rnd() * s; ctx.fillStyle = 'rgba(70,60,48,0.45)'; ctx.fillRect(b * sw, y, sw, Math.max(1, s * 0.008)); }
      // fine grain lines
      for (let k = 0; k < 6; k++) { const x = b * sw + rnd() * sw; ctx.fillStyle = `rgba(80,70,58,${0.05 + rnd() * 0.1})`; ctx.fillRect(x, 0, 1, s); }
    }
    // mould speckle
    for (let i = 0; i < 300; i++) { const x = rnd() * s, y = rnd() * s; ctx.fillStyle = 'rgba(30,28,24,0.18)'; ctx.fillRect(x, y, 1 + rnd() * 2, 1 + rnd() * 2); }
  });
}

/** POSTER tile for a hoarding: torn paste-up sheets and a spray stencil over a TRANSPARENT ground,
 *  bound on an alpha-tested pane a few millimetres proud of the sheet. `lines` are the stencil
 *  strings; a printed graphic is exactly the post-construction canvas case. */
function posterTile(size: number, seed: number, lines: string[]): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.clearRect(0, 0, s, s);
    // paste-ups: overlapping off-white rectangles with torn edges and faint print lines
    for (let k = 0; k < 4; k++) {
      const x = s * (0.02 + rnd() * 0.30), y = s * (0.15 + rnd() * 0.45), w = s * (0.14 + rnd() * 0.16), h = s * (0.18 + rnd() * 0.22);
      ctx.fillStyle = `rgba(${225 + Math.round(rnd() * 20)},${222 + Math.round(rnd() * 18)},${210 + Math.round(rnd() * 20)},0.96)`;
      ctx.beginPath(); ctx.moveTo(x, y);
      const n = 9;
      for (let i = 1; i <= n; i++) ctx.lineTo(x + w * i / n, y + (rnd() - 0.5) * h * 0.08);
      for (let i = 1; i <= n; i++) ctx.lineTo(x + w + (rnd() - 0.5) * w * 0.08, y + h * i / n);
      for (let i = n - 1; i >= 0; i--) ctx.lineTo(x + w * i / n, y + h + (rnd() - 0.5) * h * 0.12);
      for (let i = n - 1; i >= 0; i--) ctx.lineTo(x + (rnd() - 0.5) * w * 0.08, y + h * i / n);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = 'rgba(40,40,45,0.55)';
      for (let i = 0; i < 7; i++) ctx.fillRect(x + w * 0.1, y + h * (0.2 + i * 0.1), w * (0.3 + rnd() * 0.5), Math.max(1, s * 0.006));
    }
    // spray stencil, slightly soft and uneven
    ctx.fillStyle = 'rgba(20,20,22,0.88)';
    ctx.font = `bold ${Math.round(s * 0.07)}px sans-serif`;
    ctx.textBaseline = 'middle';
    for (let i = 0; i < lines.length; i++) {
      const x = s * 0.40, y = s * (0.44 + i * 0.13);
      for (let k = 0; k < 3; k++) { ctx.globalAlpha = 0.6; ctx.fillText(lines[i], x + (rnd() - 0.5) * 3, y + (rnd() - 0.5) * 3); }
      ctx.globalAlpha = 1;
    }
  });
}

/** STRIPE tile: alternating colour bands along u (an awning), with a soft grime multiply so the cloth
 *  reads worn rather than printed. `a`/`b` are the two band colours as [r,g,b] 0-1. Bound as map on a
 *  WHITE material so the bands carry the whole albedo. */
// `o` is optional and every field defaults to the previous hard-coded behaviour, so no prop that
// does not pass it changes. `smudges` and `specks` exist because brushed STEEL wants the banding
// without the dirt: the 40 radial smudges and 1200 light specks read as mould on a clean satin
// surface, which is the opposite of what a stripe tile is for there.
function stripeTile(size: number, bands: number, a: number[], b: number[], seed: number, o: any = {}): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v: number[]) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    const w = s / bands;
    for (let i = 0; i < bands; i++) { ctx.fillStyle = rgb(i % 2 ? b : a); ctx.fillRect(Math.floor(i * w), 0, Math.ceil(w) + 1, s); }
    ctx.globalCompositeOperation = 'multiply';
    for (let i = 0; i < (o.smudges ?? 40); i++) {
      const x = rnd() * s, y = rnd() * s, r = 4 + rnd() * s * 0.08, al = 0.06 + rnd() * 0.18;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(150,140,125,${al})`); g2.addColorStop(1, 'rgba(150,140,125,0)');
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y, r, 0, Math.PI * 2); ctx.fill(); }
    }
    for (let i = 0; i < (o.specks ?? 1200); i++) { const v = 200 + Math.round(rnd() * 55); ctx.fillStyle = `rgba(${v},${v},${v},0.10)`; ctx.fillRect(rnd() * s, rnd() * s, 1.5, 1.5); }
    // BROAD reflection banding: `o.broad` whole bright/dark cycles across the tile, drawn as one
    // wrapping cosine gradient. Brushed steel with no environment map to reflect has nothing to
    // make its flanks bright and its middle dark, and the fine grain cannot supply it -- a 3 mm
    // pitch averages to one flat tone at prop distance, which is what a rendered stainless bin
    // looks like when it reads as painted metal. Whole cycles, so the tile still meets itself.
    // Defaulted OFF, so every existing caller is byte-identical.
    if (o.broad) {
      const lo = o.broadLo ?? 0.80, hi = o.broadHi ?? 1.0;
      const g3 = ctx.createLinearGradient(0, 0, s, 0);
      for (let i = 0; i <= 64; i++) {
        const t = i / 64;
        const v = lo + (hi - lo) * (0.5 + 0.5 * Math.cos(2 * Math.PI * o.broad * t));
        const c = Math.round(255 * v);
        g3.addColorStop(t, `rgb(${c},${c},${c})`);
      }
      ctx.fillStyle = g3; ctx.fillRect(0, 0, s, s);
    }
    ctx.globalCompositeOperation = 'source-over';
  });
}

/** Seamless around-by-up UVs for a LatheGeometry: u from the SEGMENT index (the lathe orders its
 *  vertices segment-major, index = seg * pointCount + point), so the duplicated seam column reads
 *  u = repeats exactly and RepeatWrapping closes it. `scale` is the tile size in metres; the
 *  around-repeat count is rounded so the tile meets itself, from the profile's widest radius. */
function latheUV(g: THREE.BufferGeometry, pointCount: number, seg: number, scale: number, vScale = scale, v0 = 0): void {
  const p = g.getAttribute('position');
  let rMax = 0;
  for (let i = 0; i < p.count; i++) rMax = Math.max(rMax, Math.hypot(p.getX(i), p.getZ(i)));
  const rep = Math.max(1, Math.round(2 * Math.PI * rMax / scale));
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const s = Math.floor(i / pointCount);
    uv[i * 2] = (s / seg) * rep; uv[i * 2 + 1] = (p.getY(i) - v0) / vScale;
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}

/** EXPOSED-AGGREGATE tile: a dark mortar ground packed with rounded pebbles in a measured palette,
 *  each drawn at nine wrapped offsets so the tile is seamless. `o.palette` is a list of [r,g,b]
 *  ratios against the material colour, `o.ground` the mortar ratio, `o.count` the pebble count. */
function pebbleTile(size: number, seed: number, o: any): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v: number[]) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    ctx.fillStyle = rgb(o.ground ?? [0.45, 0.42, 0.38]); ctx.fillRect(0, 0, s, s);
    const pal: number[][] = o.palette ?? [[0.85, 0.78, 0.66], [0.72, 0.62, 0.50], [0.60, 0.58, 0.55], [0.90, 0.86, 0.80]];
    const n = o.count ?? 900, rMin = s * (o.rMin ?? 0.012), rMax = s * (o.rMax ?? 0.028);
    for (let i = 0; i < n; i++) {
      const x = rnd() * s, y = rnd() * s, rx = rMin + rnd() * (rMax - rMin), ry = rx * (0.6 + rnd() * 0.5), a = rnd() * Math.PI;
      const c = pal[Math.floor(rnd() * pal.length)], k = 0.85 + rnd() * 0.3;
      // CONTACT SHADOW first, offset down-right and a touch larger, so what survives around each
      // stone is the dark mortar crescent that makes a packed aggregate read as stones rather than
      // as overlapping flat discs. `shade` is a ratio against the mortar ground; 0 keeps the old
      // look for every tile already shipped.
      if (o.shade) {
        ctx.fillStyle = rgb((o.ground ?? [0.45, 0.42, 0.38]).map((v) => v * o.shade));
        for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.ellipse(x + dx + rx * 0.16, y + dy + ry * 0.22, rx * 1.1, ry * 1.1, a, 0, Math.PI * 2); ctx.fill(); }
      }
      ctx.fillStyle = rgb(c.map((v) => Math.min(1, v * k)));
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.ellipse(x + dx, y + dy, rx, ry, a, 0, Math.PI * 2); ctx.fill(); }
      // a highlight crescent on the lit side so each stone reads as a bump
      ctx.fillStyle = `rgba(255,255,255,${o.gloss ?? 0.18})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.ellipse(x + dx - rx * 0.2, y + dy - ry * 0.25, rx * 0.5, ry * 0.4, a, 0, Math.PI * 2); ctx.fill(); }
    }
  });
}

/** TYRE TREAD tile for a lathe carrying `cylUV`: u runs AROUND the tyre and v UP it, so tread slots are
 *  bars at constant u and the circumferential grooves are lines at constant v. Drawn as ratios on white
 *  and multiplied into the (lifted) rubber colour; `o.groove` is the darkest ratio, kept above the
 *  luma-58 hole band by the caller. `o.slots` bars per tile, `o.rings` circumferential lines. */
function treadTile(size: number, seed: number, o: any): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const groove = o.groove ?? 0.80, slots = o.slots ?? 2, rings = o.rings ?? 2;
    // `base` is the tone the UN-grimed part of the tile carries, defaulting to white -- i.e. to
    // "leave the vertex colour alone", which is every existing caller. It exists for ENVELOPE
    // RE-BASING: a multiply can only darken, so a part that must read clean orange in one place and
    // grey road grime in another cannot do it from a single vertex colour, because the grime is
    // HIGHER in blue than the orange is. The vertex colour becomes the per-channel maximum of both
    // and this fill paints the clean tone back out of it.
    const base = o.base ?? [1, 1, 1];
    ctx.fillStyle = `rgb(${rgb(base)})`; ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = 'multiply';
    const gv = Math.round(255 * groove);
    ctx.fillStyle = `rgb(${gv},${gv},${gv})`;
    const pitch = s / slots, w = pitch * (o.slotWidth ?? 0.16);
    // tread slots span the band between the two edge shoulders (v 0.12..0.88 of the tile)
    for (let i = 0; i < slots; i++) { const x = i * pitch + pitch * 0.4 + (rnd() - 0.5) * pitch * 0.1; ctx.fillRect(x, s * 0.12, w, s * 0.76); ctx.fillRect(x - s, s * 0.12, w, s * 0.76); }
    for (let i = 0; i < rings; i++) { const y = s * (0.2 + 0.6 * (i + 0.5) / rings); ctx.fillRect(0, y - 1.5, s, 3); }
    // sidewall sheen: a soft lighter wash so the rubber is not one flat value
    for (let i = 0; i < 24; i++) { const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * 0.12), v = 235 + Math.round(rnd() * 20);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r); g2.addColorStop(0, `rgba(${v},${v},${v},0.5)`); g2.addColorStop(1, `rgba(${v},${v},${v},0)`);
      ctx.fillStyle = g2; for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); } }
    ctx.globalCompositeOperation = 'source-over';
  });
}

/** OLD TYRE tile: TWO tyre heights tall by `o.pitch` metres around (cylUV). The upper half (v 0.5-1)
 *  is a treaded tyre, the lower half (v 0-0.5) a worn SLICK with circumferential grooves and short
 *  shoulder sipes only, so a stack mixes bald and treaded tyres off one canvas by v0. Drawn as RATIOS
 *  against the vertex-coloured rubber at `base` (200/255 -> vertex tones are authored 1.275x the
 *  intended albedo so dust and scuffs can go BRIGHTER than the rubber under a multiply canvas).
 *  Rows are heights: lower sidewall, tread band (v `o.band[0]`..`o.band[1]` of the strip), upper
 *  sidewall with bead rings and mould lines. Wear: a warm dust wash on the lower shoulder, grey scuffs
 *  on both shoulders, dust caught in the cuts, grain over everything. */
function tyreTile(size: number, seed: number, o: any): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const base = o.base ?? 200, band = o.band ?? [0.24, 0.76], groove = o.groove ?? 0.45;
    const gv = Math.round(base * groove), rv = Math.round(base * 0.7), mv = Math.round(base * 0.9);
    const dust = o.dust ?? [232, 214, 190];
    ctx.fillStyle = `rgb(${base},${base},${base})`; ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < s * s / 6; i++) { const v = base + Math.round((rnd() - 0.5) * 22); ctx.fillStyle = `rgb(${v},${v},${v})`; ctx.fillRect(rnd() * s, rnd() * s, 2, 2); }
    // one tyre strip between canvas rows ya (top) and yb (bottom); canvas y grows DOWN, v grows UP
    const strip = (ya: number, yb: number, treaded: boolean) => {
      const h = yb - ya, b0 = ya + h * (1 - band[1]), b1 = ya + h * (1 - band[0]);
      const ng = o.grooves ?? 3, gw = h * 0.024;
      ctx.fillStyle = `rgb(${gv},${gv},${gv})`;
      for (let i = 0; i < ng; i++) { const y = b0 + (b1 - b0) * (i + 1) / (ng + 1); ctx.fillRect(0, y - gw / 2, s, gw); }
      const ns = o.sipes ?? 2, w = s * (o.sipeWidth ?? 0.05);
      for (let k = 0; k <= ng; k++) {
        const y0 = k === 0 ? b0 : b0 + (b1 - b0) * k / (ng + 1) + gw / 2, y1 = k === ng ? b1 : b0 + (b1 - b0) * (k + 1) / (ng + 1) - gw / 2;
        // a slick keeps only SHORT sipes at the two shoulder rows, cut in from the band edge
        const outer = k === 0 || k === ng;
        if (!treaded && !outer) continue;
        const ys0 = treaded ? y0 : (k === 0 ? y0 : y1 - (y1 - y0) * 0.45), ys1 = treaded ? y1 : (k === 0 ? y0 + (y1 - y0) * 0.45 : y1);
        for (let i = 0; i < ns; i++) {
          const x = ((i + 0.5) / ns + (k % 2) * 0.5 / ns) * s + (rnd() - 0.5) * s * 0.06, sl = (rnd() - 0.5) * s * 0.08;
          for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.moveTo(x + dx, ys0); ctx.lineTo(x + dx + w, ys0); ctx.lineTo(x + dx + w + sl, ys1); ctx.lineTo(x + dx + sl, ys1); ctx.closePath(); ctx.fill(); }
        }
      }
      // shoulder step at the top of the band, bead rings and mould lines on the sidewalls
      const sh = ctx.createLinearGradient(0, b0 - h * 0.03, 0, b0 + h * 0.02); sh.addColorStop(0, `rgba(${gv},${gv},${gv},0)`); sh.addColorStop(1, `rgba(${gv},${gv},${gv},0.45)`);
      ctx.fillStyle = sh; ctx.fillRect(0, b0 - h * 0.03, s, h * 0.05);
      ctx.fillStyle = `rgb(${rv},${rv},${rv})`; ctx.fillRect(0, ya + h * 0.045, s, h * 0.012); ctx.fillRect(0, ya + h * 0.94, s, h * 0.012);
      ctx.fillStyle = `rgb(${mv},${mv},${mv})`; ctx.fillRect(0, ya + h * 0.11, s, 2); ctx.fillRect(0, ya + h * 0.88, s, 2);
      // wear: warm road dust on the lower shoulder and sidewall, grey scuffs on both shoulders
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
    strip(0, s / 2, true);      // v 0.5..1: treaded
    strip(s / 2, s, false);     // v 0..0.5: slick
  });
}

/** A tapered box: BoxGeometry(1, h, 1) whose x/z are scaled per vertex by the footprint interpolated
 *  from (w0, d0) at the bottom to (w1, d1) at the top. Normals recomputed so the slanted faces shade
 *  flat. `b` = [cx, yBottom, cz, w0, d0, w1, d1, h]. */
function frustum(b: number[]): THREE.BufferGeometry {
  const [cx, y0, cz, w0, d0, w1, d1, h] = b;
  const g = new THREE.BoxGeometry(1, h, 1);
  const p = g.getAttribute('position');
  for (let i = 0; i < p.count; i++) {
    const t = (p.getY(i) + h / 2) / h;
    p.setX(i, p.getX(i) * (w0 + (w1 - w0) * t)); p.setZ(i, p.getZ(i) * (d0 + (d1 - d0) * t));
  }
  g.computeVertexNormals();
  g.translate(cx, y0 + h / 2, cz);
  return g;
}

/**
 * HOT-DIP GALVANISED ZINC: cloudy tone drift, crystalline SPANGLE, and rust bleeding from the welds.
 *
 * This exists because `grimeTile` measurably cannot say `galvanised`. Measured on the crowd
 * barrier's plate against its first build, over matched flat panel crops: the plate reads mean luma
 * 157-159 with sd 12-16 and a p5..p95 span of ~42, and the render read mean 142 with sd 8-10 and a
 * span of ~21 -- half the tonal variation, and CLIPPED at the top (p75 = p95 = 147, the tile doing
 * nothing at all over the upper half of the panel). A galvanised surface is not dirt on grey paint:
 * it is a frozen crystal structure, bright irregular spangle facets standing ABOVE the base tone
 * with dull grey-brown drift between them, and the brightest fifth of it is the part that reads.
 *
 * A canvas tile is bound as a MULTIPLY map, so it can only ever darken -- which is why the spread
 * was one-sided. The tile is therefore authored around a `mid` multiplier well below 1 and the
 * caller raises the base albedo by 1/mid: the spangle then reaches back up to the base while the
 * drift falls away below it, and the surface varies in BOTH directions about its mean. Author the
 * albedo for that, or the prop ships as bright as the spangle everywhere.
 *
 * `rustBand` bleeds a desaturated brown down from the top and up from the bottom -- the two places a
 * barrier's welds are -- because rust on galvanised steel starts at a weld, where the zinc was
 * burnt off, and RUNS. The plate's rust measures #826e58 over 2.2% of the frame: a wash, not the
 * orange polka dots a blotch tile gives.
 */
function zincTile(size: number, seed: number, o: any): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const mid = o.mid ?? 0.88, lo = o.lo ?? 0.74;
    const g = (v: number) => { const b = Math.round(255 * v); return `rgb(${b},${b},${b})`; };
    ctx.fillStyle = g(mid); ctx.fillRect(0, 0, s, s);
    // cloudy drift: broad soft blobs both above and below the mid, the mottle a dip leaves
    for (let i = 0; i < (o.clouds ?? 60); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.06 + rnd() * 0.16);
      const up = rnd() < 0.5;
      const v = up ? mid + (1 - mid) * (0.35 + rnd() * 0.5) : lo + (mid - lo) * rnd();
      const gr = ctx.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${o.cloudAlpha ?? 0.28})`);
      gr.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gr;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); }
    }
    // SPANGLE: irregular bright crystal facets, angular rather than round, up to the base tone.
    // Small and dense -- large ones read as splashes of white paint, which is the failure mode a
    // blotch tile falls into.
    // CLUSTERED, not scattered. Uniformly spread facets read as snow or dust specks -- isolated
    // bright dots on a smooth field, which is what the second tuning shipped and what the plate has
    // none of. Real spangle blooms: the crystals nucleate together, so the surface is patches of
    // dense bright facets with quiet grey between them. `spangleClusters` centres carry
    // `1 - spangleLoose` of the facets, distributed sqrt-uniformly so each bloom is dense at its
    // middle and thins at its edge; the rest stay scattered so the field is never bald.
    const cl = Array.from({ length: o.spangleClusters ?? 0 }, () => [rnd() * s, rnd() * s, s * (0.04 + rnd() * 0.10)]);
    for (let i = 0; i < (o.spangle ?? 520); i++) {
      let x = rnd() * s, y = rnd() * s;
      if (cl.length && rnd() > (o.spangleLoose ?? 0.25)) {
        const c = cl[(rnd() * cl.length) | 0], a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * c[2];
        x = c[0] + Math.cos(a) * d; y = c[1] + Math.sin(a) * d;
      }
      const r = s * ((o.spangleMin ?? 0.004) + Math.pow(rnd(), 2) * (o.spangleMax ?? 0.013));
      const v = mid + (1 - mid) * (0.5 + rnd() * 0.5);
      const k = 4 + Math.floor(rnd() * 3);
      const a0 = rnd() * Math.PI * 2;
      ctx.fillStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${(o.spangleAlpha ?? 0.2) + rnd() * (o.spangleAlphaVar ?? 0.35)})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        for (let j = 0; j < k; j++) {
          const a = a0 + j * Math.PI * 2 / k, rr = r * (0.55 + rnd() * 0.75);
          const px = x + dx + Math.cos(a) * rr, py = y + dy + Math.sin(a) * rr * 0.8;
          if (j === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.closePath(); ctx.fill();
      }
    }
    // dark drip streaks running down: weathering, and what gives a flat panel a vertical read
    for (let i = 0; i < (o.streaks ?? 30); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.010, y0 = rnd() * s * 0.5, len = s * (0.2 + rnd() * 0.7);
      const v = lo + (mid - lo) * rnd() * 0.6, a = 0.06 + rnd() * 0.14;
      const gr = ctx.createLinearGradient(0, y0, 0, y0 + len);
      gr.addColorStop(0, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},0)`);
      gr.addColorStop(0.25, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${a})`);
      gr.addColorStop(1, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},0)`);
      ctx.fillStyle = gr;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0, w, len);
    }
    // FINE GRAIN and SCRATCHES. Measured against the plate at matched magnification, this is the
    // layer the first tuning was missing entirely: the plate's zinc is scratchy at 1-2 px everywhere
    // -- drawing marks, handling scuffs, the crystal boundaries themselves -- and without it the
    // drift and the spangle read as soft snow on smooth grey however well the HISTOGRAM matches. Two
    // crops with identical mean, sd and percentiles can look nothing alike; the statistic that
    // separates them is spatial frequency, so tune this by eye against a matched crop, not by sd.
    for (let i = 0; i < (o.grain ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, w = 1 + rnd() * 2, h = 1 + rnd() * 2;
      const up = rnd() < 0.5;
      const v = up ? mid + (1 - mid) * (0.4 + rnd() * 0.6) : lo + (mid - lo) * rnd();
      ctx.fillStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${0.10 + rnd() * 0.30})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) ctx.fillRect(x + dx, y + dy, w, h);
    }
    ctx.lineCap = 'round';
    for (let i = 0; i < (o.scratches ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.006 + rnd() * 0.055), a = (rnd() - 0.5) * 0.7 + Math.PI / 2;
      const up = rnd() < 0.45;
      const v = up ? mid + (1 - mid) * (0.5 + rnd() * 0.5) : lo + (mid - lo) * rnd() * 0.8;
      ctx.strokeStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${0.10 + rnd() * 0.28})`;
      ctx.lineWidth = 0.7 + rnd() * 1.6;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath(); ctx.moveTo(x + dx, y + dy);
        ctx.lineTo(x + dx + Math.cos(a) * len, y + dy + Math.sin(a) * len); ctx.stroke();
      }
    }
    // RUST from the welds: a wash in the top and bottom bands, plus runs trailing out of it
    if (o.rust) {
      const c = o.rust, band = o.rustBand ?? 0.16;
      const rgbs = `${Math.round(255 * c[0])},${Math.round(255 * c[1])},${Math.round(255 * c[2])}`;
      // the two bands are SEPARATE: on a barrier the ground end carries the feet, the stub welds and
      // every run off them, and the top end carries only the rail's own welds. One symmetric band
      // wide enough to reach the rail welds at v = 0.26 also washes the whole upper third of every
      // panel, which the plate does not have.
      for (const [edge, dir, b] of [[0, 1, o.rustBandTop ?? band], [s, -1, band]] as number[][]) {
        const gr = ctx.createLinearGradient(0, edge, 0, edge + dir * s * b);
        gr.addColorStop(0, `rgba(${rgbs},${o.rustWash ?? 0.30})`); gr.addColorStop(1, `rgba(${rgbs},0)`);
        ctx.fillStyle = gr; ctx.fillRect(0, 0, s, s);
      }
      for (let i = 0; i < (o.rustRuns ?? 22); i++) {
        const x = rnd() * s, w = 1 + rnd() * s * 0.014;
        const top = rnd() < 0.5;
        const y0 = top ? 0 : s - s * band * (0.3 + rnd());
        const len = s * (0.10 + rnd() * 0.32);
        const gr = ctx.createLinearGradient(0, y0, 0, y0 + len);
        gr.addColorStop(0, `rgba(${rgbs},${0.18 + rnd() * 0.32})`); gr.addColorStop(1, `rgba(${rgbs},0)`);
        ctx.fillStyle = gr;
        for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0, w, len);
      }
    }
  });
}
/* ------------------------------------------------------------------ canopy-module helpers
 * The five CANOPY MODULES -- nipa thatch, vetiver thatch, split bamboo, corrugated metal,
 * tarpaulin -- are one family: four corner posts inside a 4 x 4 m module, a head frame, and a roof
 * whose material is the whole identity. What they need beyond the street-prop vocabulary is a
 * roofing tile per material and the culm mapping a round bamboo pole wants.
 *
 * `culmUV`, `grainLines`, `weatherPatches`, `mouldClusters` and `culmTile` are ported VERBATIM from
 * scratch/_fence/fence.helpers.tmpl, where they were written for the bamboo fence panel and where
 * the reasoning behind every number is recorded. They are copied rather than shared because the two
 * families keep separate template sets; a third family wanting them should move them up into
 * helpers.tmpl rather than copy them a second time.
 */

/** CULM UVs: u around the circumference and v along the length, both in metres over `scale`, so a
 *  culm tile's node rings cross the culm at real spacing whichever way the cylinder is then rotated.
 *  Apply BEFORE rotate/translate. `vOff` phases the tile along the culm so no two culms (or a cord
 *  collar) ring at the same station. */
function culmUV(g: THREE.BufferGeometry, r: number, h: number, scale: number, vOff = 0): THREE.BufferGeometry {
  const uv = g.getAttribute('uv');
  const ku = (2 * Math.PI * r) / scale, kv = h / scale;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * ku, uv.getY(i) * kv + vOff);
  return g;
}

/** Fine longitudinal grain between y0 and y1 across a band x0..x1: many hairlines, mostly a dark
 *  fibre tone, a few bleached, so the surface reads as fibrous bamboo rather than paint. */
function grainLines(ctx: CanvasRenderingContext2D, rnd: () => number, x0: number, x1: number, y0: number, y1: number, n: number, dark: string, light: string, aMax: number): void {
  for (let k = 0; k < n; k++) {
    const x = x0 + rnd() * (x1 - x0), a = 0.04 + rnd() * aMax, w = rnd() < 0.75 ? 1 : 1.6;
    ctx.fillStyle = `rgba(${rnd() < 0.72 ? dark : light},${a.toFixed(3)})`;
    ctx.fillRect(x, y0, w, y1 - y0);
  }
}

/** Soft cloudy weathering along the fibre direction: lengthwise patches of warm brown-grey (old
 *  lignin showing through the bleach) and of near-white (sun-bleached faces), so the tone drifts
 *  the way weathered bamboo does instead of sitting at one grey. Vertical = along the fibre. */
function weatherPatches(ctx: CanvasRenderingContext2D, rnd: () => number, s: number, x0: number, x1: number, n: number, warmA: number, bleachA: number): void {
  for (let k = 0; k < n; k++) {
    const y = rnd() * s, len = s * (0.12 + rnd() * 0.45), warm = rnd() < 0.5;
    const c = warm ? '112,100,88' : '255,255,255', a = warm ? warmA * (0.4 + rnd() * 0.6) : bleachA * (0.4 + rnd() * 0.6);
    const g2 = ctx.createLinearGradient(0, y, 0, y + len);
    g2.addColorStop(0, `rgba(${c},0)`); g2.addColorStop(0.35, `rgba(${c},${a})`); g2.addColorStop(0.65, `rgba(${c},${a})`); g2.addColorStop(1, `rgba(${c},0)`);
    ctx.fillStyle = g2;
    for (const dy of [-s, 0]) ctx.fillRect(x0, y + dy, x1 - x0, len);
  }
}

/** Mould: clusters of small dark specks (a few dozen each), the way black mould sits on outdoor
 *  bamboo -- dense at a few spots, absent elsewhere. Alpha capped so the darkest speck over the
 *  measured albedo stays well clear of the hole gate's luma 58. Wraps in y. */
function mouldClusters(ctx: CanvasRenderingContext2D, rnd: () => number, s: number, spots: number[][], rx: number, ry: number, n: number, aMax: number): void {
  for (const [cx, cy] of spots) {
    const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry) * 0.8);
    g2.addColorStop(0, `rgba(28,26,22,${(aMax * 0.9).toFixed(3)})`); g2.addColorStop(1, 'rgba(28,26,22,0)');
    ctx.fillStyle = g2;
    for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.ellipse(cx, cy + dy, rx, ry, 0, 0, Math.PI * 2); ctx.fill(); }
    for (let i = 0; i < n; i++) {
      const x = cx + (rnd() + rnd() - 1) * rx, y = cy + (rnd() + rnd() - 1) * ry;
      ctx.fillStyle = `rgba(28,26,22,${(0.08 + rnd() * aMax).toFixed(3)})`;
      const w = 1 + rnd() * 2, h = 1 + rnd() * 3;
      for (const dy of [-s, 0, s]) ctx.fillRect(x, y + dy, w, h);
    }
  }
}

/** CULM tile for the whole-bamboo post and rails: x runs AROUND the culm, y ALONG it (see culmUV),
 *  0.6 m of culm per tile. Two node rings per tile at irregular stations -- a dark groove under a
 *  pale raised ridge, the grain breaking at each -- with fine longitudinal grain between them, a
 *  long drying split, lengthwise weathering patches and black mould gathered just below each node,
 *  as in the plate's post and rail crops. A multiplier on the measured culm grey. */
function culmTile(size: number, seed: number): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = '92,78,62', LIGHT = '255,255,255';
    ctx.fillStyle = '#f0efec'; ctx.fillRect(0, 0, s, s);
    // a soft tone drift around the culm, so the round is not one flat value
    const ga = ctx.createLinearGradient(0, 0, s, 0);
    ga.addColorStop(0, 'rgba(100,92,84,0.12)'); ga.addColorStop(0.5, 'rgba(255,255,255,0.10)'); ga.addColorStop(1, 'rgba(100,92,84,0.12)');
    ctx.fillStyle = ga; ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, 14, 0.12, 0.30);
    // node stations: two per tile, irregular, never within 0.18 of each other or the wrap
    const nodes = [s * (0.20 + rnd() * 0.10), s * (0.66 + rnd() * 0.12)];
    // grain in segments between the nodes so it breaks at each ring
    const stations = [0, ...nodes, s];
    for (let i = 0; i + 1 < stations.length; i++) grainLines(ctx, rnd, 0, s, stations[i], stations[i + 1], 260, DARK, LIGHT, 0.26);
    // a couple of long drying splits along the fibre
    for (let k = 0; k < 2; k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.25 + rnd() * 0.5);
      ctx.fillStyle = 'rgba(38,32,26,0.55)';
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.4, len);
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.4, y + dy, 1, len);
    }
    // the node rings
    for (const y of nodes) {
      const gs = ctx.createLinearGradient(0, y - s * 0.03, 0, y);
      gs.addColorStop(0, 'rgba(60,50,40,0)'); gs.addColorStop(1, 'rgba(60,50,40,0.22)');
      ctx.fillStyle = gs; ctx.fillRect(0, y - s * 0.03, s, s * 0.03);          // shade up to the ring
      ctx.fillStyle = 'rgba(52,44,36,0.62)'; ctx.fillRect(0, y, s, 2.5);        // the groove
      ctx.fillStyle = 'rgba(255,255,255,0.34)'; ctx.fillRect(0, y + 2.5, s, 4); // the raised sheath ridge
      ctx.fillStyle = 'rgba(60,50,40,0.30)'; ctx.fillRect(0, y + 6.5, s, 1.5);  // its lower edge
      const gd = ctx.createLinearGradient(0, y + 8, 0, y + s * 0.05);
      gd.addColorStop(0, 'rgba(60,50,40,0.20)'); gd.addColorStop(1, 'rgba(60,50,40,0)');
      ctx.fillStyle = gd; ctx.fillRect(0, y + 8, s, s * 0.05);
    }
    // mould gathers just below the nodes and in a couple of loose patches
    const spots: number[][] = [];
    for (const y of nodes) for (let i = 0; i < 2; i++) spots.push([rnd() * s, y + s * (0.02 + rnd() * 0.05)]);
    for (let i = 0; i < 3; i++) spots.push([rnd() * s, rnd() * s]);
    mouldClusters(ctx, rnd, s, spots, s * 0.10, s * 0.06, 90, 0.30);
  });
}


/**
 * THATCH tile, for a roof mapped with WORLD UVs so u runs along the ridge and v up the slope.
 *
 * Thatch is laid in COURSES: each course is a bundle of stems pegged to a purlin with its butts
 * hanging over the course below, so what a viewer actually resolves at prop distance is a stack of
 * horizontal bands with a shadow line under each butt, and a fibre texture running down the slope
 * inside them. Modelling the stems is what the registry notes forbid; this is where that detail
 * goes instead.
 *
 * One tile is `courses` courses tall. The knobs are what separates the two thatches on the plates:
 *   nipa     broad flat palm blades -- few wide strokes (`stemW` 3-7 px), a wide tonal `spread`,
 *            a deeply RAGGED butt line and occasional missing blades.
 *   vetiver  combed grass -- hundreds of hairlines, a narrow spread, an almost straight butt.
 * `moss` multiplies a green cast into scattered patches: the tile is a MULTIPLIER on a pale straw
 * albedo, and a multiply can only darken, so green has to arrive as "less red and blue" and never
 * as a painted green. Nothing here goes below 0.42 of the albedo, which keeps the darkest texel of
 * a straw at luma ~150 well clear of the silhouette gate's backdrop band.
 */
function thatchTile(size: number, seed: number, o: any): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const nc: number = o.courses ?? 4, ch = s / nc;
    const stems: number = o.stems ?? 260, spread: number = o.spread ?? 0.12;
    const wMin: number = o.stemW?.[0] ?? 1, wMax: number = o.stemW?.[1] ?? 2;
    const ragged: number = o.ragged ?? 0.06;                 // butt-line waviness, as a share of ch
    const [sr, sg, sb]: number[] = o.stemRgb ?? [120, 106, 84];   // the dark blade tint; nipa is greyer than grass
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, s, s);

    // the butt line of each course, jittered per column and SHARED with the course above so the
    // shadow and the blades agree on where the edge is
    const butts: number[][] = [];
    for (let c = 0; c <= nc; c++) {
      const row: number[] = [];
      let y = 0;
      for (let x = 0; x <= s; x++) {
        if (x % Math.max(2, Math.round(s / 48)) === 0) y = (rnd() * 2 - 1) * ragged * ch;
        row.push(c * ch + y);
      }
      butts.push(row);
    }

    for (let c = 0; c < nc; c++) {
      const y0 = c * ch;
      // the course's own tone: thatch weathers course by course, the lower ones greyer
      const t = 1 - spread * rnd();
      const v = Math.round(255 * t);
      ctx.fillStyle = `rgb(${v},${Math.round(v * 0.985)},${Math.round(v * 0.95)})`;
      ctx.fillRect(0, y0 - ragged * ch - 1, s, ch + 2 * ragged * ch + 2);
      // stems running DOWN the slope inside the course, each a little past its butt line
      for (let k = 0; k < stems; k++) {
        const x = rnd() * s;
        const w = wMin + rnd() * (wMax - wMin);
        const tone = 1 - spread * (0.3 + rnd() * 0.7);
        const a = 0.18 + rnd() * 0.32;
        const dark = rnd() < 0.62;
        ctx.fillStyle = dark ? `rgba(${Math.round(sr * tone)},${Math.round(sg * tone)},${Math.round(sb * tone)},${a.toFixed(3)})`
                             : `rgba(255,253,246,${(a * 0.6).toFixed(3)})`;
        const yTop = y0 - ch * (0.15 + rnd() * 0.25);
        const yBot = butts[c + 1][Math.min(s, Math.round(x))] + ch * (rnd() * 0.10);
        ctx.fillRect(x, yTop, w, Math.max(2, yBot - yTop));
        // TORN TIP: some blades run on past the butt line and end in a point, so the course edge is
        // a fringe of individual blades rather than a wavy cut (the nipa plate's whole character)
        const tear: number = o.tear ?? 0;
        if (tear > 0 && rnd() < 0.45) {
          const L = ch * tear * (0.3 + rnd() * 0.7);
          ctx.beginPath(); ctx.moveTo(x, yBot); ctx.lineTo(x + w, yBot); ctx.lineTo(x + w / 2, yBot + L); ctx.closePath(); ctx.fill();
          ctx.fillStyle = `rgba(58,48,36,${(0.10 + rnd() * 0.16).toFixed(3)})`;
          ctx.fillRect(x - 1, yBot, w + 2, L * 0.5);
        }
      }
      // BLADE SEAMS: a thin dark line between neighbouring blades, which is what separates a nipa
      // roof (broad leaflets laid side by side) from combed grass thatch
      for (let k = 0; k < (o.seams ?? 0); k++) {
        const x = rnd() * s;
        ctx.fillStyle = `rgba(70,60,46,${(0.10 + rnd() * 0.18).toFixed(3)})`;
        ctx.fillRect(x, y0 - ch * 0.1, 1, ch * (0.7 + rnd() * 0.5));
      }
      // MISSING blades: a few gaps where the course has thinned, dark but never black
      const gaps = o.gaps ?? 0;
      for (let k = 0; k < gaps; k++) {
        const x = rnd() * s, w = s * (0.01 + rnd() * 0.03);
        ctx.fillStyle = `rgba(96,84,66,${(0.20 + rnd() * 0.18).toFixed(3)})`;
        ctx.fillRect(x, y0 + ch * 0.25, w, ch * (0.4 + rnd() * 0.5));
      }
    }

    // the shadow each course's butt casts on the one below: a gradient falling AWAY from the line,
    // drawn along the jittered butt so the shadow is as ragged as the edge that casts it, with the
    // LIT TIPS of the course above it as a pale line. The pair is what makes the roof read as
    // stacked layers; the shadow alone reads as grain, which is what the first build looked like.
    for (let c = 1; c <= nc; c++) {
      for (let x = 0; x < s; x++) {
        const yb = butts[c][x];
        const gh = ctx.createLinearGradient(0, yb - ch * 0.09, 0, yb);
        gh.addColorStop(0, 'rgba(255,252,242,0)'); gh.addColorStop(1, `rgba(255,252,242,${(o.tip ?? 0.34).toFixed(3)})`);
        ctx.fillStyle = gh;
        for (const dy of [-s, 0]) ctx.fillRect(x, yb - ch * 0.09 + dy, 1, ch * 0.09);
        const g2 = ctx.createLinearGradient(0, yb, 0, yb + ch * 0.22);
        g2.addColorStop(0, `rgba(58,48,36,${(o.shadow ?? 0.42).toFixed(3)})`);
        g2.addColorStop(1, 'rgba(58,48,36,0)');
        ctx.fillStyle = g2;
        for (const dy of [-s, 0]) ctx.fillRect(x, yb + dy, 1, ch * 0.22);
      }
    }

    // MOSS / MOULD: less red and blue over soft patches, never a painted green
    for (let k = 0; k < (o.moss ?? 0); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * 0.14);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.14 + rnd() * 0.22;
      g2.addColorStop(0, `rgba(150,190,110,${a.toFixed(3)})`); g2.addColorStop(1, 'rgba(150,190,110,0)');
      ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); }
      ctx.globalCompositeOperation = 'source-over';
    }
    // ROT: dark grey-brown patches where the thatch has decayed, neutral rather than green
    for (let k = 0; k < (o.rot ?? 0); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.04 + rnd() * 0.08);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.30 + rnd() * 0.25;
      g2.addColorStop(0, `rgba(96,86,74,${a.toFixed(3)})`); g2.addColorStop(0.6, `rgba(96,86,74,${(a * 0.5).toFixed(3)})`); g2.addColorStop(1, 'rgba(96,86,74,0)');
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); }
    }
    // soft tonal drift so the courses do not read as a printed stripe
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 10, 0.10, 0.22);
  });
}

/**
 * WOVEN TARPAULIN tile: the coarse cross-woven polypropylene tape of a Thai builder's tarp, plus
 * the creases a folded sheet keeps for life and the sun-bleaching along the ridges. A multiplier on
 * the measured blue, so the weave darkens and the bleach lifts toward white.
 */
function tarpTile(size: number, seed: number, o: any): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, s, s);
    const pitch = Math.max(3, Math.round(s / (o.tapes ?? 64)));
    // the weave: warp and weft tapes, each pair with a shadow at its join, alternating over/under
    for (let x = 0; x < s; x += pitch) {
      ctx.fillStyle = `rgba(30,34,44,${(0.10 + rnd() * 0.08).toFixed(3)})`; ctx.fillRect(x, 0, 1, s);
      ctx.fillStyle = 'rgba(255,255,255,0.07)'; ctx.fillRect(x + 1, 0, Math.max(1, pitch * 0.35), s);
    }
    for (let y = 0; y < s; y += pitch) {
      ctx.fillStyle = `rgba(30,34,44,${(0.10 + rnd() * 0.08).toFixed(3)})`; ctx.fillRect(0, y, s, 1);
      ctx.fillStyle = 'rgba(255,255,255,0.07)'; ctx.fillRect(0, y + 1, s, Math.max(1, pitch * 0.35));
    }
    // fold creases: long pale lines with a shadow on one side, at the two axes a tarp is folded on
    for (let k = 0; k < (o.creases ?? 6); k++) {
      const horiz = rnd() < 0.5, p = rnd() * s, len = s * (0.5 + rnd() * 0.5), q = rnd() * s;
      ctx.fillStyle = 'rgba(255,255,255,0.26)';
      ctx.fillStyle = 'rgba(255,255,255,0.26)';
      if (horiz) { ctx.fillRect(q - len / 2, p, len, 1.6); ctx.fillStyle = 'rgba(20,26,38,0.18)'; ctx.fillRect(q - len / 2, p + 1.6, len, 2); }
      else { ctx.fillRect(p, q - len / 2, 1.6, len); ctx.fillStyle = 'rgba(20,26,38,0.18)'; ctx.fillRect(p + 1.6, q - len / 2, 2, len); }
    }
    // sun-bleached streaks and a little grime
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 12, 0.10, 0.34);
  });
}

/**
 * SAWN TIMBER tile for a weathered post-and-plate frame: fine longitudinal grain, a few knots, the
 * odd drying split, and cloudy silver weathering. Deliberately WEAKLY directional -- the frame is
 * mapped with world UVs, which put v along the post but ACROSS a beam, and a strongly striped tile
 * would then read as a plank joint running the wrong way on half the frame. The weathering carries
 * most of the read and the grain only sharpens it, which survives both orientations.
 */
function sawnTile(size: number, seed: number, o: any): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = '96,84,68', LIGHT = '255,255,255';
    ctx.fillStyle = '#f4f2ee'; ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 20, 0.14, 0.30);
    grainLines(ctx, rnd, 0, s, 0, s, o.grain ?? 220, DARK, LIGHT, 0.18);
    // knots: a dark ellipse with the grain sweeping round it
    for (let k = 0; k < (o.knots ?? 4); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.012 + rnd() * 0.02);
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.fillStyle = 'rgba(74,60,44,0.45)';
        ctx.beginPath(); ctx.ellipse(x + dx, y + dy, r, r * 1.6, 0, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(96,80,60,0.22)'; ctx.lineWidth = 1;
        for (let q = 1; q <= 3; q++) { ctx.beginPath(); ctx.ellipse(x + dx, y + dy, r * (1 + q * 0.6), r * (1.6 + q * 0.9), 0, 0, Math.PI * 2); ctx.stroke(); }
      }
    }
    // drying splits along the fibre
    for (let k = 0; k < (o.splits ?? 3); k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.2 + rnd() * 0.45);
      ctx.fillStyle = 'rgba(58,48,36,0.42)';
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.4, len);
      ctx.fillStyle = 'rgba(255,255,255,0.16)';
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.4, y + dy, 1, len);
    }
    const spots: number[][] = [];
    for (let i = 0; i < (o.mould ?? 3); i++) spots.push([rnd() * s, rnd() * s]);
    mouldClusters(ctx, rnd, s, spots, s * 0.09, s * 0.07, 70, 0.24);
  });
}

/**
 * GALVANISED SHEET weathering: one seamless multiplier tile carrying the three things a zinc roof
 * actually shows -- the chalky white oxidation that eats the spangle, the darker grey drift where
 * it has not, and the warm rust freckles that start at every fixing and lap.
 *
 * Like `paintTile` it is drawn in ABSOLUTE multiplier space over a RE-BASED envelope, because
 * chalking is BRIGHTER than the clean sheet it sits on and a plain multiply can only darken. `o.base`
 * is the clean zinc's own multiplier against that envelope and is what most of the tile is filled
 * with; `o.chalk` reaches back up to the envelope. Measured off the plate, the deck runs 172 to 197
 * luma across its own surface at a saturation of 0.04 -- a 25-luma spread on a nominally flat grey,
 * which is the whole difference between a roof and a sheet of plastic.
 *
 * `chalkScale` / `driftScale` exist because on a roof the tile is small against the surface: the
 * deck repeats it four times across, so any mark wider than a tenth of it draws a visible lattice.
 * The BROAD chalk zones belong on the sheet's own vertex grid, which does not repeat; what the tile
 * owes is the fine speckle inside them.
 *
 * The roll marks are drawn LAST and along u, which on the deck's world UVs is the axis the modelled
 * flutes run across. They are what the tile still owes the geometry once the corrugation itself is
 * real: a roll former leaves fine lengthwise striation between the flutes, and `bump` picks it up.
 */
function galvTile(size: number, seed: number, o: any): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v: number[]) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1], chalk = o.chalk ?? base, rust = o.rust ?? base, dark = o.dark ?? base;
    const wrap = (draw: (dx: number, dy: number) => void) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    const blob = (c: number[], x: number, y: number, r: number, a: number, ry = 1, rot = 0) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb(c)},${a})`); g.addColorStop(0.55, `rgba(${rgb(c)},${a * 0.5})`);
      g.addColorStop(1, `rgba(${rgb(c)},0)`);
      ctx.fillStyle = g;
      wrap((dx, dy) => { ctx.beginPath(); ctx.ellipse(x + dx, y + dy, r, r * ry, rot, 0, Math.PI * 2); ctx.fill(); });
    };

    // The base fill carries the FLUTE shading when `flutes` is set: `flutes` ripples per tile, in
    // phase with the modelled corrugation (a trough at u = 0, which is where the deck's world UVs put
    // one). The geometry already turns the flutes to the light -- this is the ambient darkening in
    // the valleys and the roll-former's own polish on the crests, which flat studio lighting on a
    // smooth-shaded triangle wave gives none of. Out of phase it would BEAT with the geometry, which
    // is why the pitch is locked to the deck's own 13 flutes per metre rather than chosen.
    const fl = o.flutes ?? 0, flow = o.fluteLow ?? 0.88;
    if (fl > 0) {
      for (let x = 0; x < s; x++) {
        const t = (1 - Math.cos(x / s * Math.PI * 2 * fl)) / 2;   // 0 in the trough, 1 at the crest
        const k = flow + (1 - flow) * t;
        ctx.fillStyle = `rgb(${rgb(base.map((v: number) => v * k))})`; ctx.fillRect(x, 0, 1, s);
      }
    } else { ctx.fillStyle = `rgb(${rgb(base)})`; ctx.fillRect(0, 0, s, s); }

    // 1. the grey drift: broad, very soft, the areas the chalk has not reached
    for (let i = 0; i < (o.drift ?? 16); i++)
      blob(dark, rnd() * s, rnd() * s, s * (0.16 + rnd() * 0.30) * (o.driftScale ?? 1), 0.10 + rnd() * 0.18, 0.5 + rnd() * 0.9, rnd() * Math.PI);

    // 2. the chalk bloom: LARGE, soft and irregular, with a granular fringe. On a roof it is the
    //    dominant mark -- the plate's deck is more chalk than clean sheet -- so it is drawn wide and
    //    at high alpha, unlike the sparse blooms of a painted panel.
    for (let k = 0; k < (o.chalkPatches ?? 14); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.08 + rnd() * 0.18) * (o.chalkScale ?? 1);
      blob(chalk, cx, cy, cr, (o.chalkAlpha ?? 0.55) + rnd() * 0.30, 0.5 + rnd() * 0.9, rnd() * Math.PI);
      for (let i = 0; i < 40; i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr * 1.3;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.8 + rnd() * 2.4;
        ctx.fillStyle = `rgba(${rgb(chalk)},${0.2 + rnd() * 0.45})`;
        wrap((dx, dy) => { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); });
      }
    }

    // 3. rust: small warm freckle clusters, each a soft patch under a field of specks, with a short
    //    run below it. Zinc does not sheet-rust the way bare steel does -- it freckles first.
    for (let k = 0; k < (o.rustClusters ?? 10); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.02 + rnd() * 0.055);
      blob(rust, cx, cy, cr, 0.25 + rnd() * 0.30, 0.7 + rnd() * 0.7, rnd() * Math.PI);
      for (let i = 0; i < (o.specksPerCluster ?? 26); i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.7 + rnd() * 1.8;
        ctx.fillStyle = `rgba(${rgb(rust)},${0.25 + rnd() * 0.45})`;
        wrap((dx, dy) => { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); });
      }
      if (rnd() < 0.6) {
        const w = 1 + rnd() * s * 0.006, len = s * (0.05 + rnd() * 0.16);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        g.addColorStop(0, `rgba(${rgb(rust)},${0.14 + rnd() * 0.16})`); g.addColorStop(1, `rgba(${rgb(rust)},0)`);
        ctx.fillStyle = g;
        wrap((dx) => ctx.fillRect(cx + dx + (rnd() - 0.5) * cr, cy, w, len));
      }
    }

    // 4. roll marks: fine lines of constant u, at `rolls` per tile, alternately a shade under and a
    //    shade over the tone they cross. Bound as a bump map they are the striation between flutes.
    const rolls = o.rolls ?? 40;
    for (let i = 0; i < rolls; i++) {
      const x = (i + 0.35 + rnd() * 0.3) * s / rolls, up = rnd() < 0.45;
      const c = up ? chalk : dark, a = 0.06 + rnd() * 0.12;
      ctx.strokeStyle = `rgba(${rgb(c)},${a})`; ctx.lineWidth = 0.7 + rnd() * 1.3;
      for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.moveTo(x + dx, 0); ctx.lineTo(x + dx, s); ctx.stroke(); }
    }
  });
}

/** SPLIT-CULM tile for the half-pipe roofing: x AROUND the half culm (culmUV over 0.70 m, so the
 *  seam lands on the hidden underside), y ALONG it. What the plate shows on a roofing culm that a
 *  whole pole does not: ONE node ring per 0.70 m (the roof culms are longer internodes than the
 *  posts), dense longitudinal fibre, a long drying split, bleached faces, and ROT -- dark
 *  irregular holes with a stained halo and a scatter of insect pinholes, three or four per tile.
 *  A multiplier on the per-instance tone; the rot cores are small enough (10-20 px of 512, on a
 *  0.70 m tile, so 15-30 mm) that no enclosed dark patch reaches the silhouette gate. */
function splitTile(size: number, seed: number): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = '88,76,58', LIGHT = '255,255,255';
    ctx.fillStyle = '#f3f0e8'; ctx.fillRect(0, 0, s, s);
    // a soft round-off across the arc: the rims a touch darker than the crown
    const ga = ctx.createLinearGradient(0, 0, s, 0);
    ga.addColorStop(0, 'rgba(90,84,74,0.14)'); ga.addColorStop(0.5, 'rgba(255,255,255,0.08)'); ga.addColorStop(1, 'rgba(90,84,74,0.14)');
    ctx.fillStyle = ga; ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, 10, 0.10, 0.34);
    const node = s * (0.30 + rnd() * 0.40);
    for (const [y0, y1] of [[0, node], [node, s]]) grainLines(ctx, rnd, 0, s, y0, y1, 320, DARK, LIGHT, 0.24);
    for (let k = 0; k < 3; k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.3 + rnd() * 0.6);
      ctx.fillStyle = 'rgba(40,34,26,0.55)';
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.6, len);
      ctx.fillStyle = 'rgba(255,255,255,0.20)';
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.6, y + dy, 1.2, len);
    }
    // the node ring
    {
      const y = node;
      const gs = ctx.createLinearGradient(0, y - s * 0.03, 0, y);
      gs.addColorStop(0, 'rgba(60,50,40,0)'); gs.addColorStop(1, 'rgba(60,50,40,0.24)');
      ctx.fillStyle = gs; ctx.fillRect(0, y - s * 0.03, s, s * 0.03);
      ctx.fillStyle = 'rgba(52,44,36,0.66)'; ctx.fillRect(0, y, s, 3);
      ctx.fillStyle = 'rgba(255,255,255,0.36)'; ctx.fillRect(0, y + 3, s, 5);
      ctx.fillStyle = 'rgba(60,50,40,0.30)'; ctx.fillRect(0, y + 8, s, 2);
    }
    // ROT: an irregular dark core with a warm stained halo, and pinholes around it
    for (let k = 0; k < 4; k++) {
      const cx = rnd() * s, cy = rnd() * s, rx = s * (0.012 + rnd() * 0.03), ry = rx * (1.4 + rnd() * 1.6), rot = (rnd() - 0.5) * 0.6;
      for (const dy of [-s, 0, s]) {
        const halo = ctx.createRadialGradient(cx, cy + dy, 0, cx, cy + dy, Math.max(rx, ry) * 2.4);
        halo.addColorStop(0, 'rgba(96,74,40,0.42)'); halo.addColorStop(0.5, 'rgba(96,74,40,0.20)'); halo.addColorStop(1, 'rgba(96,74,40,0)');
        ctx.fillStyle = halo; ctx.beginPath(); ctx.ellipse(cx, cy + dy, rx * 2.6, ry * 2.4, rot, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(36,28,18,0.82)'; ctx.beginPath(); ctx.ellipse(cx, cy + dy, rx, ry, rot, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(14,10,6,0.9)'; ctx.beginPath(); ctx.ellipse(cx + rx * 0.2, cy + dy - ry * 0.1, rx * 0.5, ry * 0.55, rot, 0, Math.PI * 2); ctx.fill();
      }
      for (let i = 0; i < 6; i++) {
        const x = cx + (rnd() - 0.5) * s * 0.12, y = cy + (rnd() - 0.5) * s * 0.2, r = 1 + rnd() * 1.8;
        ctx.fillStyle = 'rgba(30,24,16,0.85)';
        for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x, y + dy, r, 0, Math.PI * 2); ctx.fill(); }
      }
    }
    // loose mould below the node
    mouldClusters(ctx, rnd, s, [[rnd() * s, node + s * 0.04], [rnd() * s, rnd() * s]], s * 0.08, s * 0.05, 60, 0.26);
  });
}

/** ROPE tile for the lashings: x AROUND the collar, y ALONG the pole it wraps. A lashing is turns
 *  of laid rope, so the surface is diagonal STRANDS -- a groove and a lit ridge per strand at a
 *  shallow wrap angle -- with fibre fuzz and a few darker soiled turns. Over 0.12 m per tile the
 *  strand pitch is ~12 mm, which is the plate's rope. Seamless: every stroke is drawn at three
 *  y offsets and the strand runs across the wrap. */
function ropeTile(size: number, seed: number): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = '#f4efe4'; ctx.fillRect(0, 0, s, s);
    const n = 10, pitch = s / n, ang = 0.32;                // wrap angle, radians
    const dx = Math.tan(ang) * s;                            // how far a strand drifts in x over one tile height
    ctx.save();
    for (let k = -3; k < n + 3; k++) {
      const x0 = k * pitch;
      for (const oy of [-s, 0, s]) {
        // groove between turns
        ctx.strokeStyle = 'rgba(70,58,40,0.55)'; ctx.lineWidth = pitch * 0.22;
        ctx.beginPath(); ctx.moveTo(x0, oy); ctx.lineTo(x0 + dx, oy + s); ctx.stroke();
        // the lit crown of the turn
        ctx.strokeStyle = 'rgba(255,255,255,0.30)'; ctx.lineWidth = pitch * 0.30;
        ctx.beginPath(); ctx.moveTo(x0 + pitch * 0.5, oy); ctx.lineTo(x0 + pitch * 0.5 + dx, oy + s); ctx.stroke();
        // twist marks across each turn
        ctx.strokeStyle = 'rgba(90,76,52,0.28)'; ctx.lineWidth = 1.2;
        for (let t = 0; t < 12; t++) {
          const yy = oy + (t + rnd()) * s / 12, xx = x0 + pitch * 0.5 + dx * ((yy - oy) / s);
          ctx.beginPath(); ctx.moveTo(xx - pitch * 0.35, yy - pitch * 0.18); ctx.lineTo(xx + pitch * 0.35, yy + pitch * 0.18); ctx.stroke();
        }
      }
    }
    ctx.restore();
    // fuzz and soiling
    for (let i = 0; i < 500; i++) {
      const x = rnd() * s, y = rnd() * s;
      ctx.fillStyle = rnd() < 0.6 ? 'rgba(70,58,40,0.18)' : 'rgba(255,255,255,0.22)';
      ctx.fillRect(x, y, 1, 1 + rnd() * 2);
    }
    for (let i = 0; i < 3; i++) {
      const y = rnd() * s, h = s * (0.06 + rnd() * 0.10);
      const g2 = ctx.createLinearGradient(0, y, 0, y + h);
      g2.addColorStop(0, 'rgba(60,48,32,0)'); g2.addColorStop(0.5, 'rgba(60,48,32,0.22)'); g2.addColorStop(1, 'rgba(60,48,32,0)');
      ctx.fillStyle = g2; for (const dy of [-s, 0]) ctx.fillRect(0, y + dy, s, h);
    }
  });
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
    // A LIT surface (a fluorescent tube, a charcoal ember bed): emissive carries the glow without a
    // light source, which the kit's props never own -- the host scene owns lighting.
    if (s.emissive !== undefined) { m.emissive = new THREE.Color(s.emissive); m.emissiveIntensity = s.emissiveIntensity ?? 1; }
    if (s.opacity !== undefined) { m.transparent = true; m.opacity = s.opacity; m.depthWrite = true; }
    // An ALPHA-CUT pane (chain-link mesh): the canvas tile carries the cut-out in its alpha channel and
    // alphaTest discards the open cells, so the wire stays opaque and sorts like a solid.
    if (s.alphaTest !== undefined) { m.alphaTest = s.alphaTest; m.transparent = false; }
    m.name = s.id;
    map[s.id] = m;
  }
  return map;
}

/* ------------------------------------------------------------------ the model */

export function createPoliceTrafficBarrierModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Police Traffic Barrier';

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


  /* ---------------------------------------------------------------- components
   * Each entry of CONFIG.geometry.components is ONE merged geometry on ONE material -- one draw
   * call. Every part inside it is a tinted box, tube, cylinder, lathe or plane; colour differences
   * are vertex colours. `uv` picks how a post-construction canvas tile repeats over it. */
  for (const c of G.components as any[]) {
    const gs: THREE.BufferGeometry[] = [];
    for (const b of (c.boxes ?? []) as number[][]) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const b of mirrorX((c.boxesMirrored ?? []) as number[][])) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const t of (c.tubes ?? []) as any[]) gs.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
    // SWEPT tubes: one mitred ring per point instead of a cylinder per segment -- the only thing that
    // survives a tight bend. See sweepTube.
    for (const t of (c.sweeps ?? []) as any[]) gs.push(sweepTube(t.pts, t.r, t.seg ?? 10, t.hex, t.cap !== false));
    for (const st of (c.straps ?? []) as any[]) gs.push(strap(st.pts, st.w, st.t, st.about, st.hex));
    for (const cy of (c.cyls ?? []) as any[]) {
      // `th0`/`thLen` make a PARTIAL cylinder (a curved sticker patch wrapped on a round body) and
      // `open` drops the caps; the side UVs then run 0..1 across the arc and up the height, which is
      // what a baked graphic wants. `uvRep` multiplies them for a repeating tile.
      const g = new THREE.CylinderGeometry(cy.rt, cy.rb, cy.h, cy.seg ?? 12, 1, cy.open ?? false, cy.th0 ?? 0, cy.thLen ?? Math.PI * 2);
      if (cy.uvRep) { const uv = g.getAttribute('uv'); for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * cy.uvRep[0], uv.getY(i) * cy.uvRep[1]); }
      // `sideUV` pins the SIDE wall's UVs to one texel so a disc carrying a baked top-down image shows
      // that image on its cap alone, with its rim in whatever the pinned texel holds (a bag tone).
      if (cy.sideUV) { const uv = g.getAttribute('uv'), n = ((cy.seg ?? 12) + 1) * 2; for (let i = 0; i < n; i++) uv.setXY(i, cy.sideUV[0], cy.sideUV[1]); }
      // `scale` before the rotations: an OVAL basin or disc, which a lathe or a cylinder cannot
      // revolve on its own. Normals are recomputed because a non-uniform scale skews them.
      if (cy.scale) { g.scale(cy.scale[0], cy.scale[1], cy.scale[2]); g.computeVertexNormals(); }
      // CULM UVs: u around the circumference, v along the length, both in metres -- so the node
      // rings of a culm tile cross a bamboo pole at real spacing however the pole is then turned.
      // It has to happen BEFORE the rotations, while the cylinder still runs along its own Y.
      if (c.uv === 'culm') culmUV(g, cy.rt, cy.h, c.uvScale ?? 1, cy.vOff ?? 0);
      if (cy.rx) g.rotateX(cy.rx); if (cy.ry) g.rotateY(cy.ry); if (cy.rz) g.rotateZ(cy.rz);
      g.translate(cy.at[0], cy.at[1], cy.at[2]); gs.push(tintGeo(g, cy.hex));
    }
    for (const l of (c.lathes ?? []) as any[]) {
      // `ry` yaws the revolution: a 4-segment lathe turned 45 degrees is a chamfered SQUARE slab in one
      // geometry (a cone's rubber base), where two stacked boxes would cost two and a coplanar pair.
      // `cylUV` (a tile size in metres) writes a seamless around-by-up UV from the lathe's own segment
      // index -- atan2 would fold a whole tile into the seam column -- for tread, fluting and grain.
      const g = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false, l.weldSeam === true);
      if (l.cylUV) { const cu = Array.isArray(l.cylUV) ? l.cylUV : [l.cylUV, l.cylUV, 0]; latheUV(g, (g.getAttribute('position').count / ((l.seg ?? 12) + 1)) | 0, l.seg ?? 12, cu[0], cu[1], cu[2] ?? 0); }
      if (l.scale) { g.scale(l.scale[0], l.scale[1], l.scale[2]); g.computeVertexNormals(); }
      // `ry` yaws the revolution (above). `rx`/`rz` TILT the axis itself, which is what a WALL or
      // ceiling fitting needs: a lathe revolves about +Y, and a bulkhead lamp's axis is the wall
      // normal, so its backplate and dome are authored about Y and laid down with rx = PI/2.
      if (l.ry) g.rotateY(l.ry); if (l.rx) g.rotateX(l.rx); if (l.rz) g.rotateZ(l.rz);
      g.translate(l.at[0], l.at[1], l.at[2]); gs.push(tintGeo(g, l.hex));
    }
    // RIBBED DOMES: a surface of revolution carrying vertical FLUTES, as `1 + amp * cos(ribs * theta)`
    // sampled per sector rather than a lathe. A pressed-glass lamp dome is fluted, and a smooth one
    // reads as a plastic bubble -- the ribs are most of what says `glass` at prop distance. Authored
    // about +Y like a lathe, so a wall fitting lays it down with rx.
    for (const d of (c.domes ?? []) as any[]) {
      const g = ribbedDome(d.pts, d.ribs, d.amp, d.seg ?? 24, d.valley);
      if (d.ry) g.rotateY(d.ry); if (d.rx) g.rotateX(d.rx); if (d.rz) g.rotateZ(d.rz);
      if (d.at) g.translate(d.at[0], d.at[1], d.at[2]);
      // A fluted dome writes its OWN colour attribute (the crest-to-valley multiplier), so tintGeo
      // would overwrite the flute striping with one flat hex -- the same trap `sheet`'s hexUnder
      // fell into. Multiply the tone INTO the multiplier instead, so the dome carries both.
      if (d.valley && d.hex !== undefined) {
        const col = g.getAttribute('color') as THREE.BufferAttribute;
        const t = new THREE.Color(d.hex);
        for (let i = 0; i < col.count; i++) col.setXYZ(i, col.getX(i) * t.r, col.getY(i) * t.g, col.getZ(i) * t.b);
        gs.push(g);
      } else gs.push(d.valley ? g : tintGeo(g, d.hex));
    }
    for (const p of (c.planes ?? []) as any[]) {
      // A PANE: a single quad in the XY plane at depth z, double-sided by its material. Its UVs run
      // 0..1 across the pane so an alpha-cut tile repeats `rep` times across and down.
      const g = new THREE.PlaneGeometry(p.w, p.h, 1, 1);
      g.translate(p.at[0], p.at[1], p.at[2]);
      const uv = g.getAttribute('uv');
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (p.rep?.[0] ?? 1), uv.getY(i) * (p.rep?.[1] ?? 1));
      gs.push(tintGeo(g, p.hex));
    }
    for (const e of (c.extrudes ?? []) as any[]) {
      // A profile in the XY plane extruded along Z between z0 and z1 -- a slab with a moulded edge,
      // a pyramid cap as a stepped profile, a spear finial.
      const shape = new THREE.Shape();
      shape.moveTo(e.poly[0][0], e.poly[0][1]);
      for (let i = 1; i < e.poly.length; i++) shape.lineTo(e.poly[i][0], e.poly[i][1]);
      shape.closePath();
      for (const h of (e.holes ?? []) as number[][][]) {
        const hp = new THREE.Path(); hp.moveTo(h[0][0], h[0][1]);
        for (let i = 1; i < h.length; i++) hp.lineTo(h[i][0], h[i][1]);
        hp.closePath(); shape.holes.push(hp);
      }
      const g = extrudeAlongZ(shape, e.z0, e.z1);
      if (e.rx) g.rotateX(e.rx);
      if (e.ry) g.rotateY(e.ry);
      if (e.rz) g.rotateZ(e.rz);
      if (e.at) g.translate(e.at[0], e.at[1], e.at[2]);
      gs.push(tintGeo(g, e.hex));
    }
    // ELLIPSOIDS: [hex, cx, cy, cz, rx, ry, rz, rotX?, rotY?, rotZ?] -- a unit sphere scaled per axis
    // and turned about its own centre. A skull dome, a paw, a nose pad: the rounded solids of an
    // animal that a box or a station tube cannot give, sharing smooth normals through the merge.
    for (const e of (c.ellipsoids ?? []) as number[][]) {
      const g = new THREE.SphereGeometry(1, e[10] ?? 16, e[11] ?? 12);
      g.scale(e[4], e[5], e[6]);
      if (e[7]) g.rotateX(e[7]); if (e[8]) g.rotateY(e[8]); if (e[9]) g.rotateZ(e[9]);
      g.translate(e[1], e[2], e[3]);
      gs.push(tintGeo(g, e[0]));
    }
    // FRUSTA: [hex, cx, yBottom, cz, w0, d0, w1, d1, h] -- a box whose footprint changes from (w0, d0) at
    // the bottom to (w1, d1) at the top: the tapered body of a wheelie bin or a steel container.
    for (const f of (c.frusta ?? []) as number[][]) gs.push(tintGeo(frustum(f.slice(1)), f[0]));
    for (const s of (c.spikes ?? []) as any[]) gs.push(tintGeo(spike(s.at, s.w, s.h), s.hex));
    // DRAPED SHEETS: a tarp or awning as a height grid with thickness -- a ridge, the sag between
    // its poles and the droop of its free edges are numbers in the grid, computed at emit time.
    for (const s of (c.sheets ?? []) as any[]) {
      // A sheet given `hexUnder` has already written its OWN colour attribute, one tone for the top
      // grid and another for the underside and rim. tintGeo would overwrite the lot with a single
      // hex -- which is what shipped the tarpaulin bay's blue-over-orange tarp as a white sail.
      const g = sheet(s);
      gs.push(s.hexUnder !== undefined ? g : tintGeo(g, s.hex));
    }
    // ORGANIC station tubes: [z, cx, cy, rx, ry] stations swept along Z -- the only soft form in the
    // kit, a lying animal. Lit smooth by the helper's shared ring vertices.
    for (const t of (c.tubesAlong ?? []) as any[]) {
      const g = tubeAlong(t.stations, t.seg ?? 12);
      if (t.ry) g.rotateY(t.ry); if (t.at) g.translate(t.at[0], t.at[1], t.at[2]);
      // `hexes` -- one colour per STATION, blended along the sweep -- is how a coat pattern that runs
      // along the body (a white collar between a tan skull and a tan saddle) is carried on a single
      // merged mesh. The component's axis tint then multiplies the dorsal-to-ventral fade into it,
      // and neither costs a material. A single `hex` stays the default.
      if (t.hexes) {
        // A station entry may be one hex, or a PAIR [dorsal, ventral] blended around the ring by the
        // same sin(theta) tubeAlong swept the section with -- so the coat runs both ALONG the body
        // (a white collar between a tan skull and a tan saddle) and ACROSS it (the saddle giving way
        // to a dusty flank and a pale belly). An axis tint cannot do the second half: on an animal
        // lying on its side the dorsal-to-ventral axis is horizontal, so a band in x cuts the crown
        // of the sweep in half, and a MULTIPLY can only ever darken -- it cannot take a warm tan to
        // a cooler grey. Two colours per station, one attribute, still one draw call.
        const seg = t.seg ?? 12, n = t.stations.length;
        const col = new Float32Array(seg * n * 3);
        for (let i = 0; i < n; i++) {
          const e = t.hexes[Math.min(t.hexes.length - 1, i)];
          const d = new THREE.Color(Array.isArray(e) ? e[0] : e), v = new THREE.Color(Array.isArray(e) ? e[1] : e);
          for (let j = 0; j < seg; j++) {
            const f = (Math.sin(j * Math.PI * 2 / seg) + 1) / 2;
            const k = (i * seg + j) * 3;
            col[k] = d.r + (v.r - d.r) * f; col[k + 1] = d.g + (v.g - d.g) * f; col[k + 2] = d.b + (v.b - d.b) * f;
          }
        }
        g.setAttribute('color', new THREE.BufferAttribute(col, 3));
        gs.push(g);
      } else gs.push(tintGeo(g, t.hex ?? 0xffffff));
    }
    let g = mergeGeos(gs);
    // a per-component scale, applied to the merge before tinting: how a lying animal authored at
    // its own proportions is fitted into the declared envelope without re-reading every station
    if (c.scale) g.scale(c.scale[0], c.scale[1], c.scale[2]);
    // AXIS TINT: a per-vertex blend from c0 at `from` to c1 at `to` along one axis, over the whole
    // merge -- a tan back fading to a white belly costs an attribute, not a second material. Applied
    // in LINEAR space through THREE.Color. `keep` multiplies the blend into the existing tint instead
    // of replacing it, so a dark nose stays dark.
    if (c.tint) {
      const a = new THREE.Color(c.tint.c0), b = new THREE.Color(c.tint.c1);
      const p = g.getAttribute('position'); let col = g.getAttribute('color') as THREE.BufferAttribute | null;
      if (!col) { col = new THREE.BufferAttribute(new Float32Array(p.count * 3).fill(1), 3); g.setAttribute('color', col); }
      const ax = c.tint.axis === 'x' ? 0 : c.tint.axis === 'y' ? 1 : 2;
      for (let i = 0; i < p.count; i++) {
        const v = ax === 0 ? p.getX(i) : ax === 1 ? p.getY(i) : p.getZ(i);
        const t = Math.min(1, Math.max(0, (v - c.tint.from) / (c.tint.to - c.tint.from)));
        const r = a.r + (b.r - a.r) * t, gg = a.g + (b.g - a.g) * t, bb = a.b + (b.b - a.b) * t;
        if (c.tint.keep) col.setXYZ(i, col.getX(i) * r, col.getY(i) * gg, col.getZ(i) * bb); else col.setXYZ(i, r, gg, bb);
      }
      col.needsUpdate = true;
    }
    if (c.uv === 'world') g = worldUV(g, c.uvScale ?? 1);
    if (c.uv === 'height') g = heightUV(g, c.uvScale ?? 1);
    if (c.uv === 'panel') g = panelUV(g, c.uvScale ?? 1);
    if (c.uv === 'panel-rot') g = panelUV(g, c.uvScale ?? 1, true);
    // 'front': planar UVs into a baked front-elevation atlas on +Z faces, one pinned texel elsewhere.
    if (c.uv === 'front') g = frontAtlasUV(g, c.atlas);
    // 'culm' is deliberately absent here: it is written per cylinder above, before the rotations,
    // and a whole-merge pass would flatten it back to the cylinder's default 0..1 wrap.
    add(c.id, c.name, g, c.material);
    if (c.collider) colliders[c.id] = c.collider;
  }

  /* ---------------------------------------------------------------- repetition systems
   * Pickets, slats, lattice strips: one geometry, one InstancedMesh, one draw call. */
  for (const r of (G.instanced ?? []) as any[]) {
    const gs: THREE.BufferGeometry[] = [];
    for (const b of (r.boxes ?? []) as number[][]) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const s of (r.spikes ?? []) as any[]) gs.push(tintGeo(spike(s.at, s.w, s.h), s.hex));
    for (const f of (r.frusta ?? []) as number[][]) gs.push(tintGeo(frustum(f.slice(1)), f[0]));
    for (const cy of (r.cyls ?? []) as any[]) {
      // `th0`/`thLen` cut a PARTIAL cylinder the same way the component branch does: a split bamboo
      // culm is a half pipe, thLen = PI, `open` so it is a shell with no discs at its ends. The
      // material carries doubleSided, because a hollow-up culm is seen from the inside.
      const g = new THREE.CylinderGeometry(cy.rt, cy.rb, cy.h, cy.seg ?? 12, 1, cy.open ?? false,
                                           cy.th0 ?? 0, cy.thLen ?? Math.PI * 2);
      if (r.uv === 'culm') culmUV(g, cy.rt, cy.h, r.uvScale ?? 1, cy.vOff ?? 0);
      if (cy.rx) g.rotateX(cy.rx); if (cy.ry) g.rotateY(cy.ry); if (cy.rz) g.rotateZ(cy.rz);
      g.translate(cy.at[0], cy.at[1], cy.at[2]); gs.push(tintGeo(g, cy.hex));
    }
    // An OPEN wheel -- tyre and rim as closed ring lathes, a hub, and wire spokes -- for a bicycle
    // whose wheels read as bicycle wheels rather than discs. Lathes revolve about Y (`rx` lays the
    // axle where the placement wants it); `spokes` radiate about X by the helper's convention, so an
    // axle on Z takes `ry: PI/2`.
    for (const l of (r.lathes ?? []) as any[]) {
      const g = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false, l.weldSeam === true);
      if (l.rx) g.rotateX(l.rx); if (l.ry) g.rotateY(l.ry); if (l.rz) g.rotateZ(l.rz);
      if (l.at) g.translate(l.at[0], l.at[1], l.at[2]); gs.push(tintGeo(g, l.hex));
    }
    for (const s of (r.spokes ?? []) as any[]) {
      const g = spokes(s.rHub, s.rRim, s.halfW, s.n, s.hex, s.t ?? 0.006, s.prism ?? false);
      if (s.rx) g.rotateX(s.rx); if (s.ry) g.rotateY(s.ry); if (s.rz) g.rotateZ(s.rz);
      if (s.at) g.translate(s.at[0], s.at[1], s.at[2]); gs.push(g);
    }
    for (const t of (r.tubes ?? []) as any[]) gs.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
    let g = mergeGeos(gs);
    if (r.uv === 'world') g = worldUV(g, r.uvScale ?? 1);
    if (r.uv === 'height') g = heightUV(g, r.uvScale ?? 1);
    // 'culm' again written per cylinder above, before the rotations.
    const mats: THREE.Matrix4[] = [];
    for (const p of r.placements as number[][]) {
      mats.push(new THREE.Matrix4().compose(
        new THREE.Vector3(p[0], p[1], p[2]),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(p[3] ?? 0, p[4] ?? 0, p[5] ?? 0)),
        new THREE.Vector3(1, 1, 1)));
    }
    addInst(r.id, r.name, g, r.material, mats, r.colors);
  }

  /* ---------------------------------------------------------------- post-construction canvases */
  for (const t of (CONFIG.tiles ?? []) as any[]) {
    const mat = materials[t.material];
    if (!mat) continue;
    // A BAKED graphic (a printed sign face): one WebP data URI composed offline from the plate's own
    // printed region and vector marks, loaded through TextureLoader. Assigned synchronously so the
    // harness waits on the decode. It beats fillText, which draws a different wordmark per machine.
    if (t.kind === 'baked') {
      // Under plain Node (the coplanar check, the runtime probe) there is no document for ImageLoader:
      // keep the white fallback rather than throw, exactly as the retail glazing does.
      if (typeof document === 'undefined') continue;
      const baked = new THREE.TextureLoader().load(t.uri);
      const srgb = (THREE as any).SRGBColorSpace;
      if (srgb) baked.colorSpace = srgb;
      baked.anisotropy = 4;
      mat.map = baked; mat.needsUpdate = true;
      continue;
    }
    let tex: THREE.CanvasTexture | null = null;
    if (t.kind === 'mud') tex = mudTile(t.size ?? 512, t.base, t.seed ?? 1, t.coverage ?? 0.33);
    if (t.kind === 'dust') tex = dustTile(t.size ?? 512, t.dust, t.seed ?? 1, t.coverage ?? 0.30);
    if (t.kind === 'plank') tex = plankTile(t.size ?? 512, t.boards ?? 6, t.seed ?? 5);
    if (t.kind === 'rust') tex = rustTile(t.size ?? 512, t.ratio, t.seed ?? 7, t.density ?? 90);
    if (t.kind === 'paint') tex = paintTile(t.size ?? 512, t.seed ?? 17, t);
    if (t.kind === 'corrugation') tex = corrugationTile(t.size ?? 512, t.pitch ?? 12, t.low ?? 0.7, t.seed ?? 3);
    if (t.kind === 'grime') tex = grimeTile(t.size ?? 512, t.seed ?? 11, t);
    if (t.kind === 'zinc') tex = zincTile(t.size ?? 512, t.seed ?? 19, t);
    if (t.kind === 'fur') tex = furTile(t.size ?? 512, t.seed ?? 13, t);
    if (t.kind === 'chainlink') tex = chainlinkTile(t.size ?? 256, t.wire ?? 0.09, t.seed ?? 4);
    if (t.kind === 'bamboo') tex = bambooTile(t.size ?? 512, t.strips ?? 10, t.seed ?? 6);
    if (t.kind === 'stripes') tex = stripeTile(t.size ?? 256, t.bands ?? 8, t.a, t.b, t.seed ?? 9, t);
    if (t.kind === 'poster') tex = posterTile(t.size ?? 512, t.seed ?? 8, t.lines ?? []);
    if (t.kind === 'pebble') tex = pebbleTile(t.size ?? 512, t.seed ?? 21, t);
    if (t.kind === 'tread') tex = treadTile(t.size ?? 256, t.seed ?? 23, t);
    if (t.kind === 'tyre') tex = tyreTile(t.size ?? 256, t.seed ?? 29, t);
    if (t.kind === 'culm') tex = culmTile(t.size ?? 512, t.seed ?? 31);
    if (t.kind === 'sawn') tex = sawnTile(t.size ?? 512, t.seed ?? 43, t);
    if (t.kind === 'thatch') tex = thatchTile(t.size ?? 512, t.seed ?? 37, t);
    if (t.kind === 'tarp') tex = tarpTile(t.size ?? 512, t.seed ?? 41, t);
    if (t.kind === 'galv') tex = galvTile(t.size ?? 512, t.seed ?? 47, t);
    if (t.kind === 'split') tex = splitTile(t.size ?? 512, t.seed ?? 53);
    if (t.kind === 'rope') tex = ropeTile(t.size ?? 512, t.seed ?? 59);
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
  const root = createPoliceTrafficBarrierModel(options);
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
