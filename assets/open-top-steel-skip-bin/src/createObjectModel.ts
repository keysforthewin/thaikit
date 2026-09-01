import * as THREE from 'three';

/**
 * Open-Top Steel Skip Bin -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why the ring loft, the
 * merge and the oval helpers below are hand-rolled -- anything under three/examples/jsm is a
 * second import.
 *
 * Envelope 1.5 x 1.05 x 1.0 m measured ACROSS THE TOP RIM (the widest section), origin
 * base-center, +Y up, +Z the front wall.
 *
 * The prop is an OPEN VESSEL, not a box: one lofted sheet-metal surface runs up the outside, over
 * the rolled rim and back down the inside to a real interior floor. The walls lean OUTWARD, so the
 * mouth is the widest section -- lose that and it stops being this bin.
 *
 * Budget (thaikit medium class): 2 draw calls, 2 materials, 4 unique geometries, 2000 triangles.
 * Everything welded to the shell -- rim, plinth, feet, hand-hole bezels -- is merged into ONE
 * geometry, because a component is a draw call and a part hung off its own pivot can never be
 * merged afterwards. The four lifting lugs are the second draw call, as one InstancedMesh.
 */

export type ProceduralModelOptions = {
  wireframe?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
  baseUrl?: string;
};

export type ProceduralModelRuntime = {
  nodes: Record<string, THREE.Object3D>;
  meshes: Record<string, THREE.Mesh>;
  sockets: Record<string, THREE.Object3D>;
  colliders: Record<string, unknown>;
  destructionGroups: Record<string, THREE.Object3D[]>;
};

/* --------------------------------------------------------------------------- configuration */

