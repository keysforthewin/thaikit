import * as THREE from 'three';

/**
 * PTT Station Building -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging and
 * instancing are hand-rolled below -- anything under three/examples/jsm is a second import.
 *
 * Envelope 8.00 x 4.60 x 7.00 m, origin base-center, +Y up, shopfront facing +Z.
 * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=16 unique geometries.
 *
 * One of thaikit's shared retail-module buildings. The shell front face sits at z=+2.50 rather
 * than the envelope edge so the entrance canopy can cantilever forward and still land exactly on
 * the declared 7.0 m depth. Every surface pair on the facade is deliberately offset in depth:
 * two surfaces in the same plane facing the same way tear into interleaved triangles as the
 * camera moves, and authoring components flush against one another produces that by default.
 */

export type ProceduralModelOptions = {
  wireframe?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
  textureSize?: number;
  textureAnisotropy?: number;
  qualityPriority?: 'reference-fidelity' | 'balanced';
};

export type ProceduralModelRuntime = {
  nodes: Record<string, THREE.Object3D>;
  meshes: Record<string, THREE.Mesh>;
  sockets: Record<string, THREE.Object3D>;
  colliders: Record<string, unknown>;
  destructionGroups: Record<string, THREE.Object3D[]>;
};

const CONFIG = {
    "id": "ptt-station-building",
    "name": "PTT Station Building",
    "exportName": "PTTStationBuilding",
    "materials": [
      {
        "id": "wall",
        "color": 14145492,
        "roughness": 0.88,
        "metalness": 0
      },
      {
        "id": "deck",
        "color": 8160656,
        "roughness": 0.93,
        "metalness": 0
      },
      {
        "id": "fascia",
        "color": 3422290,
        "roughness": 0.42,
        "metalness": 0,
        "envMapIntensity": 0.6
      },
      {
        "id": "glass",
        "color": 7304311,
        "roughness": 0.13,
        "metalness": 0,
        "opacity": 0.94,
        "envMapIntensity": 1.1
      },
      {
        "id": "frame",
        "color": 8882828,
        "roughness": 0.55,
        "metalness": 0.25
      },
      {
        "id": "red",
        "color": 11544875,
        "roughness": 0.5,
        "metalness": 0
      },
      {
        "id": "galv",
        "color": 9146518,
        "roughness": 0.52,
        "metalness": 0.3
      }
    ],
    "geometry": {
      "shellFront": 0.3,
      "plantMaterial": "galv",
      "fasciaWall": {
        "cy": 4.075,
        "cz": 0.16,
        "h": 1.05,
        "d": 0.36,
        "w": 7.96
      },
      "parapetExtra": [
        [0, 3.86, 3.42, 7.98, 0.1, 0.16],
        [-3.91, 3.86, -0.075, 0.16, 0.1, 6.81],
        [3.91, 3.86, -0.075, 0.16, 0.1, 6.81]
      ],
      "fasciaWallMaterial": "wall",
      "frameMaterial": "frame",
      "fascia": {
        "boards": [
          {
            "w": 8.0,
            "h": 0.68,
            "d": 0.16,
            "at": [
              0,
              3.47,
              3.41
            ],
            "face": "+Z"
          },
          {
            "w": 0.16,
            "h": 0.68,
            "d": 6.84,
            "at": [
              -3.92,
              3.47,
              -0.08
            ],
            "plain": true
          },
          {
            "w": 0.16,
            "h": 0.68,
            "d": 6.84,
            "at": [
              3.92,
              3.47,
              -0.08
            ],
            "plain": true
          }
        ]
      },
      "glazing": {
        "cx": -0.3,
        "w": 5.2,
        "h": 2.7,
        "cy": 1.58,
        "cz": 0.36
      },
      "frame": [
        [
          -2.98,
          1.58,
          0.42,
          0.09,
          2.8,
          0.16
        ],
        [
          2.38,
          1.58,
          0.42,
          0.09,
          2.8,
          0.16
        ],
        [
          -0.3,
          2.97,
          0.42,
          5.46,
          0.09,
          0.16
        ],
        [
          -0.3,
          0.19,
          0.42,
          5.46,
          0.09,
          0.16
        ]
      ],
      "mullions": {
        "w": 0.07,
        "h": 2.74,
        "cy": 1.58,
        "cz": 0.42,
        "x": [
          -1.9,
          -0.85,
          0.2,
          1.25
        ]
      },
      "frontFeature": {
        "name": "Canopy slab and service door",
        "material": "wall",
        "boxes": [
          [
            0,
            3.45,
            1.8,
            7.92,
            0.3,
            3.36
          ],
          [
            3.96,
            1.2,
            -1.6,
            0.06,
            2.2,
            1
          ]
        ]
      },
      "sideFeature": {
        "name": "Canopy columns",
        "material": "frame",
        "boxes": [
          [
            -2.6,
            1.7,
            3.05,
            0.34,
            3.4,
            0.34
          ],
          [
            2.6,
            1.7,
            3.05,
            0.34,
            3.4,
            0.34
          ]
        ]
      },
      "extraFeature": {
        "name": "Canopy red stripe",
        "material": "red",
        "boxes": [
          [
            0,
            3.06,
            3.43,
            7.96,
            0.14,
            0.14
          ],
          [
            -3.925,
            3.06,
            -0.075,
            0.14,
            0.14,
            6.85
          ],
          [
            3.925,
            3.06,
            -0.075,
            0.14,
            0.14,
            6.85
          ]
        ]
      },
      "condensers": [
        [
          0.35,
          -1.35,
          0
        ],
        [
          1.65,
          -1.95,
          0
        ],
        [
          2.65,
          -1.95,
          0
        ]
      ]
    },
    "graphic": {
      "background": "#343852"
    }
  } as any;

