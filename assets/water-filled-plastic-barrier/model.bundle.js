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

// scratch/water-filled-plastic-barrier/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createWaterFilledPlasticBarrierModel: () => createWaterFilledPlasticBarrierModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "water-filled-plastic-barrier",
  "name": "Water-Filled Plastic Barrier",
  "exportName": "WaterFilledPlasticBarrier",
  "envelope": "Envelope 1.2 x 0.8 x 0.5 m, origin base-center, +Y up, +X along the run.\n * Budget (medium): <=2000 triangles, <=2 draw calls, <=2 materials, <=4 unique geometries.",
  "materials": [
    {
      "id": "plastic",
      "color": 16777215,
      "roughness": 0.6,
      "metalness": 0,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "plastic",
      "kind": "grime",
      "size": 256,
      "seed": 171,
      "wash": [
        0.45,
        0.42,
        0.4
      ],
      "washAlpha": 0.55,
      "coverage": 0.35,
      "streaks": 8,
      "blotches": 30
    }
  ],
  "geometry": {
    "components": [
      {
        "id": "shell",
        "name": "Rotomoulded shell",
        "material": "plastic",
        "uv": "height",
        "uvScale": 0.8,
        "collider": {
          "shape": "box",
          "localCenter": [
            0,
            0.4,
            0
          ],
          "halfExtents": [
            0.6,
            0.4,
            0.25
          ],
          "notes": "Declared on the asset as box: one proxy over the whole barrier."
        },
        "extrudes": [
          {
            "poly": [
              [
                0.25,
                0
              ],
              [
                0.25,
                0.1
              ],
              [
                0.14,
                0.36
              ],
              [
                0.11,
                0.56
              ],
              [
                0.095,
                0.64
              ],
              [
                0.075,
                0.7
              ],
              [
                0.075,
                0.8
              ],
              [
                -0.075,
                0.8
              ],
              [
                -0.075,
                0.7
              ],
              [
                -0.095,
                0.64
              ],
              [
                -0.11,
                0.56
              ],
              [
                -0.14,
                0.36
              ],
              [
                -0.25,
                0.1
              ],
              [
                -0.25,
                0
              ]
            ],
            "z0": -0.51,
            "z1": 0.51,
            "ry": 1.5707963267948966,
            "hex": 14246446
          }
        ],
        "boxes": [
          [
            14246446,
            -0.555,
            0.7200000000000001,
            0,
            0.09,
            0.14,
            0.13
          ],
          [
            14246446,
            0.555,
            0.7000000000000001,
            0,
            0.09,
            0.1,
            0.15
          ],
          [
            10110240,
            0.6008,
            0.7000000000000001,
            0,
            16e-4,
            0.06,
            0.09
          ],
          [
            14246446,
            -0.555,
            0.07,
            0,
            0.09,
            0.14,
            0.34
          ],
          [
            14246446,
            0.555,
            0.07,
            0,
            0.09,
            0.14,
            0.34
          ],
          [
            14246446,
            0,
            0.808,
            0,
            0.3,
            0.016,
            0.16
          ],
          [
            15131354,
            0,
            0.48,
            0.12350000000000001,
            0.92,
            0.07,
            3e-3,
            -0.14888994760949725,
            0,
            0
          ],
          [
            15131354,
            0,
            0.28,
            0.17534615384615385,
            0.92,
            0.07,
            3e-3,
            -0.4002406570339741,
            0,
            0
          ],
          [
            15131354,
            0,
            0.48,
            -0.12350000000000001,
            0.92,
            0.07,
            3e-3,
            0.14888994760949725,
            0,
            0
          ],
          [
            15131354,
            0,
            0.28,
            -0.17534615384615385,
            0.92,
            0.07,
            3e-3,
            0.4002406570339741,
            0,
            0
          ],
          [
            10110240,
            -0.3,
            0.03,
            0.2508,
            0.14,
            0.05,
            16e-4
          ],
          [
            10110240,
            -0.3,
            0.03,
            -0.2508,
            0.14,
            0.05,
            16e-4
          ],
          [
            10110240,
            0.3,
            0.03,
            0.2508,
            0.14,
            0.05,
            16e-4
          ],
          [
            10110240,
            0.3,
            0.03,
            -0.2508,
            0.14,
            0.05,
            16e-4
          ]
        ],
        "cyls": [
          {
            "at": [
              0,
              0.8280000000000001,
              0
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 0.025,
            "seg": 12,
            "hex": 2763306
          },
          {
            "at": [
              0,
              0.8440000000000001,
              0
            ],
            "rt": 0.035,
            "rb": 0.035,
            "h": 8e-3,
            "seg": 12,
            "hex": 3815994
          }
        ]
      }
    ]
  }
};
function mergeGeos(geos) {
  const parts = [];
  const temp = [];
  for (const g of geos) {
    if (g.index) {
      parts.push(g.toNonIndexed());
      temp.push(true);
    } else {
      parts.push(g);
      temp.push(false);
    }
  }
  let total = 0;
  for (const g of parts) total += g.getAttribute("position").count;
  const position = new Float32Array(total * 3);
  const normal = new Float32Array(total * 3);
  const uv = new Float32Array(total * 2);
  const anyColor = parts.some((g) => !!g.getAttribute("color"));
  const color = anyColor ? new Float32Array(total * 3).fill(1) : null;
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute("position"), n = g.getAttribute("normal"), t = g.getAttribute("uv");
    const c = g.getAttribute("color");
    for (let i = 0; i < p.count; i++) {
      position[(v + i) * 3] = p.getX(i);
      position[(v + i) * 3 + 1] = p.getY(i);
      position[(v + i) * 3 + 2] = p.getZ(i);
      if (n) {
        normal[(v + i) * 3] = n.getX(i);
        normal[(v + i) * 3 + 1] = n.getY(i);
        normal[(v + i) * 3 + 2] = n.getZ(i);
      }
      if (t) {
        uv[(v + i) * 2] = t.getX(i);
        uv[(v + i) * 2 + 1] = t.getY(i);
      }
      if (color && c) {
        color[(v + i) * 3] = c.getX(i);
        color[(v + i) * 3 + 1] = c.getY(i);
        color[(v + i) * 3 + 2] = c.getZ(i);
      }
    }
    v += p.count;
  }
  for (let i = 0; i < parts.length; i++) {
    if (temp[i]) parts[i].dispose();
    geos[i].dispose();
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute("position", new THREE.BufferAttribute(position, 3));
  out.setAttribute("normal", new THREE.BufferAttribute(normal, 3));
  out.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  if (color) out.setAttribute("color", new THREE.BufferAttribute(color, 3));
  out.computeBoundingBox();
  out.computeBoundingSphere();
  return out;
}
function lathe(pts, seg, yOffset = 0) {
  const v = pts.map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
  return g;
}
function extrudeAlongZ(shape, z0, z1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  g.computeVertexNormals();
  return g;
}
function tintGeo(geo, hex) {
  const c = new THREE.Color(hex);
  const n = geo.getAttribute("position").count;
  const col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  return geo;
}
function worldUV(geo, scale) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
    let u, v;
    if (ax >= ay && ax >= az) {
      u = p.getZ(i);
      v = p.getY(i);
    } else if (ay >= az) {
      u = p.getX(i);
      v = p.getZ(i);
    } else {
      u = p.getX(i);
      v = p.getY(i);
    }
    uv[i * 2] = u / scale;
    uv[i * 2 + 1] = v / scale;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
}
function tube(pts, r, seg = 8, hex) {
  const parts = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const d = b.clone().sub(a);
    const len = d.length();
    if (len < 1e-6) continue;
    const g = new THREE.CylinderGeometry(r, r, len + r * 1.2, seg, 1, false);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    g.applyQuaternion(q);
    const m = a.clone().add(b).multiplyScalar(0.5);
    g.translate(m.x, m.y, m.z);
    parts.push(g);
  }
  const out = mergeGeos(parts);
  return hex === void 0 ? out : tintGeo(out, hex);
}
function rbox(b) {
  const g = new THREE.BoxGeometry(b[3], b[4], b[5]);
  if (b[6]) g.rotateX(b[6]);
  if (b[7]) g.rotateY(b[7]);
  if (b[8]) g.rotateZ(b[8]);
  g.translate(b[0], b[1], b[2]);
  return g;
}
function mirrorX(list) {
  return list.flatMap((b) => [b, [b[0], -b[1], b[2], b[3], b[4], b[5], b[6], b[7] ?? 0, -(b[8] ?? 0), -(b[9] ?? 0)]]);
}
function canvasTile(size, draw) {
  if (typeof document === "undefined") return null;
  const cv = document.createElement("canvas");
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext("2d");
  if (!ctx) return null;
  draw(ctx, size);
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}
function lcg(seed) {
  let s = seed >>> 0;
  return () => {
    s = s * 1664525 + 1013904223 >>> 0;
    return s / 4294967296;
  };
}
function mudTile(size, base, seed, coverage = 0.33) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const toHex = (v) => "#" + v.map((c) => Math.round(Math.min(1, Math.max(0, c)) * 255).toString(16).padStart(2, "0")).join("");
    ctx.fillStyle = toHex(base);
    ctx.fillRect(0, 0, s, s);
    const grad = ctx.createLinearGradient(0, s, 0, s * (1 - coverage));
    grad.addColorStop(0, "rgba(255,255,255,0.88)");
    grad.addColorStop(0.45, "rgba(255,255,255,0.45)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 90; i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 2.2) * s * coverage * 1.35;
      const r = 3 + rnd() * s * 0.05;
      const a = 0.08 + rnd() * 0.28;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(255,250,240,${a})`);
      g2.addColorStop(1, "rgba(255,250,240,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < 1200; i++) {
      const x = rnd() * s, y = rnd() * s;
      const v = rnd() < 0.5 ? 0 : 255;
      ctx.fillStyle = `rgba(${v},${v},${v},0.035)`;
      ctx.fillRect(x, y, 1.5, 1.5);
    }
  });
}
function dustTile(size, dust, seed, coverage = 0.3) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const c = dust.map((v) => Math.round(255 * Math.min(1, v)));
    const grad = ctx.createLinearGradient(0, s, 0, s * (1 - coverage));
    grad.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},0.9)`);
    grad.addColorStop(0.5, `rgba(${c[0]},${c[1]},${c[2]},0.4)`);
    grad.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 80; i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 2.2) * s * coverage * 1.4, r = 3 + rnd() * s * 0.05, a = 0.08 + rnd() * 0.25;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${a})`);
      g2.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  });
}
function corrugationTile(size, pitch, low, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    for (let x = 0; x < s; x++) {
      const t = (Math.cos(x / s * Math.PI * 2 * pitch) + 1) / 2;
      const v = Math.round(255 * (low + (1 - low) * t));
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(x, 0, 1, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < 60; i++) {
      const x = rnd() * s, y = rnd() * s, r = 4 + rnd() * s * 0.08;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.08 + rnd() * 0.18;
      g2.addColorStop(0, `rgba(120,90,60,${a})`);
      g2.addColorStop(1, "rgba(120,90,60,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function plankTile(size, boards, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const bh = s / boards;
    for (let b = 0; b < boards; b++) {
      const tone = 0.82 + rnd() * 0.18;
      const v = Math.round(255 * tone);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(0, b * bh, s, bh);
      ctx.fillStyle = "rgba(40,30,20,0.55)";
      ctx.fillRect(0, b * bh, s, Math.max(1, s * 6e-3));
      for (let k = 0; k < 14; k++) {
        const y = b * bh + rnd() * bh, len = s * (0.2 + rnd() * 0.6), x = rnd() * s;
        ctx.strokeStyle = `rgba(60,45,30,${0.05 + rnd() * 0.12})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x - s, y);
        ctx.lineTo(x - s + len, y);
        ctx.moveTo(x, y);
        ctx.lineTo(x + len, y);
        ctx.stroke();
      }
    }
  });
}
function rustTile(size, ratio, seed, density = 90) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < density; i++) {
      const x = rnd() * s, y = rnd() * s, r = 3 + rnd() * s * 0.09;
      const a = 0.15 + rnd() * 0.45;
      const c = ratio.map((v) => Math.round(255 * v));
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${a})`);
      g2.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function heightUV(geo, scale) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(nrm.getX(i)), az = Math.abs(nrm.getZ(i));
    const u = ax >= az ? p.getZ(i) : p.getX(i);
    uv[i * 2] = u / scale;
    uv[i * 2 + 1] = p.getY(i) / scale;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
}
function bindTile(mat, tex, bump = 0) {
  if (!tex) return;
  mat.map = tex;
  if (bump > 0) {
    mat.bumpMap = tex;
    mat.bumpScale = bump;
  }
  mat.needsUpdate = true;
}
function panelUV(geo, scale, rot = false) {
  const p = geo.getAttribute("position");
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const u = rot ? p.getY(i) : p.getX(i), v = rot ? p.getX(i) : p.getY(i);
    uv[i * 2] = u / scale;
    uv[i * 2 + 1] = v / scale;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
}
function spike(at, w, h) {
  const g = new THREE.ConeGeometry(w / Math.SQRT2, h, 4, 1, false);
  g.rotateY(Math.PI / 4);
  g.translate(at[0], at[1] + h / 2, at[2]);
  g.computeVertexNormals();
  return g;
}
function grimeTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const wash = o.wash ?? [0.62, 0.62, 0.58], washA = o.washAlpha ?? 0.7, cov = o.coverage ?? 0.3;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.streaks ?? 26); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.012, len = s * (0.15 + rnd() * 0.6), a = 0.05 + rnd() * 0.12;
      const g2 = ctx.createLinearGradient(0, 0, 0, len);
      g2.addColorStop(0, `rgba(${rgb(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb(wash)},0)`);
      ctx.fillStyle = g2;
      ctx.fillRect(x, 0, w, len);
      ctx.fillRect(x - s, 0, w, len);
    }
    const grad = ctx.createLinearGradient(0, s, 0, s * (1 - cov));
    grad.addColorStop(0, `rgba(${rgb(wash)},${washA})`);
    grad.addColorStop(0.5, `rgba(${rgb(wash)},${washA * 0.45})`);
    grad.addColorStop(1, `rgba(${rgb(wash)},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (o.blotches ?? 40); i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 1.6) * s, r = 3 + rnd() * s * 0.06, a = 0.08 + rnd() * 0.3;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb(wash)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.moss) {
      const m = o.moss, band = o.mossBand ?? 0.22;
      const mg = ctx.createLinearGradient(0, s, 0, s * (1 - band * 1.3));
      mg.addColorStop(0, `rgba(${rgb(m)},${o.mossWash ?? 0.35})`);
      mg.addColorStop(1, `rgba(${rgb(m)},0)`);
      ctx.fillStyle = mg;
      ctx.fillRect(0, 0, s, s);
      for (let k = 0; k < (o.mossClusters ?? 14); k++) {
        const cx = rnd() * s, cy = s - Math.pow(rnd(), 1.6) * s * band, cr = s * (0.015 + rnd() * 0.04);
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
        cg.addColorStop(0, `rgba(${rgb(m)},0.7)`);
        cg.addColorStop(0.6, `rgba(${rgb(m)},0.35)`);
        cg.addColorStop(1, `rgba(${rgb(m)},0)`);
        ctx.fillStyle = cg;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(cx + dx, cy, cr, cr * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 24; i++) {
          const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
          const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.6, r = 1 + rnd() * 3;
          ctx.fillStyle = `rgba(${rgb(m)},${0.35 + rnd() * 0.5})`;
          for (const dx of [-s, 0, s]) {
            ctx.beginPath();
            ctx.arc(x + dx, y, r, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }
    for (let i = 0; i < 1500; i++) {
      const x = rnd() * s, y = rnd() * s, v = 200 + Math.round(rnd() * 55);
      ctx.fillStyle = `rgba(${v},${v},${v},0.12)`;
      ctx.fillRect(x, y, 1.5, 1.5);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function chainlinkTile(size, wire, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.clearRect(0, 0, s, s);
    ctx.lineWidth = Math.max(1.5, wire * s);
    ctx.lineCap = "round";
    const v = 150 + Math.round(rnd() * 30);
    ctx.strokeStyle = `rgb(${v},${v + 2},${v + 4})`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(s, s);
    ctx.moveTo(s, 0);
    ctx.lineTo(0, s);
    ctx.stroke();
    ctx.fillStyle = `rgb(${v - 20},${v - 18},${v - 16})`;
    for (const [x, y] of [[0, 0], [s, 0], [0, s], [s, s], [s / 2, s / 2]]) {
      ctx.beginPath();
      ctx.arc(x, y, ctx.lineWidth * 0.9, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}
function bambooTile(size, strips, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const sw = s / strips;
    for (let b = 0; b < strips; b++) {
      const tone = 0.8 + rnd() * 0.2, v = Math.round(255 * tone);
      ctx.fillStyle = `rgb(${v},${v - 2},${v - 6})`;
      ctx.fillRect(b * sw, 0, sw, s);
      ctx.fillStyle = "rgba(50,42,34,0.6)";
      ctx.fillRect(b * sw, 0, Math.max(1, s * 6e-3), s);
      ctx.fillStyle = "rgba(255,255,255,0.10)";
      ctx.fillRect(b * sw + sw * 0.35, 0, sw * 0.25, s);
      const n = 1 + Math.floor(rnd() * 2);
      for (let k = 0; k < n; k++) {
        const y = rnd() * s;
        ctx.fillStyle = "rgba(70,60,48,0.45)";
        ctx.fillRect(b * sw, y, sw, Math.max(1, s * 8e-3));
      }
      for (let k = 0; k < 6; k++) {
        const x = b * sw + rnd() * sw;
        ctx.fillStyle = `rgba(80,70,58,${0.05 + rnd() * 0.1})`;
        ctx.fillRect(x, 0, 1, s);
      }
    }
    for (let i = 0; i < 300; i++) {
      const x = rnd() * s, y = rnd() * s;
      ctx.fillStyle = "rgba(30,28,24,0.18)";
      ctx.fillRect(x, y, 1 + rnd() * 2, 1 + rnd() * 2);
    }
  });
}
function posterTile(size, seed, lines) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.clearRect(0, 0, s, s);
    for (let k = 0; k < 4; k++) {
      const x = s * (0.02 + rnd() * 0.3), y = s * (0.15 + rnd() * 0.45), w = s * (0.14 + rnd() * 0.16), h = s * (0.18 + rnd() * 0.22);
      ctx.fillStyle = `rgba(${225 + Math.round(rnd() * 20)},${222 + Math.round(rnd() * 18)},${210 + Math.round(rnd() * 20)},0.96)`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      const n = 9;
      for (let i = 1; i <= n; i++) ctx.lineTo(x + w * i / n, y + (rnd() - 0.5) * h * 0.08);
      for (let i = 1; i <= n; i++) ctx.lineTo(x + w + (rnd() - 0.5) * w * 0.08, y + h * i / n);
      for (let i = n - 1; i >= 0; i--) ctx.lineTo(x + w * i / n, y + h + (rnd() - 0.5) * h * 0.12);
      for (let i = n - 1; i >= 0; i--) ctx.lineTo(x + (rnd() - 0.5) * w * 0.08, y + h * i / n);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgba(40,40,45,0.55)";
      for (let i = 0; i < 7; i++) ctx.fillRect(x + w * 0.1, y + h * (0.2 + i * 0.1), w * (0.3 + rnd() * 0.5), Math.max(1, s * 6e-3));
    }
    ctx.fillStyle = "rgba(20,20,22,0.88)";
    ctx.font = `bold ${Math.round(s * 0.07)}px sans-serif`;
    ctx.textBaseline = "middle";
    for (let i = 0; i < lines.length; i++) {
      const x = s * 0.4, y = s * (0.44 + i * 0.13);
      for (let k = 0; k < 3; k++) {
        ctx.globalAlpha = 0.6;
        ctx.fillText(lines[i], x + (rnd() - 0.5) * 3, y + (rnd() - 0.5) * 3);
      }
      ctx.globalAlpha = 1;
    }
  });
}
function stripeTile(size, bands, a, b, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    const w = s / bands;
    for (let i = 0; i < bands; i++) {
      ctx.fillStyle = rgb(i % 2 ? b : a);
      ctx.fillRect(Math.floor(i * w), 0, Math.ceil(w) + 1, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < 40; i++) {
      const x = rnd() * s, y = rnd() * s, r = 4 + rnd() * s * 0.08, al = 0.06 + rnd() * 0.18;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(150,140,125,${al})`);
      g2.addColorStop(1, "rgba(150,140,125,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < 1200; i++) {
      const v = 200 + Math.round(rnd() * 55);
      ctx.fillStyle = `rgba(${v},${v},${v},0.10)`;
      ctx.fillRect(rnd() * s, rnd() * s, 1.5, 1.5);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function buildMaterials(options) {
  const map = {};
  for (const s of CONFIG.materials) {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(s.color),
      roughness: s.roughness,
      metalness: s.metalness,
      wireframe: options.wireframe ?? false,
      side: s.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
      vertexColors: s.vertexColors === true
    });
    if (s.envMapIntensity !== void 0) m.envMapIntensity = s.envMapIntensity;
    if (s.emissive !== void 0) {
      m.emissive = new THREE.Color(s.emissive);
      m.emissiveIntensity = s.emissiveIntensity ?? 1;
    }
    if (s.opacity !== void 0) {
      m.transparent = true;
      m.opacity = s.opacity;
      m.depthWrite = true;
    }
    if (s.alphaTest !== void 0) {
      m.alphaTest = s.alphaTest;
      m.transparent = false;
    }
    m.name = s.id;
    map[s.id] = m;
  }
  return map;
}
function createWaterFilledPlasticBarrierModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Water-Filled Plastic Barrier";
  const materials = buildMaterials(options);
  const nodes = {};
  const meshes = {};
  const sockets = {};
  const colliders = {};
  const destructionGroups = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;
  function guardVertexColors(geo, mat) {
    if (!mat || !mat.vertexColors || geo.getAttribute("color")) return;
    const n = geo.getAttribute("position").count;
    geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
  }
  function add(id, name, geo, matId) {
    const node = new THREE.Group();
    node.name = name + "__node";
    guardVertexColors(geo, materials[matId]);
    const mesh = new THREE.Mesh(geo, materials[matId]);
    mesh.name = name;
    mesh.castShadow = castShadow;
    mesh.receiveShadow = receiveShadow;
    node.add(mesh);
    root.add(node);
    nodes[id] = node;
    meshes[id] = mesh;
    colliders[id] = null;
    return mesh;
  }
  function addInst(id, name, geo, matId, mats, cols) {
    const node = new THREE.Group();
    node.name = name + "__node";
    guardVertexColors(geo, materials[matId]);
    const inst = new THREE.InstancedMesh(geo, materials[matId], mats.length);
    inst.name = name;
    inst.castShadow = castShadow;
    inst.receiveShadow = receiveShadow;
    for (let i = 0; i < mats.length; i++) inst.setMatrixAt(i, mats[i]);
    if (cols) {
      const c = new THREE.Color();
      for (let i = 0; i < cols.length; i++) inst.setColorAt(i, c.setHex(cols[i]));
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    }
    inst.instanceMatrix.needsUpdate = true;
    node.add(inst);
    root.add(node);
    nodes[id] = node;
    meshes[id] = inst;
    colliders[id] = null;
    return inst;
  }
  function quad(radius, y, phase = 0) {
    return [0, 1, 2, 3].map((i) => {
      const a = phase + i * Math.PI / 2;
      return new THREE.Matrix4().compose(
        new THREE.Vector3(Math.sin(a) * radius, y, Math.cos(a) * radius),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), a),
        new THREE.Vector3(1, 1, 1)
      );
    });
  }
  const G = CONFIG.geometry;
  for (const c of G.components) {
    const gs = [];
    for (const b of c.boxes ?? []) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const b of mirrorX(c.boxesMirrored ?? [])) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const t of c.tubes ?? []) gs.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
    for (const cy of c.cyls ?? []) {
      const g2 = new THREE.CylinderGeometry(cy.rt, cy.rb, cy.h, cy.seg ?? 12);
      if (cy.rx) g2.rotateX(cy.rx);
      if (cy.rz) g2.rotateZ(cy.rz);
      g2.translate(cy.at[0], cy.at[1], cy.at[2]);
      gs.push(tintGeo(g2, cy.hex));
    }
    for (const l of c.lathes ?? []) {
      const g2 = lathe(l.pts, l.seg ?? 12);
      if (l.ry) g2.rotateY(l.ry);
      g2.translate(l.at[0], l.at[1], l.at[2]);
      gs.push(tintGeo(g2, l.hex));
    }
    for (const p of c.planes ?? []) {
      const g2 = new THREE.PlaneGeometry(p.w, p.h, 1, 1);
      g2.translate(p.at[0], p.at[1], p.at[2]);
      const uv = g2.getAttribute("uv");
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (p.rep?.[0] ?? 1), uv.getY(i) * (p.rep?.[1] ?? 1));
      gs.push(tintGeo(g2, p.hex));
    }
    for (const e of c.extrudes ?? []) {
      const shape = new THREE.Shape();
      shape.moveTo(e.poly[0][0], e.poly[0][1]);
      for (let i = 1; i < e.poly.length; i++) shape.lineTo(e.poly[i][0], e.poly[i][1]);
      shape.closePath();
      for (const h of e.holes ?? []) {
        const hp = new THREE.Path();
        hp.moveTo(h[0][0], h[0][1]);
        for (let i = 1; i < h.length; i++) hp.lineTo(h[i][0], h[i][1]);
        hp.closePath();
        shape.holes.push(hp);
      }
      const g2 = extrudeAlongZ(shape, e.z0, e.z1);
      if (e.rx) g2.rotateX(e.rx);
      if (e.ry) g2.rotateY(e.ry);
      if (e.at) g2.translate(e.at[0], e.at[1], e.at[2]);
      gs.push(tintGeo(g2, e.hex));
    }
    for (const s of c.spikes ?? []) gs.push(tintGeo(spike(s.at, s.w, s.h), s.hex));
    let g = mergeGeos(gs);
    if (c.uv === "world") g = worldUV(g, c.uvScale ?? 1);
    if (c.uv === "height") g = heightUV(g, c.uvScale ?? 1);
    if (c.uv === "panel") g = panelUV(g, c.uvScale ?? 1);
    if (c.uv === "panel-rot") g = panelUV(g, c.uvScale ?? 1, true);
    add(c.id, c.name, g, c.material);
    if (c.collider) colliders[c.id] = c.collider;
  }
  for (const r of G.instanced ?? []) {
    const gs = [];
    for (const b of r.boxes ?? []) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const s of r.spikes ?? []) gs.push(tintGeo(spike(s.at, s.w, s.h), s.hex));
    for (const cy of r.cyls ?? []) {
      const g2 = new THREE.CylinderGeometry(cy.rt, cy.rb, cy.h, cy.seg ?? 12);
      if (cy.rx) g2.rotateX(cy.rx);
      if (cy.rz) g2.rotateZ(cy.rz);
      g2.translate(cy.at[0], cy.at[1], cy.at[2]);
      gs.push(tintGeo(g2, cy.hex));
    }
    let g = mergeGeos(gs);
    if (r.uv === "world") g = worldUV(g, r.uvScale ?? 1);
    if (r.uv === "height") g = heightUV(g, r.uvScale ?? 1);
    const mats = [];
    for (const p of r.placements) {
      mats.push(new THREE.Matrix4().compose(
        new THREE.Vector3(p[0], p[1], p[2]),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(p[3] ?? 0, p[4] ?? 0, p[5] ?? 0)),
        new THREE.Vector3(1, 1, 1)
      ));
    }
    addInst(r.id, r.name, g, r.material, mats, r.colors);
  }
  for (const t of CONFIG.tiles ?? []) {
    const mat = materials[t.material];
    if (!mat) continue;
    if (t.kind === "baked") {
      if (typeof document === "undefined") continue;
      const baked = new THREE.TextureLoader().load(t.uri);
      const srgb = THREE.SRGBColorSpace;
      if (srgb) baked.colorSpace = srgb;
      baked.anisotropy = 4;
      mat.map = baked;
      mat.needsUpdate = true;
      continue;
    }
    let tex = null;
    if (t.kind === "mud") tex = mudTile(t.size ?? 512, t.base, t.seed ?? 1, t.coverage ?? 0.33);
    if (t.kind === "dust") tex = dustTile(t.size ?? 512, t.dust, t.seed ?? 1, t.coverage ?? 0.3);
    if (t.kind === "plank") tex = plankTile(t.size ?? 512, t.boards ?? 6, t.seed ?? 5);
    if (t.kind === "rust") tex = rustTile(t.size ?? 512, t.ratio, t.seed ?? 7, t.density ?? 90);
    if (t.kind === "corrugation") tex = corrugationTile(t.size ?? 512, t.pitch ?? 12, t.low ?? 0.7, t.seed ?? 3);
    if (t.kind === "grime") tex = grimeTile(t.size ?? 512, t.seed ?? 11, t);
    if (t.kind === "chainlink") tex = chainlinkTile(t.size ?? 256, t.wire ?? 0.09, t.seed ?? 4);
    if (t.kind === "bamboo") tex = bambooTile(t.size ?? 512, t.strips ?? 10, t.seed ?? 6);
    if (t.kind === "stripes") tex = stripeTile(t.size ?? 256, t.bands ?? 8, t.a, t.b, t.seed ?? 9);
    if (t.kind === "poster") tex = posterTile(t.size ?? 512, t.seed ?? 8, t.lines ?? []);
    bindTile(mat, tex, t.bump ?? 0);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createWaterFilledPlasticBarrierModel(options);
  if (spec !== void 0 && spec !== null) root.userData.sculptSpec = spec;
  const rt = root.userData.sculptRuntime;
  if (rt) {
    const nodes = rt.nodes ?? {};
    const pivots = [];
    const rootPivot = new THREE.Object3D();
    rootPivot.name = "root";
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: "root",
      pivot: { mode: "custom", localPosition: [0, 0, 0], axis: [0, 1, 0], name: "root" }
    };
    root.add(rootPivot);
    pivots.push(rootPivot);
    for (const pv of CONFIG.pivots ?? []) {
      const o = new THREE.Object3D();
      o.name = pv.name;
      o.position.set(pv.position[0], pv.position[1], pv.position[2]);
      o.userData.actionProfile = {
        animationRole: "child",
        pivot: {
          mode: "custom",
          localPosition: pv.position,
          axis: pv.axis,
          name: pv.name,
          component: pv.component,
          instance: pv.instance ?? null,
          notes: pv.note ?? ""
        }
      };
      root.add(o);
      pivots.push(o);
    }
    const colliders = Object.entries(rt.colliders ?? {}).filter(([, c]) => c && typeof c === "object" && Object.keys(c).length > 0).map(([id, c]) => ({ name: id, ...c }));
    const grouped = /* @__PURE__ */ new Map();
    for (const [name, members] of Object.entries(rt.destructionGroups ?? {})) {
      grouped.set(name, [...members]);
    }
    for (const node of Object.values(nodes)) {
      const group = node?.userData?.actionProfile?.destruction?.fractureGroup;
      if (typeof group !== "string" || !group) continue;
      if (!grouped.has(group)) grouped.set(group, []);
      grouped.get(group).push(node);
    }
    root.userData.sculptRuntime = {
      ...rt,
      // A COUNT, not the Record. thaikit's harness returns this field straight across the
      // puppeteer bridge and its registry field is a number; a Record of Object3D is circular and
      // fails to serialise, which surfaces as the whole stats object arriving undefined. The
      // Record stays reachable under byId.
      nodes: Object.keys(nodes).length,
      pivots,
      sockets: Object.values(rt.sockets ?? {}),
      colliders,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: rt.sockets ?? {} }
    };
  }
  return root;
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogV2F0ZXItRmlsbGVkIFBsYXN0aWMgQmFycmllciAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyxcbiAqIGluc3RhbmNpbmcgYW5kIHRoZSBsYXRoZSBoZWxwZXJzIGJlbG93IGFyZSBoYW5kLXJvbGxlZCAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXNcbiAqIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSAxLjIgeCAwLjggeCAwLjUgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgK1ggYWxvbmcgdGhlIHJ1bi5cbiAqIEJ1ZGdldCAobWVkaXVtKTogPD0yMDAwIHRyaWFuZ2xlcywgPD0yIGRyYXcgY2FsbHMsIDw9MiBtYXRlcmlhbHMsIDw9NCB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgU1RSRUVUIEFORCBWRU5ET1IgUFJPUFMgLS0gYSBjb25lLCBhIGJhcnJpZXIsIGEgY2FydCwgYSBzdG9vbC4gVGhlXG4gKiBzaGFyZWQgdm9jYWJ1bGFyeSBpcyB0aGUgVElOVEVEIEJPWCBhbmQgdGhlIHBvbHlsaW5lIFRVQkUgbWVyZ2VkIGludG8gb25lIGdlb21ldHJ5IHBlciBtYXRlcmlhbCxcbiAqIHdpdGggZXZlcnkgY29sb3VyIGRpZmZlcmVuY2UgaW5zaWRlIGEgbWF0ZXJpYWwgY2FycmllZCBhcyBhIHZlcnRleCBjb2xvdXIgb24gYSBXSElURSBtYXRlcmlhbCxcbiAqIGFuZCBzdXJmYWNlIGlkZW50aXR5IChjb3JydWdhdGlvbiwgZ3JpbWUgd2FzaCwgbW9zcywgcGxhbmsgam9pbnRzLCBydXN0KSBkZWxpdmVyZWQgYXMgT05FXG4gKiBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSBwZXIgbWF0ZXJpYWwgcmF0aGVyIHRoYW4gYXMgZ2VvbWV0cnkgb3IgYSBwcm9jZWR1cmFsIHRleHR1cmUgc2V0LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwid2F0ZXItZmlsbGVkLXBsYXN0aWMtYmFycmllclwiLFxuICAgIFwibmFtZVwiOiBcIldhdGVyLUZpbGxlZCBQbGFzdGljIEJhcnJpZXJcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJXYXRlckZpbGxlZFBsYXN0aWNCYXJyaWVyXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDEuMiB4IDAuOCB4IDAuNSBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCArWCBhbG9uZyB0aGUgcnVuLlxcbiAqIEJ1ZGdldCAobWVkaXVtKTogPD0yMDAwIHRyaWFuZ2xlcywgPD0yIGRyYXcgY2FsbHMsIDw9MiBtYXRlcmlhbHMsIDw9NCB1bmlxdWUgZ2VvbWV0cmllcy5cIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJwbGFzdGljXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJ0aWxlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJwbGFzdGljXCIsXG4gICAgICAgIFwia2luZFwiOiBcImdyaW1lXCIsXG4gICAgICAgIFwic2l6ZVwiOiAyNTYsXG4gICAgICAgIFwic2VlZFwiOiAxNzEsXG4gICAgICAgIFwid2FzaFwiOiBbXG4gICAgICAgICAgMC40NSxcbiAgICAgICAgICAwLjQyLFxuICAgICAgICAgIDAuNFxuICAgICAgICBdLFxuICAgICAgICBcIndhc2hBbHBoYVwiOiAwLjU1LFxuICAgICAgICBcImNvdmVyYWdlXCI6IDAuMzUsXG4gICAgICAgIFwic3RyZWFrc1wiOiA4LFxuICAgICAgICBcImJsb3RjaGVzXCI6IDMwXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiY29tcG9uZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwic2hlbGxcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJSb3RvbW91bGRlZCBzaGVsbFwiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJwbGFzdGljXCIsXG4gICAgICAgICAgXCJ1dlwiOiBcImhlaWdodFwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAwLjgsXG4gICAgICAgICAgXCJjb2xsaWRlclwiOiB7XG4gICAgICAgICAgICBcInNoYXBlXCI6IFwiYm94XCIsXG4gICAgICAgICAgICBcImxvY2FsQ2VudGVyXCI6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC40LFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJoYWxmRXh0ZW50c1wiOiBbXG4gICAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgICAgMC40LFxuICAgICAgICAgICAgICAwLjI1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJub3Rlc1wiOiBcIkRlY2xhcmVkIG9uIHRoZSBhc3NldCBhcyBib3g6IG9uZSBwcm94eSBvdmVyIHRoZSB3aG9sZSBiYXJyaWVyLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImV4dHJ1ZGVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI1LFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yNSxcbiAgICAgICAgICAgICAgICAgIDAuMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgICAgIDAuMzZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTEsXG4gICAgICAgICAgICAgICAgICAwLjU2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjA5NSxcbiAgICAgICAgICAgICAgICAgIDAuNjRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgICAgICAgMC43XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgICAgICAgIDAuOFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDc1LFxuICAgICAgICAgICAgICAgICAgMC44XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4wNzUsXG4gICAgICAgICAgICAgICAgICAwLjdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjA5NSxcbiAgICAgICAgICAgICAgICAgIDAuNjRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjExLFxuICAgICAgICAgICAgICAgICAgMC41NlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMTQsXG4gICAgICAgICAgICAgICAgICAwLjM2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4yNSxcbiAgICAgICAgICAgICAgICAgIDAuMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMjUsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInowXCI6IC0wLjUxLFxuICAgICAgICAgICAgICBcInoxXCI6IDAuNTEsXG4gICAgICAgICAgICAgIFwicnlcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcImhleFwiOiAxNDI0NjQ0NlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE0MjQ2NDQ2LFxuICAgICAgICAgICAgICAtMC41NTUsXG4gICAgICAgICAgICAgIDAuNzIwMDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgMC4xM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTQyNDY0NDYsXG4gICAgICAgICAgICAgIDAuNTU1LFxuICAgICAgICAgICAgICAwLjcwMDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgICAgMC4xNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTAxMTAyNDAsXG4gICAgICAgICAgICAgIDAuNjAwOCxcbiAgICAgICAgICAgICAgMC43MDAwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjAwMTYsXG4gICAgICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgICAgIDAuMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE0MjQ2NDQ2LFxuICAgICAgICAgICAgICAtMC41NTUsXG4gICAgICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgICAgIDAuMzRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE0MjQ2NDQ2LFxuICAgICAgICAgICAgICAwLjU1NSxcbiAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgMC4zNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTQyNDY0NDYsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuODA4LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgIDAuMDE2LFxuICAgICAgICAgICAgICAwLjE2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxNTEzMTM1NCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC40OCxcbiAgICAgICAgICAgICAgMC4xMjM1MDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgMC45MixcbiAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgMC4wMDMsXG4gICAgICAgICAgICAgIC0wLjE0ODg4OTk0NzYwOTQ5NzI1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxNTEzMTM1NCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4yOCxcbiAgICAgICAgICAgICAgMC4xNzUzNDYxNTM4NDYxNTM4NSxcbiAgICAgICAgICAgICAgMC45MixcbiAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgMC4wMDMsXG4gICAgICAgICAgICAgIC0wLjQwMDI0MDY1NzAzMzk3NDEsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE1MTMxMzU0LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjQ4LFxuICAgICAgICAgICAgICAtMC4xMjM1MDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgMC45MixcbiAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgMC4wMDMsXG4gICAgICAgICAgICAgIDAuMTQ4ODg5OTQ3NjA5NDk3MjUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE1MTMxMzU0LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjI4LFxuICAgICAgICAgICAgICAtMC4xNzUzNDYxNTM4NDYxNTM4NSxcbiAgICAgICAgICAgICAgMC45MixcbiAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgMC4wMDMsXG4gICAgICAgICAgICAgIDAuNDAwMjQwNjU3MDMzOTc0MSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTAxMTAyNDAsXG4gICAgICAgICAgICAgIC0wLjMsXG4gICAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAgIDAuMjUwOCxcbiAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgICAgMC4wMDE2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMDExMDI0MCxcbiAgICAgICAgICAgICAgLTAuMyxcbiAgICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgICAgLTAuMjUwOCxcbiAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgICAgMC4wMDE2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMDExMDI0MCxcbiAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAwLjAzLFxuICAgICAgICAgICAgICAwLjI1MDgsXG4gICAgICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAgIDAuMDAxNlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTAxMTAyNDAsXG4gICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgICAgLTAuMjUwOCxcbiAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgICAgMC4wMDE2XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImN5bHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuODI4MDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjAyNSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTIsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDI3NjMzMDZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC44NDQwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjAzNSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAzNSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDA4LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMixcbiAgICAgICAgICAgICAgXCJoZXhcIjogMzgxNTk5NFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIC8vIENPTE9SIGhhcyB0byBiZSBjYXJyaWVkIHRvbywgYW5kIGl0IGlzIGVhc3kgdG8gZm9yZ2V0OiB0aGlzIGZ1bmN0aW9uIGNvcGllZCBwb3NpdGlvbiwgbm9ybWFsXG4gIC8vIGFuZCB1diBvbmx5LCBhbmQgdGhlIG1vc3F1ZSdzIHJpYmJlZCBkb21lcyBsb3N0IHRoZWlyIGdyZWVuLWFuZC1wYWxlIHN0cmlwaW5nIHRoZSBtb21lbnQgdGhleVxuICAvLyB3ZXJlIG1lcmdlZCB3aXRoIGFueXRoaW5nLiBUaGUgZmFpbHVyZSBpcyBzaWxlbnQgLS0gdGhlIGRvbWUgcmVuZGVycywgaW4gb25lIGZsYXQgY29sb3VyIC0tIGFuZFxuICAvLyB0b29rIGEgd3JvbmcgdGhlb3J5IGFib3V0IHNSR0IgZ2FtbWEgYmVmb3JlIHRoZSBhdHRyaWJ1dGUgbGlzdCB3YXMgcmVhZC4gQW55IGlucHV0IGNhcnJ5aW5nIGFcbiAgLy8gY29sb3VyIG1lYW5zIGV2ZXJ5IGlucHV0IGdldHMgb25lLCB3aGl0ZSB3aGVyZSBpdCBoYWQgbm9uZS5cbiAgY29uc3QgYW55Q29sb3IgPSBwYXJ0cy5zb21lKChnKSA9PiAhIWcuZ2V0QXR0cmlidXRlKCdjb2xvcicpKTtcbiAgY29uc3QgY29sb3IgPSBhbnlDb2xvciA/IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKS5maWxsKDEpIDogbnVsbDtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCBjID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgICBpZiAoY29sb3IgJiYgYykgeyBjb2xvclsodiArIGkpICogM10gPSBjLmdldFgoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMV0gPSBjLmdldFkoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMl0gPSBjLmdldFooaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbG9yKSBvdXQuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3IsIDMpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByVG9wOiBudW1iZXIsIHJCb3Q6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCwgckJvdCwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuXG4vKipcbiAqIFJldm9sdmUgYSBwcm9maWxlIGFib3V0ICtZLiBgcHRzYCBhcmUgW3JhZGl1cywgeV0gaW4gbWV0cmVzLCBib3R0b20gdG8gdG9wLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNoYXBlIHZvY2FidWxhcnkgdGhlIHdob2xlIG1vbnVtZW50YWwgc2V0IGlzIGJ1aWx0IGZyb20gLS0gYSBjaGVkaSdzIGJlbGwsIGEgcHJhbmcnc1xuICogY29ybi1jb2IgdGFwZXIsIGEgZG9tZSwgYSByaW5nZWQgc3BpcmUgYXJlIGFsbCBvbmUgcHJvZmlsZSBlYWNoLiBUd28gdGhpbmdzIGFyZSB3b3J0aCBzdGF0aW5nXG4gKiBiZWNhdXNlIGJvdGggY29zdCBhIHJlYnVpbGQgdG8gbGVhcm46XG4gKlxuICogLSBMYXRoZUdlb21ldHJ5IGlzIE9QRU4gYXQgdG9wIGFuZCBib3R0b20uIEEgcHJvZmlsZSB0aGF0IGRvZXMgbm90IGNsb3NlIG9uIHRoZSBheGlzIChyYWRpdXMgMClcbiAqICAgbGVhdmVzIGEgaG9sZSB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZHMgYXMgYmFja2dyb3VuZCBlbmNsb3NlZCBieSB0aGUgc2lsaG91ZXR0ZS4gQ2xvc2UgaXQsIG9yXG4gKiAgIGNhcCBpdCB3aXRoIHdoYXQgc2l0cyBhYm92ZS5cbiAqIC0gUkFESUFMIFNFR01FTlQgQ09VTlQgaXMgdGhlIHRyaWFuZ2xlIGJ1ZGdldCdzIG1haW4gbGV2ZXIgaGVyZSBhbmQgaXQgaXMgcGVyLWxhdGhlOiBhIHByb2ZpbGUgb2ZcbiAqICAgbiBwb2ludHMgYXQgcyBzZWdtZW50cyBpcyAyKihuLTEpKnMgdHJpYW5nbGVzLiBBIDI0LXJpbmcgc3BpcmUgYXQgMzIgc2VnbWVudHMgaXMgMSw0NzJcbiAqICAgdHJpYW5nbGVzIG9uIGl0cyBvd24sIHdoaWNoIGlzIHdoeSB0aGUgbG93LXJlbGllZiByaW5ncyBhcmUgYSBwcm9maWxlIHJhdGhlciB0aGFuIDI0IHJpbmdzLlxuICovXG5mdW5jdGlvbiBsYXRoZShwdHM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyLCB5T2Zmc2V0ID0gMCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdiA9IHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGgubWF4KHBbMF0sIDApLCBwWzFdICsgeU9mZnNldCkpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkodiwgc2VnKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgc3RlcHBlZCB0YXBlciBhcyBhIGxhdGhlIHByb2ZpbGU6IGByaW5nc2AgYWx0ZXJuYXRpbmcgb3V0L2luIHJhZGlpIGNsaW1iaW5nIGZyb20geTAgdG8geTEuXG4gKiAgT25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLCBhbmQgdGhlIHN0ZXAgY291bnQgaXMgYSBwcm9maWxlLXBvaW50IGNvdW50IHJhdGhlciB0aGFuIGEgbWVzaFxuICogIGNvdW50IC0tIHdoaWNoIGlzIHdoYXQga2VlcHMgYSAyMC1yaW5nIGNoZWRpIHNwaXJlIGluc2lkZSBhIDMyLWdlb21ldHJ5IGNlaWxpbmcuICovXG5mdW5jdGlvbiByaW5nZWRUYXBlcih5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCByaW5nczogbnVtYmVyLCBidWxnZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSByaW5nczsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGkgLyByaW5ncztcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IHIgPSByMCArIChyMSAtIHIwKSAqIHQ7XG4gICAgY29uc3Qgc3RlcCA9ICh5MSAtIHkwKSAvIHJpbmdzO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHldKTtcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5ICsgc3RlcCAqIDAuNDVdKTtcbiAgICBwdHMucHVzaChbciwgeSArIHN0ZXAgKiAwLjU1XSk7XG4gIH1cbiAgcHRzLnB1c2goW3IxLCB5MV0pO1xuICByZXR1cm4gcHRzO1xufVxuXG5cbi8qKlxuICogVGhlIFJFREVOVEVEIHNxdWFyZSBwbGFuIC0tIGEgc3F1YXJlIHdob3NlIGZvdXIgY29ybmVycyBhcmUgY3V0IGJhY2sgaW4gdHdvIHJpZ2h0LWFuZ2xlZCBzdGVwcy5cbiAqIEl0IGlzIHRoZSBwbGFuIG9mIGEgVGhhaSBjaGVkaSdzIHRlcnJhY2UgYW5kIG9mIGEgcHJhbmcncyBiYXNlLCBhbmQgYnVpbGRpbmcgaXQgYXMgYSBTaGFwZSB0aGF0XG4gKiBpcyB0aGVuIGV4dHJ1ZGVkIGlzIG5vdCBhIHN0eWxpc3RpYyBjaG9pY2U6IHRoZSBvYnZpb3VzIGFsdGVybmF0aXZlLCBhIHdpZGUgYm94IGNyb3NzZWQgYnkgYVxuICogZGVlcCBib3gsIHB1dHMgdGhlIHR3byBib3hlcycgdG9wIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciB0aGVpciB3aG9sZVxuICogaW50ZXJzZWN0aW9uLCB3aGljaCB6LWZpZ2h0cy4gT25lIGV4dHJ1c2lvbiBvZiBvbmUgY2xvc2VkIHBsYW4gaGFzIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlIGF0XG4gKiBhbGwuXG4gKlxuICogYGFgIGlzIHRoZSBoYWxmLXdpZHRoIGFjcm9zcyB0aGUgZmxhdHM7IGByYCBpcyB0aGUgZGVwdGggb2YgZWFjaCByZWRlbnQgc3RlcC5cbiAqL1xuZnVuY3Rpb24gcmVkZW50ZWRTaGFwZShhOiBudW1iZXIsIHI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcXVhZCA9IFtbYSwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSByXSwgW2EgLSAyICogciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhXV07XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHF1YWQpIHtcbiAgICAgIC8vIHJvdDkwXmssIGFwcGxpZWQgayB0aW1lczogKHgsIHopIC0+ICgteiwgeClcbiAgICAgIGxldCBweCA9IHgsIHB6ID0gejtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7IGNvbnN0IHQgPSBweDsgcHggPSAtcHo7IHB6ID0gdDsgfVxuICAgICAgcHRzLnB1c2goW3B4LCBwel0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGJldHdlZW4gdHdvIGhlaWdodHMuIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgYWxvbmcgK1osIHNvIHRoZSByZXN1bHQgaXNcbiAqICByb3RhdGVkIG9udG8gK1k7IGAtTWF0aC5QSSAvIDJgIGFib3V0IFggbWFwcyArWiB0byArWSBhbmQgbGVhdmVzIHRoZSBwbGFuJ3Mgb3duIHggYXMgeC4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVTbGFiKHNoYXBlOiBUSFJFRS5TaGFwZSwgeTA6IG51bWJlciwgeTE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHkxIC0geTAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIC8vIHJvdGF0ZVgoLVBJLzIpIG1hcHMgKHgsIHksIHopIC0+ICh4LCB6LCAteSksIHNvIHRoZSBleHRydXNpb24gZGVwdGggYmVjb21lcyBoZWlnaHQgYW5kIHRoZVxuICAvLyBwbGFuJ3Mgb3duIHNlY29uZCBheGlzIGJlY29tZXMgLXouIEV2ZXJ5IHBsYW4gaGVyZSBpcyBmb3VyLWZvbGQgc3ltbWV0cmljLCBzbyB0aGF0IHNpZ24gaXNcbiAgLy8gaW1tYXRlcmlhbDsgd2hhdCBtYXR0ZXJzIGlzIHRoYXQgdGhlIHNsYWIgbm93IHJ1bnMgVVAgZnJvbSB5PTAgYW5kIG5lZWRzIGxpZnRpbmcgYnkgeTAuXG4gIGcucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSgwLCB5MCwgMCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBzcXVhcmUgcGxhbiB3aXRoIGEgcmVjdGFuZ3VsYXIgTk9UQ0ggY3V0IGludG8gaXRzICtYIGZhY2UgLS0gdGhlIHN0YWlyIHdlbGwgb2YgYSB0ZW1wbGVcbiAqIHRlcnJhY2UuIEN1dHRpbmcgdGhlIHN0YWlyIG91dCBvZiB0aGUgcGxhbiByYXRoZXIgdGhhbiBoYW5naW5nIGl0IG9mZiB0aGUgb3V0c2lkZSBpcyB3aGF0IGtlZXBzXG4gKiBhbiBhc3ltbWV0cmljIGZlYXR1cmUgaW5zaWRlIGEgc3ltbWV0cmljIGRlY2xhcmVkIGVudmVsb3BlOiBhIGZsaWdodCBwcm9qZWN0aW5nIHBhc3QgYSA5IG1cbiAqIHRlcnJhY2Ugd291bGQgcHV0IHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkIHdpZHRoIG9uIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiBub3RjaGVkU3F1YXJlKGE6IG51bWJlciwgbm90Y2hIYWxmWjogbnVtYmVyLCB4SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1thLCAtYV0sIFthLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgbm90Y2hIYWxmWl0sXG4gICAgICAgICAgICAgICBbYSwgbm90Y2hIYWxmWl0sIFthLCBhXSwgWy1hLCBhXSwgWy1hLCAtYV1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFJFQ1RBTkdVTEFSIHBsYW4gd2l0aCBhIG5vdGNoIGN1dCBpbnRvIGl0cyArWiBmYWNlLiBUaGUgc3F1YXJlIHZlcnNpb24gYWJvdmUgaXMgd2hhdCBhIGNoZWRpIG9yXG4gKiBhIHByYW5nIHRlcnJhY2UgbmVlZHM7IGEgaGFsbCB0aGF0IGlzIHR3aWNlIGFzIGxvbmcgYXMgaXQgaXMgd2lkZSBuZWVkcyB0aGUgdHdvIGhhbGYtZXh0ZW50cyBrZXB0XG4gKiBhcGFydCwgYW5kIGl0cyBzdGFpciBpcyBvbiBhIHNob3J0IGVuZCByYXRoZXIgdGhhbiBhIGxvbmcgb25lLlxuICovXG5mdW5jdGlvbiBub3RjaGVkUmVjdChoeDogbnVtYmVyLCBoejogbnVtYmVyLCBueDogbnVtYmVyLCB6SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1toeCwgLWh6XSwgW2h4LCBoel0sIFtueCwgaHpdLCBbbngsIHpJbm5lcl0sIFstbngsIHpJbm5lcl0sIFstbngsIGh6XSwgWy1oeCwgaHpdLCBbLWh4LCAtaHpdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogVGhlIGNyb3NzLXNlY3Rpb24gb2Ygb25lIHJvb2YgdGllciwgYXMgYSBjbG9zZWQgdHJhcGV6b2lkIGluIFhZOiBlYXZlcyBhdCAoKy1oYWxmQmFzZSwgeTApXG4gKiByaXNpbmcgYXQgYHBpdGNoYCAoYXMgYSB0YW5nZW50KSB0byBhIGZsYXQgdG9wIGF0IHkxLlxuICpcbiAqIFRoYWkgdGVtcGxlIHJvb2ZzIG5lc3QsIGFuZCB0aGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSBUUlVOQ0FUSU9OLiBUaHJlZSBmdWxsIGdhYmxlcyBhdCBvbmVcbiAqIHBpdGNoIGNhbm5vdCBuZXN0IC0tIHRoZSB3aWRlc3QgdGllcidzIHJpZGdlIHdvdWxkIGJlIHRoZSBoaWdoZXN0LCB3aGljaCBpcyB1cHNpZGUgZG93bi4gV2hhdFxuICogYWN0dWFsbHkgaGFwcGVucyBpcyB0aGF0IGVhY2ggbG93ZXIgdGllciBpcyBjdXQgb2ZmIGF0IHRoZSBoZWlnaHQgd2hlcmUgdGhlIG5leHQgdGllcidzIGVhdmVzXG4gKiBiZWdpbiwgYW5kIGl0cyB1cHBlciBwYXJ0IGlzIGhpZGRlbiBiZWhpbmQgdGhhdCB0aWVyOyBvbmx5IHRoZSB0b3Btb3N0IHRpZXIgaXMgYSByZWFsIGdhYmxlLFxuICogY2xvc2VkIGJ5IHBhc3NpbmcgeTEgYXQgdGhlIGFwZXguXG4gKi9cbmZ1bmN0aW9uIHRpZXJQcm9maWxlKGhhbGZCYXNlOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGluc2V0ID0gKHkxIC0geTApIC8gcGl0Y2g7XG4gIGNvbnN0IGhhbGZUb3AgPSBoYWxmQmFzZSAtIGluc2V0O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLWhhbGZCYXNlLCB5MCk7XG4gIHNoYXBlLmxpbmVUbyhoYWxmQmFzZSwgeTApO1xuICBpZiAoaGFsZlRvcCA+IDAuMDIpIHtcbiAgICBzaGFwZS5saW5lVG8oaGFsZlRvcCwgeTEpO1xuICAgIHNoYXBlLmxpbmVUbygtaGFsZlRvcCwgeTEpO1xuICB9IGVsc2Uge1xuICAgIHNoYXBlLmxpbmVUbygwLCB5MCArIGhhbGZCYXNlICogcGl0Y2gpOyAgIC8vIGEgcmVhbCByaWRnZTogdGhlIHRvcG1vc3QgdGllciBjbG9zZXMgdG8gYSBwb2ludFxuICB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBhbG9uZyArWiBiZXR3ZWVuIHR3byBkZXB0aHMsIHdpdGggbm8gcm90YXRpb24gLS0gdGhlIG5hdGl2ZSBkaXJlY3Rpb24gb2ZcbiAqICBFeHRydWRlR2VvbWV0cnkuIFVzZWQgd2hlcmUgdGhlIHByb2ZpbGUgZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZSwgc3VjaCBhcyB0aGUgcmFraW5nXG4gKiAgdHJpYW5nbGUgb2YgYSBzdGFpciBjaGVlay4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVBbG9uZ1ooc2hhcGU6IFRIUkVFLlNoYXBlLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogejEgLSB6MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgZy50cmFuc2xhdGUoMCwgMCwgejApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSByZWN0YW5ndWxhciBwbGF0ZSB3aG9zZSBoZWFkIGlzIGEgaGFsZi1yb3VuZCBhcmNoLCBvcHRpb25hbGx5IGNhcnJ5aW5nIGFuIGFyY2hlZCBhcGVydHVyZSBvZlxuICogIHRoZSBzYW1lIGZvcm0uIFRoZSBhcGVydHVyZSBhcmMgaXMgQUxXQVlTIHN3ZXB0IGZyb20gYW5nbGUgMCB0byBQSTogd3JpdHRlbiB0aGUgb3RoZXIgd2F5IGl0XG4gKiAgcnVucyB1bmRlciB0aGUgY2lyY2xlIGluc3RlYWQgb2Ygb3ZlciBpdCBhbmQgbGVhdmVzIHRoZSBhcmNoIGhlYWQgZmlsbGVkIHNvbGlkLCB3aGljaCByZWFkcyBhc1xuICogIGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3biBhY3Jvc3MgaXQuICovXG5mdW5jdGlvbiBhcmNoZWRQbGF0ZSh3OiBudW1iZXIsIGg6IG51bWJlciwgYXJjaFI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBob2xlPzogeyByOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC13IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuYWJzYXJjKDAsIHNwcmluZywgYXJjaFIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgc2hhcGUubGluZVRvKC13IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAubGluZVRvKGhvbGUuciwgaG9sZS5zcHJpbmcpO1xuICAgIHAuYWJzYXJjKDAsIGhvbGUuc3ByaW5nLCBob2xlLnIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgICBwLmxpbmVUbygtaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAuY2xvc2VQYXRoKCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBISVAgUk9PRiB3aXRoIGEgY29uY2F2ZSBzbG9wZSBhbmQgdXBzd2VwdCBjb3JuZXJzIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YsIHdoaWNoIG5vbmUgb2YgdGhlXG4gKiBvdGhlciBzaGFwZSBoZWxwZXJzIGhlcmUgY2FuIGV4cHJlc3MuXG4gKlxuICogSXQgaXMgZ2VuZXJhdGVkIGFzIGEgcmluZyBvZiByZWN0YW5nbGVzIGNsaW1iaW5nIGZyb20gdGhlIGVhdmVzIHRvIHRoZSByaWRnZSByYXRoZXIgdGhhbiBhcyBhblxuICogZXh0cnVkZWQgcHJvZmlsZSwgYmVjYXVzZSBhIGhpcCBzbG9wZXMgb24gYWxsIGZvdXIgc2lkZXM6IGFuIGV4dHJ1c2lvbiBnaXZlcyB2ZXJ0aWNhbCBnYWJsZSBlbmRzLFxuICogd2hpY2ggaXMgYSBkaWZmZXJlbnQgYnVpbGRpbmcuXG4gKlxuICogVGhlIGhvcml6b250YWwgc2hyaW5rIGZvbGxvd3MgYCgxIC0gdCleY3VydmVFeHBgLCBhbmQgdGhlIGV4cG9uZW50IG11c3QgYmUgQUJPVkUgb25lLiBUaGUgc2xvcGVcbiAqIGF0IGFueSBoZWlnaHQgaXMgZHkvZHgsIHNvIGEgcGxhbiB0aGF0IHNocmlua3MgRkFTVCBmb3IgYSBnaXZlbiByaXNlIGlzIGEgc2hhbGxvdyBzbG9wZTogd2l0aFxuICogcSA+IDEgdGhlIGRlcml2YXRpdmUgcSgxLXQpXihxLTEpIGlzIGxhcmdlIGF0IHRoZSBlYXZlcyBhbmQgc21hbGwgYXQgdGhlIHJpZGdlLCB3aGljaCBpcyBzaGFsbG93XG4gKiBlYXZlcyBhbmQgYSBzdGVlcCByaWRnZSAtLSB0aGUgRWFzdCBBc2lhbiByb29mLiBCZWxvdyBvbmUgaXQgaXMgdGhlIG90aGVyIHdheSByb3VuZCBhbmQgYnVpbGRzIGFcbiAqIGZsYXQtdG9wcGVkIHRlbnQsIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGF0dGVtcHQgaGVyZSByZW5kZXJlZC4gQSBsaW5lYXIgc2hyaW5rIGdpdmVzIHRoZVxuICogc3RyYWlnaHQgcHlyYW1pZCBvZiBhIGhpcCByb29mIGFueXdoZXJlIGVsc2UgaW4gdGhlIHdvcmxkLlxuICpcbiAqIGBjb3JuZXJMaWZ0YCByYWlzZXMgYW5kIHB1c2hlcyBvdXQgdGhlIGZvdXIgZWF2ZXMgY29ybmVycywgdGFwZXJpbmcgYXdheSBieSBhIHRoaXJkIG9mIHRoZSB3YXlcbiAqIHVwLiBUaGF0IHVwc3dlZXAgaXMgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nIHRoaW5nIGFib3V0IHRoZSByb29mLCBhbmQgaXQgaXMgd2h5IHRoZSBwbGFuXG4gKiBoYWxmLXdpZHRoIHBhc3NlZCBpbiBtdXN0IGxlYXZlIHJvb206IHRoZSBjb3JuZXJzIGVuZCB1cCBmdXJ0aGVyIG91dCB0aGFuIHRoZSBlYXZlcyBsaW5lLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYSBjbG9zZWQgc29saWQgLS0gb3V0ZXIgc3VyZmFjZSwgYSBzb2ZmaXQgYGRyb3BgIGJlbG93IHRoZSBlYXZlcywgYW5kIGEgZmFzY2lhIGJhbmRcbiAqIGJldHdlZW4gdGhlbS4gQW4gb3BlbiBzaGVsbCB3b3VsZCBsZXQgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueVxuICogbG93IGFuZ2xlLlxuICovXG5mdW5jdGlvbiBoaXBSb29mKGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIHJpZGdlSGFsZlo6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgY3VydmVFeHA6IG51bWJlciwgc3RlcHM6IG51bWJlciwgZHJvcDogbnVtYmVyLCBjb3JuZXJMaWZ0OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIEVJR0hUIHBvaW50cyBwZXIgcmluZywgbm90IGZvdXI6IHRoZSBmb3VyIGNvcm5lcnMgYW5kIHRoZSBmb3VyIGVkZ2UgbWlkcG9pbnRzLiBXaXRoIGZvdXIgdGhlXG4gIC8vIGNvcm5lciBsaWZ0IGhhcyBub3doZXJlIHRvIGZhbGwgYXdheSB0byBhbmQgcmFpc2VzIHRoZSBFTlRJUkUgZWF2ZXMgbGluZSwgd2hpY2ggYnVpbHQgYSBzYWRkbGVcbiAgLy8gaW5zdGVhZCBvZiBhIHJvb2YuIFRoZSBtaWRwb2ludHMgYXJlIHdoYXQgaG9sZCB0aGUgZWF2ZXMgZG93biBiZXR3ZWVuIHRoZSBjb3JuZXJzLlxuICAvL1xuICAvLyBUaGUgb3JkZXIgaXMgKCt4LC16KSwgbWlkLCAoLXgsLXopLCBtaWQsICgteCwreiksIG1pZCwgKCt4LCt6KSwgbWlkLCB3aGljaCBpcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAvLyBzZWVuIGZyb20gQUJPVkUgLS0gdGhlIHdpbmRpbmcgYW4gdXB3YXJkLWZhY2luZyBzdXJmYWNlIG5lZWRzLiBXb3VuZCB0aGUgb3RoZXIgd2F5IHRoZSB3aG9sZVxuICAvLyByb29mIHJlbmRlcnMgaW5zaWRlIG91dCwgd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gYmxhY2sgbWVtYnJhbmUgcmF0aGVyIHRoYW4gYSBtaXN0YWtlLlxuICBjb25zdCByaW5nID0gKHQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxIC0gdCwgY3VydmVFeHApO1xuICAgIGNvbnN0IGcgPSBNYXRoLnBvdyhNYXRoLm1heCgwLCAxIC0gdCAvIDAuMzQpLCAyKTtcbiAgICBjb25zdCBsaWZ0ID0gY29ybmVyTGlmdCAqIGcsIG91dCA9IDEgKyAwLjA0NSAqIGc7XG4gICAgY29uc3QgYXggPSBoeCAqIGYgKiBvdXQsIGF6ID0gKHJpZGdlSGFsZlogKyAoaHogLSByaWRnZUhhbGZaKSAqIGYpICogb3V0O1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgYyA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHkgKyBsaWZ0LCB6XTtcbiAgICBjb25zdCBtID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSwgel07XG4gICAgcmV0dXJuIFtjKGF4LCAtYXopLCBtKDAsIC1heiksIGMoLWF4LCAtYXopLCBtKC1heCwgMCksXG4gICAgICAgICAgICBjKC1heCwgYXopLCBtKDAsIGF6KSwgYyhheCwgYXopLCBtKGF4LCAwKV07XG4gIH07XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgbGV0IHByZXYgPSByaW5nKDApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgY3VyID0gcmluZyhpIC8gc3RlcHMpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgICAgcHVzaChwcmV2W2tdLCBwcmV2W2syXSwgY3VyW2syXSk7XG4gICAgICBwdXNoKHByZXZba10sIGN1cltrMl0sIGN1cltrXSk7XG4gICAgfVxuICAgIHByZXYgPSBjdXI7XG4gIH1cbiAgLy8gRmFzY2lhIGJhbmQgYW5kIHNvZmZpdCwgc28gdGhlIHJvb2YgaXMgYSBzb2xpZCByYXRoZXIgdGhhbiBhIHNoZWxsLiBBbiBvcGVuIHNoZWxsIGxldHMgdGhlXG4gIC8vIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueSBsb3cgYW5nbGUuXG4gIGNvbnN0IGUgPSByaW5nKDApO1xuICBjb25zdCBsb3cgPSBlLm1hcCgocCkgPT4gW3BbMF0sIHBbMV0gLSBkcm9wLCBwWzJdXSk7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICBwdXNoKGxvd1trXSwgZVtrXSwgZVtrMl0pO1xuICAgIHB1c2gobG93W2tdLCBlW2syXSwgbG93W2syXSk7XG4gIH1cbiAgZm9yIChsZXQgayA9IDE7IGsgPCA3OyBrKyspIHB1c2gobG93WzBdLCBsb3dbayArIDFdLCBsb3dba10pOyAgIC8vIHNvZmZpdCBmYW4sIGZhY2luZyBkb3duXG5cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBSSUJCRUQgZG9tZSAtLSBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiB3aG9zZSByYWRpdXMgaXMgbW9kdWxhdGVkIGFyb3VuZCB0aGUgYXhpcywgc28gaXQgcmVhZHNcbiAqIGFzIHRoZSBtZWxvbi1yaWJiZWQgZG9tZSBvZiBhIG1vc3F1ZSByYXRoZXIgdGhhbiBhIHNtb290aCBoZW1pc3BoZXJlLlxuICpcbiAqIExhdGhlR2VvbWV0cnkgY2Fubm90IGRvIHRoaXM6IGEgbGF0aGUgcmV2b2x2ZXMgb25lIHByb2ZpbGUgYXQgb25lIHJhZGl1cyBwZXIgaGVpZ2h0LCBhbmQgcmlicyBhcmVcbiAqIGEgdmFyaWF0aW9uIEFST1VORCB0aGUgYXhpcywgbm90IGFsb25nIGl0LiBTbyB0aGUgc3VyZmFjZSBpcyBnZW5lcmF0ZWQgZGlyZWN0bHksIHNhbXBsaW5nXG4gKiBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYCBwZXIgc2VjdG9yLiBUaGUgcmlicyBhcmUgdGhlIHJlYXNvbiB0aGUgZG9tZSBpcyByZWNvZ25pc2FibGUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20gLS0gYSBzbW9vdGggZ3JlZW4gaGVtaXNwaGVyZSByZWFkcyBhcyBhIHdhdGVyIHRhbmsuXG4gKi9cbmZ1bmN0aW9uIHJpYmJlZERvbWUocHJvZmlsZTogbnVtYmVyW11bXSwgcmliczogbnVtYmVyLCBhbXA6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbGxleT86IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGNvbDogbnVtYmVyW10gPSBbXTtcbiAgLy8gVGhlIHJpYnMgYXJlIG5vdCBvbmx5IGEgc2hhcGUuIE9uIHRoZSBtb3NxdWUncyBkb21lcyB0aGUgY3Jlc3RzIGFyZSBwYWxlIGFuZCB0aGUgdmFsbGV5cyBhcmVcbiAgLy8gZ3JlZW4sIGFuZCB0aGF0IHN0cmlwZSBpcyBtb3N0IG9mIHdoYXQgdGhlIGRvbWUgcmVhZHMgYXMgYXQgZGlzdGFuY2UuIEl0IGlzIGNhcnJpZWQgYXMgYVxuICAvLyBwZXItdmVydGV4IE1VTFRJUExJRVIgb2ZmIHRoZSBzYW1lIGNvc2luZSB0aGF0IHNoYXBlcyB0aGUgcmliIC0tIHR3byBtZWFzdXJlbWVudHMsIHRoZSBjcmVzdFxuICAvLyBjb2xvdXIgb24gdGhlIG1hdGVyaWFsIGFuZCB0aGUgdmFsbGV5IGFzIHRoZSByYXRpbyBiZXR3ZWVuIHRoZW0gLS0gc28gdGhlIHN0cmlwaW5nIGNvc3RzIGFuXG4gIC8vIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIHRleHR1cmUgc2V0IG9yIGEgc2Vjb25kIGRyYXcgY2FsbC5cbiAgY29uc3QgdGludCA9IChqOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXZhbGxleSkgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICAvLyBSYWlzZWQgdG8gMC41NSByYXRoZXIgdGhhbiBsZWZ0IGxpbmVhci4gQSBjb3NpbmUgc3BlbmRzIGhhbGYgaXRzIGFyZWEgbmVhciBlYWNoIGV4dHJlbWUsIGFuZFxuICAgIC8vIHRoYXQgcmVuZGVycyBhIGRvbWUgdGhhdCBpcyBwYWxlIG92ZXJhbGwgd2hlcmUgdGhlIHBsYXRlJ3MgaXMgZ3JlZW4gb3ZlcmFsbDogdGhlIGNyZXN0IGlzIGFcbiAgICAvLyBuYXJyb3cgaGlnaGxpZ2h0IG9uIGEgcmVhbCByaWIsIG5vdCBoYWxmIG9mIGl0LiBUaGUgZXhwb25lbnQgd2lkZW5zIHRoZSB2YWxsZXkuXG4gICAgY29uc3QgZiA9IE1hdGgucG93KCgxIC0gTWF0aC5jb3MocmlicyAqICgoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZykpKSAvIDIsIDAuNTUpO1xuICAgIHJldHVybiBbMSArICh2YWxsZXlbMF0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzFdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsyXSAtIDEpICogZl07XG4gIH07XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGggPSAoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICBjb25zdCBmID0gMSArIGFtcCAqIE1hdGguY29zKHJpYnMgKiB0aCk7XG4gICAgY29uc3QgciA9IHByb2ZpbGVbaV1bMF0gKiBmO1xuICAgIHJldHVybiBbTWF0aC5zaW4odGgpICogciwgcHJvZmlsZVtpXVsxXSwgTWF0aC5jb3ModGgpICogcl07XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZmlsZS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpLCBqICsgMSksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSArIDEsIGopO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgICBjb25zdCB0YSA9IHRpbnQoaiksIHRiID0gdGludChqICsgMSk7XG4gICAgICBjb2wucHVzaCguLi50YSwgLi4udGIsIC4uLnRiLCAuLi50YSwgLi4udGIsIC4uLnRhKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGlmICh2YWxsZXkpIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2wpLCAzKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBQT0lOVEVEIGFyY2ggcGxhdGUgLS0gdGhlIHR3by1jZW50cmVkIGFyY2ggb2YgYSBtb3NxdWUsIG5vdCB0aGUgaGFsZi1yb3VuZCBvZiBhIFJvbWFuIG9uZS5cbiAqIGBhcmNoZWRQbGF0ZWAgYWJvdmUgc3dlZXBzIGEgc2luZ2xlIHNlbWljaXJjbGUsIHdoaWNoIGlzIHRoZSB3cm9uZyBhcmNoIGhlcmUgYW5kIHJlYWRzIGFzIGFcbiAqIHJhaWx3YXkgdmlhZHVjdDsgdGhpcyBvbmUgcnVucyBlYWNoIHNpZGUgdXAgdG8gYSBzaGFyZWQgYXBleCB0aHJvdWdoIGEgcXVhZHJhdGljLCB3aGljaCBnaXZlcyB0aGVcbiAqIG9nZWUgcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHBvaW50ZWRBcmNoU2hhcGUodzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob2xlPzogeyB3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgYnVpbGQgPSAodGFyZ2V0OiBUSFJFRS5TaGFwZSB8IFRIUkVFLlBhdGgsIHd3OiBudW1iZXIsIHNwOiBudW1iZXIsIHJpc2U6IG51bWJlciwgc2w6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGh3ID0gd3cgLyAyO1xuICAgIHRhcmdldC5tb3ZlVG8oaHcsIHNsKTtcbiAgICB0YXJnZXQubGluZVRvKGh3LCBzcCk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oaHcsIHNwICsgcmlzZSAqIDAuNzIsIDAsIHNwICsgcmlzZSk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oLWh3LCBzcCArIHJpc2UgKiAwLjcyLCAtaHcsIHNwKTtcbiAgICB0YXJnZXQubGluZVRvKC1odywgc2wpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgYnVpbGQoc2hhcGUsIHcsIHNwcmluZywgYXBleFJpc2UsIHNpbGwpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIGJ1aWxkKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUuYXBleFJpc2UsIGhvbGUuc2lsbCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBUQVBFUklORyBUVUJFIGFsb25nICtaLCBidWlsdCBmcm9tIGEgbGlzdCBvZiBzdGF0aW9ucy4gRWFjaCBzdGF0aW9uIGlzXG4gKiBbeiwgY2VudHJlWCwgY2VudHJlWSwgcmFkaXVzWCwgcmFkaXVzWV0sIGFuZCBjb25zZWN1dGl2ZSBzdGF0aW9ucyBhcmUgam9pbmVkIGJ5IGEgcmluZyBvZiBgc2VnYFxuICogcG9pbnRzLCBzbyB0aGUgcmFkaXVzLCB0aGUgY2VudHJlIGFuZCB0aGUgZWxsaXBzZSByYXRpbyBjYW4gYWxsIHZhcnkgYWxvbmcgdGhlIGxlbmd0aC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IE9SR0FOSUMgZm9ybSBpbiB0aGUgd2hvbGUga2l0LCBhbmQgaXQgZXhpc3RzIGZvciBvbmUgcHJvcDogYSByZWNsaW5pbmcgZmlndXJlIGlzXG4gKiBhIGxvbmcgc29mdCBtYXNzIHdob3NlIHNlY3Rpb24gY2hhbmdlcyBhdCBldmVyeSBwb2ludCBhbG9uZyBpdCAtLSBzaG91bGRlciB0byB3YWlzdCB0byBoaXAgdG9cbiAqIGNhbGYgLS0gYW5kIG5laXRoZXIgYSBsYXRoZSBub3IgYSBzdGFjayBvZiBib3hlcyBjYW4gc2F5IHRoYXQuIEEgYm94IGRlY29tcG9zaXRpb24gb2YgYSBseWluZ1xuICogYm9keSBpcyBub3QgYSBsb3ctcG9seSBib2R5LCBpdCBpcyBhIHBpbGUgb2YgbHVnZ2FnZS5cbiAqXG4gKiBBIHN0YXRpb24gd2l0aCBhIHJhZGl1cyBhdCBvciBuZWFyIHplcm8gY2xvc2VzIHRoZSB0dWJlLCBzbyB0aGUgZW5kcyBjYW4gYmUgY2FwcGVkIGJ5IHRoZVxuICogc3RhdGlvbiBsaXN0IGl0c2VsZiByYXRoZXIgdGhhbiBieSBhIHNlcGFyYXRlIGZhbi5cbiAqL1xuZnVuY3Rpb24gdHViZUFsb25nKHN0YXRpb25zOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gSU5ERVhFRCwgd2l0aCBzaGFyZWQgcmluZyB2ZXJ0aWNlcywgc28gY29tcHV0ZVZlcnRleE5vcm1hbHMgYXZlcmFnZXMgYWNyb3NzIHRoZSBxdWFkcyBhbmQgdGhlXG4gIC8vIHN1cmZhY2Ugc2hhZGVzIHNtb290aC4gVGhlIGZpcnN0IGJ1aWxkIGVtaXR0ZWQgbG9vc2UgdHJpYW5nbGVzLCBhbmQgYSBmbGF0LXNoYWRlZCBzb2Z0IGJvZHlcbiAgLy8gc2hvd3MgZXZlcnkgc3RhdGlvbiBhcyBhIGNyZWFzZSAtLSBhIHJlY2xpbmluZyBmaWd1cmUgdGhhdCBsb29rZWQgY3J1bXBsZWQgcmF0aGVyIHRoYW4gZHJhcGVkLlxuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFt6LCBjeCwgY3ksIHJ4LCByeV0gPSBzdGF0aW9uc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIHBvcy5wdXNoKGN4ICsgTWF0aC5zaW4odGgpICogcngsIGN5ICsgTWF0aC5jb3ModGgpICogcnksIHopO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjID0gKGkgKyAxKSAqIHNlZyArIChqICsgMSkgJSBzZWcsIGQgPSBpICogc2VnICsgKGogKyAxKSAlIHNlZztcbiAgICAgIGlkeC5wdXNoKGEsIGIsIGMsIGEsIGMsIGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgocG9zLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5zZXRJbmRleChpZHgpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2ZWhpY2xlIGhlbHBlcnMgKi9cblxuLyoqIFBhaW50IGEgd2hvbGUgZ2VvbWV0cnkgb25lIHZlcnRleCBjb2xvdXIuIEV2ZXJ5IHZlaGljbGUgbWF0ZXJpYWwgaGVyZSBpcyBXSElURSB3aXRoXG4gKiAgdmVydGV4Q29sb3JzIG9uLCBzbyBhIGNvbG91ciBkaWZmZXJlbmNlIGNvc3RzIGFuIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIG1hdGVyaWFsOiB0aGUgYm9keSdzXG4gKiAgdHdvLXRvbmUsIHRoZSB0eXJlIGFnYWluc3QgaXRzIHJpbSwgYW4gYW1iZXIgaW5kaWNhdG9yIG9uIGEgYmxhY2sgYnVtcGVyIGFsbCByaWRlIG9uZSBzaGFkZXIuXG4gKiAgVmVydGV4IGNvbG91cnMgbXVsdGlwbHkgaW4gTElORUFSIHNwYWNlLCBzbyB0aGUgaGV4IGlzIGNvbnZlcnRlZCB0aHJvdWdoIFRIUkVFLkNvbG9yLCB3aGljaFxuICogIGRvZXMgdGhlIHNSR0ItdG8tbGluZWFyIHN0ZXAuICovXG5mdW5jdGlvbiB0aW50R2VvKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCk7XG4gIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEJveC1wcm9qZWN0IHdvcmxkLW1ldHJlIFVWcyBzbyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIChtdWQsIHJ1c3QsIGNvcnJ1Z2F0aW9uKSByZXBlYXRzXG4gKiAgYXQgYSByZWFsIHNpemUgb24gZXZlcnkgZmFjZS4gYHNjYWxlYCBpcyBtZXRyZXMgcGVyIHRpbGUuIFRoZSBkb21pbmFudCBub3JtYWwgYXhpcyBwaWNrcyB0aGVcbiAqICBwYWlyIG9mIHdvcmxkIGF4ZXMgdXNlZCwgc28gYSByb29mIHJlYWRzICh4LCB6KSBhbmQgYSBzaWRlIHJlYWRzICh6LCB5KS4gKi9cbmZ1bmN0aW9uIHdvcmxkVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG5ybS5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgIGlmIChheCA+PSBheSAmJiBheCA+PSBheikgeyB1ID0gcC5nZXRaKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgZWxzZSBpZiAoYXkgPj0gYXopIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WihpKTsgfVxuICAgIGVsc2UgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKipcbiAqIFNJREUtUFJPRklMRSBFWFRSVVNJT046IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyAodGhlIHZlaGljbGUncyBzaWRlIHNpbGhvdWV0dGUsIHdoZWVsXG4gKiBhcmNoZXMgaW5jbHVkZWQgYXMgbm90Y2hlcykgc3dlcHQgYWNyb3NzIHRoZSBmdWxsIHdpZHRoLCB0aGVuIHNoYXBlZCBwZXIgdmVydGV4OlxuICpcbiAqICAtIGB0dW1ibGVgICBuYXJyb3dzIHRoZSBzZWN0aW9uIGFib3ZlIHRoZSBiZWx0IGxpbmUgLS0geCBpcyBzY2FsZWQgYnkgKDEgLSBrICogdCkgd2hlcmUgdCBydW5zXG4gKiAgICAgICAgICAgICAgMCBhdCBgYmVsdGAgdG8gMSBhdCBgcm9vZmAuIFRoYXQgaXMgdGhlIHR1bWJsZWhvbWUgb2YgYSByZWFsIGNhciBib2R5IGFuZCBpcyB3aGF0XG4gKiAgICAgICAgICAgICAgc3RvcHMgdGhlIGdsYXNzaG91c2UgcmVhZGluZyBhcyBhIGJveCBvbiBhIGJveC5cbiAqICAtIGBwbGFuYCAgICByb3VuZHMgdGhlIHBsYW4gYXQgdGhlIG5vc2UgYW5kIHRhaWw6IGFuIG9wdGlvbmFsIGxpc3Qgb2YgW3osIHhTY2FsZV0gc3RhdGlvbnNcbiAqICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWQgYWxvbmcgeiwgc28gYSBib25uZXQgY2FuIHRhcGVyIHRvIDAuOSBvZiB0aGUgd2lkdGggYXQgdGhlIGJ1bXBlciBsaW5lLlxuICpcbiAqIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgaW4gaXRzIG93biAodSwgdiwgZGVwdGgpIGZyYW1lOyByb3RhdGVZKC1QSS8yKSBtYXBzIGRlcHRoIHRvIC14IGFuZCB1IHRvXG4gKiB3b3JsZCB6LCBhbmQgdGhlIHRyYW5zbGF0ZSByZS1jZW50cmVzIHRoZSBzbGFiIG9uIHggPSAwLiBBbnkgc2hhcGluZyBpcyBhcHBsaWVkIEFGVEVSIHRoYXQsIGFuZFxuICogbm9ybWFscyBhcmUgcmVjb21wdXRlZCBsYXN0IHNvIHRoZSBzaGFkZWQgZmFjZXMgZm9sbG93IHRoZSBzaGFwZWQgc3VyZmFjZS5cbiAqL1xuZnVuY3Rpb24gc2lkZUV4dHJ1ZGUocHJvZmlsZTogbnVtYmVyW11bXSwgd2lkdGg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW4/OiBudW1iZXJbXVtdLCBjdXJ2ZVNlZ21lbnRzPzogbnVtYmVyIH0gPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHByb2ZpbGVbMF1bMF0sIHByb2ZpbGVbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2ZpbGUubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwcm9maWxlW2ldWzBdLCBwcm9maWxlW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB3aWR0aCwgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlU2VnbWVudHM6IG9wdHMuY3VydmVTZWdtZW50cyA/PyA2IH0pO1xuICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUod2lkdGggLyAyLCAwLCAwKTtcbiAgc2hhcGVXaWR0aChnLCBvcHRzKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBUaGUgcGVyLXZlcnRleCB4IHNoYXBpbmcgc2hhcmVkIGJ5IHRoZSBib2R5IGFuZCBpdHMgZ2xhc3MgYmFuZCwgc28gYSBwYW5lIG9mZnNldCA1IG1tIHByb3VkIG9mXG4gKiAgdGhlIGJvZHkgc3RheXMgNSBtbSBwcm91ZCBhZnRlciBib3RoIGFyZSBuYXJyb3dlZCBieSB0aGUgc2FtZSBmdW5jdGlvbi4gKi9cbmZ1bmN0aW9uIHNoYXBlV2lkdGgoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksXG4gICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sIHBsYW4/OiBudW1iZXJbXVtdIH0pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGxldCB4ID0gcC5nZXRYKGkpOyBjb25zdCB5ID0gcC5nZXRZKGkpLCB6ID0gcC5nZXRaKGkpO1xuICAgIGlmIChvcHRzLnR1bWJsZSkge1xuICAgICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh5IC0gb3B0cy50dW1ibGUuYmVsdCkgLyAob3B0cy50dW1ibGUucm9vZiAtIG9wdHMudHVtYmxlLmJlbHQpKSk7XG4gICAgICB4ICo9IDEgLSBvcHRzLnR1bWJsZS5rICogdDtcbiAgICB9XG4gICAgaWYgKG9wdHMucGxhbiAmJiBvcHRzLnBsYW4ubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc3QgPSBvcHRzLnBsYW47XG4gICAgICBsZXQgcyA9IHN0WzBdWzFdO1xuICAgICAgaWYgKHogPD0gc3RbMF1bMF0pIHMgPSBzdFswXVsxXTtcbiAgICAgIGVsc2UgaWYgKHogPj0gc3Rbc3QubGVuZ3RoIC0gMV1bMF0pIHMgPSBzdFtzdC5sZW5ndGggLSAxXVsxXTtcbiAgICAgIGVsc2UgZm9yIChsZXQgayA9IDA7IGsgPCBzdC5sZW5ndGggLSAxOyBrKyspIHtcbiAgICAgICAgaWYgKHogPj0gc3Rba11bMF0gJiYgeiA8PSBzdFtrICsgMV1bMF0pIHtcbiAgICAgICAgICBjb25zdCB1ID0gKHogLSBzdFtrXVswXSkgLyAoc3RbayArIDFdWzBdIC0gc3Rba11bMF0pO1xuICAgICAgICAgIHMgPSBzdFtrXVsxXSArIChzdFtrICsgMV1bMV0gLSBzdFtrXVsxXSkgKiB1OyBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgeCAqPSBzO1xuICAgIH1cbiAgICBwLnNldFgoaSwgeCk7XG4gIH1cbiAgcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbn1cblxuLyoqIEEgc2VtaWNpcmN1bGFyIHdoZWVsLWFyY2ggbm90Y2ggYXMgcHJvZmlsZSBwb2ludHMsIHRvIGJlIHNwbGljZWQgaW50byBhIHNpZGUgcHJvZmlsZSB0aGF0IHJ1bnNcbiAqICBhbG9uZyB0aGUgc2lsbCBmcm9tICt6IHRvIC16IChpLmUuIHogREVDUkVBU0lORykuIGBuYCBzZWdtZW50czsgdGhlIGFyYyBpcyB0aGUgVE9QIGhhbGYuICovXG5mdW5jdGlvbiBhcmNoTm90Y2goemM6IG51bWJlciwgeVNpbGw6IG51bWJlciwgcjogbnVtYmVyLCBuID0gNyk6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJIC8gbjsgICAgICAgICAgICAgICAvLyAwIC4uIFBJLCBmcm9tICt6IHJvdW5kIHRoZSB0b3AgdG8gLXpcbiAgICBwdHMucHVzaChbemMgKyBNYXRoLmNvcyhhKSAqIHIsIHlTaWxsICsgTWF0aC5zaW4oYSkgKiByXSk7XG4gIH1cbiAgcmV0dXJuIHB0cztcbn1cblxuLyoqXG4gKiBBIFdIRUVMOiBvbmUgbGF0aGUgYWJvdXQgdGhlIGF4bGUuIFRoZSBwcm9maWxlIHJ1bnMgZnJvbSB0aGUgaHViIGZhY2Ugb24gb25lIHNpZGUgb3ZlciB0aGUgcmltXG4gKiBsaXAsIHRoZSB0eXJlIHNpZGV3YWxsLCB0aGUgdHJlYWQgYW5kIGJhY2sgZG93biB0aGUgZmFyIHNpZGUsIHNvIHRoZSB3aGVlbCBpcyBhIGNsb3NlZCBzb2xpZCB3aXRoXG4gKiBubyBvcGVuIGVuZCBmb3IgdGhlIHR1cm50YWJsZSBnYXRlIHRvIHJlYWQgdGhyb3VnaC4gUmV2b2x2ZWQgYWJvdXQgWSBhbmQgdGhlbiBsYWlkIG9uIFgsIHNvIHRoZVxuICogYXhsZSBpcyB0aGUgeCBheGlzIGFuZCB0aGUgd2hlZWwgcm9sbHMgYWJvdXQgaXQgLS0gd2hpY2ggaXMgdGhlIGF4aXMgaXRzIHBpdm90IGRlY2xhcmVzLlxuICpcbiAqIFR3byB2ZXJ0ZXggY29sb3VyczogYHJpbUhleGAgb24gdGhlIGh1YiBhbmQgcmltIHBvaW50cywgYHR5cmVIZXhgIG9uIHRoZSBzaWRld2FsbCBhbmQgdHJlYWQuIFRoZVxuICogbGF0aGUgb3JkZXJzIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IgKGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgd2hpY2ggaXMgd2hhdCBsZXRzIGFcbiAqIHBlci1wcm9maWxlLXBvaW50IGNvbG91ciBiZSB3cml0dGVuIHdpdGhvdXQgYSBzZWNvbmQgZ2VvbWV0cnkuXG4gKi9cbmZ1bmN0aW9uIHdoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICB0eXJlSGV4OiBudW1iZXIsIHJpbUhleDogbnVtYmVyLCBkaXNoID0gMC41NSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgaHcgPSBoYWxmVztcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjMwLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjYyLCAtaHcgKiAwLjgwXSwgW3JSaW0sIC1odyAqIDAuODZdLCBbclJpbSwgLWh3ICogMC45OF0sXG4gICAgW3JUeXJlICogMC45MywgLWh3XSwgW3JUeXJlLCAtaHcgKiAwLjcyXSwgW3JUeXJlLCBodyAqIDAuNzJdLCBbclR5cmUgKiAwLjkzLCBod10sXG4gICAgW3JSaW0sIGh3ICogMC45OF0sIFtyUmltLCBodyAqIDAuODZdLCBbclJpbSAqIDAuNjIsIGh3ICogMC44MF0sIFtyUmltICogMC4zMCwgaHcgKiBkaXNoXSwgWzAsIGh3ICogZGlzaF0sXG4gIF07XG4gIGNvbnN0IHJpbVBvaW50ID0gKGo6IG51bWJlcikgPT4gaiA8PSA0IHx8IGogPj0gOTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgY29uc3QgY3QgPSBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCksIGNyID0gbmV3IFRIUkVFLkNvbG9yKHJpbUhleCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYyA9IHJpbVBvaW50KGkgJSBwdHMubGVuZ3RoKSA/IGNyIDogY3Q7XG4gICAgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIGcucm90YXRlWihNYXRoLlBJIC8gMik7ICAgIC8vIGxhdGhlIGF4aXMgWSAtPiBheGxlIG9uIFhcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIFdpcmUtc3Bva2VkIHdoZWVsIGRyZXNzaW5nOiBgbmAgdGhpbiBib3hlcyByYWRpYXRpbmcgZnJvbSB0aGUgaHViLCBsYWNlZCBhbHRlcm5hdGVseSB0byBlYWNoXG4gKiAgc2lkZSBvZiB0aGUgcmltIHNvIHRoZXkgY3Jvc3MgdGhlIHdheSByZWFsIHNwb2tlcyBkby4gTWVyZ2VkIGludG8gdGhlIHdoZWVsIGdlb21ldHJ5IHNvIHRoZVxuICogIHdoZWVsIHN0YXlzIE9ORSBpbnN0YW5jZWQgZ2VvbWV0cnkuICovXG5mdW5jdGlvbiBzcG9rZXMockh1YjogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIG46IG51bWJlciwgaGV4OiBudW1iZXIsIHQgPSAwLjAwNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAqIDIgLyBuO1xuICAgIGNvbnN0IHNpZGUgPSAoaSAlIDIgPT09IDAgPyAxIDogLTEpICogaGFsZlcgKiAwLjM1O1xuICAgIGNvbnN0IGxlbiA9IHJSaW0gLSBySHViO1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodCwgbGVuLCB0KTtcbiAgICBnLnRyYW5zbGF0ZSgwLCBySHViICsgbGVuIC8gMiwgMCk7XG4gICAgZy5yb3RhdGVYKE1hdGguYXRhbjIoc2lkZSwgbGVuKSAqIDAuNik7XG4gICAgZy5yb3RhdGVYKDApOyBnLnRyYW5zbGF0ZSgwLCAwLCBzaWRlICogMC41KTtcbiAgICBnLnJvdGF0ZVgoYSk7ICAgICAgICAgICAgLy8gcmFkaWF0ZSBhcm91bmQgdGhlIGF4bGUgKHgpXG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiB0aW50R2VvKG1lcmdlR2VvcyhzZWdzKSwgaGV4KTtcbn1cblxuLyoqIEEgcG9seWxpbmUgVFVCRTogb25lIGN5bGluZGVyIHBlciBzZWdtZW50LCBlYWNoIHJvdGF0ZWQgb250byBpdHMgY2hvcmQsIHdpdGggYSBzbWFsbCBzcGhlcmUtbGVzc1xuICogIG92ZXJsYXAgc28gdGhlIGpvaW50cyBjbG9zZS4gSGFuZGxlYmFycywgY2Fub3B5IHJhaWxzLCByb2xsIGNhZ2VzIGFuZCBmcmFtZSB0dWJlcy4gKi9cbmZ1bmN0aW9uIHR1YmUocHRzOiBudW1iZXJbXVtdLCByOiBudW1iZXIsIHNlZyA9IDgsIGhleD86IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkID0gYi5jbG9uZSgpLnN1YihhKTsgY29uc3QgbGVuID0gZC5sZW5ndGgoKTtcbiAgICBpZiAobGVuIDwgMWUtNikgY29udGludWU7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIGxlbiArIHIgKiAxLjIsIHNlZywgMSwgZmFsc2UpO1xuICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgZC5ub3JtYWxpemUoKSk7XG4gICAgZy5hcHBseVF1YXRlcm5pb24ocSk7XG4gICAgY29uc3QgbSA9IGEuY2xvbmUoKS5hZGQoYikubXVsdGlwbHlTY2FsYXIoMC41KTtcbiAgICBnLnRyYW5zbGF0ZShtLngsIG0ueSwgbS56KTtcbiAgICBwYXJ0cy5wdXNoKGcpO1xuICB9XG4gIGNvbnN0IG91dCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IG91dCA6IHRpbnRHZW8ob3V0LCBoZXgpO1xufVxuXG4vKiogQSByb3RhdGVkIGJveDogW2N4LCBjeSwgY3osIHcsIGgsIGQsIHJ4LCByeSwgcnpdIHdpdGggdGhlIHJvdGF0aW9ucyBhcHBsaWVkIGluIHgsIHksIHogb3JkZXJcbiAqICBhYm91dCB0aGUgYm94J3Mgb3duIGNlbnRyZS4gQSBib25uZXQgbGlwLCBhIHJha2VkIG1pcnJvciBzdGVtLCBhIGNhbm9weSBzdGF5LiAqL1xuZnVuY3Rpb24gcmJveChiOiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShiWzNdLCBiWzRdLCBiWzVdKTtcbiAgaWYgKGJbNl0pIGcucm90YXRlWChiWzZdKTsgaWYgKGJbN10pIGcucm90YXRlWShiWzddKTsgaWYgKGJbOF0pIGcucm90YXRlWihiWzhdKTtcbiAgZy50cmFuc2xhdGUoYlswXSwgYlsxXSwgYlsyXSk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBiYXRjaCBvZiBib3hlcywgZWFjaCB0aW50ZWQsIG1lcmdlZDogW1toZXgsIGN4LCBjeSwgY3osIHcsIGgsIGQsIHJ4Pywgcnk/LCByej9dLCAuLi5dLiBUaGVcbiAqICB0cmltIGNvbXBvbmVudCBvZiBldmVyeSB2ZWhpY2xlIGlzIG9uZSBvZiB0aGVzZSAtLSBidW1wZXJzLCBncmlsbGUsIGxhbXBzLCBtaXJyb3JzLCBoYW5kbGVzLFxuICogIHN0ZXBzLCBhcmNoIGZsYXJlcyAtLSBzbyBmb3J0eSBwYXJ0cyByaWRlIG9uZSBzdWJtaXNzaW9uLiAqL1xuZnVuY3Rpb24gdGludGVkQm94ZXMobGlzdDogbnVtYmVyW11bXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gdGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSkpO1xufVxuXG4vKiogTWlycm9yIGEgYm94IGxpc3QgYWNyb3NzIHggPSAwIChsZWZ0L3JpZ2h0IHBhaXJzKS4gUm90YXRpb25zIGFib3V0IHkgYW5kIHogZmxpcCBzaWduLiAqL1xuZnVuY3Rpb24gbWlycm9yWChsaXN0OiBudW1iZXJbXVtdKTogbnVtYmVyW11bXSB7XG4gIHJldHVybiBsaXN0LmZsYXRNYXAoKGIpID0+IFtiLCBbYlswXSwgLWJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0sIGJbNl0sIGJbN10gPz8gMCwgLShiWzhdID8/IDApLCAtKGJbOV0gPz8gMCldXSk7XG59XG5cbi8qKiBBIHNlYW1sZXNzIENhbnZhcyAyRCB0aWxlOiBgZHJhdyhjdHgsIHNpemUpYCBwYWludHMgaXQsIGFuZCB0aGUgcmVzdWx0IGlzIGEgcmVwZWF0aW5nIHRleHR1cmVcbiAqICBpbiBzUkdCLiBVc2VkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbiwgc28gdGhlIHRleHR1cmVsZXNzIGRlY2xhcmF0aW9uIHN0YW5kcyBhbmQgbm9cbiAqICBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLiBSZXR1cm5zIG51bGwgd2hlcmUgdGhlcmUgaXMgbm8gRE9NICh0aGUgaGVhZGxlc3MgaGFybmVzc1xuICogIGhhcyBvbmU7IGEgbm9kZS1zaWRlIHByb2JlIGRvZXMgbm90KSwgYW5kIGV2ZXJ5IGNhbGxlciB0b2xlcmF0ZXMgbnVsbC4gKi9cbmZ1bmN0aW9uIGNhbnZhc1RpbGUoc2l6ZTogbnVtYmVyLCBkcmF3OiAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHM6IG51bWJlcikgPT4gdm9pZCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsO1xuICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOyBjdi53aWR0aCA9IHNpemU7IGN2LmhlaWdodCA9IHNpemU7XG4gIGNvbnN0IGN0eCA9IGN2LmdldENvbnRleHQoJzJkJyk7IGlmICghY3R4KSByZXR1cm4gbnVsbDtcbiAgZHJhdyhjdHgsIHNpemUpO1xuICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjdik7XG4gIHRleC53cmFwUyA9IHRleC53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xuICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICByZXR1cm4gdGV4O1xufVxuXG4vKiogRGV0ZXJtaW5pc3RpYyBwc2V1ZG8tcmFuZG9tIGZvciBjYW52YXMgZHJlc3NpbmcgLS0gYXNzaWduZWQgYnkgaW5kZXgsIG5ldmVyIE1hdGgucmFuZG9tLCBzbyB0aGVcbiAqICBtb2RlbCBpcyBieXRlLWlkZW50aWNhbCBvbiBldmVyeSBidWlsZC4gKi9cbmZ1bmN0aW9uIGxjZyhzZWVkOiBudW1iZXIpOiAoKSA9PiBudW1iZXIge1xuICBsZXQgcyA9IHNlZWQgPj4+IDA7XG4gIHJldHVybiAoKSA9PiB7IHMgPSAocyAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMDsgcmV0dXJuIHMgLyA0Mjk0OTY3Mjk2OyB9O1xufVxuXG4vKipcbiAqIE1VRCAvIFJPQUQtR1JJTUUgdGlsZSwgUkUtQkFTRUQuIFRoYWkgcm9hZCBtdWQgaXMgdGFuIGFuZCBCUklHSFRFUiB0aGFuIG1vc3QgcGFpbnQsIGFuZCBhXG4gKiBtdWx0aXBsaWVyIGNhbm5vdCBicmlnaHRlbjogc28gdGhlIHBhaW50IG1hdGVyaWFsIGNhcnJpZXMgdGhlIE1VRCBFTlZFTE9QRSBjb2xvdXIgKG1lYXN1cmVkIG9uXG4gKiB0aGUgbXVkZHkgc2lsbCksIHRoaXMgdGlsZSBjYXJyaWVzIHRoZSBjbGVhbiBwYWludCBhcyBhIFJBVElPIG9mIHRoYXQgZW52ZWxvcGUgb3ZlciBtb3N0IG9mIGl0c1xuICogYXJlYSAoYGJhc2VgKSwgYW5kIHRoZSBtdWQgaXMgcGFpbnRlZCBhcyB3aGl0ZSAtLSBpLmUuIHRoZSBlbnZlbG9wZSBpdHNlbGYgLS0gaW4gYSB3YXNoIHJpc2luZ1xuICogZnJvbSB0aGUgYm90dG9tIHRvIGBjb3ZlcmFnZWAgb2YgdGhlIHRpbGUgaGVpZ2h0IHBsdXMgc3BsYXR0ZXIgYWJvdmUgaXQuIEJvdW5kIHdpdGggaGVpZ2h0IFVWc1xuICogc28gdiA9IDAgaXMgdGhlIGdyb3VuZCBhbmQgdGhlIHdhc2ggc2l0cyBvbiB0aGUgc2lsbHMgYW5kIGFyY2hlcy5cbiAqL1xuZnVuY3Rpb24gbXVkVGlsZShzaXplOiBudW1iZXIsIGJhc2U6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMyk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCB0b0hleCA9ICh2OiBudW1iZXJbXSkgPT4gJyMnICsgdi5tYXAoKGMpID0+IE1hdGgucm91bmQoTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYykpICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSkuam9pbignJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRvSGV4KGJhc2UpOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTUsMjU1LDAuODgpJyk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC40NSwgJ3JnYmEoMjU1LDI1NSwyNTUsMC40NSknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS4zNTtcbiAgICAgIGNvbnN0IHIgPSAzICsgcm5kKCkgKiBzICogMC4wNTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjU1LDI1MCwyNDAsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTAsMjQwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGEgbGl0dGxlIGdyYWluIHNvIHRoZSBjbGVhbiBwYWludCBpcyBub3QgYSBmbGF0IGZpbGxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyMDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY29uc3QgdiA9IHJuZCgpIDwgMC41ID8gMCA6IDI1NTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjAzNSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMS41LCAxLjUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBEVVNUIHRpbGUgZm9yIHBhaW50IHRoYXQgaXMgQlJJR0hURVIgdGhhbiBpdHMgZGlydCAoYSB3aGl0ZSB2YW4pOiBhIHBsYWluIG11bHRpcGxpZXIsIHdoaXRlXG4gKiAgYmFzZSBhbmQgYSBncmV5LWJyb3duIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLCBwbHVzIHNvZnQgYmxvYnMuICovXG5mdW5jdGlvbiBkdXN0VGlsZShzaXplOiBudW1iZXIsIGR1c3Q6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYyA9IGR1c3QubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIHYpKSk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuOSlgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuNClgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS40LCByID0gMyArIHJuZCgpICogcyAqIDAuMDUsIGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI1O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIENPUlJVR0FURUQgU0hFRVQgdGlsZTogdmVydGljYWwgcmlkZ2VzIGFzIGEgc2luZS1zaGFkZWQgc3RyaXBlIGZpZWxkLCB1c2VkIGFzIG1hcCBBTkQgYnVtcE1hcCBvblxuICogIGEgc29uZ3RoYWV3IHJvb2Ygc28gdGhlIHJpZGdlcyBjYXRjaCBsaWdodC4gYHBpdGNoYCByaWRnZXMgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBjb3JydWdhdGlvblRpbGUoc2l6ZTogbnVtYmVyLCBwaXRjaDogbnVtYmVyLCBsb3c6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICBjb25zdCB0ID0gKE1hdGguY29zKHggLyBzICogTWF0aC5QSSAqIDIgKiBwaXRjaCkgKyAxKSAvIDI7ICAgLy8gMSBhdCBjcmVzdCwgMCBpbiB0cm91Z2hcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIChsb3cgKyAoMSAtIGxvdykgKiB0KSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDQgKyBybmQoKSAqIHMgKiAwLjA4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4xODtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxMjAsOTAsNjAsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDEyMCw5MCw2MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogUExBTksgdGlsZTogYm9hcmRzIHJ1bm5pbmcgYWxvbmcgdSB3aXRoIGRhcmsgam9pbnRzIGFuZCBncmFpbiBzdHJlYWtzLCBhIG11bHRpcGxpZXIgb24gYVxuICogIG1lYXN1cmVkIHRpbWJlciBhbGJlZG8uIGBib2FyZHNgIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gcGxhbmtUaWxlKHNpemU6IG51bWJlciwgYm9hcmRzOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYmggPSBzIC8gYm9hcmRzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgYm9hcmRzOyBiKyspIHtcbiAgICAgIGNvbnN0IHRvbmUgPSAwLjgyICsgcm5kKCkgKiAwLjE4O1xuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogdG9uZSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBiaCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsMzAsMjAsMC41NSknOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBNYXRoLm1heCgxLCBzICogMC4wMDYpKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMTQ7IGsrKykge1xuICAgICAgICBjb25zdCB5ID0gYiAqIGJoICsgcm5kKCkgKiBiaCwgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNiksIHggPSBybmQoKSAqIHM7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKDYwLDQ1LDMwLCR7MC4wNSArIHJuZCgpICogMC4xMn0pYDsgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4IC0gcywgeSk7IGN0eC5saW5lVG8oeCAtIHMgKyBsZW4sIHkpOyBjdHgubW92ZVRvKHgsIHkpOyBjdHgubGluZVRvKHggKyBsZW4sIHkpOyBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFJVU1QgdGlsZTogYSBtdWx0aXBsaWVyIG9mIGJsb3RjaGVkIG9yYW5nZS1icm93biBvdmVyIGEgYmFzZSwgZGFyayBjb3JlcyBsaWZ0ZWQgc28gbm90aGluZyBsYW5kc1xuICogIG9uIHRoZSBsdW1hLTU4IGhvbGUgZ2F0ZS4gKi9cbmZ1bmN0aW9uIHJ1c3RUaWxlKHNpemU6IG51bWJlciwgcmF0aW86IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGRlbnNpdHkgPSA5MCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZW5zaXR5OyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wOTtcbiAgICAgIGNvbnN0IGEgPSAwLjE1ICsgcm5kKCkgKiAwLjQ1O1xuICAgICAgY29uc3QgYyA9IHJhdGlvLm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiB2KSk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIEhlaWdodC1rZXllZCBVVnM6IHYgaXMgd29ybGQgSEVJR0hUIG92ZXIgYHNjYWxlYCBtZXRyZXMsIHUgcnVucyBhbG9uZyB0aGUgZG9taW5hbnQgaG9yaXpvbnRhbFxuICogIGF4aXMuIEEgbXVkIHRpbGUgYm91bmQgdGhpcyB3YXkgZGFya2VucyB0aGUgc2lsbHMgYW5kIHN0YXlzIGNsZWFuIG9uIHRoZSByb29mIC0tIGEgcGxhaW4gYm94XG4gKiAgcHJvamVjdGlvbiB3b3VsZCByZXBlYXQgdGhlIHRpbGUncyBkaXJ0eSBiYW5kIGFjcm9zcyB0aGUgcm9vZiBhcyBzdHJpcGVzLiAqL1xuZnVuY3Rpb24gaGVpZ2h0VVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBjb25zdCB1ID0gYXggPj0gYXogPyBwLmdldFooaSkgOiBwLmdldFgoaSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gcC5nZXRZKGkpIC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBPZmZzZXQgYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzIG91dHdhcmQgYnkgYGRgIGFsb25nIHRoZSBhdmVyYWdlZCBlZGdlIG5vcm1hbHMuIFVzZWRcbiAqICB0byBzdGFuZCB0aGUgZ2xhc3MgYmFuZCBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgYm9keSdzIHJha2VkIHdpbmRzY3JlZW4gYW5kIHJlYXIgZ2xhc3NcbiAqICBmYWNlcywgc28gdGhlIHBhbmUgYW5kIHRoZSBib2R5IG5ldmVyIHNoYXJlIGEgcGxhbmUuIFdpbmRpbmc6IGNvdW50ZXItY2xvY2t3aXNlIGluICh6LCB5KS4gKi9cbmZ1bmN0aW9uIG9mZnNldFBvbHkocHRzOiBudW1iZXJbXVtdLCBkOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgbiA9IHB0cy5sZW5ndGgsIG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBwdHNbKGkgKyBuIC0gMSkgJSBuXSwgYiA9IHB0c1tpXSwgYyA9IHB0c1soaSArIDEpICUgbl07XG4gICAgY29uc3QgZTEgPSBbYlswXSAtIGFbMF0sIGJbMV0gLSBhWzFdXSwgZTIgPSBbY1swXSAtIGJbMF0sIGNbMV0gLSBiWzFdXTtcbiAgICBjb25zdCBsMSA9IE1hdGguaHlwb3QoZTFbMF0sIGUxWzFdKSB8fCAxLCBsMiA9IE1hdGguaHlwb3QoZTJbMF0sIGUyWzFdKSB8fCAxO1xuICAgIC8vIG91dHdhcmQgbm9ybWFsIG9mIGEgQ0NXIGVkZ2UgKGR6LCBkeSkgaXMgKGR5LCAtZHopXG4gICAgY29uc3QgbjEgPSBbZTFbMV0gLyBsMSwgLWUxWzBdIC8gbDFdLCBuMiA9IFtlMlsxXSAvIGwyLCAtZTJbMF0gLyBsMl07XG4gICAgbGV0IG54ID0gbjFbMF0gKyBuMlswXSwgbnkgPSBuMVsxXSArIG4yWzFdO1xuICAgIGNvbnN0IG5sID0gTWF0aC5oeXBvdChueCwgbnkpIHx8IDE7IG54IC89IG5sOyBueSAvPSBubDtcbiAgICBjb25zdCBjb3NIYWxmID0gTWF0aC5tYXgoMC4zNSwgbnggKiBuMVswXSArIG55ICogbjFbMV0pO1xuICAgIG91dC5wdXNoKFtiWzBdICsgbnggKiBkIC8gY29zSGFsZiwgYlsxXSArIG55ICogZCAvIGNvc0hhbGZdKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogQSB3aGVlbC1hcmNoIEZMQVJFOiBhIGhhbGYtYW5udWx1cyBpbiB0aGUgKHosIHkpIHBsYW5lLCBleHRydWRlZCBhY3Jvc3MgeDAuLngxIG9uIGJvdGggc2lkZXNcbiAqICBhbmQgdGludGVkLiBTdGFuZHMgcHJvdWQgb2YgdGhlIGJvZHkgc2lkZSBhbmQgaGlkZXMgdGhlIGFyY2gncyBjdXQgZWRnZS4gKi9cbmZ1bmN0aW9uIGZsYXJlKHpjOiBudW1iZXIsIHljOiBudW1iZXIsIHJJbjogbnVtYmVyLCByT3V0OiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGhleDogbnVtYmVyLCBuID0gOSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBjb25zdCB6ID0gemMgKyBNYXRoLmNvcyhhKSAqIHJPdXQsIHkgPSB5YyArIE1hdGguc2luKGEpICogck91dDsgaWYgKGkgPT09IDApIHNoYXBlLm1vdmVUbyh6LCB5KTsgZWxzZSBzaGFwZS5saW5lVG8oeiwgeSk7IH1cbiAgZm9yIChsZXQgaSA9IG47IGkgPj0gMDsgaS0tKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBzaGFwZS5saW5lVG8oemMgKyBNYXRoLmNvcyhhKSAqIHJJbiwgeWMgKyBNYXRoLnNpbihhKSAqIHJJbik7IH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IG1rID0gKHN4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeDEgLSB4MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgZy50cmFuc2xhdGUoeDEsIDAsIDApOyBpZiAoc3ggPCAwKSBnLnNjYWxlKC0xLCAxLCAxKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiB0aW50R2VvKGcsIGhleCk7XG4gIH07XG4gIGNvbnN0IGwgPSBtaygtMSksIHIgPSBtaygxKTtcbiAgLy8gYSBuZWdhdGl2ZSBzY2FsZSBmbGlwcyB0aGUgd2luZGluZzsgcmVzdG9yZSBpdCBzbyB0aGUgZmxhcmUgaXMgbm90IGluc2lkZSBvdXRcbiAgY29uc3QgaWR4ID0gbC5nZXRJbmRleCgpOyBpZiAoaWR4KSB7IGNvbnN0IGEgPSBpZHguYXJyYXkgYXMgYW55OyBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpICs9IDMpIHsgY29uc3QgdCA9IGFbaSArIDFdOyBhW2kgKyAxXSA9IGFbaSArIDJdOyBhW2kgKyAyXSA9IHQ7IH0gaWR4Lm5lZWRzVXBkYXRlID0gdHJ1ZTsgfVxuICBlbHNlIHsgY29uc3QgcCA9IGwuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpOyBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkgKz0gMykgeyBjb25zdCB4MV8gPSBwLmdldFgoaSArIDEpLCB5MV8gPSBwLmdldFkoaSArIDEpLCB6MV8gPSBwLmdldFooaSArIDEpOyBwLnNldFhZWihpICsgMSwgcC5nZXRYKGkgKyAyKSwgcC5nZXRZKGkgKyAyKSwgcC5nZXRaKGkgKyAyKSk7IHAuc2V0WFlaKGkgKyAyLCB4MV8sIHkxXywgejFfKTsgfSB9XG4gIGwuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhbbCwgcl0pO1xufVxuXG4vKiogQmluZCBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHRvIGEgbWF0ZXJpYWwgYXMgbWFwIChhbmQgYnVtcCksIGxlYXZpbmcgdGhlIHRleHR1cmVsZXNzXG4gKiAgZGVjbGFyYXRpb24gaW50YWN0OiBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLCB0aGUgbWVhc3VyZWQgY29sb3VyIHN0YXlzIHRoZVxuICogIG11bHRpcGxpY2FuZCwgYW5kIHRoZSB3aG9sZSB0aGluZyBjb3N0cyBvbmUgY2FudmFzLiAqL1xuZnVuY3Rpb24gYmluZFRpbGUobWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCwgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCwgYnVtcCA9IDApOiB2b2lkIHtcbiAgaWYgKCF0ZXgpIHJldHVybjtcbiAgbWF0Lm1hcCA9IHRleDtcbiAgaWYgKGJ1bXAgPiAwKSB7IG1hdC5idW1wTWFwID0gdGV4OyBtYXQuYnVtcFNjYWxlID0gYnVtcDsgfVxuICBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmZW5jZSBoZWxwZXJzICovXG5cbi8qKiBQYW5lbCBVVnM6IHUgYWxvbmcgd29ybGQgWCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB2IHdvcmxkIEhFSUdIVCBvdmVyIHRoZSBzYW1lLCByZWdhcmRsZXNzIG9mIHRoZVxuICogIGZhY2Ugbm9ybWFsLiBPbiBhIHRoaW4gc2xhYiB0aGlzIG1lYW5zIHRoZSBmcm9udCBhbmQgYmFjayBmYWNlcyBzaGFyZSB0aGUgc2FtZSB0aWxlIHBsYWNlbWVudFxuICogIGFuZCB0aGUgZWRnZXMgdGFrZSBhIHNsaXZlciBvZiBpdDsgYSBncmltZSB3YXNoIHRoYXQga2V5cyBvbiB2IHRoZW4gbGFuZHMgYXQgdGhlIHNhbWUgaGVpZ2h0IG9uXG4gKiAgZXZlcnkgZmFjZSwgd2hpY2ggaXMgd2hhdCByYWluIGFuZCBhbGdhZSBkby4gKi9cbmZ1bmN0aW9uIHBhbmVsVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlciwgcm90ID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICAvLyBgcm90YCBzd2FwcyB0aGUgYXhlcyBzbyBhIHRpbGUgb2YgVkVSVElDQUwgc3RyaXBzIHJlYWRzIGhvcml6b250YWwgLS0gdGhlIHdvdmVuIGJhbmRzIG9mIGFcbiAgLy8gYmFtYm9vIHBhbmVsIGFnYWluc3QgaXRzIHZlcnRpY2FsIG11bGxpb25zLCBvbmUgdGlsZSwgb25lIG1hdGVyaWFsLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHUgPSByb3QgPyBwLmdldFkoaSkgOiBwLmdldFgoaSksIHYgPSByb3QgPyBwLmdldFgoaSkgOiBwLmdldFkoaSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQSBzcXVhcmUgcHlyYW1pZCBTUElLRTogYmFzZSB3IHggdyBhdCBgYXRgLCBhcGV4IGggYWJvdmUuIEEgcGlja2V0J3Mgc3BlYXIgcG9pbnQsIGEgcGllciBjYXAuICovXG5mdW5jdGlvbiBzcGlrZShhdDogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkNvbmVHZW9tZXRyeSh3IC8gTWF0aC5TUVJUMiwgaCwgNCwgMSwgZmFsc2UpO1xuICBnLnJvdGF0ZVkoTWF0aC5QSSAvIDQpO1xuICBnLnRyYW5zbGF0ZShhdFswXSwgYXRbMV0gKyBoIC8gMiwgYXRbMl0pO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEdSSU1FIHRpbGU6IGEgbXVsdGlwbGllciBvZiB3aGl0ZSB3aXRoIChhKSBhIGRhcmsgd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsXG4gKiAoYikgdmVydGljYWwgcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcCwgKGMpIHNvZnQgZGFyayBibG90Y2hlcywgKGQpIG9wdGlvbmFsIGdyZWVuIG1vc3MvYWxnYWVcbiAqIGJsb2JzIGNvbmNlbnRyYXRlZCBpbiB0aGUgYm90dG9tIGJhbmQsIGFuZCAoZSkgZmluZSBncmFpbi4gRXZlcnkgY29sb3VyIGlzIGEgZnJhY3Rpb24gb2YgdGhlXG4gKiBtYXRlcmlhbCdzIG1lYXN1cmVkIGFsYmVkbywgYW5kIHRoZSBkYXJrZXN0IGNvcmUgaXMgY2xhbXBlZCBzbyBub3RoaW5nIG9uIGEgd2hpdGUgb3IgY3JlYW1cbiAqIHN1cmZhY2UgZHJvcHMgdG93YXJkIHRoZSBob2xlIGdhdGUncyBsdW1hIDU4LlxuICovXG5mdW5jdGlvbiBncmltZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3Qgd2FzaCA9IG8ud2FzaCA/PyBbMC42MiwgMC42MiwgMC41OF0sIHdhc2hBID0gby53YXNoQWxwaGEgPz8gMC43LCBjb3YgPSBvLmNvdmVyYWdlID8/IDAuMztcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgLy8gcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAyNik7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMiwgbGVuID0gcyAqICgwLjE1ICsgcm5kKCkgKiAwLjYpLCBhID0gMC4wNSArIHJuZCgpICogMC4xMjtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgY3R4LmZpbGxSZWN0KHgsIDAsIHcsIGxlbik7IGN0eC5maWxsUmVjdCh4IC0gcywgMCwgdywgbGVuKTtcbiAgICB9XG4gICAgLy8gZ3JvdW5kIHdhc2hcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdikpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBfSlgKTsgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQSAqIDAuNDV9KWApOyBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGJsb3RjaGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ibG90Y2hlcyA/PyA0MCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMS42KSAqIHMsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNiwgYSA9IDAuMDggKyBybmQoKSAqIDAuMztcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIG1vc3MgLyBhbGdhZSBpbiB0aGUgYm90dG9tIGJhbmQ6IGNsdXN0ZXJlZCBzcGVja3MsIGJyaWdodGVyLXRoYW4td2FzaCBncmVlblxuICAgIGlmIChvLm1vc3MpIHtcbiAgICAgIGNvbnN0IG0gPSBvLm1vc3MsIGJhbmQgPSBvLm1vc3NCYW5kID8/IDAuMjI7XG4gICAgICAvLyBhIGZhaW50IGdyZWVuIHdhc2ggb3ZlciB0aGUgd2hvbGUgYmFuZCBmaXJzdCwgc28gdGhlIGNhcnBldHMgc2l0IGluIGRhbXAgZ3JvdW5kIHJhdGhlciB0aGFuXG4gICAgICAvLyBhcyBpc29sYXRlZCBkb3RzIG9uIGNsZWFuIHBhaW50XG4gICAgICBjb25zdCBtZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBiYW5kICogMS4zKSk7XG4gICAgICBtZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobSl9LCR7by5tb3NzV2FzaCA/PyAwLjM1fSlgKTsgbWcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKG0pfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG1nOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLm1vc3NDbHVzdGVycyA/PyAxNCk7IGsrKykge1xuICAgICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuNikgKiBzICogYmFuZCwgY3IgPSBzICogKDAuMDE1ICsgcm5kKCkgKiAwLjA0KTtcbiAgICAgICAgLy8gdGhlIGNhcnBldDogYSBzb2Z0IGJsb2IsIHRoZW4gc3BlY2tzIG92ZXIgaXQgZm9yIHRoZSB0dWZ0ZWQgZWRnZVxuICAgICAgICBjb25zdCBjZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3ksIDAsIGN4LCBjeSwgY3IpO1xuICAgICAgICBjZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobSl9LDAuNylgKTsgY2cuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2IobSl9LDAuMzUpYCk7IGNnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihtKX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNnO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCArIGR4LCBjeSwgY3IsIGNyICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQgKiAwLjYsIHIgPSAxICsgcm5kKCkgKiAzO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihtKX0sJHswLjM1ICsgcm5kKCkgKiAwLjV9KWA7XG4gICAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGdyYWluXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHYgPSAyMDAgKyBNYXRoLnJvdW5kKHJuZCgpICogNTUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMTIpYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEuNSwgMS41KTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogQ0hBSU4tTElOSyB0aWxlOiBhIGRpYW1vbmQgd2lyZSBsYXR0aWNlIGRyYXduIG9wYXF1ZSBvdmVyIGEgVFJBTlNQQVJFTlQgZ3JvdW5kLCBib3VuZCBhcyBtYXBcbiAqICBvbiBhbiBhbHBoYS10ZXN0ZWQgbWF0ZXJpYWwgc28gdGhlIGNlbGxzIGFyZSBvcGVuLiBPbmUgdGlsZSBpcyBvbmUgZGlhbW9uZCBjZWxsOyB0aGUgcGFuZSdzXG4gKiAgVVZzIHJlcGVhdCBpdCBhdCB0aGUgcmVhbCBtZXNoIHBpdGNoLiBgd2lyZWAgaXMgdGhlIHdpcmUgd2lkdGggYXMgYSBmcmFjdGlvbiBvZiB0aGUgY2VsbC4gKi9cbmZ1bmN0aW9uIGNoYWlubGlua1RpbGUoc2l6ZTogbnVtYmVyLCB3aXJlOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5saW5lV2lkdGggPSBNYXRoLm1heCgxLjUsIHdpcmUgKiBzKTtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgY29uc3QgdiA9IDE1MCArIE1hdGgucm91bmQocm5kKCkgKiAzMCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYigke3Z9LCR7diArIDJ9LCR7diArIDR9KWA7XG4gICAgLy8gdHdvIGRpYWdvbmFscyB0aHJvdWdoIHRoZSB0aWxlLCBvZmZzZXQgc28gdGhlIHdyYXAgbWFrZXMgYSBjb250aW51b3VzIGRpYW1vbmQgbGF0dGljZVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDApOyBjdHgubGluZVRvKHMsIHMpO1xuICAgIGN0eC5tb3ZlVG8ocywgMCk7IGN0eC5saW5lVG8oMCwgcyk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIHRoZSBrbnVja2xlIHdoZXJlIHdpcmVzIHR3aXN0IHJvdW5kIGVhY2ggb3RoZXIsIGF0IHRoZSB0d28gY3Jvc3NpbmdzIG9uIHRoZSB0aWxlIGVkZ2VzXG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2IC0gMjB9LCR7diAtIDE4fSwke3YgLSAxNn0pYDtcbiAgICBmb3IgKGNvbnN0IFt4LCB5XSBvZiBbWzAsIDBdLCBbcywgMF0sIFswLCBzXSwgW3MsIHNdLCBbcyAvIDIsIHMgLyAyXV0pIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCBjdHgubGluZVdpZHRoICogMC45LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIEJBTUJPTyBTVFJJUCB0aWxlOiB2ZXJ0aWNhbCBzcGxpdC1iYW1ib28gc3RyaXBzIHdpdGggcGFsZSBjdWxtIGZhY2VzLCBkYXJrIGpvaW50cyBiZXR3ZWVuIHRoZW1cbiAqICBhbmQgYSBub2RlIGxpbmUgb3IgdHdvIC0tIGEgbXVsdGlwbGllciBvbiB0aGUgbWVhc3VyZWQgc2lsdmVyLWdyZXkuICovXG5mdW5jdGlvbiBiYW1ib29UaWxlKHNpemU6IG51bWJlciwgc3RyaXBzOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3Qgc3cgPSBzIC8gc3RyaXBzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgc3RyaXBzOyBiKyspIHtcbiAgICAgIGNvbnN0IHRvbmUgPSAwLjgwICsgcm5kKCkgKiAwLjIsIHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3YgLSAyfSwke3YgLSA2fSlgOyBjdHguZmlsbFJlY3QoYiAqIHN3LCAwLCBzdywgcyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTAsNDIsMzQsMC42KSc7IGN0eC5maWxsUmVjdChiICogc3csIDAsIE1hdGgubWF4KDEsIHMgKiAwLjAwNiksIHMpO1xuICAgICAgLy8gYSBoaWdobGlnaHQgZG93biB0aGUgY3VsbSdzIHJvdW5kXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xMCknOyBjdHguZmlsbFJlY3QoYiAqIHN3ICsgc3cgKiAwLjM1LCAwLCBzdyAqIDAuMjUsIHMpO1xuICAgICAgLy8gbm9kZSByaW5nc1xuICAgICAgY29uc3QgbiA9IDEgKyBNYXRoLmZsb29yKHJuZCgpICogMik7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykgeyBjb25zdCB5ID0gcm5kKCkgKiBzOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNzAsNjAsNDgsMC40NSknOyBjdHguZmlsbFJlY3QoYiAqIHN3LCB5LCBzdywgTWF0aC5tYXgoMSwgcyAqIDAuMDA4KSk7IH1cbiAgICAgIC8vIGZpbmUgZ3JhaW4gbGluZXNcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNjsgaysrKSB7IGNvbnN0IHggPSBiICogc3cgKyBybmQoKSAqIHN3OyBjdHguZmlsbFN0eWxlID0gYHJnYmEoODAsNzAsNTgsJHswLjA1ICsgcm5kKCkgKiAwLjF9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTsgfVxuICAgIH1cbiAgICAvLyBtb3VsZCBzcGVja2xlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDA7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzAsMjgsMjQsMC4xOCknOyBjdHguZmlsbFJlY3QoeCwgeSwgMSArIHJuZCgpICogMiwgMSArIHJuZCgpICogMik7IH1cbiAgfSk7XG59XG5cbi8qKiBQT1NURVIgdGlsZSBmb3IgYSBob2FyZGluZzogdG9ybiBwYXN0ZS11cCBzaGVldHMgYW5kIGEgc3ByYXkgc3RlbmNpbCBvdmVyIGEgVFJBTlNQQVJFTlQgZ3JvdW5kLFxuICogIGJvdW5kIG9uIGFuIGFscGhhLXRlc3RlZCBwYW5lIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBzaGVldC4gYGxpbmVzYCBhcmUgdGhlIHN0ZW5jaWxcbiAqICBzdHJpbmdzOyBhIHByaW50ZWQgZ3JhcGhpYyBpcyBleGFjdGx5IHRoZSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgY2FzZS4gKi9cbmZ1bmN0aW9uIHBvc3RlclRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIGxpbmVzOiBzdHJpbmdbXSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIHBhc3RlLXVwczogb3ZlcmxhcHBpbmcgb2ZmLXdoaXRlIHJlY3RhbmdsZXMgd2l0aCB0b3JuIGVkZ2VzIGFuZCBmYWludCBwcmludCBsaW5lc1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjMwKSwgeSA9IHMgKiAoMC4xNSArIHJuZCgpICogMC40NSksIHcgPSBzICogKDAuMTQgKyBybmQoKSAqIDAuMTYpLCBoID0gcyAqICgwLjE4ICsgcm5kKCkgKiAwLjIyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgkezIyNSArIE1hdGgucm91bmQocm5kKCkgKiAyMCl9LCR7MjIyICsgTWF0aC5yb3VuZChybmQoKSAqIDE4KX0sJHsyMTAgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwwLjk2KWA7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICBjb25zdCBuID0gOTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgY3R4LmxpbmVUbyh4ICsgdyAqIGkgLyBuLCB5ICsgKHJuZCgpIC0gMC41KSAqIGggKiAwLjA4KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgY3R4LmxpbmVUbyh4ICsgdyArIChybmQoKSAtIDAuNSkgKiB3ICogMC4wOCwgeSArIGggKiBpIC8gbik7XG4gICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSBjdHgubGluZVRvKHggKyB3ICogaSAvIG4sIHkgKyBoICsgKHJuZCgpIC0gMC41KSAqIGggKiAwLjEyKTtcbiAgICAgIGZvciAobGV0IGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIGN0eC5saW5lVG8oeCArIChybmQoKSAtIDAuNSkgKiB3ICogMC4wOCwgeSArIGggKiBpIC8gbik7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsNDAsNDUsMC41NSknO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIGN0eC5maWxsUmVjdCh4ICsgdyAqIDAuMSwgeSArIGggKiAoMC4yICsgaSAqIDAuMSksIHcgKiAoMC4zICsgcm5kKCkgKiAwLjUpLCBNYXRoLm1heCgxLCBzICogMC4wMDYpKTtcbiAgICB9XG4gICAgLy8gc3ByYXkgc3RlbmNpbCwgc2xpZ2h0bHkgc29mdCBhbmQgdW5ldmVuXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDIwLDIyLDAuODgpJztcbiAgICBjdHguZm9udCA9IGBib2xkICR7TWF0aC5yb3VuZChzICogMC4wNyl9cHggc2Fucy1zZXJpZmA7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBzICogMC40MCwgeSA9IHMgKiAoMC40NCArIGkgKiAwLjEzKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMzsgaysrKSB7IGN0eC5nbG9iYWxBbHBoYSA9IDAuNjsgY3R4LmZpbGxUZXh0KGxpbmVzW2ldLCB4ICsgKHJuZCgpIC0gMC41KSAqIDMsIHkgKyAocm5kKCkgLSAwLjUpICogMyk7IH1cbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFNUUklQRSB0aWxlOiBhbHRlcm5hdGluZyBjb2xvdXIgYmFuZHMgYWxvbmcgdSAoYW4gYXduaW5nKSwgd2l0aCBhIHNvZnQgZ3JpbWUgbXVsdGlwbHkgc28gdGhlIGNsb3RoXG4gKiAgcmVhZHMgd29ybiByYXRoZXIgdGhhbiBwcmludGVkLiBgYWAvYGJgIGFyZSB0aGUgdHdvIGJhbmQgY29sb3VycyBhcyBbcixnLGJdIDAtMS4gQm91bmQgYXMgbWFwIG9uIGFcbiAqICBXSElURSBtYXRlcmlhbCBzbyB0aGUgYmFuZHMgY2FycnkgdGhlIHdob2xlIGFsYmVkby4gKi9cbmZ1bmN0aW9uIHN0cmlwZVRpbGUoc2l6ZTogbnVtYmVyLCBiYW5kczogbnVtYmVyLCBhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX0pYDtcbiAgICBjb25zdCB3ID0gcyAvIGJhbmRzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFuZHM7IGkrKykgeyBjdHguZmlsbFN0eWxlID0gcmdiKGkgJSAyID8gYiA6IGEpOyBjdHguZmlsbFJlY3QoTWF0aC5mbG9vcihpICogdyksIDAsIE1hdGguY2VpbCh3KSArIDEsIHMpOyB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gNCArIHJuZCgpICogcyAqIDAuMDgsIGFsID0gMC4wNiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDE1MCwxNDAsMTI1LCR7YWx9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTUwLDE0MCwxMjUsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjAwOyBpKyspIHsgY29uc3QgdiA9IDIwMCArIE1hdGgucm91bmQocm5kKCkgKiA1NSk7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjEwKWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMS41LCAxLjUpOyB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICAvLyBBIExJVCBzdXJmYWNlIChhIGZsdW9yZXNjZW50IHR1YmUsIGEgY2hhcmNvYWwgZW1iZXIgYmVkKTogZW1pc3NpdmUgY2FycmllcyB0aGUgZ2xvdyB3aXRob3V0IGFcbiAgICAvLyBsaWdodCBzb3VyY2UsIHdoaWNoIHRoZSBraXQncyBwcm9wcyBuZXZlciBvd24gLS0gdGhlIGhvc3Qgc2NlbmUgb3ducyBsaWdodGluZy5cbiAgICBpZiAocy5lbWlzc2l2ZSAhPT0gdW5kZWZpbmVkKSB7IG0uZW1pc3NpdmUgPSBuZXcgVEhSRUUuQ29sb3Iocy5lbWlzc2l2ZSk7IG0uZW1pc3NpdmVJbnRlbnNpdHkgPSBzLmVtaXNzaXZlSW50ZW5zaXR5ID8/IDE7IH1cbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIC8vIEFuIEFMUEhBLUNVVCBwYW5lIChjaGFpbi1saW5rIG1lc2gpOiB0aGUgY2FudmFzIHRpbGUgY2FycmllcyB0aGUgY3V0LW91dCBpbiBpdHMgYWxwaGEgY2hhbm5lbCBhbmRcbiAgICAvLyBhbHBoYVRlc3QgZGlzY2FyZHMgdGhlIG9wZW4gY2VsbHMsIHNvIHRoZSB3aXJlIHN0YXlzIG9wYXF1ZSBhbmQgc29ydHMgbGlrZSBhIHNvbGlkLlxuICAgIGlmIChzLmFscGhhVGVzdCAhPT0gdW5kZWZpbmVkKSB7IG0uYWxwaGFUZXN0ID0gcy5hbHBoYVRlc3Q7IG0udHJhbnNwYXJlbnQgPSBmYWxzZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXYXRlckZpbGxlZFBsYXN0aWNCYXJyaWVyTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdXYXRlci1GaWxsZWQgUGxhc3RpYyBCYXJyaWVyJztcblxuICBjb25zdCBtYXRlcmlhbHMgPSBidWlsZE1hdGVyaWFscyhvcHRpb25zKTtcbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0ge307XG4gIGNvbnN0IHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIGNvbnN0IGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPiA9IHt9O1xuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICAvKipcbiAgICogQSBtYXRlcmlhbCB3aXRoIGB2ZXJ0ZXhDb2xvcnNgIHJlYWRzIGEgYGNvbG9yYCBhdHRyaWJ1dGUgb3V0IG9mIEVWRVJZIGdlb21ldHJ5IGJvdW5kIHRvIGl0LCBhbmRcbiAgICogYSBnZW9tZXRyeSB0aGF0IGhhcyBub25lIGhhbmRzIHRoZSBzaGFkZXIgYW4gdW5kZWZpbmVkIGF0dHJpYnV0ZSAtLSB3aGljaCBjb21lcyBiYWNrIGFzXG4gICAqICgwLCAwLCAwKSBhbmQgcmVuZGVycyB0aGUgbWVzaCBCTEFDSy4gVGhhdCBpcyBub3QgYSBoeXBvdGhldGljYWw6IHRoZSB1Ym9zb3QncyB3YWxsIGJvZHkgYW5kXG4gICAqIGl0cyBlaWdodCBib3VuZGFyeSBzdG9uZXMgc2hpcHBlZCBhcyBibGFjayBzaWxob3VldHRlcyBmcm9tIG9uZSB0aW50ZWQgcGxhdGZvcm0gc2hhcmluZyB0aGVpclxuICAgKiBzdG9uZSBtYXRlcmlhbCwgYW5kIHRoZSBmYWlsdXJlIGlzIHNpbGVudCBiZWNhdXNlIHRoZSB0aW50ZWQgY29tcG9uZW50IGl0c2VsZiBsb29rcyBwZXJmZWN0LlxuICAgKlxuICAgKiBBbiBJbnN0YW5jZWRNZXNoIGhpZGVzIGl0IC0tIGl0IGZhbGxzIGJhY2sgdG8gaW5zdGFuY2VDb2xvciBhbmQgY29tZXMgb3V0IHdoaXRlIC0tIHNvIHRoZSBzYW1lXG4gICAqIG1pc3Rha2Ugb24gdGhlIGNoZWRpJ3MgbmljaGUgZnJhbWVzIHJlbmRlcmVkIGNvcnJlY3RseSBhbmQgdGF1Z2h0IG5vdGhpbmcuIEd1YXJkIGl0IGhlcmUsIG9uY2UsXG4gICAqIGZvciBldmVyeSBnZW9tZXRyeTogbm8gY29sb3IgYXR0cmlidXRlIGFuZCBhIHZlcnRleENvbG9ycyBtYXRlcmlhbCBtZWFucyBmaWxsIHdpdGggd2hpdGUuXG4gICAqL1xuICBmdW5jdGlvbiBndWFyZFZlcnRleENvbG9ycyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKSB7XG4gICAgaWYgKCFtYXQgfHwgIW1hdC52ZXJ0ZXhDb2xvcnMgfHwgZ2VvLmdldEF0dHJpYnV0ZSgnY29sb3InKSkgcmV0dXJuO1xuICAgIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KG4gKiAzKS5maWxsKDEpLCAzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIC8vIHNldENvbG9yQXQgTVVMVElQTElFUyB3aXRoIG1hdGVyaWFsLmNvbG9yLCBzbyBhbiBpbnN0YW5jZWQgbWF0ZXJpYWwgY2FycnlpbmcgcGVyLWluc3RhbmNlXG4gICAgICAvLyB0b25lcyBtdXN0IGJlIHdoaXRlIG9yIGV2ZXJ5IHRvbmUgY29tZXMgb3V0IGRhcmtlbmVkIGJ5IHRoZSBiYXNlLlxuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cbiAgLyoqIEZvdXIgaW5zdGFuY2VzIGF0IDkwLWRlZ3JlZSB5YXcgYWJvdXQgdGhlIGF4aXMgLS0gdGhlIGNvcm5lci9mYWNlIHJlcGV0aXRpb24gdGhhdCBldmVyeVxuICAgKiAgYnVpbGRpbmcgaW4gdGhpcyBzZXQgdXNlcyBmb3IgbmljaGVzLCBmaW5pYWxzLCBib3VuZGFyeSBzdG9uZXMgYW5kIGNvcm5lciBkb21lcy4gKi9cbiAgZnVuY3Rpb24gcXVhZChyYWRpdXM6IG51bWJlciwgeTogbnVtYmVyLCBwaGFzZSA9IDApOiBUSFJFRS5NYXRyaXg0W10ge1xuICAgIHJldHVybiBbMCwgMSwgMiwgM10ubWFwKChpKSA9PiB7XG4gICAgICBjb25zdCBhID0gcGhhc2UgKyBpICogTWF0aC5QSSAvIDI7XG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihhKSAqIHJhZGl1cywgeSwgTWF0aC5jb3MoYSkgKiByYWRpdXMpLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGEpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29tcG9uZW50c1xuICAgKiBFYWNoIGVudHJ5IG9mIENPTkZJRy5nZW9tZXRyeS5jb21wb25lbnRzIGlzIE9ORSBtZXJnZWQgZ2VvbWV0cnkgb24gT05FIG1hdGVyaWFsIC0tIG9uZSBkcmF3XG4gICAqIGNhbGwuIEV2ZXJ5IHBhcnQgaW5zaWRlIGl0IGlzIGEgdGludGVkIGJveCwgdHViZSwgY3lsaW5kZXIsIGxhdGhlIG9yIHBsYW5lOyBjb2xvdXIgZGlmZmVyZW5jZXNcbiAgICogYXJlIHZlcnRleCBjb2xvdXJzLiBgdXZgIHBpY2tzIGhvdyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHJlcGVhdHMgb3ZlciBpdC4gKi9cbiAgZm9yIChjb25zdCBjIG9mIEcuY29tcG9uZW50cyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIChjLmJveGVzID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgYiBvZiBtaXJyb3JYKChjLmJveGVzTWlycm9yZWQgPz8gW10pIGFzIG51bWJlcltdW10pKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgdCBvZiAoYy50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIGZvciAoY29uc3QgY3kgb2YgKGMuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjeS5ydCwgY3kucmIsIGN5LmgsIGN5LnNlZyA/PyAxMik7XG4gICAgICBpZiAoY3kucngpIGcucm90YXRlWChjeS5yeCk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbCBvZiAoYy5sYXRoZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgcnlgIHlhd3MgdGhlIHJldm9sdXRpb246IGEgNC1zZWdtZW50IGxhdGhlIHR1cm5lZCA0NSBkZWdyZWVzIGlzIGEgY2hhbWZlcmVkIFNRVUFSRSBzbGFiIGluIG9uZVxuICAgICAgLy8gZ2VvbWV0cnkgKGEgY29uZSdzIHJ1YmJlciBiYXNlKSwgd2hlcmUgdHdvIHN0YWNrZWQgYm94ZXMgd291bGQgY29zdCB0d28gYW5kIGEgY29wbGFuYXIgcGFpci5cbiAgICAgIGNvbnN0IGcgPSBsYXRoZShsLnB0cywgbC5zZWcgPz8gMTIpOyBpZiAobC5yeSkgZy5yb3RhdGVZKGwucnkpOyBnLnRyYW5zbGF0ZShsLmF0WzBdLCBsLmF0WzFdLCBsLmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGwuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcCBvZiAoYy5wbGFuZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBBIFBBTkU6IGEgc2luZ2xlIHF1YWQgaW4gdGhlIFhZIHBsYW5lIGF0IGRlcHRoIHosIGRvdWJsZS1zaWRlZCBieSBpdHMgbWF0ZXJpYWwuIEl0cyBVVnMgcnVuXG4gICAgICAvLyAwLi4xIGFjcm9zcyB0aGUgcGFuZSBzbyBhbiBhbHBoYS1jdXQgdGlsZSByZXBlYXRzIGByZXBgIHRpbWVzIGFjcm9zcyBhbmQgZG93bi5cbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeShwLncsIHAuaCwgMSwgMSk7XG4gICAgICBnLnRyYW5zbGF0ZShwLmF0WzBdLCBwLmF0WzFdLCBwLmF0WzJdKTtcbiAgICAgIGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiAocC5yZXA/LlswXSA/PyAxKSwgdXYuZ2V0WShpKSAqIChwLnJlcD8uWzFdID8/IDEpKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBwLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGUgb2YgKGMuZXh0cnVkZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBBIHByb2ZpbGUgaW4gdGhlIFhZIHBsYW5lIGV4dHJ1ZGVkIGFsb25nIFogYmV0d2VlbiB6MCBhbmQgejEgLS0gYSBzbGFiIHdpdGggYSBtb3VsZGVkIGVkZ2UsXG4gICAgICAvLyBhIHB5cmFtaWQgY2FwIGFzIGEgc3RlcHBlZCBwcm9maWxlLCBhIHNwZWFyIGZpbmlhbC5cbiAgICAgIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICBzaGFwZS5tb3ZlVG8oZS5wb2x5WzBdWzBdLCBlLnBvbHlbMF1bMV0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBlLnBvbHkubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhlLnBvbHlbaV1bMF0sIGUucG9seVtpXVsxXSk7XG4gICAgICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgICAgIGZvciAoY29uc3QgaCBvZiAoZS5ob2xlcyA/PyBbXSkgYXMgbnVtYmVyW11bXVtdKSB7XG4gICAgICAgIGNvbnN0IGhwID0gbmV3IFRIUkVFLlBhdGgoKTsgaHAubW92ZVRvKGhbMF1bMF0sIGhbMF1bMV0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGgubGVuZ3RoOyBpKyspIGhwLmxpbmVUbyhoW2ldWzBdLCBoW2ldWzFdKTtcbiAgICAgICAgaHAuY2xvc2VQYXRoKCk7IHNoYXBlLmhvbGVzLnB1c2goaHApO1xuICAgICAgfVxuICAgICAgY29uc3QgZyA9IGV4dHJ1ZGVBbG9uZ1ooc2hhcGUsIGUuejAsIGUuejEpO1xuICAgICAgaWYgKGUucngpIGcucm90YXRlWChlLnJ4KTtcbiAgICAgIGlmIChlLnJ5KSBnLnJvdGF0ZVkoZS5yeSk7XG4gICAgICBpZiAoZS5hdCkgZy50cmFuc2xhdGUoZS5hdFswXSwgZS5hdFsxXSwgZS5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgZS5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgbGV0IGcgPSBtZXJnZUdlb3MoZ3MpO1xuICAgIGlmIChjLnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdoZWlnaHQnKSBnID0gaGVpZ2h0VVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAncGFuZWwnKSBnID0gcGFuZWxVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdwYW5lbC1yb3QnKSBnID0gcGFuZWxVVihnLCBjLnV2U2NhbGUgPz8gMSwgdHJ1ZSk7XG4gICAgYWRkKGMuaWQsIGMubmFtZSwgZywgYy5tYXRlcmlhbCk7XG4gICAgaWYgKGMuY29sbGlkZXIpIGNvbGxpZGVyc1tjLmlkXSA9IGMuY29sbGlkZXI7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlcGV0aXRpb24gc3lzdGVtc1xuICAgKiBQaWNrZXRzLCBzbGF0cywgbGF0dGljZSBzdHJpcHM6IG9uZSBnZW9tZXRyeSwgb25lIEluc3RhbmNlZE1lc2gsIG9uZSBkcmF3IGNhbGwuICovXG4gIGZvciAoY29uc3QgciBvZiAoRy5pbnN0YW5jZWQgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgKHIuYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIChyLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgZm9yIChjb25zdCBjeSBvZiAoci5jeWxzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGN5LnJ0LCBjeS5yYiwgY3kuaCwgY3kuc2VnID8/IDEyKTtcbiAgICAgIGlmIChjeS5yeCkgZy5yb3RhdGVYKGN5LnJ4KTsgaWYgKGN5LnJ6KSBnLnJvdGF0ZVooY3kucnopO1xuICAgICAgZy50cmFuc2xhdGUoY3kuYXRbMF0sIGN5LmF0WzFdLCBjeS5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBjeS5oZXgpKTtcbiAgICB9XG4gICAgbGV0IGcgPSBtZXJnZUdlb3MoZ3MpO1xuICAgIGlmIChyLnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCByLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKHIudXYgPT09ICdoZWlnaHQnKSBnID0gaGVpZ2h0VVYoZywgci51dlNjYWxlID8/IDEpO1xuICAgIGNvbnN0IG1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgcCBvZiByLnBsYWNlbWVudHMgYXMgbnVtYmVyW11bXSkge1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKG5ldyBUSFJFRS5FdWxlcihwWzNdID8/IDAsIHBbNF0gPz8gMCwgcFs1XSA/PyAwKSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKSk7XG4gICAgfVxuICAgIGFkZEluc3Qoci5pZCwgci5uYW1lLCBnLCByLm1hdGVyaWFsLCBtYXRzLCByLmNvbG9ycyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhc2VzICovXG4gIGZvciAoY29uc3QgdCBvZiAoQ09ORklHLnRpbGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG1hdCA9IG1hdGVyaWFsc1t0Lm1hdGVyaWFsXTtcbiAgICBpZiAoIW1hdCkgY29udGludWU7XG4gICAgLy8gQSBCQUtFRCBncmFwaGljIChhIHByaW50ZWQgc2lnbiBmYWNlKTogb25lIFdlYlAgZGF0YSBVUkkgY29tcG9zZWQgb2ZmbGluZSBmcm9tIHRoZSBwbGF0ZSdzIG93blxuICAgIC8vIHByaW50ZWQgcmVnaW9uIGFuZCB2ZWN0b3IgbWFya3MsIGxvYWRlZCB0aHJvdWdoIFRleHR1cmVMb2FkZXIuIEFzc2lnbmVkIHN5bmNocm9ub3VzbHkgc28gdGhlXG4gICAgLy8gaGFybmVzcyB3YWl0cyBvbiB0aGUgZGVjb2RlLiBJdCBiZWF0cyBmaWxsVGV4dCwgd2hpY2ggZHJhd3MgYSBkaWZmZXJlbnQgd29yZG1hcmsgcGVyIG1hY2hpbmUuXG4gICAgaWYgKHQua2luZCA9PT0gJ2Jha2VkJykge1xuICAgICAgLy8gVW5kZXIgcGxhaW4gTm9kZSAodGhlIGNvcGxhbmFyIGNoZWNrLCB0aGUgcnVudGltZSBwcm9iZSkgdGhlcmUgaXMgbm8gZG9jdW1lbnQgZm9yIEltYWdlTG9hZGVyOlxuICAgICAgLy8ga2VlcCB0aGUgd2hpdGUgZmFsbGJhY2sgcmF0aGVyIHRoYW4gdGhyb3csIGV4YWN0bHkgYXMgdGhlIHJldGFpbCBnbGF6aW5nIGRvZXMuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgY29udGludWU7XG4gICAgICBjb25zdCBiYWtlZCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCh0LnVyaSk7XG4gICAgICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG4gICAgICBpZiAoc3JnYikgYmFrZWQuY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgICBiYWtlZC5hbmlzb3Ryb3B5ID0gNDtcbiAgICAgIG1hdC5tYXAgPSBiYWtlZDsgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBsZXQgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKHQua2luZCA9PT0gJ211ZCcpIHRleCA9IG11ZFRpbGUodC5zaXplID8/IDUxMiwgdC5iYXNlLCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMzKTtcbiAgICBpZiAodC5raW5kID09PSAnZHVzdCcpIHRleCA9IGR1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuZHVzdCwgdC5zZWVkID8/IDEsIHQuY292ZXJhZ2UgPz8gMC4zMCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BsYW5rJykgdGV4ID0gcGxhbmtUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYm9hcmRzID8/IDYsIHQuc2VlZCA/PyA1KTtcbiAgICBpZiAodC5raW5kID09PSAncnVzdCcpIHRleCA9IHJ1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQucmF0aW8sIHQuc2VlZCA/PyA3LCB0LmRlbnNpdHkgPz8gOTApO1xuICAgIGlmICh0LmtpbmQgPT09ICdjb3JydWdhdGlvbicpIHRleCA9IGNvcnJ1Z2F0aW9uVGlsZSh0LnNpemUgPz8gNTEyLCB0LnBpdGNoID8/IDEyLCB0LmxvdyA/PyAwLjcsIHQuc2VlZCA/PyAzKTtcbiAgICBpZiAodC5raW5kID09PSAnZ3JpbWUnKSB0ZXggPSBncmltZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDExLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY2hhaW5saW5rJykgdGV4ID0gY2hhaW5saW5rVGlsZSh0LnNpemUgPz8gMjU2LCB0LndpcmUgPz8gMC4wOSwgdC5zZWVkID8/IDQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdiYW1ib28nKSB0ZXggPSBiYW1ib29UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc3RyaXBzID8/IDEwLCB0LnNlZWQgPz8gNik7XG4gICAgaWYgKHQua2luZCA9PT0gJ3N0cmlwZXMnKSB0ZXggPSBzdHJpcGVUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuYmFuZHMgPz8gOCwgdC5hLCB0LmIsIHQuc2VlZCA/PyA5KTtcbiAgICBpZiAodC5raW5kID09PSAncG9zdGVyJykgdGV4ID0gcG9zdGVyVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gOCwgdC5saW5lcyA/PyBbXSk7XG4gICAgYmluZFRpbGUobWF0LCB0ZXgsIHQuYnVtcCA/PyAwKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVdhdGVyRmlsbGVkUGxhc3RpY0JhcnJpZXJNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IHRoZSByb290LCBwbHVzIE9ORSBQRVIgV0hFRUwgKGFuZCBhbnkgb3RoZXIgbWVjaGFuaXNtIENPTkZJRy5waXZvdHMgbmFtZXMgLS0gYVxuICAgIC8vIHN0ZWVyaW5nIGhlYWQsIGEgY2Fub3B5IHN0YXkpLiBBIHZlaGljbGUncyB3aGVlbHMgZ2VudWluZWx5IHR1cm4sIHNvIGVhY2ggb25lIGlzIGEgcHJvbWlzZVxuICAgIC8vIGtlcHQ6IHRoZSBwaXZvdCBzaXRzIGF0IHRoZSBodWIsIGl0cyBheGlzIGlzIHRoZSBheGxlLCBhbmQgYGluc3RhbmNlYCBuYW1lcyB3aGljaCBpbnN0YW5jZVxuICAgIC8vIG9mIHRoZSB3aGVlbCBJbnN0YW5jZWRNZXNoIGl0IGRyaXZlcy4gTm90aGluZyBlbHNlIG9uIHRoZSBwcm9wIG1vdmVzIC0tIHRoZSBkb29ycyBhcmUgcGFydFxuICAgIC8vIG9mIHRoZSBib2R5IHNoZWxsIC0tIHNvIG5vdGhpbmcgZWxzZSBnZXRzIGFuIGF4aXMuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG4gICAgZm9yIChjb25zdCBwdiBvZiAoQ09ORklHLnBpdm90cyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IG8gPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgIG8ubmFtZSA9IHB2Lm5hbWU7XG4gICAgICBvLnBvc2l0aW9uLnNldChwdi5wb3NpdGlvblswXSwgcHYucG9zaXRpb25bMV0sIHB2LnBvc2l0aW9uWzJdKTtcbiAgICAgIG8udXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgICAgYW5pbWF0aW9uUm9sZTogJ2NoaWxkJyxcbiAgICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IHB2LnBvc2l0aW9uLCBheGlzOiBwdi5heGlzLCBuYW1lOiBwdi5uYW1lLFxuICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHB2LmNvbXBvbmVudCwgaW5zdGFuY2U6IHB2Lmluc3RhbmNlID8/IG51bGwsIG5vdGVzOiBwdi5ub3RlID8/ICcnIH0sXG4gICAgICB9O1xuICAgICAgcm9vdC5hZGQobyk7XG4gICAgICBwaXZvdHMucHVzaChvKTtcbiAgICB9XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FIHVubGVzcyBDT05GSUcuc29ja2V0cyBuYW1lcyBvbmUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gYSB2ZWhpY2xlIGluIHRoaXMga2l0XG4gICAgLy8gYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQXNDdkIsSUFBTSxTQUFTO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsSUFDWDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsY0FBYztBQUFBLE1BQ1o7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLFlBQVk7QUFBQSxVQUNWLFNBQVM7QUFBQSxVQUNULGVBQWU7QUFBQSxZQUNiO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxlQUFlO0FBQUEsWUFDYjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBLFlBQVk7QUFBQSxVQUNWO0FBQUEsWUFDRSxRQUFRO0FBQUEsY0FDTjtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFB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
