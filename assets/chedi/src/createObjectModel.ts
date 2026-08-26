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
 * Envelope 8.00 x 14.00 x 8.00 m, origin base-center, +Y up.
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
    "envelope": "Envelope 8.00 x 14.00 x 8.00 m, origin base-center, +Y up.\n * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=32 unique geometries.",
    "materials": [
      {
        "id": "stone",
        "color": 10394513,
        "roughness": 0.94,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "stucco",
        "color": 10987425,
        "roughness": 0.88,
        "metalness": 0
      },
      {
        "id": "shadow",
        "color": 8156779,
        "roughness": 0.95,
        "metalness": 0
      },
      {
        "id": "gold",
        "color": 9732191,
        "roughness": 0.4,
        "metalness": 0.3,
        "envMapIntensity": 1.2
      }
    ],
    "geometry": {
      "terrace": [
        [
          0,
          0.5,
          4,
          0.55
        ],
        [
          0.5,
          0.95,
          3.68,
          0.5
        ],
        [
          0.95,
          1.35,
          3.36,
          0.45
        ],
        [
          1.35,
          3.05,
          3,
          0.4
        ],
        [
          3.05,
          3.5,
          3.18,
          0.42
        ],
        [
          3.5,
          3.85,
          2.86,
          0.36
        ]
      ],
      "niche": {
        "radius": 3,
        "y": 1.5,
        "frameW": 1.45,
        "frameH": 1.45,
        "depth": 0.4,
        "archR": 0.45,
        "spring": 0.85
      },
      "bell": {
        "y0": 3.7,
        "seg": 32,
        "body": [
          [
            2.36,
            4.52
          ],
          [
            2.38,
            4.8
          ],
          [
            2.24,
            5.3
          ],
          [
            2.1,
            5.9
          ],
          [
            1.98,
            6.45
          ]
        ],
        "shoulder": {
          "r": 1.98,
          "y": 6.45,
          "rEdge": 1.3,
          "yTop": 7.72,
          "steps": 12
        },
        "neck": {
          "r": 0.75,
          "yTop": 7.9
        }
      },
      "harmika": [
        [
          0,
          8.05,
          0,
          2.1,
          1,
          2.1
        ],
        [
          0,
          8.8,
          0,
          1.52,
          0.5,
          1.52
        ]
      ],
      "spire": {
        "y0": 8.99,
        "y1": 12.3,
        "r0": 0.66,
        "r1": 0.22,
        "rings": 16,
        "bulge": 0.07,
        "seg": 24
      },
      "wear": {
        "size": 512,
        "tile": 3,
        "bump": 0.035,
        "peelLight": [
          0.754,
          0.738,
          0.703
        ],
        "peelDark": [
          0.62,
          0.62,
          0.6
        ],
        "drip": [
          0.703,
          0.709,
          0.705
        ],
        "crack": [
          0.55,
          0.55,
          0.53
        ],
        "mottle": [
          0.9,
          0.9,
          0.88
        ],
        "crust": [
          0.98,
          0.99,
          0.86
        ],
        "moss": [
          0.86,
          0.85,
          0.72
        ]
      },
      "finial": {
        "y0": 12.28,
        "y1": 14,
        "seg": 20
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
  const tri: number[] = [];
  const push = (a: number[], b: number[], c: number[]) => tri.push(...a, ...b, ...c);
  const at = (i: number, j: number) => {
    const [z, cx, cy, rx, ry] = stations[i];
    const th = (j % seg) * Math.PI * 2 / seg;
    return [cx + Math.sin(th) * rx, cy + Math.cos(th) * ry, z];
  };
  for (let i = 0; i < stations.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = at(i, j), b = at(i + 1, j), c = at(i + 1, j + 1), d = at(i, j + 1);
      push(a, b, c);
      push(a, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(tri), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((tri.length / 3) * 2), 2));
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
   *  on a tile edge), v is world height over the tile size. atan2 of position would put the
   *  duplicated seam column back at u=0 and squeeze a whole tile into the last segment. */
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
      if (ay >= ax && ay >= az) { u = p.getX(i); v = p.getZ(i); }
      else if (ax >= az) { u = p.getZ(i); v = p.getY(i); }
      else { u = p.getX(i); v = p.getY(i); }
      out[i * 2] = u / tile; out[i * 2 + 1] = v / tile;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(out, 2));
  }
  /* ---------------------------------------------------------------- stepped terrace
   * Six redented slabs, MERGED into one component and one draw call. Each is a single extrusion
   * of a closed redented plan rather than a wide box crossed by a deep one: crossed boxes put
   * their top faces in the same plane facing the same way over the whole intersection, and that
   * z-fights. Consecutive slabs meet as OPPOSED faces -- one slab's top against the next slab's
   * bottom -- which is how solids are meant to meet and does not fight. */
  {
    const geo = mergeGeos(
      (G.terrace as number[][]).map(([y0, y1, a, r]) => extrudeSlab(redentedShape(a, r), y0, y1)));
    // Ground dirt on the lower plinth, delivered as a per-vertex tint rather than a second
    // material. The plate measures #7F7F79 down there against #9E9B91 higher up -- two crop
    // measurements, whose ratio (0.804, 0.819, 0.834) is the tint at y=0, fading out by y=1.60.
    // A second material would cost a draw call and a shader switch to say that the bottom of a
    // wall is dirtier than the top.
    tintByHeight(geo, 0, 1.60, [0.804, 0.819, 0.834]);
    boxUv(geo, G.wear.tile);
    add('terrace', 'Stepped terrace', geo, 'stone');
  }
  colliders['terrace'] = {
    shape: 'cylinder', localCenter: [0, 7.0, 0], radius: 4.0, height: 14.0, axis: [0, 1, 0],
    notes: 'Asset declares collider "cylinder" rather than the building-part default box, because '
         + 'the bell and spire are round in plan and a box proxy would leave a player colliding '
         + 'with empty air at the corners.',
  };

  /* ---------------------------------------------------------------- arched niches
   * Four, one per face, as an InstancedMesh: one geometry and one submission for the set.
   *
   * The frame is a plate with a REAL arched aperture -- a Shape carrying a hole -- extruded 0.40 m
   * and standing 0.30 m proud of the terrace face, and the dark back panel sits 0.23 m behind the
   * frame's front plane. That depth is the point: a niche is a concavity, and a flat dark rectangle
   * painted on a wall is not one. The panel stands 0.05 m proud of the wall it is set against
   * rather than flush with it, so no two surfaces here are coplanar and co-facing. */
  {
    const n = G.niche;
    const outline = new THREE.Shape();
    outline.moveTo(-n.frameW / 2, 0);
    outline.lineTo(n.frameW / 2, 0);
    outline.lineTo(n.frameW / 2, n.frameH);
    outline.lineTo(-n.frameW / 2, n.frameH);
    outline.closePath();
    // Walk the aperture from the bottom of the RIGHT jamb, up it, over the head from angle 0 to
    // PI, then down the left jamb. Written the other way -- an arc from PI to 0 -- the sweep ran
    // through the bottom of the circle instead of over the top, and the arch head was left filled
    // solid with the arc's own seam z-fighting across it: a square window with a ghost arch drawn
    // on it. The direction of a half-circle is not a detail here; it is the feature.
    const hole = new THREE.Path();
    hole.moveTo(n.archR, 0.18);
    hole.lineTo(n.archR, n.spring);
    hole.absarc(0, n.spring, n.archR, 0, Math.PI, false);
    hole.lineTo(-n.archR, 0.18);
    hole.closePath();
    outline.holes.push(hole);

    const frame = new THREE.ExtrudeGeometry(outline, { depth: n.depth, bevelEnabled: false, curveSegments: 8 });
    frame.translate(0, 0, -0.10);
    frame.computeVertexNormals();
    boxUv(frame, G.wear.tile);
    addInst('niche-frames', 'Arched niche frames', frame, 'stone', quad(n.radius, n.y));

    const panel = boxAt(0, n.frameH / 2 - 0.06, 0.03, n.frameW - 0.42, n.frameH - 0.30, 0.06);
    addInst('niche-panels', 'Niche back panels', panel, 'shadow', quad(n.radius + 0.02, n.y));
  }

  /* ---------------------------------------------------------------- bell dome
   * One lathe carrying the moulded rings at its foot, the bell, and the drum NECK the harmika
   * stands on, because a ring is a profile step and not a separate mesh. Its base is sunk to
   * y=3.70, inside the terrace's top slab, and its top runs 0.15 m up INTO the harmika's lower
   * slab: LatheGeometry is open at both ends, and an open rim meeting a surface -- or, as the
   * first build had it, stopping 0.25 m short of one -- is a seam or a gap the turntable reads.
   *
   * The profile is the proxy's, not a guess: radius-by-height off the Meshy reference scaled to
   * 14 m reads 2.36 at 4.1, 2.03 at 5.1, 1.90 at 6.4, then rounds over 1.3 m to a 0.72 neck at
   * 7.9. That is a BELL -- near-vertical flanks and a domed shoulder -- and the first build's
   * quarter-cosine from the foot was an ogive, full only at the haunch and pointed at the top. */
  {
    const b = G.bell;
    const pts: number[][] = [
      [2.70, b.y0], [2.70, 4.02], [2.54, 4.04], [2.54, 4.24], [2.70, 4.26], [2.70, 4.46],
      ...(b.body as number[][]),
    ];
    // The shoulder: a quarter-ellipse from the top of the body to the crown edge, ending with a
    // horizontal tangent; then the flat crown inward to the neck, which runs up into the block.
    const s = b.shoulder;
    for (let i = 1; i <= s.steps; i++) {
      const t = i / s.steps;
      pts.push([s.rEdge + (s.r - s.rEdge) * Math.cos(t * Math.PI / 2), s.y + (s.yTop - s.y) * Math.sin(t * Math.PI / 2)]);
    }
    pts.push([b.neck.r, s.yTop]);
    pts.push([b.neck.r, b.neck.yTop]);
    const geo = lathe(pts, b.seg);
    latheUv(geo, G.wear.tile, 2.2);
    add('bell-dome', 'Bell dome', geo, 'stucco');
  }

  /* ---------------------------------------------------------------- harmika
   * The square block between the bell and the spire, and the only orthogonal thing above the
   * terrace. Two merged boxes standing on the bell's neck, which runs up inside the lower slab;
   * the upper block's 1.52 m top is what caps the spire lathe's open base. */
  {
    const geo = boxes(G.harmika as number[][]);
    boxUv(geo, G.wear.tile);
    add('harmika', 'Harmika block', geo, 'stucco');
  }

  /* ---------------------------------------------------------------- ringed spire
   * Sixteen rings as ONE lathe profile, not sixteen meshes. At 24 radial segments that is 2,300
   * triangles in a single geometry and a single draw call; the same rings as separate cylinders
   * would be sixteen geometries against a ceiling of thirty-two, for an identical picture. */
  {
    const s = G.spire;
    const pts = ringedTaper(s.y0, s.y1, s.r0, s.r1, s.rings, s.bulge);
    pts.push([0, s.y1]);   // close the top on the axis; an open rim reads as a hole in silhouette
    const geo = lathe(pts, s.seg);
    latheUv(geo, G.wear.tile, 0.5);
    add('spire', 'Ringed spire', geo, 'stucco');
  }

  /* ---------------------------------------------------------------- gilded finial
   * Closed on the axis at BOTH ends. The one gold surface on the prop, and the top 1.55 m of the
   * declared 14 m height. */
  {
    const f = G.finial;
    add('finial', 'Gilded finial', lathe([
      [0, f.y0], [0.26, f.y0 + 0.05], [0.26, f.y0 + 0.28], [0.20, f.y0 + 0.66],
      [0.13, f.y0 + 1.08], [0.055, f.y0 + 1.42],
      // The bud. The plate's finial is a teardrop with a small bulb at its tip, not a plain cone,
      // and at 1.7 m of a 14 m prop it is the only thing above the bell with a profile event.
      [0.085, f.y0 + 1.50], [0.06, f.y0 + 1.60], [0, f.y1],
    ], f.seg), 'gold');
  }
  /* ---------------------------------------------------------------- weathering
   * The plate's whitewash is PEELING -- crazed, with patches of grey render showing through and
   * dirt streaks running down the bell -- and the terrace carries lichen. The first build left
   * all of it out as "wear below the resolvable band", and it read as a clean plaster model.
   *
   * It is delivered as two Canvas 2D tiles assigned AFTER material construction, the route the
   * retail set uses for its brand fascias: the sculpt materials stay declared textureless (no
   * five-canvas procedural set, no per-pixel JavaScript, and the measured albedo is NOT thrown
   * away), and the whole of it is a few hundred path fills at 512 px -- single-digit milliseconds.
   * The canvas is a MULTIPLIER on the material colour, so every mark on it is a ratio measured on
   * the plate against the clean surface beside it; it is bound as both map and bumpMap, which
   * is what makes a peel patch read as a step in the surface rather than a stain.
   *
   * The measured dark-render patch is 0.483 of the clean whitewash and ships at 0.62: the
   * silhouette gate classes any surface at the backdrop's luma of 58 as a HOLE, and the bell's
   * shaded side already renders near 120, where a 0.48 patch would land at 58. The lichen tones
   * are relative too, and a multiplier cannot brighten, so the crust's measured yellow SHIFT is
   * carried with its blue channel at 0.86 and the pale channels held near 1.0 rather than raised.
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

    /** Draw one tile. kind selects the stucco recipe (peel, crazing, drips) or the stone one
     *  (lichen crust and moss, lighter crazing). Every mark is built ONCE as a Path2D and then
     *  filled at nine wrapped offsets, so the tile is seamless under RepeatWrapping. */
    function wearTile(kind: 'stucco' | 'stone', seed: number): HTMLCanvasElement | null {
      if (!hasDom) return null;
      const cv = document.createElement('canvas');
      cv.width = cv.height = size;
      const ctx = cv.getContext('2d');
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
      // An irregular patch: a random WALK of overlapping discs, filled once as a union (so the
      // outline is ragged but the tone inside is flat, like a flake that has come away in one
      // piece) and once more at a smaller radius for a darker core. Discs scattered about a
      // centre were tried first and rendered as polka dots; a flake is a worm, not a spot. Every
      // number is drawn from the seeded stream so the nine wrapped copies are identical.
      const blotch = (tone: number[], count: number, rad: number, alpha: number) => {
        for (let i = 0; i < count; i++) {
          const halo = new Path2D(), core = new Path2D();
          let cx = r() * S, cy = r() * S, a = r() * Math.PI * 2;
          const R = rad * S * (0.5 + r()), n = 8 + Math.floor(r() * 16);
          for (let k = 0; k < n; k++) {
            a += (r() - 0.5) * 2.2;
            cx += Math.cos(a) * R * 0.4; cy += Math.sin(a) * R * 0.4;
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
      // Crazing: short random walks, stroked thin. The plate's cracks are a network of cells a
      // few centimetres across; at 512 px over a 3 m tile one pixel is 6 mm.
      const crazing = (tone: number[], count: number, alpha: number) => {
        const p = new Path2D();
        for (let i = 0; i < count; i++) {
          let x = r() * S, y = r() * S;
          p.moveTo(x, y);
          const n = 4 + Math.floor(r() * 9), step = S * 0.016;
          let a = r() * Math.PI * 2;
          for (let k = 0; k < n; k++) {
            a += (r() - 0.5) * 1.6;
            x += Math.cos(a) * step * (0.5 + r()); y += Math.sin(a) * step * (0.5 + r());
            p.lineTo(x, y);
          }
        }
        wrapped(() => { ctx.strokeStyle = css(tone, alpha); ctx.lineWidth = 1.25; ctx.stroke(p); });
      };
      // Drips: vertical streaks fading downward. v is world height on every mapping used here,
      // so "down the canvas" is down the prop.
      const drips = (tone: number[], count: number, alpha: number) => {
        for (let i = 0; i < count; i++) {
          const x = r() * S, y0 = r() * S, len = S * (0.05 + 0.22 * r()), w = 1.5 + 2.5 * r();
          const a = alpha * (0.5 + 0.5 * r());
          wrapped(() => {
            const g = ctx.createLinearGradient(0, y0, 0, y0 - len);
            g.addColorStop(0, css(tone, a)); g.addColorStop(1, css(tone, 0));
            ctx.fillStyle = g; ctx.fillRect(x - w / 2, y0 - len, w, len);
          });
        }
      };
      // Fine grain: a scatter of near-transparent specks, so a flat area is not flat.
      const grain = (tone: number[], count: number, alpha: number) => {
        const p = new Path2D();
        for (let i = 0; i < count; i++) { const x = r() * S, y = r() * S, d = 0.6 + r() * 1.4; p.rect(x, y, d, d); }
        wrapped(() => { ctx.fillStyle = css(tone, alpha); ctx.fill(p); });
      };

      if (kind === 'stucco') {
        // Order matters: the soft mottle first, so the harder flakes and the crack network sit on
        // top of it, and the dark render cores last.
        blotch(W.mottle, 14, 0.13, 0.7);
        blotch(W.peelLight, 9, 0.085, 0.8);
        blotch(W.peelDark, 5, 0.03, 0.85);
        crazing(W.crack, 640, 0.62);
        drips(W.drip, 48, 0.6);
        grain(W.crack, 1600, 0.10);
      } else {
        blotch(W.mottle, 12, 0.12, 0.6);
        blotch(W.crust, 16, 0.07, 0.9);
        blotch(W.moss, 9, 0.03, 0.8);
        crazing(W.crack, 260, 0.38);
        grain(W.moss, 1400, 0.12);
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
    bind(materials.stucco, wearTile('stucco', 20260826));
    bind(materials.stone, wearTile('stone', 8261403));
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