/* ------------------------------------------------------------------ geometry helpers */

/** Local stand-in for BufferGeometryUtils.mergeGeometries, which cannot be imported here.
 *  Everything is converted to non-indexed so attribute arrays can be appended; that changes the
 *  vertex count but NOT the triangle count, which is the axis the budget measures. */
function mergeGeos(geos: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const temp: boolean[] = [];
  for (const g of geos) {
    if (g.index) { parts.push(g.toNonIndexed()); temp.push(true); }
    else { parts.push(g); temp.push(false); }
  }
  let total = 0;
  for (const g of parts) total += g.getAttribute('position').count;
  const position = new Float32Array(total * 3);
  const normal = new Float32Array(total * 3);
  const uv = new Float32Array(total * 2);
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute('position'), n = g.getAttribute('normal'), t = g.getAttribute('uv');
    for (let i = 0; i < p.count; i++) {
      position[(v + i) * 3] = p.getX(i); position[(v + i) * 3 + 1] = p.getY(i); position[(v + i) * 3 + 2] = p.getZ(i);
      if (n) { normal[(v + i) * 3] = n.getX(i); normal[(v + i) * 3 + 1] = n.getY(i); normal[(v + i) * 3 + 2] = n.getZ(i); }
      if (t) { uv[(v + i) * 2] = t.getX(i); uv[(v + i) * 2 + 1] = t.getY(i); }
    }
    v += p.count;
  }
  for (let i = 0; i < parts.length; i++) { if (temp[i]) parts[i].dispose(); geos[i].dispose(); }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(position, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  out.computeBoundingBox(); out.computeBoundingSphere();
  return out;
}

function boxAt(cx: number, cy: number, cz: number, w: number, h: number, d: number) {
  const g = new THREE.BoxGeometry(w, h, d); g.translate(cx, cy, cz); return g;
}
function cylAt(cx: number, cy: number, cz: number, r: number, h: number, seg = 16) {
  const g = new THREE.CylinderGeometry(r, r, h, seg); g.translate(cx, cy, cz); return g;
}
function boxes(list: number[][]) { return mergeGeos(list.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5]))); }

/* ------------------------------------------------------------------ materials */

/**
 * Every material is declared `textureless` in the sculpt spec, so no procedural texture set is
 * synthesised. That matters twice. Speed: makeProceduralTextureSet writes FIVE canvases per
 * material pixel by pixel in JavaScript, at a cost that is the SQUARE of the resolution.
 * Correctness: whenever a texture set exists the generator forces color to white and roughness
 * to 1 and reads both back from the generated maps, discarding the measured albedo -- which is
 * what renders a building mid-grey.
 *
 * Metalness is capped well below physical for metals. The thaikit harness supplies a hemisphere
 * light and three directionals and NO environment map, and a metal with nothing to reflect
 * renders black. The albedo stays measured; the metalness is what is wrong for this rig.
 *
 * The one printed graphic, the brand fascia, is a canvas assigned AFTER material construction.
 * The textureless declaration does not affect that, and it is the documented route.
 */
