/**
 * Stage 4b: what the runtime needs that glTF cannot say, written once into the
 * scene extras. Colliders come from the placement rows -- the derived compounds
 * transformed into world space -- never from the merged mesh.
 */
import { KHRLightsPunctual } from '@gltf-transform/extensions';
import { getBounds } from '@gltf-transform/functions';

import { MANIFEST_SCHEMA_VERSION, ManifestExtras } from '@thai-kit/level-schema';

const hexToRgb = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255].map(srgbToLinear);
};
const srgbToLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);

function quatFromDirection([x, y, z]) {
  const l = Math.hypot(x, y, z) || 1;
  const d = [x / l, y / l, z / l];
  const dot = -d[2]; // from (0,0,-1)
  if (dot > 0.999999) return [0, 0, 0, 1];
  if (dot < -0.999999) return [0, 1, 0, 0];
  const cross = [(-1) * d[1] - 0 * d[2] * 0, 0, 0];
  // cross((0,0,-1), d) = (0*d2 - (-1)*d1, (-1)*d0 - 0*d2, 0) = (d1, -d0, 0)
  cross[0] = d[1]; cross[1] = -d[0]; cross[2] = 0;
  const w = 1 + dot;
  const n = Math.hypot(cross[0], cross[1], cross[2], w);
  return [cross[0] / n, cross[1] / n, cross[2] / n, w / n];
}

function quatFromYaw(rad) { return [0, Math.sin(rad / 2), 0, Math.cos(rad / 2)]; }

function mulQuat(a, b) {
  return [
    a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1],
    a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0],
    a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3],
    a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2],
  ];
}

/** v through a unit quaternion, as THREE.Vector3.applyQuaternion does it. */
export function rotateByQuaternion([x, y, z], [qx, qy, qz, qw]) {
  const tx = 2 * (qy * z - qz * y);
  const ty = 2 * (qz * x - qx * z);
  const tz = 2 * (qx * y - qy * x);
  return [x + qw * tx + (qy * tz - qz * ty), y + qw * ty + (qz * tx - qx * tz), z + qw * tz + (qx * ty - qy * tx)];
}

function quatFromEulerXYZ([x, y, z]) {
  const c1 = Math.cos(x / 2), c2 = Math.cos(y / 2), c3 = Math.cos(z / 2);
  const s1 = Math.sin(x / 2), s2 = Math.sin(y / 2), s3 = Math.sin(z / 2);
  return [s1 * c2 * c3 + c1 * s2 * s3, c1 * s2 * c3 - s1 * c2 * s3, c1 * c2 * s3 + s1 * s2 * c3, c1 * c2 * c3 - s1 * s2 * s3];
}

/**
 * A placement's compound in world space: each part's centre through the TRS,
 * half-extents scaled. The centre is rotated by the SAME quaternion the part
 * ships with. It used to go through a hand-rolled euler that applied X, then Y,
 * then Z -- the reverse of three's 'XYZ' (Rx * Ry * Rz, so Z first) -- which
 * agrees for a yaw or a single tilt and puts a part metres off on a prop tilted
 * on two axes, while the part's own orientation was right.
 */
export function worldShapes(p) {
  const q = quatFromEulerXYZ(p.rotation);
  return p.colliders.map((c) => {
    const scaled = [c.offset[0] * p.scale[0], c.offset[1] * p.scale[1], c.offset[2] * p.scale[2]];
    const rotated = rotateByQuaternion(scaled, q);
    const halfExtents = [c.scale[0] * p.scale[0], c.scale[1] * p.scale[1], c.scale[2] * p.scale[2]];
    if (c.type === 'cylinder' || c.type === 'capsule' || c.type === 'sphere') {
      const r = Math.max(halfExtents[0], halfExtents[2]);
      halfExtents[0] = r; halfExtents[2] = r;
    }
    return {
      type: c.type,
      position: [rotated[0] + p.position[0], rotated[1] + p.position[1], rotated[2] + p.position[2]].map((n) => +n.toFixed(4)),
      quaternion: q.map((n) => +n.toFixed(6)),
      halfExtents: halfExtents.map((n) => +Math.max(0.005, n).toFixed(4)),
      isTrigger: Boolean(c.isTrigger),
    };
  });
}