const CONFIG = {
  // Measured tones. The interior is LIFTED from its measurement and the reason is arithmetic, not
  // taste: the plate's interior reads luma 98.9, and a face enclosed by the prop's own silhouette
  // renders at ~0.56 of its painted luma at the worst turntable azimuth -- 98.9 would land at 55,
  // below the harness backdrop's 58, and the gate would read the whole open mouth as a hole
  // punched through the model.
  /* ENVELOPE RE-BASED for the rust canvas.
   *
   * A canvas tile is a MULTIPLY: it can only darken what the vertex colour already is. The shell
   * has to carry two tones that are not orderings of each other -- rust #c98a58 (201,138,88) and
   * the pale grey-blue steel it eats into, #b0b8bc (176,184,188) -- and no single vertex colour
   * multiplied down reaches both. So the shell's vertex colour becomes the per-channel MAXIMUM of
   * every tone it must carry, (201,184,188) = #c9b8bc, and the canvas paints the tones back:
   *
   *     rust     (1.000, 0.749, 0.467)
   *     pale     (0.898, 1.000, 1.000)
   *     dark run (0.527, 0.402, 0.255)
   *
   * The envelope was scaled up once after measuring: over a matched band -- the lower front face,
   * 0.60 to 0.85 of the silhouette -- the plate reads luma 133 at median saturation 0.59 and the
   * first tiled build read 102 at 0.63. The saturation was already right, so the fix was a straight
   * 1.30x on the envelope and NOT a change to the ratios: #c9b8bc -> #ffeff4.
   *
   * The envelope is never seen: every texel of the tile is one of those ratios or between them.
   * Authored against the plate, whose front face profiles at luma 144-169 and saturation 0.44-0.66
   * over the rust and pales toward the rim -- the first build shipped ALL of that as one flat
   * #c98a58, which is what the asset's own notes had flagged as the binding constraint.
   */
  colors: {
    exterior: 0xffeff4, // envelope; the canvas paints the rust and the pale steel back out of it
    // LIFTED from the measured #60645c (luma 98.9). A face enclosed by the prop's own silhouette
    // renders at ~0.56 of its painted luma at the worst turntable azimuth, and 98.9 would land at
    // 55 -- below the harness backdrop's 58 -- so the gate would read the whole open mouth as a
    // hole punched through the model. 182 was more headroom than that needs and made the inside
    // read brighter than the outside; 166 lands at 93 in the same worst case, clear of the gate's
    // 34..82 window by 11.
    interior: 0xa4aa9e,
    rim: 0xd8cfbc,      // crops/rim.png measured #897662 on a shadowed length; lit rim reads 162-170
    recess: 0x9a938a,   // hand-hole backing, luma 147 -> ~82 side-lit, clear of the backdrop
    debris: 0x6a5a44,   // rubble in the bottom; the plate has a heap of it
  },
  rust: { size: 1024, seed: 4711, bump: 0.0035 },
  materials: [
    { id: 'weathered-steel', color: 0xffffff, roughness: 0.82, metalness: 0.15, vertexColors: true },
    // The lugs are the plate's DARK punctuation on a pale rim -- heavy rusted castings, not the light
    // tabs this shipped as. Held on chroma: luma 110 renders near 60, inside the turntable gate's
    // 34..82 backdrop window, but at saturation 0.53 against its 0.16 ceiling.
    { id: 'bracket-steel', color: 0x8a6440, roughness: 0.78, metalness: 0.22, vertexColors: false },
  ],
  // Rounded-rectangle sections. hw/hd are half-extents; r is the vertical corner radius.
  /* PLAN CORRECTED 2026-08-31, from 1.50 x 1.00 m to 0.80 x 0.78 m. Height is unchanged at 1.05.
   *
   * The declared 1.50 x 1.05 x 1.00 made this a long low skip. It is not one: the plate is a
   * chest-height square steel hopper photographed steeply from above -- a tapering square tub on
   * four corner feet with lifting eyes and hinge lugs -- and a top-down view FORESHORTENS height,
   * so it is at least as tall as it looks. Two independent single-view reconstructions agree with
   * the plate and not with the declaration:
   *
   *     width/height   depth/height
   *     Meshy proxy       0.66          0.64
   *     trellis           0.84          0.80
   *     mean              0.75          0.72
   *     BUILT             1.43          0.95
   *
   * They are 27% apart on width -- looser than one would like -- but they agree in DIRECTION and
   * both read the tub as square in plan, which the build did not (it was 1.5:1). At the unchanged
   * 1.05 m height the mean gives 0.79 x 0.76; shipped at 0.80 x 0.78. hw scales by 0.533 and hd by
   * 0.780, so the wall's inward taper toward the base (0.82 of the head) is preserved exactly. */
  rings: {
    wallFoot:  { hw: 0.328, hd: 0.320, r: 0.065, y: 0.130 },
    wallHead:  { hw: 0.400, hd: 0.390, r: 0.065, y: 0.985 },
    rimOuter:  { hw: 0.400, hd: 0.390, r: 0.065, y: 1.050 },
    rimInner:  { hw: 0.384, hd: 0.367, r: 0.059, y: 1.050 },
    innerFoot: { hw: 0.315, hd: 0.300, r: 0.059, y: 0.170 },
    plinthTop: { hw: 0.333, hd: 0.328, r: 0.065, y: 0.130 },
    plinthBot: { hw: 0.333, hd: 0.328, r: 0.065, y: 0.090 },
  },
  cornerSegments: 5, // 4 quadrants x 6 points = 24 points per ring
  feet: { w: 0.13, h: 0.09, d: 0.10, inset: 0.09 },
  handHole: { y: 0.86, a: 0.078, b: 0.058, bezel: 0.018, proud: 0.008, recess: 0.012, segments: 16 },
  lug: { w: 0.12, h: 0.08, t: 0.038, y: 1.012 },
};

/* ------------------------------------------------------------------------- small utilities */

type Pt = { x: number; z: number };

/**
 * A rounded rectangle as a closed CCW ring viewed from +Y, four quadrant arcs joined by the
 * straight runs between them. Returns 4 * (cornerSegments + 1) points.
 */
function roundedRectRing(hw: number, hd: number, r: number, seg: number): Pt[] {
  const rad = Math.min(r, Math.min(hw, hd) * 0.98);
  const cx = hw - rad;
  const cz = hd - rad;
  const centres = [
    { x: +cx, z: +cz },
    { x: -cx, z: +cz },
    { x: -cx, z: -cz },
    { x: +cx, z: -cz },
  ];
  const pts: Pt[] = [];
  for (let q = 0; q < 4; q += 1) {
    const c = centres[q];
    for (let i = 0; i <= seg; i += 1) {
      const a = ((q * 90 + (i * 90) / seg) * Math.PI) / 180;
      pts.push({ x: c.x + rad * Math.cos(a), z: c.z + rad * Math.sin(a) });
    }
  }
  return pts;
}

