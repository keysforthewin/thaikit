/**
 * The single source of truth for what a thaikit asset is.
 *
 * Imported by the Express server, the browser edit forms, and the host-side
 * generation skills. Anything that writes registry.json validates against this
 * first -- an invalid registry is never written to disk.
 */
import { z } from 'zod';

export const SCHEMA_VERSION = 3;

/** A stage that generation moves through. Every stage tracks its own state. */
export const StageState = z.enum([
  'pending',
  'running',
  'done',
  'failed',
  'quarantined',
]);

/** Drives poly and texture budgets. Derived from the prop's longest dimension. */
export const BudgetClass = z.enum([
  'small',
  'medium',
  'large',
  'hero',
  'hero2x',
  'hero4x',
  'hero8x',
]);

/** Where the mesh origin sits, so props drop into a level at the right height. */
export const Pivot = z.enum([
  'base-center',
  'center',
  'back-center',
  'top-center',
]);

export const Placement = z.enum([
  'floor',
  'wall',
  'ceiling',
  'surface',
  'vehicle-mounted',
]);

export const Collider = z.enum(['box', 'cylinder', 'convex', 'none']);

/**
 * What kind of thing this is, which is the single most consequential fact the
 * reconstruction needs.
 *
 * It selects the img2threejs profile and the gates that come with it. `character`
 * means a HUMAN figure and turns on the anatomy track, whose landmark gates are
 * face and pose specific. `animal` is a living figure too -- proportion, pose and
 * left/right reflection are identity-defining -- but it runs the generic profile,
 * because the human landmark extractor has nothing to say about a dog. `prop` is
 * everything else, and is what almost all of this kit is.
 */
export const Subject = z.enum(['prop', 'animal', 'character']);

const Dimensions = z.object({
  w: z.number().positive(),
  h: z.number().positive(),
  d: z.number().positive(),
});

const Prompts = z.object({
  /**
   * The object description ONLY. The plate scaffold (framing, backdrop, lighting,
   * negatives) is injected from prompts/style-profiles.json at image-generation
   * time -- never hand-written here, or assets drift apart visually.
   */
  image: z.string().min(1),
  /** The first authored image prompt. Never mutated; the critic diffs against it. */
  imageBase: z.string().min(1),
  /** Material and surface description, fed to Meshy as texture_prompt. */
  texture: z.string().default(''),
  styleProfileId: z.string().default('thai-street-photoreal-v1'),
});

const Scale = z.object({
  /** Intended real-world size in metres, authored by the asset-list skill. */
  declared: Dimensions,
  /** Measured back off the built model's bounding box, so drift is visible. */
  measured: Dimensions.nullable().default(null),
  primaryAxis: z.enum(['w', 'h', 'd']).default('h'),
  /** Fractional tolerance before the scale axis starts losing points. */
  tolerance: z.number().positive().default(0.1),
});

/**
 * The prop's single reference image, produced by thaikit-preview-image.
 *
 * One image, not a turnaround: the four-view sheet bought a little
 * reconstruction accuracy at the cost of a whole splitter, a rejection loop and
 * a 50x more expensive image model, and the single-image path is what the rest
 * of the pipeline -- Meshy, the critic, the browse grid -- actually needs.
 *
 * `prompt` is the FULL composed prompt, scaffold included, so the image can be
 * reproduced from the registry alone; `uploadedUrl` is the fal CDN copy, kept so
 * a regeneration does not re-upload bytes that are already there.
 */
const PreviewImage = z.object({
  file: z.string(),
  w: z.number().int().positive(),
  h: z.number().int().positive(),
  model: z.string().default(''),
  seed: z.number().int().nullable().default(null),
  prompt: z.string().default(''),
  uploadedUrl: z.string().nullable().default(null),
  createdAt: z.string().datetime().nullable().default(null),
});

/**
 * What the built model actually costs, measured by rendering it rather than by
 * parsing a file: a procedural factory has no triangle count until it runs.
 * Written by scripts/render-model.mjs, which walks the constructed scene.
 */
const ModelStats = z.object({
  triangles: z.number().int().nonnegative().nullable().default(null),
  vertices: z.number().int().nonnegative().nullable().default(null),
  meshes: z.number().int().nonnegative().nullable().default(null),
  materials: z.number().int().nonnegative().nullable().default(null),
  textures: z.number().int().nonnegative().nullable().default(null),
  /** One per mesh, and the number a low-end GPU actually feels. */
  drawCalls: z.number().int().nonnegative().nullable().default(null),
  /**
   * Distinct BufferGeometry instances in the built scene.
   *
   * Budgeted separately from draw calls because it is a different cost -- VRAM
   * and upload rather than CPU submissions -- and because the GAP between the
   * two is the only visible evidence that instancing happened: six draw calls
   * off four geometries means a repeated part became one InstancedMesh.
   */
  uniqueGeometries: z.number().int().nonnegative().nullable().default(null),
  /** Uncompressed VRAM footprint of generated canvas textures, if any. */
  gpuBytesEstimate: z.number().int().nonnegative().nullable().default(null),
  /** Size of the built JS module on disk. */
  fileBytes: z.number().int().nonnegative().nullable().default(null),
});

