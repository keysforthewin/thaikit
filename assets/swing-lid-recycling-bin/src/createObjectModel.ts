import * as THREE from 'three';

/**
 * Swing-Lid Recycling Bin -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 0.5 x 0.6 x 0.5 m, origin base-center, +Y up, +Z front (the sticker face), lugs on +/-X.
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
    "id": "swing-lid-recycling-bin",
    "name": "Swing-Lid Recycling Bin",
    "exportName": "SwingLidRecyclingBin",
    "envelope": "Envelope 0.5 x 0.6 x 0.5 m, origin base-center, +Y up, +Z front (the sticker face), lugs on +/-X.\n * Budget (medium): <=2000 triangles, <=2 draw calls, <=2 materials, <=4 unique geometries.",
    "materials": [
      {
        "id": "plastic",
        "color": 16777215,
        "roughness": 0.55,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "sticker",
        "color": 16777215,
        "roughness": 0.65,
        "metalness": 0
      }
    ],
    "tiles": [
      {
        "material": "plastic",
        "kind": "grime",
        "size": 256,
        "seed": 201,
        "wash": [
          0.6,
          0.58,
          0.55
        ],
        "washAlpha": 0.3,
        "coverage": 0.25,
        "streaks": 10,
        "blotches": 22
      },
      {
        "material": "sticker",
        "kind": "baked",
        "uri": "data:image/webp;base64,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"
      }
    ],
    "geometry": {
      "components": [
        {
          "id": "body",
          "name": "Tapered body, lugs and domed lid",
          "material": "plastic",
          "uv": "height",
          "uvScale": 0.32,
          "collider": {
            "shape": "cylinder",
            "localCenter": [
              0,
              0.3,
              0
            ],
            "radius": 0.25,
            "height": 0.6,
            "axis": [
              0,
              1,
              0
            ],
            "notes": "Declared on the asset as cylinder: one proxy over body, lugs and lid."
          },
          "lathes": [
            {
              "pts": [
                [
                  0,
                  0.01
                ],
                [
                  0.15,
                  0.01
                ],
                [
                  0.18,
                  0
                ],
                [
                  0.1875,
                  0.025
                ],
                [
                  0.19344642857142857,
                  0.16
                ],
                [
                  0.19961309523809523,
                  0.3
                ],
                [
                  0.206,
                  0.445
                ],
                [
                  0.196,
                  0.45
                ],
                [
                  0,
                  0.45
                ]
              ],
              "seg": 28,
              "at": [
                0,
                0,
                0
              ],
              "hex": 10072010
            },
            {
              "pts": [
                [
                  0,
                  0.455
                ],
                [
                  0.2,
                  0.455
                ],
                [
                  0.2125,
                  0.46
                ],
                [
                  0.2125,
                  0.49
                ],
                [
                  0.208,
                  0.5
                ],
                [
                  0.194,
                  0.51
                ],
                [
                  0.181,
                  0.525
                ],
                [
                  0.16,
                  0.545
                ],
                [
                  0.135,
                  0.56
                ],
                [
                  0.105,
                  0.575
                ],
                [
                  0.08,
                  0.585
                ],
                [
                  0.06,
                  0.588
                ],
                [
                  0,
                  0.588
                ]
              ],
              "seg": 28,
              "at": [
                0,
                0,
                0
              ],
              "hex": 3569320
            }
          ],
          "boxes": [
            [
              10072010,
              0.222,
              0.355,
              0,
              0.05,
              0.09,
              0.07
            ],
            [
              10072010,
              -0.222,
              0.355,
              0,
              0.05,
              0.09,
              0.07
            ],
            [
              3037824,
              0.2478,
              0.355,
              0,
              0.0016,
              0.045,
              0.04
            ],
            [
              3037824,
              -0.2478,
              0.355,
              0,
              0.0016,
              0.045,
              0.04
            ],
            [
              3569320,
              0,
              0.594,
              0,
              0.13,
              0.024,
              0.05
            ],
            [
              3037824,
              0,
              0.59,
              0.0258,
              0.09,
              0.01,
              0.0016
            ]
          ]
        },
        {
          "id": "sticker",
          "name": "Recycling sticker",
          "material": "sticker",
          "parent": "body",
          "cyls": [
            {
              "at": [
                0,
                0.215,
                0
              ],
              "rt": 0.20217261904761905,
              "rb": 0.19556547619047618,
              "h": 0.15,
              "seg": 8,
              "open": true,
              "th0": -0.42,
              "thLen": 0.84,
              "hex": 16777215
            }
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

function lathe(pts: number[][], seg: number, yOffset = 0, sharp = true): THREE.BufferGeometry {
  const v = (sharp ? splitCorners(pts) : pts).map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
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
function spokes(rHub: number, rRim: number, halfW: number, n: number, hex: number, t = 0.006): THREE.BufferGeometry {
  const segs: THREE.BufferGeometry[] = [];
  for (let i = 0; i < n; i++) {
    const a = i * Math.PI * 2 / n;
    const side = (i % 2 === 0 ? 1 : -1) * halfW * 0.35;
    const len = rRim - rHub;
    const g = new THREE.BoxGeometry(t, len, t);
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
function tube(pts: number[][], r: number, seg = 8, hex?: number): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const d = b.clone().sub(a); const len = d.length();
    if (len < 1e-6) continue;
    const g = new THREE.CylinderGeometry(r, r, len + r * 1.2, seg, 1, false);
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
 * (b) vertical rain streaks from the top, (c) soft dark blotches, (d) optional green moss/algae
 * blobs concentrated in the bottom band, and (e) fine grain. Every colour is a fraction of the
 * material's measured albedo, and the darkest core is clamped so nothing on a white or cream
 * surface drops toward the hole gate's luma 58.
 */