/** A growable non-indexed triangle soup carrying position and colour. */
class Soup {
  pos: number[] = [];
  col: number[] = [];
  private c = new THREE.Color();

  tri(a: THREE.Vector3, b: THREE.Vector3, cc: THREE.Vector3, hex: number): void {
    this.pos.push(a.x, a.y, a.z, b.x, b.y, b.z, cc.x, cc.y, cc.z);
    // Vertex colours multiply in LINEAR space, so the colour must be converted out of sRGB or the
    // whole prop ships washed out against its measured albedo.
    this.c.setHex(hex, THREE.SRGBColorSpace);
    for (let i = 0; i < 3; i += 1) this.col.push(this.c.r, this.c.g, this.c.b);
  }

  /** Two triangles over a quad given in order; the caller decides the winding. */
  quad(a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3, d: THREE.Vector3, hex: number): void {
    this.tri(a, b, c, hex);
    this.tri(a, c, d, hex);
  }

  geometry(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    // Every vertex of every merged piece carries a colour. A vertexColors material reads the
    // attribute out of EVERY geometry bound to it and renders BLACK where it is missing.
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.computeVertexNormals();
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uvs(g), 2));
    return g;
  }

  /**
   * AROUND-BY-ALONG UVs.
   *
   * `v` is height over the prop's own 1.05 m, so the tile maps ONCE up the tub and its top row is
   * the rim -- which is what lets the canvas put pale flaking at the rim and rust running down out
   * of it without the geometry having to say where the top is.
   *
   * `u` is the angle about +Y, TWICE around, which wraps the four walls continuously and leaves no
   * seam at a rounded corner the way a per-wall planar projection would. Two repeats rather than one
   * because the tile has to be square and the prop is not: at one repeat each of the four walls got
   * 0.115 of the tile -- 118 texels across a 0.8 m wall against 1024 up a 1.05 m one, an aspect of
   * 6.6:1 -- and every mark on it smeared into a horizontal band. At two repeats it is 1.5:1.
   *
   * The INSIDE is not a separate region of the tile. It was, and that was wrong twice: it halved
   * the horizontal resolution again, and every near-horizontal face -- the rim top, the plinth, the
   * feet -- takes a planar branch that spans the whole tile width, so those faces sampled ACROSS
   * the boundary and the rim came back interior-grey. The interior is a darker VERTEX COLOUR with
   * the same rust multiplied over it, which is also what the plate shows: its inside is grey-green
   * with the same orange bleeding down the walls.
   *
   * Near-horizontal faces take a planar x/z, held to the top tenth of the tile so they sample the
   * pale flaking band -- `v` is world height, so a flat top face has ONE height and would otherwise
   * sample a single texel row.
   *
   * The soup is non-indexed triangles, so the atan2 wrap is unwrapped PER TRIANGLE against its
   * first vertex -- a triangle straddling +-PI would otherwise run the whole tile backwards across
   * itself, which reads as a hard bright seam down one corner.
   */
  private uvs(g: THREE.BufferGeometry): number[] {
    const pos = g.getAttribute('position') as THREE.BufferAttribute;
    const nrm = g.getAttribute('normal') as THREE.BufferAttribute;
    const H = 1.05, PLAN = 0.86, AROUND = 2;
    const out: number[] = [];
    for (let t = 0; t < pos.count; t += 3) {
      let flat = true;
      const us: number[] = [];
      for (let k = 0; k < 3; k += 1) {
        const i = t + k;
        if (Math.abs(nrm.getY(i)) <= 0.7) flat = false;
        us.push(Math.atan2(pos.getZ(i), pos.getX(i)) / (2 * Math.PI) + 0.5);
      }
      if (flat) {
        for (let k = 0; k < 3; k += 1) {
          const i = t + k;
          out.push(pos.getX(i) / PLAN + 0.5, 0.90 + (pos.getZ(i) / PLAN + 0.5) * 0.10);
        }
        continue;
      }
      for (let k = 0; k < 3; k += 1) {
        let u = us[k];
        if (k > 0) u -= Math.round(u - us[0]);          // unwrap against vertex 0
        out.push(u * AROUND, pos.getY(t + k) / H);
      }
    }
    return out;
  }
}

