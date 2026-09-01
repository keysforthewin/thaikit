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

// ../repo/scratch/stainless-steel-noodle-shop-table/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createStainlessSteelNoodleShopTableModel: () => createStainlessSteelNoodleShopTableModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "stainless-steel-noodle-shop-table",
  "name": "Stainless Steel Noodle Shop Table",
  "exportName": "StainlessSteelNoodleShopTable",
  "envelope": "Envelope 0.6 x 0.75 x 0.6 m, origin base-center, +Y up.\n * Budget (medium): <=2000 triangles, <=2 draw calls, <=2 materials, <=4 unique geometries.",
  "materials": [
    {
      "id": "steel-satin",
      "color": 16777215,
      "roughness": 0.44,
      "metalness": 0.35,
      "vertexColors": true
    },
    {
      "id": "steel-frame",
      "color": 16777215,
      "roughness": 0.38,
      "metalness": 0.35,
      "vertexColors": true
    }
  ],
  "tiles": [],
  "geometry": {
    "components": [
      {
        "id": "table-top",
        "name": "Pressed sheet top with rolled rim",
        "material": "steel-satin",
        "lathes": [
          {
            "pts": [
              [
                0,
                0.706
              ],
              [
                0.268,
                0.706
              ],
              [
                0.29,
                0.71
              ],
              [
                0.298,
                0.72
              ],
              [
                0.298,
                0.738
              ],
              [
                0.288,
                0.748
              ],
              [
                0.274,
                0.75
              ],
              [
                0.268,
                0.7487
              ],
              [
                0.262,
                0.7487
              ],
              [
                0.256,
                0.75
              ],
              [
                0,
                0.75
              ]
            ],
            "seg": 32,
            "at": [
              0,
              0,
              0
            ],
            "hex": 11843514,
            "weldSeam": true
          }
        ]
      },
      {
        "id": "leg-frame",
        "name": "Welded four-leg tube frame with brace ring and foot caps",
        "material": "steel-frame",
        "parent": "table-top",
        "cyls": [
          {
            "at": [
              0.147,
              0.366,
              0.147
            ],
            "rt": 0.014,
            "rb": 0.014,
            "h": 0.692,
            "seg": 8,
            "hex": 12632772
          },
          {
            "at": [
              0.147,
              0.366,
              -0.147
            ],
            "rt": 0.014,
            "rb": 0.014,
            "h": 0.692,
            "seg": 8,
            "hex": 12632772
          },
          {
            "at": [
              -0.147,
              0.366,
              -0.147
            ],
            "rt": 0.014,
            "rb": 0.014,
            "h": 0.692,
            "seg": 8,
            "hex": 12632772
          },
          {
            "at": [
              -0.147,
              0.366,
              0.147
            ],
            "rt": 0.014,
            "rb": 0.014,
            "h": 0.692,
            "seg": 8,
            "hex": 12632772
          },
          {
            "at": [
              0.147,
              0.5,
              0
            ],
            "rt": 0.01,
            "rb": 0.01,
            "h": 0.294,
            "seg": 6,
            "rx": 1.5707963267948966,
            "hex": 12632772
          },
          {
            "at": [
              -0.147,
              0.5,
              0
            ],
            "rt": 0.01,
            "rb": 0.01,
            "h": 0.294,
            "seg": 6,
            "rx": 1.5707963267948966,
            "hex": 12632772
          },
          {
            "at": [
              0,
              0.5,
              0.147
            ],
            "rt": 0.01,
            "rb": 0.01,
            "h": 0.294,
            "seg": 6,
            "rz": 1.5707963267948966,
            "hex": 12632772
          },
          {
            "at": [
              0,
              0.5,
              -0.147
            ],
            "rt": 0.01,
            "rb": 0.01,
            "h": 0.294,
            "seg": 6,
            "rz": 1.5707963267948966,
            "hex": 12632772
          },
          {
            "at": [
              0.147,
              0.01,
              0.147
            ],
            "rt": 0.0275,
            "rb": 0.0253,
            "h": 0.02,
            "seg": 10,
            "hex": 7238262
          },
          {
            "at": [
              0.147,
              0.025,
              0.147
            ],
            "rt": 0.0182,
            "rb": 0.0275,
            "h": 0.012,
            "seg": 10,
            "hex": 7238262
          },
          {
            "at": [
              0.147,
              0.01,
              -0.147
            ],
            "rt": 0.0275,
            "rb": 0.0253,
            "h": 0.02,
            "seg": 10,
            "hex": 7238262
          },
          {
            "at": [
              0.147,
              0.025,
              -0.147
            ],
            "rt": 0.0182,
            "rb": 0.0275,
            "h": 0.012,
            "seg": 10,
            "hex": 7238262
          },
          {
            "at": [
              -0.147,
              0.01,
              -0.147
            ],
            "rt": 0.0275,
            "rb": 0.0253,
            "h": 0.02,
            "seg": 10,
            "hex": 7238262
          },
          {
            "at": [
              -0.147,
              0.025,
              -0.147
            ],
            "rt": 0.0182,
            "rb": 0.0275,
            "h": 0.012,
            "seg": 10,
            "hex": 7238262
          },
          {
            "at": [
              -0.147,
              0.01,
              0.147
            ],
            "rt": 0.0275,
            "rb": 0.0253,
            "h": 0.02,
            "seg": 10,
            "hex": 7238262
          },
          {
            "at": [
              -0.147,
              0.025,
              0.147
            ],
            "rt": 0.0182,
            "rb": 0.0275,
            "h": 0.012,
            "seg": 10,
            "hex": 7238262
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
    const rgb = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const tone = o.tone ?? [0.72, 0.66, 0.58], m = s * 0.06;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.clouds ?? 26); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.08 + rnd() * 0.18), a = 0.04 + rnd() * 0.1;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb(tone)},${a})`);
      g2.addColorStop(1, `rgba(${rgb(tone)},0)`);
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
      g2.addColorStop(0, `rgba(${rgb(pc)},0.55)`);
      g2.addColorStop(0.6, `rgba(${rgb(pc)},0.3)`);
      g2.addColorStop(1, `rgba(${rgb(pc)},0)`);
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
      ctx.strokeStyle = light ? `rgba(255,250,240,${0.05 + rnd() * 0.1})` : `rgba(${rgb(tone)},${0.06 + rnd() * 0.14})`;
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
  const Z = (j) => s.z0 + (s.z1 - s.z0) * j / nz;
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
  const top0 = grid(0, false), und0 = grid(-t, true);
  const parts = s.hexUnder !== void 0 ? [paint(top0, s.hexTop ?? 16777215), paint(und0, s.hexUnder)] : [top0, und0];
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
  parts.push(...s.hexUnder !== void 0 ? edges.map((g) => paint(g, s.hexUnder)) : edges);
  return mergeGeos(parts);
}
function paintTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1], rust = o.rust ?? base, chalk = o.chalk ?? base;
    const run = o.run ?? rust;
    const wrap = (draw) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    const blob = (c, x, y, r, a, ry = 1) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb(c)},${a})`);
      g.addColorStop(0.55, `rgba(${rgb(c)},${a * 0.45})`);
      g.addColorStop(1, `rgba(${rgb(c)},0)`);
      ctx.fillStyle = g;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * ry, 0, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    ctx.fillStyle = `rgb(${rgb(base)})`;
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
        ctx.fillStyle = `rgba(${rgb(rust)},${0.25 + rnd() * 0.5})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      if (rnd() < (o.runChance ?? 0.55)) {
        const w = 1 + rnd() * s * 0.01, len = s * (0.1 + rnd() * 0.35);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        g.addColorStop(0, `rgba(${rgb(run)},${0.16 + rnd() * 0.18})`);
        g.addColorStop(1, `rgba(${rgb(run)},0)`);
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
        ctx.fillStyle = `rgba(${rgb(chalk)},${0.2 + rnd() * 0.4})`;
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
      g.addColorStop(0, `rgba(${rgb(run)},${a})`);
      g.addColorStop(0.25, `rgba(${rgb(rust)},${a * 0.8})`);
      g.addColorStop(1, `rgba(${rgb(rust)},0)`);
      ctx.fillStyle = g;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, 0, w, len);
    }
    if (o.groundBand) {
      const b = o.groundBand, g = ctx.createLinearGradient(0, s, 0, s * (1 - (o.groundHeight ?? 0.22)));
      g.addColorStop(0, `rgba(${rgb(run)},${b})`);
      g.addColorStop(0.45, `rgba(${rgb(run)},${b * 0.4})`);
      g.addColorStop(1, `rgba(${rgb(run)},0)`);
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
    const rgb = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    ctx.fillStyle = rgb(o.ground ?? [0.45, 0.42, 0.38]);
    ctx.fillRect(0, 0, s, s);
    const pal = o.palette ?? [[0.85, 0.78, 0.66], [0.72, 0.62, 0.5], [0.6, 0.58, 0.55], [0.9, 0.86, 0.8]];
    const n = o.count ?? 900, rMin = s * (o.rMin ?? 0.012), rMax = s * (o.rMax ?? 0.028);
    for (let i = 0; i < n; i++) {
      const x = rnd() * s, y = rnd() * s, rx = rMin + rnd() * (rMax - rMin), ry = rx * (0.6 + rnd() * 0.5), a = rnd() * Math.PI;
      const c = pal[Math.floor(rnd() * pal.length)], k = 0.85 + rnd() * 0.3;
      ctx.fillStyle = rgb(c.map((v) => Math.min(1, v * k)));
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, rx, ry, a, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "rgba(255,255,255,0.18)";
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
    ctx.fillStyle = "#ffffff";
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
function createStainlessSteelNoodleShopTableModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Stainless Steel Noodle Shop Table";
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
    if (t.kind === "fur") tex = furTile(t.size ?? 512, t.seed ?? 13, t);
    if (t.kind === "chainlink") tex = chainlinkTile(t.size ?? 256, t.wire ?? 0.09, t.seed ?? 4);
    if (t.kind === "bamboo") tex = bambooTile(t.size ?? 512, t.strips ?? 10, t.seed ?? 6);
    if (t.kind === "stripes") tex = stripeTile(t.size ?? 256, t.bands ?? 8, t.a, t.b, t.seed ?? 9);
    if (t.kind === "poster") tex = posterTile(t.size ?? 512, t.seed ?? 8, t.lines ?? []);
    if (t.kind === "pebble") tex = pebbleTile(t.size ?? 512, t.seed ?? 21, t);
    if (t.kind === "tread") tex = treadTile(t.size ?? 256, t.seed ?? 23, t);
    if (t.kind === "tyre") tex = tyreTile(t.size ?? 256, t.seed ?? 29, t);
    if (t.kind === "culm") tex = culmTile(t.size ?? 512, t.seed ?? 31);
    if (t.kind === "sawn") tex = sawnTile(t.size ?? 512, t.seed ?? 43, t);
    if (t.kind === "thatch") tex = thatchTile(t.size ?? 512, t.seed ?? 37, t);
    if (t.kind === "tarp") tex = tarpTile(t.size ?? 512, t.seed ?? 41, t);
    bindTile(mat, tex, t.bump ?? 0);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createStainlessSteelNoodleShopTableModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogU3RhaW5sZXNzIFN0ZWVsIE5vb2RsZSBTaG9wIFRhYmxlIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDAuNiB4IDAuNzUgeCAwLjYgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cC5cbiAqIEJ1ZGdldCAobWVkaXVtKTogPD0yMDAwIHRyaWFuZ2xlcywgPD0yIGRyYXcgY2FsbHMsIDw9MiBtYXRlcmlhbHMsIDw9NCB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgU1RSRUVUIEFORCBWRU5ET1IgUFJPUFMgLS0gYSBjb25lLCBhIGJhcnJpZXIsIGEgY2FydCwgYSBzdG9vbC4gVGhlXG4gKiBzaGFyZWQgdm9jYWJ1bGFyeSBpcyB0aGUgVElOVEVEIEJPWCBhbmQgdGhlIHBvbHlsaW5lIFRVQkUgbWVyZ2VkIGludG8gb25lIGdlb21ldHJ5IHBlciBtYXRlcmlhbCxcbiAqIHdpdGggZXZlcnkgY29sb3VyIGRpZmZlcmVuY2UgaW5zaWRlIGEgbWF0ZXJpYWwgY2FycmllZCBhcyBhIHZlcnRleCBjb2xvdXIgb24gYSBXSElURSBtYXRlcmlhbCxcbiAqIGFuZCBzdXJmYWNlIGlkZW50aXR5IChjb3JydWdhdGlvbiwgZ3JpbWUgd2FzaCwgbW9zcywgcGxhbmsgam9pbnRzLCBydXN0KSBkZWxpdmVyZWQgYXMgT05FXG4gKiBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSBwZXIgbWF0ZXJpYWwgcmF0aGVyIHRoYW4gYXMgZ2VvbWV0cnkgb3IgYSBwcm9jZWR1cmFsIHRleHR1cmUgc2V0LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwic3RhaW5sZXNzLXN0ZWVsLW5vb2RsZS1zaG9wLXRhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiU3RhaW5sZXNzIFN0ZWVsIE5vb2RsZSBTaG9wIFRhYmxlXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiU3RhaW5sZXNzU3RlZWxOb29kbGVTaG9wVGFibGVcIixcbiAgICBcImVudmVsb3BlXCI6IFwiRW52ZWxvcGUgMC42IHggMC43NSB4IDAuNiBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLlxcbiAqIEJ1ZGdldCAobWVkaXVtKTogPD0yMDAwIHRyaWFuZ2xlcywgPD0yIGRyYXcgY2FsbHMsIDw9MiBtYXRlcmlhbHMsIDw9NCB1bmlxdWUgZ2VvbWV0cmllcy5cIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzdGVlbC1zYXRpblwiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQ0LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjM1LFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwic3RlZWwtZnJhbWVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4zOCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zNSxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJ0aWxlc1wiOiBbXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiY29tcG9uZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwidGFibGUtdG9wXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUHJlc3NlZCBzaGVldCB0b3Agd2l0aCByb2xsZWQgcmltXCIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcInN0ZWVsLXNhdGluXCIsXG4gICAgICAgICAgXCJsYXRoZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAuNzA2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI2OCxcbiAgICAgICAgICAgICAgICAgIDAuNzA2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI5LFxuICAgICAgICAgICAgICAgICAgMC43MVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yOTgsXG4gICAgICAgICAgICAgICAgICAwLjcyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI5OCxcbiAgICAgICAgICAgICAgICAgIDAuNzM4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI4OCxcbiAgICAgICAgICAgICAgICAgIDAuNzQ4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI3NCxcbiAgICAgICAgICAgICAgICAgIDAuNzVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMjY4LFxuICAgICAgICAgICAgICAgICAgMC43NDg3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI2MixcbiAgICAgICAgICAgICAgICAgIDAuNzQ4N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yNTYsXG4gICAgICAgICAgICAgICAgICAwLjc1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMC43NVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMzIsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExODQzNTE0LFxuICAgICAgICAgICAgICBcIndlbGRTZWFtXCI6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwibGVnLWZyYW1lXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiV2VsZGVkIGZvdXItbGVnIHR1YmUgZnJhbWUgd2l0aCBicmFjZSByaW5nIGFuZCBmb290IGNhcHNcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwic3RlZWwtZnJhbWVcIixcbiAgICAgICAgICBcInBhcmVudFwiOiBcInRhYmxlLXRvcFwiLFxuICAgICAgICAgIFwiY3lsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAuMTQ3LFxuICAgICAgICAgICAgICAgIDAuMzY2LFxuICAgICAgICAgICAgICAgIDAuMTQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMTQsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMTQsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjY5MixcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTI2MzI3NzJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAuMTQ3LFxuICAgICAgICAgICAgICAgIDAuMzY2LFxuICAgICAgICAgICAgICAgIC0wLjE0N1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDE0LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDE0LFxuICAgICAgICAgICAgICBcImhcIjogMC42OTIsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEyNjMyNzcyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMC4xNDcsXG4gICAgICAgICAgICAgICAgMC4zNjYsXG4gICAgICAgICAgICAgICAgLTAuMTQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMTQsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMTQsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjY5MixcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTI2MzI3NzJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0wLjE0NyxcbiAgICAgICAgICAgICAgICAwLjM2NixcbiAgICAgICAgICAgICAgICAwLjE0N1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDE0LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDE0LFxuICAgICAgICAgICAgICBcImhcIjogMC42OTIsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEyNjMyNzcyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLjE0NyxcbiAgICAgICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDEsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMjk0LFxuICAgICAgICAgICAgICBcInNlZ1wiOiA2LFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTI2MzI3NzJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0wLjE0NyxcbiAgICAgICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDEsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMjk0LFxuICAgICAgICAgICAgICBcInNlZ1wiOiA2LFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTI2MzI3NzJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC41LFxuICAgICAgICAgICAgICAgIDAuMTQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAxLFxuICAgICAgICAgICAgICBcImhcIjogMC4yOTQsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDYsXG4gICAgICAgICAgICAgIFwicnpcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMjYzMjc3MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAgICAgLTAuMTQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAxLFxuICAgICAgICAgICAgICBcImhcIjogMC4yOTQsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDYsXG4gICAgICAgICAgICAgIFwicnpcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMjYzMjc3MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMC4xNDcsXG4gICAgICAgICAgICAgICAgMC4wMSxcbiAgICAgICAgICAgICAgICAwLjE0N1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDI3NSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAyNTMsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjAyLFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogNzIzODI2MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMC4xNDcsXG4gICAgICAgICAgICAgICAgMC4wMjUsXG4gICAgICAgICAgICAgICAgMC4xNDdcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjAxODIsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMjc1LFxuICAgICAgICAgICAgICBcImhcIjogMC4wMTIsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcImhleFwiOiA3MjM4MjYyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLjE0NyxcbiAgICAgICAgICAgICAgICAwLjAxLFxuICAgICAgICAgICAgICAgIC0wLjE0N1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDI3NSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAyNTMsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjAyLFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogNzIzODI2MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMC4xNDcsXG4gICAgICAgICAgICAgICAgMC4wMjUsXG4gICAgICAgICAgICAgICAgLTAuMTQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMTgyLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDI3NSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDEyLFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogNzIzODI2MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTAuMTQ3LFxuICAgICAgICAgICAgICAgIDAuMDEsXG4gICAgICAgICAgICAgICAgLTAuMTQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMjc1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDI1MyxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDIsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcImhleFwiOiA3MjM4MjYyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMC4xNDcsXG4gICAgICAgICAgICAgICAgMC4wMjUsXG4gICAgICAgICAgICAgICAgLTAuMTQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMTgyLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDI3NSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDEyLFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogNzIzODI2MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTAuMTQ3LFxuICAgICAgICAgICAgICAgIDAuMDEsXG4gICAgICAgICAgICAgICAgMC4xNDdcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjAyNzUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMjUzLFxuICAgICAgICAgICAgICBcImhcIjogMC4wMixcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDcyMzgyNjJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0wLjE0NyxcbiAgICAgICAgICAgICAgICAwLjAyNSxcbiAgICAgICAgICAgICAgICAwLjE0N1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDE4MixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAyNzUsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjAxMixcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDcyMzgyNjJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICAvLyBDT0xPUiBoYXMgdG8gYmUgY2FycmllZCB0b28sIGFuZCBpdCBpcyBlYXN5IHRvIGZvcmdldDogdGhpcyBmdW5jdGlvbiBjb3BpZWQgcG9zaXRpb24sIG5vcm1hbFxuICAvLyBhbmQgdXYgb25seSwgYW5kIHRoZSBtb3NxdWUncyByaWJiZWQgZG9tZXMgbG9zdCB0aGVpciBncmVlbi1hbmQtcGFsZSBzdHJpcGluZyB0aGUgbW9tZW50IHRoZXlcbiAgLy8gd2VyZSBtZXJnZWQgd2l0aCBhbnl0aGluZy4gVGhlIGZhaWx1cmUgaXMgc2lsZW50IC0tIHRoZSBkb21lIHJlbmRlcnMsIGluIG9uZSBmbGF0IGNvbG91ciAtLSBhbmRcbiAgLy8gdG9vayBhIHdyb25nIHRoZW9yeSBhYm91dCBzUkdCIGdhbW1hIGJlZm9yZSB0aGUgYXR0cmlidXRlIGxpc3Qgd2FzIHJlYWQuIEFueSBpbnB1dCBjYXJyeWluZyBhXG4gIC8vIGNvbG91ciBtZWFucyBldmVyeSBpbnB1dCBnZXRzIG9uZSwgd2hpdGUgd2hlcmUgaXQgaGFkIG5vbmUuXG4gIGNvbnN0IGFueUNvbG9yID0gcGFydHMuc29tZSgoZykgPT4gISFnLmdldEF0dHJpYnV0ZSgnY29sb3InKSk7XG4gIGNvbnN0IGNvbG9yID0gYW55Q29sb3IgPyBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMykuZmlsbCgxKSA6IG51bGw7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgY29uc3QgYyA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgICAgaWYgKGNvbG9yICYmIGMpIHsgY29sb3JbKHYgKyBpKSAqIDNdID0gYy5nZXRYKGkpOyBjb2xvclsodiArIGkpICogMyArIDFdID0gYy5nZXRZKGkpOyBjb2xvclsodiArIGkpICogMyArIDJdID0gYy5nZXRaKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2xvcikgb3V0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9yLCAzKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuLyoqIExhdGhlR2VvbWV0cnkgc2hhcmVzIHRoZSBjb3JuZXIgdmVydGV4IGJldHdlZW4gYW4gZW5kIGRpc2MgYW5kIHRoZSBzaWRlIHdhbGwsIHNvXG4gKiAgY29tcHV0ZVZlcnRleE5vcm1hbHMgdGlsdHMgdGhlIHdhbGwncyBmaXJzdCByaW5nIDQ1IGRlZ3JlZXMgdG93YXJkIHRoZSBkaXNjIGFuZCB0aGUgaGFybmVzcyBzaGFkZXNcbiAqICBhIGRhcmsgZ3JhZGllbnQgdGhlcmUgLS0gYSByaW5nIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIGFzIGEgSE9MRSB1bmRlciB0aGUgc3RhaW5sZXNzIGJpbidzIGNhcC5cbiAqICBJbnNlcnRpbmcgYSBwb2ludCAwLjggbW0gcGFzdCBldmVyeSBzaGFycCBjb3JuZXIgKD4gNzAgZGVncmVlcykgY29uZmluZXMgdGhlIGF2ZXJhZ2VkIG5vcm1hbCB0byB0aGF0XG4gKiAgc2xpdmVyLiBDb3N0cyBvbmUgcmluZyBwZXIgY29ybmVyOyBwYXNzIGBzaGFycCA9IGZhbHNlYCB3aGVyZSB0aGUgYnVkZ2V0IGNhbm5vdCBjYXJyeSBpdC4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29ybmVycyhwdHM6IG51bWJlcltdW10sIG1pbkRlZyA9IDcwLCBlcHMgPSAwLjAwMDgpOiBudW1iZXJbXVtdIHtcbiAgY29uc3Qgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcCA9IHB0c1tpXSwgYSA9IHB0c1tpIC0gMV0sIGIgPSBwdHNbaSArIDFdO1xuICAgIGxldCBzaGFycCA9IGZhbHNlO1xuICAgIGlmIChhICYmIGIpIHtcbiAgICAgIGNvbnN0IHV4ID0gcFswXSAtIGFbMF0sIHV5ID0gcFsxXSAtIGFbMV0sIHZ4ID0gYlswXSAtIHBbMF0sIHZ5ID0gYlsxXSAtIHBbMV07XG4gICAgICBjb25zdCBsdSA9IE1hdGguaHlwb3QodXgsIHV5KSwgbHYgPSBNYXRoLmh5cG90KHZ4LCB2eSk7XG4gICAgICBpZiAobHUgPiAwICYmIGx2ID4gMCkgc2hhcnAgPSBNYXRoLmFjb3MoTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsICh1eCAqIHZ4ICsgdXkgKiB2eSkgLyAobHUgKiBsdikpKSkgPiBtaW5EZWcgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgaWYgKHNoYXJwICYmIGx1ID4gMyAqIGVwcykgb3V0LnB1c2goW3BbMF0gLSB1eCAvIGx1ICogZXBzLCBwWzFdIC0gdXkgLyBsdSAqIGVwc10pO1xuICAgICAgb3V0LnB1c2gocCk7XG4gICAgICBpZiAoc2hhcnAgJiYgbHYgPiAzICogZXBzKSBvdXQucHVzaChbcFswXSArIHZ4IC8gbHYgKiBlcHMsIHBbMV0gKyB2eSAvIGx2ICogZXBzXSk7XG4gICAgfSBlbHNlIG91dC5wdXNoKHApO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBgd2VsZFNlYW1gIGF2ZXJhZ2VzIHRoZSBub3JtYWxzIG9mIHRoZSBmaXJzdCBhbmQgbGFzdCByYWRpYWwgY29sdW1uLCB3aGljaCBpcyB3aGF0IGNsb3NlcyB0aGVcbiAqICByZXZvbHZlJ3MgU0hBRElORyBzZWFtLiBMYXRoZUdlb21ldHJ5IGFscmVhZHkgZG9lcyB0aGlzIGl0c2VsZiAtLSBpdCBleHBsaWNpdGx5IGF2ZXJhZ2VzIHRoZSB0d29cbiAqICBlbmQgY29sdW1ucyBmb3IgYSBmdWxsIDIqUEkgc3dlZXAgLS0gYW5kIHRoZSBgY29tcHV0ZVZlcnRleE5vcm1hbHMoKWAgYmVsb3cgdGhyb3dzIHRoYXQgd29ya1xuICogIGF3YXksIGJlY2F1c2UgYSByZWNvbXB1dGUgc2VlcyB0aGUgc2VhbSBhcyB0d28gdW5jb25uZWN0ZWQgZWRnZXMgYW5kIGdpdmVzIGVhY2ggdGhlIG5vcm1hbCBvZlxuICogIHRoZSBmYWNlcyBvbiBpdHMgb3duIHNpZGUgb25seS4gT24gYSBtYXR0ZSBwcm9wIHRoZSByZXN1bHRpbmcgY3JlYXNlIGlzIGludmlzaWJsZSwgd2hpY2ggaXMgd2h5XG4gKiAgaXQgc3Vydml2ZWQ7IG9uIGEgc2F0aW4gbWV0YWwgaXQgaXMgYSBoYXJkIHZlcnRpY2FsIGxpbmUgZG93biB0aGUgcmV2b2x2ZS4gTWVhc3VyZWQgb24gdGhlXG4gKiAgbm9vZGxlLXNob3AgdGFibGUncyByaW0gYXQgYXppbXV0aCAwOiBhIDMxLWxldmVsIGx1bWEgc3RlcCBhdCB4PTUxMiAoMjQ1IC0+IDIxNCBhdCB5PTI1OCksXG4gKiAgUkVWRVJTSU5HIHRvICsyNyBhdCB5PTI2NiAtLSBhIGRpc2NvbnRpbnVpdHksIG5vdCBhIGdyYWRpZW50LlxuICogIERlZmF1bHQgT0ZGIHNvIG5vIGFscmVhZHktZW1pdHRlZCBwcm9wIGNoYW5nZXMgc2hhZGluZyBpZiBpdCBpcyBldmVyIHJlLWVtaXR0ZWQ7IHRoZSByZWNvbXB1dGVcbiAqICBpcyBzdGlsbCBuZWVkZWQgZm9yIHRoZSBzaGFycC1jb3JuZXIgc3BsaXRzLCBzbyB0aGlzIHdlbGRzIGFmdGVyd2FyZHMgcmF0aGVyIHRoYW4gc2tpcHBpbmcgaXQuICovXG5mdW5jdGlvbiBsYXRoZShwdHM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyLCB5T2Zmc2V0ID0gMCwgc2hhcnAgPSB0cnVlLCB3ZWxkU2VhbSA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB2ID0gKHNoYXJwID8gc3BsaXRDb3JuZXJzKHB0cykgOiBwdHMpLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5tYXgocFswXSwgMCksIHBbMV0gKyB5T2Zmc2V0KSk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeSh2LCBzZWcpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIGlmICh3ZWxkU2VhbSkge1xuICAgIC8vIExhdGhlR2VvbWV0cnkgbGF5cyBvdXQgKHNlZyArIDEpIGNvbHVtbnMgb2YgYHJvd3NgIHZlcnRpY2VzOyBjb2x1bW4gMCBhbmQgY29sdW1uIHNlZyBhcmUgdGhlXG4gICAgLy8gc2FtZSBwbGFjZSBpbiBzcGFjZS4gQXZlcmFnZSB0aGUgcGFpciBhbmQgd3JpdGUgaXQgYmFjayB0byBib3RoLlxuICAgIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gICAgY29uc3Qgcm93cyA9IG4uY291bnQgLyAoc2VnICsgMSk7XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3dzOyByKyspIHtcbiAgICAgIGNvbnN0IGEgPSByLCBiID0gc2VnICogcm93cyArIHI7XG4gICAgICBjb25zdCB4ID0gbi5nZXRYKGEpICsgbi5nZXRYKGIpLCB5ID0gbi5nZXRZKGEpICsgbi5nZXRZKGIpLCB6ID0gbi5nZXRaKGEpICsgbi5nZXRaKGIpO1xuICAgICAgY29uc3QgbCA9IE1hdGguaHlwb3QoeCwgeSwgeikgfHwgMTtcbiAgICAgIG4uc2V0WFlaKGEsIHggLyBsLCB5IC8gbCwgeiAvIGwpO1xuICAgICAgbi5zZXRYWVooYiwgeCAvIGwsIHkgLyBsLCB6IC8gbCk7XG4gICAgfVxuICAgIG4ubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBzdGVwcGVkIHRhcGVyIGFzIGEgbGF0aGUgcHJvZmlsZTogYHJpbmdzYCBhbHRlcm5hdGluZyBvdXQvaW4gcmFkaWkgY2xpbWJpbmcgZnJvbSB5MCB0byB5MS5cbiAqICBPbmUgZ2VvbWV0cnksIG9uZSBkcmF3IGNhbGwsIGFuZCB0aGUgc3RlcCBjb3VudCBpcyBhIHByb2ZpbGUtcG9pbnQgY291bnQgcmF0aGVyIHRoYW4gYSBtZXNoXG4gKiAgY291bnQgLS0gd2hpY2ggaXMgd2hhdCBrZWVwcyBhIDIwLXJpbmcgY2hlZGkgc3BpcmUgaW5zaWRlIGEgMzItZ2VvbWV0cnkgY2VpbGluZy4gKi9cbmZ1bmN0aW9uIHJpbmdlZFRhcGVyKHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHIwOiBudW1iZXIsIHIxOiBudW1iZXIsIHJpbmdzOiBudW1iZXIsIGJ1bGdlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJpbmdzOyBpKyspIHtcbiAgICBjb25zdCB0ID0gaSAvIHJpbmdzO1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgciA9IHIwICsgKHIxIC0gcjApICogdDtcbiAgICBjb25zdCBzdGVwID0gKHkxIC0geTApIC8gcmluZ3M7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeV0pO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHkgKyBzdGVwICogMC40NV0pO1xuICAgIHB0cy5wdXNoKFtyLCB5ICsgc3RlcCAqIDAuNTVdKTtcbiAgfVxuICBwdHMucHVzaChbcjEsIHkxXSk7XG4gIHJldHVybiBwdHM7XG59XG5cblxuLyoqXG4gKiBUaGUgUkVERU5URUQgc3F1YXJlIHBsYW4gLS0gYSBzcXVhcmUgd2hvc2UgZm91ciBjb3JuZXJzIGFyZSBjdXQgYmFjayBpbiB0d28gcmlnaHQtYW5nbGVkIHN0ZXBzLlxuICogSXQgaXMgdGhlIHBsYW4gb2YgYSBUaGFpIGNoZWRpJ3MgdGVycmFjZSBhbmQgb2YgYSBwcmFuZydzIGJhc2UsIGFuZCBidWlsZGluZyBpdCBhcyBhIFNoYXBlIHRoYXRcbiAqIGlzIHRoZW4gZXh0cnVkZWQgaXMgbm90IGEgc3R5bGlzdGljIGNob2ljZTogdGhlIG9idmlvdXMgYWx0ZXJuYXRpdmUsIGEgd2lkZSBib3ggY3Jvc3NlZCBieSBhXG4gKiBkZWVwIGJveCwgcHV0cyB0aGUgdHdvIGJveGVzJyB0b3AgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSBvdmVyIHRoZWlyIHdob2xlXG4gKiBpbnRlcnNlY3Rpb24sIHdoaWNoIHotZmlnaHRzLiBPbmUgZXh0cnVzaW9uIG9mIG9uZSBjbG9zZWQgcGxhbiBoYXMgbm8gaW50ZXJpb3IgY29pbmNpZGVuY2UgYXRcbiAqIGFsbC5cbiAqXG4gKiBgYWAgaXMgdGhlIGhhbGYtd2lkdGggYWNyb3NzIHRoZSBmbGF0czsgYHJgIGlzIHRoZSBkZXB0aCBvZiBlYWNoIHJlZGVudCBzdGVwLlxuICovXG5mdW5jdGlvbiByZWRlbnRlZFNoYXBlKGE6IG51bWJlciwgcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBxdWFkID0gW1thLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGFdXTtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgcXVhZCkge1xuICAgICAgLy8gcm90OTBeaywgYXBwbGllZCBrIHRpbWVzOiAoeCwgeikgLT4gKC16LCB4KVxuICAgICAgbGV0IHB4ID0geCwgcHogPSB6O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHsgY29uc3QgdCA9IHB4OyBweCA9IC1wejsgcHogPSB0OyB9XG4gICAgICBwdHMucHVzaChbcHgsIHB6XSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYmV0d2VlbiB0d28gaGVpZ2h0cy4gRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBhbG9uZyArWiwgc28gdGhlIHJlc3VsdCBpc1xuICogIHJvdGF0ZWQgb250byArWTsgYC1NYXRoLlBJIC8gMmAgYWJvdXQgWCBtYXBzICtaIHRvICtZIGFuZCBsZWF2ZXMgdGhlIHBsYW4ncyBvd24geCBhcyB4LiAqL1xuZnVuY3Rpb24gZXh0cnVkZVNsYWIoc2hhcGU6IFRIUkVFLlNoYXBlLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeTEgLSB5MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgLy8gcm90YXRlWCgtUEkvMikgbWFwcyAoeCwgeSwgeikgLT4gKHgsIHosIC15KSwgc28gdGhlIGV4dHJ1c2lvbiBkZXB0aCBiZWNvbWVzIGhlaWdodCBhbmQgdGhlXG4gIC8vIHBsYW4ncyBvd24gc2Vjb25kIGF4aXMgYmVjb21lcyAtei4gRXZlcnkgcGxhbiBoZXJlIGlzIGZvdXItZm9sZCBzeW1tZXRyaWMsIHNvIHRoYXQgc2lnbiBpc1xuICAvLyBpbW1hdGVyaWFsOyB3aGF0IG1hdHRlcnMgaXMgdGhhdCB0aGUgc2xhYiBub3cgcnVucyBVUCBmcm9tIHk9MCBhbmQgbmVlZHMgbGlmdGluZyBieSB5MC5cbiAgZy5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKDAsIHkwLCAwKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIHNxdWFyZSBwbGFuIHdpdGggYSByZWN0YW5ndWxhciBOT1RDSCBjdXQgaW50byBpdHMgK1ggZmFjZSAtLSB0aGUgc3RhaXIgd2VsbCBvZiBhIHRlbXBsZVxuICogdGVycmFjZS4gQ3V0dGluZyB0aGUgc3RhaXIgb3V0IG9mIHRoZSBwbGFuIHJhdGhlciB0aGFuIGhhbmdpbmcgaXQgb2ZmIHRoZSBvdXRzaWRlIGlzIHdoYXQga2VlcHNcbiAqIGFuIGFzeW1tZXRyaWMgZmVhdHVyZSBpbnNpZGUgYSBzeW1tZXRyaWMgZGVjbGFyZWQgZW52ZWxvcGU6IGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDkgbVxuICogdGVycmFjZSB3b3VsZCBwdXQgdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWQgd2lkdGggb24gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRTcXVhcmUoYTogbnVtYmVyLCBub3RjaEhhbGZaOiBudW1iZXIsIHhJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2EsIC1hXSwgW2EsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCBub3RjaEhhbGZaXSxcbiAgICAgICAgICAgICAgIFthLCBub3RjaEhhbGZaXSwgW2EsIGFdLCBbLWEsIGFdLCBbLWEsIC1hXV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgUkVDVEFOR1VMQVIgcGxhbiB3aXRoIGEgbm90Y2ggY3V0IGludG8gaXRzICtaIGZhY2UuIFRoZSBzcXVhcmUgdmVyc2lvbiBhYm92ZSBpcyB3aGF0IGEgY2hlZGkgb3JcbiAqIGEgcHJhbmcgdGVycmFjZSBuZWVkczsgYSBoYWxsIHRoYXQgaXMgdHdpY2UgYXMgbG9uZyBhcyBpdCBpcyB3aWRlIG5lZWRzIHRoZSB0d28gaGFsZi1leHRlbnRzIGtlcHRcbiAqIGFwYXJ0LCBhbmQgaXRzIHN0YWlyIGlzIG9uIGEgc2hvcnQgZW5kIHJhdGhlciB0aGFuIGEgbG9uZyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRSZWN0KGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2h4LCAtaHpdLCBbaHgsIGh6XSwgW254LCBoel0sIFtueCwgeklubmVyXSwgWy1ueCwgeklubmVyXSwgWy1ueCwgaHpdLCBbLWh4LCBoel0sIFstaHgsIC1oel1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBUaGUgY3Jvc3Mtc2VjdGlvbiBvZiBvbmUgcm9vZiB0aWVyLCBhcyBhIGNsb3NlZCB0cmFwZXpvaWQgaW4gWFk6IGVhdmVzIGF0ICgrLWhhbGZCYXNlLCB5MClcbiAqIHJpc2luZyBhdCBgcGl0Y2hgIChhcyBhIHRhbmdlbnQpIHRvIGEgZmxhdCB0b3AgYXQgeTEuXG4gKlxuICogVGhhaSB0ZW1wbGUgcm9vZnMgbmVzdCwgYW5kIHRoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlIFRSVU5DQVRJT04uIFRocmVlIGZ1bGwgZ2FibGVzIGF0IG9uZVxuICogcGl0Y2ggY2Fubm90IG5lc3QgLS0gdGhlIHdpZGVzdCB0aWVyJ3MgcmlkZ2Ugd291bGQgYmUgdGhlIGhpZ2hlc3QsIHdoaWNoIGlzIHVwc2lkZSBkb3duLiBXaGF0XG4gKiBhY3R1YWxseSBoYXBwZW5zIGlzIHRoYXQgZWFjaCBsb3dlciB0aWVyIGlzIGN1dCBvZmYgYXQgdGhlIGhlaWdodCB3aGVyZSB0aGUgbmV4dCB0aWVyJ3MgZWF2ZXNcbiAqIGJlZ2luLCBhbmQgaXRzIHVwcGVyIHBhcnQgaXMgaGlkZGVuIGJlaGluZCB0aGF0IHRpZXI7IG9ubHkgdGhlIHRvcG1vc3QgdGllciBpcyBhIHJlYWwgZ2FibGUsXG4gKiBjbG9zZWQgYnkgcGFzc2luZyB5MSBhdCB0aGUgYXBleC5cbiAqL1xuZnVuY3Rpb24gdGllclByb2ZpbGUoaGFsZkJhc2U6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBwaXRjaDtcbiAgY29uc3QgaGFsZlRvcCA9IGhhbGZCYXNlIC0gaW5zZXQ7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtaGFsZkJhc2UsIHkwKTtcbiAgc2hhcGUubGluZVRvKGhhbGZCYXNlLCB5MCk7XG4gIGlmIChoYWxmVG9wID4gMC4wMikge1xuICAgIHNoYXBlLmxpbmVUbyhoYWxmVG9wLCB5MSk7XG4gICAgc2hhcGUubGluZVRvKC1oYWxmVG9wLCB5MSk7XG4gIH0gZWxzZSB7XG4gICAgc2hhcGUubGluZVRvKDAsIHkwICsgaGFsZkJhc2UgKiBwaXRjaCk7ICAgLy8gYSByZWFsIHJpZGdlOiB0aGUgdG9wbW9zdCB0aWVyIGNsb3NlcyB0byBhIHBvaW50XG4gIH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIEhJUCBST09GIHdpdGggYSBjb25jYXZlIHNsb3BlIGFuZCB1cHN3ZXB0IGNvcm5lcnMgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZiwgd2hpY2ggbm9uZSBvZiB0aGVcbiAqIG90aGVyIHNoYXBlIGhlbHBlcnMgaGVyZSBjYW4gZXhwcmVzcy5cbiAqXG4gKiBJdCBpcyBnZW5lcmF0ZWQgYXMgYSByaW5nIG9mIHJlY3RhbmdsZXMgY2xpbWJpbmcgZnJvbSB0aGUgZWF2ZXMgdG8gdGhlIHJpZGdlIHJhdGhlciB0aGFuIGFzIGFuXG4gKiBleHRydWRlZCBwcm9maWxlLCBiZWNhdXNlIGEgaGlwIHNsb3BlcyBvbiBhbGwgZm91ciBzaWRlczogYW4gZXh0cnVzaW9uIGdpdmVzIHZlcnRpY2FsIGdhYmxlIGVuZHMsXG4gKiB3aGljaCBpcyBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAqXG4gKiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyBgKDEgLSB0KV5jdXJ2ZUV4cGAsIGFuZCB0aGUgZXhwb25lbnQgbXVzdCBiZSBBQk9WRSBvbmUuIFRoZSBzbG9wZVxuICogYXQgYW55IGhlaWdodCBpcyBkeS9keCwgc28gYSBwbGFuIHRoYXQgc2hyaW5rcyBGQVNUIGZvciBhIGdpdmVuIHJpc2UgaXMgYSBzaGFsbG93IHNsb3BlOiB3aXRoXG4gKiBxID4gMSB0aGUgZGVyaXZhdGl2ZSBxKDEtdCleKHEtMSkgaXMgbGFyZ2UgYXQgdGhlIGVhdmVzIGFuZCBzbWFsbCBhdCB0aGUgcmlkZ2UsIHdoaWNoIGlzIHNoYWxsb3dcbiAqIGVhdmVzIGFuZCBhIHN0ZWVwIHJpZGdlIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YuIEJlbG93IG9uZSBpdCBpcyB0aGUgb3RoZXIgd2F5IHJvdW5kIGFuZCBidWlsZHMgYVxuICogZmxhdC10b3BwZWQgdGVudCwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYXR0ZW1wdCBoZXJlIHJlbmRlcmVkLiBBIGxpbmVhciBzaHJpbmsgZ2l2ZXMgdGhlXG4gKiBzdHJhaWdodCBweXJhbWlkIG9mIGEgaGlwIHJvb2YgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuXG4gKlxuICogYGNvcm5lckxpZnRgIHJhaXNlcyBhbmQgcHVzaGVzIG91dCB0aGUgZm91ciBlYXZlcyBjb3JuZXJzLCB0YXBlcmluZyBhd2F5IGJ5IGEgdGhpcmQgb2YgdGhlIHdheVxuICogdXAuIFRoYXQgdXBzd2VlcCBpcyB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmcgdGhpbmcgYWJvdXQgdGhlIHJvb2YsIGFuZCBpdCBpcyB3aHkgdGhlIHBsYW5cbiAqIGhhbGYtd2lkdGggcGFzc2VkIGluIG11c3QgbGVhdmUgcm9vbTogdGhlIGNvcm5lcnMgZW5kIHVwIGZ1cnRoZXIgb3V0IHRoYW4gdGhlIGVhdmVzIGxpbmUuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGNsb3NlZCBzb2xpZCAtLSBvdXRlciBzdXJmYWNlLCBhIHNvZmZpdCBgZHJvcGAgYmVsb3cgdGhlIGVhdmVzLCBhbmQgYSBmYXNjaWEgYmFuZFxuICogYmV0d2VlbiB0aGVtLiBBbiBvcGVuIHNoZWxsIHdvdWxkIGxldCB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55XG4gKiBsb3cgYW5nbGUuXG4gKi9cbmZ1bmN0aW9uIGhpcFJvb2YoaHg6IG51bWJlciwgaHo6IG51bWJlciwgcmlkZ2VIYWxmWjogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICBjdXJ2ZUV4cDogbnVtYmVyLCBzdGVwczogbnVtYmVyLCBkcm9wOiBudW1iZXIsIGNvcm5lckxpZnQ6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gRUlHSFQgcG9pbnRzIHBlciByaW5nLCBub3QgZm91cjogdGhlIGZvdXIgY29ybmVycyBhbmQgdGhlIGZvdXIgZWRnZSBtaWRwb2ludHMuIFdpdGggZm91ciB0aGVcbiAgLy8gY29ybmVyIGxpZnQgaGFzIG5vd2hlcmUgdG8gZmFsbCBhd2F5IHRvIGFuZCByYWlzZXMgdGhlIEVOVElSRSBlYXZlcyBsaW5lLCB3aGljaCBidWlsdCBhIHNhZGRsZVxuICAvLyBpbnN0ZWFkIG9mIGEgcm9vZi4gVGhlIG1pZHBvaW50cyBhcmUgd2hhdCBob2xkIHRoZSBlYXZlcyBkb3duIGJldHdlZW4gdGhlIGNvcm5lcnMuXG4gIC8vXG4gIC8vIFRoZSBvcmRlciBpcyAoK3gsLXopLCBtaWQsICgteCwteiksIG1pZCwgKC14LCt6KSwgbWlkLCAoK3gsK3opLCBtaWQsIHdoaWNoIGlzIGNvdW50ZXItY2xvY2t3aXNlXG4gIC8vIHNlZW4gZnJvbSBBQk9WRSAtLSB0aGUgd2luZGluZyBhbiB1cHdhcmQtZmFjaW5nIHN1cmZhY2UgbmVlZHMuIFdvdW5kIHRoZSBvdGhlciB3YXkgdGhlIHdob2xlXG4gIC8vIHJvb2YgcmVuZGVycyBpbnNpZGUgb3V0LCB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBibGFjayBtZW1icmFuZSByYXRoZXIgdGhhbiBhIG1pc3Rha2UuXG4gIGNvbnN0IHJpbmcgPSAodDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEgLSB0LCBjdXJ2ZUV4cCk7XG4gICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB0IC8gMC4zNCksIDIpO1xuICAgIGNvbnN0IGxpZnQgPSBjb3JuZXJMaWZ0ICogZywgb3V0ID0gMSArIDAuMDQ1ICogZztcbiAgICBjb25zdCBheCA9IGh4ICogZiAqIG91dCwgYXogPSAocmlkZ2VIYWxmWiArIChoeiAtIHJpZGdlSGFsZlopICogZikgKiBvdXQ7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCBjID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSArIGxpZnQsIHpdO1xuICAgIGNvbnN0IG0gPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5LCB6XTtcbiAgICByZXR1cm4gW2MoYXgsIC1heiksIG0oMCwgLWF6KSwgYygtYXgsIC1heiksIG0oLWF4LCAwKSxcbiAgICAgICAgICAgIGMoLWF4LCBheiksIG0oMCwgYXopLCBjKGF4LCBheiksIG0oYXgsIDApXTtcbiAgfTtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBsZXQgcHJldiA9IHJpbmcoMCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSByaW5nKGkgLyBzdGVwcyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgICBwdXNoKHByZXZba10sIHByZXZbazJdLCBjdXJbazJdKTtcbiAgICAgIHB1c2gocHJldltrXSwgY3VyW2syXSwgY3VyW2tdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICAvLyBGYXNjaWEgYmFuZCBhbmQgc29mZml0LCBzbyB0aGUgcm9vZiBpcyBhIHNvbGlkIHJhdGhlciB0aGFuIGEgc2hlbGwuIEFuIG9wZW4gc2hlbGwgbGV0cyB0aGVcbiAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55IGxvdyBhbmdsZS5cbiAgY29uc3QgZSA9IHJpbmcoMCk7XG4gIGNvbnN0IGxvdyA9IGUubWFwKChwKSA9PiBbcFswXSwgcFsxXSAtIGRyb3AsIHBbMl1dKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgIHB1c2gobG93W2tdLCBlW2tdLCBlW2syXSk7XG4gICAgcHVzaChsb3dba10sIGVbazJdLCBsb3dbazJdKTtcbiAgfVxuICBmb3IgKGxldCBrID0gMTsgayA8IDc7IGsrKykgcHVzaChsb3dbMF0sIGxvd1trICsgMV0sIGxvd1trXSk7ICAgLy8gc29mZml0IGZhbiwgZmFjaW5nIGRvd25cblxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFJJQkJFRCBkb21lIC0tIGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIHdob3NlIHJhZGl1cyBpcyBtb2R1bGF0ZWQgYXJvdW5kIHRoZSBheGlzLCBzbyBpdCByZWFkc1xuICogYXMgdGhlIG1lbG9uLXJpYmJlZCBkb21lIG9mIGEgbW9zcXVlIHJhdGhlciB0aGFuIGEgc21vb3RoIGhlbWlzcGhlcmUuXG4gKlxuICogTGF0aGVHZW9tZXRyeSBjYW5ub3QgZG8gdGhpczogYSBsYXRoZSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdCBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCByaWJzIGFyZVxuICogYSB2YXJpYXRpb24gQVJPVU5EIHRoZSBheGlzLCBub3QgYWxvbmcgaXQuIFNvIHRoZSBzdXJmYWNlIGlzIGdlbmVyYXRlZCBkaXJlY3RseSwgc2FtcGxpbmdcbiAqIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgIHBlciBzZWN0b3IuIFRoZSByaWJzIGFyZSB0aGUgcmVhc29uIHRoZSBkb21lIGlzIHJlY29nbmlzYWJsZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbSAtLSBhIHNtb290aCBncmVlbiBoZW1pc3BoZXJlIHJlYWRzIGFzIGEgd2F0ZXIgdGFuay5cbiAqL1xuZnVuY3Rpb24gcmliYmVkRG9tZShwcm9maWxlOiBudW1iZXJbXVtdLCByaWJzOiBudW1iZXIsIGFtcDogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsbGV5PzogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgY29sOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUaGUgcmlicyBhcmUgbm90IG9ubHkgYSBzaGFwZS4gT24gdGhlIG1vc3F1ZSdzIGRvbWVzIHRoZSBjcmVzdHMgYXJlIHBhbGUgYW5kIHRoZSB2YWxsZXlzIGFyZVxuICAvLyBncmVlbiwgYW5kIHRoYXQgc3RyaXBlIGlzIG1vc3Qgb2Ygd2hhdCB0aGUgZG9tZSByZWFkcyBhcyBhdCBkaXN0YW5jZS4gSXQgaXMgY2FycmllZCBhcyBhXG4gIC8vIHBlci12ZXJ0ZXggTVVMVElQTElFUiBvZmYgdGhlIHNhbWUgY29zaW5lIHRoYXQgc2hhcGVzIHRoZSByaWIgLS0gdHdvIG1lYXN1cmVtZW50cywgdGhlIGNyZXN0XG4gIC8vIGNvbG91ciBvbiB0aGUgbWF0ZXJpYWwgYW5kIHRoZSB2YWxsZXkgYXMgdGhlIHJhdGlvIGJldHdlZW4gdGhlbSAtLSBzbyB0aGUgc3RyaXBpbmcgY29zdHMgYW5cbiAgLy8gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgdGV4dHVyZSBzZXQgb3IgYSBzZWNvbmQgZHJhdyBjYWxsLlxuICBjb25zdCB0aW50ID0gKGo6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsbGV5KSByZXR1cm4gWzEsIDEsIDFdO1xuICAgIC8vIFJhaXNlZCB0byAwLjU1IHJhdGhlciB0aGFuIGxlZnQgbGluZWFyLiBBIGNvc2luZSBzcGVuZHMgaGFsZiBpdHMgYXJlYSBuZWFyIGVhY2ggZXh0cmVtZSwgYW5kXG4gICAgLy8gdGhhdCByZW5kZXJzIGEgZG9tZSB0aGF0IGlzIHBhbGUgb3ZlcmFsbCB3aGVyZSB0aGUgcGxhdGUncyBpcyBncmVlbiBvdmVyYWxsOiB0aGUgY3Jlc3QgaXMgYVxuICAgIC8vIG5hcnJvdyBoaWdobGlnaHQgb24gYSByZWFsIHJpYiwgbm90IGhhbGYgb2YgaXQuIFRoZSBleHBvbmVudCB3aWRlbnMgdGhlIHZhbGxleS5cbiAgICBjb25zdCBmID0gTWF0aC5wb3coKDEgLSBNYXRoLmNvcyhyaWJzICogKChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnKSkpIC8gMiwgMC41NSk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFBPSU5URUQgYXJjaCBwbGF0ZSAtLSB0aGUgdHdvLWNlbnRyZWQgYXJjaCBvZiBhIG1vc3F1ZSwgbm90IHRoZSBoYWxmLXJvdW5kIG9mIGEgUm9tYW4gb25lLlxuICogYGFyY2hlZFBsYXRlYCBhYm92ZSBzd2VlcHMgYSBzaW5nbGUgc2VtaWNpcmNsZSwgd2hpY2ggaXMgdGhlIHdyb25nIGFyY2ggaGVyZSBhbmQgcmVhZHMgYXMgYVxuICogcmFpbHdheSB2aWFkdWN0OyB0aGlzIG9uZSBydW5zIGVhY2ggc2lkZSB1cCB0byBhIHNoYXJlZCBhcGV4IHRocm91Z2ggYSBxdWFkcmF0aWMsIHdoaWNoIGdpdmVzIHRoZVxuICogb2dlZSBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnRlZEFyY2hTaGFwZSh3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBidWlsZCA9ICh0YXJnZXQ6IFRIUkVFLlNoYXBlIHwgVEhSRUUuUGF0aCwgd3c6IG51bWJlciwgc3A6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3dyAvIDI7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2wpO1xuICAgIHRhcmdldC5saW5lVG8oaHcsIHNwKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhodywgc3AgKyByaXNlICogMC43MiwgMCwgc3AgKyByaXNlKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtaHcsIHNwICsgcmlzZSAqIDAuNzIsIC1odywgc3ApO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzbCk7XG4gICAgdGFyZ2V0LmNsb3NlUGF0aCgpO1xuICB9O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBidWlsZChzaGFwZSwgdywgc3ByaW5nLCBhcGV4UmlzZSwgc2lsbCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgYnVpbGQocCwgaG9sZS53LCBob2xlLnNwcmluZywgaG9sZS5hcGV4UmlzZSwgaG9sZS5zaWxsKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFRBUEVSSU5HIFRVQkUgYWxvbmcgK1osIGJ1aWx0IGZyb20gYSBsaXN0IG9mIHN0YXRpb25zLiBFYWNoIHN0YXRpb24gaXNcbiAqIFt6LCBjZW50cmVYLCBjZW50cmVZLCByYWRpdXNYLCByYWRpdXNZXSwgYW5kIGNvbnNlY3V0aXZlIHN0YXRpb25zIGFyZSBqb2luZWQgYnkgYSByaW5nIG9mIGBzZWdgXG4gKiBwb2ludHMsIHNvIHRoZSByYWRpdXMsIHRoZSBjZW50cmUgYW5kIHRoZSBlbGxpcHNlIHJhdGlvIGNhbiBhbGwgdmFyeSBhbG9uZyB0aGUgbGVuZ3RoLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgT1JHQU5JQyBmb3JtIGluIHRoZSB3aG9sZSBraXQsIGFuZCBpdCBleGlzdHMgZm9yIG9uZSBwcm9wOiBhIHJlY2xpbmluZyBmaWd1cmUgaXNcbiAqIGEgbG9uZyBzb2Z0IG1hc3Mgd2hvc2Ugc2VjdGlvbiBjaGFuZ2VzIGF0IGV2ZXJ5IHBvaW50IGFsb25nIGl0IC0tIHNob3VsZGVyIHRvIHdhaXN0IHRvIGhpcCB0b1xuICogY2FsZiAtLSBhbmQgbmVpdGhlciBhIGxhdGhlIG5vciBhIHN0YWNrIG9mIGJveGVzIGNhbiBzYXkgdGhhdC4gQSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIGx5aW5nXG4gKiBib2R5IGlzIG5vdCBhIGxvdy1wb2x5IGJvZHksIGl0IGlzIGEgcGlsZSBvZiBsdWdnYWdlLlxuICpcbiAqIEEgc3RhdGlvbiB3aXRoIGEgcmFkaXVzIGF0IG9yIG5lYXIgemVybyBjbG9zZXMgdGhlIHR1YmUsIHNvIHRoZSBlbmRzIGNhbiBiZSBjYXBwZWQgYnkgdGhlXG4gKiBzdGF0aW9uIGxpc3QgaXRzZWxmIHJhdGhlciB0aGFuIGJ5IGEgc2VwYXJhdGUgZmFuLlxuICovXG5mdW5jdGlvbiB0dWJlQWxvbmcoc3RhdGlvbnM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBJTkRFWEVELCB3aXRoIHNoYXJlZCByaW5nIHZlcnRpY2VzLCBzbyBjb21wdXRlVmVydGV4Tm9ybWFscyBhdmVyYWdlcyBhY3Jvc3MgdGhlIHF1YWRzIGFuZCB0aGVcbiAgLy8gc3VyZmFjZSBzaGFkZXMgc21vb3RoLiBUaGUgZmlyc3QgYnVpbGQgZW1pdHRlZCBsb29zZSB0cmlhbmdsZXMsIGFuZCBhIGZsYXQtc2hhZGVkIHNvZnQgYm9keVxuICAvLyBzaG93cyBldmVyeSBzdGF0aW9uIGFzIGEgY3JlYXNlIC0tIGEgcmVjbGluaW5nIGZpZ3VyZSB0aGF0IGxvb2tlZCBjcnVtcGxlZCByYXRoZXIgdGhhbiBkcmFwZWQuXG4gIC8vXG4gIC8vIEEgc2l4dGggc3RhdGlvbiBlbGVtZW50IGBmbGF0WWAgQ0xBTVBTIHRoZSByaW5nJ3MgdW5kZXJzaWRlIHRvIHRoYXQgaGVpZ2h0LiBBIGJvZHkgcmVzdGluZyBvblxuICAvLyB0aGUgZ3JvdW5kIGlzIG5vdCBhIGZsb2F0aW5nIGVsbGlwc2U6IGl0IHNwcmVhZHMgd2hlcmUgaXQgYmVhcnMsIGFuZCBhbiB1bmNsYW1wZWQgdHViZSByZWFkcyBhc1xuICAvLyBhIHNhdXNhZ2Ugb24gYSB0YWJsZS4gVGhlIGNsYW1wIGlzIGEgc29mdCBvbmUgLS0gdGhlIHJpbmcga2VlcHMgaXRzIHdpZHRoIGFuZCBsb3NlcyBpdHMgZHJvb3AgLS1cbiAgLy8gc28gdGhlIGNyZWFzZSBpdCBsZWF2ZXMgaXMgdGhlIGNvbnRhY3QgZWRnZSByYXRoZXIgdGhhbiBhIGN1dC5cbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbeiwgY3gsIGN5LCByeCwgcnksIGZsYXRZXSA9IHN0YXRpb25zW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IHRoID0gaiAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5zaW4odGgpICogcng7XG4gICAgICBsZXQgeSA9IGN5ICsgTWF0aC5jb3ModGgpICogcnk7XG4gICAgICBpZiAoZmxhdFkgIT09IHVuZGVmaW5lZCAmJiB5IDwgZmxhdFkpIHkgPSBmbGF0WTtcbiAgICAgIHBvcy5wdXNoKHgsIHksIHopO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjID0gKGkgKyAxKSAqIHNlZyArIChqICsgMSkgJSBzZWcsIGQgPSBpICogc2VnICsgKGogKyAxKSAlIHNlZztcbiAgICAgIGlkeC5wdXNoKGEsIGIsIGMsIGEsIGMsIGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgocG9zLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5zZXRJbmRleChpZHgpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2ZWhpY2xlIGhlbHBlcnMgKi9cblxuLyoqIFBhaW50IGEgd2hvbGUgZ2VvbWV0cnkgb25lIHZlcnRleCBjb2xvdXIuIEV2ZXJ5IHZlaGljbGUgbWF0ZXJpYWwgaGVyZSBpcyBXSElURSB3aXRoXG4gKiAgdmVydGV4Q29sb3JzIG9uLCBzbyBhIGNvbG91ciBkaWZmZXJlbmNlIGNvc3RzIGFuIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIG1hdGVyaWFsOiB0aGUgYm9keSdzXG4gKiAgdHdvLXRvbmUsIHRoZSB0eXJlIGFnYWluc3QgaXRzIHJpbSwgYW4gYW1iZXIgaW5kaWNhdG9yIG9uIGEgYmxhY2sgYnVtcGVyIGFsbCByaWRlIG9uZSBzaGFkZXIuXG4gKiAgVmVydGV4IGNvbG91cnMgbXVsdGlwbHkgaW4gTElORUFSIHNwYWNlLCBzbyB0aGUgaGV4IGlzIGNvbnZlcnRlZCB0aHJvdWdoIFRIUkVFLkNvbG9yLCB3aGljaFxuICogIGRvZXMgdGhlIHNSR0ItdG8tbGluZWFyIHN0ZXAuICovXG5mdW5jdGlvbiB0aW50R2VvKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCk7XG4gIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEJveC1wcm9qZWN0IHdvcmxkLW1ldHJlIFVWcyBzbyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIChtdWQsIHJ1c3QsIGNvcnJ1Z2F0aW9uKSByZXBlYXRzXG4gKiAgYXQgYSByZWFsIHNpemUgb24gZXZlcnkgZmFjZS4gYHNjYWxlYCBpcyBtZXRyZXMgcGVyIHRpbGUuIFRoZSBkb21pbmFudCBub3JtYWwgYXhpcyBwaWNrcyB0aGVcbiAqICBwYWlyIG9mIHdvcmxkIGF4ZXMgdXNlZCwgc28gYSByb29mIHJlYWRzICh4LCB6KSBhbmQgYSBzaWRlIHJlYWRzICh6LCB5KS4gKi9cbmZ1bmN0aW9uIHdvcmxkVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG5ybS5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgIGlmIChheCA+PSBheSAmJiBheCA+PSBheikgeyB1ID0gcC5nZXRaKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgZWxzZSBpZiAoYXkgPj0gYXopIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WihpKTsgfVxuICAgIGVsc2UgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKipcbiAqIFNJREUtUFJPRklMRSBFWFRSVVNJT046IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyAodGhlIHZlaGljbGUncyBzaWRlIHNpbGhvdWV0dGUsIHdoZWVsXG4gKiBhcmNoZXMgaW5jbHVkZWQgYXMgbm90Y2hlcykgc3dlcHQgYWNyb3NzIHRoZSBmdWxsIHdpZHRoLCB0aGVuIHNoYXBlZCBwZXIgdmVydGV4OlxuICpcbiAqICAtIGB0dW1ibGVgICBuYXJyb3dzIHRoZSBzZWN0aW9uIGFib3ZlIHRoZSBiZWx0IGxpbmUgLS0geCBpcyBzY2FsZWQgYnkgKDEgLSBrICogdCkgd2hlcmUgdCBydW5zXG4gKiAgICAgICAgICAgICAgMCBhdCBgYmVsdGAgdG8gMSBhdCBgcm9vZmAuIFRoYXQgaXMgdGhlIHR1bWJsZWhvbWUgb2YgYSByZWFsIGNhciBib2R5IGFuZCBpcyB3aGF0XG4gKiAgICAgICAgICAgICAgc3RvcHMgdGhlIGdsYXNzaG91c2UgcmVhZGluZyBhcyBhIGJveCBvbiBhIGJveC5cbiAqICAtIGBwbGFuYCAgICByb3VuZHMgdGhlIHBsYW4gYXQgdGhlIG5vc2UgYW5kIHRhaWw6IGFuIG9wdGlvbmFsIGxpc3Qgb2YgW3osIHhTY2FsZV0gc3RhdGlvbnNcbiAqICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWQgYWxvbmcgeiwgc28gYSBib25uZXQgY2FuIHRhcGVyIHRvIDAuOSBvZiB0aGUgd2lkdGggYXQgdGhlIGJ1bXBlciBsaW5lLlxuICpcbiAqIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgaW4gaXRzIG93biAodSwgdiwgZGVwdGgpIGZyYW1lOyByb3RhdGVZKC1QSS8yKSBtYXBzIGRlcHRoIHRvIC14IGFuZCB1IHRvXG4gKiB3b3JsZCB6LCBhbmQgdGhlIHRyYW5zbGF0ZSByZS1jZW50cmVzIHRoZSBzbGFiIG9uIHggPSAwLiBBbnkgc2hhcGluZyBpcyBhcHBsaWVkIEFGVEVSIHRoYXQsIGFuZFxuICogbm9ybWFscyBhcmUgcmVjb21wdXRlZCBsYXN0IHNvIHRoZSBzaGFkZWQgZmFjZXMgZm9sbG93IHRoZSBzaGFwZWQgc3VyZmFjZS5cbiAqL1xuZnVuY3Rpb24gc2lkZUV4dHJ1ZGUocHJvZmlsZTogbnVtYmVyW11bXSwgd2lkdGg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW4/OiBudW1iZXJbXVtdLCBjdXJ2ZVNlZ21lbnRzPzogbnVtYmVyIH0gPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHByb2ZpbGVbMF1bMF0sIHByb2ZpbGVbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2ZpbGUubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwcm9maWxlW2ldWzBdLCBwcm9maWxlW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB3aWR0aCwgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlU2VnbWVudHM6IG9wdHMuY3VydmVTZWdtZW50cyA/PyA2IH0pO1xuICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUod2lkdGggLyAyLCAwLCAwKTtcbiAgc2hhcGVXaWR0aChnLCBvcHRzKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBUaGUgcGVyLXZlcnRleCB4IHNoYXBpbmcgc2hhcmVkIGJ5IHRoZSBib2R5IGFuZCBpdHMgZ2xhc3MgYmFuZCwgc28gYSBwYW5lIG9mZnNldCA1IG1tIHByb3VkIG9mXG4gKiAgdGhlIGJvZHkgc3RheXMgNSBtbSBwcm91ZCBhZnRlciBib3RoIGFyZSBuYXJyb3dlZCBieSB0aGUgc2FtZSBmdW5jdGlvbi4gKi9cbmZ1bmN0aW9uIHNoYXBlV2lkdGgoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksXG4gICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sIHBsYW4/OiBudW1iZXJbXVtdIH0pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGxldCB4ID0gcC5nZXRYKGkpOyBjb25zdCB5ID0gcC5nZXRZKGkpLCB6ID0gcC5nZXRaKGkpO1xuICAgIGlmIChvcHRzLnR1bWJsZSkge1xuICAgICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh5IC0gb3B0cy50dW1ibGUuYmVsdCkgLyAob3B0cy50dW1ibGUucm9vZiAtIG9wdHMudHVtYmxlLmJlbHQpKSk7XG4gICAgICB4ICo9IDEgLSBvcHRzLnR1bWJsZS5rICogdDtcbiAgICB9XG4gICAgaWYgKG9wdHMucGxhbiAmJiBvcHRzLnBsYW4ubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc3QgPSBvcHRzLnBsYW47XG4gICAgICBsZXQgcyA9IHN0WzBdWzFdO1xuICAgICAgaWYgKHogPD0gc3RbMF1bMF0pIHMgPSBzdFswXVsxXTtcbiAgICAgIGVsc2UgaWYgKHogPj0gc3Rbc3QubGVuZ3RoIC0gMV1bMF0pIHMgPSBzdFtzdC5sZW5ndGggLSAxXVsxXTtcbiAgICAgIGVsc2UgZm9yIChsZXQgayA9IDA7IGsgPCBzdC5sZW5ndGggLSAxOyBrKyspIHtcbiAgICAgICAgaWYgKHogPj0gc3Rba11bMF0gJiYgeiA8PSBzdFtrICsgMV1bMF0pIHtcbiAgICAgICAgICBjb25zdCB1ID0gKHogLSBzdFtrXVswXSkgLyAoc3RbayArIDFdWzBdIC0gc3Rba11bMF0pO1xuICAgICAgICAgIHMgPSBzdFtrXVsxXSArIChzdFtrICsgMV1bMV0gLSBzdFtrXVsxXSkgKiB1OyBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgeCAqPSBzO1xuICAgIH1cbiAgICBwLnNldFgoaSwgeCk7XG4gIH1cbiAgcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbn1cblxuLyoqIEEgc2VtaWNpcmN1bGFyIHdoZWVsLWFyY2ggbm90Y2ggYXMgcHJvZmlsZSBwb2ludHMsIHRvIGJlIHNwbGljZWQgaW50byBhIHNpZGUgcHJvZmlsZSB0aGF0IHJ1bnNcbiAqICBhbG9uZyB0aGUgc2lsbCBmcm9tICt6IHRvIC16IChpLmUuIHogREVDUkVBU0lORykuIGBuYCBzZWdtZW50czsgdGhlIGFyYyBpcyB0aGUgVE9QIGhhbGYuICovXG5mdW5jdGlvbiBhcmNoTm90Y2goemM6IG51bWJlciwgeVNpbGw6IG51bWJlciwgcjogbnVtYmVyLCBuID0gNyk6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJIC8gbjsgICAgICAgICAgICAgICAvLyAwIC4uIFBJLCBmcm9tICt6IHJvdW5kIHRoZSB0b3AgdG8gLXpcbiAgICBwdHMucHVzaChbemMgKyBNYXRoLmNvcyhhKSAqIHIsIHlTaWxsICsgTWF0aC5zaW4oYSkgKiByXSk7XG4gIH1cbiAgcmV0dXJuIHB0cztcbn1cblxuLyoqXG4gKiBBIFdIRUVMOiBvbmUgbGF0aGUgYWJvdXQgdGhlIGF4bGUuIFRoZSBwcm9maWxlIHJ1bnMgZnJvbSB0aGUgaHViIGZhY2Ugb24gb25lIHNpZGUgb3ZlciB0aGUgcmltXG4gKiBsaXAsIHRoZSB0eXJlIHNpZGV3YWxsLCB0aGUgdHJlYWQgYW5kIGJhY2sgZG93biB0aGUgZmFyIHNpZGUsIHNvIHRoZSB3aGVlbCBpcyBhIGNsb3NlZCBzb2xpZCB3aXRoXG4gKiBubyBvcGVuIGVuZCBmb3IgdGhlIHR1cm50YWJsZSBnYXRlIHRvIHJlYWQgdGhyb3VnaC4gUmV2b2x2ZWQgYWJvdXQgWSBhbmQgdGhlbiBsYWlkIG9uIFgsIHNvIHRoZVxuICogYXhsZSBpcyB0aGUgeCBheGlzIGFuZCB0aGUgd2hlZWwgcm9sbHMgYWJvdXQgaXQgLS0gd2hpY2ggaXMgdGhlIGF4aXMgaXRzIHBpdm90IGRlY2xhcmVzLlxuICpcbiAqIFR3byB2ZXJ0ZXggY29sb3VyczogYHJpbUhleGAgb24gdGhlIGh1YiBhbmQgcmltIHBvaW50cywgYHR5cmVIZXhgIG9uIHRoZSBzaWRld2FsbCBhbmQgdHJlYWQuIFRoZVxuICogbGF0aGUgb3JkZXJzIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IgKGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgd2hpY2ggaXMgd2hhdCBsZXRzIGFcbiAqIHBlci1wcm9maWxlLXBvaW50IGNvbG91ciBiZSB3cml0dGVuIHdpdGhvdXQgYSBzZWNvbmQgZ2VvbWV0cnkuXG4gKi9cbmZ1bmN0aW9uIHdoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICB0eXJlSGV4OiBudW1iZXIsIHJpbUhleDogbnVtYmVyLCBkaXNoID0gMC41NSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgaHcgPSBoYWxmVztcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjMwLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjYyLCAtaHcgKiAwLjgwXSwgW3JSaW0sIC1odyAqIDAuODZdLCBbclJpbSwgLWh3ICogMC45OF0sXG4gICAgW3JUeXJlICogMC45MywgLWh3XSwgW3JUeXJlLCAtaHcgKiAwLjcyXSwgW3JUeXJlLCBodyAqIDAuNzJdLCBbclR5cmUgKiAwLjkzLCBod10sXG4gICAgW3JSaW0sIGh3ICogMC45OF0sIFtyUmltLCBodyAqIDAuODZdLCBbclJpbSAqIDAuNjIsIGh3ICogMC44MF0sIFtyUmltICogMC4zMCwgaHcgKiBkaXNoXSwgWzAsIGh3ICogZGlzaF0sXG4gIF07XG4gIGNvbnN0IHJpbVBvaW50ID0gKGo6IG51bWJlcikgPT4gaiA8PSA0IHx8IGogPj0gOTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgY29uc3QgY3QgPSBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCksIGNyID0gbmV3IFRIUkVFLkNvbG9yKHJpbUhleCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYyA9IHJpbVBvaW50KGkgJSBwdHMubGVuZ3RoKSA/IGNyIDogY3Q7XG4gICAgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIGcucm90YXRlWihNYXRoLlBJIC8gMik7ICAgIC8vIGxhdGhlIGF4aXMgWSAtPiBheGxlIG9uIFhcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIFdpcmUtc3Bva2VkIHdoZWVsIGRyZXNzaW5nOiBgbmAgdGhpbiBib3hlcyByYWRpYXRpbmcgZnJvbSB0aGUgaHViLCBsYWNlZCBhbHRlcm5hdGVseSB0byBlYWNoXG4gKiAgc2lkZSBvZiB0aGUgcmltIHNvIHRoZXkgY3Jvc3MgdGhlIHdheSByZWFsIHNwb2tlcyBkby4gTWVyZ2VkIGludG8gdGhlIHdoZWVsIGdlb21ldHJ5IHNvIHRoZVxuICogIHdoZWVsIHN0YXlzIE9ORSBpbnN0YW5jZWQgZ2VvbWV0cnkuICovXG5mdW5jdGlvbiBzcG9rZXMockh1YjogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIG46IG51bWJlciwgaGV4OiBudW1iZXIsIHQgPSAwLjAwNiwgcHJpc20gPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAqIDIgLyBuO1xuICAgIGNvbnN0IHNpZGUgPSAoaSAlIDIgPT09IDAgPyAxIDogLTEpICogaGFsZlcgKiAwLjM1O1xuICAgIGNvbnN0IGxlbiA9IHJSaW0gLSBySHViO1xuICAgIC8vIGBwcmlzbWA6IGFuIG9wZW4gdGhyZWUtc2lkZWQgcHJpc20gYXQgc2l4IHRyaWFuZ2xlcyB3aGVyZSB0aGUgYm94IGNvc3RzIHR3ZWx2ZSAtLSBhIHdpcmVcbiAgICAvLyBzcG9rZSBoYXMgbm8gcmVzb2x2YWJsZSBzZWN0aW9uIGF0IHByb3AgZGlzdGFuY2UsIGFuZCAyOCBvZiB0aGVtIG9uIHRocmVlIHdoZWVscyBpcyB0aGVcbiAgICAvLyBkaWZmZXJlbmNlIGJldHdlZW4gYSBsYXJnZSBwcm9wIGluc2lkZSBpdHMgdHJpYW5nbGUgY2VpbGluZyBhbmQgb25lIG92ZXIgaXRcbiAgICBjb25zdCBnID0gcHJpc20gPyBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSh0ICogMC42MiwgdCAqIDAuNjIsIGxlbiwgMywgMSwgdHJ1ZSkgOiBuZXcgVEhSRUUuQm94R2VvbWV0cnkodCwgbGVuLCB0KTtcbiAgICBnLnRyYW5zbGF0ZSgwLCBySHViICsgbGVuIC8gMiwgMCk7XG4gICAgZy5yb3RhdGVYKE1hdGguYXRhbjIoc2lkZSwgbGVuKSAqIDAuNik7XG4gICAgZy5yb3RhdGVYKDApOyBnLnRyYW5zbGF0ZSgwLCAwLCBzaWRlICogMC41KTtcbiAgICBnLnJvdGF0ZVgoYSk7ICAgICAgICAgICAgLy8gcmFkaWF0ZSBhcm91bmQgdGhlIGF4bGUgKHgpXG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiB0aW50R2VvKG1lcmdlR2VvcyhzZWdzKSwgaGV4KTtcbn1cblxuLyoqIEEgcG9seWxpbmUgVFVCRTogb25lIGN5bGluZGVyIHBlciBzZWdtZW50LCBlYWNoIHJvdGF0ZWQgb250byBpdHMgY2hvcmQsIHdpdGggYSBzbWFsbCBzcGhlcmUtbGVzc1xuICogIG92ZXJsYXAgc28gdGhlIGpvaW50cyBjbG9zZS4gSGFuZGxlYmFycywgY2Fub3B5IHJhaWxzLCByb2xsIGNhZ2VzIGFuZCBmcmFtZSB0dWJlcy4gKi9cbmZ1bmN0aW9uIHR1YmUocHRzOiBudW1iZXJbXVtdLCByOiBudW1iZXIsIHNlZyA9IDgsIGhleD86IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkID0gYi5jbG9uZSgpLnN1YihhKTsgY29uc3QgbGVuID0gZC5sZW5ndGgoKTtcbiAgICBpZiAobGVuIDwgMWUtNikgY29udGludWU7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIGxlbiArIHIgKiAxLjIsIHNlZywgMSwgZmFsc2UpO1xuICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgZC5ub3JtYWxpemUoKSk7XG4gICAgZy5hcHBseVF1YXRlcm5pb24ocSk7XG4gICAgY29uc3QgbSA9IGEuY2xvbmUoKS5hZGQoYikubXVsdGlwbHlTY2FsYXIoMC41KTtcbiAgICBnLnRyYW5zbGF0ZShtLngsIG0ueSwgbS56KTtcbiAgICBwYXJ0cy5wdXNoKGcpO1xuICB9XG4gIGNvbnN0IG91dCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IG91dCA6IHRpbnRHZW8ob3V0LCBoZXgpO1xufVxuXG4vKipcbiAqIEEgRkxBVCBTVFJBUCBzd2VwdCBhbG9uZyBhIHBvbHlsaW5lOiBhIGNoYWluIG9mIGJveGVzLCBlYWNoIG9yaWVudGVkIHNvIGl0cyBMRU5HVEggcnVucyBhbG9uZyB0aGVcbiAqIHNlZ21lbnQsIGl0cyBUSElDS05FU1MgYWxvbmcgdGhlIG91dHdhcmQgbm9ybWFsIGZyb20gYGFib3V0YCwgYW5kIGl0cyBXSURUSCB0YW5nZW50IHRvIHRoYXRcbiAqIHN1cmZhY2UuIFRoaXMgaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGd1YXJkIGFuZCBhIHdpcmU6IGEgYnVsa2hlYWQgbGFtcCdzIGNhZ2UgaXMgcHJlc3NlZFxuICogZmxhdCBiYXIsIGFuZCBhIHJvdW5kIHR1YmUgb2YgdGhlIHNhbWUgbWVhc3VyZWQgd2lkdGggc2hhZGVzIHRvIGEgbmFycm93IGhpZ2hsaWdodCBhbmQgcmVhZHMgYXNcbiAqIHdpcmUgLS0gd2hpY2ggaXMgdGhlIHRoaW5nIHRoaXMga2l0J3MgYXNzZXQgbm90ZXMgcnVsZSBvdXQuIEl0IGlzIGFsc28gQ0hFQVBFUiB0aGFuIGB0dWJlYDogYSBib3hcbiAqIGlzIDEyIHRyaWFuZ2xlcyBhZ2FpbnN0IGEgY2FwcGVkIDUtc2lkZWQgY3lsaW5kZXIncyAyMC5cbiAqL1xuZnVuY3Rpb24gc3RyYXAocHRzOiBudW1iZXJbXVtdLCB3OiBudW1iZXIsIHQ6IG51bWJlciwgYWJvdXQ6IG51bWJlcltdLCBoZXg/OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGMgPSBuZXcgVEhSRUUuVmVjdG9yMyhhYm91dFswXSwgYWJvdXRbMV0sIGFib3V0WzJdKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkaXIgPSBiLmNsb25lKCkuc3ViKGEpOyBjb25zdCBsZW4gPSBkaXIubGVuZ3RoKCk7XG4gICAgaWYgKGxlbiA8IDFlLTYpIGNvbnRpbnVlO1xuICAgIGRpci5ub3JtYWxpemUoKTtcbiAgICBjb25zdCBtaWQgPSBhLmNsb25lKCkuYWRkKGIpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG4gICAgLy8gT3V0d2FyZCBub3JtYWwgYXQgdGhlIG1pZHBvaW50LCByZS1vcnRob2dvbmFsaXNlZCBhZ2FpbnN0IHRoZSBydW4gc28gdGhlIGJhc2lzIHN0YXlzIHNxdWFyZVxuICAgIC8vIHdoZXJlIHRoZSBzdHJhcCBjbGltYnMgc3RlZXBseSBhbmQgdGhlIHR3byB3b3VsZCBvdGhlcndpc2UgYmUgbmVhcmx5IHBhcmFsbGVsLlxuICAgIGxldCBucm0gPSBtaWQuY2xvbmUoKS5zdWIoYyk7XG4gICAgbnJtLnN1YihkaXIuY2xvbmUoKS5tdWx0aXBseVNjYWxhcihucm0uZG90KGRpcikpKTtcbiAgICBpZiAobnJtLmxlbmd0aFNxKCkgPCAxZS0xMikgbnJtID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSkuc3ViKGRpci5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKGRpci56KSk7XG4gICAgbnJtLm5vcm1hbGl6ZSgpO1xuICAgIC8vIGRpciB4IG5ybSwgTk9UIG5ybSB4IGRpci4gVGhlIGJhc2lzIGNvbHVtbnMgYXJlIChzaWRlLCBkaXIsIG5ybSkgYWdhaW5zdCBhIGJveCdzICh3LCBsZW4sIHQpLFxuICAgIC8vIHNvIGEgcmlnaHQtaGFuZGVkIGJhc2lzIG5lZWRzIHNpZGUgeCBkaXIgPSBucm07IG5ybSB4IGRpciBnaXZlcyAtbnJtLCBhIG1pcnJvcmVkIGJhc2lzIHdpdGggYVxuICAgIC8vIG5lZ2F0aXZlIGRldGVybWluYW50LCBhbmQgZXZlcnkgc3RyYXAgcmVuZGVycyBpbnNpZGUgb3V0IC0tIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGRhcmtcbiAgICAvLyBzbGl2ZXIgcmF0aGVyIHRoYW4gYW4gb2J2aW91c2x5IGZsaXBwZWQgZmFjZSwgc28gaXQgcmVhZHMgYXMgYSBnZW9tZXRyeSBidWcsIG5vdCBhIHdpbmRpbmcgb25lLlxuICAgIGNvbnN0IHNpZGUgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNyb3NzVmVjdG9ycyhkaXIsIG5ybSkubm9ybWFsaXplKCk7XG4gICAgLy8gT3ZlcmxhcCB0aGUgam9pbnRzIGJ5IHRoZSB0aGlja25lc3Mgc28gY29uc2VjdXRpdmUgYm94ZXMgY2xvc2UgdGhlIG1pdHJlIHJhdGhlciB0aGFuXG4gICAgLy8gbGVhdmluZyBhIHdlZGdlIG9mIGRheWxpZ2h0IGF0IGV2ZXJ5IHN0YXRpb24uXG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBsZW4gKyB0LCB0KTtcbiAgICBnLmFwcGx5TWF0cml4NChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VCYXNpcyhzaWRlLCBkaXIsIG5ybSkpO1xuICAgIGcudHJhbnNsYXRlKG1pZC54LCBtaWQueSwgbWlkLnopO1xuICAgIHBhcnRzLnB1c2goZyk7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gb3V0IDogdGludEdlbyhvdXQsIGhleCk7XG59XG5cbi8qKiBBIHJvdGF0ZWQgYm94OiBbY3gsIGN5LCBjeiwgdywgaCwgZCwgcngsIHJ5LCByel0gd2l0aCB0aGUgcm90YXRpb25zIGFwcGxpZWQgaW4geCwgeSwgeiBvcmRlclxuICogIGFib3V0IHRoZSBib3gncyBvd24gY2VudHJlLiBBIGJvbm5ldCBsaXAsIGEgcmFrZWQgbWlycm9yIHN0ZW0sIGEgY2Fub3B5IHN0YXkuICovXG5mdW5jdGlvbiByYm94KGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJbM10sIGJbNF0sIGJbNV0pO1xuICBpZiAoYls2XSkgZy5yb3RhdGVYKGJbNl0pOyBpZiAoYls3XSkgZy5yb3RhdGVZKGJbN10pOyBpZiAoYls4XSkgZy5yb3RhdGVaKGJbOF0pO1xuICBnLnRyYW5zbGF0ZShiWzBdLCBiWzFdLCBiWzJdKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIGJhdGNoIG9mIGJveGVzLCBlYWNoIHRpbnRlZCwgbWVyZ2VkOiBbW2hleCwgY3gsIGN5LCBjeiwgdywgaCwgZCwgcng/LCByeT8sIHJ6P10sIC4uLl0uIFRoZVxuICogIHRyaW0gY29tcG9uZW50IG9mIGV2ZXJ5IHZlaGljbGUgaXMgb25lIG9mIHRoZXNlIC0tIGJ1bXBlcnMsIGdyaWxsZSwgbGFtcHMsIG1pcnJvcnMsIGhhbmRsZXMsXG4gKiAgc3RlcHMsIGFyY2ggZmxhcmVzIC0tIHNvIGZvcnR5IHBhcnRzIHJpZGUgb25lIHN1Ym1pc3Npb24uICovXG5mdW5jdGlvbiB0aW50ZWRCb3hlcyhsaXN0OiBudW1iZXJbXVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiB0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKSk7XG59XG5cbi8qKiBNaXJyb3IgYSBib3ggbGlzdCBhY3Jvc3MgeCA9IDAgKGxlZnQvcmlnaHQgcGFpcnMpLiBSb3RhdGlvbnMgYWJvdXQgeSBhbmQgeiBmbGlwIHNpZ24uICovXG5mdW5jdGlvbiBtaXJyb3JYKGxpc3Q6IG51bWJlcltdW10pOiBudW1iZXJbXVtdIHtcbiAgcmV0dXJuIGxpc3QuZmxhdE1hcCgoYikgPT4gW2IsIFtiWzBdLCAtYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSwgYls2XSwgYls3XSA/PyAwLCAtKGJbOF0gPz8gMCksIC0oYls5XSA/PyAwKV1dKTtcbn1cblxuLyoqIEEgc2VhbWxlc3MgQ2FudmFzIDJEIHRpbGU6IGBkcmF3KGN0eCwgc2l6ZSlgIHBhaW50cyBpdCwgYW5kIHRoZSByZXN1bHQgaXMgYSByZXBlYXRpbmcgdGV4dHVyZVxuICogIGluIHNSR0IuIFVzZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLCBzbyB0aGUgdGV4dHVyZWxlc3MgZGVjbGFyYXRpb24gc3RhbmRzIGFuZCBub1xuICogIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQuIFJldHVybnMgbnVsbCB3aGVyZSB0aGVyZSBpcyBubyBET00gKHRoZSBoZWFkbGVzcyBoYXJuZXNzXG4gKiAgaGFzIG9uZTsgYSBub2RlLXNpZGUgcHJvYmUgZG9lcyBub3QpLCBhbmQgZXZlcnkgY2FsbGVyIHRvbGVyYXRlcyBudWxsLiAqL1xuZnVuY3Rpb24gY2FudmFzVGlsZShzaXplOiBudW1iZXIsIGRyYXc6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgczogbnVtYmVyKSA9PiB2b2lkKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGN2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IGN2LndpZHRoID0gc2l6ZTsgY3YuaGVpZ2h0ID0gc2l6ZTtcbiAgLy8gd2lsbFJlYWRGcmVxdWVudGx5IGtlZXBzIHRoZSB0aWxlIG9uIHRoZSBDUFUgcmFzdGVyIHBhdGg6IGEgR1BVLWJhY2tlZCBjYW52YXMgY29zdHMgc2Vjb25kcyBwZXJcbiAgLy8gdGhvdXNhbmQgcGF0aCBmaWxscyB3aGVyZSB0aGUgc29mdHdhcmUgcGF0aCB0YWtlcyB0ZW5zIG9mIG1pbGxpc2Vjb25kcy5cbiAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsOyBpZiAoIWN0eCkgcmV0dXJuIG51bGw7XG4gIGRyYXcoY3R4LCBzaXplKTtcbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3YpO1xuICB0ZXgud3JhcFMgPSB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgdGV4LmNvbG9yU3BhY2UgPSBUSFJFRS5TUkdCQ29sb3JTcGFjZTtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgcmV0dXJuIHRleDtcbn1cblxuLyoqIERldGVybWluaXN0aWMgcHNldWRvLXJhbmRvbSBmb3IgY2FudmFzIGRyZXNzaW5nIC0tIGFzc2lnbmVkIGJ5IGluZGV4LCBuZXZlciBNYXRoLnJhbmRvbSwgc28gdGhlXG4gKiAgbW9kZWwgaXMgYnl0ZS1pZGVudGljYWwgb24gZXZlcnkgYnVpbGQuICovXG5mdW5jdGlvbiBsY2coc2VlZDogbnVtYmVyKTogKCkgPT4gbnVtYmVyIHtcbiAgbGV0IHMgPSBzZWVkID4+PiAwO1xuICByZXR1cm4gKCkgPT4geyBzID0gKHMgKiAxNjY0NTI1ICsgMTAxMzkwNDIyMykgPj4+IDA7IHJldHVybiBzIC8gNDI5NDk2NzI5NjsgfTtcbn1cblxuLyoqXG4gKiBNVUQgLyBST0FELUdSSU1FIHRpbGUsIFJFLUJBU0VELiBUaGFpIHJvYWQgbXVkIGlzIHRhbiBhbmQgQlJJR0hURVIgdGhhbiBtb3N0IHBhaW50LCBhbmQgYVxuICogbXVsdGlwbGllciBjYW5ub3QgYnJpZ2h0ZW46IHNvIHRoZSBwYWludCBtYXRlcmlhbCBjYXJyaWVzIHRoZSBNVUQgRU5WRUxPUEUgY29sb3VyIChtZWFzdXJlZCBvblxuICogdGhlIG11ZGR5IHNpbGwpLCB0aGlzIHRpbGUgY2FycmllcyB0aGUgY2xlYW4gcGFpbnQgYXMgYSBSQVRJTyBvZiB0aGF0IGVudmVsb3BlIG92ZXIgbW9zdCBvZiBpdHNcbiAqIGFyZWEgKGBiYXNlYCksIGFuZCB0aGUgbXVkIGlzIHBhaW50ZWQgYXMgd2hpdGUgLS0gaS5lLiB0aGUgZW52ZWxvcGUgaXRzZWxmIC0tIGluIGEgd2FzaCByaXNpbmdcbiAqIGZyb20gdGhlIGJvdHRvbSB0byBgY292ZXJhZ2VgIG9mIHRoZSB0aWxlIGhlaWdodCBwbHVzIHNwbGF0dGVyIGFib3ZlIGl0LiBCb3VuZCB3aXRoIGhlaWdodCBVVnNcbiAqIHNvIHYgPSAwIGlzIHRoZSBncm91bmQgYW5kIHRoZSB3YXNoIHNpdHMgb24gdGhlIHNpbGxzIGFuZCBhcmNoZXMuXG4gKi9cbmZ1bmN0aW9uIG11ZFRpbGUoc2l6ZTogbnVtYmVyLCBiYXNlOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzMpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgdG9IZXggPSAodjogbnVtYmVyW10pID0+ICcjJyArIHYubWFwKChjKSA9PiBNYXRoLnJvdW5kKE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGMpKSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0b0hleChiYXNlKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjU1LDI1NSwwLjg4KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNDUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpJyk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuMzU7XG4gICAgICBjb25zdCByID0gMyArIHJuZCgpICogcyAqIDAuMDU7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4yODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDI1NSwyNTAsMjQwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjUwLDI0MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBhIGxpdHRsZSBncmFpbiBzbyB0aGUgY2xlYW4gcGFpbnQgaXMgbm90IGEgZmxhdCBmaWxsXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7IGNvbnN0IHYgPSBybmQoKSA8IDAuNSA/IDAgOiAyNTU7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4wMzUpYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEuNSwgMS41KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogRFVTVCB0aWxlIGZvciBwYWludCB0aGF0IGlzIEJSSUdIVEVSIHRoYW4gaXRzIGRpcnQgKGEgd2hpdGUgdmFuKTogYSBwbGFpbiBtdWx0aXBsaWVyLCB3aGl0ZVxuICogIGJhc2UgYW5kIGEgZ3JleS1icm93biB3YXNoIHJpc2luZyBmcm9tIHRoZSBncm91bmQgdG8gYGNvdmVyYWdlYCwgcGx1cyBzb2Z0IGJsb2JzLiAqL1xuZnVuY3Rpb24gZHVzdFRpbGUoc2l6ZTogbnVtYmVyLCBkdXN0OiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGMgPSBkdXN0Lm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiBNYXRoLm1pbigxLCB2KSkpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjkpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjQpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuNCwgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA1LCBhID0gMC4wOCArIHJuZCgpICogMC4yNTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBDT1JSVUdBVEVEIFNIRUVUIHRpbGU6IHZlcnRpY2FsIHJpZGdlcyBhcyBhIHNpbmUtc2hhZGVkIHN0cmlwZSBmaWVsZCwgdXNlZCBhcyBtYXAgQU5EIGJ1bXBNYXAgb25cbiAqICBhIHNvbmd0aGFldyByb29mIHNvIHRoZSByaWRnZXMgY2F0Y2ggbGlnaHQuIGBwaXRjaGAgcmlkZ2VzIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gY29ycnVnYXRpb25UaWxlKHNpemU6IG51bWJlciwgcGl0Y2g6IG51bWJlciwgbG93OiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgY29uc3QgdCA9IChNYXRoLmNvcyh4IC8gcyAqIE1hdGguUEkgKiAyICogcGl0Y2gpICsgMSkgLyAyOyAgIC8vIDEgYXQgY3Jlc3QsIDAgaW4gdHJvdWdoXG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiAobG93ICsgKDEgLSBsb3cpICogdCkpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMTg7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTIwLDkwLDYwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMjAsOTAsNjAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFBMQU5LIHRpbGU6IGJvYXJkcyBydW5uaW5nIGFsb25nIHUgd2l0aCBkYXJrIGpvaW50cyBhbmQgZ3JhaW4gc3RyZWFrcywgYSBtdWx0aXBsaWVyIG9uIGFcbiAqICBtZWFzdXJlZCB0aW1iZXIgYWxiZWRvLiBgYm9hcmRzYCBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIHBsYW5rVGlsZShzaXplOiBudW1iZXIsIGJvYXJkczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGJoID0gcyAvIGJvYXJkcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IGJvYXJkczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgYmgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDMwLDIwLDAuNTUpJzsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDE0OyBrKyspIHtcbiAgICAgICAgY29uc3QgeSA9IGIgKiBiaCArIHJuZCgpICogYmgsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjYpLCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSg2MCw0NSwzMCwkezAuMDUgKyBybmQoKSAqIDAuMTJ9KWA7IGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgbGVuLCB5KTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgbGVuLCB5KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBSVVNUIHRpbGU6IGEgbXVsdGlwbGllciBvZiBibG90Y2hlZCBvcmFuZ2UtYnJvd24gb3ZlciBhIGJhc2UsIGRhcmsgY29yZXMgbGlmdGVkIHNvIG5vdGhpbmcgbGFuZHNcbiAqICBvbiB0aGUgbHVtYS01OCBob2xlIGdhdGUuICovXG5mdW5jdGlvbiBydXN0VGlsZShzaXplOiBudW1iZXIsIHJhdGlvOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBkZW5zaXR5ID0gOTApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVuc2l0eTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDk7XG4gICAgICBjb25zdCBhID0gMC4xNSArIHJuZCgpICogMC40NTtcbiAgICAgIGNvbnN0IGMgPSByYXRpby5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogdikpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBIZWlnaHQta2V5ZWQgVVZzOiB2IGlzIHdvcmxkIEhFSUdIVCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB1IHJ1bnMgYWxvbmcgdGhlIGRvbWluYW50IGhvcml6b250YWxcbiAqICBheGlzLiBBIG11ZCB0aWxlIGJvdW5kIHRoaXMgd2F5IGRhcmtlbnMgdGhlIHNpbGxzIGFuZCBzdGF5cyBjbGVhbiBvbiB0aGUgcm9vZiAtLSBhIHBsYWluIGJveFxuICogIHByb2plY3Rpb24gd291bGQgcmVwZWF0IHRoZSB0aWxlJ3MgZGlydHkgYmFuZCBhY3Jvc3MgdGhlIHJvb2YgYXMgc3RyaXBlcy4gKi9cbi8qKlxuICogU0hPUlQgRlVSOiBhIHNlYW1sZXNzIHRpbGUgb2YgZGVuc2UsIHNob3J0LCBkaXJlY3Rpb25hbCBoYWlyIHN0cm9rZXMgb3ZlciBhIGNsb3VkeSB0b25lIGRyaWZ0LCBhcyBhXG4gKiBtdWx0aXBseSBtYXAgKGFuZCBidW1wKSBvbiBhIHdoaXRlIHZlcnRleC1jb2xvdXJlZCBjb2F0LiBUaGUgc3Ryb2tlcyBydW4gYWxvbmcgdiB3aXRoIGEgaml0dGVyZWRcbiAqIGxlYW4gYW5kIGEgbmFycm93IHRvbmUgc3ByZWFkIC0tIGEgd2lkZSBzcHJlYWQgcmVhZHMgYXMgc2NhbGVzLCBhIHBlcmZlY3QgbGF5IHJlYWRzIGFzIGNvbWJlZFxuICogcGxhc3RpYy4gYHBhdGNoZXNgIGFkZHMgYSBmZXcgc29mdCBwaW5rLWdyZXkgYmFyZSBwYXRjaGVzLCB0aGUgbWFuZ2UgbWFya3Mgb2YgYSBzdHJlZXQgZG9nLlxuICovXG5mdW5jdGlvbiBmdXJUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IHRvbmUgPSBvLnRvbmUgPz8gWzAuNzIsIDAuNjYsIDAuNThdLCBtID0gcyAqIDAuMDY7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGNsb3VkeSBkcmlmdCB1bmRlcm5lYXRoIHNvIHRoZSBjb2F0IGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uY2xvdWRzID8/IDI2KTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA4ICsgcm5kKCkgKiAwLjE4KSwgYSA9IDAuMDQgKyBybmQoKSAqIDAuMTA7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih0b25lKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHRvbmUpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYmFyZSBwYXRjaGVzOiBzb2Z0LCBzcGFyc2UsIHdhcm0gZ3JleS1waW5rXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5wYXRjaGVzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMDUpLCBwYyA9IG8ucGF0Y2hUb25lID8/IFswLjcyLCAwLjU2LCAwLjUyXTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHBjKX0sMC41NSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2IocGMpfSwwLjMpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihwYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByICogMS4zLCByLCBybmQoKSAqIE1hdGguUEksIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBoYWlyIHN0cm9rZXM6IGRhcmsgYW5kIGxpZ2h0LCBzaG9ydCwgbGVhbmluZyB3aXRoaW4gKy0yMiBkZWdyZWVzIG9mIHZcbiAgICBjb25zdCBzdHJva2VzID0gby5zdHJva2VzID8/IDUwMDAsIGxlbiA9IHMgKiAoby5sZW5ndGggPz8gMC4wMjIpO1xuICAgIGNvbnN0IGRyYXdTdHJva2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIHc6IG51bWJlcikgPT4ge1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHc7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTtcbiAgICAgIGlmICh4IDwgbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIHMsIHkpOyBjdHgubGluZVRvKHggKyBzICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHggPiBzIC0gbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHkgPCBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5ICsgcyk7IGN0eC5saW5lVG8oeCArIGR4LCB5ICsgcyArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeSA+IHMgLSBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5IC0gcyk7IGN0eC5saW5lVG8oeCArIGR4LCB5IC0gcyArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgfTtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJva2VzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHRoID0gKHJuZCgpIC0gMC41KSAqIDAuNzgsIGwgPSBsZW4gKiAoMC42ICsgcm5kKCkgKiAwLjgpO1xuICAgICAgY29uc3QgbGlnaHQgPSBybmQoKSA8IDAuNDI7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gbGlnaHQgPyAnc2NyZWVuJyA6ICdtdWx0aXBseSc7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBsaWdodCA/IGByZ2JhKDI1NSwyNTAsMjQwLCR7MC4wNSArIHJuZCgpICogMC4xMH0pYCA6IGByZ2JhKCR7cmdiKHRvbmUpfSwkezAuMDYgKyBybmQoKSAqIDAuMTR9KWA7XG4gICAgICBkcmF3U3Ryb2tlKHgsIHksIE1hdGguc2luKHRoKSAqIGwsIE1hdGguY29zKHRoKSAqIGwsIDAuNiArIHJuZCgpICogMS4yKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoZWlnaHRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGNvbnN0IHUgPSBheCA+PSBheiA/IHAuZ2V0WihpKSA6IHAuZ2V0WChpKTtcbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSBwLmdldFkoaSkgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIE9mZnNldCBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgb3V0d2FyZCBieSBgZGAgYWxvbmcgdGhlIGF2ZXJhZ2VkIGVkZ2Ugbm9ybWFscy4gVXNlZFxuICogIHRvIHN0YW5kIHRoZSBnbGFzcyBiYW5kIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBib2R5J3MgcmFrZWQgd2luZHNjcmVlbiBhbmQgcmVhciBnbGFzc1xuICogIGZhY2VzLCBzbyB0aGUgcGFuZSBhbmQgdGhlIGJvZHkgbmV2ZXIgc2hhcmUgYSBwbGFuZS4gV2luZGluZzogY291bnRlci1jbG9ja3dpc2UgaW4gKHosIHkpLiAqL1xuZnVuY3Rpb24gb2Zmc2V0UG9seShwdHM6IG51bWJlcltdW10sIGQ6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBuID0gcHRzLmxlbmd0aCwgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IHB0c1soaSArIG4gLSAxKSAlIG5dLCBiID0gcHRzW2ldLCBjID0gcHRzWyhpICsgMSkgJSBuXTtcbiAgICBjb25zdCBlMSA9IFtiWzBdIC0gYVswXSwgYlsxXSAtIGFbMV1dLCBlMiA9IFtjWzBdIC0gYlswXSwgY1sxXSAtIGJbMV1dO1xuICAgIGNvbnN0IGwxID0gTWF0aC5oeXBvdChlMVswXSwgZTFbMV0pIHx8IDEsIGwyID0gTWF0aC5oeXBvdChlMlswXSwgZTJbMV0pIHx8IDE7XG4gICAgLy8gb3V0d2FyZCBub3JtYWwgb2YgYSBDQ1cgZWRnZSAoZHosIGR5KSBpcyAoZHksIC1keilcbiAgICBjb25zdCBuMSA9IFtlMVsxXSAvIGwxLCAtZTFbMF0gLyBsMV0sIG4yID0gW2UyWzFdIC8gbDIsIC1lMlswXSAvIGwyXTtcbiAgICBsZXQgbnggPSBuMVswXSArIG4yWzBdLCBueSA9IG4xWzFdICsgbjJbMV07XG4gICAgY29uc3QgbmwgPSBNYXRoLmh5cG90KG54LCBueSkgfHwgMTsgbnggLz0gbmw7IG55IC89IG5sO1xuICAgIGNvbnN0IGNvc0hhbGYgPSBNYXRoLm1heCgwLjM1LCBueCAqIG4xWzBdICsgbnkgKiBuMVsxXSk7XG4gICAgb3V0LnB1c2goW2JbMF0gKyBueCAqIGQgLyBjb3NIYWxmLCBiWzFdICsgbnkgKiBkIC8gY29zSGFsZl0pO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBBIHdoZWVsLWFyY2ggRkxBUkU6IGEgaGFsZi1hbm51bHVzIGluIHRoZSAoeiwgeSkgcGxhbmUsIGV4dHJ1ZGVkIGFjcm9zcyB4MC4ueDEgb24gYm90aCBzaWRlc1xuICogIGFuZCB0aW50ZWQuIFN0YW5kcyBwcm91ZCBvZiB0aGUgYm9keSBzaWRlIGFuZCBoaWRlcyB0aGUgYXJjaCdzIGN1dCBlZGdlLiAqL1xuZnVuY3Rpb24gZmxhcmUoemM6IG51bWJlciwgeWM6IG51bWJlciwgckluOiBudW1iZXIsIHJPdXQ6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgaGV4OiBudW1iZXIsIG4gPSA5KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IGNvbnN0IHogPSB6YyArIE1hdGguY29zKGEpICogck91dCwgeSA9IHljICsgTWF0aC5zaW4oYSkgKiByT3V0OyBpZiAoaSA9PT0gMCkgc2hhcGUubW92ZVRvKHosIHkpOyBlbHNlIHNoYXBlLmxpbmVUbyh6LCB5KTsgfVxuICBmb3IgKGxldCBpID0gbjsgaSA+PSAwOyBpLS0pIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IHNoYXBlLmxpbmVUbyh6YyArIE1hdGguY29zKGEpICogckluLCB5YyArIE1hdGguc2luKGEpICogckluKTsgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgbWsgPSAoc3g6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB4MSAtIHgwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlIH0pO1xuICAgIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpOyBnLnRyYW5zbGF0ZSh4MSwgMCwgMCk7IGlmIChzeCA8IDApIGcuc2NhbGUoLTEsIDEsIDEpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIHRpbnRHZW8oZywgaGV4KTtcbiAgfTtcbiAgY29uc3QgbCA9IG1rKC0xKSwgciA9IG1rKDEpO1xuICAvLyBhIG5lZ2F0aXZlIHNjYWxlIGZsaXBzIHRoZSB3aW5kaW5nOyByZXN0b3JlIGl0IHNvIHRoZSBmbGFyZSBpcyBub3QgaW5zaWRlIG91dFxuICBjb25zdCBpZHggPSBsLmdldEluZGV4KCk7IGlmIChpZHgpIHsgY29uc3QgYSA9IGlkeC5hcnJheSBhcyBhbnk7IGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMykgeyBjb25zdCB0ID0gYVtpICsgMV07IGFbaSArIDFdID0gYVtpICsgMl07IGFbaSArIDJdID0gdDsgfSBpZHgubmVlZHNVcGRhdGUgPSB0cnVlOyB9XG4gIGVsc2UgeyBjb25zdCBwID0gbC5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSArPSAzKSB7IGNvbnN0IHgxXyA9IHAuZ2V0WChpICsgMSksIHkxXyA9IHAuZ2V0WShpICsgMSksIHoxXyA9IHAuZ2V0WihpICsgMSk7IHAuc2V0WFlaKGkgKyAxLCBwLmdldFgoaSArIDIpLCBwLmdldFkoaSArIDIpLCBwLmdldFooaSArIDIpKTsgcC5zZXRYWVooaSArIDIsIHgxXywgeTFfLCB6MV8pOyB9IH1cbiAgbC5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gbWVyZ2VHZW9zKFtsLCByXSk7XG59XG5cbi8qKiBCaW5kIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgdG8gYSBtYXRlcmlhbCBhcyBtYXAgKGFuZCBidW1wKSwgbGVhdmluZyB0aGUgdGV4dHVyZWxlc3NcbiAqICBkZWNsYXJhdGlvbiBpbnRhY3Q6IG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQsIHRoZSBtZWFzdXJlZCBjb2xvdXIgc3RheXMgdGhlXG4gKiAgbXVsdGlwbGljYW5kLCBhbmQgdGhlIHdob2xlIHRoaW5nIGNvc3RzIG9uZSBjYW52YXMuICovXG5mdW5jdGlvbiBiaW5kVGlsZShtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsLCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsLCBidW1wID0gMCk6IHZvaWQge1xuICBpZiAoIXRleCkgcmV0dXJuO1xuICBtYXQubWFwID0gdGV4O1xuICBpZiAoYnVtcCA+IDApIHsgbWF0LmJ1bXBNYXAgPSB0ZXg7IG1hdC5idW1wU2NhbGUgPSBidW1wOyB9XG4gIG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cblxuLyoqXG4gKiBBIERSQVBFRCBTSEVFVDogYGhlaWdodHNbal1baV1gIGlzIHRoZSB0b3Agc3VyZmFjZSBhdCB4ID0geDAuLngxIChpIG92ZXIgbngpIGFuZCB6ID0gejAuLnoxIChqIG92ZXJcbiAqIG56KTsgdGhlIHNoZWV0IGlzIGB0YCB0aGljay4gVG9wIGFuZCB1bmRlcnNpZGUgYXJlIHNtb290aC1zaGFkZWQgZ3JpZHMsIHRoZSBmb3VyIGVkZ2VzIGFyZSBmbGF0XG4gKiBzdHJpcHMgd291bmQgb3V0d2FyZC4gQSB0YXJwIGNhbm9weSBpcyBhIHJpZGdlIGxpbmUgbWludXMgdGhlIHNhZyBiZXR3ZWVuIGl0cyBwb2xlcyBtaW51cyB0aGVcbiAqIGRyb29wIG9mIGl0cyBmcmVlIGVkZ2VzIC0tIGNsb3RoLCB3aGVyZSBhIHNsYWIgcmVhZHMgYXMgYSBwYWludGVkIGJveC5cbiAqL1xuZnVuY3Rpb24gc2hlZXQoczogYW55KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBueDogbnVtYmVyID0gcy5ueCwgbno6IG51bWJlciA9IHMubnosIEhoOiBudW1iZXJbXVtdID0gcy5oZWlnaHRzLCB0OiBudW1iZXIgPSBzLnQgPz8gMC4wMTI7XG4gIGNvbnN0IFggPSAoaTogbnVtYmVyKSA9PiBzLngwICsgKHMueDEgLSBzLngwKSAqIGkgLyBueDtcbiAgY29uc3QgWiA9IChqOiBudW1iZXIpID0+IHMuejAgKyAocy56MSAtIHMuejApICogaiAvIG56O1xuICBjb25zdCBncmlkID0gKHlPZmY6IG51bWJlciwgZmxpcDogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXY6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8PSBueDsgaSsrKSB7IHBvcy5wdXNoKFgoaSksIEhoW2pdW2ldICsgeU9mZiwgWihqKSk7IHV2LnB1c2goaSAvIG54LCBqIC8gbnopOyB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSBqICogKG54ICsgMSkgKyBpLCBiID0gYSArIDEsIGMgPSBhICsgbnggKyAxLCBkID0gYyArIDE7XG4gICAgICBpZiAoZmxpcCkgaWR4LnB1c2goYSwgYiwgYywgYiwgZCwgYyk7IGVsc2UgaWR4LnB1c2goYSwgYywgYiwgYiwgYywgZCk7XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuc2V0SW5kZXgoaWR4KTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gZztcbiAgfTtcbiAgLy8gYGhleFRvcGAgLyBgaGV4VW5kZXJgOiBhIGNvbG91ciBhdHRyaWJ1dGUgd3JpdHRlbiBwZXIgZ3JpZCwgc28gYSB0YXJwIGNhbiBiZSBibHVlIG9uIHRvcCBhbmRcbiAgLy8gb3JhbmdlIHVuZGVybmVhdGggb24gT05FIG1hdGVyaWFsIGFuZCBPTkUgZHJhdyBjYWxsLiBBIGNvbXBvbmVudCB0aW50IGNhbm5vdCBkbyBpdCAtLSB0aGUgdHdvXG4gIC8vIHN1cmZhY2VzIGFyZSBtaWxsaW1ldHJlcyBhcGFydCBpbiB5LCBzbyBubyBheGlzIGJsZW5kIHNlcGFyYXRlcyB0aGVtIC0tIGFuZCBhIHNlY29uZCBzaGVldFxuICAvLyB3b3VsZCBkb3VibGUgdGhlIHJvb2YncyB0cmlhbmdsZXMgZm9yIGEgY29sb3VyLiBPbWl0dGVkLCB0aGUgZ2VvbWV0cnkgaXMgdW50aW50ZWQgYXMgYmVmb3JlLlxuICBjb25zdCBwYWludCA9IChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgaGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQsIGMgPSBuZXcgVEhSRUUuQ29sb3IoaGV4KSwgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHRvcDAgPSBncmlkKDAsIGZhbHNlKSwgdW5kMCA9IGdyaWQoLXQsIHRydWUpO1xuICBjb25zdCBwYXJ0cyA9IHMuaGV4VW5kZXIgIT09IHVuZGVmaW5lZFxuICAgID8gW3BhaW50KHRvcDAsIHMuaGV4VG9wID8/IDB4ZmZmZmZmKSwgcGFpbnQodW5kMCwgcy5oZXhVbmRlcildXG4gICAgOiBbdG9wMCwgdW5kMF07XG4gIC8vIGVkZ2Ugc3RyaXBzOiBlYWNoIHF1YWQgZnJvbSB0aGUgdG9wIGVkZ2UgZG93biB0byB0aGUgdW5kZXJzaWRlLCB3b3VuZCBzbyBpdHMgbm9ybWFsIGZhY2VzIGBvdXRgXG4gIGNvbnN0IHN0cmlwID0gKHB0czogbnVtYmVyW11bXVtdLCBvdXQ6IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCB1djogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtwMCwgcDFdIG9mIHB0cykge1xuICAgICAgY29uc3QgcTAgPSBwMCwgcTEgPSBwMSwgcTIgPSBbcDFbMF0sIHAxWzFdIC0gdCwgcDFbMl1dLCBxMyA9IFtwMFswXSwgcDBbMV0gLSB0LCBwMFsyXV07XG4gICAgICBjb25zdCBlMSA9IFtxMVswXSAtIHEwWzBdLCBxMVsxXSAtIHEwWzFdLCBxMVsyXSAtIHEwWzJdXSwgZTIgPSBbcTJbMF0gLSBxMFswXSwgcTJbMV0gLSBxMFsxXSwgcTJbMl0gLSBxMFsyXV07XG4gICAgICBjb25zdCBuID0gW2UxWzFdICogZTJbMl0gLSBlMVsyXSAqIGUyWzFdLCBlMVsyXSAqIGUyWzBdIC0gZTFbMF0gKiBlMlsyXSwgZTFbMF0gKiBlMlsxXSAtIGUxWzFdICogZTJbMF1dO1xuICAgICAgY29uc3QgdHJpID0gblswXSAqIG91dFswXSArIG5bMV0gKiBvdXRbMV0gKyBuWzJdICogb3V0WzJdID49IDAgPyBbcTAsIHExLCBxMiwgcTAsIHEyLCBxM10gOiBbcTAsIHEyLCBxMSwgcTAsIHEzLCBxMl07XG4gICAgICBmb3IgKGNvbnN0IHEgb2YgdHJpKSB7IHBvcy5wdXNoKHFbMF0sIHFbMV0sIHFbMl0pOyB1di5wdXNoKDAsIDApOyB9XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHRvcCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4gW1goaSksIEhoW2pdW2ldLCBaKGopXTtcbiAgY29uc3QgZTA6IG51bWJlcltdW11bXSA9IFtdLCBlMTogbnVtYmVyW11bXVtdID0gW10sIGUyOiBudW1iZXJbXVtdW10gPSBbXSwgZTM6IG51bWJlcltdW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHsgZTAucHVzaChbdG9wKGksIDApLCB0b3AoaSArIDEsIDApXSk7IGUxLnB1c2goW3RvcChpLCBueiksIHRvcChpICsgMSwgbnopXSk7IH1cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSB7IGUyLnB1c2goW3RvcCgwLCBqKSwgdG9wKDAsIGogKyAxKV0pOyBlMy5wdXNoKFt0b3AobngsIGopLCB0b3AobngsIGogKyAxKV0pOyB9XG4gIGNvbnN0IGVkZ2VzID0gW3N0cmlwKGUwLCBbMCwgMCwgLTFdKSwgc3RyaXAoZTEsIFswLCAwLCAxXSksIHN0cmlwKGUyLCBbLTEsIDAsIDBdKSwgc3RyaXAoZTMsIFsxLCAwLCAwXSldO1xuICAvLyB0aGUgcmltIGlzIHRoZSBzZWFtIGJldHdlZW4gdGhlIHR3byBmYWNlcywgc28gaXQgdGFrZXMgdGhlIFVOREVSIGNvbG91cjogb24gYSBkcmFwZWQgdGFycCB0aGVcbiAgLy8gZWRnZSBpcyB3aGF0IGEgdmlld2VyIHN0YW5kaW5nIGJlc2lkZSBpdCBhY3R1YWxseSBzZWVzLCBhbmQgaXQgaXMgdGhlIGxpbmluZywgbm90IHRoZSB0b3AuXG4gIHBhcnRzLnB1c2goLi4uKHMuaGV4VW5kZXIgIT09IHVuZGVmaW5lZCA/IGVkZ2VzLm1hcCgoZykgPT4gcGFpbnQoZywgcy5oZXhVbmRlcikpIDogZWRnZXMpKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhwYXJ0cyk7XG59XG5cbi8qKlxuICogV0VBVEhFUkVEIFBBSU5UIG9uIGEgc3RlZWwgY29udGFpbmVyOiBvbmUgc2VhbWxlc3MgbXVsdGlwbGllciB0aWxlIGNhcnJ5aW5nIGNsZWFuIHBhaW50LCBydXN0XG4gKiBhbmQgY2hhbGtlZCBibG9vbSB0b2dldGhlci5cbiAqXG4gKiBUaGUgdGhyZWUgdG9uZXMgY2Fubm90IHJpZGUgYSBwbGFpbiBtdWx0aXBseSBvdmVyIHRoZSBjbGVhbiBwYWludCwgYmVjYXVzZSBhIGNoYWxrIGJsb29tIGlzXG4gKiBCUklHSFRFUiB0aGFuIHRoZSBwYWludCBpdCBzaXRzIG9uIGluIHR3byBjaGFubmVscyAtLSBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbi4gU28gdGhlIHZlcnRleFxuICogY29sb3VyIGlzIFJFLUJBU0VEIHRvIGFuIGVudmVsb3BlIGFib3ZlIGV2ZXJ5IHRvbmUgdGhlIHRpbGUgaGFzIHRvIHJlYWNoIChgby5iYXNlYCBpcyB0aGUgY2xlYW5cbiAqIHBhaW50J3Mgb3duIG11bHRpcGxpZXIgYWdhaW5zdCB0aGF0IGVudmVsb3BlLCBhbmQgaXQgaXMgd2hhdCBtb3N0IG9mIHRoZSB0aWxlIGlzIGZpbGxlZCB3aXRoKSxcbiAqIGV4YWN0bHkgYXMgdGhlIGxpY2hlbi1vbi1zdG9uZSByb3V0ZSBkb2VzLiBFdmVyeXRoaW5nIGFmdGVyIHRoZSBmaWxsIGlzIGRyYXduIHNvdXJjZS1vdmVyIGluXG4gKiBhYnNvbHV0ZSBtdWx0aXBsaWVyIHNwYWNlLCBzbyBhIG1hcmsgbWF5IGxhbmQgZWl0aGVyIHNpZGUgb2YgY2xlYW4uXG4gKlxuICogT3JkZXIgbWF0dGVycyBhbmQgaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB3ZWF0aGVyaW5nIGFuZCBjYW1vdWZsYWdlOiBhIHNvZnQgY2xvdWR5IGRyaWZ0XG4gKiBmaXJzdCwgdGhlbiB0aGUgcnVzdCBhcyBjbHVzdGVyZWQgZ3JhbnVsYXIgcGF0Y2hlcyByYXRoZXIgdGhhbiBoYXJkIGJsb3RjaGVzLCB0aGVuIHRoZSBydW5zIGl0XG4gKiBsZWF2ZXMgQkVMT1cgaXRzZWxmLCB0aGVuIHRoZSBjaGFsayBibG9vbXMsIHRoZW4gYSBmaW5lIGdyYWluIG92ZXIgdGhlIGxvdC5cbiAqL1xuZnVuY3Rpb24gcGFpbnRUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdLCBydXN0ID0gby5ydXN0ID8/IGJhc2UsIGNoYWxrID0gby5jaGFsayA/PyBiYXNlO1xuICAgIGNvbnN0IHJ1biA9IG8ucnVuID8/IHJ1c3Q7XG4gICAgLy8gd3JhcCBldmVyeSBtYXJrIHRocmVlIHdheXMgc28gbm90aGluZyBpcyBjdXQgYnkgdGhlIHRpbGUgZWRnZVxuICAgIGNvbnN0IHdyYXAgPSAoZHJhdzogKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpID0+IHZvaWQpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBkcmF3KGR4LCBkeSk7XG4gICAgfTtcbiAgICBjb25zdCBibG9iID0gKGM6IG51bWJlcltdLCB4OiBudW1iZXIsIHk6IG51bWJlciwgcjogbnVtYmVyLCBhOiBudW1iZXIsIHJ5ID0gMSkgPT4ge1xuICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKGMpfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcCgwLjU1LCBgcmdiYSgke3JnYihjKX0sJHthICogMC40NX0pYCk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihjKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIsIHIgKiByeSwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICB9O1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcblxuICAgIC8vIDEuIGNsb3VkeSBkcmlmdDogYnJvYWQsIHZlcnkgc29mdCwgYmFyZWx5IG9mZiBjbGVhbiAtLSB3aGF0IHN0b3BzIHRoZSBmbGF0IGFyZWFzIHJlYWRpbmcgYXMgcGFpbnQgY2hpcHMgb24gcGxhc3RpY1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZHJpZnQgPz8gMTQpOyBpKyspIHtcbiAgICAgIGNvbnN0IGMgPSBybmQoKSA8IDAuNSA/IHJ1c3QgOiBjaGFsaztcbiAgICAgIGJsb2IoYywgcm5kKCkgKiBzLCBybmQoKSAqIHMsIHMgKiAoMC4xOCArIHJuZCgpICogMC4zMCkgKiAoby5kcmlmdFNjYWxlID8/IDEpLCAwLjA1ICsgcm5kKCkgKiAwLjA3LCAwLjYgKyBybmQoKSAqIDAuOCk7XG4gICAgfVxuXG4gICAgLy8gMi4gcnVzdDogY2x1c3RlcnMsIGVhY2ggYSBzb2Z0IHBhdGNoIHdpdGggZ3JhbnVsYXIgc3BlY2tzIG92ZXIgaXQuIEJhcmUgc3RlZWwgY29ycm9kZXMgaW5cbiAgICAvLyAgICBmaWVsZHMsIG5vdCBpbiBkb3RzOyBhIHNwZWNrIGZpZWxkIHdpdGggbm8gcGF0Y2ggdW5kZXIgaXQgcmVhZHMgYXMgY29uZmV0dGkuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5ydXN0Q2x1c3RlcnMgPz8gMTYpOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgY3IgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMTEpICogKG8uY2x1c3RlclNjYWxlID8/IDEpO1xuICAgICAgYmxvYihydXN0LCBjeCwgY3ksIGNyLCAwLjMwICsgcm5kKCkgKiAwLjM1LCAwLjcgKyBybmQoKSAqIDAuNik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwZWNrc1BlckNsdXN0ZXIgPz8gNDApOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkLCByID0gMC44ICsgcm5kKCkgKiAyLjQ7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihydXN0KX0sJHswLjI1ICsgcm5kKCkgKiAwLjV9KWA7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgICAvLyB0aGUgcnVuIGl0IGxlYXZlcyBiZWxvdyBpdHNlbGY6IHJ1c3QgYmxlZWRzIERPV04gYSB2ZXJ0aWNhbCBwYW5lbCBhbmQgbm93aGVyZSBlbHNlXG4gICAgICBpZiAocm5kKCkgPCAoby5ydW5DaGFuY2UgPz8gMC41NSkpIHtcbiAgICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMCwgbGVuID0gcyAqICgwLjEwICsgcm5kKCkgKiAwLjM1KTtcbiAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBjeSwgMCwgY3kgKyBsZW4pO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwkezAuMTYgKyBybmQoKSAqIDAuMTh9KWApOyBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydW4pfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgICAgd3JhcCgoZHgpID0+IGN0eC5maWxsUmVjdChjeCArIGR4ICsgKHJuZCgpIC0gMC41KSAqIGNyLCBjeSwgdywgbGVuKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gY2hhbGsgYmxvb206IGxhcmdlLCB2ZXJ5IHNvZnQsIGxvdy1jb250cmFzdC4gSXQgaXMgdGhlIHRvbmUgdGhlIHRpbGUgd2FzIHJlLWJhc2VkIGZvci5cbiAgICBjb25zdCBjc2NhbGUgPSBvLmNoYWxrU2NhbGUgPz8gMSwgY2FscGhhID0gby5jaGFsa0FscGhhID8/IDAuMzU7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5jaGFsa1BhdGNoZXMgPz8gOSk7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xMCkgKiBjc2NhbGU7XG4gICAgICBibG9iKGNoYWxrLCBjeCwgY3ksIGNyLCBjYWxwaGEgKyBybmQoKSAqIDAuMzAsIDAuNSArIHJuZCgpICogMC43KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjY7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjciAqIDEuMjU7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkICogMC43LCByID0gMSArIHJuZCgpICogMztcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKGNoYWxrKX0sJHswLjIgKyBybmQoKSAqIDAuNH0pYDtcbiAgICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA0LiB0aGUgdHdvIG1hcmtzIHRoYXQgb25seSBtYWtlIHNlbnNlIG9uY2UgdGhlIHRpbGUgaXMgSEVJR0hULWtleWVkOiBsb25nIHJ1bnMgYmxlZWRpbmcgZG93blxuICAgIC8vICAgIGZyb20gdGhlIHRvcCBlZGdlICh0aGUgdG9wIHJhaWwgaXMgd2hlcmUgd2F0ZXIgc2l0cyBhbmQgdGhlIHBhaW50IGdvZXMgZmlyc3QpIGFuZCBhIGRpcnRcbiAgICAvLyAgICBiYW5kIGFsb25nIHRoZSBib3R0b20uIEJvdGggYXJlIG5vLW9wcyBvbiBhIHdvcmxkLXNwYWNlIHRpbGUsIHdoZXJlIHRoZXJlIGlzIG5vIHVwLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8udG9wU3RyZWFrcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDE0LCBsZW4gPSBzICogKDAuMjUgKyBybmQoKSAqIDAuNTUpO1xuICAgICAgY29uc3QgYSA9IDAuMTAgKyBybmQoKSAqIDAuMjI7XG4gICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcCgwLjI1LCBgcmdiYSgke3JnYihydXN0KX0sJHthICogMC44fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1c3QpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIDAsIHcsIGxlbik7XG4gICAgfVxuICAgIGlmIChvLmdyb3VuZEJhbmQpIHtcbiAgICAgIGNvbnN0IGIgPSBvLmdyb3VuZEJhbmQsIGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gKG8uZ3JvdW5kSGVpZ2h0ID8/IDAuMjIpKSk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2J9KWApOyBnLmFkZENvbG9yU3RvcCgwLjQ1LCBgcmdiYSgke3JnYihydW4pfSwke2IgKiAwLjR9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVuKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuXG4gICAgLy8gNS4gZmluZSBncmFpbjogdGhlIHRvb3RoIG9mIGEgYnJ1c2gtcm9sbGVkIGluZHVzdHJpYWwgcGFpbnQuIE11bHRpcGx5LCBzbyBpdCBvbmx5IGRhcmtlbnMuXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAxODAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMC41ICsgcm5kKCkgKiAxLjMsIGEgPSAwLjAzICsgcm5kKCkgKiAwLjA3O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDE1MCwxNDAsMTMwLCR7YX0pYDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZlbmNlIGhlbHBlcnMgKi9cblxuLyoqIFBhbmVsIFVWczogdSBhbG9uZyB3b3JsZCBYIG92ZXIgYHNjYWxlYCBtZXRyZXMsIHYgd29ybGQgSEVJR0hUIG92ZXIgdGhlIHNhbWUsIHJlZ2FyZGxlc3Mgb2YgdGhlXG4gKiAgZmFjZSBub3JtYWwuIE9uIGEgdGhpbiBzbGFiIHRoaXMgbWVhbnMgdGhlIGZyb250IGFuZCBiYWNrIGZhY2VzIHNoYXJlIHRoZSBzYW1lIHRpbGUgcGxhY2VtZW50XG4gKiAgYW5kIHRoZSBlZGdlcyB0YWtlIGEgc2xpdmVyIG9mIGl0OyBhIGdyaW1lIHdhc2ggdGhhdCBrZXlzIG9uIHYgdGhlbiBsYW5kcyBhdCB0aGUgc2FtZSBoZWlnaHQgb25cbiAqICBldmVyeSBmYWNlLCB3aGljaCBpcyB3aGF0IHJhaW4gYW5kIGFsZ2FlIGRvLiAqL1xuZnVuY3Rpb24gcGFuZWxVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyLCByb3QgPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIC8vIGByb3RgIHN3YXBzIHRoZSBheGVzIHNvIGEgdGlsZSBvZiBWRVJUSUNBTCBzdHJpcHMgcmVhZHMgaG9yaXpvbnRhbCAtLSB0aGUgd292ZW4gYmFuZHMgb2YgYVxuICAvLyBiYW1ib28gcGFuZWwgYWdhaW5zdCBpdHMgdmVydGljYWwgbXVsbGlvbnMsIG9uZSB0aWxlLCBvbmUgbWF0ZXJpYWwuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdSA9IHJvdCA/IHAuZ2V0WShpKSA6IHAuZ2V0WChpKSwgdiA9IHJvdCA/IHAuZ2V0WChpKSA6IHAuZ2V0WShpKTtcbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSB2IC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBBIHNxdWFyZSBweXJhbWlkIFNQSUtFOiBiYXNlIHcgeCB3IGF0IGBhdGAsIGFwZXggaCBhYm92ZS4gQSBwaWNrZXQncyBzcGVhciBwb2ludCwgYSBwaWVyIGNhcC4gKi9cbmZ1bmN0aW9uIHNwaWtlKGF0OiBudW1iZXJbXSwgdzogbnVtYmVyLCBoOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ29uZUdlb21ldHJ5KHcgLyBNYXRoLlNRUlQyLCBoLCA0LCAxLCBmYWxzZSk7XG4gIGcucm90YXRlWShNYXRoLlBJIC8gNCk7XG4gIGcudHJhbnNsYXRlKGF0WzBdLCBhdFsxXSArIGggLyAyLCBhdFsyXSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogR1JJTUUgdGlsZTogYSBtdWx0aXBsaWVyIG9mIHdoaXRlIHdpdGggKGEpIGEgZGFyayB3YXNoIHJpc2luZyBmcm9tIHRoZSBncm91bmQgdG8gYGNvdmVyYWdlYCxcbiAqIChiKSB2ZXJ0aWNhbCByYWluIHN0cmVha3MgZnJvbSB0aGUgdG9wLCAoYykgc29mdCBkYXJrIGJsb3RjaGVzLCAoZCkgb3B0aW9uYWwgZ3JlZW4gbW9zcy9hbGdhZVxuICogYmxvYnMgY29uY2VudHJhdGVkIGluIHRoZSBib3R0b20gYmFuZCwgYW5kIChlKSBmaW5lIGdyYWluLiBFdmVyeSBjb2xvdXIgaXMgYSBmcmFjdGlvbiBvZiB0aGVcbiAqIG1hdGVyaWFsJ3MgbWVhc3VyZWQgYWxiZWRvLCBhbmQgdGhlIGRhcmtlc3QgY29yZSBpcyBjbGFtcGVkIHNvIG5vdGhpbmcgb24gYSB3aGl0ZSBvciBjcmVhbVxuICogc3VyZmFjZSBkcm9wcyB0b3dhcmQgdGhlIGhvbGUgZ2F0ZSdzIGx1bWEgNTguXG4gKi9cbmZ1bmN0aW9uIGdyaW1lVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCB3YXNoID0gby53YXNoID8/IFswLjYyLCAwLjYyLCAwLjU4XSwgd2FzaEEgPSBvLndhc2hBbHBoYSA/PyAwLjcsIGNvdiA9IG8uY292ZXJhZ2UgPz8gMC4zO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICAvLyByYWluIHN0cmVha3MgZnJvbSB0aGUgdG9wXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zdHJlYWtzID8/IDI2KTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDEyLCBsZW4gPSBzICogKDAuMTUgKyBybmQoKSAqIDAuNiksIGEgPSAwLjA1ICsgcm5kKCkgKiAwLjEyO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgbGVuKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBjdHguZmlsbFJlY3QoeCwgMCwgdywgbGVuKTsgY3R4LmZpbGxSZWN0KHggLSBzLCAwLCB3LCBsZW4pO1xuICAgIH1cbiAgICAvLyBncm91bmQgd2FzaFxuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292KSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEF9KWApOyBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBICogMC40NX0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gYmxvdGNoZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmJsb3RjaGVzID8/IDQwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAxLjYpICogcywgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA2LCBhID0gMC4wOCArIHJuZCgpICogMC4zO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gbW9zcyAvIGFsZ2FlIGluIHRoZSBib3R0b20gYmFuZDogY2x1c3RlcmVkIHNwZWNrcywgYnJpZ2h0ZXItdGhhbi13YXNoIGdyZWVuXG4gICAgaWYgKG8ubW9zcykge1xuICAgICAgY29uc3QgbSA9IG8ubW9zcywgYmFuZCA9IG8ubW9zc0JhbmQgPz8gMC4yMjtcbiAgICAgIC8vIGEgZmFpbnQgZ3JlZW4gd2FzaCBvdmVyIHRoZSB3aG9sZSBiYW5kIGZpcnN0LCBzbyB0aGUgY2FycGV0cyBzaXQgaW4gZGFtcCBncm91bmQgcmF0aGVyIHRoYW5cbiAgICAgIC8vIGFzIGlzb2xhdGVkIGRvdHMgb24gY2xlYW4gcGFpbnRcbiAgICAgIGNvbnN0IG1nID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGJhbmQgKiAxLjMpKTtcbiAgICAgIG1nLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihtKX0sJHtvLm1vc3NXYXNoID8/IDAuMzV9KWApOyBtZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IobSl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbWc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ubW9zc0NsdXN0ZXJzID8/IDE0KTsgaysrKSB7XG4gICAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMS42KSAqIHMgKiBiYW5kLCBjciA9IHMgKiAoMC4wMTUgKyBybmQoKSAqIDAuMDQpO1xuICAgICAgICAvLyB0aGUgY2FycGV0OiBhIHNvZnQgYmxvYiwgdGhlbiBzcGVja3Mgb3ZlciBpdCBmb3IgdGhlIHR1ZnRlZCBlZGdlXG4gICAgICAgIGNvbnN0IGNnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSwgMCwgY3gsIGN5LCBjcik7XG4gICAgICAgIGNnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihtKX0sMC43KWApOyBjZy5hZGRDb2xvclN0b3AoMC42LCBgcmdiYSgke3JnYihtKX0sMC4zNSlgKTsgY2cuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKG0pfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY2c7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4ICsgZHgsIGN5LCBjciwgY3IgKiAwLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjcjtcbiAgICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCAqIDAuNiwgciA9IDEgKyBybmQoKSAqIDM7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKG0pfSwkezAuMzUgKyBybmQoKSAqIDAuNX0pYDtcbiAgICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZ3JhaW5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1MDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgdiA9IDIwMCArIE1hdGgucm91bmQocm5kKCkgKiA1NSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4xMilgOyBjdHguZmlsbFJlY3QoeCwgeSwgMS41LCAxLjUpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBDSEFJTi1MSU5LIHRpbGU6IGEgZGlhbW9uZCB3aXJlIGxhdHRpY2UgZHJhd24gb3BhcXVlIG92ZXIgYSBUUkFOU1BBUkVOVCBncm91bmQsIGJvdW5kIGFzIG1hcFxuICogIG9uIGFuIGFscGhhLXRlc3RlZCBtYXRlcmlhbCBzbyB0aGUgY2VsbHMgYXJlIG9wZW4uIE9uZSB0aWxlIGlzIG9uZSBkaWFtb25kIGNlbGw7IHRoZSBwYW5lJ3NcbiAqICBVVnMgcmVwZWF0IGl0IGF0IHRoZSByZWFsIG1lc2ggcGl0Y2guIGB3aXJlYCBpcyB0aGUgd2lyZSB3aWR0aCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBjZWxsLiAqL1xuZnVuY3Rpb24gY2hhaW5saW5rVGlsZShzaXplOiBudW1iZXIsIHdpcmU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IE1hdGgubWF4KDEuNSwgd2lyZSAqIHMpO1xuICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICBjb25zdCB2ID0gMTUwICsgTWF0aC5yb3VuZChybmQoKSAqIDMwKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiKCR7dn0sJHt2ICsgMn0sJHt2ICsgNH0pYDtcbiAgICAvLyB0d28gZGlhZ29uYWxzIHRocm91Z2ggdGhlIHRpbGUsIG9mZnNldCBzbyB0aGUgd3JhcCBtYWtlcyBhIGNvbnRpbnVvdXMgZGlhbW9uZCBsYXR0aWNlXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgMCk7IGN0eC5saW5lVG8ocywgcyk7XG4gICAgY3R4Lm1vdmVUbyhzLCAwKTsgY3R4LmxpbmVUbygwLCBzKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gdGhlIGtudWNrbGUgd2hlcmUgd2lyZXMgdHdpc3Qgcm91bmQgZWFjaCBvdGhlciwgYXQgdGhlIHR3byBjcm9zc2luZ3Mgb24gdGhlIHRpbGUgZWRnZXNcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3YgLSAyMH0sJHt2IC0gMTh9LCR7diAtIDE2fSlgO1xuICAgIGZvciAoY29uc3QgW3gsIHldIG9mIFtbMCwgMF0sIFtzLCAwXSwgWzAsIHNdLCBbcywgc10sIFtzIC8gMiwgcyAvIDJdXSkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHksIGN0eC5saW5lV2lkdGggKiAwLjksIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogQkFNQk9PIFNUUklQIHRpbGU6IHZlcnRpY2FsIHNwbGl0LWJhbWJvbyBzdHJpcHMgd2l0aCBwYWxlIGN1bG0gZmFjZXMsIGRhcmsgam9pbnRzIGJldHdlZW4gdGhlbVxuICogIGFuZCBhIG5vZGUgbGluZSBvciB0d28gLS0gYSBtdWx0aXBsaWVyIG9uIHRoZSBtZWFzdXJlZCBzaWx2ZXItZ3JleS4gKi9cbmZ1bmN0aW9uIGJhbWJvb1RpbGUoc2l6ZTogbnVtYmVyLCBzdHJpcHM6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBzdyA9IHMgLyBzdHJpcHM7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBzdHJpcHM7IGIrKykge1xuICAgICAgY29uc3QgdG9uZSA9IDAuODAgKyBybmQoKSAqIDAuMiwgdiA9IE1hdGgucm91bmQoMjU1ICogdG9uZSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7diAtIDJ9LCR7diAtIDZ9KWA7IGN0eC5maWxsUmVjdChiICogc3csIDAsIHN3LCBzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1MCw0MiwzNCwwLjYpJzsgY3R4LmZpbGxSZWN0KGIgKiBzdywgMCwgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSwgcyk7XG4gICAgICAvLyBhIGhpZ2hsaWdodCBkb3duIHRoZSBjdWxtJ3Mgcm91bmRcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjEwKSc7IGN0eC5maWxsUmVjdChiICogc3cgKyBzdyAqIDAuMzUsIDAsIHN3ICogMC4yNSwgcyk7XG4gICAgICAvLyBub2RlIHJpbmdzXG4gICAgICBjb25zdCBuID0gMSArIE1hdGguZmxvb3Iocm5kKCkgKiAyKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7IGNvbnN0IHkgPSBybmQoKSAqIHM7IGN0eC5maWxsU3R5bGUgPSAncmdiYSg3MCw2MCw0OCwwLjQ1KSc7IGN0eC5maWxsUmVjdChiICogc3csIHksIHN3LCBNYXRoLm1heCgxLCBzICogMC4wMDgpKTsgfVxuICAgICAgLy8gZmluZSBncmFpbiBsaW5lc1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA2OyBrKyspIHsgY29uc3QgeCA9IGIgKiBzdyArIHJuZCgpICogc3c7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSg4MCw3MCw1OCwkezAuMDUgKyBybmQoKSAqIDAuMX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpOyB9XG4gICAgfVxuICAgIC8vIG1vdWxkIHNwZWNrbGVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwMDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7IGN0eC5maWxsU3R5bGUgPSAncmdiYSgzMCwyOCwyNCwwLjE4KSc7IGN0eC5maWxsUmVjdCh4LCB5LCAxICsgcm5kKCkgKiAyLCAxICsgcm5kKCkgKiAyKTsgfVxuICB9KTtcbn1cblxuLyoqIFBPU1RFUiB0aWxlIGZvciBhIGhvYXJkaW5nOiB0b3JuIHBhc3RlLXVwIHNoZWV0cyBhbmQgYSBzcHJheSBzdGVuY2lsIG92ZXIgYSBUUkFOU1BBUkVOVCBncm91bmQsXG4gKiAgYm91bmQgb24gYW4gYWxwaGEtdGVzdGVkIHBhbmUgYSBmZXcgbWlsbGltZXRyZXMgcHJvdWQgb2YgdGhlIHNoZWV0LiBgbGluZXNgIGFyZSB0aGUgc3RlbmNpbFxuICogIHN0cmluZ3M7IGEgcHJpbnRlZCBncmFwaGljIGlzIGV4YWN0bHkgdGhlIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyBjYXNlLiAqL1xuZnVuY3Rpb24gcG9zdGVyVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbGluZXM6IHN0cmluZ1tdKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gcGFzdGUtdXBzOiBvdmVybGFwcGluZyBvZmYtd2hpdGUgcmVjdGFuZ2xlcyB3aXRoIHRvcm4gZWRnZXMgYW5kIGZhaW50IHByaW50IGxpbmVzXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMzApLCB5ID0gcyAqICgwLjE1ICsgcm5kKCkgKiAwLjQ1KSwgdyA9IHMgKiAoMC4xNCArIHJuZCgpICogMC4xNiksIGggPSBzICogKDAuMTggKyBybmQoKSAqIDAuMjIpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7MjI1ICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKX0sJHsyMjIgKyBNYXRoLnJvdW5kKHJuZCgpICogMTgpfSwkezIxMCArIE1hdGgucm91bmQocm5kKCkgKiAyMCl9LDAuOTYpYDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgIGNvbnN0IG4gPSA5O1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKSBjdHgubGluZVRvKHggKyB3ICogaSAvIG4sIHkgKyAocm5kKCkgLSAwLjUpICogaCAqIDAuMDgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKSBjdHgubGluZVRvKHggKyB3ICsgKHJuZCgpIC0gMC41KSAqIHcgKiAwLjA4LCB5ICsgaCAqIGkgLyBuKTtcbiAgICAgIGZvciAobGV0IGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIGN0eC5saW5lVG8oeCArIHcgKiBpIC8gbiwgeSArIGggKyAocm5kKCkgLSAwLjUpICogaCAqIDAuMTIpO1xuICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkgY3R4LmxpbmVUbyh4ICsgKHJuZCgpIC0gMC41KSAqIHcgKiAwLjA4LCB5ICsgaCAqIGkgLyBuKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCw0MCw0NSwwLjU1KSc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykgY3R4LmZpbGxSZWN0KHggKyB3ICogMC4xLCB5ICsgaCAqICgwLjIgKyBpICogMC4xKSwgdyAqICgwLjMgKyBybmQoKSAqIDAuNSksIE1hdGgubWF4KDEsIHMgKiAwLjAwNikpO1xuICAgIH1cbiAgICAvLyBzcHJheSBzdGVuY2lsLCBzbGlnaHRseSBzb2Z0IGFuZCB1bmV2ZW5cbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjAsMjAsMjIsMC44OCknO1xuICAgIGN0eC5mb250ID0gYGJvbGQgJHtNYXRoLnJvdW5kKHMgKiAwLjA3KX1weCBzYW5zLXNlcmlmYDtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHMgKiAwLjQwLCB5ID0gcyAqICgwLjQ0ICsgaSAqIDAuMTMpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAzOyBrKyspIHsgY3R4Lmdsb2JhbEFscGhhID0gMC42OyBjdHguZmlsbFRleHQobGluZXNbaV0sIHggKyAocm5kKCkgLSAwLjUpICogMywgeSArIChybmQoKSAtIDAuNSkgKiAzKTsgfVxuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogU1RSSVBFIHRpbGU6IGFsdGVybmF0aW5nIGNvbG91ciBiYW5kcyBhbG9uZyB1IChhbiBhd25pbmcpLCB3aXRoIGEgc29mdCBncmltZSBtdWx0aXBseSBzbyB0aGUgY2xvdGhcbiAqICByZWFkcyB3b3JuIHJhdGhlciB0aGFuIHByaW50ZWQuIGBhYC9gYmAgYXJlIHRoZSB0d28gYmFuZCBjb2xvdXJzIGFzIFtyLGcsYl0gMC0xLiBCb3VuZCBhcyBtYXAgb24gYVxuICogIFdISVRFIG1hdGVyaWFsIHNvIHRoZSBiYW5kcyBjYXJyeSB0aGUgd2hvbGUgYWxiZWRvLiAqL1xuZnVuY3Rpb24gc3RyaXBlVGlsZShzaXplOiBudW1iZXIsIGJhbmRzOiBudW1iZXIsIGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYHJnYigke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfSlgO1xuICAgIGNvbnN0IHcgPSBzIC8gYmFuZHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYW5kczsgaSsrKSB7IGN0eC5maWxsU3R5bGUgPSByZ2IoaSAlIDIgPyBiIDogYSk7IGN0eC5maWxsUmVjdChNYXRoLmZsb29yKGkgKiB3KSwgMCwgTWF0aC5jZWlsKHcpICsgMSwgcyk7IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wOCwgYWwgPSAwLjA2ICsgcm5kKCkgKiAwLjE4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTUwLDE0MCwxMjUsJHthbH0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxNTAsMTQwLDEyNSwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyMDA7IGkrKykgeyBjb25zdCB2ID0gMjAwICsgTWF0aC5yb3VuZChybmQoKSAqIDU1KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMTApYDsgY3R4LmZpbGxSZWN0KHJuZCgpICogcywgcm5kKCkgKiBzLCAxLjUsIDEuNSk7IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBTZWFtbGVzcyBhcm91bmQtYnktdXAgVVZzIGZvciBhIExhdGhlR2VvbWV0cnk6IHUgZnJvbSB0aGUgU0VHTUVOVCBpbmRleCAodGhlIGxhdGhlIG9yZGVycyBpdHNcbiAqICB2ZXJ0aWNlcyBzZWdtZW50LW1ham9yLCBpbmRleCA9IHNlZyAqIHBvaW50Q291bnQgKyBwb2ludCksIHNvIHRoZSBkdXBsaWNhdGVkIHNlYW0gY29sdW1uIHJlYWRzXG4gKiAgdSA9IHJlcGVhdHMgZXhhY3RseSBhbmQgUmVwZWF0V3JhcHBpbmcgY2xvc2VzIGl0LiBgc2NhbGVgIGlzIHRoZSB0aWxlIHNpemUgaW4gbWV0cmVzOyB0aGVcbiAqICBhcm91bmQtcmVwZWF0IGNvdW50IGlzIHJvdW5kZWQgc28gdGhlIHRpbGUgbWVldHMgaXRzZWxmLCBmcm9tIHRoZSBwcm9maWxlJ3Mgd2lkZXN0IHJhZGl1cy4gKi9cbmZ1bmN0aW9uIGxhdGhlVVYoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHBvaW50Q291bnQ6IG51bWJlciwgc2VnOiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIHZTY2FsZSA9IHNjYWxlLCB2MCA9IDApOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBsZXQgck1heCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSByTWF4ID0gTWF0aC5tYXgock1heCwgTWF0aC5oeXBvdChwLmdldFgoaSksIHAuZ2V0WihpKSkpO1xuICBjb25zdCByZXAgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKDIgKiBNYXRoLlBJICogck1heCAvIHNjYWxlKSk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgcyA9IE1hdGguZmxvb3IoaSAvIHBvaW50Q291bnQpO1xuICAgIHV2W2kgKiAyXSA9IChzIC8gc2VnKSAqIHJlcDsgdXZbaSAqIDIgKyAxXSA9IChwLmdldFkoaSkgLSB2MCkgLyB2U2NhbGU7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xufVxuXG4vKiogRVhQT1NFRC1BR0dSRUdBVEUgdGlsZTogYSBkYXJrIG1vcnRhciBncm91bmQgcGFja2VkIHdpdGggcm91bmRlZCBwZWJibGVzIGluIGEgbWVhc3VyZWQgcGFsZXR0ZSxcbiAqICBlYWNoIGRyYXduIGF0IG5pbmUgd3JhcHBlZCBvZmZzZXRzIHNvIHRoZSB0aWxlIGlzIHNlYW1sZXNzLiBgby5wYWxldHRlYCBpcyBhIGxpc3Qgb2YgW3IsZyxiXVxuICogIHJhdGlvcyBhZ2FpbnN0IHRoZSBtYXRlcmlhbCBjb2xvdXIsIGBvLmdyb3VuZGAgdGhlIG1vcnRhciByYXRpbywgYG8uY291bnRgIHRoZSBwZWJibGUgY291bnQuICovXG5mdW5jdGlvbiBwZWJibGVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgcmdiKCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9KWA7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHJnYihvLmdyb3VuZCA/PyBbMC40NSwgMC40MiwgMC4zOF0pOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgcGFsOiBudW1iZXJbXVtdID0gby5wYWxldHRlID8/IFtbMC44NSwgMC43OCwgMC42Nl0sIFswLjcyLCAwLjYyLCAwLjUwXSwgWzAuNjAsIDAuNTgsIDAuNTVdLCBbMC45MCwgMC44NiwgMC44MF1dO1xuICAgIGNvbnN0IG4gPSBvLmNvdW50ID8/IDkwMCwgck1pbiA9IHMgKiAoby5yTWluID8/IDAuMDEyKSwgck1heCA9IHMgKiAoby5yTWF4ID8/IDAuMDI4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgcnggPSByTWluICsgcm5kKCkgKiAock1heCAtIHJNaW4pLCByeSA9IHJ4ICogKDAuNiArIHJuZCgpICogMC41KSwgYSA9IHJuZCgpICogTWF0aC5QSTtcbiAgICAgIGNvbnN0IGMgPSBwYWxbTWF0aC5mbG9vcihybmQoKSAqIHBhbC5sZW5ndGgpXSwgayA9IDAuODUgKyBybmQoKSAqIDAuMztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSByZ2IoYy5tYXAoKHYpID0+IE1hdGgubWluKDEsIHYgKiBrKSkpO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgcngsIHJ5LCBhLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIC8vIGEgaGlnaGxpZ2h0IGNyZXNjZW50IG9uIHRoZSBsaXQgc2lkZSBzbyBlYWNoIHN0b25lIHJlYWRzIGFzIGEgYnVtcFxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpJztcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4IC0gcnggKiAwLjIsIHkgKyBkeSAtIHJ5ICogMC4yNSwgcnggKiAwLjUsIHJ5ICogMC40LCBhLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogVFlSRSBUUkVBRCB0aWxlIGZvciBhIGxhdGhlIGNhcnJ5aW5nIGBjeWxVVmA6IHUgcnVucyBBUk9VTkQgdGhlIHR5cmUgYW5kIHYgVVAgaXQsIHNvIHRyZWFkIHNsb3RzIGFyZVxuICogIGJhcnMgYXQgY29uc3RhbnQgdSBhbmQgdGhlIGNpcmN1bWZlcmVudGlhbCBncm9vdmVzIGFyZSBsaW5lcyBhdCBjb25zdGFudCB2LiBEcmF3biBhcyByYXRpb3Mgb24gd2hpdGVcbiAqICBhbmQgbXVsdGlwbGllZCBpbnRvIHRoZSAobGlmdGVkKSBydWJiZXIgY29sb3VyOyBgby5ncm9vdmVgIGlzIHRoZSBkYXJrZXN0IHJhdGlvLCBrZXB0IGFib3ZlIHRoZVxuICogIGx1bWEtNTggaG9sZSBiYW5kIGJ5IHRoZSBjYWxsZXIuIGBvLnNsb3RzYCBiYXJzIHBlciB0aWxlLCBgby5yaW5nc2AgY2lyY3VtZmVyZW50aWFsIGxpbmVzLiAqL1xuZnVuY3Rpb24gdHJlYWRUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgZ3Jvb3ZlID0gby5ncm9vdmUgPz8gMC44MCwgc2xvdHMgPSBvLnNsb3RzID8/IDIsIHJpbmdzID0gby5yaW5ncyA/PyAyO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBjb25zdCBndiA9IE1hdGgucm91bmQoMjU1ICogZ3Jvb3ZlKTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2d2fSwke2d2fSwke2d2fSlgO1xuICAgIGNvbnN0IHBpdGNoID0gcyAvIHNsb3RzLCB3ID0gcGl0Y2ggKiAoby5zbG90V2lkdGggPz8gMC4xNik7XG4gICAgLy8gdHJlYWQgc2xvdHMgc3BhbiB0aGUgYmFuZCBiZXR3ZWVuIHRoZSB0d28gZWRnZSBzaG91bGRlcnMgKHYgMC4xMi4uMC44OCBvZiB0aGUgdGlsZSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsb3RzOyBpKyspIHsgY29uc3QgeCA9IGkgKiBwaXRjaCArIHBpdGNoICogMC40ICsgKHJuZCgpIC0gMC41KSAqIHBpdGNoICogMC4xOyBjdHguZmlsbFJlY3QoeCwgcyAqIDAuMTIsIHcsIHMgKiAwLjc2KTsgY3R4LmZpbGxSZWN0KHggLSBzLCBzICogMC4xMiwgdywgcyAqIDAuNzYpOyB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByaW5nczsgaSsrKSB7IGNvbnN0IHkgPSBzICogKDAuMiArIDAuNiAqIChpICsgMC41KSAvIHJpbmdzKTsgY3R4LmZpbGxSZWN0KDAsIHkgLSAxLjUsIHMsIDMpOyB9XG4gICAgLy8gc2lkZXdhbGwgc2hlZW46IGEgc29mdCBsaWdodGVyIHdhc2ggc28gdGhlIHJ1YmJlciBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xMiksIHYgPSAyMzUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7IGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjUpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogT0xEIFRZUkUgdGlsZTogVFdPIHR5cmUgaGVpZ2h0cyB0YWxsIGJ5IGBvLnBpdGNoYCBtZXRyZXMgYXJvdW5kIChjeWxVVikuIFRoZSB1cHBlciBoYWxmICh2IDAuNS0xKVxuICogIGlzIGEgdHJlYWRlZCB0eXJlLCB0aGUgbG93ZXIgaGFsZiAodiAwLTAuNSkgYSB3b3JuIFNMSUNLIHdpdGggY2lyY3VtZmVyZW50aWFsIGdyb292ZXMgYW5kIHNob3J0XG4gKiAgc2hvdWxkZXIgc2lwZXMgb25seSwgc28gYSBzdGFjayBtaXhlcyBiYWxkIGFuZCB0cmVhZGVkIHR5cmVzIG9mZiBvbmUgY2FudmFzIGJ5IHYwLiBEcmF3biBhcyBSQVRJT1NcbiAqICBhZ2FpbnN0IHRoZSB2ZXJ0ZXgtY29sb3VyZWQgcnViYmVyIGF0IGBiYXNlYCAoMjAwLzI1NSAtPiB2ZXJ0ZXggdG9uZXMgYXJlIGF1dGhvcmVkIDEuMjc1eCB0aGVcbiAqICBpbnRlbmRlZCBhbGJlZG8gc28gZHVzdCBhbmQgc2N1ZmZzIGNhbiBnbyBCUklHSFRFUiB0aGFuIHRoZSBydWJiZXIgdW5kZXIgYSBtdWx0aXBseSBjYW52YXMpLlxuICogIFJvd3MgYXJlIGhlaWdodHM6IGxvd2VyIHNpZGV3YWxsLCB0cmVhZCBiYW5kICh2IGBvLmJhbmRbMF1gLi5gby5iYW5kWzFdYCBvZiB0aGUgc3RyaXApLCB1cHBlclxuICogIHNpZGV3YWxsIHdpdGggYmVhZCByaW5ncyBhbmQgbW91bGQgbGluZXMuIFdlYXI6IGEgd2FybSBkdXN0IHdhc2ggb24gdGhlIGxvd2VyIHNob3VsZGVyLCBncmV5IHNjdWZmc1xuICogIG9uIGJvdGggc2hvdWxkZXJzLCBkdXN0IGNhdWdodCBpbiB0aGUgY3V0cywgZ3JhaW4gb3ZlciBldmVyeXRoaW5nLiAqL1xuZnVuY3Rpb24gdHlyZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IDIwMCwgYmFuZCA9IG8uYmFuZCA/PyBbMC4yNCwgMC43Nl0sIGdyb292ZSA9IG8uZ3Jvb3ZlID8/IDAuNDU7XG4gICAgY29uc3QgZ3YgPSBNYXRoLnJvdW5kKGJhc2UgKiBncm9vdmUpLCBydiA9IE1hdGgucm91bmQoYmFzZSAqIDAuNyksIG12ID0gTWF0aC5yb3VuZChiYXNlICogMC45KTtcbiAgICBjb25zdCBkdXN0ID0gby5kdXN0ID8/IFsyMzIsIDIxNCwgMTkwXTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2Jhc2V9LCR7YmFzZX0sJHtiYXNlfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzICogcyAvIDY7IGkrKykgeyBjb25zdCB2ID0gYmFzZSArIE1hdGgucm91bmQoKHJuZCgpIC0gMC41KSAqIDIyKTsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHJuZCgpICogcywgcm5kKCkgKiBzLCAyLCAyKTsgfVxuICAgIC8vIG9uZSB0eXJlIHN0cmlwIGJldHdlZW4gY2FudmFzIHJvd3MgeWEgKHRvcCkgYW5kIHliIChib3R0b20pOyBjYW52YXMgeSBncm93cyBET1dOLCB2IGdyb3dzIFVQXG4gICAgY29uc3Qgc3RyaXAgPSAoeWE6IG51bWJlciwgeWI6IG51bWJlciwgdHJlYWRlZDogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc3QgaCA9IHliIC0geWEsIGIwID0geWEgKyBoICogKDEgLSBiYW5kWzFdKSwgYjEgPSB5YSArIGggKiAoMSAtIGJhbmRbMF0pO1xuICAgICAgY29uc3QgbmcgPSBvLmdyb292ZXMgPz8gMywgZ3cgPSBoICogMC4wMjQ7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2d2fSwke2d2fSwke2d2fSlgO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZzsgaSsrKSB7IGNvbnN0IHkgPSBiMCArIChiMSAtIGIwKSAqIChpICsgMSkgLyAobmcgKyAxKTsgY3R4LmZpbGxSZWN0KDAsIHkgLSBndyAvIDIsIHMsIGd3KTsgfVxuICAgICAgY29uc3QgbnMgPSBvLnNpcGVzID8/IDIsIHcgPSBzICogKG8uc2lwZVdpZHRoID8/IDAuMDUpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPD0gbmc7IGsrKykge1xuICAgICAgICBjb25zdCB5MCA9IGsgPT09IDAgPyBiMCA6IGIwICsgKGIxIC0gYjApICogayAvIChuZyArIDEpICsgZ3cgLyAyLCB5MSA9IGsgPT09IG5nID8gYjEgOiBiMCArIChiMSAtIGIwKSAqIChrICsgMSkgLyAobmcgKyAxKSAtIGd3IC8gMjtcbiAgICAgICAgLy8gYSBzbGljayBrZWVwcyBvbmx5IFNIT1JUIHNpcGVzIGF0IHRoZSB0d28gc2hvdWxkZXIgcm93cywgY3V0IGluIGZyb20gdGhlIGJhbmQgZWRnZVxuICAgICAgICBjb25zdCBvdXRlciA9IGsgPT09IDAgfHwgayA9PT0gbmc7XG4gICAgICAgIGlmICghdHJlYWRlZCAmJiAhb3V0ZXIpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCB5czAgPSB0cmVhZGVkID8geTAgOiAoayA9PT0gMCA/IHkwIDogeTEgLSAoeTEgLSB5MCkgKiAwLjQ1KSwgeXMxID0gdHJlYWRlZCA/IHkxIDogKGsgPT09IDAgPyB5MCArICh5MSAtIHkwKSAqIDAuNDUgOiB5MSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnM7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHggPSAoKGkgKyAwLjUpIC8gbnMgKyAoayAlIDIpICogMC41IC8gbnMpICogcyArIChybmQoKSAtIDAuNSkgKiBzICogMC4wNiwgc2wgPSAocm5kKCkgLSAwLjUpICogcyAqIDAuMDg7XG4gICAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIHlzMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdywgeXMwKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3ICsgc2wsIHlzMSk7IGN0eC5saW5lVG8oeCArIGR4ICsgc2wsIHlzMSk7IGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBzaG91bGRlciBzdGVwIGF0IHRoZSB0b3Agb2YgdGhlIGJhbmQsIGJlYWQgcmluZ3MgYW5kIG1vdWxkIGxpbmVzIG9uIHRoZSBzaWRld2FsbHNcbiAgICAgIGNvbnN0IHNoID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGIwIC0gaCAqIDAuMDMsIDAsIGIwICsgaCAqIDAuMDIpOyBzaC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtndn0sJHtndn0sJHtndn0sMClgKTsgc2guYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9LDAuNDUpYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gc2g7IGN0eC5maWxsUmVjdCgwLCBiMCAtIGggKiAwLjAzLCBzLCBoICogMC4wNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3J2fSwke3J2fSwke3J2fSlgOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC4wNDUsIHMsIGggKiAwLjAxMik7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjk0LCBzLCBoICogMC4wMTIpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHttdn0sJHttdn0sJHttdn0pYDsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuMTEsIHMsIDIpOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC44OCwgcywgMik7XG4gICAgICAvLyB3ZWFyOiB3YXJtIHJvYWQgZHVzdCBvbiB0aGUgbG93ZXIgc2hvdWxkZXIgYW5kIHNpZGV3YWxsLCBncmV5IHNjdWZmcyBvbiBib3RoIHNob3VsZGVyc1xuICAgICAgY29uc3QgZGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeWIsIDAsIHlhICsgaCAqIDAuNik7IGRnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2R1c3RbMF19LCR7ZHVzdFsxXX0sJHtkdXN0WzJdfSwke28uZHVzdEFscGhhID8/IDAuMzV9KWApOyBkZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtkdXN0WzBdfSwke2R1c3RbMV19LCR7ZHVzdFsyXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBkZzsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuNiwgcywgaCAqIDAuNCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNjdWZmcyA/PyAxNCk7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgPCAwLjUgPyBiMCArIChybmQoKSAtIDAuMykgKiBoICogMC4wOCA6IGIxICsgKHJuZCgpIC0gMC43KSAqIGggKiAwLjA4LCByID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjA1KSwgdiA9IDIyNSArIE1hdGgucm91bmQocm5kKCkgKiAyNSk7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpOyBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC41KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHksIHIgKiAyLjIsIHIgKiAwLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdsaWdodGVyJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gYjAgKyBybmQoKSAqIChiMSAtIGIwKSwgdiA9IDYgKyBNYXRoLnJvdW5kKHJuZCgpICogMTQpOyBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7TWF0aC5yb3VuZCh2ICogMC45KX0sJHtNYXRoLnJvdW5kKHYgKiAwLjc1KX0pYDsgY3R4LmZpbGxSZWN0KHgsIHksIDIgKyBybmQoKSAqIDYsIDIgKyBybmQoKSAqIDMpOyB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9O1xuICAgIHN0cmlwKDAsIHMgLyAyLCB0cnVlKTsgICAgICAvLyB2IDAuNS4uMTogdHJlYWRlZFxuICAgIHN0cmlwKHMgLyAyLCBzLCBmYWxzZSk7ICAgICAvLyB2IDAuLjAuNTogc2xpY2tcbiAgfSk7XG59XG5cbi8qKiBBIHRhcGVyZWQgYm94OiBCb3hHZW9tZXRyeSgxLCBoLCAxKSB3aG9zZSB4L3ogYXJlIHNjYWxlZCBwZXIgdmVydGV4IGJ5IHRoZSBmb290cHJpbnQgaW50ZXJwb2xhdGVkXG4gKiAgZnJvbSAodzAsIGQwKSBhdCB0aGUgYm90dG9tIHRvICh3MSwgZDEpIGF0IHRoZSB0b3AuIE5vcm1hbHMgcmVjb21wdXRlZCBzbyB0aGUgc2xhbnRlZCBmYWNlcyBzaGFkZVxuICogIGZsYXQuIGBiYCA9IFtjeCwgeUJvdHRvbSwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXS4gKi9cbmZ1bmN0aW9uIGZydXN0dW0oYjogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IFtjeCwgeTAsIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0gPSBiO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIGgsIDEpO1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IChwLmdldFkoaSkgKyBoIC8gMikgLyBoO1xuICAgIHAuc2V0WChpLCBwLmdldFgoaSkgKiAodzAgKyAodzEgLSB3MCkgKiB0KSk7IHAuc2V0WihpLCBwLmdldFooaSkgKiAoZDAgKyAoZDEgLSBkMCkgKiB0KSk7XG4gIH1cbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICBnLnRyYW5zbGF0ZShjeCwgeTAgKyBoIC8gMiwgY3opO1xuICByZXR1cm4gZztcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjYW5vcHktbW9kdWxlIGhlbHBlcnNcbiAqIFRoZSBmaXZlIENBTk9QWSBNT0RVTEVTIC0tIG5pcGEgdGhhdGNoLCB2ZXRpdmVyIHRoYXRjaCwgc3BsaXQgYmFtYm9vLCBjb3JydWdhdGVkIG1ldGFsLFxuICogdGFycGF1bGluIC0tIGFyZSBvbmUgZmFtaWx5OiBmb3VyIGNvcm5lciBwb3N0cyBpbnNpZGUgYSA0IHggNCBtIG1vZHVsZSwgYSBoZWFkIGZyYW1lLCBhbmQgYSByb29mXG4gKiB3aG9zZSBtYXRlcmlhbCBpcyB0aGUgd2hvbGUgaWRlbnRpdHkuIFdoYXQgdGhleSBuZWVkIGJleW9uZCB0aGUgc3RyZWV0LXByb3Agdm9jYWJ1bGFyeSBpcyBhXG4gKiByb29maW5nIHRpbGUgcGVyIG1hdGVyaWFsIGFuZCB0aGUgY3VsbSBtYXBwaW5nIGEgcm91bmQgYmFtYm9vIHBvbGUgd2FudHMuXG4gKlxuICogYGN1bG1VVmAsIGBncmFpbkxpbmVzYCwgYHdlYXRoZXJQYXRjaGVzYCwgYG1vdWxkQ2x1c3RlcnNgIGFuZCBgY3VsbVRpbGVgIGFyZSBwb3J0ZWQgVkVSQkFUSU0gZnJvbVxuICogc2NyYXRjaC9fZmVuY2UvZmVuY2UuaGVscGVycy50bXBsLCB3aGVyZSB0aGV5IHdlcmUgd3JpdHRlbiBmb3IgdGhlIGJhbWJvbyBmZW5jZSBwYW5lbCBhbmQgd2hlcmVcbiAqIHRoZSByZWFzb25pbmcgYmVoaW5kIGV2ZXJ5IG51bWJlciBpcyByZWNvcmRlZC4gVGhleSBhcmUgY29waWVkIHJhdGhlciB0aGFuIHNoYXJlZCBiZWNhdXNlIHRoZSB0d29cbiAqIGZhbWlsaWVzIGtlZXAgc2VwYXJhdGUgdGVtcGxhdGUgc2V0czsgYSB0aGlyZCBmYW1pbHkgd2FudGluZyB0aGVtIHNob3VsZCBtb3ZlIHRoZW0gdXAgaW50b1xuICogaGVscGVycy50bXBsIHJhdGhlciB0aGFuIGNvcHkgdGhlbSBhIHNlY29uZCB0aW1lLlxuICovXG5cbi8qKiBDVUxNIFVWczogdSBhcm91bmQgdGhlIGNpcmN1bWZlcmVuY2UgYW5kIHYgYWxvbmcgdGhlIGxlbmd0aCwgYm90aCBpbiBtZXRyZXMgb3ZlciBgc2NhbGVgLCBzbyBhXG4gKiAgY3VsbSB0aWxlJ3Mgbm9kZSByaW5ncyBjcm9zcyB0aGUgY3VsbSBhdCByZWFsIHNwYWNpbmcgd2hpY2hldmVyIHdheSB0aGUgY3lsaW5kZXIgaXMgdGhlbiByb3RhdGVkLlxuICogIEFwcGx5IEJFRk9SRSByb3RhdGUvdHJhbnNsYXRlLiBgdk9mZmAgcGhhc2VzIHRoZSB0aWxlIGFsb25nIHRoZSBjdWxtIHNvIG5vIHR3byBjdWxtcyAob3IgYSBjb3JkXG4gKiAgY29sbGFyKSByaW5nIGF0IHRoZSBzYW1lIHN0YXRpb24uICovXG5mdW5jdGlvbiBjdWxtVVYoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHI6IG51bWJlciwgaDogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCB2T2ZmID0gMCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgY29uc3Qga3UgPSAoMiAqIE1hdGguUEkgKiByKSAvIHNjYWxlLCBrdiA9IGggLyBzY2FsZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1di5nZXRYKGkpICoga3UsIHV2LmdldFkoaSkgKiBrdiArIHZPZmYpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEZpbmUgbG9uZ2l0dWRpbmFsIGdyYWluIGJldHdlZW4geTAgYW5kIHkxIGFjcm9zcyBhIGJhbmQgeDAuLngxOiBtYW55IGhhaXJsaW5lcywgbW9zdGx5IGEgZGFya1xuICogIGZpYnJlIHRvbmUsIGEgZmV3IGJsZWFjaGVkLCBzbyB0aGUgc3VyZmFjZSByZWFkcyBhcyBmaWJyb3VzIGJhbWJvbyByYXRoZXIgdGhhbiBwYWludC4gKi9cbmZ1bmN0aW9uIGdyYWluTGluZXMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJuZDogKCkgPT4gbnVtYmVyLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBuOiBudW1iZXIsIGRhcms6IHN0cmluZywgbGlnaHQ6IHN0cmluZywgYU1heDogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgY29uc3QgeCA9IHgwICsgcm5kKCkgKiAoeDEgLSB4MCksIGEgPSAwLjA0ICsgcm5kKCkgKiBhTWF4LCB3ID0gcm5kKCkgPCAwLjc1ID8gMSA6IDEuNjtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtybmQoKSA8IDAuNzIgPyBkYXJrIDogbGlnaHR9LCR7YS50b0ZpeGVkKDMpfSlgO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5MCwgdywgeTEgLSB5MCk7XG4gIH1cbn1cblxuLyoqIFNvZnQgY2xvdWR5IHdlYXRoZXJpbmcgYWxvbmcgdGhlIGZpYnJlIGRpcmVjdGlvbjogbGVuZ3Rod2lzZSBwYXRjaGVzIG9mIHdhcm0gYnJvd24tZ3JleSAob2xkXG4gKiAgbGlnbmluIHNob3dpbmcgdGhyb3VnaCB0aGUgYmxlYWNoKSBhbmQgb2YgbmVhci13aGl0ZSAoc3VuLWJsZWFjaGVkIGZhY2VzKSwgc28gdGhlIHRvbmUgZHJpZnRzXG4gKiAgdGhlIHdheSB3ZWF0aGVyZWQgYmFtYm9vIGRvZXMgaW5zdGVhZCBvZiBzaXR0aW5nIGF0IG9uZSBncmV5LiBWZXJ0aWNhbCA9IGFsb25nIHRoZSBmaWJyZS4gKi9cbmZ1bmN0aW9uIHdlYXRoZXJQYXRjaGVzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBybmQ6ICgpID0+IG51bWJlciwgczogbnVtYmVyLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCBuOiBudW1iZXIsIHdhcm1BOiBudW1iZXIsIGJsZWFjaEE6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykge1xuICAgIGNvbnN0IHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4xMiArIHJuZCgpICogMC40NSksIHdhcm0gPSBybmQoKSA8IDAuNTtcbiAgICBjb25zdCBjID0gd2FybSA/ICcxMTIsMTAwLDg4JyA6ICcyNTUsMjU1LDI1NScsIGEgPSB3YXJtID8gd2FybUEgKiAoMC40ICsgcm5kKCkgKiAwLjYpIDogYmxlYWNoQSAqICgwLjQgKyBybmQoKSAqIDAuNik7XG4gICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSwgMCwgeSArIGxlbik7XG4gICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y30sMClgKTsgZzIuYWRkQ29sb3JTdG9wKDAuMzUsIGByZ2JhKCR7Y30sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNjUsIGByZ2JhKCR7Y30sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y30sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeDAsIHkgKyBkeSwgeDEgLSB4MCwgbGVuKTtcbiAgfVxufVxuXG4vKiogTW91bGQ6IGNsdXN0ZXJzIG9mIHNtYWxsIGRhcmsgc3BlY2tzIChhIGZldyBkb3plbiBlYWNoKSwgdGhlIHdheSBibGFjayBtb3VsZCBzaXRzIG9uIG91dGRvb3JcbiAqICBiYW1ib28gLS0gZGVuc2UgYXQgYSBmZXcgc3BvdHMsIGFic2VudCBlbHNld2hlcmUuIEFscGhhIGNhcHBlZCBzbyB0aGUgZGFya2VzdCBzcGVjayBvdmVyIHRoZVxuICogIG1lYXN1cmVkIGFsYmVkbyBzdGF5cyB3ZWxsIGNsZWFyIG9mIHRoZSBob2xlIGdhdGUncyBsdW1hIDU4LiBXcmFwcyBpbiB5LiAqL1xuZnVuY3Rpb24gbW91bGRDbHVzdGVycyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcm5kOiAoKSA9PiBudW1iZXIsIHM6IG51bWJlciwgc3BvdHM6IG51bWJlcltdW10sIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIG46IG51bWJlciwgYU1heDogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAoY29uc3QgW2N4LCBjeV0gb2Ygc3BvdHMpIHtcbiAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3ksIDAsIGN4LCBjeSwgTWF0aC5tYXgocngsIHJ5KSAqIDAuOCk7XG4gICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDI4LDI2LDIyLCR7KGFNYXggKiAwLjkpLnRvRml4ZWQoMyl9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjgsMjYsMjIsMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3gsIGN5ICsgZHksIHJ4LCByeSwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBjeCArIChybmQoKSArIHJuZCgpIC0gMSkgKiByeCwgeSA9IGN5ICsgKHJuZCgpICsgcm5kKCkgLSAxKSAqIHJ5O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDI4LDI2LDIyLCR7KDAuMDggKyBybmQoKSAqIGFNYXgpLnRvRml4ZWQoMyl9KWA7XG4gICAgICBjb25zdCB3ID0gMSArIHJuZCgpICogMiwgaCA9IDEgKyBybmQoKSAqIDM7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4LCB5ICsgZHksIHcsIGgpO1xuICAgIH1cbiAgfVxufVxuXG4vKiogQ1VMTSB0aWxlIGZvciB0aGUgd2hvbGUtYmFtYm9vIHBvc3QgYW5kIHJhaWxzOiB4IHJ1bnMgQVJPVU5EIHRoZSBjdWxtLCB5IEFMT05HIGl0IChzZWUgY3VsbVVWKSxcbiAqICAwLjYgbSBvZiBjdWxtIHBlciB0aWxlLiBUd28gbm9kZSByaW5ncyBwZXIgdGlsZSBhdCBpcnJlZ3VsYXIgc3RhdGlvbnMgLS0gYSBkYXJrIGdyb292ZSB1bmRlciBhXG4gKiAgcGFsZSByYWlzZWQgcmlkZ2UsIHRoZSBncmFpbiBicmVha2luZyBhdCBlYWNoIC0tIHdpdGggZmluZSBsb25naXR1ZGluYWwgZ3JhaW4gYmV0d2VlbiB0aGVtLCBhXG4gKiAgbG9uZyBkcnlpbmcgc3BsaXQsIGxlbmd0aHdpc2Ugd2VhdGhlcmluZyBwYXRjaGVzIGFuZCBibGFjayBtb3VsZCBnYXRoZXJlZCBqdXN0IGJlbG93IGVhY2ggbm9kZSxcbiAqICBhcyBpbiB0aGUgcGxhdGUncyBwb3N0IGFuZCByYWlsIGNyb3BzLiBBIG11bHRpcGxpZXIgb24gdGhlIG1lYXN1cmVkIGN1bG0gZ3JleS4gKi9cbmZ1bmN0aW9uIGN1bG1UaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IERBUksgPSAnOTIsNzgsNjInLCBMSUdIVCA9ICcyNTUsMjU1LDI1NSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjBlZmVjJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGEgc29mdCB0b25lIGRyaWZ0IGFyb3VuZCB0aGUgY3VsbSwgc28gdGhlIHJvdW5kIGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGNvbnN0IGdhID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHMsIDApO1xuICAgIGdhLmFkZENvbG9yU3RvcCgwLCAncmdiYSgxMDAsOTIsODQsMC4xMiknKTsgZ2EuYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoMjU1LDI1NSwyNTUsMC4xMCknKTsgZ2EuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDEwMCw5Miw4NCwwLjEyKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnYTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCAxNCwgMC4xMiwgMC4zMCk7XG4gICAgLy8gbm9kZSBzdGF0aW9uczogdHdvIHBlciB0aWxlLCBpcnJlZ3VsYXIsIG5ldmVyIHdpdGhpbiAwLjE4IG9mIGVhY2ggb3RoZXIgb3IgdGhlIHdyYXBcbiAgICBjb25zdCBub2RlcyA9IFtzICogKDAuMjAgKyBybmQoKSAqIDAuMTApLCBzICogKDAuNjYgKyBybmQoKSAqIDAuMTIpXTtcbiAgICAvLyBncmFpbiBpbiBzZWdtZW50cyBiZXR3ZWVuIHRoZSBub2RlcyBzbyBpdCBicmVha3MgYXQgZWFjaCByaW5nXG4gICAgY29uc3Qgc3RhdGlvbnMgPSBbMCwgLi4ubm9kZXMsIHNdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpICsgMSA8IHN0YXRpb25zLmxlbmd0aDsgaSsrKSBncmFpbkxpbmVzKGN0eCwgcm5kLCAwLCBzLCBzdGF0aW9uc1tpXSwgc3RhdGlvbnNbaSArIDFdLCAyNjAsIERBUkssIExJR0hULCAwLjI2KTtcbiAgICAvLyBhIGNvdXBsZSBvZiBsb25nIGRyeWluZyBzcGxpdHMgYWxvbmcgdGhlIGZpYnJlXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAyOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4yNSArIHJuZCgpICogMC41KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgzOCwzMiwyNiwwLjU1KSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5ICsgZHksIDEuNCwgbGVuKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjE4KSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4ICsgMS40LCB5ICsgZHksIDEsIGxlbik7XG4gICAgfVxuICAgIC8vIHRoZSBub2RlIHJpbmdzXG4gICAgZm9yIChjb25zdCB5IG9mIG5vZGVzKSB7XG4gICAgICBjb25zdCBncyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5IC0gcyAqIDAuMDMsIDAsIHkpO1xuICAgICAgZ3MuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDYwLDUwLDQwLDApJyk7IGdzLmFkZENvbG9yU3RvcCgxLCAncmdiYSg2MCw1MCw0MCwwLjIyKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdzOyBjdHguZmlsbFJlY3QoMCwgeSAtIHMgKiAwLjAzLCBzLCBzICogMC4wMyk7ICAgICAgICAgIC8vIHNoYWRlIHVwIHRvIHRoZSByaW5nXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTIsNDQsMzYsMC42MiknOyBjdHguZmlsbFJlY3QoMCwgeSwgcywgMi41KTsgICAgICAgIC8vIHRoZSBncm9vdmVcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjM0KSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgMi41LCBzLCA0KTsgLy8gdGhlIHJhaXNlZCBzaGVhdGggcmlkZ2VcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg2MCw1MCw0MCwwLjMwKSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgNi41LCBzLCAxLjUpOyAgLy8gaXRzIGxvd2VyIGVkZ2VcbiAgICAgIGNvbnN0IGdkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkgKyA4LCAwLCB5ICsgcyAqIDAuMDUpO1xuICAgICAgZ2QuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDYwLDUwLDQwLDAuMjApJyk7IGdkLmFkZENvbG9yU3RvcCgxLCAncmdiYSg2MCw1MCw0MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdkOyBjdHguZmlsbFJlY3QoMCwgeSArIDgsIHMsIHMgKiAwLjA1KTtcbiAgICB9XG4gICAgLy8gbW91bGQgZ2F0aGVycyBqdXN0IGJlbG93IHRoZSBub2RlcyBhbmQgaW4gYSBjb3VwbGUgb2YgbG9vc2UgcGF0Y2hlc1xuICAgIGNvbnN0IHNwb3RzOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChjb25zdCB5IG9mIG5vZGVzKSBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCB5ICsgcyAqICgwLjAyICsgcm5kKCkgKiAwLjA1KV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSBzcG90cy5wdXNoKFtybmQoKSAqIHMsIHJuZCgpICogc10pO1xuICAgIG1vdWxkQ2x1c3RlcnMoY3R4LCBybmQsIHMsIHNwb3RzLCBzICogMC4xMCwgcyAqIDAuMDYsIDkwLCAwLjMwKTtcbiAgfSk7XG59XG5cblxuLyoqXG4gKiBUSEFUQ0ggdGlsZSwgZm9yIGEgcm9vZiBtYXBwZWQgd2l0aCBXT1JMRCBVVnMgc28gdSBydW5zIGFsb25nIHRoZSByaWRnZSBhbmQgdiB1cCB0aGUgc2xvcGUuXG4gKlxuICogVGhhdGNoIGlzIGxhaWQgaW4gQ09VUlNFUzogZWFjaCBjb3Vyc2UgaXMgYSBidW5kbGUgb2Ygc3RlbXMgcGVnZ2VkIHRvIGEgcHVybGluIHdpdGggaXRzIGJ1dHRzXG4gKiBoYW5naW5nIG92ZXIgdGhlIGNvdXJzZSBiZWxvdywgc28gd2hhdCBhIHZpZXdlciBhY3R1YWxseSByZXNvbHZlcyBhdCBwcm9wIGRpc3RhbmNlIGlzIGEgc3RhY2sgb2ZcbiAqIGhvcml6b250YWwgYmFuZHMgd2l0aCBhIHNoYWRvdyBsaW5lIHVuZGVyIGVhY2ggYnV0dCwgYW5kIGEgZmlicmUgdGV4dHVyZSBydW5uaW5nIGRvd24gdGhlIHNsb3BlXG4gKiBpbnNpZGUgdGhlbS4gTW9kZWxsaW5nIHRoZSBzdGVtcyBpcyB3aGF0IHRoZSByZWdpc3RyeSBub3RlcyBmb3JiaWQ7IHRoaXMgaXMgd2hlcmUgdGhhdCBkZXRhaWxcbiAqIGdvZXMgaW5zdGVhZC5cbiAqXG4gKiBPbmUgdGlsZSBpcyBgY291cnNlc2AgY291cnNlcyB0YWxsLiBUaGUga25vYnMgYXJlIHdoYXQgc2VwYXJhdGVzIHRoZSB0d28gdGhhdGNoZXMgb24gdGhlIHBsYXRlczpcbiAqICAgbmlwYSAgICAgYnJvYWQgZmxhdCBwYWxtIGJsYWRlcyAtLSBmZXcgd2lkZSBzdHJva2VzIChgc3RlbVdgIDMtNyBweCksIGEgd2lkZSB0b25hbCBgc3ByZWFkYCxcbiAqICAgICAgICAgICAgYSBkZWVwbHkgUkFHR0VEIGJ1dHQgbGluZSBhbmQgb2NjYXNpb25hbCBtaXNzaW5nIGJsYWRlcy5cbiAqICAgdmV0aXZlciAgY29tYmVkIGdyYXNzIC0tIGh1bmRyZWRzIG9mIGhhaXJsaW5lcywgYSBuYXJyb3cgc3ByZWFkLCBhbiBhbG1vc3Qgc3RyYWlnaHQgYnV0dC5cbiAqIGBtb3NzYCBtdWx0aXBsaWVzIGEgZ3JlZW4gY2FzdCBpbnRvIHNjYXR0ZXJlZCBwYXRjaGVzOiB0aGUgdGlsZSBpcyBhIE1VTFRJUExJRVIgb24gYSBwYWxlIHN0cmF3XG4gKiBhbGJlZG8sIGFuZCBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbiwgc28gZ3JlZW4gaGFzIHRvIGFycml2ZSBhcyBcImxlc3MgcmVkIGFuZCBibHVlXCIgYW5kIG5ldmVyXG4gKiBhcyBhIHBhaW50ZWQgZ3JlZW4uIE5vdGhpbmcgaGVyZSBnb2VzIGJlbG93IDAuNDIgb2YgdGhlIGFsYmVkbywgd2hpY2gga2VlcHMgdGhlIGRhcmtlc3QgdGV4ZWwgb2ZcbiAqIGEgc3RyYXcgYXQgbHVtYSB+MTUwIHdlbGwgY2xlYXIgb2YgdGhlIHNpbGhvdWV0dGUgZ2F0ZSdzIGJhY2tkcm9wIGJhbmQuXG4gKi9cbmZ1bmN0aW9uIHRoYXRjaFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBuYzogbnVtYmVyID0gby5jb3Vyc2VzID8/IDQsIGNoID0gcyAvIG5jO1xuICAgIGNvbnN0IHN0ZW1zOiBudW1iZXIgPSBvLnN0ZW1zID8/IDI2MCwgc3ByZWFkOiBudW1iZXIgPSBvLnNwcmVhZCA/PyAwLjEyO1xuICAgIGNvbnN0IHdNaW46IG51bWJlciA9IG8uc3RlbVc/LlswXSA/PyAxLCB3TWF4OiBudW1iZXIgPSBvLnN0ZW1XPy5bMV0gPz8gMjtcbiAgICBjb25zdCByYWdnZWQ6IG51bWJlciA9IG8ucmFnZ2VkID8/IDAuMDY7ICAgICAgICAgICAgICAgICAvLyBidXR0LWxpbmUgd2F2aW5lc3MsIGFzIGEgc2hhcmUgb2YgY2hcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG5cbiAgICAvLyB0aGUgYnV0dCBsaW5lIG9mIGVhY2ggY291cnNlLCBqaXR0ZXJlZCBwZXIgY29sdW1uIGFuZCBTSEFSRUQgd2l0aCB0aGUgY291cnNlIGFib3ZlIHNvIHRoZVxuICAgIC8vIHNoYWRvdyBhbmQgdGhlIGJsYWRlcyBhZ3JlZSBvbiB3aGVyZSB0aGUgZWRnZSBpc1xuICAgIGNvbnN0IGJ1dHRzOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPD0gbmM7IGMrKykge1xuICAgICAgY29uc3Qgcm93OiBudW1iZXJbXSA9IFtdO1xuICAgICAgbGV0IHkgPSAwO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPD0gczsgeCsrKSB7XG4gICAgICAgIGlmICh4ICUgTWF0aC5tYXgoMiwgTWF0aC5yb3VuZChzIC8gNDgpKSA9PT0gMCkgeSA9IChybmQoKSAqIDIgLSAxKSAqIHJhZ2dlZCAqIGNoO1xuICAgICAgICByb3cucHVzaChjICogY2ggKyB5KTtcbiAgICAgIH1cbiAgICAgIGJ1dHRzLnB1c2gocm93KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IG5jOyBjKyspIHtcbiAgICAgIGNvbnN0IHkwID0gYyAqIGNoO1xuICAgICAgLy8gdGhlIGNvdXJzZSdzIG93biB0b25lOiB0aGF0Y2ggd2VhdGhlcnMgY291cnNlIGJ5IGNvdXJzZSwgdGhlIGxvd2VyIG9uZXMgZ3JleWVyXG4gICAgICBjb25zdCB0ID0gMSAtIHNwcmVhZCAqIHJuZCgpO1xuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogdCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7TWF0aC5yb3VuZCh2ICogMC45ODUpfSwke01hdGgucm91bmQodiAqIDAuOTUpfSlgO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIHkwIC0gcmFnZ2VkICogY2ggLSAxLCBzLCBjaCArIDIgKiByYWdnZWQgKiBjaCArIDIpO1xuICAgICAgLy8gc3RlbXMgcnVubmluZyBET1dOIHRoZSBzbG9wZSBpbnNpZGUgdGhlIGNvdXJzZSwgZWFjaCBhIGxpdHRsZSBwYXN0IGl0cyBidXR0IGxpbmVcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc3RlbXM7IGsrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjb25zdCB3ID0gd01pbiArIHJuZCgpICogKHdNYXggLSB3TWluKTtcbiAgICAgICAgY29uc3QgdG9uZSA9IDEgLSBzcHJlYWQgKiAoMC4zICsgcm5kKCkgKiAwLjcpO1xuICAgICAgICBjb25zdCBhID0gMC4xOCArIHJuZCgpICogMC4zMjtcbiAgICAgICAgY29uc3QgZGFyayA9IHJuZCgpIDwgMC42MjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGRhcmsgPyBgcmdiYSgke01hdGgucm91bmQoMTIwICogdG9uZSl9LCR7TWF0aC5yb3VuZCgxMDYgKiB0b25lKX0sJHtNYXRoLnJvdW5kKDg0ICogdG9uZSl9LCR7YS50b0ZpeGVkKDMpfSlgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYHJnYmEoMjU1LDI1MywyNDYsJHsoYSAqIDAuNikudG9GaXhlZCgzKX0pYDtcbiAgICAgICAgY29uc3QgeVRvcCA9IHkwIC0gY2ggKiAoMC4xNSArIHJuZCgpICogMC4yNSk7XG4gICAgICAgIGNvbnN0IHlCb3QgPSBidXR0c1tjICsgMV1bTWF0aC5taW4ocywgTWF0aC5yb3VuZCh4KSldICsgY2ggKiAocm5kKCkgKiAwLjEwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHlUb3AsIHcsIE1hdGgubWF4KDIsIHlCb3QgLSB5VG9wKSk7XG4gICAgICB9XG4gICAgICAvLyBNSVNTSU5HIGJsYWRlczogYSBmZXcgZ2FwcyB3aGVyZSB0aGUgY291cnNlIGhhcyB0aGlubmVkLCBkYXJrIGJ1dCBuZXZlciBibGFja1xuICAgICAgY29uc3QgZ2FwcyA9IG8uZ2FwcyA/PyAwO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBnYXBzOyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IHMgKiAoMC4wMSArIHJuZCgpICogMC4wMyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSg5Niw4NCw2NiwkeygwLjIwICsgcm5kKCkgKiAwLjE4KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeTAgKyBjaCAqIDAuMjUsIHcsIGNoICogKDAuNCArIHJuZCgpICogMC41KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhlIHNoYWRvdyBlYWNoIGNvdXJzZSdzIGJ1dHQgY2FzdHMgb24gdGhlIG9uZSBiZWxvdzogYSBncmFkaWVudCBmYWxsaW5nIEFXQVkgZnJvbSB0aGUgbGluZSxcbiAgICAvLyBkcmF3biBhbG9uZyB0aGUgaml0dGVyZWQgYnV0dCBzbyB0aGUgc2hhZG93IGlzIGFzIHJhZ2dlZCBhcyB0aGUgZWRnZSB0aGF0IGNhc3RzIGl0LCB3aXRoIHRoZVxuICAgIC8vIExJVCBUSVBTIG9mIHRoZSBjb3Vyc2UgYWJvdmUgaXQgYXMgYSBwYWxlIGxpbmUuIFRoZSBwYWlyIGlzIHdoYXQgbWFrZXMgdGhlIHJvb2YgcmVhZCBhc1xuICAgIC8vIHN0YWNrZWQgbGF5ZXJzOyB0aGUgc2hhZG93IGFsb25lIHJlYWRzIGFzIGdyYWluLCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBidWlsZCBsb29rZWQgbGlrZS5cbiAgICBmb3IgKGxldCBjID0gMTsgYyA8PSBuYzsgYysrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgICBjb25zdCB5YiA9IGJ1dHRzW2NdW3hdO1xuICAgICAgICBjb25zdCBnaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiAtIGNoICogMC4wOSwgMCwgeWIpO1xuICAgICAgICBnaC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LDI1MiwyNDIsMCknKTsgZ2guYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDI1NSwyNTIsMjQyLCR7KG8udGlwID8/IDAuMzQpLnRvRml4ZWQoMyl9KWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ2g7XG4gICAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHliIC0gY2ggKiAwLjA5ICsgZHksIDEsIGNoICogMC4wOSk7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliLCAwLCB5YiArIGNoICogMC4yMik7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSg1OCw0OCwzNiwkeyhvLnNoYWRvdyA/PyAwLjQyKS50b0ZpeGVkKDMpfSlgKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDU4LDQ4LDM2LDApJyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeWIgKyBkeSwgMSwgY2ggKiAwLjIyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNT1NTIC8gTU9VTEQ6IGxlc3MgcmVkIGFuZCBibHVlIG92ZXIgc29mdCBwYXRjaGVzLCBuZXZlciBhIHBhaW50ZWQgZ3JlZW5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLm1vc3MgPz8gMCk7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xNCk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGNvbnN0IGEgPSAwLjE0ICsgcm5kKCkgKiAwLjIyO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDE1MCwxOTAsMTEwLCR7YS50b0ZpeGVkKDMpfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDE1MCwxOTAsMTEwLDApJyk7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JzsgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH1cbiAgICAvLyBzb2Z0IHRvbmFsIGRyaWZ0IHNvIHRoZSBjb3Vyc2VzIGRvIG5vdCByZWFkIGFzIGEgcHJpbnRlZCBzdHJpcGVcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgby53ZWF0aGVyID8/IDEwLCAwLjEwLCAwLjIyKTtcbiAgfSk7XG59XG5cbi8qKlxuICogV09WRU4gVEFSUEFVTElOIHRpbGU6IHRoZSBjb2Fyc2UgY3Jvc3Mtd292ZW4gcG9seXByb3B5bGVuZSB0YXBlIG9mIGEgVGhhaSBidWlsZGVyJ3MgdGFycCwgcGx1c1xuICogdGhlIGNyZWFzZXMgYSBmb2xkZWQgc2hlZXQga2VlcHMgZm9yIGxpZmUgYW5kIHRoZSBzdW4tYmxlYWNoaW5nIGFsb25nIHRoZSByaWRnZXMuIEEgbXVsdGlwbGllciBvblxuICogdGhlIG1lYXN1cmVkIGJsdWUsIHNvIHRoZSB3ZWF2ZSBkYXJrZW5zIGFuZCB0aGUgYmxlYWNoIGxpZnRzIHRvd2FyZCB3aGl0ZS5cbiAqL1xuZnVuY3Rpb24gdGFycFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgcGl0Y2ggPSBNYXRoLm1heCgzLCBNYXRoLnJvdW5kKHMgLyAoby50YXBlcyA/PyA2NCkpKTtcbiAgICAvLyB0aGUgd2VhdmU6IHdhcnAgYW5kIHdlZnQgdGFwZXMsIGVhY2ggcGFpciB3aXRoIGEgc2hhZG93IGF0IGl0cyBqb2luLCBhbHRlcm5hdGluZyBvdmVyL3VuZGVyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4ICs9IHBpdGNoKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMzAsMzQsNDQsJHsoMC4xMCArIHJuZCgpICogMC4wOCkudG9GaXhlZCgzKX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDcpJzsgY3R4LmZpbGxSZWN0KHggKyAxLCAwLCBNYXRoLm1heCgxLCBwaXRjaCAqIDAuMzUpLCBzKTtcbiAgICB9XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzOyB5ICs9IHBpdGNoKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMzAsMzQsNDQsJHsoMC4xMCArIHJuZCgpICogMC4wOCkudG9GaXhlZCgzKX0pYDsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIDEpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDcpJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyAxLCBzLCBNYXRoLm1heCgxLCBwaXRjaCAqIDAuMzUpKTtcbiAgICB9XG4gICAgLy8gZm9sZCBjcmVhc2VzOiBsb25nIHBhbGUgbGluZXMgd2l0aCBhIHNoYWRvdyBvbiBvbmUgc2lkZSwgYXQgdGhlIHR3byBheGVzIGEgdGFycCBpcyBmb2xkZWQgb25cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmNyZWFzZXMgPz8gNik7IGsrKykge1xuICAgICAgY29uc3QgaG9yaXogPSBybmQoKSA8IDAuNSwgcCA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjUgKyBybmQoKSAqIDAuNSksIHEgPSBybmQoKSAqIHM7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yNiknO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMjYpJztcbiAgICAgIGlmIChob3JpeikgeyBjdHguZmlsbFJlY3QocSAtIGxlbiAvIDIsIHAsIGxlbiwgMS42KTsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDI2LDM4LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHEgLSBsZW4gLyAyLCBwICsgMS42LCBsZW4sIDIpOyB9XG4gICAgICBlbHNlIHsgY3R4LmZpbGxSZWN0KHAsIHEgLSBsZW4gLyAyLCAxLjYsIGxlbik7IGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyNiwzOCwwLjE4KSc7IGN0eC5maWxsUmVjdChwICsgMS42LCBxIC0gbGVuIC8gMiwgMiwgbGVuKTsgfVxuICAgIH1cbiAgICAvLyBzdW4tYmxlYWNoZWQgc3RyZWFrcyBhbmQgYSBsaXR0bGUgZ3JpbWVcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgby53ZWF0aGVyID8/IDEyLCAwLjEwLCAwLjM0KTtcbiAgfSk7XG59XG5cbi8qKlxuICogU0FXTiBUSU1CRVIgdGlsZSBmb3IgYSB3ZWF0aGVyZWQgcG9zdC1hbmQtcGxhdGUgZnJhbWU6IGZpbmUgbG9uZ2l0dWRpbmFsIGdyYWluLCBhIGZldyBrbm90cywgdGhlXG4gKiBvZGQgZHJ5aW5nIHNwbGl0LCBhbmQgY2xvdWR5IHNpbHZlciB3ZWF0aGVyaW5nLiBEZWxpYmVyYXRlbHkgV0VBS0xZIGRpcmVjdGlvbmFsIC0tIHRoZSBmcmFtZSBpc1xuICogbWFwcGVkIHdpdGggd29ybGQgVVZzLCB3aGljaCBwdXQgdiBhbG9uZyB0aGUgcG9zdCBidXQgQUNST1NTIGEgYmVhbSwgYW5kIGEgc3Ryb25nbHkgc3RyaXBlZCB0aWxlXG4gKiB3b3VsZCB0aGVuIHJlYWQgYXMgYSBwbGFuayBqb2ludCBydW5uaW5nIHRoZSB3cm9uZyB3YXkgb24gaGFsZiB0aGUgZnJhbWUuIFRoZSB3ZWF0aGVyaW5nIGNhcnJpZXNcbiAqIG1vc3Qgb2YgdGhlIHJlYWQgYW5kIHRoZSBncmFpbiBvbmx5IHNoYXJwZW5zIGl0LCB3aGljaCBzdXJ2aXZlcyBib3RoIG9yaWVudGF0aW9ucy5cbiAqL1xuZnVuY3Rpb24gc2F3blRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBEQVJLID0gJzk2LDg0LDY4JywgTElHSFQgPSAnMjU1LDI1NSwyNTUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2Y0ZjJlZSc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgby53ZWF0aGVyID8/IDIwLCAwLjE0LCAwLjMwKTtcbiAgICBncmFpbkxpbmVzKGN0eCwgcm5kLCAwLCBzLCAwLCBzLCBvLmdyYWluID8/IDIyMCwgREFSSywgTElHSFQsIDAuMTgpO1xuICAgIC8vIGtub3RzOiBhIGRhcmsgZWxsaXBzZSB3aXRoIHRoZSBncmFpbiBzd2VlcGluZyByb3VuZCBpdFxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ua25vdHMgPz8gNCk7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wMTIgKyBybmQoKSAqIDAuMDIpO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDc0LDYwLDQ0LDAuNDUpJztcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciwgciAqIDEuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSg5Niw4MCw2MCwwLjIyKSc7IGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBmb3IgKGxldCBxID0gMTsgcSA8PSAzOyBxKyspIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciAqICgxICsgcSAqIDAuNiksIHIgKiAoMS42ICsgcSAqIDAuOSksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGRyeWluZyBzcGxpdHMgYWxvbmcgdGhlIGZpYnJlXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5zcGxpdHMgPz8gMyk7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNDUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDU4LDQ4LDM2LDAuNDIpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHkgKyBkeSwgMS40LCBsZW4pO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTYpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHggKyAxLjQsIHkgKyBkeSwgMSwgbGVuKTtcbiAgICB9XG4gICAgY29uc3Qgc3BvdHM6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLm1vdWxkID8/IDMpOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgcm5kKCkgKiBzXSk7XG4gICAgbW91bGRDbHVzdGVycyhjdHgsIHJuZCwgcywgc3BvdHMsIHMgKiAwLjA5LCBzICogMC4wNywgNzAsIDAuMjQpO1xuICB9KTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgLy8gQSBMSVQgc3VyZmFjZSAoYSBmbHVvcmVzY2VudCB0dWJlLCBhIGNoYXJjb2FsIGVtYmVyIGJlZCk6IGVtaXNzaXZlIGNhcnJpZXMgdGhlIGdsb3cgd2l0aG91dCBhXG4gICAgLy8gbGlnaHQgc291cmNlLCB3aGljaCB0aGUga2l0J3MgcHJvcHMgbmV2ZXIgb3duIC0tIHRoZSBob3N0IHNjZW5lIG93bnMgbGlnaHRpbmcuXG4gICAgaWYgKHMuZW1pc3NpdmUgIT09IHVuZGVmaW5lZCkgeyBtLmVtaXNzaXZlID0gbmV3IFRIUkVFLkNvbG9yKHMuZW1pc3NpdmUpOyBtLmVtaXNzaXZlSW50ZW5zaXR5ID0gcy5lbWlzc2l2ZUludGVuc2l0eSA/PyAxOyB9XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICAvLyBBbiBBTFBIQS1DVVQgcGFuZSAoY2hhaW4tbGluayBtZXNoKTogdGhlIGNhbnZhcyB0aWxlIGNhcnJpZXMgdGhlIGN1dC1vdXQgaW4gaXRzIGFscGhhIGNoYW5uZWwgYW5kXG4gICAgLy8gYWxwaGFUZXN0IGRpc2NhcmRzIHRoZSBvcGVuIGNlbGxzLCBzbyB0aGUgd2lyZSBzdGF5cyBvcGFxdWUgYW5kIHNvcnRzIGxpa2UgYSBzb2xpZC5cbiAgICBpZiAocy5hbHBoYVRlc3QgIT09IHVuZGVmaW5lZCkgeyBtLmFscGhhVGVzdCA9IHMuYWxwaGFUZXN0OyBtLnRyYW5zcGFyZW50ID0gZmFsc2U7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhaW5sZXNzU3RlZWxOb29kbGVTaG9wVGFibGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ1N0YWlubGVzcyBTdGVlbCBOb29kbGUgU2hvcCBUYWJsZSc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbXBvbmVudHNcbiAgICogRWFjaCBlbnRyeSBvZiBDT05GSUcuZ2VvbWV0cnkuY29tcG9uZW50cyBpcyBPTkUgbWVyZ2VkIGdlb21ldHJ5IG9uIE9ORSBtYXRlcmlhbCAtLSBvbmUgZHJhd1xuICAgKiBjYWxsLiBFdmVyeSBwYXJ0IGluc2lkZSBpdCBpcyBhIHRpbnRlZCBib3gsIHR1YmUsIGN5bGluZGVyLCBsYXRoZSBvciBwbGFuZTsgY29sb3VyIGRpZmZlcmVuY2VzXG4gICAqIGFyZSB2ZXJ0ZXggY29sb3Vycy4gYHV2YCBwaWNrcyBob3cgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSByZXBlYXRzIG92ZXIgaXQuICovXG4gIGZvciAoY29uc3QgYyBvZiBHLmNvbXBvbmVudHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoYy5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgbWlycm9yWCgoYy5ib3hlc01pcnJvcmVkID8/IFtdKSBhcyBudW1iZXJbXVtdKSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgKGMudHViZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IHN0IG9mIChjLnN0cmFwcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2goc3RyYXAoc3QucHRzLCBzdC53LCBzdC50LCBzdC5hYm91dCwgc3QuaGV4KSk7XG4gICAgZm9yIChjb25zdCBjeSBvZiAoYy5jeWxzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHRoMGAvYHRoTGVuYCBtYWtlIGEgUEFSVElBTCBjeWxpbmRlciAoYSBjdXJ2ZWQgc3RpY2tlciBwYXRjaCB3cmFwcGVkIG9uIGEgcm91bmQgYm9keSkgYW5kXG4gICAgICAvLyBgb3BlbmAgZHJvcHMgdGhlIGNhcHM7IHRoZSBzaWRlIFVWcyB0aGVuIHJ1biAwLi4xIGFjcm9zcyB0aGUgYXJjIGFuZCB1cCB0aGUgaGVpZ2h0LCB3aGljaCBpc1xuICAgICAgLy8gd2hhdCBhIGJha2VkIGdyYXBoaWMgd2FudHMuIGB1dlJlcGAgbXVsdGlwbGllcyB0aGVtIGZvciBhIHJlcGVhdGluZyB0aWxlLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGN5LnJ0LCBjeS5yYiwgY3kuaCwgY3kuc2VnID8/IDEyLCAxLCBjeS5vcGVuID8/IGZhbHNlLCBjeS50aDAgPz8gMCwgY3kudGhMZW4gPz8gTWF0aC5QSSAqIDIpO1xuICAgICAgaWYgKGN5LnV2UmVwKSB7IGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7IGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIGN5LnV2UmVwWzBdLCB1di5nZXRZKGkpICogY3kudXZSZXBbMV0pOyB9XG4gICAgICAvLyBgc2lkZVVWYCBwaW5zIHRoZSBTSURFIHdhbGwncyBVVnMgdG8gb25lIHRleGVsIHNvIGEgZGlzYyBjYXJyeWluZyBhIGJha2VkIHRvcC1kb3duIGltYWdlIHNob3dzXG4gICAgICAvLyB0aGF0IGltYWdlIG9uIGl0cyBjYXAgYWxvbmUsIHdpdGggaXRzIHJpbSBpbiB3aGF0ZXZlciB0aGUgcGlubmVkIHRleGVsIGhvbGRzIChhIGJhZyB0b25lKS5cbiAgICAgIGlmIChjeS5zaWRlVVYpIHsgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKSwgbiA9ICgoY3kuc2VnID8/IDEyKSArIDEpICogMjsgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHV2LnNldFhZKGksIGN5LnNpZGVVVlswXSwgY3kuc2lkZVVWWzFdKTsgfVxuICAgICAgLy8gYHNjYWxlYCBiZWZvcmUgdGhlIHJvdGF0aW9uczogYW4gT1ZBTCBiYXNpbiBvciBkaXNjLCB3aGljaCBhIGxhdGhlIG9yIGEgY3lsaW5kZXIgY2Fubm90XG4gICAgICAvLyByZXZvbHZlIG9uIGl0cyBvd24uIE5vcm1hbHMgYXJlIHJlY29tcHV0ZWQgYmVjYXVzZSBhIG5vbi11bmlmb3JtIHNjYWxlIHNrZXdzIHRoZW0uXG4gICAgICBpZiAoY3kuc2NhbGUpIHsgZy5zY2FsZShjeS5zY2FsZVswXSwgY3kuc2NhbGVbMV0sIGN5LnNjYWxlWzJdKTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyB9XG4gICAgICAvLyBDVUxNIFVWczogdSBhcm91bmQgdGhlIGNpcmN1bWZlcmVuY2UsIHYgYWxvbmcgdGhlIGxlbmd0aCwgYm90aCBpbiBtZXRyZXMgLS0gc28gdGhlIG5vZGVcbiAgICAgIC8vIHJpbmdzIG9mIGEgY3VsbSB0aWxlIGNyb3NzIGEgYmFtYm9vIHBvbGUgYXQgcmVhbCBzcGFjaW5nIGhvd2V2ZXIgdGhlIHBvbGUgaXMgdGhlbiB0dXJuZWQuXG4gICAgICAvLyBJdCBoYXMgdG8gaGFwcGVuIEJFRk9SRSB0aGUgcm90YXRpb25zLCB3aGlsZSB0aGUgY3lsaW5kZXIgc3RpbGwgcnVucyBhbG9uZyBpdHMgb3duIFkuXG4gICAgICBpZiAoYy51diA9PT0gJ2N1bG0nKSBjdWxtVVYoZywgY3kucnQsIGN5LmgsIGMudXZTY2FsZSA/PyAxLCBjeS52T2ZmID8/IDApO1xuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnkpIGcucm90YXRlWShjeS5yeSk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbCBvZiAoYy5sYXRoZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgcnlgIHlhd3MgdGhlIHJldm9sdXRpb246IGEgNC1zZWdtZW50IGxhdGhlIHR1cm5lZCA0NSBkZWdyZWVzIGlzIGEgY2hhbWZlcmVkIFNRVUFSRSBzbGFiIGluIG9uZVxuICAgICAgLy8gZ2VvbWV0cnkgKGEgY29uZSdzIHJ1YmJlciBiYXNlKSwgd2hlcmUgdHdvIHN0YWNrZWQgYm94ZXMgd291bGQgY29zdCB0d28gYW5kIGEgY29wbGFuYXIgcGFpci5cbiAgICAgIC8vIGBjeWxVVmAgKGEgdGlsZSBzaXplIGluIG1ldHJlcykgd3JpdGVzIGEgc2VhbWxlc3MgYXJvdW5kLWJ5LXVwIFVWIGZyb20gdGhlIGxhdGhlJ3Mgb3duIHNlZ21lbnRcbiAgICAgIC8vIGluZGV4IC0tIGF0YW4yIHdvdWxkIGZvbGQgYSB3aG9sZSB0aWxlIGludG8gdGhlIHNlYW0gY29sdW1uIC0tIGZvciB0cmVhZCwgZmx1dGluZyBhbmQgZ3JhaW4uXG4gICAgICBjb25zdCBnID0gbGF0aGUobC5wdHMsIGwuc2VnID8/IDEyLCAwLCBsLnNoYXJwICE9PSBmYWxzZSwgbC53ZWxkU2VhbSA9PT0gdHJ1ZSk7XG4gICAgICBpZiAobC5jeWxVVikgeyBjb25zdCBjdSA9IEFycmF5LmlzQXJyYXkobC5jeWxVVikgPyBsLmN5bFVWIDogW2wuY3lsVVYsIGwuY3lsVVYsIDBdOyBsYXRoZVVWKGcsIChnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCAvICgobC5zZWcgPz8gMTIpICsgMSkpIHwgMCwgbC5zZWcgPz8gMTIsIGN1WzBdLCBjdVsxXSwgY3VbMl0gPz8gMCk7IH1cbiAgICAgIGlmIChsLnNjYWxlKSB7IGcuc2NhbGUobC5zY2FsZVswXSwgbC5zY2FsZVsxXSwgbC5zY2FsZVsyXSk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgfVxuICAgICAgLy8gYHJ5YCB5YXdzIHRoZSByZXZvbHV0aW9uIChhYm92ZSkuIGByeGAvYHJ6YCBUSUxUIHRoZSBheGlzIGl0c2VsZiwgd2hpY2ggaXMgd2hhdCBhIFdBTEwgb3JcbiAgICAgIC8vIGNlaWxpbmcgZml0dGluZyBuZWVkczogYSBsYXRoZSByZXZvbHZlcyBhYm91dCArWSwgYW5kIGEgYnVsa2hlYWQgbGFtcCdzIGF4aXMgaXMgdGhlIHdhbGxcbiAgICAgIC8vIG5vcm1hbCwgc28gaXRzIGJhY2twbGF0ZSBhbmQgZG9tZSBhcmUgYXV0aG9yZWQgYWJvdXQgWSBhbmQgbGFpZCBkb3duIHdpdGggcnggPSBQSS8yLlxuICAgICAgaWYgKGwucnkpIGcucm90YXRlWShsLnJ5KTsgaWYgKGwucngpIGcucm90YXRlWChsLnJ4KTsgaWYgKGwucnopIGcucm90YXRlWihsLnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGwuYXRbMF0sIGwuYXRbMV0sIGwuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgbC5oZXgpKTtcbiAgICB9XG4gICAgLy8gUklCQkVEIERPTUVTOiBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiBjYXJyeWluZyB2ZXJ0aWNhbCBGTFVURVMsIGFzIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgXG4gICAgLy8gc2FtcGxlZCBwZXIgc2VjdG9yIHJhdGhlciB0aGFuIGEgbGF0aGUuIEEgcHJlc3NlZC1nbGFzcyBsYW1wIGRvbWUgaXMgZmx1dGVkLCBhbmQgYSBzbW9vdGggb25lXG4gICAgLy8gcmVhZHMgYXMgYSBwbGFzdGljIGJ1YmJsZSAtLSB0aGUgcmlicyBhcmUgbW9zdCBvZiB3aGF0IHNheXMgYGdsYXNzYCBhdCBwcm9wIGRpc3RhbmNlLiBBdXRob3JlZFxuICAgIC8vIGFib3V0ICtZIGxpa2UgYSBsYXRoZSwgc28gYSB3YWxsIGZpdHRpbmcgbGF5cyBpdCBkb3duIHdpdGggcnguXG4gICAgZm9yIChjb25zdCBkIG9mIChjLmRvbWVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHJpYmJlZERvbWUoZC5wdHMsIGQucmlicywgZC5hbXAsIGQuc2VnID8/IDI0LCBkLnZhbGxleSk7XG4gICAgICBpZiAoZC5yeSkgZy5yb3RhdGVZKGQucnkpOyBpZiAoZC5yeCkgZy5yb3RhdGVYKGQucngpOyBpZiAoZC5yeikgZy5yb3RhdGVaKGQucnopO1xuICAgICAgaWYgKGQuYXQpIGcudHJhbnNsYXRlKGQuYXRbMF0sIGQuYXRbMV0sIGQuYXRbMl0pO1xuICAgICAgLy8gQSBmbHV0ZWQgZG9tZSB3cml0ZXMgaXRzIE9XTiBjb2xvdXIgYXR0cmlidXRlICh0aGUgY3Jlc3QtdG8tdmFsbGV5IG11bHRpcGxpZXIpLCBzbyB0aW50R2VvXG4gICAgICAvLyB3b3VsZCBvdmVyd3JpdGUgdGhlIGZsdXRlIHN0cmlwaW5nIHdpdGggb25lIGZsYXQgaGV4IC0tIHRoZSBzYW1lIHRyYXAgYHNoZWV0YCdzIGhleFVuZGVyXG4gICAgICAvLyBmZWxsIGludG8uIE11bHRpcGx5IHRoZSB0b25lIElOVE8gdGhlIG11bHRpcGxpZXIgaW5zdGVhZCwgc28gdGhlIGRvbWUgY2FycmllcyBib3RoLlxuICAgICAgaWYgKGQudmFsbGV5ICYmIGQuaGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY29sID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgICBjb25zdCB0ID0gbmV3IFRIUkVFLkNvbG9yKGQuaGV4KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2wuY291bnQ7IGkrKykgY29sLnNldFhZWihpLCBjb2wuZ2V0WChpKSAqIHQuciwgY29sLmdldFkoaSkgKiB0LmcsIGNvbC5nZXRaKGkpICogdC5iKTtcbiAgICAgICAgZ3MucHVzaChnKTtcbiAgICAgIH0gZWxzZSBncy5wdXNoKGQudmFsbGV5ID8gZyA6IHRpbnRHZW8oZywgZC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwIG9mIChjLnBsYW5lcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgUEFORTogYSBzaW5nbGUgcXVhZCBpbiB0aGUgWFkgcGxhbmUgYXQgZGVwdGggeiwgZG91YmxlLXNpZGVkIGJ5IGl0cyBtYXRlcmlhbC4gSXRzIFVWcyBydW5cbiAgICAgIC8vIDAuLjEgYWNyb3NzIHRoZSBwYW5lIHNvIGFuIGFscGhhLWN1dCB0aWxlIHJlcGVhdHMgYHJlcGAgdGltZXMgYWNyb3NzIGFuZCBkb3duLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHAudywgcC5oLCAxLCAxKTtcbiAgICAgIGcudHJhbnNsYXRlKHAuYXRbMF0sIHAuYXRbMV0sIHAuYXRbMl0pO1xuICAgICAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIChwLnJlcD8uWzBdID8/IDEpLCB1di5nZXRZKGkpICogKHAucmVwPy5bMV0gPz8gMSkpO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIHAuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5leHRydWRlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgcHJvZmlsZSBpbiB0aGUgWFkgcGxhbmUgZXh0cnVkZWQgYWxvbmcgWiBiZXR3ZWVuIHowIGFuZCB6MSAtLSBhIHNsYWIgd2l0aCBhIG1vdWxkZWQgZWRnZSxcbiAgICAgIC8vIGEgcHlyYW1pZCBjYXAgYXMgYSBzdGVwcGVkIHByb2ZpbGUsIGEgc3BlYXIgZmluaWFsLlxuICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIHNoYXBlLm1vdmVUbyhlLnBvbHlbMF1bMF0sIGUucG9seVswXVsxXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGUucG9seS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKGUucG9seVtpXVswXSwgZS5wb2x5W2ldWzFdKTtcbiAgICAgIHNoYXBlLmNsb3NlUGF0aCgpO1xuICAgICAgZm9yIChjb25zdCBoIG9mIChlLmhvbGVzID8/IFtdKSBhcyBudW1iZXJbXVtdW10pIHtcbiAgICAgICAgY29uc3QgaHAgPSBuZXcgVEhSRUUuUGF0aCgpOyBocC5tb3ZlVG8oaFswXVswXSwgaFswXVsxXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaC5sZW5ndGg7IGkrKykgaHAubGluZVRvKGhbaV1bMF0sIGhbaV1bMV0pO1xuICAgICAgICBocC5jbG9zZVBhdGgoKTsgc2hhcGUuaG9sZXMucHVzaChocCk7XG4gICAgICB9XG4gICAgICBjb25zdCBnID0gZXh0cnVkZUFsb25nWihzaGFwZSwgZS56MCwgZS56MSk7XG4gICAgICBpZiAoZS5yeCkgZy5yb3RhdGVYKGUucngpO1xuICAgICAgaWYgKGUucnkpIGcucm90YXRlWShlLnJ5KTtcbiAgICAgIGlmIChlLnJ6KSBnLnJvdGF0ZVooZS5yeik7XG4gICAgICBpZiAoZS5hdCkgZy50cmFuc2xhdGUoZS5hdFswXSwgZS5hdFsxXSwgZS5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgZS5oZXgpKTtcbiAgICB9XG4gICAgLy8gRUxMSVBTT0lEUzogW2hleCwgY3gsIGN5LCBjeiwgcngsIHJ5LCByeiwgcm90WD8sIHJvdFk/LCByb3RaP10gLS0gYSB1bml0IHNwaGVyZSBzY2FsZWQgcGVyIGF4aXNcbiAgICAvLyBhbmQgdHVybmVkIGFib3V0IGl0cyBvd24gY2VudHJlLiBBIHNrdWxsIGRvbWUsIGEgcGF3LCBhIG5vc2UgcGFkOiB0aGUgcm91bmRlZCBzb2xpZHMgb2YgYW5cbiAgICAvLyBhbmltYWwgdGhhdCBhIGJveCBvciBhIHN0YXRpb24gdHViZSBjYW5ub3QgZ2l2ZSwgc2hhcmluZyBzbW9vdGggbm9ybWFscyB0aHJvdWdoIHRoZSBtZXJnZS5cbiAgICBmb3IgKGNvbnN0IGUgb2YgKGMuZWxsaXBzb2lkcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkge1xuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLCBlWzEwXSA/PyAxNiwgZVsxMV0gPz8gMTIpO1xuICAgICAgZy5zY2FsZShlWzRdLCBlWzVdLCBlWzZdKTtcbiAgICAgIGlmIChlWzddKSBnLnJvdGF0ZVgoZVs3XSk7IGlmIChlWzhdKSBnLnJvdGF0ZVkoZVs4XSk7IGlmIChlWzldKSBnLnJvdGF0ZVooZVs5XSk7XG4gICAgICBnLnRyYW5zbGF0ZShlWzFdLCBlWzJdLCBlWzNdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlWzBdKSk7XG4gICAgfVxuICAgIC8vIEZSVVNUQTogW2hleCwgY3gsIHlCb3R0b20sIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0gLS0gYSBib3ggd2hvc2UgZm9vdHByaW50IGNoYW5nZXMgZnJvbSAodzAsIGQwKSBhdFxuICAgIC8vIHRoZSBib3R0b20gdG8gKHcxLCBkMSkgYXQgdGhlIHRvcDogdGhlIHRhcGVyZWQgYm9keSBvZiBhIHdoZWVsaWUgYmluIG9yIGEgc3RlZWwgY29udGFpbmVyLlxuICAgIGZvciAoY29uc3QgZiBvZiAoYy5mcnVzdGEgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhmcnVzdHVtKGYuc2xpY2UoMSkpLCBmWzBdKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgLy8gRFJBUEVEIFNIRUVUUzogYSB0YXJwIG9yIGF3bmluZyBhcyBhIGhlaWdodCBncmlkIHdpdGggdGhpY2tuZXNzIC0tIGEgcmlkZ2UsIHRoZSBzYWcgYmV0d2VlblxuICAgIC8vIGl0cyBwb2xlcyBhbmQgdGhlIGRyb29wIG9mIGl0cyBmcmVlIGVkZ2VzIGFyZSBudW1iZXJzIGluIHRoZSBncmlkLCBjb21wdXRlZCBhdCBlbWl0IHRpbWUuXG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNoZWV0cyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgc2hlZXQgZ2l2ZW4gYGhleFVuZGVyYCBoYXMgYWxyZWFkeSB3cml0dGVuIGl0cyBPV04gY29sb3VyIGF0dHJpYnV0ZSwgb25lIHRvbmUgZm9yIHRoZSB0b3BcbiAgICAgIC8vIGdyaWQgYW5kIGFub3RoZXIgZm9yIHRoZSB1bmRlcnNpZGUgYW5kIHJpbS4gdGludEdlbyB3b3VsZCBvdmVyd3JpdGUgdGhlIGxvdCB3aXRoIGEgc2luZ2xlXG4gICAgICAvLyBoZXggLS0gd2hpY2ggaXMgd2hhdCBzaGlwcGVkIHRoZSB0YXJwYXVsaW4gYmF5J3MgYmx1ZS1vdmVyLW9yYW5nZSB0YXJwIGFzIGEgd2hpdGUgc2FpbC5cbiAgICAgIGNvbnN0IGcgPSBzaGVldChzKTtcbiAgICAgIGdzLnB1c2gocy5oZXhVbmRlciAhPT0gdW5kZWZpbmVkID8gZyA6IHRpbnRHZW8oZywgcy5oZXgpKTtcbiAgICB9XG4gICAgLy8gT1JHQU5JQyBzdGF0aW9uIHR1YmVzOiBbeiwgY3gsIGN5LCByeCwgcnldIHN0YXRpb25zIHN3ZXB0IGFsb25nIFogLS0gdGhlIG9ubHkgc29mdCBmb3JtIGluIHRoZVxuICAgIC8vIGtpdCwgYSBseWluZyBhbmltYWwuIExpdCBzbW9vdGggYnkgdGhlIGhlbHBlcidzIHNoYXJlZCByaW5nIHZlcnRpY2VzLlxuICAgIGZvciAoY29uc3QgdCBvZiAoYy50dWJlc0Fsb25nID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHR1YmVBbG9uZyh0LnN0YXRpb25zLCB0LnNlZyA/PyAxMik7XG4gICAgICBpZiAodC5yeSkgZy5yb3RhdGVZKHQucnkpOyBpZiAodC5hdCkgZy50cmFuc2xhdGUodC5hdFswXSwgdC5hdFsxXSwgdC5hdFsyXSk7XG4gICAgICAvLyBgaGV4ZXNgIC0tIG9uZSBjb2xvdXIgcGVyIFNUQVRJT04sIGJsZW5kZWQgYWxvbmcgdGhlIHN3ZWVwIC0tIGlzIGhvdyBhIGNvYXQgcGF0dGVybiB0aGF0IHJ1bnNcbiAgICAgIC8vIGFsb25nIHRoZSBib2R5IChhIHdoaXRlIGNvbGxhciBiZXR3ZWVuIGEgdGFuIHNrdWxsIGFuZCBhIHRhbiBzYWRkbGUpIGlzIGNhcnJpZWQgb24gYSBzaW5nbGVcbiAgICAgIC8vIG1lcmdlZCBtZXNoLiBUaGUgY29tcG9uZW50J3MgYXhpcyB0aW50IHRoZW4gbXVsdGlwbGllcyB0aGUgZG9yc2FsLXRvLXZlbnRyYWwgZmFkZSBpbnRvIGl0LFxuICAgICAgLy8gYW5kIG5laXRoZXIgY29zdHMgYSBtYXRlcmlhbC4gQSBzaW5nbGUgYGhleGAgc3RheXMgdGhlIGRlZmF1bHQuXG4gICAgICBpZiAodC5oZXhlcykge1xuICAgICAgICAvLyBBIHN0YXRpb24gZW50cnkgbWF5IGJlIG9uZSBoZXgsIG9yIGEgUEFJUiBbZG9yc2FsLCB2ZW50cmFsXSBibGVuZGVkIGFyb3VuZCB0aGUgcmluZyBieSB0aGVcbiAgICAgICAgLy8gc2FtZSBzaW4odGhldGEpIHR1YmVBbG9uZyBzd2VwdCB0aGUgc2VjdGlvbiB3aXRoIC0tIHNvIHRoZSBjb2F0IHJ1bnMgYm90aCBBTE9ORyB0aGUgYm9keVxuICAgICAgICAvLyAoYSB3aGl0ZSBjb2xsYXIgYmV0d2VlbiBhIHRhbiBza3VsbCBhbmQgYSB0YW4gc2FkZGxlKSBhbmQgQUNST1NTIGl0ICh0aGUgc2FkZGxlIGdpdmluZyB3YXlcbiAgICAgICAgLy8gdG8gYSBkdXN0eSBmbGFuayBhbmQgYSBwYWxlIGJlbGx5KS4gQW4gYXhpcyB0aW50IGNhbm5vdCBkbyB0aGUgc2Vjb25kIGhhbGY6IG9uIGFuIGFuaW1hbFxuICAgICAgICAvLyBseWluZyBvbiBpdHMgc2lkZSB0aGUgZG9yc2FsLXRvLXZlbnRyYWwgYXhpcyBpcyBob3Jpem9udGFsLCBzbyBhIGJhbmQgaW4geCBjdXRzIHRoZSBjcm93blxuICAgICAgICAvLyBvZiB0aGUgc3dlZXAgaW4gaGFsZiwgYW5kIGEgTVVMVElQTFkgY2FuIG9ubHkgZXZlciBkYXJrZW4gLS0gaXQgY2Fubm90IHRha2UgYSB3YXJtIHRhbiB0b1xuICAgICAgICAvLyBhIGNvb2xlciBncmV5LiBUd28gY29sb3VycyBwZXIgc3RhdGlvbiwgb25lIGF0dHJpYnV0ZSwgc3RpbGwgb25lIGRyYXcgY2FsbC5cbiAgICAgICAgY29uc3Qgc2VnID0gdC5zZWcgPz8gMTIsIG4gPSB0LnN0YXRpb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShzZWcgKiBuICogMyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZSA9IHQuaGV4ZXNbTWF0aC5taW4odC5oZXhlcy5sZW5ndGggLSAxLCBpKV07XG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBUSFJFRS5Db2xvcihBcnJheS5pc0FycmF5KGUpID8gZVswXSA6IGUpLCB2ID0gbmV3IFRIUkVFLkNvbG9yKEFycmF5LmlzQXJyYXkoZSkgPyBlWzFdIDogZSk7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZiA9IChNYXRoLnNpbihqICogTWF0aC5QSSAqIDIgLyBzZWcpICsgMSkgLyAyO1xuICAgICAgICAgICAgY29uc3QgayA9IChpICogc2VnICsgaikgKiAzO1xuICAgICAgICAgICAgY29sW2tdID0gZC5yICsgKHYuciAtIGQucikgKiBmOyBjb2xbayArIDFdID0gZC5nICsgKHYuZyAtIGQuZykgKiBmOyBjb2xbayArIDJdID0gZC5iICsgKHYuYiAtIGQuYikgKiBmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICAgICAgICBncy5wdXNoKGcpO1xuICAgICAgfSBlbHNlIGdzLnB1c2godGludEdlbyhnLCB0LmhleCA/PyAweGZmZmZmZikpO1xuICAgIH1cbiAgICBsZXQgZyA9IG1lcmdlR2Vvcyhncyk7XG4gICAgLy8gYSBwZXItY29tcG9uZW50IHNjYWxlLCBhcHBsaWVkIHRvIHRoZSBtZXJnZSBiZWZvcmUgdGludGluZzogaG93IGEgbHlpbmcgYW5pbWFsIGF1dGhvcmVkIGF0XG4gICAgLy8gaXRzIG93biBwcm9wb3J0aW9ucyBpcyBmaXR0ZWQgaW50byB0aGUgZGVjbGFyZWQgZW52ZWxvcGUgd2l0aG91dCByZS1yZWFkaW5nIGV2ZXJ5IHN0YXRpb25cbiAgICBpZiAoYy5zY2FsZSkgZy5zY2FsZShjLnNjYWxlWzBdLCBjLnNjYWxlWzFdLCBjLnNjYWxlWzJdKTtcbiAgICAvLyBBWElTIFRJTlQ6IGEgcGVyLXZlcnRleCBibGVuZCBmcm9tIGMwIGF0IGBmcm9tYCB0byBjMSBhdCBgdG9gIGFsb25nIG9uZSBheGlzLCBvdmVyIHRoZSB3aG9sZVxuICAgIC8vIG1lcmdlIC0tIGEgdGFuIGJhY2sgZmFkaW5nIHRvIGEgd2hpdGUgYmVsbHkgY29zdHMgYW4gYXR0cmlidXRlLCBub3QgYSBzZWNvbmQgbWF0ZXJpYWwuIEFwcGxpZWRcbiAgICAvLyBpbiBMSU5FQVIgc3BhY2UgdGhyb3VnaCBUSFJFRS5Db2xvci4gYGtlZXBgIG11bHRpcGxpZXMgdGhlIGJsZW5kIGludG8gdGhlIGV4aXN0aW5nIHRpbnQgaW5zdGVhZFxuICAgIC8vIG9mIHJlcGxhY2luZyBpdCwgc28gYSBkYXJrIG5vc2Ugc3RheXMgZGFyay5cbiAgICBpZiAoYy50aW50KSB7XG4gICAgICBjb25zdCBhID0gbmV3IFRIUkVFLkNvbG9yKGMudGludC5jMCksIGIgPSBuZXcgVEhSRUUuQ29sb3IoYy50aW50LmMxKTtcbiAgICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTsgbGV0IGNvbCA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSB8IG51bGw7XG4gICAgICBpZiAoIWNvbCkgeyBjb2wgPSBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpLmZpbGwoMSksIDMpOyBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBjb2wpOyB9XG4gICAgICBjb25zdCBheCA9IGMudGludC5heGlzID09PSAneCcgPyAwIDogYy50aW50LmF4aXMgPT09ICd5JyA/IDEgOiAyO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgdiA9IGF4ID09PSAwID8gcC5nZXRYKGkpIDogYXggPT09IDEgPyBwLmdldFkoaSkgOiBwLmdldFooaSk7XG4gICAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAodiAtIGMudGludC5mcm9tKSAvIChjLnRpbnQudG8gLSBjLnRpbnQuZnJvbSkpKTtcbiAgICAgICAgY29uc3QgciA9IGEuciArIChiLnIgLSBhLnIpICogdCwgZ2cgPSBhLmcgKyAoYi5nIC0gYS5nKSAqIHQsIGJiID0gYS5iICsgKGIuYiAtIGEuYikgKiB0O1xuICAgICAgICBpZiAoYy50aW50LmtlZXApIGNvbC5zZXRYWVooaSwgY29sLmdldFgoaSkgKiByLCBjb2wuZ2V0WShpKSAqIGdnLCBjb2wuZ2V0WihpKSAqIGJiKTsgZWxzZSBjb2wuc2V0WFlaKGksIHIsIGdnLCBiYik7XG4gICAgICB9XG4gICAgICBjb2wubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoYy51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAnaGVpZ2h0JykgZyA9IGhlaWdodFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ3BhbmVsJykgZyA9IHBhbmVsVVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAncGFuZWwtcm90JykgZyA9IHBhbmVsVVYoZywgYy51dlNjYWxlID8/IDEsIHRydWUpO1xuICAgIC8vICdjdWxtJyBpcyBkZWxpYmVyYXRlbHkgYWJzZW50IGhlcmU6IGl0IGlzIHdyaXR0ZW4gcGVyIGN5bGluZGVyIGFib3ZlLCBiZWZvcmUgdGhlIHJvdGF0aW9ucyxcbiAgICAvLyBhbmQgYSB3aG9sZS1tZXJnZSBwYXNzIHdvdWxkIGZsYXR0ZW4gaXQgYmFjayB0byB0aGUgY3lsaW5kZXIncyBkZWZhdWx0IDAuLjEgd3JhcC5cbiAgICBhZGQoYy5pZCwgYy5uYW1lLCBnLCBjLm1hdGVyaWFsKTtcbiAgICBpZiAoYy5jb2xsaWRlcikgY29sbGlkZXJzW2MuaWRdID0gYy5jb2xsaWRlcjtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmVwZXRpdGlvbiBzeXN0ZW1zXG4gICAqIFBpY2tldHMsIHNsYXRzLCBsYXR0aWNlIHN0cmlwczogb25lIGdlb21ldHJ5LCBvbmUgSW5zdGFuY2VkTWVzaCwgb25lIGRyYXcgY2FsbC4gKi9cbiAgZm9yIChjb25zdCByIG9mIChHLmluc3RhbmNlZCA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoci5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgKHIuc3Bpa2VzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNwaWtlKHMuYXQsIHMudywgcy5oKSwgcy5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IGYgb2YgKHIuZnJ1c3RhID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8oZnJ1c3R1bShmLnNsaWNlKDEpKSwgZlswXSkpO1xuICAgIGZvciAoY29uc3QgY3kgb2YgKHIuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIGB0aDBgL2B0aExlbmAgY3V0IGEgUEFSVElBTCBjeWxpbmRlciB0aGUgc2FtZSB3YXkgdGhlIGNvbXBvbmVudCBicmFuY2ggZG9lczogYSBzcGxpdCBiYW1ib29cbiAgICAgIC8vIGN1bG0gaXMgYSBoYWxmIHBpcGUsIHRoTGVuID0gUEksIGBvcGVuYCBzbyBpdCBpcyBhIHNoZWxsIHdpdGggbm8gZGlzY3MgYXQgaXRzIGVuZHMuIFRoZVxuICAgICAgLy8gbWF0ZXJpYWwgY2FycmllcyBkb3VibGVTaWRlZCwgYmVjYXVzZSBhIGhvbGxvdy11cCBjdWxtIGlzIHNlZW4gZnJvbSB0aGUgaW5zaWRlLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGN5LnJ0LCBjeS5yYiwgY3kuaCwgY3kuc2VnID8/IDEyLCAxLCBjeS5vcGVuID8/IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5LnRoMCA/PyAwLCBjeS50aExlbiA/PyBNYXRoLlBJICogMik7XG4gICAgICBpZiAoci51diA9PT0gJ2N1bG0nKSBjdWxtVVYoZywgY3kucnQsIGN5LmgsIHIudXZTY2FsZSA/PyAxLCBjeS52T2ZmID8/IDApO1xuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnkpIGcucm90YXRlWShjeS5yeSk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIC8vIEFuIE9QRU4gd2hlZWwgLS0gdHlyZSBhbmQgcmltIGFzIGNsb3NlZCByaW5nIGxhdGhlcywgYSBodWIsIGFuZCB3aXJlIHNwb2tlcyAtLSBmb3IgYSBiaWN5Y2xlXG4gICAgLy8gd2hvc2Ugd2hlZWxzIHJlYWQgYXMgYmljeWNsZSB3aGVlbHMgcmF0aGVyIHRoYW4gZGlzY3MuIExhdGhlcyByZXZvbHZlIGFib3V0IFkgKGByeGAgbGF5cyB0aGVcbiAgICAvLyBheGxlIHdoZXJlIHRoZSBwbGFjZW1lbnQgd2FudHMgaXQpOyBgc3Bva2VzYCByYWRpYXRlIGFib3V0IFggYnkgdGhlIGhlbHBlcidzIGNvbnZlbnRpb24sIHNvIGFuXG4gICAgLy8gYXhsZSBvbiBaIHRha2VzIGByeTogUEkvMmAuXG4gICAgZm9yIChjb25zdCBsIG9mIChyLmxhdGhlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBsYXRoZShsLnB0cywgbC5zZWcgPz8gMTIsIDAsIGwuc2hhcnAgIT09IGZhbHNlLCBsLndlbGRTZWFtID09PSB0cnVlKTtcbiAgICAgIGlmIChsLnJ4KSBnLnJvdGF0ZVgobC5yeCk7IGlmIChsLnJ5KSBnLnJvdGF0ZVkobC5yeSk7IGlmIChsLnJ6KSBnLnJvdGF0ZVoobC5yeik7XG4gICAgICBpZiAobC5hdCkgZy50cmFuc2xhdGUobC5hdFswXSwgbC5hdFsxXSwgbC5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBsLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHMgb2YgKHIuc3Bva2VzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHNwb2tlcyhzLnJIdWIsIHMuclJpbSwgcy5oYWxmVywgcy5uLCBzLmhleCwgcy50ID8/IDAuMDA2LCBzLnByaXNtID8/IGZhbHNlKTtcbiAgICAgIGlmIChzLnJ4KSBnLnJvdGF0ZVgocy5yeCk7IGlmIChzLnJ5KSBnLnJvdGF0ZVkocy5yeSk7IGlmIChzLnJ6KSBnLnJvdGF0ZVoocy5yeik7XG4gICAgICBpZiAocy5hdCkgZy50cmFuc2xhdGUocy5hdFswXSwgcy5hdFsxXSwgcy5hdFsyXSk7IGdzLnB1c2goZyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdCBvZiAoci50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIGxldCBnID0gbWVyZ2VHZW9zKGdzKTtcbiAgICBpZiAoci51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgci51dlNjYWxlID8/IDEpO1xuICAgIGlmIChyLnV2ID09PSAnaGVpZ2h0JykgZyA9IGhlaWdodFVWKGcsIHIudXZTY2FsZSA/PyAxKTtcbiAgICAvLyAnY3VsbScgYWdhaW4gd3JpdHRlbiBwZXIgY3lsaW5kZXIgYWJvdmUsIGJlZm9yZSB0aGUgcm90YXRpb25zLlxuICAgIGNvbnN0IG1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgcCBvZiByLnBsYWNlbWVudHMgYXMgbnVtYmVyW11bXSkge1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKG5ldyBUSFJFRS5FdWxlcihwWzNdID8/IDAsIHBbNF0gPz8gMCwgcFs1XSA/PyAwKSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKSk7XG4gICAgfVxuICAgIGFkZEluc3Qoci5pZCwgci5uYW1lLCBnLCByLm1hdGVyaWFsLCBtYXRzLCByLmNvbG9ycyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhc2VzICovXG4gIGZvciAoY29uc3QgdCBvZiAoQ09ORklHLnRpbGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG1hdCA9IG1hdGVyaWFsc1t0Lm1hdGVyaWFsXTtcbiAgICBpZiAoIW1hdCkgY29udGludWU7XG4gICAgLy8gQSBCQUtFRCBncmFwaGljIChhIHByaW50ZWQgc2lnbiBmYWNlKTogb25lIFdlYlAgZGF0YSBVUkkgY29tcG9zZWQgb2ZmbGluZSBmcm9tIHRoZSBwbGF0ZSdzIG93blxuICAgIC8vIHByaW50ZWQgcmVnaW9uIGFuZCB2ZWN0b3IgbWFya3MsIGxvYWRlZCB0aHJvdWdoIFRleHR1cmVMb2FkZXIuIEFzc2lnbmVkIHN5bmNocm9ub3VzbHkgc28gdGhlXG4gICAgLy8gaGFybmVzcyB3YWl0cyBvbiB0aGUgZGVjb2RlLiBJdCBiZWF0cyBmaWxsVGV4dCwgd2hpY2ggZHJhd3MgYSBkaWZmZXJlbnQgd29yZG1hcmsgcGVyIG1hY2hpbmUuXG4gICAgaWYgKHQua2luZCA9PT0gJ2Jha2VkJykge1xuICAgICAgLy8gVW5kZXIgcGxhaW4gTm9kZSAodGhlIGNvcGxhbmFyIGNoZWNrLCB0aGUgcnVudGltZSBwcm9iZSkgdGhlcmUgaXMgbm8gZG9jdW1lbnQgZm9yIEltYWdlTG9hZGVyOlxuICAgICAgLy8ga2VlcCB0aGUgd2hpdGUgZmFsbGJhY2sgcmF0aGVyIHRoYW4gdGhyb3csIGV4YWN0bHkgYXMgdGhlIHJldGFpbCBnbGF6aW5nIGRvZXMuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgY29udGludWU7XG4gICAgICBjb25zdCBiYWtlZCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCh0LnVyaSk7XG4gICAgICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG4gICAgICBpZiAoc3JnYikgYmFrZWQuY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgICBiYWtlZC5hbmlzb3Ryb3B5ID0gNDtcbiAgICAgIG1hdC5tYXAgPSBiYWtlZDsgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBsZXQgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKHQua2luZCA9PT0gJ211ZCcpIHRleCA9IG11ZFRpbGUodC5zaXplID8/IDUxMiwgdC5iYXNlLCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMzKTtcbiAgICBpZiAodC5raW5kID09PSAnZHVzdCcpIHRleCA9IGR1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuZHVzdCwgdC5zZWVkID8/IDEsIHQuY292ZXJhZ2UgPz8gMC4zMCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BsYW5rJykgdGV4ID0gcGxhbmtUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYm9hcmRzID8/IDYsIHQuc2VlZCA/PyA1KTtcbiAgICBpZiAodC5raW5kID09PSAncnVzdCcpIHRleCA9IHJ1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQucmF0aW8sIHQuc2VlZCA/PyA3LCB0LmRlbnNpdHkgPz8gOTApO1xuICAgIGlmICh0LmtpbmQgPT09ICdwYWludCcpIHRleCA9IHBhaW50VGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTcsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjb3JydWdhdGlvbicpIHRleCA9IGNvcnJ1Z2F0aW9uVGlsZSh0LnNpemUgPz8gNTEyLCB0LnBpdGNoID8/IDEyLCB0LmxvdyA/PyAwLjcsIHQuc2VlZCA/PyAzKTtcbiAgICBpZiAodC5raW5kID09PSAnZ3JpbWUnKSB0ZXggPSBncmltZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDExLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnZnVyJykgdGV4ID0gZnVyVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjaGFpbmxpbmsnKSB0ZXggPSBjaGFpbmxpbmtUaWxlKHQuc2l6ZSA/PyAyNTYsIHQud2lyZSA/PyAwLjA5LCB0LnNlZWQgPz8gNCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2JhbWJvbycpIHRleCA9IGJhbWJvb1RpbGUodC5zaXplID8/IDUxMiwgdC5zdHJpcHMgPz8gMTAsIHQuc2VlZCA/PyA2KTtcbiAgICBpZiAodC5raW5kID09PSAnc3RyaXBlcycpIHRleCA9IHN0cmlwZVRpbGUodC5zaXplID8/IDI1NiwgdC5iYW5kcyA/PyA4LCB0LmEsIHQuYiwgdC5zZWVkID8/IDkpO1xuICAgIGlmICh0LmtpbmQgPT09ICdwb3N0ZXInKSB0ZXggPSBwb3N0ZXJUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA4LCB0LmxpbmVzID8/IFtdKTtcbiAgICBpZiAodC5raW5kID09PSAncGViYmxlJykgdGV4ID0gcGViYmxlVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMjEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0cmVhZCcpIHRleCA9IHRyZWFkVGlsZSh0LnNpemUgPz8gMjU2LCB0LnNlZWQgPz8gMjMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0eXJlJykgdGV4ID0gdHlyZVRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDI5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY3VsbScpIHRleCA9IGN1bG1UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAzMSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3Nhd24nKSB0ZXggPSBzYXduVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0aGF0Y2gnKSB0ZXggPSB0aGF0Y2hUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAzNywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3RhcnAnKSB0ZXggPSB0YXJwVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDEsIHQpO1xuICAgIGJpbmRUaWxlKG1hdCwgdGV4LCB0LmJ1bXAgPz8gMCk7XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbi8qKlxuICogdGhhaWtpdCBlbnRyeSBwb2ludC4gVGhlIHJlZ2lzdHJ5IHJlY29yZHMgYGNyZWF0ZU9iamVjdE1vZGVsYCBhcyB0aGUgZXhwb3J0IGFuZCBjYWxscyBpdCB3aXRoXG4gKiAoc3BlYywgb3B0aW9ucykuIGBzcGVjYCBpcyBhY2NlcHRlZCBhbmQgYXR0YWNoZWQgZm9yIGhvc3Qtc2lkZSBpbnNwZWN0aW9uIC0tIHRoZSByZWNvbnN0cnVjdGlvblxuICogZGF0YSBhbHJlYWR5IGxpdmVzIGluIHRoaXMgbW9kdWxlLCBzbyBpdCBpcyBkZWxpYmVyYXRlbHkgbm90IGEgc2Vjb25kIHNvdXJjZSBvZiB0cnV0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKHNwZWM/OiB1bmtub3duLCBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVTdGFpbmxlc3NTdGVlbE5vb2RsZVNob3BUYWJsZU1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogdGhlIHJvb3QsIHBsdXMgT05FIFBFUiBXSEVFTCAoYW5kIGFueSBvdGhlciBtZWNoYW5pc20gQ09ORklHLnBpdm90cyBuYW1lcyAtLSBhXG4gICAgLy8gc3RlZXJpbmcgaGVhZCwgYSBjYW5vcHkgc3RheSkuIEEgdmVoaWNsZSdzIHdoZWVscyBnZW51aW5lbHkgdHVybiwgc28gZWFjaCBvbmUgaXMgYSBwcm9taXNlXG4gICAgLy8ga2VwdDogdGhlIHBpdm90IHNpdHMgYXQgdGhlIGh1YiwgaXRzIGF4aXMgaXMgdGhlIGF4bGUsIGFuZCBgaW5zdGFuY2VgIG5hbWVzIHdoaWNoIGluc3RhbmNlXG4gICAgLy8gb2YgdGhlIHdoZWVsIEluc3RhbmNlZE1lc2ggaXQgZHJpdmVzLiBOb3RoaW5nIGVsc2Ugb24gdGhlIHByb3AgbW92ZXMgLS0gdGhlIGRvb3JzIGFyZSBwYXJ0XG4gICAgLy8gb2YgdGhlIGJvZHkgc2hlbGwgLS0gc28gbm90aGluZyBlbHNlIGdldHMgYW4gYXhpcy5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcbiAgICBmb3IgKGNvbnN0IHB2IG9mIChDT05GSUcucGl2b3RzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgbyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgICAgby5uYW1lID0gcHYubmFtZTtcbiAgICAgIG8ucG9zaXRpb24uc2V0KHB2LnBvc2l0aW9uWzBdLCBwdi5wb3NpdGlvblsxXSwgcHYucG9zaXRpb25bMl0pO1xuICAgICAgby51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgICBhbmltYXRpb25Sb2xlOiAnY2hpbGQnLFxuICAgICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogcHYucG9zaXRpb24sIGF4aXM6IHB2LmF4aXMsIG5hbWU6IHB2Lm5hbWUsXG4gICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcHYuY29tcG9uZW50LCBpbnN0YW5jZTogcHYuaW5zdGFuY2UgPz8gbnVsbCwgbm90ZXM6IHB2Lm5vdGUgPz8gJycgfSxcbiAgICAgIH07XG4gICAgICByb290LmFkZChvKTtcbiAgICAgIHBpdm90cy5wdXNoKG8pO1xuICAgIH1cblxuICAgIC8vIFNvY2tldHM6IE5PTkUgdW5sZXNzIENPTkZJRy5zb2NrZXRzIG5hbWVzIG9uZS4gTm90aGluZyBhdHRhY2hlcyB0byBhIHZlaGljbGUgaW4gdGhpcyBraXRcbiAgICAvLyBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBc0N2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDO0FBQUEsRUFDVixZQUFZO0FBQUEsSUFDVixjQUFjO0FBQUEsTUFDWjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE9BQU87QUFBQSxjQUNMO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsT0FBTztBQUFBLFlBQ1AsWUFBWTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFPRixTQUFTLFVBQVUsTUFBb0Q7QUFDckUsUUFBTSxRQUFnQyxDQUFDO0FBQ3ZDLFFBQU0sT0FBa0IsQ0FB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
