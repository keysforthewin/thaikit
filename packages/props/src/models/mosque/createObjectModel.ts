import * as THREE from 'three';

/**
 * Mosque -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 14.00 x 12.00 x 16.00 m, origin base-center, +Y up.
 * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.
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
    "id": "mosque",
    "name": "Mosque",
    "exportName": "Mosque",
    "envelope": "Envelope 14.00 x 12.00 x 16.00 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
    "materials": [
      {
        "id": "white",
        "color": 11842736,
        "roughness": 0.93,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "panel",
        "color": 11779489,
        "roughness": 0.92,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "dome",
        "color": 9673350,
        "roughness": 0.72,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "green",
        "color": 9475451,
        "roughness": 0.72,
        "metalness": 0
      },
      {
        "id": "deck",
        "color": 9407616,
        "roughness": 0.95,
        "metalness": 0
      },
      {
        "id": "dark",
        "color": 5133898,
        "roughness": 0.96,
        "metalness": 0
      },
      {
        "id": "gold",
        "color": 9800822,
        "roughness": 0.38,
        "metalness": 0.3,
        "envMapIntensity": 1.2
      }
    ],
    "geometry": {
      "court": {
        "hx": 7,
        "hz": 8,
        "t": 0.45,
        "h": 1.65,
        "copingH": 0.16,
        "copingProud": 0.05,
        "gate": {
          "w": 2.5,
          "h": 2.95,
          "d": 0.68,
          "door": {
            "w": 1.25,
            "spring": 1.75,
            "rise": 0.92,
            "shoulder": 0.08
          },
          "frame": {
            "inset": 0.14,
            "band": 0.09,
            "proud": 0.03
          }
        }
      },
      "hall": {
        "hx": 5.5,
        "zBack": -5.9,
        "zFront": 4,
        "wallTop": 4.9,
        "plinthH": 0.15,
        "plinthProud": 0.08,
        "loggia": {
          "depth": 1.8,
          "screenT": 0.6,
          "endWall": 0.6,
          "screenProud": 0.04
        },
        "ledge": {
          "y0": 4.88,
          "y1": 5.02,
          "proud": 0.1
        },
        "parapet": {
          "y0": 5.02,
          "y1": 5.32,
          "t": 0.3,
          "proud": 0.04,
          "bandProud": 0.03
        },
        "coping": {
          "y0": 5.32,
          "y1": 5.46,
          "proud": 0.12
        },
        "field": {
          "xHalf": 4.95,
          "y0": 0.15,
          "y1": 4.72,
          "t": 0.03
        }
      },
      "arch": {
        "open": {
          "xs": [
            -2.15,
            0,
            2.15
          ],
          "w": 1.55,
          "spring": 2.65,
          "rise": 1.2,
          "sill": 0.17,
          "shoulder": 0.09
        },
        "blind": {
          "xs": [
            -4.15,
            4.15
          ],
          "w": 1,
          "spring": 2.65,
          "rise": 0.85,
          "sill": 0.6,
          "shoulder": 0.07,
          "inner": {
            "inset": 0.22,
            "rise": 0.75,
            "sill": 0.95
          }
        },
        "frame": {
          "band": 0.14,
          "proud": 0.05,
          "back": 0.4
        }
      },
      "deck": {
        "y0": 5.02,
        "y1": 5.06,
        "inset": 0.3
      },
      "dome": {
        "z": -1.35,
        "podium": {
          "half": 2.65,
          "y0": 5.06,
          "y1": 5.55,
          "lipHalf": 2.74,
          "lipY1": 5.68
        },
        "drum": {
          "r": 2.25,
          "y0": 5.68,
          "y1": 6.98,
          "ringR": 2.34,
          "ringY1": 5.82,
          "seg": 40,
          "windows": {
            "n": 12,
            "w": 0.34,
            "h": 0.72,
            "y0": 6.02,
            "proud": 0.025
          }
        },
        "lip": {
          "r": 2.46,
          "y0": 6.95,
          "y1": 7.22
        },
        "body": {
          "r": 2.4,
          "y0": 7.18,
          "y1": 9.5,
          "bulge": 0.06,
          "ribs": 32,
          "amp": 0.022,
          "seg": 96,
          "steps": 14
        }
      },
      "valley": [
        0.3,
        0.39,
        0.32
      ],
      "crest": 0.35,
      "small": {
        "at": [
          [
            -4.18,
            -4.4
          ],
          [
            4.18,
            -4.4
          ],
          [
            -4.18,
            2.5
          ],
          [
            4.18,
            2.5
          ]
        ],
        "drum": {
          "r": 0.78,
          "y0": 5.06,
          "y1": 6.22,
          "ringR": 0.86,
          "ringY0": 6.06,
          "seg": 24
        },
        "body": {
          "r": 1,
          "y0": 6.18,
          "y1": 7.16,
          "bulge": 0.05,
          "ribs": 20,
          "amp": 0.03,
          "seg": 64,
          "steps": 10
        },
        "spike": {
          "y0": 7.12,
          "s": 0.45
        }
      },
      "minaret": {
        "x": -5.05,
        "z": -2.9,
        "halfBase": 0.66,
        "halfTop": 0.52,
        "shaftTop": 9.1,
        "corbel": {
          "y0": 8.7,
          "r0": 0.58,
          "r1": 0.95
        },
        "slab": {
          "y0": 9.1,
          "y1": 9.36,
          "r": 0.95
        },
        "rail": {
          "y0": 9.36,
          "y1": 9.72,
          "rOut": 0.92,
          "rIn": 0.78
        },
        "lantern": {
          "r": 0.56,
          "y0": 9.36,
          "y1": 10.5,
          "openings": {
            "n": 8,
            "w": 0.3,
            "h": 0.78,
            "y0": 9.6,
            "proud": 0.025
          }
        },
        "cornice": {
          "r": 0.68,
          "y0": 10.48,
          "y1": 10.64
        },
        "body": {
          "r": 0.62,
          "y0": 10.6,
          "y1": 11.48,
          "bulge": 0.06,
          "ribs": 16,
          "amp": 0.035,
          "seg": 48,
          "steps": 10
        }
      },
      "ornaments": [
        [
          0,
          9.47,
          -1.35,
          0.62,
          1.38,
          0.22
        ],
        [
          -5.05,
          11.46,
          -2.9,
          0.24,
          0.54,
          0.1
        ]
      ],
      "wear": {
        "size": 512,
        "tile": 6,
        "bump": 0.03,
        "streak": [
          0.5,
          0.5,
          0.46
        ],
        "band": [
          0.62,
          0.62,
          0.58
        ],
        "mottle": [
          0.88,
          0.88,
          0.85
        ],
        "damp": [
          0.8,
          0.79,
          0.7
        ],
        "grain": [
          0.55,
          0.55,
          0.52
        ],
        "deckStain": [
          0.55,
          0.56,
          0.52
        ],
        "deckMottle": [
          0.86,
          0.85,
          0.8
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

export function createMosqueModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Mosque';

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


  const inBrowser = typeof document !== 'undefined' && typeof (document as any).createElement === 'function';
  const W = G.wear;

  /* ---------------------------------------------------------------- UV helpers
   * Every weathered surface samples a metre-scaled tile. topUv keys v to the TOP of the part it is
   * called for, so the tile's own top row -- where the streaks hang from -- lands on that part's
   * coping. Up- and down-facing faces sample a clean strip of the tile (v 0.62..0.78) so no streak
   * bar crosses a coping top. Lathes keep their own seamless u, scaled to whole repeats. */
  const topUv = (geo: THREE.BufferGeometry, yTop: number, tile = W.tile, uShift = 0) => {
    const p = geo.getAttribute('position'), n = geo.getAttribute('normal');
    const uv = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
      let u: number, v: number;
      if (ay >= ax && ay >= az) { const zz = p.getZ(i) / (0.35 * tile); u = p.getX(i) / tile; v = 0.55 + 0.35 * (zz - Math.floor(zz)); }
      else if (ax >= az) { u = p.getZ(i) / tile; v = (yTop - p.getY(i)) / tile; }
      else { u = p.getX(i) / tile; v = (yTop - p.getY(i)) / tile; }
      uv[i * 2] = u + uShift; uv[i * 2 + 1] = v;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    return geo;
  };
  const latheUv = (geo: THREE.BufferGeometry, yTop: number, rRef: number, tile = W.tile) => {
    const p = geo.getAttribute('position'), uv0 = geo.getAttribute('uv');
    const rep = Math.max(1, Math.round(2 * Math.PI * rRef / tile));
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) { out[i * 2] = uv0.getX(i) * rep; out[i * 2 + 1] = (yTop - p.getY(i)) / tile; }
    geo.setAttribute('uv', new THREE.BufferAttribute(out, 2));
    return geo;
  };
  const planarUv = (geo: THREE.BufferGeometry, tile: number) => {
    const p = geo.getAttribute('position'), uv = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) { uv[i * 2] = p.getX(i) / tile; uv[i * 2 + 1] = p.getZ(i) / tile; }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    return geo;
  };
  const tintAll = (geo: THREE.BufferGeometry, t: number[]) => {
    const c = geo.getAttribute('position').count, col = new Float32Array(c * 3);
    for (let i = 0; i < c; i++) { col[i * 3] = t[0]; col[i * 3 + 1] = t[1]; col[i * 3 + 2] = t[2]; }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    return geo;
  };
  const rectShape = (x0: number, y0: number, x1: number, y1: number) => {
    const s = new THREE.Shape(); s.moveTo(x0, y0); s.lineTo(x1, y0); s.lineTo(x1, y1); s.lineTo(x0, y1); s.closePath(); return s;
  };
  /** Extrude an XY shape between two depths along +Z. */
  const extrudeZ = (shape: THREE.Shape, z0: number, z1: number, seg = 10) => {
    const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: seg });
    g.translate(0, 0, z0); g.computeVertexNormals(); return g;
  };
  /** An n-gon prism (octagon at 8) about +Y, faces aligned so one face looks along +X. */
  const prism = (cx: number, y0: number, cz: number, r: number, y1: number, n: number, rTop?: number) => {
    const g = new THREE.CylinderGeometry(rTop ?? r, r, y1 - y0, n);
    g.rotateY(Math.PI / n); g.translate(cx, (y0 + y1) / 2, cz); return g;
  };
  /** A hollow ring: lathe of a rectangular section, n segments. */
  const ring = (cx: number, cz: number, rIn: number, rOut: number, y0: number, y1: number, n: number) => {
    const g = lathe([[rIn, y0], [rOut, y0], [rOut, y1], [rIn, y1], [rIn, y0]], n);
    g.rotateY(Math.PI / n); g.translate(cx, 0, cz); return g;
  };

  /* ---------------------------------------------------------------- the Moorish arch
   * Vertical jambs, a shoulder stepping OUT at the spring, a round lobe, an ogee point. */
  const moorishArchPath = (target: THREE.Path, w: number, spring: number, rise: number, sill: number,
                           shoulder: number) => {
    const hw = w / 2, sw = hw + shoulder;
    const a = 0.22 * sw, R = Math.hypot(sw, a), cy = spring + a;
    const th = Math.asin(Math.min(0.985, Math.max(0.5, (0.72 * rise - a) / R)));
    const px = R * Math.cos(th), py = cy + R * Math.sin(th);
    const tx = -Math.sin(th), ty = Math.cos(th);
    const dx = Math.cos(1.2566), dy = -Math.sin(1.2566);
    const ax = 0, ay = spring + rise;
    const det = tx * (-dy) - (-dx) * ty;
    let s = ((ax - px) * (-dy) - (-dx) * (ay - py)) / det;
    if (!(s > 0) || !isFinite(s)) s = 0.1 * R;
    const cxp = px + s * tx, cyp = py + s * ty;
    const th0 = -Math.asin(a / R);
    const n = 8;
    target.moveTo(hw, sill);
    target.lineTo(hw, spring);
    if (shoulder > 0) target.lineTo(sw, spring);
    for (let i = 1; i <= n; i++) { const t = th0 + (th - th0) * (i / n); target.lineTo(R * Math.cos(t), cy + R * Math.sin(t)); }
    target.quadraticCurveTo(cxp, cyp, ax, ay);
    target.quadraticCurveTo(-cxp, cyp, -px, py);
    for (let i = n - 1; i >= 0; i--) { const t = th0 + (th - th0) * (i / n); target.lineTo(-R * Math.cos(t), cy + R * Math.sin(t)); }
    target.lineTo(-hw, spring);
    target.lineTo(-hw, sill);
    target.closePath();
  };
  type Arch = { w: number, spring: number, rise: number, sill: number, shoulder: number };
  const archPathAt = (target: THREE.Path, A: Arch, x: number) => {
    const p = new THREE.Path();
    moorishArchPath(p, A.w, A.spring, A.rise, A.sill, A.shoulder);
    const pts = p.getPoints(6);
    target.moveTo(pts[0].x + x, pts[0].y);
    for (let i = 1; i < pts.length; i++) target.lineTo(pts[i].x + x, pts[i].y);
    target.closePath();
  };
  const archShape = (A: Arch, hole?: Arch) => {
    const shape = new THREE.Shape();
    moorishArchPath(shape, A.w, A.spring, A.rise, A.sill, A.shoulder);
    if (hole) { const p = new THREE.Path(); moorishArchPath(p, hole.w, hole.spring, hole.rise, hole.sill, hole.shoulder); shape.holes.push(p); }
    return shape;
  };
  /** A rectangular shape with Moorish-arch holes cut through it at the given x positions. */
  const wallWithArches = (x0: number, y0: number, x1: number, y1: number, arches: { A: Arch, x: number }[]) => {
    const shape = rectShape(x0, y0, x1, y1);
    for (const { A, x } of arches) { const p = new THREE.Path(); archPathAt(p, A, x); shape.holes.push(p); }
    return shape;
  };
  const crescentShape = (R: number, ri: number, off: number, n: number) => {
    const xi = (R * R - ri * ri + off * off) / (2 * off);
    const yi = Math.sqrt(Math.max(0, R * R - xi * xi));
    const a0 = Math.atan2(yi, xi), b0 = Math.atan2(yi, xi - off);
    const sh = new THREE.Shape();
    sh.moveTo(xi, yi);
    for (let i = 1; i <= n; i++) { const t = a0 + (2 * Math.PI - 2 * a0) * (i / n); sh.lineTo(R * Math.cos(t), R * Math.sin(t)); }
    for (let i = 1; i < n; i++) { const t = -b0 - (2 * Math.PI - 2 * b0) * (i / n); sh.lineTo(off + ri * Math.cos(t), ri * Math.sin(t)); }
    sh.closePath();
    return sh;
  };
  /** A dome profile: radius r at y0 rising to a crown at y1, hemispherical with a slight onion
   *  bulge below the equator so it overhangs its drum the way the plate's does. */
  const domeProfile = (r: number, y0: number, y1: number, bulge: number, steps: number) => {
    const prof: number[][] = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      prof.push([r * Math.cos(t * Math.PI * 0.5) * (1 + bulge * Math.sin(t * Math.PI)), y0 + (y1 - y0) * Math.sin(t * Math.PI * 0.5)]);
    }
    return prof;
  };

  /* ---------------------------------------------------------------- courtyard wall and gate
   * Four runs, a proud coping, and one gate block, all one render: ONE component, ONE draw call.
   * The side runs carry the full depth and the front and back runs stop between them. */
  {
    const C = G.court, GT = C.gate;
    const cc = C.hx - C.t / 2, ci = C.hx - C.t, dd = C.hz - C.t / 2;
    const parts: THREE.BufferGeometry[] = [
      boxAt(-cc, C.h / 2, 0, C.t, C.h, C.hz * 2),
      boxAt(cc, C.h / 2, 0, C.t, C.h, C.hz * 2),
      boxAt(0, C.h / 2, -dd, ci * 2, C.h, C.t),
    ];
    const segLen = ci - GT.w / 2;
    parts.push(boxAt(-(GT.w / 2 + segLen / 2), C.h / 2, dd, segLen, C.h, C.t));
    parts.push(boxAt(GT.w / 2 + segLen / 2, C.h / 2, dd, segLen, C.h, C.t));
    // Coping: a slab proud of both faces, in four runs meeting at opposed butts; stops at the gate.
    const cp = C.t + 2 * C.copingProud, cy = C.h - C.copingH / 2 + 0.02, hh = C.copingH;
    parts.push(boxAt(-cc, cy, 0, cp, hh, C.hz * 2 + 2 * C.copingProud));
    parts.push(boxAt(cc, cy, 0, cp, hh, C.hz * 2 + 2 * C.copingProud));
    parts.push(boxAt(0, cy, -dd, (ci - C.copingProud) * 2, hh, cp));
    const cLen = ci - C.copingProud - GT.w / 2 - 0.02;
    parts.push(boxAt(-(GT.w / 2 + 0.02 + cLen / 2), cy, dd, cLen, hh, cp));
    parts.push(boxAt(GT.w / 2 + 0.02 + cLen / 2, cy, dd, cLen, hh, cp));
    // The gate block: one extrusion with the doorway as a hole, proud of the wall on both faces, a
    // raised rectangular border on each face and a slab cap on top.
    {
      const D = GT.door;
      const block = rectShape(-GT.w / 2, 0, GT.w / 2, GT.h);
      const hole = new THREE.Path(); moorishArchPath(hole, D.w, D.spring, D.rise, 0, D.shoulder); block.holes.push(hole);
      parts.push(extrudeZ(block, C.hz - GT.d, C.hz, 8));
      const F = GT.frame;
      for (const s of [-1, 1]) {
        const zf = (C.hz - GT.d / 2) + s * (GT.d / 2 + F.proud / 2) - (s > 0 ? F.proud + 0.0 : 0);
        const xo = GT.w / 2 - F.inset, yTop = GT.h - F.inset, yBot = 0.35;
        parts.push(boxAt(-(xo - F.band / 2), (yTop + yBot) / 2, zf, F.band, yTop - yBot, F.proud));
        parts.push(boxAt(xo - F.band / 2, (yTop + yBot) / 2, zf, F.band, yTop - yBot, F.proud));
        parts.push(boxAt(0, yTop - F.band / 2, zf, xo * 2 - 2 * F.band, F.band, F.proud));
      }
      parts.push(boxAt(0, GT.h + 0.05, C.hz - GT.d / 2 - 0.02, GT.w + 0.10, 0.10, GT.d - 0.04));
    }
    const geo = mergeGeos(parts);
    // The plate's court wall is streaked black from the coping down and damp-green at the foot:
    // the tile carries the streaks (v keyed to the coping) and the ramp carries the foot.
    tintByHeight(geo, 0, 0.9, [0.86, 0.86, 0.80]);
    topUv(geo, C.h);
    add('court-wall', 'Courtyard wall and gate', geo, 'white');
    colliders['court-wall'] = {
      shape: 'box', localCenter: [0, 6.0, 0], halfExtents: [7.0, 6.0, 8.0],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level '
           + 'builder collides with the compound, not with the minaret separately.',
    };
  }

  /* ---------------------------------------------------------------- prayer hall
   * A plinth, a U-shaped body (the solid rear block and the loggia's two end walls), the arched
   * screen wall closing the loggia, the roof slab with its cornice ledge, the parapet ring and its
   * coping, and the two blind niches' inner panels -- one render, ONE component. The loggia is a
   * real 1.8 m recess behind the three open arches, roofed by the same slab; there is still no
   * interior beyond its inner wall. */
  {
    const H = G.hall, L = H.loggia, A = G.arch, FR = A.frame;
    const parts: THREE.BufferGeometry[] = [];
    const zInner = H.zFront - L.depth - L.screenT;     // the loggia's inner wall plane
    const zScreen0 = H.zFront - L.screenT;             // the screen wall's back
    // plinth
    parts.push(boxAt(0, H.plinthH / 2, (H.zBack + H.zFront) / 2, (H.hx + H.plinthProud) * 2, H.plinthH,
                     H.zFront - H.zBack + 2 * H.plinthProud));
    // the U body as one extruded plan (XZ), so no interior face is coincident with another
    {
      const u = new THREE.Shape();
      const hx = H.hx, ex = H.hx - L.endWall;
      u.moveTo(-hx, -H.zBack); u.lineTo(hx, -H.zBack); u.lineTo(hx, -zScreen0); u.lineTo(ex, -zScreen0);
      u.lineTo(ex, -zInner); u.lineTo(-ex, -zInner); u.lineTo(-ex, -zScreen0); u.lineTo(-hx, -zScreen0); u.closePath();
      parts.push(extrudeSlab(u, H.plinthH, H.wallTop));
    }
    // the screen wall: a rectangle with the three open arches cut through it, 0.04 proud of the
    // side planes so its end faces are off the body's
    {
      const hx = H.hx + L.screenProud;
      const open = A.open as any;
      const arches = (open.xs as number[]).map((x) => ({ A: open as Arch, x }));
      parts.push(extrudeZ(wallWithArches(-hx, H.plinthH, hx, H.wallTop, arches), zScreen0, H.zFront, 10));
    }
    // roof slab + cornice ledge (one box, proud of every wall plane), then the parapet ring
    const LG = H.ledge, P = H.parapet, CP = H.coping;
    const zc = (H.zBack + H.zFront) / 2, zl = H.zFront - H.zBack;
    parts.push(boxAt(0, (LG.y0 + LG.y1) / 2, zc, (H.hx + LG.proud) * 2, LG.y1 - LG.y0, zl + 2 * LG.proud));
    const px = H.hx + P.proud, pz0 = H.zBack - P.proud, pz1 = H.zFront + P.proud, t = P.t;
    const py = (P.y0 + P.y1) / 2, ph = P.y1 - P.y0;
    parts.push(boxAt(-(px - t / 2), py, (pz0 + pz1) / 2, t, ph, pz1 - pz0));
    parts.push(boxAt(px - t / 2, py, (pz0 + pz1) / 2, t, ph, pz1 - pz0));
    parts.push(boxAt(0, py, pz0 + t / 2, (px - t) * 2, ph, t));
    parts.push(boxAt(0, py, pz1 - t / 2, (px - t) * 2, ph, t));
    const cx = H.hx + CP.proud, cz0 = H.zBack - CP.proud, cz1 = H.zFront + CP.proud, ct = t + CP.proud - P.proud;
    const cyy = (CP.y0 + CP.y1) / 2, ch = CP.y1 - CP.y0;
    parts.push(boxAt(-(cx - ct / 2), cyy, (cz0 + cz1) / 2, ct, ch, cz1 - cz0));
    parts.push(boxAt(cx - ct / 2, cyy, (cz0 + cz1) / 2, ct, ch, cz1 - cz0));
    parts.push(boxAt(0, cyy, cz0 + ct / 2, (cx - ct) * 2, ch, ct));
    parts.push(boxAt(0, cyy, cz1 - ct / 2, (cx - ct) * 2, ch, ct));
    // blind niches: a white surround on the green field, and the raised inner arch panel inside it
    {
      const B = A.blind as any, I = B.inner;
      const fieldFront = H.zFront + H.field.t;
      for (const x of B.xs as number[]) {
        const outer: Arch = { w: B.w + 2 * FR.band, spring: B.spring - 0.4 * FR.band, rise: B.rise + 1.25 * FR.band, sill: B.sill - FR.band, shoulder: B.shoulder };
        const fr = extrudeZ(archShape(outer, B as Arch), H.zFront - 0.05, fieldFront + FR.proud, 10);
        fr.translate(x, 0, 0); parts.push(fr);
        const pw = B.w - 2 * I.inset;
        const pn: Arch = { w: pw, spring: B.spring - 0.4 * I.inset, rise: I.rise, sill: I.sill, shoulder: B.shoulder * 0.7 };
        const pg = extrudeZ(archShape(pn), H.zFront + 0.005, fieldFront + 0.02, 8);
        pg.translate(x, 0, 0); parts.push(pg);
      }
    }
    const geo = mergeGeos(parts);
    // rain wash from the cornice down: the ramp darkens TOWARDS the top, the reverse of the kit
    tintByHeight(geo, 2.6, H.wallTop, [1, 1, 1]);
    {
      const p = geo.getAttribute('position'), c = geo.getAttribute('color');
      for (let i = 0; i < p.count; i++) {
        const y = p.getY(i);
        const tt = Math.min(1, Math.max(0, (y - 2.6) / (H.wallTop - 2.6)));
        const f = 1 - 0.14 * tt;
        c.setXYZ(i, f, f, f * 0.98);
      }
    }
    topUv(geo, H.wallTop);
    add('hall', 'Prayer hall', geo, 'white');
  }

  /* ---------------------------------------------------------------- the pale green field
   * The recessed panel on the screen wall, with the open arches cut through it, and the loggia's
   * inner wall behind them -- the plate paints both the same pale green. One component. */
  {
    const H = G.hall, L = H.loggia, A = G.arch, F = H.field, FR = A.frame;
    const zInner = H.zFront - L.depth - L.screenT;
    const open = A.open as any;
    // field holes are a hair inside the frame's OUTER edge, so the frame overlaps the field's reveal
    const holeA: Arch = { w: open.w + 2 * FR.band - 0.04, spring: open.spring - 0.4 * FR.band, rise: open.rise + 1.25 * FR.band - 0.02, sill: F.y0 + 0.005, shoulder: open.shoulder };
    const arches = (open.xs as number[]).map((x) => ({ A: holeA, x }));
    const field = extrudeZ(wallWithArches(-F.xHalf, F.y0, F.xHalf, F.y1, arches), H.zFront, H.zFront + F.t, 10);
    const ex = H.hx - L.endWall;
    const inner = boxAt(0, (H.plinthH + H.wallTop) / 2, zInner + F.t / 2, ex * 2 - 0.02, H.wallTop - H.plinthH - 0.02, F.t);
    const geo = mergeGeos([field, inner]);
    tintAll(geo, [1, 1, 1]);
    topUv(geo, F.y1, W.tile, 0.37);
    add('field', 'Green facade field and loggia wall', geo, 'panel');
  }

  /* ---------------------------------------------------------------- arcade surrounds
   * Three white Moorish surrounds over the open arches, one geometry as an InstancedMesh. Each is
   * a plate with a REAL aperture a hair smaller than the screen's opening, extruded from inside the
   * screen to 0.05 m proud of the green field, so it lines the reveal and overlaps the field. */
  {
    const H = G.hall, A = G.arch, FR = A.frame, open = A.open as any;
    const outer: Arch = { w: open.w + 2 * FR.band, spring: open.spring - 0.4 * FR.band, rise: open.rise + 1.25 * FR.band, sill: open.sill - 0.05, shoulder: open.shoulder };
    const innerA: Arch = { w: open.w - 0.02, spring: open.spring, rise: open.rise - 0.01, sill: open.sill - 0.03, shoulder: open.shoulder - 0.01 };
    const frame = extrudeZ(archShape(outer, innerA), H.zFront - FR.back, H.zFront + H.field.t + FR.proud, 10);
    topUv(frame, H.wallTop);
    addInst('arch-frames', 'Arcade surrounds', frame, 'white',
      (open.xs as number[]).map((x) => new THREE.Matrix4().setPosition(x, 0, 0)));
  }

  /* ---------------------------------------------------------------- roof deck */
  {
    const H = G.hall, D = G.deck, P = H.parapet;
    const g = boxAt(0, (D.y0 + D.y1) / 2 + 0.005, (H.zBack + H.zFront) / 2,
      (H.hx + P.proud - P.t - D.inset) * 2, D.y1 - D.y0, H.zFront - H.zBack + 2 * P.proud - 2 * P.t - 2 * D.inset);
    planarUv(g, 4.0);
    add('roof-deck', 'Roof deck', g, 'deck');
  }

  /* ---------------------------------------------------------------- parapet band
   * The green stripe on the parapet's outer face, under the coping, standing 0.03 m proud. */
  {
    const H = G.hall, P = H.parapet;
    const px = H.hx + P.proud + P.bandProud, pz0 = H.zBack - P.proud - P.bandProud, pz1 = H.zFront + P.proud + P.bandProud, t = 0.06;
    const by = (P.y0 + P.y1) / 2 + 0.01, bh = P.y1 - P.y0 - 0.04;
    add('parapet-band', 'Green parapet band', mergeGeos([
      boxAt(-(px - t / 2), by, (pz0 + pz1) / 2, t, bh, pz1 - pz0),
      boxAt(px - t / 2, by, (pz0 + pz1) / 2, t, bh, pz1 - pz0),
      boxAt(0, by, pz0 + t / 2, (px - t) * 2, bh, t),
      boxAt(0, by, pz1 - t / 2, (px - t) * 2, bh, t),
    ]), 'green');
  }

  /* ---------------------------------------------------------------- the great dome and the minaret's
   * Both ribbed -- radius modulated AROUND the axis, which no lathe can do -- both striped per
   * vertex, merged into ONE component and ONE draw call. */
  {
    const D = G.dome.body, MN = G.minaret, MB = MN.body, V = G.valley as number[];
    const great = ribbedDome(domeProfile(D.r, D.y0, D.y1, D.bulge, D.steps), D.ribs, D.amp, D.seg, V, G.crest);
    great.translate(0, 0, G.dome.z);
    const md = ribbedDome(domeProfile(MB.r, MB.y0, MB.y1, MB.bulge, MB.steps), MB.ribs, MB.amp, MB.seg, V, G.crest);
    md.translate(MN.x, 0, MN.z);
    add('domes', 'Great dome and minaret dome', mergeGeos([great, md]), 'dome');
  }

  /* ---------------------------------------------------------------- dome drum
   * Square podium with a moulded lip, a round drum with a base ring, and the lip ring the dome
   * springs from. White, one component. The twelve arched windows are in the openings component. */
  {
    const DM = G.dome, PD = DM.podium, DR = DM.drum, LP = DM.lip;
    const parts: THREE.BufferGeometry[] = [
      topUv(boxAt(0, (PD.y0 + PD.y1) / 2, DM.z, PD.half * 2, PD.y1 - PD.y0, PD.half * 2), PD.lipY1),
      topUv(boxAt(0, (PD.y1 + PD.lipY1) / 2, DM.z, PD.lipHalf * 2, PD.lipY1 - PD.y1, PD.lipHalf * 2), PD.lipY1),
    ];
    const ringG = cylAt(0, (DR.y0 + DR.ringY1) / 2, 0, DR.ringR, DR.ringR, DR.ringY1 - DR.y0, DR.seg);
    const drumG = cylAt(0, (DR.ringY1 + DR.y1) / 2, 0, DR.r, DR.r, DR.y1 - DR.ringY1, DR.seg);
    const lipG = lathe([[0, LP.y0], [LP.r - 0.10, LP.y0], [LP.r, LP.y0 + 0.08], [LP.r, LP.y1 - 0.05], [LP.r - 0.06, LP.y1], [0, LP.y1]], DR.seg);
    for (const g of [ringG, drumG, lipG]) { latheUv(g, LP.y1, DR.r); g.translate(0, 0, DM.z); parts.push(g); }
    add('drum', 'Dome drum', mergeGeos(parts), 'white');
  }

  /* ---------------------------------------------------------------- openings
   * Twelve pointed windows around the drum and eight around the minaret lantern: small dark plates
   * standing 0.025 m proud of the surface they sit on, merged into ONE component. */
  {
    const DM = G.dome, DR = DM.drum, WN = DR.windows, MN = G.minaret, LT = MN.lantern, LO = LT.openings;
    const parts: THREE.BufferGeometry[] = [];
    const plate = (w: number, h: number, y0: number) => {
      const s = pointedArchShape(w, y0 + h * 0.62, h * 0.38, y0);
      const g = new THREE.ExtrudeGeometry(s, { depth: 0.03, bevelEnabled: false, curveSegments: 6 });
      g.computeVertexNormals(); return g;
    };
    for (let k = 0; k < WN.n; k++) {
      const a = (k + 0.5) * Math.PI * 2 / WN.n;
      const g = plate(WN.w, WN.h, WN.y0);
      g.rotateY(a); g.translate(Math.sin(a) * (DR.r + WN.proud - 0.03), 0, Math.cos(a) * (DR.r + WN.proud - 0.03) + DM.z);
      parts.push(g);
    }
    const inR = LT.r * Math.cos(Math.PI / LO.n);   // apothem of the octagonal lantern
    for (let k = 0; k < LO.n; k++) {
      const a = k * Math.PI * 2 / LO.n;
      const g = plate(LO.w, LO.h, LO.y0);
      g.rotateY(a); g.translate(MN.x + Math.sin(a) * (inR + LO.proud - 0.03), 0, MN.z + Math.cos(a) * (inR + LO.proud - 0.03));
      parts.push(g);
    }
    add('openings', 'Drum windows and lantern openings', mergeGeos(parts), 'dark');
  }

  /* ---------------------------------------------------------------- corner domes
   * Four, as TWO InstancedMesh systems -- a white drum with its ring and a ribbed green dome. */
  {
    const S = G.small, SD = S.drum, SB = S.body;
    const drum = mergeGeos([
      cylAt(0, (SD.y0 + SD.ringY0) / 2 - SD.y0, 0, SD.r, SD.r, SD.ringY0 - SD.y0, SD.seg),
      cylAt(0, (SD.ringY0 + SD.y1) / 2 - SD.y0, 0, SD.ringR, SD.ringR - 0.03, SD.y1 - SD.ringY0, SD.seg),
    ]);
    latheUv(drum, SD.y1 - SD.y0, SD.r, 4.0);
    addInst('small-drums', 'Corner dome drums', drum, 'white',
      (S.at as number[][]).map(([x, z]) => new THREE.Matrix4().setPosition(x, SD.y0, z)));
    addInst('small-domes', 'Corner domes',
      ribbedDome(domeProfile(SB.r, 0, SB.y1 - SB.y0, SB.bulge, SB.steps), SB.ribs, SB.amp, SB.seg, G.valley as number[], G.crest), 'dome',
      (S.at as number[][]).map(([x, z]) => new THREE.Matrix4().setPosition(x, SB.y0, z)));
  }

  /* ---------------------------------------------------------------- minaret
   * Engaged with the hall's left wall: a square shaft tapering to the balcony, a corbel, an
   * octagonal slab and hollow parapet ring, the octagonal lantern core, and the cornice the dome
   * springs from. White, one component; its eight openings are in the openings component. */
  {
    const MN = G.minaret, CB = MN.corbel, SL = MN.slab, RL = MN.rail, LT = MN.lantern, CN = MN.cornice;
    const parts: THREE.BufferGeometry[] = [];
    // the shaft: a 4-sided frustum turned so its faces look along the axes
    const shaft = new THREE.CylinderGeometry(MN.halfTop * Math.SQRT2, MN.halfBase * Math.SQRT2, MN.shaftTop, 4);
    shaft.rotateY(Math.PI / 4); shaft.translate(MN.x, MN.shaftTop / 2, MN.z);
    const sg = shaft.toNonIndexed(); sg.computeVertexNormals(); shaft.dispose();
    parts.push(topUv(sg, MN.shaftTop, W.tile, 0.61));
    parts.push(topUv(prism(MN.x, CB.y0, MN.z, CB.r0, SL.y0 + 0.01, 8, CB.r1), MN.shaftTop, W.tile, 0.61));
    parts.push(topUv(prism(MN.x, SL.y0, MN.z, SL.r, SL.y1, 8), MN.shaftTop, W.tile, 0.61));
    parts.push(topUv(ring(MN.x, MN.z, RL.rIn, RL.rOut, RL.y0, RL.y1, 8), MN.shaftTop, W.tile, 0.61));
    parts.push(topUv(prism(MN.x, LT.y0, MN.z, LT.r, LT.y1, 8), MN.shaftTop, W.tile, 0.61));
    parts.push(topUv(prism(MN.x, CN.y0, MN.z, CN.r, CN.y1, 8), MN.shaftTop, W.tile, 0.61));
    const geo = mergeGeos(parts);
    tintAll(geo, [1, 1, 1]);
    add('minaret', 'Minaret', geo, 'white');
  }

  /* ---------------------------------------------------------------- finials and crescents
   * Four gilt spikes on the corner domes, and the crescent stack over the great dome and the
   * minaret, MERGED into one component and one draw call. */
  {
    const S = G.small;
    const parts: THREE.BufferGeometry[] = [];
    for (const [x, z] of S.at as number[][]) {
      const g = lathe([[0, 0], [0.16, 0.03], [0.20, 0.16], [0.10, 0.30], [0.13, 0.42], [0.07, 0.58], [0, 0.78]], 14);
      g.scale(S.spike.s, S.spike.s, S.spike.s);
      g.translate(x, S.spike.y0, z);
      parts.push(g);
    }
    for (const [x, y0, z, s, totalH, R] of G.ornaments as number[][]) {
      const cap = lathe([[0, 0], [0.46, 0], [0.46, 0.05], [0.32, 0.20], [0.13, 0.33], [0.06, 0.38], [0.06, 0.46]], 16);
      cap.scale(s, s, s); cap.translate(x, y0, z); parts.push(cap);
      const ball = new THREE.SphereGeometry(0.17 * s, 14, 10);
      ball.translate(x, y0 + 0.60 * s, z); parts.push(ball);
      parts.push(cylAt(x, y0 + 0.84 * s, z, 0.045 * s, 0.055 * s, 0.22 * s, 10));
      const bulb = lathe([[0, 0], [0.10, 0.03], [0.12, 0.10], [0.085, 0.19], [0.04, 0.27], [0.03, 0.31]], 12);
      bulb.scale(s, s, s); bulb.translate(x, y0 + 0.92 * s, z); parts.push(bulb);
      const spikeBase = y0 + 1.20 * s, cBottom = y0 + totalH - 2 * R + 0.03;
      if (cBottom > spikeBase + 0.02) parts.push(cylAt(x, (spikeBase + cBottom) / 2, z, 0.025 * s, 0.032 * s, cBottom - spikeBase, 8));
      const t = Math.max(0.035, 0.16 * R);
      const cg = new THREE.ExtrudeGeometry(crescentShape(R, 0.85 * R, 0.28 * R, 14), { depth: t, bevelEnabled: false });
      cg.translate(0, 0, -t / 2);
      cg.rotateZ(Math.PI * 0.28);
      cg.translate(x, y0 + totalH - R, z);
      cg.computeVertexNormals();
      parts.push(cg);
    }
    add('finials', 'Gilt finials and crescents', mergeGeos(parts), 'gold');
  }

  /* ---------------------------------------------------------------- weathering
   * Three post-construction Canvas 2D tiles, bound as map and bumpMap, in MULTIPLIER space over
   * white: the materials keep their measured colour and stay declared textureless, and under Node
   * (bands, check-coplanar, the collider derivation) there is no canvas and they render flat.
   * Every mark is built once as a Path2D and filled at nine wrapped offsets so RepeatWrapping is
   * seamless. v runs DOWN the tile from the top of the part (topUv), so the streak band and the
   * drips hanging from it land on each coping -- the plate's dirt runs top-down. */
  if (inBrowser) {
    const size = Math.min(W.size, options.textureSize ?? W.size);
    const css = (t: number[], a: number) =>
      'rgba(' + Math.round(t[0] * 255) + ',' + Math.round(t[1] * 255) + ',' + Math.round(t[2] * 255) + ',' + a + ')';
    const rng = (seed: number) => () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    const makeTile = (kind: 'render' | 'panel' | 'deck', seed: number): HTMLCanvasElement | null => {
      const cv = document.createElement('canvas');
      cv.width = cv.height = size;
      const ctx = cv.getContext('2d', { willReadFrequently: true } as any);
      if (!ctx) return null;
      const r = rng(seed), S = size;
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, S, S);
      const wrapped = (fn: () => void) => {
        for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) { ctx.save(); ctx.translate(ox * S, oy * S); fn(); ctx.restore(); }
      };
      // soft cloudy mottle: wide ellipses, low alpha
      const mottle = (tone: number[], count: number, alpha: number, rx0: number, ry0: number, yMin = 0, yMax = 1) => {
        for (let i = 0; i < count; i++) {
          const x = r() * S, y = (yMin + (yMax - yMin) * r()) * S, rx = S * rx0 * (0.5 + r()), ry = S * ry0 * (0.5 + r());
          const a = alpha * (0.5 + 0.5 * r());
          wrapped(() => {
            const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
            g.addColorStop(0, css(tone, a)); g.addColorStop(1, css(tone, 0));
            ctx.save(); ctx.translate(x, y); ctx.scale(rx, ry); ctx.fillStyle = g; ctx.fillRect(-1, -1, 2, 2); ctx.restore();
          });
        }
      };
      // a random-walk patch filled as a union: ragged edge, flat inside
      const blotch = (tone: number[], count: number, rad: number, alpha: number, yMin = 0, yMax = 1) => {
        for (let i = 0; i < count; i++) {
          const p = new Path2D();
          let cx = r() * S, cy = (yMin + (yMax - yMin) * r()) * S, a = r() * Math.PI * 2;
          const R = rad * S * (0.5 + r()), n = 6 + Math.floor(r() * 12);
          for (let k = 0; k < n; k++) {
            a += (r() - 0.5) * 2.2; cx += Math.cos(a) * R * 0.4; cy += Math.sin(a) * R * 0.4;
            const rr = R * (0.35 + 0.5 * r()); p.moveTo(cx + rr, cy); p.arc(cx, cy, rr, 0, Math.PI * 2);
          }
          const al = alpha * (0.6 + 0.4 * r());
          wrapped(() => { ctx.fillStyle = css(tone, al); ctx.fill(p); });
        }
      };
      // streaks hanging DOWN from y0: a narrow band that fades with length, slightly wandering
      const drips = (tone: number[], count: number, alpha: number, y0: number, lenMin: number, lenMax: number, wMin: number, wMax: number) => {
        for (let i = 0; i < count; i++) {
          const x = r() * S, len = S * (lenMin + (lenMax - lenMin) * r()), w = wMin + (wMax - wMin) * r();
          const a = alpha * (0.4 + 0.6 * r()), yy = y0 * S + r() * S * 0.02;
          const p = new Path2D();
          let px = x; p.moveTo(px - w / 2, yy);
          const n = 6;
          for (let k = 1; k <= n; k++) { px += (r() - 0.5) * w * 0.8; p.lineTo(px - w / 2 * (1 - 0.5 * k / n), yy + len * k / n); }
          for (let k = n; k >= 0; k--) { p.lineTo(px + w / 2 * (1 - 0.5 * k / n), yy + len * k / n); px -= 0; }
          p.closePath();
          wrapped(() => {
            const g = ctx.createLinearGradient(0, yy, 0, yy + len);
            g.addColorStop(0, css(tone, a)); g.addColorStop(0.35, css(tone, a * 0.7)); g.addColorStop(1, css(tone, 0));
            ctx.fillStyle = g; ctx.fill(p);
          });
        }
      };
      const grain = (tone: number[], count: number, alpha: number) => {
        const p = new Path2D();
        for (let i = 0; i < count; i++) { const x = r() * S, y = r() * S, d = 0.6 + r() * 1.6; p.rect(x, y, d, d); }
        wrapped(() => { ctx.fillStyle = css(tone, alpha); ctx.fill(p); });
      };
      if (kind === 'render' || kind === 'panel') {
        const k = kind === 'panel' ? 0.75 : 1.0;
        mottle(W.mottle, 30, 0.30, 0.16, 0.10);
        mottle(W.damp, 16, 0.22 * k, 0.12, 0.07, 0.3, 1.0);
        // the black-mould band under the coping, continuous and cloudy
        wrapped(() => {
          const g = ctx.createLinearGradient(0, 0, 0, S * 0.07);
          g.addColorStop(0, css(W.band, 0.60 * k)); g.addColorStop(1, css(W.band, 0));
          ctx.fillStyle = g; ctx.fillRect(0, 0, S, S * 0.07);
        });
        mottle(W.band, 24, 0.45 * k, 0.05, 0.014, 0.0, 0.05);
        drips(W.streak, 15, 0.62 * k, 0.004, 0.14, 0.50, 3, 14);
        drips(W.streak, 16, 0.45 * k, 0.004, 0.05, 0.20, 2, 7);
        drips(W.streak, 22, 0.35 * k, 0.004, 0.015, 0.07, 2, 5);
        grain(W.grain, 1800, 0.09);
      } else {
        mottle(W.deckMottle, 40, 0.5, 0.16, 0.11);
        mottle(W.deckStain, 14, 0.30, 0.09, 0.06);
        blotch(W.deckStain, 10, 0.02, 0.22);
        grain(W.grain, 2200, 0.12);
      }
      return cv;
    };
    const bind = (mat: THREE.MeshStandardMaterial, cv: HTMLCanvasElement | null) => {
      if (!cv) return;
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.flipY = false;   // v runs DOWN the tile from each part's top (topUv), so row 0 is the coping
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex; mat.bumpMap = tex; mat.bumpScale = W.bump; mat.needsUpdate = true;
    };
    bind(materials.white, makeTile('render', 20260901));
    bind(materials.panel, makeTile('panel', 9012026));
    bind(materials.deck, makeTile('deck', 1202609));
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
  const root = createMosqueModel(options);
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
