var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// assets/open-top-steel-skip-bin/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
  createObjectModel: () => createObjectModel,
  createOpenTopSteelSkipBinModel: () => createOpenTopSteelSkipBinModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
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
    exterior: 16773108,
    // envelope; the canvas paints the rust and the pale steel back out of it
    // LIFTED from the measured #60645c (luma 98.9). A face enclosed by the prop's own silhouette
    // renders at ~0.56 of its painted luma at the worst turntable azimuth, and 98.9 would land at
    // 55 -- below the harness backdrop's 58 -- so the gate would read the whole open mouth as a
    // hole punched through the model. 182 was more headroom than that needs and made the inside
    // read brighter than the outside; 166 lands at 93 in the same worst case, clear of the gate's
    // 34..82 window by 11.
    interior: 10791582,
    rim: 14208956,
    // crops/rim.png measured #897662 on a shadowed length; lit rim reads 162-170
    recess: 10130314,
    // hand-hole backing, luma 147 -> ~82 side-lit, clear of the backdrop
    debris: 6969924
    // rubble in the bottom; the plate has a heap of it
  },
  rust: { size: 1024, seed: 4711, bump: 35e-4 },
  materials: [
    { id: "weathered-steel", color: 16777215, roughness: 0.82, metalness: 0.15, vertexColors: true },
    // The lugs are the plate's DARK punctuation on a pale rim -- heavy rusted castings, not the light
    // tabs this shipped as. Held on chroma: luma 110 renders near 60, inside the turntable gate's
    // 34..82 backdrop window, but at saturation 0.53 against its 0.16 ceiling.
    { id: "bracket-steel", color: 9069632, roughness: 0.78, metalness: 0.22, vertexColors: false }
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
    wallFoot: { hw: 0.328, hd: 0.32, r: 0.065, y: 0.13 },
    wallHead: { hw: 0.4, hd: 0.39, r: 0.065, y: 0.985 },
    rimOuter: { hw: 0.4, hd: 0.39, r: 0.065, y: 1.05 },
    rimInner: { hw: 0.384, hd: 0.367, r: 0.059, y: 1.05 },
    innerFoot: { hw: 0.315, hd: 0.3, r: 0.059, y: 0.17 },
    plinthTop: { hw: 0.333, hd: 0.328, r: 0.065, y: 0.13 },
    plinthBot: { hw: 0.333, hd: 0.328, r: 0.065, y: 0.09 }
  },
  cornerSegments: 5,
  // 4 quadrants x 6 points = 24 points per ring
  feet: { w: 0.13, h: 0.09, d: 0.1, inset: 0.09 },
  handHole: { y: 0.86, a: 0.078, b: 0.058, bezel: 0.018, proud: 8e-3, recess: 0.012, segments: 16 },
  lug: { w: 0.12, h: 0.08, t: 0.038, y: 1.012 }
};
function roundedRectRing(hw, hd, r, seg) {
  const rad = Math.min(r, Math.min(hw, hd) * 0.98);
  const cx = hw - rad;
  const cz = hd - rad;
  const centres = [
    { x: +cx, z: +cz },
    { x: -cx, z: +cz },
    { x: -cx, z: -cz },
    { x: +cx, z: -cz }
  ];
  const pts = [];
  for (let q = 0; q < 4; q += 1) {
    const c = centres[q];
    for (let i = 0; i <= seg; i += 1) {
      const a = (q * 90 + i * 90 / seg) * Math.PI / 180;
      pts.push({ x: c.x + rad * Math.cos(a), z: c.z + rad * Math.sin(a) });
    }
  }
  return pts;
}
var Soup = class {
  pos = [];
  col = [];
  c = new THREE.Color();
  tri(a, b, cc, hex) {
    this.pos.push(a.x, a.y, a.z, b.x, b.y, b.z, cc.x, cc.y, cc.z);
    this.c.setHex(hex, THREE.SRGBColorSpace);
    for (let i = 0; i < 3; i += 1) this.col.push(this.c.r, this.c.g, this.c.b);
  }
  /** Two triangles over a quad given in order; the caller decides the winding. */
  quad(a, b, c, d, hex) {
    this.tri(a, b, c, hex);
    this.tri(a, c, d, hex);
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute("color", new THREE.Float32BufferAttribute(this.col, 3));
    g.computeVertexNormals();
    g.setAttribute("uv", new THREE.Float32BufferAttribute(this.uvs(g), 2));
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
  uvs(g) {
    const pos = g.getAttribute("position");
    const nrm = g.getAttribute("normal");
    const H = 1.05, PLAN = 0.86, AROUND = 2;
    const out = [];
    for (let t = 0; t < pos.count; t += 3) {
      let flat = true;
      const us = [];
      for (let k = 0; k < 3; k += 1) {
        const i = t + k;
        if (Math.abs(nrm.getY(i)) <= 0.7) flat = false;
        us.push(Math.atan2(pos.getZ(i), pos.getX(i)) / (2 * Math.PI) + 0.5);
      }
      if (flat) {
        for (let k = 0; k < 3; k += 1) {
          const i = t + k;
          out.push(pos.getX(i) / PLAN + 0.5, 0.9 + (pos.getZ(i) / PLAN + 0.5) * 0.1);
        }
        continue;
      }
      for (let k = 0; k < 3; k += 1) {
        let u = us[k];
        if (k > 0) u -= Math.round(u - us[0]);
        out.push(u * AROUND, pos.getY(t + k) / H);
      }
    }
    return out;
  }
};
function rustCanvas(size, seed) {
  if (typeof document === "undefined") return null;
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;
  let s = seed >>> 0;
  const rnd = () => ((s = s * 1664525 + 1013904223 >>> 0) >>> 8) / 16777216;
  const rgb = (r, g, b) => `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
  const RUST = rgb(1, 0.749, 0.467);
  const PALE = rgb(0.898, 1, 1);
  const DARK = rgb(0.527, 0.402, 0.255);
  ctx.fillStyle = RUST;
  ctx.fillRect(0, 0, size, size);
  const wrapped = (x, draw) => {
    draw(x);
    if (x < size * 0.14) draw(x + size);
    if (x > size * 0.86) draw(x - size);
  };
  const wash = (px, py, rx, ry, fill, a) => {
    const grd = ctx.createRadialGradient(px, py, 0, px, py, 1);
    grd.addColorStop(0, fill);
    grd.addColorStop(0.55, fill);
    grd.addColorStop(1, "rgba(0,0,0,0)");
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
  for (let i = 0; i < 8; i += 1) {
    wrapped(rnd() * size, (px) => wash(px, rnd() * size * 0.38, 240 + rnd() * 330, 120 + rnd() * 190, PALE, 0.1 + rnd() * 0.13));
  }
  for (let i = 0; i < 9; i += 1) {
    wrapped(rnd() * size, (px) => wash(px, size * (0.45 + rnd() * 0.55), 200 + rnd() * 300, 110 + rnd() * 170, DARK, 0.07 + rnd() * 0.11));
  }
  for (let i = 0; i < 22; i += 1) {
    wrapped(rnd() * size, (px) => wash(px, rnd() * size * 0.42, 80 + rnd() * 150, 44 + rnd() * 90, PALE, 0.1 + rnd() * 0.18));
  }
  for (let i = 0; i < 42; i += 1) {
    wrapped(rnd() * size, (px) => wash(px, rnd() * size, 60 + rnd() * 130, 34 + rnd() * 78, DARK, 0.07 + rnd() * 0.14));
  }
  for (let i = 0; i < 150; i += 1) {
    const y0 = rnd() * size * 0.46;
    const len = size * (0.1 + rnd() * rnd() * 0.62);
    const w = rnd() < 0.34 ? 1 + rnd() * 2 : 3 + rnd() * rnd() * 20;
    wrapped(rnd() * size, (px) => {
      const grd = ctx.createLinearGradient(0, y0, 0, y0 + len);
      grd.addColorStop(0, DARK);
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalAlpha = 0.12 + rnd() * 0.26;
      ctx.fillStyle = grd;
      ctx.fillRect(px - w / 2, y0, w, len);
      ctx.globalAlpha = 1;
    });
  }
  for (let i = 0; i < 220; i += 1) {
    wrapped(rnd() * size, (px) => wash(px, rnd() * size * 0.18, 12 + rnd() * 44, 4 + rnd() * 13, PALE, 0.09 + rnd() * 0.2));
  }
  for (let i = 0; i < 7e3; i += 1) {
    ctx.globalAlpha = 0.04 + rnd() * 0.1;
    ctx.fillStyle = rnd() < 0.5 ? DARK : PALE;
    ctx.fillRect(rnd() * size, rnd() * size, 1 + rnd() * 2, 1 + rnd() * 3);
  }
  ctx.globalAlpha = 1;
  return c;
}
var v3 = (x, y, z) => new THREE.Vector3(x, y, z);
var at = (p, y) => v3(p.x, y, p.z);
function loft(s, lower, ly, upper, uy, hex, outward) {
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
function annulus(s, outer, inner, y, hex, up) {
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
function cap(s, ring, y, hex, up) {
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
function box(s, cx, cy, cz, w, h, d, hex) {
  const x0 = cx - w / 2, x1 = cx + w / 2;
  const y0 = cy - h / 2, y1 = cy + h / 2;
  const z0 = cz - d / 2, z1 = cz + d / 2;
  const p = [
    v3(x0, y0, z0),
    v3(x1, y0, z0),
    v3(x1, y1, z0),
    v3(x0, y1, z0),
    v3(x0, y0, z1),
    v3(x1, y0, z1),
    v3(x1, y1, z1),
    v3(x0, y1, z1)
  ];
  s.quad(p[4], p[5], p[6], p[7], hex);
  s.quad(p[1], p[0], p[3], p[2], hex);
  s.quad(p[5], p[1], p[2], p[6], hex);
  s.quad(p[0], p[4], p[7], p[3], hex);
  s.quad(p[3], p[7], p[6], p[2], hex);
  s.quad(p[0], p[1], p[5], p[4], hex);
}
function handHole(s, centre, normal, colors) {
  const { a, b, bezel, proud, recess, segments } = CONFIG.handHole;
  const nz = normal.clone().normalize();
  const up = Math.abs(nz.y) > 0.99 ? v3(1, 0, 0) : v3(0, 1, 0);
  const nx = new THREE.Vector3().crossVectors(up, nz).normalize();
  const ny = new THREE.Vector3().crossVectors(nz, nx).normalize();
  const on = (u, v, off) => centre.clone().addScaledVector(nx, u).addScaledVector(ny, v).addScaledVector(nz, off);
  for (let i = 0; i < segments; i += 1) {
    const t0 = i / segments * Math.PI * 2;
    const t1 = (i + 1) / segments * Math.PI * 2;
    const c0 = Math.cos(t0), s0 = Math.sin(t0), c1 = Math.cos(t1), s1 = Math.sin(t1);
    s.quad(
      on(a * c0, b * s0, proud + recess),
      on((a + bezel) * c0, (b + bezel) * s0, proud),
      on((a + bezel) * c1, (b + bezel) * s1, proud),
      on(a * c1, b * s1, proud + recess),
      colors.exterior
    );
    s.tri(on(0, 0, proud), on(a * c0, b * s0, proud + recess), on(a * c1, b * s1, proud + recess), colors.recess);
  }
}
function createOpenTopSteelSkipBinModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Open-Top Steel Skip Bin";
  const materials = {};
  for (const m of CONFIG.materials) {
    materials[m.id] = new THREE.MeshStandardMaterial({
      color: new THREE.Color(m.color),
      roughness: m.roughness,
      metalness: m.metalness,
      vertexColors: m.vertexColors,
      wireframe: options.wireframe ?? false
    });
    materials[m.id].name = m.id;
  }
  const seg = CONFIG.cornerSegments;
  const R = CONFIG.rings;
  const C = CONFIG.colors;
  const ring = (k) => roundedRectRing(R[k].hw, R[k].hd, R[k].r, seg);
  const wallFoot = ring("wallFoot");
  const wallHead = ring("wallHead");
  const rimOuter = ring("rimOuter");
  const rimInner = ring("rimInner");
  const innerFoot = ring("innerFoot");
  const plinthTop = ring("plinthTop");
  const plinthBot = ring("plinthBot");
  const s = new Soup();
  loft(s, wallFoot, R.wallFoot.y, wallHead, R.wallHead.y, C.exterior, true);
  loft(s, wallHead, R.wallHead.y, rimOuter, R.rimOuter.y, C.rim, true);
  annulus(s, rimOuter, rimInner, R.rimOuter.y, C.rim, true);
  loft(s, innerFoot, R.innerFoot.y, rimInner, R.rimInner.y, C.interior, false);
  cap(s, innerFoot, R.innerFoot.y, C.interior, true);
  loft(s, plinthBot, R.plinthBot.y, plinthTop, R.plinthTop.y, C.exterior, true);
  annulus(s, plinthTop, wallFoot, R.plinthTop.y, C.exterior, true);
  cap(s, plinthBot, R.plinthBot.y, C.exterior, false);
  const f = CONFIG.feet;
  const fx = R.plinthBot.hw - f.inset - f.w / 2;
  const fz = R.plinthBot.hd - f.inset - f.d / 2;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      box(s, sx * fx, f.h / 2, sz * fz, f.w, f.h, f.d, C.exterior);
    }
  }
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
  {
    let d = 90210;
    const rnd = () => ((d = d * 1664525 + 1013904223 >>> 0) >>> 8) / 16777216;
    const fy = R.innerFoot.y;
    for (let i = 0; i < 22; i += 1) {
      const w = 0.045 + rnd() * 0.075;
      const h = 0.028 + rnd() * 0.045;
      box(
        s,
        (rnd() - 0.5) * 0.46,
        fy + h / 2,
        (rnd() - 0.5) * 0.44,
        w,
        h,
        w * (0.6 + rnd() * 0.7),
        [5917236, 6969924, 5129270, 8021832][rnd() * 4 | 0]
      );
    }
  }
  const shellGeo = s.geometry();
  const rustTex = (() => {
    const cv = rustCanvas(CONFIG.rust.size, CONFIG.rust.seed);
    if (!cv) return null;
    const tx = new THREE.CanvasTexture(cv);
    tx.colorSpace = THREE.SRGBColorSpace;
    tx.wrapS = THREE.RepeatWrapping;
    tx.wrapT = THREE.ClampToEdgeWrapping;
    tx.anisotropy = 4;
    tx.needsUpdate = true;
    return tx;
  })();
  if (rustTex) {
    const wm = materials["weathered-steel"];
    wm.map = rustTex;
    wm.bumpMap = rustTex;
    wm.bumpScale = CONFIG.rust.bump;
    wm.needsUpdate = true;
  }
  const shell = new THREE.Mesh(shellGeo, materials["weathered-steel"]);
  shell.name = "Tapered shell with rolled rim, plinth and feet";
  shell.castShadow = options.castShadow ?? true;
  shell.receiveShadow = options.receiveShadow ?? true;
  root.add(shell);
  const L = CONFIG.lug;
  const lugGeo = new THREE.BoxGeometry(L.w, L.h, L.t);
  const lugs = new THREE.InstancedMesh(lugGeo, materials["bracket-steel"], 4);
  lugs.name = "Corner lifting lugs";
  lugs.castShadow = options.castShadow ?? true;
  lugs.receiveShadow = options.receiveShadow ?? true;
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const corners = [[1, 1], [-1, 1], [-1, -1], [1, -1]];
  corners.forEach(([sx, sz], i) => {
    const arcX = sx * (R.rimOuter.hw - R.rimOuter.r);
    const arcZ = sz * (R.rimOuter.hd - R.rimOuter.r);
    const half = (L.w + L.t) / 2 * Math.SQRT1_2;
    const diag = R.rimOuter.r - half;
    const yaw = Math.atan2(sx, sz);
    q.setFromAxisAngle(v3(0, 1, 0), yaw);
    m4.compose(v3(arcX + sx * diag, L.y, arcZ + sz * diag), q, v3(1, 1, 1));
    lugs.setMatrixAt(i, m4);
  });
  lugs.instanceMatrix.needsUpdate = true;
  root.add(lugs);
  const nodes = { root, tub: shell, "corner-lugs": lugs };
  const meshes = { tub: shell, "corner-lugs": lugs };
  const colliders = {
    tub: {
      shape: "box",
      localCenter: [0, 0.525, 0],
      size: [1.5, 1.05, 1],
      axis: [0, 1, 0],
      notes: "Authoring intent only. thaikit derives the shipped compound from the built geometry with scripts/derive-colliders.mjs; this is not that file."
    }
  };
  root.userData.sculptRuntime = {
    nodes,
    meshes,
    sockets: {},
    colliders,
    destructionGroups: {}
  };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createOpenTopSteelSkipBinModel(options);
  if (spec && typeof spec === "object") root.userData.sculptSpec = spec;
  const rt = root.userData.sculptRuntime;
  if (rt) {
    const nodes = rt.nodes ?? {};
    const rootPivot = new THREE.Object3D();
    rootPivot.name = "root";
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: "root",
      pivot: { mode: "custom", localPosition: [0, 0, 0], axis: [0, 1, 0], name: "root" }
    };
    root.add(rootPivot);
    const colliders = Object.entries(rt.colliders ?? {}).filter(([, c]) => c && typeof c === "object" && Object.keys(c).length > 0).map(([id, c]) => ({ name: id, ...c }));
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
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: {} }
    };
  }
  return root;
}
function createModel(options = {}) {
  return createObjectModel(void 0, options);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogT3Blbi1Ub3AgU3RlZWwgU2tpcCBCaW4gLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IHRoZSByaW5nIGxvZnQsIHRoZVxuICogbWVyZ2UgYW5kIHRoZSBvdmFsIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpcyBhXG4gKiBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDEuNSB4IDEuMDUgeCAxLjAgbSBtZWFzdXJlZCBBQ1JPU1MgVEhFIFRPUCBSSU0gKHRoZSB3aWRlc3Qgc2VjdGlvbiksIG9yaWdpblxuICogYmFzZS1jZW50ZXIsICtZIHVwLCArWiB0aGUgZnJvbnQgd2FsbC5cbiAqXG4gKiBUaGUgcHJvcCBpcyBhbiBPUEVOIFZFU1NFTCwgbm90IGEgYm94OiBvbmUgbG9mdGVkIHNoZWV0LW1ldGFsIHN1cmZhY2UgcnVucyB1cCB0aGUgb3V0c2lkZSwgb3ZlclxuICogdGhlIHJvbGxlZCByaW0gYW5kIGJhY2sgZG93biB0aGUgaW5zaWRlIHRvIGEgcmVhbCBpbnRlcmlvciBmbG9vci4gVGhlIHdhbGxzIGxlYW4gT1VUV0FSRCwgc28gdGhlXG4gKiBtb3V0aCBpcyB0aGUgd2lkZXN0IHNlY3Rpb24gLS0gbG9zZSB0aGF0IGFuZCBpdCBzdG9wcyBiZWluZyB0aGlzIGJpbi5cbiAqXG4gKiBCdWRnZXQgKHRoYWlraXQgbWVkaXVtIGNsYXNzKTogMiBkcmF3IGNhbGxzLCAyIG1hdGVyaWFscywgNCB1bmlxdWUgZ2VvbWV0cmllcywgMjAwMCB0cmlhbmdsZXMuXG4gKiBFdmVyeXRoaW5nIHdlbGRlZCB0byB0aGUgc2hlbGwgLS0gcmltLCBwbGludGgsIGZlZXQsIGhhbmQtaG9sZSBiZXplbHMgLS0gaXMgbWVyZ2VkIGludG8gT05FXG4gKiBnZW9tZXRyeSwgYmVjYXVzZSBhIGNvbXBvbmVudCBpcyBhIGRyYXcgY2FsbCBhbmQgYSBwYXJ0IGh1bmcgb2ZmIGl0cyBvd24gcGl2b3QgY2FuIG5ldmVyIGJlXG4gKiBtZXJnZWQgYWZ0ZXJ3YXJkcy4gVGhlIGZvdXIgbGlmdGluZyBsdWdzIGFyZSB0aGUgc2Vjb25kIGRyYXcgY2FsbCwgYXMgb25lIEluc3RhbmNlZE1lc2guXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICBiYXNlVXJsPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29uZmlndXJhdGlvbiAqL1xuXG5jb25zdCBDT05GSUcgPSB7XG4gIC8vIE1lYXN1cmVkIHRvbmVzLiBUaGUgaW50ZXJpb3IgaXMgTElGVEVEIGZyb20gaXRzIG1lYXN1cmVtZW50IGFuZCB0aGUgcmVhc29uIGlzIGFyaXRobWV0aWMsIG5vdFxuICAvLyB0YXN0ZTogdGhlIHBsYXRlJ3MgaW50ZXJpb3IgcmVhZHMgbHVtYSA5OC45LCBhbmQgYSBmYWNlIGVuY2xvc2VkIGJ5IHRoZSBwcm9wJ3Mgb3duIHNpbGhvdWV0dGVcbiAgLy8gcmVuZGVycyBhdCB+MC41NiBvZiBpdHMgcGFpbnRlZCBsdW1hIGF0IHRoZSB3b3JzdCB0dXJudGFibGUgYXppbXV0aCAtLSA5OC45IHdvdWxkIGxhbmQgYXQgNTUsXG4gIC8vIGJlbG93IHRoZSBoYXJuZXNzIGJhY2tkcm9wJ3MgNTgsIGFuZCB0aGUgZ2F0ZSB3b3VsZCByZWFkIHRoZSB3aG9sZSBvcGVuIG1vdXRoIGFzIGEgaG9sZVxuICAvLyBwdW5jaGVkIHRocm91Z2ggdGhlIG1vZGVsLlxuICAvKiBFTlZFTE9QRSBSRS1CQVNFRCBmb3IgdGhlIHJ1c3QgY2FudmFzLlxuICAgKlxuICAgKiBBIGNhbnZhcyB0aWxlIGlzIGEgTVVMVElQTFk6IGl0IGNhbiBvbmx5IGRhcmtlbiB3aGF0IHRoZSB2ZXJ0ZXggY29sb3VyIGFscmVhZHkgaXMuIFRoZSBzaGVsbFxuICAgKiBoYXMgdG8gY2FycnkgdHdvIHRvbmVzIHRoYXQgYXJlIG5vdCBvcmRlcmluZ3Mgb2YgZWFjaCBvdGhlciAtLSBydXN0ICNjOThhNTggKDIwMSwxMzgsODgpIGFuZFxuICAgKiB0aGUgcGFsZSBncmV5LWJsdWUgc3RlZWwgaXQgZWF0cyBpbnRvLCAjYjBiOGJjICgxNzYsMTg0LDE4OCkgLS0gYW5kIG5vIHNpbmdsZSB2ZXJ0ZXggY29sb3VyXG4gICAqIG11bHRpcGxpZWQgZG93biByZWFjaGVzIGJvdGguIFNvIHRoZSBzaGVsbCdzIHZlcnRleCBjb2xvdXIgYmVjb21lcyB0aGUgcGVyLWNoYW5uZWwgTUFYSU1VTSBvZlxuICAgKiBldmVyeSB0b25lIGl0IG11c3QgY2FycnksICgyMDEsMTg0LDE4OCkgPSAjYzliOGJjLCBhbmQgdGhlIGNhbnZhcyBwYWludHMgdGhlIHRvbmVzIGJhY2s6XG4gICAqXG4gICAqICAgICBydXN0ICAgICAoMS4wMDAsIDAuNzQ5LCAwLjQ2NylcbiAgICogICAgIHBhbGUgICAgICgwLjg5OCwgMS4wMDAsIDEuMDAwKVxuICAgKiAgICAgZGFyayBydW4gKDAuNTI3LCAwLjQwMiwgMC4yNTUpXG4gICAqXG4gICAqIFRoZSBlbnZlbG9wZSB3YXMgc2NhbGVkIHVwIG9uY2UgYWZ0ZXIgbWVhc3VyaW5nOiBvdmVyIGEgbWF0Y2hlZCBiYW5kIC0tIHRoZSBsb3dlciBmcm9udCBmYWNlLFxuICAgKiAwLjYwIHRvIDAuODUgb2YgdGhlIHNpbGhvdWV0dGUgLS0gdGhlIHBsYXRlIHJlYWRzIGx1bWEgMTMzIGF0IG1lZGlhbiBzYXR1cmF0aW9uIDAuNTkgYW5kIHRoZVxuICAgKiBmaXJzdCB0aWxlZCBidWlsZCByZWFkIDEwMiBhdCAwLjYzLiBUaGUgc2F0dXJhdGlvbiB3YXMgYWxyZWFkeSByaWdodCwgc28gdGhlIGZpeCB3YXMgYSBzdHJhaWdodFxuICAgKiAxLjMweCBvbiB0aGUgZW52ZWxvcGUgYW5kIE5PVCBhIGNoYW5nZSB0byB0aGUgcmF0aW9zOiAjYzliOGJjIC0+ICNmZmVmZjQuXG4gICAqXG4gICAqIFRoZSBlbnZlbG9wZSBpcyBuZXZlciBzZWVuOiBldmVyeSB0ZXhlbCBvZiB0aGUgdGlsZSBpcyBvbmUgb2YgdGhvc2UgcmF0aW9zIG9yIGJldHdlZW4gdGhlbS5cbiAgICogQXV0aG9yZWQgYWdhaW5zdCB0aGUgcGxhdGUsIHdob3NlIGZyb250IGZhY2UgcHJvZmlsZXMgYXQgbHVtYSAxNDQtMTY5IGFuZCBzYXR1cmF0aW9uIDAuNDQtMC42NlxuICAgKiBvdmVyIHRoZSBydXN0IGFuZCBwYWxlcyB0b3dhcmQgdGhlIHJpbSAtLSB0aGUgZmlyc3QgYnVpbGQgc2hpcHBlZCBBTEwgb2YgdGhhdCBhcyBvbmUgZmxhdFxuICAgKiAjYzk4YTU4LCB3aGljaCBpcyB3aGF0IHRoZSBhc3NldCdzIG93biBub3RlcyBoYWQgZmxhZ2dlZCBhcyB0aGUgYmluZGluZyBjb25zdHJhaW50LlxuICAgKi9cbiAgY29sb3JzOiB7XG4gICAgZXh0ZXJpb3I6IDB4ZmZlZmY0LCAvLyBlbnZlbG9wZTsgdGhlIGNhbnZhcyBwYWludHMgdGhlIHJ1c3QgYW5kIHRoZSBwYWxlIHN0ZWVsIGJhY2sgb3V0IG9mIGl0XG4gICAgLy8gTElGVEVEIGZyb20gdGhlIG1lYXN1cmVkICM2MDY0NWMgKGx1bWEgOTguOSkuIEEgZmFjZSBlbmNsb3NlZCBieSB0aGUgcHJvcCdzIG93biBzaWxob3VldHRlXG4gICAgLy8gcmVuZGVycyBhdCB+MC41NiBvZiBpdHMgcGFpbnRlZCBsdW1hIGF0IHRoZSB3b3JzdCB0dXJudGFibGUgYXppbXV0aCwgYW5kIDk4Ljkgd291bGQgbGFuZCBhdFxuICAgIC8vIDU1IC0tIGJlbG93IHRoZSBoYXJuZXNzIGJhY2tkcm9wJ3MgNTggLS0gc28gdGhlIGdhdGUgd291bGQgcmVhZCB0aGUgd2hvbGUgb3BlbiBtb3V0aCBhcyBhXG4gICAgLy8gaG9sZSBwdW5jaGVkIHRocm91Z2ggdGhlIG1vZGVsLiAxODIgd2FzIG1vcmUgaGVhZHJvb20gdGhhbiB0aGF0IG5lZWRzIGFuZCBtYWRlIHRoZSBpbnNpZGVcbiAgICAvLyByZWFkIGJyaWdodGVyIHRoYW4gdGhlIG91dHNpZGU7IDE2NiBsYW5kcyBhdCA5MyBpbiB0aGUgc2FtZSB3b3JzdCBjYXNlLCBjbGVhciBvZiB0aGUgZ2F0ZSdzXG4gICAgLy8gMzQuLjgyIHdpbmRvdyBieSAxMS5cbiAgICBpbnRlcmlvcjogMHhhNGFhOWUsXG4gICAgcmltOiAweGQ4Y2ZiYywgICAgICAvLyBjcm9wcy9yaW0ucG5nIG1lYXN1cmVkICM4OTc2NjIgb24gYSBzaGFkb3dlZCBsZW5ndGg7IGxpdCByaW0gcmVhZHMgMTYyLTE3MFxuICAgIHJlY2VzczogMHg5YTkzOGEsICAgLy8gaGFuZC1ob2xlIGJhY2tpbmcsIGx1bWEgMTQ3IC0+IH44MiBzaWRlLWxpdCwgY2xlYXIgb2YgdGhlIGJhY2tkcm9wXG4gICAgZGVicmlzOiAweDZhNWE0NCwgICAvLyBydWJibGUgaW4gdGhlIGJvdHRvbTsgdGhlIHBsYXRlIGhhcyBhIGhlYXAgb2YgaXRcbiAgfSxcbiAgcnVzdDogeyBzaXplOiAxMDI0LCBzZWVkOiA0NzExLCBidW1wOiAwLjAwMzUgfSxcbiAgbWF0ZXJpYWxzOiBbXG4gICAgeyBpZDogJ3dlYXRoZXJlZC1zdGVlbCcsIGNvbG9yOiAweGZmZmZmZiwgcm91Z2huZXNzOiAwLjgyLCBtZXRhbG5lc3M6IDAuMTUsIHZlcnRleENvbG9yczogdHJ1ZSB9LFxuICAgIC8vIFRoZSBsdWdzIGFyZSB0aGUgcGxhdGUncyBEQVJLIHB1bmN0dWF0aW9uIG9uIGEgcGFsZSByaW0gLS0gaGVhdnkgcnVzdGVkIGNhc3RpbmdzLCBub3QgdGhlIGxpZ2h0XG4gICAgLy8gdGFicyB0aGlzIHNoaXBwZWQgYXMuIEhlbGQgb24gY2hyb21hOiBsdW1hIDExMCByZW5kZXJzIG5lYXIgNjAsIGluc2lkZSB0aGUgdHVybnRhYmxlIGdhdGUnc1xuICAgIC8vIDM0Li44MiBiYWNrZHJvcCB3aW5kb3csIGJ1dCBhdCBzYXR1cmF0aW9uIDAuNTMgYWdhaW5zdCBpdHMgMC4xNiBjZWlsaW5nLlxuICAgIHsgaWQ6ICdicmFja2V0LXN0ZWVsJywgY29sb3I6IDB4OGE2NDQwLCByb3VnaG5lc3M6IDAuNzgsIG1ldGFsbmVzczogMC4yMiwgdmVydGV4Q29sb3JzOiBmYWxzZSB9LFxuICBdLFxuICAvLyBSb3VuZGVkLXJlY3RhbmdsZSBzZWN0aW9ucy4gaHcvaGQgYXJlIGhhbGYtZXh0ZW50czsgciBpcyB0aGUgdmVydGljYWwgY29ybmVyIHJhZGl1cy5cbiAgLyogUExBTiBDT1JSRUNURUQgMjAyNi0wOC0zMSwgZnJvbSAxLjUwIHggMS4wMCBtIHRvIDAuODAgeCAwLjc4IG0uIEhlaWdodCBpcyB1bmNoYW5nZWQgYXQgMS4wNS5cbiAgICpcbiAgICogVGhlIGRlY2xhcmVkIDEuNTAgeCAxLjA1IHggMS4wMCBtYWRlIHRoaXMgYSBsb25nIGxvdyBza2lwLiBJdCBpcyBub3Qgb25lOiB0aGUgcGxhdGUgaXMgYVxuICAgKiBjaGVzdC1oZWlnaHQgc3F1YXJlIHN0ZWVsIGhvcHBlciBwaG90b2dyYXBoZWQgc3RlZXBseSBmcm9tIGFib3ZlIC0tIGEgdGFwZXJpbmcgc3F1YXJlIHR1YiBvblxuICAgKiBmb3VyIGNvcm5lciBmZWV0IHdpdGggbGlmdGluZyBleWVzIGFuZCBoaW5nZSBsdWdzIC0tIGFuZCBhIHRvcC1kb3duIHZpZXcgRk9SRVNIT1JURU5TIGhlaWdodCxcbiAgICogc28gaXQgaXMgYXQgbGVhc3QgYXMgdGFsbCBhcyBpdCBsb29rcy4gVHdvIGluZGVwZW5kZW50IHNpbmdsZS12aWV3IHJlY29uc3RydWN0aW9ucyBhZ3JlZSB3aXRoXG4gICAqIHRoZSBwbGF0ZSBhbmQgbm90IHdpdGggdGhlIGRlY2xhcmF0aW9uOlxuICAgKlxuICAgKiAgICAgd2lkdGgvaGVpZ2h0ICAgZGVwdGgvaGVpZ2h0XG4gICAqICAgICBNZXNoeSBwcm94eSAgICAgICAwLjY2ICAgICAgICAgIDAuNjRcbiAgICogICAgIHRyZWxsaXMgICAgICAgICAgIDAuODQgICAgICAgICAgMC44MFxuICAgKiAgICAgbWVhbiAgICAgICAgICAgICAgMC43NSAgICAgICAgICAwLjcyXG4gICAqICAgICBCVUlMVCAgICAgICAgICAgICAxLjQzICAgICAgICAgIDAuOTVcbiAgICpcbiAgICogVGhleSBhcmUgMjclIGFwYXJ0IG9uIHdpZHRoIC0tIGxvb3NlciB0aGFuIG9uZSB3b3VsZCBsaWtlIC0tIGJ1dCB0aGV5IGFncmVlIGluIERJUkVDVElPTiBhbmRcbiAgICogYm90aCByZWFkIHRoZSB0dWIgYXMgc3F1YXJlIGluIHBsYW4sIHdoaWNoIHRoZSBidWlsZCBkaWQgbm90IChpdCB3YXMgMS41OjEpLiBBdCB0aGUgdW5jaGFuZ2VkXG4gICAqIDEuMDUgbSBoZWlnaHQgdGhlIG1lYW4gZ2l2ZXMgMC43OSB4IDAuNzY7IHNoaXBwZWQgYXQgMC44MCB4IDAuNzguIGh3IHNjYWxlcyBieSAwLjUzMyBhbmQgaGQgYnlcbiAgICogMC43ODAsIHNvIHRoZSB3YWxsJ3MgaW53YXJkIHRhcGVyIHRvd2FyZCB0aGUgYmFzZSAoMC44MiBvZiB0aGUgaGVhZCkgaXMgcHJlc2VydmVkIGV4YWN0bHkuICovXG4gIHJpbmdzOiB7XG4gICAgd2FsbEZvb3Q6ICB7IGh3OiAwLjMyOCwgaGQ6IDAuMzIwLCByOiAwLjA2NSwgeTogMC4xMzAgfSxcbiAgICB3YWxsSGVhZDogIHsgaHc6IDAuNDAwLCBoZDogMC4zOTAsIHI6IDAuMDY1LCB5OiAwLjk4NSB9LFxuICAgIHJpbU91dGVyOiAgeyBodzogMC40MDAsIGhkOiAwLjM5MCwgcjogMC4wNjUsIHk6IDEuMDUwIH0sXG4gICAgcmltSW5uZXI6ICB7IGh3OiAwLjM4NCwgaGQ6IDAuMzY3LCByOiAwLjA1OSwgeTogMS4wNTAgfSxcbiAgICBpbm5lckZvb3Q6IHsgaHc6IDAuMzE1LCBoZDogMC4zMDAsIHI6IDAuMDU5LCB5OiAwLjE3MCB9LFxuICAgIHBsaW50aFRvcDogeyBodzogMC4zMzMsIGhkOiAwLjMyOCwgcjogMC4wNjUsIHk6IDAuMTMwIH0sXG4gICAgcGxpbnRoQm90OiB7IGh3OiAwLjMzMywgaGQ6IDAuMzI4LCByOiAwLjA2NSwgeTogMC4wOTAgfSxcbiAgfSxcbiAgY29ybmVyU2VnbWVudHM6IDUsIC8vIDQgcXVhZHJhbnRzIHggNiBwb2ludHMgPSAyNCBwb2ludHMgcGVyIHJpbmdcbiAgZmVldDogeyB3OiAwLjEzLCBoOiAwLjA5LCBkOiAwLjEwLCBpbnNldDogMC4wOSB9LFxuICBoYW5kSG9sZTogeyB5OiAwLjg2LCBhOiAwLjA3OCwgYjogMC4wNTgsIGJlemVsOiAwLjAxOCwgcHJvdWQ6IDAuMDA4LCByZWNlc3M6IDAuMDEyLCBzZWdtZW50czogMTYgfSxcbiAgbHVnOiB7IHc6IDAuMTIsIGg6IDAuMDgsIHQ6IDAuMDM4LCB5OiAxLjAxMiB9LFxufTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzbWFsbCB1dGlsaXRpZXMgKi9cblxudHlwZSBQdCA9IHsgeDogbnVtYmVyOyB6OiBudW1iZXIgfTtcblxuLyoqXG4gKiBBIHJvdW5kZWQgcmVjdGFuZ2xlIGFzIGEgY2xvc2VkIENDVyByaW5nIHZpZXdlZCBmcm9tICtZLCBmb3VyIHF1YWRyYW50IGFyY3Mgam9pbmVkIGJ5IHRoZVxuICogc3RyYWlnaHQgcnVucyBiZXR3ZWVuIHRoZW0uIFJldHVybnMgNCAqIChjb3JuZXJTZWdtZW50cyArIDEpIHBvaW50cy5cbiAqL1xuZnVuY3Rpb24gcm91bmRlZFJlY3RSaW5nKGh3OiBudW1iZXIsIGhkOiBudW1iZXIsIHI6IG51bWJlciwgc2VnOiBudW1iZXIpOiBQdFtdIHtcbiAgY29uc3QgcmFkID0gTWF0aC5taW4ociwgTWF0aC5taW4oaHcsIGhkKSAqIDAuOTgpO1xuICBjb25zdCBjeCA9IGh3IC0gcmFkO1xuICBjb25zdCBjeiA9IGhkIC0gcmFkO1xuICBjb25zdCBjZW50cmVzID0gW1xuICAgIHsgeDogK2N4LCB6OiArY3ogfSxcbiAgICB7IHg6IC1jeCwgejogK2N6IH0sXG4gICAgeyB4OiAtY3gsIHo6IC1jeiB9LFxuICAgIHsgeDogK2N4LCB6OiAtY3ogfSxcbiAgXTtcbiAgY29uc3QgcHRzOiBQdFtdID0gW107XG4gIGZvciAobGV0IHEgPSAwOyBxIDwgNDsgcSArPSAxKSB7XG4gICAgY29uc3QgYyA9IGNlbnRyZXNbcV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc2VnOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGEgPSAoKHEgKiA5MCArIChpICogOTApIC8gc2VnKSAqIE1hdGguUEkpIC8gMTgwO1xuICAgICAgcHRzLnB1c2goeyB4OiBjLnggKyByYWQgKiBNYXRoLmNvcyhhKSwgejogYy56ICsgcmFkICogTWF0aC5zaW4oYSkgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwdHM7XG59XG5cbi8qKiBBIGdyb3dhYmxlIG5vbi1pbmRleGVkIHRyaWFuZ2xlIHNvdXAgY2FycnlpbmcgcG9zaXRpb24gYW5kIGNvbG91ci4gKi9cbmNsYXNzIFNvdXAge1xuICBwb3M6IG51bWJlcltdID0gW107XG4gIGNvbDogbnVtYmVyW10gPSBbXTtcbiAgcHJpdmF0ZSBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG5cbiAgdHJpKGE6IFRIUkVFLlZlY3RvcjMsIGI6IFRIUkVFLlZlY3RvcjMsIGNjOiBUSFJFRS5WZWN0b3IzLCBoZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucG9zLnB1c2goYS54LCBhLnksIGEueiwgYi54LCBiLnksIGIueiwgY2MueCwgY2MueSwgY2Mueik7XG4gICAgLy8gVmVydGV4IGNvbG91cnMgbXVsdGlwbHkgaW4gTElORUFSIHNwYWNlLCBzbyB0aGUgY29sb3VyIG11c3QgYmUgY29udmVydGVkIG91dCBvZiBzUkdCIG9yIHRoZVxuICAgIC8vIHdob2xlIHByb3Agc2hpcHMgd2FzaGVkIG91dCBhZ2FpbnN0IGl0cyBtZWFzdXJlZCBhbGJlZG8uXG4gICAgdGhpcy5jLnNldEhleChoZXgsIFRIUkVFLlNSR0JDb2xvclNwYWNlKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkgdGhpcy5jb2wucHVzaCh0aGlzLmMuciwgdGhpcy5jLmcsIHRoaXMuYy5iKTtcbiAgfVxuXG4gIC8qKiBUd28gdHJpYW5nbGVzIG92ZXIgYSBxdWFkIGdpdmVuIGluIG9yZGVyOyB0aGUgY2FsbGVyIGRlY2lkZXMgdGhlIHdpbmRpbmcuICovXG4gIHF1YWQoYTogVEhSRUUuVmVjdG9yMywgYjogVEhSRUUuVmVjdG9yMywgYzogVEhSRUUuVmVjdG9yMywgZDogVEhSRUUuVmVjdG9yMywgaGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnRyaShhLCBiLCBjLCBoZXgpO1xuICAgIHRoaXMudHJpKGEsIGMsIGQsIGhleCk7XG4gIH1cblxuICBnZW9tZXRyeSgpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHRoaXMucG9zLCAzKSk7XG4gICAgLy8gRXZlcnkgdmVydGV4IG9mIGV2ZXJ5IG1lcmdlZCBwaWVjZSBjYXJyaWVzIGEgY29sb3VyLiBBIHZlcnRleENvbG9ycyBtYXRlcmlhbCByZWFkcyB0aGVcbiAgICAvLyBhdHRyaWJ1dGUgb3V0IG9mIEVWRVJZIGdlb21ldHJ5IGJvdW5kIHRvIGl0IGFuZCByZW5kZXJzIEJMQUNLIHdoZXJlIGl0IGlzIG1pc3NpbmcuXG4gICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodGhpcy5jb2wsIDMpKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodGhpcy51dnMoZyksIDIpKTtcbiAgICByZXR1cm4gZztcbiAgfVxuXG4gIC8qKlxuICAgKiBBUk9VTkQtQlktQUxPTkcgVVZzLlxuICAgKlxuICAgKiBgdmAgaXMgaGVpZ2h0IG92ZXIgdGhlIHByb3AncyBvd24gMS4wNSBtLCBzbyB0aGUgdGlsZSBtYXBzIE9OQ0UgdXAgdGhlIHR1YiBhbmQgaXRzIHRvcCByb3cgaXNcbiAgICogdGhlIHJpbSAtLSB3aGljaCBpcyB3aGF0IGxldHMgdGhlIGNhbnZhcyBwdXQgcGFsZSBmbGFraW5nIGF0IHRoZSByaW0gYW5kIHJ1c3QgcnVubmluZyBkb3duIG91dFxuICAgKiBvZiBpdCB3aXRob3V0IHRoZSBnZW9tZXRyeSBoYXZpbmcgdG8gc2F5IHdoZXJlIHRoZSB0b3AgaXMuXG4gICAqXG4gICAqIGB1YCBpcyB0aGUgYW5nbGUgYWJvdXQgK1ksIFRXSUNFIGFyb3VuZCwgd2hpY2ggd3JhcHMgdGhlIGZvdXIgd2FsbHMgY29udGludW91c2x5IGFuZCBsZWF2ZXMgbm9cbiAgICogc2VhbSBhdCBhIHJvdW5kZWQgY29ybmVyIHRoZSB3YXkgYSBwZXItd2FsbCBwbGFuYXIgcHJvamVjdGlvbiB3b3VsZC4gVHdvIHJlcGVhdHMgcmF0aGVyIHRoYW4gb25lXG4gICAqIGJlY2F1c2UgdGhlIHRpbGUgaGFzIHRvIGJlIHNxdWFyZSBhbmQgdGhlIHByb3AgaXMgbm90OiBhdCBvbmUgcmVwZWF0IGVhY2ggb2YgdGhlIGZvdXIgd2FsbHMgZ290XG4gICAqIDAuMTE1IG9mIHRoZSB0aWxlIC0tIDExOCB0ZXhlbHMgYWNyb3NzIGEgMC44IG0gd2FsbCBhZ2FpbnN0IDEwMjQgdXAgYSAxLjA1IG0gb25lLCBhbiBhc3BlY3Qgb2ZcbiAgICogNi42OjEgLS0gYW5kIGV2ZXJ5IG1hcmsgb24gaXQgc21lYXJlZCBpbnRvIGEgaG9yaXpvbnRhbCBiYW5kLiBBdCB0d28gcmVwZWF0cyBpdCBpcyAxLjU6MS5cbiAgICpcbiAgICogVGhlIElOU0lERSBpcyBub3QgYSBzZXBhcmF0ZSByZWdpb24gb2YgdGhlIHRpbGUuIEl0IHdhcywgYW5kIHRoYXQgd2FzIHdyb25nIHR3aWNlOiBpdCBoYWx2ZWRcbiAgICogdGhlIGhvcml6b250YWwgcmVzb2x1dGlvbiBhZ2FpbiwgYW5kIGV2ZXJ5IG5lYXItaG9yaXpvbnRhbCBmYWNlIC0tIHRoZSByaW0gdG9wLCB0aGUgcGxpbnRoLCB0aGVcbiAgICogZmVldCAtLSB0YWtlcyBhIHBsYW5hciBicmFuY2ggdGhhdCBzcGFucyB0aGUgd2hvbGUgdGlsZSB3aWR0aCwgc28gdGhvc2UgZmFjZXMgc2FtcGxlZCBBQ1JPU1NcbiAgICogdGhlIGJvdW5kYXJ5IGFuZCB0aGUgcmltIGNhbWUgYmFjayBpbnRlcmlvci1ncmV5LiBUaGUgaW50ZXJpb3IgaXMgYSBkYXJrZXIgVkVSVEVYIENPTE9VUiB3aXRoXG4gICAqIHRoZSBzYW1lIHJ1c3QgbXVsdGlwbGllZCBvdmVyIGl0LCB3aGljaCBpcyBhbHNvIHdoYXQgdGhlIHBsYXRlIHNob3dzOiBpdHMgaW5zaWRlIGlzIGdyZXktZ3JlZW5cbiAgICogd2l0aCB0aGUgc2FtZSBvcmFuZ2UgYmxlZWRpbmcgZG93biB0aGUgd2FsbHMuXG4gICAqXG4gICAqIE5lYXItaG9yaXpvbnRhbCBmYWNlcyB0YWtlIGEgcGxhbmFyIHgveiwgaGVsZCB0byB0aGUgdG9wIHRlbnRoIG9mIHRoZSB0aWxlIHNvIHRoZXkgc2FtcGxlIHRoZVxuICAgKiBwYWxlIGZsYWtpbmcgYmFuZCAtLSBgdmAgaXMgd29ybGQgaGVpZ2h0LCBzbyBhIGZsYXQgdG9wIGZhY2UgaGFzIE9ORSBoZWlnaHQgYW5kIHdvdWxkIG90aGVyd2lzZVxuICAgKiBzYW1wbGUgYSBzaW5nbGUgdGV4ZWwgcm93LlxuICAgKlxuICAgKiBUaGUgc291cCBpcyBub24taW5kZXhlZCB0cmlhbmdsZXMsIHNvIHRoZSBhdGFuMiB3cmFwIGlzIHVud3JhcHBlZCBQRVIgVFJJQU5HTEUgYWdhaW5zdCBpdHNcbiAgICogZmlyc3QgdmVydGV4IC0tIGEgdHJpYW5nbGUgc3RyYWRkbGluZyArLVBJIHdvdWxkIG90aGVyd2lzZSBydW4gdGhlIHdob2xlIHRpbGUgYmFja3dhcmRzIGFjcm9zc1xuICAgKiBpdHNlbGYsIHdoaWNoIHJlYWRzIGFzIGEgaGFyZCBicmlnaHQgc2VhbSBkb3duIG9uZSBjb3JuZXIuXG4gICAqL1xuICBwcml2YXRlIHV2cyhnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSk6IG51bWJlcltdIHtcbiAgICBjb25zdCBwb3MgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgY29uc3QgbnJtID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICBjb25zdCBIID0gMS4wNSwgUExBTiA9IDAuODYsIEFST1VORCA9IDI7XG4gICAgY29uc3Qgb3V0OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgcG9zLmNvdW50OyB0ICs9IDMpIHtcbiAgICAgIGxldCBmbGF0ID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHVzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAzOyBrICs9IDEpIHtcbiAgICAgICAgY29uc3QgaSA9IHQgKyBrO1xuICAgICAgICBpZiAoTWF0aC5hYnMobnJtLmdldFkoaSkpIDw9IDAuNykgZmxhdCA9IGZhbHNlO1xuICAgICAgICB1cy5wdXNoKE1hdGguYXRhbjIocG9zLmdldFooaSksIHBvcy5nZXRYKGkpKSAvICgyICogTWF0aC5QSSkgKyAwLjUpO1xuICAgICAgfVxuICAgICAgaWYgKGZsYXQpIHtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAzOyBrICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBpID0gdCArIGs7XG4gICAgICAgICAgb3V0LnB1c2gocG9zLmdldFgoaSkgLyBQTEFOICsgMC41LCAwLjkwICsgKHBvcy5nZXRaKGkpIC8gUExBTiArIDAuNSkgKiAwLjEwKTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMzsgayArPSAxKSB7XG4gICAgICAgIGxldCB1ID0gdXNba107XG4gICAgICAgIGlmIChrID4gMCkgdSAtPSBNYXRoLnJvdW5kKHUgLSB1c1swXSk7ICAgICAgICAgIC8vIHVud3JhcCBhZ2FpbnN0IHZlcnRleCAwXG4gICAgICAgIG91dC5wdXNoKHUgKiBBUk9VTkQsIHBvcy5nZXRZKHQgKyBrKSAvIEgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG59XG5cbi8qKlxuICogVGhlIHJ1c3QgdGlsZS4gU2VlZGVkLCBzbyB0aGUgc2FtZSBwcm9wIGlzIHRoZSBzYW1lIHByb3AgZXZlcnkgdGltZSBpdCBpcyBidWlsdCwgYW5kIGRyYXduIE9OQ0VcbiAqIGFzIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIGJvdW5kIGFzIGBtYXBgIGFuZCBgYnVtcE1hcGAgLS0gd2hpY2ggY29zdHMgbm8gZHJhdyBjYWxsLCBub1xuICogbWF0ZXJpYWwgYW5kIG5vIGdlb21ldHJ5LCBhbmQgaXMgdGhlIHJvdXRlIHRoZSBhc3NldCdzIG5vdGVzIG5hbWVkLlxuICpcbiAqIEdVQVJERUQgb24gYGRvY3VtZW50YC4gY2hlY2stY29wbGFuYXIubWpzLCBkZXJpdmUtY29sbGlkZXJzLm1qcyBhbmQgdGhlIHJ1bnRpbWUgcHJvYmUgYWxsXG4gKiBldmFsdWF0ZSB0aGlzIG1vZHVsZSB1bmRlciBwbGFpbiBOb2RlLCB3aGVyZSB0aGVyZSBpcyBubyBjYW52YXM7IHVuZ3VhcmRlZCwgdGhlIHByb3AgcGFzc2VzIHRoZVxuICogYnJvd3NlciByZW5kZXIgYW5kIHRoZW4gZmFpbHMgZXZlcnkgTm9kZS1zaWRlIGdhdGUgd2l0aCBhIHN0YWNrIHRyYWNlIHRoYXQgcmVhZHMgYXMgYSBicm9rZW5cbiAqIG1vZHVsZS4gYHByb21vdGUtbW9kZWwubWpzYCBjb25zdHJ1Y3RzIHRoZSBtb2R1bGUgaGVhZGxlc3NseSBiZWZvcmUgaXQgY29waWVzIGFueXRoaW5nLCBzbyB0aGlzXG4gKiBpcyBhIGhhcmQgZmFpbHVyZSBhbmQgbm90IGEgY29zbWV0aWMgb25lLiBXaXRoIG5vIGNhbnZhcyB0aGUgcHJvcCBzaW1wbHkgc2hpcHMgaXRzIGVudmVsb3BlXG4gKiBjb2xvdXIsIHdoaWNoIGlzIHRoZSBwYWxlIGVuZCBvZiBpdHMgb3duIHJhbmdlIC0tIG5vdCB3cm9uZywganVzdCB1bndlYXRoZXJlZC5cbiAqXG4gKiBgd2lsbFJlYWRGcmVxdWVudGx5YCBiZWNhdXNlIGEgR1BVLWJhY2tlZCAyRCBjYW52YXMgY29zdHMgc2Vjb25kcyBmb3IgYSBmZXcgdGhvdXNhbmQgcGF0aCBmaWxsc1xuICogYW5kIHRoaXMgZHJhd3MgYWJvdXQgZm91ciB0aG91c2FuZC5cbiAqXG4gKiBUaGUgdHdvIGhhbHZlcyBhcmUgdGhlIHR3byBzaWRlcyBvZiB0aGUgc3RlZWwgKHNlZSBgU291cC51dnNgKTogeCAwLi4wLjUgb2YgdGhlIGNhbnZhcyBpcyB0aGVcbiAqIE9VVFNJREUsIHggMC41Li4xIHRoZSBpbnNpZGUuIEJsb2JzIG5lYXIgZWl0aGVyIHZlcnRpY2FsIGVkZ2Ugb2YgYSBoYWxmIGFyZSBkcmF3biBhZ2FpbiBvbiB0aGVcbiAqIG90aGVyIHNpZGUgb2YgdGhhdCBlZGdlLCBzbyB0aGUgYW5ndWxhciB3cmFwIGhhcyBubyBzZWFtLlxuICovXG5mdW5jdGlvbiBydXN0Q2FudmFzKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsO1xuICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGMud2lkdGggPSBzaXplO1xuICBjLmhlaWdodCA9IHNpemU7XG4gIGNvbnN0IGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KTtcbiAgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuXG4gIGxldCBzID0gc2VlZCA+Pj4gMDtcbiAgY29uc3Qgcm5kID0gKCkgPT4gKCgocyA9IChzICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwKSA+Pj4gOCkgLyAxNjc3NzIxNik7XG4gIGNvbnN0IHJnYiA9IChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKSA9PiBgcmdiKCR7TWF0aC5yb3VuZChyICogMjU1KX0sJHtNYXRoLnJvdW5kKGcgKiAyNTUpfSwke01hdGgucm91bmQoYiAqIDI1NSl9KWA7XG4gIGNvbnN0IFJVU1QgPSByZ2IoMS4wMDAsIDAuNzQ5LCAwLjQ2Nyk7XG4gIGNvbnN0IFBBTEUgPSByZ2IoMC44OTgsIDEuMDAwLCAxLjAwMCk7XG4gIGNvbnN0IERBUksgPSByZ2IoMC41MjcsIDAuNDAyLCAwLjI1NSk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IFJVU1Q7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBzaXplLCBzaXplKTtcblxuICAvKiogRXZlcnkgbWFyayBpcyBkcmF3biBhZ2FpbiBhY3Jvc3MgdGhlIGxlZnQgYW5kIHJpZ2h0IGVkZ2VzLCBzbyB0aGUgdHdvLXJlcGVhdCB3cmFwIGhhcyBubyBzZWFtLiAqL1xuICBjb25zdCB3cmFwcGVkID0gKHg6IG51bWJlciwgZHJhdzogKHB4OiBudW1iZXIpID0+IHZvaWQpID0+IHtcbiAgICBkcmF3KHgpO1xuICAgIGlmICh4IDwgc2l6ZSAqIDAuMTQpIGRyYXcoeCArIHNpemUpO1xuICAgIGlmICh4ID4gc2l6ZSAqIDAuODYpIGRyYXcoeCAtIHNpemUpO1xuICB9O1xuICAvKipcbiAgICogQW4gRUxMSVBUSUNBTCBzb2Z0IHdhc2guIENpcmNsZXMgd2VyZSB0aGUgZmlyc3QgYXR0ZW1wdCBhbmQgZXZlcnkgcGFsZSBwYXRjaCByZWFkIGFzIGEgcG9sa2FcbiAgICogZG90IC0tIGEgaGFyZCBibG90Y2ggaXMgY2Ftb3VmbGFnZSwgbm90IHdlYXRoZXJpbmcuIFdlYXRoZXJpbmcgaXMgbGF5ZXJzOiBhIGZldyB2ZXJ5IGxhcmdlLFxuICAgKiB2ZXJ5IGZhaW50IGRyaWZ0cywgdGhlbiBtZWRpdW0gd2FzaGVzIG92ZXIgdGhlbSwgdGhlbiBzdHJlYWtzLCB0aGVuIGdyYWluLiBFYWNoIGlzIHdpZGVyIHRoYW5cbiAgICogaXQgaXMgdGFsbCBiZWNhdXNlIHJ1c3Qgc3ByZWFkcyBhbG9uZyBhIHJvbGxlZCBzdGVlbCBwYW5lbCBmYXN0ZXIgdGhhbiBpdCBjbGltYnMgaXQuXG4gICAqL1xuICBjb25zdCB3YXNoID0gKHB4OiBudW1iZXIsIHB5OiBudW1iZXIsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIGZpbGw6IHN0cmluZywgYTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZ3JkID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHB4LCBweSwgMCwgcHgsIHB5LCAxKTtcbiAgICBncmQuYWRkQ29sb3JTdG9wKDAsIGZpbGwpO1xuICAgIGdyZC5hZGRDb2xvclN0b3AoMC41NSwgZmlsbCk7XG4gICAgZ3JkLmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLDAsMCwwKScpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gYTtcbiAgICBjdHgudHJhbnNsYXRlKHB4LCBweSk7XG4gICAgY3R4LnNjYWxlKHJ4LCByeSk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtcHgsIC1weSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyZDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhweCwgcHksIDEsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH07XG5cbiAgLy8gQ2FudmFzIHJvdyAwIGlzIHRoZSBUT1Agb2YgdGhlIHByb3AgKHYgPSAxIHdpdGggYSBDYW52YXNUZXh0dXJlJ3MgZGVmYXVsdCBmbGlwWSksIHNvIHRoZSBwYWxlXG4gIC8vIHN0ZWVsIHNpdHMgaGlnaCBhbmQgdGhlIHJ1c3QgcnVucyBET1dOIG91dCBvZiBpdCAtLSB0aGUgZGlyZWN0aW9uIHdhdGVyIGxlYXZlcyBhIHJpbSwgYW5kIHdoYXRcbiAgLy8gdGhlIHBsYXRlIHNob3dzOiBpdHMgZnJvbnQgZmFjZSBwcm9maWxlcyBwYWxlIG5lYXIgdGhlIHJpbSBhbmQgcmVhY2hlcyBsdW1hIDE0NC0xNjkgYXRcbiAgLy8gc2F0dXJhdGlvbiAwLjYwLTAuNjYgYnkgbWlkLWhlaWdodC5cbiAgLy9cbiAgLy8gTGF5ZXIgMTogYnJvYWQgZmFpbnQgZHJpZnQsIHBhbGUgaGlnaCBhbmQgZGFyayBsb3cuIEFsbW9zdCBpbnZpc2libGUgYWxvbmU7IGl0IGlzIHdoYXQgc3RvcHNcbiAgLy8gdGhlIGxheWVycyBhYm92ZSBpdCByZWFkaW5nIGFzIG1hcmtzIHNjYXR0ZXJlZCBvbiBhIGZsYXQgZmllbGQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSArPSAxKSB7XG4gICAgd3JhcHBlZChybmQoKSAqIHNpemUsIChweCkgPT4gd2FzaChweCwgcm5kKCkgKiBzaXplICogMC4zOCwgMjQwICsgcm5kKCkgKiAzMzAsIDEyMCArIHJuZCgpICogMTkwLCBQQUxFLCAwLjEwICsgcm5kKCkgKiAwLjEzKSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpICs9IDEpIHtcbiAgICB3cmFwcGVkKHJuZCgpICogc2l6ZSwgKHB4KSA9PiB3YXNoKHB4LCBzaXplICogKDAuNDUgKyBybmQoKSAqIDAuNTUpLCAyMDAgKyBybmQoKSAqIDMwMCwgMTEwICsgcm5kKCkgKiAxNzAsIERBUkssIDAuMDcgKyBybmQoKSAqIDAuMTEpKTtcbiAgfVxuICAvLyBMYXllciAyOiBtZWRpdW0gd2FzaGVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjI7IGkgKz0gMSkge1xuICAgIHdyYXBwZWQocm5kKCkgKiBzaXplLCAocHgpID0+IHdhc2gocHgsIHJuZCgpICogc2l6ZSAqIDAuNDIsIDgwICsgcm5kKCkgKiAxNTAsIDQ0ICsgcm5kKCkgKiA5MCwgUEFMRSwgMC4xMCArIHJuZCgpICogMC4xOCkpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDI7IGkgKz0gMSkge1xuICAgIHdyYXBwZWQocm5kKCkgKiBzaXplLCAocHgpID0+IHdhc2gocHgsIHJuZCgpICogc2l6ZSwgNjAgKyBybmQoKSAqIDEzMCwgMzQgKyBybmQoKSAqIDc4LCBEQVJLLCAwLjA3ICsgcm5kKCkgKiAwLjE0KSk7XG4gIH1cbiAgLy8gTGF5ZXIgMzogdGhlIHJ1bnMuIFdpZHRocyBzcHJlYWQgaGFyZCAtLSBhIGN1cnRhaW4gb2Ygc2FtZS13aWR0aCBzdHJpcGVzIGlzIGFzIHdyb25nIGFzIGEgZmllbGRcbiAgLy8gb2YgZG90cyAtLSBhbmQgYSB0aGlyZCBvZiB0aGVtIGFyZSBoYWlybGluZXMuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTUwOyBpICs9IDEpIHtcbiAgICBjb25zdCB5MCA9IHJuZCgpICogc2l6ZSAqIDAuNDY7XG4gICAgY29uc3QgbGVuID0gc2l6ZSAqICgwLjEwICsgcm5kKCkgKiBybmQoKSAqIDAuNjIpO1xuICAgIGNvbnN0IHcgPSBybmQoKSA8IDAuMzQgPyAxICsgcm5kKCkgKiAyIDogMyArIHJuZCgpICogcm5kKCkgKiAyMDtcbiAgICB3cmFwcGVkKHJuZCgpICogc2l6ZSwgKHB4KSA9PiB7XG4gICAgICBjb25zdCBncmQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICAgIGdyZC5hZGRDb2xvclN0b3AoMCwgREFSSyk7XG4gICAgICBncmQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDAsMCwwLDApJyk7XG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAwLjEyICsgcm5kKCkgKiAwLjI2O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyZDtcbiAgICAgIGN0eC5maWxsUmVjdChweCAtIHcgLyAyLCB5MCwgdywgbGVuKTtcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgfSk7XG4gIH1cbiAgLy8gTGF5ZXIgNDogcGFsZSBmbGFraW5nIEFMT05HIHRoZSByaW0sIGVsb25nYXRlZCB3aXRoIHRoZSByb2xsLiBUaGUgbmVhci1ob3Jpem9udGFsIGZhY2VzIGFyZVxuICAvLyBwaW5uZWQgaW50byB0aGlzIGJhbmQsIHNvIGl0IGlzIGFsc28gd2hhdCB0aGUgcmltIHRvcCwgdGhlIHBsaW50aCBhbmQgdGhlIGZlZXQgZ2V0LlxuICAvLyBNYW55IGFuZCBmYWludCwgbm90IGZldyBhbmQgc3Ryb25nOiBhdCA4MCBtYXJrcyBvZiBhbHBoYSAwLjIyLTAuNjIgdGhlIGJhbmQgcmVhZCBhcyBhIHJvdyBvZlxuICAvLyBwYWxlIEJFQURTIHJvdW5kIHRoZSByaW0sIGFuZCB0aGUgbmVhci1ob3Jpem9udGFsIGZhY2VzIC0tIHdoaWNoIGFyZSBhbGwgcGlubmVkIGludG8gdGhpcyBzYW1lXG4gIC8vIGJhbmQgLS0gbWFnbmlmaWVkIHRoZW0gYWNyb3NzIHRoZSB3aG9sZSByaW0gdG9wLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IDIyMDsgaSArPSAxKSB7XG4gICAgd3JhcHBlZChybmQoKSAqIHNpemUsIChweCkgPT4gd2FzaChweCwgcm5kKCkgKiBzaXplICogMC4xOCwgMTIgKyBybmQoKSAqIDQ0LCA0ICsgcm5kKCkgKiAxMywgUEFMRSwgMC4wOSArIHJuZCgpICogMC4yMCkpO1xuICB9XG4gIC8vIExheWVyIDU6IGdyYWluXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzAwMDsgaSArPSAxKSB7XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMC4wNCArIHJuZCgpICogMC4xMDtcbiAgICBjdHguZmlsbFN0eWxlID0gcm5kKCkgPCAwLjUgPyBEQVJLIDogUEFMRTtcbiAgICBjdHguZmlsbFJlY3Qocm5kKCkgKiBzaXplLCBybmQoKSAqIHNpemUsIDEgKyBybmQoKSAqIDIsIDEgKyBybmQoKSAqIDMpO1xuICB9XG4gIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gIHJldHVybiBjO1xufVxuXG5jb25zdCB2MyA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSA9PiBuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCB6KTtcbmNvbnN0IGF0ID0gKHA6IFB0LCB5OiBudW1iZXIpID0+IHYzKHAueCwgeSwgcC56KTtcblxuLyoqIExvZnQgYmV0d2VlbiB0d28gcmluZ3MuIGBvdXR3YXJkYCBwaWNrcyB0aGUgd2luZGluZyB0aGF0IHNlbmRzIG5vcm1hbHMgYXdheSBmcm9tIHRoZSBheGlzLiAqL1xuZnVuY3Rpb24gbG9mdChzOiBTb3VwLCBsb3dlcjogUHRbXSwgbHk6IG51bWJlciwgdXBwZXI6IFB0W10sIHV5OiBudW1iZXIsIGhleDogbnVtYmVyLCBvdXR3YXJkOiBib29sZWFuKTogdm9pZCB7XG4gIGNvbnN0IG4gPSBsb3dlci5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XG4gICAgY29uc3QgaiA9IChpICsgMSkgJSBuO1xuICAgIGNvbnN0IEwwID0gYXQobG93ZXJbaV0sIGx5KTtcbiAgICBjb25zdCBMMSA9IGF0KGxvd2VyW2pdLCBseSk7XG4gICAgY29uc3QgVTAgPSBhdCh1cHBlcltpXSwgdXkpO1xuICAgIGNvbnN0IFUxID0gYXQodXBwZXJbal0sIHV5KTtcbiAgICBpZiAob3V0d2FyZCkgcy5xdWFkKEwwLCBVMCwgVTEsIEwxLCBoZXgpO1xuICAgIGVsc2Ugcy5xdWFkKEwwLCBMMSwgVTEsIFUwLCBoZXgpO1xuICB9XG59XG5cbi8qKiBBIGZsYXQgYW5udWx1cyBiZXR3ZWVuIHR3byByaW5ncyBhdCB0aGUgc2FtZSBoZWlnaHQuIGB1cGAgZmFjZXMgK1ksIG90aGVyd2lzZSAtWS4gKi9cbmZ1bmN0aW9uIGFubnVsdXMoczogU291cCwgb3V0ZXI6IFB0W10sIGlubmVyOiBQdFtdLCB5OiBudW1iZXIsIGhleDogbnVtYmVyLCB1cDogYm9vbGVhbik6IHZvaWQge1xuICBjb25zdCBuID0gb3V0ZXIubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgIGNvbnN0IGogPSAoaSArIDEpICUgbjtcbiAgICBjb25zdCBPMCA9IGF0KG91dGVyW2ldLCB5KTtcbiAgICBjb25zdCBPMSA9IGF0KG91dGVyW2pdLCB5KTtcbiAgICBjb25zdCBJMCA9IGF0KGlubmVyW2ldLCB5KTtcbiAgICBjb25zdCBJMSA9IGF0KGlubmVyW2pdLCB5KTtcbiAgICBpZiAodXApIHMucXVhZChPMCwgSTAsIEkxLCBPMSwgaGV4KTtcbiAgICBlbHNlIHMucXVhZChPMCwgTzEsIEkxLCBJMCwgaGV4KTtcbiAgfVxufVxuXG4vKiogQSB0cmlhbmdsZSBmYW4gY2xvc2luZyBhIHJpbmcgYXQgaGVpZ2h0IHkuIGB1cGAgZmFjZXMgK1ksIG90aGVyd2lzZSAtWS4gKi9cbmZ1bmN0aW9uIGNhcChzOiBTb3VwLCByaW5nOiBQdFtdLCB5OiBudW1iZXIsIGhleDogbnVtYmVyLCB1cDogYm9vbGVhbik6IHZvaWQge1xuICBjb25zdCBjID0gdjMoMCwgeSwgMCk7XG4gIGNvbnN0IG4gPSByaW5nLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcbiAgICBjb25zdCBqID0gKGkgKyAxKSAlIG47XG4gICAgY29uc3QgQSA9IGF0KHJpbmdbaV0sIHkpO1xuICAgIGNvbnN0IEIgPSBhdChyaW5nW2pdLCB5KTtcbiAgICBpZiAodXApIHMudHJpKGMsIEIsIEEsIGhleCk7XG4gICAgZWxzZSBzLnRyaShjLCBBLCBCLCBoZXgpO1xuICB9XG59XG5cbi8qKiBBbiBheGlzLWFsaWduZWQgYm94IGFzIDEyIHRyaWFuZ2xlcywgY2VudHJlZCBhdCAoY3gsIGN5LCBjeikuICovXG5mdW5jdGlvbiBib3goczogU291cCwgY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlciwgaGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeDAgPSBjeCAtIHcgLyAyLCB4MSA9IGN4ICsgdyAvIDI7XG4gIGNvbnN0IHkwID0gY3kgLSBoIC8gMiwgeTEgPSBjeSArIGggLyAyO1xuICBjb25zdCB6MCA9IGN6IC0gZCAvIDIsIHoxID0gY3ogKyBkIC8gMjtcbiAgY29uc3QgcCA9IFtcbiAgICB2Myh4MCwgeTAsIHowKSwgdjMoeDEsIHkwLCB6MCksIHYzKHgxLCB5MSwgejApLCB2Myh4MCwgeTEsIHowKSxcbiAgICB2Myh4MCwgeTAsIHoxKSwgdjMoeDEsIHkwLCB6MSksIHYzKHgxLCB5MSwgejEpLCB2Myh4MCwgeTEsIHoxKSxcbiAgXTtcbiAgcy5xdWFkKHBbNF0sIHBbNV0sIHBbNl0sIHBbN10sIGhleCk7IC8vICtaXG4gIHMucXVhZChwWzFdLCBwWzBdLCBwWzNdLCBwWzJdLCBoZXgpOyAvLyAtWlxuICBzLnF1YWQocFs1XSwgcFsxXSwgcFsyXSwgcFs2XSwgaGV4KTsgLy8gK1hcbiAgcy5xdWFkKHBbMF0sIHBbNF0sIHBbN10sIHBbM10sIGhleCk7IC8vIC1YXG4gIHMucXVhZChwWzNdLCBwWzddLCBwWzZdLCBwWzJdLCBoZXgpOyAvLyArWVxuICBzLnF1YWQocFswXSwgcFsxXSwgcFs1XSwgcFs0XSwgaGV4KTsgLy8gLVlcbn1cblxuLyoqXG4gKiBBIGhhbmQtaG9sZSBvbiBhIExFQU5JTkcgd2FsbDogYSByZWNlc3NlZCBvdmFsIGJhY2tpbmcgYmVoaW5kIGEgcHJvdWQgb3ZhbCBiZXplbCByaW5nLlxuICpcbiAqIERlbGliZXJhdGVseSBOT1QgYSBib29sZWFuIGhvbGUgY3V0IHRocm91Z2ggdGhlIGxvZnRlZCBzaGVsbCAtLSB0aGUgc2FtZSBjYWxsIHRoZSBjb25jcmV0ZVxuICogc3RyZWV0IGJpbidzIG9wZW5pbmcgcmVjb3Jkcy4gQSByZWFsIGFwZXJ0dXJlIGNvc3RzIGEgYm9vbGVhbiB0aGlzIGJ1ZGdldCBoYXMgbm8gcm9vbSBmb3IsIGFuZFxuICogYXQgcHJvcCBkaXN0YW5jZSBhIHJlY2VzcyBiZWhpbmQgYSBiZXplbCByZWFkcyBhcyBhIGhvbGUuIFJlY29yZGVkIGFzIGFuIGFwcHJveGltYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGhhbmRIb2xlKHM6IFNvdXAsIGNlbnRyZTogVEhSRUUuVmVjdG9yMywgbm9ybWFsOiBUSFJFRS5WZWN0b3IzLCBjb2xvcnM6IHR5cGVvZiBDT05GSUcuY29sb3JzKTogdm9pZCB7XG4gIGNvbnN0IHsgYSwgYiwgYmV6ZWwsIHByb3VkLCByZWNlc3MsIHNlZ21lbnRzIH0gPSBDT05GSUcuaGFuZEhvbGU7XG4gIGNvbnN0IG56ID0gbm9ybWFsLmNsb25lKCkubm9ybWFsaXplKCk7XG4gIGNvbnN0IHVwID0gTWF0aC5hYnMobnoueSkgPiAwLjk5ID8gdjMoMSwgMCwgMCkgOiB2MygwLCAxLCAwKTtcbiAgY29uc3QgbnggPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNyb3NzVmVjdG9ycyh1cCwgbnopLm5vcm1hbGl6ZSgpO1xuICBjb25zdCBueSA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKG56LCBueCkubm9ybWFsaXplKCk7XG4gIGNvbnN0IG9uID0gKHU6IG51bWJlciwgdjogbnVtYmVyLCBvZmY6IG51bWJlcikgPT5cbiAgICBjZW50cmUuY2xvbmUoKS5hZGRTY2FsZWRWZWN0b3IobngsIHUpLmFkZFNjYWxlZFZlY3RvcihueSwgdikuYWRkU2NhbGVkVmVjdG9yKG56LCBvZmYpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudHM7IGkgKz0gMSkge1xuICAgIGNvbnN0IHQwID0gKGkgLyBzZWdtZW50cykgKiBNYXRoLlBJICogMjtcbiAgICBjb25zdCB0MSA9ICgoaSArIDEpIC8gc2VnbWVudHMpICogTWF0aC5QSSAqIDI7XG4gICAgY29uc3QgYzAgPSBNYXRoLmNvcyh0MCksIHMwID0gTWF0aC5zaW4odDApLCBjMSA9IE1hdGguY29zKHQxKSwgczEgPSBNYXRoLnNpbih0MSk7XG4gICAgLy8gQmV6ZWw6IGEgcmFpc2VkIHJpbmcgYXJvdW5kIHRoZSBhcGVydHVyZSwgc3RhbmRpbmcgcHJvdWRlc3Qgb2YgdGhlIHRocmVlIHN1cmZhY2VzLlxuICAgIHMucXVhZChcbiAgICAgIG9uKGEgKiBjMCwgYiAqIHMwLCBwcm91ZCArIHJlY2VzcyksIG9uKChhICsgYmV6ZWwpICogYzAsIChiICsgYmV6ZWwpICogczAsIHByb3VkKSxcbiAgICAgIG9uKChhICsgYmV6ZWwpICogYzEsIChiICsgYmV6ZWwpICogczEsIHByb3VkKSwgb24oYSAqIGMxLCBiICogczEsIHByb3VkICsgcmVjZXNzKSxcbiAgICAgIGNvbG9ycy5leHRlcmlvcixcbiAgICApO1xuICAgIC8vIFRoZSBhcGVydHVyZSBiYWNraW5nLiBJdCBzaXRzIFBST1VEIG9mIHRoZSB3YWxsLCBub3QgcmVjZXNzZWQgaW50byBpdDogd2l0aCBubyBib29sZWFuIGN1dFxuICAgIC8vIHRoZXJlIGlzIG5vIGhvbGUgdG8gc2VlIHRocm91Z2gsIHNvIGEgYmFja2luZyBzZXQgYmVoaW5kIHRoZSB3YWxsIHBsYW5lIGlzIG9jY2x1ZGVkIGJ5IHRoZVxuICAgIC8vIHdhbGwgYW5kIHJlbmRlcnMgYXMgbm90aGluZyBhdCBhbGwuIFN0YW5kaW5nIGl0IDQgbW0gb2ZmIHRoZSB3YWxsIGluc2lkZSB0aGUgYmV6ZWwncyB0aHJvYXRcbiAgICAvLyBpcyB0aGUgc2FtZSBjYWxsIHRoZSBjb25jcmV0ZSBzdHJlZXQgYmluJ3Mgb3BlbmluZyBwYXRjaCByZWNvcmRzLCBhbmQgaXQgcmVhZHMgYXMgYSBob2xlIGF0XG4gICAgLy8gcHJvcCBkaXN0YW5jZSB3aGlsZSBzdGF5aW5nIGEgc2VwYXJhdGUgcGxhbmUgdGhhdCBjYW5ub3Qgei1maWdodC5cbiAgICBzLnRyaShvbigwLCAwLCBwcm91ZCksIG9uKGEgKiBjMCwgYiAqIHMwLCBwcm91ZCArIHJlY2VzcyksIG9uKGEgKiBjMSwgYiAqIHMxLCBwcm91ZCArIHJlY2VzcyksIGNvbG9ycy5yZWNlc3MpO1xuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIGJ1aWxkICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcGVuVG9wU3RlZWxTa2lwQmluTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdPcGVuLVRvcCBTdGVlbCBTa2lwIEJpbic7XG5cbiAgY29uc3QgbWF0ZXJpYWxzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBtIG9mIENPTkZJRy5tYXRlcmlhbHMpIHtcbiAgICBtYXRlcmlhbHNbbS5pZF0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihtLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogbS5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IG0ubWV0YWxuZXNzLFxuICAgICAgdmVydGV4Q29sb3JzOiBtLnZlcnRleENvbG9ycyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgfSk7XG4gICAgbWF0ZXJpYWxzW20uaWRdLm5hbWUgPSBtLmlkO1xuICB9XG5cbiAgY29uc3Qgc2VnID0gQ09ORklHLmNvcm5lclNlZ21lbnRzO1xuICBjb25zdCBSID0gQ09ORklHLnJpbmdzO1xuICBjb25zdCBDID0gQ09ORklHLmNvbG9ycztcbiAgY29uc3QgcmluZyA9IChrOiBrZXlvZiB0eXBlb2YgUikgPT4gcm91bmRlZFJlY3RSaW5nKFJba10uaHcsIFJba10uaGQsIFJba10uciwgc2VnKTtcblxuICBjb25zdCB3YWxsRm9vdCA9IHJpbmcoJ3dhbGxGb290Jyk7XG4gIGNvbnN0IHdhbGxIZWFkID0gcmluZygnd2FsbEhlYWQnKTtcbiAgY29uc3QgcmltT3V0ZXIgPSByaW5nKCdyaW1PdXRlcicpO1xuICBjb25zdCByaW1Jbm5lciA9IHJpbmcoJ3JpbUlubmVyJyk7XG4gIGNvbnN0IGlubmVyRm9vdCA9IHJpbmcoJ2lubmVyRm9vdCcpO1xuICBjb25zdCBwbGludGhUb3AgPSByaW5nKCdwbGludGhUb3AnKTtcbiAgY29uc3QgcGxpbnRoQm90ID0gcmluZygncGxpbnRoQm90Jyk7XG5cbiAgY29uc3QgcyA9IG5ldyBTb3VwKCk7XG5cbiAgLy8gVGhlIHZlc3NlbCwgaW4gb25lIGNvbnRpbnVvdXMgcnVuOiB1cCB0aGUgb3V0c2lkZSwgb3ZlciB0aGUgcmltLCBiYWNrIGRvd24gdGhlIGluc2lkZS5cbiAgbG9mdChzLCB3YWxsRm9vdCwgUi53YWxsRm9vdC55LCB3YWxsSGVhZCwgUi53YWxsSGVhZC55LCBDLmV4dGVyaW9yLCB0cnVlKTtcbiAgbG9mdChzLCB3YWxsSGVhZCwgUi53YWxsSGVhZC55LCByaW1PdXRlciwgUi5yaW1PdXRlci55LCBDLnJpbSwgdHJ1ZSk7XG4gIGFubnVsdXMocywgcmltT3V0ZXIsIHJpbUlubmVyLCBSLnJpbU91dGVyLnksIEMucmltLCB0cnVlKTtcbiAgbG9mdChzLCBpbm5lckZvb3QsIFIuaW5uZXJGb290LnksIHJpbUlubmVyLCBSLnJpbUlubmVyLnksIEMuaW50ZXJpb3IsIGZhbHNlKTtcbiAgY2FwKHMsIGlubmVyRm9vdCwgUi5pbm5lckZvb3QueSwgQy5pbnRlcmlvciwgdHJ1ZSk7XG5cbiAgLy8gUGxpbnRoIHJhaWwsIHN0YW5kaW5nIDEwIG1tIHByb3VkIG9mIHRoZSB3YWxsIGZvb3QsIGNsb3NlZCB1bmRlcm5lYXRoLiBUaGUgc3RlcCBiZXR3ZWVuIHRoZVxuICAvLyBwbGludGgncyBvdXRlciByaW5nIGFuZCB0aGUgd2FsbCBmb290IGluc2lkZSBpdCBpcyBhIHJlYWwgaG9yaXpvbnRhbCBsZWRnZSBhbmQgaGFzIHRvIGJlXG4gIC8vIHN1cmZhY2VkOiBsZWZ0IG9wZW4gaXQgaXMgYSBnYXAgaW4gdGhlIHNoZWxsLCBhbmQgaXQgcmVuZGVyZWQgYXMgYSBkYXJrIHNlYW0gcm91bmQgdGhlIGJhc2UuXG4gIGxvZnQocywgcGxpbnRoQm90LCBSLnBsaW50aEJvdC55LCBwbGludGhUb3AsIFIucGxpbnRoVG9wLnksIEMuZXh0ZXJpb3IsIHRydWUpO1xuICBhbm51bHVzKHMsIHBsaW50aFRvcCwgd2FsbEZvb3QsIFIucGxpbnRoVG9wLnksIEMuZXh0ZXJpb3IsIHRydWUpO1xuICBjYXAocywgcGxpbnRoQm90LCBSLnBsaW50aEJvdC55LCBDLmV4dGVyaW9yLCBmYWxzZSk7XG5cbiAgLy8gRm91ciBmZWV0LCBpbnNldCBmcm9tIHRoZSBwbGludGggY29ybmVycyBzbyB0aGUgdHViIHN0YW5kcyBjbGVhciBvZiB0aGUgZ3JvdW5kLlxuICBjb25zdCBmID0gQ09ORklHLmZlZXQ7XG4gIGNvbnN0IGZ4ID0gUi5wbGludGhCb3QuaHcgLSBmLmluc2V0IC0gZi53IC8gMjtcbiAgY29uc3QgZnogPSBSLnBsaW50aEJvdC5oZCAtIGYuaW5zZXQgLSBmLmQgLyAyO1xuICBmb3IgKGNvbnN0IHN4IG9mIFstMSwgMV0pIHtcbiAgICBmb3IgKGNvbnN0IHN6IG9mIFstMSwgMV0pIHtcbiAgICAgIGJveChzLCBzeCAqIGZ4LCBmLmggLyAyLCBzeiAqIGZ6LCBmLncsIGYuaCwgZi5kLCBDLmV4dGVyaW9yKTtcbiAgICB9XG4gIH1cblxuICAvLyBPbmUgaGFuZC1ob2xlIHBlciB3YWxsLiBUaGUgd2FsbHMgTEVBTiwgc28gZWFjaCBzaXRzIG9uIGl0cyBvd24gdGlsdGVkIHBsYW5lIGFuZCBpdHMgbm9ybWFsXG4gIC8vIHRpbHRzIGRvd24gYnkgdGhlIHdhbGwncyBvd24gbGVhbiAtLSA4Ljk3IGRlZ3JlZXMgb24gdGhlIGxvbmcgd2FsbHMsIDYuMDEgb24gdGhlIHNob3J0LlxuICBjb25zdCBoeSA9IENPTkZJRy5oYW5kSG9sZS55O1xuICBjb25zdCB0ID0gKGh5IC0gUi53YWxsRm9vdC55KSAvIChSLndhbGxIZWFkLnkgLSBSLndhbGxGb290LnkpO1xuICBjb25zdCBod0F0ID0gUi53YWxsRm9vdC5odyArIChSLndhbGxIZWFkLmh3IC0gUi53YWxsRm9vdC5odykgKiB0O1xuICBjb25zdCBoZEF0ID0gUi53YWxsRm9vdC5oZCArIChSLndhbGxIZWFkLmhkIC0gUi53YWxsRm9vdC5oZCkgKiB0O1xuICBjb25zdCBsZWFuVyA9IE1hdGguYXRhbjIoUi53YWxsSGVhZC5odyAtIFIud2FsbEZvb3QuaHcsIFIud2FsbEhlYWQueSAtIFIud2FsbEZvb3QueSk7XG4gIGNvbnN0IGxlYW5EID0gTWF0aC5hdGFuMihSLndhbGxIZWFkLmhkIC0gUi53YWxsRm9vdC5oZCwgUi53YWxsSGVhZC55IC0gUi53YWxsRm9vdC55KTtcbiAgZm9yIChjb25zdCBzeiBvZiBbLTEsIDFdKSB7XG4gICAgaGFuZEhvbGUocywgdjMoMCwgaHksIHN6ICogaGRBdCksIHYzKDAsIC1NYXRoLnNpbihsZWFuRCksIHN6ICogTWF0aC5jb3MobGVhbkQpKSwgQyk7XG4gIH1cbiAgZm9yIChjb25zdCBzeCBvZiBbLTEsIDFdKSB7XG4gICAgaGFuZEhvbGUocywgdjMoc3ggKiBod0F0LCBoeSwgMCksIHYzKHN4ICogTWF0aC5jb3MobGVhblcpLCAtTWF0aC5zaW4obGVhblcpLCAwKSwgQyk7XG4gIH1cblxuICAvLyBSdWJibGUgaW4gdGhlIGJvdHRvbS4gVGhlIHBsYXRlIGhhcyBhIGhlYXAgb2YgaXQgYW5kIHRoZSBmaXJzdCBidWlsZCBzaGlwcGVkIGFuIGVtcHR5IHR1Yiwgd2hpY2hcbiAgLy8gcmVhZHMgYXMgYSBwcm9kdWN0IHNob3Qgb2YgYSBjb250YWluZXIgcmF0aGVyIHRoYW4gb25lIHRoYXQgaGFzIGJlZW4gdXNlZC4gU21hbGwsIGRhcmsgYW5kXG4gIC8vIHZhcmllZCwgc2l0dGluZyBvbiB0aGUgaW5uZXIgZmxvb3I7IHNlZWRlZCBvZmYgdGhlIHNhbWUgY29uc3RhbnQgYXMgdGhlIGNhbnZhcyBzbyB0aGUgcHJvcCBpc1xuICAvLyByZXByb2R1Y2libGUuXG4gIHtcbiAgICBsZXQgZCA9IDkwMjEwO1xuICAgIGNvbnN0IHJuZCA9ICgpID0+ICgoKGQgPSAoZCAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMCkgPj4+IDgpIC8gMTY3NzcyMTYpO1xuICAgIGNvbnN0IGZ5ID0gUi5pbm5lckZvb3QueTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIyOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHcgPSAwLjA0NSArIHJuZCgpICogMC4wNzU7XG4gICAgICBjb25zdCBoID0gMC4wMjggKyBybmQoKSAqIDAuMDQ1O1xuICAgICAgYm94KHMsIChybmQoKSAtIDAuNSkgKiAwLjQ2LCBmeSArIGggLyAyLCAocm5kKCkgLSAwLjUpICogMC40NCwgdywgaCwgdyAqICgwLjYgKyBybmQoKSAqIDAuNyksXG4gICAgICAgIFsweDVhNGEzNCwgMHg2YTVhNDQsIDB4NGU0NDM2LCAweDdhNjc0OF1bKHJuZCgpICogNCkgfCAwXSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hlbGxHZW8gPSBzLmdlb21ldHJ5KCk7XG4gIC8vIFRoZSBydXN0IHRpbGUsIGJvdW5kIGFzIG1hcCBBTkQgYnVtcE1hcCBvZmYgdGhlIHNhbWUgY2FudmFzOiBubyBkcmF3IGNhbGwsIG5vIG1hdGVyaWFsLCBub1xuICAvLyBnZW9tZXRyeS4gYG1hcGAgaXMgbm90IHNSR0ItZGVjb2RlZCBieSBkZWZhdWx0IG9uIGEgY2FudmFzIHNvdXJjZSwgc28gdGhlIGNvbG91ciBzcGFjZSBpcyBzZXRcbiAgLy8gZXhwbGljaXRseSAtLSB3aXRob3V0IGl0IHRoZSB3aG9sZSB0aWxlIG11bHRpcGxpZXMgaW4gdGhlIHdyb25nIHNwYWNlIGFuZCB0aGUgc2hlbGwgc2hpcHNcbiAgLy8gd2FzaGVkIG91dCBhZ2FpbnN0IHRoZSBlbnZlbG9wZSBpdCB3YXMgcmUtYmFzZWQgdG8uXG4gIGNvbnN0IHJ1c3RUZXggPSAoKCkgPT4ge1xuICAgIGNvbnN0IGN2ID0gcnVzdENhbnZhcyhDT05GSUcucnVzdC5zaXplLCBDT05GSUcucnVzdC5zZWVkKTtcbiAgICBpZiAoIWN2KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB0eCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGN2KTtcbiAgICB0eC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gICAgdHgud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZzsgICAvLyB1IGdvZXMgdHdpY2UgYXJvdW5kXG4gICAgdHgud3JhcFQgPSBUSFJFRS5DbGFtcFRvRWRnZVdyYXBwaW5nO1xuICAgIHR4LmFuaXNvdHJvcHkgPSA0O1xuICAgIHR4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICByZXR1cm4gdHg7XG4gIH0pKCk7XG4gIGlmIChydXN0VGV4KSB7XG4gICAgY29uc3Qgd20gPSBtYXRlcmlhbHNbJ3dlYXRoZXJlZC1zdGVlbCddO1xuICAgIHdtLm1hcCA9IHJ1c3RUZXg7XG4gICAgd20uYnVtcE1hcCA9IHJ1c3RUZXg7XG4gICAgd20uYnVtcFNjYWxlID0gQ09ORklHLnJ1c3QuYnVtcDtcbiAgICB3bS5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc2hlbGwgPSBuZXcgVEhSRUUuTWVzaChzaGVsbEdlbywgbWF0ZXJpYWxzWyd3ZWF0aGVyZWQtc3RlZWwnXSk7XG4gIHNoZWxsLm5hbWUgPSAnVGFwZXJlZCBzaGVsbCB3aXRoIHJvbGxlZCByaW0sIHBsaW50aCBhbmQgZmVldCc7XG4gIHNoZWxsLmNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgc2hlbGwucmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuICByb290LmFkZChzaGVsbCk7XG5cbiAgLy8gVGhlIGZvdXIgbGlmdGluZyBsdWdzOiBPTkUgSW5zdGFuY2VkTWVzaCwgc28gb25lIGRyYXcgY2FsbCBhbmQgb25lIHVuaXF1ZSBnZW9tZXRyeSBmb3IgdGhlXG4gIC8vIHNldC4gVGhyZWUgYXJlIHZpc2libGUgaW4gdGhlIHBsYXRlOyB0aGUgZm91cnRoIGZvbGxvd3MgZnJvbSA0LWZvbGQgc3ltbWV0cnksIGJlY2F1c2UgYSBjcmFuZVxuICAvLyBsaWZ0IG5lZWRzIHN5bW1ldHJpYyBwaWNrIHBvaW50cy5cbiAgY29uc3QgTCA9IENPTkZJRy5sdWc7XG4gIGNvbnN0IGx1Z0dlbyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShMLncsIEwuaCwgTC50KTtcbiAgY29uc3QgbHVncyA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGx1Z0dlbywgbWF0ZXJpYWxzWydicmFja2V0LXN0ZWVsJ10sIDQpO1xuICBsdWdzLm5hbWUgPSAnQ29ybmVyIGxpZnRpbmcgbHVncyc7XG4gIGx1Z3MuY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBsdWdzLnJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgbTQgPSBuZXcgVEhSRUUuTWF0cml4NCgpO1xuICBjb25zdCBxID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgY29uc3QgY29ybmVyczogQXJyYXk8W251bWJlciwgbnVtYmVyXT4gPSBbWzEsIDFdLCBbLTEsIDFdLCBbLTEsIC0xXSwgWzEsIC0xXV07XG4gIGNvcm5lcnMuZm9yRWFjaCgoW3N4LCBzel0sIGkpID0+IHtcbiAgICAvLyBFYWNoIGx1ZyBzaXRzIE9OIHRoZSByaW0ncyByb3VuZGVkIGNvcm5lciwgbGFwcGVkIG92ZXIgaXRzIG91dGVyIGZhY2UgYW5kIHlhd2VkIHRvIGZhY2VcbiAgICAvLyBvdXR3YXJkIGFsb25nIHRoZSBjb3JuZXIgZGlhZ29uYWwuIFBsYWNlZCBpbmJvYXJkIG9mIHRoYXQgaXQgcmVhZHMgYXMgYSB0YWIgc3RhbmRpbmcgdXBcbiAgICAvLyBpbnNpZGUgdGhlIG1vdXRoLCB3aGljaCBpcyBub3Qgd2hhdCBhIGNyYW5lIGhvb2tzLlxuICAgIGNvbnN0IGFyY1ggPSBzeCAqIChSLnJpbU91dGVyLmh3IC0gUi5yaW1PdXRlci5yKTtcbiAgICBjb25zdCBhcmNaID0gc3ogKiAoUi5yaW1PdXRlci5oZCAtIFIucmltT3V0ZXIucik7XG4gICAgLy8gU2VhdGVkIHNvIHRoZSBsdWcncyBvdXRlciBjb3JuZXIgbGFuZHMgZXhhY3RseSBvbiB0aGUgcmltJ3Mgd2lkZXN0IHBsYW5lLiBQdXNoZWQgZnVydGhlclxuICAgIC8vIG91dCBpdCBzdGlsbCBzdHJhZGRsZXMgY29ycmVjdGx5IGJ1dCBjYXJyaWVzIHRoZSB3aG9sZSBwcm9wJ3MgYm91bmRpbmcgYm94IHBhc3QgdGhlXG4gICAgLy8gZGVjbGFyZWQgMS41IHggMS4wIG0gZW52ZWxvcGUgLS0gbWVhc3VyZWQgYXQgMS41OTIgbSB3aWRlLCA2JSBvdmVyIC0tIGFuZCB0aGUgZGVjbGFyZWRcbiAgICAvLyBlbnZlbG9wZSBpcyB0aGUgY29udHJhY3QgYSBsZXZlbCBidWlsZGVyIHBsYWNlcyBhZ2FpbnN0LlxuICAgIGNvbnN0IGhhbGYgPSAoKEwudyArIEwudCkgLyAyKSAqIE1hdGguU1FSVDFfMjtcbiAgICBjb25zdCBkaWFnID0gUi5yaW1PdXRlci5yIC0gaGFsZjtcbiAgICBjb25zdCB5YXcgPSBNYXRoLmF0YW4yKHN4LCBzeik7XG4gICAgcS5zZXRGcm9tQXhpc0FuZ2xlKHYzKDAsIDEsIDApLCB5YXcpO1xuICAgIG00LmNvbXBvc2UodjMoYXJjWCArIHN4ICogZGlhZywgTC55LCBhcmNaICsgc3ogKiBkaWFnKSwgcSwgdjMoMSwgMSwgMSkpO1xuICAgIGx1Z3Muc2V0TWF0cml4QXQoaSwgbTQpO1xuICB9KTtcbiAgbHVncy5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIHJvb3QuYWRkKGx1Z3MpO1xuXG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7IHJvb3QsIHR1Yjogc2hlbGwsICdjb3JuZXItbHVncyc6IGx1Z3MgfTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHsgdHViOiBzaGVsbCwgJ2Nvcm5lci1sdWdzJzogbHVncyBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2ggfTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcbiAgICB0dWI6IHtcbiAgICAgIHNoYXBlOiAnYm94JyxcbiAgICAgIGxvY2FsQ2VudGVyOiBbMCwgMC41MjUsIDBdLFxuICAgICAgc2l6ZTogWzEuNSwgMS4wNSwgMS4wXSxcbiAgICAgIGF4aXM6IFswLCAxLCAwXSxcbiAgICAgIG5vdGVzOlxuICAgICAgICAnQXV0aG9yaW5nIGludGVudCBvbmx5LiB0aGFpa2l0IGRlcml2ZXMgdGhlIHNoaXBwZWQgY29tcG91bmQgZnJvbSB0aGUgYnVpbHQgZ2VvbWV0cnkgd2l0aCAnICtcbiAgICAgICAgJ3NjcmlwdHMvZGVyaXZlLWNvbGxpZGVycy5tanM7IHRoaXMgaXMgbm90IHRoYXQgZmlsZS4nLFxuICAgIH0sXG4gIH07XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgIG5vZGVzLFxuICAgIG1lc2hlcyxcbiAgICBzb2NrZXRzOiB7fSxcbiAgICBjb2xsaWRlcnMsXG4gICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IHt9LFxuICB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZU9wZW5Ub3BTdGVlbFNraXBCaW5Nb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgJiYgdHlwZW9mIHNwZWMgPT09ICdvYmplY3QnKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBPTkUgcm9vdCBwaXZvdCBhbmQgTk8gc29ja2V0cy4gVGhpcyB2YXJpYW50IGhhcyBubyBsaWRzLCBubyBjYXN0b3JzIGFuZCBubyBoaW5nZWQgcGFydCBvZlxuICAgIC8vIGFueSBraW5kOiBpdCBpcyBhIHdlbGRlZCBzdGVlbCB0dWIgdGhhdCB0YWtlcyBhIGNyYW5lIHRvIG1vdmUuIEEgcGl2b3QgaXMgYSBwcm9taXNlIHRoYXQgYVxuICAgIC8vIHBhcnQgdHVybnMgb24gdGhhdCBheGlzIGFuZCBhIHNvY2tldCBhIHByb21pc2UgdGhhdCBzb21ldGhpbmcgYXR0YWNoZXMgdGhlcmUsIHNvIGRlY2xhcmluZ1xuICAgIC8vIGVpdGhlciBoZXJlIHdvdWxkIGRlc2NyaWJlIGEgbWFjaGluZSB0aGF0IGRvZXMgbm90IGV4aXN0LlxuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcblxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQ6IHRoZSBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlIHB1cHBldGVlclxuICAgICAgLy8gYnJpZGdlIGFuZCBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdFxuICAgICAgLy8gYXJyaXZpbmcgdW5kZWZpbmVkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHM6IFtyb290UGl2b3RdLFxuICAgICAgc29ja2V0czogW10sXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogW10sXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czoge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJldHVybiBjcmVhdGVPYmplY3RNb2RlbCh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBeUN2QixJQUFNLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQTRCYixRQUFRO0FBQUEsSUFDTixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU9WLFVBQVU7QUFBQSxJQUNWLEtBQUs7QUFBQTtBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUEsSUFDUixRQUFRO0FBQUE7QUFBQSxFQUNWO0FBQUEsRUFDQSxNQUFNLEVBQUUsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU87QUFBQSxFQUM3QyxXQUFXO0FBQUEsSUFDVCxFQUFFLElBQUksbUJBQW1CLE9B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
