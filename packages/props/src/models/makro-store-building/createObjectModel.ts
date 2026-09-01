import * as THREE from 'three';
// `three` is the ONLY import, and that is a hard thaikit constraint rather than tidiness. The
// bundle is CommonJS with a bare require('three') left external and the host page injects its OWN
// three instance; a second copy means this factory's Mesh is not the renderer's Mesh and nothing
// draws. The generator emits six `three/examples/jsm/*` imports (RoomEnvironment, EffectComposer,
// RenderPass, BokehPass, UnrealBloomPass, OrbitControls) for host-side presentation helpers
// thaikit's harness does not call; assemble.py strips them and their three helper functions.

export type ProceduralModelOptions = {
  /**
   * Where this prop's shipped files live, with a trailing slash.
   *
   * The maps are recorded as bare filenames because the bundle is EVALUATED
   * rather than imported: it has no import.meta and no currentScript, so it
   * cannot see its own URL. Every host derives this from the module URL.
   */
  baseUrl?: string;
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

type SculptMaterialSpec = Record<string, any>;

// bevelEnabled defaults to true on THREE.ExtrudeGeometry and rounds every
// corner — sharp/pointed profiles (blades, fork tines, spikes) need
// bevelEnabled: false plus lineTo()-only path segments near the tip, since a
// curve command cannot produce a true converging point.
function buildExtrudeShape(points: [number, number][], holes?: [number, number][][]): THREE.Shape {
  const shape = new THREE.Shape();
  if (points.length > 0) {
    shape.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i += 1) {
      shape.lineTo(points[i][0], points[i][1]);
    }
  }
  // Cutouts (e.g. an oval wire-cutter hole) as THREE.Path added to shape.holes —
  // dep-free boolean subtraction via the tessellator, no CSG library needed.
  for (const loop of holes ?? []) {
    if (loop.length < 3) continue;
    const path = new THREE.Path();
    path.moveTo(loop[0][0], loop[0][1]);
    for (let i = 1; i < loop.length; i += 1) path.lineTo(loop[i][0], loop[i][1]);
    path.closePath();
    shape.holes.push(path);
  }
  return shape;
}

// Build an N-gon oval loop (for hole authoring from a compact {cx,cy,rx,ry} descriptor).
function ovalLoop(cx: number, cy: number, rx: number, ry: number, seg = 24): [number, number][] {
  const loop: [number, number][] = [];
  for (let i = 0; i < seg; i += 1) {
    const a = (i / seg) * Math.PI * 2;
    loop.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]);
  }
  return loop;
}

function buildExtrudeGeometry(profile: { points: [number, number][]; depth: number; holes?: [number, number][][]; ovalHoles?: { cx: number; cy: number; rx: number; ry: number }[] }): THREE.ExtrudeGeometry {
  const holes = [...(profile.holes ?? []), ...((profile.ovalHoles ?? []).map((o) => ovalLoop(o.cx, o.cy, o.rx, o.ry)))];
  const shape = buildExtrudeShape(profile.points, holes);
  return new THREE.ExtrudeGeometry(shape, {
    depth: profile.depth,
    bevelEnabled: false,
    steps: 1,
  });
}

function hashString(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function readLayerNumber(value: unknown, keys: string[], fallback: number): number {
  if (typeof value === 'number') return value;
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    for (const key of keys) {
      if (typeof record[key] === 'number') return record[key] as number;
    }
  }
  return fallback;
}

function hexToRgb(hex: string): [number, number, number] {
  const normalized = /^#[0-9a-f]{3}$/i.test(hex)
    ? '#' + hex.slice(1).split('').map((part) => part + part).join('')
    : hex;
  const value = /^#[0-9a-f]{6}$/i.test(normalized) ? Number.parseInt(normalized.slice(1), 16) : 0x8a7a5f;
  return [clampAlbedoChannel((value >> 16) & 255), clampAlbedoChannel((value >> 8) & 255), clampAlbedoChannel(value & 255)];
}

function materialPalette(spec: SculptMaterialSpec): string[] {
  const palette = spec.colorVariation?.palette;
  if (Array.isArray(palette) && palette.length > 0) return palette.filter((value) => typeof value === 'string');
  const secondary = spec.albedo?.secondary;
  const colors = [spec.baseColor ?? spec.color ?? spec.albedo?.dominant, ...(Array.isArray(secondary) ? secondary : [])];
  return colors.filter((value): value is string => typeof value === 'string' && value.startsWith('#'));
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function clampAlbedoChannel(value: number): number {
  return Math.max(30, Math.min(240, Math.round(value)));
}

function clampPbrF0(value: number): number {
  return Math.max(0.02, Math.min(1, value));
}

function clampPbrIor(value: number): number {
  return Math.max(1, Math.min(2.5, value));
}

function clampPbrMetalness(value: number): number {
  return value >= 0.5 ? 1 : 0;
}

function clampedAlbedoColor(spec: SculptMaterialSpec): THREE.Color {
  const source = typeof spec.baseColor === 'string' ? spec.baseColor : '#8A7A5F';
  // setStyle with an explicit SRGBColorSpace, NOT the numeric constructor.
  //
  // `new THREE.Color(r, g, b)` treats its arguments as LINEAR working-space components,
  // while an authored `baseColor` hex is sRGB. Feeding one to the other skipped the
  // transfer function and lifted every dark albedo: #2e2a28, authored as a near-black
  // vinyl, rendered at roughly sRGB 0.46 — a mid grey. The error is largest exactly where
  // it matters most, because the transfer curve is steepest near black.
  return new THREE.Color().setStyle(source, THREE.SRGBColorSpace);
}

function smoothCurve(value: number): number {
  return value * value * (3 - 2 * value);
}

function periodicHash(x: number, y: number, seed: number, periodX: number, periodY: number): number {
  const wrappedX = ((x % periodX) + periodX) % periodX;
  const wrappedY = ((y % periodY) + periodY) % periodY;
  let value = Math.imul(wrappedX + seed * 17, 374761393) ^ Math.imul(wrappedY + seed * 31, 668265263);
  value = Math.imul(value ^ (value >>> 13), 1274126177);
  return ((value ^ (value >>> 16)) >>> 0) / 4294967295;
}

function periodicValueNoise(u: number, v: number, seed: number, periodX: number, periodY: number): number {
  const x = u * periodX;
  const y = v * periodY;
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const tx = smoothCurve(x - x0);
  const ty = smoothCurve(y - y0);
  const a = periodicHash(x0, y0, seed, periodX, periodY);
  const b = periodicHash(x0 + 1, y0, seed, periodX, periodY);
  const c = periodicHash(x0, y0 + 1, seed, periodX, periodY);
  const d = periodicHash(x0 + 1, y0 + 1, seed, periodX, periodY);
  return THREE.MathUtils.lerp(THREE.MathUtils.lerp(a, b, tx), THREE.MathUtils.lerp(c, d, tx), ty);
}

type SurfaceBand = {
  frequency: number;
  amplitude: number;
  stretchX: number;
  stretchY: number;
  ridge: boolean;
};

function surfaceBands(spec: SculptMaterialSpec): SurfaceBand[] {
  const source = Array.isArray(spec.surfaceFrequencyBands) ? spec.surfaceFrequencyBands : [];
  const parsed = source.flatMap((item: unknown) => {
    if (!item || typeof item !== 'object') return [];
    const band = item as Record<string, unknown>;
    const frequency = typeof band.frequency === 'number' ? band.frequency : 0;
    const amplitude = typeof band.amplitude === 'number' ? band.amplitude : 0;
    if (frequency <= 0 || amplitude <= 0) return [];
    const stretch = Array.isArray(band.stretch) ? band.stretch : [1, 1];
    const description = `${String(band.pattern ?? '')} ${String(band.role ?? '')}`.toLowerCase();
    return [{
      frequency,
      amplitude,
      stretchX: typeof stretch[0] === 'number' ? Math.max(0.1, stretch[0]) : 1,
      stretchY: typeof stretch[1] === 'number' ? Math.max(0.1, stretch[1]) : 1,
      ridge: /(ridge|groove|grain|fiber|striated|crack)/.test(description),
    }];
  });
  return parsed.length > 0 ? parsed : [
    { frequency: 2, amplitude: 0.42, stretchX: 1, stretchY: 1, ridge: false },
    { frequency: 12, amplitude: 0.22, stretchX: 1, stretchY: 1, ridge: false },
    { frequency: 56, amplitude: 0.08, stretchX: 1, stretchY: 1, ridge: false },
  ];
}

function sampleSurface(u: number, v: number, bands: SurfaceBand[], seed: number): number {
  let value = 0;
  let weight = 0;
  for (let index = 0; index < bands.length; index += 1) {
    const band = bands[index];
    const periodX = Math.max(1, Math.round(band.frequency * band.stretchX));
    const periodY = Math.max(1, Math.round(band.frequency * band.stretchY));
    let sample = periodicValueNoise(u, v, seed + index * 1013, periodX, periodY);
    if (band.ridge) sample = 1 - Math.abs(sample * 2 - 1);
    value += sample * band.amplitude;
    weight += band.amplitude;
  }
  return weight > 0 ? clamp01(value / weight) : 0.5;
}

function mixPalette(colors: [number, number, number][], value: number): [number, number, number] {
  if (colors.length === 1) return colors[0];
  const scaled = clamp01(value) * (colors.length - 1);
  const index = Math.min(colors.length - 2, Math.floor(scaled));
  const mix = scaled - index;
  const a = colors[index];
  const b = colors[index + 1];
  return [
    Math.round(THREE.MathUtils.lerp(a[0], b[0], mix)),
    Math.round(THREE.MathUtils.lerp(a[1], b[1], mix)),
    Math.round(THREE.MathUtils.lerp(a[2], b[2], mix)),
  ];
}

type ColorGradientStop = { offset: number; color: string };
type ColorGradientSpec = {
  type: 'linear' | 'radial';
  axis: [number, number];
  stops: ColorGradientStop[];
};

function parseRgba(value: string): [number, number, number] {
  const match = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(value);
  if (!match) return [138, 122, 95];
  return [clampAlbedoChannel(Number(match[1])), clampAlbedoChannel(Number(match[2])), clampAlbedoChannel(Number(match[3]))];
}

// Analytical per-pixel gradient sample. The extraction schema's colorGradient carries
// exact rgba(...) stop colors (see extract_part_color_recipe.py), so this samples the
// same trend directly in JS math rather than round-tripping through a Canvas 2D
// createLinearGradient/createRadialGradient object — same visual result, and it composes
// directly with the existing noise/height-correlated colorVariation blend below.
function sampleColorGradient(gradient: ColorGradientSpec, u: number, v: number): [number, number, number] {
  const stops = gradient.stops.length >= 2 ? gradient.stops : [{ offset: 0, color: 'rgba(138,122,95,1)' }, { offset: 1, color: 'rgba(138,122,95,1)' }];
  let t: number;
  if (gradient.type === 'radial') {
    const [cx, cy] = gradient.axis;
    const dx = u - cx;
    const dy = v - cy;
    const maxRadius = Math.max(0.001, Math.hypot(Math.max(cx, 1 - cx), Math.max(cy, 1 - cy)));
    t = clamp01(Math.hypot(dx, dy) / maxRadius);
  } else {
    const [ax, ay] = gradient.axis;
    const projection = (u - 0.5) * ax + (v - 0.5) * ay;
    const maxProjection = 0.5 * (Math.abs(ax) + Math.abs(ay)) || 0.5;
    t = clamp01(projection / maxProjection + 0.5);
  }
  const scaled = t * (stops.length - 1);
  const index = Math.min(stops.length - 2, Math.max(0, Math.floor(scaled)));
  const mix = scaled - index;
  const a = parseRgba(stops[index].color);
  const b = parseRgba(stops[index + 1].color);
  return [
    THREE.MathUtils.lerp(a[0], b[0], mix),
    THREE.MathUtils.lerp(a[1], b[1], mix),
    THREE.MathUtils.lerp(a[2], b[2], mix),
  ];
}

function writePixel(data: Uint8ClampedArray, offset: number, red: number, green: number, blue: number): void {
  data[offset] = Math.max(0, Math.min(255, Math.round(red)));
  data[offset + 1] = Math.max(0, Math.min(255, Math.round(green)));
  data[offset + 2] = Math.max(0, Math.min(255, Math.round(blue)));
  data[offset + 3] = 255;
}

function makeCanvas(size: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  return canvas;
}

function createMapTexture(
  canvas: HTMLCanvasElement,
  colorSpace: THREE.ColorSpace,
  spec: SculptMaterialSpec,
  options: ProceduralModelOptions,
): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(canvas);
  const projection = spec.textureProjection && typeof spec.textureProjection === 'object' ? spec.textureProjection : {};
  const repeat = Array.isArray(projection.repeat) ? projection.repeat : [2, 2];
  texture.colorSpace = colorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(
    typeof repeat[0] === 'number' ? repeat[0] : 2,
    typeof repeat[1] === 'number' ? repeat[1] : 2,
  );
  texture.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? projection.anisotropy ?? 8));
  texture.needsUpdate = true;
  return texture;
}

type ProceduralTextureSet = {
  albedo: THREE.Texture;
  roughness: THREE.Texture;
  height: THREE.Texture;
  normal: THREE.Texture;
  ao: THREE.Texture;
  source: 'reference-pixel-extraction' | 'procedural';
};

function referenceMapUrl(spec: SculptMaterialSpec, channel: string): string | null {
  const reference = spec.referencePbr;
  if (!reference || typeof reference !== 'object') return null;
  if (reference.usable === false) return null;
  const confidence = typeof reference.confidence === 'number'
    ? reference.confidence
    : (typeof reference.estimatedFidelity === 'number' ? reference.estimatedFidelity : 0);
  const threshold = typeof reference.targetThreshold === 'number' ? reference.targetThreshold : 0.7;
  if (confidence < threshold) return null;
  const maps = reference.maps;
  if (!maps || typeof maps !== 'object') return null;
  const map = (maps as Record<string, unknown>)[channel];
  if (!map || typeof map !== 'object') return null;
  const record = map as Record<string, unknown>;
  const url = typeof record.url === 'string' && record.url.trim() ? record.url : record.path;
  return typeof url === 'string' && url.trim() ? url : null;
}

function createLoadedMapTexture(
  url: string,
  colorSpace: THREE.ColorSpace,
  spec: SculptMaterialSpec,
  options: ProceduralModelOptions,
): THREE.Texture {
  const texture = new THREE.TextureLoader().load(url);
  const projection = spec.textureProjection && typeof spec.textureProjection === 'object' ? spec.textureProjection : {};
  const repeat = Array.isArray(projection.repeat) ? projection.repeat : [1, 1];
  texture.colorSpace = colorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(
    typeof repeat[0] === 'number' ? repeat[0] : 1,
    typeof repeat[1] === 'number' ? repeat[1] : 1,
  );
  texture.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? projection.anisotropy ?? 8));
  texture.needsUpdate = true;
  return texture;
}

function makeReferenceTextureSet(spec: SculptMaterialSpec, options: ProceduralModelOptions): ProceduralTextureSet | null {
  const albedo = referenceMapUrl(spec, 'albedo');
  const roughness = referenceMapUrl(spec, 'roughness');
  const height = referenceMapUrl(spec, 'height');
  const normal = referenceMapUrl(spec, 'normal');
  const ao = referenceMapUrl(spec, 'ao');
  if (!albedo || !roughness || !height || !normal || !ao) return null;
  return {
    albedo: createLoadedMapTexture(albedo, THREE.SRGBColorSpace, spec, options),
    roughness: createLoadedMapTexture(roughness, THREE.NoColorSpace, spec, options),
    height: createLoadedMapTexture(height, THREE.NoColorSpace, spec, options),
    normal: createLoadedMapTexture(normal, THREE.NoColorSpace, spec, options),
    ao: createLoadedMapTexture(ao, THREE.NoColorSpace, spec, options),
    source: 'reference-pixel-extraction',
  };
}

