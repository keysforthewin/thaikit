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

// ../repo/scratch/swing-lid-recycling-bin/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createSwingLidRecyclingBinModel: () => createSwingLidRecyclingBinModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "swing-lid-recycling-bin",
  "name": "Swing-Lid Recycling Bin",
  "exportName": "SwingLidRecyclingBin",
  "envelope": "Envelope 0.5 x 0.6 x 0.5 m, origin base-center, +Y up, +Z front (the sticker face), lugs on +/-X.\n * Budget (medium): <=2000 triangles, <=2 draw calls, <=2 materials, <=4 unique geometries.",
  "materials": [
    {
      "id": "plastic",
      "color": 16777215,
      "roughness": 0.72,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "lidplastic",
      "color": 16777215,
      "roughness": 0.72,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "sticker",
      "color": 16777215,
      "roughness": 0.65,
      "metalness": 0
    }
  ],
  "tiles": [
    {
      "material": "plastic",
      "kind": "stripes",
      "size": 256,
      "bands": 18,
      "a": [
        1,
        1,
        1
      ],
      "b": [
        0.925,
        0.935,
        0.95
      ],
      "seed": 201
    },
    {
      "material": "sticker",
      "kind": "baked",
      "uri": "data:image/webp;base64,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"
    }
  ],
  "geometry": {
    "components": [
      {
        "id": "body",
        "name": "Tapered body, lugs and domed lid",
        "material": "plastic",
        "uv": "height",
        "uvScale": 0.32,
        "collider": {
          "shape": "cylinder",
          "localCenter": [
            0,
            0.3,
            0
          ],
          "radius": 0.25,
          "height": 0.6,
          "axis": [
            0,
            1,
            0
          ],
          "notes": "Declared on the asset as cylinder: one proxy over body, lugs and lid."
        },
        "lathes": [
          {
            "pts": [
              [
                0,
                0.01
              ],
              [
                0.142,
                0.01
              ],
              [
                0.17,
                0
              ],
              [
                0.1775,
                0.025
              ],
              [
                0.185825,
                0.16
              ],
              [
                0.19199166666666667,
                0.26
              ],
              [
                0.196,
                0.318
              ],
              [
                0.188,
                0.325
              ],
              [
                0,
                0.325
              ]
            ],
            "seg": 28,
            "at": [
              0,
              0,
              0
            ],
            "hex": 7109518
          }
        ],
        "boxes": [
          [
            7109518,
            0.218,
            0.3835,
            0,
            0.062,
            0.016,
            0.03
          ],
          [
            7109518,
            0.218,
            0.2985,
            0,
            0.062,
            0.016,
            0.03
          ],
          [
            7109518,
            0.2415,
            0.341,
            0,
            0.014,
            0.104,
            0.03
          ],
          [
            7109518,
            -0.218,
            0.3835,
            0,
            0.062,
            0.016,
            0.03
          ],
          [
            7109518,
            -0.218,
            0.2985,
            0,
            0.062,
            0.016,
            0.03
          ],
          [
            7109518,
            -0.2415,
            0.341,
            0,
            0.014,
            0.104,
            0.03
          ]
        ]
      },
      {
        "id": "lid",
        "name": "Domed lift-off lid",
        "material": "lidplastic",
        "uv": "height",
        "uvScale": 0.32,
        "lathes": [
          {
            "pts": [
              [
                0,
                0.295
              ],
              [
                0.208,
                0.295
              ],
              [
                0.214,
                0.302
              ],
              [
                0.214,
                0.402
              ],
              [
                0.216,
                0.431
              ],
              [
                0.2111,
                0.4636
              ],
              [
                0.1965,
                0.4949
              ],
              [
                0.1738,
                0.5233
              ],
              [
                0.1442,
                0.5477
              ],
              [
                0.113,
                0.567
              ],
              [
                0.08,
                0.58
              ],
              [
                0.043,
                0.5862
              ],
              [
                0,
                0.588
              ]
            ],
            "seg": 28,
            "at": [
              0,
              0,
              0
            ],
            "hex": 3106451
          }
        ],
        "boxes": [
          [
            3106451,
            0,
            0.577,
            0,
            0.17,
            0.022,
            0.046
          ],
          [
            3037824,
            0,
            0.5745,
            0.0238,
            0.14,
            0.012,
            16e-4
          ]
        ]
      },
      {
        "id": "sticker",
        "name": "Recycling sticker",
        "material": "sticker",
        "parent": "body",
        "cyls": [
          {
            "at": [
              0,
              0.226,
              0
            ],
            "rt": 0.19659500000000002,
            "rb": 0.189195,
            "h": 0.12,
            "seg": 8,
            "open": true,
            "th0": -0.42,
            "thLen": 0.84,
            "hex": 16777215
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
function createSwingLidRecyclingBinModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Swing-Lid Recycling Bin";
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
  const root = createSwingLidRecyclingBinModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogU3dpbmctTGlkIFJlY3ljbGluZyBCaW4gLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcsXG4gKiBpbnN0YW5jaW5nIGFuZCB0aGUgbGF0aGUgaGVscGVycyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzXG4gKiBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgMC41IHggMC42IHggMC41IG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsICtaIGZyb250ICh0aGUgc3RpY2tlciBmYWNlKSwgbHVncyBvbiArLy1YLlxuICogQnVkZ2V0IChtZWRpdW0pOiA8PTIwMDAgdHJpYW5nbGVzLCA8PTIgZHJhdyBjYWxscywgPD0yIG1hdGVyaWFscywgPD00IHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoYWlraXQncyBTVFJFRVQgQU5EIFZFTkRPUiBQUk9QUyAtLSBhIGNvbmUsIGEgYmFycmllciwgYSBjYXJ0LCBhIHN0b29sLiBUaGVcbiAqIHNoYXJlZCB2b2NhYnVsYXJ5IGlzIHRoZSBUSU5URUQgQk9YIGFuZCB0aGUgcG9seWxpbmUgVFVCRSBtZXJnZWQgaW50byBvbmUgZ2VvbWV0cnkgcGVyIG1hdGVyaWFsLFxuICogd2l0aCBldmVyeSBjb2xvdXIgZGlmZmVyZW5jZSBpbnNpZGUgYSBtYXRlcmlhbCBjYXJyaWVkIGFzIGEgdmVydGV4IGNvbG91ciBvbiBhIFdISVRFIG1hdGVyaWFsLFxuICogYW5kIHN1cmZhY2UgaWRlbnRpdHkgKGNvcnJ1Z2F0aW9uLCBncmltZSB3YXNoLCBtb3NzLCBwbGFuayBqb2ludHMsIHJ1c3QpIGRlbGl2ZXJlZCBhcyBPTkVcbiAqIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHBlciBtYXRlcmlhbCByYXRoZXIgdGhhbiBhcyBnZW9tZXRyeSBvciBhIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJzd2luZy1saWQtcmVjeWNsaW5nLWJpblwiLFxuICAgIFwibmFtZVwiOiBcIlN3aW5nLUxpZCBSZWN5Y2xpbmcgQmluXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiU3dpbmdMaWRSZWN5Y2xpbmdCaW5cIixcbiAgICBcImVudmVsb3BlXCI6IFwiRW52ZWxvcGUgMC41IHggMC42IHggMC41IG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsICtaIGZyb250ICh0aGUgc3RpY2tlciBmYWNlKSwgbHVncyBvbiArLy1YLlxcbiAqIEJ1ZGdldCAobWVkaXVtKTogPD0yMDAwIHRyaWFuZ2xlcywgPD0yIGRyYXcgY2FsbHMsIDw9MiBtYXRlcmlhbHMsIDw9NCB1bmlxdWUgZ2VvbWV0cmllcy5cIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJwbGFzdGljXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNzIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJsaWRwbGFzdGljXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNzIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzdGlja2VyXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNjUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH1cbiAgICBdLFxuICAgIFwidGlsZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwicGxhc3RpY1wiLFxuICAgICAgICBcImtpbmRcIjogXCJzdHJpcGVzXCIsXG4gICAgICAgIFwic2l6ZVwiOiAyNTYsXG4gICAgICAgIFwiYmFuZHNcIjogMTgsXG4gICAgICAgIFwiYVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDFcbiAgICAgICAgXSxcbiAgICAgICAgXCJiXCI6IFtcbiAgICAgICAgICAwLjkyNSxcbiAgICAgICAgICAwLjkzNSxcbiAgICAgICAgICAwLjk1XG4gICAgICAgIF0sXG4gICAgICAgIFwic2VlZFwiOiAyMDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJzdGlja2VyXCIsXG4gICAgICAgIFwia2luZFwiOiBcImJha2VkXCIsXG4gICAgICAgIFwidXJpXCI6IFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmw0U0FBQlhSVUpRVmxBNElGSVNBQUN3VXdDZEFTb0FBUUFCUGxVb2tVWWpvcUdoSkRMcTJIQUtpV2R1ZDhpVkt0QlpOQmxsVnV1T2xaOVpmcnY3bjg4WGQ3NkUvV1g5MS9jL2JUL2QrQmZ4VjFCZnlIK2QvN1BnTHdDL24zOWs5RE9jbGV6Y2ZoUUU4VHovdC8yUHFLK3B2L1A3aW42OS85Z0hCMVIyekVITUR4YjAzeDFQUkRkSk80R0tiaktZekxUMTNJM3FqbjhJSS9lM1d3NlJyajlxcVBEOTZuR3hhNlM0elU3Vmt0Q2EyeEM0UXJ1SHdwVTBnSWUwTjlVYnRpOWFHV3hwNks0Zk90ZjFVaG1UM2JubDhFOG5McVJqSEZ0M0p2UjNjWnhMQUJlQVVFazB1ZWVGU3JyVVN0VVVLd08wK2tHLytVUUo2WU5WcjBWSzdGZ1BOMm1qNC9RS2ZNL1ZmMUt4RzFSZ1pCbDYrOW1WN2VDVTJMc3E5ak5DdkMvNTNZQWN1YkFXVFVoSWM0M3RUVTByZ2NQSzFsU01UUVRMRlBWUjZJMW9kWC9yZGJrU2ZYN0dLYUVheSt1cjU5RDJrb0pndGZNRHRDTGdqZmJ2a0l1SWFwNEFJeGxqQndHMzNnc09FeFZVV00yVm5QdjhlZWhOMlJNM092emgwTllNaTYxQlQ4QnNLNWxSY1RqNmdTMUtFeUwwL2RsU2d3N0pORDFVVWhqdmVva0JLUlZtemV1L0hrQWNkSnNrSTZlU1pydEhJdVA2bEk3eVlOcDNCQWp6aGJhWUxpaTlXQXVoMEJhY3FtNEtPQmttdXBIbU8xdXdOQzUvUkV5N1ZvL1BjbDhqZmZDWlgrRUJnb1VmRUlnVGhnS1lmSnVUZXhjU1NWci82aDc2d3kxaStyN3FiT3Q1cVhxS3lIRE1UK0FrQk5nVHZYeUZqdzdZNFozdWM0ZDBBWlhraG1zdnI3VzRxWVdEa2xTQVJBN1UyUU5Wc0dRRW1HQ3VXczhGeGl2L3FrM284SEtNZ3NyQ094WUpiemwzVzRsR0hmRStTcGp3SS8vZ3ZwR2o5Z2hXcjFPaU1INGdvY1BHa1c0alZ1QTFrMnExQTUrN1o1Q1F2NkdKcXAxMmQ0ajUreWhxYTRiS2hpejZDMFJBejdLdnlBT2NFVWYxSjBzdzZTUVphdHBDdERlVmZ6Q2s3VStjRHNZNC9TSmJmc1VNdG9BQS9tNG03NW9Rb01EUDNTbzgzdU5OVDdSM2VpdEEyZFlpczFzTHZsS1RjZ282bS9NZi9IaGJVdFhIdUQvY0wvVDdiV2d0RFFIc1VseEVmc0JPSFRaMEgxZG9QSmt1YStSUFRXcytya1ptMHIzZFVxQlVrQ2J3anh0RVFzUzdrOWUvVjBKYkRNd2dCM3orQk1VUVZrcEFoTXduREt4RU5RZnpOT0dHNDZqL2tjdFhjZy9CcTNWZjk2bUEwSHNXeTRqVWsvaExranVPN0gwWVhqaGxsV3lQbjhSeTRmUTZ1dHl2Z0c4enFRSEo2R0hHNE9mQ3hTUjBtN1Y0aVBURnRoYzg0UXQrNzBwaWVTUk15R3NnNlNMT1BFY0N3QkxLSG1ra2ViM2tnbHY0SUVReGNtZTJmTlh3ZDJKOE9DcmhoZmpGcUNhUHh3UWYvQ2hlUjVjaEowNEpkSU1vam1LaHM3Ylhib0hmRWxDUElOcXZEM1krSFlEbmZYK24zZWQ4bUxVMnNtajNUZmI3dlpxamZ2QXJVcGRXcmIrVkJ3WEIyNkMwTDJ2NWxTcFpUc3hJSnpJa3V2TU8rdzZhWTh4VEFVRytxU0xVY2xGeWhaQzJ4bEZ1Y2c4UWZoeXpXMEFDMWZzWFowbEdoZnhSVGxaaTdlbVJKRm5VN2F4SDAvQmVseTY1V1QrWUNBYysyRFBuRjFpTnpJMW5Sekh6MjZHODNEYzN6VzBIZUFsWkg4TUt6aFMrL0VnVGYrS0lvaDgvZmdKVG05N1dtQUo1bmtFV21vZGZ0RnRMYUVEVkRUSGhPYTB6b0F4b0ZoV29xOGU5b3dqdEVqZ3htMldZMk9YaGJKVnY1Uit3KzJ0ZmdidFk4TFd4SWVYSDR2ZXl5bFMyZmpMZjUyVDJlSXg3S0VPL0RJanl3SHUvK1I4K1BXVUlMV2FjQ3pXNnpmdlNqU1NQNTBjbkJQOVppVElTQ3VnMjVFamUwb2o4TnlvNmZpbGJrV2JuNis2UnFUQjBlcENJaHJsY3VKQ3I5M3NVTHovOFhWVUJTdHlmMnc2NUU4ZHczQ2JTTlNhcXlwK0YrMEUxYmRwaEpFWTc5Z3grZSsyWGttQzUzbXVRVkpsb2J3ZGdUZkxqY29LMUNtdHcyTnAwOU81dEN3aHFIaE9vekgyUlpiMW5Yclg1TXhrZzNhYkxqbXZ3cWQ1M3N3WFNqYVVucHFuL1RYZkJrWXhsMllIblh2ajgyczRhbVBZbTBJTlU5VEdGSlAxYkErSEFXaENNMm1HU2d6VEFabzBLMnBuSVdDSVlVV0RvSXNGalIzVk9HNEd6ZnFvTE53eTBGUEZaaWpTM29IeFQxNEt4TjAxMStPM0oyM1hSNmlQeE8wd01VaGtVTVQwendhZHoxL3gybU45Smh2NjZtQ3gvMisxQkxjdC9VWHNFZ09OaFZSdUtIQ1p0UE42MnMxRHg5b2JpUWsvZFU2MGJKNC96N0FXNXByNnFIN3daNzJaWjRoaGdzY05zMFREN215dHJWZmZ3dnAzcytRdXcxSXd2bmJTWUxBeFF4OEd5d3N0YXlMYzhoQkJoOHJRa2djK3o4YUFPQm9QaWF4VGN6VmxFQmdCYVFmZFdUcTF2MTZPQkFveEF0YmJnZUcyeVRnSllQYy9Nb0xXME11QXpuZ2pXUFIvd0d1SHltODY1SENDbG5KU2pXc1JUSU4zNlFBQkxveVNsYW1Bb3BWSkhocTY2QUl3RU1NUTBBRzdIdDlkd2l4bHU5V0RuSThqNzZsbnBseDZrN21CQ3p6N2p1S2dYV2x6RWlCc1ZoRjE4RnZvZjRtckh2ZUtrYS9leDQzUWZhckhiZlpQVFNDa2M4aVY3OGtSRVF2QnlFbXVDM1VNTzF3Y3UzOHg1OXNuUFBpdGdLcnF1MnNNQlJjVGREcS9NdmFWU3J4cUZVWjc1MzdjM0RuK2ZseWJzYzF0TnpMLzFEY1UyU3I5em1oNTdVVzVrZ1VlOHpGSmh1MFA1cTNoQ2tMNlRTNEo1K0FWQVZRMEZSRXdOeCtIdGhCNDBuK0c3WDhoMnJlc0FIa0U1eTNnajVIdzVIc0FQWURGRHJPQlpjejV3UmFzOHRmWnNqSVJrVDJ1d2VDNWFVVElrUnQyZTdGVEVtY1pwRGxqR3pOR09ZU0p0ejE3R054TkxoOVhjYkhha2FMWjdkK2RCZkNiUVI4Q1VSa1EzbU9heUNCdW4yN2xyUUlEalJFQjdaaFFjSXRCVGhyTlVwSCtKWHcxSDBoaXV3RVQyM1ZUTTJsWTczN0N6MXFEZlZOdFpaMGZIamc5c0lxS002SmZEMzNTcWJrSmkrclhEODVTRVVsUlZVdWFrQjdGNGc1WkNlRzFnNnd4UzFxcTNJSzdZNTF1aXJIL01hV1N2S1l6eFlTbzViS0FXb3RLVlYvZ1FFZGVFMWQ5bnMvdy9PZXlJZ214YjZDaXhtR0xldm15UDU5MVEvb2xld0M5RUZlTmRaSUVDb1ViNHZsUDFEcWo4WFNPKzcrNGlOazB6MGNDck5oWXZGa3pEZDROWEhnY2MzTDAzbWpBNWpNelhZTDMrZHZMTXZ1dzl0cmIyaTRVWWliZjN1YmwzaDFDancyRTlscDNpVm1RQXpIZVFDdU1WOUlMYWRHT2IvTW5Pd3RtNTNEc1pXRlBLd29nQnMrbmJVTG9jSk9vRlpyU1ZtbG1QV0xaKzB6d25renY2RG9wZUJFTlFBTGlnMC92MTB4cDlVQzNLSzhqWlh1OU9ocVJxcjYvVWNQU28vWkxkM3JXa3pwWWNlTzQxbWhpSS9pTkxXZllFcW8rRitnaklnVkxsQmxZT1ZkMWhhQ0MzQkl2dmZuOGcyaXUxTytaV1gyci9BQkxEbEZGRUpJdmF2RnZwUmZ5dmJYK3ZWOTBKaFJXa1A2K0hWM08zZk1aV2xra2QyeVB3ZHlyb0t2T0VCK1F5bmE2SXRCdWxVa3RscUVCMlY4RE5iQndWZW13UnhxeDZEcDgycWIrZG5qMlFybEdYVXpzM0VSNWl6VVRNem1Yek51WnJQczlha0lEVC9mbitKeThBRDhSOHdScVIwQ1hMc0V4T042WHZvL3RzUzFYMmJKd3loNXZmWXVpZUZzUHZTK3JxK1Iwa0FwdjBmZVlnR0tORnZtdVVyVmJHcFBzdmNTZFhCQmFTTDg1OHk4NFczS0FPQnQ0L3plZU5nS0NFWWtSd1E4WnBwZUwwaklnbHByNmkzWEN4ck1USHVmUjFFdlUzOFcrY2plUjdLRDFrYXA0em5Fem9RSFMxNWpUb21LVmlJcVJqQmtoMllTdWp6SlJxQTRLN0VvVEgyODJxbVNOMU83dkhtVDNORklNZTNZYXFsdXBDWDhPbFowaE1HdDBVT2FWampPaGltZ0pBRVp0T2krM014MUx4YVd6VHYzVTVPcUpyTHJlZW9UbVJ6VXZlbTZqTzNxWWZPbUd1bFpoM2M1bFhMdUNwY0xZa25sWi94RnVzZGxBUkwyWjZkR0lHOUJqOEk2Q2NENjR0K1ZucjRhK0tWN1RVNHNhTktPTTJUVGJqa0FkVy9WSGQzUkhkZVh4Ni8yZWVUVkc0YlJWRks1RnNVNmJ0Vk5qa2had3BWcmppNzAwQkROMktSc0dHMzhEZ2VhMHBnWkMzdUF5a1RkL1dKTDJPUzhzNnNwbTNoeDliT1VEUnp1ZUNCY0dVSE5mQXovdURwNjVhcEFGMUE2a1FKcnlFc2xaU1lSK3luTjhYQ1JJbkJ4ZHIvMEFIV1o3VEw4RldLQ1Izek0wVE15U2ZkbmlHcWV4WDd0QlBlRGRHWGhoNjhacnh1K3FVZFNkMm1Ua3VqajlaUEZ4Rk9XL2QzbXNWODNXb3pudS9lQjhYRjZrYUhqT0w4YnRVcWdJWnpMZjkxMlRNdVpOMkFIaFp1RXlwREszUmREQWNrU0cyaVVUV05RaWovQnJObUtkMEI4OXlwUlcwWEVuQWhodkJ6aHFNZzJBZlRSOUdtbG94TVVybDVITXc2c1dFYkk1NGpySm9aaDUwU25ta2ZGcnFmOTU1UlJNWmhNNGF1TXBGa1hsUSsyakMyVGRmWmZlSTBWT296UmQ3dDdZM0FLeTErZ29ORmIvN3RlTXVHeHdkMkh2U2k4UUpSaW90UWlobzZ6T2lCUTBzc0NZOVN6UmNJK3NjL05EbWRZekxyNENBc25nRzB1YnJySWhvdTc1a3U3R2xaRVJ2RnZUSUV4ZTVZZTRjcDhHUVJpWG9QR3JqdnlESi9NeEN5RnJacmtTdjVPN1QyeGpjbmdxb1dBRnJaTWlwOEFHU2RDWWVyUUM2QVJpSjVTcjRsUytTZWtlcm9hTCtNR1pXbllCUUlST0pFRXVoQytLWThxaHRyaTFBS0lEbmFGQjh1cExnNGZCc3hxN1hDdjJsbi9odHR6MXpna3dEblNydmx2ZnpkSVBXR0wyeHJ3bi9vby9VeDV5T0JNbUlycU5adVk5a1NtekZEdWlqbVEycXZLVThrcXJ4SWw1bHZreThtZyt6SEdhZTA3NFJVZXdVQlVvb3h6d2xPTHlvS29tQ2FjWGYrcENtWWQyOXZqSHN3RVpVcXBwQzBaRXlET0U0d0Y0cHdUV2VVSTdJTlBaVUlVb2dGd3A5SUkyLzI1U0JiZU5wT3dDUE5UUFJNUlpFcno3S3hlL3BzblZZdVhJb3FuNWxoMWNjZHpld1pSRGFkdnhvUGNNVGhtdC9tMWtwTFp5bzdzZEhaRlYwQmNnQUx6YWZiZ1d3blFsMFJQbDM1R1JuUko5NXUyMmVpS0dEaE9CYmZyUDVzenhhK1lQVkRtTkorU29JL0pFVHFQRkZNUkt2dTBKSVFSdWZuY1p6RWY2NE9BQy95aHpNTDNiK2UvTm1zRmloRjIxVWVwdDFHdUQ2eDNCcTBQVlVjRi9uSS9rTFlKN2FnOE5QWDRBRm5vYTFSYzVpRi9lcmpqb0cvT1I2bXAyMTlyTDdKbmRYeXVwVWVQSjluNjZvUm9abXRvekdLdUVpZGlSYlliZTdoUmdBUTdGVTRoNjRlbW9mY3E1Y2lPN1Q1eEw2U0w5d1RDVGl2RmVpUWJUYlM3L1F6WHJIQVI5eUxpRlkySEFCT1IrVVRKN0RGYTJGREpOaGxmVkdtQmJLNGhOT082RmJoWUNUeWFid0lIaEQ1SkVaYWg3b3Y5WkU2VDY0S0M3SDhEMGlUZzM1dFpSVXNieTFBV0E2SDZtUm5sdWs0U0JLQjhjZ0s2ZHZCVzZuVFZ6Q2l4RjdTanVuUktZTjU4bGVqRDdSTVZWR0Z4QUlFSHdBVnd6RnVXaitoMkw2dFZTQ0tUZnRxZkRJUXc1cm95bWUvSVFHamF6Zlkrb2xFaVZOQ2ZWck00Yzk1VHV0ajJsZExNTjFsalpma2dTaUtoV2U0cVZNSHdBMWxZNm9NdlA5L25CQUs1eUdCZ0NNcm90YlI0Y1plcUJ2WTRtS1VlT0pCUHJrSjRwblpBQ0hGejRpTEJYZkMvTTc3c3pTZEwzL1VTUnVVcE1CL09OS3B6TDZYSStmakJpS0JpUnYwaGN4bWNXc0hjZW1Vd0o3OVpSbm5Ma1lWQ2ZqckVEUVIrUHNWc2NWQU1yUGxhUVFuSzFTcFJTTjkwQlQzUmowOHlDMGMrVm5TQlR0MGhvak4rUlRtOHBIUGVFb1F5QzVrVEEvZENVZm5JMGM2WTFGZkEva0k0VmVoVms4ZVZRaVZzcjAwN0oyeWlBeitteVA3NGNkKzRSVVgvSHNlSzNYbEw3a0dMS2VEWVZMZmk0WGlDOCs1V1V1d1JIem5lYXgzKzZwNlIxRjVOMFFTRXJtVlpBVTJ1V0lLYmNWV2lGZFY5bXVHRzVSamV6REZZeklFVk1UQTRWRTRjQjBMbGdSRmI3Z3VBYmgyS244dWx2b3dOeWxzaDRRMjhaSkdpRjcwS055ZEVaMHQ0bUhUNCtzbVBwaTVlSElzNjVGYXZIL0tuVUZad1NVNG1MaVJvODRXdVU2aVE3S0xNMGR6N2haWkE5cTg3MmtBUXdsMFN1L2IvdURmeEZGZFBmNDk1TEwwUU53cFZ1Y3lwb2hlZStsTGtHU0RVZ3dhbVdxSFJoLzZTS2NUbEh4WVIyTjRrN0dIMWJiSjJZWWVOZmp4QmtJckx5djRmWWlZQnVtYVpiU0dZaHBmdm9Ga1pMQlFtZnUvNDI5RDBYMlZpWWxFK1hqOEtLaThjazFwS2ZJUmRuaDRrUkpSbDh4anNZaEFWMUZ0ZEtFYnVROVR0anhEK0xZeTNnc0lHa1YzYmJnKzFlSVlzdlhMNWg0alBPcFhmNDlPUXJGcS8vK25ac1JwS3lXTy91U2hFdkFHMExyWnA1bjYyZTd0NWtMcjgzeStFWVB6aWFzckQrcWNvbXpHL3BJWndMZFVjR2JTSXB1ZmZhdXZGdzVmdTVWUUIrRGFLdk5ETTN2LzNET3A3czFZSXc5MW1uSlBrckFtSVJnUlRueHlzNnVWbFB0VXVSbUpodjFvNjYrRDNQSTJadG5iaWE4YUVJTXdhTUVhRE00blYyeXhlN20rZ2swU21nMzRFVTVWZVpiOFRmSlBZdXFKV1B1WWhhTDFDS1hsQ2RGa21qbjVJMGMyTEpqZjFiN3pMUE9HdDRwTG5rRWlRb3NzbGZobkZUS3ZmOFRCVDhvbHU0MEFjVG0wbktlV2c2dmxjVjgzdFVwN2p6dDl3WTRrZndkOHhXSkpSRUFta2RYdXQ1dmxpNHlKbUtrUzh3Vk4wbVgrQWtFelRpbUtmbCtyWE1yeFdrZEFUWVhFRnFFWXo0alJLcEk2bWN3ZHpqZFhnTjh5T05CakVPZ2NaOUtuUWNhdG9GS1k0K252c0RPcGY2WGxsamphVFpGeXpXdmloa1Z5aU1hQlE4RGRxbCtzRC8xWktzMXlUVW45amxKRTM5ZkVIaUFFUCs5aVhtV1A4R0Z6QU5ZajdFZzhGTGxMZnZhdVFUVnUxYkY4ZjhXcHpmcG1CTTlMNHdTVDlPRkZSM2xHSVlTWktNL0FlbE9NNWhJa25sL3FDaXAxU3RUUUorMWRremJiMm50aStCUW9HS3VLZ0FBXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJjb21wb25lbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJib2R5XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiVGFwZXJlZCBib2R5LCBsdWdzIGFuZCBkb21lZCBsaWRcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwicGxhc3RpY1wiLFxuICAgICAgICAgIFwidXZcIjogXCJoZWlnaHRcIixcbiAgICAgICAgICBcInV2U2NhbGVcIjogMC4zMixcbiAgICAgICAgICBcImNvbGxpZGVyXCI6IHtcbiAgICAgICAgICAgIFwic2hhcGVcIjogXCJjeWxpbmRlclwiLFxuICAgICAgICAgICAgXCJsb2NhbENlbnRlclwiOiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicmFkaXVzXCI6IDAuMjUsXG4gICAgICAgICAgICBcImhlaWdodFwiOiAwLjYsXG4gICAgICAgICAgICBcImF4aXNcIjogW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJub3Rlc1wiOiBcIkRlY2xhcmVkIG9uIHRoZSBhc3NldCBhcyBjeWxpbmRlcjogb25lIHByb3h5IG92ZXIgYm9keSwgbHVncyBhbmQgbGlkLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxhdGhlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMC4wMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNDIsXG4gICAgICAgICAgICAgICAgICAwLjAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjE3LFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNzc1LFxuICAgICAgICAgICAgICAgICAgMC4wMjVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTg1ODI1LFxuICAgICAgICAgICAgICAgICAgMC4xNlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xOTE5OTE2NjY2NjY2NjY2NyxcbiAgICAgICAgICAgICAgICAgIDAuMjZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTk2LFxuICAgICAgICAgICAgICAgICAgMC4zMThcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTg4LFxuICAgICAgICAgICAgICAgICAgMC4zMjVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwLjMyNVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMjgsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDcxMDk1MThcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICA3MTA5NTE4LFxuICAgICAgICAgICAgICAwLjIxOCxcbiAgICAgICAgICAgICAgMC4zODM1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjA2MixcbiAgICAgICAgICAgICAgMC4wMTYsXG4gICAgICAgICAgICAgIDAuMDNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDcxMDk1MTgsXG4gICAgICAgICAgICAgIDAuMjE4LFxuICAgICAgICAgICAgICAwLjI5ODUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMDYyLFxuICAgICAgICAgICAgICAwLjAxNixcbiAgICAgICAgICAgICAgMC4wM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgNzEwOTUxOCxcbiAgICAgICAgICAgICAgMC4yNDE1LFxuICAgICAgICAgICAgICAwLjM0MSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4wMTQsXG4gICAgICAgICAgICAgIDAuMTA0LFxuICAgICAgICAgICAgICAwLjAzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICA3MTA5NTE4LFxuICAgICAgICAgICAgICAtMC4yMTgsXG4gICAgICAgICAgICAgIDAuMzgzNSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4wNjIsXG4gICAgICAgICAgICAgIDAuMDE2LFxuICAgICAgICAgICAgICAwLjAzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICA3MTA5NTE4LFxuICAgICAgICAgICAgICAtMC4yMTgsXG4gICAgICAgICAgICAgIDAuMjk4NSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4wNjIsXG4gICAgICAgICAgICAgIDAuMDE2LFxuICAgICAgICAgICAgICAwLjAzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICA3MTA5NTE4LFxuICAgICAgICAgICAgICAtMC4yNDE1LFxuICAgICAgICAgICAgICAwLjM0MSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4wMTQsXG4gICAgICAgICAgICAgIDAuMTA0LFxuICAgICAgICAgICAgICAwLjAzXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcImxpZFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkRvbWVkIGxpZnQtb2ZmIGxpZFwiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJsaWRwbGFzdGljXCIsXG4gICAgICAgICAgXCJ1dlwiOiBcImhlaWdodFwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAwLjMyLFxuICAgICAgICAgIFwibGF0aGVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwLjI5NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yMDgsXG4gICAgICAgICAgICAgICAgICAwLjI5NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yMTQsXG4gICAgICAgICAgICAgICAgICAwLjMwMlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yMTQsXG4gICAgICAgICAgICAgICAgICAwLjQwMlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yMTYsXG4gICAgICAgICAgICAgICAgICAwLjQzMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yMTExLFxuICAgICAgICAgICAgICAgICAgMC40NjM2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjE5NjUsXG4gICAgICAgICAgICAgICAgICAwLjQ5NDlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTczOCxcbiAgICAgICAgICAgICAgICAgIDAuNTIzM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNDQyLFxuICAgICAgICAgICAgICAgICAgMC41NDc3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjExMyxcbiAgICAgICAgICAgICAgICAgIDAuNTY3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjA4LFxuICAgICAgICAgICAgICAgICAgMC41OFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4wNDMsXG4gICAgICAgICAgICAgICAgICAwLjU4NjJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwLjU4OFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMjgsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDMxMDY0NTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAzMTA2NDUxLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjU3NyxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4xNyxcbiAgICAgICAgICAgICAgMC4wMjIsXG4gICAgICAgICAgICAgIDAuMDQ2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAzMDM3ODI0LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjU3NDUsXG4gICAgICAgICAgICAgIDAuMDIzOCxcbiAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgMC4wMTIsXG4gICAgICAgICAgICAgIDAuMDAxNlxuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJzdGlja2VyXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUmVjeWNsaW5nIHN0aWNrZXJcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwic3RpY2tlclwiLFxuICAgICAgICAgIFwicGFyZW50XCI6IFwiYm9keVwiLFxuICAgICAgICAgIFwiY3lsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC4yMjYsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMTk2NTk1MDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4xODkxOTUsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjEyLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ0aDBcIjogLTAuNDIsXG4gICAgICAgICAgICAgIFwidGhMZW5cIjogMC44NCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTY3NzcyMTVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICAvLyBDT0xPUiBoYXMgdG8gYmUgY2FycmllZCB0b28sIGFuZCBpdCBpcyBlYXN5IHRvIGZvcmdldDogdGhpcyBmdW5jdGlvbiBjb3BpZWQgcG9zaXRpb24sIG5vcm1hbFxuICAvLyBhbmQgdXYgb25seSwgYW5kIHRoZSBtb3NxdWUncyByaWJiZWQgZG9tZXMgbG9zdCB0aGVpciBncmVlbi1hbmQtcGFsZSBzdHJpcGluZyB0aGUgbW9tZW50IHRoZXlcbiAgLy8gd2VyZSBtZXJnZWQgd2l0aCBhbnl0aGluZy4gVGhlIGZhaWx1cmUgaXMgc2lsZW50IC0tIHRoZSBkb21lIHJlbmRlcnMsIGluIG9uZSBmbGF0IGNvbG91ciAtLSBhbmRcbiAgLy8gdG9vayBhIHdyb25nIHRoZW9yeSBhYm91dCBzUkdCIGdhbW1hIGJlZm9yZSB0aGUgYXR0cmlidXRlIGxpc3Qgd2FzIHJlYWQuIEFueSBpbnB1dCBjYXJyeWluZyBhXG4gIC8vIGNvbG91ciBtZWFucyBldmVyeSBpbnB1dCBnZXRzIG9uZSwgd2hpdGUgd2hlcmUgaXQgaGFkIG5vbmUuXG4gIGNvbnN0IGFueUNvbG9yID0gcGFydHMuc29tZSgoZykgPT4gISFnLmdldEF0dHJpYnV0ZSgnY29sb3InKSk7XG4gIGNvbnN0IGNvbG9yID0gYW55Q29sb3IgPyBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMykuZmlsbCgxKSA6IG51bGw7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgY29uc3QgYyA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgICAgaWYgKGNvbG9yICYmIGMpIHsgY29sb3JbKHYgKyBpKSAqIDNdID0gYy5nZXRYKGkpOyBjb2xvclsodiArIGkpICogMyArIDFdID0gYy5nZXRZKGkpOyBjb2xvclsodiArIGkpICogMyArIDJdID0gYy5nZXRaKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2xvcikgb3V0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9yLCAzKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuLyoqIExhdGhlR2VvbWV0cnkgc2hhcmVzIHRoZSBjb3JuZXIgdmVydGV4IGJldHdlZW4gYW4gZW5kIGRpc2MgYW5kIHRoZSBzaWRlIHdhbGwsIHNvXG4gKiAgY29tcHV0ZVZlcnRleE5vcm1hbHMgdGlsdHMgdGhlIHdhbGwncyBmaXJzdCByaW5nIDQ1IGRlZ3JlZXMgdG93YXJkIHRoZSBkaXNjIGFuZCB0aGUgaGFybmVzcyBzaGFkZXNcbiAqICBhIGRhcmsgZ3JhZGllbnQgdGhlcmUgLS0gYSByaW5nIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIGFzIGEgSE9MRSB1bmRlciB0aGUgc3RhaW5sZXNzIGJpbidzIGNhcC5cbiAqICBJbnNlcnRpbmcgYSBwb2ludCAwLjggbW0gcGFzdCBldmVyeSBzaGFycCBjb3JuZXIgKD4gNzAgZGVncmVlcykgY29uZmluZXMgdGhlIGF2ZXJhZ2VkIG5vcm1hbCB0byB0aGF0XG4gKiAgc2xpdmVyLiBDb3N0cyBvbmUgcmluZyBwZXIgY29ybmVyOyBwYXNzIGBzaGFycCA9IGZhbHNlYCB3aGVyZSB0aGUgYnVkZ2V0IGNhbm5vdCBjYXJyeSBpdC4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29ybmVycyhwdHM6IG51bWJlcltdW10sIG1pbkRlZyA9IDcwLCBlcHMgPSAwLjAwMDgpOiBudW1iZXJbXVtdIHtcbiAgY29uc3Qgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcCA9IHB0c1tpXSwgYSA9IHB0c1tpIC0gMV0sIGIgPSBwdHNbaSArIDFdO1xuICAgIGxldCBzaGFycCA9IGZhbHNlO1xuICAgIGlmIChhICYmIGIpIHtcbiAgICAgIGNvbnN0IHV4ID0gcFswXSAtIGFbMF0sIHV5ID0gcFsxXSAtIGFbMV0sIHZ4ID0gYlswXSAtIHBbMF0sIHZ5ID0gYlsxXSAtIHBbMV07XG4gICAgICBjb25zdCBsdSA9IE1hdGguaHlwb3QodXgsIHV5KSwgbHYgPSBNYXRoLmh5cG90KHZ4LCB2eSk7XG4gICAgICBpZiAobHUgPiAwICYmIGx2ID4gMCkgc2hhcnAgPSBNYXRoLmFjb3MoTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsICh1eCAqIHZ4ICsgdXkgKiB2eSkgLyAobHUgKiBsdikpKSkgPiBtaW5EZWcgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgaWYgKHNoYXJwICYmIGx1ID4gMyAqIGVwcykgb3V0LnB1c2goW3BbMF0gLSB1eCAvIGx1ICogZXBzLCBwWzFdIC0gdXkgLyBsdSAqIGVwc10pO1xuICAgICAgb3V0LnB1c2gocCk7XG4gICAgICBpZiAoc2hhcnAgJiYgbHYgPiAzICogZXBzKSBvdXQucHVzaChbcFswXSArIHZ4IC8gbHYgKiBlcHMsIHBbMV0gKyB2eSAvIGx2ICogZXBzXSk7XG4gICAgfSBlbHNlIG91dC5wdXNoKHApO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBgd2VsZFNlYW1gIGF2ZXJhZ2VzIHRoZSBub3JtYWxzIG9mIHRoZSBmaXJzdCBhbmQgbGFzdCByYWRpYWwgY29sdW1uLCB3aGljaCBpcyB3aGF0IGNsb3NlcyB0aGVcbiAqICByZXZvbHZlJ3MgU0hBRElORyBzZWFtLiBMYXRoZUdlb21ldHJ5IGFscmVhZHkgZG9lcyB0aGlzIGl0c2VsZiAtLSBpdCBleHBsaWNpdGx5IGF2ZXJhZ2VzIHRoZSB0d29cbiAqICBlbmQgY29sdW1ucyBmb3IgYSBmdWxsIDIqUEkgc3dlZXAgLS0gYW5kIHRoZSBgY29tcHV0ZVZlcnRleE5vcm1hbHMoKWAgYmVsb3cgdGhyb3dzIHRoYXQgd29ya1xuICogIGF3YXksIGJlY2F1c2UgYSByZWNvbXB1dGUgc2VlcyB0aGUgc2VhbSBhcyB0d28gdW5jb25uZWN0ZWQgZWRnZXMgYW5kIGdpdmVzIGVhY2ggdGhlIG5vcm1hbCBvZlxuICogIHRoZSBmYWNlcyBvbiBpdHMgb3duIHNpZGUgb25seS4gT24gYSBtYXR0ZSBwcm9wIHRoZSByZXN1bHRpbmcgY3JlYXNlIGlzIGludmlzaWJsZSwgd2hpY2ggaXMgd2h5XG4gKiAgaXQgc3Vydml2ZWQ7IG9uIGEgc2F0aW4gbWV0YWwgaXQgaXMgYSBoYXJkIHZlcnRpY2FsIGxpbmUgZG93biB0aGUgcmV2b2x2ZS4gTWVhc3VyZWQgb24gdGhlXG4gKiAgbm9vZGxlLXNob3AgdGFibGUncyByaW0gYXQgYXppbXV0aCAwOiBhIDMxLWxldmVsIGx1bWEgc3RlcCBhdCB4PTUxMiAoMjQ1IC0+IDIxNCBhdCB5PTI1OCksXG4gKiAgUkVWRVJTSU5HIHRvICsyNyBhdCB5PTI2NiAtLSBhIGRpc2NvbnRpbnVpdHksIG5vdCBhIGdyYWRpZW50LlxuICogIERlZmF1bHQgT0ZGIHNvIG5vIGFscmVhZHktZW1pdHRlZCBwcm9wIGNoYW5nZXMgc2hhZGluZyBpZiBpdCBpcyBldmVyIHJlLWVtaXR0ZWQ7IHRoZSByZWNvbXB1dGVcbiAqICBpcyBzdGlsbCBuZWVkZWQgZm9yIHRoZSBzaGFycC1jb3JuZXIgc3BsaXRzLCBzbyB0aGlzIHdlbGRzIGFmdGVyd2FyZHMgcmF0aGVyIHRoYW4gc2tpcHBpbmcgaXQuICovXG5mdW5jdGlvbiBsYXRoZShwdHM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyLCB5T2Zmc2V0ID0gMCwgc2hhcnAgPSB0cnVlLCB3ZWxkU2VhbSA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB2ID0gKHNoYXJwID8gc3BsaXRDb3JuZXJzKHB0cykgOiBwdHMpLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5tYXgocFswXSwgMCksIHBbMV0gKyB5T2Zmc2V0KSk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeSh2LCBzZWcpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIGlmICh3ZWxkU2VhbSkge1xuICAgIC8vIExhdGhlR2VvbWV0cnkgbGF5cyBvdXQgKHNlZyArIDEpIGNvbHVtbnMgb2YgYHJvd3NgIHZlcnRpY2VzOyBjb2x1bW4gMCBhbmQgY29sdW1uIHNlZyBhcmUgdGhlXG4gICAgLy8gc2FtZSBwbGFjZSBpbiBzcGFjZS4gQXZlcmFnZSB0aGUgcGFpciBhbmQgd3JpdGUgaXQgYmFjayB0byBib3RoLlxuICAgIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gICAgY29uc3Qgcm93cyA9IG4uY291bnQgLyAoc2VnICsgMSk7XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3dzOyByKyspIHtcbiAgICAgIGNvbnN0IGEgPSByLCBiID0gc2VnICogcm93cyArIHI7XG4gICAgICBjb25zdCB4ID0gbi5nZXRYKGEpICsgbi5nZXRYKGIpLCB5ID0gbi5nZXRZKGEpICsgbi5nZXRZKGIpLCB6ID0gbi5nZXRaKGEpICsgbi5nZXRaKGIpO1xuICAgICAgY29uc3QgbCA9IE1hdGguaHlwb3QoeCwgeSwgeikgfHwgMTtcbiAgICAgIG4uc2V0WFlaKGEsIHggLyBsLCB5IC8gbCwgeiAvIGwpO1xuICAgICAgbi5zZXRYWVooYiwgeCAvIGwsIHkgLyBsLCB6IC8gbCk7XG4gICAgfVxuICAgIG4ubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBzdGVwcGVkIHRhcGVyIGFzIGEgbGF0aGUgcHJvZmlsZTogYHJpbmdzYCBhbHRlcm5hdGluZyBvdXQvaW4gcmFkaWkgY2xpbWJpbmcgZnJvbSB5MCB0byB5MS5cbiAqICBPbmUgZ2VvbWV0cnksIG9uZSBkcmF3IGNhbGwsIGFuZCB0aGUgc3RlcCBjb3VudCBpcyBhIHByb2ZpbGUtcG9pbnQgY291bnQgcmF0aGVyIHRoYW4gYSBtZXNoXG4gKiAgY291bnQgLS0gd2hpY2ggaXMgd2hhdCBrZWVwcyBhIDIwLXJpbmcgY2hlZGkgc3BpcmUgaW5zaWRlIGEgMzItZ2VvbWV0cnkgY2VpbGluZy4gKi9cbmZ1bmN0aW9uIHJpbmdlZFRhcGVyKHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHIwOiBudW1iZXIsIHIxOiBudW1iZXIsIHJpbmdzOiBudW1iZXIsIGJ1bGdlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJpbmdzOyBpKyspIHtcbiAgICBjb25zdCB0ID0gaSAvIHJpbmdzO1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgciA9IHIwICsgKHIxIC0gcjApICogdDtcbiAgICBjb25zdCBzdGVwID0gKHkxIC0geTApIC8gcmluZ3M7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeV0pO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHkgKyBzdGVwICogMC40NV0pO1xuICAgIHB0cy5wdXNoKFtyLCB5ICsgc3RlcCAqIDAuNTVdKTtcbiAgfVxuICBwdHMucHVzaChbcjEsIHkxXSk7XG4gIHJldHVybiBwdHM7XG59XG5cblxuLyoqXG4gKiBUaGUgUkVERU5URUQgc3F1YXJlIHBsYW4gLS0gYSBzcXVhcmUgd2hvc2UgZm91ciBjb3JuZXJzIGFyZSBjdXQgYmFjayBpbiB0d28gcmlnaHQtYW5nbGVkIHN0ZXBzLlxuICogSXQgaXMgdGhlIHBsYW4gb2YgYSBUaGFpIGNoZWRpJ3MgdGVycmFjZSBhbmQgb2YgYSBwcmFuZydzIGJhc2UsIGFuZCBidWlsZGluZyBpdCBhcyBhIFNoYXBlIHRoYXRcbiAqIGlzIHRoZW4gZXh0cnVkZWQgaXMgbm90IGEgc3R5bGlzdGljIGNob2ljZTogdGhlIG9idmlvdXMgYWx0ZXJuYXRpdmUsIGEgd2lkZSBib3ggY3Jvc3NlZCBieSBhXG4gKiBkZWVwIGJveCwgcHV0cyB0aGUgdHdvIGJveGVzJyB0b3AgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSBvdmVyIHRoZWlyIHdob2xlXG4gKiBpbnRlcnNlY3Rpb24sIHdoaWNoIHotZmlnaHRzLiBPbmUgZXh0cnVzaW9uIG9mIG9uZSBjbG9zZWQgcGxhbiBoYXMgbm8gaW50ZXJpb3IgY29pbmNpZGVuY2UgYXRcbiAqIGFsbC5cbiAqXG4gKiBgYWAgaXMgdGhlIGhhbGYtd2lkdGggYWNyb3NzIHRoZSBmbGF0czsgYHJgIGlzIHRoZSBkZXB0aCBvZiBlYWNoIHJlZGVudCBzdGVwLlxuICovXG5mdW5jdGlvbiByZWRlbnRlZFNoYXBlKGE6IG51bWJlciwgcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBxdWFkID0gW1thLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGFdXTtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgcXVhZCkge1xuICAgICAgLy8gcm90OTBeaywgYXBwbGllZCBrIHRpbWVzOiAoeCwgeikgLT4gKC16LCB4KVxuICAgICAgbGV0IHB4ID0geCwgcHogPSB6O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHsgY29uc3QgdCA9IHB4OyBweCA9IC1wejsgcHogPSB0OyB9XG4gICAgICBwdHMucHVzaChbcHgsIHB6XSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYmV0d2VlbiB0d28gaGVpZ2h0cy4gRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBhbG9uZyArWiwgc28gdGhlIHJlc3VsdCBpc1xuICogIHJvdGF0ZWQgb250byArWTsgYC1NYXRoLlBJIC8gMmAgYWJvdXQgWCBtYXBzICtaIHRvICtZIGFuZCBsZWF2ZXMgdGhlIHBsYW4ncyBvd24geCBhcyB4LiAqL1xuZnVuY3Rpb24gZXh0cnVkZVNsYWIoc2hhcGU6IFRIUkVFLlNoYXBlLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeTEgLSB5MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgLy8gcm90YXRlWCgtUEkvMikgbWFwcyAoeCwgeSwgeikgLT4gKHgsIHosIC15KSwgc28gdGhlIGV4dHJ1c2lvbiBkZXB0aCBiZWNvbWVzIGhlaWdodCBhbmQgdGhlXG4gIC8vIHBsYW4ncyBvd24gc2Vjb25kIGF4aXMgYmVjb21lcyAtei4gRXZlcnkgcGxhbiBoZXJlIGlzIGZvdXItZm9sZCBzeW1tZXRyaWMsIHNvIHRoYXQgc2lnbiBpc1xuICAvLyBpbW1hdGVyaWFsOyB3aGF0IG1hdHRlcnMgaXMgdGhhdCB0aGUgc2xhYiBub3cgcnVucyBVUCBmcm9tIHk9MCBhbmQgbmVlZHMgbGlmdGluZyBieSB5MC5cbiAgZy5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKDAsIHkwLCAwKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIHNxdWFyZSBwbGFuIHdpdGggYSByZWN0YW5ndWxhciBOT1RDSCBjdXQgaW50byBpdHMgK1ggZmFjZSAtLSB0aGUgc3RhaXIgd2VsbCBvZiBhIHRlbXBsZVxuICogdGVycmFjZS4gQ3V0dGluZyB0aGUgc3RhaXIgb3V0IG9mIHRoZSBwbGFuIHJhdGhlciB0aGFuIGhhbmdpbmcgaXQgb2ZmIHRoZSBvdXRzaWRlIGlzIHdoYXQga2VlcHNcbiAqIGFuIGFzeW1tZXRyaWMgZmVhdHVyZSBpbnNpZGUgYSBzeW1tZXRyaWMgZGVjbGFyZWQgZW52ZWxvcGU6IGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDkgbVxuICogdGVycmFjZSB3b3VsZCBwdXQgdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWQgd2lkdGggb24gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRTcXVhcmUoYTogbnVtYmVyLCBub3RjaEhhbGZaOiBudW1iZXIsIHhJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2EsIC1hXSwgW2EsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCBub3RjaEhhbGZaXSxcbiAgICAgICAgICAgICAgIFthLCBub3RjaEhhbGZaXSwgW2EsIGFdLCBbLWEsIGFdLCBbLWEsIC1hXV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgUkVDVEFOR1VMQVIgcGxhbiB3aXRoIGEgbm90Y2ggY3V0IGludG8gaXRzICtaIGZhY2UuIFRoZSBzcXVhcmUgdmVyc2lvbiBhYm92ZSBpcyB3aGF0IGEgY2hlZGkgb3JcbiAqIGEgcHJhbmcgdGVycmFjZSBuZWVkczsgYSBoYWxsIHRoYXQgaXMgdHdpY2UgYXMgbG9uZyBhcyBpdCBpcyB3aWRlIG5lZWRzIHRoZSB0d28gaGFsZi1leHRlbnRzIGtlcHRcbiAqIGFwYXJ0LCBhbmQgaXRzIHN0YWlyIGlzIG9uIGEgc2hvcnQgZW5kIHJhdGhlciB0aGFuIGEgbG9uZyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRSZWN0KGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2h4LCAtaHpdLCBbaHgsIGh6XSwgW254LCBoel0sIFtueCwgeklubmVyXSwgWy1ueCwgeklubmVyXSwgWy1ueCwgaHpdLCBbLWh4LCBoel0sIFstaHgsIC1oel1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBUaGUgY3Jvc3Mtc2VjdGlvbiBvZiBvbmUgcm9vZiB0aWVyLCBhcyBhIGNsb3NlZCB0cmFwZXpvaWQgaW4gWFk6IGVhdmVzIGF0ICgrLWhhbGZCYXNlLCB5MClcbiAqIHJpc2luZyBhdCBgcGl0Y2hgIChhcyBhIHRhbmdlbnQpIHRvIGEgZmxhdCB0b3AgYXQgeTEuXG4gKlxuICogVGhhaSB0ZW1wbGUgcm9vZnMgbmVzdCwgYW5kIHRoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlIFRSVU5DQVRJT04uIFRocmVlIGZ1bGwgZ2FibGVzIGF0IG9uZVxuICogcGl0Y2ggY2Fubm90IG5lc3QgLS0gdGhlIHdpZGVzdCB0aWVyJ3MgcmlkZ2Ugd291bGQgYmUgdGhlIGhpZ2hlc3QsIHdoaWNoIGlzIHVwc2lkZSBkb3duLiBXaGF0XG4gKiBhY3R1YWxseSBoYXBwZW5zIGlzIHRoYXQgZWFjaCBsb3dlciB0aWVyIGlzIGN1dCBvZmYgYXQgdGhlIGhlaWdodCB3aGVyZSB0aGUgbmV4dCB0aWVyJ3MgZWF2ZXNcbiAqIGJlZ2luLCBhbmQgaXRzIHVwcGVyIHBhcnQgaXMgaGlkZGVuIGJlaGluZCB0aGF0IHRpZXI7IG9ubHkgdGhlIHRvcG1vc3QgdGllciBpcyBhIHJlYWwgZ2FibGUsXG4gKiBjbG9zZWQgYnkgcGFzc2luZyB5MSBhdCB0aGUgYXBleC5cbiAqL1xuZnVuY3Rpb24gdGllclByb2ZpbGUoaGFsZkJhc2U6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBwaXRjaDtcbiAgY29uc3QgaGFsZlRvcCA9IGhhbGZCYXNlIC0gaW5zZXQ7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtaGFsZkJhc2UsIHkwKTtcbiAgc2hhcGUubGluZVRvKGhhbGZCYXNlLCB5MCk7XG4gIGlmIChoYWxmVG9wID4gMC4wMikge1xuICAgIHNoYXBlLmxpbmVUbyhoYWxmVG9wLCB5MSk7XG4gICAgc2hhcGUubGluZVRvKC1oYWxmVG9wLCB5MSk7XG4gIH0gZWxzZSB7XG4gICAgc2hhcGUubGluZVRvKDAsIHkwICsgaGFsZkJhc2UgKiBwaXRjaCk7ICAgLy8gYSByZWFsIHJpZGdlOiB0aGUgdG9wbW9zdCB0aWVyIGNsb3NlcyB0byBhIHBvaW50XG4gIH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIEhJUCBST09GIHdpdGggYSBjb25jYXZlIHNsb3BlIGFuZCB1cHN3ZXB0IGNvcm5lcnMgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZiwgd2hpY2ggbm9uZSBvZiB0aGVcbiAqIG90aGVyIHNoYXBlIGhlbHBlcnMgaGVyZSBjYW4gZXhwcmVzcy5cbiAqXG4gKiBJdCBpcyBnZW5lcmF0ZWQgYXMgYSByaW5nIG9mIHJlY3RhbmdsZXMgY2xpbWJpbmcgZnJvbSB0aGUgZWF2ZXMgdG8gdGhlIHJpZGdlIHJhdGhlciB0aGFuIGFzIGFuXG4gKiBleHRydWRlZCBwcm9maWxlLCBiZWNhdXNlIGEgaGlwIHNsb3BlcyBvbiBhbGwgZm91ciBzaWRlczogYW4gZXh0cnVzaW9uIGdpdmVzIHZlcnRpY2FsIGdhYmxlIGVuZHMsXG4gKiB3aGljaCBpcyBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAqXG4gKiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyBgKDEgLSB0KV5jdXJ2ZUV4cGAsIGFuZCB0aGUgZXhwb25lbnQgbXVzdCBiZSBBQk9WRSBvbmUuIFRoZSBzbG9wZVxuICogYXQgYW55IGhlaWdodCBpcyBkeS9keCwgc28gYSBwbGFuIHRoYXQgc2hyaW5rcyBGQVNUIGZvciBhIGdpdmVuIHJpc2UgaXMgYSBzaGFsbG93IHNsb3BlOiB3aXRoXG4gKiBxID4gMSB0aGUgZGVyaXZhdGl2ZSBxKDEtdCleKHEtMSkgaXMgbGFyZ2UgYXQgdGhlIGVhdmVzIGFuZCBzbWFsbCBhdCB0aGUgcmlkZ2UsIHdoaWNoIGlzIHNoYWxsb3dcbiAqIGVhdmVzIGFuZCBhIHN0ZWVwIHJpZGdlIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YuIEJlbG93IG9uZSBpdCBpcyB0aGUgb3RoZXIgd2F5IHJvdW5kIGFuZCBidWlsZHMgYVxuICogZmxhdC10b3BwZWQgdGVudCwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYXR0ZW1wdCBoZXJlIHJlbmRlcmVkLiBBIGxpbmVhciBzaHJpbmsgZ2l2ZXMgdGhlXG4gKiBzdHJhaWdodCBweXJhbWlkIG9mIGEgaGlwIHJvb2YgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuXG4gKlxuICogYGNvcm5lckxpZnRgIHJhaXNlcyBhbmQgcHVzaGVzIG91dCB0aGUgZm91ciBlYXZlcyBjb3JuZXJzLCB0YXBlcmluZyBhd2F5IGJ5IGEgdGhpcmQgb2YgdGhlIHdheVxuICogdXAuIFRoYXQgdXBzd2VlcCBpcyB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmcgdGhpbmcgYWJvdXQgdGhlIHJvb2YsIGFuZCBpdCBpcyB3aHkgdGhlIHBsYW5cbiAqIGhhbGYtd2lkdGggcGFzc2VkIGluIG11c3QgbGVhdmUgcm9vbTogdGhlIGNvcm5lcnMgZW5kIHVwIGZ1cnRoZXIgb3V0IHRoYW4gdGhlIGVhdmVzIGxpbmUuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGNsb3NlZCBzb2xpZCAtLSBvdXRlciBzdXJmYWNlLCBhIHNvZmZpdCBgZHJvcGAgYmVsb3cgdGhlIGVhdmVzLCBhbmQgYSBmYXNjaWEgYmFuZFxuICogYmV0d2VlbiB0aGVtLiBBbiBvcGVuIHNoZWxsIHdvdWxkIGxldCB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55XG4gKiBsb3cgYW5nbGUuXG4gKi9cbmZ1bmN0aW9uIGhpcFJvb2YoaHg6IG51bWJlciwgaHo6IG51bWJlciwgcmlkZ2VIYWxmWjogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICBjdXJ2ZUV4cDogbnVtYmVyLCBzdGVwczogbnVtYmVyLCBkcm9wOiBudW1iZXIsIGNvcm5lckxpZnQ6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gRUlHSFQgcG9pbnRzIHBlciByaW5nLCBub3QgZm91cjogdGhlIGZvdXIgY29ybmVycyBhbmQgdGhlIGZvdXIgZWRnZSBtaWRwb2ludHMuIFdpdGggZm91ciB0aGVcbiAgLy8gY29ybmVyIGxpZnQgaGFzIG5vd2hlcmUgdG8gZmFsbCBhd2F5IHRvIGFuZCByYWlzZXMgdGhlIEVOVElSRSBlYXZlcyBsaW5lLCB3aGljaCBidWlsdCBhIHNhZGRsZVxuICAvLyBpbnN0ZWFkIG9mIGEgcm9vZi4gVGhlIG1pZHBvaW50cyBhcmUgd2hhdCBob2xkIHRoZSBlYXZlcyBkb3duIGJldHdlZW4gdGhlIGNvcm5lcnMuXG4gIC8vXG4gIC8vIFRoZSBvcmRlciBpcyAoK3gsLXopLCBtaWQsICgteCwteiksIG1pZCwgKC14LCt6KSwgbWlkLCAoK3gsK3opLCBtaWQsIHdoaWNoIGlzIGNvdW50ZXItY2xvY2t3aXNlXG4gIC8vIHNlZW4gZnJvbSBBQk9WRSAtLSB0aGUgd2luZGluZyBhbiB1cHdhcmQtZmFjaW5nIHN1cmZhY2UgbmVlZHMuIFdvdW5kIHRoZSBvdGhlciB3YXkgdGhlIHdob2xlXG4gIC8vIHJvb2YgcmVuZGVycyBpbnNpZGUgb3V0LCB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBibGFjayBtZW1icmFuZSByYXRoZXIgdGhhbiBhIG1pc3Rha2UuXG4gIGNvbnN0IHJpbmcgPSAodDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEgLSB0LCBjdXJ2ZUV4cCk7XG4gICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB0IC8gMC4zNCksIDIpO1xuICAgIGNvbnN0IGxpZnQgPSBjb3JuZXJMaWZ0ICogZywgb3V0ID0gMSArIDAuMDQ1ICogZztcbiAgICBjb25zdCBheCA9IGh4ICogZiAqIG91dCwgYXogPSAocmlkZ2VIYWxmWiArIChoeiAtIHJpZGdlSGFsZlopICogZikgKiBvdXQ7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCBjID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSArIGxpZnQsIHpdO1xuICAgIGNvbnN0IG0gPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5LCB6XTtcbiAgICByZXR1cm4gW2MoYXgsIC1heiksIG0oMCwgLWF6KSwgYygtYXgsIC1heiksIG0oLWF4LCAwKSxcbiAgICAgICAgICAgIGMoLWF4LCBheiksIG0oMCwgYXopLCBjKGF4LCBheiksIG0oYXgsIDApXTtcbiAgfTtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBsZXQgcHJldiA9IHJpbmcoMCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSByaW5nKGkgLyBzdGVwcyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgICBwdXNoKHByZXZba10sIHByZXZbazJdLCBjdXJbazJdKTtcbiAgICAgIHB1c2gocHJldltrXSwgY3VyW2syXSwgY3VyW2tdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICAvLyBGYXNjaWEgYmFuZCBhbmQgc29mZml0LCBzbyB0aGUgcm9vZiBpcyBhIHNvbGlkIHJhdGhlciB0aGFuIGEgc2hlbGwuIEFuIG9wZW4gc2hlbGwgbGV0cyB0aGVcbiAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55IGxvdyBhbmdsZS5cbiAgY29uc3QgZSA9IHJpbmcoMCk7XG4gIGNvbnN0IGxvdyA9IGUubWFwKChwKSA9PiBbcFswXSwgcFsxXSAtIGRyb3AsIHBbMl1dKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgIHB1c2gobG93W2tdLCBlW2tdLCBlW2syXSk7XG4gICAgcHVzaChsb3dba10sIGVbazJdLCBsb3dbazJdKTtcbiAgfVxuICBmb3IgKGxldCBrID0gMTsgayA8IDc7IGsrKykgcHVzaChsb3dbMF0sIGxvd1trICsgMV0sIGxvd1trXSk7ICAgLy8gc29mZml0IGZhbiwgZmFjaW5nIGRvd25cblxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFJJQkJFRCBkb21lIC0tIGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIHdob3NlIHJhZGl1cyBpcyBtb2R1bGF0ZWQgYXJvdW5kIHRoZSBheGlzLCBzbyBpdCByZWFkc1xuICogYXMgdGhlIG1lbG9uLXJpYmJlZCBkb21lIG9mIGEgbW9zcXVlIHJhdGhlciB0aGFuIGEgc21vb3RoIGhlbWlzcGhlcmUuXG4gKlxuICogTGF0aGVHZW9tZXRyeSBjYW5ub3QgZG8gdGhpczogYSBsYXRoZSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdCBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCByaWJzIGFyZVxuICogYSB2YXJpYXRpb24gQVJPVU5EIHRoZSBheGlzLCBub3QgYWxvbmcgaXQuIFNvIHRoZSBzdXJmYWNlIGlzIGdlbmVyYXRlZCBkaXJlY3RseSwgc2FtcGxpbmdcbiAqIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgIHBlciBzZWN0b3IuIFRoZSByaWJzIGFyZSB0aGUgcmVhc29uIHRoZSBkb21lIGlzIHJlY29nbmlzYWJsZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbSAtLSBhIHNtb290aCBncmVlbiBoZW1pc3BoZXJlIHJlYWRzIGFzIGEgd2F0ZXIgdGFuay5cbiAqL1xuZnVuY3Rpb24gcmliYmVkRG9tZShwcm9maWxlOiBudW1iZXJbXVtdLCByaWJzOiBudW1iZXIsIGFtcDogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsbGV5PzogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgY29sOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUaGUgcmlicyBhcmUgbm90IG9ubHkgYSBzaGFwZS4gT24gdGhlIG1vc3F1ZSdzIGRvbWVzIHRoZSBjcmVzdHMgYXJlIHBhbGUgYW5kIHRoZSB2YWxsZXlzIGFyZVxuICAvLyBncmVlbiwgYW5kIHRoYXQgc3RyaXBlIGlzIG1vc3Qgb2Ygd2hhdCB0aGUgZG9tZSByZWFkcyBhcyBhdCBkaXN0YW5jZS4gSXQgaXMgY2FycmllZCBhcyBhXG4gIC8vIHBlci12ZXJ0ZXggTVVMVElQTElFUiBvZmYgdGhlIHNhbWUgY29zaW5lIHRoYXQgc2hhcGVzIHRoZSByaWIgLS0gdHdvIG1lYXN1cmVtZW50cywgdGhlIGNyZXN0XG4gIC8vIGNvbG91ciBvbiB0aGUgbWF0ZXJpYWwgYW5kIHRoZSB2YWxsZXkgYXMgdGhlIHJhdGlvIGJldHdlZW4gdGhlbSAtLSBzbyB0aGUgc3RyaXBpbmcgY29zdHMgYW5cbiAgLy8gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgdGV4dHVyZSBzZXQgb3IgYSBzZWNvbmQgZHJhdyBjYWxsLlxuICBjb25zdCB0aW50ID0gKGo6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsbGV5KSByZXR1cm4gWzEsIDEsIDFdO1xuICAgIC8vIFJhaXNlZCB0byAwLjU1IHJhdGhlciB0aGFuIGxlZnQgbGluZWFyLiBBIGNvc2luZSBzcGVuZHMgaGFsZiBpdHMgYXJlYSBuZWFyIGVhY2ggZXh0cmVtZSwgYW5kXG4gICAgLy8gdGhhdCByZW5kZXJzIGEgZG9tZSB0aGF0IGlzIHBhbGUgb3ZlcmFsbCB3aGVyZSB0aGUgcGxhdGUncyBpcyBncmVlbiBvdmVyYWxsOiB0aGUgY3Jlc3QgaXMgYVxuICAgIC8vIG5hcnJvdyBoaWdobGlnaHQgb24gYSByZWFsIHJpYiwgbm90IGhhbGYgb2YgaXQuIFRoZSBleHBvbmVudCB3aWRlbnMgdGhlIHZhbGxleS5cbiAgICBjb25zdCBmID0gTWF0aC5wb3coKDEgLSBNYXRoLmNvcyhyaWJzICogKChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnKSkpIC8gMiwgMC41NSk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFBPSU5URUQgYXJjaCBwbGF0ZSAtLSB0aGUgdHdvLWNlbnRyZWQgYXJjaCBvZiBhIG1vc3F1ZSwgbm90IHRoZSBoYWxmLXJvdW5kIG9mIGEgUm9tYW4gb25lLlxuICogYGFyY2hlZFBsYXRlYCBhYm92ZSBzd2VlcHMgYSBzaW5nbGUgc2VtaWNpcmNsZSwgd2hpY2ggaXMgdGhlIHdyb25nIGFyY2ggaGVyZSBhbmQgcmVhZHMgYXMgYVxuICogcmFpbHdheSB2aWFkdWN0OyB0aGlzIG9uZSBydW5zIGVhY2ggc2lkZSB1cCB0byBhIHNoYXJlZCBhcGV4IHRocm91Z2ggYSBxdWFkcmF0aWMsIHdoaWNoIGdpdmVzIHRoZVxuICogb2dlZSBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnRlZEFyY2hTaGFwZSh3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBidWlsZCA9ICh0YXJnZXQ6IFRIUkVFLlNoYXBlIHwgVEhSRUUuUGF0aCwgd3c6IG51bWJlciwgc3A6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3dyAvIDI7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2wpO1xuICAgIHRhcmdldC5saW5lVG8oaHcsIHNwKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhodywgc3AgKyByaXNlICogMC43MiwgMCwgc3AgKyByaXNlKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtaHcsIHNwICsgcmlzZSAqIDAuNzIsIC1odywgc3ApO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzbCk7XG4gICAgdGFyZ2V0LmNsb3NlUGF0aCgpO1xuICB9O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBidWlsZChzaGFwZSwgdywgc3ByaW5nLCBhcGV4UmlzZSwgc2lsbCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgYnVpbGQocCwgaG9sZS53LCBob2xlLnNwcmluZywgaG9sZS5hcGV4UmlzZSwgaG9sZS5zaWxsKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFRBUEVSSU5HIFRVQkUgYWxvbmcgK1osIGJ1aWx0IGZyb20gYSBsaXN0IG9mIHN0YXRpb25zLiBFYWNoIHN0YXRpb24gaXNcbiAqIFt6LCBjZW50cmVYLCBjZW50cmVZLCByYWRpdXNYLCByYWRpdXNZXSwgYW5kIGNvbnNlY3V0aXZlIHN0YXRpb25zIGFyZSBqb2luZWQgYnkgYSByaW5nIG9mIGBzZWdgXG4gKiBwb2ludHMsIHNvIHRoZSByYWRpdXMsIHRoZSBjZW50cmUgYW5kIHRoZSBlbGxpcHNlIHJhdGlvIGNhbiBhbGwgdmFyeSBhbG9uZyB0aGUgbGVuZ3RoLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgT1JHQU5JQyBmb3JtIGluIHRoZSB3aG9sZSBraXQsIGFuZCBpdCBleGlzdHMgZm9yIG9uZSBwcm9wOiBhIHJlY2xpbmluZyBmaWd1cmUgaXNcbiAqIGEgbG9uZyBzb2Z0IG1hc3Mgd2hvc2Ugc2VjdGlvbiBjaGFuZ2VzIGF0IGV2ZXJ5IHBvaW50IGFsb25nIGl0IC0tIHNob3VsZGVyIHRvIHdhaXN0IHRvIGhpcCB0b1xuICogY2FsZiAtLSBhbmQgbmVpdGhlciBhIGxhdGhlIG5vciBhIHN0YWNrIG9mIGJveGVzIGNhbiBzYXkgdGhhdC4gQSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIGx5aW5nXG4gKiBib2R5IGlzIG5vdCBhIGxvdy1wb2x5IGJvZHksIGl0IGlzIGEgcGlsZSBvZiBsdWdnYWdlLlxuICpcbiAqIEEgc3RhdGlvbiB3aXRoIGEgcmFkaXVzIGF0IG9yIG5lYXIgemVybyBjbG9zZXMgdGhlIHR1YmUsIHNvIHRoZSBlbmRzIGNhbiBiZSBjYXBwZWQgYnkgdGhlXG4gKiBzdGF0aW9uIGxpc3QgaXRzZWxmIHJhdGhlciB0aGFuIGJ5IGEgc2VwYXJhdGUgZmFuLlxuICovXG5mdW5jdGlvbiB0dWJlQWxvbmcoc3RhdGlvbnM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBJTkRFWEVELCB3aXRoIHNoYXJlZCByaW5nIHZlcnRpY2VzLCBzbyBjb21wdXRlVmVydGV4Tm9ybWFscyBhdmVyYWdlcyBhY3Jvc3MgdGhlIHF1YWRzIGFuZCB0aGVcbiAgLy8gc3VyZmFjZSBzaGFkZXMgc21vb3RoLiBUaGUgZmlyc3QgYnVpbGQgZW1pdHRlZCBsb29zZSB0cmlhbmdsZXMsIGFuZCBhIGZsYXQtc2hhZGVkIHNvZnQgYm9keVxuICAvLyBzaG93cyBldmVyeSBzdGF0aW9uIGFzIGEgY3JlYXNlIC0tIGEgcmVjbGluaW5nIGZpZ3VyZSB0aGF0IGxvb2tlZCBjcnVtcGxlZCByYXRoZXIgdGhhbiBkcmFwZWQuXG4gIC8vXG4gIC8vIEEgc2l4dGggc3RhdGlvbiBlbGVtZW50IGBmbGF0WWAgQ0xBTVBTIHRoZSByaW5nJ3MgdW5kZXJzaWRlIHRvIHRoYXQgaGVpZ2h0LiBBIGJvZHkgcmVzdGluZyBvblxuICAvLyB0aGUgZ3JvdW5kIGlzIG5vdCBhIGZsb2F0aW5nIGVsbGlwc2U6IGl0IHNwcmVhZHMgd2hlcmUgaXQgYmVhcnMsIGFuZCBhbiB1bmNsYW1wZWQgdHViZSByZWFkcyBhc1xuICAvLyBhIHNhdXNhZ2Ugb24gYSB0YWJsZS4gVGhlIGNsYW1wIGlzIGEgc29mdCBvbmUgLS0gdGhlIHJpbmcga2VlcHMgaXRzIHdpZHRoIGFuZCBsb3NlcyBpdHMgZHJvb3AgLS1cbiAgLy8gc28gdGhlIGNyZWFzZSBpdCBsZWF2ZXMgaXMgdGhlIGNvbnRhY3QgZWRnZSByYXRoZXIgdGhhbiBhIGN1dC5cbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbeiwgY3gsIGN5LCByeCwgcnksIGZsYXRZXSA9IHN0YXRpb25zW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IHRoID0gaiAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5zaW4odGgpICogcng7XG4gICAgICBsZXQgeSA9IGN5ICsgTWF0aC5jb3ModGgpICogcnk7XG4gICAgICBpZiAoZmxhdFkgIT09IHVuZGVmaW5lZCAmJiB5IDwgZmxhdFkpIHkgPSBmbGF0WTtcbiAgICAgIHBvcy5wdXNoKHgsIHksIHopO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjID0gKGkgKyAxKSAqIHNlZyArIChqICsgMSkgJSBzZWcsIGQgPSBpICogc2VnICsgKGogKyAxKSAlIHNlZztcbiAgICAgIGlkeC5wdXNoKGEsIGIsIGMsIGEsIGMsIGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgocG9zLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5zZXRJbmRleChpZHgpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2ZWhpY2xlIGhlbHBlcnMgKi9cblxuLyoqIFBhaW50IGEgd2hvbGUgZ2VvbWV0cnkgb25lIHZlcnRleCBjb2xvdXIuIEV2ZXJ5IHZlaGljbGUgbWF0ZXJpYWwgaGVyZSBpcyBXSElURSB3aXRoXG4gKiAgdmVydGV4Q29sb3JzIG9uLCBzbyBhIGNvbG91ciBkaWZmZXJlbmNlIGNvc3RzIGFuIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIG1hdGVyaWFsOiB0aGUgYm9keSdzXG4gKiAgdHdvLXRvbmUsIHRoZSB0eXJlIGFnYWluc3QgaXRzIHJpbSwgYW4gYW1iZXIgaW5kaWNhdG9yIG9uIGEgYmxhY2sgYnVtcGVyIGFsbCByaWRlIG9uZSBzaGFkZXIuXG4gKiAgVmVydGV4IGNvbG91cnMgbXVsdGlwbHkgaW4gTElORUFSIHNwYWNlLCBzbyB0aGUgaGV4IGlzIGNvbnZlcnRlZCB0aHJvdWdoIFRIUkVFLkNvbG9yLCB3aGljaFxuICogIGRvZXMgdGhlIHNSR0ItdG8tbGluZWFyIHN0ZXAuICovXG5mdW5jdGlvbiB0aW50R2VvKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCk7XG4gIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEJveC1wcm9qZWN0IHdvcmxkLW1ldHJlIFVWcyBzbyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIChtdWQsIHJ1c3QsIGNvcnJ1Z2F0aW9uKSByZXBlYXRzXG4gKiAgYXQgYSByZWFsIHNpemUgb24gZXZlcnkgZmFjZS4gYHNjYWxlYCBpcyBtZXRyZXMgcGVyIHRpbGUuIFRoZSBkb21pbmFudCBub3JtYWwgYXhpcyBwaWNrcyB0aGVcbiAqICBwYWlyIG9mIHdvcmxkIGF4ZXMgdXNlZCwgc28gYSByb29mIHJlYWRzICh4LCB6KSBhbmQgYSBzaWRlIHJlYWRzICh6LCB5KS4gKi9cbmZ1bmN0aW9uIHdvcmxkVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG5ybS5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgIGlmIChheCA+PSBheSAmJiBheCA+PSBheikgeyB1ID0gcC5nZXRaKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgZWxzZSBpZiAoYXkgPj0gYXopIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WihpKTsgfVxuICAgIGVsc2UgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKipcbiAqIFNJREUtUFJPRklMRSBFWFRSVVNJT046IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyAodGhlIHZlaGljbGUncyBzaWRlIHNpbGhvdWV0dGUsIHdoZWVsXG4gKiBhcmNoZXMgaW5jbHVkZWQgYXMgbm90Y2hlcykgc3dlcHQgYWNyb3NzIHRoZSBmdWxsIHdpZHRoLCB0aGVuIHNoYXBlZCBwZXIgdmVydGV4OlxuICpcbiAqICAtIGB0dW1ibGVgICBuYXJyb3dzIHRoZSBzZWN0aW9uIGFib3ZlIHRoZSBiZWx0IGxpbmUgLS0geCBpcyBzY2FsZWQgYnkgKDEgLSBrICogdCkgd2hlcmUgdCBydW5zXG4gKiAgICAgICAgICAgICAgMCBhdCBgYmVsdGAgdG8gMSBhdCBgcm9vZmAuIFRoYXQgaXMgdGhlIHR1bWJsZWhvbWUgb2YgYSByZWFsIGNhciBib2R5IGFuZCBpcyB3aGF0XG4gKiAgICAgICAgICAgICAgc3RvcHMgdGhlIGdsYXNzaG91c2UgcmVhZGluZyBhcyBhIGJveCBvbiBhIGJveC5cbiAqICAtIGBwbGFuYCAgICByb3VuZHMgdGhlIHBsYW4gYXQgdGhlIG5vc2UgYW5kIHRhaWw6IGFuIG9wdGlvbmFsIGxpc3Qgb2YgW3osIHhTY2FsZV0gc3RhdGlvbnNcbiAqICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWQgYWxvbmcgeiwgc28gYSBib25uZXQgY2FuIHRhcGVyIHRvIDAuOSBvZiB0aGUgd2lkdGggYXQgdGhlIGJ1bXBlciBsaW5lLlxuICpcbiAqIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgaW4gaXRzIG93biAodSwgdiwgZGVwdGgpIGZyYW1lOyByb3RhdGVZKC1QSS8yKSBtYXBzIGRlcHRoIHRvIC14IGFuZCB1IHRvXG4gKiB3b3JsZCB6LCBhbmQgdGhlIHRyYW5zbGF0ZSByZS1jZW50cmVzIHRoZSBzbGFiIG9uIHggPSAwLiBBbnkgc2hhcGluZyBpcyBhcHBsaWVkIEFGVEVSIHRoYXQsIGFuZFxuICogbm9ybWFscyBhcmUgcmVjb21wdXRlZCBsYXN0IHNvIHRoZSBzaGFkZWQgZmFjZXMgZm9sbG93IHRoZSBzaGFwZWQgc3VyZmFjZS5cbiAqL1xuZnVuY3Rpb24gc2lkZUV4dHJ1ZGUocHJvZmlsZTogbnVtYmVyW11bXSwgd2lkdGg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW4/OiBudW1iZXJbXVtdLCBjdXJ2ZVNlZ21lbnRzPzogbnVtYmVyIH0gPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHByb2ZpbGVbMF1bMF0sIHByb2ZpbGVbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2ZpbGUubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwcm9maWxlW2ldWzBdLCBwcm9maWxlW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB3aWR0aCwgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlU2VnbWVudHM6IG9wdHMuY3VydmVTZWdtZW50cyA/PyA2IH0pO1xuICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUod2lkdGggLyAyLCAwLCAwKTtcbiAgc2hhcGVXaWR0aChnLCBvcHRzKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBUaGUgcGVyLXZlcnRleCB4IHNoYXBpbmcgc2hhcmVkIGJ5IHRoZSBib2R5IGFuZCBpdHMgZ2xhc3MgYmFuZCwgc28gYSBwYW5lIG9mZnNldCA1IG1tIHByb3VkIG9mXG4gKiAgdGhlIGJvZHkgc3RheXMgNSBtbSBwcm91ZCBhZnRlciBib3RoIGFyZSBuYXJyb3dlZCBieSB0aGUgc2FtZSBmdW5jdGlvbi4gKi9cbmZ1bmN0aW9uIHNoYXBlV2lkdGgoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksXG4gICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sIHBsYW4/OiBudW1iZXJbXVtdIH0pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGxldCB4ID0gcC5nZXRYKGkpOyBjb25zdCB5ID0gcC5nZXRZKGkpLCB6ID0gcC5nZXRaKGkpO1xuICAgIGlmIChvcHRzLnR1bWJsZSkge1xuICAgICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh5IC0gb3B0cy50dW1ibGUuYmVsdCkgLyAob3B0cy50dW1ibGUucm9vZiAtIG9wdHMudHVtYmxlLmJlbHQpKSk7XG4gICAgICB4ICo9IDEgLSBvcHRzLnR1bWJsZS5rICogdDtcbiAgICB9XG4gICAgaWYgKG9wdHMucGxhbiAmJiBvcHRzLnBsYW4ubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc3QgPSBvcHRzLnBsYW47XG4gICAgICBsZXQgcyA9IHN0WzBdWzFdO1xuICAgICAgaWYgKHogPD0gc3RbMF1bMF0pIHMgPSBzdFswXVsxXTtcbiAgICAgIGVsc2UgaWYgKHogPj0gc3Rbc3QubGVuZ3RoIC0gMV1bMF0pIHMgPSBzdFtzdC5sZW5ndGggLSAxXVsxXTtcbiAgICAgIGVsc2UgZm9yIChsZXQgayA9IDA7IGsgPCBzdC5sZW5ndGggLSAxOyBrKyspIHtcbiAgICAgICAgaWYgKHogPj0gc3Rba11bMF0gJiYgeiA8PSBzdFtrICsgMV1bMF0pIHtcbiAgICAgICAgICBjb25zdCB1ID0gKHogLSBzdFtrXVswXSkgLyAoc3RbayArIDFdWzBdIC0gc3Rba11bMF0pO1xuICAgICAgICAgIHMgPSBzdFtrXVsxXSArIChzdFtrICsgMV1bMV0gLSBzdFtrXVsxXSkgKiB1OyBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgeCAqPSBzO1xuICAgIH1cbiAgICBwLnNldFgoaSwgeCk7XG4gIH1cbiAgcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbn1cblxuLyoqIEEgc2VtaWNpcmN1bGFyIHdoZWVsLWFyY2ggbm90Y2ggYXMgcHJvZmlsZSBwb2ludHMsIHRvIGJlIHNwbGljZWQgaW50byBhIHNpZGUgcHJvZmlsZSB0aGF0IHJ1bnNcbiAqICBhbG9uZyB0aGUgc2lsbCBmcm9tICt6IHRvIC16IChpLmUuIHogREVDUkVBU0lORykuIGBuYCBzZWdtZW50czsgdGhlIGFyYyBpcyB0aGUgVE9QIGhhbGYuICovXG5mdW5jdGlvbiBhcmNoTm90Y2goemM6IG51bWJlciwgeVNpbGw6IG51bWJlciwgcjogbnVtYmVyLCBuID0gNyk6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJIC8gbjsgICAgICAgICAgICAgICAvLyAwIC4uIFBJLCBmcm9tICt6IHJvdW5kIHRoZSB0b3AgdG8gLXpcbiAgICBwdHMucHVzaChbemMgKyBNYXRoLmNvcyhhKSAqIHIsIHlTaWxsICsgTWF0aC5zaW4oYSkgKiByXSk7XG4gIH1cbiAgcmV0dXJuIHB0cztcbn1cblxuLyoqXG4gKiBBIFdIRUVMOiBvbmUgbGF0aGUgYWJvdXQgdGhlIGF4bGUuIFRoZSBwcm9maWxlIHJ1bnMgZnJvbSB0aGUgaHViIGZhY2Ugb24gb25lIHNpZGUgb3ZlciB0aGUgcmltXG4gKiBsaXAsIHRoZSB0eXJlIHNpZGV3YWxsLCB0aGUgdHJlYWQgYW5kIGJhY2sgZG93biB0aGUgZmFyIHNpZGUsIHNvIHRoZSB3aGVlbCBpcyBhIGNsb3NlZCBzb2xpZCB3aXRoXG4gKiBubyBvcGVuIGVuZCBmb3IgdGhlIHR1cm50YWJsZSBnYXRlIHRvIHJlYWQgdGhyb3VnaC4gUmV2b2x2ZWQgYWJvdXQgWSBhbmQgdGhlbiBsYWlkIG9uIFgsIHNvIHRoZVxuICogYXhsZSBpcyB0aGUgeCBheGlzIGFuZCB0aGUgd2hlZWwgcm9sbHMgYWJvdXQgaXQgLS0gd2hpY2ggaXMgdGhlIGF4aXMgaXRzIHBpdm90IGRlY2xhcmVzLlxuICpcbiAqIFR3byB2ZXJ0ZXggY29sb3VyczogYHJpbUhleGAgb24gdGhlIGh1YiBhbmQgcmltIHBvaW50cywgYHR5cmVIZXhgIG9uIHRoZSBzaWRld2FsbCBhbmQgdHJlYWQuIFRoZVxuICogbGF0aGUgb3JkZXJzIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IgKGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgd2hpY2ggaXMgd2hhdCBsZXRzIGFcbiAqIHBlci1wcm9maWxlLXBvaW50IGNvbG91ciBiZSB3cml0dGVuIHdpdGhvdXQgYSBzZWNvbmQgZ2VvbWV0cnkuXG4gKi9cbmZ1bmN0aW9uIHdoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICB0eXJlSGV4OiBudW1iZXIsIHJpbUhleDogbnVtYmVyLCBkaXNoID0gMC41NSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgaHcgPSBoYWxmVztcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjMwLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjYyLCAtaHcgKiAwLjgwXSwgW3JSaW0sIC1odyAqIDAuODZdLCBbclJpbSwgLWh3ICogMC45OF0sXG4gICAgW3JUeXJlICogMC45MywgLWh3XSwgW3JUeXJlLCAtaHcgKiAwLjcyXSwgW3JUeXJlLCBodyAqIDAuNzJdLCBbclR5cmUgKiAwLjkzLCBod10sXG4gICAgW3JSaW0sIGh3ICogMC45OF0sIFtyUmltLCBodyAqIDAuODZdLCBbclJpbSAqIDAuNjIsIGh3ICogMC44MF0sIFtyUmltICogMC4zMCwgaHcgKiBkaXNoXSwgWzAsIGh3ICogZGlzaF0sXG4gIF07XG4gIGNvbnN0IHJpbVBvaW50ID0gKGo6IG51bWJlcikgPT4gaiA8PSA0IHx8IGogPj0gOTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgY29uc3QgY3QgPSBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCksIGNyID0gbmV3IFRIUkVFLkNvbG9yKHJpbUhleCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYyA9IHJpbVBvaW50KGkgJSBwdHMubGVuZ3RoKSA/IGNyIDogY3Q7XG4gICAgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIGcucm90YXRlWihNYXRoLlBJIC8gMik7ICAgIC8vIGxhdGhlIGF4aXMgWSAtPiBheGxlIG9uIFhcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIFdpcmUtc3Bva2VkIHdoZWVsIGRyZXNzaW5nOiBgbmAgdGhpbiBib3hlcyByYWRpYXRpbmcgZnJvbSB0aGUgaHViLCBsYWNlZCBhbHRlcm5hdGVseSB0byBlYWNoXG4gKiAgc2lkZSBvZiB0aGUgcmltIHNvIHRoZXkgY3Jvc3MgdGhlIHdheSByZWFsIHNwb2tlcyBkby4gTWVyZ2VkIGludG8gdGhlIHdoZWVsIGdlb21ldHJ5IHNvIHRoZVxuICogIHdoZWVsIHN0YXlzIE9ORSBpbnN0YW5jZWQgZ2VvbWV0cnkuICovXG5mdW5jdGlvbiBzcG9rZXMockh1YjogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIG46IG51bWJlciwgaGV4OiBudW1iZXIsIHQgPSAwLjAwNiwgcHJpc20gPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAqIDIgLyBuO1xuICAgIGNvbnN0IHNpZGUgPSAoaSAlIDIgPT09IDAgPyAxIDogLTEpICogaGFsZlcgKiAwLjM1O1xuICAgIGNvbnN0IGxlbiA9IHJSaW0gLSBySHViO1xuICAgIC8vIGBwcmlzbWA6IGFuIG9wZW4gdGhyZWUtc2lkZWQgcHJpc20gYXQgc2l4IHRyaWFuZ2xlcyB3aGVyZSB0aGUgYm94IGNvc3RzIHR3ZWx2ZSAtLSBhIHdpcmVcbiAgICAvLyBzcG9rZSBoYXMgbm8gcmVzb2x2YWJsZSBzZWN0aW9uIGF0IHByb3AgZGlzdGFuY2UsIGFuZCAyOCBvZiB0aGVtIG9uIHRocmVlIHdoZWVscyBpcyB0aGVcbiAgICAvLyBkaWZmZXJlbmNlIGJldHdlZW4gYSBsYXJnZSBwcm9wIGluc2lkZSBpdHMgdHJpYW5nbGUgY2VpbGluZyBhbmQgb25lIG92ZXIgaXRcbiAgICBjb25zdCBnID0gcHJpc20gPyBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSh0ICogMC42MiwgdCAqIDAuNjIsIGxlbiwgMywgMSwgdHJ1ZSkgOiBuZXcgVEhSRUUuQm94R2VvbWV0cnkodCwgbGVuLCB0KTtcbiAgICBnLnRyYW5zbGF0ZSgwLCBySHViICsgbGVuIC8gMiwgMCk7XG4gICAgZy5yb3RhdGVYKE1hdGguYXRhbjIoc2lkZSwgbGVuKSAqIDAuNik7XG4gICAgZy5yb3RhdGVYKDApOyBnLnRyYW5zbGF0ZSgwLCAwLCBzaWRlICogMC41KTtcbiAgICBnLnJvdGF0ZVgoYSk7ICAgICAgICAgICAgLy8gcmFkaWF0ZSBhcm91bmQgdGhlIGF4bGUgKHgpXG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiB0aW50R2VvKG1lcmdlR2VvcyhzZWdzKSwgaGV4KTtcbn1cblxuLyoqIEEgcG9seWxpbmUgVFVCRTogb25lIGN5bGluZGVyIHBlciBzZWdtZW50LCBlYWNoIHJvdGF0ZWQgb250byBpdHMgY2hvcmQsIHdpdGggYSBzbWFsbCBzcGhlcmUtbGVzc1xuICogIG92ZXJsYXAgc28gdGhlIGpvaW50cyBjbG9zZS4gSGFuZGxlYmFycywgY2Fub3B5IHJhaWxzLCByb2xsIGNhZ2VzIGFuZCBmcmFtZSB0dWJlcy4gKi9cbi8qKlxuICogYHJgIG1heSBiZSBhIHNpbmdsZSByYWRpdXMgKGV2ZXJ5IHNlZ21lbnQgdGhlIHNhbWUsIHRoZSBvcmlnaW5hbCBiZWhhdmlvdXIpIG9yIE9ORSBSQURJVVMgUEVSXG4gKiBTVEFUSU9OLCB3aGljaCB0YXBlcnMgdGhlIHR1YmUuIEEgY2FwcGVkIGNvbnN0YW50LXJhZGl1cyB0dWJlIGVuZHMgaW4gYSBmbGF0IGRpc2MsIGFuZCBvbiB0aGVcbiAqIHNwaXJpdCBob3VzZSdzIGVhdmUgaG9ybnMgdGhhdCByZWFkIGFzIGZvdXIgY3V0LW9mZiBwb3N0cyByYXRoZXIgdGhhbiBwb2ludHM7IGEgaG9ybiwgYSBzcGlrZSBvclxuICogYSB3aGlza2VyIG5lZWRzIGl0cyBsYXN0IHN0YXRpb24gYXQgfjAuMjUgb2YgdGhlIGZhc2NpYSByYWRpdXMuIFRoZSBqb2ludCBvdmVybGFwIHRoYXQgaGlkZXMgdGhlXG4gKiBzZWFtIGJldHdlZW4gc2VnbWVudHMgaXMgKHJhICsgcmIpICogMC42LCB3aGljaCBpcyBleGFjdGx5IHRoZSBvbGQgYHIgKiAxLjJgIHdoZW4gdGhleSBhcmUgZXF1YWwsXG4gKiBzbyBhIG51bWJlciBzdGlsbCBwcm9kdWNlcyBieXRlLWlkZW50aWNhbCBnZW9tZXRyeS5cbiAqL1xuZnVuY3Rpb24gdHViZShwdHM6IG51bWJlcltdW10sIHI6IG51bWJlciB8IG51bWJlcltdLCBzZWcgPSA4LCBoZXg/OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHJBdCA9IChpOiBudW1iZXIpID0+ICh0eXBlb2YgciA9PT0gJ251bWJlcicgPyByIDogcltNYXRoLm1pbihpLCByLmxlbmd0aCAtIDEpXSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaV1bMF0sIHB0c1tpXVsxXSwgcHRzW2ldWzJdKTtcbiAgICBjb25zdCBiID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2kgKyAxXVswXSwgcHRzW2kgKyAxXVsxXSwgcHRzW2kgKyAxXVsyXSk7XG4gICAgY29uc3QgZCA9IGIuY2xvbmUoKS5zdWIoYSk7IGNvbnN0IGxlbiA9IGQubGVuZ3RoKCk7XG4gICAgaWYgKGxlbiA8IDFlLTYpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHJhID0gckF0KGkpLCByYiA9IHJBdChpICsgMSk7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJiLCByYSwgbGVuICsgKHJhICsgcmIpICogMC42LCBzZWcsIDEsIGZhbHNlKTtcbiAgICBjb25zdCBxID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGQubm9ybWFsaXplKCkpO1xuICAgIGcuYXBwbHlRdWF0ZXJuaW9uKHEpO1xuICAgIGNvbnN0IG0gPSBhLmNsb25lKCkuYWRkKGIpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG4gICAgZy50cmFuc2xhdGUobS54LCBtLnksIG0ueik7XG4gICAgcGFydHMucHVzaChnKTtcbiAgfVxuICBjb25zdCBvdXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBvdXQgOiB0aW50R2VvKG91dCwgaGV4KTtcbn1cblxuLyoqXG4gKiBBIEZMQVQgU1RSQVAgc3dlcHQgYWxvbmcgYSBwb2x5bGluZTogYSBjaGFpbiBvZiBib3hlcywgZWFjaCBvcmllbnRlZCBzbyBpdHMgTEVOR1RIIHJ1bnMgYWxvbmcgdGhlXG4gKiBzZWdtZW50LCBpdHMgVEhJQ0tORVNTIGFsb25nIHRoZSBvdXR3YXJkIG5vcm1hbCBmcm9tIGBhYm91dGAsIGFuZCBpdHMgV0lEVEggdGFuZ2VudCB0byB0aGF0XG4gKiBzdXJmYWNlLiBUaGlzIGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYSBndWFyZCBhbmQgYSB3aXJlOiBhIGJ1bGtoZWFkIGxhbXAncyBjYWdlIGlzIHByZXNzZWRcbiAqIGZsYXQgYmFyLCBhbmQgYSByb3VuZCB0dWJlIG9mIHRoZSBzYW1lIG1lYXN1cmVkIHdpZHRoIHNoYWRlcyB0byBhIG5hcnJvdyBoaWdobGlnaHQgYW5kIHJlYWRzIGFzXG4gKiB3aXJlIC0tIHdoaWNoIGlzIHRoZSB0aGluZyB0aGlzIGtpdCdzIGFzc2V0IG5vdGVzIHJ1bGUgb3V0LiBJdCBpcyBhbHNvIENIRUFQRVIgdGhhbiBgdHViZWA6IGEgYm94XG4gKiBpcyAxMiB0cmlhbmdsZXMgYWdhaW5zdCBhIGNhcHBlZCA1LXNpZGVkIGN5bGluZGVyJ3MgMjAuXG4gKi9cbmZ1bmN0aW9uIHN0cmFwKHB0czogbnVtYmVyW11bXSwgdzogbnVtYmVyLCB0OiBudW1iZXIsIGFib3V0OiBudW1iZXJbXSwgaGV4PzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBjID0gbmV3IFRIUkVFLlZlY3RvcjMoYWJvdXRbMF0sIGFib3V0WzFdLCBhYm91dFsyXSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaV1bMF0sIHB0c1tpXVsxXSwgcHRzW2ldWzJdKTtcbiAgICBjb25zdCBiID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2kgKyAxXVswXSwgcHRzW2kgKyAxXVsxXSwgcHRzW2kgKyAxXVsyXSk7XG4gICAgY29uc3QgZGlyID0gYi5jbG9uZSgpLnN1YihhKTsgY29uc3QgbGVuID0gZGlyLmxlbmd0aCgpO1xuICAgIGlmIChsZW4gPCAxZS02KSBjb250aW51ZTtcbiAgICBkaXIubm9ybWFsaXplKCk7XG4gICAgY29uc3QgbWlkID0gYS5jbG9uZSgpLmFkZChiKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuICAgIC8vIE91dHdhcmQgbm9ybWFsIGF0IHRoZSBtaWRwb2ludCwgcmUtb3J0aG9nb25hbGlzZWQgYWdhaW5zdCB0aGUgcnVuIHNvIHRoZSBiYXNpcyBzdGF5cyBzcXVhcmVcbiAgICAvLyB3aGVyZSB0aGUgc3RyYXAgY2xpbWJzIHN0ZWVwbHkgYW5kIHRoZSB0d28gd291bGQgb3RoZXJ3aXNlIGJlIG5lYXJseSBwYXJhbGxlbC5cbiAgICBsZXQgbnJtID0gbWlkLmNsb25lKCkuc3ViKGMpO1xuICAgIG5ybS5zdWIoZGlyLmNsb25lKCkubXVsdGlwbHlTY2FsYXIobnJtLmRvdChkaXIpKSk7XG4gICAgaWYgKG5ybS5sZW5ndGhTcSgpIDwgMWUtMTIpIG5ybSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpLnN1YihkaXIuY2xvbmUoKS5tdWx0aXBseVNjYWxhcihkaXIueikpO1xuICAgIG5ybS5ub3JtYWxpemUoKTtcbiAgICAvLyBkaXIgeCBucm0sIE5PVCBucm0geCBkaXIuIFRoZSBiYXNpcyBjb2x1bW5zIGFyZSAoc2lkZSwgZGlyLCBucm0pIGFnYWluc3QgYSBib3gncyAodywgbGVuLCB0KSxcbiAgICAvLyBzbyBhIHJpZ2h0LWhhbmRlZCBiYXNpcyBuZWVkcyBzaWRlIHggZGlyID0gbnJtOyBucm0geCBkaXIgZ2l2ZXMgLW5ybSwgYSBtaXJyb3JlZCBiYXNpcyB3aXRoIGFcbiAgICAvLyBuZWdhdGl2ZSBkZXRlcm1pbmFudCwgYW5kIGV2ZXJ5IHN0cmFwIHJlbmRlcnMgaW5zaWRlIG91dCAtLSB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBkYXJrXG4gICAgLy8gc2xpdmVyIHJhdGhlciB0aGFuIGFuIG9idmlvdXNseSBmbGlwcGVkIGZhY2UsIHNvIGl0IHJlYWRzIGFzIGEgZ2VvbWV0cnkgYnVnLCBub3QgYSB3aW5kaW5nIG9uZS5cbiAgICBjb25zdCBzaWRlID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jcm9zc1ZlY3RvcnMoZGlyLCBucm0pLm5vcm1hbGl6ZSgpO1xuICAgIC8vIE92ZXJsYXAgdGhlIGpvaW50cyBieSB0aGUgdGhpY2tuZXNzIHNvIGNvbnNlY3V0aXZlIGJveGVzIGNsb3NlIHRoZSBtaXRyZSByYXRoZXIgdGhhblxuICAgIC8vIGxlYXZpbmcgYSB3ZWRnZSBvZiBkYXlsaWdodCBhdCBldmVyeSBzdGF0aW9uLlxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgbGVuICsgdCwgdCk7XG4gICAgZy5hcHBseU1hdHJpeDQobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlQmFzaXMoc2lkZSwgZGlyLCBucm0pKTtcbiAgICBnLnRyYW5zbGF0ZShtaWQueCwgbWlkLnksIG1pZC56KTtcbiAgICBwYXJ0cy5wdXNoKGcpO1xuICB9XG4gIGNvbnN0IG91dCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IG91dCA6IHRpbnRHZW8ob3V0LCBoZXgpO1xufVxuXG4vKiogQSByb3RhdGVkIGJveDogW2N4LCBjeSwgY3osIHcsIGgsIGQsIHJ4LCByeSwgcnpdIHdpdGggdGhlIHJvdGF0aW9ucyBhcHBsaWVkIGluIHgsIHksIHogb3JkZXJcbiAqICBhYm91dCB0aGUgYm94J3Mgb3duIGNlbnRyZS4gQSBib25uZXQgbGlwLCBhIHJha2VkIG1pcnJvciBzdGVtLCBhIGNhbm9weSBzdGF5LiAqL1xuZnVuY3Rpb24gcmJveChiOiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShiWzNdLCBiWzRdLCBiWzVdKTtcbiAgaWYgKGJbNl0pIGcucm90YXRlWChiWzZdKTsgaWYgKGJbN10pIGcucm90YXRlWShiWzddKTsgaWYgKGJbOF0pIGcucm90YXRlWihiWzhdKTtcbiAgZy50cmFuc2xhdGUoYlswXSwgYlsxXSwgYlsyXSk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBiYXRjaCBvZiBib3hlcywgZWFjaCB0aW50ZWQsIG1lcmdlZDogW1toZXgsIGN4LCBjeSwgY3osIHcsIGgsIGQsIHJ4Pywgcnk/LCByej9dLCAuLi5dLiBUaGVcbiAqICB0cmltIGNvbXBvbmVudCBvZiBldmVyeSB2ZWhpY2xlIGlzIG9uZSBvZiB0aGVzZSAtLSBidW1wZXJzLCBncmlsbGUsIGxhbXBzLCBtaXJyb3JzLCBoYW5kbGVzLFxuICogIHN0ZXBzLCBhcmNoIGZsYXJlcyAtLSBzbyBmb3J0eSBwYXJ0cyByaWRlIG9uZSBzdWJtaXNzaW9uLiAqL1xuZnVuY3Rpb24gdGludGVkQm94ZXMobGlzdDogbnVtYmVyW11bXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gdGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSkpO1xufVxuXG4vKiogTWlycm9yIGEgYm94IGxpc3QgYWNyb3NzIHggPSAwIChsZWZ0L3JpZ2h0IHBhaXJzKS4gUm90YXRpb25zIGFib3V0IHkgYW5kIHogZmxpcCBzaWduLiAqL1xuZnVuY3Rpb24gbWlycm9yWChsaXN0OiBudW1iZXJbXVtdKTogbnVtYmVyW11bXSB7XG4gIHJldHVybiBsaXN0LmZsYXRNYXAoKGIpID0+IFtiLCBbYlswXSwgLWJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0sIGJbNl0sIGJbN10gPz8gMCwgLShiWzhdID8/IDApLCAtKGJbOV0gPz8gMCldXSk7XG59XG5cbi8qKiBBIHNlYW1sZXNzIENhbnZhcyAyRCB0aWxlOiBgZHJhdyhjdHgsIHNpemUpYCBwYWludHMgaXQsIGFuZCB0aGUgcmVzdWx0IGlzIGEgcmVwZWF0aW5nIHRleHR1cmVcbiAqICBpbiBzUkdCLiBVc2VkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbiwgc28gdGhlIHRleHR1cmVsZXNzIGRlY2xhcmF0aW9uIHN0YW5kcyBhbmQgbm9cbiAqICBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLiBSZXR1cm5zIG51bGwgd2hlcmUgdGhlcmUgaXMgbm8gRE9NICh0aGUgaGVhZGxlc3MgaGFybmVzc1xuICogIGhhcyBvbmU7IGEgbm9kZS1zaWRlIHByb2JlIGRvZXMgbm90KSwgYW5kIGV2ZXJ5IGNhbGxlciB0b2xlcmF0ZXMgbnVsbC4gKi9cbmZ1bmN0aW9uIGNhbnZhc1RpbGUoc2l6ZTogbnVtYmVyLCBkcmF3OiAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHM6IG51bWJlcikgPT4gdm9pZCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsO1xuICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOyBjdi53aWR0aCA9IHNpemU7IGN2LmhlaWdodCA9IHNpemU7XG4gIC8vIHdpbGxSZWFkRnJlcXVlbnRseSBrZWVwcyB0aGUgdGlsZSBvbiB0aGUgQ1BVIHJhc3RlciBwYXRoOiBhIEdQVS1iYWNrZWQgY2FudmFzIGNvc3RzIHNlY29uZHMgcGVyXG4gIC8vIHRob3VzYW5kIHBhdGggZmlsbHMgd2hlcmUgdGhlIHNvZnR3YXJlIHBhdGggdGFrZXMgdGVucyBvZiBtaWxsaXNlY29uZHMuXG4gIGNvbnN0IGN0eCA9IGN2LmdldENvbnRleHQoJzJkJywgeyB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUgfSkgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDsgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuICBkcmF3KGN0eCwgc2l6ZSk7XG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGN2KTtcbiAgdGV4LndyYXBTID0gdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gIHRleC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIHJldHVybiB0ZXg7XG59XG5cbi8qKiBEZXRlcm1pbmlzdGljIHBzZXVkby1yYW5kb20gZm9yIGNhbnZhcyBkcmVzc2luZyAtLSBhc3NpZ25lZCBieSBpbmRleCwgbmV2ZXIgTWF0aC5yYW5kb20sIHNvIHRoZVxuICogIG1vZGVsIGlzIGJ5dGUtaWRlbnRpY2FsIG9uIGV2ZXJ5IGJ1aWxkLiAqL1xuZnVuY3Rpb24gbGNnKHNlZWQ6IG51bWJlcik6ICgpID0+IG51bWJlciB7XG4gIGxldCBzID0gc2VlZCA+Pj4gMDtcbiAgcmV0dXJuICgpID0+IHsgcyA9IChzICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwOyByZXR1cm4gcyAvIDQyOTQ5NjcyOTY7IH07XG59XG5cbi8qKlxuICogTVVEIC8gUk9BRC1HUklNRSB0aWxlLCBSRS1CQVNFRC4gVGhhaSByb2FkIG11ZCBpcyB0YW4gYW5kIEJSSUdIVEVSIHRoYW4gbW9zdCBwYWludCwgYW5kIGFcbiAqIG11bHRpcGxpZXIgY2Fubm90IGJyaWdodGVuOiBzbyB0aGUgcGFpbnQgbWF0ZXJpYWwgY2FycmllcyB0aGUgTVVEIEVOVkVMT1BFIGNvbG91ciAobWVhc3VyZWQgb25cbiAqIHRoZSBtdWRkeSBzaWxsKSwgdGhpcyB0aWxlIGNhcnJpZXMgdGhlIGNsZWFuIHBhaW50IGFzIGEgUkFUSU8gb2YgdGhhdCBlbnZlbG9wZSBvdmVyIG1vc3Qgb2YgaXRzXG4gKiBhcmVhIChgYmFzZWApLCBhbmQgdGhlIG11ZCBpcyBwYWludGVkIGFzIHdoaXRlIC0tIGkuZS4gdGhlIGVudmVsb3BlIGl0c2VsZiAtLSBpbiBhIHdhc2ggcmlzaW5nXG4gKiBmcm9tIHRoZSBib3R0b20gdG8gYGNvdmVyYWdlYCBvZiB0aGUgdGlsZSBoZWlnaHQgcGx1cyBzcGxhdHRlciBhYm92ZSBpdC4gQm91bmQgd2l0aCBoZWlnaHQgVVZzXG4gKiBzbyB2ID0gMCBpcyB0aGUgZ3JvdW5kIGFuZCB0aGUgd2FzaCBzaXRzIG9uIHRoZSBzaWxscyBhbmQgYXJjaGVzLlxuICovXG5mdW5jdGlvbiBtdWRUaWxlKHNpemU6IG51bWJlciwgYmFzZTogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMzKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHRvSGV4ID0gKHY6IG51bWJlcltdKSA9PiAnIycgKyB2Lm1hcCgoYykgPT4gTWF0aC5yb3VuZChNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBjKSkgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdG9IZXgoYmFzZSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LDI1NSwyNTUsMC44OCknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjQ1LCAncmdiYSgyNTUsMjU1LDI1NSwwLjQ1KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTUsMjU1LDApJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDkwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjM1O1xuICAgICAgY29uc3QgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA1O1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMjg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsMjUwLDI0MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1MCwyNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYSBsaXR0bGUgZ3JhaW4gc28gdGhlIGNsZWFuIHBhaW50IGlzIG5vdCBhIGZsYXQgZmlsbFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTIwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjb25zdCB2ID0gcm5kKCkgPCAwLjUgPyAwIDogMjU1O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMDM1KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIERVU1QgdGlsZSBmb3IgcGFpbnQgdGhhdCBpcyBCUklHSFRFUiB0aGFuIGl0cyBkaXJ0IChhIHdoaXRlIHZhbik6IGEgcGxhaW4gbXVsdGlwbGllciwgd2hpdGVcbiAqICBiYXNlIGFuZCBhIGdyZXktYnJvd24gd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsIHBsdXMgc29mdCBibG9icy4gKi9cbmZ1bmN0aW9uIGR1c3RUaWxlKHNpemU6IG51bWJlciwgZHVzdDogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBjID0gZHVzdC5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogTWF0aC5taW4oMSwgdikpKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC45KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC40KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjQsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNSwgYSA9IDAuMDggKyBybmQoKSAqIDAuMjU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogQ09SUlVHQVRFRCBTSEVFVCB0aWxlOiB2ZXJ0aWNhbCByaWRnZXMgYXMgYSBzaW5lLXNoYWRlZCBzdHJpcGUgZmllbGQsIHVzZWQgYXMgbWFwIEFORCBidW1wTWFwIG9uXG4gKiAgYSBzb25ndGhhZXcgcm9vZiBzbyB0aGUgcmlkZ2VzIGNhdGNoIGxpZ2h0LiBgcGl0Y2hgIHJpZGdlcyBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIGNvcnJ1Z2F0aW9uVGlsZShzaXplOiBudW1iZXIsIHBpdGNoOiBudW1iZXIsIGxvdzogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgIGNvbnN0IHQgPSAoTWF0aC5jb3MoeCAvIHMgKiBNYXRoLlBJICogMiAqIHBpdGNoKSArIDEpIC8gMjsgICAvLyAxIGF0IGNyZXN0LCAwIGluIHRyb3VnaFxuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogKGxvdyArICgxIC0gbG93KSAqIHQpKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gNCArIHJuZCgpICogcyAqIDAuMDg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjE4O1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDEyMCw5MCw2MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTIwLDkwLDYwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBQTEFOSyB0aWxlOiBib2FyZHMgcnVubmluZyBhbG9uZyB1IHdpdGggZGFyayBqb2ludHMgYW5kIGdyYWluIHN0cmVha3MsIGEgbXVsdGlwbGllciBvbiBhXG4gKiAgbWVhc3VyZWQgdGltYmVyIGFsYmVkby4gYGJvYXJkc2AgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBwbGFua1RpbGUoc2l6ZTogbnVtYmVyLCBib2FyZHM6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBiaCA9IHMgLyBib2FyZHM7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBib2FyZHM7IGIrKykge1xuICAgICAgY29uc3QgdG9uZSA9IDAuODIgKyBybmQoKSAqIDAuMTg7XG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0b25lKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIGJoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCwzMCwyMCwwLjU1KSc7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIE1hdGgubWF4KDEsIHMgKiAwLjAwNikpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAxNDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHkgPSBiICogYmggKyBybmQoKSAqIGJoLCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC42KSwgeCA9IHJuZCgpICogcztcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoNjAsNDUsMzAsJHswLjA1ICsgcm5kKCkgKiAwLjEyfSlgOyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggLSBzLCB5KTsgY3R4LmxpbmVUbyh4IC0gcyArIGxlbiwgeSk7IGN0eC5tb3ZlVG8oeCwgeSk7IGN0eC5saW5lVG8oeCArIGxlbiwgeSk7IGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogUlVTVCB0aWxlOiBhIG11bHRpcGxpZXIgb2YgYmxvdGNoZWQgb3JhbmdlLWJyb3duIG92ZXIgYSBiYXNlLCBkYXJrIGNvcmVzIGxpZnRlZCBzbyBub3RoaW5nIGxhbmRzXG4gKiAgb24gdGhlIGx1bWEtNTggaG9sZSBnYXRlLiAqL1xuZnVuY3Rpb24gcnVzdFRpbGUoc2l6ZTogbnVtYmVyLCByYXRpbzogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgZGVuc2l0eSA9IDkwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbnNpdHk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA5O1xuICAgICAgY29uc3QgYSA9IDAuMTUgKyBybmQoKSAqIDAuNDU7XG4gICAgICBjb25zdCBjID0gcmF0aW8ubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIHYpKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogSGVpZ2h0LWtleWVkIFVWczogdiBpcyB3b3JsZCBIRUlHSFQgb3ZlciBgc2NhbGVgIG1ldHJlcywgdSBydW5zIGFsb25nIHRoZSBkb21pbmFudCBob3Jpem9udGFsXG4gKiAgYXhpcy4gQSBtdWQgdGlsZSBib3VuZCB0aGlzIHdheSBkYXJrZW5zIHRoZSBzaWxscyBhbmQgc3RheXMgY2xlYW4gb24gdGhlIHJvb2YgLS0gYSBwbGFpbiBib3hcbiAqICBwcm9qZWN0aW9uIHdvdWxkIHJlcGVhdCB0aGUgdGlsZSdzIGRpcnR5IGJhbmQgYWNyb3NzIHRoZSByb29mIGFzIHN0cmlwZXMuICovXG4vKipcbiAqIFNIT1JUIEZVUjogYSBzZWFtbGVzcyB0aWxlIG9mIGRlbnNlLCBzaG9ydCwgZGlyZWN0aW9uYWwgaGFpciBzdHJva2VzIG92ZXIgYSBjbG91ZHkgdG9uZSBkcmlmdCwgYXMgYVxuICogbXVsdGlwbHkgbWFwIChhbmQgYnVtcCkgb24gYSB3aGl0ZSB2ZXJ0ZXgtY29sb3VyZWQgY29hdC4gVGhlIHN0cm9rZXMgcnVuIGFsb25nIHYgd2l0aCBhIGppdHRlcmVkXG4gKiBsZWFuIGFuZCBhIG5hcnJvdyB0b25lIHNwcmVhZCAtLSBhIHdpZGUgc3ByZWFkIHJlYWRzIGFzIHNjYWxlcywgYSBwZXJmZWN0IGxheSByZWFkcyBhcyBjb21iZWRcbiAqIHBsYXN0aWMuIGBwYXRjaGVzYCBhZGRzIGEgZmV3IHNvZnQgcGluay1ncmV5IGJhcmUgcGF0Y2hlcywgdGhlIG1hbmdlIG1hcmtzIG9mIGEgc3RyZWV0IGRvZy5cbiAqL1xuZnVuY3Rpb24gZnVyVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCB0b25lID0gby50b25lID8/IFswLjcyLCAwLjY2LCAwLjU4XSwgbSA9IHMgKiAwLjA2O1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBjbG91ZHkgZHJpZnQgdW5kZXJuZWF0aCBzbyB0aGUgY29hdCBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmNsb3VkcyA/PyAyNik7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wOCArIHJuZCgpICogMC4xOCksIGEgPSAwLjA0ICsgcm5kKCkgKiAwLjEwO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IodG9uZSl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih0b25lKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGJhcmUgcGF0Y2hlczogc29mdCwgc3BhcnNlLCB3YXJtIGdyZXktcGlua1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucGF0Y2hlcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA0ICsgcm5kKCkgKiAwLjA1KSwgcGMgPSBvLnBhdGNoVG9uZSA/PyBbMC43MiwgMC41NiwgMC41Ml07XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihwYyl9LDAuNTUpYCk7IGcyLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKCR7cmdiKHBjKX0sMC4zKWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocGMpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciAqIDEuMywgciwgcm5kKCkgKiBNYXRoLlBJLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gaGFpciBzdHJva2VzOiBkYXJrIGFuZCBsaWdodCwgc2hvcnQsIGxlYW5pbmcgd2l0aGluICstMjIgZGVncmVlcyBvZiB2XG4gICAgY29uc3Qgc3Ryb2tlcyA9IG8uc3Ryb2tlcyA/PyA1MDAwLCBsZW4gPSBzICogKG8ubGVuZ3RoID8/IDAuMDIyKTtcbiAgICBjb25zdCBkcmF3U3Ryb2tlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCB3OiBudW1iZXIpID0+IHtcbiAgICAgIGN0eC5saW5lV2lkdGggPSB3OyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSk7IGN0eC5saW5lVG8oeCArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7XG4gICAgICBpZiAoeCA8IG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBzLCB5KTsgY3R4LmxpbmVUbyh4ICsgcyArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh4ID4gcyAtIG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggLSBzLCB5KTsgY3R4LmxpbmVUbyh4IC0gcyArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh5IDwgbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSArIHMpOyBjdHgubGluZVRvKHggKyBkeCwgeSArIHMgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHkgPiBzIC0gbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSAtIHMpOyBjdHgubGluZVRvKHggKyBkeCwgeSAtIHMgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgIH07XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Ryb2tlczsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB0aCA9IChybmQoKSAtIDAuNSkgKiAwLjc4LCBsID0gbGVuICogKDAuNiArIHJuZCgpICogMC44KTtcbiAgICAgIGNvbnN0IGxpZ2h0ID0gcm5kKCkgPCAwLjQyO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IGxpZ2h0ID8gJ3NjcmVlbicgOiAnbXVsdGlwbHknO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gbGlnaHQgPyBgcmdiYSgyNTUsMjUwLDI0MCwkezAuMDUgKyBybmQoKSAqIDAuMTB9KWAgOiBgcmdiYSgke3JnYih0b25lKX0sJHswLjA2ICsgcm5kKCkgKiAwLjE0fSlgO1xuICAgICAgZHJhd1N0cm9rZSh4LCB5LCBNYXRoLnNpbih0aCkgKiBsLCBNYXRoLmNvcyh0aCkgKiBsLCAwLjYgKyBybmQoKSAqIDEuMik7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0VVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBjb25zdCB1ID0gYXggPj0gYXogPyBwLmdldFooaSkgOiBwLmdldFgoaSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gcC5nZXRZKGkpIC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBPZmZzZXQgYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzIG91dHdhcmQgYnkgYGRgIGFsb25nIHRoZSBhdmVyYWdlZCBlZGdlIG5vcm1hbHMuIFVzZWRcbiAqICB0byBzdGFuZCB0aGUgZ2xhc3MgYmFuZCBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgYm9keSdzIHJha2VkIHdpbmRzY3JlZW4gYW5kIHJlYXIgZ2xhc3NcbiAqICBmYWNlcywgc28gdGhlIHBhbmUgYW5kIHRoZSBib2R5IG5ldmVyIHNoYXJlIGEgcGxhbmUuIFdpbmRpbmc6IGNvdW50ZXItY2xvY2t3aXNlIGluICh6LCB5KS4gKi9cbmZ1bmN0aW9uIG9mZnNldFBvbHkocHRzOiBudW1iZXJbXVtdLCBkOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgbiA9IHB0cy5sZW5ndGgsIG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBwdHNbKGkgKyBuIC0gMSkgJSBuXSwgYiA9IHB0c1tpXSwgYyA9IHB0c1soaSArIDEpICUgbl07XG4gICAgY29uc3QgZTEgPSBbYlswXSAtIGFbMF0sIGJbMV0gLSBhWzFdXSwgZTIgPSBbY1swXSAtIGJbMF0sIGNbMV0gLSBiWzFdXTtcbiAgICBjb25zdCBsMSA9IE1hdGguaHlwb3QoZTFbMF0sIGUxWzFdKSB8fCAxLCBsMiA9IE1hdGguaHlwb3QoZTJbMF0sIGUyWzFdKSB8fCAxO1xuICAgIC8vIG91dHdhcmQgbm9ybWFsIG9mIGEgQ0NXIGVkZ2UgKGR6LCBkeSkgaXMgKGR5LCAtZHopXG4gICAgY29uc3QgbjEgPSBbZTFbMV0gLyBsMSwgLWUxWzBdIC8gbDFdLCBuMiA9IFtlMlsxXSAvIGwyLCAtZTJbMF0gLyBsMl07XG4gICAgbGV0IG54ID0gbjFbMF0gKyBuMlswXSwgbnkgPSBuMVsxXSArIG4yWzFdO1xuICAgIGNvbnN0IG5sID0gTWF0aC5oeXBvdChueCwgbnkpIHx8IDE7IG54IC89IG5sOyBueSAvPSBubDtcbiAgICBjb25zdCBjb3NIYWxmID0gTWF0aC5tYXgoMC4zNSwgbnggKiBuMVswXSArIG55ICogbjFbMV0pO1xuICAgIG91dC5wdXNoKFtiWzBdICsgbnggKiBkIC8gY29zSGFsZiwgYlsxXSArIG55ICogZCAvIGNvc0hhbGZdKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogQSB3aGVlbC1hcmNoIEZMQVJFOiBhIGhhbGYtYW5udWx1cyBpbiB0aGUgKHosIHkpIHBsYW5lLCBleHRydWRlZCBhY3Jvc3MgeDAuLngxIG9uIGJvdGggc2lkZXNcbiAqICBhbmQgdGludGVkLiBTdGFuZHMgcHJvdWQgb2YgdGhlIGJvZHkgc2lkZSBhbmQgaGlkZXMgdGhlIGFyY2gncyBjdXQgZWRnZS4gKi9cbmZ1bmN0aW9uIGZsYXJlKHpjOiBudW1iZXIsIHljOiBudW1iZXIsIHJJbjogbnVtYmVyLCByT3V0OiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGhleDogbnVtYmVyLCBuID0gOSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBjb25zdCB6ID0gemMgKyBNYXRoLmNvcyhhKSAqIHJPdXQsIHkgPSB5YyArIE1hdGguc2luKGEpICogck91dDsgaWYgKGkgPT09IDApIHNoYXBlLm1vdmVUbyh6LCB5KTsgZWxzZSBzaGFwZS5saW5lVG8oeiwgeSk7IH1cbiAgZm9yIChsZXQgaSA9IG47IGkgPj0gMDsgaS0tKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBzaGFwZS5saW5lVG8oemMgKyBNYXRoLmNvcyhhKSAqIHJJbiwgeWMgKyBNYXRoLnNpbihhKSAqIHJJbik7IH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IG1rID0gKHN4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeDEgLSB4MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgZy50cmFuc2xhdGUoeDEsIDAsIDApOyBpZiAoc3ggPCAwKSBnLnNjYWxlKC0xLCAxLCAxKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiB0aW50R2VvKGcsIGhleCk7XG4gIH07XG4gIGNvbnN0IGwgPSBtaygtMSksIHIgPSBtaygxKTtcbiAgLy8gYSBuZWdhdGl2ZSBzY2FsZSBmbGlwcyB0aGUgd2luZGluZzsgcmVzdG9yZSBpdCBzbyB0aGUgZmxhcmUgaXMgbm90IGluc2lkZSBvdXRcbiAgY29uc3QgaWR4ID0gbC5nZXRJbmRleCgpOyBpZiAoaWR4KSB7IGNvbnN0IGEgPSBpZHguYXJyYXkgYXMgYW55OyBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpICs9IDMpIHsgY29uc3QgdCA9IGFbaSArIDFdOyBhW2kgKyAxXSA9IGFbaSArIDJdOyBhW2kgKyAyXSA9IHQ7IH0gaWR4Lm5lZWRzVXBkYXRlID0gdHJ1ZTsgfVxuICBlbHNlIHsgY29uc3QgcCA9IGwuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpOyBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkgKz0gMykgeyBjb25zdCB4MV8gPSBwLmdldFgoaSArIDEpLCB5MV8gPSBwLmdldFkoaSArIDEpLCB6MV8gPSBwLmdldFooaSArIDEpOyBwLnNldFhZWihpICsgMSwgcC5nZXRYKGkgKyAyKSwgcC5nZXRZKGkgKyAyKSwgcC5nZXRaKGkgKyAyKSk7IHAuc2V0WFlaKGkgKyAyLCB4MV8sIHkxXywgejFfKTsgfSB9XG4gIGwuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhbbCwgcl0pO1xufVxuXG4vKiogQmluZCBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHRvIGEgbWF0ZXJpYWwgYXMgbWFwIChhbmQgYnVtcCksIGxlYXZpbmcgdGhlIHRleHR1cmVsZXNzXG4gKiAgZGVjbGFyYXRpb24gaW50YWN0OiBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLCB0aGUgbWVhc3VyZWQgY29sb3VyIHN0YXlzIHRoZVxuICogIG11bHRpcGxpY2FuZCwgYW5kIHRoZSB3aG9sZSB0aGluZyBjb3N0cyBvbmUgY2FudmFzLiAqL1xuZnVuY3Rpb24gYmluZFRpbGUobWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCwgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCwgYnVtcCA9IDApOiB2b2lkIHtcbiAgaWYgKCF0ZXgpIHJldHVybjtcbiAgbWF0Lm1hcCA9IHRleDtcbiAgaWYgKGJ1bXAgPiAwKSB7IG1hdC5idW1wTWFwID0gdGV4OyBtYXQuYnVtcFNjYWxlID0gYnVtcDsgfVxuICBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG5cbi8qKlxuICogQSBEUkFQRUQgU0hFRVQ6IGBoZWlnaHRzW2pdW2ldYCBpcyB0aGUgdG9wIHN1cmZhY2UgYXQgeCA9IHgwLi54MSAoaSBvdmVyIG54KSBhbmQgeiA9IHowLi56MSAoaiBvdmVyXG4gKiBueik7IHRoZSBzaGVldCBpcyBgdGAgdGhpY2suIFRvcCBhbmQgdW5kZXJzaWRlIGFyZSBzbW9vdGgtc2hhZGVkIGdyaWRzLCB0aGUgZm91ciBlZGdlcyBhcmUgZmxhdFxuICogc3RyaXBzIHdvdW5kIG91dHdhcmQuIEEgdGFycCBjYW5vcHkgaXMgYSByaWRnZSBsaW5lIG1pbnVzIHRoZSBzYWcgYmV0d2VlbiBpdHMgcG9sZXMgbWludXMgdGhlXG4gKiBkcm9vcCBvZiBpdHMgZnJlZSBlZGdlcyAtLSBjbG90aCwgd2hlcmUgYSBzbGFiIHJlYWRzIGFzIGEgcGFpbnRlZCBib3guXG4gKi9cbmZ1bmN0aW9uIHNoZWV0KHM6IGFueSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgbng6IG51bWJlciA9IHMubngsIG56OiBudW1iZXIgPSBzLm56LCBIaDogbnVtYmVyW11bXSA9IHMuaGVpZ2h0cywgdDogbnVtYmVyID0gcy50ID8/IDAuMDEyO1xuICBjb25zdCBYID0gKGk6IG51bWJlcikgPT4gcy54MCArIChzLngxIC0gcy54MCkgKiBpIC8gbng7XG4gIC8vIGB6c2AgZ2l2ZXMgdGhlIHogU1RBVElPTlMgZXhwbGljaXRseSBpbnN0ZWFkIG9mIGRpdmlkaW5nIHowLi56MSBldmVubHkuIEEgcm9vZiB3aG9zZSBlYXZlIGFuZFxuICAvLyByYWtlIHdhbnQgYSBuYXJyb3cgcnVzdGVkIGJhbmQgbmVlZHMgcm93cyAwLjEwIG0gaW4gZnJvbSB0aGUgZWRnZSwgYW5kIHJlYWNoaW5nIHRoYXQgYnkgcmFpc2luZ1xuICAvLyBueiBhbG9uZSB3b3VsZCBtdWx0aXBseSB0aGUgd2hvbGUgZ3JpZCAtLSAxMDQgZmx1dGUgY29sdW1ucyBpcyB3aGF0IG1ha2VzIGEgcm93IGV4cGVuc2l2ZS5cbiAgY29uc3QgWlM6IG51bWJlcltdIHwgbnVsbCA9IEFycmF5LmlzQXJyYXkocy56cykgPyBzLnpzIDogbnVsbDtcbiAgY29uc3QgWiA9IChqOiBudW1iZXIpID0+IChaUyA/IFpTW2pdIDogcy56MCArIChzLnoxIC0gcy56MCkgKiBqIC8gbnopO1xuICBjb25zdCBncmlkID0gKHlPZmY6IG51bWJlciwgZmxpcDogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXY6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8PSBueDsgaSsrKSB7IHBvcy5wdXNoKFgoaSksIEhoW2pdW2ldICsgeU9mZiwgWihqKSk7IHV2LnB1c2goaSAvIG54LCBqIC8gbnopOyB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSBqICogKG54ICsgMSkgKyBpLCBiID0gYSArIDEsIGMgPSBhICsgbnggKyAxLCBkID0gYyArIDE7XG4gICAgICBpZiAoZmxpcCkgaWR4LnB1c2goYSwgYiwgYywgYiwgZCwgYyk7IGVsc2UgaWR4LnB1c2goYSwgYywgYiwgYiwgYywgZCk7XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuc2V0SW5kZXgoaWR4KTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gZztcbiAgfTtcbiAgLy8gYGhleFRvcGAgLyBgaGV4VW5kZXJgOiBhIGNvbG91ciBhdHRyaWJ1dGUgd3JpdHRlbiBwZXIgZ3JpZCwgc28gYSB0YXJwIGNhbiBiZSBibHVlIG9uIHRvcCBhbmRcbiAgLy8gb3JhbmdlIHVuZGVybmVhdGggb24gT05FIG1hdGVyaWFsIGFuZCBPTkUgZHJhdyBjYWxsLiBBIGNvbXBvbmVudCB0aW50IGNhbm5vdCBkbyBpdCAtLSB0aGUgdHdvXG4gIC8vIHN1cmZhY2VzIGFyZSBtaWxsaW1ldHJlcyBhcGFydCBpbiB5LCBzbyBubyBheGlzIGJsZW5kIHNlcGFyYXRlcyB0aGVtIC0tIGFuZCBhIHNlY29uZCBzaGVldFxuICAvLyB3b3VsZCBkb3VibGUgdGhlIHJvb2YncyB0cmlhbmdsZXMgZm9yIGEgY29sb3VyLiBPbWl0dGVkLCB0aGUgZ2VvbWV0cnkgaXMgdW50aW50ZWQgYXMgYmVmb3JlLlxuICBjb25zdCBwYWludCA9IChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgaGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQsIGMgPSBuZXcgVEhSRUUuQ29sb3IoaGV4KSwgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTsgcmV0dXJuIGc7XG4gIH07XG4gIC8vIGBoZXhHcmlkW2pdW2ldYCBpcyBhIGNvbG91ciBQRVIgVE9QLUdSSUQgVkVSVEVYLCBjb21wdXRlZCBhdCBlbWl0IHRpbWUgLS0gd2hpY2ggaXMgdGhlIG9ubHkgd2F5XG4gIC8vIHRvIHB1dCBhIG1hcmsgYXQgYSBrbm93biBwbGFjZSBvbiB0aGUgc2hlZXQuIEEgY2FudmFzIHRpbGUgcmVwZWF0cyBieSB3b3JsZCBwb3NpdGlvbiBhbmQga25vd3NcbiAgLy8gbm90aGluZyBhYm91dCB3aGVyZSB0aGUgZWF2ZSBpczsgYGhleFRvcGAgaXMgb25lIGZsYXQgdG9uZSBmb3IgdGhlIHdob2xlIHN1cmZhY2UuIFRoaXMgaXMgd2hhdFxuICAvLyBjYXJyaWVzIHRoZSBydXN0ZWQgYmFuZCBhbG9uZyB0aGUgZWF2ZSBhbmQgdGhlIHJha2VzLCBhbmQgdGhlIHN0YWluaW5nIGJlc2lkZSBlYWNoIHNoZWV0IGxhcC5cbiAgY29uc3QgcGFpbnRHcmlkID0gKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBIRzogbnVtYmVyW11bXSkgPT4ge1xuICAgIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCwgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyksIGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICBsZXQgayA9IDA7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPD0gbng7IGkrKykgeyBjLnNldEhleChIR1tqXVtpXSk7IGNvbFtrKytdID0gYy5yOyBjb2xbaysrXSA9IGMuZzsgY29sW2srK10gPSBjLmI7IH1cbiAgICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpOyByZXR1cm4gZztcbiAgfTtcbiAgY29uc3QgdG9wMCA9IGdyaWQoMCwgZmFsc2UpLCB1bmQwID0gZ3JpZCgtdCwgdHJ1ZSk7XG4gIGNvbnN0IHBhcnRzID0gcy5oZXhHcmlkICE9PSB1bmRlZmluZWRcbiAgICA/IFtwYWludEdyaWQodG9wMCwgcy5oZXhHcmlkKSwgcGFpbnQodW5kMCwgcy5oZXhVbmRlciA/PyAweGZmZmZmZildXG4gICAgOiBzLmhleFVuZGVyICE9PSB1bmRlZmluZWRcbiAgICAgID8gW3BhaW50KHRvcDAsIHMuaGV4VG9wID8/IDB4ZmZmZmZmKSwgcGFpbnQodW5kMCwgcy5oZXhVbmRlcildXG4gICAgICA6IFt0b3AwLCB1bmQwXTtcbiAgLy8gZWRnZSBzdHJpcHM6IGVhY2ggcXVhZCBmcm9tIHRoZSB0b3AgZWRnZSBkb3duIHRvIHRoZSB1bmRlcnNpZGUsIHdvdW5kIHNvIGl0cyBub3JtYWwgZmFjZXMgYG91dGBcbiAgY29uc3Qgc3RyaXAgPSAocHRzOiBudW1iZXJbXVtdW10sIG91dDogbnVtYmVyW10pID0+IHtcbiAgICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIHV2OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgW3AwLCBwMV0gb2YgcHRzKSB7XG4gICAgICBjb25zdCBxMCA9IHAwLCBxMSA9IHAxLCBxMiA9IFtwMVswXSwgcDFbMV0gLSB0LCBwMVsyXV0sIHEzID0gW3AwWzBdLCBwMFsxXSAtIHQsIHAwWzJdXTtcbiAgICAgIGNvbnN0IGUxID0gW3ExWzBdIC0gcTBbMF0sIHExWzFdIC0gcTBbMV0sIHExWzJdIC0gcTBbMl1dLCBlMiA9IFtxMlswXSAtIHEwWzBdLCBxMlsxXSAtIHEwWzFdLCBxMlsyXSAtIHEwWzJdXTtcbiAgICAgIGNvbnN0IG4gPSBbZTFbMV0gKiBlMlsyXSAtIGUxWzJdICogZTJbMV0sIGUxWzJdICogZTJbMF0gLSBlMVswXSAqIGUyWzJdLCBlMVswXSAqIGUyWzFdIC0gZTFbMV0gKiBlMlswXV07XG4gICAgICBjb25zdCB0cmkgPSBuWzBdICogb3V0WzBdICsgblsxXSAqIG91dFsxXSArIG5bMl0gKiBvdXRbMl0gPj0gMCA/IFtxMCwgcTEsIHEyLCBxMCwgcTIsIHEzXSA6IFtxMCwgcTIsIHExLCBxMCwgcTMsIHEyXTtcbiAgICAgIGZvciAoY29uc3QgcSBvZiB0cmkpIHsgcG9zLnB1c2gocVswXSwgcVsxXSwgcVsyXSk7IHV2LnB1c2goMCwgMCk7IH1cbiAgICB9XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvcywgMykpO1xuICAgIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gICAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gZztcbiAgfTtcbiAgY29uc3QgdG9wID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiBbWChpKSwgSGhbal1baV0sIFooaildO1xuICBjb25zdCBlMDogbnVtYmVyW11bXVtdID0gW10sIGUxOiBudW1iZXJbXVtdW10gPSBbXSwgZTI6IG51bWJlcltdW11bXSA9IFtdLCBlMzogbnVtYmVyW11bXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbng7IGkrKykgeyBlMC5wdXNoKFt0b3AoaSwgMCksIHRvcChpICsgMSwgMCldKTsgZTEucHVzaChbdG9wKGksIG56KSwgdG9wKGkgKyAxLCBueildKTsgfVxuICBmb3IgKGxldCBqID0gMDsgaiA8IG56OyBqKyspIHsgZTIucHVzaChbdG9wKDAsIGopLCB0b3AoMCwgaiArIDEpXSk7IGUzLnB1c2goW3RvcChueCwgaiksIHRvcChueCwgaiArIDEpXSk7IH1cbiAgY29uc3QgZWRnZXMgPSBbc3RyaXAoZTAsIFswLCAwLCAtMV0pLCBzdHJpcChlMSwgWzAsIDAsIDFdKSwgc3RyaXAoZTIsIFstMSwgMCwgMF0pLCBzdHJpcChlMywgWzEsIDAsIDBdKV07XG4gIC8vIFRoZSByaW0gaXMgdGhlIHNlYW0gYmV0d2VlbiB0aGUgdHdvIGZhY2VzLCBzbyBpdCB0YWtlcyB0aGUgVU5ERVIgY29sb3VyOiBvbiBhIGRyYXBlZCB0YXJwIHRoZVxuICAvLyBlZGdlIGlzIHdoYXQgYSB2aWV3ZXIgc3RhbmRpbmcgYmVzaWRlIGl0IGFjdHVhbGx5IHNlZXMsIGFuZCBpdCBpcyB0aGUgbGluaW5nLCBub3QgdGhlIHRvcC4gT24gYVxuICAvLyByb29mIGRlY2sgaXQgaXMgdGhlIGZsdXRlZCBlYXZlLCB3aGljaCBpcyB3aGVyZSB0aGUgcnVzdCBpcywgc28gYGhleFJpbWAgb3ZlcnJpZGVzIGl0LlxuICBjb25zdCByaW1IZXggPSBzLmhleFJpbSA/PyBzLmhleFVuZGVyO1xuICBwYXJ0cy5wdXNoKC4uLihyaW1IZXggIT09IHVuZGVmaW5lZCA/IGVkZ2VzLm1hcCgoZykgPT4gcGFpbnQoZywgcmltSGV4KSkgOiBlZGdlcykpO1xuICByZXR1cm4gbWVyZ2VHZW9zKHBhcnRzKTtcbn1cblxuLyoqXG4gKiBXRUFUSEVSRUQgUEFJTlQgb24gYSBzdGVlbCBjb250YWluZXI6IG9uZSBzZWFtbGVzcyBtdWx0aXBsaWVyIHRpbGUgY2FycnlpbmcgY2xlYW4gcGFpbnQsIHJ1c3RcbiAqIGFuZCBjaGFsa2VkIGJsb29tIHRvZ2V0aGVyLlxuICpcbiAqIFRoZSB0aHJlZSB0b25lcyBjYW5ub3QgcmlkZSBhIHBsYWluIG11bHRpcGx5IG92ZXIgdGhlIGNsZWFuIHBhaW50LCBiZWNhdXNlIGEgY2hhbGsgYmxvb20gaXNcbiAqIEJSSUdIVEVSIHRoYW4gdGhlIHBhaW50IGl0IHNpdHMgb24gaW4gdHdvIGNoYW5uZWxzIC0tIGEgbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLiBTbyB0aGUgdmVydGV4XG4gKiBjb2xvdXIgaXMgUkUtQkFTRUQgdG8gYW4gZW52ZWxvcGUgYWJvdmUgZXZlcnkgdG9uZSB0aGUgdGlsZSBoYXMgdG8gcmVhY2ggKGBvLmJhc2VgIGlzIHRoZSBjbGVhblxuICogcGFpbnQncyBvd24gbXVsdGlwbGllciBhZ2FpbnN0IHRoYXQgZW52ZWxvcGUsIGFuZCBpdCBpcyB3aGF0IG1vc3Qgb2YgdGhlIHRpbGUgaXMgZmlsbGVkIHdpdGgpLFxuICogZXhhY3RseSBhcyB0aGUgbGljaGVuLW9uLXN0b25lIHJvdXRlIGRvZXMuIEV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpbGwgaXMgZHJhd24gc291cmNlLW92ZXIgaW5cbiAqIGFic29sdXRlIG11bHRpcGxpZXIgc3BhY2UsIHNvIGEgbWFyayBtYXkgbGFuZCBlaXRoZXIgc2lkZSBvZiBjbGVhbi5cbiAqXG4gKiBPcmRlciBtYXR0ZXJzIGFuZCBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHdlYXRoZXJpbmcgYW5kIGNhbW91ZmxhZ2U6IGEgc29mdCBjbG91ZHkgZHJpZnRcbiAqIGZpcnN0LCB0aGVuIHRoZSBydXN0IGFzIGNsdXN0ZXJlZCBncmFudWxhciBwYXRjaGVzIHJhdGhlciB0aGFuIGhhcmQgYmxvdGNoZXMsIHRoZW4gdGhlIHJ1bnMgaXRcbiAqIGxlYXZlcyBCRUxPVyBpdHNlbGYsIHRoZW4gdGhlIGNoYWxrIGJsb29tcywgdGhlbiBhIGZpbmUgZ3JhaW4gb3ZlciB0aGUgbG90LlxuICovXG5mdW5jdGlvbiBwYWludFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV0sIHJ1c3QgPSBvLnJ1c3QgPz8gYmFzZSwgY2hhbGsgPSBvLmNoYWxrID8/IGJhc2U7XG4gICAgY29uc3QgcnVuID0gby5ydW4gPz8gcnVzdDtcbiAgICAvLyB3cmFwIGV2ZXJ5IG1hcmsgdGhyZWUgd2F5cyBzbyBub3RoaW5nIGlzIGN1dCBieSB0aGUgdGlsZSBlZGdlXG4gICAgY29uc3Qgd3JhcCA9IChkcmF3OiAoZHg6IG51bWJlciwgZHk6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIGRyYXcoZHgsIGR5KTtcbiAgICB9O1xuICAgIGNvbnN0IGJsb2IgPSAoYzogbnVtYmVyW10sIHg6IG51bWJlciwgeTogbnVtYmVyLCByOiBudW1iZXIsIGE6IG51bWJlciwgcnkgPSAxKSA9PiB7XG4gICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IoYyl9LCR7YX0pYCk7IGcuYWRkQ29sb3JTdG9wKDAuNTUsIGByZ2JhKCR7cmdiKGMpfSwke2EgKiAwLjQ1fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKGMpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciwgciAqIHJ5LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgIH07XG5cbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuXG4gICAgLy8gMS4gY2xvdWR5IGRyaWZ0OiBicm9hZCwgdmVyeSBzb2Z0LCBiYXJlbHkgb2ZmIGNsZWFuIC0tIHdoYXQgc3RvcHMgdGhlIGZsYXQgYXJlYXMgcmVhZGluZyBhcyBwYWludCBjaGlwcyBvbiBwbGFzdGljXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5kcmlmdCA/PyAxNCk7IGkrKykge1xuICAgICAgY29uc3QgYyA9IHJuZCgpIDwgMC41ID8gcnVzdCA6IGNoYWxrO1xuICAgICAgYmxvYihjLCBybmQoKSAqIHMsIHJuZCgpICogcywgcyAqICgwLjE4ICsgcm5kKCkgKiAwLjMwKSAqIChvLmRyaWZ0U2NhbGUgPz8gMSksIDAuMDUgKyBybmQoKSAqIDAuMDcsIDAuNiArIHJuZCgpICogMC44KTtcbiAgICB9XG5cbiAgICAvLyAyLiBydXN0OiBjbHVzdGVycywgZWFjaCBhIHNvZnQgcGF0Y2ggd2l0aCBncmFudWxhciBzcGVja3Mgb3ZlciBpdC4gQmFyZSBzdGVlbCBjb3Jyb2RlcyBpblxuICAgIC8vICAgIGZpZWxkcywgbm90IGluIGRvdHM7IGEgc3BlY2sgZmllbGQgd2l0aCBubyBwYXRjaCB1bmRlciBpdCByZWFkcyBhcyBjb25mZXR0aS5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnJ1c3RDbHVzdGVycyA/PyAxNik7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wNCArIHJuZCgpICogMC4xMSkgKiAoby5jbHVzdGVyU2NhbGUgPz8gMSk7XG4gICAgICBibG9iKHJ1c3QsIGN4LCBjeSwgY3IsIDAuMzAgKyBybmQoKSAqIDAuMzUsIDAuNyArIHJuZCgpICogMC42KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BlY2tzUGVyQ2x1c3RlciA/PyA0MCk7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjcjtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQsIHIgPSAwLjggKyBybmQoKSAqIDIuNDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHJ1c3QpfSwkezAuMjUgKyBybmQoKSAqIDAuNX0pYDtcbiAgICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIC8vIHRoZSBydW4gaXQgbGVhdmVzIGJlbG93IGl0c2VsZjogcnVzdCBibGVlZHMgRE9XTiBhIHZlcnRpY2FsIHBhbmVsIGFuZCBub3doZXJlIGVsc2VcbiAgICAgIGlmIChybmQoKSA8IChvLnJ1bkNoYW5jZSA/PyAwLjU1KSkge1xuICAgICAgICBjb25zdCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDEwLCBsZW4gPSBzICogKDAuMTAgKyBybmQoKSAqIDAuMzUpO1xuICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGN5LCAwLCBjeSArIGxlbik7XG4gICAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1bil9LCR7MC4xNiArIHJuZCgpICogMC4xOH0pYCk7IGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1bil9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgICB3cmFwKChkeCkgPT4gY3R4LmZpbGxSZWN0KGN4ICsgZHggKyAocm5kKCkgLSAwLjUpICogY3IsIGN5LCB3LCBsZW4pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBjaGFsayBibG9vbTogbGFyZ2UsIHZlcnkgc29mdCwgbG93LWNvbnRyYXN0LiBJdCBpcyB0aGUgdG9uZSB0aGUgdGlsZSB3YXMgcmUtYmFzZWQgZm9yLlxuICAgIGNvbnN0IGNzY2FsZSA9IG8uY2hhbGtTY2FsZSA/PyAxLCBjYWxwaGEgPSBvLmNoYWxrQWxwaGEgPz8gMC4zNTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmNoYWxrUGF0Y2hlcyA/PyA5KTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjEwKSAqIGNzY2FsZTtcbiAgICAgIGJsb2IoY2hhbGssIGN4LCBjeSwgY3IsIGNhbHBoYSArIHJuZCgpICogMC4zMCwgMC41ICsgcm5kKCkgKiAwLjcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyICogMS4yNTtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQgKiAwLjcsIHIgPSAxICsgcm5kKCkgKiAzO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IoY2hhbGspfSwkezAuMiArIHJuZCgpICogMC40fSlgO1xuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDQuIHRoZSB0d28gbWFya3MgdGhhdCBvbmx5IG1ha2Ugc2Vuc2Ugb25jZSB0aGUgdGlsZSBpcyBIRUlHSFQta2V5ZWQ6IGxvbmcgcnVucyBibGVlZGluZyBkb3duXG4gICAgLy8gICAgZnJvbSB0aGUgdG9wIGVkZ2UgKHRoZSB0b3AgcmFpbCBpcyB3aGVyZSB3YXRlciBzaXRzIGFuZCB0aGUgcGFpbnQgZ29lcyBmaXJzdCkgYW5kIGEgZGlydFxuICAgIC8vICAgIGJhbmQgYWxvbmcgdGhlIGJvdHRvbS4gQm90aCBhcmUgbm8tb3BzIG9uIGEgd29ybGQtc3BhY2UgdGlsZSwgd2hlcmUgdGhlcmUgaXMgbm8gdXAuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby50b3BTdHJlYWtzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTQsIGxlbiA9IHMgKiAoMC4yNSArIHJuZCgpICogMC41NSk7XG4gICAgICBjb25zdCBhID0gMC4xMCArIHJuZCgpICogMC4yMjtcbiAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgbGVuKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1bil9LCR7YX0pYCk7IGcuYWRkQ29sb3JTdG9wKDAuMjUsIGByZ2JhKCR7cmdiKHJ1c3QpfSwke2EgKiAwLjh9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVzdCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCwgMCwgdywgbGVuKTtcbiAgICB9XG4gICAgaWYgKG8uZ3JvdW5kQmFuZCkge1xuICAgICAgY29uc3QgYiA9IG8uZ3JvdW5kQmFuZCwgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSAoby5ncm91bmRIZWlnaHQgPz8gMC4yMikpKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1bil9LCR7Yn0pYCk7IGcuYWRkQ29sb3JTdG9wKDAuNDUsIGByZ2JhKCR7cmdiKHJ1bil9LCR7YiAqIDAuNH0pYCk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydW4pfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9XG5cbiAgICAvLyA1LiBmaW5lIGdyYWluOiB0aGUgdG9vdGggb2YgYSBicnVzaC1yb2xsZWQgaW5kdXN0cmlhbCBwYWludC4gTXVsdGlwbHksIHNvIGl0IG9ubHkgZGFya2Vucy5cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyYWluID8/IDE4MDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAwLjUgKyBybmQoKSAqIDEuMywgYSA9IDAuMDMgKyBybmQoKSAqIDAuMDc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMTUwLDE0MCwxMzAsJHthfSlgO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgU1dFUFQgcG9seWxpbmUgdHViZTogT05FIHJpbmcgb2YgYHNlZ2AgdmVydGljZXMgcGVyIHBvaW50LCBtaXRyZWQgYXQgZXZlcnkgYmVuZCwgaW5kZXhlZCBhbmRcbiAqIHNtb290aC1zaGFkZWQuIFRoaXMgaXMgbm90IHdoYXQgYHR1YmVgIGRvZXMsIGFuZCB0aGUgZGlmZmVyZW5jZSBpcyBhIHZpc2libGUgZGVmZWN0IHJhdGhlciB0aGFuIGFcbiAqIHJlZmluZW1lbnQuIGB0dWJlYCBjaGFpbnMgYSBzZXBhcmF0ZSBjeWxpbmRlciBwZXIgc2VnbWVudCBhbmQgRVhURU5EUyBlYWNoIG9uZSBieSBgciAqIDEuMmAgc28gdGhlXG4gKiBqb2ludHMgY2xvc2UgLS0gd2hpY2ggaXMgZmluZSB3aGlsZSB0aGUgc2VnbWVudHMgYXJlIGxvbmcsIGFuZCBjYXRhc3Ryb3BoaWMgb24gYSB0aWdodCBjdXJ2ZTogYVxuICogMC4xMiBtIGNvcm5lciByYWRpdXMgc2FtcGxlZCBpbiBmaXZlIHN0ZXBzIGhhcyBhIDAuMDM4IG0gY2hvcmQgYWdhaW5zdCBhIDAuMDI1IG0gb3ZlcmxhcCwgc29cbiAqIGNvbnNlY3V0aXZlIGN5bGluZGVycyBvdmVyc2hvb3QgZWFjaCBvdGhlciBieSB0d28gdGhpcmRzIG9mIHRoZWlyIGxlbmd0aCBhbmQgdGhlIGJlbmQgcmVuZGVycyBhcyBhXG4gKiBjcnVtcGxlZCBhY2NvcmRpb24gb2YgcGxlYXRzLiBUaGUgY3Jvd2QgYmFycmllcidzIHJvdW5kZWQgdG9wIGNvcm5lcnMgc2hpcHBlZCB0aGF0IHdheS5cbiAqXG4gKiBUaGUgZnJhbWUgaXMgcm90YXRpb24tbWluaW1pc2luZyAocGFyYWxsZWwgdHJhbnNwb3J0KSwgbm90IEZyZW5ldDogYSBGcmVuZXQgZnJhbWUgZmxpcHMgaXRzIG5vcm1hbFxuICogdGhyb3VnaCBhbiBpbmZsZWN0aW9uIGFuZCB0d2lzdHMgdGhlIHR1YmUsIHdoaWNoIGEgVVYgb3IgYSB2ZXJ0ZXggY29sb3VyIHRoZW4gc2hvd3MgYXMgYSBzdHJpcGVcbiAqIHNwaXJhbGxpbmcgYWxvbmcgYSByYWlsIHRoYXQgaXMgbWVhbnQgdG8gYmUgc3RyYWlnaHQuIEludGVyaW9yIHBvaW50cyByaW5nIG9uIHRoZSBCSVNFQ1RPUiBvZiB0aGVcbiAqIHR3byBhZGphY2VudCB0YW5nZW50cywgd2hpY2ggaXMgdGhlIG1pdHJlIGEgcmVhbCBiZW50IHR1YmUgaGFzLlxuICovXG5mdW5jdGlvbiBzd2VlcFR1YmUocHRzOiBudW1iZXJbXVtdLCByOiBudW1iZXIsIHNlZyA9IDEwLCBoZXg/OiBudW1iZXIsIGNhcCA9IHRydWUpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IFAgPSBwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMyhwWzBdLCBwWzFdLCBwWzJdKSk7XG4gIC8vIGRyb3AgcmVwZWF0ZWQgcG9pbnRzOiBhIHplcm8tbGVuZ3RoIHNlZ21lbnQgaGFzIG5vIHRhbmdlbnQsIGFuZCBvbmUgZHVwbGljYXRlIGlzIGVub3VnaCB0b1xuICAvLyBwdXQgYSBOYU4gdGhyb3VnaCB0aGUgd2hvbGUgdHJhbnNwb3J0IGNoYWluXG4gIGZvciAobGV0IGkgPSBQLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIGlmIChQW2ldLmRpc3RhbmNlVG8oUFtpIC0gMV0pIDwgMWUtNykgUC5zcGxpY2UoaSwgMSk7XG4gIGlmIChQLmxlbmd0aCA8IDIpIHJldHVybiBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgY29uc3QgbiA9IFAubGVuZ3RoO1xuICBjb25zdCBzZWdEaXI6IFRIUkVFLlZlY3RvcjNbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG4gLSAxOyBpKyspIHNlZ0Rpci5wdXNoKFBbaSArIDFdLmNsb25lKCkuc3ViKFBbaV0pLm5vcm1hbGl6ZSgpKTtcbiAgLy8gcGVyLXBvaW50IHRhbmdlbnQ6IHRoZSBzZWdtZW50IGRpcmVjdGlvbiBhdCB0aGUgZW5kcywgdGhlIGJpc2VjdG9yIGJldHdlZW4gdHdvIHNlZ21lbnRzIGluc2lkZVxuICBjb25zdCBUID0gUC5tYXAoKF8sIGkpID0+IGkgPT09IDAgPyBzZWdEaXJbMF0uY2xvbmUoKVxuICAgIDogaSA9PT0gbiAtIDEgPyBzZWdEaXJbbiAtIDJdLmNsb25lKClcbiAgICA6IHNlZ0RpcltpIC0gMV0uY2xvbmUoKS5hZGQoc2VnRGlyW2ldKS5ub3JtYWxpemUoKSk7XG4gIC8vIHNlZWQgYSBub3JtYWwgdGhhdCBpcyBub3QgcGFyYWxsZWwgdG8gdGhlIGZpcnN0IHRhbmdlbnQsIHRoZW4gdHJhbnNwb3J0IGl0IHBvaW50IHRvIHBvaW50XG4gIGxldCBOID0gTWF0aC5hYnMoVFswXS55KSA+IDAuOSA/IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApIDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCk7XG4gIE4uc3ViKFRbMF0uY2xvbmUoKS5tdWx0aXBseVNjYWxhcihOLmRvdChUWzBdKSkpLm5vcm1hbGl6ZSgpO1xuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBpZiAoaSA+IDApIHtcbiAgICAgIC8vIHJvdGF0ZSB0aGUgY2FycmllZCBub3JtYWwgYnkgdGhlIHNhbWUgcm90YXRpb24gdGhhdCB0YWtlcyB0aGUgcHJldmlvdXMgdGFuZ2VudCB0byB0aGlzIG9uZVxuICAgICAgY29uc3QgcSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKFRbaSAtIDFdLCBUW2ldKTtcbiAgICAgIE4uYXBwbHlRdWF0ZXJuaW9uKHEpO1xuICAgICAgTi5zdWIoVFtpXS5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKE4uZG90KFRbaV0pKSkubm9ybWFsaXplKCk7XG4gICAgfVxuICAgIGNvbnN0IEIgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNyb3NzVmVjdG9ycyhUW2ldLCBOKS5ub3JtYWxpemUoKTtcbiAgICAvLyBhIG1pdHJlZCByaW5nIGlzIGFuIEVMTElQU0UgaW4gaXRzIG93biBwbGFuZTogd2lkZW4gaXQgYnkgMS9jb3MoaGFsZi1hbmdsZSkgYWxvbmcgdGhlIGJlbmQgc29cbiAgICAvLyB0aGUgc3dlcHQgc2VjdGlvbiBzdGF5cyBjaXJjdWxhciB0aHJvdWdoIHRoZSBjb3JuZXIgcmF0aGVyIHRoYW4gcGluY2hpbmcgdG8gYSB3YWlzdFxuICAgIGNvbnN0IGsgPSBpID4gMCAmJiBpIDwgbiAtIDEgPyAxIC8gTWF0aC5tYXgoMC41LCBzZWdEaXJbaSAtIDFdLmRvdChUW2ldKSkgOiAxO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IHRoID0gaiAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgICAgY29uc3QgYyA9IE1hdGguY29zKHRoKSwgcyA9IE1hdGguc2luKHRoKTtcbiAgICAgIHBvcy5wdXNoKFBbaV0ueCArIChOLnggKiBjICsgQi54ICogcyAqIGspICogciwgUFtpXS55ICsgKE4ueSAqIGMgKyBCLnkgKiBzICogaykgKiByLCBQW2ldLnogKyAoTi56ICogYyArIEIueiAqIHMgKiBrKSAqIHIpO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG4gLSAxOyBpKyspIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAvLyAoYSwgYzIsIGIpLCBOT1QgKGEsIGIsIGMyKS4gVGhlIHJpbmcgcnVucyBOIC0+IEIgd2l0aCBCID0gVCB4IE4sIHNvIHdpbmRpbmcgYWxvbmcgdGhlIHR1YmVcbiAgICAvLyBmaXJzdCBhbmQgYXJvdW5kIGl0IHNlY29uZCBnaXZlcyBhIGZhY2Ugbm9ybWFsIG9mIFQgeCBCID0gLU46IGV2ZXJ5IHdhbGwgdHJpYW5nbGUgZmFjZXMgSU5XQVJELlxuICAgIC8vIEJhY2tmYWNlIGN1bGxpbmcgdGhlbiBoaWRlcyB0aGUgbmVhciB3YWxsIGFuZCBzaG93cyB0aGUgRkFSIG9uZSwgd2hpY2ggZm9yIGEgbGl0IGdyZXkgdHViZSBsb29rc1xuICAgIC8vIGFsbW9zdCByaWdodCAtLSBhbmQgd3JpdGVzIGl0cyBkZXB0aCBvbiB0aGUgZmFyIHNpZGUsIHNvIGFueXRoaW5nIHBhc3NpbmcgdGhyb3VnaCB0aGUgdHViZSBkcmF3c1xuICAgIC8vIGluIGZyb250IG9mIGl0LiBUaGUgZm9vdCBzdHVicyBzdG9vZCBwcm91ZGx5IHRocm91Z2ggdGhlIGJvdHRvbSByYWlsIGJlY2F1c2Ugb2YgdGhpcywgYW5kIGl0XG4gICAgLy8gcmVhZCBhcyBhIGdlb21ldHJ5IGVycm9yIGluIHRoZSBzdHViIHJhdGhlciB0aGFuIGEgd2luZGluZyBlcnJvciBpbiB0aGUgc3dlZXAuXG4gICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMyID0gKGkgKyAxKSAqIHNlZyArIChqICsgMSkgJSBzZWcsIGQgPSBpICogc2VnICsgKGogKyAxKSAlIHNlZztcbiAgICBpZHgucHVzaChhLCBjMiwgYiwgYSwgZCwgYzIpO1xuICB9XG4gIGlmIChjYXApIHtcbiAgICAvLyBGbGF0IGVuZCBkaXNjcywgb24gdGhlaXIgT1dOIENPUFkgb2YgdGhlIHJpbSB2ZXJ0aWNlcy4gRmFubmluZyB0aGVtIG9mZiB0aGUgc2lkZSB3YWxsJ3MgcmluZ1xuICAgIC8vIHNoYXJlcyB0aG9zZSB2ZXJ0aWNlcywgYW5kIGBjb21wdXRlVmVydGV4Tm9ybWFsc2AgdGhlbiBhdmVyYWdlcyB0aGUgZGlzYydzIGF4aWFsIG5vcm1hbCBpbnRvXG4gICAgLy8gdGhlIHdhbGwncyByYWRpYWwgb25lIC0tIHdoaWNoIGRvZXMgbm90IHNoYWRlIGEgc2xpZ2h0bHkgd3JvbmcgcmltLCBpdCB0aWx0cyB0aGUgbm9ybWFsIGF0IEJPVEhcbiAgICAvLyBlbmRzIG9mIGEgdHdvLXBvaW50IHR1YmUgYW5kIHNvIHNoYWRlcyB0aGUgV0hPTEUgdHViZSB3cm9uZy4gVGhlIGZvb3Qgc3R1YnMgcmVuZGVyZWQgYXMgZ2xhc3NcbiAgICAvLyB0ZXN0IHR1YmVzIHdpdGggYSBicmlnaHQgYmFuZCB1bmRlciB0aGUgcmFpbCwgYW5kIHRoZSBiYW5kIHJlYWQgYXMgYSBzZXBhcmF0ZSBvYmplY3Qgc2l0dGluZyBvblxuICAgIC8vIGl0LiBTYW1lIGZhdWx0LCBzYW1lIGZpeCwgYXMgdGhlIHNoYXJwLWNvcm5lciBzcGxpdCBpbiBgbGF0aGVgLlxuICAgIGZvciAoY29uc3QgW3JpbmcsIGF0LCBmbGlwXSBvZiBbWzAsIFBbMF0sIHRydWVdLCBbbiAtIDEsIFBbbiAtIDFdLCBmYWxzZV1dIGFzIFtudW1iZXIsIFRIUkVFLlZlY3RvcjMsIGJvb2xlYW5dW10pIHtcbiAgICAgIGNvbnN0IGJhc2UgPSBwb3MubGVuZ3RoIC8gMztcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHsgY29uc3QgayA9IChyaW5nICogc2VnICsgaikgKiAzOyBwb3MucHVzaChwb3Nba10sIHBvc1trICsgMV0sIHBvc1trICsgMl0pOyB9XG4gICAgICBjb25zdCBjaSA9IHBvcy5sZW5ndGggLyAzOyBwb3MucHVzaChhdC54LCBhdC55LCBhdC56KTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgICAgY29uc3QgYSA9IGJhc2UgKyBqLCBiID0gYmFzZSArIChqICsgMSkgJSBzZWc7XG4gICAgICAgIGlmIChmbGlwKSBpZHgucHVzaChjaSwgYiwgYSk7IGVsc2UgaWR4LnB1c2goY2ksIGEsIGIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgocG9zLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5zZXRJbmRleChpZHgpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IGcgOiB0aW50R2VvKGcsIGhleCk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmZW5jZSBoZWxwZXJzICovXG5cbi8qKiBQYW5lbCBVVnM6IHUgYWxvbmcgd29ybGQgWCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB2IHdvcmxkIEhFSUdIVCBvdmVyIHRoZSBzYW1lLCByZWdhcmRsZXNzIG9mIHRoZVxuICogIGZhY2Ugbm9ybWFsLiBPbiBhIHRoaW4gc2xhYiB0aGlzIG1lYW5zIHRoZSBmcm9udCBhbmQgYmFjayBmYWNlcyBzaGFyZSB0aGUgc2FtZSB0aWxlIHBsYWNlbWVudFxuICogIGFuZCB0aGUgZWRnZXMgdGFrZSBhIHNsaXZlciBvZiBpdDsgYSBncmltZSB3YXNoIHRoYXQga2V5cyBvbiB2IHRoZW4gbGFuZHMgYXQgdGhlIHNhbWUgaGVpZ2h0IG9uXG4gKiAgZXZlcnkgZmFjZSwgd2hpY2ggaXMgd2hhdCByYWluIGFuZCBhbGdhZSBkby4gKi9cbmZ1bmN0aW9uIHBhbmVsVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlciwgcm90ID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICAvLyBgcm90YCBzd2FwcyB0aGUgYXhlcyBzbyBhIHRpbGUgb2YgVkVSVElDQUwgc3RyaXBzIHJlYWRzIGhvcml6b250YWwgLS0gdGhlIHdvdmVuIGJhbmRzIG9mIGFcbiAgLy8gYmFtYm9vIHBhbmVsIGFnYWluc3QgaXRzIHZlcnRpY2FsIG11bGxpb25zLCBvbmUgdGlsZSwgb25lIG1hdGVyaWFsLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHUgPSByb3QgPyBwLmdldFkoaSkgOiBwLmdldFgoaSksIHYgPSByb3QgPyBwLmdldFgoaSkgOiBwLmdldFkoaSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQSBzcXVhcmUgcHlyYW1pZCBTUElLRTogYmFzZSB3IHggdyBhdCBgYXRgLCBhcGV4IGggYWJvdmUuIEEgcGlja2V0J3Mgc3BlYXIgcG9pbnQsIGEgcGllciBjYXAuICovXG5mdW5jdGlvbiBzcGlrZShhdDogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkNvbmVHZW9tZXRyeSh3IC8gTWF0aC5TUVJUMiwgaCwgNCwgMSwgZmFsc2UpO1xuICBnLnJvdGF0ZVkoTWF0aC5QSSAvIDQpO1xuICBnLnRyYW5zbGF0ZShhdFswXSwgYXRbMV0gKyBoIC8gMiwgYXRbMl0pO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEdSSU1FIHRpbGU6IGEgbXVsdGlwbGllciBvZiB3aGl0ZSB3aXRoIChhKSBhIGRhcmsgd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsXG4gKiAoYikgdmVydGljYWwgcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcCwgKGMpIHNvZnQgZGFyayBibG90Y2hlcywgKGMyKSBicm9hZCBDTE9VRCBtb3R0bGluZyxcbiAqIChkKSBzd2VwdCB0eXJlIFNDVUZGUyBvdmVyIGFcbiAqIGhlaWdodCBiYW5kLCAoZSkgdmVydGljYWwgZm9ybSBTRUFNUywgKGYpIFBJTkhPTEVTIC0tIHRoZSBhaXIgYnViYmxlcyBvZiBhIHByZWNhc3QgZmFjZSwgKGcpXG4gKiBvcHRpb25hbCBncmVlbiBtb3NzL2FsZ2FlIGJsb2JzIGNvbmNlbnRyYXRlZCBpbiB0aGUgYm90dG9tIGJhbmQsIGFuZCAoaCkgZmluZSBncmFpbi4gKGQpLCAoZSlcbiAqIGFuZCAoZikgYXJlIG9mZiB1bmxlc3MgYXNrZWQgZm9yLCBzbyBub3RoaW5nIGFscmVhZHkgZW1pdHRlZCBjaGFuZ2VzLiBFdmVyeSBjb2xvdXIgaXMgYSBmcmFjdGlvbiBvZiB0aGVcbiAqIG1hdGVyaWFsJ3MgbWVhc3VyZWQgYWxiZWRvLCBhbmQgdGhlIGRhcmtlc3QgY29yZSBpcyBjbGFtcGVkIHNvIG5vdGhpbmcgb24gYSB3aGl0ZSBvciBjcmVhbVxuICogc3VyZmFjZSBkcm9wcyB0b3dhcmQgdGhlIGhvbGUgZ2F0ZSdzIGx1bWEgNTguXG4gKi9cbmZ1bmN0aW9uIGdyaW1lVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCB3YXNoID0gby53YXNoID8/IFswLjYyLCAwLjYyLCAwLjU4XSwgd2FzaEEgPSBvLndhc2hBbHBoYSA/PyAwLjcsIGNvdiA9IG8uY292ZXJhZ2UgPz8gMC4zO1xuICAgIC8vIGBiYXNlYCBpcyB0aGUgdG9uZSB0aGUgVU4tZ3JpbWVkIHBhcnQgb2YgdGhlIHRpbGUgY2FycmllcywgZGVmYXVsdGluZyB0byB3aGl0ZSAtLSBpLmUuIHRvXG4gICAgLy8gXCJsZWF2ZSB0aGUgdmVydGV4IGNvbG91ciBhbG9uZVwiLCB3aGljaCBpcyBldmVyeSBleGlzdGluZyBjYWxsZXIuIEl0IGV4aXN0cyBmb3IgRU5WRUxPUEVcbiAgICAvLyBSRS1CQVNJTkc6IGEgbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLCBzbyBhIHBhcnQgdGhhdCBtdXN0IHJlYWQgY2xlYW4gb3JhbmdlIGluIG9uZSBwbGFjZSBhbmRcbiAgICAvLyBncmV5IHJvYWQgZ3JpbWUgaW4gYW5vdGhlciBjYW5ub3QgZG8gaXQgZnJvbSBhIHNpbmdsZSB2ZXJ0ZXggY29sb3VyLCBiZWNhdXNlIHRoZSBncmltZSBpc1xuICAgIC8vIEhJR0hFUiBpbiBibHVlIHRoYW4gdGhlIG9yYW5nZSBpcy4gVGhlIHZlcnRleCBjb2xvdXIgYmVjb21lcyB0aGUgcGVyLWNoYW5uZWwgbWF4aW11bSBvZiBib3RoXG4gICAgLy8gYW5kIHRoaXMgZmlsbCBwYWludHMgdGhlIGNsZWFuIHRvbmUgYmFjayBvdXQgb2YgaXQuXG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICAvLyByYWluIHN0cmVha3MgZnJvbSB0aGUgdG9wXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zdHJlYWtzID8/IDI2KTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDEyLCBsZW4gPSBzICogKDAuMTUgKyBybmQoKSAqIDAuNiksIGEgPSAwLjA1ICsgcm5kKCkgKiAwLjEyO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgbGVuKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBjdHguZmlsbFJlY3QoeCwgMCwgdywgbGVuKTsgY3R4LmZpbGxSZWN0KHggLSBzLCAwLCB3LCBsZW4pO1xuICAgIH1cbiAgICAvLyBncm91bmQgd2FzaC4gYHdhc2hGbGF0YCBtYWtlcyBpdCBVTklGT1JNIGluc3RlYWQgb2YgYSBib3R0b20tdXAgZ3JhZGllbnQsIHdoaWNoIGlzIHdoYXQgYVxuICAgIC8vIGhvcml6b250YWwgc2xhYiBuZWVkczogYSBncmFkaWVudCBrZXllZCB0byB0aGUgdGlsZSdzIHYgbWFwcyBzdHJhaWdodCBhY3Jvc3MgYSBmbGF0IGZhY2UgYW5kXG4gICAgLy8gc3BsaXRzIGl0IGludG8gYSBwYWxlIGhhbGYgYW5kIGEgZGFyayBoYWxmIHdpdGggYSBoYXJkIGVkZ2UgYmV0d2VlbiB0aGVtLiBEZWZhdWx0ZWQgb2ZmLCBzb1xuICAgIC8vIGV2ZXJ5IHByb3AgdGhhdCBkb2VzIG5vdCBhc2sgZm9yIGl0IGlzIHVuY2hhbmdlZC5cbiAgICBpZiAoby53YXNoRmxhdCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292KSk7XG4gICAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQX0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEEgKiAwLjQ1fSlgKTsgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIH1cbiAgICAvLyBibG90Y2hlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uYmxvdGNoZXMgPz8gNDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuNikgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDYsIGEgPSAwLjA4ICsgcm5kKCkgKiAwLjM7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBSVUJTOiBuZWFyLWJsYWNrIHR5cmUgc21lYXJzIGxvdyBvbiB0aGUgdGlsZS4gRGlzdGluY3QgZnJvbSBgYmxvdGNoZXNgLCB3aGljaCBkYXJrZW4gdG93YXJkXG4gICAgLy8gdGhlIGdyaW1lIHRvbmU6IGEgdHlyZSBydWIgaXMgYSBkaWZmZXJlbnQgY29sb3VyIGFuZCBhIGRpZmZlcmVudCBzaGFwZSAtLSBsb25nLCBsb3csIGFuZCBtdWNoXG4gICAgLy8gZGFya2VyIHRoYW4gYW55dGhpbmcgd2VhdGhlciBkb2VzLiBEZWZhdWx0IDAsIHNvIG5vIGV4aXN0aW5nIGNhbGxlciBjaGFuZ2VzLlxuICAgIGlmIChvLnJ1YnMpIHtcbiAgICAgIGNvbnN0IHJ1YiA9IG8ucnViID8/IFswLjMwLCAwLjI4LCAwLjMwXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5ydWJzOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgKiAoMC42MCArIHJuZCgpICogMC4zOCk7XG4gICAgICAgIGNvbnN0IHcgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMjIpLCBoID0gcyAqICgwLjAwNiArIHJuZCgpICogMC4wMzApLCBhID0gMC4yMCArIHJuZCgpICogMC40NTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoeCAtIHcgLyAyLCAwLCB4ICsgdyAvIDIsIDApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnViKX0sMClgKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtyZ2IocnViKX0sJHthfSlgKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1Yil9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCAtIHcgLyAyICsgZHgsIHkgLSBoIC8gMiwgdywgaCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFNDVUZGUzogc29mdCBwYXRjaGVzIHdoZXJlIHRoZSB3YXNoIGlzIGVyYXNlZCBiYWNrIHRvd2FyZCB3aGl0ZS4gVGhlIHRpbGUgaXMgY29tcG9zaXRlZFxuICAgIC8vIG11bHRpcGx5LW9uLXdoaXRlLCBzbyBwYWludGluZyB3aGl0ZSBzb3VyY2Utb3ZlciBpcyBwYWludGluZyBcIm5vdCBkYXJrZW5lZFwiIC0tIHdoaWNoIGlzIHRoZVxuICAgIC8vIG9ubHkgd2F5IGEgbXVsdGlwbHkgdGlsZSBjYW4gcHV0IFBBTEUgd2VhciBvbiBhIGRhcmsgYmFzZSB3aXRob3V0IHJlLWJhc2luZyB0aGUgZW52ZWxvcGVcbiAgICAvLyB0d2ljZS4gRGVmYXVsdGVkIHRvIG5vbmUuXG4gICAgaWYgKG8uc2N1ZmZzKSB7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5zY3VmZnM7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAoby5zY3VmZlNjYWxlID8/IDAuMTQpKTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsMjU1LDI1NSwke28uc2N1ZmZBbHBoYSA/PyAwLjU1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTUsMjU1LDApJyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIH1cblxuICAgIC8vIENMT1VEUzogYnJvYWQsIHZlcnkgc29mdCBwYXRjaGVzIG92ZXIgdGhlIFdIT0xFIHRpbGUuIEEgY2FzdCBmYWNlIGlzIG1vdHRsZWQgYXQgdGhlIHNjYWxlIG9mXG4gICAgLy8gdGVucyBvZiBjZW50aW1ldHJlcyAtLSBwb3VyIGxpbmVzLCBkYW1wLCB0aGUgbW91bGQncyBvd24gaGlzdG9yeSAtLSBhbmQgdGhhdCBsb3cgZnJlcXVlbmN5IGlzXG4gICAgLy8gbW9zdCBvZiB3aGF0IHNlcGFyYXRlcyBhIHJlbmRlcmVkIHN0YW5kYXJkIGRldmlhdGlvbiBvZiA2IGZyb20gdGhlIHBsYXRlJ3MgMTIuIFNtYWxsIG1hcmtzXG4gICAgLy8gY2Fubm90IHN1cHBseSBpdDogYXQgcHJvcCBkaXN0YW5jZSBhIHRob3VzYW5kIG9mIHRoZW0gYXZlcmFnZSBiYWNrIG91dCB0byBvbmUgZmxhdCB0b25lLlxuICAgIC8vIEtlZXAgdGhlbSBTTUFMTCByZWxhdGl2ZSB0byB0aGUgdGlsZSwgdGhvdWdoLiBBIHRpbGUgdGhhdCByZXBlYXRzIHR3byBvciB0aHJlZSB0aW1lcyBhY3Jvc3MgYVxuICAgIC8vIHByb3AgcmVwZWF0cyBpdHMgY2xvdWRzIHRvbywgYW5kIGEgY2xvdWQgdGhlIHNpemUgb2YgYSB0aGlyZCBvZiB0aGUgdGlsZSB0aGVuIHJlYWRzIGFzXG4gICAgLy8gY2Ftb3VmbGFnZSB3aXRoIGEgdmlzaWJsZSBzZWFtIC0tIHRoZSBzYW1lIGZhaWx1cmUgYXMgaGFyZCBibG90Y2hlcywgb25lIG9jdGF2ZSBsb3dlci5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmNsb3VkcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB2ID0gby5jbG91ZCA/PyBbMC44NiwgMC44NiwgMC44NF07XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqIChvLmNsb3VkUiA/PyAwLjE2KSAqICgwLjQgKyBybmQoKSAqIDEuNCksIGEgPSAoby5jbG91ZEFscGhhID8/IDAuMTIpICogKDAuNCArIHJuZCgpKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBTQ1VGRiBhcmNzOiB0aGUgdHlyZSBhbmQgYnVtcGVyIG1hcmtzIGEgcm9hZHNpZGUgYmFycmllciBjb2xsZWN0cyBvbiB0aGUgYmFuZCB0aGUgdHJhZmZpY1xuICAgIC8vIGFjdHVhbGx5IHJlYWNoZXMuIEJyb2FkLCBzb2Z0LCBuZWFyLWhvcml6b250YWwgc21lYXJzIHdpdGggYSBzd2VwdCBzaGFwZSAtLSBhIGJsb3RjaCByZWFkcyBhc1xuICAgIC8vIGEgc3RhaW4sIGFuZCB3aGF0IHRoZSBwbGF0ZSBjYXJyaWVzIGlzIHNvbWV0aGluZyB0aGF0IHdlbnQgcGFzdC4gYHNjdWZmQmFuZGAgaXMgYSBwYWlyIG9mXG4gICAgLy8gSEVJR0hUIGZyYWN0aW9ucyAoMCBhdCB0aGUgZ3JvdW5kKSwgc28gaXQgaXMgc3RhdGVkIGluIHRoZSBzYW1lIHRlcm1zIGFzIGBjb3ZlcmFnZWAuXG4gICAgaWYgKG8uc2N1ZmZzKSB7XG4gICAgICBjb25zdCB2ID0gby5zY3VmZiA/PyBbMC42MiwgMC42MiwgMC42NF0sIGJhbmQgPSBvLnNjdWZmQmFuZCA/PyBbMC4zMCwgMC43MF07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8uc2N1ZmZzOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcyAqICgxIC0gKGJhbmRbMF0gKyBybmQoKSAqIChiYW5kWzFdIC0gYmFuZFswXSkpKTtcbiAgICAgICAgY29uc3QgdyA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xMSksIGggPSB3ICogKDAuMDUgKyBybmQoKSAqIDAuMTApO1xuICAgICAgICBjb25zdCBhID0gKG8uc2N1ZmZBbHBoYSA/PyAwLjM0KSAqICgwLjUgKyBybmQoKSk7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICAgIGN0eC5zYXZlKCk7IGN0eC50cmFuc2xhdGUoY3ggKyBkeCwgY3kpOyBjdHgucm90YXRlKChybmQoKSAtIDAuNSkgKiAwLjQ1KTsgY3R4LnNjYWxlKDEsIGggLyB3KTtcbiAgICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCgwLCAwLCAwLCAwLCAwLCB3KTtcbiAgICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjQ1LCBgcmdiYSgke3JnYih2KX0sJHthICogMC41NX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYygwLCAwLCB3LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBGT1JNIFNFQU1TOiB0aGUgdmVydGljYWwgam9pbnQgbGluZXMgYSBwcmVjYXN0IG1vdWxkIGxlYXZlcywgb25lIHBlciB0aWxlLiBBIGRhcmsgaGFpcmxpbmUgd2l0aFxuICAgIC8vIGEgcGFsZXIgbGlwIGJlc2lkZSBpdCwgd2hpY2ggaXMgd2hhdCBhIHByb3VkIHNlYW0gbG9va3MgbGlrZSAtLSBhIHNpbmdsZSBkYXJrIGxpbmUgcmVhZHMgYXMgYVxuICAgIC8vIHNjcmF0Y2guIGBzZWFtQXRgIHBsYWNlcyBpdCBhcyBhIGZyYWN0aW9uIG9mIHRoZSB0aWxlIHNvIGl0IGRvZXMgbm90IGxhbmQgb24gdGhlIHdyYXAuXG4gICAgaWYgKG8uc2VhbXMpIHtcbiAgICAgIGNvbnN0IHYgPSBvLnNlYW0gPz8gWzAuNzIsIDAuNzEsIDAuNjhdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnNlYW1zOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQocyAqICgoby5zZWFtQXQgPz8gMC40MikgKyBpIC8gby5zZWFtcykpICUgcztcbiAgICAgICAgY29uc3Qgd3B4ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChzICogMC4wMDQpKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHYpfSwke28uc2VhbUFscGhhID8/IDAuNX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIHdweCwgcyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sJHsoby5zZWFtQWxwaGEgPz8gMC41KSAqIDAuM30pYDsgY3R4LmZpbGxSZWN0KHggKyB3cHgsIDAsIHdweCwgcyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFBJTkhPTEVTOiB0aGUgYWlyIGJ1YmJsZXMgYSBwcmVjYXN0IGZhY2UgaXMgY292ZXJlZCBpbi4gVGhleSBhcmUgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nXG4gICAgLy8gbWFyayBvZiBiYXJlIGNvbmNyZXRlIGF0IHByb3AgZGlzdGFuY2UgLS0gd2l0aG91dCB0aGVtIHRoZSBmYWNlIGlzIGEgcGFpbnRlZCBzbGFiLCB3aGljaCBpc1xuICAgIC8vIG1lYXN1cmFibGUgYXMgYSByZW5kZXJlZCBzdGFuZGFyZCBkZXZpYXRpb24gYSB0aGlyZCBvZiB0aGUgcGxhdGUncy4gU21hbGwsIGRhcmssIGFuZCBNQU5ZLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucGl0cyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB2ID0gby5waXQgPz8gWzAuNDIsIDAuNDAsIDAuMzZdO1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IChvLnBpdFIgPz8gMS42KSAqICgwLjUgKyBybmQoKSAqIDEuMyk7XG4gICAgICBjb25zdCBhID0gMC4yNSArIHJuZCgpICogMC41O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgciAqIDIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMC40LCBgcmdiYSgke3JnYih2KX0sJHthICogMC40NX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByICogMiwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIG1vc3MgLyBhbGdhZSBpbiB0aGUgYm90dG9tIGJhbmQ6IGNsdXN0ZXJlZCBzcGVja3MsIGJyaWdodGVyLXRoYW4td2FzaCBncmVlblxuICAgIGlmIChvLm1vc3MpIHtcbiAgICAgIGNvbnN0IG0gPSBvLm1vc3MsIGJhbmQgPSBvLm1vc3NCYW5kID8/IDAuMjI7XG4gICAgICAvLyBhIGZhaW50IGdyZWVuIHdhc2ggb3ZlciB0aGUgd2hvbGUgYmFuZCBmaXJzdCwgc28gdGhlIGNhcnBldHMgc2l0IGluIGRhbXAgZ3JvdW5kIHJhdGhlciB0aGFuXG4gICAgICAvLyBhcyBpc29sYXRlZCBkb3RzIG9uIGNsZWFuIHBhaW50XG4gICAgICBjb25zdCBtZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBiYW5kICogMS4zKSk7XG4gICAgICBtZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobSl9LCR7by5tb3NzV2FzaCA/PyAwLjM1fSlgKTsgbWcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKG0pfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG1nOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLm1vc3NDbHVzdGVycyA/PyAxNCk7IGsrKykge1xuICAgICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuNikgKiBzICogYmFuZCwgY3IgPSBzICogKDAuMDE1ICsgcm5kKCkgKiAwLjA0KTtcbiAgICAgICAgLy8gdGhlIGNhcnBldDogYSBzb2Z0IGJsb2IsIHRoZW4gc3BlY2tzIG92ZXIgaXQgZm9yIHRoZSB0dWZ0ZWQgZWRnZVxuICAgICAgICBjb25zdCBjZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3ksIDAsIGN4LCBjeSwgY3IpO1xuICAgICAgICBjZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobSl9LDAuNylgKTsgY2cuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2IobSl9LDAuMzUpYCk7IGNnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihtKX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNnO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCArIGR4LCBjeSwgY3IsIGNyICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQgKiAwLjYsIHIgPSAxICsgcm5kKCkgKiAzO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihtKX0sJHswLjM1ICsgcm5kKCkgKiAwLjV9KWA7XG4gICAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGdyYWluLiBgZ3JhaW5gL2BncmFpbkFscGhhYCBkZWZhdWx0IHRvIHRoZSBvcmlnaW5hbCAxNTAwIGF0IDAuMTIsIHNvIG5vIGFscmVhZHktZW1pdHRlZCBwcm9wXG4gICAgLy8gY2hhbmdlczsgYSB0aWxlIHN0cmV0Y2hlZCBvdmVyIGEgV0hPTEUgcHJvcCAodXZTY2FsZSA+IGl0cyBoZWlnaHQpIHNhbXBsZXMgb25seSB0aGUgZnJhY3Rpb25cbiAgICAvLyBvZiB0aGUgdGlsZSB3aWR0aCBoZWlnaHRVViBmb2xkcyBvbnRvIGl0LCBhbmQgbmVlZHMgdGhlIGNvdW50IHJhaXNlZCB0byBrZWVwIHRoZSBzYW1lIGRlbnNpdHkuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAxNTAwKTsgaSsrKSB7XG4gICAgICBjb25zdCBsbyA9IG8uZ3JhaW5MbyA/PyAyMDA7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHYgPSBsbyArIE1hdGgucm91bmQocm5kKCkgKiAoMjU1IC0gbG8pKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwke28uZ3JhaW5BbHBoYSA/PyAwLjEyfSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMS41LCAxLjUpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBDSEFJTi1MSU5LIHRpbGU6IGEgZGlhbW9uZCB3aXJlIGxhdHRpY2UgZHJhd24gb3BhcXVlIG92ZXIgYSBUUkFOU1BBUkVOVCBncm91bmQsIGJvdW5kIGFzIG1hcFxuICogIG9uIGFuIGFscGhhLXRlc3RlZCBtYXRlcmlhbCBzbyB0aGUgY2VsbHMgYXJlIG9wZW4uIE9uZSB0aWxlIGlzIG9uZSBkaWFtb25kIGNlbGw7IHRoZSBwYW5lJ3NcbiAqICBVVnMgcmVwZWF0IGl0IGF0IHRoZSByZWFsIG1lc2ggcGl0Y2guIGB3aXJlYCBpcyB0aGUgd2lyZSB3aWR0aCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBjZWxsLiAqL1xuZnVuY3Rpb24gY2hhaW5saW5rVGlsZShzaXplOiBudW1iZXIsIHdpcmU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IE1hdGgubWF4KDEuNSwgd2lyZSAqIHMpO1xuICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICBjb25zdCB2ID0gMTUwICsgTWF0aC5yb3VuZChybmQoKSAqIDMwKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiKCR7dn0sJHt2ICsgMn0sJHt2ICsgNH0pYDtcbiAgICAvLyB0d28gZGlhZ29uYWxzIHRocm91Z2ggdGhlIHRpbGUsIG9mZnNldCBzbyB0aGUgd3JhcCBtYWtlcyBhIGNvbnRpbnVvdXMgZGlhbW9uZCBsYXR0aWNlXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgMCk7IGN0eC5saW5lVG8ocywgcyk7XG4gICAgY3R4Lm1vdmVUbyhzLCAwKTsgY3R4LmxpbmVUbygwLCBzKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gdGhlIGtudWNrbGUgd2hlcmUgd2lyZXMgdHdpc3Qgcm91bmQgZWFjaCBvdGhlciwgYXQgdGhlIHR3byBjcm9zc2luZ3Mgb24gdGhlIHRpbGUgZWRnZXNcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3YgLSAyMH0sJHt2IC0gMTh9LCR7diAtIDE2fSlgO1xuICAgIGZvciAoY29uc3QgW3gsIHldIG9mIFtbMCwgMF0sIFtzLCAwXSwgWzAsIHNdLCBbcywgc10sIFtzIC8gMiwgcyAvIDJdXSkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHksIGN0eC5saW5lV2lkdGggKiAwLjksIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogQkFNQk9PIFNUUklQIHRpbGU6IHZlcnRpY2FsIHNwbGl0LWJhbWJvbyBzdHJpcHMgd2l0aCBwYWxlIGN1bG0gZmFjZXMsIGRhcmsgam9pbnRzIGJldHdlZW4gdGhlbVxuICogIGFuZCBhIG5vZGUgbGluZSBvciB0d28gLS0gYSBtdWx0aXBsaWVyIG9uIHRoZSBtZWFzdXJlZCBzaWx2ZXItZ3JleS4gKi9cbmZ1bmN0aW9uIGJhbWJvb1RpbGUoc2l6ZTogbnVtYmVyLCBzdHJpcHM6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBzdyA9IHMgLyBzdHJpcHM7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBzdHJpcHM7IGIrKykge1xuICAgICAgY29uc3QgdG9uZSA9IDAuODAgKyBybmQoKSAqIDAuMiwgdiA9IE1hdGgucm91bmQoMjU1ICogdG9uZSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7diAtIDJ9LCR7diAtIDZ9KWA7IGN0eC5maWxsUmVjdChiICogc3csIDAsIHN3LCBzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1MCw0MiwzNCwwLjYpJzsgY3R4LmZpbGxSZWN0KGIgKiBzdywgMCwgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSwgcyk7XG4gICAgICAvLyBhIGhpZ2hsaWdodCBkb3duIHRoZSBjdWxtJ3Mgcm91bmRcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjEwKSc7IGN0eC5maWxsUmVjdChiICogc3cgKyBzdyAqIDAuMzUsIDAsIHN3ICogMC4yNSwgcyk7XG4gICAgICAvLyBub2RlIHJpbmdzXG4gICAgICBjb25zdCBuID0gMSArIE1hdGguZmxvb3Iocm5kKCkgKiAyKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7IGNvbnN0IHkgPSBybmQoKSAqIHM7IGN0eC5maWxsU3R5bGUgPSAncmdiYSg3MCw2MCw0OCwwLjQ1KSc7IGN0eC5maWxsUmVjdChiICogc3csIHksIHN3LCBNYXRoLm1heCgxLCBzICogMC4wMDgpKTsgfVxuICAgICAgLy8gZmluZSBncmFpbiBsaW5lc1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA2OyBrKyspIHsgY29uc3QgeCA9IGIgKiBzdyArIHJuZCgpICogc3c7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSg4MCw3MCw1OCwkezAuMDUgKyBybmQoKSAqIDAuMX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpOyB9XG4gICAgfVxuICAgIC8vIG1vdWxkIHNwZWNrbGVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwMDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7IGN0eC5maWxsU3R5bGUgPSAncmdiYSgzMCwyOCwyNCwwLjE4KSc7IGN0eC5maWxsUmVjdCh4LCB5LCAxICsgcm5kKCkgKiAyLCAxICsgcm5kKCkgKiAyKTsgfVxuICB9KTtcbn1cblxuLyoqIFBPU1RFUiB0aWxlIGZvciBhIGhvYXJkaW5nOiB0b3JuIHBhc3RlLXVwIHNoZWV0cyBhbmQgYSBzcHJheSBzdGVuY2lsIG92ZXIgYSBUUkFOU1BBUkVOVCBncm91bmQsXG4gKiAgYm91bmQgb24gYW4gYWxwaGEtdGVzdGVkIHBhbmUgYSBmZXcgbWlsbGltZXRyZXMgcHJvdWQgb2YgdGhlIHNoZWV0LiBgbGluZXNgIGFyZSB0aGUgc3RlbmNpbFxuICogIHN0cmluZ3M7IGEgcHJpbnRlZCBncmFwaGljIGlzIGV4YWN0bHkgdGhlIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyBjYXNlLiAqL1xuZnVuY3Rpb24gcG9zdGVyVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbGluZXM6IHN0cmluZ1tdKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gcGFzdGUtdXBzOiBvdmVybGFwcGluZyBvZmYtd2hpdGUgcmVjdGFuZ2xlcyB3aXRoIHRvcm4gZWRnZXMgYW5kIGZhaW50IHByaW50IGxpbmVzXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMzApLCB5ID0gcyAqICgwLjE1ICsgcm5kKCkgKiAwLjQ1KSwgdyA9IHMgKiAoMC4xNCArIHJuZCgpICogMC4xNiksIGggPSBzICogKDAuMTggKyBybmQoKSAqIDAuMjIpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7MjI1ICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKX0sJHsyMjIgKyBNYXRoLnJvdW5kKHJuZCgpICogMTgpfSwkezIxMCArIE1hdGgucm91bmQocm5kKCkgKiAyMCl9LDAuOTYpYDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgIGNvbnN0IG4gPSA5O1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKSBjdHgubGluZVRvKHggKyB3ICogaSAvIG4sIHkgKyAocm5kKCkgLSAwLjUpICogaCAqIDAuMDgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKSBjdHgubGluZVRvKHggKyB3ICsgKHJuZCgpIC0gMC41KSAqIHcgKiAwLjA4LCB5ICsgaCAqIGkgLyBuKTtcbiAgICAgIGZvciAobGV0IGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIGN0eC5saW5lVG8oeCArIHcgKiBpIC8gbiwgeSArIGggKyAocm5kKCkgLSAwLjUpICogaCAqIDAuMTIpO1xuICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkgY3R4LmxpbmVUbyh4ICsgKHJuZCgpIC0gMC41KSAqIHcgKiAwLjA4LCB5ICsgaCAqIGkgLyBuKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCw0MCw0NSwwLjU1KSc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykgY3R4LmZpbGxSZWN0KHggKyB3ICogMC4xLCB5ICsgaCAqICgwLjIgKyBpICogMC4xKSwgdyAqICgwLjMgKyBybmQoKSAqIDAuNSksIE1hdGgubWF4KDEsIHMgKiAwLjAwNikpO1xuICAgIH1cbiAgICAvLyBzcHJheSBzdGVuY2lsLCBzbGlnaHRseSBzb2Z0IGFuZCB1bmV2ZW5cbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjAsMjAsMjIsMC44OCknO1xuICAgIGN0eC5mb250ID0gYGJvbGQgJHtNYXRoLnJvdW5kKHMgKiAwLjA3KX1weCBzYW5zLXNlcmlmYDtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHMgKiAwLjQwLCB5ID0gcyAqICgwLjQ0ICsgaSAqIDAuMTMpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAzOyBrKyspIHsgY3R4Lmdsb2JhbEFscGhhID0gMC42OyBjdHguZmlsbFRleHQobGluZXNbaV0sIHggKyAocm5kKCkgLSAwLjUpICogMywgeSArIChybmQoKSAtIDAuNSkgKiAzKTsgfVxuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogU1RSSVBFIHRpbGU6IGFsdGVybmF0aW5nIGNvbG91ciBiYW5kcyBhbG9uZyB1IChhbiBhd25pbmcpLCB3aXRoIGEgc29mdCBncmltZSBtdWx0aXBseSBzbyB0aGUgY2xvdGhcbiAqICByZWFkcyB3b3JuIHJhdGhlciB0aGFuIHByaW50ZWQuIGBhYC9gYmAgYXJlIHRoZSB0d28gYmFuZCBjb2xvdXJzIGFzIFtyLGcsYl0gMC0xLiBCb3VuZCBhcyBtYXAgb24gYVxuICogIFdISVRFIG1hdGVyaWFsIHNvIHRoZSBiYW5kcyBjYXJyeSB0aGUgd2hvbGUgYWxiZWRvLiAqL1xuLy8gYG9gIGlzIG9wdGlvbmFsIGFuZCBldmVyeSBmaWVsZCBkZWZhdWx0cyB0byB0aGUgcHJldmlvdXMgaGFyZC1jb2RlZCBiZWhhdmlvdXIsIHNvIG5vIHByb3AgdGhhdFxuLy8gZG9lcyBub3QgcGFzcyBpdCBjaGFuZ2VzLiBgc211ZGdlc2AgYW5kIGBzcGVja3NgIGV4aXN0IGJlY2F1c2UgYnJ1c2hlZCBTVEVFTCB3YW50cyB0aGUgYmFuZGluZ1xuLy8gd2l0aG91dCB0aGUgZGlydDogdGhlIDQwIHJhZGlhbCBzbXVkZ2VzIGFuZCAxMjAwIGxpZ2h0IHNwZWNrcyByZWFkIGFzIG1vdWxkIG9uIGEgY2xlYW4gc2F0aW5cbi8vIHN1cmZhY2UsIHdoaWNoIGlzIHRoZSBvcHBvc2l0ZSBvZiB3aGF0IGEgc3RyaXBlIHRpbGUgaXMgZm9yIHRoZXJlLlxuZnVuY3Rpb24gc3RyaXBlVGlsZShzaXplOiBudW1iZXIsIGJhbmRzOiBudW1iZXIsIGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBvOiBhbnkgPSB7fSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX0pYDtcbiAgICBjb25zdCB3ID0gcyAvIGJhbmRzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFuZHM7IGkrKykgeyBjdHguZmlsbFN0eWxlID0gcmdiKGkgJSAyID8gYiA6IGEpOyBjdHguZmlsbFJlY3QoTWF0aC5mbG9vcihpICogdyksIDAsIE1hdGguY2VpbCh3KSArIDEsIHMpOyB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zbXVkZ2VzID8/IDQwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gNCArIHJuZCgpICogcyAqIDAuMDgsIGFsID0gMC4wNiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDE1MCwxNDAsMTI1LCR7YWx9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTUwLDE0MCwxMjUsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zcGVja3MgPz8gMTIwMCk7IGkrKykgeyBjb25zdCB2ID0gMjAwICsgTWF0aC5yb3VuZChybmQoKSAqIDU1KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMTApYDsgY3R4LmZpbGxSZWN0KHJuZCgpICogcywgcm5kKCkgKiBzLCAxLjUsIDEuNSk7IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBTZWFtbGVzcyBhcm91bmQtYnktdXAgVVZzIGZvciBhIExhdGhlR2VvbWV0cnk6IHUgZnJvbSB0aGUgU0VHTUVOVCBpbmRleCAodGhlIGxhdGhlIG9yZGVycyBpdHNcbiAqICB2ZXJ0aWNlcyBzZWdtZW50LW1ham9yLCBpbmRleCA9IHNlZyAqIHBvaW50Q291bnQgKyBwb2ludCksIHNvIHRoZSBkdXBsaWNhdGVkIHNlYW0gY29sdW1uIHJlYWRzXG4gKiAgdSA9IHJlcGVhdHMgZXhhY3RseSBhbmQgUmVwZWF0V3JhcHBpbmcgY2xvc2VzIGl0LiBgc2NhbGVgIGlzIHRoZSB0aWxlIHNpemUgaW4gbWV0cmVzOyB0aGVcbiAqICBhcm91bmQtcmVwZWF0IGNvdW50IGlzIHJvdW5kZWQgc28gdGhlIHRpbGUgbWVldHMgaXRzZWxmLCBmcm9tIHRoZSBwcm9maWxlJ3Mgd2lkZXN0IHJhZGl1cy4gKi9cbmZ1bmN0aW9uIGxhdGhlVVYoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHBvaW50Q291bnQ6IG51bWJlciwgc2VnOiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIHZTY2FsZSA9IHNjYWxlLCB2MCA9IDApOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBsZXQgck1heCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSByTWF4ID0gTWF0aC5tYXgock1heCwgTWF0aC5oeXBvdChwLmdldFgoaSksIHAuZ2V0WihpKSkpO1xuICBjb25zdCByZXAgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKDIgKiBNYXRoLlBJICogck1heCAvIHNjYWxlKSk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgcyA9IE1hdGguZmxvb3IoaSAvIHBvaW50Q291bnQpO1xuICAgIHV2W2kgKiAyXSA9IChzIC8gc2VnKSAqIHJlcDsgdXZbaSAqIDIgKyAxXSA9IChwLmdldFkoaSkgLSB2MCkgLyB2U2NhbGU7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xufVxuXG4vKiogRVhQT1NFRC1BR0dSRUdBVEUgdGlsZTogYSBkYXJrIG1vcnRhciBncm91bmQgcGFja2VkIHdpdGggcm91bmRlZCBwZWJibGVzIGluIGEgbWVhc3VyZWQgcGFsZXR0ZSxcbiAqICBlYWNoIGRyYXduIGF0IG5pbmUgd3JhcHBlZCBvZmZzZXRzIHNvIHRoZSB0aWxlIGlzIHNlYW1sZXNzLiBgby5wYWxldHRlYCBpcyBhIGxpc3Qgb2YgW3IsZyxiXVxuICogIHJhdGlvcyBhZ2FpbnN0IHRoZSBtYXRlcmlhbCBjb2xvdXIsIGBvLmdyb3VuZGAgdGhlIG1vcnRhciByYXRpbywgYG8uY291bnRgIHRoZSBwZWJibGUgY291bnQuICovXG5mdW5jdGlvbiBwZWJibGVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgcmdiKCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9KWA7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHJnYihvLmdyb3VuZCA/PyBbMC40NSwgMC40MiwgMC4zOF0pOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgcGFsOiBudW1iZXJbXVtdID0gby5wYWxldHRlID8/IFtbMC44NSwgMC43OCwgMC42Nl0sIFswLjcyLCAwLjYyLCAwLjUwXSwgWzAuNjAsIDAuNTgsIDAuNTVdLCBbMC45MCwgMC44NiwgMC44MF1dO1xuICAgIGNvbnN0IG4gPSBvLmNvdW50ID8/IDkwMCwgck1pbiA9IHMgKiAoby5yTWluID8/IDAuMDEyKSwgck1heCA9IHMgKiAoby5yTWF4ID8/IDAuMDI4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgcnggPSByTWluICsgcm5kKCkgKiAock1heCAtIHJNaW4pLCByeSA9IHJ4ICogKDAuNiArIHJuZCgpICogMC41KSwgYSA9IHJuZCgpICogTWF0aC5QSTtcbiAgICAgIGNvbnN0IGMgPSBwYWxbTWF0aC5mbG9vcihybmQoKSAqIHBhbC5sZW5ndGgpXSwgayA9IDAuODUgKyBybmQoKSAqIDAuMztcbiAgICAgIC8vIENPTlRBQ1QgU0hBRE9XIGZpcnN0LCBvZmZzZXQgZG93bi1yaWdodCBhbmQgYSB0b3VjaCBsYXJnZXIsIHNvIHdoYXQgc3Vydml2ZXMgYXJvdW5kIGVhY2hcbiAgICAgIC8vIHN0b25lIGlzIHRoZSBkYXJrIG1vcnRhciBjcmVzY2VudCB0aGF0IG1ha2VzIGEgcGFja2VkIGFnZ3JlZ2F0ZSByZWFkIGFzIHN0b25lcyByYXRoZXIgdGhhblxuICAgICAgLy8gYXMgb3ZlcmxhcHBpbmcgZmxhdCBkaXNjcy4gYHNoYWRlYCBpcyBhIHJhdGlvIGFnYWluc3QgdGhlIG1vcnRhciBncm91bmQ7IDAga2VlcHMgdGhlIG9sZFxuICAgICAgLy8gbG9vayBmb3IgZXZlcnkgdGlsZSBhbHJlYWR5IHNoaXBwZWQuXG4gICAgICBpZiAoby5zaGFkZSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gcmdiKChvLmdyb3VuZCA/PyBbMC40NSwgMC40MiwgMC4zOF0pLm1hcCgodikgPT4gdiAqIG8uc2hhZGUpKTtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHggKyByeCAqIDAuMTYsIHkgKyBkeSArIHJ5ICogMC4yMiwgcnggKiAxLjEsIHJ5ICogMS4xLCBhLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5maWxsU3R5bGUgPSByZ2IoYy5tYXAoKHYpID0+IE1hdGgubWluKDEsIHYgKiBrKSkpO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgcngsIHJ5LCBhLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIC8vIGEgaGlnaGxpZ2h0IGNyZXNjZW50IG9uIHRoZSBsaXQgc2lkZSBzbyBlYWNoIHN0b25lIHJlYWRzIGFzIGEgYnVtcFxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDI1NSwyNTUsMjU1LCR7by5nbG9zcyA/PyAwLjE4fSlgO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHggLSByeCAqIDAuMiwgeSArIGR5IC0gcnkgKiAwLjI1LCByeCAqIDAuNSwgcnkgKiAwLjQsIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBUWVJFIFRSRUFEIHRpbGUgZm9yIGEgbGF0aGUgY2FycnlpbmcgYGN5bFVWYDogdSBydW5zIEFST1VORCB0aGUgdHlyZSBhbmQgdiBVUCBpdCwgc28gdHJlYWQgc2xvdHMgYXJlXG4gKiAgYmFycyBhdCBjb25zdGFudCB1IGFuZCB0aGUgY2lyY3VtZmVyZW50aWFsIGdyb292ZXMgYXJlIGxpbmVzIGF0IGNvbnN0YW50IHYuIERyYXduIGFzIHJhdGlvcyBvbiB3aGl0ZVxuICogIGFuZCBtdWx0aXBsaWVkIGludG8gdGhlIChsaWZ0ZWQpIHJ1YmJlciBjb2xvdXI7IGBvLmdyb292ZWAgaXMgdGhlIGRhcmtlc3QgcmF0aW8sIGtlcHQgYWJvdmUgdGhlXG4gKiAgbHVtYS01OCBob2xlIGJhbmQgYnkgdGhlIGNhbGxlci4gYG8uc2xvdHNgIGJhcnMgcGVyIHRpbGUsIGBvLnJpbmdzYCBjaXJjdW1mZXJlbnRpYWwgbGluZXMuICovXG5mdW5jdGlvbiB0cmVhZFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjgwLCBzbG90cyA9IG8uc2xvdHMgPz8gMiwgcmluZ3MgPSBvLnJpbmdzID8/IDI7XG4gICAgLy8gYGJhc2VgIGlzIHRoZSB0b25lIHRoZSBVTi1ncmltZWQgcGFydCBvZiB0aGUgdGlsZSBjYXJyaWVzLCBkZWZhdWx0aW5nIHRvIHdoaXRlIC0tIGkuZS4gdG9cbiAgICAvLyBcImxlYXZlIHRoZSB2ZXJ0ZXggY29sb3VyIGFsb25lXCIsIHdoaWNoIGlzIGV2ZXJ5IGV4aXN0aW5nIGNhbGxlci4gSXQgZXhpc3RzIGZvciBFTlZFTE9QRVxuICAgIC8vIFJFLUJBU0lORzogYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4sIHNvIGEgcGFydCB0aGF0IG11c3QgcmVhZCBjbGVhbiBvcmFuZ2UgaW4gb25lIHBsYWNlIGFuZFxuICAgIC8vIGdyZXkgcm9hZCBncmltZSBpbiBhbm90aGVyIGNhbm5vdCBkbyBpdCBmcm9tIGEgc2luZ2xlIHZlcnRleCBjb2xvdXIsIGJlY2F1c2UgdGhlIGdyaW1lIGlzXG4gICAgLy8gSElHSEVSIGluIGJsdWUgdGhhbiB0aGUgb3JhbmdlIGlzLiBUaGUgdmVydGV4IGNvbG91ciBiZWNvbWVzIHRoZSBwZXItY2hhbm5lbCBtYXhpbXVtIG9mIGJvdGhcbiAgICAvLyBhbmQgdGhpcyBmaWxsIHBhaW50cyB0aGUgY2xlYW4gdG9uZSBiYWNrIG91dCBvZiBpdC5cbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGNvbnN0IGd2ID0gTWF0aC5yb3VuZCgyNTUgKiBncm9vdmUpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9KWA7XG4gICAgY29uc3QgcGl0Y2ggPSBzIC8gc2xvdHMsIHcgPSBwaXRjaCAqIChvLnNsb3RXaWR0aCA/PyAwLjE2KTtcbiAgICAvLyB0cmVhZCBzbG90cyBzcGFuIHRoZSBiYW5kIGJldHdlZW4gdGhlIHR3byBlZGdlIHNob3VsZGVycyAodiAwLjEyLi4wLjg4IG9mIHRoZSB0aWxlKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xvdHM7IGkrKykgeyBjb25zdCB4ID0gaSAqIHBpdGNoICsgcGl0Y2ggKiAwLjQgKyAocm5kKCkgLSAwLjUpICogcGl0Y2ggKiAwLjE7IGN0eC5maWxsUmVjdCh4LCBzICogMC4xMiwgdywgcyAqIDAuNzYpOyBjdHguZmlsbFJlY3QoeCAtIHMsIHMgKiAwLjEyLCB3LCBzICogMC43Nik7IH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpbmdzOyBpKyspIHsgY29uc3QgeSA9IHMgKiAoMC4yICsgMC42ICogKGkgKyAwLjUpIC8gcmluZ3MpOyBjdHguZmlsbFJlY3QoMCwgeSAtIDEuNSwgcywgMyk7IH1cbiAgICAvLyBzaWRld2FsbCBzaGVlbjogYSBzb2Z0IGxpZ2h0ZXIgd2FzaCBzbyB0aGUgcnViYmVyIGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjEyKSwgdiA9IDIzNSArIE1hdGgucm91bmQocm5kKCkgKiAyMCk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTsgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuNSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBPTEQgVFlSRSB0aWxlOiBUV08gdHlyZSBoZWlnaHRzIHRhbGwgYnkgYG8ucGl0Y2hgIG1ldHJlcyBhcm91bmQgKGN5bFVWKS4gVGhlIHVwcGVyIGhhbGYgKHYgMC41LTEpXG4gKiAgaXMgYSB0cmVhZGVkIHR5cmUsIHRoZSBsb3dlciBoYWxmICh2IDAtMC41KSBhIHdvcm4gU0xJQ0sgd2l0aCBjaXJjdW1mZXJlbnRpYWwgZ3Jvb3ZlcyBhbmQgc2hvcnRcbiAqICBzaG91bGRlciBzaXBlcyBvbmx5LCBzbyBhIHN0YWNrIG1peGVzIGJhbGQgYW5kIHRyZWFkZWQgdHlyZXMgb2ZmIG9uZSBjYW52YXMgYnkgdjAuIERyYXduIGFzIFJBVElPU1xuICogIGFnYWluc3QgdGhlIHZlcnRleC1jb2xvdXJlZCBydWJiZXIgYXQgYGJhc2VgICgyMDAvMjU1IC0+IHZlcnRleCB0b25lcyBhcmUgYXV0aG9yZWQgMS4yNzV4IHRoZVxuICogIGludGVuZGVkIGFsYmVkbyBzbyBkdXN0IGFuZCBzY3VmZnMgY2FuIGdvIEJSSUdIVEVSIHRoYW4gdGhlIHJ1YmJlciB1bmRlciBhIG11bHRpcGx5IGNhbnZhcykuXG4gKiAgUm93cyBhcmUgaGVpZ2h0czogbG93ZXIgc2lkZXdhbGwsIHRyZWFkIGJhbmQgKHYgYG8uYmFuZFswXWAuLmBvLmJhbmRbMV1gIG9mIHRoZSBzdHJpcCksIHVwcGVyXG4gKiAgc2lkZXdhbGwgd2l0aCBiZWFkIHJpbmdzIGFuZCBtb3VsZCBsaW5lcy4gV2VhcjogYSB3YXJtIGR1c3Qgd2FzaCBvbiB0aGUgbG93ZXIgc2hvdWxkZXIsIGdyZXkgc2N1ZmZzXG4gKiAgb24gYm90aCBzaG91bGRlcnMsIGR1c3QgY2F1Z2h0IGluIHRoZSBjdXRzLCBncmFpbiBvdmVyIGV2ZXJ5dGhpbmcuICovXG5mdW5jdGlvbiB0eXJlVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gMjAwLCBiYW5kID0gby5iYW5kID8/IFswLjI0LCAwLjc2XSwgZ3Jvb3ZlID0gby5ncm9vdmUgPz8gMC40NTtcbiAgICBjb25zdCBndiA9IE1hdGgucm91bmQoYmFzZSAqIGdyb292ZSksIHJ2ID0gTWF0aC5yb3VuZChiYXNlICogMC43KSwgbXYgPSBNYXRoLnJvdW5kKGJhc2UgKiAwLjkpO1xuICAgIGNvbnN0IGR1c3QgPSBvLmR1c3QgPz8gWzIzMiwgMjE0LCAxOTBdO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7YmFzZX0sJHtiYXNlfSwke2Jhc2V9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMgKiBzIC8gNjsgaSsrKSB7IGNvbnN0IHYgPSBiYXNlICsgTWF0aC5yb3VuZCgocm5kKCkgLSAwLjUpICogMjIpOyBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDIsIDIpOyB9XG4gICAgLy8gb25lIHR5cmUgc3RyaXAgYmV0d2VlbiBjYW52YXMgcm93cyB5YSAodG9wKSBhbmQgeWIgKGJvdHRvbSk7IGNhbnZhcyB5IGdyb3dzIERPV04sIHYgZ3Jvd3MgVVBcbiAgICBjb25zdCBzdHJpcCA9ICh5YTogbnVtYmVyLCB5YjogbnVtYmVyLCB0cmVhZGVkOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCBoID0geWIgLSB5YSwgYjAgPSB5YSArIGggKiAoMSAtIGJhbmRbMV0pLCBiMSA9IHlhICsgaCAqICgxIC0gYmFuZFswXSk7XG4gICAgICBjb25zdCBuZyA9IG8uZ3Jvb3ZlcyA/PyAzLCBndyA9IGggKiAwLjAyNDtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9KWA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5nOyBpKyspIHsgY29uc3QgeSA9IGIwICsgKGIxIC0gYjApICogKGkgKyAxKSAvIChuZyArIDEpOyBjdHguZmlsbFJlY3QoMCwgeSAtIGd3IC8gMiwgcywgZ3cpOyB9XG4gICAgICBjb25zdCBucyA9IG8uc2lwZXMgPz8gMiwgdyA9IHMgKiAoby5zaXBlV2lkdGggPz8gMC4wNSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8PSBuZzsgaysrKSB7XG4gICAgICAgIGNvbnN0IHkwID0gayA9PT0gMCA/IGIwIDogYjAgKyAoYjEgLSBiMCkgKiBrIC8gKG5nICsgMSkgKyBndyAvIDIsIHkxID0gayA9PT0gbmcgPyBiMSA6IGIwICsgKGIxIC0gYjApICogKGsgKyAxKSAvIChuZyArIDEpIC0gZ3cgLyAyO1xuICAgICAgICAvLyBhIHNsaWNrIGtlZXBzIG9ubHkgU0hPUlQgc2lwZXMgYXQgdGhlIHR3byBzaG91bGRlciByb3dzLCBjdXQgaW4gZnJvbSB0aGUgYmFuZCBlZGdlXG4gICAgICAgIGNvbnN0IG91dGVyID0gayA9PT0gMCB8fCBrID09PSBuZztcbiAgICAgICAgaWYgKCF0cmVhZGVkICYmICFvdXRlcikgY29udGludWU7XG4gICAgICAgIGNvbnN0IHlzMCA9IHRyZWFkZWQgPyB5MCA6IChrID09PSAwID8geTAgOiB5MSAtICh5MSAtIHkwKSAqIDAuNDUpLCB5czEgPSB0cmVhZGVkID8geTEgOiAoayA9PT0gMCA/IHkwICsgKHkxIC0geTApICogMC40NSA6IHkxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuczsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgeCA9ICgoaSArIDAuNSkgLyBucyArIChrICUgMikgKiAwLjUgLyBucykgKiBzICsgKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA2LCBzbCA9IChybmQoKSAtIDAuNSkgKiBzICogMC4wODtcbiAgICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBkeCwgeXMwKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcgKyBzbCwgeXMxKTsgY3R4LmxpbmVUbyh4ICsgZHggKyBzbCwgeXMxKTsgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHNob3VsZGVyIHN0ZXAgYXQgdGhlIHRvcCBvZiB0aGUgYmFuZCwgYmVhZCByaW5ncyBhbmQgbW91bGQgbGluZXMgb24gdGhlIHNpZGV3YWxsc1xuICAgICAgY29uc3Qgc2ggPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgYjAgLSBoICogMC4wMywgMCwgYjAgKyBoICogMC4wMik7IHNoLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2d2fSwke2d2fSwke2d2fSwwKWApOyBzaC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtndn0sJHtndn0sJHtndn0sMC40NSlgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBzaDsgY3R4LmZpbGxSZWN0KDAsIGIwIC0gaCAqIDAuMDMsIHMsIGggKiAwLjA1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cnZ9LCR7cnZ9LCR7cnZ9KWA7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjA0NSwgcywgaCAqIDAuMDEyKTsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuOTQsIHMsIGggKiAwLjAxMik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke212fSwke212fSwke212fSlgOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC4xMSwgcywgMik7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjg4LCBzLCAyKTtcbiAgICAgIC8vIHdlYXI6IHdhcm0gcm9hZCBkdXN0IG9uIHRoZSBsb3dlciBzaG91bGRlciBhbmQgc2lkZXdhbGwsIGdyZXkgc2N1ZmZzIG9uIGJvdGggc2hvdWxkZXJzXG4gICAgICBjb25zdCBkZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiwgMCwgeWEgKyBoICogMC42KTsgZGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LCR7by5kdXN0QWxwaGEgPz8gMC4zNX0pYCk7IGRnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2R1c3RbMF19LCR7ZHVzdFsxXX0sJHtkdXN0WzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGRnOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC42LCBzLCBoICogMC40KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc2N1ZmZzID8/IDE0KTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSA8IDAuNSA/IGIwICsgKHJuZCgpIC0gMC4zKSAqIGggKiAwLjA4IDogYjEgKyAocm5kKCkgLSAwLjcpICogaCAqIDAuMDgsIHIgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDUpLCB2ID0gMjI1ICsgTWF0aC5yb3VuZChybmQoKSAqIDI1KTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7IGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjUpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSwgciAqIDIuMiwgciAqIDAuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2xpZ2h0ZXInO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBiMCArIHJuZCgpICogKGIxIC0gYjApLCB2ID0gNiArIE1hdGgucm91bmQocm5kKCkgKiAxNCk7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHtNYXRoLnJvdW5kKHYgKiAwLjkpfSwke01hdGgucm91bmQodiAqIDAuNzUpfSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMiArIHJuZCgpICogNiwgMiArIHJuZCgpICogMyk7IH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH07XG4gICAgc3RyaXAoMCwgcyAvIDIsIHRydWUpOyAgICAgIC8vIHYgMC41Li4xOiB0cmVhZGVkXG4gICAgc3RyaXAocyAvIDIsIHMsIGZhbHNlKTsgICAgIC8vIHYgMC4uMC41OiBzbGlja1xuICB9KTtcbn1cblxuLyoqIEEgdGFwZXJlZCBib3g6IEJveEdlb21ldHJ5KDEsIGgsIDEpIHdob3NlIHgveiBhcmUgc2NhbGVkIHBlciB2ZXJ0ZXggYnkgdGhlIGZvb3RwcmludCBpbnRlcnBvbGF0ZWRcbiAqICBmcm9tICh3MCwgZDApIGF0IHRoZSBib3R0b20gdG8gKHcxLCBkMSkgYXQgdGhlIHRvcC4gTm9ybWFscyByZWNvbXB1dGVkIHNvIHRoZSBzbGFudGVkIGZhY2VzIHNoYWRlXG4gKiAgZmxhdC4gYGJgID0gW2N4LCB5Qm90dG9tLCBjeiwgdzAsIGQwLCB3MSwgZDEsIGhdLiAqL1xuZnVuY3Rpb24gZnJ1c3R1bShiOiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgW2N4LCB5MCwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXSA9IGI7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgaCwgMSk7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gKHAuZ2V0WShpKSArIGggLyAyKSAvIGg7XG4gICAgcC5zZXRYKGksIHAuZ2V0WChpKSAqICh3MCArICh3MSAtIHcwKSAqIHQpKTsgcC5zZXRaKGksIHAuZ2V0WihpKSAqIChkMCArIChkMSAtIGQwKSAqIHQpKTtcbiAgfVxuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIGcudHJhbnNsYXRlKGN4LCB5MCArIGggLyAyLCBjeik7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEhPVC1ESVAgR0FMVkFOSVNFRCBaSU5DOiBjbG91ZHkgdG9uZSBkcmlmdCwgY3J5c3RhbGxpbmUgU1BBTkdMRSwgYW5kIHJ1c3QgYmxlZWRpbmcgZnJvbSB0aGUgd2VsZHMuXG4gKlxuICogVGhpcyBleGlzdHMgYmVjYXVzZSBgZ3JpbWVUaWxlYCBtZWFzdXJhYmx5IGNhbm5vdCBzYXkgYGdhbHZhbmlzZWRgLiBNZWFzdXJlZCBvbiB0aGUgY3Jvd2RcbiAqIGJhcnJpZXIncyBwbGF0ZSBhZ2FpbnN0IGl0cyBmaXJzdCBidWlsZCwgb3ZlciBtYXRjaGVkIGZsYXQgcGFuZWwgY3JvcHM6IHRoZSBwbGF0ZSByZWFkcyBtZWFuIGx1bWFcbiAqIDE1Ny0xNTkgd2l0aCBzZCAxMi0xNiBhbmQgYSBwNS4ucDk1IHNwYW4gb2YgfjQyLCBhbmQgdGhlIHJlbmRlciByZWFkIG1lYW4gMTQyIHdpdGggc2QgOC0xMCBhbmQgYVxuICogc3BhbiBvZiB+MjEgLS0gaGFsZiB0aGUgdG9uYWwgdmFyaWF0aW9uLCBhbmQgQ0xJUFBFRCBhdCB0aGUgdG9wIChwNzUgPSBwOTUgPSAxNDcsIHRoZSB0aWxlIGRvaW5nXG4gKiBub3RoaW5nIGF0IGFsbCBvdmVyIHRoZSB1cHBlciBoYWxmIG9mIHRoZSBwYW5lbCkuIEEgZ2FsdmFuaXNlZCBzdXJmYWNlIGlzIG5vdCBkaXJ0IG9uIGdyZXkgcGFpbnQ6XG4gKiBpdCBpcyBhIGZyb3plbiBjcnlzdGFsIHN0cnVjdHVyZSwgYnJpZ2h0IGlycmVndWxhciBzcGFuZ2xlIGZhY2V0cyBzdGFuZGluZyBBQk9WRSB0aGUgYmFzZSB0b25lXG4gKiB3aXRoIGR1bGwgZ3JleS1icm93biBkcmlmdCBiZXR3ZWVuIHRoZW0sIGFuZCB0aGUgYnJpZ2h0ZXN0IGZpZnRoIG9mIGl0IGlzIHRoZSBwYXJ0IHRoYXQgcmVhZHMuXG4gKlxuICogQSBjYW52YXMgdGlsZSBpcyBib3VuZCBhcyBhIE1VTFRJUExZIG1hcCwgc28gaXQgY2FuIG9ubHkgZXZlciBkYXJrZW4gLS0gd2hpY2ggaXMgd2h5IHRoZSBzcHJlYWRcbiAqIHdhcyBvbmUtc2lkZWQuIFRoZSB0aWxlIGlzIHRoZXJlZm9yZSBhdXRob3JlZCBhcm91bmQgYSBgbWlkYCBtdWx0aXBsaWVyIHdlbGwgYmVsb3cgMSBhbmQgdGhlXG4gKiBjYWxsZXIgcmFpc2VzIHRoZSBiYXNlIGFsYmVkbyBieSAxL21pZDogdGhlIHNwYW5nbGUgdGhlbiByZWFjaGVzIGJhY2sgdXAgdG8gdGhlIGJhc2Ugd2hpbGUgdGhlXG4gKiBkcmlmdCBmYWxscyBhd2F5IGJlbG93IGl0LCBhbmQgdGhlIHN1cmZhY2UgdmFyaWVzIGluIEJPVEggZGlyZWN0aW9ucyBhYm91dCBpdHMgbWVhbi4gQXV0aG9yIHRoZVxuICogYWxiZWRvIGZvciB0aGF0LCBvciB0aGUgcHJvcCBzaGlwcyBhcyBicmlnaHQgYXMgdGhlIHNwYW5nbGUgZXZlcnl3aGVyZS5cbiAqXG4gKiBgcnVzdEJhbmRgIGJsZWVkcyBhIGRlc2F0dXJhdGVkIGJyb3duIGRvd24gZnJvbSB0aGUgdG9wIGFuZCB1cCBmcm9tIHRoZSBib3R0b20gLS0gdGhlIHR3byBwbGFjZXMgYVxuICogYmFycmllcidzIHdlbGRzIGFyZSAtLSBiZWNhdXNlIHJ1c3Qgb24gZ2FsdmFuaXNlZCBzdGVlbCBzdGFydHMgYXQgYSB3ZWxkLCB3aGVyZSB0aGUgemluYyB3YXNcbiAqIGJ1cm50IG9mZiwgYW5kIFJVTlMuIFRoZSBwbGF0ZSdzIHJ1c3QgbWVhc3VyZXMgIzgyNmU1OCBvdmVyIDIuMiUgb2YgdGhlIGZyYW1lOiBhIHdhc2gsIG5vdCB0aGVcbiAqIG9yYW5nZSBwb2xrYSBkb3RzIGEgYmxvdGNoIHRpbGUgZ2l2ZXMuXG4gKi9cbmZ1bmN0aW9uIHppbmNUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgbWlkID0gby5taWQgPz8gMC44OCwgbG8gPSBvLmxvID8/IDAuNzQ7XG4gICAgY29uc3QgZyA9ICh2OiBudW1iZXIpID0+IHsgY29uc3QgYiA9IE1hdGgucm91bmQoMjU1ICogdik7IHJldHVybiBgcmdiKCR7Yn0sJHtifSwke2J9KWA7IH07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcobWlkKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGNsb3VkeSBkcmlmdDogYnJvYWQgc29mdCBibG9icyBib3RoIGFib3ZlIGFuZCBiZWxvdyB0aGUgbWlkLCB0aGUgbW90dGxlIGEgZGlwIGxlYXZlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uY2xvdWRzID8/IDYwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA2ICsgcm5kKCkgKiAwLjE2KTtcbiAgICAgIGNvbnN0IHVwID0gcm5kKCkgPCAwLjU7XG4gICAgICBjb25zdCB2ID0gdXAgPyBtaWQgKyAoMSAtIG1pZCkgKiAoMC4zNSArIHJuZCgpICogMC41KSA6IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpO1xuICAgICAgY29uc3QgZ3IgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtvLmNsb3VkQWxwaGEgPz8gMC4yOH0pYCk7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMCwwLDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIFNQQU5HTEU6IGlycmVndWxhciBicmlnaHQgY3J5c3RhbCBmYWNldHMsIGFuZ3VsYXIgcmF0aGVyIHRoYW4gcm91bmQsIHVwIHRvIHRoZSBiYXNlIHRvbmUuXG4gICAgLy8gU21hbGwgYW5kIGRlbnNlIC0tIGxhcmdlIG9uZXMgcmVhZCBhcyBzcGxhc2hlcyBvZiB3aGl0ZSBwYWludCwgd2hpY2ggaXMgdGhlIGZhaWx1cmUgbW9kZSBhXG4gICAgLy8gYmxvdGNoIHRpbGUgZmFsbHMgaW50by5cbiAgICAvLyBDTFVTVEVSRUQsIG5vdCBzY2F0dGVyZWQuIFVuaWZvcm1seSBzcHJlYWQgZmFjZXRzIHJlYWQgYXMgc25vdyBvciBkdXN0IHNwZWNrcyAtLSBpc29sYXRlZFxuICAgIC8vIGJyaWdodCBkb3RzIG9uIGEgc21vb3RoIGZpZWxkLCB3aGljaCBpcyB3aGF0IHRoZSBzZWNvbmQgdHVuaW5nIHNoaXBwZWQgYW5kIHdoYXQgdGhlIHBsYXRlIGhhc1xuICAgIC8vIG5vbmUgb2YuIFJlYWwgc3BhbmdsZSBibG9vbXM6IHRoZSBjcnlzdGFscyBudWNsZWF0ZSB0b2dldGhlciwgc28gdGhlIHN1cmZhY2UgaXMgcGF0Y2hlcyBvZlxuICAgIC8vIGRlbnNlIGJyaWdodCBmYWNldHMgd2l0aCBxdWlldCBncmV5IGJldHdlZW4gdGhlbS4gYHNwYW5nbGVDbHVzdGVyc2AgY2VudHJlcyBjYXJyeVxuICAgIC8vIGAxIC0gc3BhbmdsZUxvb3NlYCBvZiB0aGUgZmFjZXRzLCBkaXN0cmlidXRlZCBzcXJ0LXVuaWZvcm1seSBzbyBlYWNoIGJsb29tIGlzIGRlbnNlIGF0IGl0c1xuICAgIC8vIG1pZGRsZSBhbmQgdGhpbnMgYXQgaXRzIGVkZ2U7IHRoZSByZXN0IHN0YXkgc2NhdHRlcmVkIHNvIHRoZSBmaWVsZCBpcyBuZXZlciBiYWxkLlxuICAgIGNvbnN0IGNsID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogby5zcGFuZ2xlQ2x1c3RlcnMgPz8gMCB9LCAoKSA9PiBbcm5kKCkgKiBzLCBybmQoKSAqIHMsIHMgKiAoMC4wNCArIHJuZCgpICogMC4xMCldKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwYW5nbGUgPz8gNTIwKTsgaSsrKSB7XG4gICAgICBsZXQgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcztcbiAgICAgIGlmIChjbC5sZW5ndGggJiYgcm5kKCkgPiAoby5zcGFuZ2xlTG9vc2UgPz8gMC4yNSkpIHtcbiAgICAgICAgY29uc3QgYyA9IGNsWyhybmQoKSAqIGNsLmxlbmd0aCkgfCAwXSwgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY1syXTtcbiAgICAgICAgeCA9IGNbMF0gKyBNYXRoLmNvcyhhKSAqIGQ7IHkgPSBjWzFdICsgTWF0aC5zaW4oYSkgKiBkO1xuICAgICAgfVxuICAgICAgY29uc3QgciA9IHMgKiAoKG8uc3BhbmdsZU1pbiA/PyAwLjAwNCkgKyBNYXRoLnBvdyhybmQoKSwgMikgKiAoby5zcGFuZ2xlTWF4ID8/IDAuMDEzKSk7XG4gICAgICBjb25zdCB2ID0gbWlkICsgKDEgLSBtaWQpICogKDAuNSArIHJuZCgpICogMC41KTtcbiAgICAgIGNvbnN0IGsgPSA0ICsgTWF0aC5mbG9vcihybmQoKSAqIDMpO1xuICAgICAgY29uc3QgYTAgPSBybmQoKSAqIE1hdGguUEkgKiAyO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7KG8uc3BhbmdsZUFscGhhID8/IDAuMikgKyBybmQoKSAqIChvLnNwYW5nbGVBbHBoYVZhciA/PyAwLjM1KX0pYDtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBhID0gYTAgKyBqICogTWF0aC5QSSAqIDIgLyBrLCByciA9IHIgKiAoMC41NSArIHJuZCgpICogMC43NSk7XG4gICAgICAgICAgY29uc3QgcHggPSB4ICsgZHggKyBNYXRoLmNvcyhhKSAqIHJyLCBweSA9IHkgKyBkeSArIE1hdGguc2luKGEpICogcnIgKiAwLjg7XG4gICAgICAgICAgaWYgKGogPT09IDApIGN0eC5tb3ZlVG8ocHgsIHB5KTsgZWxzZSBjdHgubGluZVRvKHB4LCBweSk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBkYXJrIGRyaXAgc3RyZWFrcyBydW5uaW5nIGRvd246IHdlYXRoZXJpbmcsIGFuZCB3aGF0IGdpdmVzIGEgZmxhdCBwYW5lbCBhIHZlcnRpY2FsIHJlYWRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnN0cmVha3MgPz8gMzApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTAsIHkwID0gcm5kKCkgKiBzICogMC41LCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC43KTtcbiAgICAgIGNvbnN0IHYgPSBsbyArIChtaWQgLSBsbykgKiBybmQoKSAqIDAuNiwgYSA9IDAuMDYgKyBybmQoKSAqIDAuMTQ7XG4gICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LDApYCk7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMC4yNSwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHthfSlgKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5MCwgdywgbGVuKTtcbiAgICB9XG4gICAgLy8gRklORSBHUkFJTiBhbmQgU0NSQVRDSEVTLiBNZWFzdXJlZCBhZ2FpbnN0IHRoZSBwbGF0ZSBhdCBtYXRjaGVkIG1hZ25pZmljYXRpb24sIHRoaXMgaXMgdGhlXG4gICAgLy8gbGF5ZXIgdGhlIGZpcnN0IHR1bmluZyB3YXMgbWlzc2luZyBlbnRpcmVseTogdGhlIHBsYXRlJ3MgemluYyBpcyBzY3JhdGNoeSBhdCAxLTIgcHggZXZlcnl3aGVyZVxuICAgIC8vIC0tIGRyYXdpbmcgbWFya3MsIGhhbmRsaW5nIHNjdWZmcywgdGhlIGNyeXN0YWwgYm91bmRhcmllcyB0aGVtc2VsdmVzIC0tIGFuZCB3aXRob3V0IGl0IHRoZVxuICAgIC8vIGRyaWZ0IGFuZCB0aGUgc3BhbmdsZSByZWFkIGFzIHNvZnQgc25vdyBvbiBzbW9vdGggZ3JleSBob3dldmVyIHdlbGwgdGhlIEhJU1RPR1JBTSBtYXRjaGVzLiBUd29cbiAgICAvLyBjcm9wcyB3aXRoIGlkZW50aWNhbCBtZWFuLCBzZCBhbmQgcGVyY2VudGlsZXMgY2FuIGxvb2sgbm90aGluZyBhbGlrZTsgdGhlIHN0YXRpc3RpYyB0aGF0XG4gICAgLy8gc2VwYXJhdGVzIHRoZW0gaXMgc3BhdGlhbCBmcmVxdWVuY3ksIHNvIHR1bmUgdGhpcyBieSBleWUgYWdhaW5zdCBhIG1hdGNoZWQgY3JvcCwgbm90IGJ5IHNkLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZ3JhaW4gPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIDIsIGggPSAxICsgcm5kKCkgKiAyO1xuICAgICAgY29uc3QgdXAgPSBybmQoKSA8IDAuNTtcbiAgICAgIGNvbnN0IHYgPSB1cCA/IG1pZCArICgxIC0gbWlkKSAqICgwLjQgKyBybmQoKSAqIDAuNikgOiBsbyArIChtaWQgLSBsbykgKiBybmQoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwkezAuMTAgKyBybmQoKSAqIDAuMzB9KWA7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCwgeSArIGR5LCB3LCBoKTtcbiAgICB9XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc2NyYXRjaGVzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4wMDYgKyBybmQoKSAqIDAuMDU1KSwgYSA9IChybmQoKSAtIDAuNSkgKiAwLjcgKyBNYXRoLlBJIC8gMjtcbiAgICAgIGNvbnN0IHVwID0gcm5kKCkgPCAwLjQ1O1xuICAgICAgY29uc3QgdiA9IHVwID8gbWlkICsgKDEgLSBtaWQpICogKDAuNSArIHJuZCgpICogMC41KSA6IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpICogMC44O1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHswLjEwICsgcm5kKCkgKiAwLjI4fSlgO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNyArIHJuZCgpICogMS42O1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBkeCwgeSArIGR5KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgZHggKyBNYXRoLmNvcyhhKSAqIGxlbiwgeSArIGR5ICsgTWF0aC5zaW4oYSkgKiBsZW4pOyBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJVU1QgZnJvbSB0aGUgd2VsZHM6IGEgd2FzaCBpbiB0aGUgdG9wIGFuZCBib3R0b20gYmFuZHMsIHBsdXMgcnVucyB0cmFpbGluZyBvdXQgb2YgaXRcbiAgICBpZiAoby5ydXN0KSB7XG4gICAgICBjb25zdCBjID0gby5ydXN0LCBiYW5kID0gby5ydXN0QmFuZCA/PyAwLjE2O1xuICAgICAgY29uc3QgcmdicyA9IGAke01hdGgucm91bmQoMjU1ICogY1swXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiBjWzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIGNbMl0pfWA7XG4gICAgICAvLyB0aGUgdHdvIGJhbmRzIGFyZSBTRVBBUkFURTogb24gYSBiYXJyaWVyIHRoZSBncm91bmQgZW5kIGNhcnJpZXMgdGhlIGZlZXQsIHRoZSBzdHViIHdlbGRzIGFuZFxuICAgICAgLy8gZXZlcnkgcnVuIG9mZiB0aGVtLCBhbmQgdGhlIHRvcCBlbmQgY2FycmllcyBvbmx5IHRoZSByYWlsJ3Mgb3duIHdlbGRzLiBPbmUgc3ltbWV0cmljIGJhbmRcbiAgICAgIC8vIHdpZGUgZW5vdWdoIHRvIHJlYWNoIHRoZSByYWlsIHdlbGRzIGF0IHYgPSAwLjI2IGFsc28gd2FzaGVzIHRoZSB3aG9sZSB1cHBlciB0aGlyZCBvZiBldmVyeVxuICAgICAgLy8gcGFuZWwsIHdoaWNoIHRoZSBwbGF0ZSBkb2VzIG5vdCBoYXZlLlxuICAgICAgZm9yIChjb25zdCBbZWRnZSwgZGlyLCBiXSBvZiBbWzAsIDEsIG8ucnVzdEJhbmRUb3AgPz8gYmFuZF0sIFtzLCAtMSwgYmFuZF1dIGFzIG51bWJlcltdW10pIHtcbiAgICAgICAgY29uc3QgZ3IgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgZWRnZSwgMCwgZWRnZSArIGRpciAqIHMgKiBiKTtcbiAgICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdic30sJHtvLnJ1c3RXYXNoID8/IDAuMzB9KWApOyBnci5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2JzfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3I7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucnVzdFJ1bnMgPz8gMjIpOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxNDtcbiAgICAgICAgY29uc3QgdG9wID0gcm5kKCkgPCAwLjU7XG4gICAgICAgIGNvbnN0IHkwID0gdG9wID8gMCA6IHMgLSBzICogYmFuZCAqICgwLjMgKyBybmQoKSk7XG4gICAgICAgIGNvbnN0IGxlbiA9IHMgKiAoMC4xMCArIHJuZCgpICogMC4zMik7XG4gICAgICAgIGNvbnN0IGdyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkwLCAwLCB5MCArIGxlbik7XG4gICAgICAgIGdyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYnN9LCR7MC4xOCArIHJuZCgpICogMC4zMn0pYCk7IGdyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYnN9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBncjtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5MCwgdywgbGVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNhbm9weS1tb2R1bGUgaGVscGVyc1xuICogVGhlIGZpdmUgQ0FOT1BZIE1PRFVMRVMgLS0gbmlwYSB0aGF0Y2gsIHZldGl2ZXIgdGhhdGNoLCBzcGxpdCBiYW1ib28sIGNvcnJ1Z2F0ZWQgbWV0YWwsXG4gKiB0YXJwYXVsaW4gLS0gYXJlIG9uZSBmYW1pbHk6IGZvdXIgY29ybmVyIHBvc3RzIGluc2lkZSBhIDQgeCA0IG0gbW9kdWxlLCBhIGhlYWQgZnJhbWUsIGFuZCBhIHJvb2ZcbiAqIHdob3NlIG1hdGVyaWFsIGlzIHRoZSB3aG9sZSBpZGVudGl0eS4gV2hhdCB0aGV5IG5lZWQgYmV5b25kIHRoZSBzdHJlZXQtcHJvcCB2b2NhYnVsYXJ5IGlzIGFcbiAqIHJvb2ZpbmcgdGlsZSBwZXIgbWF0ZXJpYWwgYW5kIHRoZSBjdWxtIG1hcHBpbmcgYSByb3VuZCBiYW1ib28gcG9sZSB3YW50cy5cbiAqXG4gKiBgY3VsbVVWYCwgYGdyYWluTGluZXNgLCBgd2VhdGhlclBhdGNoZXNgLCBgbW91bGRDbHVzdGVyc2AgYW5kIGBjdWxtVGlsZWAgYXJlIHBvcnRlZCBWRVJCQVRJTSBmcm9tXG4gKiBzY3JhdGNoL19mZW5jZS9mZW5jZS5oZWxwZXJzLnRtcGwsIHdoZXJlIHRoZXkgd2VyZSB3cml0dGVuIGZvciB0aGUgYmFtYm9vIGZlbmNlIHBhbmVsIGFuZCB3aGVyZVxuICogdGhlIHJlYXNvbmluZyBiZWhpbmQgZXZlcnkgbnVtYmVyIGlzIHJlY29yZGVkLiBUaGV5IGFyZSBjb3BpZWQgcmF0aGVyIHRoYW4gc2hhcmVkIGJlY2F1c2UgdGhlIHR3b1xuICogZmFtaWxpZXMga2VlcCBzZXBhcmF0ZSB0ZW1wbGF0ZSBzZXRzOyBhIHRoaXJkIGZhbWlseSB3YW50aW5nIHRoZW0gc2hvdWxkIG1vdmUgdGhlbSB1cCBpbnRvXG4gKiBoZWxwZXJzLnRtcGwgcmF0aGVyIHRoYW4gY29weSB0aGVtIGEgc2Vjb25kIHRpbWUuXG4gKi9cblxuLyoqIENVTE0gVVZzOiB1IGFyb3VuZCB0aGUgY2lyY3VtZmVyZW5jZSBhbmQgdiBhbG9uZyB0aGUgbGVuZ3RoLCBib3RoIGluIG1ldHJlcyBvdmVyIGBzY2FsZWAsIHNvIGFcbiAqICBjdWxtIHRpbGUncyBub2RlIHJpbmdzIGNyb3NzIHRoZSBjdWxtIGF0IHJlYWwgc3BhY2luZyB3aGljaGV2ZXIgd2F5IHRoZSBjeWxpbmRlciBpcyB0aGVuIHJvdGF0ZWQuXG4gKiAgQXBwbHkgQkVGT1JFIHJvdGF0ZS90cmFuc2xhdGUuIGB2T2ZmYCBwaGFzZXMgdGhlIHRpbGUgYWxvbmcgdGhlIGN1bG0gc28gbm8gdHdvIGN1bG1zIChvciBhIGNvcmRcbiAqICBjb2xsYXIpIHJpbmcgYXQgdGhlIHNhbWUgc3RhdGlvbi4gKi9cbmZ1bmN0aW9uIGN1bG1VVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcjogbnVtYmVyLCBoOiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIHZPZmYgPSAwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICBjb25zdCBrdSA9ICgyICogTWF0aC5QSSAqIHIpIC8gc2NhbGUsIGt2ID0gaCAvIHNjYWxlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiBrdSwgdXYuZ2V0WShpKSAqIGt2ICsgdk9mZik7XG4gIHJldHVybiBnO1xufVxuXG4vKiogRmluZSBsb25naXR1ZGluYWwgZ3JhaW4gYmV0d2VlbiB5MCBhbmQgeTEgYWNyb3NzIGEgYmFuZCB4MC4ueDE6IG1hbnkgaGFpcmxpbmVzLCBtb3N0bHkgYSBkYXJrXG4gKiAgZmlicmUgdG9uZSwgYSBmZXcgYmxlYWNoZWQsIHNvIHRoZSBzdXJmYWNlIHJlYWRzIGFzIGZpYnJvdXMgYmFtYm9vIHJhdGhlciB0aGFuIHBhaW50LiAqL1xuZnVuY3Rpb24gZ3JhaW5MaW5lcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcm5kOiAoKSA9PiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIG46IG51bWJlciwgZGFyazogc3RyaW5nLCBsaWdodDogc3RyaW5nLCBhTWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICBjb25zdCB4ID0geDAgKyBybmQoKSAqICh4MSAtIHgwKSwgYSA9IDAuMDQgKyBybmQoKSAqIGFNYXgsIHcgPSBybmQoKSA8IDAuNzUgPyAxIDogMS42O1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JuZCgpIDwgMC43MiA/IGRhcmsgOiBsaWdodH0sJHthLnRvRml4ZWQoMyl9KWA7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHkwLCB3LCB5MSAtIHkwKTtcbiAgfVxufVxuXG4vKiogU29mdCBjbG91ZHkgd2VhdGhlcmluZyBhbG9uZyB0aGUgZmlicmUgZGlyZWN0aW9uOiBsZW5ndGh3aXNlIHBhdGNoZXMgb2Ygd2FybSBicm93bi1ncmV5IChvbGRcbiAqICBsaWduaW4gc2hvd2luZyB0aHJvdWdoIHRoZSBibGVhY2gpIGFuZCBvZiBuZWFyLXdoaXRlIChzdW4tYmxlYWNoZWQgZmFjZXMpLCBzbyB0aGUgdG9uZSBkcmlmdHNcbiAqICB0aGUgd2F5IHdlYXRoZXJlZCBiYW1ib28gZG9lcyBpbnN0ZWFkIG9mIHNpdHRpbmcgYXQgb25lIGdyZXkuIFZlcnRpY2FsID0gYWxvbmcgdGhlIGZpYnJlLiAqL1xuZnVuY3Rpb24gd2VhdGhlclBhdGNoZXMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJuZDogKCkgPT4gbnVtYmVyLCBzOiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIG46IG51bWJlciwgd2FybUE6IG51bWJlciwgYmxlYWNoQTogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgY29uc3QgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjEyICsgcm5kKCkgKiAwLjQ1KSwgd2FybSA9IHJuZCgpIDwgMC41O1xuICAgIGNvbnN0IGMgPSB3YXJtID8gJzExMiwxMDAsODgnIDogJzI1NSwyNTUsMjU1JywgYSA9IHdhcm0gPyB3YXJtQSAqICgwLjQgKyBybmQoKSAqIDAuNikgOiBibGVhY2hBICogKDAuNCArIHJuZCgpICogMC42KTtcbiAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5LCAwLCB5ICsgbGVuKTtcbiAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjfSwwKWApOyBnMi5hZGRDb2xvclN0b3AoMC4zNSwgYHJnYmEoJHtjfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMC42NSwgYHJnYmEoJHtjfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4MCwgeSArIGR5LCB4MSAtIHgwLCBsZW4pO1xuICB9XG59XG5cbi8qKiBNb3VsZDogY2x1c3RlcnMgb2Ygc21hbGwgZGFyayBzcGVja3MgKGEgZmV3IGRvemVuIGVhY2gpLCB0aGUgd2F5IGJsYWNrIG1vdWxkIHNpdHMgb24gb3V0ZG9vclxuICogIGJhbWJvbyAtLSBkZW5zZSBhdCBhIGZldyBzcG90cywgYWJzZW50IGVsc2V3aGVyZS4gQWxwaGEgY2FwcGVkIHNvIHRoZSBkYXJrZXN0IHNwZWNrIG92ZXIgdGhlXG4gKiAgbWVhc3VyZWQgYWxiZWRvIHN0YXlzIHdlbGwgY2xlYXIgb2YgdGhlIGhvbGUgZ2F0ZSdzIGx1bWEgNTguIFdyYXBzIGluIHkuICovXG5mdW5jdGlvbiBtb3VsZENsdXN0ZXJzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBybmQ6ICgpID0+IG51bWJlciwgczogbnVtYmVyLCBzcG90czogbnVtYmVyW11bXSwgcng6IG51bWJlciwgcnk6IG51bWJlciwgbjogbnVtYmVyLCBhTWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChjb25zdCBbY3gsIGN5XSBvZiBzcG90cykge1xuICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSwgMCwgY3gsIGN5LCBNYXRoLm1heChyeCwgcnkpICogMC44KTtcbiAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjgsMjYsMjIsJHsoYU1heCAqIDAuOSkudG9GaXhlZCgzKX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyOCwyNiwyMiwwKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCwgY3kgKyBkeSwgcngsIHJ5LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgY29uc3QgeCA9IGN4ICsgKHJuZCgpICsgcm5kKCkgLSAxKSAqIHJ4LCB5ID0gY3kgKyAocm5kKCkgKyBybmQoKSAtIDEpICogcnk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjgsMjYsMjIsJHsoMC4wOCArIHJuZCgpICogYU1heCkudG9GaXhlZCgzKX0pYDtcbiAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiAyLCBoID0gMSArIHJuZCgpICogMztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHgsIHkgKyBkeSwgdywgaCk7XG4gICAgfVxuICB9XG59XG5cbi8qKiBDVUxNIHRpbGUgZm9yIHRoZSB3aG9sZS1iYW1ib28gcG9zdCBhbmQgcmFpbHM6IHggcnVucyBBUk9VTkQgdGhlIGN1bG0sIHkgQUxPTkcgaXQgKHNlZSBjdWxtVVYpLFxuICogIDAuNiBtIG9mIGN1bG0gcGVyIHRpbGUuIFR3byBub2RlIHJpbmdzIHBlciB0aWxlIGF0IGlycmVndWxhciBzdGF0aW9ucyAtLSBhIGRhcmsgZ3Jvb3ZlIHVuZGVyIGFcbiAqICBwYWxlIHJhaXNlZCByaWRnZSwgdGhlIGdyYWluIGJyZWFraW5nIGF0IGVhY2ggLS0gd2l0aCBmaW5lIGxvbmdpdHVkaW5hbCBncmFpbiBiZXR3ZWVuIHRoZW0sIGFcbiAqICBsb25nIGRyeWluZyBzcGxpdCwgbGVuZ3Rod2lzZSB3ZWF0aGVyaW5nIHBhdGNoZXMgYW5kIGJsYWNrIG1vdWxkIGdhdGhlcmVkIGp1c3QgYmVsb3cgZWFjaCBub2RlLFxuICogIGFzIGluIHRoZSBwbGF0ZSdzIHBvc3QgYW5kIHJhaWwgY3JvcHMuIEEgbXVsdGlwbGllciBvbiB0aGUgbWVhc3VyZWQgY3VsbSBncmV5LiAqL1xuZnVuY3Rpb24gY3VsbVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgREFSSyA9ICc5Miw3OCw2MicsIExJR0hUID0gJzI1NSwyNTUsMjU1JztcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmMGVmZWMnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gYSBzb2Z0IHRvbmUgZHJpZnQgYXJvdW5kIHRoZSBjdWxtLCBzbyB0aGUgcm91bmQgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgY29uc3QgZ2EgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgcywgMCk7XG4gICAgZ2EuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDEwMCw5Miw4NCwwLjEyKScpOyBnYS5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgyNTUsMjU1LDI1NSwwLjEwKScpOyBnYS5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTAwLDkyLDg0LDAuMTIpJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdhOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIDE0LCAwLjEyLCAwLjMwKTtcbiAgICAvLyBub2RlIHN0YXRpb25zOiB0d28gcGVyIHRpbGUsIGlycmVndWxhciwgbmV2ZXIgd2l0aGluIDAuMTggb2YgZWFjaCBvdGhlciBvciB0aGUgd3JhcFxuICAgIGNvbnN0IG5vZGVzID0gW3MgKiAoMC4yMCArIHJuZCgpICogMC4xMCksIHMgKiAoMC42NiArIHJuZCgpICogMC4xMildO1xuICAgIC8vIGdyYWluIGluIHNlZ21lbnRzIGJldHdlZW4gdGhlIG5vZGVzIHNvIGl0IGJyZWFrcyBhdCBlYWNoIHJpbmdcbiAgICBjb25zdCBzdGF0aW9ucyA9IFswLCAuLi5ub2Rlcywgc107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgKyAxIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIGdyYWluTGluZXMoY3R4LCBybmQsIDAsIHMsIHN0YXRpb25zW2ldLCBzdGF0aW9uc1tpICsgMV0sIDI2MCwgREFSSywgTElHSFQsIDAuMjYpO1xuICAgIC8vIGEgY291cGxlIG9mIGxvbmcgZHJ5aW5nIHNwbGl0cyBhbG9uZyB0aGUgZmlicmVcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDI7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjI1ICsgcm5kKCkgKiAwLjUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDM4LDMyLDI2LDAuNTUpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHkgKyBkeSwgMS40LCBsZW4pO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHggKyAxLjQsIHkgKyBkeSwgMSwgbGVuKTtcbiAgICB9XG4gICAgLy8gdGhlIG5vZGUgcmluZ3NcbiAgICBmb3IgKGNvbnN0IHkgb2Ygbm9kZXMpIHtcbiAgICAgIGNvbnN0IGdzID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkgLSBzICogMC4wMywgMCwgeSk7XG4gICAgICBncy5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNTAsNDAsMCknKTsgZ3MuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDUwLDQwLDAuMjIpJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3M7IGN0eC5maWxsUmVjdCgwLCB5IC0gcyAqIDAuMDMsIHMsIHMgKiAwLjAzKTsgICAgICAgICAgLy8gc2hhZGUgdXAgdG8gdGhlIHJpbmdcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1Miw0NCwzNiwwLjYyKSc7IGN0eC5maWxsUmVjdCgwLCB5LCBzLCAyLjUpOyAgICAgICAgLy8gdGhlIGdyb292ZVxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMzQpJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyAyLjUsIHMsIDQpOyAvLyB0aGUgcmFpc2VkIHNoZWF0aCByaWRnZVxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDYwLDUwLDQwLDAuMzApJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyA2LjUsIHMsIDEuNSk7ICAvLyBpdHMgbG93ZXIgZWRnZVxuICAgICAgY29uc3QgZ2QgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSArIDgsIDAsIHkgKyBzICogMC4wNSk7XG4gICAgICBnZC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNTAsNDAsMC4yMCknKTsgZ2QuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDUwLDQwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ2Q7IGN0eC5maWxsUmVjdCgwLCB5ICsgOCwgcywgcyAqIDAuMDUpO1xuICAgIH1cbiAgICAvLyBtb3VsZCBnYXRoZXJzIGp1c3QgYmVsb3cgdGhlIG5vZGVzIGFuZCBpbiBhIGNvdXBsZSBvZiBsb29zZSBwYXRjaGVzXG4gICAgY29uc3Qgc3BvdHM6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHkgb2Ygbm9kZXMpIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSBzcG90cy5wdXNoKFtybmQoKSAqIHMsIHkgKyBzICogKDAuMDIgKyBybmQoKSAqIDAuMDUpXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgcm5kKCkgKiBzXSk7XG4gICAgbW91bGRDbHVzdGVycyhjdHgsIHJuZCwgcywgc3BvdHMsIHMgKiAwLjEwLCBzICogMC4wNiwgOTAsIDAuMzApO1xuICB9KTtcbn1cblxuXG4vKipcbiAqIFRIQVRDSCB0aWxlLCBmb3IgYSByb29mIG1hcHBlZCB3aXRoIFdPUkxEIFVWcyBzbyB1IHJ1bnMgYWxvbmcgdGhlIHJpZGdlIGFuZCB2IHVwIHRoZSBzbG9wZS5cbiAqXG4gKiBUaGF0Y2ggaXMgbGFpZCBpbiBDT1VSU0VTOiBlYWNoIGNvdXJzZSBpcyBhIGJ1bmRsZSBvZiBzdGVtcyBwZWdnZWQgdG8gYSBwdXJsaW4gd2l0aCBpdHMgYnV0dHNcbiAqIGhhbmdpbmcgb3ZlciB0aGUgY291cnNlIGJlbG93LCBzbyB3aGF0IGEgdmlld2VyIGFjdHVhbGx5IHJlc29sdmVzIGF0IHByb3AgZGlzdGFuY2UgaXMgYSBzdGFjayBvZlxuICogaG9yaXpvbnRhbCBiYW5kcyB3aXRoIGEgc2hhZG93IGxpbmUgdW5kZXIgZWFjaCBidXR0LCBhbmQgYSBmaWJyZSB0ZXh0dXJlIHJ1bm5pbmcgZG93biB0aGUgc2xvcGVcbiAqIGluc2lkZSB0aGVtLiBNb2RlbGxpbmcgdGhlIHN0ZW1zIGlzIHdoYXQgdGhlIHJlZ2lzdHJ5IG5vdGVzIGZvcmJpZDsgdGhpcyBpcyB3aGVyZSB0aGF0IGRldGFpbFxuICogZ29lcyBpbnN0ZWFkLlxuICpcbiAqIE9uZSB0aWxlIGlzIGBjb3Vyc2VzYCBjb3Vyc2VzIHRhbGwuIFRoZSBrbm9icyBhcmUgd2hhdCBzZXBhcmF0ZXMgdGhlIHR3byB0aGF0Y2hlcyBvbiB0aGUgcGxhdGVzOlxuICogICBuaXBhICAgICBicm9hZCBmbGF0IHBhbG0gYmxhZGVzIC0tIGZldyB3aWRlIHN0cm9rZXMgKGBzdGVtV2AgMy03IHB4KSwgYSB3aWRlIHRvbmFsIGBzcHJlYWRgLFxuICogICAgICAgICAgICBhIGRlZXBseSBSQUdHRUQgYnV0dCBsaW5lIGFuZCBvY2Nhc2lvbmFsIG1pc3NpbmcgYmxhZGVzLlxuICogICB2ZXRpdmVyICBjb21iZWQgZ3Jhc3MgLS0gaHVuZHJlZHMgb2YgaGFpcmxpbmVzLCBhIG5hcnJvdyBzcHJlYWQsIGFuIGFsbW9zdCBzdHJhaWdodCBidXR0LlxuICogYG1vc3NgIG11bHRpcGxpZXMgYSBncmVlbiBjYXN0IGludG8gc2NhdHRlcmVkIHBhdGNoZXM6IHRoZSB0aWxlIGlzIGEgTVVMVElQTElFUiBvbiBhIHBhbGUgc3RyYXdcbiAqIGFsYmVkbywgYW5kIGEgbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLCBzbyBncmVlbiBoYXMgdG8gYXJyaXZlIGFzIFwibGVzcyByZWQgYW5kIGJsdWVcIiBhbmQgbmV2ZXJcbiAqIGFzIGEgcGFpbnRlZCBncmVlbi4gTm90aGluZyBoZXJlIGdvZXMgYmVsb3cgMC40MiBvZiB0aGUgYWxiZWRvLCB3aGljaCBrZWVwcyB0aGUgZGFya2VzdCB0ZXhlbCBvZlxuICogYSBzdHJhdyBhdCBsdW1hIH4xNTAgd2VsbCBjbGVhciBvZiB0aGUgc2lsaG91ZXR0ZSBnYXRlJ3MgYmFja2Ryb3AgYmFuZC5cbiAqL1xuZnVuY3Rpb24gdGhhdGNoVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IG5jOiBudW1iZXIgPSBvLmNvdXJzZXMgPz8gNCwgY2ggPSBzIC8gbmM7XG4gICAgY29uc3Qgc3RlbXM6IG51bWJlciA9IG8uc3RlbXMgPz8gMjYwLCBzcHJlYWQ6IG51bWJlciA9IG8uc3ByZWFkID8/IDAuMTI7XG4gICAgY29uc3Qgd01pbjogbnVtYmVyID0gby5zdGVtVz8uWzBdID8/IDEsIHdNYXg6IG51bWJlciA9IG8uc3RlbVc/LlsxXSA/PyAyO1xuICAgIGNvbnN0IHJhZ2dlZDogbnVtYmVyID0gby5yYWdnZWQgPz8gMC4wNjsgICAgICAgICAgICAgICAgIC8vIGJ1dHQtbGluZSB3YXZpbmVzcywgYXMgYSBzaGFyZSBvZiBjaFxuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcblxuICAgIC8vIHRoZSBidXR0IGxpbmUgb2YgZWFjaCBjb3Vyc2UsIGppdHRlcmVkIHBlciBjb2x1bW4gYW5kIFNIQVJFRCB3aXRoIHRoZSBjb3Vyc2UgYWJvdmUgc28gdGhlXG4gICAgLy8gc2hhZG93IGFuZCB0aGUgYmxhZGVzIGFncmVlIG9uIHdoZXJlIHRoZSBlZGdlIGlzXG4gICAgY29uc3QgYnV0dHM6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8PSBuYzsgYysrKSB7XG4gICAgICBjb25zdCByb3c6IG51bWJlcltdID0gW107XG4gICAgICBsZXQgeSA9IDA7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSBzOyB4KyspIHtcbiAgICAgICAgaWYgKHggJSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKHMgLyA0OCkpID09PSAwKSB5ID0gKHJuZCgpICogMiAtIDEpICogcmFnZ2VkICogY2g7XG4gICAgICAgIHJvdy5wdXNoKGMgKiBjaCArIHkpO1xuICAgICAgfVxuICAgICAgYnV0dHMucHVzaChyb3cpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgbmM7IGMrKykge1xuICAgICAgY29uc3QgeTAgPSBjICogY2g7XG4gICAgICAvLyB0aGUgY291cnNlJ3Mgb3duIHRvbmU6IHRoYXRjaCB3ZWF0aGVycyBjb3Vyc2UgYnkgY291cnNlLCB0aGUgbG93ZXIgb25lcyBncmV5ZXJcbiAgICAgIGNvbnN0IHQgPSAxIC0gc3ByZWFkICogcm5kKCk7XG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHtNYXRoLnJvdW5kKHYgKiAwLjk4NSl9LCR7TWF0aC5yb3VuZCh2ICogMC45NSl9KWA7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgeTAgLSByYWdnZWQgKiBjaCAtIDEsIHMsIGNoICsgMiAqIHJhZ2dlZCAqIGNoICsgMik7XG4gICAgICAvLyBzdGVtcyBydW5uaW5nIERPV04gdGhlIHNsb3BlIGluc2lkZSB0aGUgY291cnNlLCBlYWNoIGEgbGl0dGxlIHBhc3QgaXRzIGJ1dHQgbGluZVxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzdGVtczsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHM7XG4gICAgICAgIGNvbnN0IHcgPSB3TWluICsgcm5kKCkgKiAod01heCAtIHdNaW4pO1xuICAgICAgICBjb25zdCB0b25lID0gMSAtIHNwcmVhZCAqICgwLjMgKyBybmQoKSAqIDAuNyk7XG4gICAgICAgIGNvbnN0IGEgPSAwLjE4ICsgcm5kKCkgKiAwLjMyO1xuICAgICAgICBjb25zdCBkYXJrID0gcm5kKCkgPCAwLjYyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZGFyayA/IGByZ2JhKCR7TWF0aC5yb3VuZCgxMjAgKiB0b25lKX0sJHtNYXRoLnJvdW5kKDEwNiAqIHRvbmUpfSwke01hdGgucm91bmQoODQgKiB0b25lKX0sJHthLnRvRml4ZWQoMyl9KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgcmdiYSgyNTUsMjUzLDI0NiwkeyhhICogMC42KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICBjb25zdCB5VG9wID0geTAgLSBjaCAqICgwLjE1ICsgcm5kKCkgKiAwLjI1KTtcbiAgICAgICAgY29uc3QgeUJvdCA9IGJ1dHRzW2MgKyAxXVtNYXRoLm1pbihzLCBNYXRoLnJvdW5kKHgpKV0gKyBjaCAqIChybmQoKSAqIDAuMTApO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeVRvcCwgdywgTWF0aC5tYXgoMiwgeUJvdCAtIHlUb3ApKTtcbiAgICAgIH1cbiAgICAgIC8vIE1JU1NJTkcgYmxhZGVzOiBhIGZldyBnYXBzIHdoZXJlIHRoZSBjb3Vyc2UgaGFzIHRoaW5uZWQsIGRhcmsgYnV0IG5ldmVyIGJsYWNrXG4gICAgICBjb25zdCBnYXBzID0gby5nYXBzID8/IDA7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGdhcHM7IGsrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gcyAqICgwLjAxICsgcm5kKCkgKiAwLjAzKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDk2LDg0LDY2LCR7KDAuMjAgKyBybmQoKSAqIDAuMTgpLnRvRml4ZWQoMyl9KWA7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5MCArIGNoICogMC4yNSwgdywgY2ggKiAoMC40ICsgcm5kKCkgKiAwLjUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGUgc2hhZG93IGVhY2ggY291cnNlJ3MgYnV0dCBjYXN0cyBvbiB0aGUgb25lIGJlbG93OiBhIGdyYWRpZW50IGZhbGxpbmcgQVdBWSBmcm9tIHRoZSBsaW5lLFxuICAgIC8vIGRyYXduIGFsb25nIHRoZSBqaXR0ZXJlZCBidXR0IHNvIHRoZSBzaGFkb3cgaXMgYXMgcmFnZ2VkIGFzIHRoZSBlZGdlIHRoYXQgY2FzdHMgaXQsIHdpdGggdGhlXG4gICAgLy8gTElUIFRJUFMgb2YgdGhlIGNvdXJzZSBhYm92ZSBpdCBhcyBhIHBhbGUgbGluZS4gVGhlIHBhaXIgaXMgd2hhdCBtYWtlcyB0aGUgcm9vZiByZWFkIGFzXG4gICAgLy8gc3RhY2tlZCBsYXllcnM7IHRoZSBzaGFkb3cgYWxvbmUgcmVhZHMgYXMgZ3JhaW4sIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGJ1aWxkIGxvb2tlZCBsaWtlLlxuICAgIGZvciAobGV0IGMgPSAxOyBjIDw9IG5jOyBjKyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHliID0gYnV0dHNbY11beF07XG4gICAgICAgIGNvbnN0IGdoID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliIC0gY2ggKiAwLjA5LCAwLCB5Yik7XG4gICAgICAgIGdoLmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjUyLDI0MiwwKScpOyBnaC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoMjU1LDI1MiwyNDIsJHsoby50aXAgPz8gMC4zNCkudG9GaXhlZCgzKX0pYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnaDtcbiAgICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeWIgLSBjaCAqIDAuMDkgKyBkeSwgMSwgY2ggKiAwLjA5KTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeWIsIDAsIHliICsgY2ggKiAwLjIyKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDU4LDQ4LDM2LCR7KG8uc2hhZG93ID8/IDAuNDIpLnRvRml4ZWQoMyl9KWApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNTgsNDgsMzYsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5YiArIGR5LCAxLCBjaCAqIDAuMjIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1PU1MgLyBNT1VMRDogbGVzcyByZWQgYW5kIGJsdWUgb3ZlciBzb2Z0IHBhdGNoZXMsIG5ldmVyIGEgcGFpbnRlZCBncmVlblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ubW9zcyA/PyAwKTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjE0KTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMTQgKyBybmQoKSAqIDAuMjI7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTUwLDE5MCwxMTAsJHthLnRvRml4ZWQoMyl9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTUwLDE5MCwxMTAsMCknKTtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknOyBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxuICAgIC8vIHNvZnQgdG9uYWwgZHJpZnQgc28gdGhlIGNvdXJzZXMgZG8gbm90IHJlYWQgYXMgYSBwcmludGVkIHN0cmlwZVxuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMTAsIDAuMTAsIDAuMjIpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBXT1ZFTiBUQVJQQVVMSU4gdGlsZTogdGhlIGNvYXJzZSBjcm9zcy13b3ZlbiBwb2x5cHJvcHlsZW5lIHRhcGUgb2YgYSBUaGFpIGJ1aWxkZXIncyB0YXJwLCBwbHVzXG4gKiB0aGUgY3JlYXNlcyBhIGZvbGRlZCBzaGVldCBrZWVwcyBmb3IgbGlmZSBhbmQgdGhlIHN1bi1ibGVhY2hpbmcgYWxvbmcgdGhlIHJpZGdlcy4gQSBtdWx0aXBsaWVyIG9uXG4gKiB0aGUgbWVhc3VyZWQgYmx1ZSwgc28gdGhlIHdlYXZlIGRhcmtlbnMgYW5kIHRoZSBibGVhY2ggbGlmdHMgdG93YXJkIHdoaXRlLlxuICovXG5mdW5jdGlvbiB0YXJwVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBwaXRjaCA9IE1hdGgubWF4KDMsIE1hdGgucm91bmQocyAvIChvLnRhcGVzID8/IDY0KSkpO1xuICAgIC8vIHRoZSB3ZWF2ZTogd2FycCBhbmQgd2VmdCB0YXBlcywgZWFjaCBwYWlyIHdpdGggYSBzaGFkb3cgYXQgaXRzIGpvaW4sIGFsdGVybmF0aW5nIG92ZXIvdW5kZXJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHggKz0gcGl0Y2gpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgzMCwzNCw0NCwkeygwLjEwICsgcm5kKCkgKiAwLjA4KS50b0ZpeGVkKDMpfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wNyknOyBjdHguZmlsbFJlY3QoeCArIDEsIDAsIE1hdGgubWF4KDEsIHBpdGNoICogMC4zNSksIHMpO1xuICAgIH1cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHM7IHkgKz0gcGl0Y2gpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgzMCwzNCw0NCwkeygwLjEwICsgcm5kKCkgKiAwLjA4KS50b0ZpeGVkKDMpfSlgOyBjdHguZmlsbFJlY3QoMCwgeSwgcywgMSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wNyknOyBjdHguZmlsbFJlY3QoMCwgeSArIDEsIHMsIE1hdGgubWF4KDEsIHBpdGNoICogMC4zNSkpO1xuICAgIH1cbiAgICAvLyBmb2xkIGNyZWFzZXM6IGxvbmcgcGFsZSBsaW5lcyB3aXRoIGEgc2hhZG93IG9uIG9uZSBzaWRlLCBhdCB0aGUgdHdvIGF4ZXMgYSB0YXJwIGlzIGZvbGRlZCBvblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uY3JlYXNlcyA/PyA2KTsgaysrKSB7XG4gICAgICBjb25zdCBob3JpeiA9IHJuZCgpIDwgMC41LCBwID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuNSArIHJuZCgpICogMC41KSwgcSA9IHJuZCgpICogcztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjI2KSc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yNiknO1xuICAgICAgaWYgKGhvcml6KSB7IGN0eC5maWxsUmVjdChxIC0gbGVuIC8gMiwgcCwgbGVuLCAxLjYpOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjAsMjYsMzgsMC4xOCknOyBjdHguZmlsbFJlY3QocSAtIGxlbiAvIDIsIHAgKyAxLjYsIGxlbiwgMik7IH1cbiAgICAgIGVsc2UgeyBjdHguZmlsbFJlY3QocCwgcSAtIGxlbiAvIDIsIDEuNiwgbGVuKTsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDI2LDM4LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHAgKyAxLjYsIHEgLSBsZW4gLyAyLCAyLCBsZW4pOyB9XG4gICAgfVxuICAgIC8vIHN1bi1ibGVhY2hlZCBzdHJlYWtzIGFuZCBhIGxpdHRsZSBncmltZVxuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMTIsIDAuMTAsIDAuMzQpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTQVdOIFRJTUJFUiB0aWxlIGZvciBhIHdlYXRoZXJlZCBwb3N0LWFuZC1wbGF0ZSBmcmFtZTogZmluZSBsb25naXR1ZGluYWwgZ3JhaW4sIGEgZmV3IGtub3RzLCB0aGVcbiAqIG9kZCBkcnlpbmcgc3BsaXQsIGFuZCBjbG91ZHkgc2lsdmVyIHdlYXRoZXJpbmcuIERlbGliZXJhdGVseSBXRUFLTFkgZGlyZWN0aW9uYWwgLS0gdGhlIGZyYW1lIGlzXG4gKiBtYXBwZWQgd2l0aCB3b3JsZCBVVnMsIHdoaWNoIHB1dCB2IGFsb25nIHRoZSBwb3N0IGJ1dCBBQ1JPU1MgYSBiZWFtLCBhbmQgYSBzdHJvbmdseSBzdHJpcGVkIHRpbGVcbiAqIHdvdWxkIHRoZW4gcmVhZCBhcyBhIHBsYW5rIGpvaW50IHJ1bm5pbmcgdGhlIHdyb25nIHdheSBvbiBoYWxmIHRoZSBmcmFtZS4gVGhlIHdlYXRoZXJpbmcgY2Fycmllc1xuICogbW9zdCBvZiB0aGUgcmVhZCBhbmQgdGhlIGdyYWluIG9ubHkgc2hhcnBlbnMgaXQsIHdoaWNoIHN1cnZpdmVzIGJvdGggb3JpZW50YXRpb25zLlxuICovXG5mdW5jdGlvbiBzYXduVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IERBUksgPSAnOTYsODQsNjgnLCBMSUdIVCA9ICcyNTUsMjU1LDI1NSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjRmMmVlJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMjAsIDAuMTQsIDAuMzApO1xuICAgIGdyYWluTGluZXMoY3R4LCBybmQsIDAsIHMsIDAsIHMsIG8uZ3JhaW4gPz8gMjIwLCBEQVJLLCBMSUdIVCwgMC4xOCk7XG4gICAgLy8ga25vdHM6IGEgZGFyayBlbGxpcHNlIHdpdGggdGhlIGdyYWluIHN3ZWVwaW5nIHJvdW5kIGl0XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5rbm90cyA/PyA0KTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjAxMiArIHJuZCgpICogMC4wMik7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNzQsNjAsNDQsMC40NSknO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogMS42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDk2LDgwLDYwLDAuMjIpJzsgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGZvciAobGV0IHEgPSAxOyBxIDw9IDM7IHErKykgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByICogKDEgKyBxICogMC42KSwgciAqICgxLjYgKyBxICogMC45KSwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZHJ5aW5nIHNwbGl0cyBhbG9uZyB0aGUgZmlicmVcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnNwbGl0cyA/PyAzKTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC40NSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTgsNDgsMzYsMC40MiknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjQsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xNiknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNCwgeSArIGR5LCAxLCBsZW4pO1xuICAgIH1cbiAgICBjb25zdCBzcG90czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ubW91bGQgPz8gMyk7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCBybmQoKSAqIHNdKTtcbiAgICBtb3VsZENsdXN0ZXJzKGN0eCwgcm5kLCBzLCBzcG90cywgcyAqIDAuMDksIHMgKiAwLjA3LCA3MCwgMC4yNCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdBTFZBTklTRUQgU0hFRVQgd2VhdGhlcmluZzogb25lIHNlYW1sZXNzIG11bHRpcGxpZXIgdGlsZSBjYXJyeWluZyB0aGUgdGhyZWUgdGhpbmdzIGEgemluYyByb29mXG4gKiBhY3R1YWxseSBzaG93cyAtLSB0aGUgY2hhbGt5IHdoaXRlIG94aWRhdGlvbiB0aGF0IGVhdHMgdGhlIHNwYW5nbGUsIHRoZSBkYXJrZXIgZ3JleSBkcmlmdCB3aGVyZVxuICogaXQgaGFzIG5vdCwgYW5kIHRoZSB3YXJtIHJ1c3QgZnJlY2tsZXMgdGhhdCBzdGFydCBhdCBldmVyeSBmaXhpbmcgYW5kIGxhcC5cbiAqXG4gKiBMaWtlIGBwYWludFRpbGVgIGl0IGlzIGRyYXduIGluIEFCU09MVVRFIG11bHRpcGxpZXIgc3BhY2Ugb3ZlciBhIFJFLUJBU0VEIGVudmVsb3BlLCBiZWNhdXNlXG4gKiBjaGFsa2luZyBpcyBCUklHSFRFUiB0aGFuIHRoZSBjbGVhbiBzaGVldCBpdCBzaXRzIG9uIGFuZCBhIHBsYWluIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbi4gYG8uYmFzZWBcbiAqIGlzIHRoZSBjbGVhbiB6aW5jJ3Mgb3duIG11bHRpcGxpZXIgYWdhaW5zdCB0aGF0IGVudmVsb3BlIGFuZCBpcyB3aGF0IG1vc3Qgb2YgdGhlIHRpbGUgaXMgZmlsbGVkXG4gKiB3aXRoOyBgby5jaGFsa2AgcmVhY2hlcyBiYWNrIHVwIHRvIHRoZSBlbnZlbG9wZS4gTWVhc3VyZWQgb2ZmIHRoZSBwbGF0ZSwgdGhlIGRlY2sgcnVucyAxNzIgdG8gMTk3XG4gKiBsdW1hIGFjcm9zcyBpdHMgb3duIHN1cmZhY2UgYXQgYSBzYXR1cmF0aW9uIG9mIDAuMDQgLS0gYSAyNS1sdW1hIHNwcmVhZCBvbiBhIG5vbWluYWxseSBmbGF0IGdyZXksXG4gKiB3aGljaCBpcyB0aGUgd2hvbGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcm9vZiBhbmQgYSBzaGVldCBvZiBwbGFzdGljLlxuICpcbiAqIGBjaGFsa1NjYWxlYCAvIGBkcmlmdFNjYWxlYCBleGlzdCBiZWNhdXNlIG9uIGEgcm9vZiB0aGUgdGlsZSBpcyBzbWFsbCBhZ2FpbnN0IHRoZSBzdXJmYWNlOiB0aGVcbiAqIGRlY2sgcmVwZWF0cyBpdCBmb3VyIHRpbWVzIGFjcm9zcywgc28gYW55IG1hcmsgd2lkZXIgdGhhbiBhIHRlbnRoIG9mIGl0IGRyYXdzIGEgdmlzaWJsZSBsYXR0aWNlLlxuICogVGhlIEJST0FEIGNoYWxrIHpvbmVzIGJlbG9uZyBvbiB0aGUgc2hlZXQncyBvd24gdmVydGV4IGdyaWQsIHdoaWNoIGRvZXMgbm90IHJlcGVhdDsgd2hhdCB0aGUgdGlsZVxuICogb3dlcyBpcyB0aGUgZmluZSBzcGVja2xlIGluc2lkZSB0aGVtLlxuICpcbiAqIFRoZSByb2xsIG1hcmtzIGFyZSBkcmF3biBMQVNUIGFuZCBhbG9uZyB1LCB3aGljaCBvbiB0aGUgZGVjaydzIHdvcmxkIFVWcyBpcyB0aGUgYXhpcyB0aGUgbW9kZWxsZWRcbiAqIGZsdXRlcyBydW4gYWNyb3NzLiBUaGV5IGFyZSB3aGF0IHRoZSB0aWxlIHN0aWxsIG93ZXMgdGhlIGdlb21ldHJ5IG9uY2UgdGhlIGNvcnJ1Z2F0aW9uIGl0c2VsZiBpc1xuICogcmVhbDogYSByb2xsIGZvcm1lciBsZWF2ZXMgZmluZSBsZW5ndGh3aXNlIHN0cmlhdGlvbiBiZXR3ZWVuIHRoZSBmbHV0ZXMsIGFuZCBgYnVtcGAgcGlja3MgaXQgdXAuXG4gKi9cbmZ1bmN0aW9uIGdhbHZUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdLCBjaGFsayA9IG8uY2hhbGsgPz8gYmFzZSwgcnVzdCA9IG8ucnVzdCA/PyBiYXNlLCBkYXJrID0gby5kYXJrID8/IGJhc2U7XG4gICAgY29uc3Qgd3JhcCA9IChkcmF3OiAoZHg6IG51bWJlciwgZHk6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIGRyYXcoZHgsIGR5KTtcbiAgICB9O1xuICAgIGNvbnN0IGJsb2IgPSAoYzogbnVtYmVyW10sIHg6IG51bWJlciwgeTogbnVtYmVyLCByOiBudW1iZXIsIGE6IG51bWJlciwgcnkgPSAxLCByb3QgPSAwKSA9PiB7XG4gICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IoYyl9LCR7YX0pYCk7IGcuYWRkQ29sb3JTdG9wKDAuNTUsIGByZ2JhKCR7cmdiKGMpfSwke2EgKiAwLjV9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IoYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogcnksIHJvdCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGJhc2UgZmlsbCBjYXJyaWVzIHRoZSBGTFVURSBzaGFkaW5nIHdoZW4gYGZsdXRlc2AgaXMgc2V0OiBgZmx1dGVzYCByaXBwbGVzIHBlciB0aWxlLCBpblxuICAgIC8vIHBoYXNlIHdpdGggdGhlIG1vZGVsbGVkIGNvcnJ1Z2F0aW9uIChhIHRyb3VnaCBhdCB1ID0gMCwgd2hpY2ggaXMgd2hlcmUgdGhlIGRlY2sncyB3b3JsZCBVVnMgcHV0XG4gICAgLy8gb25lKS4gVGhlIGdlb21ldHJ5IGFscmVhZHkgdHVybnMgdGhlIGZsdXRlcyB0byB0aGUgbGlnaHQgLS0gdGhpcyBpcyB0aGUgYW1iaWVudCBkYXJrZW5pbmcgaW5cbiAgICAvLyB0aGUgdmFsbGV5cyBhbmQgdGhlIHJvbGwtZm9ybWVyJ3Mgb3duIHBvbGlzaCBvbiB0aGUgY3Jlc3RzLCB3aGljaCBmbGF0IHN0dWRpbyBsaWdodGluZyBvbiBhXG4gICAgLy8gc21vb3RoLXNoYWRlZCB0cmlhbmdsZSB3YXZlIGdpdmVzIG5vbmUgb2YuIE91dCBvZiBwaGFzZSBpdCB3b3VsZCBCRUFUIHdpdGggdGhlIGdlb21ldHJ5LCB3aGljaFxuICAgIC8vIGlzIHdoeSB0aGUgcGl0Y2ggaXMgbG9ja2VkIHRvIHRoZSBkZWNrJ3Mgb3duIDEzIGZsdXRlcyBwZXIgbWV0cmUgcmF0aGVyIHRoYW4gY2hvc2VuLlxuICAgIGNvbnN0IGZsID0gby5mbHV0ZXMgPz8gMCwgZmxvdyA9IG8uZmx1dGVMb3cgPz8gMC44ODtcbiAgICBpZiAoZmwgPiAwKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgICBjb25zdCB0ID0gKDEgLSBNYXRoLmNvcyh4IC8gcyAqIE1hdGguUEkgKiAyICogZmwpKSAvIDI7ICAgLy8gMCBpbiB0aGUgdHJvdWdoLCAxIGF0IHRoZSBjcmVzdFxuICAgICAgICBjb25zdCBrID0gZmxvdyArICgxIC0gZmxvdykgKiB0O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlLm1hcCgodjogbnVtYmVyKSA9PiB2ICogaykpfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTsgfVxuXG4gICAgLy8gMS4gdGhlIGdyZXkgZHJpZnQ6IGJyb2FkLCB2ZXJ5IHNvZnQsIHRoZSBhcmVhcyB0aGUgY2hhbGsgaGFzIG5vdCByZWFjaGVkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5kcmlmdCA/PyAxNik7IGkrKylcbiAgICAgIGJsb2IoZGFyaywgcm5kKCkgKiBzLCBybmQoKSAqIHMsIHMgKiAoMC4xNiArIHJuZCgpICogMC4zMCkgKiAoby5kcmlmdFNjYWxlID8/IDEpLCAwLjEwICsgcm5kKCkgKiAwLjE4LCAwLjUgKyBybmQoKSAqIDAuOSwgcm5kKCkgKiBNYXRoLlBJKTtcblxuICAgIC8vIDIuIHRoZSBjaGFsayBibG9vbTogTEFSR0UsIHNvZnQgYW5kIGlycmVndWxhciwgd2l0aCBhIGdyYW51bGFyIGZyaW5nZS4gT24gYSByb29mIGl0IGlzIHRoZVxuICAgIC8vICAgIGRvbWluYW50IG1hcmsgLS0gdGhlIHBsYXRlJ3MgZGVjayBpcyBtb3JlIGNoYWxrIHRoYW4gY2xlYW4gc2hlZXQgLS0gc28gaXQgaXMgZHJhd24gd2lkZSBhbmRcbiAgICAvLyAgICBhdCBoaWdoIGFscGhhLCB1bmxpa2UgdGhlIHNwYXJzZSBibG9vbXMgb2YgYSBwYWludGVkIHBhbmVsLlxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uY2hhbGtQYXRjaGVzID8/IDE0KTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjA4ICsgcm5kKCkgKiAwLjE4KSAqIChvLmNoYWxrU2NhbGUgPz8gMSk7XG4gICAgICBibG9iKGNoYWxrLCBjeCwgY3ksIGNyLCAoby5jaGFsa0FscGhhID8/IDAuNTUpICsgcm5kKCkgKiAwLjMwLCAwLjUgKyBybmQoKSAqIDAuOSwgcm5kKCkgKiBNYXRoLlBJKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjciAqIDEuMztcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQsIHIgPSAwLjggKyBybmQoKSAqIDIuNDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKGNoYWxrKX0sJHswLjIgKyBybmQoKSAqIDAuNDV9KWA7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gcnVzdDogc21hbGwgd2FybSBmcmVja2xlIGNsdXN0ZXJzLCBlYWNoIGEgc29mdCBwYXRjaCB1bmRlciBhIGZpZWxkIG9mIHNwZWNrcywgd2l0aCBhIHNob3J0XG4gICAgLy8gICAgcnVuIGJlbG93IGl0LiBaaW5jIGRvZXMgbm90IHNoZWV0LXJ1c3QgdGhlIHdheSBiYXJlIHN0ZWVsIGRvZXMgLS0gaXQgZnJlY2tsZXMgZmlyc3QuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5ydXN0Q2x1c3RlcnMgPz8gMTApOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgY3IgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDU1KTtcbiAgICAgIGJsb2IocnVzdCwgY3gsIGN5LCBjciwgMC4yNSArIHJuZCgpICogMC4zMCwgMC43ICsgcm5kKCkgKiAwLjcsIHJuZCgpICogTWF0aC5QSSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwZWNrc1BlckNsdXN0ZXIgPz8gMjYpOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkLCByID0gMC43ICsgcm5kKCkgKiAxLjg7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihydXN0KX0sJHswLjI1ICsgcm5kKCkgKiAwLjQ1fSlgO1xuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgICAgaWYgKHJuZCgpIDwgMC42KSB7XG4gICAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiBzICogMC4wMDYsIGxlbiA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xNik7XG4gICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgY3ksIDAsIGN5ICsgbGVuKTtcbiAgICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVzdCl9LCR7MC4xNCArIHJuZCgpICogMC4xNn0pYCk7IGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1c3QpfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgICAgd3JhcCgoZHgpID0+IGN0eC5maWxsUmVjdChjeCArIGR4ICsgKHJuZCgpIC0gMC41KSAqIGNyLCBjeSwgdywgbGVuKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNC4gcm9sbCBtYXJrczogZmluZSBsaW5lcyBvZiBjb25zdGFudCB1LCBhdCBgcm9sbHNgIHBlciB0aWxlLCBhbHRlcm5hdGVseSBhIHNoYWRlIHVuZGVyIGFuZCBhXG4gICAgLy8gICAgc2hhZGUgb3ZlciB0aGUgdG9uZSB0aGV5IGNyb3NzLiBCb3VuZCBhcyBhIGJ1bXAgbWFwIHRoZXkgYXJlIHRoZSBzdHJpYXRpb24gYmV0d2VlbiBmbHV0ZXMuXG4gICAgY29uc3Qgcm9sbHMgPSBvLnJvbGxzID8/IDQwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9sbHM7IGkrKykge1xuICAgICAgY29uc3QgeCA9IChpICsgMC4zNSArIHJuZCgpICogMC4zKSAqIHMgLyByb2xscywgdXAgPSBybmQoKSA8IDAuNDU7XG4gICAgICBjb25zdCBjID0gdXAgPyBjaGFsayA6IGRhcmssIGEgPSAwLjA2ICsgcm5kKCkgKiAwLjEyO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoJHtyZ2IoYyl9LCR7YX0pYDsgY3R4LmxpbmVXaWR0aCA9IDAuNyArIHJuZCgpICogMS4zO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIDApOyBjdHgubGluZVRvKHggKyBkeCwgcyk7IGN0eC5zdHJva2UoKTsgfVxuICAgIH1cbiAgfSk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvLlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgdGhlIGdpbGRlZCBzdXJmYWNlcy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhXG4gKiBoZW1pc3BoZXJlIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvXG4gKiByZWZsZWN0IHJlbmRlcnMgYmxhY2sgLS0gd2hpY2ggb24gYSBnb2xkIGZpbmlhbCBpcyB0aGUgd2hvbGUgZmVhdHVyZSBsb3N0LiBUaGUgYWxiZWRvIHN0YXlzXG4gKiBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRlcmlhbHMob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyk6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBDT05GSUcubWF0ZXJpYWxzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgICAgc2lkZTogcy5kb3VibGVTaWRlZCA/IFRIUkVFLkRvdWJsZVNpZGUgOiBUSFJFRS5Gcm9udFNpZGUsXG4gICAgICB2ZXJ0ZXhDb2xvcnM6IHMudmVydGV4Q29sb3JzID09PSB0cnVlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIC8vIEEgTElUIHN1cmZhY2UgKGEgZmx1b3Jlc2NlbnQgdHViZSwgYSBjaGFyY29hbCBlbWJlciBiZWQpOiBlbWlzc2l2ZSBjYXJyaWVzIHRoZSBnbG93IHdpdGhvdXQgYVxuICAgIC8vIGxpZ2h0IHNvdXJjZSwgd2hpY2ggdGhlIGtpdCdzIHByb3BzIG5ldmVyIG93biAtLSB0aGUgaG9zdCBzY2VuZSBvd25zIGxpZ2h0aW5nLlxuICAgIGlmIChzLmVtaXNzaXZlICE9PSB1bmRlZmluZWQpIHsgbS5lbWlzc2l2ZSA9IG5ldyBUSFJFRS5Db2xvcihzLmVtaXNzaXZlKTsgbS5lbWlzc2l2ZUludGVuc2l0eSA9IHMuZW1pc3NpdmVJbnRlbnNpdHkgPz8gMTsgfVxuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkgeyBtLnRyYW5zcGFyZW50ID0gdHJ1ZTsgbS5vcGFjaXR5ID0gcy5vcGFjaXR5OyBtLmRlcHRoV3JpdGUgPSB0cnVlOyB9XG4gICAgLy8gQW4gQUxQSEEtQ1VUIHBhbmUgKGNoYWluLWxpbmsgbWVzaCk6IHRoZSBjYW52YXMgdGlsZSBjYXJyaWVzIHRoZSBjdXQtb3V0IGluIGl0cyBhbHBoYSBjaGFubmVsIGFuZFxuICAgIC8vIGFscGhhVGVzdCBkaXNjYXJkcyB0aGUgb3BlbiBjZWxscywgc28gdGhlIHdpcmUgc3RheXMgb3BhcXVlIGFuZCBzb3J0cyBsaWtlIGEgc29saWQuXG4gICAgaWYgKHMuYWxwaGFUZXN0ICE9PSB1bmRlZmluZWQpIHsgbS5hbHBoYVRlc3QgPSBzLmFscGhhVGVzdDsgbS50cmFuc3BhcmVudCA9IGZhbHNlOyB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN3aW5nTGlkUmVjeWNsaW5nQmluTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdTd2luZy1MaWQgUmVjeWNsaW5nIEJpbic7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbXBvbmVudHNcbiAgICogRWFjaCBlbnRyeSBvZiBDT05GSUcuZ2VvbWV0cnkuY29tcG9uZW50cyBpcyBPTkUgbWVyZ2VkIGdlb21ldHJ5IG9uIE9ORSBtYXRlcmlhbCAtLSBvbmUgZHJhd1xuICAgKiBjYWxsLiBFdmVyeSBwYXJ0IGluc2lkZSBpdCBpcyBhIHRpbnRlZCBib3gsIHR1YmUsIGN5bGluZGVyLCBsYXRoZSBvciBwbGFuZTsgY29sb3VyIGRpZmZlcmVuY2VzXG4gICAqIGFyZSB2ZXJ0ZXggY29sb3Vycy4gYHV2YCBwaWNrcyBob3cgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSByZXBlYXRzIG92ZXIgaXQuICovXG4gIGZvciAoY29uc3QgYyBvZiBHLmNvbXBvbmVudHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoYy5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgbWlycm9yWCgoYy5ib3hlc01pcnJvcmVkID8/IFtdKSBhcyBudW1iZXJbXVtdKSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgKGMudHViZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgICAvLyBTV0VQVCB0dWJlczogb25lIG1pdHJlZCByaW5nIHBlciBwb2ludCBpbnN0ZWFkIG9mIGEgY3lsaW5kZXIgcGVyIHNlZ21lbnQgLS0gdGhlIG9ubHkgdGhpbmcgdGhhdFxuICAgIC8vIHN1cnZpdmVzIGEgdGlnaHQgYmVuZC4gU2VlIHN3ZWVwVHViZS5cbiAgICBmb3IgKGNvbnN0IHQgb2YgKGMuc3dlZXBzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaChzd2VlcFR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gMTAsIHQuaGV4LCB0LmNhcCAhPT0gZmFsc2UpKTtcbiAgICBmb3IgKGNvbnN0IHN0IG9mIChjLnN0cmFwcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2goc3RyYXAoc3QucHRzLCBzdC53LCBzdC50LCBzdC5hYm91dCwgc3QuaGV4KSk7XG4gICAgZm9yIChjb25zdCBjeSBvZiAoYy5jeWxzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHRoMGAvYHRoTGVuYCBtYWtlIGEgUEFSVElBTCBjeWxpbmRlciAoYSBjdXJ2ZWQgc3RpY2tlciBwYXRjaCB3cmFwcGVkIG9uIGEgcm91bmQgYm9keSkgYW5kXG4gICAgICAvLyBgb3BlbmAgZHJvcHMgdGhlIGNhcHM7IHRoZSBzaWRlIFVWcyB0aGVuIHJ1biAwLi4xIGFjcm9zcyB0aGUgYXJjIGFuZCB1cCB0aGUgaGVpZ2h0LCB3aGljaCBpc1xuICAgICAgLy8gd2hhdCBhIGJha2VkIGdyYXBoaWMgd2FudHMuIGB1dlJlcGAgbXVsdGlwbGllcyB0aGVtIGZvciBhIHJlcGVhdGluZyB0aWxlLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGN5LnJ0LCBjeS5yYiwgY3kuaCwgY3kuc2VnID8/IDEyLCAxLCBjeS5vcGVuID8/IGZhbHNlLCBjeS50aDAgPz8gMCwgY3kudGhMZW4gPz8gTWF0aC5QSSAqIDIpO1xuICAgICAgaWYgKGN5LnV2UmVwKSB7IGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7IGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIGN5LnV2UmVwWzBdLCB1di5nZXRZKGkpICogY3kudXZSZXBbMV0pOyB9XG4gICAgICAvLyBgc2lkZVVWYCBwaW5zIHRoZSBTSURFIHdhbGwncyBVVnMgdG8gb25lIHRleGVsIHNvIGEgZGlzYyBjYXJyeWluZyBhIGJha2VkIHRvcC1kb3duIGltYWdlIHNob3dzXG4gICAgICAvLyB0aGF0IGltYWdlIG9uIGl0cyBjYXAgYWxvbmUsIHdpdGggaXRzIHJpbSBpbiB3aGF0ZXZlciB0aGUgcGlubmVkIHRleGVsIGhvbGRzIChhIGJhZyB0b25lKS5cbiAgICAgIGlmIChjeS5zaWRlVVYpIHsgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKSwgbiA9ICgoY3kuc2VnID8/IDEyKSArIDEpICogMjsgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHV2LnNldFhZKGksIGN5LnNpZGVVVlswXSwgY3kuc2lkZVVWWzFdKTsgfVxuICAgICAgLy8gYHNjYWxlYCBiZWZvcmUgdGhlIHJvdGF0aW9uczogYW4gT1ZBTCBiYXNpbiBvciBkaXNjLCB3aGljaCBhIGxhdGhlIG9yIGEgY3lsaW5kZXIgY2Fubm90XG4gICAgICAvLyByZXZvbHZlIG9uIGl0cyBvd24uIE5vcm1hbHMgYXJlIHJlY29tcHV0ZWQgYmVjYXVzZSBhIG5vbi11bmlmb3JtIHNjYWxlIHNrZXdzIHRoZW0uXG4gICAgICBpZiAoY3kuc2NhbGUpIHsgZy5zY2FsZShjeS5zY2FsZVswXSwgY3kuc2NhbGVbMV0sIGN5LnNjYWxlWzJdKTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyB9XG4gICAgICAvLyBDVUxNIFVWczogdSBhcm91bmQgdGhlIGNpcmN1bWZlcmVuY2UsIHYgYWxvbmcgdGhlIGxlbmd0aCwgYm90aCBpbiBtZXRyZXMgLS0gc28gdGhlIG5vZGVcbiAgICAgIC8vIHJpbmdzIG9mIGEgY3VsbSB0aWxlIGNyb3NzIGEgYmFtYm9vIHBvbGUgYXQgcmVhbCBzcGFjaW5nIGhvd2V2ZXIgdGhlIHBvbGUgaXMgdGhlbiB0dXJuZWQuXG4gICAgICAvLyBJdCBoYXMgdG8gaGFwcGVuIEJFRk9SRSB0aGUgcm90YXRpb25zLCB3aGlsZSB0aGUgY3lsaW5kZXIgc3RpbGwgcnVucyBhbG9uZyBpdHMgb3duIFkuXG4gICAgICBpZiAoYy51diA9PT0gJ2N1bG0nKSBjdWxtVVYoZywgY3kucnQsIGN5LmgsIGMudXZTY2FsZSA/PyAxLCBjeS52T2ZmID8/IDApO1xuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnkpIGcucm90YXRlWShjeS5yeSk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbCBvZiAoYy5sYXRoZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgcnlgIHlhd3MgdGhlIHJldm9sdXRpb246IGEgNC1zZWdtZW50IGxhdGhlIHR1cm5lZCA0NSBkZWdyZWVzIGlzIGEgY2hhbWZlcmVkIFNRVUFSRSBzbGFiIGluIG9uZVxuICAgICAgLy8gZ2VvbWV0cnkgKGEgY29uZSdzIHJ1YmJlciBiYXNlKSwgd2hlcmUgdHdvIHN0YWNrZWQgYm94ZXMgd291bGQgY29zdCB0d28gYW5kIGEgY29wbGFuYXIgcGFpci5cbiAgICAgIC8vIGBjeWxVVmAgKGEgdGlsZSBzaXplIGluIG1ldHJlcykgd3JpdGVzIGEgc2VhbWxlc3MgYXJvdW5kLWJ5LXVwIFVWIGZyb20gdGhlIGxhdGhlJ3Mgb3duIHNlZ21lbnRcbiAgICAgIC8vIGluZGV4IC0tIGF0YW4yIHdvdWxkIGZvbGQgYSB3aG9sZSB0aWxlIGludG8gdGhlIHNlYW0gY29sdW1uIC0tIGZvciB0cmVhZCwgZmx1dGluZyBhbmQgZ3JhaW4uXG4gICAgICBjb25zdCBnID0gbGF0aGUobC5wdHMsIGwuc2VnID8/IDEyLCAwLCBsLnNoYXJwICE9PSBmYWxzZSwgbC53ZWxkU2VhbSA9PT0gdHJ1ZSk7XG4gICAgICBpZiAobC5jeWxVVikgeyBjb25zdCBjdSA9IEFycmF5LmlzQXJyYXkobC5jeWxVVikgPyBsLmN5bFVWIDogW2wuY3lsVVYsIGwuY3lsVVYsIDBdOyBsYXRoZVVWKGcsIChnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCAvICgobC5zZWcgPz8gMTIpICsgMSkpIHwgMCwgbC5zZWcgPz8gMTIsIGN1WzBdLCBjdVsxXSwgY3VbMl0gPz8gMCk7IH1cbiAgICAgIGlmIChsLnNjYWxlKSB7IGcuc2NhbGUobC5zY2FsZVswXSwgbC5zY2FsZVsxXSwgbC5zY2FsZVsyXSk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgfVxuICAgICAgLy8gYHJ5YCB5YXdzIHRoZSByZXZvbHV0aW9uIChhYm92ZSkuIGByeGAvYHJ6YCBUSUxUIHRoZSBheGlzIGl0c2VsZiwgd2hpY2ggaXMgd2hhdCBhIFdBTEwgb3JcbiAgICAgIC8vIGNlaWxpbmcgZml0dGluZyBuZWVkczogYSBsYXRoZSByZXZvbHZlcyBhYm91dCArWSwgYW5kIGEgYnVsa2hlYWQgbGFtcCdzIGF4aXMgaXMgdGhlIHdhbGxcbiAgICAgIC8vIG5vcm1hbCwgc28gaXRzIGJhY2twbGF0ZSBhbmQgZG9tZSBhcmUgYXV0aG9yZWQgYWJvdXQgWSBhbmQgbGFpZCBkb3duIHdpdGggcnggPSBQSS8yLlxuICAgICAgaWYgKGwucnkpIGcucm90YXRlWShsLnJ5KTsgaWYgKGwucngpIGcucm90YXRlWChsLnJ4KTsgaWYgKGwucnopIGcucm90YXRlWihsLnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGwuYXRbMF0sIGwuYXRbMV0sIGwuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgbC5oZXgpKTtcbiAgICB9XG4gICAgLy8gUklCQkVEIERPTUVTOiBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiBjYXJyeWluZyB2ZXJ0aWNhbCBGTFVURVMsIGFzIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgXG4gICAgLy8gc2FtcGxlZCBwZXIgc2VjdG9yIHJhdGhlciB0aGFuIGEgbGF0aGUuIEEgcHJlc3NlZC1nbGFzcyBsYW1wIGRvbWUgaXMgZmx1dGVkLCBhbmQgYSBzbW9vdGggb25lXG4gICAgLy8gcmVhZHMgYXMgYSBwbGFzdGljIGJ1YmJsZSAtLSB0aGUgcmlicyBhcmUgbW9zdCBvZiB3aGF0IHNheXMgYGdsYXNzYCBhdCBwcm9wIGRpc3RhbmNlLiBBdXRob3JlZFxuICAgIC8vIGFib3V0ICtZIGxpa2UgYSBsYXRoZSwgc28gYSB3YWxsIGZpdHRpbmcgbGF5cyBpdCBkb3duIHdpdGggcnguXG4gICAgZm9yIChjb25zdCBkIG9mIChjLmRvbWVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHJpYmJlZERvbWUoZC5wdHMsIGQucmlicywgZC5hbXAsIGQuc2VnID8/IDI0LCBkLnZhbGxleSk7XG4gICAgICBpZiAoZC5yeSkgZy5yb3RhdGVZKGQucnkpOyBpZiAoZC5yeCkgZy5yb3RhdGVYKGQucngpOyBpZiAoZC5yeikgZy5yb3RhdGVaKGQucnopO1xuICAgICAgaWYgKGQuYXQpIGcudHJhbnNsYXRlKGQuYXRbMF0sIGQuYXRbMV0sIGQuYXRbMl0pO1xuICAgICAgLy8gQSBmbHV0ZWQgZG9tZSB3cml0ZXMgaXRzIE9XTiBjb2xvdXIgYXR0cmlidXRlICh0aGUgY3Jlc3QtdG8tdmFsbGV5IG11bHRpcGxpZXIpLCBzbyB0aW50R2VvXG4gICAgICAvLyB3b3VsZCBvdmVyd3JpdGUgdGhlIGZsdXRlIHN0cmlwaW5nIHdpdGggb25lIGZsYXQgaGV4IC0tIHRoZSBzYW1lIHRyYXAgYHNoZWV0YCdzIGhleFVuZGVyXG4gICAgICAvLyBmZWxsIGludG8uIE11bHRpcGx5IHRoZSB0b25lIElOVE8gdGhlIG11bHRpcGxpZXIgaW5zdGVhZCwgc28gdGhlIGRvbWUgY2FycmllcyBib3RoLlxuICAgICAgaWYgKGQudmFsbGV5ICYmIGQuaGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY29sID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgICBjb25zdCB0ID0gbmV3IFRIUkVFLkNvbG9yKGQuaGV4KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2wuY291bnQ7IGkrKykgY29sLnNldFhZWihpLCBjb2wuZ2V0WChpKSAqIHQuciwgY29sLmdldFkoaSkgKiB0LmcsIGNvbC5nZXRaKGkpICogdC5iKTtcbiAgICAgICAgZ3MucHVzaChnKTtcbiAgICAgIH0gZWxzZSBncy5wdXNoKGQudmFsbGV5ID8gZyA6IHRpbnRHZW8oZywgZC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwIG9mIChjLnBsYW5lcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgUEFORTogYSBzaW5nbGUgcXVhZCBpbiB0aGUgWFkgcGxhbmUgYXQgZGVwdGggeiwgZG91YmxlLXNpZGVkIGJ5IGl0cyBtYXRlcmlhbC4gSXRzIFVWcyBydW5cbiAgICAgIC8vIDAuLjEgYWNyb3NzIHRoZSBwYW5lIHNvIGFuIGFscGhhLWN1dCB0aWxlIHJlcGVhdHMgYHJlcGAgdGltZXMgYWNyb3NzIGFuZCBkb3duLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHAudywgcC5oLCAxLCAxKTtcbiAgICAgIGcudHJhbnNsYXRlKHAuYXRbMF0sIHAuYXRbMV0sIHAuYXRbMl0pO1xuICAgICAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIChwLnJlcD8uWzBdID8/IDEpLCB1di5nZXRZKGkpICogKHAucmVwPy5bMV0gPz8gMSkpO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIHAuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5leHRydWRlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgcHJvZmlsZSBpbiB0aGUgWFkgcGxhbmUgZXh0cnVkZWQgYWxvbmcgWiBiZXR3ZWVuIHowIGFuZCB6MSAtLSBhIHNsYWIgd2l0aCBhIG1vdWxkZWQgZWRnZSxcbiAgICAgIC8vIGEgcHlyYW1pZCBjYXAgYXMgYSBzdGVwcGVkIHByb2ZpbGUsIGEgc3BlYXIgZmluaWFsLlxuICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIHNoYXBlLm1vdmVUbyhlLnBvbHlbMF1bMF0sIGUucG9seVswXVsxXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGUucG9seS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKGUucG9seVtpXVswXSwgZS5wb2x5W2ldWzFdKTtcbiAgICAgIHNoYXBlLmNsb3NlUGF0aCgpO1xuICAgICAgZm9yIChjb25zdCBoIG9mIChlLmhvbGVzID8/IFtdKSBhcyBudW1iZXJbXVtdW10pIHtcbiAgICAgICAgY29uc3QgaHAgPSBuZXcgVEhSRUUuUGF0aCgpOyBocC5tb3ZlVG8oaFswXVswXSwgaFswXVsxXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaC5sZW5ndGg7IGkrKykgaHAubGluZVRvKGhbaV1bMF0sIGhbaV1bMV0pO1xuICAgICAgICBocC5jbG9zZVBhdGgoKTsgc2hhcGUuaG9sZXMucHVzaChocCk7XG4gICAgICB9XG4gICAgICBjb25zdCBnID0gZXh0cnVkZUFsb25nWihzaGFwZSwgZS56MCwgZS56MSk7XG4gICAgICBpZiAoZS5yeCkgZy5yb3RhdGVYKGUucngpO1xuICAgICAgaWYgKGUucnkpIGcucm90YXRlWShlLnJ5KTtcbiAgICAgIGlmIChlLnJ6KSBnLnJvdGF0ZVooZS5yeik7XG4gICAgICBpZiAoZS5hdCkgZy50cmFuc2xhdGUoZS5hdFswXSwgZS5hdFsxXSwgZS5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgZS5oZXgpKTtcbiAgICB9XG4gICAgLy8gRUxMSVBTT0lEUzogW2hleCwgY3gsIGN5LCBjeiwgcngsIHJ5LCByeiwgcm90WD8sIHJvdFk/LCByb3RaP10gLS0gYSB1bml0IHNwaGVyZSBzY2FsZWQgcGVyIGF4aXNcbiAgICAvLyBhbmQgdHVybmVkIGFib3V0IGl0cyBvd24gY2VudHJlLiBBIHNrdWxsIGRvbWUsIGEgcGF3LCBhIG5vc2UgcGFkOiB0aGUgcm91bmRlZCBzb2xpZHMgb2YgYW5cbiAgICAvLyBhbmltYWwgdGhhdCBhIGJveCBvciBhIHN0YXRpb24gdHViZSBjYW5ub3QgZ2l2ZSwgc2hhcmluZyBzbW9vdGggbm9ybWFscyB0aHJvdWdoIHRoZSBtZXJnZS5cbiAgICBmb3IgKGNvbnN0IGUgb2YgKGMuZWxsaXBzb2lkcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkge1xuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLCBlWzEwXSA/PyAxNiwgZVsxMV0gPz8gMTIpO1xuICAgICAgZy5zY2FsZShlWzRdLCBlWzVdLCBlWzZdKTtcbiAgICAgIGlmIChlWzddKSBnLnJvdGF0ZVgoZVs3XSk7IGlmIChlWzhdKSBnLnJvdGF0ZVkoZVs4XSk7IGlmIChlWzldKSBnLnJvdGF0ZVooZVs5XSk7XG4gICAgICBnLnRyYW5zbGF0ZShlWzFdLCBlWzJdLCBlWzNdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlWzBdKSk7XG4gICAgfVxuICAgIC8vIEZSVVNUQTogW2hleCwgY3gsIHlCb3R0b20sIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0gLS0gYSBib3ggd2hvc2UgZm9vdHByaW50IGNoYW5nZXMgZnJvbSAodzAsIGQwKSBhdFxuICAgIC8vIHRoZSBib3R0b20gdG8gKHcxLCBkMSkgYXQgdGhlIHRvcDogdGhlIHRhcGVyZWQgYm9keSBvZiBhIHdoZWVsaWUgYmluIG9yIGEgc3RlZWwgY29udGFpbmVyLlxuICAgIGZvciAoY29uc3QgZiBvZiAoYy5mcnVzdGEgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhmcnVzdHVtKGYuc2xpY2UoMSkpLCBmWzBdKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgLy8gRFJBUEVEIFNIRUVUUzogYSB0YXJwIG9yIGF3bmluZyBhcyBhIGhlaWdodCBncmlkIHdpdGggdGhpY2tuZXNzIC0tIGEgcmlkZ2UsIHRoZSBzYWcgYmV0d2VlblxuICAgIC8vIGl0cyBwb2xlcyBhbmQgdGhlIGRyb29wIG9mIGl0cyBmcmVlIGVkZ2VzIGFyZSBudW1iZXJzIGluIHRoZSBncmlkLCBjb21wdXRlZCBhdCBlbWl0IHRpbWUuXG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNoZWV0cyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgc2hlZXQgZ2l2ZW4gYGhleFVuZGVyYCBoYXMgYWxyZWFkeSB3cml0dGVuIGl0cyBPV04gY29sb3VyIGF0dHJpYnV0ZSwgb25lIHRvbmUgZm9yIHRoZSB0b3BcbiAgICAgIC8vIGdyaWQgYW5kIGFub3RoZXIgZm9yIHRoZSB1bmRlcnNpZGUgYW5kIHJpbS4gdGludEdlbyB3b3VsZCBvdmVyd3JpdGUgdGhlIGxvdCB3aXRoIGEgc2luZ2xlXG4gICAgICAvLyBoZXggLS0gd2hpY2ggaXMgd2hhdCBzaGlwcGVkIHRoZSB0YXJwYXVsaW4gYmF5J3MgYmx1ZS1vdmVyLW9yYW5nZSB0YXJwIGFzIGEgd2hpdGUgc2FpbC5cbiAgICAgIGNvbnN0IGcgPSBzaGVldChzKTtcbiAgICAgIGdzLnB1c2gocy5oZXhVbmRlciAhPT0gdW5kZWZpbmVkID8gZyA6IHRpbnRHZW8oZywgcy5oZXgpKTtcbiAgICB9XG4gICAgLy8gT1JHQU5JQyBzdGF0aW9uIHR1YmVzOiBbeiwgY3gsIGN5LCByeCwgcnldIHN0YXRpb25zIHN3ZXB0IGFsb25nIFogLS0gdGhlIG9ubHkgc29mdCBmb3JtIGluIHRoZVxuICAgIC8vIGtpdCwgYSBseWluZyBhbmltYWwuIExpdCBzbW9vdGggYnkgdGhlIGhlbHBlcidzIHNoYXJlZCByaW5nIHZlcnRpY2VzLlxuICAgIGZvciAoY29uc3QgdCBvZiAoYy50dWJlc0Fsb25nID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHR1YmVBbG9uZyh0LnN0YXRpb25zLCB0LnNlZyA/PyAxMik7XG4gICAgICBpZiAodC5yeSkgZy5yb3RhdGVZKHQucnkpOyBpZiAodC5hdCkgZy50cmFuc2xhdGUodC5hdFswXSwgdC5hdFsxXSwgdC5hdFsyXSk7XG4gICAgICAvLyBgaGV4ZXNgIC0tIG9uZSBjb2xvdXIgcGVyIFNUQVRJT04sIGJsZW5kZWQgYWxvbmcgdGhlIHN3ZWVwIC0tIGlzIGhvdyBhIGNvYXQgcGF0dGVybiB0aGF0IHJ1bnNcbiAgICAgIC8vIGFsb25nIHRoZSBib2R5IChhIHdoaXRlIGNvbGxhciBiZXR3ZWVuIGEgdGFuIHNrdWxsIGFuZCBhIHRhbiBzYWRkbGUpIGlzIGNhcnJpZWQgb24gYSBzaW5nbGVcbiAgICAgIC8vIG1lcmdlZCBtZXNoLiBUaGUgY29tcG9uZW50J3MgYXhpcyB0aW50IHRoZW4gbXVsdGlwbGllcyB0aGUgZG9yc2FsLXRvLXZlbnRyYWwgZmFkZSBpbnRvIGl0LFxuICAgICAgLy8gYW5kIG5laXRoZXIgY29zdHMgYSBtYXRlcmlhbC4gQSBzaW5nbGUgYGhleGAgc3RheXMgdGhlIGRlZmF1bHQuXG4gICAgICBpZiAodC5oZXhlcykge1xuICAgICAgICAvLyBBIHN0YXRpb24gZW50cnkgbWF5IGJlIG9uZSBoZXgsIG9yIGEgUEFJUiBbZG9yc2FsLCB2ZW50cmFsXSBibGVuZGVkIGFyb3VuZCB0aGUgcmluZyBieSB0aGVcbiAgICAgICAgLy8gc2FtZSBzaW4odGhldGEpIHR1YmVBbG9uZyBzd2VwdCB0aGUgc2VjdGlvbiB3aXRoIC0tIHNvIHRoZSBjb2F0IHJ1bnMgYm90aCBBTE9ORyB0aGUgYm9keVxuICAgICAgICAvLyAoYSB3aGl0ZSBjb2xsYXIgYmV0d2VlbiBhIHRhbiBza3VsbCBhbmQgYSB0YW4gc2FkZGxlKSBhbmQgQUNST1NTIGl0ICh0aGUgc2FkZGxlIGdpdmluZyB3YXlcbiAgICAgICAgLy8gdG8gYSBkdXN0eSBmbGFuayBhbmQgYSBwYWxlIGJlbGx5KS4gQW4gYXhpcyB0aW50IGNhbm5vdCBkbyB0aGUgc2Vjb25kIGhhbGY6IG9uIGFuIGFuaW1hbFxuICAgICAgICAvLyBseWluZyBvbiBpdHMgc2lkZSB0aGUgZG9yc2FsLXRvLXZlbnRyYWwgYXhpcyBpcyBob3Jpem9udGFsLCBzbyBhIGJhbmQgaW4geCBjdXRzIHRoZSBjcm93blxuICAgICAgICAvLyBvZiB0aGUgc3dlZXAgaW4gaGFsZiwgYW5kIGEgTVVMVElQTFkgY2FuIG9ubHkgZXZlciBkYXJrZW4gLS0gaXQgY2Fubm90IHRha2UgYSB3YXJtIHRhbiB0b1xuICAgICAgICAvLyBhIGNvb2xlciBncmV5LiBUd28gY29sb3VycyBwZXIgc3RhdGlvbiwgb25lIGF0dHJpYnV0ZSwgc3RpbGwgb25lIGRyYXcgY2FsbC5cbiAgICAgICAgY29uc3Qgc2VnID0gdC5zZWcgPz8gMTIsIG4gPSB0LnN0YXRpb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShzZWcgKiBuICogMyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZSA9IHQuaGV4ZXNbTWF0aC5taW4odC5oZXhlcy5sZW5ndGggLSAxLCBpKV07XG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBUSFJFRS5Db2xvcihBcnJheS5pc0FycmF5KGUpID8gZVswXSA6IGUpLCB2ID0gbmV3IFRIUkVFLkNvbG9yKEFycmF5LmlzQXJyYXkoZSkgPyBlWzFdIDogZSk7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZiA9IChNYXRoLnNpbihqICogTWF0aC5QSSAqIDIgLyBzZWcpICsgMSkgLyAyO1xuICAgICAgICAgICAgY29uc3QgayA9IChpICogc2VnICsgaikgKiAzO1xuICAgICAgICAgICAgY29sW2tdID0gZC5yICsgKHYuciAtIGQucikgKiBmOyBjb2xbayArIDFdID0gZC5nICsgKHYuZyAtIGQuZykgKiBmOyBjb2xbayArIDJdID0gZC5iICsgKHYuYiAtIGQuYikgKiBmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICAgICAgICBncy5wdXNoKGcpO1xuICAgICAgfSBlbHNlIGdzLnB1c2godGludEdlbyhnLCB0LmhleCA/PyAweGZmZmZmZikpO1xuICAgIH1cbiAgICBsZXQgZyA9IG1lcmdlR2Vvcyhncyk7XG4gICAgLy8gYSBwZXItY29tcG9uZW50IHNjYWxlLCBhcHBsaWVkIHRvIHRoZSBtZXJnZSBiZWZvcmUgdGludGluZzogaG93IGEgbHlpbmcgYW5pbWFsIGF1dGhvcmVkIGF0XG4gICAgLy8gaXRzIG93biBwcm9wb3J0aW9ucyBpcyBmaXR0ZWQgaW50byB0aGUgZGVjbGFyZWQgZW52ZWxvcGUgd2l0aG91dCByZS1yZWFkaW5nIGV2ZXJ5IHN0YXRpb25cbiAgICBpZiAoYy5zY2FsZSkgZy5zY2FsZShjLnNjYWxlWzBdLCBjLnNjYWxlWzFdLCBjLnNjYWxlWzJdKTtcbiAgICAvLyBBWElTIFRJTlQ6IGEgcGVyLXZlcnRleCBibGVuZCBmcm9tIGMwIGF0IGBmcm9tYCB0byBjMSBhdCBgdG9gIGFsb25nIG9uZSBheGlzLCBvdmVyIHRoZSB3aG9sZVxuICAgIC8vIG1lcmdlIC0tIGEgdGFuIGJhY2sgZmFkaW5nIHRvIGEgd2hpdGUgYmVsbHkgY29zdHMgYW4gYXR0cmlidXRlLCBub3QgYSBzZWNvbmQgbWF0ZXJpYWwuIEFwcGxpZWRcbiAgICAvLyBpbiBMSU5FQVIgc3BhY2UgdGhyb3VnaCBUSFJFRS5Db2xvci4gYGtlZXBgIG11bHRpcGxpZXMgdGhlIGJsZW5kIGludG8gdGhlIGV4aXN0aW5nIHRpbnQgaW5zdGVhZFxuICAgIC8vIG9mIHJlcGxhY2luZyBpdCwgc28gYSBkYXJrIG5vc2Ugc3RheXMgZGFyay5cbiAgICBpZiAoYy50aW50KSB7XG4gICAgICBjb25zdCBhID0gbmV3IFRIUkVFLkNvbG9yKGMudGludC5jMCksIGIgPSBuZXcgVEhSRUUuQ29sb3IoYy50aW50LmMxKTtcbiAgICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTsgbGV0IGNvbCA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSB8IG51bGw7XG4gICAgICBpZiAoIWNvbCkgeyBjb2wgPSBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpLmZpbGwoMSksIDMpOyBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBjb2wpOyB9XG4gICAgICBjb25zdCBheCA9IGMudGludC5heGlzID09PSAneCcgPyAwIDogYy50aW50LmF4aXMgPT09ICd5JyA/IDEgOiAyO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgdiA9IGF4ID09PSAwID8gcC5nZXRYKGkpIDogYXggPT09IDEgPyBwLmdldFkoaSkgOiBwLmdldFooaSk7XG4gICAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAodiAtIGMudGludC5mcm9tKSAvIChjLnRpbnQudG8gLSBjLnRpbnQuZnJvbSkpKTtcbiAgICAgICAgY29uc3QgciA9IGEuciArIChiLnIgLSBhLnIpICogdCwgZ2cgPSBhLmcgKyAoYi5nIC0gYS5nKSAqIHQsIGJiID0gYS5iICsgKGIuYiAtIGEuYikgKiB0O1xuICAgICAgICBpZiAoYy50aW50LmtlZXApIGNvbC5zZXRYWVooaSwgY29sLmdldFgoaSkgKiByLCBjb2wuZ2V0WShpKSAqIGdnLCBjb2wuZ2V0WihpKSAqIGJiKTsgZWxzZSBjb2wuc2V0WFlaKGksIHIsIGdnLCBiYik7XG4gICAgICB9XG4gICAgICBjb2wubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoYy51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAnaGVpZ2h0JykgZyA9IGhlaWdodFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ3BhbmVsJykgZyA9IHBhbmVsVVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAncGFuZWwtcm90JykgZyA9IHBhbmVsVVYoZywgYy51dlNjYWxlID8/IDEsIHRydWUpO1xuICAgIC8vICdjdWxtJyBpcyBkZWxpYmVyYXRlbHkgYWJzZW50IGhlcmU6IGl0IGlzIHdyaXR0ZW4gcGVyIGN5bGluZGVyIGFib3ZlLCBiZWZvcmUgdGhlIHJvdGF0aW9ucyxcbiAgICAvLyBhbmQgYSB3aG9sZS1tZXJnZSBwYXNzIHdvdWxkIGZsYXR0ZW4gaXQgYmFjayB0byB0aGUgY3lsaW5kZXIncyBkZWZhdWx0IDAuLjEgd3JhcC5cbiAgICBhZGQoYy5pZCwgYy5uYW1lLCBnLCBjLm1hdGVyaWFsKTtcbiAgICBpZiAoYy5jb2xsaWRlcikgY29sbGlkZXJzW2MuaWRdID0gYy5jb2xsaWRlcjtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmVwZXRpdGlvbiBzeXN0ZW1zXG4gICAqIFBpY2tldHMsIHNsYXRzLCBsYXR0aWNlIHN0cmlwczogb25lIGdlb21ldHJ5LCBvbmUgSW5zdGFuY2VkTWVzaCwgb25lIGRyYXcgY2FsbC4gKi9cbiAgZm9yIChjb25zdCByIG9mIChHLmluc3RhbmNlZCA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoci5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgKHIuc3Bpa2VzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNwaWtlKHMuYXQsIHMudywgcy5oKSwgcy5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IGYgb2YgKHIuZnJ1c3RhID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8oZnJ1c3R1bShmLnNsaWNlKDEpKSwgZlswXSkpO1xuICAgIGZvciAoY29uc3QgY3kgb2YgKHIuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIGB0aDBgL2B0aExlbmAgY3V0IGEgUEFSVElBTCBjeWxpbmRlciB0aGUgc2FtZSB3YXkgdGhlIGNvbXBvbmVudCBicmFuY2ggZG9lczogYSBzcGxpdCBiYW1ib29cbiAgICAgIC8vIGN1bG0gaXMgYSBoYWxmIHBpcGUsIHRoTGVuID0gUEksIGBvcGVuYCBzbyBpdCBpcyBhIHNoZWxsIHdpdGggbm8gZGlzY3MgYXQgaXRzIGVuZHMuIFRoZVxuICAgICAgLy8gbWF0ZXJpYWwgY2FycmllcyBkb3VibGVTaWRlZCwgYmVjYXVzZSBhIGhvbGxvdy11cCBjdWxtIGlzIHNlZW4gZnJvbSB0aGUgaW5zaWRlLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGN5LnJ0LCBjeS5yYiwgY3kuaCwgY3kuc2VnID8/IDEyLCAxLCBjeS5vcGVuID8/IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5LnRoMCA/PyAwLCBjeS50aExlbiA/PyBNYXRoLlBJICogMik7XG4gICAgICBpZiAoci51diA9PT0gJ2N1bG0nKSBjdWxtVVYoZywgY3kucnQsIGN5LmgsIHIudXZTY2FsZSA/PyAxLCBjeS52T2ZmID8/IDApO1xuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnkpIGcucm90YXRlWShjeS5yeSk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIC8vIEFuIE9QRU4gd2hlZWwgLS0gdHlyZSBhbmQgcmltIGFzIGNsb3NlZCByaW5nIGxhdGhlcywgYSBodWIsIGFuZCB3aXJlIHNwb2tlcyAtLSBmb3IgYSBiaWN5Y2xlXG4gICAgLy8gd2hvc2Ugd2hlZWxzIHJlYWQgYXMgYmljeWNsZSB3aGVlbHMgcmF0aGVyIHRoYW4gZGlzY3MuIExhdGhlcyByZXZvbHZlIGFib3V0IFkgKGByeGAgbGF5cyB0aGVcbiAgICAvLyBheGxlIHdoZXJlIHRoZSBwbGFjZW1lbnQgd2FudHMgaXQpOyBgc3Bva2VzYCByYWRpYXRlIGFib3V0IFggYnkgdGhlIGhlbHBlcidzIGNvbnZlbnRpb24sIHNvIGFuXG4gICAgLy8gYXhsZSBvbiBaIHRha2VzIGByeTogUEkvMmAuXG4gICAgZm9yIChjb25zdCBsIG9mIChyLmxhdGhlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBsYXRoZShsLnB0cywgbC5zZWcgPz8gMTIsIDAsIGwuc2hhcnAgIT09IGZhbHNlLCBsLndlbGRTZWFtID09PSB0cnVlKTtcbiAgICAgIGlmIChsLnJ4KSBnLnJvdGF0ZVgobC5yeCk7IGlmIChsLnJ5KSBnLnJvdGF0ZVkobC5yeSk7IGlmIChsLnJ6KSBnLnJvdGF0ZVoobC5yeik7XG4gICAgICBpZiAobC5hdCkgZy50cmFuc2xhdGUobC5hdFswXSwgbC5hdFsxXSwgbC5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBsLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHMgb2YgKHIuc3Bva2VzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHNwb2tlcyhzLnJIdWIsIHMuclJpbSwgcy5oYWxmVywgcy5uLCBzLmhleCwgcy50ID8/IDAuMDA2LCBzLnByaXNtID8/IGZhbHNlKTtcbiAgICAgIGlmIChzLnJ4KSBnLnJvdGF0ZVgocy5yeCk7IGlmIChzLnJ5KSBnLnJvdGF0ZVkocy5yeSk7IGlmIChzLnJ6KSBnLnJvdGF0ZVoocy5yeik7XG4gICAgICBpZiAocy5hdCkgZy50cmFuc2xhdGUocy5hdFswXSwgcy5hdFsxXSwgcy5hdFsyXSk7IGdzLnB1c2goZyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdCBvZiAoci50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIGxldCBnID0gbWVyZ2VHZW9zKGdzKTtcbiAgICBpZiAoci51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgci51dlNjYWxlID8/IDEpO1xuICAgIGlmIChyLnV2ID09PSAnaGVpZ2h0JykgZyA9IGhlaWdodFVWKGcsIHIudXZTY2FsZSA/PyAxKTtcbiAgICAvLyAnY3VsbScgYWdhaW4gd3JpdHRlbiBwZXIgY3lsaW5kZXIgYWJvdmUsIGJlZm9yZSB0aGUgcm90YXRpb25zLlxuICAgIGNvbnN0IG1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgcCBvZiByLnBsYWNlbWVudHMgYXMgbnVtYmVyW11bXSkge1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKG5ldyBUSFJFRS5FdWxlcihwWzNdID8/IDAsIHBbNF0gPz8gMCwgcFs1XSA/PyAwKSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKSk7XG4gICAgfVxuICAgIGFkZEluc3Qoci5pZCwgci5uYW1lLCBnLCByLm1hdGVyaWFsLCBtYXRzLCByLmNvbG9ycyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhc2VzICovXG4gIGZvciAoY29uc3QgdCBvZiAoQ09ORklHLnRpbGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG1hdCA9IG1hdGVyaWFsc1t0Lm1hdGVyaWFsXTtcbiAgICBpZiAoIW1hdCkgY29udGludWU7XG4gICAgLy8gQSBCQUtFRCBncmFwaGljIChhIHByaW50ZWQgc2lnbiBmYWNlKTogb25lIFdlYlAgZGF0YSBVUkkgY29tcG9zZWQgb2ZmbGluZSBmcm9tIHRoZSBwbGF0ZSdzIG93blxuICAgIC8vIHByaW50ZWQgcmVnaW9uIGFuZCB2ZWN0b3IgbWFya3MsIGxvYWRlZCB0aHJvdWdoIFRleHR1cmVMb2FkZXIuIEFzc2lnbmVkIHN5bmNocm9ub3VzbHkgc28gdGhlXG4gICAgLy8gaGFybmVzcyB3YWl0cyBvbiB0aGUgZGVjb2RlLiBJdCBiZWF0cyBmaWxsVGV4dCwgd2hpY2ggZHJhd3MgYSBkaWZmZXJlbnQgd29yZG1hcmsgcGVyIG1hY2hpbmUuXG4gICAgaWYgKHQua2luZCA9PT0gJ2Jha2VkJykge1xuICAgICAgLy8gVW5kZXIgcGxhaW4gTm9kZSAodGhlIGNvcGxhbmFyIGNoZWNrLCB0aGUgcnVudGltZSBwcm9iZSkgdGhlcmUgaXMgbm8gZG9jdW1lbnQgZm9yIEltYWdlTG9hZGVyOlxuICAgICAgLy8ga2VlcCB0aGUgd2hpdGUgZmFsbGJhY2sgcmF0aGVyIHRoYW4gdGhyb3csIGV4YWN0bHkgYXMgdGhlIHJldGFpbCBnbGF6aW5nIGRvZXMuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgY29udGludWU7XG4gICAgICBjb25zdCBiYWtlZCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCh0LnVyaSk7XG4gICAgICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG4gICAgICBpZiAoc3JnYikgYmFrZWQuY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgICBiYWtlZC5hbmlzb3Ryb3B5ID0gNDtcbiAgICAgIG1hdC5tYXAgPSBiYWtlZDsgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBsZXQgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKHQua2luZCA9PT0gJ211ZCcpIHRleCA9IG11ZFRpbGUodC5zaXplID8/IDUxMiwgdC5iYXNlLCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMzKTtcbiAgICBpZiAodC5raW5kID09PSAnZHVzdCcpIHRleCA9IGR1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuZHVzdCwgdC5zZWVkID8/IDEsIHQuY292ZXJhZ2UgPz8gMC4zMCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BsYW5rJykgdGV4ID0gcGxhbmtUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYm9hcmRzID8/IDYsIHQuc2VlZCA/PyA1KTtcbiAgICBpZiAodC5raW5kID09PSAncnVzdCcpIHRleCA9IHJ1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQucmF0aW8sIHQuc2VlZCA/PyA3LCB0LmRlbnNpdHkgPz8gOTApO1xuICAgIGlmICh0LmtpbmQgPT09ICdwYWludCcpIHRleCA9IHBhaW50VGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTcsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjb3JydWdhdGlvbicpIHRleCA9IGNvcnJ1Z2F0aW9uVGlsZSh0LnNpemUgPz8gNTEyLCB0LnBpdGNoID8/IDEyLCB0LmxvdyA/PyAwLjcsIHQuc2VlZCA/PyAzKTtcbiAgICBpZiAodC5raW5kID09PSAnZ3JpbWUnKSB0ZXggPSBncmltZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDExLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnemluYycpIHRleCA9IHppbmNUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxOSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2Z1cicpIHRleCA9IGZ1clRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDEzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY2hhaW5saW5rJykgdGV4ID0gY2hhaW5saW5rVGlsZSh0LnNpemUgPz8gMjU2LCB0LndpcmUgPz8gMC4wOSwgdC5zZWVkID8/IDQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdiYW1ib28nKSB0ZXggPSBiYW1ib29UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc3RyaXBzID8/IDEwLCB0LnNlZWQgPz8gNik7XG4gICAgaWYgKHQua2luZCA9PT0gJ3N0cmlwZXMnKSB0ZXggPSBzdHJpcGVUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuYmFuZHMgPz8gOCwgdC5hLCB0LmIsIHQuc2VlZCA/PyA5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAncG9zdGVyJykgdGV4ID0gcG9zdGVyVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gOCwgdC5saW5lcyA/PyBbXSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BlYmJsZScpIHRleCA9IHBlYmJsZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDIxLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndHJlYWQnKSB0ZXggPSB0cmVhZFRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDIzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndHlyZScpIHRleCA9IHR5cmVUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuc2VlZCA/PyAyOSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2N1bG0nKSB0ZXggPSBjdWxtVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMzEpO1xuICAgIGlmICh0LmtpbmQgPT09ICdzYXduJykgdGV4ID0gc2F3blRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndGhhdGNoJykgdGV4ID0gdGhhdGNoVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMzcsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0YXJwJykgdGV4ID0gdGFycFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQxLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnZ2FsdicpIHRleCA9IGdhbHZUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA0NywgdCk7XG4gICAgYmluZFRpbGUobWF0LCB0ZXgsIHQuYnVtcCA/PyAwKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVN3aW5nTGlkUmVjeWNsaW5nQmluTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiB0aGUgcm9vdCwgcGx1cyBPTkUgUEVSIFdIRUVMIChhbmQgYW55IG90aGVyIG1lY2hhbmlzbSBDT05GSUcucGl2b3RzIG5hbWVzIC0tIGFcbiAgICAvLyBzdGVlcmluZyBoZWFkLCBhIGNhbm9weSBzdGF5KS4gQSB2ZWhpY2xlJ3Mgd2hlZWxzIGdlbnVpbmVseSB0dXJuLCBzbyBlYWNoIG9uZSBpcyBhIHByb21pc2VcbiAgICAvLyBrZXB0OiB0aGUgcGl2b3Qgc2l0cyBhdCB0aGUgaHViLCBpdHMgYXhpcyBpcyB0aGUgYXhsZSwgYW5kIGBpbnN0YW5jZWAgbmFtZXMgd2hpY2ggaW5zdGFuY2VcbiAgICAvLyBvZiB0aGUgd2hlZWwgSW5zdGFuY2VkTWVzaCBpdCBkcml2ZXMuIE5vdGhpbmcgZWxzZSBvbiB0aGUgcHJvcCBtb3ZlcyAtLSB0aGUgZG9vcnMgYXJlIHBhcnRcbiAgICAvLyBvZiB0aGUgYm9keSBzaGVsbCAtLSBzbyBub3RoaW5nIGVsc2UgZ2V0cyBhbiBheGlzLlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuICAgIGZvciAoY29uc3QgcHYgb2YgKENPTkZJRy5waXZvdHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBvID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICBvLm5hbWUgPSBwdi5uYW1lO1xuICAgICAgby5wb3NpdGlvbi5zZXQocHYucG9zaXRpb25bMF0sIHB2LnBvc2l0aW9uWzFdLCBwdi5wb3NpdGlvblsyXSk7XG4gICAgICBvLnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICAgIGFuaW1hdGlvblJvbGU6ICdjaGlsZCcsXG4gICAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBwdi5wb3NpdGlvbiwgYXhpczogcHYuYXhpcywgbmFtZTogcHYubmFtZSxcbiAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBwdi5jb21wb25lbnQsIGluc3RhbmNlOiBwdi5pbnN0YW5jZSA/PyBudWxsLCBub3RlczogcHYubm90ZSA/PyAnJyB9LFxuICAgICAgfTtcbiAgICAgIHJvb3QuYWRkKG8pO1xuICAgICAgcGl2b3RzLnB1c2gobyk7XG4gICAgfVxuXG4gICAgLy8gU29ja2V0czogTk9ORSB1bmxlc3MgQ09ORklHLnNvY2tldHMgbmFtZXMgb25lLiBOb3RoaW5nIGF0dGFjaGVzIHRvIGEgdmVoaWNsZSBpbiB0aGlzIGtpdFxuICAgIC8vIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFzQ3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxLQUFLO0FBQUEsUUFDSDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLFFBQ0g7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixjQUFjO0FBQUEsTUFDWjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsWUFBWTtBQUFBLFVBQ1YsU0FBUztBQUFBLFVBQ1QsZUFBZTtBQUFBLFlBQ2I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFVBQVU7QUFBQSxVQUNWLFVBQVU7QUFBQSxVQUNWLFFBQVE7QUFBQSxZQUNOO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE9BQU87QUFBQSxjQUNMO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsT0FBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFB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SUFBSSxFQUFFLEtBQUssS0FBSztBQUMxQixZQUFNLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNyRixZQUFNQyxNQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBR0MsTUFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQzNHLFlBQU0sSUFBSSxDQUFDRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLElBQUlELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsR0FBR0QsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxJQUFJRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLEdBQUdELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsSUFBSUQsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxDQUFDO0FBQ3RHLFlBQU0sTUFBTSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQ25ILGlCQUFXLEtBQUssS0FBSztBQUFFLFlBQUksS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUFHLFdBQUcsS0FBSyxHQUFHLENBQUM7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LFFBQVFBLElBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUN2RTtBQUtBLGVBQVcsS0FBTSxFQUFFLFVBQVUsQ0FBQyxHQUFhO0FBQ3pDLFlBQU1BLEtBQUksTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksR0FBRyxFQUFFLFVBQVUsT0FBTyxFQUFFLGFBQWEsSUFBSTtBQUM3RSxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQUcsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUFHLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFDOUUsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQUcsU0FBRyxLQUFLLFFBQVFBLElBQUcsRUFBRSxHQUFHLENBQUM7QUFBQSxJQUM3RTtBQUNBLGVBQVcsS0FBTSxFQUFFLFVBQVUsQ0FBQyxHQUFhO0FBQ3pDLFlBQU1BLEtBQUksT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxNQUFPLEVBQUUsU0FBUyxLQUFLO0FBQ3BGLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQUcsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUM5RSxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFBRyxTQUFHLEtBQUtBLEVBQUM7QUFBQSxJQUM3RDtBQUNBLGVBQVcsS0FBTSxFQUFFLFNBQVMsQ0FBQyxFQUFhLElBQUcsS0FBSyxLQUFLLEVB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
