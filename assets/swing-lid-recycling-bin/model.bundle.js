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
  createModel: () => createModel,
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
                0.19815833333333335,
                0.36
              ],
              [
                0.2,
                0.423
              ],
              [
                0.192,
                0.43
              ],
              [
                0,
                0.43
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
            0.213,
            0.22,
            0.04,
            0.07,
            0.03,
            0.016
          ],
          [
            7109518,
            0.213,
            0.22,
            -0.04,
            0.07,
            0.03,
            0.016
          ],
          [
            7109518,
            0.2415,
            0.22,
            0,
            0.014,
            0.03,
            0.096
          ],
          [
            7109518,
            -0.213,
            0.22,
            0.04,
            0.07,
            0.03,
            0.016
          ],
          [
            7109518,
            -0.213,
            0.22,
            -0.04,
            0.07,
            0.03,
            0.016
          ],
          [
            7109518,
            -0.2415,
            0.22,
            0,
            0.014,
            0.03,
            0.096
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
                0.4
              ],
              [
                0.208,
                0.4
              ],
              [
                0.214,
                0.407
              ],
              [
                0.214,
                0.492
              ],
              [
                0.216,
                0.505
              ],
              [
                0.2111,
                0.5222
              ],
              [
                0.1965,
                0.5388
              ],
              [
                0.1738,
                0.5538
              ],
              [
                0.1442,
                0.5667
              ],
              [
                0.113,
                0.5769
              ],
              [
                0.08,
                0.5838
              ],
              [
                0.043,
                0.587
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
            0.59,
            0,
            0.17,
            0.028,
            0.046
          ],
          [
            3037824,
            0,
            0.586,
            0.0238,
            0.14,
            0.014,
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
            "th0": -0.3110500531377174,
            "thLen": 0.6221001062754348,
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
function ribbedDome(profile, ribs, amp, seg, valley, smooth = false) {
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
  if (smooth) {
    const pos = g.getAttribute("position"), nrm = g.getAttribute("normal");
    const acc = /* @__PURE__ */ new Map();
    const key = (i) => `${pos.getX(i).toFixed(5)},${pos.getY(i).toFixed(5)},${pos.getZ(i).toFixed(5)}`;
    for (let i = 0; i < pos.count; i++) {
      const k = key(i), a = acc.get(k) ?? [0, 0, 0];
      a[0] += nrm.getX(i);
      a[1] += nrm.getY(i);
      a[2] += nrm.getZ(i);
      acc.set(k, a);
    }
    for (let i = 0; i < pos.count; i++) {
      const a = acc.get(key(i)), l = Math.hypot(a[0], a[1], a[2]) || 1;
      nrm.setXYZ(i, a[0] / l, a[1] / l, a[2] / l);
    }
    nrm.needsUpdate = true;
  }
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
    const blob = (c, x, y, r, a, ry = 1, hard = false) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb2(c)},${a})`);
      g.addColorStop(hard ? 0.72 : 0.55, `rgba(${rgb2(c)},${hard ? a : a * 0.45})`);
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
      blob(rust, cx, cy, cr, (o.rustAlpha ?? 0.3) + rnd() * (o.rustAlphaVar ?? 0.35), 0.7 + rnd() * 0.6, o.hardEdges === true);
      for (let i = 0; i < (o.specksPerCluster ?? 40); i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.8 + rnd() * 2.4;
        ctx.fillStyle = `rgba(${rgb2(o.speckRun ? run : rust)},${(o.speckAlpha ?? 0.25) + rnd() * (o.speckAlphaVar ?? 0.5)})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      if (rnd() < (o.runChance ?? 0.55)) {
        const w = 1 + rnd() * s * 0.01, len = s * (0.1 + rnd() * 0.35);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        const ra = (o.runAlpha ?? 0.16) + rnd() * 0.18;
        g.addColorStop(0, `rgba(${rgb2(run)},${ra})`);
        if (o.hardEdges) g.addColorStop(0.92, `rgba(${rgb2(run)},${ra})`);
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
      const x = rnd() * s, w = 1 + rnd() * s * (o.streakWidth ?? 0.014), len = s * (0.25 + rnd() * 0.55);
      const a = (o.streakAlpha ?? 0.1) + rnd() * 0.22;
      const g = ctx.createLinearGradient(0, 0, 0, len);
      g.addColorStop(0, `rgba(${rgb2(run)},${a})`);
      g.addColorStop(o.hardEdges ? 0.92 : 0.25, `rgba(${rgb2(rust)},${o.hardEdges ? a : a * 0.8})`);
      g.addColorStop(1, `rgba(${rgb2(rust)},0)`);
      ctx.fillStyle = g;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, 0, w, len);
    }
    for (const hb of o.hbands ?? []) {
      const y0 = s * (1 - hb.v1), y1 = s * (1 - hb.v0), tone = hb.tone ?? rust;
      ctx.fillStyle = `rgba(${rgb2(tone)},${hb.alpha ?? 0.8})`;
      ctx.fillRect(0, y0, s, y1 - y0);
      for (let i = 0; i < (hb.specks ?? 0); i++) {
        const x = rnd() * s, y = y0 + rnd() * (y1 - y0), r = 0.8 + rnd() * 2.2;
        ctx.fillStyle = `rgba(${rgb2(rnd() < 0.5 ? run : base)},${0.2 + rnd() * 0.5})`;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.arc(x + dx, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    for (const bs of o.bandStreaks ?? []) {
      const y0 = s * (1 - bs.v);
      for (let i = 0; i < (bs.count ?? 12); i++) {
        const x = rnd() * s, w = 1 + rnd() * s * (bs.width ?? 0.012), len = s * ((bs.len ?? 0.12) + rnd() * (bs.lenVar ?? 0.25));
        const a = (bs.alpha ?? 0.14) + rnd() * 0.22;
        const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
        g.addColorStop(0, `rgba(${rgb2(run)},${a})`);
        g.addColorStop(o.hardEdges ? 0.92 : 0.3, `rgba(${rgb2(rust)},${o.hardEdges ? a : a * 0.8})`);
        g.addColorStop(1, `rgba(${rgb2(rust)},0)`);
        ctx.fillStyle = g;
        for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0 - 2, w, len);
      }
    }
    if (o.stencil) {
      const st = o.stencil, px = s * (st.size ?? 0.06);
      ctx.font = `bold ${px}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgba(${rgb2(st.tone ?? chalk)},${st.alpha ?? 0.85})`;
      for (const dx of [-s, 0, s]) ctx.fillText(st.text, s * (st.u ?? 0.5) + dx, s * (1 - (st.v ?? 0.5)));
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
function frontAtlasUV(geo, a) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  const uv = new Float32Array(p.count * 2);
  const col = geo.getAttribute("color");
  const base = a.base !== void 0 ? new THREE.Color(a.base) : null;
  const minNz = a.minNz ?? 0.7;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i);
    const E = 1e-4;
    const front = nrm.getZ(i) > minNz && x >= a.x0 - E && x <= a.x1 + E && y >= (a.yMin ?? a.y1) - E && y <= a.y0 + E;
    if (front) {
      uv[i * 2] = (x - a.x0) / (a.x1 - a.x0);
      uv[i * 2 + 1] = (y - a.y1) / (a.y0 - a.y1);
      if (base && col) col.setXYZ(i, base.r, base.g, base.b);
    } else {
      uv[i * 2] = a.pin[0];
      uv[i * 2 + 1] = a.pin[1];
    }
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  if (col) col.needsUpdate = true;
  return geo;
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
    if (o.broad) {
      const lo = o.broadLo ?? 0.8, hi = o.broadHi ?? 1;
      const g3 = ctx.createLinearGradient(0, 0, s, 0);
      for (let i = 0; i <= 64; i++) {
        const t = i / 64;
        const v = lo + (hi - lo) * (0.5 + 0.5 * Math.cos(2 * Math.PI * o.broad * t));
        const c = Math.round(255 * v);
        g3.addColorStop(t, `rgb(${c},${c},${c})`);
      }
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, s, s);
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
    const [sr, sg, sb] = o.stemRgb ?? [120, 106, 84];
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
        ctx.fillStyle = dark ? `rgba(${Math.round(sr * tone)},${Math.round(sg * tone)},${Math.round(sb * tone)},${a.toFixed(3)})` : `rgba(255,253,246,${(a * 0.6).toFixed(3)})`;
        const yTop = y0 - ch * (0.15 + rnd() * 0.25);
        const yBot = butts[c + 1][Math.min(s, Math.round(x))] + ch * (rnd() * 0.1);
        ctx.fillRect(x, yTop, w, Math.max(2, yBot - yTop));
        const tear = o.tear ?? 0;
        if (tear > 0 && rnd() < 0.45) {
          const L = ch * tear * (0.3 + rnd() * 0.7);
          ctx.beginPath();
          ctx.moveTo(x, yBot);
          ctx.lineTo(x + w, yBot);
          ctx.lineTo(x + w / 2, yBot + L);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = `rgba(58,48,36,${(0.1 + rnd() * 0.16).toFixed(3)})`;
          ctx.fillRect(x - 1, yBot, w + 2, L * 0.5);
        }
      }
      for (let k = 0; k < (o.seams ?? 0); k++) {
        const x = rnd() * s;
        ctx.fillStyle = `rgba(70,60,46,${(0.1 + rnd() * 0.18).toFixed(3)})`;
        ctx.fillRect(x, y0 - ch * 0.1, 1, ch * (0.7 + rnd() * 0.5));
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
    for (let k = 0; k < (o.rot ?? 0); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.04 + rnd() * 0.08);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.3 + rnd() * 0.25;
      g2.addColorStop(0, `rgba(96,86,74,${a.toFixed(3)})`);
      g2.addColorStop(0.6, `rgba(96,86,74,${(a * 0.5).toFixed(3)})`);
      g2.addColorStop(1, "rgba(96,86,74,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
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
function splitTile(size, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = "88,76,58", LIGHT = "255,255,255";
    ctx.fillStyle = "#f3f0e8";
    ctx.fillRect(0, 0, s, s);
    const ga = ctx.createLinearGradient(0, 0, s, 0);
    ga.addColorStop(0, "rgba(90,84,74,0.14)");
    ga.addColorStop(0.5, "rgba(255,255,255,0.08)");
    ga.addColorStop(1, "rgba(90,84,74,0.14)");
    ctx.fillStyle = ga;
    ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, 10, 0.1, 0.34);
    const node = s * (0.3 + rnd() * 0.4);
    for (const [y0, y1] of [[0, node], [node, s]]) grainLines(ctx, rnd, 0, s, y0, y1, 320, DARK, LIGHT, 0.24);
    for (let k = 0; k < 3; k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.3 + rnd() * 0.6);
      ctx.fillStyle = "rgba(40,34,26,0.55)";
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.6, len);
      ctx.fillStyle = "rgba(255,255,255,0.20)";
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.6, y + dy, 1.2, len);
    }
    {
      const y = node;
      const gs = ctx.createLinearGradient(0, y - s * 0.03, 0, y);
      gs.addColorStop(0, "rgba(60,50,40,0)");
      gs.addColorStop(1, "rgba(60,50,40,0.24)");
      ctx.fillStyle = gs;
      ctx.fillRect(0, y - s * 0.03, s, s * 0.03);
      ctx.fillStyle = "rgba(52,44,36,0.66)";
      ctx.fillRect(0, y, s, 3);
      ctx.fillStyle = "rgba(255,255,255,0.36)";
      ctx.fillRect(0, y + 3, s, 5);
      ctx.fillStyle = "rgba(60,50,40,0.30)";
      ctx.fillRect(0, y + 8, s, 2);
    }
    for (let k = 0; k < 4; k++) {
      const cx = rnd() * s, cy = rnd() * s, rx = s * (0.012 + rnd() * 0.03), ry = rx * (1.4 + rnd() * 1.6), rot = (rnd() - 0.5) * 0.6;
      for (const dy of [-s, 0, s]) {
        const halo = ctx.createRadialGradient(cx, cy + dy, 0, cx, cy + dy, Math.max(rx, ry) * 2.4);
        halo.addColorStop(0, "rgba(96,74,40,0.42)");
        halo.addColorStop(0.5, "rgba(96,74,40,0.20)");
        halo.addColorStop(1, "rgba(96,74,40,0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.ellipse(cx, cy + dy, rx * 2.6, ry * 2.4, rot, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(36,28,18,0.82)";
        ctx.beginPath();
        ctx.ellipse(cx, cy + dy, rx, ry, rot, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(14,10,6,0.9)";
        ctx.beginPath();
        ctx.ellipse(cx + rx * 0.2, cy + dy - ry * 0.1, rx * 0.5, ry * 0.55, rot, 0, Math.PI * 2);
        ctx.fill();
      }
      for (let i = 0; i < 6; i++) {
        const x = cx + (rnd() - 0.5) * s * 0.12, y = cy + (rnd() - 0.5) * s * 0.2, r = 1 + rnd() * 1.8;
        ctx.fillStyle = "rgba(30,24,16,0.85)";
        for (const dy of [-s, 0, s]) {
          ctx.beginPath();
          ctx.arc(x, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    mouldClusters(ctx, rnd, s, [[rnd() * s, node + s * 0.04], [rnd() * s, rnd() * s]], s * 0.08, s * 0.05, 60, 0.26);
  });
}
function ropeTile(size, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#f4efe4";
    ctx.fillRect(0, 0, s, s);
    const n = 10, pitch = s / n, ang = 0.32;
    const dx = Math.tan(ang) * s;
    ctx.save();
    for (let k = -3; k < n + 3; k++) {
      const x0 = k * pitch;
      for (const oy of [-s, 0, s]) {
        ctx.strokeStyle = "rgba(70,58,40,0.55)";
        ctx.lineWidth = pitch * 0.22;
        ctx.beginPath();
        ctx.moveTo(x0, oy);
        ctx.lineTo(x0 + dx, oy + s);
        ctx.stroke();
        ctx.strokeStyle = "rgba(255,255,255,0.30)";
        ctx.lineWidth = pitch * 0.3;
        ctx.beginPath();
        ctx.moveTo(x0 + pitch * 0.5, oy);
        ctx.lineTo(x0 + pitch * 0.5 + dx, oy + s);
        ctx.stroke();
        ctx.strokeStyle = "rgba(90,76,52,0.28)";
        ctx.lineWidth = 1.2;
        for (let t = 0; t < 12; t++) {
          const yy = oy + (t + rnd()) * s / 12, xx = x0 + pitch * 0.5 + dx * ((yy - oy) / s);
          ctx.beginPath();
          ctx.moveTo(xx - pitch * 0.35, yy - pitch * 0.18);
          ctx.lineTo(xx + pitch * 0.35, yy + pitch * 0.18);
          ctx.stroke();
        }
      }
    }
    ctx.restore();
    for (let i = 0; i < 500; i++) {
      const x = rnd() * s, y = rnd() * s;
      ctx.fillStyle = rnd() < 0.6 ? "rgba(70,58,40,0.18)" : "rgba(255,255,255,0.22)";
      ctx.fillRect(x, y, 1, 1 + rnd() * 2);
    }
    for (let i = 0; i < 3; i++) {
      const y = rnd() * s, h = s * (0.06 + rnd() * 0.1);
      const g2 = ctx.createLinearGradient(0, y, 0, y + h);
      g2.addColorStop(0, "rgba(60,48,32,0)");
      g2.addColorStop(0.5, "rgba(60,48,32,0.22)");
      g2.addColorStop(1, "rgba(60,48,32,0)");
      ctx.fillStyle = g2;
      for (const dy of [-s, 0]) ctx.fillRect(0, y + dy, s, h);
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
      const g2 = ribbedDome(d.pts, d.ribs, d.amp, d.seg ?? 24, d.valley, d.smooth === true);
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
    if (c.uv === "front") g = frontAtlasUV(g, c.atlas);
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
    for (const e of r.extrudes ?? []) {
      const shape = new THREE.Shape();
      shape.moveTo(e.poly[0][0], e.poly[0][1]);
      for (let i = 1; i < e.poly.length; i++) shape.lineTo(e.poly[i][0], e.poly[i][1]);
      shape.closePath();
      const g2 = extrudeAlongZ(shape, e.z0, e.z1);
      if (e.rx) g2.rotateX(e.rx);
      if (e.ry) g2.rotateY(e.ry);
      if (e.rz) g2.rotateZ(e.rz);
      if (e.at) g2.translate(e.at[0], e.at[1], e.at[2]);
      gs.push(tintGeo(g2, e.hex));
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
    if (t.kind === "split") tex = splitTile(t.size ?? 512, t.seed ?? 53);
    if (t.kind === "rope") tex = ropeTile(t.size ?? 512, t.seed ?? 59);
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
function createModel(options = {}) {
  return createObjectModel(void 0, options);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogU3dpbmctTGlkIFJlY3ljbGluZyBCaW4gLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcsXG4gKiBpbnN0YW5jaW5nIGFuZCB0aGUgbGF0aGUgaGVscGVycyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzXG4gKiBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgMC41IHggMC42IHggMC41IG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsICtaIGZyb250ICh0aGUgc3RpY2tlciBmYWNlKSwgbHVncyBvbiArLy1YLlxuICogQnVkZ2V0IChtZWRpdW0pOiA8PTIwMDAgdHJpYW5nbGVzLCA8PTIgZHJhdyBjYWxscywgPD0yIG1hdGVyaWFscywgPD00IHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoYWlraXQncyBTVFJFRVQgQU5EIFZFTkRPUiBQUk9QUyAtLSBhIGNvbmUsIGEgYmFycmllciwgYSBjYXJ0LCBhIHN0b29sLiBUaGVcbiAqIHNoYXJlZCB2b2NhYnVsYXJ5IGlzIHRoZSBUSU5URUQgQk9YIGFuZCB0aGUgcG9seWxpbmUgVFVCRSBtZXJnZWQgaW50byBvbmUgZ2VvbWV0cnkgcGVyIG1hdGVyaWFsLFxuICogd2l0aCBldmVyeSBjb2xvdXIgZGlmZmVyZW5jZSBpbnNpZGUgYSBtYXRlcmlhbCBjYXJyaWVkIGFzIGEgdmVydGV4IGNvbG91ciBvbiBhIFdISVRFIG1hdGVyaWFsLFxuICogYW5kIHN1cmZhY2UgaWRlbnRpdHkgKGNvcnJ1Z2F0aW9uLCBncmltZSB3YXNoLCBtb3NzLCBwbGFuayBqb2ludHMsIHJ1c3QpIGRlbGl2ZXJlZCBhcyBPTkVcbiAqIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHBlciBtYXRlcmlhbCByYXRoZXIgdGhhbiBhcyBnZW9tZXRyeSBvciBhIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJzd2luZy1saWQtcmVjeWNsaW5nLWJpblwiLFxuICAgIFwibmFtZVwiOiBcIlN3aW5nLUxpZCBSZWN5Y2xpbmcgQmluXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiU3dpbmdMaWRSZWN5Y2xpbmdCaW5cIixcbiAgICBcImVudmVsb3BlXCI6IFwiRW52ZWxvcGUgMC41IHggMC42IHggMC41IG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsICtaIGZyb250ICh0aGUgc3RpY2tlciBmYWNlKSwgbHVncyBvbiArLy1YLlxcbiAqIEJ1ZGdldCAobWVkaXVtKTogPD0yMDAwIHRyaWFuZ2xlcywgPD0yIGRyYXcgY2FsbHMsIDw9MiBtYXRlcmlhbHMsIDw9NCB1bmlxdWUgZ2VvbWV0cmllcy5cIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJwbGFzdGljXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNzIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJsaWRwbGFzdGljXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNzIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzdGlja2VyXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNjUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH1cbiAgICBdLFxuICAgIFwidGlsZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwicGxhc3RpY1wiLFxuICAgICAgICBcImtpbmRcIjogXCJzdHJpcGVzXCIsXG4gICAgICAgIFwic2l6ZVwiOiAyNTYsXG4gICAgICAgIFwiYmFuZHNcIjogMTgsXG4gICAgICAgIFwiYVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDFcbiAgICAgICAgXSxcbiAgICAgICAgXCJiXCI6IFtcbiAgICAgICAgICAwLjkyNSxcbiAgICAgICAgICAwLjkzNSxcbiAgICAgICAgICAwLjk1XG4gICAgICAgIF0sXG4gICAgICAgIFwic2VlZFwiOiAyMDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJzdGlja2VyXCIsXG4gICAgICAgIFwia2luZFwiOiBcImJha2VkXCIsXG4gICAgICAgIFwidXJpXCI6IFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmw0U0FBQlhSVUpRVmxBNElGSVNBQUN3VXdDZEFTb0FBUUFCUGxVb2tVWWpvcUdoSkRMcTJIQUtpV2R1ZDhpVkt0QlpOQmxsVnV1T2xaOVpmcnY3bjg4WGQ3NkUvV1g5MS9jL2JUL2QrQmZ4VjFCZnlIK2QvN1BnTHdDL24zOWs5RE9jbGV6Y2ZoUUU4VHovdC8yUHFLK3B2L1A3aW42OS85Z0hCMVIyekVITUR4YjAzeDFQUkRkSk80R0tiaktZekxUMTNJM3FqbjhJSS9lM1d3NlJyajlxcVBEOTZuR3hhNlM0elU3Vmt0Q2EyeEM0UXJ1SHdwVTBnSWUwTjlVYnRpOWFHV3hwNks0Zk90ZjFVaG1UM2JubDhFOG5McVJqSEZ0M0p2UjNjWnhMQUJlQVVFazB1ZWVGU3JyVVN0VVVLd08wK2tHLytVUUo2WU5WcjBWSzdGZ1BOMm1qNC9RS2ZNL1ZmMUt4RzFSZ1pCbDYrOW1WN2VDVTJMc3E5ak5DdkMvNTNZQWN1YkFXVFVoSWM0M3RUVTByZ2NQSzFsU01UUVRMRlBWUjZJMW9kWC9yZGJrU2ZYN0dLYUVheSt1cjU5RDJrb0pndGZNRHRDTGdqZmJ2a0l1SWFwNEFJeGxqQndHMzNnc09FeFZVV00yVm5QdjhlZWhOMlJNM092emgwTllNaTYxQlQ4QnNLNWxSY1RqNmdTMUtFeUwwL2RsU2d3N0pORDFVVWhqdmVva0JLUlZtemV1L0hrQWNkSnNrSTZlU1pydEhJdVA2bEk3eVlOcDNCQWp6aGJhWUxpaTlXQXVoMEJhY3FtNEtPQmttdXBIbU8xdXdOQzUvUkV5N1ZvL1BjbDhqZmZDWlgrRUJnb1VmRUlnVGhnS1lmSnVUZXhjU1NWci82aDc2d3kxaStyN3FiT3Q1cVhxS3lIRE1UK0FrQk5nVHZYeUZqdzdZNFozdWM0ZDBBWlhraG1zdnI3VzRxWVdEa2xTQVJBN1UyUU5Wc0dRRW1HQ3VXczhGeGl2L3FrM284SEtNZ3NyQ094WUpiemwzVzRsR0hmRStTcGp3SS8vZ3ZwR2o5Z2hXcjFPaU1INGdvY1BHa1c0alZ1QTFrMnExQTUrN1o1Q1F2NkdKcXAxMmQ0ajUreWhxYTRiS2hpejZDMFJBejdLdnlBT2NFVWYxSjBzdzZTUVphdHBDdERlVmZ6Q2s3VStjRHNZNC9TSmJmc1VNdG9BQS9tNG03NW9Rb01EUDNTbzgzdU5OVDdSM2VpdEEyZFlpczFzTHZsS1RjZ282bS9NZi9IaGJVdFhIdUQvY0wvVDdiV2d0RFFIc1VseEVmc0JPSFRaMEgxZG9QSmt1YStSUFRXcytya1ptMHIzZFVxQlVrQ2J3anh0RVFzUzdrOWUvVjBKYkRNd2dCM3orQk1VUVZrcEFoTXduREt4RU5RZnpOT0dHNDZqL2tjdFhjZy9CcTNWZjk2bUEwSHNXeTRqVWsvaExranVPN0gwWVhqaGxsV3lQbjhSeTRmUTZ1dHl2Z0c4enFRSEo2R0hHNE9mQ3hTUjBtN1Y0aVBURnRoYzg0UXQrNzBwaWVTUk15R3NnNlNMT1BFY0N3QkxLSG1ra2ViM2tnbHY0SUVReGNtZTJmTlh3ZDJKOE9DcmhoZmpGcUNhUHh3UWYvQ2hlUjVjaEowNEpkSU1vam1LaHM3Ylhib0hmRWxDUElOcXZEM1krSFlEbmZYK24zZWQ4bUxVMnNtajNUZmI3dlpxamZ2QXJVcGRXcmIrVkJ3WEIyNkMwTDJ2NWxTcFpUc3hJSnpJa3V2TU8rdzZhWTh4VEFVRytxU0xVY2xGeWhaQzJ4bEZ1Y2c4UWZoeXpXMEFDMWZzWFowbEdoZnhSVGxaaTdlbVJKRm5VN2F4SDAvQmVseTY1V1QrWUNBYysyRFBuRjFpTnpJMW5Sekh6MjZHODNEYzN6VzBIZUFsWkg4TUt6aFMrL0VnVGYrS0lvaDgvZmdKVG05N1dtQUo1bmtFV21vZGZ0RnRMYUVEVkRUSGhPYTB6b0F4b0ZoV29xOGU5b3dqdEVqZ3htMldZMk9YaGJKVnY1Uit3KzJ0ZmdidFk4TFd4SWVYSDR2ZXl5bFMyZmpMZjUyVDJlSXg3S0VPL0RJanl3SHUvK1I4K1BXVUlMV2FjQ3pXNnpmdlNqU1NQNTBjbkJQOVppVElTQ3VnMjVFamUwb2o4TnlvNmZpbGJrV2JuNis2UnFUQjBlcENJaHJsY3VKQ3I5M3NVTHovOFhWVUJTdHlmMnc2NUU4ZHczQ2JTTlNhcXlwK0YrMEUxYmRwaEpFWTc5Z3grZSsyWGttQzUzbXVRVkpsb2J3ZGdUZkxqY29LMUNtdHcyTnAwOU81dEN3aHFIaE9vekgyUlpiMW5Yclg1TXhrZzNhYkxqbXZ3cWQ1M3N3WFNqYVVucHFuL1RYZkJrWXhsMllIblh2ajgyczRhbVBZbTBJTlU5VEdGSlAxYkErSEFXaENNMm1HU2d6VEFabzBLMnBuSVdDSVlVV0RvSXNGalIzVk9HNEd6ZnFvTE53eTBGUEZaaWpTM29IeFQxNEt4TjAxMStPM0oyM1hSNmlQeE8wd01VaGtVTVQwendhZHoxL3gybU45Smh2NjZtQ3gvMisxQkxjdC9VWHNFZ09OaFZSdUtIQ1p0UE42MnMxRHg5b2JpUWsvZFU2MGJKNC96N0FXNXByNnFIN3daNzJaWjRoaGdzY05zMFREN215dHJWZmZ3dnAzcytRdXcxSXd2bmJTWUxBeFF4OEd5d3N0YXlMYzhoQkJoOHJRa2djK3o4YUFPQm9QaWF4VGN6VmxFQmdCYVFmZFdUcTF2MTZPQkFveEF0YmJnZUcyeVRnSllQYy9Nb0xXME11QXpuZ2pXUFIvd0d1SHltODY1SENDbG5KU2pXc1JUSU4zNlFBQkxveVNsYW1Bb3BWSkhocTY2QUl3RU1NUTBBRzdIdDlkd2l4bHU5V0RuSThqNzZsbnBseDZrN21CQ3p6N2p1S2dYV2x6RWlCc1ZoRjE4RnZvZjRtckh2ZUtrYS9leDQzUWZhckhiZlpQVFNDa2M4aVY3OGtSRVF2QnlFbXVDM1VNTzF3Y3UzOHg1OXNuUFBpdGdLcnF1MnNNQlJjVGREcS9NdmFWU3J4cUZVWjc1MzdjM0RuK2ZseWJzYzF0TnpMLzFEY1UyU3I5em1oNTdVVzVrZ1VlOHpGSmh1MFA1cTNoQ2tMNlRTNEo1K0FWQVZRMEZSRXdOeCtIdGhCNDBuK0c3WDhoMnJlc0FIa0U1eTNnajVIdzVIc0FQWURGRHJPQlpjejV3UmFzOHRmWnNqSVJrVDJ1d2VDNWFVVElrUnQyZTdGVEVtY1pwRGxqR3pOR09ZU0p0ejE3R054TkxoOVhjYkhha2FMWjdkK2RCZkNiUVI4Q1VSa1EzbU9heUNCdW4yN2xyUUlEalJFQjdaaFFjSXRCVGhyTlVwSCtKWHcxSDBoaXV3RVQyM1ZUTTJsWTczN0N6MXFEZlZOdFpaMGZIamc5c0lxS002SmZEMzNTcWJrSmkrclhEODVTRVVsUlZVdWFrQjdGNGc1WkNlRzFnNnd4UzFxcTNJSzdZNTF1aXJIL01hV1N2S1l6eFlTbzViS0FXb3RLVlYvZ1FFZGVFMWQ5bnMvdy9PZXlJZ214YjZDaXhtR0xldm15UDU5MVEvb2xld0M5RUZlTmRaSUVDb1ViNHZsUDFEcWo4WFNPKzcrNGlOazB6MGNDck5oWXZGa3pEZDROWEhnY2MzTDAzbWpBNWpNelhZTDMrZHZMTXZ1dzl0cmIyaTRVWWliZjN1YmwzaDFDancyRTlscDNpVm1RQXpIZVFDdU1WOUlMYWRHT2IvTW5Pd3RtNTNEc1pXRlBLd29nQnMrbmJVTG9jSk9vRlpyU1ZtbG1QV0xaKzB6d25renY2RG9wZUJFTlFBTGlnMC92MTB4cDlVQzNLSzhqWlh1OU9ocVJxcjYvVWNQU28vWkxkM3JXa3pwWWNlTzQxbWhpSS9pTkxXZllFcW8rRitnaklnVkxsQmxZT1ZkMWhhQ0MzQkl2dmZuOGcyaXUxTytaV1gyci9BQkxEbEZGRUpJdmF2RnZwUmZ5dmJYK3ZWOTBKaFJXa1A2K0hWM08zZk1aV2xra2QyeVB3ZHlyb0t2T0VCK1F5bmE2SXRCdWxVa3RscUVCMlY4RE5iQndWZW13UnhxeDZEcDgycWIrZG5qMlFybEdYVXpzM0VSNWl6VVRNem1Yek51WnJQczlha0lEVC9mbitKeThBRDhSOHdScVIwQ1hMc0V4T042WHZvL3RzUzFYMmJKd3loNXZmWXVpZUZzUHZTK3JxK1Iwa0FwdjBmZVlnR0tORnZtdVVyVmJHcFBzdmNTZFhCQmFTTDg1OHk4NFczS0FPQnQ0L3plZU5nS0NFWWtSd1E4WnBwZUwwaklnbHByNmkzWEN4ck1USHVmUjFFdlUzOFcrY2plUjdLRDFrYXA0em5Fem9RSFMxNWpUb21LVmlJcVJqQmtoMllTdWp6SlJxQTRLN0VvVEgyODJxbVNOMU83dkhtVDNORklNZTNZYXFsdXBDWDhPbFowaE1HdDBVT2FWampPaGltZ0pBRVp0T2krM014MUx4YVd6VHYzVTVPcUpyTHJlZW9UbVJ6VXZlbTZqTzNxWWZPbUd1bFpoM2M1bFhMdUNwY0xZa25sWi94RnVzZGxBUkwyWjZkR0lHOUJqOEk2Q2NENjR0K1ZucjRhK0tWN1RVNHNhTktPTTJUVGJqa0FkVy9WSGQzUkhkZVh4Ni8yZWVUVkc0YlJWRks1RnNVNmJ0Vk5qa2had3BWcmppNzAwQkROMktSc0dHMzhEZ2VhMHBnWkMzdUF5a1RkL1dKTDJPUzhzNnNwbTNoeDliT1VEUnp1ZUNCY0dVSE5mQXovdURwNjVhcEFGMUE2a1FKcnlFc2xaU1lSK3luTjhYQ1JJbkJ4ZHIvMEFIV1o3VEw4RldLQ1Izek0wVE15U2ZkbmlHcWV4WDd0QlBlRGRHWGhoNjhacnh1K3FVZFNkMm1Ua3VqajlaUEZ4Rk9XL2QzbXNWODNXb3pudS9lQjhYRjZrYUhqT0w4YnRVcWdJWnpMZjkxMlRNdVpOMkFIaFp1RXlwREszUmREQWNrU0cyaVVUV05RaWovQnJObUtkMEI4OXlwUlcwWEVuQWhodkJ6aHFNZzJBZlRSOUdtbG94TVVybDVITXc2c1dFYkk1NGpySm9aaDUwU25ta2ZGcnFmOTU1UlJNWmhNNGF1TXBGa1hsUSsyakMyVGRmWmZlSTBWT296UmQ3dDdZM0FLeTErZ29ORmIvN3RlTXVHeHdkMkh2U2k4UUpSaW90UWlobzZ6T2lCUTBzc0NZOVN6UmNJK3NjL05EbWRZekxyNENBc25nRzB1YnJySWhvdTc1a3U3R2xaRVJ2RnZUSUV4ZTVZZTRjcDhHUVJpWG9QR3JqdnlESi9NeEN5RnJacmtTdjVPN1QyeGpjbmdxb1dBRnJaTWlwOEFHU2RDWWVyUUM2QVJpSjVTcjRsUytTZWtlcm9hTCtNR1pXbllCUUlST0pFRXVoQytLWThxaHRyaTFBS0lEbmFGQjh1cExnNGZCc3hxN1hDdjJsbi9odHR6MXpna3dEblNydmx2ZnpkSVBXR0wyeHJ3bi9vby9VeDV5T0JNbUlycU5adVk5a1NtekZEdWlqbVEycXZLVThrcXJ4SWw1bHZreThtZyt6SEdhZTA3NFJVZXdVQlVvb3h6d2xPTHlvS29tQ2FjWGYrcENtWWQyOXZqSHN3RVpVcXBwQzBaRXlET0U0d0Y0cHdUV2VVSTdJTlBaVUlVb2dGd3A5SUkyLzI1U0JiZU5wT3dDUE5UUFJNUlpFcno3S3hlL3BzblZZdVhJb3FuNWxoMWNjZHpld1pSRGFkdnhvUGNNVGhtdC9tMWtwTFp5bzdzZEhaRlYwQmNnQUx6YWZiZ1d3blFsMFJQbDM1R1JuUko5NXUyMmVpS0dEaE9CYmZyUDVzenhhK1lQVkRtTkorU29JL0pFVHFQRkZNUkt2dTBKSVFSdWZuY1p6RWY2NE9BQy95aHpNTDNiK2UvTm1zRmloRjIxVWVwdDFHdUQ2eDNCcTBQVlVjRi9uSS9rTFlKN2FnOE5QWDRBRm5vYTFSYzVpRi9lcmpqb0cvT1I2bXAyMTlyTDdKbmRYeXVwVWVQSjluNjZvUm9abXRvekdLdUVpZGlSYlliZTdoUmdBUTdGVTRoNjRlbW9mY3E1Y2lPN1Q1eEw2U0w5d1RDVGl2RmVpUWJUYlM3L1F6WHJIQVI5eUxpRlkySEFCT1IrVVRKN0RGYTJGREpOaGxmVkdtQmJLNGhOT082RmJoWUNUeWFid0lIaEQ1SkVaYWg3b3Y5WkU2VDY0S0M3SDhEMGlUZzM1dFpSVXNieTFBV0E2SDZtUm5sdWs0U0JLQjhjZ0s2ZHZCVzZuVFZ6Q2l4RjdTanVuUktZTjU4bGVqRDdSTVZWR0Z4QUlFSHdBVnd6RnVXaitoMkw2dFZTQ0tUZnRxZkRJUXc1cm95bWUvSVFHamF6Zlkrb2xFaVZOQ2ZWck00Yzk1VHV0ajJsZExNTjFsalpma2dTaUtoV2U0cVZNSHdBMWxZNm9NdlA5L25CQUs1eUdCZ0NNcm90YlI0Y1plcUJ2WTRtS1VlT0pCUHJrSjRwblpBQ0hGejRpTEJYZkMvTTc3c3pTZEwzL1VTUnVVcE1CL09OS3B6TDZYSStmakJpS0JpUnYwaGN4bWNXc0hjZW1Vd0o3OVpSbm5Ma1lWQ2ZqckVEUVIrUHNWc2NWQU1yUGxhUVFuSzFTcFJTTjkwQlQzUmowOHlDMGMrVm5TQlR0MGhvak4rUlRtOHBIUGVFb1F5QzVrVEEvZENVZm5JMGM2WTFGZkEva0k0VmVoVms4ZVZRaVZzcjAwN0oyeWlBeitteVA3NGNkKzRSVVgvSHNlSzNYbEw3a0dMS2VEWVZMZmk0WGlDOCs1V1V1d1JIem5lYXgzKzZwNlIxRjVOMFFTRXJtVlpBVTJ1V0lLYmNWV2lGZFY5bXVHRzVSamV6REZZeklFVk1UQTRWRTRjQjBMbGdSRmI3Z3VBYmgyS244dWx2b3dOeWxzaDRRMjhaSkdpRjcwS055ZEVaMHQ0bUhUNCtzbVBwaTVlSElzNjVGYXZIL0tuVUZad1NVNG1MaVJvODRXdVU2aVE3S0xNMGR6N2haWkE5cTg3MmtBUXdsMFN1L2IvdURmeEZGZFBmNDk1TEwwUU53cFZ1Y3lwb2hlZStsTGtHU0RVZ3dhbVdxSFJoLzZTS2NUbEh4WVIyTjRrN0dIMWJiSjJZWWVOZmp4QmtJckx5djRmWWlZQnVtYVpiU0dZaHBmdm9Ga1pMQlFtZnUvNDI5RDBYMlZpWWxFK1hqOEtLaThjazFwS2ZJUmRuaDRrUkpSbDh4anNZaEFWMUZ0ZEtFYnVROVR0anhEK0xZeTNnc0lHa1YzYmJnKzFlSVlzdlhMNWg0alBPcFhmNDlPUXJGcS8vK25ac1JwS3lXTy91U2hFdkFHMExyWnA1bjYyZTd0NWtMcjgzeStFWVB6aWFzckQrcWNvbXpHL3BJWndMZFVjR2JTSXB1ZmZhdXZGdzVmdTVWUUIrRGFLdk5ETTN2LzNET3A3czFZSXc5MW1uSlBrckFtSVJnUlRueHlzNnVWbFB0VXVSbUpodjFvNjYrRDNQSTJadG5iaWE4YUVJTXdhTUVhRE00blYyeXhlN20rZ2swU21nMzRFVTVWZVpiOFRmSlBZdXFKV1B1WWhhTDFDS1hsQ2RGa21qbjVJMGMyTEpqZjFiN3pMUE9HdDRwTG5rRWlRb3NzbGZobkZUS3ZmOFRCVDhvbHU0MEFjVG0wbktlV2c2dmxjVjgzdFVwN2p6dDl3WTRrZndkOHhXSkpSRUFta2RYdXQ1dmxpNHlKbUtrUzh3Vk4wbVgrQWtFelRpbUtmbCtyWE1yeFdrZEFUWVhFRnFFWXo0alJLcEk2bWN3ZHpqZFhnTjh5T05CakVPZ2NaOUtuUWNhdG9GS1k0K252c0RPcGY2WGxsamphVFpGeXpXdmloa1Z5aU1hQlE4RGRxbCtzRC8xWktzMXlUVW45amxKRTM5ZkVIaUFFUCs5aVhtV1A4R0Z6QU5ZajdFZzhGTGxMZnZhdVFUVnUxYkY4ZjhXcHpmcG1CTTlMNHdTVDlPRkZSM2xHSVlTWktNL0FlbE9NNWhJa25sL3FDaXAxU3RUUUorMWRremJiMm50aStCUW9HS3VLZ0FBXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJjb21wb25lbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJib2R5XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiVGFwZXJlZCBib2R5LCBsdWdzIGFuZCBkb21lZCBsaWRcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwicGxhc3RpY1wiLFxuICAgICAgICAgIFwidXZcIjogXCJoZWlnaHRcIixcbiAgICAgICAgICBcInV2U2NhbGVcIjogMC4zMixcbiAgICAgICAgICBcImNvbGxpZGVyXCI6IHtcbiAgICAgICAgICAgIFwic2hhcGVcIjogXCJjeWxpbmRlclwiLFxuICAgICAgICAgICAgXCJsb2NhbENlbnRlclwiOiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicmFkaXVzXCI6IDAuMjUsXG4gICAgICAgICAgICBcImhlaWdodFwiOiAwLjYsXG4gICAgICAgICAgICBcImF4aXNcIjogW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJub3Rlc1wiOiBcIkRlY2xhcmVkIG9uIHRoZSBhc3NldCBhcyBjeWxpbmRlcjogb25lIHByb3h5IG92ZXIgYm9keSwgbHVncyBhbmQgbGlkLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxhdGhlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMC4wMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNDIsXG4gICAgICAgICAgICAgICAgICAwLjAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjE3LFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNzc1LFxuICAgICAgICAgICAgICAgICAgMC4wMjVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTg1ODI1LFxuICAgICAgICAgICAgICAgICAgMC4xNlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xOTE5OTE2NjY2NjY2NjY2NyxcbiAgICAgICAgICAgICAgICAgIDAuMjZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTk4MTU4MzMzMzMzMzMzMzUsXG4gICAgICAgICAgICAgICAgICAwLjM2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjIsXG4gICAgICAgICAgICAgICAgICAwLjQyM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xOTIsXG4gICAgICAgICAgICAgICAgICAwLjQzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMC40M1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMjgsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDcxMDk1MThcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICA3MTA5NTE4LFxuICAgICAgICAgICAgICAwLjIxMyxcbiAgICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgICAgMC4wNCxcbiAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgICAgMC4wMTZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDcxMDk1MTgsXG4gICAgICAgICAgICAgIDAuMjEzLFxuICAgICAgICAgICAgICAwLjIyLFxuICAgICAgICAgICAgICAtMC4wNCxcbiAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgICAgMC4wMTZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDcxMDk1MTgsXG4gICAgICAgICAgICAgIDAuMjQxNSxcbiAgICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4wMTQsXG4gICAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAgIDAuMDk2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICA3MTA5NTE4LFxuICAgICAgICAgICAgICAtMC4yMTMsXG4gICAgICAgICAgICAgIDAuMjIsXG4gICAgICAgICAgICAgIDAuMDQsXG4gICAgICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAgIDAuMDE2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICA3MTA5NTE4LFxuICAgICAgICAgICAgICAtMC4yMTMsXG4gICAgICAgICAgICAgIDAuMjIsXG4gICAgICAgICAgICAgIC0wLjA0LFxuICAgICAgICAgICAgICAwLjA3LFxuICAgICAgICAgICAgICAwLjAzLFxuICAgICAgICAgICAgICAwLjAxNlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgNzEwOTUxOCxcbiAgICAgICAgICAgICAgLTAuMjQxNSxcbiAgICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4wMTQsXG4gICAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAgIDAuMDk2XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcImxpZFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkRvbWVkIGxpZnQtb2ZmIGxpZFwiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJsaWRwbGFzdGljXCIsXG4gICAgICAgICAgXCJ1dlwiOiBcImhlaWdodFwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAwLjMyLFxuICAgICAgICAgIFwibGF0aGVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwLjRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMjA4LFxuICAgICAgICAgICAgICAgICAgMC40XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjIxNCxcbiAgICAgICAgICAgICAgICAgIDAuNDA3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjIxNCxcbiAgICAgICAgICAgICAgICAgIDAuNDkyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjIxNixcbiAgICAgICAgICAgICAgICAgIDAuNTA1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjIxMTEsXG4gICAgICAgICAgICAgICAgICAwLjUyMjJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTk2NSxcbiAgICAgICAgICAgICAgICAgIDAuNTM4OFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNzM4LFxuICAgICAgICAgICAgICAgICAgMC41NTM4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjE0NDIsXG4gICAgICAgICAgICAgICAgICAwLjU2NjdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTEzLFxuICAgICAgICAgICAgICAgICAgMC41NzY5XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjA4LFxuICAgICAgICAgICAgICAgICAgMC41ODM4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjA0MyxcbiAgICAgICAgICAgICAgICAgIDAuNTg3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMC41ODhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic2VnXCI6IDI4LFxuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImhleFwiOiAzMTA2NDUxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMzEwNjQ1MSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC41OSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4xNyxcbiAgICAgICAgICAgICAgMC4wMjgsXG4gICAgICAgICAgICAgIDAuMDQ2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAzMDM3ODI0LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjU4NixcbiAgICAgICAgICAgICAgMC4wMjM4LFxuICAgICAgICAgICAgICAwLjE0LFxuICAgICAgICAgICAgICAwLjAxNCxcbiAgICAgICAgICAgICAgMC4wMDE2XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcInN0aWNrZXJcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJSZWN5Y2xpbmcgc3RpY2tlclwiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJzdGlja2VyXCIsXG4gICAgICAgICAgXCJwYXJlbnRcIjogXCJib2R5XCIsXG4gICAgICAgICAgXCJjeWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjIyNixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4xOTY1OTUwMDAwMDAwMDAwMixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjE4OTE5NSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMTIsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwib3BlblwiOiB0cnVlLFxuICAgICAgICAgICAgICBcInRoMFwiOiAtMC4zMTEwNTAwNTMxMzc3MTc0LFxuICAgICAgICAgICAgICBcInRoTGVuXCI6IDAuNjIyMTAwMTA2Mjc1NDM0OCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTY3NzcyMTVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICAvLyBDT0xPUiBoYXMgdG8gYmUgY2FycmllZCB0b28sIGFuZCBpdCBpcyBlYXN5IHRvIGZvcmdldDogdGhpcyBmdW5jdGlvbiBjb3BpZWQgcG9zaXRpb24sIG5vcm1hbFxuICAvLyBhbmQgdXYgb25seSwgYW5kIHRoZSBtb3NxdWUncyByaWJiZWQgZG9tZXMgbG9zdCB0aGVpciBncmVlbi1hbmQtcGFsZSBzdHJpcGluZyB0aGUgbW9tZW50IHRoZXlcbiAgLy8gd2VyZSBtZXJnZWQgd2l0aCBhbnl0aGluZy4gVGhlIGZhaWx1cmUgaXMgc2lsZW50IC0tIHRoZSBkb21lIHJlbmRlcnMsIGluIG9uZSBmbGF0IGNvbG91ciAtLSBhbmRcbiAgLy8gdG9vayBhIHdyb25nIHRoZW9yeSBhYm91dCBzUkdCIGdhbW1hIGJlZm9yZSB0aGUgYXR0cmlidXRlIGxpc3Qgd2FzIHJlYWQuIEFueSBpbnB1dCBjYXJyeWluZyBhXG4gIC8vIGNvbG91ciBtZWFucyBldmVyeSBpbnB1dCBnZXRzIG9uZSwgd2hpdGUgd2hlcmUgaXQgaGFkIG5vbmUuXG4gIGNvbnN0IGFueUNvbG9yID0gcGFydHMuc29tZSgoZykgPT4gISFnLmdldEF0dHJpYnV0ZSgnY29sb3InKSk7XG4gIGNvbnN0IGNvbG9yID0gYW55Q29sb3IgPyBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMykuZmlsbCgxKSA6IG51bGw7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgY29uc3QgYyA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgICAgaWYgKGNvbG9yICYmIGMpIHsgY29sb3JbKHYgKyBpKSAqIDNdID0gYy5nZXRYKGkpOyBjb2xvclsodiArIGkpICogMyArIDFdID0gYy5nZXRZKGkpOyBjb2xvclsodiArIGkpICogMyArIDJdID0gYy5nZXRaKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2xvcikgb3V0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9yLCAzKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuLyoqIExhdGhlR2VvbWV0cnkgc2hhcmVzIHRoZSBjb3JuZXIgdmVydGV4IGJldHdlZW4gYW4gZW5kIGRpc2MgYW5kIHRoZSBzaWRlIHdhbGwsIHNvXG4gKiAgY29tcHV0ZVZlcnRleE5vcm1hbHMgdGlsdHMgdGhlIHdhbGwncyBmaXJzdCByaW5nIDQ1IGRlZ3JlZXMgdG93YXJkIHRoZSBkaXNjIGFuZCB0aGUgaGFybmVzcyBzaGFkZXNcbiAqICBhIGRhcmsgZ3JhZGllbnQgdGhlcmUgLS0gYSByaW5nIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIGFzIGEgSE9MRSB1bmRlciB0aGUgc3RhaW5sZXNzIGJpbidzIGNhcC5cbiAqICBJbnNlcnRpbmcgYSBwb2ludCAwLjggbW0gcGFzdCBldmVyeSBzaGFycCBjb3JuZXIgKD4gNzAgZGVncmVlcykgY29uZmluZXMgdGhlIGF2ZXJhZ2VkIG5vcm1hbCB0byB0aGF0XG4gKiAgc2xpdmVyLiBDb3N0cyBvbmUgcmluZyBwZXIgY29ybmVyOyBwYXNzIGBzaGFycCA9IGZhbHNlYCB3aGVyZSB0aGUgYnVkZ2V0IGNhbm5vdCBjYXJyeSBpdC4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29ybmVycyhwdHM6IG51bWJlcltdW10sIG1pbkRlZyA9IDcwLCBlcHMgPSAwLjAwMDgpOiBudW1iZXJbXVtdIHtcbiAgY29uc3Qgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcCA9IHB0c1tpXSwgYSA9IHB0c1tpIC0gMV0sIGIgPSBwdHNbaSArIDFdO1xuICAgIGxldCBzaGFycCA9IGZhbHNlO1xuICAgIGlmIChhICYmIGIpIHtcbiAgICAgIGNvbnN0IHV4ID0gcFswXSAtIGFbMF0sIHV5ID0gcFsxXSAtIGFbMV0sIHZ4ID0gYlswXSAtIHBbMF0sIHZ5ID0gYlsxXSAtIHBbMV07XG4gICAgICBjb25zdCBsdSA9IE1hdGguaHlwb3QodXgsIHV5KSwgbHYgPSBNYXRoLmh5cG90KHZ4LCB2eSk7XG4gICAgICBpZiAobHUgPiAwICYmIGx2ID4gMCkgc2hhcnAgPSBNYXRoLmFjb3MoTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsICh1eCAqIHZ4ICsgdXkgKiB2eSkgLyAobHUgKiBsdikpKSkgPiBtaW5EZWcgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgaWYgKHNoYXJwICYmIGx1ID4gMyAqIGVwcykgb3V0LnB1c2goW3BbMF0gLSB1eCAvIGx1ICogZXBzLCBwWzFdIC0gdXkgLyBsdSAqIGVwc10pO1xuICAgICAgb3V0LnB1c2gocCk7XG4gICAgICBpZiAoc2hhcnAgJiYgbHYgPiAzICogZXBzKSBvdXQucHVzaChbcFswXSArIHZ4IC8gbHYgKiBlcHMsIHBbMV0gKyB2eSAvIGx2ICogZXBzXSk7XG4gICAgfSBlbHNlIG91dC5wdXNoKHApO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBgd2VsZFNlYW1gIGF2ZXJhZ2VzIHRoZSBub3JtYWxzIG9mIHRoZSBmaXJzdCBhbmQgbGFzdCByYWRpYWwgY29sdW1uLCB3aGljaCBpcyB3aGF0IGNsb3NlcyB0aGVcbiAqICByZXZvbHZlJ3MgU0hBRElORyBzZWFtLiBMYXRoZUdlb21ldHJ5IGFscmVhZHkgZG9lcyB0aGlzIGl0c2VsZiAtLSBpdCBleHBsaWNpdGx5IGF2ZXJhZ2VzIHRoZSB0d29cbiAqICBlbmQgY29sdW1ucyBmb3IgYSBmdWxsIDIqUEkgc3dlZXAgLS0gYW5kIHRoZSBgY29tcHV0ZVZlcnRleE5vcm1hbHMoKWAgYmVsb3cgdGhyb3dzIHRoYXQgd29ya1xuICogIGF3YXksIGJlY2F1c2UgYSByZWNvbXB1dGUgc2VlcyB0aGUgc2VhbSBhcyB0d28gdW5jb25uZWN0ZWQgZWRnZXMgYW5kIGdpdmVzIGVhY2ggdGhlIG5vcm1hbCBvZlxuICogIHRoZSBmYWNlcyBvbiBpdHMgb3duIHNpZGUgb25seS4gT24gYSBtYXR0ZSBwcm9wIHRoZSByZXN1bHRpbmcgY3JlYXNlIGlzIGludmlzaWJsZSwgd2hpY2ggaXMgd2h5XG4gKiAgaXQgc3Vydml2ZWQ7IG9uIGEgc2F0aW4gbWV0YWwgaXQgaXMgYSBoYXJkIHZlcnRpY2FsIGxpbmUgZG93biB0aGUgcmV2b2x2ZS4gTWVhc3VyZWQgb24gdGhlXG4gKiAgbm9vZGxlLXNob3AgdGFibGUncyByaW0gYXQgYXppbXV0aCAwOiBhIDMxLWxldmVsIGx1bWEgc3RlcCBhdCB4PTUxMiAoMjQ1IC0+IDIxNCBhdCB5PTI1OCksXG4gKiAgUkVWRVJTSU5HIHRvICsyNyBhdCB5PTI2NiAtLSBhIGRpc2NvbnRpbnVpdHksIG5vdCBhIGdyYWRpZW50LlxuICogIERlZmF1bHQgT0ZGIHNvIG5vIGFscmVhZHktZW1pdHRlZCBwcm9wIGNoYW5nZXMgc2hhZGluZyBpZiBpdCBpcyBldmVyIHJlLWVtaXR0ZWQ7IHRoZSByZWNvbXB1dGVcbiAqICBpcyBzdGlsbCBuZWVkZWQgZm9yIHRoZSBzaGFycC1jb3JuZXIgc3BsaXRzLCBzbyB0aGlzIHdlbGRzIGFmdGVyd2FyZHMgcmF0aGVyIHRoYW4gc2tpcHBpbmcgaXQuICovXG5mdW5jdGlvbiBsYXRoZShwdHM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyLCB5T2Zmc2V0ID0gMCwgc2hhcnAgPSB0cnVlLCB3ZWxkU2VhbSA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB2ID0gKHNoYXJwID8gc3BsaXRDb3JuZXJzKHB0cykgOiBwdHMpLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5tYXgocFswXSwgMCksIHBbMV0gKyB5T2Zmc2V0KSk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeSh2LCBzZWcpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIGlmICh3ZWxkU2VhbSkge1xuICAgIC8vIExhdGhlR2VvbWV0cnkgbGF5cyBvdXQgKHNlZyArIDEpIGNvbHVtbnMgb2YgYHJvd3NgIHZlcnRpY2VzOyBjb2x1bW4gMCBhbmQgY29sdW1uIHNlZyBhcmUgdGhlXG4gICAgLy8gc2FtZSBwbGFjZSBpbiBzcGFjZS4gQXZlcmFnZSB0aGUgcGFpciBhbmQgd3JpdGUgaXQgYmFjayB0byBib3RoLlxuICAgIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gICAgY29uc3Qgcm93cyA9IG4uY291bnQgLyAoc2VnICsgMSk7XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3dzOyByKyspIHtcbiAgICAgIGNvbnN0IGEgPSByLCBiID0gc2VnICogcm93cyArIHI7XG4gICAgICBjb25zdCB4ID0gbi5nZXRYKGEpICsgbi5nZXRYKGIpLCB5ID0gbi5nZXRZKGEpICsgbi5nZXRZKGIpLCB6ID0gbi5nZXRaKGEpICsgbi5nZXRaKGIpO1xuICAgICAgY29uc3QgbCA9IE1hdGguaHlwb3QoeCwgeSwgeikgfHwgMTtcbiAgICAgIG4uc2V0WFlaKGEsIHggLyBsLCB5IC8gbCwgeiAvIGwpO1xuICAgICAgbi5zZXRYWVooYiwgeCAvIGwsIHkgLyBsLCB6IC8gbCk7XG4gICAgfVxuICAgIG4ubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBzdGVwcGVkIHRhcGVyIGFzIGEgbGF0aGUgcHJvZmlsZTogYHJpbmdzYCBhbHRlcm5hdGluZyBvdXQvaW4gcmFkaWkgY2xpbWJpbmcgZnJvbSB5MCB0byB5MS5cbiAqICBPbmUgZ2VvbWV0cnksIG9uZSBkcmF3IGNhbGwsIGFuZCB0aGUgc3RlcCBjb3VudCBpcyBhIHByb2ZpbGUtcG9pbnQgY291bnQgcmF0aGVyIHRoYW4gYSBtZXNoXG4gKiAgY291bnQgLS0gd2hpY2ggaXMgd2hhdCBrZWVwcyBhIDIwLXJpbmcgY2hlZGkgc3BpcmUgaW5zaWRlIGEgMzItZ2VvbWV0cnkgY2VpbGluZy4gKi9cbmZ1bmN0aW9uIHJpbmdlZFRhcGVyKHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHIwOiBudW1iZXIsIHIxOiBudW1iZXIsIHJpbmdzOiBudW1iZXIsIGJ1bGdlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJpbmdzOyBpKyspIHtcbiAgICBjb25zdCB0ID0gaSAvIHJpbmdzO1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgciA9IHIwICsgKHIxIC0gcjApICogdDtcbiAgICBjb25zdCBzdGVwID0gKHkxIC0geTApIC8gcmluZ3M7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeV0pO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHkgKyBzdGVwICogMC40NV0pO1xuICAgIHB0cy5wdXNoKFtyLCB5ICsgc3RlcCAqIDAuNTVdKTtcbiAgfVxuICBwdHMucHVzaChbcjEsIHkxXSk7XG4gIHJldHVybiBwdHM7XG59XG5cblxuLyoqXG4gKiBUaGUgUkVERU5URUQgc3F1YXJlIHBsYW4gLS0gYSBzcXVhcmUgd2hvc2UgZm91ciBjb3JuZXJzIGFyZSBjdXQgYmFjayBpbiB0d28gcmlnaHQtYW5nbGVkIHN0ZXBzLlxuICogSXQgaXMgdGhlIHBsYW4gb2YgYSBUaGFpIGNoZWRpJ3MgdGVycmFjZSBhbmQgb2YgYSBwcmFuZydzIGJhc2UsIGFuZCBidWlsZGluZyBpdCBhcyBhIFNoYXBlIHRoYXRcbiAqIGlzIHRoZW4gZXh0cnVkZWQgaXMgbm90IGEgc3R5bGlzdGljIGNob2ljZTogdGhlIG9idmlvdXMgYWx0ZXJuYXRpdmUsIGEgd2lkZSBib3ggY3Jvc3NlZCBieSBhXG4gKiBkZWVwIGJveCwgcHV0cyB0aGUgdHdvIGJveGVzJyB0b3AgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSBvdmVyIHRoZWlyIHdob2xlXG4gKiBpbnRlcnNlY3Rpb24sIHdoaWNoIHotZmlnaHRzLiBPbmUgZXh0cnVzaW9uIG9mIG9uZSBjbG9zZWQgcGxhbiBoYXMgbm8gaW50ZXJpb3IgY29pbmNpZGVuY2UgYXRcbiAqIGFsbC5cbiAqXG4gKiBgYWAgaXMgdGhlIGhhbGYtd2lkdGggYWNyb3NzIHRoZSBmbGF0czsgYHJgIGlzIHRoZSBkZXB0aCBvZiBlYWNoIHJlZGVudCBzdGVwLlxuICovXG5mdW5jdGlvbiByZWRlbnRlZFNoYXBlKGE6IG51bWJlciwgcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBxdWFkID0gW1thLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGFdXTtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgcXVhZCkge1xuICAgICAgLy8gcm90OTBeaywgYXBwbGllZCBrIHRpbWVzOiAoeCwgeikgLT4gKC16LCB4KVxuICAgICAgbGV0IHB4ID0geCwgcHogPSB6O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHsgY29uc3QgdCA9IHB4OyBweCA9IC1wejsgcHogPSB0OyB9XG4gICAgICBwdHMucHVzaChbcHgsIHB6XSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYmV0d2VlbiB0d28gaGVpZ2h0cy4gRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBhbG9uZyArWiwgc28gdGhlIHJlc3VsdCBpc1xuICogIHJvdGF0ZWQgb250byArWTsgYC1NYXRoLlBJIC8gMmAgYWJvdXQgWCBtYXBzICtaIHRvICtZIGFuZCBsZWF2ZXMgdGhlIHBsYW4ncyBvd24geCBhcyB4LiAqL1xuZnVuY3Rpb24gZXh0cnVkZVNsYWIoc2hhcGU6IFRIUkVFLlNoYXBlLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeTEgLSB5MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgLy8gcm90YXRlWCgtUEkvMikgbWFwcyAoeCwgeSwgeikgLT4gKHgsIHosIC15KSwgc28gdGhlIGV4dHJ1c2lvbiBkZXB0aCBiZWNvbWVzIGhlaWdodCBhbmQgdGhlXG4gIC8vIHBsYW4ncyBvd24gc2Vjb25kIGF4aXMgYmVjb21lcyAtei4gRXZlcnkgcGxhbiBoZXJlIGlzIGZvdXItZm9sZCBzeW1tZXRyaWMsIHNvIHRoYXQgc2lnbiBpc1xuICAvLyBpbW1hdGVyaWFsOyB3aGF0IG1hdHRlcnMgaXMgdGhhdCB0aGUgc2xhYiBub3cgcnVucyBVUCBmcm9tIHk9MCBhbmQgbmVlZHMgbGlmdGluZyBieSB5MC5cbiAgZy5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKDAsIHkwLCAwKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIHNxdWFyZSBwbGFuIHdpdGggYSByZWN0YW5ndWxhciBOT1RDSCBjdXQgaW50byBpdHMgK1ggZmFjZSAtLSB0aGUgc3RhaXIgd2VsbCBvZiBhIHRlbXBsZVxuICogdGVycmFjZS4gQ3V0dGluZyB0aGUgc3RhaXIgb3V0IG9mIHRoZSBwbGFuIHJhdGhlciB0aGFuIGhhbmdpbmcgaXQgb2ZmIHRoZSBvdXRzaWRlIGlzIHdoYXQga2VlcHNcbiAqIGFuIGFzeW1tZXRyaWMgZmVhdHVyZSBpbnNpZGUgYSBzeW1tZXRyaWMgZGVjbGFyZWQgZW52ZWxvcGU6IGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDkgbVxuICogdGVycmFjZSB3b3VsZCBwdXQgdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWQgd2lkdGggb24gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRTcXVhcmUoYTogbnVtYmVyLCBub3RjaEhhbGZaOiBudW1iZXIsIHhJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2EsIC1hXSwgW2EsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCBub3RjaEhhbGZaXSxcbiAgICAgICAgICAgICAgIFthLCBub3RjaEhhbGZaXSwgW2EsIGFdLCBbLWEsIGFdLCBbLWEsIC1hXV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgUkVDVEFOR1VMQVIgcGxhbiB3aXRoIGEgbm90Y2ggY3V0IGludG8gaXRzICtaIGZhY2UuIFRoZSBzcXVhcmUgdmVyc2lvbiBhYm92ZSBpcyB3aGF0IGEgY2hlZGkgb3JcbiAqIGEgcHJhbmcgdGVycmFjZSBuZWVkczsgYSBoYWxsIHRoYXQgaXMgdHdpY2UgYXMgbG9uZyBhcyBpdCBpcyB3aWRlIG5lZWRzIHRoZSB0d28gaGFsZi1leHRlbnRzIGtlcHRcbiAqIGFwYXJ0LCBhbmQgaXRzIHN0YWlyIGlzIG9uIGEgc2hvcnQgZW5kIHJhdGhlciB0aGFuIGEgbG9uZyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRSZWN0KGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2h4LCAtaHpdLCBbaHgsIGh6XSwgW254LCBoel0sIFtueCwgeklubmVyXSwgWy1ueCwgeklubmVyXSwgWy1ueCwgaHpdLCBbLWh4LCBoel0sIFstaHgsIC1oel1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBUaGUgY3Jvc3Mtc2VjdGlvbiBvZiBvbmUgcm9vZiB0aWVyLCBhcyBhIGNsb3NlZCB0cmFwZXpvaWQgaW4gWFk6IGVhdmVzIGF0ICgrLWhhbGZCYXNlLCB5MClcbiAqIHJpc2luZyBhdCBgcGl0Y2hgIChhcyBhIHRhbmdlbnQpIHRvIGEgZmxhdCB0b3AgYXQgeTEuXG4gKlxuICogVGhhaSB0ZW1wbGUgcm9vZnMgbmVzdCwgYW5kIHRoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlIFRSVU5DQVRJT04uIFRocmVlIGZ1bGwgZ2FibGVzIGF0IG9uZVxuICogcGl0Y2ggY2Fubm90IG5lc3QgLS0gdGhlIHdpZGVzdCB0aWVyJ3MgcmlkZ2Ugd291bGQgYmUgdGhlIGhpZ2hlc3QsIHdoaWNoIGlzIHVwc2lkZSBkb3duLiBXaGF0XG4gKiBhY3R1YWxseSBoYXBwZW5zIGlzIHRoYXQgZWFjaCBsb3dlciB0aWVyIGlzIGN1dCBvZmYgYXQgdGhlIGhlaWdodCB3aGVyZSB0aGUgbmV4dCB0aWVyJ3MgZWF2ZXNcbiAqIGJlZ2luLCBhbmQgaXRzIHVwcGVyIHBhcnQgaXMgaGlkZGVuIGJlaGluZCB0aGF0IHRpZXI7IG9ubHkgdGhlIHRvcG1vc3QgdGllciBpcyBhIHJlYWwgZ2FibGUsXG4gKiBjbG9zZWQgYnkgcGFzc2luZyB5MSBhdCB0aGUgYXBleC5cbiAqL1xuZnVuY3Rpb24gdGllclByb2ZpbGUoaGFsZkJhc2U6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBwaXRjaDtcbiAgY29uc3QgaGFsZlRvcCA9IGhhbGZCYXNlIC0gaW5zZXQ7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtaGFsZkJhc2UsIHkwKTtcbiAgc2hhcGUubGluZVRvKGhhbGZCYXNlLCB5MCk7XG4gIGlmIChoYWxmVG9wID4gMC4wMikge1xuICAgIHNoYXBlLmxpbmVUbyhoYWxmVG9wLCB5MSk7XG4gICAgc2hhcGUubGluZVRvKC1oYWxmVG9wLCB5MSk7XG4gIH0gZWxzZSB7XG4gICAgc2hhcGUubGluZVRvKDAsIHkwICsgaGFsZkJhc2UgKiBwaXRjaCk7ICAgLy8gYSByZWFsIHJpZGdlOiB0aGUgdG9wbW9zdCB0aWVyIGNsb3NlcyB0byBhIHBvaW50XG4gIH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIEhJUCBST09GIHdpdGggYSBjb25jYXZlIHNsb3BlIGFuZCB1cHN3ZXB0IGNvcm5lcnMgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZiwgd2hpY2ggbm9uZSBvZiB0aGVcbiAqIG90aGVyIHNoYXBlIGhlbHBlcnMgaGVyZSBjYW4gZXhwcmVzcy5cbiAqXG4gKiBJdCBpcyBnZW5lcmF0ZWQgYXMgYSByaW5nIG9mIHJlY3RhbmdsZXMgY2xpbWJpbmcgZnJvbSB0aGUgZWF2ZXMgdG8gdGhlIHJpZGdlIHJhdGhlciB0aGFuIGFzIGFuXG4gKiBleHRydWRlZCBwcm9maWxlLCBiZWNhdXNlIGEgaGlwIHNsb3BlcyBvbiBhbGwgZm91ciBzaWRlczogYW4gZXh0cnVzaW9uIGdpdmVzIHZlcnRpY2FsIGdhYmxlIGVuZHMsXG4gKiB3aGljaCBpcyBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAqXG4gKiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyBgKDEgLSB0KV5jdXJ2ZUV4cGAsIGFuZCB0aGUgZXhwb25lbnQgbXVzdCBiZSBBQk9WRSBvbmUuIFRoZSBzbG9wZVxuICogYXQgYW55IGhlaWdodCBpcyBkeS9keCwgc28gYSBwbGFuIHRoYXQgc2hyaW5rcyBGQVNUIGZvciBhIGdpdmVuIHJpc2UgaXMgYSBzaGFsbG93IHNsb3BlOiB3aXRoXG4gKiBxID4gMSB0aGUgZGVyaXZhdGl2ZSBxKDEtdCleKHEtMSkgaXMgbGFyZ2UgYXQgdGhlIGVhdmVzIGFuZCBzbWFsbCBhdCB0aGUgcmlkZ2UsIHdoaWNoIGlzIHNoYWxsb3dcbiAqIGVhdmVzIGFuZCBhIHN0ZWVwIHJpZGdlIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YuIEJlbG93IG9uZSBpdCBpcyB0aGUgb3RoZXIgd2F5IHJvdW5kIGFuZCBidWlsZHMgYVxuICogZmxhdC10b3BwZWQgdGVudCwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYXR0ZW1wdCBoZXJlIHJlbmRlcmVkLiBBIGxpbmVhciBzaHJpbmsgZ2l2ZXMgdGhlXG4gKiBzdHJhaWdodCBweXJhbWlkIG9mIGEgaGlwIHJvb2YgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuXG4gKlxuICogYGNvcm5lckxpZnRgIHJhaXNlcyBhbmQgcHVzaGVzIG91dCB0aGUgZm91ciBlYXZlcyBjb3JuZXJzLCB0YXBlcmluZyBhd2F5IGJ5IGEgdGhpcmQgb2YgdGhlIHdheVxuICogdXAuIFRoYXQgdXBzd2VlcCBpcyB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmcgdGhpbmcgYWJvdXQgdGhlIHJvb2YsIGFuZCBpdCBpcyB3aHkgdGhlIHBsYW5cbiAqIGhhbGYtd2lkdGggcGFzc2VkIGluIG11c3QgbGVhdmUgcm9vbTogdGhlIGNvcm5lcnMgZW5kIHVwIGZ1cnRoZXIgb3V0IHRoYW4gdGhlIGVhdmVzIGxpbmUuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGNsb3NlZCBzb2xpZCAtLSBvdXRlciBzdXJmYWNlLCBhIHNvZmZpdCBgZHJvcGAgYmVsb3cgdGhlIGVhdmVzLCBhbmQgYSBmYXNjaWEgYmFuZFxuICogYmV0d2VlbiB0aGVtLiBBbiBvcGVuIHNoZWxsIHdvdWxkIGxldCB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55XG4gKiBsb3cgYW5nbGUuXG4gKi9cbmZ1bmN0aW9uIGhpcFJvb2YoaHg6IG51bWJlciwgaHo6IG51bWJlciwgcmlkZ2VIYWxmWjogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICBjdXJ2ZUV4cDogbnVtYmVyLCBzdGVwczogbnVtYmVyLCBkcm9wOiBudW1iZXIsIGNvcm5lckxpZnQ6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gRUlHSFQgcG9pbnRzIHBlciByaW5nLCBub3QgZm91cjogdGhlIGZvdXIgY29ybmVycyBhbmQgdGhlIGZvdXIgZWRnZSBtaWRwb2ludHMuIFdpdGggZm91ciB0aGVcbiAgLy8gY29ybmVyIGxpZnQgaGFzIG5vd2hlcmUgdG8gZmFsbCBhd2F5IHRvIGFuZCByYWlzZXMgdGhlIEVOVElSRSBlYXZlcyBsaW5lLCB3aGljaCBidWlsdCBhIHNhZGRsZVxuICAvLyBpbnN0ZWFkIG9mIGEgcm9vZi4gVGhlIG1pZHBvaW50cyBhcmUgd2hhdCBob2xkIHRoZSBlYXZlcyBkb3duIGJldHdlZW4gdGhlIGNvcm5lcnMuXG4gIC8vXG4gIC8vIFRoZSBvcmRlciBpcyAoK3gsLXopLCBtaWQsICgteCwteiksIG1pZCwgKC14LCt6KSwgbWlkLCAoK3gsK3opLCBtaWQsIHdoaWNoIGlzIGNvdW50ZXItY2xvY2t3aXNlXG4gIC8vIHNlZW4gZnJvbSBBQk9WRSAtLSB0aGUgd2luZGluZyBhbiB1cHdhcmQtZmFjaW5nIHN1cmZhY2UgbmVlZHMuIFdvdW5kIHRoZSBvdGhlciB3YXkgdGhlIHdob2xlXG4gIC8vIHJvb2YgcmVuZGVycyBpbnNpZGUgb3V0LCB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBibGFjayBtZW1icmFuZSByYXRoZXIgdGhhbiBhIG1pc3Rha2UuXG4gIGNvbnN0IHJpbmcgPSAodDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEgLSB0LCBjdXJ2ZUV4cCk7XG4gICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB0IC8gMC4zNCksIDIpO1xuICAgIGNvbnN0IGxpZnQgPSBjb3JuZXJMaWZ0ICogZywgb3V0ID0gMSArIDAuMDQ1ICogZztcbiAgICBjb25zdCBheCA9IGh4ICogZiAqIG91dCwgYXogPSAocmlkZ2VIYWxmWiArIChoeiAtIHJpZGdlSGFsZlopICogZikgKiBvdXQ7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCBjID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSArIGxpZnQsIHpdO1xuICAgIGNvbnN0IG0gPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5LCB6XTtcbiAgICByZXR1cm4gW2MoYXgsIC1heiksIG0oMCwgLWF6KSwgYygtYXgsIC1heiksIG0oLWF4LCAwKSxcbiAgICAgICAgICAgIGMoLWF4LCBheiksIG0oMCwgYXopLCBjKGF4LCBheiksIG0oYXgsIDApXTtcbiAgfTtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBsZXQgcHJldiA9IHJpbmcoMCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSByaW5nKGkgLyBzdGVwcyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgICBwdXNoKHByZXZba10sIHByZXZbazJdLCBjdXJbazJdKTtcbiAgICAgIHB1c2gocHJldltrXSwgY3VyW2syXSwgY3VyW2tdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICAvLyBGYXNjaWEgYmFuZCBhbmQgc29mZml0LCBzbyB0aGUgcm9vZiBpcyBhIHNvbGlkIHJhdGhlciB0aGFuIGEgc2hlbGwuIEFuIG9wZW4gc2hlbGwgbGV0cyB0aGVcbiAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55IGxvdyBhbmdsZS5cbiAgY29uc3QgZSA9IHJpbmcoMCk7XG4gIGNvbnN0IGxvdyA9IGUubWFwKChwKSA9PiBbcFswXSwgcFsxXSAtIGRyb3AsIHBbMl1dKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgIHB1c2gobG93W2tdLCBlW2tdLCBlW2syXSk7XG4gICAgcHVzaChsb3dba10sIGVbazJdLCBsb3dbazJdKTtcbiAgfVxuICBmb3IgKGxldCBrID0gMTsgayA8IDc7IGsrKykgcHVzaChsb3dbMF0sIGxvd1trICsgMV0sIGxvd1trXSk7ICAgLy8gc29mZml0IGZhbiwgZmFjaW5nIGRvd25cblxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFJJQkJFRCBkb21lIC0tIGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIHdob3NlIHJhZGl1cyBpcyBtb2R1bGF0ZWQgYXJvdW5kIHRoZSBheGlzLCBzbyBpdCByZWFkc1xuICogYXMgdGhlIG1lbG9uLXJpYmJlZCBkb21lIG9mIGEgbW9zcXVlIHJhdGhlciB0aGFuIGEgc21vb3RoIGhlbWlzcGhlcmUuXG4gKlxuICogTGF0aGVHZW9tZXRyeSBjYW5ub3QgZG8gdGhpczogYSBsYXRoZSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdCBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCByaWJzIGFyZVxuICogYSB2YXJpYXRpb24gQVJPVU5EIHRoZSBheGlzLCBub3QgYWxvbmcgaXQuIFNvIHRoZSBzdXJmYWNlIGlzIGdlbmVyYXRlZCBkaXJlY3RseSwgc2FtcGxpbmdcbiAqIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgIHBlciBzZWN0b3IuIFRoZSByaWJzIGFyZSB0aGUgcmVhc29uIHRoZSBkb21lIGlzIHJlY29nbmlzYWJsZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbSAtLSBhIHNtb290aCBncmVlbiBoZW1pc3BoZXJlIHJlYWRzIGFzIGEgd2F0ZXIgdGFuay5cbiAqL1xuZnVuY3Rpb24gcmliYmVkRG9tZShwcm9maWxlOiBudW1iZXJbXVtdLCByaWJzOiBudW1iZXIsIGFtcDogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsbGV5PzogbnVtYmVyW10sIHNtb290aCA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGNvbDogbnVtYmVyW10gPSBbXTtcbiAgLy8gVGhlIHJpYnMgYXJlIG5vdCBvbmx5IGEgc2hhcGUuIE9uIHRoZSBtb3NxdWUncyBkb21lcyB0aGUgY3Jlc3RzIGFyZSBwYWxlIGFuZCB0aGUgdmFsbGV5cyBhcmVcbiAgLy8gZ3JlZW4sIGFuZCB0aGF0IHN0cmlwZSBpcyBtb3N0IG9mIHdoYXQgdGhlIGRvbWUgcmVhZHMgYXMgYXQgZGlzdGFuY2UuIEl0IGlzIGNhcnJpZWQgYXMgYVxuICAvLyBwZXItdmVydGV4IE1VTFRJUExJRVIgb2ZmIHRoZSBzYW1lIGNvc2luZSB0aGF0IHNoYXBlcyB0aGUgcmliIC0tIHR3byBtZWFzdXJlbWVudHMsIHRoZSBjcmVzdFxuICAvLyBjb2xvdXIgb24gdGhlIG1hdGVyaWFsIGFuZCB0aGUgdmFsbGV5IGFzIHRoZSByYXRpbyBiZXR3ZWVuIHRoZW0gLS0gc28gdGhlIHN0cmlwaW5nIGNvc3RzIGFuXG4gIC8vIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIHRleHR1cmUgc2V0IG9yIGEgc2Vjb25kIGRyYXcgY2FsbC5cbiAgY29uc3QgdGludCA9IChqOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXZhbGxleSkgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICAvLyBSYWlzZWQgdG8gMC41NSByYXRoZXIgdGhhbiBsZWZ0IGxpbmVhci4gQSBjb3NpbmUgc3BlbmRzIGhhbGYgaXRzIGFyZWEgbmVhciBlYWNoIGV4dHJlbWUsIGFuZFxuICAgIC8vIHRoYXQgcmVuZGVycyBhIGRvbWUgdGhhdCBpcyBwYWxlIG92ZXJhbGwgd2hlcmUgdGhlIHBsYXRlJ3MgaXMgZ3JlZW4gb3ZlcmFsbDogdGhlIGNyZXN0IGlzIGFcbiAgICAvLyBuYXJyb3cgaGlnaGxpZ2h0IG9uIGEgcmVhbCByaWIsIG5vdCBoYWxmIG9mIGl0LiBUaGUgZXhwb25lbnQgd2lkZW5zIHRoZSB2YWxsZXkuXG4gICAgY29uc3QgZiA9IE1hdGgucG93KCgxIC0gTWF0aC5jb3MocmlicyAqICgoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZykpKSAvIDIsIDAuNTUpO1xuICAgIHJldHVybiBbMSArICh2YWxsZXlbMF0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzFdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsyXSAtIDEpICogZl07XG4gIH07XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGggPSAoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICBjb25zdCBmID0gMSArIGFtcCAqIE1hdGguY29zKHJpYnMgKiB0aCk7XG4gICAgY29uc3QgciA9IHByb2ZpbGVbaV1bMF0gKiBmO1xuICAgIHJldHVybiBbTWF0aC5zaW4odGgpICogciwgcHJvZmlsZVtpXVsxXSwgTWF0aC5jb3ModGgpICogcl07XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZmlsZS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpLCBqICsgMSksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSArIDEsIGopO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgICBjb25zdCB0YSA9IHRpbnQoaiksIHRiID0gdGludChqICsgMSk7XG4gICAgICBjb2wucHVzaCguLi50YSwgLi4udGIsIC4uLnRiLCAuLi50YSwgLi4udGIsIC4uLnRhKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGlmICh2YWxsZXkpIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2wpLCAzKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgLy8gYHNtb290aGAgYXZlcmFnZXMgdGhlIG5vcm1hbHMgb2YgZXZlcnkgdmVydGV4IHNoYXJpbmcgYSBwb3NpdGlvbiwgc28gYSBsb3ctc2VjdG9yIGZsb3dlciBoZWFkXG4gIC8vIG9yIHBvbXBvbSBzaGFkZXMgYXMgYSByb3VuZGVkIHNvbGlkIHJhdGhlciB0aGFuIGEgY3V0IGdlbS4gVGhlIHNvdXAgaXMgbm9uLWluZGV4ZWQsIHNvIHRoZVxuICAvLyBmYWNldGVkIGRlZmF1bHQgaXMgd2hhdCBjb21wdXRlVmVydGV4Tm9ybWFscyBnaXZlczsgdGhlIG1vc3F1ZSdzIGRvbWVzIGtlZXAgaXQuXG4gIGlmIChzbW9vdGgpIHtcbiAgICBjb25zdCBwb3MgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUsIG5ybSA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgY29uc3QgYWNjID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcltdPigpO1xuICAgIGNvbnN0IGtleSA9IChpOiBudW1iZXIpID0+IGAke3Bvcy5nZXRYKGkpLnRvRml4ZWQoNSl9LCR7cG9zLmdldFkoaSkudG9GaXhlZCg1KX0sJHtwb3MuZ2V0WihpKS50b0ZpeGVkKDUpfWA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MuY291bnQ7IGkrKykgeyBjb25zdCBrID0ga2V5KGkpLCBhID0gYWNjLmdldChrKSA/PyBbMCwgMCwgMF07IGFbMF0gKz0gbnJtLmdldFgoaSk7IGFbMV0gKz0gbnJtLmdldFkoaSk7IGFbMl0gKz0gbnJtLmdldFooaSk7IGFjYy5zZXQoaywgYSk7IH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcy5jb3VudDsgaSsrKSB7IGNvbnN0IGEgPSBhY2MuZ2V0KGtleShpKSkhLCBsID0gTWF0aC5oeXBvdChhWzBdLCBhWzFdLCBhWzJdKSB8fCAxOyBucm0uc2V0WFlaKGksIGFbMF0gLyBsLCBhWzFdIC8gbCwgYVsyXSAvIGwpOyB9XG4gICAgbnJtLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFBPSU5URUQgYXJjaCBwbGF0ZSAtLSB0aGUgdHdvLWNlbnRyZWQgYXJjaCBvZiBhIG1vc3F1ZSwgbm90IHRoZSBoYWxmLXJvdW5kIG9mIGEgUm9tYW4gb25lLlxuICogYGFyY2hlZFBsYXRlYCBhYm92ZSBzd2VlcHMgYSBzaW5nbGUgc2VtaWNpcmNsZSwgd2hpY2ggaXMgdGhlIHdyb25nIGFyY2ggaGVyZSBhbmQgcmVhZHMgYXMgYVxuICogcmFpbHdheSB2aWFkdWN0OyB0aGlzIG9uZSBydW5zIGVhY2ggc2lkZSB1cCB0byBhIHNoYXJlZCBhcGV4IHRocm91Z2ggYSBxdWFkcmF0aWMsIHdoaWNoIGdpdmVzIHRoZVxuICogb2dlZSBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnRlZEFyY2hTaGFwZSh3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBidWlsZCA9ICh0YXJnZXQ6IFRIUkVFLlNoYXBlIHwgVEhSRUUuUGF0aCwgd3c6IG51bWJlciwgc3A6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3dyAvIDI7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2wpO1xuICAgIHRhcmdldC5saW5lVG8oaHcsIHNwKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhodywgc3AgKyByaXNlICogMC43MiwgMCwgc3AgKyByaXNlKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtaHcsIHNwICsgcmlzZSAqIDAuNzIsIC1odywgc3ApO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzbCk7XG4gICAgdGFyZ2V0LmNsb3NlUGF0aCgpO1xuICB9O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBidWlsZChzaGFwZSwgdywgc3ByaW5nLCBhcGV4UmlzZSwgc2lsbCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgYnVpbGQocCwgaG9sZS53LCBob2xlLnNwcmluZywgaG9sZS5hcGV4UmlzZSwgaG9sZS5zaWxsKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFRBUEVSSU5HIFRVQkUgYWxvbmcgK1osIGJ1aWx0IGZyb20gYSBsaXN0IG9mIHN0YXRpb25zLiBFYWNoIHN0YXRpb24gaXNcbiAqIFt6LCBjZW50cmVYLCBjZW50cmVZLCByYWRpdXNYLCByYWRpdXNZXSwgYW5kIGNvbnNlY3V0aXZlIHN0YXRpb25zIGFyZSBqb2luZWQgYnkgYSByaW5nIG9mIGBzZWdgXG4gKiBwb2ludHMsIHNvIHRoZSByYWRpdXMsIHRoZSBjZW50cmUgYW5kIHRoZSBlbGxpcHNlIHJhdGlvIGNhbiBhbGwgdmFyeSBhbG9uZyB0aGUgbGVuZ3RoLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgT1JHQU5JQyBmb3JtIGluIHRoZSB3aG9sZSBraXQsIGFuZCBpdCBleGlzdHMgZm9yIG9uZSBwcm9wOiBhIHJlY2xpbmluZyBmaWd1cmUgaXNcbiAqIGEgbG9uZyBzb2Z0IG1hc3Mgd2hvc2Ugc2VjdGlvbiBjaGFuZ2VzIGF0IGV2ZXJ5IHBvaW50IGFsb25nIGl0IC0tIHNob3VsZGVyIHRvIHdhaXN0IHRvIGhpcCB0b1xuICogY2FsZiAtLSBhbmQgbmVpdGhlciBhIGxhdGhlIG5vciBhIHN0YWNrIG9mIGJveGVzIGNhbiBzYXkgdGhhdC4gQSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIGx5aW5nXG4gKiBib2R5IGlzIG5vdCBhIGxvdy1wb2x5IGJvZHksIGl0IGlzIGEgcGlsZSBvZiBsdWdnYWdlLlxuICpcbiAqIEEgc3RhdGlvbiB3aXRoIGEgcmFkaXVzIGF0IG9yIG5lYXIgemVybyBjbG9zZXMgdGhlIHR1YmUsIHNvIHRoZSBlbmRzIGNhbiBiZSBjYXBwZWQgYnkgdGhlXG4gKiBzdGF0aW9uIGxpc3QgaXRzZWxmIHJhdGhlciB0aGFuIGJ5IGEgc2VwYXJhdGUgZmFuLlxuICovXG5mdW5jdGlvbiB0dWJlQWxvbmcoc3RhdGlvbnM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBJTkRFWEVELCB3aXRoIHNoYXJlZCByaW5nIHZlcnRpY2VzLCBzbyBjb21wdXRlVmVydGV4Tm9ybWFscyBhdmVyYWdlcyBhY3Jvc3MgdGhlIHF1YWRzIGFuZCB0aGVcbiAgLy8gc3VyZmFjZSBzaGFkZXMgc21vb3RoLiBUaGUgZmlyc3QgYnVpbGQgZW1pdHRlZCBsb29zZSB0cmlhbmdsZXMsIGFuZCBhIGZsYXQtc2hhZGVkIHNvZnQgYm9keVxuICAvLyBzaG93cyBldmVyeSBzdGF0aW9uIGFzIGEgY3JlYXNlIC0tIGEgcmVjbGluaW5nIGZpZ3VyZSB0aGF0IGxvb2tlZCBjcnVtcGxlZCByYXRoZXIgdGhhbiBkcmFwZWQuXG4gIC8vXG4gIC8vIEEgc2l4dGggc3RhdGlvbiBlbGVtZW50IGBmbGF0WWAgQ0xBTVBTIHRoZSByaW5nJ3MgdW5kZXJzaWRlIHRvIHRoYXQgaGVpZ2h0LiBBIGJvZHkgcmVzdGluZyBvblxuICAvLyB0aGUgZ3JvdW5kIGlzIG5vdCBhIGZsb2F0aW5nIGVsbGlwc2U6IGl0IHNwcmVhZHMgd2hlcmUgaXQgYmVhcnMsIGFuZCBhbiB1bmNsYW1wZWQgdHViZSByZWFkcyBhc1xuICAvLyBhIHNhdXNhZ2Ugb24gYSB0YWJsZS4gVGhlIGNsYW1wIGlzIGEgc29mdCBvbmUgLS0gdGhlIHJpbmcga2VlcHMgaXRzIHdpZHRoIGFuZCBsb3NlcyBpdHMgZHJvb3AgLS1cbiAgLy8gc28gdGhlIGNyZWFzZSBpdCBsZWF2ZXMgaXMgdGhlIGNvbnRhY3QgZWRnZSByYXRoZXIgdGhhbiBhIGN1dC5cbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbeiwgY3gsIGN5LCByeCwgcnksIGZsYXRZXSA9IHN0YXRpb25zW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IHRoID0gaiAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5zaW4odGgpICogcng7XG4gICAgICBsZXQgeSA9IGN5ICsgTWF0aC5jb3ModGgpICogcnk7XG4gICAgICBpZiAoZmxhdFkgIT09IHVuZGVmaW5lZCAmJiB5IDwgZmxhdFkpIHkgPSBmbGF0WTtcbiAgICAgIHBvcy5wdXNoKHgsIHksIHopO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjID0gKGkgKyAxKSAqIHNlZyArIChqICsgMSkgJSBzZWcsIGQgPSBpICogc2VnICsgKGogKyAxKSAlIHNlZztcbiAgICAgIGlkeC5wdXNoKGEsIGIsIGMsIGEsIGMsIGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgocG9zLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5zZXRJbmRleChpZHgpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2ZWhpY2xlIGhlbHBlcnMgKi9cblxuLyoqIFBhaW50IGEgd2hvbGUgZ2VvbWV0cnkgb25lIHZlcnRleCBjb2xvdXIuIEV2ZXJ5IHZlaGljbGUgbWF0ZXJpYWwgaGVyZSBpcyBXSElURSB3aXRoXG4gKiAgdmVydGV4Q29sb3JzIG9uLCBzbyBhIGNvbG91ciBkaWZmZXJlbmNlIGNvc3RzIGFuIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIG1hdGVyaWFsOiB0aGUgYm9keSdzXG4gKiAgdHdvLXRvbmUsIHRoZSB0eXJlIGFnYWluc3QgaXRzIHJpbSwgYW4gYW1iZXIgaW5kaWNhdG9yIG9uIGEgYmxhY2sgYnVtcGVyIGFsbCByaWRlIG9uZSBzaGFkZXIuXG4gKiAgVmVydGV4IGNvbG91cnMgbXVsdGlwbHkgaW4gTElORUFSIHNwYWNlLCBzbyB0aGUgaGV4IGlzIGNvbnZlcnRlZCB0aHJvdWdoIFRIUkVFLkNvbG9yLCB3aGljaFxuICogIGRvZXMgdGhlIHNSR0ItdG8tbGluZWFyIHN0ZXAuICovXG5mdW5jdGlvbiB0aW50R2VvKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCk7XG4gIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEJveC1wcm9qZWN0IHdvcmxkLW1ldHJlIFVWcyBzbyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIChtdWQsIHJ1c3QsIGNvcnJ1Z2F0aW9uKSByZXBlYXRzXG4gKiAgYXQgYSByZWFsIHNpemUgb24gZXZlcnkgZmFjZS4gYHNjYWxlYCBpcyBtZXRyZXMgcGVyIHRpbGUuIFRoZSBkb21pbmFudCBub3JtYWwgYXhpcyBwaWNrcyB0aGVcbiAqICBwYWlyIG9mIHdvcmxkIGF4ZXMgdXNlZCwgc28gYSByb29mIHJlYWRzICh4LCB6KSBhbmQgYSBzaWRlIHJlYWRzICh6LCB5KS4gKi9cbmZ1bmN0aW9uIHdvcmxkVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG5ybS5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgIGlmIChheCA+PSBheSAmJiBheCA+PSBheikgeyB1ID0gcC5nZXRaKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgZWxzZSBpZiAoYXkgPj0gYXopIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WihpKTsgfVxuICAgIGVsc2UgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKipcbiAqIFNJREUtUFJPRklMRSBFWFRSVVNJT046IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyAodGhlIHZlaGljbGUncyBzaWRlIHNpbGhvdWV0dGUsIHdoZWVsXG4gKiBhcmNoZXMgaW5jbHVkZWQgYXMgbm90Y2hlcykgc3dlcHQgYWNyb3NzIHRoZSBmdWxsIHdpZHRoLCB0aGVuIHNoYXBlZCBwZXIgdmVydGV4OlxuICpcbiAqICAtIGB0dW1ibGVgICBuYXJyb3dzIHRoZSBzZWN0aW9uIGFib3ZlIHRoZSBiZWx0IGxpbmUgLS0geCBpcyBzY2FsZWQgYnkgKDEgLSBrICogdCkgd2hlcmUgdCBydW5zXG4gKiAgICAgICAgICAgICAgMCBhdCBgYmVsdGAgdG8gMSBhdCBgcm9vZmAuIFRoYXQgaXMgdGhlIHR1bWJsZWhvbWUgb2YgYSByZWFsIGNhciBib2R5IGFuZCBpcyB3aGF0XG4gKiAgICAgICAgICAgICAgc3RvcHMgdGhlIGdsYXNzaG91c2UgcmVhZGluZyBhcyBhIGJveCBvbiBhIGJveC5cbiAqICAtIGBwbGFuYCAgICByb3VuZHMgdGhlIHBsYW4gYXQgdGhlIG5vc2UgYW5kIHRhaWw6IGFuIG9wdGlvbmFsIGxpc3Qgb2YgW3osIHhTY2FsZV0gc3RhdGlvbnNcbiAqICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWQgYWxvbmcgeiwgc28gYSBib25uZXQgY2FuIHRhcGVyIHRvIDAuOSBvZiB0aGUgd2lkdGggYXQgdGhlIGJ1bXBlciBsaW5lLlxuICpcbiAqIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgaW4gaXRzIG93biAodSwgdiwgZGVwdGgpIGZyYW1lOyByb3RhdGVZKC1QSS8yKSBtYXBzIGRlcHRoIHRvIC14IGFuZCB1IHRvXG4gKiB3b3JsZCB6LCBhbmQgdGhlIHRyYW5zbGF0ZSByZS1jZW50cmVzIHRoZSBzbGFiIG9uIHggPSAwLiBBbnkgc2hhcGluZyBpcyBhcHBsaWVkIEFGVEVSIHRoYXQsIGFuZFxuICogbm9ybWFscyBhcmUgcmVjb21wdXRlZCBsYXN0IHNvIHRoZSBzaGFkZWQgZmFjZXMgZm9sbG93IHRoZSBzaGFwZWQgc3VyZmFjZS5cbiAqL1xuZnVuY3Rpb24gc2lkZUV4dHJ1ZGUocHJvZmlsZTogbnVtYmVyW11bXSwgd2lkdGg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW4/OiBudW1iZXJbXVtdLCBjdXJ2ZVNlZ21lbnRzPzogbnVtYmVyIH0gPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHByb2ZpbGVbMF1bMF0sIHByb2ZpbGVbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2ZpbGUubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwcm9maWxlW2ldWzBdLCBwcm9maWxlW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB3aWR0aCwgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlU2VnbWVudHM6IG9wdHMuY3VydmVTZWdtZW50cyA/PyA2IH0pO1xuICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUod2lkdGggLyAyLCAwLCAwKTtcbiAgc2hhcGVXaWR0aChnLCBvcHRzKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBUaGUgcGVyLXZlcnRleCB4IHNoYXBpbmcgc2hhcmVkIGJ5IHRoZSBib2R5IGFuZCBpdHMgZ2xhc3MgYmFuZCwgc28gYSBwYW5lIG9mZnNldCA1IG1tIHByb3VkIG9mXG4gKiAgdGhlIGJvZHkgc3RheXMgNSBtbSBwcm91ZCBhZnRlciBib3RoIGFyZSBuYXJyb3dlZCBieSB0aGUgc2FtZSBmdW5jdGlvbi4gKi9cbmZ1bmN0aW9uIHNoYXBlV2lkdGgoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksXG4gICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sIHBsYW4/OiBudW1iZXJbXVtdIH0pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGxldCB4ID0gcC5nZXRYKGkpOyBjb25zdCB5ID0gcC5nZXRZKGkpLCB6ID0gcC5nZXRaKGkpO1xuICAgIGlmIChvcHRzLnR1bWJsZSkge1xuICAgICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh5IC0gb3B0cy50dW1ibGUuYmVsdCkgLyAob3B0cy50dW1ibGUucm9vZiAtIG9wdHMudHVtYmxlLmJlbHQpKSk7XG4gICAgICB4ICo9IDEgLSBvcHRzLnR1bWJsZS5rICogdDtcbiAgICB9XG4gICAgaWYgKG9wdHMucGxhbiAmJiBvcHRzLnBsYW4ubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc3QgPSBvcHRzLnBsYW47XG4gICAgICBsZXQgcyA9IHN0WzBdWzFdO1xuICAgICAgaWYgKHogPD0gc3RbMF1bMF0pIHMgPSBzdFswXVsxXTtcbiAgICAgIGVsc2UgaWYgKHogPj0gc3Rbc3QubGVuZ3RoIC0gMV1bMF0pIHMgPSBzdFtzdC5sZW5ndGggLSAxXVsxXTtcbiAgICAgIGVsc2UgZm9yIChsZXQgayA9IDA7IGsgPCBzdC5sZW5ndGggLSAxOyBrKyspIHtcbiAgICAgICAgaWYgKHogPj0gc3Rba11bMF0gJiYgeiA8PSBzdFtrICsgMV1bMF0pIHtcbiAgICAgICAgICBjb25zdCB1ID0gKHogLSBzdFtrXVswXSkgLyAoc3RbayArIDFdWzBdIC0gc3Rba11bMF0pO1xuICAgICAgICAgIHMgPSBzdFtrXVsxXSArIChzdFtrICsgMV1bMV0gLSBzdFtrXVsxXSkgKiB1OyBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgeCAqPSBzO1xuICAgIH1cbiAgICBwLnNldFgoaSwgeCk7XG4gIH1cbiAgcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbn1cblxuLyoqIEEgc2VtaWNpcmN1bGFyIHdoZWVsLWFyY2ggbm90Y2ggYXMgcHJvZmlsZSBwb2ludHMsIHRvIGJlIHNwbGljZWQgaW50byBhIHNpZGUgcHJvZmlsZSB0aGF0IHJ1bnNcbiAqICBhbG9uZyB0aGUgc2lsbCBmcm9tICt6IHRvIC16IChpLmUuIHogREVDUkVBU0lORykuIGBuYCBzZWdtZW50czsgdGhlIGFyYyBpcyB0aGUgVE9QIGhhbGYuICovXG5mdW5jdGlvbiBhcmNoTm90Y2goemM6IG51bWJlciwgeVNpbGw6IG51bWJlciwgcjogbnVtYmVyLCBuID0gNyk6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJIC8gbjsgICAgICAgICAgICAgICAvLyAwIC4uIFBJLCBmcm9tICt6IHJvdW5kIHRoZSB0b3AgdG8gLXpcbiAgICBwdHMucHVzaChbemMgKyBNYXRoLmNvcyhhKSAqIHIsIHlTaWxsICsgTWF0aC5zaW4oYSkgKiByXSk7XG4gIH1cbiAgcmV0dXJuIHB0cztcbn1cblxuLyoqXG4gKiBBIFdIRUVMOiBvbmUgbGF0aGUgYWJvdXQgdGhlIGF4bGUuIFRoZSBwcm9maWxlIHJ1bnMgZnJvbSB0aGUgaHViIGZhY2Ugb24gb25lIHNpZGUgb3ZlciB0aGUgcmltXG4gKiBsaXAsIHRoZSB0eXJlIHNpZGV3YWxsLCB0aGUgdHJlYWQgYW5kIGJhY2sgZG93biB0aGUgZmFyIHNpZGUsIHNvIHRoZSB3aGVlbCBpcyBhIGNsb3NlZCBzb2xpZCB3aXRoXG4gKiBubyBvcGVuIGVuZCBmb3IgdGhlIHR1cm50YWJsZSBnYXRlIHRvIHJlYWQgdGhyb3VnaC4gUmV2b2x2ZWQgYWJvdXQgWSBhbmQgdGhlbiBsYWlkIG9uIFgsIHNvIHRoZVxuICogYXhsZSBpcyB0aGUgeCBheGlzIGFuZCB0aGUgd2hlZWwgcm9sbHMgYWJvdXQgaXQgLS0gd2hpY2ggaXMgdGhlIGF4aXMgaXRzIHBpdm90IGRlY2xhcmVzLlxuICpcbiAqIFR3byB2ZXJ0ZXggY29sb3VyczogYHJpbUhleGAgb24gdGhlIGh1YiBhbmQgcmltIHBvaW50cywgYHR5cmVIZXhgIG9uIHRoZSBzaWRld2FsbCBhbmQgdHJlYWQuIFRoZVxuICogbGF0aGUgb3JkZXJzIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IgKGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgd2hpY2ggaXMgd2hhdCBsZXRzIGFcbiAqIHBlci1wcm9maWxlLXBvaW50IGNvbG91ciBiZSB3cml0dGVuIHdpdGhvdXQgYSBzZWNvbmQgZ2VvbWV0cnkuXG4gKi9cbmZ1bmN0aW9uIHdoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICB0eXJlSGV4OiBudW1iZXIsIHJpbUhleDogbnVtYmVyLCBkaXNoID0gMC41NSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgaHcgPSBoYWxmVztcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjMwLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjYyLCAtaHcgKiAwLjgwXSwgW3JSaW0sIC1odyAqIDAuODZdLCBbclJpbSwgLWh3ICogMC45OF0sXG4gICAgW3JUeXJlICogMC45MywgLWh3XSwgW3JUeXJlLCAtaHcgKiAwLjcyXSwgW3JUeXJlLCBodyAqIDAuNzJdLCBbclR5cmUgKiAwLjkzLCBod10sXG4gICAgW3JSaW0sIGh3ICogMC45OF0sIFtyUmltLCBodyAqIDAuODZdLCBbclJpbSAqIDAuNjIsIGh3ICogMC44MF0sIFtyUmltICogMC4zMCwgaHcgKiBkaXNoXSwgWzAsIGh3ICogZGlzaF0sXG4gIF07XG4gIGNvbnN0IHJpbVBvaW50ID0gKGo6IG51bWJlcikgPT4gaiA8PSA0IHx8IGogPj0gOTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgY29uc3QgY3QgPSBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCksIGNyID0gbmV3IFRIUkVFLkNvbG9yKHJpbUhleCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYyA9IHJpbVBvaW50KGkgJSBwdHMubGVuZ3RoKSA/IGNyIDogY3Q7XG4gICAgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIGcucm90YXRlWihNYXRoLlBJIC8gMik7ICAgIC8vIGxhdGhlIGF4aXMgWSAtPiBheGxlIG9uIFhcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIFdpcmUtc3Bva2VkIHdoZWVsIGRyZXNzaW5nOiBgbmAgdGhpbiBib3hlcyByYWRpYXRpbmcgZnJvbSB0aGUgaHViLCBsYWNlZCBhbHRlcm5hdGVseSB0byBlYWNoXG4gKiAgc2lkZSBvZiB0aGUgcmltIHNvIHRoZXkgY3Jvc3MgdGhlIHdheSByZWFsIHNwb2tlcyBkby4gTWVyZ2VkIGludG8gdGhlIHdoZWVsIGdlb21ldHJ5IHNvIHRoZVxuICogIHdoZWVsIHN0YXlzIE9ORSBpbnN0YW5jZWQgZ2VvbWV0cnkuICovXG5mdW5jdGlvbiBzcG9rZXMockh1YjogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIG46IG51bWJlciwgaGV4OiBudW1iZXIsIHQgPSAwLjAwNiwgcHJpc20gPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAqIDIgLyBuO1xuICAgIGNvbnN0IHNpZGUgPSAoaSAlIDIgPT09IDAgPyAxIDogLTEpICogaGFsZlcgKiAwLjM1O1xuICAgIGNvbnN0IGxlbiA9IHJSaW0gLSBySHViO1xuICAgIC8vIGBwcmlzbWA6IGFuIG9wZW4gdGhyZWUtc2lkZWQgcHJpc20gYXQgc2l4IHRyaWFuZ2xlcyB3aGVyZSB0aGUgYm94IGNvc3RzIHR3ZWx2ZSAtLSBhIHdpcmVcbiAgICAvLyBzcG9rZSBoYXMgbm8gcmVzb2x2YWJsZSBzZWN0aW9uIGF0IHByb3AgZGlzdGFuY2UsIGFuZCAyOCBvZiB0aGVtIG9uIHRocmVlIHdoZWVscyBpcyB0aGVcbiAgICAvLyBkaWZmZXJlbmNlIGJldHdlZW4gYSBsYXJnZSBwcm9wIGluc2lkZSBpdHMgdHJpYW5nbGUgY2VpbGluZyBhbmQgb25lIG92ZXIgaXRcbiAgICBjb25zdCBnID0gcHJpc20gPyBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSh0ICogMC42MiwgdCAqIDAuNjIsIGxlbiwgMywgMSwgdHJ1ZSkgOiBuZXcgVEhSRUUuQm94R2VvbWV0cnkodCwgbGVuLCB0KTtcbiAgICBnLnRyYW5zbGF0ZSgwLCBySHViICsgbGVuIC8gMiwgMCk7XG4gICAgZy5yb3RhdGVYKE1hdGguYXRhbjIoc2lkZSwgbGVuKSAqIDAuNik7XG4gICAgZy5yb3RhdGVYKDApOyBnLnRyYW5zbGF0ZSgwLCAwLCBzaWRlICogMC41KTtcbiAgICBnLnJvdGF0ZVgoYSk7ICAgICAgICAgICAgLy8gcmFkaWF0ZSBhcm91bmQgdGhlIGF4bGUgKHgpXG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiB0aW50R2VvKG1lcmdlR2VvcyhzZWdzKSwgaGV4KTtcbn1cblxuLyoqIEEgcG9seWxpbmUgVFVCRTogb25lIGN5bGluZGVyIHBlciBzZWdtZW50LCBlYWNoIHJvdGF0ZWQgb250byBpdHMgY2hvcmQsIHdpdGggYSBzbWFsbCBzcGhlcmUtbGVzc1xuICogIG92ZXJsYXAgc28gdGhlIGpvaW50cyBjbG9zZS4gSGFuZGxlYmFycywgY2Fub3B5IHJhaWxzLCByb2xsIGNhZ2VzIGFuZCBmcmFtZSB0dWJlcy4gKi9cbi8qKlxuICogYHJgIG1heSBiZSBhIHNpbmdsZSByYWRpdXMgKGV2ZXJ5IHNlZ21lbnQgdGhlIHNhbWUsIHRoZSBvcmlnaW5hbCBiZWhhdmlvdXIpIG9yIE9ORSBSQURJVVMgUEVSXG4gKiBTVEFUSU9OLCB3aGljaCB0YXBlcnMgdGhlIHR1YmUuIEEgY2FwcGVkIGNvbnN0YW50LXJhZGl1cyB0dWJlIGVuZHMgaW4gYSBmbGF0IGRpc2MsIGFuZCBvbiB0aGVcbiAqIHNwaXJpdCBob3VzZSdzIGVhdmUgaG9ybnMgdGhhdCByZWFkIGFzIGZvdXIgY3V0LW9mZiBwb3N0cyByYXRoZXIgdGhhbiBwb2ludHM7IGEgaG9ybiwgYSBzcGlrZSBvclxuICogYSB3aGlza2VyIG5lZWRzIGl0cyBsYXN0IHN0YXRpb24gYXQgfjAuMjUgb2YgdGhlIGZhc2NpYSByYWRpdXMuIFRoZSBqb2ludCBvdmVybGFwIHRoYXQgaGlkZXMgdGhlXG4gKiBzZWFtIGJldHdlZW4gc2VnbWVudHMgaXMgKHJhICsgcmIpICogMC42LCB3aGljaCBpcyBleGFjdGx5IHRoZSBvbGQgYHIgKiAxLjJgIHdoZW4gdGhleSBhcmUgZXF1YWwsXG4gKiBzbyBhIG51bWJlciBzdGlsbCBwcm9kdWNlcyBieXRlLWlkZW50aWNhbCBnZW9tZXRyeS5cbiAqL1xuZnVuY3Rpb24gdHViZShwdHM6IG51bWJlcltdW10sIHI6IG51bWJlciB8IG51bWJlcltdLCBzZWcgPSA4LCBoZXg/OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHJBdCA9IChpOiBudW1iZXIpID0+ICh0eXBlb2YgciA9PT0gJ251bWJlcicgPyByIDogcltNYXRoLm1pbihpLCByLmxlbmd0aCAtIDEpXSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaV1bMF0sIHB0c1tpXVsxXSwgcHRzW2ldWzJdKTtcbiAgICBjb25zdCBiID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2kgKyAxXVswXSwgcHRzW2kgKyAxXVsxXSwgcHRzW2kgKyAxXVsyXSk7XG4gICAgY29uc3QgZCA9IGIuY2xvbmUoKS5zdWIoYSk7IGNvbnN0IGxlbiA9IGQubGVuZ3RoKCk7XG4gICAgaWYgKGxlbiA8IDFlLTYpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHJhID0gckF0KGkpLCByYiA9IHJBdChpICsgMSk7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJiLCByYSwgbGVuICsgKHJhICsgcmIpICogMC42LCBzZWcsIDEsIGZhbHNlKTtcbiAgICBjb25zdCBxID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGQubm9ybWFsaXplKCkpO1xuICAgIGcuYXBwbHlRdWF0ZXJuaW9uKHEpO1xuICAgIGNvbnN0IG0gPSBhLmNsb25lKCkuYWRkKGIpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG4gICAgZy50cmFuc2xhdGUobS54LCBtLnksIG0ueik7XG4gICAgcGFydHMucHVzaChnKTtcbiAgfVxuICBjb25zdCBvdXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBvdXQgOiB0aW50R2VvKG91dCwgaGV4KTtcbn1cblxuLyoqXG4gKiBBIEZMQVQgU1RSQVAgc3dlcHQgYWxvbmcgYSBwb2x5bGluZTogYSBjaGFpbiBvZiBib3hlcywgZWFjaCBvcmllbnRlZCBzbyBpdHMgTEVOR1RIIHJ1bnMgYWxvbmcgdGhlXG4gKiBzZWdtZW50LCBpdHMgVEhJQ0tORVNTIGFsb25nIHRoZSBvdXR3YXJkIG5vcm1hbCBmcm9tIGBhYm91dGAsIGFuZCBpdHMgV0lEVEggdGFuZ2VudCB0byB0aGF0XG4gKiBzdXJmYWNlLiBUaGlzIGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYSBndWFyZCBhbmQgYSB3aXJlOiBhIGJ1bGtoZWFkIGxhbXAncyBjYWdlIGlzIHByZXNzZWRcbiAqIGZsYXQgYmFyLCBhbmQgYSByb3VuZCB0dWJlIG9mIHRoZSBzYW1lIG1lYXN1cmVkIHdpZHRoIHNoYWRlcyB0byBhIG5hcnJvdyBoaWdobGlnaHQgYW5kIHJlYWRzIGFzXG4gKiB3aXJlIC0tIHdoaWNoIGlzIHRoZSB0aGluZyB0aGlzIGtpdCdzIGFzc2V0IG5vdGVzIHJ1bGUgb3V0LiBJdCBpcyBhbHNvIENIRUFQRVIgdGhhbiBgdHViZWA6IGEgYm94XG4gKiBpcyAxMiB0cmlhbmdsZXMgYWdhaW5zdCBhIGNhcHBlZCA1LXNpZGVkIGN5bGluZGVyJ3MgMjAuXG4gKi9cbmZ1bmN0aW9uIHN0cmFwKHB0czogbnVtYmVyW11bXSwgdzogbnVtYmVyLCB0OiBudW1iZXIsIGFib3V0OiBudW1iZXJbXSwgaGV4PzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBjID0gbmV3IFRIUkVFLlZlY3RvcjMoYWJvdXRbMF0sIGFib3V0WzFdLCBhYm91dFsyXSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaV1bMF0sIHB0c1tpXVsxXSwgcHRzW2ldWzJdKTtcbiAgICBjb25zdCBiID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2kgKyAxXVswXSwgcHRzW2kgKyAxXVsxXSwgcHRzW2kgKyAxXVsyXSk7XG4gICAgY29uc3QgZGlyID0gYi5jbG9uZSgpLnN1YihhKTsgY29uc3QgbGVuID0gZGlyLmxlbmd0aCgpO1xuICAgIGlmIChsZW4gPCAxZS02KSBjb250aW51ZTtcbiAgICBkaXIubm9ybWFsaXplKCk7XG4gICAgY29uc3QgbWlkID0gYS5jbG9uZSgpLmFkZChiKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuICAgIC8vIE91dHdhcmQgbm9ybWFsIGF0IHRoZSBtaWRwb2ludCwgcmUtb3J0aG9nb25hbGlzZWQgYWdhaW5zdCB0aGUgcnVuIHNvIHRoZSBiYXNpcyBzdGF5cyBzcXVhcmVcbiAgICAvLyB3aGVyZSB0aGUgc3RyYXAgY2xpbWJzIHN0ZWVwbHkgYW5kIHRoZSB0d28gd291bGQgb3RoZXJ3aXNlIGJlIG5lYXJseSBwYXJhbGxlbC5cbiAgICBsZXQgbnJtID0gbWlkLmNsb25lKCkuc3ViKGMpO1xuICAgIG5ybS5zdWIoZGlyLmNsb25lKCkubXVsdGlwbHlTY2FsYXIobnJtLmRvdChkaXIpKSk7XG4gICAgaWYgKG5ybS5sZW5ndGhTcSgpIDwgMWUtMTIpIG5ybSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpLnN1YihkaXIuY2xvbmUoKS5tdWx0aXBseVNjYWxhcihkaXIueikpO1xuICAgIG5ybS5ub3JtYWxpemUoKTtcbiAgICAvLyBkaXIgeCBucm0sIE5PVCBucm0geCBkaXIuIFRoZSBiYXNpcyBjb2x1bW5zIGFyZSAoc2lkZSwgZGlyLCBucm0pIGFnYWluc3QgYSBib3gncyAodywgbGVuLCB0KSxcbiAgICAvLyBzbyBhIHJpZ2h0LWhhbmRlZCBiYXNpcyBuZWVkcyBzaWRlIHggZGlyID0gbnJtOyBucm0geCBkaXIgZ2l2ZXMgLW5ybSwgYSBtaXJyb3JlZCBiYXNpcyB3aXRoIGFcbiAgICAvLyBuZWdhdGl2ZSBkZXRlcm1pbmFudCwgYW5kIGV2ZXJ5IHN0cmFwIHJlbmRlcnMgaW5zaWRlIG91dCAtLSB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBkYXJrXG4gICAgLy8gc2xpdmVyIHJhdGhlciB0aGFuIGFuIG9idmlvdXNseSBmbGlwcGVkIGZhY2UsIHNvIGl0IHJlYWRzIGFzIGEgZ2VvbWV0cnkgYnVnLCBub3QgYSB3aW5kaW5nIG9uZS5cbiAgICBjb25zdCBzaWRlID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jcm9zc1ZlY3RvcnMoZGlyLCBucm0pLm5vcm1hbGl6ZSgpO1xuICAgIC8vIE92ZXJsYXAgdGhlIGpvaW50cyBieSB0aGUgdGhpY2tuZXNzIHNvIGNvbnNlY3V0aXZlIGJveGVzIGNsb3NlIHRoZSBtaXRyZSByYXRoZXIgdGhhblxuICAgIC8vIGxlYXZpbmcgYSB3ZWRnZSBvZiBkYXlsaWdodCBhdCBldmVyeSBzdGF0aW9uLlxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgbGVuICsgdCwgdCk7XG4gICAgZy5hcHBseU1hdHJpeDQobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlQmFzaXMoc2lkZSwgZGlyLCBucm0pKTtcbiAgICBnLnRyYW5zbGF0ZShtaWQueCwgbWlkLnksIG1pZC56KTtcbiAgICBwYXJ0cy5wdXNoKGcpO1xuICB9XG4gIGNvbnN0IG91dCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IG91dCA6IHRpbnRHZW8ob3V0LCBoZXgpO1xufVxuXG4vKiogQSByb3RhdGVkIGJveDogW2N4LCBjeSwgY3osIHcsIGgsIGQsIHJ4LCByeSwgcnpdIHdpdGggdGhlIHJvdGF0aW9ucyBhcHBsaWVkIGluIHgsIHksIHogb3JkZXJcbiAqICBhYm91dCB0aGUgYm94J3Mgb3duIGNlbnRyZS4gQSBib25uZXQgbGlwLCBhIHJha2VkIG1pcnJvciBzdGVtLCBhIGNhbm9weSBzdGF5LiAqL1xuZnVuY3Rpb24gcmJveChiOiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShiWzNdLCBiWzRdLCBiWzVdKTtcbiAgaWYgKGJbNl0pIGcucm90YXRlWChiWzZdKTsgaWYgKGJbN10pIGcucm90YXRlWShiWzddKTsgaWYgKGJbOF0pIGcucm90YXRlWihiWzhdKTtcbiAgZy50cmFuc2xhdGUoYlswXSwgYlsxXSwgYlsyXSk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBiYXRjaCBvZiBib3hlcywgZWFjaCB0aW50ZWQsIG1lcmdlZDogW1toZXgsIGN4LCBjeSwgY3osIHcsIGgsIGQsIHJ4Pywgcnk/LCByej9dLCAuLi5dLiBUaGVcbiAqICB0cmltIGNvbXBvbmVudCBvZiBldmVyeSB2ZWhpY2xlIGlzIG9uZSBvZiB0aGVzZSAtLSBidW1wZXJzLCBncmlsbGUsIGxhbXBzLCBtaXJyb3JzLCBoYW5kbGVzLFxuICogIHN0ZXBzLCBhcmNoIGZsYXJlcyAtLSBzbyBmb3J0eSBwYXJ0cyByaWRlIG9uZSBzdWJtaXNzaW9uLiAqL1xuZnVuY3Rpb24gdGludGVkQm94ZXMobGlzdDogbnVtYmVyW11bXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gdGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSkpO1xufVxuXG4vKiogTWlycm9yIGEgYm94IGxpc3QgYWNyb3NzIHggPSAwIChsZWZ0L3JpZ2h0IHBhaXJzKS4gUm90YXRpb25zIGFib3V0IHkgYW5kIHogZmxpcCBzaWduLiAqL1xuZnVuY3Rpb24gbWlycm9yWChsaXN0OiBudW1iZXJbXVtdKTogbnVtYmVyW11bXSB7XG4gIHJldHVybiBsaXN0LmZsYXRNYXAoKGIpID0+IFtiLCBbYlswXSwgLWJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0sIGJbNl0sIGJbN10gPz8gMCwgLShiWzhdID8/IDApLCAtKGJbOV0gPz8gMCldXSk7XG59XG5cbi8qKiBBIHNlYW1sZXNzIENhbnZhcyAyRCB0aWxlOiBgZHJhdyhjdHgsIHNpemUpYCBwYWludHMgaXQsIGFuZCB0aGUgcmVzdWx0IGlzIGEgcmVwZWF0aW5nIHRleHR1cmVcbiAqICBpbiBzUkdCLiBVc2VkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbiwgc28gdGhlIHRleHR1cmVsZXNzIGRlY2xhcmF0aW9uIHN0YW5kcyBhbmQgbm9cbiAqICBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLiBSZXR1cm5zIG51bGwgd2hlcmUgdGhlcmUgaXMgbm8gRE9NICh0aGUgaGVhZGxlc3MgaGFybmVzc1xuICogIGhhcyBvbmU7IGEgbm9kZS1zaWRlIHByb2JlIGRvZXMgbm90KSwgYW5kIGV2ZXJ5IGNhbGxlciB0b2xlcmF0ZXMgbnVsbC4gKi9cbmZ1bmN0aW9uIGNhbnZhc1RpbGUoc2l6ZTogbnVtYmVyLCBkcmF3OiAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHM6IG51bWJlcikgPT4gdm9pZCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsO1xuICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOyBjdi53aWR0aCA9IHNpemU7IGN2LmhlaWdodCA9IHNpemU7XG4gIC8vIHdpbGxSZWFkRnJlcXVlbnRseSBrZWVwcyB0aGUgdGlsZSBvbiB0aGUgQ1BVIHJhc3RlciBwYXRoOiBhIEdQVS1iYWNrZWQgY2FudmFzIGNvc3RzIHNlY29uZHMgcGVyXG4gIC8vIHRob3VzYW5kIHBhdGggZmlsbHMgd2hlcmUgdGhlIHNvZnR3YXJlIHBhdGggdGFrZXMgdGVucyBvZiBtaWxsaXNlY29uZHMuXG4gIGNvbnN0IGN0eCA9IGN2LmdldENvbnRleHQoJzJkJywgeyB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUgfSkgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDsgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuICBkcmF3KGN0eCwgc2l6ZSk7XG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGN2KTtcbiAgdGV4LndyYXBTID0gdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gIHRleC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIHJldHVybiB0ZXg7XG59XG5cbi8qKiBEZXRlcm1pbmlzdGljIHBzZXVkby1yYW5kb20gZm9yIGNhbnZhcyBkcmVzc2luZyAtLSBhc3NpZ25lZCBieSBpbmRleCwgbmV2ZXIgTWF0aC5yYW5kb20sIHNvIHRoZVxuICogIG1vZGVsIGlzIGJ5dGUtaWRlbnRpY2FsIG9uIGV2ZXJ5IGJ1aWxkLiAqL1xuZnVuY3Rpb24gbGNnKHNlZWQ6IG51bWJlcik6ICgpID0+IG51bWJlciB7XG4gIGxldCBzID0gc2VlZCA+Pj4gMDtcbiAgcmV0dXJuICgpID0+IHsgcyA9IChzICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwOyByZXR1cm4gcyAvIDQyOTQ5NjcyOTY7IH07XG59XG5cbi8qKlxuICogTVVEIC8gUk9BRC1HUklNRSB0aWxlLCBSRS1CQVNFRC4gVGhhaSByb2FkIG11ZCBpcyB0YW4gYW5kIEJSSUdIVEVSIHRoYW4gbW9zdCBwYWludCwgYW5kIGFcbiAqIG11bHRpcGxpZXIgY2Fubm90IGJyaWdodGVuOiBzbyB0aGUgcGFpbnQgbWF0ZXJpYWwgY2FycmllcyB0aGUgTVVEIEVOVkVMT1BFIGNvbG91ciAobWVhc3VyZWQgb25cbiAqIHRoZSBtdWRkeSBzaWxsKSwgdGhpcyB0aWxlIGNhcnJpZXMgdGhlIGNsZWFuIHBhaW50IGFzIGEgUkFUSU8gb2YgdGhhdCBlbnZlbG9wZSBvdmVyIG1vc3Qgb2YgaXRzXG4gKiBhcmVhIChgYmFzZWApLCBhbmQgdGhlIG11ZCBpcyBwYWludGVkIGFzIHdoaXRlIC0tIGkuZS4gdGhlIGVudmVsb3BlIGl0c2VsZiAtLSBpbiBhIHdhc2ggcmlzaW5nXG4gKiBmcm9tIHRoZSBib3R0b20gdG8gYGNvdmVyYWdlYCBvZiB0aGUgdGlsZSBoZWlnaHQgcGx1cyBzcGxhdHRlciBhYm92ZSBpdC4gQm91bmQgd2l0aCBoZWlnaHQgVVZzXG4gKiBzbyB2ID0gMCBpcyB0aGUgZ3JvdW5kIGFuZCB0aGUgd2FzaCBzaXRzIG9uIHRoZSBzaWxscyBhbmQgYXJjaGVzLlxuICovXG5mdW5jdGlvbiBtdWRUaWxlKHNpemU6IG51bWJlciwgYmFzZTogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMzKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHRvSGV4ID0gKHY6IG51bWJlcltdKSA9PiAnIycgKyB2Lm1hcCgoYykgPT4gTWF0aC5yb3VuZChNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBjKSkgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdG9IZXgoYmFzZSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LDI1NSwyNTUsMC44OCknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjQ1LCAncmdiYSgyNTUsMjU1LDI1NSwwLjQ1KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTUsMjU1LDApJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDkwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjM1O1xuICAgICAgY29uc3QgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA1O1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMjg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsMjUwLDI0MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1MCwyNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYSBsaXR0bGUgZ3JhaW4gc28gdGhlIGNsZWFuIHBhaW50IGlzIG5vdCBhIGZsYXQgZmlsbFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTIwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjb25zdCB2ID0gcm5kKCkgPCAwLjUgPyAwIDogMjU1O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMDM1KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIERVU1QgdGlsZSBmb3IgcGFpbnQgdGhhdCBpcyBCUklHSFRFUiB0aGFuIGl0cyBkaXJ0IChhIHdoaXRlIHZhbik6IGEgcGxhaW4gbXVsdGlwbGllciwgd2hpdGVcbiAqICBiYXNlIGFuZCBhIGdyZXktYnJvd24gd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsIHBsdXMgc29mdCBibG9icy4gKi9cbmZ1bmN0aW9uIGR1c3RUaWxlKHNpemU6IG51bWJlciwgZHVzdDogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBjID0gZHVzdC5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogTWF0aC5taW4oMSwgdikpKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC45KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC40KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjQsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNSwgYSA9IDAuMDggKyBybmQoKSAqIDAuMjU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogQ09SUlVHQVRFRCBTSEVFVCB0aWxlOiB2ZXJ0aWNhbCByaWRnZXMgYXMgYSBzaW5lLXNoYWRlZCBzdHJpcGUgZmllbGQsIHVzZWQgYXMgbWFwIEFORCBidW1wTWFwIG9uXG4gKiAgYSBzb25ndGhhZXcgcm9vZiBzbyB0aGUgcmlkZ2VzIGNhdGNoIGxpZ2h0LiBgcGl0Y2hgIHJpZGdlcyBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIGNvcnJ1Z2F0aW9uVGlsZShzaXplOiBudW1iZXIsIHBpdGNoOiBudW1iZXIsIGxvdzogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgIGNvbnN0IHQgPSAoTWF0aC5jb3MoeCAvIHMgKiBNYXRoLlBJICogMiAqIHBpdGNoKSArIDEpIC8gMjsgICAvLyAxIGF0IGNyZXN0LCAwIGluIHRyb3VnaFxuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogKGxvdyArICgxIC0gbG93KSAqIHQpKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gNCArIHJuZCgpICogcyAqIDAuMDg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjE4O1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDEyMCw5MCw2MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTIwLDkwLDYwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBQTEFOSyB0aWxlOiBib2FyZHMgcnVubmluZyBhbG9uZyB1IHdpdGggZGFyayBqb2ludHMgYW5kIGdyYWluIHN0cmVha3MsIGEgbXVsdGlwbGllciBvbiBhXG4gKiAgbWVhc3VyZWQgdGltYmVyIGFsYmVkby4gYGJvYXJkc2AgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBwbGFua1RpbGUoc2l6ZTogbnVtYmVyLCBib2FyZHM6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBiaCA9IHMgLyBib2FyZHM7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBib2FyZHM7IGIrKykge1xuICAgICAgY29uc3QgdG9uZSA9IDAuODIgKyBybmQoKSAqIDAuMTg7XG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0b25lKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIGJoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCwzMCwyMCwwLjU1KSc7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIE1hdGgubWF4KDEsIHMgKiAwLjAwNikpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAxNDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHkgPSBiICogYmggKyBybmQoKSAqIGJoLCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC42KSwgeCA9IHJuZCgpICogcztcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoNjAsNDUsMzAsJHswLjA1ICsgcm5kKCkgKiAwLjEyfSlgOyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggLSBzLCB5KTsgY3R4LmxpbmVUbyh4IC0gcyArIGxlbiwgeSk7IGN0eC5tb3ZlVG8oeCwgeSk7IGN0eC5saW5lVG8oeCArIGxlbiwgeSk7IGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogUlVTVCB0aWxlOiBhIG11bHRpcGxpZXIgb2YgYmxvdGNoZWQgb3JhbmdlLWJyb3duIG92ZXIgYSBiYXNlLCBkYXJrIGNvcmVzIGxpZnRlZCBzbyBub3RoaW5nIGxhbmRzXG4gKiAgb24gdGhlIGx1bWEtNTggaG9sZSBnYXRlLiAqL1xuZnVuY3Rpb24gcnVzdFRpbGUoc2l6ZTogbnVtYmVyLCByYXRpbzogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgZGVuc2l0eSA9IDkwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbnNpdHk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA5O1xuICAgICAgY29uc3QgYSA9IDAuMTUgKyBybmQoKSAqIDAuNDU7XG4gICAgICBjb25zdCBjID0gcmF0aW8ubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIHYpKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogSGVpZ2h0LWtleWVkIFVWczogdiBpcyB3b3JsZCBIRUlHSFQgb3ZlciBgc2NhbGVgIG1ldHJlcywgdSBydW5zIGFsb25nIHRoZSBkb21pbmFudCBob3Jpem9udGFsXG4gKiAgYXhpcy4gQSBtdWQgdGlsZSBib3VuZCB0aGlzIHdheSBkYXJrZW5zIHRoZSBzaWxscyBhbmQgc3RheXMgY2xlYW4gb24gdGhlIHJvb2YgLS0gYSBwbGFpbiBib3hcbiAqICBwcm9qZWN0aW9uIHdvdWxkIHJlcGVhdCB0aGUgdGlsZSdzIGRpcnR5IGJhbmQgYWNyb3NzIHRoZSByb29mIGFzIHN0cmlwZXMuICovXG4vKipcbiAqIFNIT1JUIEZVUjogYSBzZWFtbGVzcyB0aWxlIG9mIGRlbnNlLCBzaG9ydCwgZGlyZWN0aW9uYWwgaGFpciBzdHJva2VzIG92ZXIgYSBjbG91ZHkgdG9uZSBkcmlmdCwgYXMgYVxuICogbXVsdGlwbHkgbWFwIChhbmQgYnVtcCkgb24gYSB3aGl0ZSB2ZXJ0ZXgtY29sb3VyZWQgY29hdC4gVGhlIHN0cm9rZXMgcnVuIGFsb25nIHYgd2l0aCBhIGppdHRlcmVkXG4gKiBsZWFuIGFuZCBhIG5hcnJvdyB0b25lIHNwcmVhZCAtLSBhIHdpZGUgc3ByZWFkIHJlYWRzIGFzIHNjYWxlcywgYSBwZXJmZWN0IGxheSByZWFkcyBhcyBjb21iZWRcbiAqIHBsYXN0aWMuIGBwYXRjaGVzYCBhZGRzIGEgZmV3IHNvZnQgcGluay1ncmV5IGJhcmUgcGF0Y2hlcywgdGhlIG1hbmdlIG1hcmtzIG9mIGEgc3RyZWV0IGRvZy5cbiAqL1xuZnVuY3Rpb24gZnVyVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCB0b25lID0gby50b25lID8/IFswLjcyLCAwLjY2LCAwLjU4XSwgbSA9IHMgKiAwLjA2O1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBjbG91ZHkgZHJpZnQgdW5kZXJuZWF0aCBzbyB0aGUgY29hdCBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmNsb3VkcyA/PyAyNik7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wOCArIHJuZCgpICogMC4xOCksIGEgPSAwLjA0ICsgcm5kKCkgKiAwLjEwO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IodG9uZSl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih0b25lKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGJhcmUgcGF0Y2hlczogc29mdCwgc3BhcnNlLCB3YXJtIGdyZXktcGlua1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucGF0Y2hlcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA0ICsgcm5kKCkgKiAwLjA1KSwgcGMgPSBvLnBhdGNoVG9uZSA/PyBbMC43MiwgMC41NiwgMC41Ml07XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihwYyl9LDAuNTUpYCk7IGcyLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKCR7cmdiKHBjKX0sMC4zKWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocGMpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciAqIDEuMywgciwgcm5kKCkgKiBNYXRoLlBJLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gaGFpciBzdHJva2VzOiBkYXJrIGFuZCBsaWdodCwgc2hvcnQsIGxlYW5pbmcgd2l0aGluICstMjIgZGVncmVlcyBvZiB2XG4gICAgY29uc3Qgc3Ryb2tlcyA9IG8uc3Ryb2tlcyA/PyA1MDAwLCBsZW4gPSBzICogKG8ubGVuZ3RoID8/IDAuMDIyKTtcbiAgICBjb25zdCBkcmF3U3Ryb2tlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCB3OiBudW1iZXIpID0+IHtcbiAgICAgIGN0eC5saW5lV2lkdGggPSB3OyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSk7IGN0eC5saW5lVG8oeCArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7XG4gICAgICBpZiAoeCA8IG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBzLCB5KTsgY3R4LmxpbmVUbyh4ICsgcyArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh4ID4gcyAtIG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggLSBzLCB5KTsgY3R4LmxpbmVUbyh4IC0gcyArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh5IDwgbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSArIHMpOyBjdHgubGluZVRvKHggKyBkeCwgeSArIHMgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHkgPiBzIC0gbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSAtIHMpOyBjdHgubGluZVRvKHggKyBkeCwgeSAtIHMgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgIH07XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Ryb2tlczsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB0aCA9IChybmQoKSAtIDAuNSkgKiAwLjc4LCBsID0gbGVuICogKDAuNiArIHJuZCgpICogMC44KTtcbiAgICAgIGNvbnN0IGxpZ2h0ID0gcm5kKCkgPCAwLjQyO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IGxpZ2h0ID8gJ3NjcmVlbicgOiAnbXVsdGlwbHknO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gbGlnaHQgPyBgcmdiYSgyNTUsMjUwLDI0MCwkezAuMDUgKyBybmQoKSAqIDAuMTB9KWAgOiBgcmdiYSgke3JnYih0b25lKX0sJHswLjA2ICsgcm5kKCkgKiAwLjE0fSlgO1xuICAgICAgZHJhd1N0cm9rZSh4LCB5LCBNYXRoLnNpbih0aCkgKiBsLCBNYXRoLmNvcyh0aCkgKiBsLCAwLjYgKyBybmQoKSAqIDEuMik7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0VVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBjb25zdCB1ID0gYXggPj0gYXogPyBwLmdldFooaSkgOiBwLmdldFgoaSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gcC5nZXRZKGkpIC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBPZmZzZXQgYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzIG91dHdhcmQgYnkgYGRgIGFsb25nIHRoZSBhdmVyYWdlZCBlZGdlIG5vcm1hbHMuIFVzZWRcbiAqICB0byBzdGFuZCB0aGUgZ2xhc3MgYmFuZCBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgYm9keSdzIHJha2VkIHdpbmRzY3JlZW4gYW5kIHJlYXIgZ2xhc3NcbiAqICBmYWNlcywgc28gdGhlIHBhbmUgYW5kIHRoZSBib2R5IG5ldmVyIHNoYXJlIGEgcGxhbmUuIFdpbmRpbmc6IGNvdW50ZXItY2xvY2t3aXNlIGluICh6LCB5KS4gKi9cbmZ1bmN0aW9uIG9mZnNldFBvbHkocHRzOiBudW1iZXJbXVtdLCBkOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgbiA9IHB0cy5sZW5ndGgsIG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBwdHNbKGkgKyBuIC0gMSkgJSBuXSwgYiA9IHB0c1tpXSwgYyA9IHB0c1soaSArIDEpICUgbl07XG4gICAgY29uc3QgZTEgPSBbYlswXSAtIGFbMF0sIGJbMV0gLSBhWzFdXSwgZTIgPSBbY1swXSAtIGJbMF0sIGNbMV0gLSBiWzFdXTtcbiAgICBjb25zdCBsMSA9IE1hdGguaHlwb3QoZTFbMF0sIGUxWzFdKSB8fCAxLCBsMiA9IE1hdGguaHlwb3QoZTJbMF0sIGUyWzFdKSB8fCAxO1xuICAgIC8vIG91dHdhcmQgbm9ybWFsIG9mIGEgQ0NXIGVkZ2UgKGR6LCBkeSkgaXMgKGR5LCAtZHopXG4gICAgY29uc3QgbjEgPSBbZTFbMV0gLyBsMSwgLWUxWzBdIC8gbDFdLCBuMiA9IFtlMlsxXSAvIGwyLCAtZTJbMF0gLyBsMl07XG4gICAgbGV0IG54ID0gbjFbMF0gKyBuMlswXSwgbnkgPSBuMVsxXSArIG4yWzFdO1xuICAgIGNvbnN0IG5sID0gTWF0aC5oeXBvdChueCwgbnkpIHx8IDE7IG54IC89IG5sOyBueSAvPSBubDtcbiAgICBjb25zdCBjb3NIYWxmID0gTWF0aC5tYXgoMC4zNSwgbnggKiBuMVswXSArIG55ICogbjFbMV0pO1xuICAgIG91dC5wdXNoKFtiWzBdICsgbnggKiBkIC8gY29zSGFsZiwgYlsxXSArIG55ICogZCAvIGNvc0hhbGZdKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogQSB3aGVlbC1hcmNoIEZMQVJFOiBhIGhhbGYtYW5udWx1cyBpbiB0aGUgKHosIHkpIHBsYW5lLCBleHRydWRlZCBhY3Jvc3MgeDAuLngxIG9uIGJvdGggc2lkZXNcbiAqICBhbmQgdGludGVkLiBTdGFuZHMgcHJvdWQgb2YgdGhlIGJvZHkgc2lkZSBhbmQgaGlkZXMgdGhlIGFyY2gncyBjdXQgZWRnZS4gKi9cbmZ1bmN0aW9uIGZsYXJlKHpjOiBudW1iZXIsIHljOiBudW1iZXIsIHJJbjogbnVtYmVyLCByT3V0OiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGhleDogbnVtYmVyLCBuID0gOSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBjb25zdCB6ID0gemMgKyBNYXRoLmNvcyhhKSAqIHJPdXQsIHkgPSB5YyArIE1hdGguc2luKGEpICogck91dDsgaWYgKGkgPT09IDApIHNoYXBlLm1vdmVUbyh6LCB5KTsgZWxzZSBzaGFwZS5saW5lVG8oeiwgeSk7IH1cbiAgZm9yIChsZXQgaSA9IG47IGkgPj0gMDsgaS0tKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBzaGFwZS5saW5lVG8oemMgKyBNYXRoLmNvcyhhKSAqIHJJbiwgeWMgKyBNYXRoLnNpbihhKSAqIHJJbik7IH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IG1rID0gKHN4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeDEgLSB4MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgZy50cmFuc2xhdGUoeDEsIDAsIDApOyBpZiAoc3ggPCAwKSBnLnNjYWxlKC0xLCAxLCAxKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiB0aW50R2VvKGcsIGhleCk7XG4gIH07XG4gIGNvbnN0IGwgPSBtaygtMSksIHIgPSBtaygxKTtcbiAgLy8gYSBuZWdhdGl2ZSBzY2FsZSBmbGlwcyB0aGUgd2luZGluZzsgcmVzdG9yZSBpdCBzbyB0aGUgZmxhcmUgaXMgbm90IGluc2lkZSBvdXRcbiAgY29uc3QgaWR4ID0gbC5nZXRJbmRleCgpOyBpZiAoaWR4KSB7IGNvbnN0IGEgPSBpZHguYXJyYXkgYXMgYW55OyBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpICs9IDMpIHsgY29uc3QgdCA9IGFbaSArIDFdOyBhW2kgKyAxXSA9IGFbaSArIDJdOyBhW2kgKyAyXSA9IHQ7IH0gaWR4Lm5lZWRzVXBkYXRlID0gdHJ1ZTsgfVxuICBlbHNlIHsgY29uc3QgcCA9IGwuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpOyBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkgKz0gMykgeyBjb25zdCB4MV8gPSBwLmdldFgoaSArIDEpLCB5MV8gPSBwLmdldFkoaSArIDEpLCB6MV8gPSBwLmdldFooaSArIDEpOyBwLnNldFhZWihpICsgMSwgcC5nZXRYKGkgKyAyKSwgcC5nZXRZKGkgKyAyKSwgcC5nZXRaKGkgKyAyKSk7IHAuc2V0WFlaKGkgKyAyLCB4MV8sIHkxXywgejFfKTsgfSB9XG4gIGwuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhbbCwgcl0pO1xufVxuXG4vKiogQmluZCBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHRvIGEgbWF0ZXJpYWwgYXMgbWFwIChhbmQgYnVtcCksIGxlYXZpbmcgdGhlIHRleHR1cmVsZXNzXG4gKiAgZGVjbGFyYXRpb24gaW50YWN0OiBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLCB0aGUgbWVhc3VyZWQgY29sb3VyIHN0YXlzIHRoZVxuICogIG11bHRpcGxpY2FuZCwgYW5kIHRoZSB3aG9sZSB0aGluZyBjb3N0cyBvbmUgY2FudmFzLiAqL1xuZnVuY3Rpb24gYmluZFRpbGUobWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCwgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCwgYnVtcCA9IDApOiB2b2lkIHtcbiAgaWYgKCF0ZXgpIHJldHVybjtcbiAgbWF0Lm1hcCA9IHRleDtcbiAgaWYgKGJ1bXAgPiAwKSB7IG1hdC5idW1wTWFwID0gdGV4OyBtYXQuYnVtcFNjYWxlID0gYnVtcDsgfVxuICBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG5cbi8qKlxuICogQSBEUkFQRUQgU0hFRVQ6IGBoZWlnaHRzW2pdW2ldYCBpcyB0aGUgdG9wIHN1cmZhY2UgYXQgeCA9IHgwLi54MSAoaSBvdmVyIG54KSBhbmQgeiA9IHowLi56MSAoaiBvdmVyXG4gKiBueik7IHRoZSBzaGVldCBpcyBgdGAgdGhpY2suIFRvcCBhbmQgdW5kZXJzaWRlIGFyZSBzbW9vdGgtc2hhZGVkIGdyaWRzLCB0aGUgZm91ciBlZGdlcyBhcmUgZmxhdFxuICogc3RyaXBzIHdvdW5kIG91dHdhcmQuIEEgdGFycCBjYW5vcHkgaXMgYSByaWRnZSBsaW5lIG1pbnVzIHRoZSBzYWcgYmV0d2VlbiBpdHMgcG9sZXMgbWludXMgdGhlXG4gKiBkcm9vcCBvZiBpdHMgZnJlZSBlZGdlcyAtLSBjbG90aCwgd2hlcmUgYSBzbGFiIHJlYWRzIGFzIGEgcGFpbnRlZCBib3guXG4gKi9cbmZ1bmN0aW9uIHNoZWV0KHM6IGFueSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgbng6IG51bWJlciA9IHMubngsIG56OiBudW1iZXIgPSBzLm56LCBIaDogbnVtYmVyW11bXSA9IHMuaGVpZ2h0cywgdDogbnVtYmVyID0gcy50ID8/IDAuMDEyO1xuICBjb25zdCBYID0gKGk6IG51bWJlcikgPT4gcy54MCArIChzLngxIC0gcy54MCkgKiBpIC8gbng7XG4gIC8vIGB6c2AgZ2l2ZXMgdGhlIHogU1RBVElPTlMgZXhwbGljaXRseSBpbnN0ZWFkIG9mIGRpdmlkaW5nIHowLi56MSBldmVubHkuIEEgcm9vZiB3aG9zZSBlYXZlIGFuZFxuICAvLyByYWtlIHdhbnQgYSBuYXJyb3cgcnVzdGVkIGJhbmQgbmVlZHMgcm93cyAwLjEwIG0gaW4gZnJvbSB0aGUgZWRnZSwgYW5kIHJlYWNoaW5nIHRoYXQgYnkgcmFpc2luZ1xuICAvLyBueiBhbG9uZSB3b3VsZCBtdWx0aXBseSB0aGUgd2hvbGUgZ3JpZCAtLSAxMDQgZmx1dGUgY29sdW1ucyBpcyB3aGF0IG1ha2VzIGEgcm93IGV4cGVuc2l2ZS5cbiAgY29uc3QgWlM6IG51bWJlcltdIHwgbnVsbCA9IEFycmF5LmlzQXJyYXkocy56cykgPyBzLnpzIDogbnVsbDtcbiAgY29uc3QgWiA9IChqOiBudW1iZXIpID0+IChaUyA/IFpTW2pdIDogcy56MCArIChzLnoxIC0gcy56MCkgKiBqIC8gbnopO1xuICBjb25zdCBncmlkID0gKHlPZmY6IG51bWJlciwgZmxpcDogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXY6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8PSBueDsgaSsrKSB7IHBvcy5wdXNoKFgoaSksIEhoW2pdW2ldICsgeU9mZiwgWihqKSk7IHV2LnB1c2goaSAvIG54LCBqIC8gbnopOyB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSBqICogKG54ICsgMSkgKyBpLCBiID0gYSArIDEsIGMgPSBhICsgbnggKyAxLCBkID0gYyArIDE7XG4gICAgICBpZiAoZmxpcCkgaWR4LnB1c2goYSwgYiwgYywgYiwgZCwgYyk7IGVsc2UgaWR4LnB1c2goYSwgYywgYiwgYiwgYywgZCk7XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuc2V0SW5kZXgoaWR4KTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gZztcbiAgfTtcbiAgLy8gYGhleFRvcGAgLyBgaGV4VW5kZXJgOiBhIGNvbG91ciBhdHRyaWJ1dGUgd3JpdHRlbiBwZXIgZ3JpZCwgc28gYSB0YXJwIGNhbiBiZSBibHVlIG9uIHRvcCBhbmRcbiAgLy8gb3JhbmdlIHVuZGVybmVhdGggb24gT05FIG1hdGVyaWFsIGFuZCBPTkUgZHJhdyBjYWxsLiBBIGNvbXBvbmVudCB0aW50IGNhbm5vdCBkbyBpdCAtLSB0aGUgdHdvXG4gIC8vIHN1cmZhY2VzIGFyZSBtaWxsaW1ldHJlcyBhcGFydCBpbiB5LCBzbyBubyBheGlzIGJsZW5kIHNlcGFyYXRlcyB0aGVtIC0tIGFuZCBhIHNlY29uZCBzaGVldFxuICAvLyB3b3VsZCBkb3VibGUgdGhlIHJvb2YncyB0cmlhbmdsZXMgZm9yIGEgY29sb3VyLiBPbWl0dGVkLCB0aGUgZ2VvbWV0cnkgaXMgdW50aW50ZWQgYXMgYmVmb3JlLlxuICBjb25zdCBwYWludCA9IChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgaGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQsIGMgPSBuZXcgVEhSRUUuQ29sb3IoaGV4KSwgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTsgcmV0dXJuIGc7XG4gIH07XG4gIC8vIGBoZXhHcmlkW2pdW2ldYCBpcyBhIGNvbG91ciBQRVIgVE9QLUdSSUQgVkVSVEVYLCBjb21wdXRlZCBhdCBlbWl0IHRpbWUgLS0gd2hpY2ggaXMgdGhlIG9ubHkgd2F5XG4gIC8vIHRvIHB1dCBhIG1hcmsgYXQgYSBrbm93biBwbGFjZSBvbiB0aGUgc2hlZXQuIEEgY2FudmFzIHRpbGUgcmVwZWF0cyBieSB3b3JsZCBwb3NpdGlvbiBhbmQga25vd3NcbiAgLy8gbm90aGluZyBhYm91dCB3aGVyZSB0aGUgZWF2ZSBpczsgYGhleFRvcGAgaXMgb25lIGZsYXQgdG9uZSBmb3IgdGhlIHdob2xlIHN1cmZhY2UuIFRoaXMgaXMgd2hhdFxuICAvLyBjYXJyaWVzIHRoZSBydXN0ZWQgYmFuZCBhbG9uZyB0aGUgZWF2ZSBhbmQgdGhlIHJha2VzLCBhbmQgdGhlIHN0YWluaW5nIGJlc2lkZSBlYWNoIHNoZWV0IGxhcC5cbiAgY29uc3QgcGFpbnRHcmlkID0gKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBIRzogbnVtYmVyW11bXSkgPT4ge1xuICAgIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCwgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyksIGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICBsZXQgayA9IDA7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPD0gbng7IGkrKykgeyBjLnNldEhleChIR1tqXVtpXSk7IGNvbFtrKytdID0gYy5yOyBjb2xbaysrXSA9IGMuZzsgY29sW2srK10gPSBjLmI7IH1cbiAgICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpOyByZXR1cm4gZztcbiAgfTtcbiAgY29uc3QgdG9wMCA9IGdyaWQoMCwgZmFsc2UpLCB1bmQwID0gZ3JpZCgtdCwgdHJ1ZSk7XG4gIGNvbnN0IHBhcnRzID0gcy5oZXhHcmlkICE9PSB1bmRlZmluZWRcbiAgICA/IFtwYWludEdyaWQodG9wMCwgcy5oZXhHcmlkKSwgcGFpbnQodW5kMCwgcy5oZXhVbmRlciA/PyAweGZmZmZmZildXG4gICAgOiBzLmhleFVuZGVyICE9PSB1bmRlZmluZWRcbiAgICAgID8gW3BhaW50KHRvcDAsIHMuaGV4VG9wID8/IDB4ZmZmZmZmKSwgcGFpbnQodW5kMCwgcy5oZXhVbmRlcildXG4gICAgICA6IFt0b3AwLCB1bmQwXTtcbiAgLy8gZWRnZSBzdHJpcHM6IGVhY2ggcXVhZCBmcm9tIHRoZSB0b3AgZWRnZSBkb3duIHRvIHRoZSB1bmRlcnNpZGUsIHdvdW5kIHNvIGl0cyBub3JtYWwgZmFjZXMgYG91dGBcbiAgY29uc3Qgc3RyaXAgPSAocHRzOiBudW1iZXJbXVtdW10sIG91dDogbnVtYmVyW10pID0+IHtcbiAgICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIHV2OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgW3AwLCBwMV0gb2YgcHRzKSB7XG4gICAgICBjb25zdCBxMCA9IHAwLCBxMSA9IHAxLCBxMiA9IFtwMVswXSwgcDFbMV0gLSB0LCBwMVsyXV0sIHEzID0gW3AwWzBdLCBwMFsxXSAtIHQsIHAwWzJdXTtcbiAgICAgIGNvbnN0IGUxID0gW3ExWzBdIC0gcTBbMF0sIHExWzFdIC0gcTBbMV0sIHExWzJdIC0gcTBbMl1dLCBlMiA9IFtxMlswXSAtIHEwWzBdLCBxMlsxXSAtIHEwWzFdLCBxMlsyXSAtIHEwWzJdXTtcbiAgICAgIGNvbnN0IG4gPSBbZTFbMV0gKiBlMlsyXSAtIGUxWzJdICogZTJbMV0sIGUxWzJdICogZTJbMF0gLSBlMVswXSAqIGUyWzJdLCBlMVswXSAqIGUyWzFdIC0gZTFbMV0gKiBlMlswXV07XG4gICAgICBjb25zdCB0cmkgPSBuWzBdICogb3V0WzBdICsgblsxXSAqIG91dFsxXSArIG5bMl0gKiBvdXRbMl0gPj0gMCA/IFtxMCwgcTEsIHEyLCBxMCwgcTIsIHEzXSA6IFtxMCwgcTIsIHExLCBxMCwgcTMsIHEyXTtcbiAgICAgIGZvciAoY29uc3QgcSBvZiB0cmkpIHsgcG9zLnB1c2gocVswXSwgcVsxXSwgcVsyXSk7IHV2LnB1c2goMCwgMCk7IH1cbiAgICB9XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvcywgMykpO1xuICAgIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gICAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gZztcbiAgfTtcbiAgY29uc3QgdG9wID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiBbWChpKSwgSGhbal1baV0sIFooaildO1xuICBjb25zdCBlMDogbnVtYmVyW11bXVtdID0gW10sIGUxOiBudW1iZXJbXVtdW10gPSBbXSwgZTI6IG51bWJlcltdW11bXSA9IFtdLCBlMzogbnVtYmVyW11bXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbng7IGkrKykgeyBlMC5wdXNoKFt0b3AoaSwgMCksIHRvcChpICsgMSwgMCldKTsgZTEucHVzaChbdG9wKGksIG56KSwgdG9wKGkgKyAxLCBueildKTsgfVxuICBmb3IgKGxldCBqID0gMDsgaiA8IG56OyBqKyspIHsgZTIucHVzaChbdG9wKDAsIGopLCB0b3AoMCwgaiArIDEpXSk7IGUzLnB1c2goW3RvcChueCwgaiksIHRvcChueCwgaiArIDEpXSk7IH1cbiAgY29uc3QgZWRnZXMgPSBbc3RyaXAoZTAsIFswLCAwLCAtMV0pLCBzdHJpcChlMSwgWzAsIDAsIDFdKSwgc3RyaXAoZTIsIFstMSwgMCwgMF0pLCBzdHJpcChlMywgWzEsIDAsIDBdKV07XG4gIC8vIFRoZSByaW0gaXMgdGhlIHNlYW0gYmV0d2VlbiB0aGUgdHdvIGZhY2VzLCBzbyBpdCB0YWtlcyB0aGUgVU5ERVIgY29sb3VyOiBvbiBhIGRyYXBlZCB0YXJwIHRoZVxuICAvLyBlZGdlIGlzIHdoYXQgYSB2aWV3ZXIgc3RhbmRpbmcgYmVzaWRlIGl0IGFjdHVhbGx5IHNlZXMsIGFuZCBpdCBpcyB0aGUgbGluaW5nLCBub3QgdGhlIHRvcC4gT24gYVxuICAvLyByb29mIGRlY2sgaXQgaXMgdGhlIGZsdXRlZCBlYXZlLCB3aGljaCBpcyB3aGVyZSB0aGUgcnVzdCBpcywgc28gYGhleFJpbWAgb3ZlcnJpZGVzIGl0LlxuICBjb25zdCByaW1IZXggPSBzLmhleFJpbSA/PyBzLmhleFVuZGVyO1xuICBwYXJ0cy5wdXNoKC4uLihyaW1IZXggIT09IHVuZGVmaW5lZCA/IGVkZ2VzLm1hcCgoZykgPT4gcGFpbnQoZywgcmltSGV4KSkgOiBlZGdlcykpO1xuICByZXR1cm4gbWVyZ2VHZW9zKHBhcnRzKTtcbn1cblxuLyoqXG4gKiBXRUFUSEVSRUQgUEFJTlQgb24gYSBzdGVlbCBjb250YWluZXI6IG9uZSBzZWFtbGVzcyBtdWx0aXBsaWVyIHRpbGUgY2FycnlpbmcgY2xlYW4gcGFpbnQsIHJ1c3RcbiAqIGFuZCBjaGFsa2VkIGJsb29tIHRvZ2V0aGVyLlxuICpcbiAqIFRoZSB0aHJlZSB0b25lcyBjYW5ub3QgcmlkZSBhIHBsYWluIG11bHRpcGx5IG92ZXIgdGhlIGNsZWFuIHBhaW50LCBiZWNhdXNlIGEgY2hhbGsgYmxvb20gaXNcbiAqIEJSSUdIVEVSIHRoYW4gdGhlIHBhaW50IGl0IHNpdHMgb24gaW4gdHdvIGNoYW5uZWxzIC0tIGEgbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLiBTbyB0aGUgdmVydGV4XG4gKiBjb2xvdXIgaXMgUkUtQkFTRUQgdG8gYW4gZW52ZWxvcGUgYWJvdmUgZXZlcnkgdG9uZSB0aGUgdGlsZSBoYXMgdG8gcmVhY2ggKGBvLmJhc2VgIGlzIHRoZSBjbGVhblxuICogcGFpbnQncyBvd24gbXVsdGlwbGllciBhZ2FpbnN0IHRoYXQgZW52ZWxvcGUsIGFuZCBpdCBpcyB3aGF0IG1vc3Qgb2YgdGhlIHRpbGUgaXMgZmlsbGVkIHdpdGgpLFxuICogZXhhY3RseSBhcyB0aGUgbGljaGVuLW9uLXN0b25lIHJvdXRlIGRvZXMuIEV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpbGwgaXMgZHJhd24gc291cmNlLW92ZXIgaW5cbiAqIGFic29sdXRlIG11bHRpcGxpZXIgc3BhY2UsIHNvIGEgbWFyayBtYXkgbGFuZCBlaXRoZXIgc2lkZSBvZiBjbGVhbi5cbiAqXG4gKiBPcmRlciBtYXR0ZXJzIGFuZCBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHdlYXRoZXJpbmcgYW5kIGNhbW91ZmxhZ2U6IGEgc29mdCBjbG91ZHkgZHJpZnRcbiAqIGZpcnN0LCB0aGVuIHRoZSBydXN0IGFzIGNsdXN0ZXJlZCBncmFudWxhciBwYXRjaGVzIHJhdGhlciB0aGFuIGhhcmQgYmxvdGNoZXMsIHRoZW4gdGhlIHJ1bnMgaXRcbiAqIGxlYXZlcyBCRUxPVyBpdHNlbGYsIHRoZW4gdGhlIGNoYWxrIGJsb29tcywgdGhlbiBhIGZpbmUgZ3JhaW4gb3ZlciB0aGUgbG90LlxuICovXG5mdW5jdGlvbiBwYWludFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV0sIHJ1c3QgPSBvLnJ1c3QgPz8gYmFzZSwgY2hhbGsgPSBvLmNoYWxrID8/IGJhc2U7XG4gICAgY29uc3QgcnVuID0gby5ydW4gPz8gcnVzdDtcbiAgICAvLyB3cmFwIGV2ZXJ5IG1hcmsgdGhyZWUgd2F5cyBzbyBub3RoaW5nIGlzIGN1dCBieSB0aGUgdGlsZSBlZGdlXG4gICAgY29uc3Qgd3JhcCA9IChkcmF3OiAoZHg6IG51bWJlciwgZHk6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIGRyYXcoZHgsIGR5KTtcbiAgICB9O1xuICAgIC8vIGBoYXJkYCBrZWVwcyB0aGUgbWFyayBhdCBmdWxsIGFscGhhIHRvIDAuNzIgb2YgaXRzIHJhZGl1cyBhbmQgZHJvcHMgaXQgb3ZlciB0aGUgbGFzdCBxdWFydGVyOlxuICAgIC8vIGEgcnVzdCBibG9vbSBvdmVyIGl0cyBDT01QTEVNRU5UICh0ZWFsKSBibGVuZHMgdG8gYSBuZXV0cmFsIGdyZXkgYWxvbmcgYSBzb2Z0IGVkZ2UsIGFuZCB0aGVcbiAgICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkcyB0aGF0IHJpbmcgYXMgYmFja2Ryb3AgLS0gYSByZWFsIGJsb29tIGhhcyBhIGdyYW51bGFyLCBub3QgYSBmZWF0aGVyZWQsIGVkZ2UuXG4gICAgY29uc3QgYmxvYiA9IChjOiBudW1iZXJbXSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgYTogbnVtYmVyLCByeSA9IDEsIGhhcmQgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKGMpfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcChoYXJkID8gMC43MiA6IDAuNTUsIGByZ2JhKCR7cmdiKGMpfSwke2hhcmQgPyBhIDogYSAqIDAuNDV9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IoYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogcnksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgfTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG5cbiAgICAvLyAxLiBjbG91ZHkgZHJpZnQ6IGJyb2FkLCB2ZXJ5IHNvZnQsIGJhcmVseSBvZmYgY2xlYW4gLS0gd2hhdCBzdG9wcyB0aGUgZmxhdCBhcmVhcyByZWFkaW5nIGFzIHBhaW50IGNoaXBzIG9uIHBsYXN0aWNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmRyaWZ0ID8/IDE0KTsgaSsrKSB7XG4gICAgICBjb25zdCBjID0gcm5kKCkgPCAwLjUgPyBydXN0IDogY2hhbGs7XG4gICAgICBibG9iKGMsIHJuZCgpICogcywgcm5kKCkgKiBzLCBzICogKDAuMTggKyBybmQoKSAqIDAuMzApICogKG8uZHJpZnRTY2FsZSA/PyAxKSwgMC4wNSArIHJuZCgpICogMC4wNywgMC42ICsgcm5kKCkgKiAwLjgpO1xuICAgIH1cblxuICAgIC8vIDIuIHJ1c3Q6IGNsdXN0ZXJzLCBlYWNoIGEgc29mdCBwYXRjaCB3aXRoIGdyYW51bGFyIHNwZWNrcyBvdmVyIGl0LiBCYXJlIHN0ZWVsIGNvcnJvZGVzIGluXG4gICAgLy8gICAgZmllbGRzLCBub3QgaW4gZG90czsgYSBzcGVjayBmaWVsZCB3aXRoIG5vIHBhdGNoIHVuZGVyIGl0IHJlYWRzIGFzIGNvbmZldHRpLlxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ucnVzdENsdXN0ZXJzID8/IDE2KTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjA0ICsgcm5kKCkgKiAwLjExKSAqIChvLmNsdXN0ZXJTY2FsZSA/PyAxKTtcbiAgICAgIC8vIFRoZSBjbHVzdGVyIHBhdGNoJ3MgT1BBQ0lUWS4gVGhlIHRpbGUgaXMgY29tcG9zaXRlZCBzb3VyY2Utb3ZlciBvbiB0aGUgYmFzZSBmaWxsLCBzbyBhXG4gICAgICAvLyBjbHVzdGVyIGF0IGFscGhhIDAuMzAtMC42NSBibGVuZHMgdG8gYW4gaW50ZXJtZWRpYXRlIHRvbmUgYW5kIG9ubHkgdGhlIHNwZWNrcyBvdmVyIGl0IGV2ZXJcbiAgICAgIC8vIHJlYWNoIHRoZSBhdXRob3JlZCBydXN0IC0tIHdoaWNoIGlzIHJpZ2h0IGZvciBhIHJ1c3QgQkxPT00gb24gcGFpbnRlZCBzdGVlbCBhbmQgd3JvbmcgZm9yXG4gICAgICAvLyB0aGUgYm9sZCBjaGlwcGVkIHBhdGNoZXMgYSBwZWVsaW5nIGxpZCBjYXJyaWVzLCB3aGVyZSBiYXJlIG1ldGFsIGlzIHNpbXBseSBleHBvc2VkLlxuICAgICAgLy8gRGVmYXVsdHMgYXJlIHRoZSBwcmV2aW91cyBjb25zdGFudHMgZXhhY3RseSwgc28gbm8gZXhpc3RpbmcgY2FsbGVyIGNoYW5nZXMuXG4gICAgICBibG9iKHJ1c3QsIGN4LCBjeSwgY3IsIChvLnJ1c3RBbHBoYSA/PyAwLjMwKSArIHJuZCgpICogKG8ucnVzdEFscGhhVmFyID8/IDAuMzUpLCAwLjcgKyBybmQoKSAqIDAuNiwgby5oYXJkRWRnZXMgPT09IHRydWUpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zcGVja3NQZXJDbHVzdGVyID8/IDQwKTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyO1xuICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCwgciA9IDAuOCArIHJuZCgpICogMi40O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Ioby5zcGVja1J1biA/IHJ1biA6IHJ1c3QpfSwkeyhvLnNwZWNrQWxwaGEgPz8gMC4yNSkgKyBybmQoKSAqIChvLnNwZWNrQWxwaGFWYXIgPz8gMC41KX0pYDsgICAvLyBzcGVja1J1bjogZGFya2VyIHNwZWNrcyB0aGF0IHRleHR1cmUgYW4gb3BhcXVlIGJsb29tXG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgICAvLyB0aGUgcnVuIGl0IGxlYXZlcyBiZWxvdyBpdHNlbGY6IHJ1c3QgYmxlZWRzIERPV04gYSB2ZXJ0aWNhbCBwYW5lbCBhbmQgbm93aGVyZSBlbHNlXG4gICAgICBpZiAocm5kKCkgPCAoby5ydW5DaGFuY2UgPz8gMC41NSkpIHtcbiAgICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMCwgbGVuID0gcyAqICgwLjEwICsgcm5kKCkgKiAwLjM1KTtcbiAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBjeSwgMCwgY3kgKyBsZW4pO1xuICAgICAgICBjb25zdCByYSA9IChvLnJ1bkFscGhhID8/IDAuMTYpICsgcm5kKCkgKiAwLjE4O1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke3JhfSlgKTsgaWYgKG8uaGFyZEVkZ2VzKSBnLmFkZENvbG9yU3RvcCgwLjkyLCBgcmdiYSgke3JnYihydW4pfSwke3JhfSlgKTsgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVuKX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICAgIHdyYXAoKGR4KSA9PiBjdHguZmlsbFJlY3QoY3ggKyBkeCArIChybmQoKSAtIDAuNSkgKiBjciwgY3ksIHcsIGxlbikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIGNoYWxrIGJsb29tOiBsYXJnZSwgdmVyeSBzb2Z0LCBsb3ctY29udHJhc3QuIEl0IGlzIHRoZSB0b25lIHRoZSB0aWxlIHdhcyByZS1iYXNlZCBmb3IuXG4gICAgY29uc3QgY3NjYWxlID0gby5jaGFsa1NjYWxlID8/IDEsIGNhbHBoYSA9IG8uY2hhbGtBbHBoYSA/PyAwLjM1O1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uY2hhbGtQYXRjaGVzID8/IDkpOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgY3IgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTApICogY3NjYWxlO1xuICAgICAgYmxvYihjaGFsaywgY3gsIGN5LCBjciwgY2FscGhhICsgcm5kKCkgKiAwLjMwLCAwLjUgKyBybmQoKSAqIDAuNyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI2OyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3IgKiAxLjI1O1xuICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCAqIDAuNywgciA9IDEgKyBybmQoKSAqIDM7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihjaGFsayl9LCR7MC4yICsgcm5kKCkgKiAwLjR9KWA7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNC4gdGhlIHR3byBtYXJrcyB0aGF0IG9ubHkgbWFrZSBzZW5zZSBvbmNlIHRoZSB0aWxlIGlzIEhFSUdIVC1rZXllZDogbG9uZyBydW5zIGJsZWVkaW5nIGRvd25cbiAgICAvLyAgICBmcm9tIHRoZSB0b3AgZWRnZSAodGhlIHRvcCByYWlsIGlzIHdoZXJlIHdhdGVyIHNpdHMgYW5kIHRoZSBwYWludCBnb2VzIGZpcnN0KSBhbmQgYSBkaXJ0XG4gICAgLy8gICAgYmFuZCBhbG9uZyB0aGUgYm90dG9tLiBCb3RoIGFyZSBuby1vcHMgb24gYSB3b3JsZC1zcGFjZSB0aWxlLCB3aGVyZSB0aGVyZSBpcyBubyB1cC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnRvcFN0cmVha3MgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAoby5zdHJlYWtXaWR0aCA/PyAwLjAxNCksIGxlbiA9IHMgKiAoMC4yNSArIHJuZCgpICogMC41NSk7XG4gICAgICBjb25zdCBhID0gKG8uc3RyZWFrQWxwaGEgPz8gMC4xMCkgKyBybmQoKSAqIDAuMjI7XG4gICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcChvLmhhcmRFZGdlcyA/IDAuOTIgOiAwLjI1LCBgcmdiYSgke3JnYihydXN0KX0sJHtvLmhhcmRFZGdlcyA/IGEgOiBhICogMC44fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1c3QpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIDAsIHcsIGxlbik7XG4gICAgfVxuICAgIC8vIDRiLiBBVExBUyBtYXJrcyBmb3IgYSB0aWxlIG1hcHBlZCBPTkNFIHVwIGEgcHJvcCAoY3lsVVYgd2l0aCB0aGUgdGlsZSBoZWlnaHQgPSB0aGUgcHJvcCBoZWlnaHQpOlxuICAgIC8vICAgICBgaGJhbmRzYCBwYWludHMgYSB0b25lIGFjcm9zcyBhIGhvcml6b250YWwgYmFuZCBvZiB2IChhIHJ1c3RlZCBjaGltZSwgYSB3b3JuIGhvb3AgY3Jvd24pLFxuICAgIC8vICAgICBgYmFuZFN0cmVha3NgIGhhbmdzIHJ1bnMgZnJvbSBhIGdpdmVuIHYgKHdhdGVyIHNpdHMgb24gYSByb2xsaW5nIGhvb3AgYW5kIGJsZWVkcyBkb3duIGZyb20gaXQsXG4gICAgLy8gICAgIGV4YWN0bHkgYXMgaXQgZG9lcyBmcm9tIHRoZSB0b3AgZWRnZSksIGFuZCBgc3RlbmNpbGAgYSBwYWludGVkIG1hcmsgYXQgKHUsIHYpLiB2IGlzIHVwLlxuICAgIGZvciAoY29uc3QgaGIgb2YgKG8uaGJhbmRzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgeTAgPSBzICogKDEgLSBoYi52MSksIHkxID0gcyAqICgxIC0gaGIudjApLCB0b25lID0gaGIudG9uZSA/PyBydXN0O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHRvbmUpfSwke2hiLmFscGhhID8/IDAuOH0pYDsgY3R4LmZpbGxSZWN0KDAsIHkwLCBzLCB5MSAtIHkwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGhiLnNwZWNrcyA/PyAwKTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSB5MCArIHJuZCgpICogKHkxIC0geTApLCByID0gMC44ICsgcm5kKCkgKiAyLjI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihybmQoKSA8IDAuNSA/IHJ1biA6IGJhc2UpfSwkezAuMiArIHJuZCgpICogMC41fSlgO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgYnMgb2YgKG8uYmFuZFN0cmVha3MgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCB5MCA9IHMgKiAoMSAtIGJzLnYpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYnMuY291bnQgPz8gMTIpOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAoYnMud2lkdGggPz8gMC4wMTIpLCBsZW4gPSBzICogKChicy5sZW4gPz8gMC4xMikgKyBybmQoKSAqIChicy5sZW5WYXIgPz8gMC4yNSkpO1xuICAgICAgICBjb25zdCBhID0gKGJzLmFscGhhID8/IDAuMTQpICsgcm5kKCkgKiAwLjIyO1xuICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkwLCAwLCB5MCArIGxlbik7XG4gICAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1bil9LCR7YX0pYCk7IGcuYWRkQ29sb3JTdG9wKG8uaGFyZEVkZ2VzID8gMC45MiA6IDAuMywgYHJnYmEoJHtyZ2IocnVzdCl9LCR7by5oYXJkRWRnZXMgPyBhIDogYSAqIDAuOH0pYCk7XG4gICAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1c3QpfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5MCAtIDIsIHcsIGxlbik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvLnN0ZW5jaWwpIHtcbiAgICAgIGNvbnN0IHN0ID0gby5zdGVuY2lsLCBweCA9IHMgKiAoc3Quc2l6ZSA/PyAwLjA2KTtcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgJHtweH1weCBzYW5zLXNlcmlmYDsgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInOyBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Ioc3QudG9uZSA/PyBjaGFsayl9LCR7c3QuYWxwaGEgPz8gMC44NX0pYDtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxUZXh0KHN0LnRleHQsIHMgKiAoc3QudSA/PyAwLjUpICsgZHgsIHMgKiAoMSAtIChzdC52ID8/IDAuNSkpKTtcbiAgICB9XG4gICAgaWYgKG8uZ3JvdW5kQmFuZCkge1xuICAgICAgY29uc3QgYiA9IG8uZ3JvdW5kQmFuZCwgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSAoby5ncm91bmRIZWlnaHQgPz8gMC4yMikpKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1bil9LCR7Yn0pYCk7IGcuYWRkQ29sb3JTdG9wKDAuNDUsIGByZ2JhKCR7cmdiKHJ1bil9LCR7YiAqIDAuNH0pYCk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydW4pfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9XG5cbiAgICAvLyA1LiBmaW5lIGdyYWluOiB0aGUgdG9vdGggb2YgYSBicnVzaC1yb2xsZWQgaW5kdXN0cmlhbCBwYWludC4gTXVsdGlwbHksIHNvIGl0IG9ubHkgZGFya2Vucy5cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyYWluID8/IDE4MDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAwLjUgKyBybmQoKSAqIDEuMywgYSA9IDAuMDMgKyBybmQoKSAqIDAuMDc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMTUwLDE0MCwxMzAsJHthfSlgO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgU1dFUFQgcG9seWxpbmUgdHViZTogT05FIHJpbmcgb2YgYHNlZ2AgdmVydGljZXMgcGVyIHBvaW50LCBtaXRyZWQgYXQgZXZlcnkgYmVuZCwgaW5kZXhlZCBhbmRcbiAqIHNtb290aC1zaGFkZWQuIFRoaXMgaXMgbm90IHdoYXQgYHR1YmVgIGRvZXMsIGFuZCB0aGUgZGlmZmVyZW5jZSBpcyBhIHZpc2libGUgZGVmZWN0IHJhdGhlciB0aGFuIGFcbiAqIHJlZmluZW1lbnQuIGB0dWJlYCBjaGFpbnMgYSBzZXBhcmF0ZSBjeWxpbmRlciBwZXIgc2VnbWVudCBhbmQgRVhURU5EUyBlYWNoIG9uZSBieSBgciAqIDEuMmAgc28gdGhlXG4gKiBqb2ludHMgY2xvc2UgLS0gd2hpY2ggaXMgZmluZSB3aGlsZSB0aGUgc2VnbWVudHMgYXJlIGxvbmcsIGFuZCBjYXRhc3Ryb3BoaWMgb24gYSB0aWdodCBjdXJ2ZTogYVxuICogMC4xMiBtIGNvcm5lciByYWRpdXMgc2FtcGxlZCBpbiBmaXZlIHN0ZXBzIGhhcyBhIDAuMDM4IG0gY2hvcmQgYWdhaW5zdCBhIDAuMDI1IG0gb3ZlcmxhcCwgc29cbiAqIGNvbnNlY3V0aXZlIGN5bGluZGVycyBvdmVyc2hvb3QgZWFjaCBvdGhlciBieSB0d28gdGhpcmRzIG9mIHRoZWlyIGxlbmd0aCBhbmQgdGhlIGJlbmQgcmVuZGVycyBhcyBhXG4gKiBjcnVtcGxlZCBhY2NvcmRpb24gb2YgcGxlYXRzLiBUaGUgY3Jvd2QgYmFycmllcidzIHJvdW5kZWQgdG9wIGNvcm5lcnMgc2hpcHBlZCB0aGF0IHdheS5cbiAqXG4gKiBUaGUgZnJhbWUgaXMgcm90YXRpb24tbWluaW1pc2luZyAocGFyYWxsZWwgdHJhbnNwb3J0KSwgbm90IEZyZW5ldDogYSBGcmVuZXQgZnJhbWUgZmxpcHMgaXRzIG5vcm1hbFxuICogdGhyb3VnaCBhbiBpbmZsZWN0aW9uIGFuZCB0d2lzdHMgdGhlIHR1YmUsIHdoaWNoIGEgVVYgb3IgYSB2ZXJ0ZXggY29sb3VyIHRoZW4gc2hvd3MgYXMgYSBzdHJpcGVcbiAqIHNwaXJhbGxpbmcgYWxvbmcgYSByYWlsIHRoYXQgaXMgbWVhbnQgdG8gYmUgc3RyYWlnaHQuIEludGVyaW9yIHBvaW50cyByaW5nIG9uIHRoZSBCSVNFQ1RPUiBvZiB0aGVcbiAqIHR3byBhZGphY2VudCB0YW5nZW50cywgd2hpY2ggaXMgdGhlIG1pdHJlIGEgcmVhbCBiZW50IHR1YmUgaGFzLlxuICovXG5mdW5jdGlvbiBzd2VlcFR1YmUocHRzOiBudW1iZXJbXVtdLCByOiBudW1iZXIsIHNlZyA9IDEwLCBoZXg/OiBudW1iZXIsIGNhcCA9IHRydWUpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IFAgPSBwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMyhwWzBdLCBwWzFdLCBwWzJdKSk7XG4gIC8vIGRyb3AgcmVwZWF0ZWQgcG9pbnRzOiBhIHplcm8tbGVuZ3RoIHNlZ21lbnQgaGFzIG5vIHRhbmdlbnQsIGFuZCBvbmUgZHVwbGljYXRlIGlzIGVub3VnaCB0b1xuICAvLyBwdXQgYSBOYU4gdGhyb3VnaCB0aGUgd2hvbGUgdHJhbnNwb3J0IGNoYWluXG4gIGZvciAobGV0IGkgPSBQLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIGlmIChQW2ldLmRpc3RhbmNlVG8oUFtpIC0gMV0pIDwgMWUtNykgUC5zcGxpY2UoaSwgMSk7XG4gIGlmIChQLmxlbmd0aCA8IDIpIHJldHVybiBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgY29uc3QgbiA9IFAubGVuZ3RoO1xuICBjb25zdCBzZWdEaXI6IFRIUkVFLlZlY3RvcjNbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG4gLSAxOyBpKyspIHNlZ0Rpci5wdXNoKFBbaSArIDFdLmNsb25lKCkuc3ViKFBbaV0pLm5vcm1hbGl6ZSgpKTtcbiAgLy8gcGVyLXBvaW50IHRhbmdlbnQ6IHRoZSBzZWdtZW50IGRpcmVjdGlvbiBhdCB0aGUgZW5kcywgdGhlIGJpc2VjdG9yIGJldHdlZW4gdHdvIHNlZ21lbnRzIGluc2lkZVxuICBjb25zdCBUID0gUC5tYXAoKF8sIGkpID0+IGkgPT09IDAgPyBzZWdEaXJbMF0uY2xvbmUoKVxuICAgIDogaSA9PT0gbiAtIDEgPyBzZWdEaXJbbiAtIDJdLmNsb25lKClcbiAgICA6IHNlZ0RpcltpIC0gMV0uY2xvbmUoKS5hZGQoc2VnRGlyW2ldKS5ub3JtYWxpemUoKSk7XG4gIC8vIHNlZWQgYSBub3JtYWwgdGhhdCBpcyBub3QgcGFyYWxsZWwgdG8gdGhlIGZpcnN0IHRhbmdlbnQsIHRoZW4gdHJhbnNwb3J0IGl0IHBvaW50IHRvIHBvaW50XG4gIGxldCBOID0gTWF0aC5hYnMoVFswXS55KSA+IDAuOSA/IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApIDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCk7XG4gIE4uc3ViKFRbMF0uY2xvbmUoKS5tdWx0aXBseVNjYWxhcihOLmRvdChUWzBdKSkpLm5vcm1hbGl6ZSgpO1xuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBpZiAoaSA+IDApIHtcbiAgICAgIC8vIHJvdGF0ZSB0aGUgY2FycmllZCBub3JtYWwgYnkgdGhlIHNhbWUgcm90YXRpb24gdGhhdCB0YWtlcyB0aGUgcHJldmlvdXMgdGFuZ2VudCB0byB0aGlzIG9uZVxuICAgICAgY29uc3QgcSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKFRbaSAtIDFdLCBUW2ldKTtcbiAgICAgIE4uYXBwbHlRdWF0ZXJuaW9uKHEpO1xuICAgICAgTi5zdWIoVFtpXS5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKE4uZG90KFRbaV0pKSkubm9ybWFsaXplKCk7XG4gICAgfVxuICAgIGNvbnN0IEIgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNyb3NzVmVjdG9ycyhUW2ldLCBOKS5ub3JtYWxpemUoKTtcbiAgICAvLyBhIG1pdHJlZCByaW5nIGlzIGFuIEVMTElQU0UgaW4gaXRzIG93biBwbGFuZTogd2lkZW4gaXQgYnkgMS9jb3MoaGFsZi1hbmdsZSkgYWxvbmcgdGhlIGJlbmQgc29cbiAgICAvLyB0aGUgc3dlcHQgc2VjdGlvbiBzdGF5cyBjaXJjdWxhciB0aHJvdWdoIHRoZSBjb3JuZXIgcmF0aGVyIHRoYW4gcGluY2hpbmcgdG8gYSB3YWlzdFxuICAgIGNvbnN0IGsgPSBpID4gMCAmJiBpIDwgbiAtIDEgPyAxIC8gTWF0aC5tYXgoMC41LCBzZWdEaXJbaSAtIDFdLmRvdChUW2ldKSkgOiAxO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IHRoID0gaiAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgICAgY29uc3QgYyA9IE1hdGguY29zKHRoKSwgcyA9IE1hdGguc2luKHRoKTtcbiAgICAgIHBvcy5wdXNoKFBbaV0ueCArIChOLnggKiBjICsgQi54ICogcyAqIGspICogciwgUFtpXS55ICsgKE4ueSAqIGMgKyBCLnkgKiBzICogaykgKiByLCBQW2ldLnogKyAoTi56ICogYyArIEIueiAqIHMgKiBrKSAqIHIpO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG4gLSAxOyBpKyspIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAvLyAoYSwgYzIsIGIpLCBOT1QgKGEsIGIsIGMyKS4gVGhlIHJpbmcgcnVucyBOIC0+IEIgd2l0aCBCID0gVCB4IE4sIHNvIHdpbmRpbmcgYWxvbmcgdGhlIHR1YmVcbiAgICAvLyBmaXJzdCBhbmQgYXJvdW5kIGl0IHNlY29uZCBnaXZlcyBhIGZhY2Ugbm9ybWFsIG9mIFQgeCBCID0gLU46IGV2ZXJ5IHdhbGwgdHJpYW5nbGUgZmFjZXMgSU5XQVJELlxuICAgIC8vIEJhY2tmYWNlIGN1bGxpbmcgdGhlbiBoaWRlcyB0aGUgbmVhciB3YWxsIGFuZCBzaG93cyB0aGUgRkFSIG9uZSwgd2hpY2ggZm9yIGEgbGl0IGdyZXkgdHViZSBsb29rc1xuICAgIC8vIGFsbW9zdCByaWdodCAtLSBhbmQgd3JpdGVzIGl0cyBkZXB0aCBvbiB0aGUgZmFyIHNpZGUsIHNvIGFueXRoaW5nIHBhc3NpbmcgdGhyb3VnaCB0aGUgdHViZSBkcmF3c1xuICAgIC8vIGluIGZyb250IG9mIGl0LiBUaGUgZm9vdCBzdHVicyBzdG9vZCBwcm91ZGx5IHRocm91Z2ggdGhlIGJvdHRvbSByYWlsIGJlY2F1c2Ugb2YgdGhpcywgYW5kIGl0XG4gICAgLy8gcmVhZCBhcyBhIGdlb21ldHJ5IGVycm9yIGluIHRoZSBzdHViIHJhdGhlciB0aGFuIGEgd2luZGluZyBlcnJvciBpbiB0aGUgc3dlZXAuXG4gICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMyID0gKGkgKyAxKSAqIHNlZyArIChqICsgMSkgJSBzZWcsIGQgPSBpICogc2VnICsgKGogKyAxKSAlIHNlZztcbiAgICBpZHgucHVzaChhLCBjMiwgYiwgYSwgZCwgYzIpO1xuICB9XG4gIGlmIChjYXApIHtcbiAgICAvLyBGbGF0IGVuZCBkaXNjcywgb24gdGhlaXIgT1dOIENPUFkgb2YgdGhlIHJpbSB2ZXJ0aWNlcy4gRmFubmluZyB0aGVtIG9mZiB0aGUgc2lkZSB3YWxsJ3MgcmluZ1xuICAgIC8vIHNoYXJlcyB0aG9zZSB2ZXJ0aWNlcywgYW5kIGBjb21wdXRlVmVydGV4Tm9ybWFsc2AgdGhlbiBhdmVyYWdlcyB0aGUgZGlzYydzIGF4aWFsIG5vcm1hbCBpbnRvXG4gICAgLy8gdGhlIHdhbGwncyByYWRpYWwgb25lIC0tIHdoaWNoIGRvZXMgbm90IHNoYWRlIGEgc2xpZ2h0bHkgd3JvbmcgcmltLCBpdCB0aWx0cyB0aGUgbm9ybWFsIGF0IEJPVEhcbiAgICAvLyBlbmRzIG9mIGEgdHdvLXBvaW50IHR1YmUgYW5kIHNvIHNoYWRlcyB0aGUgV0hPTEUgdHViZSB3cm9uZy4gVGhlIGZvb3Qgc3R1YnMgcmVuZGVyZWQgYXMgZ2xhc3NcbiAgICAvLyB0ZXN0IHR1YmVzIHdpdGggYSBicmlnaHQgYmFuZCB1bmRlciB0aGUgcmFpbCwgYW5kIHRoZSBiYW5kIHJlYWQgYXMgYSBzZXBhcmF0ZSBvYmplY3Qgc2l0dGluZyBvblxuICAgIC8vIGl0LiBTYW1lIGZhdWx0LCBzYW1lIGZpeCwgYXMgdGhlIHNoYXJwLWNvcm5lciBzcGxpdCBpbiBgbGF0aGVgLlxuICAgIGZvciAoY29uc3QgW3JpbmcsIGF0LCBmbGlwXSBvZiBbWzAsIFBbMF0sIHRydWVdLCBbbiAtIDEsIFBbbiAtIDFdLCBmYWxzZV1dIGFzIFtudW1iZXIsIFRIUkVFLlZlY3RvcjMsIGJvb2xlYW5dW10pIHtcbiAgICAgIGNvbnN0IGJhc2UgPSBwb3MubGVuZ3RoIC8gMztcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHsgY29uc3QgayA9IChyaW5nICogc2VnICsgaikgKiAzOyBwb3MucHVzaChwb3Nba10sIHBvc1trICsgMV0sIHBvc1trICsgMl0pOyB9XG4gICAgICBjb25zdCBjaSA9IHBvcy5sZW5ndGggLyAzOyBwb3MucHVzaChhdC54LCBhdC55LCBhdC56KTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgICAgY29uc3QgYSA9IGJhc2UgKyBqLCBiID0gYmFzZSArIChqICsgMSkgJSBzZWc7XG4gICAgICAgIGlmIChmbGlwKSBpZHgucHVzaChjaSwgYiwgYSk7IGVsc2UgaWR4LnB1c2goY2ksIGEsIGIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgocG9zLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5zZXRJbmRleChpZHgpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IGcgOiB0aW50R2VvKGcsIGhleCk7XG59XG5cbi8qKlxuICogRlJPTlQtQVRMQVMgVVZzOiBldmVyeSB2ZXJ0ZXggd2hvc2Ugbm9ybWFsIGZhY2VzICtaIGFuZCB0aGF0IGxpZXMgaW5zaWRlIHRoZSBhdGxhcydzIHdvcmxkXG4gKiByZWN0YW5nbGUgdGFrZXMgYSBQTEFOQVIgKHgsIHkpIFVWIGludG8gYSBiYWtlZCBmcm9udC1lbGV2YXRpb24gaW1hZ2UsIGFuZCBldmVyeSBvdGhlciB2ZXJ0ZXggaXNcbiAqIHBpbm5lZCB0byBvbmUgY2xlYW4gdGV4ZWwgb2YgaXQuIEEgd2FsbC1tb3VudGVkIGJveCBzZWVuIGZyb20gdGhlIGZyb250IElTIGl0cyBlbGV2YXRpb24sIHNvIHRoZVxuICogcGxhdGUncyBvd24gcHJpbnRlZCBsYWJlbHMsIHNjcmV3IGhlYWRzLCBnYXNrZXQgbGluZSBhbmQgcnVzdCBsYW5kIGV4YWN0bHkgd2hlcmUgdGhlIGdlb21ldHJ5XG4gKiBwdXRzIHRoZW0sIG9uIG9uZSBtYXRlcmlhbC4gYGJhc2VgIG92ZXJyaWRlcyB0aGUgZnJvbnQgdmVydGljZXMnIGNvbG91ciwgYmVjYXVzZSB0aGUgYXRsYXMgaXMgYVxuICogcmF0aW8gb3ZlciBvbmUgcmVmZXJlbmNlIHRvbmUgYW5kIHRoZSBwZXItcGFydCB0aW50cyBvbmx5IGJlbG9uZyBvbiB0aGUgZmFjZXMgdGhlIGF0bGFzIGRvZXMgbm90XG4gKiByZWFjaC4gYHlNaW5gIGtlZXBzIHBhcnRzIGhhbmdpbmcgYmVsb3cgdGhlIGF0bGFzIChhIGNvbmR1aXQgc3R1Yikgb3V0IG9mIGl0LlxuICovXG5mdW5jdGlvbiBmcm9udEF0bGFzVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgYTogYW55KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGNvbnN0IGNvbCA9IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlIHwgbnVsbDtcbiAgY29uc3QgYmFzZSA9IGEuYmFzZSAhPT0gdW5kZWZpbmVkID8gbmV3IFRIUkVFLkNvbG9yKGEuYmFzZSkgOiBudWxsO1xuICBjb25zdCBtaW5OeiA9IGEubWluTnogPz8gMC43O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHggPSBwLmdldFgoaSksIHkgPSBwLmdldFkoaSk7XG4gICAgLy8gMWUtNCB0b2xlcmFuY2U6IGEgY2FwIHZlcnRleCBzaXR0aW5nIGV4YWN0bHkgb24gdGhlIGF0bGFzIGJvdW5kYXJ5ICh0aGUgc3BlZWQgc2lnbidzIGRpc2MgYXQgeCA9IC1hdy8yKVxuICAgIC8vIGZhaWxlZCB0aGUgdGVzdCBieSBmbG9hdCBlcnJvciwgd2FzIHBpbm5lZCwgYW5kIGl0cyB0aHJlZSB0cmlhbmdsZXMgc21lYXJlZCB0aGUgd2hvbGUgYXRsYXMgcm93IGRvd25cbiAgICAvLyB0aGUgZGlzYydzIGVkZ2UgKDIwMjYtMDktMDMpLlxuICAgIGNvbnN0IEUgPSAxZS00O1xuICAgIGNvbnN0IGZyb250ID0gbnJtLmdldFooaSkgPiBtaW5OeiAmJiB4ID49IGEueDAgLSBFICYmIHggPD0gYS54MSArIEUgJiYgeSA+PSAoYS55TWluID8/IGEueTEpIC0gRSAmJiB5IDw9IGEueTAgKyBFO1xuICAgIGlmIChmcm9udCkge1xuICAgICAgdXZbaSAqIDJdID0gKHggLSBhLngwKSAvIChhLngxIC0gYS54MCk7XG4gICAgICB1dltpICogMiArIDFdID0gKHkgLSBhLnkxKSAvIChhLnkwIC0gYS55MSk7XG4gICAgICBpZiAoYmFzZSAmJiBjb2wpIGNvbC5zZXRYWVooaSwgYmFzZS5yLCBiYXNlLmcsIGJhc2UuYik7XG4gICAgfSBlbHNlIHsgdXZbaSAqIDJdID0gYS5waW5bMF07IHV2W2kgKiAyICsgMV0gPSBhLnBpblsxXTsgfVxuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sKSBjb2wubmVlZHNVcGRhdGUgPSB0cnVlO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZmVuY2UgaGVscGVycyAqL1xuXG4vKiogUGFuZWwgVVZzOiB1IGFsb25nIHdvcmxkIFggb3ZlciBgc2NhbGVgIG1ldHJlcywgdiB3b3JsZCBIRUlHSFQgb3ZlciB0aGUgc2FtZSwgcmVnYXJkbGVzcyBvZiB0aGVcbiAqICBmYWNlIG5vcm1hbC4gT24gYSB0aGluIHNsYWIgdGhpcyBtZWFucyB0aGUgZnJvbnQgYW5kIGJhY2sgZmFjZXMgc2hhcmUgdGhlIHNhbWUgdGlsZSBwbGFjZW1lbnRcbiAqICBhbmQgdGhlIGVkZ2VzIHRha2UgYSBzbGl2ZXIgb2YgaXQ7IGEgZ3JpbWUgd2FzaCB0aGF0IGtleXMgb24gdiB0aGVuIGxhbmRzIGF0IHRoZSBzYW1lIGhlaWdodCBvblxuICogIGV2ZXJ5IGZhY2UsIHdoaWNoIGlzIHdoYXQgcmFpbiBhbmQgYWxnYWUgZG8uICovXG5mdW5jdGlvbiBwYW5lbFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIsIHJvdCA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgLy8gYHJvdGAgc3dhcHMgdGhlIGF4ZXMgc28gYSB0aWxlIG9mIFZFUlRJQ0FMIHN0cmlwcyByZWFkcyBob3Jpem9udGFsIC0tIHRoZSB3b3ZlbiBiYW5kcyBvZiBhXG4gIC8vIGJhbWJvbyBwYW5lbCBhZ2FpbnN0IGl0cyB2ZXJ0aWNhbCBtdWxsaW9ucywgb25lIHRpbGUsIG9uZSBtYXRlcmlhbC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB1ID0gcm90ID8gcC5nZXRZKGkpIDogcC5nZXRYKGkpLCB2ID0gcm90ID8gcC5nZXRYKGkpIDogcC5nZXRZKGkpO1xuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEEgc3F1YXJlIHB5cmFtaWQgU1BJS0U6IGJhc2UgdyB4IHcgYXQgYGF0YCwgYXBleCBoIGFib3ZlLiBBIHBpY2tldCdzIHNwZWFyIHBvaW50LCBhIHBpZXIgY2FwLiAqL1xuZnVuY3Rpb24gc3Bpa2UoYXQ6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkodyAvIE1hdGguU1FSVDIsIGgsIDQsIDEsIGZhbHNlKTtcbiAgZy5yb3RhdGVZKE1hdGguUEkgLyA0KTtcbiAgZy50cmFuc2xhdGUoYXRbMF0sIGF0WzFdICsgaCAvIDIsIGF0WzJdKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBHUklNRSB0aWxlOiBhIG11bHRpcGxpZXIgb2Ygd2hpdGUgd2l0aCAoYSkgYSBkYXJrIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLFxuICogKGIpIHZlcnRpY2FsIHJhaW4gc3RyZWFrcyBmcm9tIHRoZSB0b3AsIChjKSBzb2Z0IGRhcmsgYmxvdGNoZXMsIChjMikgYnJvYWQgQ0xPVUQgbW90dGxpbmcsXG4gKiAoZCkgc3dlcHQgdHlyZSBTQ1VGRlMgb3ZlciBhXG4gKiBoZWlnaHQgYmFuZCwgKGUpIHZlcnRpY2FsIGZvcm0gU0VBTVMsIChmKSBQSU5IT0xFUyAtLSB0aGUgYWlyIGJ1YmJsZXMgb2YgYSBwcmVjYXN0IGZhY2UsIChnKVxuICogb3B0aW9uYWwgZ3JlZW4gbW9zcy9hbGdhZSBibG9icyBjb25jZW50cmF0ZWQgaW4gdGhlIGJvdHRvbSBiYW5kLCBhbmQgKGgpIGZpbmUgZ3JhaW4uIChkKSwgKGUpXG4gKiBhbmQgKGYpIGFyZSBvZmYgdW5sZXNzIGFza2VkIGZvciwgc28gbm90aGluZyBhbHJlYWR5IGVtaXR0ZWQgY2hhbmdlcy4gRXZlcnkgY29sb3VyIGlzIGEgZnJhY3Rpb24gb2YgdGhlXG4gKiBtYXRlcmlhbCdzIG1lYXN1cmVkIGFsYmVkbywgYW5kIHRoZSBkYXJrZXN0IGNvcmUgaXMgY2xhbXBlZCBzbyBub3RoaW5nIG9uIGEgd2hpdGUgb3IgY3JlYW1cbiAqIHN1cmZhY2UgZHJvcHMgdG93YXJkIHRoZSBob2xlIGdhdGUncyBsdW1hIDU4LlxuICovXG5mdW5jdGlvbiBncmltZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3Qgd2FzaCA9IG8ud2FzaCA/PyBbMC42MiwgMC42MiwgMC41OF0sIHdhc2hBID0gby53YXNoQWxwaGEgPz8gMC43LCBjb3YgPSBvLmNvdmVyYWdlID8/IDAuMztcbiAgICAvLyBgYmFzZWAgaXMgdGhlIHRvbmUgdGhlIFVOLWdyaW1lZCBwYXJ0IG9mIHRoZSB0aWxlIGNhcnJpZXMsIGRlZmF1bHRpbmcgdG8gd2hpdGUgLS0gaS5lLiB0b1xuICAgIC8vIFwibGVhdmUgdGhlIHZlcnRleCBjb2xvdXIgYWxvbmVcIiwgd2hpY2ggaXMgZXZlcnkgZXhpc3RpbmcgY2FsbGVyLiBJdCBleGlzdHMgZm9yIEVOVkVMT1BFXG4gICAgLy8gUkUtQkFTSU5HOiBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbiwgc28gYSBwYXJ0IHRoYXQgbXVzdCByZWFkIGNsZWFuIG9yYW5nZSBpbiBvbmUgcGxhY2UgYW5kXG4gICAgLy8gZ3JleSByb2FkIGdyaW1lIGluIGFub3RoZXIgY2Fubm90IGRvIGl0IGZyb20gYSBzaW5nbGUgdmVydGV4IGNvbG91ciwgYmVjYXVzZSB0aGUgZ3JpbWUgaXNcbiAgICAvLyBISUdIRVIgaW4gYmx1ZSB0aGFuIHRoZSBvcmFuZ2UgaXMuIFRoZSB2ZXJ0ZXggY29sb3VyIGJlY29tZXMgdGhlIHBlci1jaGFubmVsIG1heGltdW0gb2YgYm90aFxuICAgIC8vIGFuZCB0aGlzIGZpbGwgcGFpbnRzIHRoZSBjbGVhbiB0b25lIGJhY2sgb3V0IG9mIGl0LlxuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgLy8gcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAyNik7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMiwgbGVuID0gcyAqICgwLjE1ICsgcm5kKCkgKiAwLjYpLCBhID0gMC4wNSArIHJuZCgpICogMC4xMjtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgY3R4LmZpbGxSZWN0KHgsIDAsIHcsIGxlbik7IGN0eC5maWxsUmVjdCh4IC0gcywgMCwgdywgbGVuKTtcbiAgICB9XG4gICAgLy8gZ3JvdW5kIHdhc2guIGB3YXNoRmxhdGAgbWFrZXMgaXQgVU5JRk9STSBpbnN0ZWFkIG9mIGEgYm90dG9tLXVwIGdyYWRpZW50LCB3aGljaCBpcyB3aGF0IGFcbiAgICAvLyBob3Jpem9udGFsIHNsYWIgbmVlZHM6IGEgZ3JhZGllbnQga2V5ZWQgdG8gdGhlIHRpbGUncyB2IG1hcHMgc3RyYWlnaHQgYWNyb3NzIGEgZmxhdCBmYWNlIGFuZFxuICAgIC8vIHNwbGl0cyBpdCBpbnRvIGEgcGFsZSBoYWxmIGFuZCBhIGRhcmsgaGFsZiB3aXRoIGEgaGFyZCBlZGdlIGJldHdlZW4gdGhlbS4gRGVmYXVsdGVkIG9mZiwgc29cbiAgICAvLyBldmVyeSBwcm9wIHRoYXQgZG9lcyBub3QgYXNrIGZvciBpdCBpcyB1bmNoYW5nZWQuXG4gICAgaWYgKG8ud2FzaEZsYXQpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdikpO1xuICAgICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEF9KWApOyBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBICogMC40NX0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9XG4gICAgLy8gYmxvdGNoZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmJsb3RjaGVzID8/IDQwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAxLjYpICogcywgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA2LCBhID0gMC4wOCArIHJuZCgpICogMC4zO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gUlVCUzogbmVhci1ibGFjayB0eXJlIHNtZWFycyBsb3cgb24gdGhlIHRpbGUuIERpc3RpbmN0IGZyb20gYGJsb3RjaGVzYCwgd2hpY2ggZGFya2VuIHRvd2FyZFxuICAgIC8vIHRoZSBncmltZSB0b25lOiBhIHR5cmUgcnViIGlzIGEgZGlmZmVyZW50IGNvbG91ciBhbmQgYSBkaWZmZXJlbnQgc2hhcGUgLS0gbG9uZywgbG93LCBhbmQgbXVjaFxuICAgIC8vIGRhcmtlciB0aGFuIGFueXRoaW5nIHdlYXRoZXIgZG9lcy4gRGVmYXVsdCAwLCBzbyBubyBleGlzdGluZyBjYWxsZXIgY2hhbmdlcy5cbiAgICBpZiAoby5ydWJzKSB7XG4gICAgICBjb25zdCBydWIgPSBvLnJ1YiA/PyBbMC4zMCwgMC4yOCwgMC4zMF07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8ucnViczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzICogKDAuNjAgKyBybmQoKSAqIDAuMzgpO1xuICAgICAgICBjb25zdCB3ID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjIyKSwgaCA9IHMgKiAoMC4wMDYgKyBybmQoKSAqIDAuMDMwKSwgYSA9IDAuMjAgKyBybmQoKSAqIDAuNDU7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHggLSB3IC8gMiwgMCwgeCArIHcgLyAyLCAwKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1Yil9LDApYCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7cmdiKHJ1Yil9LCR7YX0pYCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydWIpfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggLSB3IC8gMiArIGR4LCB5IC0gaCAvIDIsIHcsIGgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBTQ1VGRlM6IHNvZnQgcGF0Y2hlcyB3aGVyZSB0aGUgd2FzaCBpcyBlcmFzZWQgYmFjayB0b3dhcmQgd2hpdGUuIFRoZSB0aWxlIGlzIGNvbXBvc2l0ZWRcbiAgICAvLyBtdWx0aXBseS1vbi13aGl0ZSwgc28gcGFpbnRpbmcgd2hpdGUgc291cmNlLW92ZXIgaXMgcGFpbnRpbmcgXCJub3QgZGFya2VuZWRcIiAtLSB3aGljaCBpcyB0aGVcbiAgICAvLyBvbmx5IHdheSBhIG11bHRpcGx5IHRpbGUgY2FuIHB1dCBQQUxFIHdlYXIgb24gYSBkYXJrIGJhc2Ugd2l0aG91dCByZS1iYXNpbmcgdGhlIGVudmVsb3BlXG4gICAgLy8gdHdpY2UuIERlZmF1bHRlZCB0byBub25lLlxuICAgIGlmIChvLnNjdWZmcykge1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8uc2N1ZmZzOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNSArIHJuZCgpICogKG8uc2N1ZmZTY2FsZSA/PyAwLjE0KSk7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjU1LDI1NSwyNTUsJHtvLnNjdWZmQWxwaGEgPz8gMC41NX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICB9XG5cbiAgICAvLyBDTE9VRFM6IGJyb2FkLCB2ZXJ5IHNvZnQgcGF0Y2hlcyBvdmVyIHRoZSBXSE9MRSB0aWxlLiBBIGNhc3QgZmFjZSBpcyBtb3R0bGVkIGF0IHRoZSBzY2FsZSBvZlxuICAgIC8vIHRlbnMgb2YgY2VudGltZXRyZXMgLS0gcG91ciBsaW5lcywgZGFtcCwgdGhlIG1vdWxkJ3Mgb3duIGhpc3RvcnkgLS0gYW5kIHRoYXQgbG93IGZyZXF1ZW5jeSBpc1xuICAgIC8vIG1vc3Qgb2Ygd2hhdCBzZXBhcmF0ZXMgYSByZW5kZXJlZCBzdGFuZGFyZCBkZXZpYXRpb24gb2YgNiBmcm9tIHRoZSBwbGF0ZSdzIDEyLiBTbWFsbCBtYXJrc1xuICAgIC8vIGNhbm5vdCBzdXBwbHkgaXQ6IGF0IHByb3AgZGlzdGFuY2UgYSB0aG91c2FuZCBvZiB0aGVtIGF2ZXJhZ2UgYmFjayBvdXQgdG8gb25lIGZsYXQgdG9uZS5cbiAgICAvLyBLZWVwIHRoZW0gU01BTEwgcmVsYXRpdmUgdG8gdGhlIHRpbGUsIHRob3VnaC4gQSB0aWxlIHRoYXQgcmVwZWF0cyB0d28gb3IgdGhyZWUgdGltZXMgYWNyb3NzIGFcbiAgICAvLyBwcm9wIHJlcGVhdHMgaXRzIGNsb3VkcyB0b28sIGFuZCBhIGNsb3VkIHRoZSBzaXplIG9mIGEgdGhpcmQgb2YgdGhlIHRpbGUgdGhlbiByZWFkcyBhc1xuICAgIC8vIGNhbW91ZmxhZ2Ugd2l0aCBhIHZpc2libGUgc2VhbSAtLSB0aGUgc2FtZSBmYWlsdXJlIGFzIGhhcmQgYmxvdGNoZXMsIG9uZSBvY3RhdmUgbG93ZXIuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgdiA9IG8uY2xvdWQgPz8gWzAuODYsIDAuODYsIDAuODRdO1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoby5jbG91ZFIgPz8gMC4xNikgKiAoMC40ICsgcm5kKCkgKiAxLjQpLCBhID0gKG8uY2xvdWRBbHBoYSA/PyAwLjEyKSAqICgwLjQgKyBybmQoKSk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gU0NVRkYgYXJjczogdGhlIHR5cmUgYW5kIGJ1bXBlciBtYXJrcyBhIHJvYWRzaWRlIGJhcnJpZXIgY29sbGVjdHMgb24gdGhlIGJhbmQgdGhlIHRyYWZmaWNcbiAgICAvLyBhY3R1YWxseSByZWFjaGVzLiBCcm9hZCwgc29mdCwgbmVhci1ob3Jpem9udGFsIHNtZWFycyB3aXRoIGEgc3dlcHQgc2hhcGUgLS0gYSBibG90Y2ggcmVhZHMgYXNcbiAgICAvLyBhIHN0YWluLCBhbmQgd2hhdCB0aGUgcGxhdGUgY2FycmllcyBpcyBzb21ldGhpbmcgdGhhdCB3ZW50IHBhc3QuIGBzY3VmZkJhbmRgIGlzIGEgcGFpciBvZlxuICAgIC8vIEhFSUdIVCBmcmFjdGlvbnMgKDAgYXQgdGhlIGdyb3VuZCksIHNvIGl0IGlzIHN0YXRlZCBpbiB0aGUgc2FtZSB0ZXJtcyBhcyBgY292ZXJhZ2VgLlxuICAgIGlmIChvLnNjdWZmcykge1xuICAgICAgY29uc3QgdiA9IG8uc2N1ZmYgPz8gWzAuNjIsIDAuNjIsIDAuNjRdLCBiYW5kID0gby5zY3VmZkJhbmQgPz8gWzAuMzAsIDAuNzBdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnNjdWZmczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHMgKiAoMSAtIChiYW5kWzBdICsgcm5kKCkgKiAoYmFuZFsxXSAtIGJhbmRbMF0pKSk7XG4gICAgICAgIGNvbnN0IHcgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTEpLCBoID0gdyAqICgwLjA1ICsgcm5kKCkgKiAwLjEwKTtcbiAgICAgICAgY29uc3QgYSA9IChvLnNjdWZmQWxwaGEgPz8gMC4zNCkgKiAoMC41ICsgcm5kKCkpO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgICBjdHguc2F2ZSgpOyBjdHgudHJhbnNsYXRlKGN4ICsgZHgsIGN5KTsgY3R4LnJvdGF0ZSgocm5kKCkgLSAwLjUpICogMC40NSk7IGN0eC5zY2FsZSgxLCBoIC8gdyk7XG4gICAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoMCwgMCwgMCwgMCwgMCwgdyk7XG4gICAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMC40NSwgYHJnYmEoJHtyZ2Iodil9LCR7YSAqIDAuNTV9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoMCwgMCwgdywgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRk9STSBTRUFNUzogdGhlIHZlcnRpY2FsIGpvaW50IGxpbmVzIGEgcHJlY2FzdCBtb3VsZCBsZWF2ZXMsIG9uZSBwZXIgdGlsZS4gQSBkYXJrIGhhaXJsaW5lIHdpdGhcbiAgICAvLyBhIHBhbGVyIGxpcCBiZXNpZGUgaXQsIHdoaWNoIGlzIHdoYXQgYSBwcm91ZCBzZWFtIGxvb2tzIGxpa2UgLS0gYSBzaW5nbGUgZGFyayBsaW5lIHJlYWRzIGFzIGFcbiAgICAvLyBzY3JhdGNoLiBgc2VhbUF0YCBwbGFjZXMgaXQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgdGlsZSBzbyBpdCBkb2VzIG5vdCBsYW5kIG9uIHRoZSB3cmFwLlxuICAgIGlmIChvLnNlYW1zKSB7XG4gICAgICBjb25zdCB2ID0gby5zZWFtID8/IFswLjcyLCAwLjcxLCAwLjY4XTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5zZWFtczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKHMgKiAoKG8uc2VhbUF0ID8/IDAuNDIpICsgaSAvIG8uc2VhbXMpKSAlIHM7XG4gICAgICAgIGNvbnN0IHdweCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQocyAqIDAuMDA0KSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sJHtvLnNlYW1BbHBoYSA/PyAwLjV9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCB3cHgsIHMpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7KG8uc2VhbUFscGhhID8/IDAuNSkgKiAwLjN9KWA7IGN0eC5maWxsUmVjdCh4ICsgd3B4LCAwLCB3cHgsIHMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBQSU5IT0xFUzogdGhlIGFpciBidWJibGVzIGEgcHJlY2FzdCBmYWNlIGlzIGNvdmVyZWQgaW4uIFRoZXkgYXJlIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZ1xuICAgIC8vIG1hcmsgb2YgYmFyZSBjb25jcmV0ZSBhdCBwcm9wIGRpc3RhbmNlIC0tIHdpdGhvdXQgdGhlbSB0aGUgZmFjZSBpcyBhIHBhaW50ZWQgc2xhYiwgd2hpY2ggaXNcbiAgICAvLyBtZWFzdXJhYmxlIGFzIGEgcmVuZGVyZWQgc3RhbmRhcmQgZGV2aWF0aW9uIGEgdGhpcmQgb2YgdGhlIHBsYXRlJ3MuIFNtYWxsLCBkYXJrLCBhbmQgTUFOWS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnBpdHMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgdiA9IG8ucGl0ID8/IFswLjQyLCAwLjQwLCAwLjM2XTtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAoby5waXRSID8/IDEuNikgKiAoMC41ICsgcm5kKCkgKiAxLjMpO1xuICAgICAgY29uc3QgYSA9IDAuMjUgKyBybmQoKSAqIDAuNTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIgKiAyKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNCwgYHJnYmEoJHtyZ2Iodil9LCR7YSAqIDAuNDV9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciAqIDIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBtb3NzIC8gYWxnYWUgaW4gdGhlIGJvdHRvbSBiYW5kOiBjbHVzdGVyZWQgc3BlY2tzLCBicmlnaHRlci10aGFuLXdhc2ggZ3JlZW5cbiAgICBpZiAoby5tb3NzKSB7XG4gICAgICBjb25zdCBtID0gby5tb3NzLCBiYW5kID0gby5tb3NzQmFuZCA/PyAwLjIyO1xuICAgICAgLy8gYSBmYWludCBncmVlbiB3YXNoIG92ZXIgdGhlIHdob2xlIGJhbmQgZmlyc3QsIHNvIHRoZSBjYXJwZXRzIHNpdCBpbiBkYW1wIGdyb3VuZCByYXRoZXIgdGhhblxuICAgICAgLy8gYXMgaXNvbGF0ZWQgZG90cyBvbiBjbGVhbiBwYWludFxuICAgICAgY29uc3QgbWcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gYmFuZCAqIDEuMykpO1xuICAgICAgbWcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKG0pfSwke28ubW9zc1dhc2ggPz8gMC4zNX0pYCk7IG1nLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihtKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBtZzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5tb3NzQ2x1c3RlcnMgPz8gMTQpOyBrKyspIHtcbiAgICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAxLjYpICogcyAqIGJhbmQsIGNyID0gcyAqICgwLjAxNSArIHJuZCgpICogMC4wNCk7XG4gICAgICAgIC8vIHRoZSBjYXJwZXQ6IGEgc29mdCBibG9iLCB0aGVuIHNwZWNrcyBvdmVyIGl0IGZvciB0aGUgdHVmdGVkIGVkZ2VcbiAgICAgICAgY29uc3QgY2cgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIGNyKTtcbiAgICAgICAgY2cuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKG0pfSwwLjcpYCk7IGNnLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKCR7cmdiKG0pfSwwLjM1KWApOyBjZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IobSl9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjZztcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3ggKyBkeCwgY3ksIGNyLCBjciAqIDAuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyO1xuICAgICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkICogMC42LCByID0gMSArIHJuZCgpICogMztcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IobSl9LCR7MC4zNSArIHJuZCgpICogMC41fSlgO1xuICAgICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBncmFpbi4gYGdyYWluYC9gZ3JhaW5BbHBoYWAgZGVmYXVsdCB0byB0aGUgb3JpZ2luYWwgMTUwMCBhdCAwLjEyLCBzbyBubyBhbHJlYWR5LWVtaXR0ZWQgcHJvcFxuICAgIC8vIGNoYW5nZXM7IGEgdGlsZSBzdHJldGNoZWQgb3ZlciBhIFdIT0xFIHByb3AgKHV2U2NhbGUgPiBpdHMgaGVpZ2h0KSBzYW1wbGVzIG9ubHkgdGhlIGZyYWN0aW9uXG4gICAgLy8gb2YgdGhlIHRpbGUgd2lkdGggaGVpZ2h0VVYgZm9sZHMgb250byBpdCwgYW5kIG5lZWRzIHRoZSBjb3VudCByYWlzZWQgdG8ga2VlcCB0aGUgc2FtZSBkZW5zaXR5LlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZ3JhaW4gPz8gMTUwMCk7IGkrKykge1xuICAgICAgY29uc3QgbG8gPSBvLmdyYWluTG8gPz8gMjAwOyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB2ID0gbG8gKyBNYXRoLnJvdW5kKHJuZCgpICogKDI1NSAtIGxvKSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sJHtvLmdyYWluQWxwaGEgPz8gMC4xMn0pYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEuNSwgMS41KTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogQ0hBSU4tTElOSyB0aWxlOiBhIGRpYW1vbmQgd2lyZSBsYXR0aWNlIGRyYXduIG9wYXF1ZSBvdmVyIGEgVFJBTlNQQVJFTlQgZ3JvdW5kLCBib3VuZCBhcyBtYXBcbiAqICBvbiBhbiBhbHBoYS10ZXN0ZWQgbWF0ZXJpYWwgc28gdGhlIGNlbGxzIGFyZSBvcGVuLiBPbmUgdGlsZSBpcyBvbmUgZGlhbW9uZCBjZWxsOyB0aGUgcGFuZSdzXG4gKiAgVVZzIHJlcGVhdCBpdCBhdCB0aGUgcmVhbCBtZXNoIHBpdGNoLiBgd2lyZWAgaXMgdGhlIHdpcmUgd2lkdGggYXMgYSBmcmFjdGlvbiBvZiB0aGUgY2VsbC4gKi9cbmZ1bmN0aW9uIGNoYWlubGlua1RpbGUoc2l6ZTogbnVtYmVyLCB3aXJlOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5saW5lV2lkdGggPSBNYXRoLm1heCgxLjUsIHdpcmUgKiBzKTtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgY29uc3QgdiA9IDE1MCArIE1hdGgucm91bmQocm5kKCkgKiAzMCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYigke3Z9LCR7diArIDJ9LCR7diArIDR9KWA7XG4gICAgLy8gdHdvIGRpYWdvbmFscyB0aHJvdWdoIHRoZSB0aWxlLCBvZmZzZXQgc28gdGhlIHdyYXAgbWFrZXMgYSBjb250aW51b3VzIGRpYW1vbmQgbGF0dGljZVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDApOyBjdHgubGluZVRvKHMsIHMpO1xuICAgIGN0eC5tb3ZlVG8ocywgMCk7IGN0eC5saW5lVG8oMCwgcyk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIHRoZSBrbnVja2xlIHdoZXJlIHdpcmVzIHR3aXN0IHJvdW5kIGVhY2ggb3RoZXIsIGF0IHRoZSB0d28gY3Jvc3NpbmdzIG9uIHRoZSB0aWxlIGVkZ2VzXG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2IC0gMjB9LCR7diAtIDE4fSwke3YgLSAxNn0pYDtcbiAgICBmb3IgKGNvbnN0IFt4LCB5XSBvZiBbWzAsIDBdLCBbcywgMF0sIFswLCBzXSwgW3MsIHNdLCBbcyAvIDIsIHMgLyAyXV0pIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCBjdHgubGluZVdpZHRoICogMC45LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIEJBTUJPTyBTVFJJUCB0aWxlOiB2ZXJ0aWNhbCBzcGxpdC1iYW1ib28gc3RyaXBzIHdpdGggcGFsZSBjdWxtIGZhY2VzLCBkYXJrIGpvaW50cyBiZXR3ZWVuIHRoZW1cbiAqICBhbmQgYSBub2RlIGxpbmUgb3IgdHdvIC0tIGEgbXVsdGlwbGllciBvbiB0aGUgbWVhc3VyZWQgc2lsdmVyLWdyZXkuICovXG5mdW5jdGlvbiBiYW1ib29UaWxlKHNpemU6IG51bWJlciwgc3RyaXBzOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3Qgc3cgPSBzIC8gc3RyaXBzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgc3RyaXBzOyBiKyspIHtcbiAgICAgIGNvbnN0IHRvbmUgPSAwLjgwICsgcm5kKCkgKiAwLjIsIHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3YgLSAyfSwke3YgLSA2fSlgOyBjdHguZmlsbFJlY3QoYiAqIHN3LCAwLCBzdywgcyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTAsNDIsMzQsMC42KSc7IGN0eC5maWxsUmVjdChiICogc3csIDAsIE1hdGgubWF4KDEsIHMgKiAwLjAwNiksIHMpO1xuICAgICAgLy8gYSBoaWdobGlnaHQgZG93biB0aGUgY3VsbSdzIHJvdW5kXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xMCknOyBjdHguZmlsbFJlY3QoYiAqIHN3ICsgc3cgKiAwLjM1LCAwLCBzdyAqIDAuMjUsIHMpO1xuICAgICAgLy8gbm9kZSByaW5nc1xuICAgICAgY29uc3QgbiA9IDEgKyBNYXRoLmZsb29yKHJuZCgpICogMik7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykgeyBjb25zdCB5ID0gcm5kKCkgKiBzOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNzAsNjAsNDgsMC40NSknOyBjdHguZmlsbFJlY3QoYiAqIHN3LCB5LCBzdywgTWF0aC5tYXgoMSwgcyAqIDAuMDA4KSk7IH1cbiAgICAgIC8vIGZpbmUgZ3JhaW4gbGluZXNcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNjsgaysrKSB7IGNvbnN0IHggPSBiICogc3cgKyBybmQoKSAqIHN3OyBjdHguZmlsbFN0eWxlID0gYHJnYmEoODAsNzAsNTgsJHswLjA1ICsgcm5kKCkgKiAwLjF9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTsgfVxuICAgIH1cbiAgICAvLyBtb3VsZCBzcGVja2xlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDA7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzAsMjgsMjQsMC4xOCknOyBjdHguZmlsbFJlY3QoeCwgeSwgMSArIHJuZCgpICogMiwgMSArIHJuZCgpICogMik7IH1cbiAgfSk7XG59XG5cbi8qKiBQT1NURVIgdGlsZSBmb3IgYSBob2FyZGluZzogdG9ybiBwYXN0ZS11cCBzaGVldHMgYW5kIGEgc3ByYXkgc3RlbmNpbCBvdmVyIGEgVFJBTlNQQVJFTlQgZ3JvdW5kLFxuICogIGJvdW5kIG9uIGFuIGFscGhhLXRlc3RlZCBwYW5lIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBzaGVldC4gYGxpbmVzYCBhcmUgdGhlIHN0ZW5jaWxcbiAqICBzdHJpbmdzOyBhIHByaW50ZWQgZ3JhcGhpYyBpcyBleGFjdGx5IHRoZSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgY2FzZS4gKi9cbmZ1bmN0aW9uIHBvc3RlclRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIGxpbmVzOiBzdHJpbmdbXSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIHBhc3RlLXVwczogb3ZlcmxhcHBpbmcgb2ZmLXdoaXRlIHJlY3RhbmdsZXMgd2l0aCB0b3JuIGVkZ2VzIGFuZCBmYWludCBwcmludCBsaW5lc1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjMwKSwgeSA9IHMgKiAoMC4xNSArIHJuZCgpICogMC40NSksIHcgPSBzICogKDAuMTQgKyBybmQoKSAqIDAuMTYpLCBoID0gcyAqICgwLjE4ICsgcm5kKCkgKiAwLjIyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgkezIyNSArIE1hdGgucm91bmQocm5kKCkgKiAyMCl9LCR7MjIyICsgTWF0aC5yb3VuZChybmQoKSAqIDE4KX0sJHsyMTAgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwwLjk2KWA7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICBjb25zdCBuID0gOTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgY3R4LmxpbmVUbyh4ICsgdyAqIGkgLyBuLCB5ICsgKHJuZCgpIC0gMC41KSAqIGggKiAwLjA4KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgY3R4LmxpbmVUbyh4ICsgdyArIChybmQoKSAtIDAuNSkgKiB3ICogMC4wOCwgeSArIGggKiBpIC8gbik7XG4gICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSBjdHgubGluZVRvKHggKyB3ICogaSAvIG4sIHkgKyBoICsgKHJuZCgpIC0gMC41KSAqIGggKiAwLjEyKTtcbiAgICAgIGZvciAobGV0IGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIGN0eC5saW5lVG8oeCArIChybmQoKSAtIDAuNSkgKiB3ICogMC4wOCwgeSArIGggKiBpIC8gbik7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsNDAsNDUsMC41NSknO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIGN0eC5maWxsUmVjdCh4ICsgdyAqIDAuMSwgeSArIGggKiAoMC4yICsgaSAqIDAuMSksIHcgKiAoMC4zICsgcm5kKCkgKiAwLjUpLCBNYXRoLm1heCgxLCBzICogMC4wMDYpKTtcbiAgICB9XG4gICAgLy8gc3ByYXkgc3RlbmNpbCwgc2xpZ2h0bHkgc29mdCBhbmQgdW5ldmVuXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDIwLDIyLDAuODgpJztcbiAgICBjdHguZm9udCA9IGBib2xkICR7TWF0aC5yb3VuZChzICogMC4wNyl9cHggc2Fucy1zZXJpZmA7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBzICogMC40MCwgeSA9IHMgKiAoMC40NCArIGkgKiAwLjEzKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMzsgaysrKSB7IGN0eC5nbG9iYWxBbHBoYSA9IDAuNjsgY3R4LmZpbGxUZXh0KGxpbmVzW2ldLCB4ICsgKHJuZCgpIC0gMC41KSAqIDMsIHkgKyAocm5kKCkgLSAwLjUpICogMyk7IH1cbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFNUUklQRSB0aWxlOiBhbHRlcm5hdGluZyBjb2xvdXIgYmFuZHMgYWxvbmcgdSAoYW4gYXduaW5nKSwgd2l0aCBhIHNvZnQgZ3JpbWUgbXVsdGlwbHkgc28gdGhlIGNsb3RoXG4gKiAgcmVhZHMgd29ybiByYXRoZXIgdGhhbiBwcmludGVkLiBgYWAvYGJgIGFyZSB0aGUgdHdvIGJhbmQgY29sb3VycyBhcyBbcixnLGJdIDAtMS4gQm91bmQgYXMgbWFwIG9uIGFcbiAqICBXSElURSBtYXRlcmlhbCBzbyB0aGUgYmFuZHMgY2FycnkgdGhlIHdob2xlIGFsYmVkby4gKi9cbi8vIGBvYCBpcyBvcHRpb25hbCBhbmQgZXZlcnkgZmllbGQgZGVmYXVsdHMgdG8gdGhlIHByZXZpb3VzIGhhcmQtY29kZWQgYmVoYXZpb3VyLCBzbyBubyBwcm9wIHRoYXRcbi8vIGRvZXMgbm90IHBhc3MgaXQgY2hhbmdlcy4gYHNtdWRnZXNgIGFuZCBgc3BlY2tzYCBleGlzdCBiZWNhdXNlIGJydXNoZWQgU1RFRUwgd2FudHMgdGhlIGJhbmRpbmdcbi8vIHdpdGhvdXQgdGhlIGRpcnQ6IHRoZSA0MCByYWRpYWwgc211ZGdlcyBhbmQgMTIwMCBsaWdodCBzcGVja3MgcmVhZCBhcyBtb3VsZCBvbiBhIGNsZWFuIHNhdGluXG4vLyBzdXJmYWNlLCB3aGljaCBpcyB0aGUgb3Bwb3NpdGUgb2Ygd2hhdCBhIHN0cmlwZSB0aWxlIGlzIGZvciB0aGVyZS5cbmZ1bmN0aW9uIHN0cmlwZVRpbGUoc2l6ZTogbnVtYmVyLCBiYW5kczogbnVtYmVyLCBhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgbzogYW55ID0ge30pOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgcmdiKCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9KWA7XG4gICAgY29uc3QgdyA9IHMgLyBiYW5kcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhbmRzOyBpKyspIHsgY3R4LmZpbGxTdHlsZSA9IHJnYihpICUgMiA/IGIgOiBhKTsgY3R4LmZpbGxSZWN0KE1hdGguZmxvb3IoaSAqIHcpLCAwLCBNYXRoLmNlaWwodykgKyAxLCBzKTsgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc211ZGdlcyA/PyA0MCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDQgKyBybmQoKSAqIHMgKiAwLjA4LCBhbCA9IDAuMDYgKyBybmQoKSAqIDAuMTg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxNTAsMTQwLDEyNSwke2FsfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDE1MCwxNDAsMTI1LDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BlY2tzID8/IDEyMDApOyBpKyspIHsgY29uc3QgdiA9IDIwMCArIE1hdGgucm91bmQocm5kKCkgKiA1NSk7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjEwKWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMS41LCAxLjUpOyB9XG4gICAgLy8gQlJPQUQgcmVmbGVjdGlvbiBiYW5kaW5nOiBgby5icm9hZGAgd2hvbGUgYnJpZ2h0L2RhcmsgY3ljbGVzIGFjcm9zcyB0aGUgdGlsZSwgZHJhd24gYXMgb25lXG4gICAgLy8gd3JhcHBpbmcgY29zaW5lIGdyYWRpZW50LiBCcnVzaGVkIHN0ZWVsIHdpdGggbm8gZW52aXJvbm1lbnQgbWFwIHRvIHJlZmxlY3QgaGFzIG5vdGhpbmcgdG9cbiAgICAvLyBtYWtlIGl0cyBmbGFua3MgYnJpZ2h0IGFuZCBpdHMgbWlkZGxlIGRhcmssIGFuZCB0aGUgZmluZSBncmFpbiBjYW5ub3Qgc3VwcGx5IGl0IC0tIGEgMyBtbVxuICAgIC8vIHBpdGNoIGF2ZXJhZ2VzIHRvIG9uZSBmbGF0IHRvbmUgYXQgcHJvcCBkaXN0YW5jZSwgd2hpY2ggaXMgd2hhdCBhIHJlbmRlcmVkIHN0YWlubGVzcyBiaW5cbiAgICAvLyBsb29rcyBsaWtlIHdoZW4gaXQgcmVhZHMgYXMgcGFpbnRlZCBtZXRhbC4gV2hvbGUgY3ljbGVzLCBzbyB0aGUgdGlsZSBzdGlsbCBtZWV0cyBpdHNlbGYuXG4gICAgLy8gRGVmYXVsdGVkIE9GRiwgc28gZXZlcnkgZXhpc3RpbmcgY2FsbGVyIGlzIGJ5dGUtaWRlbnRpY2FsLlxuICAgIGlmIChvLmJyb2FkKSB7XG4gICAgICBjb25zdCBsbyA9IG8uYnJvYWRMbyA/PyAwLjgwLCBoaSA9IG8uYnJvYWRIaSA/PyAxLjA7XG4gICAgICBjb25zdCBnMyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBzLCAwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDY0OyBpKyspIHtcbiAgICAgICAgY29uc3QgdCA9IGkgLyA2NDtcbiAgICAgICAgY29uc3QgdiA9IGxvICsgKGhpIC0gbG8pICogKDAuNSArIDAuNSAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogby5icm9hZCAqIHQpKTtcbiAgICAgICAgY29uc3QgYyA9IE1hdGgucm91bmQoMjU1ICogdik7XG4gICAgICAgIGczLmFkZENvbG9yU3RvcCh0LCBgcmdiKCR7Y30sJHtjfSwke2N9KWApO1xuICAgICAgfVxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGczOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFNlYW1sZXNzIGFyb3VuZC1ieS11cCBVVnMgZm9yIGEgTGF0aGVHZW9tZXRyeTogdSBmcm9tIHRoZSBTRUdNRU5UIGluZGV4ICh0aGUgbGF0aGUgb3JkZXJzIGl0c1xuICogIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IsIGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgc28gdGhlIGR1cGxpY2F0ZWQgc2VhbSBjb2x1bW4gcmVhZHNcbiAqICB1ID0gcmVwZWF0cyBleGFjdGx5IGFuZCBSZXBlYXRXcmFwcGluZyBjbG9zZXMgaXQuIGBzY2FsZWAgaXMgdGhlIHRpbGUgc2l6ZSBpbiBtZXRyZXM7IHRoZVxuICogIGFyb3VuZC1yZXBlYXQgY291bnQgaXMgcm91bmRlZCBzbyB0aGUgdGlsZSBtZWV0cyBpdHNlbGYsIGZyb20gdGhlIHByb2ZpbGUncyB3aWRlc3QgcmFkaXVzLiAqL1xuZnVuY3Rpb24gbGF0aGVVVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcG9pbnRDb3VudDogbnVtYmVyLCBzZWc6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdlNjYWxlID0gc2NhbGUsIHYwID0gMCk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGxldCByTWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHJNYXggPSBNYXRoLm1heChyTWF4LCBNYXRoLmh5cG90KHAuZ2V0WChpKSwgcC5nZXRaKGkpKSk7XG4gIGNvbnN0IHJlcCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoMiAqIE1hdGguUEkgKiByTWF4IC8gc2NhbGUpKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBzID0gTWF0aC5mbG9vcihpIC8gcG9pbnRDb3VudCk7XG4gICAgdXZbaSAqIDJdID0gKHMgLyBzZWcpICogcmVwOyB1dltpICogMiArIDFdID0gKHAuZ2V0WShpKSAtIHYwKSAvIHZTY2FsZTtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG59XG5cbi8qKiBFWFBPU0VELUFHR1JFR0FURSB0aWxlOiBhIGRhcmsgbW9ydGFyIGdyb3VuZCBwYWNrZWQgd2l0aCByb3VuZGVkIHBlYmJsZXMgaW4gYSBtZWFzdXJlZCBwYWxldHRlLFxuICogIGVhY2ggZHJhd24gYXQgbmluZSB3cmFwcGVkIG9mZnNldHMgc28gdGhlIHRpbGUgaXMgc2VhbWxlc3MuIGBvLnBhbGV0dGVgIGlzIGEgbGlzdCBvZiBbcixnLGJdXG4gKiAgcmF0aW9zIGFnYWluc3QgdGhlIG1hdGVyaWFsIGNvbG91ciwgYG8uZ3JvdW5kYCB0aGUgbW9ydGFyIHJhdGlvLCBgby5jb3VudGAgdGhlIHBlYmJsZSBjb3VudC4gKi9cbmZ1bmN0aW9uIHBlYmJsZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX0pYDtcbiAgICBjdHguZmlsbFN0eWxlID0gcmdiKG8uZ3JvdW5kID8/IFswLjQ1LCAwLjQyLCAwLjM4XSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBwYWw6IG51bWJlcltdW10gPSBvLnBhbGV0dGUgPz8gW1swLjg1LCAwLjc4LCAwLjY2XSwgWzAuNzIsIDAuNjIsIDAuNTBdLCBbMC42MCwgMC41OCwgMC41NV0sIFswLjkwLCAwLjg2LCAwLjgwXV07XG4gICAgY29uc3QgbiA9IG8uY291bnQgPz8gOTAwLCByTWluID0gcyAqIChvLnJNaW4gPz8gMC4wMTIpLCByTWF4ID0gcyAqIChvLnJNYXggPz8gMC4wMjgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByeCA9IHJNaW4gKyBybmQoKSAqIChyTWF4IC0gck1pbiksIHJ5ID0gcnggKiAoMC42ICsgcm5kKCkgKiAwLjUpLCBhID0gcm5kKCkgKiBNYXRoLlBJO1xuICAgICAgY29uc3QgYyA9IHBhbFtNYXRoLmZsb29yKHJuZCgpICogcGFsLmxlbmd0aCldLCBrID0gMC44NSArIHJuZCgpICogMC4zO1xuICAgICAgLy8gQ09OVEFDVCBTSEFET1cgZmlyc3QsIG9mZnNldCBkb3duLXJpZ2h0IGFuZCBhIHRvdWNoIGxhcmdlciwgc28gd2hhdCBzdXJ2aXZlcyBhcm91bmQgZWFjaFxuICAgICAgLy8gc3RvbmUgaXMgdGhlIGRhcmsgbW9ydGFyIGNyZXNjZW50IHRoYXQgbWFrZXMgYSBwYWNrZWQgYWdncmVnYXRlIHJlYWQgYXMgc3RvbmVzIHJhdGhlciB0aGFuXG4gICAgICAvLyBhcyBvdmVybGFwcGluZyBmbGF0IGRpc2NzLiBgc2hhZGVgIGlzIGEgcmF0aW8gYWdhaW5zdCB0aGUgbW9ydGFyIGdyb3VuZDsgMCBrZWVwcyB0aGUgb2xkXG4gICAgICAvLyBsb29rIGZvciBldmVyeSB0aWxlIGFscmVhZHkgc2hpcHBlZC5cbiAgICAgIGlmIChvLnNoYWRlKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSByZ2IoKG8uZ3JvdW5kID8/IFswLjQ1LCAwLjQyLCAwLjM4XSkubWFwKCh2KSA9PiB2ICogby5zaGFkZSkpO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCArIHJ4ICogMC4xNiwgeSArIGR5ICsgcnkgKiAwLjIyLCByeCAqIDEuMSwgcnkgKiAxLjEsIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgICAgY3R4LmZpbGxTdHlsZSA9IHJnYihjLm1hcCgodikgPT4gTWF0aC5taW4oMSwgdiAqIGspKSk7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByeCwgcnksIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgLy8gYSBoaWdobGlnaHQgY3Jlc2NlbnQgb24gdGhlIGxpdCBzaWRlIHNvIGVhY2ggc3RvbmUgcmVhZHMgYXMgYSBidW1wXG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjU1LDI1NSwyNTUsJHtvLmdsb3NzID8/IDAuMTh9KWA7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCAtIHJ4ICogMC4yLCB5ICsgZHkgLSByeSAqIDAuMjUsIHJ4ICogMC41LCByeSAqIDAuNCwgYSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFRZUkUgVFJFQUQgdGlsZSBmb3IgYSBsYXRoZSBjYXJyeWluZyBgY3lsVVZgOiB1IHJ1bnMgQVJPVU5EIHRoZSB0eXJlIGFuZCB2IFVQIGl0LCBzbyB0cmVhZCBzbG90cyBhcmVcbiAqICBiYXJzIGF0IGNvbnN0YW50IHUgYW5kIHRoZSBjaXJjdW1mZXJlbnRpYWwgZ3Jvb3ZlcyBhcmUgbGluZXMgYXQgY29uc3RhbnQgdi4gRHJhd24gYXMgcmF0aW9zIG9uIHdoaXRlXG4gKiAgYW5kIG11bHRpcGxpZWQgaW50byB0aGUgKGxpZnRlZCkgcnViYmVyIGNvbG91cjsgYG8uZ3Jvb3ZlYCBpcyB0aGUgZGFya2VzdCByYXRpbywga2VwdCBhYm92ZSB0aGVcbiAqICBsdW1hLTU4IGhvbGUgYmFuZCBieSB0aGUgY2FsbGVyLiBgby5zbG90c2AgYmFycyBwZXIgdGlsZSwgYG8ucmluZ3NgIGNpcmN1bWZlcmVudGlhbCBsaW5lcy4gKi9cbmZ1bmN0aW9uIHRyZWFkVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGdyb292ZSA9IG8uZ3Jvb3ZlID8/IDAuODAsIHNsb3RzID0gby5zbG90cyA/PyAyLCByaW5ncyA9IG8ucmluZ3MgPz8gMjtcbiAgICAvLyBgYmFzZWAgaXMgdGhlIHRvbmUgdGhlIFVOLWdyaW1lZCBwYXJ0IG9mIHRoZSB0aWxlIGNhcnJpZXMsIGRlZmF1bHRpbmcgdG8gd2hpdGUgLS0gaS5lLiB0b1xuICAgIC8vIFwibGVhdmUgdGhlIHZlcnRleCBjb2xvdXIgYWxvbmVcIiwgd2hpY2ggaXMgZXZlcnkgZXhpc3RpbmcgY2FsbGVyLiBJdCBleGlzdHMgZm9yIEVOVkVMT1BFXG4gICAgLy8gUkUtQkFTSU5HOiBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbiwgc28gYSBwYXJ0IHRoYXQgbXVzdCByZWFkIGNsZWFuIG9yYW5nZSBpbiBvbmUgcGxhY2UgYW5kXG4gICAgLy8gZ3JleSByb2FkIGdyaW1lIGluIGFub3RoZXIgY2Fubm90IGRvIGl0IGZyb20gYSBzaW5nbGUgdmVydGV4IGNvbG91ciwgYmVjYXVzZSB0aGUgZ3JpbWUgaXNcbiAgICAvLyBISUdIRVIgaW4gYmx1ZSB0aGFuIHRoZSBvcmFuZ2UgaXMuIFRoZSB2ZXJ0ZXggY29sb3VyIGJlY29tZXMgdGhlIHBlci1jaGFubmVsIG1heGltdW0gb2YgYm90aFxuICAgIC8vIGFuZCB0aGlzIGZpbGwgcGFpbnRzIHRoZSBjbGVhbiB0b25lIGJhY2sgb3V0IG9mIGl0LlxuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgY29uc3QgZ3YgPSBNYXRoLnJvdW5kKDI1NSAqIGdyb292ZSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICBjb25zdCBwaXRjaCA9IHMgLyBzbG90cywgdyA9IHBpdGNoICogKG8uc2xvdFdpZHRoID8/IDAuMTYpO1xuICAgIC8vIHRyZWFkIHNsb3RzIHNwYW4gdGhlIGJhbmQgYmV0d2VlbiB0aGUgdHdvIGVkZ2Ugc2hvdWxkZXJzICh2IDAuMTIuLjAuODggb2YgdGhlIHRpbGUpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbG90czsgaSsrKSB7IGNvbnN0IHggPSBpICogcGl0Y2ggKyBwaXRjaCAqIDAuNCArIChybmQoKSAtIDAuNSkgKiBwaXRjaCAqIDAuMTsgY3R4LmZpbGxSZWN0KHgsIHMgKiAwLjEyLCB3LCBzICogMC43Nik7IGN0eC5maWxsUmVjdCh4IC0gcywgcyAqIDAuMTIsIHcsIHMgKiAwLjc2KTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmluZ3M7IGkrKykgeyBjb25zdCB5ID0gcyAqICgwLjIgKyAwLjYgKiAoaSArIDAuNSkgLyByaW5ncyk7IGN0eC5maWxsUmVjdCgwLCB5IC0gMS41LCBzLCAzKTsgfVxuICAgIC8vIHNpZGV3YWxsIHNoZWVuOiBhIHNvZnQgbGlnaHRlciB3YXNoIHNvIHRoZSBydWJiZXIgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTIpLCB2ID0gMjM1ICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpOyBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC41KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0gfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIE9MRCBUWVJFIHRpbGU6IFRXTyB0eXJlIGhlaWdodHMgdGFsbCBieSBgby5waXRjaGAgbWV0cmVzIGFyb3VuZCAoY3lsVVYpLiBUaGUgdXBwZXIgaGFsZiAodiAwLjUtMSlcbiAqICBpcyBhIHRyZWFkZWQgdHlyZSwgdGhlIGxvd2VyIGhhbGYgKHYgMC0wLjUpIGEgd29ybiBTTElDSyB3aXRoIGNpcmN1bWZlcmVudGlhbCBncm9vdmVzIGFuZCBzaG9ydFxuICogIHNob3VsZGVyIHNpcGVzIG9ubHksIHNvIGEgc3RhY2sgbWl4ZXMgYmFsZCBhbmQgdHJlYWRlZCB0eXJlcyBvZmYgb25lIGNhbnZhcyBieSB2MC4gRHJhd24gYXMgUkFUSU9TXG4gKiAgYWdhaW5zdCB0aGUgdmVydGV4LWNvbG91cmVkIHJ1YmJlciBhdCBgYmFzZWAgKDIwMC8yNTUgLT4gdmVydGV4IHRvbmVzIGFyZSBhdXRob3JlZCAxLjI3NXggdGhlXG4gKiAgaW50ZW5kZWQgYWxiZWRvIHNvIGR1c3QgYW5kIHNjdWZmcyBjYW4gZ28gQlJJR0hURVIgdGhhbiB0aGUgcnViYmVyIHVuZGVyIGEgbXVsdGlwbHkgY2FudmFzKS5cbiAqICBSb3dzIGFyZSBoZWlnaHRzOiBsb3dlciBzaWRld2FsbCwgdHJlYWQgYmFuZCAodiBgby5iYW5kWzBdYC4uYG8uYmFuZFsxXWAgb2YgdGhlIHN0cmlwKSwgdXBwZXJcbiAqICBzaWRld2FsbCB3aXRoIGJlYWQgcmluZ3MgYW5kIG1vdWxkIGxpbmVzLiBXZWFyOiBhIHdhcm0gZHVzdCB3YXNoIG9uIHRoZSBsb3dlciBzaG91bGRlciwgZ3JleSBzY3VmZnNcbiAqICBvbiBib3RoIHNob3VsZGVycywgZHVzdCBjYXVnaHQgaW4gdGhlIGN1dHMsIGdyYWluIG92ZXIgZXZlcnl0aGluZy4gKi9cbmZ1bmN0aW9uIHR5cmVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyAyMDAsIGJhbmQgPSBvLmJhbmQgPz8gWzAuMjQsIDAuNzZdLCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjQ1O1xuICAgIGNvbnN0IGd2ID0gTWF0aC5yb3VuZChiYXNlICogZ3Jvb3ZlKSwgcnYgPSBNYXRoLnJvdW5kKGJhc2UgKiAwLjcpLCBtdiA9IE1hdGgucm91bmQoYmFzZSAqIDAuOSk7XG4gICAgY29uc3QgZHVzdCA9IG8uZHVzdCA/PyBbMjMyLCAyMTQsIDE5MF07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtiYXNlfSwke2Jhc2V9LCR7YmFzZX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcyAqIHMgLyA2OyBpKyspIHsgY29uc3QgdiA9IGJhc2UgKyBNYXRoLnJvdW5kKChybmQoKSAtIDAuNSkgKiAyMik7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMiwgMik7IH1cbiAgICAvLyBvbmUgdHlyZSBzdHJpcCBiZXR3ZWVuIGNhbnZhcyByb3dzIHlhICh0b3ApIGFuZCB5YiAoYm90dG9tKTsgY2FudmFzIHkgZ3Jvd3MgRE9XTiwgdiBncm93cyBVUFxuICAgIGNvbnN0IHN0cmlwID0gKHlhOiBudW1iZXIsIHliOiBudW1iZXIsIHRyZWFkZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IGggPSB5YiAtIHlhLCBiMCA9IHlhICsgaCAqICgxIC0gYmFuZFsxXSksIGIxID0geWEgKyBoICogKDEgLSBiYW5kWzBdKTtcbiAgICAgIGNvbnN0IG5nID0gby5ncm9vdmVzID8/IDMsIGd3ID0gaCAqIDAuMDI0O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmc7IGkrKykgeyBjb25zdCB5ID0gYjAgKyAoYjEgLSBiMCkgKiAoaSArIDEpIC8gKG5nICsgMSk7IGN0eC5maWxsUmVjdCgwLCB5IC0gZ3cgLyAyLCBzLCBndyk7IH1cbiAgICAgIGNvbnN0IG5zID0gby5zaXBlcyA/PyAyLCB3ID0gcyAqIChvLnNpcGVXaWR0aCA/PyAwLjA1KTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDw9IG5nOyBrKyspIHtcbiAgICAgICAgY29uc3QgeTAgPSBrID09PSAwID8gYjAgOiBiMCArIChiMSAtIGIwKSAqIGsgLyAobmcgKyAxKSArIGd3IC8gMiwgeTEgPSBrID09PSBuZyA/IGIxIDogYjAgKyAoYjEgLSBiMCkgKiAoayArIDEpIC8gKG5nICsgMSkgLSBndyAvIDI7XG4gICAgICAgIC8vIGEgc2xpY2sga2VlcHMgb25seSBTSE9SVCBzaXBlcyBhdCB0aGUgdHdvIHNob3VsZGVyIHJvd3MsIGN1dCBpbiBmcm9tIHRoZSBiYW5kIGVkZ2VcbiAgICAgICAgY29uc3Qgb3V0ZXIgPSBrID09PSAwIHx8IGsgPT09IG5nO1xuICAgICAgICBpZiAoIXRyZWFkZWQgJiYgIW91dGVyKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgeXMwID0gdHJlYWRlZCA/IHkwIDogKGsgPT09IDAgPyB5MCA6IHkxIC0gKHkxIC0geTApICogMC40NSksIHlzMSA9IHRyZWFkZWQgPyB5MSA6IChrID09PSAwID8geTAgKyAoeTEgLSB5MCkgKiAwLjQ1IDogeTEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5zOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0gKChpICsgMC41KSAvIG5zICsgKGsgJSAyKSAqIDAuNSAvIG5zKSAqIHMgKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMDYsIHNsID0gKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA4O1xuICAgICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcsIHlzMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdyArIHNsLCB5czEpOyBjdHgubGluZVRvKHggKyBkeCArIHNsLCB5czEpOyBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gc2hvdWxkZXIgc3RlcCBhdCB0aGUgdG9wIG9mIHRoZSBiYW5kLCBiZWFkIHJpbmdzIGFuZCBtb3VsZCBsaW5lcyBvbiB0aGUgc2lkZXdhbGxzXG4gICAgICBjb25zdCBzaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBiMCAtIGggKiAwLjAzLCAwLCBiMCArIGggKiAwLjAyKTsgc2guYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9LDApYCk7IHNoLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2d2fSwke2d2fSwke2d2fSwwLjQ1KWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHNoOyBjdHguZmlsbFJlY3QoMCwgYjAgLSBoICogMC4wMywgcywgaCAqIDAuMDUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtydn0sJHtydn0sJHtydn0pYDsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuMDQ1LCBzLCBoICogMC4wMTIpOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC45NCwgcywgaCAqIDAuMDEyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7bXZ9LCR7bXZ9LCR7bXZ9KWA7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjExLCBzLCAyKTsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuODgsIHMsIDIpO1xuICAgICAgLy8gd2Vhcjogd2FybSByb2FkIGR1c3Qgb24gdGhlIGxvd2VyIHNob3VsZGVyIGFuZCBzaWRld2FsbCwgZ3JleSBzY3VmZnMgb24gYm90aCBzaG91bGRlcnNcbiAgICAgIGNvbnN0IGRnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliLCAwLCB5YSArIGggKiAwLjYpOyBkZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtkdXN0WzBdfSwke2R1c3RbMV19LCR7ZHVzdFsyXX0sJHtvLmR1c3RBbHBoYSA/PyAwLjM1fSlgKTsgZGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZGc7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjYsIHMsIGggKiAwLjQpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3VmZnMgPz8gMTQpOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpIDwgMC41ID8gYjAgKyAocm5kKCkgLSAwLjMpICogaCAqIDAuMDggOiBiMSArIChybmQoKSAtIDAuNykgKiBoICogMC4wOCwgciA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSksIHYgPSAyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjUpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTsgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuNSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5LCByICogMi4yLCByICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcic7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IGIwICsgcm5kKCkgKiAoYjEgLSBiMCksIHYgPSA2ICsgTWF0aC5yb3VuZChybmQoKSAqIDE0KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOSl9LCR7TWF0aC5yb3VuZCh2ICogMC43NSl9KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAyICsgcm5kKCkgKiA2LCAyICsgcm5kKCkgKiAzKTsgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfTtcbiAgICBzdHJpcCgwLCBzIC8gMiwgdHJ1ZSk7ICAgICAgLy8gdiAwLjUuLjE6IHRyZWFkZWRcbiAgICBzdHJpcChzIC8gMiwgcywgZmFsc2UpOyAgICAgLy8gdiAwLi4wLjU6IHNsaWNrXG4gIH0pO1xufVxuXG4vKiogQSB0YXBlcmVkIGJveDogQm94R2VvbWV0cnkoMSwgaCwgMSkgd2hvc2UgeC96IGFyZSBzY2FsZWQgcGVyIHZlcnRleCBieSB0aGUgZm9vdHByaW50IGludGVycG9sYXRlZFxuICogIGZyb20gKHcwLCBkMCkgYXQgdGhlIGJvdHRvbSB0byAodzEsIGQxKSBhdCB0aGUgdG9wLiBOb3JtYWxzIHJlY29tcHV0ZWQgc28gdGhlIHNsYW50ZWQgZmFjZXMgc2hhZGVcbiAqICBmbGF0LiBgYmAgPSBbY3gsIHlCb3R0b20sIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0uICovXG5mdW5jdGlvbiBmcnVzdHVtKGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBbY3gsIHkwLCBjeiwgdzAsIGQwLCB3MSwgZDEsIGhdID0gYjtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCBoLCAxKTtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSAocC5nZXRZKGkpICsgaCAvIDIpIC8gaDtcbiAgICBwLnNldFgoaSwgcC5nZXRYKGkpICogKHcwICsgKHcxIC0gdzApICogdCkpOyBwLnNldFooaSwgcC5nZXRaKGkpICogKGQwICsgKGQxIC0gZDApICogdCkpO1xuICB9XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgZy50cmFuc2xhdGUoY3gsIHkwICsgaCAvIDIsIGN6KTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogSE9ULURJUCBHQUxWQU5JU0VEIFpJTkM6IGNsb3VkeSB0b25lIGRyaWZ0LCBjcnlzdGFsbGluZSBTUEFOR0xFLCBhbmQgcnVzdCBibGVlZGluZyBmcm9tIHRoZSB3ZWxkcy5cbiAqXG4gKiBUaGlzIGV4aXN0cyBiZWNhdXNlIGBncmltZVRpbGVgIG1lYXN1cmFibHkgY2Fubm90IHNheSBgZ2FsdmFuaXNlZGAuIE1lYXN1cmVkIG9uIHRoZSBjcm93ZFxuICogYmFycmllcidzIHBsYXRlIGFnYWluc3QgaXRzIGZpcnN0IGJ1aWxkLCBvdmVyIG1hdGNoZWQgZmxhdCBwYW5lbCBjcm9wczogdGhlIHBsYXRlIHJlYWRzIG1lYW4gbHVtYVxuICogMTU3LTE1OSB3aXRoIHNkIDEyLTE2IGFuZCBhIHA1Li5wOTUgc3BhbiBvZiB+NDIsIGFuZCB0aGUgcmVuZGVyIHJlYWQgbWVhbiAxNDIgd2l0aCBzZCA4LTEwIGFuZCBhXG4gKiBzcGFuIG9mIH4yMSAtLSBoYWxmIHRoZSB0b25hbCB2YXJpYXRpb24sIGFuZCBDTElQUEVEIGF0IHRoZSB0b3AgKHA3NSA9IHA5NSA9IDE0NywgdGhlIHRpbGUgZG9pbmdcbiAqIG5vdGhpbmcgYXQgYWxsIG92ZXIgdGhlIHVwcGVyIGhhbGYgb2YgdGhlIHBhbmVsKS4gQSBnYWx2YW5pc2VkIHN1cmZhY2UgaXMgbm90IGRpcnQgb24gZ3JleSBwYWludDpcbiAqIGl0IGlzIGEgZnJvemVuIGNyeXN0YWwgc3RydWN0dXJlLCBicmlnaHQgaXJyZWd1bGFyIHNwYW5nbGUgZmFjZXRzIHN0YW5kaW5nIEFCT1ZFIHRoZSBiYXNlIHRvbmVcbiAqIHdpdGggZHVsbCBncmV5LWJyb3duIGRyaWZ0IGJldHdlZW4gdGhlbSwgYW5kIHRoZSBicmlnaHRlc3QgZmlmdGggb2YgaXQgaXMgdGhlIHBhcnQgdGhhdCByZWFkcy5cbiAqXG4gKiBBIGNhbnZhcyB0aWxlIGlzIGJvdW5kIGFzIGEgTVVMVElQTFkgbWFwLCBzbyBpdCBjYW4gb25seSBldmVyIGRhcmtlbiAtLSB3aGljaCBpcyB3aHkgdGhlIHNwcmVhZFxuICogd2FzIG9uZS1zaWRlZC4gVGhlIHRpbGUgaXMgdGhlcmVmb3JlIGF1dGhvcmVkIGFyb3VuZCBhIGBtaWRgIG11bHRpcGxpZXIgd2VsbCBiZWxvdyAxIGFuZCB0aGVcbiAqIGNhbGxlciByYWlzZXMgdGhlIGJhc2UgYWxiZWRvIGJ5IDEvbWlkOiB0aGUgc3BhbmdsZSB0aGVuIHJlYWNoZXMgYmFjayB1cCB0byB0aGUgYmFzZSB3aGlsZSB0aGVcbiAqIGRyaWZ0IGZhbGxzIGF3YXkgYmVsb3cgaXQsIGFuZCB0aGUgc3VyZmFjZSB2YXJpZXMgaW4gQk9USCBkaXJlY3Rpb25zIGFib3V0IGl0cyBtZWFuLiBBdXRob3IgdGhlXG4gKiBhbGJlZG8gZm9yIHRoYXQsIG9yIHRoZSBwcm9wIHNoaXBzIGFzIGJyaWdodCBhcyB0aGUgc3BhbmdsZSBldmVyeXdoZXJlLlxuICpcbiAqIGBydXN0QmFuZGAgYmxlZWRzIGEgZGVzYXR1cmF0ZWQgYnJvd24gZG93biBmcm9tIHRoZSB0b3AgYW5kIHVwIGZyb20gdGhlIGJvdHRvbSAtLSB0aGUgdHdvIHBsYWNlcyBhXG4gKiBiYXJyaWVyJ3Mgd2VsZHMgYXJlIC0tIGJlY2F1c2UgcnVzdCBvbiBnYWx2YW5pc2VkIHN0ZWVsIHN0YXJ0cyBhdCBhIHdlbGQsIHdoZXJlIHRoZSB6aW5jIHdhc1xuICogYnVybnQgb2ZmLCBhbmQgUlVOUy4gVGhlIHBsYXRlJ3MgcnVzdCBtZWFzdXJlcyAjODI2ZTU4IG92ZXIgMi4yJSBvZiB0aGUgZnJhbWU6IGEgd2FzaCwgbm90IHRoZVxuICogb3JhbmdlIHBvbGthIGRvdHMgYSBibG90Y2ggdGlsZSBnaXZlcy5cbiAqL1xuZnVuY3Rpb24gemluY1RpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBtaWQgPSBvLm1pZCA/PyAwLjg4LCBsbyA9IG8ubG8gPz8gMC43NDtcbiAgICBjb25zdCBnID0gKHY6IG51bWJlcikgPT4geyBjb25zdCBiID0gTWF0aC5yb3VuZCgyNTUgKiB2KTsgcmV0dXJuIGByZ2IoJHtifSwke2J9LCR7Yn0pYDsgfTtcbiAgICBjdHguZmlsbFN0eWxlID0gZyhtaWQpOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gY2xvdWR5IGRyaWZ0OiBicm9hZCBzb2Z0IGJsb2JzIGJvdGggYWJvdmUgYW5kIGJlbG93IHRoZSBtaWQsIHRoZSBtb3R0bGUgYSBkaXAgbGVhdmVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gNjApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDYgKyBybmQoKSAqIDAuMTYpO1xuICAgICAgY29uc3QgdXAgPSBybmQoKSA8IDAuNTtcbiAgICAgIGNvbnN0IHYgPSB1cCA/IG1pZCArICgxIC0gbWlkKSAqICgwLjM1ICsgcm5kKCkgKiAwLjUpIDogbG8gKyAobWlkIC0gbG8pICogcm5kKCk7XG4gICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke28uY2xvdWRBbHBoYSA/PyAwLjI4fSlgKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLDAsMCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gU1BBTkdMRTogaXJyZWd1bGFyIGJyaWdodCBjcnlzdGFsIGZhY2V0cywgYW5ndWxhciByYXRoZXIgdGhhbiByb3VuZCwgdXAgdG8gdGhlIGJhc2UgdG9uZS5cbiAgICAvLyBTbWFsbCBhbmQgZGVuc2UgLS0gbGFyZ2Ugb25lcyByZWFkIGFzIHNwbGFzaGVzIG9mIHdoaXRlIHBhaW50LCB3aGljaCBpcyB0aGUgZmFpbHVyZSBtb2RlIGFcbiAgICAvLyBibG90Y2ggdGlsZSBmYWxscyBpbnRvLlxuICAgIC8vIENMVVNURVJFRCwgbm90IHNjYXR0ZXJlZC4gVW5pZm9ybWx5IHNwcmVhZCBmYWNldHMgcmVhZCBhcyBzbm93IG9yIGR1c3Qgc3BlY2tzIC0tIGlzb2xhdGVkXG4gICAgLy8gYnJpZ2h0IGRvdHMgb24gYSBzbW9vdGggZmllbGQsIHdoaWNoIGlzIHdoYXQgdGhlIHNlY29uZCB0dW5pbmcgc2hpcHBlZCBhbmQgd2hhdCB0aGUgcGxhdGUgaGFzXG4gICAgLy8gbm9uZSBvZi4gUmVhbCBzcGFuZ2xlIGJsb29tczogdGhlIGNyeXN0YWxzIG51Y2xlYXRlIHRvZ2V0aGVyLCBzbyB0aGUgc3VyZmFjZSBpcyBwYXRjaGVzIG9mXG4gICAgLy8gZGVuc2UgYnJpZ2h0IGZhY2V0cyB3aXRoIHF1aWV0IGdyZXkgYmV0d2VlbiB0aGVtLiBgc3BhbmdsZUNsdXN0ZXJzYCBjZW50cmVzIGNhcnJ5XG4gICAgLy8gYDEgLSBzcGFuZ2xlTG9vc2VgIG9mIHRoZSBmYWNldHMsIGRpc3RyaWJ1dGVkIHNxcnQtdW5pZm9ybWx5IHNvIGVhY2ggYmxvb20gaXMgZGVuc2UgYXQgaXRzXG4gICAgLy8gbWlkZGxlIGFuZCB0aGlucyBhdCBpdHMgZWRnZTsgdGhlIHJlc3Qgc3RheSBzY2F0dGVyZWQgc28gdGhlIGZpZWxkIGlzIG5ldmVyIGJhbGQuXG4gICAgY29uc3QgY2wgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBvLnNwYW5nbGVDbHVzdGVycyA/PyAwIH0sICgpID0+IFtybmQoKSAqIHMsIHJuZCgpICogcywgcyAqICgwLjA0ICsgcm5kKCkgKiAwLjEwKV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BhbmdsZSA/PyA1MjApOyBpKyspIHtcbiAgICAgIGxldCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzO1xuICAgICAgaWYgKGNsLmxlbmd0aCAmJiBybmQoKSA+IChvLnNwYW5nbGVMb29zZSA/PyAwLjI1KSkge1xuICAgICAgICBjb25zdCBjID0gY2xbKHJuZCgpICogY2wubGVuZ3RoKSB8IDBdLCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjWzJdO1xuICAgICAgICB4ID0gY1swXSArIE1hdGguY29zKGEpICogZDsgeSA9IGNbMV0gKyBNYXRoLnNpbihhKSAqIGQ7XG4gICAgICB9XG4gICAgICBjb25zdCByID0gcyAqICgoby5zcGFuZ2xlTWluID8/IDAuMDA0KSArIE1hdGgucG93KHJuZCgpLCAyKSAqIChvLnNwYW5nbGVNYXggPz8gMC4wMTMpKTtcbiAgICAgIGNvbnN0IHYgPSBtaWQgKyAoMSAtIG1pZCkgKiAoMC41ICsgcm5kKCkgKiAwLjUpO1xuICAgICAgY29uc3QgayA9IDQgKyBNYXRoLmZsb29yKHJuZCgpICogMyk7XG4gICAgICBjb25zdCBhMCA9IHJuZCgpICogTWF0aC5QSSAqIDI7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHsoby5zcGFuZ2xlQWxwaGEgPz8gMC4yKSArIHJuZCgpICogKG8uc3BhbmdsZUFscGhhVmFyID8/IDAuMzUpfSlgO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGs7IGorKykge1xuICAgICAgICAgIGNvbnN0IGEgPSBhMCArIGogKiBNYXRoLlBJICogMiAvIGssIHJyID0gciAqICgwLjU1ICsgcm5kKCkgKiAwLjc1KTtcbiAgICAgICAgICBjb25zdCBweCA9IHggKyBkeCArIE1hdGguY29zKGEpICogcnIsIHB5ID0geSArIGR5ICsgTWF0aC5zaW4oYSkgKiByciAqIDAuODtcbiAgICAgICAgICBpZiAoaiA9PT0gMCkgY3R4Lm1vdmVUbyhweCwgcHkpOyBlbHNlIGN0eC5saW5lVG8ocHgsIHB5KTtcbiAgICAgICAgfVxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGRhcmsgZHJpcCBzdHJlYWtzIHJ1bm5pbmcgZG93bjogd2VhdGhlcmluZywgYW5kIHdoYXQgZ2l2ZXMgYSBmbGF0IHBhbmVsIGEgdmVydGljYWwgcmVhZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAzMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMCwgeTAgPSBybmQoKSAqIHMgKiAwLjUsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjcpO1xuICAgICAgY29uc3QgdiA9IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpICogMC42LCBhID0gMC4wNiArIHJuZCgpICogMC4xNDtcbiAgICAgIGNvbnN0IGdyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkwLCAwLCB5MCArIGxlbik7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sMClgKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgwLjI1LCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke2F9KWApO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3I7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkwLCB3LCBsZW4pO1xuICAgIH1cbiAgICAvLyBGSU5FIEdSQUlOIGFuZCBTQ1JBVENIRVMuIE1lYXN1cmVkIGFnYWluc3QgdGhlIHBsYXRlIGF0IG1hdGNoZWQgbWFnbmlmaWNhdGlvbiwgdGhpcyBpcyB0aGVcbiAgICAvLyBsYXllciB0aGUgZmlyc3QgdHVuaW5nIHdhcyBtaXNzaW5nIGVudGlyZWx5OiB0aGUgcGxhdGUncyB6aW5jIGlzIHNjcmF0Y2h5IGF0IDEtMiBweCBldmVyeXdoZXJlXG4gICAgLy8gLS0gZHJhd2luZyBtYXJrcywgaGFuZGxpbmcgc2N1ZmZzLCB0aGUgY3J5c3RhbCBib3VuZGFyaWVzIHRoZW1zZWx2ZXMgLS0gYW5kIHdpdGhvdXQgaXQgdGhlXG4gICAgLy8gZHJpZnQgYW5kIHRoZSBzcGFuZ2xlIHJlYWQgYXMgc29mdCBzbm93IG9uIHNtb290aCBncmV5IGhvd2V2ZXIgd2VsbCB0aGUgSElTVE9HUkFNIG1hdGNoZXMuIFR3b1xuICAgIC8vIGNyb3BzIHdpdGggaWRlbnRpY2FsIG1lYW4sIHNkIGFuZCBwZXJjZW50aWxlcyBjYW4gbG9vayBub3RoaW5nIGFsaWtlOyB0aGUgc3RhdGlzdGljIHRoYXRcbiAgICAvLyBzZXBhcmF0ZXMgdGhlbSBpcyBzcGF0aWFsIGZyZXF1ZW5jeSwgc28gdHVuZSB0aGlzIGJ5IGV5ZSBhZ2FpbnN0IGEgbWF0Y2hlZCBjcm9wLCBub3QgYnkgc2QuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogMiwgaCA9IDEgKyBybmQoKSAqIDI7XG4gICAgICBjb25zdCB1cCA9IHJuZCgpIDwgMC41O1xuICAgICAgY29uc3QgdiA9IHVwID8gbWlkICsgKDEgLSBtaWQpICogKDAuNCArIHJuZCgpICogMC42KSA6IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7MC4xMCArIHJuZCgpICogMC4zMH0pYDtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5ICsgZHksIHcsIGgpO1xuICAgIH1cbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3JhdGNoZXMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjAwNiArIHJuZCgpICogMC4wNTUpLCBhID0gKHJuZCgpIC0gMC41KSAqIDAuNyArIE1hdGguUEkgLyAyO1xuICAgICAgY29uc3QgdXAgPSBybmQoKSA8IDAuNDU7XG4gICAgICBjb25zdCB2ID0gdXAgPyBtaWQgKyAoMSAtIG1pZCkgKiAoMC41ICsgcm5kKCkgKiAwLjUpIDogbG8gKyAobWlkIC0gbG8pICogcm5kKCkgKiAwLjg7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwkezAuMTAgKyBybmQoKSAqIDAuMjh9KWA7XG4gICAgICBjdHgubGluZVdpZHRoID0gMC43ICsgcm5kKCkgKiAxLjY7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5ICsgZHkpO1xuICAgICAgICBjdHgubGluZVRvKHggKyBkeCArIE1hdGguY29zKGEpICogbGVuLCB5ICsgZHkgKyBNYXRoLnNpbihhKSAqIGxlbik7IGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUlVTVCBmcm9tIHRoZSB3ZWxkczogYSB3YXNoIGluIHRoZSB0b3AgYW5kIGJvdHRvbSBiYW5kcywgcGx1cyBydW5zIHRyYWlsaW5nIG91dCBvZiBpdFxuICAgIGlmIChvLnJ1c3QpIHtcbiAgICAgIGNvbnN0IGMgPSBvLnJ1c3QsIGJhbmQgPSBvLnJ1c3RCYW5kID8/IDAuMTY7XG4gICAgICBjb25zdCByZ2JzID0gYCR7TWF0aC5yb3VuZCgyNTUgKiBjWzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIGNbMV0pfSwke01hdGgucm91bmQoMjU1ICogY1syXSl9YDtcbiAgICAgIC8vIHRoZSB0d28gYmFuZHMgYXJlIFNFUEFSQVRFOiBvbiBhIGJhcnJpZXIgdGhlIGdyb3VuZCBlbmQgY2FycmllcyB0aGUgZmVldCwgdGhlIHN0dWIgd2VsZHMgYW5kXG4gICAgICAvLyBldmVyeSBydW4gb2ZmIHRoZW0sIGFuZCB0aGUgdG9wIGVuZCBjYXJyaWVzIG9ubHkgdGhlIHJhaWwncyBvd24gd2VsZHMuIE9uZSBzeW1tZXRyaWMgYmFuZFxuICAgICAgLy8gd2lkZSBlbm91Z2ggdG8gcmVhY2ggdGhlIHJhaWwgd2VsZHMgYXQgdiA9IDAuMjYgYWxzbyB3YXNoZXMgdGhlIHdob2xlIHVwcGVyIHRoaXJkIG9mIGV2ZXJ5XG4gICAgICAvLyBwYW5lbCwgd2hpY2ggdGhlIHBsYXRlIGRvZXMgbm90IGhhdmUuXG4gICAgICBmb3IgKGNvbnN0IFtlZGdlLCBkaXIsIGJdIG9mIFtbMCwgMSwgby5ydXN0QmFuZFRvcCA/PyBiYW5kXSwgW3MsIC0xLCBiYW5kXV0gYXMgbnVtYmVyW11bXSkge1xuICAgICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBlZGdlLCAwLCBlZGdlICsgZGlyICogcyAqIGIpO1xuICAgICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2JzfSwke28ucnVzdFdhc2ggPz8gMC4zMH0pYCk7IGdyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYnN9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBncjsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ydXN0UnVucyA/PyAyMik7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDE0O1xuICAgICAgICBjb25zdCB0b3AgPSBybmQoKSA8IDAuNTtcbiAgICAgICAgY29uc3QgeTAgPSB0b3AgPyAwIDogcyAtIHMgKiBiYW5kICogKDAuMyArIHJuZCgpKTtcbiAgICAgICAgY29uc3QgbGVuID0gcyAqICgwLjEwICsgcm5kKCkgKiAwLjMyKTtcbiAgICAgICAgY29uc3QgZ3IgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdic30sJHswLjE4ICsgcm5kKCkgKiAwLjMyfSlgKTsgZ3IuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdic30sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkwLCB3LCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY2Fub3B5LW1vZHVsZSBoZWxwZXJzXG4gKiBUaGUgZml2ZSBDQU5PUFkgTU9EVUxFUyAtLSBuaXBhIHRoYXRjaCwgdmV0aXZlciB0aGF0Y2gsIHNwbGl0IGJhbWJvbywgY29ycnVnYXRlZCBtZXRhbCxcbiAqIHRhcnBhdWxpbiAtLSBhcmUgb25lIGZhbWlseTogZm91ciBjb3JuZXIgcG9zdHMgaW5zaWRlIGEgNCB4IDQgbSBtb2R1bGUsIGEgaGVhZCBmcmFtZSwgYW5kIGEgcm9vZlxuICogd2hvc2UgbWF0ZXJpYWwgaXMgdGhlIHdob2xlIGlkZW50aXR5LiBXaGF0IHRoZXkgbmVlZCBiZXlvbmQgdGhlIHN0cmVldC1wcm9wIHZvY2FidWxhcnkgaXMgYVxuICogcm9vZmluZyB0aWxlIHBlciBtYXRlcmlhbCBhbmQgdGhlIGN1bG0gbWFwcGluZyBhIHJvdW5kIGJhbWJvbyBwb2xlIHdhbnRzLlxuICpcbiAqIGBjdWxtVVZgLCBgZ3JhaW5MaW5lc2AsIGB3ZWF0aGVyUGF0Y2hlc2AsIGBtb3VsZENsdXN0ZXJzYCBhbmQgYGN1bG1UaWxlYCBhcmUgcG9ydGVkIFZFUkJBVElNIGZyb21cbiAqIHNjcmF0Y2gvX2ZlbmNlL2ZlbmNlLmhlbHBlcnMudG1wbCwgd2hlcmUgdGhleSB3ZXJlIHdyaXR0ZW4gZm9yIHRoZSBiYW1ib28gZmVuY2UgcGFuZWwgYW5kIHdoZXJlXG4gKiB0aGUgcmVhc29uaW5nIGJlaGluZCBldmVyeSBudW1iZXIgaXMgcmVjb3JkZWQuIFRoZXkgYXJlIGNvcGllZCByYXRoZXIgdGhhbiBzaGFyZWQgYmVjYXVzZSB0aGUgdHdvXG4gKiBmYW1pbGllcyBrZWVwIHNlcGFyYXRlIHRlbXBsYXRlIHNldHM7IGEgdGhpcmQgZmFtaWx5IHdhbnRpbmcgdGhlbSBzaG91bGQgbW92ZSB0aGVtIHVwIGludG9cbiAqIGhlbHBlcnMudG1wbCByYXRoZXIgdGhhbiBjb3B5IHRoZW0gYSBzZWNvbmQgdGltZS5cbiAqL1xuXG4vKiogQ1VMTSBVVnM6IHUgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlIGFuZCB2IGFsb25nIHRoZSBsZW5ndGgsIGJvdGggaW4gbWV0cmVzIG92ZXIgYHNjYWxlYCwgc28gYVxuICogIGN1bG0gdGlsZSdzIG5vZGUgcmluZ3MgY3Jvc3MgdGhlIGN1bG0gYXQgcmVhbCBzcGFjaW5nIHdoaWNoZXZlciB3YXkgdGhlIGN5bGluZGVyIGlzIHRoZW4gcm90YXRlZC5cbiAqICBBcHBseSBCRUZPUkUgcm90YXRlL3RyYW5zbGF0ZS4gYHZPZmZgIHBoYXNlcyB0aGUgdGlsZSBhbG9uZyB0aGUgY3VsbSBzbyBubyB0d28gY3VsbXMgKG9yIGEgY29yZFxuICogIGNvbGxhcikgcmluZyBhdCB0aGUgc2FtZSBzdGF0aW9uLiAqL1xuZnVuY3Rpb24gY3VsbVVWKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCByOiBudW1iZXIsIGg6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdk9mZiA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gIGNvbnN0IGt1ID0gKDIgKiBNYXRoLlBJICogcikgLyBzY2FsZSwga3YgPSBoIC8gc2NhbGU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIGt1LCB1di5nZXRZKGkpICoga3YgKyB2T2ZmKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBGaW5lIGxvbmdpdHVkaW5hbCBncmFpbiBiZXR3ZWVuIHkwIGFuZCB5MSBhY3Jvc3MgYSBiYW5kIHgwLi54MTogbWFueSBoYWlybGluZXMsIG1vc3RseSBhIGRhcmtcbiAqICBmaWJyZSB0b25lLCBhIGZldyBibGVhY2hlZCwgc28gdGhlIHN1cmZhY2UgcmVhZHMgYXMgZmlicm91cyBiYW1ib28gcmF0aGVyIHRoYW4gcGFpbnQuICovXG5mdW5jdGlvbiBncmFpbkxpbmVzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBybmQ6ICgpID0+IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgbjogbnVtYmVyLCBkYXJrOiBzdHJpbmcsIGxpZ2h0OiBzdHJpbmcsIGFNYXg6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykge1xuICAgIGNvbnN0IHggPSB4MCArIHJuZCgpICogKHgxIC0geDApLCBhID0gMC4wNCArIHJuZCgpICogYU1heCwgdyA9IHJuZCgpIDwgMC43NSA/IDEgOiAxLjY7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cm5kKCkgPCAwLjcyID8gZGFyayA6IGxpZ2h0fSwke2EudG9GaXhlZCgzKX0pYDtcbiAgICBjdHguZmlsbFJlY3QoeCwgeTAsIHcsIHkxIC0geTApO1xuICB9XG59XG5cbi8qKiBTb2Z0IGNsb3VkeSB3ZWF0aGVyaW5nIGFsb25nIHRoZSBmaWJyZSBkaXJlY3Rpb246IGxlbmd0aHdpc2UgcGF0Y2hlcyBvZiB3YXJtIGJyb3duLWdyZXkgKG9sZFxuICogIGxpZ25pbiBzaG93aW5nIHRocm91Z2ggdGhlIGJsZWFjaCkgYW5kIG9mIG5lYXItd2hpdGUgKHN1bi1ibGVhY2hlZCBmYWNlcyksIHNvIHRoZSB0b25lIGRyaWZ0c1xuICogIHRoZSB3YXkgd2VhdGhlcmVkIGJhbWJvbyBkb2VzIGluc3RlYWQgb2Ygc2l0dGluZyBhdCBvbmUgZ3JleS4gVmVydGljYWwgPSBhbG9uZyB0aGUgZmlicmUuICovXG5mdW5jdGlvbiB3ZWF0aGVyUGF0Y2hlcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcm5kOiAoKSA9PiBudW1iZXIsIHM6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgbjogbnVtYmVyLCB3YXJtQTogbnVtYmVyLCBibGVhY2hBOiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICBjb25zdCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMTIgKyBybmQoKSAqIDAuNDUpLCB3YXJtID0gcm5kKCkgPCAwLjU7XG4gICAgY29uc3QgYyA9IHdhcm0gPyAnMTEyLDEwMCw4OCcgOiAnMjU1LDI1NSwyNTUnLCBhID0gd2FybSA/IHdhcm1BICogKDAuNCArIHJuZCgpICogMC42KSA6IGJsZWFjaEEgKiAoMC40ICsgcm5kKCkgKiAwLjYpO1xuICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHksIDAsIHkgKyBsZW4pO1xuICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2N9LDApYCk7IGcyLmFkZENvbG9yU3RvcCgwLjM1LCBgcmdiYSgke2N9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjY1LCBgcmdiYSgke2N9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2N9LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgwLCB5ICsgZHksIHgxIC0geDAsIGxlbik7XG4gIH1cbn1cblxuLyoqIE1vdWxkOiBjbHVzdGVycyBvZiBzbWFsbCBkYXJrIHNwZWNrcyAoYSBmZXcgZG96ZW4gZWFjaCksIHRoZSB3YXkgYmxhY2sgbW91bGQgc2l0cyBvbiBvdXRkb29yXG4gKiAgYmFtYm9vIC0tIGRlbnNlIGF0IGEgZmV3IHNwb3RzLCBhYnNlbnQgZWxzZXdoZXJlLiBBbHBoYSBjYXBwZWQgc28gdGhlIGRhcmtlc3Qgc3BlY2sgb3ZlciB0aGVcbiAqICBtZWFzdXJlZCBhbGJlZG8gc3RheXMgd2VsbCBjbGVhciBvZiB0aGUgaG9sZSBnYXRlJ3MgbHVtYSA1OC4gV3JhcHMgaW4geS4gKi9cbmZ1bmN0aW9uIG1vdWxkQ2x1c3RlcnMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJuZDogKCkgPT4gbnVtYmVyLCBzOiBudW1iZXIsIHNwb3RzOiBudW1iZXJbXVtdLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCBuOiBudW1iZXIsIGFNYXg6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGNvbnN0IFtjeCwgY3ldIG9mIHNwb3RzKSB7XG4gICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIE1hdGgubWF4KHJ4LCByeSkgKiAwLjgpO1xuICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyOCwyNiwyMiwkeyhhTWF4ICogMC45KS50b0ZpeGVkKDMpfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI4LDI2LDIyLDApJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4LCBjeSArIGR5LCByeCwgcnksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gY3ggKyAocm5kKCkgKyBybmQoKSAtIDEpICogcngsIHkgPSBjeSArIChybmQoKSArIHJuZCgpIC0gMSkgKiByeTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgyOCwyNiwyMiwkeygwLjA4ICsgcm5kKCkgKiBhTWF4KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIDIsIGggPSAxICsgcm5kKCkgKiAzO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCB3LCBoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIENVTE0gdGlsZSBmb3IgdGhlIHdob2xlLWJhbWJvbyBwb3N0IGFuZCByYWlsczogeCBydW5zIEFST1VORCB0aGUgY3VsbSwgeSBBTE9ORyBpdCAoc2VlIGN1bG1VViksXG4gKiAgMC42IG0gb2YgY3VsbSBwZXIgdGlsZS4gVHdvIG5vZGUgcmluZ3MgcGVyIHRpbGUgYXQgaXJyZWd1bGFyIHN0YXRpb25zIC0tIGEgZGFyayBncm9vdmUgdW5kZXIgYVxuICogIHBhbGUgcmFpc2VkIHJpZGdlLCB0aGUgZ3JhaW4gYnJlYWtpbmcgYXQgZWFjaCAtLSB3aXRoIGZpbmUgbG9uZ2l0dWRpbmFsIGdyYWluIGJldHdlZW4gdGhlbSwgYVxuICogIGxvbmcgZHJ5aW5nIHNwbGl0LCBsZW5ndGh3aXNlIHdlYXRoZXJpbmcgcGF0Y2hlcyBhbmQgYmxhY2sgbW91bGQgZ2F0aGVyZWQganVzdCBiZWxvdyBlYWNoIG5vZGUsXG4gKiAgYXMgaW4gdGhlIHBsYXRlJ3MgcG9zdCBhbmQgcmFpbCBjcm9wcy4gQSBtdWx0aXBsaWVyIG9uIHRoZSBtZWFzdXJlZCBjdWxtIGdyZXkuICovXG5mdW5jdGlvbiBjdWxtVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBEQVJLID0gJzkyLDc4LDYyJywgTElHSFQgPSAnMjU1LDI1NSwyNTUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2YwZWZlYyc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBhIHNvZnQgdG9uZSBkcmlmdCBhcm91bmQgdGhlIGN1bG0sIHNvIHRoZSByb3VuZCBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBjb25zdCBnYSA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBzLCAwKTtcbiAgICBnYS5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMTAwLDkyLDg0LDAuMTIpJyk7IGdhLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTApJyk7IGdhLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMDAsOTIsODQsMC4xMiknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ2E7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgMTQsIDAuMTIsIDAuMzApO1xuICAgIC8vIG5vZGUgc3RhdGlvbnM6IHR3byBwZXIgdGlsZSwgaXJyZWd1bGFyLCBuZXZlciB3aXRoaW4gMC4xOCBvZiBlYWNoIG90aGVyIG9yIHRoZSB3cmFwXG4gICAgY29uc3Qgbm9kZXMgPSBbcyAqICgwLjIwICsgcm5kKCkgKiAwLjEwKSwgcyAqICgwLjY2ICsgcm5kKCkgKiAwLjEyKV07XG4gICAgLy8gZ3JhaW4gaW4gc2VnbWVudHMgYmV0d2VlbiB0aGUgbm9kZXMgc28gaXQgYnJlYWtzIGF0IGVhY2ggcmluZ1xuICAgIGNvbnN0IHN0YXRpb25zID0gWzAsIC4uLm5vZGVzLCBzXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSArIDEgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykgZ3JhaW5MaW5lcyhjdHgsIHJuZCwgMCwgcywgc3RhdGlvbnNbaV0sIHN0YXRpb25zW2kgKyAxXSwgMjYwLCBEQVJLLCBMSUdIVCwgMC4yNik7XG4gICAgLy8gYSBjb3VwbGUgb2YgbG9uZyBkcnlpbmcgc3BsaXRzIGFsb25nIHRoZSBmaWJyZVxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMjsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMjUgKyBybmQoKSAqIDAuNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzgsMzIsMjYsMC41NSknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjQsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xOCknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNCwgeSArIGR5LCAxLCBsZW4pO1xuICAgIH1cbiAgICAvLyB0aGUgbm9kZSByaW5nc1xuICAgIGZvciAoY29uc3QgeSBvZiBub2Rlcykge1xuICAgICAgY29uc3QgZ3MgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSAtIHMgKiAwLjAzLCAwLCB5KTtcbiAgICAgIGdzLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwKScpOyBncy5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMC4yMiknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnczsgY3R4LmZpbGxSZWN0KDAsIHkgLSBzICogMC4wMywgcywgcyAqIDAuMDMpOyAgICAgICAgICAvLyBzaGFkZSB1cCB0byB0aGUgcmluZ1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUyLDQ0LDM2LDAuNjIpJzsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIDIuNSk7ICAgICAgICAvLyB0aGUgZ3Jvb3ZlXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4zNCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDIuNSwgcywgNCk7IC8vIHRoZSByYWlzZWQgc2hlYXRoIHJpZGdlXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNjAsNTAsNDAsMC4zMCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDYuNSwgcywgMS41KTsgIC8vIGl0cyBsb3dlciBlZGdlXG4gICAgICBjb25zdCBnZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5ICsgOCwgMCwgeSArIHMgKiAwLjA1KTtcbiAgICAgIGdkLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwLjIwKScpOyBnZC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnZDsgY3R4LmZpbGxSZWN0KDAsIHkgKyA4LCBzLCBzICogMC4wNSk7XG4gICAgfVxuICAgIC8vIG1vdWxkIGdhdGhlcnMganVzdCBiZWxvdyB0aGUgbm9kZXMgYW5kIGluIGEgY291cGxlIG9mIGxvb3NlIHBhdGNoZXNcbiAgICBjb25zdCBzcG90czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAoY29uc3QgeSBvZiBub2RlcykgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgeSArIHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSldKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCBybmQoKSAqIHNdKTtcbiAgICBtb3VsZENsdXN0ZXJzKGN0eCwgcm5kLCBzLCBzcG90cywgcyAqIDAuMTAsIHMgKiAwLjA2LCA5MCwgMC4zMCk7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogVEhBVENIIHRpbGUsIGZvciBhIHJvb2YgbWFwcGVkIHdpdGggV09STEQgVVZzIHNvIHUgcnVucyBhbG9uZyB0aGUgcmlkZ2UgYW5kIHYgdXAgdGhlIHNsb3BlLlxuICpcbiAqIFRoYXRjaCBpcyBsYWlkIGluIENPVVJTRVM6IGVhY2ggY291cnNlIGlzIGEgYnVuZGxlIG9mIHN0ZW1zIHBlZ2dlZCB0byBhIHB1cmxpbiB3aXRoIGl0cyBidXR0c1xuICogaGFuZ2luZyBvdmVyIHRoZSBjb3Vyc2UgYmVsb3csIHNvIHdoYXQgYSB2aWV3ZXIgYWN0dWFsbHkgcmVzb2x2ZXMgYXQgcHJvcCBkaXN0YW5jZSBpcyBhIHN0YWNrIG9mXG4gKiBob3Jpem9udGFsIGJhbmRzIHdpdGggYSBzaGFkb3cgbGluZSB1bmRlciBlYWNoIGJ1dHQsIGFuZCBhIGZpYnJlIHRleHR1cmUgcnVubmluZyBkb3duIHRoZSBzbG9wZVxuICogaW5zaWRlIHRoZW0uIE1vZGVsbGluZyB0aGUgc3RlbXMgaXMgd2hhdCB0aGUgcmVnaXN0cnkgbm90ZXMgZm9yYmlkOyB0aGlzIGlzIHdoZXJlIHRoYXQgZGV0YWlsXG4gKiBnb2VzIGluc3RlYWQuXG4gKlxuICogT25lIHRpbGUgaXMgYGNvdXJzZXNgIGNvdXJzZXMgdGFsbC4gVGhlIGtub2JzIGFyZSB3aGF0IHNlcGFyYXRlcyB0aGUgdHdvIHRoYXRjaGVzIG9uIHRoZSBwbGF0ZXM6XG4gKiAgIG5pcGEgICAgIGJyb2FkIGZsYXQgcGFsbSBibGFkZXMgLS0gZmV3IHdpZGUgc3Ryb2tlcyAoYHN0ZW1XYCAzLTcgcHgpLCBhIHdpZGUgdG9uYWwgYHNwcmVhZGAsXG4gKiAgICAgICAgICAgIGEgZGVlcGx5IFJBR0dFRCBidXR0IGxpbmUgYW5kIG9jY2FzaW9uYWwgbWlzc2luZyBibGFkZXMuXG4gKiAgIHZldGl2ZXIgIGNvbWJlZCBncmFzcyAtLSBodW5kcmVkcyBvZiBoYWlybGluZXMsIGEgbmFycm93IHNwcmVhZCwgYW4gYWxtb3N0IHN0cmFpZ2h0IGJ1dHQuXG4gKiBgbW9zc2AgbXVsdGlwbGllcyBhIGdyZWVuIGNhc3QgaW50byBzY2F0dGVyZWQgcGF0Y2hlczogdGhlIHRpbGUgaXMgYSBNVUxUSVBMSUVSIG9uIGEgcGFsZSBzdHJhd1xuICogYWxiZWRvLCBhbmQgYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4sIHNvIGdyZWVuIGhhcyB0byBhcnJpdmUgYXMgXCJsZXNzIHJlZCBhbmQgYmx1ZVwiIGFuZCBuZXZlclxuICogYXMgYSBwYWludGVkIGdyZWVuLiBOb3RoaW5nIGhlcmUgZ29lcyBiZWxvdyAwLjQyIG9mIHRoZSBhbGJlZG8sIHdoaWNoIGtlZXBzIHRoZSBkYXJrZXN0IHRleGVsIG9mXG4gKiBhIHN0cmF3IGF0IGx1bWEgfjE1MCB3ZWxsIGNsZWFyIG9mIHRoZSBzaWxob3VldHRlIGdhdGUncyBiYWNrZHJvcCBiYW5kLlxuICovXG5mdW5jdGlvbiB0aGF0Y2hUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgbmM6IG51bWJlciA9IG8uY291cnNlcyA/PyA0LCBjaCA9IHMgLyBuYztcbiAgICBjb25zdCBzdGVtczogbnVtYmVyID0gby5zdGVtcyA/PyAyNjAsIHNwcmVhZDogbnVtYmVyID0gby5zcHJlYWQgPz8gMC4xMjtcbiAgICBjb25zdCB3TWluOiBudW1iZXIgPSBvLnN0ZW1XPy5bMF0gPz8gMSwgd01heDogbnVtYmVyID0gby5zdGVtVz8uWzFdID8/IDI7XG4gICAgY29uc3QgcmFnZ2VkOiBudW1iZXIgPSBvLnJhZ2dlZCA/PyAwLjA2OyAgICAgICAgICAgICAgICAgLy8gYnV0dC1saW5lIHdhdmluZXNzLCBhcyBhIHNoYXJlIG9mIGNoXG4gICAgY29uc3QgW3NyLCBzZywgc2JdOiBudW1iZXJbXSA9IG8uc3RlbVJnYiA/PyBbMTIwLCAxMDYsIDg0XTsgICAvLyB0aGUgZGFyayBibGFkZSB0aW50OyBuaXBhIGlzIGdyZXllciB0aGFuIGdyYXNzXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuXG4gICAgLy8gdGhlIGJ1dHQgbGluZSBvZiBlYWNoIGNvdXJzZSwgaml0dGVyZWQgcGVyIGNvbHVtbiBhbmQgU0hBUkVEIHdpdGggdGhlIGNvdXJzZSBhYm92ZSBzbyB0aGVcbiAgICAvLyBzaGFkb3cgYW5kIHRoZSBibGFkZXMgYWdyZWUgb24gd2hlcmUgdGhlIGVkZ2UgaXNcbiAgICBjb25zdCBidXR0czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDw9IG5jOyBjKyspIHtcbiAgICAgIGNvbnN0IHJvdzogbnVtYmVyW10gPSBbXTtcbiAgICAgIGxldCB5ID0gMDtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDw9IHM7IHgrKykge1xuICAgICAgICBpZiAoeCAlIE1hdGgubWF4KDIsIE1hdGgucm91bmQocyAvIDQ4KSkgPT09IDApIHkgPSAocm5kKCkgKiAyIC0gMSkgKiByYWdnZWQgKiBjaDtcbiAgICAgICAgcm93LnB1c2goYyAqIGNoICsgeSk7XG4gICAgICB9XG4gICAgICBidXR0cy5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBuYzsgYysrKSB7XG4gICAgICBjb25zdCB5MCA9IGMgKiBjaDtcbiAgICAgIC8vIHRoZSBjb3Vyc2UncyBvd24gdG9uZTogdGhhdGNoIHdlYXRoZXJzIGNvdXJzZSBieSBjb3Vyc2UsIHRoZSBsb3dlciBvbmVzIGdyZXllclxuICAgICAgY29uc3QgdCA9IDEgLSBzcHJlYWQgKiBybmQoKTtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHQpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOTg1KX0sJHtNYXRoLnJvdW5kKHYgKiAwLjk1KX0pYDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCB5MCAtIHJhZ2dlZCAqIGNoIC0gMSwgcywgY2ggKyAyICogcmFnZ2VkICogY2ggKyAyKTtcbiAgICAgIC8vIHN0ZW1zIHJ1bm5pbmcgRE9XTiB0aGUgc2xvcGUgaW5zaWRlIHRoZSBjb3Vyc2UsIGVhY2ggYSBsaXR0bGUgcGFzdCBpdHMgYnV0dCBsaW5lXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHN0ZW1zOyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcztcbiAgICAgICAgY29uc3QgdyA9IHdNaW4gKyBybmQoKSAqICh3TWF4IC0gd01pbik7XG4gICAgICAgIGNvbnN0IHRvbmUgPSAxIC0gc3ByZWFkICogKDAuMyArIHJuZCgpICogMC43KTtcbiAgICAgICAgY29uc3QgYSA9IDAuMTggKyBybmQoKSAqIDAuMzI7XG4gICAgICAgIGNvbnN0IGRhcmsgPSBybmQoKSA8IDAuNjI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBkYXJrID8gYHJnYmEoJHtNYXRoLnJvdW5kKHNyICogdG9uZSl9LCR7TWF0aC5yb3VuZChzZyAqIHRvbmUpfSwke01hdGgucm91bmQoc2IgKiB0b25lKX0sJHthLnRvRml4ZWQoMyl9KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgcmdiYSgyNTUsMjUzLDI0NiwkeyhhICogMC42KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICBjb25zdCB5VG9wID0geTAgLSBjaCAqICgwLjE1ICsgcm5kKCkgKiAwLjI1KTtcbiAgICAgICAgY29uc3QgeUJvdCA9IGJ1dHRzW2MgKyAxXVtNYXRoLm1pbihzLCBNYXRoLnJvdW5kKHgpKV0gKyBjaCAqIChybmQoKSAqIDAuMTApO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeVRvcCwgdywgTWF0aC5tYXgoMiwgeUJvdCAtIHlUb3ApKTtcbiAgICAgICAgLy8gVE9STiBUSVA6IHNvbWUgYmxhZGVzIHJ1biBvbiBwYXN0IHRoZSBidXR0IGxpbmUgYW5kIGVuZCBpbiBhIHBvaW50LCBzbyB0aGUgY291cnNlIGVkZ2UgaXNcbiAgICAgICAgLy8gYSBmcmluZ2Ugb2YgaW5kaXZpZHVhbCBibGFkZXMgcmF0aGVyIHRoYW4gYSB3YXZ5IGN1dCAodGhlIG5pcGEgcGxhdGUncyB3aG9sZSBjaGFyYWN0ZXIpXG4gICAgICAgIGNvbnN0IHRlYXI6IG51bWJlciA9IG8udGVhciA/PyAwO1xuICAgICAgICBpZiAodGVhciA+IDAgJiYgcm5kKCkgPCAwLjQ1KSB7XG4gICAgICAgICAgY29uc3QgTCA9IGNoICogdGVhciAqICgwLjMgKyBybmQoKSAqIDAuNyk7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHlCb3QpOyBjdHgubGluZVRvKHggKyB3LCB5Qm90KTsgY3R4LmxpbmVUbyh4ICsgdyAvIDIsIHlCb3QgKyBMKTsgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSg1OCw0OCwzNiwkeygwLjEwICsgcm5kKCkgKiAwLjE2KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICAgIGN0eC5maWxsUmVjdCh4IC0gMSwgeUJvdCwgdyArIDIsIEwgKiAwLjUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBCTEFERSBTRUFNUzogYSB0aGluIGRhcmsgbGluZSBiZXR3ZWVuIG5laWdoYm91cmluZyBibGFkZXMsIHdoaWNoIGlzIHdoYXQgc2VwYXJhdGVzIGEgbmlwYVxuICAgICAgLy8gcm9vZiAoYnJvYWQgbGVhZmxldHMgbGFpZCBzaWRlIGJ5IHNpZGUpIGZyb20gY29tYmVkIGdyYXNzIHRoYXRjaFxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5zZWFtcyA/PyAwKTsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHM7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSg3MCw2MCw0NiwkeygwLjEwICsgcm5kKCkgKiAwLjE4KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeTAgLSBjaCAqIDAuMSwgMSwgY2ggKiAoMC43ICsgcm5kKCkgKiAwLjUpKTtcbiAgICAgIH1cbiAgICAgIC8vIE1JU1NJTkcgYmxhZGVzOiBhIGZldyBnYXBzIHdoZXJlIHRoZSBjb3Vyc2UgaGFzIHRoaW5uZWQsIGRhcmsgYnV0IG5ldmVyIGJsYWNrXG4gICAgICBjb25zdCBnYXBzID0gby5nYXBzID8/IDA7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGdhcHM7IGsrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gcyAqICgwLjAxICsgcm5kKCkgKiAwLjAzKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDk2LDg0LDY2LCR7KDAuMjAgKyBybmQoKSAqIDAuMTgpLnRvRml4ZWQoMyl9KWA7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5MCArIGNoICogMC4yNSwgdywgY2ggKiAoMC40ICsgcm5kKCkgKiAwLjUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGUgc2hhZG93IGVhY2ggY291cnNlJ3MgYnV0dCBjYXN0cyBvbiB0aGUgb25lIGJlbG93OiBhIGdyYWRpZW50IGZhbGxpbmcgQVdBWSBmcm9tIHRoZSBsaW5lLFxuICAgIC8vIGRyYXduIGFsb25nIHRoZSBqaXR0ZXJlZCBidXR0IHNvIHRoZSBzaGFkb3cgaXMgYXMgcmFnZ2VkIGFzIHRoZSBlZGdlIHRoYXQgY2FzdHMgaXQsIHdpdGggdGhlXG4gICAgLy8gTElUIFRJUFMgb2YgdGhlIGNvdXJzZSBhYm92ZSBpdCBhcyBhIHBhbGUgbGluZS4gVGhlIHBhaXIgaXMgd2hhdCBtYWtlcyB0aGUgcm9vZiByZWFkIGFzXG4gICAgLy8gc3RhY2tlZCBsYXllcnM7IHRoZSBzaGFkb3cgYWxvbmUgcmVhZHMgYXMgZ3JhaW4sIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGJ1aWxkIGxvb2tlZCBsaWtlLlxuICAgIGZvciAobGV0IGMgPSAxOyBjIDw9IG5jOyBjKyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHliID0gYnV0dHNbY11beF07XG4gICAgICAgIGNvbnN0IGdoID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliIC0gY2ggKiAwLjA5LCAwLCB5Yik7XG4gICAgICAgIGdoLmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjUyLDI0MiwwKScpOyBnaC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoMjU1LDI1MiwyNDIsJHsoby50aXAgPz8gMC4zNCkudG9GaXhlZCgzKX0pYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnaDtcbiAgICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeWIgLSBjaCAqIDAuMDkgKyBkeSwgMSwgY2ggKiAwLjA5KTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeWIsIDAsIHliICsgY2ggKiAwLjIyKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDU4LDQ4LDM2LCR7KG8uc2hhZG93ID8/IDAuNDIpLnRvRml4ZWQoMyl9KWApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNTgsNDgsMzYsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5YiArIGR5LCAxLCBjaCAqIDAuMjIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1PU1MgLyBNT1VMRDogbGVzcyByZWQgYW5kIGJsdWUgb3ZlciBzb2Z0IHBhdGNoZXMsIG5ldmVyIGEgcGFpbnRlZCBncmVlblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ubW9zcyA/PyAwKTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjE0KTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMTQgKyBybmQoKSAqIDAuMjI7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTUwLDE5MCwxMTAsJHthLnRvRml4ZWQoMyl9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTUwLDE5MCwxMTAsMCknKTtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknOyBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxuICAgIC8vIFJPVDogZGFyayBncmV5LWJyb3duIHBhdGNoZXMgd2hlcmUgdGhlIHRoYXRjaCBoYXMgZGVjYXllZCwgbmV1dHJhbCByYXRoZXIgdGhhbiBncmVlblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ucm90ID8/IDApOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMDgpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4zMCArIHJuZCgpICogMC4yNTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSg5Niw4Niw3NCwke2EudG9GaXhlZCgzKX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKDk2LDg2LDc0LCR7KGEgKiAwLjUpLnRvRml4ZWQoMyl9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoOTYsODYsNzQsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIHNvZnQgdG9uYWwgZHJpZnQgc28gdGhlIGNvdXJzZXMgZG8gbm90IHJlYWQgYXMgYSBwcmludGVkIHN0cmlwZVxuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMTAsIDAuMTAsIDAuMjIpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBXT1ZFTiBUQVJQQVVMSU4gdGlsZTogdGhlIGNvYXJzZSBjcm9zcy13b3ZlbiBwb2x5cHJvcHlsZW5lIHRhcGUgb2YgYSBUaGFpIGJ1aWxkZXIncyB0YXJwLCBwbHVzXG4gKiB0aGUgY3JlYXNlcyBhIGZvbGRlZCBzaGVldCBrZWVwcyBmb3IgbGlmZSBhbmQgdGhlIHN1bi1ibGVhY2hpbmcgYWxvbmcgdGhlIHJpZGdlcy4gQSBtdWx0aXBsaWVyIG9uXG4gKiB0aGUgbWVhc3VyZWQgYmx1ZSwgc28gdGhlIHdlYXZlIGRhcmtlbnMgYW5kIHRoZSBibGVhY2ggbGlmdHMgdG93YXJkIHdoaXRlLlxuICovXG5mdW5jdGlvbiB0YXJwVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBwaXRjaCA9IE1hdGgubWF4KDMsIE1hdGgucm91bmQocyAvIChvLnRhcGVzID8/IDY0KSkpO1xuICAgIC8vIHRoZSB3ZWF2ZTogd2FycCBhbmQgd2VmdCB0YXBlcywgZWFjaCBwYWlyIHdpdGggYSBzaGFkb3cgYXQgaXRzIGpvaW4sIGFsdGVybmF0aW5nIG92ZXIvdW5kZXJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHggKz0gcGl0Y2gpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgzMCwzNCw0NCwkeygwLjEwICsgcm5kKCkgKiAwLjA4KS50b0ZpeGVkKDMpfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wNyknOyBjdHguZmlsbFJlY3QoeCArIDEsIDAsIE1hdGgubWF4KDEsIHBpdGNoICogMC4zNSksIHMpO1xuICAgIH1cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHM7IHkgKz0gcGl0Y2gpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgzMCwzNCw0NCwkeygwLjEwICsgcm5kKCkgKiAwLjA4KS50b0ZpeGVkKDMpfSlgOyBjdHguZmlsbFJlY3QoMCwgeSwgcywgMSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wNyknOyBjdHguZmlsbFJlY3QoMCwgeSArIDEsIHMsIE1hdGgubWF4KDEsIHBpdGNoICogMC4zNSkpO1xuICAgIH1cbiAgICAvLyBmb2xkIGNyZWFzZXM6IGxvbmcgcGFsZSBsaW5lcyB3aXRoIGEgc2hhZG93IG9uIG9uZSBzaWRlLCBhdCB0aGUgdHdvIGF4ZXMgYSB0YXJwIGlzIGZvbGRlZCBvblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uY3JlYXNlcyA/PyA2KTsgaysrKSB7XG4gICAgICBjb25zdCBob3JpeiA9IHJuZCgpIDwgMC41LCBwID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuNSArIHJuZCgpICogMC41KSwgcSA9IHJuZCgpICogcztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjI2KSc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yNiknO1xuICAgICAgaWYgKGhvcml6KSB7IGN0eC5maWxsUmVjdChxIC0gbGVuIC8gMiwgcCwgbGVuLCAxLjYpOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjAsMjYsMzgsMC4xOCknOyBjdHguZmlsbFJlY3QocSAtIGxlbiAvIDIsIHAgKyAxLjYsIGxlbiwgMik7IH1cbiAgICAgIGVsc2UgeyBjdHguZmlsbFJlY3QocCwgcSAtIGxlbiAvIDIsIDEuNiwgbGVuKTsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDI2LDM4LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHAgKyAxLjYsIHEgLSBsZW4gLyAyLCAyLCBsZW4pOyB9XG4gICAgfVxuICAgIC8vIHN1bi1ibGVhY2hlZCBzdHJlYWtzIGFuZCBhIGxpdHRsZSBncmltZVxuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMTIsIDAuMTAsIDAuMzQpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTQVdOIFRJTUJFUiB0aWxlIGZvciBhIHdlYXRoZXJlZCBwb3N0LWFuZC1wbGF0ZSBmcmFtZTogZmluZSBsb25naXR1ZGluYWwgZ3JhaW4sIGEgZmV3IGtub3RzLCB0aGVcbiAqIG9kZCBkcnlpbmcgc3BsaXQsIGFuZCBjbG91ZHkgc2lsdmVyIHdlYXRoZXJpbmcuIERlbGliZXJhdGVseSBXRUFLTFkgZGlyZWN0aW9uYWwgLS0gdGhlIGZyYW1lIGlzXG4gKiBtYXBwZWQgd2l0aCB3b3JsZCBVVnMsIHdoaWNoIHB1dCB2IGFsb25nIHRoZSBwb3N0IGJ1dCBBQ1JPU1MgYSBiZWFtLCBhbmQgYSBzdHJvbmdseSBzdHJpcGVkIHRpbGVcbiAqIHdvdWxkIHRoZW4gcmVhZCBhcyBhIHBsYW5rIGpvaW50IHJ1bm5pbmcgdGhlIHdyb25nIHdheSBvbiBoYWxmIHRoZSBmcmFtZS4gVGhlIHdlYXRoZXJpbmcgY2Fycmllc1xuICogbW9zdCBvZiB0aGUgcmVhZCBhbmQgdGhlIGdyYWluIG9ubHkgc2hhcnBlbnMgaXQsIHdoaWNoIHN1cnZpdmVzIGJvdGggb3JpZW50YXRpb25zLlxuICovXG5mdW5jdGlvbiBzYXduVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IERBUksgPSAnOTYsODQsNjgnLCBMSUdIVCA9ICcyNTUsMjU1LDI1NSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjRmMmVlJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMjAsIDAuMTQsIDAuMzApO1xuICAgIGdyYWluTGluZXMoY3R4LCBybmQsIDAsIHMsIDAsIHMsIG8uZ3JhaW4gPz8gMjIwLCBEQVJLLCBMSUdIVCwgMC4xOCk7XG4gICAgLy8ga25vdHM6IGEgZGFyayBlbGxpcHNlIHdpdGggdGhlIGdyYWluIHN3ZWVwaW5nIHJvdW5kIGl0XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5rbm90cyA/PyA0KTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjAxMiArIHJuZCgpICogMC4wMik7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNzQsNjAsNDQsMC40NSknO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogMS42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDk2LDgwLDYwLDAuMjIpJzsgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGZvciAobGV0IHEgPSAxOyBxIDw9IDM7IHErKykgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByICogKDEgKyBxICogMC42KSwgciAqICgxLjYgKyBxICogMC45KSwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZHJ5aW5nIHNwbGl0cyBhbG9uZyB0aGUgZmlicmVcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnNwbGl0cyA/PyAzKTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC40NSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTgsNDgsMzYsMC40MiknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjQsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xNiknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNCwgeSArIGR5LCAxLCBsZW4pO1xuICAgIH1cbiAgICBjb25zdCBzcG90czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ubW91bGQgPz8gMyk7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCBybmQoKSAqIHNdKTtcbiAgICBtb3VsZENsdXN0ZXJzKGN0eCwgcm5kLCBzLCBzcG90cywgcyAqIDAuMDksIHMgKiAwLjA3LCA3MCwgMC4yNCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdBTFZBTklTRUQgU0hFRVQgd2VhdGhlcmluZzogb25lIHNlYW1sZXNzIG11bHRpcGxpZXIgdGlsZSBjYXJyeWluZyB0aGUgdGhyZWUgdGhpbmdzIGEgemluYyByb29mXG4gKiBhY3R1YWxseSBzaG93cyAtLSB0aGUgY2hhbGt5IHdoaXRlIG94aWRhdGlvbiB0aGF0IGVhdHMgdGhlIHNwYW5nbGUsIHRoZSBkYXJrZXIgZ3JleSBkcmlmdCB3aGVyZVxuICogaXQgaGFzIG5vdCwgYW5kIHRoZSB3YXJtIHJ1c3QgZnJlY2tsZXMgdGhhdCBzdGFydCBhdCBldmVyeSBmaXhpbmcgYW5kIGxhcC5cbiAqXG4gKiBMaWtlIGBwYWludFRpbGVgIGl0IGlzIGRyYXduIGluIEFCU09MVVRFIG11bHRpcGxpZXIgc3BhY2Ugb3ZlciBhIFJFLUJBU0VEIGVudmVsb3BlLCBiZWNhdXNlXG4gKiBjaGFsa2luZyBpcyBCUklHSFRFUiB0aGFuIHRoZSBjbGVhbiBzaGVldCBpdCBzaXRzIG9uIGFuZCBhIHBsYWluIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbi4gYG8uYmFzZWBcbiAqIGlzIHRoZSBjbGVhbiB6aW5jJ3Mgb3duIG11bHRpcGxpZXIgYWdhaW5zdCB0aGF0IGVudmVsb3BlIGFuZCBpcyB3aGF0IG1vc3Qgb2YgdGhlIHRpbGUgaXMgZmlsbGVkXG4gKiB3aXRoOyBgby5jaGFsa2AgcmVhY2hlcyBiYWNrIHVwIHRvIHRoZSBlbnZlbG9wZS4gTWVhc3VyZWQgb2ZmIHRoZSBwbGF0ZSwgdGhlIGRlY2sgcnVucyAxNzIgdG8gMTk3XG4gKiBsdW1hIGFjcm9zcyBpdHMgb3duIHN1cmZhY2UgYXQgYSBzYXR1cmF0aW9uIG9mIDAuMDQgLS0gYSAyNS1sdW1hIHNwcmVhZCBvbiBhIG5vbWluYWxseSBmbGF0IGdyZXksXG4gKiB3aGljaCBpcyB0aGUgd2hvbGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcm9vZiBhbmQgYSBzaGVldCBvZiBwbGFzdGljLlxuICpcbiAqIGBjaGFsa1NjYWxlYCAvIGBkcmlmdFNjYWxlYCBleGlzdCBiZWNhdXNlIG9uIGEgcm9vZiB0aGUgdGlsZSBpcyBzbWFsbCBhZ2FpbnN0IHRoZSBzdXJmYWNlOiB0aGVcbiAqIGRlY2sgcmVwZWF0cyBpdCBmb3VyIHRpbWVzIGFjcm9zcywgc28gYW55IG1hcmsgd2lkZXIgdGhhbiBhIHRlbnRoIG9mIGl0IGRyYXdzIGEgdmlzaWJsZSBsYXR0aWNlLlxuICogVGhlIEJST0FEIGNoYWxrIHpvbmVzIGJlbG9uZyBvbiB0aGUgc2hlZXQncyBvd24gdmVydGV4IGdyaWQsIHdoaWNoIGRvZXMgbm90IHJlcGVhdDsgd2hhdCB0aGUgdGlsZVxuICogb3dlcyBpcyB0aGUgZmluZSBzcGVja2xlIGluc2lkZSB0aGVtLlxuICpcbiAqIFRoZSByb2xsIG1hcmtzIGFyZSBkcmF3biBMQVNUIGFuZCBhbG9uZyB1LCB3aGljaCBvbiB0aGUgZGVjaydzIHdvcmxkIFVWcyBpcyB0aGUgYXhpcyB0aGUgbW9kZWxsZWRcbiAqIGZsdXRlcyBydW4gYWNyb3NzLiBUaGV5IGFyZSB3aGF0IHRoZSB0aWxlIHN0aWxsIG93ZXMgdGhlIGdlb21ldHJ5IG9uY2UgdGhlIGNvcnJ1Z2F0aW9uIGl0c2VsZiBpc1xuICogcmVhbDogYSByb2xsIGZvcm1lciBsZWF2ZXMgZmluZSBsZW5ndGh3aXNlIHN0cmlhdGlvbiBiZXR3ZWVuIHRoZSBmbHV0ZXMsIGFuZCBgYnVtcGAgcGlja3MgaXQgdXAuXG4gKi9cbmZ1bmN0aW9uIGdhbHZUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdLCBjaGFsayA9IG8uY2hhbGsgPz8gYmFzZSwgcnVzdCA9IG8ucnVzdCA/PyBiYXNlLCBkYXJrID0gby5kYXJrID8/IGJhc2U7XG4gICAgY29uc3Qgd3JhcCA9IChkcmF3OiAoZHg6IG51bWJlciwgZHk6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIGRyYXcoZHgsIGR5KTtcbiAgICB9O1xuICAgIGNvbnN0IGJsb2IgPSAoYzogbnVtYmVyW10sIHg6IG51bWJlciwgeTogbnVtYmVyLCByOiBudW1iZXIsIGE6IG51bWJlciwgcnkgPSAxLCByb3QgPSAwKSA9PiB7XG4gICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IoYyl9LCR7YX0pYCk7IGcuYWRkQ29sb3JTdG9wKDAuNTUsIGByZ2JhKCR7cmdiKGMpfSwke2EgKiAwLjV9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IoYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogcnksIHJvdCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGJhc2UgZmlsbCBjYXJyaWVzIHRoZSBGTFVURSBzaGFkaW5nIHdoZW4gYGZsdXRlc2AgaXMgc2V0OiBgZmx1dGVzYCByaXBwbGVzIHBlciB0aWxlLCBpblxuICAgIC8vIHBoYXNlIHdpdGggdGhlIG1vZGVsbGVkIGNvcnJ1Z2F0aW9uIChhIHRyb3VnaCBhdCB1ID0gMCwgd2hpY2ggaXMgd2hlcmUgdGhlIGRlY2sncyB3b3JsZCBVVnMgcHV0XG4gICAgLy8gb25lKS4gVGhlIGdlb21ldHJ5IGFscmVhZHkgdHVybnMgdGhlIGZsdXRlcyB0byB0aGUgbGlnaHQgLS0gdGhpcyBpcyB0aGUgYW1iaWVudCBkYXJrZW5pbmcgaW5cbiAgICAvLyB0aGUgdmFsbGV5cyBhbmQgdGhlIHJvbGwtZm9ybWVyJ3Mgb3duIHBvbGlzaCBvbiB0aGUgY3Jlc3RzLCB3aGljaCBmbGF0IHN0dWRpbyBsaWdodGluZyBvbiBhXG4gICAgLy8gc21vb3RoLXNoYWRlZCB0cmlhbmdsZSB3YXZlIGdpdmVzIG5vbmUgb2YuIE91dCBvZiBwaGFzZSBpdCB3b3VsZCBCRUFUIHdpdGggdGhlIGdlb21ldHJ5LCB3aGljaFxuICAgIC8vIGlzIHdoeSB0aGUgcGl0Y2ggaXMgbG9ja2VkIHRvIHRoZSBkZWNrJ3Mgb3duIDEzIGZsdXRlcyBwZXIgbWV0cmUgcmF0aGVyIHRoYW4gY2hvc2VuLlxuICAgIGNvbnN0IGZsID0gby5mbHV0ZXMgPz8gMCwgZmxvdyA9IG8uZmx1dGVMb3cgPz8gMC44ODtcbiAgICBpZiAoZmwgPiAwKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgICBjb25zdCB0ID0gKDEgLSBNYXRoLmNvcyh4IC8gcyAqIE1hdGguUEkgKiAyICogZmwpKSAvIDI7ICAgLy8gMCBpbiB0aGUgdHJvdWdoLCAxIGF0IHRoZSBjcmVzdFxuICAgICAgICBjb25zdCBrID0gZmxvdyArICgxIC0gZmxvdykgKiB0O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlLm1hcCgodjogbnVtYmVyKSA9PiB2ICogaykpfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTsgfVxuXG4gICAgLy8gMS4gdGhlIGdyZXkgZHJpZnQ6IGJyb2FkLCB2ZXJ5IHNvZnQsIHRoZSBhcmVhcyB0aGUgY2hhbGsgaGFzIG5vdCByZWFjaGVkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5kcmlmdCA/PyAxNik7IGkrKylcbiAgICAgIGJsb2IoZGFyaywgcm5kKCkgKiBzLCBybmQoKSAqIHMsIHMgKiAoMC4xNiArIHJuZCgpICogMC4zMCkgKiAoby5kcmlmdFNjYWxlID8/IDEpLCAwLjEwICsgcm5kKCkgKiAwLjE4LCAwLjUgKyBybmQoKSAqIDAuOSwgcm5kKCkgKiBNYXRoLlBJKTtcblxuICAgIC8vIDIuIHRoZSBjaGFsayBibG9vbTogTEFSR0UsIHNvZnQgYW5kIGlycmVndWxhciwgd2l0aCBhIGdyYW51bGFyIGZyaW5nZS4gT24gYSByb29mIGl0IGlzIHRoZVxuICAgIC8vICAgIGRvbWluYW50IG1hcmsgLS0gdGhlIHBsYXRlJ3MgZGVjayBpcyBtb3JlIGNoYWxrIHRoYW4gY2xlYW4gc2hlZXQgLS0gc28gaXQgaXMgZHJhd24gd2lkZSBhbmRcbiAgICAvLyAgICBhdCBoaWdoIGFscGhhLCB1bmxpa2UgdGhlIHNwYXJzZSBibG9vbXMgb2YgYSBwYWludGVkIHBhbmVsLlxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uY2hhbGtQYXRjaGVzID8/IDE0KTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjA4ICsgcm5kKCkgKiAwLjE4KSAqIChvLmNoYWxrU2NhbGUgPz8gMSk7XG4gICAgICBibG9iKGNoYWxrLCBjeCwgY3ksIGNyLCAoby5jaGFsa0FscGhhID8/IDAuNTUpICsgcm5kKCkgKiAwLjMwLCAwLjUgKyBybmQoKSAqIDAuOSwgcm5kKCkgKiBNYXRoLlBJKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjciAqIDEuMztcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQsIHIgPSAwLjggKyBybmQoKSAqIDIuNDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKGNoYWxrKX0sJHswLjIgKyBybmQoKSAqIDAuNDV9KWA7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gcnVzdDogc21hbGwgd2FybSBmcmVja2xlIGNsdXN0ZXJzLCBlYWNoIGEgc29mdCBwYXRjaCB1bmRlciBhIGZpZWxkIG9mIHNwZWNrcywgd2l0aCBhIHNob3J0XG4gICAgLy8gICAgcnVuIGJlbG93IGl0LiBaaW5jIGRvZXMgbm90IHNoZWV0LXJ1c3QgdGhlIHdheSBiYXJlIHN0ZWVsIGRvZXMgLS0gaXQgZnJlY2tsZXMgZmlyc3QuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5ydXN0Q2x1c3RlcnMgPz8gMTApOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgY3IgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDU1KTtcbiAgICAgIGJsb2IocnVzdCwgY3gsIGN5LCBjciwgMC4yNSArIHJuZCgpICogMC4zMCwgMC43ICsgcm5kKCkgKiAwLjcsIHJuZCgpICogTWF0aC5QSSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwZWNrc1BlckNsdXN0ZXIgPz8gMjYpOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkLCByID0gMC43ICsgcm5kKCkgKiAxLjg7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihydXN0KX0sJHswLjI1ICsgcm5kKCkgKiAwLjQ1fSlgO1xuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgICAgaWYgKHJuZCgpIDwgMC42KSB7XG4gICAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiBzICogMC4wMDYsIGxlbiA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xNik7XG4gICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgY3ksIDAsIGN5ICsgbGVuKTtcbiAgICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVzdCl9LCR7MC4xNCArIHJuZCgpICogMC4xNn0pYCk7IGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1c3QpfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgICAgd3JhcCgoZHgpID0+IGN0eC5maWxsUmVjdChjeCArIGR4ICsgKHJuZCgpIC0gMC41KSAqIGNyLCBjeSwgdywgbGVuKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNC4gcm9sbCBtYXJrczogZmluZSBsaW5lcyBvZiBjb25zdGFudCB1LCBhdCBgcm9sbHNgIHBlciB0aWxlLCBhbHRlcm5hdGVseSBhIHNoYWRlIHVuZGVyIGFuZCBhXG4gICAgLy8gICAgc2hhZGUgb3ZlciB0aGUgdG9uZSB0aGV5IGNyb3NzLiBCb3VuZCBhcyBhIGJ1bXAgbWFwIHRoZXkgYXJlIHRoZSBzdHJpYXRpb24gYmV0d2VlbiBmbHV0ZXMuXG4gICAgY29uc3Qgcm9sbHMgPSBvLnJvbGxzID8/IDQwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9sbHM7IGkrKykge1xuICAgICAgY29uc3QgeCA9IChpICsgMC4zNSArIHJuZCgpICogMC4zKSAqIHMgLyByb2xscywgdXAgPSBybmQoKSA8IDAuNDU7XG4gICAgICBjb25zdCBjID0gdXAgPyBjaGFsayA6IGRhcmssIGEgPSAwLjA2ICsgcm5kKCkgKiAwLjEyO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoJHtyZ2IoYyl9LCR7YX0pYDsgY3R4LmxpbmVXaWR0aCA9IDAuNyArIHJuZCgpICogMS4zO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIDApOyBjdHgubGluZVRvKHggKyBkeCwgcyk7IGN0eC5zdHJva2UoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBTUExJVC1DVUxNIHRpbGUgZm9yIHRoZSBoYWxmLXBpcGUgcm9vZmluZzogeCBBUk9VTkQgdGhlIGhhbGYgY3VsbSAoY3VsbVVWIG92ZXIgMC43MCBtLCBzbyB0aGVcbiAqICBzZWFtIGxhbmRzIG9uIHRoZSBoaWRkZW4gdW5kZXJzaWRlKSwgeSBBTE9ORyBpdC4gV2hhdCB0aGUgcGxhdGUgc2hvd3Mgb24gYSByb29maW5nIGN1bG0gdGhhdCBhXG4gKiAgd2hvbGUgcG9sZSBkb2VzIG5vdDogT05FIG5vZGUgcmluZyBwZXIgMC43MCBtICh0aGUgcm9vZiBjdWxtcyBhcmUgbG9uZ2VyIGludGVybm9kZXMgdGhhbiB0aGVcbiAqICBwb3N0cyksIGRlbnNlIGxvbmdpdHVkaW5hbCBmaWJyZSwgYSBsb25nIGRyeWluZyBzcGxpdCwgYmxlYWNoZWQgZmFjZXMsIGFuZCBST1QgLS0gZGFya1xuICogIGlycmVndWxhciBob2xlcyB3aXRoIGEgc3RhaW5lZCBoYWxvIGFuZCBhIHNjYXR0ZXIgb2YgaW5zZWN0IHBpbmhvbGVzLCB0aHJlZSBvciBmb3VyIHBlciB0aWxlLlxuICogIEEgbXVsdGlwbGllciBvbiB0aGUgcGVyLWluc3RhbmNlIHRvbmU7IHRoZSByb3QgY29yZXMgYXJlIHNtYWxsIGVub3VnaCAoMTAtMjAgcHggb2YgNTEyLCBvbiBhXG4gKiAgMC43MCBtIHRpbGUsIHNvIDE1LTMwIG1tKSB0aGF0IG5vIGVuY2xvc2VkIGRhcmsgcGF0Y2ggcmVhY2hlcyB0aGUgc2lsaG91ZXR0ZSBnYXRlLiAqL1xuZnVuY3Rpb24gc3BsaXRUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IERBUksgPSAnODgsNzYsNTgnLCBMSUdIVCA9ICcyNTUsMjU1LDI1NSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjNmMGU4JzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGEgc29mdCByb3VuZC1vZmYgYWNyb3NzIHRoZSBhcmM6IHRoZSByaW1zIGEgdG91Y2ggZGFya2VyIHRoYW4gdGhlIGNyb3duXG4gICAgY29uc3QgZ2EgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgcywgMCk7XG4gICAgZ2EuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDkwLDg0LDc0LDAuMTQpJyk7IGdhLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpJyk7IGdhLmFkZENvbG9yU3RvcCgxLCAncmdiYSg5MCw4NCw3NCwwLjE0KScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnYTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCAxMCwgMC4xMCwgMC4zNCk7XG4gICAgY29uc3Qgbm9kZSA9IHMgKiAoMC4zMCArIHJuZCgpICogMC40MCk7XG4gICAgZm9yIChjb25zdCBbeTAsIHkxXSBvZiBbWzAsIG5vZGVdLCBbbm9kZSwgc11dKSBncmFpbkxpbmVzKGN0eCwgcm5kLCAwLCBzLCB5MCwgeTEsIDMyMCwgREFSSywgTElHSFQsIDAuMjQpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMzsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMyArIHJuZCgpICogMC42KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCwzNCwyNiwwLjU1KSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5ICsgZHksIDEuNiwgbGVuKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjIwKSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4ICsgMS42LCB5ICsgZHksIDEuMiwgbGVuKTtcbiAgICB9XG4gICAgLy8gdGhlIG5vZGUgcmluZ1xuICAgIHtcbiAgICAgIGNvbnN0IHkgPSBub2RlO1xuICAgICAgY29uc3QgZ3MgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSAtIHMgKiAwLjAzLCAwLCB5KTtcbiAgICAgIGdzLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwKScpOyBncy5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMC4yNCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnczsgY3R4LmZpbGxSZWN0KDAsIHkgLSBzICogMC4wMywgcywgcyAqIDAuMDMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUyLDQ0LDM2LDAuNjYpJzsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIDMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMzYpJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyAzLCBzLCA1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg2MCw1MCw0MCwwLjMwKSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgOCwgcywgMik7XG4gICAgfVxuICAgIC8vIFJPVDogYW4gaXJyZWd1bGFyIGRhcmsgY29yZSB3aXRoIGEgd2FybSBzdGFpbmVkIGhhbG8sIGFuZCBwaW5ob2xlcyBhcm91bmQgaXRcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCByeCA9IHMgKiAoMC4wMTIgKyBybmQoKSAqIDAuMDMpLCByeSA9IHJ4ICogKDEuNCArIHJuZCgpICogMS42KSwgcm90ID0gKHJuZCgpIC0gMC41KSAqIDAuNjtcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjb25zdCBoYWxvID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSArIGR5LCAwLCBjeCwgY3kgKyBkeSwgTWF0aC5tYXgocngsIHJ5KSAqIDIuNCk7XG4gICAgICAgIGhhbG8uYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDk2LDc0LDQwLDAuNDIpJyk7IGhhbG8uYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoOTYsNzQsNDAsMC4yMCknKTsgaGFsby5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoOTYsNzQsNDAsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGhhbG87IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3gsIGN5ICsgZHksIHJ4ICogMi42LCByeSAqIDIuNCwgcm90LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgzNiwyOCwxOCwwLjgyKSc7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3gsIGN5ICsgZHksIHJ4LCByeSwgcm90LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgxNCwxMCw2LDAuOSknOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4ICsgcnggKiAwLjIsIGN5ICsgZHkgLSByeSAqIDAuMSwgcnggKiAwLjUsIHJ5ICogMC41NSwgcm90LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gY3ggKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMTIsIHkgPSBjeSArIChybmQoKSAtIDAuNSkgKiBzICogMC4yLCByID0gMSArIHJuZCgpICogMS44O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzAsMjQsMTYsMC44NSknO1xuICAgICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGxvb3NlIG1vdWxkIGJlbG93IHRoZSBub2RlXG4gICAgbW91bGRDbHVzdGVycyhjdHgsIHJuZCwgcywgW1tybmQoKSAqIHMsIG5vZGUgKyBzICogMC4wNF0sIFtybmQoKSAqIHMsIHJuZCgpICogc11dLCBzICogMC4wOCwgcyAqIDAuMDUsIDYwLCAwLjI2KTtcbiAgfSk7XG59XG5cbi8qKiBST1BFIHRpbGUgZm9yIHRoZSBsYXNoaW5nczogeCBBUk9VTkQgdGhlIGNvbGxhciwgeSBBTE9ORyB0aGUgcG9sZSBpdCB3cmFwcy4gQSBsYXNoaW5nIGlzIHR1cm5zXG4gKiAgb2YgbGFpZCByb3BlLCBzbyB0aGUgc3VyZmFjZSBpcyBkaWFnb25hbCBTVFJBTkRTIC0tIGEgZ3Jvb3ZlIGFuZCBhIGxpdCByaWRnZSBwZXIgc3RyYW5kIGF0IGFcbiAqICBzaGFsbG93IHdyYXAgYW5nbGUgLS0gd2l0aCBmaWJyZSBmdXp6IGFuZCBhIGZldyBkYXJrZXIgc29pbGVkIHR1cm5zLiBPdmVyIDAuMTIgbSBwZXIgdGlsZSB0aGVcbiAqICBzdHJhbmQgcGl0Y2ggaXMgfjEyIG1tLCB3aGljaCBpcyB0aGUgcGxhdGUncyByb3BlLiBTZWFtbGVzczogZXZlcnkgc3Ryb2tlIGlzIGRyYXduIGF0IHRocmVlXG4gKiAgeSBvZmZzZXRzIGFuZCB0aGUgc3RyYW5kIHJ1bnMgYWNyb3NzIHRoZSB3cmFwLiAqL1xuZnVuY3Rpb24gcm9wZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjRlZmU0JzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IG4gPSAxMCwgcGl0Y2ggPSBzIC8gbiwgYW5nID0gMC4zMjsgICAgICAgICAgICAgICAgLy8gd3JhcCBhbmdsZSwgcmFkaWFuc1xuICAgIGNvbnN0IGR4ID0gTWF0aC50YW4oYW5nKSAqIHM7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhvdyBmYXIgYSBzdHJhbmQgZHJpZnRzIGluIHggb3ZlciBvbmUgdGlsZSBoZWlnaHRcbiAgICBjdHguc2F2ZSgpO1xuICAgIGZvciAobGV0IGsgPSAtMzsgayA8IG4gKyAzOyBrKyspIHtcbiAgICAgIGNvbnN0IHgwID0gayAqIHBpdGNoO1xuICAgICAgZm9yIChjb25zdCBveSBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIC8vIGdyb292ZSBiZXR3ZWVuIHR1cm5zXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDcwLDU4LDQwLDAuNTUpJzsgY3R4LmxpbmVXaWR0aCA9IHBpdGNoICogMC4yMjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgwLCBveSk7IGN0eC5saW5lVG8oeDAgKyBkeCwgb3kgKyBzKTsgY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyB0aGUgbGl0IGNyb3duIG9mIHRoZSB0dXJuXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMzApJzsgY3R4LmxpbmVXaWR0aCA9IHBpdGNoICogMC4zMDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgwICsgcGl0Y2ggKiAwLjUsIG95KTsgY3R4LmxpbmVUbyh4MCArIHBpdGNoICogMC41ICsgZHgsIG95ICsgcyk7IGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gdHdpc3QgbWFya3MgYWNyb3NzIGVhY2ggdHVyblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSg5MCw3Niw1MiwwLjI4KSc7IGN0eC5saW5lV2lkdGggPSAxLjI7XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTI7IHQrKykge1xuICAgICAgICAgIGNvbnN0IHl5ID0gb3kgKyAodCArIHJuZCgpKSAqIHMgLyAxMiwgeHggPSB4MCArIHBpdGNoICogMC41ICsgZHggKiAoKHl5IC0gb3kpIC8gcyk7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHh4IC0gcGl0Y2ggKiAwLjM1LCB5eSAtIHBpdGNoICogMC4xOCk7IGN0eC5saW5lVG8oeHggKyBwaXRjaCAqIDAuMzUsIHl5ICsgcGl0Y2ggKiAwLjE4KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgLy8gZnV6eiBhbmQgc29pbGluZ1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7XG4gICAgICBjdHguZmlsbFN0eWxlID0gcm5kKCkgPCAwLjYgPyAncmdiYSg3MCw1OCw0MCwwLjE4KScgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjIyKSc7XG4gICAgICBjdHguZmlsbFJlY3QoeCwgeSwgMSwgMSArIHJuZCgpICogMik7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBjb25zdCB5ID0gcm5kKCkgKiBzLCBoID0gcyAqICgwLjA2ICsgcm5kKCkgKiAwLjEwKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHksIDAsIHkgKyBoKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw0OCwzMiwwKScpOyBnMi5hZGRDb2xvclN0b3AoMC41LCAncmdiYSg2MCw0OCwzMiwwLjIyKScpOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNDgsMzIsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoMCwgeSArIGR5LCBzLCBoKTtcbiAgICB9XG4gIH0pO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICAvLyBBIExJVCBzdXJmYWNlIChhIGZsdW9yZXNjZW50IHR1YmUsIGEgY2hhcmNvYWwgZW1iZXIgYmVkKTogZW1pc3NpdmUgY2FycmllcyB0aGUgZ2xvdyB3aXRob3V0IGFcbiAgICAvLyBsaWdodCBzb3VyY2UsIHdoaWNoIHRoZSBraXQncyBwcm9wcyBuZXZlciBvd24gLS0gdGhlIGhvc3Qgc2NlbmUgb3ducyBsaWdodGluZy5cbiAgICBpZiAocy5lbWlzc2l2ZSAhPT0gdW5kZWZpbmVkKSB7IG0uZW1pc3NpdmUgPSBuZXcgVEhSRUUuQ29sb3Iocy5lbWlzc2l2ZSk7IG0uZW1pc3NpdmVJbnRlbnNpdHkgPSBzLmVtaXNzaXZlSW50ZW5zaXR5ID8/IDE7IH1cbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIC8vIEFuIEFMUEhBLUNVVCBwYW5lIChjaGFpbi1saW5rIG1lc2gpOiB0aGUgY2FudmFzIHRpbGUgY2FycmllcyB0aGUgY3V0LW91dCBpbiBpdHMgYWxwaGEgY2hhbm5lbCBhbmRcbiAgICAvLyBhbHBoYVRlc3QgZGlzY2FyZHMgdGhlIG9wZW4gY2VsbHMsIHNvIHRoZSB3aXJlIHN0YXlzIG9wYXF1ZSBhbmQgc29ydHMgbGlrZSBhIHNvbGlkLlxuICAgIGlmIChzLmFscGhhVGVzdCAhPT0gdW5kZWZpbmVkKSB7IG0uYWxwaGFUZXN0ID0gcy5hbHBoYVRlc3Q7IG0udHJhbnNwYXJlbnQgPSBmYWxzZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTd2luZ0xpZFJlY3ljbGluZ0Jpbk1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnU3dpbmctTGlkIFJlY3ljbGluZyBCaW4nO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hdGVyaWFsIHdpdGggYHZlcnRleENvbG9yc2AgcmVhZHMgYSBgY29sb3JgIGF0dHJpYnV0ZSBvdXQgb2YgRVZFUlkgZ2VvbWV0cnkgYm91bmQgdG8gaXQsIGFuZFxuICAgKiBhIGdlb21ldHJ5IHRoYXQgaGFzIG5vbmUgaGFuZHMgdGhlIHNoYWRlciBhbiB1bmRlZmluZWQgYXR0cmlidXRlIC0tIHdoaWNoIGNvbWVzIGJhY2sgYXNcbiAgICogKDAsIDAsIDApIGFuZCByZW5kZXJzIHRoZSBtZXNoIEJMQUNLLiBUaGF0IGlzIG5vdCBhIGh5cG90aGV0aWNhbDogdGhlIHVib3NvdCdzIHdhbGwgYm9keSBhbmRcbiAgICogaXRzIGVpZ2h0IGJvdW5kYXJ5IHN0b25lcyBzaGlwcGVkIGFzIGJsYWNrIHNpbGhvdWV0dGVzIGZyb20gb25lIHRpbnRlZCBwbGF0Zm9ybSBzaGFyaW5nIHRoZWlyXG4gICAqIHN0b25lIG1hdGVyaWFsLCBhbmQgdGhlIGZhaWx1cmUgaXMgc2lsZW50IGJlY2F1c2UgdGhlIHRpbnRlZCBjb21wb25lbnQgaXRzZWxmIGxvb2tzIHBlcmZlY3QuXG4gICAqXG4gICAqIEFuIEluc3RhbmNlZE1lc2ggaGlkZXMgaXQgLS0gaXQgZmFsbHMgYmFjayB0byBpbnN0YW5jZUNvbG9yIGFuZCBjb21lcyBvdXQgd2hpdGUgLS0gc28gdGhlIHNhbWVcbiAgICogbWlzdGFrZSBvbiB0aGUgY2hlZGkncyBuaWNoZSBmcmFtZXMgcmVuZGVyZWQgY29ycmVjdGx5IGFuZCB0YXVnaHQgbm90aGluZy4gR3VhcmQgaXQgaGVyZSwgb25jZSxcbiAgICogZm9yIGV2ZXJ5IGdlb21ldHJ5OiBubyBjb2xvciBhdHRyaWJ1dGUgYW5kIGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIG1lYW5zIGZpbGwgd2l0aCB3aGl0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGd1YXJkVmVydGV4Q29sb3JzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcbiAgICBpZiAoIW1hdCB8fCAhbWF0LnZlcnRleENvbG9ycyB8fCBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSByZXR1cm47XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoMSksIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgLy8gc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IsIHNvIGFuIGluc3RhbmNlZCBtYXRlcmlhbCBjYXJyeWluZyBwZXItaW5zdGFuY2VcbiAgICAgIC8vIHRvbmVzIG11c3QgYmUgd2hpdGUgb3IgZXZlcnkgdG9uZSBjb21lcyBvdXQgZGFya2VuZWQgYnkgdGhlIGJhc2UuXG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKiogRm91ciBpbnN0YW5jZXMgYXQgOTAtZGVncmVlIHlhdyBhYm91dCB0aGUgYXhpcyAtLSB0aGUgY29ybmVyL2ZhY2UgcmVwZXRpdGlvbiB0aGF0IGV2ZXJ5XG4gICAqICBidWlsZGluZyBpbiB0aGlzIHNldCB1c2VzIGZvciBuaWNoZXMsIGZpbmlhbHMsIGJvdW5kYXJ5IHN0b25lcyBhbmQgY29ybmVyIGRvbWVzLiAqL1xuICBmdW5jdGlvbiBxdWFkKHJhZGl1czogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlID0gMCk6IFRIUkVFLk1hdHJpeDRbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBwaGFzZSArIGkgKiBNYXRoLlBJIC8gMjtcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguc2luKGEpICogcmFkaXVzLCB5LCBNYXRoLmNvcyhhKSAqIHJhZGl1cyksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgYSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb21wb25lbnRzXG4gICAqIEVhY2ggZW50cnkgb2YgQ09ORklHLmdlb21ldHJ5LmNvbXBvbmVudHMgaXMgT05FIG1lcmdlZCBnZW9tZXRyeSBvbiBPTkUgbWF0ZXJpYWwgLS0gb25lIGRyYXdcbiAgICogY2FsbC4gRXZlcnkgcGFydCBpbnNpZGUgaXQgaXMgYSB0aW50ZWQgYm94LCB0dWJlLCBjeWxpbmRlciwgbGF0aGUgb3IgcGxhbmU7IGNvbG91ciBkaWZmZXJlbmNlc1xuICAgKiBhcmUgdmVydGV4IGNvbG91cnMuIGB1dmAgcGlja3MgaG93IGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgcmVwZWF0cyBvdmVyIGl0LiAqL1xuICBmb3IgKGNvbnN0IGMgb2YgRy5jb21wb25lbnRzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgKGMuYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCBiIG9mIG1pcnJvclgoKGMuYm94ZXNNaXJyb3JlZCA/PyBbXSkgYXMgbnVtYmVyW11bXSkpIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCB0IG9mIChjLnR1YmVzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0dWJlKHQucHRzLCB0LnIsIHQuc2VnID8/IDgsIHQuaGV4KSk7XG4gICAgLy8gU1dFUFQgdHViZXM6IG9uZSBtaXRyZWQgcmluZyBwZXIgcG9pbnQgaW5zdGVhZCBvZiBhIGN5bGluZGVyIHBlciBzZWdtZW50IC0tIHRoZSBvbmx5IHRoaW5nIHRoYXRcbiAgICAvLyBzdXJ2aXZlcyBhIHRpZ2h0IGJlbmQuIFNlZSBzd2VlcFR1YmUuXG4gICAgZm9yIChjb25zdCB0IG9mIChjLnN3ZWVwcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2goc3dlZXBUdWJlKHQucHRzLCB0LnIsIHQuc2VnID8/IDEwLCB0LmhleCwgdC5jYXAgIT09IGZhbHNlKSk7XG4gICAgZm9yIChjb25zdCBzdCBvZiAoYy5zdHJhcHMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHN0cmFwKHN0LnB0cywgc3Qudywgc3QudCwgc3QuYWJvdXQsIHN0LmhleCkpO1xuICAgIGZvciAoY29uc3QgY3kgb2YgKGMuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIGB0aDBgL2B0aExlbmAgbWFrZSBhIFBBUlRJQUwgY3lsaW5kZXIgKGEgY3VydmVkIHN0aWNrZXIgcGF0Y2ggd3JhcHBlZCBvbiBhIHJvdW5kIGJvZHkpIGFuZFxuICAgICAgLy8gYG9wZW5gIGRyb3BzIHRoZSBjYXBzOyB0aGUgc2lkZSBVVnMgdGhlbiBydW4gMC4uMSBhY3Jvc3MgdGhlIGFyYyBhbmQgdXAgdGhlIGhlaWdodCwgd2hpY2ggaXNcbiAgICAgIC8vIHdoYXQgYSBiYWtlZCBncmFwaGljIHdhbnRzLiBgdXZSZXBgIG11bHRpcGxpZXMgdGhlbSBmb3IgYSByZXBlYXRpbmcgdGlsZS5cbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjeS5ydCwgY3kucmIsIGN5LmgsIGN5LnNlZyA/PyAxMiwgMSwgY3kub3BlbiA/PyBmYWxzZSwgY3kudGgwID8/IDAsIGN5LnRoTGVuID8/IE1hdGguUEkgKiAyKTtcbiAgICAgIGlmIChjeS51dlJlcCkgeyBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpOyBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiBjeS51dlJlcFswXSwgdXYuZ2V0WShpKSAqIGN5LnV2UmVwWzFdKTsgfVxuICAgICAgLy8gYHNpZGVVVmAgcGlucyB0aGUgU0lERSB3YWxsJ3MgVVZzIHRvIG9uZSB0ZXhlbCBzbyBhIGRpc2MgY2FycnlpbmcgYSBiYWtlZCB0b3AtZG93biBpbWFnZSBzaG93c1xuICAgICAgLy8gdGhhdCBpbWFnZSBvbiBpdHMgY2FwIGFsb25lLCB3aXRoIGl0cyByaW0gaW4gd2hhdGV2ZXIgdGhlIHBpbm5lZCB0ZXhlbCBob2xkcyAoYSBiYWcgdG9uZSkuXG4gICAgICBpZiAoY3kuc2lkZVVWKSB7IGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2JyksIG4gPSAoKGN5LnNlZyA/PyAxMikgKyAxKSAqIDI7IGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB1di5zZXRYWShpLCBjeS5zaWRlVVZbMF0sIGN5LnNpZGVVVlsxXSk7IH1cbiAgICAgIC8vIGBzY2FsZWAgYmVmb3JlIHRoZSByb3RhdGlvbnM6IGFuIE9WQUwgYmFzaW4gb3IgZGlzYywgd2hpY2ggYSBsYXRoZSBvciBhIGN5bGluZGVyIGNhbm5vdFxuICAgICAgLy8gcmV2b2x2ZSBvbiBpdHMgb3duLiBOb3JtYWxzIGFyZSByZWNvbXB1dGVkIGJlY2F1c2UgYSBub24tdW5pZm9ybSBzY2FsZSBza2V3cyB0aGVtLlxuICAgICAgaWYgKGN5LnNjYWxlKSB7IGcuc2NhbGUoY3kuc2NhbGVbMF0sIGN5LnNjYWxlWzFdLCBjeS5zY2FsZVsyXSk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgfVxuICAgICAgLy8gQ1VMTSBVVnM6IHUgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlLCB2IGFsb25nIHRoZSBsZW5ndGgsIGJvdGggaW4gbWV0cmVzIC0tIHNvIHRoZSBub2RlXG4gICAgICAvLyByaW5ncyBvZiBhIGN1bG0gdGlsZSBjcm9zcyBhIGJhbWJvbyBwb2xlIGF0IHJlYWwgc3BhY2luZyBob3dldmVyIHRoZSBwb2xlIGlzIHRoZW4gdHVybmVkLlxuICAgICAgLy8gSXQgaGFzIHRvIGhhcHBlbiBCRUZPUkUgdGhlIHJvdGF0aW9ucywgd2hpbGUgdGhlIGN5bGluZGVyIHN0aWxsIHJ1bnMgYWxvbmcgaXRzIG93biBZLlxuICAgICAgaWYgKGMudXYgPT09ICdjdWxtJykgY3VsbVVWKGcsIGN5LnJ0LCBjeS5oLCBjLnV2U2NhbGUgPz8gMSwgY3kudk9mZiA/PyAwKTtcbiAgICAgIGlmIChjeS5yeCkgZy5yb3RhdGVYKGN5LnJ4KTsgaWYgKGN5LnJ5KSBnLnJvdGF0ZVkoY3kucnkpOyBpZiAoY3kucnopIGcucm90YXRlWihjeS5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShjeS5hdFswXSwgY3kuYXRbMV0sIGN5LmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGN5LmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGwgb2YgKGMubGF0aGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHJ5YCB5YXdzIHRoZSByZXZvbHV0aW9uOiBhIDQtc2VnbWVudCBsYXRoZSB0dXJuZWQgNDUgZGVncmVlcyBpcyBhIGNoYW1mZXJlZCBTUVVBUkUgc2xhYiBpbiBvbmVcbiAgICAgIC8vIGdlb21ldHJ5IChhIGNvbmUncyBydWJiZXIgYmFzZSksIHdoZXJlIHR3byBzdGFja2VkIGJveGVzIHdvdWxkIGNvc3QgdHdvIGFuZCBhIGNvcGxhbmFyIHBhaXIuXG4gICAgICAvLyBgY3lsVVZgIChhIHRpbGUgc2l6ZSBpbiBtZXRyZXMpIHdyaXRlcyBhIHNlYW1sZXNzIGFyb3VuZC1ieS11cCBVViBmcm9tIHRoZSBsYXRoZSdzIG93biBzZWdtZW50XG4gICAgICAvLyBpbmRleCAtLSBhdGFuMiB3b3VsZCBmb2xkIGEgd2hvbGUgdGlsZSBpbnRvIHRoZSBzZWFtIGNvbHVtbiAtLSBmb3IgdHJlYWQsIGZsdXRpbmcgYW5kIGdyYWluLlxuICAgICAgY29uc3QgZyA9IGxhdGhlKGwucHRzLCBsLnNlZyA/PyAxMiwgMCwgbC5zaGFycCAhPT0gZmFsc2UsIGwud2VsZFNlYW0gPT09IHRydWUpO1xuICAgICAgaWYgKGwuY3lsVVYpIHsgY29uc3QgY3UgPSBBcnJheS5pc0FycmF5KGwuY3lsVVYpID8gbC5jeWxVViA6IFtsLmN5bFVWLCBsLmN5bFVWLCAwXTsgbGF0aGVVVihnLCAoZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQgLyAoKGwuc2VnID8/IDEyKSArIDEpKSB8IDAsIGwuc2VnID8/IDEyLCBjdVswXSwgY3VbMV0sIGN1WzJdID8/IDApOyB9XG4gICAgICBpZiAobC5zY2FsZSkgeyBnLnNjYWxlKGwuc2NhbGVbMF0sIGwuc2NhbGVbMV0sIGwuc2NhbGVbMl0pOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IH1cbiAgICAgIC8vIGByeWAgeWF3cyB0aGUgcmV2b2x1dGlvbiAoYWJvdmUpLiBgcnhgL2ByemAgVElMVCB0aGUgYXhpcyBpdHNlbGYsIHdoaWNoIGlzIHdoYXQgYSBXQUxMIG9yXG4gICAgICAvLyBjZWlsaW5nIGZpdHRpbmcgbmVlZHM6IGEgbGF0aGUgcmV2b2x2ZXMgYWJvdXQgK1ksIGFuZCBhIGJ1bGtoZWFkIGxhbXAncyBheGlzIGlzIHRoZSB3YWxsXG4gICAgICAvLyBub3JtYWwsIHNvIGl0cyBiYWNrcGxhdGUgYW5kIGRvbWUgYXJlIGF1dGhvcmVkIGFib3V0IFkgYW5kIGxhaWQgZG93biB3aXRoIHJ4ID0gUEkvMi5cbiAgICAgIGlmIChsLnJ5KSBnLnJvdGF0ZVkobC5yeSk7IGlmIChsLnJ4KSBnLnJvdGF0ZVgobC5yeCk7IGlmIChsLnJ6KSBnLnJvdGF0ZVoobC5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShsLmF0WzBdLCBsLmF0WzFdLCBsLmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGwuaGV4KSk7XG4gICAgfVxuICAgIC8vIFJJQkJFRCBET01FUzogYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gY2FycnlpbmcgdmVydGljYWwgRkxVVEVTLCBhcyBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYFxuICAgIC8vIHNhbXBsZWQgcGVyIHNlY3RvciByYXRoZXIgdGhhbiBhIGxhdGhlLiBBIHByZXNzZWQtZ2xhc3MgbGFtcCBkb21lIGlzIGZsdXRlZCwgYW5kIGEgc21vb3RoIG9uZVxuICAgIC8vIHJlYWRzIGFzIGEgcGxhc3RpYyBidWJibGUgLS0gdGhlIHJpYnMgYXJlIG1vc3Qgb2Ygd2hhdCBzYXlzIGBnbGFzc2AgYXQgcHJvcCBkaXN0YW5jZS4gQXV0aG9yZWRcbiAgICAvLyBhYm91dCArWSBsaWtlIGEgbGF0aGUsIHNvIGEgd2FsbCBmaXR0aW5nIGxheXMgaXQgZG93biB3aXRoIHJ4LlxuICAgIGZvciAoY29uc3QgZCBvZiAoYy5kb21lcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSByaWJiZWREb21lKGQucHRzLCBkLnJpYnMsIGQuYW1wLCBkLnNlZyA/PyAyNCwgZC52YWxsZXksIGQuc21vb3RoID09PSB0cnVlKTtcbiAgICAgIGlmIChkLnJ5KSBnLnJvdGF0ZVkoZC5yeSk7IGlmIChkLnJ4KSBnLnJvdGF0ZVgoZC5yeCk7IGlmIChkLnJ6KSBnLnJvdGF0ZVooZC5yeik7XG4gICAgICBpZiAoZC5hdCkgZy50cmFuc2xhdGUoZC5hdFswXSwgZC5hdFsxXSwgZC5hdFsyXSk7XG4gICAgICAvLyBBIGZsdXRlZCBkb21lIHdyaXRlcyBpdHMgT1dOIGNvbG91ciBhdHRyaWJ1dGUgKHRoZSBjcmVzdC10by12YWxsZXkgbXVsdGlwbGllciksIHNvIHRpbnRHZW9cbiAgICAgIC8vIHdvdWxkIG92ZXJ3cml0ZSB0aGUgZmx1dGUgc3RyaXBpbmcgd2l0aCBvbmUgZmxhdCBoZXggLS0gdGhlIHNhbWUgdHJhcCBgc2hlZXRgJ3MgaGV4VW5kZXJcbiAgICAgIC8vIGZlbGwgaW50by4gTXVsdGlwbHkgdGhlIHRvbmUgSU5UTyB0aGUgbXVsdGlwbGllciBpbnN0ZWFkLCBzbyB0aGUgZG9tZSBjYXJyaWVzIGJvdGguXG4gICAgICBpZiAoZC52YWxsZXkgJiYgZC5oZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjb2wgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgICAgIGNvbnN0IHQgPSBuZXcgVEhSRUUuQ29sb3IoZC5oZXgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbC5jb3VudDsgaSsrKSBjb2wuc2V0WFlaKGksIGNvbC5nZXRYKGkpICogdC5yLCBjb2wuZ2V0WShpKSAqIHQuZywgY29sLmdldFooaSkgKiB0LmIpO1xuICAgICAgICBncy5wdXNoKGcpO1xuICAgICAgfSBlbHNlIGdzLnB1c2goZC52YWxsZXkgPyBnIDogdGludEdlbyhnLCBkLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHAgb2YgKGMucGxhbmVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBQQU5FOiBhIHNpbmdsZSBxdWFkIGluIHRoZSBYWSBwbGFuZSBhdCBkZXB0aCB6LCBkb3VibGUtc2lkZWQgYnkgaXRzIG1hdGVyaWFsLiBJdHMgVVZzIHJ1blxuICAgICAgLy8gMC4uMSBhY3Jvc3MgdGhlIHBhbmUgc28gYW4gYWxwaGEtY3V0IHRpbGUgcmVwZWF0cyBgcmVwYCB0aW1lcyBhY3Jvc3MgYW5kIGRvd24uXG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkocC53LCBwLmgsIDEsIDEpO1xuICAgICAgZy50cmFuc2xhdGUocC5hdFswXSwgcC5hdFsxXSwgcC5hdFsyXSk7XG4gICAgICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogKHAucmVwPy5bMF0gPz8gMSksIHV2LmdldFkoaSkgKiAocC5yZXA/LlsxXSA/PyAxKSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgcC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlIG9mIChjLmV4dHJ1ZGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBwcm9maWxlIGluIHRoZSBYWSBwbGFuZSBleHRydWRlZCBhbG9uZyBaIGJldHdlZW4gejAgYW5kIHoxIC0tIGEgc2xhYiB3aXRoIGEgbW91bGRlZCBlZGdlLFxuICAgICAgLy8gYSBweXJhbWlkIGNhcCBhcyBhIHN0ZXBwZWQgcHJvZmlsZSwgYSBzcGVhciBmaW5pYWwuXG4gICAgICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgc2hhcGUubW92ZVRvKGUucG9seVswXVswXSwgZS5wb2x5WzBdWzFdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZS5wb2x5Lmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8oZS5wb2x5W2ldWzBdLCBlLnBvbHlbaV1bMV0pO1xuICAgICAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gICAgICBmb3IgKGNvbnN0IGggb2YgKGUuaG9sZXMgPz8gW10pIGFzIG51bWJlcltdW11bXSkge1xuICAgICAgICBjb25zdCBocCA9IG5ldyBUSFJFRS5QYXRoKCk7IGhwLm1vdmVUbyhoWzBdWzBdLCBoWzBdWzFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoLmxlbmd0aDsgaSsrKSBocC5saW5lVG8oaFtpXVswXSwgaFtpXVsxXSk7XG4gICAgICAgIGhwLmNsb3NlUGF0aCgpOyBzaGFwZS5ob2xlcy5wdXNoKGhwKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGcgPSBleHRydWRlQWxvbmdaKHNoYXBlLCBlLnowLCBlLnoxKTtcbiAgICAgIGlmIChlLnJ4KSBnLnJvdGF0ZVgoZS5yeCk7XG4gICAgICBpZiAoZS5yeSkgZy5yb3RhdGVZKGUucnkpO1xuICAgICAgaWYgKGUucnopIGcucm90YXRlWihlLnJ6KTtcbiAgICAgIGlmIChlLmF0KSBnLnRyYW5zbGF0ZShlLmF0WzBdLCBlLmF0WzFdLCBlLmF0WzJdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlLmhleCkpO1xuICAgIH1cbiAgICAvLyBFTExJUFNPSURTOiBbaGV4LCBjeCwgY3ksIGN6LCByeCwgcnksIHJ6LCByb3RYPywgcm90WT8sIHJvdFo/XSAtLSBhIHVuaXQgc3BoZXJlIHNjYWxlZCBwZXIgYXhpc1xuICAgIC8vIGFuZCB0dXJuZWQgYWJvdXQgaXRzIG93biBjZW50cmUuIEEgc2t1bGwgZG9tZSwgYSBwYXcsIGEgbm9zZSBwYWQ6IHRoZSByb3VuZGVkIHNvbGlkcyBvZiBhblxuICAgIC8vIGFuaW1hbCB0aGF0IGEgYm94IG9yIGEgc3RhdGlvbiB0dWJlIGNhbm5vdCBnaXZlLCBzaGFyaW5nIHNtb290aCBub3JtYWxzIHRocm91Z2ggdGhlIG1lcmdlLlxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5lbGxpcHNvaWRzID8/IFtdKSBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEsIGVbMTBdID8/IDE2LCBlWzExXSA/PyAxMik7XG4gICAgICBnLnNjYWxlKGVbNF0sIGVbNV0sIGVbNl0pO1xuICAgICAgaWYgKGVbN10pIGcucm90YXRlWChlWzddKTsgaWYgKGVbOF0pIGcucm90YXRlWShlWzhdKTsgaWYgKGVbOV0pIGcucm90YXRlWihlWzldKTtcbiAgICAgIGcudHJhbnNsYXRlKGVbMV0sIGVbMl0sIGVbM10pO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIGVbMF0pKTtcbiAgICB9XG4gICAgLy8gRlJVU1RBOiBbaGV4LCBjeCwgeUJvdHRvbSwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXSAtLSBhIGJveCB3aG9zZSBmb290cHJpbnQgY2hhbmdlcyBmcm9tICh3MCwgZDApIGF0XG4gICAgLy8gdGhlIGJvdHRvbSB0byAodzEsIGQxKSBhdCB0aGUgdG9wOiB0aGUgdGFwZXJlZCBib2R5IG9mIGEgd2hlZWxpZSBiaW4gb3IgYSBzdGVlbCBjb250YWluZXIuXG4gICAgZm9yIChjb25zdCBmIG9mIChjLmZydXN0YSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKGZydXN0dW0oZi5zbGljZSgxKSksIGZbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgKGMuc3Bpa2VzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNwaWtlKHMuYXQsIHMudywgcy5oKSwgcy5oZXgpKTtcbiAgICAvLyBEUkFQRUQgU0hFRVRTOiBhIHRhcnAgb3IgYXduaW5nIGFzIGEgaGVpZ2h0IGdyaWQgd2l0aCB0aGlja25lc3MgLS0gYSByaWRnZSwgdGhlIHNhZyBiZXR3ZWVuXG4gICAgLy8gaXRzIHBvbGVzIGFuZCB0aGUgZHJvb3Agb2YgaXRzIGZyZWUgZWRnZXMgYXJlIG51bWJlcnMgaW4gdGhlIGdyaWQsIGNvbXB1dGVkIGF0IGVtaXQgdGltZS5cbiAgICBmb3IgKGNvbnN0IHMgb2YgKGMuc2hlZXRzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBzaGVldCBnaXZlbiBgaGV4VW5kZXJgIGhhcyBhbHJlYWR5IHdyaXR0ZW4gaXRzIE9XTiBjb2xvdXIgYXR0cmlidXRlLCBvbmUgdG9uZSBmb3IgdGhlIHRvcFxuICAgICAgLy8gZ3JpZCBhbmQgYW5vdGhlciBmb3IgdGhlIHVuZGVyc2lkZSBhbmQgcmltLiB0aW50R2VvIHdvdWxkIG92ZXJ3cml0ZSB0aGUgbG90IHdpdGggYSBzaW5nbGVcbiAgICAgIC8vIGhleCAtLSB3aGljaCBpcyB3aGF0IHNoaXBwZWQgdGhlIHRhcnBhdWxpbiBiYXkncyBibHVlLW92ZXItb3JhbmdlIHRhcnAgYXMgYSB3aGl0ZSBzYWlsLlxuICAgICAgY29uc3QgZyA9IHNoZWV0KHMpO1xuICAgICAgZ3MucHVzaChzLmhleFVuZGVyICE9PSB1bmRlZmluZWQgPyBnIDogdGludEdlbyhnLCBzLmhleCkpO1xuICAgIH1cbiAgICAvLyBPUkdBTklDIHN0YXRpb24gdHViZXM6IFt6LCBjeCwgY3ksIHJ4LCByeV0gc3RhdGlvbnMgc3dlcHQgYWxvbmcgWiAtLSB0aGUgb25seSBzb2Z0IGZvcm0gaW4gdGhlXG4gICAgLy8ga2l0LCBhIGx5aW5nIGFuaW1hbC4gTGl0IHNtb290aCBieSB0aGUgaGVscGVyJ3Mgc2hhcmVkIHJpbmcgdmVydGljZXMuXG4gICAgZm9yIChjb25zdCB0IG9mIChjLnR1YmVzQWxvbmcgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gdHViZUFsb25nKHQuc3RhdGlvbnMsIHQuc2VnID8/IDEyKTtcbiAgICAgIGlmICh0LnJ5KSBnLnJvdGF0ZVkodC5yeSk7IGlmICh0LmF0KSBnLnRyYW5zbGF0ZSh0LmF0WzBdLCB0LmF0WzFdLCB0LmF0WzJdKTtcbiAgICAgIC8vIGBoZXhlc2AgLS0gb25lIGNvbG91ciBwZXIgU1RBVElPTiwgYmxlbmRlZCBhbG9uZyB0aGUgc3dlZXAgLS0gaXMgaG93IGEgY29hdCBwYXR0ZXJuIHRoYXQgcnVuc1xuICAgICAgLy8gYWxvbmcgdGhlIGJvZHkgKGEgd2hpdGUgY29sbGFyIGJldHdlZW4gYSB0YW4gc2t1bGwgYW5kIGEgdGFuIHNhZGRsZSkgaXMgY2FycmllZCBvbiBhIHNpbmdsZVxuICAgICAgLy8gbWVyZ2VkIG1lc2guIFRoZSBjb21wb25lbnQncyBheGlzIHRpbnQgdGhlbiBtdWx0aXBsaWVzIHRoZSBkb3JzYWwtdG8tdmVudHJhbCBmYWRlIGludG8gaXQsXG4gICAgICAvLyBhbmQgbmVpdGhlciBjb3N0cyBhIG1hdGVyaWFsLiBBIHNpbmdsZSBgaGV4YCBzdGF5cyB0aGUgZGVmYXVsdC5cbiAgICAgIGlmICh0LmhleGVzKSB7XG4gICAgICAgIC8vIEEgc3RhdGlvbiBlbnRyeSBtYXkgYmUgb25lIGhleCwgb3IgYSBQQUlSIFtkb3JzYWwsIHZlbnRyYWxdIGJsZW5kZWQgYXJvdW5kIHRoZSByaW5nIGJ5IHRoZVxuICAgICAgICAvLyBzYW1lIHNpbih0aGV0YSkgdHViZUFsb25nIHN3ZXB0IHRoZSBzZWN0aW9uIHdpdGggLS0gc28gdGhlIGNvYXQgcnVucyBib3RoIEFMT05HIHRoZSBib2R5XG4gICAgICAgIC8vIChhIHdoaXRlIGNvbGxhciBiZXR3ZWVuIGEgdGFuIHNrdWxsIGFuZCBhIHRhbiBzYWRkbGUpIGFuZCBBQ1JPU1MgaXQgKHRoZSBzYWRkbGUgZ2l2aW5nIHdheVxuICAgICAgICAvLyB0byBhIGR1c3R5IGZsYW5rIGFuZCBhIHBhbGUgYmVsbHkpLiBBbiBheGlzIHRpbnQgY2Fubm90IGRvIHRoZSBzZWNvbmQgaGFsZjogb24gYW4gYW5pbWFsXG4gICAgICAgIC8vIGx5aW5nIG9uIGl0cyBzaWRlIHRoZSBkb3JzYWwtdG8tdmVudHJhbCBheGlzIGlzIGhvcml6b250YWwsIHNvIGEgYmFuZCBpbiB4IGN1dHMgdGhlIGNyb3duXG4gICAgICAgIC8vIG9mIHRoZSBzd2VlcCBpbiBoYWxmLCBhbmQgYSBNVUxUSVBMWSBjYW4gb25seSBldmVyIGRhcmtlbiAtLSBpdCBjYW5ub3QgdGFrZSBhIHdhcm0gdGFuIHRvXG4gICAgICAgIC8vIGEgY29vbGVyIGdyZXkuIFR3byBjb2xvdXJzIHBlciBzdGF0aW9uLCBvbmUgYXR0cmlidXRlLCBzdGlsbCBvbmUgZHJhdyBjYWxsLlxuICAgICAgICBjb25zdCBzZWcgPSB0LnNlZyA/PyAxMiwgbiA9IHQuc3RhdGlvbnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHNlZyAqIG4gKiAzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBlID0gdC5oZXhlc1tNYXRoLm1pbih0LmhleGVzLmxlbmd0aCAtIDEsIGkpXTtcbiAgICAgICAgICBjb25zdCBkID0gbmV3IFRIUkVFLkNvbG9yKEFycmF5LmlzQXJyYXkoZSkgPyBlWzBdIDogZSksIHYgPSBuZXcgVEhSRUUuQ29sb3IoQXJyYXkuaXNBcnJheShlKSA/IGVbMV0gOiBlKTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBmID0gKE1hdGguc2luKGogKiBNYXRoLlBJICogMiAvIHNlZykgKyAxKSAvIDI7XG4gICAgICAgICAgICBjb25zdCBrID0gKGkgKiBzZWcgKyBqKSAqIDM7XG4gICAgICAgICAgICBjb2xba10gPSBkLnIgKyAodi5yIC0gZC5yKSAqIGY7IGNvbFtrICsgMV0gPSBkLmcgKyAodi5nIC0gZC5nKSAqIGY7IGNvbFtrICsgMl0gPSBkLmIgKyAodi5iIC0gZC5iKSAqIGY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gICAgICAgIGdzLnB1c2goZyk7XG4gICAgICB9IGVsc2UgZ3MucHVzaCh0aW50R2VvKGcsIHQuaGV4ID8/IDB4ZmZmZmZmKSk7XG4gICAgfVxuICAgIGxldCBnID0gbWVyZ2VHZW9zKGdzKTtcbiAgICAvLyBhIHBlci1jb21wb25lbnQgc2NhbGUsIGFwcGxpZWQgdG8gdGhlIG1lcmdlIGJlZm9yZSB0aW50aW5nOiBob3cgYSBseWluZyBhbmltYWwgYXV0aG9yZWQgYXRcbiAgICAvLyBpdHMgb3duIHByb3BvcnRpb25zIGlzIGZpdHRlZCBpbnRvIHRoZSBkZWNsYXJlZCBlbnZlbG9wZSB3aXRob3V0IHJlLXJlYWRpbmcgZXZlcnkgc3RhdGlvblxuICAgIGlmIChjLnNjYWxlKSBnLnNjYWxlKGMuc2NhbGVbMF0sIGMuc2NhbGVbMV0sIGMuc2NhbGVbMl0pO1xuICAgIC8vIEFYSVMgVElOVDogYSBwZXItdmVydGV4IGJsZW5kIGZyb20gYzAgYXQgYGZyb21gIHRvIGMxIGF0IGB0b2AgYWxvbmcgb25lIGF4aXMsIG92ZXIgdGhlIHdob2xlXG4gICAgLy8gbWVyZ2UgLS0gYSB0YW4gYmFjayBmYWRpbmcgdG8gYSB3aGl0ZSBiZWxseSBjb3N0cyBhbiBhdHRyaWJ1dGUsIG5vdCBhIHNlY29uZCBtYXRlcmlhbC4gQXBwbGllZFxuICAgIC8vIGluIExJTkVBUiBzcGFjZSB0aHJvdWdoIFRIUkVFLkNvbG9yLiBga2VlcGAgbXVsdGlwbGllcyB0aGUgYmxlbmQgaW50byB0aGUgZXhpc3RpbmcgdGludCBpbnN0ZWFkXG4gICAgLy8gb2YgcmVwbGFjaW5nIGl0LCBzbyBhIGRhcmsgbm9zZSBzdGF5cyBkYXJrLlxuICAgIGlmIChjLnRpbnQpIHtcbiAgICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuQ29sb3IoYy50aW50LmMwKSwgYiA9IG5ldyBUSFJFRS5Db2xvcihjLnRpbnQuYzEpO1xuICAgICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpOyBsZXQgY29sID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlIHwgbnVsbDtcbiAgICAgIGlmICghY29sKSB7IGNvbCA9IG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMykuZmlsbCgxKSwgMyk7IGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbCk7IH1cbiAgICAgIGNvbnN0IGF4ID0gYy50aW50LmF4aXMgPT09ICd4JyA/IDAgOiBjLnRpbnQuYXhpcyA9PT0gJ3knID8gMSA6IDI7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCB2ID0gYXggPT09IDAgPyBwLmdldFgoaSkgOiBheCA9PT0gMSA/IHAuZ2V0WShpKSA6IHAuZ2V0WihpKTtcbiAgICAgICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh2IC0gYy50aW50LmZyb20pIC8gKGMudGludC50byAtIGMudGludC5mcm9tKSkpO1xuICAgICAgICBjb25zdCByID0gYS5yICsgKGIuciAtIGEucikgKiB0LCBnZyA9IGEuZyArIChiLmcgLSBhLmcpICogdCwgYmIgPSBhLmIgKyAoYi5iIC0gYS5iKSAqIHQ7XG4gICAgICAgIGlmIChjLnRpbnQua2VlcCkgY29sLnNldFhZWihpLCBjb2wuZ2V0WChpKSAqIHIsIGNvbC5nZXRZKGkpICogZ2csIGNvbC5nZXRaKGkpICogYmIpOyBlbHNlIGNvbC5zZXRYWVooaSwgciwgZ2csIGJiKTtcbiAgICAgIH1cbiAgICAgIGNvbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjLnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdoZWlnaHQnKSBnID0gaGVpZ2h0VVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAncGFuZWwnKSBnID0gcGFuZWxVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdwYW5lbC1yb3QnKSBnID0gcGFuZWxVVihnLCBjLnV2U2NhbGUgPz8gMSwgdHJ1ZSk7XG4gICAgLy8gJ2Zyb250JzogcGxhbmFyIFVWcyBpbnRvIGEgYmFrZWQgZnJvbnQtZWxldmF0aW9uIGF0bGFzIG9uICtaIGZhY2VzLCBvbmUgcGlubmVkIHRleGVsIGVsc2V3aGVyZS5cbiAgICBpZiAoYy51diA9PT0gJ2Zyb250JykgZyA9IGZyb250QXRsYXNVVihnLCBjLmF0bGFzKTtcbiAgICAvLyAnY3VsbScgaXMgZGVsaWJlcmF0ZWx5IGFic2VudCBoZXJlOiBpdCBpcyB3cml0dGVuIHBlciBjeWxpbmRlciBhYm92ZSwgYmVmb3JlIHRoZSByb3RhdGlvbnMsXG4gICAgLy8gYW5kIGEgd2hvbGUtbWVyZ2UgcGFzcyB3b3VsZCBmbGF0dGVuIGl0IGJhY2sgdG8gdGhlIGN5bGluZGVyJ3MgZGVmYXVsdCAwLi4xIHdyYXAuXG4gICAgYWRkKGMuaWQsIGMubmFtZSwgZywgYy5tYXRlcmlhbCk7XG4gICAgaWYgKGMuY29sbGlkZXIpIGNvbGxpZGVyc1tjLmlkXSA9IGMuY29sbGlkZXI7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlcGV0aXRpb24gc3lzdGVtc1xuICAgKiBQaWNrZXRzLCBzbGF0cywgbGF0dGljZSBzdHJpcHM6IG9uZSBnZW9tZXRyeSwgb25lIEluc3RhbmNlZE1lc2gsIG9uZSBkcmF3IGNhbGwuICovXG4gIGZvciAoY29uc3QgciBvZiAoRy5pbnN0YW5jZWQgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgKHIuYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIChyLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgZm9yIChjb25zdCBmIG9mIChyLmZydXN0YSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKGZydXN0dW0oZi5zbGljZSgxKSksIGZbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGN5IG9mIChyLmN5bHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgdGgwYC9gdGhMZW5gIGN1dCBhIFBBUlRJQUwgY3lsaW5kZXIgdGhlIHNhbWUgd2F5IHRoZSBjb21wb25lbnQgYnJhbmNoIGRvZXM6IGEgc3BsaXQgYmFtYm9vXG4gICAgICAvLyBjdWxtIGlzIGEgaGFsZiBwaXBlLCB0aExlbiA9IFBJLCBgb3BlbmAgc28gaXQgaXMgYSBzaGVsbCB3aXRoIG5vIGRpc2NzIGF0IGl0cyBlbmRzLiBUaGVcbiAgICAgIC8vIG1hdGVyaWFsIGNhcnJpZXMgZG91YmxlU2lkZWQsIGJlY2F1c2UgYSBob2xsb3ctdXAgY3VsbSBpcyBzZWVuIGZyb20gdGhlIGluc2lkZS5cbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjeS5ydCwgY3kucmIsIGN5LmgsIGN5LnNlZyA/PyAxMiwgMSwgY3kub3BlbiA/PyBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeS50aDAgPz8gMCwgY3kudGhMZW4gPz8gTWF0aC5QSSAqIDIpO1xuICAgICAgaWYgKHIudXYgPT09ICdjdWxtJykgY3VsbVVWKGcsIGN5LnJ0LCBjeS5oLCByLnV2U2NhbGUgPz8gMSwgY3kudk9mZiA/PyAwKTtcbiAgICAgIGlmIChjeS5yeCkgZy5yb3RhdGVYKGN5LnJ4KTsgaWYgKGN5LnJ5KSBnLnJvdGF0ZVkoY3kucnkpOyBpZiAoY3kucnopIGcucm90YXRlWihjeS5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShjeS5hdFswXSwgY3kuYXRbMV0sIGN5LmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGN5LmhleCkpO1xuICAgIH1cbiAgICAvLyBBbiBPUEVOIHdoZWVsIC0tIHR5cmUgYW5kIHJpbSBhcyBjbG9zZWQgcmluZyBsYXRoZXMsIGEgaHViLCBhbmQgd2lyZSBzcG9rZXMgLS0gZm9yIGEgYmljeWNsZVxuICAgIC8vIHdob3NlIHdoZWVscyByZWFkIGFzIGJpY3ljbGUgd2hlZWxzIHJhdGhlciB0aGFuIGRpc2NzLiBMYXRoZXMgcmV2b2x2ZSBhYm91dCBZIChgcnhgIGxheXMgdGhlXG4gICAgLy8gYXhsZSB3aGVyZSB0aGUgcGxhY2VtZW50IHdhbnRzIGl0KTsgYHNwb2tlc2AgcmFkaWF0ZSBhYm91dCBYIGJ5IHRoZSBoZWxwZXIncyBjb252ZW50aW9uLCBzbyBhblxuICAgIC8vIGF4bGUgb24gWiB0YWtlcyBgcnk6IFBJLzJgLlxuICAgIGZvciAoY29uc3QgbCBvZiAoci5sYXRoZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gbGF0aGUobC5wdHMsIGwuc2VnID8/IDEyLCAwLCBsLnNoYXJwICE9PSBmYWxzZSwgbC53ZWxkU2VhbSA9PT0gdHJ1ZSk7XG4gICAgICBpZiAobC5yeCkgZy5yb3RhdGVYKGwucngpOyBpZiAobC5yeSkgZy5yb3RhdGVZKGwucnkpOyBpZiAobC5yeikgZy5yb3RhdGVaKGwucnopO1xuICAgICAgaWYgKGwuYXQpIGcudHJhbnNsYXRlKGwuYXRbMF0sIGwuYXRbMV0sIGwuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgbC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzIG9mIChyLnNwb2tlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBzcG9rZXMocy5ySHViLCBzLnJSaW0sIHMuaGFsZlcsIHMubiwgcy5oZXgsIHMudCA/PyAwLjAwNiwgcy5wcmlzbSA/PyBmYWxzZSk7XG4gICAgICBpZiAocy5yeCkgZy5yb3RhdGVYKHMucngpOyBpZiAocy5yeSkgZy5yb3RhdGVZKHMucnkpOyBpZiAocy5yeikgZy5yb3RhdGVaKHMucnopO1xuICAgICAgaWYgKHMuYXQpIGcudHJhbnNsYXRlKHMuYXRbMF0sIHMuYXRbMV0sIHMuYXRbMl0pOyBncy5wdXNoKGcpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHQgb2YgKHIudHViZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgICAvLyBFWFRSVURFUyBvbiBhbiBpbnN0YW5jZWQgc2V0LCB0aGUgc2FtZSBwcm9maWxlLWluLVhZLWFsb25nLVogZm9ybSBhcyBhIGNvbXBvbmVudCdzOiBhIGNoYW1mZXJlZFxuICAgIC8vIGxpZCBwbGF0ZSB0aGF0IHR3byBpbnN0YW5jZXMgc2hhcmUgKHRoZSBkdW1wc3RlcidzIGxpZHMsIHRoZSByaWdodCBvbmUgeWF3ZWQgYSBoYWxmIHR1cm4pLlxuICAgIGZvciAoY29uc3QgZSBvZiAoci5leHRydWRlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICBzaGFwZS5tb3ZlVG8oZS5wb2x5WzBdWzBdLCBlLnBvbHlbMF1bMV0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBlLnBvbHkubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhlLnBvbHlbaV1bMF0sIGUucG9seVtpXVsxXSk7XG4gICAgICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgICAgIGNvbnN0IGcgPSBleHRydWRlQWxvbmdaKHNoYXBlLCBlLnowLCBlLnoxKTtcbiAgICAgIGlmIChlLnJ4KSBnLnJvdGF0ZVgoZS5yeCk7IGlmIChlLnJ5KSBnLnJvdGF0ZVkoZS5yeSk7IGlmIChlLnJ6KSBnLnJvdGF0ZVooZS5yeik7XG4gICAgICBpZiAoZS5hdCkgZy50cmFuc2xhdGUoZS5hdFswXSwgZS5hdFsxXSwgZS5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgZS5oZXgpKTtcbiAgICB9XG4gICAgbGV0IGcgPSBtZXJnZUdlb3MoZ3MpO1xuICAgIGlmIChyLnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCByLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKHIudXYgPT09ICdoZWlnaHQnKSBnID0gaGVpZ2h0VVYoZywgci51dlNjYWxlID8/IDEpO1xuICAgIC8vICdjdWxtJyBhZ2FpbiB3cml0dGVuIHBlciBjeWxpbmRlciBhYm92ZSwgYmVmb3JlIHRoZSByb3RhdGlvbnMuXG4gICAgY29uc3QgbWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gICAgZm9yIChjb25zdCBwIG9mIHIucGxhY2VtZW50cyBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBtYXRzLnB1c2gobmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhwWzBdLCBwWzFdLCBwWzJdKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tRXVsZXIobmV3IFRIUkVFLkV1bGVyKHBbM10gPz8gMCwgcFs0XSA/PyAwLCBwWzVdID8/IDApKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpKTtcbiAgICB9XG4gICAgYWRkSW5zdChyLmlkLCByLm5hbWUsIGcsIHIubWF0ZXJpYWwsIG1hdHMsIHIuY29sb3JzKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzZXMgKi9cbiAgZm9yIChjb25zdCB0IG9mIChDT05GSUcudGlsZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbWF0ID0gbWF0ZXJpYWxzW3QubWF0ZXJpYWxdO1xuICAgIGlmICghbWF0KSBjb250aW51ZTtcbiAgICAvLyBBIEJBS0VEIGdyYXBoaWMgKGEgcHJpbnRlZCBzaWduIGZhY2UpOiBvbmUgV2ViUCBkYXRhIFVSSSBjb21wb3NlZCBvZmZsaW5lIGZyb20gdGhlIHBsYXRlJ3Mgb3duXG4gICAgLy8gcHJpbnRlZCByZWdpb24gYW5kIHZlY3RvciBtYXJrcywgbG9hZGVkIHRocm91Z2ggVGV4dHVyZUxvYWRlci4gQXNzaWduZWQgc3luY2hyb25vdXNseSBzbyB0aGVcbiAgICAvLyBoYXJuZXNzIHdhaXRzIG9uIHRoZSBkZWNvZGUuIEl0IGJlYXRzIGZpbGxUZXh0LCB3aGljaCBkcmF3cyBhIGRpZmZlcmVudCB3b3JkbWFyayBwZXIgbWFjaGluZS5cbiAgICBpZiAodC5raW5kID09PSAnYmFrZWQnKSB7XG4gICAgICAvLyBVbmRlciBwbGFpbiBOb2RlICh0aGUgY29wbGFuYXIgY2hlY2ssIHRoZSBydW50aW1lIHByb2JlKSB0aGVyZSBpcyBubyBkb2N1bWVudCBmb3IgSW1hZ2VMb2FkZXI6XG4gICAgICAvLyBrZWVwIHRoZSB3aGl0ZSBmYWxsYmFjayByYXRoZXIgdGhhbiB0aHJvdywgZXhhY3RseSBhcyB0aGUgcmV0YWlsIGdsYXppbmcgZG9lcy5cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGJha2VkID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKHQudXJpKTtcbiAgICAgIGNvbnN0IHNyZ2IgPSAoVEhSRUUgYXMgYW55KS5TUkdCQ29sb3JTcGFjZTtcbiAgICAgIGlmIChzcmdiKSBiYWtlZC5jb2xvclNwYWNlID0gc3JnYjtcbiAgICAgIGJha2VkLmFuaXNvdHJvcHkgPSA0O1xuICAgICAgbWF0Lm1hcCA9IGJha2VkOyBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGxldCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgICBpZiAodC5raW5kID09PSAnbXVkJykgdGV4ID0gbXVkVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJhc2UsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdkdXN0JykgdGV4ID0gZHVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5kdXN0LCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMwKTtcbiAgICBpZiAodC5raW5kID09PSAncGxhbmsnKSB0ZXggPSBwbGFua1RpbGUodC5zaXplID8/IDUxMiwgdC5ib2FyZHMgPz8gNiwgdC5zZWVkID8/IDUpO1xuICAgIGlmICh0LmtpbmQgPT09ICdydXN0JykgdGV4ID0gcnVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5yYXRpbywgdC5zZWVkID8/IDcsIHQuZGVuc2l0eSA/PyA5MCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BhaW50JykgdGV4ID0gcGFpbnRUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxNywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2NvcnJ1Z2F0aW9uJykgdGV4ID0gY29ycnVnYXRpb25UaWxlKHQuc2l6ZSA/PyA1MTIsIHQucGl0Y2ggPz8gMTIsIHQubG93ID8/IDAuNywgdC5zZWVkID8/IDMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdncmltZScpIHRleCA9IGdyaW1lVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd6aW5jJykgdGV4ID0gemluY1RpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDE5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnZnVyJykgdGV4ID0gZnVyVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjaGFpbmxpbmsnKSB0ZXggPSBjaGFpbmxpbmtUaWxlKHQuc2l6ZSA/PyAyNTYsIHQud2lyZSA/PyAwLjA5LCB0LnNlZWQgPz8gNCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2JhbWJvbycpIHRleCA9IGJhbWJvb1RpbGUodC5zaXplID8/IDUxMiwgdC5zdHJpcHMgPz8gMTAsIHQuc2VlZCA/PyA2KTtcbiAgICBpZiAodC5raW5kID09PSAnc3RyaXBlcycpIHRleCA9IHN0cmlwZVRpbGUodC5zaXplID8/IDI1NiwgdC5iYW5kcyA/PyA4LCB0LmEsIHQuYiwgdC5zZWVkID8/IDksIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdwb3N0ZXInKSB0ZXggPSBwb3N0ZXJUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA4LCB0LmxpbmVzID8/IFtdKTtcbiAgICBpZiAodC5raW5kID09PSAncGViYmxlJykgdGV4ID0gcGViYmxlVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMjEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0cmVhZCcpIHRleCA9IHRyZWFkVGlsZSh0LnNpemUgPz8gMjU2LCB0LnNlZWQgPz8gMjMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0eXJlJykgdGV4ID0gdHlyZVRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDI5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY3VsbScpIHRleCA9IGN1bG1UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAzMSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3Nhd24nKSB0ZXggPSBzYXduVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0aGF0Y2gnKSB0ZXggPSB0aGF0Y2hUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAzNywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3RhcnAnKSB0ZXggPSB0YXJwVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdnYWx2JykgdGV4ID0gZ2FsdlRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQ3LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnc3BsaXQnKSB0ZXggPSBzcGxpdFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDUzKTtcbiAgICBpZiAodC5raW5kID09PSAncm9wZScpIHRleCA9IHJvcGVUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA1OSk7XG4gICAgYmluZFRpbGUobWF0LCB0ZXgsIHQuYnVtcCA/PyAwKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVN3aW5nTGlkUmVjeWNsaW5nQmluTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiB0aGUgcm9vdCwgcGx1cyBPTkUgUEVSIFdIRUVMIChhbmQgYW55IG90aGVyIG1lY2hhbmlzbSBDT05GSUcucGl2b3RzIG5hbWVzIC0tIGFcbiAgICAvLyBzdGVlcmluZyBoZWFkLCBhIGNhbm9weSBzdGF5KS4gQSB2ZWhpY2xlJ3Mgd2hlZWxzIGdlbnVpbmVseSB0dXJuLCBzbyBlYWNoIG9uZSBpcyBhIHByb21pc2VcbiAgICAvLyBrZXB0OiB0aGUgcGl2b3Qgc2l0cyBhdCB0aGUgaHViLCBpdHMgYXhpcyBpcyB0aGUgYXhsZSwgYW5kIGBpbnN0YW5jZWAgbmFtZXMgd2hpY2ggaW5zdGFuY2VcbiAgICAvLyBvZiB0aGUgd2hlZWwgSW5zdGFuY2VkTWVzaCBpdCBkcml2ZXMuIE5vdGhpbmcgZWxzZSBvbiB0aGUgcHJvcCBtb3ZlcyAtLSB0aGUgZG9vcnMgYXJlIHBhcnRcbiAgICAvLyBvZiB0aGUgYm9keSBzaGVsbCAtLSBzbyBub3RoaW5nIGVsc2UgZ2V0cyBhbiBheGlzLlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuICAgIGZvciAoY29uc3QgcHYgb2YgKENPTkZJRy5waXZvdHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBvID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICBvLm5hbWUgPSBwdi5uYW1lO1xuICAgICAgby5wb3NpdGlvbi5zZXQocHYucG9zaXRpb25bMF0sIHB2LnBvc2l0aW9uWzFdLCBwdi5wb3NpdGlvblsyXSk7XG4gICAgICBvLnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICAgIGFuaW1hdGlvblJvbGU6ICdjaGlsZCcsXG4gICAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBwdi5wb3NpdGlvbiwgYXhpczogcHYuYXhpcywgbmFtZTogcHYubmFtZSxcbiAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBwdi5jb21wb25lbnQsIGluc3RhbmNlOiBwdi5pbnN0YW5jZSA/PyBudWxsLCBub3RlczogcHYubm90ZSA/PyAnJyB9LFxuICAgICAgfTtcbiAgICAgIHJvb3QuYWRkKG8pO1xuICAgICAgcGl2b3RzLnB1c2gobyk7XG4gICAgfVxuXG4gICAgLy8gU29ja2V0czogTk9ORSB1bmxlc3MgQ09ORklHLnNvY2tldHMgbmFtZXMgb25lLiBOb3RoaW5nIGF0dGFjaGVzIHRvIGEgdmVoaWNsZSBpbiB0aGlzIGtpdFxuICAgIC8vIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cblxuLyoqXG4gKiBUaGUgb25lLWFyZ3VtZW50IGVudHJ5IHBvaW50OiB2aWJlM2QncyBjb250cmFjdCwgYW5kIGltZzJ0aHJlZWpzJ3Mgb3duLlxuICpcbiAqIGBjcmVhdGVPYmplY3RNb2RlbGAgYWJvdmUga2VlcHMgdGhhaWtpdCdzIGhpc3RvcmljYWwgKHNwZWMsIG9wdGlvbnMpIHNoYXBlIHNvXG4gKiB0aGUgaGFybmVzcywgdGhlIGxldmVsIGVkaXRvciBhbmQgdGhlIE5vZGUtc2lkZSBnYXRlcyBjYXJyeSBvbiB1bmNoYW5nZWQuXG4gKiBgc3BlY2AgaGFzIG5ldmVyIGJlZW4gcGFzc2VkIGJ5IGFueSBjYWxsZXIgLS0gaXQgaXMgaW5zcGVjdGlvbiBkYXRhIHRoYXQgaXNcbiAqIGFscmVhZHkgYmFrZWQgaW50byB0aGlzIG1vZHVsZSAtLSBzbyB0aGlzIGlzIHRoZSBob25lc3Qgc2lnbmF0dXJlLCBhbmQgaXQgaXNcbiAqIHdoYXQgYSB2aWJlM2QgY29uc3VtZXIgaW5zdGFsbHMgYW5kIGNhbGxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICByZXR1cm4gY3JlYXRlT2JqZWN0TW9kZWwodW5kZWZpbmVkLCBvcHRpb25zKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQXNDdkIsSUFBTSxTQUFTO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsSUFDWDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULEtBQUs7QUFBQSxRQUNIO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsUUFDSDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLGNBQWM7QUFBQSxNQUNaO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxZQUFZO0FBQUEsVUFDVixTQUFTO0FBQUEsVUFDVCxlQUFlO0FBQUEsWUFDYjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsVUFBVTtBQUFBLFVBQ1YsVUFBVTtBQUFBLFVBQ1YsUUFBUTtBQUFBLFlBQ047QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQSxVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxPQUFPO0FBQUEsY0FDTDtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFlBQ0EsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE9BQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixPQUFPO0FBQUEsWUFDUCxTQUFTO0FBQUEsWUFDVCxPQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQU9GLFNBQVMsVUFBVSxNQUFvRDtBQUNyRSxRQUFNLFFBQWdDLENBQUM7QUFDdkMsUUFBTSxPQUFrQixDQUFDO0FBQ3pCLGFBQVcsS0FBSyxNQUFNO0FBQ3BCLFFBQUksRUFBRSxPQUFPO0FBQUUsWUFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDO0FBQUcsV0FBSyxLQUFLLElBQUk7QUFBQSxJQUFHLE9BQ3pEO0FBQUUsWUFBTSxLQUFLLENBQUM7QUFBRyxXQUFLLEtBQUssS0FBSztBQUFBLElBQUc7QUFBQSxFQUMxQztBQUNBLE1BQUksUUFBUTtBQUNaLGFBQVcsS0FBSyxNQUFPLFVBQVMsRUFBRSxhQUFhLFVBQVUsRUFBRTtBQUMzRCxRQUFNLFdBQVcsSUFBSSxhQUFhLFFBQVEsQ0FBQztBQUMzQyxRQUFNLFNBQVMsSUFBSSxhQUFhLFFBQVEsQ0FBQztBQUN6QyxRQUFNLEtBQUssSUFBSSxhQUFhLFFBQVEsQ0FBQztBQU1yQyxRQUFNLFdBQVcsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxhQUFhLE9BQU8sQ0FBQztBQUM1RCxRQUFNLFFBQVEsV0FBVyxJQUFJLGFBQWEsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUk7QUFDL0QsTUFBSSxJQUFJO0FBQ1IsYUFBVyxLQUFLLE9BQU87QUFDckIsVUFBTSxJQUFJLEVBQUUsYUFBYSxVQUFVLEdBQUcsSUFBSSxFQUFFLGFBQWEsUUFBUSxHQUFHLElBQUksRUFBRSxhQUFhLElBQUk7QUFDM0YsVUFBTSxJQUFJLEVBQUUsYUFBYSxPQUFPO0FBQ2hDLGFBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLEtBQUs7QUFDaEMsZ0JBQVUsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFHLGdCQUFVLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFHLGdCQUFVLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUM5RyxVQUFJLEdBQUc7QUFBRSxnQkFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsZ0JBQVEsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsZ0JBQVEsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEsTUFBRztBQUNwSCxVQUFJLEdBQUc7QUFBRSxZQUFJLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxZQUFJLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLE1BQUc7QUFDdkUsVUFBSSxTQUFTLEdBQUc7QUFBRSxlQUFPLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxlQUFPLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFHLGVBQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEsTUFBRztBQUFBLElBQzVIO0FBQ0EsU0FBSyxFQUFFO0FBQUEsRUFDVDtBQUNBLFdBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFBRSxRQUFJLEtBQUssQ0FBQyxFQUFHLE9BQU0sQ0FBQyxFQUFFLFFBQVE7QUFBRyxTQUFLLENBQUMsRUFBRSxRQUFRO0FBQUEsRUFBRztBQUM3RixRQUFNLE1BQU0sSUFBVSxxQkFBZTtBQUNyQyxNQUFJLGFBQWEsWUFBWSxJQUFVLHNCQUFnQixVQUFVLENBQUMsQ0FBQztBQUNuRSxNQUFJLGFBQWEsVUFBVSxJQUFVLHNCQUFnQixRQUFRLENBQUMsQ0FBQztBQUMvRCxNQUFJLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLENBQUMsQ0FBQztBQUN2RCxNQUFJLE1BQU8sS0FBSSxhQUFhLFNBQVMsSUFBVSxzQkFBZ0IsT0FBTyxDQUFDLENBQUM7QUFDeEUsTUFBSSxtQkFBbUI7QUFBRyxNQUFJLHNCQUFzQjtBQUNwRCxTQUFPO0FBQ1Q7QUE2QkEsU0FBUyxhQUFhLEtBQWlCLFNBQVMsSUFBSSxNQUFNLE1BQW9CO0FBQzVFLFFBQU0sTUFBa0IsQ0FBQztBQUN6QixXQUFTLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxLQUFLO0FBQ25DLFVBQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQztBQUMvQyxRQUFJLFFBQVE7QUFDWixRQUFJLEtBQUssR0FBRztBQUNWLFlBQU0sS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDM0UsWUFBTSxLQUFLLEtBQUssTUFBTSxJQUFJLEVBQUUsR0FBRyxLQUFLLEtBQUssTUFBTSxJQUFJLEVBQUU7QUFDckQsVUFBSSxLQUFLLEtBQUssS0FBSyxFQUFHLFNBQVEsS0FBSyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsS0FBSyxLQUFLO0FBQ3pILFVBQUksU0FBUyxLQUFLLElBQUksSUFBSyxLQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEtBQUssS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEtBQUssR0FBRyxDQUFDO0FBQ2hGLFVBQUksS0FBSyxDQUFDO0FBQ1YsVUFBSSxTQUFTLEtBQUssSUFBSSxJQUFLLEtBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxHQUFHLENBQUM7QUFBQSxJQUNsRixNQUFPLEtBQUksS0FBSyxDQUFDO0FBQUEsRUFDbkI7QUFDQSxTQUFPO0FBQ1Q7QUFZQSxTQUFTLE1BQU0sS0FBaUIsS0FBYSxVQUFVLEdBQUcsUUFBUSxNQUFNLFdBQVcsT0FBNkI7QUFDOUcsUUFBTSxLQUFLLFFBQVEsYUFBYSxHQUFHLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxJQUFVLGNBQVEsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUM7QUFDM0csUUFBTSxJQUFJLElBQVUsb0JBQWMsR0FBRyxHQUFHO0FBQ3hDLElBQUUscUJBQXFCO0FBQ3ZCLE1BQUksVUFBVTtBQUdaLFVBQU0sSUFBSSxFQUFFLGFBQWEsUUFBUTtBQUNqQyxVQUFNLE9BQU8sRUFBRSxTQUFTLE1BQU07QUFDOUIsYUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLEtBQUs7QUFDN0IsWUFBTSxJQUFJLEdBQUcsSUFBSSxNQUFNLE9BQU87QUFDOUIsWUFBTSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFDcEYsWUFBTSxJQUFJLEtBQUssTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLO0FBQ2pDLFFBQUUsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQy9CLFFBQUUsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQUEsSUFDakM7QUFDQSxNQUFFLGNBQWM7QUFBQSxFQUNsQjtBQUNBLFNBQU87QUFDVDtBQXlIQSxTQUFTLGNBQWMsT0FBb0IsSUFBWSxJQUFrQztBQUN2RixRQUFNLElBQUksSUFBVSxzQkFBZ0IsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLGNBQWMsT0FBTyxlQUFlLEVBQUUsQ0FBQztBQUNwRyxJQUFFLFVBQVUsR0FBRyxHQUFHLEVBQUU7QUFDcEIsSUFBRSxxQkFBcUI7QUFDdkIsU0FBTztBQUNUO0FBNkdBLFNBQVMsV0FBVyxTQUFxQixNQUFjLEtBQWEsS0FDaEQsUUFBbUIsU0FBUyxPQUE2QjtBQUMzRSxRQUFNLE1BQWdCLENBQUM7QUFDdkIsUUFBTSxNQUFnQixDQUFDO0FBTXZCLFFBQU0sT0FBTyxDQUFDLE1BQWM7QUFDMUIsUUFBSSxDQUFDLE9BQVEsUUFBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBSTVCLFVBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLElBQUksUUFBUyxJQUFJLE1BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSTtBQUNuRixXQUFPLENBQUMsS0FBSyxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUM7QUFBQSxFQUNuRjtBQUNBLFFBQU0sT0FBTyxDQUFDLEdBQWEsR0FBYSxNQUFnQixJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDakYsUUFBTSxLQUFLLENBQUMsR0FBVyxNQUFjO0FBQ25DLFVBQU0sS0FBTSxJQUFJLE1BQU8sS0FBSyxLQUFLLElBQUk7QUFDckMsVUFBTSxJQUFJLElBQUksTUFBTSxLQUFLLElBQUksT0FBTyxFQUFFO0FBQ3RDLFVBQU0sSUFBSSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUk7QUFDMUIsV0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBQUEsRUFDM0Q7QUFDQSxXQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsU0FBUyxHQUFHLEtBQUs7QUFDM0MsYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUM7QUFDM0UsV0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNaLFdBQUssR0FBRyxHQUFHLENBQUM7QUFDWixZQUFNLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQztBQUNuQyxVQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFBQSxJQUNuRDtBQUFBLEVBQ0Y7QUFDQSxRQUFNLElBQUksSUFBVSxxQkFBZTtBQUNuQyxJQUFFLGFBQWEsWUFBWSxJQUFVLHNCQUFnQixJQUFJLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5RSxJQUFFLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLGFBQWMsSUFBSSxTQUFTLElBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6RixNQUFJLE9BQVEsR0FBRSxhQUFhLFNBQVMsSUFBVSxzQkFBZ0IsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdkYsSUFBRSxxQkFBcUI7QUFJdkIsTUFBSSxRQUFRO0FBQ1YsVUFBTSxNQUFNLEVBQUUsYUFBYSxVQUFVLEdBQTRCLE1BQU0sRUFBRSxhQUFhLFFBQVE7QUFDOUYsVUFBTSxNQUFNLG9CQUFJLElBQXNCO0FBQ3RDLFVBQU0sTUFBTSxDQUFDLE1BQWMsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDeEcsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLE9BQU8sS0FBSztBQUFFLFlBQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUFHLFFBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO0FBQUcsUUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7QUFBRyxRQUFFLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztBQUFHLFVBQUksSUFBSSxHQUFHLENBQUM7QUFBQSxJQUFHO0FBQ25LLGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxPQUFPLEtBQUs7QUFBRSxZQUFNLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUksSUFBSSxLQUFLLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSztBQUFHLFVBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQUEsSUFBRztBQUN0SixRQUFJLGNBQWM7QUFBQSxFQUNwQjtBQUNBLFNBQU87QUFDVDtBQTBDQSxTQUFTLFVBQVUsVUFBc0IsS0FBbUM7QUFTMUUsUUFBTSxNQUFnQixDQUFDLEdBQUcsTUFBZ0IsQ0FBQztBQUMzQyxXQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsUUFBUSxLQUFLO0FBQ3hDLFVBQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLFNBQVMsQ0FBQztBQUM3QyxhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUM1QixZQUFNLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSTtBQUM3QixZQUFNLElBQUksS0FBSyxLQUFLLElBQUksRUFBRSxJQUFJO0FBQzlCLFVBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLElBQUk7QUFDNUIsVUFBSSxVQUFVLFVBQWEsSUFBSSxNQUFPLEtBQUk7QUFDMUMsVUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBQ0EsV0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLFNBQVMsR0FBRyxLQUFLO0FBQzVDLGFBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLO0FBQzVCLFlBQU0sSUFBSSxJQUFJLE1BQU0sR0FBRyxLQUFLLElBQUksS0FBSyxNQUFNLEdBQUcsS0FBSyxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUs7QUFDekcsVUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFDM0I7QUFBQSxFQUNGO0FBQ0EsUUFBTSxJQUFJLElBQVUscUJBQWU7QUFDbkMsSUFBRSxhQUFhLFlBQVksSUFBVSxzQkFBZ0IsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUUsSUFBRSxhQUFhLE1BQU0sSUFBVSxzQkFBZ0IsSUFBSSxhQUFjLElBQUksU0FBUyxJQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekYsSUFBRSxTQUFTLEdBQUc7QUFDZCxJQUFFLHFCQUFxQjtBQUN2QixTQUFPO0FBQ1Q7QUFpREEsU0FBUyxRQUFRLEtBQTJCLEtBQW1DO0FBQzdFLFFBQU0sSUFBSSxJQUFVLFlBQU0sR0FBRztBQUM3QixRQUFNLElBQUksSUFBSSxhQUFhLFVBQVUsRUFBRTtBQUN2QyxRQUFNLE1BQU0sSUFBSSxhQUFhLElBQUksQ0FBQztBQUNsQyxXQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUFFLFFBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUFHLFFBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQUcsUUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFBQSxFQUFHO0FBQzVGLE1BQUksYUFBYSxTQUFTLElBQVUsc0JBQWdCLEtBQUssQ0FBQyxDQUFDO0FBQzNELFNBQU87QUFDVDtBQUtBLFNBQVMsUUFBUSxLQUEyQixPQUFxQztBQUMvRSxRQUFNLElBQUksSUFBSSxhQUFhLFVBQVUsR0FBRyxNQUFNLElBQUksYUFBYSxRQUFRO0FBQ3ZFLFFBQU0sS0FBSyxJQUFJLGFBQWEsRUFBRSxRQUFRLENBQUM7QUFDdkMsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxVQUFNLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQztBQUN2RixRQUFJLEdBQVc7QUFDZixRQUFJLE1BQU0sTUFBTSxNQUFNLElBQUk7QUFBRSxVQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsVUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLElBQUcsV0FDakQsTUFBTSxJQUFJO0FBQUUsVUFBSSxFQUFFLEtBQUssQ0FBQztBQUFHLFVBQUksRUFBRSxLQUFLLENBQUM7QUFBQSxJQUFHLE9BQzlDO0FBQUUsVUFBSSxFQUFFLEtBQUssQ0FBQztBQUFHLFVBQUksRUFBRSxLQUFLLENBQUM7QUFBQSxJQUFHO0FBQ3JDLE9BQUcsSUFBSSxDQUFDLElBQUksSUFBSTtBQUFPLE9BQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJO0FBQUEsRUFDN0M7QUFDQSxNQUFJLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLENBQUMsQ0FBQztBQUN2RCxTQUFPO0FBQ1Q7QUE0R0EsU0FBUyxPQUFPLE1BQWMsTUFBYyxPQUFlLEdBQVcsS0FBYSxJQUFJLE1BQU8sUUFBUSxPQUE2QjtBQUNqSSxRQUFNLE9BQStCLENBQUM7QUFDdEMsV0FBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsVUFBTSxJQUFJLElBQUksS0FBSyxLQUFLLElBQUk7QUFDNUIsVUFBTSxRQUFRLElBQUksTUFBTSxJQUFJLElBQUksTUFBTSxRQUFRO0FBQzlDLFVBQU0sTUFBTSxPQUFPO0FBSW5CLFVBQU0sSUFBSSxRQUFRLElBQVUsdUJBQWlCLElBQUksTUFBTSxJQUFJLE1BQU0sS0FBSyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQVUsa0JBQVksR0FBRyxLQUFLLENBQUM7QUFDbkgsTUFBRSxVQUFVLEdBQUcsT0FBTyxNQUFNLEdBQUcsQ0FBQztBQUNoQyxNQUFFLFFBQVEsS0FBSyxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUc7QUFDckMsTUFBRSxRQUFRLENBQUM7QUFBRyxNQUFFLFVBQVUsR0FBRyxHQUFHLE9BQU8sR0FBRztBQUMxQyxNQUFFLFFBQVEsQ0FBQztBQUNYLFNBQUssS0FBSyxDQUFDO0FBQUEsRUFDYjtBQUNBLFNBQU8sUUFBUSxVQUFVLElBQUksR0FBRyxHQUFHO0FBQ3JDO0FBWUEsU0FBUyxLQUFLLEtBQWlCLEdBQXNCLE1BQU0sR0FBRyxLQUFvQztBQUNoRyxRQUFNLFFBQWdDLENBQUM7QUFDdkMsUUFBTSxNQUFNLENBQUMsTUFBZSxPQUFPLE1BQU0sV0FBVyxJQUFJLEVBQUUsS0FBSyxJQUFJLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNuRixXQUFTLElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxHQUFHLEtBQUs7QUFDdkMsVUFBTSxJQUFJLElBQVUsY0FBUSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzRCxVQUFNLElBQUksSUFBVSxjQUFRLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZFLFVBQU0sSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7QUFBRyxVQUFNLE1BQU0sRUFBRSxPQUFPO0FBQ2pELFFBQUksTUFBTSxLQUFNO0FBQ2hCLFVBQU0sS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDO0FBQ2pDLFVBQU0sSUFBSSxJQUFVLHVCQUFpQixJQUFJLElBQUksT0FBTyxLQUFLLE1BQU0sS0FBSyxLQUFLLEdBQUcsS0FBSztBQUNqRixVQUFNLElBQUksSUFBVSxpQkFBVyxFQUFFLG1CQUFtQixJQUFVLGNBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQztBQUM3RixNQUFFLGdCQUFnQixDQUFDO0FBQ25CLFVBQU0sSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxlQUFlLEdBQUc7QUFDN0MsTUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLFVBQU0sS0FBSyxDQUFDO0FBQUEsRUFDZDtBQUNBLFFBQU0sTUFBTSxVQUFVLEtBQUs7QUFDM0IsU0FBTyxRQUFRLFNBQVksTUFBTSxRQUFRLEtBQUssR0FBRztBQUNuRDtBQVVBLFNBQVMsTUFBTSxLQUFpQixHQUFXLEdBQVcsT0FBaUIsS0FBb0M7QUFDekcsUUFBTSxRQUFnQyxDQUFDO0FBQ3ZDLFFBQU0sSUFBSSxJQUFVLGNBQVEsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFDeEQsV0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLFNBQVMsR0FBRyxLQUFLO0FBQ3ZDLFVBQU0sSUFBSSxJQUFVLGNBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0QsVUFBTSxJQUFJLElBQVUsY0FBUSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2RSxVQUFNLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDO0FBQUcsVUFBTSxNQUFNLElBQUksT0FBTztBQUNyRCxRQUFJLE1BQU0sS0FBTTtBQUNoQixRQUFJLFVBQVU7QUFDZCxVQUFNLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsZUFBZSxHQUFHO0FBRy9DLFFBQUksTUFBTSxJQUFJLE1BQU0sRUFBRSxJQUFJLENBQUM7QUFDM0IsUUFBSSxJQUFJLElBQUksTUFBTSxFQUFFLGVBQWUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELFFBQUksSUFBSSxTQUFTLElBQUksTUFBTyxPQUFNLElBQVUsY0FBUSxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxNQUFNLEVBQUUsZUFBZSxJQUFJLENBQUMsQ0FBQztBQUNsRyxRQUFJLFVBQVU7QUFLZCxVQUFNLE9BQU8sSUFBVSxjQUFRLEVBQUUsYUFBYSxLQUFLLEdBQUcsRUFBRSxVQUFVO0FBR2xFLFVBQU0sSUFBSSxJQUFVLGtCQUFZLEdBQUcsTUFBTSxHQUFHLENBQUM7QUFDN0MsTUFBRSxhQUFhLElBQVUsY0FBUSxFQUFFLFVBQVUsTUFBTSxLQUFLLEdBQUcsQ0FBQztBQUM1RCxNQUFFLFVBQVUsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFDL0IsVUFBTSxLQUFLLENBQUM7QUFBQSxFQUNkO0FBQ0EsUUFBTSxNQUFNLFVBQVUsS0FBSztBQUMzQixTQUFPLFFBQVEsU0FBWSxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBQ25EO0FBSUEsU0FBUyxLQUFLLEdBQW1DO0FBQy9DLFFBQU0sSUFBSSxJQUFVLGtCQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELE1BQUksRUFBRSxDQUFDLEVBQUcsR0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQUcsTUFBSSxFQUFFLENBQUMsRUFBRyxHQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFBRyxNQUFJLEVBQUUsQ0FBQyxFQUFHLEdBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUM5RSxJQUFFLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDNUIsU0FBTztBQUNUO0FBVUEsU0FBUyxRQUFRLE1BQThCO0FBQzdDLFNBQU8sS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDcEg7QUFNQSxTQUFTLFdBQVcsTUFBYyxNQUFzRjtBQUN0SCxNQUFJLE9BQU8sYUFBYSxZQUFhLFFBQU87QUFDNUMsUUFBTSxLQUFLLFNBQVMsY0FBYyxRQUFRO0FBQUcsS0FBRyxRQUFRO0FBQU0sS0FBRyxTQUFTO0FBRzFFLFFBQU0sTUFBTSxHQUFHLFdBQVcsTUFBTSxFQUFFLG9CQUFvQixLQUFLLENBQUM7QUFBc0MsTUFBSSxDQUFDLElBQUssUUFBTztBQUNuSCxPQUFLLEtBQUssSUFBSTtBQUNkLFFBQU0sTUFBTSxJQUFVLG9CQUFjLEVBQUU7QUFDdEMsTUFBSSxRQUFRLElBQUksUUFBYztBQUM5QixNQUFJLGFBQW1CO0FBQ3ZCLE1BQUksY0FBYztBQUNsQixTQUFPO0FBQ1Q7QUFJQSxTQUFTLElBQUksTUFBNEI7QUFDdkMsTUFBSSxJQUFJLFNBQVM7QUFDakIsU0FBTyxNQUFNO0FBQUUsUUFBSyxJQUFJLFVBQVUsZUFBZ0I7QUFBRyxXQUFPLElBQUk7QUFBQSxFQUFZO0FBQzlFO0FBVUEsU0FBUyxRQUFRLE1BQWMsTUFBZ0IsTUFBYyxXQUFXLE1BQWtDO0FBQ3hHLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTSxRQUFRLENBQUMsTUFBZ0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRTtBQUN0SSxRQUFJLFlBQVksTUFBTSxJQUFJO0FBQUcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsVUFBTSxPQUFPLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEtBQUssSUFBSSxTQUFTO0FBQ2pFLFNBQUssYUFBYSxHQUFHLHdCQUF3QjtBQUM3QyxTQUFLLGFBQWEsTUFBTSx3QkFBd0I7QUFDaEQsU0FBSyxhQUFhLEdBQUcscUJBQXFCO0FBQzFDLFFBQUksWUFBWTtBQUFNLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzdDLGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxXQUFXO0FBQ25FLFlBQU0sSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQzFCLFlBQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUN6QixZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsb0JBQW9CLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLHFCQUFxQjtBQUN0RixVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDckc7QUFFQSxhQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sS0FBSztBQUM3QixZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUk7QUFBRyxZQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSTtBQUNoRSxVQUFJLFlBQVksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFBVyxVQUFJLFNBQVMsR0FBRyxHQUFHLEtBQUssR0FBRztBQUFBLElBQzNFO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFJQSxTQUFTLFNBQVMsTUFBYyxNQUFnQixNQUFjLFdBQVcsS0FBa0M7QUFDekcsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsRCxVQUFNLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxRCxVQUFNLE9BQU8sSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsS0FBSyxJQUFJLFNBQVM7QUFDakUsU0FBSyxhQUFhLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTztBQUN4RCxTQUFLLGFBQWEsS0FBSyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPO0FBQzFELFNBQUssYUFBYSxHQUFHLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUs7QUFDdEQsUUFBSSxZQUFZO0FBQU0sUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDN0MsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLFdBQVcsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQ3JILFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxTQUFHLGFBQWEsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUs7QUFDOUcsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3JHO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFJQSxTQUFTLGdCQUFnQixNQUFjLE9BQWUsS0FBYSxNQUEwQztBQUMzRyxTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFlBQU0sS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLO0FBQ3hELFlBQU0sSUFBSSxLQUFLLE1BQU0sT0FBTyxPQUFPLElBQUksT0FBTyxFQUFFO0FBQ2hELFVBQUksWUFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUFLLFVBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFDaEU7QUFDQSxRQUFJLDJCQUEyQjtBQUMvQixhQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFDeEQsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFlBQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUN6QixTQUFHLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHO0FBQUcsU0FBRyxhQUFhLEdBQUcsbUJBQW1CO0FBQ2xGLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUN2STtBQUNBLFFBQUksMkJBQTJCO0FBQUEsRUFDakMsQ0FBQztBQUNIO0FBSUEsU0FBUyxVQUFVLE1BQWMsUUFBZ0IsTUFBMEM7QUFDekYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsRCxVQUFNLEtBQUssSUFBSTtBQUNmLGFBQVMsSUFBSSxHQUFHLElBQUksUUFBUSxLQUFLO0FBQy9CLFlBQU0sT0FBTyxPQUFPLElBQUksSUFBSTtBQUM1QixZQUFNLElBQUksS0FBSyxNQUFNLE1BQU0sSUFBSTtBQUMvQixVQUFJLFlBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFBSyxVQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksR0FBRyxFQUFFO0FBQ3BFLFVBQUksWUFBWTtBQUF1QixVQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUssQ0FBQztBQUN4RixlQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixjQUFNLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJO0FBQzFFLFlBQUksY0FBYyxpQkFBaUIsT0FBTyxJQUFJLElBQUksSUFBSTtBQUFLLFlBQUksWUFBWTtBQUMzRSxZQUFJLFVBQVU7QUFBRyxZQUFJLE9BQU8sSUFBSSxHQUFHLENBQUM7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLEtBQUssQ0FBQztBQUFHLFlBQUksT0FBTyxHQUFHLENBQUM7QUFBRyxZQUFJLE9BQU8sSUFBSSxLQUFLLENBQUM7QUFBRyxZQUFJLE9BQU87QUFBQSxNQUMxSDtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUlBLFNBQVMsU0FBUyxNQUFjLE9BQWlCLE1BQWMsVUFBVSxJQUFnQztBQUN2RyxTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xELFFBQUksMkJBQTJCO0FBQy9CLGFBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxLQUFLO0FBQ2hDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUN4RCxZQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDekIsWUFBTSxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxTQUFHLGFBQWEsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUs7QUFDOUcsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3ZJO0FBQ0EsUUFBSSwyQkFBMkI7QUFBQSxFQUNqQyxDQUFDO0FBQ0g7QUFXQSxTQUFTLFFBQVEsTUFBYyxNQUFjLEdBQW9DO0FBQy9FLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTUEsT0FBTSxDQUFDLE1BQWdCLEdBQUcsS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFHLFVBQU0sT0FBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSTtBQUNuRCxRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUVsRCxRQUFJLDJCQUEyQjtBQUMvQixhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsVUFBVSxLQUFLLEtBQUs7QUFDekMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksSUFBSTtBQUN0RixZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxLQUFLO0FBQ3hGLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUN2STtBQUVBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxXQUFXLElBQUksS0FBSztBQUN6QyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxLQUFLLEVBQUUsYUFBYSxDQUFDLE1BQU0sTUFBTSxJQUFJO0FBQ3hHLFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLEVBQUUsQ0FBQyxRQUFRO0FBQUcsU0FBRyxhQUFhLEtBQUssUUFBUUEsS0FBSSxFQUFFLENBQUMsT0FBTztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksRUFBRSxDQUFDLEtBQUs7QUFDbEksVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3JLO0FBRUEsVUFBTSxVQUFVLEVBQUUsV0FBVyxLQUFNLE1BQU0sS0FBSyxFQUFFLFVBQVU7QUFDMUQsVUFBTSxhQUFhLENBQUMsR0FBVyxHQUFXLElBQVksSUFBWSxNQUFjO0FBQzlFLFVBQUksWUFBWTtBQUFHLFVBQUksVUFBVTtBQUFHLFVBQUksT0FBTyxHQUFHLENBQUM7QUFBRyxVQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksRUFBRTtBQUFHLFVBQUksT0FBTztBQUM3RixVQUFJLElBQUksR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxJQUFJLEdBQUcsQ0FBQztBQUFHLFlBQUksT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBRyxZQUFJLE9BQU87QUFBQSxNQUFHO0FBQ2xHLFVBQUksSUFBSSxJQUFJLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLE9BQU8sSUFBSSxHQUFHLENBQUM7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUcsWUFBSSxPQUFPO0FBQUEsTUFBRztBQUN0RyxVQUFJLElBQUksR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxHQUFHLElBQUksQ0FBQztBQUFHLFlBQUksT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBRyxZQUFJLE9BQU87QUFBQSxNQUFHO0FBQ2xHLFVBQUksSUFBSSxJQUFJLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUcsWUFBSSxPQUFPO0FBQUEsTUFBRztBQUFBLElBQ3hHO0FBQ0EsUUFBSSxVQUFVO0FBQ2QsYUFBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEtBQUs7QUFDaEMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLElBQUksT0FBTyxNQUFNLElBQUksT0FBTyxNQUFNLElBQUksSUFBSTtBQUN4RixZQUFNLFFBQVEsSUFBSSxJQUFJO0FBQ3RCLFVBQUksMkJBQTJCLFFBQVEsV0FBVztBQUNsRCxVQUFJLGNBQWMsUUFBUSxvQkFBb0IsT0FBTyxJQUFJLElBQUksR0FBSSxNQUFNLFFBQVFBLEtBQUksSUFBSSxDQUFDLElBQUksT0FBTyxJQUFJLElBQUksSUFBSTtBQUMvRyxpQkFBVyxHQUFHLEdBQUcsS0FBSyxJQUFJLEVBQUUsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFLElBQUksR0FBRyxNQUFNLElBQUksSUFBSSxHQUFHO0FBQUEsSUFDeEU7QUFDQSxRQUFJLDJCQUEyQjtBQUFBLEVBQ2pDLENBQUM7QUFDSDtBQUVBLFNBQVMsU0FBUyxLQUEyQixPQUFxQztBQUNoRixRQUFNLElBQUksSUFBSSxhQUFhLFVBQVUsR0FBRyxNQUFNLElBQUksYUFBYSxRQUFRO0FBQ3ZFLFFBQU0sS0FBSyxJQUFJLGFBQWEsRUFBRSxRQUFRLENBQUM7QUFDdkMsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxVQUFNLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQzNELFVBQU0sSUFBSSxNQUFNLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUN6QyxPQUFHLElBQUksQ0FBQyxJQUFJLElBQUk7QUFBTyxPQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtBQUFBLEVBQ3JEO0FBQ0EsTUFBSSxhQUFhLE1BQU0sSUFBVSxzQkFBZ0IsSUFBSSxDQUFDLENBQUM7QUFDdkQsU0FBTztBQUNUO0FBNENBLFNBQVMsU0FBUyxLQUFpQyxLQUFpQyxPQUFPLEdBQVM7QUFDbEcsTUFBSSxDQUFDLElBQUs7QUFDVixNQUFJLE1BQU07QUFDVixNQUFJLE9BQU8sR0FBRztBQUFFLFFBQUksVUFBVTtBQUFLLFFBQUksWUFBWTtBQUFBLEVBQU07QUFDekQsTUFBSSxjQUFjO0FBQ3BCO0FBU0EsU0FBUyxNQUFNLEdBQThCO0FBQzNDLFFBQU0sS0FBYSxFQUFFLElBQUksS0FBYSxFQUFFLElBQUksS0FBaUIsRUFBRSxTQUFTLElBQVksRUFBRSxLQUFLO0FBQzNGLFFBQU0sSUFBSSxDQUFDLE1BQWMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sSUFBSTtBQUlwRCxRQUFNLEtBQXNCLE1BQU0sUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUs7QUFDekQsUUFBTSxJQUFJLENBQUMsTUFBZSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLElBQUk7QUFDbEUsUUFBTSxPQUFPLENBQUMsTUFBYyxTQUFrQjtBQUM1QyxVQUFNLE1BQWdCLENBQUMsR0FBRyxLQUFlLENBQUMsR0FBRyxNQUFnQixDQUFDO0FBQzlELGFBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFLLFVBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFLO0FBQUUsVUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQUcsU0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxJQUFHO0FBQzlILGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFLLFVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQ3hELFlBQU0sSUFBSSxLQUFLLEtBQUssS0FBSyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJO0FBQy9ELFVBQUksS0FBTSxLQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxVQUFRLEtBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ3RFO0FBQ0EsVUFBTSxJQUFJLElBQVUscUJBQWU7QUFDbkMsTUFBRSxhQUFhLFlBQVksSUFBVSw2QkFBdUIsS0FBSyxDQUFDLENBQUM7QUFDbkUsTUFBRSxhQUFhLE1BQU0sSUFBVSw2QkFBdUIsSUFBSSxDQUFDLENBQUM7QUFDNUQsTUFBRSxTQUFTLEdBQUc7QUFBRyxNQUFFLHFCQUFxQjtBQUFHLFdBQU87QUFBQSxFQUNwRDtBQUtBLFFBQU0sUUFBUSxDQUFDLEdBQXlCLFFBQWdCO0FBQ3RELFVBQU0sSUFBSSxFQUFFLGFBQWEsVUFBVSxFQUFFLE9BQU8sSUFBSSxJQUFVLFlBQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxhQUFhLElBQUksQ0FBQztBQUNsRyxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUFFLFVBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUFHLFVBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQUcsVUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFBQSxJQUFHO0FBQzVGLE1BQUUsYUFBYSxTQUFTLElBQVUsc0JBQWdCLEtBQUssQ0FBQyxDQUFDO0FBQUcsV0FBTztBQUFBLEVBQ3JFO0FBS0EsUUFBTSxZQUFZLENBQUMsR0FBeUIsT0FBbUI7QUFDN0QsVUFBTSxJQUFJLEVBQUUsYUFBYSxVQUFVLEVBQUUsT0FBTyxNQUFNLElBQUksYUFBYSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQVUsWUFBTTtBQUMvRixRQUFJLElBQUk7QUFDUixhQUFTLElBQUksR0FBRyxLQUFLLElBQUksSUFBSyxVQUFTLElBQUksR0FBRyxLQUFLLElBQUksS0FBSztBQUFFLFFBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFBRyxVQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUcsVUFBSSxHQUFHLElBQUksRUFBRTtBQUFHLFVBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxJQUFHO0FBQ2xJLE1BQUUsYUFBYSxTQUFTLElBQVUsc0JBQWdCLEtBQUssQ0FBQyxDQUFDO0FBQUcsV0FBTztBQUFBLEVBQ3JFO0FBQ0EsUUFBTSxPQUFPLEtBQUssR0FBRyxLQUFLLEdBQUcsT0FBTyxLQUFLLENBQUMsR0FBRyxJQUFJO0FBQ2pELFFBQU0sUUFBUSxFQUFFLFlBQVksU0FDeEIsQ0FBQyxVQUFVLE1BQU0sRUFBRSxPQUFPLEdBQUcsTUFBTSxNQUFNLEVBQUUsWUFBWSxRQUFRLENBQUMsSUFDaEUsRUFBRSxhQUFhLFNBQ2IsQ0FBQyxNQUFNLE1BQU0sRUFBRSxVQUFVLFFBQVEsR0FBRyxNQUFNLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFDM0QsQ0FBQyxNQUFNLElBQUk7QUFFakIsUUFBTSxRQUFRLENBQUMsS0FBbUIsUUFBa0I7QUFDbEQsVUFBTSxNQUFnQixDQUFDLEdBQUcsS0FBZSxDQUFDO0FBQzFDLGVBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLO0FBQzFCLFlBQU0sS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3JGLFlBQU1DLE1BQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHQyxNQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDM0csWUFBTSxJQUFJLENBQUNELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsSUFBSUQsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxHQUFHRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLElBQUlELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsR0FBR0QsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxJQUFJRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLENBQUM7QUFDdEcsWUFBTSxNQUFNLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDbkgsaUJBQVcsS0FBSyxLQUFLO0FBQUUsWUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUcsV0FBRyxLQUFLLEdBQUcsQ0FBQztBQUFBLE1BQUc7QUFBQSxJQUNwRTtBQUNBLFVBQU0sSUFBSSxJQUFVLHFCQUFlO0FBQ25DLE1BQUUsYUFBYSxZQUFZLElBQVUsNkJBQXVCLEtBQUssQ0FBQyxDQUFDO0FBQ25FLE1BQUUsYUFBYSxNQUFNLElBQVUsNkJBQXVCLElBQUksQ0FBQyxDQUFDO0FBQzVELE1BQUUscUJBQXFCO0FBQUcsV0FBTztBQUFBLEVBQ25DO0FBQ0EsUUFBTSxNQUFNLENBQUMsR0FBVyxNQUFjLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzNELFFBQU0sS0FBbUIsQ0FBQyxHQUFHLEtBQW1CLENBQUMsR0FBRyxLQUFtQixDQUFDLEdBQUcsS0FBbUIsQ0FBQztBQUMvRixXQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUFFLE9BQUcsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFBRyxPQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFBRztBQUMzRyxXQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUFFLE9BQUcsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBRyxPQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFBRztBQUMzRyxRQUFNLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFJdkcsUUFBTSxTQUFTLEVBQUUsVUFBVSxFQUFFO0FBQzdCLFFBQU0sS0FBSyxHQUFJLFdBQVcsU0FBWSxNQUFNLElBQUksQ0FBQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxLQUFNO0FBQ2pGLFNBQU8sVUFBVSxLQUFLO0FBQ3hCO0FBaUJBLFNBQVMsVUFBVSxNQUFjLE1BQWMsR0FBb0M7QUFDakYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNQyxPQUFNLENBQUMsTUFBZ0IsR0FBRyxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUcsVUFBTSxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFLFFBQVEsTUFBTSxRQUFRLEVBQUUsU0FBUztBQUM1RSxVQUFNLE1BQU0sRUFBRSxPQUFPO0FBRXJCLFVBQU0sT0FBTyxDQUFDLFNBQTJDO0FBQ3ZELGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLE1BQUssSUFBSSxFQUFFO0FBQUEsSUFDdkU7QUFJQSxVQUFNLE9BQU8sQ0FBQyxHQUFhLEdBQVcsR0FBVyxHQUFXLEdBQVcsS0FBSyxHQUFHLE9BQU8sVUFBVTtBQUM5RixZQUFNLElBQUksSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbkQsUUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxRQUFFLGFBQWEsT0FBTyxPQUFPLE1BQU0sUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLEdBQUc7QUFDdEgsUUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSztBQUNyQyxVQUFJLFlBQVk7QUFDaEIsV0FBSyxDQUFDLElBQUksT0FBTztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUcsQ0FBQztBQUFBLElBQzlHO0FBRUEsUUFBSSxZQUFZLE9BQU9BLEtBQUksSUFBSSxDQUFDO0FBQUssUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFHNUQsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsS0FBSyxLQUFLO0FBQ3hDLFlBQU0sSUFBSSxJQUFJLElBQUksTUFBTSxPQUFPO0FBQy9CLFdBQUssR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxLQUFLLE9BQU8sSUFBSSxJQUFJLFFBQVMsRUFBRSxjQUFjLElBQUksT0FBTyxJQUFJLElBQUksTUFBTSxNQUFNLElBQUksSUFBSSxHQUFHO0FBQUEsSUFDdkg7QUFJQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsZ0JBQWdCLEtBQUssS0FBSztBQUMvQyxZQUFNLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLEtBQUssT0FBTyxJQUFJLElBQUksU0FBUyxFQUFFLGdCQUFnQjtBQU0xRixXQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxhQUFhLE9BQVEsSUFBSSxLQUFLLEVBQUUsZ0JBQWdCLE9BQU8sTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLGNBQWMsSUFBSTtBQUN4SCxlQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsb0JBQW9CLEtBQUssS0FBSztBQUNuRCxjQUFNLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJO0FBQ3RELGNBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLElBQUk7QUFDNUUsWUFBSSxZQUFZLFFBQVFBLEtBQUksRUFBRSxXQUFXLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxjQUFjLFFBQVEsSUFBSSxLQUFLLEVBQUUsaUJBQWlCLElBQUk7QUFDakgsYUFBSyxDQUFDLElBQUksT0FBTztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGNBQUksS0FBSztBQUFBLFFBQUcsQ0FBQztBQUFBLE1BQy9GO0FBRUEsVUFBSSxJQUFJLEtBQUssRUFBRSxhQUFhLE9BQU87QUFDakMsY0FBTSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksTUFBTyxNQUFNLEtBQUssTUFBTyxJQUFJLElBQUk7QUFDM0QsY0FBTSxJQUFJLElBQUkscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRztBQUNyRCxjQUFNLE1BQU0sRUFBRSxZQUFZLFFBQVEsSUFBSSxJQUFJO0FBQzFDLFVBQUUsYUFBYSxHQUFHLFFBQVFBLEtBQUksR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHO0FBQUcsWUFBSSxFQUFFLFVBQVcsR0FBRSxhQUFhLE1BQU0sUUFBUUEsS0FBSSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUc7QUFBRyxVQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxLQUFLO0FBQ3ZKLFlBQUksWUFBWTtBQUNoQixhQUFLLENBQUMsT0FBTyxJQUFJLFNBQVMsS0FBSyxNQUFNLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUFBLE1BQ3JFO0FBQUEsSUFDRjtBQUdBLFVBQU0sU0FBUyxFQUFFLGNBQWMsR0FBRyxTQUFTLEVBQUUsY0FBYztBQUMzRCxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsZ0JBQWdCLElBQUksS0FBSztBQUM5QyxZQUFNLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLEtBQUssT0FBTyxJQUFJLElBQUksT0FBUTtBQUN2RSxXQUFLLE9BQU8sSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksS0FBTSxNQUFNLElBQUksSUFBSSxHQUFHO0FBQ2hFLGVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLGNBQU0sSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSztBQUMzRCxjQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLElBQUk7QUFDaEYsWUFBSSxZQUFZLFFBQVFBLEtBQUksS0FBSyxDQUFDLElBQUksTUFBTSxJQUFJLElBQUksR0FBRztBQUN2RCxhQUFLLENBQUMsSUFBSSxPQUFPO0FBQUUsY0FBSSxVQUFVO0FBQUcsY0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRyxDQUFDO0FBQUEsTUFDL0Y7QUFBQSxJQUNGO0FBS0EsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLGNBQWMsSUFBSSxLQUFLO0FBQzVDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRSxlQUFlLFFBQVEsTUFBTSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzdGLFlBQU0sS0FBSyxFQUFFLGVBQWUsT0FBUSxJQUFJLElBQUk7QUFDNUMsWUFBTSxJQUFJLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDL0MsUUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxRQUFFLGFBQWEsRUFBRSxZQUFZLE9BQU8sTUFBTSxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxJQUFJLElBQUksR0FBRyxHQUFHO0FBQ3hJLFFBQUUsYUFBYSxHQUFHLFFBQVFBLEtBQUksSUFBSSxDQUFDLEtBQUs7QUFDeEMsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRztBQUFBLElBQzdEO0FBS0EsZUFBVyxNQUFPLEVBQUUsVUFBVSxDQUFDLEdBQWE7QUFDMUMsWUFBTSxLQUFLLEtBQUssSUFBSSxHQUFHLEtBQUssS0FBSyxLQUFLLElBQUksR0FBRyxLQUFLLE9BQU8sR0FBRyxRQUFRO0FBQ3BFLFVBQUksWUFBWSxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHO0FBQUssVUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFHLEtBQUssRUFBRTtBQUN2RixlQUFTLElBQUksR0FBRyxLQUFLLEdBQUcsVUFBVSxJQUFJLEtBQUs7QUFDekMsY0FBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksTUFBTSxJQUFJLElBQUk7QUFDbkUsWUFBSSxZQUFZLFFBQVFBLEtBQUksSUFBSSxJQUFJLE1BQU0sTUFBTSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksSUFBSSxHQUFHO0FBQzFFLG1CQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxjQUFJLFVBQVU7QUFBRyxjQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRztBQUFBLE1BQ3JHO0FBQUEsSUFDRjtBQUNBLGVBQVcsTUFBTyxFQUFFLGVBQWUsQ0FBQyxHQUFhO0FBQy9DLFlBQU0sS0FBSyxLQUFLLElBQUksR0FBRztBQUN2QixlQUFTLElBQUksR0FBRyxLQUFLLEdBQUcsU0FBUyxLQUFLLEtBQUs7QUFDekMsY0FBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLFNBQVMsUUFBUSxNQUFNLE1BQU0sR0FBRyxPQUFPLFFBQVEsSUFBSSxLQUFLLEdBQUcsVUFBVTtBQUNsSCxjQUFNLEtBQUssR0FBRyxTQUFTLFFBQVEsSUFBSSxJQUFJO0FBQ3ZDLGNBQU0sSUFBSSxJQUFJLHFCQUFxQixHQUFHLElBQUksR0FBRyxLQUFLLEdBQUc7QUFDckQsVUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxVQUFFLGFBQWEsRUFBRSxZQUFZLE9BQU8sS0FBSyxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxJQUFJLElBQUksR0FBRyxHQUFHO0FBQ3ZJLFVBQUUsYUFBYSxHQUFHLFFBQVFBLEtBQUksSUFBSSxDQUFDLEtBQUs7QUFDeEMsWUFBSSxZQUFZO0FBQ2hCLG1CQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHO0FBQUEsTUFDbEU7QUFBQSxJQUNGO0FBQ0EsUUFBSSxFQUFFLFNBQVM7QUFDYixZQUFNLEtBQUssRUFBRSxTQUFTLEtBQUssS0FBSyxHQUFHLFFBQVE7QUFDM0MsVUFBSSxPQUFPLFFBQVEsRUFBRTtBQUFpQixVQUFJLFlBQVk7QUFBVSxVQUFJLGVBQWU7QUFDbkYsVUFBSSxZQUFZLFFBQVFBLEtBQUksR0FBRyxRQUFRLEtBQUssQ0FBQyxJQUFJLEdBQUcsU0FBUyxJQUFJO0FBQ2pFLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLEdBQUcsTUFBTSxLQUFLLEdBQUcsS0FBSyxPQUFPLElBQUksS0FBSyxLQUFLLEdBQUcsS0FBSyxLQUFLO0FBQUEsSUFDcEc7QUFDQSxRQUFJLEVBQUUsWUFBWTtBQUNoQixZQUFNLElBQUksRUFBRSxZQUFZLElBQUksSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLEVBQUUsZ0JBQWdCLE1BQU07QUFDaEcsUUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxRQUFFLGFBQWEsTUFBTSxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHO0FBQ2hHLFFBQUUsYUFBYSxHQUFHLFFBQVFBLEtBQUksR0FBRyxDQUFDLEtBQUs7QUFDdkMsVUFBSSxZQUFZO0FBQUcsVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUM1QztBQUdBLFFBQUksMkJBQTJCO0FBQy9CLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxTQUFTLE9BQU8sS0FBSztBQUMxQyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSTtBQUM5RSxVQUFJLFlBQVksb0JBQW9CLENBQUM7QUFDckMsVUFBSSxVQUFVO0FBQUcsVUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxVQUFJLEtBQUs7QUFBQSxJQUM5RDtBQUNBLFFBQUksMkJBQTJCO0FBQUEsRUFDakMsQ0FBQztBQUNIO0FBZ0JBLFNBQVMsVUFBVSxLQUFpQixHQUFXLE1BQU0sSUFBSSxLQUFjLE1BQU0sTUFBNEI7QUFDdkcsUUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBVSxjQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFHNUQsV0FBUyxJQUFJLEVBQUUsU0FBUyxHQUFHLElBQUksR0FBRyxJQUFLLEtBQUksRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksS0FBTSxHQUFFLE9BQU8sR0FBRyxDQUFDO0FBQzFGLE1BQUksRUFBRSxTQUFTLEVBQUcsUUFBTyxJQUFVLHFCQUFlO0FBQ2xELFFBQU0sSUFBSSxFQUFFO0FBQ1osUUFBTSxTQUEwQixDQUFDO0FBQ2pDLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLElBQUssUUFBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUM7QUFFbEYsUUFBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsTUFBTSxNQUFNLElBQUksT0FBTyxDQUFDLEVBQUUsTUFBTSxJQUNoRCxNQUFNLElBQUksSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFDbEMsT0FBTyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztBQUVwRCxNQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLElBQVUsY0FBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQVUsY0FBUSxHQUFHLEdBQUcsQ0FBQztBQUN2RixJQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVU7QUFDMUQsUUFBTSxNQUFnQixDQUFDLEdBQUcsTUFBZ0IsQ0FBQztBQUMzQyxXQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixRQUFJLElBQUksR0FBRztBQUVULFlBQU0sSUFBSSxJQUFVLGlCQUFXLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDbEUsUUFBRSxnQkFBZ0IsQ0FBQztBQUNuQixRQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVU7QUFBQSxJQUM1RDtBQUNBLFVBQU0sSUFBSSxJQUFVLGNBQVEsRUFBRSxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVO0FBRzlELFVBQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO0FBQzVFLGFBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLO0FBQzVCLFlBQU0sS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJO0FBQzdCLFlBQU0sSUFBSSxLQUFLLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDdkMsVUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDO0FBQUEsSUFDM0g7QUFBQSxFQUNGO0FBQ0EsV0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSyxVQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQU81RCxVQUFNLElBQUksSUFBSSxNQUFNLEdBQUcsS0FBSyxJQUFJLEtBQUssTUFBTSxHQUFHLE1BQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLO0FBQzFHLFFBQUksS0FBSyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtBQUFBLEVBQzdCO0FBQ0EsTUFBSSxLQUFLO0FBT1AsZUFBVyxDQUFDLE1BQU0sSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQXlDO0FBQ2hILFlBQU0sT0FBTyxJQUFJLFNBQVM7QUFDMUIsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFBRSxjQUFNLEtBQUssT0FBTyxNQUFNLEtBQUs7QUFBRyxZQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQUEsTUFBRztBQUMxRyxZQUFNLEtBQUssSUFBSSxTQUFTO0FBQUcsVUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLO0FBQzVCLGNBQU0sSUFBSSxPQUFPLEdBQUcsSUFBSSxRQUFRLElBQUksS0FBSztBQUN6QyxZQUFJLEtBQU0sS0FBSSxLQUFLLElBQUksR0FBRyxDQUFDO0FBQUEsWUFBUSxLQUFJLEtBQUssSUFBSSxHQUFHLENBQUM7QUFBQSxNQUN0RDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsUUFBTSxJQUFJLElBQVUscUJBQWU7QUFDbkMsSUFBRSxhQUFhLFlBQVksSUFBVSxzQkFBZ0IsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUUsSUFBRSxhQUFhLE1BQU0sSUFBVSxzQkFBZ0IsSUFBSSxhQUFjLElBQUksU0FBUyxJQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekYsSUFBRSxTQUFTLEdBQUc7QUFDZCxJQUFFLHFCQUFxQjtBQUN2QixTQUFPLFFBQVEsU0FBWSxJQUFJLFFBQVEsR0FBRyxHQUFHO0FBQy9DO0FBV0EsU0FBUyxhQUFhLEtBQTJCLEdBQThCO0FBQzdFLFFBQU0sSUFBSSxJQUFJLGFBQWEsVUFBVSxHQUFHLE1BQU0sSUFBSSxhQUFhLFFBQVE7QUFDdkUsUUFBTSxLQUFLLElBQUksYUFBYSxFQUFFLFFBQVEsQ0FBQztBQUN2QyxRQUFNLE1BQU0sSUFBSSxhQUFhLE9BQU87QUFDcEMsUUFBTSxPQUFPLEVBQUUsU0FBUyxTQUFZLElBQVUsWUFBTSxFQUFFLElBQUksSUFBSTtBQUM5RCxRQUFNLFFBQVEsRUFBRSxTQUFTO0FBQ3pCLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLEtBQUs7QUFDaEMsVUFBTSxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUlqQyxVQUFNLElBQUk7QUFDVixVQUFNLFFBQVEsSUFBSSxLQUFLLENBQUMsSUFBSSxTQUFTLEtBQUssRUFBRSxLQUFLLEtBQUssS0FBSyxFQUFFLEtBQUssS0FBSyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sS0FBSyxLQUFLLEVBQUUsS0FBSztBQUNoSCxRQUFJLE9BQU87QUFDVCxTQUFHLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ25DLFNBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN2QyxVQUFJLFFBQVEsSUFBSyxLQUFJLE9BQU8sR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUFBLElBQ3ZELE9BQU87QUFBRSxTQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBQUcsU0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBQUEsSUFBRztBQUFBLEVBQzNEO0FBQ0EsTUFBSSxhQUFhLE1BQU0sSUFBVSxzQkFBZ0IsSUFBSSxDQUFDLENBQUM7QUFDdkQsTUFBSSxJQUFLLEtBQUksY0FBYztBQUMzQixTQUFPO0FBQ1Q7QUFRQSxTQUFTLFFBQVEsS0FBMkIsT0FBZSxNQUFNLE9BQTZCO0FBQzVGLFFBQU0sSUFBSSxJQUFJLGFBQWEsVUFBVTtBQUNyQyxRQUFNLEtBQUssSUFBSSxhQUFhLEVBQUUsUUFBUSxDQUFDO0FBR3ZDLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLEtBQUs7QUFDaEMsVUFBTSxJQUFJLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQ3JFLE9BQUcsSUFBSSxDQUFDLElBQUksSUFBSTtBQUFPLE9BQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJO0FBQUEsRUFDN0M7QUFDQSxNQUFJLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLENBQUMsQ0FBQztBQUN2RCxTQUFPO0FBQ1Q7QUFHQSxTQUFTLE1BQU0sSUFBYyxHQUFXLEdBQWlDO0FBQ3ZFLFFBQU0sSUFBSSxJQUFVLG1CQUFhLElBQUksS0FBSyxPQUFPLEdBQUcsR0FBRyxHQUFHLEtBQUs7QUFDL0QsSUFBRSxRQUFRLEtBQUssS0FBSyxDQUFDO0FBQ3JCLElBQUUsVUFBVSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdkMsSUFBRSxxQkFBcUI7QUFDdkIsU0FBTztBQUNUO0FBWUEsU0FBUyxVQUFVLE1BQWMsTUFBYyxHQUFvQztBQUNqRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU1BLE9BQU0sQ0FBQyxNQUFnQixHQUFHLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRyxVQUFNLE9BQU8sRUFBRSxRQUFRLENBQUMsTUFBTSxNQUFNLElBQUksR0FBRyxRQUFRLEVBQUUsYUFBYSxLQUFLLE1BQU0sRUFBRSxZQUFZO0FBTzNGLFVBQU0sT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMvQixRQUFJLFlBQVksT0FBT0EsS0FBSSxJQUFJLENBQUM7QUFBSyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM1RCxRQUFJLDJCQUEyQjtBQUUvQixhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsV0FBVyxLQUFLLEtBQUs7QUFDMUMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sS0FBSyxPQUFPLElBQUksSUFBSSxNQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDbkcsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDaEQsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxLQUFLO0FBQ3hGLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQUcsVUFBSSxTQUFTLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRztBQUFBLElBQy9FO0FBS0EsUUFBSSxFQUFFLFVBQVU7QUFDZCxVQUFJLFlBQVksUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxLQUFLO0FBQUssVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUN4RSxPQUFPO0FBQ0wsWUFBTSxPQUFPLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEtBQUssSUFBSSxJQUFJO0FBQzVELFdBQUssYUFBYSxHQUFHLFFBQVFBLEtBQUksSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHO0FBQUcsV0FBSyxhQUFhLEtBQUssUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxRQUFRLElBQUksR0FBRztBQUFHLFdBQUssYUFBYSxHQUFHLFFBQVFBLEtBQUksSUFBSSxDQUFDLEtBQUs7QUFDOUosVUFBSSxZQUFZO0FBQU0sVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUMvQztBQUVBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxZQUFZLEtBQUssS0FBSztBQUMzQyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUNwRyxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxLQUFLO0FBQ3hGLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUNyRztBQUlBLFFBQUksRUFBRSxNQUFNO0FBQ1YsWUFBTSxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQU0sTUFBTSxHQUFJO0FBQ3RDLGVBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxNQUFNLEtBQUs7QUFDL0IsY0FBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxNQUFPLElBQUksSUFBSTtBQUM3QyxjQUFNLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxPQUFRLElBQUksSUFBSSxPQUFRLElBQUksTUFBTyxJQUFJLElBQUk7QUFDekYsY0FBTSxLQUFLLElBQUkscUJBQXFCLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUM5RCxXQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxLQUFLO0FBQ3hDLFdBQUcsYUFBYSxLQUFLLFFBQVFBLEtBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQzdDLFdBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksR0FBRyxDQUFDLEtBQUs7QUFDeEMsWUFBSSxZQUFZO0FBQ2hCLG1CQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFDM0U7QUFBQSxJQUNGO0FBS0EsUUFBSSxFQUFFLFFBQVE7QUFDWixVQUFJLDJCQUEyQjtBQUMvQixlQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxLQUFLO0FBQ2pDLGNBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxFQUFFLGNBQWM7QUFDN0UsY0FBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFdBQUcsYUFBYSxHQUFHLG9CQUFvQixFQUFFLGNBQWMsSUFBSSxHQUFHO0FBQUcsV0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQ3pHLFlBQUksWUFBWTtBQUNoQixtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGNBQUksS0FBSztBQUFBLFFBQUc7QUFBQSxNQUN2STtBQUNBLFVBQUksMkJBQTJCO0FBQUEsSUFDakM7QUFTQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsVUFBVSxJQUFJLEtBQUs7QUFDeEMsWUFBTSxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sTUFBTSxJQUFJO0FBQ3RDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFLFVBQVUsU0FBUyxNQUFNLElBQUksSUFBSSxNQUFNLEtBQUssRUFBRSxjQUFjLFNBQVMsTUFBTSxJQUFJO0FBQzlILFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLEtBQUs7QUFDbEYsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3ZJO0FBS0EsUUFBSSxFQUFFLFFBQVE7QUFDWixZQUFNLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxNQUFNLElBQUksR0FBRyxPQUFPLEVBQUUsYUFBYSxDQUFDLEtBQU0sR0FBSTtBQUMxRSxlQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxLQUFLO0FBQ2pDLGNBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLEtBQUssS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDO0FBQ3hFLGNBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzdELGNBQU0sS0FBSyxFQUFFLGNBQWMsU0FBUyxNQUFNLElBQUk7QUFDOUMsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUMzQixjQUFJLEtBQUs7QUFBRyxjQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7QUFBRyxjQUFJLFFBQVEsSUFBSSxJQUFJLE9BQU8sSUFBSTtBQUFHLGNBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUM1RixnQkFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELGFBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsYUFBRyxhQUFhLE1BQU0sUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRztBQUFHLGFBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLEtBQUs7QUFDeEksY0FBSSxZQUFZO0FBQUksY0FBSSxVQUFVO0FBQUcsY0FBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFDaEYsY0FBSSxRQUFRO0FBQUEsUUFDZDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBSUEsUUFBSSxFQUFFLE9BQU87QUFDWCxZQUFNLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxNQUFNLElBQUk7QUFDckMsZUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxjQUFNLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxVQUFVLFFBQVEsSUFBSSxFQUFFLE1BQU0sSUFBSTtBQUMvRCxjQUFNLE1BQU0sS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLElBQUksSUFBSyxDQUFDO0FBQzdDLFlBQUksWUFBWSxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxHQUFHO0FBQUssWUFBSSxTQUFTLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDbEYsWUFBSSxZQUFZLFFBQVFBLEtBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxhQUFhLE9BQU8sR0FBRztBQUFLLFlBQUksU0FBUyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7QUFBQSxNQUNsRztBQUFBLElBQ0Y7QUFJQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsUUFBUSxJQUFJLEtBQUs7QUFDdEMsWUFBTSxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sS0FBTSxJQUFJO0FBQ3BDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssRUFBRSxRQUFRLFFBQVEsTUFBTSxJQUFJLElBQUk7QUFDekUsWUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQ3pCLFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ3hELFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsU0FBRyxhQUFhLEtBQUssUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLEtBQUs7QUFDdkksVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDekc7QUFFQSxRQUFJLEVBQUUsTUFBTTtBQUNWLFlBQU0sSUFBSSxFQUFFLE1BQU0sT0FBTyxFQUFFLFlBQVk7QUFHdkMsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEtBQUssSUFBSSxPQUFPLElBQUk7QUFDakUsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLFlBQVksSUFBSSxHQUFHO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSztBQUNuRyxVQUFJLFlBQVk7QUFBSSxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUMzQyxlQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsZ0JBQWdCLEtBQUssS0FBSztBQUMvQyxjQUFNLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksTUFBTSxLQUFLLEtBQUssUUFBUSxJQUFJLElBQUk7QUFFMUYsY0FBTSxLQUFLLElBQUkscUJBQXFCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO0FBQ3pELFdBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLE9BQU87QUFBRyxXQUFHLGFBQWEsS0FBSyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxRQUFRO0FBQUcsV0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSztBQUMvSCxZQUFJLFlBQVk7QUFDaEIsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksUUFBUSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFBQSxRQUFHO0FBQ3ZILGlCQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixnQkFBTSxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSTtBQUN0RCxnQkFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ2hGLGNBQUksWUFBWSxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLEdBQUc7QUFDcEQscUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGdCQUFJLFVBQVU7QUFBRyxnQkFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGdCQUFJLEtBQUs7QUFBQSxVQUFHO0FBQUEsUUFDckc7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUlBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxTQUFTLE9BQU8sS0FBSztBQUMxQyxZQUFNLEtBQUssRUFBRSxXQUFXO0FBQUssWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssTUFBTSxJQUFJLEtBQUssTUFBTSxHQUFHO0FBQ3ZHLFVBQUksWUFBWSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsY0FBYyxJQUFJO0FBQUssVUFBSSxTQUFTLEdBQUcsR0FBRyxLQUFLLEdBQUc7QUFBQSxJQUM3RjtBQUNBLFFBQUksMkJBQTJCO0FBQUEsRUFDakMsQ0FBQztBQUNIO0FBS0EsU0FBUyxjQUFjLE1BQWMsTUFBYyxNQUEwQztBQUMzRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFFBQUksVUFBVSxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3hCLFFBQUksWUFBWSxLQUFLLElBQUksS0FBSyxPQUFPLENBQUM7QUFDdEMsUUFBSSxVQUFVO0FBQ2QsVUFBTSxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3JDLFFBQUksY0FBYyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7QUFFNUMsUUFBSSxVQUFVO0FBQ2QsUUFBSSxPQUFPLEdBQUcsQ0FBQztBQUFHLFFBQUksT0FBTyxHQUFHLENBQUM7QUFDakMsUUFBSSxPQUFPLEdBQUcsQ0FBQztBQUFHLFFBQUksT0FBTyxHQUFHLENBQUM7QUFDakMsUUFBSSxPQUFPO0FBRVgsUUFBSSxZQUFZLE9BQU8sSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO0FBQ2pELGVBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRztBQUNyRSxVQUFJLFVBQVU7QUFBRyxVQUFJLElBQUksR0FBRyxHQUFHLElBQUksWUFBWSxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxVQUFJLEtBQUs7QUFBQSxJQUNoRjtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBSUEsU0FBUyxXQUFXLE1BQWMsUUFBZ0IsTUFBMEM7QUFDMUYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsRCxVQUFNLEtBQUssSUFBSTtBQUNmLGFBQVMsSUFBSSxHQUFHLElBQUksUUFBUSxLQUFLO0FBQy9CLFlBQU0sT0FBTyxNQUFPLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxNQUFNLE1BQU0sSUFBSTtBQUMxRCxVQUFJLFlBQVksT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO0FBQUssVUFBSSxTQUFTLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUM1RSxVQUFJLFlBQVk7QUFBc0IsVUFBSSxTQUFTLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSyxHQUFHLENBQUM7QUFFdkYsVUFBSSxZQUFZO0FBQTBCLFVBQUksU0FBUyxJQUFJLEtBQUssS0FBSyxNQUFNLEdBQUcsS0FBSyxNQUFNLENBQUM7QUFFMUYsWUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDO0FBQ2xDLGVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQUUsY0FBTSxJQUFJLElBQUksSUFBSTtBQUFHLFlBQUksWUFBWTtBQUF1QixZQUFJLFNBQVMsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUssQ0FBQztBQUFBLE1BQUc7QUFFL0ksZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFBRSxjQUFNLElBQUksSUFBSSxLQUFLLElBQUksSUFBSTtBQUFJLFlBQUksWUFBWSxpQkFBaUIsT0FBTyxJQUFJLElBQUksR0FBRztBQUFLLFlBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFBRztBQUFBLElBQ2pKO0FBRUEsYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFBRSxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUk7QUFBRyxVQUFJLFlBQVk7QUFBdUIsVUFBSSxTQUFTLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUM7QUFBQSxJQUFHO0FBQUEsRUFDL0osQ0FBQztBQUNIO0FBS0EsU0FBUyxXQUFXLE1BQWMsTUFBYyxPQUE2QztBQUMzRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFFBQUksVUFBVSxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBRXhCLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFlBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE1BQU8sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzNILFVBQUksWUFBWSxRQUFRLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNwSCxVQUFJLFVBQVU7QUFBRyxVQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2hDLFlBQU0sSUFBSTtBQUNWLGVBQVMsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFLLEtBQUksT0FBTyxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQ25GLGVBQVMsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFLLEtBQUksT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdkYsZUFBUyxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSyxLQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQzNGLGVBQVMsSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUssS0FBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdkYsVUFBSSxVQUFVO0FBQUcsVUFBSSxLQUFLO0FBQzFCLFVBQUksWUFBWTtBQUNoQixlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSyxLQUFJLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLE1BQU0sSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUssQ0FBQztBQUFBLElBQ2hJO0FBRUEsUUFBSSxZQUFZO0FBQ2hCLFFBQUksT0FBTyxRQUFRLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQztBQUN2QyxRQUFJLGVBQWU7QUFDbkIsYUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxZQUFNLElBQUksSUFBSSxLQUFNLElBQUksS0FBSyxPQUFPLElBQUk7QUFDeEMsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFBRSxZQUFJLGNBQWM7QUFBSyxZQUFJLFNBQVMsTUFBTSxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxHQUFHLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQztBQUFBLE1BQUc7QUFDM0gsVUFBSSxjQUFjO0FBQUEsSUFDcEI7QUFBQSxFQUNGLENBQUM7QUFDSDtBQVNBLFNBQVMsV0FBVyxNQUFjLE9BQWUsR0FBYSxHQUFhLE1BQWMsSUFBUyxDQUFDLEdBQStCO0FBQ2hJLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTUEsT0FBTSxDQUFDLE1BQWdCLE9BQU8sS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlHLFVBQU0sSUFBSSxJQUFJO0FBQ2QsYUFBUyxJQUFJLEdBQUcsSUFBSSxPQUFPLEtBQUs7QUFBRSxVQUFJLFlBQVlBLEtBQUksSUFBSSxJQUFJLElBQUksQ0FBQztBQUFHLFVBQUksU0FBUyxLQUFLLE1BQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQUc7QUFDL0gsUUFBSSwyQkFBMkI7QUFDL0IsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFdBQVcsS0FBSyxLQUFLO0FBQzFDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxNQUFNLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDbEYsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFNBQUcsYUFBYSxHQUFHLG9CQUFvQixFQUFFLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFDdkYsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3JHO0FBQ0EsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFVBQVUsT0FBTyxLQUFLO0FBQUUsWUFBTSxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFO0FBQUcsVUFBSSxZQUFZLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQVUsVUFBSSxTQUFTLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEtBQUssR0FBRztBQUFBLElBQUc7QUFPbEwsUUFBSSxFQUFFLE9BQU87QUFDWCxZQUFNLEtBQUssRUFBRSxXQUFXLEtBQU0sS0FBSyxFQUFFLFdBQVc7QUFDaEQsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDOUMsZUFBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLEtBQUs7QUFDNUIsY0FBTSxJQUFJLElBQUk7QUFDZCxjQUFNLElBQUksTUFBTSxLQUFLLE9BQU8sTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLFFBQVEsQ0FBQztBQUMxRSxjQUFNLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQztBQUM1QixXQUFHLGFBQWEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUEsTUFDMUM7QUFDQSxVQUFJLFlBQVk7QUFBSSxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQzdDO0FBQ0EsUUFBSSwyQkFBMkI7QUFBQSxFQUNqQyxDQUFDO0FBQ0g7QUFNQSxTQUFTLFFBQVEsR0FBeUIsWUFBb0IsS0FBYSxPQUFlLFNBQVMsT0FBTyxLQUFLLEdBQVM7QUFDdEgsUUFBTSxJQUFJLEVBQUUsYUFBYSxVQUFVO0FBQ25DLE1BQUksT0FBTztBQUNYLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLElBQUssUUFBTyxLQUFLLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDeEYsUUFBTSxNQUFNLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxPQUFPLEtBQUssQ0FBQztBQUM5RCxRQUFNLEtBQUssSUFBSSxhQUFhLEVBQUUsUUFBUSxDQUFDO0FBQ3ZDLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLEtBQUs7QUFDaEMsVUFBTSxJQUFJLEtBQUssTUFBTSxJQUFJLFVBQVU7QUFDbkMsT0FBRyxJQUFJLENBQUMsSUFBSyxJQUFJLE1BQU87QUFBSyxPQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNO0FBQUEsRUFDbEU7QUFDQSxJQUFFLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLENBQUMsQ0FBQztBQUN2RDtBQUtBLFNBQVMsV0FBVyxNQUFjLE1BQWMsR0FBb0M7QUFDbEYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNQSxPQUFNLENBQUMsTUFBZ0IsT0FBTyxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUcsUUFBSSxZQUFZQSxLQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sTUFBTSxJQUFJLENBQUM7QUFBRyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM1RSxVQUFNLE1BQWtCLEVBQUUsV0FBVyxDQUFDLENBQUMsTUFBTSxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sTUFBTSxHQUFJLEdBQUcsQ0FBQyxLQUFNLE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBTSxNQUFNLEdBQUksQ0FBQztBQUNwSCxVQUFNLElBQUksRUFBRSxTQUFTLEtBQUssT0FBTyxLQUFLLEVBQUUsUUFBUSxRQUFRLE9BQU8sS0FBSyxFQUFFLFFBQVE7QUFDOUUsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxPQUFPLElBQUksS0FBSyxPQUFPLE9BQU8sS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksS0FBSztBQUN2SCxZQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxPQUFPLElBQUksSUFBSTtBQUtsRSxVQUFJLEVBQUUsT0FBTztBQUNYLFlBQUksWUFBWUEsTUFBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxLQUFLLENBQUM7QUFDNUUsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxjQUFJLFVBQVU7QUFBRyxjQUFJLFFBQVEsSUFBSSxLQUFLLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRztBQUFBLE1BQ3ZMO0FBQ0EsVUFBSSxZQUFZQSxLQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNwRCxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBRWpKLFVBQUksWUFBWSxvQkFBb0IsRUFBRSxTQUFTLElBQUk7QUFDbkQsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLFFBQVEsSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3RMO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFNQSxTQUFTLFVBQVUsTUFBYyxNQUFjLEdBQW9DO0FBQ2pGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTSxTQUFTLEVBQUUsVUFBVSxLQUFNLFFBQVEsRUFBRSxTQUFTLEdBQUcsUUFBUSxFQUFFLFNBQVM7QUFPMUUsVUFBTSxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQy9CLFFBQUksWUFBWSxPQUFPLElBQUksSUFBSSxDQUFDO0FBQUssUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDNUQsUUFBSSwyQkFBMkI7QUFDL0IsVUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLE1BQU07QUFDbEMsUUFBSSxZQUFZLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3JDLFVBQU0sUUFBUSxJQUFJLE9BQU8sSUFBSSxTQUFTLEVBQUUsYUFBYTtBQUVyRCxhQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sS0FBSztBQUFFLFlBQU0sSUFBSSxJQUFJLFFBQVEsUUFBUSxPQUFPLElBQUksSUFBSSxPQUFPLFFBQVE7QUFBSyxVQUFJLFNBQVMsR0FBRyxJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUk7QUFBRyxVQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxHQUFHLElBQUksSUFBSTtBQUFBLElBQUc7QUFDdkwsYUFBUyxJQUFJLEdBQUcsSUFBSSxPQUFPLEtBQUs7QUFBRSxZQUFNLElBQUksS0FBSyxNQUFNLE9BQU8sSUFBSSxPQUFPO0FBQVEsVUFBSSxTQUFTLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQztBQUFBLElBQUc7QUFFakgsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFBRSxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFO0FBQy9ILFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO0FBQ2xKLFVBQUksWUFBWTtBQUFJLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQUU7QUFDN0osUUFBSSwyQkFBMkI7QUFBQSxFQUNqQyxDQUFDO0FBQ0g7QUFVQSxTQUFTLFNBQVMsTUFBYyxNQUFjLEdBQW9DO0FBQ2hGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTSxPQUFPLEVBQUUsUUFBUSxLQUFLLE9BQU8sRUFBRSxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsU0FBUyxFQUFFLFVBQVU7QUFDaEYsVUFBTSxLQUFLLEtBQUssTUFBTSxPQUFPLE1BQU0sR0FBRyxLQUFLLEtBQUssTUFBTSxPQUFPLEdBQUcsR0FBRyxLQUFLLEtBQUssTUFBTSxPQUFPLEdBQUc7QUFDN0YsVUFBTSxPQUFPLEVBQUUsUUFBUSxDQUFDLEtBQUssS0FBSyxHQUFHO0FBQ3JDLFFBQUksWUFBWSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUFLLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3ZFLGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSztBQUFFLFlBQU0sSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxFQUFFO0FBQUcsVUFBSSxZQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQUssVUFBSSxTQUFTLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQUc7QUFFeEssVUFBTSxRQUFRLENBQUMsSUFBWSxJQUFZLFlBQXFCO0FBQzFELFlBQU0sSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQztBQUN6RSxZQUFNLEtBQUssRUFBRSxXQUFXLEdBQUcsS0FBSyxJQUFJO0FBQ3BDLFVBQUksWUFBWSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNyQyxlQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUFFLGNBQU0sSUFBSSxNQUFNLEtBQUssT0FBTyxJQUFJLE1BQU0sS0FBSztBQUFJLFlBQUksU0FBUyxHQUFHLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtBQUFBLE1BQUc7QUFDbEgsWUFBTSxLQUFLLEVBQUUsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLGFBQWE7QUFDakQsZUFBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLEtBQUs7QUFDNUIsY0FBTSxLQUFLLE1BQU0sSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLLEtBQUssS0FBSztBQUVsSSxjQUFNLFFBQVEsTUFBTSxLQUFLLE1BQU07QUFDL0IsWUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFPO0FBQ3hCLGNBQU0sTUFBTSxVQUFVLEtBQU0sTUFBTSxJQUFJLEtBQUssTUFBTSxLQUFLLE1BQU0sTUFBTyxNQUFNLFVBQVUsS0FBTSxNQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sT0FBTztBQUMzSCxpQkFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsZ0JBQU0sTUFBTSxJQUFJLE9BQU8sS0FBTSxJQUFJLElBQUssTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLE9BQU8sSUFBSSxNQUFNLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSTtBQUN6RyxxQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsZ0JBQUksVUFBVTtBQUFHLGdCQUFJLE9BQU8sSUFBSSxJQUFJLEdBQUc7QUFBRyxnQkFBSSxPQUFPLElBQUksS0FBSyxHQUFHLEdBQUc7QUFBRyxnQkFBSSxPQUFPLElBQUksS0FBSyxJQUFJLElBQUksR0FBRztBQUFHLGdCQUFJLE9BQU8sSUFBSSxLQUFLLElBQUksR0FBRztBQUFHLGdCQUFJLFVBQVU7QUFBRyxnQkFBSSxLQUFLO0FBQUEsVUFBRztBQUFBLFFBQ3JNO0FBQUEsTUFDRjtBQUVBLFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEtBQUssSUFBSSxNQUFNLEdBQUcsS0FBSyxJQUFJLElBQUk7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUTtBQUMzSyxVQUFJLFlBQVk7QUFBSSxVQUFJLFNBQVMsR0FBRyxLQUFLLElBQUksTUFBTSxHQUFHLElBQUksSUFBSTtBQUM5RCxVQUFJLFlBQVksT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFBSyxVQUFJLFNBQVMsR0FBRyxLQUFLLElBQUksT0FBTyxHQUFHLElBQUksS0FBSztBQUFHLFVBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLO0FBQ3BJLFVBQUksWUFBWSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUFLLFVBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxNQUFNLEdBQUcsQ0FBQztBQUFHLFVBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxNQUFNLEdBQUcsQ0FBQztBQUVuSCxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxJQUFJLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLO0FBQy9NLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHO0FBQzVELGVBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxVQUFVLEtBQUssS0FBSztBQUN6QyxjQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksTUFBTSxNQUFNLElBQUksSUFBSSxPQUFPLElBQUksT0FBTyxNQUFNLElBQUksSUFBSSxPQUFPLElBQUksTUFBTSxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3BLLGNBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFHLFdBQUcsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87QUFBRyxXQUFHLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO0FBQ2xKLFlBQUksWUFBWTtBQUFJLG1CQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxjQUFJLFVBQVU7QUFBRyxjQUFJLFFBQVEsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFBQSxRQUFHO0FBQUEsTUFDL0k7QUFDQSxVQUFJLDJCQUEyQjtBQUMvQixlQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUFFLGNBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFO0FBQUcsWUFBSSxZQUFZLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQztBQUFLLFlBQUksU0FBUyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQUEsTUFBRztBQUM5TyxVQUFJLDJCQUEyQjtBQUFBLElBQ2pDO0FBQ0EsVUFBTSxHQUFHLElBQUksR0FBRyxJQUFJO0FBQ3BCLFVBQU0sSUFBSSxHQUFHLEdBQUcsS0FBSztBQUFBLEVBQ3ZCLENBQUM7QUFDSDtBQUtBLFNBQVMsUUFBUSxHQUFtQztBQUNsRCxRQUFNLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUk7QUFDeEMsUUFBTSxJQUFJLElBQVUsa0JBQVksR0FBRyxHQUFHLENBQUM7QUFDdkMsUUFBTSxJQUFJLEVBQUUsYUFBYSxVQUFVO0FBQ25DLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLEtBQUs7QUFDaEMsVUFBTSxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLO0FBQ2hDLE1BQUUsS0FBSyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssTUFBTSxLQUFLLE1BQU0sRUFBRTtBQUFHLE1BQUUsS0FBSyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssTUFBTSxLQUFLLE1BQU0sRUFBRTtBQUFBLEVBQ3pGO0FBQ0EsSUFBRSxxQkFBcUI7QUFDdkIsSUFBRSxVQUFVLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTtBQUM5QixTQUFPO0FBQ1Q7QUF3QkEsU0FBUyxTQUFTLE1BQWMsTUFBYyxHQUFvQztBQUNoRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU0sTUFBTSxFQUFFLE9BQU8sTUFBTSxLQUFLLEVBQUUsTUFBTTtBQUN4QyxVQUFNLElBQUksQ0FBQyxNQUFjO0FBQUUsWUFBTSxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUM7QUFBRyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQUEsSUFBSztBQUN4RixRQUFJLFlBQVksRUFBRSxHQUFHO0FBQUcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFFL0MsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFVBQVUsS0FBSyxLQUFLO0FBQ3pDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksSUFBSTtBQUM1RCxZQUFNLEtBQUssSUFBSSxJQUFJO0FBQ25CLFlBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxRQUFRLE9BQU8sSUFBSSxJQUFJLE9BQU8sTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUM5RSxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsUUFBUSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLGNBQWMsSUFBSSxHQUFHO0FBQ3ZILFNBQUcsYUFBYSxHQUFHLGVBQWU7QUFDbEMsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3ZJO0FBVUEsVUFBTSxLQUFLLE1BQU0sS0FBSyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxLQUFLLE9BQU8sSUFBSSxJQUFJLElBQUssQ0FBQztBQUNqSCxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsV0FBVyxNQUFNLEtBQUs7QUFDM0MsVUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJO0FBQy9CLFVBQUksR0FBRyxVQUFVLElBQUksS0FBSyxFQUFFLGdCQUFnQixPQUFPO0FBQ2pELGNBQU0sSUFBSSxHQUFJLElBQUksSUFBSSxHQUFHLFNBQVUsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMxRixZQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUk7QUFBRyxZQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUk7QUFBQSxNQUN2RDtBQUNBLFlBQU0sSUFBSSxNQUFNLEVBQUUsY0FBYyxRQUFTLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUUsY0FBYztBQUMvRSxZQUFNLElBQUksT0FBTyxJQUFJLFFBQVEsTUFBTSxJQUFJLElBQUk7QUFDM0MsWUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDO0FBQ2xDLFlBQU0sS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLO0FBQzdCLFVBQUksWUFBWSxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLE9BQU8sSUFBSSxLQUFLLEVBQUUsbUJBQW1CLEtBQUs7QUFDMUosaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFDeEQsWUFBSSxVQUFVO0FBQ2QsaUJBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLGdCQUFNLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLEdBQUcsS0FBSyxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzdELGdCQUFNLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUs7QUFDdkUsY0FBSSxNQUFNLEVBQUcsS0FBSSxPQUFPLElBQUksRUFBRTtBQUFBLGNBQVEsS0FBSSxPQUFPLElBQUksRUFBRTtBQUFBLFFBQ3pEO0FBQ0EsWUFBSSxVQUFVO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFDNUI7QUFBQSxJQUNGO0FBRUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFdBQVcsS0FBSyxLQUFLO0FBQzFDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksTUFBTyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJO0FBQy9GLFlBQU0sSUFBSSxNQUFNLE1BQU0sTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQzVELFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLElBQUksR0FBRyxLQUFLLEdBQUc7QUFDdEQsU0FBRyxhQUFhLEdBQUcsUUFBUSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsS0FBSztBQUNqRyxTQUFHLGFBQWEsTUFBTSxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUN2RyxTQUFHLGFBQWEsR0FBRyxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxLQUFLO0FBQ2pHLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUc7QUFBQSxJQUM5RDtBQU9BLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxTQUFTLElBQUksS0FBSztBQUN2QyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSTtBQUN2RSxZQUFNLEtBQUssSUFBSSxJQUFJO0FBQ25CLFlBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxRQUFRLE1BQU0sSUFBSSxJQUFJLE9BQU8sTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUM3RSxVQUFJLFlBQVksUUFBUSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFPLElBQUksSUFBSSxHQUFJO0FBQ2hILGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQzdGO0FBQ0EsUUFBSSxVQUFVO0FBQ2QsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLGFBQWEsSUFBSSxLQUFLO0FBQzNDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLE1BQU0sS0FBSyxPQUFRLElBQUksSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLE9BQU8sTUFBTSxLQUFLLEtBQUs7QUFDM0csWUFBTSxLQUFLLElBQUksSUFBSTtBQUNuQixZQUFNLElBQUksS0FBSyxPQUFPLElBQUksUUFBUSxNQUFNLElBQUksSUFBSSxPQUFPLE1BQU0sTUFBTSxNQUFNLElBQUksSUFBSTtBQUNqRixVQUFJLGNBQWMsUUFBUSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFPLElBQUksSUFBSSxJQUFJO0FBQ2xILFVBQUksWUFBWSxNQUFNLElBQUksSUFBSTtBQUM5QixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUN4RCxZQUFJLFVBQVU7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksRUFBRTtBQUMxQyxZQUFJLE9BQU8sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHO0FBQUcsWUFBSSxPQUFPO0FBQUEsTUFDakY7QUFBQSxJQUNGO0FBRUEsUUFBSSxFQUFFLE1BQU07QUFDVixZQUFNLElBQUksRUFBRSxNQUFNLE9BQU8sRUFBRSxZQUFZO0FBQ3ZDLFlBQU0sT0FBTyxHQUFHLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUsxRixpQkFBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLGVBQWUsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFpQjtBQUN6RixjQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxNQUFNLEdBQUcsT0FBTyxNQUFNLElBQUksQ0FBQztBQUNsRSxXQUFHLGFBQWEsR0FBRyxRQUFRLElBQUksSUFBSSxFQUFFLFlBQVksR0FBSSxHQUFHO0FBQUcsV0FBRyxhQUFhLEdBQUcsUUFBUSxJQUFJLEtBQUs7QUFDL0YsWUFBSSxZQUFZO0FBQUksWUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxNQUM3QztBQUNBLGVBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxZQUFZLEtBQUssS0FBSztBQUMzQyxjQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3pDLGNBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsY0FBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksUUFBUSxNQUFNLElBQUk7QUFDL0MsY0FBTSxNQUFNLEtBQUssTUFBTyxJQUFJLElBQUk7QUFDaEMsY0FBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRztBQUN0RCxXQUFHLGFBQWEsR0FBRyxRQUFRLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLEdBQUc7QUFBRyxXQUFHLGFBQWEsR0FBRyxRQUFRLElBQUksS0FBSztBQUNoRyxZQUFJLFlBQVk7QUFDaEIsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHO0FBQUEsTUFDOUQ7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFrQkEsU0FBUyxPQUFPLEdBQXlCLEdBQVcsR0FBVyxPQUFlLE9BQU8sR0FBeUI7QUFDNUcsUUFBTSxLQUFLLEVBQUUsYUFBYSxJQUFJO0FBQzlCLFFBQU0sS0FBTSxJQUFJLEtBQUssS0FBSyxJQUFLLE9BQU8sS0FBSyxJQUFJO0FBQy9DLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxPQUFPLElBQUssSUFBRyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJO0FBQ3RGLFNBQU87QUFDVDtBQUlBLFNBQVMsV0FBVyxLQUErQixLQUFtQixJQUFZLElBQVksSUFBWSxJQUFZLEdBQVcsTUFBYyxPQUFlLE1BQW9CO0FBQ2hMLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFVBQU0sSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSTtBQUNsRixRQUFJLFlBQVksUUFBUSxJQUFJLElBQUksT0FBTyxPQUFPLEtBQUssSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ25FLFFBQUksU0FBUyxHQUFHLElBQUksR0FBRyxLQUFLLEVBQUU7QUFBQSxFQUNoQztBQUNGO0FBS0EsU0FBUyxlQUFlLEtBQStCLEtBQW1CLEdBQVcsSUFBWSxJQUFZLEdBQVcsT0FBZSxTQUF1QjtBQUM1SixXQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixVQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsTUFBTSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sT0FBTyxJQUFJLElBQUk7QUFDckUsVUFBTSxJQUFJLE9BQU8sZUFBZSxlQUFlLElBQUksT0FBTyxTQUFTLE1BQU0sSUFBSSxJQUFJLE9BQU8sV0FBVyxNQUFNLElBQUksSUFBSTtBQUNqSCxVQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHO0FBQ3BELE9BQUcsYUFBYSxHQUFHLFFBQVEsQ0FBQyxLQUFLO0FBQUcsT0FBRyxhQUFhLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsT0FBRyxhQUFhLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsT0FBRyxhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUs7QUFDekosUUFBSSxZQUFZO0FBQ2hCLGVBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHO0FBQUEsRUFDakU7QUFDRjtBQUtBLFNBQVMsY0FBYyxLQUErQixLQUFtQixHQUFXLE9BQW1CLElBQVksSUFBWSxHQUFXLE1BQW9CO0FBQzVKLGFBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxPQUFPO0FBQzVCLFVBQU0sS0FBSyxJQUFJLHFCQUFxQixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxJQUFJLEdBQUc7QUFDN0UsT0FBRyxhQUFhLEdBQUcsa0JBQWtCLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxHQUFHO0FBQUcsT0FBRyxhQUFhLEdBQUcsa0JBQWtCO0FBQ3RHLFFBQUksWUFBWTtBQUNoQixlQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxVQUFJLFVBQVU7QUFBRyxVQUFJLFFBQVEsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFVBQUksS0FBSztBQUFBLElBQUc7QUFDakgsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksS0FBSztBQUN4RSxVQUFJLFlBQVksa0JBQWtCLE9BQU8sSUFBSSxJQUFJLE1BQU0sUUFBUSxDQUFDLENBQUM7QUFDakUsWUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSTtBQUN6QyxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxHQUFHLElBQUksSUFBSSxHQUFHLENBQUM7QUFBQSxJQUMzRDtBQUFBLEVBQ0Y7QUFDRjtBQU9BLFNBQVMsU0FBUyxNQUFjLE1BQTBDO0FBQ3hFLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTSxPQUFPLFlBQVksUUFBUTtBQUNqQyxRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUVsRCxVQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM5QyxPQUFHLGFBQWEsR0FBRyxzQkFBc0I7QUFBRyxPQUFHLGFBQWEsS0FBSyx3QkFBd0I7QUFBRyxPQUFHLGFBQWEsR0FBRyxzQkFBc0I7QUFDckksUUFBSSxZQUFZO0FBQUksUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDM0MsbUJBQWUsS0FBSyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksTUFBTSxHQUFJO0FBRWhELFVBQU0sUUFBUSxDQUFDLEtBQUssTUFBTyxJQUFJLElBQUksTUFBTyxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUs7QUFFbkUsVUFBTSxXQUFXLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztBQUNoQyxhQUFTLElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxRQUFRLElBQUssWUFBVyxLQUFLLEtBQUssR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxDQUFDLEdBQUcsS0FBSyxNQUFNLE9BQU8sSUFBSTtBQUU3SCxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDOUQsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUc7QUFDMUQsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRztBQUFBLElBQ2hFO0FBRUEsZUFBVyxLQUFLLE9BQU87QUFDckIsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsSUFBSSxJQUFJLE1BQU0sR0FBRyxDQUFDO0FBQ3pELFNBQUcsYUFBYSxHQUFHLGtCQUFrQjtBQUFHLFNBQUcsYUFBYSxHQUFHLHFCQUFxQjtBQUNoRixVQUFJLFlBQVk7QUFBSSxVQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksSUFBSTtBQUM3RCxVQUFJLFlBQVk7QUFBdUIsVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDaEUsVUFBSSxZQUFZO0FBQTBCLFVBQUksU0FBUyxHQUFHLElBQUksS0FBSyxHQUFHLENBQUM7QUFDdkUsVUFBSSxZQUFZO0FBQXVCLFVBQUksU0FBUyxHQUFHLElBQUksS0FBSyxHQUFHLEdBQUc7QUFDdEUsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUk7QUFDN0QsU0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQUcsU0FBRyxhQUFhLEdBQUcsa0JBQWtCO0FBQ2hGLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksSUFBSTtBQUFBLElBQ3hEO0FBRUEsVUFBTSxRQUFvQixDQUFDO0FBQzNCLGVBQVcsS0FBSyxNQUFPLFVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFLLE9BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxLQUFLLENBQUM7QUFDeEcsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUssT0FBTSxLQUFLLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUM3RCxrQkFBYyxLQUFLLEtBQUssR0FBRyxPQUFPLElBQUksS0FBTSxJQUFJLE1BQU0sSUFBSSxHQUFJO0FBQUEsRUFDaEUsQ0FBQztBQUNIO0FBcUJBLFNBQVMsV0FBVyxNQUFjLE1BQWMsR0FBb0M7QUFDbEYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNLEtBQWEsRUFBRSxXQUFXLEdBQUcsS0FBSyxJQUFJO0FBQzVDLFVBQU0sUUFBZ0IsRUFBRSxTQUFTLEtBQUssU0FBaUIsRUFBRSxVQUFVO0FBQ25FLFVBQU0sT0FBZSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsT0FBZSxFQUFFLFFBQVEsQ0FBQyxLQUFLO0FBQ3ZFLFVBQU0sU0FBaUIsRUFBRSxVQUFVO0FBQ25DLFVBQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFjLEVBQUUsV0FBVyxDQUFDLEtBQUssS0FBSyxFQUFFO0FBQ3pELFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBSWxELFVBQU0sUUFBb0IsQ0FBQztBQUMzQixhQUFTLElBQUksR0FBRyxLQUFLLElBQUksS0FBSztBQUM1QixZQUFNLE1BQWdCLENBQUM7QUFDdkIsVUFBSSxJQUFJO0FBQ1IsZUFBUyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUs7QUFDM0IsWUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUcsTUFBSyxJQUFJLElBQUksSUFBSSxLQUFLLFNBQVM7QUFDOUUsWUFBSSxLQUFLLElBQUksS0FBSyxDQUFDO0FBQUEsTUFDckI7QUFDQSxZQUFNLEtBQUssR0FBRztBQUFBLElBQ2hCO0FBRUEsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsWUFBTSxLQUFLLElBQUk7QUFFZixZQUFNLElBQUksSUFBSSxTQUFTLElBQUk7QUFDM0IsWUFBTSxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUM7QUFDNUIsVUFBSSxZQUFZLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQztBQUN6RSxVQUFJLFNBQVMsR0FBRyxLQUFLLFNBQVMsS0FBSyxHQUFHLEdBQUcsS0FBSyxJQUFJLFNBQVMsS0FBSyxDQUFDO0FBRWpFLGVBQVMsSUFBSSxHQUFHLElBQUksT0FBTyxLQUFLO0FBQzlCLGNBQU0sSUFBSSxJQUFJLElBQUk7QUFDbEIsY0FBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLE9BQU87QUFDakMsY0FBTSxPQUFPLElBQUksVUFBVSxNQUFNLElBQUksSUFBSTtBQUN6QyxjQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDekIsY0FBTSxPQUFPLElBQUksSUFBSTtBQUNyQixZQUFJLFlBQVksT0FBTyxRQUFRLEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsTUFDL0YscUJBQXFCLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQztBQUMvRCxjQUFNLE9BQU8sS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJO0FBQ3ZDLGNBQU0sT0FBTyxNQUFNLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJO0FBQ3RFLFlBQUksU0FBUyxHQUFHLE1BQU0sR0FBRyxLQUFLLElBQUksR0FBRyxPQUFPLElBQUksQ0FBQztBQUdqRCxjQUFNLE9BQWUsRUFBRSxRQUFRO0FBQy9CLFlBQUksT0FBTyxLQUFLLElBQUksSUFBSSxNQUFNO0FBQzVCLGdCQUFNLElBQUksS0FBSyxRQUFRLE1BQU0sSUFBSSxJQUFJO0FBQ3JDLGNBQUksVUFBVTtBQUFHLGNBQUksT0FBTyxHQUFHLElBQUk7QUFBRyxjQUFJLE9BQU8sSUFBSSxHQUFHLElBQUk7QUFBRyxjQUFJLE9BQU8sSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQUcsY0FBSSxVQUFVO0FBQUcsY0FBSSxLQUFLO0FBQzFILGNBQUksWUFBWSxrQkFBa0IsTUFBTyxJQUFJLElBQUksTUFBTSxRQUFRLENBQUMsQ0FBQztBQUNqRSxjQUFJLFNBQVMsSUFBSSxHQUFHLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRztBQUFBLFFBQzFDO0FBQUEsTUFDRjtBQUdBLGVBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxTQUFTLElBQUksS0FBSztBQUN2QyxjQUFNLElBQUksSUFBSSxJQUFJO0FBQ2xCLFlBQUksWUFBWSxrQkFBa0IsTUFBTyxJQUFJLElBQUksTUFBTSxRQUFRLENBQUMsQ0FBQztBQUNqRSxZQUFJLFNBQVMsR0FBRyxLQUFLLEtBQUssS0FBSyxHQUFHLE1BQU0sTUFBTSxJQUFJLElBQUksSUFBSTtBQUFBLE1BQzVEO0FBRUEsWUFBTSxPQUFPLEVBQUUsUUFBUTtBQUN2QixlQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sS0FBSztBQUM3QixjQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzdDLFlBQUksWUFBWSxrQkFBa0IsTUFBTyxJQUFJLElBQUksTUFBTSxRQUFRLENBQUMsQ0FBQztBQUNqRSxZQUFJLFNBQVMsR0FBRyxLQUFLLEtBQUssTUFBTSxHQUFHLE1BQU0sTUFBTSxJQUFJLElBQUksSUFBSTtBQUFBLE1BQzdEO0FBQUEsSUFDRjtBQU1BLGFBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFLO0FBQzVCLGVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLGNBQU0sS0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQ3JCLGNBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEtBQUssS0FBSyxNQUFNLEdBQUcsRUFBRTtBQUM1RCxXQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFBRyxXQUFHLGFBQWEsR0FBRyxxQkFBcUIsRUFBRSxPQUFPLE1BQU0sUUFBUSxDQUFDLENBQUMsR0FBRztBQUMvRyxZQUFJLFlBQVk7QUFDaEIsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLEdBQUcsS0FBSyxLQUFLLE9BQU8sSUFBSSxHQUFHLEtBQUssSUFBSTtBQUMzRSxjQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsS0FBSyxLQUFLLElBQUk7QUFDNUQsV0FBRyxhQUFhLEdBQUcsa0JBQWtCLEVBQUUsVUFBVSxNQUFNLFFBQVEsQ0FBQyxDQUFDLEdBQUc7QUFDcEUsV0FBRyxhQUFhLEdBQUcsa0JBQWtCO0FBQ3JDLFlBQUksWUFBWTtBQUNoQixtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUk7QUFBQSxNQUNqRTtBQUFBLElBQ0Y7QUFHQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsUUFBUSxJQUFJLEtBQUs7QUFDdEMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzVELFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxZQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDekIsU0FBRyxhQUFhLEdBQUcsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLHFCQUFxQjtBQUNqRyxVQUFJLDJCQUEyQjtBQUFZLFVBQUksWUFBWTtBQUMzRCxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFDckksVUFBSSwyQkFBMkI7QUFBQSxJQUNqQztBQUVBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxPQUFPLElBQUksS0FBSztBQUNyQyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDNUQsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFlBQU0sSUFBSSxNQUFPLElBQUksSUFBSTtBQUN6QixTQUFHLGFBQWEsR0FBRyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHO0FBQUcsU0FBRyxhQUFhLEtBQUssa0JBQWtCLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxHQUFHO0FBQUcsU0FBRyxhQUFhLEdBQUcsa0JBQWtCO0FBQzNKLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUN2STtBQUVBLG1CQUFlLEtBQUssS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLFdBQVcsSUFBSSxLQUFNLElBQUk7QUFBQSxFQUMvRCxDQUFDO0FBQ0g7QUFPQSxTQUFTLFNBQVMsTUFBYyxNQUFjLEdBQW9DO0FBQ2hGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsUUFBSSxZQUFZO0FBQVcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbEQsVUFBTSxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxLQUFLLEVBQUUsU0FBUyxHQUFHLENBQUM7QUFFekQsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssT0FBTztBQUNqQyxVQUFJLFlBQVksa0JBQWtCLE1BQU8sSUFBSSxJQUFJLE1BQU0sUUFBUSxDQUFDLENBQUM7QUFBSyxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM3RixVQUFJLFlBQVk7QUFBMEIsVUFBSSxTQUFTLElBQUksR0FBRyxHQUFHLEtBQUssSUFBSSxHQUFHLFFBQVEsSUFBSSxHQUFHLENBQUM7QUFBQSxJQUMvRjtBQUNBLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLE9BQU87QUFDakMsVUFBSSxZQUFZLGtCQUFrQixNQUFPLElBQUksSUFBSSxNQUFNLFFBQVEsQ0FBQyxDQUFDO0FBQUssVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDN0YsVUFBSSxZQUFZO0FBQTBCLFVBQUksU0FBUyxHQUFHLElBQUksR0FBRyxHQUFHLEtBQUssSUFBSSxHQUFHLFFBQVEsSUFBSSxDQUFDO0FBQUEsSUFDL0Y7QUFFQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsV0FBVyxJQUFJLEtBQUs7QUFDekMsWUFBTSxRQUFRLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUk7QUFDckYsVUFBSSxZQUFZO0FBQ2hCLFVBQUksWUFBWTtBQUNoQixVQUFJLE9BQU87QUFBRSxZQUFJLFNBQVMsSUFBSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEdBQUc7QUFBRyxZQUFJLFlBQVk7QUFBdUIsWUFBSSxTQUFTLElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxLQUFLLENBQUM7QUFBQSxNQUFHLE9BQ25JO0FBQUUsWUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHO0FBQUcsWUFBSSxZQUFZO0FBQXVCLFlBQUksU0FBUyxJQUFJLEtBQUssSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHO0FBQUEsTUFBRztBQUFBLElBQ3BJO0FBRUEsbUJBQWUsS0FBSyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsV0FBVyxJQUFJLEtBQU0sSUFBSTtBQUFBLEVBQy9ELENBQUM7QUFDSDtBQVNBLFNBQVMsU0FBUyxNQUFjLE1BQWMsR0FBb0M7QUFDaEYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNLE9BQU8sWUFBWSxRQUFRO0FBQ2pDLFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xELG1CQUFlLEtBQUssS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLFdBQVcsSUFBSSxNQUFNLEdBQUk7QUFDN0QsZUFBVyxLQUFLLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLFNBQVMsS0FBSyxNQUFNLE9BQU8sSUFBSTtBQUVsRSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsU0FBUyxJQUFJLEtBQUs7QUFDdkMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJO0FBQzdELGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQ3hELFlBQUksWUFBWTtBQUNoQixZQUFJLFVBQVU7QUFBRyxZQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFDdEYsWUFBSSxjQUFjO0FBQXVCLFlBQUksWUFBWTtBQUN6RCxpQkFBUyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUs7QUFBRSxjQUFJLFVBQVU7QUFBRyxjQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLE1BQU0sR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxPQUFPO0FBQUEsUUFBRztBQUFBLE1BQ3hKO0FBQUEsSUFDRjtBQUVBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxVQUFVLElBQUksS0FBSztBQUN4QyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUk7QUFDN0QsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUc7QUFDMUQsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRztBQUFBLElBQ2hFO0FBQ0EsVUFBTSxRQUFvQixDQUFDO0FBQzNCLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxTQUFTLElBQUksSUFBSyxPQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQzFFLGtCQUFjLEtBQUssS0FBSyxHQUFHLE9BQU8sSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJLElBQUk7QUFBQSxFQUNoRSxDQUFDO0FBQ0g7QUF1QkEsU0FBUyxTQUFTLE1BQWMsTUFBYyxHQUFvQztBQUNoRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU1BLE9BQU0sQ0FBQyxNQUFnQixHQUFHLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRyxVQUFNLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxRQUFRLEVBQUUsU0FBUyxNQUFNLE9BQU8sRUFBRSxRQUFRLE1BQU0sT0FBTyxFQUFFLFFBQVE7QUFDbkcsVUFBTSxPQUFPLENBQUMsU0FBMkM7QUFDdkQsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsTUFBSyxJQUFJLEVBQUU7QUFBQSxJQUN2RTtBQUNBLFVBQU0sT0FBTyxDQUFDLEdBQWEsR0FBVyxHQUFXLEdBQVcsR0FBVyxLQUFLLEdBQUcsTUFBTSxNQUFNO0FBQ3pGLFlBQU0sSUFBSSxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNuRCxRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFFBQUUsYUFBYSxNQUFNLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUc7QUFDNUYsUUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSztBQUNyQyxVQUFJLFlBQVk7QUFDaEIsV0FBSyxDQUFDLElBQUksT0FBTztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUcsQ0FBQztBQUFBLElBQ2hIO0FBUUEsVUFBTSxLQUFLLEVBQUUsVUFBVSxHQUFHLE9BQU8sRUFBRSxZQUFZO0FBQy9DLFFBQUksS0FBSyxHQUFHO0FBQ1YsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsY0FBTSxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLEtBQUs7QUFDckQsY0FBTSxJQUFJLFFBQVEsSUFBSSxRQUFRO0FBQzlCLFlBQUksWUFBWSxPQUFPQSxLQUFJLEtBQUssSUFBSSxDQUFDLE1BQWMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUFLLFlBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFDeEY7QUFBQSxJQUNGLE9BQU87QUFBRSxVQUFJLFlBQVksT0FBT0EsS0FBSSxJQUFJLENBQUM7QUFBSyxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQUc7QUFHeEUsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsS0FBSztBQUNuQyxXQUFLLE1BQU0sSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsS0FBSyxPQUFPLElBQUksSUFBSSxRQUFTLEVBQUUsY0FBYyxJQUFJLE1BQU8sSUFBSSxJQUFJLE1BQU0sTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxFQUFFO0FBSzNJLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxnQkFBZ0IsS0FBSyxLQUFLO0FBQy9DLFlBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSSxTQUFTLEVBQUUsY0FBYztBQUN4RixXQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssRUFBRSxjQUFjLFFBQVEsSUFBSSxJQUFJLEtBQU0sTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxFQUFFO0FBQ2pHLGVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLGNBQU0sSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSztBQUMzRCxjQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxJQUFJO0FBQzVFLFlBQUksWUFBWSxRQUFRQSxLQUFJLEtBQUssQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUk7QUFDeEQsYUFBSyxDQUFDLElBQUksT0FBTztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGNBQUksS0FBSztBQUFBLFFBQUcsQ0FBQztBQUFBLE1BQy9GO0FBQUEsSUFDRjtBQUlBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxnQkFBZ0IsS0FBSyxLQUFLO0FBQy9DLFlBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSTtBQUMvRCxXQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksS0FBTSxNQUFNLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEVBQUU7QUFDOUUsZUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLG9CQUFvQixLQUFLLEtBQUs7QUFDbkQsY0FBTSxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSTtBQUN0RCxjQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxJQUFJO0FBQzVFLFlBQUksWUFBWSxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUk7QUFDeEQsYUFBSyxDQUFDLElBQUksT0FBTztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGNBQUksS0FBSztBQUFBLFFBQUcsQ0FBQztBQUFBLE1BQy9GO0FBQ0EsVUFBSSxJQUFJLElBQUksS0FBSztBQUNmLGNBQU0sSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU8sTUFBTSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzNELGNBQU0sSUFBSSxJQUFJLHFCQUFxQixHQUFHLElBQUksR0FBRyxLQUFLLEdBQUc7QUFDckQsVUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLEdBQUc7QUFBRyxVQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxLQUFLO0FBQ3hHLFlBQUksWUFBWTtBQUNoQixhQUFLLENBQUMsT0FBTyxJQUFJLFNBQVMsS0FBSyxNQUFNLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUFBLE1BQ3JFO0FBQUEsSUFDRjtBQUlBLFVBQU0sUUFBUSxFQUFFLFNBQVM7QUFDekIsYUFBUyxJQUFJLEdBQUcsSUFBSSxPQUFPLEtBQUs7QUFDOUIsWUFBTSxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUk7QUFDN0QsWUFBTSxJQUFJLEtBQUssUUFBUSxNQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDaEQsVUFBSSxjQUFjLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztBQUFLLFVBQUksWUFBWSxNQUFNLElBQUksSUFBSTtBQUN4RSxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxDQUFDO0FBQUcsWUFBSSxPQUFPO0FBQUEsTUFBRztBQUFBLElBQzlHO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFTQSxTQUFTLFVBQVUsTUFBYyxNQUEwQztBQUN6RSxTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU0sT0FBTyxZQUFZLFFBQVE7QUFDakMsUUFBSSxZQUFZO0FBQVcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFFbEQsVUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDOUMsT0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQUcsT0FBRyxhQUFhLEtBQUssd0JBQXdCO0FBQUcsT0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQ25JLFFBQUksWUFBWTtBQUFJLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzNDLG1CQUFlLEtBQUssS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLEtBQU0sSUFBSTtBQUNoRCxVQUFNLE9BQU8sS0FBSyxNQUFPLElBQUksSUFBSTtBQUNqQyxlQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRyxZQUFXLEtBQUssS0FBSyxHQUFHLEdBQUcsSUFBSSxJQUFJLEtBQUssTUFBTSxPQUFPLElBQUk7QUFDeEcsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJO0FBQzdELFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHO0FBQzFELFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEdBQUc7QUFBQSxJQUNsRTtBQUVBO0FBQ0UsWUFBTSxJQUFJO0FBQ1YsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsSUFBSSxJQUFJLE1BQU0sR0FBRyxDQUFDO0FBQ3pELFNBQUcsYUFBYSxHQUFHLGtCQUFrQjtBQUFHLFNBQUcsYUFBYSxHQUFHLHFCQUFxQjtBQUNoRixVQUFJLFlBQVk7QUFBSSxVQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksSUFBSTtBQUM3RCxVQUFJLFlBQVk7QUFBdUIsVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDOUQsVUFBSSxZQUFZO0FBQTBCLFVBQUksU0FBUyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7QUFDckUsVUFBSSxZQUFZO0FBQXVCLFVBQUksU0FBUyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7QUFBQSxJQUNwRTtBQUVBLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFlBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxRQUFRLElBQUksSUFBSSxPQUFPLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxNQUFNLE9BQU8sSUFBSSxJQUFJLE9BQU87QUFDNUgsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUMzQixjQUFNLE9BQU8sSUFBSSxxQkFBcUIsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLElBQUksR0FBRztBQUN6RixhQUFLLGFBQWEsR0FBRyxxQkFBcUI7QUFBRyxhQUFLLGFBQWEsS0FBSyxxQkFBcUI7QUFBRyxhQUFLLGFBQWEsR0FBRyxrQkFBa0I7QUFDbkksWUFBSSxZQUFZO0FBQU0sWUFBSSxVQUFVO0FBQUcsWUFBSSxRQUFRLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQ25ILFlBQUksWUFBWTtBQUF1QixZQUFJLFVBQVU7QUFBRyxZQUFJLFFBQVEsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUN4SCxZQUFJLFlBQVk7QUFBcUIsWUFBSSxVQUFVO0FBQUcsWUFBSSxRQUFRLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUMzSjtBQUNBLGVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLGNBQU0sSUFBSSxNQUFNLElBQUksSUFBSSxPQUFPLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLElBQUk7QUFDM0YsWUFBSSxZQUFZO0FBQ2hCLG1CQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxjQUFJLFVBQVU7QUFBRyxjQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRztBQUFBLE1BQ3JHO0FBQUEsSUFDRjtBQUVBLGtCQUFjLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxPQUFPLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJO0FBQUEsRUFDakgsQ0FBQztBQUNIO0FBT0EsU0FBUyxTQUFTLE1BQWMsTUFBMEM7QUFDeEUsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsRCxVQUFNLElBQUksSUFBSSxRQUFRLElBQUksR0FBRyxNQUFNO0FBQ25DLFVBQU0sS0FBSyxLQUFLLElBQUksR0FBRyxJQUFJO0FBQzNCLFFBQUksS0FBSztBQUNULGFBQVMsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUs7QUFDL0IsWUFBTSxLQUFLLElBQUk7QUFDZixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBRTNCLFlBQUksY0FBYztBQUF1QixZQUFJLFlBQVksUUFBUTtBQUNqRSxZQUFJLFVBQVU7QUFBRyxZQUFJLE9BQU8sSUFBSSxFQUFFO0FBQUcsWUFBSSxPQUFPLEtBQUssSUFBSSxLQUFLLENBQUM7QUFBRyxZQUFJLE9BQU87QUFFN0UsWUFBSSxjQUFjO0FBQTBCLFlBQUksWUFBWSxRQUFRO0FBQ3BFLFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxLQUFLLFFBQVEsS0FBSyxFQUFFO0FBQUcsWUFBSSxPQUFPLEtBQUssUUFBUSxNQUFNLElBQUksS0FBSyxDQUFDO0FBQUcsWUFBSSxPQUFPO0FBRXpHLFlBQUksY0FBYztBQUF1QixZQUFJLFlBQVk7QUFDekQsaUJBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLGdCQUFNLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFFBQVEsTUFBTSxPQUFPLEtBQUssTUFBTTtBQUNoRixjQUFJLFVBQVU7QUFBRyxjQUFJLE9BQU8sS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRLElBQUk7QUFBRyxjQUFJLE9BQU8sS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRLElBQUk7QUFBRyxjQUFJLE9BQU87QUFBQSxRQUNsSTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQ0EsUUFBSSxRQUFRO0FBRVosYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJO0FBQ2pDLFVBQUksWUFBWSxJQUFJLElBQUksTUFBTSx3QkFBd0I7QUFDdEQsVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUM7QUFBQSxJQUNyQztBQUNBLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDN0MsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztBQUNsRCxTQUFHLGFBQWEsR0FBRyxrQkFBa0I7QUFBRyxTQUFHLGFBQWEsS0FBSyxxQkFBcUI7QUFBRyxTQUFHLGFBQWEsR0FBRyxrQkFBa0I7QUFDMUgsVUFBSSxZQUFZO0FBQUksaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQzVFO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFlQSxTQUFTLGVBQWUsU0FBNkU7QUFDbkcsUUFBTSxNQUFrRCxDQUFDO0FBQ3pELGFBQVcsS0FBSyxPQUFPLFdBQW9CO0FBQ3pDLFVBQU0sSUFBSSxJQUFVLDJCQUFxQjtBQUFBLE1BQ3ZDLE9BQU8sSUFBVSxZQUFNLEVBQUUsS0FBSztBQUFBLE1BQzlCLFdBQVcsRUFBRTtBQUFBLE1BQ2IsV0FBVyxFQUFFO0FBQUEsTUFDYixXQUFXLFFBQVEsYUFBYTtBQUFBLE1BQ2hDLE1BQU0sRUFBRSxjQUFvQixtQkFBbUI7QUFBQSxNQUMvQyxjQUFjLEVBQUUsaUJBQWlCO0FBQUEsSUFDbkMsQ0FBQztBQUNELFFBQUksRUFBRSxvQkFBb0IsT0FBVyxHQUFFLGtCQUFrQixFQUFFO0FBRzNELFFBQUksRUFBRSxhQUFhLFFBQVc7QUFBRSxRQUFFLFdBQVcsSUFBVSxZQUFNLEVBQUUsUUFBUTtBQUFHLFFBQUUsb0JBQW9CLEVBQUUscUJBQXFCO0FBQUEsSUFBRztBQUMxSCxRQUFJLEVBQUUsWUFBWSxRQUFXO0FBQUUsUUFBRSxjQUFjO0FBQU0sUUFBRSxVQUFVLEVBQUU7QUFBUyxRQUFFLGFBQWE7QUFBQSxJQUFNO0FBR2pHLFFBQUksRUFBRSxjQUFjLFFBQVc7QUFBRSxRQUFFLFlBQVksRUFBRTtBQUFXLFFBQUUsY0FBYztBQUFBLElBQU87QUFDbkYsTUFBRSxPQUFPLEVBQUU7QUFDWCxRQUFJLEVBQUUsRUFBRSxJQUFJO0FBQUEsRUFDZDtBQUNBLFNBQU87QUFDVDtBQUlPLFNBQVMsZ0NBQWdDLFVBQWtDLENBQUMsR0FBZ0I7QUFDakcsUUFBTSxPQUFPLElBQVUsWUFBTTtBQUM3QixPQUFLLE9BQU87QUFFWixRQUFNLFlBQVksZUFBZSxPQUFPO0FBQ3hDLFFBQU0sUUFBd0MsQ0FBQztBQUMvQyxRQUFNLFNBQXFDLENBQUM7QUFDNUMsUUFBTSxVQUEwQyxDQUFDO0FBQ2pELFFBQU0sWUFBcUMsQ0FBQztBQUM1QyxRQUFNLG9CQUFzRCxDQUFDO0FBQzdELFFBQU0sYUFBYSxRQUFRLGNBQWM7QUFDekMsUUFBTSxnQkFBZ0IsUUFBUSxpQkFBaUI7QUFhL0MsV0FBUyxrQkFBa0IsS0FBMkIsS0FBaUM7QUFDckYsUUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGdCQUFnQixJQUFJLGFBQWEsT0FBTyxFQUFHO0FBQzVELFVBQU0sSUFBSSxJQUFJLGFBQWEsVUFBVSxFQUFFO0FBQ3ZDLFFBQUksYUFBYSxTQUFTLElBQVUsc0JBQWdCLElBQUksYUFBYSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFBQSxFQUN6RjtBQUVBLFdBQVMsSUFBSSxJQUFZLE1BQWMsS0FBMkIsT0FBZTtBQUMvRSxVQUFNLE9BQU8sSUFBVSxZQUFNO0FBQUcsU0FBSyxPQUFPLE9BQU87QUFDbkQsc0JBQWtCLEtBQUssVUFBVSxLQUFLLENBQUM7QUFDdkMsVUFBTSxPQUFPLElBQVUsV0FBSyxLQUFLLFVBQVUsS0FBSyxDQUFDO0FBQ2pELFNBQUssT0FBTztBQUFNLFNBQUssYUFBYTtBQUFZLFNBQUssZ0JBQWdCO0FBQ3JFLFNBQUssSUFBSSxJQUFJO0FBQUcsU0FBSyxJQUFJLElBQUk7QUFDN0IsVUFBTSxFQUFFLElBQUk7QUFBTSxXQUFPLEVBQUUsSUFBSTtBQUFNLGNBQVUsRUFBRSxJQUFJO0FBQ3JELFdBQU87QUFBQSxFQUNUO0FBQ0EsV0FBUyxRQUFRLElBQVksTUFBYyxLQUEyQixPQUFlLE1BQXVCLE1BQWlCO0FBQzNILFVBQU0sT0FBTyxJQUFVLFlBQU07QUFBRyxTQUFLLE9BQU8sT0FBTztBQUNuRCxzQkFBa0IsS0FBSyxVQUFVLEtBQUssQ0FBQztBQUN2QyxVQUFNLE9BQU8sSUFBVSxvQkFBYyxLQUFLLFVBQVUsS0FBSyxHQUFHLEtBQUssTUFBTTtBQUN2RSxTQUFLLE9BQU87QUFBTSxTQUFLLGFBQWE7QUFBWSxTQUFLLGdCQUFnQjtBQUNyRSxhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFLLE1BQUssWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2pFLFFBQUksTUFBTTtBQUdSLFlBQU0sSUFBSSxJQUFVLFlBQU07QUFDMUIsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsSUFBSyxNQUFLLFdBQVcsR0FBRyxFQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMxRSxVQUFJLEtBQUssY0FBZSxNQUFLLGNBQWMsY0FBYztBQUFBLElBQzNEO0FBQ0EsU0FBSyxlQUFlLGNBQWM7QUFDbEMsU0FBSyxJQUFJLElBQUk7QUFBRyxTQUFLLElBQUksSUFBSTtBQUM3QixVQUFNLEVBQUUsSUFBSTtBQUFNLFdBQU8sRUFBRSxJQUFJO0FBQStCLGNBQVUsRUFBRSxJQUFJO0FBQzlFLFdBQU87QUFBQSxFQUNUO0FBR0EsV0FBUyxLQUFLLFFBQWdCLEdBQVcsUUFBUSxHQUFvQjtBQUNuRSxXQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNO0FBQzdCLFlBQU0sSUFBSSxRQUFRLElBQUksS0FBSyxLQUFLO0FBQ2hDLGFBQU8sSUFBVSxjQUFRLEVBQUU7QUFBQSxRQUN6QixJQUFVLGNBQVEsS0FBSyxJQUFJLENBQUMsSUFBSSxRQUFRLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNO0FBQUEsUUFDL0QsSUFBVSxpQkFBVyxFQUFFLGlCQUFpQixJQUFVLGNBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQUEsUUFDckUsSUFBVSxjQUFRLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFBQztBQUFBLElBQzlCLENBQUM7QUFBQSxFQUNIO0FBRUEsUUFBTSxJQUFJLE9BQU87QUFPakIsYUFBVyxLQUFLLEVBQUUsWUFBcUI7QUFDckMsVUFBTSxLQUE2QixDQUFDO0FBQ3BDLGVBQVcsS0FBTSxFQUFFLFNBQVMsQ0FBQyxFQUFrQixJQUFHLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RGLGVBQVcsS0FBSyxRQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBZ0IsRUFBRyxJQUFHLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZHLGVBQVcsS0FBTSxFQUFFLFNBQVMsQ0FBQyxFQUFhLElBQUcsS0FBSyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFHckYsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEVBQWEsSUFBRyxLQUFLLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEtBQUssQ0FBQztBQUM3RyxlQUFXLE1BQU8sRUFBRSxVQUFVLENBQUMsRUFBYSxJQUFHLEtBQUssTUFBTSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDL0YsZUFBVyxNQUFPLEVBQUUsUUFBUSxDQUFDLEdBQWE7QUFJeEMsWUFBTUMsS0FBSSxJQUFVLHVCQUFpQixHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLE9BQU8sSUFBSSxHQUFHLEdBQUcsUUFBUSxPQUFPLEdBQUcsT0FBTyxHQUFHLEdBQUcsU0FBUyxLQUFLLEtBQUssQ0FBQztBQUNoSSxVQUFJLEdBQUcsT0FBTztBQUFFLGNBQU0sS0FBS0EsR0FBRSxhQUFhLElBQUk7QUFBRyxpQkFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sSUFBSyxJQUFHLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQUEsTUFBRztBQUdySixVQUFJLEdBQUcsUUFBUTtBQUFFLGNBQU0sS0FBS0EsR0FBRSxhQUFhLElBQUksR0FBRyxNQUFNLEdBQUcsT0FBTyxNQUFNLEtBQUs7QUFBRyxpQkFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUssSUFBRyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQUEsTUFBRztBQUdySixVQUFJLEdBQUcsT0FBTztBQUFFLFFBQUFBLEdBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUFHLFFBQUFBLEdBQUUscUJBQXFCO0FBQUEsTUFBRztBQUkxRixVQUFJLEVBQUUsT0FBTyxPQUFRLFFBQU9BLElBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLFdBQVcsR0FBRyxHQUFHLFFBQVEsQ0FBQztBQUN4RSxVQUFJLEdBQUcsR0FBSSxDQUFBQSxHQUFFLFFBQVEsR0FBRyxFQUFFO0FBQUcsVUFBSSxHQUFHLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEdBQUcsRUFBRTtBQUFHLFVBQUksR0FBRyxHQUFJLENBQUFBLEdBQUUsUUFBUSxHQUFHLEVBQUU7QUFDcEYsTUFBQUEsR0FBRSxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQUcsU0FBRyxLQUFLLFFBQVFBLElBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUN2RTtBQUNBLGVBQVcsS0FBTSxFQUFFLFVBQVUsQ0FBQyxHQUFhO0FBS3pDLFlBQU1BLEtBQUksTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksR0FBRyxFQUFFLFVBQVUsT0FBTyxFQUFFLGFBQWEsSUFBSTtBQUM3RSxVQUFJLEVBQUUsT0FBTztBQUFFLGNBQU0sS0FBSyxNQUFNLFFBQVEsRUFBRSxLQUFLLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0FBQUcsZ0JBQVFBLElBQUlBLEdBQUUsYUFBYSxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sTUFBTSxLQUFNLEdBQUcsRUFBRSxPQUFPLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUFBLE1BQUc7QUFDck0sVUFBSSxFQUFFLE9BQU87QUFBRSxRQUFBQSxHQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFBRyxRQUFBQSxHQUFFLHFCQUFxQjtBQUFBLE1BQUc7QUFJdEYsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUFHLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQzlFLE1BQUFBLEdBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUFHLFNBQUcsS0FBSyxRQUFRQSxJQUFHLEVBQUUsR0FBRyxDQUFDO0FBQUEsSUFDbkU7QUFLQSxlQUFXLEtBQU0sRUFBRSxTQUFTLENBQUMsR0FBYTtBQUN4QyxZQUFNQSxLQUFJLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksRUFBRSxRQUFRLEVBQUUsV0FBVyxJQUFJO0FBQ25GLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQUcsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUM5RSxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFJL0MsVUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLFFBQVc7QUFDbkMsY0FBTSxNQUFNQSxHQUFFLGFBQWEsT0FBTztBQUNsQyxjQUFNLElBQUksSUFBVSxZQUFNLEVBQUUsR0FBRztBQUMvQixpQkFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLE9BQU8sSUFBSyxLQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6RyxXQUFHLEtBQUtBLEVBQUM7QUFBQSxNQUNYLE1BQU8sSUFBRyxLQUFLLEVBQUUsU0FBU0EsS0FBSSxRQUFRQSxJQUFHLEVBQUUsR0FBRyxDQUFDO0FBQUEsSUFDakQ7QUFDQSxlQUFXLEtBQU0sRUFBRSxVQUFVLENBQUMsR0FBYTtBQUd6QyxZQUFNQSxLQUFJLElBQVUsb0JBQWMsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDaEQsTUFBQUEsR0FBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLFlBQU0sS0FBS0EsR0FBRSxhQUFhLElBQUk7QUFDOUIsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sSUFBSyxJQUFHLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUM3RyxTQUFHLEtBQUssUUFBUUEsSUFBRyxFQUFFLEdBQUcsQ0FBQztBQUFBLElBQzNCO0FBQ0EsZUFBVyxLQUFNLEVBQUUsWUFBWSxDQUFDLEdBQWE7QUFHM0MsWUFBTSxRQUFRLElBQVUsWUFBTTtBQUM5QixZQUFNLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkMsZUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLEtBQUssUUFBUSxJQUFLLE9BQU0sT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMvRSxZQUFNLFVBQVU7QUFDaEIsaUJBQVcsS0FBTSxFQUFFLFNBQVMsQ0FBQyxHQUFvQjtBQUMvQyxjQUFNLEtBQUssSUFBVSxXQUFLO0FBQUcsV0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkQsaUJBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLElBQUssSUFBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0QsV0FBRyxVQUFVO0FBQUcsY0FBTSxNQUFNLEtBQUssRUFBRTtBQUFBLE1BQ3JDO0FBQ0EsWUFBTUEsS0FBSSxjQUFjLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUN6QyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQ3hCLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFDeEIsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUN4QixVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0MsU0FBRyxLQUFLLFFBQVFBLElBQUcsRUFBRSxHQUFHLENBQUM7QUFBQSxJQUMzQjtBQUlBLGVBQVcsS0FBTSxFQUFFLGNBQWMsQ0FBQyxHQUFrQjtBQUNsRCxZQUFNQSxLQUFJLElBQVUscUJBQWUsR0FBRyxFQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUU7QUFDOUQsTUFBQUEsR0FBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLFVBQUksRUFBRSxDQUFDLEVBQUcsQ0FBQUEsR0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQUcsVUFBSSxFQUFFLENBQUMsRUFBRyxDQUFBQSxHQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFBRyxVQUFJLEVBQUUsQ0FBQyxFQUFHLENBQUFBLEdBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUM5RSxNQUFBQSxHQUFFLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDNUIsU0FBRyxLQUFLLFFBQVFBLElBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUFBLElBQzFCO0FBR0EsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEVBQWtCLElBQUcsS0FBSyxRQUFRLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUYsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEVBQWEsSUFBRyxLQUFLLFFBQVEsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBR3hGLGVBQVcsS0FBTSxFQUFFLFVBQVUsQ0FBQyxHQUFhO0FBSXpDLFlBQU1BLEtBQUksTUFBTSxDQUFDO0FBQ2pCLFNBQUcsS0FBSyxFQUFFLGFBQWEsU0FBWUEsS0FBSSxRQUFRQSxJQUFHLEVBQUUsR0FBRyxDQUFDO0FBQUEsSUFDMUQ7QUFHQSxlQUFXLEtBQU0sRUFBRSxjQUFjLENBQUMsR0FBYTtBQUM3QyxZQUFNQSxLQUFJLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFO0FBQzNDLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFLMUUsVUFBSSxFQUFFLE9BQU87QUFRWCxjQUFNLE1BQU0sRUFBRSxPQUFPLElBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsY0FBTSxNQUFNLElBQUksYUFBYSxNQUFNLElBQUksQ0FBQztBQUN4QyxpQkFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsZ0JBQU0sSUFBSSxFQUFFLE1BQU0sS0FBSyxJQUFJLEVBQUUsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ2pELGdCQUFNLElBQUksSUFBVSxZQUFNLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBVSxZQUFNLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztBQUN2RyxtQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsa0JBQU0sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSztBQUNsRCxrQkFBTSxLQUFLLElBQUksTUFBTSxLQUFLO0FBQzFCLGdCQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSztBQUFHLGdCQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLO0FBQUcsZ0JBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUs7QUFBQSxVQUN2RztBQUFBLFFBQ0Y7QUFDQSxRQUFBQSxHQUFFLGFBQWEsU0FBUyxJQUFVLHNCQUFnQixLQUFLLENBQUMsQ0FBQztBQUN6RCxXQUFHLEtBQUtBLEVBQUM7QUFBQSxNQUNYLE1BQU8sSUFBRyxLQUFLLFFBQVFBLElBQUcsRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUFBLElBQzlDO0FBQ0EsUUFBSSxJQUFJLFVBQVUsRUFBRTtBQUdwQixRQUFJLEVBQUUsTUFBTyxHQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFLdkQsUUFBSSxFQUFFLE1BQU07QUFDVixZQUFNLElBQUksSUFBVSxZQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxJQUFVLFlBQU0sRUFBRSxLQUFLLEVBQUU7QUFDbkUsWUFBTSxJQUFJLEVBQUUsYUFBYSxVQUFVO0FBQUcsVUFBSSxNQUFNLEVBQUUsYUFBYSxPQUFPO0FBQ3RFLFVBQUksQ0FBQyxLQUFLO0FBQUUsY0FBTSxJQUFVLHNCQUFnQixJQUFJLGFBQWEsRUFBRSxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQUcsVUFBRSxhQUFhLFNBQVMsR0FBRztBQUFBLE1BQUc7QUFDckgsWUFBTSxLQUFLLEVBQUUsS0FBSyxTQUFTLE1BQU0sSUFBSSxFQUFFLEtBQUssU0FBUyxNQUFNLElBQUk7QUFDL0QsZUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxjQUFNLElBQUksT0FBTyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksT0FBTyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFDaEUsY0FBTSxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRSxLQUFLLEtBQUssRUFBRSxLQUFLLEtBQUssQ0FBQztBQUNoRixjQUFNLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSztBQUN0RixZQUFJLEVBQUUsS0FBSyxLQUFNLEtBQUksT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQUEsWUFBUSxLQUFJLE9BQU8sR0FBRyxHQUFHLElBQUksRUFBRTtBQUFBLE1BQ25IO0FBQ0EsVUFBSSxjQUFjO0FBQUEsSUFDcEI7QUFDQSxRQUFJLEVBQUUsT0FBTyxRQUFTLEtBQUksUUFBUSxHQUFHLEVBQUUsV0FBVyxDQUFDO0FBQ25ELFFBQUksRUFBRSxPQUFPLFNBQVUsS0FBSSxTQUFTLEdBQUcsRUFBRSxXQUFXLENBQUM7QUFDckQsUUFBSSxFQUFFLE9BQU8sUUFBUyxLQUFJLFFBQVEsR0FBRyxFQUFFLFdBQVcsQ0FBQztBQUNuRCxRQUFJLEVBQUUsT0FBTyxZQUFhLEtBQUksUUFBUSxHQUFHLEVBQUUsV0FBVyxHQUFHLElBQUk7QUFFN0QsUUFBSSxFQUFFLE9BQU8sUUFBUyxLQUFJLGFBQWEsR0FBRyxFQUFFLEtBQUs7QUFHakQsUUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsRUFBRSxRQUFRO0FBQy9CLFFBQUksRUFBRSxTQUFVLFdBQVUsRUFBRSxFQUFFLElBQUksRUFBRTtBQUFBLEVBQ3RDO0FBSUEsYUFBVyxLQUFNLEVBQUUsYUFBYSxDQUFDLEdBQWE7QUFDNUMsVUFBTSxLQUE2QixDQUFDO0FBQ3BDLGVBQVcsS0FBTSxFQUFFLFNBQVMsQ0FBQyxFQUFrQixJQUFHLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RGLGVBQVcsS0FBTSxFQUFFLFVBQVUsQ0FBQyxFQUFhLElBQUcsS0FBSyxRQUFRLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUN4RixlQUFXLEtBQU0sRUFBRSxVQUFVLENBQUMsRUFBa0IsSUFBRyxLQUFLLFFBQVEsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRixlQUFXLE1BQU8sRUFBRSxRQUFRLENBQUMsR0FBYTtBQUl4QyxZQUFNQSxLQUFJLElBQVU7QUFBQSxRQUFpQixHQUFHO0FBQUEsUUFBSSxHQUFHO0FBQUEsUUFBSSxHQUFHO0FBQUEsUUFBRyxHQUFHLE9BQU87QUFBQSxRQUFJO0FBQUEsUUFBRyxHQUFHLFFBQVE7QUFBQSxRQUNoRCxHQUFHLE9BQU87QUFBQSxRQUFHLEdBQUcsU0FBUyxLQUFLLEtBQUs7QUFBQSxNQUFDO0FBQ3pFLFVBQUksRUFBRSxPQUFPLE9BQVEsUUFBT0EsSUFBRyxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsV0FBVyxHQUFHLEdBQUcsUUFBUSxDQUFDO0FBQ3hFLFVBQUksR0FBRyxHQUFJLENBQUFBLEdBQUUsUUFBUSxHQUFHLEVBQUU7QUFBRyxVQUFJLEdBQUcsR0FBSSxDQUFBQSxHQUFFLFFBQVEsR0FBRyxFQUFFO0FBQUcsVUFBSSxHQUFHLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEdBQUcsRUFBRTtBQUNwRixNQUFBQSxHQUFFLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFBRyxTQUFHLEtBQUssUUFBUUEsSUFBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ3ZFO0FBS0EsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEdBQWE7QUFDekMsWUFBTUEsS0FBSSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sSUFBSSxHQUFHLEVBQUUsVUFBVSxPQUFPLEVBQUUsYUFBYSxJQUFJO0FBQzdFLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQUcsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUM5RSxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFBRyxTQUFHLEtBQUssUUFBUUEsSUFBRyxFQUFFLEdBQUcsQ0FBQztBQUFBLElBQzdFO0FBQ0EsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEdBQWE7QUFDekMsWUFBTUEsS0FBSSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLE1BQU8sRUFBRSxTQUFTLEtBQUs7QUFDcEYsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUFHLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQzlFLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUFHLFNBQUcsS0FBS0EsRUFBQztBQUFBLElBQzdEO0FBQ0EsZUFBVyxLQUFNLEVBQUUsU0FBUyxDQUFDLEVBQWEs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
