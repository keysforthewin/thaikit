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

// ../repo/scratch/monobloc-plastic-stool/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
  createMonoblocPlasticStoolModel: () => createMonoblocPlasticStoolModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "monobloc-plastic-stool",
  "name": "Monobloc Plastic Stool",
  "exportName": "MonoblocPlasticStool",
  "envelope": "Envelope 0.335 x 0.2 x 0.335 m, origin base-center, +Y up.\n * Budget (small): <=800 triangles, <=1 draw call, <=1 material, <=2 unique geometries.",
  "materials": [
    {
      "id": "plastic",
      "color": 16777215,
      "roughness": 0.58,
      "metalness": 0,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "plastic",
      "kind": "grime",
      "size": 256,
      "seed": 121,
      "wash": [
        0.72,
        0.66,
        0.63
      ],
      "washAlpha": 0.45,
      "coverage": 0,
      "streaks": 130,
      "blotches": 64,
      "bump": 0.35
    }
  ],
  "geometry": {
    "components": [
      {
        "id": "stool",
        "name": "Moulded stool",
        "material": "plastic",
        "uv": "world",
        "uvScale": 0.3,
        "tint": {
          "axis": "y",
          "from": 0,
          "to": 0.06,
          "c0": 14472909,
          "c1": 16777215,
          "keep": true
        },
        "collider": {
          "shape": "box",
          "localCenter": [
            0,
            0.1,
            0
          ],
          "halfExtents": [
            0.1675,
            0.1,
            0.1675
          ],
          "notes": "The stool envelope; the shipped compound is derived from the geometry."
        },
        "lathes": [
          {
            "pts": [
              [
                0,
                0.142
              ],
              [
                0.151,
                0.14
              ],
              [
                0.157,
                0.152
              ],
              [
                0.157,
                0.168
              ],
              [
                0.15,
                0.188
              ],
              [
                0.137,
                0.199
              ],
              [
                0.128,
                0.198
              ],
              [
                0.115,
                0.187
              ],
              [
                0.11,
                0.177
              ],
              [
                0,
                0.171
              ]
            ],
            "seg": 18,
            "at": [
              0,
              0,
              0
            ],
            "hex": 14437950
          },
          {
            "pts": [
              [
                0.102,
                0.1745
              ],
              [
                0.107,
                0.1786
              ],
              [
                0,
                0.1725
              ]
            ],
            "seg": 18,
            "at": [
              0,
              0,
              0
            ],
            "hex": 9390909
          }
        ],
        "cyls": [
          {
            "rt": 0.035,
            "rb": 0.032,
            "h": 0.165,
            "seg": 8,
            "hex": 14437950,
            "scale": [
              0.78,
              1,
              1
            ],
            "rz": 0.054823057864478206,
            "at": [
              0.1375,
              0.082,
              0
            ]
          },
          {
            "rt": 0.035,
            "rb": 0.032,
            "h": 0.165,
            "seg": 8,
            "hex": 14437950,
            "scale": [
              1,
              1,
              0.78
            ],
            "rx": -0.054823057864478206,
            "at": [
              0,
              0.082,
              0.1375
            ]
          },
          {
            "rt": 0.035,
            "rb": 0.032,
            "h": 0.165,
            "seg": 8,
            "hex": 14437950,
            "scale": [
              0.78,
              1,
              1
            ],
            "rz": -0.054823057864478206,
            "at": [
              -0.1375,
              0.082,
              0
            ]
          },
          {
            "rt": 0.035,
            "rb": 0.032,
            "h": 0.165,
            "seg": 8,
            "hex": 14437950,
            "scale": [
              1,
              1,
              0.78
            ],
            "rx": 0.054823057864478206,
            "at": [
              0,
              0.082,
              -0.1375
            ]
          },
          {
            "rt": 0.02,
            "rb": 0.03,
            "h": 0.03,
            "seg": 8,
            "hex": 14437950,
            "scale": [
              0.62,
              1,
              1
            ],
            "ry": 0,
            "at": [
              0.143,
              0.1855,
              0
            ]
          },
          {
            "rt": 0.02,
            "rb": 0.03,
            "h": 0.03,
            "seg": 8,
            "hex": 14437950,
            "scale": [
              0.62,
              1,
              1
            ],
            "ry": -1.5707963267948966,
            "at": [
              0,
              0.1855,
              0.143
            ]
          },
          {
            "rt": 0.02,
            "rb": 0.03,
            "h": 0.03,
            "seg": 8,
            "hex": 14437950,
            "scale": [
              0.62,
              1,
              1
            ],
            "ry": -3.141592653589793,
            "at": [
              -0.143,
              0.1855,
              0
            ]
          },
          {
            "rt": 0.02,
            "rb": 0.03,
            "h": 0.03,
            "seg": 8,
            "hex": 14437950,
            "scale": [
              0.62,
              1,
              1
            ],
            "ry": -4.71238898038469,
            "at": [
              0,
              0.1855,
              -0.143
            ]
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
    const front = nrm.getZ(i) > minNz && x >= a.x0 && x <= a.x1 && y >= (a.yMin ?? a.y1) && y <= a.y0;
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
function createMonoblocPlasticStoolModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Monobloc Plastic Stool";
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
  const root = createMonoblocPlasticStoolModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogTW9ub2Jsb2MgUGxhc3RpYyBTdG9vbCAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyxcbiAqIGluc3RhbmNpbmcgYW5kIHRoZSBsYXRoZSBoZWxwZXJzIGJlbG93IGFyZSBoYW5kLXJvbGxlZCAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXNcbiAqIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSAwLjMzNSB4IDAuMiB4IDAuMzM1IG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAuXG4gKiBCdWRnZXQgKHNtYWxsKTogPD04MDAgdHJpYW5nbGVzLCA8PTEgZHJhdyBjYWxsLCA8PTEgbWF0ZXJpYWwsIDw9MiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgU1RSRUVUIEFORCBWRU5ET1IgUFJPUFMgLS0gYSBjb25lLCBhIGJhcnJpZXIsIGEgY2FydCwgYSBzdG9vbC4gVGhlXG4gKiBzaGFyZWQgdm9jYWJ1bGFyeSBpcyB0aGUgVElOVEVEIEJPWCBhbmQgdGhlIHBvbHlsaW5lIFRVQkUgbWVyZ2VkIGludG8gb25lIGdlb21ldHJ5IHBlciBtYXRlcmlhbCxcbiAqIHdpdGggZXZlcnkgY29sb3VyIGRpZmZlcmVuY2UgaW5zaWRlIGEgbWF0ZXJpYWwgY2FycmllZCBhcyBhIHZlcnRleCBjb2xvdXIgb24gYSBXSElURSBtYXRlcmlhbCxcbiAqIGFuZCBzdXJmYWNlIGlkZW50aXR5IChjb3JydWdhdGlvbiwgZ3JpbWUgd2FzaCwgbW9zcywgcGxhbmsgam9pbnRzLCBydXN0KSBkZWxpdmVyZWQgYXMgT05FXG4gKiBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSBwZXIgbWF0ZXJpYWwgcmF0aGVyIHRoYW4gYXMgZ2VvbWV0cnkgb3IgYSBwcm9jZWR1cmFsIHRleHR1cmUgc2V0LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwibW9ub2Jsb2MtcGxhc3RpYy1zdG9vbFwiLFxuICAgIFwibmFtZVwiOiBcIk1vbm9ibG9jIFBsYXN0aWMgU3Rvb2xcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJNb25vYmxvY1BsYXN0aWNTdG9vbFwiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSAwLjMzNSB4IDAuMiB4IDAuMzM1IG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAuXFxuICogQnVkZ2V0IChzbWFsbCk6IDw9ODAwIHRyaWFuZ2xlcywgPD0xIGRyYXcgY2FsbCwgPD0xIG1hdGVyaWFsLCA8PTIgdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwicGxhc3RpY1wiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjU4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBcInRpbGVzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcInBsYXN0aWNcIixcbiAgICAgICAgXCJraW5kXCI6IFwiZ3JpbWVcIixcbiAgICAgICAgXCJzaXplXCI6IDI1NixcbiAgICAgICAgXCJzZWVkXCI6IDEyMSxcbiAgICAgICAgXCJ3YXNoXCI6IFtcbiAgICAgICAgICAwLjcyLFxuICAgICAgICAgIDAuNjYsXG4gICAgICAgICAgMC42M1xuICAgICAgICBdLFxuICAgICAgICBcIndhc2hBbHBoYVwiOiAwLjQ1LFxuICAgICAgICBcImNvdmVyYWdlXCI6IDAsXG4gICAgICAgIFwic3RyZWFrc1wiOiAxMzAsXG4gICAgICAgIFwiYmxvdGNoZXNcIjogNjQsXG4gICAgICAgIFwiYnVtcFwiOiAwLjM1XG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiY29tcG9uZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwic3Rvb2xcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJNb3VsZGVkIHN0b29sXCIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcInBsYXN0aWNcIixcbiAgICAgICAgICBcInV2XCI6IFwid29ybGRcIixcbiAgICAgICAgICBcInV2U2NhbGVcIjogMC4zLFxuICAgICAgICAgIFwidGludFwiOiB7XG4gICAgICAgICAgICBcImF4aXNcIjogXCJ5XCIsXG4gICAgICAgICAgICBcImZyb21cIjogMCxcbiAgICAgICAgICAgIFwidG9cIjogMC4wNixcbiAgICAgICAgICAgIFwiYzBcIjogMTQ0NzI5MDksXG4gICAgICAgICAgICBcImMxXCI6IDE2Nzc3MjE1LFxuICAgICAgICAgICAgXCJrZWVwXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY29sbGlkZXJcIjoge1xuICAgICAgICAgICAgXCJzaGFwZVwiOiBcImJveFwiLFxuICAgICAgICAgICAgXCJsb2NhbENlbnRlclwiOiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiaGFsZkV4dGVudHNcIjogW1xuICAgICAgICAgICAgICAwLjE2NzUsXG4gICAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgICAgMC4xNjc1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJub3Rlc1wiOiBcIlRoZSBzdG9vbCBlbnZlbG9wZTsgdGhlIHNoaXBwZWQgY29tcG91bmQgaXMgZGVyaXZlZCBmcm9tIHRoZSBnZW9tZXRyeS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsYXRoZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAuMTQyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjE1MSxcbiAgICAgICAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTU3LFxuICAgICAgICAgICAgICAgICAgMC4xNTJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTU3LFxuICAgICAgICAgICAgICAgICAgMC4xNjhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAgICAgICAwLjE4OFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xMzcsXG4gICAgICAgICAgICAgICAgICAwLjE5OVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xMjgsXG4gICAgICAgICAgICAgICAgICAwLjE5OFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xMTUsXG4gICAgICAgICAgICAgICAgICAwLjE4N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xMSxcbiAgICAgICAgICAgICAgICAgIDAuMTc3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMC4xNzFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic2VnXCI6IDE4LFxuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImhleFwiOiAxNDQzNzk1MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTAyLFxuICAgICAgICAgICAgICAgICAgMC4xNzQ1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjEwNyxcbiAgICAgICAgICAgICAgICAgIDAuMTc4NlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAuMTcyNVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTgsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDkzOTA5MDlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY3lsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMzUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMzIsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjE2NSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTQ0Mzc5NTAsXG4gICAgICAgICAgICAgIFwic2NhbGVcIjogW1xuICAgICAgICAgICAgICAgIDAuNzgsXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnpcIjogMC4wNTQ4MjMwNTc4NjQ0NzgyMDYsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAuMTM3NSxcbiAgICAgICAgICAgICAgICAwLjA4MixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMzUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMzIsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjE2NSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTQ0Mzc5NTAsXG4gICAgICAgICAgICAgIFwic2NhbGVcIjogW1xuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAwLjc4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnhcIjogLTAuMDU0ODIzMDU3ODY0NDc4MjA2LFxuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuMDgyLFxuICAgICAgICAgICAgICAgIDAuMTM3NVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDM1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDMyLFxuICAgICAgICAgICAgICBcImhcIjogMC4xNjUsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE0NDM3OTUwLFxuICAgICAgICAgICAgICBcInNjYWxlXCI6IFtcbiAgICAgICAgICAgICAgICAwLjc4LFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ6XCI6IC0wLjA1NDgyMzA1Nzg2NDQ3ODIwNixcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTAuMTM3NSxcbiAgICAgICAgICAgICAgICAwLjA4MixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMzUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMzIsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjE2NSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTQ0Mzc5NTAsXG4gICAgICAgICAgICAgIFwic2NhbGVcIjogW1xuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAwLjc4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnhcIjogMC4wNTQ4MjMwNTc4NjQ0NzgyMDYsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC4wODIsXG4gICAgICAgICAgICAgICAgLTAuMTM3NVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDIsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMyxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDMsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE0NDM3OTUwLFxuICAgICAgICAgICAgICBcInNjYWxlXCI6IFtcbiAgICAgICAgICAgICAgICAwLjYyLFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ5XCI6IDAsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAuMTQzLFxuICAgICAgICAgICAgICAgIDAuMTg1NSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAzLFxuICAgICAgICAgICAgICBcImhcIjogMC4wMyxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTQ0Mzc5NTAsXG4gICAgICAgICAgICAgIFwic2NhbGVcIjogW1xuICAgICAgICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnlcIjogLTEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjE4NTUsXG4gICAgICAgICAgICAgICAgMC4xNDNcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjAyLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDMsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjAzLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxNDQzNzk1MCxcbiAgICAgICAgICAgICAgXCJzY2FsZVwiOiBbXG4gICAgICAgICAgICAgICAgMC42MixcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJyeVwiOiAtMy4xNDE1OTI2NTM1ODk3OTMsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0wLjE0MyxcbiAgICAgICAgICAgICAgICAwLjE4NTUsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDIsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMyxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDMsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE0NDM3OTUwLFxuICAgICAgICAgICAgICBcInNjYWxlXCI6IFtcbiAgICAgICAgICAgICAgICAwLjYyLFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ5XCI6IC00LjcxMjM4ODk4MDM4NDY5LFxuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuMTg1NSxcbiAgICAgICAgICAgICAgICAtMC4xNDNcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIC8vIENPTE9SIGhhcyB0byBiZSBjYXJyaWVkIHRvbywgYW5kIGl0IGlzIGVhc3kgdG8gZm9yZ2V0OiB0aGlzIGZ1bmN0aW9uIGNvcGllZCBwb3NpdGlvbiwgbm9ybWFsXG4gIC8vIGFuZCB1diBvbmx5LCBhbmQgdGhlIG1vc3F1ZSdzIHJpYmJlZCBkb21lcyBsb3N0IHRoZWlyIGdyZWVuLWFuZC1wYWxlIHN0cmlwaW5nIHRoZSBtb21lbnQgdGhleVxuICAvLyB3ZXJlIG1lcmdlZCB3aXRoIGFueXRoaW5nLiBUaGUgZmFpbHVyZSBpcyBzaWxlbnQgLS0gdGhlIGRvbWUgcmVuZGVycywgaW4gb25lIGZsYXQgY29sb3VyIC0tIGFuZFxuICAvLyB0b29rIGEgd3JvbmcgdGhlb3J5IGFib3V0IHNSR0IgZ2FtbWEgYmVmb3JlIHRoZSBhdHRyaWJ1dGUgbGlzdCB3YXMgcmVhZC4gQW55IGlucHV0IGNhcnJ5aW5nIGFcbiAgLy8gY29sb3VyIG1lYW5zIGV2ZXJ5IGlucHV0IGdldHMgb25lLCB3aGl0ZSB3aGVyZSBpdCBoYWQgbm9uZS5cbiAgY29uc3QgYW55Q29sb3IgPSBwYXJ0cy5zb21lKChnKSA9PiAhIWcuZ2V0QXR0cmlidXRlKCdjb2xvcicpKTtcbiAgY29uc3QgY29sb3IgPSBhbnlDb2xvciA/IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKS5maWxsKDEpIDogbnVsbDtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCBjID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgICBpZiAoY29sb3IgJiYgYykgeyBjb2xvclsodiArIGkpICogM10gPSBjLmdldFgoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMV0gPSBjLmdldFkoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMl0gPSBjLmdldFooaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbG9yKSBvdXQuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3IsIDMpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByVG9wOiBudW1iZXIsIHJCb3Q6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCwgckJvdCwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuXG4vKipcbiAqIFJldm9sdmUgYSBwcm9maWxlIGFib3V0ICtZLiBgcHRzYCBhcmUgW3JhZGl1cywgeV0gaW4gbWV0cmVzLCBib3R0b20gdG8gdG9wLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNoYXBlIHZvY2FidWxhcnkgdGhlIHdob2xlIG1vbnVtZW50YWwgc2V0IGlzIGJ1aWx0IGZyb20gLS0gYSBjaGVkaSdzIGJlbGwsIGEgcHJhbmcnc1xuICogY29ybi1jb2IgdGFwZXIsIGEgZG9tZSwgYSByaW5nZWQgc3BpcmUgYXJlIGFsbCBvbmUgcHJvZmlsZSBlYWNoLiBUd28gdGhpbmdzIGFyZSB3b3J0aCBzdGF0aW5nXG4gKiBiZWNhdXNlIGJvdGggY29zdCBhIHJlYnVpbGQgdG8gbGVhcm46XG4gKlxuICogLSBMYXRoZUdlb21ldHJ5IGlzIE9QRU4gYXQgdG9wIGFuZCBib3R0b20uIEEgcHJvZmlsZSB0aGF0IGRvZXMgbm90IGNsb3NlIG9uIHRoZSBheGlzIChyYWRpdXMgMClcbiAqICAgbGVhdmVzIGEgaG9sZSB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZHMgYXMgYmFja2dyb3VuZCBlbmNsb3NlZCBieSB0aGUgc2lsaG91ZXR0ZS4gQ2xvc2UgaXQsIG9yXG4gKiAgIGNhcCBpdCB3aXRoIHdoYXQgc2l0cyBhYm92ZS5cbiAqIC0gUkFESUFMIFNFR01FTlQgQ09VTlQgaXMgdGhlIHRyaWFuZ2xlIGJ1ZGdldCdzIG1haW4gbGV2ZXIgaGVyZSBhbmQgaXQgaXMgcGVyLWxhdGhlOiBhIHByb2ZpbGUgb2ZcbiAqICAgbiBwb2ludHMgYXQgcyBzZWdtZW50cyBpcyAyKihuLTEpKnMgdHJpYW5nbGVzLiBBIDI0LXJpbmcgc3BpcmUgYXQgMzIgc2VnbWVudHMgaXMgMSw0NzJcbiAqICAgdHJpYW5nbGVzIG9uIGl0cyBvd24sIHdoaWNoIGlzIHdoeSB0aGUgbG93LXJlbGllZiByaW5ncyBhcmUgYSBwcm9maWxlIHJhdGhlciB0aGFuIDI0IHJpbmdzLlxuICovXG4vKiogTGF0aGVHZW9tZXRyeSBzaGFyZXMgdGhlIGNvcm5lciB2ZXJ0ZXggYmV0d2VlbiBhbiBlbmQgZGlzYyBhbmQgdGhlIHNpZGUgd2FsbCwgc29cbiAqICBjb21wdXRlVmVydGV4Tm9ybWFscyB0aWx0cyB0aGUgd2FsbCdzIGZpcnN0IHJpbmcgNDUgZGVncmVlcyB0b3dhcmQgdGhlIGRpc2MgYW5kIHRoZSBoYXJuZXNzIHNoYWRlc1xuICogIGEgZGFyayBncmFkaWVudCB0aGVyZSAtLSBhIHJpbmcgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgYXMgYSBIT0xFIHVuZGVyIHRoZSBzdGFpbmxlc3MgYmluJ3MgY2FwLlxuICogIEluc2VydGluZyBhIHBvaW50IDAuOCBtbSBwYXN0IGV2ZXJ5IHNoYXJwIGNvcm5lciAoPiA3MCBkZWdyZWVzKSBjb25maW5lcyB0aGUgYXZlcmFnZWQgbm9ybWFsIHRvIHRoYXRcbiAqICBzbGl2ZXIuIENvc3RzIG9uZSByaW5nIHBlciBjb3JuZXI7IHBhc3MgYHNoYXJwID0gZmFsc2VgIHdoZXJlIHRoZSBidWRnZXQgY2Fubm90IGNhcnJ5IGl0LiAqL1xuZnVuY3Rpb24gc3BsaXRDb3JuZXJzKHB0czogbnVtYmVyW11bXSwgbWluRGVnID0gNzAsIGVwcyA9IDAuMDAwOCk6IG51bWJlcltdW10ge1xuICBjb25zdCBvdXQ6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwID0gcHRzW2ldLCBhID0gcHRzW2kgLSAxXSwgYiA9IHB0c1tpICsgMV07XG4gICAgbGV0IHNoYXJwID0gZmFsc2U7XG4gICAgaWYgKGEgJiYgYikge1xuICAgICAgY29uc3QgdXggPSBwWzBdIC0gYVswXSwgdXkgPSBwWzFdIC0gYVsxXSwgdnggPSBiWzBdIC0gcFswXSwgdnkgPSBiWzFdIC0gcFsxXTtcbiAgICAgIGNvbnN0IGx1ID0gTWF0aC5oeXBvdCh1eCwgdXkpLCBsdiA9IE1hdGguaHlwb3QodngsIHZ5KTtcbiAgICAgIGlmIChsdSA+IDAgJiYgbHYgPiAwKSBzaGFycCA9IE1hdGguYWNvcyhNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgKHV4ICogdnggKyB1eSAqIHZ5KSAvIChsdSAqIGx2KSkpKSA+IG1pbkRlZyAqIE1hdGguUEkgLyAxODA7XG4gICAgICBpZiAoc2hhcnAgJiYgbHUgPiAzICogZXBzKSBvdXQucHVzaChbcFswXSAtIHV4IC8gbHUgKiBlcHMsIHBbMV0gLSB1eSAvIGx1ICogZXBzXSk7XG4gICAgICBvdXQucHVzaChwKTtcbiAgICAgIGlmIChzaGFycCAmJiBsdiA+IDMgKiBlcHMpIG91dC5wdXNoKFtwWzBdICsgdnggLyBsdiAqIGVwcywgcFsxXSArIHZ5IC8gbHYgKiBlcHNdKTtcbiAgICB9IGVsc2Ugb3V0LnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIGB3ZWxkU2VhbWAgYXZlcmFnZXMgdGhlIG5vcm1hbHMgb2YgdGhlIGZpcnN0IGFuZCBsYXN0IHJhZGlhbCBjb2x1bW4sIHdoaWNoIGlzIHdoYXQgY2xvc2VzIHRoZVxuICogIHJldm9sdmUncyBTSEFESU5HIHNlYW0uIExhdGhlR2VvbWV0cnkgYWxyZWFkeSBkb2VzIHRoaXMgaXRzZWxmIC0tIGl0IGV4cGxpY2l0bHkgYXZlcmFnZXMgdGhlIHR3b1xuICogIGVuZCBjb2x1bW5zIGZvciBhIGZ1bGwgMipQSSBzd2VlcCAtLSBhbmQgdGhlIGBjb21wdXRlVmVydGV4Tm9ybWFscygpYCBiZWxvdyB0aHJvd3MgdGhhdCB3b3JrXG4gKiAgYXdheSwgYmVjYXVzZSBhIHJlY29tcHV0ZSBzZWVzIHRoZSBzZWFtIGFzIHR3byB1bmNvbm5lY3RlZCBlZGdlcyBhbmQgZ2l2ZXMgZWFjaCB0aGUgbm9ybWFsIG9mXG4gKiAgdGhlIGZhY2VzIG9uIGl0cyBvd24gc2lkZSBvbmx5LiBPbiBhIG1hdHRlIHByb3AgdGhlIHJlc3VsdGluZyBjcmVhc2UgaXMgaW52aXNpYmxlLCB3aGljaCBpcyB3aHlcbiAqICBpdCBzdXJ2aXZlZDsgb24gYSBzYXRpbiBtZXRhbCBpdCBpcyBhIGhhcmQgdmVydGljYWwgbGluZSBkb3duIHRoZSByZXZvbHZlLiBNZWFzdXJlZCBvbiB0aGVcbiAqICBub29kbGUtc2hvcCB0YWJsZSdzIHJpbSBhdCBhemltdXRoIDA6IGEgMzEtbGV2ZWwgbHVtYSBzdGVwIGF0IHg9NTEyICgyNDUgLT4gMjE0IGF0IHk9MjU4KSxcbiAqICBSRVZFUlNJTkcgdG8gKzI3IGF0IHk9MjY2IC0tIGEgZGlzY29udGludWl0eSwgbm90IGEgZ3JhZGllbnQuXG4gKiAgRGVmYXVsdCBPRkYgc28gbm8gYWxyZWFkeS1lbWl0dGVkIHByb3AgY2hhbmdlcyBzaGFkaW5nIGlmIGl0IGlzIGV2ZXIgcmUtZW1pdHRlZDsgdGhlIHJlY29tcHV0ZVxuICogIGlzIHN0aWxsIG5lZWRlZCBmb3IgdGhlIHNoYXJwLWNvcm5lciBzcGxpdHMsIHNvIHRoaXMgd2VsZHMgYWZ0ZXJ3YXJkcyByYXRoZXIgdGhhbiBza2lwcGluZyBpdC4gKi9cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwLCBzaGFycCA9IHRydWUsIHdlbGRTZWFtID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSAoc2hhcnAgPyBzcGxpdENvcm5lcnMocHRzKSA6IHB0cykubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgaWYgKHdlbGRTZWFtKSB7XG4gICAgLy8gTGF0aGVHZW9tZXRyeSBsYXlzIG91dCAoc2VnICsgMSkgY29sdW1ucyBvZiBgcm93c2AgdmVydGljZXM7IGNvbHVtbiAwIGFuZCBjb2x1bW4gc2VnIGFyZSB0aGVcbiAgICAvLyBzYW1lIHBsYWNlIGluIHNwYWNlLiBBdmVyYWdlIHRoZSBwYWlyIGFuZCB3cml0ZSBpdCBiYWNrIHRvIGJvdGguXG4gICAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgICBjb25zdCByb3dzID0gbi5jb3VudCAvIChzZWcgKyAxKTtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHJvd3M7IHIrKykge1xuICAgICAgY29uc3QgYSA9IHIsIGIgPSBzZWcgKiByb3dzICsgcjtcbiAgICAgIGNvbnN0IHggPSBuLmdldFgoYSkgKyBuLmdldFgoYiksIHkgPSBuLmdldFkoYSkgKyBuLmdldFkoYiksIHogPSBuLmdldFooYSkgKyBuLmdldFooYik7XG4gICAgICBjb25zdCBsID0gTWF0aC5oeXBvdCh4LCB5LCB6KSB8fCAxO1xuICAgICAgbi5zZXRYWVooYSwgeCAvIGwsIHkgLyBsLCB6IC8gbCk7XG4gICAgICBuLnNldFhZWihiLCB4IC8gbCwgeSAvIGwsIHogLyBsKTtcbiAgICB9XG4gICAgbi5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSwgc21vb3RoID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgY29sOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUaGUgcmlicyBhcmUgbm90IG9ubHkgYSBzaGFwZS4gT24gdGhlIG1vc3F1ZSdzIGRvbWVzIHRoZSBjcmVzdHMgYXJlIHBhbGUgYW5kIHRoZSB2YWxsZXlzIGFyZVxuICAvLyBncmVlbiwgYW5kIHRoYXQgc3RyaXBlIGlzIG1vc3Qgb2Ygd2hhdCB0aGUgZG9tZSByZWFkcyBhcyBhdCBkaXN0YW5jZS4gSXQgaXMgY2FycmllZCBhcyBhXG4gIC8vIHBlci12ZXJ0ZXggTVVMVElQTElFUiBvZmYgdGhlIHNhbWUgY29zaW5lIHRoYXQgc2hhcGVzIHRoZSByaWIgLS0gdHdvIG1lYXN1cmVtZW50cywgdGhlIGNyZXN0XG4gIC8vIGNvbG91ciBvbiB0aGUgbWF0ZXJpYWwgYW5kIHRoZSB2YWxsZXkgYXMgdGhlIHJhdGlvIGJldHdlZW4gdGhlbSAtLSBzbyB0aGUgc3RyaXBpbmcgY29zdHMgYW5cbiAgLy8gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgdGV4dHVyZSBzZXQgb3IgYSBzZWNvbmQgZHJhdyBjYWxsLlxuICBjb25zdCB0aW50ID0gKGo6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsbGV5KSByZXR1cm4gWzEsIDEsIDFdO1xuICAgIC8vIFJhaXNlZCB0byAwLjU1IHJhdGhlciB0aGFuIGxlZnQgbGluZWFyLiBBIGNvc2luZSBzcGVuZHMgaGFsZiBpdHMgYXJlYSBuZWFyIGVhY2ggZXh0cmVtZSwgYW5kXG4gICAgLy8gdGhhdCByZW5kZXJzIGEgZG9tZSB0aGF0IGlzIHBhbGUgb3ZlcmFsbCB3aGVyZSB0aGUgcGxhdGUncyBpcyBncmVlbiBvdmVyYWxsOiB0aGUgY3Jlc3QgaXMgYVxuICAgIC8vIG5hcnJvdyBoaWdobGlnaHQgb24gYSByZWFsIHJpYiwgbm90IGhhbGYgb2YgaXQuIFRoZSBleHBvbmVudCB3aWRlbnMgdGhlIHZhbGxleS5cbiAgICBjb25zdCBmID0gTWF0aC5wb3coKDEgLSBNYXRoLmNvcyhyaWJzICogKChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnKSkpIC8gMiwgMC41NSk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAvLyBgc21vb3RoYCBhdmVyYWdlcyB0aGUgbm9ybWFscyBvZiBldmVyeSB2ZXJ0ZXggc2hhcmluZyBhIHBvc2l0aW9uLCBzbyBhIGxvdy1zZWN0b3IgZmxvd2VyIGhlYWRcbiAgLy8gb3IgcG9tcG9tIHNoYWRlcyBhcyBhIHJvdW5kZWQgc29saWQgcmF0aGVyIHRoYW4gYSBjdXQgZ2VtLiBUaGUgc291cCBpcyBub24taW5kZXhlZCwgc28gdGhlXG4gIC8vIGZhY2V0ZWQgZGVmYXVsdCBpcyB3aGF0IGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGdpdmVzOyB0aGUgbW9zcXVlJ3MgZG9tZXMga2VlcCBpdC5cbiAgaWYgKHNtb290aCkge1xuICAgIGNvbnN0IHBvcyA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSwgbnJtID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICBjb25zdCBhY2MgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyW10+KCk7XG4gICAgY29uc3Qga2V5ID0gKGk6IG51bWJlcikgPT4gYCR7cG9zLmdldFgoaSkudG9GaXhlZCg1KX0sJHtwb3MuZ2V0WShpKS50b0ZpeGVkKDUpfSwke3Bvcy5nZXRaKGkpLnRvRml4ZWQoNSl9YDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcy5jb3VudDsgaSsrKSB7IGNvbnN0IGsgPSBrZXkoaSksIGEgPSBhY2MuZ2V0KGspID8/IFswLCAwLCAwXTsgYVswXSArPSBucm0uZ2V0WChpKTsgYVsxXSArPSBucm0uZ2V0WShpKTsgYVsyXSArPSBucm0uZ2V0WihpKTsgYWNjLnNldChrLCBhKTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zLmNvdW50OyBpKyspIHsgY29uc3QgYSA9IGFjYy5nZXQoa2V5KGkpKSEsIGwgPSBNYXRoLmh5cG90KGFbMF0sIGFbMV0sIGFbMl0pIHx8IDE7IG5ybS5zZXRYWVooaSwgYVswXSAvIGwsIGFbMV0gLyBsLCBhWzJdIC8gbCk7IH1cbiAgICBucm0ubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIElOREVYRUQsIHdpdGggc2hhcmVkIHJpbmcgdmVydGljZXMsIHNvIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGF2ZXJhZ2VzIGFjcm9zcyB0aGUgcXVhZHMgYW5kIHRoZVxuICAvLyBzdXJmYWNlIHNoYWRlcyBzbW9vdGguIFRoZSBmaXJzdCBidWlsZCBlbWl0dGVkIGxvb3NlIHRyaWFuZ2xlcywgYW5kIGEgZmxhdC1zaGFkZWQgc29mdCBib2R5XG4gIC8vIHNob3dzIGV2ZXJ5IHN0YXRpb24gYXMgYSBjcmVhc2UgLS0gYSByZWNsaW5pbmcgZmlndXJlIHRoYXQgbG9va2VkIGNydW1wbGVkIHJhdGhlciB0aGFuIGRyYXBlZC5cbiAgLy9cbiAgLy8gQSBzaXh0aCBzdGF0aW9uIGVsZW1lbnQgYGZsYXRZYCBDTEFNUFMgdGhlIHJpbmcncyB1bmRlcnNpZGUgdG8gdGhhdCBoZWlnaHQuIEEgYm9keSByZXN0aW5nIG9uXG4gIC8vIHRoZSBncm91bmQgaXMgbm90IGEgZmxvYXRpbmcgZWxsaXBzZTogaXQgc3ByZWFkcyB3aGVyZSBpdCBiZWFycywgYW5kIGFuIHVuY2xhbXBlZCB0dWJlIHJlYWRzIGFzXG4gIC8vIGEgc2F1c2FnZSBvbiBhIHRhYmxlLiBUaGUgY2xhbXAgaXMgYSBzb2Z0IG9uZSAtLSB0aGUgcmluZyBrZWVwcyBpdHMgd2lkdGggYW5kIGxvc2VzIGl0cyBkcm9vcCAtLVxuICAvLyBzbyB0aGUgY3JlYXNlIGl0IGxlYXZlcyBpcyB0aGUgY29udGFjdCBlZGdlIHJhdGhlciB0aGFuIGEgY3V0LlxuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFt6LCBjeCwgY3ksIHJ4LCByeSwgZmxhdFldID0gc3RhdGlvbnNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLnNpbih0aCkgKiByeDtcbiAgICAgIGxldCB5ID0gY3kgKyBNYXRoLmNvcyh0aCkgKiByeTtcbiAgICAgIGlmIChmbGF0WSAhPT0gdW5kZWZpbmVkICYmIHkgPCBmbGF0WSkgeSA9IGZsYXRZO1xuICAgICAgcG9zLnB1c2goeCwgeSwgeik7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgICAgaWR4LnB1c2goYSwgYiwgYywgYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KChwb3MubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLnNldEluZGV4KGlkeCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBjdXJsZWQgaG9ybjogYG5gIHRhcGVyaW5nIGJveCBzZWdtZW50cyBzYW1wbGVkIGFsb25nIGEgc2luZSwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudC5cbiAqIFNoYXJlZCBieSB0aGUgdWJvc290J3MgY2hvZmEsIHRoZSBwcmFuZydzIHRyaWRlbnQgcHJvbmdzIGFuZCB0aGUgQ2hpbmVzZSBzaHJpbmUncyBmbHlpbmcgZWF2ZXMsXG4gKiBiZWNhdXNlIGFsbCB0aHJlZSBhcmUgdGhlIHNhbWUgcHJvYmxlbSAtLSBhIHN0cmFpZ2h0IHNwaWtlIGF0IGEgcm9vZiBlbmQgcmVhZHMgYXMgYSBsaWdodG5pbmcgcm9kXG4gKiBhbmQgdGhlIGN1cmwgaXMgdGhlIHdob2xlIGZlYXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGN1cmxlZEhvcm4ocmVhY2g6IG51bWJlciwgcmlzZTogbnVtYmVyLCB0aGljazogbnVtYmVyLCBuID0gNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtyZWFjaCAqIE1hdGguc2luKHUgKiBNYXRoLlBJICogMC40NiksIHJpc2UgKiB1XTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBjb25zdCBhID0gYXQoaiAvIG4pLCBiID0gYXQoKGogKyAxKSAvIG4pO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgdyA9IHRoaWNrICogKDEgLSBqIC8gbikgKyB0aGljayAqIDAuMjg7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBNYXRoLmh5cG90KGR4LCBkeSkgKyB0aGljayAqIDAuMiwgdyk7XG4gICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZlaGljbGUgaGVscGVycyAqL1xuXG4vKiogUGFpbnQgYSB3aG9sZSBnZW9tZXRyeSBvbmUgdmVydGV4IGNvbG91ci4gRXZlcnkgdmVoaWNsZSBtYXRlcmlhbCBoZXJlIGlzIFdISVRFIHdpdGhcbiAqICB2ZXJ0ZXhDb2xvcnMgb24sIHNvIGEgY29sb3VyIGRpZmZlcmVuY2UgY29zdHMgYW4gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgbWF0ZXJpYWw6IHRoZSBib2R5J3NcbiAqICB0d28tdG9uZSwgdGhlIHR5cmUgYWdhaW5zdCBpdHMgcmltLCBhbiBhbWJlciBpbmRpY2F0b3Igb24gYSBibGFjayBidW1wZXIgYWxsIHJpZGUgb25lIHNoYWRlci5cbiAqICBWZXJ0ZXggY29sb3VycyBtdWx0aXBseSBpbiBMSU5FQVIgc3BhY2UsIHNvIHRoZSBoZXggaXMgY29udmVydGVkIHRocm91Z2ggVEhSRUUuQ29sb3IsIHdoaWNoXG4gKiAgZG9lcyB0aGUgc1JHQi10by1saW5lYXIgc3RlcC4gKi9cbmZ1bmN0aW9uIHRpbnRHZW8oZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgaGV4OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoaGV4KTtcbiAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7IH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQm94LXByb2plY3Qgd29ybGQtbWV0cmUgVVZzIHNvIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgKG11ZCwgcnVzdCwgY29ycnVnYXRpb24pIHJlcGVhdHNcbiAqICBhdCBhIHJlYWwgc2l6ZSBvbiBldmVyeSBmYWNlLiBgc2NhbGVgIGlzIG1ldHJlcyBwZXIgdGlsZS4gVGhlIGRvbWluYW50IG5vcm1hbCBheGlzIHBpY2tzIHRoZVxuICogIHBhaXIgb2Ygd29ybGQgYXhlcyB1c2VkLCBzbyBhIHJvb2YgcmVhZHMgKHgsIHopIGFuZCBhIHNpZGUgcmVhZHMgKHosIHkpLiAqL1xuZnVuY3Rpb24gd29ybGRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF5ID0gTWF0aC5hYnMobnJtLmdldFkoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBsZXQgdTogbnVtYmVyLCB2OiBudW1iZXI7XG4gICAgaWYgKGF4ID49IGF5ICYmIGF4ID49IGF6KSB7IHUgPSBwLmdldFooaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICBlbHNlIGlmIChheSA+PSBheikgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRaKGkpOyB9XG4gICAgZWxzZSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSB2IC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKlxuICogU0lERS1QUk9GSUxFIEVYVFJVU0lPTjogYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzICh0aGUgdmVoaWNsZSdzIHNpZGUgc2lsaG91ZXR0ZSwgd2hlZWxcbiAqIGFyY2hlcyBpbmNsdWRlZCBhcyBub3RjaGVzKSBzd2VwdCBhY3Jvc3MgdGhlIGZ1bGwgd2lkdGgsIHRoZW4gc2hhcGVkIHBlciB2ZXJ0ZXg6XG4gKlxuICogIC0gYHR1bWJsZWAgIG5hcnJvd3MgdGhlIHNlY3Rpb24gYWJvdmUgdGhlIGJlbHQgbGluZSAtLSB4IGlzIHNjYWxlZCBieSAoMSAtIGsgKiB0KSB3aGVyZSB0IHJ1bnNcbiAqICAgICAgICAgICAgICAwIGF0IGBiZWx0YCB0byAxIGF0IGByb29mYC4gVGhhdCBpcyB0aGUgdHVtYmxlaG9tZSBvZiBhIHJlYWwgY2FyIGJvZHkgYW5kIGlzIHdoYXRcbiAqICAgICAgICAgICAgICBzdG9wcyB0aGUgZ2xhc3Nob3VzZSByZWFkaW5nIGFzIGEgYm94IG9uIGEgYm94LlxuICogIC0gYHBsYW5gICAgIHJvdW5kcyB0aGUgcGxhbiBhdCB0aGUgbm9zZSBhbmQgdGFpbDogYW4gb3B0aW9uYWwgbGlzdCBvZiBbeiwgeFNjYWxlXSBzdGF0aW9uc1xuICogICAgICAgICAgICAgIGludGVycG9sYXRlZCBhbG9uZyB6LCBzbyBhIGJvbm5ldCBjYW4gdGFwZXIgdG8gMC45IG9mIHRoZSB3aWR0aCBhdCB0aGUgYnVtcGVyIGxpbmUuXG4gKlxuICogRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBpbiBpdHMgb3duICh1LCB2LCBkZXB0aCkgZnJhbWU7IHJvdGF0ZVkoLVBJLzIpIG1hcHMgZGVwdGggdG8gLXggYW5kIHUgdG9cbiAqIHdvcmxkIHosIGFuZCB0aGUgdHJhbnNsYXRlIHJlLWNlbnRyZXMgdGhlIHNsYWIgb24geCA9IDAuIEFueSBzaGFwaW5nIGlzIGFwcGxpZWQgQUZURVIgdGhhdCwgYW5kXG4gKiBub3JtYWxzIGFyZSByZWNvbXB1dGVkIGxhc3Qgc28gdGhlIHNoYWRlZCBmYWNlcyBmb2xsb3cgdGhlIHNoYXBlZCBzdXJmYWNlLlxuICovXG5mdW5jdGlvbiBzaWRlRXh0cnVkZShwcm9maWxlOiBudW1iZXJbXVtdLCB3aWR0aDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgb3B0czogeyB0dW1ibGU/OiB7IGJlbHQ6IG51bWJlciwgcm9vZjogbnVtYmVyLCBrOiBudW1iZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbj86IG51bWJlcltdW10sIGN1cnZlU2VnbWVudHM/OiBudW1iZXIgfSA9IHt9KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHJvZmlsZVswXVswXSwgcHJvZmlsZVswXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvZmlsZS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHByb2ZpbGVbaV1bMF0sIHByb2ZpbGVbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHdpZHRoLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmVTZWdtZW50czogb3B0cy5jdXJ2ZVNlZ21lbnRzID8/IDYgfSk7XG4gIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIDAsIDApO1xuICBzaGFwZVdpZHRoKGcsIG9wdHMpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIFRoZSBwZXItdmVydGV4IHggc2hhcGluZyBzaGFyZWQgYnkgdGhlIGJvZHkgYW5kIGl0cyBnbGFzcyBiYW5kLCBzbyBhIHBhbmUgb2Zmc2V0IDUgbW0gcHJvdWQgb2ZcbiAqICB0aGUgYm9keSBzdGF5cyA1IG1tIHByb3VkIGFmdGVyIGJvdGggYXJlIG5hcnJvd2VkIGJ5IHRoZSBzYW1lIGZ1bmN0aW9uLiAqL1xuZnVuY3Rpb24gc2hhcGVXaWR0aChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSxcbiAgICAgICAgICAgICAgICAgICAgb3B0czogeyB0dW1ibGU/OiB7IGJlbHQ6IG51bWJlciwgcm9vZjogbnVtYmVyLCBrOiBudW1iZXIgfSwgcGxhbj86IG51bWJlcltdW10gfSk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgbGV0IHggPSBwLmdldFgoaSk7IGNvbnN0IHkgPSBwLmdldFkoaSksIHogPSBwLmdldFooaSk7XG4gICAgaWYgKG9wdHMudHVtYmxlKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHkgLSBvcHRzLnR1bWJsZS5iZWx0KSAvIChvcHRzLnR1bWJsZS5yb29mIC0gb3B0cy50dW1ibGUuYmVsdCkpKTtcbiAgICAgIHggKj0gMSAtIG9wdHMudHVtYmxlLmsgKiB0O1xuICAgIH1cbiAgICBpZiAob3B0cy5wbGFuICYmIG9wdHMucGxhbi5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBzdCA9IG9wdHMucGxhbjtcbiAgICAgIGxldCBzID0gc3RbMF1bMV07XG4gICAgICBpZiAoeiA8PSBzdFswXVswXSkgcyA9IHN0WzBdWzFdO1xuICAgICAgZWxzZSBpZiAoeiA+PSBzdFtzdC5sZW5ndGggLSAxXVswXSkgcyA9IHN0W3N0Lmxlbmd0aCAtIDFdWzFdO1xuICAgICAgZWxzZSBmb3IgKGxldCBrID0gMDsgayA8IHN0Lmxlbmd0aCAtIDE7IGsrKykge1xuICAgICAgICBpZiAoeiA+PSBzdFtrXVswXSAmJiB6IDw9IHN0W2sgKyAxXVswXSkge1xuICAgICAgICAgIGNvbnN0IHUgPSAoeiAtIHN0W2tdWzBdKSAvIChzdFtrICsgMV1bMF0gLSBzdFtrXVswXSk7XG4gICAgICAgICAgcyA9IHN0W2tdWzFdICsgKHN0W2sgKyAxXVsxXSAtIHN0W2tdWzFdKSAqIHU7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB4ICo9IHM7XG4gICAgfVxuICAgIHAuc2V0WChpLCB4KTtcbiAgfVxuICBwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xufVxuXG4vKiogQSBzZW1pY2lyY3VsYXIgd2hlZWwtYXJjaCBub3RjaCBhcyBwcm9maWxlIHBvaW50cywgdG8gYmUgc3BsaWNlZCBpbnRvIGEgc2lkZSBwcm9maWxlIHRoYXQgcnVuc1xuICogIGFsb25nIHRoZSBzaWxsIGZyb20gK3ogdG8gLXogKGkuZS4geiBERUNSRUFTSU5HKS4gYG5gIHNlZ21lbnRzOyB0aGUgYXJjIGlzIHRoZSBUT1AgaGFsZi4gKi9cbmZ1bmN0aW9uIGFyY2hOb3RjaCh6YzogbnVtYmVyLCB5U2lsbDogbnVtYmVyLCByOiBudW1iZXIsIG4gPSA3KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgLyBuOyAgICAgICAgICAgICAgIC8vIDAgLi4gUEksIGZyb20gK3ogcm91bmQgdGhlIHRvcCB0byAtelxuICAgIHB0cy5wdXNoKFt6YyArIE1hdGguY29zKGEpICogciwgeVNpbGwgKyBNYXRoLnNpbihhKSAqIHJdKTtcbiAgfVxuICByZXR1cm4gcHRzO1xufVxuXG4vKipcbiAqIEEgV0hFRUw6IG9uZSBsYXRoZSBhYm91dCB0aGUgYXhsZS4gVGhlIHByb2ZpbGUgcnVucyBmcm9tIHRoZSBodWIgZmFjZSBvbiBvbmUgc2lkZSBvdmVyIHRoZSByaW1cbiAqIGxpcCwgdGhlIHR5cmUgc2lkZXdhbGwsIHRoZSB0cmVhZCBhbmQgYmFjayBkb3duIHRoZSBmYXIgc2lkZSwgc28gdGhlIHdoZWVsIGlzIGEgY2xvc2VkIHNvbGlkIHdpdGhcbiAqIG5vIG9wZW4gZW5kIGZvciB0aGUgdHVybnRhYmxlIGdhdGUgdG8gcmVhZCB0aHJvdWdoLiBSZXZvbHZlZCBhYm91dCBZIGFuZCB0aGVuIGxhaWQgb24gWCwgc28gdGhlXG4gKiBheGxlIGlzIHRoZSB4IGF4aXMgYW5kIHRoZSB3aGVlbCByb2xscyBhYm91dCBpdCAtLSB3aGljaCBpcyB0aGUgYXhpcyBpdHMgcGl2b3QgZGVjbGFyZXMuXG4gKlxuICogVHdvIHZlcnRleCBjb2xvdXJzOiBgcmltSGV4YCBvbiB0aGUgaHViIGFuZCByaW0gcG9pbnRzLCBgdHlyZUhleGAgb24gdGhlIHNpZGV3YWxsIGFuZCB0cmVhZC4gVGhlXG4gKiBsYXRoZSBvcmRlcnMgdmVydGljZXMgc2VnbWVudC1tYWpvciAoaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpLCB3aGljaCBpcyB3aGF0IGxldHMgYVxuICogcGVyLXByb2ZpbGUtcG9pbnQgY29sb3VyIGJlIHdyaXR0ZW4gd2l0aG91dCBhIHNlY29uZCBnZW9tZXRyeS5cbiAqL1xuZnVuY3Rpb24gd2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIGRpc2ggPSAwLjU1KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXG4gICAgWzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuMzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuNjIsIC1odyAqIDAuODBdLCBbclJpbSwgLWh3ICogMC44Nl0sIFtyUmltLCAtaHcgKiAwLjk4XSxcbiAgICBbclR5cmUgKiAwLjkzLCAtaHddLCBbclR5cmUsIC1odyAqIDAuNzJdLCBbclR5cmUsIGh3ICogMC43Ml0sIFtyVHlyZSAqIDAuOTMsIGh3XSxcbiAgICBbclJpbSwgaHcgKiAwLjk4XSwgW3JSaW0sIGh3ICogMC44Nl0sIFtyUmltICogMC42MiwgaHcgKiAwLjgwXSwgW3JSaW0gKiAwLjMwLCBodyAqIGRpc2hdLCBbMCwgaHcgKiBkaXNoXSxcbiAgXTtcbiAgY29uc3QgcmltUG9pbnQgPSAoajogbnVtYmVyKSA9PiBqIDw9IDQgfHwgaiA+PSA5O1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBzZWcpO1xuICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBjb25zdCBjdCA9IG5ldyBUSFJFRS5Db2xvcih0eXJlSGV4KSwgY3IgPSBuZXcgVEhSRUUuQ29sb3IocmltSGV4KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBjID0gcmltUG9pbnQoaSAlIHB0cy5sZW5ndGgpID8gY3IgOiBjdDtcbiAgICBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgZy5yb3RhdGVaKE1hdGguUEkgLyAyKTsgICAgLy8gbGF0aGUgYXhpcyBZIC0+IGF4bGUgb24gWFxuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogV2lyZS1zcG9rZWQgd2hlZWwgZHJlc3Npbmc6IGBuYCB0aGluIGJveGVzIHJhZGlhdGluZyBmcm9tIHRoZSBodWIsIGxhY2VkIGFsdGVybmF0ZWx5IHRvIGVhY2hcbiAqICBzaWRlIG9mIHRoZSByaW0gc28gdGhleSBjcm9zcyB0aGUgd2F5IHJlYWwgc3Bva2VzIGRvLiBNZXJnZWQgaW50byB0aGUgd2hlZWwgZ2VvbWV0cnkgc28gdGhlXG4gKiAgd2hlZWwgc3RheXMgT05FIGluc3RhbmNlZCBnZW9tZXRyeS4gKi9cbmZ1bmN0aW9uIHNwb2tlcyhySHViOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgbjogbnVtYmVyLCBoZXg6IG51bWJlciwgdCA9IDAuMDA2LCBwcmlzbSA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJICogMiAvIG47XG4gICAgY29uc3Qgc2lkZSA9IChpICUgMiA9PT0gMCA/IDEgOiAtMSkgKiBoYWxmVyAqIDAuMzU7XG4gICAgY29uc3QgbGVuID0gclJpbSAtIHJIdWI7XG4gICAgLy8gYHByaXNtYDogYW4gb3BlbiB0aHJlZS1zaWRlZCBwcmlzbSBhdCBzaXggdHJpYW5nbGVzIHdoZXJlIHRoZSBib3ggY29zdHMgdHdlbHZlIC0tIGEgd2lyZVxuICAgIC8vIHNwb2tlIGhhcyBubyByZXNvbHZhYmxlIHNlY3Rpb24gYXQgcHJvcCBkaXN0YW5jZSwgYW5kIDI4IG9mIHRoZW0gb24gdGhyZWUgd2hlZWxzIGlzIHRoZVxuICAgIC8vIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGxhcmdlIHByb3AgaW5zaWRlIGl0cyB0cmlhbmdsZSBjZWlsaW5nIGFuZCBvbmUgb3ZlciBpdFxuICAgIGNvbnN0IGcgPSBwcmlzbSA/IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHQgKiAwLjYyLCB0ICogMC42MiwgbGVuLCAzLCAxLCB0cnVlKSA6IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh0LCBsZW4sIHQpO1xuICAgIGcudHJhbnNsYXRlKDAsIHJIdWIgKyBsZW4gLyAyLCAwKTtcbiAgICBnLnJvdGF0ZVgoTWF0aC5hdGFuMihzaWRlLCBsZW4pICogMC42KTtcbiAgICBnLnJvdGF0ZVgoMCk7IGcudHJhbnNsYXRlKDAsIDAsIHNpZGUgKiAwLjUpO1xuICAgIGcucm90YXRlWChhKTsgICAgICAgICAgICAvLyByYWRpYXRlIGFyb3VuZCB0aGUgYXhsZSAoeClcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIHRpbnRHZW8obWVyZ2VHZW9zKHNlZ3MpLCBoZXgpO1xufVxuXG4vKiogQSBwb2x5bGluZSBUVUJFOiBvbmUgY3lsaW5kZXIgcGVyIHNlZ21lbnQsIGVhY2ggcm90YXRlZCBvbnRvIGl0cyBjaG9yZCwgd2l0aCBhIHNtYWxsIHNwaGVyZS1sZXNzXG4gKiAgb3ZlcmxhcCBzbyB0aGUgam9pbnRzIGNsb3NlLiBIYW5kbGViYXJzLCBjYW5vcHkgcmFpbHMsIHJvbGwgY2FnZXMgYW5kIGZyYW1lIHR1YmVzLiAqL1xuLyoqXG4gKiBgcmAgbWF5IGJlIGEgc2luZ2xlIHJhZGl1cyAoZXZlcnkgc2VnbWVudCB0aGUgc2FtZSwgdGhlIG9yaWdpbmFsIGJlaGF2aW91cikgb3IgT05FIFJBRElVUyBQRVJcbiAqIFNUQVRJT04sIHdoaWNoIHRhcGVycyB0aGUgdHViZS4gQSBjYXBwZWQgY29uc3RhbnQtcmFkaXVzIHR1YmUgZW5kcyBpbiBhIGZsYXQgZGlzYywgYW5kIG9uIHRoZVxuICogc3Bpcml0IGhvdXNlJ3MgZWF2ZSBob3JucyB0aGF0IHJlYWQgYXMgZm91ciBjdXQtb2ZmIHBvc3RzIHJhdGhlciB0aGFuIHBvaW50czsgYSBob3JuLCBhIHNwaWtlIG9yXG4gKiBhIHdoaXNrZXIgbmVlZHMgaXRzIGxhc3Qgc3RhdGlvbiBhdCB+MC4yNSBvZiB0aGUgZmFzY2lhIHJhZGl1cy4gVGhlIGpvaW50IG92ZXJsYXAgdGhhdCBoaWRlcyB0aGVcbiAqIHNlYW0gYmV0d2VlbiBzZWdtZW50cyBpcyAocmEgKyByYikgKiAwLjYsIHdoaWNoIGlzIGV4YWN0bHkgdGhlIG9sZCBgciAqIDEuMmAgd2hlbiB0aGV5IGFyZSBlcXVhbCxcbiAqIHNvIGEgbnVtYmVyIHN0aWxsIHByb2R1Y2VzIGJ5dGUtaWRlbnRpY2FsIGdlb21ldHJ5LlxuICovXG5mdW5jdGlvbiB0dWJlKHB0czogbnVtYmVyW11bXSwgcjogbnVtYmVyIHwgbnVtYmVyW10sIHNlZyA9IDgsIGhleD86IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgckF0ID0gKGk6IG51bWJlcikgPT4gKHR5cGVvZiByID09PSAnbnVtYmVyJyA/IHIgOiByW01hdGgubWluKGksIHIubGVuZ3RoIC0gMSldKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkID0gYi5jbG9uZSgpLnN1YihhKTsgY29uc3QgbGVuID0gZC5sZW5ndGgoKTtcbiAgICBpZiAobGVuIDwgMWUtNikgY29udGludWU7XG4gICAgY29uc3QgcmEgPSByQXQoaSksIHJiID0gckF0KGkgKyAxKTtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkocmIsIHJhLCBsZW4gKyAocmEgKyByYikgKiAwLjYsIHNlZywgMSwgZmFsc2UpO1xuICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgZC5ub3JtYWxpemUoKSk7XG4gICAgZy5hcHBseVF1YXRlcm5pb24ocSk7XG4gICAgY29uc3QgbSA9IGEuY2xvbmUoKS5hZGQoYikubXVsdGlwbHlTY2FsYXIoMC41KTtcbiAgICBnLnRyYW5zbGF0ZShtLngsIG0ueSwgbS56KTtcbiAgICBwYXJ0cy5wdXNoKGcpO1xuICB9XG4gIGNvbnN0IG91dCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IG91dCA6IHRpbnRHZW8ob3V0LCBoZXgpO1xufVxuXG4vKipcbiAqIEEgRkxBVCBTVFJBUCBzd2VwdCBhbG9uZyBhIHBvbHlsaW5lOiBhIGNoYWluIG9mIGJveGVzLCBlYWNoIG9yaWVudGVkIHNvIGl0cyBMRU5HVEggcnVucyBhbG9uZyB0aGVcbiAqIHNlZ21lbnQsIGl0cyBUSElDS05FU1MgYWxvbmcgdGhlIG91dHdhcmQgbm9ybWFsIGZyb20gYGFib3V0YCwgYW5kIGl0cyBXSURUSCB0YW5nZW50IHRvIHRoYXRcbiAqIHN1cmZhY2UuIFRoaXMgaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGd1YXJkIGFuZCBhIHdpcmU6IGEgYnVsa2hlYWQgbGFtcCdzIGNhZ2UgaXMgcHJlc3NlZFxuICogZmxhdCBiYXIsIGFuZCBhIHJvdW5kIHR1YmUgb2YgdGhlIHNhbWUgbWVhc3VyZWQgd2lkdGggc2hhZGVzIHRvIGEgbmFycm93IGhpZ2hsaWdodCBhbmQgcmVhZHMgYXNcbiAqIHdpcmUgLS0gd2hpY2ggaXMgdGhlIHRoaW5nIHRoaXMga2l0J3MgYXNzZXQgbm90ZXMgcnVsZSBvdXQuIEl0IGlzIGFsc28gQ0hFQVBFUiB0aGFuIGB0dWJlYDogYSBib3hcbiAqIGlzIDEyIHRyaWFuZ2xlcyBhZ2FpbnN0IGEgY2FwcGVkIDUtc2lkZWQgY3lsaW5kZXIncyAyMC5cbiAqL1xuZnVuY3Rpb24gc3RyYXAocHRzOiBudW1iZXJbXVtdLCB3OiBudW1iZXIsIHQ6IG51bWJlciwgYWJvdXQ6IG51bWJlcltdLCBoZXg/OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGMgPSBuZXcgVEhSRUUuVmVjdG9yMyhhYm91dFswXSwgYWJvdXRbMV0sIGFib3V0WzJdKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkaXIgPSBiLmNsb25lKCkuc3ViKGEpOyBjb25zdCBsZW4gPSBkaXIubGVuZ3RoKCk7XG4gICAgaWYgKGxlbiA8IDFlLTYpIGNvbnRpbnVlO1xuICAgIGRpci5ub3JtYWxpemUoKTtcbiAgICBjb25zdCBtaWQgPSBhLmNsb25lKCkuYWRkKGIpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG4gICAgLy8gT3V0d2FyZCBub3JtYWwgYXQgdGhlIG1pZHBvaW50LCByZS1vcnRob2dvbmFsaXNlZCBhZ2FpbnN0IHRoZSBydW4gc28gdGhlIGJhc2lzIHN0YXlzIHNxdWFyZVxuICAgIC8vIHdoZXJlIHRoZSBzdHJhcCBjbGltYnMgc3RlZXBseSBhbmQgdGhlIHR3byB3b3VsZCBvdGhlcndpc2UgYmUgbmVhcmx5IHBhcmFsbGVsLlxuICAgIGxldCBucm0gPSBtaWQuY2xvbmUoKS5zdWIoYyk7XG4gICAgbnJtLnN1YihkaXIuY2xvbmUoKS5tdWx0aXBseVNjYWxhcihucm0uZG90KGRpcikpKTtcbiAgICBpZiAobnJtLmxlbmd0aFNxKCkgPCAxZS0xMikgbnJtID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSkuc3ViKGRpci5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKGRpci56KSk7XG4gICAgbnJtLm5vcm1hbGl6ZSgpO1xuICAgIC8vIGRpciB4IG5ybSwgTk9UIG5ybSB4IGRpci4gVGhlIGJhc2lzIGNvbHVtbnMgYXJlIChzaWRlLCBkaXIsIG5ybSkgYWdhaW5zdCBhIGJveCdzICh3LCBsZW4sIHQpLFxuICAgIC8vIHNvIGEgcmlnaHQtaGFuZGVkIGJhc2lzIG5lZWRzIHNpZGUgeCBkaXIgPSBucm07IG5ybSB4IGRpciBnaXZlcyAtbnJtLCBhIG1pcnJvcmVkIGJhc2lzIHdpdGggYVxuICAgIC8vIG5lZ2F0aXZlIGRldGVybWluYW50LCBhbmQgZXZlcnkgc3RyYXAgcmVuZGVycyBpbnNpZGUgb3V0IC0tIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGRhcmtcbiAgICAvLyBzbGl2ZXIgcmF0aGVyIHRoYW4gYW4gb2J2aW91c2x5IGZsaXBwZWQgZmFjZSwgc28gaXQgcmVhZHMgYXMgYSBnZW9tZXRyeSBidWcsIG5vdCBhIHdpbmRpbmcgb25lLlxuICAgIGNvbnN0IHNpZGUgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNyb3NzVmVjdG9ycyhkaXIsIG5ybSkubm9ybWFsaXplKCk7XG4gICAgLy8gT3ZlcmxhcCB0aGUgam9pbnRzIGJ5IHRoZSB0aGlja25lc3Mgc28gY29uc2VjdXRpdmUgYm94ZXMgY2xvc2UgdGhlIG1pdHJlIHJhdGhlciB0aGFuXG4gICAgLy8gbGVhdmluZyBhIHdlZGdlIG9mIGRheWxpZ2h0IGF0IGV2ZXJ5IHN0YXRpb24uXG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBsZW4gKyB0LCB0KTtcbiAgICBnLmFwcGx5TWF0cml4NChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VCYXNpcyhzaWRlLCBkaXIsIG5ybSkpO1xuICAgIGcudHJhbnNsYXRlKG1pZC54LCBtaWQueSwgbWlkLnopO1xuICAgIHBhcnRzLnB1c2goZyk7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gb3V0IDogdGludEdlbyhvdXQsIGhleCk7XG59XG5cbi8qKiBBIHJvdGF0ZWQgYm94OiBbY3gsIGN5LCBjeiwgdywgaCwgZCwgcngsIHJ5LCByel0gd2l0aCB0aGUgcm90YXRpb25zIGFwcGxpZWQgaW4geCwgeSwgeiBvcmRlclxuICogIGFib3V0IHRoZSBib3gncyBvd24gY2VudHJlLiBBIGJvbm5ldCBsaXAsIGEgcmFrZWQgbWlycm9yIHN0ZW0sIGEgY2Fub3B5IHN0YXkuICovXG5mdW5jdGlvbiByYm94KGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJbM10sIGJbNF0sIGJbNV0pO1xuICBpZiAoYls2XSkgZy5yb3RhdGVYKGJbNl0pOyBpZiAoYls3XSkgZy5yb3RhdGVZKGJbN10pOyBpZiAoYls4XSkgZy5yb3RhdGVaKGJbOF0pO1xuICBnLnRyYW5zbGF0ZShiWzBdLCBiWzFdLCBiWzJdKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIGJhdGNoIG9mIGJveGVzLCBlYWNoIHRpbnRlZCwgbWVyZ2VkOiBbW2hleCwgY3gsIGN5LCBjeiwgdywgaCwgZCwgcng/LCByeT8sIHJ6P10sIC4uLl0uIFRoZVxuICogIHRyaW0gY29tcG9uZW50IG9mIGV2ZXJ5IHZlaGljbGUgaXMgb25lIG9mIHRoZXNlIC0tIGJ1bXBlcnMsIGdyaWxsZSwgbGFtcHMsIG1pcnJvcnMsIGhhbmRsZXMsXG4gKiAgc3RlcHMsIGFyY2ggZmxhcmVzIC0tIHNvIGZvcnR5IHBhcnRzIHJpZGUgb25lIHN1Ym1pc3Npb24uICovXG5mdW5jdGlvbiB0aW50ZWRCb3hlcyhsaXN0OiBudW1iZXJbXVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiB0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKSk7XG59XG5cbi8qKiBNaXJyb3IgYSBib3ggbGlzdCBhY3Jvc3MgeCA9IDAgKGxlZnQvcmlnaHQgcGFpcnMpLiBSb3RhdGlvbnMgYWJvdXQgeSBhbmQgeiBmbGlwIHNpZ24uICovXG5mdW5jdGlvbiBtaXJyb3JYKGxpc3Q6IG51bWJlcltdW10pOiBudW1iZXJbXVtdIHtcbiAgcmV0dXJuIGxpc3QuZmxhdE1hcCgoYikgPT4gW2IsIFtiWzBdLCAtYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSwgYls2XSwgYls3XSA/PyAwLCAtKGJbOF0gPz8gMCksIC0oYls5XSA/PyAwKV1dKTtcbn1cblxuLyoqIEEgc2VhbWxlc3MgQ2FudmFzIDJEIHRpbGU6IGBkcmF3KGN0eCwgc2l6ZSlgIHBhaW50cyBpdCwgYW5kIHRoZSByZXN1bHQgaXMgYSByZXBlYXRpbmcgdGV4dHVyZVxuICogIGluIHNSR0IuIFVzZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLCBzbyB0aGUgdGV4dHVyZWxlc3MgZGVjbGFyYXRpb24gc3RhbmRzIGFuZCBub1xuICogIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQuIFJldHVybnMgbnVsbCB3aGVyZSB0aGVyZSBpcyBubyBET00gKHRoZSBoZWFkbGVzcyBoYXJuZXNzXG4gKiAgaGFzIG9uZTsgYSBub2RlLXNpZGUgcHJvYmUgZG9lcyBub3QpLCBhbmQgZXZlcnkgY2FsbGVyIHRvbGVyYXRlcyBudWxsLiAqL1xuZnVuY3Rpb24gY2FudmFzVGlsZShzaXplOiBudW1iZXIsIGRyYXc6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgczogbnVtYmVyKSA9PiB2b2lkKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGN2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IGN2LndpZHRoID0gc2l6ZTsgY3YuaGVpZ2h0ID0gc2l6ZTtcbiAgLy8gd2lsbFJlYWRGcmVxdWVudGx5IGtlZXBzIHRoZSB0aWxlIG9uIHRoZSBDUFUgcmFzdGVyIHBhdGg6IGEgR1BVLWJhY2tlZCBjYW52YXMgY29zdHMgc2Vjb25kcyBwZXJcbiAgLy8gdGhvdXNhbmQgcGF0aCBmaWxscyB3aGVyZSB0aGUgc29mdHdhcmUgcGF0aCB0YWtlcyB0ZW5zIG9mIG1pbGxpc2Vjb25kcy5cbiAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsOyBpZiAoIWN0eCkgcmV0dXJuIG51bGw7XG4gIGRyYXcoY3R4LCBzaXplKTtcbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3YpO1xuICB0ZXgud3JhcFMgPSB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgdGV4LmNvbG9yU3BhY2UgPSBUSFJFRS5TUkdCQ29sb3JTcGFjZTtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgcmV0dXJuIHRleDtcbn1cblxuLyoqIERldGVybWluaXN0aWMgcHNldWRvLXJhbmRvbSBmb3IgY2FudmFzIGRyZXNzaW5nIC0tIGFzc2lnbmVkIGJ5IGluZGV4LCBuZXZlciBNYXRoLnJhbmRvbSwgc28gdGhlXG4gKiAgbW9kZWwgaXMgYnl0ZS1pZGVudGljYWwgb24gZXZlcnkgYnVpbGQuICovXG5mdW5jdGlvbiBsY2coc2VlZDogbnVtYmVyKTogKCkgPT4gbnVtYmVyIHtcbiAgbGV0IHMgPSBzZWVkID4+PiAwO1xuICByZXR1cm4gKCkgPT4geyBzID0gKHMgKiAxNjY0NTI1ICsgMTAxMzkwNDIyMykgPj4+IDA7IHJldHVybiBzIC8gNDI5NDk2NzI5NjsgfTtcbn1cblxuLyoqXG4gKiBNVUQgLyBST0FELUdSSU1FIHRpbGUsIFJFLUJBU0VELiBUaGFpIHJvYWQgbXVkIGlzIHRhbiBhbmQgQlJJR0hURVIgdGhhbiBtb3N0IHBhaW50LCBhbmQgYVxuICogbXVsdGlwbGllciBjYW5ub3QgYnJpZ2h0ZW46IHNvIHRoZSBwYWludCBtYXRlcmlhbCBjYXJyaWVzIHRoZSBNVUQgRU5WRUxPUEUgY29sb3VyIChtZWFzdXJlZCBvblxuICogdGhlIG11ZGR5IHNpbGwpLCB0aGlzIHRpbGUgY2FycmllcyB0aGUgY2xlYW4gcGFpbnQgYXMgYSBSQVRJTyBvZiB0aGF0IGVudmVsb3BlIG92ZXIgbW9zdCBvZiBpdHNcbiAqIGFyZWEgKGBiYXNlYCksIGFuZCB0aGUgbXVkIGlzIHBhaW50ZWQgYXMgd2hpdGUgLS0gaS5lLiB0aGUgZW52ZWxvcGUgaXRzZWxmIC0tIGluIGEgd2FzaCByaXNpbmdcbiAqIGZyb20gdGhlIGJvdHRvbSB0byBgY292ZXJhZ2VgIG9mIHRoZSB0aWxlIGhlaWdodCBwbHVzIHNwbGF0dGVyIGFib3ZlIGl0LiBCb3VuZCB3aXRoIGhlaWdodCBVVnNcbiAqIHNvIHYgPSAwIGlzIHRoZSBncm91bmQgYW5kIHRoZSB3YXNoIHNpdHMgb24gdGhlIHNpbGxzIGFuZCBhcmNoZXMuXG4gKi9cbmZ1bmN0aW9uIG11ZFRpbGUoc2l6ZTogbnVtYmVyLCBiYXNlOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzMpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgdG9IZXggPSAodjogbnVtYmVyW10pID0+ICcjJyArIHYubWFwKChjKSA9PiBNYXRoLnJvdW5kKE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGMpKSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0b0hleChiYXNlKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjU1LDI1NSwwLjg4KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNDUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpJyk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuMzU7XG4gICAgICBjb25zdCByID0gMyArIHJuZCgpICogcyAqIDAuMDU7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4yODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDI1NSwyNTAsMjQwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjUwLDI0MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBhIGxpdHRsZSBncmFpbiBzbyB0aGUgY2xlYW4gcGFpbnQgaXMgbm90IGEgZmxhdCBmaWxsXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7IGNvbnN0IHYgPSBybmQoKSA8IDAuNSA/IDAgOiAyNTU7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4wMzUpYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEuNSwgMS41KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogRFVTVCB0aWxlIGZvciBwYWludCB0aGF0IGlzIEJSSUdIVEVSIHRoYW4gaXRzIGRpcnQgKGEgd2hpdGUgdmFuKTogYSBwbGFpbiBtdWx0aXBsaWVyLCB3aGl0ZVxuICogIGJhc2UgYW5kIGEgZ3JleS1icm93biB3YXNoIHJpc2luZyBmcm9tIHRoZSBncm91bmQgdG8gYGNvdmVyYWdlYCwgcGx1cyBzb2Z0IGJsb2JzLiAqL1xuZnVuY3Rpb24gZHVzdFRpbGUoc2l6ZTogbnVtYmVyLCBkdXN0OiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGMgPSBkdXN0Lm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiBNYXRoLm1pbigxLCB2KSkpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjkpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjQpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuNCwgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA1LCBhID0gMC4wOCArIHJuZCgpICogMC4yNTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBDT1JSVUdBVEVEIFNIRUVUIHRpbGU6IHZlcnRpY2FsIHJpZGdlcyBhcyBhIHNpbmUtc2hhZGVkIHN0cmlwZSBmaWVsZCwgdXNlZCBhcyBtYXAgQU5EIGJ1bXBNYXAgb25cbiAqICBhIHNvbmd0aGFldyByb29mIHNvIHRoZSByaWRnZXMgY2F0Y2ggbGlnaHQuIGBwaXRjaGAgcmlkZ2VzIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gY29ycnVnYXRpb25UaWxlKHNpemU6IG51bWJlciwgcGl0Y2g6IG51bWJlciwgbG93OiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgY29uc3QgdCA9IChNYXRoLmNvcyh4IC8gcyAqIE1hdGguUEkgKiAyICogcGl0Y2gpICsgMSkgLyAyOyAgIC8vIDEgYXQgY3Jlc3QsIDAgaW4gdHJvdWdoXG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiAobG93ICsgKDEgLSBsb3cpICogdCkpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMTg7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTIwLDkwLDYwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMjAsOTAsNjAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFBMQU5LIHRpbGU6IGJvYXJkcyBydW5uaW5nIGFsb25nIHUgd2l0aCBkYXJrIGpvaW50cyBhbmQgZ3JhaW4gc3RyZWFrcywgYSBtdWx0aXBsaWVyIG9uIGFcbiAqICBtZWFzdXJlZCB0aW1iZXIgYWxiZWRvLiBgYm9hcmRzYCBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIHBsYW5rVGlsZShzaXplOiBudW1iZXIsIGJvYXJkczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGJoID0gcyAvIGJvYXJkcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IGJvYXJkczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgYmgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDMwLDIwLDAuNTUpJzsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDE0OyBrKyspIHtcbiAgICAgICAgY29uc3QgeSA9IGIgKiBiaCArIHJuZCgpICogYmgsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjYpLCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSg2MCw0NSwzMCwkezAuMDUgKyBybmQoKSAqIDAuMTJ9KWA7IGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgbGVuLCB5KTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgbGVuLCB5KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBSVVNUIHRpbGU6IGEgbXVsdGlwbGllciBvZiBibG90Y2hlZCBvcmFuZ2UtYnJvd24gb3ZlciBhIGJhc2UsIGRhcmsgY29yZXMgbGlmdGVkIHNvIG5vdGhpbmcgbGFuZHNcbiAqICBvbiB0aGUgbHVtYS01OCBob2xlIGdhdGUuICovXG5mdW5jdGlvbiBydXN0VGlsZShzaXplOiBudW1iZXIsIHJhdGlvOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBkZW5zaXR5ID0gOTApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVuc2l0eTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDk7XG4gICAgICBjb25zdCBhID0gMC4xNSArIHJuZCgpICogMC40NTtcbiAgICAgIGNvbnN0IGMgPSByYXRpby5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogdikpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBIZWlnaHQta2V5ZWQgVVZzOiB2IGlzIHdvcmxkIEhFSUdIVCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB1IHJ1bnMgYWxvbmcgdGhlIGRvbWluYW50IGhvcml6b250YWxcbiAqICBheGlzLiBBIG11ZCB0aWxlIGJvdW5kIHRoaXMgd2F5IGRhcmtlbnMgdGhlIHNpbGxzIGFuZCBzdGF5cyBjbGVhbiBvbiB0aGUgcm9vZiAtLSBhIHBsYWluIGJveFxuICogIHByb2plY3Rpb24gd291bGQgcmVwZWF0IHRoZSB0aWxlJ3MgZGlydHkgYmFuZCBhY3Jvc3MgdGhlIHJvb2YgYXMgc3RyaXBlcy4gKi9cbi8qKlxuICogU0hPUlQgRlVSOiBhIHNlYW1sZXNzIHRpbGUgb2YgZGVuc2UsIHNob3J0LCBkaXJlY3Rpb25hbCBoYWlyIHN0cm9rZXMgb3ZlciBhIGNsb3VkeSB0b25lIGRyaWZ0LCBhcyBhXG4gKiBtdWx0aXBseSBtYXAgKGFuZCBidW1wKSBvbiBhIHdoaXRlIHZlcnRleC1jb2xvdXJlZCBjb2F0LiBUaGUgc3Ryb2tlcyBydW4gYWxvbmcgdiB3aXRoIGEgaml0dGVyZWRcbiAqIGxlYW4gYW5kIGEgbmFycm93IHRvbmUgc3ByZWFkIC0tIGEgd2lkZSBzcHJlYWQgcmVhZHMgYXMgc2NhbGVzLCBhIHBlcmZlY3QgbGF5IHJlYWRzIGFzIGNvbWJlZFxuICogcGxhc3RpYy4gYHBhdGNoZXNgIGFkZHMgYSBmZXcgc29mdCBwaW5rLWdyZXkgYmFyZSBwYXRjaGVzLCB0aGUgbWFuZ2UgbWFya3Mgb2YgYSBzdHJlZXQgZG9nLlxuICovXG5mdW5jdGlvbiBmdXJUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IHRvbmUgPSBvLnRvbmUgPz8gWzAuNzIsIDAuNjYsIDAuNThdLCBtID0gcyAqIDAuMDY7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGNsb3VkeSBkcmlmdCB1bmRlcm5lYXRoIHNvIHRoZSBjb2F0IGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uY2xvdWRzID8/IDI2KTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA4ICsgcm5kKCkgKiAwLjE4KSwgYSA9IDAuMDQgKyBybmQoKSAqIDAuMTA7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih0b25lKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHRvbmUpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYmFyZSBwYXRjaGVzOiBzb2Z0LCBzcGFyc2UsIHdhcm0gZ3JleS1waW5rXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5wYXRjaGVzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMDUpLCBwYyA9IG8ucGF0Y2hUb25lID8/IFswLjcyLCAwLjU2LCAwLjUyXTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHBjKX0sMC41NSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2IocGMpfSwwLjMpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihwYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByICogMS4zLCByLCBybmQoKSAqIE1hdGguUEksIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBoYWlyIHN0cm9rZXM6IGRhcmsgYW5kIGxpZ2h0LCBzaG9ydCwgbGVhbmluZyB3aXRoaW4gKy0yMiBkZWdyZWVzIG9mIHZcbiAgICBjb25zdCBzdHJva2VzID0gby5zdHJva2VzID8/IDUwMDAsIGxlbiA9IHMgKiAoby5sZW5ndGggPz8gMC4wMjIpO1xuICAgIGNvbnN0IGRyYXdTdHJva2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIHc6IG51bWJlcikgPT4ge1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHc7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTtcbiAgICAgIGlmICh4IDwgbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIHMsIHkpOyBjdHgubGluZVRvKHggKyBzICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHggPiBzIC0gbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHkgPCBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5ICsgcyk7IGN0eC5saW5lVG8oeCArIGR4LCB5ICsgcyArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeSA+IHMgLSBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5IC0gcyk7IGN0eC5saW5lVG8oeCArIGR4LCB5IC0gcyArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgfTtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJva2VzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHRoID0gKHJuZCgpIC0gMC41KSAqIDAuNzgsIGwgPSBsZW4gKiAoMC42ICsgcm5kKCkgKiAwLjgpO1xuICAgICAgY29uc3QgbGlnaHQgPSBybmQoKSA8IDAuNDI7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gbGlnaHQgPyAnc2NyZWVuJyA6ICdtdWx0aXBseSc7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBsaWdodCA/IGByZ2JhKDI1NSwyNTAsMjQwLCR7MC4wNSArIHJuZCgpICogMC4xMH0pYCA6IGByZ2JhKCR7cmdiKHRvbmUpfSwkezAuMDYgKyBybmQoKSAqIDAuMTR9KWA7XG4gICAgICBkcmF3U3Ryb2tlKHgsIHksIE1hdGguc2luKHRoKSAqIGwsIE1hdGguY29zKHRoKSAqIGwsIDAuNiArIHJuZCgpICogMS4yKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoZWlnaHRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGNvbnN0IHUgPSBheCA+PSBheiA/IHAuZ2V0WihpKSA6IHAuZ2V0WChpKTtcbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSBwLmdldFkoaSkgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIE9mZnNldCBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgb3V0d2FyZCBieSBgZGAgYWxvbmcgdGhlIGF2ZXJhZ2VkIGVkZ2Ugbm9ybWFscy4gVXNlZFxuICogIHRvIHN0YW5kIHRoZSBnbGFzcyBiYW5kIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBib2R5J3MgcmFrZWQgd2luZHNjcmVlbiBhbmQgcmVhciBnbGFzc1xuICogIGZhY2VzLCBzbyB0aGUgcGFuZSBhbmQgdGhlIGJvZHkgbmV2ZXIgc2hhcmUgYSBwbGFuZS4gV2luZGluZzogY291bnRlci1jbG9ja3dpc2UgaW4gKHosIHkpLiAqL1xuZnVuY3Rpb24gb2Zmc2V0UG9seShwdHM6IG51bWJlcltdW10sIGQ6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBuID0gcHRzLmxlbmd0aCwgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IHB0c1soaSArIG4gLSAxKSAlIG5dLCBiID0gcHRzW2ldLCBjID0gcHRzWyhpICsgMSkgJSBuXTtcbiAgICBjb25zdCBlMSA9IFtiWzBdIC0gYVswXSwgYlsxXSAtIGFbMV1dLCBlMiA9IFtjWzBdIC0gYlswXSwgY1sxXSAtIGJbMV1dO1xuICAgIGNvbnN0IGwxID0gTWF0aC5oeXBvdChlMVswXSwgZTFbMV0pIHx8IDEsIGwyID0gTWF0aC5oeXBvdChlMlswXSwgZTJbMV0pIHx8IDE7XG4gICAgLy8gb3V0d2FyZCBub3JtYWwgb2YgYSBDQ1cgZWRnZSAoZHosIGR5KSBpcyAoZHksIC1keilcbiAgICBjb25zdCBuMSA9IFtlMVsxXSAvIGwxLCAtZTFbMF0gLyBsMV0sIG4yID0gW2UyWzFdIC8gbDIsIC1lMlswXSAvIGwyXTtcbiAgICBsZXQgbnggPSBuMVswXSArIG4yWzBdLCBueSA9IG4xWzFdICsgbjJbMV07XG4gICAgY29uc3QgbmwgPSBNYXRoLmh5cG90KG54LCBueSkgfHwgMTsgbnggLz0gbmw7IG55IC89IG5sO1xuICAgIGNvbnN0IGNvc0hhbGYgPSBNYXRoLm1heCgwLjM1LCBueCAqIG4xWzBdICsgbnkgKiBuMVsxXSk7XG4gICAgb3V0LnB1c2goW2JbMF0gKyBueCAqIGQgLyBjb3NIYWxmLCBiWzFdICsgbnkgKiBkIC8gY29zSGFsZl0pO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBBIHdoZWVsLWFyY2ggRkxBUkU6IGEgaGFsZi1hbm51bHVzIGluIHRoZSAoeiwgeSkgcGxhbmUsIGV4dHJ1ZGVkIGFjcm9zcyB4MC4ueDEgb24gYm90aCBzaWRlc1xuICogIGFuZCB0aW50ZWQuIFN0YW5kcyBwcm91ZCBvZiB0aGUgYm9keSBzaWRlIGFuZCBoaWRlcyB0aGUgYXJjaCdzIGN1dCBlZGdlLiAqL1xuZnVuY3Rpb24gZmxhcmUoemM6IG51bWJlciwgeWM6IG51bWJlciwgckluOiBudW1iZXIsIHJPdXQ6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgaGV4OiBudW1iZXIsIG4gPSA5KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IGNvbnN0IHogPSB6YyArIE1hdGguY29zKGEpICogck91dCwgeSA9IHljICsgTWF0aC5zaW4oYSkgKiByT3V0OyBpZiAoaSA9PT0gMCkgc2hhcGUubW92ZVRvKHosIHkpOyBlbHNlIHNoYXBlLmxpbmVUbyh6LCB5KTsgfVxuICBmb3IgKGxldCBpID0gbjsgaSA+PSAwOyBpLS0pIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IHNoYXBlLmxpbmVUbyh6YyArIE1hdGguY29zKGEpICogckluLCB5YyArIE1hdGguc2luKGEpICogckluKTsgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgbWsgPSAoc3g6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB4MSAtIHgwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlIH0pO1xuICAgIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpOyBnLnRyYW5zbGF0ZSh4MSwgMCwgMCk7IGlmIChzeCA8IDApIGcuc2NhbGUoLTEsIDEsIDEpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIHRpbnRHZW8oZywgaGV4KTtcbiAgfTtcbiAgY29uc3QgbCA9IG1rKC0xKSwgciA9IG1rKDEpO1xuICAvLyBhIG5lZ2F0aXZlIHNjYWxlIGZsaXBzIHRoZSB3aW5kaW5nOyByZXN0b3JlIGl0IHNvIHRoZSBmbGFyZSBpcyBub3QgaW5zaWRlIG91dFxuICBjb25zdCBpZHggPSBsLmdldEluZGV4KCk7IGlmIChpZHgpIHsgY29uc3QgYSA9IGlkeC5hcnJheSBhcyBhbnk7IGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMykgeyBjb25zdCB0ID0gYVtpICsgMV07IGFbaSArIDFdID0gYVtpICsgMl07IGFbaSArIDJdID0gdDsgfSBpZHgubmVlZHNVcGRhdGUgPSB0cnVlOyB9XG4gIGVsc2UgeyBjb25zdCBwID0gbC5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSArPSAzKSB7IGNvbnN0IHgxXyA9IHAuZ2V0WChpICsgMSksIHkxXyA9IHAuZ2V0WShpICsgMSksIHoxXyA9IHAuZ2V0WihpICsgMSk7IHAuc2V0WFlaKGkgKyAxLCBwLmdldFgoaSArIDIpLCBwLmdldFkoaSArIDIpLCBwLmdldFooaSArIDIpKTsgcC5zZXRYWVooaSArIDIsIHgxXywgeTFfLCB6MV8pOyB9IH1cbiAgbC5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gbWVyZ2VHZW9zKFtsLCByXSk7XG59XG5cbi8qKiBCaW5kIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgdG8gYSBtYXRlcmlhbCBhcyBtYXAgKGFuZCBidW1wKSwgbGVhdmluZyB0aGUgdGV4dHVyZWxlc3NcbiAqICBkZWNsYXJhdGlvbiBpbnRhY3Q6IG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQsIHRoZSBtZWFzdXJlZCBjb2xvdXIgc3RheXMgdGhlXG4gKiAgbXVsdGlwbGljYW5kLCBhbmQgdGhlIHdob2xlIHRoaW5nIGNvc3RzIG9uZSBjYW52YXMuICovXG5mdW5jdGlvbiBiaW5kVGlsZShtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsLCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsLCBidW1wID0gMCk6IHZvaWQge1xuICBpZiAoIXRleCkgcmV0dXJuO1xuICBtYXQubWFwID0gdGV4O1xuICBpZiAoYnVtcCA+IDApIHsgbWF0LmJ1bXBNYXAgPSB0ZXg7IG1hdC5idW1wU2NhbGUgPSBidW1wOyB9XG4gIG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cblxuLyoqXG4gKiBBIERSQVBFRCBTSEVFVDogYGhlaWdodHNbal1baV1gIGlzIHRoZSB0b3Agc3VyZmFjZSBhdCB4ID0geDAuLngxIChpIG92ZXIgbngpIGFuZCB6ID0gejAuLnoxIChqIG92ZXJcbiAqIG56KTsgdGhlIHNoZWV0IGlzIGB0YCB0aGljay4gVG9wIGFuZCB1bmRlcnNpZGUgYXJlIHNtb290aC1zaGFkZWQgZ3JpZHMsIHRoZSBmb3VyIGVkZ2VzIGFyZSBmbGF0XG4gKiBzdHJpcHMgd291bmQgb3V0d2FyZC4gQSB0YXJwIGNhbm9weSBpcyBhIHJpZGdlIGxpbmUgbWludXMgdGhlIHNhZyBiZXR3ZWVuIGl0cyBwb2xlcyBtaW51cyB0aGVcbiAqIGRyb29wIG9mIGl0cyBmcmVlIGVkZ2VzIC0tIGNsb3RoLCB3aGVyZSBhIHNsYWIgcmVhZHMgYXMgYSBwYWludGVkIGJveC5cbiAqL1xuZnVuY3Rpb24gc2hlZXQoczogYW55KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBueDogbnVtYmVyID0gcy5ueCwgbno6IG51bWJlciA9IHMubnosIEhoOiBudW1iZXJbXVtdID0gcy5oZWlnaHRzLCB0OiBudW1iZXIgPSBzLnQgPz8gMC4wMTI7XG4gIGNvbnN0IFggPSAoaTogbnVtYmVyKSA9PiBzLngwICsgKHMueDEgLSBzLngwKSAqIGkgLyBueDtcbiAgLy8gYHpzYCBnaXZlcyB0aGUgeiBTVEFUSU9OUyBleHBsaWNpdGx5IGluc3RlYWQgb2YgZGl2aWRpbmcgejAuLnoxIGV2ZW5seS4gQSByb29mIHdob3NlIGVhdmUgYW5kXG4gIC8vIHJha2Ugd2FudCBhIG5hcnJvdyBydXN0ZWQgYmFuZCBuZWVkcyByb3dzIDAuMTAgbSBpbiBmcm9tIHRoZSBlZGdlLCBhbmQgcmVhY2hpbmcgdGhhdCBieSByYWlzaW5nXG4gIC8vIG56IGFsb25lIHdvdWxkIG11bHRpcGx5IHRoZSB3aG9sZSBncmlkIC0tIDEwNCBmbHV0ZSBjb2x1bW5zIGlzIHdoYXQgbWFrZXMgYSByb3cgZXhwZW5zaXZlLlxuICBjb25zdCBaUzogbnVtYmVyW10gfCBudWxsID0gQXJyYXkuaXNBcnJheShzLnpzKSA/IHMuenMgOiBudWxsO1xuICBjb25zdCBaID0gKGo6IG51bWJlcikgPT4gKFpTID8gWlNbal0gOiBzLnowICsgKHMuejEgLSBzLnowKSAqIGogLyBueik7XG4gIGNvbnN0IGdyaWQgPSAoeU9mZjogbnVtYmVyLCBmbGlwOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCB1djogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDw9IG54OyBpKyspIHsgcG9zLnB1c2goWChpKSwgSGhbal1baV0gKyB5T2ZmLCBaKGopKTsgdXYucHVzaChpIC8gbngsIGogLyBueik7IH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDwgbng7IGkrKykge1xuICAgICAgY29uc3QgYSA9IGogKiAobnggKyAxKSArIGksIGIgPSBhICsgMSwgYyA9IGEgKyBueCArIDEsIGQgPSBjICsgMTtcbiAgICAgIGlmIChmbGlwKSBpZHgucHVzaChhLCBiLCBjLCBiLCBkLCBjKTsgZWxzZSBpZHgucHVzaChhLCBjLCBiLCBiLCBjLCBkKTtcbiAgICB9XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvcywgMykpO1xuICAgIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gICAgZy5zZXRJbmRleChpZHgpOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiBnO1xuICB9O1xuICAvLyBgaGV4VG9wYCAvIGBoZXhVbmRlcmA6IGEgY29sb3VyIGF0dHJpYnV0ZSB3cml0dGVuIHBlciBncmlkLCBzbyBhIHRhcnAgY2FuIGJlIGJsdWUgb24gdG9wIGFuZFxuICAvLyBvcmFuZ2UgdW5kZXJuZWF0aCBvbiBPTkUgbWF0ZXJpYWwgYW5kIE9ORSBkcmF3IGNhbGwuIEEgY29tcG9uZW50IHRpbnQgY2Fubm90IGRvIGl0IC0tIHRoZSB0d29cbiAgLy8gc3VyZmFjZXMgYXJlIG1pbGxpbWV0cmVzIGFwYXJ0IGluIHksIHNvIG5vIGF4aXMgYmxlbmQgc2VwYXJhdGVzIHRoZW0gLS0gYW5kIGEgc2Vjb25kIHNoZWV0XG4gIC8vIHdvdWxkIGRvdWJsZSB0aGUgcm9vZidzIHRyaWFuZ2xlcyBmb3IgYSBjb2xvdXIuIE9taXR0ZWQsIHRoZSBnZW9tZXRyeSBpcyB1bnRpbnRlZCBhcyBiZWZvcmUuXG4gIGNvbnN0IHBhaW50ID0gKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBoZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCwgYyA9IG5ldyBUSFJFRS5Db2xvcihoZXgpLCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7IH1cbiAgICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpOyByZXR1cm4gZztcbiAgfTtcbiAgLy8gYGhleEdyaWRbal1baV1gIGlzIGEgY29sb3VyIFBFUiBUT1AtR1JJRCBWRVJURVgsIGNvbXB1dGVkIGF0IGVtaXQgdGltZSAtLSB3aGljaCBpcyB0aGUgb25seSB3YXlcbiAgLy8gdG8gcHV0IGEgbWFyayBhdCBhIGtub3duIHBsYWNlIG9uIHRoZSBzaGVldC4gQSBjYW52YXMgdGlsZSByZXBlYXRzIGJ5IHdvcmxkIHBvc2l0aW9uIGFuZCBrbm93c1xuICAvLyBub3RoaW5nIGFib3V0IHdoZXJlIHRoZSBlYXZlIGlzOyBgaGV4VG9wYCBpcyBvbmUgZmxhdCB0b25lIGZvciB0aGUgd2hvbGUgc3VyZmFjZS4gVGhpcyBpcyB3aGF0XG4gIC8vIGNhcnJpZXMgdGhlIHJ1c3RlZCBiYW5kIGFsb25nIHRoZSBlYXZlIGFuZCB0aGUgcmFrZXMsIGFuZCB0aGUgc3RhaW5pbmcgYmVzaWRlIGVhY2ggc2hlZXQgbGFwLlxuICBjb25zdCBwYWludEdyaWQgPSAoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIEhHOiBudW1iZXJbXVtdKSA9PiB7XG4gICAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50LCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKSwgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgIGxldCBrID0gMDtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8PSBueDsgaSsrKSB7IGMuc2V0SGV4KEhHW2pdW2ldKTsgY29sW2srK10gPSBjLnI7IGNvbFtrKytdID0gYy5nOyBjb2xbaysrXSA9IGMuYjsgfVxuICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7IHJldHVybiBnO1xuICB9O1xuICBjb25zdCB0b3AwID0gZ3JpZCgwLCBmYWxzZSksIHVuZDAgPSBncmlkKC10LCB0cnVlKTtcbiAgY29uc3QgcGFydHMgPSBzLmhleEdyaWQgIT09IHVuZGVmaW5lZFxuICAgID8gW3BhaW50R3JpZCh0b3AwLCBzLmhleEdyaWQpLCBwYWludCh1bmQwLCBzLmhleFVuZGVyID8/IDB4ZmZmZmZmKV1cbiAgICA6IHMuaGV4VW5kZXIgIT09IHVuZGVmaW5lZFxuICAgICAgPyBbcGFpbnQodG9wMCwgcy5oZXhUb3AgPz8gMHhmZmZmZmYpLCBwYWludCh1bmQwLCBzLmhleFVuZGVyKV1cbiAgICAgIDogW3RvcDAsIHVuZDBdO1xuICAvLyBlZGdlIHN0cmlwczogZWFjaCBxdWFkIGZyb20gdGhlIHRvcCBlZGdlIGRvd24gdG8gdGhlIHVuZGVyc2lkZSwgd291bmQgc28gaXRzIG5vcm1hbCBmYWNlcyBgb3V0YFxuICBjb25zdCBzdHJpcCA9IChwdHM6IG51bWJlcltdW11bXSwgb3V0OiBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXY6IG51bWJlcltdID0gW107XG4gICAgZm9yIChjb25zdCBbcDAsIHAxXSBvZiBwdHMpIHtcbiAgICAgIGNvbnN0IHEwID0gcDAsIHExID0gcDEsIHEyID0gW3AxWzBdLCBwMVsxXSAtIHQsIHAxWzJdXSwgcTMgPSBbcDBbMF0sIHAwWzFdIC0gdCwgcDBbMl1dO1xuICAgICAgY29uc3QgZTEgPSBbcTFbMF0gLSBxMFswXSwgcTFbMV0gLSBxMFsxXSwgcTFbMl0gLSBxMFsyXV0sIGUyID0gW3EyWzBdIC0gcTBbMF0sIHEyWzFdIC0gcTBbMV0sIHEyWzJdIC0gcTBbMl1dO1xuICAgICAgY29uc3QgbiA9IFtlMVsxXSAqIGUyWzJdIC0gZTFbMl0gKiBlMlsxXSwgZTFbMl0gKiBlMlswXSAtIGUxWzBdICogZTJbMl0sIGUxWzBdICogZTJbMV0gLSBlMVsxXSAqIGUyWzBdXTtcbiAgICAgIGNvbnN0IHRyaSA9IG5bMF0gKiBvdXRbMF0gKyBuWzFdICogb3V0WzFdICsgblsyXSAqIG91dFsyXSA+PSAwID8gW3EwLCBxMSwgcTIsIHEwLCBxMiwgcTNdIDogW3EwLCBxMiwgcTEsIHEwLCBxMywgcTJdO1xuICAgICAgZm9yIChjb25zdCBxIG9mIHRyaSkgeyBwb3MucHVzaChxWzBdLCBxWzFdLCBxWzJdKTsgdXYucHVzaCgwLCAwKTsgfVxuICAgIH1cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zLCAzKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiBnO1xuICB9O1xuICBjb25zdCB0b3AgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IFtYKGkpLCBIaFtqXVtpXSwgWihqKV07XG4gIGNvbnN0IGUwOiBudW1iZXJbXVtdW10gPSBbXSwgZTE6IG51bWJlcltdW11bXSA9IFtdLCBlMjogbnVtYmVyW11bXVtdID0gW10sIGUzOiBudW1iZXJbXVtdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBueDsgaSsrKSB7IGUwLnB1c2goW3RvcChpLCAwKSwgdG9wKGkgKyAxLCAwKV0pOyBlMS5wdXNoKFt0b3AoaSwgbnopLCB0b3AoaSArIDEsIG56KV0pOyB9XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbno7IGorKykgeyBlMi5wdXNoKFt0b3AoMCwgaiksIHRvcCgwLCBqICsgMSldKTsgZTMucHVzaChbdG9wKG54LCBqKSwgdG9wKG54LCBqICsgMSldKTsgfVxuICBjb25zdCBlZGdlcyA9IFtzdHJpcChlMCwgWzAsIDAsIC0xXSksIHN0cmlwKGUxLCBbMCwgMCwgMV0pLCBzdHJpcChlMiwgWy0xLCAwLCAwXSksIHN0cmlwKGUzLCBbMSwgMCwgMF0pXTtcbiAgLy8gVGhlIHJpbSBpcyB0aGUgc2VhbSBiZXR3ZWVuIHRoZSB0d28gZmFjZXMsIHNvIGl0IHRha2VzIHRoZSBVTkRFUiBjb2xvdXI6IG9uIGEgZHJhcGVkIHRhcnAgdGhlXG4gIC8vIGVkZ2UgaXMgd2hhdCBhIHZpZXdlciBzdGFuZGluZyBiZXNpZGUgaXQgYWN0dWFsbHkgc2VlcywgYW5kIGl0IGlzIHRoZSBsaW5pbmcsIG5vdCB0aGUgdG9wLiBPbiBhXG4gIC8vIHJvb2YgZGVjayBpdCBpcyB0aGUgZmx1dGVkIGVhdmUsIHdoaWNoIGlzIHdoZXJlIHRoZSBydXN0IGlzLCBzbyBgaGV4UmltYCBvdmVycmlkZXMgaXQuXG4gIGNvbnN0IHJpbUhleCA9IHMuaGV4UmltID8/IHMuaGV4VW5kZXI7XG4gIHBhcnRzLnB1c2goLi4uKHJpbUhleCAhPT0gdW5kZWZpbmVkID8gZWRnZXMubWFwKChnKSA9PiBwYWludChnLCByaW1IZXgpKSA6IGVkZ2VzKSk7XG4gIHJldHVybiBtZXJnZUdlb3MocGFydHMpO1xufVxuXG4vKipcbiAqIFdFQVRIRVJFRCBQQUlOVCBvbiBhIHN0ZWVsIGNvbnRhaW5lcjogb25lIHNlYW1sZXNzIG11bHRpcGxpZXIgdGlsZSBjYXJyeWluZyBjbGVhbiBwYWludCwgcnVzdFxuICogYW5kIGNoYWxrZWQgYmxvb20gdG9nZXRoZXIuXG4gKlxuICogVGhlIHRocmVlIHRvbmVzIGNhbm5vdCByaWRlIGEgcGxhaW4gbXVsdGlwbHkgb3ZlciB0aGUgY2xlYW4gcGFpbnQsIGJlY2F1c2UgYSBjaGFsayBibG9vbSBpc1xuICogQlJJR0hURVIgdGhhbiB0aGUgcGFpbnQgaXQgc2l0cyBvbiBpbiB0d28gY2hhbm5lbHMgLS0gYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4uIFNvIHRoZSB2ZXJ0ZXhcbiAqIGNvbG91ciBpcyBSRS1CQVNFRCB0byBhbiBlbnZlbG9wZSBhYm92ZSBldmVyeSB0b25lIHRoZSB0aWxlIGhhcyB0byByZWFjaCAoYG8uYmFzZWAgaXMgdGhlIGNsZWFuXG4gKiBwYWludCdzIG93biBtdWx0aXBsaWVyIGFnYWluc3QgdGhhdCBlbnZlbG9wZSwgYW5kIGl0IGlzIHdoYXQgbW9zdCBvZiB0aGUgdGlsZSBpcyBmaWxsZWQgd2l0aCksXG4gKiBleGFjdGx5IGFzIHRoZSBsaWNoZW4tb24tc3RvbmUgcm91dGUgZG9lcy4gRXZlcnl0aGluZyBhZnRlciB0aGUgZmlsbCBpcyBkcmF3biBzb3VyY2Utb3ZlciBpblxuICogYWJzb2x1dGUgbXVsdGlwbGllciBzcGFjZSwgc28gYSBtYXJrIG1heSBsYW5kIGVpdGhlciBzaWRlIG9mIGNsZWFuLlxuICpcbiAqIE9yZGVyIG1hdHRlcnMgYW5kIGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gd2VhdGhlcmluZyBhbmQgY2Ftb3VmbGFnZTogYSBzb2Z0IGNsb3VkeSBkcmlmdFxuICogZmlyc3QsIHRoZW4gdGhlIHJ1c3QgYXMgY2x1c3RlcmVkIGdyYW51bGFyIHBhdGNoZXMgcmF0aGVyIHRoYW4gaGFyZCBibG90Y2hlcywgdGhlbiB0aGUgcnVucyBpdFxuICogbGVhdmVzIEJFTE9XIGl0c2VsZiwgdGhlbiB0aGUgY2hhbGsgYmxvb21zLCB0aGVuIGEgZmluZSBncmFpbiBvdmVyIHRoZSBsb3QuXG4gKi9cbmZ1bmN0aW9uIHBhaW50VGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXSwgcnVzdCA9IG8ucnVzdCA/PyBiYXNlLCBjaGFsayA9IG8uY2hhbGsgPz8gYmFzZTtcbiAgICBjb25zdCBydW4gPSBvLnJ1biA/PyBydXN0O1xuICAgIC8vIHdyYXAgZXZlcnkgbWFyayB0aHJlZSB3YXlzIHNvIG5vdGhpbmcgaXMgY3V0IGJ5IHRoZSB0aWxlIGVkZ2VcbiAgICBjb25zdCB3cmFwID0gKGRyYXc6IChkeDogbnVtYmVyLCBkeTogbnVtYmVyKSA9PiB2b2lkKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgZHJhdyhkeCwgZHkpO1xuICAgIH07XG4gICAgLy8gYGhhcmRgIGtlZXBzIHRoZSBtYXJrIGF0IGZ1bGwgYWxwaGEgdG8gMC43MiBvZiBpdHMgcmFkaXVzIGFuZCBkcm9wcyBpdCBvdmVyIHRoZSBsYXN0IHF1YXJ0ZXI6XG4gICAgLy8gYSBydXN0IGJsb29tIG92ZXIgaXRzIENPTVBMRU1FTlQgKHRlYWwpIGJsZW5kcyB0byBhIG5ldXRyYWwgZ3JleSBhbG9uZyBhIHNvZnQgZWRnZSwgYW5kIHRoZVxuICAgIC8vIHR1cm50YWJsZSBnYXRlIHJlYWRzIHRoYXQgcmluZyBhcyBiYWNrZHJvcCAtLSBhIHJlYWwgYmxvb20gaGFzIGEgZ3JhbnVsYXIsIG5vdCBhIGZlYXRoZXJlZCwgZWRnZS5cbiAgICBjb25zdCBibG9iID0gKGM6IG51bWJlcltdLCB4OiBudW1iZXIsIHk6IG51bWJlciwgcjogbnVtYmVyLCBhOiBudW1iZXIsIHJ5ID0gMSwgaGFyZCA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IoYyl9LCR7YX0pYCk7IGcuYWRkQ29sb3JTdG9wKGhhcmQgPyAwLjcyIDogMC41NSwgYHJnYmEoJHtyZ2IoYyl9LCR7aGFyZCA/IGEgOiBhICogMC40NX0pYCk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihjKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIsIHIgKiByeSwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICB9O1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcblxuICAgIC8vIDEuIGNsb3VkeSBkcmlmdDogYnJvYWQsIHZlcnkgc29mdCwgYmFyZWx5IG9mZiBjbGVhbiAtLSB3aGF0IHN0b3BzIHRoZSBmbGF0IGFyZWFzIHJlYWRpbmcgYXMgcGFpbnQgY2hpcHMgb24gcGxhc3RpY1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZHJpZnQgPz8gMTQpOyBpKyspIHtcbiAgICAgIGNvbnN0IGMgPSBybmQoKSA8IDAuNSA/IHJ1c3QgOiBjaGFsaztcbiAgICAgIGJsb2IoYywgcm5kKCkgKiBzLCBybmQoKSAqIHMsIHMgKiAoMC4xOCArIHJuZCgpICogMC4zMCkgKiAoby5kcmlmdFNjYWxlID8/IDEpLCAwLjA1ICsgcm5kKCkgKiAwLjA3LCAwLjYgKyBybmQoKSAqIDAuOCk7XG4gICAgfVxuXG4gICAgLy8gMi4gcnVzdDogY2x1c3RlcnMsIGVhY2ggYSBzb2Z0IHBhdGNoIHdpdGggZ3JhbnVsYXIgc3BlY2tzIG92ZXIgaXQuIEJhcmUgc3RlZWwgY29ycm9kZXMgaW5cbiAgICAvLyAgICBmaWVsZHMsIG5vdCBpbiBkb3RzOyBhIHNwZWNrIGZpZWxkIHdpdGggbm8gcGF0Y2ggdW5kZXIgaXQgcmVhZHMgYXMgY29uZmV0dGkuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5ydXN0Q2x1c3RlcnMgPz8gMTYpOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgY3IgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMTEpICogKG8uY2x1c3RlclNjYWxlID8/IDEpO1xuICAgICAgLy8gVGhlIGNsdXN0ZXIgcGF0Y2gncyBPUEFDSVRZLiBUaGUgdGlsZSBpcyBjb21wb3NpdGVkIHNvdXJjZS1vdmVyIG9uIHRoZSBiYXNlIGZpbGwsIHNvIGFcbiAgICAgIC8vIGNsdXN0ZXIgYXQgYWxwaGEgMC4zMC0wLjY1IGJsZW5kcyB0byBhbiBpbnRlcm1lZGlhdGUgdG9uZSBhbmQgb25seSB0aGUgc3BlY2tzIG92ZXIgaXQgZXZlclxuICAgICAgLy8gcmVhY2ggdGhlIGF1dGhvcmVkIHJ1c3QgLS0gd2hpY2ggaXMgcmlnaHQgZm9yIGEgcnVzdCBCTE9PTSBvbiBwYWludGVkIHN0ZWVsIGFuZCB3cm9uZyBmb3JcbiAgICAgIC8vIHRoZSBib2xkIGNoaXBwZWQgcGF0Y2hlcyBhIHBlZWxpbmcgbGlkIGNhcnJpZXMsIHdoZXJlIGJhcmUgbWV0YWwgaXMgc2ltcGx5IGV4cG9zZWQuXG4gICAgICAvLyBEZWZhdWx0cyBhcmUgdGhlIHByZXZpb3VzIGNvbnN0YW50cyBleGFjdGx5LCBzbyBubyBleGlzdGluZyBjYWxsZXIgY2hhbmdlcy5cbiAgICAgIGJsb2IocnVzdCwgY3gsIGN5LCBjciwgKG8ucnVzdEFscGhhID8/IDAuMzApICsgcm5kKCkgKiAoby5ydXN0QWxwaGFWYXIgPz8gMC4zNSksIDAuNyArIHJuZCgpICogMC42LCBvLmhhcmRFZGdlcyA9PT0gdHJ1ZSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwZWNrc1BlckNsdXN0ZXIgPz8gNDApOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkLCByID0gMC44ICsgcm5kKCkgKiAyLjQ7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihvLnNwZWNrUnVuID8gcnVuIDogcnVzdCl9LCR7KG8uc3BlY2tBbHBoYSA/PyAwLjI1KSArIHJuZCgpICogKG8uc3BlY2tBbHBoYVZhciA/PyAwLjUpfSlgOyAgIC8vIHNwZWNrUnVuOiBkYXJrZXIgc3BlY2tzIHRoYXQgdGV4dHVyZSBhbiBvcGFxdWUgYmxvb21cbiAgICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIC8vIHRoZSBydW4gaXQgbGVhdmVzIGJlbG93IGl0c2VsZjogcnVzdCBibGVlZHMgRE9XTiBhIHZlcnRpY2FsIHBhbmVsIGFuZCBub3doZXJlIGVsc2VcbiAgICAgIGlmIChybmQoKSA8IChvLnJ1bkNoYW5jZSA/PyAwLjU1KSkge1xuICAgICAgICBjb25zdCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDEwLCBsZW4gPSBzICogKDAuMTAgKyBybmQoKSAqIDAuMzUpO1xuICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGN5LCAwLCBjeSArIGxlbik7XG4gICAgICAgIGNvbnN0IHJhID0gKG8ucnVuQWxwaGEgPz8gMC4xNikgKyBybmQoKSAqIDAuMTg7XG4gICAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1bil9LCR7cmF9KWApOyBpZiAoby5oYXJkRWRnZXMpIGcuYWRkQ29sb3JTdG9wKDAuOTIsIGByZ2JhKCR7cmdiKHJ1bil9LCR7cmF9KWApOyBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydW4pfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgICAgd3JhcCgoZHgpID0+IGN0eC5maWxsUmVjdChjeCArIGR4ICsgKHJuZCgpIC0gMC41KSAqIGNyLCBjeSwgdywgbGVuKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gY2hhbGsgYmxvb206IGxhcmdlLCB2ZXJ5IHNvZnQsIGxvdy1jb250cmFzdC4gSXQgaXMgdGhlIHRvbmUgdGhlIHRpbGUgd2FzIHJlLWJhc2VkIGZvci5cbiAgICBjb25zdCBjc2NhbGUgPSBvLmNoYWxrU2NhbGUgPz8gMSwgY2FscGhhID0gby5jaGFsa0FscGhhID8/IDAuMzU7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5jaGFsa1BhdGNoZXMgPz8gOSk7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xMCkgKiBjc2NhbGU7XG4gICAgICBibG9iKGNoYWxrLCBjeCwgY3ksIGNyLCBjYWxwaGEgKyBybmQoKSAqIDAuMzAsIDAuNSArIHJuZCgpICogMC43KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjY7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjciAqIDEuMjU7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkICogMC43LCByID0gMSArIHJuZCgpICogMztcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKGNoYWxrKX0sJHswLjIgKyBybmQoKSAqIDAuNH0pYDtcbiAgICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA0LiB0aGUgdHdvIG1hcmtzIHRoYXQgb25seSBtYWtlIHNlbnNlIG9uY2UgdGhlIHRpbGUgaXMgSEVJR0hULWtleWVkOiBsb25nIHJ1bnMgYmxlZWRpbmcgZG93blxuICAgIC8vICAgIGZyb20gdGhlIHRvcCBlZGdlICh0aGUgdG9wIHJhaWwgaXMgd2hlcmUgd2F0ZXIgc2l0cyBhbmQgdGhlIHBhaW50IGdvZXMgZmlyc3QpIGFuZCBhIGRpcnRcbiAgICAvLyAgICBiYW5kIGFsb25nIHRoZSBib3R0b20uIEJvdGggYXJlIG5vLW9wcyBvbiBhIHdvcmxkLXNwYWNlIHRpbGUsIHdoZXJlIHRoZXJlIGlzIG5vIHVwLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8udG9wU3RyZWFrcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIChvLnN0cmVha1dpZHRoID8/IDAuMDE0KSwgbGVuID0gcyAqICgwLjI1ICsgcm5kKCkgKiAwLjU1KTtcbiAgICAgIGNvbnN0IGEgPSAoby5zdHJlYWtBbHBoYSA/PyAwLjEwKSArIHJuZCgpICogMC4yMjtcbiAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgbGVuKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1bil9LCR7YX0pYCk7IGcuYWRkQ29sb3JTdG9wKG8uaGFyZEVkZ2VzID8gMC45MiA6IDAuMjUsIGByZ2JhKCR7cmdiKHJ1c3QpfSwke28uaGFyZEVkZ2VzID8gYSA6IGEgKiAwLjh9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVzdCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCwgMCwgdywgbGVuKTtcbiAgICB9XG4gICAgLy8gNGIuIEFUTEFTIG1hcmtzIGZvciBhIHRpbGUgbWFwcGVkIE9OQ0UgdXAgYSBwcm9wIChjeWxVViB3aXRoIHRoZSB0aWxlIGhlaWdodCA9IHRoZSBwcm9wIGhlaWdodCk6XG4gICAgLy8gICAgIGBoYmFuZHNgIHBhaW50cyBhIHRvbmUgYWNyb3NzIGEgaG9yaXpvbnRhbCBiYW5kIG9mIHYgKGEgcnVzdGVkIGNoaW1lLCBhIHdvcm4gaG9vcCBjcm93biksXG4gICAgLy8gICAgIGBiYW5kU3RyZWFrc2AgaGFuZ3MgcnVucyBmcm9tIGEgZ2l2ZW4gdiAod2F0ZXIgc2l0cyBvbiBhIHJvbGxpbmcgaG9vcCBhbmQgYmxlZWRzIGRvd24gZnJvbSBpdCxcbiAgICAvLyAgICAgZXhhY3RseSBhcyBpdCBkb2VzIGZyb20gdGhlIHRvcCBlZGdlKSwgYW5kIGBzdGVuY2lsYCBhIHBhaW50ZWQgbWFyayBhdCAodSwgdikuIHYgaXMgdXAuXG4gICAgZm9yIChjb25zdCBoYiBvZiAoby5oYmFuZHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCB5MCA9IHMgKiAoMSAtIGhiLnYxKSwgeTEgPSBzICogKDEgLSBoYi52MCksIHRvbmUgPSBoYi50b25lID8/IHJ1c3Q7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IodG9uZSl9LCR7aGIuYWxwaGEgPz8gMC44fSlgOyBjdHguZmlsbFJlY3QoMCwgeTAsIHMsIHkxIC0geTApO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoaGIuc3BlY2tzID8/IDApOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHkwICsgcm5kKCkgKiAoeTEgLSB5MCksIHIgPSAwLjggKyBybmQoKSAqIDIuMjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHJuZCgpIDwgMC41ID8gcnVuIDogYmFzZSl9LCR7MC4yICsgcm5kKCkgKiAwLjV9KWA7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBicyBvZiAoby5iYW5kU3RyZWFrcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IHkwID0gcyAqICgxIC0gYnMudik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChicy5jb3VudCA/PyAxMik7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIChicy53aWR0aCA/PyAwLjAxMiksIGxlbiA9IHMgKiAoKGJzLmxlbiA/PyAwLjEyKSArIHJuZCgpICogKGJzLmxlblZhciA/PyAwLjI1KSk7XG4gICAgICAgIGNvbnN0IGEgPSAoYnMuYWxwaGEgPz8gMC4xNCkgKyBybmQoKSAqIDAuMjI7XG4gICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVuKX0sJHthfSlgKTsgZy5hZGRDb2xvclN0b3Aoby5oYXJkRWRnZXMgPyAwLjkyIDogMC4zLCBgcmdiYSgke3JnYihydXN0KX0sJHtvLmhhcmRFZGdlcyA/IGEgOiBhICogMC44fSlgKTtcbiAgICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVzdCl9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkwIC0gMiwgdywgbGVuKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG8uc3RlbmNpbCkge1xuICAgICAgY29uc3Qgc3QgPSBvLnN0ZW5jaWwsIHB4ID0gcyAqIChzdC5zaXplID8/IDAuMDYpO1xuICAgICAgY3R4LmZvbnQgPSBgYm9sZCAke3B4fXB4IHNhbnMtc2VyaWZgOyBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7IGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihzdC50b25lID8/IGNoYWxrKX0sJHtzdC5hbHBoYSA/PyAwLjg1fSlgO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFRleHQoc3QudGV4dCwgcyAqIChzdC51ID8/IDAuNSkgKyBkeCwgcyAqICgxIC0gKHN0LnYgPz8gMC41KSkpO1xuICAgIH1cbiAgICBpZiAoby5ncm91bmRCYW5kKSB7XG4gICAgICBjb25zdCBiID0gby5ncm91bmRCYW5kLCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIChvLmdyb3VuZEhlaWdodCA/PyAwLjIyKSkpO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVuKX0sJHtifSlgKTsgZy5hZGRDb2xvclN0b3AoMC40NSwgYHJnYmEoJHtyZ2IocnVuKX0sJHtiICogMC40fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1bil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIH1cblxuICAgIC8vIDUuIGZpbmUgZ3JhaW46IHRoZSB0b290aCBvZiBhIGJydXNoLXJvbGxlZCBpbmR1c3RyaWFsIHBhaW50LiBNdWx0aXBseSwgc28gaXQgb25seSBkYXJrZW5zLlxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZ3JhaW4gPz8gMTgwMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDAuNSArIHJuZCgpICogMS4zLCBhID0gMC4wMyArIHJuZCgpICogMC4wNztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgxNTAsMTQwLDEzMCwke2F9KWA7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKlxuICogQSBTV0VQVCBwb2x5bGluZSB0dWJlOiBPTkUgcmluZyBvZiBgc2VnYCB2ZXJ0aWNlcyBwZXIgcG9pbnQsIG1pdHJlZCBhdCBldmVyeSBiZW5kLCBpbmRleGVkIGFuZFxuICogc21vb3RoLXNoYWRlZC4gVGhpcyBpcyBub3Qgd2hhdCBgdHViZWAgZG9lcywgYW5kIHRoZSBkaWZmZXJlbmNlIGlzIGEgdmlzaWJsZSBkZWZlY3QgcmF0aGVyIHRoYW4gYVxuICogcmVmaW5lbWVudC4gYHR1YmVgIGNoYWlucyBhIHNlcGFyYXRlIGN5bGluZGVyIHBlciBzZWdtZW50IGFuZCBFWFRFTkRTIGVhY2ggb25lIGJ5IGByICogMS4yYCBzbyB0aGVcbiAqIGpvaW50cyBjbG9zZSAtLSB3aGljaCBpcyBmaW5lIHdoaWxlIHRoZSBzZWdtZW50cyBhcmUgbG9uZywgYW5kIGNhdGFzdHJvcGhpYyBvbiBhIHRpZ2h0IGN1cnZlOiBhXG4gKiAwLjEyIG0gY29ybmVyIHJhZGl1cyBzYW1wbGVkIGluIGZpdmUgc3RlcHMgaGFzIGEgMC4wMzggbSBjaG9yZCBhZ2FpbnN0IGEgMC4wMjUgbSBvdmVybGFwLCBzb1xuICogY29uc2VjdXRpdmUgY3lsaW5kZXJzIG92ZXJzaG9vdCBlYWNoIG90aGVyIGJ5IHR3byB0aGlyZHMgb2YgdGhlaXIgbGVuZ3RoIGFuZCB0aGUgYmVuZCByZW5kZXJzIGFzIGFcbiAqIGNydW1wbGVkIGFjY29yZGlvbiBvZiBwbGVhdHMuIFRoZSBjcm93ZCBiYXJyaWVyJ3Mgcm91bmRlZCB0b3AgY29ybmVycyBzaGlwcGVkIHRoYXQgd2F5LlxuICpcbiAqIFRoZSBmcmFtZSBpcyByb3RhdGlvbi1taW5pbWlzaW5nIChwYXJhbGxlbCB0cmFuc3BvcnQpLCBub3QgRnJlbmV0OiBhIEZyZW5ldCBmcmFtZSBmbGlwcyBpdHMgbm9ybWFsXG4gKiB0aHJvdWdoIGFuIGluZmxlY3Rpb24gYW5kIHR3aXN0cyB0aGUgdHViZSwgd2hpY2ggYSBVViBvciBhIHZlcnRleCBjb2xvdXIgdGhlbiBzaG93cyBhcyBhIHN0cmlwZVxuICogc3BpcmFsbGluZyBhbG9uZyBhIHJhaWwgdGhhdCBpcyBtZWFudCB0byBiZSBzdHJhaWdodC4gSW50ZXJpb3IgcG9pbnRzIHJpbmcgb24gdGhlIEJJU0VDVE9SIG9mIHRoZVxuICogdHdvIGFkamFjZW50IHRhbmdlbnRzLCB3aGljaCBpcyB0aGUgbWl0cmUgYSByZWFsIGJlbnQgdHViZSBoYXMuXG4gKi9cbmZ1bmN0aW9uIHN3ZWVwVHViZShwdHM6IG51bWJlcltdW10sIHI6IG51bWJlciwgc2VnID0gMTAsIGhleD86IG51bWJlciwgY2FwID0gdHJ1ZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgUCA9IHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IzKHBbMF0sIHBbMV0sIHBbMl0pKTtcbiAgLy8gZHJvcCByZXBlYXRlZCBwb2ludHM6IGEgemVyby1sZW5ndGggc2VnbWVudCBoYXMgbm8gdGFuZ2VudCwgYW5kIG9uZSBkdXBsaWNhdGUgaXMgZW5vdWdoIHRvXG4gIC8vIHB1dCBhIE5hTiB0aHJvdWdoIHRoZSB3aG9sZSB0cmFuc3BvcnQgY2hhaW5cbiAgZm9yIChsZXQgaSA9IFAubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkgaWYgKFBbaV0uZGlzdGFuY2VUbyhQW2kgLSAxXSkgPCAxZS03KSBQLnNwbGljZShpLCAxKTtcbiAgaWYgKFAubGVuZ3RoIDwgMikgcmV0dXJuIG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBjb25zdCBuID0gUC5sZW5ndGg7XG4gIGNvbnN0IHNlZ0RpcjogVEhSRUUuVmVjdG9yM1tdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbiAtIDE7IGkrKykgc2VnRGlyLnB1c2goUFtpICsgMV0uY2xvbmUoKS5zdWIoUFtpXSkubm9ybWFsaXplKCkpO1xuICAvLyBwZXItcG9pbnQgdGFuZ2VudDogdGhlIHNlZ21lbnQgZGlyZWN0aW9uIGF0IHRoZSBlbmRzLCB0aGUgYmlzZWN0b3IgYmV0d2VlbiB0d28gc2VnbWVudHMgaW5zaWRlXG4gIGNvbnN0IFQgPSBQLm1hcCgoXywgaSkgPT4gaSA9PT0gMCA/IHNlZ0RpclswXS5jbG9uZSgpXG4gICAgOiBpID09PSBuIC0gMSA/IHNlZ0RpcltuIC0gMl0uY2xvbmUoKVxuICAgIDogc2VnRGlyW2kgLSAxXS5jbG9uZSgpLmFkZChzZWdEaXJbaV0pLm5vcm1hbGl6ZSgpKTtcbiAgLy8gc2VlZCBhIG5vcm1hbCB0aGF0IGlzIG5vdCBwYXJhbGxlbCB0byB0aGUgZmlyc3QgdGFuZ2VudCwgdGhlbiB0cmFuc3BvcnQgaXQgcG9pbnQgdG8gcG9pbnRcbiAgbGV0IE4gPSBNYXRoLmFicyhUWzBdLnkpID4gMC45ID8gbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCkgOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKTtcbiAgTi5zdWIoVFswXS5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKE4uZG90KFRbMF0pKSkubm9ybWFsaXplKCk7XG4gIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGlmIChpID4gMCkge1xuICAgICAgLy8gcm90YXRlIHRoZSBjYXJyaWVkIG5vcm1hbCBieSB0aGUgc2FtZSByb3RhdGlvbiB0aGF0IHRha2VzIHRoZSBwcmV2aW91cyB0YW5nZW50IHRvIHRoaXMgb25lXG4gICAgICBjb25zdCBxID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoVFtpIC0gMV0sIFRbaV0pO1xuICAgICAgTi5hcHBseVF1YXRlcm5pb24ocSk7XG4gICAgICBOLnN1YihUW2ldLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoTi5kb3QoVFtpXSkpKS5ub3JtYWxpemUoKTtcbiAgICB9XG4gICAgY29uc3QgQiA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKFRbaV0sIE4pLm5vcm1hbGl6ZSgpO1xuICAgIC8vIGEgbWl0cmVkIHJpbmcgaXMgYW4gRUxMSVBTRSBpbiBpdHMgb3duIHBsYW5lOiB3aWRlbiBpdCBieSAxL2NvcyhoYWxmLWFuZ2xlKSBhbG9uZyB0aGUgYmVuZCBzb1xuICAgIC8vIHRoZSBzd2VwdCBzZWN0aW9uIHN0YXlzIGNpcmN1bGFyIHRocm91Z2ggdGhlIGNvcm5lciByYXRoZXIgdGhhbiBwaW5jaGluZyB0byBhIHdhaXN0XG4gICAgY29uc3QgayA9IGkgPiAwICYmIGkgPCBuIC0gMSA/IDEgLyBNYXRoLm1heCgwLjUsIHNlZ0RpcltpIC0gMV0uZG90KFRbaV0pKSA6IDE7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBjb25zdCBjID0gTWF0aC5jb3ModGgpLCBzID0gTWF0aC5zaW4odGgpO1xuICAgICAgcG9zLnB1c2goUFtpXS54ICsgKE4ueCAqIGMgKyBCLnggKiBzICogaykgKiByLCBQW2ldLnkgKyAoTi55ICogYyArIEIueSAqIHMgKiBrKSAqIHIsIFBbaV0ueiArIChOLnogKiBjICsgQi56ICogcyAqIGspICogcik7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbiAtIDE7IGkrKykgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgIC8vIChhLCBjMiwgYiksIE5PVCAoYSwgYiwgYzIpLiBUaGUgcmluZyBydW5zIE4gLT4gQiB3aXRoIEIgPSBUIHggTiwgc28gd2luZGluZyBhbG9uZyB0aGUgdHViZVxuICAgIC8vIGZpcnN0IGFuZCBhcm91bmQgaXQgc2Vjb25kIGdpdmVzIGEgZmFjZSBub3JtYWwgb2YgVCB4IEIgPSAtTjogZXZlcnkgd2FsbCB0cmlhbmdsZSBmYWNlcyBJTldBUkQuXG4gICAgLy8gQmFja2ZhY2UgY3VsbGluZyB0aGVuIGhpZGVzIHRoZSBuZWFyIHdhbGwgYW5kIHNob3dzIHRoZSBGQVIgb25lLCB3aGljaCBmb3IgYSBsaXQgZ3JleSB0dWJlIGxvb2tzXG4gICAgLy8gYWxtb3N0IHJpZ2h0IC0tIGFuZCB3cml0ZXMgaXRzIGRlcHRoIG9uIHRoZSBmYXIgc2lkZSwgc28gYW55dGhpbmcgcGFzc2luZyB0aHJvdWdoIHRoZSB0dWJlIGRyYXdzXG4gICAgLy8gaW4gZnJvbnQgb2YgaXQuIFRoZSBmb290IHN0dWJzIHN0b29kIHByb3VkbHkgdGhyb3VnaCB0aGUgYm90dG9tIHJhaWwgYmVjYXVzZSBvZiB0aGlzLCBhbmQgaXRcbiAgICAvLyByZWFkIGFzIGEgZ2VvbWV0cnkgZXJyb3IgaW4gdGhlIHN0dWIgcmF0aGVyIHRoYW4gYSB3aW5kaW5nIGVycm9yIGluIHRoZSBzd2VlcC5cbiAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYzIgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgIGlkeC5wdXNoKGEsIGMyLCBiLCBhLCBkLCBjMik7XG4gIH1cbiAgaWYgKGNhcCkge1xuICAgIC8vIEZsYXQgZW5kIGRpc2NzLCBvbiB0aGVpciBPV04gQ09QWSBvZiB0aGUgcmltIHZlcnRpY2VzLiBGYW5uaW5nIHRoZW0gb2ZmIHRoZSBzaWRlIHdhbGwncyByaW5nXG4gICAgLy8gc2hhcmVzIHRob3NlIHZlcnRpY2VzLCBhbmQgYGNvbXB1dGVWZXJ0ZXhOb3JtYWxzYCB0aGVuIGF2ZXJhZ2VzIHRoZSBkaXNjJ3MgYXhpYWwgbm9ybWFsIGludG9cbiAgICAvLyB0aGUgd2FsbCdzIHJhZGlhbCBvbmUgLS0gd2hpY2ggZG9lcyBub3Qgc2hhZGUgYSBzbGlnaHRseSB3cm9uZyByaW0sIGl0IHRpbHRzIHRoZSBub3JtYWwgYXQgQk9USFxuICAgIC8vIGVuZHMgb2YgYSB0d28tcG9pbnQgdHViZSBhbmQgc28gc2hhZGVzIHRoZSBXSE9MRSB0dWJlIHdyb25nLiBUaGUgZm9vdCBzdHVicyByZW5kZXJlZCBhcyBnbGFzc1xuICAgIC8vIHRlc3QgdHViZXMgd2l0aCBhIGJyaWdodCBiYW5kIHVuZGVyIHRoZSByYWlsLCBhbmQgdGhlIGJhbmQgcmVhZCBhcyBhIHNlcGFyYXRlIG9iamVjdCBzaXR0aW5nIG9uXG4gICAgLy8gaXQuIFNhbWUgZmF1bHQsIHNhbWUgZml4LCBhcyB0aGUgc2hhcnAtY29ybmVyIHNwbGl0IGluIGBsYXRoZWAuXG4gICAgZm9yIChjb25zdCBbcmluZywgYXQsIGZsaXBdIG9mIFtbMCwgUFswXSwgdHJ1ZV0sIFtuIC0gMSwgUFtuIC0gMV0sIGZhbHNlXV0gYXMgW251bWJlciwgVEhSRUUuVmVjdG9yMywgYm9vbGVhbl1bXSkge1xuICAgICAgY29uc3QgYmFzZSA9IHBvcy5sZW5ndGggLyAzO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykgeyBjb25zdCBrID0gKHJpbmcgKiBzZWcgKyBqKSAqIDM7IHBvcy5wdXNoKHBvc1trXSwgcG9zW2sgKyAxXSwgcG9zW2sgKyAyXSk7IH1cbiAgICAgIGNvbnN0IGNpID0gcG9zLmxlbmd0aCAvIDM7IHBvcy5wdXNoKGF0LngsIGF0LnksIGF0LnopO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgICBjb25zdCBhID0gYmFzZSArIGosIGIgPSBiYXNlICsgKGogKyAxKSAlIHNlZztcbiAgICAgICAgaWYgKGZsaXApIGlkeC5wdXNoKGNpLCBiLCBhKTsgZWxzZSBpZHgucHVzaChjaSwgYSwgYik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KChwb3MubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLnNldEluZGV4KGlkeCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gZyA6IHRpbnRHZW8oZywgaGV4KTtcbn1cblxuLyoqXG4gKiBGUk9OVC1BVExBUyBVVnM6IGV2ZXJ5IHZlcnRleCB3aG9zZSBub3JtYWwgZmFjZXMgK1ogYW5kIHRoYXQgbGllcyBpbnNpZGUgdGhlIGF0bGFzJ3Mgd29ybGRcbiAqIHJlY3RhbmdsZSB0YWtlcyBhIFBMQU5BUiAoeCwgeSkgVVYgaW50byBhIGJha2VkIGZyb250LWVsZXZhdGlvbiBpbWFnZSwgYW5kIGV2ZXJ5IG90aGVyIHZlcnRleCBpc1xuICogcGlubmVkIHRvIG9uZSBjbGVhbiB0ZXhlbCBvZiBpdC4gQSB3YWxsLW1vdW50ZWQgYm94IHNlZW4gZnJvbSB0aGUgZnJvbnQgSVMgaXRzIGVsZXZhdGlvbiwgc28gdGhlXG4gKiBwbGF0ZSdzIG93biBwcmludGVkIGxhYmVscywgc2NyZXcgaGVhZHMsIGdhc2tldCBsaW5lIGFuZCBydXN0IGxhbmQgZXhhY3RseSB3aGVyZSB0aGUgZ2VvbWV0cnlcbiAqIHB1dHMgdGhlbSwgb24gb25lIG1hdGVyaWFsLiBgYmFzZWAgb3ZlcnJpZGVzIHRoZSBmcm9udCB2ZXJ0aWNlcycgY29sb3VyLCBiZWNhdXNlIHRoZSBhdGxhcyBpcyBhXG4gKiByYXRpbyBvdmVyIG9uZSByZWZlcmVuY2UgdG9uZSBhbmQgdGhlIHBlci1wYXJ0IHRpbnRzIG9ubHkgYmVsb25nIG9uIHRoZSBmYWNlcyB0aGUgYXRsYXMgZG9lcyBub3RcbiAqIHJlYWNoLiBgeU1pbmAga2VlcHMgcGFydHMgaGFuZ2luZyBiZWxvdyB0aGUgYXRsYXMgKGEgY29uZHVpdCBzdHViKSBvdXQgb2YgaXQuXG4gKi9cbmZ1bmN0aW9uIGZyb250QXRsYXNVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBhOiBhbnkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgY29uc3QgY29sID0gZ2VvLmdldEF0dHJpYnV0ZSgnY29sb3InKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUgfCBudWxsO1xuICBjb25zdCBiYXNlID0gYS5iYXNlICE9PSB1bmRlZmluZWQgPyBuZXcgVEhSRUUuQ29sb3IoYS5iYXNlKSA6IG51bGw7XG4gIGNvbnN0IG1pbk56ID0gYS5taW5OeiA/PyAwLjc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHAuZ2V0WChpKSwgeSA9IHAuZ2V0WShpKTtcbiAgICBjb25zdCBmcm9udCA9IG5ybS5nZXRaKGkpID4gbWluTnogJiYgeCA+PSBhLngwICYmIHggPD0gYS54MSAmJiB5ID49IChhLnlNaW4gPz8gYS55MSkgJiYgeSA8PSBhLnkwO1xuICAgIGlmIChmcm9udCkge1xuICAgICAgdXZbaSAqIDJdID0gKHggLSBhLngwKSAvIChhLngxIC0gYS54MCk7XG4gICAgICB1dltpICogMiArIDFdID0gKHkgLSBhLnkxKSAvIChhLnkwIC0gYS55MSk7XG4gICAgICBpZiAoYmFzZSAmJiBjb2wpIGNvbC5zZXRYWVooaSwgYmFzZS5yLCBiYXNlLmcsIGJhc2UuYik7XG4gICAgfSBlbHNlIHsgdXZbaSAqIDJdID0gYS5waW5bMF07IHV2W2kgKiAyICsgMV0gPSBhLnBpblsxXTsgfVxuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sKSBjb2wubmVlZHNVcGRhdGUgPSB0cnVlO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZmVuY2UgaGVscGVycyAqL1xuXG4vKiogUGFuZWwgVVZzOiB1IGFsb25nIHdvcmxkIFggb3ZlciBgc2NhbGVgIG1ldHJlcywgdiB3b3JsZCBIRUlHSFQgb3ZlciB0aGUgc2FtZSwgcmVnYXJkbGVzcyBvZiB0aGVcbiAqICBmYWNlIG5vcm1hbC4gT24gYSB0aGluIHNsYWIgdGhpcyBtZWFucyB0aGUgZnJvbnQgYW5kIGJhY2sgZmFjZXMgc2hhcmUgdGhlIHNhbWUgdGlsZSBwbGFjZW1lbnRcbiAqICBhbmQgdGhlIGVkZ2VzIHRha2UgYSBzbGl2ZXIgb2YgaXQ7IGEgZ3JpbWUgd2FzaCB0aGF0IGtleXMgb24gdiB0aGVuIGxhbmRzIGF0IHRoZSBzYW1lIGhlaWdodCBvblxuICogIGV2ZXJ5IGZhY2UsIHdoaWNoIGlzIHdoYXQgcmFpbiBhbmQgYWxnYWUgZG8uICovXG5mdW5jdGlvbiBwYW5lbFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIsIHJvdCA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgLy8gYHJvdGAgc3dhcHMgdGhlIGF4ZXMgc28gYSB0aWxlIG9mIFZFUlRJQ0FMIHN0cmlwcyByZWFkcyBob3Jpem9udGFsIC0tIHRoZSB3b3ZlbiBiYW5kcyBvZiBhXG4gIC8vIGJhbWJvbyBwYW5lbCBhZ2FpbnN0IGl0cyB2ZXJ0aWNhbCBtdWxsaW9ucywgb25lIHRpbGUsIG9uZSBtYXRlcmlhbC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB1ID0gcm90ID8gcC5nZXRZKGkpIDogcC5nZXRYKGkpLCB2ID0gcm90ID8gcC5nZXRYKGkpIDogcC5nZXRZKGkpO1xuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEEgc3F1YXJlIHB5cmFtaWQgU1BJS0U6IGJhc2UgdyB4IHcgYXQgYGF0YCwgYXBleCBoIGFib3ZlLiBBIHBpY2tldCdzIHNwZWFyIHBvaW50LCBhIHBpZXIgY2FwLiAqL1xuZnVuY3Rpb24gc3Bpa2UoYXQ6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkodyAvIE1hdGguU1FSVDIsIGgsIDQsIDEsIGZhbHNlKTtcbiAgZy5yb3RhdGVZKE1hdGguUEkgLyA0KTtcbiAgZy50cmFuc2xhdGUoYXRbMF0sIGF0WzFdICsgaCAvIDIsIGF0WzJdKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBHUklNRSB0aWxlOiBhIG11bHRpcGxpZXIgb2Ygd2hpdGUgd2l0aCAoYSkgYSBkYXJrIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLFxuICogKGIpIHZlcnRpY2FsIHJhaW4gc3RyZWFrcyBmcm9tIHRoZSB0b3AsIChjKSBzb2Z0IGRhcmsgYmxvdGNoZXMsIChjMikgYnJvYWQgQ0xPVUQgbW90dGxpbmcsXG4gKiAoZCkgc3dlcHQgdHlyZSBTQ1VGRlMgb3ZlciBhXG4gKiBoZWlnaHQgYmFuZCwgKGUpIHZlcnRpY2FsIGZvcm0gU0VBTVMsIChmKSBQSU5IT0xFUyAtLSB0aGUgYWlyIGJ1YmJsZXMgb2YgYSBwcmVjYXN0IGZhY2UsIChnKVxuICogb3B0aW9uYWwgZ3JlZW4gbW9zcy9hbGdhZSBibG9icyBjb25jZW50cmF0ZWQgaW4gdGhlIGJvdHRvbSBiYW5kLCBhbmQgKGgpIGZpbmUgZ3JhaW4uIChkKSwgKGUpXG4gKiBhbmQgKGYpIGFyZSBvZmYgdW5sZXNzIGFza2VkIGZvciwgc28gbm90aGluZyBhbHJlYWR5IGVtaXR0ZWQgY2hhbmdlcy4gRXZlcnkgY29sb3VyIGlzIGEgZnJhY3Rpb24gb2YgdGhlXG4gKiBtYXRlcmlhbCdzIG1lYXN1cmVkIGFsYmVkbywgYW5kIHRoZSBkYXJrZXN0IGNvcmUgaXMgY2xhbXBlZCBzbyBub3RoaW5nIG9uIGEgd2hpdGUgb3IgY3JlYW1cbiAqIHN1cmZhY2UgZHJvcHMgdG93YXJkIHRoZSBob2xlIGdhdGUncyBsdW1hIDU4LlxuICovXG5mdW5jdGlvbiBncmltZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3Qgd2FzaCA9IG8ud2FzaCA/PyBbMC42MiwgMC42MiwgMC41OF0sIHdhc2hBID0gby53YXNoQWxwaGEgPz8gMC43LCBjb3YgPSBvLmNvdmVyYWdlID8/IDAuMztcbiAgICAvLyBgYmFzZWAgaXMgdGhlIHRvbmUgdGhlIFVOLWdyaW1lZCBwYXJ0IG9mIHRoZSB0aWxlIGNhcnJpZXMsIGRlZmF1bHRpbmcgdG8gd2hpdGUgLS0gaS5lLiB0b1xuICAgIC8vIFwibGVhdmUgdGhlIHZlcnRleCBjb2xvdXIgYWxvbmVcIiwgd2hpY2ggaXMgZXZlcnkgZXhpc3RpbmcgY2FsbGVyLiBJdCBleGlzdHMgZm9yIEVOVkVMT1BFXG4gICAgLy8gUkUtQkFTSU5HOiBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbiwgc28gYSBwYXJ0IHRoYXQgbXVzdCByZWFkIGNsZWFuIG9yYW5nZSBpbiBvbmUgcGxhY2UgYW5kXG4gICAgLy8gZ3JleSByb2FkIGdyaW1lIGluIGFub3RoZXIgY2Fubm90IGRvIGl0IGZyb20gYSBzaW5nbGUgdmVydGV4IGNvbG91ciwgYmVjYXVzZSB0aGUgZ3JpbWUgaXNcbiAgICAvLyBISUdIRVIgaW4gYmx1ZSB0aGFuIHRoZSBvcmFuZ2UgaXMuIFRoZSB2ZXJ0ZXggY29sb3VyIGJlY29tZXMgdGhlIHBlci1jaGFubmVsIG1heGltdW0gb2YgYm90aFxuICAgIC8vIGFuZCB0aGlzIGZpbGwgcGFpbnRzIHRoZSBjbGVhbiB0b25lIGJhY2sgb3V0IG9mIGl0LlxuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgLy8gcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAyNik7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMiwgbGVuID0gcyAqICgwLjE1ICsgcm5kKCkgKiAwLjYpLCBhID0gMC4wNSArIHJuZCgpICogMC4xMjtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgY3R4LmZpbGxSZWN0KHgsIDAsIHcsIGxlbik7IGN0eC5maWxsUmVjdCh4IC0gcywgMCwgdywgbGVuKTtcbiAgICB9XG4gICAgLy8gZ3JvdW5kIHdhc2guIGB3YXNoRmxhdGAgbWFrZXMgaXQgVU5JRk9STSBpbnN0ZWFkIG9mIGEgYm90dG9tLXVwIGdyYWRpZW50LCB3aGljaCBpcyB3aGF0IGFcbiAgICAvLyBob3Jpem9udGFsIHNsYWIgbmVlZHM6IGEgZ3JhZGllbnQga2V5ZWQgdG8gdGhlIHRpbGUncyB2IG1hcHMgc3RyYWlnaHQgYWNyb3NzIGEgZmxhdCBmYWNlIGFuZFxuICAgIC8vIHNwbGl0cyBpdCBpbnRvIGEgcGFsZSBoYWxmIGFuZCBhIGRhcmsgaGFsZiB3aXRoIGEgaGFyZCBlZGdlIGJldHdlZW4gdGhlbS4gRGVmYXVsdGVkIG9mZiwgc29cbiAgICAvLyBldmVyeSBwcm9wIHRoYXQgZG9lcyBub3QgYXNrIGZvciBpdCBpcyB1bmNoYW5nZWQuXG4gICAgaWYgKG8ud2FzaEZsYXQpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdikpO1xuICAgICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEF9KWApOyBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBICogMC40NX0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9XG4gICAgLy8gYmxvdGNoZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmJsb3RjaGVzID8/IDQwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAxLjYpICogcywgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA2LCBhID0gMC4wOCArIHJuZCgpICogMC4zO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gUlVCUzogbmVhci1ibGFjayB0eXJlIHNtZWFycyBsb3cgb24gdGhlIHRpbGUuIERpc3RpbmN0IGZyb20gYGJsb3RjaGVzYCwgd2hpY2ggZGFya2VuIHRvd2FyZFxuICAgIC8vIHRoZSBncmltZSB0b25lOiBhIHR5cmUgcnViIGlzIGEgZGlmZmVyZW50IGNvbG91ciBhbmQgYSBkaWZmZXJlbnQgc2hhcGUgLS0gbG9uZywgbG93LCBhbmQgbXVjaFxuICAgIC8vIGRhcmtlciB0aGFuIGFueXRoaW5nIHdlYXRoZXIgZG9lcy4gRGVmYXVsdCAwLCBzbyBubyBleGlzdGluZyBjYWxsZXIgY2hhbmdlcy5cbiAgICBpZiAoby5ydWJzKSB7XG4gICAgICBjb25zdCBydWIgPSBvLnJ1YiA/PyBbMC4zMCwgMC4yOCwgMC4zMF07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8ucnViczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzICogKDAuNjAgKyBybmQoKSAqIDAuMzgpO1xuICAgICAgICBjb25zdCB3ID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjIyKSwgaCA9IHMgKiAoMC4wMDYgKyBybmQoKSAqIDAuMDMwKSwgYSA9IDAuMjAgKyBybmQoKSAqIDAuNDU7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHggLSB3IC8gMiwgMCwgeCArIHcgLyAyLCAwKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1Yil9LDApYCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7cmdiKHJ1Yil9LCR7YX0pYCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydWIpfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggLSB3IC8gMiArIGR4LCB5IC0gaCAvIDIsIHcsIGgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBTQ1VGRlM6IHNvZnQgcGF0Y2hlcyB3aGVyZSB0aGUgd2FzaCBpcyBlcmFzZWQgYmFjayB0b3dhcmQgd2hpdGUuIFRoZSB0aWxlIGlzIGNvbXBvc2l0ZWRcbiAgICAvLyBtdWx0aXBseS1vbi13aGl0ZSwgc28gcGFpbnRpbmcgd2hpdGUgc291cmNlLW92ZXIgaXMgcGFpbnRpbmcgXCJub3QgZGFya2VuZWRcIiAtLSB3aGljaCBpcyB0aGVcbiAgICAvLyBvbmx5IHdheSBhIG11bHRpcGx5IHRpbGUgY2FuIHB1dCBQQUxFIHdlYXIgb24gYSBkYXJrIGJhc2Ugd2l0aG91dCByZS1iYXNpbmcgdGhlIGVudmVsb3BlXG4gICAgLy8gdHdpY2UuIERlZmF1bHRlZCB0byBub25lLlxuICAgIGlmIChvLnNjdWZmcykge1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8uc2N1ZmZzOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNSArIHJuZCgpICogKG8uc2N1ZmZTY2FsZSA/PyAwLjE0KSk7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjU1LDI1NSwyNTUsJHtvLnNjdWZmQWxwaGEgPz8gMC41NX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICB9XG5cbiAgICAvLyBDTE9VRFM6IGJyb2FkLCB2ZXJ5IHNvZnQgcGF0Y2hlcyBvdmVyIHRoZSBXSE9MRSB0aWxlLiBBIGNhc3QgZmFjZSBpcyBtb3R0bGVkIGF0IHRoZSBzY2FsZSBvZlxuICAgIC8vIHRlbnMgb2YgY2VudGltZXRyZXMgLS0gcG91ciBsaW5lcywgZGFtcCwgdGhlIG1vdWxkJ3Mgb3duIGhpc3RvcnkgLS0gYW5kIHRoYXQgbG93IGZyZXF1ZW5jeSBpc1xuICAgIC8vIG1vc3Qgb2Ygd2hhdCBzZXBhcmF0ZXMgYSByZW5kZXJlZCBzdGFuZGFyZCBkZXZpYXRpb24gb2YgNiBmcm9tIHRoZSBwbGF0ZSdzIDEyLiBTbWFsbCBtYXJrc1xuICAgIC8vIGNhbm5vdCBzdXBwbHkgaXQ6IGF0IHByb3AgZGlzdGFuY2UgYSB0aG91c2FuZCBvZiB0aGVtIGF2ZXJhZ2UgYmFjayBvdXQgdG8gb25lIGZsYXQgdG9uZS5cbiAgICAvLyBLZWVwIHRoZW0gU01BTEwgcmVsYXRpdmUgdG8gdGhlIHRpbGUsIHRob3VnaC4gQSB0aWxlIHRoYXQgcmVwZWF0cyB0d28gb3IgdGhyZWUgdGltZXMgYWNyb3NzIGFcbiAgICAvLyBwcm9wIHJlcGVhdHMgaXRzIGNsb3VkcyB0b28sIGFuZCBhIGNsb3VkIHRoZSBzaXplIG9mIGEgdGhpcmQgb2YgdGhlIHRpbGUgdGhlbiByZWFkcyBhc1xuICAgIC8vIGNhbW91ZmxhZ2Ugd2l0aCBhIHZpc2libGUgc2VhbSAtLSB0aGUgc2FtZSBmYWlsdXJlIGFzIGhhcmQgYmxvdGNoZXMsIG9uZSBvY3RhdmUgbG93ZXIuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgdiA9IG8uY2xvdWQgPz8gWzAuODYsIDAuODYsIDAuODRdO1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoby5jbG91ZFIgPz8gMC4xNikgKiAoMC40ICsgcm5kKCkgKiAxLjQpLCBhID0gKG8uY2xvdWRBbHBoYSA/PyAwLjEyKSAqICgwLjQgKyBybmQoKSk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gU0NVRkYgYXJjczogdGhlIHR5cmUgYW5kIGJ1bXBlciBtYXJrcyBhIHJvYWRzaWRlIGJhcnJpZXIgY29sbGVjdHMgb24gdGhlIGJhbmQgdGhlIHRyYWZmaWNcbiAgICAvLyBhY3R1YWxseSByZWFjaGVzLiBCcm9hZCwgc29mdCwgbmVhci1ob3Jpem9udGFsIHNtZWFycyB3aXRoIGEgc3dlcHQgc2hhcGUgLS0gYSBibG90Y2ggcmVhZHMgYXNcbiAgICAvLyBhIHN0YWluLCBhbmQgd2hhdCB0aGUgcGxhdGUgY2FycmllcyBpcyBzb21ldGhpbmcgdGhhdCB3ZW50IHBhc3QuIGBzY3VmZkJhbmRgIGlzIGEgcGFpciBvZlxuICAgIC8vIEhFSUdIVCBmcmFjdGlvbnMgKDAgYXQgdGhlIGdyb3VuZCksIHNvIGl0IGlzIHN0YXRlZCBpbiB0aGUgc2FtZSB0ZXJtcyBhcyBgY292ZXJhZ2VgLlxuICAgIGlmIChvLnNjdWZmcykge1xuICAgICAgY29uc3QgdiA9IG8uc2N1ZmYgPz8gWzAuNjIsIDAuNjIsIDAuNjRdLCBiYW5kID0gby5zY3VmZkJhbmQgPz8gWzAuMzAsIDAuNzBdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnNjdWZmczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHMgKiAoMSAtIChiYW5kWzBdICsgcm5kKCkgKiAoYmFuZFsxXSAtIGJhbmRbMF0pKSk7XG4gICAgICAgIGNvbnN0IHcgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTEpLCBoID0gdyAqICgwLjA1ICsgcm5kKCkgKiAwLjEwKTtcbiAgICAgICAgY29uc3QgYSA9IChvLnNjdWZmQWxwaGEgPz8gMC4zNCkgKiAoMC41ICsgcm5kKCkpO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgICBjdHguc2F2ZSgpOyBjdHgudHJhbnNsYXRlKGN4ICsgZHgsIGN5KTsgY3R4LnJvdGF0ZSgocm5kKCkgLSAwLjUpICogMC40NSk7IGN0eC5zY2FsZSgxLCBoIC8gdyk7XG4gICAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoMCwgMCwgMCwgMCwgMCwgdyk7XG4gICAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMC40NSwgYHJnYmEoJHtyZ2Iodil9LCR7YSAqIDAuNTV9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoMCwgMCwgdywgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRk9STSBTRUFNUzogdGhlIHZlcnRpY2FsIGpvaW50IGxpbmVzIGEgcHJlY2FzdCBtb3VsZCBsZWF2ZXMsIG9uZSBwZXIgdGlsZS4gQSBkYXJrIGhhaXJsaW5lIHdpdGhcbiAgICAvLyBhIHBhbGVyIGxpcCBiZXNpZGUgaXQsIHdoaWNoIGlzIHdoYXQgYSBwcm91ZCBzZWFtIGxvb2tzIGxpa2UgLS0gYSBzaW5nbGUgZGFyayBsaW5lIHJlYWRzIGFzIGFcbiAgICAvLyBzY3JhdGNoLiBgc2VhbUF0YCBwbGFjZXMgaXQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgdGlsZSBzbyBpdCBkb2VzIG5vdCBsYW5kIG9uIHRoZSB3cmFwLlxuICAgIGlmIChvLnNlYW1zKSB7XG4gICAgICBjb25zdCB2ID0gby5zZWFtID8/IFswLjcyLCAwLjcxLCAwLjY4XTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5zZWFtczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKHMgKiAoKG8uc2VhbUF0ID8/IDAuNDIpICsgaSAvIG8uc2VhbXMpKSAlIHM7XG4gICAgICAgIGNvbnN0IHdweCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQocyAqIDAuMDA0KSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sJHtvLnNlYW1BbHBoYSA/PyAwLjV9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCB3cHgsIHMpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7KG8uc2VhbUFscGhhID8/IDAuNSkgKiAwLjN9KWA7IGN0eC5maWxsUmVjdCh4ICsgd3B4LCAwLCB3cHgsIHMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBQSU5IT0xFUzogdGhlIGFpciBidWJibGVzIGEgcHJlY2FzdCBmYWNlIGlzIGNvdmVyZWQgaW4uIFRoZXkgYXJlIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZ1xuICAgIC8vIG1hcmsgb2YgYmFyZSBjb25jcmV0ZSBhdCBwcm9wIGRpc3RhbmNlIC0tIHdpdGhvdXQgdGhlbSB0aGUgZmFjZSBpcyBhIHBhaW50ZWQgc2xhYiwgd2hpY2ggaXNcbiAgICAvLyBtZWFzdXJhYmxlIGFzIGEgcmVuZGVyZWQgc3RhbmRhcmQgZGV2aWF0aW9uIGEgdGhpcmQgb2YgdGhlIHBsYXRlJ3MuIFNtYWxsLCBkYXJrLCBhbmQgTUFOWS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnBpdHMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgdiA9IG8ucGl0ID8/IFswLjQyLCAwLjQwLCAwLjM2XTtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAoby5waXRSID8/IDEuNikgKiAoMC41ICsgcm5kKCkgKiAxLjMpO1xuICAgICAgY29uc3QgYSA9IDAuMjUgKyBybmQoKSAqIDAuNTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIgKiAyKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNCwgYHJnYmEoJHtyZ2Iodil9LCR7YSAqIDAuNDV9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciAqIDIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBtb3NzIC8gYWxnYWUgaW4gdGhlIGJvdHRvbSBiYW5kOiBjbHVzdGVyZWQgc3BlY2tzLCBicmlnaHRlci10aGFuLXdhc2ggZ3JlZW5cbiAgICBpZiAoby5tb3NzKSB7XG4gICAgICBjb25zdCBtID0gby5tb3NzLCBiYW5kID0gby5tb3NzQmFuZCA/PyAwLjIyO1xuICAgICAgLy8gYSBmYWludCBncmVlbiB3YXNoIG92ZXIgdGhlIHdob2xlIGJhbmQgZmlyc3QsIHNvIHRoZSBjYXJwZXRzIHNpdCBpbiBkYW1wIGdyb3VuZCByYXRoZXIgdGhhblxuICAgICAgLy8gYXMgaXNvbGF0ZWQgZG90cyBvbiBjbGVhbiBwYWludFxuICAgICAgY29uc3QgbWcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gYmFuZCAqIDEuMykpO1xuICAgICAgbWcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKG0pfSwke28ubW9zc1dhc2ggPz8gMC4zNX0pYCk7IG1nLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihtKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBtZzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5tb3NzQ2x1c3RlcnMgPz8gMTQpOyBrKyspIHtcbiAgICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAxLjYpICogcyAqIGJhbmQsIGNyID0gcyAqICgwLjAxNSArIHJuZCgpICogMC4wNCk7XG4gICAgICAgIC8vIHRoZSBjYXJwZXQ6IGEgc29mdCBibG9iLCB0aGVuIHNwZWNrcyBvdmVyIGl0IGZvciB0aGUgdHVmdGVkIGVkZ2VcbiAgICAgICAgY29uc3QgY2cgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIGNyKTtcbiAgICAgICAgY2cuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKG0pfSwwLjcpYCk7IGNnLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKCR7cmdiKG0pfSwwLjM1KWApOyBjZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IobSl9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjZztcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3ggKyBkeCwgY3ksIGNyLCBjciAqIDAuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyO1xuICAgICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkICogMC42LCByID0gMSArIHJuZCgpICogMztcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IobSl9LCR7MC4zNSArIHJuZCgpICogMC41fSlgO1xuICAgICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBncmFpbi4gYGdyYWluYC9gZ3JhaW5BbHBoYWAgZGVmYXVsdCB0byB0aGUgb3JpZ2luYWwgMTUwMCBhdCAwLjEyLCBzbyBubyBhbHJlYWR5LWVtaXR0ZWQgcHJvcFxuICAgIC8vIGNoYW5nZXM7IGEgdGlsZSBzdHJldGNoZWQgb3ZlciBhIFdIT0xFIHByb3AgKHV2U2NhbGUgPiBpdHMgaGVpZ2h0KSBzYW1wbGVzIG9ubHkgdGhlIGZyYWN0aW9uXG4gICAgLy8gb2YgdGhlIHRpbGUgd2lkdGggaGVpZ2h0VVYgZm9sZHMgb250byBpdCwgYW5kIG5lZWRzIHRoZSBjb3VudCByYWlzZWQgdG8ga2VlcCB0aGUgc2FtZSBkZW5zaXR5LlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZ3JhaW4gPz8gMTUwMCk7IGkrKykge1xuICAgICAgY29uc3QgbG8gPSBvLmdyYWluTG8gPz8gMjAwOyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB2ID0gbG8gKyBNYXRoLnJvdW5kKHJuZCgpICogKDI1NSAtIGxvKSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sJHtvLmdyYWluQWxwaGEgPz8gMC4xMn0pYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEuNSwgMS41KTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogQ0hBSU4tTElOSyB0aWxlOiBhIGRpYW1vbmQgd2lyZSBsYXR0aWNlIGRyYXduIG9wYXF1ZSBvdmVyIGEgVFJBTlNQQVJFTlQgZ3JvdW5kLCBib3VuZCBhcyBtYXBcbiAqICBvbiBhbiBhbHBoYS10ZXN0ZWQgbWF0ZXJpYWwgc28gdGhlIGNlbGxzIGFyZSBvcGVuLiBPbmUgdGlsZSBpcyBvbmUgZGlhbW9uZCBjZWxsOyB0aGUgcGFuZSdzXG4gKiAgVVZzIHJlcGVhdCBpdCBhdCB0aGUgcmVhbCBtZXNoIHBpdGNoLiBgd2lyZWAgaXMgdGhlIHdpcmUgd2lkdGggYXMgYSBmcmFjdGlvbiBvZiB0aGUgY2VsbC4gKi9cbmZ1bmN0aW9uIGNoYWlubGlua1RpbGUoc2l6ZTogbnVtYmVyLCB3aXJlOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5saW5lV2lkdGggPSBNYXRoLm1heCgxLjUsIHdpcmUgKiBzKTtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgY29uc3QgdiA9IDE1MCArIE1hdGgucm91bmQocm5kKCkgKiAzMCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYigke3Z9LCR7diArIDJ9LCR7diArIDR9KWA7XG4gICAgLy8gdHdvIGRpYWdvbmFscyB0aHJvdWdoIHRoZSB0aWxlLCBvZmZzZXQgc28gdGhlIHdyYXAgbWFrZXMgYSBjb250aW51b3VzIGRpYW1vbmQgbGF0dGljZVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDApOyBjdHgubGluZVRvKHMsIHMpO1xuICAgIGN0eC5tb3ZlVG8ocywgMCk7IGN0eC5saW5lVG8oMCwgcyk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIHRoZSBrbnVja2xlIHdoZXJlIHdpcmVzIHR3aXN0IHJvdW5kIGVhY2ggb3RoZXIsIGF0IHRoZSB0d28gY3Jvc3NpbmdzIG9uIHRoZSB0aWxlIGVkZ2VzXG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2IC0gMjB9LCR7diAtIDE4fSwke3YgLSAxNn0pYDtcbiAgICBmb3IgKGNvbnN0IFt4LCB5XSBvZiBbWzAsIDBdLCBbcywgMF0sIFswLCBzXSwgW3MsIHNdLCBbcyAvIDIsIHMgLyAyXV0pIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCBjdHgubGluZVdpZHRoICogMC45LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIEJBTUJPTyBTVFJJUCB0aWxlOiB2ZXJ0aWNhbCBzcGxpdC1iYW1ib28gc3RyaXBzIHdpdGggcGFsZSBjdWxtIGZhY2VzLCBkYXJrIGpvaW50cyBiZXR3ZWVuIHRoZW1cbiAqICBhbmQgYSBub2RlIGxpbmUgb3IgdHdvIC0tIGEgbXVsdGlwbGllciBvbiB0aGUgbWVhc3VyZWQgc2lsdmVyLWdyZXkuICovXG5mdW5jdGlvbiBiYW1ib29UaWxlKHNpemU6IG51bWJlciwgc3RyaXBzOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3Qgc3cgPSBzIC8gc3RyaXBzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgc3RyaXBzOyBiKyspIHtcbiAgICAgIGNvbnN0IHRvbmUgPSAwLjgwICsgcm5kKCkgKiAwLjIsIHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3YgLSAyfSwke3YgLSA2fSlgOyBjdHguZmlsbFJlY3QoYiAqIHN3LCAwLCBzdywgcyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTAsNDIsMzQsMC42KSc7IGN0eC5maWxsUmVjdChiICogc3csIDAsIE1hdGgubWF4KDEsIHMgKiAwLjAwNiksIHMpO1xuICAgICAgLy8gYSBoaWdobGlnaHQgZG93biB0aGUgY3VsbSdzIHJvdW5kXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xMCknOyBjdHguZmlsbFJlY3QoYiAqIHN3ICsgc3cgKiAwLjM1LCAwLCBzdyAqIDAuMjUsIHMpO1xuICAgICAgLy8gbm9kZSByaW5nc1xuICAgICAgY29uc3QgbiA9IDEgKyBNYXRoLmZsb29yKHJuZCgpICogMik7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykgeyBjb25zdCB5ID0gcm5kKCkgKiBzOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNzAsNjAsNDgsMC40NSknOyBjdHguZmlsbFJlY3QoYiAqIHN3LCB5LCBzdywgTWF0aC5tYXgoMSwgcyAqIDAuMDA4KSk7IH1cbiAgICAgIC8vIGZpbmUgZ3JhaW4gbGluZXNcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNjsgaysrKSB7IGNvbnN0IHggPSBiICogc3cgKyBybmQoKSAqIHN3OyBjdHguZmlsbFN0eWxlID0gYHJnYmEoODAsNzAsNTgsJHswLjA1ICsgcm5kKCkgKiAwLjF9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTsgfVxuICAgIH1cbiAgICAvLyBtb3VsZCBzcGVja2xlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDA7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzAsMjgsMjQsMC4xOCknOyBjdHguZmlsbFJlY3QoeCwgeSwgMSArIHJuZCgpICogMiwgMSArIHJuZCgpICogMik7IH1cbiAgfSk7XG59XG5cbi8qKiBQT1NURVIgdGlsZSBmb3IgYSBob2FyZGluZzogdG9ybiBwYXN0ZS11cCBzaGVldHMgYW5kIGEgc3ByYXkgc3RlbmNpbCBvdmVyIGEgVFJBTlNQQVJFTlQgZ3JvdW5kLFxuICogIGJvdW5kIG9uIGFuIGFscGhhLXRlc3RlZCBwYW5lIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBzaGVldC4gYGxpbmVzYCBhcmUgdGhlIHN0ZW5jaWxcbiAqICBzdHJpbmdzOyBhIHByaW50ZWQgZ3JhcGhpYyBpcyBleGFjdGx5IHRoZSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgY2FzZS4gKi9cbmZ1bmN0aW9uIHBvc3RlclRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIGxpbmVzOiBzdHJpbmdbXSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIHBhc3RlLXVwczogb3ZlcmxhcHBpbmcgb2ZmLXdoaXRlIHJlY3RhbmdsZXMgd2l0aCB0b3JuIGVkZ2VzIGFuZCBmYWludCBwcmludCBsaW5lc1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjMwKSwgeSA9IHMgKiAoMC4xNSArIHJuZCgpICogMC40NSksIHcgPSBzICogKDAuMTQgKyBybmQoKSAqIDAuMTYpLCBoID0gcyAqICgwLjE4ICsgcm5kKCkgKiAwLjIyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgkezIyNSArIE1hdGgucm91bmQocm5kKCkgKiAyMCl9LCR7MjIyICsgTWF0aC5yb3VuZChybmQoKSAqIDE4KX0sJHsyMTAgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwwLjk2KWA7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICBjb25zdCBuID0gOTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgY3R4LmxpbmVUbyh4ICsgdyAqIGkgLyBuLCB5ICsgKHJuZCgpIC0gMC41KSAqIGggKiAwLjA4KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgY3R4LmxpbmVUbyh4ICsgdyArIChybmQoKSAtIDAuNSkgKiB3ICogMC4wOCwgeSArIGggKiBpIC8gbik7XG4gICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSBjdHgubGluZVRvKHggKyB3ICogaSAvIG4sIHkgKyBoICsgKHJuZCgpIC0gMC41KSAqIGggKiAwLjEyKTtcbiAgICAgIGZvciAobGV0IGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIGN0eC5saW5lVG8oeCArIChybmQoKSAtIDAuNSkgKiB3ICogMC4wOCwgeSArIGggKiBpIC8gbik7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsNDAsNDUsMC41NSknO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIGN0eC5maWxsUmVjdCh4ICsgdyAqIDAuMSwgeSArIGggKiAoMC4yICsgaSAqIDAuMSksIHcgKiAoMC4zICsgcm5kKCkgKiAwLjUpLCBNYXRoLm1heCgxLCBzICogMC4wMDYpKTtcbiAgICB9XG4gICAgLy8gc3ByYXkgc3RlbmNpbCwgc2xpZ2h0bHkgc29mdCBhbmQgdW5ldmVuXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDIwLDIyLDAuODgpJztcbiAgICBjdHguZm9udCA9IGBib2xkICR7TWF0aC5yb3VuZChzICogMC4wNyl9cHggc2Fucy1zZXJpZmA7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBzICogMC40MCwgeSA9IHMgKiAoMC40NCArIGkgKiAwLjEzKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMzsgaysrKSB7IGN0eC5nbG9iYWxBbHBoYSA9IDAuNjsgY3R4LmZpbGxUZXh0KGxpbmVzW2ldLCB4ICsgKHJuZCgpIC0gMC41KSAqIDMsIHkgKyAocm5kKCkgLSAwLjUpICogMyk7IH1cbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFNUUklQRSB0aWxlOiBhbHRlcm5hdGluZyBjb2xvdXIgYmFuZHMgYWxvbmcgdSAoYW4gYXduaW5nKSwgd2l0aCBhIHNvZnQgZ3JpbWUgbXVsdGlwbHkgc28gdGhlIGNsb3RoXG4gKiAgcmVhZHMgd29ybiByYXRoZXIgdGhhbiBwcmludGVkLiBgYWAvYGJgIGFyZSB0aGUgdHdvIGJhbmQgY29sb3VycyBhcyBbcixnLGJdIDAtMS4gQm91bmQgYXMgbWFwIG9uIGFcbiAqICBXSElURSBtYXRlcmlhbCBzbyB0aGUgYmFuZHMgY2FycnkgdGhlIHdob2xlIGFsYmVkby4gKi9cbi8vIGBvYCBpcyBvcHRpb25hbCBhbmQgZXZlcnkgZmllbGQgZGVmYXVsdHMgdG8gdGhlIHByZXZpb3VzIGhhcmQtY29kZWQgYmVoYXZpb3VyLCBzbyBubyBwcm9wIHRoYXRcbi8vIGRvZXMgbm90IHBhc3MgaXQgY2hhbmdlcy4gYHNtdWRnZXNgIGFuZCBgc3BlY2tzYCBleGlzdCBiZWNhdXNlIGJydXNoZWQgU1RFRUwgd2FudHMgdGhlIGJhbmRpbmdcbi8vIHdpdGhvdXQgdGhlIGRpcnQ6IHRoZSA0MCByYWRpYWwgc211ZGdlcyBhbmQgMTIwMCBsaWdodCBzcGVja3MgcmVhZCBhcyBtb3VsZCBvbiBhIGNsZWFuIHNhdGluXG4vLyBzdXJmYWNlLCB3aGljaCBpcyB0aGUgb3Bwb3NpdGUgb2Ygd2hhdCBhIHN0cmlwZSB0aWxlIGlzIGZvciB0aGVyZS5cbmZ1bmN0aW9uIHN0cmlwZVRpbGUoc2l6ZTogbnVtYmVyLCBiYW5kczogbnVtYmVyLCBhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgbzogYW55ID0ge30pOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgcmdiKCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9KWA7XG4gICAgY29uc3QgdyA9IHMgLyBiYW5kcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhbmRzOyBpKyspIHsgY3R4LmZpbGxTdHlsZSA9IHJnYihpICUgMiA/IGIgOiBhKTsgY3R4LmZpbGxSZWN0KE1hdGguZmxvb3IoaSAqIHcpLCAwLCBNYXRoLmNlaWwodykgKyAxLCBzKTsgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc211ZGdlcyA/PyA0MCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDQgKyBybmQoKSAqIHMgKiAwLjA4LCBhbCA9IDAuMDYgKyBybmQoKSAqIDAuMTg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxNTAsMTQwLDEyNSwke2FsfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDE1MCwxNDAsMTI1LDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BlY2tzID8/IDEyMDApOyBpKyspIHsgY29uc3QgdiA9IDIwMCArIE1hdGgucm91bmQocm5kKCkgKiA1NSk7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjEwKWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMS41LCAxLjUpOyB9XG4gICAgLy8gQlJPQUQgcmVmbGVjdGlvbiBiYW5kaW5nOiBgby5icm9hZGAgd2hvbGUgYnJpZ2h0L2RhcmsgY3ljbGVzIGFjcm9zcyB0aGUgdGlsZSwgZHJhd24gYXMgb25lXG4gICAgLy8gd3JhcHBpbmcgY29zaW5lIGdyYWRpZW50LiBCcnVzaGVkIHN0ZWVsIHdpdGggbm8gZW52aXJvbm1lbnQgbWFwIHRvIHJlZmxlY3QgaGFzIG5vdGhpbmcgdG9cbiAgICAvLyBtYWtlIGl0cyBmbGFua3MgYnJpZ2h0IGFuZCBpdHMgbWlkZGxlIGRhcmssIGFuZCB0aGUgZmluZSBncmFpbiBjYW5ub3Qgc3VwcGx5IGl0IC0tIGEgMyBtbVxuICAgIC8vIHBpdGNoIGF2ZXJhZ2VzIHRvIG9uZSBmbGF0IHRvbmUgYXQgcHJvcCBkaXN0YW5jZSwgd2hpY2ggaXMgd2hhdCBhIHJlbmRlcmVkIHN0YWlubGVzcyBiaW5cbiAgICAvLyBsb29rcyBsaWtlIHdoZW4gaXQgcmVhZHMgYXMgcGFpbnRlZCBtZXRhbC4gV2hvbGUgY3ljbGVzLCBzbyB0aGUgdGlsZSBzdGlsbCBtZWV0cyBpdHNlbGYuXG4gICAgLy8gRGVmYXVsdGVkIE9GRiwgc28gZXZlcnkgZXhpc3RpbmcgY2FsbGVyIGlzIGJ5dGUtaWRlbnRpY2FsLlxuICAgIGlmIChvLmJyb2FkKSB7XG4gICAgICBjb25zdCBsbyA9IG8uYnJvYWRMbyA/PyAwLjgwLCBoaSA9IG8uYnJvYWRIaSA/PyAxLjA7XG4gICAgICBjb25zdCBnMyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBzLCAwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDY0OyBpKyspIHtcbiAgICAgICAgY29uc3QgdCA9IGkgLyA2NDtcbiAgICAgICAgY29uc3QgdiA9IGxvICsgKGhpIC0gbG8pICogKDAuNSArIDAuNSAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogby5icm9hZCAqIHQpKTtcbiAgICAgICAgY29uc3QgYyA9IE1hdGgucm91bmQoMjU1ICogdik7XG4gICAgICAgIGczLmFkZENvbG9yU3RvcCh0LCBgcmdiKCR7Y30sJHtjfSwke2N9KWApO1xuICAgICAgfVxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGczOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFNlYW1sZXNzIGFyb3VuZC1ieS11cCBVVnMgZm9yIGEgTGF0aGVHZW9tZXRyeTogdSBmcm9tIHRoZSBTRUdNRU5UIGluZGV4ICh0aGUgbGF0aGUgb3JkZXJzIGl0c1xuICogIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IsIGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgc28gdGhlIGR1cGxpY2F0ZWQgc2VhbSBjb2x1bW4gcmVhZHNcbiAqICB1ID0gcmVwZWF0cyBleGFjdGx5IGFuZCBSZXBlYXRXcmFwcGluZyBjbG9zZXMgaXQuIGBzY2FsZWAgaXMgdGhlIHRpbGUgc2l6ZSBpbiBtZXRyZXM7IHRoZVxuICogIGFyb3VuZC1yZXBlYXQgY291bnQgaXMgcm91bmRlZCBzbyB0aGUgdGlsZSBtZWV0cyBpdHNlbGYsIGZyb20gdGhlIHByb2ZpbGUncyB3aWRlc3QgcmFkaXVzLiAqL1xuZnVuY3Rpb24gbGF0aGVVVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcG9pbnRDb3VudDogbnVtYmVyLCBzZWc6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdlNjYWxlID0gc2NhbGUsIHYwID0gMCk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGxldCByTWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHJNYXggPSBNYXRoLm1heChyTWF4LCBNYXRoLmh5cG90KHAuZ2V0WChpKSwgcC5nZXRaKGkpKSk7XG4gIGNvbnN0IHJlcCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoMiAqIE1hdGguUEkgKiByTWF4IC8gc2NhbGUpKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBzID0gTWF0aC5mbG9vcihpIC8gcG9pbnRDb3VudCk7XG4gICAgdXZbaSAqIDJdID0gKHMgLyBzZWcpICogcmVwOyB1dltpICogMiArIDFdID0gKHAuZ2V0WShpKSAtIHYwKSAvIHZTY2FsZTtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG59XG5cbi8qKiBFWFBPU0VELUFHR1JFR0FURSB0aWxlOiBhIGRhcmsgbW9ydGFyIGdyb3VuZCBwYWNrZWQgd2l0aCByb3VuZGVkIHBlYmJsZXMgaW4gYSBtZWFzdXJlZCBwYWxldHRlLFxuICogIGVhY2ggZHJhd24gYXQgbmluZSB3cmFwcGVkIG9mZnNldHMgc28gdGhlIHRpbGUgaXMgc2VhbWxlc3MuIGBvLnBhbGV0dGVgIGlzIGEgbGlzdCBvZiBbcixnLGJdXG4gKiAgcmF0aW9zIGFnYWluc3QgdGhlIG1hdGVyaWFsIGNvbG91ciwgYG8uZ3JvdW5kYCB0aGUgbW9ydGFyIHJhdGlvLCBgby5jb3VudGAgdGhlIHBlYmJsZSBjb3VudC4gKi9cbmZ1bmN0aW9uIHBlYmJsZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX0pYDtcbiAgICBjdHguZmlsbFN0eWxlID0gcmdiKG8uZ3JvdW5kID8/IFswLjQ1LCAwLjQyLCAwLjM4XSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBwYWw6IG51bWJlcltdW10gPSBvLnBhbGV0dGUgPz8gW1swLjg1LCAwLjc4LCAwLjY2XSwgWzAuNzIsIDAuNjIsIDAuNTBdLCBbMC42MCwgMC41OCwgMC41NV0sIFswLjkwLCAwLjg2LCAwLjgwXV07XG4gICAgY29uc3QgbiA9IG8uY291bnQgPz8gOTAwLCByTWluID0gcyAqIChvLnJNaW4gPz8gMC4wMTIpLCByTWF4ID0gcyAqIChvLnJNYXggPz8gMC4wMjgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByeCA9IHJNaW4gKyBybmQoKSAqIChyTWF4IC0gck1pbiksIHJ5ID0gcnggKiAoMC42ICsgcm5kKCkgKiAwLjUpLCBhID0gcm5kKCkgKiBNYXRoLlBJO1xuICAgICAgY29uc3QgYyA9IHBhbFtNYXRoLmZsb29yKHJuZCgpICogcGFsLmxlbmd0aCldLCBrID0gMC44NSArIHJuZCgpICogMC4zO1xuICAgICAgLy8gQ09OVEFDVCBTSEFET1cgZmlyc3QsIG9mZnNldCBkb3duLXJpZ2h0IGFuZCBhIHRvdWNoIGxhcmdlciwgc28gd2hhdCBzdXJ2aXZlcyBhcm91bmQgZWFjaFxuICAgICAgLy8gc3RvbmUgaXMgdGhlIGRhcmsgbW9ydGFyIGNyZXNjZW50IHRoYXQgbWFrZXMgYSBwYWNrZWQgYWdncmVnYXRlIHJlYWQgYXMgc3RvbmVzIHJhdGhlciB0aGFuXG4gICAgICAvLyBhcyBvdmVybGFwcGluZyBmbGF0IGRpc2NzLiBgc2hhZGVgIGlzIGEgcmF0aW8gYWdhaW5zdCB0aGUgbW9ydGFyIGdyb3VuZDsgMCBrZWVwcyB0aGUgb2xkXG4gICAgICAvLyBsb29rIGZvciBldmVyeSB0aWxlIGFscmVhZHkgc2hpcHBlZC5cbiAgICAgIGlmIChvLnNoYWRlKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSByZ2IoKG8uZ3JvdW5kID8/IFswLjQ1LCAwLjQyLCAwLjM4XSkubWFwKCh2KSA9PiB2ICogby5zaGFkZSkpO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCArIHJ4ICogMC4xNiwgeSArIGR5ICsgcnkgKiAwLjIyLCByeCAqIDEuMSwgcnkgKiAxLjEsIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgICAgY3R4LmZpbGxTdHlsZSA9IHJnYihjLm1hcCgodikgPT4gTWF0aC5taW4oMSwgdiAqIGspKSk7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByeCwgcnksIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgLy8gYSBoaWdobGlnaHQgY3Jlc2NlbnQgb24gdGhlIGxpdCBzaWRlIHNvIGVhY2ggc3RvbmUgcmVhZHMgYXMgYSBidW1wXG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjU1LDI1NSwyNTUsJHtvLmdsb3NzID8/IDAuMTh9KWA7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCAtIHJ4ICogMC4yLCB5ICsgZHkgLSByeSAqIDAuMjUsIHJ4ICogMC41LCByeSAqIDAuNCwgYSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFRZUkUgVFJFQUQgdGlsZSBmb3IgYSBsYXRoZSBjYXJyeWluZyBgY3lsVVZgOiB1IHJ1bnMgQVJPVU5EIHRoZSB0eXJlIGFuZCB2IFVQIGl0LCBzbyB0cmVhZCBzbG90cyBhcmVcbiAqICBiYXJzIGF0IGNvbnN0YW50IHUgYW5kIHRoZSBjaXJjdW1mZXJlbnRpYWwgZ3Jvb3ZlcyBhcmUgbGluZXMgYXQgY29uc3RhbnQgdi4gRHJhd24gYXMgcmF0aW9zIG9uIHdoaXRlXG4gKiAgYW5kIG11bHRpcGxpZWQgaW50byB0aGUgKGxpZnRlZCkgcnViYmVyIGNvbG91cjsgYG8uZ3Jvb3ZlYCBpcyB0aGUgZGFya2VzdCByYXRpbywga2VwdCBhYm92ZSB0aGVcbiAqICBsdW1hLTU4IGhvbGUgYmFuZCBieSB0aGUgY2FsbGVyLiBgby5zbG90c2AgYmFycyBwZXIgdGlsZSwgYG8ucmluZ3NgIGNpcmN1bWZlcmVudGlhbCBsaW5lcy4gKi9cbmZ1bmN0aW9uIHRyZWFkVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGdyb292ZSA9IG8uZ3Jvb3ZlID8/IDAuODAsIHNsb3RzID0gby5zbG90cyA/PyAyLCByaW5ncyA9IG8ucmluZ3MgPz8gMjtcbiAgICAvLyBgYmFzZWAgaXMgdGhlIHRvbmUgdGhlIFVOLWdyaW1lZCBwYXJ0IG9mIHRoZSB0aWxlIGNhcnJpZXMsIGRlZmF1bHRpbmcgdG8gd2hpdGUgLS0gaS5lLiB0b1xuICAgIC8vIFwibGVhdmUgdGhlIHZlcnRleCBjb2xvdXIgYWxvbmVcIiwgd2hpY2ggaXMgZXZlcnkgZXhpc3RpbmcgY2FsbGVyLiBJdCBleGlzdHMgZm9yIEVOVkVMT1BFXG4gICAgLy8gUkUtQkFTSU5HOiBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbiwgc28gYSBwYXJ0IHRoYXQgbXVzdCByZWFkIGNsZWFuIG9yYW5nZSBpbiBvbmUgcGxhY2UgYW5kXG4gICAgLy8gZ3JleSByb2FkIGdyaW1lIGluIGFub3RoZXIgY2Fubm90IGRvIGl0IGZyb20gYSBzaW5nbGUgdmVydGV4IGNvbG91ciwgYmVjYXVzZSB0aGUgZ3JpbWUgaXNcbiAgICAvLyBISUdIRVIgaW4gYmx1ZSB0aGFuIHRoZSBvcmFuZ2UgaXMuIFRoZSB2ZXJ0ZXggY29sb3VyIGJlY29tZXMgdGhlIHBlci1jaGFubmVsIG1heGltdW0gb2YgYm90aFxuICAgIC8vIGFuZCB0aGlzIGZpbGwgcGFpbnRzIHRoZSBjbGVhbiB0b25lIGJhY2sgb3V0IG9mIGl0LlxuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgY29uc3QgZ3YgPSBNYXRoLnJvdW5kKDI1NSAqIGdyb292ZSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICBjb25zdCBwaXRjaCA9IHMgLyBzbG90cywgdyA9IHBpdGNoICogKG8uc2xvdFdpZHRoID8/IDAuMTYpO1xuICAgIC8vIHRyZWFkIHNsb3RzIHNwYW4gdGhlIGJhbmQgYmV0d2VlbiB0aGUgdHdvIGVkZ2Ugc2hvdWxkZXJzICh2IDAuMTIuLjAuODggb2YgdGhlIHRpbGUpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbG90czsgaSsrKSB7IGNvbnN0IHggPSBpICogcGl0Y2ggKyBwaXRjaCAqIDAuNCArIChybmQoKSAtIDAuNSkgKiBwaXRjaCAqIDAuMTsgY3R4LmZpbGxSZWN0KHgsIHMgKiAwLjEyLCB3LCBzICogMC43Nik7IGN0eC5maWxsUmVjdCh4IC0gcywgcyAqIDAuMTIsIHcsIHMgKiAwLjc2KTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmluZ3M7IGkrKykgeyBjb25zdCB5ID0gcyAqICgwLjIgKyAwLjYgKiAoaSArIDAuNSkgLyByaW5ncyk7IGN0eC5maWxsUmVjdCgwLCB5IC0gMS41LCBzLCAzKTsgfVxuICAgIC8vIHNpZGV3YWxsIHNoZWVuOiBhIHNvZnQgbGlnaHRlciB3YXNoIHNvIHRoZSBydWJiZXIgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTIpLCB2ID0gMjM1ICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpOyBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC41KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0gfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIE9MRCBUWVJFIHRpbGU6IFRXTyB0eXJlIGhlaWdodHMgdGFsbCBieSBgby5waXRjaGAgbWV0cmVzIGFyb3VuZCAoY3lsVVYpLiBUaGUgdXBwZXIgaGFsZiAodiAwLjUtMSlcbiAqICBpcyBhIHRyZWFkZWQgdHlyZSwgdGhlIGxvd2VyIGhhbGYgKHYgMC0wLjUpIGEgd29ybiBTTElDSyB3aXRoIGNpcmN1bWZlcmVudGlhbCBncm9vdmVzIGFuZCBzaG9ydFxuICogIHNob3VsZGVyIHNpcGVzIG9ubHksIHNvIGEgc3RhY2sgbWl4ZXMgYmFsZCBhbmQgdHJlYWRlZCB0eXJlcyBvZmYgb25lIGNhbnZhcyBieSB2MC4gRHJhd24gYXMgUkFUSU9TXG4gKiAgYWdhaW5zdCB0aGUgdmVydGV4LWNvbG91cmVkIHJ1YmJlciBhdCBgYmFzZWAgKDIwMC8yNTUgLT4gdmVydGV4IHRvbmVzIGFyZSBhdXRob3JlZCAxLjI3NXggdGhlXG4gKiAgaW50ZW5kZWQgYWxiZWRvIHNvIGR1c3QgYW5kIHNjdWZmcyBjYW4gZ28gQlJJR0hURVIgdGhhbiB0aGUgcnViYmVyIHVuZGVyIGEgbXVsdGlwbHkgY2FudmFzKS5cbiAqICBSb3dzIGFyZSBoZWlnaHRzOiBsb3dlciBzaWRld2FsbCwgdHJlYWQgYmFuZCAodiBgby5iYW5kWzBdYC4uYG8uYmFuZFsxXWAgb2YgdGhlIHN0cmlwKSwgdXBwZXJcbiAqICBzaWRld2FsbCB3aXRoIGJlYWQgcmluZ3MgYW5kIG1vdWxkIGxpbmVzLiBXZWFyOiBhIHdhcm0gZHVzdCB3YXNoIG9uIHRoZSBsb3dlciBzaG91bGRlciwgZ3JleSBzY3VmZnNcbiAqICBvbiBib3RoIHNob3VsZGVycywgZHVzdCBjYXVnaHQgaW4gdGhlIGN1dHMsIGdyYWluIG92ZXIgZXZlcnl0aGluZy4gKi9cbmZ1bmN0aW9uIHR5cmVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyAyMDAsIGJhbmQgPSBvLmJhbmQgPz8gWzAuMjQsIDAuNzZdLCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjQ1O1xuICAgIGNvbnN0IGd2ID0gTWF0aC5yb3VuZChiYXNlICogZ3Jvb3ZlKSwgcnYgPSBNYXRoLnJvdW5kKGJhc2UgKiAwLjcpLCBtdiA9IE1hdGgucm91bmQoYmFzZSAqIDAuOSk7XG4gICAgY29uc3QgZHVzdCA9IG8uZHVzdCA/PyBbMjMyLCAyMTQsIDE5MF07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtiYXNlfSwke2Jhc2V9LCR7YmFzZX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcyAqIHMgLyA2OyBpKyspIHsgY29uc3QgdiA9IGJhc2UgKyBNYXRoLnJvdW5kKChybmQoKSAtIDAuNSkgKiAyMik7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMiwgMik7IH1cbiAgICAvLyBvbmUgdHlyZSBzdHJpcCBiZXR3ZWVuIGNhbnZhcyByb3dzIHlhICh0b3ApIGFuZCB5YiAoYm90dG9tKTsgY2FudmFzIHkgZ3Jvd3MgRE9XTiwgdiBncm93cyBVUFxuICAgIGNvbnN0IHN0cmlwID0gKHlhOiBudW1iZXIsIHliOiBudW1iZXIsIHRyZWFkZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IGggPSB5YiAtIHlhLCBiMCA9IHlhICsgaCAqICgxIC0gYmFuZFsxXSksIGIxID0geWEgKyBoICogKDEgLSBiYW5kWzBdKTtcbiAgICAgIGNvbnN0IG5nID0gby5ncm9vdmVzID8/IDMsIGd3ID0gaCAqIDAuMDI0O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmc7IGkrKykgeyBjb25zdCB5ID0gYjAgKyAoYjEgLSBiMCkgKiAoaSArIDEpIC8gKG5nICsgMSk7IGN0eC5maWxsUmVjdCgwLCB5IC0gZ3cgLyAyLCBzLCBndyk7IH1cbiAgICAgIGNvbnN0IG5zID0gby5zaXBlcyA/PyAyLCB3ID0gcyAqIChvLnNpcGVXaWR0aCA/PyAwLjA1KTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDw9IG5nOyBrKyspIHtcbiAgICAgICAgY29uc3QgeTAgPSBrID09PSAwID8gYjAgOiBiMCArIChiMSAtIGIwKSAqIGsgLyAobmcgKyAxKSArIGd3IC8gMiwgeTEgPSBrID09PSBuZyA/IGIxIDogYjAgKyAoYjEgLSBiMCkgKiAoayArIDEpIC8gKG5nICsgMSkgLSBndyAvIDI7XG4gICAgICAgIC8vIGEgc2xpY2sga2VlcHMgb25seSBTSE9SVCBzaXBlcyBhdCB0aGUgdHdvIHNob3VsZGVyIHJvd3MsIGN1dCBpbiBmcm9tIHRoZSBiYW5kIGVkZ2VcbiAgICAgICAgY29uc3Qgb3V0ZXIgPSBrID09PSAwIHx8IGsgPT09IG5nO1xuICAgICAgICBpZiAoIXRyZWFkZWQgJiYgIW91dGVyKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgeXMwID0gdHJlYWRlZCA/IHkwIDogKGsgPT09IDAgPyB5MCA6IHkxIC0gKHkxIC0geTApICogMC40NSksIHlzMSA9IHRyZWFkZWQgPyB5MSA6IChrID09PSAwID8geTAgKyAoeTEgLSB5MCkgKiAwLjQ1IDogeTEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5zOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0gKChpICsgMC41KSAvIG5zICsgKGsgJSAyKSAqIDAuNSAvIG5zKSAqIHMgKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMDYsIHNsID0gKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA4O1xuICAgICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcsIHlzMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdyArIHNsLCB5czEpOyBjdHgubGluZVRvKHggKyBkeCArIHNsLCB5czEpOyBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gc2hvdWxkZXIgc3RlcCBhdCB0aGUgdG9wIG9mIHRoZSBiYW5kLCBiZWFkIHJpbmdzIGFuZCBtb3VsZCBsaW5lcyBvbiB0aGUgc2lkZXdhbGxzXG4gICAgICBjb25zdCBzaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBiMCAtIGggKiAwLjAzLCAwLCBiMCArIGggKiAwLjAyKTsgc2guYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9LDApYCk7IHNoLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2d2fSwke2d2fSwke2d2fSwwLjQ1KWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHNoOyBjdHguZmlsbFJlY3QoMCwgYjAgLSBoICogMC4wMywgcywgaCAqIDAuMDUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtydn0sJHtydn0sJHtydn0pYDsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuMDQ1LCBzLCBoICogMC4wMTIpOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC45NCwgcywgaCAqIDAuMDEyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7bXZ9LCR7bXZ9LCR7bXZ9KWA7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjExLCBzLCAyKTsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuODgsIHMsIDIpO1xuICAgICAgLy8gd2Vhcjogd2FybSByb2FkIGR1c3Qgb24gdGhlIGxvd2VyIHNob3VsZGVyIGFuZCBzaWRld2FsbCwgZ3JleSBzY3VmZnMgb24gYm90aCBzaG91bGRlcnNcbiAgICAgIGNvbnN0IGRnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliLCAwLCB5YSArIGggKiAwLjYpOyBkZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtkdXN0WzBdfSwke2R1c3RbMV19LCR7ZHVzdFsyXX0sJHtvLmR1c3RBbHBoYSA/PyAwLjM1fSlgKTsgZGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZGc7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjYsIHMsIGggKiAwLjQpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3VmZnMgPz8gMTQpOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpIDwgMC41ID8gYjAgKyAocm5kKCkgLSAwLjMpICogaCAqIDAuMDggOiBiMSArIChybmQoKSAtIDAuNykgKiBoICogMC4wOCwgciA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSksIHYgPSAyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjUpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTsgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuNSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5LCByICogMi4yLCByICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcic7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IGIwICsgcm5kKCkgKiAoYjEgLSBiMCksIHYgPSA2ICsgTWF0aC5yb3VuZChybmQoKSAqIDE0KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOSl9LCR7TWF0aC5yb3VuZCh2ICogMC43NSl9KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAyICsgcm5kKCkgKiA2LCAyICsgcm5kKCkgKiAzKTsgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfTtcbiAgICBzdHJpcCgwLCBzIC8gMiwgdHJ1ZSk7ICAgICAgLy8gdiAwLjUuLjE6IHRyZWFkZWRcbiAgICBzdHJpcChzIC8gMiwgcywgZmFsc2UpOyAgICAgLy8gdiAwLi4wLjU6IHNsaWNrXG4gIH0pO1xufVxuXG4vKiogQSB0YXBlcmVkIGJveDogQm94R2VvbWV0cnkoMSwgaCwgMSkgd2hvc2UgeC96IGFyZSBzY2FsZWQgcGVyIHZlcnRleCBieSB0aGUgZm9vdHByaW50IGludGVycG9sYXRlZFxuICogIGZyb20gKHcwLCBkMCkgYXQgdGhlIGJvdHRvbSB0byAodzEsIGQxKSBhdCB0aGUgdG9wLiBOb3JtYWxzIHJlY29tcHV0ZWQgc28gdGhlIHNsYW50ZWQgZmFjZXMgc2hhZGVcbiAqICBmbGF0LiBgYmAgPSBbY3gsIHlCb3R0b20sIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0uICovXG5mdW5jdGlvbiBmcnVzdHVtKGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBbY3gsIHkwLCBjeiwgdzAsIGQwLCB3MSwgZDEsIGhdID0gYjtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCBoLCAxKTtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSAocC5nZXRZKGkpICsgaCAvIDIpIC8gaDtcbiAgICBwLnNldFgoaSwgcC5nZXRYKGkpICogKHcwICsgKHcxIC0gdzApICogdCkpOyBwLnNldFooaSwgcC5nZXRaKGkpICogKGQwICsgKGQxIC0gZDApICogdCkpO1xuICB9XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgZy50cmFuc2xhdGUoY3gsIHkwICsgaCAvIDIsIGN6KTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogSE9ULURJUCBHQUxWQU5JU0VEIFpJTkM6IGNsb3VkeSB0b25lIGRyaWZ0LCBjcnlzdGFsbGluZSBTUEFOR0xFLCBhbmQgcnVzdCBibGVlZGluZyBmcm9tIHRoZSB3ZWxkcy5cbiAqXG4gKiBUaGlzIGV4aXN0cyBiZWNhdXNlIGBncmltZVRpbGVgIG1lYXN1cmFibHkgY2Fubm90IHNheSBgZ2FsdmFuaXNlZGAuIE1lYXN1cmVkIG9uIHRoZSBjcm93ZFxuICogYmFycmllcidzIHBsYXRlIGFnYWluc3QgaXRzIGZpcnN0IGJ1aWxkLCBvdmVyIG1hdGNoZWQgZmxhdCBwYW5lbCBjcm9wczogdGhlIHBsYXRlIHJlYWRzIG1lYW4gbHVtYVxuICogMTU3LTE1OSB3aXRoIHNkIDEyLTE2IGFuZCBhIHA1Li5wOTUgc3BhbiBvZiB+NDIsIGFuZCB0aGUgcmVuZGVyIHJlYWQgbWVhbiAxNDIgd2l0aCBzZCA4LTEwIGFuZCBhXG4gKiBzcGFuIG9mIH4yMSAtLSBoYWxmIHRoZSB0b25hbCB2YXJpYXRpb24sIGFuZCBDTElQUEVEIGF0IHRoZSB0b3AgKHA3NSA9IHA5NSA9IDE0NywgdGhlIHRpbGUgZG9pbmdcbiAqIG5vdGhpbmcgYXQgYWxsIG92ZXIgdGhlIHVwcGVyIGhhbGYgb2YgdGhlIHBhbmVsKS4gQSBnYWx2YW5pc2VkIHN1cmZhY2UgaXMgbm90IGRpcnQgb24gZ3JleSBwYWludDpcbiAqIGl0IGlzIGEgZnJvemVuIGNyeXN0YWwgc3RydWN0dXJlLCBicmlnaHQgaXJyZWd1bGFyIHNwYW5nbGUgZmFjZXRzIHN0YW5kaW5nIEFCT1ZFIHRoZSBiYXNlIHRvbmVcbiAqIHdpdGggZHVsbCBncmV5LWJyb3duIGRyaWZ0IGJldHdlZW4gdGhlbSwgYW5kIHRoZSBicmlnaHRlc3QgZmlmdGggb2YgaXQgaXMgdGhlIHBhcnQgdGhhdCByZWFkcy5cbiAqXG4gKiBBIGNhbnZhcyB0aWxlIGlzIGJvdW5kIGFzIGEgTVVMVElQTFkgbWFwLCBzbyBpdCBjYW4gb25seSBldmVyIGRhcmtlbiAtLSB3aGljaCBpcyB3aHkgdGhlIHNwcmVhZFxuICogd2FzIG9uZS1zaWRlZC4gVGhlIHRpbGUgaXMgdGhlcmVmb3JlIGF1dGhvcmVkIGFyb3VuZCBhIGBtaWRgIG11bHRpcGxpZXIgd2VsbCBiZWxvdyAxIGFuZCB0aGVcbiAqIGNhbGxlciByYWlzZXMgdGhlIGJhc2UgYWxiZWRvIGJ5IDEvbWlkOiB0aGUgc3BhbmdsZSB0aGVuIHJlYWNoZXMgYmFjayB1cCB0byB0aGUgYmFzZSB3aGlsZSB0aGVcbiAqIGRyaWZ0IGZhbGxzIGF3YXkgYmVsb3cgaXQsIGFuZCB0aGUgc3VyZmFjZSB2YXJpZXMgaW4gQk9USCBkaXJlY3Rpb25zIGFib3V0IGl0cyBtZWFuLiBBdXRob3IgdGhlXG4gKiBhbGJlZG8gZm9yIHRoYXQsIG9yIHRoZSBwcm9wIHNoaXBzIGFzIGJyaWdodCBhcyB0aGUgc3BhbmdsZSBldmVyeXdoZXJlLlxuICpcbiAqIGBydXN0QmFuZGAgYmxlZWRzIGEgZGVzYXR1cmF0ZWQgYnJvd24gZG93biBmcm9tIHRoZSB0b3AgYW5kIHVwIGZyb20gdGhlIGJvdHRvbSAtLSB0aGUgdHdvIHBsYWNlcyBhXG4gKiBiYXJyaWVyJ3Mgd2VsZHMgYXJlIC0tIGJlY2F1c2UgcnVzdCBvbiBnYWx2YW5pc2VkIHN0ZWVsIHN0YXJ0cyBhdCBhIHdlbGQsIHdoZXJlIHRoZSB6aW5jIHdhc1xuICogYnVybnQgb2ZmLCBhbmQgUlVOUy4gVGhlIHBsYXRlJ3MgcnVzdCBtZWFzdXJlcyAjODI2ZTU4IG92ZXIgMi4yJSBvZiB0aGUgZnJhbWU6IGEgd2FzaCwgbm90IHRoZVxuICogb3JhbmdlIHBvbGthIGRvdHMgYSBibG90Y2ggdGlsZSBnaXZlcy5cbiAqL1xuZnVuY3Rpb24gemluY1RpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBtaWQgPSBvLm1pZCA/PyAwLjg4LCBsbyA9IG8ubG8gPz8gMC43NDtcbiAgICBjb25zdCBnID0gKHY6IG51bWJlcikgPT4geyBjb25zdCBiID0gTWF0aC5yb3VuZCgyNTUgKiB2KTsgcmV0dXJuIGByZ2IoJHtifSwke2J9LCR7Yn0pYDsgfTtcbiAgICBjdHguZmlsbFN0eWxlID0gZyhtaWQpOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gY2xvdWR5IGRyaWZ0OiBicm9hZCBzb2Z0IGJsb2JzIGJvdGggYWJvdmUgYW5kIGJlbG93IHRoZSBtaWQsIHRoZSBtb3R0bGUgYSBkaXAgbGVhdmVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gNjApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDYgKyBybmQoKSAqIDAuMTYpO1xuICAgICAgY29uc3QgdXAgPSBybmQoKSA8IDAuNTtcbiAgICAgIGNvbnN0IHYgPSB1cCA/IG1pZCArICgxIC0gbWlkKSAqICgwLjM1ICsgcm5kKCkgKiAwLjUpIDogbG8gKyAobWlkIC0gbG8pICogcm5kKCk7XG4gICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke28uY2xvdWRBbHBoYSA/PyAwLjI4fSlgKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLDAsMCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gU1BBTkdMRTogaXJyZWd1bGFyIGJyaWdodCBjcnlzdGFsIGZhY2V0cywgYW5ndWxhciByYXRoZXIgdGhhbiByb3VuZCwgdXAgdG8gdGhlIGJhc2UgdG9uZS5cbiAgICAvLyBTbWFsbCBhbmQgZGVuc2UgLS0gbGFyZ2Ugb25lcyByZWFkIGFzIHNwbGFzaGVzIG9mIHdoaXRlIHBhaW50LCB3aGljaCBpcyB0aGUgZmFpbHVyZSBtb2RlIGFcbiAgICAvLyBibG90Y2ggdGlsZSBmYWxscyBpbnRvLlxuICAgIC8vIENMVVNURVJFRCwgbm90IHNjYXR0ZXJlZC4gVW5pZm9ybWx5IHNwcmVhZCBmYWNldHMgcmVhZCBhcyBzbm93IG9yIGR1c3Qgc3BlY2tzIC0tIGlzb2xhdGVkXG4gICAgLy8gYnJpZ2h0IGRvdHMgb24gYSBzbW9vdGggZmllbGQsIHdoaWNoIGlzIHdoYXQgdGhlIHNlY29uZCB0dW5pbmcgc2hpcHBlZCBhbmQgd2hhdCB0aGUgcGxhdGUgaGFzXG4gICAgLy8gbm9uZSBvZi4gUmVhbCBzcGFuZ2xlIGJsb29tczogdGhlIGNyeXN0YWxzIG51Y2xlYXRlIHRvZ2V0aGVyLCBzbyB0aGUgc3VyZmFjZSBpcyBwYXRjaGVzIG9mXG4gICAgLy8gZGVuc2UgYnJpZ2h0IGZhY2V0cyB3aXRoIHF1aWV0IGdyZXkgYmV0d2VlbiB0aGVtLiBgc3BhbmdsZUNsdXN0ZXJzYCBjZW50cmVzIGNhcnJ5XG4gICAgLy8gYDEgLSBzcGFuZ2xlTG9vc2VgIG9mIHRoZSBmYWNldHMsIGRpc3RyaWJ1dGVkIHNxcnQtdW5pZm9ybWx5IHNvIGVhY2ggYmxvb20gaXMgZGVuc2UgYXQgaXRzXG4gICAgLy8gbWlkZGxlIGFuZCB0aGlucyBhdCBpdHMgZWRnZTsgdGhlIHJlc3Qgc3RheSBzY2F0dGVyZWQgc28gdGhlIGZpZWxkIGlzIG5ldmVyIGJhbGQuXG4gICAgY29uc3QgY2wgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBvLnNwYW5nbGVDbHVzdGVycyA/PyAwIH0sICgpID0+IFtybmQoKSAqIHMsIHJuZCgpICogcywgcyAqICgwLjA0ICsgcm5kKCkgKiAwLjEwKV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BhbmdsZSA/PyA1MjApOyBpKyspIHtcbiAgICAgIGxldCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzO1xuICAgICAgaWYgKGNsLmxlbmd0aCAmJiBybmQoKSA+IChvLnNwYW5nbGVMb29zZSA/PyAwLjI1KSkge1xuICAgICAgICBjb25zdCBjID0gY2xbKHJuZCgpICogY2wubGVuZ3RoKSB8IDBdLCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjWzJdO1xuICAgICAgICB4ID0gY1swXSArIE1hdGguY29zKGEpICogZDsgeSA9IGNbMV0gKyBNYXRoLnNpbihhKSAqIGQ7XG4gICAgICB9XG4gICAgICBjb25zdCByID0gcyAqICgoby5zcGFuZ2xlTWluID8/IDAuMDA0KSArIE1hdGgucG93KHJuZCgpLCAyKSAqIChvLnNwYW5nbGVNYXggPz8gMC4wMTMpKTtcbiAgICAgIGNvbnN0IHYgPSBtaWQgKyAoMSAtIG1pZCkgKiAoMC41ICsgcm5kKCkgKiAwLjUpO1xuICAgICAgY29uc3QgayA9IDQgKyBNYXRoLmZsb29yKHJuZCgpICogMyk7XG4gICAgICBjb25zdCBhMCA9IHJuZCgpICogTWF0aC5QSSAqIDI7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHsoby5zcGFuZ2xlQWxwaGEgPz8gMC4yKSArIHJuZCgpICogKG8uc3BhbmdsZUFscGhhVmFyID8/IDAuMzUpfSlgO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGs7IGorKykge1xuICAgICAgICAgIGNvbnN0IGEgPSBhMCArIGogKiBNYXRoLlBJICogMiAvIGssIHJyID0gciAqICgwLjU1ICsgcm5kKCkgKiAwLjc1KTtcbiAgICAgICAgICBjb25zdCBweCA9IHggKyBkeCArIE1hdGguY29zKGEpICogcnIsIHB5ID0geSArIGR5ICsgTWF0aC5zaW4oYSkgKiByciAqIDAuODtcbiAgICAgICAgICBpZiAoaiA9PT0gMCkgY3R4Lm1vdmVUbyhweCwgcHkpOyBlbHNlIGN0eC5saW5lVG8ocHgsIHB5KTtcbiAgICAgICAgfVxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGRhcmsgZHJpcCBzdHJlYWtzIHJ1bm5pbmcgZG93bjogd2VhdGhlcmluZywgYW5kIHdoYXQgZ2l2ZXMgYSBmbGF0IHBhbmVsIGEgdmVydGljYWwgcmVhZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAzMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMCwgeTAgPSBybmQoKSAqIHMgKiAwLjUsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjcpO1xuICAgICAgY29uc3QgdiA9IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpICogMC42LCBhID0gMC4wNiArIHJuZCgpICogMC4xNDtcbiAgICAgIGNvbnN0IGdyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkwLCAwLCB5MCArIGxlbik7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sMClgKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgwLjI1LCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke2F9KWApO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3I7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkwLCB3LCBsZW4pO1xuICAgIH1cbiAgICAvLyBGSU5FIEdSQUlOIGFuZCBTQ1JBVENIRVMuIE1lYXN1cmVkIGFnYWluc3QgdGhlIHBsYXRlIGF0IG1hdGNoZWQgbWFnbmlmaWNhdGlvbiwgdGhpcyBpcyB0aGVcbiAgICAvLyBsYXllciB0aGUgZmlyc3QgdHVuaW5nIHdhcyBtaXNzaW5nIGVudGlyZWx5OiB0aGUgcGxhdGUncyB6aW5jIGlzIHNjcmF0Y2h5IGF0IDEtMiBweCBldmVyeXdoZXJlXG4gICAgLy8gLS0gZHJhd2luZyBtYXJrcywgaGFuZGxpbmcgc2N1ZmZzLCB0aGUgY3J5c3RhbCBib3VuZGFyaWVzIHRoZW1zZWx2ZXMgLS0gYW5kIHdpdGhvdXQgaXQgdGhlXG4gICAgLy8gZHJpZnQgYW5kIHRoZSBzcGFuZ2xlIHJlYWQgYXMgc29mdCBzbm93IG9uIHNtb290aCBncmV5IGhvd2V2ZXIgd2VsbCB0aGUgSElTVE9HUkFNIG1hdGNoZXMuIFR3b1xuICAgIC8vIGNyb3BzIHdpdGggaWRlbnRpY2FsIG1lYW4sIHNkIGFuZCBwZXJjZW50aWxlcyBjYW4gbG9vayBub3RoaW5nIGFsaWtlOyB0aGUgc3RhdGlzdGljIHRoYXRcbiAgICAvLyBzZXBhcmF0ZXMgdGhlbSBpcyBzcGF0aWFsIGZyZXF1ZW5jeSwgc28gdHVuZSB0aGlzIGJ5IGV5ZSBhZ2FpbnN0IGEgbWF0Y2hlZCBjcm9wLCBub3QgYnkgc2QuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogMiwgaCA9IDEgKyBybmQoKSAqIDI7XG4gICAgICBjb25zdCB1cCA9IHJuZCgpIDwgMC41O1xuICAgICAgY29uc3QgdiA9IHVwID8gbWlkICsgKDEgLSBtaWQpICogKDAuNCArIHJuZCgpICogMC42KSA6IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7MC4xMCArIHJuZCgpICogMC4zMH0pYDtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5ICsgZHksIHcsIGgpO1xuICAgIH1cbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3JhdGNoZXMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjAwNiArIHJuZCgpICogMC4wNTUpLCBhID0gKHJuZCgpIC0gMC41KSAqIDAuNyArIE1hdGguUEkgLyAyO1xuICAgICAgY29uc3QgdXAgPSBybmQoKSA8IDAuNDU7XG4gICAgICBjb25zdCB2ID0gdXAgPyBtaWQgKyAoMSAtIG1pZCkgKiAoMC41ICsgcm5kKCkgKiAwLjUpIDogbG8gKyAobWlkIC0gbG8pICogcm5kKCkgKiAwLjg7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwkezAuMTAgKyBybmQoKSAqIDAuMjh9KWA7XG4gICAgICBjdHgubGluZVdpZHRoID0gMC43ICsgcm5kKCkgKiAxLjY7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5ICsgZHkpO1xuICAgICAgICBjdHgubGluZVRvKHggKyBkeCArIE1hdGguY29zKGEpICogbGVuLCB5ICsgZHkgKyBNYXRoLnNpbihhKSAqIGxlbik7IGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUlVTVCBmcm9tIHRoZSB3ZWxkczogYSB3YXNoIGluIHRoZSB0b3AgYW5kIGJvdHRvbSBiYW5kcywgcGx1cyBydW5zIHRyYWlsaW5nIG91dCBvZiBpdFxuICAgIGlmIChvLnJ1c3QpIHtcbiAgICAgIGNvbnN0IGMgPSBvLnJ1c3QsIGJhbmQgPSBvLnJ1c3RCYW5kID8/IDAuMTY7XG4gICAgICBjb25zdCByZ2JzID0gYCR7TWF0aC5yb3VuZCgyNTUgKiBjWzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIGNbMV0pfSwke01hdGgucm91bmQoMjU1ICogY1syXSl9YDtcbiAgICAgIC8vIHRoZSB0d28gYmFuZHMgYXJlIFNFUEFSQVRFOiBvbiBhIGJhcnJpZXIgdGhlIGdyb3VuZCBlbmQgY2FycmllcyB0aGUgZmVldCwgdGhlIHN0dWIgd2VsZHMgYW5kXG4gICAgICAvLyBldmVyeSBydW4gb2ZmIHRoZW0sIGFuZCB0aGUgdG9wIGVuZCBjYXJyaWVzIG9ubHkgdGhlIHJhaWwncyBvd24gd2VsZHMuIE9uZSBzeW1tZXRyaWMgYmFuZFxuICAgICAgLy8gd2lkZSBlbm91Z2ggdG8gcmVhY2ggdGhlIHJhaWwgd2VsZHMgYXQgdiA9IDAuMjYgYWxzbyB3YXNoZXMgdGhlIHdob2xlIHVwcGVyIHRoaXJkIG9mIGV2ZXJ5XG4gICAgICAvLyBwYW5lbCwgd2hpY2ggdGhlIHBsYXRlIGRvZXMgbm90IGhhdmUuXG4gICAgICBmb3IgKGNvbnN0IFtlZGdlLCBkaXIsIGJdIG9mIFtbMCwgMSwgby5ydXN0QmFuZFRvcCA/PyBiYW5kXSwgW3MsIC0xLCBiYW5kXV0gYXMgbnVtYmVyW11bXSkge1xuICAgICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBlZGdlLCAwLCBlZGdlICsgZGlyICogcyAqIGIpO1xuICAgICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2JzfSwke28ucnVzdFdhc2ggPz8gMC4zMH0pYCk7IGdyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYnN9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBncjsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ydXN0UnVucyA/PyAyMik7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDE0O1xuICAgICAgICBjb25zdCB0b3AgPSBybmQoKSA8IDAuNTtcbiAgICAgICAgY29uc3QgeTAgPSB0b3AgPyAwIDogcyAtIHMgKiBiYW5kICogKDAuMyArIHJuZCgpKTtcbiAgICAgICAgY29uc3QgbGVuID0gcyAqICgwLjEwICsgcm5kKCkgKiAwLjMyKTtcbiAgICAgICAgY29uc3QgZ3IgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdic30sJHswLjE4ICsgcm5kKCkgKiAwLjMyfSlgKTsgZ3IuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdic30sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkwLCB3LCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY2Fub3B5LW1vZHVsZSBoZWxwZXJzXG4gKiBUaGUgZml2ZSBDQU5PUFkgTU9EVUxFUyAtLSBuaXBhIHRoYXRjaCwgdmV0aXZlciB0aGF0Y2gsIHNwbGl0IGJhbWJvbywgY29ycnVnYXRlZCBtZXRhbCxcbiAqIHRhcnBhdWxpbiAtLSBhcmUgb25lIGZhbWlseTogZm91ciBjb3JuZXIgcG9zdHMgaW5zaWRlIGEgNCB4IDQgbSBtb2R1bGUsIGEgaGVhZCBmcmFtZSwgYW5kIGEgcm9vZlxuICogd2hvc2UgbWF0ZXJpYWwgaXMgdGhlIHdob2xlIGlkZW50aXR5LiBXaGF0IHRoZXkgbmVlZCBiZXlvbmQgdGhlIHN0cmVldC1wcm9wIHZvY2FidWxhcnkgaXMgYVxuICogcm9vZmluZyB0aWxlIHBlciBtYXRlcmlhbCBhbmQgdGhlIGN1bG0gbWFwcGluZyBhIHJvdW5kIGJhbWJvbyBwb2xlIHdhbnRzLlxuICpcbiAqIGBjdWxtVVZgLCBgZ3JhaW5MaW5lc2AsIGB3ZWF0aGVyUGF0Y2hlc2AsIGBtb3VsZENsdXN0ZXJzYCBhbmQgYGN1bG1UaWxlYCBhcmUgcG9ydGVkIFZFUkJBVElNIGZyb21cbiAqIHNjcmF0Y2gvX2ZlbmNlL2ZlbmNlLmhlbHBlcnMudG1wbCwgd2hlcmUgdGhleSB3ZXJlIHdyaXR0ZW4gZm9yIHRoZSBiYW1ib28gZmVuY2UgcGFuZWwgYW5kIHdoZXJlXG4gKiB0aGUgcmVhc29uaW5nIGJlaGluZCBldmVyeSBudW1iZXIgaXMgcmVjb3JkZWQuIFRoZXkgYXJlIGNvcGllZCByYXRoZXIgdGhhbiBzaGFyZWQgYmVjYXVzZSB0aGUgdHdvXG4gKiBmYW1pbGllcyBrZWVwIHNlcGFyYXRlIHRlbXBsYXRlIHNldHM7IGEgdGhpcmQgZmFtaWx5IHdhbnRpbmcgdGhlbSBzaG91bGQgbW92ZSB0aGVtIHVwIGludG9cbiAqIGhlbHBlcnMudG1wbCByYXRoZXIgdGhhbiBjb3B5IHRoZW0gYSBzZWNvbmQgdGltZS5cbiAqL1xuXG4vKiogQ1VMTSBVVnM6IHUgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlIGFuZCB2IGFsb25nIHRoZSBsZW5ndGgsIGJvdGggaW4gbWV0cmVzIG92ZXIgYHNjYWxlYCwgc28gYVxuICogIGN1bG0gdGlsZSdzIG5vZGUgcmluZ3MgY3Jvc3MgdGhlIGN1bG0gYXQgcmVhbCBzcGFjaW5nIHdoaWNoZXZlciB3YXkgdGhlIGN5bGluZGVyIGlzIHRoZW4gcm90YXRlZC5cbiAqICBBcHBseSBCRUZPUkUgcm90YXRlL3RyYW5zbGF0ZS4gYHZPZmZgIHBoYXNlcyB0aGUgdGlsZSBhbG9uZyB0aGUgY3VsbSBzbyBubyB0d28gY3VsbXMgKG9yIGEgY29yZFxuICogIGNvbGxhcikgcmluZyBhdCB0aGUgc2FtZSBzdGF0aW9uLiAqL1xuZnVuY3Rpb24gY3VsbVVWKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCByOiBudW1iZXIsIGg6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdk9mZiA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gIGNvbnN0IGt1ID0gKDIgKiBNYXRoLlBJICogcikgLyBzY2FsZSwga3YgPSBoIC8gc2NhbGU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIGt1LCB1di5nZXRZKGkpICoga3YgKyB2T2ZmKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBGaW5lIGxvbmdpdHVkaW5hbCBncmFpbiBiZXR3ZWVuIHkwIGFuZCB5MSBhY3Jvc3MgYSBiYW5kIHgwLi54MTogbWFueSBoYWlybGluZXMsIG1vc3RseSBhIGRhcmtcbiAqICBmaWJyZSB0b25lLCBhIGZldyBibGVhY2hlZCwgc28gdGhlIHN1cmZhY2UgcmVhZHMgYXMgZmlicm91cyBiYW1ib28gcmF0aGVyIHRoYW4gcGFpbnQuICovXG5mdW5jdGlvbiBncmFpbkxpbmVzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBybmQ6ICgpID0+IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgbjogbnVtYmVyLCBkYXJrOiBzdHJpbmcsIGxpZ2h0OiBzdHJpbmcsIGFNYXg6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykge1xuICAgIGNvbnN0IHggPSB4MCArIHJuZCgpICogKHgxIC0geDApLCBhID0gMC4wNCArIHJuZCgpICogYU1heCwgdyA9IHJuZCgpIDwgMC43NSA/IDEgOiAxLjY7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cm5kKCkgPCAwLjcyID8gZGFyayA6IGxpZ2h0fSwke2EudG9GaXhlZCgzKX0pYDtcbiAgICBjdHguZmlsbFJlY3QoeCwgeTAsIHcsIHkxIC0geTApO1xuICB9XG59XG5cbi8qKiBTb2Z0IGNsb3VkeSB3ZWF0aGVyaW5nIGFsb25nIHRoZSBmaWJyZSBkaXJlY3Rpb246IGxlbmd0aHdpc2UgcGF0Y2hlcyBvZiB3YXJtIGJyb3duLWdyZXkgKG9sZFxuICogIGxpZ25pbiBzaG93aW5nIHRocm91Z2ggdGhlIGJsZWFjaCkgYW5kIG9mIG5lYXItd2hpdGUgKHN1bi1ibGVhY2hlZCBmYWNlcyksIHNvIHRoZSB0b25lIGRyaWZ0c1xuICogIHRoZSB3YXkgd2VhdGhlcmVkIGJhbWJvbyBkb2VzIGluc3RlYWQgb2Ygc2l0dGluZyBhdCBvbmUgZ3JleS4gVmVydGljYWwgPSBhbG9uZyB0aGUgZmlicmUuICovXG5mdW5jdGlvbiB3ZWF0aGVyUGF0Y2hlcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcm5kOiAoKSA9PiBudW1iZXIsIHM6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgbjogbnVtYmVyLCB3YXJtQTogbnVtYmVyLCBibGVhY2hBOiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICBjb25zdCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMTIgKyBybmQoKSAqIDAuNDUpLCB3YXJtID0gcm5kKCkgPCAwLjU7XG4gICAgY29uc3QgYyA9IHdhcm0gPyAnMTEyLDEwMCw4OCcgOiAnMjU1LDI1NSwyNTUnLCBhID0gd2FybSA/IHdhcm1BICogKDAuNCArIHJuZCgpICogMC42KSA6IGJsZWFjaEEgKiAoMC40ICsgcm5kKCkgKiAwLjYpO1xuICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHksIDAsIHkgKyBsZW4pO1xuICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2N9LDApYCk7IGcyLmFkZENvbG9yU3RvcCgwLjM1LCBgcmdiYSgke2N9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjY1LCBgcmdiYSgke2N9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2N9LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgwLCB5ICsgZHksIHgxIC0geDAsIGxlbik7XG4gIH1cbn1cblxuLyoqIE1vdWxkOiBjbHVzdGVycyBvZiBzbWFsbCBkYXJrIHNwZWNrcyAoYSBmZXcgZG96ZW4gZWFjaCksIHRoZSB3YXkgYmxhY2sgbW91bGQgc2l0cyBvbiBvdXRkb29yXG4gKiAgYmFtYm9vIC0tIGRlbnNlIGF0IGEgZmV3IHNwb3RzLCBhYnNlbnQgZWxzZXdoZXJlLiBBbHBoYSBjYXBwZWQgc28gdGhlIGRhcmtlc3Qgc3BlY2sgb3ZlciB0aGVcbiAqICBtZWFzdXJlZCBhbGJlZG8gc3RheXMgd2VsbCBjbGVhciBvZiB0aGUgaG9sZSBnYXRlJ3MgbHVtYSA1OC4gV3JhcHMgaW4geS4gKi9cbmZ1bmN0aW9uIG1vdWxkQ2x1c3RlcnMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJuZDogKCkgPT4gbnVtYmVyLCBzOiBudW1iZXIsIHNwb3RzOiBudW1iZXJbXVtdLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCBuOiBudW1iZXIsIGFNYXg6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGNvbnN0IFtjeCwgY3ldIG9mIHNwb3RzKSB7XG4gICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIE1hdGgubWF4KHJ4LCByeSkgKiAwLjgpO1xuICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyOCwyNiwyMiwkeyhhTWF4ICogMC45KS50b0ZpeGVkKDMpfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI4LDI2LDIyLDApJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4LCBjeSArIGR5LCByeCwgcnksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gY3ggKyAocm5kKCkgKyBybmQoKSAtIDEpICogcngsIHkgPSBjeSArIChybmQoKSArIHJuZCgpIC0gMSkgKiByeTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgyOCwyNiwyMiwkeygwLjA4ICsgcm5kKCkgKiBhTWF4KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIDIsIGggPSAxICsgcm5kKCkgKiAzO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCB3LCBoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIENVTE0gdGlsZSBmb3IgdGhlIHdob2xlLWJhbWJvbyBwb3N0IGFuZCByYWlsczogeCBydW5zIEFST1VORCB0aGUgY3VsbSwgeSBBTE9ORyBpdCAoc2VlIGN1bG1VViksXG4gKiAgMC42IG0gb2YgY3VsbSBwZXIgdGlsZS4gVHdvIG5vZGUgcmluZ3MgcGVyIHRpbGUgYXQgaXJyZWd1bGFyIHN0YXRpb25zIC0tIGEgZGFyayBncm9vdmUgdW5kZXIgYVxuICogIHBhbGUgcmFpc2VkIHJpZGdlLCB0aGUgZ3JhaW4gYnJlYWtpbmcgYXQgZWFjaCAtLSB3aXRoIGZpbmUgbG9uZ2l0dWRpbmFsIGdyYWluIGJldHdlZW4gdGhlbSwgYVxuICogIGxvbmcgZHJ5aW5nIHNwbGl0LCBsZW5ndGh3aXNlIHdlYXRoZXJpbmcgcGF0Y2hlcyBhbmQgYmxhY2sgbW91bGQgZ2F0aGVyZWQganVzdCBiZWxvdyBlYWNoIG5vZGUsXG4gKiAgYXMgaW4gdGhlIHBsYXRlJ3MgcG9zdCBhbmQgcmFpbCBjcm9wcy4gQSBtdWx0aXBsaWVyIG9uIHRoZSBtZWFzdXJlZCBjdWxtIGdyZXkuICovXG5mdW5jdGlvbiBjdWxtVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBEQVJLID0gJzkyLDc4LDYyJywgTElHSFQgPSAnMjU1LDI1NSwyNTUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2YwZWZlYyc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBhIHNvZnQgdG9uZSBkcmlmdCBhcm91bmQgdGhlIGN1bG0sIHNvIHRoZSByb3VuZCBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBjb25zdCBnYSA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBzLCAwKTtcbiAgICBnYS5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMTAwLDkyLDg0LDAuMTIpJyk7IGdhLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTApJyk7IGdhLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMDAsOTIsODQsMC4xMiknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ2E7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgMTQsIDAuMTIsIDAuMzApO1xuICAgIC8vIG5vZGUgc3RhdGlvbnM6IHR3byBwZXIgdGlsZSwgaXJyZWd1bGFyLCBuZXZlciB3aXRoaW4gMC4xOCBvZiBlYWNoIG90aGVyIG9yIHRoZSB3cmFwXG4gICAgY29uc3Qgbm9kZXMgPSBbcyAqICgwLjIwICsgcm5kKCkgKiAwLjEwKSwgcyAqICgwLjY2ICsgcm5kKCkgKiAwLjEyKV07XG4gICAgLy8gZ3JhaW4gaW4gc2VnbWVudHMgYmV0d2VlbiB0aGUgbm9kZXMgc28gaXQgYnJlYWtzIGF0IGVhY2ggcmluZ1xuICAgIGNvbnN0IHN0YXRpb25zID0gWzAsIC4uLm5vZGVzLCBzXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSArIDEgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykgZ3JhaW5MaW5lcyhjdHgsIHJuZCwgMCwgcywgc3RhdGlvbnNbaV0sIHN0YXRpb25zW2kgKyAxXSwgMjYwLCBEQVJLLCBMSUdIVCwgMC4yNik7XG4gICAgLy8gYSBjb3VwbGUgb2YgbG9uZyBkcnlpbmcgc3BsaXRzIGFsb25nIHRoZSBmaWJyZVxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMjsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMjUgKyBybmQoKSAqIDAuNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzgsMzIsMjYsMC41NSknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjQsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xOCknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNCwgeSArIGR5LCAxLCBsZW4pO1xuICAgIH1cbiAgICAvLyB0aGUgbm9kZSByaW5nc1xuICAgIGZvciAoY29uc3QgeSBvZiBub2Rlcykge1xuICAgICAgY29uc3QgZ3MgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSAtIHMgKiAwLjAzLCAwLCB5KTtcbiAgICAgIGdzLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwKScpOyBncy5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMC4yMiknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnczsgY3R4LmZpbGxSZWN0KDAsIHkgLSBzICogMC4wMywgcywgcyAqIDAuMDMpOyAgICAgICAgICAvLyBzaGFkZSB1cCB0byB0aGUgcmluZ1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUyLDQ0LDM2LDAuNjIpJzsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIDIuNSk7ICAgICAgICAvLyB0aGUgZ3Jvb3ZlXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4zNCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDIuNSwgcywgNCk7IC8vIHRoZSByYWlzZWQgc2hlYXRoIHJpZGdlXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNjAsNTAsNDAsMC4zMCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDYuNSwgcywgMS41KTsgIC8vIGl0cyBsb3dlciBlZGdlXG4gICAgICBjb25zdCBnZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5ICsgOCwgMCwgeSArIHMgKiAwLjA1KTtcbiAgICAgIGdkLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwLjIwKScpOyBnZC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnZDsgY3R4LmZpbGxSZWN0KDAsIHkgKyA4LCBzLCBzICogMC4wNSk7XG4gICAgfVxuICAgIC8vIG1vdWxkIGdhdGhlcnMganVzdCBiZWxvdyB0aGUgbm9kZXMgYW5kIGluIGEgY291cGxlIG9mIGxvb3NlIHBhdGNoZXNcbiAgICBjb25zdCBzcG90czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAoY29uc3QgeSBvZiBub2RlcykgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgeSArIHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSldKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCBybmQoKSAqIHNdKTtcbiAgICBtb3VsZENsdXN0ZXJzKGN0eCwgcm5kLCBzLCBzcG90cywgcyAqIDAuMTAsIHMgKiAwLjA2LCA5MCwgMC4zMCk7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogVEhBVENIIHRpbGUsIGZvciBhIHJvb2YgbWFwcGVkIHdpdGggV09STEQgVVZzIHNvIHUgcnVucyBhbG9uZyB0aGUgcmlkZ2UgYW5kIHYgdXAgdGhlIHNsb3BlLlxuICpcbiAqIFRoYXRjaCBpcyBsYWlkIGluIENPVVJTRVM6IGVhY2ggY291cnNlIGlzIGEgYnVuZGxlIG9mIHN0ZW1zIHBlZ2dlZCB0byBhIHB1cmxpbiB3aXRoIGl0cyBidXR0c1xuICogaGFuZ2luZyBvdmVyIHRoZSBjb3Vyc2UgYmVsb3csIHNvIHdoYXQgYSB2aWV3ZXIgYWN0dWFsbHkgcmVzb2x2ZXMgYXQgcHJvcCBkaXN0YW5jZSBpcyBhIHN0YWNrIG9mXG4gKiBob3Jpem9udGFsIGJhbmRzIHdpdGggYSBzaGFkb3cgbGluZSB1bmRlciBlYWNoIGJ1dHQsIGFuZCBhIGZpYnJlIHRleHR1cmUgcnVubmluZyBkb3duIHRoZSBzbG9wZVxuICogaW5zaWRlIHRoZW0uIE1vZGVsbGluZyB0aGUgc3RlbXMgaXMgd2hhdCB0aGUgcmVnaXN0cnkgbm90ZXMgZm9yYmlkOyB0aGlzIGlzIHdoZXJlIHRoYXQgZGV0YWlsXG4gKiBnb2VzIGluc3RlYWQuXG4gKlxuICogT25lIHRpbGUgaXMgYGNvdXJzZXNgIGNvdXJzZXMgdGFsbC4gVGhlIGtub2JzIGFyZSB3aGF0IHNlcGFyYXRlcyB0aGUgdHdvIHRoYXRjaGVzIG9uIHRoZSBwbGF0ZXM6XG4gKiAgIG5pcGEgICAgIGJyb2FkIGZsYXQgcGFsbSBibGFkZXMgLS0gZmV3IHdpZGUgc3Ryb2tlcyAoYHN0ZW1XYCAzLTcgcHgpLCBhIHdpZGUgdG9uYWwgYHNwcmVhZGAsXG4gKiAgICAgICAgICAgIGEgZGVlcGx5IFJBR0dFRCBidXR0IGxpbmUgYW5kIG9jY2FzaW9uYWwgbWlzc2luZyBibGFkZXMuXG4gKiAgIHZldGl2ZXIgIGNvbWJlZCBncmFzcyAtLSBodW5kcmVkcyBvZiBoYWlybGluZXMsIGEgbmFycm93IHNwcmVhZCwgYW4gYWxtb3N0IHN0cmFpZ2h0IGJ1dHQuXG4gKiBgbW9zc2AgbXVsdGlwbGllcyBhIGdyZWVuIGNhc3QgaW50byBzY2F0dGVyZWQgcGF0Y2hlczogdGhlIHRpbGUgaXMgYSBNVUxUSVBMSUVSIG9uIGEgcGFsZSBzdHJhd1xuICogYWxiZWRvLCBhbmQgYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4sIHNvIGdyZWVuIGhhcyB0byBhcnJpdmUgYXMgXCJsZXNzIHJlZCBhbmQgYmx1ZVwiIGFuZCBuZXZlclxuICogYXMgYSBwYWludGVkIGdyZWVuLiBOb3RoaW5nIGhlcmUgZ29lcyBiZWxvdyAwLjQyIG9mIHRoZSBhbGJlZG8sIHdoaWNoIGtlZXBzIHRoZSBkYXJrZXN0IHRleGVsIG9mXG4gKiBhIHN0cmF3IGF0IGx1bWEgfjE1MCB3ZWxsIGNsZWFyIG9mIHRoZSBzaWxob3VldHRlIGdhdGUncyBiYWNrZHJvcCBiYW5kLlxuICovXG5mdW5jdGlvbiB0aGF0Y2hUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgbmM6IG51bWJlciA9IG8uY291cnNlcyA/PyA0LCBjaCA9IHMgLyBuYztcbiAgICBjb25zdCBzdGVtczogbnVtYmVyID0gby5zdGVtcyA/PyAyNjAsIHNwcmVhZDogbnVtYmVyID0gby5zcHJlYWQgPz8gMC4xMjtcbiAgICBjb25zdCB3TWluOiBudW1iZXIgPSBvLnN0ZW1XPy5bMF0gPz8gMSwgd01heDogbnVtYmVyID0gby5zdGVtVz8uWzFdID8/IDI7XG4gICAgY29uc3QgcmFnZ2VkOiBudW1iZXIgPSBvLnJhZ2dlZCA/PyAwLjA2OyAgICAgICAgICAgICAgICAgLy8gYnV0dC1saW5lIHdhdmluZXNzLCBhcyBhIHNoYXJlIG9mIGNoXG4gICAgY29uc3QgW3NyLCBzZywgc2JdOiBudW1iZXJbXSA9IG8uc3RlbVJnYiA/PyBbMTIwLCAxMDYsIDg0XTsgICAvLyB0aGUgZGFyayBibGFkZSB0aW50OyBuaXBhIGlzIGdyZXllciB0aGFuIGdyYXNzXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuXG4gICAgLy8gdGhlIGJ1dHQgbGluZSBvZiBlYWNoIGNvdXJzZSwgaml0dGVyZWQgcGVyIGNvbHVtbiBhbmQgU0hBUkVEIHdpdGggdGhlIGNvdXJzZSBhYm92ZSBzbyB0aGVcbiAgICAvLyBzaGFkb3cgYW5kIHRoZSBibGFkZXMgYWdyZWUgb24gd2hlcmUgdGhlIGVkZ2UgaXNcbiAgICBjb25zdCBidXR0czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDw9IG5jOyBjKyspIHtcbiAgICAgIGNvbnN0IHJvdzogbnVtYmVyW10gPSBbXTtcbiAgICAgIGxldCB5ID0gMDtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDw9IHM7IHgrKykge1xuICAgICAgICBpZiAoeCAlIE1hdGgubWF4KDIsIE1hdGgucm91bmQocyAvIDQ4KSkgPT09IDApIHkgPSAocm5kKCkgKiAyIC0gMSkgKiByYWdnZWQgKiBjaDtcbiAgICAgICAgcm93LnB1c2goYyAqIGNoICsgeSk7XG4gICAgICB9XG4gICAgICBidXR0cy5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBuYzsgYysrKSB7XG4gICAgICBjb25zdCB5MCA9IGMgKiBjaDtcbiAgICAgIC8vIHRoZSBjb3Vyc2UncyBvd24gdG9uZTogdGhhdGNoIHdlYXRoZXJzIGNvdXJzZSBieSBjb3Vyc2UsIHRoZSBsb3dlciBvbmVzIGdyZXllclxuICAgICAgY29uc3QgdCA9IDEgLSBzcHJlYWQgKiBybmQoKTtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHQpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOTg1KX0sJHtNYXRoLnJvdW5kKHYgKiAwLjk1KX0pYDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCB5MCAtIHJhZ2dlZCAqIGNoIC0gMSwgcywgY2ggKyAyICogcmFnZ2VkICogY2ggKyAyKTtcbiAgICAgIC8vIHN0ZW1zIHJ1bm5pbmcgRE9XTiB0aGUgc2xvcGUgaW5zaWRlIHRoZSBjb3Vyc2UsIGVhY2ggYSBsaXR0bGUgcGFzdCBpdHMgYnV0dCBsaW5lXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHN0ZW1zOyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcztcbiAgICAgICAgY29uc3QgdyA9IHdNaW4gKyBybmQoKSAqICh3TWF4IC0gd01pbik7XG4gICAgICAgIGNvbnN0IHRvbmUgPSAxIC0gc3ByZWFkICogKDAuMyArIHJuZCgpICogMC43KTtcbiAgICAgICAgY29uc3QgYSA9IDAuMTggKyBybmQoKSAqIDAuMzI7XG4gICAgICAgIGNvbnN0IGRhcmsgPSBybmQoKSA8IDAuNjI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBkYXJrID8gYHJnYmEoJHtNYXRoLnJvdW5kKHNyICogdG9uZSl9LCR7TWF0aC5yb3VuZChzZyAqIHRvbmUpfSwke01hdGgucm91bmQoc2IgKiB0b25lKX0sJHthLnRvRml4ZWQoMyl9KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgcmdiYSgyNTUsMjUzLDI0NiwkeyhhICogMC42KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICBjb25zdCB5VG9wID0geTAgLSBjaCAqICgwLjE1ICsgcm5kKCkgKiAwLjI1KTtcbiAgICAgICAgY29uc3QgeUJvdCA9IGJ1dHRzW2MgKyAxXVtNYXRoLm1pbihzLCBNYXRoLnJvdW5kKHgpKV0gKyBjaCAqIChybmQoKSAqIDAuMTApO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeVRvcCwgdywgTWF0aC5tYXgoMiwgeUJvdCAtIHlUb3ApKTtcbiAgICAgICAgLy8gVE9STiBUSVA6IHNvbWUgYmxhZGVzIHJ1biBvbiBwYXN0IHRoZSBidXR0IGxpbmUgYW5kIGVuZCBpbiBhIHBvaW50LCBzbyB0aGUgY291cnNlIGVkZ2UgaXNcbiAgICAgICAgLy8gYSBmcmluZ2Ugb2YgaW5kaXZpZHVhbCBibGFkZXMgcmF0aGVyIHRoYW4gYSB3YXZ5IGN1dCAodGhlIG5pcGEgcGxhdGUncyB3aG9sZSBjaGFyYWN0ZXIpXG4gICAgICAgIGNvbnN0IHRlYXI6IG51bWJlciA9IG8udGVhciA/PyAwO1xuICAgICAgICBpZiAodGVhciA+IDAgJiYgcm5kKCkgPCAwLjQ1KSB7XG4gICAgICAgICAgY29uc3QgTCA9IGNoICogdGVhciAqICgwLjMgKyBybmQoKSAqIDAuNyk7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHlCb3QpOyBjdHgubGluZVRvKHggKyB3LCB5Qm90KTsgY3R4LmxpbmVUbyh4ICsgdyAvIDIsIHlCb3QgKyBMKTsgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSg1OCw0OCwzNiwkeygwLjEwICsgcm5kKCkgKiAwLjE2KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICAgIGN0eC5maWxsUmVjdCh4IC0gMSwgeUJvdCwgdyArIDIsIEwgKiAwLjUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBCTEFERSBTRUFNUzogYSB0aGluIGRhcmsgbGluZSBiZXR3ZWVuIG5laWdoYm91cmluZyBibGFkZXMsIHdoaWNoIGlzIHdoYXQgc2VwYXJhdGVzIGEgbmlwYVxuICAgICAgLy8gcm9vZiAoYnJvYWQgbGVhZmxldHMgbGFpZCBzaWRlIGJ5IHNpZGUpIGZyb20gY29tYmVkIGdyYXNzIHRoYXRjaFxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5zZWFtcyA/PyAwKTsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHM7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSg3MCw2MCw0NiwkeygwLjEwICsgcm5kKCkgKiAwLjE4KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeTAgLSBjaCAqIDAuMSwgMSwgY2ggKiAoMC43ICsgcm5kKCkgKiAwLjUpKTtcbiAgICAgIH1cbiAgICAgIC8vIE1JU1NJTkcgYmxhZGVzOiBhIGZldyBnYXBzIHdoZXJlIHRoZSBjb3Vyc2UgaGFzIHRoaW5uZWQsIGRhcmsgYnV0IG5ldmVyIGJsYWNrXG4gICAgICBjb25zdCBnYXBzID0gby5nYXBzID8/IDA7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGdhcHM7IGsrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gcyAqICgwLjAxICsgcm5kKCkgKiAwLjAzKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDk2LDg0LDY2LCR7KDAuMjAgKyBybmQoKSAqIDAuMTgpLnRvRml4ZWQoMyl9KWA7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5MCArIGNoICogMC4yNSwgdywgY2ggKiAoMC40ICsgcm5kKCkgKiAwLjUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGUgc2hhZG93IGVhY2ggY291cnNlJ3MgYnV0dCBjYXN0cyBvbiB0aGUgb25lIGJlbG93OiBhIGdyYWRpZW50IGZhbGxpbmcgQVdBWSBmcm9tIHRoZSBsaW5lLFxuICAgIC8vIGRyYXduIGFsb25nIHRoZSBqaXR0ZXJlZCBidXR0IHNvIHRoZSBzaGFkb3cgaXMgYXMgcmFnZ2VkIGFzIHRoZSBlZGdlIHRoYXQgY2FzdHMgaXQsIHdpdGggdGhlXG4gICAgLy8gTElUIFRJUFMgb2YgdGhlIGNvdXJzZSBhYm92ZSBpdCBhcyBhIHBhbGUgbGluZS4gVGhlIHBhaXIgaXMgd2hhdCBtYWtlcyB0aGUgcm9vZiByZWFkIGFzXG4gICAgLy8gc3RhY2tlZCBsYXllcnM7IHRoZSBzaGFkb3cgYWxvbmUgcmVhZHMgYXMgZ3JhaW4sIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGJ1aWxkIGxvb2tlZCBsaWtlLlxuICAgIGZvciAobGV0IGMgPSAxOyBjIDw9IG5jOyBjKyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHliID0gYnV0dHNbY11beF07XG4gICAgICAgIGNvbnN0IGdoID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliIC0gY2ggKiAwLjA5LCAwLCB5Yik7XG4gICAgICAgIGdoLmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjUyLDI0MiwwKScpOyBnaC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoMjU1LDI1MiwyNDIsJHsoby50aXAgPz8gMC4zNCkudG9GaXhlZCgzKX0pYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnaDtcbiAgICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeWIgLSBjaCAqIDAuMDkgKyBkeSwgMSwgY2ggKiAwLjA5KTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeWIsIDAsIHliICsgY2ggKiAwLjIyKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDU4LDQ4LDM2LCR7KG8uc2hhZG93ID8/IDAuNDIpLnRvRml4ZWQoMyl9KWApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNTgsNDgsMzYsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5YiArIGR5LCAxLCBjaCAqIDAuMjIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1PU1MgLyBNT1VMRDogbGVzcyByZWQgYW5kIGJsdWUgb3ZlciBzb2Z0IHBhdGNoZXMsIG5ldmVyIGEgcGFpbnRlZCBncmVlblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ubW9zcyA/PyAwKTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjE0KTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMTQgKyBybmQoKSAqIDAuMjI7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTUwLDE5MCwxMTAsJHthLnRvRml4ZWQoMyl9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTUwLDE5MCwxMTAsMCknKTtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknOyBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxuICAgIC8vIFJPVDogZGFyayBncmV5LWJyb3duIHBhdGNoZXMgd2hlcmUgdGhlIHRoYXRjaCBoYXMgZGVjYXllZCwgbmV1dHJhbCByYXRoZXIgdGhhbiBncmVlblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ucm90ID8/IDApOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMDgpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4zMCArIHJuZCgpICogMC4yNTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSg5Niw4Niw3NCwke2EudG9GaXhlZCgzKX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKDk2LDg2LDc0LCR7KGEgKiAwLjUpLnRvRml4ZWQoMyl9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoOTYsODYsNzQsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIHNvZnQgdG9uYWwgZHJpZnQgc28gdGhlIGNvdXJzZXMgZG8gbm90IHJlYWQgYXMgYSBwcmludGVkIHN0cmlwZVxuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMTAsIDAuMTAsIDAuMjIpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBXT1ZFTiBUQVJQQVVMSU4gdGlsZTogdGhlIGNvYXJzZSBjcm9zcy13b3ZlbiBwb2x5cHJvcHlsZW5lIHRhcGUgb2YgYSBUaGFpIGJ1aWxkZXIncyB0YXJwLCBwbHVzXG4gKiB0aGUgY3JlYXNlcyBhIGZvbGRlZCBzaGVldCBrZWVwcyBmb3IgbGlmZSBhbmQgdGhlIHN1bi1ibGVhY2hpbmcgYWxvbmcgdGhlIHJpZGdlcy4gQSBtdWx0aXBsaWVyIG9uXG4gKiB0aGUgbWVhc3VyZWQgYmx1ZSwgc28gdGhlIHdlYXZlIGRhcmtlbnMgYW5kIHRoZSBibGVhY2ggbGlmdHMgdG93YXJkIHdoaXRlLlxuICovXG5mdW5jdGlvbiB0YXJwVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBwaXRjaCA9IE1hdGgubWF4KDMsIE1hdGgucm91bmQocyAvIChvLnRhcGVzID8/IDY0KSkpO1xuICAgIC8vIHRoZSB3ZWF2ZTogd2FycCBhbmQgd2VmdCB0YXBlcywgZWFjaCBwYWlyIHdpdGggYSBzaGFkb3cgYXQgaXRzIGpvaW4sIGFsdGVybmF0aW5nIG92ZXIvdW5kZXJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHggKz0gcGl0Y2gpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgzMCwzNCw0NCwkeygwLjEwICsgcm5kKCkgKiAwLjA4KS50b0ZpeGVkKDMpfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wNyknOyBjdHguZmlsbFJlY3QoeCArIDEsIDAsIE1hdGgubWF4KDEsIHBpdGNoICogMC4zNSksIHMpO1xuICAgIH1cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHM7IHkgKz0gcGl0Y2gpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgzMCwzNCw0NCwkeygwLjEwICsgcm5kKCkgKiAwLjA4KS50b0ZpeGVkKDMpfSlgOyBjdHguZmlsbFJlY3QoMCwgeSwgcywgMSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wNyknOyBjdHguZmlsbFJlY3QoMCwgeSArIDEsIHMsIE1hdGgubWF4KDEsIHBpdGNoICogMC4zNSkpO1xuICAgIH1cbiAgICAvLyBmb2xkIGNyZWFzZXM6IGxvbmcgcGFsZSBsaW5lcyB3aXRoIGEgc2hhZG93IG9uIG9uZSBzaWRlLCBhdCB0aGUgdHdvIGF4ZXMgYSB0YXJwIGlzIGZvbGRlZCBvblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uY3JlYXNlcyA/PyA2KTsgaysrKSB7XG4gICAgICBjb25zdCBob3JpeiA9IHJuZCgpIDwgMC41LCBwID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuNSArIHJuZCgpICogMC41KSwgcSA9IHJuZCgpICogcztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjI2KSc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yNiknO1xuICAgICAgaWYgKGhvcml6KSB7IGN0eC5maWxsUmVjdChxIC0gbGVuIC8gMiwgcCwgbGVuLCAxLjYpOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjAsMjYsMzgsMC4xOCknOyBjdHguZmlsbFJlY3QocSAtIGxlbiAvIDIsIHAgKyAxLjYsIGxlbiwgMik7IH1cbiAgICAgIGVsc2UgeyBjdHguZmlsbFJlY3QocCwgcSAtIGxlbiAvIDIsIDEuNiwgbGVuKTsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDI2LDM4LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHAgKyAxLjYsIHEgLSBsZW4gLyAyLCAyLCBsZW4pOyB9XG4gICAgfVxuICAgIC8vIHN1bi1ibGVhY2hlZCBzdHJlYWtzIGFuZCBhIGxpdHRsZSBncmltZVxuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMTIsIDAuMTAsIDAuMzQpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTQVdOIFRJTUJFUiB0aWxlIGZvciBhIHdlYXRoZXJlZCBwb3N0LWFuZC1wbGF0ZSBmcmFtZTogZmluZSBsb25naXR1ZGluYWwgZ3JhaW4sIGEgZmV3IGtub3RzLCB0aGVcbiAqIG9kZCBkcnlpbmcgc3BsaXQsIGFuZCBjbG91ZHkgc2lsdmVyIHdlYXRoZXJpbmcuIERlbGliZXJhdGVseSBXRUFLTFkgZGlyZWN0aW9uYWwgLS0gdGhlIGZyYW1lIGlzXG4gKiBtYXBwZWQgd2l0aCB3b3JsZCBVVnMsIHdoaWNoIHB1dCB2IGFsb25nIHRoZSBwb3N0IGJ1dCBBQ1JPU1MgYSBiZWFtLCBhbmQgYSBzdHJvbmdseSBzdHJpcGVkIHRpbGVcbiAqIHdvdWxkIHRoZW4gcmVhZCBhcyBhIHBsYW5rIGpvaW50IHJ1bm5pbmcgdGhlIHdyb25nIHdheSBvbiBoYWxmIHRoZSBmcmFtZS4gVGhlIHdlYXRoZXJpbmcgY2Fycmllc1xuICogbW9zdCBvZiB0aGUgcmVhZCBhbmQgdGhlIGdyYWluIG9ubHkgc2hhcnBlbnMgaXQsIHdoaWNoIHN1cnZpdmVzIGJvdGggb3JpZW50YXRpb25zLlxuICovXG5mdW5jdGlvbiBzYXduVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IERBUksgPSAnOTYsODQsNjgnLCBMSUdIVCA9ICcyNTUsMjU1LDI1NSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjRmMmVlJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMjAsIDAuMTQsIDAuMzApO1xuICAgIGdyYWluTGluZXMoY3R4LCBybmQsIDAsIHMsIDAsIHMsIG8uZ3JhaW4gPz8gMjIwLCBEQVJLLCBMSUdIVCwgMC4xOCk7XG4gICAgLy8ga25vdHM6IGEgZGFyayBlbGxpcHNlIHdpdGggdGhlIGdyYWluIHN3ZWVwaW5nIHJvdW5kIGl0XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5rbm90cyA/PyA0KTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjAxMiArIHJuZCgpICogMC4wMik7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNzQsNjAsNDQsMC40NSknO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogMS42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDk2LDgwLDYwLDAuMjIpJzsgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGZvciAobGV0IHEgPSAxOyBxIDw9IDM7IHErKykgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByICogKDEgKyBxICogMC42KSwgciAqICgxLjYgKyBxICogMC45KSwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZHJ5aW5nIHNwbGl0cyBhbG9uZyB0aGUgZmlicmVcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnNwbGl0cyA/PyAzKTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC40NSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTgsNDgsMzYsMC40MiknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjQsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xNiknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNCwgeSArIGR5LCAxLCBsZW4pO1xuICAgIH1cbiAgICBjb25zdCBzcG90czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ubW91bGQgPz8gMyk7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCBybmQoKSAqIHNdKTtcbiAgICBtb3VsZENsdXN0ZXJzKGN0eCwgcm5kLCBzLCBzcG90cywgcyAqIDAuMDksIHMgKiAwLjA3LCA3MCwgMC4yNCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdBTFZBTklTRUQgU0hFRVQgd2VhdGhlcmluZzogb25lIHNlYW1sZXNzIG11bHRpcGxpZXIgdGlsZSBjYXJyeWluZyB0aGUgdGhyZWUgdGhpbmdzIGEgemluYyByb29mXG4gKiBhY3R1YWxseSBzaG93cyAtLSB0aGUgY2hhbGt5IHdoaXRlIG94aWRhdGlvbiB0aGF0IGVhdHMgdGhlIHNwYW5nbGUsIHRoZSBkYXJrZXIgZ3JleSBkcmlmdCB3aGVyZVxuICogaXQgaGFzIG5vdCwgYW5kIHRoZSB3YXJtIHJ1c3QgZnJlY2tsZXMgdGhhdCBzdGFydCBhdCBldmVyeSBmaXhpbmcgYW5kIGxhcC5cbiAqXG4gKiBMaWtlIGBwYWludFRpbGVgIGl0IGlzIGRyYXduIGluIEFCU09MVVRFIG11bHRpcGxpZXIgc3BhY2Ugb3ZlciBhIFJFLUJBU0VEIGVudmVsb3BlLCBiZWNhdXNlXG4gKiBjaGFsa2luZyBpcyBCUklHSFRFUiB0aGFuIHRoZSBjbGVhbiBzaGVldCBpdCBzaXRzIG9uIGFuZCBhIHBsYWluIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbi4gYG8uYmFzZWBcbiAqIGlzIHRoZSBjbGVhbiB6aW5jJ3Mgb3duIG11bHRpcGxpZXIgYWdhaW5zdCB0aGF0IGVudmVsb3BlIGFuZCBpcyB3aGF0IG1vc3Qgb2YgdGhlIHRpbGUgaXMgZmlsbGVkXG4gKiB3aXRoOyBgby5jaGFsa2AgcmVhY2hlcyBiYWNrIHVwIHRvIHRoZSBlbnZlbG9wZS4gTWVhc3VyZWQgb2ZmIHRoZSBwbGF0ZSwgdGhlIGRlY2sgcnVucyAxNzIgdG8gMTk3XG4gKiBsdW1hIGFjcm9zcyBpdHMgb3duIHN1cmZhY2UgYXQgYSBzYXR1cmF0aW9uIG9mIDAuMDQgLS0gYSAyNS1sdW1hIHNwcmVhZCBvbiBhIG5vbWluYWxseSBmbGF0IGdyZXksXG4gKiB3aGljaCBpcyB0aGUgd2hvbGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcm9vZiBhbmQgYSBzaGVldCBvZiBwbGFzdGljLlxuICpcbiAqIGBjaGFsa1NjYWxlYCAvIGBkcmlmdFNjYWxlYCBleGlzdCBiZWNhdXNlIG9uIGEgcm9vZiB0aGUgdGlsZSBpcyBzbWFsbCBhZ2FpbnN0IHRoZSBzdXJmYWNlOiB0aGVcbiAqIGRlY2sgcmVwZWF0cyBpdCBmb3VyIHRpbWVzIGFjcm9zcywgc28gYW55IG1hcmsgd2lkZXIgdGhhbiBhIHRlbnRoIG9mIGl0IGRyYXdzIGEgdmlzaWJsZSBsYXR0aWNlLlxuICogVGhlIEJST0FEIGNoYWxrIHpvbmVzIGJlbG9uZyBvbiB0aGUgc2hlZXQncyBvd24gdmVydGV4IGdyaWQsIHdoaWNoIGRvZXMgbm90IHJlcGVhdDsgd2hhdCB0aGUgdGlsZVxuICogb3dlcyBpcyB0aGUgZmluZSBzcGVja2xlIGluc2lkZSB0aGVtLlxuICpcbiAqIFRoZSByb2xsIG1hcmtzIGFyZSBkcmF3biBMQVNUIGFuZCBhbG9uZyB1LCB3aGljaCBvbiB0aGUgZGVjaydzIHdvcmxkIFVWcyBpcyB0aGUgYXhpcyB0aGUgbW9kZWxsZWRcbiAqIGZsdXRlcyBydW4gYWNyb3NzLiBUaGV5IGFyZSB3aGF0IHRoZSB0aWxlIHN0aWxsIG93ZXMgdGhlIGdlb21ldHJ5IG9uY2UgdGhlIGNvcnJ1Z2F0aW9uIGl0c2VsZiBpc1xuICogcmVhbDogYSByb2xsIGZvcm1lciBsZWF2ZXMgZmluZSBsZW5ndGh3aXNlIHN0cmlhdGlvbiBiZXR3ZWVuIHRoZSBmbHV0ZXMsIGFuZCBgYnVtcGAgcGlja3MgaXQgdXAuXG4gKi9cbmZ1bmN0aW9uIGdhbHZUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdLCBjaGFsayA9IG8uY2hhbGsgPz8gYmFzZSwgcnVzdCA9IG8ucnVzdCA/PyBiYXNlLCBkYXJrID0gby5kYXJrID8/IGJhc2U7XG4gICAgY29uc3Qgd3JhcCA9IChkcmF3OiAoZHg6IG51bWJlciwgZHk6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIGRyYXcoZHgsIGR5KTtcbiAgICB9O1xuICAgIGNvbnN0IGJsb2IgPSAoYzogbnVtYmVyW10sIHg6IG51bWJlciwgeTogbnVtYmVyLCByOiBudW1iZXIsIGE6IG51bWJlciwgcnkgPSAxLCByb3QgPSAwKSA9PiB7XG4gICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IoYyl9LCR7YX0pYCk7IGcuYWRkQ29sb3JTdG9wKDAuNTUsIGByZ2JhKCR7cmdiKGMpfSwke2EgKiAwLjV9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IoYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogcnksIHJvdCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGJhc2UgZmlsbCBjYXJyaWVzIHRoZSBGTFVURSBzaGFkaW5nIHdoZW4gYGZsdXRlc2AgaXMgc2V0OiBgZmx1dGVzYCByaXBwbGVzIHBlciB0aWxlLCBpblxuICAgIC8vIHBoYXNlIHdpdGggdGhlIG1vZGVsbGVkIGNvcnJ1Z2F0aW9uIChhIHRyb3VnaCBhdCB1ID0gMCwgd2hpY2ggaXMgd2hlcmUgdGhlIGRlY2sncyB3b3JsZCBVVnMgcHV0XG4gICAgLy8gb25lKS4gVGhlIGdlb21ldHJ5IGFscmVhZHkgdHVybnMgdGhlIGZsdXRlcyB0byB0aGUgbGlnaHQgLS0gdGhpcyBpcyB0aGUgYW1iaWVudCBkYXJrZW5pbmcgaW5cbiAgICAvLyB0aGUgdmFsbGV5cyBhbmQgdGhlIHJvbGwtZm9ybWVyJ3Mgb3duIHBvbGlzaCBvbiB0aGUgY3Jlc3RzLCB3aGljaCBmbGF0IHN0dWRpbyBsaWdodGluZyBvbiBhXG4gICAgLy8gc21vb3RoLXNoYWRlZCB0cmlhbmdsZSB3YXZlIGdpdmVzIG5vbmUgb2YuIE91dCBvZiBwaGFzZSBpdCB3b3VsZCBCRUFUIHdpdGggdGhlIGdlb21ldHJ5LCB3aGljaFxuICAgIC8vIGlzIHdoeSB0aGUgcGl0Y2ggaXMgbG9ja2VkIHRvIHRoZSBkZWNrJ3Mgb3duIDEzIGZsdXRlcyBwZXIgbWV0cmUgcmF0aGVyIHRoYW4gY2hvc2VuLlxuICAgIGNvbnN0IGZsID0gby5mbHV0ZXMgPz8gMCwgZmxvdyA9IG8uZmx1dGVMb3cgPz8gMC44ODtcbiAgICBpZiAoZmwgPiAwKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgICBjb25zdCB0ID0gKDEgLSBNYXRoLmNvcyh4IC8gcyAqIE1hdGguUEkgKiAyICogZmwpKSAvIDI7ICAgLy8gMCBpbiB0aGUgdHJvdWdoLCAxIGF0IHRoZSBjcmVzdFxuICAgICAgICBjb25zdCBrID0gZmxvdyArICgxIC0gZmxvdykgKiB0O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlLm1hcCgodjogbnVtYmVyKSA9PiB2ICogaykpfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTsgfVxuXG4gICAgLy8gMS4gdGhlIGdyZXkgZHJpZnQ6IGJyb2FkLCB2ZXJ5IHNvZnQsIHRoZSBhcmVhcyB0aGUgY2hhbGsgaGFzIG5vdCByZWFjaGVkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5kcmlmdCA/PyAxNik7IGkrKylcbiAgICAgIGJsb2IoZGFyaywgcm5kKCkgKiBzLCBybmQoKSAqIHMsIHMgKiAoMC4xNiArIHJuZCgpICogMC4zMCkgKiAoby5kcmlmdFNjYWxlID8/IDEpLCAwLjEwICsgcm5kKCkgKiAwLjE4LCAwLjUgKyBybmQoKSAqIDAuOSwgcm5kKCkgKiBNYXRoLlBJKTtcblxuICAgIC8vIDIuIHRoZSBjaGFsayBibG9vbTogTEFSR0UsIHNvZnQgYW5kIGlycmVndWxhciwgd2l0aCBhIGdyYW51bGFyIGZyaW5nZS4gT24gYSByb29mIGl0IGlzIHRoZVxuICAgIC8vICAgIGRvbWluYW50IG1hcmsgLS0gdGhlIHBsYXRlJ3MgZGVjayBpcyBtb3JlIGNoYWxrIHRoYW4gY2xlYW4gc2hlZXQgLS0gc28gaXQgaXMgZHJhd24gd2lkZSBhbmRcbiAgICAvLyAgICBhdCBoaWdoIGFscGhhLCB1bmxpa2UgdGhlIHNwYXJzZSBibG9vbXMgb2YgYSBwYWludGVkIHBhbmVsLlxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uY2hhbGtQYXRjaGVzID8/IDE0KTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjA4ICsgcm5kKCkgKiAwLjE4KSAqIChvLmNoYWxrU2NhbGUgPz8gMSk7XG4gICAgICBibG9iKGNoYWxrLCBjeCwgY3ksIGNyLCAoby5jaGFsa0FscGhhID8/IDAuNTUpICsgcm5kKCkgKiAwLjMwLCAwLjUgKyBybmQoKSAqIDAuOSwgcm5kKCkgKiBNYXRoLlBJKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjciAqIDEuMztcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQsIHIgPSAwLjggKyBybmQoKSAqIDIuNDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKGNoYWxrKX0sJHswLjIgKyBybmQoKSAqIDAuNDV9KWA7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gcnVzdDogc21hbGwgd2FybSBmcmVja2xlIGNsdXN0ZXJzLCBlYWNoIGEgc29mdCBwYXRjaCB1bmRlciBhIGZpZWxkIG9mIHNwZWNrcywgd2l0aCBhIHNob3J0XG4gICAgLy8gICAgcnVuIGJlbG93IGl0LiBaaW5jIGRvZXMgbm90IHNoZWV0LXJ1c3QgdGhlIHdheSBiYXJlIHN0ZWVsIGRvZXMgLS0gaXQgZnJlY2tsZXMgZmlyc3QuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5ydXN0Q2x1c3RlcnMgPz8gMTApOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgY3IgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDU1KTtcbiAgICAgIGJsb2IocnVzdCwgY3gsIGN5LCBjciwgMC4yNSArIHJuZCgpICogMC4zMCwgMC43ICsgcm5kKCkgKiAwLjcsIHJuZCgpICogTWF0aC5QSSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwZWNrc1BlckNsdXN0ZXIgPz8gMjYpOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkLCByID0gMC43ICsgcm5kKCkgKiAxLjg7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihydXN0KX0sJHswLjI1ICsgcm5kKCkgKiAwLjQ1fSlgO1xuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgICAgaWYgKHJuZCgpIDwgMC42KSB7XG4gICAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiBzICogMC4wMDYsIGxlbiA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xNik7XG4gICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgY3ksIDAsIGN5ICsgbGVuKTtcbiAgICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVzdCl9LCR7MC4xNCArIHJuZCgpICogMC4xNn0pYCk7IGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1c3QpfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgICAgd3JhcCgoZHgpID0+IGN0eC5maWxsUmVjdChjeCArIGR4ICsgKHJuZCgpIC0gMC41KSAqIGNyLCBjeSwgdywgbGVuKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNC4gcm9sbCBtYXJrczogZmluZSBsaW5lcyBvZiBjb25zdGFudCB1LCBhdCBgcm9sbHNgIHBlciB0aWxlLCBhbHRlcm5hdGVseSBhIHNoYWRlIHVuZGVyIGFuZCBhXG4gICAgLy8gICAgc2hhZGUgb3ZlciB0aGUgdG9uZSB0aGV5IGNyb3NzLiBCb3VuZCBhcyBhIGJ1bXAgbWFwIHRoZXkgYXJlIHRoZSBzdHJpYXRpb24gYmV0d2VlbiBmbHV0ZXMuXG4gICAgY29uc3Qgcm9sbHMgPSBvLnJvbGxzID8/IDQwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9sbHM7IGkrKykge1xuICAgICAgY29uc3QgeCA9IChpICsgMC4zNSArIHJuZCgpICogMC4zKSAqIHMgLyByb2xscywgdXAgPSBybmQoKSA8IDAuNDU7XG4gICAgICBjb25zdCBjID0gdXAgPyBjaGFsayA6IGRhcmssIGEgPSAwLjA2ICsgcm5kKCkgKiAwLjEyO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoJHtyZ2IoYyl9LCR7YX0pYDsgY3R4LmxpbmVXaWR0aCA9IDAuNyArIHJuZCgpICogMS4zO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIDApOyBjdHgubGluZVRvKHggKyBkeCwgcyk7IGN0eC5zdHJva2UoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBTUExJVC1DVUxNIHRpbGUgZm9yIHRoZSBoYWxmLXBpcGUgcm9vZmluZzogeCBBUk9VTkQgdGhlIGhhbGYgY3VsbSAoY3VsbVVWIG92ZXIgMC43MCBtLCBzbyB0aGVcbiAqICBzZWFtIGxhbmRzIG9uIHRoZSBoaWRkZW4gdW5kZXJzaWRlKSwgeSBBTE9ORyBpdC4gV2hhdCB0aGUgcGxhdGUgc2hvd3Mgb24gYSByb29maW5nIGN1bG0gdGhhdCBhXG4gKiAgd2hvbGUgcG9sZSBkb2VzIG5vdDogT05FIG5vZGUgcmluZyBwZXIgMC43MCBtICh0aGUgcm9vZiBjdWxtcyBhcmUgbG9uZ2VyIGludGVybm9kZXMgdGhhbiB0aGVcbiAqICBwb3N0cyksIGRlbnNlIGxvbmdpdHVkaW5hbCBmaWJyZSwgYSBsb25nIGRyeWluZyBzcGxpdCwgYmxlYWNoZWQgZmFjZXMsIGFuZCBST1QgLS0gZGFya1xuICogIGlycmVndWxhciBob2xlcyB3aXRoIGEgc3RhaW5lZCBoYWxvIGFuZCBhIHNjYXR0ZXIgb2YgaW5zZWN0IHBpbmhvbGVzLCB0aHJlZSBvciBmb3VyIHBlciB0aWxlLlxuICogIEEgbXVsdGlwbGllciBvbiB0aGUgcGVyLWluc3RhbmNlIHRvbmU7IHRoZSByb3QgY29yZXMgYXJlIHNtYWxsIGVub3VnaCAoMTAtMjAgcHggb2YgNTEyLCBvbiBhXG4gKiAgMC43MCBtIHRpbGUsIHNvIDE1LTMwIG1tKSB0aGF0IG5vIGVuY2xvc2VkIGRhcmsgcGF0Y2ggcmVhY2hlcyB0aGUgc2lsaG91ZXR0ZSBnYXRlLiAqL1xuZnVuY3Rpb24gc3BsaXRUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IERBUksgPSAnODgsNzYsNTgnLCBMSUdIVCA9ICcyNTUsMjU1LDI1NSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjNmMGU4JzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGEgc29mdCByb3VuZC1vZmYgYWNyb3NzIHRoZSBhcmM6IHRoZSByaW1zIGEgdG91Y2ggZGFya2VyIHRoYW4gdGhlIGNyb3duXG4gICAgY29uc3QgZ2EgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgcywgMCk7XG4gICAgZ2EuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDkwLDg0LDc0LDAuMTQpJyk7IGdhLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpJyk7IGdhLmFkZENvbG9yU3RvcCgxLCAncmdiYSg5MCw4NCw3NCwwLjE0KScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnYTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCAxMCwgMC4xMCwgMC4zNCk7XG4gICAgY29uc3Qgbm9kZSA9IHMgKiAoMC4zMCArIHJuZCgpICogMC40MCk7XG4gICAgZm9yIChjb25zdCBbeTAsIHkxXSBvZiBbWzAsIG5vZGVdLCBbbm9kZSwgc11dKSBncmFpbkxpbmVzKGN0eCwgcm5kLCAwLCBzLCB5MCwgeTEsIDMyMCwgREFSSywgTElHSFQsIDAuMjQpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMzsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMyArIHJuZCgpICogMC42KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCwzNCwyNiwwLjU1KSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5ICsgZHksIDEuNiwgbGVuKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjIwKSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4ICsgMS42LCB5ICsgZHksIDEuMiwgbGVuKTtcbiAgICB9XG4gICAgLy8gdGhlIG5vZGUgcmluZ1xuICAgIHtcbiAgICAgIGNvbnN0IHkgPSBub2RlO1xuICAgICAgY29uc3QgZ3MgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSAtIHMgKiAwLjAzLCAwLCB5KTtcbiAgICAgIGdzLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwKScpOyBncy5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMC4yNCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnczsgY3R4LmZpbGxSZWN0KDAsIHkgLSBzICogMC4wMywgcywgcyAqIDAuMDMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUyLDQ0LDM2LDAuNjYpJzsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIDMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMzYpJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyAzLCBzLCA1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg2MCw1MCw0MCwwLjMwKSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgOCwgcywgMik7XG4gICAgfVxuICAgIC8vIFJPVDogYW4gaXJyZWd1bGFyIGRhcmsgY29yZSB3aXRoIGEgd2FybSBzdGFpbmVkIGhhbG8sIGFuZCBwaW5ob2xlcyBhcm91bmQgaXRcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCByeCA9IHMgKiAoMC4wMTIgKyBybmQoKSAqIDAuMDMpLCByeSA9IHJ4ICogKDEuNCArIHJuZCgpICogMS42KSwgcm90ID0gKHJuZCgpIC0gMC41KSAqIDAuNjtcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjb25zdCBoYWxvID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSArIGR5LCAwLCBjeCwgY3kgKyBkeSwgTWF0aC5tYXgocngsIHJ5KSAqIDIuNCk7XG4gICAgICAgIGhhbG8uYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDk2LDc0LDQwLDAuNDIpJyk7IGhhbG8uYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoOTYsNzQsNDAsMC4yMCknKTsgaGFsby5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoOTYsNzQsNDAsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGhhbG87IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3gsIGN5ICsgZHksIHJ4ICogMi42LCByeSAqIDIuNCwgcm90LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgzNiwyOCwxOCwwLjgyKSc7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3gsIGN5ICsgZHksIHJ4LCByeSwgcm90LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgxNCwxMCw2LDAuOSknOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4ICsgcnggKiAwLjIsIGN5ICsgZHkgLSByeSAqIDAuMSwgcnggKiAwLjUsIHJ5ICogMC41NSwgcm90LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gY3ggKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMTIsIHkgPSBjeSArIChybmQoKSAtIDAuNSkgKiBzICogMC4yLCByID0gMSArIHJuZCgpICogMS44O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzAsMjQsMTYsMC44NSknO1xuICAgICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGxvb3NlIG1vdWxkIGJlbG93IHRoZSBub2RlXG4gICAgbW91bGRDbHVzdGVycyhjdHgsIHJuZCwgcywgW1tybmQoKSAqIHMsIG5vZGUgKyBzICogMC4wNF0sIFtybmQoKSAqIHMsIHJuZCgpICogc11dLCBzICogMC4wOCwgcyAqIDAuMDUsIDYwLCAwLjI2KTtcbiAgfSk7XG59XG5cbi8qKiBST1BFIHRpbGUgZm9yIHRoZSBsYXNoaW5nczogeCBBUk9VTkQgdGhlIGNvbGxhciwgeSBBTE9ORyB0aGUgcG9sZSBpdCB3cmFwcy4gQSBsYXNoaW5nIGlzIHR1cm5zXG4gKiAgb2YgbGFpZCByb3BlLCBzbyB0aGUgc3VyZmFjZSBpcyBkaWFnb25hbCBTVFJBTkRTIC0tIGEgZ3Jvb3ZlIGFuZCBhIGxpdCByaWRnZSBwZXIgc3RyYW5kIGF0IGFcbiAqICBzaGFsbG93IHdyYXAgYW5nbGUgLS0gd2l0aCBmaWJyZSBmdXp6IGFuZCBhIGZldyBkYXJrZXIgc29pbGVkIHR1cm5zLiBPdmVyIDAuMTIgbSBwZXIgdGlsZSB0aGVcbiAqICBzdHJhbmQgcGl0Y2ggaXMgfjEyIG1tLCB3aGljaCBpcyB0aGUgcGxhdGUncyByb3BlLiBTZWFtbGVzczogZXZlcnkgc3Ryb2tlIGlzIGRyYXduIGF0IHRocmVlXG4gKiAgeSBvZmZzZXRzIGFuZCB0aGUgc3RyYW5kIHJ1bnMgYWNyb3NzIHRoZSB3cmFwLiAqL1xuZnVuY3Rpb24gcm9wZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjRlZmU0JzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IG4gPSAxMCwgcGl0Y2ggPSBzIC8gbiwgYW5nID0gMC4zMjsgICAgICAgICAgICAgICAgLy8gd3JhcCBhbmdsZSwgcmFkaWFuc1xuICAgIGNvbnN0IGR4ID0gTWF0aC50YW4oYW5nKSAqIHM7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhvdyBmYXIgYSBzdHJhbmQgZHJpZnRzIGluIHggb3ZlciBvbmUgdGlsZSBoZWlnaHRcbiAgICBjdHguc2F2ZSgpO1xuICAgIGZvciAobGV0IGsgPSAtMzsgayA8IG4gKyAzOyBrKyspIHtcbiAgICAgIGNvbnN0IHgwID0gayAqIHBpdGNoO1xuICAgICAgZm9yIChjb25zdCBveSBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIC8vIGdyb292ZSBiZXR3ZWVuIHR1cm5zXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDcwLDU4LDQwLDAuNTUpJzsgY3R4LmxpbmVXaWR0aCA9IHBpdGNoICogMC4yMjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgwLCBveSk7IGN0eC5saW5lVG8oeDAgKyBkeCwgb3kgKyBzKTsgY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyB0aGUgbGl0IGNyb3duIG9mIHRoZSB0dXJuXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMzApJzsgY3R4LmxpbmVXaWR0aCA9IHBpdGNoICogMC4zMDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgwICsgcGl0Y2ggKiAwLjUsIG95KTsgY3R4LmxpbmVUbyh4MCArIHBpdGNoICogMC41ICsgZHgsIG95ICsgcyk7IGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gdHdpc3QgbWFya3MgYWNyb3NzIGVhY2ggdHVyblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSg5MCw3Niw1MiwwLjI4KSc7IGN0eC5saW5lV2lkdGggPSAxLjI7XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTI7IHQrKykge1xuICAgICAgICAgIGNvbnN0IHl5ID0gb3kgKyAodCArIHJuZCgpKSAqIHMgLyAxMiwgeHggPSB4MCArIHBpdGNoICogMC41ICsgZHggKiAoKHl5IC0gb3kpIC8gcyk7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHh4IC0gcGl0Y2ggKiAwLjM1LCB5eSAtIHBpdGNoICogMC4xOCk7IGN0eC5saW5lVG8oeHggKyBwaXRjaCAqIDAuMzUsIHl5ICsgcGl0Y2ggKiAwLjE4KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgLy8gZnV6eiBhbmQgc29pbGluZ1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7XG4gICAgICBjdHguZmlsbFN0eWxlID0gcm5kKCkgPCAwLjYgPyAncmdiYSg3MCw1OCw0MCwwLjE4KScgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjIyKSc7XG4gICAgICBjdHguZmlsbFJlY3QoeCwgeSwgMSwgMSArIHJuZCgpICogMik7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBjb25zdCB5ID0gcm5kKCkgKiBzLCBoID0gcyAqICgwLjA2ICsgcm5kKCkgKiAwLjEwKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHksIDAsIHkgKyBoKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw0OCwzMiwwKScpOyBnMi5hZGRDb2xvclN0b3AoMC41LCAncmdiYSg2MCw0OCwzMiwwLjIyKScpOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNDgsMzIsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoMCwgeSArIGR5LCBzLCBoKTtcbiAgICB9XG4gIH0pO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICAvLyBBIExJVCBzdXJmYWNlIChhIGZsdW9yZXNjZW50IHR1YmUsIGEgY2hhcmNvYWwgZW1iZXIgYmVkKTogZW1pc3NpdmUgY2FycmllcyB0aGUgZ2xvdyB3aXRob3V0IGFcbiAgICAvLyBsaWdodCBzb3VyY2UsIHdoaWNoIHRoZSBraXQncyBwcm9wcyBuZXZlciBvd24gLS0gdGhlIGhvc3Qgc2NlbmUgb3ducyBsaWdodGluZy5cbiAgICBpZiAocy5lbWlzc2l2ZSAhPT0gdW5kZWZpbmVkKSB7IG0uZW1pc3NpdmUgPSBuZXcgVEhSRUUuQ29sb3Iocy5lbWlzc2l2ZSk7IG0uZW1pc3NpdmVJbnRlbnNpdHkgPSBzLmVtaXNzaXZlSW50ZW5zaXR5ID8/IDE7IH1cbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIC8vIEFuIEFMUEhBLUNVVCBwYW5lIChjaGFpbi1saW5rIG1lc2gpOiB0aGUgY2FudmFzIHRpbGUgY2FycmllcyB0aGUgY3V0LW91dCBpbiBpdHMgYWxwaGEgY2hhbm5lbCBhbmRcbiAgICAvLyBhbHBoYVRlc3QgZGlzY2FyZHMgdGhlIG9wZW4gY2VsbHMsIHNvIHRoZSB3aXJlIHN0YXlzIG9wYXF1ZSBhbmQgc29ydHMgbGlrZSBhIHNvbGlkLlxuICAgIGlmIChzLmFscGhhVGVzdCAhPT0gdW5kZWZpbmVkKSB7IG0uYWxwaGFUZXN0ID0gcy5hbHBoYVRlc3Q7IG0udHJhbnNwYXJlbnQgPSBmYWxzZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb25vYmxvY1BsYXN0aWNTdG9vbE1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnTW9ub2Jsb2MgUGxhc3RpYyBTdG9vbCc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbXBvbmVudHNcbiAgICogRWFjaCBlbnRyeSBvZiBDT05GSUcuZ2VvbWV0cnkuY29tcG9uZW50cyBpcyBPTkUgbWVyZ2VkIGdlb21ldHJ5IG9uIE9ORSBtYXRlcmlhbCAtLSBvbmUgZHJhd1xuICAgKiBjYWxsLiBFdmVyeSBwYXJ0IGluc2lkZSBpdCBpcyBhIHRpbnRlZCBib3gsIHR1YmUsIGN5bGluZGVyLCBsYXRoZSBvciBwbGFuZTsgY29sb3VyIGRpZmZlcmVuY2VzXG4gICAqIGFyZSB2ZXJ0ZXggY29sb3Vycy4gYHV2YCBwaWNrcyBob3cgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSByZXBlYXRzIG92ZXIgaXQuICovXG4gIGZvciAoY29uc3QgYyBvZiBHLmNvbXBvbmVudHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoYy5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgbWlycm9yWCgoYy5ib3hlc01pcnJvcmVkID8/IFtdKSBhcyBudW1iZXJbXVtdKSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgKGMudHViZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgICAvLyBTV0VQVCB0dWJlczogb25lIG1pdHJlZCByaW5nIHBlciBwb2ludCBpbnN0ZWFkIG9mIGEgY3lsaW5kZXIgcGVyIHNlZ21lbnQgLS0gdGhlIG9ubHkgdGhpbmcgdGhhdFxuICAgIC8vIHN1cnZpdmVzIGEgdGlnaHQgYmVuZC4gU2VlIHN3ZWVwVHViZS5cbiAgICBmb3IgKGNvbnN0IHQgb2YgKGMuc3dlZXBzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaChzd2VlcFR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gMTAsIHQuaGV4LCB0LmNhcCAhPT0gZmFsc2UpKTtcbiAgICBmb3IgKGNvbnN0IHN0IG9mIChjLnN0cmFwcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2goc3RyYXAoc3QucHRzLCBzdC53LCBzdC50LCBzdC5hYm91dCwgc3QuaGV4KSk7XG4gICAgZm9yIChjb25zdCBjeSBvZiAoYy5jeWxzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHRoMGAvYHRoTGVuYCBtYWtlIGEgUEFSVElBTCBjeWxpbmRlciAoYSBjdXJ2ZWQgc3RpY2tlciBwYXRjaCB3cmFwcGVkIG9uIGEgcm91bmQgYm9keSkgYW5kXG4gICAgICAvLyBgb3BlbmAgZHJvcHMgdGhlIGNhcHM7IHRoZSBzaWRlIFVWcyB0aGVuIHJ1biAwLi4xIGFjcm9zcyB0aGUgYXJjIGFuZCB1cCB0aGUgaGVpZ2h0LCB3aGljaCBpc1xuICAgICAgLy8gd2hhdCBhIGJha2VkIGdyYXBoaWMgd2FudHMuIGB1dlJlcGAgbXVsdGlwbGllcyB0aGVtIGZvciBhIHJlcGVhdGluZyB0aWxlLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGN5LnJ0LCBjeS5yYiwgY3kuaCwgY3kuc2VnID8/IDEyLCAxLCBjeS5vcGVuID8/IGZhbHNlLCBjeS50aDAgPz8gMCwgY3kudGhMZW4gPz8gTWF0aC5QSSAqIDIpO1xuICAgICAgaWYgKGN5LnV2UmVwKSB7IGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7IGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIGN5LnV2UmVwWzBdLCB1di5nZXRZKGkpICogY3kudXZSZXBbMV0pOyB9XG4gICAgICAvLyBgc2lkZVVWYCBwaW5zIHRoZSBTSURFIHdhbGwncyBVVnMgdG8gb25lIHRleGVsIHNvIGEgZGlzYyBjYXJyeWluZyBhIGJha2VkIHRvcC1kb3duIGltYWdlIHNob3dzXG4gICAgICAvLyB0aGF0IGltYWdlIG9uIGl0cyBjYXAgYWxvbmUsIHdpdGggaXRzIHJpbSBpbiB3aGF0ZXZlciB0aGUgcGlubmVkIHRleGVsIGhvbGRzIChhIGJhZyB0b25lKS5cbiAgICAgIGlmIChjeS5zaWRlVVYpIHsgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKSwgbiA9ICgoY3kuc2VnID8/IDEyKSArIDEpICogMjsgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHV2LnNldFhZKGksIGN5LnNpZGVVVlswXSwgY3kuc2lkZVVWWzFdKTsgfVxuICAgICAgLy8gYHNjYWxlYCBiZWZvcmUgdGhlIHJvdGF0aW9uczogYW4gT1ZBTCBiYXNpbiBvciBkaXNjLCB3aGljaCBhIGxhdGhlIG9yIGEgY3lsaW5kZXIgY2Fubm90XG4gICAgICAvLyByZXZvbHZlIG9uIGl0cyBvd24uIE5vcm1hbHMgYXJlIHJlY29tcHV0ZWQgYmVjYXVzZSBhIG5vbi11bmlmb3JtIHNjYWxlIHNrZXdzIHRoZW0uXG4gICAgICBpZiAoY3kuc2NhbGUpIHsgZy5zY2FsZShjeS5zY2FsZVswXSwgY3kuc2NhbGVbMV0sIGN5LnNjYWxlWzJdKTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyB9XG4gICAgICAvLyBDVUxNIFVWczogdSBhcm91bmQgdGhlIGNpcmN1bWZlcmVuY2UsIHYgYWxvbmcgdGhlIGxlbmd0aCwgYm90aCBpbiBtZXRyZXMgLS0gc28gdGhlIG5vZGVcbiAgICAgIC8vIHJpbmdzIG9mIGEgY3VsbSB0aWxlIGNyb3NzIGEgYmFtYm9vIHBvbGUgYXQgcmVhbCBzcGFjaW5nIGhvd2V2ZXIgdGhlIHBvbGUgaXMgdGhlbiB0dXJuZWQuXG4gICAgICAvLyBJdCBoYXMgdG8gaGFwcGVuIEJFRk9SRSB0aGUgcm90YXRpb25zLCB3aGlsZSB0aGUgY3lsaW5kZXIgc3RpbGwgcnVucyBhbG9uZyBpdHMgb3duIFkuXG4gICAgICBpZiAoYy51diA9PT0gJ2N1bG0nKSBjdWxtVVYoZywgY3kucnQsIGN5LmgsIGMudXZTY2FsZSA/PyAxLCBjeS52T2ZmID8/IDApO1xuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnkpIGcucm90YXRlWShjeS5yeSk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbCBvZiAoYy5sYXRoZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgcnlgIHlhd3MgdGhlIHJldm9sdXRpb246IGEgNC1zZWdtZW50IGxhdGhlIHR1cm5lZCA0NSBkZWdyZWVzIGlzIGEgY2hhbWZlcmVkIFNRVUFSRSBzbGFiIGluIG9uZVxuICAgICAgLy8gZ2VvbWV0cnkgKGEgY29uZSdzIHJ1YmJlciBiYXNlKSwgd2hlcmUgdHdvIHN0YWNrZWQgYm94ZXMgd291bGQgY29zdCB0d28gYW5kIGEgY29wbGFuYXIgcGFpci5cbiAgICAgIC8vIGBjeWxVVmAgKGEgdGlsZSBzaXplIGluIG1ldHJlcykgd3JpdGVzIGEgc2VhbWxlc3MgYXJvdW5kLWJ5LXVwIFVWIGZyb20gdGhlIGxhdGhlJ3Mgb3duIHNlZ21lbnRcbiAgICAgIC8vIGluZGV4IC0tIGF0YW4yIHdvdWxkIGZvbGQgYSB3aG9sZSB0aWxlIGludG8gdGhlIHNlYW0gY29sdW1uIC0tIGZvciB0cmVhZCwgZmx1dGluZyBhbmQgZ3JhaW4uXG4gICAgICBjb25zdCBnID0gbGF0aGUobC5wdHMsIGwuc2VnID8/IDEyLCAwLCBsLnNoYXJwICE9PSBmYWxzZSwgbC53ZWxkU2VhbSA9PT0gdHJ1ZSk7XG4gICAgICBpZiAobC5jeWxVVikgeyBjb25zdCBjdSA9IEFycmF5LmlzQXJyYXkobC5jeWxVVikgPyBsLmN5bFVWIDogW2wuY3lsVVYsIGwuY3lsVVYsIDBdOyBsYXRoZVVWKGcsIChnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCAvICgobC5zZWcgPz8gMTIpICsgMSkpIHwgMCwgbC5zZWcgPz8gMTIsIGN1WzBdLCBjdVsxXSwgY3VbMl0gPz8gMCk7IH1cbiAgICAgIGlmIChsLnNjYWxlKSB7IGcuc2NhbGUobC5zY2FsZVswXSwgbC5zY2FsZVsxXSwgbC5zY2FsZVsyXSk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgfVxuICAgICAgLy8gYHJ5YCB5YXdzIHRoZSByZXZvbHV0aW9uIChhYm92ZSkuIGByeGAvYHJ6YCBUSUxUIHRoZSBheGlzIGl0c2VsZiwgd2hpY2ggaXMgd2hhdCBhIFdBTEwgb3JcbiAgICAgIC8vIGNlaWxpbmcgZml0dGluZyBuZWVkczogYSBsYXRoZSByZXZvbHZlcyBhYm91dCArWSwgYW5kIGEgYnVsa2hlYWQgbGFtcCdzIGF4aXMgaXMgdGhlIHdhbGxcbiAgICAgIC8vIG5vcm1hbCwgc28gaXRzIGJhY2twbGF0ZSBhbmQgZG9tZSBhcmUgYXV0aG9yZWQgYWJvdXQgWSBhbmQgbGFpZCBkb3duIHdpdGggcnggPSBQSS8yLlxuICAgICAgaWYgKGwucnkpIGcucm90YXRlWShsLnJ5KTsgaWYgKGwucngpIGcucm90YXRlWChsLnJ4KTsgaWYgKGwucnopIGcucm90YXRlWihsLnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGwuYXRbMF0sIGwuYXRbMV0sIGwuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgbC5oZXgpKTtcbiAgICB9XG4gICAgLy8gUklCQkVEIERPTUVTOiBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiBjYXJyeWluZyB2ZXJ0aWNhbCBGTFVURVMsIGFzIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgXG4gICAgLy8gc2FtcGxlZCBwZXIgc2VjdG9yIHJhdGhlciB0aGFuIGEgbGF0aGUuIEEgcHJlc3NlZC1nbGFzcyBsYW1wIGRvbWUgaXMgZmx1dGVkLCBhbmQgYSBzbW9vdGggb25lXG4gICAgLy8gcmVhZHMgYXMgYSBwbGFzdGljIGJ1YmJsZSAtLSB0aGUgcmlicyBhcmUgbW9zdCBvZiB3aGF0IHNheXMgYGdsYXNzYCBhdCBwcm9wIGRpc3RhbmNlLiBBdXRob3JlZFxuICAgIC8vIGFib3V0ICtZIGxpa2UgYSBsYXRoZSwgc28gYSB3YWxsIGZpdHRpbmcgbGF5cyBpdCBkb3duIHdpdGggcnguXG4gICAgZm9yIChjb25zdCBkIG9mIChjLmRvbWVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHJpYmJlZERvbWUoZC5wdHMsIGQucmlicywgZC5hbXAsIGQuc2VnID8/IDI0LCBkLnZhbGxleSwgZC5zbW9vdGggPT09IHRydWUpO1xuICAgICAgaWYgKGQucnkpIGcucm90YXRlWShkLnJ5KTsgaWYgKGQucngpIGcucm90YXRlWChkLnJ4KTsgaWYgKGQucnopIGcucm90YXRlWihkLnJ6KTtcbiAgICAgIGlmIChkLmF0KSBnLnRyYW5zbGF0ZShkLmF0WzBdLCBkLmF0WzFdLCBkLmF0WzJdKTtcbiAgICAgIC8vIEEgZmx1dGVkIGRvbWUgd3JpdGVzIGl0cyBPV04gY29sb3VyIGF0dHJpYnV0ZSAodGhlIGNyZXN0LXRvLXZhbGxleSBtdWx0aXBsaWVyKSwgc28gdGludEdlb1xuICAgICAgLy8gd291bGQgb3ZlcndyaXRlIHRoZSBmbHV0ZSBzdHJpcGluZyB3aXRoIG9uZSBmbGF0IGhleCAtLSB0aGUgc2FtZSB0cmFwIGBzaGVldGAncyBoZXhVbmRlclxuICAgICAgLy8gZmVsbCBpbnRvLiBNdWx0aXBseSB0aGUgdG9uZSBJTlRPIHRoZSBtdWx0aXBsaWVyIGluc3RlYWQsIHNvIHRoZSBkb21lIGNhcnJpZXMgYm90aC5cbiAgICAgIGlmIChkLnZhbGxleSAmJiBkLmhleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICAgICAgY29uc3QgdCA9IG5ldyBUSFJFRS5Db2xvcihkLmhleCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sLmNvdW50OyBpKyspIGNvbC5zZXRYWVooaSwgY29sLmdldFgoaSkgKiB0LnIsIGNvbC5nZXRZKGkpICogdC5nLCBjb2wuZ2V0WihpKSAqIHQuYik7XG4gICAgICAgIGdzLnB1c2goZyk7XG4gICAgICB9IGVsc2UgZ3MucHVzaChkLnZhbGxleSA/IGcgOiB0aW50R2VvKGcsIGQuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcCBvZiAoYy5wbGFuZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBBIFBBTkU6IGEgc2luZ2xlIHF1YWQgaW4gdGhlIFhZIHBsYW5lIGF0IGRlcHRoIHosIGRvdWJsZS1zaWRlZCBieSBpdHMgbWF0ZXJpYWwuIEl0cyBVVnMgcnVuXG4gICAgICAvLyAwLi4xIGFjcm9zcyB0aGUgcGFuZSBzbyBhbiBhbHBoYS1jdXQgdGlsZSByZXBlYXRzIGByZXBgIHRpbWVzIGFjcm9zcyBhbmQgZG93bi5cbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeShwLncsIHAuaCwgMSwgMSk7XG4gICAgICBnLnRyYW5zbGF0ZShwLmF0WzBdLCBwLmF0WzFdLCBwLmF0WzJdKTtcbiAgICAgIGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiAocC5yZXA/LlswXSA/PyAxKSwgdXYuZ2V0WShpKSAqIChwLnJlcD8uWzFdID8/IDEpKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBwLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGUgb2YgKGMuZXh0cnVkZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBBIHByb2ZpbGUgaW4gdGhlIFhZIHBsYW5lIGV4dHJ1ZGVkIGFsb25nIFogYmV0d2VlbiB6MCBhbmQgejEgLS0gYSBzbGFiIHdpdGggYSBtb3VsZGVkIGVkZ2UsXG4gICAgICAvLyBhIHB5cmFtaWQgY2FwIGFzIGEgc3RlcHBlZCBwcm9maWxlLCBhIHNwZWFyIGZpbmlhbC5cbiAgICAgIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICBzaGFwZS5tb3ZlVG8oZS5wb2x5WzBdWzBdLCBlLnBvbHlbMF1bMV0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBlLnBvbHkubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhlLnBvbHlbaV1bMF0sIGUucG9seVtpXVsxXSk7XG4gICAgICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgICAgIGZvciAoY29uc3QgaCBvZiAoZS5ob2xlcyA/PyBbXSkgYXMgbnVtYmVyW11bXVtdKSB7XG4gICAgICAgIGNvbnN0IGhwID0gbmV3IFRIUkVFLlBhdGgoKTsgaHAubW92ZVRvKGhbMF1bMF0sIGhbMF1bMV0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGgubGVuZ3RoOyBpKyspIGhwLmxpbmVUbyhoW2ldWzBdLCBoW2ldWzFdKTtcbiAgICAgICAgaHAuY2xvc2VQYXRoKCk7IHNoYXBlLmhvbGVzLnB1c2goaHApO1xuICAgICAgfVxuICAgICAgY29uc3QgZyA9IGV4dHJ1ZGVBbG9uZ1ooc2hhcGUsIGUuejAsIGUuejEpO1xuICAgICAgaWYgKGUucngpIGcucm90YXRlWChlLnJ4KTtcbiAgICAgIGlmIChlLnJ5KSBnLnJvdGF0ZVkoZS5yeSk7XG4gICAgICBpZiAoZS5yeikgZy5yb3RhdGVaKGUucnopO1xuICAgICAgaWYgKGUuYXQpIGcudHJhbnNsYXRlKGUuYXRbMF0sIGUuYXRbMV0sIGUuYXRbMl0pO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIGUuaGV4KSk7XG4gICAgfVxuICAgIC8vIEVMTElQU09JRFM6IFtoZXgsIGN4LCBjeSwgY3osIHJ4LCByeSwgcnosIHJvdFg/LCByb3RZPywgcm90Wj9dIC0tIGEgdW5pdCBzcGhlcmUgc2NhbGVkIHBlciBheGlzXG4gICAgLy8gYW5kIHR1cm5lZCBhYm91dCBpdHMgb3duIGNlbnRyZS4gQSBza3VsbCBkb21lLCBhIHBhdywgYSBub3NlIHBhZDogdGhlIHJvdW5kZWQgc29saWRzIG9mIGFuXG4gICAgLy8gYW5pbWFsIHRoYXQgYSBib3ggb3IgYSBzdGF0aW9uIHR1YmUgY2Fubm90IGdpdmUsIHNoYXJpbmcgc21vb3RoIG5vcm1hbHMgdGhyb3VnaCB0aGUgbWVyZ2UuXG4gICAgZm9yIChjb25zdCBlIG9mIChjLmVsbGlwc29pZHMgPz8gW10pIGFzIG51bWJlcltdW10pIHtcbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMSwgZVsxMF0gPz8gMTYsIGVbMTFdID8/IDEyKTtcbiAgICAgIGcuc2NhbGUoZVs0XSwgZVs1XSwgZVs2XSk7XG4gICAgICBpZiAoZVs3XSkgZy5yb3RhdGVYKGVbN10pOyBpZiAoZVs4XSkgZy5yb3RhdGVZKGVbOF0pOyBpZiAoZVs5XSkgZy5yb3RhdGVaKGVbOV0pO1xuICAgICAgZy50cmFuc2xhdGUoZVsxXSwgZVsyXSwgZVszXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgZVswXSkpO1xuICAgIH1cbiAgICAvLyBGUlVTVEE6IFtoZXgsIGN4LCB5Qm90dG9tLCBjeiwgdzAsIGQwLCB3MSwgZDEsIGhdIC0tIGEgYm94IHdob3NlIGZvb3RwcmludCBjaGFuZ2VzIGZyb20gKHcwLCBkMCkgYXRcbiAgICAvLyB0aGUgYm90dG9tIHRvICh3MSwgZDEpIGF0IHRoZSB0b3A6IHRoZSB0YXBlcmVkIGJvZHkgb2YgYSB3aGVlbGllIGJpbiBvciBhIHN0ZWVsIGNvbnRhaW5lci5cbiAgICBmb3IgKGNvbnN0IGYgb2YgKGMuZnJ1c3RhID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8oZnJ1c3R1bShmLnNsaWNlKDEpKSwgZlswXSkpO1xuICAgIGZvciAoY29uc3QgcyBvZiAoYy5zcGlrZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHRpbnRHZW8oc3Bpa2Uocy5hdCwgcy53LCBzLmgpLCBzLmhleCkpO1xuICAgIC8vIERSQVBFRCBTSEVFVFM6IGEgdGFycCBvciBhd25pbmcgYXMgYSBoZWlnaHQgZ3JpZCB3aXRoIHRoaWNrbmVzcyAtLSBhIHJpZGdlLCB0aGUgc2FnIGJldHdlZW5cbiAgICAvLyBpdHMgcG9sZXMgYW5kIHRoZSBkcm9vcCBvZiBpdHMgZnJlZSBlZGdlcyBhcmUgbnVtYmVycyBpbiB0aGUgZ3JpZCwgY29tcHV0ZWQgYXQgZW1pdCB0aW1lLlxuICAgIGZvciAoY29uc3QgcyBvZiAoYy5zaGVldHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBBIHNoZWV0IGdpdmVuIGBoZXhVbmRlcmAgaGFzIGFscmVhZHkgd3JpdHRlbiBpdHMgT1dOIGNvbG91ciBhdHRyaWJ1dGUsIG9uZSB0b25lIGZvciB0aGUgdG9wXG4gICAgICAvLyBncmlkIGFuZCBhbm90aGVyIGZvciB0aGUgdW5kZXJzaWRlIGFuZCByaW0uIHRpbnRHZW8gd291bGQgb3ZlcndyaXRlIHRoZSBsb3Qgd2l0aCBhIHNpbmdsZVxuICAgICAgLy8gaGV4IC0tIHdoaWNoIGlzIHdoYXQgc2hpcHBlZCB0aGUgdGFycGF1bGluIGJheSdzIGJsdWUtb3Zlci1vcmFuZ2UgdGFycCBhcyBhIHdoaXRlIHNhaWwuXG4gICAgICBjb25zdCBnID0gc2hlZXQocyk7XG4gICAgICBncy5wdXNoKHMuaGV4VW5kZXIgIT09IHVuZGVmaW5lZCA/IGcgOiB0aW50R2VvKGcsIHMuaGV4KSk7XG4gICAgfVxuICAgIC8vIE9SR0FOSUMgc3RhdGlvbiB0dWJlczogW3osIGN4LCBjeSwgcngsIHJ5XSBzdGF0aW9ucyBzd2VwdCBhbG9uZyBaIC0tIHRoZSBvbmx5IHNvZnQgZm9ybSBpbiB0aGVcbiAgICAvLyBraXQsIGEgbHlpbmcgYW5pbWFsLiBMaXQgc21vb3RoIGJ5IHRoZSBoZWxwZXIncyBzaGFyZWQgcmluZyB2ZXJ0aWNlcy5cbiAgICBmb3IgKGNvbnN0IHQgb2YgKGMudHViZXNBbG9uZyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSB0dWJlQWxvbmcodC5zdGF0aW9ucywgdC5zZWcgPz8gMTIpO1xuICAgICAgaWYgKHQucnkpIGcucm90YXRlWSh0LnJ5KTsgaWYgKHQuYXQpIGcudHJhbnNsYXRlKHQuYXRbMF0sIHQuYXRbMV0sIHQuYXRbMl0pO1xuICAgICAgLy8gYGhleGVzYCAtLSBvbmUgY29sb3VyIHBlciBTVEFUSU9OLCBibGVuZGVkIGFsb25nIHRoZSBzd2VlcCAtLSBpcyBob3cgYSBjb2F0IHBhdHRlcm4gdGhhdCBydW5zXG4gICAgICAvLyBhbG9uZyB0aGUgYm9keSAoYSB3aGl0ZSBjb2xsYXIgYmV0d2VlbiBhIHRhbiBza3VsbCBhbmQgYSB0YW4gc2FkZGxlKSBpcyBjYXJyaWVkIG9uIGEgc2luZ2xlXG4gICAgICAvLyBtZXJnZWQgbWVzaC4gVGhlIGNvbXBvbmVudCdzIGF4aXMgdGludCB0aGVuIG11bHRpcGxpZXMgdGhlIGRvcnNhbC10by12ZW50cmFsIGZhZGUgaW50byBpdCxcbiAgICAgIC8vIGFuZCBuZWl0aGVyIGNvc3RzIGEgbWF0ZXJpYWwuIEEgc2luZ2xlIGBoZXhgIHN0YXlzIHRoZSBkZWZhdWx0LlxuICAgICAgaWYgKHQuaGV4ZXMpIHtcbiAgICAgICAgLy8gQSBzdGF0aW9uIGVudHJ5IG1heSBiZSBvbmUgaGV4LCBvciBhIFBBSVIgW2RvcnNhbCwgdmVudHJhbF0gYmxlbmRlZCBhcm91bmQgdGhlIHJpbmcgYnkgdGhlXG4gICAgICAgIC8vIHNhbWUgc2luKHRoZXRhKSB0dWJlQWxvbmcgc3dlcHQgdGhlIHNlY3Rpb24gd2l0aCAtLSBzbyB0aGUgY29hdCBydW5zIGJvdGggQUxPTkcgdGhlIGJvZHlcbiAgICAgICAgLy8gKGEgd2hpdGUgY29sbGFyIGJldHdlZW4gYSB0YW4gc2t1bGwgYW5kIGEgdGFuIHNhZGRsZSkgYW5kIEFDUk9TUyBpdCAodGhlIHNhZGRsZSBnaXZpbmcgd2F5XG4gICAgICAgIC8vIHRvIGEgZHVzdHkgZmxhbmsgYW5kIGEgcGFsZSBiZWxseSkuIEFuIGF4aXMgdGludCBjYW5ub3QgZG8gdGhlIHNlY29uZCBoYWxmOiBvbiBhbiBhbmltYWxcbiAgICAgICAgLy8gbHlpbmcgb24gaXRzIHNpZGUgdGhlIGRvcnNhbC10by12ZW50cmFsIGF4aXMgaXMgaG9yaXpvbnRhbCwgc28gYSBiYW5kIGluIHggY3V0cyB0aGUgY3Jvd25cbiAgICAgICAgLy8gb2YgdGhlIHN3ZWVwIGluIGhhbGYsIGFuZCBhIE1VTFRJUExZIGNhbiBvbmx5IGV2ZXIgZGFya2VuIC0tIGl0IGNhbm5vdCB0YWtlIGEgd2FybSB0YW4gdG9cbiAgICAgICAgLy8gYSBjb29sZXIgZ3JleS4gVHdvIGNvbG91cnMgcGVyIHN0YXRpb24sIG9uZSBhdHRyaWJ1dGUsIHN0aWxsIG9uZSBkcmF3IGNhbGwuXG4gICAgICAgIGNvbnN0IHNlZyA9IHQuc2VnID8/IDEyLCBuID0gdC5zdGF0aW9ucy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkoc2VnICogbiAqIDMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIGNvbnN0IGUgPSB0LmhleGVzW01hdGgubWluKHQuaGV4ZXMubGVuZ3RoIC0gMSwgaSldO1xuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgVEhSRUUuQ29sb3IoQXJyYXkuaXNBcnJheShlKSA/IGVbMF0gOiBlKSwgdiA9IG5ldyBUSFJFRS5Db2xvcihBcnJheS5pc0FycmF5KGUpID8gZVsxXSA6IGUpO1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGYgPSAoTWF0aC5zaW4oaiAqIE1hdGguUEkgKiAyIC8gc2VnKSArIDEpIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGsgPSAoaSAqIHNlZyArIGopICogMztcbiAgICAgICAgICAgIGNvbFtrXSA9IGQuciArICh2LnIgLSBkLnIpICogZjsgY29sW2sgKyAxXSA9IGQuZyArICh2LmcgLSBkLmcpICogZjsgY29sW2sgKyAyXSA9IGQuYiArICh2LmIgLSBkLmIpICogZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgICAgICAgZ3MucHVzaChnKTtcbiAgICAgIH0gZWxzZSBncy5wdXNoKHRpbnRHZW8oZywgdC5oZXggPz8gMHhmZmZmZmYpKTtcbiAgICB9XG4gICAgbGV0IGcgPSBtZXJnZUdlb3MoZ3MpO1xuICAgIC8vIGEgcGVyLWNvbXBvbmVudCBzY2FsZSwgYXBwbGllZCB0byB0aGUgbWVyZ2UgYmVmb3JlIHRpbnRpbmc6IGhvdyBhIGx5aW5nIGFuaW1hbCBhdXRob3JlZCBhdFxuICAgIC8vIGl0cyBvd24gcHJvcG9ydGlvbnMgaXMgZml0dGVkIGludG8gdGhlIGRlY2xhcmVkIGVudmVsb3BlIHdpdGhvdXQgcmUtcmVhZGluZyBldmVyeSBzdGF0aW9uXG4gICAgaWYgKGMuc2NhbGUpIGcuc2NhbGUoYy5zY2FsZVswXSwgYy5zY2FsZVsxXSwgYy5zY2FsZVsyXSk7XG4gICAgLy8gQVhJUyBUSU5UOiBhIHBlci12ZXJ0ZXggYmxlbmQgZnJvbSBjMCBhdCBgZnJvbWAgdG8gYzEgYXQgYHRvYCBhbG9uZyBvbmUgYXhpcywgb3ZlciB0aGUgd2hvbGVcbiAgICAvLyBtZXJnZSAtLSBhIHRhbiBiYWNrIGZhZGluZyB0byBhIHdoaXRlIGJlbGx5IGNvc3RzIGFuIGF0dHJpYnV0ZSwgbm90IGEgc2Vjb25kIG1hdGVyaWFsLiBBcHBsaWVkXG4gICAgLy8gaW4gTElORUFSIHNwYWNlIHRocm91Z2ggVEhSRUUuQ29sb3IuIGBrZWVwYCBtdWx0aXBsaWVzIHRoZSBibGVuZCBpbnRvIHRoZSBleGlzdGluZyB0aW50IGluc3RlYWRcbiAgICAvLyBvZiByZXBsYWNpbmcgaXQsIHNvIGEgZGFyayBub3NlIHN0YXlzIGRhcmsuXG4gICAgaWYgKGMudGludCkge1xuICAgICAgY29uc3QgYSA9IG5ldyBUSFJFRS5Db2xvcihjLnRpbnQuYzApLCBiID0gbmV3IFRIUkVFLkNvbG9yKGMudGludC5jMSk7XG4gICAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGxldCBjb2wgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUgfCBudWxsO1xuICAgICAgaWYgKCFjb2wpIHsgY29sID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKS5maWxsKDEpLCAzKTsgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgY29sKTsgfVxuICAgICAgY29uc3QgYXggPSBjLnRpbnQuYXhpcyA9PT0gJ3gnID8gMCA6IGMudGludC5heGlzID09PSAneScgPyAxIDogMjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHYgPSBheCA9PT0gMCA/IHAuZ2V0WChpKSA6IGF4ID09PSAxID8gcC5nZXRZKGkpIDogcC5nZXRaKGkpO1xuICAgICAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHYgLSBjLnRpbnQuZnJvbSkgLyAoYy50aW50LnRvIC0gYy50aW50LmZyb20pKSk7XG4gICAgICAgIGNvbnN0IHIgPSBhLnIgKyAoYi5yIC0gYS5yKSAqIHQsIGdnID0gYS5nICsgKGIuZyAtIGEuZykgKiB0LCBiYiA9IGEuYiArIChiLmIgLSBhLmIpICogdDtcbiAgICAgICAgaWYgKGMudGludC5rZWVwKSBjb2wuc2V0WFlaKGksIGNvbC5nZXRYKGkpICogciwgY29sLmdldFkoaSkgKiBnZywgY29sLmdldFooaSkgKiBiYik7IGVsc2UgY29sLnNldFhZWihpLCByLCBnZywgYmIpO1xuICAgICAgfVxuICAgICAgY29sLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGMudXYgPT09ICd3b3JsZCcpIGcgPSB3b3JsZFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ2hlaWdodCcpIGcgPSBoZWlnaHRVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdwYW5lbCcpIGcgPSBwYW5lbFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ3BhbmVsLXJvdCcpIGcgPSBwYW5lbFVWKGcsIGMudXZTY2FsZSA/PyAxLCB0cnVlKTtcbiAgICAvLyAnZnJvbnQnOiBwbGFuYXIgVVZzIGludG8gYSBiYWtlZCBmcm9udC1lbGV2YXRpb24gYXRsYXMgb24gK1ogZmFjZXMsIG9uZSBwaW5uZWQgdGV4ZWwgZWxzZXdoZXJlLlxuICAgIGlmIChjLnV2ID09PSAnZnJvbnQnKSBnID0gZnJvbnRBdGxhc1VWKGcsIGMuYXRsYXMpO1xuICAgIC8vICdjdWxtJyBpcyBkZWxpYmVyYXRlbHkgYWJzZW50IGhlcmU6IGl0IGlzIHdyaXR0ZW4gcGVyIGN5bGluZGVyIGFib3ZlLCBiZWZvcmUgdGhlIHJvdGF0aW9ucyxcbiAgICAvLyBhbmQgYSB3aG9sZS1tZXJnZSBwYXNzIHdvdWxkIGZsYXR0ZW4gaXQgYmFjayB0byB0aGUgY3lsaW5kZXIncyBkZWZhdWx0IDAuLjEgd3JhcC5cbiAgICBhZGQoYy5pZCwgYy5uYW1lLCBnLCBjLm1hdGVyaWFsKTtcbiAgICBpZiAoYy5jb2xsaWRlcikgY29sbGlkZXJzW2MuaWRdID0gYy5jb2xsaWRlcjtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmVwZXRpdGlvbiBzeXN0ZW1zXG4gICAqIFBpY2tldHMsIHNsYXRzLCBsYXR0aWNlIHN0cmlwczogb25lIGdlb21ldHJ5LCBvbmUgSW5zdGFuY2VkTWVzaCwgb25lIGRyYXcgY2FsbC4gKi9cbiAgZm9yIChjb25zdCByIG9mIChHLmluc3RhbmNlZCA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoci5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgKHIuc3Bpa2VzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNwaWtlKHMuYXQsIHMudywgcy5oKSwgcy5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IGYgb2YgKHIuZnJ1c3RhID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8oZnJ1c3R1bShmLnNsaWNlKDEpKSwgZlswXSkpO1xuICAgIGZvciAoY29uc3QgY3kgb2YgKHIuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIGB0aDBgL2B0aExlbmAgY3V0IGEgUEFSVElBTCBjeWxpbmRlciB0aGUgc2FtZSB3YXkgdGhlIGNvbXBvbmVudCBicmFuY2ggZG9lczogYSBzcGxpdCBiYW1ib29cbiAgICAgIC8vIGN1bG0gaXMgYSBoYWxmIHBpcGUsIHRoTGVuID0gUEksIGBvcGVuYCBzbyBpdCBpcyBhIHNoZWxsIHdpdGggbm8gZGlzY3MgYXQgaXRzIGVuZHMuIFRoZVxuICAgICAgLy8gbWF0ZXJpYWwgY2FycmllcyBkb3VibGVTaWRlZCwgYmVjYXVzZSBhIGhvbGxvdy11cCBjdWxtIGlzIHNlZW4gZnJvbSB0aGUgaW5zaWRlLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGN5LnJ0LCBjeS5yYiwgY3kuaCwgY3kuc2VnID8/IDEyLCAxLCBjeS5vcGVuID8/IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5LnRoMCA/PyAwLCBjeS50aExlbiA/PyBNYXRoLlBJICogMik7XG4gICAgICBpZiAoci51diA9PT0gJ2N1bG0nKSBjdWxtVVYoZywgY3kucnQsIGN5LmgsIHIudXZTY2FsZSA/PyAxLCBjeS52T2ZmID8/IDApO1xuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnkpIGcucm90YXRlWShjeS5yeSk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIC8vIEFuIE9QRU4gd2hlZWwgLS0gdHlyZSBhbmQgcmltIGFzIGNsb3NlZCByaW5nIGxhdGhlcywgYSBodWIsIGFuZCB3aXJlIHNwb2tlcyAtLSBmb3IgYSBiaWN5Y2xlXG4gICAgLy8gd2hvc2Ugd2hlZWxzIHJlYWQgYXMgYmljeWNsZSB3aGVlbHMgcmF0aGVyIHRoYW4gZGlzY3MuIExhdGhlcyByZXZvbHZlIGFib3V0IFkgKGByeGAgbGF5cyB0aGVcbiAgICAvLyBheGxlIHdoZXJlIHRoZSBwbGFjZW1lbnQgd2FudHMgaXQpOyBgc3Bva2VzYCByYWRpYXRlIGFib3V0IFggYnkgdGhlIGhlbHBlcidzIGNvbnZlbnRpb24sIHNvIGFuXG4gICAgLy8gYXhsZSBvbiBaIHRha2VzIGByeTogUEkvMmAuXG4gICAgZm9yIChjb25zdCBsIG9mIChyLmxhdGhlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBsYXRoZShsLnB0cywgbC5zZWcgPz8gMTIsIDAsIGwuc2hhcnAgIT09IGZhbHNlLCBsLndlbGRTZWFtID09PSB0cnVlKTtcbiAgICAgIGlmIChsLnJ4KSBnLnJvdGF0ZVgobC5yeCk7IGlmIChsLnJ5KSBnLnJvdGF0ZVkobC5yeSk7IGlmIChsLnJ6KSBnLnJvdGF0ZVoobC5yeik7XG4gICAgICBpZiAobC5hdCkgZy50cmFuc2xhdGUobC5hdFswXSwgbC5hdFsxXSwgbC5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBsLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHMgb2YgKHIuc3Bva2VzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHNwb2tlcyhzLnJIdWIsIHMuclJpbSwgcy5oYWxmVywgcy5uLCBzLmhleCwgcy50ID8/IDAuMDA2LCBzLnByaXNtID8/IGZhbHNlKTtcbiAgICAgIGlmIChzLnJ4KSBnLnJvdGF0ZVgocy5yeCk7IGlmIChzLnJ5KSBnLnJvdGF0ZVkocy5yeSk7IGlmIChzLnJ6KSBnLnJvdGF0ZVoocy5yeik7XG4gICAgICBpZiAocy5hdCkgZy50cmFuc2xhdGUocy5hdFswXSwgcy5hdFsxXSwgcy5hdFsyXSk7IGdzLnB1c2goZyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdCBvZiAoci50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIGxldCBnID0gbWVyZ2VHZW9zKGdzKTtcbiAgICBpZiAoci51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgci51dlNjYWxlID8/IDEpO1xuICAgIGlmIChyLnV2ID09PSAnaGVpZ2h0JykgZyA9IGhlaWdodFVWKGcsIHIudXZTY2FsZSA/PyAxKTtcbiAgICAvLyAnY3VsbScgYWdhaW4gd3JpdHRlbiBwZXIgY3lsaW5kZXIgYWJvdmUsIGJlZm9yZSB0aGUgcm90YXRpb25zLlxuICAgIGNvbnN0IG1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgcCBvZiByLnBsYWNlbWVudHMgYXMgbnVtYmVyW11bXSkge1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKG5ldyBUSFJFRS5FdWxlcihwWzNdID8/IDAsIHBbNF0gPz8gMCwgcFs1XSA/PyAwKSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKSk7XG4gICAgfVxuICAgIGFkZEluc3Qoci5pZCwgci5uYW1lLCBnLCByLm1hdGVyaWFsLCBtYXRzLCByLmNvbG9ycyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhc2VzICovXG4gIGZvciAoY29uc3QgdCBvZiAoQ09ORklHLnRpbGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG1hdCA9IG1hdGVyaWFsc1t0Lm1hdGVyaWFsXTtcbiAgICBpZiAoIW1hdCkgY29udGludWU7XG4gICAgLy8gQSBCQUtFRCBncmFwaGljIChhIHByaW50ZWQgc2lnbiBmYWNlKTogb25lIFdlYlAgZGF0YSBVUkkgY29tcG9zZWQgb2ZmbGluZSBmcm9tIHRoZSBwbGF0ZSdzIG93blxuICAgIC8vIHByaW50ZWQgcmVnaW9uIGFuZCB2ZWN0b3IgbWFya3MsIGxvYWRlZCB0aHJvdWdoIFRleHR1cmVMb2FkZXIuIEFzc2lnbmVkIHN5bmNocm9ub3VzbHkgc28gdGhlXG4gICAgLy8gaGFybmVzcyB3YWl0cyBvbiB0aGUgZGVjb2RlLiBJdCBiZWF0cyBmaWxsVGV4dCwgd2hpY2ggZHJhd3MgYSBkaWZmZXJlbnQgd29yZG1hcmsgcGVyIG1hY2hpbmUuXG4gICAgaWYgKHQua2luZCA9PT0gJ2Jha2VkJykge1xuICAgICAgLy8gVW5kZXIgcGxhaW4gTm9kZSAodGhlIGNvcGxhbmFyIGNoZWNrLCB0aGUgcnVudGltZSBwcm9iZSkgdGhlcmUgaXMgbm8gZG9jdW1lbnQgZm9yIEltYWdlTG9hZGVyOlxuICAgICAgLy8ga2VlcCB0aGUgd2hpdGUgZmFsbGJhY2sgcmF0aGVyIHRoYW4gdGhyb3csIGV4YWN0bHkgYXMgdGhlIHJldGFpbCBnbGF6aW5nIGRvZXMuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgY29udGludWU7XG4gICAgICBjb25zdCBiYWtlZCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCh0LnVyaSk7XG4gICAgICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG4gICAgICBpZiAoc3JnYikgYmFrZWQuY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgICBiYWtlZC5hbmlzb3Ryb3B5ID0gNDtcbiAgICAgIG1hdC5tYXAgPSBiYWtlZDsgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBsZXQgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKHQua2luZCA9PT0gJ211ZCcpIHRleCA9IG11ZFRpbGUodC5zaXplID8/IDUxMiwgdC5iYXNlLCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMzKTtcbiAgICBpZiAodC5raW5kID09PSAnZHVzdCcpIHRleCA9IGR1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuZHVzdCwgdC5zZWVkID8/IDEsIHQuY292ZXJhZ2UgPz8gMC4zMCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BsYW5rJykgdGV4ID0gcGxhbmtUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYm9hcmRzID8/IDYsIHQuc2VlZCA/PyA1KTtcbiAgICBpZiAodC5raW5kID09PSAncnVzdCcpIHRleCA9IHJ1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQucmF0aW8sIHQuc2VlZCA/PyA3LCB0LmRlbnNpdHkgPz8gOTApO1xuICAgIGlmICh0LmtpbmQgPT09ICdwYWludCcpIHRleCA9IHBhaW50VGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTcsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjb3JydWdhdGlvbicpIHRleCA9IGNvcnJ1Z2F0aW9uVGlsZSh0LnNpemUgPz8gNTEyLCB0LnBpdGNoID8/IDEyLCB0LmxvdyA/PyAwLjcsIHQuc2VlZCA/PyAzKTtcbiAgICBpZiAodC5raW5kID09PSAnZ3JpbWUnKSB0ZXggPSBncmltZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDExLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnemluYycpIHRleCA9IHppbmNUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxOSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2Z1cicpIHRleCA9IGZ1clRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDEzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY2hhaW5saW5rJykgdGV4ID0gY2hhaW5saW5rVGlsZSh0LnNpemUgPz8gMjU2LCB0LndpcmUgPz8gMC4wOSwgdC5zZWVkID8/IDQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdiYW1ib28nKSB0ZXggPSBiYW1ib29UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc3RyaXBzID8/IDEwLCB0LnNlZWQgPz8gNik7XG4gICAgaWYgKHQua2luZCA9PT0gJ3N0cmlwZXMnKSB0ZXggPSBzdHJpcGVUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuYmFuZHMgPz8gOCwgdC5hLCB0LmIsIHQuc2VlZCA/PyA5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAncG9zdGVyJykgdGV4ID0gcG9zdGVyVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gOCwgdC5saW5lcyA/PyBbXSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BlYmJsZScpIHRleCA9IHBlYmJsZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDIxLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndHJlYWQnKSB0ZXggPSB0cmVhZFRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDIzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndHlyZScpIHRleCA9IHR5cmVUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuc2VlZCA/PyAyOSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2N1bG0nKSB0ZXggPSBjdWxtVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMzEpO1xuICAgIGlmICh0LmtpbmQgPT09ICdzYXduJykgdGV4ID0gc2F3blRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndGhhdGNoJykgdGV4ID0gdGhhdGNoVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMzcsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0YXJwJykgdGV4ID0gdGFycFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQxLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnZ2FsdicpIHRleCA9IGdhbHZUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA0NywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3NwbGl0JykgdGV4ID0gc3BsaXRUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA1Myk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3JvcGUnKSB0ZXggPSByb3BlVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNTkpO1xuICAgIGJpbmRUaWxlKG1hdCwgdGV4LCB0LmJ1bXAgPz8gMCk7XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbi8qKlxuICogdGhhaWtpdCBlbnRyeSBwb2ludC4gVGhlIHJlZ2lzdHJ5IHJlY29yZHMgYGNyZWF0ZU9iamVjdE1vZGVsYCBhcyB0aGUgZXhwb3J0IGFuZCBjYWxscyBpdCB3aXRoXG4gKiAoc3BlYywgb3B0aW9ucykuIGBzcGVjYCBpcyBhY2NlcHRlZCBhbmQgYXR0YWNoZWQgZm9yIGhvc3Qtc2lkZSBpbnNwZWN0aW9uIC0tIHRoZSByZWNvbnN0cnVjdGlvblxuICogZGF0YSBhbHJlYWR5IGxpdmVzIGluIHRoaXMgbW9kdWxlLCBzbyBpdCBpcyBkZWxpYmVyYXRlbHkgbm90IGEgc2Vjb25kIHNvdXJjZSBvZiB0cnV0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKHNwZWM/OiB1bmtub3duLCBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVNb25vYmxvY1BsYXN0aWNTdG9vbE1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogdGhlIHJvb3QsIHBsdXMgT05FIFBFUiBXSEVFTCAoYW5kIGFueSBvdGhlciBtZWNoYW5pc20gQ09ORklHLnBpdm90cyBuYW1lcyAtLSBhXG4gICAgLy8gc3RlZXJpbmcgaGVhZCwgYSBjYW5vcHkgc3RheSkuIEEgdmVoaWNsZSdzIHdoZWVscyBnZW51aW5lbHkgdHVybiwgc28gZWFjaCBvbmUgaXMgYSBwcm9taXNlXG4gICAgLy8ga2VwdDogdGhlIHBpdm90IHNpdHMgYXQgdGhlIGh1YiwgaXRzIGF4aXMgaXMgdGhlIGF4bGUsIGFuZCBgaW5zdGFuY2VgIG5hbWVzIHdoaWNoIGluc3RhbmNlXG4gICAgLy8gb2YgdGhlIHdoZWVsIEluc3RhbmNlZE1lc2ggaXQgZHJpdmVzLiBOb3RoaW5nIGVsc2Ugb24gdGhlIHByb3AgbW92ZXMgLS0gdGhlIGRvb3JzIGFyZSBwYXJ0XG4gICAgLy8gb2YgdGhlIGJvZHkgc2hlbGwgLS0gc28gbm90aGluZyBlbHNlIGdldHMgYW4gYXhpcy5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcbiAgICBmb3IgKGNvbnN0IHB2IG9mIChDT05GSUcucGl2b3RzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgbyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgICAgby5uYW1lID0gcHYubmFtZTtcbiAgICAgIG8ucG9zaXRpb24uc2V0KHB2LnBvc2l0aW9uWzBdLCBwdi5wb3NpdGlvblsxXSwgcHYucG9zaXRpb25bMl0pO1xuICAgICAgby51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgICBhbmltYXRpb25Sb2xlOiAnY2hpbGQnLFxuICAgICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogcHYucG9zaXRpb24sIGF4aXM6IHB2LmF4aXMsIG5hbWU6IHB2Lm5hbWUsXG4gICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcHYuY29tcG9uZW50LCBpbnN0YW5jZTogcHYuaW5zdGFuY2UgPz8gbnVsbCwgbm90ZXM6IHB2Lm5vdGUgPz8gJycgfSxcbiAgICAgIH07XG4gICAgICByb290LmFkZChvKTtcbiAgICAgIHBpdm90cy5wdXNoKG8pO1xuICAgIH1cblxuICAgIC8vIFNvY2tldHM6IE5PTkUgdW5sZXNzIENPTkZJRy5zb2NrZXRzIG5hbWVzIG9uZS4gTm90aGluZyBhdHRhY2hlcyB0byBhIHZlaGljbGUgaW4gdGhpcyBraXRcbiAgICAvLyBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qKlxuICogVGhlIG9uZS1hcmd1bWVudCBlbnRyeSBwb2ludDogdmliZTNkJ3MgY29udHJhY3QsIGFuZCBpbWcydGhyZWVqcydzIG93bi5cbiAqXG4gKiBgY3JlYXRlT2JqZWN0TW9kZWxgIGFib3ZlIGtlZXBzIHRoYWlraXQncyBoaXN0b3JpY2FsIChzcGVjLCBvcHRpb25zKSBzaGFwZSBzb1xuICogdGhlIGhhcm5lc3MsIHRoZSBsZXZlbCBlZGl0b3IgYW5kIHRoZSBOb2RlLXNpZGUgZ2F0ZXMgY2Fycnkgb24gdW5jaGFuZ2VkLlxuICogYHNwZWNgIGhhcyBuZXZlciBiZWVuIHBhc3NlZCBieSBhbnkgY2FsbGVyIC0tIGl0IGlzIGluc3BlY3Rpb24gZGF0YSB0aGF0IGlzXG4gKiBhbHJlYWR5IGJha2VkIGludG8gdGhpcyBtb2R1bGUgLS0gc28gdGhpcyBpcyB0aGUgaG9uZXN0IHNpZ25hdHVyZSwgYW5kIGl0IGlzXG4gKiB3aGF0IGEgdmliZTNkIGNvbnN1bWVyIGluc3RhbGxzIGFuZCBjYWxscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgcmV0dXJuIGNyZWF0ZU9iamVjdE1vZGVsKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFzQ3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLGNBQWM7QUFBQSxNQUNaO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxRQUFRO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0EsWUFBWTtBQUFBLFVBQ1YsU0FBUztBQUFBLFVBQ1QsZUFBZTtBQUFBLFlBQ2I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLGVBQWU7QUFBQSxZQUNiO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE9BQU87QUFBQSxjQUNMO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxPQUFPO0FBQUEsY0FDTDtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFlBQ0EsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE9BQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxZQUNQLFNBQVM7QUFBQSxjQUNQO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxTQUFTO0FBQUEsY0FDUDtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLGNBQ1A7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxZQUNQLFNBQVM7QUFBQSxjQUNQO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxTQUFTO0FBQUEsY0FDUDtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLGNBQ1A7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1B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
