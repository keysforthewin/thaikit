import * as THREE from 'three';

/**
 * Square Patio Umbrella -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else: the bundle is CommonJS with a bare
 * require("three") and the host injects its own instance.
 *
 * Envelope 4.0 x 3.3 x 4.0 m, origin base-center on the ground at the pole axis, +Y up.
 *
 * This is the ONE module in the outdoor roof set carried on a SINGLE CENTRE POLE rather than four
 * corner posts, so it tiles differently: placed side by side the canopies meet at their edges and
 * leave the corners open, and the pole lands mid-bay rather than on the grid line. Square rather
 * than octagonal so those edges meet cleanly.
 *
 * Rebuild 2026-09-02 from 0.85. The Meshy proxy of the plate reads the canopy as a pyramid rising
 * 0.23 H over a 0.535 H half-span (23 degrees) with a 0.11 H valance; the first build was a
 * 12-degree slab with a scalloped eave the plate does not have. The declared height went 2.80 ->
 * 3.30 (see the registry notes): the walk-under rim stays at 2.10, the eave is at 2.40 and the
 * peak at 3.20 under a crown cap to 3.30, 24 degrees of pitch. What the plate zooms add: SIXTEEN
 * fabric panels whose seams carry dark dirt lines, canvas sagging between EIGHT ribs (visible
 * from below, with the struts from a runner hub on the pole), a small square crown cap with a
 * round finial over the vent, a straight 0.30 m valance with a hem seam and a pointed tab hanging
 * at each corner, a cream painted pole with a runner collar, a bare steel spigot into a
 * galvanised cast base with a boss. The canvas dirt is ONE post-construction canvas: the canopy
 * maps to it in plan (x, z), the valance and tabs to a strip along its bottom.
 *
 * Budget (thaikit large class): 4 draw calls, 3 materials, 6 unique geometries, 4000 triangles.
 * Canopy, cap, valance and tabs are ONE double-sided surface; mast, base, ribs, struts and hub
 * merge into the second mesh. Two draw calls, two materials, two geometries.
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

const CONFIG = {
  canopy: {
    half: 1.985,        // 4 x 4 m at the eave once the corner tabs' 1.5 cm lean is counted
    eaveY: 2.40,        // the eave: a STRAIGHT square edge (the plate's valance hangs from a straight hem)
    crownY: 3.20,       // canopy apex under the cap
    valanceY: 2.10,     // the clear height a player walks under
    crownR: 0.06,       // the vent under the cap
    samples: 48,        // perimeter samples; 12 per side
    ribs: 8,            // metal ribs: four corners, four mids
    seams: 16,          // fabric panel seams (dirt lines in the canvas)
    sag: 0.09,          // how far the canvas dips between ribs
    rings: [0, 0.16, 0.34, 0.52, 0.70, 0.86, 1],
    tab: { w: 0.16, drop: 0.17 },   // the pointed tab hanging at each corner of the valance
  },
  cap: { half: 0.34, apexY: 3.26, eaveY: 3.15, skirt: 0.04, finialR: 0.045, finialH: 0.04 },
  mast: { r: 0.035, seg: 12, topY: 3.24, spigotR: 0.026, spigotTop: 0.42, runnerY: 1.42, runnerH: 0.14, runnerR: 0.05, hubY: 3.10, hubH: 0.10, hubR: 0.05 },
  base: { r: 0.28, h: 0.07, seg: 20, bossR: 0.10, bossH: 0.05 },
  colors: {
    canvas: 0xd4cab8,   // crops/canopy.png measured #dfd8cb, luma 216.8; the harness lights a top face at ~1.15x, so it is carried at #d4cab8 to render at the plate's value
    valance: 0xd4ccbc,  // crops/valance.png measured #cdc4b4 (hanging in the canopy's shade); carried lighter because the harness shades it itself
    capCanvas: 0xcfc5b2,
    pole: 0xd8d4c8,     // the pole is PAINTED cream above the spigot (plate zoom: luma ~205); the old #99978e was the base's tone
    runner: 0xcfc8b8,
    spigot: 0x5c5c5a,   // bare steel between the paint and the base
    base: 0x7b786f,     // crops/base.png measured #7b786f, luma 120.0
    rib: 0xc8c4b8,
    finial: 0xe8e6e0,
  },
  materials: {
    canvas: { id: 'canvas', roughness: 0.90, metalness: 0.0 },
    metal: { id: 'metal', roughness: 0.60, metalness: 0.25 },
  },
};

class Soup {
  pos: number[] = [];
  col: number[] = [];
  uv: number[] = [];
  private c = new THREE.Color();
  tri(a: THREE.Vector3, b: THREE.Vector3, cc: THREE.Vector3, hex: number, ua?: number[], ub?: number[], uc?: number[]): void {
    this.pos.push(a.x, a.y, a.z, b.x, b.y, b.z, cc.x, cc.y, cc.z);
    // Vertex colours multiply in LINEAR space, so the sRGB measurement converts once, here.
    this.c.setHex(hex, THREE.SRGBColorSpace);
    for (let i = 0; i < 3; i += 1) this.col.push(this.c.r, this.c.g, this.c.b);
    const U = ua ?? [0, 0], V = ub ?? [0, 0], W = uc ?? [0, 0];
    this.uv.push(U[0], U[1], V[0], V[1], W[0], W[1]);
  }
  quad(a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3, d: THREE.Vector3, hex: number, ua?: number[], ub?: number[], uc?: number[], ud?: number[]): void {
    this.tri(a, b, c, hex, ua, ub, uc); this.tri(a, c, d, hex, ua, uc, ud);
  }
  /** A cylinder about +Y, used for the mast, the collars and the base disc. */
  cylY(cy0: number, cy1: number, r0: number, r1: number, seg: number, hex: number, capTop: boolean, capBot: boolean): void {
    for (let i = 0; i < seg; i += 1) {
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      const p0 = v3(r0 * Math.cos(a0), cy0, r0 * Math.sin(a0));
      const p1 = v3(r0 * Math.cos(a1), cy0, r0 * Math.sin(a1));
      const q0 = v3(r1 * Math.cos(a0), cy1, r1 * Math.sin(a0)), q1 = v3(r1 * Math.cos(a1), cy1, r1 * Math.sin(a1));
      this.quad(p0, q0, q1, p1, hex);
      // v3 (owner review, 2026-09-03): the caps were wound INSIDE OUT -- probed on the shipped bundle,
      // the disc's top cap faced -Y (culled, so the boss read as an open crescent) and its bottom cap
      // faced +Y at y 0, coincident and co-facing with the level's ground plane: that was the
      // z-fighting in the base. The side quads were right; only the two fans are reversed here.
      if (capTop) this.tri(v3(0, cy1, 0), q1, q0, hex);
      if (capBot) this.tri(v3(0, cy0, 0), p0, p1, hex);
    }
  }
  /** A square-section bar from A to B, `w` across, its faces oriented with `up`. */
  bar(A: THREE.Vector3, B: THREE.Vector3, w: number, h: number, hex: number): void {
    const d = B.clone().sub(A).normalize();
    let up = new THREE.Vector3(0, 1, 0);
    if (Math.abs(d.dot(up)) > 0.95) up = new THREE.Vector3(1, 0, 0);
    const s = new THREE.Vector3().crossVectors(d, up).normalize().multiplyScalar(w / 2);
    const u = new THREE.Vector3().crossVectors(s, d).normalize().multiplyScalar(h / 2);
    const c = (P: THREE.Vector3, i: number) => {
      const sx = i === 0 || i === 3 ? -1 : 1, sy = i < 2 ? -1 : 1;
      return P.clone().add(s.clone().multiplyScalar(sx)).add(u.clone().multiplyScalar(sy));
    };
    for (let i = 0; i < 4; i += 1) {
      const j = (i + 1) % 4;
      this.quad(c(A, i), c(B, i), c(B, j), c(A, j), hex);
    }
    this.quad(c(A, 0), c(A, 3), c(A, 2), c(A, 1), hex);
    this.quad(c(B, 0), c(B, 1), c(B, 2), c(B, 3), hex);
  }
  geometry(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    // Written for EVERY vertex: a vertexColors material renders BLACK where it is missing.
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.computeVertexNormals();
    return g;
  }
}