/**
 * Local shapes for a dynamic body, in the placement's own frame. The runtime
 * creates the body at the holder node's position and rotation only, so the
 * placement's SCALE has to be folded into the shapes here.
 */
export function localShapes(p) {
  const s = p.scale ?? [1, 1, 1];
  return p.colliders.map((c) => {
    const halfExtents = [c.scale[0] * s[0], c.scale[1] * s[1], c.scale[2] * s[2]];
    if (c.type === 'cylinder' || c.type === 'capsule' || c.type === 'sphere') {
      const r = Math.max(halfExtents[0], halfExtents[2]);
      halfExtents[0] = r; halfExtents[2] = r;
    }
    return {
      type: c.type,
      position: c.offset.map((n, i) => +(n * s[i]).toFixed(4)),
      quaternion: [0, 0, 0, 1],
      halfExtents: halfExtents.map((n) => +Math.max(0.005, n).toFixed(4)),
      isTrigger: Boolean(c.isTrigger),
    };
  });
}

/**
 * Which authored lamps ship LIVE. Once every point and spot lamp is baked into the
 * lightmap, a live copy only matters to dynamic objects -- and every live lamp is a
 * three light: uniforms every material carries and a loop every dynamic fragment
 * runs. 180 lamps overflow a low-end GPU's fragment uniform budget outright, so a
 * baked level keeps the moon plus the `liveLamps` strongest (intensity x nearness
 * to a spawn), and the rest live on in the lightmap alone. 0 keeps every lamp.
 *
 * With NO lightmap (`--quality low`, `--baker none`) the cap still holds and the
 * rest are DROPPED, not kept: the ceiling is the GPU's, not the atlas's, and
 * bangkoksoi's geometry check used to ship all 191 lamps live because the cap
 * only fired beside a bake. A no-lightmap build is a look at the shape; the
 * lamps it loses are named in the log.
 */
export function selectLiveLamps(lights, spawns, liveLamps, bakedLights) {
  if (!liveLamps || liveLamps <= 0) return { live: lights, bakedOnly: [], dropped: [] };
  const anchors = spawns.length ? spawns.map((s) => s.position) : [[0, 0, 0]];
  const near = (p) => Math.min(...anchors.map((a) => Math.hypot(p[0] - a[0], p[1] - a[1], p[2] - a[2])));
  const rank = (l) => (l.intensity ?? 0) / (1 + near(l.position ?? [0, 0, 0]) / 20);
  const lamps = lights.filter((l) => l.type !== 'directional' && l.role !== 'moon').sort((a, b) => Number(Boolean(b.castShadow)) - Number(Boolean(a.castShadow)) || rank(b) - rank(a));
  const keep = new Set(lamps.slice(0, liveLamps).map((l) => l.id ?? l.node));
  const rest = lamps.slice(liveLamps).map((l) => l.id ?? l.node);
  return {
    live: lights.filter((l) => l.type === 'directional' || l.role === 'moon' || keep.has(l.id ?? l.node)),
    bakedOnly: bakedLights ? rest : [],
    dropped: bakedLights ? [] : rest,
  };
}

