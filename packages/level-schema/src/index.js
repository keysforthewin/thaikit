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

/**
 * How a placement faces the camera. `yaw` turns about Y only and is what a
 * planted prop wants; `full` copies the camera's orientation the way a sprite
 * does. A billboarded placement can never be merged into a static cell -- it
 * turns every frame -- so this also decides which side of the bake it lands on.
 */
export const BillboardMode = z.enum(['none', 'yaw', 'full']);

/** The six cube-map faces, in the order three's CubeTextureLoader wants them. */
export const CUBE_FACES = ['px', 'nx', 'py', 'ny', 'pz', 'nz'];

/**
 * What every skybox exporter on earth calls those six faces.
 *
 * Nothing ships a `px.png`: a downloaded or generated skybox is six files named
 * `<whatever>_right`, `_left`, `_up`, `_down`, `_front`, `_back`, and the zip
 * import matches on that suffix alone so the prefix can be anything.
 *
 * `front` is **-Z** and `back` is **+Z** -- the OpenGL convention three itself
 * uses, where the default camera looks down -Z, so "front" is what is in front
 * of it. This was shipped the other way round first, on the assumption that the
 * naming came from Unity (+Z forward), and it put a visible seam down all four
 * vertical joins. It is not a matter of convention lore: `scripts/level/check-cubemap.mjs`
 * scores an assignment by the mean |difference| between the pixels either side
 * of all 12 shared cube edges, and on a real four-face pack the two orders
 * measured **1.19** and **14.70** against an in-face adjacent-column floor of
 * **2.24** -- the correct one is smoother than ordinary detail inside a face,
 * and the runner-up assignment was 7.57, so there is no ambiguity to split.
 */
export const CUBE_FACE_ALIASES = {
  right: 'px',
  left: 'nx',
  up: 'py',
  top: 'py',
  down: 'ny',
  bottom: 'ny',
  front: 'nz',
  back: 'pz',
};

/**
 * The face a filename inside a cube-map zip names, or null.
 *
 * Matches the LAST alias word in the stem, so `skybox_back.png`, `sky-back.jpg`
 * and `back.webp` all land on `nz` while a directory prefix (`Skybox/`, or the
 * `__MACOSX/` junk a Mac zip carries) is ignored.
 */
export function faceFromFilename(name) {
  const parts = String(name).split('/');
  const base = parts.pop() ?? '';
  // A zip made on a Mac carries an AppleDouble resource fork beside every file;
  // `__MACOSX/._sky_left.png` is not an image and must not claim `nx`.
  if (base.startsWith('._') || parts.includes('__MACOSX')) return null;
  const stem = base.replace(/\.[^.]+$/, '').toLowerCase();
  const m = stem.match(/(?:^|[^a-z])([a-z]+)$/);
  return (m && CUBE_FACE_ALIASES[m[1]]) ?? null;
}

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
      /** How far UP a dragged object may step onto a surface; it drops any distance. */
      climb: num.nonnegative().default(2),
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
 * A base dome (one ground-level panorama the bake resamples into a cubemap, or
 * six cube faces the bake resamples into one equirect), an ADDITIVE cloud dome that drifts, and a procedural star field
 * that twinkles. Like the ground it is a SETTING -- there is exactly one sky,
 * nothing about it can be selected or dragged, and its images live beside the
 * project as `levels/<id>/sky/<slot>.<ext>` rather than inside the level GLB,
 * which is re-uploaded whole on every save.
 *
 * Only the FILENAME rides in the level; the bake reads the sidecar off disk and
 * folds it into the shipped GLB as an unreferenced KTX2 image, the same
 * arrangement the lightmap uses.
 */