function makeProceduralTextureSet(
  id: string,
  spec: SculptMaterialSpec,
  options: ProceduralModelOptions,
): ProceduralTextureSet | null {
  if (typeof document === 'undefined') return null;
  const qualityFirst = (options.qualityPriority ?? 'reference-fidelity') === 'reference-fidelity';
  const requested = options.textureSize ?? spec.textureResolution;
  const requestedSize = typeof requested === 'number' && Number.isFinite(requested)
    ? requested
    : (qualityFirst ? 1024 : 512);
  const size = Math.max(256, Math.min(2048, 2 ** Math.round(Math.log2(requestedSize))));
  const canvases = {
    albedo: makeCanvas(size),
    roughness: makeCanvas(size),
    height: makeCanvas(size),
    normal: makeCanvas(size),
    ao: makeCanvas(size),
  };
  const contexts = {
    albedo: canvases.albedo.getContext('2d'),
    roughness: canvases.roughness.getContext('2d'),
    height: canvases.height.getContext('2d'),
    normal: canvases.normal.getContext('2d'),
    ao: canvases.ao.getContext('2d'),
  };
  if (!contexts.albedo || !contexts.roughness || !contexts.height || !contexts.normal || !contexts.ao) return null;
  const images = {
    albedo: contexts.albedo.createImageData(size, size),
    roughness: contexts.roughness.createImageData(size, size),
    height: contexts.height.createImageData(size, size),
    normal: contexts.normal.createImageData(size, size),
    ao: contexts.ao.createImageData(size, size),
  };
  const seed = hashString(id);
  const bands = surfaceBands(spec);
  const heightField = new Float32Array(size * size);
  const roughnessField = new Float32Array(size * size);
  const palette = materialPalette(spec);
  const fallback = typeof spec.baseColor === 'string' ? spec.baseColor : '#8A7A5F';
  const colors = (palette.length >= 2 ? palette : [fallback, '#6E614B', '#A08F70']).map(hexToRgb);
  const baseRoughness = clamp01(readLayerNumber(spec.roughness, ['base'], 0.76));
  const roughnessVariation = clamp01(readLayerNumber(spec.roughness, ['variation'], 0.18));
  const colorAmplitude = clamp01(readLayerNumber(spec.colorVariation, ['amplitude', 'variation'], 0.18));
  const heightCorrelation = clamp01(readLayerNumber(spec.colorVariation, ['heightCorrelation'], 0.3));
  const colorGradient: ColorGradientSpec | undefined = spec.colorGradient;
  for (let y = 0; y < size; y += 1) {
    const v = y / size;
    for (let x = 0; x < size; x += 1) {
      const u = x / size;
      const index = y * size + x;
      const height = sampleSurface(u, v, bands, seed + 101);
      const roughNoise = sampleSurface(u, v, bands, seed + 7001);
      const colorNoise = sampleSurface(u, v, bands, seed + 15013);
      heightField[index] = height;
      roughnessField[index] = clamp01(baseRoughness + (roughNoise - 0.5) * roughnessVariation * 2);
      let color: [number, number, number];
      if (colorGradient) {
        // Evidence-derived spatial gradient (Plan 1.3 Workstream C) takes priority
        // over the noise-based palette blend below — it is a measured trend, not a guess.
        color = sampleColorGradient(colorGradient, u, v);
      } else {
        const paletteValue = clamp01(
          0.5 + (colorNoise - 0.5) * colorAmplitude * 2 + (height - 0.5) * heightCorrelation
        );
        color = mixPalette(colors, paletteValue);
      }
      writePixel(images.albedo.data, index * 4, color[0], color[1], color[2]);
    }
  }
  const normalStrength = Math.max(0.05, readLayerNumber(spec.normal, ['strength', 'amplitude'], 0.35));
  const aoStrength = clamp01(readLayerNumber(spec.ambientOcclusion, ['cavityStrength', 'strength'], 0.35));
  for (let y = 0; y < size; y += 1) {
    const up = ((y - 1 + size) % size) * size;
    const down = ((y + 1) % size) * size;
    for (let x = 0; x < size; x += 1) {
      const left = (x - 1 + size) % size;
      const right = (x + 1) % size;
      const index = y * size + x;
      const center = heightField[index];
      const dx = (heightField[y * size + right] - heightField[y * size + left]) * normalStrength * 6;
      const dy = (heightField[down + x] - heightField[up + x]) * normalStrength * 6;
      const inverseLength = 1 / Math.sqrt(dx * dx + dy * dy + 1);
      const normalX = -dx * inverseLength;
      const normalY = -dy * inverseLength;
      const normalZ = inverseLength;
      const neighborAverage = (
        heightField[y * size + left] + heightField[y * size + right]
        + heightField[up + x] + heightField[down + x]
      ) * 0.25;
      const cavity = Math.max(0, neighborAverage - center);
      const ao = clamp01(1 - aoStrength * (cavity * 12 + (1 - center) * 0.16));
      const offset = index * 4;
      const heightByte = center * 255;
      const roughnessByte = roughnessField[index] * 255;
      writePixel(images.height.data, offset, heightByte, heightByte, heightByte);
      writePixel(images.roughness.data, offset, roughnessByte, roughnessByte, roughnessByte);
      writePixel(
        images.normal.data, offset,
        (normalX * 0.5 + 0.5) * 255,
        (normalY * 0.5 + 0.5) * 255,
        (normalZ * 0.5 + 0.5) * 255,
      );
      writePixel(images.ao.data, offset, ao * 255, ao * 255, ao * 255);
    }
  }
  contexts.albedo.putImageData(images.albedo, 0, 0);
  contexts.roughness.putImageData(images.roughness, 0, 0);
  contexts.height.putImageData(images.height, 0, 0);
  contexts.normal.putImageData(images.normal, 0, 0);
  contexts.ao.putImageData(images.ao, 0, 0);
  return {
    albedo: createMapTexture(canvases.albedo, THREE.SRGBColorSpace, spec, options),
    roughness: createMapTexture(canvases.roughness, THREE.NoColorSpace, spec, options),
    height: createMapTexture(canvases.height, THREE.NoColorSpace, spec, options),
    normal: createMapTexture(canvases.normal, THREE.NoColorSpace, spec, options),
    ao: createMapTexture(canvases.ao, THREE.NoColorSpace, spec, options),
    source: 'procedural',
  };
}

function createSculptMaterial(id: string, spec: SculptMaterialSpec, options: ProceduralModelOptions, denseComponent = false): THREE.MeshPhysicalMaterial {
  // A material that declares -- with evidence -- that its subject carries no texture
  // detail gets NO texture set. Synthesising one anyway is not a harmless default: the
  // branch below then forces color to white and roughness to 1 and reads both from the
  // generated maps, so the authored albedo and the reference-derived roughness are both
  // discarded, and the model gains mottling the reference does not have. Measured on the
  // tuxedo cat, whose black fur rendered as speckled grey-and-white from a palette that
  // only ever described two flat regions.
  const textureless = (spec.textureless as { declared?: boolean } | undefined)?.declared === true;
  const textures = textureless
    ? null
    : makeReferenceTextureSet(spec, options) ?? makeProceduralTextureSet(id, spec, options);
  const material = new THREE.MeshPhysicalMaterial({
    color: textures ? 0xffffff : clampedAlbedoColor(spec),
    roughness: textures ? 1 : clamp01(readLayerNumber(spec.roughness, ['base'], 0.76)),
    metalness: clampPbrMetalness(readLayerNumber(spec.metalness, ['base'], 0.0)),
    clearcoat: clamp01(readLayerNumber(spec.clearcoat, ['base', 'amount'], 0)),
    clearcoatRoughness: clamp01(readLayerNumber(spec.clearcoatRoughness, ['base'], 0.25)),
    transmission: clamp01(readLayerNumber(spec.transmission, ['base', 'amount'], 0)),
    ior: clampPbrIor(readLayerNumber(spec.ior, ['base', 'value'], 1.5)),
    thickness: Math.max(0, readLayerNumber(spec.thickness, ['base', 'amount'], 0)),
    attenuationDistance: Math.max(0.001, readLayerNumber(spec.attenuationDistance, ['base', 'value'], Infinity)),
    attenuationColor: new THREE.Color(typeof spec.attenuationColor === 'string' ? spec.attenuationColor : '#ffffff'),
    sheen: clamp01(readLayerNumber(spec.sheen, ['base', 'amount'], 0)),
    sheenColor: new THREE.Color(typeof spec.sheenColor === 'string' ? spec.sheenColor : '#ffffff'),
    sheenRoughness: clamp01(readLayerNumber(spec.sheenRoughness, ['base'], 1.0)),
    iridescence: clamp01(readLayerNumber(spec.iridescence, ['base', 'amount'], 0)),
    iridescenceIOR: clampPbrIor(readLayerNumber(spec.iridescenceIOR, ['base', 'value'], 1.3)),
    anisotropy: clamp01(readLayerNumber(spec.anisotropy, ['base', 'amount'], 0)),
    anisotropyRotation: readLayerNumber(spec.anisotropy, ['rotation'], 0),
    specularIntensity: clampPbrF0(readLayerNumber(spec.specularF0 ?? spec.f0 ?? spec.specularIntensity, ['base', 'value'], 1.0)),
    specularColor: new THREE.Color(typeof spec.specularColor === 'string' ? spec.specularColor : '#ffffff'),
    emissive: new THREE.Color(typeof spec.emissive === 'string' ? spec.emissive : '#000000'),
    emissiveIntensity: Math.max(0, readLayerNumber(spec.emissiveIntensity, ['base'], 1.0)),
    opacity: clamp01(readLayerNumber(spec.opacity, ['base'], 1)),
    transparent: readLayerNumber(spec.transmission, ['base', 'amount'], 0) > 0 || readLayerNumber(spec.opacity, ['base'], 1) < 1,
    alphaTest: Math.max(0, readLayerNumber(spec.alpha, ['cutoff', 'alphaTest'], 0)),
    wireframe: options.wireframe ?? false,
    side: spec.doubleSided === true ? THREE.DoubleSide : THREE.FrontSide,
    flatShading: spec.flatShading === true,
  });
  if (textures) {
    material.map = textures.albedo;
    material.roughnessMap = textures.roughness;
    material.normalMap = textures.normal;
    material.normalScale.setScalar(Math.max(0.05, readLayerNumber(spec.normal, ['strength', 'amplitude'], 0.35)));
    material.aoMap = textures.ao;
    material.aoMap.channel = 0;
    material.aoMapIntensity = readLayerNumber(spec.ambientOcclusion, ['cavityStrength', 'strength'], 0.35);
    const denseMesh = denseComponent || spec.denseMesh === true || spec.geometryDensity === 'dense' || spec.topologyClass === 'dense';
    const bumpScale = Math.max(0, readLayerNumber(spec.bump, ['amplitude', 'strength'], 0));
    const effectiveBumpScale = denseMesh ? Math.max(0.05, bumpScale) : bumpScale;
    if (effectiveBumpScale > 0) {
      material.bumpMap = textures.height;
      material.bumpScale = effectiveBumpScale;
    }
    const displacementScale = Math.max(0, readLayerNumber(spec.displacement, ['amplitude', 'strength'], 0));
    const effectiveDisplacementScale = denseMesh ? Math.max(0.005, displacementScale) : displacementScale;
    if (effectiveDisplacementScale > 0) {
      material.displacementMap = textures.height;
      material.displacementScale = effectiveDisplacementScale;
      material.displacementBias = -effectiveDisplacementScale * 0.5;
    }
  }
  material.envMapIntensity = readLayerNumber(spec, ['envMapIntensity'], 0.8);
  material.userData.sculptMaterial = spec;
  material.userData.proceduralMapsIndependent = true;
  material.userData.pbrConstraints = { albedoRange: [30, 240], binaryMetalness: true, f0Range: [0.02, 1], iorRange: [1, 2.5] };
  material.userData.pbrTextureSource = textures?.source ?? 'flat-fallback';
  material.userData.referencePbr = spec.referencePbr ?? null;
  material.userData.referenceMaterialId = spec.referenceMaterialId ?? spec.materialReference?.profileId ?? null;
  material.userData.materialEvidence = spec.materialEvidence ?? null;
  material.userData.validationViews = spec.materialReference?.validationViews ?? [];
  material.needsUpdate = true;
  return material;
}

type AttachmentEndpoint = {
  start: THREE.Vector3;
  midpoint: THREE.Vector3;
  quaternion: THREE.Quaternion;
  length: number;
  baseRadius: number;
  endRadius: number;
};

function readVector3(value: unknown, fallback: [number, number, number]): THREE.Vector3 {
  if (Array.isArray(value) && value.length === 3 && value.every((item) => typeof item === 'number')) {
    return new THREE.Vector3(value[0], value[1], value[2]);
  }
  return new THREE.Vector3(fallback[0], fallback[1], fallback[2]);
}

function readNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function makeAttachmentEndpoint(attachment: unknown): AttachmentEndpoint | null {
  if (!attachment || typeof attachment !== 'object') return null;
  const record = attachment as Record<string, unknown>;
  const start = readVector3(record.localStart, [0, 0, 0]);
  const end = readVector3(record.localEnd, [0, 1, 0]);
  const delta = end.clone().sub(start);
  const length = delta.length();
  if (length <= 0.0001) return null;
  const direction = delta.clone().normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
  const baseRadius = Math.max(0.005, readNumber(record.baseRadius, 0.06));
  const endRadius = Math.max(0.003, readNumber(record.endRadius, baseRadius * 0.55));
  return {
    start,
    midpoint: delta.multiplyScalar(0.5),
    quaternion,
    length,
    baseRadius,
    endRadius,
  };
}