export function writeManifest({ bake, lodStats, lightmapImage, lightmapStats = null, skyIndices = null, generator, liveLamps = 0, onNote = null }) {
  return (doc) => {
    const root = doc.getRoot();
    const scene = root.listScenes()[0];

    // Lights: rebuilt from the editor's record rather than trusting what the
    // exporter and flatten left behind.
    for (const node of [...root.listNodes()]) {
      if (node.getName().startsWith('light_') || node.getExtension('KHR_lights_punctual')) node.dispose();
    }
    for (const ext of root.listExtensionsUsed()) if (ext.extensionName === 'KHR_lights_punctual') ext.dispose();
    const lightsExt = doc.createExtension(KHRLightsPunctual);
    const lights = [];
    const selected = selectLiveLamps(bake.lights, bake.spawns ?? [], liveLamps, lightmapStats?.bakedLights != null);
    if (selected.dropped.length) onNote?.(`${selected.dropped.length} lamp(s) DROPPED: no lightmap to carry them and --live-lamps ${liveLamps} caps what ships live; ${selected.live.length} light(s) stay`);
    for (const l of selected.live) {
      const type = l.type === 'directional' ? 'directional' : l.type === 'spot' ? 'spot' : 'point';
      const light = lightsExt.createLight(l.node).setType(type).setColor(hexToRgb(l.color)).setIntensity(l.intensity);
      if (type !== 'directional' && l.distance) light.setRange(l.distance);
      if (type === 'spot') {
        const outer = l.angle ?? Math.PI / 6;
        light.setOuterConeAngle(outer).setInnerConeAngle(outer * (1 - (l.penumbra ?? 0)));
      }
      const node = doc.createNode(l.node).setTranslation(l.position).setExtension('KHR_lights_punctual', light);
      if (l.direction) node.setRotation(quatFromDirection(l.direction));
      node.setExtras({ tk: { kind: 'light', role: l.role, castShadow: l.castShadow, shadow: l.shadow } });
      scene.addChild(node);
      lights.push({ node: l.node, type, role: l.role, castShadow: l.castShadow, shadow: l.castShadow ? l.shadow : null });
    }

    for (const node of [...root.listNodes()]) if (node.getName().startsWith('spawn_')) node.dispose();
    for (const s of bake.spawns) {
      const node = doc.createNode(`spawn_${s.name}`).setTranslation(s.position).setRotation(quatFromYaw((s.yawDeg * Math.PI) / 180));
      node.setExtras({ tk: { kind: 'spawn', team: s.team, yawDeg: s.yawDeg } });
      scene.addChild(node);
    }

    const cellSize = bake.cellSize;
    const cellsByKey = new Map();
    for (const p of bake.placements) {
      if (!p.static) continue;
      let c = cellsByKey.get(p.cell);
      if (!c) {
        c = { key: p.cell, ix: p.ix, iz: p.iz, min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
        cellsByKey.set(p.cell, c);
      }
      for (let i = 0; i < 3; i += 1) { c.min[i] = Math.min(c.min[i], p.bounds.min[i]); c.max[i] = Math.max(c.max[i], p.bounds.max[i]); }
    }
    const statsByCell = new Map(lodStats.map((s) => [s.cell, s]));
    const cells = [...cellsByKey.values()].map((c) => {
      const s = statsByCell.get(`cell_${c.ix}_${c.iz}`);
      return {
        key: c.key, ix: c.ix, iz: c.iz,
        bounds: { min: c.min.map((n) => +n.toFixed(3)), max: c.max.map((n) => +n.toFixed(3)) },
        drawCalls: s?.drawCalls ?? [0, 0, 0], triangles: s?.triangles ?? [0, 0, 0],
      };
    });

    const bounds = getBounds(scene);
    const settings = bake.settings ?? {};
    const manifest = ManifestExtras.parse({
      schemaVersion: MANIFEST_SCHEMA_VERSION,
      id: bake.id, name: bake.name, generatedAt: new Date().toISOString(), generator,
      // An imported (Unreal) raw says so; the editor's raw has no `source`.
      source: bake.source ? { ...bake.source, lightmap: lightmapImage == null ? 'none' : lightmapStats?.source === 'unreal' ? 'adopted' : 'blender' } : null,
      units: 'm',
      bounds: { min: bounds.min.map((n) => +n.toFixed(3)), max: bounds.max.map((n) => +n.toFixed(3)) },
      cells: { size: cellSize, list: cells },
      lod: { distances: [settings.lod?.lod1Distance ?? 60, settings.lod?.lod2Distance ?? 140], hysteresis: settings.lod?.hysteresis ?? 8 },
      lightmap: lightmapImage == null ? null : {
        image: lightmapImage,
        channel: 1,
        intensity: settings.lightmap?.intensity ?? 1,
        // Anything brighter than 1 was divided out before the 8-bit atlas was
        // written; the runtime folds this back into lightMapIntensity, which is
        // already a plain multiply in the shader. 1 means the bake was LDR.
        range: lightmapStats?.range ?? 1,
        // The bake reports how many lamps it put into RGB; the KEY's presence
        // is what says the atlas carries them (an older lightmap.json has
        // none), and it is what lets the runtime cut the lamps' live direct
        // term on static materials without double counting.
        bakedLights: lightmapStats?.bakedLights != null,
        layout: lightmapStats?.bakedLights != null ? 'rgb=indirect+sky+lights,a=moonVisibility' : 'rgb=indirect+sky,a=moonVisibility',
        bakedOnlyLamps: selected.bakedOnly.length,
      },
      lights,
      ambient: { sky: settings.environment?.hemisphere?.sky ?? '#8797c2', ground: settings.environment?.hemisphere?.ground ?? '#2a2620', intensity: settings.environment?.hemisphere?.intensity ?? 0.35 },
      // Image-based lighting. Emitted only when the level asks for it, because
      // null is what tells the runtime to render an older level unchanged.
      ibl: settings.environment?.ibl?.enabled === false
        ? null
        : {
            enabled: true,
            intensity: settings.environment?.ibl?.intensity ?? 1,
            size: settings.environment?.ibl?.size ?? 256,
          },
      sky: skyBlock(settings.sky, skyIndices),
      // `tags` ride with the shapes: `ladder` is a body the player climbs, and
      // the runtime's `colliders.ladders` and the game's controller key on it.
      colliders: bake.placements.filter((p) => p.static && p.colliders.length).map((p) => ({ placement: p.id, shapes: worldShapes(p), tags: p.tags ?? [] })),
      dynamic: bake.placements.filter((p) => !p.static).map((p) => ({
        node: `dynamic/${p.id}`, placement: p.id, physics: p.physics, billboard: p.billboard ?? 'none',
        castShadow: p.castShadow !== false, receiveShadow: p.receiveShadow !== false,
        // A billboard's node is re-faced every frame and a collider cannot
        // follow it; the skyline cards' thin kit boxes shipped as fixed
        // 37 x 83 m walls at their authored yaw until this. Both routes
        // (editor export and the Unreal importer) pass through here.
        destructionGroups: p.destructionGroups ?? [], colliders: p.billboard && p.billboard !== 'none' ? [] : localShapes(p),
        tags: p.tags ?? [],
      })),
      spawns: bake.spawns,
    });
    scene.setExtras({ thaikitManifest: manifest });
    root.setExtras({});
    return manifest;
  };
}

/**
 * The sky as the runtime needs it: the same numbers the author set, but with
 * FILENAMES replaced by indices into the baked GLB's `images[]`. A layer whose
 * image did not make it in is null rather than an index that points nowhere,
 * and a level with no sky at all is one null -- which is what lets a level
 * baked before the sky existed still parse at schemaVersion 1.
 */
function skyBlock(sky, indices) {
  if (!sky?.enabled) return null;
  const base = indices?.base == null ? null : {
    image: indices.base,
    // What the encoder actually wrote, not what the source mode was: a
    // `panoramic` sky ships as a 6-face cubemap, an `equirect` or `cube` one as
    // a single panorama.
    projection: indices.projection ?? 'equirect',
    intensity: sky.base?.intensity ?? 1,
    lodBias: sky.base?.lodBias ?? -0.5,
    rotationDeg: sky.base?.rotationDeg ?? 0,
  };
  const clouds = indices?.clouds == null ? null : {
    image: indices.clouds,
    color: sky.clouds?.color ?? '#ffffff',
    opacity: sky.clouds?.opacity ?? 0.5,
    driftDegPerMin: sky.clouds?.driftDegPerMin ?? 3,
    repeat: sky.clouds?.repeat ?? 2,
    heightScale: sky.clouds?.heightScale ?? 0.35,
  };
  const stars = sky.stars?.enabled === false ? null : {
    density: sky.stars?.density ?? 1,
    brightness: sky.stars?.brightness ?? 1,
    twinkleSpeed: sky.stars?.twinkleSpeed ?? 1,
    color: sky.stars?.color ?? '#dfe6ff',
    horizonFade: sky.stars?.horizonFade ?? 0.25,
  };
  // Enabled but with nothing in any layer is not a sky.
  return base || clouds || stars ? { base, clouds, stars } : null;
}
