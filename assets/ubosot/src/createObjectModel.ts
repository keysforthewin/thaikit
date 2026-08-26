import * as THREE from 'three';

/**
 * Ubosot -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 12.00 x 12.00 x 24.00 m, origin base-center, +Y up, long axis on Z.
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
    "id": "ubosot",
    "name": "Ubosot",
    "exportName": "Ubosot",
    "envelope": "Envelope 12.00 x 12.00 x 24.00 m, origin base-center, +Y up, long axis on Z.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
    "materials": [
      {
        "id": "stone",
        "color": 12428954,
        "roughness": 0.92,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "red",
        "color": 7418666,
        "roughness": 0.8,
        "metalness": 0
      },
      {
        "id": "tile",
        "color": 12814946,
        "roughness": 0.78,
        "metalness": 0
      },
      {
        "id": "green",
        "color": 7236168,
        "roughness": 0.76,
        "metalness": 0
      },
      {
        "id": "gilt",
        "color": 9071698,
        "roughness": 0.36,
        "metalness": 0.3,
        "envMapIntensity": 1.2
      },
      {
        "id": "dark",
        "color": 5522747,
        "roughness": 0.96,
        "metalness": 0
      }
    ],
    "geometry": {
      "pitch": 1.056,
      "platform": [
        [
          0,
          0.55,
          6,
          12
        ],
        [
          0.55,
          1.1,
          5.72,
          11.72
        ],
        [
          1.1,
          1.75,
          5.46,
          11.46
        ]
      ],
      "notch": {
        "halfX": 1.9,
        "zInner": 9.6
      },
      "stair": {
        "steps": 5,
        "z0": 9.6,
        "z1": 12,
        "top": 1.75,
        "treadHalfX": 1.6
      },
      "column": {
        "hw": 0.26,
        "y0": 1.75,
        "y1": 6.1,
        "insetX": 4.86,
        "insetZ": 10.4,
        "longCount": 9,
        "shortCount": 3
      },
      "wall": {
        "y0": 1.75,
        "y1": 6.3,
        "hx": 3.6,
        "hz": 9.6
      },
      "door": {
        "w": 2.2,
        "h": 3.6,
        "y": 1.75,
        "z": 9.6
      },
      "tiers": [
        [
          6.1,
          7.45,
          5.45,
          11.55
        ],
        [
          7.45,
          8.65,
          3.95,
          9
        ],
        [
          8.65,
          11.4,
          2.7,
          6.6
        ]
      ],
      "band": 0.42,
      "sema": {
        "count": 8,
        "h": 1.05
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

export function createUbosotModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Ubosot';

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


  /* ---------------------------------------------------------------- stone platform
   * Three stepped slabs and a five-tread stair, all the same white stone and therefore ONE
   * component and ONE draw call. The stair is cut into the plan as a notch on the +Z short end:
   * hung off the outside, a flight projecting past a 24.00 m platform would push the bounding box
   * off-centre and over the declared length at one end. */
  {
    const N = G.notch, ST = G.stair;
    const parts: THREE.BufferGeometry[] = (G.platform as number[][]).map(
      ([y0, y1, hx, hz]) => extrudeSlab(notchedRect(hx, hz, N.halfX, N.zInner), y0, y1));

    // Five treads, each occupying only its own going. Stacked wedges all reaching z=12.00 would put
    // five outer faces in one plane facing one way.
    const run = (ST.z1 - ST.z0) / ST.steps, rise = ST.top / ST.steps;
    for (let i = 0; i < ST.steps; i++) {
      const z1 = ST.z1 - i * run, h = (i + 1) * rise;
      parts.push(boxAt(0, h / 2, z1 - run / 2, ST.treadHalfX * 2, h, run));
    }

    const geo = mergeGeos(parts);
    // Ground dirt and the black weathering streaks the plate shows on the plinth, as a per-vertex
    // tint rather than a second material: the plate's bottom courses measure distinctly darker
    // than the deck above them.
    tintByHeight(geo, 0, 1.75, [0.80, 0.81, 0.79]);
    add('platform', 'Stone platform and stair', geo, 'stone');
    colliders['platform'] = {
      shape: 'box', localCenter: [0, 6.0, 0], halfExtents: [6.0, 6.0, 12.0],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level '
           + 'builder collides with the hall, not with its individual columns.',
    };
  }

  /* ---------------------------------------------------------------- wall body
   * A SOLID box inside the colonnade. The hall is an exterior shell only ever seen from outside,
   * so there is no interior: an interior would cost draw calls, geometries and VRAM for something
   * nobody sees, and a solid body also means the doorway needs no opening cut in it, which removes
   * all four reveal faces and the z-fighting they cause. */
  {
    const W = G.wall;
    add('wall', 'Hall wall body', boxAt(0, (W.y0 + W.y1) / 2, 0, W.hx * 2, W.y1 - W.y0, W.hz * 2),
      'stone');
  }

  /* ---------------------------------------------------------------- doorway
   * The one opening, on the +Z short end at the head of the stair. It stands 0.03 m PROUD of the
   * wall face rather than recessed into it: the wall is a solid mass, so a panel sunk into it is
   * inside the solid and invisible. What makes it read as a doorway is the surround standing in
   * front of it, not the panel being sunk. */
  {
    const D = G.door;
    add('doorway', 'Doorway', boxAt(0, D.y + D.h / 2, D.z + 0.03, D.w, D.h, 0.06), 'dark');
  }

  /* ---------------------------------------------------------------- peristyle columns
   * Twenty-four square red columns as ONE InstancedMesh: one geometry, one submission. As separate
   * meshes they would be twenty-four draw calls of the twenty-four available, for twenty-four
   * copies of one box. */
  {
    const C = G.column;
    const unit = mergeGeos([
      boxAt(0, 0, 0, C.hw * 2, C.y1 - C.y0, C.hw * 2),
      // A slightly wider capital block at the head, where the plate shows the column meeting the
      // eaves beam. Sunk 0.02 m into the shaft so no two top faces share a plane.
      boxAt(0, (C.y1 - C.y0) / 2 - 0.13, 0, C.hw * 2.4, 0.26, C.hw * 2.4),
    ]);
    const cy = (C.y0 + C.y1) / 2;
    const mats: THREE.Matrix4[] = [];
    for (let i = 0; i < C.longCount; i++) {
      const z = -C.insetZ + (2 * C.insetZ * i) / (C.longCount - 1);
      mats.push(new THREE.Matrix4().setPosition(-C.insetX, cy, z));
      mats.push(new THREE.Matrix4().setPosition(C.insetX, cy, z));
    }
    for (let i = 1; i <= C.shortCount; i++) {
      const x = -C.insetX + (2 * C.insetX * i) / (C.shortCount + 1);
      mats.push(new THREE.Matrix4().setPosition(x, cy, -C.insetZ));
      mats.push(new THREE.Matrix4().setPosition(x, cy, C.insetZ));
    }
    addInst('columns', 'Peristyle columns', unit, 'red', mats);
  }

  /* ---------------------------------------------------------------- roof: tile fields
   * Three nested TRUNCATED gable prisms, merged into one component. Each is the cross-section
   * trapezoid of one tier extruded along the hall's length -- the roof is a prism, so a prism is
   * what it should be built as, and a box decomposition of a 46-degree pitch is not a low-poly
   * roof but a staircase. */
  {
    const T = G.tiers as number[][], B = G.band;
    const orange: THREE.BufferGeometry[] = [];
    const green: THREE.BufferGeometry[] = [];
    for (const [y0, y1, hx, hz] of T) {
      // The green eaves strip is the bottom B metres of the slope, as its own short trapezoid, and
      // the orange field is everything above it. They meet at one height as OPPOSED faces -- the
      // green's top and the orange's bottom -- which is how solids are meant to meet.
      const ySplit = y0 + B;
      green.push(extrudeAlongZ(tierProfile(hx, y0, ySplit, G.pitch), -hz, hz));
      orange.push(extrudeAlongZ(tierProfile(hx - B / G.pitch, ySplit, y1, G.pitch), -hz + 0.01, hz - 0.01));
    }
    add('roof-tile', 'Tile roof fields', mergeGeos(orange), 'tile');
    add('roof-band', 'Green eaves bands', mergeGeos(green), 'green');
  }

  /* ---------------------------------------------------------------- roof: barge boards and ridge
   * The white bargeboards that run up each gable rake, and the red ridge and eaves trim. Two
   * components because they are two materials; each is one merged geometry.
   *
   * A board is a box ROTATED to the rake angle rather than a stair of small boxes: at 46 degrees a
   * stepped approximation reads as serration from any distance at all. */
  {
    const T = G.tiers as number[][];
    const white: THREE.BufferGeometry[] = [];
    const red: THREE.BufferGeometry[] = [];
    for (const [y0, y1, hx, hz] of T) {
      const inset = (y1 - y0) / G.pitch;
      const halfTop = Math.max(hx - inset, 0);
      const run = hx - halfTop, rise = y1 - y0;
      const len = Math.hypot(run, rise) + 0.10;
      // atan2(RUN, RISE), not atan(pitch). rotateZ maps the box's +Y to (-sin, cos), so aiming it
      // along the rake (-run, rise) needs sin = run/len -- the COMPLEMENT of the pitch angle. At
      // this roof's 46 degrees the two are only three degrees apart, which is why the mistake
      // survived here and was only caught on the 33-degree hall, where it stood the boards off
      // the roof like scaffolding.
      const ang = Math.atan2(run, rise);
      for (const zs of [-1, 1]) {
        for (const xs of [-1, 1]) {
          // Bargeboard along one rake of one gable end.
          const g = new THREE.BoxGeometry(0.20, len, 0.30);
          g.rotateZ(xs * ang);
          g.translate(xs * (hx + halfTop) / 2, (y0 + y1) / 2, zs * (hz + 0.14));
          white.push(g);
        }
        // Red fascia along the same rake, sitting just outside the white board.
        for (const xs of [-1, 1]) {
          const g = new THREE.BoxGeometry(0.12, len, 0.14);
          g.rotateZ(xs * ang);
          g.translate(xs * (hx + halfTop) / 2, (y0 + y1) / 2, zs * (hz + 0.34));
          red.push(g);
        }
      }
      // Red eaves fascia along both long sides, hung on the outside of the tile edge.
      for (const xs of [-1, 1]) {
        red.push(boxAt(xs * (hx + 0.08), y0 + 0.10, 0, 0.16, 0.30, hz * 2 + 0.30));
      }
    }
    // The ridge cap on the topmost tier.
    const top = T[T.length - 1];
    red.push(boxAt(0, top[0] + top[2] * G.pitch + 0.06, 0, 0.34, 0.24, top[3] * 2 + 0.40));
    add('barge-boards', 'Bargeboards', mergeGeos(white), 'stone');
    add('roof-trim', 'Ridge and eaves trim', mergeGeos(red), 'red');
  }

  /* ---------------------------------------------------------------- gable pediments
   * The carved gilt field in each gable of the topmost tier. Two of them, standing proud of the
   * tier's end face so they overlap it rather than meeting it in its own plane. */
  {
    const T = G.tiers as number[][];
    const [y0, , hx, hz] = T[T.length - 1];
    const apex = y0 + hx * G.pitch;
    const tri = new THREE.Shape();
    tri.moveTo(-hx + 0.34, y0 + 0.20);
    tri.lineTo(hx - 0.34, y0 + 0.20);
    tri.lineTo(0, apex - 0.30);
    tri.closePath();
    const parts: THREE.BufferGeometry[] = [];
    for (const zs of [-1, 1]) {
      const g = new THREE.ExtrudeGeometry(tri, { depth: 0.22, bevelEnabled: false, curveSegments: 2 });
      g.translate(0, 0, zs > 0 ? hz - 0.06 : -hz - 0.16);
      g.computeVertexNormals();
      parts.push(g);
    }
    add('pediment', 'Gable pediments', mergeGeos(parts), 'gilt');
  }

  /* ---------------------------------------------------------------- chofa horn finials
   * The curved horns at every gable apex and every rake foot. The registry notes call them the
   * feature that separates an ubosot from any other rectangular hall, so they are authored as real
   * CURVES -- six tapering segments sampled along an arc -- and not as spikes: a straight spike at
   * a ridge end reads as a lightning rod.
   *
   * Fourteen of them, as ONE InstancedMesh, each instance carrying its own yaw and its own mirror
   * through a negative scale. */
  {
    const T = G.tiers as number[][];
    const segs: THREE.BufferGeometry[] = [];
    const n = 6;
    const at = (u: number) => [0.08 + 0.36 * Math.sin(u * Math.PI * 0.46), 0.04 + 0.90 * u];
    for (let j = 0; j < n; j++) {
      const a = at(j / n), b = at((j + 1) / n);
      const dx = b[0] - a[0], dy = b[1] - a[1];
      const w = 0.19 * (1 - j / n) + 0.05;
      const g = new THREE.BoxGeometry(w, Math.hypot(dx, dy) + 0.04, w);
      g.rotateZ(Math.atan2(-dx, dy));
      g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 0);
      segs.push(g);
    }
    const unit = mergeGeos(segs);

    const mats: THREE.Matrix4[] = [];
    const place = (x: number, y: number, z: number, yaw: number, mirror: number) =>
      mats.push(new THREE.Matrix4().compose(
        new THREE.Vector3(x, y, z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
        new THREE.Vector3(mirror, 1, 1)));

    // Two at the apex of the topmost gable, one facing each way along the ridge -- the pair that
    // makes the roofline read.
    const top = T[T.length - 1];
    const apex = top[0] + top[2] * G.pitch;
    place(0, apex - 0.50, top[3] + 0.10, 0, 1);
    place(0, apex - 0.50, -top[3] - 0.10, Math.PI, 1);
    // One at each rake foot of every tier: four corners per tier, mirrored so each curls outward.
    for (const [y0, , hx, hz] of T) {
      for (const zs of [-1, 1]) {
        for (const xs of [-1, 1]) {
          place(xs * (hx + 0.06), y0 + 0.16, zs * (hz + 0.16), zs > 0 ? 0 : Math.PI, xs);
        }
      }
    }
    addInst('chofa', 'Chofa horn finials', unit, 'gilt', mats);
  }

  /* ---------------------------------------------------------------- bai sema boundary stones
   * Eight pointed stones on their own pedestals around the platform. The registry notes are
   * explicit that these are what make the building an ORDINATION hall rather than a general
   * assembly hall, so they belong to this asset and are not optional dressing. One instanced
   * geometry, eight placements: four at the corners and four at the mid-points of the sides. */
  {
    const S = G.sema;
    const leaf = new THREE.Shape();
    leaf.moveTo(-0.20, 0);
    leaf.lineTo(0.20, 0);
    leaf.lineTo(0.20, S.h * 0.52);
    leaf.quadraticCurveTo(0.20, S.h * 0.92, 0, S.h);
    leaf.quadraticCurveTo(-0.20, S.h * 0.92, -0.20, S.h * 0.52);
    leaf.closePath();
    const blade = new THREE.ExtrudeGeometry(leaf, { depth: 0.13, bevelEnabled: false, curveSegments: 5 });
    blade.translate(0, 0.46, -0.065);
    blade.computeVertexNormals();
    const unit = mergeGeos([
      boxAt(0, 0.10, 0, 0.72, 0.20, 0.72),
      boxAt(0, 0.32, 0, 0.58, 0.26, 0.58),
      blade,
    ]);
    const spots: number[][] = [
      [-5.55, -11.55], [5.55, -11.55], [-5.55, 11.55], [5.55, 11.55],
      [-5.55, 0], [5.55, 0], [0, -11.55], [0, 11.55],
    ];
    addInst('sema', 'Bai sema boundary stones', unit, 'stone',
      spots.map(([x, z]) => new THREE.Matrix4().setPosition(x, 0.55, z)));
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
  const root = createUbosotModel(options);
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