/**
 * What the model exposes to a game at runtime, read off
 * `root.userData.sculptRuntime` after the factory has been constructed.
 *
 * This is the payoff of asking for pivots and sockets: a prop whose lid opens
 * has a `lid-hinge` pivot at the real hinge axis, and a prop something attaches
 * to has a named socket. Recorded here so the browse UI can draw them and a
 * consumer can find them without loading the module.
 */
const Runtime = z.object({
  nodes: z.number().int().nonnegative().default(0),
  /** Named attachment points. */
  sockets: z.array(z.string()).default([]),
  /** Named pivots for parts that move. */
  pivots: z.array(z.string()).default([]),
  colliders: z.array(z.string()).default([]),
  destructionGroups: z.array(z.string()).default([]),
});

/**
 * The generated mesh img2threejs reconstructed FROM, and never ships.
 *
 * It is a structural and visual baseline: rendered through the same browser
 * route as the candidate so the comparison is like-for-like, and measured
 * band-by-band by mesh_reference_compare.py. Its topology and materials are
 * never copied into the factory. It stays in scratch/ -- this records where it
 * came from so a result is reproducible without keeping 8 MB per prop in git.
 */
const Reference = z.object({
  provider: z.string().default('fal:meshy/v7/image-to-3d'),
  glb: z.string().nullable().default(null),
  requestId: z.string().nullable().default(null),
  params: z.record(z.any()).default({}),
  seed: z.number().int().nullable().default(null),
  /**
   * Draco/meshopt. Generated meshes emit it often, and it decides whether the
   * pure-Python gates can read the file at all.
   */
  compressed: z.boolean().default(false),
  at: z.string().datetime().nullable().default(null),
});

/**
 * img2threejs's own review history, condensed to what the UI needs.
 *
 * thaikit does not score models any more and has no rubric of its own: the
 * skill's gates are the quality authority, and re-scoring their output here
 * would be a second opinion with no evidence behind it. `fidelity` is the
 * skill's native 0-1 agreement score; `score` is the same number out of 100,
 * carried only so the grid, the filters and the sort keep working.
 */
const Review = z.object({
  fidelity: z.number().min(0).max(1).nullable().default(null),
  score: z.number().min(0).max(100).nullable().default(null),
  threshold: z.number().min(0).max(100).default(85),
  passed: z.boolean().default(false),
  /** blockout, structural-pass, form-refinement, material-pass, ... */
  passesComplete: z.array(z.string()).default([]),
  /**
   * The five layers img2threejs scores separately -- silhouette/proportion,
   * component structure, form detail, material surface, lighting/camera.
   *
   * Kept beside the single fidelity number because the average hides which one
   * is carrying the model: 0.90 overall reads as finished, and 0.90 overall made
   * of 0.95 silhouette and 0.35 material is a prop whose shape is right and whose
   * surface has not been done yet.
   */
  layerScores: z.record(z.number()).default({}),
  /** Per-feature verdicts; shape is the skill's, not ours. */
  featureReviews: z.array(z.record(z.any())).default([]),
  corrections: z
    .object({
      perPass: z.number().int().nonnegative().default(0),
      total: z.number().int().nonnegative().default(0),
      maxTotal: z.number().int().positive().default(10),
    })
    .default({}),
  /** continue | refine-spec | refine-code | request-input | stop */
  decision: z.string().default(''),
  critique: z.string().default(''),
  comparisonImage: z.string().nullable().default(null),
  judgedAt: z.string().datetime().nullable().default(null),
});

/**
 * The prop itself: a procedural Three.js factory, not a GLB.
 *
 * `source` is the TypeScript the skill authored and `file` is that same code
 * bundled for the browser -- CommonJS with `three` left external, so the page
 * evaluating it injects its OWN three instance rather than loading a second
 * copy. `spec` is the sculpt spec it was generated from, which is the thing to
 * edit for a refinement; the generated code must never be the only copy of a
 * reconstruction decision.
 */