function buildMaterials(options: ProceduralModelOptions): Record<string, THREE.MeshStandardMaterial> {
  const map: Record<string, THREE.MeshStandardMaterial> = {};
  for (const s of CONFIG.materials as any[]) {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(s.color),
      roughness: s.roughness,
      metalness: s.metalness,
      wireframe: options.wireframe ?? false,
    });
    if (s.envMapIntensity !== undefined) m.envMapIntensity = s.envMapIntensity;
    if (s.opacity !== undefined) { m.transparent = true; m.opacity = s.opacity; m.depthWrite = true; }
    m.name = s.id;
    map[s.id] = m;
  }
  return map;
}

/* ------------------------------------------------------------------ the model */

export function createPTTStationBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'PTT Station Building';

  const materials = buildMaterials(options);
  const nodes: Record<string, THREE.Object3D> = {};
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;

  function add(id: string, name: string, geo: THREE.BufferGeometry, matId: string) {
    const node = new THREE.Group(); node.name = name + '__node';
    const mesh = new THREE.Mesh(geo, materials[matId]);
    mesh.name = name; mesh.castShadow = castShadow; mesh.receiveShadow = receiveShadow;
    node.add(mesh); root.add(node);
    nodes[id] = node; meshes[id] = mesh; colliders[id] = null;
    return mesh;
  }
  function addInst(id: string, name: string, geo: THREE.BufferGeometry, matId: string, mats: THREE.Matrix4[], cols?: number[]) {
    const node = new THREE.Group(); node.name = name + '__node';
    const inst = new THREE.InstancedMesh(geo, materials[matId], mats.length);
    inst.name = name; inst.castShadow = castShadow; inst.receiveShadow = receiveShadow;
    for (let i = 0; i < mats.length; i++) inst.setMatrixAt(i, mats[i]);
    if (cols) {
      const c = new THREE.Color();
      for (let i = 0; i < cols.length; i++) inst.setColorAt(i, c.setHex(cols[i]));
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    }
    inst.instanceMatrix.needsUpdate = true;
    node.add(inst); root.add(node);
    nodes[id] = node; meshes[id] = inst as unknown as THREE.Mesh; colliders[id] = null;
    return inst;
  }

  const G = CONFIG.geometry as any;

  /* Shell: SOLID box, not a ring. The prop is an exterior shell only ever seen from outside, so
   * an interior costs draw calls, geometries and VRAM for something nobody sees -- and solid
   * means the shopfront needs no opening cut in it, which removes all four reveal faces and the
   * z-fighting they cause. Set 0.06 m INSIDE the parapet ring on every elevation so no wall face
   * is ever coplanar and co-facing with a parapet face. */
  // How far forward the shell face sits. The DEFAULT 2.50 leaves 1.00 m for an entrance canopy to
  // cantilever into, so the canopy nose lands exactly on the declared 7.0 m depth. A building with
  // NO forward cantilever must push this out instead, or the prop is built short of its declared
  // envelope -- MK first came out 6.3 m deep against a declared 7.0 for exactly that reason.
  const SF = (G.shellFront ?? 2.50) as number;
  add('building-shell', 'Building shell', boxAt(0, 1.775, (SF - 3.44) / 2, 7.88, 3.55, SF + 3.44), 'wall');
  colliders['building-shell'] = {
    shape: 'box', localCenter: [0, 2.3, 0], halfExtents: [4.0, 2.3, 3.5],
    notes: 'Asset declares collider "box". One convex proxy over the whole envelope.',
  };

  /* Roof deck spans y 3.50..3.62 so its underside is sunk INTO the shell rather than resting on
   * it. Authored flush, the deck's bottom face and the parapet ring's bottom face were both at
   * y=3.550 and both facing down -- 46 m2 of coplanar co-facing surface. */
  add('roof-deck', 'Roof deck', boxAt(0, 3.56, (SF - 0.02 - 3.42) / 2, 7.8, 0.12, SF + 3.40), 'deck');

  /* Parapet: front fascia wall plus three upstands, MERGED into one component and one draw call.
   * The front is taller than the sides, which a plan extrusion cannot express. Outer faces stand
   * 0.06 m proud of the walls -- a coping drip edge, and what keeps them off the wall planes. */
  add('parapet', 'Parapet ring and fascia wall', boxes([
    [0, G.fasciaWall.cy, G.fasciaWall.cz, G.fasciaWall.w ?? 8.0, G.fasciaWall.h, G.fasciaWall.d],
    // Upstands sit INBOARD of the navy band plane (+-4.00) and the coping plane (+-3.99): at
    // +-4.00 their outer faces were coplanar and co-facing with the band's side runs.
    // Rear ends at -3.48, not -3.50: at -3.50 they shared the band's rear-end plane.
    [-3.86, 3.72, (SF - 0.30 - 3.48) / 2, 0.24, 0.34, SF + 3.18],
    [3.86, 3.72, (SF - 0.30 - 3.48) / 2, 0.24, 0.34, SF + 3.18],
    [0, 3.72, -3.36, 7.96, 0.34, 0.24],
    // Anything else in the SAME material folds in here rather than costing its own draw call --
    // full-height facade cladding, corner pilasters, a plinth. This is the merge lever: two
    // parts that share a material should never be two submissions.
    ...((G.parapetExtra ?? []) as number[][]),
  ]), G.fasciaWallMaterial);

  /* Brand fascia panel. Sunk INTO the fascia wall at the back and standing proud at the front, so
   * it overlaps its surround instead of meeting it. UVs are AUTHORED: the +Z face samples the
   * wordmark band of the canvas and the other five faces sample a plain corner of the same
   * canvas, which keeps the brand graphic at ONE material and ONE draw call. */
  {
    const f = G.fascia;
    let g: THREE.BufferGeometry;
    if (f.shape === 'disc') {
      // A round sign disc, built as a CircleGeometry face plus a shallow cylinder body.
      //
      // The obvious construction -- one cylinder rotated to face +Z -- puts the wordmark on its
      // side, because CylinderGeometry lays its cap UVs out in the cylinder's own XZ plane and
      // rotating the geometry does not rotate them with it. CircleGeometry's UVs are already
      // (x, y) in the plane it faces, so the square canvas lands the right way up with no
      // correction. The body's UVs are collapsed onto a plain corner of the same canvas so the
      // disc's edge does not smear the wordmark around its rim.
      const r = f.w / 2;
      const face = new THREE.CircleGeometry(r, 32);
      face.translate(0, 0, 0.061);
      const body = new THREE.CylinderGeometry(r, r, 0.12, 32);
      body.rotateX(-Math.PI / 2);
      const buv = body.getAttribute('uv') as THREE.BufferAttribute;
      for (let i = 0; i < buv.count; i++) buv.setXY(i, 0.02, 0.02);
      buv.needsUpdate = true;
      g = mergeGeos([face, body]);
      g.translate(0, f.cy, f.cz);
    } else {
      // BoxGeometry vertex order is px, nx, py, ny, pz, nz -- four vertices per face -- so the
      // outward face of a board is a known slice of the uv attribute. A building can carry the
      // same mark on more than one elevation (this kit's hospital signs its front AND its side),
      // so `boards` lets each board name the face that samples the graphic while every other face
      // samples a plain corner of the same canvas. One material, one draw call, any number of
      // boards facing any way.
      const FACE_SLICE: Record<string, number> = { '+X': 0, '-X': 4, '+Y': 8, '-Y': 12, '+Z': 16, '-Z': 20 };
      const boards = (f.boards as any[]) ?? [{ w: f.w, h: f.h, d: 0.12, at: [0, f.cy, f.cz], face: '+Z' }];
      const parts: THREE.BufferGeometry[] = [];
      for (const bd of boards) {
        const b = new THREE.BoxGeometry(bd.w, bd.h, bd.d ?? 0.12);
        const uv = b.getAttribute('uv') as THREE.BufferAttribute;
        // `plain` boards carry no graphic at all: a band that wraps three sides of a canopy should
        // repeat its mark on none of the returns, only on the face that fronts the street.
        // The test is an explicit boolean, NOT a sentinel index -- setting the slice start to -1
        // still satisfied `i >= start && i < start + 4` for vertices 0, 1 and 2, so three corners
        // of the +X face kept sampling the wordmark band and smeared a stretched ghost of the mark
        // along every return.
        const plain = bd.plain === true;
        const startAt = FACE_SLICE[bd.face ?? '+Z'];
        for (let i = 0; i < uv.count; i++) {
          if (!plain && i >= startAt && i < startAt + 4) uv.setXY(i, uv.getX(i), 0.125 + uv.getY(i) * 0.875);
          else uv.setXY(i, uv.getX(i) * 0.03, uv.getY(i) * 0.03);
        }
        uv.needsUpdate = true;
        b.translate(bd.at[0], bd.at[1], bd.at[2]);
        parts.push(b);
      }
      g = parts.length === 1 ? parts[0] : mergeGeos(parts);
    }
    add('fascia-panel', 'Brand fascia panel', g, 'fascia');
  }

  /* One glazing pane, not one per bay: the mullion grid in front does the dividing. Overlaps INTO
   * the facade at the back and sits RECESSED behind the framing at the front. Mostly opaque by
   * design -- there is no interior behind it, so a transparent pane would read as a hole. */
  // The pane is not always centred: a branch plan can put its glazing to one side of the entrance.
  // Authored centred while its framing sat off to the left, the two read as unrelated parts.
  add('shopfront-glazing', 'Shopfront glazing',
      boxAt(G.glazing.cx ?? 0, G.glazing.cy, G.glazing.cz ?? 2.51, G.glazing.w, G.glazing.h, 0.10), 'glass');

  /* Framing, transom, kick rail, door jambs and header MERGED into one component. Every part is
   * the same metal; folding them together is the draw-call lever chosen in the blockout, not an
   * optimisation deferred to the end -- a part split for authoring convenience cannot be merged
   * afterwards once a pivot hangs off it. Front face stands proud of glazing and mullions. */
  add('shopfront-frame', 'Shopfront framing and door bay', boxes(G.frame), G.frameMaterial);

  /* Side feature: shutter, service door or louvre, per plate. Stands proud of the wall face but
   * deliberately NOT out to the parapet plane at +-4.00 -- a face at exactly +-4.00 would be
   * coplanar and co-facing with the parapet outer face, which the bounding-box coplanarity check
   * flags even though the two never overlap in Y. */
  if (G.sideFeature) add('side-feature', G.sideFeature.name, boxes(G.sideFeature.boxes), G.sideFeature.material);

  /* Front feature: cladding band, ATM bank, upper-storey band or forecourt, per plate. */
  if (G.frontFeature) add('front-feature', G.frontFeature.name, boxes(G.frontFeature.boxes), G.frontFeature.material);

  /* A third merged slot, for whatever the plate has that the two above do not cover -- a parapet
   * coping, a kerb, a forecourt column base. Same rule as the others: everything in it shares one
   * material and is submitted once. */
  if (G.extraFeature) add('extra-feature', G.extraFeature.name, boxes(G.extraFeature.boxes), G.extraFeature.material);

  /* Mullions: the fine vertical grid is the most recognisable thing about a shopfront. Instances
   * on one geometry cost one draw call; as components they would have cost one each and blown the
   * ceiling on their own. They sit INSIDE the frame depth band at both ends so they are not
   * coplanar with it, while still standing proud of the glazing so the glass reads as recessed. */
  {
    const m = G.mullions;
    const mats = (m.x as number[]).map((x) => new THREE.Matrix4().setPosition(x, m.cy, m.cz ?? 2.58));
    addInst('shopfront-mullions', 'Shopfront mullions', new THREE.BoxGeometry(m.w, m.h, 0.08), G.frameMaterial, mats);
  }

  /* Rooftop condensers: casing, fan cowl and four feet MERGED into a single instanced geometry.
   * Feet start below the deck top so the two overlap rather than sharing a plane. */
  {
    const parts: THREE.BufferGeometry[] = [
      boxAt(0, 0.46, 0, 0.95, 0.72, 0.85),
      cylAt(0, 0.87, 0, 0.30, 0.10, 16),
    ];
    for (const fx of [-0.4, 0.4]) for (const fz of [-0.35, 0.35]) parts.push(boxAt(fx, 0.05, fz, 0.08, 0.10, 0.08));
    const unit = mergeGeos(parts);
    const mats = (G.condensers as number[][]).map(([x, z, yaw]) =>
      new THREE.Matrix4().compose(
        new THREE.Vector3(x, 3.60, z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
        new THREE.Vector3(1, 1, 1),
      ));
    // The plant material is CONFIGURABLE, not hard-coded. Referencing a 'galv' id that a config
    // does not define silently hands InstancedMesh an undefined material, three.js substitutes a
    // default, and the prop ships one material over its ceiling with nothing in the config to
    // explain the extra.
    addInst('plant-condensers', 'Rooftop condenser units', unit, G.plantMaterial ?? 'galv', mats);
  }

  /* Optional instanced extra: canopy plates, pilasters or forecourt columns, per plate. */
  if (G.extraSystem) {
    const e = G.extraSystem;
    let unit: THREE.BufferGeometry;
    if (e.kind === 'plate') {
      unit = mergeGeos([boxAt(0, 0, 0, e.w, e.h, e.d), cylAt(0, -e.h / 2 - 0.015, 0, 0.085, 0.03, 12)]);
    } else {
      unit = boxAt(0, 0, 0, e.w, e.h, e.d);
    }
    const mats = (e.at as number[][]).map(([x, y, z]) => new THREE.Matrix4().setPosition(x, y, z));
    addInst(e.id, e.name, unit, e.material, mats, e.tones ? mats.map((_, i) => e.tones[i % e.tones.length]) : undefined);
  }

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  return root;
}