// Generated from ObjectSculptSpec target: Makro Store Building
// Sculpt build pass: optimization-pass
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createMakroStoreBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Makro Store Building";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["blue-cladding"] = createSculptMaterial(
    "blue-cladding",
    {"id": "blue-cladding", "name": "Blue painted profiled steel cladding", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#3D5C82", "color": "#3D5C82", "roughness": {"base": 0.55, "variation": 0.06, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned EXACTLY 0.680 for aluminium, glass-tinted and the first concrete crop -- three unrelated surfaces -- which is the extractor's regression default, not a measurement. Taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/blue-cladding_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#3D5C82", "secondary": ["#355378", "#2B486C", "#1C385D"], "samplingNotes": "Sampled from the blue upper front cladding above the banner (material-crops/blue-cladding.png, 180x70 px, PBR confidence 0.757). The dominant #3D5C82 is taken rather than the darker palette entries, which are rib self-shading rather than albedo."}, "localOverrides": [], "finishClass": "painted-metal", "clearcoat": {"base": 0, "variation": 0}, "clearcoatRoughness": {"base": 0.3, "variation": 0}, "transmission": {"base": 0, "variation": 0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.8, "anisotropy": {"base": 1}, "finishStyle": "satin exterior paint over trapezoidal profiled steel sheet", "evidenceRefs": ["view-full", "region-blue-cladding"], "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on material-crops/blue-cladding.png (180x70 px on the front upper cladding, above the banner) measures heightP90Gradient 0.14707 and normalStrength 0.329 -- but that signal is the 0.25 m RIB PITCH, which this spec authors as geometry in the shell plan profile and in the deferred blue-trim system. Between ribs the sheet is flat rolled steel with no relief left to texture.", "valueRange 0.1899 over the crop is the rib shading gradient, not albedo variation: the measured palette #355378 / #3D5C82 / #1C385D / #2B486C is one hue at four lightnesses, which is a lit corrugation, not a pattern."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a coloured building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "materialFamily": "plastic", "materialSubtype": "generic-polymer", "materialFinish": "satin", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "method": "family-subtype-finish", "confidence": 0.757}, "materialEvidence": {"crop": {"path": "material-crops/blue-cladding.png"}, "hypothesis": {"family": "plastic", "subtype": "generic-polymer", "finish": "satin", "confidence": 0.757, "source": "vision"}}},
    options
  );
  materialMap["sign-blue"] = createSculptMaterial(
    "sign-blue",
    {"id": "sign-blue", "name": "Printed banner vinyl on the sign tray", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#2F4C77", "color": "#2F4C77", "roughness": {"base": 0.5, "variation": 0.04, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned EXACTLY 0.680 for aluminium, glass-tinted and the first concrete crop -- three unrelated surfaces -- which is the extractor's regression default, not a measurement. Taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/sign-blue_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#2F4C77", "secondary": ["#34547D", "#23386C", "#3F5E86"], "samplingNotes": "Sampled from the banner field to the RIGHT of the wordmark so no red pixel enters the sample (material-crops/sign-blue.png, 150x60 px, PBR confidence 0.751). Authored one step deeper than the cladding beside it, which the plate shows and the measured valueRange corroborates."}, "localOverrides": [], "finishClass": "painted-metal", "clearcoat": {"base": 0, "variation": 0}, "clearcoatRoughness": {"base": 0.3, "variation": 0}, "transmission": {"base": 0, "variation": 0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.8, "anisotropy": {"base": 1}, "finishStyle": "flat printed banner vinyl stretched on a shallow steel tray", "evidenceRefs": ["view-full", "region-sign-blue"], "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on material-crops/sign-blue.png (150x60 px on the banner field, clear of the wordmark) measures valueRange 0.1595, the LOWEST of the four blue/white surfaces on this plate: the banner is flatter than the cladding beside it, which is exactly the observable difference that makes it read as a separate applied panel.", "Printed vinyl has no relief at prop distance; its identity is the flat field plus the wordmark, and the wordmark is a generated canvas assigned AFTER material construction, which the textureless declaration does not affect."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a coloured building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "materialFamily": "plastic", "materialSubtype": "generic-polymer", "materialFinish": "matte", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "method": "family-subtype-finish", "confidence": 0.751}, "materialEvidence": {"crop": {"path": "material-crops/sign-blue.png"}, "hypothesis": {"family": "plastic", "subtype": "generic-polymer", "finish": "matte", "confidence": 0.751, "source": "vision"}}},
    options
  );
  materialMap["white-cladding"] = createSculptMaterial(
    "white-cladding",
    {"id": "white-cladding", "name": "White profiled steel cladding, side and rear", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#C2C5C9", "color": "#C2C5C9", "roughness": {"base": 0.62, "variation": 0.06, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned EXACTLY 0.680 for aluminium, glass-tinted and the first concrete crop -- three unrelated surfaces -- which is the extractor's regression default, not a measurement. Taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/white-cladding_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#C2C5C9", "secondary": ["#B8BBC0", "#B0B3B8", "#A6A9AE"], "samplingNotes": "Sampled from the +X side wall between the shutter and the rear corner (material-crops/white-cladding.png, 140x180 px, PBR confidence 0.719). Authored LIGHTER than the measured dominant #B8BBC0 because every crop pixel carries rib self-shading; the flat-sheet albedo is the upper end of that distribution, not its mean."}, "localOverrides": [{"id": "cladding-grime", "kind": "stain", "region": "the top 0.8 m of every wall, below the coping drip", "colorShift": "#A9ACAF", "roughnessDelta": 0.04, "coverage": 0.16, "confidence": 0.6, "evidenceRef": "region-side-wall", "notes": "Run-off streaks; carried as vertex darkening in hand refinement, not as a texture, so textureless holds."}], "finishClass": "painted-metal", "clearcoat": {"base": 0, "variation": 0}, "clearcoatRoughness": {"base": 0.3, "variation": 0}, "transmission": {"base": 0, "variation": 0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.8, "anisotropy": {"base": 1}, "finishStyle": "mill-white satin paint over trapezoidal profiled steel sheet", "evidenceRefs": ["view-full", "region-white-cladding"], "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on material-crops/white-cladding.png (140x180 px of clean side wall clear of the shutter) measures heightP90Gradient 0.18566 -- the HIGHEST on the plate. That is the rib relief, authored as geometry in the shell's castellated plan profile, not as a texture.", "Between ribs the sheet is flat: the extractor's own palette is a single neutral at four lightnesses (#B8BBC0 / #B0B3B8 / #A6A9AE / #8F9296), which is corrugation shading rather than surface pattern."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a coloured building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "materialFamily": "plastic", "materialSubtype": "generic-polymer", "materialFinish": "satin", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "method": "family-subtype-finish", "confidence": 0.719}, "materialEvidence": {"crop": {"path": "material-crops/white-cladding.png"}, "hypothesis": {"family": "plastic", "subtype": "generic-polymer", "finish": "satin", "confidence": 0.719, "source": "vision"}}},
    options
  );
  materialMap["glass-tinted"] = createSculptMaterial(
    "glass-tinted",
    {"id": "glass-tinted", "name": "Tinted shopfront glazing", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#8E9A99", "color": "#8E9A99", "roughness": {"base": 0.09, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned EXACTLY 0.680 for aluminium, glass-tinted and the first concrete crop -- three unrelated surfaces -- which is the extractor's regression default, not a measurement. Taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/glass-tinted_roughness.png"}, "metalness": 0.05, "albedo": {"dominant": "#8E9A99", "secondary": ["#A6A8A8", "#9EA2A4", "#B7BDC0"], "samplingNotes": "AUTHORED, not sampled, and deliberately so. The crop measures a light neutral around #A6A8A8 -- but every one of those pixels is the shop INTERIOR seen through the pane, and this prop is an exterior shell with nothing behind the glass. Sampling it would reproduce a photograph of a room that does not exist in the model. The authored grey-green is the pane's own tint. NOTE this plate's glazing reads LIGHT, not dark: the sibling AIS building had to be darkened from its render and this one must not be, or the shopfront turns back into a hole."}, "localOverrides": [{"id": "glazing-specular-lobe", "kind": "gloss", "region": "the whole pane", "roughnessDelta": -0.02, "coverage": 1.0, "confidence": 0.85, "evidenceRef": "region-glazing", "notes": "The tight specular lobe is the pane's identity and is carried by roughness 0.09, not by a map."}], "finishClass": "glass", "clearcoat": {"base": 0, "variation": 0}, "clearcoatRoughness": {"base": 0.3, "variation": 0}, "transmission": {"base": 0, "variation": 0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.8, "anisotropy": {"base": 1}, "finishStyle": "tinted architectural glass, authored mostly opaque", "evidenceRefs": ["view-full", "region-glass-tinted"], "textureless": {"declared": true, "evidence": ["The pane is flat float glass: heightP90Gradient 0.01314 on the crop is the lowest relief signal measured on this plate, alongside aluminium (0.01368) and concrete (0.01441).", "Glass identity is the specular lobe and the tint, both carried by scalars. A procedural texture set here would force color to white and roughness to 1 and destroy exactly the two properties that make it read as glass."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a coloured building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "materialFamily": "glass", "materialSubtype": "clear", "materialFinish": "polished", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "method": "family-subtype-finish", "confidence": 0.845}, "materialEvidence": {"crop": {"path": "material-crops/glass-tinted.png"}, "hypothesis": {"family": "glass", "subtype": "clear", "finish": "polished", "confidence": 0.845, "source": "vision"}}, "metalnessNote": "Reduced from the bare-metal prior. The review harness has no environment map, and a metalness near 1 with nothing to reflect renders near-black. The identity here is the value and the specular lobe width, both of which survive at a reduced metalness.", "opacity": 0.92, "transparent": true, "opacityNote": "0.92 rather than a true transparent pane. This prop is an exterior shell with NO interior geometry, so a transparent pane would show the inside of the far wall or the backdrop and read as a hole punched in the facade. At 0.92 it reads as glass with a hint of depth and nothing behind it is legible.", "needsEnvironment": true},
    options
  );
  materialMap["aluminium"] = createSculptMaterial(
    "aluminium",
    {"id": "aluminium", "name": "Mill-finish aluminium shopfront framing", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#B4B7B8", "color": "#B4B7B8", "roughness": {"base": 0.38, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned EXACTLY 0.680 for aluminium, glass-tinted and the first concrete crop -- three unrelated surfaces -- which is the extractor's regression default, not a measurement. Taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/aluminium_roughness.png"}, "metalness": 0.35, "albedo": {"dominant": "#B4B7B8", "secondary": ["#ACAFB0", "#A1A3A3", "#929595"], "samplingNotes": "Sampled from a vertical mullion at the right of the shopfront (material-crops/aluminium.png, 44x110 px, PBR confidence 0.722). CROP CAVEAT recorded rather than hidden: mullions are about 3 px wide on this plate so the crop unavoidably straddles glass either side, which pulls the sample toward the glazing. The authored value is therefore biased back up toward the mullion highlights. A FIRST crop for this material sat on the canopy's concrete top edge instead of a mullion and was discarded after visual verification against material-crops/_overlay.png."}, "localOverrides": [], "finishClass": "metal", "clearcoat": {"base": 0, "variation": 0}, "clearcoatRoughness": {"base": 0.3, "variation": 0}, "transmission": {"base": 0, "variation": 0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.8, "anisotropy": {"base": 1}, "finishStyle": "mill-finish extruded aluminium, lightly oxidised", "evidenceRefs": ["view-full", "region-aluminium"], "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on material-crops/aluminium.png (44x110 px straddling a mullion) measures heightP90Gradient 0.01368 and normalStrength 0.172: an extruded section is drawn, not textured, and its relief IS the mullion box in the framing system.", "Mill finish is a directional satin at metal-shop scale and flat at prop distance: a 0.07 m mullion on an 8 m facade is under two texels from across a street."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a coloured building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "materialFamily": "metal", "materialSubtype": "aluminium", "materialFinish": "brushed", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "method": "family-subtype-finish", "confidence": 0.722}, "materialEvidence": {"crop": {"path": "material-crops/aluminium.png"}, "hypothesis": {"family": "metal", "subtype": "aluminium", "finish": "brushed", "confidence": 0.722, "source": "vision"}}, "metalnessNote": "Reduced from the bare-metal prior. The review harness has no environment map, and a metalness near 1 with nothing to reflect renders near-black. The identity here is the value and the specular lobe width, both of which survive at a reduced metalness."},
    options
  );
  materialMap["galvanised"] = createSculptMaterial(
    "galvanised",
    {"id": "galvanised", "name": "Galvanised steel plant and roller shutter", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#9AA0A4", "color": "#9AA0A4", "roughness": {"base": 0.55, "variation": 0.08, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned EXACTLY 0.680 for aluminium, glass-tinted and the first concrete crop -- three unrelated surfaces -- which is the extractor's regression default, not a measurement. Taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/galvanised_roughness.png"}, "metalness": 0.3, "albedo": {"dominant": "#9AA0A4", "secondary": ["#858A90", "#7C8187", "#63676D"], "samplingNotes": "Sampled from the roller shutter slats on the +X side wall (material-crops/galvanised.png, 60x90 px, PBR confidence 0.722). Authored lighter than the measured #858A90 because the shutter sits in a shaded reveal on the plate while the roof plant that shares this material is in full key."}, "localOverrides": [], "finishClass": "metal", "clearcoat": {"base": 0, "variation": 0}, "clearcoatRoughness": {"base": 0.3, "variation": 0}, "transmission": {"base": 0, "variation": 0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.8, "anisotropy": {"base": 1}, "finishStyle": "hot-dip galvanised steel with visible spangle", "evidenceRefs": ["view-full", "region-galvanised"], "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on material-crops/galvanised.png (60x90 px on the roller shutter) measures heightP90Gradient 0.10174 -- that is the horizontal SLAT rhythm of the shutter, which is authored as the shutter box's own form, not spangle.", "Spangle is a centimetre-scale crystal pattern; on a 1.8 m shutter and 1.1 m condenser bodies seen at prop distance it is below one texel and reads as the value alone."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a coloured building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "materialFamily": "metal", "materialSubtype": "steel", "materialFinish": "galvanized", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "method": "family-subtype-finish", "confidence": 0.722}, "materialEvidence": {"crop": {"path": "material-crops/galvanised.png"}, "hypothesis": {"family": "metal", "subtype": "steel", "finish": "galvanized", "confidence": 0.722, "source": "vision"}}, "metalnessNote": "Reduced from the bare-metal prior. The review harness has no environment map, and a metalness near 1 with nothing to reflect renders near-black. The identity here is the value and the specular lobe width, both of which survive at a reduced metalness."},
    options
  );
  materialMap["concrete-grey"] = createSculptMaterial(
    "concrete-grey",
    {"id": "concrete-grey", "name": "Precast concrete deck, kerb and canopy top", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#BFC0C2", "color": "#BFC0C2", "roughness": {"base": 0.92, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned EXACTLY 0.680 for aluminium, glass-tinted and the first concrete crop -- three unrelated surfaces -- which is the extractor's regression default, not a measurement. Taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/concrete-grey_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#BFC0C2", "secondary": ["#C3C4C7", "#B8BABE", "#C8C9CC"], "samplingNotes": "Sampled from the open roof deck between the condenser cluster and the duct run (material-crops/concrete-grey.png, 110x38 px, PBR confidence 0.716). The FIRST crop for this material landed on the condenser bodies instead of the deck and returned a palette containing #354F71 and #263B58 -- the dark blues of the louvred grilles. It was caught by rendering the crop boxes back over the plate, discarded, and re-sampled. This is the exact failure the material contract warns about."}, "localOverrides": [], "finishClass": "concrete", "clearcoat": {"base": 0, "variation": 0}, "clearcoatRoughness": {"base": 0.3, "variation": 0}, "transmission": {"base": 0, "variation": 0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.8, "anisotropy": {"base": 1}, "finishStyle": "float-finished precast concrete, lightly weathered", "evidenceRefs": ["view-full", "region-concrete-grey"], "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on material-crops/concrete-grey.png (110x38 px of open roof deck between the condenser cluster and the duct run) measures valueRange 0.0829 and heightP90Gradient 0.04697: a flat slab with panel joints, and the joints are the only relief.", "Float-finished concrete has a sub-millimetre tooth. On a 5.7 m deck seen from a first-floor eye height it is far below one texel."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a coloured building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "materialFamily": "concrete", "materialSubtype": "precast", "materialFinish": "matte", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "method": "family-subtype-finish", "confidence": 0.716}, "materialEvidence": {"crop": {"path": "material-crops/concrete-grey.png"}, "hypothesis": {"family": "concrete", "subtype": "precast", "finish": "matte", "confidence": 0.716, "source": "vision"}}},
    options
  );
  materialMap["trim-white"] = createSculptMaterial(
    "trim-white",
    {"id": "trim-white", "name": "White flashing: parapet coping, corner trim, shutter surround", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#D8DAD9", "color": "#D8DAD9", "roughness": {"base": 0.7, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned EXACTLY 0.680 for aluminium, glass-tinted and the first concrete crop -- three unrelated surfaces -- which is the extractor's regression default, not a measurement. Taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/trim-white_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#D8DAD9", "secondary": ["#D2D4D3", "#E0E2E1", "#C9CBCA"], "samplingNotes": "AUTHORED from visual comparison rather than a dedicated PBR crop: the coping band is roughly 4 px deep on the plate, too thin for a crop that would not be dominated by its own edges. Placed one step lighter than white-cladding, which is the relationship the plate shows at every parapet edge. Confidence 0.70, the lowest of the eight, and recorded as such."}, "localOverrides": [], "finishClass": "painted-metal", "clearcoat": {"base": 0, "variation": 0}, "clearcoatRoughness": {"base": 0.3, "variation": 0}, "transmission": {"base": 0, "variation": 0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.8, "anisotropy": {"base": 1}, "finishStyle": "folded white powder-coated flashing, unribbed", "evidenceRefs": ["view-full", "region-trim-white"], "textureless": {"declared": true, "evidence": ["Read off crops/roof-plant.png and crops/side-wall.png: the coping cap is a distinctly LIGHTER and, decisively, an UNRIBBED band above the corrugated wall it caps. The absence of rib relief is what separates it from white-cladding, and unribbed flat sheet has nothing to texture.", "Folded flashing is a plain painted surface; its identity in this prop is the continuous light cap LINE around the whole parapet, which is geometry and colour, not micro-relief."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a coloured building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "materialFamily": "plastic", "materialSubtype": "generic-polymer", "materialFinish": "satin", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "method": "family-subtype-finish", "confidence": 0.7}, "materialEvidence": {"crop": {"path": "material-crops/trim-white.png"}, "hypothesis": {"family": "plastic", "subtype": "generic-polymer", "finish": "satin", "confidence": 0.7, "source": "vision"}}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_building_shell_0 = makeAttachmentEndpoint(null);
  const node_building_shell_0 = new THREE.Group();
  node_building_shell_0.name = "Side and rear wall shell with parapet__pivot";
  node_building_shell_0.scale.set(1, 1, 1);
  if (endpoint_building_shell_0) {
    node_building_shell_0.position.copy(endpoint_building_shell_0.start);
    node_building_shell_0.rotation.set(-1.5707963267948966, 0.0, 0.0);
  } else {
    node_building_shell_0.position.set(0.0, 0.02, 0.0);
    node_building_shell_0.rotation.set(-1.5707963267948966, 0.0, 0.0);
  }
  node_building_shell_0.userData.sculptComponent = {"id": "building-shell", "name": "Side and rear wall shell with parapet", "level": "macro", "role": "body", "importance": 0.95, "confidence": 0.86, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A U-shaped footprint ring extruded 4.12 m upward: the -X, rear and +X walls at 0.20 m thickness, open on +Z where the facade wall takes over. Hollow by construction, which is the whole point -- this is an exterior shell and there is no interior to draw. The parapet is the same extrusion continuing past the roof deck at 3.50 m rather than a separate proud element, because the plate shows one unbroken corrugated surface from kerb to coping.", "geometryDescriptor": {"topologyIntent": "U-plan ring, 0.20 m walls, extruded to y=4.12. The OUTER edge is castellated at 0.25 m pitch and 0.03 m relief to author the vertical rib profile of the cladding as real geometry.", "wallThickness": 0.2, "ribProfile": {"pitch": 0.25, "relief": 0.03, "crownFraction": 0.44, "runs": ["-X wall", "rear wall", "+X wall"], "evidence": "heightP90Gradient 0.18566 on material-crops/white-cladding.png, the highest relief signal measured anywhere on this plate. Bought with triangles (about 1400 of 16000), which are the axis with headroom, and costing ZERO draw calls, geometries and materials -- the three axes that are at or near their ceiling.", "innerEdgeNote": "Only the OUTER loop is ribbed. The inner loop stays a plain rectangle: it faces a cavity nobody sees, and ribbing it would triple the cap triangulation for nothing."}, "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.012, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "238 outer profile points (castellated) plus 4 inner, one extrusion step: about 1400 triangles including both caps.", "profile2D": {"points": [[-3.9, -2.7], [-3.93, -2.4312], [-3.93, -2.323], [-3.9, -2.2542], [-3.93, -2.1853], [-3.93, -2.0772], [-3.9, -2.0083], [-3.93, -1.9395], [-3.93, -1.8313], [-3.9, -1.7625], [-3.93, -1.6937], [-3.93, -1.5855], [-3.9, -1.5167], [-3.93, -1.4478], [-3.93, -1.3397], [-3.9, -1.2708], [-3.93, -1.202], [-3.93, -1.0938], [-3.9, -1.025], [-3.93, -0.9562], [-3.93, -0.848], [-3.9, -0.7792], [-3.93, -0.7103], [-3.93, -0.6022], [-3.9, -0.5333], [-3.93, -0.4645], [-3.93, -0.3563], [-3.9, -0.2875], [-3.93, -0.2187], [-3.93, -0.1105], [-3.9, -0.0417], [-3.93, 0.0272], [-3.93, 0.1353], [-3.9, 0.2042], [-3.93, 0.273], [-3.93, 0.3812], [-3.9, 0.45], [-3.93, 0.5188], [-3.93, 0.627], [-3.9, 0.6958], [-3.93, 0.7647], [-3.93, 0.8728], [-3.9, 0.9417], [-3.93, 1.0105], [-3.93, 1.1187], [-3.9, 1.1875], [-3.93, 1.2563], [-3.93, 1.3645], [-3.9, 1.4333], [-3.93, 1.5022], [-3.93, 1.6103], [-3.9, 1.6792], [-3.93, 1.748], [-3.93, 1.8562], [-3.9, 1.925], [-3.93, 1.9938], [-3.93, 2.102], [-3.9, 2.1708], [-3.93, 2.2397], [-3.93, 2.3478], [-3.9, 2.4167], [-3.93, 2.4855], [-3.93, 2.5937], [-3.9, 2.6625], [-3.93, 2.7313], [-3.93, 2.8395], [-3.9, 2.9083], [-3.93, 2.9772], [-3.93, 3.0853], [-3.9, 3.1542], [-3.93, 3.223], [-3.93, 3.3312], [-3.9, 3.4], [-3.8295, 3.43], [-3.7188, 3.43], [-3.6484, 3.4], [-3.5779, 3.43], [-3.4672, 3.43], [-3.3968, 3.4], [-3.3263, 3.43], [-3.2156, 3.43], [-3.1452, 3.4], [-3.0747, 3.43], [-2.964, 3.43], [-2.8935, 3.4], [-2.8231, 3.43], [-2.7124, 3.43], [-2.6419, 3.4], [-2.5715, 3.43], [-2.4608, 3.43], [-2.3903, 3.4], [-2.3199, 3.43], [-2.2092, 3.43], [-2.1387, 3.4], [-2.0683, 3.43], [-1.9575, 3.43], [-1.8871, 3.4], [-1.8166, 3.43], [-1.7059, 3.43], [-1.6355, 3.4], [-1.565, 3.43], [-1.4543, 3.43], [-1.3839, 3.4], [-1.3134, 3.43], [-1.2027, 3.43], [-1.1323, 3.4], [-1.0618, 3.43], [-0.9511, 3.43], [-0.8806, 3.4], [-0.8102, 3.43], [-0.6995, 3.43], [-0.629, 3.4], [-0.5586, 3.43], [-0.4479, 3.43], [-0.3774, 3.4], [-0.307, 3.43], [-0.1963, 3.43], [-0.1258, 3.4], [-0.0554, 3.43], [0.0554, 3.43], [0.1258, 3.4], [0.1963, 3.43], [0.307, 3.43], [0.3774, 3.4], [0.4479, 3.43], [0.5586, 3.43], [0.629, 3.4], [0.6995, 3.43], [0.8102, 3.43], [0.8806, 3.4], [0.9511, 3.43], [1.0618, 3.43], [1.1323, 3.4], [1.2027, 3.43], [1.3134, 3.43], [1.3839, 3.4], [1.4543, 3.43], [1.565, 3.43], [1.6355, 3.4], [1.7059, 3.43], [1.8166, 3.43], [1.8871, 3.4], [1.9575, 3.43], [2.0683, 3.43], [2.1387, 3.4], [2.2092, 3.43], [2.3199, 3.43], [2.3903, 3.4], [2.4608, 3.43], [2.5715, 3.43], [2.6419, 3.4], [2.7124, 3.43], [2.8231, 3.43], [2.8935, 3.4], [2.964, 3.43], [3.0747, 3.43], [3.1452, 3.4], [3.2156, 3.43], [3.3263, 3.43], [3.3968, 3.4], [3.4672, 3.43], [3.5779, 3.43], [3.6484, 3.4], [3.7188, 3.43], [3.8295, 3.43], [3.9, 3.4], [3.93, 3.3312], [3.93, 3.223], [3.9, 3.1542], [3.93, 3.0853], [3.93, 2.9772], [3.9, 2.9083], [3.93, 2.8395], [3.93, 2.7313], [3.9, 2.6625], [3.93, 2.5937], [3.93, 2.4855], [3.9, 2.4167], [3.93, 2.3478], [3.93, 2.2397], [3.9, 2.1708], [3.93, 2.102], [3.93, 1.9938], [3.9, 1.925], [3.93, 1.8562], [3.93, 1.748], [3.9, 1.6792], [3.93, 1.6103], [3.93, 1.5022], [3.9, 1.4333], [3.93, 1.3645], [3.93, 1.2563], [3.9, 1.1875], [3.93, 1.1187], [3.93, 1.0105], [3.9, 0.9417], [3.93, 0.8728], [3.93, 0.7647], [3.9, 0.6958], [3.93, 0.627], [3.93, 0.5188], [3.9, 0.45], [3.93, 0.3812], [3.93, 0.273], [3.9, 0.2042], [3.93, 0.1353], [3.93, 0.0272], [3.9, -0.0417], [3.93, -0.1105], [3.93, -0.2187], [3.9, -0.2875], [3.93, -0.3563], [3.93, -0.4645], [3.9, -0.5333], [3.93, -0.6022], [3.93, -0.7103], [3.9, -0.7792], [3.93, -0.848], [3.93, -0.9562], [3.9, -1.025], [3.93, -1.0938], [3.93, -1.202], [3.9, -1.2708], [3.93, -1.3397], [3.93, -1.4478], [3.9, -1.5167], [3.93, -1.5855], [3.93, -1.6937], [3.9, -1.7625], [3.93, -1.8313], [3.93, -1.9395], [3.9, -2.0083], [3.93, -2.0772], [3.93, -2.1853], [3.9, -2.2542], [3.93, -2.323], [3.93, -2.4312], [3.9, -2.7], [3.6999999999999997, -2.7], [3.6999999999999997, 3.1999999999999997], [-3.6999999999999997, 3.1999999999999997], [-3.6999999999999997, -2.7]], "depth": 4.1}, "shapeSpaceNote": "Profile is authored in (sx, sy) = (worldX, -worldZ). The component carries rotationEuler [-pi/2, 0, 0], mapping the shape plane onto the ground plane and the extrusion axis onto world +Y. Extrude components are NOT unit-scaled by the generator, so these are the building's actual footprint coordinates in metres.", "zFightingNote": "The U's open ends stop at sy=-2.70, which is worldZ=+2.70 -- the facade wall's BACK face -- not at +2.90 where its front face is. Two surfaces in the same plane facing the SAME direction tear into interleaved triangles as the camera moves; this joint is instead a butt of OPPOSED faces, which is how solids are meant to meet.", "copingHandoffNote": "The walls stop at y=4.12 and the parapet COPING owns 4.04..4.20. The wall's top face is BURIED inside the coping span and only the coping's own top is exposed, so there is no pair of coincident +Y faces. Overall height is set by the roof plant at 4.60, not by the parapet.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the roof deck rendered as a 1 m box. The extrude components are the exact opposite and MUST KEEP scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8 x 4.6 x 7.", "rotationKeyNote": "The generator reads transform.ROTATION, not transform.rotationEuler. A first draft carried -pi/2 in rotationEuler alone and rotation [0,0,0] beside it; the generated factory wrote rotation.set(0,0,0) and extruded the U-plan along +Z instead of +Y, so the footprint became an elevation and 2.50 m of wall hung below ground. Both keys are now written and kept equal."}, "parent": null, "attachment": null, "dimensions": {"width": 7.8, "height": 4.1, "depth": 6.3, "units": "meters", "confidence": 0.86}, "transform": {"position": [0, 0.02, 0], "rotationEuler": [-1.5707963267948966, 0, 0], "scale": [1, 1, 1], "rotation": [-1.5707963267948966, 0, 0]}, "material": "white-cladding", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "rib-relief", "kind": "relief", "confidence": 0.85, "notes": "0.25 m pitch trapezoidal ribs on all three outer wall faces.", "evidenceRef": "region-white-cladding"}, {"id": "grime-streaks", "kind": "stain", "confidence": 0.6, "notes": "Vertical run-off streaking below the coping drip, heaviest at the corners.", "evidenceRef": "region-side-wall"}], "actionProfile": {"collider": {"type": "box", "offset": [0, 2.3, 0], "scale": [8.0, 4.6, 7.0], "notes": "The declared asset collider is `box`. ONE convex box proxy spanning the whole declared module, ROOT-relative: x -4.00..4.00, y 0..4.60, z -3.50..3.50. Nothing else carries a collider -- a player collides with the building, and the canopy and roof plant sit inside this box's span. promote-model.mjs requires at least one collider on a prop whose declared collider is not `none`. The offset's z was -0.45 for five passes, which is exactly the PRE-REFINE shell centre (-3.40 + 2.50) / 2: authored before the depth refine moved the facade front to +2.90 and never re-registered, so the proxy stood 0.45 m proud of the rear wall and stopped 0.95 m short of the canopy. Same root cause as the hand tail's placement drift, and invisible for the same reason -- a collider renders nothing, so no comparison sheet could show it."}, "colliderNote": "The declared asset collider is `box`. The shell carries it as the whole prop's physics proxy in its own local frame; nothing else needs one, since a convex box around the building is what a player collides with and the canopy and plant sit inside its span."}, "colorMaterialRecipe": {"baseMaterial": "white-cladding", "dominantColor": "#C2C5C9", "secondary": ["#B8BBC0", "#A9ACAF"], "recipe": "Flat satin white over ribbed sheet; the value variation across the wall is rib self-shading from the castellated profile, not albedo, and no gradient is authored into the colour.", "confidence": 0.72, "dominantAlbedo": "rgba(194, 197, 201, 1.0)", "secondaryAlbedo": "rgba(184, 187, 192, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.72}, "surfaceDetail": {"macroRoughness": 0.58, "microRoughness": 0.42, "bumpAmplitude": 0.0, "locality": "Profiled steel sheet: rib crowns catch the key and read glossier than the valleys, which is a geometric effect of the castellation rather than a roughness variation.", "note": "bumpAmplitude is 0 by design, not by omission. Every relief on this prop is carried as GEOMETRY -- the shell's rib castellation in its plan profile, the blue-trim parapet ribs, the condenser louvres and the shutter slats -- and all eight materials are declared textureless with evidence, so a bump or normal channel here would both contradict that declaration and re-introduce the procedural texture synthesis those declarations exist to skip. What this block carries is roughness LOCALITY, which is real and map-free."}};
  node_building_shell_0.userData.actionProfile = {"collider": {"type": "box", "offset": [0, 2.3, 0], "scale": [8.0, 4.6, 7.0], "notes": "The declared asset collider is `box`. ONE convex box proxy spanning the whole declared module, ROOT-relative: x -4.00..4.00, y 0..4.60, z -3.50..3.50. Nothing else carries a collider -- a player collides with the building, and the canopy and roof plant sit inside this box's span. promote-model.mjs requires at least one collider on a prop whose declared collider is not `none`. The offset's z was -0.45 for five passes, which is exactly the PRE-REFINE shell centre (-3.40 + 2.50) / 2: authored before the depth refine moved the facade front to +2.90 and never re-registered, so the proxy stood 0.45 m proud of the rear wall and stopped 0.95 m short of the canopy. Same root cause as the hand tail's placement drift, and invisible for the same reason -- a collider renders nothing, so no comparison sheet could show it."}, "colliderNote": "The declared asset collider is `box`. The shell carries it as the whole prop's physics proxy in its own local frame; nothing else needs one, since a convex box around the building is what a player collides with and the canopy and plant sit inside its span."};
  (nodes["root"] ?? root).add(node_building_shell_0);
  nodes["building-shell"] = node_building_shell_0;
  const mesh_building_shell_0Geometry = endpoint_building_shell_0
    ? new THREE.CylinderGeometry(endpoint_building_shell_0.endRadius, endpoint_building_shell_0.baseRadius, endpoint_building_shell_0.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-3.9, -2.7], [-3.93, -2.4312], [-3.93, -2.323], [-3.9, -2.2542], [-3.93, -2.1853], [-3.93, -2.0772], [-3.9, -2.0083], [-3.93, -1.9395], [-3.93, -1.8313], [-3.9, -1.7625], [-3.93, -1.6937], [-3.93, -1.5855], [-3.9, -1.5167], [-3.93, -1.4478], [-3.93, -1.3397], [-3.9, -1.2708], [-3.93, -1.202], [-3.93, -1.0938], [-3.9, -1.025], [-3.93, -0.9562], [-3.93, -0.848], [-3.9, -0.7792], [-3.93, -0.7103], [-3.93, -0.6022], [-3.9, -0.5333], [-3.93, -0.4645], [-3.93, -0.3563], [-3.9, -0.2875], [-3.93, -0.2187], [-3.93, -0.1105], [-3.9, -0.0417], [-3.93, 0.0272], [-3.93, 0.1353], [-3.9, 0.2042], [-3.93, 0.273], [-3.93, 0.3812], [-3.9, 0.45], [-3.93, 0.5188], [-3.93, 0.627], [-3.9, 0.6958], [-3.93, 0.7647], [-3.93, 0.8728], [-3.9, 0.9417], [-3.93, 1.0105], [-3.93, 1.1187], [-3.9, 1.1875], [-3.93, 1.2563], [-3.93, 1.3645], [-3.9, 1.4333], [-3.93, 1.5022], [-3.93, 1.6103], [-3.9, 1.6792], [-3.93, 1.748], [-3.93, 1.8562], [-3.9, 1.925], [-3.93, 1.9938], [-3.93, 2.102], [-3.9, 2.1708], [-3.93, 2.2397], [-3.93, 2.3478], [-3.9, 2.4167], [-3.93, 2.4855], [-3.93, 2.5937], [-3.9, 2.6625], [-3.93, 2.7313], [-3.93, 2.8395], [-3.9, 2.9083], [-3.93, 2.9772], [-3.93, 3.0853], [-3.9, 3.1542], [-3.93, 3.223], [-3.93, 3.3312], [-3.9, 3.4], [-3.8295, 3.43], [-3.7188, 3.43], [-3.6484, 3.4], [-3.5779, 3.43], [-3.4672, 3.43], [-3.3968, 3.4], [-3.3263, 3.43], [-3.2156, 3.43], [-3.1452, 3.4], [-3.0747, 3.43], [-2.964, 3.43], [-2.8935, 3.4], [-2.8231, 3.43], [-2.7124, 3.43], [-2.6419, 3.4], [-2.5715, 3.43], [-2.4608, 3.43], [-2.3903, 3.4], [-2.3199, 3.43], [-2.2092, 3.43], [-2.1387, 3.4], [-2.0683, 3.43], [-1.9575, 3.43], [-1.8871, 3.4], [-1.8166, 3.43], [-1.7059, 3.43], [-1.6355, 3.4], [-1.565, 3.43], [-1.4543, 3.43], [-1.3839, 3.4], [-1.3134, 3.43], [-1.2027, 3.43], [-1.1323, 3.4], [-1.0618, 3.43], [-0.9511, 3.43], [-0.8806, 3.4], [-0.8102, 3.43], [-0.6995, 3.43], [-0.629, 3.4], [-0.5586, 3.43], [-0.4479, 3.43], [-0.3774, 3.4], [-0.307, 3.43], [-0.1963, 3.43], [-0.1258, 3.4], [-0.0554, 3.43], [0.0554, 3.43], [0.1258, 3.4], [0.1963, 3.43], [0.307, 3.43], [0.3774, 3.4], [0.4479, 3.43], [0.5586, 3.43], [0.629, 3.4], [0.6995, 3.43], [0.8102, 3.43], [0.8806, 3.4], [0.9511, 3.43], [1.0618, 3.43], [1.1323, 3.4], [1.2027, 3.43], [1.3134, 3.43], [1.3839, 3.4], [1.4543, 3.43], [1.565, 3.43], [1.6355, 3.4], [1.7059, 3.43], [1.8166, 3.43], [1.8871, 3.4], [1.9575, 3.43], [2.0683, 3.43], [2.1387, 3.4], [2.2092, 3.43], [2.3199, 3.43], [2.3903, 3.4], [2.4608, 3.43], [2.5715, 3.43], [2.6419, 3.4], [2.7124, 3.43], [2.8231, 3.43], [2.8935, 3.4], [2.964, 3.43], [3.0747, 3.43], [3.1452, 3.4], [3.2156, 3.43], [3.3263, 3.43], [3.3968, 3.4], [3.4672, 3.43], [3.5779, 3.43], [3.6484, 3.4], [3.7188, 3.43], [3.8295, 3.43], [3.9, 3.4], [3.93, 3.3312], [3.93, 3.223], [3.9, 3.1542], [3.93, 3.0853], [3.93, 2.9772], [3.9, 2.9083], [3.93, 2.8395], [3.93, 2.7313], [3.9, 2.6625], [3.93, 2.5937], [3.93, 2.4855], [3.9, 2.4167], [3.93, 2.3478], [3.93, 2.2397], [3.9, 2.1708], [3.93, 2.102], [3.93, 1.9938], [3.9, 1.925], [3.93, 1.8562], [3.93, 1.748], [3.9, 1.6792], [3.93, 1.6103], [3.93, 1.5022], [3.9, 1.4333], [3.93, 1.3645], [3.93, 1.2563], [3.9, 1.1875], [3.93, 1.1187], [3.93, 1.0105], [3.9, 0.9417], [3.93, 0.8728], [3.93, 0.7647], [3.9, 0.6958], [3.93, 0.627], [3.93, 0.5188], [3.9, 0.45], [3.93, 0.3812], [3.93, 0.273], [3.9, 0.2042], [3.93, 0.1353], [3.93, 0.0272], [3.9, -0.0417], [3.93, -0.1105], [3.93, -0.2187], [3.9, -0.2875], [3.93, -0.3563], [3.93, -0.4645], [3.9, -0.5333], [3.93, -0.6022], [3.93, -0.7103], [3.9, -0.7792], [3.93, -0.848], [3.93, -0.9562], [3.9, -1.025], [3.93, -1.0938], [3.93, -1.202], [3.9, -1.2708], [3.93, -1.3397], [3.93, -1.4478], [3.9, -1.5167], [3.93, -1.5855], [3.93, -1.6937], [3.9, -1.7625], [3.93, -1.8313], [3.93, -1.9395], [3.9, -2.0083], [3.93, -2.0772], [3.93, -2.1853], [3.9, -2.2542], [3.93, -2.323], [3.93, -2.4312], [3.9, -2.7], [3.6999999999999997, -2.7], [3.6999999999999997, 3.1999999999999997], [-3.6999999999999997, 3.1999999999999997], [-3.6999999999999997, -2.7]], "depth": 4.1});
  if (!endpoint_building_shell_0) {
    mesh_building_shell_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_building_shell_0 = new THREE.Mesh(
    mesh_building_shell_0Geometry,
    materialMap["white-cladding"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_building_shell_0.name = "Side and rear wall shell with parapet";
  if (endpoint_building_shell_0) {
    mesh_building_shell_0.position.copy(endpoint_building_shell_0.midpoint);
    mesh_building_shell_0.quaternion.copy(endpoint_building_shell_0.quaternion);
  }
  mesh_building_shell_0.castShadow = options.castShadow ?? true;
  mesh_building_shell_0.receiveShadow = options.receiveShadow ?? true;
  mesh_building_shell_0.userData.sculptComponent = node_building_shell_0.userData.sculptComponent;
  node_building_shell_0.add(mesh_building_shell_0);
  meshes["building-shell"] = mesh_building_shell_0;
  colliders["building-shell"] = {"type": "box", "offset": [0, 2.3, 0], "scale": [8.0, 4.6, 7.0], "notes": "The declared asset collider is `box`. ONE convex box proxy spanning the whole declared module, ROOT-relative: x -4.00..4.00, y 0..4.60, z -3.50..3.50. Nothing else carries a collider -- a player collides with the building, and the canopy and roof plant sit inside this box's span. promote-model.mjs requires at least one collider on a prop whose declared collider is not `none`. The offset's z was -0.45 for five passes, which is exactly the PRE-REFINE shell centre (-3.40 + 2.50) / 2: authored before the depth refine moved the facade front to +2.90 and never re-registered, so the proxy stood 0.45 m proud of the rear wall and stopped 0.95 m short of the canopy. Same root cause as the hand tail's placement drift, and invisible for the same reason -- a collider renders nothing, so no comparison sheet could show it."};

  const endpoint_facade_wall_1 = makeAttachmentEndpoint(null);
  const node_facade_wall_1 = new THREE.Group();
  node_facade_wall_1.name = "Blue front elevation with shopfront opening__pivot";
  node_facade_wall_1.scale.set(1, 1, 1);
  if (endpoint_facade_wall_1) {
    node_facade_wall_1.position.copy(endpoint_facade_wall_1.start);
    node_facade_wall_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_facade_wall_1.position.set(0.0, 0.02, 2.7);
    node_facade_wall_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_facade_wall_1.userData.sculptComponent = {"id": "facade-wall", "name": "Blue front elevation with shopfront opening", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.9, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A Shape WITH A HOLE, extruded 0.20 m in +Z. This is the one part of the shell a plan extrusion cannot express, because the shopfront opening is a vertical void: the front wall is therefore authored in elevation instead of in plan. It costs one draw call and one geometry and it buys the blue-front / white-return split that is the prop's second identity feature.", "geometryDescriptor": {"topologyIntent": "Front elevation in the XY plane extruded 0.20 m along +Z: an outer rectangle 7.80 x 4.12 m with one rectangular hole for the shopfront. Piers of 0.53 m survive at each end, which the plate shows as blue cladding returning past the glazing.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four outline points and four hole points, one extrusion step: about 120 triangles including the reveal faces.", "profile2D": {"points": [[-3.9, 0], [3.9, 0], [3.9, 4.1], [-3.9, 4.1]], "holes": [[[-3.37, 0.14], [3.37, 0.14], [3.37, 2.4], [-3.37, 2.4]]], "depth": 0.2}, "shapeSpaceNote": "Authored in (sx, sy) = (worldX, worldY) with no rotation; the extrusion axis is world +Z, spanning z=+2.50 to z=+2.70.", "ribNote": "The vertical rib relief the plate shows on this blue face is NOT authored here: a shape extruded along Z from an XY elevation cannot express ribs whose relief is along Z. It was the one deliberately deferred item in the blockout, held for the prop's spare draw call until a render showed the front reading too flat beside the ribbed sides. The structural-pass sheet was that render, and the `blue-trim` system now carries it: 30 ribs at the shell's own 0.25 m pitch across the parapet band (y=3.70..4.04), standing 0.025 m proud of this wall's FRONT face at z=+2.90. It spends the twelfth and last draw call and nothing else -- it reuses the shared unit box and this component's own `blue-cladding` material, so unique geometries stay at 8 and materials at 8. The same cluster carries the two front corner returns, which the plate shows as blue cladding wrapping both corners rather than the white flashing the blockout invented for them.", "zFightingNote": "The opening's four reveal faces are the classic z-fighting trap: a frame whose hole is EXACTLY the wall's opening puts four coincident co-facing faces in the model. Nothing in this prop meets those reveals. The glazing pane is inset to z=+2.545..2.585 and OVERSIZED to +-3.44 x 0.09..2.49, so it passes BEHIND the reveal rather than meeting it; the framing cluster overlaps the opening edge by 0.06 m on all four sides and stands proud to z=+2.73, clear of the wall's own front face at +2.70.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the roof deck rendered as a 1 m box. The extrude components are the exact opposite and MUST KEEP scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8 x 4.6 x 7.", "frontFaceNote": "This wall's front face is at z=+2.90, not +2.70: the depth refine moved the facade forward 0.20 m. Every hand-authored instance that references the front face -- shopfront framing, coping front, kerb front, canopy top slab, corner returns, parapet ribs -- must be measured from +2.90. They were not, for one pass: authored against the old +2.70 they sat BEHIND this wall and drew nothing, which is a failure that renders as a clean image rather than as an error."}, "parent": null, "attachment": {"parentSocket": "", "contactType": "butt", "notes": "Butts against the shell's two open ends at z=+2.50, opposed faces."}, "dimensions": {"width": 7.8, "height": 4.1, "depth": 0.2, "units": "meters", "confidence": 0.9}, "transform": {"position": [0, 0.02, 2.7], "rotationEuler": [0, 0, 0], "scale": [1, 1, 1], "rotation": [0, 0, 0]}, "material": "blue-cladding", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "shopfront-opening", "kind": "hole", "confidence": 0.9, "placement": {"xHalf": 3.37, "yBottom": 0.16, "yTop": 2.42}, "notes": "6.74 x 2.26 m opening leaving a 0.53 m blue pier at each end.", "evidenceRef": "region-glazing"}], "actionProfile": {}, "colorMaterialRecipe": {"baseMaterial": "blue-cladding", "dominantColor": "#3D5C82", "secondary": ["#355378", "#2B486C"], "recipe": "Flat satin blue over ribbed sheet. The blue front against the white returns is the prop's second identity feature, so this colour is a mustPass review target rather than a preference.", "confidence": 0.76, "dominantAlbedo": "rgba(61, 92, 130, 1.0)", "secondaryAlbedo": "rgba(53, 83, 120, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.76}, "surfaceDetail": {"macroRoughness": 0.55, "microRoughness": 0.4, "bumpAmplitude": 0.0, "locality": "Satin exterior paint over the same profiled sheet; slightly smoother than the white returns, matching the plate where the blue holds a broader specular lobe.", "note": "bumpAmplitude is 0 by design, not by omission. Every relief on this prop is carried as GEOMETRY -- the shell's rib castellation in its plan profile, the blue-trim parapet ribs, the condenser louvres and the shutter slats -- and all eight materials are declared textureless with evidence, so a bump or normal channel here would both contradict that declaration and re-introduce the procedural texture synthesis those declarations exist to skip. What this block carries is roughness LOCALITY, which is real and map-free."}};
  node_facade_wall_1.userData.actionProfile = {};
  (nodes["root"] ?? root).add(node_facade_wall_1);
  nodes["facade-wall"] = node_facade_wall_1;
  const mesh_facade_wall_1Geometry = endpoint_facade_wall_1
    ? new THREE.CylinderGeometry(endpoint_facade_wall_1.endRadius, endpoint_facade_wall_1.baseRadius, endpoint_facade_wall_1.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-3.9, 0], [3.9, 0], [3.9, 4.1], [-3.9, 4.1]], "holes": [[[-3.37, 0.14], [3.37, 0.14], [3.37, 2.4], [-3.37, 2.4]]], "depth": 0.2});
  if (!endpoint_facade_wall_1) {
    mesh_facade_wall_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_facade_wall_1 = new THREE.Mesh(
    mesh_facade_wall_1Geometry,
    materialMap["blue-cladding"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_facade_wall_1.name = "Blue front elevation with shopfront opening";
  if (endpoint_facade_wall_1) {
    mesh_facade_wall_1.position.copy(endpoint_facade_wall_1.midpoint);
    mesh_facade_wall_1.quaternion.copy(endpoint_facade_wall_1.quaternion);
  }
  mesh_facade_wall_1.castShadow = options.castShadow ?? true;
  mesh_facade_wall_1.receiveShadow = options.receiveShadow ?? true;
  mesh_facade_wall_1.userData.sculptComponent = node_facade_wall_1.userData.sculptComponent;
  node_facade_wall_1.add(mesh_facade_wall_1);
  meshes["facade-wall"] = mesh_facade_wall_1;
  colliders["facade-wall"] = {};

  const endpoint_roof_deck_2 = makeAttachmentEndpoint(null);
  const node_roof_deck_2 = new THREE.Group();
  node_roof_deck_2.name = "Concrete roof deck__pivot";
  node_roof_deck_2.scale.set(1, 1, 1);
  if (endpoint_roof_deck_2) {
    node_roof_deck_2.position.copy(endpoint_roof_deck_2.start);
    node_roof_deck_2.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_roof_deck_2.position.set(0.0, 3.42, -0.26);
    node_roof_deck_2.rotation.set(0.0, 0.0, 0.0);
  }
  node_roof_deck_2.userData.sculptComponent = {"id": "roof-deck", "name": "Concrete roof deck", "level": "macro", "role": "body", "importance": 0.55, "confidence": 0.8, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A flat slab spanning the wall cavity. One box, one geometry, one draw call.", "geometryDescriptor": {"topologyIntent": "Slab filling the inner footprint, top face at y=3.50 so the parapet stands 0.70 m above it.", "edgeTreatment": {"type": "none", "bevelRadius": 0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "One box: 12 triangles.", "zFightingNote": "The deck's four side faces sit at the walls' INNER faces (x=+-3.70, z=-3.20 and +2.50). Those are opposed pairs -- the deck's +X face points +X, the wall's inner face points -X -- which is a butt joint and not the coincident co-facing case.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the roof deck rendered as a 1 m box. The extrude components are the exact opposite and MUST KEEP scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8 x 4.6 x 7."}, "parent": null, "attachment": {"parentSocket": "", "contactType": "butt", "notes": "Butts the three wall inner faces and the facade wall's back face."}, "dimensions": {"width": 7.3999999999999995, "height": 0.16, "depth": 5.88, "units": "meters", "confidence": 0.8}, "transform": {"position": [0, 3.42, -0.26], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "concrete-grey", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "deck-panel-joints", "kind": "linework", "confidence": 0.6, "notes": "Shallow panel joints across the slab, visible in crops/roof-plant.png.", "evidenceRef": "region-concrete-grey"}, {"id": "plant-mounting-brackets", "kind": "fastener", "confidence": 0.6, "notes": "Small dark mounting feet under each condenser body, visible in crops/roof-plant.png.", "evidenceRef": "region-concrete-grey"}], "actionProfile": {}, "colorMaterialRecipe": {"baseMaterial": "concrete-grey", "dominantColor": "#BFC0C2", "secondary": ["#C3C4C7", "#B8BABE"], "recipe": "Neutral float-finished precast, shallow panel joints, no hue cast. Measured directly off the open deck.", "confidence": 0.72, "dominantAlbedo": "rgba(191, 192, 194, 1.0)", "secondaryAlbedo": "rgba(195, 196, 199, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.72}, "surfaceDetail": {"macroRoughness": 0.86, "microRoughness": 0.74, "bumpAmplitude": 0.0, "locality": "Float-finished concrete with shallow panel joints; the roughest surface on the prop and the only one with no specular reading in the plate.", "note": "bumpAmplitude is 0 by design, not by omission. Every relief on this prop is carried as GEOMETRY -- the shell's rib castellation in its plan profile, the blue-trim parapet ribs, the condenser louvres and the shutter slats -- and all eight materials are declared textureless with evidence, so a bump or normal channel here would both contradict that declaration and re-introduce the procedural texture synthesis those declarations exist to skip. What this block carries is roughness LOCALITY, which is real and map-free."}};
  node_roof_deck_2.userData.actionProfile = {};
  (nodes["root"] ?? root).add(node_roof_deck_2);
  nodes["roof-deck"] = node_roof_deck_2;
  const mesh_roof_deck_2Geometry = endpoint_roof_deck_2
    ? new THREE.CylinderGeometry(endpoint_roof_deck_2.endRadius, endpoint_roof_deck_2.baseRadius, endpoint_roof_deck_2.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_roof_deck_2) {
    mesh_roof_deck_2Geometry.scale(7.3999999999999995, 0.16, 5.88);
  }
  const mesh_roof_deck_2 = new THREE.Mesh(
    mesh_roof_deck_2Geometry,
    materialMap["concrete-grey"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_roof_deck_2.name = "Concrete roof deck";
  if (endpoint_roof_deck_2) {
    mesh_roof_deck_2.position.copy(endpoint_roof_deck_2.midpoint);
    mesh_roof_deck_2.quaternion.copy(endpoint_roof_deck_2.quaternion);
  }
  mesh_roof_deck_2.castShadow = options.castShadow ?? true;
  mesh_roof_deck_2.receiveShadow = options.receiveShadow ?? true;
  mesh_roof_deck_2.userData.sculptComponent = node_roof_deck_2.userData.sculptComponent;
  node_roof_deck_2.add(mesh_roof_deck_2);
  meshes["roof-deck"] = mesh_roof_deck_2;
  colliders["roof-deck"] = {};

  const endpoint_fascia_banner_3 = makeAttachmentEndpoint(null);
  const node_fascia_banner_3 = new THREE.Group();
  node_fascia_banner_3.name = "Deep blue fascia banner with the makro wordmark__pivot";
  node_fascia_banner_3.scale.set(1, 1, 1);
  if (endpoint_fascia_banner_3) {
    node_fascia_banner_3.position.copy(endpoint_fascia_banner_3.start);
    node_fascia_banner_3.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_fascia_banner_3.position.set(0.0, 3.17, 0.16);
    node_fascia_banner_3.rotation.set(0.0, 0.0, 0.0);
  }
  node_fascia_banner_3.userData.sculptComponent = {"id": "fascia-banner", "name": "Deep blue fascia banner with the makro wordmark", "level": "meso", "role": "detail", "importance": 1.0, "confidence": 0.92, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A shallow sign tray standing proud of the blue cladding behind it. It is a component rather than an instance because it is the ONLY surface that carries a generated canvas (the wordmark), and a canvas has to be assigned to a mesh's own material.", "geometryDescriptor": {"topologyIntent": "7.40 x 1.06 x 0.16 m tray spanning most of the front, its front face at z=+2.74.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.008, "segments": 1}, "deformationStack": [], "uvStrategy": "planar front-face projection for the wordmark canvas", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "One box: 12 triangles.", "zFightingNote": "Spans z=+2.58..+2.74. Its BACK face is buried 0.12 m inside the facade wall rather than laid on the wall's front face at +2.70 -- a tray whose back sits exactly on the wall it mounts to is a coincident co-facing pair. Its front face at +2.74 stands 0.04 m proud.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the roof deck rendered as a 1 m box. The extrude components are the exact opposite and MUST KEEP scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8 x 4.6 x 7.", "parentLocalNote": "transform.position is PARENT-LOCAL, not world. The generator nests a child component's node under its parent's node, so a child carrying world coordinates is offset by the parent's position twice: a first draft put the glazing at world z=2.565 with parent facade-wall at z=2.50 and the pane rendered at z=5.065, two and a half metres in front of the building it belongs to. The facade-wall node sits at (0, 0.02, 2.50), so every child of it carries world minus that."}, "parent": "facade-wall", "attachment": {"parentSocket": "", "contactType": "overlap", "overlap": 0.12, "notes": "Overlaps into the facade wall rather than meeting its face."}, "dimensions": {"width": 7.4, "height": 1.06, "depth": 0.16, "units": "meters", "confidence": 0.92}, "transform": {"position": [0, 3.17, 0.16], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0], "worldPosition": [0, 3.19, 2.8600000000000003]}, "material": "sign-blue", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "makro-wordmark", "kind": "inscription", "confidence": 0.95, "placement": {"face": "+Z", "widthFraction": 0.46, "heightFraction": 0.52, "centered": true}, "notes": "Red lowercase `makro` with a thin light outline, drawn into a generated canvas and assigned to this mesh's map AFTER createSculptMaterial returns. That route is unaffected by the textureless declaration and is the documented way to do a brand fascia -- it costs one canvas rather than the five a texture set would synthesise.", "evidenceRef": "region-sign-blue"}, {"id": "banner-tray-return", "kind": "contour", "confidence": 0.85, "notes": "The thin lighter-blue edge frame reading as the sign tray's folded return.", "evidenceRef": "region-sign-blue"}], "actionProfile": {}, "colorMaterialRecipe": {"baseMaterial": "sign-blue", "dominantColor": "#2F4C77", "secondary": ["#34547D", "#23386C"], "recipe": "Flat printed vinyl one step deeper than the cladding beside it, carrying the red #D8232A wordmark as a canvas region assigned after material construction.", "confidence": 0.75, "dominantAlbedo": "rgba(47, 76, 119, 1.0)", "secondaryAlbedo": "rgba(52, 84, 125, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.75}, "levelRationale": "MESO: applied detail on the facade mass. It is real and identity-defining but the blockout silhouette is complete without it.", "surfaceDetail": {"macroRoughness": 0.44, "microRoughness": 0.36, "bumpAmplitude": 0.0, "locality": "Printed sign face, flatter and glossier than the cladding it sits proud of; the wordmark canvas rides this surface and is unaffected by roughness locality.", "note": "bumpAmplitude is 0 by design, not by omission. Every relief on this prop is carried as GEOMETRY -- the shell's rib castellation in its plan profile, the blue-trim parapet ribs, the condenser louvres and the shutter slats -- and all eight materials are declared textureless with evidence, so a bump or normal channel here would both contradict that declaration and re-introduce the procedural texture synthesis those declarations exist to skip. What this block carries is roughness LOCALITY, which is real and map-free."}};
  node_fascia_banner_3.userData.actionProfile = {};
  (nodes["facade-wall"] ?? root).add(node_fascia_banner_3);
  nodes["fascia-banner"] = node_fascia_banner_3;
  const mesh_fascia_banner_3Geometry = endpoint_fascia_banner_3
    ? new THREE.CylinderGeometry(endpoint_fascia_banner_3.endRadius, endpoint_fascia_banner_3.baseRadius, endpoint_fascia_banner_3.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_fascia_banner_3) {
    mesh_fascia_banner_3Geometry.scale(7.4, 1.06, 0.16);
  }
  const mesh_fascia_banner_3 = new THREE.Mesh(
    mesh_fascia_banner_3Geometry,
    materialMap["sign-blue"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_fascia_banner_3.name = "Deep blue fascia banner with the makro wordmark";
  if (endpoint_fascia_banner_3) {
    mesh_fascia_banner_3.position.copy(endpoint_fascia_banner_3.midpoint);
    mesh_fascia_banner_3.quaternion.copy(endpoint_fascia_banner_3.quaternion);
  }
  mesh_fascia_banner_3.castShadow = options.castShadow ?? true;
  mesh_fascia_banner_3.receiveShadow = options.receiveShadow ?? true;
  mesh_fascia_banner_3.userData.sculptComponent = node_fascia_banner_3.userData.sculptComponent;
  node_fascia_banner_3.add(mesh_fascia_banner_3);
  meshes["fascia-banner"] = mesh_fascia_banner_3;
  colliders["fascia-banner"] = {};

  const endpoint_entrance_canopy_4 = makeAttachmentEndpoint(null);
  const node_entrance_canopy_4 = new THREE.Group();
  node_entrance_canopy_4.name = "Cantilevered entrance canopy__pivot";
  node_entrance_canopy_4.scale.set(1, 1, 1);
  if (endpoint_entrance_canopy_4) {
    node_entrance_canopy_4.position.copy(endpoint_entrance_canopy_4.start);
    node_entrance_canopy_4.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_entrance_canopy_4.position.set(0.0, 2.475, 0.45);
    node_entrance_canopy_4.rotation.set(0.0, 0.0, 0.0);
  }
  node_entrance_canopy_4.userData.sculptComponent = {"id": "entrance-canopy", "name": "Cantilevered entrance canopy", "level": "meso", "role": "detail", "importance": 0.8, "confidence": 0.86, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A slim slab cantilevering over the shopfront. Blue, because the plate shows its front edge and underside blue; the pale top surface is a separate instance in the concrete-trim system, which costs nothing because that system already exists for the base kerb.", "geometryDescriptor": {"topologyIntent": "7.00 x 0.15 x 0.70 m slab projecting from z=+2.80 to z=+3.50, the module's front face.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.008, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "One box: 12 triangles.", "zFightingNote": "Its back end at z=+2.60 is 0.10 m INSIDE the facade wall (2.50..2.70), not against its front face. Its top at y=2.57 is overlapped by the concrete top slab (2.54..2.59) rather than meeting it.", "moduleNote": "Its front face at z=+3.50 is what sets the prop's declared 7.0 m depth, and it is PINNED there. When the facade moved forward 0.20 m to deepen the walls, this slab absorbed the whole change by getting shorter -- 0.90 m of projection to 0.70 m -- rather than moving. That is the correct direction for the trade: the plate's canopy is slim, and the wall box being too shallow was the measured defect.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the roof deck rendered as a 1 m box. The extrude components are the exact opposite and MUST KEEP scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8 x 4.6 x 7.", "parentLocalNote": "transform.position is PARENT-LOCAL, not world. The generator nests a child component's node under its parent's node, so a child carrying world coordinates is offset by the parent's position twice: a first draft put the glazing at world z=2.565 with parent facade-wall at z=2.50 and the pane rendered at z=5.065, two and a half metres in front of the building it belongs to. The facade-wall node sits at (0, 0.02, 2.50), so every child of it carries world minus that."}, "parent": "facade-wall", "attachment": {"parentSocket": "", "contactType": "embed", "embedDepth": 0.1, "notes": "Embedded 0.10 m into the facade wall."}, "dimensions": {"width": 7.0, "height": 0.15, "depth": 0.7, "units": "meters", "confidence": 0.86}, "transform": {"position": [0, 2.475, 0.45], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0], "worldPosition": [0, 2.495, 3.15]}, "material": "blue-cladding", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "canopy-blue-edge", "kind": "contour", "confidence": 0.88, "notes": "The blue front fascia edge and underside, which is why this slab is blue and its top is a separate pale instance.", "evidenceRef": "region-canopy"}], "actionProfile": {}, "colorMaterialRecipe": {"baseMaterial": "blue-cladding", "dominantColor": "#3D5C82", "secondary": ["#355378"], "recipe": "Shares the facade blue for its front edge and underside; the pale top is a separate concrete-trim instance, which is why this slab is blue rather than grey.", "confidence": 0.8, "dominantAlbedo": "rgba(61, 92, 130, 1.0)", "secondaryAlbedo": "rgba(53, 83, 120, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.8}, "levelRationale": "MESO: applied detail on the facade mass. It is real and identity-defining but the blockout silhouette is complete without it.", "surfaceDetail": {"macroRoughness": 0.52, "microRoughness": 0.4, "bumpAmplitude": 0.0, "locality": "Painted metal soffit and blue edge, with the pale concrete top slab reading markedly rougher; the two are separate meshes so the split is carried by material, not by a mask.", "note": "bumpAmplitude is 0 by design, not by omission. Every relief on this prop is carried as GEOMETRY -- the shell's rib castellation in its plan profile, the blue-trim parapet ribs, the condenser louvres and the shutter slats -- and all eight materials are declared textureless with evidence, so a bump or normal channel here would both contradict that declaration and re-introduce the procedural texture synthesis those declarations exist to skip. What this block carries is roughness LOCALITY, which is real and map-free."}};
  node_entrance_canopy_4.userData.actionProfile = {};
  (nodes["facade-wall"] ?? root).add(node_entrance_canopy_4);
  nodes["entrance-canopy"] = node_entrance_canopy_4;
  const mesh_entrance_canopy_4Geometry = endpoint_entrance_canopy_4
    ? new THREE.CylinderGeometry(endpoint_entrance_canopy_4.endRadius, endpoint_entrance_canopy_4.baseRadius, endpoint_entrance_canopy_4.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_entrance_canopy_4) {
    mesh_entrance_canopy_4Geometry.scale(7.0, 0.15, 0.7);
  }
  const mesh_entrance_canopy_4 = new THREE.Mesh(
    mesh_entrance_canopy_4Geometry,
    materialMap["blue-cladding"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_entrance_canopy_4.name = "Cantilevered entrance canopy";
  if (endpoint_entrance_canopy_4) {
    mesh_entrance_canopy_4.position.copy(endpoint_entrance_canopy_4.midpoint);
    mesh_entrance_canopy_4.quaternion.copy(endpoint_entrance_canopy_4.quaternion);
  }
  mesh_entrance_canopy_4.castShadow = options.castShadow ?? true;
  mesh_entrance_canopy_4.receiveShadow = options.receiveShadow ?? true;
  mesh_entrance_canopy_4.userData.sculptComponent = node_entrance_canopy_4.userData.sculptComponent;
  node_entrance_canopy_4.add(mesh_entrance_canopy_4);
  meshes["entrance-canopy"] = mesh_entrance_canopy_4;
  colliders["entrance-canopy"] = {};

  const endpoint_shopfront_glazing_5 = makeAttachmentEndpoint(null);
  const node_shopfront_glazing_5 = new THREE.Group();
  node_shopfront_glazing_5.name = "Tinted shopfront pane__pivot";
  node_shopfront_glazing_5.scale.set(1, 1, 1);
  if (endpoint_shopfront_glazing_5) {
    node_shopfront_glazing_5.position.copy(endpoint_shopfront_glazing_5.start);
    node_shopfront_glazing_5.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_shopfront_glazing_5.position.set(0.0, 1.27, 0.065);
    node_shopfront_glazing_5.rotation.set(0.0, 0.0, 0.0);
  }
  node_shopfront_glazing_5.userData.sculptComponent = {"id": "shopfront-glazing", "name": "Tinted shopfront pane", "level": "macro", "role": "detail", "importance": 0.9, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A 0.04 m thick pane -- a solid with real thickness, not a zero-thickness membrane, so it is one-sided and never seen from behind. ONE oversized pane behind the opening, not a pane per bay: the bay rhythm is drawn by the aluminium framing instances in front of it, and splitting the glass to match would cost eight geometries this prop does not have.", "geometryDescriptor": {"topologyIntent": "6.88 x 2.40 x 0.04 m pane, oversized past the opening on all four sides so it passes behind the reveals.", "edgeTreatment": {"type": "none", "bevelRadius": 0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "One box: 12 triangles.", "zFightingNote": "Spans z=+2.545..+2.585, INSIDE the wall's 2.50..2.70 depth and clear of both its faces. Oversized to +-3.44 x 0.09..2.49 against an opening of +-3.37 x 0.16..2.42, so its edges are hidden behind the reveals instead of meeting them. A 0.015 m air gap is left to the framing's back face at +2.60 so the two never share a plane.", "opacityNote": "Authored mostly opaque; see material glass-tinted. There is no interior behind it by design.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the roof deck rendered as a 1 m box. The extrude components are the exact opposite and MUST KEEP scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8 x 4.6 x 7.", "parentLocalNote": "transform.position is PARENT-LOCAL, not world. The generator nests a child component's node under its parent's node, so a child carrying world coordinates is offset by the parent's position twice: a first draft put the glazing at world z=2.565 with parent facade-wall at z=2.50 and the pane rendered at z=5.065, two and a half metres in front of the building it belongs to. The facade-wall node sits at (0, 0.02, 2.50), so every child of it carries world minus that."}, "parent": "facade-wall", "attachment": {"parentSocket": "", "contactType": "overlap", "overlap": 0.07, "notes": "Passes behind the opening reveals on all four sides."}, "dimensions": {"width": 6.88, "height": 2.4, "depth": 0.04, "units": "meters", "confidence": 0.85}, "transform": {"position": [0, 1.27, 0.065], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0], "worldPosition": [0, 1.29, 2.765]}, "material": "glass-tinted", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [], "actionProfile": {}, "colorMaterialRecipe": {"baseMaterial": "glass-tinted", "dominantColor": "#8E9A99", "secondary": ["#A6A8A8", "#9EA2A4"], "recipe": "Authored grey-green tint at opacity 0.92 and roughness 0.09. Deliberately NOT sampled from the crop, whose pixels are an interior this prop does not have.", "confidence": 0.7, "dominantAlbedo": "rgba(142, 154, 153, 1.0)", "secondaryAlbedo": "rgba(166, 168, 168, 1.0)", "materialClass": "glass", "materialClassConfidence": 0.7}, "levelRationale": "MACRO, not meso. A blockout is the clay mass, and a mass with a 6.74 x 2.26 m hole punched through its front is not a closed solid. The glazed shopfront is 6.74 m of an 8.0 m elevation, so it is the building's mass rather than detail applied to it. The banner, the canopy and every instanced cluster stay meso/micro, so the blockout is still clay-macro.", "surfaceDetail": {"macroRoughness": 0.09, "microRoughness": 0.06, "bumpAmplitude": 0.0, "locality": "Glass: the lowest roughness in the prop, which is what makes the pane catch the key as a highlight and read as a surface rather than a hole.", "note": "bumpAmplitude is 0 by design, not by omission. Every relief on this prop is carried as GEOMETRY -- the shell's rib castellation in its plan profile, the blue-trim parapet ribs, the condenser louvres and the shutter slats -- and all eight materials are declared textureless with evidence, so a bump or normal channel here would both contradict that declaration and re-introduce the procedural texture synthesis those declarations exist to skip. What this block carries is roughness LOCALITY, which is real and map-free."}};
  node_shopfront_glazing_5.userData.actionProfile = {};
  (nodes["facade-wall"] ?? root).add(node_shopfront_glazing_5);
  nodes["shopfront-glazing"] = node_shopfront_glazing_5;
  const mesh_shopfront_glazing_5Geometry = endpoint_shopfront_glazing_5
    ? new THREE.CylinderGeometry(endpoint_shopfront_glazing_5.endRadius, endpoint_shopfront_glazing_5.baseRadius, endpoint_shopfront_glazing_5.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_shopfront_glazing_5) {
    mesh_shopfront_glazing_5Geometry.scale(6.88, 2.4, 0.04);
  }
  const mesh_shopfront_glazing_5 = new THREE.Mesh(
    mesh_shopfront_glazing_5Geometry,
    materialMap["glass-tinted"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_shopfront_glazing_5.name = "Tinted shopfront pane";
  if (endpoint_shopfront_glazing_5) {
    mesh_shopfront_glazing_5.position.copy(endpoint_shopfront_glazing_5.midpoint);
    mesh_shopfront_glazing_5.quaternion.copy(endpoint_shopfront_glazing_5.quaternion);
  }
  mesh_shopfront_glazing_5.castShadow = options.castShadow ?? true;
  mesh_shopfront_glazing_5.receiveShadow = options.receiveShadow ?? true;
  mesh_shopfront_glazing_5.userData.sculptComponent = node_shopfront_glazing_5.userData.sculptComponent;
  node_shopfront_glazing_5.add(mesh_shopfront_glazing_5);
  meshes["shopfront-glazing"] = mesh_shopfront_glazing_5;
  colliders["shopfront-glazing"] = {};

  // Published for the hand-emitted repetition clusters; see assemble.py. Without this the five
  // clusters each construct their own fallback material and the prop measures 10 of a possible 8.
  root.userData.materialMap = materialMap;
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createMakroStoreBuildingLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Makro Store Building look-dev lights";
  const hemi = new THREE.HemisphereLight(
    mode === 'reference' ? 0xfff0d6 : 0xf2f4ff,
    0x363b42,
    mode === 'grazing' ? 0.28 : mode === 'reference' ? 0.72 : 0.85,
  );
  lights.add(hemi);
  const key = new THREE.DirectionalLight(
    mode === 'reference' ? 0xffcf8a : 0xfff4e8,
    mode === 'grazing' ? 4.2 : mode === 'reference' ? 2.6 : 2.15,
  );
  if (mode === 'grazing') key.position.set(7.5, 1.1, 4.0);
  else if (mode === 'reference') key.position.set(-4.5, 7.5, 5.0);
  else key.position.set(-4.0, 6.0, 5.5);
  key.castShadow = true;
  key.shadow.mapSize.set(4096, 4096);
  key.shadow.bias = -0.00025;
  key.shadow.normalBias = 0.018;
  key.shadow.radius = 7;
  key.shadow.blurSamples = 24;
  key.shadow.camera.near = 0.5;
  key.shadow.camera.far = 30;
  key.shadow.camera.left = -2.6;
  key.shadow.camera.right = 2.6;
  key.shadow.camera.top = 2.6;
  key.shadow.camera.bottom = -2.6;
  key.shadow.camera.updateProjectionMatrix();
  lights.add(key);
  const fill = new THREE.DirectionalLight(0xa8c4ff, mode === 'grazing' ? 0.12 : 0.42);
  fill.position.set(4.0, 3.0, 3.5);
  lights.add(fill);
  const rim = new THREE.DirectionalLight(0xfff1c4, mode === 'grazing' ? 0.28 : 0.85);
  rim.position.set(0.5, 4.5, -6.0);
  lights.add(rim);
  lights.userData.reviewMode = mode;
  lights.userData.lightingFromPhoto = [{"id": "key", "type": "directional", "role": "key", "intensity": 2.1, "direction": [-0.45, -0.78, -0.44], "colorTemperatureK": 5600, "color": "#FFF6EA", "evidence": "Read off the plate's shading split: the +Z front and the +X side both carry light with the front marginally brighter, and the roof deck is the brightest plane, so the key is high and forward of the right shoulder. Shadow edges under the canopy are soft, so it is a broad source.", "confidence": 0.78}, {"id": "fill", "type": "hemisphere", "role": "fill", "intensity": 0.85, "skyColor": "#C9D2DC", "groundColor": "#8C8880", "evidence": "The plate is a flat studio cut-out with no cast shadow and no ground plane; unlit faces sit only about 20% below lit ones, which is a strong ambient fill rather than a second lamp.", "confidence": 0.8, "contactShadow": {"enabled": true, "strength": 0.35, "radius": 0.25, "note": "Contact/ground shadow is authored as a CONTRACT for the host scene, not baked: the plate is a studio cut-out with no ground plane, so there is no measured contact shadow to copy. A floor-placed building needs a grounding shadow where the kerb meets the ground or it reads as hovering."}, "ambientOcclusion": {"enabled": true, "intensity": 0.5, "note": "Ambient occlusion at the canopy soffit, the shopfront reveals, the shutter recess and under the coping drip -- the four places this prop has real cavities. AO is a lighting response here and is NOT written into any base colour."}}, {"id": "rim", "type": "directional", "role": "rim", "intensity": 0.55, "direction": [0.62, -0.2, 0.76], "color": "#DCE4EE", "evidence": "A cool separation edge along the parapet coping and the front-right corner arris, which is what keeps the white coping legible against the white wall below it.", "confidence": 0.65}, {"id": "environment", "type": "environment", "role": "environment", "intensity": 0.4, "note": "Low, and deliberately. The review harness has no environment map, which is exactly why aluminium and galvanised carry reduced metalness -- a metal near 1 with nothing to reflect renders near-black.", "confidence": 0.7, "exposure": {"value": 1.0, "toneMapping": "ACES filmic", "note": "ACES filmic tone mapping at exposure 1.0, matching the render harness so the review comparison is like for like."}}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  return lights;
}


// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameMakroStoreBuildingCamera(
  camera: THREE.PerspectiveCamera,
  object: THREE.Object3D,
  options: { margin?: number; azimuthDeg?: number; elevationDeg?: number } = {},
): void {
  const box = new THREE.Box3().setFromObject(object);
  if (box.isEmpty()) return;
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const margin = options.margin ?? 1.15;
  const maxDim = Math.max(size.x, size.y, size.z) * margin;
  const fov = (camera.fov * Math.PI) / 180;
  // distance so the largest object dimension fits vertically in the frame
  const distance = (maxDim / 2) / Math.tan(fov / 2);
  const az = ((options.azimuthDeg ?? 0) * Math.PI) / 180;
  const el = ((options.elevationDeg ?? 0) * Math.PI) / 180;
  const dir = new THREE.Vector3(
    Math.sin(az) * Math.cos(el),
    Math.sin(el),
    Math.cos(az) * Math.cos(el),
  );
  camera.position.copy(center).addScaledVector(dir, distance);
  camera.near = Math.max(0.01, distance - maxDim);
  camera.far = distance + maxDim * 2;
  camera.lookAt(center);
  camera.updateProjectionMatrix();
}


export function configureMakroStoreBuildingRenderer(renderer: THREE.WebGLRenderer): void {
  // Load-bearing for view-dependent finishes (anodized / Doppler): without ACES + sRGB
  // the environment reflection reads flat/washed instead of a believable metal response.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}

/* ==================== THAIKIT HAND REFINEMENT ==================== */

/** The build pass this factory was generated for. The hand-emitted clusters obey the same
 * macro/meso/micro gate the generator applies to componentTree, so a blockout render shows a
 * blockout and not a finished prop. */
const BUILD_PASS = 'optimization-pass';
// MUST match sculptPipeline.passOrder in the spec. On the sibling AIS building 'surface-pass' was
// missing from a first draft of this list, indexOf returned -1 for it, and passAtLeast() answered
// false for every gate -- so the surface pass silently rendered with no clusters and no canvases.
// A pass gate that fails OPEN is worse than none.
const PASS_ORDER = ['blockout', 'structural-pass', 'form-refinement', 'material-pass',
  'surface-pass', 'lighting-pass', 'interaction-pass', 'optimization-pass'];
const passAtLeast = (p: string): boolean =>
  PASS_ORDER.indexOf(BUILD_PASS) >= PASS_ORDER.indexOf(p);

/**
 * Emit the five repetition clusters the generator cannot.
 *
 * generate_threejs_factory.py distributes instances RADIALLY, evenly around an axis with
 * '(i * 360) / count'. That is right for spokes, teeth and fasteners and wrong for a row of
 * mullions or a rectangle of coping. It also reads `count` while the spec schema writes
 * `instanceCount`, so these five systems are skipped there in silence.
 *
 * Four clusters share ONE unit BoxGeometry and the fifth shares ONE unit CylinderGeometry.
 * Per-instance matrices carry the size, so 43 repeated parts across five clusters cost TWO
 * unique geometries between them -- unlike componentTree boxes, where the generator bakes
 * dimensions into vertex data via geometry.scale() and each becomes distinct. That single fact
 * is what holds this prop inside the hero2x ceiling of 8 unique geometries: 6 components + 2
 * shared primitives = 8 exactly.
 */
function applyLinearRepetition(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as any;
  const meshes: Record<string, THREE.Mesh> = rt?.meshes ?? {};
  const unitBox = new THREE.BoxGeometry(1, 1, 1);
  // Radius 0.5 so a unit scale gives a unit diameter, matching the box convention: an instance's
  // scale is then its real size in metres on every cluster, not on four of the five.
  const unitCyl = new THREE.CylinderGeometry(0.5, 0.5, 1, 16);
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();

  type P = { pos: [number, number, number]; scale: [number, number, number]; color?: string };
  const cluster = (id: string, geom: THREE.BufferGeometry, material: THREE.Material, placements: P[]): void => {
    const inst = new THREE.InstancedMesh(geom, material, placements.length);
    inst.name = id;
    placements.forEach((p, i) => {
      m4.compose(new THREE.Vector3(...p.pos), q, new THREE.Vector3(...p.scale));
      inst.setMatrixAt(i, m4);
      // instanceColor MULTIPLIES the material colour, it does not replace it.
      if (p.color) inst.setColorAt(i, new THREE.Color(p.color));
    });
    inst.instanceMatrix.needsUpdate = true;
    if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    inst.castShadow = true;
    inst.receiveShadow = true;
    root.add(inst);
    meshes[id] = inst as unknown as THREE.Mesh;
  };
  const mat = (id: string, fallback: number): THREE.Material =>
    (root.userData.materialMap?.[id] as THREE.Material)
    ?? new THREE.MeshStandardMaterial({ color: fallback });

  // --- shopfront framing: perimeter, six mullions over eight 0.84 m bays, transom, door pair ---
  // Every member that CROSSES another has its own front and back plane, staggered in the order a
  // real frame is built: jambs proudest at z=2.736, rails 2.728, transom 2.718, door stile 2.714,
  // mullions 2.710, door head 2.706. Two members sharing a plane would tear into interleaved
  // triangles exactly where they cross, which is the most looked-at place on the prop. The six
  // mullions DO share a plane, which is harmless because they never overlap in x.
  cluster('shopfront-framing', unitBox, mat('aluminium', 0xb4b7b8), [
    { pos: [0, 2.38, 2.86], scale: [6.98, 0.14, 0.136] }, // head-rail
    { pos: [0, 0.2, 2.86], scale: [6.98, 0.14, 0.136] }, // sill-rail
    { pos: [-3.41, 1.29, 2.862], scale: [0.14, 2.26, 0.148] }, // jamb-left
    { pos: [3.41, 1.29, 2.862], scale: [0.14, 2.26, 0.148] }, // jamb-right
    { pos: [0, 1.92, 2.857], scale: [6.8, 0.1, 0.122] }, // transom
    { pos: [-2.53, 1.29, 2.855], scale: [0.07, 2.2, 0.11] }, // mullion--2.530
    { pos: [-1.685, 1.29, 2.855], scale: [0.07, 2.2, 0.11] }, // mullion--1.685
    { pos: [-0.84, 1.29, 2.855], scale: [0.07, 2.2, 0.11] }, // mullion--0.840
    { pos: [0.84, 1.29, 2.855], scale: [0.07, 2.2, 0.11] }, // mullion-+0.840
    { pos: [1.685, 1.29, 2.855], scale: [0.07, 2.2, 0.11] }, // mullion-+1.685
    { pos: [2.53, 1.29, 2.855], scale: [0.07, 2.2, 0.11] }, // mullion-+2.530
    { pos: [0, 1.66, 2.855], scale: [1.72, 0.09, 0.102] }, // door-head
    { pos: [0, 0.9, 2.858], scale: [0.09, 1.48, 0.112] }, // door-stile
    { pos: [0.11, 0.9, 2.95], scale: [0.04, 0.34, 0.04] }, // door-pull
  ]);

  // --- white flashing: parapet coping, two front corner trims, the shutter surround ---
  // The four coping bars BUTT end to end rather than overlapping at the corners: an overlap would
  // put two +Y faces in the y=4.20 plane facing the same way. The coping owns 4.04..4.20 and the
  // walls stop at 4.12, so the wall tops are BURIED inside the cap instead of sharing its plane.
  cluster('white-trim', unitBox, mat('trim-white', 0xd8dad9), [
    { pos: [0, 4.14, 2.8], scale: [8.0, 0.12, 0.3] }, // coping-front
    { pos: [0, 4.14, -3.4], scale: [8.0, 0.12, 0.2] }, // coping-rear
    { pos: [-3.9, 4.14, -0.325], scale: [0.2, 0.12, 5.95] }, // coping-left
    { pos: [3.9, 4.14, -0.325], scale: [0.2, 0.12, 5.95] }, // coping-right
    { pos: [3.935, 2.73, 1.4], scale: [0.08, 0.16, 1.96] }, // shutter-surround-head
    { pos: [3.94, 1.4, 2.38], scale: [0.1, 2.66, 0.16] }, // shutter-surround-jamb-front
    { pos: [3.94, 1.4, 0.42], scale: [0.1, 2.66, 0.16] }, // shutter-surround-jamb-rear
  ]);

  // --- concrete: the four base kerb bars and the canopy's pale top slab ---
  // The kerb's outer faces at x=+-4.00 and z=-3.50 are what DEFINE the declared 8.0 x 7.0 module.
  // Folding the canopy top in here is what lets the canopy itself be blue, which is what the plate
  // shows -- and it costs nothing, because this cluster already exists for the kerb.
  cluster('concrete-trim', unitBox, mat('concrete-grey', 0xbfc0c2), [
    { pos: [0, 0.075, 2.8], scale: [8.0, 0.15, 0.3] }, // kerb-front
    { pos: [0, 0.075, -3.4], scale: [8.0, 0.15, 0.2] }, // kerb-rear
    { pos: [-3.9, 0.075, -0.325], scale: [0.2, 0.15, 5.95] }, // kerb-left
    { pos: [3.9, 0.075, -0.325], scale: [0.2, 0.15, 5.95] }, // kerb-right
    { pos: [0, 2.565, 3.16], scale: [6.9, 0.05, 0.62] }, // canopy-top-slab
  ]);

  // --- galvanised: five condenser bodies, four duct runs, and the roller service shutter ---
  // The shutter joins the roof plant rather than being a component precisely because it shares
  // their material; that choice is what freed the geometry slot the fan cowls needed. Bodies sit
  // on a 1.20 x 1.20 m grid so no two overlap, and every one rests ON the deck top at y=3.50.
  cluster('rooftop-plant', unitBox, mat('galvanised', 0x9aa0a4), [
    // Bodies now stand on mounting feet and stop at y=4.56, leaving the fan guards to cap the
    // prop at exactly 4.60. The plate's units read slightly wider than tall (~1.27:1) and sit
    // clear of the deck on rails, which is what the detail inventory's mounting-feet entry names.
    { pos: [-2.6, 4.105, 1.75], scale: [1.1, 0.91, 0.95] }, // condenser-1
    { pos: [-1.4, 4.105, 1.75], scale: [1.1, 0.91, 0.95] }, // condenser-2
    { pos: [-0.2, 4.105, 1.75], scale: [1.1, 0.91, 0.95] }, // condenser-3
    { pos: [-2.0, 4.105, 0.55], scale: [1.1, 0.91, 0.95] }, // condenser-4
    { pos: [-0.8, 4.105, 0.55], scale: [1.1, 0.91, 0.95] }, // condenser-5
    // mounting feet: the units are held off the deck, as the plate shows
    { pos: [-2.6, 3.575, 1.75], scale: [0.9, 0.15, 0.75] }, // condenser-foot-1
    { pos: [-1.4, 3.575, 1.75], scale: [0.9, 0.15, 0.75] }, // condenser-foot-2
    { pos: [-0.2, 3.575, 1.75], scale: [0.9, 0.15, 0.75] }, // condenser-foot-3
    { pos: [-2.0, 3.575, 0.55], scale: [0.9, 0.15, 0.75] }, // condenser-foot-4
    { pos: [-0.8, 3.575, 0.55], scale: [0.9, 0.15, 0.75] }, // condenser-foot-5
    // louvre slats across each condenser's front face -- the plate's most legible plant detail,
    // and free of every ceiling but triangles: same cluster, same unit box, same material.
    { pos: [-2.6, 3.78, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-1-louvre-0
    { pos: [-2.6, 3.95, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-1-louvre-1
    { pos: [-2.6, 4.12, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-1-louvre-2
    { pos: [-2.6, 4.29, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-1-louvre-3
    { pos: [-2.6, 4.46, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-1-louvre-4
    { pos: [-1.4, 3.78, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-2-louvre-0
    { pos: [-1.4, 3.95, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-2-louvre-1
    { pos: [-1.4, 4.12, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-2-louvre-2
    { pos: [-1.4, 4.29, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-2-louvre-3
    { pos: [-1.4, 4.46, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-2-louvre-4
    { pos: [-0.2, 3.78, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-3-louvre-0
    { pos: [-0.2, 3.95, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-3-louvre-1
    { pos: [-0.2, 4.12, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-3-louvre-2
    { pos: [-0.2, 4.29, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-3-louvre-3
    { pos: [-0.2, 4.46, 2.235], scale: [0.92, 0.09, 0.03] }, // condenser-3-louvre-4
    { pos: [-2.0, 3.78, 1.035], scale: [0.92, 0.09, 0.03] }, // condenser-4-louvre-0
    { pos: [-2.0, 3.95, 1.035], scale: [0.92, 0.09, 0.03] }, // condenser-4-louvre-1
    { pos: [-2.0, 4.12, 1.035], scale: [0.92, 0.09, 0.03] }, // condenser-4-louvre-2
    { pos: [-2.0, 4.29, 1.035], scale: [0.92, 0.09, 0.03] }, // condenser-4-louvre-3
    { pos: [-2.0, 4.46, 1.035], scale: [0.92, 0.09, 0.03] }, // condenser-4-louvre-4
    { pos: [-0.8, 3.78, 1.035], scale: [0.92, 0.09, 0.03] }, // condenser-5-louvre-0
    { pos: [-0.8, 3.95, 1.035], scale: [0.92, 0.09, 0.03] }, // condenser-5-louvre-1
    { pos: [-0.8, 4.12, 1.035], scale: [0.92, 0.09, 0.03] }, // condenser-5-louvre-2
    { pos: [-0.8, 4.29, 1.035], scale: [0.92, 0.09, 0.03] }, // condenser-5-louvre-3
    { pos: [-0.8, 4.46, 1.035], scale: [0.92, 0.09, 0.03] }, // condenser-5-louvre-4
    { pos: [2.3, 3.72, 1.4], scale: [1.0, 0.44, 2.2] }, // duct-right-front
    { pos: [2.3, 3.72, -1.3], scale: [1.0, 0.44, 2.2] }, // duct-right-rear
    { pos: [0.2, 3.72, -1.9], scale: [2.0, 0.44, 0.9] }, // duct-cross
    { pos: [-2.2, 3.72, -2.2], scale: [1.8, 0.44, 0.8] }, // duct-rear-left
    { pos: [3.955, 1.38, 1.4], scale: [0.05, 2.6, 1.8] }, // roller-shutter
    // Slat relief across the roller shutter -- surface-pass work, and the one piece of it this
    // prop can still afford: it joins the cluster that already carries the shutter and its
    // material, so it costs 144 triangles and nothing on the other three axes. Slats stop clear
    // of the surround jambs in z and of the head in y, so no two faces land coplanar.
    { pos: [3.985, 0.18, 1.4], scale: [0.025, 0.06, 1.76] }, // shutter-slat-00
    { pos: [3.985, 0.38, 1.4], scale: [0.025, 0.06, 1.76] }, // shutter-slat-01
    { pos: [3.985, 0.58, 1.4], scale: [0.025, 0.06, 1.76] }, // shutter-slat-02
    { pos: [3.985, 0.78, 1.4], scale: [0.025, 0.06, 1.76] }, // shutter-slat-03
    { pos: [3.985, 0.98, 1.4], scale: [0.025, 0.06, 1.76] }, // shutter-slat-04
    { pos: [3.985, 1.18, 1.4], scale: [0.025, 0.06, 1.76] }, // shutter-slat-05
    { pos: [3.985, 1.38, 1.4], scale: [0.025, 0.06, 1.76] }, // shutter-slat-06
    { pos: [3.985, 1.58, 1.4], scale: [0.025, 0.06, 1.76] }, // shutter-slat-07
    { pos: [3.985, 1.78, 1.4], scale: [0.025, 0.06, 1.76] }, // shutter-slat-08
    { pos: [3.985, 1.98, 1.4], scale: [0.025, 0.06, 1.76] }, // shutter-slat-09
    { pos: [3.985, 2.18, 1.4], scale: [0.025, 0.06, 1.76] }, // shutter-slat-10
    { pos: [3.985, 2.38, 1.4], scale: [0.025, 0.06, 1.76] }, // shutter-slat-11
  ]);

  // --- blue-trim: the vertical rib relief on the blue parapet band above the banner ---
  // The spec's facade-wall ribNote DEFERRED this and named the trigger: the front reading too flat
  // beside the ribbed sides. The structural-pass comparison sheet is that trigger -- the plate's
  // parapet band is corrugated at the same pitch as the white side walls, and a flat blue band was
  // the largest remaining form difference. It could not be castellated into the facade profile the
  // way the side walls were: that Shape is an ELEVATION extruded along +Z, and these ribs' relief is
  // along Z too, i.e. along the extrusion axis, which an extrude cannot express.
  // It spends the one draw call held in reserve for it (12/12) and NOTHING else: the cluster reuses
  // `unitBox` and the existing `blue-cladding` material, so geometries stay 8/8 and materials 8/8.
  // Ribs span y=3.72..4.04 -- butting the banner top below and the coping underside above, both
  // OPPOSED faces -- and z=2.685..2.725, standing 0.025 proud of the facade front at 2.70 and
  // stopping 0.005 short of the corner flashing's front plane at 2.730 so no two front faces are
  // coincident and co-facing.
  cluster('blue-trim', unitBox, mat('blue-cladding', 0x2f5f9e), [
    { pos: [-3.625, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-00
    { pos: [-3.375, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-01
    { pos: [-3.125, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-02
    { pos: [-2.875, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-03
    { pos: [-2.625, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-04
    { pos: [-2.375, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-05
    { pos: [-2.125, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-06
    { pos: [-1.875, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-07
    { pos: [-1.625, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-08
    { pos: [-1.375, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-09
    { pos: [-1.125, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-10
    { pos: [-0.875, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-11
    { pos: [-0.625, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-12
    { pos: [-0.375, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-13
    { pos: [-0.125, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-14
    { pos: [0.125, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-15
    { pos: [0.375, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-16
    { pos: [0.625, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-17
    { pos: [0.875, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-18
    { pos: [1.125, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-19
    { pos: [1.375, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-20
    { pos: [1.625, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-21
    { pos: [1.875, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-22
    { pos: [2.125, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-23
    { pos: [2.375, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-24
    { pos: [2.625, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-25
    { pos: [2.875, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-26
    { pos: [3.125, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-27
    { pos: [3.375, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-28
    { pos: [3.625, 3.89, 2.905], scale: [0.11, 0.38, 0.04] }, // rib-29
    // The two front corner returns. They live in THIS cluster, not in white-trim where they were
    // first authored, because the plate shows the blue cladding WRAPPING both front corners --
    // white flashing there is a detail the blockout invented. The error survived until now only
    // because at their old z they sat BEHIND the facade front and drew nothing at all.
    { pos: [-3.89, 1.975, 2.8], scale: [0.18, 3.85, 0.26] }, // corner-return-left
    { pos: [3.89, 1.975, 2.8], scale: [0.18, 3.85, 0.26] }, // corner-return-right
  ]);

  // --- the fan cowls, the one part of the roof plant that is not rectilinear ---
  // A SECOND cluster rather than more boxes in the first, because these need the unit cylinder.
  // The cost is one draw call and the eighth and last unique geometry. Each spans y=4.45..4.60 and
  // its top is the highest surface on the prop, setting the declared 4.60 m height.
  cluster('plant-cowls', unitCyl, mat('galvanised', 0x9aa0a4), [
    { pos: [-2.6, 4.58, 1.75], scale: [0.62, 0.04, 0.62] }, // fan-cowl-1
    { pos: [-1.4, 4.58, 1.75], scale: [0.62, 0.04, 0.62] }, // fan-cowl-2
    { pos: [-0.2, 4.58, 1.75], scale: [0.62, 0.04, 0.62] }, // fan-cowl-3
    { pos: [-2.0, 4.58, 0.55], scale: [0.62, 0.04, 0.62] }, // fan-cowl-4
    { pos: [-0.8, 4.58, 0.55], scale: [0.62, 0.04, 0.62] }, // fan-cowl-5
  ]);
}

/**
 * True only where a 2D canvas can actually be created. The factory is evaluated OUTSIDE a browser
 * by parts of thaikit's own tooling -- check_part_coverage walks the built Group in node -- and
 * `document.createElement` throws there. A factory that dies outside a DOM is fragile for no
 * benefit: the canvas carries a printed graphic, not structure, so the right behaviour without a
 * DOM is to skip it and still return a complete, walkable model.
 */
function hasCanvas(): boolean {
  return typeof document !== 'undefined' && typeof document.createElement === 'function';
}

function makeGraphicCanvas(w: number, h: number): { c: HTMLCanvasElement; g: CanvasRenderingContext2D } {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return { c, g: c.getContext('2d') as CanvasRenderingContext2D };
}

function asTexture(c: HTMLCanvasElement): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  t.needsUpdate = true;
  return t;
}

/**
 * The makro wordmark, drawn and assigned AFTER material construction.
 *
 * All EIGHT materials declare `textureless`, so createSculptMaterial skips
 * makeProceduralTextureSet entirely -- five synthesised canvases per material, written pixel by
 * pixel in JavaScript at a cost that is the SQUARE of the resolution. That declaration
 * deliberately leaves ONE texture route open: a map assigned to a mesh after its material exists.
 * It is the right route for a printed graphic and the wrong one for a surface finish, and this is
 * the only printed graphic on the prop.
 *
 * Drawn ORTHOGRAPHICALLY. The plate sees the banner obliquely and its blue field carries a
 * left-to-right value falloff that is the studio key; projecting those pixels would bake both the
 * perspective and the lighting into base colour.
 */
function applyCanvasGraphics(root: THREE.Group): void {
  if (!hasCanvas()) return;
  const rt = root.userData.sculptRuntime as any;
  const meshes: Record<string, THREE.Mesh> = rt?.meshes ?? {};

  const banner = meshes['fascia-banner'];
  if (!banner) return;
  // 7.40 x 1.06 m at about 7:1. A canvas map on a BoxGeometry lands on ALL SIX faces, so the tray
  // is shallow (0.16 m) and the wordmark is centred: the slice that wraps onto the 0.16 m edges is
  // blue field either side of the mark, not a squashed piece of the letters.
  const { c, g } = makeGraphicCanvas(1024, 147);
  g.fillStyle = '#2F4C77';                      // the AUTHORED banner albedo, carried here now
  g.fillRect(0, 0, c.width, c.height);          // that the map owns it
  // Lowercase, heavy, tightly set, with the light outline the plate shows around the red.
  const word = 'makro';
  // 118px, not 92: on the plate the mark spans 187 px of a 532 px banner, i.e. 35% of its width,
  // and 92px set it at about 26%. Measured on one horizontal line so both spans carry the same
  // foreshortening.
  g.font = 'bold 118px "Helvetica Neue", Helvetica, Arial, sans-serif';
  g.textBaseline = 'middle';
  g.textAlign = 'center';
  const cx = c.width / 2, cy = c.height * 0.54;
  g.lineWidth = 11;
  g.lineJoin = 'round';
  g.strokeStyle = '#E8EDF4';                    // the pale keyline, drawn UNDER the fill so the
  g.strokeText(word, cx, cy);                   // red stays crisp and the outline reads outside it
  g.fillStyle = '#D8232A';
  g.fillText(word, cx, cy);

  // MUTATED IN PLACE, not cloned. The sibling AIS building cloned here and could afford to -- it
  // shipped at 7 materials of 8. This prop is at 8 of 8 with zero headroom, and a clone is a NINTH
  // material that fails the promote gate. Mutating is safe precisely because sign-blue has exactly
  // one user: the banner is the only mesh that carries it, so nothing else sees the change.
  const m = banner.material as THREE.MeshStandardMaterial;
  m.map = asTexture(c);
  // A `map` MULTIPLIES `color`. Leaving the authored #2F4C77 on the material while the canvas also
  // paints #2F4C77 squares the blue and renders the banner near-black -- and it crushes the red
  // mark to a dark maroon smear. Once a map carries the albedo, the colour slot must be white or
  // it is applied twice. This is the same failure that rendered the sibling's green sign olive.
  m.color = new THREE.Color(0xffffff);
  m.needsUpdate = true;
}

/**
 * Glazing as a SURFACE rather than a window -- a STRUCTURAL property of an exterior shell, which
 * is why this runs from structural-pass and not with the finish work. A prop kit's buildings are
 * only ever seen from outside and carry no interior, so a near-transparent pane over an empty
 * volume reads as a hole punched in the wall, and the shopfront then fails its own review target
 * ('reads as glass with a regular mullion rhythm, NOT as an opening') no matter how right the
 * mullions are. Mostly opaque, low roughness so it catches the key as a highlight. NOTE this
 * plate's glazing reads LIGHT where the sibling AIS building's read dark, so it is deliberately
 * NOT darkened here; darkening it is what would turn the shopfront back into a hole.
 */
function applyShellGlazing(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as any;
  const meshes: Record<string, THREE.Mesh> = rt?.meshes ?? {};

  const glazing = meshes['shopfront-glazing'];
  if (glazing) {
    const m = glazing.material as THREE.MeshPhysicalMaterial;
    m.transmission = 0;
    m.transparent = true;
    m.opacity = 0.92;
    m.roughness = 0.09;
    m.metalness = 0.05;
    m.depthWrite = true;
    m.needsUpdate = true;
  }
}

/**
 * thaikit entry point.
 *
 * The registry records `createObjectModel` as the export and calls it with (spec, options); the
 * generated factory is named for its target and takes options alone. `spec` is accepted and
 * attached for host-side inspection -- the reconstruction data already lives in this module, so it
 * is deliberately not treated as a second source of truth.
 *
 * It also NORMALISES sculptRuntime into the shape thaikit's harness and drawer read. The generator
 * emits Records keyed by id; the harness maps over arrays and returns the object straight across
 * the puppeteer bridge, where a Record of Object3D is circular and fails to serialise -- which
 * surfaces not as an error but as the whole stats object arriving undefined.
 */
export function createObjectModel(
  spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = createMakroStoreBuildingModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  // meso/micro detail: framing, flashing, kerb, roof plant and cowls
  if (passAtLeast('structural-pass')) {
    applyLinearRepetition(root);
    // Not finish work: without it the shopfront is a hole, and the shell is not legible.
    applyShellGlazing(root);
  }
  // the printed graphic belongs to the material pass onward
  if (passAtLeast('material-pass')) applyCanvasGraphics(root);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // PIVOTS: exactly ONE, the root, at the declared base-center. This is a fixed building shell.
    // It has no lid, no wheel and no door leaf that a game will articulate. The roller service
    // shutter was considered and rejected: modelling it as moving would need a `shutter-roll`
    // pivot AND a recess for the slats to roll into, which is interior geometry this prop does not
    // have by design -- and a shutter that opens onto a solid wall is a worse promise than a
    // shutter that is plainly closed. A pivot per component would describe a machine this prop is
    // not, and a named pivot is a promise the kit would then have to keep.
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

    // SOCKETS: ZERO, and that is the correct answer rather than a gap. A named socket is a promise
    // that something attaches there, and nothing attaches to this building. Any the generator
    // emitted positionally ('socket-0') are carried through renamed to their declared mechanism,
    // but the spec declares none.
    const sockets = Object.values((rt.sockets ?? {}) as Record<string, THREE.Object3D>);
    for (const s of sockets) {
      const declared = (s as any)?.userData?.socket?.name;
      if (typeof declared === 'string' && declared) s.name = declared;
    }

    // Colliders are plain DATA, not Object3D, so they carry no .name of their own and would
    // stringify as [object Object] in any name-mapping consumer. Give each the id of the component
    // it owns -- and drop the empty ones: the generator writes a collider entry for every
    // component whether or not one was declared, and a nameless empty proxy in the runtime list
    // reads as a physics shape that exists and does nothing.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups: this prop declares NONE, and promotion checks built against declared as
    // an equality in BOTH directions. Derived rather than assumed empty, so a component that
    // somehow carried a fractureGroup fails the gate loudly instead of being silently dropped.
    const grouped = new Map<string, THREE.Object3D[]>();
    for (const [name, members] of Object.entries(
      (rt.destructionGroups ?? {}) as Record<string, THREE.Object3D[]>,
    )) {
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
      // A COUNT, not the Record -- see the doc comment above.
      nodes: Object.keys(nodes).length,
      pivots,
      sockets,
      colliders,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: rt.sockets ?? {} },
    };
  }
  return root;
}

/**
 * The one-argument entry point: vibe3d's contract, and img2threejs's own.
 *
 * `createObjectModel` above keeps thaikit's historical (spec, options) shape so
 * the harness, the level editor and the Node-side gates carry on unchanged.
 * `spec` has never been passed by any caller -- it is inspection data that is
 * already baked into this module -- so this is the honest signature, and it is
 * what a vibe3d consumer installs and calls.
 */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}
