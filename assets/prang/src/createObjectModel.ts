import * as THREE from 'three';

/**
 * Prang -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 9.00 x 18.00 x 9.00 m, origin base-center, +Y up.
 * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.
 *
 * This is one of thaikit's MONUMENTAL buildings, and unlike the shared retail module its form is
 * not a box: the recognisable feature is a curved or tiered profile that has to survive at the
 * distance a village skyline is read from. The shared vocabulary here is therefore the LATHE --
 * a profile revolved about +Y -- and the tiered/stepped merge, not the parameterised shopfront.
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
    "id": "prang",
    "name": "Prang",
    "exportName": "Prang",
    "envelope": "Envelope 9.00 x 18.00 x 9.00 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
    "materials": [
      {
        "id": "stone",
        "color": 13350822,
        "roughness": 0.94,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "porcelain",
        "color": 15129803,
        "roughness": 0.7,
        "metalness": 0
      },
      {
        "id": "red",
        "color": 8607821,
        "roughness": 0.82,
        "metalness": 0
      },
      {
        "id": "shadow",
        "color": 13286057,
        "roughness": 0.92,
        "metalness": 0
      },
      {
        "id": "gold",
        "color": 11837554,
        "roughness": 0.34,
        "metalness": 0.32,
        "envMapIntensity": 1.2
      }
    ],
    "geometry": {
      "terrace": [
        [
          0,
          0.8,
          4.5
        ],
        [
          0.8,
          1.6,
          4.15
        ],
        [
          1.6,
          2.45,
          3.75
        ]
      ],
      "notch": {
        "halfZ": 1.3,
        "xInner": 2.45
      },
      "stair": {
        "steps": 12,
        "x0": 2.45,
        "x1": 4.5,
        "top": 2.45,
        "treadHalfZ": 1,
        "cheek": [
          1,
          1.3
        ]
      },
      "balustrade": {
        "y0": 2.45,
        "y1": 3.15,
        "outer": 3.75,
        "thick": 0.3
      },
      "tower": {
        "y0": 2.45,
        "y1": 10.2,
        "a": 2.2,
        "r": 0.3
      },
      "pilaster": {
        "w": 0.18,
        "proud": 0.07,
        "y0": 2.65,
        "y1": 10
      },
      "door": {
        "w": 1.35,
        "h": 3.4,
        "depth": 0.34,
        "y": 2.75,
        "sill": 0.2
      },
      "pediment": {
        "w": 3,
        "h": 2.2,
        "depth": 0.16,
        "y": 6.45
      },
      "tiers": {
        "y0": 10.2,
        "y1": 16.2,
        "count": 8,
        "a0": 2.05,
        "a1": 0.5,
        "curve": 1.5,
        "redent": 0.13,
        "lip": 0.1
      },
      "cap": {
        "y0": 16,
        "y1": 17.1,
        "r": 0.6,
        "seg": 24
      },
      "finial": {
        "y0": 16.9,
        "y1": 18
      },
      "wear": {
        "size": 512,
        "stone": {
          "tile": 3.2,
          "course": 0.32,
          "block": 0.8,
          "joint": 6,
          "bump": 0.04,
          "clean": [
            0.906,
            0.973,
            1
          ],
          "lichen": [
            0.995,
            0.978,
            0.783
          ],
          "grime": [
            0.7,
            0.72,
            0.75
          ],
          "jointTone": [
            0.6,
            0.6,
            0.63
          ],
          "blockLo": 0.9,
          "blockHi": 1,
          "mottle": [
            0.88,
            0.88,
            0.9
          ],
          "light": [
            1,
            1,
            1
          ],
          "pit": [
            0.62,
            0.64,
            0.68
          ]
        },
        "porcelain": {
          "tile": 3.2,
          "bump": 0.05,
          "mottle": [
            0.91,
            0.91,
            0.9
          ],
          "wash": [
            0.74,
            0.75,
            0.76
          ],
          "chips": [
            {
              "tone": [
                0.99,
                0.99,
                0.99
              ],
              "w": 0.3
            },
            {
              "tone": [
                0.42,
                0.5,
                0.66
              ],
              "w": 0.22
            },
            {
              "tone": [
                0.46,
                0.6,
                0.5
              ],
              "w": 0.18
            },
            {
              "tone": [
                0.88,
                0.76,
                0.4
              ],
              "w": 0.15
            },
            {
              "tone": [
                0.8,
                0.56,
                0.42
              ],
              "w": 0.1
            },
            {
              "tone": [
                0.6,
                0.62,
                0.7
              ],
              "w": 0.05
            }
          ],
          "chipCount": 680,
          "chipRad": [
            3,
            9
          ]
        },
        "red": {
          "tile": 1.6,
          "bump": 0.03,
          "clean": [
            0.555,
            0.386,
            0.363
          ],
          "worn": [
            1,
            1,
            1
          ],
          "grime": [
            0.74,
            0.72,
            0.74
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

export function createPrangModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Prang';

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
   *  weathering tiles land at true scale and line up across every merged part. Every geometry
   *  this is used on is non-indexed with per-face normals, so a face never straddles two
   *  projections. */
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
  /** Re-map a lathe's UVs to a metre-scaled tile: u keeps LatheGeometry's own seamless 0..1
   *  sweep, scaled to a whole number of repeats at the reference radius so the seam column lands
   *  on a tile edge; v is world height over the tile size. */
  function latheUv(geo: THREE.BufferGeometry, tile: number, rRef: number): void {
    const p = geo.getAttribute('position'), uv = geo.getAttribute('uv');
    const rep = Math.max(1, Math.round(2 * Math.PI * rRef / tile));
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) { out[i * 2] = uv.getX(i) * rep; out[i * 2 + 1] = p.getY(i) / tile; }
    geo.setAttribute('uv', new THREE.BufferAttribute(out, 2));
  }
  const W = G.wear;

  /* ---------------------------------------------------------------- terrace, balustrade, stair
   * All three are the same weathered stone, so all three ride ONE component and ONE draw call.
   * Grouping by MATERIAL rather than by location is the draw-call lever, and here it collapses
   * three slabs, six balustrade runs, ten treads and two raking cheeks into a single submission.
   *
   * The stair is cut out of the terrace PLAN. Hung off the outside instead, a flight projecting
   * past a 9.00 m terrace would push the prop's bounding box off-centre and over its declared
   * width on one side; cut into it, the asymmetry costs nothing. */
  {
    const N = G.notch, ST = G.stair, B = G.balustrade;
    const parts: THREE.BufferGeometry[] = (G.terrace as number[][]).map(
      ([y0, y1, a]) => extrudeSlab(notchedSquare(a, N.halfZ, N.xInner), y0, y1));

    // Balustrade: the side runs carry the full depth and the front and back runs stop between
    // them. Run to full width instead, each corner would put two outer faces in the same plane
    // facing the same way -- 0.20 m2 of coplanar co-facing surface at every corner of the terrace.
    const bi = B.outer - B.thick, bc = B.outer - B.thick / 2, bh = B.y1 - B.y0, by = (B.y0 + B.y1) / 2;
    parts.push(boxAt(-bc, by, 0, B.thick, bh, B.outer * 2));
    parts.push(boxAt(0, by, bc, bi * 2, bh, B.thick));
    parts.push(boxAt(0, by, -bc, bi * 2, bh, B.thick));
    // The +X run is broken by the stair well, so it is two segments flanking the notch.
    const segLen = B.outer - N.halfZ;
    parts.push(boxAt(bc, by, (N.halfZ + B.outer) / 2, B.thick, bh, segLen));
    parts.push(boxAt(bc, by, -(N.halfZ + B.outer) / 2, B.thick, bh, segLen));

    // Ten treads. Each occupies only its OWN going rather than running back to the outer edge:
    // stacked wedges all reaching x=4.50 would put ten outer faces in one plane facing one way.
    // Cut this way, neighbours meet as opposed faces, which is how solids are meant to meet.
    const run = (ST.x1 - ST.x0) / ST.steps, rise = ST.top / ST.steps;
    for (let i = 0; i < ST.steps; i++) {
      const x1 = ST.x1 - i * run, h = (i + 1) * rise;
      parts.push(boxAt(x1 - run / 2, h / 2, 0, run, h, ST.treadHalfZ * 2));
    }
    // Raking cheeks, as a triangle extruded along +Z -- the one profile on this prop that
    // genuinely lives in the XY plane.
    const cheek = new THREE.Shape();
    cheek.moveTo(ST.x1, 0); cheek.lineTo(ST.x0, 0); cheek.lineTo(ST.x0, ST.top); cheek.closePath();
    parts.push(extrudeAlongZ(cheek, ST.cheek[0], ST.cheek[1]));
    parts.push(extrudeAlongZ(cheek, -ST.cheek[1], -ST.cheek[0]));

    const geo = mergeGeos(parts);
    // Ground dirt and lichen on the lower terrace, delivered as a per-vertex tint rather than a
    // second material: the plate measures the bottom plinth distinctly darker and greener than the
    // upper platform, and a second material would cost a draw call to say so.
    tintByHeight(geo, 0, 2.45, [0.82, 0.83, 0.80]);
    boxUv(geo, W.stone.tile);
    add('terrace', 'Terrace, balustrade and stair', geo, 'stone');
    colliders['terrace'] = {
      shape: 'box', localCenter: [0, 9.0, 0], halfExtents: [4.5, 9.0, 4.5],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level '
           + 'builder collides with the tower, not with its stair treads.',
    };
  }

  /* ---------------------------------------------------------------- tower body
   * A redented square, extruded as ONE closed plan. The redents are what a prang has instead of
   * corners, and they are the reason a crossed-box construction is wrong here as well as
   * z-fighting: the plan is a twenty-point polygon, not two rectangles. */
  {
    const T = G.tower;
    const body = extrudeSlab(redentedShape(T.a, T.r), T.y0, T.y1);
    boxUv(body, W.porcelain.tile);
    add('tower', 'Tower body', body, 'porcelain');
  }

  /* ---------------------------------------------------------------- pilaster strips
   * Eight red strips standing in the re-entrant faces of the four redented corners, as ONE
   * InstancedMesh of four rotations. The unit geometry holds BOTH strips of a single corner and is
   * placed at radius zero, so quad() supplies the four 90-degree rotations and the corner offsets
   * are baked into the geometry -- which is how an eight-part system costs one geometry. */
  {
    const T = G.tower, P = G.pilaster;
    const py = (P.y0 + P.y1) / 2, ph = P.y1 - P.y0;
    // The re-entrant faces of the +X+Z corner: one at x = a-r looking +X, one at z = a-r looking +Z.
    const xf = T.a - T.r, zf = T.a - T.r, near = T.a - 2 * T.r;
    const unit = mergeGeos([
      boxAt(xf + P.proud / 2, py, (near + zf) / 2, P.proud, ph, P.w),
      boxAt((near + xf) / 2, py, zf + P.proud / 2, P.w, ph, P.proud),
    ]);
    boxUv(unit, W.red.tile);
    addInst('pilasters', 'Redent pilaster strips', unit, 'red', quad(0, 0));
  }

  /* ---------------------------------------------------------------- false doors and pediments
   * Four faces, each carrying a blind arched door low down and a raised arched pediment field
   * above it. Both are the same porcelain and both repeat four-fold, so they ride ONE instanced
   * unit: two features, four faces, one geometry and one draw call.
   *
   * The false door on three or four faces is a genuine Khmer-derived feature, not an omission --
   * a prang has one real cell and the rest are blind. */
  {
    const T = G.tower, D = G.door, PD = G.pediment;
    const face = T.a;
    const doorShape = archedPlate(D.w, D.h, D.w / 2, D.h - D.w / 2,
      { r: D.w / 2 - 0.22, spring: D.h - D.w / 2, sill: D.sill });
    const doorFrame = new THREE.ExtrudeGeometry(doorShape,
      { depth: D.depth, bevelEnabled: false, curveSegments: 10 });
    doorFrame.translate(0, D.y, face - D.depth + 0.16);
    doorFrame.computeVertexNormals();

    const pedShape = archedPlate(PD.w, PD.h, PD.w / 2, PD.h - PD.w / 2);
    const ped = new THREE.ExtrudeGeometry(pedShape,
      { depth: PD.depth, bevelEnabled: false, curveSegments: 10 });
    ped.translate(0, PD.y, face - PD.depth + 0.09);
    ped.computeVertexNormals();

    const doorUnit = mergeGeos([doorFrame, ped]);
    boxUv(doorUnit, W.porcelain.tile);
    addInst('door-frames', 'False doors and pediments', doorUnit, 'porcelain', quad(0, 0));

    // The blind door's back panel: a real concavity 0.16 m behind the frame's front plane, and
    // 0.03 m PROUD of the wall it sits against rather than flush with it.
    const panel = boxAt(0, D.y + D.h / 2 - 0.10, face + 0.015, D.w - 0.48, D.h - 0.46, 0.05);
    boxUv(panel, W.porcelain.tile);
    addInst('door-panels', 'Blind door panels', panel, 'shadow', quad(0, 0));
  }

  /* ---------------------------------------------------------------- corn-cob tiers
   * Seven receding redented slabs, MERGED into one component. The half-width follows a cosine
   * raised to a power just above one, which is what makes the taper CONVEX -- the corn-cob bulge
   * the registry notes name as this prop's identity. A linear interpolation gives a straight cone,
   * and a straight cone is a different building. */
  {
    const T = G.tiers;
    const step = (T.y1 - T.y0) / T.count;
    const parts: THREE.BufferGeometry[] = [];
    for (let i = 0; i < T.count; i++) {
      const t = i / T.count;
      const a = T.a1 + (T.a0 - T.a1) * Math.pow(Math.cos(t * Math.PI / 2), T.curve);
      const y0 = T.y0 + i * step;
      parts.push(extrudeSlab(redentedShape(a, a * T.redent), y0, T.y0 + (i + 1) * step));
      // A projecting lip at the foot of each tier -- the ring band the plate shows at every step.
      // It starts 0.02 m ABOVE the tier's own base rather than level with it: level, the lip's
      // underside and the tier's underside would be the same plane facing the same way.
      const la = a + T.lip;
      parts.push(extrudeSlab(redentedShape(la, la * T.redent), y0 + 0.02, y0 + 0.16));
    }
    const stack = mergeGeos(parts);
    boxUv(stack, W.porcelain.tile);
    add('tiers', 'Corn-cob tiers', stack, 'porcelain');
  }

  /* ---------------------------------------------------------------- cap
   * The rounded head above the top tier, as a closed lathe. Its base is sunk to 15.40, inside the
   * top tier, rather than resting on its 15.60 top face: LatheGeometry is open at the bottom and
   * an open rim sitting exactly on a surface is a seam the turntable gate can read through. */
  {
    const C = G.cap;
    const pts: number[][] = [];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      pts.push([C.r * Math.cos(t * Math.PI / 2), C.y0 + (C.y1 - C.y0) * t]);
    }
    pts.unshift([C.r, C.y0 - 0.0]);
    const dome = lathe(pts, C.seg);
    latheUv(dome, W.porcelain.tile, C.r);
    add('cap', 'Domed cap', dome, 'porcelain');
  }

  /* ---------------------------------------------------------------- trident finial
   * The trident is what marks this as a Thai prang rather than any other tower, so it is authored
   * as three real prongs on a shaft and not as a spike. Merged boxes and one lathe collar, in the
   * only gold material on the prop. */
  {
    const F = G.finial;
    const shaft = F.y0;
    const parts: THREE.BufferGeometry[] = [
      cylAt(0, shaft + 0.10, 0, 0.11, 0.14, 0.20, 12),   // collar
      cylAt(0, shaft + 0.34, 0, 0.05, 0.07, 0.30, 12),   // stem
      boxAt(0, shaft + 0.50, 0, 0.40, 0.07, 0.07),       // cross bar the outer prongs spring from
      cylAt(0, shaft + 0.90, 0, 0.008, 0.055, 0.82, 10), // tapered centre spike
    ];
    // The two outer prongs CURL. In the plate they spring outward from the bar and hook back in at
    // the tip, and that curl is most of what identifies the mark as a trident at all -- two
    // straight sticks either side of a spike read as a candelabrum. Five short segments each,
    // sampled along a sine, is the cheapest thing that keeps the hook.
    for (const sign of [-1, 1]) {
      const n = 5;
      const at = (u: number) => [sign * (0.17 + 0.15 * Math.sin(u * Math.PI * 0.72)), shaft + 0.52 + 0.60 * u];
      for (let j = 0; j < n; j++) {
        const a = at(j / n), b = at((j + 1) / n);
        const dx = b[0] - a[0], dy = b[1] - a[1];
        const len = Math.hypot(dx, dy);
        const g = new THREE.BoxGeometry(0.05, len + 0.03, 0.05);
        // Rotation about Z by theta maps the box's local +Y to (-sin, cos), so theta = atan2(-dx, dy)
        // is what aims the segment along the sampled tangent.
        g.rotateZ(Math.atan2(-dx, dy));
        g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 0);
        parts.push(g);
      }
    }
    add('finial', 'Gilt trident finial', mergeGeos(parts), 'gold');
  }

  /* ---------------------------------------------------------------- weathering
   * The plate is not the flat cream the first build shipped. The terrace is coursed limestone
   * under a near-continuous ochre lichen with grey grime washing down every face; the tower is
   * white-washed stucco streaked grey below every lip and ENCRUSTED with porcelain chips -- white,
   * blue, green, yellow, ochre -- which is the surface the registry names as this prop's identity;
   * and the red pilaster paint is worn through to pale stucco in patches.
   *
   * All of it is delivered as three Canvas 2D tiles assigned AFTER material construction, the
   * chedi's and the Khmer sanctuary's route: the sculpt materials stay declared textureless (no
   * five-canvas procedural set, no per-pixel JavaScript, and the measured albedo is NOT thrown
   * away), and each tile is a few hundred Path2D fills at 512 px -- single-digit milliseconds.
   * Each is a MULTIPLIER on the material colour, bound as map and bumpMap, so a joint reads as a
   * groove and a chip as a raised piece rather than as paint.
   *
   * Two of the three surfaces carry marks BRIGHTER than their clean ground (the lichen in red and
   * green, the worn-through stucco in every channel), and a multiplier cannot brighten. Those two
   * materials therefore hold the ENVELOPE -- stone declares it in cfg, red is re-based here on
   * LINEAR components with the ratio raised to 2.2 because the tile is sRGB -- and the clean
   * surface is painted into the tile with one multiply fill; everything after that is a ratio of
   * the envelope. Nothing but the pits and the chips has a hard edge: hard-edged blotches on stone
   * read as camouflage paint, which is the note that sent the sanctuary back.
   *
   * Under Node -- bands.mjs and check-coplanar run this factory without a DOM -- there is no
   * canvas, no re-basing, and every material keeps its flat declared colour. */
  {
    const hasDom = typeof document !== 'undefined' && typeof (document as any).createElement === 'function';
    const size = Math.min(W.size, options.textureSize ?? W.size);
    const css = (t: number[], a: number) =>
      'rgba(' + Math.round(Math.min(1, t[0]) * 255) + ',' + Math.round(Math.min(1, t[1]) * 255) + ','
      + Math.round(Math.min(1, t[2]) * 255) + ',' + a + ')';
    const rng = (seed: number) => () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    type Painter = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void) => void;

    function makeTile(seed: number, draw: Painter): HTMLCanvasElement | null {
      if (!hasDom) return null;
      const cv = document.createElement('canvas');
      cv.width = cv.height = size;
      const ctx = cv.getContext('2d');
      if (!ctx) return null;
      const S = size;
      // Every mark is built once and drawn at nine wrapped offsets, so the tile is seamless under
      // RepeatWrapping; the shapes are precomputed before the nine fills or the copies differ.
      const wrapped = (fn: () => void) => {
        for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
          ctx.save(); ctx.translate(ox * S, oy * S); fn(); ctx.restore();
        }
      };
      draw(ctx, rng(seed), S, wrapped);
      return cv;
    }

    /** Ashlar coursing: the tile is an exact whole number of courses and blocks, laid in running
     *  bond, drawn as jittered quadrilaterals over a joint-coloured ground so the joints come out
     *  irregular for free. Each block carries its own tone from the measured spread. */
    const coursing = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                      P: any) => {
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
          blocks.push({ p, tone: [t, t * (0.97 + 0.03 * r()), t * (0.95 + 0.05 * r())] });
        }
      }
      wrapped(() => { for (const b of blocks) { ctx.fillStyle = css(b.tone, 1); ctx.fill(b.p); } });
    };
    /** Soft low-frequency mottle: a few large discs drawn through a canvas blur, so the tone
     *  drifts cloud-like over half a metre instead of stopping at a hard edge. */
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
    /** Weathering washes: vertical gradient streaks fading DOWN the face, blurred so they read as
     *  water-borne staining rather than as stripes. v is world height on every mapping here and
     *  the canvas is flipped into UV space, so down the canvas is down the prop. */
    const washes = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                    tone: number[], count: number, alpha: number, blurPx: number) => {
      const marks: number[][] = [];
      for (let i = 0; i < count; i++) marks.push([r() * S, r() * S, S * (0.15 + 0.45 * r()), 18 + 60 * r(), alpha * (0.5 + 0.5 * r())]);
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
    /** Lichen as CRUST: clusters of tiny specks, the way it grows, not a painted patch. At 6 mm
     *  a pixel the specks are 1-2 cm and blend to an ochre tinge at prop distance. */
    const crust = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                   tone: number[], clusters: number, perCluster: number, rad: number, alpha: number) => {
      const p = new Path2D();
      for (let i = 0; i < clusters; i++) {
        const cx = r() * S, cy = r() * S, R = rad * S * (0.4 + r());
        for (let k = 0; k < perCluster; k++) {
          const a = r() * Math.PI * 2, d = R * Math.sqrt(r());
          const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.7, rr = 1 + 1.6 * r();
          p.moveTo(x + rr, y); p.arc(x, y, rr, 0, Math.PI * 2);
        }
      }
      wrapped(() => { ctx.fillStyle = css(tone, alpha); ctx.fill(p); });
    };
    /** Pits: small dark ellipses, the pocking of old limestone. */
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
    /** Porcelain chips: broken pieces, so each is an irregular hard-edged polygon of 4-7 sides,
     *  never a disc. They are set in loose rosettes rather than scattered evenly -- the plate's
     *  chips cluster around the arch motifs -- so two thirds sit in clusters and a third are
     *  strays. One Path2D per colour family, each filled once at nine wrapped offsets. */
    const chips = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                   P: any) => {
      const fams: { tone: number[], w: number }[] = P.chips;
      const paths = fams.map(() => new Path2D());
      const centres: number[][] = [];
      for (let i = 0; i < 26; i++) centres.push([r() * S, r() * S, S * (0.04 + 0.09 * r())]);
      for (let i = 0; i < P.chipCount; i++) {
        let cx: number, cy: number;
        if (r() < 0.75) {
          const c = centres[Math.floor(r() * centres.length)];
          const a = r() * Math.PI * 2, d = c[2] * Math.sqrt(r());
          cx = c[0] + Math.cos(a) * d; cy = c[1] + Math.sin(a) * d;
        } else { cx = r() * S; cy = r() * S; }
        const R = P.chipRad[0] + (P.chipRad[1] - P.chipRad[0]) * r();
        const n = 4 + Math.floor(r() * 4), rot = r() * Math.PI * 2;
        let pick = r(), f = 0;
        for (; f < fams.length - 1; f++) { pick -= fams[f].w; if (pick <= 0) break; }
        const p = paths[f];
        for (let k = 0; k < n; k++) {
          const a = rot + (k / n) * Math.PI * 2 + (r() - 0.5) * 0.5, rr = R * (0.6 + 0.4 * r());
          const x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr * (0.7 + 0.3 * r());
          if (k === 0) p.moveTo(x, y); else p.lineTo(x, y);
        }
        p.closePath();
      }
      wrapped(() => { fams.forEach((fm, i) => { ctx.fillStyle = css(fm.tone, 0.92); ctx.fill(paths[i]); }); });
    };

    const bind = (mat: THREE.MeshStandardMaterial, cv: HTMLCanvasElement | null, bump: number) => {
      if (!cv) return;
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;   // the tile holds display-space ratios
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex;
      mat.bumpMap = tex;
      mat.bumpScale = bump;
      mat.needsUpdate = true;
    };

    // Limestone terrace: coursing and tonal drift in CLEAN-stone terms, the whole ground scaled to
    // the clean ratio of the envelope with one multiply fill, then the lichen -- broad blurred
    // ochre drifts with speck crust over them -- the grey washes running down, and light pocking.
    {
      const P = W.stone;
      bind(materials.stone, makeTile(20260826, (ctx, r, S, wrapped) => {
        coursing(ctx, r, S, wrapped, P);
        cloud(ctx, r, S, wrapped, P.mottle, 10, 0.16, 0.5, 14);
        cloud(ctx, r, S, wrapped, P.light, 8, 0.14, 0.4, 14);
        grain(ctx, r, S, wrapped, P.jointTone, 5000, 0.07);
        ctx.globalCompositeOperation = 'multiply';
        ctx.fillStyle = css(P.clean, 1); ctx.fillRect(0, 0, S, S);
        ctx.globalCompositeOperation = 'source-over';
        cloud(ctx, r, S, wrapped, P.lichen, 30, 0.16, 0.95, 10);
        crust(ctx, r, S, wrapped, P.lichen, 60, 40, 0.04, 0.8);
        washes(ctx, r, S, wrapped, P.grime, 24, 0.7, 5);
        cloud(ctx, r, S, wrapped, P.grime, 6, 0.09, 0.4, 16);
        pits(ctx, r, S, wrapped, P.pit, 260, 2.0, 0.5);
      }), P.bump);
    }
    // Stucco and chips: the tower, the tiers, the cap, the door frames -- and the door panels'
    // own material, which is the same stucco in the recess and shares the one canvas.
    {
      const P = W.porcelain;
      const tile = makeTile(8261403, (ctx, r, S, wrapped) => {
        ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, S, S);
        cloud(ctx, r, S, wrapped, P.mottle, 16, 0.15, 0.75, 14);
        grain(ctx, r, S, wrapped, P.wash, 5000, 0.07);
        washes(ctx, r, S, wrapped, P.wash, 30, 0.8, 5);
        cloud(ctx, r, S, wrapped, P.wash, 8, 0.08, 0.4, 16);
        chips(ctx, r, S, wrapped, P);
      });
      bind(materials.porcelain, tile, P.bump);
      bind(materials.shadow, tile, P.bump);
    }
    // Red paint, re-based to its worn envelope: the tile's ground is the red as a ratio of the
    // pale stucco, and the worn patches are painted back UP to the envelope as blurred clouds.
    {
      const P = W.red;
      const m = materials.red;
      if (hasDom) {
        const c = m.color.clone();
        m.color.setRGB(c.r / Math.pow(P.clean[0], 2.2), c.g / Math.pow(P.clean[1], 2.2), c.b / Math.pow(P.clean[2], 2.2));
      }
      bind(m, makeTile(11052011, (ctx, r, S, wrapped) => {
        ctx.fillStyle = css(P.clean, 1); ctx.fillRect(0, 0, S, S);
        cloud(ctx, r, S, wrapped, [P.clean[0] * 0.9, P.clean[1] * 0.9, P.clean[2] * 0.9], 8, 0.14, 0.5, 14);
        cloud(ctx, r, S, wrapped, P.worn, 9, 0.07, 0.85, 6);
        washes(ctx, r, S, wrapped, [P.clean[0] * P.grime[0], P.clean[1] * P.grime[1], P.clean[2] * P.grime[2]], 10, 0.5, 5);
        grain(ctx, r, S, wrapped, P.worn, 2500, 0.08);
      }), P.bump);
    }
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
  const root = createPrangModel(options);
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