const Model = ModelStats.extend({
  status: StageState.default('pending'),
  /** Built browser module: assets/<id>/model.bundle.js */
  file: z.string().nullable().default(null),
  /** Authored TypeScript factory: assets/<id>/src/createObjectModel.ts */
  source: z.string().nullable().default(null),
  /** The sculpt spec behind it: assets/<id>/object-sculpt-spec.json */
  spec: z.string().nullable().default(null),
  /** img2threejs's checklist state, left in scratch/ for a resume. */
  state: z.string().nullable().default(null),
  /** Named export the bundle exposes. */
  export: z.string().default('createObjectModel'),
  /** Browse-grid thumbnail, rendered from the built module. */
  thumb: z.string().nullable().default(null),
  runtime: Runtime.default({}),
  reference: Reference.default({}),
  review: Review.default({}),
  quarantine: z
    .object({ reason: z.string(), at: z.string().datetime() })
    .nullable()
    .default(null),
});

export const AssetSchema = z.object({
  /** Slug. Immutable, unique, and the folder name under assets/. */
  id: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'id must be a lowercase kebab-case slug'),
  name: z.string().min(1),
  nameTh: z.string().default(''),
  description: z.string().default(''),
  category: z.string().min(1),
  tags: z.array(z.string()).default([]),

  prompts: Prompts,
  /** Prop, animal or person. Selects the reconstruction profile and its gates. */
  subject: Subject.default('prop'),
  budgetClass: BudgetClass,
  /**
   * Per-asset triangle target, overriding the budget class. It does two jobs: it
   * is what Meshy is asked for when generating the reference mesh, and it is
   * written into the spec's `performanceBudget.targetTriangles`, which picks the
   * tessellation tier for every primitive the factory builds. Null falls back to
   * the class budget.
   */
  targetTriangles: z.number().int().positive().nullable().default(null),
  /**
   * The other three axes of the scene budget, each overriding the budget class
   * the same way `targetTriangles` does, and each null to mean "use the class".
   *
   * They are separate axes, not one number in three costumes: draw calls are CPU
   * submissions per frame, materials are shader and render-state switches, and
   * unique geometries are VRAM plus upload. A prop can sit well inside its
   * triangle budget and still be the thing that costs a low-end GPU its frame,
   * which is what an oil drum built as seven meshes and three materials was.
   *
   * All four are written into the sculpt spec's `performanceBudget`, counted from
   * the spec by img2threejs under --strict-quality, and measured again off the
   * built scene by scripts/render-model.mjs.
   */
  maxDrawCalls: z.number().int().positive().nullable().default(null),
  maxMaterials: z.number().int().positive().nullable().default(null),
  maxUniqueGeometries: z.number().int().positive().nullable().default(null),
  scale: Scale,
  pivot: Pivot.default('base-center'),
  placement: z.array(Placement).default(['floor']),
  collider: Collider.default('box'),
  /**
   * The named assemblies this prop must break into, as DESIGN INTENT rather than
   * as a measurement -- "lid, body, base" for a crate whose lid comes off.
   *
   * This is the half of the runtime contract nothing could state before. A prop
   * either shipped breakable or it did not, and which way round was discovered by
   * reading `model.runtime.destructionGroups` afterwards. Declaring it up front
   * makes it something the build is asked for and something promotion can check:
   * a crate whose lid was supposed to come off and did not is now a failure, not
   * a surprise.
   *
   * Empty means not breakable, which is the right answer for most props and is
   * deliberately distinct from "nobody thought about it": a prop with an empty
   * list has been decided, and the model must then expose no groups either.
   */
  destructionGroups: z.array(z.string()).default([]),

  /** The two stages a prop moves through, in order. */
  status: z
    .object({
      image: StageState.default('pending'),
      model: StageState.default('pending'),
    })
    .default({ image: 'pending', model: 'pending' }),

  image: PreviewImage.nullable().default(null),

  /** The one build. There is no longer a second track to compare it against. */
  model: Model.default({}),

  license: z
    .object({
      spdx: z.string().default('MIT'),
      generatedBy: z
        .array(z.object({ role: z.string(), model: z.string(), vendor: z.string() }))
        .default([]),
      notice: z
        .string()
        .default('Fully synthetic. No third-party scanned or scraped geometry.'),
    })
    .default({}),

  /** Excluded from the built registry without being deleted. */
  hidden: z.boolean().default(false),
  notes: z.string().default(''),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const RegistrySchema = z.object({
  schemaVersion: z.literal(SCHEMA_VERSION),
  updatedAt: z.string().datetime(),
  license: z.string().default('MIT'),
  assets: z.array(AssetSchema).default([]),
});

export function emptyRegistry() {
  return {
    schemaVersion: SCHEMA_VERSION,
    updatedAt: new Date().toISOString(),
    license: 'MIT',
    assets: [],
  };
}
