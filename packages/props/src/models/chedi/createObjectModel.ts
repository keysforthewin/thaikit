import * as THREE from 'three';

/**
 * Chedi -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 7.00 x 14.00 x 7.00 m, origin base-center, +Y up.
 * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=32 unique geometries.
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
    "id": "chedi",
    "name": "Chedi",
    "exportName": "Chedi",
    "envelope": "Envelope 7.00 x 14.00 x 7.00 m, origin base-center, +Y up.\n * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=32 unique geometries.",
    "materials": [
      {
        "id": "stone",
        "color": 12368563,
        "roughness": 0.94,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "stucco",
        "color": 13684937,
        "roughness": 0.88,
        "metalness": 0
      },
      {
        "id": "shadow",
        "color": 9077880,
        "roughness": 0.95,
        "metalness": 0
      },
      {
        "id": "gold",
        "color": 11046485,
        "roughness": 0.42,
        "metalness": 0.3,
        "envMapIntensity": 1.2
      }
    ],
    "geometry": {
      "terrace": [
        [
          0,
          0.55,
          3.5,
          0.22
        ],
        [
          0.55,
          0.8,
          3.42,
          0.26
        ],
        [
          0.8,
          1.02,
          3.32,
          0.3
        ],
        [
          1.02,
          1.22,
          3.2,
          0.34
        ],
        [
          1.22,
          2.75,
          3,
          0.37
        ],
        [
          2.75,
          2.95,
          3.12,
          0.36
        ],
        [
          2.95,
          3.12,
          3.22,
          0.35
        ],
        [
          3.12,
          3.3,
          2.77,
          0.25
        ]
      ],
      "plinth": {
        "r": 2.63,
        "y0": 3.2,
        "y1": 3.46,
        "lip": 2.52,
        "yTop": 3.56,
        "seg": 40
      },
      "niche": {
        "faceR": 3,
        "y0": 0.8,
        "w": 1.5,
        "archR": 0.75,
        "spring": 1.17,
        "depth": 0.45,
        "sink": 0.02,
        "hole": {
          "r": 0.42,
          "spring": 1.27,
          "sill": 0.5
        }
      },
      "bell": {
        "seg": 40,
        "foot": [
          [
            2.5,
            3.45
          ],
          [
            2.58,
            3.52
          ],
          [
            2.58,
            3.76
          ],
          [
            2.48,
            3.82
          ],
          [
            2.3,
            3.86
          ],
          [
            2.28,
            3.98
          ],
          [
            2.36,
            4.06
          ]
        ],
        "body": [
          [
            2.36,
            4.15
          ],
          [
            2.31,
            4.4
          ],
          [
            2.16,
            4.65
          ],
          [
            2.07,
            4.9
          ],
          [
            2.03,
            5.15
          ],
          [
            2.01,
            5.4
          ],
          [
            1.99,
            5.65
          ],
          [
            1.97,
            5.9
          ],
          [
            1.95,
            6.15
          ],
          [
            1.9,
            6.4
          ]
        ],
        "dome": [
          [
            1.9,
            6.4
          ],
          [
            1.84,
            6.65
          ],
          [
            1.75,
            6.9
          ],
          [
            1.58,
            7.15
          ],
          [
            1.28,
            7.4
          ],
          [
            0.93,
            7.62
          ],
          [
            0.71,
            7.87
          ],
          [
            0.6,
            8.05
          ]
        ],
        "domeSteps": 26,
        "neck": {
          "r": 0.55,
          "yTop": 8.25
        }
      },
      "harmika": [
        [
          0,
          7.95,
          0,
          1.46,
          1,
          1.46
        ],
        [
          0,
          8.51,
          0,
          1.62,
          0.12,
          1.62
        ],
        [
          0,
          8.65,
          0,
          1.84,
          0.16,
          1.84
        ],
        [
          0,
          8.83,
          0,
          1.68,
          0.2,
          1.68
        ]
      ],
      "spire": {
        "y0": 8.85,
        "y1": 12.3,
        "r0": 0.62,
        "r1": 0.2,
        "rings": 16,
        "bulge": 0.06,
        "seg": 24
      },
      "finial": {
        "y0": 12.28,
        "y1": 14,
        "seg": 20
      },
      "wear": {
        "size": 512,
        "bump": 0.03,
        "stuccoTile": 3,
        "stoneTile": 3.3,
        "joints": [
          0.55,
          0.8,
          1.02,
          1.22,
          2.75,
          2.95,
          3.12
        ],
        "peel": [
          0.79,
          0.79,
          0.78
        ],
        "core": [
          0.7,
          0.7,
          0.69
        ],
        "rim": [
          0.66,
          0.66,
          0.64
        ],
        "crack": [
          0.62,
          0.62,
          0.6
        ],
        "drip": [
          0.74,
          0.75,
          0.75
        ],
        "mottle": [
          0.91,
          0.91,
          0.89
        ],
        "moss": [
          0.64,
          0.68,
          0.5
        ],
        "soil": [
          0.84,
          0.84,
          0.81
        ]
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

export function createChediModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Chedi';

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


  /** Re-map a lathe's UVs to a metre-scaled tile: u keeps LatheGeometry's own seamless 0..1
   *  sweep (scaled to a whole number of repeats at the reference radius, so the seam column lands
   *  on a tile edge), v is world height over the tile size. */
  function latheUv(geo: THREE.BufferGeometry, tile: number, rRef: number): void {
    const p = geo.getAttribute('position'), uv = geo.getAttribute('uv');
    const rep = Math.max(1, Math.round(2 * Math.PI * rRef / tile));
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) { out[i * 2] = uv.getX(i) * rep; out[i * 2 + 1] = p.getY(i) / tile; }
    geo.setAttribute('uv', new THREE.BufferAttribute(out, 2));
  }
  /** Box-project UVs by each vertex's dominant normal axis, in metres over the tile size. Every
   *  geometry this is used on is non-indexed with per-face normals, so a face never straddles
   *  two projections. */
  function boxUv(geo: THREE.BufferGeometry, tile: number): void {
    const p = geo.getAttribute('position'), n = geo.getAttribute('normal');
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
      let u: number, v: number;
      // Opposite and adjacent faces take different u offsets, so a box's four sides do not
      // all show the same flake at the same height (the harmika did, mirrored, on the first
      // emit). Only u is shifted: v stays world height, which is what the stone tile's joint
      // bands key on.
      if (ay >= ax && ay >= az) { u = p.getX(i); v = p.getZ(i); }
      else if (ax >= az) { u = p.getZ(i) + (n.getX(i) < 0 ? 0.5 : 0.25) * tile; v = p.getY(i); }
      else { u = p.getX(i) + (n.getZ(i) < 0 ? 0.5 : 0) * tile; v = p.getY(i); }
      out[i * 2] = u / tile; out[i * 2 + 1] = v / tile;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(out, 2));
  }
  /** Multiply the existing colour attribute on every UP-facing vertex. The plate's ledge tops
   *  read 172 against 191 on the lit pier faces, and the harness lights tops at 1.18x against
   *  1.00x for a key-lit side, so the tops need 0.76 to land where the plate has them. A tint by
   *  facing is legitimate here because it is <= 1 relative to what the tile carries. */
  function tintTops(geo: THREE.BufferGeometry, rgb: number[]): void {
    const n = geo.getAttribute('normal'), c = geo.getAttribute('color');
    for (let i = 0; i < n.count; i++) {
      if (n.getY(i) > 0.7) for (let k = 0; k < 3; k++) c.setComponent(i, k, c.getComponent(i, k) * rgb[k]);
    }
    c.needsUpdate = true;
  }
  /** A square plan whose corners are cut back in THREE right-angled steps. The plate's corner
   *  piers step three times; the preamble's redentedShape steps twice. Half-width a across the
   *  flats, r the depth of each step; the flat face spans +-(a - 3r). */
  function redented3(a: number, r: number): THREE.Shape {
    const q = [[a, a - 3 * r], [a - r, a - 3 * r], [a - r, a - 2 * r], [a - 2 * r, a - 2 * r],
               [a - 2 * r, a - r], [a - 3 * r, a - r], [a - 3 * r, a]];
    const pts: number[][] = [];
    for (let k = 0; k < 4; k++) {
      for (const [x, z] of q) {
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

  /* ---------------------------------------------------------------- stepped terrace
   * Eight redented slabs and the round plinth under the bell, MERGED into one component and one
   * draw call. Each slab is a single extrusion of a closed redented plan rather than a wide box
   * crossed by a deep one: crossed boxes put their top faces in the same plane facing the same
   * way over the whole intersection, and that z-fights. Consecutive slabs meet as OPPOSED faces.
   * The plinth is a lathe whose open rim runs up INSIDE the bell's stucco foot band. */
  {
    const P = G.plinth;
    const slabs = (G.terrace as number[][]).map(([y0, y1, a, r]) => {
      const g = extrudeSlab(redented3(a, r), y0, y1);
      boxUv(g, G.wear.stoneTile);
      return g;
    });
    const ring = lathe([[P.r, P.y0], [P.r, P.y1], [P.lip, P.y1 + 0.02], [P.lip, P.yTop]], P.seg);
    latheUv(ring, G.wear.stoneTile, P.r);
    const geo = mergeGeos([...slabs, ring]);
    // Ground dirt on the lowest slab as a per-vertex tint. The plate's plinth foot reads only
    // slightly darker than the pier above it (the moss is in the joints, not on the face), so the
    // tint is a mild 0.92 at y=0 fading out by 1.20.
    tintByHeight(geo, 0, 1.20, [0.92, 0.92, 0.90]);
    tintTops(geo, [0.76, 0.76, 0.73]);
    add('terrace', 'Stepped terrace', geo, 'stone');
  }
  colliders['terrace'] = {
    shape: 'cylinder', localCenter: [0, 7.0, 0], radius: 3.5, height: 14.0, axis: [0, 1, 0],
    notes: 'Asset declares collider "cylinder" rather than the building-part default box, because '
         + 'the bell and spire are round in plan and a box proxy would leave a player colliding '
         + 'with empty air at the corners.',
  };

  /* ---------------------------------------------------------------- arched aedicules
   * Four, one per face, as an InstancedMesh: one geometry and one submission for the set.
   *
   * The frame is a ROUND-HEADED plate -- the plate's aedicule is a horseshoe hoop, not a square
   * block with an arch cut in it -- carrying a real arched aperture, extruded 0.62 m and standing
   * 0.60 m proud of the niche storey with its back sunk 2 cm into the wall. It runs down to the
   * second plinth step at 0.80, so under the sill it is a pedestal rather than a frame hanging
   * over the steps. The dark back panel sits 0.52 m behind the front plane, just proud of the
   * wall, and shows only through the aperture. */
  {
    const n = G.niche;
    const h = n.hole;
    const shape = archedPlate(n.w, n.spring + n.archR, n.archR, n.spring,
                              { r: h.r, spring: h.spring, sill: h.sill });
    const frame = new THREE.ExtrudeGeometry(shape, { depth: n.depth, bevelEnabled: false, curveSegments: 10 });
    frame.computeVertexNormals();
    boxUv(frame, G.wear.stoneTile);
    addInst('niche-frames', 'Arched niche frames', frame, 'stone', quad(n.faceR - n.sink, n.y0));

    // Centred on the aperture and 0.10 m past it each way, so it stays INSIDE the frame's solid
    // (local 0..1.92) and never shows a sliver above the arch head under the cornice.
    const panel = boxAt(0, (h.sill + h.spring + h.r) / 2, 0.05, 2 * h.r + 0.26, h.spring + h.r - h.sill + 0.20, 0.06);
    addInst('niche-panels', 'Niche back panels', panel, 'shadow', quad(n.faceR + 0.01, n.y0));
  }

  /* ---------------------------------------------------------------- bell dome
   * One lathe: the stucco foot band, the near-vertical body, the dome and the neck that runs up
   * inside the harmika. The open bottom rim (r 2.50 at 3.45) is inside the stone plinth (r 2.63
   * to 3.46), and the open top rim is inside the cube: no open rim is ever visible.
   *
   * The dome is the proxy's, not a chosen curve. The second build's quarter-ellipse to a flat
   * 1.30 m crown was a hemisphere with a crate on it; the proxy's falloff (1.58 at 7.13, 1.28 at
   * 7.38, 0.93 at 7.62, 0.71 at 7.87) is a domed bell, and with a 1.46 m cube seated INTO it the
   * junction is the plate's -- the dome visibly wrapping up around the cube's foot. */
  {
    const b = G.bell;
    const pts: number[][] = [...(b.foot as number[][]), ...(b.body as number[][])];
    const curve = new THREE.CatmullRomCurve3(
      (b.dome as number[][]).map((p) => new THREE.Vector3(p[0], p[1], 0)), false, 'catmullrom', 0.5);
    const dome = curve.getPoints(b.domeSteps);
    for (let i = 1; i < dome.length; i++) pts.push([dome[i].x, dome[i].y]);
    pts.push([b.neck.r, dome[dome.length - 1].y + 0.05]);
    pts.push([b.neck.r, b.neck.yTop]);
    const geo = lathe(pts, b.seg);
    latheUv(geo, G.wear.stuccoTile, 2.1);
    add('bell-dome', 'Bell dome', geo, 'stucco');
  }

  /* ---------------------------------------------------------------- harmika
   * The square block between the bell and the spire: a cube seated into the dome, a fillet, a
   * cornice stepping out, and a top slab that CAPS the spire lathe's open base. Four merged
   * boxes, consecutive ones meeting as opposed faces. */
  {
    const geo = boxes(G.harmika as number[][]);
    boxUv(geo, G.wear.stuccoTile);
    add('harmika', 'Harmika block', geo, 'stucco');
  }

  /* ---------------------------------------------------------------- ringed spire
   * Sixteen rings as ONE lathe profile, not sixteen meshes. At 24 radial segments that is ~2,400
   * triangles in a single geometry and a single draw call. */
  {
    const s = G.spire;
    const pts = ringedTaper(s.y0, s.y1, s.r0, s.r1, s.rings, s.bulge);
    pts.push([0, s.y1]);   // close the top on the axis; an open rim reads as a hole in silhouette
    const geo = lathe(pts, s.seg);
    latheUv(geo, G.wear.stuccoTile, 0.5);
    add('spire', 'Ringed spire', geo, 'stucco');
  }

  /* ---------------------------------------------------------------- gilded finial
   * Closed on the axis at BOTH ends, its 0.19 m flare inside the spire's 0.20 m cap. The one gold
   * surface on the prop and the top 1.72 m of the declared 14 m. Proxy: 0.17 at 12.63, 0.12 at
   * 13.13, 0.08 at 13.62. */
  {
    const f = G.finial;
    add('finial', 'Gilded finial', lathe([
      [0, f.y0], [0.19, f.y0 + 0.05], [0.19, f.y0 + 0.24], [0.165, f.y0 + 0.50],
      [0.125, f.y0 + 0.90], [0.08, f.y0 + 1.30], [0.045, f.y0 + 1.45],
      // The bud at the tip: a teardrop with a small bulb, the plate's finial and not a plain cone.
      [0.075, f.y0 + 1.53], [0.05, f.y0 + 1.63], [0, f.y1],
    ], f.seg), 'gold');
  }

  /* ---------------------------------------------------------------- weathering
   * The plate's whitewash is CRAZED -- a connected network of cells a few centimetres across
   * over the whole bell -- with flat grey patches where it has come away and dark streaks down
   * the body; the terrace is grey stone with moss in every horizontal joint. Delivered as two
   * Canvas 2D tiles assigned AFTER material construction: the sculpt materials stay textureless
   * (no five-canvas set, the measured albedo is not thrown away), and the whole of it is a few
   * hundred path fills at 512 px. Bound as map AND bumpMap.
   *
   * What changed from the second build, and why: the crazing was 640 short random walks and read
   * as scratches -- it is now a jittered-grid NETWORK, because the plate's cracks enclose cells;
   * the flakes were layered halo/core blobs that rendered as polka dots and are now flat unions
   * with a one-pixel rim; the mottle is BLURRED (hard blotches read as camouflage on the Khmer
   * sanctuary); and the stone tile is the terrace's exact height so its moss bands land on the
   * real joints -- the one thing a wrapping tile can otherwise never do.
   *
   * Under Node -- the band comparison and check-coplanar both run this factory without a DOM --
   * there is no canvas, and the materials simply keep their flat measured colour. */
  {
    const W = G.wear;
    const hasDom = typeof document !== 'undefined' && typeof (document as any).createElement === 'function';
    const size = Math.min(W.size, options.textureSize ?? W.size);
    const css = (t: number[], a: number) =>
      'rgba(' + Math.round(t[0] * 255) + ',' + Math.round(t[1] * 255) + ',' + Math.round(t[2] * 255) + ',' + a + ')';
    const rng = (seed: number) => () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

    function wearTile(kind: 'stucco' | 'stone', seed: number): HTMLCanvasElement | null {
      if (!hasDom) return null;
      const cv = document.createElement('canvas');
      cv.width = cv.height = size;
      const ctx = cv.getContext('2d', { willReadFrequently: true } as any);
      if (!ctx) return null;
      const r = rng(seed);
      const S = size;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, S, S);
      const wrapped = (fn: () => void) => {
        for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
          ctx.save(); ctx.translate(ox * S, oy * S); fn(); ctx.restore();
        }
      };
      // Soft cloudy drift: big discs under a blur, so a flat area is not flat and nothing has an
      // edge. Blur is applied per draw in Chrome, so the filter is set inside the wrapped fill.
      const cloud = (tone: number[], count: number, rad: number, alpha: number, blur: number) => {
        for (let i = 0; i < count; i++) {
          const x = r() * S, y = r() * S, R = rad * S * (0.5 + r()), a = alpha * (0.5 + 0.5 * r());
          wrapped(() => {
            ctx.filter = 'blur(' + blur + 'px)';
            ctx.fillStyle = css(tone, a);
            ctx.beginPath(); ctx.ellipse(x, y, R, R * (0.5 + 0.5 * r()), r() * Math.PI, 0, Math.PI * 2); ctx.fill();
            ctx.filter = 'none';
          });
        }
      };
      // A flake: a JAGGED POLYGON -- render comes away along the crack lines, so a flake's edge
      // is straight-sided and angular, not lobed. Twelve to twenty vertices at irregular radii
      // about a centre, elongated on a random axis, filled flat with a one-pixel darker rim so
      // it reads as a step in the surface. Disc unions (the second build, and the first emit of
      // this one) read as clouds; layered halo/core discs read as polka dots.
      const flake = (tone: number[], count: number, rad: number, alpha: number, rim?: number[]) => {
        for (let i = 0; i < count; i++) {
          const p = new Path2D();
          const cx = r() * S, cy = r() * S, R = rad * S * (0.6 + 0.8 * r());
          const n = 12 + Math.floor(r() * 9), rot = r() * Math.PI, e = 0.45 + 0.5 * r();
          for (let k = 0; k < n; k++) {
            const th = (k / n) * Math.PI * 2 + (r() - 0.5) * 0.3;
            const rr = R * (0.45 + 0.75 * r());
            const lx = Math.cos(th) * rr, ly = Math.sin(th) * rr * e;
            const x = cx + lx * Math.cos(rot) - ly * Math.sin(rot), y = cy + lx * Math.sin(rot) + ly * Math.cos(rot);
            if (k === 0) p.moveTo(x, y); else p.lineTo(x, y);
          }
          p.closePath();
          const al = alpha * (0.75 + 0.25 * r());
          wrapped(() => {
            ctx.fillStyle = css(tone, al); ctx.fill(p);
            if (rim) { ctx.strokeStyle = css(rim, al * 0.7); ctx.lineWidth = 1.2; ctx.stroke(p); }
          });
        }
      };
      // Crazing as a NETWORK: a jittered grid of nodes joined to their right and lower
      // neighbours by slightly bent lines, with a share of the edges dropped so cells open into
      // one another. The plate's cracks enclose polygonal cells 5-10 cm across; at 512 px over a
      // 3 m tile one pixel is 6 mm, so a 34-cell grid is 9 cm cells.
      const network = (tone: number[], cells: number, alpha: number, width: number, drop: number) => {
        const step = S / cells;
        const nodes: number[][] = [];
        for (let j = 0; j <= cells; j++) for (let i = 0; i <= cells; i++) {
          // Wrapped: the last row/column reuses the first, so the network is seamless.
          const ii = i % cells, jj = j % cells;
          const idx = jj * cells + ii;
          if (!nodes[idx]) nodes[idx] = [(ii + 0.5 + (r() - 0.5) * 0.7) * step, (jj + 0.5 + (r() - 0.5) * 0.7) * step];
        }
        const at = (i: number, j: number) => {
          const n = nodes[(j % cells) * cells + (i % cells)];
          return [n[0] + Math.floor(i / cells) * S, n[1] + Math.floor(j / cells) * S];
        };
        const p = new Path2D();
        for (let j = 0; j < cells; j++) for (let i = 0; i < cells; i++) {
          const a = at(i, j);
          for (const b of [at(i + 1, j), at(i, j + 1)]) {
            if (r() < drop) continue;
            const mx = (a[0] + b[0]) / 2 + (r() - 0.5) * step * 0.5, my = (a[1] + b[1]) / 2 + (r() - 0.5) * step * 0.5;
            p.moveTo(a[0], a[1]); p.quadraticCurveTo(mx, my, b[0], b[1]);
          }
        }
        wrapped(() => { ctx.strokeStyle = css(tone, alpha); ctx.lineWidth = width; ctx.lineCap = 'round'; ctx.stroke(p); });
      };
      // Drips: vertical streaks fading downward. v is world height on every mapping used here,
      // so "down the canvas" is down the prop (the texture is flipY, so canvas +y is world -y).
      const drips = (tone: number[], count: number, alpha: number, lenMax: number) => {
        for (let i = 0; i < count; i++) {
          const x = r() * S, y0 = r() * S, len = S * (0.06 + lenMax * r()), w = 1 + 2.5 * r();
          const a = alpha * (0.5 + 0.5 * r());
          wrapped(() => {
            const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
            g.addColorStop(0, css(tone, a)); g.addColorStop(1, css(tone, 0));
            ctx.fillStyle = g; ctx.fillRect(x - w / 2, y0, w, len);
          });
        }
      };
      // Drips in CLUSTERS: the plate's streaks run in groups of six to ten from one wet spot,
      // 3-8 px (2-5 cm) wide, not single hairlines scattered evenly.
      const dripClusters = (tone: number[], clusters: number, per: number, alpha: number) => {
        for (let c = 0; c < clusters; c++) {
          const cx = r() * S, cy = r() * S;
          for (let i = 0; i < per; i++) {
            const x = cx + (r() - 0.5) * 70, y0 = cy + (r() - 0.5) * 30, len = S * (0.15 + 0.32 * r()), w = 1.5 + 2.5 * r();
            const a = alpha * (0.5 + 0.5 * r());
            wrapped(() => {
              const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
              g.addColorStop(0, css(tone, a)); g.addColorStop(1, css(tone, 0));
              ctx.fillStyle = g; ctx.fillRect(x - w / 2, y0, w, len);
            });
          }
        }
      };
      // Zones for a denser crazing pass: a few ellipses (drawn at the nine wrapped offsets with
      // ONE rotation each, so the clip is seamless) that the finer network is clipped to. The
      // plate's crazing has hierarchy -- fine dense cells in patches over a coarser open net.
      const zones = (count: number, rad: number): Path2D => {
        const p = new Path2D();
        for (let i = 0; i < count; i++) {
          const x = r() * S, y = r() * S, R = rad * S * (0.6 + 0.8 * r()), rot = r() * Math.PI, e = 0.55 + 0.4 * r();
          for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
            p.moveTo(x + ox * S + R, y + oy * S);
            p.ellipse(x + ox * S, y + oy * S, R, R * e, rot, 0, Math.PI * 2);
          }
        }
        return p;
      };
      // Wide soft washes: the plate's grey vertical staining under the shoulder, blurred.
      const washes = (tone: number[], count: number, alpha: number) => {
        for (let i = 0; i < count; i++) {
          const x = r() * S, y0 = r() * S, len = S * (0.2 + 0.4 * r()), w = 6 + 18 * r();
          const a = alpha * (0.5 + 0.5 * r());
          wrapped(() => {
            ctx.filter = 'blur(4px)';
            const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
            g.addColorStop(0, css(tone, a)); g.addColorStop(1, css(tone, 0));
            ctx.fillStyle = g; ctx.fillRect(x - w / 2, y0, w, len);
            ctx.filter = 'none';
          });
        }
      };
      // Fine grain: a scatter of near-transparent specks.
      const grain = (tone: number[], count: number, alpha: number) => {
        const p = new Path2D();
        for (let i = 0; i < count; i++) { const x = r() * S, y = r() * S, d = 0.6 + r() * 1.4; p.rect(x, y, d, d); }
        wrapped(() => { ctx.fillStyle = css(tone, alpha); ctx.fill(p); });
      };
      // Moss in a horizontal JOINT: speck clusters strung along a row just under the joint line,
      // with gaps, and a soft soil line on the joint itself. Rows are world heights: the tile is
      // exactly the terrace's height and flipY puts world y at canvas row (1 - y / tile) * S.
      const jointMoss = (yWorld: number, tile: number) => {
        const row = (1 - yWorld / tile) * S;
        wrapped(() => {
          ctx.filter = 'blur(2px)';
          ctx.fillStyle = css(W.soil, 0.7);
          ctx.fillRect(0, row - 1, S, 6);
          ctx.filter = 'none';
        });
        const p = new Path2D();
        let x = r() * 20;
        while (x < S) {
          if (r() > 0.35) {
            const n = 10 + Math.floor(r() * 16), cx = x, cy = row + 3 + r() * 8;
            for (let k = 0; k < n; k++) {
              const px = cx + (r() - 0.5) * 30, py = cy + (r() - 0.5) * 9, rr = 1.2 + r() * 2.2;
              p.moveTo(px + rr, py); p.arc(px, py, rr, 0, Math.PI * 2);
            }
          }
          x += 10 + r() * 22;
        }
        wrapped(() => { ctx.fillStyle = css(W.moss, 1.0); ctx.fill(p); });
      };

      if (kind === 'stucco') {
        // The tile repeats 4.4x round the bell and 1.5x up it, so every flake here is seen
        // five or six times: the plate's bell shows three or four big patches on its visible
        // half, which is TWO per tile, not the eighteen the first emit drew (it read as camo).
        cloud([0.88, 0.88, 0.86], 12, 0.16, 0.6, 9);
        washes(W.drip, 12, 0.55);
        flake(W.peel, 1, 0.17, 0.95, W.rim);
        flake(W.core, 1, 0.045, 0.9, W.rim);
        flake(W.peel, 2, 0.05, 0.9, W.rim);
        network(W.crack, 30, 0.6, 1.1, 0.16);
        network(W.crack, 10, 0.5, 1.6, 0.35);
        ctx.save(); ctx.clip(zones(4, 0.16));
        network(W.crack, 46, 0.85, 1.0, 0.08);
        ctx.restore();
        dripClusters(W.drip, 5, 12, 0.9);
        drips(W.drip, 16, 0.6, 0.3);
        grain(W.crack, 1800, 0.09);
      } else {
        cloud(W.mottle, 14, 0.14, 0.55, 8);
        cloud(W.soil, 10, 0.10, 0.5, 8);
        network(W.crack, 26, 0.6, 1.0, 0.2);
        network(W.crack, 8, 0.4, 1.4, 0.4);
        for (const y of W.joints as number[]) jointMoss(y, W.stoneTile);
        grain(W.moss, 1600, 0.10);
      }
      return cv;
    }

    const bind = (mat: THREE.MeshStandardMaterial, cv: HTMLCanvasElement | null) => {
      if (!cv) return;
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;   // the tile holds display-space ratios
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex;
      mat.bumpMap = tex;
      mat.bumpScale = W.bump;
      mat.needsUpdate = true;
    };
    bind(materials.stucco, wearTile('stucco', 20260902));
    bind(materials.stone, wearTile('stone', 9021403));
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
  const root = createChediModel(options);
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