const v3 = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

/**
 * A point on the SQUARE eave outline at parameter t in [0,1), walking the perimeter.
 *
 * A square, not a circle: the asset notes require a square canopy so that edges meet cleanly when
 * several are placed side by side, and an octagonal or round canopy would leave gaps.
 */
function squarePerimeter(t: number, half: number): { x: number; z: number } {
  const u = ((t % 1) + 1) % 1;
  const s = u * 4;
  const side = Math.floor(s);
  const f = s - side;          // 0..1 along this side
  const a = -half + f * 2 * half;
  if (side === 0) return { x: a, z: half };
  if (side === 1) return { x: half, z: -a };
  if (side === 2) return { x: -a, z: -half };
  return { x: -half, z: a };
}

/* ------------------------------------------------------------------ the dirt canvas
 * ONE 1024 px canvas. Rows 0..896 are the canopy in PLAN (u = x, v = z over the 4 m square, the
 * crown at the centre): sixteen radial seam lines carrying dark dirt, a warm cast on a few panels,
 * dust streaks running downhill (radially outward), grime pooling at the eave. Rows 896..1024 are
 * the valance strip, repeated four times round: a hem seam, drips and a soft dirt band. Everything
 * multiplies, so the tile only ever darkens the vertex cream. Guarded: the Node-side gates
 * construct the factory with no `document`. */
