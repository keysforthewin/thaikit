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

// scratch/stainless-pavement-litter-bin/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createStainlessPavementLitterBinModel: () => createStainlessPavementLitterBinModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "stainless-pavement-litter-bin",
  "name": "Stainless Pavement Litter Bin",
  "exportName": "StainlessPavementLitterBin",
  "envelope": "Envelope 0.4 x 0.9 x 0.4 m, origin base-center, +Y up, +Z front (opening to the front-left).\n * Budget (medium): <=2000 triangles, <=2 draw calls, <=2 materials, <=4 unique geometries.",
  "materials": [
    {
      "id": "steel",
      "color": 16777215,
      "roughness": 0.38,
      "metalness": 0.35,
      "vertexColors": true
    },
    {
      "id": "sand",
      "color": 16777215,
      "roughness": 1,
      "metalness": 0,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "steel",
      "kind": "stripes",
      "size": 256,
      "seed": 191,
      "bands": 16,
      "a": [
        1,
        1,
        0.98
      ],
      "b": [
        0.9,
        0.9,
        0.88
      ]
    },
    {
      "material": "sand",
      "kind": "pebble",
      "size": 256,
      "seed": 192,
      "count": 2600,
      "rMin": 4e-3,
      "rMax": 8e-3,
      "ground": [
        0.78,
        0.74,
        0.68
      ],
      "palette": [
        [
          1,
          0.98,
          0.95
        ],
        [
          0.9,
          0.86,
          0.8
        ],
        [
          1.04,
          1,
          0.96
        ],
        [
          0.84,
          0.8,
          0.76
        ]
      ],
      "bump": 0.015
    }
  ],
  "geometry": {
    "components": [
      {
        "id": "body",
        "name": "Steel body and cap",
        "material": "steel",
        "collider": {
          "shape": "cylinder",
          "localCenter": [
            0,
            0.45,
            0
          ],
          "radius": 0.2,
          "height": 0.9,
          "axis": [
            0,
            1,
            0
          ],
          "notes": "Declared on the asset as cylinder: one proxy over foot, body and cap."
        },
        "lathes": [
          {
            "pts": [
              [
                0,
                0
              ],
              [
                0.2,
                0
              ],
              [
                0.2,
                0.03
              ],
              [
                0.199,
                0.038
              ],
              [
                0.199,
                0.705
              ],
              [
                0,
                0.705
              ]
            ],
            "seg": 28,
            "at": [
              0,
              0,
              0
            ],
            "hex": 12434098,
            "cylUV": [
              0.12,
              0.12,
              0
            ]
          },
          {
            "pts": [
              [
                0,
                0.705
              ],
              [
                0.2,
                0.705
              ],
              [
                0.2,
                0.8
              ],
              [
                0.193,
                0.81
              ],
              [
                0.193,
                0.885
              ],
              [
                0.185,
                0.897
              ],
              [
                0.169,
                0.9
              ],
              [
                0.125,
                0.9
              ],
              [
                0.115,
                0.888
              ],
              [
                0,
                0.888
              ]
            ],
            "seg": 28,
            "at": [
              0,
              0,
              0
            ],
            "hex": 12894134,
            "cylUV": [
              0.12,
              0.12,
              0.03
            ]
          },
          {
            "pts": [
              [
                0.2005,
                0.698
              ],
              [
                0.202,
                0.7
              ],
              [
                0.202,
                0.714
              ],
              [
                0.2005,
                0.716
              ]
            ],
            "seg": 28,
            "at": [
              0,
              0,
              0
            ],
            "hex": 11776168,
            "cylUV": [
              0.12,
              0.12,
              0
            ]
          }
        ],
        "cyls": [
          {
            "at": [
              0,
              0.615,
              0
            ],
            "rt": 0.201,
            "rb": 0.201,
            "h": 0.09,
            "seg": 8,
            "open": true,
            "th0": -0.71,
            "thLen": 0.78,
            "hex": 9077884
          },
          {
            "at": [
              0,
              0.668,
              0
            ],
            "rt": 0.20500000000000002,
            "rb": 0.20500000000000002,
            "h": 0.016,
            "seg": 8,
            "open": true,
            "th0": -0.75,
            "thLen": 0.86,
            "hex": 14210252
          }
        ]
      },
      {
        "id": "ashtray",
        "name": "Sand ashtray dish",
        "material": "sand",
        "parent": "body",
        "cyls": [
          {
            "at": [
              0,
              0.8915,
              0
            ],
            "rt": 0.118,
            "rb": 0.118,
            "h": 6e-3,
            "seg": 20,
            "hex": 11707798
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
function lathe(pts, seg, yOffset = 0, sharp = true) {
  const v = (sharp ? splitCorners(pts) : pts).map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
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
function tubeAlong(stations, seg) {
  const pos = [], idx = [];
  for (let i = 0; i < stations.length; i++) {
    const [z, cx, cy, rx, ry] = stations[i];
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      pos.push(cx + Math.sin(th) * rx, cy + Math.cos(th) * ry, z);
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
function createStainlessPavementLitterBinModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Stainless Pavement Litter Bin";
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
      const g2 = new THREE.CylinderGeometry(cy.rt, cy.rb, cy.h, cy.seg ?? 12, 1, cy.open ?? false, cy.th0 ?? 0, cy.thLen ?? Math.PI * 2);
      if (cy.uvRep) {
        const uv = g2.getAttribute("uv");
        for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * cy.uvRep[0], uv.getY(i) * cy.uvRep[1]);
      }
      if (cy.rx) g2.rotateX(cy.rx);
      if (cy.ry) g2.rotateY(cy.ry);
      if (cy.rz) g2.rotateZ(cy.rz);
      g2.translate(cy.at[0], cy.at[1], cy.at[2]);
      gs.push(tintGeo(g2, cy.hex));
    }
    for (const l of c.lathes ?? []) {
      const g2 = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false);
      if (l.cylUV) {
        const cu = Array.isArray(l.cylUV) ? l.cylUV : [l.cylUV, l.cylUV, 0];
        latheUV(g2, g2.getAttribute("position").count / ((l.seg ?? 12) + 1) | 0, l.seg ?? 12, cu[0], cu[1], cu[2] ?? 0);
      }
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
    for (const t of c.tubesAlong ?? []) {
      const g2 = tubeAlong(t.stations, t.seg ?? 12);
      if (t.ry) g2.rotateY(t.ry);
      if (t.at) g2.translate(t.at[0], t.at[1], t.at[2]);
      gs.push(tintGeo(g2, t.hex ?? 16777215));
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
    if (t.kind === "fur") tex = furTile(t.size ?? 512, t.seed ?? 13, t);
    if (t.kind === "chainlink") tex = chainlinkTile(t.size ?? 256, t.wire ?? 0.09, t.seed ?? 4);
    if (t.kind === "bamboo") tex = bambooTile(t.size ?? 512, t.strips ?? 10, t.seed ?? 6);
    if (t.kind === "stripes") tex = stripeTile(t.size ?? 256, t.bands ?? 8, t.a, t.b, t.seed ?? 9);
    if (t.kind === "poster") tex = posterTile(t.size ?? 512, t.seed ?? 8, t.lines ?? []);
    if (t.kind === "pebble") tex = pebbleTile(t.size ?? 512, t.seed ?? 21, t);
    if (t.kind === "tread") tex = treadTile(t.size ?? 256, t.seed ?? 23, t);
    bindTile(mat, tex, t.bump ?? 0);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createStainlessPavementLitterBinModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogU3RhaW5sZXNzIFBhdmVtZW50IExpdHRlciBCaW4gLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcsXG4gKiBpbnN0YW5jaW5nIGFuZCB0aGUgbGF0aGUgaGVscGVycyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzXG4gKiBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgMC40IHggMC45IHggMC40IG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsICtaIGZyb250IChvcGVuaW5nIHRvIHRoZSBmcm9udC1sZWZ0KS5cbiAqIEJ1ZGdldCAobWVkaXVtKTogPD0yMDAwIHRyaWFuZ2xlcywgPD0yIGRyYXcgY2FsbHMsIDw9MiBtYXRlcmlhbHMsIDw9NCB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgU1RSRUVUIEFORCBWRU5ET1IgUFJPUFMgLS0gYSBjb25lLCBhIGJhcnJpZXIsIGEgY2FydCwgYSBzdG9vbC4gVGhlXG4gKiBzaGFyZWQgdm9jYWJ1bGFyeSBpcyB0aGUgVElOVEVEIEJPWCBhbmQgdGhlIHBvbHlsaW5lIFRVQkUgbWVyZ2VkIGludG8gb25lIGdlb21ldHJ5IHBlciBtYXRlcmlhbCxcbiAqIHdpdGggZXZlcnkgY29sb3VyIGRpZmZlcmVuY2UgaW5zaWRlIGEgbWF0ZXJpYWwgY2FycmllZCBhcyBhIHZlcnRleCBjb2xvdXIgb24gYSBXSElURSBtYXRlcmlhbCxcbiAqIGFuZCBzdXJmYWNlIGlkZW50aXR5IChjb3JydWdhdGlvbiwgZ3JpbWUgd2FzaCwgbW9zcywgcGxhbmsgam9pbnRzLCBydXN0KSBkZWxpdmVyZWQgYXMgT05FXG4gKiBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSBwZXIgbWF0ZXJpYWwgcmF0aGVyIHRoYW4gYXMgZ2VvbWV0cnkgb3IgYSBwcm9jZWR1cmFsIHRleHR1cmUgc2V0LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwic3RhaW5sZXNzLXBhdmVtZW50LWxpdHRlci1iaW5cIixcbiAgICBcIm5hbWVcIjogXCJTdGFpbmxlc3MgUGF2ZW1lbnQgTGl0dGVyIEJpblwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIlN0YWlubGVzc1BhdmVtZW50TGl0dGVyQmluXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDAuNCB4IDAuOSB4IDAuNCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCArWiBmcm9udCAob3BlbmluZyB0byB0aGUgZnJvbnQtbGVmdCkuXFxuICogQnVkZ2V0IChtZWRpdW0pOiA8PTIwMDAgdHJpYW5nbGVzLCA8PTIgZHJhdyBjYWxscywgPD0yIG1hdGVyaWFscywgPD00IHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInN0ZWVsXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMzgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMzUsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzYW5kXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDEsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwidGlsZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwic3RlZWxcIixcbiAgICAgICAgXCJraW5kXCI6IFwic3RyaXBlc1wiLFxuICAgICAgICBcInNpemVcIjogMjU2LFxuICAgICAgICBcInNlZWRcIjogMTkxLFxuICAgICAgICBcImJhbmRzXCI6IDE2LFxuICAgICAgICBcImFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLjk4XG4gICAgICAgIF0sXG4gICAgICAgIFwiYlwiOiBbXG4gICAgICAgICAgMC45LFxuICAgICAgICAgIDAuOSxcbiAgICAgICAgICAwLjg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJzYW5kXCIsXG4gICAgICAgIFwia2luZFwiOiBcInBlYmJsZVwiLFxuICAgICAgICBcInNpemVcIjogMjU2LFxuICAgICAgICBcInNlZWRcIjogMTkyLFxuICAgICAgICBcImNvdW50XCI6IDI2MDAsXG4gICAgICAgIFwick1pblwiOiAwLjAwNCxcbiAgICAgICAgXCJyTWF4XCI6IDAuMDA4LFxuICAgICAgICBcImdyb3VuZFwiOiBbXG4gICAgICAgICAgMC43OCxcbiAgICAgICAgICAwLjc0LFxuICAgICAgICAgIDAuNjhcbiAgICAgICAgXSxcbiAgICAgICAgXCJwYWxldHRlXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgMC45OCxcbiAgICAgICAgICAgIDAuOTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgIDAuODYsXG4gICAgICAgICAgICAwLjhcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuMDQsXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgMC45NlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC44NCxcbiAgICAgICAgICAgIDAuOCxcbiAgICAgICAgICAgIDAuNzZcbiAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIFwiYnVtcFwiOiAwLjAxNVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICBcImNvbXBvbmVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcImJvZHlcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJTdGVlbCBib2R5IGFuZCBjYXBcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwic3RlZWxcIixcbiAgICAgICAgICBcImNvbGxpZGVyXCI6IHtcbiAgICAgICAgICAgIFwic2hhcGVcIjogXCJjeWxpbmRlclwiLFxuICAgICAgICAgICAgXCJsb2NhbENlbnRlclwiOiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuNDUsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJhZGl1c1wiOiAwLjIsXG4gICAgICAgICAgICBcImhlaWdodFwiOiAwLjksXG4gICAgICAgICAgICBcImF4aXNcIjogW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJub3Rlc1wiOiBcIkRlY2xhcmVkIG9uIHRoZSBhc3NldCBhcyBjeWxpbmRlcjogb25lIHByb3h5IG92ZXIgZm9vdCwgYm9keSBhbmQgY2FwLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxhdGhlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yLFxuICAgICAgICAgICAgICAgICAgMC4wM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xOTksXG4gICAgICAgICAgICAgICAgICAwLjAzOFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xOTksXG4gICAgICAgICAgICAgICAgICAwLjcwNVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAuNzA1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInNlZ1wiOiAyOCxcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTI0MzQwOTgsXG4gICAgICAgICAgICAgIFwiY3lsVVZcIjogW1xuICAgICAgICAgICAgICAgIDAuMTIsXG4gICAgICAgICAgICAgICAgMC4xMixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMC43MDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMixcbiAgICAgICAgICAgICAgICAgIDAuNzA1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjIsXG4gICAgICAgICAgICAgICAgICAwLjhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTkzLFxuICAgICAgICAgICAgICAgICAgMC44MVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xOTMsXG4gICAgICAgICAgICAgICAgICAwLjg4NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xODUsXG4gICAgICAgICAgICAgICAgICAwLjg5N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNjksXG4gICAgICAgICAgICAgICAgICAwLjlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTI1LFxuICAgICAgICAgICAgICAgICAgMC45XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjExNSxcbiAgICAgICAgICAgICAgICAgIDAuODg4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMC44ODhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic2VnXCI6IDI4LFxuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImhleFwiOiAxMjg5NDEzNCxcbiAgICAgICAgICAgICAgXCJjeWxVVlwiOiBbXG4gICAgICAgICAgICAgICAgMC4xMixcbiAgICAgICAgICAgICAgICAwLjEyLFxuICAgICAgICAgICAgICAgIDAuMDNcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMjAwNSxcbiAgICAgICAgICAgICAgICAgIDAuNjk4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjIwMixcbiAgICAgICAgICAgICAgICAgIDAuN1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yMDIsXG4gICAgICAgICAgICAgICAgICAwLjcxNFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yMDA1LFxuICAgICAgICAgICAgICAgICAgMC43MTZcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic2VnXCI6IDI4LFxuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImhleFwiOiAxMTc3NjE2OCxcbiAgICAgICAgICAgICAgXCJjeWxVVlwiOiBbXG4gICAgICAgICAgICAgICAgMC4xMixcbiAgICAgICAgICAgICAgICAwLjEyLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjeWxzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjYxNSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4yMDEsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4yMDEsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjA5LFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ0aDBcIjogLTAuNzEsXG4gICAgICAgICAgICAgIFwidGhMZW5cIjogMC43OCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogOTA3Nzg4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjY2OCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4yMDUwMDAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjIwNTAwMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgICBcImhcIjogMC4wMTYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwib3BlblwiOiB0cnVlLFxuICAgICAgICAgICAgICBcInRoMFwiOiAtMC43NSxcbiAgICAgICAgICAgICAgXCJ0aExlblwiOiAwLjg2LFxuICAgICAgICAgICAgICBcImhleFwiOiAxNDIxMDI1MlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJhc2h0cmF5XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiU2FuZCBhc2h0cmF5IGRpc2hcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwic2FuZFwiLFxuICAgICAgICAgIFwicGFyZW50XCI6IFwiYm9keVwiLFxuICAgICAgICAgIFwiY3lsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC44OTE1LFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjExOCxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjExOCxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDA2LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAyMCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE3MDc3OThcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICAvLyBDT0xPUiBoYXMgdG8gYmUgY2FycmllZCB0b28sIGFuZCBpdCBpcyBlYXN5IHRvIGZvcmdldDogdGhpcyBmdW5jdGlvbiBjb3BpZWQgcG9zaXRpb24sIG5vcm1hbFxuICAvLyBhbmQgdXYgb25seSwgYW5kIHRoZSBtb3NxdWUncyByaWJiZWQgZG9tZXMgbG9zdCB0aGVpciBncmVlbi1hbmQtcGFsZSBzdHJpcGluZyB0aGUgbW9tZW50IHRoZXlcbiAgLy8gd2VyZSBtZXJnZWQgd2l0aCBhbnl0aGluZy4gVGhlIGZhaWx1cmUgaXMgc2lsZW50IC0tIHRoZSBkb21lIHJlbmRlcnMsIGluIG9uZSBmbGF0IGNvbG91ciAtLSBhbmRcbiAgLy8gdG9vayBhIHdyb25nIHRoZW9yeSBhYm91dCBzUkdCIGdhbW1hIGJlZm9yZSB0aGUgYXR0cmlidXRlIGxpc3Qgd2FzIHJlYWQuIEFueSBpbnB1dCBjYXJyeWluZyBhXG4gIC8vIGNvbG91ciBtZWFucyBldmVyeSBpbnB1dCBnZXRzIG9uZSwgd2hpdGUgd2hlcmUgaXQgaGFkIG5vbmUuXG4gIGNvbnN0IGFueUNvbG9yID0gcGFydHMuc29tZSgoZykgPT4gISFnLmdldEF0dHJpYnV0ZSgnY29sb3InKSk7XG4gIGNvbnN0IGNvbG9yID0gYW55Q29sb3IgPyBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMykuZmlsbCgxKSA6IG51bGw7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgY29uc3QgYyA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgICAgaWYgKGNvbG9yICYmIGMpIHsgY29sb3JbKHYgKyBpKSAqIDNdID0gYy5nZXRYKGkpOyBjb2xvclsodiArIGkpICogMyArIDFdID0gYy5nZXRZKGkpOyBjb2xvclsodiArIGkpICogMyArIDJdID0gYy5nZXRaKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2xvcikgb3V0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9yLCAzKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuLyoqIExhdGhlR2VvbWV0cnkgc2hhcmVzIHRoZSBjb3JuZXIgdmVydGV4IGJldHdlZW4gYW4gZW5kIGRpc2MgYW5kIHRoZSBzaWRlIHdhbGwsIHNvXG4gKiAgY29tcHV0ZVZlcnRleE5vcm1hbHMgdGlsdHMgdGhlIHdhbGwncyBmaXJzdCByaW5nIDQ1IGRlZ3JlZXMgdG93YXJkIHRoZSBkaXNjIGFuZCB0aGUgaGFybmVzcyBzaGFkZXNcbiAqICBhIGRhcmsgZ3JhZGllbnQgdGhlcmUgLS0gYSByaW5nIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIGFzIGEgSE9MRSB1bmRlciB0aGUgc3RhaW5sZXNzIGJpbidzIGNhcC5cbiAqICBJbnNlcnRpbmcgYSBwb2ludCAwLjggbW0gcGFzdCBldmVyeSBzaGFycCBjb3JuZXIgKD4gNzAgZGVncmVlcykgY29uZmluZXMgdGhlIGF2ZXJhZ2VkIG5vcm1hbCB0byB0aGF0XG4gKiAgc2xpdmVyLiBDb3N0cyBvbmUgcmluZyBwZXIgY29ybmVyOyBwYXNzIGBzaGFycCA9IGZhbHNlYCB3aGVyZSB0aGUgYnVkZ2V0IGNhbm5vdCBjYXJyeSBpdC4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29ybmVycyhwdHM6IG51bWJlcltdW10sIG1pbkRlZyA9IDcwLCBlcHMgPSAwLjAwMDgpOiBudW1iZXJbXVtdIHtcbiAgY29uc3Qgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcCA9IHB0c1tpXSwgYSA9IHB0c1tpIC0gMV0sIGIgPSBwdHNbaSArIDFdO1xuICAgIGxldCBzaGFycCA9IGZhbHNlO1xuICAgIGlmIChhICYmIGIpIHtcbiAgICAgIGNvbnN0IHV4ID0gcFswXSAtIGFbMF0sIHV5ID0gcFsxXSAtIGFbMV0sIHZ4ID0gYlswXSAtIHBbMF0sIHZ5ID0gYlsxXSAtIHBbMV07XG4gICAgICBjb25zdCBsdSA9IE1hdGguaHlwb3QodXgsIHV5KSwgbHYgPSBNYXRoLmh5cG90KHZ4LCB2eSk7XG4gICAgICBpZiAobHUgPiAwICYmIGx2ID4gMCkgc2hhcnAgPSBNYXRoLmFjb3MoTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsICh1eCAqIHZ4ICsgdXkgKiB2eSkgLyAobHUgKiBsdikpKSkgPiBtaW5EZWcgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgaWYgKHNoYXJwICYmIGx1ID4gMyAqIGVwcykgb3V0LnB1c2goW3BbMF0gLSB1eCAvIGx1ICogZXBzLCBwWzFdIC0gdXkgLyBsdSAqIGVwc10pO1xuICAgICAgb3V0LnB1c2gocCk7XG4gICAgICBpZiAoc2hhcnAgJiYgbHYgPiAzICogZXBzKSBvdXQucHVzaChbcFswXSArIHZ4IC8gbHYgKiBlcHMsIHBbMV0gKyB2eSAvIGx2ICogZXBzXSk7XG4gICAgfSBlbHNlIG91dC5wdXNoKHApO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwLCBzaGFycCA9IHRydWUpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSAoc2hhcnAgPyBzcGxpdENvcm5lcnMocHRzKSA6IHB0cykubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIElOREVYRUQsIHdpdGggc2hhcmVkIHJpbmcgdmVydGljZXMsIHNvIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGF2ZXJhZ2VzIGFjcm9zcyB0aGUgcXVhZHMgYW5kIHRoZVxuICAvLyBzdXJmYWNlIHNoYWRlcyBzbW9vdGguIFRoZSBmaXJzdCBidWlsZCBlbWl0dGVkIGxvb3NlIHRyaWFuZ2xlcywgYW5kIGEgZmxhdC1zaGFkZWQgc29mdCBib2R5XG4gIC8vIHNob3dzIGV2ZXJ5IHN0YXRpb24gYXMgYSBjcmVhc2UgLS0gYSByZWNsaW5pbmcgZmlndXJlIHRoYXQgbG9va2VkIGNydW1wbGVkIHJhdGhlciB0aGFuIGRyYXBlZC5cbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbeiwgY3gsIGN5LCByeCwgcnldID0gc3RhdGlvbnNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBwb3MucHVzaChjeCArIE1hdGguc2luKHRoKSAqIHJ4LCBjeSArIE1hdGguY29zKHRoKSAqIHJ5LCB6KTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYyA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgICBpZHgucHVzaChhLCBiLCBjLCBhLCBjLCBkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIGN1cmxlZCBob3JuOiBgbmAgdGFwZXJpbmcgYm94IHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBlYWNoIHJvdGF0ZWQgdG8gaXRzIG93biB0YW5nZW50LlxuICogU2hhcmVkIGJ5IHRoZSB1Ym9zb3QncyBjaG9mYSwgdGhlIHByYW5nJ3MgdHJpZGVudCBwcm9uZ3MgYW5kIHRoZSBDaGluZXNlIHNocmluZSdzIGZseWluZyBlYXZlcyxcbiAqIGJlY2F1c2UgYWxsIHRocmVlIGFyZSB0aGUgc2FtZSBwcm9ibGVtIC0tIGEgc3RyYWlnaHQgc3Bpa2UgYXQgYSByb29mIGVuZCByZWFkcyBhcyBhIGxpZ2h0bmluZyByb2RcbiAqIGFuZCB0aGUgY3VybCBpcyB0aGUgd2hvbGUgZmVhdHVyZS5cbiAqL1xuZnVuY3Rpb24gY3VybGVkSG9ybihyZWFjaDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHRoaWNrOiBudW1iZXIsIG4gPSA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3JlYWNoICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgcmlzZSAqIHVdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCB3ID0gdGhpY2sgKiAoMSAtIGogLyBuKSArIHRoaWNrICogMC4yODtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIE1hdGguaHlwb3QoZHgsIGR5KSArIHRoaWNrICogMC4yLCB3KTtcbiAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAwKTtcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlR2VvcyhzZWdzKTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmVoaWNsZSBoZWxwZXJzICovXG5cbi8qKiBQYWludCBhIHdob2xlIGdlb21ldHJ5IG9uZSB2ZXJ0ZXggY29sb3VyLiBFdmVyeSB2ZWhpY2xlIG1hdGVyaWFsIGhlcmUgaXMgV0hJVEUgd2l0aFxuICogIHZlcnRleENvbG9ycyBvbiwgc28gYSBjb2xvdXIgZGlmZmVyZW5jZSBjb3N0cyBhbiBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSBtYXRlcmlhbDogdGhlIGJvZHknc1xuICogIHR3by10b25lLCB0aGUgdHlyZSBhZ2FpbnN0IGl0cyByaW0sIGFuIGFtYmVyIGluZGljYXRvciBvbiBhIGJsYWNrIGJ1bXBlciBhbGwgcmlkZSBvbmUgc2hhZGVyLlxuICogIFZlcnRleCBjb2xvdXJzIG11bHRpcGx5IGluIExJTkVBUiBzcGFjZSwgc28gdGhlIGhleCBpcyBjb252ZXJ0ZWQgdGhyb3VnaCBUSFJFRS5Db2xvciwgd2hpY2hcbiAqICBkb2VzIHRoZSBzUkdCLXRvLWxpbmVhciBzdGVwLiAqL1xuZnVuY3Rpb24gdGludEdlbyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBoZXg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcihoZXgpO1xuICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBCb3gtcHJvamVjdCB3b3JsZC1tZXRyZSBVVnMgc28gYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSAobXVkLCBydXN0LCBjb3JydWdhdGlvbikgcmVwZWF0c1xuICogIGF0IGEgcmVhbCBzaXplIG9uIGV2ZXJ5IGZhY2UuIGBzY2FsZWAgaXMgbWV0cmVzIHBlciB0aWxlLiBUaGUgZG9taW5hbnQgbm9ybWFsIGF4aXMgcGlja3MgdGhlXG4gKiAgcGFpciBvZiB3b3JsZCBheGVzIHVzZWQsIHNvIGEgcm9vZiByZWFkcyAoeCwgeikgYW5kIGEgc2lkZSByZWFkcyAoeiwgeSkuICovXG5mdW5jdGlvbiB3b3JsZFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXkgPSBNYXRoLmFicyhucm0uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGxldCB1OiBudW1iZXIsIHY6IG51bWJlcjtcbiAgICBpZiAoYXggPj0gYXkgJiYgYXggPj0gYXopIHsgdSA9IHAuZ2V0WihpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIGVsc2UgaWYgKGF5ID49IGF6KSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFooaSk7IH1cbiAgICBlbHNlIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqXG4gKiBTSURFLVBST0ZJTEUgRVhUUlVTSU9OOiBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgKHRoZSB2ZWhpY2xlJ3Mgc2lkZSBzaWxob3VldHRlLCB3aGVlbFxuICogYXJjaGVzIGluY2x1ZGVkIGFzIG5vdGNoZXMpIHN3ZXB0IGFjcm9zcyB0aGUgZnVsbCB3aWR0aCwgdGhlbiBzaGFwZWQgcGVyIHZlcnRleDpcbiAqXG4gKiAgLSBgdHVtYmxlYCAgbmFycm93cyB0aGUgc2VjdGlvbiBhYm92ZSB0aGUgYmVsdCBsaW5lIC0tIHggaXMgc2NhbGVkIGJ5ICgxIC0gayAqIHQpIHdoZXJlIHQgcnVuc1xuICogICAgICAgICAgICAgIDAgYXQgYGJlbHRgIHRvIDEgYXQgYHJvb2ZgLiBUaGF0IGlzIHRoZSB0dW1ibGVob21lIG9mIGEgcmVhbCBjYXIgYm9keSBhbmQgaXMgd2hhdFxuICogICAgICAgICAgICAgIHN0b3BzIHRoZSBnbGFzc2hvdXNlIHJlYWRpbmcgYXMgYSBib3ggb24gYSBib3guXG4gKiAgLSBgcGxhbmAgICAgcm91bmRzIHRoZSBwbGFuIGF0IHRoZSBub3NlIGFuZCB0YWlsOiBhbiBvcHRpb25hbCBsaXN0IG9mIFt6LCB4U2NhbGVdIHN0YXRpb25zXG4gKiAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkIGFsb25nIHosIHNvIGEgYm9ubmV0IGNhbiB0YXBlciB0byAwLjkgb2YgdGhlIHdpZHRoIGF0IHRoZSBidW1wZXIgbGluZS5cbiAqXG4gKiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGluIGl0cyBvd24gKHUsIHYsIGRlcHRoKSBmcmFtZTsgcm90YXRlWSgtUEkvMikgbWFwcyBkZXB0aCB0byAteCBhbmQgdSB0b1xuICogd29ybGQgeiwgYW5kIHRoZSB0cmFuc2xhdGUgcmUtY2VudHJlcyB0aGUgc2xhYiBvbiB4ID0gMC4gQW55IHNoYXBpbmcgaXMgYXBwbGllZCBBRlRFUiB0aGF0LCBhbmRcbiAqIG5vcm1hbHMgYXJlIHJlY29tcHV0ZWQgbGFzdCBzbyB0aGUgc2hhZGVkIGZhY2VzIGZvbGxvdyB0aGUgc2hhcGVkIHN1cmZhY2UuXG4gKi9cbmZ1bmN0aW9uIHNpZGVFeHRydWRlKHByb2ZpbGU6IG51bWJlcltdW10sIHdpZHRoOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBvcHRzOiB7IHR1bWJsZT86IHsgYmVsdDogbnVtYmVyLCByb29mOiBudW1iZXIsIGs6IG51bWJlciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFuPzogbnVtYmVyW11bXSwgY3VydmVTZWdtZW50cz86IG51bWJlciB9ID0ge30pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwcm9maWxlWzBdWzBdLCBwcm9maWxlWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9maWxlLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHJvZmlsZVtpXVswXSwgcHJvZmlsZVtpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogd2lkdGgsIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZVNlZ21lbnRzOiBvcHRzLmN1cnZlU2VnbWVudHMgPz8gNiB9KTtcbiAgZy5yb3RhdGVZKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKHdpZHRoIC8gMiwgMCwgMCk7XG4gIHNoYXBlV2lkdGgoZywgb3B0cyk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogVGhlIHBlci12ZXJ0ZXggeCBzaGFwaW5nIHNoYXJlZCBieSB0aGUgYm9keSBhbmQgaXRzIGdsYXNzIGJhbmQsIHNvIGEgcGFuZSBvZmZzZXQgNSBtbSBwcm91ZCBvZlxuICogIHRoZSBib2R5IHN0YXlzIDUgbW0gcHJvdWQgYWZ0ZXIgYm90aCBhcmUgbmFycm93ZWQgYnkgdGhlIHNhbWUgZnVuY3Rpb24uICovXG5mdW5jdGlvbiBzaGFwZVdpZHRoKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LFxuICAgICAgICAgICAgICAgICAgICBvcHRzOiB7IHR1bWJsZT86IHsgYmVsdDogbnVtYmVyLCByb29mOiBudW1iZXIsIGs6IG51bWJlciB9LCBwbGFuPzogbnVtYmVyW11bXSB9KTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBsZXQgeCA9IHAuZ2V0WChpKTsgY29uc3QgeSA9IHAuZ2V0WShpKSwgeiA9IHAuZ2V0WihpKTtcbiAgICBpZiAob3B0cy50dW1ibGUpIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAoeSAtIG9wdHMudHVtYmxlLmJlbHQpIC8gKG9wdHMudHVtYmxlLnJvb2YgLSBvcHRzLnR1bWJsZS5iZWx0KSkpO1xuICAgICAgeCAqPSAxIC0gb3B0cy50dW1ibGUuayAqIHQ7XG4gICAgfVxuICAgIGlmIChvcHRzLnBsYW4gJiYgb3B0cy5wbGFuLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHN0ID0gb3B0cy5wbGFuO1xuICAgICAgbGV0IHMgPSBzdFswXVsxXTtcbiAgICAgIGlmICh6IDw9IHN0WzBdWzBdKSBzID0gc3RbMF1bMV07XG4gICAgICBlbHNlIGlmICh6ID49IHN0W3N0Lmxlbmd0aCAtIDFdWzBdKSBzID0gc3Rbc3QubGVuZ3RoIC0gMV1bMV07XG4gICAgICBlbHNlIGZvciAobGV0IGsgPSAwOyBrIDwgc3QubGVuZ3RoIC0gMTsgaysrKSB7XG4gICAgICAgIGlmICh6ID49IHN0W2tdWzBdICYmIHogPD0gc3RbayArIDFdWzBdKSB7XG4gICAgICAgICAgY29uc3QgdSA9ICh6IC0gc3Rba11bMF0pIC8gKHN0W2sgKyAxXVswXSAtIHN0W2tdWzBdKTtcbiAgICAgICAgICBzID0gc3Rba11bMV0gKyAoc3RbayArIDFdWzFdIC0gc3Rba11bMV0pICogdTsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHggKj0gcztcbiAgICB9XG4gICAgcC5zZXRYKGksIHgpO1xuICB9XG4gIHAubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG59XG5cbi8qKiBBIHNlbWljaXJjdWxhciB3aGVlbC1hcmNoIG5vdGNoIGFzIHByb2ZpbGUgcG9pbnRzLCB0byBiZSBzcGxpY2VkIGludG8gYSBzaWRlIHByb2ZpbGUgdGhhdCBydW5zXG4gKiAgYWxvbmcgdGhlIHNpbGwgZnJvbSAreiB0byAteiAoaS5lLiB6IERFQ1JFQVNJTkcpLiBgbmAgc2VnbWVudHM7IHRoZSBhcmMgaXMgdGhlIFRPUCBoYWxmLiAqL1xuZnVuY3Rpb24gYXJjaE5vdGNoKHpjOiBudW1iZXIsIHlTaWxsOiBudW1iZXIsIHI6IG51bWJlciwgbiA9IDcpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAvIG47ICAgICAgICAgICAgICAgLy8gMCAuLiBQSSwgZnJvbSAreiByb3VuZCB0aGUgdG9wIHRvIC16XG4gICAgcHRzLnB1c2goW3pjICsgTWF0aC5jb3MoYSkgKiByLCB5U2lsbCArIE1hdGguc2luKGEpICogcl0pO1xuICB9XG4gIHJldHVybiBwdHM7XG59XG5cbi8qKlxuICogQSBXSEVFTDogb25lIGxhdGhlIGFib3V0IHRoZSBheGxlLiBUaGUgcHJvZmlsZSBydW5zIGZyb20gdGhlIGh1YiBmYWNlIG9uIG9uZSBzaWRlIG92ZXIgdGhlIHJpbVxuICogbGlwLCB0aGUgdHlyZSBzaWRld2FsbCwgdGhlIHRyZWFkIGFuZCBiYWNrIGRvd24gdGhlIGZhciBzaWRlLCBzbyB0aGUgd2hlZWwgaXMgYSBjbG9zZWQgc29saWQgd2l0aFxuICogbm8gb3BlbiBlbmQgZm9yIHRoZSB0dXJudGFibGUgZ2F0ZSB0byByZWFkIHRocm91Z2guIFJldm9sdmVkIGFib3V0IFkgYW5kIHRoZW4gbGFpZCBvbiBYLCBzbyB0aGVcbiAqIGF4bGUgaXMgdGhlIHggYXhpcyBhbmQgdGhlIHdoZWVsIHJvbGxzIGFib3V0IGl0IC0tIHdoaWNoIGlzIHRoZSBheGlzIGl0cyBwaXZvdCBkZWNsYXJlcy5cbiAqXG4gKiBUd28gdmVydGV4IGNvbG91cnM6IGByaW1IZXhgIG9uIHRoZSBodWIgYW5kIHJpbSBwb2ludHMsIGB0eXJlSGV4YCBvbiB0aGUgc2lkZXdhbGwgYW5kIHRyZWFkLiBUaGVcbiAqIGxhdGhlIG9yZGVycyB2ZXJ0aWNlcyBzZWdtZW50LW1ham9yIChpbmRleCA9IHNlZyAqIHBvaW50Q291bnQgKyBwb2ludCksIHdoaWNoIGlzIHdoYXQgbGV0cyBhXG4gKiBwZXItcHJvZmlsZS1wb2ludCBjb2xvdXIgYmUgd3JpdHRlbiB3aXRob3V0IGEgc2Vjb25kIGdlb21ldHJ5LlxuICovXG5mdW5jdGlvbiB3aGVlbEdlbyhyVHlyZTogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgdHlyZUhleDogbnVtYmVyLCByaW1IZXg6IG51bWJlciwgZGlzaCA9IDAuNTUpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGh3ID0gaGFsZlc7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtcbiAgICBbMCwgLWh3ICogZGlzaF0sIFtyUmltICogMC4zMCwgLWh3ICogZGlzaF0sIFtyUmltICogMC42MiwgLWh3ICogMC44MF0sIFtyUmltLCAtaHcgKiAwLjg2XSwgW3JSaW0sIC1odyAqIDAuOThdLFxuICAgIFtyVHlyZSAqIDAuOTMsIC1od10sIFtyVHlyZSwgLWh3ICogMC43Ml0sIFtyVHlyZSwgaHcgKiAwLjcyXSwgW3JUeXJlICogMC45MywgaHddLFxuICAgIFtyUmltLCBodyAqIDAuOThdLCBbclJpbSwgaHcgKiAwLjg2XSwgW3JSaW0gKiAwLjYyLCBodyAqIDAuODBdLCBbclJpbSAqIDAuMzAsIGh3ICogZGlzaF0sIFswLCBodyAqIGRpc2hdLFxuICBdO1xuICBjb25zdCByaW1Qb2ludCA9IChqOiBudW1iZXIpID0+IGogPD0gNCB8fCBqID49IDk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGNvbnN0IGN0ID0gbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpLCBjciA9IG5ldyBUSFJFRS5Db2xvcihyaW1IZXgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGMgPSByaW1Qb2ludChpICUgcHRzLmxlbmd0aCkgPyBjciA6IGN0O1xuICAgIGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICBnLnJvdGF0ZVooTWF0aC5QSSAvIDIpOyAgICAvLyBsYXRoZSBheGlzIFkgLT4gYXhsZSBvbiBYXG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBXaXJlLXNwb2tlZCB3aGVlbCBkcmVzc2luZzogYG5gIHRoaW4gYm94ZXMgcmFkaWF0aW5nIGZyb20gdGhlIGh1YiwgbGFjZWQgYWx0ZXJuYXRlbHkgdG8gZWFjaFxuICogIHNpZGUgb2YgdGhlIHJpbSBzbyB0aGV5IGNyb3NzIHRoZSB3YXkgcmVhbCBzcG9rZXMgZG8uIE1lcmdlZCBpbnRvIHRoZSB3aGVlbCBnZW9tZXRyeSBzbyB0aGVcbiAqICB3aGVlbCBzdGF5cyBPTkUgaW5zdGFuY2VkIGdlb21ldHJ5LiAqL1xuZnVuY3Rpb24gc3Bva2VzKHJIdWI6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBuOiBudW1iZXIsIGhleDogbnVtYmVyLCB0ID0gMC4wMDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgKiAyIC8gbjtcbiAgICBjb25zdCBzaWRlID0gKGkgJSAyID09PSAwID8gMSA6IC0xKSAqIGhhbGZXICogMC4zNTtcbiAgICBjb25zdCBsZW4gPSByUmltIC0gckh1YjtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHQsIGxlbiwgdCk7XG4gICAgZy50cmFuc2xhdGUoMCwgckh1YiArIGxlbiAvIDIsIDApO1xuICAgIGcucm90YXRlWChNYXRoLmF0YW4yKHNpZGUsIGxlbikgKiAwLjYpO1xuICAgIGcucm90YXRlWCgwKTsgZy50cmFuc2xhdGUoMCwgMCwgc2lkZSAqIDAuNSk7XG4gICAgZy5yb3RhdGVYKGEpOyAgICAgICAgICAgIC8vIHJhZGlhdGUgYXJvdW5kIHRoZSBheGxlICh4KVxuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gdGludEdlbyhtZXJnZUdlb3Moc2VncyksIGhleCk7XG59XG5cbi8qKiBBIHBvbHlsaW5lIFRVQkU6IG9uZSBjeWxpbmRlciBwZXIgc2VnbWVudCwgZWFjaCByb3RhdGVkIG9udG8gaXRzIGNob3JkLCB3aXRoIGEgc21hbGwgc3BoZXJlLWxlc3NcbiAqICBvdmVybGFwIHNvIHRoZSBqb2ludHMgY2xvc2UuIEhhbmRsZWJhcnMsIGNhbm9weSByYWlscywgcm9sbCBjYWdlcyBhbmQgZnJhbWUgdHViZXMuICovXG5mdW5jdGlvbiB0dWJlKHB0czogbnVtYmVyW11bXSwgcjogbnVtYmVyLCBzZWcgPSA4LCBoZXg/OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaV1bMF0sIHB0c1tpXVsxXSwgcHRzW2ldWzJdKTtcbiAgICBjb25zdCBiID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2kgKyAxXVswXSwgcHRzW2kgKyAxXVsxXSwgcHRzW2kgKyAxXVsyXSk7XG4gICAgY29uc3QgZCA9IGIuY2xvbmUoKS5zdWIoYSk7IGNvbnN0IGxlbiA9IGQubGVuZ3RoKCk7XG4gICAgaWYgKGxlbiA8IDFlLTYpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCBsZW4gKyByICogMS4yLCBzZWcsIDEsIGZhbHNlKTtcbiAgICBjb25zdCBxID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGQubm9ybWFsaXplKCkpO1xuICAgIGcuYXBwbHlRdWF0ZXJuaW9uKHEpO1xuICAgIGNvbnN0IG0gPSBhLmNsb25lKCkuYWRkKGIpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG4gICAgZy50cmFuc2xhdGUobS54LCBtLnksIG0ueik7XG4gICAgcGFydHMucHVzaChnKTtcbiAgfVxuICBjb25zdCBvdXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBvdXQgOiB0aW50R2VvKG91dCwgaGV4KTtcbn1cblxuLyoqIEEgcm90YXRlZCBib3g6IFtjeCwgY3ksIGN6LCB3LCBoLCBkLCByeCwgcnksIHJ6XSB3aXRoIHRoZSByb3RhdGlvbnMgYXBwbGllZCBpbiB4LCB5LCB6IG9yZGVyXG4gKiAgYWJvdXQgdGhlIGJveCdzIG93biBjZW50cmUuIEEgYm9ubmV0IGxpcCwgYSByYWtlZCBtaXJyb3Igc3RlbSwgYSBjYW5vcHkgc3RheS4gKi9cbmZ1bmN0aW9uIHJib3goYjogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYlszXSwgYls0XSwgYls1XSk7XG4gIGlmIChiWzZdKSBnLnJvdGF0ZVgoYls2XSk7IGlmIChiWzddKSBnLnJvdGF0ZVkoYls3XSk7IGlmIChiWzhdKSBnLnJvdGF0ZVooYls4XSk7XG4gIGcudHJhbnNsYXRlKGJbMF0sIGJbMV0sIGJbMl0pO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgYmF0Y2ggb2YgYm94ZXMsIGVhY2ggdGludGVkLCBtZXJnZWQ6IFtbaGV4LCBjeCwgY3ksIGN6LCB3LCBoLCBkLCByeD8sIHJ5Pywgcno/XSwgLi4uXS4gVGhlXG4gKiAgdHJpbSBjb21wb25lbnQgb2YgZXZlcnkgdmVoaWNsZSBpcyBvbmUgb2YgdGhlc2UgLS0gYnVtcGVycywgZ3JpbGxlLCBsYW1wcywgbWlycm9ycywgaGFuZGxlcyxcbiAqICBzdGVwcywgYXJjaCBmbGFyZXMgLS0gc28gZm9ydHkgcGFydHMgcmlkZSBvbmUgc3VibWlzc2lvbi4gKi9cbmZ1bmN0aW9uIHRpbnRlZEJveGVzKGxpc3Q6IG51bWJlcltdW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpKTtcbn1cblxuLyoqIE1pcnJvciBhIGJveCBsaXN0IGFjcm9zcyB4ID0gMCAobGVmdC9yaWdodCBwYWlycykuIFJvdGF0aW9ucyBhYm91dCB5IGFuZCB6IGZsaXAgc2lnbi4gKi9cbmZ1bmN0aW9uIG1pcnJvclgobGlzdDogbnVtYmVyW11bXSk6IG51bWJlcltdW10ge1xuICByZXR1cm4gbGlzdC5mbGF0TWFwKChiKSA9PiBbYiwgW2JbMF0sIC1iWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdLCBiWzZdLCBiWzddID8/IDAsIC0oYls4XSA/PyAwKSwgLShiWzldID8/IDApXV0pO1xufVxuXG4vKiogQSBzZWFtbGVzcyBDYW52YXMgMkQgdGlsZTogYGRyYXcoY3R4LCBzaXplKWAgcGFpbnRzIGl0LCBhbmQgdGhlIHJlc3VsdCBpcyBhIHJlcGVhdGluZyB0ZXh0dXJlXG4gKiAgaW4gc1JHQi4gVXNlZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24sIHNvIHRoZSB0ZXh0dXJlbGVzcyBkZWNsYXJhdGlvbiBzdGFuZHMgYW5kIG5vXG4gKiAgcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZC4gUmV0dXJucyBudWxsIHdoZXJlIHRoZXJlIGlzIG5vIERPTSAodGhlIGhlYWRsZXNzIGhhcm5lc3NcbiAqICBoYXMgb25lOyBhIG5vZGUtc2lkZSBwcm9iZSBkb2VzIG5vdCksIGFuZCBldmVyeSBjYWxsZXIgdG9sZXJhdGVzIG51bGwuICovXG5mdW5jdGlvbiBjYW52YXNUaWxlKHNpemU6IG51bWJlciwgZHJhdzogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzOiBudW1iZXIpID0+IHZvaWQpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgY3Yud2lkdGggPSBzaXplOyBjdi5oZWlnaHQgPSBzaXplO1xuICAvLyB3aWxsUmVhZEZyZXF1ZW50bHkga2VlcHMgdGhlIHRpbGUgb24gdGhlIENQVSByYXN0ZXIgcGF0aDogYSBHUFUtYmFja2VkIGNhbnZhcyBjb3N0cyBzZWNvbmRzIHBlclxuICAvLyB0aG91c2FuZCBwYXRoIGZpbGxzIHdoZXJlIHRoZSBzb2Z0d2FyZSBwYXRoIHRha2VzIHRlbnMgb2YgbWlsbGlzZWNvbmRzLlxuICBjb25zdCBjdHggPSBjdi5nZXRDb250ZXh0KCcyZCcsIHsgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlIH0pIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7IGlmICghY3R4KSByZXR1cm4gbnVsbDtcbiAgZHJhdyhjdHgsIHNpemUpO1xuICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjdik7XG4gIHRleC53cmFwUyA9IHRleC53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xuICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICByZXR1cm4gdGV4O1xufVxuXG4vKiogRGV0ZXJtaW5pc3RpYyBwc2V1ZG8tcmFuZG9tIGZvciBjYW52YXMgZHJlc3NpbmcgLS0gYXNzaWduZWQgYnkgaW5kZXgsIG5ldmVyIE1hdGgucmFuZG9tLCBzbyB0aGVcbiAqICBtb2RlbCBpcyBieXRlLWlkZW50aWNhbCBvbiBldmVyeSBidWlsZC4gKi9cbmZ1bmN0aW9uIGxjZyhzZWVkOiBudW1iZXIpOiAoKSA9PiBudW1iZXIge1xuICBsZXQgcyA9IHNlZWQgPj4+IDA7XG4gIHJldHVybiAoKSA9PiB7IHMgPSAocyAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMDsgcmV0dXJuIHMgLyA0Mjk0OTY3Mjk2OyB9O1xufVxuXG4vKipcbiAqIE1VRCAvIFJPQUQtR1JJTUUgdGlsZSwgUkUtQkFTRUQuIFRoYWkgcm9hZCBtdWQgaXMgdGFuIGFuZCBCUklHSFRFUiB0aGFuIG1vc3QgcGFpbnQsIGFuZCBhXG4gKiBtdWx0aXBsaWVyIGNhbm5vdCBicmlnaHRlbjogc28gdGhlIHBhaW50IG1hdGVyaWFsIGNhcnJpZXMgdGhlIE1VRCBFTlZFTE9QRSBjb2xvdXIgKG1lYXN1cmVkIG9uXG4gKiB0aGUgbXVkZHkgc2lsbCksIHRoaXMgdGlsZSBjYXJyaWVzIHRoZSBjbGVhbiBwYWludCBhcyBhIFJBVElPIG9mIHRoYXQgZW52ZWxvcGUgb3ZlciBtb3N0IG9mIGl0c1xuICogYXJlYSAoYGJhc2VgKSwgYW5kIHRoZSBtdWQgaXMgcGFpbnRlZCBhcyB3aGl0ZSAtLSBpLmUuIHRoZSBlbnZlbG9wZSBpdHNlbGYgLS0gaW4gYSB3YXNoIHJpc2luZ1xuICogZnJvbSB0aGUgYm90dG9tIHRvIGBjb3ZlcmFnZWAgb2YgdGhlIHRpbGUgaGVpZ2h0IHBsdXMgc3BsYXR0ZXIgYWJvdmUgaXQuIEJvdW5kIHdpdGggaGVpZ2h0IFVWc1xuICogc28gdiA9IDAgaXMgdGhlIGdyb3VuZCBhbmQgdGhlIHdhc2ggc2l0cyBvbiB0aGUgc2lsbHMgYW5kIGFyY2hlcy5cbiAqL1xuZnVuY3Rpb24gbXVkVGlsZShzaXplOiBudW1iZXIsIGJhc2U6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMyk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCB0b0hleCA9ICh2OiBudW1iZXJbXSkgPT4gJyMnICsgdi5tYXAoKGMpID0+IE1hdGgucm91bmQoTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYykpICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSkuam9pbignJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRvSGV4KGJhc2UpOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTUsMjU1LDAuODgpJyk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC40NSwgJ3JnYmEoMjU1LDI1NSwyNTUsMC40NSknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS4zNTtcbiAgICAgIGNvbnN0IHIgPSAzICsgcm5kKCkgKiBzICogMC4wNTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjU1LDI1MCwyNDAsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTAsMjQwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGEgbGl0dGxlIGdyYWluIHNvIHRoZSBjbGVhbiBwYWludCBpcyBub3QgYSBmbGF0IGZpbGxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyMDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY29uc3QgdiA9IHJuZCgpIDwgMC41ID8gMCA6IDI1NTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjAzNSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMS41LCAxLjUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBEVVNUIHRpbGUgZm9yIHBhaW50IHRoYXQgaXMgQlJJR0hURVIgdGhhbiBpdHMgZGlydCAoYSB3aGl0ZSB2YW4pOiBhIHBsYWluIG11bHRpcGxpZXIsIHdoaXRlXG4gKiAgYmFzZSBhbmQgYSBncmV5LWJyb3duIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLCBwbHVzIHNvZnQgYmxvYnMuICovXG5mdW5jdGlvbiBkdXN0VGlsZShzaXplOiBudW1iZXIsIGR1c3Q6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYyA9IGR1c3QubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIHYpKSk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuOSlgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuNClgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS40LCByID0gMyArIHJuZCgpICogcyAqIDAuMDUsIGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI1O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIENPUlJVR0FURUQgU0hFRVQgdGlsZTogdmVydGljYWwgcmlkZ2VzIGFzIGEgc2luZS1zaGFkZWQgc3RyaXBlIGZpZWxkLCB1c2VkIGFzIG1hcCBBTkQgYnVtcE1hcCBvblxuICogIGEgc29uZ3RoYWV3IHJvb2Ygc28gdGhlIHJpZGdlcyBjYXRjaCBsaWdodC4gYHBpdGNoYCByaWRnZXMgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBjb3JydWdhdGlvblRpbGUoc2l6ZTogbnVtYmVyLCBwaXRjaDogbnVtYmVyLCBsb3c6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICBjb25zdCB0ID0gKE1hdGguY29zKHggLyBzICogTWF0aC5QSSAqIDIgKiBwaXRjaCkgKyAxKSAvIDI7ICAgLy8gMSBhdCBjcmVzdCwgMCBpbiB0cm91Z2hcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIChsb3cgKyAoMSAtIGxvdykgKiB0KSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDQgKyBybmQoKSAqIHMgKiAwLjA4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4xODtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxMjAsOTAsNjAsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDEyMCw5MCw2MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogUExBTksgdGlsZTogYm9hcmRzIHJ1bm5pbmcgYWxvbmcgdSB3aXRoIGRhcmsgam9pbnRzIGFuZCBncmFpbiBzdHJlYWtzLCBhIG11bHRpcGxpZXIgb24gYVxuICogIG1lYXN1cmVkIHRpbWJlciBhbGJlZG8uIGBib2FyZHNgIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gcGxhbmtUaWxlKHNpemU6IG51bWJlciwgYm9hcmRzOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYmggPSBzIC8gYm9hcmRzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgYm9hcmRzOyBiKyspIHtcbiAgICAgIGNvbnN0IHRvbmUgPSAwLjgyICsgcm5kKCkgKiAwLjE4O1xuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogdG9uZSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBiaCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsMzAsMjAsMC41NSknOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBNYXRoLm1heCgxLCBzICogMC4wMDYpKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMTQ7IGsrKykge1xuICAgICAgICBjb25zdCB5ID0gYiAqIGJoICsgcm5kKCkgKiBiaCwgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNiksIHggPSBybmQoKSAqIHM7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKDYwLDQ1LDMwLCR7MC4wNSArIHJuZCgpICogMC4xMn0pYDsgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4IC0gcywgeSk7IGN0eC5saW5lVG8oeCAtIHMgKyBsZW4sIHkpOyBjdHgubW92ZVRvKHgsIHkpOyBjdHgubGluZVRvKHggKyBsZW4sIHkpOyBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFJVU1QgdGlsZTogYSBtdWx0aXBsaWVyIG9mIGJsb3RjaGVkIG9yYW5nZS1icm93biBvdmVyIGEgYmFzZSwgZGFyayBjb3JlcyBsaWZ0ZWQgc28gbm90aGluZyBsYW5kc1xuICogIG9uIHRoZSBsdW1hLTU4IGhvbGUgZ2F0ZS4gKi9cbmZ1bmN0aW9uIHJ1c3RUaWxlKHNpemU6IG51bWJlciwgcmF0aW86IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGRlbnNpdHkgPSA5MCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZW5zaXR5OyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wOTtcbiAgICAgIGNvbnN0IGEgPSAwLjE1ICsgcm5kKCkgKiAwLjQ1O1xuICAgICAgY29uc3QgYyA9IHJhdGlvLm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiB2KSk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIEhlaWdodC1rZXllZCBVVnM6IHYgaXMgd29ybGQgSEVJR0hUIG92ZXIgYHNjYWxlYCBtZXRyZXMsIHUgcnVucyBhbG9uZyB0aGUgZG9taW5hbnQgaG9yaXpvbnRhbFxuICogIGF4aXMuIEEgbXVkIHRpbGUgYm91bmQgdGhpcyB3YXkgZGFya2VucyB0aGUgc2lsbHMgYW5kIHN0YXlzIGNsZWFuIG9uIHRoZSByb29mIC0tIGEgcGxhaW4gYm94XG4gKiAgcHJvamVjdGlvbiB3b3VsZCByZXBlYXQgdGhlIHRpbGUncyBkaXJ0eSBiYW5kIGFjcm9zcyB0aGUgcm9vZiBhcyBzdHJpcGVzLiAqL1xuLyoqXG4gKiBTSE9SVCBGVVI6IGEgc2VhbWxlc3MgdGlsZSBvZiBkZW5zZSwgc2hvcnQsIGRpcmVjdGlvbmFsIGhhaXIgc3Ryb2tlcyBvdmVyIGEgY2xvdWR5IHRvbmUgZHJpZnQsIGFzIGFcbiAqIG11bHRpcGx5IG1hcCAoYW5kIGJ1bXApIG9uIGEgd2hpdGUgdmVydGV4LWNvbG91cmVkIGNvYXQuIFRoZSBzdHJva2VzIHJ1biBhbG9uZyB2IHdpdGggYSBqaXR0ZXJlZFxuICogbGVhbiBhbmQgYSBuYXJyb3cgdG9uZSBzcHJlYWQgLS0gYSB3aWRlIHNwcmVhZCByZWFkcyBhcyBzY2FsZXMsIGEgcGVyZmVjdCBsYXkgcmVhZHMgYXMgY29tYmVkXG4gKiBwbGFzdGljLiBgcGF0Y2hlc2AgYWRkcyBhIGZldyBzb2Z0IHBpbmstZ3JleSBiYXJlIHBhdGNoZXMsIHRoZSBtYW5nZSBtYXJrcyBvZiBhIHN0cmVldCBkb2cuXG4gKi9cbmZ1bmN0aW9uIGZ1clRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgdG9uZSA9IG8udG9uZSA/PyBbMC43MiwgMC42NiwgMC41OF0sIG0gPSBzICogMC4wNjtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gY2xvdWR5IGRyaWZ0IHVuZGVybmVhdGggc28gdGhlIGNvYXQgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gMjYpOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDggKyBybmQoKSAqIDAuMTgpLCBhID0gMC4wNCArIHJuZCgpICogMC4xMDtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHRvbmUpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IodG9uZSl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBiYXJlIHBhdGNoZXM6IHNvZnQsIHNwYXJzZSwgd2FybSBncmV5LXBpbmtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnBhdGNoZXMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNCArIHJuZCgpICogMC4wNSksIHBjID0gby5wYXRjaFRvbmUgPz8gWzAuNzIsIDAuNTYsIDAuNTJdO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocGMpfSwwLjU1KWApOyBnMi5hZGRDb2xvclN0b3AoMC42LCBgcmdiYSgke3JnYihwYyl9LDAuMylgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHBjKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIgKiAxLjMsIHIsIHJuZCgpICogTWF0aC5QSSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGhhaXIgc3Ryb2tlczogZGFyayBhbmQgbGlnaHQsIHNob3J0LCBsZWFuaW5nIHdpdGhpbiArLTIyIGRlZ3JlZXMgb2YgdlxuICAgIGNvbnN0IHN0cm9rZXMgPSBvLnN0cm9rZXMgPz8gNTAwMCwgbGVuID0gcyAqIChvLmxlbmd0aCA/PyAwLjAyMik7XG4gICAgY29uc3QgZHJhd1N0cm9rZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgZHg6IG51bWJlciwgZHk6IG51bWJlciwgdzogbnVtYmVyKSA9PiB7XG4gICAgICBjdHgubGluZVdpZHRoID0gdzsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkpOyBjdHgubGluZVRvKHggKyBkeCwgeSArIGR5KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgaWYgKHggPCBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgcywgeSk7IGN0eC5saW5lVG8oeCArIHMgKyBkeCwgeSArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeCA+IHMgLSBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4IC0gcywgeSk7IGN0eC5saW5lVG8oeCAtIHMgKyBkeCwgeSArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeSA8IG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkgKyBzKTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgKyBzICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh5ID4gcyAtIG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkgLSBzKTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgLSBzICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICB9O1xuICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cm9rZXM7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgdGggPSAocm5kKCkgLSAwLjUpICogMC43OCwgbCA9IGxlbiAqICgwLjYgKyBybmQoKSAqIDAuOCk7XG4gICAgICBjb25zdCBsaWdodCA9IHJuZCgpIDwgMC40MjtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBsaWdodCA/ICdzY3JlZW4nIDogJ211bHRpcGx5JztcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGxpZ2h0ID8gYHJnYmEoMjU1LDI1MCwyNDAsJHswLjA1ICsgcm5kKCkgKiAwLjEwfSlgIDogYHJnYmEoJHtyZ2IodG9uZSl9LCR7MC4wNiArIHJuZCgpICogMC4xNH0pYDtcbiAgICAgIGRyYXdTdHJva2UoeCwgeSwgTWF0aC5zaW4odGgpICogbCwgTWF0aC5jb3ModGgpICogbCwgMC42ICsgcm5kKCkgKiAxLjIpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlaWdodFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgY29uc3QgdSA9IGF4ID49IGF6ID8gcC5nZXRaKGkpIDogcC5nZXRYKGkpO1xuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHAuZ2V0WShpKSAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogT2Zmc2V0IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyBvdXR3YXJkIGJ5IGBkYCBhbG9uZyB0aGUgYXZlcmFnZWQgZWRnZSBub3JtYWxzLiBVc2VkXG4gKiAgdG8gc3RhbmQgdGhlIGdsYXNzIGJhbmQgYSBmZXcgbWlsbGltZXRyZXMgcHJvdWQgb2YgdGhlIGJvZHkncyByYWtlZCB3aW5kc2NyZWVuIGFuZCByZWFyIGdsYXNzXG4gKiAgZmFjZXMsIHNvIHRoZSBwYW5lIGFuZCB0aGUgYm9keSBuZXZlciBzaGFyZSBhIHBsYW5lLiBXaW5kaW5nOiBjb3VudGVyLWNsb2Nrd2lzZSBpbiAoeiwgeSkuICovXG5mdW5jdGlvbiBvZmZzZXRQb2x5KHB0czogbnVtYmVyW11bXSwgZDogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IG4gPSBwdHMubGVuZ3RoLCBvdXQ6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gcHRzWyhpICsgbiAtIDEpICUgbl0sIGIgPSBwdHNbaV0sIGMgPSBwdHNbKGkgKyAxKSAlIG5dO1xuICAgIGNvbnN0IGUxID0gW2JbMF0gLSBhWzBdLCBiWzFdIC0gYVsxXV0sIGUyID0gW2NbMF0gLSBiWzBdLCBjWzFdIC0gYlsxXV07XG4gICAgY29uc3QgbDEgPSBNYXRoLmh5cG90KGUxWzBdLCBlMVsxXSkgfHwgMSwgbDIgPSBNYXRoLmh5cG90KGUyWzBdLCBlMlsxXSkgfHwgMTtcbiAgICAvLyBvdXR3YXJkIG5vcm1hbCBvZiBhIENDVyBlZGdlIChkeiwgZHkpIGlzIChkeSwgLWR6KVxuICAgIGNvbnN0IG4xID0gW2UxWzFdIC8gbDEsIC1lMVswXSAvIGwxXSwgbjIgPSBbZTJbMV0gLyBsMiwgLWUyWzBdIC8gbDJdO1xuICAgIGxldCBueCA9IG4xWzBdICsgbjJbMF0sIG55ID0gbjFbMV0gKyBuMlsxXTtcbiAgICBjb25zdCBubCA9IE1hdGguaHlwb3QobngsIG55KSB8fCAxOyBueCAvPSBubDsgbnkgLz0gbmw7XG4gICAgY29uc3QgY29zSGFsZiA9IE1hdGgubWF4KDAuMzUsIG54ICogbjFbMF0gKyBueSAqIG4xWzFdKTtcbiAgICBvdXQucHVzaChbYlswXSArIG54ICogZCAvIGNvc0hhbGYsIGJbMV0gKyBueSAqIGQgLyBjb3NIYWxmXSk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIEEgd2hlZWwtYXJjaCBGTEFSRTogYSBoYWxmLWFubnVsdXMgaW4gdGhlICh6LCB5KSBwbGFuZSwgZXh0cnVkZWQgYWNyb3NzIHgwLi54MSBvbiBib3RoIHNpZGVzXG4gKiAgYW5kIHRpbnRlZC4gU3RhbmRzIHByb3VkIG9mIHRoZSBib2R5IHNpZGUgYW5kIGhpZGVzIHRoZSBhcmNoJ3MgY3V0IGVkZ2UuICovXG5mdW5jdGlvbiBmbGFyZSh6YzogbnVtYmVyLCB5YzogbnVtYmVyLCBySW46IG51bWJlciwgck91dDogbnVtYmVyLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCBoZXg6IG51bWJlciwgbiA9IDkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gbjsgY29uc3QgeiA9IHpjICsgTWF0aC5jb3MoYSkgKiByT3V0LCB5ID0geWMgKyBNYXRoLnNpbihhKSAqIHJPdXQ7IGlmIChpID09PSAwKSBzaGFwZS5tb3ZlVG8oeiwgeSk7IGVsc2Ugc2hhcGUubGluZVRvKHosIHkpOyB9XG4gIGZvciAobGV0IGkgPSBuOyBpID49IDA7IGktLSkgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gbjsgc2hhcGUubGluZVRvKHpjICsgTWF0aC5jb3MoYSkgKiBySW4sIHljICsgTWF0aC5zaW4oYSkgKiBySW4pOyB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBjb25zdCBtayA9IChzeDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHgxIC0geDAsIGJldmVsRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgZy5yb3RhdGVZKC1NYXRoLlBJIC8gMik7IGcudHJhbnNsYXRlKHgxLCAwLCAwKTsgaWYgKHN4IDwgMCkgZy5zY2FsZSgtMSwgMSwgMSk7XG4gICAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gdGludEdlbyhnLCBoZXgpO1xuICB9O1xuICBjb25zdCBsID0gbWsoLTEpLCByID0gbWsoMSk7XG4gIC8vIGEgbmVnYXRpdmUgc2NhbGUgZmxpcHMgdGhlIHdpbmRpbmc7IHJlc3RvcmUgaXQgc28gdGhlIGZsYXJlIGlzIG5vdCBpbnNpZGUgb3V0XG4gIGNvbnN0IGlkeCA9IGwuZ2V0SW5kZXgoKTsgaWYgKGlkeCkgeyBjb25zdCBhID0gaWR4LmFycmF5IGFzIGFueTsgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSArPSAzKSB7IGNvbnN0IHQgPSBhW2kgKyAxXTsgYVtpICsgMV0gPSBhW2kgKyAyXTsgYVtpICsgMl0gPSB0OyB9IGlkeC5uZWVkc1VwZGF0ZSA9IHRydWU7IH1cbiAgZWxzZSB7IGNvbnN0IHAgPSBsLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTsgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpICs9IDMpIHsgY29uc3QgeDFfID0gcC5nZXRYKGkgKyAxKSwgeTFfID0gcC5nZXRZKGkgKyAxKSwgejFfID0gcC5nZXRaKGkgKyAxKTsgcC5zZXRYWVooaSArIDEsIHAuZ2V0WChpICsgMiksIHAuZ2V0WShpICsgMiksIHAuZ2V0WihpICsgMikpOyBwLnNldFhZWihpICsgMiwgeDFfLCB5MV8sIHoxXyk7IH0gfVxuICBsLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBtZXJnZUdlb3MoW2wsIHJdKTtcbn1cblxuLyoqIEJpbmQgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSB0byBhIG1hdGVyaWFsIGFzIG1hcCAoYW5kIGJ1bXApLCBsZWF2aW5nIHRoZSB0ZXh0dXJlbGVzc1xuICogIGRlY2xhcmF0aW9uIGludGFjdDogbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZCwgdGhlIG1lYXN1cmVkIGNvbG91ciBzdGF5cyB0aGVcbiAqICBtdWx0aXBsaWNhbmQsIGFuZCB0aGUgd2hvbGUgdGhpbmcgY29zdHMgb25lIGNhbnZhcy4gKi9cbmZ1bmN0aW9uIGJpbmRUaWxlKG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIHRleDogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwsIGJ1bXAgPSAwKTogdm9pZCB7XG4gIGlmICghdGV4KSByZXR1cm47XG4gIG1hdC5tYXAgPSB0ZXg7XG4gIGlmIChidW1wID4gMCkgeyBtYXQuYnVtcE1hcCA9IHRleDsgbWF0LmJ1bXBTY2FsZSA9IGJ1bXA7IH1cbiAgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbn1cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZmVuY2UgaGVscGVycyAqL1xuXG4vKiogUGFuZWwgVVZzOiB1IGFsb25nIHdvcmxkIFggb3ZlciBgc2NhbGVgIG1ldHJlcywgdiB3b3JsZCBIRUlHSFQgb3ZlciB0aGUgc2FtZSwgcmVnYXJkbGVzcyBvZiB0aGVcbiAqICBmYWNlIG5vcm1hbC4gT24gYSB0aGluIHNsYWIgdGhpcyBtZWFucyB0aGUgZnJvbnQgYW5kIGJhY2sgZmFjZXMgc2hhcmUgdGhlIHNhbWUgdGlsZSBwbGFjZW1lbnRcbiAqICBhbmQgdGhlIGVkZ2VzIHRha2UgYSBzbGl2ZXIgb2YgaXQ7IGEgZ3JpbWUgd2FzaCB0aGF0IGtleXMgb24gdiB0aGVuIGxhbmRzIGF0IHRoZSBzYW1lIGhlaWdodCBvblxuICogIGV2ZXJ5IGZhY2UsIHdoaWNoIGlzIHdoYXQgcmFpbiBhbmQgYWxnYWUgZG8uICovXG5mdW5jdGlvbiBwYW5lbFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIsIHJvdCA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgLy8gYHJvdGAgc3dhcHMgdGhlIGF4ZXMgc28gYSB0aWxlIG9mIFZFUlRJQ0FMIHN0cmlwcyByZWFkcyBob3Jpem9udGFsIC0tIHRoZSB3b3ZlbiBiYW5kcyBvZiBhXG4gIC8vIGJhbWJvbyBwYW5lbCBhZ2FpbnN0IGl0cyB2ZXJ0aWNhbCBtdWxsaW9ucywgb25lIHRpbGUsIG9uZSBtYXRlcmlhbC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB1ID0gcm90ID8gcC5nZXRZKGkpIDogcC5nZXRYKGkpLCB2ID0gcm90ID8gcC5nZXRYKGkpIDogcC5nZXRZKGkpO1xuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEEgc3F1YXJlIHB5cmFtaWQgU1BJS0U6IGJhc2UgdyB4IHcgYXQgYGF0YCwgYXBleCBoIGFib3ZlLiBBIHBpY2tldCdzIHNwZWFyIHBvaW50LCBhIHBpZXIgY2FwLiAqL1xuZnVuY3Rpb24gc3Bpa2UoYXQ6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkodyAvIE1hdGguU1FSVDIsIGgsIDQsIDEsIGZhbHNlKTtcbiAgZy5yb3RhdGVZKE1hdGguUEkgLyA0KTtcbiAgZy50cmFuc2xhdGUoYXRbMF0sIGF0WzFdICsgaCAvIDIsIGF0WzJdKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBHUklNRSB0aWxlOiBhIG11bHRpcGxpZXIgb2Ygd2hpdGUgd2l0aCAoYSkgYSBkYXJrIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLFxuICogKGIpIHZlcnRpY2FsIHJhaW4gc3RyZWFrcyBmcm9tIHRoZSB0b3AsIChjKSBzb2Z0IGRhcmsgYmxvdGNoZXMsIChkKSBvcHRpb25hbCBncmVlbiBtb3NzL2FsZ2FlXG4gKiBibG9icyBjb25jZW50cmF0ZWQgaW4gdGhlIGJvdHRvbSBiYW5kLCBhbmQgKGUpIGZpbmUgZ3JhaW4uIEV2ZXJ5IGNvbG91ciBpcyBhIGZyYWN0aW9uIG9mIHRoZVxuICogbWF0ZXJpYWwncyBtZWFzdXJlZCBhbGJlZG8sIGFuZCB0aGUgZGFya2VzdCBjb3JlIGlzIGNsYW1wZWQgc28gbm90aGluZyBvbiBhIHdoaXRlIG9yIGNyZWFtXG4gKiBzdXJmYWNlIGRyb3BzIHRvd2FyZCB0aGUgaG9sZSBnYXRlJ3MgbHVtYSA1OC5cbiAqL1xuZnVuY3Rpb24gZ3JpbWVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IHdhc2ggPSBvLndhc2ggPz8gWzAuNjIsIDAuNjIsIDAuNThdLCB3YXNoQSA9IG8ud2FzaEFscGhhID8/IDAuNywgY292ID0gby5jb3ZlcmFnZSA/PyAwLjM7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIC8vIHJhaW4gc3RyZWFrcyBmcm9tIHRoZSB0b3BcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnN0cmVha3MgPz8gMjYpOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTIsIGxlbiA9IHMgKiAoMC4xNSArIHJuZCgpICogMC42KSwgYSA9IDAuMDUgKyBybmQoKSAqIDAuMTI7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBsZW4pO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGN0eC5maWxsUmVjdCh4LCAwLCB3LCBsZW4pOyBjdHguZmlsbFJlY3QoeCAtIHMsIDAsIHcsIGxlbik7XG4gICAgfVxuICAgIC8vIGdyb3VuZCB3YXNoXG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3YpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQX0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEEgKiAwLjQ1fSlgKTsgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBibG90Y2hlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uYmxvdGNoZXMgPz8gNDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuNikgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDYsIGEgPSAwLjA4ICsgcm5kKCkgKiAwLjM7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBtb3NzIC8gYWxnYWUgaW4gdGhlIGJvdHRvbSBiYW5kOiBjbHVzdGVyZWQgc3BlY2tzLCBicmlnaHRlci10aGFuLXdhc2ggZ3JlZW5cbiAgICBpZiAoby5tb3NzKSB7XG4gICAgICBjb25zdCBtID0gby5tb3NzLCBiYW5kID0gby5tb3NzQmFuZCA/PyAwLjIyO1xuICAgICAgLy8gYSBmYWludCBncmVlbiB3YXNoIG92ZXIgdGhlIHdob2xlIGJhbmQgZmlyc3QsIHNvIHRoZSBjYXJwZXRzIHNpdCBpbiBkYW1wIGdyb3VuZCByYXRoZXIgdGhhblxuICAgICAgLy8gYXMgaXNvbGF0ZWQgZG90cyBvbiBjbGVhbiBwYWludFxuICAgICAgY29uc3QgbWcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gYmFuZCAqIDEuMykpO1xuICAgICAgbWcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKG0pfSwke28ubW9zc1dhc2ggPz8gMC4zNX0pYCk7IG1nLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihtKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBtZzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5tb3NzQ2x1c3RlcnMgPz8gMTQpOyBrKyspIHtcbiAgICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAxLjYpICogcyAqIGJhbmQsIGNyID0gcyAqICgwLjAxNSArIHJuZCgpICogMC4wNCk7XG4gICAgICAgIC8vIHRoZSBjYXJwZXQ6IGEgc29mdCBibG9iLCB0aGVuIHNwZWNrcyBvdmVyIGl0IGZvciB0aGUgdHVmdGVkIGVkZ2VcbiAgICAgICAgY29uc3QgY2cgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIGNyKTtcbiAgICAgICAgY2cuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKG0pfSwwLjcpYCk7IGNnLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKCR7cmdiKG0pfSwwLjM1KWApOyBjZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IobSl9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjZztcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3ggKyBkeCwgY3ksIGNyLCBjciAqIDAuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyO1xuICAgICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkICogMC42LCByID0gMSArIHJuZCgpICogMztcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IobSl9LCR7MC4zNSArIHJuZCgpICogMC41fSlgO1xuICAgICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBncmFpblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTUwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB2ID0gMjAwICsgTWF0aC5yb3VuZChybmQoKSAqIDU1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjEyKWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIENIQUlOLUxJTksgdGlsZTogYSBkaWFtb25kIHdpcmUgbGF0dGljZSBkcmF3biBvcGFxdWUgb3ZlciBhIFRSQU5TUEFSRU5UIGdyb3VuZCwgYm91bmQgYXMgbWFwXG4gKiAgb24gYW4gYWxwaGEtdGVzdGVkIG1hdGVyaWFsIHNvIHRoZSBjZWxscyBhcmUgb3Blbi4gT25lIHRpbGUgaXMgb25lIGRpYW1vbmQgY2VsbDsgdGhlIHBhbmUnc1xuICogIFVWcyByZXBlYXQgaXQgYXQgdGhlIHJlYWwgbWVzaCBwaXRjaC4gYHdpcmVgIGlzIHRoZSB3aXJlIHdpZHRoIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGNlbGwuICovXG5mdW5jdGlvbiBjaGFpbmxpbmtUaWxlKHNpemU6IG51bWJlciwgd2lyZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHgubGluZVdpZHRoID0gTWF0aC5tYXgoMS41LCB3aXJlICogcyk7XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGNvbnN0IHYgPSAxNTAgKyBNYXRoLnJvdW5kKHJuZCgpICogMzApO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2IoJHt2fSwke3YgKyAyfSwke3YgKyA0fSlgO1xuICAgIC8vIHR3byBkaWFnb25hbHMgdGhyb3VnaCB0aGUgdGlsZSwgb2Zmc2V0IHNvIHRoZSB3cmFwIG1ha2VzIGEgY29udGludW91cyBkaWFtb25kIGxhdHRpY2VcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCAwKTsgY3R4LmxpbmVUbyhzLCBzKTtcbiAgICBjdHgubW92ZVRvKHMsIDApOyBjdHgubGluZVRvKDAsIHMpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyB0aGUga251Y2tsZSB3aGVyZSB3aXJlcyB0d2lzdCByb3VuZCBlYWNoIG90aGVyLCBhdCB0aGUgdHdvIGNyb3NzaW5ncyBvbiB0aGUgdGlsZSBlZGdlc1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7diAtIDIwfSwke3YgLSAxOH0sJHt2IC0gMTZ9KWA7XG4gICAgZm9yIChjb25zdCBbeCwgeV0gb2YgW1swLCAwXSwgW3MsIDBdLCBbMCwgc10sIFtzLCBzXSwgW3MgLyAyLCBzIC8gMl1dKSB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSwgY3R4LmxpbmVXaWR0aCAqIDAuOSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBCQU1CT08gU1RSSVAgdGlsZTogdmVydGljYWwgc3BsaXQtYmFtYm9vIHN0cmlwcyB3aXRoIHBhbGUgY3VsbSBmYWNlcywgZGFyayBqb2ludHMgYmV0d2VlbiB0aGVtXG4gKiAgYW5kIGEgbm9kZSBsaW5lIG9yIHR3byAtLSBhIG11bHRpcGxpZXIgb24gdGhlIG1lYXN1cmVkIHNpbHZlci1ncmV5LiAqL1xuZnVuY3Rpb24gYmFtYm9vVGlsZShzaXplOiBudW1iZXIsIHN0cmlwczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IHN3ID0gcyAvIHN0cmlwcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IHN0cmlwczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MCArIHJuZCgpICogMC4yLCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0b25lKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2IC0gMn0sJHt2IC0gNn0pYDsgY3R4LmZpbGxSZWN0KGIgKiBzdywgMCwgc3csIHMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUwLDQyLDM0LDAuNiknOyBjdHguZmlsbFJlY3QoYiAqIHN3LCAwLCBNYXRoLm1heCgxLCBzICogMC4wMDYpLCBzKTtcbiAgICAgIC8vIGEgaGlnaGxpZ2h0IGRvd24gdGhlIGN1bG0ncyByb3VuZFxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTApJzsgY3R4LmZpbGxSZWN0KGIgKiBzdyArIHN3ICogMC4zNSwgMCwgc3cgKiAwLjI1LCBzKTtcbiAgICAgIC8vIG5vZGUgcmluZ3NcbiAgICAgIGNvbnN0IG4gPSAxICsgTWF0aC5mbG9vcihybmQoKSAqIDIpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHsgY29uc3QgeSA9IHJuZCgpICogczsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDcwLDYwLDQ4LDAuNDUpJzsgY3R4LmZpbGxSZWN0KGIgKiBzdywgeSwgc3csIE1hdGgubWF4KDEsIHMgKiAwLjAwOCkpOyB9XG4gICAgICAvLyBmaW5lIGdyYWluIGxpbmVzXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDY7IGsrKykgeyBjb25zdCB4ID0gYiAqIHN3ICsgcm5kKCkgKiBzdzsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDgwLDcwLDU4LCR7MC4wNSArIHJuZCgpICogMC4xfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7IH1cbiAgICB9XG4gICAgLy8gbW91bGQgc3BlY2tsZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzAwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLDI4LDI0LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHgsIHksIDEgKyBybmQoKSAqIDIsIDEgKyBybmQoKSAqIDIpOyB9XG4gIH0pO1xufVxuXG4vKiogUE9TVEVSIHRpbGUgZm9yIGEgaG9hcmRpbmc6IHRvcm4gcGFzdGUtdXAgc2hlZXRzIGFuZCBhIHNwcmF5IHN0ZW5jaWwgb3ZlciBhIFRSQU5TUEFSRU5UIGdyb3VuZCxcbiAqICBib3VuZCBvbiBhbiBhbHBoYS10ZXN0ZWQgcGFuZSBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgc2hlZXQuIGBsaW5lc2AgYXJlIHRoZSBzdGVuY2lsXG4gKiAgc3RyaW5nczsgYSBwcmludGVkIGdyYXBoaWMgaXMgZXhhY3RseSB0aGUgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIGNhc2UuICovXG5mdW5jdGlvbiBwb3N0ZXJUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBsaW5lczogc3RyaW5nW10pOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBwYXN0ZS11cHM6IG92ZXJsYXBwaW5nIG9mZi13aGl0ZSByZWN0YW5nbGVzIHdpdGggdG9ybiBlZGdlcyBhbmQgZmFpbnQgcHJpbnQgbGluZXNcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4zMCksIHkgPSBzICogKDAuMTUgKyBybmQoKSAqIDAuNDUpLCB3ID0gcyAqICgwLjE0ICsgcm5kKCkgKiAwLjE2KSwgaCA9IHMgKiAoMC4xOCArIHJuZCgpICogMC4yMik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHsyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwkezIyMiArIE1hdGgucm91bmQocm5kKCkgKiAxOCl9LCR7MjEwICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKX0sMC45NilgO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgY29uc3QgbiA9IDk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIGN0eC5saW5lVG8oeCArIHcgKiBpIC8gbiwgeSArIChybmQoKSAtIDAuNSkgKiBoICogMC4wOCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIGN0eC5saW5lVG8oeCArIHcgKyAocm5kKCkgLSAwLjUpICogdyAqIDAuMDgsIHkgKyBoICogaSAvIG4pO1xuICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkgY3R4LmxpbmVUbyh4ICsgdyAqIGkgLyBuLCB5ICsgaCArIChybmQoKSAtIDAuNSkgKiBoICogMC4xMik7XG4gICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSBjdHgubGluZVRvKHggKyAocm5kKCkgLSAwLjUpICogdyAqIDAuMDgsIHkgKyBoICogaSAvIG4pO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDQwLDQ1LDAuNTUpJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSBjdHguZmlsbFJlY3QoeCArIHcgKiAwLjEsIHkgKyBoICogKDAuMiArIGkgKiAwLjEpLCB3ICogKDAuMyArIHJuZCgpICogMC41KSwgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgfVxuICAgIC8vIHNwcmF5IHN0ZW5jaWwsIHNsaWdodGx5IHNvZnQgYW5kIHVuZXZlblxuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyMCwyMiwwLjg4KSc7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAke01hdGgucm91bmQocyAqIDAuMDcpfXB4IHNhbnMtc2VyaWZgO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcyAqIDAuNDAsIHkgPSBzICogKDAuNDQgKyBpICogMC4xMyk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDM7IGsrKykgeyBjdHguZ2xvYmFsQWxwaGEgPSAwLjY7IGN0eC5maWxsVGV4dChsaW5lc1tpXSwgeCArIChybmQoKSAtIDAuNSkgKiAzLCB5ICsgKHJuZCgpIC0gMC41KSAqIDMpOyB9XG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBTVFJJUEUgdGlsZTogYWx0ZXJuYXRpbmcgY29sb3VyIGJhbmRzIGFsb25nIHUgKGFuIGF3bmluZyksIHdpdGggYSBzb2Z0IGdyaW1lIG11bHRpcGx5IHNvIHRoZSBjbG90aFxuICogIHJlYWRzIHdvcm4gcmF0aGVyIHRoYW4gcHJpbnRlZC4gYGFgL2BiYCBhcmUgdGhlIHR3byBiYW5kIGNvbG91cnMgYXMgW3IsZyxiXSAwLTEuIEJvdW5kIGFzIG1hcCBvbiBhXG4gKiAgV0hJVEUgbWF0ZXJpYWwgc28gdGhlIGJhbmRzIGNhcnJ5IHRoZSB3aG9sZSBhbGJlZG8uICovXG5mdW5jdGlvbiBzdHJpcGVUaWxlKHNpemU6IG51bWJlciwgYmFuZHM6IG51bWJlciwgYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgcmdiKCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9KWA7XG4gICAgY29uc3QgdyA9IHMgLyBiYW5kcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhbmRzOyBpKyspIHsgY3R4LmZpbGxTdHlsZSA9IHJnYihpICUgMiA/IGIgOiBhKTsgY3R4LmZpbGxSZWN0KE1hdGguZmxvb3IoaSAqIHcpLCAwLCBNYXRoLmNlaWwodykgKyAxLCBzKTsgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDQgKyBybmQoKSAqIHMgKiAwLjA4LCBhbCA9IDAuMDYgKyBybmQoKSAqIDAuMTg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxNTAsMTQwLDEyNSwke2FsfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDE1MCwxNDAsMTI1LDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTIwMDsgaSsrKSB7IGNvbnN0IHYgPSAyMDAgKyBNYXRoLnJvdW5kKHJuZCgpICogNTUpOyBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4xMClgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDEuNSwgMS41KTsgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFNlYW1sZXNzIGFyb3VuZC1ieS11cCBVVnMgZm9yIGEgTGF0aGVHZW9tZXRyeTogdSBmcm9tIHRoZSBTRUdNRU5UIGluZGV4ICh0aGUgbGF0aGUgb3JkZXJzIGl0c1xuICogIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IsIGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgc28gdGhlIGR1cGxpY2F0ZWQgc2VhbSBjb2x1bW4gcmVhZHNcbiAqICB1ID0gcmVwZWF0cyBleGFjdGx5IGFuZCBSZXBlYXRXcmFwcGluZyBjbG9zZXMgaXQuIGBzY2FsZWAgaXMgdGhlIHRpbGUgc2l6ZSBpbiBtZXRyZXM7IHRoZVxuICogIGFyb3VuZC1yZXBlYXQgY291bnQgaXMgcm91bmRlZCBzbyB0aGUgdGlsZSBtZWV0cyBpdHNlbGYsIGZyb20gdGhlIHByb2ZpbGUncyB3aWRlc3QgcmFkaXVzLiAqL1xuZnVuY3Rpb24gbGF0aGVVVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcG9pbnRDb3VudDogbnVtYmVyLCBzZWc6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdlNjYWxlID0gc2NhbGUsIHYwID0gMCk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGxldCByTWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHJNYXggPSBNYXRoLm1heChyTWF4LCBNYXRoLmh5cG90KHAuZ2V0WChpKSwgcC5nZXRaKGkpKSk7XG4gIGNvbnN0IHJlcCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoMiAqIE1hdGguUEkgKiByTWF4IC8gc2NhbGUpKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBzID0gTWF0aC5mbG9vcihpIC8gcG9pbnRDb3VudCk7XG4gICAgdXZbaSAqIDJdID0gKHMgLyBzZWcpICogcmVwOyB1dltpICogMiArIDFdID0gKHAuZ2V0WShpKSAtIHYwKSAvIHZTY2FsZTtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG59XG5cbi8qKiBFWFBPU0VELUFHR1JFR0FURSB0aWxlOiBhIGRhcmsgbW9ydGFyIGdyb3VuZCBwYWNrZWQgd2l0aCByb3VuZGVkIHBlYmJsZXMgaW4gYSBtZWFzdXJlZCBwYWxldHRlLFxuICogIGVhY2ggZHJhd24gYXQgbmluZSB3cmFwcGVkIG9mZnNldHMgc28gdGhlIHRpbGUgaXMgc2VhbWxlc3MuIGBvLnBhbGV0dGVgIGlzIGEgbGlzdCBvZiBbcixnLGJdXG4gKiAgcmF0aW9zIGFnYWluc3QgdGhlIG1hdGVyaWFsIGNvbG91ciwgYG8uZ3JvdW5kYCB0aGUgbW9ydGFyIHJhdGlvLCBgby5jb3VudGAgdGhlIHBlYmJsZSBjb3VudC4gKi9cbmZ1bmN0aW9uIHBlYmJsZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX0pYDtcbiAgICBjdHguZmlsbFN0eWxlID0gcmdiKG8uZ3JvdW5kID8/IFswLjQ1LCAwLjQyLCAwLjM4XSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBwYWw6IG51bWJlcltdW10gPSBvLnBhbGV0dGUgPz8gW1swLjg1LCAwLjc4LCAwLjY2XSwgWzAuNzIsIDAuNjIsIDAuNTBdLCBbMC42MCwgMC41OCwgMC41NV0sIFswLjkwLCAwLjg2LCAwLjgwXV07XG4gICAgY29uc3QgbiA9IG8uY291bnQgPz8gOTAwLCByTWluID0gcyAqIChvLnJNaW4gPz8gMC4wMTIpLCByTWF4ID0gcyAqIChvLnJNYXggPz8gMC4wMjgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByeCA9IHJNaW4gKyBybmQoKSAqIChyTWF4IC0gck1pbiksIHJ5ID0gcnggKiAoMC42ICsgcm5kKCkgKiAwLjUpLCBhID0gcm5kKCkgKiBNYXRoLlBJO1xuICAgICAgY29uc3QgYyA9IHBhbFtNYXRoLmZsb29yKHJuZCgpICogcGFsLmxlbmd0aCldLCBrID0gMC44NSArIHJuZCgpICogMC4zO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHJnYihjLm1hcCgodikgPT4gTWF0aC5taW4oMSwgdiAqIGspKSk7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByeCwgcnksIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgLy8gYSBoaWdobGlnaHQgY3Jlc2NlbnQgb24gdGhlIGxpdCBzaWRlIHNvIGVhY2ggc3RvbmUgcmVhZHMgYXMgYSBidW1wXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xOCknO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHggLSByeCAqIDAuMiwgeSArIGR5IC0gcnkgKiAwLjI1LCByeCAqIDAuNSwgcnkgKiAwLjQsIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBUWVJFIFRSRUFEIHRpbGUgZm9yIGEgbGF0aGUgY2FycnlpbmcgYGN5bFVWYDogdSBydW5zIEFST1VORCB0aGUgdHlyZSBhbmQgdiBVUCBpdCwgc28gdHJlYWQgc2xvdHMgYXJlXG4gKiAgYmFycyBhdCBjb25zdGFudCB1IGFuZCB0aGUgY2lyY3VtZmVyZW50aWFsIGdyb292ZXMgYXJlIGxpbmVzIGF0IGNvbnN0YW50IHYuIERyYXduIGFzIHJhdGlvcyBvbiB3aGl0ZVxuICogIGFuZCBtdWx0aXBsaWVkIGludG8gdGhlIChsaWZ0ZWQpIHJ1YmJlciBjb2xvdXI7IGBvLmdyb292ZWAgaXMgdGhlIGRhcmtlc3QgcmF0aW8sIGtlcHQgYWJvdmUgdGhlXG4gKiAgbHVtYS01OCBob2xlIGJhbmQgYnkgdGhlIGNhbGxlci4gYG8uc2xvdHNgIGJhcnMgcGVyIHRpbGUsIGBvLnJpbmdzYCBjaXJjdW1mZXJlbnRpYWwgbGluZXMuICovXG5mdW5jdGlvbiB0cmVhZFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjgwLCBzbG90cyA9IG8uc2xvdHMgPz8gMiwgcmluZ3MgPSBvLnJpbmdzID8/IDI7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGNvbnN0IGd2ID0gTWF0aC5yb3VuZCgyNTUgKiBncm9vdmUpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9KWA7XG4gICAgY29uc3QgcGl0Y2ggPSBzIC8gc2xvdHMsIHcgPSBwaXRjaCAqIChvLnNsb3RXaWR0aCA/PyAwLjE2KTtcbiAgICAvLyB0cmVhZCBzbG90cyBzcGFuIHRoZSBiYW5kIGJldHdlZW4gdGhlIHR3byBlZGdlIHNob3VsZGVycyAodiAwLjEyLi4wLjg4IG9mIHRoZSB0aWxlKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xvdHM7IGkrKykgeyBjb25zdCB4ID0gaSAqIHBpdGNoICsgcGl0Y2ggKiAwLjQgKyAocm5kKCkgLSAwLjUpICogcGl0Y2ggKiAwLjE7IGN0eC5maWxsUmVjdCh4LCBzICogMC4xMiwgdywgcyAqIDAuNzYpOyBjdHguZmlsbFJlY3QoeCAtIHMsIHMgKiAwLjEyLCB3LCBzICogMC43Nik7IH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpbmdzOyBpKyspIHsgY29uc3QgeSA9IHMgKiAoMC4yICsgMC42ICogKGkgKyAwLjUpIC8gcmluZ3MpOyBjdHguZmlsbFJlY3QoMCwgeSAtIDEuNSwgcywgMyk7IH1cbiAgICAvLyBzaWRld2FsbCBzaGVlbjogYSBzb2Z0IGxpZ2h0ZXIgd2FzaCBzbyB0aGUgcnViYmVyIGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjEyKSwgdiA9IDIzNSArIE1hdGgucm91bmQocm5kKCkgKiAyMCk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTsgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuNSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBBIHRhcGVyZWQgYm94OiBCb3hHZW9tZXRyeSgxLCBoLCAxKSB3aG9zZSB4L3ogYXJlIHNjYWxlZCBwZXIgdmVydGV4IGJ5IHRoZSBmb290cHJpbnQgaW50ZXJwb2xhdGVkXG4gKiAgZnJvbSAodzAsIGQwKSBhdCB0aGUgYm90dG9tIHRvICh3MSwgZDEpIGF0IHRoZSB0b3AuIE5vcm1hbHMgcmVjb21wdXRlZCBzbyB0aGUgc2xhbnRlZCBmYWNlcyBzaGFkZVxuICogIGZsYXQuIGBiYCA9IFtjeCwgeUJvdHRvbSwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXS4gKi9cbmZ1bmN0aW9uIGZydXN0dW0oYjogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IFtjeCwgeTAsIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0gPSBiO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIGgsIDEpO1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IChwLmdldFkoaSkgKyBoIC8gMikgLyBoO1xuICAgIHAuc2V0WChpLCBwLmdldFgoaSkgKiAodzAgKyAodzEgLSB3MCkgKiB0KSk7IHAuc2V0WihpLCBwLmdldFooaSkgKiAoZDAgKyAoZDEgLSBkMCkgKiB0KSk7XG4gIH1cbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICBnLnRyYW5zbGF0ZShjeCwgeTAgKyBoIC8gMiwgY3opO1xuICByZXR1cm4gZztcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgLy8gQSBMSVQgc3VyZmFjZSAoYSBmbHVvcmVzY2VudCB0dWJlLCBhIGNoYXJjb2FsIGVtYmVyIGJlZCk6IGVtaXNzaXZlIGNhcnJpZXMgdGhlIGdsb3cgd2l0aG91dCBhXG4gICAgLy8gbGlnaHQgc291cmNlLCB3aGljaCB0aGUga2l0J3MgcHJvcHMgbmV2ZXIgb3duIC0tIHRoZSBob3N0IHNjZW5lIG93bnMgbGlnaHRpbmcuXG4gICAgaWYgKHMuZW1pc3NpdmUgIT09IHVuZGVmaW5lZCkgeyBtLmVtaXNzaXZlID0gbmV3IFRIUkVFLkNvbG9yKHMuZW1pc3NpdmUpOyBtLmVtaXNzaXZlSW50ZW5zaXR5ID0gcy5lbWlzc2l2ZUludGVuc2l0eSA/PyAxOyB9XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICAvLyBBbiBBTFBIQS1DVVQgcGFuZSAoY2hhaW4tbGluayBtZXNoKTogdGhlIGNhbnZhcyB0aWxlIGNhcnJpZXMgdGhlIGN1dC1vdXQgaW4gaXRzIGFscGhhIGNoYW5uZWwgYW5kXG4gICAgLy8gYWxwaGFUZXN0IGRpc2NhcmRzIHRoZSBvcGVuIGNlbGxzLCBzbyB0aGUgd2lyZSBzdGF5cyBvcGFxdWUgYW5kIHNvcnRzIGxpa2UgYSBzb2xpZC5cbiAgICBpZiAocy5hbHBoYVRlc3QgIT09IHVuZGVmaW5lZCkgeyBtLmFscGhhVGVzdCA9IHMuYWxwaGFUZXN0OyBtLnRyYW5zcGFyZW50ID0gZmFsc2U7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhaW5sZXNzUGF2ZW1lbnRMaXR0ZXJCaW5Nb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ1N0YWlubGVzcyBQYXZlbWVudCBMaXR0ZXIgQmluJztcblxuICBjb25zdCBtYXRlcmlhbHMgPSBidWlsZE1hdGVyaWFscyhvcHRpb25zKTtcbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0ge307XG4gIGNvbnN0IHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIGNvbnN0IGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPiA9IHt9O1xuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICAvKipcbiAgICogQSBtYXRlcmlhbCB3aXRoIGB2ZXJ0ZXhDb2xvcnNgIHJlYWRzIGEgYGNvbG9yYCBhdHRyaWJ1dGUgb3V0IG9mIEVWRVJZIGdlb21ldHJ5IGJvdW5kIHRvIGl0LCBhbmRcbiAgICogYSBnZW9tZXRyeSB0aGF0IGhhcyBub25lIGhhbmRzIHRoZSBzaGFkZXIgYW4gdW5kZWZpbmVkIGF0dHJpYnV0ZSAtLSB3aGljaCBjb21lcyBiYWNrIGFzXG4gICAqICgwLCAwLCAwKSBhbmQgcmVuZGVycyB0aGUgbWVzaCBCTEFDSy4gVGhhdCBpcyBub3QgYSBoeXBvdGhldGljYWw6IHRoZSB1Ym9zb3QncyB3YWxsIGJvZHkgYW5kXG4gICAqIGl0cyBlaWdodCBib3VuZGFyeSBzdG9uZXMgc2hpcHBlZCBhcyBibGFjayBzaWxob3VldHRlcyBmcm9tIG9uZSB0aW50ZWQgcGxhdGZvcm0gc2hhcmluZyB0aGVpclxuICAgKiBzdG9uZSBtYXRlcmlhbCwgYW5kIHRoZSBmYWlsdXJlIGlzIHNpbGVudCBiZWNhdXNlIHRoZSB0aW50ZWQgY29tcG9uZW50IGl0c2VsZiBsb29rcyBwZXJmZWN0LlxuICAgKlxuICAgKiBBbiBJbnN0YW5jZWRNZXNoIGhpZGVzIGl0IC0tIGl0IGZhbGxzIGJhY2sgdG8gaW5zdGFuY2VDb2xvciBhbmQgY29tZXMgb3V0IHdoaXRlIC0tIHNvIHRoZSBzYW1lXG4gICAqIG1pc3Rha2Ugb24gdGhlIGNoZWRpJ3MgbmljaGUgZnJhbWVzIHJlbmRlcmVkIGNvcnJlY3RseSBhbmQgdGF1Z2h0IG5vdGhpbmcuIEd1YXJkIGl0IGhlcmUsIG9uY2UsXG4gICAqIGZvciBldmVyeSBnZW9tZXRyeTogbm8gY29sb3IgYXR0cmlidXRlIGFuZCBhIHZlcnRleENvbG9ycyBtYXRlcmlhbCBtZWFucyBmaWxsIHdpdGggd2hpdGUuXG4gICAqL1xuICBmdW5jdGlvbiBndWFyZFZlcnRleENvbG9ycyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKSB7XG4gICAgaWYgKCFtYXQgfHwgIW1hdC52ZXJ0ZXhDb2xvcnMgfHwgZ2VvLmdldEF0dHJpYnV0ZSgnY29sb3InKSkgcmV0dXJuO1xuICAgIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KG4gKiAzKS5maWxsKDEpLCAzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIC8vIHNldENvbG9yQXQgTVVMVElQTElFUyB3aXRoIG1hdGVyaWFsLmNvbG9yLCBzbyBhbiBpbnN0YW5jZWQgbWF0ZXJpYWwgY2FycnlpbmcgcGVyLWluc3RhbmNlXG4gICAgICAvLyB0b25lcyBtdXN0IGJlIHdoaXRlIG9yIGV2ZXJ5IHRvbmUgY29tZXMgb3V0IGRhcmtlbmVkIGJ5IHRoZSBiYXNlLlxuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cbiAgLyoqIEZvdXIgaW5zdGFuY2VzIGF0IDkwLWRlZ3JlZSB5YXcgYWJvdXQgdGhlIGF4aXMgLS0gdGhlIGNvcm5lci9mYWNlIHJlcGV0aXRpb24gdGhhdCBldmVyeVxuICAgKiAgYnVpbGRpbmcgaW4gdGhpcyBzZXQgdXNlcyBmb3IgbmljaGVzLCBmaW5pYWxzLCBib3VuZGFyeSBzdG9uZXMgYW5kIGNvcm5lciBkb21lcy4gKi9cbiAgZnVuY3Rpb24gcXVhZChyYWRpdXM6IG51bWJlciwgeTogbnVtYmVyLCBwaGFzZSA9IDApOiBUSFJFRS5NYXRyaXg0W10ge1xuICAgIHJldHVybiBbMCwgMSwgMiwgM10ubWFwKChpKSA9PiB7XG4gICAgICBjb25zdCBhID0gcGhhc2UgKyBpICogTWF0aC5QSSAvIDI7XG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihhKSAqIHJhZGl1cywgeSwgTWF0aC5jb3MoYSkgKiByYWRpdXMpLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGEpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29tcG9uZW50c1xuICAgKiBFYWNoIGVudHJ5IG9mIENPTkZJRy5nZW9tZXRyeS5jb21wb25lbnRzIGlzIE9ORSBtZXJnZWQgZ2VvbWV0cnkgb24gT05FIG1hdGVyaWFsIC0tIG9uZSBkcmF3XG4gICAqIGNhbGwuIEV2ZXJ5IHBhcnQgaW5zaWRlIGl0IGlzIGEgdGludGVkIGJveCwgdHViZSwgY3lsaW5kZXIsIGxhdGhlIG9yIHBsYW5lOyBjb2xvdXIgZGlmZmVyZW5jZXNcbiAgICogYXJlIHZlcnRleCBjb2xvdXJzLiBgdXZgIHBpY2tzIGhvdyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHJlcGVhdHMgb3ZlciBpdC4gKi9cbiAgZm9yIChjb25zdCBjIG9mIEcuY29tcG9uZW50cyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIChjLmJveGVzID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgYiBvZiBtaXJyb3JYKChjLmJveGVzTWlycm9yZWQgPz8gW10pIGFzIG51bWJlcltdW10pKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgdCBvZiAoYy50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIGZvciAoY29uc3QgY3kgb2YgKGMuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIGB0aDBgL2B0aExlbmAgbWFrZSBhIFBBUlRJQUwgY3lsaW5kZXIgKGEgY3VydmVkIHN0aWNrZXIgcGF0Y2ggd3JhcHBlZCBvbiBhIHJvdW5kIGJvZHkpIGFuZFxuICAgICAgLy8gYG9wZW5gIGRyb3BzIHRoZSBjYXBzOyB0aGUgc2lkZSBVVnMgdGhlbiBydW4gMC4uMSBhY3Jvc3MgdGhlIGFyYyBhbmQgdXAgdGhlIGhlaWdodCwgd2hpY2ggaXNcbiAgICAgIC8vIHdoYXQgYSBiYWtlZCBncmFwaGljIHdhbnRzLiBgdXZSZXBgIG11bHRpcGxpZXMgdGhlbSBmb3IgYSByZXBlYXRpbmcgdGlsZS5cbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjeS5ydCwgY3kucmIsIGN5LmgsIGN5LnNlZyA/PyAxMiwgMSwgY3kub3BlbiA/PyBmYWxzZSwgY3kudGgwID8/IDAsIGN5LnRoTGVuID8/IE1hdGguUEkgKiAyKTtcbiAgICAgIGlmIChjeS51dlJlcCkgeyBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpOyBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiBjeS51dlJlcFswXSwgdXYuZ2V0WShpKSAqIGN5LnV2UmVwWzFdKTsgfVxuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnkpIGcucm90YXRlWShjeS5yeSk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbCBvZiAoYy5sYXRoZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgcnlgIHlhd3MgdGhlIHJldm9sdXRpb246IGEgNC1zZWdtZW50IGxhdGhlIHR1cm5lZCA0NSBkZWdyZWVzIGlzIGEgY2hhbWZlcmVkIFNRVUFSRSBzbGFiIGluIG9uZVxuICAgICAgLy8gZ2VvbWV0cnkgKGEgY29uZSdzIHJ1YmJlciBiYXNlKSwgd2hlcmUgdHdvIHN0YWNrZWQgYm94ZXMgd291bGQgY29zdCB0d28gYW5kIGEgY29wbGFuYXIgcGFpci5cbiAgICAgIC8vIGBjeWxVVmAgKGEgdGlsZSBzaXplIGluIG1ldHJlcykgd3JpdGVzIGEgc2VhbWxlc3MgYXJvdW5kLWJ5LXVwIFVWIGZyb20gdGhlIGxhdGhlJ3Mgb3duIHNlZ21lbnRcbiAgICAgIC8vIGluZGV4IC0tIGF0YW4yIHdvdWxkIGZvbGQgYSB3aG9sZSB0aWxlIGludG8gdGhlIHNlYW0gY29sdW1uIC0tIGZvciB0cmVhZCwgZmx1dGluZyBhbmQgZ3JhaW4uXG4gICAgICBjb25zdCBnID0gbGF0aGUobC5wdHMsIGwuc2VnID8/IDEyLCAwLCBsLnNoYXJwICE9PSBmYWxzZSk7XG4gICAgICBpZiAobC5jeWxVVikgeyBjb25zdCBjdSA9IEFycmF5LmlzQXJyYXkobC5jeWxVVikgPyBsLmN5bFVWIDogW2wuY3lsVVYsIGwuY3lsVVYsIDBdOyBsYXRoZVVWKGcsIChnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCAvICgobC5zZWcgPz8gMTIpICsgMSkpIHwgMCwgbC5zZWcgPz8gMTIsIGN1WzBdLCBjdVsxXSwgY3VbMl0gPz8gMCk7IH1cbiAgICAgIGlmIChsLnJ5KSBnLnJvdGF0ZVkobC5yeSk7IGcudHJhbnNsYXRlKGwuYXRbMF0sIGwuYXRbMV0sIGwuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgbC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwIG9mIChjLnBsYW5lcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgUEFORTogYSBzaW5nbGUgcXVhZCBpbiB0aGUgWFkgcGxhbmUgYXQgZGVwdGggeiwgZG91YmxlLXNpZGVkIGJ5IGl0cyBtYXRlcmlhbC4gSXRzIFVWcyBydW5cbiAgICAgIC8vIDAuLjEgYWNyb3NzIHRoZSBwYW5lIHNvIGFuIGFscGhhLWN1dCB0aWxlIHJlcGVhdHMgYHJlcGAgdGltZXMgYWNyb3NzIGFuZCBkb3duLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHAudywgcC5oLCAxLCAxKTtcbiAgICAgIGcudHJhbnNsYXRlKHAuYXRbMF0sIHAuYXRbMV0sIHAuYXRbMl0pO1xuICAgICAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIChwLnJlcD8uWzBdID8/IDEpLCB1di5nZXRZKGkpICogKHAucmVwPy5bMV0gPz8gMSkpO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIHAuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5leHRydWRlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgcHJvZmlsZSBpbiB0aGUgWFkgcGxhbmUgZXh0cnVkZWQgYWxvbmcgWiBiZXR3ZWVuIHowIGFuZCB6MSAtLSBhIHNsYWIgd2l0aCBhIG1vdWxkZWQgZWRnZSxcbiAgICAgIC8vIGEgcHlyYW1pZCBjYXAgYXMgYSBzdGVwcGVkIHByb2ZpbGUsIGEgc3BlYXIgZmluaWFsLlxuICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIHNoYXBlLm1vdmVUbyhlLnBvbHlbMF1bMF0sIGUucG9seVswXVsxXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGUucG9seS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKGUucG9seVtpXVswXSwgZS5wb2x5W2ldWzFdKTtcbiAgICAgIHNoYXBlLmNsb3NlUGF0aCgpO1xuICAgICAgZm9yIChjb25zdCBoIG9mIChlLmhvbGVzID8/IFtdKSBhcyBudW1iZXJbXVtdW10pIHtcbiAgICAgICAgY29uc3QgaHAgPSBuZXcgVEhSRUUuUGF0aCgpOyBocC5tb3ZlVG8oaFswXVswXSwgaFswXVsxXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaC5sZW5ndGg7IGkrKykgaHAubGluZVRvKGhbaV1bMF0sIGhbaV1bMV0pO1xuICAgICAgICBocC5jbG9zZVBhdGgoKTsgc2hhcGUuaG9sZXMucHVzaChocCk7XG4gICAgICB9XG4gICAgICBjb25zdCBnID0gZXh0cnVkZUFsb25nWihzaGFwZSwgZS56MCwgZS56MSk7XG4gICAgICBpZiAoZS5yeCkgZy5yb3RhdGVYKGUucngpO1xuICAgICAgaWYgKGUucnkpIGcucm90YXRlWShlLnJ5KTtcbiAgICAgIGlmIChlLnJ6KSBnLnJvdGF0ZVooZS5yeik7XG4gICAgICBpZiAoZS5hdCkgZy50cmFuc2xhdGUoZS5hdFswXSwgZS5hdFsxXSwgZS5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgZS5oZXgpKTtcbiAgICB9XG4gICAgLy8gRUxMSVBTT0lEUzogW2hleCwgY3gsIGN5LCBjeiwgcngsIHJ5LCByeiwgcm90WD8sIHJvdFk/LCByb3RaP10gLS0gYSB1bml0IHNwaGVyZSBzY2FsZWQgcGVyIGF4aXNcbiAgICAvLyBhbmQgdHVybmVkIGFib3V0IGl0cyBvd24gY2VudHJlLiBBIHNrdWxsIGRvbWUsIGEgcGF3LCBhIG5vc2UgcGFkOiB0aGUgcm91bmRlZCBzb2xpZHMgb2YgYW5cbiAgICAvLyBhbmltYWwgdGhhdCBhIGJveCBvciBhIHN0YXRpb24gdHViZSBjYW5ub3QgZ2l2ZSwgc2hhcmluZyBzbW9vdGggbm9ybWFscyB0aHJvdWdoIHRoZSBtZXJnZS5cbiAgICBmb3IgKGNvbnN0IGUgb2YgKGMuZWxsaXBzb2lkcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkge1xuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLCBlWzEwXSA/PyAxNiwgZVsxMV0gPz8gMTIpO1xuICAgICAgZy5zY2FsZShlWzRdLCBlWzVdLCBlWzZdKTtcbiAgICAgIGlmIChlWzddKSBnLnJvdGF0ZVgoZVs3XSk7IGlmIChlWzhdKSBnLnJvdGF0ZVkoZVs4XSk7IGlmIChlWzldKSBnLnJvdGF0ZVooZVs5XSk7XG4gICAgICBnLnRyYW5zbGF0ZShlWzFdLCBlWzJdLCBlWzNdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlWzBdKSk7XG4gICAgfVxuICAgIC8vIEZSVVNUQTogW2hleCwgY3gsIHlCb3R0b20sIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0gLS0gYSBib3ggd2hvc2UgZm9vdHByaW50IGNoYW5nZXMgZnJvbSAodzAsIGQwKSBhdFxuICAgIC8vIHRoZSBib3R0b20gdG8gKHcxLCBkMSkgYXQgdGhlIHRvcDogdGhlIHRhcGVyZWQgYm9keSBvZiBhIHdoZWVsaWUgYmluIG9yIGEgc3RlZWwgY29udGFpbmVyLlxuICAgIGZvciAoY29uc3QgZiBvZiAoYy5mcnVzdGEgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhmcnVzdHVtKGYuc2xpY2UoMSkpLCBmWzBdKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgLy8gT1JHQU5JQyBzdGF0aW9uIHR1YmVzOiBbeiwgY3gsIGN5LCByeCwgcnldIHN0YXRpb25zIHN3ZXB0IGFsb25nIFogLS0gdGhlIG9ubHkgc29mdCBmb3JtIGluIHRoZVxuICAgIC8vIGtpdCwgYSBseWluZyBhbmltYWwuIExpdCBzbW9vdGggYnkgdGhlIGhlbHBlcidzIHNoYXJlZCByaW5nIHZlcnRpY2VzLlxuICAgIGZvciAoY29uc3QgdCBvZiAoYy50dWJlc0Fsb25nID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHR1YmVBbG9uZyh0LnN0YXRpb25zLCB0LnNlZyA/PyAxMik7XG4gICAgICBpZiAodC5yeSkgZy5yb3RhdGVZKHQucnkpOyBpZiAodC5hdCkgZy50cmFuc2xhdGUodC5hdFswXSwgdC5hdFsxXSwgdC5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgdC5oZXggPz8gMHhmZmZmZmYpKTtcbiAgICB9XG4gICAgbGV0IGcgPSBtZXJnZUdlb3MoZ3MpO1xuICAgIC8vIGEgcGVyLWNvbXBvbmVudCBzY2FsZSwgYXBwbGllZCB0byB0aGUgbWVyZ2UgYmVmb3JlIHRpbnRpbmc6IGhvdyBhIGx5aW5nIGFuaW1hbCBhdXRob3JlZCBhdFxuICAgIC8vIGl0cyBvd24gcHJvcG9ydGlvbnMgaXMgZml0dGVkIGludG8gdGhlIGRlY2xhcmVkIGVudmVsb3BlIHdpdGhvdXQgcmUtcmVhZGluZyBldmVyeSBzdGF0aW9uXG4gICAgaWYgKGMuc2NhbGUpIGcuc2NhbGUoYy5zY2FsZVswXSwgYy5zY2FsZVsxXSwgYy5zY2FsZVsyXSk7XG4gICAgLy8gQVhJUyBUSU5UOiBhIHBlci12ZXJ0ZXggYmxlbmQgZnJvbSBjMCBhdCBgZnJvbWAgdG8gYzEgYXQgYHRvYCBhbG9uZyBvbmUgYXhpcywgb3ZlciB0aGUgd2hvbGVcbiAgICAvLyBtZXJnZSAtLSBhIHRhbiBiYWNrIGZhZGluZyB0byBhIHdoaXRlIGJlbGx5IGNvc3RzIGFuIGF0dHJpYnV0ZSwgbm90IGEgc2Vjb25kIG1hdGVyaWFsLiBBcHBsaWVkXG4gICAgLy8gaW4gTElORUFSIHNwYWNlIHRocm91Z2ggVEhSRUUuQ29sb3IuIGBrZWVwYCBtdWx0aXBsaWVzIHRoZSBibGVuZCBpbnRvIHRoZSBleGlzdGluZyB0aW50IGluc3RlYWRcbiAgICAvLyBvZiByZXBsYWNpbmcgaXQsIHNvIGEgZGFyayBub3NlIHN0YXlzIGRhcmsuXG4gICAgaWYgKGMudGludCkge1xuICAgICAgY29uc3QgYSA9IG5ldyBUSFJFRS5Db2xvcihjLnRpbnQuYzApLCBiID0gbmV3IFRIUkVFLkNvbG9yKGMudGludC5jMSk7XG4gICAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGxldCBjb2wgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUgfCBudWxsO1xuICAgICAgaWYgKCFjb2wpIHsgY29sID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKS5maWxsKDEpLCAzKTsgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgY29sKTsgfVxuICAgICAgY29uc3QgYXggPSBjLnRpbnQuYXhpcyA9PT0gJ3gnID8gMCA6IGMudGludC5heGlzID09PSAneScgPyAxIDogMjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHYgPSBheCA9PT0gMCA/IHAuZ2V0WChpKSA6IGF4ID09PSAxID8gcC5nZXRZKGkpIDogcC5nZXRaKGkpO1xuICAgICAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHYgLSBjLnRpbnQuZnJvbSkgLyAoYy50aW50LnRvIC0gYy50aW50LmZyb20pKSk7XG4gICAgICAgIGNvbnN0IHIgPSBhLnIgKyAoYi5yIC0gYS5yKSAqIHQsIGdnID0gYS5nICsgKGIuZyAtIGEuZykgKiB0LCBiYiA9IGEuYiArIChiLmIgLSBhLmIpICogdDtcbiAgICAgICAgaWYgKGMudGludC5rZWVwKSBjb2wuc2V0WFlaKGksIGNvbC5nZXRYKGkpICogciwgY29sLmdldFkoaSkgKiBnZywgY29sLmdldFooaSkgKiBiYik7IGVsc2UgY29sLnNldFhZWihpLCByLCBnZywgYmIpO1xuICAgICAgfVxuICAgICAgY29sLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGMudXYgPT09ICd3b3JsZCcpIGcgPSB3b3JsZFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ2hlaWdodCcpIGcgPSBoZWlnaHRVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdwYW5lbCcpIGcgPSBwYW5lbFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ3BhbmVsLXJvdCcpIGcgPSBwYW5lbFVWKGcsIGMudXZTY2FsZSA/PyAxLCB0cnVlKTtcbiAgICBhZGQoYy5pZCwgYy5uYW1lLCBnLCBjLm1hdGVyaWFsKTtcbiAgICBpZiAoYy5jb2xsaWRlcikgY29sbGlkZXJzW2MuaWRdID0gYy5jb2xsaWRlcjtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmVwZXRpdGlvbiBzeXN0ZW1zXG4gICAqIFBpY2tldHMsIHNsYXRzLCBsYXR0aWNlIHN0cmlwczogb25lIGdlb21ldHJ5LCBvbmUgSW5zdGFuY2VkTWVzaCwgb25lIGRyYXcgY2FsbC4gKi9cbiAgZm9yIChjb25zdCByIG9mIChHLmluc3RhbmNlZCA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoci5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgKHIuc3Bpa2VzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNwaWtlKHMuYXQsIHMudywgcy5oKSwgcy5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IGYgb2YgKHIuZnJ1c3RhID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8oZnJ1c3R1bShmLnNsaWNlKDEpKSwgZlswXSkpO1xuICAgIGZvciAoY29uc3QgY3kgb2YgKHIuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjeS5ydCwgY3kucmIsIGN5LmgsIGN5LnNlZyA/PyAxMik7XG4gICAgICBpZiAoY3kucngpIGcucm90YXRlWChjeS5yeCk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIGxldCBnID0gbWVyZ2VHZW9zKGdzKTtcbiAgICBpZiAoci51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgci51dlNjYWxlID8/IDEpO1xuICAgIGlmIChyLnV2ID09PSAnaGVpZ2h0JykgZyA9IGhlaWdodFVWKGcsIHIudXZTY2FsZSA/PyAxKTtcbiAgICBjb25zdCBtYXRzOiBUSFJFRS5NYXRyaXg0W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHAgb2Ygci5wbGFjZW1lbnRzIGFzIG51bWJlcltdW10pIHtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHBbMF0sIHBbMV0sIHBbMl0pLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21FdWxlcihuZXcgVEhSRUUuRXVsZXIocFszXSA/PyAwLCBwWzRdID8/IDAsIHBbNV0gPz8gMCkpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSkpO1xuICAgIH1cbiAgICBhZGRJbnN0KHIuaWQsIHIubmFtZSwgZywgci5tYXRlcmlhbCwgbWF0cywgci5jb2xvcnMpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXNlcyAqL1xuICBmb3IgKGNvbnN0IHQgb2YgKENPTkZJRy50aWxlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBtYXQgPSBtYXRlcmlhbHNbdC5tYXRlcmlhbF07XG4gICAgaWYgKCFtYXQpIGNvbnRpbnVlO1xuICAgIC8vIEEgQkFLRUQgZ3JhcGhpYyAoYSBwcmludGVkIHNpZ24gZmFjZSk6IG9uZSBXZWJQIGRhdGEgVVJJIGNvbXBvc2VkIG9mZmxpbmUgZnJvbSB0aGUgcGxhdGUncyBvd25cbiAgICAvLyBwcmludGVkIHJlZ2lvbiBhbmQgdmVjdG9yIG1hcmtzLCBsb2FkZWQgdGhyb3VnaCBUZXh0dXJlTG9hZGVyLiBBc3NpZ25lZCBzeW5jaHJvbm91c2x5IHNvIHRoZVxuICAgIC8vIGhhcm5lc3Mgd2FpdHMgb24gdGhlIGRlY29kZS4gSXQgYmVhdHMgZmlsbFRleHQsIHdoaWNoIGRyYXdzIGEgZGlmZmVyZW50IHdvcmRtYXJrIHBlciBtYWNoaW5lLlxuICAgIGlmICh0LmtpbmQgPT09ICdiYWtlZCcpIHtcbiAgICAgIC8vIFVuZGVyIHBsYWluIE5vZGUgKHRoZSBjb3BsYW5hciBjaGVjaywgdGhlIHJ1bnRpbWUgcHJvYmUpIHRoZXJlIGlzIG5vIGRvY3VtZW50IGZvciBJbWFnZUxvYWRlcjpcbiAgICAgIC8vIGtlZXAgdGhlIHdoaXRlIGZhbGxiYWNrIHJhdGhlciB0aGFuIHRocm93LCBleGFjdGx5IGFzIHRoZSByZXRhaWwgZ2xhemluZyBkb2VzLlxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgYmFrZWQgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQodC51cmkpO1xuICAgICAgY29uc3Qgc3JnYiA9IChUSFJFRSBhcyBhbnkpLlNSR0JDb2xvclNwYWNlO1xuICAgICAgaWYgKHNyZ2IpIGJha2VkLmNvbG9yU3BhY2UgPSBzcmdiO1xuICAgICAgYmFrZWQuYW5pc290cm9weSA9IDQ7XG4gICAgICBtYXQubWFwID0gYmFrZWQ7IG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbGV0IHRleDogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwgPSBudWxsO1xuICAgIGlmICh0LmtpbmQgPT09ICdtdWQnKSB0ZXggPSBtdWRUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYmFzZSwgdC5zZWVkID8/IDEsIHQuY292ZXJhZ2UgPz8gMC4zMyk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2R1c3QnKSB0ZXggPSBkdXN0VGlsZSh0LnNpemUgPz8gNTEyLCB0LmR1c3QsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzApO1xuICAgIGlmICh0LmtpbmQgPT09ICdwbGFuaycpIHRleCA9IHBsYW5rVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJvYXJkcyA/PyA2LCB0LnNlZWQgPz8gNSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3J1c3QnKSB0ZXggPSBydXN0VGlsZSh0LnNpemUgPz8gNTEyLCB0LnJhdGlvLCB0LnNlZWQgPz8gNywgdC5kZW5zaXR5ID8/IDkwKTtcbiAgICBpZiAodC5raW5kID09PSAnY29ycnVnYXRpb24nKSB0ZXggPSBjb3JydWdhdGlvblRpbGUodC5zaXplID8/IDUxMiwgdC5waXRjaCA/PyAxMiwgdC5sb3cgPz8gMC43LCB0LnNlZWQgPz8gMyk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2dyaW1lJykgdGV4ID0gZ3JpbWVUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxMSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2Z1cicpIHRleCA9IGZ1clRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDEzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY2hhaW5saW5rJykgdGV4ID0gY2hhaW5saW5rVGlsZSh0LnNpemUgPz8gMjU2LCB0LndpcmUgPz8gMC4wOSwgdC5zZWVkID8/IDQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdiYW1ib28nKSB0ZXggPSBiYW1ib29UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc3RyaXBzID8/IDEwLCB0LnNlZWQgPz8gNik7XG4gICAgaWYgKHQua2luZCA9PT0gJ3N0cmlwZXMnKSB0ZXggPSBzdHJpcGVUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuYmFuZHMgPz8gOCwgdC5hLCB0LmIsIHQuc2VlZCA/PyA5KTtcbiAgICBpZiAodC5raW5kID09PSAncG9zdGVyJykgdGV4ID0gcG9zdGVyVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gOCwgdC5saW5lcyA/PyBbXSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BlYmJsZScpIHRleCA9IHBlYmJsZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDIxLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndHJlYWQnKSB0ZXggPSB0cmVhZFRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDIzLCB0KTtcbiAgICBiaW5kVGlsZShtYXQsIHRleCwgdC5idW1wID8/IDApO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlU3RhaW5sZXNzUGF2ZW1lbnRMaXR0ZXJCaW5Nb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IHRoZSByb290LCBwbHVzIE9ORSBQRVIgV0hFRUwgKGFuZCBhbnkgb3RoZXIgbWVjaGFuaXNtIENPTkZJRy5waXZvdHMgbmFtZXMgLS0gYVxuICAgIC8vIHN0ZWVyaW5nIGhlYWQsIGEgY2Fub3B5IHN0YXkpLiBBIHZlaGljbGUncyB3aGVlbHMgZ2VudWluZWx5IHR1cm4sIHNvIGVhY2ggb25lIGlzIGEgcHJvbWlzZVxuICAgIC8vIGtlcHQ6IHRoZSBwaXZvdCBzaXRzIGF0IHRoZSBodWIsIGl0cyBheGlzIGlzIHRoZSBheGxlLCBhbmQgYGluc3RhbmNlYCBuYW1lcyB3aGljaCBpbnN0YW5jZVxuICAgIC8vIG9mIHRoZSB3aGVlbCBJbnN0YW5jZWRNZXNoIGl0IGRyaXZlcy4gTm90aGluZyBlbHNlIG9uIHRoZSBwcm9wIG1vdmVzIC0tIHRoZSBkb29ycyBhcmUgcGFydFxuICAgIC8vIG9mIHRoZSBib2R5IHNoZWxsIC0tIHNvIG5vdGhpbmcgZWxzZSBnZXRzIGFuIGF4aXMuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG4gICAgZm9yIChjb25zdCBwdiBvZiAoQ09ORklHLnBpdm90cyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IG8gPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgIG8ubmFtZSA9IHB2Lm5hbWU7XG4gICAgICBvLnBvc2l0aW9uLnNldChwdi5wb3NpdGlvblswXSwgcHYucG9zaXRpb25bMV0sIHB2LnBvc2l0aW9uWzJdKTtcbiAgICAgIG8udXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgICAgYW5pbWF0aW9uUm9sZTogJ2NoaWxkJyxcbiAgICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IHB2LnBvc2l0aW9uLCBheGlzOiBwdi5heGlzLCBuYW1lOiBwdi5uYW1lLFxuICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHB2LmNvbXBvbmVudCwgaW5zdGFuY2U6IHB2Lmluc3RhbmNlID8/IG51bGwsIG5vdGVzOiBwdi5ub3RlID8/ICcnIH0sXG4gICAgICB9O1xuICAgICAgcm9vdC5hZGQobyk7XG4gICAgICBwaXZvdHMucHVzaChvKTtcbiAgICB9XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FIHVubGVzcyBDT05GSUcuc29ja2V0cyBuYW1lcyBvbmUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gYSB2ZWhpY2xlIGluIHRoaXMga2l0XG4gICAgLy8gYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQXNDdkIsSUFBTSxTQUFTO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsSUFDWDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxLQUFLO0FBQUEsUUFDSDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLFFBQ0g7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNUO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsY0FBYztBQUFBLE1BQ1o7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLFlBQVk7QUFBQSxVQUNWLFNBQVM7QUFBQSxVQUNULGVBQWU7QUFBQSxZQUNiO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxVQUFVO0FBQUEsVUFDVixVQUFVO0FBQUEsVUFDVixRQUFRO0FBQUEsWUFDTjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxPQUFPO0FBQUEsY0FDTDtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFlBQ0EsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE9BQU87QUFBQSxZQUNQLFNBQVM7QUFBQSxjQUNQO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE9BQU87QUFBQSxjQUNMO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLGNBQ1A7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsWUFDUCxTQUFTO0FBQUEsY0FDUDtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLFFBQVE7QUFBQSxZQUNSLE9BQU87QUFBQSxZQUNQLFNBQVM7QUFBQSxZQUNULE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLFFBQVE7QUFBQSxZQUNSLE9BQU87QUFBQSxZQUNQLFNBQVM7QUFBQSxZQUNULE9BQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBT0YsU0FBUyxVQUFVLE1BQW9EO0FBQ3JFLFFBQU0sUUFBZ0MsQ0FBQztBQUN2QyxRQUFNLE9BQWtCLENBQUM7QUFDekIsYUFBVyxLQUFLLE1BQU07QUFDcEIsUUFBSSxFQUFFLE9BQU87QUFBRSxZQUFNLEtBQUssRUFBRSxhQUFhLENBQUM7QUFBRyxXQUFLLEtBQUssSUFBSTtBQUFBLElBQUcsT0FDekQ7QUFBRSxZQUFNLEtBQUssQ0FBQztBQUFHLFdBQUssS0FBSyxLQUFLO0FBQUEsSUFBRztBQUFBLEVBQzFDO0FBQ0EsTUFBSSxRQUFRO0FBQ1osYUFBVyxLQUFLLE1BQU8sVUFBUyxFQUFFLGFBQWEsVUFBVSxFQUFFO0FBQzNELFFBQU0sV0FBVyxJQUFJLGFBQWEsUUFBUSxDQUFDO0FBQzNDLFFBQU0sU0FBUyxJQUFJLGFBQWEsUUFBUSxDQUFDO0FBQ3pDLFFBQU0sS0FBSyxJQUFJLGFBQWEsUUFBUSxDQUFDO0FBTXJDLFFBQU0sV0FBVyxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLGFBQWEsT0FBTyxDQUFDO0FBQzVELFFBQU0sUUFBUSxXQUFXLElBQUksYUFBYSxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSTtBQUMvRCxNQUFJLElBQUk7QUFDUixhQUFXLEtBQUssT0FBTztBQUNyQixVQUFNLElBQUksRUFBRSxhQUFhLFVBQVUsR0FBRyxJQUFJLEVBQUUsYUFBYSxRQUFRLEdBQUcsSUFBSSxFQUFFLGFBQWEsSUFBSTtBQUMzRixVQUFNLElBQUksRUFBRSxhQUFhLE9BQU87QUFDaEMsYUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxnQkFBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsZ0JBQVUsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsZ0JBQVUsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQzlHLFVBQUksR0FBRztBQUFFLGdCQUFRLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxnQkFBUSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxnQkFBUSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBQSxNQUFHO0FBQ3BILFVBQUksR0FBRztBQUFFLFlBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFHLFlBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEsTUFBRztBQUN2RSxVQUFJLFNBQVMsR0FBRztBQUFFLGVBQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFHLGVBQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsZUFBTyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBQSxNQUFHO0FBQUEsSUFDNUg7QUFDQSxTQUFLLEVBQUU7QUFBQSxFQUNUO0FBQ0EsV0FBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUFFLFFBQUksS0FBSyxDQUFDLEVBQUcsT0FBTSxDQUFDLEVBQUUsUUFBUTtBQUFHLFNBQUssQ0FBQyxFQUFFLFFBQVE7QUFBQSxFQUFHO0FBQzdGLFFBQU0sTUFBTSxJQUFVLHFCQUFlO0FBQ3JDLE1BQUksYUFBYSxZQUFZLElBQVUsc0JBQWdCLFVBQVUsQ0FBQyxDQUFDO0FBQ25FLE1BQUksYUFBYSxVQUFVLElBQVUsc0JBQWdCLFFBQVEsQ0FBQyxDQUFDO0FBQy9ELE1BQUksYUFBYSxNQUFNLElBQVUsc0JBQWdCLElBQUksQ0FBQyxDQUFDO0FBQ3ZELE1BQUksTUFBTyxLQUFJLGFBQWEsU0FBUyxJQUFVLHNCQUFnQixPQUFPLENBQUMsQ0FBQztBQUN4RSxNQUFJLG1CQUFtQjtBQUFHLE1BQUksc0JBQXNCO0FBQ3BELFNBQU87QUFDVDtBQTZCQSxTQUFTLGFBQWEsS0FBaUIsU0FBUyxJQUFJLE1BQU0sTUFBb0I7QUFDNUUsUUFBTSxNQUFrQixDQUFDO0FBQ3pCLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxRQUFRLEtBQUs7QUFDbkMsVUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQy9DLFFBQUksUUFBUTtBQUNaLFFBQUksS0FBSyxHQUFHO0FBQ1YsWUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMzRSxZQUFNLEtBQUssS0FBSyxNQUFNLElBQUksRUFBRSxHQUFHLEtBQUssS0FBSyxNQUFNLElBQUksRUFBRTtBQUNyRCxVQUFJLEtBQUssS0FBSyxLQUFLLEVBQUcsU0FBUSxLQUFLLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxLQUFLLEtBQUs7QUFDekgsVUFBSSxTQUFTLEtBQUssSUFBSSxJQUFLLEtBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxHQUFHLENBQUM7QUFDaEYsVUFBSSxLQUFLLENBQUM7QUFDVixVQUFJLFNBQVMsS0FBSyxJQUFJLElBQUssS0FBSSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxLQUFLLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxLQUFLLEdBQUcsQ0FBQztBQUFBLElBQ2xGLE1BQU8sS0FBSSxLQUFLLENBQUM7QUFBQSxFQUNuQjtBQUNBLFNBQU87QUFDVDtBQUVBLFNBQVMsTUFBTSxLQUFpQixLQUFhLFVBQVUsR0FBRyxRQUFRLE1BQTRCO0FBQzVGLFFBQU0sS0FBSyxRQUFRLGFBQWEsR0FBRyxJQUFJLEtBQUssSUFBSSxDQUFDLE1BQU0sSUFBVSxjQUFRLEtBQUssSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDO0FBQzNHLFFBQU0sSUFBSSxJQUFVLG9CQUFjLEdBQUcsR0FBRztBQUN4QyxJQUFFLHFCQUFxQjtBQUN2QixTQUFPO0FBQ1Q7QUF5SEEsU0FBUyxjQUFjLE9BQW9CLElBQVksSUFBa0M7QUFDdkYsUUFBTSxJQUFJLElBQVUsc0JBQWdCLE9BQU8sRUFBRSxPQUFPLEtBQUssSUFBSSxjQUFjLE9BQU8sZUFBZSxFQUFFLENBQUM7QUFDcEcsSUFBRSxVQUFVLEdBQUcsR0FBRyxFQUFFO0FBQ3BCLElBQUUscUJBQXFCO0FBQ3ZCLFNBQU87QUFDVDtBQThMQSxTQUFTLFVBQVUsVUFBc0IsS0FBbUM7QUFJMUUsUUFBTSxNQUFnQixDQUFDLEdBQUcsTUFBZ0IsQ0FBQztBQUMzQyxXQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsUUFBUSxLQUFLO0FBQ3hDLFVBQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxTQUFTLENBQUM7QUFDdEMsYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBTSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUk7QUFDN0IsVUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUM7QUFBQSxJQUM1RDtBQUFBLEVBQ0Y7QUFDQSxXQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsU0FBUyxHQUFHLEtBQUs7QUFDNUMsYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBTSxJQUFJLElBQUksTUFBTSxHQUFHLEtBQUssSUFBSSxLQUFLLE1BQU0sR0FBRyxLQUFLLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLElBQUksS0FBSztBQUN6RyxVQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUMzQjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLElBQUksSUFBVSxxQkFBZTtBQUNuQyxJQUFFLGFBQWEsWUFBWSxJQUFVLHNCQUFnQixJQUFJLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5RSxJQUFFLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLGFBQWMsSUFBSSxTQUFTLElBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6RixJQUFFLFNBQVMsR0FBRztBQUNkLElBQUUscUJBQXFCO0FBQ3ZCLFNBQU87QUFDVDtBQWlEQSxTQUFTLFFBQVEsS0FBMkIsS0FBbUM7QUFDN0UsUUFBTSxJQUFJLElBQVUsWUFBTSxHQUFHO0FBQzdCLFFBQU0sSUFBSSxJQUFJLGFBQWEsVUFBVSxFQUFFO0FBQ3ZDLFFBQU0sTUFBTSxJQUFJLGFBQWEsSUFBSSxDQUFDO0FBQ2xDLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQUUsUUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQUcsUUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFBRyxRQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUFBLEVBQUc7QUFDNUYsTUFBSSxhQUFhLFNBQVMsSUFBVSxzQkFBZ0IsS0FBSyxDQUFDLENBQUM7QUFDM0QsU0FBTztBQUNUO0FBS0EsU0FBUyxRQUFRLEtBQTJCLE9BQXFDO0FBQy9FLFFBQU0sSUFBSSxJQUFJLGFBQWEsVUFBVSxHQUFHLE1BQU0sSUFBSSxhQUFhLFFBQVE7QUFDdkUsUUFBTSxLQUFLLElBQUksYUFBYSxFQUFFLFFBQVEsQ0FBQztBQUN2QyxXQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsT0FBTyxLQUFLO0FBQ2hDLFVBQU0sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ3ZGLFFBQUksR0FBVztBQUNmLFFBQUksTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUFFLFVBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxVQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEsSUFBRyxXQUNqRCxNQUFNLElBQUk7QUFBRSxVQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsVUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLElBQUcsT0FDOUM7QUFBRSxVQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsVUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLElBQUc7QUFDckMsT0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJO0FBQU8sT0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUk7QUFBQSxFQUM3QztBQUNBLE1BQUksYUFBYSxNQUFNLElBQVUsc0JBQWdCLElBQUksQ0FBQyxDQUFDO0FBQ3ZELFNBQU87QUFDVDtBQThIQSxTQUFTLEtBQUssS0FBaUIsR0FBVyxNQUFNLEdBQUcsS0FBb0M7QUFDckYsUUFBTSxRQUFnQyxDQUFDO0FBQ3ZDLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxTQUFTLEdBQUcsS0FBSztBQUN2QyxVQUFNLElBQUksSUFBVSxjQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzNELFVBQU0sSUFBSSxJQUFVLGNBQVEsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkUsVUFBTSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztBQUFHLFVBQU0sTUFBTSxFQUFFLE9BQU87QUFDakQsUUFBSSxNQUFNLEtBQU07QUFDaEIsVUFBTSxJQUFJLElBQVUsdUJBQWlCLEdBQUcsR0FBRyxNQUFNLElBQUksS0FBSyxLQUFLLEdBQUcsS0FBSztBQUN2RSxVQUFNLElBQUksSUFBVSxpQkFBVyxFQUFFLG1CQUFtQixJQUFVLGNBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQztBQUM3RixNQUFFLGdCQUFnQixDQUFDO0FBQ25CLFVBQU0sSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxlQUFlLEdBQUc7QUFDN0MsTUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLFVBQU0sS0FBSyxDQUFDO0FBQUEsRUFDZDtBQUNBLFFBQU0sTUFBTSxVQUFVLEtBQUs7QUFDM0IsU0FBTyxRQUFRLFNBQVksTUFBTSxRQUFRLEtBQUssR0FBRztBQUNuRDtBQUlBLFNBQVMsS0FBSyxHQUFtQztBQUMvQyxRQUFNLElBQUksSUFBVSxrQkFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNoRCxNQUFJLEVBQUUsQ0FBQyxFQUFHLEdBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUFHLE1BQUksRUFBRSxDQUFDLEVBQUcsR0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQUcsTUFBSSxFQUFFLENBQUMsRUFBRyxHQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDOUUsSUFBRSxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLFNBQU87QUFDVDtBQVVBLFNBQVMsUUFBUSxNQUE4QjtBQUM3QyxTQUFPLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3BIO0FBTUEsU0FBUyxXQUFXLE1BQWMsTUFBc0Y7QUFDdEgsTUFBSSxPQUFPLGFBQWEsWUFBYSxRQUFPO0FBQzVDLFFBQU0sS0FBSyxTQUFTLGNBQWMsUUFBUTtBQUFHLEtBQUcsUUFBUTtBQUFNLEtBQUcsU0FBUztBQUcxRSxRQUFNLE1BQU0sR0FBRyxXQUFXLE1BQU0sRUFBRSxvQkFBb0IsS0FBSyxDQUFDO0FBQXNDLE1BQUksQ0FBQyxJQUFLLFFBQU87QUFDbkgsT0FBSyxLQUFLLElBQUk7QUFDZCxRQUFNLE1BQU0sSUFBVSxvQkFBYyxFQUFFO0FBQ3RDLE1BQUksUUFBUSxJQUFJLFFBQWM7QUFDOUIsTUFBSSxhQUFtQjtBQUN2QixNQUFJLGNBQWM7QUFDbEIsU0FBTztBQUNUO0FBSUEsU0FBUyxJQUFJLE1BQTRCO0FBQ3ZDLE1BQUksSUFBSSxTQUFTO0FBQ2pCLFNBQU8sTUFBTTtBQUFFLFFBQUssSUFBSSxVQUFVLGVBQWdCO0FBQUcsV0FBTyxJQUFJO0FBQUEsRUFBWTtBQUM5RTtBQVVBLFNBQVMsUUFBUSxNQUFjLE1BQWdCLE1BQWMsV0FBVyxNQUFrQztBQUN4RyxTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU0sUUFBUSxDQUFDLE1BQWdCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLFNBQVMsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUU7QUFDdEksUUFBSSxZQUFZLE1BQU0sSUFBSTtBQUFHLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFVBQU0sT0FBTyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxLQUFLLElBQUksU0FBUztBQUNqRSxTQUFLLGFBQWEsR0FBRyx3QkFBd0I7QUFDN0MsU0FBSyxhQUFhLE1BQU0sd0JBQXdCO0FBQ2hELFNBQUssYUFBYSxHQUFHLHFCQUFxQjtBQUMxQyxRQUFJLFlBQVk7QUFBTSxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM3QyxhQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksV0FBVztBQUNuRSxZQUFNLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUMxQixZQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDekIsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFNBQUcsYUFBYSxHQUFHLG9CQUFvQixDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFDdEYsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3JHO0FBRUEsYUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLEtBQUs7QUFDN0IsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJO0FBQUcsWUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLElBQUk7QUFDaEUsVUFBSSxZQUFZLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQVcsVUFBSSxTQUFTLEdBQUcsR0FBRyxLQUFLLEdBQUc7QUFBQSxJQUMzRTtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBSUEsU0FBUyxTQUFTLE1BQWMsTUFBZ0IsTUFBYyxXQUFXLEtBQWtDO0FBQ3pHLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsUUFBSSxZQUFZO0FBQVcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbEQsVUFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUQsVUFBTSxPQUFPLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEtBQUssSUFBSSxTQUFTO0FBQ2pFLFNBQUssYUFBYSxHQUFHLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU87QUFDeEQsU0FBSyxhQUFhLEtBQUssUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTztBQUMxRCxTQUFLLGFBQWEsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLO0FBQ3RELFFBQUksWUFBWTtBQUFNLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzdDLGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxXQUFXLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUNySCxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLO0FBQzlHLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUNyRztBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBSUEsU0FBUyxnQkFBZ0IsTUFBYyxPQUFlLEtBQWEsTUFBMEM7QUFDM0csU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSztBQUN4RCxZQUFNLElBQUksS0FBSyxNQUFNLE9BQU8sT0FBTyxJQUFJLE9BQU8sRUFBRTtBQUNoRCxVQUFJLFlBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFBSyxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ2hFO0FBQ0EsUUFBSSwyQkFBMkI7QUFDL0IsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3hELFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxZQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDekIsU0FBRyxhQUFhLEdBQUcsa0JBQWtCLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLG1CQUFtQjtBQUNsRixVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDdkk7QUFDQSxRQUFJLDJCQUEyQjtBQUFBLEVBQ2pDLENBQUM7QUFDSDtBQUlBLFNBQVMsVUFBVSxNQUFjLFFBQWdCLE1BQTBDO0FBQ3pGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsUUFBSSxZQUFZO0FBQVcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbEQsVUFBTSxLQUFLLElBQUk7QUFDZixhQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsS0FBSztBQUMvQixZQUFNLE9BQU8sT0FBTyxJQUFJLElBQUk7QUFDNUIsWUFBTSxJQUFJLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBSSxZQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQUssVUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLEdBQUcsRUFBRTtBQUNwRSxVQUFJLFlBQVk7QUFBdUIsVUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFLLENBQUM7QUFDeEYsZUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsY0FBTSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksSUFBSTtBQUMxRSxZQUFJLGNBQWMsaUJBQWlCLE9BQU8sSUFBSSxJQUFJLElBQUk7QUFBSyxZQUFJLFlBQVk7QUFDM0UsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLElBQUksR0FBRyxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxLQUFLLENBQUM7QUFBRyxZQUFJLE9BQU8sR0FBRyxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksS0FBSyxDQUFDO0FBQUcsWUFBSSxPQUFPO0FBQUEsTUFDMUg7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFJQSxTQUFTLFNBQVMsTUFBYyxPQUFpQixNQUFjLFVBQVUsSUFBZ0M7QUFDdkcsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsRCxRQUFJLDJCQUEyQjtBQUMvQixhQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsS0FBSztBQUNoQyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFDeEQsWUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQ3pCLFlBQU0sSUFBSSxNQUFNLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQztBQUM5QyxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLO0FBQzlHLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUN2STtBQUNBLFFBQUksMkJBQTJCO0FBQUEsRUFDakMsQ0FBQztBQUNIO0FBV0EsU0FBUyxRQUFRLE1BQWMsTUFBYyxHQUFvQztBQUMvRSxTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU0sTUFBTSxDQUFDLE1BQWdCLEdBQUcsS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFHLFVBQU0sT0FBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSTtBQUNuRCxRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUVsRCxRQUFJLDJCQUEyQjtBQUMvQixhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsVUFBVSxLQUFLLEtBQUs7QUFDekMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksSUFBSTtBQUN0RixZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSztBQUN4RixVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDdkk7QUFFQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsV0FBVyxJQUFJLEtBQUs7QUFDekMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sS0FBSyxFQUFFLGFBQWEsQ0FBQyxNQUFNLE1BQU0sSUFBSTtBQUN4RyxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQyxRQUFRO0FBQUcsU0FBRyxhQUFhLEtBQUssUUFBUSxJQUFJLEVBQUUsQ0FBQyxPQUFPO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQyxLQUFLO0FBQ2xJLFVBQUksWUFBWTtBQUNoQixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUNySztBQUVBLFVBQU0sVUFBVSxFQUFFLFdBQVcsS0FBTSxNQUFNLEtBQUssRUFBRSxVQUFVO0FBQzFELFVBQU0sYUFBYSxDQUFDLEdBQVcsR0FBVyxJQUFZLElBQVksTUFBYztBQUM5RSxVQUFJLFlBQVk7QUFBRyxVQUFJLFVBQVU7QUFBRyxVQUFJLE9BQU8sR0FBRyxDQUFDO0FBQUcsVUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBRyxVQUFJLE9BQU87QUFDN0YsVUFBSSxJQUFJLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLE9BQU8sSUFBSSxHQUFHLENBQUM7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUcsWUFBSSxPQUFPO0FBQUEsTUFBRztBQUNsRyxVQUFJLElBQUksSUFBSSxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLElBQUksR0FBRyxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUFHLFlBQUksT0FBTztBQUFBLE1BQUc7QUFDdEcsVUFBSSxJQUFJLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUcsWUFBSSxPQUFPO0FBQUEsTUFBRztBQUNsRyxVQUFJLElBQUksSUFBSSxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUFHLFlBQUksT0FBTztBQUFBLE1BQUc7QUFBQSxJQUN4RztBQUNBLFFBQUksVUFBVTtBQUNkLGFB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