function grimeTile(size: number, seed: number, o: any): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v: number[]) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const wash = o.wash ?? [0.62, 0.62, 0.58], washA = o.washAlpha ?? 0.7, cov = o.coverage ?? 0.3;
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = 'multiply';
    // rain streaks from the top
    for (let i = 0; i < (o.streaks ?? 26); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.012, len = s * (0.15 + rnd() * 0.6), a = 0.05 + rnd() * 0.12;
      const g2 = ctx.createLinearGradient(0, 0, 0, len);
      g2.addColorStop(0, `rgba(${rgb(wash)},${a})`); g2.addColorStop(1, `rgba(${rgb(wash)},0)`);
      ctx.fillStyle = g2; ctx.fillRect(x, 0, w, len); ctx.fillRect(x - s, 0, w, len);
    }
    // ground wash
    const grad = ctx.createLinearGradient(0, s, 0, s * (1 - cov));
    grad.addColorStop(0, `rgba(${rgb(wash)},${washA})`); grad.addColorStop(0.5, `rgba(${rgb(wash)},${washA * 0.45})`); grad.addColorStop(1, `rgba(${rgb(wash)},0)`);
    ctx.fillStyle = grad; ctx.fillRect(0, 0, s, s);
    // blotches
    for (let i = 0; i < (o.blotches ?? 40); i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 1.6) * s, r = 3 + rnd() * s * 0.06, a = 0.08 + rnd() * 0.3;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb(wash)},${a})`); g2.addColorStop(1, `rgba(${rgb(wash)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y, r, 0, Math.PI * 2); ctx.fill(); }
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
    // grain
    for (let i = 0; i < 1500; i++) {
      const x = rnd() * s, y = rnd() * s, v = 200 + Math.round(rnd() * 55);
      ctx.fillStyle = `rgba(${v},${v},${v},0.12)`; ctx.fillRect(x, y, 1.5, 1.5);
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
function stripeTile(size: number, bands: number, a: number[], b: number[], seed: number): THREE.CanvasTexture | null {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v: number[]) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    const w = s / bands;
    for (let i = 0; i < bands; i++) { ctx.fillStyle = rgb(i % 2 ? b : a); ctx.fillRect(Math.floor(i * w), 0, Math.ceil(w) + 1, s); }
    ctx.globalCompositeOperation = 'multiply';
    for (let i = 0; i < 40; i++) {
      const x = rnd() * s, y = rnd() * s, r = 4 + rnd() * s * 0.08, al = 0.06 + rnd() * 0.18;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(150,140,125,${al})`); g2.addColorStop(1, 'rgba(150,140,125,0)');
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) { ctx.beginPath(); ctx.arc(x + dx, y, r, 0, Math.PI * 2); ctx.fill(); }
    }
    for (let i = 0; i < 1200; i++) { const v = 200 + Math.round(rnd() * 55); ctx.fillStyle = `rgba(${v},${v},${v},0.10)`; ctx.fillRect(rnd() * s, rnd() * s, 1.5, 1.5); }
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
      ctx.fillStyle = rgb(c.map((v) => Math.min(1, v * k)));
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) { ctx.beginPath(); ctx.ellipse(x + dx, y + dy, rx, ry, a, 0, Math.PI * 2); ctx.fill(); }
      // a highlight crescent on the lit side so each stone reads as a bump
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
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
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, s, s);
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

export function createSwingLidRecyclingBinModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Swing-Lid Recycling Bin';

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
    for (const cy of (c.cyls ?? []) as any[]) {
      // `th0`/`thLen` make a PARTIAL cylinder (a curved sticker patch wrapped on a round body) and
      // `open` drops the caps; the side UVs then run 0..1 across the arc and up the height, which is
      // what a baked graphic wants. `uvRep` multiplies them for a repeating tile.
      const g = new THREE.CylinderGeometry(cy.rt, cy.rb, cy.h, cy.seg ?? 12, 1, cy.open ?? false, cy.th0 ?? 0, cy.thLen ?? Math.PI * 2);
      if (cy.uvRep) { const uv = g.getAttribute('uv'); for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * cy.uvRep[0], uv.getY(i) * cy.uvRep[1]); }
      if (cy.rx) g.rotateX(cy.rx); if (cy.ry) g.rotateY(cy.ry); if (cy.rz) g.rotateZ(cy.rz);
      g.translate(cy.at[0], cy.at[1], cy.at[2]); gs.push(tintGeo(g, cy.hex));
    }
    for (const l of (c.lathes ?? []) as any[]) {
      // `ry` yaws the revolution: a 4-segment lathe turned 45 degrees is a chamfered SQUARE slab in one
      // geometry (a cone's rubber base), where two stacked boxes would cost two and a coplanar pair.
      // `cylUV` (a tile size in metres) writes a seamless around-by-up UV from the lathe's own segment
      // index -- atan2 would fold a whole tile into the seam column -- for tread, fluting and grain.
      const g = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false);
      if (l.cylUV) { const cu = Array.isArray(l.cylUV) ? l.cylUV : [l.cylUV, l.cylUV, 0]; latheUV(g, (g.getAttribute('position').count / ((l.seg ?? 12) + 1)) | 0, l.seg ?? 12, cu[0], cu[1], cu[2] ?? 0); }
      if (l.ry) g.rotateY(l.ry); g.translate(l.at[0], l.at[1], l.at[2]); gs.push(tintGeo(g, l.hex));
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
    // ORGANIC station tubes: [z, cx, cy, rx, ry] stations swept along Z -- the only soft form in the
    // kit, a lying animal. Lit smooth by the helper's shared ring vertices.
    for (const t of (c.tubesAlong ?? []) as any[]) {
      const g = tubeAlong(t.stations, t.seg ?? 12);
      if (t.ry) g.rotateY(t.ry); if (t.at) g.translate(t.at[0], t.at[1], t.at[2]);
      gs.push(tintGeo(g, t.hex ?? 0xffffff));
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
      const g = new THREE.CylinderGeometry(cy.rt, cy.rb, cy.h, cy.seg ?? 12);
      if (cy.rx) g.rotateX(cy.rx); if (cy.rz) g.rotateZ(cy.rz);
      g.translate(cy.at[0], cy.at[1], cy.at[2]); gs.push(tintGeo(g, cy.hex));
    }
    let g = mergeGeos(gs);
    if (r.uv === 'world') g = worldUV(g, r.uvScale ?? 1);
    if (r.uv === 'height') g = heightUV(g, r.uvScale ?? 1);
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
    if (t.kind === 'corrugation') tex = corrugationTile(t.size ?? 512, t.pitch ?? 12, t.low ?? 0.7, t.seed ?? 3);
    if (t.kind === 'grime') tex = grimeTile(t.size ?? 512, t.seed ?? 11, t);
    if (t.kind === 'fur') tex = furTile(t.size ?? 512, t.seed ?? 13, t);
    if (t.kind === 'chainlink') tex = chainlinkTile(t.size ?? 256, t.wire ?? 0.09, t.seed ?? 4);
    if (t.kind === 'bamboo') tex = bambooTile(t.size ?? 512, t.strips ?? 10, t.seed ?? 6);
    if (t.kind === 'stripes') tex = stripeTile(t.size ?? 256, t.bands ?? 8, t.a, t.b, t.seed ?? 9);
    if (t.kind === 'poster') tex = posterTile(t.size ?? 512, t.seed ?? 8, t.lines ?? []);
    if (t.kind === 'pebble') tex = pebbleTile(t.size ?? 512, t.seed ?? 21, t);
    if (t.kind === 'tread') tex = treadTile(t.size ?? 256, t.seed ?? 23, t);
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
  const root = createSwingLidRecyclingBinModel(options);
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
