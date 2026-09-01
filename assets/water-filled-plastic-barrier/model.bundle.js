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

// assets/water-filled-plastic-barrier/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
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
      "base": [
        1,
        1,
        0.719
      ],
      "wash": [
        0.6,
        0.67,
        1
      ],
      "washAlpha": 0.92,
      "coverage": 0.34,
      "streaks": 16,
      "blotches": 64,
      "rubs": 26,
      "rub": [
        0.26,
        0.24,
        0.3
      ]
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
            "hex": 14246464
          }
        ],
        "boxes": [
          [
            14246464,
            -0.555,
            0.7200000000000001,
            0,
            0.09,
            0.14,
            0.13
          ],
          [
            14246464,
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
            14246464,
            -0.555,
            0.07,
            0,
            0.09,
            0.14,
            0.34
          ],
          [
            14246464,
            0.555,
            0.07,
            0,
            0.09,
            0.14,
            0.34
          ],
          [
            14246464,
            0,
            0.808,
            0,
            0.3,
            0.016,
            0.16
          ],
          [
            12697343,
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
            12697343,
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
            12697343,
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
            12697343,
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
function splitCorners(pts, minDeg = 70, eps = 8e-4) {
  const out = [];
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
function lathe(pts, seg, yOffset = 0, sharp = true, weldSeam = false) {
  const v = (sharp ? splitCorners(pts) : pts).map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
  if (weldSeam) {
    const n = g.getAttribute("normal");
    const rows = n.count / (seg + 1);
    for (let r = 0; r < rows; r++) {
      const a = r, b = seg * rows + r;
      const x = n.getX(a) + n.getX(b), y = n.getY(a) + n.getY(b), z = n.getZ(a) + n.getZ(b);
      const l = Math.hypot(x, y, z) || 1;
      n.setXYZ(a, x / l, y / l, z / l);
      n.setXYZ(b, x / l, y / l, z / l);
    }
    n.needsUpdate = true;
  }
  return g;
}
function extrudeAlongZ(shape, z0, z1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  g.computeVertexNormals();
  return g;
}
function ribbedDome(profile, ribs, amp, seg, valley) {
  const tri = [];
  const col = [];
  const tint = (j) => {
    if (!valley) return [1, 1, 1];
    const f = Math.pow((1 - Math.cos(ribs * (j % seg * Math.PI * 2 / seg))) / 2, 0.55);
    return [1 + (valley[0] - 1) * f, 1 + (valley[1] - 1) * f, 1 + (valley[2] - 1) * f];
  };
  const push = (a, b, c) => tri.push(...a, ...b, ...c);
  const at = (i, j) => {
    const th = j % seg * Math.PI * 2 / seg;
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
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(tri), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(tri.length / 3 * 2), 2));
  if (valley) g.setAttribute("color", new THREE.BufferAttribute(new Float32Array(col), 3));
  g.computeVertexNormals();
  return g;
}
function tubeAlong(stations, seg) {
  const pos = [], idx = [];
  for (let i = 0; i < stations.length; i++) {
    const [z, cx, cy, rx, ry, flatY] = stations[i];
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      const x = cx + Math.sin(th) * rx;
      let y = cy + Math.cos(th) * ry;
      if (flatY !== void 0 && y < flatY) y = flatY;
      pos.push(x, y, z);
    }
  }
  for (let i = 0; i < stations.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = i * seg + j, b = (i + 1) * seg + j, c = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
      idx.push(a, b, c, a, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
  g.setIndex(idx);
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
function spokes(rHub, rRim, halfW, n, hex, t = 6e-3, prism = false) {
  const segs = [];
  for (let i = 0; i < n; i++) {
    const a = i * Math.PI * 2 / n;
    const side = (i % 2 === 0 ? 1 : -1) * halfW * 0.35;
    const len = rRim - rHub;
    const g = prism ? new THREE.CylinderGeometry(t * 0.62, t * 0.62, len, 3, 1, true) : new THREE.BoxGeometry(t, len, t);
    g.translate(0, rHub + len / 2, 0);
    g.rotateX(Math.atan2(side, len) * 0.6);
    g.rotateX(0);
    g.translate(0, 0, side * 0.5);
    g.rotateX(a);
    segs.push(g);
  }
  return tintGeo(mergeGeos(segs), hex);
}
function tube(pts, r, seg = 8, hex) {
  const parts = [];
  const rAt = (i) => typeof r === "number" ? r : r[Math.min(i, r.length - 1)];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const d = b.clone().sub(a);
    const len = d.length();
    if (len < 1e-6) continue;
    const ra = rAt(i), rb = rAt(i + 1);
    const g = new THREE.CylinderGeometry(rb, ra, len + (ra + rb) * 0.6, seg, 1, false);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    g.applyQuaternion(q);
    const m = a.clone().add(b).multiplyScalar(0.5);
    g.translate(m.x, m.y, m.z);
    parts.push(g);
  }
  const out = mergeGeos(parts);
  return hex === void 0 ? out : tintGeo(out, hex);
}
function strap(pts, w, t, about, hex) {
  const parts = [];
  const c = new THREE.Vector3(about[0], about[1], about[2]);
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const dir = b.clone().sub(a);
    const len = dir.length();
    if (len < 1e-6) continue;
    dir.normalize();
    const mid = a.clone().add(b).multiplyScalar(0.5);
    let nrm = mid.clone().sub(c);
    nrm.sub(dir.clone().multiplyScalar(nrm.dot(dir)));
    if (nrm.lengthSq() < 1e-12) nrm = new THREE.Vector3(0, 0, 1).sub(dir.clone().multiplyScalar(dir.z));
    nrm.normalize();
    const side = new THREE.Vector3().crossVectors(dir, nrm).normalize();
    const g = new THREE.BoxGeometry(w, len + t, t);
    g.applyMatrix4(new THREE.Matrix4().makeBasis(side, dir, nrm));
    g.translate(mid.x, mid.y, mid.z);
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
  const ctx = cv.getContext("2d", { willReadFrequently: true });
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
function furTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const tone = o.tone ?? [0.72, 0.66, 0.58], m = s * 0.06;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.clouds ?? 26); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.08 + rnd() * 0.18), a = 0.04 + rnd() * 0.1;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(tone)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(tone)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < (o.patches ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.04 + rnd() * 0.05), pc = o.patchTone ?? [0.72, 0.56, 0.52];
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(pc)},0.55)`);
      g2.addColorStop(0.6, `rgba(${rgb2(pc)},0.3)`);
      g2.addColorStop(1, `rgba(${rgb2(pc)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r * 1.3, r, rnd() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const strokes = o.strokes ?? 5e3, len = s * (o.length ?? 0.022);
    const drawStroke = (x, y, dx, dy, w) => {
      ctx.lineWidth = w;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + dx, y + dy);
      ctx.stroke();
      if (x < m) {
        ctx.beginPath();
        ctx.moveTo(x + s, y);
        ctx.lineTo(x + s + dx, y + dy);
        ctx.stroke();
      }
      if (x > s - m) {
        ctx.beginPath();
        ctx.moveTo(x - s, y);
        ctx.lineTo(x - s + dx, y + dy);
        ctx.stroke();
      }
      if (y < m) {
        ctx.beginPath();
        ctx.moveTo(x, y + s);
        ctx.lineTo(x + dx, y + s + dy);
        ctx.stroke();
      }
      if (y > s - m) {
        ctx.beginPath();
        ctx.moveTo(x, y - s);
        ctx.lineTo(x + dx, y - s + dy);
        ctx.stroke();
      }
    };
    ctx.lineCap = "round";
    for (let i = 0; i < strokes; i++) {
      const x = rnd() * s, y = rnd() * s, th = (rnd() - 0.5) * 0.78, l = len * (0.6 + rnd() * 0.8);
      const light = rnd() < 0.42;
      ctx.globalCompositeOperation = light ? "screen" : "multiply";
      ctx.strokeStyle = light ? `rgba(255,250,240,${0.05 + rnd() * 0.1})` : `rgba(${rgb2(tone)},${0.06 + rnd() * 0.14})`;
      drawStroke(x, y, Math.sin(th) * l, Math.cos(th) * l, 0.6 + rnd() * 1.2);
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
function sheet(s) {
  const nx = s.nx, nz = s.nz, Hh = s.heights, t = s.t ?? 0.012;
  const X = (i) => s.x0 + (s.x1 - s.x0) * i / nx;
  const ZS = Array.isArray(s.zs) ? s.zs : null;
  const Z = (j) => ZS ? ZS[j] : s.z0 + (s.z1 - s.z0) * j / nz;
  const grid = (yOff, flip) => {
    const pos = [], uv = [], idx = [];
    for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
      pos.push(X(i), Hh[j][i] + yOff, Z(j));
      uv.push(i / nx, j / nz);
    }
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1;
      if (flip) idx.push(a, b, c, b, d, c);
      else idx.push(a, c, b, b, c, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  };
  const paint = (g, hex) => {
    const n = g.getAttribute("position").count, c = new THREE.Color(hex), col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return g;
  };
  const paintGrid = (g, HG) => {
    const n = g.getAttribute("position").count, col = new Float32Array(n * 3), c = new THREE.Color();
    let k = 0;
    for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
      c.setHex(HG[j][i]);
      col[k++] = c.r;
      col[k++] = c.g;
      col[k++] = c.b;
    }
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return g;
  };
  const top0 = grid(0, false), und0 = grid(-t, true);
  const parts = s.hexGrid !== void 0 ? [paintGrid(top0, s.hexGrid), paint(und0, s.hexUnder ?? 16777215)] : s.hexUnder !== void 0 ? [paint(top0, s.hexTop ?? 16777215), paint(und0, s.hexUnder)] : [top0, und0];
  const strip = (pts, out) => {
    const pos = [], uv = [];
    for (const [p0, p1] of pts) {
      const q0 = p0, q1 = p1, q2 = [p1[0], p1[1] - t, p1[2]], q3 = [p0[0], p0[1] - t, p0[2]];
      const e12 = [q1[0] - q0[0], q1[1] - q0[1], q1[2] - q0[2]], e22 = [q2[0] - q0[0], q2[1] - q0[1], q2[2] - q0[2]];
      const n = [e12[1] * e22[2] - e12[2] * e22[1], e12[2] * e22[0] - e12[0] * e22[2], e12[0] * e22[1] - e12[1] * e22[0]];
      const tri = n[0] * out[0] + n[1] * out[1] + n[2] * out[2] >= 0 ? [q0, q1, q2, q0, q2, q3] : [q0, q2, q1, q0, q3, q2];
      for (const q of tri) {
        pos.push(q[0], q[1], q[2]);
        uv.push(0, 0);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.computeVertexNormals();
    return g;
  };
  const top = (i, j) => [X(i), Hh[j][i], Z(j)];
  const e0 = [], e1 = [], e2 = [], e3 = [];
  for (let i = 0; i < nx; i++) {
    e0.push([top(i, 0), top(i + 1, 0)]);
    e1.push([top(i, nz), top(i + 1, nz)]);
  }
  for (let j = 0; j < nz; j++) {
    e2.push([top(0, j), top(0, j + 1)]);
    e3.push([top(nx, j), top(nx, j + 1)]);
  }
  const edges = [strip(e0, [0, 0, -1]), strip(e1, [0, 0, 1]), strip(e2, [-1, 0, 0]), strip(e3, [1, 0, 0])];
  const rimHex = s.hexRim ?? s.hexUnder;
  parts.push(...rimHex !== void 0 ? edges.map((g) => paint(g, rimHex)) : edges);
  return mergeGeos(parts);
}
function paintTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1], rust = o.rust ?? base, chalk = o.chalk ?? base;
    const run = o.run ?? rust;
    const wrap = (draw) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    const blob = (c, x, y, r, a, ry = 1) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb2(c)},${a})`);
      g.addColorStop(0.55, `rgba(${rgb2(c)},${a * 0.45})`);
      g.addColorStop(1, `rgba(${rgb2(c)},0)`);
      ctx.fillStyle = g;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * ry, 0, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    ctx.fillStyle = `rgb(${rgb2(base)})`;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (o.drift ?? 14); i++) {
      const c = rnd() < 0.5 ? rust : chalk;
      blob(c, rnd() * s, rnd() * s, s * (0.18 + rnd() * 0.3) * (o.driftScale ?? 1), 0.05 + rnd() * 0.07, 0.6 + rnd() * 0.8);
    }
    for (let k = 0; k < (o.rustClusters ?? 16); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.04 + rnd() * 0.11) * (o.clusterScale ?? 1);
      blob(rust, cx, cy, cr, 0.3 + rnd() * 0.35, 0.7 + rnd() * 0.6);
      for (let i = 0; i < (o.specksPerCluster ?? 40); i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.8 + rnd() * 2.4;
        ctx.fillStyle = `rgba(${rgb2(rust)},${0.25 + rnd() * 0.5})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      if (rnd() < (o.runChance ?? 0.55)) {
        const w = 1 + rnd() * s * 0.01, len = s * (0.1 + rnd() * 0.35);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        g.addColorStop(0, `rgba(${rgb2(run)},${0.16 + rnd() * 0.18})`);
        g.addColorStop(1, `rgba(${rgb2(run)},0)`);
        ctx.fillStyle = g;
        wrap((dx) => ctx.fillRect(cx + dx + (rnd() - 0.5) * cr, cy, w, len));
      }
    }
    const cscale = o.chalkScale ?? 1, calpha = o.chalkAlpha ?? 0.35;
    for (let k = 0; k < (o.chalkPatches ?? 9); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.05 + rnd() * 0.1) * cscale;
      blob(chalk, cx, cy, cr, calpha + rnd() * 0.3, 0.5 + rnd() * 0.7);
      for (let i = 0; i < 26; i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr * 1.25;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.7, r = 1 + rnd() * 3;
        ctx.fillStyle = `rgba(${rgb2(chalk)},${0.2 + rnd() * 0.4})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
    for (let i = 0; i < (o.topStreaks ?? 0); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.014, len = s * (0.25 + rnd() * 0.55);
      const a = 0.1 + rnd() * 0.22;
      const g = ctx.createLinearGradient(0, 0, 0, len);
      g.addColorStop(0, `rgba(${rgb2(run)},${a})`);
      g.addColorStop(0.25, `rgba(${rgb2(rust)},${a * 0.8})`);
      g.addColorStop(1, `rgba(${rgb2(rust)},0)`);
      ctx.fillStyle = g;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, 0, w, len);
    }
    if (o.groundBand) {
      const b = o.groundBand, g = ctx.createLinearGradient(0, s, 0, s * (1 - (o.groundHeight ?? 0.22)));
      g.addColorStop(0, `rgba(${rgb2(run)},${b})`);
      g.addColorStop(0.45, `rgba(${rgb2(run)},${b * 0.4})`);
      g.addColorStop(1, `rgba(${rgb2(run)},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, s, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.grain ?? 1800); i++) {
      const x = rnd() * s, y = rnd() * s, r = 0.5 + rnd() * 1.3, a = 0.03 + rnd() * 0.07;
      ctx.fillStyle = `rgba(150,140,130,${a})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function sweepTube(pts, r, seg = 10, hex, cap = true) {
  const P = pts.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
  for (let i = P.length - 1; i > 0; i--) if (P[i].distanceTo(P[i - 1]) < 1e-7) P.splice(i, 1);
  if (P.length < 2) return new THREE.BufferGeometry();
  const n = P.length;
  const segDir = [];
  for (let i = 0; i < n - 1; i++) segDir.push(P[i + 1].clone().sub(P[i]).normalize());
  const T = P.map((_, i) => i === 0 ? segDir[0].clone() : i === n - 1 ? segDir[n - 2].clone() : segDir[i - 1].clone().add(segDir[i]).normalize());
  let N = Math.abs(T[0].y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  N.sub(T[0].clone().multiplyScalar(N.dot(T[0]))).normalize();
  const pos = [], idx = [];
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      const q = new THREE.Quaternion().setFromUnitVectors(T[i - 1], T[i]);
      N.applyQuaternion(q);
      N.sub(T[i].clone().multiplyScalar(N.dot(T[i]))).normalize();
    }
    const B = new THREE.Vector3().crossVectors(T[i], N).normalize();
    const k = i > 0 && i < n - 1 ? 1 / Math.max(0.5, segDir[i - 1].dot(T[i])) : 1;
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      const c = Math.cos(th), s = Math.sin(th);
      pos.push(P[i].x + (N.x * c + B.x * s * k) * r, P[i].y + (N.y * c + B.y * s * k) * r, P[i].z + (N.z * c + B.z * s * k) * r);
    }
  }
  for (let i = 0; i < n - 1; i++) for (let j = 0; j < seg; j++) {
    const a = i * seg + j, b = (i + 1) * seg + j, c2 = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
    idx.push(a, c2, b, a, d, c2);
  }
  if (cap) {
    for (const [ring, at, flip] of [[0, P[0], true], [n - 1, P[n - 1], false]]) {
      const base = pos.length / 3;
      for (let j = 0; j < seg; j++) {
        const k = (ring * seg + j) * 3;
        pos.push(pos[k], pos[k + 1], pos[k + 2]);
      }
      const ci = pos.length / 3;
      pos.push(at.x, at.y, at.z);
      for (let j = 0; j < seg; j++) {
        const a = base + j, b = base + (j + 1) % seg;
        if (flip) idx.push(ci, b, a);
        else idx.push(ci, a, b);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return hex === void 0 ? g : tintGeo(g, hex);
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
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const wash = o.wash ?? [0.62, 0.62, 0.58], washA = o.washAlpha ?? 0.7, cov = o.coverage ?? 0.3;
    const base = o.base ?? [1, 1, 1];
    ctx.fillStyle = `rgb(${rgb2(base)})`;
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.streaks ?? 26); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.012, len = s * (0.15 + rnd() * 0.6), a = 0.05 + rnd() * 0.12;
      const g2 = ctx.createLinearGradient(0, 0, 0, len);
      g2.addColorStop(0, `rgba(${rgb2(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(wash)},0)`);
      ctx.fillStyle = g2;
      ctx.fillRect(x, 0, w, len);
      ctx.fillRect(x - s, 0, w, len);
    }
    if (o.washFlat) {
      ctx.fillStyle = `rgba(${rgb2(wash)},${washA})`;
      ctx.fillRect(0, 0, s, s);
    } else {
      const grad = ctx.createLinearGradient(0, s, 0, s * (1 - cov));
      grad.addColorStop(0, `rgba(${rgb2(wash)},${washA})`);
      grad.addColorStop(0.5, `rgba(${rgb2(wash)},${washA * 0.45})`);
      grad.addColorStop(1, `rgba(${rgb2(wash)},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, s, s);
    }
    for (let i = 0; i < (o.blotches ?? 40); i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 1.6) * s, r = 3 + rnd() * s * 0.06, a = 0.08 + rnd() * 0.3;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(wash)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.rubs) {
      const rub = o.rub ?? [0.3, 0.28, 0.3];
      for (let i = 0; i < o.rubs; i++) {
        const x = rnd() * s, y = s * (0.6 + rnd() * 0.38);
        const w = s * (0.05 + rnd() * 0.22), h = s * (6e-3 + rnd() * 0.03), a = 0.2 + rnd() * 0.45;
        const g2 = ctx.createLinearGradient(x - w / 2, 0, x + w / 2, 0);
        g2.addColorStop(0, `rgba(${rgb2(rub)},0)`);
        g2.addColorStop(0.5, `rgba(${rgb2(rub)},${a})`);
        g2.addColorStop(1, `rgba(${rgb2(rub)},0)`);
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) ctx.fillRect(x - w / 2 + dx, y - h / 2, w, h);
      }
    }
    if (o.scuffs) {
      ctx.globalCompositeOperation = "source-over";
      for (let i = 0; i < o.scuffs; i++) {
        const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * (o.scuffScale ?? 0.14));
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
        g2.addColorStop(0, `rgba(255,255,255,${o.scuffAlpha ?? 0.55})`);
        g2.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalCompositeOperation = "multiply";
    }
    for (let i = 0; i < (o.clouds ?? 0); i++) {
      const v = o.cloud ?? [0.86, 0.86, 0.84];
      const x = rnd() * s, y = rnd() * s, r = s * (o.cloudR ?? 0.16) * (0.4 + rnd() * 1.4), a = (o.cloudAlpha ?? 0.12) * (0.4 + rnd());
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.scuffs) {
      const v = o.scuff ?? [0.62, 0.62, 0.64], band = o.scuffBand ?? [0.3, 0.7];
      for (let i = 0; i < o.scuffs; i++) {
        const cx = rnd() * s, cy = s * (1 - (band[0] + rnd() * (band[1] - band[0])));
        const w = s * (0.05 + rnd() * 0.11), h = w * (0.05 + rnd() * 0.1);
        const a = (o.scuffAlpha ?? 0.34) * (0.5 + rnd());
        for (const dx of [-s, 0, s]) {
          ctx.save();
          ctx.translate(cx + dx, cy);
          ctx.rotate((rnd() - 0.5) * 0.45);
          ctx.scale(1, h / w);
          const g2 = ctx.createRadialGradient(0, 0, 0, 0, 0, w);
          g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
          g2.addColorStop(0.45, `rgba(${rgb2(v)},${a * 0.55})`);
          g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
          ctx.fillStyle = g2;
          ctx.beginPath();
          ctx.arc(0, 0, w, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }
    if (o.seams) {
      const v = o.seam ?? [0.72, 0.71, 0.68];
      for (let i = 0; i < o.seams; i++) {
        const x = Math.round(s * ((o.seamAt ?? 0.42) + i / o.seams)) % s;
        const wpx = Math.max(1, Math.round(s * 4e-3));
        ctx.fillStyle = `rgba(${rgb2(v)},${o.seamAlpha ?? 0.5})`;
        ctx.fillRect(x, 0, wpx, s);
        ctx.fillStyle = `rgba(${rgb2(v)},${(o.seamAlpha ?? 0.5) * 0.3})`;
        ctx.fillRect(x + wpx, 0, wpx, s);
      }
    }
    for (let i = 0; i < (o.pits ?? 0); i++) {
      const v = o.pit ?? [0.42, 0.4, 0.36];
      const x = rnd() * s, y = rnd() * s, r = (o.pitR ?? 1.6) * (0.5 + rnd() * 1.3);
      const a = 0.25 + rnd() * 0.5;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r * 2);
      g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      g2.addColorStop(0.4, `rgba(${rgb2(v)},${a * 0.45})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.moss) {
      const m = o.moss, band = o.mossBand ?? 0.22;
      const mg = ctx.createLinearGradient(0, s, 0, s * (1 - band * 1.3));
      mg.addColorStop(0, `rgba(${rgb2(m)},${o.mossWash ?? 0.35})`);
      mg.addColorStop(1, `rgba(${rgb2(m)},0)`);
      ctx.fillStyle = mg;
      ctx.fillRect(0, 0, s, s);
      for (let k = 0; k < (o.mossClusters ?? 14); k++) {
        const cx = rnd() * s, cy = s - Math.pow(rnd(), 1.6) * s * band, cr = s * (0.015 + rnd() * 0.04);
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
        cg.addColorStop(0, `rgba(${rgb2(m)},0.7)`);
        cg.addColorStop(0.6, `rgba(${rgb2(m)},0.35)`);
        cg.addColorStop(1, `rgba(${rgb2(m)},0)`);
        ctx.fillStyle = cg;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(cx + dx, cy, cr, cr * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 24; i++) {
          const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
          const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.6, r = 1 + rnd() * 3;
          ctx.fillStyle = `rgba(${rgb2(m)},${0.35 + rnd() * 0.5})`;
          for (const dx of [-s, 0, s]) {
            ctx.beginPath();
            ctx.arc(x + dx, y, r, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }
    for (let i = 0; i < (o.grain ?? 1500); i++) {
      const lo = o.grainLo ?? 200;
      const x = rnd() * s, y = rnd() * s, v = lo + Math.round(rnd() * (255 - lo));
      ctx.fillStyle = `rgba(${v},${v},${v},${o.grainAlpha ?? 0.12})`;
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
function stripeTile(size, bands, a, b, seed, o = {}) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    const w = s / bands;
    for (let i = 0; i < bands; i++) {
      ctx.fillStyle = rgb2(i % 2 ? b : a);
      ctx.fillRect(Math.floor(i * w), 0, Math.ceil(w) + 1, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.smudges ?? 40); i++) {
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
    for (let i = 0; i < (o.specks ?? 1200); i++) {
      const v = 200 + Math.round(rnd() * 55);
      ctx.fillStyle = `rgba(${v},${v},${v},0.10)`;
      ctx.fillRect(rnd() * s, rnd() * s, 1.5, 1.5);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function latheUV(g, pointCount, seg, scale, vScale = scale, v0 = 0) {
  const p = g.getAttribute("position");
  let rMax = 0;
  for (let i = 0; i < p.count; i++) rMax = Math.max(rMax, Math.hypot(p.getX(i), p.getZ(i)));
  const rep = Math.max(1, Math.round(2 * Math.PI * rMax / scale));
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const s = Math.floor(i / pointCount);
    uv[i * 2] = s / seg * rep;
    uv[i * 2 + 1] = (p.getY(i) - v0) / vScale;
  }
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
}
function pebbleTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    ctx.fillStyle = rgb2(o.ground ?? [0.45, 0.42, 0.38]);
    ctx.fillRect(0, 0, s, s);
    const pal = o.palette ?? [[0.85, 0.78, 0.66], [0.72, 0.62, 0.5], [0.6, 0.58, 0.55], [0.9, 0.86, 0.8]];
    const n = o.count ?? 900, rMin = s * (o.rMin ?? 0.012), rMax = s * (o.rMax ?? 0.028);
    for (let i = 0; i < n; i++) {
      const x = rnd() * s, y = rnd() * s, rx = rMin + rnd() * (rMax - rMin), ry = rx * (0.6 + rnd() * 0.5), a = rnd() * Math.PI;
      const c = pal[Math.floor(rnd() * pal.length)], k = 0.85 + rnd() * 0.3;
      if (o.shade) {
        ctx.fillStyle = rgb2((o.ground ?? [0.45, 0.42, 0.38]).map((v) => v * o.shade));
        for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(x + dx + rx * 0.16, y + dy + ry * 0.22, rx * 1.1, ry * 1.1, a, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.fillStyle = rgb2(c.map((v) => Math.min(1, v * k)));
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, rx, ry, a, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = `rgba(255,255,255,${o.gloss ?? 0.18})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx - rx * 0.2, y + dy - ry * 0.25, rx * 0.5, ry * 0.4, a, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  });
}
function treadTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const groove = o.groove ?? 0.8, slots = o.slots ?? 2, rings = o.rings ?? 2;
    const base = o.base ?? [1, 1, 1];
    ctx.fillStyle = `rgb(${rgb(base)})`;
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    const gv = Math.round(255 * groove);
    ctx.fillStyle = `rgb(${gv},${gv},${gv})`;
    const pitch = s / slots, w = pitch * (o.slotWidth ?? 0.16);
    for (let i = 0; i < slots; i++) {
      const x = i * pitch + pitch * 0.4 + (rnd() - 0.5) * pitch * 0.1;
      ctx.fillRect(x, s * 0.12, w, s * 0.76);
      ctx.fillRect(x - s, s * 0.12, w, s * 0.76);
    }
    for (let i = 0; i < rings; i++) {
      const y = s * (0.2 + 0.6 * (i + 0.5) / rings);
      ctx.fillRect(0, y - 1.5, s, 3);
    }
    for (let i = 0; i < 24; i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * 0.12), v = 235 + Math.round(rnd() * 20);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${v},${v},${v},0.5)`);
      g2.addColorStop(1, `rgba(${v},${v},${v},0)`);
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
function tyreTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const base = o.base ?? 200, band = o.band ?? [0.24, 0.76], groove = o.groove ?? 0.45;
    const gv = Math.round(base * groove), rv = Math.round(base * 0.7), mv = Math.round(base * 0.9);
    const dust = o.dust ?? [232, 214, 190];
    ctx.fillStyle = `rgb(${base},${base},${base})`;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < s * s / 6; i++) {
      const v = base + Math.round((rnd() - 0.5) * 22);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(rnd() * s, rnd() * s, 2, 2);
    }
    const strip = (ya, yb, treaded) => {
      const h = yb - ya, b0 = ya + h * (1 - band[1]), b1 = ya + h * (1 - band[0]);
      const ng = o.grooves ?? 3, gw = h * 0.024;
      ctx.fillStyle = `rgb(${gv},${gv},${gv})`;
      for (let i = 0; i < ng; i++) {
        const y = b0 + (b1 - b0) * (i + 1) / (ng + 1);
        ctx.fillRect(0, y - gw / 2, s, gw);
      }
      const ns = o.sipes ?? 2, w = s * (o.sipeWidth ?? 0.05);
      for (let k = 0; k <= ng; k++) {
        const y0 = k === 0 ? b0 : b0 + (b1 - b0) * k / (ng + 1) + gw / 2, y1 = k === ng ? b1 : b0 + (b1 - b0) * (k + 1) / (ng + 1) - gw / 2;
        const outer = k === 0 || k === ng;
        if (!treaded && !outer) continue;
        const ys0 = treaded ? y0 : k === 0 ? y0 : y1 - (y1 - y0) * 0.45, ys1 = treaded ? y1 : k === 0 ? y0 + (y1 - y0) * 0.45 : y1;
        for (let i = 0; i < ns; i++) {
          const x = ((i + 0.5) / ns + k % 2 * 0.5 / ns) * s + (rnd() - 0.5) * s * 0.06, sl = (rnd() - 0.5) * s * 0.08;
          for (const dx of [-s, 0, s]) {
            ctx.beginPath();
            ctx.moveTo(x + dx, ys0);
            ctx.lineTo(x + dx + w, ys0);
            ctx.lineTo(x + dx + w + sl, ys1);
            ctx.lineTo(x + dx + sl, ys1);
            ctx.closePath();
            ctx.fill();
          }
        }
      }
      const sh = ctx.createLinearGradient(0, b0 - h * 0.03, 0, b0 + h * 0.02);
      sh.addColorStop(0, `rgba(${gv},${gv},${gv},0)`);
      sh.addColorStop(1, `rgba(${gv},${gv},${gv},0.45)`);
      ctx.fillStyle = sh;
      ctx.fillRect(0, b0 - h * 0.03, s, h * 0.05);
      ctx.fillStyle = `rgb(${rv},${rv},${rv})`;
      ctx.fillRect(0, ya + h * 0.045, s, h * 0.012);
      ctx.fillRect(0, ya + h * 0.94, s, h * 0.012);
      ctx.fillStyle = `rgb(${mv},${mv},${mv})`;
      ctx.fillRect(0, ya + h * 0.11, s, 2);
      ctx.fillRect(0, ya + h * 0.88, s, 2);
      const dg = ctx.createLinearGradient(0, yb, 0, ya + h * 0.6);
      dg.addColorStop(0, `rgba(${dust[0]},${dust[1]},${dust[2]},${o.dustAlpha ?? 0.35})`);
      dg.addColorStop(1, `rgba(${dust[0]},${dust[1]},${dust[2]},0)`);
      ctx.fillStyle = dg;
      ctx.fillRect(0, ya + h * 0.6, s, h * 0.4);
      for (let i = 0; i < (o.scuffs ?? 14); i++) {
        const x = rnd() * s, y = rnd() < 0.5 ? b0 + (rnd() - 0.3) * h * 0.08 : b1 + (rnd() - 0.7) * h * 0.08, r = s * (0.02 + rnd() * 0.05), v = 225 + Math.round(rnd() * 25);
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
        g2.addColorStop(0, `rgba(${v},${v},${v},0.5)`);
        g2.addColorStop(1, `rgba(${v},${v},${v},0)`);
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(x + dx, y, r * 2.2, r * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 60; i++) {
        const x = rnd() * s, y = b0 + rnd() * (b1 - b0), v = 6 + Math.round(rnd() * 14);
        ctx.fillStyle = `rgb(${v},${Math.round(v * 0.9)},${Math.round(v * 0.75)})`;
        ctx.fillRect(x, y, 2 + rnd() * 6, 2 + rnd() * 3);
      }
      ctx.globalCompositeOperation = "source-over";
    };
    strip(0, s / 2, true);
    strip(s / 2, s, false);
  });
}
function frustum(b) {
  const [cx, y0, cz, w0, d0, w1, d1, h] = b;
  const g = new THREE.BoxGeometry(1, h, 1);
  const p = g.getAttribute("position");
  for (let i = 0; i < p.count; i++) {
    const t = (p.getY(i) + h / 2) / h;
    p.setX(i, p.getX(i) * (w0 + (w1 - w0) * t));
    p.setZ(i, p.getZ(i) * (d0 + (d1 - d0) * t));
  }
  g.computeVertexNormals();
  g.translate(cx, y0 + h / 2, cz);
  return g;
}
function zincTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const mid = o.mid ?? 0.88, lo = o.lo ?? 0.74;
    const g = (v) => {
      const b = Math.round(255 * v);
      return `rgb(${b},${b},${b})`;
    };
    ctx.fillStyle = g(mid);
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (o.clouds ?? 60); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.06 + rnd() * 0.16);
      const up = rnd() < 0.5;
      const v = up ? mid + (1 - mid) * (0.35 + rnd() * 0.5) : lo + (mid - lo) * rnd();
      const gr = ctx.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${o.cloudAlpha ?? 0.28})`);
      gr.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gr;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const cl = Array.from({ length: o.spangleClusters ?? 0 }, () => [rnd() * s, rnd() * s, s * (0.04 + rnd() * 0.1)]);
    for (let i = 0; i < (o.spangle ?? 520); i++) {
      let x = rnd() * s, y = rnd() * s;
      if (cl.length && rnd() > (o.spangleLoose ?? 0.25)) {
        const c = cl[rnd() * cl.length | 0], a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * c[2];
        x = c[0] + Math.cos(a) * d;
        y = c[1] + Math.sin(a) * d;
      }
      const r = s * ((o.spangleMin ?? 4e-3) + Math.pow(rnd(), 2) * (o.spangleMax ?? 0.013));
      const v = mid + (1 - mid) * (0.5 + rnd() * 0.5);
      const k = 4 + Math.floor(rnd() * 3);
      const a0 = rnd() * Math.PI * 2;
      ctx.fillStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${(o.spangleAlpha ?? 0.2) + rnd() * (o.spangleAlphaVar ?? 0.35)})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        for (let j = 0; j < k; j++) {
          const a = a0 + j * Math.PI * 2 / k, rr = r * (0.55 + rnd() * 0.75);
          const px = x + dx + Math.cos(a) * rr, py = y + dy + Math.sin(a) * rr * 0.8;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
      }
    }
    for (let i = 0; i < (o.streaks ?? 30); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.01, y0 = rnd() * s * 0.5, len = s * (0.2 + rnd() * 0.7);
      const v = lo + (mid - lo) * rnd() * 0.6, a = 0.06 + rnd() * 0.14;
      const gr = ctx.createLinearGradient(0, y0, 0, y0 + len);
      gr.addColorStop(0, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},0)`);
      gr.addColorStop(0.25, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${a})`);
      gr.addColorStop(1, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},0)`);
      ctx.fillStyle = gr;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0, w, len);
    }
    for (let i = 0; i < (o.grain ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, w = 1 + rnd() * 2, h = 1 + rnd() * 2;
      const up = rnd() < 0.5;
      const v = up ? mid + (1 - mid) * (0.4 + rnd() * 0.6) : lo + (mid - lo) * rnd();
      ctx.fillStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${0.1 + rnd() * 0.3})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) ctx.fillRect(x + dx, y + dy, w, h);
    }
    ctx.lineCap = "round";
    for (let i = 0; i < (o.scratches ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, len = s * (6e-3 + rnd() * 0.055), a = (rnd() - 0.5) * 0.7 + Math.PI / 2;
      const up = rnd() < 0.45;
      const v = up ? mid + (1 - mid) * (0.5 + rnd() * 0.5) : lo + (mid - lo) * rnd() * 0.8;
      ctx.strokeStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${0.1 + rnd() * 0.28})`;
      ctx.lineWidth = 0.7 + rnd() * 1.6;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.moveTo(x + dx, y + dy);
        ctx.lineTo(x + dx + Math.cos(a) * len, y + dy + Math.sin(a) * len);
        ctx.stroke();
      }
    }
    if (o.rust) {
      const c = o.rust, band = o.rustBand ?? 0.16;
      const rgbs = `${Math.round(255 * c[0])},${Math.round(255 * c[1])},${Math.round(255 * c[2])}`;
      for (const [edge, dir, b] of [[0, 1, o.rustBandTop ?? band], [s, -1, band]]) {
        const gr = ctx.createLinearGradient(0, edge, 0, edge + dir * s * b);
        gr.addColorStop(0, `rgba(${rgbs},${o.rustWash ?? 0.3})`);
        gr.addColorStop(1, `rgba(${rgbs},0)`);
        ctx.fillStyle = gr;
        ctx.fillRect(0, 0, s, s);
      }
      for (let i = 0; i < (o.rustRuns ?? 22); i++) {
        const x = rnd() * s, w = 1 + rnd() * s * 0.014;
        const top = rnd() < 0.5;
        const y0 = top ? 0 : s - s * band * (0.3 + rnd());
        const len = s * (0.1 + rnd() * 0.32);
        const gr = ctx.createLinearGradient(0, y0, 0, y0 + len);
        gr.addColorStop(0, `rgba(${rgbs},${0.18 + rnd() * 0.32})`);
        gr.addColorStop(1, `rgba(${rgbs},0)`);
        ctx.fillStyle = gr;
        for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0, w, len);
      }
    }
  });
}
function culmUV(g, r, h, scale, vOff = 0) {
  const uv = g.getAttribute("uv");
  const ku = 2 * Math.PI * r / scale, kv = h / scale;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * ku, uv.getY(i) * kv + vOff);
  return g;
}
function grainLines(ctx, rnd, x0, x1, y0, y1, n, dark, light, aMax) {
  for (let k = 0; k < n; k++) {
    const x = x0 + rnd() * (x1 - x0), a = 0.04 + rnd() * aMax, w = rnd() < 0.75 ? 1 : 1.6;
    ctx.fillStyle = `rgba(${rnd() < 0.72 ? dark : light},${a.toFixed(3)})`;
    ctx.fillRect(x, y0, w, y1 - y0);
  }
}
function weatherPatches(ctx, rnd, s, x0, x1, n, warmA, bleachA) {
  for (let k = 0; k < n; k++) {
    const y = rnd() * s, len = s * (0.12 + rnd() * 0.45), warm = rnd() < 0.5;
    const c = warm ? "112,100,88" : "255,255,255", a = warm ? warmA * (0.4 + rnd() * 0.6) : bleachA * (0.4 + rnd() * 0.6);
    const g2 = ctx.createLinearGradient(0, y, 0, y + len);
    g2.addColorStop(0, `rgba(${c},0)`);
    g2.addColorStop(0.35, `rgba(${c},${a})`);
    g2.addColorStop(0.65, `rgba(${c},${a})`);
    g2.addColorStop(1, `rgba(${c},0)`);
    ctx.fillStyle = g2;
    for (const dy of [-s, 0]) ctx.fillRect(x0, y + dy, x1 - x0, len);
  }
}
function mouldClusters(ctx, rnd, s, spots, rx, ry, n, aMax) {
  for (const [cx, cy] of spots) {
    const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry) * 0.8);
    g2.addColorStop(0, `rgba(28,26,22,${(aMax * 0.9).toFixed(3)})`);
    g2.addColorStop(1, "rgba(28,26,22,0)");
    ctx.fillStyle = g2;
    for (const dy of [-s, 0, s]) {
      ctx.beginPath();
      ctx.ellipse(cx, cy + dy, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < n; i++) {
      const x = cx + (rnd() + rnd() - 1) * rx, y = cy + (rnd() + rnd() - 1) * ry;
      ctx.fillStyle = `rgba(28,26,22,${(0.08 + rnd() * aMax).toFixed(3)})`;
      const w = 1 + rnd() * 2, h = 1 + rnd() * 3;
      for (const dy of [-s, 0, s]) ctx.fillRect(x, y + dy, w, h);
    }
  }
}
function culmTile(size, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = "92,78,62", LIGHT = "255,255,255";
    ctx.fillStyle = "#f0efec";
    ctx.fillRect(0, 0, s, s);
    const ga = ctx.createLinearGradient(0, 0, s, 0);
    ga.addColorStop(0, "rgba(100,92,84,0.12)");
    ga.addColorStop(0.5, "rgba(255,255,255,0.10)");
    ga.addColorStop(1, "rgba(100,92,84,0.12)");
    ctx.fillStyle = ga;
    ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, 14, 0.12, 0.3);
    const nodes = [s * (0.2 + rnd() * 0.1), s * (0.66 + rnd() * 0.12)];
    const stations = [0, ...nodes, s];
    for (let i = 0; i + 1 < stations.length; i++) grainLines(ctx, rnd, 0, s, stations[i], stations[i + 1], 260, DARK, LIGHT, 0.26);
    for (let k = 0; k < 2; k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.25 + rnd() * 0.5);
      ctx.fillStyle = "rgba(38,32,26,0.55)";
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.4, len);
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.4, y + dy, 1, len);
    }
    for (const y of nodes) {
      const gs = ctx.createLinearGradient(0, y - s * 0.03, 0, y);
      gs.addColorStop(0, "rgba(60,50,40,0)");
      gs.addColorStop(1, "rgba(60,50,40,0.22)");
      ctx.fillStyle = gs;
      ctx.fillRect(0, y - s * 0.03, s, s * 0.03);
      ctx.fillStyle = "rgba(52,44,36,0.62)";
      ctx.fillRect(0, y, s, 2.5);
      ctx.fillStyle = "rgba(255,255,255,0.34)";
      ctx.fillRect(0, y + 2.5, s, 4);
      ctx.fillStyle = "rgba(60,50,40,0.30)";
      ctx.fillRect(0, y + 6.5, s, 1.5);
      const gd = ctx.createLinearGradient(0, y + 8, 0, y + s * 0.05);
      gd.addColorStop(0, "rgba(60,50,40,0.20)");
      gd.addColorStop(1, "rgba(60,50,40,0)");
      ctx.fillStyle = gd;
      ctx.fillRect(0, y + 8, s, s * 0.05);
    }
    const spots = [];
    for (const y of nodes) for (let i = 0; i < 2; i++) spots.push([rnd() * s, y + s * (0.02 + rnd() * 0.05)]);
    for (let i = 0; i < 3; i++) spots.push([rnd() * s, rnd() * s]);
    mouldClusters(ctx, rnd, s, spots, s * 0.1, s * 0.06, 90, 0.3);
  });
}
function thatchTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const nc = o.courses ?? 4, ch = s / nc;
    const stems = o.stems ?? 260, spread = o.spread ?? 0.12;
    const wMin = o.stemW?.[0] ?? 1, wMax = o.stemW?.[1] ?? 2;
    const ragged = o.ragged ?? 0.06;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const butts = [];
    for (let c = 0; c <= nc; c++) {
      const row = [];
      let y = 0;
      for (let x = 0; x <= s; x++) {
        if (x % Math.max(2, Math.round(s / 48)) === 0) y = (rnd() * 2 - 1) * ragged * ch;
        row.push(c * ch + y);
      }
      butts.push(row);
    }
    for (let c = 0; c < nc; c++) {
      const y0 = c * ch;
      const t = 1 - spread * rnd();
      const v = Math.round(255 * t);
      ctx.fillStyle = `rgb(${v},${Math.round(v * 0.985)},${Math.round(v * 0.95)})`;
      ctx.fillRect(0, y0 - ragged * ch - 1, s, ch + 2 * ragged * ch + 2);
      for (let k = 0; k < stems; k++) {
        const x = rnd() * s;
        const w = wMin + rnd() * (wMax - wMin);
        const tone = 1 - spread * (0.3 + rnd() * 0.7);
        const a = 0.18 + rnd() * 0.32;
        const dark = rnd() < 0.62;
        ctx.fillStyle = dark ? `rgba(${Math.round(120 * tone)},${Math.round(106 * tone)},${Math.round(84 * tone)},${a.toFixed(3)})` : `rgba(255,253,246,${(a * 0.6).toFixed(3)})`;
        const yTop = y0 - ch * (0.15 + rnd() * 0.25);
        const yBot = butts[c + 1][Math.min(s, Math.round(x))] + ch * (rnd() * 0.1);
        ctx.fillRect(x, yTop, w, Math.max(2, yBot - yTop));
      }
      const gaps = o.gaps ?? 0;
      for (let k = 0; k < gaps; k++) {
        const x = rnd() * s, w = s * (0.01 + rnd() * 0.03);
        ctx.fillStyle = `rgba(96,84,66,${(0.2 + rnd() * 0.18).toFixed(3)})`;
        ctx.fillRect(x, y0 + ch * 0.25, w, ch * (0.4 + rnd() * 0.5));
      }
    }
    for (let c = 1; c <= nc; c++) {
      for (let x = 0; x < s; x++) {
        const yb = butts[c][x];
        const gh = ctx.createLinearGradient(0, yb - ch * 0.09, 0, yb);
        gh.addColorStop(0, "rgba(255,252,242,0)");
        gh.addColorStop(1, `rgba(255,252,242,${(o.tip ?? 0.34).toFixed(3)})`);
        ctx.fillStyle = gh;
        for (const dy of [-s, 0]) ctx.fillRect(x, yb - ch * 0.09 + dy, 1, ch * 0.09);
        const g2 = ctx.createLinearGradient(0, yb, 0, yb + ch * 0.22);
        g2.addColorStop(0, `rgba(58,48,36,${(o.shadow ?? 0.42).toFixed(3)})`);
        g2.addColorStop(1, "rgba(58,48,36,0)");
        ctx.fillStyle = g2;
        for (const dy of [-s, 0]) ctx.fillRect(x, yb + dy, 1, ch * 0.22);
      }
    }
    for (let k = 0; k < (o.moss ?? 0); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * 0.14);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.14 + rnd() * 0.22;
      g2.addColorStop(0, `rgba(150,190,110,${a.toFixed(3)})`);
      g2.addColorStop(1, "rgba(150,190,110,0)");
      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 10, 0.1, 0.22);
  });
}
function tarpTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const pitch = Math.max(3, Math.round(s / (o.tapes ?? 64)));
    for (let x = 0; x < s; x += pitch) {
      ctx.fillStyle = `rgba(30,34,44,${(0.1 + rnd() * 0.08).toFixed(3)})`;
      ctx.fillRect(x, 0, 1, s);
      ctx.fillStyle = "rgba(255,255,255,0.07)";
      ctx.fillRect(x + 1, 0, Math.max(1, pitch * 0.35), s);
    }
    for (let y = 0; y < s; y += pitch) {
      ctx.fillStyle = `rgba(30,34,44,${(0.1 + rnd() * 0.08).toFixed(3)})`;
      ctx.fillRect(0, y, s, 1);
      ctx.fillStyle = "rgba(255,255,255,0.07)";
      ctx.fillRect(0, y + 1, s, Math.max(1, pitch * 0.35));
    }
    for (let k = 0; k < (o.creases ?? 6); k++) {
      const horiz = rnd() < 0.5, p = rnd() * s, len = s * (0.5 + rnd() * 0.5), q = rnd() * s;
      ctx.fillStyle = "rgba(255,255,255,0.26)";
      ctx.fillStyle = "rgba(255,255,255,0.26)";
      if (horiz) {
        ctx.fillRect(q - len / 2, p, len, 1.6);
        ctx.fillStyle = "rgba(20,26,38,0.18)";
        ctx.fillRect(q - len / 2, p + 1.6, len, 2);
      } else {
        ctx.fillRect(p, q - len / 2, 1.6, len);
        ctx.fillStyle = "rgba(20,26,38,0.18)";
        ctx.fillRect(p + 1.6, q - len / 2, 2, len);
      }
    }
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 12, 0.1, 0.34);
  });
}
function sawnTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = "96,84,68", LIGHT = "255,255,255";
    ctx.fillStyle = "#f4f2ee";
    ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 20, 0.14, 0.3);
    grainLines(ctx, rnd, 0, s, 0, s, o.grain ?? 220, DARK, LIGHT, 0.18);
    for (let k = 0; k < (o.knots ?? 4); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.012 + rnd() * 0.02);
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.fillStyle = "rgba(74,60,44,0.45)";
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * 1.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(96,80,60,0.22)";
        ctx.lineWidth = 1;
        for (let q = 1; q <= 3; q++) {
          ctx.beginPath();
          ctx.ellipse(x + dx, y + dy, r * (1 + q * 0.6), r * (1.6 + q * 0.9), 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }
    for (let k = 0; k < (o.splits ?? 3); k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.2 + rnd() * 0.45);
      ctx.fillStyle = "rgba(58,48,36,0.42)";
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.4, len);
      ctx.fillStyle = "rgba(255,255,255,0.16)";
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.4, y + dy, 1, len);
    }
    const spots = [];
    for (let i = 0; i < (o.mould ?? 3); i++) spots.push([rnd() * s, rnd() * s]);
    mouldClusters(ctx, rnd, s, spots, s * 0.09, s * 0.07, 70, 0.24);
  });
}
function galvTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1], chalk = o.chalk ?? base, rust = o.rust ?? base, dark = o.dark ?? base;
    const wrap = (draw) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    const blob = (c, x, y, r, a, ry = 1, rot = 0) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb2(c)},${a})`);
      g.addColorStop(0.55, `rgba(${rgb2(c)},${a * 0.5})`);
      g.addColorStop(1, `rgba(${rgb2(c)},0)`);
      ctx.fillStyle = g;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * ry, rot, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    const fl = o.flutes ?? 0, flow = o.fluteLow ?? 0.88;
    if (fl > 0) {
      for (let x = 0; x < s; x++) {
        const t = (1 - Math.cos(x / s * Math.PI * 2 * fl)) / 2;
        const k = flow + (1 - flow) * t;
        ctx.fillStyle = `rgb(${rgb2(base.map((v) => v * k))})`;
        ctx.fillRect(x, 0, 1, s);
      }
    } else {
      ctx.fillStyle = `rgb(${rgb2(base)})`;
      ctx.fillRect(0, 0, s, s);
    }
    for (let i = 0; i < (o.drift ?? 16); i++)
      blob(dark, rnd() * s, rnd() * s, s * (0.16 + rnd() * 0.3) * (o.driftScale ?? 1), 0.1 + rnd() * 0.18, 0.5 + rnd() * 0.9, rnd() * Math.PI);
    for (let k = 0; k < (o.chalkPatches ?? 14); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.08 + rnd() * 0.18) * (o.chalkScale ?? 1);
      blob(chalk, cx, cy, cr, (o.chalkAlpha ?? 0.55) + rnd() * 0.3, 0.5 + rnd() * 0.9, rnd() * Math.PI);
      for (let i = 0; i < 40; i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr * 1.3;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.8 + rnd() * 2.4;
        ctx.fillStyle = `rgba(${rgb2(chalk)},${0.2 + rnd() * 0.45})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
    for (let k = 0; k < (o.rustClusters ?? 10); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.02 + rnd() * 0.055);
      blob(rust, cx, cy, cr, 0.25 + rnd() * 0.3, 0.7 + rnd() * 0.7, rnd() * Math.PI);
      for (let i = 0; i < (o.specksPerCluster ?? 26); i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.7 + rnd() * 1.8;
        ctx.fillStyle = `rgba(${rgb2(rust)},${0.25 + rnd() * 0.45})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      if (rnd() < 0.6) {
        const w = 1 + rnd() * s * 6e-3, len = s * (0.05 + rnd() * 0.16);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        g.addColorStop(0, `rgba(${rgb2(rust)},${0.14 + rnd() * 0.16})`);
        g.addColorStop(1, `rgba(${rgb2(rust)},0)`);
        ctx.fillStyle = g;
        wrap((dx) => ctx.fillRect(cx + dx + (rnd() - 0.5) * cr, cy, w, len));
      }
    }
    const rolls = o.rolls ?? 40;
    for (let i = 0; i < rolls; i++) {
      const x = (i + 0.35 + rnd() * 0.3) * s / rolls, up = rnd() < 0.45;
      const c = up ? chalk : dark, a = 0.06 + rnd() * 0.12;
      ctx.strokeStyle = `rgba(${rgb2(c)},${a})`;
      ctx.lineWidth = 0.7 + rnd() * 1.3;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.moveTo(x + dx, 0);
        ctx.lineTo(x + dx, s);
        ctx.stroke();
      }
    }
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
    for (const t of c.sweeps ?? []) gs.push(sweepTube(t.pts, t.r, t.seg ?? 10, t.hex, t.cap !== false));
    for (const st of c.straps ?? []) gs.push(strap(st.pts, st.w, st.t, st.about, st.hex));
    for (const cy of c.cyls ?? []) {
      const g2 = new THREE.CylinderGeometry(cy.rt, cy.rb, cy.h, cy.seg ?? 12, 1, cy.open ?? false, cy.th0 ?? 0, cy.thLen ?? Math.PI * 2);
      if (cy.uvRep) {
        const uv = g2.getAttribute("uv");
        for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * cy.uvRep[0], uv.getY(i) * cy.uvRep[1]);
      }
      if (cy.sideUV) {
        const uv = g2.getAttribute("uv"), n = ((cy.seg ?? 12) + 1) * 2;
        for (let i = 0; i < n; i++) uv.setXY(i, cy.sideUV[0], cy.sideUV[1]);
      }
      if (cy.scale) {
        g2.scale(cy.scale[0], cy.scale[1], cy.scale[2]);
        g2.computeVertexNormals();
      }
      if (c.uv === "culm") culmUV(g2, cy.rt, cy.h, c.uvScale ?? 1, cy.vOff ?? 0);
      if (cy.rx) g2.rotateX(cy.rx);
      if (cy.ry) g2.rotateY(cy.ry);
      if (cy.rz) g2.rotateZ(cy.rz);
      g2.translate(cy.at[0], cy.at[1], cy.at[2]);
      gs.push(tintGeo(g2, cy.hex));
    }
    for (const l of c.lathes ?? []) {
      const g2 = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false, l.weldSeam === true);
      if (l.cylUV) {
        const cu = Array.isArray(l.cylUV) ? l.cylUV : [l.cylUV, l.cylUV, 0];
        latheUV(g2, g2.getAttribute("position").count / ((l.seg ?? 12) + 1) | 0, l.seg ?? 12, cu[0], cu[1], cu[2] ?? 0);
      }
      if (l.scale) {
        g2.scale(l.scale[0], l.scale[1], l.scale[2]);
        g2.computeVertexNormals();
      }
      if (l.ry) g2.rotateY(l.ry);
      if (l.rx) g2.rotateX(l.rx);
      if (l.rz) g2.rotateZ(l.rz);
      g2.translate(l.at[0], l.at[1], l.at[2]);
      gs.push(tintGeo(g2, l.hex));
    }
    for (const d of c.domes ?? []) {
      const g2 = ribbedDome(d.pts, d.ribs, d.amp, d.seg ?? 24, d.valley);
      if (d.ry) g2.rotateY(d.ry);
      if (d.rx) g2.rotateX(d.rx);
      if (d.rz) g2.rotateZ(d.rz);
      if (d.at) g2.translate(d.at[0], d.at[1], d.at[2]);
      if (d.valley && d.hex !== void 0) {
        const col = g2.getAttribute("color");
        const t = new THREE.Color(d.hex);
        for (let i = 0; i < col.count; i++) col.setXYZ(i, col.getX(i) * t.r, col.getY(i) * t.g, col.getZ(i) * t.b);
        gs.push(g2);
      } else gs.push(d.valley ? g2 : tintGeo(g2, d.hex));
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
      if (e.rz) g2.rotateZ(e.rz);
      if (e.at) g2.translate(e.at[0], e.at[1], e.at[2]);
      gs.push(tintGeo(g2, e.hex));
    }
    for (const e of c.ellipsoids ?? []) {
      const g2 = new THREE.SphereGeometry(1, e[10] ?? 16, e[11] ?? 12);
      g2.scale(e[4], e[5], e[6]);
      if (e[7]) g2.rotateX(e[7]);
      if (e[8]) g2.rotateY(e[8]);
      if (e[9]) g2.rotateZ(e[9]);
      g2.translate(e[1], e[2], e[3]);
      gs.push(tintGeo(g2, e[0]));
    }
    for (const f of c.frusta ?? []) gs.push(tintGeo(frustum(f.slice(1)), f[0]));
    for (const s of c.spikes ?? []) gs.push(tintGeo(spike(s.at, s.w, s.h), s.hex));
    for (const s of c.sheets ?? []) {
      const g2 = sheet(s);
      gs.push(s.hexUnder !== void 0 ? g2 : tintGeo(g2, s.hex));
    }
    for (const t of c.tubesAlong ?? []) {
      const g2 = tubeAlong(t.stations, t.seg ?? 12);
      if (t.ry) g2.rotateY(t.ry);
      if (t.at) g2.translate(t.at[0], t.at[1], t.at[2]);
      if (t.hexes) {
        const seg = t.seg ?? 12, n = t.stations.length;
        const col = new Float32Array(seg * n * 3);
        for (let i = 0; i < n; i++) {
          const e = t.hexes[Math.min(t.hexes.length - 1, i)];
          const d = new THREE.Color(Array.isArray(e) ? e[0] : e), v = new THREE.Color(Array.isArray(e) ? e[1] : e);
          for (let j = 0; j < seg; j++) {
            const f = (Math.sin(j * Math.PI * 2 / seg) + 1) / 2;
            const k = (i * seg + j) * 3;
            col[k] = d.r + (v.r - d.r) * f;
            col[k + 1] = d.g + (v.g - d.g) * f;
            col[k + 2] = d.b + (v.b - d.b) * f;
          }
        }
        g2.setAttribute("color", new THREE.BufferAttribute(col, 3));
        gs.push(g2);
      } else gs.push(tintGeo(g2, t.hex ?? 16777215));
    }
    let g = mergeGeos(gs);
    if (c.scale) g.scale(c.scale[0], c.scale[1], c.scale[2]);
    if (c.tint) {
      const a = new THREE.Color(c.tint.c0), b = new THREE.Color(c.tint.c1);
      const p = g.getAttribute("position");
      let col = g.getAttribute("color");
      if (!col) {
        col = new THREE.BufferAttribute(new Float32Array(p.count * 3).fill(1), 3);
        g.setAttribute("color", col);
      }
      const ax = c.tint.axis === "x" ? 0 : c.tint.axis === "y" ? 1 : 2;
      for (let i = 0; i < p.count; i++) {
        const v = ax === 0 ? p.getX(i) : ax === 1 ? p.getY(i) : p.getZ(i);
        const t = Math.min(1, Math.max(0, (v - c.tint.from) / (c.tint.to - c.tint.from)));
        const r = a.r + (b.r - a.r) * t, gg = a.g + (b.g - a.g) * t, bb = a.b + (b.b - a.b) * t;
        if (c.tint.keep) col.setXYZ(i, col.getX(i) * r, col.getY(i) * gg, col.getZ(i) * bb);
        else col.setXYZ(i, r, gg, bb);
      }
      col.needsUpdate = true;
    }
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
    for (const f of r.frusta ?? []) gs.push(tintGeo(frustum(f.slice(1)), f[0]));
    for (const cy of r.cyls ?? []) {
      const g2 = new THREE.CylinderGeometry(
        cy.rt,
        cy.rb,
        cy.h,
        cy.seg ?? 12,
        1,
        cy.open ?? false,
        cy.th0 ?? 0,
        cy.thLen ?? Math.PI * 2
      );
      if (r.uv === "culm") culmUV(g2, cy.rt, cy.h, r.uvScale ?? 1, cy.vOff ?? 0);
      if (cy.rx) g2.rotateX(cy.rx);
      if (cy.ry) g2.rotateY(cy.ry);
      if (cy.rz) g2.rotateZ(cy.rz);
      g2.translate(cy.at[0], cy.at[1], cy.at[2]);
      gs.push(tintGeo(g2, cy.hex));
    }
    for (const l of r.lathes ?? []) {
      const g2 = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false, l.weldSeam === true);
      if (l.rx) g2.rotateX(l.rx);
      if (l.ry) g2.rotateY(l.ry);
      if (l.rz) g2.rotateZ(l.rz);
      if (l.at) g2.translate(l.at[0], l.at[1], l.at[2]);
      gs.push(tintGeo(g2, l.hex));
    }
    for (const s of r.spokes ?? []) {
      const g2 = spokes(s.rHub, s.rRim, s.halfW, s.n, s.hex, s.t ?? 6e-3, s.prism ?? false);
      if (s.rx) g2.rotateX(s.rx);
      if (s.ry) g2.rotateY(s.ry);
      if (s.rz) g2.rotateZ(s.rz);
      if (s.at) g2.translate(s.at[0], s.at[1], s.at[2]);
      gs.push(g2);
    }
    for (const t of r.tubes ?? []) gs.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
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
    if (t.kind === "paint") tex = paintTile(t.size ?? 512, t.seed ?? 17, t);
    if (t.kind === "corrugation") tex = corrugationTile(t.size ?? 512, t.pitch ?? 12, t.low ?? 0.7, t.seed ?? 3);
    if (t.kind === "grime") tex = grimeTile(t.size ?? 512, t.seed ?? 11, t);
    if (t.kind === "zinc") tex = zincTile(t.size ?? 512, t.seed ?? 19, t);
    if (t.kind === "fur") tex = furTile(t.size ?? 512, t.seed ?? 13, t);
    if (t.kind === "chainlink") tex = chainlinkTile(t.size ?? 256, t.wire ?? 0.09, t.seed ?? 4);
    if (t.kind === "bamboo") tex = bambooTile(t.size ?? 512, t.strips ?? 10, t.seed ?? 6);
    if (t.kind === "stripes") tex = stripeTile(t.size ?? 256, t.bands ?? 8, t.a, t.b, t.seed ?? 9, t);
    if (t.kind === "poster") tex = posterTile(t.size ?? 512, t.seed ?? 8, t.lines ?? []);
    if (t.kind === "pebble") tex = pebbleTile(t.size ?? 512, t.seed ?? 21, t);
    if (t.kind === "tread") tex = treadTile(t.size ?? 256, t.seed ?? 23, t);
    if (t.kind === "tyre") tex = tyreTile(t.size ?? 256, t.seed ?? 29, t);
    if (t.kind === "culm") tex = culmTile(t.size ?? 512, t.seed ?? 31);
    if (t.kind === "sawn") tex = sawnTile(t.size ?? 512, t.seed ?? 43, t);
    if (t.kind === "thatch") tex = thatchTile(t.size ?? 512, t.seed ?? 37, t);
    if (t.kind === "tarp") tex = tarpTile(t.size ?? 512, t.seed ?? 41, t);
    if (t.kind === "galv") tex = galvTile(t.size ?? 512, t.seed ?? 47, t);
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
function createModel(options = {}) {
  return createObjectModel(void 0, options);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogV2F0ZXItRmlsbGVkIFBsYXN0aWMgQmFycmllciAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyxcbiAqIGluc3RhbmNpbmcgYW5kIHRoZSBsYXRoZSBoZWxwZXJzIGJlbG93IGFyZSBoYW5kLXJvbGxlZCAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXNcbiAqIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSAxLjIgeCAwLjggeCAwLjUgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgK1ggYWxvbmcgdGhlIHJ1bi5cbiAqIEJ1ZGdldCAobWVkaXVtKTogPD0yMDAwIHRyaWFuZ2xlcywgPD0yIGRyYXcgY2FsbHMsIDw9MiBtYXRlcmlhbHMsIDw9NCB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgU1RSRUVUIEFORCBWRU5ET1IgUFJPUFMgLS0gYSBjb25lLCBhIGJhcnJpZXIsIGEgY2FydCwgYSBzdG9vbC4gVGhlXG4gKiBzaGFyZWQgdm9jYWJ1bGFyeSBpcyB0aGUgVElOVEVEIEJPWCBhbmQgdGhlIHBvbHlsaW5lIFRVQkUgbWVyZ2VkIGludG8gb25lIGdlb21ldHJ5IHBlciBtYXRlcmlhbCxcbiAqIHdpdGggZXZlcnkgY29sb3VyIGRpZmZlcmVuY2UgaW5zaWRlIGEgbWF0ZXJpYWwgY2FycmllZCBhcyBhIHZlcnRleCBjb2xvdXIgb24gYSBXSElURSBtYXRlcmlhbCxcbiAqIGFuZCBzdXJmYWNlIGlkZW50aXR5IChjb3JydWdhdGlvbiwgZ3JpbWUgd2FzaCwgbW9zcywgcGxhbmsgam9pbnRzLCBydXN0KSBkZWxpdmVyZWQgYXMgT05FXG4gKiBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSBwZXIgbWF0ZXJpYWwgcmF0aGVyIHRoYW4gYXMgZ2VvbWV0cnkgb3IgYSBwcm9jZWR1cmFsIHRleHR1cmUgc2V0LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXaGVyZSB0aGlzIHByb3AncyBzaGlwcGVkIGZpbGVzIGxpdmUsIHdpdGggYSB0cmFpbGluZyBzbGFzaC5cbiAgICpcbiAgICogVGhlIG1hcHMgYXJlIHJlY29yZGVkIGFzIGJhcmUgZmlsZW5hbWVzIGJlY2F1c2UgdGhlIGJ1bmRsZSBpcyBFVkFMVUFURURcbiAgICogcmF0aGVyIHRoYW4gaW1wb3J0ZWQ6IGl0IGhhcyBubyBpbXBvcnQubWV0YSBhbmQgbm8gY3VycmVudFNjcmlwdCwgc28gaXRcbiAgICogY2Fubm90IHNlZSBpdHMgb3duIFVSTC4gRXZlcnkgaG9zdCBkZXJpdmVzIHRoaXMgZnJvbSB0aGUgbW9kdWxlIFVSTC5cbiAgICovXG4gIGJhc2VVcmw/OiBzdHJpbmc7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwid2F0ZXItZmlsbGVkLXBsYXN0aWMtYmFycmllclwiLFxuICAgIFwibmFtZVwiOiBcIldhdGVyLUZpbGxlZCBQbGFzdGljIEJhcnJpZXJcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJXYXRlckZpbGxlZFBsYXN0aWNCYXJyaWVyXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDEuMiB4IDAuOCB4IDAuNSBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCArWCBhbG9uZyB0aGUgcnVuLlxcbiAqIEJ1ZGdldCAobWVkaXVtKTogPD0yMDAwIHRyaWFuZ2xlcywgPD0yIGRyYXcgY2FsbHMsIDw9MiBtYXRlcmlhbHMsIDw9NCB1bmlxdWUgZ2VvbWV0cmllcy5cIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJwbGFzdGljXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJ0aWxlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJwbGFzdGljXCIsXG4gICAgICAgIFwia2luZFwiOiBcImdyaW1lXCIsXG4gICAgICAgIFwic2l6ZVwiOiAyNTYsXG4gICAgICAgIFwic2VlZFwiOiAxNzEsXG4gICAgICAgIFwiYmFzZVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDAuNzE5XG4gICAgICAgIF0sXG4gICAgICAgIFwid2FzaFwiOiBbXG4gICAgICAgICAgMC42LFxuICAgICAgICAgIDAuNjcsXG4gICAgICAgICAgMVxuICAgICAgICBdLFxuICAgICAgICBcIndhc2hBbHBoYVwiOiAwLjkyLFxuICAgICAgICBcImNvdmVyYWdlXCI6IDAuMzQsXG4gICAgICAgIFwic3RyZWFrc1wiOiAxNixcbiAgICAgICAgXCJibG90Y2hlc1wiOiA2NCxcbiAgICAgICAgXCJydWJzXCI6IDI2LFxuICAgICAgICBcInJ1YlwiOiBbXG4gICAgICAgICAgMC4yNixcbiAgICAgICAgICAwLjI0LFxuICAgICAgICAgIDAuM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiY29tcG9uZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwic2hlbGxcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJSb3RvbW91bGRlZCBzaGVsbFwiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJwbGFzdGljXCIsXG4gICAgICAgICAgXCJ1dlwiOiBcImhlaWdodFwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAwLjgsXG4gICAgICAgICAgXCJjb2xsaWRlclwiOiB7XG4gICAgICAgICAgICBcInNoYXBlXCI6IFwiYm94XCIsXG4gICAgICAgICAgICBcImxvY2FsQ2VudGVyXCI6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC40LFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJoYWxmRXh0ZW50c1wiOiBbXG4gICAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgICAgMC40LFxuICAgICAgICAgICAgICAwLjI1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJub3Rlc1wiOiBcIkRlY2xhcmVkIG9uIHRoZSBhc3NldCBhcyBib3g6IG9uZSBwcm94eSBvdmVyIHRoZSB3aG9sZSBiYXJyaWVyLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImV4dHJ1ZGVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI1LFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yNSxcbiAgICAgICAgICAgICAgICAgIDAuMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgICAgIDAuMzZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTEsXG4gICAgICAgICAgICAgICAgICAwLjU2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjA5NSxcbiAgICAgICAgICAgICAgICAgIDAuNjRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgICAgICAgMC43XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgICAgICAgIDAuOFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDc1LFxuICAgICAgICAgICAgICAgICAgMC44XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4wNzUsXG4gICAgICAgICAgICAgICAgICAwLjdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjA5NSxcbiAgICAgICAgICAgICAgICAgIDAuNjRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjExLFxuICAgICAgICAgICAgICAgICAgMC41NlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMTQsXG4gICAgICAgICAgICAgICAgICAwLjM2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4yNSxcbiAgICAgICAgICAgICAgICAgIDAuMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMjUsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInowXCI6IC0wLjUxLFxuICAgICAgICAgICAgICBcInoxXCI6IDAuNTEsXG4gICAgICAgICAgICAgIFwicnlcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcImhleFwiOiAxNDI0NjQ2NFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE0MjQ2NDY0LFxuICAgICAgICAgICAgICAtMC41NTUsXG4gICAgICAgICAgICAgIDAuNzIwMDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgMC4xM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTQyNDY0NjQsXG4gICAgICAgICAgICAgIDAuNTU1LFxuICAgICAgICAgICAgICAwLjcwMDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgICAgMC4xNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTAxMTAyNDAsXG4gICAgICAgICAgICAgIDAuNjAwOCxcbiAgICAgICAgICAgICAgMC43MDAwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjAwMTYsXG4gICAgICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgICAgIDAuMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE0MjQ2NDY0LFxuICAgICAgICAgICAgICAtMC41NTUsXG4gICAgICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgICAgIDAuMzRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE0MjQ2NDY0LFxuICAgICAgICAgICAgICAwLjU1NSxcbiAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgMC4zNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTQyNDY0NjQsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuODA4LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgIDAuMDE2LFxuICAgICAgICAgICAgICAwLjE2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMjY5NzM0MyxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC40OCxcbiAgICAgICAgICAgICAgMC4xMjM1MDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgMC45MixcbiAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgMC4wMDMsXG4gICAgICAgICAgICAgIC0wLjE0ODg4OTk0NzYwOTQ5NzI1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMjY5NzM0MyxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4yOCxcbiAgICAgICAgICAgICAgMC4xNzUzNDYxNTM4NDYxNTM4NSxcbiAgICAgICAgICAgICAgMC45MixcbiAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgMC4wMDMsXG4gICAgICAgICAgICAgIC0wLjQwMDI0MDY1NzAzMzk3NDEsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEyNjk3MzQzLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjQ4LFxuICAgICAgICAgICAgICAtMC4xMjM1MDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgMC45MixcbiAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgMC4wMDMsXG4gICAgICAgICAgICAgIDAuMTQ4ODg5OTQ3NjA5NDk3MjUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEyNjk3MzQzLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjI4LFxuICAgICAgICAgICAgICAtMC4xNzUzNDYxNTM4NDYxNTM4NSxcbiAgICAgICAgICAgICAgMC45MixcbiAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgMC4wMDMsXG4gICAgICAgICAgICAgIDAuNDAwMjQwNjU3MDMzOTc0MSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTAxMTAyNDAsXG4gICAgICAgICAgICAgIC0wLjMsXG4gICAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAgIDAuMjUwOCxcbiAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgICAgMC4wMDE2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMDExMDI0MCxcbiAgICAgICAgICAgICAgLTAuMyxcbiAgICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgICAgLTAuMjUwOCxcbiAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgICAgMC4wMDE2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMDExMDI0MCxcbiAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAwLjAzLFxuICAgICAgICAgICAgICAwLjI1MDgsXG4gICAgICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAgIDAuMDAxNlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTAxMTAyNDAsXG4gICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgICAgLTAuMjUwOCxcbiAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgICAgMC4wMDE2XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImN5bHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuODI4MDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjAyNSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTIsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDI3NjMzMDZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC44NDQwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjAzNSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAzNSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDA4LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMixcbiAgICAgICAgICAgICAgXCJoZXhcIjogMzgxNTk5NFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIC8vIENPTE9SIGhhcyB0byBiZSBjYXJyaWVkIHRvbywgYW5kIGl0IGlzIGVhc3kgdG8gZm9yZ2V0OiB0aGlzIGZ1bmN0aW9uIGNvcGllZCBwb3NpdGlvbiwgbm9ybWFsXG4gIC8vIGFuZCB1diBvbmx5LCBhbmQgdGhlIG1vc3F1ZSdzIHJpYmJlZCBkb21lcyBsb3N0IHRoZWlyIGdyZWVuLWFuZC1wYWxlIHN0cmlwaW5nIHRoZSBtb21lbnQgdGhleVxuICAvLyB3ZXJlIG1lcmdlZCB3aXRoIGFueXRoaW5nLiBUaGUgZmFpbHVyZSBpcyBzaWxlbnQgLS0gdGhlIGRvbWUgcmVuZGVycywgaW4gb25lIGZsYXQgY29sb3VyIC0tIGFuZFxuICAvLyB0b29rIGEgd3JvbmcgdGhlb3J5IGFib3V0IHNSR0IgZ2FtbWEgYmVmb3JlIHRoZSBhdHRyaWJ1dGUgbGlzdCB3YXMgcmVhZC4gQW55IGlucHV0IGNhcnJ5aW5nIGFcbiAgLy8gY29sb3VyIG1lYW5zIGV2ZXJ5IGlucHV0IGdldHMgb25lLCB3aGl0ZSB3aGVyZSBpdCBoYWQgbm9uZS5cbiAgY29uc3QgYW55Q29sb3IgPSBwYXJ0cy5zb21lKChnKSA9PiAhIWcuZ2V0QXR0cmlidXRlKCdjb2xvcicpKTtcbiAgY29uc3QgY29sb3IgPSBhbnlDb2xvciA/IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKS5maWxsKDEpIDogbnVsbDtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCBjID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgICBpZiAoY29sb3IgJiYgYykgeyBjb2xvclsodiArIGkpICogM10gPSBjLmdldFgoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMV0gPSBjLmdldFkoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMl0gPSBjLmdldFooaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbG9yKSBvdXQuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3IsIDMpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByVG9wOiBudW1iZXIsIHJCb3Q6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCwgckJvdCwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuXG4vKipcbiAqIFJldm9sdmUgYSBwcm9maWxlIGFib3V0ICtZLiBgcHRzYCBhcmUgW3JhZGl1cywgeV0gaW4gbWV0cmVzLCBib3R0b20gdG8gdG9wLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNoYXBlIHZvY2FidWxhcnkgdGhlIHdob2xlIG1vbnVtZW50YWwgc2V0IGlzIGJ1aWx0IGZyb20gLS0gYSBjaGVkaSdzIGJlbGwsIGEgcHJhbmcnc1xuICogY29ybi1jb2IgdGFwZXIsIGEgZG9tZSwgYSByaW5nZWQgc3BpcmUgYXJlIGFsbCBvbmUgcHJvZmlsZSBlYWNoLiBUd28gdGhpbmdzIGFyZSB3b3J0aCBzdGF0aW5nXG4gKiBiZWNhdXNlIGJvdGggY29zdCBhIHJlYnVpbGQgdG8gbGVhcm46XG4gKlxuICogLSBMYXRoZUdlb21ldHJ5IGlzIE9QRU4gYXQgdG9wIGFuZCBib3R0b20uIEEgcHJvZmlsZSB0aGF0IGRvZXMgbm90IGNsb3NlIG9uIHRoZSBheGlzIChyYWRpdXMgMClcbiAqICAgbGVhdmVzIGEgaG9sZSB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZHMgYXMgYmFja2dyb3VuZCBlbmNsb3NlZCBieSB0aGUgc2lsaG91ZXR0ZS4gQ2xvc2UgaXQsIG9yXG4gKiAgIGNhcCBpdCB3aXRoIHdoYXQgc2l0cyBhYm92ZS5cbiAqIC0gUkFESUFMIFNFR01FTlQgQ09VTlQgaXMgdGhlIHRyaWFuZ2xlIGJ1ZGdldCdzIG1haW4gbGV2ZXIgaGVyZSBhbmQgaXQgaXMgcGVyLWxhdGhlOiBhIHByb2ZpbGUgb2ZcbiAqICAgbiBwb2ludHMgYXQgcyBzZWdtZW50cyBpcyAyKihuLTEpKnMgdHJpYW5nbGVzLiBBIDI0LXJpbmcgc3BpcmUgYXQgMzIgc2VnbWVudHMgaXMgMSw0NzJcbiAqICAgdHJpYW5nbGVzIG9uIGl0cyBvd24sIHdoaWNoIGlzIHdoeSB0aGUgbG93LXJlbGllZiByaW5ncyBhcmUgYSBwcm9maWxlIHJhdGhlciB0aGFuIDI0IHJpbmdzLlxuICovXG4vKiogTGF0aGVHZW9tZXRyeSBzaGFyZXMgdGhlIGNvcm5lciB2ZXJ0ZXggYmV0d2VlbiBhbiBlbmQgZGlzYyBhbmQgdGhlIHNpZGUgd2FsbCwgc29cbiAqICBjb21wdXRlVmVydGV4Tm9ybWFscyB0aWx0cyB0aGUgd2FsbCdzIGZpcnN0IHJpbmcgNDUgZGVncmVlcyB0b3dhcmQgdGhlIGRpc2MgYW5kIHRoZSBoYXJuZXNzIHNoYWRlc1xuICogIGEgZGFyayBncmFkaWVudCB0aGVyZSAtLSBhIHJpbmcgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgYXMgYSBIT0xFIHVuZGVyIHRoZSBzdGFpbmxlc3MgYmluJ3MgY2FwLlxuICogIEluc2VydGluZyBhIHBvaW50IDAuOCBtbSBwYXN0IGV2ZXJ5IHNoYXJwIGNvcm5lciAoPiA3MCBkZWdyZWVzKSBjb25maW5lcyB0aGUgYXZlcmFnZWQgbm9ybWFsIHRvIHRoYXRcbiAqICBzbGl2ZXIuIENvc3RzIG9uZSByaW5nIHBlciBjb3JuZXI7IHBhc3MgYHNoYXJwID0gZmFsc2VgIHdoZXJlIHRoZSBidWRnZXQgY2Fubm90IGNhcnJ5IGl0LiAqL1xuZnVuY3Rpb24gc3BsaXRDb3JuZXJzKHB0czogbnVtYmVyW11bXSwgbWluRGVnID0gNzAsIGVwcyA9IDAuMDAwOCk6IG51bWJlcltdW10ge1xuICBjb25zdCBvdXQ6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwID0gcHRzW2ldLCBhID0gcHRzW2kgLSAxXSwgYiA9IHB0c1tpICsgMV07XG4gICAgbGV0IHNoYXJwID0gZmFsc2U7XG4gICAgaWYgKGEgJiYgYikge1xuICAgICAgY29uc3QgdXggPSBwWzBdIC0gYVswXSwgdXkgPSBwWzFdIC0gYVsxXSwgdnggPSBiWzBdIC0gcFswXSwgdnkgPSBiWzFdIC0gcFsxXTtcbiAgICAgIGNvbnN0IGx1ID0gTWF0aC5oeXBvdCh1eCwgdXkpLCBsdiA9IE1hdGguaHlwb3QodngsIHZ5KTtcbiAgICAgIGlmIChsdSA+IDAgJiYgbHYgPiAwKSBzaGFycCA9IE1hdGguYWNvcyhNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgKHV4ICogdnggKyB1eSAqIHZ5KSAvIChsdSAqIGx2KSkpKSA+IG1pbkRlZyAqIE1hdGguUEkgLyAxODA7XG4gICAgICBpZiAoc2hhcnAgJiYgbHUgPiAzICogZXBzKSBvdXQucHVzaChbcFswXSAtIHV4IC8gbHUgKiBlcHMsIHBbMV0gLSB1eSAvIGx1ICogZXBzXSk7XG4gICAgICBvdXQucHVzaChwKTtcbiAgICAgIGlmIChzaGFycCAmJiBsdiA+IDMgKiBlcHMpIG91dC5wdXNoKFtwWzBdICsgdnggLyBsdiAqIGVwcywgcFsxXSArIHZ5IC8gbHYgKiBlcHNdKTtcbiAgICB9IGVsc2Ugb3V0LnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIGB3ZWxkU2VhbWAgYXZlcmFnZXMgdGhlIG5vcm1hbHMgb2YgdGhlIGZpcnN0IGFuZCBsYXN0IHJhZGlhbCBjb2x1bW4sIHdoaWNoIGlzIHdoYXQgY2xvc2VzIHRoZVxuICogIHJldm9sdmUncyBTSEFESU5HIHNlYW0uIExhdGhlR2VvbWV0cnkgYWxyZWFkeSBkb2VzIHRoaXMgaXRzZWxmIC0tIGl0IGV4cGxpY2l0bHkgYXZlcmFnZXMgdGhlIHR3b1xuICogIGVuZCBjb2x1bW5zIGZvciBhIGZ1bGwgMipQSSBzd2VlcCAtLSBhbmQgdGhlIGBjb21wdXRlVmVydGV4Tm9ybWFscygpYCBiZWxvdyB0aHJvd3MgdGhhdCB3b3JrXG4gKiAgYXdheSwgYmVjYXVzZSBhIHJlY29tcHV0ZSBzZWVzIHRoZSBzZWFtIGFzIHR3byB1bmNvbm5lY3RlZCBlZGdlcyBhbmQgZ2l2ZXMgZWFjaCB0aGUgbm9ybWFsIG9mXG4gKiAgdGhlIGZhY2VzIG9uIGl0cyBvd24gc2lkZSBvbmx5LiBPbiBhIG1hdHRlIHByb3AgdGhlIHJlc3VsdGluZyBjcmVhc2UgaXMgaW52aXNpYmxlLCB3aGljaCBpcyB3aHlcbiAqICBpdCBzdXJ2aXZlZDsgb24gYSBzYXRpbiBtZXRhbCBpdCBpcyBhIGhhcmQgdmVydGljYWwgbGluZSBkb3duIHRoZSByZXZvbHZlLiBNZWFzdXJlZCBvbiB0aGVcbiAqICBub29kbGUtc2hvcCB0YWJsZSdzIHJpbSBhdCBhemltdXRoIDA6IGEgMzEtbGV2ZWwgbHVtYSBzdGVwIGF0IHg9NTEyICgyNDUgLT4gMjE0IGF0IHk9MjU4KSxcbiAqICBSRVZFUlNJTkcgdG8gKzI3IGF0IHk9MjY2IC0tIGEgZGlzY29udGludWl0eSwgbm90IGEgZ3JhZGllbnQuXG4gKiAgRGVmYXVsdCBPRkYgc28gbm8gYWxyZWFkeS1lbWl0dGVkIHByb3AgY2hhbmdlcyBzaGFkaW5nIGlmIGl0IGlzIGV2ZXIgcmUtZW1pdHRlZDsgdGhlIHJlY29tcHV0ZVxuICogIGlzIHN0aWxsIG5lZWRlZCBmb3IgdGhlIHNoYXJwLWNvcm5lciBzcGxpdHMsIHNvIHRoaXMgd2VsZHMgYWZ0ZXJ3YXJkcyByYXRoZXIgdGhhbiBza2lwcGluZyBpdC4gKi9cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwLCBzaGFycCA9IHRydWUsIHdlbGRTZWFtID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSAoc2hhcnAgPyBzcGxpdENvcm5lcnMocHRzKSA6IHB0cykubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgaWYgKHdlbGRTZWFtKSB7XG4gICAgLy8gTGF0aGVHZW9tZXRyeSBsYXlzIG91dCAoc2VnICsgMSkgY29sdW1ucyBvZiBgcm93c2AgdmVydGljZXM7IGNvbHVtbiAwIGFuZCBjb2x1bW4gc2VnIGFyZSB0aGVcbiAgICAvLyBzYW1lIHBsYWNlIGluIHNwYWNlLiBBdmVyYWdlIHRoZSBwYWlyIGFuZCB3cml0ZSBpdCBiYWNrIHRvIGJvdGguXG4gICAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgICBjb25zdCByb3dzID0gbi5jb3VudCAvIChzZWcgKyAxKTtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHJvd3M7IHIrKykge1xuICAgICAgY29uc3QgYSA9IHIsIGIgPSBzZWcgKiByb3dzICsgcjtcbiAgICAgIGNvbnN0IHggPSBuLmdldFgoYSkgKyBuLmdldFgoYiksIHkgPSBuLmdldFkoYSkgKyBuLmdldFkoYiksIHogPSBuLmdldFooYSkgKyBuLmdldFooYik7XG4gICAgICBjb25zdCBsID0gTWF0aC5oeXBvdCh4LCB5LCB6KSB8fCAxO1xuICAgICAgbi5zZXRYWVooYSwgeCAvIGwsIHkgLyBsLCB6IC8gbCk7XG4gICAgICBuLnNldFhZWihiLCB4IC8gbCwgeSAvIGwsIHogLyBsKTtcbiAgICB9XG4gICAgbi5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIElOREVYRUQsIHdpdGggc2hhcmVkIHJpbmcgdmVydGljZXMsIHNvIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGF2ZXJhZ2VzIGFjcm9zcyB0aGUgcXVhZHMgYW5kIHRoZVxuICAvLyBzdXJmYWNlIHNoYWRlcyBzbW9vdGguIFRoZSBmaXJzdCBidWlsZCBlbWl0dGVkIGxvb3NlIHRyaWFuZ2xlcywgYW5kIGEgZmxhdC1zaGFkZWQgc29mdCBib2R5XG4gIC8vIHNob3dzIGV2ZXJ5IHN0YXRpb24gYXMgYSBjcmVhc2UgLS0gYSByZWNsaW5pbmcgZmlndXJlIHRoYXQgbG9va2VkIGNydW1wbGVkIHJhdGhlciB0aGFuIGRyYXBlZC5cbiAgLy9cbiAgLy8gQSBzaXh0aCBzdGF0aW9uIGVsZW1lbnQgYGZsYXRZYCBDTEFNUFMgdGhlIHJpbmcncyB1bmRlcnNpZGUgdG8gdGhhdCBoZWlnaHQuIEEgYm9keSByZXN0aW5nIG9uXG4gIC8vIHRoZSBncm91bmQgaXMgbm90IGEgZmxvYXRpbmcgZWxsaXBzZTogaXQgc3ByZWFkcyB3aGVyZSBpdCBiZWFycywgYW5kIGFuIHVuY2xhbXBlZCB0dWJlIHJlYWRzIGFzXG4gIC8vIGEgc2F1c2FnZSBvbiBhIHRhYmxlLiBUaGUgY2xhbXAgaXMgYSBzb2Z0IG9uZSAtLSB0aGUgcmluZyBrZWVwcyBpdHMgd2lkdGggYW5kIGxvc2VzIGl0cyBkcm9vcCAtLVxuICAvLyBzbyB0aGUgY3JlYXNlIGl0IGxlYXZlcyBpcyB0aGUgY29udGFjdCBlZGdlIHJhdGhlciB0aGFuIGEgY3V0LlxuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFt6LCBjeCwgY3ksIHJ4LCByeSwgZmxhdFldID0gc3RhdGlvbnNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLnNpbih0aCkgKiByeDtcbiAgICAgIGxldCB5ID0gY3kgKyBNYXRoLmNvcyh0aCkgKiByeTtcbiAgICAgIGlmIChmbGF0WSAhPT0gdW5kZWZpbmVkICYmIHkgPCBmbGF0WSkgeSA9IGZsYXRZO1xuICAgICAgcG9zLnB1c2goeCwgeSwgeik7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgICAgaWR4LnB1c2goYSwgYiwgYywgYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KChwb3MubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLnNldEluZGV4KGlkeCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBjdXJsZWQgaG9ybjogYG5gIHRhcGVyaW5nIGJveCBzZWdtZW50cyBzYW1wbGVkIGFsb25nIGEgc2luZSwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudC5cbiAqIFNoYXJlZCBieSB0aGUgdWJvc290J3MgY2hvZmEsIHRoZSBwcmFuZydzIHRyaWRlbnQgcHJvbmdzIGFuZCB0aGUgQ2hpbmVzZSBzaHJpbmUncyBmbHlpbmcgZWF2ZXMsXG4gKiBiZWNhdXNlIGFsbCB0aHJlZSBhcmUgdGhlIHNhbWUgcHJvYmxlbSAtLSBhIHN0cmFpZ2h0IHNwaWtlIGF0IGEgcm9vZiBlbmQgcmVhZHMgYXMgYSBsaWdodG5pbmcgcm9kXG4gKiBhbmQgdGhlIGN1cmwgaXMgdGhlIHdob2xlIGZlYXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGN1cmxlZEhvcm4ocmVhY2g6IG51bWJlciwgcmlzZTogbnVtYmVyLCB0aGljazogbnVtYmVyLCBuID0gNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtyZWFjaCAqIE1hdGguc2luKHUgKiBNYXRoLlBJICogMC40NiksIHJpc2UgKiB1XTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBjb25zdCBhID0gYXQoaiAvIG4pLCBiID0gYXQoKGogKyAxKSAvIG4pO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgdyA9IHRoaWNrICogKDEgLSBqIC8gbikgKyB0aGljayAqIDAuMjg7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBNYXRoLmh5cG90KGR4LCBkeSkgKyB0aGljayAqIDAuMiwgdyk7XG4gICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZlaGljbGUgaGVscGVycyAqL1xuXG4vKiogUGFpbnQgYSB3aG9sZSBnZW9tZXRyeSBvbmUgdmVydGV4IGNvbG91ci4gRXZlcnkgdmVoaWNsZSBtYXRlcmlhbCBoZXJlIGlzIFdISVRFIHdpdGhcbiAqICB2ZXJ0ZXhDb2xvcnMgb24sIHNvIGEgY29sb3VyIGRpZmZlcmVuY2UgY29zdHMgYW4gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgbWF0ZXJpYWw6IHRoZSBib2R5J3NcbiAqICB0d28tdG9uZSwgdGhlIHR5cmUgYWdhaW5zdCBpdHMgcmltLCBhbiBhbWJlciBpbmRpY2F0b3Igb24gYSBibGFjayBidW1wZXIgYWxsIHJpZGUgb25lIHNoYWRlci5cbiAqICBWZXJ0ZXggY29sb3VycyBtdWx0aXBseSBpbiBMSU5FQVIgc3BhY2UsIHNvIHRoZSBoZXggaXMgY29udmVydGVkIHRocm91Z2ggVEhSRUUuQ29sb3IsIHdoaWNoXG4gKiAgZG9lcyB0aGUgc1JHQi10by1saW5lYXIgc3RlcC4gKi9cbmZ1bmN0aW9uIHRpbnRHZW8oZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgaGV4OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoaGV4KTtcbiAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7IH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQm94LXByb2plY3Qgd29ybGQtbWV0cmUgVVZzIHNvIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgKG11ZCwgcnVzdCwgY29ycnVnYXRpb24pIHJlcGVhdHNcbiAqICBhdCBhIHJlYWwgc2l6ZSBvbiBldmVyeSBmYWNlLiBgc2NhbGVgIGlzIG1ldHJlcyBwZXIgdGlsZS4gVGhlIGRvbWluYW50IG5vcm1hbCBheGlzIHBpY2tzIHRoZVxuICogIHBhaXIgb2Ygd29ybGQgYXhlcyB1c2VkLCBzbyBhIHJvb2YgcmVhZHMgKHgsIHopIGFuZCBhIHNpZGUgcmVhZHMgKHosIHkpLiAqL1xuZnVuY3Rpb24gd29ybGRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF5ID0gTWF0aC5hYnMobnJtLmdldFkoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBsZXQgdTogbnVtYmVyLCB2OiBudW1iZXI7XG4gICAgaWYgKGF4ID49IGF5ICYmIGF4ID49IGF6KSB7IHUgPSBwLmdldFooaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICBlbHNlIGlmIChheSA+PSBheikgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRaKGkpOyB9XG4gICAgZWxzZSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSB2IC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKlxuICogU0lERS1QUk9GSUxFIEVYVFJVU0lPTjogYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzICh0aGUgdmVoaWNsZSdzIHNpZGUgc2lsaG91ZXR0ZSwgd2hlZWxcbiAqIGFyY2hlcyBpbmNsdWRlZCBhcyBub3RjaGVzKSBzd2VwdCBhY3Jvc3MgdGhlIGZ1bGwgd2lkdGgsIHRoZW4gc2hhcGVkIHBlciB2ZXJ0ZXg6XG4gKlxuICogIC0gYHR1bWJsZWAgIG5hcnJvd3MgdGhlIHNlY3Rpb24gYWJvdmUgdGhlIGJlbHQgbGluZSAtLSB4IGlzIHNjYWxlZCBieSAoMSAtIGsgKiB0KSB3aGVyZSB0IHJ1bnNcbiAqICAgICAgICAgICAgICAwIGF0IGBiZWx0YCB0byAxIGF0IGByb29mYC4gVGhhdCBpcyB0aGUgdHVtYmxlaG9tZSBvZiBhIHJlYWwgY2FyIGJvZHkgYW5kIGlzIHdoYXRcbiAqICAgICAgICAgICAgICBzdG9wcyB0aGUgZ2xhc3Nob3VzZSByZWFkaW5nIGFzIGEgYm94IG9uIGEgYm94LlxuICogIC0gYHBsYW5gICAgIHJvdW5kcyB0aGUgcGxhbiBhdCB0aGUgbm9zZSBhbmQgdGFpbDogYW4gb3B0aW9uYWwgbGlzdCBvZiBbeiwgeFNjYWxlXSBzdGF0aW9uc1xuICogICAgICAgICAgICAgIGludGVycG9sYXRlZCBhbG9uZyB6LCBzbyBhIGJvbm5ldCBjYW4gdGFwZXIgdG8gMC45IG9mIHRoZSB3aWR0aCBhdCB0aGUgYnVtcGVyIGxpbmUuXG4gKlxuICogRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBpbiBpdHMgb3duICh1LCB2LCBkZXB0aCkgZnJhbWU7IHJvdGF0ZVkoLVBJLzIpIG1hcHMgZGVwdGggdG8gLXggYW5kIHUgdG9cbiAqIHdvcmxkIHosIGFuZCB0aGUgdHJhbnNsYXRlIHJlLWNlbnRyZXMgdGhlIHNsYWIgb24geCA9IDAuIEFueSBzaGFwaW5nIGlzIGFwcGxpZWQgQUZURVIgdGhhdCwgYW5kXG4gKiBub3JtYWxzIGFyZSByZWNvbXB1dGVkIGxhc3Qgc28gdGhlIHNoYWRlZCBmYWNlcyBmb2xsb3cgdGhlIHNoYXBlZCBzdXJmYWNlLlxuICovXG5mdW5jdGlvbiBzaWRlRXh0cnVkZShwcm9maWxlOiBudW1iZXJbXVtdLCB3aWR0aDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgb3B0czogeyB0dW1ibGU/OiB7IGJlbHQ6IG51bWJlciwgcm9vZjogbnVtYmVyLCBrOiBudW1iZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbj86IG51bWJlcltdW10sIGN1cnZlU2VnbWVudHM/OiBudW1iZXIgfSA9IHt9KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHJvZmlsZVswXVswXSwgcHJvZmlsZVswXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvZmlsZS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHByb2ZpbGVbaV1bMF0sIHByb2ZpbGVbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHdpZHRoLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmVTZWdtZW50czogb3B0cy5jdXJ2ZVNlZ21lbnRzID8/IDYgfSk7XG4gIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIDAsIDApO1xuICBzaGFwZVdpZHRoKGcsIG9wdHMpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIFRoZSBwZXItdmVydGV4IHggc2hhcGluZyBzaGFyZWQgYnkgdGhlIGJvZHkgYW5kIGl0cyBnbGFzcyBiYW5kLCBzbyBhIHBhbmUgb2Zmc2V0IDUgbW0gcHJvdWQgb2ZcbiAqICB0aGUgYm9keSBzdGF5cyA1IG1tIHByb3VkIGFmdGVyIGJvdGggYXJlIG5hcnJvd2VkIGJ5IHRoZSBzYW1lIGZ1bmN0aW9uLiAqL1xuZnVuY3Rpb24gc2hhcGVXaWR0aChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSxcbiAgICAgICAgICAgICAgICAgICAgb3B0czogeyB0dW1ibGU/OiB7IGJlbHQ6IG51bWJlciwgcm9vZjogbnVtYmVyLCBrOiBudW1iZXIgfSwgcGxhbj86IG51bWJlcltdW10gfSk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgbGV0IHggPSBwLmdldFgoaSk7IGNvbnN0IHkgPSBwLmdldFkoaSksIHogPSBwLmdldFooaSk7XG4gICAgaWYgKG9wdHMudHVtYmxlKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHkgLSBvcHRzLnR1bWJsZS5iZWx0KSAvIChvcHRzLnR1bWJsZS5yb29mIC0gb3B0cy50dW1ibGUuYmVsdCkpKTtcbiAgICAgIHggKj0gMSAtIG9wdHMudHVtYmxlLmsgKiB0O1xuICAgIH1cbiAgICBpZiAob3B0cy5wbGFuICYmIG9wdHMucGxhbi5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBzdCA9IG9wdHMucGxhbjtcbiAgICAgIGxldCBzID0gc3RbMF1bMV07XG4gICAgICBpZiAoeiA8PSBzdFswXVswXSkgcyA9IHN0WzBdWzFdO1xuICAgICAgZWxzZSBpZiAoeiA+PSBzdFtzdC5sZW5ndGggLSAxXVswXSkgcyA9IHN0W3N0Lmxlbmd0aCAtIDFdWzFdO1xuICAgICAgZWxzZSBmb3IgKGxldCBrID0gMDsgayA8IHN0Lmxlbmd0aCAtIDE7IGsrKykge1xuICAgICAgICBpZiAoeiA+PSBzdFtrXVswXSAmJiB6IDw9IHN0W2sgKyAxXVswXSkge1xuICAgICAgICAgIGNvbnN0IHUgPSAoeiAtIHN0W2tdWzBdKSAvIChzdFtrICsgMV1bMF0gLSBzdFtrXVswXSk7XG4gICAgICAgICAgcyA9IHN0W2tdWzFdICsgKHN0W2sgKyAxXVsxXSAtIHN0W2tdWzFdKSAqIHU7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB4ICo9IHM7XG4gICAgfVxuICAgIHAuc2V0WChpLCB4KTtcbiAgfVxuICBwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xufVxuXG4vKiogQSBzZW1pY2lyY3VsYXIgd2hlZWwtYXJjaCBub3RjaCBhcyBwcm9maWxlIHBvaW50cywgdG8gYmUgc3BsaWNlZCBpbnRvIGEgc2lkZSBwcm9maWxlIHRoYXQgcnVuc1xuICogIGFsb25nIHRoZSBzaWxsIGZyb20gK3ogdG8gLXogKGkuZS4geiBERUNSRUFTSU5HKS4gYG5gIHNlZ21lbnRzOyB0aGUgYXJjIGlzIHRoZSBUT1AgaGFsZi4gKi9cbmZ1bmN0aW9uIGFyY2hOb3RjaCh6YzogbnVtYmVyLCB5U2lsbDogbnVtYmVyLCByOiBudW1iZXIsIG4gPSA3KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgLyBuOyAgICAgICAgICAgICAgIC8vIDAgLi4gUEksIGZyb20gK3ogcm91bmQgdGhlIHRvcCB0byAtelxuICAgIHB0cy5wdXNoKFt6YyArIE1hdGguY29zKGEpICogciwgeVNpbGwgKyBNYXRoLnNpbihhKSAqIHJdKTtcbiAgfVxuICByZXR1cm4gcHRzO1xufVxuXG4vKipcbiAqIEEgV0hFRUw6IG9uZSBsYXRoZSBhYm91dCB0aGUgYXhsZS4gVGhlIHByb2ZpbGUgcnVucyBmcm9tIHRoZSBodWIgZmFjZSBvbiBvbmUgc2lkZSBvdmVyIHRoZSByaW1cbiAqIGxpcCwgdGhlIHR5cmUgc2lkZXdhbGwsIHRoZSB0cmVhZCBhbmQgYmFjayBkb3duIHRoZSBmYXIgc2lkZSwgc28gdGhlIHdoZWVsIGlzIGEgY2xvc2VkIHNvbGlkIHdpdGhcbiAqIG5vIG9wZW4gZW5kIGZvciB0aGUgdHVybnRhYmxlIGdhdGUgdG8gcmVhZCB0aHJvdWdoLiBSZXZvbHZlZCBhYm91dCBZIGFuZCB0aGVuIGxhaWQgb24gWCwgc28gdGhlXG4gKiBheGxlIGlzIHRoZSB4IGF4aXMgYW5kIHRoZSB3aGVlbCByb2xscyBhYm91dCBpdCAtLSB3aGljaCBpcyB0aGUgYXhpcyBpdHMgcGl2b3QgZGVjbGFyZXMuXG4gKlxuICogVHdvIHZlcnRleCBjb2xvdXJzOiBgcmltSGV4YCBvbiB0aGUgaHViIGFuZCByaW0gcG9pbnRzLCBgdHlyZUhleGAgb24gdGhlIHNpZGV3YWxsIGFuZCB0cmVhZC4gVGhlXG4gKiBsYXRoZSBvcmRlcnMgdmVydGljZXMgc2VnbWVudC1tYWpvciAoaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpLCB3aGljaCBpcyB3aGF0IGxldHMgYVxuICogcGVyLXByb2ZpbGUtcG9pbnQgY29sb3VyIGJlIHdyaXR0ZW4gd2l0aG91dCBhIHNlY29uZCBnZW9tZXRyeS5cbiAqL1xuZnVuY3Rpb24gd2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIGRpc2ggPSAwLjU1KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXG4gICAgWzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuMzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuNjIsIC1odyAqIDAuODBdLCBbclJpbSwgLWh3ICogMC44Nl0sIFtyUmltLCAtaHcgKiAwLjk4XSxcbiAgICBbclR5cmUgKiAwLjkzLCAtaHddLCBbclR5cmUsIC1odyAqIDAuNzJdLCBbclR5cmUsIGh3ICogMC43Ml0sIFtyVHlyZSAqIDAuOTMsIGh3XSxcbiAgICBbclJpbSwgaHcgKiAwLjk4XSwgW3JSaW0sIGh3ICogMC44Nl0sIFtyUmltICogMC42MiwgaHcgKiAwLjgwXSwgW3JSaW0gKiAwLjMwLCBodyAqIGRpc2hdLCBbMCwgaHcgKiBkaXNoXSxcbiAgXTtcbiAgY29uc3QgcmltUG9pbnQgPSAoajogbnVtYmVyKSA9PiBqIDw9IDQgfHwgaiA+PSA5O1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBzZWcpO1xuICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBjb25zdCBjdCA9IG5ldyBUSFJFRS5Db2xvcih0eXJlSGV4KSwgY3IgPSBuZXcgVEhSRUUuQ29sb3IocmltSGV4KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBjID0gcmltUG9pbnQoaSAlIHB0cy5sZW5ndGgpID8gY3IgOiBjdDtcbiAgICBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgZy5yb3RhdGVaKE1hdGguUEkgLyAyKTsgICAgLy8gbGF0aGUgYXhpcyBZIC0+IGF4bGUgb24gWFxuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogV2lyZS1zcG9rZWQgd2hlZWwgZHJlc3Npbmc6IGBuYCB0aGluIGJveGVzIHJhZGlhdGluZyBmcm9tIHRoZSBodWIsIGxhY2VkIGFsdGVybmF0ZWx5IHRvIGVhY2hcbiAqICBzaWRlIG9mIHRoZSByaW0gc28gdGhleSBjcm9zcyB0aGUgd2F5IHJlYWwgc3Bva2VzIGRvLiBNZXJnZWQgaW50byB0aGUgd2hlZWwgZ2VvbWV0cnkgc28gdGhlXG4gKiAgd2hlZWwgc3RheXMgT05FIGluc3RhbmNlZCBnZW9tZXRyeS4gKi9cbmZ1bmN0aW9uIHNwb2tlcyhySHViOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgbjogbnVtYmVyLCBoZXg6IG51bWJlciwgdCA9IDAuMDA2LCBwcmlzbSA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJICogMiAvIG47XG4gICAgY29uc3Qgc2lkZSA9IChpICUgMiA9PT0gMCA/IDEgOiAtMSkgKiBoYWxmVyAqIDAuMzU7XG4gICAgY29uc3QgbGVuID0gclJpbSAtIHJIdWI7XG4gICAgLy8gYHByaXNtYDogYW4gb3BlbiB0aHJlZS1zaWRlZCBwcmlzbSBhdCBzaXggdHJpYW5nbGVzIHdoZXJlIHRoZSBib3ggY29zdHMgdHdlbHZlIC0tIGEgd2lyZVxuICAgIC8vIHNwb2tlIGhhcyBubyByZXNvbHZhYmxlIHNlY3Rpb24gYXQgcHJvcCBkaXN0YW5jZSwgYW5kIDI4IG9mIHRoZW0gb24gdGhyZWUgd2hlZWxzIGlzIHRoZVxuICAgIC8vIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGxhcmdlIHByb3AgaW5zaWRlIGl0cyB0cmlhbmdsZSBjZWlsaW5nIGFuZCBvbmUgb3ZlciBpdFxuICAgIGNvbnN0IGcgPSBwcmlzbSA/IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHQgKiAwLjYyLCB0ICogMC42MiwgbGVuLCAzLCAxLCB0cnVlKSA6IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh0LCBsZW4sIHQpO1xuICAgIGcudHJhbnNsYXRlKDAsIHJIdWIgKyBsZW4gLyAyLCAwKTtcbiAgICBnLnJvdGF0ZVgoTWF0aC5hdGFuMihzaWRlLCBsZW4pICogMC42KTtcbiAgICBnLnJvdGF0ZVgoMCk7IGcudHJhbnNsYXRlKDAsIDAsIHNpZGUgKiAwLjUpO1xuICAgIGcucm90YXRlWChhKTsgICAgICAgICAgICAvLyByYWRpYXRlIGFyb3VuZCB0aGUgYXhsZSAoeClcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIHRpbnRHZW8obWVyZ2VHZW9zKHNlZ3MpLCBoZXgpO1xufVxuXG4vKiogQSBwb2x5bGluZSBUVUJFOiBvbmUgY3lsaW5kZXIgcGVyIHNlZ21lbnQsIGVhY2ggcm90YXRlZCBvbnRvIGl0cyBjaG9yZCwgd2l0aCBhIHNtYWxsIHNwaGVyZS1sZXNzXG4gKiAgb3ZlcmxhcCBzbyB0aGUgam9pbnRzIGNsb3NlLiBIYW5kbGViYXJzLCBjYW5vcHkgcmFpbHMsIHJvbGwgY2FnZXMgYW5kIGZyYW1lIHR1YmVzLiAqL1xuLyoqXG4gKiBgcmAgbWF5IGJlIGEgc2luZ2xlIHJhZGl1cyAoZXZlcnkgc2VnbWVudCB0aGUgc2FtZSwgdGhlIG9yaWdpbmFsIGJlaGF2aW91cikgb3IgT05FIFJBRElVUyBQRVJcbiAqIFNUQVRJT04sIHdoaWNoIHRhcGVycyB0aGUgdHViZS4gQSBjYXBwZWQgY29uc3RhbnQtcmFkaXVzIHR1YmUgZW5kcyBpbiBhIGZsYXQgZGlzYywgYW5kIG9uIHRoZVxuICogc3Bpcml0IGhvdXNlJ3MgZWF2ZSBob3JucyB0aGF0IHJlYWQgYXMgZm91ciBjdXQtb2ZmIHBvc3RzIHJhdGhlciB0aGFuIHBvaW50czsgYSBob3JuLCBhIHNwaWtlIG9yXG4gKiBhIHdoaXNrZXIgbmVlZHMgaXRzIGxhc3Qgc3RhdGlvbiBhdCB+MC4yNSBvZiB0aGUgZmFzY2lhIHJhZGl1cy4gVGhlIGpvaW50IG92ZXJsYXAgdGhhdCBoaWRlcyB0aGVcbiAqIHNlYW0gYmV0d2VlbiBzZWdtZW50cyBpcyAocmEgKyByYikgKiAwLjYsIHdoaWNoIGlzIGV4YWN0bHkgdGhlIG9sZCBgciAqIDEuMmAgd2hlbiB0aGV5IGFyZSBlcXVhbCxcbiAqIHNvIGEgbnVtYmVyIHN0aWxsIHByb2R1Y2VzIGJ5dGUtaWRlbnRpY2FsIGdlb21ldHJ5LlxuICovXG5mdW5jdGlvbiB0dWJlKHB0czogbnVtYmVyW11bXSwgcjogbnVtYmVyIHwgbnVtYmVyW10sIHNlZyA9IDgsIGhleD86IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgckF0ID0gKGk6IG51bWJlcikgPT4gKHR5cGVvZiByID09PSAnbnVtYmVyJyA/IHIgOiByW01hdGgubWluKGksIHIubGVuZ3RoIC0gMSldKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkID0gYi5jbG9uZSgpLnN1YihhKTsgY29uc3QgbGVuID0gZC5sZW5ndGgoKTtcbiAgICBpZiAobGVuIDwgMWUtNikgY29udGludWU7XG4gICAgY29uc3QgcmEgPSByQXQoaSksIHJiID0gckF0KGkgKyAxKTtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkocmIsIHJhLCBsZW4gKyAocmEgKyByYikgKiAwLjYsIHNlZywgMSwgZmFsc2UpO1xuICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgZC5ub3JtYWxpemUoKSk7XG4gICAgZy5hcHBseVF1YXRlcm5pb24ocSk7XG4gICAgY29uc3QgbSA9IGEuY2xvbmUoKS5hZGQoYikubXVsdGlwbHlTY2FsYXIoMC41KTtcbiAgICBnLnRyYW5zbGF0ZShtLngsIG0ueSwgbS56KTtcbiAgICBwYXJ0cy5wdXNoKGcpO1xuICB9XG4gIGNvbnN0IG91dCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IG91dCA6IHRpbnRHZW8ob3V0LCBoZXgpO1xufVxuXG4vKipcbiAqIEEgRkxBVCBTVFJBUCBzd2VwdCBhbG9uZyBhIHBvbHlsaW5lOiBhIGNoYWluIG9mIGJveGVzLCBlYWNoIG9yaWVudGVkIHNvIGl0cyBMRU5HVEggcnVucyBhbG9uZyB0aGVcbiAqIHNlZ21lbnQsIGl0cyBUSElDS05FU1MgYWxvbmcgdGhlIG91dHdhcmQgbm9ybWFsIGZyb20gYGFib3V0YCwgYW5kIGl0cyBXSURUSCB0YW5nZW50IHRvIHRoYXRcbiAqIHN1cmZhY2UuIFRoaXMgaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGd1YXJkIGFuZCBhIHdpcmU6IGEgYnVsa2hlYWQgbGFtcCdzIGNhZ2UgaXMgcHJlc3NlZFxuICogZmxhdCBiYXIsIGFuZCBhIHJvdW5kIHR1YmUgb2YgdGhlIHNhbWUgbWVhc3VyZWQgd2lkdGggc2hhZGVzIHRvIGEgbmFycm93IGhpZ2hsaWdodCBhbmQgcmVhZHMgYXNcbiAqIHdpcmUgLS0gd2hpY2ggaXMgdGhlIHRoaW5nIHRoaXMga2l0J3MgYXNzZXQgbm90ZXMgcnVsZSBvdXQuIEl0IGlzIGFsc28gQ0hFQVBFUiB0aGFuIGB0dWJlYDogYSBib3hcbiAqIGlzIDEyIHRyaWFuZ2xlcyBhZ2FpbnN0IGEgY2FwcGVkIDUtc2lkZWQgY3lsaW5kZXIncyAyMC5cbiAqL1xuZnVuY3Rpb24gc3RyYXAocHRzOiBudW1iZXJbXVtdLCB3OiBudW1iZXIsIHQ6IG51bWJlciwgYWJvdXQ6IG51bWJlcltdLCBoZXg/OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGMgPSBuZXcgVEhSRUUuVmVjdG9yMyhhYm91dFswXSwgYWJvdXRbMV0sIGFib3V0WzJdKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkaXIgPSBiLmNsb25lKCkuc3ViKGEpOyBjb25zdCBsZW4gPSBkaXIubGVuZ3RoKCk7XG4gICAgaWYgKGxlbiA8IDFlLTYpIGNvbnRpbnVlO1xuICAgIGRpci5ub3JtYWxpemUoKTtcbiAgICBjb25zdCBtaWQgPSBhLmNsb25lKCkuYWRkKGIpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG4gICAgLy8gT3V0d2FyZCBub3JtYWwgYXQgdGhlIG1pZHBvaW50LCByZS1vcnRob2dvbmFsaXNlZCBhZ2FpbnN0IHRoZSBydW4gc28gdGhlIGJhc2lzIHN0YXlzIHNxdWFyZVxuICAgIC8vIHdoZXJlIHRoZSBzdHJhcCBjbGltYnMgc3RlZXBseSBhbmQgdGhlIHR3byB3b3VsZCBvdGhlcndpc2UgYmUgbmVhcmx5IHBhcmFsbGVsLlxuICAgIGxldCBucm0gPSBtaWQuY2xvbmUoKS5zdWIoYyk7XG4gICAgbnJtLnN1YihkaXIuY2xvbmUoKS5tdWx0aXBseVNjYWxhcihucm0uZG90KGRpcikpKTtcbiAgICBpZiAobnJtLmxlbmd0aFNxKCkgPCAxZS0xMikgbnJtID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSkuc3ViKGRpci5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKGRpci56KSk7XG4gICAgbnJtLm5vcm1hbGl6ZSgpO1xuICAgIC8vIGRpciB4IG5ybSwgTk9UIG5ybSB4IGRpci4gVGhlIGJhc2lzIGNvbHVtbnMgYXJlIChzaWRlLCBkaXIsIG5ybSkgYWdhaW5zdCBhIGJveCdzICh3LCBsZW4sIHQpLFxuICAgIC8vIHNvIGEgcmlnaHQtaGFuZGVkIGJhc2lzIG5lZWRzIHNpZGUgeCBkaXIgPSBucm07IG5ybSB4IGRpciBnaXZlcyAtbnJtLCBhIG1pcnJvcmVkIGJhc2lzIHdpdGggYVxuICAgIC8vIG5lZ2F0aXZlIGRldGVybWluYW50LCBhbmQgZXZlcnkgc3RyYXAgcmVuZGVycyBpbnNpZGUgb3V0IC0tIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGRhcmtcbiAgICAvLyBzbGl2ZXIgcmF0aGVyIHRoYW4gYW4gb2J2aW91c2x5IGZsaXBwZWQgZmFjZSwgc28gaXQgcmVhZHMgYXMgYSBnZW9tZXRyeSBidWcsIG5vdCBhIHdpbmRpbmcgb25lLlxuICAgIGNvbnN0IHNpZGUgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNyb3NzVmVjdG9ycyhkaXIsIG5ybSkubm9ybWFsaXplKCk7XG4gICAgLy8gT3ZlcmxhcCB0aGUgam9pbnRzIGJ5IHRoZSB0aGlja25lc3Mgc28gY29uc2VjdXRpdmUgYm94ZXMgY2xvc2UgdGhlIG1pdHJlIHJhdGhlciB0aGFuXG4gICAgLy8gbGVhdmluZyBhIHdlZGdlIG9mIGRheWxpZ2h0IGF0IGV2ZXJ5IHN0YXRpb24uXG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBsZW4gKyB0LCB0KTtcbiAgICBnLmFwcGx5TWF0cml4NChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VCYXNpcyhzaWRlLCBkaXIsIG5ybSkpO1xuICAgIGcudHJhbnNsYXRlKG1pZC54LCBtaWQueSwgbWlkLnopO1xuICAgIHBhcnRzLnB1c2goZyk7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gb3V0IDogdGludEdlbyhvdXQsIGhleCk7XG59XG5cbi8qKiBBIHJvdGF0ZWQgYm94OiBbY3gsIGN5LCBjeiwgdywgaCwgZCwgcngsIHJ5LCByel0gd2l0aCB0aGUgcm90YXRpb25zIGFwcGxpZWQgaW4geCwgeSwgeiBvcmRlclxuICogIGFib3V0IHRoZSBib3gncyBvd24gY2VudHJlLiBBIGJvbm5ldCBsaXAsIGEgcmFrZWQgbWlycm9yIHN0ZW0sIGEgY2Fub3B5IHN0YXkuICovXG5mdW5jdGlvbiByYm94KGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJbM10sIGJbNF0sIGJbNV0pO1xuICBpZiAoYls2XSkgZy5yb3RhdGVYKGJbNl0pOyBpZiAoYls3XSkgZy5yb3RhdGVZKGJbN10pOyBpZiAoYls4XSkgZy5yb3RhdGVaKGJbOF0pO1xuICBnLnRyYW5zbGF0ZShiWzBdLCBiWzFdLCBiWzJdKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIGJhdGNoIG9mIGJveGVzLCBlYWNoIHRpbnRlZCwgbWVyZ2VkOiBbW2hleCwgY3gsIGN5LCBjeiwgdywgaCwgZCwgcng/LCByeT8sIHJ6P10sIC4uLl0uIFRoZVxuICogIHRyaW0gY29tcG9uZW50IG9mIGV2ZXJ5IHZlaGljbGUgaXMgb25lIG9mIHRoZXNlIC0tIGJ1bXBlcnMsIGdyaWxsZSwgbGFtcHMsIG1pcnJvcnMsIGhhbmRsZXMsXG4gKiAgc3RlcHMsIGFyY2ggZmxhcmVzIC0tIHNvIGZvcnR5IHBhcnRzIHJpZGUgb25lIHN1Ym1pc3Npb24uICovXG5mdW5jdGlvbiB0aW50ZWRCb3hlcyhsaXN0OiBudW1iZXJbXVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiB0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKSk7XG59XG5cbi8qKiBNaXJyb3IgYSBib3ggbGlzdCBhY3Jvc3MgeCA9IDAgKGxlZnQvcmlnaHQgcGFpcnMpLiBSb3RhdGlvbnMgYWJvdXQgeSBhbmQgeiBmbGlwIHNpZ24uICovXG5mdW5jdGlvbiBtaXJyb3JYKGxpc3Q6IG51bWJlcltdW10pOiBudW1iZXJbXVtdIHtcbiAgcmV0dXJuIGxpc3QuZmxhdE1hcCgoYikgPT4gW2IsIFtiWzBdLCAtYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSwgYls2XSwgYls3XSA/PyAwLCAtKGJbOF0gPz8gMCksIC0oYls5XSA/PyAwKV1dKTtcbn1cblxuLyoqIEEgc2VhbWxlc3MgQ2FudmFzIDJEIHRpbGU6IGBkcmF3KGN0eCwgc2l6ZSlgIHBhaW50cyBpdCwgYW5kIHRoZSByZXN1bHQgaXMgYSByZXBlYXRpbmcgdGV4dHVyZVxuICogIGluIHNSR0IuIFVzZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLCBzbyB0aGUgdGV4dHVyZWxlc3MgZGVjbGFyYXRpb24gc3RhbmRzIGFuZCBub1xuICogIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQuIFJldHVybnMgbnVsbCB3aGVyZSB0aGVyZSBpcyBubyBET00gKHRoZSBoZWFkbGVzcyBoYXJuZXNzXG4gKiAgaGFzIG9uZTsgYSBub2RlLXNpZGUgcHJvYmUgZG9lcyBub3QpLCBhbmQgZXZlcnkgY2FsbGVyIHRvbGVyYXRlcyBudWxsLiAqL1xuZnVuY3Rpb24gY2FudmFzVGlsZShzaXplOiBudW1iZXIsIGRyYXc6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgczogbnVtYmVyKSA9PiB2b2lkKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGN2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IGN2LndpZHRoID0gc2l6ZTsgY3YuaGVpZ2h0ID0gc2l6ZTtcbiAgLy8gd2lsbFJlYWRGcmVxdWVudGx5IGtlZXBzIHRoZSB0aWxlIG9uIHRoZSBDUFUgcmFzdGVyIHBhdGg6IGEgR1BVLWJhY2tlZCBjYW52YXMgY29zdHMgc2Vjb25kcyBwZXJcbiAgLy8gdGhvdXNhbmQgcGF0aCBmaWxscyB3aGVyZSB0aGUgc29mdHdhcmUgcGF0aCB0YWtlcyB0ZW5zIG9mIG1pbGxpc2Vjb25kcy5cbiAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsOyBpZiAoIWN0eCkgcmV0dXJuIG51bGw7XG4gIGRyYXcoY3R4LCBzaXplKTtcbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3YpO1xuICB0ZXgud3JhcFMgPSB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgdGV4LmNvbG9yU3BhY2UgPSBUSFJFRS5TUkdCQ29sb3JTcGFjZTtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgcmV0dXJuIHRleDtcbn1cblxuLyoqIERldGVybWluaXN0aWMgcHNldWRvLXJhbmRvbSBmb3IgY2FudmFzIGRyZXNzaW5nIC0tIGFzc2lnbmVkIGJ5IGluZGV4LCBuZXZlciBNYXRoLnJhbmRvbSwgc28gdGhlXG4gKiAgbW9kZWwgaXMgYnl0ZS1pZGVudGljYWwgb24gZXZlcnkgYnVpbGQuICovXG5mdW5jdGlvbiBsY2coc2VlZDogbnVtYmVyKTogKCkgPT4gbnVtYmVyIHtcbiAgbGV0IHMgPSBzZWVkID4+PiAwO1xuICByZXR1cm4gKCkgPT4geyBzID0gKHMgKiAxNjY0NTI1ICsgMTAxMzkwNDIyMykgPj4+IDA7IHJldHVybiBzIC8gNDI5NDk2NzI5NjsgfTtcbn1cblxuLyoqXG4gKiBNVUQgLyBST0FELUdSSU1FIHRpbGUsIFJFLUJBU0VELiBUaGFpIHJvYWQgbXVkIGlzIHRhbiBhbmQgQlJJR0hURVIgdGhhbiBtb3N0IHBhaW50LCBhbmQgYVxuICogbXVsdGlwbGllciBjYW5ub3QgYnJpZ2h0ZW46IHNvIHRoZSBwYWludCBtYXRlcmlhbCBjYXJyaWVzIHRoZSBNVUQgRU5WRUxPUEUgY29sb3VyIChtZWFzdXJlZCBvblxuICogdGhlIG11ZGR5IHNpbGwpLCB0aGlzIHRpbGUgY2FycmllcyB0aGUgY2xlYW4gcGFpbnQgYXMgYSBSQVRJTyBvZiB0aGF0IGVudmVsb3BlIG92ZXIgbW9zdCBvZiBpdHNcbiAqIGFyZWEgKGBiYXNlYCksIGFuZCB0aGUgbXVkIGlzIHBhaW50ZWQgYXMgd2hpdGUgLS0gaS5lLiB0aGUgZW52ZWxvcGUgaXRzZWxmIC0tIGluIGEgd2FzaCByaXNpbmdcbiAqIGZyb20gdGhlIGJvdHRvbSB0byBgY292ZXJhZ2VgIG9mIHRoZSB0aWxlIGhlaWdodCBwbHVzIHNwbGF0dGVyIGFib3ZlIGl0LiBCb3VuZCB3aXRoIGhlaWdodCBVVnNcbiAqIHNvIHYgPSAwIGlzIHRoZSBncm91bmQgYW5kIHRoZSB3YXNoIHNpdHMgb24gdGhlIHNpbGxzIGFuZCBhcmNoZXMuXG4gKi9cbmZ1bmN0aW9uIG11ZFRpbGUoc2l6ZTogbnVtYmVyLCBiYXNlOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzMpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgdG9IZXggPSAodjogbnVtYmVyW10pID0+ICcjJyArIHYubWFwKChjKSA9PiBNYXRoLnJvdW5kKE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGMpKSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0b0hleChiYXNlKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjU1LDI1NSwwLjg4KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNDUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpJyk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuMzU7XG4gICAgICBjb25zdCByID0gMyArIHJuZCgpICogcyAqIDAuMDU7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4yODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDI1NSwyNTAsMjQwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjUwLDI0MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBhIGxpdHRsZSBncmFpbiBzbyB0aGUgY2xlYW4gcGFpbnQgaXMgbm90IGEgZmxhdCBmaWxsXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7IGNvbnN0IHYgPSBybmQoKSA8IDAuNSA/IDAgOiAyNTU7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4wMzUpYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEuNSwgMS41KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogRFVTVCB0aWxlIGZvciBwYWludCB0aGF0IGlzIEJSSUdIVEVSIHRoYW4gaXRzIGRpcnQgKGEgd2hpdGUgdmFuKTogYSBwbGFpbiBtdWx0aXBsaWVyLCB3aGl0ZVxuICogIGJhc2UgYW5kIGEgZ3JleS1icm93biB3YXNoIHJpc2luZyBmcm9tIHRoZSBncm91bmQgdG8gYGNvdmVyYWdlYCwgcGx1cyBzb2Z0IGJsb2JzLiAqL1xuZnVuY3Rpb24gZHVzdFRpbGUoc2l6ZTogbnVtYmVyLCBkdXN0OiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGMgPSBkdXN0Lm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiBNYXRoLm1pbigxLCB2KSkpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjkpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjQpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuNCwgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA1LCBhID0gMC4wOCArIHJuZCgpICogMC4yNTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBDT1JSVUdBVEVEIFNIRUVUIHRpbGU6IHZlcnRpY2FsIHJpZGdlcyBhcyBhIHNpbmUtc2hhZGVkIHN0cmlwZSBmaWVsZCwgdXNlZCBhcyBtYXAgQU5EIGJ1bXBNYXAgb25cbiAqICBhIHNvbmd0aGFldyByb29mIHNvIHRoZSByaWRnZXMgY2F0Y2ggbGlnaHQuIGBwaXRjaGAgcmlkZ2VzIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gY29ycnVnYXRpb25UaWxlKHNpemU6IG51bWJlciwgcGl0Y2g6IG51bWJlciwgbG93OiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgY29uc3QgdCA9IChNYXRoLmNvcyh4IC8gcyAqIE1hdGguUEkgKiAyICogcGl0Y2gpICsgMSkgLyAyOyAgIC8vIDEgYXQgY3Jlc3QsIDAgaW4gdHJvdWdoXG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiAobG93ICsgKDEgLSBsb3cpICogdCkpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMTg7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTIwLDkwLDYwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMjAsOTAsNjAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFBMQU5LIHRpbGU6IGJvYXJkcyBydW5uaW5nIGFsb25nIHUgd2l0aCBkYXJrIGpvaW50cyBhbmQgZ3JhaW4gc3RyZWFrcywgYSBtdWx0aXBsaWVyIG9uIGFcbiAqICBtZWFzdXJlZCB0aW1iZXIgYWxiZWRvLiBgYm9hcmRzYCBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIHBsYW5rVGlsZShzaXplOiBudW1iZXIsIGJvYXJkczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGJoID0gcyAvIGJvYXJkcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IGJvYXJkczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgYmgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDMwLDIwLDAuNTUpJzsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDE0OyBrKyspIHtcbiAgICAgICAgY29uc3QgeSA9IGIgKiBiaCArIHJuZCgpICogYmgsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjYpLCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSg2MCw0NSwzMCwkezAuMDUgKyBybmQoKSAqIDAuMTJ9KWA7IGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgbGVuLCB5KTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgbGVuLCB5KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBSVVNUIHRpbGU6IGEgbXVsdGlwbGllciBvZiBibG90Y2hlZCBvcmFuZ2UtYnJvd24gb3ZlciBhIGJhc2UsIGRhcmsgY29yZXMgbGlmdGVkIHNvIG5vdGhpbmcgbGFuZHNcbiAqICBvbiB0aGUgbHVtYS01OCBob2xlIGdhdGUuICovXG5mdW5jdGlvbiBydXN0VGlsZShzaXplOiBudW1iZXIsIHJhdGlvOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBkZW5zaXR5ID0gOTApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVuc2l0eTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDk7XG4gICAgICBjb25zdCBhID0gMC4xNSArIHJuZCgpICogMC40NTtcbiAgICAgIGNvbnN0IGMgPSByYXRpby5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogdikpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBIZWlnaHQta2V5ZWQgVVZzOiB2IGlzIHdvcmxkIEhFSUdIVCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB1IHJ1bnMgYWxvbmcgdGhlIGRvbWluYW50IGhvcml6b250YWxcbiAqICBheGlzLiBBIG11ZCB0aWxlIGJvdW5kIHRoaXMgd2F5IGRhcmtlbnMgdGhlIHNpbGxzIGFuZCBzdGF5cyBjbGVhbiBvbiB0aGUgcm9vZiAtLSBhIHBsYWluIGJveFxuICogIHByb2plY3Rpb24gd291bGQgcmVwZWF0IHRoZSB0aWxlJ3MgZGlydHkgYmFuZCBhY3Jvc3MgdGhlIHJvb2YgYXMgc3RyaXBlcy4gKi9cbi8qKlxuICogU0hPUlQgRlVSOiBhIHNlYW1sZXNzIHRpbGUgb2YgZGVuc2UsIHNob3J0LCBkaXJlY3Rpb25hbCBoYWlyIHN0cm9rZXMgb3ZlciBhIGNsb3VkeSB0b25lIGRyaWZ0LCBhcyBhXG4gKiBtdWx0aXBseSBtYXAgKGFuZCBidW1wKSBvbiBhIHdoaXRlIHZlcnRleC1jb2xvdXJlZCBjb2F0LiBUaGUgc3Ryb2tlcyBydW4gYWxvbmcgdiB3aXRoIGEgaml0dGVyZWRcbiAqIGxlYW4gYW5kIGEgbmFycm93IHRvbmUgc3ByZWFkIC0tIGEgd2lkZSBzcHJlYWQgcmVhZHMgYXMgc2NhbGVzLCBhIHBlcmZlY3QgbGF5IHJlYWRzIGFzIGNvbWJlZFxuICogcGxhc3RpYy4gYHBhdGNoZXNgIGFkZHMgYSBmZXcgc29mdCBwaW5rLWdyZXkgYmFyZSBwYXRjaGVzLCB0aGUgbWFuZ2UgbWFya3Mgb2YgYSBzdHJlZXQgZG9nLlxuICovXG5mdW5jdGlvbiBmdXJUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IHRvbmUgPSBvLnRvbmUgPz8gWzAuNzIsIDAuNjYsIDAuNThdLCBtID0gcyAqIDAuMDY7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGNsb3VkeSBkcmlmdCB1bmRlcm5lYXRoIHNvIHRoZSBjb2F0IGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uY2xvdWRzID8/IDI2KTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA4ICsgcm5kKCkgKiAwLjE4KSwgYSA9IDAuMDQgKyBybmQoKSAqIDAuMTA7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih0b25lKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHRvbmUpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYmFyZSBwYXRjaGVzOiBzb2Z0LCBzcGFyc2UsIHdhcm0gZ3JleS1waW5rXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5wYXRjaGVzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMDUpLCBwYyA9IG8ucGF0Y2hUb25lID8/IFswLjcyLCAwLjU2LCAwLjUyXTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHBjKX0sMC41NSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2IocGMpfSwwLjMpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihwYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByICogMS4zLCByLCBybmQoKSAqIE1hdGguUEksIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBoYWlyIHN0cm9rZXM6IGRhcmsgYW5kIGxpZ2h0LCBzaG9ydCwgbGVhbmluZyB3aXRoaW4gKy0yMiBkZWdyZWVzIG9mIHZcbiAgICBjb25zdCBzdHJva2VzID0gby5zdHJva2VzID8/IDUwMDAsIGxlbiA9IHMgKiAoby5sZW5ndGggPz8gMC4wMjIpO1xuICAgIGNvbnN0IGRyYXdTdHJva2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIHc6IG51bWJlcikgPT4ge1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHc7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTtcbiAgICAgIGlmICh4IDwgbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIHMsIHkpOyBjdHgubGluZVRvKHggKyBzICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHggPiBzIC0gbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHkgPCBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5ICsgcyk7IGN0eC5saW5lVG8oeCArIGR4LCB5ICsgcyArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeSA+IHMgLSBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5IC0gcyk7IGN0eC5saW5lVG8oeCArIGR4LCB5IC0gcyArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgfTtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJva2VzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHRoID0gKHJuZCgpIC0gMC41KSAqIDAuNzgsIGwgPSBsZW4gKiAoMC42ICsgcm5kKCkgKiAwLjgpO1xuICAgICAgY29uc3QgbGlnaHQgPSBybmQoKSA8IDAuNDI7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gbGlnaHQgPyAnc2NyZWVuJyA6ICdtdWx0aXBseSc7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBsaWdodCA/IGByZ2JhKDI1NSwyNTAsMjQwLCR7MC4wNSArIHJuZCgpICogMC4xMH0pYCA6IGByZ2JhKCR7cmdiKHRvbmUpfSwkezAuMDYgKyBybmQoKSAqIDAuMTR9KWA7XG4gICAgICBkcmF3U3Ryb2tlKHgsIHksIE1hdGguc2luKHRoKSAqIGwsIE1hdGguY29zKHRoKSAqIGwsIDAuNiArIHJuZCgpICogMS4yKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoZWlnaHRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGNvbnN0IHUgPSBheCA+PSBheiA/IHAuZ2V0WihpKSA6IHAuZ2V0WChpKTtcbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSBwLmdldFkoaSkgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIE9mZnNldCBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgb3V0d2FyZCBieSBgZGAgYWxvbmcgdGhlIGF2ZXJhZ2VkIGVkZ2Ugbm9ybWFscy4gVXNlZFxuICogIHRvIHN0YW5kIHRoZSBnbGFzcyBiYW5kIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBib2R5J3MgcmFrZWQgd2luZHNjcmVlbiBhbmQgcmVhciBnbGFzc1xuICogIGZhY2VzLCBzbyB0aGUgcGFuZSBhbmQgdGhlIGJvZHkgbmV2ZXIgc2hhcmUgYSBwbGFuZS4gV2luZGluZzogY291bnRlci1jbG9ja3dpc2UgaW4gKHosIHkpLiAqL1xuZnVuY3Rpb24gb2Zmc2V0UG9seShwdHM6IG51bWJlcltdW10sIGQ6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBuID0gcHRzLmxlbmd0aCwgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IHB0c1soaSArIG4gLSAxKSAlIG5dLCBiID0gcHRzW2ldLCBjID0gcHRzWyhpICsgMSkgJSBuXTtcbiAgICBjb25zdCBlMSA9IFtiWzBdIC0gYVswXSwgYlsxXSAtIGFbMV1dLCBlMiA9IFtjWzBdIC0gYlswXSwgY1sxXSAtIGJbMV1dO1xuICAgIGNvbnN0IGwxID0gTWF0aC5oeXBvdChlMVswXSwgZTFbMV0pIHx8IDEsIGwyID0gTWF0aC5oeXBvdChlMlswXSwgZTJbMV0pIHx8IDE7XG4gICAgLy8gb3V0d2FyZCBub3JtYWwgb2YgYSBDQ1cgZWRnZSAoZHosIGR5KSBpcyAoZHksIC1keilcbiAgICBjb25zdCBuMSA9IFtlMVsxXSAvIGwxLCAtZTFbMF0gLyBsMV0sIG4yID0gW2UyWzFdIC8gbDIsIC1lMlswXSAvIGwyXTtcbiAgICBsZXQgbnggPSBuMVswXSArIG4yWzBdLCBueSA9IG4xWzFdICsgbjJbMV07XG4gICAgY29uc3QgbmwgPSBNYXRoLmh5cG90KG54LCBueSkgfHwgMTsgbnggLz0gbmw7IG55IC89IG5sO1xuICAgIGNvbnN0IGNvc0hhbGYgPSBNYXRoLm1heCgwLjM1LCBueCAqIG4xWzBdICsgbnkgKiBuMVsxXSk7XG4gICAgb3V0LnB1c2goW2JbMF0gKyBueCAqIGQgLyBjb3NIYWxmLCBiWzFdICsgbnkgKiBkIC8gY29zSGFsZl0pO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBBIHdoZWVsLWFyY2ggRkxBUkU6IGEgaGFsZi1hbm51bHVzIGluIHRoZSAoeiwgeSkgcGxhbmUsIGV4dHJ1ZGVkIGFjcm9zcyB4MC4ueDEgb24gYm90aCBzaWRlc1xuICogIGFuZCB0aW50ZWQuIFN0YW5kcyBwcm91ZCBvZiB0aGUgYm9keSBzaWRlIGFuZCBoaWRlcyB0aGUgYXJjaCdzIGN1dCBlZGdlLiAqL1xuZnVuY3Rpb24gZmxhcmUoemM6IG51bWJlciwgeWM6IG51bWJlciwgckluOiBudW1iZXIsIHJPdXQ6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgaGV4OiBudW1iZXIsIG4gPSA5KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IGNvbnN0IHogPSB6YyArIE1hdGguY29zKGEpICogck91dCwgeSA9IHljICsgTWF0aC5zaW4oYSkgKiByT3V0OyBpZiAoaSA9PT0gMCkgc2hhcGUubW92ZVRvKHosIHkpOyBlbHNlIHNoYXBlLmxpbmVUbyh6LCB5KTsgfVxuICBmb3IgKGxldCBpID0gbjsgaSA+PSAwOyBpLS0pIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IHNoYXBlLmxpbmVUbyh6YyArIE1hdGguY29zKGEpICogckluLCB5YyArIE1hdGguc2luKGEpICogckluKTsgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgbWsgPSAoc3g6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB4MSAtIHgwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlIH0pO1xuICAgIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpOyBnLnRyYW5zbGF0ZSh4MSwgMCwgMCk7IGlmIChzeCA8IDApIGcuc2NhbGUoLTEsIDEsIDEpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIHRpbnRHZW8oZywgaGV4KTtcbiAgfTtcbiAgY29uc3QgbCA9IG1rKC0xKSwgciA9IG1rKDEpO1xuICAvLyBhIG5lZ2F0aXZlIHNjYWxlIGZsaXBzIHRoZSB3aW5kaW5nOyByZXN0b3JlIGl0IHNvIHRoZSBmbGFyZSBpcyBub3QgaW5zaWRlIG91dFxuICBjb25zdCBpZHggPSBsLmdldEluZGV4KCk7IGlmIChpZHgpIHsgY29uc3QgYSA9IGlkeC5hcnJheSBhcyBhbnk7IGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMykgeyBjb25zdCB0ID0gYVtpICsgMV07IGFbaSArIDFdID0gYVtpICsgMl07IGFbaSArIDJdID0gdDsgfSBpZHgubmVlZHNVcGRhdGUgPSB0cnVlOyB9XG4gIGVsc2UgeyBjb25zdCBwID0gbC5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSArPSAzKSB7IGNvbnN0IHgxXyA9IHAuZ2V0WChpICsgMSksIHkxXyA9IHAuZ2V0WShpICsgMSksIHoxXyA9IHAuZ2V0WihpICsgMSk7IHAuc2V0WFlaKGkgKyAxLCBwLmdldFgoaSArIDIpLCBwLmdldFkoaSArIDIpLCBwLmdldFooaSArIDIpKTsgcC5zZXRYWVooaSArIDIsIHgxXywgeTFfLCB6MV8pOyB9IH1cbiAgbC5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gbWVyZ2VHZW9zKFtsLCByXSk7XG59XG5cbi8qKiBCaW5kIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgdG8gYSBtYXRlcmlhbCBhcyBtYXAgKGFuZCBidW1wKSwgbGVhdmluZyB0aGUgdGV4dHVyZWxlc3NcbiAqICBkZWNsYXJhdGlvbiBpbnRhY3Q6IG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQsIHRoZSBtZWFzdXJlZCBjb2xvdXIgc3RheXMgdGhlXG4gKiAgbXVsdGlwbGljYW5kLCBhbmQgdGhlIHdob2xlIHRoaW5nIGNvc3RzIG9uZSBjYW52YXMuICovXG5mdW5jdGlvbiBiaW5kVGlsZShtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsLCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsLCBidW1wID0gMCk6IHZvaWQge1xuICBpZiAoIXRleCkgcmV0dXJuO1xuICBtYXQubWFwID0gdGV4O1xuICBpZiAoYnVtcCA+IDApIHsgbWF0LmJ1bXBNYXAgPSB0ZXg7IG1hdC5idW1wU2NhbGUgPSBidW1wOyB9XG4gIG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cblxuLyoqXG4gKiBBIERSQVBFRCBTSEVFVDogYGhlaWdodHNbal1baV1gIGlzIHRoZSB0b3Agc3VyZmFjZSBhdCB4ID0geDAuLngxIChpIG92ZXIgbngpIGFuZCB6ID0gejAuLnoxIChqIG92ZXJcbiAqIG56KTsgdGhlIHNoZWV0IGlzIGB0YCB0aGljay4gVG9wIGFuZCB1bmRlcnNpZGUgYXJlIHNtb290aC1zaGFkZWQgZ3JpZHMsIHRoZSBmb3VyIGVkZ2VzIGFyZSBmbGF0XG4gKiBzdHJpcHMgd291bmQgb3V0d2FyZC4gQSB0YXJwIGNhbm9weSBpcyBhIHJpZGdlIGxpbmUgbWludXMgdGhlIHNhZyBiZXR3ZWVuIGl0cyBwb2xlcyBtaW51cyB0aGVcbiAqIGRyb29wIG9mIGl0cyBmcmVlIGVkZ2VzIC0tIGNsb3RoLCB3aGVyZSBhIHNsYWIgcmVhZHMgYXMgYSBwYWludGVkIGJveC5cbiAqL1xuZnVuY3Rpb24gc2hlZXQoczogYW55KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBueDogbnVtYmVyID0gcy5ueCwgbno6IG51bWJlciA9IHMubnosIEhoOiBudW1iZXJbXVtdID0gcy5oZWlnaHRzLCB0OiBudW1iZXIgPSBzLnQgPz8gMC4wMTI7XG4gIGNvbnN0IFggPSAoaTogbnVtYmVyKSA9PiBzLngwICsgKHMueDEgLSBzLngwKSAqIGkgLyBueDtcbiAgLy8gYHpzYCBnaXZlcyB0aGUgeiBTVEFUSU9OUyBleHBsaWNpdGx5IGluc3RlYWQgb2YgZGl2aWRpbmcgejAuLnoxIGV2ZW5seS4gQSByb29mIHdob3NlIGVhdmUgYW5kXG4gIC8vIHJha2Ugd2FudCBhIG5hcnJvdyBydXN0ZWQgYmFuZCBuZWVkcyByb3dzIDAuMTAgbSBpbiBmcm9tIHRoZSBlZGdlLCBhbmQgcmVhY2hpbmcgdGhhdCBieSByYWlzaW5nXG4gIC8vIG56IGFsb25lIHdvdWxkIG11bHRpcGx5IHRoZSB3aG9sZSBncmlkIC0tIDEwNCBmbHV0ZSBjb2x1bW5zIGlzIHdoYXQgbWFrZXMgYSByb3cgZXhwZW5zaXZlLlxuICBjb25zdCBaUzogbnVtYmVyW10gfCBudWxsID0gQXJyYXkuaXNBcnJheShzLnpzKSA/IHMuenMgOiBudWxsO1xuICBjb25zdCBaID0gKGo6IG51bWJlcikgPT4gKFpTID8gWlNbal0gOiBzLnowICsgKHMuejEgLSBzLnowKSAqIGogLyBueik7XG4gIGNvbnN0IGdyaWQgPSAoeU9mZjogbnVtYmVyLCBmbGlwOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCB1djogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDw9IG54OyBpKyspIHsgcG9zLnB1c2goWChpKSwgSGhbal1baV0gKyB5T2ZmLCBaKGopKTsgdXYucHVzaChpIC8gbngsIGogLyBueik7IH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDwgbng7IGkrKykge1xuICAgICAgY29uc3QgYSA9IGogKiAobnggKyAxKSArIGksIGIgPSBhICsgMSwgYyA9IGEgKyBueCArIDEsIGQgPSBjICsgMTtcbiAgICAgIGlmIChmbGlwKSBpZHgucHVzaChhLCBiLCBjLCBiLCBkLCBjKTsgZWxzZSBpZHgucHVzaChhLCBjLCBiLCBiLCBjLCBkKTtcbiAgICB9XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvcywgMykpO1xuICAgIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gICAgZy5zZXRJbmRleChpZHgpOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiBnO1xuICB9O1xuICAvLyBgaGV4VG9wYCAvIGBoZXhVbmRlcmA6IGEgY29sb3VyIGF0dHJpYnV0ZSB3cml0dGVuIHBlciBncmlkLCBzbyBhIHRhcnAgY2FuIGJlIGJsdWUgb24gdG9wIGFuZFxuICAvLyBvcmFuZ2UgdW5kZXJuZWF0aCBvbiBPTkUgbWF0ZXJpYWwgYW5kIE9ORSBkcmF3IGNhbGwuIEEgY29tcG9uZW50IHRpbnQgY2Fubm90IGRvIGl0IC0tIHRoZSB0d29cbiAgLy8gc3VyZmFjZXMgYXJlIG1pbGxpbWV0cmVzIGFwYXJ0IGluIHksIHNvIG5vIGF4aXMgYmxlbmQgc2VwYXJhdGVzIHRoZW0gLS0gYW5kIGEgc2Vjb25kIHNoZWV0XG4gIC8vIHdvdWxkIGRvdWJsZSB0aGUgcm9vZidzIHRyaWFuZ2xlcyBmb3IgYSBjb2xvdXIuIE9taXR0ZWQsIHRoZSBnZW9tZXRyeSBpcyB1bnRpbnRlZCBhcyBiZWZvcmUuXG4gIGNvbnN0IHBhaW50ID0gKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBoZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCwgYyA9IG5ldyBUSFJFRS5Db2xvcihoZXgpLCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7IH1cbiAgICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpOyByZXR1cm4gZztcbiAgfTtcbiAgLy8gYGhleEdyaWRbal1baV1gIGlzIGEgY29sb3VyIFBFUiBUT1AtR1JJRCBWRVJURVgsIGNvbXB1dGVkIGF0IGVtaXQgdGltZSAtLSB3aGljaCBpcyB0aGUgb25seSB3YXlcbiAgLy8gdG8gcHV0IGEgbWFyayBhdCBhIGtub3duIHBsYWNlIG9uIHRoZSBzaGVldC4gQSBjYW52YXMgdGlsZSByZXBlYXRzIGJ5IHdvcmxkIHBvc2l0aW9uIGFuZCBrbm93c1xuICAvLyBub3RoaW5nIGFib3V0IHdoZXJlIHRoZSBlYXZlIGlzOyBgaGV4VG9wYCBpcyBvbmUgZmxhdCB0b25lIGZvciB0aGUgd2hvbGUgc3VyZmFjZS4gVGhpcyBpcyB3aGF0XG4gIC8vIGNhcnJpZXMgdGhlIHJ1c3RlZCBiYW5kIGFsb25nIHRoZSBlYXZlIGFuZCB0aGUgcmFrZXMsIGFuZCB0aGUgc3RhaW5pbmcgYmVzaWRlIGVhY2ggc2hlZXQgbGFwLlxuICBjb25zdCBwYWludEdyaWQgPSAoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIEhHOiBudW1iZXJbXVtdKSA9PiB7XG4gICAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50LCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKSwgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgIGxldCBrID0gMDtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8PSBueDsgaSsrKSB7IGMuc2V0SGV4KEhHW2pdW2ldKTsgY29sW2srK10gPSBjLnI7IGNvbFtrKytdID0gYy5nOyBjb2xbaysrXSA9IGMuYjsgfVxuICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7IHJldHVybiBnO1xuICB9O1xuICBjb25zdCB0b3AwID0gZ3JpZCgwLCBmYWxzZSksIHVuZDAgPSBncmlkKC10LCB0cnVlKTtcbiAgY29uc3QgcGFydHMgPSBzLmhleEdyaWQgIT09IHVuZGVmaW5lZFxuICAgID8gW3BhaW50R3JpZCh0b3AwLCBzLmhleEdyaWQpLCBwYWludCh1bmQwLCBzLmhleFVuZGVyID8/IDB4ZmZmZmZmKV1cbiAgICA6IHMuaGV4VW5kZXIgIT09IHVuZGVmaW5lZFxuICAgICAgPyBbcGFpbnQodG9wMCwgcy5oZXhUb3AgPz8gMHhmZmZmZmYpLCBwYWludCh1bmQwLCBzLmhleFVuZGVyKV1cbiAgICAgIDogW3RvcDAsIHVuZDBdO1xuICAvLyBlZGdlIHN0cmlwczogZWFjaCBxdWFkIGZyb20gdGhlIHRvcCBlZGdlIGRvd24gdG8gdGhlIHVuZGVyc2lkZSwgd291bmQgc28gaXRzIG5vcm1hbCBmYWNlcyBgb3V0YFxuICBjb25zdCBzdHJpcCA9IChwdHM6IG51bWJlcltdW11bXSwgb3V0OiBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXY6IG51bWJlcltdID0gW107XG4gICAgZm9yIChjb25zdCBbcDAsIHAxXSBvZiBwdHMpIHtcbiAgICAgIGNvbnN0IHEwID0gcDAsIHExID0gcDEsIHEyID0gW3AxWzBdLCBwMVsxXSAtIHQsIHAxWzJdXSwgcTMgPSBbcDBbMF0sIHAwWzFdIC0gdCwgcDBbMl1dO1xuICAgICAgY29uc3QgZTEgPSBbcTFbMF0gLSBxMFswXSwgcTFbMV0gLSBxMFsxXSwgcTFbMl0gLSBxMFsyXV0sIGUyID0gW3EyWzBdIC0gcTBbMF0sIHEyWzFdIC0gcTBbMV0sIHEyWzJdIC0gcTBbMl1dO1xuICAgICAgY29uc3QgbiA9IFtlMVsxXSAqIGUyWzJdIC0gZTFbMl0gKiBlMlsxXSwgZTFbMl0gKiBlMlswXSAtIGUxWzBdICogZTJbMl0sIGUxWzBdICogZTJbMV0gLSBlMVsxXSAqIGUyWzBdXTtcbiAgICAgIGNvbnN0IHRyaSA9IG5bMF0gKiBvdXRbMF0gKyBuWzFdICogb3V0WzFdICsgblsyXSAqIG91dFsyXSA+PSAwID8gW3EwLCBxMSwgcTIsIHEwLCBxMiwgcTNdIDogW3EwLCBxMiwgcTEsIHEwLCBxMywgcTJdO1xuICAgICAgZm9yIChjb25zdCBxIG9mIHRyaSkgeyBwb3MucHVzaChxWzBdLCBxWzFdLCBxWzJdKTsgdXYucHVzaCgwLCAwKTsgfVxuICAgIH1cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zLCAzKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiBnO1xuICB9O1xuICBjb25zdCB0b3AgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IFtYKGkpLCBIaFtqXVtpXSwgWihqKV07XG4gIGNvbnN0IGUwOiBudW1iZXJbXVtdW10gPSBbXSwgZTE6IG51bWJlcltdW11bXSA9IFtdLCBlMjogbnVtYmVyW11bXVtdID0gW10sIGUzOiBudW1iZXJbXVtdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBueDsgaSsrKSB7IGUwLnB1c2goW3RvcChpLCAwKSwgdG9wKGkgKyAxLCAwKV0pOyBlMS5wdXNoKFt0b3AoaSwgbnopLCB0b3AoaSArIDEsIG56KV0pOyB9XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbno7IGorKykgeyBlMi5wdXNoKFt0b3AoMCwgaiksIHRvcCgwLCBqICsgMSldKTsgZTMucHVzaChbdG9wKG54LCBqKSwgdG9wKG54LCBqICsgMSldKTsgfVxuICBjb25zdCBlZGdlcyA9IFtzdHJpcChlMCwgWzAsIDAsIC0xXSksIHN0cmlwKGUxLCBbMCwgMCwgMV0pLCBzdHJpcChlMiwgWy0xLCAwLCAwXSksIHN0cmlwKGUzLCBbMSwgMCwgMF0pXTtcbiAgLy8gVGhlIHJpbSBpcyB0aGUgc2VhbSBiZXR3ZWVuIHRoZSB0d28gZmFjZXMsIHNvIGl0IHRha2VzIHRoZSBVTkRFUiBjb2xvdXI6IG9uIGEgZHJhcGVkIHRhcnAgdGhlXG4gIC8vIGVkZ2UgaXMgd2hhdCBhIHZpZXdlciBzdGFuZGluZyBiZXNpZGUgaXQgYWN0dWFsbHkgc2VlcywgYW5kIGl0IGlzIHRoZSBsaW5pbmcsIG5vdCB0aGUgdG9wLiBPbiBhXG4gIC8vIHJvb2YgZGVjayBpdCBpcyB0aGUgZmx1dGVkIGVhdmUsIHdoaWNoIGlzIHdoZXJlIHRoZSBydXN0IGlzLCBzbyBgaGV4UmltYCBvdmVycmlkZXMgaXQuXG4gIGNvbnN0IHJpbUhleCA9IHMuaGV4UmltID8/IHMuaGV4VW5kZXI7XG4gIHBhcnRzLnB1c2goLi4uKHJpbUhleCAhPT0gdW5kZWZpbmVkID8gZWRnZXMubWFwKChnKSA9PiBwYWludChnLCByaW1IZXgpKSA6IGVkZ2VzKSk7XG4gIHJldHVybiBtZXJnZUdlb3MocGFydHMpO1xufVxuXG4vKipcbiAqIFdFQVRIRVJFRCBQQUlOVCBvbiBhIHN0ZWVsIGNvbnRhaW5lcjogb25lIHNlYW1sZXNzIG11bHRpcGxpZXIgdGlsZSBjYXJyeWluZyBjbGVhbiBwYWludCwgcnVzdFxuICogYW5kIGNoYWxrZWQgYmxvb20gdG9nZXRoZXIuXG4gKlxuICogVGhlIHRocmVlIHRvbmVzIGNhbm5vdCByaWRlIGEgcGxhaW4gbXVsdGlwbHkgb3ZlciB0aGUgY2xlYW4gcGFpbnQsIGJlY2F1c2UgYSBjaGFsayBibG9vbSBpc1xuICogQlJJR0hURVIgdGhhbiB0aGUgcGFpbnQgaXQgc2l0cyBvbiBpbiB0d28gY2hhbm5lbHMgLS0gYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4uIFNvIHRoZSB2ZXJ0ZXhcbiAqIGNvbG91ciBpcyBSRS1CQVNFRCB0byBhbiBlbnZlbG9wZSBhYm92ZSBldmVyeSB0b25lIHRoZSB0aWxlIGhhcyB0byByZWFjaCAoYG8uYmFzZWAgaXMgdGhlIGNsZWFuXG4gKiBwYWludCdzIG93biBtdWx0aXBsaWVyIGFnYWluc3QgdGhhdCBlbnZlbG9wZSwgYW5kIGl0IGlzIHdoYXQgbW9zdCBvZiB0aGUgdGlsZSBpcyBmaWxsZWQgd2l0aCksXG4gKiBleGFjdGx5IGFzIHRoZSBsaWNoZW4tb24tc3RvbmUgcm91dGUgZG9lcy4gRXZlcnl0aGluZyBhZnRlciB0aGUgZmlsbCBpcyBkcmF3biBzb3VyY2Utb3ZlciBpblxuICogYWJzb2x1dGUgbXVsdGlwbGllciBzcGFjZSwgc28gYSBtYXJrIG1heSBsYW5kIGVpdGhlciBzaWRlIG9mIGNsZWFuLlxuICpcbiAqIE9yZGVyIG1hdHRlcnMgYW5kIGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gd2VhdGhlcmluZyBhbmQgY2Ftb3VmbGFnZTogYSBzb2Z0IGNsb3VkeSBkcmlmdFxuICogZmlyc3QsIHRoZW4gdGhlIHJ1c3QgYXMgY2x1c3RlcmVkIGdyYW51bGFyIHBhdGNoZXMgcmF0aGVyIHRoYW4gaGFyZCBibG90Y2hlcywgdGhlbiB0aGUgcnVucyBpdFxuICogbGVhdmVzIEJFTE9XIGl0c2VsZiwgdGhlbiB0aGUgY2hhbGsgYmxvb21zLCB0aGVuIGEgZmluZSBncmFpbiBvdmVyIHRoZSBsb3QuXG4gKi9cbmZ1bmN0aW9uIHBhaW50VGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXSwgcnVzdCA9IG8ucnVzdCA/PyBiYXNlLCBjaGFsayA9IG8uY2hhbGsgPz8gYmFzZTtcbiAgICBjb25zdCBydW4gPSBvLnJ1biA/PyBydXN0O1xuICAgIC8vIHdyYXAgZXZlcnkgbWFyayB0aHJlZSB3YXlzIHNvIG5vdGhpbmcgaXMgY3V0IGJ5IHRoZSB0aWxlIGVkZ2VcbiAgICBjb25zdCB3cmFwID0gKGRyYXc6IChkeDogbnVtYmVyLCBkeTogbnVtYmVyKSA9PiB2b2lkKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgZHJhdyhkeCwgZHkpO1xuICAgIH07XG4gICAgY29uc3QgYmxvYiA9IChjOiBudW1iZXJbXSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgYTogbnVtYmVyLCByeSA9IDEpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihjKX0sJHthfSlgKTsgZy5hZGRDb2xvclN0b3AoMC41NSwgYHJnYmEoJHtyZ2IoYyl9LCR7YSAqIDAuNDV9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IoYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogcnksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgfTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG5cbiAgICAvLyAxLiBjbG91ZHkgZHJpZnQ6IGJyb2FkLCB2ZXJ5IHNvZnQsIGJhcmVseSBvZmYgY2xlYW4gLS0gd2hhdCBzdG9wcyB0aGUgZmxhdCBhcmVhcyByZWFkaW5nIGFzIHBhaW50IGNoaXBzIG9uIHBsYXN0aWNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmRyaWZ0ID8/IDE0KTsgaSsrKSB7XG4gICAgICBjb25zdCBjID0gcm5kKCkgPCAwLjUgPyBydXN0IDogY2hhbGs7XG4gICAgICBibG9iKGMsIHJuZCgpICogcywgcm5kKCkgKiBzLCBzICogKDAuMTggKyBybmQoKSAqIDAuMzApICogKG8uZHJpZnRTY2FsZSA/PyAxKSwgMC4wNSArIHJuZCgpICogMC4wNywgMC42ICsgcm5kKCkgKiAwLjgpO1xuICAgIH1cblxuICAgIC8vIDIuIHJ1c3Q6IGNsdXN0ZXJzLCBlYWNoIGEgc29mdCBwYXRjaCB3aXRoIGdyYW51bGFyIHNwZWNrcyBvdmVyIGl0LiBCYXJlIHN0ZWVsIGNvcnJvZGVzIGluXG4gICAgLy8gICAgZmllbGRzLCBub3QgaW4gZG90czsgYSBzcGVjayBmaWVsZCB3aXRoIG5vIHBhdGNoIHVuZGVyIGl0IHJlYWRzIGFzIGNvbmZldHRpLlxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ucnVzdENsdXN0ZXJzID8/IDE2KTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjA0ICsgcm5kKCkgKiAwLjExKSAqIChvLmNsdXN0ZXJTY2FsZSA/PyAxKTtcbiAgICAgIGJsb2IocnVzdCwgY3gsIGN5LCBjciwgMC4zMCArIHJuZCgpICogMC4zNSwgMC43ICsgcm5kKCkgKiAwLjYpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zcGVja3NQZXJDbHVzdGVyID8/IDQwKTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyO1xuICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCwgciA9IDAuOCArIHJuZCgpICogMi40O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IocnVzdCl9LCR7MC4yNSArIHJuZCgpICogMC41fSlgO1xuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgICAgLy8gdGhlIHJ1biBpdCBsZWF2ZXMgYmVsb3cgaXRzZWxmOiBydXN0IGJsZWVkcyBET1dOIGEgdmVydGljYWwgcGFuZWwgYW5kIG5vd2hlcmUgZWxzZVxuICAgICAgaWYgKHJuZCgpIDwgKG8ucnVuQ2hhbmNlID8/IDAuNTUpKSB7XG4gICAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTAsIGxlbiA9IHMgKiAoMC4xMCArIHJuZCgpICogMC4zNSk7XG4gICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgY3ksIDAsIGN5ICsgbGVuKTtcbiAgICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVuKX0sJHswLjE2ICsgcm5kKCkgKiAwLjE4fSlgKTsgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVuKX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICAgIHdyYXAoKGR4KSA9PiBjdHguZmlsbFJlY3QoY3ggKyBkeCArIChybmQoKSAtIDAuNSkgKiBjciwgY3ksIHcsIGxlbikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIGNoYWxrIGJsb29tOiBsYXJnZSwgdmVyeSBzb2Z0LCBsb3ctY29udHJhc3QuIEl0IGlzIHRoZSB0b25lIHRoZSB0aWxlIHdhcyByZS1iYXNlZCBmb3IuXG4gICAgY29uc3QgY3NjYWxlID0gby5jaGFsa1NjYWxlID8/IDEsIGNhbHBoYSA9IG8uY2hhbGtBbHBoYSA/PyAwLjM1O1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uY2hhbGtQYXRjaGVzID8/IDkpOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgY3IgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTApICogY3NjYWxlO1xuICAgICAgYmxvYihjaGFsaywgY3gsIGN5LCBjciwgY2FscGhhICsgcm5kKCkgKiAwLjMwLCAwLjUgKyBybmQoKSAqIDAuNyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI2OyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3IgKiAxLjI1O1xuICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCAqIDAuNywgciA9IDEgKyBybmQoKSAqIDM7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihjaGFsayl9LCR7MC4yICsgcm5kKCkgKiAwLjR9KWA7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNC4gdGhlIHR3byBtYXJrcyB0aGF0IG9ubHkgbWFrZSBzZW5zZSBvbmNlIHRoZSB0aWxlIGlzIEhFSUdIVC1rZXllZDogbG9uZyBydW5zIGJsZWVkaW5nIGRvd25cbiAgICAvLyAgICBmcm9tIHRoZSB0b3AgZWRnZSAodGhlIHRvcCByYWlsIGlzIHdoZXJlIHdhdGVyIHNpdHMgYW5kIHRoZSBwYWludCBnb2VzIGZpcnN0KSBhbmQgYSBkaXJ0XG4gICAgLy8gICAgYmFuZCBhbG9uZyB0aGUgYm90dG9tLiBCb3RoIGFyZSBuby1vcHMgb24gYSB3b3JsZC1zcGFjZSB0aWxlLCB3aGVyZSB0aGVyZSBpcyBubyB1cC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnRvcFN0cmVha3MgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxNCwgbGVuID0gcyAqICgwLjI1ICsgcm5kKCkgKiAwLjU1KTtcbiAgICAgIGNvbnN0IGEgPSAwLjEwICsgcm5kKCkgKiAwLjIyO1xuICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBsZW4pO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVuKX0sJHthfSlgKTsgZy5hZGRDb2xvclN0b3AoMC4yNSwgYHJnYmEoJHtyZ2IocnVzdCl9LCR7YSAqIDAuOH0pYCk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydXN0KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCAwLCB3LCBsZW4pO1xuICAgIH1cbiAgICBpZiAoby5ncm91bmRCYW5kKSB7XG4gICAgICBjb25zdCBiID0gby5ncm91bmRCYW5kLCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIChvLmdyb3VuZEhlaWdodCA/PyAwLjIyKSkpO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVuKX0sJHtifSlgKTsgZy5hZGRDb2xvclN0b3AoMC40NSwgYHJnYmEoJHtyZ2IocnVuKX0sJHtiICogMC40fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1bil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIH1cblxuICAgIC8vIDUuIGZpbmUgZ3JhaW46IHRoZSB0b290aCBvZiBhIGJydXNoLXJvbGxlZCBpbmR1c3RyaWFsIHBhaW50LiBNdWx0aXBseSwgc28gaXQgb25seSBkYXJrZW5zLlxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZ3JhaW4gPz8gMTgwMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDAuNSArIHJuZCgpICogMS4zLCBhID0gMC4wMyArIHJuZCgpICogMC4wNztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgxNTAsMTQwLDEzMCwke2F9KWA7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKlxuICogQSBTV0VQVCBwb2x5bGluZSB0dWJlOiBPTkUgcmluZyBvZiBgc2VnYCB2ZXJ0aWNlcyBwZXIgcG9pbnQsIG1pdHJlZCBhdCBldmVyeSBiZW5kLCBpbmRleGVkIGFuZFxuICogc21vb3RoLXNoYWRlZC4gVGhpcyBpcyBub3Qgd2hhdCBgdHViZWAgZG9lcywgYW5kIHRoZSBkaWZmZXJlbmNlIGlzIGEgdmlzaWJsZSBkZWZlY3QgcmF0aGVyIHRoYW4gYVxuICogcmVmaW5lbWVudC4gYHR1YmVgIGNoYWlucyBhIHNlcGFyYXRlIGN5bGluZGVyIHBlciBzZWdtZW50IGFuZCBFWFRFTkRTIGVhY2ggb25lIGJ5IGByICogMS4yYCBzbyB0aGVcbiAqIGpvaW50cyBjbG9zZSAtLSB3aGljaCBpcyBmaW5lIHdoaWxlIHRoZSBzZWdtZW50cyBhcmUgbG9uZywgYW5kIGNhdGFzdHJvcGhpYyBvbiBhIHRpZ2h0IGN1cnZlOiBhXG4gKiAwLjEyIG0gY29ybmVyIHJhZGl1cyBzYW1wbGVkIGluIGZpdmUgc3RlcHMgaGFzIGEgMC4wMzggbSBjaG9yZCBhZ2FpbnN0IGEgMC4wMjUgbSBvdmVybGFwLCBzb1xuICogY29uc2VjdXRpdmUgY3lsaW5kZXJzIG92ZXJzaG9vdCBlYWNoIG90aGVyIGJ5IHR3byB0aGlyZHMgb2YgdGhlaXIgbGVuZ3RoIGFuZCB0aGUgYmVuZCByZW5kZXJzIGFzIGFcbiAqIGNydW1wbGVkIGFjY29yZGlvbiBvZiBwbGVhdHMuIFRoZSBjcm93ZCBiYXJyaWVyJ3Mgcm91bmRlZCB0b3AgY29ybmVycyBzaGlwcGVkIHRoYXQgd2F5LlxuICpcbiAqIFRoZSBmcmFtZSBpcyByb3RhdGlvbi1taW5pbWlzaW5nIChwYXJhbGxlbCB0cmFuc3BvcnQpLCBub3QgRnJlbmV0OiBhIEZyZW5ldCBmcmFtZSBmbGlwcyBpdHMgbm9ybWFsXG4gKiB0aHJvdWdoIGFuIGluZmxlY3Rpb24gYW5kIHR3aXN0cyB0aGUgdHViZSwgd2hpY2ggYSBVViBvciBhIHZlcnRleCBjb2xvdXIgdGhlbiBzaG93cyBhcyBhIHN0cmlwZVxuICogc3BpcmFsbGluZyBhbG9uZyBhIHJhaWwgdGhhdCBpcyBtZWFudCB0byBiZSBzdHJhaWdodC4gSW50ZXJpb3IgcG9pbnRzIHJpbmcgb24gdGhlIEJJU0VDVE9SIG9mIHRoZVxuICogdHdvIGFkamFjZW50IHRhbmdlbnRzLCB3aGljaCBpcyB0aGUgbWl0cmUgYSByZWFsIGJlbnQgdHViZSBoYXMuXG4gKi9cbmZ1bmN0aW9uIHN3ZWVwVHViZShwdHM6IG51bWJlcltdW10sIHI6IG51bWJlciwgc2VnID0gMTAsIGhleD86IG51bWJlciwgY2FwID0gdHJ1ZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgUCA9IHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IzKHBbMF0sIHBbMV0sIHBbMl0pKTtcbiAgLy8gZHJvcCByZXBlYXRlZCBwb2ludHM6IGEgemVyby1sZW5ndGggc2VnbWVudCBoYXMgbm8gdGFuZ2VudCwgYW5kIG9uZSBkdXBsaWNhdGUgaXMgZW5vdWdoIHRvXG4gIC8vIHB1dCBhIE5hTiB0aHJvdWdoIHRoZSB3aG9sZSB0cmFuc3BvcnQgY2hhaW5cbiAgZm9yIChsZXQgaSA9IFAubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkgaWYgKFBbaV0uZGlzdGFuY2VUbyhQW2kgLSAxXSkgPCAxZS03KSBQLnNwbGljZShpLCAxKTtcbiAgaWYgKFAubGVuZ3RoIDwgMikgcmV0dXJuIG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBjb25zdCBuID0gUC5sZW5ndGg7XG4gIGNvbnN0IHNlZ0RpcjogVEhSRUUuVmVjdG9yM1tdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbiAtIDE7IGkrKykgc2VnRGlyLnB1c2goUFtpICsgMV0uY2xvbmUoKS5zdWIoUFtpXSkubm9ybWFsaXplKCkpO1xuICAvLyBwZXItcG9pbnQgdGFuZ2VudDogdGhlIHNlZ21lbnQgZGlyZWN0aW9uIGF0IHRoZSBlbmRzLCB0aGUgYmlzZWN0b3IgYmV0d2VlbiB0d28gc2VnbWVudHMgaW5zaWRlXG4gIGNvbnN0IFQgPSBQLm1hcCgoXywgaSkgPT4gaSA9PT0gMCA/IHNlZ0RpclswXS5jbG9uZSgpXG4gICAgOiBpID09PSBuIC0gMSA/IHNlZ0RpcltuIC0gMl0uY2xvbmUoKVxuICAgIDogc2VnRGlyW2kgLSAxXS5jbG9uZSgpLmFkZChzZWdEaXJbaV0pLm5vcm1hbGl6ZSgpKTtcbiAgLy8gc2VlZCBhIG5vcm1hbCB0aGF0IGlzIG5vdCBwYXJhbGxlbCB0byB0aGUgZmlyc3QgdGFuZ2VudCwgdGhlbiB0cmFuc3BvcnQgaXQgcG9pbnQgdG8gcG9pbnRcbiAgbGV0IE4gPSBNYXRoLmFicyhUWzBdLnkpID4gMC45ID8gbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCkgOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKTtcbiAgTi5zdWIoVFswXS5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKE4uZG90KFRbMF0pKSkubm9ybWFsaXplKCk7XG4gIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGlmIChpID4gMCkge1xuICAgICAgLy8gcm90YXRlIHRoZSBjYXJyaWVkIG5vcm1hbCBieSB0aGUgc2FtZSByb3RhdGlvbiB0aGF0IHRha2VzIHRoZSBwcmV2aW91cyB0YW5nZW50IHRvIHRoaXMgb25lXG4gICAgICBjb25zdCBxID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoVFtpIC0gMV0sIFRbaV0pO1xuICAgICAgTi5hcHBseVF1YXRlcm5pb24ocSk7XG4gICAgICBOLnN1YihUW2ldLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoTi5kb3QoVFtpXSkpKS5ub3JtYWxpemUoKTtcbiAgICB9XG4gICAgY29uc3QgQiA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKFRbaV0sIE4pLm5vcm1hbGl6ZSgpO1xuICAgIC8vIGEgbWl0cmVkIHJpbmcgaXMgYW4gRUxMSVBTRSBpbiBpdHMgb3duIHBsYW5lOiB3aWRlbiBpdCBieSAxL2NvcyhoYWxmLWFuZ2xlKSBhbG9uZyB0aGUgYmVuZCBzb1xuICAgIC8vIHRoZSBzd2VwdCBzZWN0aW9uIHN0YXlzIGNpcmN1bGFyIHRocm91Z2ggdGhlIGNvcm5lciByYXRoZXIgdGhhbiBwaW5jaGluZyB0byBhIHdhaXN0XG4gICAgY29uc3QgayA9IGkgPiAwICYmIGkgPCBuIC0gMSA/IDEgLyBNYXRoLm1heCgwLjUsIHNlZ0RpcltpIC0gMV0uZG90KFRbaV0pKSA6IDE7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBjb25zdCBjID0gTWF0aC5jb3ModGgpLCBzID0gTWF0aC5zaW4odGgpO1xuICAgICAgcG9zLnB1c2goUFtpXS54ICsgKE4ueCAqIGMgKyBCLnggKiBzICogaykgKiByLCBQW2ldLnkgKyAoTi55ICogYyArIEIueSAqIHMgKiBrKSAqIHIsIFBbaV0ueiArIChOLnogKiBjICsgQi56ICogcyAqIGspICogcik7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbiAtIDE7IGkrKykgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgIC8vIChhLCBjMiwgYiksIE5PVCAoYSwgYiwgYzIpLiBUaGUgcmluZyBydW5zIE4gLT4gQiB3aXRoIEIgPSBUIHggTiwgc28gd2luZGluZyBhbG9uZyB0aGUgdHViZVxuICAgIC8vIGZpcnN0IGFuZCBhcm91bmQgaXQgc2Vjb25kIGdpdmVzIGEgZmFjZSBub3JtYWwgb2YgVCB4IEIgPSAtTjogZXZlcnkgd2FsbCB0cmlhbmdsZSBmYWNlcyBJTldBUkQuXG4gICAgLy8gQmFja2ZhY2UgY3VsbGluZyB0aGVuIGhpZGVzIHRoZSBuZWFyIHdhbGwgYW5kIHNob3dzIHRoZSBGQVIgb25lLCB3aGljaCBmb3IgYSBsaXQgZ3JleSB0dWJlIGxvb2tzXG4gICAgLy8gYWxtb3N0IHJpZ2h0IC0tIGFuZCB3cml0ZXMgaXRzIGRlcHRoIG9uIHRoZSBmYXIgc2lkZSwgc28gYW55dGhpbmcgcGFzc2luZyB0aHJvdWdoIHRoZSB0dWJlIGRyYXdzXG4gICAgLy8gaW4gZnJvbnQgb2YgaXQuIFRoZSBmb290IHN0dWJzIHN0b29kIHByb3VkbHkgdGhyb3VnaCB0aGUgYm90dG9tIHJhaWwgYmVjYXVzZSBvZiB0aGlzLCBhbmQgaXRcbiAgICAvLyByZWFkIGFzIGEgZ2VvbWV0cnkgZXJyb3IgaW4gdGhlIHN0dWIgcmF0aGVyIHRoYW4gYSB3aW5kaW5nIGVycm9yIGluIHRoZSBzd2VlcC5cbiAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYzIgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgIGlkeC5wdXNoKGEsIGMyLCBiLCBhLCBkLCBjMik7XG4gIH1cbiAgaWYgKGNhcCkge1xuICAgIC8vIEZsYXQgZW5kIGRpc2NzLCBvbiB0aGVpciBPV04gQ09QWSBvZiB0aGUgcmltIHZlcnRpY2VzLiBGYW5uaW5nIHRoZW0gb2ZmIHRoZSBzaWRlIHdhbGwncyByaW5nXG4gICAgLy8gc2hhcmVzIHRob3NlIHZlcnRpY2VzLCBhbmQgYGNvbXB1dGVWZXJ0ZXhOb3JtYWxzYCB0aGVuIGF2ZXJhZ2VzIHRoZSBkaXNjJ3MgYXhpYWwgbm9ybWFsIGludG9cbiAgICAvLyB0aGUgd2FsbCdzIHJhZGlhbCBvbmUgLS0gd2hpY2ggZG9lcyBub3Qgc2hhZGUgYSBzbGlnaHRseSB3cm9uZyByaW0sIGl0IHRpbHRzIHRoZSBub3JtYWwgYXQgQk9USFxuICAgIC8vIGVuZHMgb2YgYSB0d28tcG9pbnQgdHViZSBhbmQgc28gc2hhZGVzIHRoZSBXSE9MRSB0dWJlIHdyb25nLiBUaGUgZm9vdCBzdHVicyByZW5kZXJlZCBhcyBnbGFzc1xuICAgIC8vIHRlc3QgdHViZXMgd2l0aCBhIGJyaWdodCBiYW5kIHVuZGVyIHRoZSByYWlsLCBhbmQgdGhlIGJhbmQgcmVhZCBhcyBhIHNlcGFyYXRlIG9iamVjdCBzaXR0aW5nIG9uXG4gICAgLy8gaXQuIFNhbWUgZmF1bHQsIHNhbWUgZml4LCBhcyB0aGUgc2hhcnAtY29ybmVyIHNwbGl0IGluIGBsYXRoZWAuXG4gICAgZm9yIChjb25zdCBbcmluZywgYXQsIGZsaXBdIG9mIFtbMCwgUFswXSwgdHJ1ZV0sIFtuIC0gMSwgUFtuIC0gMV0sIGZhbHNlXV0gYXMgW251bWJlciwgVEhSRUUuVmVjdG9yMywgYm9vbGVhbl1bXSkge1xuICAgICAgY29uc3QgYmFzZSA9IHBvcy5sZW5ndGggLyAzO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykgeyBjb25zdCBrID0gKHJpbmcgKiBzZWcgKyBqKSAqIDM7IHBvcy5wdXNoKHBvc1trXSwgcG9zW2sgKyAxXSwgcG9zW2sgKyAyXSk7IH1cbiAgICAgIGNvbnN0IGNpID0gcG9zLmxlbmd0aCAvIDM7IHBvcy5wdXNoKGF0LngsIGF0LnksIGF0LnopO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgICBjb25zdCBhID0gYmFzZSArIGosIGIgPSBiYXNlICsgKGogKyAxKSAlIHNlZztcbiAgICAgICAgaWYgKGZsaXApIGlkeC5wdXNoKGNpLCBiLCBhKTsgZWxzZSBpZHgucHVzaChjaSwgYSwgYik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KChwb3MubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLnNldEluZGV4KGlkeCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gZyA6IHRpbnRHZW8oZywgaGV4KTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZlbmNlIGhlbHBlcnMgKi9cblxuLyoqIFBhbmVsIFVWczogdSBhbG9uZyB3b3JsZCBYIG92ZXIgYHNjYWxlYCBtZXRyZXMsIHYgd29ybGQgSEVJR0hUIG92ZXIgdGhlIHNhbWUsIHJlZ2FyZGxlc3Mgb2YgdGhlXG4gKiAgZmFjZSBub3JtYWwuIE9uIGEgdGhpbiBzbGFiIHRoaXMgbWVhbnMgdGhlIGZyb250IGFuZCBiYWNrIGZhY2VzIHNoYXJlIHRoZSBzYW1lIHRpbGUgcGxhY2VtZW50XG4gKiAgYW5kIHRoZSBlZGdlcyB0YWtlIGEgc2xpdmVyIG9mIGl0OyBhIGdyaW1lIHdhc2ggdGhhdCBrZXlzIG9uIHYgdGhlbiBsYW5kcyBhdCB0aGUgc2FtZSBoZWlnaHQgb25cbiAqICBldmVyeSBmYWNlLCB3aGljaCBpcyB3aGF0IHJhaW4gYW5kIGFsZ2FlIGRvLiAqL1xuZnVuY3Rpb24gcGFuZWxVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyLCByb3QgPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIC8vIGByb3RgIHN3YXBzIHRoZSBheGVzIHNvIGEgdGlsZSBvZiBWRVJUSUNBTCBzdHJpcHMgcmVhZHMgaG9yaXpvbnRhbCAtLSB0aGUgd292ZW4gYmFuZHMgb2YgYVxuICAvLyBiYW1ib28gcGFuZWwgYWdhaW5zdCBpdHMgdmVydGljYWwgbXVsbGlvbnMsIG9uZSB0aWxlLCBvbmUgbWF0ZXJpYWwuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdSA9IHJvdCA/IHAuZ2V0WShpKSA6IHAuZ2V0WChpKSwgdiA9IHJvdCA/IHAuZ2V0WChpKSA6IHAuZ2V0WShpKTtcbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSB2IC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBBIHNxdWFyZSBweXJhbWlkIFNQSUtFOiBiYXNlIHcgeCB3IGF0IGBhdGAsIGFwZXggaCBhYm92ZS4gQSBwaWNrZXQncyBzcGVhciBwb2ludCwgYSBwaWVyIGNhcC4gKi9cbmZ1bmN0aW9uIHNwaWtlKGF0OiBudW1iZXJbXSwgdzogbnVtYmVyLCBoOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ29uZUdlb21ldHJ5KHcgLyBNYXRoLlNRUlQyLCBoLCA0LCAxLCBmYWxzZSk7XG4gIGcucm90YXRlWShNYXRoLlBJIC8gNCk7XG4gIGcudHJhbnNsYXRlKGF0WzBdLCBhdFsxXSArIGggLyAyLCBhdFsyXSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogR1JJTUUgdGlsZTogYSBtdWx0aXBsaWVyIG9mIHdoaXRlIHdpdGggKGEpIGEgZGFyayB3YXNoIHJpc2luZyBmcm9tIHRoZSBncm91bmQgdG8gYGNvdmVyYWdlYCxcbiAqIChiKSB2ZXJ0aWNhbCByYWluIHN0cmVha3MgZnJvbSB0aGUgdG9wLCAoYykgc29mdCBkYXJrIGJsb3RjaGVzLCAoYzIpIGJyb2FkIENMT1VEIG1vdHRsaW5nLFxuICogKGQpIHN3ZXB0IHR5cmUgU0NVRkZTIG92ZXIgYVxuICogaGVpZ2h0IGJhbmQsIChlKSB2ZXJ0aWNhbCBmb3JtIFNFQU1TLCAoZikgUElOSE9MRVMgLS0gdGhlIGFpciBidWJibGVzIG9mIGEgcHJlY2FzdCBmYWNlLCAoZylcbiAqIG9wdGlvbmFsIGdyZWVuIG1vc3MvYWxnYWUgYmxvYnMgY29uY2VudHJhdGVkIGluIHRoZSBib3R0b20gYmFuZCwgYW5kIChoKSBmaW5lIGdyYWluLiAoZCksIChlKVxuICogYW5kIChmKSBhcmUgb2ZmIHVubGVzcyBhc2tlZCBmb3IsIHNvIG5vdGhpbmcgYWxyZWFkeSBlbWl0dGVkIGNoYW5nZXMuIEV2ZXJ5IGNvbG91ciBpcyBhIGZyYWN0aW9uIG9mIHRoZVxuICogbWF0ZXJpYWwncyBtZWFzdXJlZCBhbGJlZG8sIGFuZCB0aGUgZGFya2VzdCBjb3JlIGlzIGNsYW1wZWQgc28gbm90aGluZyBvbiBhIHdoaXRlIG9yIGNyZWFtXG4gKiBzdXJmYWNlIGRyb3BzIHRvd2FyZCB0aGUgaG9sZSBnYXRlJ3MgbHVtYSA1OC5cbiAqL1xuZnVuY3Rpb24gZ3JpbWVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IHdhc2ggPSBvLndhc2ggPz8gWzAuNjIsIDAuNjIsIDAuNThdLCB3YXNoQSA9IG8ud2FzaEFscGhhID8/IDAuNywgY292ID0gby5jb3ZlcmFnZSA/PyAwLjM7XG4gICAgLy8gYGJhc2VgIGlzIHRoZSB0b25lIHRoZSBVTi1ncmltZWQgcGFydCBvZiB0aGUgdGlsZSBjYXJyaWVzLCBkZWZhdWx0aW5nIHRvIHdoaXRlIC0tIGkuZS4gdG9cbiAgICAvLyBcImxlYXZlIHRoZSB2ZXJ0ZXggY29sb3VyIGFsb25lXCIsIHdoaWNoIGlzIGV2ZXJ5IGV4aXN0aW5nIGNhbGxlci4gSXQgZXhpc3RzIGZvciBFTlZFTE9QRVxuICAgIC8vIFJFLUJBU0lORzogYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4sIHNvIGEgcGFydCB0aGF0IG11c3QgcmVhZCBjbGVhbiBvcmFuZ2UgaW4gb25lIHBsYWNlIGFuZFxuICAgIC8vIGdyZXkgcm9hZCBncmltZSBpbiBhbm90aGVyIGNhbm5vdCBkbyBpdCBmcm9tIGEgc2luZ2xlIHZlcnRleCBjb2xvdXIsIGJlY2F1c2UgdGhlIGdyaW1lIGlzXG4gICAgLy8gSElHSEVSIGluIGJsdWUgdGhhbiB0aGUgb3JhbmdlIGlzLiBUaGUgdmVydGV4IGNvbG91ciBiZWNvbWVzIHRoZSBwZXItY2hhbm5lbCBtYXhpbXVtIG9mIGJvdGhcbiAgICAvLyBhbmQgdGhpcyBmaWxsIHBhaW50cyB0aGUgY2xlYW4gdG9uZSBiYWNrIG91dCBvZiBpdC5cbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIC8vIHJhaW4gc3RyZWFrcyBmcm9tIHRoZSB0b3BcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnN0cmVha3MgPz8gMjYpOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTIsIGxlbiA9IHMgKiAoMC4xNSArIHJuZCgpICogMC42KSwgYSA9IDAuMDUgKyBybmQoKSAqIDAuMTI7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBsZW4pO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGN0eC5maWxsUmVjdCh4LCAwLCB3LCBsZW4pOyBjdHguZmlsbFJlY3QoeCAtIHMsIDAsIHcsIGxlbik7XG4gICAgfVxuICAgIC8vIGdyb3VuZCB3YXNoLiBgd2FzaEZsYXRgIG1ha2VzIGl0IFVOSUZPUk0gaW5zdGVhZCBvZiBhIGJvdHRvbS11cCBncmFkaWVudCwgd2hpY2ggaXMgd2hhdCBhXG4gICAgLy8gaG9yaXpvbnRhbCBzbGFiIG5lZWRzOiBhIGdyYWRpZW50IGtleWVkIHRvIHRoZSB0aWxlJ3MgdiBtYXBzIHN0cmFpZ2h0IGFjcm9zcyBhIGZsYXQgZmFjZSBhbmRcbiAgICAvLyBzcGxpdHMgaXQgaW50byBhIHBhbGUgaGFsZiBhbmQgYSBkYXJrIGhhbGYgd2l0aCBhIGhhcmQgZWRnZSBiZXR3ZWVuIHRoZW0uIERlZmF1bHRlZCBvZmYsIHNvXG4gICAgLy8gZXZlcnkgcHJvcCB0aGF0IGRvZXMgbm90IGFzayBmb3IgaXQgaXMgdW5jaGFuZ2VkLlxuICAgIGlmIChvLndhc2hGbGF0KSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEF9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3YpKTtcbiAgICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBfSlgKTsgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQSAqIDAuNDV9KWApOyBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuICAgIC8vIGJsb3RjaGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ibG90Y2hlcyA/PyA0MCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMS42KSAqIHMsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNiwgYSA9IDAuMDggKyBybmQoKSAqIDAuMztcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIFJVQlM6IG5lYXItYmxhY2sgdHlyZSBzbWVhcnMgbG93IG9uIHRoZSB0aWxlLiBEaXN0aW5jdCBmcm9tIGBibG90Y2hlc2AsIHdoaWNoIGRhcmtlbiB0b3dhcmRcbiAgICAvLyB0aGUgZ3JpbWUgdG9uZTogYSB0eXJlIHJ1YiBpcyBhIGRpZmZlcmVudCBjb2xvdXIgYW5kIGEgZGlmZmVyZW50IHNoYXBlIC0tIGxvbmcsIGxvdywgYW5kIG11Y2hcbiAgICAvLyBkYXJrZXIgdGhhbiBhbnl0aGluZyB3ZWF0aGVyIGRvZXMuIERlZmF1bHQgMCwgc28gbm8gZXhpc3RpbmcgY2FsbGVyIGNoYW5nZXMuXG4gICAgaWYgKG8ucnVicykge1xuICAgICAgY29uc3QgcnViID0gby5ydWIgPz8gWzAuMzAsIDAuMjgsIDAuMzBdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnJ1YnM7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAqICgwLjYwICsgcm5kKCkgKiAwLjM4KTtcbiAgICAgICAgY29uc3QgdyA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4yMiksIGggPSBzICogKDAuMDA2ICsgcm5kKCkgKiAwLjAzMCksIGEgPSAwLjIwICsgcm5kKCkgKiAwLjQ1O1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCh4IC0gdyAvIDIsIDAsIHggKyB3IC8gMiwgMCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydWIpfSwwKWApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke3JnYihydWIpfSwke2F9KWApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnViKX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4IC0gdyAvIDIgKyBkeCwgeSAtIGggLyAyLCB3LCBoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gU0NVRkZTOiBzb2Z0IHBhdGNoZXMgd2hlcmUgdGhlIHdhc2ggaXMgZXJhc2VkIGJhY2sgdG93YXJkIHdoaXRlLiBUaGUgdGlsZSBpcyBjb21wb3NpdGVkXG4gICAgLy8gbXVsdGlwbHktb24td2hpdGUsIHNvIHBhaW50aW5nIHdoaXRlIHNvdXJjZS1vdmVyIGlzIHBhaW50aW5nIFwibm90IGRhcmtlbmVkXCIgLS0gd2hpY2ggaXMgdGhlXG4gICAgLy8gb25seSB3YXkgYSBtdWx0aXBseSB0aWxlIGNhbiBwdXQgUEFMRSB3ZWFyIG9uIGEgZGFyayBiYXNlIHdpdGhvdXQgcmUtYmFzaW5nIHRoZSBlbnZlbG9wZVxuICAgIC8vIHR3aWNlLiBEZWZhdWx0ZWQgdG8gbm9uZS5cbiAgICBpZiAoby5zY3VmZnMpIHtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnNjdWZmczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIChvLnNjdWZmU2NhbGUgPz8gMC4xNCkpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDI1NSwyNTUsMjU1LCR7by5zY3VmZkFscGhhID8/IDAuNTV9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgfVxuXG4gICAgLy8gQ0xPVURTOiBicm9hZCwgdmVyeSBzb2Z0IHBhdGNoZXMgb3ZlciB0aGUgV0hPTEUgdGlsZS4gQSBjYXN0IGZhY2UgaXMgbW90dGxlZCBhdCB0aGUgc2NhbGUgb2ZcbiAgICAvLyB0ZW5zIG9mIGNlbnRpbWV0cmVzIC0tIHBvdXIgbGluZXMsIGRhbXAsIHRoZSBtb3VsZCdzIG93biBoaXN0b3J5IC0tIGFuZCB0aGF0IGxvdyBmcmVxdWVuY3kgaXNcbiAgICAvLyBtb3N0IG9mIHdoYXQgc2VwYXJhdGVzIGEgcmVuZGVyZWQgc3RhbmRhcmQgZGV2aWF0aW9uIG9mIDYgZnJvbSB0aGUgcGxhdGUncyAxMi4gU21hbGwgbWFya3NcbiAgICAvLyBjYW5ub3Qgc3VwcGx5IGl0OiBhdCBwcm9wIGRpc3RhbmNlIGEgdGhvdXNhbmQgb2YgdGhlbSBhdmVyYWdlIGJhY2sgb3V0IHRvIG9uZSBmbGF0IHRvbmUuXG4gICAgLy8gS2VlcCB0aGVtIFNNQUxMIHJlbGF0aXZlIHRvIHRoZSB0aWxlLCB0aG91Z2guIEEgdGlsZSB0aGF0IHJlcGVhdHMgdHdvIG9yIHRocmVlIHRpbWVzIGFjcm9zcyBhXG4gICAgLy8gcHJvcCByZXBlYXRzIGl0cyBjbG91ZHMgdG9vLCBhbmQgYSBjbG91ZCB0aGUgc2l6ZSBvZiBhIHRoaXJkIG9mIHRoZSB0aWxlIHRoZW4gcmVhZHMgYXNcbiAgICAvLyBjYW1vdWZsYWdlIHdpdGggYSB2aXNpYmxlIHNlYW0gLS0gdGhlIHNhbWUgZmFpbHVyZSBhcyBoYXJkIGJsb3RjaGVzLCBvbmUgb2N0YXZlIGxvd2VyLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uY2xvdWRzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHYgPSBvLmNsb3VkID8/IFswLjg2LCAwLjg2LCAwLjg0XTtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKG8uY2xvdWRSID8/IDAuMTYpICogKDAuNCArIHJuZCgpICogMS40KSwgYSA9IChvLmNsb3VkQWxwaGEgPz8gMC4xMikgKiAoMC40ICsgcm5kKCkpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIFNDVUZGIGFyY3M6IHRoZSB0eXJlIGFuZCBidW1wZXIgbWFya3MgYSByb2Fkc2lkZSBiYXJyaWVyIGNvbGxlY3RzIG9uIHRoZSBiYW5kIHRoZSB0cmFmZmljXG4gICAgLy8gYWN0dWFsbHkgcmVhY2hlcy4gQnJvYWQsIHNvZnQsIG5lYXItaG9yaXpvbnRhbCBzbWVhcnMgd2l0aCBhIHN3ZXB0IHNoYXBlIC0tIGEgYmxvdGNoIHJlYWRzIGFzXG4gICAgLy8gYSBzdGFpbiwgYW5kIHdoYXQgdGhlIHBsYXRlIGNhcnJpZXMgaXMgc29tZXRoaW5nIHRoYXQgd2VudCBwYXN0LiBgc2N1ZmZCYW5kYCBpcyBhIHBhaXIgb2ZcbiAgICAvLyBIRUlHSFQgZnJhY3Rpb25zICgwIGF0IHRoZSBncm91bmQpLCBzbyBpdCBpcyBzdGF0ZWQgaW4gdGhlIHNhbWUgdGVybXMgYXMgYGNvdmVyYWdlYC5cbiAgICBpZiAoby5zY3VmZnMpIHtcbiAgICAgIGNvbnN0IHYgPSBvLnNjdWZmID8/IFswLjYyLCAwLjYyLCAwLjY0XSwgYmFuZCA9IG8uc2N1ZmZCYW5kID8/IFswLjMwLCAwLjcwXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5zY3VmZnM7IGkrKykge1xuICAgICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBzICogKDEgLSAoYmFuZFswXSArIHJuZCgpICogKGJhbmRbMV0gLSBiYW5kWzBdKSkpO1xuICAgICAgICBjb25zdCB3ID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjExKSwgaCA9IHcgKiAoMC4wNSArIHJuZCgpICogMC4xMCk7XG4gICAgICAgIGNvbnN0IGEgPSAoby5zY3VmZkFscGhhID8/IDAuMzQpICogKDAuNSArIHJuZCgpKTtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgICAgY3R4LnNhdmUoKTsgY3R4LnRyYW5zbGF0ZShjeCArIGR4LCBjeSk7IGN0eC5yb3RhdGUoKHJuZCgpIC0gMC41KSAqIDAuNDUpOyBjdHguc2NhbGUoMSwgaCAvIHcpO1xuICAgICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KDAsIDAsIDAsIDAsIDAsIHcpO1xuICAgICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNDUsIGByZ2JhKCR7cmdiKHYpfSwke2EgKiAwLjU1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKDAsIDAsIHcsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEZPUk0gU0VBTVM6IHRoZSB2ZXJ0aWNhbCBqb2ludCBsaW5lcyBhIHByZWNhc3QgbW91bGQgbGVhdmVzLCBvbmUgcGVyIHRpbGUuIEEgZGFyayBoYWlybGluZSB3aXRoXG4gICAgLy8gYSBwYWxlciBsaXAgYmVzaWRlIGl0LCB3aGljaCBpcyB3aGF0IGEgcHJvdWQgc2VhbSBsb29rcyBsaWtlIC0tIGEgc2luZ2xlIGRhcmsgbGluZSByZWFkcyBhcyBhXG4gICAgLy8gc2NyYXRjaC4gYHNlYW1BdGAgcGxhY2VzIGl0IGFzIGEgZnJhY3Rpb24gb2YgdGhlIHRpbGUgc28gaXQgZG9lcyBub3QgbGFuZCBvbiB0aGUgd3JhcC5cbiAgICBpZiAoby5zZWFtcykge1xuICAgICAgY29uc3QgdiA9IG8uc2VhbSA/PyBbMC43MiwgMC43MSwgMC42OF07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8uc2VhbXM7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZChzICogKChvLnNlYW1BdCA/PyAwLjQyKSArIGkgLyBvLnNlYW1zKSkgJSBzO1xuICAgICAgICBjb25zdCB3cHggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHMgKiAwLjAwNCkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7by5zZWFtQWxwaGEgPz8gMC41fSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgd3B4LCBzKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHYpfSwkeyhvLnNlYW1BbHBoYSA/PyAwLjUpICogMC4zfSlgOyBjdHguZmlsbFJlY3QoeCArIHdweCwgMCwgd3B4LCBzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUElOSE9MRVM6IHRoZSBhaXIgYnViYmxlcyBhIHByZWNhc3QgZmFjZSBpcyBjb3ZlcmVkIGluLiBUaGV5IGFyZSB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmdcbiAgICAvLyBtYXJrIG9mIGJhcmUgY29uY3JldGUgYXQgcHJvcCBkaXN0YW5jZSAtLSB3aXRob3V0IHRoZW0gdGhlIGZhY2UgaXMgYSBwYWludGVkIHNsYWIsIHdoaWNoIGlzXG4gICAgLy8gbWVhc3VyYWJsZSBhcyBhIHJlbmRlcmVkIHN0YW5kYXJkIGRldmlhdGlvbiBhIHRoaXJkIG9mIHRoZSBwbGF0ZSdzLiBTbWFsbCwgZGFyaywgYW5kIE1BTlkuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5waXRzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHYgPSBvLnBpdCA/PyBbMC40MiwgMC40MCwgMC4zNl07XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gKG8ucGl0UiA/PyAxLjYpICogKDAuNSArIHJuZCgpICogMS4zKTtcbiAgICAgIGNvbnN0IGEgPSAwLjI1ICsgcm5kKCkgKiAwLjU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByICogMik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjQsIGByZ2JhKCR7cmdiKHYpfSwke2EgKiAwLjQ1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIgKiAyLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gbW9zcyAvIGFsZ2FlIGluIHRoZSBib3R0b20gYmFuZDogY2x1c3RlcmVkIHNwZWNrcywgYnJpZ2h0ZXItdGhhbi13YXNoIGdyZWVuXG4gICAgaWYgKG8ubW9zcykge1xuICAgICAgY29uc3QgbSA9IG8ubW9zcywgYmFuZCA9IG8ubW9zc0JhbmQgPz8gMC4yMjtcbiAgICAgIC8vIGEgZmFpbnQgZ3JlZW4gd2FzaCBvdmVyIHRoZSB3aG9sZSBiYW5kIGZpcnN0LCBzbyB0aGUgY2FycGV0cyBzaXQgaW4gZGFtcCBncm91bmQgcmF0aGVyIHRoYW5cbiAgICAgIC8vIGFzIGlzb2xhdGVkIGRvdHMgb24gY2xlYW4gcGFpbnRcbiAgICAgIGNvbnN0IG1nID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGJhbmQgKiAxLjMpKTtcbiAgICAgIG1nLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihtKX0sJHtvLm1vc3NXYXNoID8/IDAuMzV9KWApOyBtZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IobSl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbWc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ubW9zc0NsdXN0ZXJzID8/IDE0KTsgaysrKSB7XG4gICAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMS42KSAqIHMgKiBiYW5kLCBjciA9IHMgKiAoMC4wMTUgKyBybmQoKSAqIDAuMDQpO1xuICAgICAgICAvLyB0aGUgY2FycGV0OiBhIHNvZnQgYmxvYiwgdGhlbiBzcGVja3Mgb3ZlciBpdCBmb3IgdGhlIHR1ZnRlZCBlZGdlXG4gICAgICAgIGNvbnN0IGNnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSwgMCwgY3gsIGN5LCBjcik7XG4gICAgICAgIGNnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihtKX0sMC43KWApOyBjZy5hZGRDb2xvclN0b3AoMC42LCBgcmdiYSgke3JnYihtKX0sMC4zNSlgKTsgY2cuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKG0pfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY2c7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4ICsgZHgsIGN5LCBjciwgY3IgKiAwLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjcjtcbiAgICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCAqIDAuNiwgciA9IDEgKyBybmQoKSAqIDM7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKG0pfSwkezAuMzUgKyBybmQoKSAqIDAuNX0pYDtcbiAgICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZ3JhaW4uIGBncmFpbmAvYGdyYWluQWxwaGFgIGRlZmF1bHQgdG8gdGhlIG9yaWdpbmFsIDE1MDAgYXQgMC4xMiwgc28gbm8gYWxyZWFkeS1lbWl0dGVkIHByb3BcbiAgICAvLyBjaGFuZ2VzOyBhIHRpbGUgc3RyZXRjaGVkIG92ZXIgYSBXSE9MRSBwcm9wICh1dlNjYWxlID4gaXRzIGhlaWdodCkgc2FtcGxlcyBvbmx5IHRoZSBmcmFjdGlvblxuICAgIC8vIG9mIHRoZSB0aWxlIHdpZHRoIGhlaWdodFVWIGZvbGRzIG9udG8gaXQsIGFuZCBuZWVkcyB0aGUgY291bnQgcmFpc2VkIHRvIGtlZXAgdGhlIHNhbWUgZGVuc2l0eS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyYWluID8/IDE1MDApOyBpKyspIHtcbiAgICAgIGNvbnN0IGxvID0gby5ncmFpbkxvID8/IDIwMDsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgdiA9IGxvICsgTWF0aC5yb3VuZChybmQoKSAqICgyNTUgLSBsbykpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LCR7by5ncmFpbkFscGhhID8/IDAuMTJ9KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIENIQUlOLUxJTksgdGlsZTogYSBkaWFtb25kIHdpcmUgbGF0dGljZSBkcmF3biBvcGFxdWUgb3ZlciBhIFRSQU5TUEFSRU5UIGdyb3VuZCwgYm91bmQgYXMgbWFwXG4gKiAgb24gYW4gYWxwaGEtdGVzdGVkIG1hdGVyaWFsIHNvIHRoZSBjZWxscyBhcmUgb3Blbi4gT25lIHRpbGUgaXMgb25lIGRpYW1vbmQgY2VsbDsgdGhlIHBhbmUnc1xuICogIFVWcyByZXBlYXQgaXQgYXQgdGhlIHJlYWwgbWVzaCBwaXRjaC4gYHdpcmVgIGlzIHRoZSB3aXJlIHdpZHRoIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGNlbGwuICovXG5mdW5jdGlvbiBjaGFpbmxpbmtUaWxlKHNpemU6IG51bWJlciwgd2lyZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHgubGluZVdpZHRoID0gTWF0aC5tYXgoMS41LCB3aXJlICogcyk7XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGNvbnN0IHYgPSAxNTAgKyBNYXRoLnJvdW5kKHJuZCgpICogMzApO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2IoJHt2fSwke3YgKyAyfSwke3YgKyA0fSlgO1xuICAgIC8vIHR3byBkaWFnb25hbHMgdGhyb3VnaCB0aGUgdGlsZSwgb2Zmc2V0IHNvIHRoZSB3cmFwIG1ha2VzIGEgY29udGludW91cyBkaWFtb25kIGxhdHRpY2VcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCAwKTsgY3R4LmxpbmVUbyhzLCBzKTtcbiAgICBjdHgubW92ZVRvKHMsIDApOyBjdHgubGluZVRvKDAsIHMpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyB0aGUga251Y2tsZSB3aGVyZSB3aXJlcyB0d2lzdCByb3VuZCBlYWNoIG90aGVyLCBhdCB0aGUgdHdvIGNyb3NzaW5ncyBvbiB0aGUgdGlsZSBlZGdlc1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7diAtIDIwfSwke3YgLSAxOH0sJHt2IC0gMTZ9KWA7XG4gICAgZm9yIChjb25zdCBbeCwgeV0gb2YgW1swLCAwXSwgW3MsIDBdLCBbMCwgc10sIFtzLCBzXSwgW3MgLyAyLCBzIC8gMl1dKSB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSwgY3R4LmxpbmVXaWR0aCAqIDAuOSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBCQU1CT08gU1RSSVAgdGlsZTogdmVydGljYWwgc3BsaXQtYmFtYm9vIHN0cmlwcyB3aXRoIHBhbGUgY3VsbSBmYWNlcywgZGFyayBqb2ludHMgYmV0d2VlbiB0aGVtXG4gKiAgYW5kIGEgbm9kZSBsaW5lIG9yIHR3byAtLSBhIG11bHRpcGxpZXIgb24gdGhlIG1lYXN1cmVkIHNpbHZlci1ncmV5LiAqL1xuZnVuY3Rpb24gYmFtYm9vVGlsZShzaXplOiBudW1iZXIsIHN0cmlwczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IHN3ID0gcyAvIHN0cmlwcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IHN0cmlwczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MCArIHJuZCgpICogMC4yLCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0b25lKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2IC0gMn0sJHt2IC0gNn0pYDsgY3R4LmZpbGxSZWN0KGIgKiBzdywgMCwgc3csIHMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUwLDQyLDM0LDAuNiknOyBjdHguZmlsbFJlY3QoYiAqIHN3LCAwLCBNYXRoLm1heCgxLCBzICogMC4wMDYpLCBzKTtcbiAgICAgIC8vIGEgaGlnaGxpZ2h0IGRvd24gdGhlIGN1bG0ncyByb3VuZFxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTApJzsgY3R4LmZpbGxSZWN0KGIgKiBzdyArIHN3ICogMC4zNSwgMCwgc3cgKiAwLjI1LCBzKTtcbiAgICAgIC8vIG5vZGUgcmluZ3NcbiAgICAgIGNvbnN0IG4gPSAxICsgTWF0aC5mbG9vcihybmQoKSAqIDIpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHsgY29uc3QgeSA9IHJuZCgpICogczsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDcwLDYwLDQ4LDAuNDUpJzsgY3R4LmZpbGxSZWN0KGIgKiBzdywgeSwgc3csIE1hdGgubWF4KDEsIHMgKiAwLjAwOCkpOyB9XG4gICAgICAvLyBmaW5lIGdyYWluIGxpbmVzXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDY7IGsrKykgeyBjb25zdCB4ID0gYiAqIHN3ICsgcm5kKCkgKiBzdzsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDgwLDcwLDU4LCR7MC4wNSArIHJuZCgpICogMC4xfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7IH1cbiAgICB9XG4gICAgLy8gbW91bGQgc3BlY2tsZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzAwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLDI4LDI0LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHgsIHksIDEgKyBybmQoKSAqIDIsIDEgKyBybmQoKSAqIDIpOyB9XG4gIH0pO1xufVxuXG4vKiogUE9TVEVSIHRpbGUgZm9yIGEgaG9hcmRpbmc6IHRvcm4gcGFzdGUtdXAgc2hlZXRzIGFuZCBhIHNwcmF5IHN0ZW5jaWwgb3ZlciBhIFRSQU5TUEFSRU5UIGdyb3VuZCxcbiAqICBib3VuZCBvbiBhbiBhbHBoYS10ZXN0ZWQgcGFuZSBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgc2hlZXQuIGBsaW5lc2AgYXJlIHRoZSBzdGVuY2lsXG4gKiAgc3RyaW5nczsgYSBwcmludGVkIGdyYXBoaWMgaXMgZXhhY3RseSB0aGUgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIGNhc2UuICovXG5mdW5jdGlvbiBwb3N0ZXJUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBsaW5lczogc3RyaW5nW10pOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBwYXN0ZS11cHM6IG92ZXJsYXBwaW5nIG9mZi13aGl0ZSByZWN0YW5nbGVzIHdpdGggdG9ybiBlZGdlcyBhbmQgZmFpbnQgcHJpbnQgbGluZXNcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4zMCksIHkgPSBzICogKDAuMTUgKyBybmQoKSAqIDAuNDUpLCB3ID0gcyAqICgwLjE0ICsgcm5kKCkgKiAwLjE2KSwgaCA9IHMgKiAoMC4xOCArIHJuZCgpICogMC4yMik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHsyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwkezIyMiArIE1hdGgucm91bmQocm5kKCkgKiAxOCl9LCR7MjEwICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKX0sMC45NilgO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgY29uc3QgbiA9IDk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIGN0eC5saW5lVG8oeCArIHcgKiBpIC8gbiwgeSArIChybmQoKSAtIDAuNSkgKiBoICogMC4wOCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIGN0eC5saW5lVG8oeCArIHcgKyAocm5kKCkgLSAwLjUpICogdyAqIDAuMDgsIHkgKyBoICogaSAvIG4pO1xuICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkgY3R4LmxpbmVUbyh4ICsgdyAqIGkgLyBuLCB5ICsgaCArIChybmQoKSAtIDAuNSkgKiBoICogMC4xMik7XG4gICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSBjdHgubGluZVRvKHggKyAocm5kKCkgLSAwLjUpICogdyAqIDAuMDgsIHkgKyBoICogaSAvIG4pO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDQwLDQ1LDAuNTUpJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSBjdHguZmlsbFJlY3QoeCArIHcgKiAwLjEsIHkgKyBoICogKDAuMiArIGkgKiAwLjEpLCB3ICogKDAuMyArIHJuZCgpICogMC41KSwgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgfVxuICAgIC8vIHNwcmF5IHN0ZW5jaWwsIHNsaWdodGx5IHNvZnQgYW5kIHVuZXZlblxuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyMCwyMiwwLjg4KSc7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAke01hdGgucm91bmQocyAqIDAuMDcpfXB4IHNhbnMtc2VyaWZgO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcyAqIDAuNDAsIHkgPSBzICogKDAuNDQgKyBpICogMC4xMyk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDM7IGsrKykgeyBjdHguZ2xvYmFsQWxwaGEgPSAwLjY7IGN0eC5maWxsVGV4dChsaW5lc1tpXSwgeCArIChybmQoKSAtIDAuNSkgKiAzLCB5ICsgKHJuZCgpIC0gMC41KSAqIDMpOyB9XG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBTVFJJUEUgdGlsZTogYWx0ZXJuYXRpbmcgY29sb3VyIGJhbmRzIGFsb25nIHUgKGFuIGF3bmluZyksIHdpdGggYSBzb2Z0IGdyaW1lIG11bHRpcGx5IHNvIHRoZSBjbG90aFxuICogIHJlYWRzIHdvcm4gcmF0aGVyIHRoYW4gcHJpbnRlZC4gYGFgL2BiYCBhcmUgdGhlIHR3byBiYW5kIGNvbG91cnMgYXMgW3IsZyxiXSAwLTEuIEJvdW5kIGFzIG1hcCBvbiBhXG4gKiAgV0hJVEUgbWF0ZXJpYWwgc28gdGhlIGJhbmRzIGNhcnJ5IHRoZSB3aG9sZSBhbGJlZG8uICovXG4vLyBgb2AgaXMgb3B0aW9uYWwgYW5kIGV2ZXJ5IGZpZWxkIGRlZmF1bHRzIHRvIHRoZSBwcmV2aW91cyBoYXJkLWNvZGVkIGJlaGF2aW91ciwgc28gbm8gcHJvcCB0aGF0XG4vLyBkb2VzIG5vdCBwYXNzIGl0IGNoYW5nZXMuIGBzbXVkZ2VzYCBhbmQgYHNwZWNrc2AgZXhpc3QgYmVjYXVzZSBicnVzaGVkIFNURUVMIHdhbnRzIHRoZSBiYW5kaW5nXG4vLyB3aXRob3V0IHRoZSBkaXJ0OiB0aGUgNDAgcmFkaWFsIHNtdWRnZXMgYW5kIDEyMDAgbGlnaHQgc3BlY2tzIHJlYWQgYXMgbW91bGQgb24gYSBjbGVhbiBzYXRpblxuLy8gc3VyZmFjZSwgd2hpY2ggaXMgdGhlIG9wcG9zaXRlIG9mIHdoYXQgYSBzdHJpcGUgdGlsZSBpcyBmb3IgdGhlcmUuXG5mdW5jdGlvbiBzdHJpcGVUaWxlKHNpemU6IG51bWJlciwgYmFuZHM6IG51bWJlciwgYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIG86IGFueSA9IHt9KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYHJnYigke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfSlgO1xuICAgIGNvbnN0IHcgPSBzIC8gYmFuZHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYW5kczsgaSsrKSB7IGN0eC5maWxsU3R5bGUgPSByZ2IoaSAlIDIgPyBiIDogYSk7IGN0eC5maWxsUmVjdChNYXRoLmZsb29yKGkgKiB3KSwgMCwgTWF0aC5jZWlsKHcpICsgMSwgcyk7IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNtdWRnZXMgPz8gNDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wOCwgYWwgPSAwLjA2ICsgcm5kKCkgKiAwLjE4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTUwLDE0MCwxMjUsJHthbH0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxNTAsMTQwLDEyNSwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwZWNrcyA/PyAxMjAwKTsgaSsrKSB7IGNvbnN0IHYgPSAyMDAgKyBNYXRoLnJvdW5kKHJuZCgpICogNTUpOyBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4xMClgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDEuNSwgMS41KTsgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFNlYW1sZXNzIGFyb3VuZC1ieS11cCBVVnMgZm9yIGEgTGF0aGVHZW9tZXRyeTogdSBmcm9tIHRoZSBTRUdNRU5UIGluZGV4ICh0aGUgbGF0aGUgb3JkZXJzIGl0c1xuICogIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IsIGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgc28gdGhlIGR1cGxpY2F0ZWQgc2VhbSBjb2x1bW4gcmVhZHNcbiAqICB1ID0gcmVwZWF0cyBleGFjdGx5IGFuZCBSZXBlYXRXcmFwcGluZyBjbG9zZXMgaXQuIGBzY2FsZWAgaXMgdGhlIHRpbGUgc2l6ZSBpbiBtZXRyZXM7IHRoZVxuICogIGFyb3VuZC1yZXBlYXQgY291bnQgaXMgcm91bmRlZCBzbyB0aGUgdGlsZSBtZWV0cyBpdHNlbGYsIGZyb20gdGhlIHByb2ZpbGUncyB3aWRlc3QgcmFkaXVzLiAqL1xuZnVuY3Rpb24gbGF0aGVVVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcG9pbnRDb3VudDogbnVtYmVyLCBzZWc6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdlNjYWxlID0gc2NhbGUsIHYwID0gMCk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGxldCByTWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHJNYXggPSBNYXRoLm1heChyTWF4LCBNYXRoLmh5cG90KHAuZ2V0WChpKSwgcC5nZXRaKGkpKSk7XG4gIGNvbnN0IHJlcCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoMiAqIE1hdGguUEkgKiByTWF4IC8gc2NhbGUpKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBzID0gTWF0aC5mbG9vcihpIC8gcG9pbnRDb3VudCk7XG4gICAgdXZbaSAqIDJdID0gKHMgLyBzZWcpICogcmVwOyB1dltpICogMiArIDFdID0gKHAuZ2V0WShpKSAtIHYwKSAvIHZTY2FsZTtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG59XG5cbi8qKiBFWFBPU0VELUFHR1JFR0FURSB0aWxlOiBhIGRhcmsgbW9ydGFyIGdyb3VuZCBwYWNrZWQgd2l0aCByb3VuZGVkIHBlYmJsZXMgaW4gYSBtZWFzdXJlZCBwYWxldHRlLFxuICogIGVhY2ggZHJhd24gYXQgbmluZSB3cmFwcGVkIG9mZnNldHMgc28gdGhlIHRpbGUgaXMgc2VhbWxlc3MuIGBvLnBhbGV0dGVgIGlzIGEgbGlzdCBvZiBbcixnLGJdXG4gKiAgcmF0aW9zIGFnYWluc3QgdGhlIG1hdGVyaWFsIGNvbG91ciwgYG8uZ3JvdW5kYCB0aGUgbW9ydGFyIHJhdGlvLCBgby5jb3VudGAgdGhlIHBlYmJsZSBjb3VudC4gKi9cbmZ1bmN0aW9uIHBlYmJsZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX0pYDtcbiAgICBjdHguZmlsbFN0eWxlID0gcmdiKG8uZ3JvdW5kID8/IFswLjQ1LCAwLjQyLCAwLjM4XSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBwYWw6IG51bWJlcltdW10gPSBvLnBhbGV0dGUgPz8gW1swLjg1LCAwLjc4LCAwLjY2XSwgWzAuNzIsIDAuNjIsIDAuNTBdLCBbMC42MCwgMC41OCwgMC41NV0sIFswLjkwLCAwLjg2LCAwLjgwXV07XG4gICAgY29uc3QgbiA9IG8uY291bnQgPz8gOTAwLCByTWluID0gcyAqIChvLnJNaW4gPz8gMC4wMTIpLCByTWF4ID0gcyAqIChvLnJNYXggPz8gMC4wMjgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByeCA9IHJNaW4gKyBybmQoKSAqIChyTWF4IC0gck1pbiksIHJ5ID0gcnggKiAoMC42ICsgcm5kKCkgKiAwLjUpLCBhID0gcm5kKCkgKiBNYXRoLlBJO1xuICAgICAgY29uc3QgYyA9IHBhbFtNYXRoLmZsb29yKHJuZCgpICogcGFsLmxlbmd0aCldLCBrID0gMC44NSArIHJuZCgpICogMC4zO1xuICAgICAgLy8gQ09OVEFDVCBTSEFET1cgZmlyc3QsIG9mZnNldCBkb3duLXJpZ2h0IGFuZCBhIHRvdWNoIGxhcmdlciwgc28gd2hhdCBzdXJ2aXZlcyBhcm91bmQgZWFjaFxuICAgICAgLy8gc3RvbmUgaXMgdGhlIGRhcmsgbW9ydGFyIGNyZXNjZW50IHRoYXQgbWFrZXMgYSBwYWNrZWQgYWdncmVnYXRlIHJlYWQgYXMgc3RvbmVzIHJhdGhlciB0aGFuXG4gICAgICAvLyBhcyBvdmVybGFwcGluZyBmbGF0IGRpc2NzLiBgc2hhZGVgIGlzIGEgcmF0aW8gYWdhaW5zdCB0aGUgbW9ydGFyIGdyb3VuZDsgMCBrZWVwcyB0aGUgb2xkXG4gICAgICAvLyBsb29rIGZvciBldmVyeSB0aWxlIGFscmVhZHkgc2hpcHBlZC5cbiAgICAgIGlmIChvLnNoYWRlKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSByZ2IoKG8uZ3JvdW5kID8/IFswLjQ1LCAwLjQyLCAwLjM4XSkubWFwKCh2KSA9PiB2ICogby5zaGFkZSkpO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCArIHJ4ICogMC4xNiwgeSArIGR5ICsgcnkgKiAwLjIyLCByeCAqIDEuMSwgcnkgKiAxLjEsIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgICAgY3R4LmZpbGxTdHlsZSA9IHJnYihjLm1hcCgodikgPT4gTWF0aC5taW4oMSwgdiAqIGspKSk7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByeCwgcnksIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgLy8gYSBoaWdobGlnaHQgY3Jlc2NlbnQgb24gdGhlIGxpdCBzaWRlIHNvIGVhY2ggc3RvbmUgcmVhZHMgYXMgYSBidW1wXG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjU1LDI1NSwyNTUsJHtvLmdsb3NzID8/IDAuMTh9KWA7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCAtIHJ4ICogMC4yLCB5ICsgZHkgLSByeSAqIDAuMjUsIHJ4ICogMC41LCByeSAqIDAuNCwgYSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFRZUkUgVFJFQUQgdGlsZSBmb3IgYSBsYXRoZSBjYXJyeWluZyBgY3lsVVZgOiB1IHJ1bnMgQVJPVU5EIHRoZSB0eXJlIGFuZCB2IFVQIGl0LCBzbyB0cmVhZCBzbG90cyBhcmVcbiAqICBiYXJzIGF0IGNvbnN0YW50IHUgYW5kIHRoZSBjaXJjdW1mZXJlbnRpYWwgZ3Jvb3ZlcyBhcmUgbGluZXMgYXQgY29uc3RhbnQgdi4gRHJhd24gYXMgcmF0aW9zIG9uIHdoaXRlXG4gKiAgYW5kIG11bHRpcGxpZWQgaW50byB0aGUgKGxpZnRlZCkgcnViYmVyIGNvbG91cjsgYG8uZ3Jvb3ZlYCBpcyB0aGUgZGFya2VzdCByYXRpbywga2VwdCBhYm92ZSB0aGVcbiAqICBsdW1hLTU4IGhvbGUgYmFuZCBieSB0aGUgY2FsbGVyLiBgby5zbG90c2AgYmFycyBwZXIgdGlsZSwgYG8ucmluZ3NgIGNpcmN1bWZlcmVudGlhbCBsaW5lcy4gKi9cbmZ1bmN0aW9uIHRyZWFkVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGdyb292ZSA9IG8uZ3Jvb3ZlID8/IDAuODAsIHNsb3RzID0gby5zbG90cyA/PyAyLCByaW5ncyA9IG8ucmluZ3MgPz8gMjtcbiAgICAvLyBgYmFzZWAgaXMgdGhlIHRvbmUgdGhlIFVOLWdyaW1lZCBwYXJ0IG9mIHRoZSB0aWxlIGNhcnJpZXMsIGRlZmF1bHRpbmcgdG8gd2hpdGUgLS0gaS5lLiB0b1xuICAgIC8vIFwibGVhdmUgdGhlIHZlcnRleCBjb2xvdXIgYWxvbmVcIiwgd2hpY2ggaXMgZXZlcnkgZXhpc3RpbmcgY2FsbGVyLiBJdCBleGlzdHMgZm9yIEVOVkVMT1BFXG4gICAgLy8gUkUtQkFTSU5HOiBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbiwgc28gYSBwYXJ0IHRoYXQgbXVzdCByZWFkIGNsZWFuIG9yYW5nZSBpbiBvbmUgcGxhY2UgYW5kXG4gICAgLy8gZ3JleSByb2FkIGdyaW1lIGluIGFub3RoZXIgY2Fubm90IGRvIGl0IGZyb20gYSBzaW5nbGUgdmVydGV4IGNvbG91ciwgYmVjYXVzZSB0aGUgZ3JpbWUgaXNcbiAgICAvLyBISUdIRVIgaW4gYmx1ZSB0aGFuIHRoZSBvcmFuZ2UgaXMuIFRoZSB2ZXJ0ZXggY29sb3VyIGJlY29tZXMgdGhlIHBlci1jaGFubmVsIG1heGltdW0gb2YgYm90aFxuICAgIC8vIGFuZCB0aGlzIGZpbGwgcGFpbnRzIHRoZSBjbGVhbiB0b25lIGJhY2sgb3V0IG9mIGl0LlxuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgY29uc3QgZ3YgPSBNYXRoLnJvdW5kKDI1NSAqIGdyb292ZSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICBjb25zdCBwaXRjaCA9IHMgLyBzbG90cywgdyA9IHBpdGNoICogKG8uc2xvdFdpZHRoID8/IDAuMTYpO1xuICAgIC8vIHRyZWFkIHNsb3RzIHNwYW4gdGhlIGJhbmQgYmV0d2VlbiB0aGUgdHdvIGVkZ2Ugc2hvdWxkZXJzICh2IDAuMTIuLjAuODggb2YgdGhlIHRpbGUpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbG90czsgaSsrKSB7IGNvbnN0IHggPSBpICogcGl0Y2ggKyBwaXRjaCAqIDAuNCArIChybmQoKSAtIDAuNSkgKiBwaXRjaCAqIDAuMTsgY3R4LmZpbGxSZWN0KHgsIHMgKiAwLjEyLCB3LCBzICogMC43Nik7IGN0eC5maWxsUmVjdCh4IC0gcywgcyAqIDAuMTIsIHcsIHMgKiAwLjc2KTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmluZ3M7IGkrKykgeyBjb25zdCB5ID0gcyAqICgwLjIgKyAwLjYgKiAoaSArIDAuNSkgLyByaW5ncyk7IGN0eC5maWxsUmVjdCgwLCB5IC0gMS41LCBzLCAzKTsgfVxuICAgIC8vIHNpZGV3YWxsIHNoZWVuOiBhIHNvZnQgbGlnaHRlciB3YXNoIHNvIHRoZSBydWJiZXIgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTIpLCB2ID0gMjM1ICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpOyBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC41KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0gfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIE9MRCBUWVJFIHRpbGU6IFRXTyB0eXJlIGhlaWdodHMgdGFsbCBieSBgby5waXRjaGAgbWV0cmVzIGFyb3VuZCAoY3lsVVYpLiBUaGUgdXBwZXIgaGFsZiAodiAwLjUtMSlcbiAqICBpcyBhIHRyZWFkZWQgdHlyZSwgdGhlIGxvd2VyIGhhbGYgKHYgMC0wLjUpIGEgd29ybiBTTElDSyB3aXRoIGNpcmN1bWZlcmVudGlhbCBncm9vdmVzIGFuZCBzaG9ydFxuICogIHNob3VsZGVyIHNpcGVzIG9ubHksIHNvIGEgc3RhY2sgbWl4ZXMgYmFsZCBhbmQgdHJlYWRlZCB0eXJlcyBvZmYgb25lIGNhbnZhcyBieSB2MC4gRHJhd24gYXMgUkFUSU9TXG4gKiAgYWdhaW5zdCB0aGUgdmVydGV4LWNvbG91cmVkIHJ1YmJlciBhdCBgYmFzZWAgKDIwMC8yNTUgLT4gdmVydGV4IHRvbmVzIGFyZSBhdXRob3JlZCAxLjI3NXggdGhlXG4gKiAgaW50ZW5kZWQgYWxiZWRvIHNvIGR1c3QgYW5kIHNjdWZmcyBjYW4gZ28gQlJJR0hURVIgdGhhbiB0aGUgcnViYmVyIHVuZGVyIGEgbXVsdGlwbHkgY2FudmFzKS5cbiAqICBSb3dzIGFyZSBoZWlnaHRzOiBsb3dlciBzaWRld2FsbCwgdHJlYWQgYmFuZCAodiBgby5iYW5kWzBdYC4uYG8uYmFuZFsxXWAgb2YgdGhlIHN0cmlwKSwgdXBwZXJcbiAqICBzaWRld2FsbCB3aXRoIGJlYWQgcmluZ3MgYW5kIG1vdWxkIGxpbmVzLiBXZWFyOiBhIHdhcm0gZHVzdCB3YXNoIG9uIHRoZSBsb3dlciBzaG91bGRlciwgZ3JleSBzY3VmZnNcbiAqICBvbiBib3RoIHNob3VsZGVycywgZHVzdCBjYXVnaHQgaW4gdGhlIGN1dHMsIGdyYWluIG92ZXIgZXZlcnl0aGluZy4gKi9cbmZ1bmN0aW9uIHR5cmVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyAyMDAsIGJhbmQgPSBvLmJhbmQgPz8gWzAuMjQsIDAuNzZdLCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjQ1O1xuICAgIGNvbnN0IGd2ID0gTWF0aC5yb3VuZChiYXNlICogZ3Jvb3ZlKSwgcnYgPSBNYXRoLnJvdW5kKGJhc2UgKiAwLjcpLCBtdiA9IE1hdGgucm91bmQoYmFzZSAqIDAuOSk7XG4gICAgY29uc3QgZHVzdCA9IG8uZHVzdCA/PyBbMjMyLCAyMTQsIDE5MF07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtiYXNlfSwke2Jhc2V9LCR7YmFzZX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcyAqIHMgLyA2OyBpKyspIHsgY29uc3QgdiA9IGJhc2UgKyBNYXRoLnJvdW5kKChybmQoKSAtIDAuNSkgKiAyMik7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMiwgMik7IH1cbiAgICAvLyBvbmUgdHlyZSBzdHJpcCBiZXR3ZWVuIGNhbnZhcyByb3dzIHlhICh0b3ApIGFuZCB5YiAoYm90dG9tKTsgY2FudmFzIHkgZ3Jvd3MgRE9XTiwgdiBncm93cyBVUFxuICAgIGNvbnN0IHN0cmlwID0gKHlhOiBudW1iZXIsIHliOiBudW1iZXIsIHRyZWFkZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IGggPSB5YiAtIHlhLCBiMCA9IHlhICsgaCAqICgxIC0gYmFuZFsxXSksIGIxID0geWEgKyBoICogKDEgLSBiYW5kWzBdKTtcbiAgICAgIGNvbnN0IG5nID0gby5ncm9vdmVzID8/IDMsIGd3ID0gaCAqIDAuMDI0O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmc7IGkrKykgeyBjb25zdCB5ID0gYjAgKyAoYjEgLSBiMCkgKiAoaSArIDEpIC8gKG5nICsgMSk7IGN0eC5maWxsUmVjdCgwLCB5IC0gZ3cgLyAyLCBzLCBndyk7IH1cbiAgICAgIGNvbnN0IG5zID0gby5zaXBlcyA/PyAyLCB3ID0gcyAqIChvLnNpcGVXaWR0aCA/PyAwLjA1KTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDw9IG5nOyBrKyspIHtcbiAgICAgICAgY29uc3QgeTAgPSBrID09PSAwID8gYjAgOiBiMCArIChiMSAtIGIwKSAqIGsgLyAobmcgKyAxKSArIGd3IC8gMiwgeTEgPSBrID09PSBuZyA/IGIxIDogYjAgKyAoYjEgLSBiMCkgKiAoayArIDEpIC8gKG5nICsgMSkgLSBndyAvIDI7XG4gICAgICAgIC8vIGEgc2xpY2sga2VlcHMgb25seSBTSE9SVCBzaXBlcyBhdCB0aGUgdHdvIHNob3VsZGVyIHJvd3MsIGN1dCBpbiBmcm9tIHRoZSBiYW5kIGVkZ2VcbiAgICAgICAgY29uc3Qgb3V0ZXIgPSBrID09PSAwIHx8IGsgPT09IG5nO1xuICAgICAgICBpZiAoIXRyZWFkZWQgJiYgIW91dGVyKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgeXMwID0gdHJlYWRlZCA/IHkwIDogKGsgPT09IDAgPyB5MCA6IHkxIC0gKHkxIC0geTApICogMC40NSksIHlzMSA9IHRyZWFkZWQgPyB5MSA6IChrID09PSAwID8geTAgKyAoeTEgLSB5MCkgKiAwLjQ1IDogeTEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5zOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0gKChpICsgMC41KSAvIG5zICsgKGsgJSAyKSAqIDAuNSAvIG5zKSAqIHMgKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMDYsIHNsID0gKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA4O1xuICAgICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcsIHlzMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdyArIHNsLCB5czEpOyBjdHgubGluZVRvKHggKyBkeCArIHNsLCB5czEpOyBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gc2hvdWxkZXIgc3RlcCBhdCB0aGUgdG9wIG9mIHRoZSBiYW5kLCBiZWFkIHJpbmdzIGFuZCBtb3VsZCBsaW5lcyBvbiB0aGUgc2lkZXdhbGxzXG4gICAgICBjb25zdCBzaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBiMCAtIGggKiAwLjAzLCAwLCBiMCArIGggKiAwLjAyKTsgc2guYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9LDApYCk7IHNoLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2d2fSwke2d2fSwke2d2fSwwLjQ1KWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHNoOyBjdHguZmlsbFJlY3QoMCwgYjAgLSBoICogMC4wMywgcywgaCAqIDAuMDUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtydn0sJHtydn0sJHtydn0pYDsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuMDQ1LCBzLCBoICogMC4wMTIpOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC45NCwgcywgaCAqIDAuMDEyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7bXZ9LCR7bXZ9LCR7bXZ9KWA7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjExLCBzLCAyKTsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuODgsIHMsIDIpO1xuICAgICAgLy8gd2Vhcjogd2FybSByb2FkIGR1c3Qgb24gdGhlIGxvd2VyIHNob3VsZGVyIGFuZCBzaWRld2FsbCwgZ3JleSBzY3VmZnMgb24gYm90aCBzaG91bGRlcnNcbiAgICAgIGNvbnN0IGRnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliLCAwLCB5YSArIGggKiAwLjYpOyBkZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtkdXN0WzBdfSwke2R1c3RbMV19LCR7ZHVzdFsyXX0sJHtvLmR1c3RBbHBoYSA/PyAwLjM1fSlgKTsgZGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZGc7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjYsIHMsIGggKiAwLjQpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3VmZnMgPz8gMTQpOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpIDwgMC41ID8gYjAgKyAocm5kKCkgLSAwLjMpICogaCAqIDAuMDggOiBiMSArIChybmQoKSAtIDAuNykgKiBoICogMC4wOCwgciA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSksIHYgPSAyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjUpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTsgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuNSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5LCByICogMi4yLCByICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcic7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IGIwICsgcm5kKCkgKiAoYjEgLSBiMCksIHYgPSA2ICsgTWF0aC5yb3VuZChybmQoKSAqIDE0KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOSl9LCR7TWF0aC5yb3VuZCh2ICogMC43NSl9KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAyICsgcm5kKCkgKiA2LCAyICsgcm5kKCkgKiAzKTsgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfTtcbiAgICBzdHJpcCgwLCBzIC8gMiwgdHJ1ZSk7ICAgICAgLy8gdiAwLjUuLjE6IHRyZWFkZWRcbiAgICBzdHJpcChzIC8gMiwgcywgZmFsc2UpOyAgICAgLy8gdiAwLi4wLjU6IHNsaWNrXG4gIH0pO1xufVxuXG4vKiogQSB0YXBlcmVkIGJveDogQm94R2VvbWV0cnkoMSwgaCwgMSkgd2hvc2UgeC96IGFyZSBzY2FsZWQgcGVyIHZlcnRleCBieSB0aGUgZm9vdHByaW50IGludGVycG9sYXRlZFxuICogIGZyb20gKHcwLCBkMCkgYXQgdGhlIGJvdHRvbSB0byAodzEsIGQxKSBhdCB0aGUgdG9wLiBOb3JtYWxzIHJlY29tcHV0ZWQgc28gdGhlIHNsYW50ZWQgZmFjZXMgc2hhZGVcbiAqICBmbGF0LiBgYmAgPSBbY3gsIHlCb3R0b20sIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0uICovXG5mdW5jdGlvbiBmcnVzdHVtKGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBbY3gsIHkwLCBjeiwgdzAsIGQwLCB3MSwgZDEsIGhdID0gYjtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCBoLCAxKTtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSAocC5nZXRZKGkpICsgaCAvIDIpIC8gaDtcbiAgICBwLnNldFgoaSwgcC5nZXRYKGkpICogKHcwICsgKHcxIC0gdzApICogdCkpOyBwLnNldFooaSwgcC5nZXRaKGkpICogKGQwICsgKGQxIC0gZDApICogdCkpO1xuICB9XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgZy50cmFuc2xhdGUoY3gsIHkwICsgaCAvIDIsIGN6KTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogSE9ULURJUCBHQUxWQU5JU0VEIFpJTkM6IGNsb3VkeSB0b25lIGRyaWZ0LCBjcnlzdGFsbGluZSBTUEFOR0xFLCBhbmQgcnVzdCBibGVlZGluZyBmcm9tIHRoZSB3ZWxkcy5cbiAqXG4gKiBUaGlzIGV4aXN0cyBiZWNhdXNlIGBncmltZVRpbGVgIG1lYXN1cmFibHkgY2Fubm90IHNheSBgZ2FsdmFuaXNlZGAuIE1lYXN1cmVkIG9uIHRoZSBjcm93ZFxuICogYmFycmllcidzIHBsYXRlIGFnYWluc3QgaXRzIGZpcnN0IGJ1aWxkLCBvdmVyIG1hdGNoZWQgZmxhdCBwYW5lbCBjcm9wczogdGhlIHBsYXRlIHJlYWRzIG1lYW4gbHVtYVxuICogMTU3LTE1OSB3aXRoIHNkIDEyLTE2IGFuZCBhIHA1Li5wOTUgc3BhbiBvZiB+NDIsIGFuZCB0aGUgcmVuZGVyIHJlYWQgbWVhbiAxNDIgd2l0aCBzZCA4LTEwIGFuZCBhXG4gKiBzcGFuIG9mIH4yMSAtLSBoYWxmIHRoZSB0b25hbCB2YXJpYXRpb24sIGFuZCBDTElQUEVEIGF0IHRoZSB0b3AgKHA3NSA9IHA5NSA9IDE0NywgdGhlIHRpbGUgZG9pbmdcbiAqIG5vdGhpbmcgYXQgYWxsIG92ZXIgdGhlIHVwcGVyIGhhbGYgb2YgdGhlIHBhbmVsKS4gQSBnYWx2YW5pc2VkIHN1cmZhY2UgaXMgbm90IGRpcnQgb24gZ3JleSBwYWludDpcbiAqIGl0IGlzIGEgZnJvemVuIGNyeXN0YWwgc3RydWN0dXJlLCBicmlnaHQgaXJyZWd1bGFyIHNwYW5nbGUgZmFjZXRzIHN0YW5kaW5nIEFCT1ZFIHRoZSBiYXNlIHRvbmVcbiAqIHdpdGggZHVsbCBncmV5LWJyb3duIGRyaWZ0IGJldHdlZW4gdGhlbSwgYW5kIHRoZSBicmlnaHRlc3QgZmlmdGggb2YgaXQgaXMgdGhlIHBhcnQgdGhhdCByZWFkcy5cbiAqXG4gKiBBIGNhbnZhcyB0aWxlIGlzIGJvdW5kIGFzIGEgTVVMVElQTFkgbWFwLCBzbyBpdCBjYW4gb25seSBldmVyIGRhcmtlbiAtLSB3aGljaCBpcyB3aHkgdGhlIHNwcmVhZFxuICogd2FzIG9uZS1zaWRlZC4gVGhlIHRpbGUgaXMgdGhlcmVmb3JlIGF1dGhvcmVkIGFyb3VuZCBhIGBtaWRgIG11bHRpcGxpZXIgd2VsbCBiZWxvdyAxIGFuZCB0aGVcbiAqIGNhbGxlciByYWlzZXMgdGhlIGJhc2UgYWxiZWRvIGJ5IDEvbWlkOiB0aGUgc3BhbmdsZSB0aGVuIHJlYWNoZXMgYmFjayB1cCB0byB0aGUgYmFzZSB3aGlsZSB0aGVcbiAqIGRyaWZ0IGZhbGxzIGF3YXkgYmVsb3cgaXQsIGFuZCB0aGUgc3VyZmFjZSB2YXJpZXMgaW4gQk9USCBkaXJlY3Rpb25zIGFib3V0IGl0cyBtZWFuLiBBdXRob3IgdGhlXG4gKiBhbGJlZG8gZm9yIHRoYXQsIG9yIHRoZSBwcm9wIHNoaXBzIGFzIGJyaWdodCBhcyB0aGUgc3BhbmdsZSBldmVyeXdoZXJlLlxuICpcbiAqIGBydXN0QmFuZGAgYmxlZWRzIGEgZGVzYXR1cmF0ZWQgYnJvd24gZG93biBmcm9tIHRoZSB0b3AgYW5kIHVwIGZyb20gdGhlIGJvdHRvbSAtLSB0aGUgdHdvIHBsYWNlcyBhXG4gKiBiYXJyaWVyJ3Mgd2VsZHMgYXJlIC0tIGJlY2F1c2UgcnVzdCBvbiBnYWx2YW5pc2VkIHN0ZWVsIHN0YXJ0cyBhdCBhIHdlbGQsIHdoZXJlIHRoZSB6aW5jIHdhc1xuICogYnVybnQgb2ZmLCBhbmQgUlVOUy4gVGhlIHBsYXRlJ3MgcnVzdCBtZWFzdXJlcyAjODI2ZTU4IG92ZXIgMi4yJSBvZiB0aGUgZnJhbWU6IGEgd2FzaCwgbm90IHRoZVxuICogb3JhbmdlIHBvbGthIGRvdHMgYSBibG90Y2ggdGlsZSBnaXZlcy5cbiAqL1xuZnVuY3Rpb24gemluY1RpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBtaWQgPSBvLm1pZCA/PyAwLjg4LCBsbyA9IG8ubG8gPz8gMC43NDtcbiAgICBjb25zdCBnID0gKHY6IG51bWJlcikgPT4geyBjb25zdCBiID0gTWF0aC5yb3VuZCgyNTUgKiB2KTsgcmV0dXJuIGByZ2IoJHtifSwke2J9LCR7Yn0pYDsgfTtcbiAgICBjdHguZmlsbFN0eWxlID0gZyhtaWQpOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gY2xvdWR5IGRyaWZ0OiBicm9hZCBzb2Z0IGJsb2JzIGJvdGggYWJvdmUgYW5kIGJlbG93IHRoZSBtaWQsIHRoZSBtb3R0bGUgYSBkaXAgbGVhdmVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gNjApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDYgKyBybmQoKSAqIDAuMTYpO1xuICAgICAgY29uc3QgdXAgPSBybmQoKSA8IDAuNTtcbiAgICAgIGNvbnN0IHYgPSB1cCA/IG1pZCArICgxIC0gbWlkKSAqICgwLjM1ICsgcm5kKCkgKiAwLjUpIDogbG8gKyAobWlkIC0gbG8pICogcm5kKCk7XG4gICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke28uY2xvdWRBbHBoYSA/PyAwLjI4fSlgKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLDAsMCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gU1BBTkdMRTogaXJyZWd1bGFyIGJyaWdodCBjcnlzdGFsIGZhY2V0cywgYW5ndWxhciByYXRoZXIgdGhhbiByb3VuZCwgdXAgdG8gdGhlIGJhc2UgdG9uZS5cbiAgICAvLyBTbWFsbCBhbmQgZGVuc2UgLS0gbGFyZ2Ugb25lcyByZWFkIGFzIHNwbGFzaGVzIG9mIHdoaXRlIHBhaW50LCB3aGljaCBpcyB0aGUgZmFpbHVyZSBtb2RlIGFcbiAgICAvLyBibG90Y2ggdGlsZSBmYWxscyBpbnRvLlxuICAgIC8vIENMVVNURVJFRCwgbm90IHNjYXR0ZXJlZC4gVW5pZm9ybWx5IHNwcmVhZCBmYWNldHMgcmVhZCBhcyBzbm93IG9yIGR1c3Qgc3BlY2tzIC0tIGlzb2xhdGVkXG4gICAgLy8gYnJpZ2h0IGRvdHMgb24gYSBzbW9vdGggZmllbGQsIHdoaWNoIGlzIHdoYXQgdGhlIHNlY29uZCB0dW5pbmcgc2hpcHBlZCBhbmQgd2hhdCB0aGUgcGxhdGUgaGFzXG4gICAgLy8gbm9uZSBvZi4gUmVhbCBzcGFuZ2xlIGJsb29tczogdGhlIGNyeXN0YWxzIG51Y2xlYXRlIHRvZ2V0aGVyLCBzbyB0aGUgc3VyZmFjZSBpcyBwYXRjaGVzIG9mXG4gICAgLy8gZGVuc2UgYnJpZ2h0IGZhY2V0cyB3aXRoIHF1aWV0IGdyZXkgYmV0d2VlbiB0aGVtLiBgc3BhbmdsZUNsdXN0ZXJzYCBjZW50cmVzIGNhcnJ5XG4gICAgLy8gYDEgLSBzcGFuZ2xlTG9vc2VgIG9mIHRoZSBmYWNldHMsIGRpc3RyaWJ1dGVkIHNxcnQtdW5pZm9ybWx5IHNvIGVhY2ggYmxvb20gaXMgZGVuc2UgYXQgaXRzXG4gICAgLy8gbWlkZGxlIGFuZCB0aGlucyBhdCBpdHMgZWRnZTsgdGhlIHJlc3Qgc3RheSBzY2F0dGVyZWQgc28gdGhlIGZpZWxkIGlzIG5ldmVyIGJhbGQuXG4gICAgY29uc3QgY2wgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBvLnNwYW5nbGVDbHVzdGVycyA/PyAwIH0sICgpID0+IFtybmQoKSAqIHMsIHJuZCgpICogcywgcyAqICgwLjA0ICsgcm5kKCkgKiAwLjEwKV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BhbmdsZSA/PyA1MjApOyBpKyspIHtcbiAgICAgIGxldCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzO1xuICAgICAgaWYgKGNsLmxlbmd0aCAmJiBybmQoKSA+IChvLnNwYW5nbGVMb29zZSA/PyAwLjI1KSkge1xuICAgICAgICBjb25zdCBjID0gY2xbKHJuZCgpICogY2wubGVuZ3RoKSB8IDBdLCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjWzJdO1xuICAgICAgICB4ID0gY1swXSArIE1hdGguY29zKGEpICogZDsgeSA9IGNbMV0gKyBNYXRoLnNpbihhKSAqIGQ7XG4gICAgICB9XG4gICAgICBjb25zdCByID0gcyAqICgoby5zcGFuZ2xlTWluID8/IDAuMDA0KSArIE1hdGgucG93KHJuZCgpLCAyKSAqIChvLnNwYW5nbGVNYXggPz8gMC4wMTMpKTtcbiAgICAgIGNvbnN0IHYgPSBtaWQgKyAoMSAtIG1pZCkgKiAoMC41ICsgcm5kKCkgKiAwLjUpO1xuICAgICAgY29uc3QgayA9IDQgKyBNYXRoLmZsb29yKHJuZCgpICogMyk7XG4gICAgICBjb25zdCBhMCA9IHJuZCgpICogTWF0aC5QSSAqIDI7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHsoby5zcGFuZ2xlQWxwaGEgPz8gMC4yKSArIHJuZCgpICogKG8uc3BhbmdsZUFscGhhVmFyID8/IDAuMzUpfSlgO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGs7IGorKykge1xuICAgICAgICAgIGNvbnN0IGEgPSBhMCArIGogKiBNYXRoLlBJICogMiAvIGssIHJyID0gciAqICgwLjU1ICsgcm5kKCkgKiAwLjc1KTtcbiAgICAgICAgICBjb25zdCBweCA9IHggKyBkeCArIE1hdGguY29zKGEpICogcnIsIHB5ID0geSArIGR5ICsgTWF0aC5zaW4oYSkgKiByciAqIDAuODtcbiAgICAgICAgICBpZiAoaiA9PT0gMCkgY3R4Lm1vdmVUbyhweCwgcHkpOyBlbHNlIGN0eC5saW5lVG8ocHgsIHB5KTtcbiAgICAgICAgfVxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGRhcmsgZHJpcCBzdHJlYWtzIHJ1bm5pbmcgZG93bjogd2VhdGhlcmluZywgYW5kIHdoYXQgZ2l2ZXMgYSBmbGF0IHBhbmVsIGEgdmVydGljYWwgcmVhZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAzMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMCwgeTAgPSBybmQoKSAqIHMgKiAwLjUsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjcpO1xuICAgICAgY29uc3QgdiA9IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpICogMC42LCBhID0gMC4wNiArIHJuZCgpICogMC4xNDtcbiAgICAgIGNvbnN0IGdyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkwLCAwLCB5MCArIGxlbik7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sMClgKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgwLjI1LCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke2F9KWApO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3I7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkwLCB3LCBsZW4pO1xuICAgIH1cbiAgICAvLyBGSU5FIEdSQUlOIGFuZCBTQ1JBVENIRVMuIE1lYXN1cmVkIGFnYWluc3QgdGhlIHBsYXRlIGF0IG1hdGNoZWQgbWFnbmlmaWNhdGlvbiwgdGhpcyBpcyB0aGVcbiAgICAvLyBsYXllciB0aGUgZmlyc3QgdHVuaW5nIHdhcyBtaXNzaW5nIGVudGlyZWx5OiB0aGUgcGxhdGUncyB6aW5jIGlzIHNjcmF0Y2h5IGF0IDEtMiBweCBldmVyeXdoZXJlXG4gICAgLy8gLS0gZHJhd2luZyBtYXJrcywgaGFuZGxpbmcgc2N1ZmZzLCB0aGUgY3J5c3RhbCBib3VuZGFyaWVzIHRoZW1zZWx2ZXMgLS0gYW5kIHdpdGhvdXQgaXQgdGhlXG4gICAgLy8gZHJpZnQgYW5kIHRoZSBzcGFuZ2xlIHJlYWQgYXMgc29mdCBzbm93IG9uIHNtb290aCBncmV5IGhvd2V2ZXIgd2VsbCB0aGUgSElTVE9HUkFNIG1hdGNoZXMuIFR3b1xuICAgIC8vIGNyb3BzIHdpdGggaWRlbnRpY2FsIG1lYW4sIHNkIGFuZCBwZXJjZW50aWxlcyBjYW4gbG9vayBub3RoaW5nIGFsaWtlOyB0aGUgc3RhdGlzdGljIHRoYXRcbiAgICAvLyBzZXBhcmF0ZXMgdGhlbSBpcyBzcGF0aWFsIGZyZXF1ZW5jeSwgc28gdHVuZSB0aGlzIGJ5IGV5ZSBhZ2FpbnN0IGEgbWF0Y2hlZCBjcm9wLCBub3QgYnkgc2QuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogMiwgaCA9IDEgKyBybmQoKSAqIDI7XG4gICAgICBjb25zdCB1cCA9IHJuZCgpIDwgMC41O1xuICAgICAgY29uc3QgdiA9IHVwID8gbWlkICsgKDEgLSBtaWQpICogKDAuNCArIHJuZCgpICogMC42KSA6IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7MC4xMCArIHJuZCgpICogMC4zMH0pYDtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5ICsgZHksIHcsIGgpO1xuICAgIH1cbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3JhdGNoZXMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjAwNiArIHJuZCgpICogMC4wNTUpLCBhID0gKHJuZCgpIC0gMC41KSAqIDAuNyArIE1hdGguUEkgLyAyO1xuICAgICAgY29uc3QgdXAgPSBybmQoKSA8IDAuNDU7XG4gICAgICBjb25zdCB2ID0gdXAgPyBtaWQgKyAoMSAtIG1pZCkgKiAoMC41ICsgcm5kKCkgKiAwLjUpIDogbG8gKyAobWlkIC0gbG8pICogcm5kKCkgKiAwLjg7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwkezAuMTAgKyBybmQoKSAqIDAuMjh9KWA7XG4gICAgICBjdHgubGluZVdpZHRoID0gMC43ICsgcm5kKCkgKiAxLjY7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5ICsgZHkpO1xuICAgICAgICBjdHgubGluZVRvKHggKyBkeCArIE1hdGguY29zKGEpICogbGVuLCB5ICsgZHkgKyBNYXRoLnNpbihhKSAqIGxlbik7IGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUlVTVCBmcm9tIHRoZSB3ZWxkczogYSB3YXNoIGluIHRoZSB0b3AgYW5kIGJvdHRvbSBiYW5kcywgcGx1cyBydW5zIHRyYWlsaW5nIG91dCBvZiBpdFxuICAgIGlmIChvLnJ1c3QpIHtcbiAgICAgIGNvbnN0IGMgPSBvLnJ1c3QsIGJhbmQgPSBvLnJ1c3RCYW5kID8/IDAuMTY7XG4gICAgICBjb25zdCByZ2JzID0gYCR7TWF0aC5yb3VuZCgyNTUgKiBjWzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIGNbMV0pfSwke01hdGgucm91bmQoMjU1ICogY1syXSl9YDtcbiAgICAgIC8vIHRoZSB0d28gYmFuZHMgYXJlIFNFUEFSQVRFOiBvbiBhIGJhcnJpZXIgdGhlIGdyb3VuZCBlbmQgY2FycmllcyB0aGUgZmVldCwgdGhlIHN0dWIgd2VsZHMgYW5kXG4gICAgICAvLyBldmVyeSBydW4gb2ZmIHRoZW0sIGFuZCB0aGUgdG9wIGVuZCBjYXJyaWVzIG9ubHkgdGhlIHJhaWwncyBvd24gd2VsZHMuIE9uZSBzeW1tZXRyaWMgYmFuZFxuICAgICAgLy8gd2lkZSBlbm91Z2ggdG8gcmVhY2ggdGhlIHJhaWwgd2VsZHMgYXQgdiA9IDAuMjYgYWxzbyB3YXNoZXMgdGhlIHdob2xlIHVwcGVyIHRoaXJkIG9mIGV2ZXJ5XG4gICAgICAvLyBwYW5lbCwgd2hpY2ggdGhlIHBsYXRlIGRvZXMgbm90IGhhdmUuXG4gICAgICBmb3IgKGNvbnN0IFtlZGdlLCBkaXIsIGJdIG9mIFtbMCwgMSwgby5ydXN0QmFuZFRvcCA/PyBiYW5kXSwgW3MsIC0xLCBiYW5kXV0gYXMgbnVtYmVyW11bXSkge1xuICAgICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBlZGdlLCAwLCBlZGdlICsgZGlyICogcyAqIGIpO1xuICAgICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2JzfSwke28ucnVzdFdhc2ggPz8gMC4zMH0pYCk7IGdyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYnN9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBncjsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ydXN0UnVucyA/PyAyMik7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDE0O1xuICAgICAgICBjb25zdCB0b3AgPSBybmQoKSA8IDAuNTtcbiAgICAgICAgY29uc3QgeTAgPSB0b3AgPyAwIDogcyAtIHMgKiBiYW5kICogKDAuMyArIHJuZCgpKTtcbiAgICAgICAgY29uc3QgbGVuID0gcyAqICgwLjEwICsgcm5kKCkgKiAwLjMyKTtcbiAgICAgICAgY29uc3QgZ3IgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdic30sJHswLjE4ICsgcm5kKCkgKiAwLjMyfSlgKTsgZ3IuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdic30sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkwLCB3LCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY2Fub3B5LW1vZHVsZSBoZWxwZXJzXG4gKiBUaGUgZml2ZSBDQU5PUFkgTU9EVUxFUyAtLSBuaXBhIHRoYXRjaCwgdmV0aXZlciB0aGF0Y2gsIHNwbGl0IGJhbWJvbywgY29ycnVnYXRlZCBtZXRhbCxcbiAqIHRhcnBhdWxpbiAtLSBhcmUgb25lIGZhbWlseTogZm91ciBjb3JuZXIgcG9zdHMgaW5zaWRlIGEgNCB4IDQgbSBtb2R1bGUsIGEgaGVhZCBmcmFtZSwgYW5kIGEgcm9vZlxuICogd2hvc2UgbWF0ZXJpYWwgaXMgdGhlIHdob2xlIGlkZW50aXR5LiBXaGF0IHRoZXkgbmVlZCBiZXlvbmQgdGhlIHN0cmVldC1wcm9wIHZvY2FidWxhcnkgaXMgYVxuICogcm9vZmluZyB0aWxlIHBlciBtYXRlcmlhbCBhbmQgdGhlIGN1bG0gbWFwcGluZyBhIHJvdW5kIGJhbWJvbyBwb2xlIHdhbnRzLlxuICpcbiAqIGBjdWxtVVZgLCBgZ3JhaW5MaW5lc2AsIGB3ZWF0aGVyUGF0Y2hlc2AsIGBtb3VsZENsdXN0ZXJzYCBhbmQgYGN1bG1UaWxlYCBhcmUgcG9ydGVkIFZFUkJBVElNIGZyb21cbiAqIHNjcmF0Y2gvX2ZlbmNlL2ZlbmNlLmhlbHBlcnMudG1wbCwgd2hlcmUgdGhleSB3ZXJlIHdyaXR0ZW4gZm9yIHRoZSBiYW1ib28gZmVuY2UgcGFuZWwgYW5kIHdoZXJlXG4gKiB0aGUgcmVhc29uaW5nIGJlaGluZCBldmVyeSBudW1iZXIgaXMgcmVjb3JkZWQuIFRoZXkgYXJlIGNvcGllZCByYXRoZXIgdGhhbiBzaGFyZWQgYmVjYXVzZSB0aGUgdHdvXG4gKiBmYW1pbGllcyBrZWVwIHNlcGFyYXRlIHRlbXBsYXRlIHNldHM7IGEgdGhpcmQgZmFtaWx5IHdhbnRpbmcgdGhlbSBzaG91bGQgbW92ZSB0aGVtIHVwIGludG9cbiAqIGhlbHBlcnMudG1wbCByYXRoZXIgdGhhbiBjb3B5IHRoZW0gYSBzZWNvbmQgdGltZS5cbiAqL1xuXG4vKiogQ1VMTSBVVnM6IHUgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlIGFuZCB2IGFsb25nIHRoZSBsZW5ndGgsIGJvdGggaW4gbWV0cmVzIG92ZXIgYHNjYWxlYCwgc28gYVxuICogIGN1bG0gdGlsZSdzIG5vZGUgcmluZ3MgY3Jvc3MgdGhlIGN1bG0gYXQgcmVhbCBzcGFjaW5nIHdoaWNoZXZlciB3YXkgdGhlIGN5bGluZGVyIGlzIHRoZW4gcm90YXRlZC5cbiAqICBBcHBseSBCRUZPUkUgcm90YXRlL3RyYW5zbGF0ZS4gYHZPZmZgIHBoYXNlcyB0aGUgdGlsZSBhbG9uZyB0aGUgY3VsbSBzbyBubyB0d28gY3VsbXMgKG9yIGEgY29yZFxuICogIGNvbGxhcikgcmluZyBhdCB0aGUgc2FtZSBzdGF0aW9uLiAqL1xuZnVuY3Rpb24gY3VsbVVWKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCByOiBudW1iZXIsIGg6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdk9mZiA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gIGNvbnN0IGt1ID0gKDIgKiBNYXRoLlBJICogcikgLyBzY2FsZSwga3YgPSBoIC8gc2NhbGU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIGt1LCB1di5nZXRZKGkpICoga3YgKyB2T2ZmKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBGaW5lIGxvbmdpdHVkaW5hbCBncmFpbiBiZXR3ZWVuIHkwIGFuZCB5MSBhY3Jvc3MgYSBiYW5kIHgwLi54MTogbWFueSBoYWlybGluZXMsIG1vc3RseSBhIGRhcmtcbiAqICBmaWJyZSB0b25lLCBhIGZldyBibGVhY2hlZCwgc28gdGhlIHN1cmZhY2UgcmVhZHMgYXMgZmlicm91cyBiYW1ib28gcmF0aGVyIHRoYW4gcGFpbnQuICovXG5mdW5jdGlvbiBncmFpbkxpbmVzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBybmQ6ICgpID0+IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgbjogbnVtYmVyLCBkYXJrOiBzdHJpbmcsIGxpZ2h0OiBzdHJpbmcsIGFNYXg6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykge1xuICAgIGNvbnN0IHggPSB4MCArIHJuZCgpICogKHgxIC0geDApLCBhID0gMC4wNCArIHJuZCgpICogYU1heCwgdyA9IHJuZCgpIDwgMC43NSA/IDEgOiAxLjY7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cm5kKCkgPCAwLjcyID8gZGFyayA6IGxpZ2h0fSwke2EudG9GaXhlZCgzKX0pYDtcbiAgICBjdHguZmlsbFJlY3QoeCwgeTAsIHcsIHkxIC0geTApO1xuICB9XG59XG5cbi8qKiBTb2Z0IGNsb3VkeSB3ZWF0aGVyaW5nIGFsb25nIHRoZSBmaWJyZSBkaXJlY3Rpb246IGxlbmd0aHdpc2UgcGF0Y2hlcyBvZiB3YXJtIGJyb3duLWdyZXkgKG9sZFxuICogIGxpZ25pbiBzaG93aW5nIHRocm91Z2ggdGhlIGJsZWFjaCkgYW5kIG9mIG5lYXItd2hpdGUgKHN1bi1ibGVhY2hlZCBmYWNlcyksIHNvIHRoZSB0b25lIGRyaWZ0c1xuICogIHRoZSB3YXkgd2VhdGhlcmVkIGJhbWJvbyBkb2VzIGluc3RlYWQgb2Ygc2l0dGluZyBhdCBvbmUgZ3JleS4gVmVydGljYWwgPSBhbG9uZyB0aGUgZmlicmUuICovXG5mdW5jdGlvbiB3ZWF0aGVyUGF0Y2hlcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcm5kOiAoKSA9PiBudW1iZXIsIHM6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgbjogbnVtYmVyLCB3YXJtQTogbnVtYmVyLCBibGVhY2hBOiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICBjb25zdCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMTIgKyBybmQoKSAqIDAuNDUpLCB3YXJtID0gcm5kKCkgPCAwLjU7XG4gICAgY29uc3QgYyA9IHdhcm0gPyAnMTEyLDEwMCw4OCcgOiAnMjU1LDI1NSwyNTUnLCBhID0gd2FybSA/IHdhcm1BICogKDAuNCArIHJuZCgpICogMC42KSA6IGJsZWFjaEEgKiAoMC40ICsgcm5kKCkgKiAwLjYpO1xuICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHksIDAsIHkgKyBsZW4pO1xuICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2N9LDApYCk7IGcyLmFkZENvbG9yU3RvcCgwLjM1LCBgcmdiYSgke2N9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjY1LCBgcmdiYSgke2N9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2N9LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgwLCB5ICsgZHksIHgxIC0geDAsIGxlbik7XG4gIH1cbn1cblxuLyoqIE1vdWxkOiBjbHVzdGVycyBvZiBzbWFsbCBkYXJrIHNwZWNrcyAoYSBmZXcgZG96ZW4gZWFjaCksIHRoZSB3YXkgYmxhY2sgbW91bGQgc2l0cyBvbiBvdXRkb29yXG4gKiAgYmFtYm9vIC0tIGRlbnNlIGF0IGEgZmV3IHNwb3RzLCBhYnNlbnQgZWxzZXdoZXJlLiBBbHBoYSBjYXBwZWQgc28gdGhlIGRhcmtlc3Qgc3BlY2sgb3ZlciB0aGVcbiAqICBtZWFzdXJlZCBhbGJlZG8gc3RheXMgd2VsbCBjbGVhciBvZiB0aGUgaG9sZSBnYXRlJ3MgbHVtYSA1OC4gV3JhcHMgaW4geS4gKi9cbmZ1bmN0aW9uIG1vdWxkQ2x1c3RlcnMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJuZDogKCkgPT4gbnVtYmVyLCBzOiBudW1iZXIsIHNwb3RzOiBudW1iZXJbXVtdLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCBuOiBudW1iZXIsIGFNYXg6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGNvbnN0IFtjeCwgY3ldIG9mIHNwb3RzKSB7XG4gICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIE1hdGgubWF4KHJ4LCByeSkgKiAwLjgpO1xuICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyOCwyNiwyMiwkeyhhTWF4ICogMC45KS50b0ZpeGVkKDMpfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI4LDI2LDIyLDApJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4LCBjeSArIGR5LCByeCwgcnksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gY3ggKyAocm5kKCkgKyBybmQoKSAtIDEpICogcngsIHkgPSBjeSArIChybmQoKSArIHJuZCgpIC0gMSkgKiByeTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgyOCwyNiwyMiwkeygwLjA4ICsgcm5kKCkgKiBhTWF4KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIDIsIGggPSAxICsgcm5kKCkgKiAzO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCB3LCBoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIENVTE0gdGlsZSBmb3IgdGhlIHdob2xlLWJhbWJvbyBwb3N0IGFuZCByYWlsczogeCBydW5zIEFST1VORCB0aGUgY3VsbSwgeSBBTE9ORyBpdCAoc2VlIGN1bG1VViksXG4gKiAgMC42IG0gb2YgY3VsbSBwZXIgdGlsZS4gVHdvIG5vZGUgcmluZ3MgcGVyIHRpbGUgYXQgaXJyZWd1bGFyIHN0YXRpb25zIC0tIGEgZGFyayBncm9vdmUgdW5kZXIgYVxuICogIHBhbGUgcmFpc2VkIHJpZGdlLCB0aGUgZ3JhaW4gYnJlYWtpbmcgYXQgZWFjaCAtLSB3aXRoIGZpbmUgbG9uZ2l0dWRpbmFsIGdyYWluIGJldHdlZW4gdGhlbSwgYVxuICogIGxvbmcgZHJ5aW5nIHNwbGl0LCBsZW5ndGh3aXNlIHdlYXRoZXJpbmcgcGF0Y2hlcyBhbmQgYmxhY2sgbW91bGQgZ2F0aGVyZWQganVzdCBiZWxvdyBlYWNoIG5vZGUsXG4gKiAgYXMgaW4gdGhlIHBsYXRlJ3MgcG9zdCBhbmQgcmFpbCBjcm9wcy4gQSBtdWx0aXBsaWVyIG9uIHRoZSBtZWFzdXJlZCBjdWxtIGdyZXkuICovXG5mdW5jdGlvbiBjdWxtVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBEQVJLID0gJzkyLDc4LDYyJywgTElHSFQgPSAnMjU1LDI1NSwyNTUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2YwZWZlYyc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBhIHNvZnQgdG9uZSBkcmlmdCBhcm91bmQgdGhlIGN1bG0sIHNvIHRoZSByb3VuZCBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBjb25zdCBnYSA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBzLCAwKTtcbiAgICBnYS5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMTAwLDkyLDg0LDAuMTIpJyk7IGdhLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTApJyk7IGdhLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMDAsOTIsODQsMC4xMiknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ2E7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgMTQsIDAuMTIsIDAuMzApO1xuICAgIC8vIG5vZGUgc3RhdGlvbnM6IHR3byBwZXIgdGlsZSwgaXJyZWd1bGFyLCBuZXZlciB3aXRoaW4gMC4xOCBvZiBlYWNoIG90aGVyIG9yIHRoZSB3cmFwXG4gICAgY29uc3Qgbm9kZXMgPSBbcyAqICgwLjIwICsgcm5kKCkgKiAwLjEwKSwgcyAqICgwLjY2ICsgcm5kKCkgKiAwLjEyKV07XG4gICAgLy8gZ3JhaW4gaW4gc2VnbWVudHMgYmV0d2VlbiB0aGUgbm9kZXMgc28gaXQgYnJlYWtzIGF0IGVhY2ggcmluZ1xuICAgIGNvbnN0IHN0YXRpb25zID0gWzAsIC4uLm5vZGVzLCBzXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSArIDEgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykgZ3JhaW5MaW5lcyhjdHgsIHJuZCwgMCwgcywgc3RhdGlvbnNbaV0sIHN0YXRpb25zW2kgKyAxXSwgMjYwLCBEQVJLLCBMSUdIVCwgMC4yNik7XG4gICAgLy8gYSBjb3VwbGUgb2YgbG9uZyBkcnlpbmcgc3BsaXRzIGFsb25nIHRoZSBmaWJyZVxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMjsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMjUgKyBybmQoKSAqIDAuNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzgsMzIsMjYsMC41NSknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjQsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xOCknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNCwgeSArIGR5LCAxLCBsZW4pO1xuICAgIH1cbiAgICAvLyB0aGUgbm9kZSByaW5nc1xuICAgIGZvciAoY29uc3QgeSBvZiBub2Rlcykge1xuICAgICAgY29uc3QgZ3MgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSAtIHMgKiAwLjAzLCAwLCB5KTtcbiAgICAgIGdzLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwKScpOyBncy5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMC4yMiknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnczsgY3R4LmZpbGxSZWN0KDAsIHkgLSBzICogMC4wMywgcywgcyAqIDAuMDMpOyAgICAgICAgICAvLyBzaGFkZSB1cCB0byB0aGUgcmluZ1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUyLDQ0LDM2LDAuNjIpJzsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIDIuNSk7ICAgICAgICAvLyB0aGUgZ3Jvb3ZlXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4zNCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDIuNSwgcywgNCk7IC8vIHRoZSByYWlzZWQgc2hlYXRoIHJpZGdlXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNjAsNTAsNDAsMC4zMCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDYuNSwgcywgMS41KTsgIC8vIGl0cyBsb3dlciBlZGdlXG4gICAgICBjb25zdCBnZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5ICsgOCwgMCwgeSArIHMgKiAwLjA1KTtcbiAgICAgIGdkLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwLjIwKScpOyBnZC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnZDsgY3R4LmZpbGxSZWN0KDAsIHkgKyA4LCBzLCBzICogMC4wNSk7XG4gICAgfVxuICAgIC8vIG1vdWxkIGdhdGhlcnMganVzdCBiZWxvdyB0aGUgbm9kZXMgYW5kIGluIGEgY291cGxlIG9mIGxvb3NlIHBhdGNoZXNcbiAgICBjb25zdCBzcG90czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAoY29uc3QgeSBvZiBub2RlcykgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgeSArIHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSldKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCBybmQoKSAqIHNdKTtcbiAgICBtb3VsZENsdXN0ZXJzKGN0eCwgcm5kLCBzLCBzcG90cywgcyAqIDAuMTAsIHMgKiAwLjA2LCA5MCwgMC4zMCk7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogVEhBVENIIHRpbGUsIGZvciBhIHJvb2YgbWFwcGVkIHdpdGggV09STEQgVVZzIHNvIHUgcnVucyBhbG9uZyB0aGUgcmlkZ2UgYW5kIHYgdXAgdGhlIHNsb3BlLlxuICpcbiAqIFRoYXRjaCBpcyBsYWlkIGluIENPVVJTRVM6IGVhY2ggY291cnNlIGlzIGEgYnVuZGxlIG9mIHN0ZW1zIHBlZ2dlZCB0byBhIHB1cmxpbiB3aXRoIGl0cyBidXR0c1xuICogaGFuZ2luZyBvdmVyIHRoZSBjb3Vyc2UgYmVsb3csIHNvIHdoYXQgYSB2aWV3ZXIgYWN0dWFsbHkgcmVzb2x2ZXMgYXQgcHJvcCBkaXN0YW5jZSBpcyBhIHN0YWNrIG9mXG4gKiBob3Jpem9udGFsIGJhbmRzIHdpdGggYSBzaGFkb3cgbGluZSB1bmRlciBlYWNoIGJ1dHQsIGFuZCBhIGZpYnJlIHRleHR1cmUgcnVubmluZyBkb3duIHRoZSBzbG9wZVxuICogaW5zaWRlIHRoZW0uIE1vZGVsbGluZyB0aGUgc3RlbXMgaXMgd2hhdCB0aGUgcmVnaXN0cnkgbm90ZXMgZm9yYmlkOyB0aGlzIGlzIHdoZXJlIHRoYXQgZGV0YWlsXG4gKiBnb2VzIGluc3RlYWQuXG4gKlxuICogT25lIHRpbGUgaXMgYGNvdXJzZXNgIGNvdXJzZXMgdGFsbC4gVGhlIGtub2JzIGFyZSB3aGF0IHNlcGFyYXRlcyB0aGUgdHdvIHRoYXRjaGVzIG9uIHRoZSBwbGF0ZXM6XG4gKiAgIG5pcGEgICAgIGJyb2FkIGZsYXQgcGFsbSBibGFkZXMgLS0gZmV3IHdpZGUgc3Ryb2tlcyAoYHN0ZW1XYCAzLTcgcHgpLCBhIHdpZGUgdG9uYWwgYHNwcmVhZGAsXG4gKiAgICAgICAgICAgIGEgZGVlcGx5IFJBR0dFRCBidXR0IGxpbmUgYW5kIG9jY2FzaW9uYWwgbWlzc2luZyBibGFkZXMuXG4gKiAgIHZldGl2ZXIgIGNvbWJlZCBncmFzcyAtLSBodW5kcmVkcyBvZiBoYWlybGluZXMsIGEgbmFycm93IHNwcmVhZCwgYW4gYWxtb3N0IHN0cmFpZ2h0IGJ1dHQuXG4gKiBgbW9zc2AgbXVsdGlwbGllcyBhIGdyZWVuIGNhc3QgaW50byBzY2F0dGVyZWQgcGF0Y2hlczogdGhlIHRpbGUgaXMgYSBNVUxUSVBMSUVSIG9uIGEgcGFsZSBzdHJhd1xuICogYWxiZWRvLCBhbmQgYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4sIHNvIGdyZWVuIGhhcyB0byBhcnJpdmUgYXMgXCJsZXNzIHJlZCBhbmQgYmx1ZVwiIGFuZCBuZXZlclxuICogYXMgYSBwYWludGVkIGdyZWVuLiBOb3RoaW5nIGhlcmUgZ29lcyBiZWxvdyAwLjQyIG9mIHRoZSBhbGJlZG8sIHdoaWNoIGtlZXBzIHRoZSBkYXJrZXN0IHRleGVsIG9mXG4gKiBhIHN0cmF3IGF0IGx1bWEgfjE1MCB3ZWxsIGNsZWFyIG9mIHRoZSBzaWxob3VldHRlIGdhdGUncyBiYWNrZHJvcCBiYW5kLlxuICovXG5mdW5jdGlvbiB0aGF0Y2hUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgbmM6IG51bWJlciA9IG8uY291cnNlcyA/PyA0LCBjaCA9IHMgLyBuYztcbiAgICBjb25zdCBzdGVtczogbnVtYmVyID0gby5zdGVtcyA/PyAyNjAsIHNwcmVhZDogbnVtYmVyID0gby5zcHJlYWQgPz8gMC4xMjtcbiAgICBjb25zdCB3TWluOiBudW1iZXIgPSBvLnN0ZW1XPy5bMF0gPz8gMSwgd01heDogbnVtYmVyID0gby5zdGVtVz8uWzFdID8/IDI7XG4gICAgY29uc3QgcmFnZ2VkOiBudW1iZXIgPSBvLnJhZ2dlZCA/PyAwLjA2OyAgICAgICAgICAgICAgICAgLy8gYnV0dC1saW5lIHdhdmluZXNzLCBhcyBhIHNoYXJlIG9mIGNoXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuXG4gICAgLy8gdGhlIGJ1dHQgbGluZSBvZiBlYWNoIGNvdXJzZSwgaml0dGVyZWQgcGVyIGNvbHVtbiBhbmQgU0hBUkVEIHdpdGggdGhlIGNvdXJzZSBhYm92ZSBzbyB0aGVcbiAgICAvLyBzaGFkb3cgYW5kIHRoZSBibGFkZXMgYWdyZWUgb24gd2hlcmUgdGhlIGVkZ2UgaXNcbiAgICBjb25zdCBidXR0czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDw9IG5jOyBjKyspIHtcbiAgICAgIGNvbnN0IHJvdzogbnVtYmVyW10gPSBbXTtcbiAgICAgIGxldCB5ID0gMDtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDw9IHM7IHgrKykge1xuICAgICAgICBpZiAoeCAlIE1hdGgubWF4KDIsIE1hdGgucm91bmQocyAvIDQ4KSkgPT09IDApIHkgPSAocm5kKCkgKiAyIC0gMSkgKiByYWdnZWQgKiBjaDtcbiAgICAgICAgcm93LnB1c2goYyAqIGNoICsgeSk7XG4gICAgICB9XG4gICAgICBidXR0cy5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBuYzsgYysrKSB7XG4gICAgICBjb25zdCB5MCA9IGMgKiBjaDtcbiAgICAgIC8vIHRoZSBjb3Vyc2UncyBvd24gdG9uZTogdGhhdGNoIHdlYXRoZXJzIGNvdXJzZSBieSBjb3Vyc2UsIHRoZSBsb3dlciBvbmVzIGdyZXllclxuICAgICAgY29uc3QgdCA9IDEgLSBzcHJlYWQgKiBybmQoKTtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHQpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOTg1KX0sJHtNYXRoLnJvdW5kKHYgKiAwLjk1KX0pYDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCB5MCAtIHJhZ2dlZCAqIGNoIC0gMSwgcywgY2ggKyAyICogcmFnZ2VkICogY2ggKyAyKTtcbiAgICAgIC8vIHN0ZW1zIHJ1bm5pbmcgRE9XTiB0aGUgc2xvcGUgaW5zaWRlIHRoZSBjb3Vyc2UsIGVhY2ggYSBsaXR0bGUgcGFzdCBpdHMgYnV0dCBsaW5lXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHN0ZW1zOyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcztcbiAgICAgICAgY29uc3QgdyA9IHdNaW4gKyBybmQoKSAqICh3TWF4IC0gd01pbik7XG4gICAgICAgIGNvbnN0IHRvbmUgPSAxIC0gc3ByZWFkICogKDAuMyArIHJuZCgpICogMC43KTtcbiAgICAgICAgY29uc3QgYSA9IDAuMTggKyBybmQoKSAqIDAuMzI7XG4gICAgICAgIGNvbnN0IGRhcmsgPSBybmQoKSA8IDAuNjI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBkYXJrID8gYHJnYmEoJHtNYXRoLnJvdW5kKDEyMCAqIHRvbmUpfSwke01hdGgucm91bmQoMTA2ICogdG9uZSl9LCR7TWF0aC5yb3VuZCg4NCAqIHRvbmUpfSwke2EudG9GaXhlZCgzKX0pYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGByZ2JhKDI1NSwyNTMsMjQ2LCR7KGEgKiAwLjYpLnRvRml4ZWQoMyl9KWA7XG4gICAgICAgIGNvbnN0IHlUb3AgPSB5MCAtIGNoICogKDAuMTUgKyBybmQoKSAqIDAuMjUpO1xuICAgICAgICBjb25zdCB5Qm90ID0gYnV0dHNbYyArIDFdW01hdGgubWluKHMsIE1hdGgucm91bmQoeCkpXSArIGNoICogKHJuZCgpICogMC4xMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5VG9wLCB3LCBNYXRoLm1heCgyLCB5Qm90IC0geVRvcCkpO1xuICAgICAgfVxuICAgICAgLy8gTUlTU0lORyBibGFkZXM6IGEgZmV3IGdhcHMgd2hlcmUgdGhlIGNvdXJzZSBoYXMgdGhpbm5lZCwgZGFyayBidXQgbmV2ZXIgYmxhY2tcbiAgICAgIGNvbnN0IGdhcHMgPSBvLmdhcHMgPz8gMDtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZ2FwczsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSBzICogKDAuMDEgKyBybmQoKSAqIDAuMDMpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoOTYsODQsNjYsJHsoMC4yMCArIHJuZCgpICogMC4xOCkudG9GaXhlZCgzKX0pYDtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHkwICsgY2ggKiAwLjI1LCB3LCBjaCAqICgwLjQgKyBybmQoKSAqIDAuNSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZSBzaGFkb3cgZWFjaCBjb3Vyc2UncyBidXR0IGNhc3RzIG9uIHRoZSBvbmUgYmVsb3c6IGEgZ3JhZGllbnQgZmFsbGluZyBBV0FZIGZyb20gdGhlIGxpbmUsXG4gICAgLy8gZHJhd24gYWxvbmcgdGhlIGppdHRlcmVkIGJ1dHQgc28gdGhlIHNoYWRvdyBpcyBhcyByYWdnZWQgYXMgdGhlIGVkZ2UgdGhhdCBjYXN0cyBpdCwgd2l0aCB0aGVcbiAgICAvLyBMSVQgVElQUyBvZiB0aGUgY291cnNlIGFib3ZlIGl0IGFzIGEgcGFsZSBsaW5lLiBUaGUgcGFpciBpcyB3aGF0IG1ha2VzIHRoZSByb29mIHJlYWQgYXNcbiAgICAvLyBzdGFja2VkIGxheWVyczsgdGhlIHNoYWRvdyBhbG9uZSByZWFkcyBhcyBncmFpbiwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYnVpbGQgbG9va2VkIGxpa2UuXG4gICAgZm9yIChsZXQgYyA9IDE7IGMgPD0gbmM7IGMrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgICAgY29uc3QgeWIgPSBidXR0c1tjXVt4XTtcbiAgICAgICAgY29uc3QgZ2ggPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeWIgLSBjaCAqIDAuMDksIDAsIHliKTtcbiAgICAgICAgZ2guYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTIsMjQyLDApJyk7IGdoLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgyNTUsMjUyLDI0MiwkeyhvLnRpcCA/PyAwLjM0KS50b0ZpeGVkKDMpfSlgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdoO1xuICAgICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5YiAtIGNoICogMC4wOSArIGR5LCAxLCBjaCAqIDAuMDkpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiwgMCwgeWIgKyBjaCAqIDAuMjIpO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoNTgsNDgsMzYsJHsoby5zaGFkb3cgPz8gMC40MikudG9GaXhlZCgzKX0pYCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSg1OCw0OCwzNiwwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHliICsgZHksIDEsIGNoICogMC4yMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTU9TUyAvIE1PVUxEOiBsZXNzIHJlZCBhbmQgYmx1ZSBvdmVyIHNvZnQgcGF0Y2hlcywgbmV2ZXIgYSBwYWludGVkIGdyZWVuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5tb3NzID8/IDApOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTQpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4xNCArIHJuZCgpICogMC4yMjtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxNTAsMTkwLDExMCwke2EudG9GaXhlZCgzKX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxNTAsMTkwLDExMCwwKScpO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7IGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9XG4gICAgLy8gc29mdCB0b25hbCBkcmlmdCBzbyB0aGUgY291cnNlcyBkbyBub3QgcmVhZCBhcyBhIHByaW50ZWQgc3RyaXBlXG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIG8ud2VhdGhlciA/PyAxMCwgMC4xMCwgMC4yMik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFdPVkVOIFRBUlBBVUxJTiB0aWxlOiB0aGUgY29hcnNlIGNyb3NzLXdvdmVuIHBvbHlwcm9weWxlbmUgdGFwZSBvZiBhIFRoYWkgYnVpbGRlcidzIHRhcnAsIHBsdXNcbiAqIHRoZSBjcmVhc2VzIGEgZm9sZGVkIHNoZWV0IGtlZXBzIGZvciBsaWZlIGFuZCB0aGUgc3VuLWJsZWFjaGluZyBhbG9uZyB0aGUgcmlkZ2VzLiBBIG11bHRpcGxpZXIgb25cbiAqIHRoZSBtZWFzdXJlZCBibHVlLCBzbyB0aGUgd2VhdmUgZGFya2VucyBhbmQgdGhlIGJsZWFjaCBsaWZ0cyB0b3dhcmQgd2hpdGUuXG4gKi9cbmZ1bmN0aW9uIHRhcnBUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IHBpdGNoID0gTWF0aC5tYXgoMywgTWF0aC5yb3VuZChzIC8gKG8udGFwZXMgPz8gNjQpKSk7XG4gICAgLy8gdGhlIHdlYXZlOiB3YXJwIGFuZCB3ZWZ0IHRhcGVzLCBlYWNoIHBhaXIgd2l0aCBhIHNoYWRvdyBhdCBpdHMgam9pbiwgYWx0ZXJuYXRpbmcgb3Zlci91bmRlclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCArPSBwaXRjaCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDMwLDM0LDQ0LCR7KDAuMTAgKyBybmQoKSAqIDAuMDgpLnRvRml4ZWQoMyl9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA3KSc7IGN0eC5maWxsUmVjdCh4ICsgMSwgMCwgTWF0aC5tYXgoMSwgcGl0Y2ggKiAwLjM1KSwgcyk7XG4gICAgfVxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgczsgeSArPSBwaXRjaCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDMwLDM0LDQ0LCR7KDAuMTAgKyBybmQoKSAqIDAuMDgpLnRvRml4ZWQoMyl9KWA7IGN0eC5maWxsUmVjdCgwLCB5LCBzLCAxKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA3KSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgMSwgcywgTWF0aC5tYXgoMSwgcGl0Y2ggKiAwLjM1KSk7XG4gICAgfVxuICAgIC8vIGZvbGQgY3JlYXNlczogbG9uZyBwYWxlIGxpbmVzIHdpdGggYSBzaGFkb3cgb24gb25lIHNpZGUsIGF0IHRoZSB0d28gYXhlcyBhIHRhcnAgaXMgZm9sZGVkIG9uXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5jcmVhc2VzID8/IDYpOyBrKyspIHtcbiAgICAgIGNvbnN0IGhvcml6ID0gcm5kKCkgPCAwLjUsIHAgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC41ICsgcm5kKCkgKiAwLjUpLCBxID0gcm5kKCkgKiBzO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMjYpJztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjI2KSc7XG4gICAgICBpZiAoaG9yaXopIHsgY3R4LmZpbGxSZWN0KHEgLSBsZW4gLyAyLCBwLCBsZW4sIDEuNik7IGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyNiwzOCwwLjE4KSc7IGN0eC5maWxsUmVjdChxIC0gbGVuIC8gMiwgcCArIDEuNiwgbGVuLCAyKTsgfVxuICAgICAgZWxzZSB7IGN0eC5maWxsUmVjdChwLCBxIC0gbGVuIC8gMiwgMS42LCBsZW4pOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjAsMjYsMzgsMC4xOCknOyBjdHguZmlsbFJlY3QocCArIDEuNiwgcSAtIGxlbiAvIDIsIDIsIGxlbik7IH1cbiAgICB9XG4gICAgLy8gc3VuLWJsZWFjaGVkIHN0cmVha3MgYW5kIGEgbGl0dGxlIGdyaW1lXG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIG8ud2VhdGhlciA/PyAxMiwgMC4xMCwgMC4zNCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNBV04gVElNQkVSIHRpbGUgZm9yIGEgd2VhdGhlcmVkIHBvc3QtYW5kLXBsYXRlIGZyYW1lOiBmaW5lIGxvbmdpdHVkaW5hbCBncmFpbiwgYSBmZXcga25vdHMsIHRoZVxuICogb2RkIGRyeWluZyBzcGxpdCwgYW5kIGNsb3VkeSBzaWx2ZXIgd2VhdGhlcmluZy4gRGVsaWJlcmF0ZWx5IFdFQUtMWSBkaXJlY3Rpb25hbCAtLSB0aGUgZnJhbWUgaXNcbiAqIG1hcHBlZCB3aXRoIHdvcmxkIFVWcywgd2hpY2ggcHV0IHYgYWxvbmcgdGhlIHBvc3QgYnV0IEFDUk9TUyBhIGJlYW0sIGFuZCBhIHN0cm9uZ2x5IHN0cmlwZWQgdGlsZVxuICogd291bGQgdGhlbiByZWFkIGFzIGEgcGxhbmsgam9pbnQgcnVubmluZyB0aGUgd3Jvbmcgd2F5IG9uIGhhbGYgdGhlIGZyYW1lLiBUaGUgd2VhdGhlcmluZyBjYXJyaWVzXG4gKiBtb3N0IG9mIHRoZSByZWFkIGFuZCB0aGUgZ3JhaW4gb25seSBzaGFycGVucyBpdCwgd2hpY2ggc3Vydml2ZXMgYm90aCBvcmllbnRhdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIHNhd25UaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgREFSSyA9ICc5Niw4NCw2OCcsIExJR0hUID0gJzI1NSwyNTUsMjU1JztcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmNGYyZWUnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIG8ud2VhdGhlciA/PyAyMCwgMC4xNCwgMC4zMCk7XG4gICAgZ3JhaW5MaW5lcyhjdHgsIHJuZCwgMCwgcywgMCwgcywgby5ncmFpbiA/PyAyMjAsIERBUkssIExJR0hULCAwLjE4KTtcbiAgICAvLyBrbm90czogYSBkYXJrIGVsbGlwc2Ugd2l0aCB0aGUgZ3JhaW4gc3dlZXBpbmcgcm91bmQgaXRcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmtub3RzID8/IDQpOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDEyICsgcm5kKCkgKiAwLjAyKTtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg3NCw2MCw0NCwwLjQ1KSc7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIsIHIgKiAxLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoOTYsODAsNjAsMC4yMiknOyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgZm9yIChsZXQgcSA9IDE7IHEgPD0gMzsgcSsrKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIgKiAoMSArIHEgKiAwLjYpLCByICogKDEuNiArIHEgKiAwLjkpLCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBkcnlpbmcgc3BsaXRzIGFsb25nIHRoZSBmaWJyZVxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uc3BsaXRzID8/IDMpOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjQ1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1OCw0OCwzNiwwLjQyKSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5ICsgZHksIDEuNCwgbGVuKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjE2KSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4ICsgMS40LCB5ICsgZHksIDEsIGxlbik7XG4gICAgfVxuICAgIGNvbnN0IHNwb3RzOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5tb3VsZCA/PyAzKTsgaSsrKSBzcG90cy5wdXNoKFtybmQoKSAqIHMsIHJuZCgpICogc10pO1xuICAgIG1vdWxkQ2x1c3RlcnMoY3R4LCBybmQsIHMsIHNwb3RzLCBzICogMC4wOSwgcyAqIDAuMDcsIDcwLCAwLjI0KTtcbiAgfSk7XG59XG5cbi8qKlxuICogR0FMVkFOSVNFRCBTSEVFVCB3ZWF0aGVyaW5nOiBvbmUgc2VhbWxlc3MgbXVsdGlwbGllciB0aWxlIGNhcnJ5aW5nIHRoZSB0aHJlZSB0aGluZ3MgYSB6aW5jIHJvb2ZcbiAqIGFjdHVhbGx5IHNob3dzIC0tIHRoZSBjaGFsa3kgd2hpdGUgb3hpZGF0aW9uIHRoYXQgZWF0cyB0aGUgc3BhbmdsZSwgdGhlIGRhcmtlciBncmV5IGRyaWZ0IHdoZXJlXG4gKiBpdCBoYXMgbm90LCBhbmQgdGhlIHdhcm0gcnVzdCBmcmVja2xlcyB0aGF0IHN0YXJ0IGF0IGV2ZXJ5IGZpeGluZyBhbmQgbGFwLlxuICpcbiAqIExpa2UgYHBhaW50VGlsZWAgaXQgaXMgZHJhd24gaW4gQUJTT0xVVEUgbXVsdGlwbGllciBzcGFjZSBvdmVyIGEgUkUtQkFTRUQgZW52ZWxvcGUsIGJlY2F1c2VcbiAqIGNoYWxraW5nIGlzIEJSSUdIVEVSIHRoYW4gdGhlIGNsZWFuIHNoZWV0IGl0IHNpdHMgb24gYW5kIGEgcGxhaW4gbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLiBgby5iYXNlYFxuICogaXMgdGhlIGNsZWFuIHppbmMncyBvd24gbXVsdGlwbGllciBhZ2FpbnN0IHRoYXQgZW52ZWxvcGUgYW5kIGlzIHdoYXQgbW9zdCBvZiB0aGUgdGlsZSBpcyBmaWxsZWRcbiAqIHdpdGg7IGBvLmNoYWxrYCByZWFjaGVzIGJhY2sgdXAgdG8gdGhlIGVudmVsb3BlLiBNZWFzdXJlZCBvZmYgdGhlIHBsYXRlLCB0aGUgZGVjayBydW5zIDE3MiB0byAxOTdcbiAqIGx1bWEgYWNyb3NzIGl0cyBvd24gc3VyZmFjZSBhdCBhIHNhdHVyYXRpb24gb2YgMC4wNCAtLSBhIDI1LWx1bWEgc3ByZWFkIG9uIGEgbm9taW5hbGx5IGZsYXQgZ3JleSxcbiAqIHdoaWNoIGlzIHRoZSB3aG9sZSBkaWZmZXJlbmNlIGJldHdlZW4gYSByb29mIGFuZCBhIHNoZWV0IG9mIHBsYXN0aWMuXG4gKlxuICogYGNoYWxrU2NhbGVgIC8gYGRyaWZ0U2NhbGVgIGV4aXN0IGJlY2F1c2Ugb24gYSByb29mIHRoZSB0aWxlIGlzIHNtYWxsIGFnYWluc3QgdGhlIHN1cmZhY2U6IHRoZVxuICogZGVjayByZXBlYXRzIGl0IGZvdXIgdGltZXMgYWNyb3NzLCBzbyBhbnkgbWFyayB3aWRlciB0aGFuIGEgdGVudGggb2YgaXQgZHJhd3MgYSB2aXNpYmxlIGxhdHRpY2UuXG4gKiBUaGUgQlJPQUQgY2hhbGsgem9uZXMgYmVsb25nIG9uIHRoZSBzaGVldCdzIG93biB2ZXJ0ZXggZ3JpZCwgd2hpY2ggZG9lcyBub3QgcmVwZWF0OyB3aGF0IHRoZSB0aWxlXG4gKiBvd2VzIGlzIHRoZSBmaW5lIHNwZWNrbGUgaW5zaWRlIHRoZW0uXG4gKlxuICogVGhlIHJvbGwgbWFya3MgYXJlIGRyYXduIExBU1QgYW5kIGFsb25nIHUsIHdoaWNoIG9uIHRoZSBkZWNrJ3Mgd29ybGQgVVZzIGlzIHRoZSBheGlzIHRoZSBtb2RlbGxlZFxuICogZmx1dGVzIHJ1biBhY3Jvc3MuIFRoZXkgYXJlIHdoYXQgdGhlIHRpbGUgc3RpbGwgb3dlcyB0aGUgZ2VvbWV0cnkgb25jZSB0aGUgY29ycnVnYXRpb24gaXRzZWxmIGlzXG4gKiByZWFsOiBhIHJvbGwgZm9ybWVyIGxlYXZlcyBmaW5lIGxlbmd0aHdpc2Ugc3RyaWF0aW9uIGJldHdlZW4gdGhlIGZsdXRlcywgYW5kIGBidW1wYCBwaWNrcyBpdCB1cC5cbiAqL1xuZnVuY3Rpb24gZ2FsdlRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV0sIGNoYWxrID0gby5jaGFsayA/PyBiYXNlLCBydXN0ID0gby5ydXN0ID8/IGJhc2UsIGRhcmsgPSBvLmRhcmsgPz8gYmFzZTtcbiAgICBjb25zdCB3cmFwID0gKGRyYXc6IChkeDogbnVtYmVyLCBkeTogbnVtYmVyKSA9PiB2b2lkKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgZHJhdyhkeCwgZHkpO1xuICAgIH07XG4gICAgY29uc3QgYmxvYiA9IChjOiBudW1iZXJbXSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgYTogbnVtYmVyLCByeSA9IDEsIHJvdCA9IDApID0+IHtcbiAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihjKX0sJHthfSlgKTsgZy5hZGRDb2xvclN0b3AoMC41NSwgYHJnYmEoJHtyZ2IoYyl9LCR7YSAqIDAuNX0pYCk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihjKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIsIHIgKiByeSwgcm90LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgIH07XG5cbiAgICAvLyBUaGUgYmFzZSBmaWxsIGNhcnJpZXMgdGhlIEZMVVRFIHNoYWRpbmcgd2hlbiBgZmx1dGVzYCBpcyBzZXQ6IGBmbHV0ZXNgIHJpcHBsZXMgcGVyIHRpbGUsIGluXG4gICAgLy8gcGhhc2Ugd2l0aCB0aGUgbW9kZWxsZWQgY29ycnVnYXRpb24gKGEgdHJvdWdoIGF0IHUgPSAwLCB3aGljaCBpcyB3aGVyZSB0aGUgZGVjaydzIHdvcmxkIFVWcyBwdXRcbiAgICAvLyBvbmUpLiBUaGUgZ2VvbWV0cnkgYWxyZWFkeSB0dXJucyB0aGUgZmx1dGVzIHRvIHRoZSBsaWdodCAtLSB0aGlzIGlzIHRoZSBhbWJpZW50IGRhcmtlbmluZyBpblxuICAgIC8vIHRoZSB2YWxsZXlzIGFuZCB0aGUgcm9sbC1mb3JtZXIncyBvd24gcG9saXNoIG9uIHRoZSBjcmVzdHMsIHdoaWNoIGZsYXQgc3R1ZGlvIGxpZ2h0aW5nIG9uIGFcbiAgICAvLyBzbW9vdGgtc2hhZGVkIHRyaWFuZ2xlIHdhdmUgZ2l2ZXMgbm9uZSBvZi4gT3V0IG9mIHBoYXNlIGl0IHdvdWxkIEJFQVQgd2l0aCB0aGUgZ2VvbWV0cnksIHdoaWNoXG4gICAgLy8gaXMgd2h5IHRoZSBwaXRjaCBpcyBsb2NrZWQgdG8gdGhlIGRlY2sncyBvd24gMTMgZmx1dGVzIHBlciBtZXRyZSByYXRoZXIgdGhhbiBjaG9zZW4uXG4gICAgY29uc3QgZmwgPSBvLmZsdXRlcyA/PyAwLCBmbG93ID0gby5mbHV0ZUxvdyA/PyAwLjg4O1xuICAgIGlmIChmbCA+IDApIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHQgPSAoMSAtIE1hdGguY29zKHggLyBzICogTWF0aC5QSSAqIDIgKiBmbCkpIC8gMjsgICAvLyAwIGluIHRoZSB0cm91Z2gsIDEgYXQgdGhlIGNyZXN0XG4gICAgICAgIGNvbnN0IGsgPSBmbG93ICsgKDEgLSBmbG93KSAqIHQ7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UubWFwKCh2OiBudW1iZXIpID0+IHYgKiBrKSl9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgeyBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpOyB9XG5cbiAgICAvLyAxLiB0aGUgZ3JleSBkcmlmdDogYnJvYWQsIHZlcnkgc29mdCwgdGhlIGFyZWFzIHRoZSBjaGFsayBoYXMgbm90IHJlYWNoZWRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmRyaWZ0ID8/IDE2KTsgaSsrKVxuICAgICAgYmxvYihkYXJrLCBybmQoKSAqIHMsIHJuZCgpICogcywgcyAqICgwLjE2ICsgcm5kKCkgKiAwLjMwKSAqIChvLmRyaWZ0U2NhbGUgPz8gMSksIDAuMTAgKyBybmQoKSAqIDAuMTgsIDAuNSArIHJuZCgpICogMC45LCBybmQoKSAqIE1hdGguUEkpO1xuXG4gICAgLy8gMi4gdGhlIGNoYWxrIGJsb29tOiBMQVJHRSwgc29mdCBhbmQgaXJyZWd1bGFyLCB3aXRoIGEgZ3JhbnVsYXIgZnJpbmdlLiBPbiBhIHJvb2YgaXQgaXMgdGhlXG4gICAgLy8gICAgZG9taW5hbnQgbWFyayAtLSB0aGUgcGxhdGUncyBkZWNrIGlzIG1vcmUgY2hhbGsgdGhhbiBjbGVhbiBzaGVldCAtLSBzbyBpdCBpcyBkcmF3biB3aWRlIGFuZFxuICAgIC8vICAgIGF0IGhpZ2ggYWxwaGEsIHVubGlrZSB0aGUgc3BhcnNlIGJsb29tcyBvZiBhIHBhaW50ZWQgcGFuZWwuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5jaGFsa1BhdGNoZXMgPz8gMTQpOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgY3IgPSBzICogKDAuMDggKyBybmQoKSAqIDAuMTgpICogKG8uY2hhbGtTY2FsZSA/PyAxKTtcbiAgICAgIGJsb2IoY2hhbGssIGN4LCBjeSwgY3IsIChvLmNoYWxrQWxwaGEgPz8gMC41NSkgKyBybmQoKSAqIDAuMzAsIDAuNSArIHJuZCgpICogMC45LCBybmQoKSAqIE1hdGguUEkpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyICogMS4zO1xuICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCwgciA9IDAuOCArIHJuZCgpICogMi40O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IoY2hhbGspfSwkezAuMiArIHJuZCgpICogMC40NX0pYDtcbiAgICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBydXN0OiBzbWFsbCB3YXJtIGZyZWNrbGUgY2x1c3RlcnMsIGVhY2ggYSBzb2Z0IHBhdGNoIHVuZGVyIGEgZmllbGQgb2Ygc3BlY2tzLCB3aXRoIGEgc2hvcnRcbiAgICAvLyAgICBydW4gYmVsb3cgaXQuIFppbmMgZG9lcyBub3Qgc2hlZXQtcnVzdCB0aGUgd2F5IGJhcmUgc3RlZWwgZG9lcyAtLSBpdCBmcmVja2xlcyBmaXJzdC5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnJ1c3RDbHVzdGVycyA/PyAxMCk7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNTUpO1xuICAgICAgYmxvYihydXN0LCBjeCwgY3ksIGNyLCAwLjI1ICsgcm5kKCkgKiAwLjMwLCAwLjcgKyBybmQoKSAqIDAuNywgcm5kKCkgKiBNYXRoLlBJKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BlY2tzUGVyQ2x1c3RlciA/PyAyNik7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjcjtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQsIHIgPSAwLjcgKyBybmQoKSAqIDEuODtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHJ1c3QpfSwkezAuMjUgKyBybmQoKSAqIDAuNDV9KWA7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgICBpZiAocm5kKCkgPCAwLjYpIHtcbiAgICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAwNiwgbGVuID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjE2KTtcbiAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBjeSwgMCwgY3kgKyBsZW4pO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydXN0KX0sJHswLjE0ICsgcm5kKCkgKiAwLjE2fSlgKTsgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVzdCl9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgICB3cmFwKChkeCkgPT4gY3R4LmZpbGxSZWN0KGN4ICsgZHggKyAocm5kKCkgLSAwLjUpICogY3IsIGN5LCB3LCBsZW4pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA0LiByb2xsIG1hcmtzOiBmaW5lIGxpbmVzIG9mIGNvbnN0YW50IHUsIGF0IGByb2xsc2AgcGVyIHRpbGUsIGFsdGVybmF0ZWx5IGEgc2hhZGUgdW5kZXIgYW5kIGFcbiAgICAvLyAgICBzaGFkZSBvdmVyIHRoZSB0b25lIHRoZXkgY3Jvc3MuIEJvdW5kIGFzIGEgYnVtcCBtYXAgdGhleSBhcmUgdGhlIHN0cmlhdGlvbiBiZXR3ZWVuIGZsdXRlcy5cbiAgICBjb25zdCByb2xscyA9IG8ucm9sbHMgPz8gNDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2xsczsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gKGkgKyAwLjM1ICsgcm5kKCkgKiAwLjMpICogcyAvIHJvbGxzLCB1cCA9IHJuZCgpIDwgMC40NTtcbiAgICAgIGNvbnN0IGMgPSB1cCA/IGNoYWxrIDogZGFyaywgYSA9IDAuMDYgKyBybmQoKSAqIDAuMTI7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSgke3JnYihjKX0sJHthfSlgOyBjdHgubGluZVdpZHRoID0gMC43ICsgcm5kKCkgKiAxLjM7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBkeCwgMCk7IGN0eC5saW5lVG8oeCArIGR4LCBzKTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgfVxuICB9KTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgLy8gQSBMSVQgc3VyZmFjZSAoYSBmbHVvcmVzY2VudCB0dWJlLCBhIGNoYXJjb2FsIGVtYmVyIGJlZCk6IGVtaXNzaXZlIGNhcnJpZXMgdGhlIGdsb3cgd2l0aG91dCBhXG4gICAgLy8gbGlnaHQgc291cmNlLCB3aGljaCB0aGUga2l0J3MgcHJvcHMgbmV2ZXIgb3duIC0tIHRoZSBob3N0IHNjZW5lIG93bnMgbGlnaHRpbmcuXG4gICAgaWYgKHMuZW1pc3NpdmUgIT09IHVuZGVmaW5lZCkgeyBtLmVtaXNzaXZlID0gbmV3IFRIUkVFLkNvbG9yKHMuZW1pc3NpdmUpOyBtLmVtaXNzaXZlSW50ZW5zaXR5ID0gcy5lbWlzc2l2ZUludGVuc2l0eSA/PyAxOyB9XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICAvLyBBbiBBTFBIQS1DVVQgcGFuZSAoY2hhaW4tbGluayBtZXNoKTogdGhlIGNhbnZhcyB0aWxlIGNhcnJpZXMgdGhlIGN1dC1vdXQgaW4gaXRzIGFscGhhIGNoYW5uZWwgYW5kXG4gICAgLy8gYWxwaGFUZXN0IGRpc2NhcmRzIHRoZSBvcGVuIGNlbGxzLCBzbyB0aGUgd2lyZSBzdGF5cyBvcGFxdWUgYW5kIHNvcnRzIGxpa2UgYSBzb2xpZC5cbiAgICBpZiAocy5hbHBoYVRlc3QgIT09IHVuZGVmaW5lZCkgeyBtLmFscGhhVGVzdCA9IHMuYWxwaGFUZXN0OyBtLnRyYW5zcGFyZW50ID0gZmFsc2U7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV2F0ZXJGaWxsZWRQbGFzdGljQmFycmllck1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnV2F0ZXItRmlsbGVkIFBsYXN0aWMgQmFycmllcic7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbXBvbmVudHNcbiAgICogRWFjaCBlbnRyeSBvZiBDT05GSUcuZ2VvbWV0cnkuY29tcG9uZW50cyBpcyBPTkUgbWVyZ2VkIGdlb21ldHJ5IG9uIE9ORSBtYXRlcmlhbCAtLSBvbmUgZHJhd1xuICAgKiBjYWxsLiBFdmVyeSBwYXJ0IGluc2lkZSBpdCBpcyBhIHRpbnRlZCBib3gsIHR1YmUsIGN5bGluZGVyLCBsYXRoZSBvciBwbGFuZTsgY29sb3VyIGRpZmZlcmVuY2VzXG4gICAqIGFyZSB2ZXJ0ZXggY29sb3Vycy4gYHV2YCBwaWNrcyBob3cgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSByZXBlYXRzIG92ZXIgaXQuICovXG4gIGZvciAoY29uc3QgYyBvZiBHLmNvbXBvbmVudHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoYy5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgbWlycm9yWCgoYy5ib3hlc01pcnJvcmVkID8/IFtdKSBhcyBudW1iZXJbXVtdKSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgKGMudHViZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgICAvLyBTV0VQVCB0dWJlczogb25lIG1pdHJlZCByaW5nIHBlciBwb2ludCBpbnN0ZWFkIG9mIGEgY3lsaW5kZXIgcGVyIHNlZ21lbnQgLS0gdGhlIG9ubHkgdGhpbmcgdGhhdFxuICAgIC8vIHN1cnZpdmVzIGEgdGlnaHQgYmVuZC4gU2VlIHN3ZWVwVHViZS5cbiAgICBmb3IgKGNvbnN0IHQgb2YgKGMuc3dlZXBzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaChzd2VlcFR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gMTAsIHQuaGV4LCB0LmNhcCAhPT0gZmFsc2UpKTtcbiAgICBmb3IgKGNvbnN0IHN0IG9mIChjLnN0cmFwcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2goc3RyYXAoc3QucHRzLCBzdC53LCBzdC50LCBzdC5hYm91dCwgc3QuaGV4KSk7XG4gICAgZm9yIChjb25zdCBjeSBvZiAoYy5jeWxzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHRoMGAvYHRoTGVuYCBtYWtlIGEgUEFSVElBTCBjeWxpbmRlciAoYSBjdXJ2ZWQgc3RpY2tlciBwYXRjaCB3cmFwcGVkIG9uIGEgcm91bmQgYm9keSkgYW5kXG4gICAgICAvLyBgb3BlbmAgZHJvcHMgdGhlIGNhcHM7IHRoZSBzaWRlIFVWcyB0aGVuIHJ1biAwLi4xIGFjcm9zcyB0aGUgYXJjIGFuZCB1cCB0aGUgaGVpZ2h0LCB3aGljaCBpc1xuICAgICAgLy8gd2hhdCBhIGJha2VkIGdyYXBoaWMgd2FudHMuIGB1dlJlcGAgbXVsdGlwbGllcyB0aGVtIGZvciBhIHJlcGVhdGluZyB0aWxlLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGN5LnJ0LCBjeS5yYiwgY3kuaCwgY3kuc2VnID8/IDEyLCAxLCBjeS5vcGVuID8/IGZhbHNlLCBjeS50aDAgPz8gMCwgY3kudGhMZW4gPz8gTWF0aC5QSSAqIDIpO1xuICAgICAgaWYgKGN5LnV2UmVwKSB7IGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7IGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIGN5LnV2UmVwWzBdLCB1di5nZXRZKGkpICogY3kudXZSZXBbMV0pOyB9XG4gICAgICAvLyBgc2lkZVVWYCBwaW5zIHRoZSBTSURFIHdhbGwncyBVVnMgdG8gb25lIHRleGVsIHNvIGEgZGlzYyBjYXJyeWluZyBhIGJha2VkIHRvcC1kb3duIGltYWdlIHNob3dzXG4gICAgICAvLyB0aGF0IGltYWdlIG9uIGl0cyBjYXAgYWxvbmUsIHdpdGggaXRzIHJpbSBpbiB3aGF0ZXZlciB0aGUgcGlubmVkIHRleGVsIGhvbGRzIChhIGJhZyB0b25lKS5cbiAgICAgIGlmIChjeS5zaWRlVVYpIHsgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKSwgbiA9ICgoY3kuc2VnID8/IDEyKSArIDEpICogMjsgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHV2LnNldFhZKGksIGN5LnNpZGVVVlswXSwgY3kuc2lkZVVWWzFdKTsgfVxuICAgICAgLy8gYHNjYWxlYCBiZWZvcmUgdGhlIHJvdGF0aW9uczogYW4gT1ZBTCBiYXNpbiBvciBkaXNjLCB3aGljaCBhIGxhdGhlIG9yIGEgY3lsaW5kZXIgY2Fubm90XG4gICAgICAvLyByZXZvbHZlIG9uIGl0cyBvd24uIE5vcm1hbHMgYXJlIHJlY29tcHV0ZWQgYmVjYXVzZSBhIG5vbi11bmlmb3JtIHNjYWxlIHNrZXdzIHRoZW0uXG4gICAgICBpZiAoY3kuc2NhbGUpIHsgZy5zY2FsZShjeS5zY2FsZVswXSwgY3kuc2NhbGVbMV0sIGN5LnNjYWxlWzJdKTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyB9XG4gICAgICAvLyBDVUxNIFVWczogdSBhcm91bmQgdGhlIGNpcmN1bWZlcmVuY2UsIHYgYWxvbmcgdGhlIGxlbmd0aCwgYm90aCBpbiBtZXRyZXMgLS0gc28gdGhlIG5vZGVcbiAgICAgIC8vIHJpbmdzIG9mIGEgY3VsbSB0aWxlIGNyb3NzIGEgYmFtYm9vIHBvbGUgYXQgcmVhbCBzcGFjaW5nIGhvd2V2ZXIgdGhlIHBvbGUgaXMgdGhlbiB0dXJuZWQuXG4gICAgICAvLyBJdCBoYXMgdG8gaGFwcGVuIEJFRk9SRSB0aGUgcm90YXRpb25zLCB3aGlsZSB0aGUgY3lsaW5kZXIgc3RpbGwgcnVucyBhbG9uZyBpdHMgb3duIFkuXG4gICAgICBpZiAoYy51diA9PT0gJ2N1bG0nKSBjdWxtVVYoZywgY3kucnQsIGN5LmgsIGMudXZTY2FsZSA/PyAxLCBjeS52T2ZmID8/IDApO1xuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnkpIGcucm90YXRlWShjeS5yeSk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbCBvZiAoYy5sYXRoZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgcnlgIHlhd3MgdGhlIHJldm9sdXRpb246IGEgNC1zZWdtZW50IGxhdGhlIHR1cm5lZCA0NSBkZWdyZWVzIGlzIGEgY2hhbWZlcmVkIFNRVUFSRSBzbGFiIGluIG9uZVxuICAgICAgLy8gZ2VvbWV0cnkgKGEgY29uZSdzIHJ1YmJlciBiYXNlKSwgd2hlcmUgdHdvIHN0YWNrZWQgYm94ZXMgd291bGQgY29zdCB0d28gYW5kIGEgY29wbGFuYXIgcGFpci5cbiAgICAgIC8vIGBjeWxVVmAgKGEgdGlsZSBzaXplIGluIG1ldHJlcykgd3JpdGVzIGEgc2VhbWxlc3MgYXJvdW5kLWJ5LXVwIFVWIGZyb20gdGhlIGxhdGhlJ3Mgb3duIHNlZ21lbnRcbiAgICAgIC8vIGluZGV4IC0tIGF0YW4yIHdvdWxkIGZvbGQgYSB3aG9sZSB0aWxlIGludG8gdGhlIHNlYW0gY29sdW1uIC0tIGZvciB0cmVhZCwgZmx1dGluZyBhbmQgZ3JhaW4uXG4gICAgICBjb25zdCBnID0gbGF0aGUobC5wdHMsIGwuc2VnID8/IDEyLCAwLCBsLnNoYXJwICE9PSBmYWxzZSwgbC53ZWxkU2VhbSA9PT0gdHJ1ZSk7XG4gICAgICBpZiAobC5jeWxVVikgeyBjb25zdCBjdSA9IEFycmF5LmlzQXJyYXkobC5jeWxVVikgPyBsLmN5bFVWIDogW2wuY3lsVVYsIGwuY3lsVVYsIDBdOyBsYXRoZVVWKGcsIChnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCAvICgobC5zZWcgPz8gMTIpICsgMSkpIHwgMCwgbC5zZWcgPz8gMTIsIGN1WzBdLCBjdVsxXSwgY3VbMl0gPz8gMCk7IH1cbiAgICAgIGlmIChsLnNjYWxlKSB7IGcuc2NhbGUobC5zY2FsZVswXSwgbC5zY2FsZVsxXSwgbC5zY2FsZVsyXSk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgfVxuICAgICAgLy8gYHJ5YCB5YXdzIHRoZSByZXZvbHV0aW9uIChhYm92ZSkuIGByeGAvYHJ6YCBUSUxUIHRoZSBheGlzIGl0c2VsZiwgd2hpY2ggaXMgd2hhdCBhIFdBTEwgb3JcbiAgICAgIC8vIGNlaWxpbmcgZml0dGluZyBuZWVkczogYSBsYXRoZSByZXZvbHZlcyBhYm91dCArWSwgYW5kIGEgYnVsa2hlYWQgbGFtcCdzIGF4aXMgaXMgdGhlIHdhbGxcbiAgICAgIC8vIG5vcm1hbCwgc28gaXRzIGJhY2twbGF0ZSBhbmQgZG9tZSBhcmUgYXV0aG9yZWQgYWJvdXQgWSBhbmQgbGFpZCBkb3duIHdpdGggcnggPSBQSS8yLlxuICAgICAgaWYgKGwucnkpIGcucm90YXRlWShsLnJ5KTsgaWYgKGwucngpIGcucm90YXRlWChsLnJ4KTsgaWYgKGwucnopIGcucm90YXRlWihsLnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGwuYXRbMF0sIGwuYXRbMV0sIGwuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgbC5oZXgpKTtcbiAgICB9XG4gICAgLy8gUklCQkVEIERPTUVTOiBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiBjYXJyeWluZyB2ZXJ0aWNhbCBGTFVURVMsIGFzIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgXG4gICAgLy8gc2FtcGxlZCBwZXIgc2VjdG9yIHJhdGhlciB0aGFuIGEgbGF0aGUuIEEgcHJlc3NlZC1nbGFzcyBsYW1wIGRvbWUgaXMgZmx1dGVkLCBhbmQgYSBzbW9vdGggb25lXG4gICAgLy8gcmVhZHMgYXMgYSBwbGFzdGljIGJ1YmJsZSAtLSB0aGUgcmlicyBhcmUgbW9zdCBvZiB3aGF0IHNheXMgYGdsYXNzYCBhdCBwcm9wIGRpc3RhbmNlLiBBdXRob3JlZFxuICAgIC8vIGFib3V0ICtZIGxpa2UgYSBsYXRoZSwgc28gYSB3YWxsIGZpdHRpbmcgbGF5cyBpdCBkb3duIHdpdGggcnguXG4gICAgZm9yIChjb25zdCBkIG9mIChjLmRvbWVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHJpYmJlZERvbWUoZC5wdHMsIGQucmlicywgZC5hbXAsIGQuc2VnID8/IDI0LCBkLnZhbGxleSk7XG4gICAgICBpZiAoZC5yeSkgZy5yb3RhdGVZKGQucnkpOyBpZiAoZC5yeCkgZy5yb3RhdGVYKGQucngpOyBpZiAoZC5yeikgZy5yb3RhdGVaKGQucnopO1xuICAgICAgaWYgKGQuYXQpIGcudHJhbnNsYXRlKGQuYXRbMF0sIGQuYXRbMV0sIGQuYXRbMl0pO1xuICAgICAgLy8gQSBmbHV0ZWQgZG9tZSB3cml0ZXMgaXRzIE9XTiBjb2xvdXIgYXR0cmlidXRlICh0aGUgY3Jlc3QtdG8tdmFsbGV5IG11bHRpcGxpZXIpLCBzbyB0aW50R2VvXG4gICAgICAvLyB3b3VsZCBvdmVyd3JpdGUgdGhlIGZsdXRlIHN0cmlwaW5nIHdpdGggb25lIGZsYXQgaGV4IC0tIHRoZSBzYW1lIHRyYXAgYHNoZWV0YCdzIGhleFVuZGVyXG4gICAgICAvLyBmZWxsIGludG8uIE11bHRpcGx5IHRoZSB0b25lIElOVE8gdGhlIG11bHRpcGxpZXIgaW5zdGVhZCwgc28gdGhlIGRvbWUgY2FycmllcyBib3RoLlxuICAgICAgaWYgKGQudmFsbGV5ICYmIGQuaGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY29sID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgICBjb25zdCB0ID0gbmV3IFRIUkVFLkNvbG9yKGQuaGV4KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2wuY291bnQ7IGkrKykgY29sLnNldFhZWihpLCBjb2wuZ2V0WChpKSAqIHQuciwgY29sLmdldFkoaSkgKiB0LmcsIGNvbC5nZXRaKGkpICogdC5iKTtcbiAgICAgICAgZ3MucHVzaChnKTtcbiAgICAgIH0gZWxzZSBncy5wdXNoKGQudmFsbGV5ID8gZyA6IHRpbnRHZW8oZywgZC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwIG9mIChjLnBsYW5lcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgUEFORTogYSBzaW5nbGUgcXVhZCBpbiB0aGUgWFkgcGxhbmUgYXQgZGVwdGggeiwgZG91YmxlLXNpZGVkIGJ5IGl0cyBtYXRlcmlhbC4gSXRzIFVWcyBydW5cbiAgICAgIC8vIDAuLjEgYWNyb3NzIHRoZSBwYW5lIHNvIGFuIGFscGhhLWN1dCB0aWxlIHJlcGVhdHMgYHJlcGAgdGltZXMgYWNyb3NzIGFuZCBkb3duLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHAudywgcC5oLCAxLCAxKTtcbiAgICAgIGcudHJhbnNsYXRlKHAuYXRbMF0sIHAuYXRbMV0sIHAuYXRbMl0pO1xuICAgICAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIChwLnJlcD8uWzBdID8/IDEpLCB1di5nZXRZKGkpICogKHAucmVwPy5bMV0gPz8gMSkpO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIHAuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5leHRydWRlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgcHJvZmlsZSBpbiB0aGUgWFkgcGxhbmUgZXh0cnVkZWQgYWxvbmcgWiBiZXR3ZWVuIHowIGFuZCB6MSAtLSBhIHNsYWIgd2l0aCBhIG1vdWxkZWQgZWRnZSxcbiAgICAgIC8vIGEgcHlyYW1pZCBjYXAgYXMgYSBzdGVwcGVkIHByb2ZpbGUsIGEgc3BlYXIgZmluaWFsLlxuICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIHNoYXBlLm1vdmVUbyhlLnBvbHlbMF1bMF0sIGUucG9seVswXVsxXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGUucG9seS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKGUucG9seVtpXVswXSwgZS5wb2x5W2ldWzFdKTtcbiAgICAgIHNoYXBlLmNsb3NlUGF0aCgpO1xuICAgICAgZm9yIChjb25zdCBoIG9mIChlLmhvbGVzID8/IFtdKSBhcyBudW1iZXJbXVtdW10pIHtcbiAgICAgICAgY29uc3QgaHAgPSBuZXcgVEhSRUUuUGF0aCgpOyBocC5tb3ZlVG8oaFswXVswXSwgaFswXVsxXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaC5sZW5ndGg7IGkrKykgaHAubGluZVRvKGhbaV1bMF0sIGhbaV1bMV0pO1xuICAgICAgICBocC5jbG9zZVBhdGgoKTsgc2hhcGUuaG9sZXMucHVzaChocCk7XG4gICAgICB9XG4gICAgICBjb25zdCBnID0gZXh0cnVkZUFsb25nWihzaGFwZSwgZS56MCwgZS56MSk7XG4gICAgICBpZiAoZS5yeCkgZy5yb3RhdGVYKGUucngpO1xuICAgICAgaWYgKGUucnkpIGcucm90YXRlWShlLnJ5KTtcbiAgICAgIGlmIChlLnJ6KSBnLnJvdGF0ZVooZS5yeik7XG4gICAgICBpZiAoZS5hdCkgZy50cmFuc2xhdGUoZS5hdFswXSwgZS5hdFsxXSwgZS5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgZS5oZXgpKTtcbiAgICB9XG4gICAgLy8gRUxMSVBTT0lEUzogW2hleCwgY3gsIGN5LCBjeiwgcngsIHJ5LCByeiwgcm90WD8sIHJvdFk/LCByb3RaP10gLS0gYSB1bml0IHNwaGVyZSBzY2FsZWQgcGVyIGF4aXNcbiAgICAvLyBhbmQgdHVybmVkIGFib3V0IGl0cyBvd24gY2VudHJlLiBBIHNrdWxsIGRvbWUsIGEgcGF3LCBhIG5vc2UgcGFkOiB0aGUgcm91bmRlZCBzb2xpZHMgb2YgYW5cbiAgICAvLyBhbmltYWwgdGhhdCBhIGJveCBvciBhIHN0YXRpb24gdHViZSBjYW5ub3QgZ2l2ZSwgc2hhcmluZyBzbW9vdGggbm9ybWFscyB0aHJvdWdoIHRoZSBtZXJnZS5cbiAgICBmb3IgKGNvbnN0IGUgb2YgKGMuZWxsaXBzb2lkcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkge1xuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLCBlWzEwXSA/PyAxNiwgZVsxMV0gPz8gMTIpO1xuICAgICAgZy5zY2FsZShlWzRdLCBlWzVdLCBlWzZdKTtcbiAgICAgIGlmIChlWzddKSBnLnJvdGF0ZVgoZVs3XSk7IGlmIChlWzhdKSBnLnJvdGF0ZVkoZVs4XSk7IGlmIChlWzldKSBnLnJvdGF0ZVooZVs5XSk7XG4gICAgICBnLnRyYW5zbGF0ZShlWzFdLCBlWzJdLCBlWzNdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlWzBdKSk7XG4gICAgfVxuICAgIC8vIEZSVVNUQTogW2hleCwgY3gsIHlCb3R0b20sIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0gLS0gYSBib3ggd2hvc2UgZm9vdHByaW50IGNoYW5nZXMgZnJvbSAodzAsIGQwKSBhdFxuICAgIC8vIHRoZSBib3R0b20gdG8gKHcxLCBkMSkgYXQgdGhlIHRvcDogdGhlIHRhcGVyZWQgYm9keSBvZiBhIHdoZWVsaWUgYmluIG9yIGEgc3RlZWwgY29udGFpbmVyLlxuICAgIGZvciAoY29uc3QgZiBvZiAoYy5mcnVzdGEgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhmcnVzdHVtKGYuc2xpY2UoMSkpLCBmWzBdKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgLy8gRFJBUEVEIFNIRUVUUzogYSB0YXJwIG9yIGF3bmluZyBhcyBhIGhlaWdodCBncmlkIHdpdGggdGhpY2tuZXNzIC0tIGEgcmlkZ2UsIHRoZSBzYWcgYmV0d2VlblxuICAgIC8vIGl0cyBwb2xlcyBhbmQgdGhlIGRyb29wIG9mIGl0cyBmcmVlIGVkZ2VzIGFyZSBudW1iZXJzIGluIHRoZSBncmlkLCBjb21wdXRlZCBhdCBlbWl0IHRpbWUuXG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNoZWV0cyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgc2hlZXQgZ2l2ZW4gYGhleFVuZGVyYCBoYXMgYWxyZWFkeSB3cml0dGVuIGl0cyBPV04gY29sb3VyIGF0dHJpYnV0ZSwgb25lIHRvbmUgZm9yIHRoZSB0b3BcbiAgICAgIC8vIGdyaWQgYW5kIGFub3RoZXIgZm9yIHRoZSB1bmRlcnNpZGUgYW5kIHJpbS4gdGludEdlbyB3b3VsZCBvdmVyd3JpdGUgdGhlIGxvdCB3aXRoIGEgc2luZ2xlXG4gICAgICAvLyBoZXggLS0gd2hpY2ggaXMgd2hhdCBzaGlwcGVkIHRoZSB0YXJwYXVsaW4gYmF5J3MgYmx1ZS1vdmVyLW9yYW5nZSB0YXJwIGFzIGEgd2hpdGUgc2FpbC5cbiAgICAgIGNvbnN0IGcgPSBzaGVldChzKTtcbiAgICAgIGdzLnB1c2gocy5oZXhVbmRlciAhPT0gdW5kZWZpbmVkID8gZyA6IHRpbnRHZW8oZywgcy5oZXgpKTtcbiAgICB9XG4gICAgLy8gT1JHQU5JQyBzdGF0aW9uIHR1YmVzOiBbeiwgY3gsIGN5LCByeCwgcnldIHN0YXRpb25zIHN3ZXB0IGFsb25nIFogLS0gdGhlIG9ubHkgc29mdCBmb3JtIGluIHRoZVxuICAgIC8vIGtpdCwgYSBseWluZyBhbmltYWwuIExpdCBzbW9vdGggYnkgdGhlIGhlbHBlcidzIHNoYXJlZCByaW5nIHZlcnRpY2VzLlxuICAgIGZvciAoY29uc3QgdCBvZiAoYy50dWJlc0Fsb25nID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHR1YmVBbG9uZyh0LnN0YXRpb25zLCB0LnNlZyA/PyAxMik7XG4gICAgICBpZiAodC5yeSkgZy5yb3RhdGVZKHQucnkpOyBpZiAodC5hdCkgZy50cmFuc2xhdGUodC5hdFswXSwgdC5hdFsxXSwgdC5hdFsyXSk7XG4gICAgICAvLyBgaGV4ZXNgIC0tIG9uZSBjb2xvdXIgcGVyIFNUQVRJT04sIGJsZW5kZWQgYWxvbmcgdGhlIHN3ZWVwIC0tIGlzIGhvdyBhIGNvYXQgcGF0dGVybiB0aGF0IHJ1bnNcbiAgICAgIC8vIGFsb25nIHRoZSBib2R5IChhIHdoaXRlIGNvbGxhciBiZXR3ZWVuIGEgdGFuIHNrdWxsIGFuZCBhIHRhbiBzYWRkbGUpIGlzIGNhcnJpZWQgb24gYSBzaW5nbGVcbiAgICAgIC8vIG1lcmdlZCBtZXNoLiBUaGUgY29tcG9uZW50J3MgYXhpcyB0aW50IHRoZW4gbXVsdGlwbGllcyB0aGUgZG9yc2FsLXRvLXZlbnRyYWwgZmFkZSBpbnRvIGl0LFxuICAgICAgLy8gYW5kIG5laXRoZXIgY29zdHMgYSBtYXRlcmlhbC4gQSBzaW5nbGUgYGhleGAgc3RheXMgdGhlIGRlZmF1bHQuXG4gICAgICBpZiAodC5oZXhlcykge1xuICAgICAgICAvLyBBIHN0YXRpb24gZW50cnkgbWF5IGJlIG9uZSBoZXgsIG9yIGEgUEFJUiBbZG9yc2FsLCB2ZW50cmFsXSBibGVuZGVkIGFyb3VuZCB0aGUgcmluZyBieSB0aGVcbiAgICAgICAgLy8gc2FtZSBzaW4odGhldGEpIHR1YmVBbG9uZyBzd2VwdCB0aGUgc2VjdGlvbiB3aXRoIC0tIHNvIHRoZSBjb2F0IHJ1bnMgYm90aCBBTE9ORyB0aGUgYm9keVxuICAgICAgICAvLyAoYSB3aGl0ZSBjb2xsYXIgYmV0d2VlbiBhIHRhbiBza3VsbCBhbmQgYSB0YW4gc2FkZGxlKSBhbmQgQUNST1NTIGl0ICh0aGUgc2FkZGxlIGdpdmluZyB3YXlcbiAgICAgICAgLy8gdG8gYSBkdXN0eSBmbGFuayBhbmQgYSBwYWxlIGJlbGx5KS4gQW4gYXhpcyB0aW50IGNhbm5vdCBkbyB0aGUgc2Vjb25kIGhhbGY6IG9uIGFuIGFuaW1hbFxuICAgICAgICAvLyBseWluZyBvbiBpdHMgc2lkZSB0aGUgZG9yc2FsLXRvLXZlbnRyYWwgYXhpcyBpcyBob3Jpem9udGFsLCBzbyBhIGJhbmQgaW4geCBjdXRzIHRoZSBjcm93blxuICAgICAgICAvLyBvZiB0aGUgc3dlZXAgaW4gaGFsZiwgYW5kIGEgTVVMVElQTFkgY2FuIG9ubHkgZXZlciBkYXJrZW4gLS0gaXQgY2Fubm90IHRha2UgYSB3YXJtIHRhbiB0b1xuICAgICAgICAvLyBhIGNvb2xlciBncmV5LiBUd28gY29sb3VycyBwZXIgc3RhdGlvbiwgb25lIGF0dHJpYnV0ZSwgc3RpbGwgb25lIGRyYXcgY2FsbC5cbiAgICAgICAgY29uc3Qgc2VnID0gdC5zZWcgPz8gMTIsIG4gPSB0LnN0YXRpb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShzZWcgKiBuICogMyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZSA9IHQuaGV4ZXNbTWF0aC5taW4odC5oZXhlcy5sZW5ndGggLSAxLCBpKV07XG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBUSFJFRS5Db2xvcihBcnJheS5pc0FycmF5KGUpID8gZVswXSA6IGUpLCB2ID0gbmV3IFRIUkVFLkNvbG9yKEFycmF5LmlzQXJyYXkoZSkgPyBlWzFdIDogZSk7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZiA9IChNYXRoLnNpbihqICogTWF0aC5QSSAqIDIgLyBzZWcpICsgMSkgLyAyO1xuICAgICAgICAgICAgY29uc3QgayA9IChpICogc2VnICsgaikgKiAzO1xuICAgICAgICAgICAgY29sW2tdID0gZC5yICsgKHYuciAtIGQucikgKiBmOyBjb2xbayArIDFdID0gZC5nICsgKHYuZyAtIGQuZykgKiBmOyBjb2xbayArIDJdID0gZC5iICsgKHYuYiAtIGQuYikgKiBmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICAgICAgICBncy5wdXNoKGcpO1xuICAgICAgfSBlbHNlIGdzLnB1c2godGludEdlbyhnLCB0LmhleCA/PyAweGZmZmZmZikpO1xuICAgIH1cbiAgICBsZXQgZyA9IG1lcmdlR2Vvcyhncyk7XG4gICAgLy8gYSBwZXItY29tcG9uZW50IHNjYWxlLCBhcHBsaWVkIHRvIHRoZSBtZXJnZSBiZWZvcmUgdGludGluZzogaG93IGEgbHlpbmcgYW5pbWFsIGF1dGhvcmVkIGF0XG4gICAgLy8gaXRzIG93biBwcm9wb3J0aW9ucyBpcyBmaXR0ZWQgaW50byB0aGUgZGVjbGFyZWQgZW52ZWxvcGUgd2l0aG91dCByZS1yZWFkaW5nIGV2ZXJ5IHN0YXRpb25cbiAgICBpZiAoYy5zY2FsZSkgZy5zY2FsZShjLnNjYWxlWzBdLCBjLnNjYWxlWzFdLCBjLnNjYWxlWzJdKTtcbiAgICAvLyBBWElTIFRJTlQ6IGEgcGVyLXZlcnRleCBibGVuZCBmcm9tIGMwIGF0IGBmcm9tYCB0byBjMSBhdCBgdG9gIGFsb25nIG9uZSBheGlzLCBvdmVyIHRoZSB3aG9sZVxuICAgIC8vIG1lcmdlIC0tIGEgdGFuIGJhY2sgZmFkaW5nIHRvIGEgd2hpdGUgYmVsbHkgY29zdHMgYW4gYXR0cmlidXRlLCBub3QgYSBzZWNvbmQgbWF0ZXJpYWwuIEFwcGxpZWRcbiAgICAvLyBpbiBMSU5FQVIgc3BhY2UgdGhyb3VnaCBUSFJFRS5Db2xvci4gYGtlZXBgIG11bHRpcGxpZXMgdGhlIGJsZW5kIGludG8gdGhlIGV4aXN0aW5nIHRpbnQgaW5zdGVhZFxuICAgIC8vIG9mIHJlcGxhY2luZyBpdCwgc28gYSBkYXJrIG5vc2Ugc3RheXMgZGFyay5cbiAgICBpZiAoYy50aW50KSB7XG4gICAgICBjb25zdCBhID0gbmV3IFRIUkVFLkNvbG9yKGMudGludC5jMCksIGIgPSBuZXcgVEhSRUUuQ29sb3IoYy50aW50LmMxKTtcbiAgICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTsgbGV0IGNvbCA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSB8IG51bGw7XG4gICAgICBpZiAoIWNvbCkgeyBjb2wgPSBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpLmZpbGwoMSksIDMpOyBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBjb2wpOyB9XG4gICAgICBjb25zdCBheCA9IGMudGludC5heGlzID09PSAneCcgPyAwIDogYy50aW50LmF4aXMgPT09ICd5JyA/IDEgOiAyO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgdiA9IGF4ID09PSAwID8gcC5nZXRYKGkpIDogYXggPT09IDEgPyBwLmdldFkoaSkgOiBwLmdldFooaSk7XG4gICAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAodiAtIGMudGludC5mcm9tKSAvIChjLnRpbnQudG8gLSBjLnRpbnQuZnJvbSkpKTtcbiAgICAgICAgY29uc3QgciA9IGEuciArIChiLnIgLSBhLnIpICogdCwgZ2cgPSBhLmcgKyAoYi5nIC0gYS5nKSAqIHQsIGJiID0gYS5iICsgKGIuYiAtIGEuYikgKiB0O1xuICAgICAgICBpZiAoYy50aW50LmtlZXApIGNvbC5zZXRYWVooaSwgY29sLmdldFgoaSkgKiByLCBjb2wuZ2V0WShpKSAqIGdnLCBjb2wuZ2V0WihpKSAqIGJiKTsgZWxzZSBjb2wuc2V0WFlaKGksIHIsIGdnLCBiYik7XG4gICAgICB9XG4gICAgICBjb2wubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoYy51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAnaGVpZ2h0JykgZyA9IGhlaWdodFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ3BhbmVsJykgZyA9IHBhbmVsVVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAncGFuZWwtcm90JykgZyA9IHBhbmVsVVYoZywgYy51dlNjYWxlID8/IDEsIHRydWUpO1xuICAgIC8vICdjdWxtJyBpcyBkZWxpYmVyYXRlbHkgYWJzZW50IGhlcmU6IGl0IGlzIHdyaXR0ZW4gcGVyIGN5bGluZGVyIGFib3ZlLCBiZWZvcmUgdGhlIHJvdGF0aW9ucyxcbiAgICAvLyBhbmQgYSB3aG9sZS1tZXJnZSBwYXNzIHdvdWxkIGZsYXR0ZW4gaXQgYmFjayB0byB0aGUgY3lsaW5kZXIncyBkZWZhdWx0IDAuLjEgd3JhcC5cbiAgICBhZGQoYy5pZCwgYy5uYW1lLCBnLCBjLm1hdGVyaWFsKTtcbiAgICBpZiAoYy5jb2xsaWRlcikgY29sbGlkZXJzW2MuaWRdID0gYy5jb2xsaWRlcjtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmVwZXRpdGlvbiBzeXN0ZW1zXG4gICAqIFBpY2tldHMsIHNsYXRzLCBsYXR0aWNlIHN0cmlwczogb25lIGdlb21ldHJ5LCBvbmUgSW5zdGFuY2VkTWVzaCwgb25lIGRyYXcgY2FsbC4gKi9cbiAgZm9yIChjb25zdCByIG9mIChHLmluc3RhbmNlZCA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoci5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgKHIuc3Bpa2VzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNwaWtlKHMuYXQsIHMudywgcy5oKSwgcy5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IGYgb2YgKHIuZnJ1c3RhID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8oZnJ1c3R1bShmLnNsaWNlKDEpKSwgZlswXSkpO1xuICAgIGZvciAoY29uc3QgY3kgb2YgKHIuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIGB0aDBgL2B0aExlbmAgY3V0IGEgUEFSVElBTCBjeWxpbmRlciB0aGUgc2FtZSB3YXkgdGhlIGNvbXBvbmVudCBicmFuY2ggZG9lczogYSBzcGxpdCBiYW1ib29cbiAgICAgIC8vIGN1bG0gaXMgYSBoYWxmIHBpcGUsIHRoTGVuID0gUEksIGBvcGVuYCBzbyBpdCBpcyBhIHNoZWxsIHdpdGggbm8gZGlzY3MgYXQgaXRzIGVuZHMuIFRoZVxuICAgICAgLy8gbWF0ZXJpYWwgY2FycmllcyBkb3VibGVTaWRlZCwgYmVjYXVzZSBhIGhvbGxvdy11cCBjdWxtIGlzIHNlZW4gZnJvbSB0aGUgaW5zaWRlLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGN5LnJ0LCBjeS5yYiwgY3kuaCwgY3kuc2VnID8/IDEyLCAxLCBjeS5vcGVuID8/IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5LnRoMCA/PyAwLCBjeS50aExlbiA/PyBNYXRoLlBJICogMik7XG4gICAgICBpZiAoci51diA9PT0gJ2N1bG0nKSBjdWxtVVYoZywgY3kucnQsIGN5LmgsIHIudXZTY2FsZSA/PyAxLCBjeS52T2ZmID8/IDApO1xuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnkpIGcucm90YXRlWShjeS5yeSk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIC8vIEFuIE9QRU4gd2hlZWwgLS0gdHlyZSBhbmQgcmltIGFzIGNsb3NlZCByaW5nIGxhdGhlcywgYSBodWIsIGFuZCB3aXJlIHNwb2tlcyAtLSBmb3IgYSBiaWN5Y2xlXG4gICAgLy8gd2hvc2Ugd2hlZWxzIHJlYWQgYXMgYmljeWNsZSB3aGVlbHMgcmF0aGVyIHRoYW4gZGlzY3MuIExhdGhlcyByZXZvbHZlIGFib3V0IFkgKGByeGAgbGF5cyB0aGVcbiAgICAvLyBheGxlIHdoZXJlIHRoZSBwbGFjZW1lbnQgd2FudHMgaXQpOyBgc3Bva2VzYCByYWRpYXRlIGFib3V0IFggYnkgdGhlIGhlbHBlcidzIGNvbnZlbnRpb24sIHNvIGFuXG4gICAgLy8gYXhsZSBvbiBaIHRha2VzIGByeTogUEkvMmAuXG4gICAgZm9yIChjb25zdCBsIG9mIChyLmxhdGhlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBsYXRoZShsLnB0cywgbC5zZWcgPz8gMTIsIDAsIGwuc2hhcnAgIT09IGZhbHNlLCBsLndlbGRTZWFtID09PSB0cnVlKTtcbiAgICAgIGlmIChsLnJ4KSBnLnJvdGF0ZVgobC5yeCk7IGlmIChsLnJ5KSBnLnJvdGF0ZVkobC5yeSk7IGlmIChsLnJ6KSBnLnJvdGF0ZVoobC5yeik7XG4gICAgICBpZiAobC5hdCkgZy50cmFuc2xhdGUobC5hdFswXSwgbC5hdFsxXSwgbC5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBsLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHMgb2YgKHIuc3Bva2VzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHNwb2tlcyhzLnJIdWIsIHMuclJpbSwgcy5oYWxmVywgcy5uLCBzLmhleCwgcy50ID8/IDAuMDA2LCBzLnByaXNtID8/IGZhbHNlKTtcbiAgICAgIGlmIChzLnJ4KSBnLnJvdGF0ZVgocy5yeCk7IGlmIChzLnJ5KSBnLnJvdGF0ZVkocy5yeSk7IGlmIChzLnJ6KSBnLnJvdGF0ZVoocy5yeik7XG4gICAgICBpZiAocy5hdCkgZy50cmFuc2xhdGUocy5hdFswXSwgcy5hdFsxXSwgcy5hdFsyXSk7IGdzLnB1c2goZyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdCBvZiAoci50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIGxldCBnID0gbWVyZ2VHZW9zKGdzKTtcbiAgICBpZiAoci51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgci51dlNjYWxlID8/IDEpO1xuICAgIGlmIChyLnV2ID09PSAnaGVpZ2h0JykgZyA9IGhlaWdodFVWKGcsIHIudXZTY2FsZSA/PyAxKTtcbiAgICAvLyAnY3VsbScgYWdhaW4gd3JpdHRlbiBwZXIgY3lsaW5kZXIgYWJvdmUsIGJlZm9yZSB0aGUgcm90YXRpb25zLlxuICAgIGNvbnN0IG1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgcCBvZiByLnBsYWNlbWVudHMgYXMgbnVtYmVyW11bXSkge1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKG5ldyBUSFJFRS5FdWxlcihwWzNdID8/IDAsIHBbNF0gPz8gMCwgcFs1XSA/PyAwKSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKSk7XG4gICAgfVxuICAgIGFkZEluc3Qoci5pZCwgci5uYW1lLCBnLCByLm1hdGVyaWFsLCBtYXRzLCByLmNvbG9ycyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhc2VzICovXG4gIGZvciAoY29uc3QgdCBvZiAoQ09ORklHLnRpbGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG1hdCA9IG1hdGVyaWFsc1t0Lm1hdGVyaWFsXTtcbiAgICBpZiAoIW1hdCkgY29udGludWU7XG4gICAgLy8gQSBCQUtFRCBncmFwaGljIChhIHByaW50ZWQgc2lnbiBmYWNlKTogb25lIFdlYlAgZGF0YSBVUkkgY29tcG9zZWQgb2ZmbGluZSBmcm9tIHRoZSBwbGF0ZSdzIG93blxuICAgIC8vIHByaW50ZWQgcmVnaW9uIGFuZCB2ZWN0b3IgbWFya3MsIGxvYWRlZCB0aHJvdWdoIFRleHR1cmVMb2FkZXIuIEFzc2lnbmVkIHN5bmNocm9ub3VzbHkgc28gdGhlXG4gICAgLy8gaGFybmVzcyB3YWl0cyBvbiB0aGUgZGVjb2RlLiBJdCBiZWF0cyBmaWxsVGV4dCwgd2hpY2ggZHJhd3MgYSBkaWZmZXJlbnQgd29yZG1hcmsgcGVyIG1hY2hpbmUuXG4gICAgaWYgKHQua2luZCA9PT0gJ2Jha2VkJykge1xuICAgICAgLy8gVW5kZXIgcGxhaW4gTm9kZSAodGhlIGNvcGxhbmFyIGNoZWNrLCB0aGUgcnVudGltZSBwcm9iZSkgdGhlcmUgaXMgbm8gZG9jdW1lbnQgZm9yIEltYWdlTG9hZGVyOlxuICAgICAgLy8ga2VlcCB0aGUgd2hpdGUgZmFsbGJhY2sgcmF0aGVyIHRoYW4gdGhyb3csIGV4YWN0bHkgYXMgdGhlIHJldGFpbCBnbGF6aW5nIGRvZXMuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgY29udGludWU7XG4gICAgICBjb25zdCBiYWtlZCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCh0LnVyaSk7XG4gICAgICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG4gICAgICBpZiAoc3JnYikgYmFrZWQuY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgICBiYWtlZC5hbmlzb3Ryb3B5ID0gNDtcbiAgICAgIG1hdC5tYXAgPSBiYWtlZDsgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBsZXQgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKHQua2luZCA9PT0gJ211ZCcpIHRleCA9IG11ZFRpbGUodC5zaXplID8/IDUxMiwgdC5iYXNlLCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMzKTtcbiAgICBpZiAodC5raW5kID09PSAnZHVzdCcpIHRleCA9IGR1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuZHVzdCwgdC5zZWVkID8/IDEsIHQuY292ZXJhZ2UgPz8gMC4zMCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BsYW5rJykgdGV4ID0gcGxhbmtUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYm9hcmRzID8/IDYsIHQuc2VlZCA/PyA1KTtcbiAgICBpZiAodC5raW5kID09PSAncnVzdCcpIHRleCA9IHJ1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQucmF0aW8sIHQuc2VlZCA/PyA3LCB0LmRlbnNpdHkgPz8gOTApO1xuICAgIGlmICh0LmtpbmQgPT09ICdwYWludCcpIHRleCA9IHBhaW50VGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTcsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjb3JydWdhdGlvbicpIHRleCA9IGNvcnJ1Z2F0aW9uVGlsZSh0LnNpemUgPz8gNTEyLCB0LnBpdGNoID8/IDEyLCB0LmxvdyA/PyAwLjcsIHQuc2VlZCA/PyAzKTtcbiAgICBpZiAodC5raW5kID09PSAnZ3JpbWUnKSB0ZXggPSBncmltZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDExLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnemluYycpIHRleCA9IHppbmNUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxOSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2Z1cicpIHRleCA9IGZ1clRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDEzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY2hhaW5saW5rJykgdGV4ID0gY2hhaW5saW5rVGlsZSh0LnNpemUgPz8gMjU2LCB0LndpcmUgPz8gMC4wOSwgdC5zZWVkID8/IDQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdiYW1ib28nKSB0ZXggPSBiYW1ib29UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc3RyaXBzID8/IDEwLCB0LnNlZWQgPz8gNik7XG4gICAgaWYgKHQua2luZCA9PT0gJ3N0cmlwZXMnKSB0ZXggPSBzdHJpcGVUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuYmFuZHMgPz8gOCwgdC5hLCB0LmIsIHQuc2VlZCA/PyA5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAncG9zdGVyJykgdGV4ID0gcG9zdGVyVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gOCwgdC5saW5lcyA/PyBbXSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BlYmJsZScpIHRleCA9IHBlYmJsZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDIxLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndHJlYWQnKSB0ZXggPSB0cmVhZFRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDIzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndHlyZScpIHRleCA9IHR5cmVUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuc2VlZCA/PyAyOSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2N1bG0nKSB0ZXggPSBjdWxtVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMzEpO1xuICAgIGlmICh0LmtpbmQgPT09ICdzYXduJykgdGV4ID0gc2F3blRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndGhhdGNoJykgdGV4ID0gdGhhdGNoVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMzcsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0YXJwJykgdGV4ID0gdGFycFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQxLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnZ2FsdicpIHRleCA9IGdhbHZUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA0NywgdCk7XG4gICAgYmluZFRpbGUobWF0LCB0ZXgsIHQuYnVtcCA/PyAwKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVdhdGVyRmlsbGVkUGxhc3RpY0JhcnJpZXJNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IHRoZSByb290LCBwbHVzIE9ORSBQRVIgV0hFRUwgKGFuZCBhbnkgb3RoZXIgbWVjaGFuaXNtIENPTkZJRy5waXZvdHMgbmFtZXMgLS0gYVxuICAgIC8vIHN0ZWVyaW5nIGhlYWQsIGEgY2Fub3B5IHN0YXkpLiBBIHZlaGljbGUncyB3aGVlbHMgZ2VudWluZWx5IHR1cm4sIHNvIGVhY2ggb25lIGlzIGEgcHJvbWlzZVxuICAgIC8vIGtlcHQ6IHRoZSBwaXZvdCBzaXRzIGF0IHRoZSBodWIsIGl0cyBheGlzIGlzIHRoZSBheGxlLCBhbmQgYGluc3RhbmNlYCBuYW1lcyB3aGljaCBpbnN0YW5jZVxuICAgIC8vIG9mIHRoZSB3aGVlbCBJbnN0YW5jZWRNZXNoIGl0IGRyaXZlcy4gTm90aGluZyBlbHNlIG9uIHRoZSBwcm9wIG1vdmVzIC0tIHRoZSBkb29ycyBhcmUgcGFydFxuICAgIC8vIG9mIHRoZSBib2R5IHNoZWxsIC0tIHNvIG5vdGhpbmcgZWxzZSBnZXRzIGFuIGF4aXMuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG4gICAgZm9yIChjb25zdCBwdiBvZiAoQ09ORklHLnBpdm90cyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IG8gPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgIG8ubmFtZSA9IHB2Lm5hbWU7XG4gICAgICBvLnBvc2l0aW9uLnNldChwdi5wb3NpdGlvblswXSwgcHYucG9zaXRpb25bMV0sIHB2LnBvc2l0aW9uWzJdKTtcbiAgICAgIG8udXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgICAgYW5pbWF0aW9uUm9sZTogJ2NoaWxkJyxcbiAgICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IHB2LnBvc2l0aW9uLCBheGlzOiBwdi5heGlzLCBuYW1lOiBwdi5uYW1lLFxuICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHB2LmNvbXBvbmVudCwgaW5zdGFuY2U6IHB2Lmluc3RhbmNlID8/IG51bGwsIG5vdGVzOiBwdi5ub3RlID8/ICcnIH0sXG4gICAgICB9O1xuICAgICAgcm9vdC5hZGQobyk7XG4gICAgICBwaXZvdHMucHVzaChvKTtcbiAgICB9XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FIHVubGVzcyBDT05GSUcuc29ja2V0cyBuYW1lcyBvbmUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gYSB2ZWhpY2xlIGluIHRoaXMga2l0XG4gICAgLy8gYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJldHVybiBjcmVhdGVPYmplY3RNb2RlbCh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBOEN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxRQUNMO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLGNBQWM7QUFBQSxNQUNaO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxZQUFZO0FBQUEsVUFDVixTQUFTO0FBQUEsVUFDVCxlQUFlO0FBQUEsWUFDYjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsZUFBZTtBQUFBLFlBQ2I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQSxZQUFZO0FBQUEsVUFDVjtBQUFBLFlBQ0UsUUFBUTtBQUFBLGNBQ047QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEs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QUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQUcsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUFHLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFDOUUsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQUcsU0FBRyxLQUFLLFFBQVFBLElBQUcsRUFBRSxHQUFHLENBQUM7QUFBQSxJQUM3RTtBQUNBLGVBQVcsS0FBTSxFQUFFLFVBQVUsQ0FBQyxHQUFhO0FBQ3pDLFlBQU1BLEtBQUksT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxNQUFPLEVBQUUsU0FBUyxLQUFLO0FBQ3BGLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQUcsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUM5RSxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFBRyxTQUFHLEtBQUtBLEVBQUM7QUFBQSxJQUM3RDtBQUNBLGVBQVcsS0FBTSxFQUFFLFNBQVMsQ0FBQyxFQUFhLElBQUcsS0FBSyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDckYsUUFBSSxJQUFJLFVBQVUsRUFBRTtBQUNwQixRQUFJLEVBQUUsT0FBTyxRQUFTLEtBQUksUUFBUSxHQUFHLEVBQUUsV0FBVyxDQUFDO0FBQ25ELFFBQUksRUFBRSxPQUFPLFNBQVUsS0FBSSxT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