function dirtCanvas(size: number, seams: number): THREE.CanvasTexture | null {
  if (typeof document === 'undefined') return null;
  const cv = document.createElement('canvas');
  cv.width = size; cv.height = size;
  const ctx = cv.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D | null;
  if (!ctx) return null;
  let sd = 4241;
  const rnd = () => (sd = (sd * 16807) % 2147483647) / 2147483647;
  const S = size, PH = Math.round(S * 0.875), cx = S / 2, cy = PH / 2;
  ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, S, S);
  ctx.globalCompositeOperation = 'multiply';
  // canopy: a warm cast on some panels (the plate's sun-side panels read yellower)
  for (let k = 0; k < seams; k += 1) {
    if (rnd() > 0.45) continue;
    const a0 = (k / seams) * Math.PI * 2, a1 = ((k + 1) / seams) * Math.PI * 2, R = S;
    ctx.fillStyle = `rgba(236,222,192,${0.10 + rnd() * 0.16})`;
    ctx.beginPath(); ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a0) * R, cy + Math.sin(a0) * R); ctx.lineTo(cx + Math.cos(a1) * R, cy + Math.sin(a1) * R);
    ctx.closePath(); ctx.fill();
  }
  // dust streaks running downhill from the crown: radial, soft, many
  for (let i = 0; i < 260; i += 1) {
    const a = rnd() * Math.PI * 2, r0 = S * (0.04 + rnd() * 0.25), len = S * (0.08 + rnd() * 0.35), w = 1 + rnd() * 5;
    const g = ctx.createLinearGradient(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0, cx + Math.cos(a) * (r0 + len), cy + Math.sin(a) * (r0 + len));
    const al = 0.05 + rnd() * 0.12;
    g.addColorStop(0, `rgba(150,138,112,0)`); g.addColorStop(0.4, `rgba(150,138,112,${al})`); g.addColorStop(1, `rgba(150,138,112,0)`);
    ctx.strokeStyle = g; ctx.lineWidth = w; ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0); ctx.lineTo(cx + Math.cos(a) * (r0 + len), cy + Math.sin(a) * (r0 + len)); ctx.stroke();
  }
  // the seams: sixteen radial dirt lines, darkest and widest toward the eave, each with a halo of grime
  for (let k = 0; k < seams; k += 1) {
    const a = (k / seams) * Math.PI * 2 + Math.PI / seams;
    const R = S;   // past the square's corner; the plan crops it
    for (const [w, al] of [[34, 0.07], [16, 0.11], [6, 0.18], [2, 0.34]] as number[][]) {
      const g = ctx.createLinearGradient(cx, cy, cx + Math.cos(a) * R * 0.6, cy + Math.sin(a) * R * 0.6);
      g.addColorStop(0, `rgba(120,106,84,${al * 0.5})`); g.addColorStop(1, `rgba(120,106,84,${al})`);
      ctx.strokeStyle = g; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R); ctx.stroke();
    }
    // dirt clots along the seam
    // dirt drifts along the seam: soft elongated smears, not beads
    for (let i = 0; i < 9; i += 1) {
      const r = S * (0.08 + rnd() * 0.6), len = S * (0.03 + rnd() * 0.09), w = 4 + rnd() * 10, al = 0.10 + rnd() * 0.18;
      const x0 = cx + Math.cos(a) * r + (rnd() - 0.5) * 8, y0 = cy + Math.sin(a) * r + (rnd() - 0.5) * 8;
      const g = ctx.createLinearGradient(x0, y0, x0 + Math.cos(a) * len, y0 + Math.sin(a) * len);
      g.addColorStop(0, 'rgba(110,96,74,0)'); g.addColorStop(0.5, `rgba(110,96,74,${al})`); g.addColorStop(1, 'rgba(110,96,74,0)');
      ctx.strokeStyle = g; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath();
      ctx.moveTo(x0, y0); ctx.lineTo(x0 + Math.cos(a) * len, y0 + Math.sin(a) * len); ctx.stroke();
    }
  }
  // crown grime and the eave band
  {
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, S * 0.12);
    g.addColorStop(0, 'rgba(140,128,106,0.30)'); g.addColorStop(1, 'rgba(140,128,106,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, S, PH);
  }
  for (let i = 0; i < 60; i += 1) {
    const x = rnd() * S, y = rnd() * PH, rr = S * (0.02 + rnd() * 0.05);
    const g = ctx.createRadialGradient(x, y, 0, x, y, rr);
    g.addColorStop(0, `rgba(160,150,130,${0.06 + rnd() * 0.12})`); g.addColorStop(1, 'rgba(160,150,130,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, rr, 0, Math.PI * 2); ctx.fill();
  }
  // the valance strip (rows PH..S): a hem seam near the bottom, a top seam, drips, a soft grime band
  {
    const y0 = PH, h = S - PH;
    ctx.fillStyle = 'rgba(120,106,84,0.35)'; ctx.fillRect(0, y0 + h * 0.86, S, 2);   // hem seam
    ctx.fillStyle = 'rgba(120,106,84,0.22)'; ctx.fillRect(0, y0 + 2, S, 2);            // top seam under the eave
    const g = ctx.createLinearGradient(0, y0, 0, y0 + h);
    g.addColorStop(0, 'rgba(150,140,120,0.16)'); g.addColorStop(0.5, 'rgba(150,140,120,0.04)'); g.addColorStop(1, 'rgba(150,140,120,0.14)');
    ctx.fillStyle = g; ctx.fillRect(0, y0, S, h);
    for (let i = 0; i < 90; i += 1) {
      const x = rnd() * S, len = h * (0.2 + rnd() * 0.7), w = 1 + rnd() * 3, al = 0.06 + rnd() * 0.16;
      const gg = ctx.createLinearGradient(0, y0, 0, y0 + len);
      gg.addColorStop(0, `rgba(130,118,96,${al})`); gg.addColorStop(1, 'rgba(130,118,96,0)');
      ctx.fillStyle = gg; ctx.fillRect(x, y0, w, len);
    }
    // the four vertical panel seams of the valance land at u = 0 of each repeat
    ctx.fillStyle = 'rgba(120,106,84,0.3)'; ctx.fillRect(0, y0, 2, h); ctx.fillRect(S - 2, y0, 2, h);
  }
  ctx.globalCompositeOperation = 'source-over';
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

export function createSquarePatioUmbrellaModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Square Patio Umbrella';

  const canvasMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: CONFIG.materials.canvas.roughness,
    metalness: CONFIG.materials.canvas.metalness,
    vertexColors: true,
    // Fabric has no meaningful thickness, and a player standing under the canopy must see its
    // inside face. Double-sided halves the canopy's triangle count against building an underside.
    side: THREE.DoubleSide,
    wireframe: options.wireframe ?? false,
  });
  canvasMat.name = CONFIG.materials.canvas.id;

  const metalMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: CONFIG.materials.metal.roughness,
    metalness: CONFIG.materials.metal.metalness,
    vertexColors: true,
    wireframe: options.wireframe ?? false,
  });
  metalMat.name = CONFIG.materials.metal.id;

  const K = CONFIG.canopy, C = CONFIG.colors, H = K.half;
  const cs = new Soup();
  // plan UV for the canopy: the square maps to rows 0..0.875 of the canvas
  const planUV = (p: THREE.Vector3) => [p.x / (2 * H) + 0.5, (1 - (p.z / (2 * H) + 0.5)) * 0.875];
  const skirtUV = (t: number, y: number, y0: number, y1: number) => [((t * 4) % 1 + 1) % 1, 0.875 + 0.125 * (1 - (y - y0) / (y1 - y0))];

  // The canvas SAGS between eight radial ribs. The sag is zero at a rib and greatest midway
  // between two, and it fades out at the crown and at the eave where the fabric is pulled tight
  // over hardware.
  const sagAt = (t: number, along: number) => {
    const phase = t * K.ribs;
    const between = 0.5 - 0.5 * Math.cos(phase * Math.PI * 2);
    return K.sag * between * Math.sin(along * Math.PI);
  };
  const ringPoint = (t: number, along: number) => {
    const e = squarePerimeter(t, H);
    const scale = K.crownR / H + (1 - K.crownR / H) * along;
    const y = K.crownY + (K.eaveY - K.crownY) * along - sagAt(t, along);
    return v3(e.x * scale, y, e.z * scale);
  };
  const N = K.samples, rings = K.rings;
  for (let r = 0; r < rings.length - 1; r += 1) {
    for (let i = 0; i < N; i += 1) {
      const t0 = i / N, t1 = (i + 1) / N;
      const A = ringPoint(t0, rings[r]), B = ringPoint(t1, rings[r]);
      const Cc = ringPoint(t1, rings[r + 1]), D = ringPoint(t0, rings[r + 1]);
      cs.quad(A, B, Cc, D, C.canvas, planUV(A), planUV(B), planUV(Cc), planUV(D));
    }
  }
  // The crown is a VENT under the cap: the canopy stops at crownR and the cap covers it.
  // The cap: a small square pyramid over the vent with its own skirt, and a round finial disc.
  const cap = CONFIG.cap;
  const capPoint = (t: number, along: number) => {
    const e = squarePerimeter(t, cap.half);
    const s = 0.02 / cap.half + (1 - 0.02 / cap.half) * along;
    return v3(e.x * s, cap.apexY + (cap.eaveY - cap.apexY) * along, e.z * s);
  };
  const CN = 16;
  for (let i = 0; i < CN; i += 1) {
    const t0 = i / CN, t1 = (i + 1) / CN;
    const A = capPoint(t0, 0), B = capPoint(t1, 0), Cc = capPoint(t1, 1), D = capPoint(t0, 1);
    cs.quad(A, B, Cc, D, C.capCanvas, planUV(A), planUV(B), planUV(Cc), planUV(D));
    cs.quad(D, Cc, v3(Cc.x, cap.eaveY - cap.skirt, Cc.z), v3(D.x, cap.eaveY - cap.skirt, D.z), C.valance,
      skirtUV(t0, cap.eaveY, cap.eaveY - cap.skirt, cap.eaveY), skirtUV(t1, cap.eaveY, cap.eaveY - cap.skirt, cap.eaveY),
      skirtUV(t1, cap.eaveY - cap.skirt, cap.eaveY - cap.skirt, cap.eaveY), skirtUV(t0, cap.eaveY - cap.skirt, cap.eaveY - cap.skirt, cap.eaveY));
  }
  for (let i = 0; i < CN; i += 1) {
    const A = capPoint(i / CN, 0), B = capPoint((i + 1) / CN, 0);
    cs.tri(v3(0, cap.apexY, 0), A, B, C.capCanvas, planUV(v3(0, 0, 0)), planUV(A), planUV(B));
  }
  // The valance: a STRAIGHT skirt hanging from the eave (the plate's hem is a straight line with
  // a seam), measured 20 luma below the canopy because it hangs in the canopy's own shade.
  for (let i = 0; i < N; i += 1) {
    const t0 = i / N, t1 = (i + 1) / N;
    const A = ringPoint(t0, 1), B = ringPoint(t1, 1);
    cs.quad(A, B, v3(B.x, K.valanceY, B.z), v3(A.x, K.valanceY, A.z), C.valance,
      skirtUV(t0, A.y, K.valanceY, K.eaveY), skirtUV(t1, B.y, K.valanceY, K.eaveY), skirtUV(t1, K.valanceY, K.valanceY, K.eaveY), skirtUV(t0, K.valanceY, K.valanceY, K.eaveY));
  }
  // A pointed tab hangs at each corner where the valance's excess fabric folds: a triangle on the
  // outer face of one side, leaning 1 cm out so it never lies in the valance's plane.
  for (let c = 0; c < 4; c += 1) {
    const tc = c / 4;                                      // corner parameter (side boundary)
    const P = squarePerimeter(tc, H), Q = squarePerimeter(tc - K.tab.w / (8 * H), H);
    const out = v3(Math.sign(P.x) * 0.006, 0, Math.sign(P.z) * 0.006);
    const A = v3(Q.x, K.valanceY, Q.z).add(out), B = v3(P.x, K.valanceY, P.z).add(out);
    const T = v3((P.x + Q.x) / 2, K.valanceY - K.tab.drop, (P.z + Q.z) / 2).add(out.clone().multiplyScalar(2.5));
    cs.tri(A, B, T, C.valance, skirtUV(tc - 0.01, K.eaveY, K.valanceY, K.eaveY), skirtUV(tc, K.eaveY, K.valanceY, K.eaveY), skirtUV(tc - 0.005, K.valanceY, K.valanceY, K.eaveY));
  }

  const canopy = new THREE.Mesh(cs.geometry(), canvasMat);
  canopy.name = 'Square canopy, cap and valance';
  canopy.castShadow = options.castShadow ?? true;
  canopy.receiveShadow = options.receiveShadow ?? true;
  root.add(canopy);

  // Mast, base, ribs, struts and collars as one merged geometry. The mast runs THROUGH the disc
  // rather than butting on its top face, so no two co-facing surfaces are coincident.
  const M = CONFIG.mast, Bs = CONFIG.base;
  const ms = new Soup();
  ms.cylY(0, Bs.h, Bs.r, Bs.r - 0.01, Bs.seg, C.base, true, true);                 // the cast disc, edge drawing in
  ms.cylY(Bs.h - 0.005, Bs.h + Bs.bossH, Bs.bossR, Bs.bossR - 0.015, 12, C.base, true, false);   // the boss the spigot sits in
  ms.cylY(0.03, M.spigotTop, M.spigotR, M.spigotR, M.seg, C.spigot, true, false);   // bare steel spigot
  ms.cylY(M.spigotTop - 0.01, M.topY, M.r, M.r, M.seg, C.pole, true, false);         // the painted pole
  ms.cylY(M.runnerY - M.runnerH / 2, M.runnerY + M.runnerH / 2, M.runnerR, M.runnerR, M.seg, C.runner, true, true);   // runner collar
  ms.cylY(M.hubY - M.hubH / 2, M.hubY + M.hubH / 2, M.hubR, M.hubR, M.seg, C.runner, true, true);                     // top hub under the crown
  ms.cylY(cap.apexY, cap.apexY + cap.finialH, cap.finialR, cap.finialR - 0.005, 12, C.finial, true, true);          // finial disc
  // eight ribs from the hub to the eave, under the canvas, and eight struts from the runner
  for (let k = 0; k < K.ribs; k += 1) {
    const t = k / K.ribs;
    const E = ringPoint(t, 1), top = v3(0, M.hubY + 0.03, 0);
    const dir = v3(E.x, 0, E.z).normalize();
    const A = top.clone().add(dir.clone().multiplyScalar(M.hubR - 0.005)).add(v3(0, -0.035, 0));
    const B = v3(E.x, E.y - 0.025, E.z).sub(dir.clone().multiplyScalar(0.03));
    ms.bar(A, B, 0.02, 0.028, C.rib);
    const Mid = A.clone().lerp(B, 0.42).add(v3(0, -0.02, 0));
    const R = v3(0, M.runnerY + M.runnerH / 2 - 0.01, 0).add(dir.clone().multiplyScalar(M.runnerR - 0.01));
    ms.bar(R, Mid, 0.016, 0.016, C.rib);
  }
  const mast = new THREE.Mesh(ms.geometry(), metalMat);
  mast.name = 'Mast, base, ribs and struts';
  mast.castShadow = options.castShadow ?? true;
  mast.receiveShadow = options.receiveShadow ?? true;
  root.add(mast);

  // the dirt canvas, bound AFTER construction so the material keeps its authored albedo
  const dirt = dirtCanvas(1024, K.seams);
  if (dirt) { canvasMat.map = dirt; canvasMat.needsUpdate = true; }

  const nodes: Record<string, THREE.Object3D> = { root, mast, canopy };
  const colliders: Record<string, unknown> = {
    mast: { shape: 'cylinder', localCenter: [0, 1.65, 0], radius: 0.28, height: 3.3, axis: [0, 1, 0],
      notes: 'Authoring intent only; thaikit derives the shipped compound from the built geometry. The base plate matters: the asset notes call it a trip hazard a player should collide with.' },
  };
  root.userData.sculptRuntime = {
    nodes, meshes: { mast, canopy }, sockets: {}, colliders, destructionGroups: {},
  } satisfies ProceduralModelRuntime;
  return root;
}

/* ------------------------------------------------------------------ thaikit entry point */

export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createSquarePatioUmbrellaModel(options);
  if (spec && typeof spec === 'object') root.userData.sculptSpec = spec;

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // ONE root pivot and NO sockets. A real umbrella cranks open and tilts, but neither is
    // modelled and the asset declares no mechanism, so one root pivot is the complete inventory.
    // Declaring a crank axis nothing turns would be a contract the kit has to keep for no one.
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
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
      nodes: Object.keys(nodes).length,
      pivots: [rootPivot], sockets: [], colliders, destructionGroups: [],
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: {} },
    };
  }
  return root;
}

/** vibe3d entry: the pack's `model.ts` wraps this. */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}
