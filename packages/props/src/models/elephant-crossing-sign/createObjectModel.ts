import * as THREE from 'three';

/**
 * Elephant Crossing Sign -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 0.9 x 2.1 x 0.134 m, origin base-centre on the post axis, +Y up, +Z the printed face.
 * Budget (small, overridden): <=800 triangles, <=2 draw calls, <=2 materials, <=2 unique geometries.
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
    "id": "elephant-crossing-sign",
    "name": "Elephant Crossing Sign",
    "exportName": "ElephantCrossingSign",
    "envelope": "Envelope 0.9 x 2.1 x 0.134 m, origin base-centre on the post axis, +Y up, +Z the printed face.\n * Budget (small, overridden): <=800 triangles, <=2 draw calls, <=2 materials, <=2 unique geometries.",
    "materials": [
      {
        "id": "sheeting",
        "color": 16777215,
        "roughness": 0.42,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "galv",
        "color": 16777215,
        "roughness": 0.55,
        "metalness": 0.3,
        "vertexColors": true
      }
    ],
    "tiles": [
      {
        "material": "sheeting",
        "kind": "baked",
        "uri": "data:image/webp;base64,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"
      },
      {
        "material": "galv",
        "kind": "paint",
        "size": 512,
        "seed": 811,
        "base": [
          0.78,
          0.8,
          0.82
        ],
        "chalk": [
          0.9,
          0.92,
          0.93
        ],
        "rust": [
          0.48,
          0.33,
          0.2
        ],
        "run": [
          0.4,
          0.26,
          0.13
        ],
        "drift": 10,
        "rustClusters": 3,
        "clusterScale": 0.45,
        "grain": 1200,
        "hbands": [
          {
            "v0": 0.40952380952380957,
            "v1": 0.4666666666666667,
            "alpha": 0.5,
            "specks": 80
          }
        ],
        "bandStreaks": [
          {
            "v": 0.40952380952380957,
            "count": 36,
            "len": 0.04,
            "lenVar": 0.07,
            "width": 0.006,
            "alpha": 0.28
          }
        ],
        "groundBand": 0.45,
        "groundHeight": 0.0857142857142857
      }
    ],
    "geometry": {
      "components": [
        {
          "id": "plate",
          "name": "Printed sign plate",
          "material": "sheeting",
          "uv": "front",
          "atlas": {
            "x0": -0.45,
            "x1": 0.55,
            "y0": 2.1,
            "y1": 0.98,
            "yMin": 0.98,
            "pin": [
              0.975,
              0.75
            ],
            "base": 16777215,
            "minNz": 0.95
          },
          "extrudes": [
            {
              "hex": 16777215,
              "poly": [
                [
                  0.02121,
                  2.07879
                ],
                [
                  0.00776,
                  2.08655
                ],
                [
                  -0.00776,
                  2.08655
                ],
                [
                  -0.02121,
                  2.07879
                ],
                [
                  -0.42879,
                  1.67121
                ],
                [
                  -0.43655,
                  1.65776
                ],
                [
                  -0.43655,
                  1.64224
                ],
                [
                  -0.42879,
                  1.62879
                ],
                [
                  -0.02121,
                  1.22121
                ],
                [
                  -0.00776,
                  1.21345
                ],
                [
                  0.00776,
                  1.21345
                ],
                [
                  0.02121,
                  1.22121
                ],
                [
                  0.42879,
                  1.62879
                ],
                [
                  0.43655,
                  1.64224
                ],
                [
                  0.43655,
                  1.65776
                ],
                [
                  0.42879,
                  1.67121
                ]
              ],
              "z0": 0.053000000000000005,
              "z1": 0.08600000000000001
            },
            {
              "hex": 16777215,
              "poly": [
                [
                  0.3,
                  1.165
                ],
                [
                  0.29799,
                  1.1725
                ],
                [
                  0.2925,
                  1.17799
                ],
                [
                  0.285,
                  1.18
                ],
                [
                  -0.285,
                  1.18
                ],
                [
                  -0.2925,
                  1.17799
                ],
                [
                  -0.29799,
                  1.1725
                ],
                [
                  -0.3,
                  1.165
                ],
                [
                  -0.3,
                  0.995
                ],
                [
                  -0.29799,
                  0.9875
                ],
                [
                  -0.2925,
                  0.98201
                ],
                [
                  -0.285,
                  0.98
                ],
                [
                  0.285,
                  0.98
                ],
                [
                  0.2925,
                  0.98201
                ],
                [
                  0.29799,
                  0.9875
                ],
                [
                  0.3,
                  0.995
                ]
              ],
              "z0": 0.053000000000000005,
              "z1": 0.08600000000000001
            }
          ]
        },
        {
          "id": "post",
          "name": "Galvanised support, brackets and rim",
          "material": "galv",
          "uv": "height",
          "uvScale": 2.1,
          "tint": {
            "axis": "y",
            "from": 0.03,
            "to": 0.32,
            "c0": 11047024,
            "c1": 16777215,
            "keep": true
          },
          "collider": {
            "shape": "box",
            "localCenter": [
              0,
              1.05,
              0.02
            ],
            "halfExtents": [
              0.45,
              1.05,
              0.067
            ],
            "notes": "The sign envelope; the shipped compound is derived from the geometry."
          },
          "boxes": [
            [
              16777215,
              0,
              1,
              0,
              0.08,
              2,
              0.08
            ],
            [
              16777215,
              0,
              2.004,
              0,
              0.08600000000000001,
              0.008,
              0.08600000000000001
            ],
            [
              16777215,
              0,
              1.38,
              0.046,
              0.08,
              0.045,
              0.012000000000000004
            ],
            [
              16777215,
              0,
              1.9200000000000002,
              0.046,
              0.08,
              0.045,
              0.012000000000000004
            ],
            [
              16777215,
              0,
              1.08,
              0.046,
              0.186,
              0.045,
              0.012000000000000004
            ],
            [
              16777215,
              0,
              1.54,
              0.046,
              0.08,
              1.08,
              0.012000000000000004
            ]
          ],
          "cyls": [],
          "extrudes": []
        }
      ]
    },
    "_depth": 0.134
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
                    valley?: number[], smooth = false): THREE.BufferGeometry {
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
  // `smooth` averages the normals of every vertex sharing a position, so a low-sector flower head
  // or pompom shades as a rounded solid rather than a cut gem. The soup is non-indexed, so the
  // faceted default is what computeVertexNormals gives; the mosque's domes keep it.
  if (smooth) {
    const pos = g.getAttribute('position') as THREE.BufferAttribute, nrm = g.getAttribute('normal') as THREE.BufferAttribute;
    const acc = new Map<string, number[]>();
    const key = (i: number) => `${pos.getX(i).toFixed(5)},${pos.getY(i).toFixed(5)},${pos.getZ(i).toFixed(5)}`;
    for (let i = 0; i < pos.count; i++) { const k = key(i), a = acc.get(k) ?? [0, 0, 0]; a[0] += nrm.getX(i); a[1] += nrm.getY(i); a[2] += nrm.getZ(i); acc.set(k, a); }
    for (let i = 0; i < pos.count; i++) { const a = acc.get(key(i))!, l = Math.hypot(a[0], a[1], a[2]) || 1; nrm.setXYZ(i, a[0] / l, a[1] / l, a[2] / l); }
    nrm.needsUpdate = true;
  }
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
    // `hard` keeps the mark at full alpha to 0.72 of its radius and drops it over the last quarter:
    // a rust bloom over its COMPLEMENT (teal) blends to a neutral grey along a soft edge, and the
    // turntable gate reads that ring as backdrop -- a real bloom has a granular, not a feathered, edge.
    const blob = (c: number[], x: number, y: number, r: number, a: number, ry = 1, hard = false) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb(c)},${a})`); g.addColorStop(hard ? 0.72 : 0.55, `rgba(${rgb(c)},${hard ? a : a * 0.45})`);
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
      blob(rust, cx, cy, cr, (o.rustAlpha ?? 0.30) + rnd() * (o.rustAlphaVar ?? 0.35), 0.7 + rnd() * 0.6, o.hardEdges === true);
      for (let i = 0; i < (o.specksPerCluster ?? 40); i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.8 + rnd() * 2.4;
        ctx.fillStyle = `rgba(${rgb(o.speckRun ? run : rust)},${(o.speckAlpha ?? 0.25) + rnd() * (o.speckAlphaVar ?? 0.5)})`;   // speckRun: darker specks that texture an opaque bloom
        wrap((dx, dy) => { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); });
      }
      // the run it leaves below itself: rust bleeds DOWN a vertical panel and nowhere else
      if (rnd() < (o.runChance ?? 0.55)) {
        const w = 1 + rnd() * s * 0.010, len = s * (0.10 + rnd() * 0.35);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        const ra = (o.runAlpha ?? 0.16) + rnd() * 0.18;
        g.addColorStop(0, `rgba(${rgb(run)},${ra})`); if (o.hardEdges) g.addColorStop(0.92, `rgba(${rgb(run)},${ra})`); g.addColorStop(1, `rgba(${rgb(run)},0)`);
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
      const x = rnd() * s, w = 1 + rnd() * s * (o.streakWidth ?? 0.014), len = s * (0.25 + rnd() * 0.55);
      const a = (o.streakAlpha ?? 0.10) + rnd() * 0.22;
      const g = ctx.createLinearGradient(0, 0, 0, len);
      g.addColorStop(0, `rgba(${rgb(run)},${a})`); g.addColorStop(o.hardEdges ? 0.92 : 0.25, `rgba(${rgb(rust)},${o.hardEdges ? a : a * 0.8})`);
      g.addColorStop(1, `rgba(${rgb(rust)},0)`);
      ctx.fillStyle = g;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, 0, w, len);
    }
    // 4b. ATLAS marks for a tile mapped ONCE up a prop (cylUV with the tile height = the prop height):
    //     `hbands` paints a tone across a horizontal band of v (a rusted chime, a worn hoop crown),
    //     `bandStreaks` hangs runs from a given v (water sits on a rolling hoop and bleeds down from it,
    //     exactly as it does from the top edge), and `stencil` a painted mark at (u, v). v is up.
    for (const hb of (o.hbands ?? []) as any[]) {
      const y0 = s * (1 - hb.v1), y1 = s * (1 - hb.v0), tone = hb.tone ?? rust;
      ctx.fillStyle = `rgba(${rgb(tone)},${hb.alpha ?? 0.8})`; ctx.fillRect(0, y0, s, y1 - y0);
      for (let i = 0; i < (hb.specks ?? 0); i++) {
        const x = rnd() * s, y = y0 + rnd() * (y1 - y0), r = 0.8 + rnd() * 2.2;
        ctx.fillStyle = `rgba(${rgb(rnd() < 0.5 ? run : base)},${0.2 + rnd() * 0.5})`;
        for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y, r, 0, Math.PI * 2); ctx.fill(); }
      }
    }
    for (const bs of (o.bandStreaks ?? []) as any[]) {
      const y0 = s * (1 - bs.v);
      for (let i = 0; i < (bs.count ?? 12); i++) {
        const x = rnd() * s, w = 1 + rnd() * s * (bs.width ?? 0.012), len = s * ((bs.len ?? 0.12) + rnd() * (bs.lenVar ?? 0.25));
        const a = (bs.alpha ?? 0.14) + rnd() * 0.22;
        const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
        g.addColorStop(0, `rgba(${rgb(run)},${a})`); g.addColorStop(o.hardEdges ? 0.92 : 0.3, `rgba(${rgb(rust)},${o.hardEdges ? a : a * 0.8})`);
        g.addColorStop(1, `rgba(${rgb(rust)},0)`);
        ctx.fillStyle = g;
        for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0 - 2, w, len);
      }
    }
    if (o.stencil) {
      const st = o.stencil, px = s * (st.size ?? 0.06);
      ctx.font = `bold ${px}px sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = `rgba(${rgb(st.tone ?? chalk)},${st.alpha ?? 0.85})`;
      for (const dx of [-s, 0, s]) ctx.fillText(st.text, s * (st.u ?? 0.5) + dx, s * (1 - (st.v ?? 0.5)));
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
    // 1e-4 tolerance: a cap vertex sitting exactly on the atlas boundary (the speed sign's disc at x = -aw/2)
    // failed the test by float error, was pinned, and its three triangles smeared the whole atlas row down
    // the disc's edge (2026-09-03).
    const E = 1e-4;
    const front = nrm.getZ(i) > minNz && x >= a.x0 - E && x <= a.x1 + E && y >= (a.yMin ?? a.y1) - E && y <= a.y0 + E;
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

export function createElephantCrossingSignModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Elephant Crossing Sign';

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
      const g = ribbedDome(d.pts, d.ribs, d.amp, d.seg ?? 24, d.valley, d.smooth === true);
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
  const root = createElephantCrossingSignModel(options);
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
