/**
 * What a level GLB carries in its `extras`, and nothing else.
 *
 * A level is a glTF 2.0 file. Everything the editor needs that glTF cannot say
 * -- which pack an object came from, whether it is static, the moon's shadow
 * settings, the cell size -- rides in `extras`, and these schemas are the
 * contract for those payloads. Two GLBs use them: the editable project
 * (`levels/<id>/level.glb`, scene.extras.thaikitLevel + per-node extras.tk) and
 * the baked export (`build/level.glb`, scene.extras.thaikitManifest), which is
 * independent of thaikit and read by the runtime package.
 */
import { z } from 'zod';

export const LEVEL_SCHEMA_VERSION = 1;
export const MANIFEST_SCHEMA_VERSION = 1;

const num = z.number().finite();
export const Vec3 = z.tuple([num, num, num]);
export const Quat = z.tuple([num, num, num, num]);
const hex = z.string().regex(/^#[0-9a-fA-F]{6}$/);
export const Slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

/** The six cube-map faces, in the order three's CubeTextureLoader wants them. */
export const CUBE_FACES = ['px', 'nx', 'py', 'ny', 'pz', 'nz'];

/** `@thaikit/honda-wave` -- a pack namespace and an item name. */
export const ItemRef = z.string().regex(/^@[a-z0-9][a-z0-9-]*\/[a-z0-9][a-z0-9-]*$/);

export const SnapSettings = z.object({
  enabled: z.boolean().default(true),
  translate: num.positive().default(0.5),
  rotateDeg: num.positive().default(15),
  scale: num.positive().default(0.1),
  surface: z
    .object({
      enabled: z.boolean().default(true),
      threshold: num.positive().default(0.3),
      edgeThreshold: num.positive().default(0.25),
      angleDeg: num.positive().default(5),
      minOverlap: num.nonnegative().default(0.05),
    })
    .default({}),
});

/**
 * One flat walkable surface under the whole map. It is a setting rather than a
 * placement because there is exactly one, its extent follows the map's own, and
 * the only thing anyone moves is its height.
 */
export const GroundSettings = z.object({
  enabled: z.boolean().default(false),
  y: num.default(0),
  color: hex.default('#8b909b'),
  margin: num.nonnegative().default(8),
});

/**
 * The sky: three layers over the level, none of which is geometry in the bake.
 *
 * A base dome (one equirectangular image, or six cube faces the bake resamples
 * into one), an ADDITIVE cloud dome that drifts, and a procedural star field
 * that twinkles. Like the ground it is a SETTING -- there is exactly one sky,
 * nothing about it can be selected or dragged, and its images live beside the
 * project as `levels/<id>/sky/<slot>.<ext>` rather than inside the level GLB,
 * which is re-uploaded whole on every save.
 *
 * Only the FILENAME rides in the level; the bake reads the sidecar off disk and
 * folds it into the shipped GLB as an unreferenced KTX2 image, the same
 * arrangement the lightmap uses.
 */
export const SkySettings = z.object({
  enabled: z.boolean().default(false),
  base: z
    .object({
      mode: z.enum(['none', 'equirect', 'cube']).default('none'),
      /** The equirect slot's file, when mode is 'equirect'. */
      file: z.string().nullable().default(null),
      /** px/nx/py/ny/pz/nz -> filename, when mode is 'cube'. */
      faces: z.record(z.enum(CUBE_FACES), z.string()).nullable().default(null),
      intensity: num.nonnegative().default(1),
      rotationDeg: num.default(0),
    })
    .default({}),
  clouds: z
    .object({
      file: z.string().nullable().default(null),
      color: hex.default('#ffffff'),
      opacity: num.min(0).max(1).default(0.5),
      /** Yaw the cloud dome turns through per minute. */
      driftDegPerMin: num.default(3),
      repeat: num.positive().default(2),
      /** Flattens the dome so it reads as a sky rather than a ball around you. */
      heightScale: num.positive().default(0.35),
    })
    .default({}),
  stars: z
    .object({
      enabled: z.boolean().default(true),
      density: num.positive().default(1),
      brightness: num.nonnegative().default(1),
      twinkleSpeed: num.nonnegative().default(1),
      color: hex.default('#dfe6ff'),
      /** How far up the dome the field fades in, 0 = to the horizon. */
      horizonFade: num.min(0).max(1).default(0.25),
    })
    .default({}),
});

export const LevelSettings = z.object({
  cellSize: num.positive().default(24),
  ground: GroundSettings.default({}),
  sky: SkySettings.default({}),
  gridSize: num.positive().default(1),
  snap: SnapSettings.default({}),
  showGrid: z.boolean().default(true),
  showAxes: z.boolean().default(true),
  environment: z
    .object({
      background: hex.default('#0b0d16'),
      hemisphere: z
        .object({
          sky: hex.default('#8797c2'),
          ground: hex.default('#2a2620'),
          intensity: num.nonnegative().default(0.35),
        })
        .default({}),
    })
    .default({}),
  lightmap: z
    .object({
      enabled: z.boolean().default(true),
      size: z.number().int().positive().default(4096),
      texelsPerMeter: num.positive().default(8),
      samples: z.number().int().positive().default(128),
      intensity: num.nonnegative().default(1),
    })
    .default({}),
  lod: z
    .object({
      lod1Ratio: num.positive().max(1).default(0.4),
      lod2Ratio: num.positive().max(1).default(0.15),
      lod1Distance: num.positive().default(60),
      lod2Distance: num.positive().default(140),
      hysteresis: num.nonnegative().default(8),
    })
    .default({}),
  textures: z
    .object({
      colorMode: z.enum(['etc1s', 'uastc']).default('etc1s'),
      dataMode: z.enum(['etc1s', 'uastc']).default('uastc'),
      maxSize: z.number().int().positive().default(2048),
    })
    .default({}),
});

/** scene.extras.thaikitLevel on the editable project GLB. */
export const LevelExtras = z.object({
  schemaVersion: z.literal(LEVEL_SCHEMA_VERSION),
  id: Slug,
  name: z.string().min(1),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  settings: LevelSettings.default({}),
  packs: z
    .array(z.object({ id: z.string(), version: z.string().nullable().default(null), source: z.string().nullable().default(null) }))
    .default([]),
  spawns: z
    .array(z.object({ name: z.string().min(1), position: Vec3, yawDeg: num.default(0), team: z.string().nullable().default(null) }))
    .default([]),
});

/** node.extras.tk on a placement node of the project GLB. */
export const PlacementExtras = z.object({
  kind: z.literal('placement'),
  ref: ItemRef,
  version: z.string().nullable().default(null),
  static: z.boolean().nullable().default(null),
  physics: z.boolean().nullable().default(null),
  castShadow: z.boolean().default(true),
  receiveShadow: z.boolean().default(true),
  tags: z.array(z.string()).default([]),
});

export const ShadowSettings = z.object({
  mapSize: z.number().int().positive().default(2048),
  extent: num.positive().default(60),
  bias: num.default(-0.0005),
  normalBias: num.default(0.02),
});

/** node.extras.tk on a light node (the node also carries KHR_lights_punctual). */
export const LightExtras = z.object({
  kind: z.literal('light'),
  role: z.enum(['moon']).nullable().default(null),
  enabled: z.boolean().default(true),
  castShadow: z.boolean().default(false),
  shadow: ShadowSettings.default({}),
});

export const SpawnExtras = z.object({
  kind: z.literal('spawn'),
  team: z.string().nullable().default(null),
  yawDeg: num.default(0),
});

export const NodeExtras = z.discriminatedUnion('kind', [PlacementExtras, LightExtras, SpawnExtras]);

// ---------------------------------------------------------------------------
// The export manifest -- independent of thaikit.
// ---------------------------------------------------------------------------

export const ColliderShape = z.object({
  type: z.enum(['box', 'cylinder', 'sphere', 'capsule']),
  position: Vec3,
  quaternion: Quat.default([0, 0, 0, 1]),
  halfExtents: Vec3,
  isTrigger: z.boolean().default(false),
});

export const Bounds = z.object({ min: Vec3, max: Vec3 });

export const ManifestCell = z.object({
  key: z.string(),
  ix: z.number().int(),
  iz: z.number().int(),
  bounds: Bounds,
  drawCalls: z.tuple([z.number().int(), z.number().int(), z.number().int()]),
  triangles: z.tuple([z.number().int(), z.number().int(), z.number().int()]),
});

export const ManifestLight = z.object({
  node: z.string(),
  type: z.enum(['directional', 'point', 'spot']),
  role: z.enum(['moon']).nullable().default(null),
  castShadow: z.boolean().default(false),
  shadow: ShadowSettings.nullable().default(null),
});

/** scene.extras.thaikitManifest on the baked GLB. */
export const ManifestExtras = z.object({
  schemaVersion: z.literal(MANIFEST_SCHEMA_VERSION),
  id: Slug,
  name: z.string(),
  generatedAt: z.string().datetime(),
  generator: z.object({ tool: z.string(), version: z.string() }),
  units: z.literal('m').default('m'),
  bounds: Bounds,
  cells: z.object({ size: num.positive(), list: z.array(ManifestCell) }),
  lod: z.object({ distances: z.tuple([num, num]), hysteresis: num.nonnegative() }),
  lightmap: z
    .object({
      image: z.number().int().nonnegative(),
      channel: z.number().int().default(1),
      intensity: num.nonnegative().default(1),
      layout: z.string().default('rgb=indirect+sky,a=moonVisibility'),
    })
    .nullable()
    .default(null),
  lights: z.array(ManifestLight).default([]),
  ambient: z.object({ sky: hex, ground: hex, intensity: num.nonnegative() }),
  /**
   * The sky, if the level has one. Nullable and defaulted so a level baked
   * before the sky existed still parses at schemaVersion 1.
   *
   * `image` is an index into `images[]` -- the base and cloud maps are KTX2
   * images nothing references, read by bufferView exactly like the lightmap.
   */
  sky: z
    .object({
      base: z
        .object({ image: z.number().int().nonnegative(), intensity: num.nonnegative().default(1), rotationDeg: num.default(0) })
        .nullable()
        .default(null),
      clouds: z
        .object({
          image: z.number().int().nonnegative(),
          color: hex.default('#ffffff'),
          opacity: num.min(0).max(1).default(0.5),
          driftDegPerMin: num.default(3),
          repeat: num.positive().default(2),
          heightScale: num.positive().default(0.35),
        })
        .nullable()
        .default(null),
      stars: z
        .object({
          density: num.positive().default(1),
          brightness: num.nonnegative().default(1),
          twinkleSpeed: num.nonnegative().default(1),
          color: hex.default('#dfe6ff'),
          horizonFade: num.min(0).max(1).default(0.25),
        })
        .nullable()
        .default(null),
    })
    .nullable()
    .default(null),
  colliders: z.array(z.object({ placement: z.string(), shapes: z.array(ColliderShape) })).default([]),
  dynamic: z
    .array(
      z.object({
        node: z.string(),
        placement: z.string(),
        physics: z.object({ enabled: z.boolean(), massKg: num.nullable() }),
        destructionGroups: z.array(z.string()).default([]),
        colliders: z.array(ColliderShape).default([]),
      }),
    )
    .default([]),
  spawns: z
    .array(z.object({ name: z.string(), position: Vec3, yawDeg: num.default(0), team: z.string().nullable().default(null) }))
    .default([]),
});

export { emptyLevelGltf, emptyLevelExtras } from './emptyLevel.js';