/* ------------------------------------------------------------------ brand fascia canvas */

/**
 * The fascia face, BAKED: a 2048 x 512 WebP (~10 KB) composed once in Pillow from
 * scratch/ptt-station-building/sign/compose.py and embedded here as a data URI. The top 448 rows
 * are the 8.00 x 0.68 m band the +Z run samples (v 0.125..1); the bottom 64 rows are plain navy,
 * which is the corner every other face samples. Emblem: a fal-ai/flux/dev droplet-flame (seed 21,
 * ~$0.03) thresholded to a white mask -- a stylised approximation of the trademark, recorded as
 * such. Wordmark: 'ptt' in Nimbus Sans Bold Italic. Baked rather than drawn at runtime because
 * fillText depends on whatever fonts the host has: the first ship's flame glyph fell back to a
 * stray dot and its wordmark changed shape per machine. drawFallbackSign() (stroked vector paths)
 * remains as the decode-failure fallback only.
 */
const SIGN_IMAGE_DATA_URL =
  'data:image/webp;base64,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';

/** Decode-failure fallback: the mark as vector paths, so it is at least the same shape on every
 *  host. A teardrop flame with an inner drop, and 'ptt' set as three stroked glyph paths. */
function drawFallbackSign(): HTMLCanvasElement | null {
  if (typeof document === 'undefined') return null;
  const W = 2048, H = 512, BAND = 448;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  ctx.fillStyle = CONFIG.graphic.background;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#FFFFFF';
  // Flame: outer teardrop minus inner drop (even-odd), height 80 percent of the band.
  const fh = BAND * 0.8, fw = fh * 0.56, fx = W * 0.52, fy = (BAND - fh) / 2;
  const drop = (cx: number, top: number, w: number, h: number) => {
    ctx.moveTo(cx, top);
    ctx.bezierCurveTo(cx + w * 0.05, top + h * 0.35, cx + w * 0.5, top + h * 0.5, cx + w * 0.5, top + h * 0.75);
    ctx.bezierCurveTo(cx + w * 0.5, top + h * 1.08, cx - w * 0.5, top + h * 1.08, cx - w * 0.5, top + h * 0.75);
    ctx.bezierCurveTo(cx - w * 0.5, top + h * 0.5, cx - w * 0.05, top + h * 0.35, cx, top);
  };
  ctx.beginPath();
  drop(fx + fw / 2, fy, fw, fh * 0.92);
  drop(fx + fw / 2, fy + fh * 0.36, fw * 0.5, fh * 0.5);
  ctx.fill('evenodd');
  // Wordmark: stroked bold-italic strokes for p, t, t at ~62 percent of the flame height.
  const lh = fh * 0.62, x0 = fx + fw + fh * 0.1, base = fy + fh * 0.8, sw = lh * 0.19, sl = 0.18;
  ctx.lineWidth = sw; ctx.lineCap = 'butt'; ctx.lineJoin = 'round'; ctx.strokeStyle = '#FFFFFF';
  ctx.save(); ctx.transform(1, 0, -sl, 1, sl * base, 0);
  const xh = lh * 0.62;
  ctx.beginPath(); ctx.moveTo(x0 + sw / 2, base - xh); ctx.lineTo(x0 + sw / 2, base + lh * 0.3); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(x0 + sw / 2 + xh * 0.42, base - xh / 2, xh * 0.42, xh / 2 - sw / 2, 0, -Math.PI / 2, Math.PI / 2); ctx.stroke();
  let tx = x0 + sw + xh * 0.95 + sw * 0.6;
  for (let i = 0; i < 2; i++) {
    ctx.beginPath(); ctx.moveTo(tx + sw / 2, base - lh * 0.85); ctx.lineTo(tx + sw / 2, base - sw / 2);
    ctx.lineTo(tx + sw * 1.5, base - sw / 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(tx - sw * 0.4, base - xh); ctx.lineTo(tx + sw * 1.7, base - xh); ctx.stroke();
    tx += sw * 2.4;
  }
  ctx.restore();
  return canvas;
}

/** Assign the baked fascia image to the fascia material AFTER construction. This is the documented
 *  route for a printed brand fascia and is unaffected by the material's `textureless` declaration
 *  -- what that skips is the five-canvas PROCEDURAL set, a different thing entirely. The texture
 *  is assigned synchronously so the harness waits on its decode. */
function applyFasciaGraphic(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as ProceduralModelRuntime | undefined;
  const mesh = rt?.meshes?.['fascia-panel'];
  if (!mesh || typeof document === 'undefined') return;
  const material = mesh.material as THREE.MeshStandardMaterial;
  if (!material) return;

  const srgb = (THREE as any).SRGBColorSpace;
  const baked = new THREE.TextureLoader().load(SIGN_IMAGE_DATA_URL, undefined, undefined, () => {
    const canvas = drawFallbackSign();
    if (!canvas) return;
    const tex = new THREE.CanvasTexture(canvas);
    if (srgb) tex.colorSpace = srgb;
    tex.anisotropy = 4;
    material.map = tex;
    material.needsUpdate = true;
  });
  if (srgb) baked.colorSpace = srgb;
  baked.anisotropy = 4;
  baked.needsUpdate = true;

  material.map = baked;
  // A `map` MULTIPLIES `color`: the measured navy is already painted into the image, so the
  // colour slot must be white or the albedo is applied twice.
  material.color.setHex(0xffffff);
  material.needsUpdate = true;
}

/* ------------------------------------------------------------------ thaikit entry point */

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it with
 * (spec, options). `spec` is accepted and attached for host-side inspection -- the reconstruction
 * data already lives in this module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createPTTStationBuildingModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  applyFasciaGraphic(root);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. A static exterior shell -- nothing opens, turns or swings. The doors and any
    // shutter are authored as fixed geometry, so they get no axis: a named pivot is a promise
    // that a part turns on it, and a prop that declares pivots it has no mechanisms for has
    // described a machine that does not exist.
    const pivots: THREE.Object3D[] = [];
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);
    pivots.push(rootPivot);

    // Sockets: NONE. Nothing attaches to this prop and nothing is emitted from it.

    // Colliders are plain DATA, not Object3D, so they carry no .name of their own. Give each the
    // id of the component it owns and drop the empty ones -- a nameless empty proxy in the
    // runtime list reads as a physics shape that exists and does nothing.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups: this prop declares NONE, and promotion checks built against declared as
    // an equality in BOTH directions. Derived rather than assumed empty, so a component that
    // somehow carried a fractureGroup fails the gate loudly instead of being dropped here.
    const grouped = new Map<string, THREE.Object3D[]>();
    for (const [name, members] of Object.entries((rt.destructionGroups ?? {}) as Record<string, THREE.Object3D[]>)) {
      grouped.set(name, [...members]);
    }
    for (const node of Object.values(nodes)) {
      const group = (node as any)?.userData?.actionProfile?.destruction?.fractureGroup;
      if (typeof group !== 'string' || !group) continue;
      if (!grouped.has(group)) grouped.set(group, []);
      grouped.get(group)!.push(node);
    }

    root.userData.sculptRuntime = {
      ...rt,
      // A COUNT, not the Record. thaikit's harness returns this field straight across the
      // puppeteer bridge and its registry field is a number; a Record of Object3D is circular and
      // fails to serialise, which surfaces as the whole stats object arriving undefined. The
      // Record stays reachable under byId.
      nodes: Object.keys(nodes).length,
      pivots,
      sockets: Object.values((rt.sockets ?? {}) as Record<string, THREE.Object3D>),
      colliders,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: rt.sockets ?? {} },
    };
  }
  return root;
}
