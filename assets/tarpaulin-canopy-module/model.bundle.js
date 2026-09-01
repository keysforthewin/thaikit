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

// ../repo/scratch/tarpaulin-canopy-module/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createTarpaulinCanopyModuleModel: () => createTarpaulinCanopyModuleModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "tarpaulin-canopy-module",
  "name": "Tarpaulin Canopy Module",
  "exportName": "TarpaulinCanopyModule",
  "envelope": "Envelope 4.00 x 2.70 x 4.00 m, origin base-center, +Y up.\n * Budget (large): <=4000 triangles, <=4 draw calls, <=3 materials, <=6 unique geometries.",
  "materials": [
    {
      "id": "steel",
      "color": 11974322,
      "roughness": 0.52,
      "metalness": 0.28,
      "vertexColors": true
    },
    {
      "id": "tarp",
      "color": 16777215,
      "roughness": 0.92,
      "metalness": 0,
      "vertexColors": true,
      "doubleSided": true
    }
  ],
  "tiles": [
    {
      "material": "steel",
      "kind": "rust",
      "size": 512,
      "seed": 641,
      "ratio": [
        0.8,
        0.62,
        0.5
      ],
      "density": 52
    },
    {
      "material": "tarp",
      "kind": "tarp",
      "size": 512,
      "seed": 642,
      "tapes": 72,
      "creases": 8,
      "weather": 14,
      "bump": 6e-3
    }
  ],
  "geometry": {
    "components": [
      {
        "id": "frame",
        "name": "Galvanised tube frame and rope ties",
        "material": "steel",
        "uv": "world",
        "uvScale": 0.7,
        "cyls": [
          {
            "at": [
              -1.958,
              1.34,
              -1.958
            ],
            "rt": 0.03,
            "rb": 0.03,
            "h": 2.68,
            "seg": 8,
            "hex": 13027010
          },
          {
            "at": [
              -1.958,
              1.34,
              1.958
            ],
            "rt": 0.03,
            "rb": 0.03,
            "h": 2.68,
            "seg": 8,
            "hex": 11974322
          },
          {
            "at": [
              1.958,
              1.34,
              -1.958
            ],
            "rt": 0.03,
            "rb": 0.03,
            "h": 2.68,
            "seg": 8,
            "hex": 13027010
          },
          {
            "at": [
              1.958,
              1.34,
              1.958
            ],
            "rt": 0.03,
            "rb": 0.03,
            "h": 2.68,
            "seg": 8,
            "hex": 11974322
          },
          {
            "at": [
              0,
              0.11,
              -1.958
            ],
            "rt": 0.03,
            "rb": 0.03,
            "h": 3.916,
            "seg": 8,
            "rz": 1.5707963267948966,
            "hex": 11974322
          },
          {
            "at": [
              0,
              0.11,
              1.958
            ],
            "rt": 0.03,
            "rb": 0.03,
            "h": 3.916,
            "seg": 8,
            "rz": 1.5707963267948966,
            "hex": 11974322
          },
          {
            "at": [
              -1.958,
              0.11,
              0
            ],
            "rt": 0.03,
            "rb": 0.03,
            "h": 3.916,
            "seg": 8,
            "rx": 1.5707963267948966,
            "hex": 13027010
          },
          {
            "at": [
              1.958,
              0.11,
              0
            ],
            "rt": 0.03,
            "rb": 0.03,
            "h": 3.916,
            "seg": 8,
            "rx": 1.5707963267948966,
            "hex": 13027010
          },
          {
            "at": [
              -1.958,
              0.11,
              -1.958
            ],
            "rt": 0.036,
            "rb": 0.036,
            "h": 0.1,
            "seg": 8,
            "hex": 11041364
          },
          {
            "at": [
              -1.958,
              0.03,
              -1.958
            ],
            "rt": 0.034999999999999996,
            "rb": 0.034999999999999996,
            "h": 0.06,
            "seg": 8,
            "hex": 11041364
          },
          {
            "at": [
              -1.958,
              0.11,
              1.958
            ],
            "rt": 0.036,
            "rb": 0.036,
            "h": 0.1,
            "seg": 8,
            "hex": 11041364
          },
          {
            "at": [
              -1.958,
              0.03,
              1.958
            ],
            "rt": 0.034999999999999996,
            "rb": 0.034999999999999996,
            "h": 0.06,
            "seg": 8,
            "hex": 11041364
          },
          {
            "at": [
              1.958,
              0.11,
              -1.958
            ],
            "rt": 0.036,
            "rb": 0.036,
            "h": 0.1,
            "seg": 8,
            "hex": 11041364
          },
          {
            "at": [
              1.958,
              0.03,
              -1.958
            ],
            "rt": 0.034999999999999996,
            "rb": 0.034999999999999996,
            "h": 0.06,
            "seg": 8,
            "hex": 11041364
          },
          {
            "at": [
              1.958,
              0.11,
              1.958
            ],
            "rt": 0.036,
            "rb": 0.036,
            "h": 0.1,
            "seg": 8,
            "hex": 11041364
          },
          {
            "at": [
              1.958,
              0.03,
              1.958
            ],
            "rt": 0.034999999999999996,
            "rb": 0.034999999999999996,
            "h": 0.06,
            "seg": 8,
            "hex": 11041364
          },
          {
            "at": [
              -1.958,
              2.5700000000000003,
              -1.958
            ],
            "rt": 0.04,
            "rb": 0.04,
            "h": 0.1,
            "seg": 8,
            "hex": 12630440
          },
          {
            "at": [
              -1.958,
              2.48,
              -1.958
            ],
            "rt": 0.016,
            "rb": 0.01,
            "h": 0.16,
            "seg": 6,
            "hex": 12630440
          },
          {
            "at": [
              -1.958,
              2.5700000000000003,
              1.958
            ],
            "rt": 0.04,
            "rb": 0.04,
            "h": 0.1,
            "seg": 8,
            "hex": 12630440
          },
          {
            "at": [
              -1.958,
              2.48,
              1.958
            ],
            "rt": 0.016,
            "rb": 0.01,
            "h": 0.16,
            "seg": 6,
            "hex": 12630440
          },
          {
            "at": [
              1.958,
              2.5700000000000003,
              -1.958
            ],
            "rt": 0.04,
            "rb": 0.04,
            "h": 0.1,
            "seg": 8,
            "hex": 12630440
          },
          {
            "at": [
              1.958,
              2.48,
              -1.958
            ],
            "rt": 0.016,
            "rb": 0.01,
            "h": 0.16,
            "seg": 6,
            "hex": 12630440
          },
          {
            "at": [
              1.958,
              2.5700000000000003,
              1.958
            ],
            "rt": 0.04,
            "rb": 0.04,
            "h": 0.1,
            "seg": 8,
            "hex": 12630440
          },
          {
            "at": [
              1.958,
              2.48,
              1.958
            ],
            "rt": 0.016,
            "rb": 0.01,
            "h": 0.16,
            "seg": 6,
            "hex": 12630440
          }
        ],
        "tubes": []
      },
      {
        "id": "tarp",
        "name": "Woven tarpaulin, blue over an orange lining",
        "material": "tarp",
        "uv": "world",
        "uvScale": 1.1,
        "sheets": [
          {
            "hex": 16777215,
            "hexTop": 5992323,
            "hexUnder": 11032111,
            "x0": -2,
            "x1": 2,
            "z0": -2,
            "z1": 2,
            "nx": 16,
            "nz": 16,
            "t": 0.022,
            "heights": [
              [
                2.7,
                2.653168356741242,
                2.6120929034423224,
                2.5743672612787876,
                2.5401418211075697,
                2.512060351446567,
                2.493475404020077,
                2.486177980228632,
                2.489139317390624,
                2.4990749750001657,
                2.5124606388006234,
                2.527700567278894,
                2.546051475367071,
                2.570698605829424,
                2.6045744551844594,
                2.6483538214023676,
                2.7
              ],
              [
                2.6517152674730324,
                2.643967063970052,
                2.5951137391798826,
                2.5520029564397264,
                2.5147245279041464,
                2.4848572898907397,
                2.4644033580851676,
                2.4544323034566298,
                2.454329757586365,
                2.462134280235346,
                2.4757411805785896,
                2.4941974952090025,
                2.5182537237116365,
                2.5498120662687485,
                2.590623785130909,
                2.641091863969028,
                2.649676489923331
              ],
              [
                2.6082656317404798,
                2.59295878221225,
                2.579605195798569,
                2.53215354092903,
                2.49316765688543,
                2.4627748935906757,
                2.441136742945717,
                2.4283394772125684,
                2.4243335410510762,
                2.428960723467206,
                2.442051258785242,
                2.4635282803819156,
                2.493452324022229,
                2.5319768223602592,
                2.579243033302295,
                2.5925258734155245,
                2.607958660143541
              ],
              [
                2.569946606181589,
                2.5474261870508683,
                2.5292077658337715,
                2.5151330206119504,
                2.475154222422859,
                2.4448089268280904,
                2.4223784630943035,
                2.4069446823177367,
                2.399034975112415,
                2.4003330952984405,
                2.412645766907561,
                2.4367910397305286,
                2.472124664445765,
                2.5170137405142965,
                2.534576253819076,
                2.553843377394608,
                2.5744969761037937
              ],
              [
                2.537755662707915,
                2.5088916869664017,
                2.4868331975684015,
                2.471219877526073,
                2.4603604296489645,
                2.4299335816735073,
                2.40680355982594,
                2.389272588909927,
                2.3783158818779713,
                2.3770469157061793,
                2.38880655507909,
                2.415107479082215,
                2.454758388010298,
                2.475500114509421,
                2.4990510726441584,
                2.5234962516355948,
                2.54811162353155
              ],
              [
                2.512929668885544,
                2.479243072131235,
                2.4541625238688174,
                2.437186655482252,
                2.425962085476079,
                2.4173526315436957,
                2.393383607338603,
                2.374566151209524,
                2.3620845323049244,
                2.3597196630068615,
                2.3715285884611585,
                2.399348260451427,
                2.418167038453197,
                2.4431424570821516,
                2.4711632741092053,
                2.4995648183244996,
                2.5273396298951476
              ],
              [
                2.4964152053235766,
                2.4599250773093986,
                2.4324822471530463,
                2.4135771277703806,
                2.4008177608780663,
                2.3910165556580414,
                2.381638507237174,
                2.3624719587292473,
                2.3502981046688918,
                2.3486395936290587,
                2.3612763450707637,
                2.372717055702988,
                2.392894936919716,
                2.419630557270979,
                2.449761674835662,
                2.4805799389340804,
                2.511061375383956
              ],
              [
                2.488477423610763,
                2.4513423946257076,
                2.4221527362653177,
                2.400543613538294,
                2.3848025221315265,
                2.372647330679105,
                2.362263121751561,
                2.3531267634870585,
                2.3429731688155133,
                2.3436951668864685,
                2.3476849868496634,
                2.3595459430758723,
                2.37913023666769,
                2.404877520279515,
                2.4345238108951177,
                2.4661300854752257,
                2.4989632375037765
              ],
              [
                2.488591772313557,
                2.4526944185276287,
                2.422461070741016,
                2.3977847786407573,
                2.3781635265852663,
                2.3629283144248325,
                2.3515471044116913,
                2.343866541967262,
                2.340181629284349,
                2.341101696949117,
                2.3472735667102564,
                2.359087680884239,
                2.3765007126556292,
                2.3990552507538054,
                2.4260876151648048,
                2.4570293869435376,
                2.4916656580543313
              ],
              [
                2.49565202414455,
                2.4622927507914136,
                2.4319037715668785,
                2.4046651390570126,
                2.381422004734616,
                2.3633006411995687,
                2.3511967426272284,
                2.3453684839372824,
                2.342033120569833,
                2.3500231453573117,
                2.358391312643041,
                2.369766410041061,
                2.3842213789477014,
                2.402526278653981,
                2.4257984252249845,
                2.4549947611716854,
                2.490477087656876
              ],
              [
                2.5084081659273503,
                2.4782295375332324,
                2.4487819396121457,
                2.420466611434407,
                2.395166935891979,
                2.3753927619463355,
                2.3631401046794944,
                2.348854897042939,
                2.3486481647734023,
                2.359746240745118,
                2.3791728875815927,
                2.389801443480181,
                2.4014052182245558,
                2.415700255081723,
                2.435176443769229,
                2.4619662885916402,
                2.4968760475301877
              ],
              [
                2.5259616194044012,
                2.4991333083950256,
                2.4718743126937333,
                2.4446729979439974,
                2.4198217107977666,
                2.400375296814212,
                2.371455265013547,
                2.358424238999121,
                2.360128663589707,
                2.3728856841962656,
                2.3927434749568275,
                2.417912725349884,
                2.427414593625798,
                2.4388716597914124,
                2.4553144761481716,
                2.4793386057776443,
                2.511925380087147
              ],
              [
                2.548123381537362,
                2.524715594272976,
                2.5009240158413504,
                2.477175723781936,
                2.4554753836169003,
                2.4144573667639624,
                2.386814100712357,
                2.3745579292534047,
                2.3765329492178178,
                2.38904880980072,
                2.4081456414504263,
                2.43203049161788,
                2.4621153873904444,
                2.472102432372439,
                2.4864423782812572,
                2.5074050545145647,
                2.5358486389733312
              ],
              [
                2.5754908785743167,
                2.5558882271455254,
                2.536743014042833,
                2.5183179868050845,
                2.4719390324458437,
                2.4346229489002056,
                2.4092220039399574,
                2.3972599370907086,
                2.397861502604481,
                2.408232380043085,
                2.425374170336645,
                2.4479292562239743,
                2.4769668195682955,
                2.515196785832055,
                2.5278335906339966,
                2.5452384005977198,
                2.56793918572994
              ],
              [
                2.6092042362472188,
                2.594391343314311,
                2.580880857856173,
                2.5329045574287514,
                2.492409513603507,
                2.4603730352895967,
                2.4380344437991455,
                2.426055809813909,
                2.4240568356915886,
                2.4308233784592783,
                2.445052622194045,
                2.466154676976666,
                2.4945941064370842,
                2.531548383606796,
                2.5781015500553246,
                2.5910691141818805,
                2.6068484745027307
              ],
              [
                2.6504653938867477,
                2.642059423137998,
                2.5919428149419983,
                2.5501361482142864,
                2.5166090512339023,
                2.490827609896307,
                2.4721147699739165,
                2.4601088353112157,
                2.455017566497763,
                2.4575042625704224,
                2.468280665528429,
                2.4876690384198796,
                2.515415585262606,
                2.5508770401932352,
                2.5934611799357343,
                2.643031727750457,
                2.6511548460343013
              ],
              [
                2.7,
                2.649052688636588,
                2.605251745752233,
                2.5703396880889873,
                2.5442076140128314,
                2.5249411071992287,
                2.510112504368889,
                2.4984248983624915,
                2.4906232409632234,
                2.4890858744801316,
                2.496364839570336,
                2.513615651015765,
                2.5399282913300163,
                2.5729962496728827,
                2.610696034835256,
                2.6525390093887258,
                2.7
              ]
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
function createTarpaulinCanopyModuleModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Tarpaulin Canopy Module";
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
      const g2 = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false);
      if (l.cylUV) {
        const cu = Array.isArray(l.cylUV) ? l.cylUV : [l.cylUV, l.cylUV, 0];
        latheUV(g2, g2.getAttribute("position").count / ((l.seg ?? 12) + 1) | 0, l.seg ?? 12, cu[0], cu[1], cu[2] ?? 0);
      }
      if (l.scale) {
        g2.scale(l.scale[0], l.scale[1], l.scale[2]);
        g2.computeVertexNormals();
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
      const g2 = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false);
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
  const root = createTarpaulinCanopyModuleModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogVGFycGF1bGluIENhbm9weSBNb2R1bGUgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcsXG4gKiBpbnN0YW5jaW5nIGFuZCB0aGUgbGF0aGUgaGVscGVycyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzXG4gKiBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgNC4wMCB4IDIuNzAgeCA0LjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAuXG4gKiBCdWRnZXQgKGxhcmdlKTogPD00MDAwIHRyaWFuZ2xlcywgPD00IGRyYXcgY2FsbHMsIDw9MyBtYXRlcmlhbHMsIDw9NiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgU1RSRUVUIEFORCBWRU5ET1IgUFJPUFMgLS0gYSBjb25lLCBhIGJhcnJpZXIsIGEgY2FydCwgYSBzdG9vbC4gVGhlXG4gKiBzaGFyZWQgdm9jYWJ1bGFyeSBpcyB0aGUgVElOVEVEIEJPWCBhbmQgdGhlIHBvbHlsaW5lIFRVQkUgbWVyZ2VkIGludG8gb25lIGdlb21ldHJ5IHBlciBtYXRlcmlhbCxcbiAqIHdpdGggZXZlcnkgY29sb3VyIGRpZmZlcmVuY2UgaW5zaWRlIGEgbWF0ZXJpYWwgY2FycmllZCBhcyBhIHZlcnRleCBjb2xvdXIgb24gYSBXSElURSBtYXRlcmlhbCxcbiAqIGFuZCBzdXJmYWNlIGlkZW50aXR5IChjb3JydWdhdGlvbiwgZ3JpbWUgd2FzaCwgbW9zcywgcGxhbmsgam9pbnRzLCBydXN0KSBkZWxpdmVyZWQgYXMgT05FXG4gKiBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSBwZXIgbWF0ZXJpYWwgcmF0aGVyIHRoYW4gYXMgZ2VvbWV0cnkgb3IgYSBwcm9jZWR1cmFsIHRleHR1cmUgc2V0LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwidGFycGF1bGluLWNhbm9weS1tb2R1bGVcIixcbiAgICBcIm5hbWVcIjogXCJUYXJwYXVsaW4gQ2Fub3B5IE1vZHVsZVwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIlRhcnBhdWxpbkNhbm9weU1vZHVsZVwiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSA0LjAwIHggMi43MCB4IDQuMDAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cC5cXG4gKiBCdWRnZXQgKGxhcmdlKTogPD00MDAwIHRyaWFuZ2xlcywgPD00IGRyYXcgY2FsbHMsIDw9MyBtYXRlcmlhbHMsIDw9NiB1bmlxdWUgZ2VvbWV0cmllcy5cIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzdGVlbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDExOTc0MzIyLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjUyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjI4LFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwidGFycFwiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjkyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlLFxuICAgICAgICBcImRvdWJsZVNpZGVkXCI6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwidGlsZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwic3RlZWxcIixcbiAgICAgICAgXCJraW5kXCI6IFwicnVzdFwiLFxuICAgICAgICBcInNpemVcIjogNTEyLFxuICAgICAgICBcInNlZWRcIjogNjQxLFxuICAgICAgICBcInJhdGlvXCI6IFtcbiAgICAgICAgICAwLjgsXG4gICAgICAgICAgMC42MixcbiAgICAgICAgICAwLjVcbiAgICAgICAgXSxcbiAgICAgICAgXCJkZW5zaXR5XCI6IDUyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwidGFycFwiLFxuICAgICAgICBcImtpbmRcIjogXCJ0YXJwXCIsXG4gICAgICAgIFwic2l6ZVwiOiA1MTIsXG4gICAgICAgIFwic2VlZFwiOiA2NDIsXG4gICAgICAgIFwidGFwZXNcIjogNzIsXG4gICAgICAgIFwiY3JlYXNlc1wiOiA4LFxuICAgICAgICBcIndlYXRoZXJcIjogMTQsXG4gICAgICAgIFwiYnVtcFwiOiAwLjAwNlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICBcImNvbXBvbmVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcImZyYW1lXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiR2FsdmFuaXNlZCB0dWJlIGZyYW1lIGFuZCByb3BlIHRpZXNcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwic3RlZWxcIixcbiAgICAgICAgICBcInV2XCI6IFwid29ybGRcIixcbiAgICAgICAgICBcInV2U2NhbGVcIjogMC43LFxuICAgICAgICAgIFwiY3lsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0xLjk1OCxcbiAgICAgICAgICAgICAgICAxLjM0LFxuICAgICAgICAgICAgICAgIC0xLjk1OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDMsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMyxcbiAgICAgICAgICAgICAgXCJoXCI6IDIuNjgsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEzMDI3MDEwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS45NTgsXG4gICAgICAgICAgICAgICAgMS4zNCxcbiAgICAgICAgICAgICAgICAxLjk1OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDMsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMyxcbiAgICAgICAgICAgICAgXCJoXCI6IDIuNjgsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExOTc0MzIyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAxLjk1OCxcbiAgICAgICAgICAgICAgICAxLjM0LFxuICAgICAgICAgICAgICAgIC0xLjk1OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDMsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMyxcbiAgICAgICAgICAgICAgXCJoXCI6IDIuNjgsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEzMDI3MDEwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAxLjk1OCxcbiAgICAgICAgICAgICAgICAxLjM0LFxuICAgICAgICAgICAgICAgIDEuOTU4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMyxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAzLFxuICAgICAgICAgICAgICBcImhcIjogMi42OCxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE5NzQzMjJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC4xMSxcbiAgICAgICAgICAgICAgICAtMS45NThcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjAzLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDMsXG4gICAgICAgICAgICAgIFwiaFwiOiAzLjkxNixcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExOTc0MzIyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuMTEsXG4gICAgICAgICAgICAgICAgMS45NThcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjAzLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDMsXG4gICAgICAgICAgICAgIFwiaFwiOiAzLjkxNixcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExOTc0MzIyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS45NTgsXG4gICAgICAgICAgICAgICAgMC4xMSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMyxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAzLFxuICAgICAgICAgICAgICBcImhcIjogMy45MTYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwicnhcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMzAyNzAxMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS45NTgsXG4gICAgICAgICAgICAgICAgMC4xMSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMyxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAzLFxuICAgICAgICAgICAgICBcImhcIjogMy45MTYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwicnhcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMzAyNzAxMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTEuOTU4LFxuICAgICAgICAgICAgICAgIDAuMTEsXG4gICAgICAgICAgICAgICAgLTEuOTU4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMzYsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMzYsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjEsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExMDQxMzY0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS45NTgsXG4gICAgICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgICAgICAtMS45NThcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjAzNDk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAzNDk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExMDQxMzY0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS45NTgsXG4gICAgICAgICAgICAgICAgMC4xMSxcbiAgICAgICAgICAgICAgICAxLjk1OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDM2LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDM2LFxuICAgICAgICAgICAgICBcImhcIjogMC4xLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMTA0MTM2NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTEuOTU4LFxuICAgICAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAgICAgMS45NThcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjAzNDk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAzNDk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExMDQxMzY0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAxLjk1OCxcbiAgICAgICAgICAgICAgICAwLjExLFxuICAgICAgICAgICAgICAgIC0xLjk1OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDM2LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDM2LFxuICAgICAgICAgICAgICBcImhcIjogMC4xLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMTA0MTM2NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS45NTgsXG4gICAgICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgICAgICAtMS45NThcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjAzNDk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAzNDk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExMDQxMzY0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAxLjk1OCxcbiAgICAgICAgICAgICAgICAwLjExLFxuICAgICAgICAgICAgICAgIDEuOTU4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMzYsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMzYsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjEsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExMDQxMzY0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAxLjk1OCxcbiAgICAgICAgICAgICAgICAwLjAzLFxuICAgICAgICAgICAgICAgIDEuOTU4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMzQ5OTk5OTk5OTk5OTk5OTYsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMzQ5OTk5OTk5OTk5OTk5OTYsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjA2LFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMTA0MTM2NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTEuOTU4LFxuICAgICAgICAgICAgICAgIDIuNTcwMDAwMDAwMDAwMDAwMyxcbiAgICAgICAgICAgICAgICAtMS45NThcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA0LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDQsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjEsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEyNjMwNDQwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS45NTgsXG4gICAgICAgICAgICAgICAgMi40OCxcbiAgICAgICAgICAgICAgICAtMS45NThcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjAxNixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAxLFxuICAgICAgICAgICAgICBcImhcIjogMC4xNixcbiAgICAgICAgICAgICAgXCJzZWdcIjogNixcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTI2MzA0NDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0xLjk1OCxcbiAgICAgICAgICAgICAgICAyLjU3MDAwMDAwMDAwMDAwMDMsXG4gICAgICAgICAgICAgICAgMS45NThcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA0LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDQsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjEsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEyNjMwNDQwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAtMS45NTgsXG4gICAgICAgICAgICAgICAgMi40OCxcbiAgICAgICAgICAgICAgICAxLjk1OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDE2LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDEsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjE2LFxuICAgICAgICAgICAgICBcInNlZ1wiOiA2LFxuICAgICAgICAgICAgICBcImhleFwiOiAxMjYzMDQ0MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMS45NTgsXG4gICAgICAgICAgICAgICAgMi41NzAwMDAwMDAwMDAwMDAzLFxuICAgICAgICAgICAgICAgIC0xLjk1OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDQsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNCxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTI2MzA0NDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDEuOTU4LFxuICAgICAgICAgICAgICAgIDIuNDgsXG4gICAgICAgICAgICAgICAgLTEuOTU4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMTYsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMTYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDYsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEyNjMwNDQwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAxLjk1OCxcbiAgICAgICAgICAgICAgICAyLjU3MDAwMDAwMDAwMDAwMDMsXG4gICAgICAgICAgICAgICAgMS45NThcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA0LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDQsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjEsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEyNjMwNDQwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAxLjk1OCxcbiAgICAgICAgICAgICAgICAyLjQ4LFxuICAgICAgICAgICAgICAgIDEuOTU4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMTYsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMTYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDYsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEyNjMwNDQwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInR1YmVzXCI6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwidGFycFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIldvdmVuIHRhcnBhdWxpbiwgYmx1ZSBvdmVyIGFuIG9yYW5nZSBsaW5pbmdcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwidGFycFwiLFxuICAgICAgICAgIFwidXZcIjogXCJ3b3JsZFwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAxLjEsXG4gICAgICAgICAgXCJzaGVldHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImhleFwiOiAxNjc3NzIxNSxcbiAgICAgICAgICAgICAgXCJoZXhUb3BcIjogNTk5MjMyMyxcbiAgICAgICAgICAgICAgXCJoZXhVbmRlclwiOiAxMTAzMjExMSxcbiAgICAgICAgICAgICAgXCJ4MFwiOiAtMixcbiAgICAgICAgICAgICAgXCJ4MVwiOiAyLFxuICAgICAgICAgICAgICBcInowXCI6IC0yLFxuICAgICAgICAgICAgICBcInoxXCI6IDIsXG4gICAgICAgICAgICAgIFwibnhcIjogMTYsXG4gICAgICAgICAgICAgIFwibnpcIjogMTYsXG4gICAgICAgICAgICAgIFwidFwiOiAwLjAyMixcbiAgICAgICAgICAgICAgXCJoZWlnaHRzXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAyLjcsXG4gICAgICAgICAgICAgICAgICAyLjY1MzE2ODM1Njc0MTI0MixcbiAgICAgICAgICAgICAgICAgIDIuNjEyMDkyOTAzNDQyMzIyNCxcbiAgICAgICAgICAgICAgICAgIDIuNTc0MzY3MjYxMjc4Nzg3NixcbiAgICAgICAgICAgICAgICAgIDIuNTQwMTQxODIxMTA3NTY5NyxcbiAgICAgICAgICAgICAgICAgIDIuNTEyMDYwMzUxNDQ2NTY3LFxuICAgICAgICAgICAgICAgICAgMi40OTM0NzU0MDQwMjAwNzcsXG4gICAgICAgICAgICAgICAgICAyLjQ4NjE3Nzk4MDIyODYzMixcbiAgICAgICAgICAgICAgICAgIDIuNDg5MTM5MzE3MzkwNjI0LFxuICAgICAgICAgICAgICAgICAgMi40OTkwNzQ5NzUwMDAxNjU3LFxuICAgICAgICAgICAgICAgICAgMi41MTI0NjA2Mzg4MDA2MjM0LFxuICAgICAgICAgICAgICAgICAgMi41Mjc3MDA1NjcyNzg4OTQsXG4gICAgICAgICAgICAgICAgICAyLjU0NjA1MTQ3NTM2NzA3MSxcbiAgICAgICAgICAgICAgICAgIDIuNTcwNjk4NjA1ODI5NDI0LFxuICAgICAgICAgICAgICAgICAgMi42MDQ1NzQ0NTUxODQ0NTk0LFxuICAgICAgICAgICAgICAgICAgMi42NDgzNTM4MjE0MDIzNjc2LFxuICAgICAgICAgICAgICAgICAgMi43XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAyLjY1MTcxNTI2NzQ3MzAzMjQsXG4gICAgICAgICAgICAgICAgICAyLjY0Mzk2NzA2Mzk3MDA1MixcbiAgICAgICAgICAgICAgICAgIDIuNTk1MTEzNzM5MTc5ODgyNixcbiAgICAgICAgICAgICAgICAgIDIuNTUyMDAyOTU2NDM5NzI2NCxcbiAgICAgICAgICAgICAgICAgIDIuNTE0NzI0NTI3OTA0MTQ2NCxcbiAgICAgICAgICAgICAgICAgIDIuNDg0ODU3Mjg5ODkwNzM5NyxcbiAgICAgICAgICAgICAgICAgIDIuNDY0NDAzMzU4MDg1MTY3NixcbiAgICAgICAgICAgICAgICAgIDIuNDU0NDMyMzAzNDU2NjI5OCxcbiAgICAgICAgICAgICAgICAgIDIuNDU0MzI5NzU3NTg2MzY1LFxuICAgICAgICAgICAgICAgICAgMi40NjIxMzQyODAyMzUzNDYsXG4gICAgICAgICAgICAgICAgICAyLjQ3NTc0MTE4MDU3ODU4OTYsXG4gICAgICAgICAgICAgICAgICAyLjQ5NDE5NzQ5NTIwOTAwMjUsXG4gICAgICAgICAgICAgICAgICAyLjUxODI1MzcyMzcxMTYzNjUsXG4gICAgICAgICAgICAgICAgICAyLjU0OTgxMjA2NjI2ODc0ODUsXG4gICAgICAgICAgICAgICAgICAyLjU5MDYyMzc4NTEzMDkwOSxcbiAgICAgICAgICAgICAgICAgIDIuNjQxMDkxODYzOTY5MDI4LFxuICAgICAgICAgICAgICAgICAgMi42NDk2NzY0ODk5MjMzMzFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDIuNjA4MjY1NjMxNzQwNDc5OCxcbiAgICAgICAgICAgICAgICAgIDIuNTkyOTU4NzgyMjEyMjUsXG4gICAgICAgICAgICAgICAgICAyLjU3OTYwNTE5NTc5ODU2OSxcbiAgICAgICAgICAgICAgICAgIDIuNTMyMTUzNTQwOTI5MDMsXG4gICAgICAgICAgICAgICAgICAyLjQ5MzE2NzY1Njg4NTQzLFxuICAgICAgICAgICAgICAgICAgMi40NjI3NzQ4OTM1OTA2NzU3LFxuICAgICAgICAgICAgICAgICAgMi40NDExMzY3NDI5NDU3MTcsXG4gICAgICAgICAgICAgICAgICAyLjQyODMzOTQ3NzIxMjU2ODQsXG4gICAgICAgICAgICAgICAgICAyLjQyNDMzMzU0MTA1MTA3NjIsXG4gICAgICAgICAgICAgICAgICAyLjQyODk2MDcyMzQ2NzIwNixcbiAgICAgICAgICAgICAgICAgIDIuNDQyMDUxMjU4Nzg1MjQyLFxuICAgICAgICAgICAgICAgICAgMi40NjM1MjgyODAzODE5MTU2LFxuICAgICAgICAgICAgICAgICAgMi40OTM0NTIzMjQwMjIyMjksXG4gICAgICAgICAgICAgICAgICAyLjUzMTk3NjgyMjM2MDI1OTIsXG4gICAgICAgICAgICAgICAgICAyLjU3OTI0MzAzMzMwMjI5NSxcbiAgICAgICAgICAgICAgICAgIDIuNTkyNTI1ODczNDE1NTI0NSxcbiAgICAgICAgICAgICAgICAgIDIuNjA3OTU4NjYwMTQzNTQxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAyLjU2OTk0NjYwNjE4MTU4OSxcbiAgICAgICAgICAgICAgICAgIDIuNTQ3NDI2MTg3MDUwODY4MyxcbiAgICAgICAgICAgICAgICAgIDIuNTI5MjA3NzY1ODMzNzcxNSxcbiAgICAgICAgICAgICAgICAgIDIuNTE1MTMzMDIwNjExOTUwNCxcbiAgICAgICAgICAgICAgICAgIDIuNDc1MTU0MjIyNDIyODU5LFxuICAgICAgICAgICAgICAgICAgMi40NDQ4MDg5MjY4MjgwOTA0LFxuICAgICAgICAgICAgICAgICAgMi40MjIzNzg0NjMwOTQzMDM1LFxuICAgICAgICAgICAgICAgICAgMi40MDY5NDQ2ODIzMTc3MzY3LFxuICAgICAgICAgICAgICAgICAgMi4zOTkwMzQ5NzUxMTI0MTUsXG4gICAgICAgICAgICAgICAgICAyLjQwMDMzMzA5NTI5ODQ0MDUsXG4gICAgICAgICAgICAgICAgICAyLjQxMjY0NTc2NjkwNzU2MSxcbiAgICAgICAgICAgICAgICAgIDIuNDM2NzkxMDM5NzMwNTI4NixcbiAgICAgICAgICAgICAgICAgIDIuNDcyMTI0NjY0NDQ1NzY1LFxuICAgICAgICAgICAgICAgICAgMi41MTcwMTM3NDA1MTQyOTY1LFxuICAgICAgICAgICAgICAgICAgMi41MzQ1NzYyNTM4MTkwNzYsXG4gICAgICAgICAgICAgICAgICAyLjU1Mzg0MzM3NzM5NDYwOCxcbiAgICAgICAgICAgICAgICAgIDIuNTc0NDk2OTc2MTAzNzkzN1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMi41Mzc3NTU2NjI3MDc5MTUsXG4gICAgICAgICAgICAgICAgICAyLjUwODg5MTY4Njk2NjQwMTcsXG4gICAgICAgICAgICAgICAgICAyLjQ4NjgzMzE5NzU2ODQwMTUsXG4gICAgICAgICAgICAgICAgICAyLjQ3MTIxOTg3NzUyNjA3MyxcbiAgICAgICAgICAgICAgICAgIDIuNDYwMzYwNDI5NjQ4OTY0NSxcbiAgICAgICAgICAgICAgICAgIDIuNDI5OTMzNTgxNjczNTA3MyxcbiAgICAgICAgICAgICAgICAgIDIuNDA2ODAzNTU5ODI1OTQsXG4gICAgICAgICAgICAgICAgICAyLjM4OTI3MjU4ODkwOTkyNyxcbiAgICAgICAgICAgICAgICAgIDIuMzc4MzE1ODgxODc3OTcxMyxcbiAgICAgICAgICAgICAgICAgIDIuMzc3MDQ2OTE1NzA2MTc5MyxcbiAgICAgICAgICAgICAgICAgIDIuMzg4ODA2NTU1MDc5MDksXG4gICAgICAgICAgICAgICAgICAyLjQxNTEwNzQ3OTA4MjIxNSxcbiAgICAgICAgICAgICAgICAgIDIuNDU0NzU4Mzg4MDEwMjk4LFxuICAgICAgICAgICAgICAgICAgMi40NzU1MDAxMTQ1MDk0MjEsXG4gICAgICAgICAgICAgICAgICAyLjQ5OTA1MTA3MjY0NDE1ODQsXG4gICAgICAgICAgICAgICAgICAyLjUyMzQ5NjI1MTYzNTU5NDgsXG4gICAgICAgICAgICAgICAgICAyLjU0ODExMTYyMzUzMTU1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAyLjUxMjkyOTY2ODg4NTU0NCxcbiAgICAgICAgICAgICAgICAgIDIuNDc5MjQzMDcyMTMxMjM1LFxuICAgICAgICAgICAgICAgICAgMi40NTQxNjI1MjM4Njg4MTc0LFxuICAgICAgICAgICAgICAgICAgMi40MzcxODY2NTU0ODIyNTIsXG4gICAgICAgICAgICAgICAgICAyLjQyNTk2MjA4NTQ3NjA3OSxcbiAgICAgICAgICAgICAgICAgIDIuNDE3MzUyNjMxNTQzNjk1NyxcbiAgICAgICAgICAgICAgICAgIDIuMzkzMzgzNjA3MzM4NjAzLFxuICAgICAgICAgICAgICAgICAgMi4zNzQ1NjYxNTEyMDk1MjQsXG4gICAgICAgICAgICAgICAgICAyLjM2MjA4NDUzMjMwNDkyNDQsXG4gICAgICAgICAgICAgICAgICAyLjM1OTcxOTY2MzAwNjg2MTUsXG4gICAgICAgICAgICAgICAgICAyLjM3MTUyODU4ODQ2MTE1ODUsXG4gICAgICAgICAgICAgICAgICAyLjM5OTM0ODI2MDQ1MTQyNyxcbiAgICAgICAgICAgICAgICAgIDIuNDE4MTY3MDM4NDUzMTk3LFxuICAgICAgICAgICAgICAgICAgMi40NDMxNDI0NTcwODIxNTE2LFxuICAgICAgICAgICAgICAgICAgMi40NzExNjMyNzQxMDkyMDUzLFxuICAgICAgICAgICAgICAgICAgMi40OTk1NjQ4MTgzMjQ0OTk2LFxuICAgICAgICAgICAgICAgICAgMi41MjczMzk2Mjk4OTUxNDc2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAyLjQ5NjQxNTIwNTMyMzU3NjYsXG4gICAgICAgICAgICAgICAgICAyLjQ1OTkyNTA3NzMwOTM5ODYsXG4gICAgICAgICAgICAgICAgICAyLjQzMjQ4MjI0NzE1MzA0NjMsXG4gICAgICAgICAgICAgICAgICAyLjQxMzU3NzEyNzc3MDM4MDYsXG4gICAgICAgICAgICAgICAgICAyLjQwMDgxNzc2MDg3ODA2NjMsXG4gICAgICAgICAgICAgICAgICAyLjM5MTAxNjU1NTY1ODA0MTQsXG4gICAgICAgICAgICAgICAgICAyLjM4MTYzODUwNzIzNzE3NCxcbiAgICAgICAgICAgICAgICAgIDIuMzYyNDcxOTU4NzI5MjQ3MyxcbiAgICAgICAgICAgICAgICAgIDIuMzUwMjk4MTA0NjY4ODkxOCxcbiAgICAgICAgICAgICAgICAgIDIuMzQ4NjM5NTkzNjI5MDU4NyxcbiAgICAgICAgICAgICAgICAgIDIuMzYxMjc2MzQ1MDcwNzYzNyxcbiAgICAgICAgICAgICAgICAgIDIuMzcyNzE3MDU1NzAyOTg4LFxuICAgICAgICAgICAgICAgICAgMi4zOTI4OTQ5MzY5MTk3MTYsXG4gICAgICAgICAgICAgICAgICAyLjQxOTYzMDU1NzI3MDk3OSxcbiAgICAgICAgICAgICAgICAgIDIuNDQ5NzYxNjc0ODM1NjYyLFxuICAgICAgICAgICAgICAgICAgMi40ODA1Nzk5Mzg5MzQwODA0LFxuICAgICAgICAgICAgICAgICAgMi41MTEwNjEzNzUzODM5NTZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDIuNDg4NDc3NDIzNjEwNzYzLFxuICAgICAgICAgICAgICAgICAgMi40NTEzNDIzOTQ2MjU3MDc2LFxuICAgICAgICAgICAgICAgICAgMi40MjIxNTI3MzYyNjUzMTc3LFxuICAgICAgICAgICAgICAgICAgMi40MDA1NDM2MTM1MzgyOTQsXG4gICAgICAgICAgICAgICAgICAyLjM4NDgwMjUyMjEzMTUyNjUsXG4gICAgICAgICAgICAgICAgICAyLjM3MjY0NzMzMDY3OTEwNSxcbiAgICAgICAgICAgICAgICAgIDIuMzYyMjYzMTIxNzUxNTYxLFxuICAgICAgICAgICAgICAgICAgMi4zNTMxMjY3NjM0ODcwNTg1LFxuICAgICAgICAgICAgICAgICAgMi4zNDI5NzMxNjg4MTU1MTMzLFxuICAgICAgICAgICAgICAgICAgMi4zNDM2OTUxNjY4ODY0Njg1LFxuICAgICAgICAgICAgICAgICAgMi4zNDc2ODQ5ODY4NDk2NjM0LFxuICAgICAgICAgICAgICAgICAgMi4zNTk1NDU5NDMwNzU4NzIzLFxuICAgICAgICAgICAgICAgICAgMi4zNzkxMzAyMzY2Njc2OSxcbiAgICAgICAgICAgICAgICAgIDIuNDA0ODc3NTIwMjc5NTE1LFxuICAgICAgICAgICAgICAgICAgMi40MzQ1MjM4MTA4OTUxMTc3LFxuICAgICAgICAgICAgICAgICAgMi40NjYxMzAwODU0NzUyMjU3LFxuICAgICAgICAgICAgICAgICAgMi40OTg5NjMyMzc1MDM3NzY1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAyLjQ4ODU5MTc3MjMxMzU1NyxcbiAgICAgICAgICAgICAgICAgIDIuNDUyNjk0NDE4NTI3NjI4NyxcbiAgICAgICAgICAgICAgICAgIDIuNDIyNDYxMDcwNzQxMDE2LFxuICAgICAgICAgICAgICAgICAgMi4zOTc3ODQ3Nzg2NDA3NTczLFxuICAgICAgICAgICAgICAgICAgMi4zNzgxNjM1MjY1ODUyNjYzLFxuICAgICAgICAgICAgICAgICAgMi4zNjI5MjgzMTQ0MjQ4MzI1LFxuICAgICAgICAgICAgICAgICAgMi4zNTE1NDcxMDQ0MTE2OTEzLFxuICAgICAgICAgICAgICAgICAgMi4zNDM4NjY1NDE5NjcyNjIsXG4gICAgICAgICAgICAgICAgICAyLjM0MDE4MTYyOTI4NDM0OSxcbiAgICAgICAgICAgICAgICAgIDIuMzQxMTAxNjk2OTQ5MTE3LFxuICAgICAgICAgICAgICAgICAgMi4zNDcyNzM1NjY3MTAyNTY0LFxuICAgICAgICAgICAgICAgICAgMi4zNTkwODc2ODA4ODQyMzksXG4gICAgICAgICAgICAgICAgICAyLjM3NjUwMDcxMjY1NTYyOTIsXG4gICAgICAgICAgICAgICAgICAyLjM5OTA1NTI1MDc1MzgwNTQsXG4gICAgICAgICAgICAgICAgICAyLjQyNjA4NzYxNTE2NDgwNDgsXG4gICAgICAgICAgICAgICAgICAyLjQ1NzAyOTM4Njk0MzUzNzYsXG4gICAgICAgICAgICAgICAgICAyLjQ5MTY2NTY1ODA1NDMzMTNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDIuNDk1NjUyMDI0MTQ0NTUsXG4gICAgICAgICAgICAgICAgICAyLjQ2MjI5Mjc1MDc5MTQxMzYsXG4gICAgICAgICAgICAgICAgICAyLjQzMTkwMzc3MTU2Njg3ODUsXG4gICAgICAgICAgICAgICAgICAyLjQwNDY2NTEzOTA1NzAxMjYsXG4gICAgICAgICAgICAgICAgICAyLjM4MTQyMjAwNDczNDYxNixcbiAgICAgICAgICAgICAgICAgIDIuMzYzMzAwNjQxMTk5NTY4NyxcbiAgICAgICAgICAgICAgICAgIDIuMzUxMTk2NzQyNjI3MjI4NCxcbiAgICAgICAgICAgICAgICAgIDIuMzQ1MzY4NDgzOTM3MjgyNCxcbiAgICAgICAgICAgICAgICAgIDIuMzQyMDMzMTIwNTY5ODMzLFxuICAgICAgICAgICAgICAgICAgMi4zNTAwMjMxNDUzNTczMTE3LFxuICAgICAgICAgICAgICAgICAgMi4zNTgzOTEzMTI2NDMwNDEsXG4gICAgICAgICAgICAgICAgICAyLjM2OTc2NjQxMDA0MTA2MSxcbiAgICAgICAgICAgICAgICAgIDIuMzg0MjIxMzc4OTQ3NzAxNCxcbiAgICAgICAgICAgICAgICAgIDIuNDAyNTI2Mjc4NjUzOTgxLFxuICAgICAgICAgICAgICAgICAgMi40MjU3OTg0MjUyMjQ5ODQ1LFxuICAgICAgICAgICAgICAgICAgMi40NTQ5OTQ3NjExNzE2ODU0LFxuICAgICAgICAgICAgICAgICAgMi40OTA0NzcwODc2NTY4NzZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDIuNTA4NDA4MTY1OTI3MzUwMyxcbiAgICAgICAgICAgICAgICAgIDIuNDc4MjI5NTM3NTMzMjMyNCxcbiAgICAgICAgICAgICAgICAgIDIuNDQ4NzgxOTM5NjEyMTQ1NyxcbiAgICAgICAgICAgICAgICAgIDIuNDIwNDY2NjExNDM0NDA3LFxuICAgICAgICAgICAgICAgICAgMi4zOTUxNjY5MzU4OTE5NzksXG4gICAgICAgICAgICAgICAgICAyLjM3NTM5Mjc2MTk0NjMzNTUsXG4gICAgICAgICAgICAgICAgICAyLjM2MzE0MDEwNDY3OTQ5NDQsXG4gICAgICAgICAgICAgICAgICAyLjM0ODg1NDg5NzA0MjkzOSxcbiAgICAgICAgICAgICAgICAgIDIuMzQ4NjQ4MTY0NzczNDAyMyxcbiAgICAgICAgICAgICAgICAgIDIuMzU5NzQ2MjQwNzQ1MTE4LFxuICAgICAgICAgICAgICAgICAgMi4zNzkxNzI4ODc1ODE1OTI3LFxuICAgICAgICAgICAgICAgICAgMi4zODk4MDE0NDM0ODAxODEsXG4gICAgICAgICAgICAgICAgICAyLjQwMTQwNTIxODIyNDU1NTgsXG4gICAgICAgICAgICAgICAgICAyLjQxNTcwMDI1NTA4MTcyMyxcbiAgICAgICAgICAgICAgICAgIDIuNDM1MTc2NDQzNzY5MjI5LFxuICAgICAgICAgICAgICAgICAgMi40NjE5NjYyODg1OTE2NDAyLFxuICAgICAgICAgICAgICAgICAgMi40OTY4NzYwNDc1MzAxODc3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAyLjUyNTk2MTYxOTQwNDQwMTIsXG4gICAgICAgICAgICAgICAgICAyLjQ5OTEzMzMwODM5NTAyNTYsXG4gICAgICAgICAgICAgICAgICAyLjQ3MTg3NDMxMjY5MzczMzMsXG4gICAgICAgICAgICAgICAgICAyLjQ0NDY3Mjk5Nzk0Mzk5NzQsXG4gICAgICAgICAgICAgICAgICAyLjQxOTgyMTcxMDc5Nzc2NjYsXG4gICAgICAgICAgICAgICAgICAyLjQwMDM3NTI5NjgxNDIxMixcbiAgICAgICAgICAgICAgICAgIDIuMzcxNDU1MjY1MDEzNTQ3LFxuICAgICAgICAgICAgICAgICAgMi4zNTg0MjQyMzg5OTkxMjEsXG4gICAgICAgICAgICAgICAgICAyLjM2MDEyODY2MzU4OTcwNyxcbiAgICAgICAgICAgICAgICAgIDIuMzcyODg1Njg0MTk2MjY1NixcbiAgICAgICAgICAgICAgICAgIDIuMzkyNzQzNDc0OTU2ODI3NSxcbiAgICAgICAgICAgICAgICAgIDIuNDE3OTEyNzI1MzQ5ODg0LFxuICAgICAgICAgICAgICAgICAgMi40Mjc0MTQ1OTM2MjU3OTgsXG4gICAgICAgICAgICAgICAgICAyLjQzODg3MTY1OTc5MTQxMjQsXG4gICAgICAgICAgICAgICAgICAyLjQ1NTMxNDQ3NjE0ODE3MTYsXG4gICAgICAgICAgICAgICAgICAyLjQ3OTMzODYwNTc3NzY0NDMsXG4gICAgICAgICAgICAgICAgICAyLjUxMTkyNTM4MDA4NzE0N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMi41NDgxMjMzODE1MzczNjIsXG4gICAgICAgICAgICAgICAgICAyLjUyNDcxNTU5NDI3Mjk3NixcbiAgICAgICAgICAgICAgICAgIDIuNTAwOTI0MDE1ODQxMzUwNCxcbiAgICAgICAgICAgICAgICAgIDIuNDc3MTc1NzIzNzgxOTM2LFxuICAgICAgICAgICAgICAgICAgMi40NTU0NzUzODM2MTY5MDAzLFxuICAgICAgICAgICAgICAgICAgMi40MTQ0NTczNjY3NjM5NjI0LFxuICAgICAgICAgICAgICAgICAgMi4zODY4MTQxMDA3MTIzNTcsXG4gICAgICAgICAgICAgICAgICAyLjM3NDU1NzkyOTI1MzQwNDcsXG4gICAgICAgICAgICAgICAgICAyLjM3NjUzMjk0OTIxNzgxNzgsXG4gICAgICAgICAgICAgICAgICAyLjM4OTA0ODgwOTgwMDcyLFxuICAgICAgICAgICAgICAgICAgMi40MDgxNDU2NDE0NTA0MjYzLFxuICAgICAgICAgICAgICAgICAgMi40MzIwMzA0OTE2MTc4OCxcbiAgICAgICAgICAgICAgICAgIDIuNDYyMTE1Mzg3MzkwNDQ0NCxcbiAgICAgICAgICAgICAgICAgIDIuNDcyMTAyNDMyMzcyNDM5LFxuICAgICAgICAgICAgICAgICAgMi40ODY0NDIzNzgyODEyNTcyLFxuICAgICAgICAgICAgICAgICAgMi41MDc0MDUwNTQ1MTQ1NjQ3LFxuICAgICAgICAgICAgICAgICAgMi41MzU4NDg2Mzg5NzMzMzEyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAyLjU3NTQ5MDg3ODU3NDMxNjcsXG4gICAgICAgICAgICAgICAgICAyLjU1NTg4ODIyNzE0NTUyNTQsXG4gICAgICAgICAgICAgICAgICAyLjUzNjc0MzAxNDA0MjgzMyxcbiAgICAgICAgICAgICAgICAgIDIuNTE4MzE3OTg2ODA1MDg0NSxcbiAgICAgICAgICAgICAgICAgIDIuNDcxOTM5MDMyNDQ1ODQzNyxcbiAgICAgICAgICAgICAgICAgIDIuNDM0NjIyOTQ4OTAwMjA1NixcbiAgICAgICAgICAgICAgICAgIDIuNDA5MjIyMDAzOTM5OTU3NCxcbiAgICAgICAgICAgICAgICAgIDIuMzk3MjU5OTM3MDkwNzA4NixcbiAgICAgICAgICAgICAgICAgIDIuMzk3ODYxNTAyNjA0NDgxLFxuICAgICAgICAgICAgICAgICAgMi40MDgyMzIzODAwNDMwODUsXG4gICAgICAgICAgICAgICAgICAyLjQyNTM3NDE3MDMzNjY0NSxcbiAgICAgICAgICAgICAgICAgIDIuNDQ3OTI5MjU2MjIzOTc0MyxcbiAgICAgICAgICAgICAgICAgIDIuNDc2OTY2ODE5NTY4Mjk1NSxcbiAgICAgICAgICAgICAgICAgIDIuNTE1MTk2Nzg1ODMyMDU1LFxuICAgICAgICAgICAgICAgICAgMi41Mjc4MzM1OTA2MzM5OTY2LFxuICAgICAgICAgICAgICAgICAgMi41NDUyMzg0MDA1OTc3MTk4LFxuICAgICAgICAgICAgICAgICAgMi41Njc5MzkxODU3Mjk5NFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMi42MDkyMDQyMzYyNDcyMTg4LFxuICAgICAgICAgICAgICAgICAgMi41OTQzOTEzNDMzMTQzMTEsXG4gICAgICAgICAgICAgICAgICAyLjU4MDg4MDg1Nzg1NjE3MyxcbiAgICAgICAgICAgICAgICAgIDIuNTMyOTA0NTU3NDI4NzUxNCxcbiAgICAgICAgICAgICAgICAgIDIuNDkyNDA5NTEzNjAzNTA3LFxuICAgICAgICAgICAgICAgICAgMi40NjAzNzMwMzUyODk1OTY3LFxuICAgICAgICAgICAgICAgICAgMi40MzgwMzQ0NDM3OTkxNDU1LFxuICAgICAgICAgICAgICAgICAgMi40MjYwNTU4MDk4MTM5MDksXG4gICAgICAgICAgICAgICAgICAyLjQyNDA1NjgzNTY5MTU4ODYsXG4gICAgICAgICAgICAgICAgICAyLjQzMDgyMzM3ODQ1OTI3ODMsXG4gICAgICAgICAgICAgICAgICAyLjQ0NTA1MjYyMjE5NDA0NSxcbiAgICAgICAgICAgICAgICAgIDIuNDY2MTU0Njc2OTc2NjY2LFxuICAgICAgICAgICAgICAgICAgMi40OTQ1OTQxMDY0MzcwODQyLFxuICAgICAgICAgICAgICAgICAgMi41MzE1NDgzODM2MDY3OTYsXG4gICAgICAgICAgICAgICAgICAyLjU3ODEwMTU1MDA1NTMyNDYsXG4gICAgICAgICAgICAgICAgICAyLjU5MTA2OTExNDE4MTg4MDUsXG4gICAgICAgICAgICAgICAgICAyLjYwNjg0ODQ3NDUwMjczMDdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDIuNjUwNDY1MzkzODg2NzQ3NyxcbiAgICAgICAgICAgICAgICAgIDIuNjQyMDU5NDIzMTM3OTk4LFxuICAgICAgICAgICAgICAgICAgMi41OTE5NDI4MTQ5NDE5OTgzLFxuICAgICAgICAgICAgICAgICAgMi41NTAxMzYxNDgyMTQyODY0LFxuICAgICAgICAgICAgICAgICAgMi41MTY2MDkwNTEyMzM5MDIzLFxuICAgICAgICAgICAgICAgICAgMi40OTA4Mjc2MDk4OTYzMDcsXG4gICAgICAgICAgICAgICAgICAyLjQ3MjExNDc2OTk3MzkxNjUsXG4gICAgICAgICAgICAgICAgICAyLjQ2MDEwODgzNTMxMTIxNTcsXG4gICAgICAgICAgICAgICAgICAyLjQ1NTAxNzU2NjQ5Nzc2MyxcbiAgICAgICAgICAgICAgICAgIDIuNDU3NTA0MjYyNTcwNDIyNCxcbiAgICAgICAgICAgICAgICAgIDIuNDY4MjgwNjY1NTI4NDI5LFxuICAgICAgICAgICAgICAgICAgMi40ODc2NjkwMzg0MTk4Nzk2LFxuICAgICAgICAgICAgICAgICAgMi41MTU0MTU1ODUyNjI2MDYsXG4gICAgICAgICAgICAgICAgICAyLjU1MDg3NzA0MDE5MzIzNTIsXG4gICAgICAgICAgICAgICAgICAyLjU5MzQ2MTE3OTkzNTczNDMsXG4gICAgICAgICAgICAgICAgICAyLjY0MzAzMTcyNzc1MDQ1NyxcbiAgICAgICAgICAgICAgICAgIDIuNjUxMTU0ODQ2MDM0MzAxM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMi43LFxuICAgICAgICAgICAgICAgICAgMi42NDkwNTI2ODg2MzY1ODgsXG4gICAgICAgICAgICAgICAgICAyLjYwNTI1MTc0NTc1MjIzMyxcbiAgICAgICAgICAgICAgICAgIDIuNTcwMzM5Njg4MDg4OTg3MyxcbiAgICAgICAgICAgICAgICAgIDIuNTQ0MjA3NjE0MDEyODMxNCxcbiAgICAgICAgICAgICAgICAgIDIuNTI0OTQxMTA3MTk5MjI4NyxcbiAgICAgICAgICAgICAgICAgIDIuNTEwMTEyNTA0MzY4ODg5LFxuICAgICAgICAgICAgICAgICAgMi40OTg0MjQ4OTgzNjI0OTE1LFxuICAgICAgICAgICAgICAgICAgMi40OTA2MjMyNDA5NjMyMjM0LFxuICAgICAgICAgICAgICAgICAgMi40ODkwODU4NzQ0ODAxMzE2LFxuICAgICAgICAgICAgICAgICAgMi40OTYzNjQ4Mzk1NzAzMzYsXG4gICAgICAgICAgICAgICAgICAyLjUxMzYxNTY1MTAxNTc2NSxcbiAgICAgICAgICAgICAgICAgIDIuNTM5OTI4MjkxMzMwMDE2MyxcbiAgICAgICAgICAgICAgICAgIDIuNTcyOTk2MjQ5NjcyODgyNyxcbiAgICAgICAgICAgICAgICAgIDIuNjEwNjk2MDM0ODM1MjU2LFxuICAgICAgICAgICAgICAgICAgMi42NTI1MzkwMDkzODg3MjU4LFxuICAgICAgICAgICAgICAgICAgMi43XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbi8qKiBMYXRoZUdlb21ldHJ5IHNoYXJlcyB0aGUgY29ybmVyIHZlcnRleCBiZXR3ZWVuIGFuIGVuZCBkaXNjIGFuZCB0aGUgc2lkZSB3YWxsLCBzb1xuICogIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIHRpbHRzIHRoZSB3YWxsJ3MgZmlyc3QgcmluZyA0NSBkZWdyZWVzIHRvd2FyZCB0aGUgZGlzYyBhbmQgdGhlIGhhcm5lc3Mgc2hhZGVzXG4gKiAgYSBkYXJrIGdyYWRpZW50IHRoZXJlIC0tIGEgcmluZyB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBhcyBhIEhPTEUgdW5kZXIgdGhlIHN0YWlubGVzcyBiaW4ncyBjYXAuXG4gKiAgSW5zZXJ0aW5nIGEgcG9pbnQgMC44IG1tIHBhc3QgZXZlcnkgc2hhcnAgY29ybmVyICg+IDcwIGRlZ3JlZXMpIGNvbmZpbmVzIHRoZSBhdmVyYWdlZCBub3JtYWwgdG8gdGhhdFxuICogIHNsaXZlci4gQ29zdHMgb25lIHJpbmcgcGVyIGNvcm5lcjsgcGFzcyBgc2hhcnAgPSBmYWxzZWAgd2hlcmUgdGhlIGJ1ZGdldCBjYW5ub3QgY2FycnkgaXQuICovXG5mdW5jdGlvbiBzcGxpdENvcm5lcnMocHRzOiBudW1iZXJbXVtdLCBtaW5EZWcgPSA3MCwgZXBzID0gMC4wMDA4KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHAgPSBwdHNbaV0sIGEgPSBwdHNbaSAtIDFdLCBiID0gcHRzW2kgKyAxXTtcbiAgICBsZXQgc2hhcnAgPSBmYWxzZTtcbiAgICBpZiAoYSAmJiBiKSB7XG4gICAgICBjb25zdCB1eCA9IHBbMF0gLSBhWzBdLCB1eSA9IHBbMV0gLSBhWzFdLCB2eCA9IGJbMF0gLSBwWzBdLCB2eSA9IGJbMV0gLSBwWzFdO1xuICAgICAgY29uc3QgbHUgPSBNYXRoLmh5cG90KHV4LCB1eSksIGx2ID0gTWF0aC5oeXBvdCh2eCwgdnkpO1xuICAgICAgaWYgKGx1ID4gMCAmJiBsdiA+IDApIHNoYXJwID0gTWF0aC5hY29zKE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCAodXggKiB2eCArIHV5ICogdnkpIC8gKGx1ICogbHYpKSkpID4gbWluRGVnICogTWF0aC5QSSAvIDE4MDtcbiAgICAgIGlmIChzaGFycCAmJiBsdSA+IDMgKiBlcHMpIG91dC5wdXNoKFtwWzBdIC0gdXggLyBsdSAqIGVwcywgcFsxXSAtIHV5IC8gbHUgKiBlcHNdKTtcbiAgICAgIG91dC5wdXNoKHApO1xuICAgICAgaWYgKHNoYXJwICYmIGx2ID4gMyAqIGVwcykgb3V0LnB1c2goW3BbMF0gKyB2eCAvIGx2ICogZXBzLCBwWzFdICsgdnkgLyBsdiAqIGVwc10pO1xuICAgIH0gZWxzZSBvdXQucHVzaChwKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBsYXRoZShwdHM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyLCB5T2Zmc2V0ID0gMCwgc2hhcnAgPSB0cnVlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB2ID0gKHNoYXJwID8gc3BsaXRDb3JuZXJzKHB0cykgOiBwdHMpLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5tYXgocFswXSwgMCksIHBbMV0gKyB5T2Zmc2V0KSk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeSh2LCBzZWcpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBzdGVwcGVkIHRhcGVyIGFzIGEgbGF0aGUgcHJvZmlsZTogYHJpbmdzYCBhbHRlcm5hdGluZyBvdXQvaW4gcmFkaWkgY2xpbWJpbmcgZnJvbSB5MCB0byB5MS5cbiAqICBPbmUgZ2VvbWV0cnksIG9uZSBkcmF3IGNhbGwsIGFuZCB0aGUgc3RlcCBjb3VudCBpcyBhIHByb2ZpbGUtcG9pbnQgY291bnQgcmF0aGVyIHRoYW4gYSBtZXNoXG4gKiAgY291bnQgLS0gd2hpY2ggaXMgd2hhdCBrZWVwcyBhIDIwLXJpbmcgY2hlZGkgc3BpcmUgaW5zaWRlIGEgMzItZ2VvbWV0cnkgY2VpbGluZy4gKi9cbmZ1bmN0aW9uIHJpbmdlZFRhcGVyKHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHIwOiBudW1iZXIsIHIxOiBudW1iZXIsIHJpbmdzOiBudW1iZXIsIGJ1bGdlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJpbmdzOyBpKyspIHtcbiAgICBjb25zdCB0ID0gaSAvIHJpbmdzO1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgciA9IHIwICsgKHIxIC0gcjApICogdDtcbiAgICBjb25zdCBzdGVwID0gKHkxIC0geTApIC8gcmluZ3M7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeV0pO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHkgKyBzdGVwICogMC40NV0pO1xuICAgIHB0cy5wdXNoKFtyLCB5ICsgc3RlcCAqIDAuNTVdKTtcbiAgfVxuICBwdHMucHVzaChbcjEsIHkxXSk7XG4gIHJldHVybiBwdHM7XG59XG5cblxuLyoqXG4gKiBUaGUgUkVERU5URUQgc3F1YXJlIHBsYW4gLS0gYSBzcXVhcmUgd2hvc2UgZm91ciBjb3JuZXJzIGFyZSBjdXQgYmFjayBpbiB0d28gcmlnaHQtYW5nbGVkIHN0ZXBzLlxuICogSXQgaXMgdGhlIHBsYW4gb2YgYSBUaGFpIGNoZWRpJ3MgdGVycmFjZSBhbmQgb2YgYSBwcmFuZydzIGJhc2UsIGFuZCBidWlsZGluZyBpdCBhcyBhIFNoYXBlIHRoYXRcbiAqIGlzIHRoZW4gZXh0cnVkZWQgaXMgbm90IGEgc3R5bGlzdGljIGNob2ljZTogdGhlIG9idmlvdXMgYWx0ZXJuYXRpdmUsIGEgd2lkZSBib3ggY3Jvc3NlZCBieSBhXG4gKiBkZWVwIGJveCwgcHV0cyB0aGUgdHdvIGJveGVzJyB0b3AgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSBvdmVyIHRoZWlyIHdob2xlXG4gKiBpbnRlcnNlY3Rpb24sIHdoaWNoIHotZmlnaHRzLiBPbmUgZXh0cnVzaW9uIG9mIG9uZSBjbG9zZWQgcGxhbiBoYXMgbm8gaW50ZXJpb3IgY29pbmNpZGVuY2UgYXRcbiAqIGFsbC5cbiAqXG4gKiBgYWAgaXMgdGhlIGhhbGYtd2lkdGggYWNyb3NzIHRoZSBmbGF0czsgYHJgIGlzIHRoZSBkZXB0aCBvZiBlYWNoIHJlZGVudCBzdGVwLlxuICovXG5mdW5jdGlvbiByZWRlbnRlZFNoYXBlKGE6IG51bWJlciwgcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBxdWFkID0gW1thLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGFdXTtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgcXVhZCkge1xuICAgICAgLy8gcm90OTBeaywgYXBwbGllZCBrIHRpbWVzOiAoeCwgeikgLT4gKC16LCB4KVxuICAgICAgbGV0IHB4ID0geCwgcHogPSB6O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHsgY29uc3QgdCA9IHB4OyBweCA9IC1wejsgcHogPSB0OyB9XG4gICAgICBwdHMucHVzaChbcHgsIHB6XSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYmV0d2VlbiB0d28gaGVpZ2h0cy4gRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBhbG9uZyArWiwgc28gdGhlIHJlc3VsdCBpc1xuICogIHJvdGF0ZWQgb250byArWTsgYC1NYXRoLlBJIC8gMmAgYWJvdXQgWCBtYXBzICtaIHRvICtZIGFuZCBsZWF2ZXMgdGhlIHBsYW4ncyBvd24geCBhcyB4LiAqL1xuZnVuY3Rpb24gZXh0cnVkZVNsYWIoc2hhcGU6IFRIUkVFLlNoYXBlLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeTEgLSB5MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgLy8gcm90YXRlWCgtUEkvMikgbWFwcyAoeCwgeSwgeikgLT4gKHgsIHosIC15KSwgc28gdGhlIGV4dHJ1c2lvbiBkZXB0aCBiZWNvbWVzIGhlaWdodCBhbmQgdGhlXG4gIC8vIHBsYW4ncyBvd24gc2Vjb25kIGF4aXMgYmVjb21lcyAtei4gRXZlcnkgcGxhbiBoZXJlIGlzIGZvdXItZm9sZCBzeW1tZXRyaWMsIHNvIHRoYXQgc2lnbiBpc1xuICAvLyBpbW1hdGVyaWFsOyB3aGF0IG1hdHRlcnMgaXMgdGhhdCB0aGUgc2xhYiBub3cgcnVucyBVUCBmcm9tIHk9MCBhbmQgbmVlZHMgbGlmdGluZyBieSB5MC5cbiAgZy5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKDAsIHkwLCAwKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIHNxdWFyZSBwbGFuIHdpdGggYSByZWN0YW5ndWxhciBOT1RDSCBjdXQgaW50byBpdHMgK1ggZmFjZSAtLSB0aGUgc3RhaXIgd2VsbCBvZiBhIHRlbXBsZVxuICogdGVycmFjZS4gQ3V0dGluZyB0aGUgc3RhaXIgb3V0IG9mIHRoZSBwbGFuIHJhdGhlciB0aGFuIGhhbmdpbmcgaXQgb2ZmIHRoZSBvdXRzaWRlIGlzIHdoYXQga2VlcHNcbiAqIGFuIGFzeW1tZXRyaWMgZmVhdHVyZSBpbnNpZGUgYSBzeW1tZXRyaWMgZGVjbGFyZWQgZW52ZWxvcGU6IGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDkgbVxuICogdGVycmFjZSB3b3VsZCBwdXQgdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWQgd2lkdGggb24gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRTcXVhcmUoYTogbnVtYmVyLCBub3RjaEhhbGZaOiBudW1iZXIsIHhJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2EsIC1hXSwgW2EsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCBub3RjaEhhbGZaXSxcbiAgICAgICAgICAgICAgIFthLCBub3RjaEhhbGZaXSwgW2EsIGFdLCBbLWEsIGFdLCBbLWEsIC1hXV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgUkVDVEFOR1VMQVIgcGxhbiB3aXRoIGEgbm90Y2ggY3V0IGludG8gaXRzICtaIGZhY2UuIFRoZSBzcXVhcmUgdmVyc2lvbiBhYm92ZSBpcyB3aGF0IGEgY2hlZGkgb3JcbiAqIGEgcHJhbmcgdGVycmFjZSBuZWVkczsgYSBoYWxsIHRoYXQgaXMgdHdpY2UgYXMgbG9uZyBhcyBpdCBpcyB3aWRlIG5lZWRzIHRoZSB0d28gaGFsZi1leHRlbnRzIGtlcHRcbiAqIGFwYXJ0LCBhbmQgaXRzIHN0YWlyIGlzIG9uIGEgc2hvcnQgZW5kIHJhdGhlciB0aGFuIGEgbG9uZyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRSZWN0KGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2h4LCAtaHpdLCBbaHgsIGh6XSwgW254LCBoel0sIFtueCwgeklubmVyXSwgWy1ueCwgeklubmVyXSwgWy1ueCwgaHpdLCBbLWh4LCBoel0sIFstaHgsIC1oel1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBUaGUgY3Jvc3Mtc2VjdGlvbiBvZiBvbmUgcm9vZiB0aWVyLCBhcyBhIGNsb3NlZCB0cmFwZXpvaWQgaW4gWFk6IGVhdmVzIGF0ICgrLWhhbGZCYXNlLCB5MClcbiAqIHJpc2luZyBhdCBgcGl0Y2hgIChhcyBhIHRhbmdlbnQpIHRvIGEgZmxhdCB0b3AgYXQgeTEuXG4gKlxuICogVGhhaSB0ZW1wbGUgcm9vZnMgbmVzdCwgYW5kIHRoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlIFRSVU5DQVRJT04uIFRocmVlIGZ1bGwgZ2FibGVzIGF0IG9uZVxuICogcGl0Y2ggY2Fubm90IG5lc3QgLS0gdGhlIHdpZGVzdCB0aWVyJ3MgcmlkZ2Ugd291bGQgYmUgdGhlIGhpZ2hlc3QsIHdoaWNoIGlzIHVwc2lkZSBkb3duLiBXaGF0XG4gKiBhY3R1YWxseSBoYXBwZW5zIGlzIHRoYXQgZWFjaCBsb3dlciB0aWVyIGlzIGN1dCBvZmYgYXQgdGhlIGhlaWdodCB3aGVyZSB0aGUgbmV4dCB0aWVyJ3MgZWF2ZXNcbiAqIGJlZ2luLCBhbmQgaXRzIHVwcGVyIHBhcnQgaXMgaGlkZGVuIGJlaGluZCB0aGF0IHRpZXI7IG9ubHkgdGhlIHRvcG1vc3QgdGllciBpcyBhIHJlYWwgZ2FibGUsXG4gKiBjbG9zZWQgYnkgcGFzc2luZyB5MSBhdCB0aGUgYXBleC5cbiAqL1xuZnVuY3Rpb24gdGllclByb2ZpbGUoaGFsZkJhc2U6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBwaXRjaDtcbiAgY29uc3QgaGFsZlRvcCA9IGhhbGZCYXNlIC0gaW5zZXQ7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtaGFsZkJhc2UsIHkwKTtcbiAgc2hhcGUubGluZVRvKGhhbGZCYXNlLCB5MCk7XG4gIGlmIChoYWxmVG9wID4gMC4wMikge1xuICAgIHNoYXBlLmxpbmVUbyhoYWxmVG9wLCB5MSk7XG4gICAgc2hhcGUubGluZVRvKC1oYWxmVG9wLCB5MSk7XG4gIH0gZWxzZSB7XG4gICAgc2hhcGUubGluZVRvKDAsIHkwICsgaGFsZkJhc2UgKiBwaXRjaCk7ICAgLy8gYSByZWFsIHJpZGdlOiB0aGUgdG9wbW9zdCB0aWVyIGNsb3NlcyB0byBhIHBvaW50XG4gIH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIEhJUCBST09GIHdpdGggYSBjb25jYXZlIHNsb3BlIGFuZCB1cHN3ZXB0IGNvcm5lcnMgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZiwgd2hpY2ggbm9uZSBvZiB0aGVcbiAqIG90aGVyIHNoYXBlIGhlbHBlcnMgaGVyZSBjYW4gZXhwcmVzcy5cbiAqXG4gKiBJdCBpcyBnZW5lcmF0ZWQgYXMgYSByaW5nIG9mIHJlY3RhbmdsZXMgY2xpbWJpbmcgZnJvbSB0aGUgZWF2ZXMgdG8gdGhlIHJpZGdlIHJhdGhlciB0aGFuIGFzIGFuXG4gKiBleHRydWRlZCBwcm9maWxlLCBiZWNhdXNlIGEgaGlwIHNsb3BlcyBvbiBhbGwgZm91ciBzaWRlczogYW4gZXh0cnVzaW9uIGdpdmVzIHZlcnRpY2FsIGdhYmxlIGVuZHMsXG4gKiB3aGljaCBpcyBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAqXG4gKiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyBgKDEgLSB0KV5jdXJ2ZUV4cGAsIGFuZCB0aGUgZXhwb25lbnQgbXVzdCBiZSBBQk9WRSBvbmUuIFRoZSBzbG9wZVxuICogYXQgYW55IGhlaWdodCBpcyBkeS9keCwgc28gYSBwbGFuIHRoYXQgc2hyaW5rcyBGQVNUIGZvciBhIGdpdmVuIHJpc2UgaXMgYSBzaGFsbG93IHNsb3BlOiB3aXRoXG4gKiBxID4gMSB0aGUgZGVyaXZhdGl2ZSBxKDEtdCleKHEtMSkgaXMgbGFyZ2UgYXQgdGhlIGVhdmVzIGFuZCBzbWFsbCBhdCB0aGUgcmlkZ2UsIHdoaWNoIGlzIHNoYWxsb3dcbiAqIGVhdmVzIGFuZCBhIHN0ZWVwIHJpZGdlIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YuIEJlbG93IG9uZSBpdCBpcyB0aGUgb3RoZXIgd2F5IHJvdW5kIGFuZCBidWlsZHMgYVxuICogZmxhdC10b3BwZWQgdGVudCwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYXR0ZW1wdCBoZXJlIHJlbmRlcmVkLiBBIGxpbmVhciBzaHJpbmsgZ2l2ZXMgdGhlXG4gKiBzdHJhaWdodCBweXJhbWlkIG9mIGEgaGlwIHJvb2YgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuXG4gKlxuICogYGNvcm5lckxpZnRgIHJhaXNlcyBhbmQgcHVzaGVzIG91dCB0aGUgZm91ciBlYXZlcyBjb3JuZXJzLCB0YXBlcmluZyBhd2F5IGJ5IGEgdGhpcmQgb2YgdGhlIHdheVxuICogdXAuIFRoYXQgdXBzd2VlcCBpcyB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmcgdGhpbmcgYWJvdXQgdGhlIHJvb2YsIGFuZCBpdCBpcyB3aHkgdGhlIHBsYW5cbiAqIGhhbGYtd2lkdGggcGFzc2VkIGluIG11c3QgbGVhdmUgcm9vbTogdGhlIGNvcm5lcnMgZW5kIHVwIGZ1cnRoZXIgb3V0IHRoYW4gdGhlIGVhdmVzIGxpbmUuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGNsb3NlZCBzb2xpZCAtLSBvdXRlciBzdXJmYWNlLCBhIHNvZmZpdCBgZHJvcGAgYmVsb3cgdGhlIGVhdmVzLCBhbmQgYSBmYXNjaWEgYmFuZFxuICogYmV0d2VlbiB0aGVtLiBBbiBvcGVuIHNoZWxsIHdvdWxkIGxldCB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55XG4gKiBsb3cgYW5nbGUuXG4gKi9cbmZ1bmN0aW9uIGhpcFJvb2YoaHg6IG51bWJlciwgaHo6IG51bWJlciwgcmlkZ2VIYWxmWjogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICBjdXJ2ZUV4cDogbnVtYmVyLCBzdGVwczogbnVtYmVyLCBkcm9wOiBudW1iZXIsIGNvcm5lckxpZnQ6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gRUlHSFQgcG9pbnRzIHBlciByaW5nLCBub3QgZm91cjogdGhlIGZvdXIgY29ybmVycyBhbmQgdGhlIGZvdXIgZWRnZSBtaWRwb2ludHMuIFdpdGggZm91ciB0aGVcbiAgLy8gY29ybmVyIGxpZnQgaGFzIG5vd2hlcmUgdG8gZmFsbCBhd2F5IHRvIGFuZCByYWlzZXMgdGhlIEVOVElSRSBlYXZlcyBsaW5lLCB3aGljaCBidWlsdCBhIHNhZGRsZVxuICAvLyBpbnN0ZWFkIG9mIGEgcm9vZi4gVGhlIG1pZHBvaW50cyBhcmUgd2hhdCBob2xkIHRoZSBlYXZlcyBkb3duIGJldHdlZW4gdGhlIGNvcm5lcnMuXG4gIC8vXG4gIC8vIFRoZSBvcmRlciBpcyAoK3gsLXopLCBtaWQsICgteCwteiksIG1pZCwgKC14LCt6KSwgbWlkLCAoK3gsK3opLCBtaWQsIHdoaWNoIGlzIGNvdW50ZXItY2xvY2t3aXNlXG4gIC8vIHNlZW4gZnJvbSBBQk9WRSAtLSB0aGUgd2luZGluZyBhbiB1cHdhcmQtZmFjaW5nIHN1cmZhY2UgbmVlZHMuIFdvdW5kIHRoZSBvdGhlciB3YXkgdGhlIHdob2xlXG4gIC8vIHJvb2YgcmVuZGVycyBpbnNpZGUgb3V0LCB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBibGFjayBtZW1icmFuZSByYXRoZXIgdGhhbiBhIG1pc3Rha2UuXG4gIGNvbnN0IHJpbmcgPSAodDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEgLSB0LCBjdXJ2ZUV4cCk7XG4gICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB0IC8gMC4zNCksIDIpO1xuICAgIGNvbnN0IGxpZnQgPSBjb3JuZXJMaWZ0ICogZywgb3V0ID0gMSArIDAuMDQ1ICogZztcbiAgICBjb25zdCBheCA9IGh4ICogZiAqIG91dCwgYXogPSAocmlkZ2VIYWxmWiArIChoeiAtIHJpZGdlSGFsZlopICogZikgKiBvdXQ7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCBjID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSArIGxpZnQsIHpdO1xuICAgIGNvbnN0IG0gPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5LCB6XTtcbiAgICByZXR1cm4gW2MoYXgsIC1heiksIG0oMCwgLWF6KSwgYygtYXgsIC1heiksIG0oLWF4LCAwKSxcbiAgICAgICAgICAgIGMoLWF4LCBheiksIG0oMCwgYXopLCBjKGF4LCBheiksIG0oYXgsIDApXTtcbiAgfTtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBsZXQgcHJldiA9IHJpbmcoMCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSByaW5nKGkgLyBzdGVwcyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgICBwdXNoKHByZXZba10sIHByZXZbazJdLCBjdXJbazJdKTtcbiAgICAgIHB1c2gocHJldltrXSwgY3VyW2syXSwgY3VyW2tdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICAvLyBGYXNjaWEgYmFuZCBhbmQgc29mZml0LCBzbyB0aGUgcm9vZiBpcyBhIHNvbGlkIHJhdGhlciB0aGFuIGEgc2hlbGwuIEFuIG9wZW4gc2hlbGwgbGV0cyB0aGVcbiAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55IGxvdyBhbmdsZS5cbiAgY29uc3QgZSA9IHJpbmcoMCk7XG4gIGNvbnN0IGxvdyA9IGUubWFwKChwKSA9PiBbcFswXSwgcFsxXSAtIGRyb3AsIHBbMl1dKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgIHB1c2gobG93W2tdLCBlW2tdLCBlW2syXSk7XG4gICAgcHVzaChsb3dba10sIGVbazJdLCBsb3dbazJdKTtcbiAgfVxuICBmb3IgKGxldCBrID0gMTsgayA8IDc7IGsrKykgcHVzaChsb3dbMF0sIGxvd1trICsgMV0sIGxvd1trXSk7ICAgLy8gc29mZml0IGZhbiwgZmFjaW5nIGRvd25cblxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFJJQkJFRCBkb21lIC0tIGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIHdob3NlIHJhZGl1cyBpcyBtb2R1bGF0ZWQgYXJvdW5kIHRoZSBheGlzLCBzbyBpdCByZWFkc1xuICogYXMgdGhlIG1lbG9uLXJpYmJlZCBkb21lIG9mIGEgbW9zcXVlIHJhdGhlciB0aGFuIGEgc21vb3RoIGhlbWlzcGhlcmUuXG4gKlxuICogTGF0aGVHZW9tZXRyeSBjYW5ub3QgZG8gdGhpczogYSBsYXRoZSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdCBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCByaWJzIGFyZVxuICogYSB2YXJpYXRpb24gQVJPVU5EIHRoZSBheGlzLCBub3QgYWxvbmcgaXQuIFNvIHRoZSBzdXJmYWNlIGlzIGdlbmVyYXRlZCBkaXJlY3RseSwgc2FtcGxpbmdcbiAqIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgIHBlciBzZWN0b3IuIFRoZSByaWJzIGFyZSB0aGUgcmVhc29uIHRoZSBkb21lIGlzIHJlY29nbmlzYWJsZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbSAtLSBhIHNtb290aCBncmVlbiBoZW1pc3BoZXJlIHJlYWRzIGFzIGEgd2F0ZXIgdGFuay5cbiAqL1xuZnVuY3Rpb24gcmliYmVkRG9tZShwcm9maWxlOiBudW1iZXJbXVtdLCByaWJzOiBudW1iZXIsIGFtcDogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsbGV5PzogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgY29sOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUaGUgcmlicyBhcmUgbm90IG9ubHkgYSBzaGFwZS4gT24gdGhlIG1vc3F1ZSdzIGRvbWVzIHRoZSBjcmVzdHMgYXJlIHBhbGUgYW5kIHRoZSB2YWxsZXlzIGFyZVxuICAvLyBncmVlbiwgYW5kIHRoYXQgc3RyaXBlIGlzIG1vc3Qgb2Ygd2hhdCB0aGUgZG9tZSByZWFkcyBhcyBhdCBkaXN0YW5jZS4gSXQgaXMgY2FycmllZCBhcyBhXG4gIC8vIHBlci12ZXJ0ZXggTVVMVElQTElFUiBvZmYgdGhlIHNhbWUgY29zaW5lIHRoYXQgc2hhcGVzIHRoZSByaWIgLS0gdHdvIG1lYXN1cmVtZW50cywgdGhlIGNyZXN0XG4gIC8vIGNvbG91ciBvbiB0aGUgbWF0ZXJpYWwgYW5kIHRoZSB2YWxsZXkgYXMgdGhlIHJhdGlvIGJldHdlZW4gdGhlbSAtLSBzbyB0aGUgc3RyaXBpbmcgY29zdHMgYW5cbiAgLy8gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgdGV4dHVyZSBzZXQgb3IgYSBzZWNvbmQgZHJhdyBjYWxsLlxuICBjb25zdCB0aW50ID0gKGo6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsbGV5KSByZXR1cm4gWzEsIDEsIDFdO1xuICAgIC8vIFJhaXNlZCB0byAwLjU1IHJhdGhlciB0aGFuIGxlZnQgbGluZWFyLiBBIGNvc2luZSBzcGVuZHMgaGFsZiBpdHMgYXJlYSBuZWFyIGVhY2ggZXh0cmVtZSwgYW5kXG4gICAgLy8gdGhhdCByZW5kZXJzIGEgZG9tZSB0aGF0IGlzIHBhbGUgb3ZlcmFsbCB3aGVyZSB0aGUgcGxhdGUncyBpcyBncmVlbiBvdmVyYWxsOiB0aGUgY3Jlc3QgaXMgYVxuICAgIC8vIG5hcnJvdyBoaWdobGlnaHQgb24gYSByZWFsIHJpYiwgbm90IGhhbGYgb2YgaXQuIFRoZSBleHBvbmVudCB3aWRlbnMgdGhlIHZhbGxleS5cbiAgICBjb25zdCBmID0gTWF0aC5wb3coKDEgLSBNYXRoLmNvcyhyaWJzICogKChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnKSkpIC8gMiwgMC41NSk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFBPSU5URUQgYXJjaCBwbGF0ZSAtLSB0aGUgdHdvLWNlbnRyZWQgYXJjaCBvZiBhIG1vc3F1ZSwgbm90IHRoZSBoYWxmLXJvdW5kIG9mIGEgUm9tYW4gb25lLlxuICogYGFyY2hlZFBsYXRlYCBhYm92ZSBzd2VlcHMgYSBzaW5nbGUgc2VtaWNpcmNsZSwgd2hpY2ggaXMgdGhlIHdyb25nIGFyY2ggaGVyZSBhbmQgcmVhZHMgYXMgYVxuICogcmFpbHdheSB2aWFkdWN0OyB0aGlzIG9uZSBydW5zIGVhY2ggc2lkZSB1cCB0byBhIHNoYXJlZCBhcGV4IHRocm91Z2ggYSBxdWFkcmF0aWMsIHdoaWNoIGdpdmVzIHRoZVxuICogb2dlZSBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnRlZEFyY2hTaGFwZSh3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBidWlsZCA9ICh0YXJnZXQ6IFRIUkVFLlNoYXBlIHwgVEhSRUUuUGF0aCwgd3c6IG51bWJlciwgc3A6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3dyAvIDI7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2wpO1xuICAgIHRhcmdldC5saW5lVG8oaHcsIHNwKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhodywgc3AgKyByaXNlICogMC43MiwgMCwgc3AgKyByaXNlKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtaHcsIHNwICsgcmlzZSAqIDAuNzIsIC1odywgc3ApO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzbCk7XG4gICAgdGFyZ2V0LmNsb3NlUGF0aCgpO1xuICB9O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBidWlsZChzaGFwZSwgdywgc3ByaW5nLCBhcGV4UmlzZSwgc2lsbCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgYnVpbGQocCwgaG9sZS53LCBob2xlLnNwcmluZywgaG9sZS5hcGV4UmlzZSwgaG9sZS5zaWxsKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFRBUEVSSU5HIFRVQkUgYWxvbmcgK1osIGJ1aWx0IGZyb20gYSBsaXN0IG9mIHN0YXRpb25zLiBFYWNoIHN0YXRpb24gaXNcbiAqIFt6LCBjZW50cmVYLCBjZW50cmVZLCByYWRpdXNYLCByYWRpdXNZXSwgYW5kIGNvbnNlY3V0aXZlIHN0YXRpb25zIGFyZSBqb2luZWQgYnkgYSByaW5nIG9mIGBzZWdgXG4gKiBwb2ludHMsIHNvIHRoZSByYWRpdXMsIHRoZSBjZW50cmUgYW5kIHRoZSBlbGxpcHNlIHJhdGlvIGNhbiBhbGwgdmFyeSBhbG9uZyB0aGUgbGVuZ3RoLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgT1JHQU5JQyBmb3JtIGluIHRoZSB3aG9sZSBraXQsIGFuZCBpdCBleGlzdHMgZm9yIG9uZSBwcm9wOiBhIHJlY2xpbmluZyBmaWd1cmUgaXNcbiAqIGEgbG9uZyBzb2Z0IG1hc3Mgd2hvc2Ugc2VjdGlvbiBjaGFuZ2VzIGF0IGV2ZXJ5IHBvaW50IGFsb25nIGl0IC0tIHNob3VsZGVyIHRvIHdhaXN0IHRvIGhpcCB0b1xuICogY2FsZiAtLSBhbmQgbmVpdGhlciBhIGxhdGhlIG5vciBhIHN0YWNrIG9mIGJveGVzIGNhbiBzYXkgdGhhdC4gQSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIGx5aW5nXG4gKiBib2R5IGlzIG5vdCBhIGxvdy1wb2x5IGJvZHksIGl0IGlzIGEgcGlsZSBvZiBsdWdnYWdlLlxuICpcbiAqIEEgc3RhdGlvbiB3aXRoIGEgcmFkaXVzIGF0IG9yIG5lYXIgemVybyBjbG9zZXMgdGhlIHR1YmUsIHNvIHRoZSBlbmRzIGNhbiBiZSBjYXBwZWQgYnkgdGhlXG4gKiBzdGF0aW9uIGxpc3QgaXRzZWxmIHJhdGhlciB0aGFuIGJ5IGEgc2VwYXJhdGUgZmFuLlxuICovXG5mdW5jdGlvbiB0dWJlQWxvbmcoc3RhdGlvbnM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBJTkRFWEVELCB3aXRoIHNoYXJlZCByaW5nIHZlcnRpY2VzLCBzbyBjb21wdXRlVmVydGV4Tm9ybWFscyBhdmVyYWdlcyBhY3Jvc3MgdGhlIHF1YWRzIGFuZCB0aGVcbiAgLy8gc3VyZmFjZSBzaGFkZXMgc21vb3RoLiBUaGUgZmlyc3QgYnVpbGQgZW1pdHRlZCBsb29zZSB0cmlhbmdsZXMsIGFuZCBhIGZsYXQtc2hhZGVkIHNvZnQgYm9keVxuICAvLyBzaG93cyBldmVyeSBzdGF0aW9uIGFzIGEgY3JlYXNlIC0tIGEgcmVjbGluaW5nIGZpZ3VyZSB0aGF0IGxvb2tlZCBjcnVtcGxlZCByYXRoZXIgdGhhbiBkcmFwZWQuXG4gIC8vXG4gIC8vIEEgc2l4dGggc3RhdGlvbiBlbGVtZW50IGBmbGF0WWAgQ0xBTVBTIHRoZSByaW5nJ3MgdW5kZXJzaWRlIHRvIHRoYXQgaGVpZ2h0LiBBIGJvZHkgcmVzdGluZyBvblxuICAvLyB0aGUgZ3JvdW5kIGlzIG5vdCBhIGZsb2F0aW5nIGVsbGlwc2U6IGl0IHNwcmVhZHMgd2hlcmUgaXQgYmVhcnMsIGFuZCBhbiB1bmNsYW1wZWQgdHViZSByZWFkcyBhc1xuICAvLyBhIHNhdXNhZ2Ugb24gYSB0YWJsZS4gVGhlIGNsYW1wIGlzIGEgc29mdCBvbmUgLS0gdGhlIHJpbmcga2VlcHMgaXRzIHdpZHRoIGFuZCBsb3NlcyBpdHMgZHJvb3AgLS1cbiAgLy8gc28gdGhlIGNyZWFzZSBpdCBsZWF2ZXMgaXMgdGhlIGNvbnRhY3QgZWRnZSByYXRoZXIgdGhhbiBhIGN1dC5cbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbeiwgY3gsIGN5LCByeCwgcnksIGZsYXRZXSA9IHN0YXRpb25zW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IHRoID0gaiAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5zaW4odGgpICogcng7XG4gICAgICBsZXQgeSA9IGN5ICsgTWF0aC5jb3ModGgpICogcnk7XG4gICAgICBpZiAoZmxhdFkgIT09IHVuZGVmaW5lZCAmJiB5IDwgZmxhdFkpIHkgPSBmbGF0WTtcbiAgICAgIHBvcy5wdXNoKHgsIHksIHopO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjID0gKGkgKyAxKSAqIHNlZyArIChqICsgMSkgJSBzZWcsIGQgPSBpICogc2VnICsgKGogKyAxKSAlIHNlZztcbiAgICAgIGlkeC5wdXNoKGEsIGIsIGMsIGEsIGMsIGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgocG9zLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5zZXRJbmRleChpZHgpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2ZWhpY2xlIGhlbHBlcnMgKi9cblxuLyoqIFBhaW50IGEgd2hvbGUgZ2VvbWV0cnkgb25lIHZlcnRleCBjb2xvdXIuIEV2ZXJ5IHZlaGljbGUgbWF0ZXJpYWwgaGVyZSBpcyBXSElURSB3aXRoXG4gKiAgdmVydGV4Q29sb3JzIG9uLCBzbyBhIGNvbG91ciBkaWZmZXJlbmNlIGNvc3RzIGFuIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIG1hdGVyaWFsOiB0aGUgYm9keSdzXG4gKiAgdHdvLXRvbmUsIHRoZSB0eXJlIGFnYWluc3QgaXRzIHJpbSwgYW4gYW1iZXIgaW5kaWNhdG9yIG9uIGEgYmxhY2sgYnVtcGVyIGFsbCByaWRlIG9uZSBzaGFkZXIuXG4gKiAgVmVydGV4IGNvbG91cnMgbXVsdGlwbHkgaW4gTElORUFSIHNwYWNlLCBzbyB0aGUgaGV4IGlzIGNvbnZlcnRlZCB0aHJvdWdoIFRIUkVFLkNvbG9yLCB3aGljaFxuICogIGRvZXMgdGhlIHNSR0ItdG8tbGluZWFyIHN0ZXAuICovXG5mdW5jdGlvbiB0aW50R2VvKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCk7XG4gIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEJveC1wcm9qZWN0IHdvcmxkLW1ldHJlIFVWcyBzbyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIChtdWQsIHJ1c3QsIGNvcnJ1Z2F0aW9uKSByZXBlYXRzXG4gKiAgYXQgYSByZWFsIHNpemUgb24gZXZlcnkgZmFjZS4gYHNjYWxlYCBpcyBtZXRyZXMgcGVyIHRpbGUuIFRoZSBkb21pbmFudCBub3JtYWwgYXhpcyBwaWNrcyB0aGVcbiAqICBwYWlyIG9mIHdvcmxkIGF4ZXMgdXNlZCwgc28gYSByb29mIHJlYWRzICh4LCB6KSBhbmQgYSBzaWRlIHJlYWRzICh6LCB5KS4gKi9cbmZ1bmN0aW9uIHdvcmxkVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG5ybS5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgIGlmIChheCA+PSBheSAmJiBheCA+PSBheikgeyB1ID0gcC5nZXRaKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgZWxzZSBpZiAoYXkgPj0gYXopIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WihpKTsgfVxuICAgIGVsc2UgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKipcbiAqIFNJREUtUFJPRklMRSBFWFRSVVNJT046IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyAodGhlIHZlaGljbGUncyBzaWRlIHNpbGhvdWV0dGUsIHdoZWVsXG4gKiBhcmNoZXMgaW5jbHVkZWQgYXMgbm90Y2hlcykgc3dlcHQgYWNyb3NzIHRoZSBmdWxsIHdpZHRoLCB0aGVuIHNoYXBlZCBwZXIgdmVydGV4OlxuICpcbiAqICAtIGB0dW1ibGVgICBuYXJyb3dzIHRoZSBzZWN0aW9uIGFib3ZlIHRoZSBiZWx0IGxpbmUgLS0geCBpcyBzY2FsZWQgYnkgKDEgLSBrICogdCkgd2hlcmUgdCBydW5zXG4gKiAgICAgICAgICAgICAgMCBhdCBgYmVsdGAgdG8gMSBhdCBgcm9vZmAuIFRoYXQgaXMgdGhlIHR1bWJsZWhvbWUgb2YgYSByZWFsIGNhciBib2R5IGFuZCBpcyB3aGF0XG4gKiAgICAgICAgICAgICAgc3RvcHMgdGhlIGdsYXNzaG91c2UgcmVhZGluZyBhcyBhIGJveCBvbiBhIGJveC5cbiAqICAtIGBwbGFuYCAgICByb3VuZHMgdGhlIHBsYW4gYXQgdGhlIG5vc2UgYW5kIHRhaWw6IGFuIG9wdGlvbmFsIGxpc3Qgb2YgW3osIHhTY2FsZV0gc3RhdGlvbnNcbiAqICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWQgYWxvbmcgeiwgc28gYSBib25uZXQgY2FuIHRhcGVyIHRvIDAuOSBvZiB0aGUgd2lkdGggYXQgdGhlIGJ1bXBlciBsaW5lLlxuICpcbiAqIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgaW4gaXRzIG93biAodSwgdiwgZGVwdGgpIGZyYW1lOyByb3RhdGVZKC1QSS8yKSBtYXBzIGRlcHRoIHRvIC14IGFuZCB1IHRvXG4gKiB3b3JsZCB6LCBhbmQgdGhlIHRyYW5zbGF0ZSByZS1jZW50cmVzIHRoZSBzbGFiIG9uIHggPSAwLiBBbnkgc2hhcGluZyBpcyBhcHBsaWVkIEFGVEVSIHRoYXQsIGFuZFxuICogbm9ybWFscyBhcmUgcmVjb21wdXRlZCBsYXN0IHNvIHRoZSBzaGFkZWQgZmFjZXMgZm9sbG93IHRoZSBzaGFwZWQgc3VyZmFjZS5cbiAqL1xuZnVuY3Rpb24gc2lkZUV4dHJ1ZGUocHJvZmlsZTogbnVtYmVyW11bXSwgd2lkdGg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW4/OiBudW1iZXJbXVtdLCBjdXJ2ZVNlZ21lbnRzPzogbnVtYmVyIH0gPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHByb2ZpbGVbMF1bMF0sIHByb2ZpbGVbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2ZpbGUubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwcm9maWxlW2ldWzBdLCBwcm9maWxlW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB3aWR0aCwgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlU2VnbWVudHM6IG9wdHMuY3VydmVTZWdtZW50cyA/PyA2IH0pO1xuICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUod2lkdGggLyAyLCAwLCAwKTtcbiAgc2hhcGVXaWR0aChnLCBvcHRzKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBUaGUgcGVyLXZlcnRleCB4IHNoYXBpbmcgc2hhcmVkIGJ5IHRoZSBib2R5IGFuZCBpdHMgZ2xhc3MgYmFuZCwgc28gYSBwYW5lIG9mZnNldCA1IG1tIHByb3VkIG9mXG4gKiAgdGhlIGJvZHkgc3RheXMgNSBtbSBwcm91ZCBhZnRlciBib3RoIGFyZSBuYXJyb3dlZCBieSB0aGUgc2FtZSBmdW5jdGlvbi4gKi9cbmZ1bmN0aW9uIHNoYXBlV2lkdGgoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksXG4gICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sIHBsYW4/OiBudW1iZXJbXVtdIH0pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGxldCB4ID0gcC5nZXRYKGkpOyBjb25zdCB5ID0gcC5nZXRZKGkpLCB6ID0gcC5nZXRaKGkpO1xuICAgIGlmIChvcHRzLnR1bWJsZSkge1xuICAgICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh5IC0gb3B0cy50dW1ibGUuYmVsdCkgLyAob3B0cy50dW1ibGUucm9vZiAtIG9wdHMudHVtYmxlLmJlbHQpKSk7XG4gICAgICB4ICo9IDEgLSBvcHRzLnR1bWJsZS5rICogdDtcbiAgICB9XG4gICAgaWYgKG9wdHMucGxhbiAmJiBvcHRzLnBsYW4ubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc3QgPSBvcHRzLnBsYW47XG4gICAgICBsZXQgcyA9IHN0WzBdWzFdO1xuICAgICAgaWYgKHogPD0gc3RbMF1bMF0pIHMgPSBzdFswXVsxXTtcbiAgICAgIGVsc2UgaWYgKHogPj0gc3Rbc3QubGVuZ3RoIC0gMV1bMF0pIHMgPSBzdFtzdC5sZW5ndGggLSAxXVsxXTtcbiAgICAgIGVsc2UgZm9yIChsZXQgayA9IDA7IGsgPCBzdC5sZW5ndGggLSAxOyBrKyspIHtcbiAgICAgICAgaWYgKHogPj0gc3Rba11bMF0gJiYgeiA8PSBzdFtrICsgMV1bMF0pIHtcbiAgICAgICAgICBjb25zdCB1ID0gKHogLSBzdFtrXVswXSkgLyAoc3RbayArIDFdWzBdIC0gc3Rba11bMF0pO1xuICAgICAgICAgIHMgPSBzdFtrXVsxXSArIChzdFtrICsgMV1bMV0gLSBzdFtrXVsxXSkgKiB1OyBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgeCAqPSBzO1xuICAgIH1cbiAgICBwLnNldFgoaSwgeCk7XG4gIH1cbiAgcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbn1cblxuLyoqIEEgc2VtaWNpcmN1bGFyIHdoZWVsLWFyY2ggbm90Y2ggYXMgcHJvZmlsZSBwb2ludHMsIHRvIGJlIHNwbGljZWQgaW50byBhIHNpZGUgcHJvZmlsZSB0aGF0IHJ1bnNcbiAqICBhbG9uZyB0aGUgc2lsbCBmcm9tICt6IHRvIC16IChpLmUuIHogREVDUkVBU0lORykuIGBuYCBzZWdtZW50czsgdGhlIGFyYyBpcyB0aGUgVE9QIGhhbGYuICovXG5mdW5jdGlvbiBhcmNoTm90Y2goemM6IG51bWJlciwgeVNpbGw6IG51bWJlciwgcjogbnVtYmVyLCBuID0gNyk6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJIC8gbjsgICAgICAgICAgICAgICAvLyAwIC4uIFBJLCBmcm9tICt6IHJvdW5kIHRoZSB0b3AgdG8gLXpcbiAgICBwdHMucHVzaChbemMgKyBNYXRoLmNvcyhhKSAqIHIsIHlTaWxsICsgTWF0aC5zaW4oYSkgKiByXSk7XG4gIH1cbiAgcmV0dXJuIHB0cztcbn1cblxuLyoqXG4gKiBBIFdIRUVMOiBvbmUgbGF0aGUgYWJvdXQgdGhlIGF4bGUuIFRoZSBwcm9maWxlIHJ1bnMgZnJvbSB0aGUgaHViIGZhY2Ugb24gb25lIHNpZGUgb3ZlciB0aGUgcmltXG4gKiBsaXAsIHRoZSB0eXJlIHNpZGV3YWxsLCB0aGUgdHJlYWQgYW5kIGJhY2sgZG93biB0aGUgZmFyIHNpZGUsIHNvIHRoZSB3aGVlbCBpcyBhIGNsb3NlZCBzb2xpZCB3aXRoXG4gKiBubyBvcGVuIGVuZCBmb3IgdGhlIHR1cm50YWJsZSBnYXRlIHRvIHJlYWQgdGhyb3VnaC4gUmV2b2x2ZWQgYWJvdXQgWSBhbmQgdGhlbiBsYWlkIG9uIFgsIHNvIHRoZVxuICogYXhsZSBpcyB0aGUgeCBheGlzIGFuZCB0aGUgd2hlZWwgcm9sbHMgYWJvdXQgaXQgLS0gd2hpY2ggaXMgdGhlIGF4aXMgaXRzIHBpdm90IGRlY2xhcmVzLlxuICpcbiAqIFR3byB2ZXJ0ZXggY29sb3VyczogYHJpbUhleGAgb24gdGhlIGh1YiBhbmQgcmltIHBvaW50cywgYHR5cmVIZXhgIG9uIHRoZSBzaWRld2FsbCBhbmQgdHJlYWQuIFRoZVxuICogbGF0aGUgb3JkZXJzIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IgKGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgd2hpY2ggaXMgd2hhdCBsZXRzIGFcbiAqIHBlci1wcm9maWxlLXBvaW50IGNvbG91ciBiZSB3cml0dGVuIHdpdGhvdXQgYSBzZWNvbmQgZ2VvbWV0cnkuXG4gKi9cbmZ1bmN0aW9uIHdoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICB0eXJlSGV4OiBudW1iZXIsIHJpbUhleDogbnVtYmVyLCBkaXNoID0gMC41NSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgaHcgPSBoYWxmVztcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjMwLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjYyLCAtaHcgKiAwLjgwXSwgW3JSaW0sIC1odyAqIDAuODZdLCBbclJpbSwgLWh3ICogMC45OF0sXG4gICAgW3JUeXJlICogMC45MywgLWh3XSwgW3JUeXJlLCAtaHcgKiAwLjcyXSwgW3JUeXJlLCBodyAqIDAuNzJdLCBbclR5cmUgKiAwLjkzLCBod10sXG4gICAgW3JSaW0sIGh3ICogMC45OF0sIFtyUmltLCBodyAqIDAuODZdLCBbclJpbSAqIDAuNjIsIGh3ICogMC44MF0sIFtyUmltICogMC4zMCwgaHcgKiBkaXNoXSwgWzAsIGh3ICogZGlzaF0sXG4gIF07XG4gIGNvbnN0IHJpbVBvaW50ID0gKGo6IG51bWJlcikgPT4gaiA8PSA0IHx8IGogPj0gOTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgY29uc3QgY3QgPSBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCksIGNyID0gbmV3IFRIUkVFLkNvbG9yKHJpbUhleCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYyA9IHJpbVBvaW50KGkgJSBwdHMubGVuZ3RoKSA/IGNyIDogY3Q7XG4gICAgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIGcucm90YXRlWihNYXRoLlBJIC8gMik7ICAgIC8vIGxhdGhlIGF4aXMgWSAtPiBheGxlIG9uIFhcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIFdpcmUtc3Bva2VkIHdoZWVsIGRyZXNzaW5nOiBgbmAgdGhpbiBib3hlcyByYWRpYXRpbmcgZnJvbSB0aGUgaHViLCBsYWNlZCBhbHRlcm5hdGVseSB0byBlYWNoXG4gKiAgc2lkZSBvZiB0aGUgcmltIHNvIHRoZXkgY3Jvc3MgdGhlIHdheSByZWFsIHNwb2tlcyBkby4gTWVyZ2VkIGludG8gdGhlIHdoZWVsIGdlb21ldHJ5IHNvIHRoZVxuICogIHdoZWVsIHN0YXlzIE9ORSBpbnN0YW5jZWQgZ2VvbWV0cnkuICovXG5mdW5jdGlvbiBzcG9rZXMockh1YjogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIG46IG51bWJlciwgaGV4OiBudW1iZXIsIHQgPSAwLjAwNiwgcHJpc20gPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAqIDIgLyBuO1xuICAgIGNvbnN0IHNpZGUgPSAoaSAlIDIgPT09IDAgPyAxIDogLTEpICogaGFsZlcgKiAwLjM1O1xuICAgIGNvbnN0IGxlbiA9IHJSaW0gLSBySHViO1xuICAgIC8vIGBwcmlzbWA6IGFuIG9wZW4gdGhyZWUtc2lkZWQgcHJpc20gYXQgc2l4IHRyaWFuZ2xlcyB3aGVyZSB0aGUgYm94IGNvc3RzIHR3ZWx2ZSAtLSBhIHdpcmVcbiAgICAvLyBzcG9rZSBoYXMgbm8gcmVzb2x2YWJsZSBzZWN0aW9uIGF0IHByb3AgZGlzdGFuY2UsIGFuZCAyOCBvZiB0aGVtIG9uIHRocmVlIHdoZWVscyBpcyB0aGVcbiAgICAvLyBkaWZmZXJlbmNlIGJldHdlZW4gYSBsYXJnZSBwcm9wIGluc2lkZSBpdHMgdHJpYW5nbGUgY2VpbGluZyBhbmQgb25lIG92ZXIgaXRcbiAgICBjb25zdCBnID0gcHJpc20gPyBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSh0ICogMC42MiwgdCAqIDAuNjIsIGxlbiwgMywgMSwgdHJ1ZSkgOiBuZXcgVEhSRUUuQm94R2VvbWV0cnkodCwgbGVuLCB0KTtcbiAgICBnLnRyYW5zbGF0ZSgwLCBySHViICsgbGVuIC8gMiwgMCk7XG4gICAgZy5yb3RhdGVYKE1hdGguYXRhbjIoc2lkZSwgbGVuKSAqIDAuNik7XG4gICAgZy5yb3RhdGVYKDApOyBnLnRyYW5zbGF0ZSgwLCAwLCBzaWRlICogMC41KTtcbiAgICBnLnJvdGF0ZVgoYSk7ICAgICAgICAgICAgLy8gcmFkaWF0ZSBhcm91bmQgdGhlIGF4bGUgKHgpXG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiB0aW50R2VvKG1lcmdlR2VvcyhzZWdzKSwgaGV4KTtcbn1cblxuLyoqIEEgcG9seWxpbmUgVFVCRTogb25lIGN5bGluZGVyIHBlciBzZWdtZW50LCBlYWNoIHJvdGF0ZWQgb250byBpdHMgY2hvcmQsIHdpdGggYSBzbWFsbCBzcGhlcmUtbGVzc1xuICogIG92ZXJsYXAgc28gdGhlIGpvaW50cyBjbG9zZS4gSGFuZGxlYmFycywgY2Fub3B5IHJhaWxzLCByb2xsIGNhZ2VzIGFuZCBmcmFtZSB0dWJlcy4gKi9cbmZ1bmN0aW9uIHR1YmUocHRzOiBudW1iZXJbXVtdLCByOiBudW1iZXIsIHNlZyA9IDgsIGhleD86IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkID0gYi5jbG9uZSgpLnN1YihhKTsgY29uc3QgbGVuID0gZC5sZW5ndGgoKTtcbiAgICBpZiAobGVuIDwgMWUtNikgY29udGludWU7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIGxlbiArIHIgKiAxLjIsIHNlZywgMSwgZmFsc2UpO1xuICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgZC5ub3JtYWxpemUoKSk7XG4gICAgZy5hcHBseVF1YXRlcm5pb24ocSk7XG4gICAgY29uc3QgbSA9IGEuY2xvbmUoKS5hZGQoYikubXVsdGlwbHlTY2FsYXIoMC41KTtcbiAgICBnLnRyYW5zbGF0ZShtLngsIG0ueSwgbS56KTtcbiAgICBwYXJ0cy5wdXNoKGcpO1xuICB9XG4gIGNvbnN0IG91dCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IG91dCA6IHRpbnRHZW8ob3V0LCBoZXgpO1xufVxuXG4vKiogQSByb3RhdGVkIGJveDogW2N4LCBjeSwgY3osIHcsIGgsIGQsIHJ4LCByeSwgcnpdIHdpdGggdGhlIHJvdGF0aW9ucyBhcHBsaWVkIGluIHgsIHksIHogb3JkZXJcbiAqICBhYm91dCB0aGUgYm94J3Mgb3duIGNlbnRyZS4gQSBib25uZXQgbGlwLCBhIHJha2VkIG1pcnJvciBzdGVtLCBhIGNhbm9weSBzdGF5LiAqL1xuZnVuY3Rpb24gcmJveChiOiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShiWzNdLCBiWzRdLCBiWzVdKTtcbiAgaWYgKGJbNl0pIGcucm90YXRlWChiWzZdKTsgaWYgKGJbN10pIGcucm90YXRlWShiWzddKTsgaWYgKGJbOF0pIGcucm90YXRlWihiWzhdKTtcbiAgZy50cmFuc2xhdGUoYlswXSwgYlsxXSwgYlsyXSk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBiYXRjaCBvZiBib3hlcywgZWFjaCB0aW50ZWQsIG1lcmdlZDogW1toZXgsIGN4LCBjeSwgY3osIHcsIGgsIGQsIHJ4Pywgcnk/LCByej9dLCAuLi5dLiBUaGVcbiAqICB0cmltIGNvbXBvbmVudCBvZiBldmVyeSB2ZWhpY2xlIGlzIG9uZSBvZiB0aGVzZSAtLSBidW1wZXJzLCBncmlsbGUsIGxhbXBzLCBtaXJyb3JzLCBoYW5kbGVzLFxuICogIHN0ZXBzLCBhcmNoIGZsYXJlcyAtLSBzbyBmb3J0eSBwYXJ0cyByaWRlIG9uZSBzdWJtaXNzaW9uLiAqL1xuZnVuY3Rpb24gdGludGVkQm94ZXMobGlzdDogbnVtYmVyW11bXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gdGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSkpO1xufVxuXG4vKiogTWlycm9yIGEgYm94IGxpc3QgYWNyb3NzIHggPSAwIChsZWZ0L3JpZ2h0IHBhaXJzKS4gUm90YXRpb25zIGFib3V0IHkgYW5kIHogZmxpcCBzaWduLiAqL1xuZnVuY3Rpb24gbWlycm9yWChsaXN0OiBudW1iZXJbXVtdKTogbnVtYmVyW11bXSB7XG4gIHJldHVybiBsaXN0LmZsYXRNYXAoKGIpID0+IFtiLCBbYlswXSwgLWJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0sIGJbNl0sIGJbN10gPz8gMCwgLShiWzhdID8/IDApLCAtKGJbOV0gPz8gMCldXSk7XG59XG5cbi8qKiBBIHNlYW1sZXNzIENhbnZhcyAyRCB0aWxlOiBgZHJhdyhjdHgsIHNpemUpYCBwYWludHMgaXQsIGFuZCB0aGUgcmVzdWx0IGlzIGEgcmVwZWF0aW5nIHRleHR1cmVcbiAqICBpbiBzUkdCLiBVc2VkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbiwgc28gdGhlIHRleHR1cmVsZXNzIGRlY2xhcmF0aW9uIHN0YW5kcyBhbmQgbm9cbiAqICBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLiBSZXR1cm5zIG51bGwgd2hlcmUgdGhlcmUgaXMgbm8gRE9NICh0aGUgaGVhZGxlc3MgaGFybmVzc1xuICogIGhhcyBvbmU7IGEgbm9kZS1zaWRlIHByb2JlIGRvZXMgbm90KSwgYW5kIGV2ZXJ5IGNhbGxlciB0b2xlcmF0ZXMgbnVsbC4gKi9cbmZ1bmN0aW9uIGNhbnZhc1RpbGUoc2l6ZTogbnVtYmVyLCBkcmF3OiAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHM6IG51bWJlcikgPT4gdm9pZCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsO1xuICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOyBjdi53aWR0aCA9IHNpemU7IGN2LmhlaWdodCA9IHNpemU7XG4gIC8vIHdpbGxSZWFkRnJlcXVlbnRseSBrZWVwcyB0aGUgdGlsZSBvbiB0aGUgQ1BVIHJhc3RlciBwYXRoOiBhIEdQVS1iYWNrZWQgY2FudmFzIGNvc3RzIHNlY29uZHMgcGVyXG4gIC8vIHRob3VzYW5kIHBhdGggZmlsbHMgd2hlcmUgdGhlIHNvZnR3YXJlIHBhdGggdGFrZXMgdGVucyBvZiBtaWxsaXNlY29uZHMuXG4gIGNvbnN0IGN0eCA9IGN2LmdldENvbnRleHQoJzJkJywgeyB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUgfSkgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDsgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuICBkcmF3KGN0eCwgc2l6ZSk7XG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGN2KTtcbiAgdGV4LndyYXBTID0gdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gIHRleC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIHJldHVybiB0ZXg7XG59XG5cbi8qKiBEZXRlcm1pbmlzdGljIHBzZXVkby1yYW5kb20gZm9yIGNhbnZhcyBkcmVzc2luZyAtLSBhc3NpZ25lZCBieSBpbmRleCwgbmV2ZXIgTWF0aC5yYW5kb20sIHNvIHRoZVxuICogIG1vZGVsIGlzIGJ5dGUtaWRlbnRpY2FsIG9uIGV2ZXJ5IGJ1aWxkLiAqL1xuZnVuY3Rpb24gbGNnKHNlZWQ6IG51bWJlcik6ICgpID0+IG51bWJlciB7XG4gIGxldCBzID0gc2VlZCA+Pj4gMDtcbiAgcmV0dXJuICgpID0+IHsgcyA9IChzICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwOyByZXR1cm4gcyAvIDQyOTQ5NjcyOTY7IH07XG59XG5cbi8qKlxuICogTVVEIC8gUk9BRC1HUklNRSB0aWxlLCBSRS1CQVNFRC4gVGhhaSByb2FkIG11ZCBpcyB0YW4gYW5kIEJSSUdIVEVSIHRoYW4gbW9zdCBwYWludCwgYW5kIGFcbiAqIG11bHRpcGxpZXIgY2Fubm90IGJyaWdodGVuOiBzbyB0aGUgcGFpbnQgbWF0ZXJpYWwgY2FycmllcyB0aGUgTVVEIEVOVkVMT1BFIGNvbG91ciAobWVhc3VyZWQgb25cbiAqIHRoZSBtdWRkeSBzaWxsKSwgdGhpcyB0aWxlIGNhcnJpZXMgdGhlIGNsZWFuIHBhaW50IGFzIGEgUkFUSU8gb2YgdGhhdCBlbnZlbG9wZSBvdmVyIG1vc3Qgb2YgaXRzXG4gKiBhcmVhIChgYmFzZWApLCBhbmQgdGhlIG11ZCBpcyBwYWludGVkIGFzIHdoaXRlIC0tIGkuZS4gdGhlIGVudmVsb3BlIGl0c2VsZiAtLSBpbiBhIHdhc2ggcmlzaW5nXG4gKiBmcm9tIHRoZSBib3R0b20gdG8gYGNvdmVyYWdlYCBvZiB0aGUgdGlsZSBoZWlnaHQgcGx1cyBzcGxhdHRlciBhYm92ZSBpdC4gQm91bmQgd2l0aCBoZWlnaHQgVVZzXG4gKiBzbyB2ID0gMCBpcyB0aGUgZ3JvdW5kIGFuZCB0aGUgd2FzaCBzaXRzIG9uIHRoZSBzaWxscyBhbmQgYXJjaGVzLlxuICovXG5mdW5jdGlvbiBtdWRUaWxlKHNpemU6IG51bWJlciwgYmFzZTogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMzKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHRvSGV4ID0gKHY6IG51bWJlcltdKSA9PiAnIycgKyB2Lm1hcCgoYykgPT4gTWF0aC5yb3VuZChNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBjKSkgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdG9IZXgoYmFzZSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LDI1NSwyNTUsMC44OCknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjQ1LCAncmdiYSgyNTUsMjU1LDI1NSwwLjQ1KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTUsMjU1LDApJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDkwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjM1O1xuICAgICAgY29uc3QgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA1O1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMjg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsMjUwLDI0MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1MCwyNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYSBsaXR0bGUgZ3JhaW4gc28gdGhlIGNsZWFuIHBhaW50IGlzIG5vdCBhIGZsYXQgZmlsbFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTIwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjb25zdCB2ID0gcm5kKCkgPCAwLjUgPyAwIDogMjU1O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMDM1KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIERVU1QgdGlsZSBmb3IgcGFpbnQgdGhhdCBpcyBCUklHSFRFUiB0aGFuIGl0cyBkaXJ0IChhIHdoaXRlIHZhbik6IGEgcGxhaW4gbXVsdGlwbGllciwgd2hpdGVcbiAqICBiYXNlIGFuZCBhIGdyZXktYnJvd24gd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsIHBsdXMgc29mdCBibG9icy4gKi9cbmZ1bmN0aW9uIGR1c3RUaWxlKHNpemU6IG51bWJlciwgZHVzdDogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBjID0gZHVzdC5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogTWF0aC5taW4oMSwgdikpKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC45KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC40KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjQsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNSwgYSA9IDAuMDggKyBybmQoKSAqIDAuMjU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogQ09SUlVHQVRFRCBTSEVFVCB0aWxlOiB2ZXJ0aWNhbCByaWRnZXMgYXMgYSBzaW5lLXNoYWRlZCBzdHJpcGUgZmllbGQsIHVzZWQgYXMgbWFwIEFORCBidW1wTWFwIG9uXG4gKiAgYSBzb25ndGhhZXcgcm9vZiBzbyB0aGUgcmlkZ2VzIGNhdGNoIGxpZ2h0LiBgcGl0Y2hgIHJpZGdlcyBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIGNvcnJ1Z2F0aW9uVGlsZShzaXplOiBudW1iZXIsIHBpdGNoOiBudW1iZXIsIGxvdzogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgIGNvbnN0IHQgPSAoTWF0aC5jb3MoeCAvIHMgKiBNYXRoLlBJICogMiAqIHBpdGNoKSArIDEpIC8gMjsgICAvLyAxIGF0IGNyZXN0LCAwIGluIHRyb3VnaFxuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogKGxvdyArICgxIC0gbG93KSAqIHQpKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gNCArIHJuZCgpICogcyAqIDAuMDg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjE4O1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDEyMCw5MCw2MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTIwLDkwLDYwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBQTEFOSyB0aWxlOiBib2FyZHMgcnVubmluZyBhbG9uZyB1IHdpdGggZGFyayBqb2ludHMgYW5kIGdyYWluIHN0cmVha3MsIGEgbXVsdGlwbGllciBvbiBhXG4gKiAgbWVhc3VyZWQgdGltYmVyIGFsYmVkby4gYGJvYXJkc2AgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBwbGFua1RpbGUoc2l6ZTogbnVtYmVyLCBib2FyZHM6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBiaCA9IHMgLyBib2FyZHM7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBib2FyZHM7IGIrKykge1xuICAgICAgY29uc3QgdG9uZSA9IDAuODIgKyBybmQoKSAqIDAuMTg7XG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0b25lKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIGJoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCwzMCwyMCwwLjU1KSc7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIE1hdGgubWF4KDEsIHMgKiAwLjAwNikpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAxNDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHkgPSBiICogYmggKyBybmQoKSAqIGJoLCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC42KSwgeCA9IHJuZCgpICogcztcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoNjAsNDUsMzAsJHswLjA1ICsgcm5kKCkgKiAwLjEyfSlgOyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggLSBzLCB5KTsgY3R4LmxpbmVUbyh4IC0gcyArIGxlbiwgeSk7IGN0eC5tb3ZlVG8oeCwgeSk7IGN0eC5saW5lVG8oeCArIGxlbiwgeSk7IGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogUlVTVCB0aWxlOiBhIG11bHRpcGxpZXIgb2YgYmxvdGNoZWQgb3JhbmdlLWJyb3duIG92ZXIgYSBiYXNlLCBkYXJrIGNvcmVzIGxpZnRlZCBzbyBub3RoaW5nIGxhbmRzXG4gKiAgb24gdGhlIGx1bWEtNTggaG9sZSBnYXRlLiAqL1xuZnVuY3Rpb24gcnVzdFRpbGUoc2l6ZTogbnVtYmVyLCByYXRpbzogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgZGVuc2l0eSA9IDkwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbnNpdHk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA5O1xuICAgICAgY29uc3QgYSA9IDAuMTUgKyBybmQoKSAqIDAuNDU7XG4gICAgICBjb25zdCBjID0gcmF0aW8ubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIHYpKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogSGVpZ2h0LWtleWVkIFVWczogdiBpcyB3b3JsZCBIRUlHSFQgb3ZlciBgc2NhbGVgIG1ldHJlcywgdSBydW5zIGFsb25nIHRoZSBkb21pbmFudCBob3Jpem9udGFsXG4gKiAgYXhpcy4gQSBtdWQgdGlsZSBib3VuZCB0aGlzIHdheSBkYXJrZW5zIHRoZSBzaWxscyBhbmQgc3RheXMgY2xlYW4gb24gdGhlIHJvb2YgLS0gYSBwbGFpbiBib3hcbiAqICBwcm9qZWN0aW9uIHdvdWxkIHJlcGVhdCB0aGUgdGlsZSdzIGRpcnR5IGJhbmQgYWNyb3NzIHRoZSByb29mIGFzIHN0cmlwZXMuICovXG4vKipcbiAqIFNIT1JUIEZVUjogYSBzZWFtbGVzcyB0aWxlIG9mIGRlbnNlLCBzaG9ydCwgZGlyZWN0aW9uYWwgaGFpciBzdHJva2VzIG92ZXIgYSBjbG91ZHkgdG9uZSBkcmlmdCwgYXMgYVxuICogbXVsdGlwbHkgbWFwIChhbmQgYnVtcCkgb24gYSB3aGl0ZSB2ZXJ0ZXgtY29sb3VyZWQgY29hdC4gVGhlIHN0cm9rZXMgcnVuIGFsb25nIHYgd2l0aCBhIGppdHRlcmVkXG4gKiBsZWFuIGFuZCBhIG5hcnJvdyB0b25lIHNwcmVhZCAtLSBhIHdpZGUgc3ByZWFkIHJlYWRzIGFzIHNjYWxlcywgYSBwZXJmZWN0IGxheSByZWFkcyBhcyBjb21iZWRcbiAqIHBsYXN0aWMuIGBwYXRjaGVzYCBhZGRzIGEgZmV3IHNvZnQgcGluay1ncmV5IGJhcmUgcGF0Y2hlcywgdGhlIG1hbmdlIG1hcmtzIG9mIGEgc3RyZWV0IGRvZy5cbiAqL1xuZnVuY3Rpb24gZnVyVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCB0b25lID0gby50b25lID8/IFswLjcyLCAwLjY2LCAwLjU4XSwgbSA9IHMgKiAwLjA2O1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBjbG91ZHkgZHJpZnQgdW5kZXJuZWF0aCBzbyB0aGUgY29hdCBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmNsb3VkcyA/PyAyNik7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wOCArIHJuZCgpICogMC4xOCksIGEgPSAwLjA0ICsgcm5kKCkgKiAwLjEwO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IodG9uZSl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih0b25lKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGJhcmUgcGF0Y2hlczogc29mdCwgc3BhcnNlLCB3YXJtIGdyZXktcGlua1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucGF0Y2hlcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA0ICsgcm5kKCkgKiAwLjA1KSwgcGMgPSBvLnBhdGNoVG9uZSA/PyBbMC43MiwgMC41NiwgMC41Ml07XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihwYyl9LDAuNTUpYCk7IGcyLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKCR7cmdiKHBjKX0sMC4zKWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocGMpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciAqIDEuMywgciwgcm5kKCkgKiBNYXRoLlBJLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gaGFpciBzdHJva2VzOiBkYXJrIGFuZCBsaWdodCwgc2hvcnQsIGxlYW5pbmcgd2l0aGluICstMjIgZGVncmVlcyBvZiB2XG4gICAgY29uc3Qgc3Ryb2tlcyA9IG8uc3Ryb2tlcyA/PyA1MDAwLCBsZW4gPSBzICogKG8ubGVuZ3RoID8/IDAuMDIyKTtcbiAgICBjb25zdCBkcmF3U3Ryb2tlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCB3OiBudW1iZXIpID0+IHtcbiAgICAgIGN0eC5saW5lV2lkdGggPSB3OyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSk7IGN0eC5saW5lVG8oeCArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7XG4gICAgICBpZiAoeCA8IG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBzLCB5KTsgY3R4LmxpbmVUbyh4ICsgcyArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh4ID4gcyAtIG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggLSBzLCB5KTsgY3R4LmxpbmVUbyh4IC0gcyArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh5IDwgbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSArIHMpOyBjdHgubGluZVRvKHggKyBkeCwgeSArIHMgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHkgPiBzIC0gbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSAtIHMpOyBjdHgubGluZVRvKHggKyBkeCwgeSAtIHMgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgIH07XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Ryb2tlczsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB0aCA9IChybmQoKSAtIDAuNSkgKiAwLjc4LCBsID0gbGVuICogKDAuNiArIHJuZCgpICogMC44KTtcbiAgICAgIGNvbnN0IGxpZ2h0ID0gcm5kKCkgPCAwLjQyO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IGxpZ2h0ID8gJ3NjcmVlbicgOiAnbXVsdGlwbHknO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gbGlnaHQgPyBgcmdiYSgyNTUsMjUwLDI0MCwkezAuMDUgKyBybmQoKSAqIDAuMTB9KWAgOiBgcmdiYSgke3JnYih0b25lKX0sJHswLjA2ICsgcm5kKCkgKiAwLjE0fSlgO1xuICAgICAgZHJhd1N0cm9rZSh4LCB5LCBNYXRoLnNpbih0aCkgKiBsLCBNYXRoLmNvcyh0aCkgKiBsLCAwLjYgKyBybmQoKSAqIDEuMik7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0VVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBjb25zdCB1ID0gYXggPj0gYXogPyBwLmdldFooaSkgOiBwLmdldFgoaSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gcC5nZXRZKGkpIC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBPZmZzZXQgYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzIG91dHdhcmQgYnkgYGRgIGFsb25nIHRoZSBhdmVyYWdlZCBlZGdlIG5vcm1hbHMuIFVzZWRcbiAqICB0byBzdGFuZCB0aGUgZ2xhc3MgYmFuZCBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgYm9keSdzIHJha2VkIHdpbmRzY3JlZW4gYW5kIHJlYXIgZ2xhc3NcbiAqICBmYWNlcywgc28gdGhlIHBhbmUgYW5kIHRoZSBib2R5IG5ldmVyIHNoYXJlIGEgcGxhbmUuIFdpbmRpbmc6IGNvdW50ZXItY2xvY2t3aXNlIGluICh6LCB5KS4gKi9cbmZ1bmN0aW9uIG9mZnNldFBvbHkocHRzOiBudW1iZXJbXVtdLCBkOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgbiA9IHB0cy5sZW5ndGgsIG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBwdHNbKGkgKyBuIC0gMSkgJSBuXSwgYiA9IHB0c1tpXSwgYyA9IHB0c1soaSArIDEpICUgbl07XG4gICAgY29uc3QgZTEgPSBbYlswXSAtIGFbMF0sIGJbMV0gLSBhWzFdXSwgZTIgPSBbY1swXSAtIGJbMF0sIGNbMV0gLSBiWzFdXTtcbiAgICBjb25zdCBsMSA9IE1hdGguaHlwb3QoZTFbMF0sIGUxWzFdKSB8fCAxLCBsMiA9IE1hdGguaHlwb3QoZTJbMF0sIGUyWzFdKSB8fCAxO1xuICAgIC8vIG91dHdhcmQgbm9ybWFsIG9mIGEgQ0NXIGVkZ2UgKGR6LCBkeSkgaXMgKGR5LCAtZHopXG4gICAgY29uc3QgbjEgPSBbZTFbMV0gLyBsMSwgLWUxWzBdIC8gbDFdLCBuMiA9IFtlMlsxXSAvIGwyLCAtZTJbMF0gLyBsMl07XG4gICAgbGV0IG54ID0gbjFbMF0gKyBuMlswXSwgbnkgPSBuMVsxXSArIG4yWzFdO1xuICAgIGNvbnN0IG5sID0gTWF0aC5oeXBvdChueCwgbnkpIHx8IDE7IG54IC89IG5sOyBueSAvPSBubDtcbiAgICBjb25zdCBjb3NIYWxmID0gTWF0aC5tYXgoMC4zNSwgbnggKiBuMVswXSArIG55ICogbjFbMV0pO1xuICAgIG91dC5wdXNoKFtiWzBdICsgbnggKiBkIC8gY29zSGFsZiwgYlsxXSArIG55ICogZCAvIGNvc0hhbGZdKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogQSB3aGVlbC1hcmNoIEZMQVJFOiBhIGhhbGYtYW5udWx1cyBpbiB0aGUgKHosIHkpIHBsYW5lLCBleHRydWRlZCBhY3Jvc3MgeDAuLngxIG9uIGJvdGggc2lkZXNcbiAqICBhbmQgdGludGVkLiBTdGFuZHMgcHJvdWQgb2YgdGhlIGJvZHkgc2lkZSBhbmQgaGlkZXMgdGhlIGFyY2gncyBjdXQgZWRnZS4gKi9cbmZ1bmN0aW9uIGZsYXJlKHpjOiBudW1iZXIsIHljOiBudW1iZXIsIHJJbjogbnVtYmVyLCByT3V0OiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGhleDogbnVtYmVyLCBuID0gOSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBjb25zdCB6ID0gemMgKyBNYXRoLmNvcyhhKSAqIHJPdXQsIHkgPSB5YyArIE1hdGguc2luKGEpICogck91dDsgaWYgKGkgPT09IDApIHNoYXBlLm1vdmVUbyh6LCB5KTsgZWxzZSBzaGFwZS5saW5lVG8oeiwgeSk7IH1cbiAgZm9yIChsZXQgaSA9IG47IGkgPj0gMDsgaS0tKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBzaGFwZS5saW5lVG8oemMgKyBNYXRoLmNvcyhhKSAqIHJJbiwgeWMgKyBNYXRoLnNpbihhKSAqIHJJbik7IH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IG1rID0gKHN4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeDEgLSB4MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgZy50cmFuc2xhdGUoeDEsIDAsIDApOyBpZiAoc3ggPCAwKSBnLnNjYWxlKC0xLCAxLCAxKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiB0aW50R2VvKGcsIGhleCk7XG4gIH07XG4gIGNvbnN0IGwgPSBtaygtMSksIHIgPSBtaygxKTtcbiAgLy8gYSBuZWdhdGl2ZSBzY2FsZSBmbGlwcyB0aGUgd2luZGluZzsgcmVzdG9yZSBpdCBzbyB0aGUgZmxhcmUgaXMgbm90IGluc2lkZSBvdXRcbiAgY29uc3QgaWR4ID0gbC5nZXRJbmRleCgpOyBpZiAoaWR4KSB7IGNvbnN0IGEgPSBpZHguYXJyYXkgYXMgYW55OyBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpICs9IDMpIHsgY29uc3QgdCA9IGFbaSArIDFdOyBhW2kgKyAxXSA9IGFbaSArIDJdOyBhW2kgKyAyXSA9IHQ7IH0gaWR4Lm5lZWRzVXBkYXRlID0gdHJ1ZTsgfVxuICBlbHNlIHsgY29uc3QgcCA9IGwuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpOyBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkgKz0gMykgeyBjb25zdCB4MV8gPSBwLmdldFgoaSArIDEpLCB5MV8gPSBwLmdldFkoaSArIDEpLCB6MV8gPSBwLmdldFooaSArIDEpOyBwLnNldFhZWihpICsgMSwgcC5nZXRYKGkgKyAyKSwgcC5nZXRZKGkgKyAyKSwgcC5nZXRaKGkgKyAyKSk7IHAuc2V0WFlaKGkgKyAyLCB4MV8sIHkxXywgejFfKTsgfSB9XG4gIGwuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhbbCwgcl0pO1xufVxuXG4vKiogQmluZCBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHRvIGEgbWF0ZXJpYWwgYXMgbWFwIChhbmQgYnVtcCksIGxlYXZpbmcgdGhlIHRleHR1cmVsZXNzXG4gKiAgZGVjbGFyYXRpb24gaW50YWN0OiBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLCB0aGUgbWVhc3VyZWQgY29sb3VyIHN0YXlzIHRoZVxuICogIG11bHRpcGxpY2FuZCwgYW5kIHRoZSB3aG9sZSB0aGluZyBjb3N0cyBvbmUgY2FudmFzLiAqL1xuZnVuY3Rpb24gYmluZFRpbGUobWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCwgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCwgYnVtcCA9IDApOiB2b2lkIHtcbiAgaWYgKCF0ZXgpIHJldHVybjtcbiAgbWF0Lm1hcCA9IHRleDtcbiAgaWYgKGJ1bXAgPiAwKSB7IG1hdC5idW1wTWFwID0gdGV4OyBtYXQuYnVtcFNjYWxlID0gYnVtcDsgfVxuICBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG5cbi8qKlxuICogQSBEUkFQRUQgU0hFRVQ6IGBoZWlnaHRzW2pdW2ldYCBpcyB0aGUgdG9wIHN1cmZhY2UgYXQgeCA9IHgwLi54MSAoaSBvdmVyIG54KSBhbmQgeiA9IHowLi56MSAoaiBvdmVyXG4gKiBueik7IHRoZSBzaGVldCBpcyBgdGAgdGhpY2suIFRvcCBhbmQgdW5kZXJzaWRlIGFyZSBzbW9vdGgtc2hhZGVkIGdyaWRzLCB0aGUgZm91ciBlZGdlcyBhcmUgZmxhdFxuICogc3RyaXBzIHdvdW5kIG91dHdhcmQuIEEgdGFycCBjYW5vcHkgaXMgYSByaWRnZSBsaW5lIG1pbnVzIHRoZSBzYWcgYmV0d2VlbiBpdHMgcG9sZXMgbWludXMgdGhlXG4gKiBkcm9vcCBvZiBpdHMgZnJlZSBlZGdlcyAtLSBjbG90aCwgd2hlcmUgYSBzbGFiIHJlYWRzIGFzIGEgcGFpbnRlZCBib3guXG4gKi9cbmZ1bmN0aW9uIHNoZWV0KHM6IGFueSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgbng6IG51bWJlciA9IHMubngsIG56OiBudW1iZXIgPSBzLm56LCBIaDogbnVtYmVyW11bXSA9IHMuaGVpZ2h0cywgdDogbnVtYmVyID0gcy50ID8/IDAuMDEyO1xuICBjb25zdCBYID0gKGk6IG51bWJlcikgPT4gcy54MCArIChzLngxIC0gcy54MCkgKiBpIC8gbng7XG4gIGNvbnN0IFogPSAoajogbnVtYmVyKSA9PiBzLnowICsgKHMuejEgLSBzLnowKSAqIGogLyBuejtcbiAgY29uc3QgZ3JpZCA9ICh5T2ZmOiBudW1iZXIsIGZsaXA6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIHV2OiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPD0gbng7IGkrKykgeyBwb3MucHVzaChYKGkpLCBIaFtqXVtpXSArIHlPZmYsIFooaikpOyB1di5wdXNoKGkgLyBueCwgaiAvIG56KTsgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPCBueDsgaSsrKSB7XG4gICAgICBjb25zdCBhID0gaiAqIChueCArIDEpICsgaSwgYiA9IGEgKyAxLCBjID0gYSArIG54ICsgMSwgZCA9IGMgKyAxO1xuICAgICAgaWYgKGZsaXApIGlkeC5wdXNoKGEsIGIsIGMsIGIsIGQsIGMpOyBlbHNlIGlkeC5wdXNoKGEsIGMsIGIsIGIsIGMsIGQpO1xuICAgIH1cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zLCAzKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBnLnNldEluZGV4KGlkeCk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIC8vIGBoZXhUb3BgIC8gYGhleFVuZGVyYDogYSBjb2xvdXIgYXR0cmlidXRlIHdyaXR0ZW4gcGVyIGdyaWQsIHNvIGEgdGFycCBjYW4gYmUgYmx1ZSBvbiB0b3AgYW5kXG4gIC8vIG9yYW5nZSB1bmRlcm5lYXRoIG9uIE9ORSBtYXRlcmlhbCBhbmQgT05FIGRyYXcgY2FsbC4gQSBjb21wb25lbnQgdGludCBjYW5ub3QgZG8gaXQgLS0gdGhlIHR3b1xuICAvLyBzdXJmYWNlcyBhcmUgbWlsbGltZXRyZXMgYXBhcnQgaW4geSwgc28gbm8gYXhpcyBibGVuZCBzZXBhcmF0ZXMgdGhlbSAtLSBhbmQgYSBzZWNvbmQgc2hlZXRcbiAgLy8gd291bGQgZG91YmxlIHRoZSByb29mJ3MgdHJpYW5nbGVzIGZvciBhIGNvbG91ci4gT21pdHRlZCwgdGhlIGdlb21ldHJ5IGlzIHVudGludGVkIGFzIGJlZm9yZS5cbiAgY29uc3QgcGFpbnQgPSAoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50LCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCksIGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7IHJldHVybiBnO1xuICB9O1xuICBjb25zdCB0b3AwID0gZ3JpZCgwLCBmYWxzZSksIHVuZDAgPSBncmlkKC10LCB0cnVlKTtcbiAgY29uc3QgcGFydHMgPSBzLmhleFVuZGVyICE9PSB1bmRlZmluZWRcbiAgICA/IFtwYWludCh0b3AwLCBzLmhleFRvcCA/PyAweGZmZmZmZiksIHBhaW50KHVuZDAsIHMuaGV4VW5kZXIpXVxuICAgIDogW3RvcDAsIHVuZDBdO1xuICAvLyBlZGdlIHN0cmlwczogZWFjaCBxdWFkIGZyb20gdGhlIHRvcCBlZGdlIGRvd24gdG8gdGhlIHVuZGVyc2lkZSwgd291bmQgc28gaXRzIG5vcm1hbCBmYWNlcyBgb3V0YFxuICBjb25zdCBzdHJpcCA9IChwdHM6IG51bWJlcltdW11bXSwgb3V0OiBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXY6IG51bWJlcltdID0gW107XG4gICAgZm9yIChjb25zdCBbcDAsIHAxXSBvZiBwdHMpIHtcbiAgICAgIGNvbnN0IHEwID0gcDAsIHExID0gcDEsIHEyID0gW3AxWzBdLCBwMVsxXSAtIHQsIHAxWzJdXSwgcTMgPSBbcDBbMF0sIHAwWzFdIC0gdCwgcDBbMl1dO1xuICAgICAgY29uc3QgZTEgPSBbcTFbMF0gLSBxMFswXSwgcTFbMV0gLSBxMFsxXSwgcTFbMl0gLSBxMFsyXV0sIGUyID0gW3EyWzBdIC0gcTBbMF0sIHEyWzFdIC0gcTBbMV0sIHEyWzJdIC0gcTBbMl1dO1xuICAgICAgY29uc3QgbiA9IFtlMVsxXSAqIGUyWzJdIC0gZTFbMl0gKiBlMlsxXSwgZTFbMl0gKiBlMlswXSAtIGUxWzBdICogZTJbMl0sIGUxWzBdICogZTJbMV0gLSBlMVsxXSAqIGUyWzBdXTtcbiAgICAgIGNvbnN0IHRyaSA9IG5bMF0gKiBvdXRbMF0gKyBuWzFdICogb3V0WzFdICsgblsyXSAqIG91dFsyXSA+PSAwID8gW3EwLCBxMSwgcTIsIHEwLCBxMiwgcTNdIDogW3EwLCBxMiwgcTEsIHEwLCBxMywgcTJdO1xuICAgICAgZm9yIChjb25zdCBxIG9mIHRyaSkgeyBwb3MucHVzaChxWzBdLCBxWzFdLCBxWzJdKTsgdXYucHVzaCgwLCAwKTsgfVxuICAgIH1cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zLCAzKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiBnO1xuICB9O1xuICBjb25zdCB0b3AgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IFtYKGkpLCBIaFtqXVtpXSwgWihqKV07XG4gIGNvbnN0IGUwOiBudW1iZXJbXVtdW10gPSBbXSwgZTE6IG51bWJlcltdW11bXSA9IFtdLCBlMjogbnVtYmVyW11bXVtdID0gW10sIGUzOiBudW1iZXJbXVtdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBueDsgaSsrKSB7IGUwLnB1c2goW3RvcChpLCAwKSwgdG9wKGkgKyAxLCAwKV0pOyBlMS5wdXNoKFt0b3AoaSwgbnopLCB0b3AoaSArIDEsIG56KV0pOyB9XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbno7IGorKykgeyBlMi5wdXNoKFt0b3AoMCwgaiksIHRvcCgwLCBqICsgMSldKTsgZTMucHVzaChbdG9wKG54LCBqKSwgdG9wKG54LCBqICsgMSldKTsgfVxuICBjb25zdCBlZGdlcyA9IFtzdHJpcChlMCwgWzAsIDAsIC0xXSksIHN0cmlwKGUxLCBbMCwgMCwgMV0pLCBzdHJpcChlMiwgWy0xLCAwLCAwXSksIHN0cmlwKGUzLCBbMSwgMCwgMF0pXTtcbiAgLy8gdGhlIHJpbSBpcyB0aGUgc2VhbSBiZXR3ZWVuIHRoZSB0d28gZmFjZXMsIHNvIGl0IHRha2VzIHRoZSBVTkRFUiBjb2xvdXI6IG9uIGEgZHJhcGVkIHRhcnAgdGhlXG4gIC8vIGVkZ2UgaXMgd2hhdCBhIHZpZXdlciBzdGFuZGluZyBiZXNpZGUgaXQgYWN0dWFsbHkgc2VlcywgYW5kIGl0IGlzIHRoZSBsaW5pbmcsIG5vdCB0aGUgdG9wLlxuICBwYXJ0cy5wdXNoKC4uLihzLmhleFVuZGVyICE9PSB1bmRlZmluZWQgPyBlZGdlcy5tYXAoKGcpID0+IHBhaW50KGcsIHMuaGV4VW5kZXIpKSA6IGVkZ2VzKSk7XG4gIHJldHVybiBtZXJnZUdlb3MocGFydHMpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZmVuY2UgaGVscGVycyAqL1xuXG4vKiogUGFuZWwgVVZzOiB1IGFsb25nIHdvcmxkIFggb3ZlciBgc2NhbGVgIG1ldHJlcywgdiB3b3JsZCBIRUlHSFQgb3ZlciB0aGUgc2FtZSwgcmVnYXJkbGVzcyBvZiB0aGVcbiAqICBmYWNlIG5vcm1hbC4gT24gYSB0aGluIHNsYWIgdGhpcyBtZWFucyB0aGUgZnJvbnQgYW5kIGJhY2sgZmFjZXMgc2hhcmUgdGhlIHNhbWUgdGlsZSBwbGFjZW1lbnRcbiAqICBhbmQgdGhlIGVkZ2VzIHRha2UgYSBzbGl2ZXIgb2YgaXQ7IGEgZ3JpbWUgd2FzaCB0aGF0IGtleXMgb24gdiB0aGVuIGxhbmRzIGF0IHRoZSBzYW1lIGhlaWdodCBvblxuICogIGV2ZXJ5IGZhY2UsIHdoaWNoIGlzIHdoYXQgcmFpbiBhbmQgYWxnYWUgZG8uICovXG5mdW5jdGlvbiBwYW5lbFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIsIHJvdCA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgLy8gYHJvdGAgc3dhcHMgdGhlIGF4ZXMgc28gYSB0aWxlIG9mIFZFUlRJQ0FMIHN0cmlwcyByZWFkcyBob3Jpem9udGFsIC0tIHRoZSB3b3ZlbiBiYW5kcyBvZiBhXG4gIC8vIGJhbWJvbyBwYW5lbCBhZ2FpbnN0IGl0cyB2ZXJ0aWNhbCBtdWxsaW9ucywgb25lIHRpbGUsIG9uZSBtYXRlcmlhbC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB1ID0gcm90ID8gcC5nZXRZKGkpIDogcC5nZXRYKGkpLCB2ID0gcm90ID8gcC5nZXRYKGkpIDogcC5nZXRZKGkpO1xuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEEgc3F1YXJlIHB5cmFtaWQgU1BJS0U6IGJhc2UgdyB4IHcgYXQgYGF0YCwgYXBleCBoIGFib3ZlLiBBIHBpY2tldCdzIHNwZWFyIHBvaW50LCBhIHBpZXIgY2FwLiAqL1xuZnVuY3Rpb24gc3Bpa2UoYXQ6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkodyAvIE1hdGguU1FSVDIsIGgsIDQsIDEsIGZhbHNlKTtcbiAgZy5yb3RhdGVZKE1hdGguUEkgLyA0KTtcbiAgZy50cmFuc2xhdGUoYXRbMF0sIGF0WzFdICsgaCAvIDIsIGF0WzJdKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBHUklNRSB0aWxlOiBhIG11bHRpcGxpZXIgb2Ygd2hpdGUgd2l0aCAoYSkgYSBkYXJrIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLFxuICogKGIpIHZlcnRpY2FsIHJhaW4gc3RyZWFrcyBmcm9tIHRoZSB0b3AsIChjKSBzb2Z0IGRhcmsgYmxvdGNoZXMsIChkKSBvcHRpb25hbCBncmVlbiBtb3NzL2FsZ2FlXG4gKiBibG9icyBjb25jZW50cmF0ZWQgaW4gdGhlIGJvdHRvbSBiYW5kLCBhbmQgKGUpIGZpbmUgZ3JhaW4uIEV2ZXJ5IGNvbG91ciBpcyBhIGZyYWN0aW9uIG9mIHRoZVxuICogbWF0ZXJpYWwncyBtZWFzdXJlZCBhbGJlZG8sIGFuZCB0aGUgZGFya2VzdCBjb3JlIGlzIGNsYW1wZWQgc28gbm90aGluZyBvbiBhIHdoaXRlIG9yIGNyZWFtXG4gKiBzdXJmYWNlIGRyb3BzIHRvd2FyZCB0aGUgaG9sZSBnYXRlJ3MgbHVtYSA1OC5cbiAqL1xuZnVuY3Rpb24gZ3JpbWVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IHdhc2ggPSBvLndhc2ggPz8gWzAuNjIsIDAuNjIsIDAuNThdLCB3YXNoQSA9IG8ud2FzaEFscGhhID8/IDAuNywgY292ID0gby5jb3ZlcmFnZSA/PyAwLjM7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIC8vIHJhaW4gc3RyZWFrcyBmcm9tIHRoZSB0b3BcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnN0cmVha3MgPz8gMjYpOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTIsIGxlbiA9IHMgKiAoMC4xNSArIHJuZCgpICogMC42KSwgYSA9IDAuMDUgKyBybmQoKSAqIDAuMTI7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBsZW4pO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGN0eC5maWxsUmVjdCh4LCAwLCB3LCBsZW4pOyBjdHguZmlsbFJlY3QoeCAtIHMsIDAsIHcsIGxlbik7XG4gICAgfVxuICAgIC8vIGdyb3VuZCB3YXNoXG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3YpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQX0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEEgKiAwLjQ1fSlgKTsgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBibG90Y2hlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uYmxvdGNoZXMgPz8gNDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuNikgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDYsIGEgPSAwLjA4ICsgcm5kKCkgKiAwLjM7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBtb3NzIC8gYWxnYWUgaW4gdGhlIGJvdHRvbSBiYW5kOiBjbHVzdGVyZWQgc3BlY2tzLCBicmlnaHRlci10aGFuLXdhc2ggZ3JlZW5cbiAgICBpZiAoby5tb3NzKSB7XG4gICAgICBjb25zdCBtID0gby5tb3NzLCBiYW5kID0gby5tb3NzQmFuZCA/PyAwLjIyO1xuICAgICAgLy8gYSBmYWludCBncmVlbiB3YXNoIG92ZXIgdGhlIHdob2xlIGJhbmQgZmlyc3QsIHNvIHRoZSBjYXJwZXRzIHNpdCBpbiBkYW1wIGdyb3VuZCByYXRoZXIgdGhhblxuICAgICAgLy8gYXMgaXNvbGF0ZWQgZG90cyBvbiBjbGVhbiBwYWludFxuICAgICAgY29uc3QgbWcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gYmFuZCAqIDEuMykpO1xuICAgICAgbWcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKG0pfSwke28ubW9zc1dhc2ggPz8gMC4zNX0pYCk7IG1nLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihtKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBtZzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5tb3NzQ2x1c3RlcnMgPz8gMTQpOyBrKyspIHtcbiAgICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAxLjYpICogcyAqIGJhbmQsIGNyID0gcyAqICgwLjAxNSArIHJuZCgpICogMC4wNCk7XG4gICAgICAgIC8vIHRoZSBjYXJwZXQ6IGEgc29mdCBibG9iLCB0aGVuIHNwZWNrcyBvdmVyIGl0IGZvciB0aGUgdHVmdGVkIGVkZ2VcbiAgICAgICAgY29uc3QgY2cgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIGNyKTtcbiAgICAgICAgY2cuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKG0pfSwwLjcpYCk7IGNnLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKCR7cmdiKG0pfSwwLjM1KWApOyBjZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IobSl9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjZztcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3ggKyBkeCwgY3ksIGNyLCBjciAqIDAuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyO1xuICAgICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkICogMC42LCByID0gMSArIHJuZCgpICogMztcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IobSl9LCR7MC4zNSArIHJuZCgpICogMC41fSlgO1xuICAgICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBncmFpblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTUwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB2ID0gMjAwICsgTWF0aC5yb3VuZChybmQoKSAqIDU1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjEyKWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIENIQUlOLUxJTksgdGlsZTogYSBkaWFtb25kIHdpcmUgbGF0dGljZSBkcmF3biBvcGFxdWUgb3ZlciBhIFRSQU5TUEFSRU5UIGdyb3VuZCwgYm91bmQgYXMgbWFwXG4gKiAgb24gYW4gYWxwaGEtdGVzdGVkIG1hdGVyaWFsIHNvIHRoZSBjZWxscyBhcmUgb3Blbi4gT25lIHRpbGUgaXMgb25lIGRpYW1vbmQgY2VsbDsgdGhlIHBhbmUnc1xuICogIFVWcyByZXBlYXQgaXQgYXQgdGhlIHJlYWwgbWVzaCBwaXRjaC4gYHdpcmVgIGlzIHRoZSB3aXJlIHdpZHRoIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGNlbGwuICovXG5mdW5jdGlvbiBjaGFpbmxpbmtUaWxlKHNpemU6IG51bWJlciwgd2lyZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHgubGluZVdpZHRoID0gTWF0aC5tYXgoMS41LCB3aXJlICogcyk7XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGNvbnN0IHYgPSAxNTAgKyBNYXRoLnJvdW5kKHJuZCgpICogMzApO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2IoJHt2fSwke3YgKyAyfSwke3YgKyA0fSlgO1xuICAgIC8vIHR3byBkaWFnb25hbHMgdGhyb3VnaCB0aGUgdGlsZSwgb2Zmc2V0IHNvIHRoZSB3cmFwIG1ha2VzIGEgY29udGludW91cyBkaWFtb25kIGxhdHRpY2VcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCAwKTsgY3R4LmxpbmVUbyhzLCBzKTtcbiAgICBjdHgubW92ZVRvKHMsIDApOyBjdHgubGluZVRvKDAsIHMpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyB0aGUga251Y2tsZSB3aGVyZSB3aXJlcyB0d2lzdCByb3VuZCBlYWNoIG90aGVyLCBhdCB0aGUgdHdvIGNyb3NzaW5ncyBvbiB0aGUgdGlsZSBlZGdlc1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7diAtIDIwfSwke3YgLSAxOH0sJHt2IC0gMTZ9KWA7XG4gICAgZm9yIChjb25zdCBbeCwgeV0gb2YgW1swLCAwXSwgW3MsIDBdLCBbMCwgc10sIFtzLCBzXSwgW3MgLyAyLCBzIC8gMl1dKSB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSwgY3R4LmxpbmVXaWR0aCAqIDAuOSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBCQU1CT08gU1RSSVAgdGlsZTogdmVydGljYWwgc3BsaXQtYmFtYm9vIHN0cmlwcyB3aXRoIHBhbGUgY3VsbSBmYWNlcywgZGFyayBqb2ludHMgYmV0d2VlbiB0aGVtXG4gKiAgYW5kIGEgbm9kZSBsaW5lIG9yIHR3byAtLSBhIG11bHRpcGxpZXIgb24gdGhlIG1lYXN1cmVkIHNpbHZlci1ncmV5LiAqL1xuZnVuY3Rpb24gYmFtYm9vVGlsZShzaXplOiBudW1iZXIsIHN0cmlwczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IHN3ID0gcyAvIHN0cmlwcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IHN0cmlwczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MCArIHJuZCgpICogMC4yLCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0b25lKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2IC0gMn0sJHt2IC0gNn0pYDsgY3R4LmZpbGxSZWN0KGIgKiBzdywgMCwgc3csIHMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUwLDQyLDM0LDAuNiknOyBjdHguZmlsbFJlY3QoYiAqIHN3LCAwLCBNYXRoLm1heCgxLCBzICogMC4wMDYpLCBzKTtcbiAgICAgIC8vIGEgaGlnaGxpZ2h0IGRvd24gdGhlIGN1bG0ncyByb3VuZFxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTApJzsgY3R4LmZpbGxSZWN0KGIgKiBzdyArIHN3ICogMC4zNSwgMCwgc3cgKiAwLjI1LCBzKTtcbiAgICAgIC8vIG5vZGUgcmluZ3NcbiAgICAgIGNvbnN0IG4gPSAxICsgTWF0aC5mbG9vcihybmQoKSAqIDIpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHsgY29uc3QgeSA9IHJuZCgpICogczsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDcwLDYwLDQ4LDAuNDUpJzsgY3R4LmZpbGxSZWN0KGIgKiBzdywgeSwgc3csIE1hdGgubWF4KDEsIHMgKiAwLjAwOCkpOyB9XG4gICAgICAvLyBmaW5lIGdyYWluIGxpbmVzXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDY7IGsrKykgeyBjb25zdCB4ID0gYiAqIHN3ICsgcm5kKCkgKiBzdzsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDgwLDcwLDU4LCR7MC4wNSArIHJuZCgpICogMC4xfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7IH1cbiAgICB9XG4gICAgLy8gbW91bGQgc3BlY2tsZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzAwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLDI4LDI0LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHgsIHksIDEgKyBybmQoKSAqIDIsIDEgKyBybmQoKSAqIDIpOyB9XG4gIH0pO1xufVxuXG4vKiogUE9TVEVSIHRpbGUgZm9yIGEgaG9hcmRpbmc6IHRvcm4gcGFzdGUtdXAgc2hlZXRzIGFuZCBhIHNwcmF5IHN0ZW5jaWwgb3ZlciBhIFRSQU5TUEFSRU5UIGdyb3VuZCxcbiAqICBib3VuZCBvbiBhbiBhbHBoYS10ZXN0ZWQgcGFuZSBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgc2hlZXQuIGBsaW5lc2AgYXJlIHRoZSBzdGVuY2lsXG4gKiAgc3RyaW5nczsgYSBwcmludGVkIGdyYXBoaWMgaXMgZXhhY3RseSB0aGUgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIGNhc2UuICovXG5mdW5jdGlvbiBwb3N0ZXJUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBsaW5lczogc3RyaW5nW10pOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBwYXN0ZS11cHM6IG92ZXJsYXBwaW5nIG9mZi13aGl0ZSByZWN0YW5nbGVzIHdpdGggdG9ybiBlZGdlcyBhbmQgZmFpbnQgcHJpbnQgbGluZXNcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4zMCksIHkgPSBzICogKDAuMTUgKyBybmQoKSAqIDAuNDUpLCB3ID0gcyAqICgwLjE0ICsgcm5kKCkgKiAwLjE2KSwgaCA9IHMgKiAoMC4xOCArIHJuZCgpICogMC4yMik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHsyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwkezIyMiArIE1hdGgucm91bmQocm5kKCkgKiAxOCl9LCR7MjEwICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKX0sMC45NilgO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgY29uc3QgbiA9IDk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIGN0eC5saW5lVG8oeCArIHcgKiBpIC8gbiwgeSArIChybmQoKSAtIDAuNSkgKiBoICogMC4wOCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIGN0eC5saW5lVG8oeCArIHcgKyAocm5kKCkgLSAwLjUpICogdyAqIDAuMDgsIHkgKyBoICogaSAvIG4pO1xuICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkgY3R4LmxpbmVUbyh4ICsgdyAqIGkgLyBuLCB5ICsgaCArIChybmQoKSAtIDAuNSkgKiBoICogMC4xMik7XG4gICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSBjdHgubGluZVRvKHggKyAocm5kKCkgLSAwLjUpICogdyAqIDAuMDgsIHkgKyBoICogaSAvIG4pO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDQwLDQ1LDAuNTUpJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSBjdHguZmlsbFJlY3QoeCArIHcgKiAwLjEsIHkgKyBoICogKDAuMiArIGkgKiAwLjEpLCB3ICogKDAuMyArIHJuZCgpICogMC41KSwgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgfVxuICAgIC8vIHNwcmF5IHN0ZW5jaWwsIHNsaWdodGx5IHNvZnQgYW5kIHVuZXZlblxuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyMCwyMiwwLjg4KSc7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAke01hdGgucm91bmQocyAqIDAuMDcpfXB4IHNhbnMtc2VyaWZgO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcyAqIDAuNDAsIHkgPSBzICogKDAuNDQgKyBpICogMC4xMyk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDM7IGsrKykgeyBjdHguZ2xvYmFsQWxwaGEgPSAwLjY7IGN0eC5maWxsVGV4dChsaW5lc1tpXSwgeCArIChybmQoKSAtIDAuNSkgKiAzLCB5ICsgKHJuZCgpIC0gMC41KSAqIDMpOyB9XG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBTVFJJUEUgdGlsZTogYWx0ZXJuYXRpbmcgY29sb3VyIGJhbmRzIGFsb25nIHUgKGFuIGF3bmluZyksIHdpdGggYSBzb2Z0IGdyaW1lIG11bHRpcGx5IHNvIHRoZSBjbG90aFxuICogIHJlYWRzIHdvcm4gcmF0aGVyIHRoYW4gcHJpbnRlZC4gYGFgL2BiYCBhcmUgdGhlIHR3byBiYW5kIGNvbG91cnMgYXMgW3IsZyxiXSAwLTEuIEJvdW5kIGFzIG1hcCBvbiBhXG4gKiAgV0hJVEUgbWF0ZXJpYWwgc28gdGhlIGJhbmRzIGNhcnJ5IHRoZSB3aG9sZSBhbGJlZG8uICovXG5mdW5jdGlvbiBzdHJpcGVUaWxlKHNpemU6IG51bWJlciwgYmFuZHM6IG51bWJlciwgYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgcmdiKCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9KWA7XG4gICAgY29uc3QgdyA9IHMgLyBiYW5kcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhbmRzOyBpKyspIHsgY3R4LmZpbGxTdHlsZSA9IHJnYihpICUgMiA/IGIgOiBhKTsgY3R4LmZpbGxSZWN0KE1hdGguZmxvb3IoaSAqIHcpLCAwLCBNYXRoLmNlaWwodykgKyAxLCBzKTsgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDQgKyBybmQoKSAqIHMgKiAwLjA4LCBhbCA9IDAuMDYgKyBybmQoKSAqIDAuMTg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxNTAsMTQwLDEyNSwke2FsfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDE1MCwxNDAsMTI1LDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTIwMDsgaSsrKSB7IGNvbnN0IHYgPSAyMDAgKyBNYXRoLnJvdW5kKHJuZCgpICogNTUpOyBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4xMClgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDEuNSwgMS41KTsgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFNlYW1sZXNzIGFyb3VuZC1ieS11cCBVVnMgZm9yIGEgTGF0aGVHZW9tZXRyeTogdSBmcm9tIHRoZSBTRUdNRU5UIGluZGV4ICh0aGUgbGF0aGUgb3JkZXJzIGl0c1xuICogIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IsIGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgc28gdGhlIGR1cGxpY2F0ZWQgc2VhbSBjb2x1bW4gcmVhZHNcbiAqICB1ID0gcmVwZWF0cyBleGFjdGx5IGFuZCBSZXBlYXRXcmFwcGluZyBjbG9zZXMgaXQuIGBzY2FsZWAgaXMgdGhlIHRpbGUgc2l6ZSBpbiBtZXRyZXM7IHRoZVxuICogIGFyb3VuZC1yZXBlYXQgY291bnQgaXMgcm91bmRlZCBzbyB0aGUgdGlsZSBtZWV0cyBpdHNlbGYsIGZyb20gdGhlIHByb2ZpbGUncyB3aWRlc3QgcmFkaXVzLiAqL1xuZnVuY3Rpb24gbGF0aGVVVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcG9pbnRDb3VudDogbnVtYmVyLCBzZWc6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdlNjYWxlID0gc2NhbGUsIHYwID0gMCk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGxldCByTWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHJNYXggPSBNYXRoLm1heChyTWF4LCBNYXRoLmh5cG90KHAuZ2V0WChpKSwgcC5nZXRaKGkpKSk7XG4gIGNvbnN0IHJlcCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoMiAqIE1hdGguUEkgKiByTWF4IC8gc2NhbGUpKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBzID0gTWF0aC5mbG9vcihpIC8gcG9pbnRDb3VudCk7XG4gICAgdXZbaSAqIDJdID0gKHMgLyBzZWcpICogcmVwOyB1dltpICogMiArIDFdID0gKHAuZ2V0WShpKSAtIHYwKSAvIHZTY2FsZTtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG59XG5cbi8qKiBFWFBPU0VELUFHR1JFR0FURSB0aWxlOiBhIGRhcmsgbW9ydGFyIGdyb3VuZCBwYWNrZWQgd2l0aCByb3VuZGVkIHBlYmJsZXMgaW4gYSBtZWFzdXJlZCBwYWxldHRlLFxuICogIGVhY2ggZHJhd24gYXQgbmluZSB3cmFwcGVkIG9mZnNldHMgc28gdGhlIHRpbGUgaXMgc2VhbWxlc3MuIGBvLnBhbGV0dGVgIGlzIGEgbGlzdCBvZiBbcixnLGJdXG4gKiAgcmF0aW9zIGFnYWluc3QgdGhlIG1hdGVyaWFsIGNvbG91ciwgYG8uZ3JvdW5kYCB0aGUgbW9ydGFyIHJhdGlvLCBgby5jb3VudGAgdGhlIHBlYmJsZSBjb3VudC4gKi9cbmZ1bmN0aW9uIHBlYmJsZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX0pYDtcbiAgICBjdHguZmlsbFN0eWxlID0gcmdiKG8uZ3JvdW5kID8/IFswLjQ1LCAwLjQyLCAwLjM4XSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBwYWw6IG51bWJlcltdW10gPSBvLnBhbGV0dGUgPz8gW1swLjg1LCAwLjc4LCAwLjY2XSwgWzAuNzIsIDAuNjIsIDAuNTBdLCBbMC42MCwgMC41OCwgMC41NV0sIFswLjkwLCAwLjg2LCAwLjgwXV07XG4gICAgY29uc3QgbiA9IG8uY291bnQgPz8gOTAwLCByTWluID0gcyAqIChvLnJNaW4gPz8gMC4wMTIpLCByTWF4ID0gcyAqIChvLnJNYXggPz8gMC4wMjgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByeCA9IHJNaW4gKyBybmQoKSAqIChyTWF4IC0gck1pbiksIHJ5ID0gcnggKiAoMC42ICsgcm5kKCkgKiAwLjUpLCBhID0gcm5kKCkgKiBNYXRoLlBJO1xuICAgICAgY29uc3QgYyA9IHBhbFtNYXRoLmZsb29yKHJuZCgpICogcGFsLmxlbmd0aCldLCBrID0gMC44NSArIHJuZCgpICogMC4zO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHJnYihjLm1hcCgodikgPT4gTWF0aC5taW4oMSwgdiAqIGspKSk7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByeCwgcnksIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgLy8gYSBoaWdobGlnaHQgY3Jlc2NlbnQgb24gdGhlIGxpdCBzaWRlIHNvIGVhY2ggc3RvbmUgcmVhZHMgYXMgYSBidW1wXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xOCknO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHggLSByeCAqIDAuMiwgeSArIGR5IC0gcnkgKiAwLjI1LCByeCAqIDAuNSwgcnkgKiAwLjQsIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBUWVJFIFRSRUFEIHRpbGUgZm9yIGEgbGF0aGUgY2FycnlpbmcgYGN5bFVWYDogdSBydW5zIEFST1VORCB0aGUgdHlyZSBhbmQgdiBVUCBpdCwgc28gdHJlYWQgc2xvdHMgYXJlXG4gKiAgYmFycyBhdCBjb25zdGFudCB1IGFuZCB0aGUgY2lyY3VtZmVyZW50aWFsIGdyb292ZXMgYXJlIGxpbmVzIGF0IGNvbnN0YW50IHYuIERyYXduIGFzIHJhdGlvcyBvbiB3aGl0ZVxuICogIGFuZCBtdWx0aXBsaWVkIGludG8gdGhlIChsaWZ0ZWQpIHJ1YmJlciBjb2xvdXI7IGBvLmdyb292ZWAgaXMgdGhlIGRhcmtlc3QgcmF0aW8sIGtlcHQgYWJvdmUgdGhlXG4gKiAgbHVtYS01OCBob2xlIGJhbmQgYnkgdGhlIGNhbGxlci4gYG8uc2xvdHNgIGJhcnMgcGVyIHRpbGUsIGBvLnJpbmdzYCBjaXJjdW1mZXJlbnRpYWwgbGluZXMuICovXG5mdW5jdGlvbiB0cmVhZFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjgwLCBzbG90cyA9IG8uc2xvdHMgPz8gMiwgcmluZ3MgPSBvLnJpbmdzID8/IDI7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGNvbnN0IGd2ID0gTWF0aC5yb3VuZCgyNTUgKiBncm9vdmUpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9KWA7XG4gICAgY29uc3QgcGl0Y2ggPSBzIC8gc2xvdHMsIHcgPSBwaXRjaCAqIChvLnNsb3RXaWR0aCA/PyAwLjE2KTtcbiAgICAvLyB0cmVhZCBzbG90cyBzcGFuIHRoZSBiYW5kIGJldHdlZW4gdGhlIHR3byBlZGdlIHNob3VsZGVycyAodiAwLjEyLi4wLjg4IG9mIHRoZSB0aWxlKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xvdHM7IGkrKykgeyBjb25zdCB4ID0gaSAqIHBpdGNoICsgcGl0Y2ggKiAwLjQgKyAocm5kKCkgLSAwLjUpICogcGl0Y2ggKiAwLjE7IGN0eC5maWxsUmVjdCh4LCBzICogMC4xMiwgdywgcyAqIDAuNzYpOyBjdHguZmlsbFJlY3QoeCAtIHMsIHMgKiAwLjEyLCB3LCBzICogMC43Nik7IH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpbmdzOyBpKyspIHsgY29uc3QgeSA9IHMgKiAoMC4yICsgMC42ICogKGkgKyAwLjUpIC8gcmluZ3MpOyBjdHguZmlsbFJlY3QoMCwgeSAtIDEuNSwgcywgMyk7IH1cbiAgICAvLyBzaWRld2FsbCBzaGVlbjogYSBzb2Z0IGxpZ2h0ZXIgd2FzaCBzbyB0aGUgcnViYmVyIGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjEyKSwgdiA9IDIzNSArIE1hdGgucm91bmQocm5kKCkgKiAyMCk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTsgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuNSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBPTEQgVFlSRSB0aWxlOiBUV08gdHlyZSBoZWlnaHRzIHRhbGwgYnkgYG8ucGl0Y2hgIG1ldHJlcyBhcm91bmQgKGN5bFVWKS4gVGhlIHVwcGVyIGhhbGYgKHYgMC41LTEpXG4gKiAgaXMgYSB0cmVhZGVkIHR5cmUsIHRoZSBsb3dlciBoYWxmICh2IDAtMC41KSBhIHdvcm4gU0xJQ0sgd2l0aCBjaXJjdW1mZXJlbnRpYWwgZ3Jvb3ZlcyBhbmQgc2hvcnRcbiAqICBzaG91bGRlciBzaXBlcyBvbmx5LCBzbyBhIHN0YWNrIG1peGVzIGJhbGQgYW5kIHRyZWFkZWQgdHlyZXMgb2ZmIG9uZSBjYW52YXMgYnkgdjAuIERyYXduIGFzIFJBVElPU1xuICogIGFnYWluc3QgdGhlIHZlcnRleC1jb2xvdXJlZCBydWJiZXIgYXQgYGJhc2VgICgyMDAvMjU1IC0+IHZlcnRleCB0b25lcyBhcmUgYXV0aG9yZWQgMS4yNzV4IHRoZVxuICogIGludGVuZGVkIGFsYmVkbyBzbyBkdXN0IGFuZCBzY3VmZnMgY2FuIGdvIEJSSUdIVEVSIHRoYW4gdGhlIHJ1YmJlciB1bmRlciBhIG11bHRpcGx5IGNhbnZhcykuXG4gKiAgUm93cyBhcmUgaGVpZ2h0czogbG93ZXIgc2lkZXdhbGwsIHRyZWFkIGJhbmQgKHYgYG8uYmFuZFswXWAuLmBvLmJhbmRbMV1gIG9mIHRoZSBzdHJpcCksIHVwcGVyXG4gKiAgc2lkZXdhbGwgd2l0aCBiZWFkIHJpbmdzIGFuZCBtb3VsZCBsaW5lcy4gV2VhcjogYSB3YXJtIGR1c3Qgd2FzaCBvbiB0aGUgbG93ZXIgc2hvdWxkZXIsIGdyZXkgc2N1ZmZzXG4gKiAgb24gYm90aCBzaG91bGRlcnMsIGR1c3QgY2F1Z2h0IGluIHRoZSBjdXRzLCBncmFpbiBvdmVyIGV2ZXJ5dGhpbmcuICovXG5mdW5jdGlvbiB0eXJlVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gMjAwLCBiYW5kID0gby5iYW5kID8/IFswLjI0LCAwLjc2XSwgZ3Jvb3ZlID0gby5ncm9vdmUgPz8gMC40NTtcbiAgICBjb25zdCBndiA9IE1hdGgucm91bmQoYmFzZSAqIGdyb292ZSksIHJ2ID0gTWF0aC5yb3VuZChiYXNlICogMC43KSwgbXYgPSBNYXRoLnJvdW5kKGJhc2UgKiAwLjkpO1xuICAgIGNvbnN0IGR1c3QgPSBvLmR1c3QgPz8gWzIzMiwgMjE0LCAxOTBdO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7YmFzZX0sJHtiYXNlfSwke2Jhc2V9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMgKiBzIC8gNjsgaSsrKSB7IGNvbnN0IHYgPSBiYXNlICsgTWF0aC5yb3VuZCgocm5kKCkgLSAwLjUpICogMjIpOyBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDIsIDIpOyB9XG4gICAgLy8gb25lIHR5cmUgc3RyaXAgYmV0d2VlbiBjYW52YXMgcm93cyB5YSAodG9wKSBhbmQgeWIgKGJvdHRvbSk7IGNhbnZhcyB5IGdyb3dzIERPV04sIHYgZ3Jvd3MgVVBcbiAgICBjb25zdCBzdHJpcCA9ICh5YTogbnVtYmVyLCB5YjogbnVtYmVyLCB0cmVhZGVkOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCBoID0geWIgLSB5YSwgYjAgPSB5YSArIGggKiAoMSAtIGJhbmRbMV0pLCBiMSA9IHlhICsgaCAqICgxIC0gYmFuZFswXSk7XG4gICAgICBjb25zdCBuZyA9IG8uZ3Jvb3ZlcyA/PyAzLCBndyA9IGggKiAwLjAyNDtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9KWA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5nOyBpKyspIHsgY29uc3QgeSA9IGIwICsgKGIxIC0gYjApICogKGkgKyAxKSAvIChuZyArIDEpOyBjdHguZmlsbFJlY3QoMCwgeSAtIGd3IC8gMiwgcywgZ3cpOyB9XG4gICAgICBjb25zdCBucyA9IG8uc2lwZXMgPz8gMiwgdyA9IHMgKiAoby5zaXBlV2lkdGggPz8gMC4wNSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8PSBuZzsgaysrKSB7XG4gICAgICAgIGNvbnN0IHkwID0gayA9PT0gMCA/IGIwIDogYjAgKyAoYjEgLSBiMCkgKiBrIC8gKG5nICsgMSkgKyBndyAvIDIsIHkxID0gayA9PT0gbmcgPyBiMSA6IGIwICsgKGIxIC0gYjApICogKGsgKyAxKSAvIChuZyArIDEpIC0gZ3cgLyAyO1xuICAgICAgICAvLyBhIHNsaWNrIGtlZXBzIG9ubHkgU0hPUlQgc2lwZXMgYXQgdGhlIHR3byBzaG91bGRlciByb3dzLCBjdXQgaW4gZnJvbSB0aGUgYmFuZCBlZGdlXG4gICAgICAgIGNvbnN0IG91dGVyID0gayA9PT0gMCB8fCBrID09PSBuZztcbiAgICAgICAgaWYgKCF0cmVhZGVkICYmICFvdXRlcikgY29udGludWU7XG4gICAgICAgIGNvbnN0IHlzMCA9IHRyZWFkZWQgPyB5MCA6IChrID09PSAwID8geTAgOiB5MSAtICh5MSAtIHkwKSAqIDAuNDUpLCB5czEgPSB0cmVhZGVkID8geTEgOiAoayA9PT0gMCA/IHkwICsgKHkxIC0geTApICogMC40NSA6IHkxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuczsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgeCA9ICgoaSArIDAuNSkgLyBucyArIChrICUgMikgKiAwLjUgLyBucykgKiBzICsgKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA2LCBzbCA9IChybmQoKSAtIDAuNSkgKiBzICogMC4wODtcbiAgICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBkeCwgeXMwKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcgKyBzbCwgeXMxKTsgY3R4LmxpbmVUbyh4ICsgZHggKyBzbCwgeXMxKTsgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHNob3VsZGVyIHN0ZXAgYXQgdGhlIHRvcCBvZiB0aGUgYmFuZCwgYmVhZCByaW5ncyBhbmQgbW91bGQgbGluZXMgb24gdGhlIHNpZGV3YWxsc1xuICAgICAgY29uc3Qgc2ggPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgYjAgLSBoICogMC4wMywgMCwgYjAgKyBoICogMC4wMik7IHNoLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2d2fSwke2d2fSwke2d2fSwwKWApOyBzaC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtndn0sJHtndn0sJHtndn0sMC40NSlgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBzaDsgY3R4LmZpbGxSZWN0KDAsIGIwIC0gaCAqIDAuMDMsIHMsIGggKiAwLjA1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cnZ9LCR7cnZ9LCR7cnZ9KWA7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjA0NSwgcywgaCAqIDAuMDEyKTsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuOTQsIHMsIGggKiAwLjAxMik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke212fSwke212fSwke212fSlgOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC4xMSwgcywgMik7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjg4LCBzLCAyKTtcbiAgICAgIC8vIHdlYXI6IHdhcm0gcm9hZCBkdXN0IG9uIHRoZSBsb3dlciBzaG91bGRlciBhbmQgc2lkZXdhbGwsIGdyZXkgc2N1ZmZzIG9uIGJvdGggc2hvdWxkZXJzXG4gICAgICBjb25zdCBkZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiwgMCwgeWEgKyBoICogMC42KTsgZGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LCR7by5kdXN0QWxwaGEgPz8gMC4zNX0pYCk7IGRnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2R1c3RbMF19LCR7ZHVzdFsxXX0sJHtkdXN0WzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGRnOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC42LCBzLCBoICogMC40KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc2N1ZmZzID8/IDE0KTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSA8IDAuNSA/IGIwICsgKHJuZCgpIC0gMC4zKSAqIGggKiAwLjA4IDogYjEgKyAocm5kKCkgLSAwLjcpICogaCAqIDAuMDgsIHIgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDUpLCB2ID0gMjI1ICsgTWF0aC5yb3VuZChybmQoKSAqIDI1KTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7IGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjUpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSwgciAqIDIuMiwgciAqIDAuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2xpZ2h0ZXInO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBiMCArIHJuZCgpICogKGIxIC0gYjApLCB2ID0gNiArIE1hdGgucm91bmQocm5kKCkgKiAxNCk7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHtNYXRoLnJvdW5kKHYgKiAwLjkpfSwke01hdGgucm91bmQodiAqIDAuNzUpfSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMiArIHJuZCgpICogNiwgMiArIHJuZCgpICogMyk7IH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH07XG4gICAgc3RyaXAoMCwgcyAvIDIsIHRydWUpOyAgICAgIC8vIHYgMC41Li4xOiB0cmVhZGVkXG4gICAgc3RyaXAocyAvIDIsIHMsIGZhbHNlKTsgICAgIC8vIHYgMC4uMC41OiBzbGlja1xuICB9KTtcbn1cblxuLyoqIEEgdGFwZXJlZCBib3g6IEJveEdlb21ldHJ5KDEsIGgsIDEpIHdob3NlIHgveiBhcmUgc2NhbGVkIHBlciB2ZXJ0ZXggYnkgdGhlIGZvb3RwcmludCBpbnRlcnBvbGF0ZWRcbiAqICBmcm9tICh3MCwgZDApIGF0IHRoZSBib3R0b20gdG8gKHcxLCBkMSkgYXQgdGhlIHRvcC4gTm9ybWFscyByZWNvbXB1dGVkIHNvIHRoZSBzbGFudGVkIGZhY2VzIHNoYWRlXG4gKiAgZmxhdC4gYGJgID0gW2N4LCB5Qm90dG9tLCBjeiwgdzAsIGQwLCB3MSwgZDEsIGhdLiAqL1xuZnVuY3Rpb24gZnJ1c3R1bShiOiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgW2N4LCB5MCwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXSA9IGI7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgaCwgMSk7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gKHAuZ2V0WShpKSArIGggLyAyKSAvIGg7XG4gICAgcC5zZXRYKGksIHAuZ2V0WChpKSAqICh3MCArICh3MSAtIHcwKSAqIHQpKTsgcC5zZXRaKGksIHAuZ2V0WihpKSAqIChkMCArIChkMSAtIGQwKSAqIHQpKTtcbiAgfVxuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIGcudHJhbnNsYXRlKGN4LCB5MCArIGggLyAyLCBjeik7XG4gIHJldHVybiBnO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNhbm9weS1tb2R1bGUgaGVscGVyc1xuICogVGhlIGZpdmUgQ0FOT1BZIE1PRFVMRVMgLS0gbmlwYSB0aGF0Y2gsIHZldGl2ZXIgdGhhdGNoLCBzcGxpdCBiYW1ib28sIGNvcnJ1Z2F0ZWQgbWV0YWwsXG4gKiB0YXJwYXVsaW4gLS0gYXJlIG9uZSBmYW1pbHk6IGZvdXIgY29ybmVyIHBvc3RzIGluc2lkZSBhIDQgeCA0IG0gbW9kdWxlLCBhIGhlYWQgZnJhbWUsIGFuZCBhIHJvb2ZcbiAqIHdob3NlIG1hdGVyaWFsIGlzIHRoZSB3aG9sZSBpZGVudGl0eS4gV2hhdCB0aGV5IG5lZWQgYmV5b25kIHRoZSBzdHJlZXQtcHJvcCB2b2NhYnVsYXJ5IGlzIGFcbiAqIHJvb2ZpbmcgdGlsZSBwZXIgbWF0ZXJpYWwgYW5kIHRoZSBjdWxtIG1hcHBpbmcgYSByb3VuZCBiYW1ib28gcG9sZSB3YW50cy5cbiAqXG4gKiBgY3VsbVVWYCwgYGdyYWluTGluZXNgLCBgd2VhdGhlclBhdGNoZXNgLCBgbW91bGRDbHVzdGVyc2AgYW5kIGBjdWxtVGlsZWAgYXJlIHBvcnRlZCBWRVJCQVRJTSBmcm9tXG4gKiBzY3JhdGNoL19mZW5jZS9mZW5jZS5oZWxwZXJzLnRtcGwsIHdoZXJlIHRoZXkgd2VyZSB3cml0dGVuIGZvciB0aGUgYmFtYm9vIGZlbmNlIHBhbmVsIGFuZCB3aGVyZVxuICogdGhlIHJlYXNvbmluZyBiZWhpbmQgZXZlcnkgbnVtYmVyIGlzIHJlY29yZGVkLiBUaGV5IGFyZSBjb3BpZWQgcmF0aGVyIHRoYW4gc2hhcmVkIGJlY2F1c2UgdGhlIHR3b1xuICogZmFtaWxpZXMga2VlcCBzZXBhcmF0ZSB0ZW1wbGF0ZSBzZXRzOyBhIHRoaXJkIGZhbWlseSB3YW50aW5nIHRoZW0gc2hvdWxkIG1vdmUgdGhlbSB1cCBpbnRvXG4gKiBoZWxwZXJzLnRtcGwgcmF0aGVyIHRoYW4gY29weSB0aGVtIGEgc2Vjb25kIHRpbWUuXG4gKi9cblxuLyoqIENVTE0gVVZzOiB1IGFyb3VuZCB0aGUgY2lyY3VtZmVyZW5jZSBhbmQgdiBhbG9uZyB0aGUgbGVuZ3RoLCBib3RoIGluIG1ldHJlcyBvdmVyIGBzY2FsZWAsIHNvIGFcbiAqICBjdWxtIHRpbGUncyBub2RlIHJpbmdzIGNyb3NzIHRoZSBjdWxtIGF0IHJlYWwgc3BhY2luZyB3aGljaGV2ZXIgd2F5IHRoZSBjeWxpbmRlciBpcyB0aGVuIHJvdGF0ZWQuXG4gKiAgQXBwbHkgQkVGT1JFIHJvdGF0ZS90cmFuc2xhdGUuIGB2T2ZmYCBwaGFzZXMgdGhlIHRpbGUgYWxvbmcgdGhlIGN1bG0gc28gbm8gdHdvIGN1bG1zIChvciBhIGNvcmRcbiAqICBjb2xsYXIpIHJpbmcgYXQgdGhlIHNhbWUgc3RhdGlvbi4gKi9cbmZ1bmN0aW9uIGN1bG1VVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcjogbnVtYmVyLCBoOiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIHZPZmYgPSAwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICBjb25zdCBrdSA9ICgyICogTWF0aC5QSSAqIHIpIC8gc2NhbGUsIGt2ID0gaCAvIHNjYWxlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiBrdSwgdXYuZ2V0WShpKSAqIGt2ICsgdk9mZik7XG4gIHJldHVybiBnO1xufVxuXG4vKiogRmluZSBsb25naXR1ZGluYWwgZ3JhaW4gYmV0d2VlbiB5MCBhbmQgeTEgYWNyb3NzIGEgYmFuZCB4MC4ueDE6IG1hbnkgaGFpcmxpbmVzLCBtb3N0bHkgYSBkYXJrXG4gKiAgZmlicmUgdG9uZSwgYSBmZXcgYmxlYWNoZWQsIHNvIHRoZSBzdXJmYWNlIHJlYWRzIGFzIGZpYnJvdXMgYmFtYm9vIHJhdGhlciB0aGFuIHBhaW50LiAqL1xuZnVuY3Rpb24gZ3JhaW5MaW5lcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcm5kOiAoKSA9PiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIG46IG51bWJlciwgZGFyazogc3RyaW5nLCBsaWdodDogc3RyaW5nLCBhTWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICBjb25zdCB4ID0geDAgKyBybmQoKSAqICh4MSAtIHgwKSwgYSA9IDAuMDQgKyBybmQoKSAqIGFNYXgsIHcgPSBybmQoKSA8IDAuNzUgPyAxIDogMS42O1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JuZCgpIDwgMC43MiA/IGRhcmsgOiBsaWdodH0sJHthLnRvRml4ZWQoMyl9KWA7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHkwLCB3LCB5MSAtIHkwKTtcbiAgfVxufVxuXG4vKiogU29mdCBjbG91ZHkgd2VhdGhlcmluZyBhbG9uZyB0aGUgZmlicmUgZGlyZWN0aW9uOiBsZW5ndGh3aXNlIHBhdGNoZXMgb2Ygd2FybSBicm93bi1ncmV5IChvbGRcbiAqICBsaWduaW4gc2hvd2luZyB0aHJvdWdoIHRoZSBibGVhY2gpIGFuZCBvZiBuZWFyLXdoaXRlIChzdW4tYmxlYWNoZWQgZmFjZXMpLCBzbyB0aGUgdG9uZSBkcmlmdHNcbiAqICB0aGUgd2F5IHdlYXRoZXJlZCBiYW1ib28gZG9lcyBpbnN0ZWFkIG9mIHNpdHRpbmcgYXQgb25lIGdyZXkuIFZlcnRpY2FsID0gYWxvbmcgdGhlIGZpYnJlLiAqL1xuZnVuY3Rpb24gd2VhdGhlclBhdGNoZXMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJuZDogKCkgPT4gbnVtYmVyLCBzOiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIG46IG51bWJlciwgd2FybUE6IG51bWJlciwgYmxlYWNoQTogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgY29uc3QgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjEyICsgcm5kKCkgKiAwLjQ1KSwgd2FybSA9IHJuZCgpIDwgMC41O1xuICAgIGNvbnN0IGMgPSB3YXJtID8gJzExMiwxMDAsODgnIDogJzI1NSwyNTUsMjU1JywgYSA9IHdhcm0gPyB3YXJtQSAqICgwLjQgKyBybmQoKSAqIDAuNikgOiBibGVhY2hBICogKDAuNCArIHJuZCgpICogMC42KTtcbiAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5LCAwLCB5ICsgbGVuKTtcbiAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjfSwwKWApOyBnMi5hZGRDb2xvclN0b3AoMC4zNSwgYHJnYmEoJHtjfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMC42NSwgYHJnYmEoJHtjfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4MCwgeSArIGR5LCB4MSAtIHgwLCBsZW4pO1xuICB9XG59XG5cbi8qKiBNb3VsZDogY2x1c3RlcnMgb2Ygc21hbGwgZGFyayBzcGVja3MgKGEgZmV3IGRvemVuIGVhY2gpLCB0aGUgd2F5IGJsYWNrIG1vdWxkIHNpdHMgb24gb3V0ZG9vclxuICogIGJhbWJvbyAtLSBkZW5zZSBhdCBhIGZldyBzcG90cywgYWJzZW50IGVsc2V3aGVyZS4gQWxwaGEgY2FwcGVkIHNvIHRoZSBkYXJrZXN0IHNwZWNrIG92ZXIgdGhlXG4gKiAgbWVhc3VyZWQgYWxiZWRvIHN0YXlzIHdlbGwgY2xlYXIgb2YgdGhlIGhvbGUgZ2F0ZSdzIGx1bWEgNTguIFdyYXBzIGluIHkuICovXG5mdW5jdGlvbiBtb3VsZENsdXN0ZXJzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBybmQ6ICgpID0+IG51bWJlciwgczogbnVtYmVyLCBzcG90czogbnVtYmVyW11bXSwgcng6IG51bWJlciwgcnk6IG51bWJlciwgbjogbnVtYmVyLCBhTWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChjb25zdCBbY3gsIGN5XSBvZiBzcG90cykge1xuICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSwgMCwgY3gsIGN5LCBNYXRoLm1heChyeCwgcnkpICogMC44KTtcbiAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjgsMjYsMjIsJHsoYU1heCAqIDAuOSkudG9GaXhlZCgzKX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyOCwyNiwyMiwwKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCwgY3kgKyBkeSwgcngsIHJ5LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgY29uc3QgeCA9IGN4ICsgKHJuZCgpICsgcm5kKCkgLSAxKSAqIHJ4LCB5ID0gY3kgKyAocm5kKCkgKyBybmQoKSAtIDEpICogcnk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjgsMjYsMjIsJHsoMC4wOCArIHJuZCgpICogYU1heCkudG9GaXhlZCgzKX0pYDtcbiAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiAyLCBoID0gMSArIHJuZCgpICogMztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHgsIHkgKyBkeSwgdywgaCk7XG4gICAgfVxuICB9XG59XG5cbi8qKiBDVUxNIHRpbGUgZm9yIHRoZSB3aG9sZS1iYW1ib28gcG9zdCBhbmQgcmFpbHM6IHggcnVucyBBUk9VTkQgdGhlIGN1bG0sIHkgQUxPTkcgaXQgKHNlZSBjdWxtVVYpLFxuICogIDAuNiBtIG9mIGN1bG0gcGVyIHRpbGUuIFR3byBub2RlIHJpbmdzIHBlciB0aWxlIGF0IGlycmVndWxhciBzdGF0aW9ucyAtLSBhIGRhcmsgZ3Jvb3ZlIHVuZGVyIGFcbiAqICBwYWxlIHJhaXNlZCByaWRnZSwgdGhlIGdyYWluIGJyZWFraW5nIGF0IGVhY2ggLS0gd2l0aCBmaW5lIGxvbmdpdHVkaW5hbCBncmFpbiBiZXR3ZWVuIHRoZW0sIGFcbiAqICBsb25nIGRyeWluZyBzcGxpdCwgbGVuZ3Rod2lzZSB3ZWF0aGVyaW5nIHBhdGNoZXMgYW5kIGJsYWNrIG1vdWxkIGdhdGhlcmVkIGp1c3QgYmVsb3cgZWFjaCBub2RlLFxuICogIGFzIGluIHRoZSBwbGF0ZSdzIHBvc3QgYW5kIHJhaWwgY3JvcHMuIEEgbXVsdGlwbGllciBvbiB0aGUgbWVhc3VyZWQgY3VsbSBncmV5LiAqL1xuZnVuY3Rpb24gY3VsbVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgREFSSyA9ICc5Miw3OCw2MicsIExJR0hUID0gJzI1NSwyNTUsMjU1JztcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmMGVmZWMnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gYSBzb2Z0IHRvbmUgZHJpZnQgYXJvdW5kIHRoZSBjdWxtLCBzbyB0aGUgcm91bmQgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgY29uc3QgZ2EgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgcywgMCk7XG4gICAgZ2EuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDEwMCw5Miw4NCwwLjEyKScpOyBnYS5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgyNTUsMjU1LDI1NSwwLjEwKScpOyBnYS5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTAwLDkyLDg0LDAuMTIpJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdhOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIDE0LCAwLjEyLCAwLjMwKTtcbiAgICAvLyBub2RlIHN0YXRpb25zOiB0d28gcGVyIHRpbGUsIGlycmVndWxhciwgbmV2ZXIgd2l0aGluIDAuMTggb2YgZWFjaCBvdGhlciBvciB0aGUgd3JhcFxuICAgIGNvbnN0IG5vZGVzID0gW3MgKiAoMC4yMCArIHJuZCgpICogMC4xMCksIHMgKiAoMC42NiArIHJuZCgpICogMC4xMildO1xuICAgIC8vIGdyYWluIGluIHNlZ21lbnRzIGJldHdlZW4gdGhlIG5vZGVzIHNvIGl0IGJyZWFrcyBhdCBlYWNoIHJpbmdcbiAgICBjb25zdCBzdGF0aW9ucyA9IFswLCAuLi5ub2Rlcywgc107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgKyAxIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIGdyYWluTGluZXMoY3R4LCBybmQsIDAsIHMsIHN0YXRpb25zW2ldLCBzdGF0aW9uc1tpICsgMV0sIDI2MCwgREFSSywgTElHSFQsIDAuMjYpO1xuICAgIC8vIGEgY291cGxlIG9mIGxvbmcgZHJ5aW5nIHNwbGl0cyBhbG9uZyB0aGUgZmlicmVcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDI7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjI1ICsgcm5kKCkgKiAwLjUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDM4LDMyLDI2LDAuNTUpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHkgKyBkeSwgMS40LCBsZW4pO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHggKyAxLjQsIHkgKyBkeSwgMSwgbGVuKTtcbiAgICB9XG4gICAgLy8gdGhlIG5vZGUgcmluZ3NcbiAgICBmb3IgKGNvbnN0IHkgb2Ygbm9kZXMpIHtcbiAgICAgIGNvbnN0IGdzID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkgLSBzICogMC4wMywgMCwgeSk7XG4gICAgICBncy5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNTAsNDAsMCknKTsgZ3MuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDUwLDQwLDAuMjIpJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3M7IGN0eC5maWxsUmVjdCgwLCB5IC0gcyAqIDAuMDMsIHMsIHMgKiAwLjAzKTsgICAgICAgICAgLy8gc2hhZGUgdXAgdG8gdGhlIHJpbmdcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1Miw0NCwzNiwwLjYyKSc7IGN0eC5maWxsUmVjdCgwLCB5LCBzLCAyLjUpOyAgICAgICAgLy8gdGhlIGdyb292ZVxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMzQpJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyAyLjUsIHMsIDQpOyAvLyB0aGUgcmFpc2VkIHNoZWF0aCByaWRnZVxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDYwLDUwLDQwLDAuMzApJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyA2LjUsIHMsIDEuNSk7ICAvLyBpdHMgbG93ZXIgZWRnZVxuICAgICAgY29uc3QgZ2QgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSArIDgsIDAsIHkgKyBzICogMC4wNSk7XG4gICAgICBnZC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNTAsNDAsMC4yMCknKTsgZ2QuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDUwLDQwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ2Q7IGN0eC5maWxsUmVjdCgwLCB5ICsgOCwgcywgcyAqIDAuMDUpO1xuICAgIH1cbiAgICAvLyBtb3VsZCBnYXRoZXJzIGp1c3QgYmVsb3cgdGhlIG5vZGVzIGFuZCBpbiBhIGNvdXBsZSBvZiBsb29zZSBwYXRjaGVzXG4gICAgY29uc3Qgc3BvdHM6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHkgb2Ygbm9kZXMpIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSBzcG90cy5wdXNoKFtybmQoKSAqIHMsIHkgKyBzICogKDAuMDIgKyBybmQoKSAqIDAuMDUpXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgcm5kKCkgKiBzXSk7XG4gICAgbW91bGRDbHVzdGVycyhjdHgsIHJuZCwgcywgc3BvdHMsIHMgKiAwLjEwLCBzICogMC4wNiwgOTAsIDAuMzApO1xuICB9KTtcbn1cblxuXG4vKipcbiAqIFRIQVRDSCB0aWxlLCBmb3IgYSByb29mIG1hcHBlZCB3aXRoIFdPUkxEIFVWcyBzbyB1IHJ1bnMgYWxvbmcgdGhlIHJpZGdlIGFuZCB2IHVwIHRoZSBzbG9wZS5cbiAqXG4gKiBUaGF0Y2ggaXMgbGFpZCBpbiBDT1VSU0VTOiBlYWNoIGNvdXJzZSBpcyBhIGJ1bmRsZSBvZiBzdGVtcyBwZWdnZWQgdG8gYSBwdXJsaW4gd2l0aCBpdHMgYnV0dHNcbiAqIGhhbmdpbmcgb3ZlciB0aGUgY291cnNlIGJlbG93LCBzbyB3aGF0IGEgdmlld2VyIGFjdHVhbGx5IHJlc29sdmVzIGF0IHByb3AgZGlzdGFuY2UgaXMgYSBzdGFjayBvZlxuICogaG9yaXpvbnRhbCBiYW5kcyB3aXRoIGEgc2hhZG93IGxpbmUgdW5kZXIgZWFjaCBidXR0LCBhbmQgYSBmaWJyZSB0ZXh0dXJlIHJ1bm5pbmcgZG93biB0aGUgc2xvcGVcbiAqIGluc2lkZSB0aGVtLiBNb2RlbGxpbmcgdGhlIHN0ZW1zIGlzIHdoYXQgdGhlIHJlZ2lzdHJ5IG5vdGVzIGZvcmJpZDsgdGhpcyBpcyB3aGVyZSB0aGF0IGRldGFpbFxuICogZ29lcyBpbnN0ZWFkLlxuICpcbiAqIE9uZSB0aWxlIGlzIGBjb3Vyc2VzYCBjb3Vyc2VzIHRhbGwuIFRoZSBrbm9icyBhcmUgd2hhdCBzZXBhcmF0ZXMgdGhlIHR3byB0aGF0Y2hlcyBvbiB0aGUgcGxhdGVzOlxuICogICBuaXBhICAgICBicm9hZCBmbGF0IHBhbG0gYmxhZGVzIC0tIGZldyB3aWRlIHN0cm9rZXMgKGBzdGVtV2AgMy03IHB4KSwgYSB3aWRlIHRvbmFsIGBzcHJlYWRgLFxuICogICAgICAgICAgICBhIGRlZXBseSBSQUdHRUQgYnV0dCBsaW5lIGFuZCBvY2Nhc2lvbmFsIG1pc3NpbmcgYmxhZGVzLlxuICogICB2ZXRpdmVyICBjb21iZWQgZ3Jhc3MgLS0gaHVuZHJlZHMgb2YgaGFpcmxpbmVzLCBhIG5hcnJvdyBzcHJlYWQsIGFuIGFsbW9zdCBzdHJhaWdodCBidXR0LlxuICogYG1vc3NgIG11bHRpcGxpZXMgYSBncmVlbiBjYXN0IGludG8gc2NhdHRlcmVkIHBhdGNoZXM6IHRoZSB0aWxlIGlzIGEgTVVMVElQTElFUiBvbiBhIHBhbGUgc3RyYXdcbiAqIGFsYmVkbywgYW5kIGEgbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLCBzbyBncmVlbiBoYXMgdG8gYXJyaXZlIGFzIFwibGVzcyByZWQgYW5kIGJsdWVcIiBhbmQgbmV2ZXJcbiAqIGFzIGEgcGFpbnRlZCBncmVlbi4gTm90aGluZyBoZXJlIGdvZXMgYmVsb3cgMC40MiBvZiB0aGUgYWxiZWRvLCB3aGljaCBrZWVwcyB0aGUgZGFya2VzdCB0ZXhlbCBvZlxuICogYSBzdHJhdyBhdCBsdW1hIH4xNTAgd2VsbCBjbGVhciBvZiB0aGUgc2lsaG91ZXR0ZSBnYXRlJ3MgYmFja2Ryb3AgYmFuZC5cbiAqL1xuZnVuY3Rpb24gdGhhdGNoVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IG5jOiBudW1iZXIgPSBvLmNvdXJzZXMgPz8gNCwgY2ggPSBzIC8gbmM7XG4gICAgY29uc3Qgc3RlbXM6IG51bWJlciA9IG8uc3RlbXMgPz8gMjYwLCBzcHJlYWQ6IG51bWJlciA9IG8uc3ByZWFkID8/IDAuMTI7XG4gICAgY29uc3Qgd01pbjogbnVtYmVyID0gby5zdGVtVz8uWzBdID8/IDEsIHdNYXg6IG51bWJlciA9IG8uc3RlbVc/LlsxXSA/PyAyO1xuICAgIGNvbnN0IHJhZ2dlZDogbnVtYmVyID0gby5yYWdnZWQgPz8gMC4wNjsgICAgICAgICAgICAgICAgIC8vIGJ1dHQtbGluZSB3YXZpbmVzcywgYXMgYSBzaGFyZSBvZiBjaFxuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcblxuICAgIC8vIHRoZSBidXR0IGxpbmUgb2YgZWFjaCBjb3Vyc2UsIGppdHRlcmVkIHBlciBjb2x1bW4gYW5kIFNIQVJFRCB3aXRoIHRoZSBjb3Vyc2UgYWJvdmUgc28gdGhlXG4gICAgLy8gc2hhZG93IGFuZCB0aGUgYmxhZGVzIGFncmVlIG9uIHdoZXJlIHRoZSBlZGdlIGlzXG4gICAgY29uc3QgYnV0dHM6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8PSBuYzsgYysrKSB7XG4gICAgICBjb25zdCByb3c6IG51bWJlcltdID0gW107XG4gICAgICBsZXQgeSA9IDA7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSBzOyB4KyspIHtcbiAgICAgICAgaWYgKHggJSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKHMgLyA0OCkpID09PSAwKSB5ID0gKHJuZCgpICogMiAtIDEpICogcmFnZ2VkICogY2g7XG4gICAgICAgIHJvdy5wdXNoKGMgKiBjaCArIHkpO1xuICAgICAgfVxuICAgICAgYnV0dHMucHVzaChyb3cpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgbmM7IGMrKykge1xuICAgICAgY29uc3QgeTAgPSBjICogY2g7XG4gICAgICAvLyB0aGUgY291cnNlJ3Mgb3duIHRvbmU6IHRoYXRjaCB3ZWF0aGVycyBjb3Vyc2UgYnkgY291cnNlLCB0aGUgbG93ZXIgb25lcyBncmV5ZXJcbiAgICAgIGNvbnN0IHQgPSAxIC0gc3ByZWFkICogcm5kKCk7XG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHtNYXRoLnJvdW5kKHYgKiAwLjk4NSl9LCR7TWF0aC5yb3VuZCh2ICogMC45NSl9KWA7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgeTAgLSByYWdnZWQgKiBjaCAtIDEsIHMsIGNoICsgMiAqIHJhZ2dlZCAqIGNoICsgMik7XG4gICAgICAvLyBzdGVtcyBydW5uaW5nIERPV04gdGhlIHNsb3BlIGluc2lkZSB0aGUgY291cnNlLCBlYWNoIGEgbGl0dGxlIHBhc3QgaXRzIGJ1dHQgbGluZVxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzdGVtczsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHM7XG4gICAgICAgIGNvbnN0IHcgPSB3TWluICsgcm5kKCkgKiAod01heCAtIHdNaW4pO1xuICAgICAgICBjb25zdCB0b25lID0gMSAtIHNwcmVhZCAqICgwLjMgKyBybmQoKSAqIDAuNyk7XG4gICAgICAgIGNvbnN0IGEgPSAwLjE4ICsgcm5kKCkgKiAwLjMyO1xuICAgICAgICBjb25zdCBkYXJrID0gcm5kKCkgPCAwLjYyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZGFyayA/IGByZ2JhKCR7TWF0aC5yb3VuZCgxMjAgKiB0b25lKX0sJHtNYXRoLnJvdW5kKDEwNiAqIHRvbmUpfSwke01hdGgucm91bmQoODQgKiB0b25lKX0sJHthLnRvRml4ZWQoMyl9KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgcmdiYSgyNTUsMjUzLDI0NiwkeyhhICogMC42KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICBjb25zdCB5VG9wID0geTAgLSBjaCAqICgwLjE1ICsgcm5kKCkgKiAwLjI1KTtcbiAgICAgICAgY29uc3QgeUJvdCA9IGJ1dHRzW2MgKyAxXVtNYXRoLm1pbihzLCBNYXRoLnJvdW5kKHgpKV0gKyBjaCAqIChybmQoKSAqIDAuMTApO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeVRvcCwgdywgTWF0aC5tYXgoMiwgeUJvdCAtIHlUb3ApKTtcbiAgICAgIH1cbiAgICAgIC8vIE1JU1NJTkcgYmxhZGVzOiBhIGZldyBnYXBzIHdoZXJlIHRoZSBjb3Vyc2UgaGFzIHRoaW5uZWQsIGRhcmsgYnV0IG5ldmVyIGJsYWNrXG4gICAgICBjb25zdCBnYXBzID0gby5nYXBzID8/IDA7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGdhcHM7IGsrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gcyAqICgwLjAxICsgcm5kKCkgKiAwLjAzKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDk2LDg0LDY2LCR7KDAuMjAgKyBybmQoKSAqIDAuMTgpLnRvRml4ZWQoMyl9KWA7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5MCArIGNoICogMC4yNSwgdywgY2ggKiAoMC40ICsgcm5kKCkgKiAwLjUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGUgc2hhZG93IGVhY2ggY291cnNlJ3MgYnV0dCBjYXN0cyBvbiB0aGUgb25lIGJlbG93OiBhIGdyYWRpZW50IGZhbGxpbmcgQVdBWSBmcm9tIHRoZSBsaW5lLFxuICAgIC8vIGRyYXduIGFsb25nIHRoZSBqaXR0ZXJlZCBidXR0IHNvIHRoZSBzaGFkb3cgaXMgYXMgcmFnZ2VkIGFzIHRoZSBlZGdlIHRoYXQgY2FzdHMgaXQsIHdpdGggdGhlXG4gICAgLy8gTElUIFRJUFMgb2YgdGhlIGNvdXJzZSBhYm92ZSBpdCBhcyBhIHBhbGUgbGluZS4gVGhlIHBhaXIgaXMgd2hhdCBtYWtlcyB0aGUgcm9vZiByZWFkIGFzXG4gICAgLy8gc3RhY2tlZCBsYXllcnM7IHRoZSBzaGFkb3cgYWxvbmUgcmVhZHMgYXMgZ3JhaW4sIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGJ1aWxkIGxvb2tlZCBsaWtlLlxuICAgIGZvciAobGV0IGMgPSAxOyBjIDw9IG5jOyBjKyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHliID0gYnV0dHNbY11beF07XG4gICAgICAgIGNvbnN0IGdoID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliIC0gY2ggKiAwLjA5LCAwLCB5Yik7XG4gICAgICAgIGdoLmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjUyLDI0MiwwKScpOyBnaC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoMjU1LDI1MiwyNDIsJHsoby50aXAgPz8gMC4zNCkudG9GaXhlZCgzKX0pYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnaDtcbiAgICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeWIgLSBjaCAqIDAuMDkgKyBkeSwgMSwgY2ggKiAwLjA5KTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeWIsIDAsIHliICsgY2ggKiAwLjIyKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDU4LDQ4LDM2LCR7KG8uc2hhZG93ID8/IDAuNDIpLnRvRml4ZWQoMyl9KWApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNTgsNDgsMzYsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5YiArIGR5LCAxLCBjaCAqIDAuMjIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1PU1MgLyBNT1VMRDogbGVzcyByZWQgYW5kIGJsdWUgb3ZlciBzb2Z0IHBhdGNoZXMsIG5ldmVyIGEgcGFpbnRlZCBncmVlblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ubW9zcyA/PyAwKTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjE0KTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMTQgKyBybmQoKSAqIDAuMjI7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTUwLDE5MCwxMTAsJHthLnRvRml4ZWQoMyl9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTUwLDE5MCwxMTAsMCknKTtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknOyBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxuICAgIC8vIHNvZnQgdG9uYWwgZHJpZnQgc28gdGhlIGNvdXJzZXMgZG8gbm90IHJlYWQgYXMgYSBwcmludGVkIHN0cmlwZVxuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMTAsIDAuMTAsIDAuMjIpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBXT1ZFTiBUQVJQQVVMSU4gdGlsZTogdGhlIGNvYXJzZSBjcm9zcy13b3ZlbiBwb2x5cHJvcHlsZW5lIHRhcGUgb2YgYSBUaGFpIGJ1aWxkZXIncyB0YXJwLCBwbHVzXG4gKiB0aGUgY3JlYXNlcyBhIGZvbGRlZCBzaGVldCBrZWVwcyBmb3IgbGlmZSBhbmQgdGhlIHN1bi1ibGVhY2hpbmcgYWxvbmcgdGhlIHJpZGdlcy4gQSBtdWx0aXBsaWVyIG9uXG4gKiB0aGUgbWVhc3VyZWQgYmx1ZSwgc28gdGhlIHdlYXZlIGRhcmtlbnMgYW5kIHRoZSBibGVhY2ggbGlmdHMgdG93YXJkIHdoaXRlLlxuICovXG5mdW5jdGlvbiB0YXJwVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBwaXRjaCA9IE1hdGgubWF4KDMsIE1hdGgucm91bmQocyAvIChvLnRhcGVzID8/IDY0KSkpO1xuICAgIC8vIHRoZSB3ZWF2ZTogd2FycCBhbmQgd2VmdCB0YXBlcywgZWFjaCBwYWlyIHdpdGggYSBzaGFkb3cgYXQgaXRzIGpvaW4sIGFsdGVybmF0aW5nIG92ZXIvdW5kZXJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHggKz0gcGl0Y2gpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgzMCwzNCw0NCwkeygwLjEwICsgcm5kKCkgKiAwLjA4KS50b0ZpeGVkKDMpfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wNyknOyBjdHguZmlsbFJlY3QoeCArIDEsIDAsIE1hdGgubWF4KDEsIHBpdGNoICogMC4zNSksIHMpO1xuICAgIH1cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHM7IHkgKz0gcGl0Y2gpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgzMCwzNCw0NCwkeygwLjEwICsgcm5kKCkgKiAwLjA4KS50b0ZpeGVkKDMpfSlgOyBjdHguZmlsbFJlY3QoMCwgeSwgcywgMSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wNyknOyBjdHguZmlsbFJlY3QoMCwgeSArIDEsIHMsIE1hdGgubWF4KDEsIHBpdGNoICogMC4zNSkpO1xuICAgIH1cbiAgICAvLyBmb2xkIGNyZWFzZXM6IGxvbmcgcGFsZSBsaW5lcyB3aXRoIGEgc2hhZG93IG9uIG9uZSBzaWRlLCBhdCB0aGUgdHdvIGF4ZXMgYSB0YXJwIGlzIGZvbGRlZCBvblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uY3JlYXNlcyA/PyA2KTsgaysrKSB7XG4gICAgICBjb25zdCBob3JpeiA9IHJuZCgpIDwgMC41LCBwID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuNSArIHJuZCgpICogMC41KSwgcSA9IHJuZCgpICogcztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjI2KSc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yNiknO1xuICAgICAgaWYgKGhvcml6KSB7IGN0eC5maWxsUmVjdChxIC0gbGVuIC8gMiwgcCwgbGVuLCAxLjYpOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjAsMjYsMzgsMC4xOCknOyBjdHguZmlsbFJlY3QocSAtIGxlbiAvIDIsIHAgKyAxLjYsIGxlbiwgMik7IH1cbiAgICAgIGVsc2UgeyBjdHguZmlsbFJlY3QocCwgcSAtIGxlbiAvIDIsIDEuNiwgbGVuKTsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDI2LDM4LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHAgKyAxLjYsIHEgLSBsZW4gLyAyLCAyLCBsZW4pOyB9XG4gICAgfVxuICAgIC8vIHN1bi1ibGVhY2hlZCBzdHJlYWtzIGFuZCBhIGxpdHRsZSBncmltZVxuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMTIsIDAuMTAsIDAuMzQpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTQVdOIFRJTUJFUiB0aWxlIGZvciBhIHdlYXRoZXJlZCBwb3N0LWFuZC1wbGF0ZSBmcmFtZTogZmluZSBsb25naXR1ZGluYWwgZ3JhaW4sIGEgZmV3IGtub3RzLCB0aGVcbiAqIG9kZCBkcnlpbmcgc3BsaXQsIGFuZCBjbG91ZHkgc2lsdmVyIHdlYXRoZXJpbmcuIERlbGliZXJhdGVseSBXRUFLTFkgZGlyZWN0aW9uYWwgLS0gdGhlIGZyYW1lIGlzXG4gKiBtYXBwZWQgd2l0aCB3b3JsZCBVVnMsIHdoaWNoIHB1dCB2IGFsb25nIHRoZSBwb3N0IGJ1dCBBQ1JPU1MgYSBiZWFtLCBhbmQgYSBzdHJvbmdseSBzdHJpcGVkIHRpbGVcbiAqIHdvdWxkIHRoZW4gcmVhZCBhcyBhIHBsYW5rIGpvaW50IHJ1bm5pbmcgdGhlIHdyb25nIHdheSBvbiBoYWxmIHRoZSBmcmFtZS4gVGhlIHdlYXRoZXJpbmcgY2Fycmllc1xuICogbW9zdCBvZiB0aGUgcmVhZCBhbmQgdGhlIGdyYWluIG9ubHkgc2hhcnBlbnMgaXQsIHdoaWNoIHN1cnZpdmVzIGJvdGggb3JpZW50YXRpb25zLlxuICovXG5mdW5jdGlvbiBzYXduVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IERBUksgPSAnOTYsODQsNjgnLCBMSUdIVCA9ICcyNTUsMjU1LDI1NSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjRmMmVlJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMjAsIDAuMTQsIDAuMzApO1xuICAgIGdyYWluTGluZXMoY3R4LCBybmQsIDAsIHMsIDAsIHMsIG8uZ3JhaW4gPz8gMjIwLCBEQVJLLCBMSUdIVCwgMC4xOCk7XG4gICAgLy8ga25vdHM6IGEgZGFyayBlbGxpcHNlIHdpdGggdGhlIGdyYWluIHN3ZWVwaW5nIHJvdW5kIGl0XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5rbm90cyA/PyA0KTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjAxMiArIHJuZCgpICogMC4wMik7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNzQsNjAsNDQsMC40NSknO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogMS42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDk2LDgwLDYwLDAuMjIpJzsgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGZvciAobGV0IHEgPSAxOyBxIDw9IDM7IHErKykgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByICogKDEgKyBxICogMC42KSwgciAqICgxLjYgKyBxICogMC45KSwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZHJ5aW5nIHNwbGl0cyBhbG9uZyB0aGUgZmlicmVcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnNwbGl0cyA/PyAzKTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC40NSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTgsNDgsMzYsMC40MiknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjQsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xNiknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNCwgeSArIGR5LCAxLCBsZW4pO1xuICAgIH1cbiAgICBjb25zdCBzcG90czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ubW91bGQgPz8gMyk7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCBybmQoKSAqIHNdKTtcbiAgICBtb3VsZENsdXN0ZXJzKGN0eCwgcm5kLCBzLCBzcG90cywgcyAqIDAuMDksIHMgKiAwLjA3LCA3MCwgMC4yNCk7XG4gIH0pO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICAvLyBBIExJVCBzdXJmYWNlIChhIGZsdW9yZXNjZW50IHR1YmUsIGEgY2hhcmNvYWwgZW1iZXIgYmVkKTogZW1pc3NpdmUgY2FycmllcyB0aGUgZ2xvdyB3aXRob3V0IGFcbiAgICAvLyBsaWdodCBzb3VyY2UsIHdoaWNoIHRoZSBraXQncyBwcm9wcyBuZXZlciBvd24gLS0gdGhlIGhvc3Qgc2NlbmUgb3ducyBsaWdodGluZy5cbiAgICBpZiAocy5lbWlzc2l2ZSAhPT0gdW5kZWZpbmVkKSB7IG0uZW1pc3NpdmUgPSBuZXcgVEhSRUUuQ29sb3Iocy5lbWlzc2l2ZSk7IG0uZW1pc3NpdmVJbnRlbnNpdHkgPSBzLmVtaXNzaXZlSW50ZW5zaXR5ID8/IDE7IH1cbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIC8vIEFuIEFMUEhBLUNVVCBwYW5lIChjaGFpbi1saW5rIG1lc2gpOiB0aGUgY2FudmFzIHRpbGUgY2FycmllcyB0aGUgY3V0LW91dCBpbiBpdHMgYWxwaGEgY2hhbm5lbCBhbmRcbiAgICAvLyBhbHBoYVRlc3QgZGlzY2FyZHMgdGhlIG9wZW4gY2VsbHMsIHNvIHRoZSB3aXJlIHN0YXlzIG9wYXF1ZSBhbmQgc29ydHMgbGlrZSBhIHNvbGlkLlxuICAgIGlmIChzLmFscGhhVGVzdCAhPT0gdW5kZWZpbmVkKSB7IG0uYWxwaGFUZXN0ID0gcy5hbHBoYVRlc3Q7IG0udHJhbnNwYXJlbnQgPSBmYWxzZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXJwYXVsaW5DYW5vcHlNb2R1bGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ1RhcnBhdWxpbiBDYW5vcHkgTW9kdWxlJztcblxuICBjb25zdCBtYXRlcmlhbHMgPSBidWlsZE1hdGVyaWFscyhvcHRpb25zKTtcbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0ge307XG4gIGNvbnN0IHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIGNvbnN0IGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPiA9IHt9O1xuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICAvKipcbiAgICogQSBtYXRlcmlhbCB3aXRoIGB2ZXJ0ZXhDb2xvcnNgIHJlYWRzIGEgYGNvbG9yYCBhdHRyaWJ1dGUgb3V0IG9mIEVWRVJZIGdlb21ldHJ5IGJvdW5kIHRvIGl0LCBhbmRcbiAgICogYSBnZW9tZXRyeSB0aGF0IGhhcyBub25lIGhhbmRzIHRoZSBzaGFkZXIgYW4gdW5kZWZpbmVkIGF0dHJpYnV0ZSAtLSB3aGljaCBjb21lcyBiYWNrIGFzXG4gICAqICgwLCAwLCAwKSBhbmQgcmVuZGVycyB0aGUgbWVzaCBCTEFDSy4gVGhhdCBpcyBub3QgYSBoeXBvdGhldGljYWw6IHRoZSB1Ym9zb3QncyB3YWxsIGJvZHkgYW5kXG4gICAqIGl0cyBlaWdodCBib3VuZGFyeSBzdG9uZXMgc2hpcHBlZCBhcyBibGFjayBzaWxob3VldHRlcyBmcm9tIG9uZSB0aW50ZWQgcGxhdGZvcm0gc2hhcmluZyB0aGVpclxuICAgKiBzdG9uZSBtYXRlcmlhbCwgYW5kIHRoZSBmYWlsdXJlIGlzIHNpbGVudCBiZWNhdXNlIHRoZSB0aW50ZWQgY29tcG9uZW50IGl0c2VsZiBsb29rcyBwZXJmZWN0LlxuICAgKlxuICAgKiBBbiBJbnN0YW5jZWRNZXNoIGhpZGVzIGl0IC0tIGl0IGZhbGxzIGJhY2sgdG8gaW5zdGFuY2VDb2xvciBhbmQgY29tZXMgb3V0IHdoaXRlIC0tIHNvIHRoZSBzYW1lXG4gICAqIG1pc3Rha2Ugb24gdGhlIGNoZWRpJ3MgbmljaGUgZnJhbWVzIHJlbmRlcmVkIGNvcnJlY3RseSBhbmQgdGF1Z2h0IG5vdGhpbmcuIEd1YXJkIGl0IGhlcmUsIG9uY2UsXG4gICAqIGZvciBldmVyeSBnZW9tZXRyeTogbm8gY29sb3IgYXR0cmlidXRlIGFuZCBhIHZlcnRleENvbG9ycyBtYXRlcmlhbCBtZWFucyBmaWxsIHdpdGggd2hpdGUuXG4gICAqL1xuICBmdW5jdGlvbiBndWFyZFZlcnRleENvbG9ycyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKSB7XG4gICAgaWYgKCFtYXQgfHwgIW1hdC52ZXJ0ZXhDb2xvcnMgfHwgZ2VvLmdldEF0dHJpYnV0ZSgnY29sb3InKSkgcmV0dXJuO1xuICAgIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KG4gKiAzKS5maWxsKDEpLCAzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIC8vIHNldENvbG9yQXQgTVVMVElQTElFUyB3aXRoIG1hdGVyaWFsLmNvbG9yLCBzbyBhbiBpbnN0YW5jZWQgbWF0ZXJpYWwgY2FycnlpbmcgcGVyLWluc3RhbmNlXG4gICAgICAvLyB0b25lcyBtdXN0IGJlIHdoaXRlIG9yIGV2ZXJ5IHRvbmUgY29tZXMgb3V0IGRhcmtlbmVkIGJ5IHRoZSBiYXNlLlxuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cbiAgLyoqIEZvdXIgaW5zdGFuY2VzIGF0IDkwLWRlZ3JlZSB5YXcgYWJvdXQgdGhlIGF4aXMgLS0gdGhlIGNvcm5lci9mYWNlIHJlcGV0aXRpb24gdGhhdCBldmVyeVxuICAgKiAgYnVpbGRpbmcgaW4gdGhpcyBzZXQgdXNlcyBmb3IgbmljaGVzLCBmaW5pYWxzLCBib3VuZGFyeSBzdG9uZXMgYW5kIGNvcm5lciBkb21lcy4gKi9cbiAgZnVuY3Rpb24gcXVhZChyYWRpdXM6IG51bWJlciwgeTogbnVtYmVyLCBwaGFzZSA9IDApOiBUSFJFRS5NYXRyaXg0W10ge1xuICAgIHJldHVybiBbMCwgMSwgMiwgM10ubWFwKChpKSA9PiB7XG4gICAgICBjb25zdCBhID0gcGhhc2UgKyBpICogTWF0aC5QSSAvIDI7XG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihhKSAqIHJhZGl1cywgeSwgTWF0aC5jb3MoYSkgKiByYWRpdXMpLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGEpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29tcG9uZW50c1xuICAgKiBFYWNoIGVudHJ5IG9mIENPTkZJRy5nZW9tZXRyeS5jb21wb25lbnRzIGlzIE9ORSBtZXJnZWQgZ2VvbWV0cnkgb24gT05FIG1hdGVyaWFsIC0tIG9uZSBkcmF3XG4gICAqIGNhbGwuIEV2ZXJ5IHBhcnQgaW5zaWRlIGl0IGlzIGEgdGludGVkIGJveCwgdHViZSwgY3lsaW5kZXIsIGxhdGhlIG9yIHBsYW5lOyBjb2xvdXIgZGlmZmVyZW5jZXNcbiAgICogYXJlIHZlcnRleCBjb2xvdXJzLiBgdXZgIHBpY2tzIGhvdyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHJlcGVhdHMgb3ZlciBpdC4gKi9cbiAgZm9yIChjb25zdCBjIG9mIEcuY29tcG9uZW50cyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIChjLmJveGVzID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgYiBvZiBtaXJyb3JYKChjLmJveGVzTWlycm9yZWQgPz8gW10pIGFzIG51bWJlcltdW10pKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgdCBvZiAoYy50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIGZvciAoY29uc3QgY3kgb2YgKGMuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIGB0aDBgL2B0aExlbmAgbWFrZSBhIFBBUlRJQUwgY3lsaW5kZXIgKGEgY3VydmVkIHN0aWNrZXIgcGF0Y2ggd3JhcHBlZCBvbiBhIHJvdW5kIGJvZHkpIGFuZFxuICAgICAgLy8gYG9wZW5gIGRyb3BzIHRoZSBjYXBzOyB0aGUgc2lkZSBVVnMgdGhlbiBydW4gMC4uMSBhY3Jvc3MgdGhlIGFyYyBhbmQgdXAgdGhlIGhlaWdodCwgd2hpY2ggaXNcbiAgICAgIC8vIHdoYXQgYSBiYWtlZCBncmFwaGljIHdhbnRzLiBgdXZSZXBgIG11bHRpcGxpZXMgdGhlbSBmb3IgYSByZXBlYXRpbmcgdGlsZS5cbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjeS5ydCwgY3kucmIsIGN5LmgsIGN5LnNlZyA/PyAxMiwgMSwgY3kub3BlbiA/PyBmYWxzZSwgY3kudGgwID8/IDAsIGN5LnRoTGVuID8/IE1hdGguUEkgKiAyKTtcbiAgICAgIGlmIChjeS51dlJlcCkgeyBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpOyBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiBjeS51dlJlcFswXSwgdXYuZ2V0WShpKSAqIGN5LnV2UmVwWzFdKTsgfVxuICAgICAgLy8gYHNpZGVVVmAgcGlucyB0aGUgU0lERSB3YWxsJ3MgVVZzIHRvIG9uZSB0ZXhlbCBzbyBhIGRpc2MgY2FycnlpbmcgYSBiYWtlZCB0b3AtZG93biBpbWFnZSBzaG93c1xuICAgICAgLy8gdGhhdCBpbWFnZSBvbiBpdHMgY2FwIGFsb25lLCB3aXRoIGl0cyByaW0gaW4gd2hhdGV2ZXIgdGhlIHBpbm5lZCB0ZXhlbCBob2xkcyAoYSBiYWcgdG9uZSkuXG4gICAgICBpZiAoY3kuc2lkZVVWKSB7IGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2JyksIG4gPSAoKGN5LnNlZyA/PyAxMikgKyAxKSAqIDI7IGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB1di5zZXRYWShpLCBjeS5zaWRlVVZbMF0sIGN5LnNpZGVVVlsxXSk7IH1cbiAgICAgIC8vIGBzY2FsZWAgYmVmb3JlIHRoZSByb3RhdGlvbnM6IGFuIE9WQUwgYmFzaW4gb3IgZGlzYywgd2hpY2ggYSBsYXRoZSBvciBhIGN5bGluZGVyIGNhbm5vdFxuICAgICAgLy8gcmV2b2x2ZSBvbiBpdHMgb3duLiBOb3JtYWxzIGFyZSByZWNvbXB1dGVkIGJlY2F1c2UgYSBub24tdW5pZm9ybSBzY2FsZSBza2V3cyB0aGVtLlxuICAgICAgaWYgKGN5LnNjYWxlKSB7IGcuc2NhbGUoY3kuc2NhbGVbMF0sIGN5LnNjYWxlWzFdLCBjeS5zY2FsZVsyXSk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgfVxuICAgICAgLy8gQ1VMTSBVVnM6IHUgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlLCB2IGFsb25nIHRoZSBsZW5ndGgsIGJvdGggaW4gbWV0cmVzIC0tIHNvIHRoZSBub2RlXG4gICAgICAvLyByaW5ncyBvZiBhIGN1bG0gdGlsZSBjcm9zcyBhIGJhbWJvbyBwb2xlIGF0IHJlYWwgc3BhY2luZyBob3dldmVyIHRoZSBwb2xlIGlzIHRoZW4gdHVybmVkLlxuICAgICAgLy8gSXQgaGFzIHRvIGhhcHBlbiBCRUZPUkUgdGhlIHJvdGF0aW9ucywgd2hpbGUgdGhlIGN5bGluZGVyIHN0aWxsIHJ1bnMgYWxvbmcgaXRzIG93biBZLlxuICAgICAgaWYgKGMudXYgPT09ICdjdWxtJykgY3VsbVVWKGcsIGN5LnJ0LCBjeS5oLCBjLnV2U2NhbGUgPz8gMSwgY3kudk9mZiA/PyAwKTtcbiAgICAgIGlmIChjeS5yeCkgZy5yb3RhdGVYKGN5LnJ4KTsgaWYgKGN5LnJ5KSBnLnJvdGF0ZVkoY3kucnkpOyBpZiAoY3kucnopIGcucm90YXRlWihjeS5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShjeS5hdFswXSwgY3kuYXRbMV0sIGN5LmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGN5LmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGwgb2YgKGMubGF0aGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHJ5YCB5YXdzIHRoZSByZXZvbHV0aW9uOiBhIDQtc2VnbWVudCBsYXRoZSB0dXJuZWQgNDUgZGVncmVlcyBpcyBhIGNoYW1mZXJlZCBTUVVBUkUgc2xhYiBpbiBvbmVcbiAgICAgIC8vIGdlb21ldHJ5IChhIGNvbmUncyBydWJiZXIgYmFzZSksIHdoZXJlIHR3byBzdGFja2VkIGJveGVzIHdvdWxkIGNvc3QgdHdvIGFuZCBhIGNvcGxhbmFyIHBhaXIuXG4gICAgICAvLyBgY3lsVVZgIChhIHRpbGUgc2l6ZSBpbiBtZXRyZXMpIHdyaXRlcyBhIHNlYW1sZXNzIGFyb3VuZC1ieS11cCBVViBmcm9tIHRoZSBsYXRoZSdzIG93biBzZWdtZW50XG4gICAgICAvLyBpbmRleCAtLSBhdGFuMiB3b3VsZCBmb2xkIGEgd2hvbGUgdGlsZSBpbnRvIHRoZSBzZWFtIGNvbHVtbiAtLSBmb3IgdHJlYWQsIGZsdXRpbmcgYW5kIGdyYWluLlxuICAgICAgY29uc3QgZyA9IGxhdGhlKGwucHRzLCBsLnNlZyA/PyAxMiwgMCwgbC5zaGFycCAhPT0gZmFsc2UpO1xuICAgICAgaWYgKGwuY3lsVVYpIHsgY29uc3QgY3UgPSBBcnJheS5pc0FycmF5KGwuY3lsVVYpID8gbC5jeWxVViA6IFtsLmN5bFVWLCBsLmN5bFVWLCAwXTsgbGF0aGVVVihnLCAoZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQgLyAoKGwuc2VnID8/IDEyKSArIDEpKSB8IDAsIGwuc2VnID8/IDEyLCBjdVswXSwgY3VbMV0sIGN1WzJdID8/IDApOyB9XG4gICAgICBpZiAobC5zY2FsZSkgeyBnLnNjYWxlKGwuc2NhbGVbMF0sIGwuc2NhbGVbMV0sIGwuc2NhbGVbMl0pOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IH1cbiAgICAgIGlmIChsLnJ5KSBnLnJvdGF0ZVkobC5yeSk7IGcudHJhbnNsYXRlKGwuYXRbMF0sIGwuYXRbMV0sIGwuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgbC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwIG9mIChjLnBsYW5lcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgUEFORTogYSBzaW5nbGUgcXVhZCBpbiB0aGUgWFkgcGxhbmUgYXQgZGVwdGggeiwgZG91YmxlLXNpZGVkIGJ5IGl0cyBtYXRlcmlhbC4gSXRzIFVWcyBydW5cbiAgICAgIC8vIDAuLjEgYWNyb3NzIHRoZSBwYW5lIHNvIGFuIGFscGhhLWN1dCB0aWxlIHJlcGVhdHMgYHJlcGAgdGltZXMgYWNyb3NzIGFuZCBkb3duLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHAudywgcC5oLCAxLCAxKTtcbiAgICAgIGcudHJhbnNsYXRlKHAuYXRbMF0sIHAuYXRbMV0sIHAuYXRbMl0pO1xuICAgICAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIChwLnJlcD8uWzBdID8/IDEpLCB1di5nZXRZKGkpICogKHAucmVwPy5bMV0gPz8gMSkpO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIHAuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5leHRydWRlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgcHJvZmlsZSBpbiB0aGUgWFkgcGxhbmUgZXh0cnVkZWQgYWxvbmcgWiBiZXR3ZWVuIHowIGFuZCB6MSAtLSBhIHNsYWIgd2l0aCBhIG1vdWxkZWQgZWRnZSxcbiAgICAgIC8vIGEgcHlyYW1pZCBjYXAgYXMgYSBzdGVwcGVkIHByb2ZpbGUsIGEgc3BlYXIgZmluaWFsLlxuICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIHNoYXBlLm1vdmVUbyhlLnBvbHlbMF1bMF0sIGUucG9seVswXVsxXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGUucG9seS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKGUucG9seVtpXVswXSwgZS5wb2x5W2ldWzFdKTtcbiAgICAgIHNoYXBlLmNsb3NlUGF0aCgpO1xuICAgICAgZm9yIChjb25zdCBoIG9mIChlLmhvbGVzID8/IFtdKSBhcyBudW1iZXJbXVtdW10pIHtcbiAgICAgICAgY29uc3QgaHAgPSBuZXcgVEhSRUUuUGF0aCgpOyBocC5tb3ZlVG8oaFswXVswXSwgaFswXVsxXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaC5sZW5ndGg7IGkrKykgaHAubGluZVRvKGhbaV1bMF0sIGhbaV1bMV0pO1xuICAgICAgICBocC5jbG9zZVBhdGgoKTsgc2hhcGUuaG9sZXMucHVzaChocCk7XG4gICAgICB9XG4gICAgICBjb25zdCBnID0gZXh0cnVkZUFsb25nWihzaGFwZSwgZS56MCwgZS56MSk7XG4gICAgICBpZiAoZS5yeCkgZy5yb3RhdGVYKGUucngpO1xuICAgICAgaWYgKGUucnkpIGcucm90YXRlWShlLnJ5KTtcbiAgICAgIGlmIChlLnJ6KSBnLnJvdGF0ZVooZS5yeik7XG4gICAgICBpZiAoZS5hdCkgZy50cmFuc2xhdGUoZS5hdFswXSwgZS5hdFsxXSwgZS5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgZS5oZXgpKTtcbiAgICB9XG4gICAgLy8gRUxMSVBTT0lEUzogW2hleCwgY3gsIGN5LCBjeiwgcngsIHJ5LCByeiwgcm90WD8sIHJvdFk/LCByb3RaP10gLS0gYSB1bml0IHNwaGVyZSBzY2FsZWQgcGVyIGF4aXNcbiAgICAvLyBhbmQgdHVybmVkIGFib3V0IGl0cyBvd24gY2VudHJlLiBBIHNrdWxsIGRvbWUsIGEgcGF3LCBhIG5vc2UgcGFkOiB0aGUgcm91bmRlZCBzb2xpZHMgb2YgYW5cbiAgICAvLyBhbmltYWwgdGhhdCBhIGJveCBvciBhIHN0YXRpb24gdHViZSBjYW5ub3QgZ2l2ZSwgc2hhcmluZyBzbW9vdGggbm9ybWFscyB0aHJvdWdoIHRoZSBtZXJnZS5cbiAgICBmb3IgKGNvbnN0IGUgb2YgKGMuZWxsaXBzb2lkcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkge1xuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLCBlWzEwXSA/PyAxNiwgZVsxMV0gPz8gMTIpO1xuICAgICAgZy5zY2FsZShlWzRdLCBlWzVdLCBlWzZdKTtcbiAgICAgIGlmIChlWzddKSBnLnJvdGF0ZVgoZVs3XSk7IGlmIChlWzhdKSBnLnJvdGF0ZVkoZVs4XSk7IGlmIChlWzldKSBnLnJvdGF0ZVooZVs5XSk7XG4gICAgICBnLnRyYW5zbGF0ZShlWzFdLCBlWzJdLCBlWzNdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlWzBdKSk7XG4gICAgfVxuICAgIC8vIEZSVVNUQTogW2hleCwgY3gsIHlCb3R0b20sIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0gLS0gYSBib3ggd2hvc2UgZm9vdHByaW50IGNoYW5nZXMgZnJvbSAodzAsIGQwKSBhdFxuICAgIC8vIHRoZSBib3R0b20gdG8gKHcxLCBkMSkgYXQgdGhlIHRvcDogdGhlIHRhcGVyZWQgYm9keSBvZiBhIHdoZWVsaWUgYmluIG9yIGEgc3RlZWwgY29udGFpbmVyLlxuICAgIGZvciAoY29uc3QgZiBvZiAoYy5mcnVzdGEgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhmcnVzdHVtKGYuc2xpY2UoMSkpLCBmWzBdKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgLy8gRFJBUEVEIFNIRUVUUzogYSB0YXJwIG9yIGF3bmluZyBhcyBhIGhlaWdodCBncmlkIHdpdGggdGhpY2tuZXNzIC0tIGEgcmlkZ2UsIHRoZSBzYWcgYmV0d2VlblxuICAgIC8vIGl0cyBwb2xlcyBhbmQgdGhlIGRyb29wIG9mIGl0cyBmcmVlIGVkZ2VzIGFyZSBudW1iZXJzIGluIHRoZSBncmlkLCBjb21wdXRlZCBhdCBlbWl0IHRpbWUuXG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNoZWV0cyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgc2hlZXQgZ2l2ZW4gYGhleFVuZGVyYCBoYXMgYWxyZWFkeSB3cml0dGVuIGl0cyBPV04gY29sb3VyIGF0dHJpYnV0ZSwgb25lIHRvbmUgZm9yIHRoZSB0b3BcbiAgICAgIC8vIGdyaWQgYW5kIGFub3RoZXIgZm9yIHRoZSB1bmRlcnNpZGUgYW5kIHJpbS4gdGludEdlbyB3b3VsZCBvdmVyd3JpdGUgdGhlIGxvdCB3aXRoIGEgc2luZ2xlXG4gICAgICAvLyBoZXggLS0gd2hpY2ggaXMgd2hhdCBzaGlwcGVkIHRoZSB0YXJwYXVsaW4gYmF5J3MgYmx1ZS1vdmVyLW9yYW5nZSB0YXJwIGFzIGEgd2hpdGUgc2FpbC5cbiAgICAgIGNvbnN0IGcgPSBzaGVldChzKTtcbiAgICAgIGdzLnB1c2gocy5oZXhVbmRlciAhPT0gdW5kZWZpbmVkID8gZyA6IHRpbnRHZW8oZywgcy5oZXgpKTtcbiAgICB9XG4gICAgLy8gT1JHQU5JQyBzdGF0aW9uIHR1YmVzOiBbeiwgY3gsIGN5LCByeCwgcnldIHN0YXRpb25zIHN3ZXB0IGFsb25nIFogLS0gdGhlIG9ubHkgc29mdCBmb3JtIGluIHRoZVxuICAgIC8vIGtpdCwgYSBseWluZyBhbmltYWwuIExpdCBzbW9vdGggYnkgdGhlIGhlbHBlcidzIHNoYXJlZCByaW5nIHZlcnRpY2VzLlxuICAgIGZvciAoY29uc3QgdCBvZiAoYy50dWJlc0Fsb25nID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHR1YmVBbG9uZyh0LnN0YXRpb25zLCB0LnNlZyA/PyAxMik7XG4gICAgICBpZiAodC5yeSkgZy5yb3RhdGVZKHQucnkpOyBpZiAodC5hdCkgZy50cmFuc2xhdGUodC5hdFswXSwgdC5hdFsxXSwgdC5hdFsyXSk7XG4gICAgICAvLyBgaGV4ZXNgIC0tIG9uZSBjb2xvdXIgcGVyIFNUQVRJT04sIGJsZW5kZWQgYWxvbmcgdGhlIHN3ZWVwIC0tIGlzIGhvdyBhIGNvYXQgcGF0dGVybiB0aGF0IHJ1bnNcbiAgICAgIC8vIGFsb25nIHRoZSBib2R5IChhIHdoaXRlIGNvbGxhciBiZXR3ZWVuIGEgdGFuIHNrdWxsIGFuZCBhIHRhbiBzYWRkbGUpIGlzIGNhcnJpZWQgb24gYSBzaW5nbGVcbiAgICAgIC8vIG1lcmdlZCBtZXNoLiBUaGUgY29tcG9uZW50J3MgYXhpcyB0aW50IHRoZW4gbXVsdGlwbGllcyB0aGUgZG9yc2FsLXRvLXZlbnRyYWwgZmFkZSBpbnRvIGl0LFxuICAgICAgLy8gYW5kIG5laXRoZXIgY29zdHMgYSBtYXRlcmlhbC4gQSBzaW5nbGUgYGhleGAgc3RheXMgdGhlIGRlZmF1bHQuXG4gICAgICBpZiAodC5oZXhlcykge1xuICAgICAgICAvLyBBIHN0YXRpb24gZW50cnkgbWF5IGJlIG9uZSBoZXgsIG9yIGEgUEFJUiBbZG9yc2FsLCB2ZW50cmFsXSBibGVuZGVkIGFyb3VuZCB0aGUgcmluZyBieSB0aGVcbiAgICAgICAgLy8gc2FtZSBzaW4odGhldGEpIHR1YmVBbG9uZyBzd2VwdCB0aGUgc2VjdGlvbiB3aXRoIC0tIHNvIHRoZSBjb2F0IHJ1bnMgYm90aCBBTE9ORyB0aGUgYm9keVxuICAgICAgICAvLyAoYSB3aGl0ZSBjb2xsYXIgYmV0d2VlbiBhIHRhbiBza3VsbCBhbmQgYSB0YW4gc2FkZGxlKSBhbmQgQUNST1NTIGl0ICh0aGUgc2FkZGxlIGdpdmluZyB3YXlcbiAgICAgICAgLy8gdG8gYSBkdXN0eSBmbGFuayBhbmQgYSBwYWxlIGJlbGx5KS4gQW4gYXhpcyB0aW50IGNhbm5vdCBkbyB0aGUgc2Vjb25kIGhhbGY6IG9uIGFuIGFuaW1hbFxuICAgICAgICAvLyBseWluZyBvbiBpdHMgc2lkZSB0aGUgZG9yc2FsLXRvLXZlbnRyYWwgYXhpcyBpcyBob3Jpem9udGFsLCBzbyBhIGJhbmQgaW4geCBjdXRzIHRoZSBjcm93blxuICAgICAgICAvLyBvZiB0aGUgc3dlZXAgaW4gaGFsZiwgYW5kIGEgTVVMVElQTFkgY2FuIG9ubHkgZXZlciBkYXJrZW4gLS0gaXQgY2Fubm90IHRha2UgYSB3YXJtIHRhbiB0b1xuICAgICAgICAvLyBhIGNvb2xlciBncmV5LiBUd28gY29sb3VycyBwZXIgc3RhdGlvbiwgb25lIGF0dHJpYnV0ZSwgc3RpbGwgb25lIGRyYXcgY2FsbC5cbiAgICAgICAgY29uc3Qgc2VnID0gdC5zZWcgPz8gMTIsIG4gPSB0LnN0YXRpb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShzZWcgKiBuICogMyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZSA9IHQuaGV4ZXNbTWF0aC5taW4odC5oZXhlcy5sZW5ndGggLSAxLCBpKV07XG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBUSFJFRS5Db2xvcihBcnJheS5pc0FycmF5KGUpID8gZVswXSA6IGUpLCB2ID0gbmV3IFRIUkVFLkNvbG9yKEFycmF5LmlzQXJyYXkoZSkgPyBlWzFdIDogZSk7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZiA9IChNYXRoLnNpbihqICogTWF0aC5QSSAqIDIgLyBzZWcpICsgMSkgLyAyO1xuICAgICAgICAgICAgY29uc3QgayA9IChpICogc2VnICsgaikgKiAzO1xuICAgICAgICAgICAgY29sW2tdID0gZC5yICsgKHYuciAtIGQucikgKiBmOyBjb2xbayArIDFdID0gZC5nICsgKHYuZyAtIGQuZykgKiBmOyBjb2xbayArIDJdID0gZC5iICsgKHYuYiAtIGQuYikgKiBmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICAgICAgICBncy5wdXNoKGcpO1xuICAgICAgfSBlbHNlIGdzLnB1c2godGludEdlbyhnLCB0LmhleCA/PyAweGZmZmZmZikpO1xuICAgIH1cbiAgICBsZXQgZyA9IG1lcmdlR2Vvcyhncyk7XG4gICAgLy8gYSBwZXItY29tcG9uZW50IHNjYWxlLCBhcHBsaWVkIHRvIHRoZSBtZXJnZSBiZWZvcmUgdGludGluZzogaG93IGEgbHlpbmcgYW5pbWFsIGF1dGhvcmVkIGF0XG4gICAgLy8gaXRzIG93biBwcm9wb3J0aW9ucyBpcyBmaXR0ZWQgaW50byB0aGUgZGVjbGFyZWQgZW52ZWxvcGUgd2l0aG91dCByZS1yZWFkaW5nIGV2ZXJ5IHN0YXRpb25cbiAgICBpZiAoYy5zY2FsZSkgZy5zY2FsZShjLnNjYWxlWzBdLCBjLnNjYWxlWzFdLCBjLnNjYWxlWzJdKTtcbiAgICAvLyBBWElTIFRJTlQ6IGEgcGVyLXZlcnRleCBibGVuZCBmcm9tIGMwIGF0IGBmcm9tYCB0byBjMSBhdCBgdG9gIGFsb25nIG9uZSBheGlzLCBvdmVyIHRoZSB3aG9sZVxuICAgIC8vIG1lcmdlIC0tIGEgdGFuIGJhY2sgZmFkaW5nIHRvIGEgd2hpdGUgYmVsbHkgY29zdHMgYW4gYXR0cmlidXRlLCBub3QgYSBzZWNvbmQgbWF0ZXJpYWwuIEFwcGxpZWRcbiAgICAvLyBpbiBMSU5FQVIgc3BhY2UgdGhyb3VnaCBUSFJFRS5Db2xvci4gYGtlZXBgIG11bHRpcGxpZXMgdGhlIGJsZW5kIGludG8gdGhlIGV4aXN0aW5nIHRpbnQgaW5zdGVhZFxuICAgIC8vIG9mIHJlcGxhY2luZyBpdCwgc28gYSBkYXJrIG5vc2Ugc3RheXMgZGFyay5cbiAgICBpZiAoYy50aW50KSB7XG4gICAgICBjb25zdCBhID0gbmV3IFRIUkVFLkNvbG9yKGMudGludC5jMCksIGIgPSBuZXcgVEhSRUUuQ29sb3IoYy50aW50LmMxKTtcbiAgICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTsgbGV0IGNvbCA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSB8IG51bGw7XG4gICAgICBpZiAoIWNvbCkgeyBjb2wgPSBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpLmZpbGwoMSksIDMpOyBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBjb2wpOyB9XG4gICAgICBjb25zdCBheCA9IGMudGludC5heGlzID09PSAneCcgPyAwIDogYy50aW50LmF4aXMgPT09ICd5JyA/IDEgOiAyO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgdiA9IGF4ID09PSAwID8gcC5nZXRYKGkpIDogYXggPT09IDEgPyBwLmdldFkoaSkgOiBwLmdldFooaSk7XG4gICAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAodiAtIGMudGludC5mcm9tKSAvIChjLnRpbnQudG8gLSBjLnRpbnQuZnJvbSkpKTtcbiAgICAgICAgY29uc3QgciA9IGEuciArIChiLnIgLSBhLnIpICogdCwgZ2cgPSBhLmcgKyAoYi5nIC0gYS5nKSAqIHQsIGJiID0gYS5iICsgKGIuYiAtIGEuYikgKiB0O1xuICAgICAgICBpZiAoYy50aW50LmtlZXApIGNvbC5zZXRYWVooaSwgY29sLmdldFgoaSkgKiByLCBjb2wuZ2V0WShpKSAqIGdnLCBjb2wuZ2V0WihpKSAqIGJiKTsgZWxzZSBjb2wuc2V0WFlaKGksIHIsIGdnLCBiYik7XG4gICAgICB9XG4gICAgICBjb2wubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoYy51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAnaGVpZ2h0JykgZyA9IGhlaWdodFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ3BhbmVsJykgZyA9IHBhbmVsVVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAncGFuZWwtcm90JykgZyA9IHBhbmVsVVYoZywgYy51dlNjYWxlID8/IDEsIHRydWUpO1xuICAgIC8vICdjdWxtJyBpcyBkZWxpYmVyYXRlbHkgYWJzZW50IGhlcmU6IGl0IGlzIHdyaXR0ZW4gcGVyIGN5bGluZGVyIGFib3ZlLCBiZWZvcmUgdGhlIHJvdGF0aW9ucyxcbiAgICAvLyBhbmQgYSB3aG9sZS1tZXJnZSBwYXNzIHdvdWxkIGZsYXR0ZW4gaXQgYmFjayB0byB0aGUgY3lsaW5kZXIncyBkZWZhdWx0IDAuLjEgd3JhcC5cbiAgICBhZGQoYy5pZCwgYy5uYW1lLCBnLCBjLm1hdGVyaWFsKTtcbiAgICBpZiAoYy5jb2xsaWRlcikgY29sbGlkZXJzW2MuaWRdID0gYy5jb2xsaWRlcjtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmVwZXRpdGlvbiBzeXN0ZW1zXG4gICAqIFBpY2tldHMsIHNsYXRzLCBsYXR0aWNlIHN0cmlwczogb25lIGdlb21ldHJ5LCBvbmUgSW5zdGFuY2VkTWVzaCwgb25lIGRyYXcgY2FsbC4gKi9cbiAgZm9yIChjb25zdCByIG9mIChHLmluc3RhbmNlZCA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoci5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgKHIuc3Bpa2VzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNwaWtlKHMuYXQsIHMudywgcy5oKSwgcy5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IGYgb2YgKHIuZnJ1c3RhID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8oZnJ1c3R1bShmLnNsaWNlKDEpKSwgZlswXSkpO1xuICAgIGZvciAoY29uc3QgY3kgb2YgKHIuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIGB0aDBgL2B0aExlbmAgY3V0IGEgUEFSVElBTCBjeWxpbmRlciB0aGUgc2FtZSB3YXkgdGhlIGNvbXBvbmVudCBicmFuY2ggZG9lczogYSBzcGxpdCBiYW1ib29cbiAgICAgIC8vIGN1bG0gaXMgYSBoYWxmIHBpcGUsIHRoTGVuID0gUEksIGBvcGVuYCBzbyBpdCBpcyBhIHNoZWxsIHdpdGggbm8gZGlzY3MgYXQgaXRzIGVuZHMuIFRoZVxuICAgICAgLy8gbWF0ZXJpYWwgY2FycmllcyBkb3VibGVTaWRlZCwgYmVjYXVzZSBhIGhvbGxvdy11cCBjdWxtIGlzIHNlZW4gZnJvbSB0aGUgaW5zaWRlLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGN5LnJ0LCBjeS5yYiwgY3kuaCwgY3kuc2VnID8/IDEyLCAxLCBjeS5vcGVuID8/IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5LnRoMCA/PyAwLCBjeS50aExlbiA/PyBNYXRoLlBJICogMik7XG4gICAgICBpZiAoci51diA9PT0gJ2N1bG0nKSBjdWxtVVYoZywgY3kucnQsIGN5LmgsIHIudXZTY2FsZSA/PyAxLCBjeS52T2ZmID8/IDApO1xuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnkpIGcucm90YXRlWShjeS5yeSk7IGlmIChjeS5yeikgZy5yb3RhdGVaKGN5LnJ6KTtcbiAgICAgIGcudHJhbnNsYXRlKGN5LmF0WzBdLCBjeS5hdFsxXSwgY3kuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgY3kuaGV4KSk7XG4gICAgfVxuICAgIC8vIEFuIE9QRU4gd2hlZWwgLS0gdHlyZSBhbmQgcmltIGFzIGNsb3NlZCByaW5nIGxhdGhlcywgYSBodWIsIGFuZCB3aXJlIHNwb2tlcyAtLSBmb3IgYSBiaWN5Y2xlXG4gICAgLy8gd2hvc2Ugd2hlZWxzIHJlYWQgYXMgYmljeWNsZSB3aGVlbHMgcmF0aGVyIHRoYW4gZGlzY3MuIExhdGhlcyByZXZvbHZlIGFib3V0IFkgKGByeGAgbGF5cyB0aGVcbiAgICAvLyBheGxlIHdoZXJlIHRoZSBwbGFjZW1lbnQgd2FudHMgaXQpOyBgc3Bva2VzYCByYWRpYXRlIGFib3V0IFggYnkgdGhlIGhlbHBlcidzIGNvbnZlbnRpb24sIHNvIGFuXG4gICAgLy8gYXhsZSBvbiBaIHRha2VzIGByeTogUEkvMmAuXG4gICAgZm9yIChjb25zdCBsIG9mIChyLmxhdGhlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBsYXRoZShsLnB0cywgbC5zZWcgPz8gMTIsIDAsIGwuc2hhcnAgIT09IGZhbHNlKTtcbiAgICAgIGlmIChsLnJ4KSBnLnJvdGF0ZVgobC5yeCk7IGlmIChsLnJ5KSBnLnJvdGF0ZVkobC5yeSk7IGlmIChsLnJ6KSBnLnJvdGF0ZVoobC5yeik7XG4gICAgICBpZiAobC5hdCkgZy50cmFuc2xhdGUobC5hdFswXSwgbC5hdFsxXSwgbC5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBsLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHMgb2YgKHIuc3Bva2VzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHNwb2tlcyhzLnJIdWIsIHMuclJpbSwgcy5oYWxmVywgcy5uLCBzLmhleCwgcy50ID8/IDAuMDA2LCBzLnByaXNtID8/IGZhbHNlKTtcbiAgICAgIGlmIChzLnJ4KSBnLnJvdGF0ZVgocy5yeCk7IGlmIChzLnJ5KSBnLnJvdGF0ZVkocy5yeSk7IGlmIChzLnJ6KSBnLnJvdGF0ZVoocy5yeik7XG4gICAgICBpZiAocy5hdCkgZy50cmFuc2xhdGUocy5hdFswXSwgcy5hdFsxXSwgcy5hdFsyXSk7IGdzLnB1c2goZyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdCBvZiAoci50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIGxldCBnID0gbWVyZ2VHZW9zKGdzKTtcbiAgICBpZiAoci51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgci51dlNjYWxlID8/IDEpO1xuICAgIGlmIChyLnV2ID09PSAnaGVpZ2h0JykgZyA9IGhlaWdodFVWKGcsIHIudXZTY2FsZSA/PyAxKTtcbiAgICAvLyAnY3VsbScgYWdhaW4gd3JpdHRlbiBwZXIgY3lsaW5kZXIgYWJvdmUsIGJlZm9yZSB0aGUgcm90YXRpb25zLlxuICAgIGNvbnN0IG1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgcCBvZiByLnBsYWNlbWVudHMgYXMgbnVtYmVyW11bXSkge1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKG5ldyBUSFJFRS5FdWxlcihwWzNdID8/IDAsIHBbNF0gPz8gMCwgcFs1XSA/PyAwKSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKSk7XG4gICAgfVxuICAgIGFkZEluc3Qoci5pZCwgci5uYW1lLCBnLCByLm1hdGVyaWFsLCBtYXRzLCByLmNvbG9ycyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhc2VzICovXG4gIGZvciAoY29uc3QgdCBvZiAoQ09ORklHLnRpbGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG1hdCA9IG1hdGVyaWFsc1t0Lm1hdGVyaWFsXTtcbiAgICBpZiAoIW1hdCkgY29udGludWU7XG4gICAgLy8gQSBCQUtFRCBncmFwaGljIChhIHByaW50ZWQgc2lnbiBmYWNlKTogb25lIFdlYlAgZGF0YSBVUkkgY29tcG9zZWQgb2ZmbGluZSBmcm9tIHRoZSBwbGF0ZSdzIG93blxuICAgIC8vIHByaW50ZWQgcmVnaW9uIGFuZCB2ZWN0b3IgbWFya3MsIGxvYWRlZCB0aHJvdWdoIFRleHR1cmVMb2FkZXIuIEFzc2lnbmVkIHN5bmNocm9ub3VzbHkgc28gdGhlXG4gICAgLy8gaGFybmVzcyB3YWl0cyBvbiB0aGUgZGVjb2RlLiBJdCBiZWF0cyBmaWxsVGV4dCwgd2hpY2ggZHJhd3MgYSBkaWZmZXJlbnQgd29yZG1hcmsgcGVyIG1hY2hpbmUuXG4gICAgaWYgKHQua2luZCA9PT0gJ2Jha2VkJykge1xuICAgICAgLy8gVW5kZXIgcGxhaW4gTm9kZSAodGhlIGNvcGxhbmFyIGNoZWNrLCB0aGUgcnVudGltZSBwcm9iZSkgdGhlcmUgaXMgbm8gZG9jdW1lbnQgZm9yIEltYWdlTG9hZGVyOlxuICAgICAgLy8ga2VlcCB0aGUgd2hpdGUgZmFsbGJhY2sgcmF0aGVyIHRoYW4gdGhyb3csIGV4YWN0bHkgYXMgdGhlIHJldGFpbCBnbGF6aW5nIGRvZXMuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgY29udGludWU7XG4gICAgICBjb25zdCBiYWtlZCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCh0LnVyaSk7XG4gICAgICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG4gICAgICBpZiAoc3JnYikgYmFrZWQuY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgICBiYWtlZC5hbmlzb3Ryb3B5ID0gNDtcbiAgICAgIG1hdC5tYXAgPSBiYWtlZDsgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBsZXQgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKHQua2luZCA9PT0gJ211ZCcpIHRleCA9IG11ZFRpbGUodC5zaXplID8/IDUxMiwgdC5iYXNlLCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMzKTtcbiAgICBpZiAodC5raW5kID09PSAnZHVzdCcpIHRleCA9IGR1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuZHVzdCwgdC5zZWVkID8/IDEsIHQuY292ZXJhZ2UgPz8gMC4zMCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BsYW5rJykgdGV4ID0gcGxhbmtUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYm9hcmRzID8/IDYsIHQuc2VlZCA/PyA1KTtcbiAgICBpZiAodC5raW5kID09PSAncnVzdCcpIHRleCA9IHJ1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQucmF0aW8sIHQuc2VlZCA/PyA3LCB0LmRlbnNpdHkgPz8gOTApO1xuICAgIGlmICh0LmtpbmQgPT09ICdjb3JydWdhdGlvbicpIHRleCA9IGNvcnJ1Z2F0aW9uVGlsZSh0LnNpemUgPz8gNTEyLCB0LnBpdGNoID8/IDEyLCB0LmxvdyA/PyAwLjcsIHQuc2VlZCA/PyAzKTtcbiAgICBpZiAodC5raW5kID09PSAnZ3JpbWUnKSB0ZXggPSBncmltZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDExLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnZnVyJykgdGV4ID0gZnVyVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjaGFpbmxpbmsnKSB0ZXggPSBjaGFpbmxpbmtUaWxlKHQuc2l6ZSA/PyAyNTYsIHQud2lyZSA/PyAwLjA5LCB0LnNlZWQgPz8gNCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2JhbWJvbycpIHRleCA9IGJhbWJvb1RpbGUodC5zaXplID8/IDUxMiwgdC5zdHJpcHMgPz8gMTAsIHQuc2VlZCA/PyA2KTtcbiAgICBpZiAodC5raW5kID09PSAnc3RyaXBlcycpIHRleCA9IHN0cmlwZVRpbGUodC5zaXplID8/IDI1NiwgdC5iYW5kcyA/PyA4LCB0LmEsIHQuYiwgdC5zZWVkID8/IDkpO1xuICAgIGlmICh0LmtpbmQgPT09ICdwb3N0ZXInKSB0ZXggPSBwb3N0ZXJUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA4LCB0LmxpbmVzID8/IFtdKTtcbiAgICBpZiAodC5raW5kID09PSAncGViYmxlJykgdGV4ID0gcGViYmxlVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMjEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0cmVhZCcpIHRleCA9IHRyZWFkVGlsZSh0LnNpemUgPz8gMjU2LCB0LnNlZWQgPz8gMjMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0eXJlJykgdGV4ID0gdHlyZVRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDI5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY3VsbScpIHRleCA9IGN1bG1UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAzMSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3Nhd24nKSB0ZXggPSBzYXduVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0aGF0Y2gnKSB0ZXggPSB0aGF0Y2hUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAzNywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3RhcnAnKSB0ZXggPSB0YXJwVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDEsIHQpO1xuICAgIGJpbmRUaWxlKG1hdCwgdGV4LCB0LmJ1bXAgPz8gMCk7XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbi8qKlxuICogdGhhaWtpdCBlbnRyeSBwb2ludC4gVGhlIHJlZ2lzdHJ5IHJlY29yZHMgYGNyZWF0ZU9iamVjdE1vZGVsYCBhcyB0aGUgZXhwb3J0IGFuZCBjYWxscyBpdCB3aXRoXG4gKiAoc3BlYywgb3B0aW9ucykuIGBzcGVjYCBpcyBhY2NlcHRlZCBhbmQgYXR0YWNoZWQgZm9yIGhvc3Qtc2lkZSBpbnNwZWN0aW9uIC0tIHRoZSByZWNvbnN0cnVjdGlvblxuICogZGF0YSBhbHJlYWR5IGxpdmVzIGluIHRoaXMgbW9kdWxlLCBzbyBpdCBpcyBkZWxpYmVyYXRlbHkgbm90IGEgc2Vjb25kIHNvdXJjZSBvZiB0cnV0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKHNwZWM/OiB1bmtub3duLCBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVUYXJwYXVsaW5DYW5vcHlNb2R1bGVNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IHRoZSByb290LCBwbHVzIE9ORSBQRVIgV0hFRUwgKGFuZCBhbnkgb3RoZXIgbWVjaGFuaXNtIENPTkZJRy5waXZvdHMgbmFtZXMgLS0gYVxuICAgIC8vIHN0ZWVyaW5nIGhlYWQsIGEgY2Fub3B5IHN0YXkpLiBBIHZlaGljbGUncyB3aGVlbHMgZ2VudWluZWx5IHR1cm4sIHNvIGVhY2ggb25lIGlzIGEgcHJvbWlzZVxuICAgIC8vIGtlcHQ6IHRoZSBwaXZvdCBzaXRzIGF0IHRoZSBodWIsIGl0cyBheGlzIGlzIHRoZSBheGxlLCBhbmQgYGluc3RhbmNlYCBuYW1lcyB3aGljaCBpbnN0YW5jZVxuICAgIC8vIG9mIHRoZSB3aGVlbCBJbnN0YW5jZWRNZXNoIGl0IGRyaXZlcy4gTm90aGluZyBlbHNlIG9uIHRoZSBwcm9wIG1vdmVzIC0tIHRoZSBkb29ycyBhcmUgcGFydFxuICAgIC8vIG9mIHRoZSBib2R5IHNoZWxsIC0tIHNvIG5vdGhpbmcgZWxzZSBnZXRzIGFuIGF4aXMuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG4gICAgZm9yIChjb25zdCBwdiBvZiAoQ09ORklHLnBpdm90cyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IG8gPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgIG8ubmFtZSA9IHB2Lm5hbWU7XG4gICAgICBvLnBvc2l0aW9uLnNldChwdi5wb3NpdGlvblswXSwgcHYucG9zaXRpb25bMV0sIHB2LnBvc2l0aW9uWzJdKTtcbiAgICAgIG8udXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgICAgYW5pbWF0aW9uUm9sZTogJ2NoaWxkJyxcbiAgICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IHB2LnBvc2l0aW9uLCBheGlzOiBwdi5heGlzLCBuYW1lOiBwdi5uYW1lLFxuICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHB2LmNvbXBvbmVudCwgaW5zdGFuY2U6IHB2Lmluc3RhbmNlID8/IG51bGwsIG5vdGVzOiBwdi5ub3RlID8/ICcnIH0sXG4gICAgICB9O1xuICAgICAgcm9vdC5hZGQobyk7XG4gICAgICBwaXZvdHMucHVzaChvKTtcbiAgICB9XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FIHVubGVzcyBDT05GSUcuc29ja2V0cyBuYW1lcyBvbmUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gYSB2ZWhpY2xlIGluIHRoaXMga2l0XG4gICAgLy8gYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQXNDdkIsSUFBTSxTQUFTO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsSUFDWDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxNQUNoQixlQUFlO0FBQUEsSUFDakI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixjQUFjO0FBQUEsTUFDWjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVMsQ0FBQztBQUFBLE1BQ1o7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsVUFBVTtBQUFBLFlBQ1YsWUFBWTtBQUFBLFlBQ1osTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsV0FBVztBQUFBLGNBQ1Q7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFD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TSxRQUFRLENBQUMsS0FBbUIsUUFBa0I7QUFDbEQsVUFBTSxNQUFnQixDQUFDLEdBQUcsS0FBZSxDQUFDO0FBQzFDLGVBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLO0FBQzFCLFlBQU0sS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3JGLFlBQU1BLE1BQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHQyxNQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDM0csWUFBTSxJQUFJLENBQUNELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsSUFBSUQsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxHQUFHRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLElBQUlELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsR0FBR0QsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxJQUFJRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLENBQUM7QUFDdEcsWUFBTSxNQUFNLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDbkgsaUJBQVcsS0FBSyxLQUFLO0FBQUUsWUFB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Q3pCLGVBQWU7QUFBQSxRQUNmLE9BQU87QUFBQSxVQUFFLE1BQU07QUFBQSxVQUFVLGVBQWUsR0FBRztBQUFBLFVBQVUsTUFBTSxHQUFHO0FBQUEsVUFBTSxNQUFNLEdBQUc7QUFBQSxVQUNwRSxXQUFXLEdBQUc7QUFBQSxVQUFXLFVBQVUsR0FBRyxZQUFZO0FBQUEsVUFBTSxPQUFPLEdBQUcsUUFBUTtBQUFBLFFBQUc7QUFBQSxNQUN4RjtBQUNBLFdBQUssSUFBSSxDQUFDO0FBQ1YsYUFBTyxLQUFLLENBQUM7QUFBQSxJQUNmO0FBUUEsVUFBTSxZQUFZLE9BQU8sUUFBUyxHQUFHLGFBQWEsQ0FBQyxDQUF5QixFQUN6RSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQ3pFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxJQUFJLEdBQUksRUFBYSxFQUFFO0FBS3BELFVBQU0sVUFBVSxvQkFBSSxJQUE4QjtBQUNsRCxlQUFXLENBQUMsTUFBTSxPQUFPLEtBQUssT0FBTyxRQUFTLEdBQUcscUJBQXFCLENBQUMsQ0FBc0MsR0FBRztBQUM5RyxjQUFRLElBQUksTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQUEsSUFDaEM7QUFDQSxlQUFXLFFBQVEsT0FBTyxPQUFPLEtBQUssR0FBRztBQUN2QyxZQUFNLFFBQVMsTUFBYyxVQUFVLGVBQWUsYUFBYTtBQUNuRSxVQUFJLE9BQU8sVUFBVSxZQUFZLENBQUMsTUFBTztBQUN6QyxVQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssRUFBRyxTQUFRLElBQUksT0FBTyxDQUFDLENBQUM7QUFDOUMsY0FBUSxJQUFJLEtBQUssRUFBRyxLQUFLLElBQUk7QUFBQSxJQUMvQjtBQUVBLFNBQUssU0FBUyxnQkFBZ0I7QUFBQSxNQUM1QixHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtILE9BQU8sT0FBTyxLQUFLLEtBQUssRUFBRTtBQUFBLE1BQzFCO0FBQUEsTUFDQSxTQUFTLE9BQU8sT0FBUSxHQUFHLFdBQVcsQ0FBQyxDQUFvQztBQUFBLE1BQzNFO0FBQUEsTUFDQSxtQkFBbUIsQ0FBQyxHQUFHLFFBQVEsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxPQUFPLE9BQU8sRUFBRSxNQUFNLFFBQVEsRUFBRTtBQUFBLE1BQ3RGLE1BQU0sRUFBRSxPQUFPLFFBQVEsR0FBRyxVQUFVLENBQUMsR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDLEVBQUU7QUFBQSxJQUNwRTtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7IiwKICAibmFtZXMiOiBbImUxIiwgImUyIiwgImciXQp9Cg==