/**
 * How a `panoramic` base is completed into a whole sphere.
 *
 * A panorama is shot or generated at ground level, so it covers the full 360
 * of azimuth and the sky above the horizon -- and nothing usable below it. The
 * equirect projection crushes the nadir into a single row, so whatever is down
 * there was invented rather than observed, and resampling it onto a cube face
 * turns that one row into a full-resolution square underfoot. So the lower
 * hemisphere is SYNTHESISED: everything below `startDeg` fades into one flat
 * colour by `endDeg`.
 *
 * `color` is measured off the panorama's own horizon rows when the image is
 * uploaded, not chosen. A hand-picked grey is a disc of the wrong hue directly
 * underfoot, and against a night sky that reads as a lit hole rather than as
 * ground. It is RECORDED here rather than re-measured at bake time so the
 * editor's preview and the shipped cubemap cannot drift apart; null means the
 * bake measures it, which is the fallback for a panorama uploaded by hand.
 *
 * The fade runs 0..8 degrees, and both ends are deliberate. It starts AT the
 * horizon because a panoramic sky fills the top half of the dome and nothing
 * else; start it lower and a band of the image wraps under the player, which
 * for a panorama generated from the air is a city seen from above, upside down
 * beneath their feet. It ENDS quickly because the fade is a blend, not a cut --
 * at 25 degrees the mix is still two thirds image ten degrees down, and the
 * measured symptom was orange street lights glowing through the ground. Eight
 * degrees is wide enough that the joint is not a drawn line at the skyline and
 * narrow enough that nothing recognisable survives it.
 */
export const SkyNadir = z.object({
  /**
   * `fade` blends the panorama into `color` across the band below, which suits
   * a panorama whose lower rows are plausible ground.
   *
   * `cut` gives the cube NO FLOOR: everything below the horizon is `color`
   * outright, the `ny` face is one flat colour and the four side faces stop
   * dead at the skyline. That is the right mode for a backdrop that RINGS a
   * level rather than containing it -- the level's own ground plane is the
   * floor, and any city the panorama draws below the horizon is a second,
   * aerial city underneath the map. A fade only thins that city out; it is
   * still there, and the eight degrees nearest the horizon are not faded at
   * all, which is where the roads come through.
   */
  mode: z.enum(['fade', 'cut']).default('fade'),
  color: hex.nullable().default(null),
  /** Degrees below the horizon where the fade into `color` begins. Ignored when mode is 'cut'. */
  startDeg: num.min(0).max(90).default(0),
  /** Degrees below the horizon by which it is `color` alone. Ignored when mode is 'cut'. */
  endDeg: num.min(0).max(90).default(8),
});

/**
 * How wide a `cut` nadir's edge is, in degrees.
 *
 * A cut is a hard horizon, but a genuinely hard one is a stair-stepped line
 * across the skyline: the boundary is a latitude, and a cube face's ROW is not
 * an iso-elevation line, so the step lands on a different row along the face.
 * A third of a degree is about ten pixels on a 2048 face -- invisible as a
 * gradient, and enough to resolve the edge.
 */
export const NADIR_CUT_FEATHER_DEG = 0.35;

/**
 * The fade band a nadir setting actually means, in degrees below the horizon.
 *
 * `cut` is expressed as a hairline fade starting AT the horizon rather than as
 * a separate branch, so the editor's preview shader and the bake's resampler
 * run the same arithmetic and cannot drift. Both import this.
 */
export function resolveNadirFade(nadir = {}) {
  if (nadir?.mode === 'cut') return { startDeg: 0, endDeg: NADIR_CUT_FEATHER_DEG, cut: true };
  return { startDeg: nadir?.startDeg ?? 0, endDeg: nadir?.endDeg ?? 8, cut: false };
}