/**
 * The rust tile. Seeded, so the same prop is the same prop every time it is built, and drawn ONCE
 * as a post-construction canvas bound as `map` and `bumpMap` -- which costs no draw call, no
 * material and no geometry, and is the route the asset's notes named.
 *
 * GUARDED on `document`. check-coplanar.mjs, derive-colliders.mjs and the runtime probe all
 * evaluate this module under plain Node, where there is no canvas; unguarded, the prop passes the
 * browser render and then fails every Node-side gate with a stack trace that reads as a broken
 * module. `promote-model.mjs` constructs the module headlessly before it copies anything, so this
 * is a hard failure and not a cosmetic one. With no canvas the prop simply ships its envelope
 * colour, which is the pale end of its own range -- not wrong, just unweathered.
 *
 * `willReadFrequently` because a GPU-backed 2D canvas costs seconds for a few thousand path fills
 * and this draws about four thousand.
 *
 * The two halves are the two sides of the steel (see `Soup.uvs`): x 0..0.5 of the canvas is the
 * OUTSIDE, x 0.5..1 the inside. Blobs near either vertical edge of a half are drawn again on the
 * other side of that edge, so the angular wrap has no seam.
 */
function rustCanvas(size: number, seed: number): HTMLCanvasElement | null {
  if (typeof document === 'undefined') return null;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;

  let s = seed >>> 0;
  const rnd = () => (((s = (s * 1664525 + 1013904223) >>> 0) >>> 8) / 16777216);
  const rgb = (r: number, g: number, b: number) => `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
  const RUST = rgb(1.000, 0.749, 0.467);
  const PALE = rgb(0.898, 1.000, 1.000);
  const DARK = rgb(0.527, 0.402, 0.255);

  ctx.fillStyle = RUST;
  ctx.fillRect(0, 0, size, size);

  /** Every mark is drawn again across the left and right edges, so the two-repeat wrap has no seam. */
  const wrapped = (x: number, draw: (px: number) => void) => {
    draw(x);
    if (x < size * 0.14) draw(x + size);
    if (x > size * 0.86) draw(x - size);
  };
  /**
   * An ELLIPTICAL soft wash. Circles were the first attempt and every pale patch read as a polka
   * dot -- a hard blotch is camouflage, not weathering. Weathering is layers: a few very large,
   * very faint drifts, then medium washes over them, then streaks, then grain. Each is wider than
   * it is tall because rust spreads along a rolled steel panel faster than it climbs it.
   */
  const wash = (px: number, py: number, rx: number, ry: number, fill: string, a: number) => {
    const grd = ctx.createRadialGradient(px, py, 0, px, py, 1);
    grd.addColorStop(0, fill);
    grd.addColorStop(0.55, fill);
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.save();
    ctx.globalAlpha = a;
    ctx.translate(px, py);
    ctx.scale(rx, ry);
    ctx.translate(-px, -py);
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(px, py, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  // Canvas row 0 is the TOP of the prop (v = 1 with a CanvasTexture's default flipY), so the pale
  // steel sits high and the rust runs DOWN out of it -- the direction water leaves a rim, and what
  // the plate shows: its front face profiles pale near the rim and reaches luma 144-169 at
  // saturation 0.60-0.66 by mid-height.
  //
  // Layer 1: broad faint drift, pale high and dark low. Almost invisible alone; it is what stops
  // the layers above it reading as marks scattered on a flat field.
  for (let i = 0; i < 8; i += 1) {
    wrapped(rnd() * size, (px) => wash(px, rnd() * size * 0.38, 240 + rnd() * 330, 120 + rnd() * 190, PALE, 0.10 + rnd() * 0.13));
  }
  for (let i = 0; i < 9; i += 1) {
    wrapped(rnd() * size, (px) => wash(px, size * (0.45 + rnd() * 0.55), 200 + rnd() * 300, 110 + rnd() * 170, DARK, 0.07 + rnd() * 0.11));
  }
  // Layer 2: medium washes
  for (let i = 0; i < 22; i += 1) {
    wrapped(rnd() * size, (px) => wash(px, rnd() * size * 0.42, 80 + rnd() * 150, 44 + rnd() * 90, PALE, 0.10 + rnd() * 0.18));
  }
  for (let i = 0; i < 42; i += 1) {
    wrapped(rnd() * size, (px) => wash(px, rnd() * size, 60 + rnd() * 130, 34 + rnd() * 78, DARK, 0.07 + rnd() * 0.14));
  }
  // Layer 3: the runs. Widths spread hard -- a curtain of same-width stripes is as wrong as a field
  // of dots -- and a third of them are hairlines.
  for (let i = 0; i < 150; i += 1) {
    const y0 = rnd() * size * 0.46;
    const len = size * (0.10 + rnd() * rnd() * 0.62);
    const w = rnd() < 0.34 ? 1 + rnd() * 2 : 3 + rnd() * rnd() * 20;
    wrapped(rnd() * size, (px) => {
      const grd = ctx.createLinearGradient(0, y0, 0, y0 + len);
      grd.addColorStop(0, DARK);
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.globalAlpha = 0.12 + rnd() * 0.26;
      ctx.fillStyle = grd;
      ctx.fillRect(px - w / 2, y0, w, len);
      ctx.globalAlpha = 1;
    });
  }
  // Layer 4: pale flaking ALONG the rim, elongated with the roll. The near-horizontal faces are
  // pinned into this band, so it is also what the rim top, the plinth and the feet get.
  // Many and faint, not few and strong: at 80 marks of alpha 0.22-0.62 the band read as a row of
  // pale BEADS round the rim, and the near-horizontal faces -- which are all pinned into this same
  // band -- magnified them across the whole rim top.
  for (let i = 0; i < 220; i += 1) {
    wrapped(rnd() * size, (px) => wash(px, rnd() * size * 0.18, 12 + rnd() * 44, 4 + rnd() * 13, PALE, 0.09 + rnd() * 0.20));
  }
  // Layer 5: grain
  for (let i = 0; i < 7000; i += 1) {
    ctx.globalAlpha = 0.04 + rnd() * 0.10;
    ctx.fillStyle = rnd() < 0.5 ? DARK : PALE;
    ctx.fillRect(rnd() * size, rnd() * size, 1 + rnd() * 2, 1 + rnd() * 3);
  }
  ctx.globalAlpha = 1;
  return c;
}

const v3 = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
const at = (p: Pt, y: number) => v3(p.x, y, p.z);

/** Loft between two rings. `outward` picks the winding that sends normals away from the axis. */
function loft(s: Soup, lower: Pt[], ly: number, upper: Pt[], uy: number, hex: number, outward: boolean): void {
  const n = lower.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n;
    const L0 = at(lower[i], ly);
    const L1 = at(lower[j], ly);
    const U0 = at(upper[i], uy);
    const U1 = at(upper[j], uy);
    if (outward) s.quad(L0, U0, U1, L1, hex);
    else s.quad(L0, L1, U1, U0, hex);
  }
}

/** A flat annulus between two rings at the same height. `up` faces +Y, otherwise -Y. */
function annulus(s: Soup, outer: Pt[], inner: Pt[], y: number, hex: number, up: boolean): void {
  const n = outer.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n;
    const O0 = at(outer[i], y);
    const O1 = at(outer[j], y);
    const I0 = at(inner[i], y);
    const I1 = at(inner[j], y);
    if (up) s.quad(O0, I0, I1, O1, hex);
    else s.quad(O0, O1, I1, I0, hex);
  }
}

/** A triangle fan closing a ring at height y. `up` faces +Y, otherwise -Y. */
function cap(s: Soup, ring: Pt[], y: number, hex: number, up: boolean): void {
  const c = v3(0, y, 0);
  const n = ring.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n;
    const A = at(ring[i], y);
    const B = at(ring[j], y);
    if (up) s.tri(c, B, A, hex);
    else s.tri(c, A, B, hex);
  }
}

/** An axis-aligned box as 12 triangles, centred at (cx, cy, cz). */
function box(s: Soup, cx: number, cy: number, cz: number, w: number, h: number, d: number, hex: number): void {
  const x0 = cx - w / 2, x1 = cx + w / 2;
  const y0 = cy - h / 2, y1 = cy + h / 2;
  const z0 = cz - d / 2, z1 = cz + d / 2;
  const p = [
    v3(x0, y0, z0), v3(x1, y0, z0), v3(x1, y1, z0), v3(x0, y1, z0),
    v3(x0, y0, z1), v3(x1, y0, z1), v3(x1, y1, z1), v3(x0, y1, z1),
  ];
  s.quad(p[4], p[5], p[6], p[7], hex); // +Z
  s.quad(p[1], p[0], p[3], p[2], hex); // -Z
  s.quad(p[5], p[1], p[2], p[6], hex); // +X
  s.quad(p[0], p[4], p[7], p[3], hex); // -X
  s.quad(p[3], p[7], p[6], p[2], hex); // +Y
  s.quad(p[0], p[1], p[5], p[4], hex); // -Y
}

/**
 * A hand-hole on a LEANING wall: a recessed oval backing behind a proud oval bezel ring.
 *
 * Deliberately NOT a boolean hole cut through the lofted shell -- the same call the concrete
 * street bin's opening records. A real aperture costs a boolean this budget has no room for, and
 * at prop distance a recess behind a bezel reads as a hole. Recorded as an approximation.
 */
function handHole(s: Soup, centre: THREE.Vector3, normal: THREE.Vector3, colors: typeof CONFIG.colors): void {
  const { a, b, bezel, proud, recess, segments } = CONFIG.handHole;
  const nz = normal.clone().normalize();
  const up = Math.abs(nz.y) > 0.99 ? v3(1, 0, 0) : v3(0, 1, 0);
  const nx = new THREE.Vector3().crossVectors(up, nz).normalize();
  const ny = new THREE.Vector3().crossVectors(nz, nx).normalize();
  const on = (u: number, v: number, off: number) =>
    centre.clone().addScaledVector(nx, u).addScaledVector(ny, v).addScaledVector(nz, off);

  for (let i = 0; i < segments; i += 1) {
    const t0 = (i / segments) * Math.PI * 2;
    const t1 = ((i + 1) / segments) * Math.PI * 2;
    const c0 = Math.cos(t0), s0 = Math.sin(t0), c1 = Math.cos(t1), s1 = Math.sin(t1);
    // Bezel: a raised ring around the aperture, standing proudest of the three surfaces.
    s.quad(
      on(a * c0, b * s0, proud + recess), on((a + bezel) * c0, (b + bezel) * s0, proud),
      on((a + bezel) * c1, (b + bezel) * s1, proud), on(a * c1, b * s1, proud + recess),
      colors.exterior,
    );
    // The aperture backing. It sits PROUD of the wall, not recessed into it: with no boolean cut
    // there is no hole to see through, so a backing set behind the wall plane is occluded by the
    // wall and renders as nothing at all. Standing it 4 mm off the wall inside the bezel's throat
    // is the same call the concrete street bin's opening patch records, and it reads as a hole at
    // prop distance while staying a separate plane that cannot z-fight.
    s.tri(on(0, 0, proud), on(a * c0, b * s0, proud + recess), on(a * c1, b * s1, proud + recess), colors.recess);
  }
}

/* ------------------------------------------------------------------------------- the build */

export function createOpenTopSteelSkipBinModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Open-Top Steel Skip Bin';

  const materials: Record<string, THREE.MeshStandardMaterial> = {};
  for (const m of CONFIG.materials) {
    materials[m.id] = new THREE.MeshStandardMaterial({
      color: new THREE.Color(m.color),
      roughness: m.roughness,
      metalness: m.metalness,
      vertexColors: m.vertexColors,
      wireframe: options.wireframe ?? false,
    });
    materials[m.id].name = m.id;
  }

  const seg = CONFIG.cornerSegments;
  const R = CONFIG.rings;
  const C = CONFIG.colors;
  const ring = (k: keyof typeof R) => roundedRectRing(R[k].hw, R[k].hd, R[k].r, seg);

  const wallFoot = ring('wallFoot');
  const wallHead = ring('wallHead');
  const rimOuter = ring('rimOuter');
  const rimInner = ring('rimInner');
  const innerFoot = ring('innerFoot');
  const plinthTop = ring('plinthTop');
  const plinthBot = ring('plinthBot');

  const s = new Soup();

  // The vessel, in one continuous run: up the outside, over the rim, back down the inside.
  loft(s, wallFoot, R.wallFoot.y, wallHead, R.wallHead.y, C.exterior, true);
  loft(s, wallHead, R.wallHead.y, rimOuter, R.rimOuter.y, C.rim, true);
  annulus(s, rimOuter, rimInner, R.rimOuter.y, C.rim, true);
  loft(s, innerFoot, R.innerFoot.y, rimInner, R.rimInner.y, C.interior, false);
  cap(s, innerFoot, R.innerFoot.y, C.interior, true);

  // Plinth rail, standing 10 mm proud of the wall foot, closed underneath. The step between the
  // plinth's outer ring and the wall foot inside it is a real horizontal ledge and has to be
  // surfaced: left open it is a gap in the shell, and it rendered as a dark seam round the base.
  loft(s, plinthBot, R.plinthBot.y, plinthTop, R.plinthTop.y, C.exterior, true);
  annulus(s, plinthTop, wallFoot, R.plinthTop.y, C.exterior, true);
  cap(s, plinthBot, R.plinthBot.y, C.exterior, false);

  // Four feet, inset from the plinth corners so the tub stands clear of the ground.
  const f = CONFIG.feet;
  const fx = R.plinthBot.hw - f.inset - f.w / 2;
  const fz = R.plinthBot.hd - f.inset - f.d / 2;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      box(s, sx * fx, f.h / 2, sz * fz, f.w, f.h, f.d, C.exterior);
    }
  }

  // One hand-hole per wall. The walls LEAN, so each sits on its own tilted plane and its normal
  // tilts down by the wall's own lean -- 8.97 degrees on the long walls, 6.01 on the short.
  const hy = CONFIG.handHole.y;
  const t = (hy - R.wallFoot.y) / (R.wallHead.y - R.wallFoot.y);
  const hwAt = R.wallFoot.hw + (R.wallHead.hw - R.wallFoot.hw) * t;
  const hdAt = R.wallFoot.hd + (R.wallHead.hd - R.wallFoot.hd) * t;
  const leanW = Math.atan2(R.wallHead.hw - R.wallFoot.hw, R.wallHead.y - R.wallFoot.y);
  const leanD = Math.atan2(R.wallHead.hd - R.wallFoot.hd, R.wallHead.y - R.wallFoot.y);
  for (const sz of [-1, 1]) {
    handHole(s, v3(0, hy, sz * hdAt), v3(0, -Math.sin(leanD), sz * Math.cos(leanD)), C);
  }
  for (const sx of [-1, 1]) {
    handHole(s, v3(sx * hwAt, hy, 0), v3(sx * Math.cos(leanW), -Math.sin(leanW), 0), C);
  }

  // Rubble in the bottom. The plate has a heap of it and the first build shipped an empty tub, which
  // reads as a product shot of a container rather than one that has been used. Small, dark and
  // varied, sitting on the inner floor; seeded off the same constant as the canvas so the prop is
  // reproducible.
  {
    let d = 90210;
    const rnd = () => (((d = (d * 1664525 + 1013904223) >>> 0) >>> 8) / 16777216);
    const fy = R.innerFoot.y;
    for (let i = 0; i < 22; i += 1) {
      const w = 0.045 + rnd() * 0.075;
      const h = 0.028 + rnd() * 0.045;
      box(s, (rnd() - 0.5) * 0.46, fy + h / 2, (rnd() - 0.5) * 0.44, w, h, w * (0.6 + rnd() * 0.7),
        [0x5a4a34, 0x6a5a44, 0x4e4436, 0x7a6748][(rnd() * 4) | 0]);
    }
  }

  const shellGeo = s.geometry();
  // The rust tile, bound as map AND bumpMap off the same canvas: no draw call, no material, no
  // geometry. `map` is not sRGB-decoded by default on a canvas source, so the colour space is set
  // explicitly -- without it the whole tile multiplies in the wrong space and the shell ships
  // washed out against the envelope it was re-based to.
  const rustTex = (() => {
    const cv = rustCanvas(CONFIG.rust.size, CONFIG.rust.seed);
    if (!cv) return null;
    const tx = new THREE.CanvasTexture(cv);
    tx.colorSpace = THREE.SRGBColorSpace;
    tx.wrapS = THREE.RepeatWrapping;   // u goes twice around
    tx.wrapT = THREE.ClampToEdgeWrapping;
    tx.anisotropy = 4;
    tx.needsUpdate = true;
    return tx;
  })();
  if (rustTex) {
    const wm = materials['weathered-steel'];
    wm.map = rustTex;
    wm.bumpMap = rustTex;
    wm.bumpScale = CONFIG.rust.bump;
    wm.needsUpdate = true;
  }
  const shell = new THREE.Mesh(shellGeo, materials['weathered-steel']);
  shell.name = 'Tapered shell with rolled rim, plinth and feet';
  shell.castShadow = options.castShadow ?? true;
  shell.receiveShadow = options.receiveShadow ?? true;
  root.add(shell);

  // The four lifting lugs: ONE InstancedMesh, so one draw call and one unique geometry for the
  // set. Three are visible in the plate; the fourth follows from 4-fold symmetry, because a crane
  // lift needs symmetric pick points.
  const L = CONFIG.lug;
  const lugGeo = new THREE.BoxGeometry(L.w, L.h, L.t);
  const lugs = new THREE.InstancedMesh(lugGeo, materials['bracket-steel'], 4);
  lugs.name = 'Corner lifting lugs';
  lugs.castShadow = options.castShadow ?? true;
  lugs.receiveShadow = options.receiveShadow ?? true;
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const corners: Array<[number, number]> = [[1, 1], [-1, 1], [-1, -1], [1, -1]];
  corners.forEach(([sx, sz], i) => {
    // Each lug sits ON the rim's rounded corner, lapped over its outer face and yawed to face
    // outward along the corner diagonal. Placed inboard of that it reads as a tab standing up
    // inside the mouth, which is not what a crane hooks.
    const arcX = sx * (R.rimOuter.hw - R.rimOuter.r);
    const arcZ = sz * (R.rimOuter.hd - R.rimOuter.r);
    // Seated so the lug's outer corner lands exactly on the rim's widest plane. Pushed further
    // out it still straddles correctly but carries the whole prop's bounding box past the
    // declared 1.5 x 1.0 m envelope -- measured at 1.592 m wide, 6% over -- and the declared
    // envelope is the contract a level builder places against.
    const half = ((L.w + L.t) / 2) * Math.SQRT1_2;
    const diag = R.rimOuter.r - half;
    const yaw = Math.atan2(sx, sz);
    q.setFromAxisAngle(v3(0, 1, 0), yaw);
    m4.compose(v3(arcX + sx * diag, L.y, arcZ + sz * diag), q, v3(1, 1, 1));
    lugs.setMatrixAt(i, m4);
  });
  lugs.instanceMatrix.needsUpdate = true;
  root.add(lugs);

  const nodes: Record<string, THREE.Object3D> = { root, tub: shell, 'corner-lugs': lugs };
  const meshes: Record<string, THREE.Mesh> = { tub: shell, 'corner-lugs': lugs as unknown as THREE.Mesh };
  const colliders: Record<string, unknown> = {
    tub: {
      shape: 'box',
      localCenter: [0, 0.525, 0],
      size: [1.5, 1.05, 1.0],
      axis: [0, 1, 0],
      notes:
        'Authoring intent only. thaikit derives the shipped compound from the built geometry with ' +
        'scripts/derive-colliders.mjs; this is not that file.',
    },
  };

  root.userData.sculptRuntime = {
    nodes,
    meshes,
    sockets: {},
    colliders,
    destructionGroups: {},
  } satisfies ProceduralModelRuntime;
  return root;
}

/* ------------------------------------------------------------------ thaikit entry point */

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it with
 * (spec, options). `spec` is accepted and attached for host-side inspection -- the reconstruction
 * data already lives in this module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createOpenTopSteelSkipBinModel(options);
  if (spec && typeof spec === 'object') root.userData.sculptSpec = spec;

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // ONE root pivot and NO sockets. This variant has no lids, no castors and no hinged part of
    // any kind: it is a welded steel tub that takes a crane to move. A pivot is a promise that a
    // part turns on that axis and a socket a promise that something attaches there, so declaring
    // either here would describe a machine that does not exist.
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);

    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    root.userData.sculptRuntime = {
      ...rt,
      // A COUNT, not the Record: the harness returns this field straight across the puppeteer
      // bridge and a Record of Object3D is circular, which surfaces as the whole stats object
      // arriving undefined.
      nodes: Object.keys(nodes).length,
      pivots: [rootPivot],
      sockets: [],
      colliders,
      destructionGroups: [],
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: {} },
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