export const SkySettings = z.object({
  enabled: z.boolean().default(false),
  base: z
    .object({
      /**
       * `panoramic` is the 2D-image route: one equirectangular panorama, which
       * the bake resamples into a real compressed cubemap. There used to be a
       * second `equirect` mode that shipped the panorama AS an equirect, with
       * no mip chain and a collapsing pole; `panoramic` replaced it outright,
       * so the legacy value is folded back to `none` rather than rejected --
       * a level GLB written by the older schema must still open.
       */
      mode: z
        .preprocess((v) => (v === 'equirect' ? 'none' : v), z.enum(['none', 'cube', 'panoramic']))
        .default('none'),
      /** px/nx/py/ny/pz/nz -> filename, when mode is 'cube'. */
      faces: z.record(z.enum(CUBE_FACES), z.string()).nullable().default(null),
      /** The panorama slot's file, when mode is 'panoramic'. */
      panorama: z.string().nullable().default(null),
      /**
       * What the panorama's rows span, in degrees of elevation. A 2:1 image is
       * a whole sphere whose bottom half is invented; a 4:1 image is the upper
       * hemisphere alone. The uploader reads this off the aspect ratio, and it
       * is stored rather than re-derived so a hand-cropped panorama can say so.
       */
      elevation: z
        .object({ minDeg: num.min(-90).max(90).default(-90), maxDeg: num.min(-90).max(90).default(90) })
        .default({}),
      nadir: SkyNadir.default({}),
      intensity: num.nonnegative().default(1),
      /**
       * Mip selection bias for a CUBEMAP backdrop, in mip levels. Ignored by
       * the equirect path a `cube` sky bakes down to, which ships no chain to
       * bias.
       *
       * A sky authored at more px/degree than the screen has is minified, so
       * the GPU picks a fractional mip and trilinear blends in a
       * half-resolution level. That is correct filtering and visibly softer
       * than the display can show: measured against a 3x3 supersampled
       * reference at 60 degrees FOV, bias 0 scored an RMSE of 1.42 and -0.5
       * scored 0.52 -- the same as sampling level 0 directly, without giving up
       * the chain that keeps a wide FOV from crawling.
       */
      lodBias: num.min(-4).max(4).default(-0.5),
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
      /**
       * Image-based lighting: ambient specular (and, for dynamic objects,
       * ambient diffuse) prefiltered from the level's own sky.
       *
       * `size` is the probe FACE size, not the atlas. three's PMREM packs a
       * CubeUV atlas of 3*max(size,112) x 4*size at RGBA16F, so the cost is
       * 0.7 MB at 64, 1.5 at 128, 6 at 256 and 24 at 512. 256 is three's own
       * default and the level below which a roughness-0 surface -- a shop
       * window, wet asphalt, chrome -- shows a visibly blocky reflection.
       */
      ibl: z
        .object({
          enabled: z.boolean().default(true),
          intensity: num.nonnegative().default(1),
          size: z.union([z.literal(64), z.literal(128), z.literal(256), z.literal(512)]).default(256),
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
  /**
   * Editor-only grouping. A group joins placements, lights, spawns and other
   * groups so they can be dragged, turned and scaled as one; it has NO
   * transform of its own and no geometry, so nothing in the bake, the manifest
   * or the runtime reads it. `children` holds entity ids or other group ids,
   * and every id appears in at most one group.
   */
  groups: z
    .array(z.object({ id: z.string().min(1), name: z.string().default('group'), children: z.array(z.string()).default([]) }))
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
  billboard: BillboardMode.default('none'),
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
      /**
       * The scalar the bake divided out so bright bounce would survive an
       * 8-bit atlas. The runtime multiplies it back into `lightMapIntensity`.
       * Defaults to 1, so a level baked before this existed reads back exactly
       * as it did -- no schema-version bump.
       */
      range: num.positive().default(1),
      layout: z.string().default('rgb=indirect+sky,a=moonVisibility'),
    })
    .nullable()
    .default(null),
  lights: z.array(ManifestLight).default([]),
  ambient: z.object({ sky: hex, ground: hex, intensity: num.nonnegative() }),
  /**
   * Image-based lighting, if the level was baked with it.
   *
   * NULL means off, and null is the default -- so a level baked before IBL
   * existed parses unchanged and renders exactly as it did. Only a re-bake
   * opts a level in.
   */
  ibl: z
    .object({
      enabled: z.boolean().default(true),
      intensity: num.nonnegative().default(1),
      size: z.number().int().positive().default(256),
    })
    .nullable()
    .default(null),
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
        .object({
          image: z.number().int().nonnegative(),
          /**
           * What that KTX2 image IS. `equirect` is one 2:1 panorama sampled as
           * itself; `cube` is a single KTX2 with `faceCount: 6`, which
           * `KTX2Loader` hands back as a `CompressedCubeTexture`.
           *
           * The runtime does not need this -- it branches on the texture's own
           * `isCubeTexture` -- but a manifest that does not say which of the two
           * it wrote cannot be checked without transcoding it.
           */
          projection: z.enum(['equirect', 'cube']).default('equirect'),
          intensity: num.nonnegative().default(1),
          /** Mip bias, cubemap only. See `SkySettings.base.lodBias`. */
          lodBias: num.min(-4).max(4).default(-0.5),
          rotationDeg: num.default(0),
        })
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
        // Defaulted, so a level baked before billboarding still parses.
        billboard: BillboardMode.default('none'),
        // The placement's own shadow switches. Defaulted for levels baked
        // before they were carried; static placements have none here because
        // they are merged per cell and their shadows are the lightmap.
        castShadow: z.boolean().default(true),
        receiveShadow: z.boolean().default(true),
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
