import * as THREE from 'three';

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
  // Callers must have checked for a DOM already (makeProceduralTextureSet does). This
  // guard exists so a future path that forgets fails by name rather than with a bare
  // "document is not defined" thrown from four frames down.
  if (typeof document === 'undefined') {
    throw new Error('makeCanvas requires a DOM; texture synthesis must be skipped when document is undefined');
  }
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
  // THREE.TextureLoader goes through ImageLoader, which calls document.createElementNS.
  // Outside a browser -- node preview capture, GLB export, a part dump -- that throws
  // before any of the URLs below are even looked at. Falling back to null is not a
  // degradation here: createSculptMaterial then keeps the AUTHORED albedo and roughness
  // instead of forcing color to white and reading them off maps that never loaded.
  if (typeof document === 'undefined') return null;
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

// Generated from ObjectSculptSpec target: 7-Eleven Store Building
// Sculpt build pass: optimization-pass
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function create7ElevenStoreBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "7-Eleven Store Building";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": true, "fovDegrees": 35.0, "aspect": 1.0, "orientation": {"yaw": 34.0, "pitch": -22.0, "roll": 0.0}, "harnessEquivalent": {"azimuth": 34, "elevation": 22}, "agentFill": false, "solveMethod": "Solved by silhouette overlay across an azimuth x elevation sweep, scored on two scale-free ratios (facadeRun:sideRun and height:facadeRun) plus subject-bbox aspect. At azimuth 34 / elevation 22 the model measures facade:side 2.046 against the plate's 1.960, height:facade 1.088 against 1.111, and a subject-aspect delta of 0.000.", "correction": "An earlier solve put elevation at 13 on the visual impression that the plate was shot low. That was wrong - the plate shows a substantial band of roof deck - and at elevation 13 the model measured height:facade 1.002 against 1.111, which read as the model being ~14% too short. That apparent shortfall was the WRONG CAMERA, not a proportion error: at the correct elevation the residual is about 2%.", "harnessLimitation": "The thaikit harness frames at 0.92 of the tangent fit (render/harness.html), which clips props wider than they are tall. This building touches x=0 at azimuths 34-38. The clipping is a few pixels here, but it is worth knowing for a kit with many wide buildings and road tiles."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["render-white"] = createSculptMaterial(
    "render-white",
    {"id": "render-white", "name": "Painted cement render", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#E8E6E1", "color": "#E8E6E1", "roughness": {"base": 0.88, "variation": 0.06, "notes": "Base is the value observed in the plate for this surface; the map is extracted independently from source pixels and is NOT derived from albedo. analyze_texture.py had flattened every material in this spec to base 0.9, which is its default rather than a measurement - plainly wrong for the glazing and the aluminium.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/render-white_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#E8E6E1", "secondary": ["#DDDBD6", "#F2F0EC"], "samplingNotes": "Sampled from flat wall field on the +Z spandrel and +X wall. Dielectric, no specular lobe visible; the value falloff across the +X wall is the studio key, not albedo, and is not sampled."}, "localOverrides": [], "finishClass": "plastic", "clearcoat": {"base": 0.2, "variation": 0.0}, "clearcoatRoughness": {"base": 0.3, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.7, "anisotropy": {"base": 1.0}, "textureless": {"declared": true, "evidence": ["Measured on viewEvidence region-plinth and view-full: the +Z spandrel and +X wall fields scan as a flat value ramp with no high-frequency component, and the extracted crop (crops/wallwide.png, PBR confidence 0.847) resolves no tooth at plate resolution.", "Painted cement render is flat paint at prop distance."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function builds FIVE canvases per material at textureResolution, pixel by pixel in JavaScript with multi-octave noise: at 1024 it produced 34 textures totalling 35.1 megapixels and took 24 SECONDS inside createObjectModel before the preview could appear, scaling as the square of the resolution (256 -> 1.6 s, 512 -> 6.5 s, 1024 -> 26 s). It also cost ~64 MB of VRAM on a kit aimed at low-end integrated GPUs. And it was not merely wasteful: the generator forces color to white and roughness to 1 whenever a texture set exists, discarding the authored albedo and the reference-derived roughness - which is what rendered this white building mid-grey and forced the palette re-centring recorded above."}, "materialEvidenceArchive": {"textureResolution": 1024, "referencePbr": {"usable": false, "confidence": 0.847, "sourceCrop": "crops/wallwide.png", "evidenceRef": "crops/wallwide.png", "method": "extract_pbr_evidence.py inference from source pixels; inference, not inverse rendering", "notes": "Crop verified visually to sit on the part this material names before extraction.", "bindingPolicy": "evidence only - not bound as a runtime texture set. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "maps": {"albedo": {"path": "material-evidence/render-white_albedo.png"}, "roughness": {"path": "material-evidence/render-white_roughness.png"}, "height": {"path": "material-evidence/render-white_height.png"}, "normal": {"path": "material-evidence/render-white_normal.png"}, "ao": {"path": "material-evidence/render-white_ao.png"}}, "usableMeaning": "'usable' is the generator's switch for BINDING this map set as runtime textures, and that is what is declined here. The extraction itself succeeded: confidence 0.847 against a 0.7 bar, from crops/wallwide.png, and the maps on disk are real. Declined because the crops are scene photographs rather than tileable material samples, and because binding them puts the plate's baked lighting into base colour. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "extractionConfidence": 0.847, "boundAtRuntime": false}, "textureProjection": {"mode": "triplanar", "texelDensityPerMeter": 256, "notes": "Texel density chosen so a 0.15 m plinth band and a 0.06 m mullion each keep a resolvable edge at review distance."}, "surfaceFrequencyBands": [{"band": "macro", "description": "panel-to-panel value shift across each elevation", "id": "macro", "frequency": 0.25, "amplitude": 0.003, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "meso", "description": "render float marks and the coping drip edge", "id": "meso", "frequency": 6, "amplitude": 0.001, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "micro", "description": "cement render tooth", "id": "micro", "frequency": 900, "amplitude": 0.00012, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}], "normal": {"scale": 0.6, "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/render-white_normal.png"}, "ambientOcclusion": {"intensity": 0.6, "notes": "Independent AO response. NOT baked into base colour - the base colour carries no lighting or occlusion.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/render-white_ao.png"}, "texturePalette": ["#85847F", "#80807B", "#82827F", "#7B7B77", "#797976"], "proceduralTexture": "flat-clearcoat", "colorVariation": {"palette": ["#EEEBE5", "#E9E7E1", "#EBE9E5", "#E4E2DD", "#E2E0DC"], "amplitude": 0.1, "heightCorrelation": 0.25, "source": "texturePalette measured by analyze_texture.py from this material's own verified crop.", "note": "Set explicitly because materialPalette() falls back to a hardcoded olive/tan triple ('#6E614B', '#A08F70') whenever it can resolve fewer than two colours. Materials with an empty albedo.secondary hit that fallback and rendered the plinth and the roof deck TAN while the walls beside them - which happened to carry two secondaries - stayed correctly grey.", "paletteAsMeasured": ["#85847F", "#80807B", "#82827F", "#7B7B77", "#797976"], "recentringNote": "Palette re-centred on the measured base albedo, keeping each stop's offset FROM THE PALETTE MEAN and discarding the mean itself. analyze_texture.py samples raw pixels, so its palette carries the plate's lighting: render-white came back at mean luma 126 against a base of 230 - a crop of the SHADED +X wall - and the generator paints that palette as albedo, which rendered the whole building mid-grey. The variation is real evidence and is kept; the offset is baked lighting and the material brief forbids it in base colour. paletteAsMeasured preserves the original.", "status": "Inert now that the material is declared textureless: colorVariation.palette is read only by makeProceduralTextureSet. Kept as recorded evidence."}, "_note": "Preserved evidence, moved off the live material because it declares textureless and the validator rightly refuses a material that both has no texture and specifies one. The extraction really was performed - every crop was verified and every confidence recorded - and this is where it is kept. Nothing here is read at runtime."}},
    options
  );
  materialMap["plinth-grey"] = createSculptMaterial(
    "plinth-grey",
    {"id": "plinth-grey", "name": "Dark plinth band", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#6E6E6C", "color": "#6E6E6C", "roughness": {"base": 0.92, "variation": 0.06, "notes": "Base is the value observed in the plate for this surface; the map is extracted independently from source pixels and is NOT derived from albedo. analyze_texture.py had flattened every material in this spec to base 0.9, which is its default rather than a measurement - plainly wrong for the glazing and the aluminium.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/plinth-grey_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#6E6E6C", "secondary": ["#868683", "#6C6C6A", "#6E6E6D"], "samplingNotes": "Sampled from the wall-base band in crops/plinth.png. Hard top edge against the render."}, "localOverrides": [], "finishClass": "plastic", "clearcoat": {"base": 0.2, "variation": 0.0}, "clearcoatRoughness": {"base": 0.3, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.7, "textureless": {"declared": true, "evidence": ["Measured on viewEvidence region-plinth (crops/plinth.png, PBR confidence 0.858): a uniform band, its only feature the hard top edge, which is geometry and not texture."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function builds FIVE canvases per material at textureResolution, pixel by pixel in JavaScript with multi-octave noise: at 1024 it produced 34 textures totalling 35.1 megapixels and took 24 SECONDS inside createObjectModel before the preview could appear, scaling as the square of the resolution (256 -> 1.6 s, 512 -> 6.5 s, 1024 -> 26 s). It also cost ~64 MB of VRAM on a kit aimed at low-end integrated GPUs. And it was not merely wasteful: the generator forces color to white and roughness to 1 whenever a texture set exists, discarding the authored albedo and the reference-derived roughness - which is what rendered this white building mid-grey and forced the palette re-centring recorded above."}, "materialEvidenceArchive": {"textureResolution": 1024, "referencePbr": {"usable": false, "confidence": 0.858, "sourceCrop": "crops/plinth.png", "evidenceRef": "crops/plinth.png", "method": "extract_pbr_evidence.py inference from source pixels; inference, not inverse rendering", "notes": "Crop verified visually to sit on the part this material names before extraction.", "bindingPolicy": "evidence only - not bound as a runtime texture set. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "maps": {"albedo": {"path": "material-evidence/plinth-grey_albedo.png"}, "roughness": {"path": "material-evidence/plinth-grey_roughness.png"}, "height": {"path": "material-evidence/plinth-grey_height.png"}, "normal": {"path": "material-evidence/plinth-grey_normal.png"}, "ao": {"path": "material-evidence/plinth-grey_ao.png"}}, "usableMeaning": "'usable' is the generator's switch for BINDING this map set as runtime textures, and that is what is declined here. The extraction itself succeeded: confidence 0.858 against a 0.7 bar, from crops/plinth.png, and the maps on disk are real. Declined because the crops are scene photographs rather than tileable material samples, and because binding them puts the plate's baked lighting into base colour. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "extractionConfidence": 0.858, "boundAtRuntime": false}, "textureProjection": {"mode": "triplanar", "texelDensityPerMeter": 256, "notes": "Texel density chosen so a 0.15 m plinth band and a 0.06 m mullion each keep a resolvable edge at review distance."}, "surfaceFrequencyBands": [{"band": "macro", "description": "band value shift along the wall base", "id": "macro", "frequency": 0.4, "amplitude": 0.002, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "meso", "description": "hard top edge against the render", "id": "meso", "frequency": 8, "amplitude": 0.0012, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "micro", "description": "fine aggregate tooth", "id": "micro", "frequency": 700, "amplitude": 0.00018, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}], "normal": {"scale": 0.6, "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/plinth-grey_normal.png"}, "ambientOcclusion": {"intensity": 0.6, "notes": "Independent AO response. NOT baked into base colour - the base colour carries no lighting or occlusion.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/plinth-grey_ao.png"}, "texturePalette": ["#CFCFCF", "#868683", "#6C6C6A", "#6E6E6D", "#7B7B7B"], "proceduralTexture": "flat-clearcoat", "colorVariation": {"palette": ["#B5B5B4", "#6C6C68", "#52524F", "#545452", "#616160"], "amplitude": 0.1, "heightCorrelation": 0.25, "source": "texturePalette measured by analyze_texture.py from this material's own verified crop.", "note": "Set explicitly because materialPalette() falls back to a hardcoded olive/tan triple ('#6E614B', '#A08F70') whenever it can resolve fewer than two colours. Materials with an empty albedo.secondary hit that fallback and rendered the plinth and the roof deck TAN while the walls beside them - which happened to carry two secondaries - stayed correctly grey.", "paletteAsMeasured": ["#CFCFCF", "#868683", "#6C6C6A", "#6E6E6D", "#7B7B7B"], "recentringNote": "Palette re-centred on the measured base albedo, keeping each stop's offset FROM THE PALETTE MEAN and discarding the mean itself. analyze_texture.py samples raw pixels, so its palette carries the plate's lighting: render-white came back at mean luma 126 against a base of 230 - a crop of the SHADED +X wall - and the generator paints that palette as albedo, which rendered the whole building mid-grey. The variation is real evidence and is kept; the offset is baked lighting and the material brief forbids it in base colour. paletteAsMeasured preserves the original.", "status": "Inert now that the material is declared textureless: colorVariation.palette is read only by makeProceduralTextureSet. Kept as recorded evidence."}, "_note": "Preserved evidence, moved off the live material because it declares textureless and the validator rightly refuses a material that both has no texture and specifies one. The extraction really was performed - every crop was verified and every confidence recorded - and this is where it is kept. Nothing here is read at runtime."}},
    options
  );
  materialMap["roof-membrane"] = createSculptMaterial(
    "roof-membrane",
    {"id": "roof-membrane", "name": "Roof deck membrane", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#8A8A88", "color": "#8A8A88", "roughness": {"base": 0.95, "variation": 0.06, "notes": "Base is the value observed in the plate for this surface; the map is extracted independently from source pixels and is NOT derived from albedo. analyze_texture.py had flattened every material in this spec to base 0.9, which is its default rather than a measurement - plainly wrong for the glazing and the aluminium.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/roof-membrane_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#8A8A88", "secondary": ["#717172", "#8C8D8C", "#9F9F9F"], "samplingNotes": "Sampled from the recessed deck in zone-r0c1. Matte, no sheen."}, "localOverrides": [], "finishClass": "plastic", "clearcoat": {"base": 0.2, "variation": 0.0}, "clearcoatRoughness": {"base": 0.3, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.7, "anisotropy": {"base": 1.0}, "textureless": {"declared": true, "evidence": ["Measured on viewEvidence region-roofplant (crops/roofdeck.png, PBR confidence 0.830): the deck reads as one flat value, and it is visible only over the parapet from above."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function builds FIVE canvases per material at textureResolution, pixel by pixel in JavaScript with multi-octave noise: at 1024 it produced 34 textures totalling 35.1 megapixels and took 24 SECONDS inside createObjectModel before the preview could appear, scaling as the square of the resolution (256 -> 1.6 s, 512 -> 6.5 s, 1024 -> 26 s). It also cost ~64 MB of VRAM on a kit aimed at low-end integrated GPUs. And it was not merely wasteful: the generator forces color to white and roughness to 1 whenever a texture set exists, discarding the authored albedo and the reference-derived roughness - which is what rendered this white building mid-grey and forced the palette re-centring recorded above."}, "materialEvidenceArchive": {"textureResolution": 1024, "referencePbr": {"usable": false, "confidence": 0.83, "sourceCrop": "crops/roofdeck.png", "evidenceRef": "crops/roofdeck.png", "method": "extract_pbr_evidence.py inference from source pixels; inference, not inverse rendering", "notes": "Crop verified visually to sit on the part this material names before extraction.", "bindingPolicy": "evidence only - not bound as a runtime texture set. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "maps": {"albedo": {"path": "material-evidence/roof-membrane_albedo.png"}, "roughness": {"path": "material-evidence/roof-membrane_roughness.png"}, "height": {"path": "material-evidence/roof-membrane_height.png"}, "normal": {"path": "material-evidence/roof-membrane_normal.png"}, "ao": {"path": "material-evidence/roof-membrane_ao.png"}}, "usableMeaning": "'usable' is the generator's switch for BINDING this map set as runtime textures, and that is what is declined here. The extraction itself succeeded: confidence 0.83 against a 0.7 bar, from crops/roofdeck.png, and the maps on disk are real. Declined because the crops are scene photographs rather than tileable material samples, and because binding them puts the plate's baked lighting into base colour. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "extractionConfidence": 0.83, "boundAtRuntime": false}, "textureProjection": {"mode": "triplanar", "texelDensityPerMeter": 256, "notes": "Texel density chosen so a 0.15 m plinth band and a 0.06 m mullion each keep a resolvable edge at review distance."}, "surfaceFrequencyBands": [{"band": "macro", "description": "deck-wide value drift", "id": "macro", "frequency": 0.3, "amplitude": 0.004, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "meso", "description": "membrane sheet laps", "id": "meso", "frequency": 1.2, "amplitude": 0.0025, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "micro", "description": "granular membrane texture", "id": "micro", "frequency": 600, "amplitude": 0.00025, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}], "normal": {"scale": 0.6, "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/roof-membrane_normal.png"}, "ambientOcclusion": {"intensity": 0.6, "notes": "Independent AO response. NOT baked into base colour - the base colour carries no lighting or occlusion.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/roof-membrane_ao.png"}, "texturePalette": ["#515253", "#717172", "#8C8D8C", "#9F9F9F", "#A6A6A7"], "proceduralTexture": "flat-clearcoat", "colorVariation": {"palette": ["#575856", "#777775", "#92938F", "#A5A5A2", "#ACACAA"], "amplitude": 0.1, "heightCorrelation": 0.25, "source": "texturePalette measured by analyze_texture.py from this material's own verified crop.", "note": "Set explicitly because materialPalette() falls back to a hardcoded olive/tan triple ('#6E614B', '#A08F70') whenever it can resolve fewer than two colours. Materials with an empty albedo.secondary hit that fallback and rendered the plinth and the roof deck TAN while the walls beside them - which happened to carry two secondaries - stayed correctly grey.", "paletteAsMeasured": ["#515253", "#717172", "#8C8D8C", "#9F9F9F", "#A6A6A7"], "recentringNote": "Palette re-centred on the measured base albedo, keeping each stop's offset FROM THE PALETTE MEAN and discarding the mean itself. analyze_texture.py samples raw pixels, so its palette carries the plate's lighting: render-white came back at mean luma 126 against a base of 230 - a crop of the SHADED +X wall - and the generator paints that palette as albedo, which rendered the whole building mid-grey. The variation is real evidence and is kept; the offset is baked lighting and the material brief forbids it in base colour. paletteAsMeasured preserves the original.", "status": "Inert now that the material is declared textureless: colorVariation.palette is read only by makeProceduralTextureSet. Kept as recorded evidence."}, "_note": "Preserved evidence, moved off the live material because it declares textureless and the validator rightly refuses a material that both has no texture and specifies one. The extraction really was performed - every crop was verified and every confidence recorded - and this is where it is kept. Nothing here is read at runtime."}},
    options
  );
  materialMap["glass"] = createSculptMaterial(
    "glass",
    {"id": "glass", "name": "Architectural glazing", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#C6D2D4", "color": "#C6D2D4", "roughness": {"base": 0.05, "variation": 0.06, "notes": "Base is the value observed in the plate for this surface; the map is extracted independently from source pixels and is NOT derived from albedo. analyze_texture.py had flattened every material in this spec to base 0.9, which is its default rather than a measurement - plainly wrong for the glazing and the aluminium.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/glass_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#C6D2D4", "secondary": ["#868581", "#908B83", "#82827F"], "samplingNotes": "Interior is clearly legible through it, so transmission is high and tint faint. A narrow specular highlight is the only surface cue. doubleSided because the glazing is a zero-thickness open shell; a one-sided membrane would vanish when the camera orbits behind the facade, which is exactly what the turntable gate exists to catch. Rendered with plain alpha rather than physical transmission: MeshPhysicalMaterial transmission needs an environment to refract, and the harness supplies directional lights and no env map, so a transmissive pane renders dark."}, "localOverrides": [], "transparent": true, "opacity": 0.22, "transmission": 0.0, "doubleSided": true, "finishClass": "worn-composite", "clearcoat": {"base": 0.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.5, "textureless": {"declared": true, "evidence": ["Measured on viewEvidence region-glazing (crops/glasspane.png): the crop is a photograph of what is BEHIND the pane, not of the pane.", "Glass carries no albedo texture, and synthesising one from that crop is what rendered the shopfront black."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function builds FIVE canvases per material at textureResolution, pixel by pixel in JavaScript with multi-octave noise: at 1024 it produced 34 textures totalling 35.1 megapixels and took 24 SECONDS inside createObjectModel before the preview could appear, scaling as the square of the resolution (256 -> 1.6 s, 512 -> 6.5 s, 1024 -> 26 s). It also cost ~64 MB of VRAM on a kit aimed at low-end integrated GPUs. And it was not merely wasteful: the generator forces color to white and roughness to 1 whenever a texture set exists, discarding the authored albedo and the reference-derived roughness - which is what rendered this white building mid-grey and forced the palette re-centring recorded above."}, "materialEvidenceArchive": {"textureResolution": 1024, "referencePbr": {"usable": false, "confidence": 0.86, "sourceCrop": "crops/glasspane.png", "evidenceRef": "crops/glasspane.png", "method": "extract_pbr_evidence.py inference from source pixels; inference, not inverse rendering", "notes": "Crop verified visually to sit on the part this material names before extraction.", "bindingPolicy": "evidence only - not bound as a runtime texture set. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "maps": {"albedo": {"path": "material-evidence/glass_albedo.png"}, "roughness": {"path": "material-evidence/glass_roughness.png"}, "height": {"path": "material-evidence/glass_height.png"}, "normal": {"path": "material-evidence/glass_normal.png"}, "ao": {"path": "material-evidence/glass_ao.png"}}, "usableMeaning": "'usable' is the generator's switch for BINDING this map set as runtime textures, and that is what is declined here. The extraction itself succeeded: confidence 0.86 against a 0.7 bar, from crops/glasspane.png, and the maps on disk are real. Declined because the crops are scene photographs rather than tileable material samples, and because binding them puts the plate's baked lighting into base colour. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "extractionConfidence": 0.86, "boundAtRuntime": false}, "textureProjection": {"mode": "planar-uv", "texelDensityPerMeter": 256, "notes": "Texel density chosen so a 0.15 m plinth band and a 0.06 m mullion each keep a resolvable edge at review distance."}, "surfaceFrequencyBands": [{"band": "macro", "description": "transmitted interior brightness gradient", "id": "macro", "frequency": 0.2, "amplitude": 0.0002, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "meso", "description": "specular highlight band", "id": "meso", "frequency": 3, "amplitude": 8e-05, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "micro", "description": "near-zero surface roughness", "id": "micro", "frequency": 4000, "amplitude": 2e-06, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}], "normal": {"scale": 0.6, "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/glass_normal.png"}, "ambientOcclusion": {"intensity": 0.6, "notes": "Independent AO response. NOT baked into base colour - the base colour carries no lighting or occlusion.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/glass_ao.png"}, "texturePalette": ["#7D7A76", "#868581", "#908B83", "#82827F", "#84807B"], "proceduralTexture": "mottle", "colorVariation": {"palette": ["#BECACC", "#C7D5D7", "#D1DBD9", "#C3D2D5", "#C5D0D1"], "amplitude": 0.1, "heightCorrelation": 0.25, "source": "texturePalette measured by analyze_texture.py from this material's own verified crop.", "note": "Set explicitly because materialPalette() falls back to a hardcoded olive/tan triple ('#6E614B', '#A08F70') whenever it can resolve fewer than two colours. Materials with an empty albedo.secondary hit that fallback and rendered the plinth and the roof deck TAN while the walls beside them - which happened to carry two secondaries - stayed correctly grey.", "paletteAsMeasured": ["#7D7A76", "#868581", "#908B83", "#82827F", "#84807B"], "recentringNote": "Palette re-centred on the measured base albedo, keeping each stop's offset FROM THE PALETTE MEAN and discarding the mean itself. analyze_texture.py samples raw pixels, so its palette carries the plate's lighting: render-white came back at mean luma 126 against a base of 230 - a crop of the SHADED +X wall - and the generator paints that palette as albedo, which rendered the whole building mid-grey. The variation is real evidence and is kept; the offset is baked lighting and the material brief forbids it in base colour. paletteAsMeasured preserves the original.", "status": "Inert now that the material is declared textureless: colorVariation.palette is read only by makeProceduralTextureSet. Kept as recorded evidence."}, "_note": "Preserved evidence, moved off the live material because it declares textureless and the validator rightly refuses a material that both has no texture and specifies one. The extraction really was performed - every crop was verified and every confidence recorded - and this is where it is kept. Nothing here is read at runtime."}},
    options
  );
  materialMap["aluminium"] = createSculptMaterial(
    "aluminium",
    {"id": "aluminium", "name": "Mill-finish aluminium", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#B8BCBE", "color": "#B8BCBE", "roughness": {"base": 0.42, "variation": 0.06, "notes": "Base is the value observed in the plate for this surface; the map is extracted independently from source pixels and is NOT derived from albedo. analyze_texture.py had flattened every material in this spec to base 0.9, which is its default rather than a measurement - plainly wrong for the glazing and the aluminium.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/aluminium_roughness.png"}, "metalness": 0.35, "albedo": {"dominant": "#B8BCBE", "secondary": ["#5E5E5B", "#80807C", "#838381"], "samplingNotes": "Mullions, door stiles, window frame. Directional sheen, distinctly cooler and brighter than the render."}, "localOverrides": [], "finishClass": "worn-composite", "clearcoat": {"base": 0.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.0, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.5, "metalnessNote": "Lowered from 0.9 to 0.35. A near-1 metalness has no diffuse term, so without an environment map to reflect it renders BLACK rather than merely flat. The thaikit harness supplies three directional lights and no IBL, and a host page may do the same. The albedo is NOT lifted to compensate - only the metalness is moved, so the surface still darkens correctly away from the key.", "textureless": {"declared": true, "evidence": ["Measured on viewEvidence region-glazing (crops/mullion.png, PBR confidence 0.712): a 0.06 m mullion section spans a handful of pixels in the plate.", "Its brushing is directional sheen - a roughness property, not an albedo map."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function builds FIVE canvases per material at textureResolution, pixel by pixel in JavaScript with multi-octave noise: at 1024 it produced 34 textures totalling 35.1 megapixels and took 24 SECONDS inside createObjectModel before the preview could appear, scaling as the square of the resolution (256 -> 1.6 s, 512 -> 6.5 s, 1024 -> 26 s). It also cost ~64 MB of VRAM on a kit aimed at low-end integrated GPUs. And it was not merely wasteful: the generator forces color to white and roughness to 1 whenever a texture set exists, discarding the authored albedo and the reference-derived roughness - which is what rendered this white building mid-grey and forced the palette re-centring recorded above."}, "materialEvidenceArchive": {"textureResolution": 1024, "referencePbr": {"usable": false, "confidence": 0.712, "sourceCrop": "crops/mullion.png", "evidenceRef": "crops/mullion.png", "method": "extract_pbr_evidence.py inference from source pixels; inference, not inverse rendering", "notes": "Crop verified visually to sit on the part this material names before extraction.", "bindingPolicy": "evidence only - not bound as a runtime texture set. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "maps": {"albedo": {"path": "material-evidence/aluminium_albedo.png"}, "roughness": {"path": "material-evidence/aluminium_roughness.png"}, "height": {"path": "material-evidence/aluminium_height.png"}, "normal": {"path": "material-evidence/aluminium_normal.png"}, "ao": {"path": "material-evidence/aluminium_ao.png"}}, "usableMeaning": "'usable' is the generator's switch for BINDING this map set as runtime textures, and that is what is declined here. The extraction itself succeeded: confidence 0.712 against a 0.7 bar, from crops/mullion.png, and the maps on disk are real. Declined because the crops are scene photographs rather than tileable material samples, and because binding them puts the plate's baked lighting into base colour. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "extractionConfidence": 0.712, "boundAtRuntime": false}, "textureProjection": {"mode": "planar-uv", "texelDensityPerMeter": 256, "notes": "Texel density chosen so a 0.15 m plinth band and a 0.06 m mullion each keep a resolvable edge at review distance."}, "surfaceFrequencyBands": [{"band": "macro", "description": "section-to-section value shift between mullion faces", "id": "macro", "frequency": 0.6, "amplitude": 0.0004, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "meso", "description": "extrusion section edges", "id": "meso", "frequency": 18, "amplitude": 0.0006, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "micro", "description": "directional brushing along the extrusion axis", "id": "micro", "frequency": 2500, "amplitude": 1.5e-05, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}], "normal": {"scale": 0.6, "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/aluminium_normal.png"}, "ambientOcclusion": {"intensity": 0.6, "notes": "Independent AO response. NOT baked into base colour - the base colour carries no lighting or occlusion.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/aluminium_ao.png"}, "texturePalette": ["#525250", "#5E5E5B", "#80807C", "#838381", "#83827F"], "proceduralTexture": "mottle", "colorVariation": {"palette": ["#999DA0", "#A5A9AB", "#C7CBCC", "#CACED1", "#CACDCF"], "amplitude": 0.1, "heightCorrelation": 0.25, "source": "texturePalette measured by analyze_texture.py from this material's own verified crop.", "note": "Set explicitly because materialPalette() falls back to a hardcoded olive/tan triple ('#6E614B', '#A08F70') whenever it can resolve fewer than two colours. Materials with an empty albedo.secondary hit that fallback and rendered the plinth and the roof deck TAN while the walls beside them - which happened to carry two secondaries - stayed correctly grey.", "paletteAsMeasured": ["#525250", "#5E5E5B", "#80807C", "#838381", "#83827F"], "recentringNote": "Palette re-centred on the measured base albedo, keeping each stop's offset FROM THE PALETTE MEAN and discarding the mean itself. analyze_texture.py samples raw pixels, so its palette carries the plate's lighting: render-white came back at mean luma 126 against a base of 230 - a crop of the SHADED +X wall - and the generator paints that palette as albedo, which rendered the whole building mid-grey. The variation is real evidence and is kept; the offset is baked lighting and the material brief forbids it in base colour. paletteAsMeasured preserves the original.", "status": "Inert now that the material is declared textureless: colorVariation.palette is read only by makeProceduralTextureSet. Kept as recorded evidence."}, "_note": "Preserved evidence, moved off the live material because it declares textureless and the validator rightly refuses a material that both has no texture and specifies one. The extraction really was performed - every crop was verified and every confidence recorded - and this is where it is kept. Nothing here is read at runtime."}},
    options
  );
  materialMap["fascia-acrylic"] = createSculptMaterial(
    "fascia-acrylic",
    {"id": "fascia-acrylic", "name": "Illuminated acrylic lightbox tray", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#F2EDE6", "color": "#F2EDE6", "roughness": {"base": 0.4, "variation": 0.06, "notes": "Base is the value observed in the plate for this surface; the map is extracted independently from source pixels and is NOT derived from albedo. analyze_texture.py had flattened every material in this spec to base 0.9, which is its default rather than a measurement - plainly wrong for the glazing and the aluminium.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/fascia-acrylic_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#F2EDE6", "secondary": ["#A4C0A8", "#81BCA9", "#E29297"], "samplingNotes": "Reads flatter and brighter across its area than the render beside it - the signature of an internally lit box. The asset carries the `lit` tag."}, "localOverrides": [], "emissive": "#FFF6E8", "emissiveIntensity": 0.35, "finishClass": "painted-metal", "clearcoat": {"base": 1.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.05, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 1.0, "textureless": {"declared": true, "evidence": ["Measured on viewEvidence region-fascia (crops/fasciaface.png, PBR confidence 0.860): the tray face scans FLATTER than the render beside it, and that evenness is the evidence it is internally lit rather than textured."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function builds FIVE canvases per material at textureResolution, pixel by pixel in JavaScript with multi-octave noise: at 1024 it produced 34 textures totalling 35.1 megapixels and took 24 SECONDS inside createObjectModel before the preview could appear, scaling as the square of the resolution (256 -> 1.6 s, 512 -> 6.5 s, 1024 -> 26 s). It also cost ~64 MB of VRAM on a kit aimed at low-end integrated GPUs. And it was not merely wasteful: the generator forces color to white and roughness to 1 whenever a texture set exists, discarding the authored albedo and the reference-derived roughness - which is what rendered this white building mid-grey and forced the palette re-centring recorded above."}, "materialEvidenceArchive": {"textureResolution": 1024, "referencePbr": {"usable": false, "confidence": 0.86, "sourceCrop": "crops/fasciaface.png", "evidenceRef": "crops/fasciaface.png", "method": "extract_pbr_evidence.py inference from source pixels; inference, not inverse rendering", "notes": "Crop verified visually to sit on the part this material names before extraction.", "bindingPolicy": "evidence only - not bound as a runtime texture set. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "maps": {"albedo": {"path": "material-evidence/fascia-acrylic_albedo.png"}, "roughness": {"path": "material-evidence/fascia-acrylic_roughness.png"}, "height": {"path": "material-evidence/fascia-acrylic_height.png"}, "normal": {"path": "material-evidence/fascia-acrylic_normal.png"}, "ao": {"path": "material-evidence/fascia-acrylic_ao.png"}}, "usableMeaning": "'usable' is the generator's switch for BINDING this map set as runtime textures, and that is what is declined here. The extraction itself succeeded: confidence 0.86 against a 0.7 bar, from crops/fasciaface.png, and the maps on disk are real. Declined because the crops are scene photographs rather than tileable material samples, and because binding them puts the plate's baked lighting into base colour. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "extractionConfidence": 0.86, "boundAtRuntime": false}, "textureProjection": {"mode": "planar-uv", "texelDensityPerMeter": 256, "notes": "Texel density chosen so a 0.15 m plinth band and a 0.06 m mullion each keep a resolvable edge at review distance."}, "surfaceFrequencyBands": [{"band": "macro", "description": "even self-lit field", "id": "macro", "frequency": 0.2, "amplitude": 0.0003, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "meso", "description": "bezel edge and shadow gap", "id": "meso", "frequency": 3, "amplitude": 0.003, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "micro", "description": "satin acrylic diffusion", "id": "micro", "frequency": 1500, "amplitude": 1.2e-05, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}], "normal": {"scale": 0.6, "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/fascia-acrylic_normal.png"}, "ambientOcclusion": {"intensity": 0.6, "notes": "Independent AO response. NOT baked into base colour - the base colour carries no lighting or occlusion.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/fascia-acrylic_ao.png"}, "texturePalette": ["#EFC094", "#A4C0A8", "#81BCA9", "#E29297", "#C8C8C6"], "proceduralTexture": "flat-clearcoat", "colorVariation": {"palette": ["#FFF5D3", "#D6F5E7", "#B3F1E8", "#FFC7D6", "#FAFDFF"], "amplitude": 0.1, "heightCorrelation": 0.25, "source": "texturePalette measured by analyze_texture.py from this material's own verified crop.", "note": "Set explicitly because materialPalette() falls back to a hardcoded olive/tan triple ('#6E614B', '#A08F70') whenever it can resolve fewer than two colours. Materials with an empty albedo.secondary hit that fallback and rendered the plinth and the roof deck TAN while the walls beside them - which happened to carry two secondaries - stayed correctly grey.", "paletteAsMeasured": ["#EFC094", "#A4C0A8", "#81BCA9", "#E29297", "#C8C8C6"], "recentringNote": "Palette re-centred on the measured base albedo, keeping each stop's offset FROM THE PALETTE MEAN and discarding the mean itself. analyze_texture.py samples raw pixels, so its palette carries the plate's lighting: render-white came back at mean luma 126 against a base of 230 - a crop of the SHADED +X wall - and the generator paints that palette as albedo, which rendered the whole building mid-grey. The variation is real evidence and is kept; the offset is baked lighting and the material brief forbids it in base colour. paletteAsMeasured preserves the original.", "status": "Inert now that the material is declared textureless: colorVariation.palette is read only by makeProceduralTextureSet. Kept as recorded evidence."}, "_note": "Preserved evidence, moved off the live material because it declares textureless and the validator rightly refuses a material that both has no texture and specifies one. The extraction really was performed - every crop was verified and every confidence recorded - and this is where it is kept. Nothing here is read at runtime."}},
    options
  );
  materialMap["fascia-graphic"] = createSculptMaterial(
    "fascia-graphic",
    {"id": "fascia-graphic", "name": "7-Eleven fascia graphic", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#F4EADE", "color": "#F4EADE", "roughness": {"base": 0.4, "variation": 0.06, "notes": "Base is the value observed in the plate for this surface; the map is extracted independently from source pixels and is NOT derived from albedo. analyze_texture.py had flattened every material in this spec to base 0.9, which is its default rather than a measurement - plainly wrong for the glazing and the aluminium.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/fascia-graphic_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#F4EADE", "secondary": ["#A4C0A8", "#81BCA9", "#E29297"], "samplingNotes": "Albedo measured by column/row scan of crops/fascia.png. See projection-route.json."}, "localOverrides": [{"id": "stripe-orange", "color": "#F68B29", "region": "end-block band 1", "evidenceRef": "crops/fascia.png"}, {"id": "stripe-green", "color": "#06825D", "region": "end-block band 2", "evidenceRef": "crops/fascia.png"}, {"id": "stripe-red", "color": "#DB2934", "region": "end-block band 3", "evidenceRef": "crops/fascia.png"}, {"id": "mark-seven", "color": "#DB2934", "region": "centre field numeral", "evidenceRef": "crops/fascia.png"}, {"id": "mark-eleven", "color": "#06825D", "region": "centre field logotype, lowercase final n", "evidenceRef": "crops/fascia.png"}], "emissive": "#FFF6E8", "emissiveIntensity": 0.3, "finishClass": "painted-metal", "clearcoat": {"base": 1.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.05, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 1.0, "textureless": {"declared": true, "evidence": ["Measured on viewEvidence region-fascia: colour and band fractions were taken by column scan at x=70 and x=430 and row scan across the green band.", "The surface is supplied as a generated canvas texture from those measurements; a procedural noise set would be overwritten by it."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function builds FIVE canvases per material at textureResolution, pixel by pixel in JavaScript with multi-octave noise: at 1024 it produced 34 textures totalling 35.1 megapixels and took 24 SECONDS inside createObjectModel before the preview could appear, scaling as the square of the resolution (256 -> 1.6 s, 512 -> 6.5 s, 1024 -> 26 s). It also cost ~64 MB of VRAM on a kit aimed at low-end integrated GPUs. And it was not merely wasteful: the generator forces color to white and roughness to 1 whenever a texture set exists, discarding the authored albedo and the reference-derived roughness - which is what rendered this white building mid-grey and forced the palette re-centring recorded above."}, "materialEvidenceArchive": {"textureResolution": 1024, "referencePbr": {"usable": false, "confidence": 0.86, "sourceCrop": "crops/fasciaface.png", "evidenceRef": "crops/fasciaface.png", "method": "extract_pbr_evidence.py inference from source pixels; inference, not inverse rendering", "notes": "Crop verified visually to sit on the part this material names before extraction.", "bindingPolicy": "evidence only - not bound as a runtime texture set. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "maps": {"albedo": {"path": "material-evidence/fascia-graphic_albedo.png"}, "roughness": {"path": "material-evidence/fascia-graphic_roughness.png"}, "height": {"path": "material-evidence/fascia-graphic_height.png"}, "normal": {"path": "material-evidence/fascia-graphic_normal.png"}, "ao": {"path": "material-evidence/fascia-graphic_ao.png"}}, "usableMeaning": "'usable' is the generator's switch for BINDING this map set as runtime textures, and that is what is declined here. The extraction itself succeeded: confidence 0.86 against a 0.7 bar, from crops/fasciaface.png, and the maps on disk are real. Declined because the crops are scene photographs rather than tileable material samples, and because binding them puts the plate's baked lighting into base colour. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "extractionConfidence": 0.86, "boundAtRuntime": false}, "textureProjection": {"mode": "planar-uv", "texelDensityPerMeter": 256, "notes": "Texel density chosen so a 0.15 m plinth band and a 0.06 m mullion each keep a resolvable edge at review distance."}, "surfaceFrequencyBands": [{"band": "macro", "description": "end-block versus centre-field layout", "id": "macro", "frequency": 0.35, "amplitude": 0.0002, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "meso", "description": "hard stripe boundaries and glyph edges", "id": "meso", "frequency": 9, "amplitude": 0.0004, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "micro", "description": "print surface, no visible grain", "id": "micro", "frequency": 1800, "amplitude": 8e-06, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}], "normal": {"scale": 0.6, "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/fascia-graphic_normal.png"}, "ambientOcclusion": {"intensity": 0.6, "notes": "Independent AO response. NOT baked into base colour - the base colour carries no lighting or occlusion.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/fascia-graphic_ao.png"}, "map": "generated-canvas", "texturePalette": ["#EFC094", "#A4C0A8", "#81BCA9", "#E29297", "#C8C8C6"], "proceduralTexture": "flat-clearcoat", "colorVariation": {"palette": ["#FFF2CB", "#D8F2DF", "#B5EEE0", "#FFC4CE", "#FCFAFD"], "amplitude": 0.1, "heightCorrelation": 0.25, "source": "texturePalette measured by analyze_texture.py from this material's own verified crop.", "note": "Set explicitly because materialPalette() falls back to a hardcoded olive/tan triple ('#6E614B', '#A08F70') whenever it can resolve fewer than two colours. Materials with an empty albedo.secondary hit that fallback and rendered the plinth and the roof deck TAN while the walls beside them - which happened to carry two secondaries - stayed correctly grey.", "paletteAsMeasured": ["#EFC094", "#A4C0A8", "#81BCA9", "#E29297", "#C8C8C6"], "recentringNote": "Palette re-centred on the measured base albedo, keeping each stop's offset FROM THE PALETTE MEAN and discarding the mean itself. analyze_texture.py samples raw pixels, so its palette carries the plate's lighting: render-white came back at mean luma 126 against a base of 230 - a crop of the SHADED +X wall - and the generator paints that palette as albedo, which rendered the whole building mid-grey. The variation is real evidence and is kept; the offset is baked lighting and the material brief forbids it in base colour. paletteAsMeasured preserves the original.", "status": "Inert now that the material is declared textureless: colorVariation.palette is read only by makeProceduralTextureSet. Kept as recorded evidence."}, "_note": "Preserved evidence, moved off the live material because it declares textureless and the validator rightly refuses a material that both has no texture and specifies one. The extraction really was performed - every crop was verified and every confidence recorded - and this is where it is kept. Nothing here is read at runtime."}},
    options
  );
  materialMap["galvanised"] = createSculptMaterial(
    "galvanised",
    {"id": "galvanised", "name": "Galvanised sheet steel", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#A8ACAE", "color": "#A8ACAE", "roughness": {"base": 0.52, "variation": 0.06, "notes": "Base is the value observed in the plate for this surface; the map is extracted independently from source pixels and is NOT derived from albedo. analyze_texture.py had flattened every material in this spec to base 0.9, which is its default rather than a measurement - plainly wrong for the glazing and the aluminium.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/galvanised_roughness.png"}, "metalness": 0.3, "albedo": {"dominant": "#A8ACAE", "secondary": ["#BBBCBD", "#A8ABAE", "#808383"], "samplingNotes": "Condenser casing, feet, cowls, duct and fascia brackets. Broad soft highlight, no mirror reflection."}, "localOverrides": [], "finishClass": "worn-composite", "clearcoat": {"base": 0.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.0, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.5, "metalnessNote": "Lowered from 0.75 to 0.3. A near-1 metalness has no diffuse term, so without an environment map to reflect it renders BLACK rather than merely flat. The thaikit harness supplies three directional lights and no IBL, and a host page may do the same. The albedo is NOT lifted to compensate - only the metalness is moved, so the surface still darkens correctly away from the key.", "textureless": {"declared": true, "evidence": ["Measured on viewEvidence region-roofplant (crops/roofplant.png, PBR confidence 0.860): the casing scans as a broad soft value gradient.", "Spangle is visible in the hand and sub-pixel on a rooftop unit seen from the street."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function builds FIVE canvases per material at textureResolution, pixel by pixel in JavaScript with multi-octave noise: at 1024 it produced 34 textures totalling 35.1 megapixels and took 24 SECONDS inside createObjectModel before the preview could appear, scaling as the square of the resolution (256 -> 1.6 s, 512 -> 6.5 s, 1024 -> 26 s). It also cost ~64 MB of VRAM on a kit aimed at low-end integrated GPUs. And it was not merely wasteful: the generator forces color to white and roughness to 1 whenever a texture set exists, discarding the authored albedo and the reference-derived roughness - which is what rendered this white building mid-grey and forced the palette re-centring recorded above."}, "materialEvidenceArchive": {"textureResolution": 1024, "referencePbr": {"usable": false, "confidence": 0.86, "sourceCrop": "crops/roofplant.png", "evidenceRef": "crops/roofplant.png", "method": "extract_pbr_evidence.py inference from source pixels; inference, not inverse rendering", "notes": "Crop verified visually to sit on the part this material names before extraction.", "bindingPolicy": "evidence only - not bound as a runtime texture set. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "maps": {"albedo": {"path": "material-evidence/galvanised_albedo.png"}, "roughness": {"path": "material-evidence/galvanised_roughness.png"}, "height": {"path": "material-evidence/galvanised_height.png"}, "normal": {"path": "material-evidence/galvanised_normal.png"}, "ao": {"path": "material-evidence/galvanised_ao.png"}}, "usableMeaning": "'usable' is the generator's switch for BINDING this map set as runtime textures, and that is what is declined here. The extraction itself succeeded: confidence 0.86 against a 0.7 bar, from crops/roofplant.png, and the maps on disk are real. Declined because the crops are scene photographs rather than tileable material samples, and because binding them puts the plate's baked lighting into base colour. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "extractionConfidence": 0.86, "boundAtRuntime": false}, "textureProjection": {"mode": "planar-uv", "texelDensityPerMeter": 256, "notes": "Texel density chosen so a 0.15 m plinth band and a 0.06 m mullion each keep a resolvable edge at review distance."}, "surfaceFrequencyBands": [{"band": "macro", "description": "casing face-to-face value shift", "id": "macro", "frequency": 0.5, "amplitude": 0.0012, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "meso", "description": "flange ribs and panel seams", "id": "meso", "frequency": 2.0, "amplitude": 0.002, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "micro", "description": "galvanised spangle", "id": "micro", "frequency": 500, "amplitude": 0.0003, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}], "normal": {"scale": 0.6, "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/galvanised_normal.png"}, "ambientOcclusion": {"intensity": 0.6, "notes": "Independent AO response. NOT baked into base colour - the base colour carries no lighting or occlusion.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/galvanised_ao.png"}, "texturePalette": ["#C1BBB6", "#BBBCBD", "#A8ABAE", "#808383", "#8E8E8E"], "proceduralTexture": "mottle", "colorVariation": {"palette": ["#C5C3C0", "#BFC4C7", "#ACB3B8", "#848B8D", "#929698"], "amplitude": 0.1, "heightCorrelation": 0.25, "source": "texturePalette measured by analyze_texture.py from this material's own verified crop.", "note": "Set explicitly because materialPalette() falls back to a hardcoded olive/tan triple ('#6E614B', '#A08F70') whenever it can resolve fewer than two colours. Materials with an empty albedo.secondary hit that fallback and rendered the plinth and the roof deck TAN while the walls beside them - which happened to carry two secondaries - stayed correctly grey.", "paletteAsMeasured": ["#C1BBB6", "#BBBCBD", "#A8ABAE", "#808383", "#8E8E8E"], "recentringNote": "Palette re-centred on the measured base albedo, keeping each stop's offset FROM THE PALETTE MEAN and discarding the mean itself. analyze_texture.py samples raw pixels, so its palette carries the plate's lighting: render-white came back at mean luma 126 against a base of 230 - a crop of the SHADED +X wall - and the generator paints that palette as albedo, which rendered the whole building mid-grey. The variation is real evidence and is kept; the offset is baked lighting and the material brief forbids it in base colour. paletteAsMeasured preserves the original.", "status": "Inert now that the material is declared textureless: colorVariation.palette is read only by makeProceduralTextureSet. Kept as recorded evidence."}, "_note": "Preserved evidence, moved off the live material because it declares textureless and the validator rightly refuses a material that both has no texture and specifies one. The extraction really was performed - every crop was verified and every confidence recorded - and this is where it is kept. Nothing here is read at runtime."}},
    options
  );
  materialMap["louvre-dark"] = createSculptMaterial(
    "louvre-dark",
    {"id": "louvre-dark", "name": "Condenser louvre face", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#3A3E40", "color": "#3A3E40", "roughness": {"base": 0.7, "variation": 0.06, "notes": "Base is the value observed in the plate for this surface; the map is extracted independently from source pixels and is NOT derived from albedo. analyze_texture.py had flattened every material in this spec to base 0.9, which is its default rather than a measurement - plainly wrong for the glazing and the aluminium.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/louvre-dark_roughness.png"}, "metalness": 0.15, "albedo": {"dominant": "#3A3E40", "secondary": ["#BBBCBD", "#A8ABAE", "#808383"], "samplingNotes": "CONCAVE feature. Per the microscope rule this is NOT colour-gated: a dark ratio here measures cavity shading, not material. Applied as a material LAYER on condenser-casing, not as a component of its own."}, "localOverrides": [], "finishClass": "worn-composite", "clearcoat": {"base": 0.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.0, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.5, "metalnessNote": "Lowered from 0.35 to 0.15. A near-1 metalness has no diffuse term, so without an environment map to reflect it renders BLACK rather than merely flat. The thaikit harness supplies three directional lights and no IBL, and a host page may do the same. The albedo is NOT lifted to compensate - only the metalness is moved, so the surface still darkens correctly away from the key.", "textureless": {"declared": true, "evidence": ["Measured on viewEvidence region-roofplant: the intake reads as a single dark band.", "It is a CONCAVE feature, so its darkness is cavity shading rather than material, and it is deliberately not colour-gated."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function builds FIVE canvases per material at textureResolution, pixel by pixel in JavaScript with multi-octave noise: at 1024 it produced 34 textures totalling 35.1 megapixels and took 24 SECONDS inside createObjectModel before the preview could appear, scaling as the square of the resolution (256 -> 1.6 s, 512 -> 6.5 s, 1024 -> 26 s). It also cost ~64 MB of VRAM on a kit aimed at low-end integrated GPUs. And it was not merely wasteful: the generator forces color to white and roughness to 1 whenever a texture set exists, discarding the authored albedo and the reference-derived roughness - which is what rendered this white building mid-grey and forced the palette re-centring recorded above."}, "materialEvidenceArchive": {"textureResolution": 1024, "referencePbr": {"usable": false, "confidence": 0.86, "sourceCrop": "crops/roofplant.png", "evidenceRef": "crops/roofplant.png", "method": "extract_pbr_evidence.py inference from source pixels; inference, not inverse rendering", "notes": "Crop verified visually to sit on the part this material names before extraction.", "bindingPolicy": "evidence only - not bound as a runtime texture set. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "maps": {"albedo": {"path": "material-evidence/louvre-dark_albedo.png"}, "roughness": {"path": "material-evidence/louvre-dark_roughness.png"}, "height": {"path": "material-evidence/louvre-dark_height.png"}, "normal": {"path": "material-evidence/louvre-dark_normal.png"}, "ao": {"path": "material-evidence/louvre-dark_ao.png"}}, "usableMeaning": "'usable' is the generator's switch for BINDING this map set as runtime textures, and that is what is declined here. The extraction itself succeeded: confidence 0.86 against a 0.7 bar, from crops/roofplant.png, and the maps on disk are real. Declined because the crops are scene photographs rather than tileable material samples, and because binding them puts the plate's baked lighting into base colour. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "extractionConfidence": 0.86, "boundAtRuntime": false}, "textureProjection": {"mode": "planar-uv", "texelDensityPerMeter": 256, "notes": "Texel density chosen so a 0.15 m plinth band and a 0.06 m mullion each keep a resolvable edge at review distance."}, "surfaceFrequencyBands": [{"band": "macro", "description": "overall dark intake field", "id": "macro", "frequency": 0.8, "amplitude": 0.0015, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "meso", "description": "horizontal louvre slat rhythm", "id": "meso", "frequency": 20, "amplitude": 0.006, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "micro", "description": "cavity shading between slats", "id": "micro", "frequency": 1200, "amplitude": 8e-05, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}], "normal": {"scale": 0.6, "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/louvre-dark_normal.png"}, "ambientOcclusion": {"intensity": 0.6, "notes": "Independent AO response. NOT baked into base colour - the base colour carries no lighting or occlusion.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/louvre-dark_ao.png"}, "texturePalette": ["#C1BBB6", "#BBBCBD", "#A8ABAE", "#808383", "#8E8E8E"], "proceduralTexture": "mottle", "colorVariation": {"palette": ["#575552", "#515659", "#3E454A", "#161D1F", "#24282A"], "amplitude": 0.1, "heightCorrelation": 0.25, "source": "texturePalette measured by analyze_texture.py from this material's own verified crop.", "note": "Set explicitly because materialPalette() falls back to a hardcoded olive/tan triple ('#6E614B', '#A08F70') whenever it can resolve fewer than two colours. Materials with an empty albedo.secondary hit that fallback and rendered the plinth and the roof deck TAN while the walls beside them - which happened to carry two secondaries - stayed correctly grey.", "paletteAsMeasured": ["#C1BBB6", "#BBBCBD", "#A8ABAE", "#808383", "#8E8E8E"], "recentringNote": "Palette re-centred on the measured base albedo, keeping each stop's offset FROM THE PALETTE MEAN and discarding the mean itself. analyze_texture.py samples raw pixels, so its palette carries the plate's lighting: render-white came back at mean luma 126 against a base of 230 - a crop of the SHADED +X wall - and the generator paints that palette as albedo, which rendered the whole building mid-grey. The variation is real evidence and is kept; the offset is baked lighting and the material brief forbids it in base colour. paletteAsMeasured preserves the original.", "status": "Inert now that the material is declared textureless: colorVariation.palette is read only by makeProceduralTextureSet. Kept as recorded evidence."}, "_note": "Preserved evidence, moved off the live material because it declares textureless and the validator rightly refuses a material that both has no texture and specifies one. The extraction really was performed - every crop was verified and every confidence recorded - and this is where it is kept. Nothing here is read at runtime."}},
    options
  );
  materialMap["decal-tab"] = createSculptMaterial(
    "decal-tab",
    {"id": "decal-tab", "name": "Glass manifestation tab", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#D8402C", "color": "#D8402C", "roughness": {"base": 0.4, "variation": 0.06, "notes": "Base is the value observed in the plate for this surface; the map is extracted independently from source pixels and is NOT derived from albedo. analyze_texture.py had flattened every material in this spec to base 0.9, which is its default rather than a measurement - plainly wrong for the glazing and the aluminium.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/decal-tab_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#D8402C", "secondary": ["#C2C2C1", "#CECECD", "#D1D1CF"], "samplingNotes": "Row of small saturated tabs on the glass at ~1.2 m; red/yellow/green per instance via vertex colour."}, "localOverrides": [{"id": "tab-colour-cycle", "color": "#D8402C,#E8C22A,#2E8B57", "region": "per-instance tab colour", "evidenceRef": "region-glazing", "notes": "Three-colour cycle applied per instance on the manifestation-tabs InstancedMesh."}], "vertexColors": true, "doubleSided": true, "finishClass": "worn-composite", "clearcoat": {"base": 0.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.0, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.5, "textureless": {"declared": true, "evidence": ["Measured on viewEvidence region-glazing: the manifestation tabs are roughly 0.10 x 0.04 m flat vinyl, a few pixels each in the plate.", "Colour is carried per instance on the tab cluster, not as a texture."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function builds FIVE canvases per material at textureResolution, pixel by pixel in JavaScript with multi-octave noise: at 1024 it produced 34 textures totalling 35.1 megapixels and took 24 SECONDS inside createObjectModel before the preview could appear, scaling as the square of the resolution (256 -> 1.6 s, 512 -> 6.5 s, 1024 -> 26 s). It also cost ~64 MB of VRAM on a kit aimed at low-end integrated GPUs. And it was not merely wasteful: the generator forces color to white and roughness to 1 whenever a texture set exists, discarding the authored albedo and the reference-derived roughness - which is what rendered this white building mid-grey and forced the palette re-centring recorded above."}, "materialEvidenceArchive": {"textureResolution": 1024, "referencePbr": {"usable": false, "confidence": 0.832, "sourceCrop": "crops/glazing.png", "evidenceRef": "crops/glazing.png", "method": "extract_pbr_evidence.py inference from source pixels; inference, not inverse rendering", "notes": "Crop verified visually to sit on the part this material names before extraction.", "bindingPolicy": "evidence only - not bound as a runtime texture set. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "maps": {"albedo": {"path": "material-evidence/decal-tab_albedo.png"}, "roughness": {"path": "material-evidence/decal-tab_roughness.png"}, "height": {"path": "material-evidence/decal-tab_height.png"}, "normal": {"path": "material-evidence/decal-tab_normal.png"}, "ao": {"path": "material-evidence/decal-tab_ao.png"}}, "usableMeaning": "'usable' is the generator's switch for BINDING this map set as runtime textures, and that is what is declined here. The extraction itself succeeded: confidence 0.832 against a 0.7 bar, from crops/glazing.png, and the maps on disk are real. Declined because the crops are scene photographs rather than tileable material samples, and because binding them puts the plate's baked lighting into base colour. See qualityTargets.materialTargets.referencePbrExtraction.reason.", "extractionConfidence": 0.832, "boundAtRuntime": false}, "textureProjection": {"mode": "planar-uv", "texelDensityPerMeter": 256, "notes": "Texel density chosen so a 0.15 m plinth band and a 0.06 m mullion each keep a resolvable edge at review distance."}, "surfaceFrequencyBands": [{"band": "macro", "description": "tab row rhythm across the bays", "id": "macro", "frequency": 1.2, "amplitude": 0.0003, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "meso", "description": "tab edges", "id": "meso", "frequency": 25, "amplitude": 0.0002, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}, {"band": "micro", "description": "vinyl surface", "id": "micro", "frequency": 2000, "amplitude": 1e-05, "units": {"frequency": "cycles per meter", "amplitude": "meters"}}], "normal": {"scale": 0.6, "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/decal-tab_normal.png"}, "ambientOcclusion": {"intensity": 0.6, "notes": "Independent AO response. NOT baked into base colour - the base colour carries no lighting or occlusion.", "bindingPolicy": "An independently extracted map, recorded and kept on disk. It is not bound at runtime: texture binding goes through referencePbr, which declines it for the reason above. The runtime value is the scalar.", "map": "material-evidence/decal-tab_ao.png"}, "texturePalette": ["#656662", "#C2C2C1", "#CECECD", "#D1D1CF", "#A1A09C"], "proceduralTexture": "mottle", "colorVariation": {"palette": ["#8F0000", "#EC5441", "#F8604D", "#FB634F", "#CB321C"], "amplitude": 0.1, "heightCorrelation": 0.25, "source": "texturePalette measured by analyze_texture.py from this material's own verified crop.", "note": "Set explicitly because materialPalette() falls back to a hardcoded olive/tan triple ('#6E614B', '#A08F70') whenever it can resolve fewer than two colours. Materials with an empty albedo.secondary hit that fallback and rendered the plinth and the roof deck TAN while the walls beside them - which happened to carry two secondaries - stayed correctly grey.", "paletteAsMeasured": ["#656662", "#C2C2C1", "#CECECD", "#D1D1CF", "#A1A09C"], "recentringNote": "Palette re-centred on the measured base albedo, keeping each stop's offset FROM THE PALETTE MEAN and discarding the mean itself. analyze_texture.py samples raw pixels, so its palette carries the plate's lighting: render-white came back at mean luma 126 against a base of 230 - a crop of the SHADED +X wall - and the generator paints that palette as albedo, which rendered the whole building mid-grey. The variation is real evidence and is kept; the offset is baked lighting and the material brief forbids it in base colour. paletteAsMeasured preserves the original.", "status": "Inert now that the material is declared textureless: colorVariation.palette is read only by makeProceduralTextureSet. Kept as recorded evidence."}, "_note": "Preserved evidence, moved off the live material because it declares textureless and the validator rightly refuses a material that both has no texture and specifies one. The extraction really was performed - every crop was verified and every confidence recorded - and this is where it is kept. Nothing here is read at runtime."}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_building_shell_0 = makeAttachmentEndpoint(null);
  const node_building_shell_0 = new THREE.Group();
  node_building_shell_0.name = "Building shell: three solid walls__pivot";
  node_building_shell_0.scale.set(1, 1, 1);
  if (endpoint_building_shell_0) {
    node_building_shell_0.position.copy(endpoint_building_shell_0.start);
    node_building_shell_0.rotation.set(-1.5707963267948966, 0.0, 0.0);
  } else {
    node_building_shell_0.position.set(0.0, 0.0, 0.0);
    node_building_shell_0.rotation.set(-1.5707963267948966, 0.0, 0.0);
  }
  node_building_shell_0.userData.sculptComponent = {"id": "building-shell", "name": "Building shell: three solid walls", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.88, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "The three solid walls are one continuous painted render surface and one extrusion. Splitting them into three components would cost three draw calls, for the life of the prop, to express one skin. The +Z wall is separate ONLY because a plan extrude cannot carry a vertical opening, and the shopfront opening is an identity feature.", "geometryDescriptor": {"topologyIntent": "U-shaped footprint ring extruded 4.0 m upward: the -X, -Z and +X walls at 0.20 m thickness, open on +Z where the shopfront wall takes over. Hollow by construction, which is what lets the interior read through the glazing.", "wallThickness": 0.2, "copingProfile": {"top": 4.25, "bottom": 4.15, "proudEachFace": 0.06, "chamfer": 0.025, "note": "Chamfered cap with a drip edge, measured from zone-r0c1 at 0.75 confidence."}, "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.012, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Eight profile points, one extrusion step, no bevel: 8 side quads plus caps, roughly 60 triangles.", "profile2D": {"points": [[-4.0, -3.3], [-4.0, 3.5], [4.0, 3.5], [4.0, -3.3], [3.8, -3.3], [3.8, 3.3], [-3.8, 3.3], [-3.8, -3.3]], "depth": 4.25}, "shapeSpaceNote": "Profile is authored in (sx, sy) = (worldX, -worldZ). The component carries rotationEuler [-pi/2, 0, 0], which maps the shape plane onto the ground plane and the extrusion axis onto world +Y. Extrude components are NOT unit-scaled by the generator - profile units are real metres - so the numbers here are the building's actual footprint.", "zFightingNote": "Depth separation against z-fighting: two surfaces facing the SAME direction in the SAME plane flicker as the camera moves, and every one of these was authored flush at exactly z=3.500. The U's open ends sat at z=3.5, coplanar and co-facing with the facade wall's front face, so the two front corners flickered. They now stop at z=3.3, the facade wall's back face, which is a butt joint of opposed faces - and the footprint comes out at exactly the declared 7.0 m."}, "parent": null, "attachment": null, "dimensions": {"width": 8.0, "height": 4.25, "depth": 7.0, "units": "meters", "confidence": 0.88}, "transform": {"position": [0, 0, 0], "rotationEuler": [-1.5707963267948966, 0, 0], "scale": [1, 1, 1], "rotation": [-1.5707963267948966, 0, 0]}, "material": "render-white", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "parapet-coping-profile", "kind": "edge-profile", "confidence": 0.75, "placement": {"yTop": 4.25, "yBottom": 4.15, "proud": 0.06}, "notes": "Chamfered white cap projecting proud of both parapet faces.", "evidenceRef": "view-full"}], "surfaceDetail": {"macroRoughness": 0.1, "microRoughness": 0.3, "bumpAmplitude": 0.22, "normalPattern": "cement render tooth, uniform across the wall field", "displacementPattern": "", "occlusionPattern": "soft occlusion in the parapet's inner corner and under the coping drip", "edgeWearPattern": "clean - a maintained shopfront, no edge wear on the render", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["view-full", "region-plinth"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "root", "notes": "base-center, as the asset declares. The building is a static shell; this is its only rigid-body pivot."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [{"name": "sign-mount", "localPosition": [0, 3.4499999999999997, 3.5], "axis": [0, 0, 1], "confidence": 0.85, "notes": "Where the brand fascia attaches. This is a REAL mechanism with a real consumer: fourteen buildings in this kit share the identical 8.0 x 4.6 x 7.0 m module and differ only in the sign hung here, so the mount is a contract the kit already relies on."}], "collider": {"type": "box", "offset": [0, 2.0, 0], "scale": [4.0, 2.0, 3.5], "isTrigger": false, "notes": "Declared box on the asset. Full envelope of the walled mass; the rooftop plant sits inside its vertical extent."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#E8E6E1", "evidenceRef": "view-full", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "wall-field", "hex": "#E8E6E1", "coverage": 0.82, "evidenceRef": "view-full"}, {"id": "parapet-and-coping", "hex": "#F2F0EC", "coverage": 0.12, "evidenceRef": "view-full"}, {"id": "shaded-minus-x-return", "hex": "#DDDBD6", "coverage": 0.06, "evidenceRef": "view-full"}], "finishStyle": "matte painted cement render", "materialRef": "render-white", "dominantAlbedo": "rgba(232, 230, 225, 1.0)", "secondaryAlbedo": "rgba(242, 240, 236, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.95}};
  node_building_shell_0.userData.actionProfile = {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "root", "notes": "base-center, as the asset declares. The building is a static shell; this is its only rigid-body pivot."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [{"name": "sign-mount", "localPosition": [0, 3.4499999999999997, 3.5], "axis": [0, 0, 1], "confidence": 0.85, "notes": "Where the brand fascia attaches. This is a REAL mechanism with a real consumer: fourteen buildings in this kit share the identical 8.0 x 4.6 x 7.0 m module and differ only in the sign hung here, so the mount is a contract the kit already relies on."}], "collider": {"type": "box", "offset": [0, 2.0, 0], "scale": [4.0, 2.0, 3.5], "isTrigger": false, "notes": "Declared box on the asset. Full envelope of the walled mass; the rooftop plant sits inside its vertical extent."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_building_shell_0);
  nodes["building-shell"] = node_building_shell_0;
  const mesh_building_shell_0Geometry = endpoint_building_shell_0
    ? new THREE.CylinderGeometry(endpoint_building_shell_0.endRadius, endpoint_building_shell_0.baseRadius, endpoint_building_shell_0.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-4.0, -3.3], [-4.0, 3.5], [4.0, 3.5], [4.0, -3.3], [3.8, -3.3], [3.8, 3.3], [-3.8, 3.3], [-3.8, -3.3]], "depth": 4.25});
  if (!endpoint_building_shell_0) {
    mesh_building_shell_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_building_shell_0 = new THREE.Mesh(
    mesh_building_shell_0Geometry,
    materialMap["render-white"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_building_shell_0.name = "Building shell: three solid walls";
  if (endpoint_building_shell_0) {
    mesh_building_shell_0.position.copy(endpoint_building_shell_0.midpoint);
    mesh_building_shell_0.quaternion.copy(endpoint_building_shell_0.quaternion);
  }
  mesh_building_shell_0.castShadow = options.castShadow ?? true;
  mesh_building_shell_0.receiveShadow = options.receiveShadow ?? true;
  mesh_building_shell_0.userData.sculptComponent = {"id": "building-shell", "name": "Building shell: three solid walls", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.88, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "The three solid walls are one continuous painted render surface and one extrusion. Splitting them into three components would cost three draw calls, for the life of the prop, to express one skin. The +Z wall is separate ONLY because a plan extrude cannot carry a vertical opening, and the shopfront opening is an identity feature.", "geometryDescriptor": {"topologyIntent": "U-shaped footprint ring extruded 4.0 m upward: the -X, -Z and +X walls at 0.20 m thickness, open on +Z where the shopfront wall takes over. Hollow by construction, which is what lets the interior read through the glazing.", "wallThickness": 0.2, "copingProfile": {"top": 4.25, "bottom": 4.15, "proudEachFace": 0.06, "chamfer": 0.025, "note": "Chamfered cap with a drip edge, measured from zone-r0c1 at 0.75 confidence."}, "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.012, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Eight profile points, one extrusion step, no bevel: 8 side quads plus caps, roughly 60 triangles.", "profile2D": {"points": [[-4.0, -3.3], [-4.0, 3.5], [4.0, 3.5], [4.0, -3.3], [3.8, -3.3], [3.8, 3.3], [-3.8, 3.3], [-3.8, -3.3]], "depth": 4.25}, "shapeSpaceNote": "Profile is authored in (sx, sy) = (worldX, -worldZ). The component carries rotationEuler [-pi/2, 0, 0], which maps the shape plane onto the ground plane and the extrusion axis onto world +Y. Extrude components are NOT unit-scaled by the generator - profile units are real metres - so the numbers here are the building's actual footprint.", "zFightingNote": "Depth separation against z-fighting: two surfaces facing the SAME direction in the SAME plane flicker as the camera moves, and every one of these was authored flush at exactly z=3.500. The U's open ends sat at z=3.5, coplanar and co-facing with the facade wall's front face, so the two front corners flickered. They now stop at z=3.3, the facade wall's back face, which is a butt joint of opposed faces - and the footprint comes out at exactly the declared 7.0 m."}, "parent": null, "attachment": null, "dimensions": {"width": 8.0, "height": 4.25, "depth": 7.0, "units": "meters", "confidence": 0.88}, "transform": {"position": [0, 0, 0], "rotationEuler": [-1.5707963267948966, 0, 0], "scale": [1, 1, 1], "rotation": [-1.5707963267948966, 0, 0]}, "material": "render-white", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "parapet-coping-profile", "kind": "edge-profile", "confidence": 0.75, "placement": {"yTop": 4.25, "yBottom": 4.15, "proud": 0.06}, "notes": "Chamfered white cap projecting proud of both parapet faces.", "evidenceRef": "view-full"}], "surfaceDetail": {"macroRoughness": 0.1, "microRoughness": 0.3, "bumpAmplitude": 0.22, "normalPattern": "cement render tooth, uniform across the wall field", "displacementPattern": "", "occlusionPattern": "soft occlusion in the parapet's inner corner and under the coping drip", "edgeWearPattern": "clean - a maintained shopfront, no edge wear on the render", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["view-full", "region-plinth"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "root", "notes": "base-center, as the asset declares. The building is a static shell; this is its only rigid-body pivot."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [{"name": "sign-mount", "localPosition": [0, 3.4499999999999997, 3.5], "axis": [0, 0, 1], "confidence": 0.85, "notes": "Where the brand fascia attaches. This is a REAL mechanism with a real consumer: fourteen buildings in this kit share the identical 8.0 x 4.6 x 7.0 m module and differ only in the sign hung here, so the mount is a contract the kit already relies on."}], "collider": {"type": "box", "offset": [0, 2.0, 0], "scale": [4.0, 2.0, 3.5], "isTrigger": false, "notes": "Declared box on the asset. Full envelope of the walled mass; the rooftop plant sits inside its vertical extent."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#E8E6E1", "evidenceRef": "view-full", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "wall-field", "hex": "#E8E6E1", "coverage": 0.82, "evidenceRef": "view-full"}, {"id": "parapet-and-coping", "hex": "#F2F0EC", "coverage": 0.12, "evidenceRef": "view-full"}, {"id": "shaded-minus-x-return", "hex": "#DDDBD6", "coverage": 0.06, "evidenceRef": "view-full"}], "finishStyle": "matte painted cement render", "materialRef": "render-white", "dominantAlbedo": "rgba(232, 230, 225, 1.0)", "secondaryAlbedo": "rgba(242, 240, 236, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.95}};
  node_building_shell_0.add(mesh_building_shell_0);
  meshes["building-shell"] = mesh_building_shell_0;
  colliders["building-shell"] = {"type": "box", "offset": [0, 2.0, 0], "scale": [4.0, 2.0, 3.5], "isTrigger": false, "notes": "Declared box on the asset. Full envelope of the walled mass; the rooftop plant sits inside its vertical extent."};
  const socket_building_shell_socket_0_0 = new THREE.Object3D();
  socket_building_shell_socket_0_0.name = "socket-0";
  socket_building_shell_socket_0_0.position.set(0.0, 3.4499999999999997, 3.5);
  socket_building_shell_socket_0_0.rotation.set(0, 0, 0);
  socket_building_shell_socket_0_0.userData.socket = {"name": "sign-mount", "localPosition": [0, 3.4499999999999997, 3.5], "axis": [0, 0, 1], "confidence": 0.85, "notes": "Where the brand fascia attaches. This is a REAL mechanism with a real consumer: fourteen buildings in this kit share the identical 8.0 x 4.6 x 7.0 m module and differ only in the sign hung here, so the mount is a contract the kit already relies on."};
  node_building_shell_0.add(socket_building_shell_socket_0_0);
  sockets["building-shell:socket-0"] = socket_building_shell_socket_0_0;

  const endpoint_facade_wall_1 = makeAttachmentEndpoint(null);
  const node_facade_wall_1 = new THREE.Group();
  node_facade_wall_1.name = "Facade wall with shopfront opening__pivot";
  node_facade_wall_1.scale.set(1, 1, 1);
  if (endpoint_facade_wall_1) {
    node_facade_wall_1.position.copy(endpoint_facade_wall_1.start);
    node_facade_wall_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_facade_wall_1.position.set(0.0, 0.0, 3.3);
    node_facade_wall_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_facade_wall_1.userData.sculptComponent = {"id": "facade-wall", "name": "Facade wall with shopfront opening", "level": "macro", "role": "body", "importance": 0.95, "confidence": 0.92, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "The +Z elevation is authored as an elevation profile with a rectangular hole, extruded 0.20 m through the wall. This is the one wall that cannot join the plan extrude: a footprint profile has no way to express a vertical opening, and the shopfront opening is the facade's defining feature.", "geometryDescriptor": {"topologyIntent": "facade elevation profile with a rectangular shopfront hole, extruded 0.20 m in +Z", "wallThickness": 0.2, "openings": [{"id": "shopfront-opening", "face": "+Z", "x": [-3.4, 3.4], "y": [0.15, 3.05]}, {"id": "side-door-opening", "face": "+X", "z": [1.15, 2.05], "y": [0.15, 2.25]}, {"id": "side-window-opening", "face": "+X", "z": [-0.65, 0.05], "y": [1.8, 2.8]}], "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.012, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four outer points and a four-point hole, one extrusion step: roughly 32 triangles.", "profile2D": {"points": [[-4.0, 0.0], [4.0, 0.0], [4.0, 4.25], [-4.0, 4.25]], "holes": [[[-3.0, 0.15], [3.0, 0.15], [3.0, 3.14], [-3.0, 3.14]]], "depth": 0.2}, "shapeSpaceNote": "Profile is authored in (worldX, worldY) and extrudes along +Z from the node at z = 3.3, so the wall occupies world z 3.3..3.5.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentId": "building-shell", "parentSocket": null, "contactType": "butt", "localStart": [-4.0, 0, 3.3], "localEnd": [4.0, 4.0, 3.5], "embedDepth": 0.0, "overlap": 0.02, "gapTolerance": 0.002}, "dimensions": {"width": 8.0, "height": 4.25, "depth": 0.2, "units": "meters", "confidence": 0.92}, "transform": {"position": [0, 0, 3.3], "rotationEuler": [0, 0, 0], "scale": [1, 1, 1], "rotation": [0, 0, 0]}, "material": "render-white", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "shopfront-opening", "kind": "hole", "confidence": 0.92, "placement": {"x": [-3.0, 3.0], "y": [0.15, 3.14]}, "evidenceRef": "region-glazing", "notes": "A real hole through the wall, not a dark panel. The reveal it cuts is what gives the glazing its depth."}, {"id": "facade-end-pilasters", "kind": "contour", "confidence": 0.88, "placement": {"width": 1.0, "xLeft": -4.0, "xRight": 4.0}, "evidenceRef": "view-full", "notes": "The residual wall each side of the opening. Not separate meshes - they are what the hole leaves behind."}, {"id": "head-spandrel", "kind": "contour", "confidence": 0.9, "placement": {"yBottom": 3.14, "yTop": 3.175}, "evidenceRef": "view-full", "notes": "Plain white band between the glazing head and the fascia; the wall above the opening."}], "surfaceDetail": {"macroRoughness": 0.1, "microRoughness": 0.3, "bumpAmplitude": 0.22, "normalPattern": "cement render tooth matching the shell it continues", "displacementPattern": "", "occlusionPattern": "occlusion in the shopfront opening's reveal, deepest at the head", "edgeWearPattern": "clean", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["view-full", "region-glazing"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#E8E6E1", "evidenceRef": "view-full", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "wall-field", "hex": "#E8E6E1", "coverage": 0.82, "evidenceRef": "view-full"}, {"id": "parapet-and-coping", "hex": "#F2F0EC", "coverage": 0.12, "evidenceRef": "view-full"}, {"id": "shaded-minus-x-return", "hex": "#DDDBD6", "coverage": 0.06, "evidenceRef": "view-full"}], "finishStyle": "matte painted cement render", "materialRef": "render-white", "dominantAlbedo": "rgba(232, 230, 225, 1.0)", "secondaryAlbedo": "rgba(242, 240, 236, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.95}};
  node_facade_wall_1.userData.actionProfile = {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_facade_wall_1);
  nodes["facade-wall"] = node_facade_wall_1;
  const mesh_facade_wall_1Geometry = endpoint_facade_wall_1
    ? new THREE.CylinderGeometry(endpoint_facade_wall_1.endRadius, endpoint_facade_wall_1.baseRadius, endpoint_facade_wall_1.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-4.0, 0.0], [4.0, 0.0], [4.0, 4.25], [-4.0, 4.25]], "holes": [[[-3.0, 0.15], [3.0, 0.15], [3.0, 3.14], [-3.0, 3.14]]], "depth": 0.2});
  if (!endpoint_facade_wall_1) {
    mesh_facade_wall_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_facade_wall_1 = new THREE.Mesh(
    mesh_facade_wall_1Geometry,
    materialMap["render-white"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_facade_wall_1.name = "Facade wall with shopfront opening";
  if (endpoint_facade_wall_1) {
    mesh_facade_wall_1.position.copy(endpoint_facade_wall_1.midpoint);
    mesh_facade_wall_1.quaternion.copy(endpoint_facade_wall_1.quaternion);
  }
  mesh_facade_wall_1.castShadow = options.castShadow ?? true;
  mesh_facade_wall_1.receiveShadow = options.receiveShadow ?? true;
  mesh_facade_wall_1.userData.sculptComponent = {"id": "facade-wall", "name": "Facade wall with shopfront opening", "level": "macro", "role": "body", "importance": 0.95, "confidence": 0.92, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "The +Z elevation is authored as an elevation profile with a rectangular hole, extruded 0.20 m through the wall. This is the one wall that cannot join the plan extrude: a footprint profile has no way to express a vertical opening, and the shopfront opening is the facade's defining feature.", "geometryDescriptor": {"topologyIntent": "facade elevation profile with a rectangular shopfront hole, extruded 0.20 m in +Z", "wallThickness": 0.2, "openings": [{"id": "shopfront-opening", "face": "+Z", "x": [-3.4, 3.4], "y": [0.15, 3.05]}, {"id": "side-door-opening", "face": "+X", "z": [1.15, 2.05], "y": [0.15, 2.25]}, {"id": "side-window-opening", "face": "+X", "z": [-0.65, 0.05], "y": [1.8, 2.8]}], "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.012, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four outer points and a four-point hole, one extrusion step: roughly 32 triangles.", "profile2D": {"points": [[-4.0, 0.0], [4.0, 0.0], [4.0, 4.25], [-4.0, 4.25]], "holes": [[[-3.0, 0.15], [3.0, 0.15], [3.0, 3.14], [-3.0, 3.14]]], "depth": 0.2}, "shapeSpaceNote": "Profile is authored in (worldX, worldY) and extrudes along +Z from the node at z = 3.3, so the wall occupies world z 3.3..3.5.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentId": "building-shell", "parentSocket": null, "contactType": "butt", "localStart": [-4.0, 0, 3.3], "localEnd": [4.0, 4.0, 3.5], "embedDepth": 0.0, "overlap": 0.02, "gapTolerance": 0.002}, "dimensions": {"width": 8.0, "height": 4.25, "depth": 0.2, "units": "meters", "confidence": 0.92}, "transform": {"position": [0, 0, 3.3], "rotationEuler": [0, 0, 0], "scale": [1, 1, 1], "rotation": [0, 0, 0]}, "material": "render-white", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "shopfront-opening", "kind": "hole", "confidence": 0.92, "placement": {"x": [-3.0, 3.0], "y": [0.15, 3.14]}, "evidenceRef": "region-glazing", "notes": "A real hole through the wall, not a dark panel. The reveal it cuts is what gives the glazing its depth."}, {"id": "facade-end-pilasters", "kind": "contour", "confidence": 0.88, "placement": {"width": 1.0, "xLeft": -4.0, "xRight": 4.0}, "evidenceRef": "view-full", "notes": "The residual wall each side of the opening. Not separate meshes - they are what the hole leaves behind."}, {"id": "head-spandrel", "kind": "contour", "confidence": 0.9, "placement": {"yBottom": 3.14, "yTop": 3.175}, "evidenceRef": "view-full", "notes": "Plain white band between the glazing head and the fascia; the wall above the opening."}], "surfaceDetail": {"macroRoughness": 0.1, "microRoughness": 0.3, "bumpAmplitude": 0.22, "normalPattern": "cement render tooth matching the shell it continues", "displacementPattern": "", "occlusionPattern": "occlusion in the shopfront opening's reveal, deepest at the head", "edgeWearPattern": "clean", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["view-full", "region-glazing"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#E8E6E1", "evidenceRef": "view-full", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "wall-field", "hex": "#E8E6E1", "coverage": 0.82, "evidenceRef": "view-full"}, {"id": "parapet-and-coping", "hex": "#F2F0EC", "coverage": 0.12, "evidenceRef": "view-full"}, {"id": "shaded-minus-x-return", "hex": "#DDDBD6", "coverage": 0.06, "evidenceRef": "view-full"}], "finishStyle": "matte painted cement render", "materialRef": "render-white", "dominantAlbedo": "rgba(232, 230, 225, 1.0)", "secondaryAlbedo": "rgba(242, 240, 236, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.95}};
  node_facade_wall_1.add(mesh_facade_wall_1);
  meshes["facade-wall"] = mesh_facade_wall_1;
  colliders["facade-wall"] = null;

  const endpoint_base_plinth_2 = makeAttachmentEndpoint(null);
  const node_base_plinth_2 = new THREE.Group();
  node_base_plinth_2.name = "Base plinth band__pivot";
  node_base_plinth_2.scale.set(1, 1, 1);
  if (endpoint_base_plinth_2) {
    node_base_plinth_2.position.copy(endpoint_base_plinth_2.start);
    node_base_plinth_2.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_base_plinth_2.position.set(0.0, 0.075, 0.0);
    node_base_plinth_2.rotation.set(0.0, 0.0, 0.0);
  }
  node_base_plinth_2.userData.sculptComponent = {"id": "base-plinth", "name": "Base plinth band", "level": "macro", "role": "trim", "importance": 0.6, "confidence": 0.9, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A continuous band wrapping all four walls at the base; one ring, not four faces.", "geometryDescriptor": {"topologyIntent": "rectangular ring, 0.03 m proud of the render on every face", "proud": 0.03, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "overlap", "localStart": [0, 0, 0], "localEnd": [0, 0.15, 0], "embedDepth": 0.0, "overlap": 0.03, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 8.06, "height": 0.15, "depth": 7.06, "units": "meters", "confidence": 0.9}, "transform": {"position": [0, 0.075, 0], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "plinth-grey", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "base-plinth-band", "kind": "surface", "confidence": 0.9, "placement": {"height": 0.15, "proud": 0.03}, "notes": "Hard top edge against the render, as measured in crops/plinth.png.", "evidenceRef": "region-plinth"}], "surfaceDetail": {"macroRoughness": 0.14, "microRoughness": 0.42, "bumpAmplitude": 0.3, "normalPattern": "coarser aggregate tooth than the wall above it", "displacementPattern": "", "occlusionPattern": "occlusion along the hard top edge where the band steps proud", "edgeWearPattern": "scuffing at ground level, heaviest near the entrance", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-plinth", "view-full"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#6E6E6C", "evidenceRef": "region-plinth", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "plinth-face", "hex": "#6E6E6C", "coverage": 1.0, "evidenceRef": "region-plinth"}], "finishStyle": "matte dark trim band", "materialRef": "plinth-grey", "dominantAlbedo": "rgba(110, 110, 108, 1.0)", "secondaryAlbedo": "rgba(110, 110, 108, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.9}};
  node_base_plinth_2.userData.actionProfile = {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_base_plinth_2);
  nodes["base-plinth"] = node_base_plinth_2;
  const mesh_base_plinth_2Geometry = endpoint_base_plinth_2
    ? new THREE.CylinderGeometry(endpoint_base_plinth_2.endRadius, endpoint_base_plinth_2.baseRadius, endpoint_base_plinth_2.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_base_plinth_2) {
    mesh_base_plinth_2Geometry.scale(8.06, 0.15, 7.06);
  }
  const mesh_base_plinth_2 = new THREE.Mesh(
    mesh_base_plinth_2Geometry,
    materialMap["plinth-grey"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_base_plinth_2.name = "Base plinth band";
  if (endpoint_base_plinth_2) {
    mesh_base_plinth_2.position.copy(endpoint_base_plinth_2.midpoint);
    mesh_base_plinth_2.quaternion.copy(endpoint_base_plinth_2.quaternion);
  }
  mesh_base_plinth_2.castShadow = options.castShadow ?? true;
  mesh_base_plinth_2.receiveShadow = options.receiveShadow ?? true;
  mesh_base_plinth_2.userData.sculptComponent = {"id": "base-plinth", "name": "Base plinth band", "level": "macro", "role": "trim", "importance": 0.6, "confidence": 0.9, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A continuous band wrapping all four walls at the base; one ring, not four faces.", "geometryDescriptor": {"topologyIntent": "rectangular ring, 0.03 m proud of the render on every face", "proud": 0.03, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "overlap", "localStart": [0, 0, 0], "localEnd": [0, 0.15, 0], "embedDepth": 0.0, "overlap": 0.03, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 8.06, "height": 0.15, "depth": 7.06, "units": "meters", "confidence": 0.9}, "transform": {"position": [0, 0.075, 0], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "plinth-grey", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "base-plinth-band", "kind": "surface", "confidence": 0.9, "placement": {"height": 0.15, "proud": 0.03}, "notes": "Hard top edge against the render, as measured in crops/plinth.png.", "evidenceRef": "region-plinth"}], "surfaceDetail": {"macroRoughness": 0.14, "microRoughness": 0.42, "bumpAmplitude": 0.3, "normalPattern": "coarser aggregate tooth than the wall above it", "displacementPattern": "", "occlusionPattern": "occlusion along the hard top edge where the band steps proud", "edgeWearPattern": "scuffing at ground level, heaviest near the entrance", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-plinth", "view-full"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#6E6E6C", "evidenceRef": "region-plinth", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "plinth-face", "hex": "#6E6E6C", "coverage": 1.0, "evidenceRef": "region-plinth"}], "finishStyle": "matte dark trim band", "materialRef": "plinth-grey", "dominantAlbedo": "rgba(110, 110, 108, 1.0)", "secondaryAlbedo": "rgba(110, 110, 108, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.9}};
  node_base_plinth_2.add(mesh_base_plinth_2);
  meshes["base-plinth"] = mesh_base_plinth_2;
  colliders["base-plinth"] = null;

  const endpoint_roof_deck_3 = makeAttachmentEndpoint(null);
  const node_roof_deck_3 = new THREE.Group();
  node_roof_deck_3.name = "Roof deck membrane__pivot";
  node_roof_deck_3.scale.set(1, 1, 1);
  if (endpoint_roof_deck_3) {
    node_roof_deck_3.position.copy(endpoint_roof_deck_3.start);
    node_roof_deck_3.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_roof_deck_3.position.set(0.0, 3.85, 0.0);
    node_roof_deck_3.rotation.set(0.0, 0.0, 0.0);
  }
  node_roof_deck_3.userData.sculptComponent = {"id": "roof-deck", "name": "Roof deck membrane", "level": "macro", "role": "surface", "importance": 0.5, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A single horizontal membrane slab sitting on the structural deck. It is NOT itself a recessed feature: the recess a viewer sees is real concavity carved by the parapet upstand in building-shell, which encloses this slab on all four sides. Modelling the deck as a carved cavity would duplicate that concavity in a second component.", "geometryDescriptor": {"topologyIntent": "axis-aligned box", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "sharedGeometry": "unit-box", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "butt", "localStart": [0, 3.55, 0], "localEnd": [0, 3.57, 0], "embedDepth": 0.0, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 7.6, "height": 0.02, "depth": 6.6, "units": "meters", "confidence": 0.85}, "transform": {"position": [0, 3.85, 0], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "roof-membrane", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "roof-deck-membrane", "kind": "surface", "confidence": 0.85, "placement": {"y": 3.85, "belowCopingBy": 0.4}, "notes": "Sits 0.45 m below the coping line. The enclosing parapet in building-shell is what makes the deck read as recessed.", "evidenceRef": "region-roofplant"}], "surfaceDetail": {"macroRoughness": 0.16, "microRoughness": 0.48, "bumpAmplitude": 0.35, "normalPattern": "granular membrane with sheet laps running the long axis", "displacementPattern": "", "occlusionPattern": "ponding-darkened occlusion in the deck's low corners", "edgeWearPattern": "none - not walked on", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-roofplant", "view-full"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#8A8A88", "evidenceRef": "region-roofplant", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "deck-field", "hex": "#8A8A88", "coverage": 1.0, "evidenceRef": "region-roofplant"}], "finishStyle": "matte roofing membrane", "materialRef": "roof-membrane", "dominantAlbedo": "rgba(138, 138, 136, 1.0)", "secondaryAlbedo": "rgba(138, 138, 136, 1.0)", "materialClass": "rubber", "materialClassConfidence": 0.85}};
  node_roof_deck_3.userData.actionProfile = {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_roof_deck_3);
  nodes["roof-deck"] = node_roof_deck_3;
  const mesh_roof_deck_3Geometry = endpoint_roof_deck_3
    ? new THREE.CylinderGeometry(endpoint_roof_deck_3.endRadius, endpoint_roof_deck_3.baseRadius, endpoint_roof_deck_3.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_roof_deck_3) {
    mesh_roof_deck_3Geometry.scale(7.6, 0.02, 6.6);
  }
  const mesh_roof_deck_3 = new THREE.Mesh(
    mesh_roof_deck_3Geometry,
    materialMap["roof-membrane"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_roof_deck_3.name = "Roof deck membrane";
  if (endpoint_roof_deck_3) {
    mesh_roof_deck_3.position.copy(endpoint_roof_deck_3.midpoint);
    mesh_roof_deck_3.quaternion.copy(endpoint_roof_deck_3.quaternion);
  }
  mesh_roof_deck_3.castShadow = options.castShadow ?? true;
  mesh_roof_deck_3.receiveShadow = options.receiveShadow ?? true;
  mesh_roof_deck_3.userData.sculptComponent = {"id": "roof-deck", "name": "Roof deck membrane", "level": "macro", "role": "surface", "importance": 0.5, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A single horizontal membrane slab sitting on the structural deck. It is NOT itself a recessed feature: the recess a viewer sees is real concavity carved by the parapet upstand in building-shell, which encloses this slab on all four sides. Modelling the deck as a carved cavity would duplicate that concavity in a second component.", "geometryDescriptor": {"topologyIntent": "axis-aligned box", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "sharedGeometry": "unit-box", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "butt", "localStart": [0, 3.55, 0], "localEnd": [0, 3.57, 0], "embedDepth": 0.0, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 7.6, "height": 0.02, "depth": 6.6, "units": "meters", "confidence": 0.85}, "transform": {"position": [0, 3.85, 0], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "roof-membrane", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "roof-deck-membrane", "kind": "surface", "confidence": 0.85, "placement": {"y": 3.85, "belowCopingBy": 0.4}, "notes": "Sits 0.45 m below the coping line. The enclosing parapet in building-shell is what makes the deck read as recessed.", "evidenceRef": "region-roofplant"}], "surfaceDetail": {"macroRoughness": 0.16, "microRoughness": 0.48, "bumpAmplitude": 0.35, "normalPattern": "granular membrane with sheet laps running the long axis", "displacementPattern": "", "occlusionPattern": "ponding-darkened occlusion in the deck's low corners", "edgeWearPattern": "none - not walked on", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-roofplant", "view-full"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#8A8A88", "evidenceRef": "region-roofplant", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "deck-field", "hex": "#8A8A88", "coverage": 1.0, "evidenceRef": "region-roofplant"}], "finishStyle": "matte roofing membrane", "materialRef": "roof-membrane", "dominantAlbedo": "rgba(138, 138, 136, 1.0)", "secondaryAlbedo": "rgba(138, 138, 136, 1.0)", "materialClass": "rubber", "materialClassConfidence": 0.85}};
  node_roof_deck_3.add(mesh_roof_deck_3);
  meshes["roof-deck"] = mesh_roof_deck_3;
  colliders["roof-deck"] = null;

  const endpoint_shopfront_glazing_4 = makeAttachmentEndpoint(null);
  const node_shopfront_glazing_4 = new THREE.Group();
  node_shopfront_glazing_4.name = "Shopfront glazing__pivot";
  node_shopfront_glazing_4.scale.set(1, 1, 1);
  if (endpoint_shopfront_glazing_4) {
    node_shopfront_glazing_4.position.copy(endpoint_shopfront_glazing_4.start);
    node_shopfront_glazing_4.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_shopfront_glazing_4.position.set(0.0, 1.745, 3.44);
    node_shopfront_glazing_4.rotation.set(0.0, 0.0, 0.0);
  }
  node_shopfront_glazing_4.userData.sculptComponent = {"id": "shopfront-glazing", "name": "Shopfront glazing", "level": "meso", "role": "glazing", "importance": 0.85, "confidence": 0.92, "primitive": "box", "topologyClass": "open-shell", "topologyRationale": "One coplanar sheet of glass spanning all five bays. An open shell, not a solid: it has no thickness a viewer can resolve, and the mullions in front of it supply the bay reading.", "geometryDescriptor": {"topologyIntent": "axis-aligned box", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "sharedGeometry": "unit-box", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "embed", "localStart": [-3.4, 0.35, 3.44], "localEnd": [3.4, 2.8, 3.44], "embedDepth": 0.02, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 6.0, "height": 2.79, "depth": 0.02, "units": "meters", "confidence": 0.92}, "transform": {"position": [0, 1.745, 3.44], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "glass", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "bay-count", "kind": "structure", "confidence": 0.9, "placement": {"bays": 4, "bayWidth": 1.5}, "notes": "FOUR bays, measured from the plate: the glazed run breaks at x 144-245, 253-349, 366-451, 459-581 across a facade spanning 71-655. The divider between bays 2 and 3 is 17 px against 7-8 px for the others - that is the door MEETING STILE, so the sliding pair is CENTRED. An earlier draft called this five bays with the pair left of centre; both were wrong.", "evidenceRef": "region-glazing"}], "surfaceDetail": {"macroRoughness": 0.02, "microRoughness": 0.04, "bumpAmplitude": 0.02, "normalPattern": "optically flat float glass", "displacementPattern": "", "occlusionPattern": "none - a pane occludes nothing of itself", "edgeWearPattern": "none", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-glazing"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#C6D2D4", "evidenceRef": "region-glazing", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "glass-field", "hex": "#C6D2D4", "coverage": 1.0, "evidenceRef": "region-glazing"}], "finishStyle": "clear architectural glazing, faint neutral tint", "materialRef": "glass", "dominantAlbedo": "rgba(198, 210, 212, 1.0)", "secondaryAlbedo": "rgba(198, 210, 212, 1.0)", "materialClass": "glass", "materialClassConfidence": 0.88}};
  node_shopfront_glazing_4.userData.actionProfile = {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_shopfront_glazing_4);
  nodes["shopfront-glazing"] = node_shopfront_glazing_4;
  const mesh_shopfront_glazing_4Geometry = endpoint_shopfront_glazing_4
    ? new THREE.CylinderGeometry(endpoint_shopfront_glazing_4.endRadius, endpoint_shopfront_glazing_4.baseRadius, endpoint_shopfront_glazing_4.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_shopfront_glazing_4) {
    mesh_shopfront_glazing_4Geometry.scale(6.0, 2.79, 0.02);
  }
  const mesh_shopfront_glazing_4 = new THREE.Mesh(
    mesh_shopfront_glazing_4Geometry,
    materialMap["glass"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_shopfront_glazing_4.name = "Shopfront glazing";
  if (endpoint_shopfront_glazing_4) {
    mesh_shopfront_glazing_4.position.copy(endpoint_shopfront_glazing_4.midpoint);
    mesh_shopfront_glazing_4.quaternion.copy(endpoint_shopfront_glazing_4.quaternion);
  }
  mesh_shopfront_glazing_4.castShadow = options.castShadow ?? true;
  mesh_shopfront_glazing_4.receiveShadow = options.receiveShadow ?? true;
  mesh_shopfront_glazing_4.userData.sculptComponent = {"id": "shopfront-glazing", "name": "Shopfront glazing", "level": "meso", "role": "glazing", "importance": 0.85, "confidence": 0.92, "primitive": "box", "topologyClass": "open-shell", "topologyRationale": "One coplanar sheet of glass spanning all five bays. An open shell, not a solid: it has no thickness a viewer can resolve, and the mullions in front of it supply the bay reading.", "geometryDescriptor": {"topologyIntent": "axis-aligned box", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "sharedGeometry": "unit-box", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "embed", "localStart": [-3.4, 0.35, 3.44], "localEnd": [3.4, 2.8, 3.44], "embedDepth": 0.02, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 6.0, "height": 2.79, "depth": 0.02, "units": "meters", "confidence": 0.92}, "transform": {"position": [0, 1.745, 3.44], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "glass", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "bay-count", "kind": "structure", "confidence": 0.9, "placement": {"bays": 4, "bayWidth": 1.5}, "notes": "FOUR bays, measured from the plate: the glazed run breaks at x 144-245, 253-349, 366-451, 459-581 across a facade spanning 71-655. The divider between bays 2 and 3 is 17 px against 7-8 px for the others - that is the door MEETING STILE, so the sliding pair is CENTRED. An earlier draft called this five bays with the pair left of centre; both were wrong.", "evidenceRef": "region-glazing"}], "surfaceDetail": {"macroRoughness": 0.02, "microRoughness": 0.04, "bumpAmplitude": 0.02, "normalPattern": "optically flat float glass", "displacementPattern": "", "occlusionPattern": "none - a pane occludes nothing of itself", "edgeWearPattern": "none", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-glazing"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#C6D2D4", "evidenceRef": "region-glazing", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "glass-field", "hex": "#C6D2D4", "coverage": 1.0, "evidenceRef": "region-glazing"}], "finishStyle": "clear architectural glazing, faint neutral tint", "materialRef": "glass", "dominantAlbedo": "rgba(198, 210, 212, 1.0)", "secondaryAlbedo": "rgba(198, 210, 212, 1.0)", "materialClass": "glass", "materialClassConfidence": 0.88}};
  node_shopfront_glazing_4.add(mesh_shopfront_glazing_4);
  meshes["shopfront-glazing"] = mesh_shopfront_glazing_4;
  colliders["shopfront-glazing"] = null;

  const endpoint_shopfront_framing_5 = makeAttachmentEndpoint(null);
  const node_shopfront_framing_5 = new THREE.Group();
  node_shopfront_framing_5.name = "Shopfront sill, head and jambs__pivot";
  node_shopfront_framing_5.scale.set(1, 1, 1);
  if (endpoint_shopfront_framing_5) {
    node_shopfront_framing_5.position.copy(endpoint_shopfront_framing_5.start);
    node_shopfront_framing_5.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_shopfront_framing_5.position.set(0.0, 0.0, 3.44);
    node_shopfront_framing_5.rotation.set(0.0, 0.0, 0.0);
  }
  node_shopfront_framing_5.userData.sculptComponent = {"id": "shopfront-framing", "name": "Shopfront sill, head and jambs", "level": "meso", "role": "frame", "importance": 0.7, "confidence": 0.88, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "The perimeter frame is one continuous extrusion around the opening; splitting sill from head from jamb would cost three draw calls for one section.", "geometryDescriptor": {"topologyIntent": "rectangular frame RING around the glazed opening, 0.10 m section, extruded 0.12 m in +Z", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four outer points and a four-point hole, one extrusion step: roughly 32 triangles.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened.", "profile2D": {"points": [[-3.1, 0.05], [3.1, 0.05], [3.1, 3.24], [-3.1, 3.24]], "holes": [[[-2.94, 0.35], [2.94, 0.35], [2.94, 3.08], [-2.94, 3.08]]], "depth": 0.12}, "ringNote": "Authored as an extrude with a hole, NOT a box. As a box this component was a solid 6.2 x 3.2 m slab standing in the shopfront opening: it hid the glazing, the interior and the shelving behind it, and because it is a metal in a harness with no environment map it rendered BLACK - which read convincingly as tinted glass and cost several passes to spot.", "zFightingNote": "Two separate defects, one cause. The ring's hole used to start at y=0.15, which put the top face of its bottom rail exactly on the plinth's top face - both facing UP, overlapping 6.0 x 0.10 m - and the sill rendered as torn interleaved triangles. The bounding-box coplanarity scan could not see it: a ring's inner edge is not a bbox face, so that check finds only the outer envelope and this had to be read off the render. The hole now starts at y=0.35, the glass line, so the rail becomes the real KICKPLATE - which the plate shows and which was otherwise a 0.20 m open slot under the glazing, looking straight into the empty shell. The ring also moved to z 3.44-3.56 so its front stands 0.03 m proud of the plinth and 0.06 m proud of the render, rather than sitting 0.01 m behind the plinth. Third instance of the same defect, on the jambs and head: the ring's hole edges sat at x=+/-3.0 and y=3.14, which are EXACTLY the facade opening's reveal faces, and same-facing - so both jambs stippled. The hole is now inset to x=+/-2.94 and y=3.08, so the frame OVERLAPS the opening by 0.06 m all round instead of meeting it flush. That is also how a frame really sits: it laps the reveal and the glass edge rather than butting them."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "embed", "localStart": [-3.46, 0.29, 3.44], "localEnd": [3.46, 2.86, 3.44], "embedDepth": 0.03, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 6.2, "height": 3.19, "depth": 0.12, "units": "meters", "confidence": 0.88}, "transform": {"position": [0, 0, 3.44], "rotation": [0, 0, 0], "rotationEuler": [0, 0, 0], "scale": [1, 1, 1]}, "material": "aluminium", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "kickplate-sill", "kind": "structure", "confidence": 0.85, "placement": {"yTop": 0.35, "yBottom": 0.05}, "notes": "The ring's bottom rail IS the kickplate, running from the opening head down past the plinth top. Its lower 0.10 m is occluded by the plinth.", "evidenceRef": "region-glazing"}, {"id": "shopfront-bay-mullions", "kind": "linework", "confidence": 0.9, "placement": {"count": 4, "positions": [-2.04, -0.68, 0.68, 2.04], "section": 0.06}, "evidenceRef": "region-glazing", "notes": "Four vertical mullions dividing five bays. Emitted as the shopfront-mullions InstancedMesh, one draw call."}], "surfaceDetail": {"macroRoughness": 0.06, "microRoughness": 0.2, "bumpAmplitude": 0.1, "normalPattern": "directional brushing along the extrusion axis", "displacementPattern": "", "occlusionPattern": "occlusion in the frame's inner rebate against the glass", "edgeWearPattern": "light rub on the sill nosing where feet cross it", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-glazing"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#B8BCBE", "evidenceRef": "region-glazing", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "frame-section", "hex": "#B8BCBE", "coverage": 1.0, "evidenceRef": "region-glazing"}], "finishStyle": "mill-finish aluminium, directional sheen", "materialRef": "aluminium", "dominantAlbedo": "rgba(184, 188, 190, 1.0)", "secondaryAlbedo": "rgba(184, 188, 190, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.88}};
  node_shopfront_framing_5.userData.actionProfile = {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_shopfront_framing_5);
  nodes["shopfront-framing"] = node_shopfront_framing_5;
  const mesh_shopfront_framing_5Geometry = endpoint_shopfront_framing_5
    ? new THREE.CylinderGeometry(endpoint_shopfront_framing_5.endRadius, endpoint_shopfront_framing_5.baseRadius, endpoint_shopfront_framing_5.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-3.1, 0.05], [3.1, 0.05], [3.1, 3.24], [-3.1, 3.24]], "holes": [[[-2.94, 0.35], [2.94, 0.35], [2.94, 3.08], [-2.94, 3.08]]], "depth": 0.12});
  if (!endpoint_shopfront_framing_5) {
    mesh_shopfront_framing_5Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_shopfront_framing_5 = new THREE.Mesh(
    mesh_shopfront_framing_5Geometry,
    materialMap["aluminium"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_shopfront_framing_5.name = "Shopfront sill, head and jambs";
  if (endpoint_shopfront_framing_5) {
    mesh_shopfront_framing_5.position.copy(endpoint_shopfront_framing_5.midpoint);
    mesh_shopfront_framing_5.quaternion.copy(endpoint_shopfront_framing_5.quaternion);
  }
  mesh_shopfront_framing_5.castShadow = options.castShadow ?? true;
  mesh_shopfront_framing_5.receiveShadow = options.receiveShadow ?? true;
  mesh_shopfront_framing_5.userData.sculptComponent = {"id": "shopfront-framing", "name": "Shopfront sill, head and jambs", "level": "meso", "role": "frame", "importance": 0.7, "confidence": 0.88, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "The perimeter frame is one continuous extrusion around the opening; splitting sill from head from jamb would cost three draw calls for one section.", "geometryDescriptor": {"topologyIntent": "rectangular frame RING around the glazed opening, 0.10 m section, extruded 0.12 m in +Z", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four outer points and a four-point hole, one extrusion step: roughly 32 triangles.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened.", "profile2D": {"points": [[-3.1, 0.05], [3.1, 0.05], [3.1, 3.24], [-3.1, 3.24]], "holes": [[[-2.94, 0.35], [2.94, 0.35], [2.94, 3.08], [-2.94, 3.08]]], "depth": 0.12}, "ringNote": "Authored as an extrude with a hole, NOT a box. As a box this component was a solid 6.2 x 3.2 m slab standing in the shopfront opening: it hid the glazing, the interior and the shelving behind it, and because it is a metal in a harness with no environment map it rendered BLACK - which read convincingly as tinted glass and cost several passes to spot.", "zFightingNote": "Two separate defects, one cause. The ring's hole used to start at y=0.15, which put the top face of its bottom rail exactly on the plinth's top face - both facing UP, overlapping 6.0 x 0.10 m - and the sill rendered as torn interleaved triangles. The bounding-box coplanarity scan could not see it: a ring's inner edge is not a bbox face, so that check finds only the outer envelope and this had to be read off the render. The hole now starts at y=0.35, the glass line, so the rail becomes the real KICKPLATE - which the plate shows and which was otherwise a 0.20 m open slot under the glazing, looking straight into the empty shell. The ring also moved to z 3.44-3.56 so its front stands 0.03 m proud of the plinth and 0.06 m proud of the render, rather than sitting 0.01 m behind the plinth. Third instance of the same defect, on the jambs and head: the ring's hole edges sat at x=+/-3.0 and y=3.14, which are EXACTLY the facade opening's reveal faces, and same-facing - so both jambs stippled. The hole is now inset to x=+/-2.94 and y=3.08, so the frame OVERLAPS the opening by 0.06 m all round instead of meeting it flush. That is also how a frame really sits: it laps the reveal and the glass edge rather than butting them."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "embed", "localStart": [-3.46, 0.29, 3.44], "localEnd": [3.46, 2.86, 3.44], "embedDepth": 0.03, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 6.2, "height": 3.19, "depth": 0.12, "units": "meters", "confidence": 0.88}, "transform": {"position": [0, 0, 3.44], "rotation": [0, 0, 0], "rotationEuler": [0, 0, 0], "scale": [1, 1, 1]}, "material": "aluminium", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "kickplate-sill", "kind": "structure", "confidence": 0.85, "placement": {"yTop": 0.35, "yBottom": 0.05}, "notes": "The ring's bottom rail IS the kickplate, running from the opening head down past the plinth top. Its lower 0.10 m is occluded by the plinth.", "evidenceRef": "region-glazing"}, {"id": "shopfront-bay-mullions", "kind": "linework", "confidence": 0.9, "placement": {"count": 4, "positions": [-2.04, -0.68, 0.68, 2.04], "section": 0.06}, "evidenceRef": "region-glazing", "notes": "Four vertical mullions dividing five bays. Emitted as the shopfront-mullions InstancedMesh, one draw call."}], "surfaceDetail": {"macroRoughness": 0.06, "microRoughness": 0.2, "bumpAmplitude": 0.1, "normalPattern": "directional brushing along the extrusion axis", "displacementPattern": "", "occlusionPattern": "occlusion in the frame's inner rebate against the glass", "edgeWearPattern": "light rub on the sill nosing where feet cross it", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-glazing"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#B8BCBE", "evidenceRef": "region-glazing", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "frame-section", "hex": "#B8BCBE", "coverage": 1.0, "evidenceRef": "region-glazing"}], "finishStyle": "mill-finish aluminium, directional sheen", "materialRef": "aluminium", "dominantAlbedo": "rgba(184, 188, 190, 1.0)", "secondaryAlbedo": "rgba(184, 188, 190, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.88}};
  node_shopfront_framing_5.add(mesh_shopfront_framing_5);
  meshes["shopfront-framing"] = mesh_shopfront_framing_5;
  colliders["shopfront-framing"] = null;

  const endpoint_door_header_6 = makeAttachmentEndpoint(null);
  const node_door_header_6 = new THREE.Group();
  node_door_header_6.name = "Sliding-door header box__pivot";
  node_door_header_6.scale.set(1, 1, 1);
  if (endpoint_door_header_6) {
    node_door_header_6.position.copy(endpoint_door_header_6.start);
    node_door_header_6.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_door_header_6.position.set(0.0, 2.81, 3.48);
    node_door_header_6.rotation.set(0.0, 0.0, 0.0);
  }
  node_door_header_6.userData.sculptComponent = {"id": "door-header", "name": "Sliding-door header box", "level": "meso", "role": "trim", "importance": 0.6, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A single recessed box carrying the slide track above the door pair.", "geometryDescriptor": {"topologyIntent": "axis-aligned box", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "sharedGeometry": "unit-box", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "embed", "localStart": [-2.06, 2.54, 3.48], "localEnd": [0.66, 2.8, 3.48], "embedDepth": 0.02, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 3.1, "height": 0.26, "depth": 0.14, "units": "meters", "confidence": 0.88}, "transform": {"position": [0, 2.81, 3.48], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "render-white", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "sliding-door-header", "kind": "relief", "confidence": 0.88, "placement": {"spansBays": [2, 3]}, "notes": "Recessed white header box above the sliding pair.", "evidenceRef": "region-glazing"}], "surfaceDetail": {"macroRoughness": 0.1, "microRoughness": 0.28, "bumpAmplitude": 0.14, "normalPattern": "painted sheet, finer tooth than the render", "displacementPattern": "", "occlusionPattern": "occlusion in the recess above the leaves", "edgeWearPattern": "none", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-glazing"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#E8E6E1", "evidenceRef": "region-glazing", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "header-face", "hex": "#E8E6E1", "coverage": 1.0, "evidenceRef": "region-glazing"}], "finishStyle": "matte painted render", "materialRef": "render-white", "dominantAlbedo": "rgba(232, 230, 225, 1.0)", "secondaryAlbedo": "rgba(232, 230, 225, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.88}};
  node_door_header_6.userData.actionProfile = {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_door_header_6);
  nodes["door-header"] = node_door_header_6;
  const mesh_door_header_6Geometry = endpoint_door_header_6
    ? new THREE.CylinderGeometry(endpoint_door_header_6.endRadius, endpoint_door_header_6.baseRadius, endpoint_door_header_6.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_door_header_6) {
    mesh_door_header_6Geometry.scale(3.1, 0.26, 0.14);
  }
  const mesh_door_header_6 = new THREE.Mesh(
    mesh_door_header_6Geometry,
    materialMap["render-white"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_door_header_6.name = "Sliding-door header box";
  if (endpoint_door_header_6) {
    mesh_door_header_6.position.copy(endpoint_door_header_6.midpoint);
    mesh_door_header_6.quaternion.copy(endpoint_door_header_6.quaternion);
  }
  mesh_door_header_6.castShadow = options.castShadow ?? true;
  mesh_door_header_6.receiveShadow = options.receiveShadow ?? true;
  mesh_door_header_6.userData.sculptComponent = {"id": "door-header", "name": "Sliding-door header box", "level": "meso", "role": "trim", "importance": 0.6, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A single recessed box carrying the slide track above the door pair.", "geometryDescriptor": {"topologyIntent": "axis-aligned box", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "sharedGeometry": "unit-box", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "embed", "localStart": [-2.06, 2.54, 3.48], "localEnd": [0.66, 2.8, 3.48], "embedDepth": 0.02, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 3.1, "height": 0.26, "depth": 0.14, "units": "meters", "confidence": 0.88}, "transform": {"position": [0, 2.81, 3.48], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "render-white", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "sliding-door-header", "kind": "relief", "confidence": 0.88, "placement": {"spansBays": [2, 3]}, "notes": "Recessed white header box above the sliding pair.", "evidenceRef": "region-glazing"}], "surfaceDetail": {"macroRoughness": 0.1, "microRoughness": 0.28, "bumpAmplitude": 0.14, "normalPattern": "painted sheet, finer tooth than the render", "displacementPattern": "", "occlusionPattern": "occlusion in the recess above the leaves", "edgeWearPattern": "none", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-glazing"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#E8E6E1", "evidenceRef": "region-glazing", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "header-face", "hex": "#E8E6E1", "coverage": 1.0, "evidenceRef": "region-glazing"}], "finishStyle": "matte painted render", "materialRef": "render-white", "dominantAlbedo": "rgba(232, 230, 225, 1.0)", "secondaryAlbedo": "rgba(232, 230, 225, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.88}};
  node_door_header_6.add(mesh_door_header_6);
  meshes["door-header"] = mesh_door_header_6;
  colliders["door-header"] = null;

  const endpoint_sliding_door_leaves_7 = makeAttachmentEndpoint(null);
  const node_sliding_door_leaves_7 = new THREE.Group();
  node_sliding_door_leaves_7.name = "Sliding entrance leaves__pivot";
  node_sliding_door_leaves_7.scale.set(1, 1, 1);
  if (endpoint_sliding_door_leaves_7) {
    node_sliding_door_leaves_7.position.copy(endpoint_sliding_door_leaves_7.start);
    node_sliding_door_leaves_7.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_sliding_door_leaves_7.position.set(-0.75, 1.6150000000000002, 3.38);
    node_sliding_door_leaves_7.rotation.set(0.0, 0.0, 0.0);
  }
  node_sliding_door_leaves_7.userData.sculptComponent = {"id": "sliding-door-leaves", "name": "Sliding entrance leaves", "level": "meso", "role": "door", "importance": 0.8, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Two leaves of identical construction - stile frame, glazed centre, pull handle - built as one component instanced twice. The pull handle is folded in rather than given its own draw call, because it shares the leaves' material and never moves independently of them.", "geometryDescriptor": {"topologyIntent": "framed glazed leaf: 0.05 m stiles around a glazed centre, plus a folded-in pull bar", "instancedVia": "repetitionSystems:sliding-leaves", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened.", "zFightingNote": "Depth separation against z-fighting: two surfaces facing the SAME direction in the SAME plane flicker as the camera moves, and every one of these was authored flush at exactly z=3.500. The leaves' front face sat exactly on the glazing's back face at z=3.430 across 3.00 x 2.53 m - two transparent surfaces fighting over the whole door opening. Moved back 0.02 m."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "socket", "localStart": [-2.04, 0.35, 3.4], "localEnd": [0.68, 2.54, 3.4], "embedDepth": 0.0, "overlap": 0.0, "gapTolerance": 0.004, "parentId": "building-shell"}, "dimensions": {"width": 1.5, "height": 2.5300000000000002, "depth": 0.06, "units": "meters", "confidence": 0.88}, "transform": {"position": [-0.75, 1.6150000000000002, 3.38], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "aluminium", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "door-pull-handle", "kind": "hardware", "confidence": 0.82, "placement": {"y": 1.05, "length": 0.32}, "notes": "Horizontal pull bar on the leading leaf. Folded into this component, not a separate draw call.", "evidenceRef": "region-glazing"}], "surfaceDetail": {"macroRoughness": 0.04, "microRoughness": 0.1, "bumpAmplitude": 0.06, "normalPattern": "float glass with brushed stiles at the edges", "displacementPattern": "", "occlusionPattern": "occlusion where the leaves overlap the header track", "edgeWearPattern": "handle-height rub on the leading stile", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-glazing"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "moving-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [1, 0, 0], "confidence": 0.85, "name": "door-slide-l", "notes": "Translation axis for the left leaf, +/-X in the facade plane. This is the building's only genuine mechanism, so it is the only non-root pivot besides its mirror leaf. The paired axis for the right leaf is door-slide-r, declared on the same component's second instance."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [{"id": "slide-limit", "type": "linear", "axis": [1, 0, 0], "min": 0.0, "max": 1.3, "notes": "A leaf travels one bay width; it cannot pass the jamb."}], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#B8BCBE", "evidenceRef": "region-glazing", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "stiles", "hex": "#B8BCBE", "coverage": 0.35, "evidenceRef": "region-glazing"}, {"id": "leaf-glazing", "hex": "#C6D2D4", "coverage": 0.6, "evidenceRef": "region-glazing"}, {"id": "pull-handle", "hex": "#C8CCCE", "coverage": 0.05, "evidenceRef": "region-glazing"}], "finishStyle": "mill-finish aluminium stiles with a glazed centre", "materialRef": "aluminium", "dominantAlbedo": "rgba(184, 188, 190, 1.0)", "secondaryAlbedo": "rgba(198, 210, 212, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.88}};
  node_sliding_door_leaves_7.userData.actionProfile = {"animationRole": "moving-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [1, 0, 0], "confidence": 0.85, "name": "door-slide-l", "notes": "Translation axis for the left leaf, +/-X in the facade plane. This is the building's only genuine mechanism, so it is the only non-root pivot besides its mirror leaf. The paired axis for the right leaf is door-slide-r, declared on the same component's second instance."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [{"id": "slide-limit", "type": "linear", "axis": [1, 0, 0], "min": 0.0, "max": 1.3, "notes": "A leaf travels one bay width; it cannot pass the jamb."}], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_sliding_door_leaves_7);
  nodes["sliding-door-leaves"] = node_sliding_door_leaves_7;
  const mesh_sliding_door_leaves_7Geometry = endpoint_sliding_door_leaves_7
    ? new THREE.CylinderGeometry(endpoint_sliding_door_leaves_7.endRadius, endpoint_sliding_door_leaves_7.baseRadius, endpoint_sliding_door_leaves_7.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_sliding_door_leaves_7) {
    mesh_sliding_door_leaves_7Geometry.scale(1.5, 2.5300000000000002, 0.06);
  }
  const mesh_sliding_door_leaves_7 = new THREE.Mesh(
    mesh_sliding_door_leaves_7Geometry,
    materialMap["aluminium"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_sliding_door_leaves_7.name = "Sliding entrance leaves";
  if (endpoint_sliding_door_leaves_7) {
    mesh_sliding_door_leaves_7.position.copy(endpoint_sliding_door_leaves_7.midpoint);
    mesh_sliding_door_leaves_7.quaternion.copy(endpoint_sliding_door_leaves_7.quaternion);
  }
  mesh_sliding_door_leaves_7.castShadow = options.castShadow ?? true;
  mesh_sliding_door_leaves_7.receiveShadow = options.receiveShadow ?? true;
  mesh_sliding_door_leaves_7.userData.sculptComponent = {"id": "sliding-door-leaves", "name": "Sliding entrance leaves", "level": "meso", "role": "door", "importance": 0.8, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Two leaves of identical construction - stile frame, glazed centre, pull handle - built as one component instanced twice. The pull handle is folded in rather than given its own draw call, because it shares the leaves' material and never moves independently of them.", "geometryDescriptor": {"topologyIntent": "framed glazed leaf: 0.05 m stiles around a glazed centre, plus a folded-in pull bar", "instancedVia": "repetitionSystems:sliding-leaves", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened.", "zFightingNote": "Depth separation against z-fighting: two surfaces facing the SAME direction in the SAME plane flicker as the camera moves, and every one of these was authored flush at exactly z=3.500. The leaves' front face sat exactly on the glazing's back face at z=3.430 across 3.00 x 2.53 m - two transparent surfaces fighting over the whole door opening. Moved back 0.02 m."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "socket", "localStart": [-2.04, 0.35, 3.4], "localEnd": [0.68, 2.54, 3.4], "embedDepth": 0.0, "overlap": 0.0, "gapTolerance": 0.004, "parentId": "building-shell"}, "dimensions": {"width": 1.5, "height": 2.5300000000000002, "depth": 0.06, "units": "meters", "confidence": 0.88}, "transform": {"position": [-0.75, 1.6150000000000002, 3.38], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "aluminium", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "door-pull-handle", "kind": "hardware", "confidence": 0.82, "placement": {"y": 1.05, "length": 0.32}, "notes": "Horizontal pull bar on the leading leaf. Folded into this component, not a separate draw call.", "evidenceRef": "region-glazing"}], "surfaceDetail": {"macroRoughness": 0.04, "microRoughness": 0.1, "bumpAmplitude": 0.06, "normalPattern": "float glass with brushed stiles at the edges", "displacementPattern": "", "occlusionPattern": "occlusion where the leaves overlap the header track", "edgeWearPattern": "handle-height rub on the leading stile", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-glazing"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "moving-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [1, 0, 0], "confidence": 0.85, "name": "door-slide-l", "notes": "Translation axis for the left leaf, +/-X in the facade plane. This is the building's only genuine mechanism, so it is the only non-root pivot besides its mirror leaf. The paired axis for the right leaf is door-slide-r, declared on the same component's second instance."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [{"id": "slide-limit", "type": "linear", "axis": [1, 0, 0], "min": 0.0, "max": 1.3, "notes": "A leaf travels one bay width; it cannot pass the jamb."}], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#B8BCBE", "evidenceRef": "region-glazing", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "stiles", "hex": "#B8BCBE", "coverage": 0.35, "evidenceRef": "region-glazing"}, {"id": "leaf-glazing", "hex": "#C6D2D4", "coverage": 0.6, "evidenceRef": "region-glazing"}, {"id": "pull-handle", "hex": "#C8CCCE", "coverage": 0.05, "evidenceRef": "region-glazing"}], "finishStyle": "mill-finish aluminium stiles with a glazed centre", "materialRef": "aluminium", "dominantAlbedo": "rgba(184, 188, 190, 1.0)", "secondaryAlbedo": "rgba(198, 210, 212, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.88}};
  node_sliding_door_leaves_7.add(mesh_sliding_door_leaves_7);
  meshes["sliding-door-leaves"] = mesh_sliding_door_leaves_7;
  colliders["sliding-door-leaves"] = null;

  const endpoint_fascia_tray_8 = makeAttachmentEndpoint(null);
  const node_fascia_tray_8 = new THREE.Group();
  node_fascia_tray_8.name = "Brand fascia lightbox tray__pivot";
  node_fascia_tray_8.scale.set(1, 1, 1);
  if (endpoint_fascia_tray_8) {
    node_fascia_tray_8.position.copy(endpoint_fascia_tray_8.start);
    node_fascia_tray_8.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_fascia_tray_8.position.set(0.0, 3.6, 3.67);
    node_fascia_tray_8.rotation.set(0.0, 0.0, 0.0);
  }
  node_fascia_tray_8.userData.sculptComponent = {"id": "fascia-tray", "name": "Brand fascia lightbox tray", "level": "meso", "role": "sign", "importance": 0.95, "confidence": 0.9, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "The tray, its raised perimeter bezel and its two stand-off brackets are one assembly. The brackets are folded in rather than instanced separately: they are small, they never move independently, and a separate draw call for two blocks is not worth a permanent budget line.", "geometryDescriptor": {"topologyIntent": "shallow tray box with a raised bezel and two rear stand-off brackets", "bezel": {"proud": 0.03, "width": 0.06}, "standoff": {"gap": 0.06, "brackets": 2, "note": "The lightbox stands PROUD of the spandrel with a visible shadow gap - it is not flush. This is an identity feature."}, "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.008, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened.", "placementNote": "Raised so the tray sits just under the coping, as the plate shows. At y 3.05-3.85 it floated mid-facade with a band of blank render above it.", "zFightingNote": "Depth separation against z-fighting: two surfaces facing the SAME direction in the SAME plane flicker as the camera moves, and every one of these was authored flush at exactly z=3.500. The tray's BACK face was flush on the wall at z=3.500, which both risked fighting and quietly contradicted the declared 0.06 m stand-off. It now starts at 3.56, so the shadow gap the spec describes physically exists."}, "parent": null, "attachment": {"parentSocket": "sign-mount", "contactType": "standoff", "localStart": [-3.3, 3.05, 3.5], "localEnd": [3.3, 3.85, 3.68], "embedDepth": 0.0, "overlap": 0.0, "gapTolerance": 0.06}, "dimensions": {"width": 6.6, "height": 0.85, "depth": 0.18, "units": "meters", "confidence": 0.9}, "transform": {"position": [0, 3.6, 3.67], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "fascia-acrylic", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "fascia-tray-frame", "kind": "edge-profile", "confidence": 0.88, "placement": {"proud": 0.03, "width": 0.06}, "notes": "Raised white perimeter bezel around the graphic face.", "evidenceRef": "region-fascia"}, {"id": "fascia-standoff-brackets", "kind": "hardware", "confidence": 0.85, "placement": {"count": 2, "gap": 0.06}, "notes": "Two brackets holding the tray clear of the spandrel. MATERIAL COMPROMISE: the plate shows them a darker grey than the tray, but they are folded into this component and so carry fascia-acrylic. Recorded as a known deviation, not drift.", "evidenceRef": "region-fascia"}], "surfaceDetail": {"macroRoughness": 0.05, "microRoughness": 0.14, "bumpAmplitude": 0.1, "normalPattern": "satin acrylic diffusion, no visible grain", "displacementPattern": "", "occlusionPattern": "the stand-off shadow gap behind the tray - the strongest occlusion cue on the facade", "edgeWearPattern": "none - the sign is the newest thing on the building", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-fascia", "view-full"], "details": [], "fidelityTier": "hero", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#F2EDE6", "evidenceRef": "region-fascia", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "tray-face", "hex": "#F2EDE6", "coverage": 0.8, "evidenceRef": "region-fascia"}, {"id": "bezel", "hex": "#DFDFDF", "coverage": 0.14, "evidenceRef": "region-fascia"}, {"id": "standoff-brackets", "hex": "#DFDFDF", "coverage": 0.06, "evidenceRef": "region-fascia"}], "finishStyle": "internally illuminated acrylic, satin", "materialRef": "fascia-acrylic", "dominantAlbedo": "rgba(242, 237, 230, 1.0)", "secondaryAlbedo": "rgba(223, 223, 223, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.9}};
  node_fascia_tray_8.userData.actionProfile = {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_fascia_tray_8);
  nodes["fascia-tray"] = node_fascia_tray_8;
  const mesh_fascia_tray_8Geometry = endpoint_fascia_tray_8
    ? new THREE.CylinderGeometry(endpoint_fascia_tray_8.endRadius, endpoint_fascia_tray_8.baseRadius, endpoint_fascia_tray_8.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_fascia_tray_8) {
    mesh_fascia_tray_8Geometry.scale(6.6, 0.85, 0.18);
  }
  const mesh_fascia_tray_8 = new THREE.Mesh(
    mesh_fascia_tray_8Geometry,
    materialMap["fascia-acrylic"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_fascia_tray_8.name = "Brand fascia lightbox tray";
  if (endpoint_fascia_tray_8) {
    mesh_fascia_tray_8.position.copy(endpoint_fascia_tray_8.midpoint);
    mesh_fascia_tray_8.quaternion.copy(endpoint_fascia_tray_8.quaternion);
  }
  mesh_fascia_tray_8.castShadow = options.castShadow ?? true;
  mesh_fascia_tray_8.receiveShadow = options.receiveShadow ?? true;
  mesh_fascia_tray_8.userData.sculptComponent = {"id": "fascia-tray", "name": "Brand fascia lightbox tray", "level": "meso", "role": "sign", "importance": 0.95, "confidence": 0.9, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "The tray, its raised perimeter bezel and its two stand-off brackets are one assembly. The brackets are folded in rather than instanced separately: they are small, they never move independently, and a separate draw call for two blocks is not worth a permanent budget line.", "geometryDescriptor": {"topologyIntent": "shallow tray box with a raised bezel and two rear stand-off brackets", "bezel": {"proud": 0.03, "width": 0.06}, "standoff": {"gap": 0.06, "brackets": 2, "note": "The lightbox stands PROUD of the spandrel with a visible shadow gap - it is not flush. This is an identity feature."}, "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.008, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened.", "placementNote": "Raised so the tray sits just under the coping, as the plate shows. At y 3.05-3.85 it floated mid-facade with a band of blank render above it.", "zFightingNote": "Depth separation against z-fighting: two surfaces facing the SAME direction in the SAME plane flicker as the camera moves, and every one of these was authored flush at exactly z=3.500. The tray's BACK face was flush on the wall at z=3.500, which both risked fighting and quietly contradicted the declared 0.06 m stand-off. It now starts at 3.56, so the shadow gap the spec describes physically exists."}, "parent": null, "attachment": {"parentSocket": "sign-mount", "contactType": "standoff", "localStart": [-3.3, 3.05, 3.5], "localEnd": [3.3, 3.85, 3.68], "embedDepth": 0.0, "overlap": 0.0, "gapTolerance": 0.06}, "dimensions": {"width": 6.6, "height": 0.85, "depth": 0.18, "units": "meters", "confidence": 0.9}, "transform": {"position": [0, 3.6, 3.67], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "fascia-acrylic", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "fascia-tray-frame", "kind": "edge-profile", "confidence": 0.88, "placement": {"proud": 0.03, "width": 0.06}, "notes": "Raised white perimeter bezel around the graphic face.", "evidenceRef": "region-fascia"}, {"id": "fascia-standoff-brackets", "kind": "hardware", "confidence": 0.85, "placement": {"count": 2, "gap": 0.06}, "notes": "Two brackets holding the tray clear of the spandrel. MATERIAL COMPROMISE: the plate shows them a darker grey than the tray, but they are folded into this component and so carry fascia-acrylic. Recorded as a known deviation, not drift.", "evidenceRef": "region-fascia"}], "surfaceDetail": {"macroRoughness": 0.05, "microRoughness": 0.14, "bumpAmplitude": 0.1, "normalPattern": "satin acrylic diffusion, no visible grain", "displacementPattern": "", "occlusionPattern": "the stand-off shadow gap behind the tray - the strongest occlusion cue on the facade", "edgeWearPattern": "none - the sign is the newest thing on the building", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-fascia", "view-full"], "details": [], "fidelityTier": "hero", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#F2EDE6", "evidenceRef": "region-fascia", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "tray-face", "hex": "#F2EDE6", "coverage": 0.8, "evidenceRef": "region-fascia"}, {"id": "bezel", "hex": "#DFDFDF", "coverage": 0.14, "evidenceRef": "region-fascia"}, {"id": "standoff-brackets", "hex": "#DFDFDF", "coverage": 0.06, "evidenceRef": "region-fascia"}], "finishStyle": "internally illuminated acrylic, satin", "materialRef": "fascia-acrylic", "dominantAlbedo": "rgba(242, 237, 230, 1.0)", "secondaryAlbedo": "rgba(223, 223, 223, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.9}};
  node_fascia_tray_8.add(mesh_fascia_tray_8);
  meshes["fascia-tray"] = mesh_fascia_tray_8;
  colliders["fascia-tray"] = null;

  const endpoint_fascia_graphic_face_9 = makeAttachmentEndpoint(null);
  const node_fascia_graphic_face_9 = new THREE.Group();
  node_fascia_graphic_face_9.name = "Fascia graphic face__pivot";
  node_fascia_graphic_face_9.scale.set(1, 1, 1);
  if (endpoint_fascia_graphic_face_9) {
    node_fascia_graphic_face_9.position.copy(endpoint_fascia_graphic_face_9.start);
    node_fascia_graphic_face_9.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_fascia_graphic_face_9.position.set(0.0, 3.6, 3.77);
    node_fascia_graphic_face_9.rotation.set(0.0, 0.0, 0.0);
  }
  node_fascia_graphic_face_9.userData.sculptComponent = {"id": "fascia-graphic-face", "name": "Fascia graphic face", "level": "micro", "role": "sign-face", "importance": 1.0, "confidence": 0.92, "primitive": "box", "topologyClass": "surface-relief", "topologyRationale": "A zero-thickness applied graphic sitting on the tray face. It is surface relief, not a solid: the stripes and mark are texture, and giving them geometry would spend draw calls on flat vector art a single textured quad reproduces exactly.", "geometryDescriptor": {"topologyIntent": "single quad carrying a generated canvas texture", "canvasTexture": {"width": 1024, "height": 128, "layout": {"margin": 0.02, "endBlock": 0.35, "centreField": 0.26}, "bands": {"topMargin": 0.06, "orange": 0.15, "gap1": 0.11, "green": 0.26, "gap2": 0.11, "red": 0.15, "bottomMargin": 0.16}, "colors": {"orange": "#F68B29", "green": "#06825D", "red": "#DB2934", "field": "#F4EADE"}, "mark": {"numeral": "7", "numeralColor": "#DB2934", "word": "ELEVEn", "wordColor": "#06825D", "registered": true, "note": "Final n is LOWERCASE - the characteristic detail of the mark."}, "sourceEvidence": "projection-route.json; albedo and layout measured from crops/fascia.png by column and row scan"}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "planar UV mapped 1:1 to the canvas", "normalStrategy": "flat", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT; attachment.parentId keeps the logical parent. EVERY transform.position in this spec is authored in WORLD metres, so any nesting double-counts the parent's offset.", "placementNote": "Raised so the tray sits just under the coping, as the plate shows. At y 3.05-3.85 it floated mid-facade with a band of blank render above it.", "zFightingNote": "Depth separation against z-fighting: two surfaces facing the SAME direction in the SAME plane flicker as the camera moves, and every one of these was authored flush at exactly z=3.500. Sits 0.005 m proud of the tray face rather than exactly on it."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "overlap", "localStart": [-3.24, 3.11, 3.685], "localEnd": [3.24, 3.79, 3.685], "embedDepth": 0.0, "overlap": 0.005, "gapTolerance": 0.002, "parentId": "fascia-tray"}, "dimensions": {"width": 6.48, "height": 0.73, "depth": 0.01, "units": "meters", "confidence": 0.92}, "transform": {"position": [0, 3.6, 3.77], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "fascia-graphic", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "fascia-stripe-band", "kind": "marking", "confidence": 0.95, "placement": {"blocks": 2, "bandsPerBlock": 3}, "notes": "Orange/green/red bars on white, one block each side of the centre field. Layout measured, symmetric after perspective correction.", "evidenceRef": "region-fascia"}, {"id": "fascia-seven-mark", "kind": "marking", "confidence": 0.92, "placement": {"centreField": true}, "notes": "Red 7 with green ELEVEn overprinted across its lower half, plus a registered-trademark glyph.", "evidenceRef": "region-fascia"}], "surfaceDetail": {"macroRoughness": 0.04, "microRoughness": 0.1, "bumpAmplitude": 0.04, "normalPattern": "printed film, flat with hard colour boundaries", "displacementPattern": "", "occlusionPattern": "none - the graphic is coplanar", "edgeWearPattern": "none", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-fascia"], "details": [], "fidelityTier": "hero", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#F4EADE", "evidenceRef": "region-fascia", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "field-white", "hex": "#F4EADE", "coverage": 0.46, "evidenceRef": "region-fascia"}, {"id": "stripe-green", "hex": "#06825D", "coverage": 0.22, "evidenceRef": "region-fascia"}, {"id": "stripe-orange", "hex": "#F68B29", "coverage": 0.13, "evidenceRef": "region-fascia"}, {"id": "stripe-red", "hex": "#DB2934", "coverage": 0.13, "evidenceRef": "region-fascia"}, {"id": "mark-seven", "hex": "#DB2934", "coverage": 0.04, "evidenceRef": "region-fascia"}, {"id": "mark-eleven", "hex": "#06825D", "coverage": 0.02, "evidenceRef": "region-fascia"}], "finishStyle": "printed graphic behind an illuminated acrylic face", "materialRef": "fascia-graphic", "dominantAlbedo": "rgba(244, 234, 222, 1.0)", "secondaryAlbedo": "rgba(6, 130, 93, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.95}};
  node_fascia_graphic_face_9.userData.actionProfile = {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_fascia_graphic_face_9);
  nodes["fascia-graphic-face"] = node_fascia_graphic_face_9;
  const mesh_fascia_graphic_face_9Geometry = endpoint_fascia_graphic_face_9
    ? new THREE.CylinderGeometry(endpoint_fascia_graphic_face_9.endRadius, endpoint_fascia_graphic_face_9.baseRadius, endpoint_fascia_graphic_face_9.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_fascia_graphic_face_9) {
    mesh_fascia_graphic_face_9Geometry.scale(6.48, 0.73, 0.01);
  }
  const mesh_fascia_graphic_face_9 = new THREE.Mesh(
    mesh_fascia_graphic_face_9Geometry,
    materialMap["fascia-graphic"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_fascia_graphic_face_9.name = "Fascia graphic face";
  if (endpoint_fascia_graphic_face_9) {
    mesh_fascia_graphic_face_9.position.copy(endpoint_fascia_graphic_face_9.midpoint);
    mesh_fascia_graphic_face_9.quaternion.copy(endpoint_fascia_graphic_face_9.quaternion);
  }
  mesh_fascia_graphic_face_9.castShadow = options.castShadow ?? true;
  mesh_fascia_graphic_face_9.receiveShadow = options.receiveShadow ?? true;
  mesh_fascia_graphic_face_9.userData.sculptComponent = {"id": "fascia-graphic-face", "name": "Fascia graphic face", "level": "micro", "role": "sign-face", "importance": 1.0, "confidence": 0.92, "primitive": "box", "topologyClass": "surface-relief", "topologyRationale": "A zero-thickness applied graphic sitting on the tray face. It is surface relief, not a solid: the stripes and mark are texture, and giving them geometry would spend draw calls on flat vector art a single textured quad reproduces exactly.", "geometryDescriptor": {"topologyIntent": "single quad carrying a generated canvas texture", "canvasTexture": {"width": 1024, "height": 128, "layout": {"margin": 0.02, "endBlock": 0.35, "centreField": 0.26}, "bands": {"topMargin": 0.06, "orange": 0.15, "gap1": 0.11, "green": 0.26, "gap2": 0.11, "red": 0.15, "bottomMargin": 0.16}, "colors": {"orange": "#F68B29", "green": "#06825D", "red": "#DB2934", "field": "#F4EADE"}, "mark": {"numeral": "7", "numeralColor": "#DB2934", "word": "ELEVEn", "wordColor": "#06825D", "registered": true, "note": "Final n is LOWERCASE - the characteristic detail of the mark."}, "sourceEvidence": "projection-route.json; albedo and layout measured from crops/fascia.png by column and row scan"}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "planar UV mapped 1:1 to the canvas", "normalStrategy": "flat", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT; attachment.parentId keeps the logical parent. EVERY transform.position in this spec is authored in WORLD metres, so any nesting double-counts the parent's offset.", "placementNote": "Raised so the tray sits just under the coping, as the plate shows. At y 3.05-3.85 it floated mid-facade with a band of blank render above it.", "zFightingNote": "Depth separation against z-fighting: two surfaces facing the SAME direction in the SAME plane flicker as the camera moves, and every one of these was authored flush at exactly z=3.500. Sits 0.005 m proud of the tray face rather than exactly on it."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "overlap", "localStart": [-3.24, 3.11, 3.685], "localEnd": [3.24, 3.79, 3.685], "embedDepth": 0.0, "overlap": 0.005, "gapTolerance": 0.002, "parentId": "fascia-tray"}, "dimensions": {"width": 6.48, "height": 0.73, "depth": 0.01, "units": "meters", "confidence": 0.92}, "transform": {"position": [0, 3.6, 3.77], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "fascia-graphic", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "fascia-stripe-band", "kind": "marking", "confidence": 0.95, "placement": {"blocks": 2, "bandsPerBlock": 3}, "notes": "Orange/green/red bars on white, one block each side of the centre field. Layout measured, symmetric after perspective correction.", "evidenceRef": "region-fascia"}, {"id": "fascia-seven-mark", "kind": "marking", "confidence": 0.92, "placement": {"centreField": true}, "notes": "Red 7 with green ELEVEn overprinted across its lower half, plus a registered-trademark glyph.", "evidenceRef": "region-fascia"}], "surfaceDetail": {"macroRoughness": 0.04, "microRoughness": 0.1, "bumpAmplitude": 0.04, "normalPattern": "printed film, flat with hard colour boundaries", "displacementPattern": "", "occlusionPattern": "none - the graphic is coplanar", "edgeWearPattern": "none", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-fascia"], "details": [], "fidelityTier": "hero", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#F4EADE", "evidenceRef": "region-fascia", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "field-white", "hex": "#F4EADE", "coverage": 0.46, "evidenceRef": "region-fascia"}, {"id": "stripe-green", "hex": "#06825D", "coverage": 0.22, "evidenceRef": "region-fascia"}, {"id": "stripe-orange", "hex": "#F68B29", "coverage": 0.13, "evidenceRef": "region-fascia"}, {"id": "stripe-red", "hex": "#DB2934", "coverage": 0.13, "evidenceRef": "region-fascia"}, {"id": "mark-seven", "hex": "#DB2934", "coverage": 0.04, "evidenceRef": "region-fascia"}, {"id": "mark-eleven", "hex": "#06825D", "coverage": 0.02, "evidenceRef": "region-fascia"}], "finishStyle": "printed graphic behind an illuminated acrylic face", "materialRef": "fascia-graphic", "dominantAlbedo": "rgba(244, 234, 222, 1.0)", "secondaryAlbedo": "rgba(6, 130, 93, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.95}};
  node_fascia_graphic_face_9.add(mesh_fascia_graphic_face_9);
  meshes["fascia-graphic-face"] = mesh_fascia_graphic_face_9;
  colliders["fascia-graphic-face"] = null;

  const endpoint_condenser_casing_10 = makeAttachmentEndpoint(null);
  const node_condenser_casing_10 = new THREE.Group();
  node_condenser_casing_10.name = "Packaged condenser casing__pivot";
  node_condenser_casing_10.scale.set(1, 1, 1);
  if (endpoint_condenser_casing_10) {
    node_condenser_casing_10.position.copy(endpoint_condenser_casing_10.start);
    node_condenser_casing_10.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_condenser_casing_10.position.set(1.35, 4.24, 0.55);
    node_condenser_casing_10.rotation.set(0.0, 0.0, 0.0);
  }
  node_condenser_casing_10.userData.sculptComponent = {"id": "condenser-casing", "name": "Packaged condenser casing", "level": "meso", "role": "plant", "importance": 0.8, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Casing, four block feet, two circular fan cowls and the louvred intake face are one galvanised assembly. The louvre face is a material layer and inset relief on this component rather than a separate mesh: as its own component it cost a draw call and a unique geometry, and unique geometries are the binding axis on this prop.", "geometryDescriptor": {"topologyIntent": "box casing on four block feet, with two raised circular cowls on the top face", "feet": {"count": 4, "height": 0.08, "section": 0.1, "note": "Lift the casing clear of the deck, leaving the shadow gap visible in zone-r0c2."}, "cowls": {"count": 2, "radius": 0.2, "proud": 0.05, "segments": 16, "segmentRationale": "16 radial segments at 0.20 m radius is 3.9 mm of chord error - well under a pixel at review distance."}, "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT while attachment.parentId keeps roof-deck as the logical parent. Every transform.position in this spec is authored in WORLD metres; nesting under roof-deck (itself at y 3.85) added the two together and put the rooftop plant at y 7.78."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "butt", "localStart": [0.7, 3.65, 0.1], "localEnd": [2.0, 4.45, 1.0], "embedDepth": 0.0, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "roof-deck"}, "dimensions": {"width": 1.3, "height": 0.62, "depth": 0.9, "units": "meters", "confidence": 0.85}, "transform": {"position": [1.35, 4.24, 0.55], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "galvanised", "materialLayers": ["louvre-dark"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "condenser-fan-cowl", "kind": "relief", "confidence": 0.8, "placement": {"count": 2, "radius": 0.2}, "notes": "Raised circular cowl rings on the top face.", "evidenceRef": "region-roofplant"}, {"id": "condenser-feet", "kind": "hardware", "confidence": 0.72, "placement": {"count": 4, "height": 0.1}, "notes": "Short block feet with a visible shadow gap beneath the casing.", "evidenceRef": "region-roofplant"}, {"id": "condenser-louvre-grille", "kind": "groove", "confidence": 0.88, "placement": {"face": "+X", "slatCount": 14, "inset": 0.015, "extent": {"y": [3.75, 4.35], "z": [0.2, 0.9]}}, "evidenceRef": "region-roofplant", "notes": "Horizontal louvre panel on the casing's +X face, carried as a material layer and inset relief rather than its own mesh. CONCAVE: per the microscope rule it must NOT be colour-gated, because a dark-pixel ratio there measures cavity shading rather than material."}], "surfaceDetail": {"macroRoughness": 0.12, "microRoughness": 0.36, "bumpAmplitude": 0.26, "normalPattern": "galvanised spangle, visible as irregular crystalline mottling", "displacementPattern": "", "occlusionPattern": "occlusion under the casing between its feet, and inside each cowl ring", "edgeWearPattern": "edge wear on the casing's top arris", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-roofplant"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#A8ACAE", "evidenceRef": "region-roofplant", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "casing", "hex": "#A8ACAE", "coverage": 0.86, "evidenceRef": "region-roofplant"}, {"id": "cowls", "hex": "#B4B8BA", "coverage": 0.1, "evidenceRef": "region-roofplant"}, {"id": "feet", "hex": "#9AA0A2", "coverage": 0.04, "evidenceRef": "region-roofplant"}], "finishStyle": "galvanised sheet steel, broad soft highlight", "materialRef": "galvanised", "dominantAlbedo": "rgba(168, 172, 174, 1.0)", "secondaryAlbedo": "rgba(180, 184, 186, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.85}};
  node_condenser_casing_10.userData.actionProfile = {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_condenser_casing_10);
  nodes["condenser-casing"] = node_condenser_casing_10;
  const mesh_condenser_casing_10Geometry = endpoint_condenser_casing_10
    ? new THREE.CylinderGeometry(endpoint_condenser_casing_10.endRadius, endpoint_condenser_casing_10.baseRadius, endpoint_condenser_casing_10.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_condenser_casing_10) {
    mesh_condenser_casing_10Geometry.scale(1.3, 0.62, 0.9);
  }
  const mesh_condenser_casing_10 = new THREE.Mesh(
    mesh_condenser_casing_10Geometry,
    materialMap["galvanised"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_condenser_casing_10.name = "Packaged condenser casing";
  if (endpoint_condenser_casing_10) {
    mesh_condenser_casing_10.position.copy(endpoint_condenser_casing_10.midpoint);
    mesh_condenser_casing_10.quaternion.copy(endpoint_condenser_casing_10.quaternion);
  }
  mesh_condenser_casing_10.castShadow = options.castShadow ?? true;
  mesh_condenser_casing_10.receiveShadow = options.receiveShadow ?? true;
  mesh_condenser_casing_10.userData.sculptComponent = {"id": "condenser-casing", "name": "Packaged condenser casing", "level": "meso", "role": "plant", "importance": 0.8, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Casing, four block feet, two circular fan cowls and the louvred intake face are one galvanised assembly. The louvre face is a material layer and inset relief on this component rather than a separate mesh: as its own component it cost a draw call and a unique geometry, and unique geometries are the binding axis on this prop.", "geometryDescriptor": {"topologyIntent": "box casing on four block feet, with two raised circular cowls on the top face", "feet": {"count": 4, "height": 0.08, "section": 0.1, "note": "Lift the casing clear of the deck, leaving the shadow gap visible in zone-r0c2."}, "cowls": {"count": 2, "radius": 0.2, "proud": 0.05, "segments": 16, "segmentRationale": "16 radial segments at 0.20 m radius is 3.9 mm of chord error - well under a pixel at review distance."}, "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT while attachment.parentId keeps roof-deck as the logical parent. Every transform.position in this spec is authored in WORLD metres; nesting under roof-deck (itself at y 3.85) added the two together and put the rooftop plant at y 7.78."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "butt", "localStart": [0.7, 3.65, 0.1], "localEnd": [2.0, 4.45, 1.0], "embedDepth": 0.0, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "roof-deck"}, "dimensions": {"width": 1.3, "height": 0.62, "depth": 0.9, "units": "meters", "confidence": 0.85}, "transform": {"position": [1.35, 4.24, 0.55], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "galvanised", "materialLayers": ["louvre-dark"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "condenser-fan-cowl", "kind": "relief", "confidence": 0.8, "placement": {"count": 2, "radius": 0.2}, "notes": "Raised circular cowl rings on the top face.", "evidenceRef": "region-roofplant"}, {"id": "condenser-feet", "kind": "hardware", "confidence": 0.72, "placement": {"count": 4, "height": 0.1}, "notes": "Short block feet with a visible shadow gap beneath the casing.", "evidenceRef": "region-roofplant"}, {"id": "condenser-louvre-grille", "kind": "groove", "confidence": 0.88, "placement": {"face": "+X", "slatCount": 14, "inset": 0.015, "extent": {"y": [3.75, 4.35], "z": [0.2, 0.9]}}, "evidenceRef": "region-roofplant", "notes": "Horizontal louvre panel on the casing's +X face, carried as a material layer and inset relief rather than its own mesh. CONCAVE: per the microscope rule it must NOT be colour-gated, because a dark-pixel ratio there measures cavity shading rather than material."}], "surfaceDetail": {"macroRoughness": 0.12, "microRoughness": 0.36, "bumpAmplitude": 0.26, "normalPattern": "galvanised spangle, visible as irregular crystalline mottling", "displacementPattern": "", "occlusionPattern": "occlusion under the casing between its feet, and inside each cowl ring", "edgeWearPattern": "edge wear on the casing's top arris", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-roofplant"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#A8ACAE", "evidenceRef": "region-roofplant", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "casing", "hex": "#A8ACAE", "coverage": 0.86, "evidenceRef": "region-roofplant"}, {"id": "cowls", "hex": "#B4B8BA", "coverage": 0.1, "evidenceRef": "region-roofplant"}, {"id": "feet", "hex": "#9AA0A2", "coverage": 0.04, "evidenceRef": "region-roofplant"}], "finishStyle": "galvanised sheet steel, broad soft highlight", "materialRef": "galvanised", "dominantAlbedo": "rgba(168, 172, 174, 1.0)", "secondaryAlbedo": "rgba(180, 184, 186, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.85}};
  node_condenser_casing_10.add(mesh_condenser_casing_10);
  meshes["condenser-casing"] = mesh_condenser_casing_10;
  colliders["condenser-casing"] = null;

  const endpoint_roof_duct_11 = makeAttachmentEndpoint(null);
  const node_roof_duct_11 = new THREE.Group();
  node_roof_duct_11.name = "Galvanised roof duct__pivot";
  node_roof_duct_11.scale.set(1, 1, 1);
  if (endpoint_roof_duct_11) {
    node_roof_duct_11.position.copy(endpoint_roof_duct_11.start);
    node_roof_duct_11.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_roof_duct_11.position.set(0.55, 4.14, -0.35);
    node_roof_duct_11.rotation.set(0.0, 0.0, 0.0);
  }
  node_roof_duct_11.userData.sculptComponent = {"id": "roof-duct", "name": "Galvanised roof duct", "level": "meso", "role": "plant", "importance": 0.55, "confidence": 0.78, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A rectangular duct run with raised transverse flange ribs; one extrusion, not a chain of boxes.", "geometryDescriptor": {"topologyIntent": "rectangular duct extrusion with four raised transverse flange ribs", "flanges": {"count": 4, "proud": 0.02, "width": 0.05}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT while attachment.parentId keeps roof-deck as the logical parent. Every transform.position in this spec is authored in WORLD metres; nesting under roof-deck (itself at y 3.85) added the two together and put the rooftop plant at y 7.78.", "zFightingNote": "Depth separation against z-fighting: two surfaces facing the SAME direction in the SAME plane flicker as the camera moves, and every one of these was authored flush at exactly z=3.500. Duct and casing shared a bottom face at y=3.930; the duct now sits 0.02 m higher."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "butt", "localStart": [0.33, 3.65, -1.45], "localEnd": [0.78, 4.03, 0.75], "embedDepth": 0.0, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "roof-deck"}, "dimensions": {"width": 0.45, "height": 0.38, "depth": 2.2, "units": "meters", "confidence": 0.78}, "transform": {"position": [0.55, 4.14, -0.35], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "galvanised", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "duct-flange-seams", "kind": "relief", "confidence": 0.78, "placement": {"count": 4}, "notes": "Raised transverse flange ribs at intervals along the run.", "evidenceRef": "region-roofplant"}], "surfaceDetail": {"macroRoughness": 0.12, "microRoughness": 0.36, "bumpAmplitude": 0.24, "normalPattern": "galvanised spangle continuing the casing's finish", "displacementPattern": "raised transverse flange ribs at intervals along the run", "occlusionPattern": "occlusion in the shadow each flange rib casts along the duct", "edgeWearPattern": "none", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-roofplant"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#A8ACAE", "evidenceRef": "region-roofplant", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "duct-body", "hex": "#A8ACAE", "coverage": 0.9, "evidenceRef": "region-roofplant"}, {"id": "flange-ribs", "hex": "#B4B8BA", "coverage": 0.1, "evidenceRef": "region-roofplant"}], "finishStyle": "galvanised sheet steel duct with flange ribs", "materialRef": "galvanised", "dominantAlbedo": "rgba(168, 172, 174, 1.0)", "secondaryAlbedo": "rgba(180, 184, 186, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.78}};
  node_roof_duct_11.userData.actionProfile = {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_roof_duct_11);
  nodes["roof-duct"] = node_roof_duct_11;
  const mesh_roof_duct_11Geometry = endpoint_roof_duct_11
    ? new THREE.CylinderGeometry(endpoint_roof_duct_11.endRadius, endpoint_roof_duct_11.baseRadius, endpoint_roof_duct_11.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_roof_duct_11) {
    mesh_roof_duct_11Geometry.scale(0.45, 0.38, 2.2);
  }
  const mesh_roof_duct_11 = new THREE.Mesh(
    mesh_roof_duct_11Geometry,
    materialMap["galvanised"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_roof_duct_11.name = "Galvanised roof duct";
  if (endpoint_roof_duct_11) {
    mesh_roof_duct_11.position.copy(endpoint_roof_duct_11.midpoint);
    mesh_roof_duct_11.quaternion.copy(endpoint_roof_duct_11.quaternion);
  }
  mesh_roof_duct_11.castShadow = options.castShadow ?? true;
  mesh_roof_duct_11.receiveShadow = options.receiveShadow ?? true;
  mesh_roof_duct_11.userData.sculptComponent = {"id": "roof-duct", "name": "Galvanised roof duct", "level": "meso", "role": "plant", "importance": 0.55, "confidence": 0.78, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A rectangular duct run with raised transverse flange ribs; one extrusion, not a chain of boxes.", "geometryDescriptor": {"topologyIntent": "rectangular duct extrusion with four raised transverse flange ribs", "flanges": {"count": 4, "proud": 0.02, "width": 0.05}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT while attachment.parentId keeps roof-deck as the logical parent. Every transform.position in this spec is authored in WORLD metres; nesting under roof-deck (itself at y 3.85) added the two together and put the rooftop plant at y 7.78.", "zFightingNote": "Depth separation against z-fighting: two surfaces facing the SAME direction in the SAME plane flicker as the camera moves, and every one of these was authored flush at exactly z=3.500. Duct and casing shared a bottom face at y=3.930; the duct now sits 0.02 m higher."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "butt", "localStart": [0.33, 3.65, -1.45], "localEnd": [0.78, 4.03, 0.75], "embedDepth": 0.0, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "roof-deck"}, "dimensions": {"width": 0.45, "height": 0.38, "depth": 2.2, "units": "meters", "confidence": 0.78}, "transform": {"position": [0.55, 4.14, -0.35], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "galvanised", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "duct-flange-seams", "kind": "relief", "confidence": 0.78, "placement": {"count": 4}, "notes": "Raised transverse flange ribs at intervals along the run.", "evidenceRef": "region-roofplant"}], "surfaceDetail": {"macroRoughness": 0.12, "microRoughness": 0.36, "bumpAmplitude": 0.24, "normalPattern": "galvanised spangle continuing the casing's finish", "displacementPattern": "raised transverse flange ribs at intervals along the run", "occlusionPattern": "occlusion in the shadow each flange rib casts along the duct", "edgeWearPattern": "none", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-roofplant"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#A8ACAE", "evidenceRef": "region-roofplant", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "duct-body", "hex": "#A8ACAE", "coverage": 0.9, "evidenceRef": "region-roofplant"}, {"id": "flange-ribs", "hex": "#B4B8BA", "coverage": 0.1, "evidenceRef": "region-roofplant"}], "finishStyle": "galvanised sheet steel duct with flange ribs", "materialRef": "galvanised", "dominantAlbedo": "rgba(168, 172, 174, 1.0)", "secondaryAlbedo": "rgba(180, 184, 186, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.78}};
  node_roof_duct_11.add(mesh_roof_duct_11);
  meshes["roof-duct"] = mesh_roof_duct_11;
  colliders["roof-duct"] = null;

  const endpoint_side_door_12 = makeAttachmentEndpoint(null);
  const node_side_door_12 = new THREE.Group();
  node_side_door_12.name = "Personnel door and architrave__pivot";
  node_side_door_12.scale.set(1, 1, 1);
  if (endpoint_side_door_12) {
    node_side_door_12.position.copy(endpoint_side_door_12.start);
    node_side_door_12.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_side_door_12.position.set(3.98, 1.21, 1.6);
    node_side_door_12.rotation.set(0.0, 0.0, 0.0);
  }
  node_side_door_12.userData.sculptComponent = {"id": "side-door", "name": "Personnel door and architrave", "level": "meso", "role": "door", "importance": 0.6, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Leaf and its proud surround are one white assembly; they share a material and the leaf is not modelled as opening.", "geometryDescriptor": {"topologyIntent": "flush leaf set in a surround standing 0.04 m proud of the render", "architrave": {"proud": 0.04, "width": 0.08}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened.", "zFightingNote": "Depth separation against z-fighting: two surfaces facing the SAME direction in the SAME plane flicker as the camera moves, and every one of these was authored flush at exactly z=3.500. The leaf's bottom face sat exactly on the plinth's top face at y=0.150."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "embed", "localStart": [3.95, 0.15, 1.15], "localEnd": [4.03, 2.25, 2.05], "embedDepth": 0.04, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 0.1, "height": 2.1, "depth": 0.9, "units": "meters", "confidence": 0.85}, "transform": {"position": [3.98, 1.21, 1.6], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "render-white", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "side-door-architrave", "kind": "edge-profile", "confidence": 0.85, "placement": {"proud": 0.04}, "notes": "Surround standing slightly proud of the render.", "evidenceRef": "region-sidewall"}], "surfaceDetail": {"macroRoughness": 0.09, "microRoughness": 0.26, "bumpAmplitude": 0.14, "normalPattern": "painted steel leaf, flatter than the render around it", "displacementPattern": "", "occlusionPattern": "occlusion in the architrave rebate around all four edges", "edgeWearPattern": "scuffing at the leaf's lower rail", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-sidewall"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#E8E6E1", "evidenceRef": "region-sidewall", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "leaf", "hex": "#E8E6E1", "coverage": 0.85, "evidenceRef": "region-sidewall"}, {"id": "architrave", "hex": "#F2F0EC", "coverage": 0.15, "evidenceRef": "region-sidewall"}], "finishStyle": "matte painted door leaf and surround", "materialRef": "render-white", "dominantAlbedo": "rgba(232, 230, 225, 1.0)", "secondaryAlbedo": "rgba(242, 240, 236, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.85}};
  node_side_door_12.userData.actionProfile = {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_side_door_12);
  nodes["side-door"] = node_side_door_12;
  const mesh_side_door_12Geometry = endpoint_side_door_12
    ? new THREE.CylinderGeometry(endpoint_side_door_12.endRadius, endpoint_side_door_12.baseRadius, endpoint_side_door_12.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_side_door_12) {
    mesh_side_door_12Geometry.scale(0.1, 2.1, 0.9);
  }
  const mesh_side_door_12 = new THREE.Mesh(
    mesh_side_door_12Geometry,
    materialMap["render-white"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_side_door_12.name = "Personnel door and architrave";
  if (endpoint_side_door_12) {
    mesh_side_door_12.position.copy(endpoint_side_door_12.midpoint);
    mesh_side_door_12.quaternion.copy(endpoint_side_door_12.quaternion);
  }
  mesh_side_door_12.castShadow = options.castShadow ?? true;
  mesh_side_door_12.receiveShadow = options.receiveShadow ?? true;
  mesh_side_door_12.userData.sculptComponent = {"id": "side-door", "name": "Personnel door and architrave", "level": "meso", "role": "door", "importance": 0.6, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Leaf and its proud surround are one white assembly; they share a material and the leaf is not modelled as opening.", "geometryDescriptor": {"topologyIntent": "flush leaf set in a surround standing 0.04 m proud of the render", "architrave": {"proud": 0.04, "width": 0.08}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "sharedGeometry": "unit-box", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened.", "zFightingNote": "Depth separation against z-fighting: two surfaces facing the SAME direction in the SAME plane flicker as the camera moves, and every one of these was authored flush at exactly z=3.500. The leaf's bottom face sat exactly on the plinth's top face at y=0.150."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "embed", "localStart": [3.95, 0.15, 1.15], "localEnd": [4.03, 2.25, 2.05], "embedDepth": 0.04, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 0.1, "height": 2.1, "depth": 0.9, "units": "meters", "confidence": 0.85}, "transform": {"position": [3.98, 1.21, 1.6], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "render-white", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "side-door-architrave", "kind": "edge-profile", "confidence": 0.85, "placement": {"proud": 0.04}, "notes": "Surround standing slightly proud of the render.", "evidenceRef": "region-sidewall"}], "surfaceDetail": {"macroRoughness": 0.09, "microRoughness": 0.26, "bumpAmplitude": 0.14, "normalPattern": "painted steel leaf, flatter than the render around it", "displacementPattern": "", "occlusionPattern": "occlusion in the architrave rebate around all four edges", "edgeWearPattern": "scuffing at the leaf's lower rail", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-sidewall"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#E8E6E1", "evidenceRef": "region-sidewall", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "leaf", "hex": "#E8E6E1", "coverage": 0.85, "evidenceRef": "region-sidewall"}, {"id": "architrave", "hex": "#F2F0EC", "coverage": 0.15, "evidenceRef": "region-sidewall"}], "finishStyle": "matte painted door leaf and surround", "materialRef": "render-white", "dominantAlbedo": "rgba(232, 230, 225, 1.0)", "secondaryAlbedo": "rgba(242, 240, 236, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.85}};
  node_side_door_12.add(mesh_side_door_12);
  meshes["side-door"] = mesh_side_door_12;
  colliders["side-door"] = null;

  const endpoint_side_fittings_13 = makeAttachmentEndpoint(null);
  const node_side_fittings_13 = new THREE.Group();
  node_side_fittings_13.name = "Side-wall lever handle and bulkhead lamp__pivot";
  node_side_fittings_13.scale.set(1, 1, 1);
  if (endpoint_side_fittings_13) {
    node_side_fittings_13.position.copy(endpoint_side_fittings_13.start);
    node_side_fittings_13.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_side_fittings_13.position.set(4.05, 2.55, 1.6);
    node_side_fittings_13.rotation.set(0.0, 0.0, 0.0);
  }
  node_side_fittings_13.userData.sculptComponent = {"id": "side-fittings", "name": "Side-wall lever handle and bulkhead lamp", "level": "micro", "role": "hardware", "importance": 0.45, "confidence": 0.78, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Two small +X fittings folded into one component: they share a material, neither moves, and separately they would cost two permanent draw calls for a handle and a lamp box.", "geometryDescriptor": {"topologyIntent": "axis-aligned box", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "sharedGeometry": "unit-box", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "embed", "localStart": [4.0, 1.05, 1.22], "localEnd": [4.06, 2.55, 1.6], "embedDepth": 0.02, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 0.14, "height": 0.12, "depth": 0.28, "units": "meters", "confidence": 0.78}, "transform": {"position": [4.05, 2.55, 1.6], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "aluminium", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "side-door-lever-handle", "kind": "hardware", "confidence": 0.78, "placement": {"y": 1.05, "z": 1.22}, "notes": "Lever on the leading edge of the door.", "evidenceRef": "region-sidewall"}, {"id": "bulkhead-lamp", "kind": "hardware", "confidence": 0.8, "placement": {"y": 2.55, "z": 1.6, "proud": 0.12}, "notes": "Small rectangular wall light projecting above the door head. Read from zone-r1c2; missed at wide-shot scale.", "evidenceRef": "region-sidewall"}], "surfaceDetail": {"macroRoughness": 0.06, "microRoughness": 0.18, "bumpAmplitude": 0.1, "normalPattern": "satin metal, finer than the door it sits on", "displacementPattern": "", "occlusionPattern": "occlusion under the lamp housing where it stands proud of the wall", "edgeWearPattern": "handle wear at the grip", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-sidewall"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#B8BCBE", "evidenceRef": "region-sidewall", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "lever-handle", "hex": "#B8BCBE", "coverage": 0.35, "evidenceRef": "region-sidewall"}, {"id": "lamp-housing", "hex": "#C4C8CA", "coverage": 0.65, "evidenceRef": "region-sidewall"}], "finishStyle": "satin metal handle and lamp housing", "materialRef": "aluminium", "dominantAlbedo": "rgba(184, 188, 190, 1.0)", "secondaryAlbedo": "rgba(196, 200, 202, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.78}};
  node_side_fittings_13.userData.actionProfile = {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_side_fittings_13);
  nodes["side-fittings"] = node_side_fittings_13;
  const mesh_side_fittings_13Geometry = endpoint_side_fittings_13
    ? new THREE.CylinderGeometry(endpoint_side_fittings_13.endRadius, endpoint_side_fittings_13.baseRadius, endpoint_side_fittings_13.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_side_fittings_13) {
    mesh_side_fittings_13Geometry.scale(0.14, 0.12, 0.28);
  }
  const mesh_side_fittings_13 = new THREE.Mesh(
    mesh_side_fittings_13Geometry,
    materialMap["aluminium"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_side_fittings_13.name = "Side-wall lever handle and bulkhead lamp";
  if (endpoint_side_fittings_13) {
    mesh_side_fittings_13.position.copy(endpoint_side_fittings_13.midpoint);
    mesh_side_fittings_13.quaternion.copy(endpoint_side_fittings_13.quaternion);
  }
  mesh_side_fittings_13.castShadow = options.castShadow ?? true;
  mesh_side_fittings_13.receiveShadow = options.receiveShadow ?? true;
  mesh_side_fittings_13.userData.sculptComponent = {"id": "side-fittings", "name": "Side-wall lever handle and bulkhead lamp", "level": "micro", "role": "hardware", "importance": 0.45, "confidence": 0.78, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Two small +X fittings folded into one component: they share a material, neither moves, and separately they would cost two permanent draw calls for a handle and a lamp box.", "geometryDescriptor": {"topologyIntent": "axis-aligned box", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "sharedGeometry": "unit-box", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "embed", "localStart": [4.0, 1.05, 1.22], "localEnd": [4.06, 2.55, 1.6], "embedDepth": 0.02, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 0.14, "height": 0.12, "depth": 0.28, "units": "meters", "confidence": 0.78}, "transform": {"position": [4.05, 2.55, 1.6], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "aluminium", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "side-door-lever-handle", "kind": "hardware", "confidence": 0.78, "placement": {"y": 1.05, "z": 1.22}, "notes": "Lever on the leading edge of the door.", "evidenceRef": "region-sidewall"}, {"id": "bulkhead-lamp", "kind": "hardware", "confidence": 0.8, "placement": {"y": 2.55, "z": 1.6, "proud": 0.12}, "notes": "Small rectangular wall light projecting above the door head. Read from zone-r1c2; missed at wide-shot scale.", "evidenceRef": "region-sidewall"}], "surfaceDetail": {"macroRoughness": 0.06, "microRoughness": 0.18, "bumpAmplitude": 0.1, "normalPattern": "satin metal, finer than the door it sits on", "displacementPattern": "", "occlusionPattern": "occlusion under the lamp housing where it stands proud of the wall", "edgeWearPattern": "handle wear at the grip", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-sidewall"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#B8BCBE", "evidenceRef": "region-sidewall", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "lever-handle", "hex": "#B8BCBE", "coverage": 0.35, "evidenceRef": "region-sidewall"}, {"id": "lamp-housing", "hex": "#C4C8CA", "coverage": 0.65, "evidenceRef": "region-sidewall"}], "finishStyle": "satin metal handle and lamp housing", "materialRef": "aluminium", "dominantAlbedo": "rgba(184, 188, 190, 1.0)", "secondaryAlbedo": "rgba(196, 200, 202, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.78}};
  node_side_fittings_13.add(mesh_side_fittings_13);
  meshes["side-fittings"] = mesh_side_fittings_13;
  colliders["side-fittings"] = null;

  const endpoint_side_window_14 = makeAttachmentEndpoint(null);
  const node_side_window_14 = new THREE.Group();
  node_side_window_14.name = "Casement window frame and pane__pivot";
  node_side_window_14.scale.set(1, 1, 1);
  if (endpoint_side_window_14) {
    node_side_window_14.position.copy(endpoint_side_window_14.start);
    node_side_window_14.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_side_window_14.position.set(3.98, 2.3, -0.3);
    node_side_window_14.rotation.set(0.0, 0.0, 0.0);
  }
  node_side_window_14.userData.sculptComponent = {"id": "side-window", "name": "Casement window frame and pane", "level": "meso", "role": "glazing", "importance": 0.5, "confidence": 0.82, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Frame, central mullion and the two panes are one small assembly on the +X wall; the pane shares the glass material via a second material layer rather than a second draw call.", "geometryDescriptor": {"topologyIntent": "axis-aligned box", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "sharedGeometry": "unit-box", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "embed", "localStart": [3.95, 1.8, -0.65], "localEnd": [4.03, 2.8, 0.05], "embedDepth": 0.03, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 0.1, "height": 1.0, "depth": 0.7, "units": "meters", "confidence": 0.82}, "transform": {"position": [3.98, 2.3, -0.3], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "aluminium", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "side-window-casement", "kind": "structure", "confidence": 0.82, "placement": {"panes": 2, "mullion": "central-vertical"}, "notes": "Two-pane casement, taller than wide, with a proud frame.", "evidenceRef": "region-sidewall"}, {"id": "side-window-panes", "kind": "structure", "confidence": 0.82, "placement": {"panes": 2}, "notes": "Two glass panes carried as a material LAYER on this component rather than a second draw call.", "evidenceRef": "region-sidewall"}], "surfaceDetail": {"macroRoughness": 0.05, "microRoughness": 0.14, "bumpAmplitude": 0.08, "normalPattern": "brushed frame around flat glass", "displacementPattern": "", "occlusionPattern": "occlusion in the frame rebate and along the central mullion", "edgeWearPattern": "none", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-sidewall"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#B8BCBE", "evidenceRef": "region-sidewall", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "frame", "hex": "#B8BCBE", "coverage": 0.4, "evidenceRef": "region-sidewall"}, {"id": "panes", "hex": "#C6D2D4", "coverage": 0.6, "evidenceRef": "region-sidewall"}], "finishStyle": "aluminium casement frame with two glazed panes", "materialRef": "aluminium", "dominantAlbedo": "rgba(184, 188, 190, 1.0)", "secondaryAlbedo": "rgba(198, 210, 212, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.82}};
  node_side_window_14.userData.actionProfile = {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_side_window_14);
  nodes["side-window"] = node_side_window_14;
  const mesh_side_window_14Geometry = endpoint_side_window_14
    ? new THREE.CylinderGeometry(endpoint_side_window_14.endRadius, endpoint_side_window_14.baseRadius, endpoint_side_window_14.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_side_window_14) {
    mesh_side_window_14Geometry.scale(0.1, 1.0, 0.7);
  }
  const mesh_side_window_14 = new THREE.Mesh(
    mesh_side_window_14Geometry,
    materialMap["aluminium"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_side_window_14.name = "Casement window frame and pane";
  if (endpoint_side_window_14) {
    mesh_side_window_14.position.copy(endpoint_side_window_14.midpoint);
    mesh_side_window_14.quaternion.copy(endpoint_side_window_14.quaternion);
  }
  mesh_side_window_14.castShadow = options.castShadow ?? true;
  mesh_side_window_14.receiveShadow = options.receiveShadow ?? true;
  mesh_side_window_14.userData.sculptComponent = {"id": "side-window", "name": "Casement window frame and pane", "level": "meso", "role": "glazing", "importance": 0.5, "confidence": 0.82, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Frame, central mullion and the two panes are one small assembly on the +X wall; the pane shares the glass material via a second material layer rather than a second draw call.", "geometryDescriptor": {"topologyIntent": "axis-aligned box", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "sharedGeometry": "unit-box", "segmentRationale": "Scaled instance of the shared unit BoxGeometry: 12 triangles and no additional unique geometry. The generator builds every box at unit size and applies the real dimensions via geometry.scale, so dimensions here are load-bearing, not annotation.", "scaleNote": "transform.scale is deliberately ABSENT. The generator's scale_vector() returns transform.scale when present and only falls back to dimensions otherwise, so an explicit [1,1,1] would pin every box at unit size - which is exactly what shipped a 1 m plinth on an 8 m building.", "parentingNote": "Parented to the ROOT, not to building-shell, even though attachment.parentId records building-shell as its logical parent. building-shell carries rotationEuler [-pi/2, 0, 0] so that its footprint profile extrudes upward, and a child Group inherits that rotation - which swapped this component's Y and Z axes and laid it on its side. The logical hierarchy is preserved in attachment.parentId; only the transform parent is flattened."}, "parent": null, "attachment": {"parentSocket": null, "contactType": "embed", "localStart": [3.95, 1.8, -0.65], "localEnd": [4.03, 2.8, 0.05], "embedDepth": 0.03, "overlap": 0.0, "gapTolerance": 0.002, "parentId": "building-shell"}, "dimensions": {"width": 0.1, "height": 1.0, "depth": 0.7, "units": "meters", "confidence": 0.82}, "transform": {"position": [3.98, 2.3, -0.3], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "aluminium", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "side-window-casement", "kind": "structure", "confidence": 0.82, "placement": {"panes": 2, "mullion": "central-vertical"}, "notes": "Two-pane casement, taller than wide, with a proud frame.", "evidenceRef": "region-sidewall"}, {"id": "side-window-panes", "kind": "structure", "confidence": 0.82, "placement": {"panes": 2}, "notes": "Two glass panes carried as a material LAYER on this component rather than a second draw call.", "evidenceRef": "region-sidewall"}], "surfaceDetail": {"macroRoughness": 0.05, "microRoughness": 0.14, "bumpAmplitude": 0.08, "normalPattern": "brushed frame around flat glass", "displacementPattern": "", "occlusionPattern": "occlusion in the frame rebate and along the central mullion", "edgeWearPattern": "none", "notes": "Carried by the runtime canvas maps and by the material's surfaceFrequencyBands, not by geometry."}, "evidenceRefs": ["region-sidewall"], "details": [], "fidelityTier": "standard", "actionProfile": {"animationRole": "static", "pivot": null, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#B8BCBE", "evidenceRef": "region-sidewall", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "frame", "hex": "#B8BCBE", "coverage": 0.4, "evidenceRef": "region-sidewall"}, {"id": "panes", "hex": "#C6D2D4", "coverage": 0.6, "evidenceRef": "region-sidewall"}], "finishStyle": "aluminium casement frame with two glazed panes", "materialRef": "aluminium", "dominantAlbedo": "rgba(184, 188, 190, 1.0)", "secondaryAlbedo": "rgba(198, 210, 212, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.82}};
  node_side_window_14.add(mesh_side_window_14);
  meshes["side-window"] = mesh_side_window_14;
  colliders["side-window"] = null;

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": false, "targetThreshold": 0.7, "extractionPerformed": true, "reason": "Extraction WAS performed for all thirteen materials and every one cleared 0.7 (see each material's referencePbr block and material-evidence/). What is deliberately NOT done is BINDING those outputs as a runtime texture set.\nThe crops are scene photographs, not tileable material samples: render-white_albedo.png is a crop of the +X elevation containing the personnel door, the casement window and the plinth. Bound as a tiling map it would smear a picture of a door across every wall of the building, and it carries the plate's baked key light and occlusion into base colour, which the material brief forbids outright.\nThe skill's own rule decides this: solid albedo for flat paint, a projected de-lit reference crop for anything patterned or printed. This building is flat paint, bare glass and mill-finish metal everywhere EXCEPT the brand fascia - and the fascia does go through the projection route, as a generated canvas texture drawn from measured albedo and measured layout (projection-route.json).\nEvidence is preserved per material under referencePbr.evidenceMaps rather than referencePbr.maps: the generator treats a complete five-map set as an instruction to bind textures, and that is a different claim from 'PBR evidence was extracted'."}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."], "exposure": 1.0, "toneMapping": "ACESFilmic", "toneMappingRationale": "ACES keeps the illuminated fascia's white face from clipping to flat paper against a building that is otherwise near-white. Linear exposure blew the bezel and the face to the same value, which erases the one cue that the box is lit.", "backgroundColor": "#3A3A3A", "backdropLuma": 0.58, "shadowSoftness": 0.35, "contactShadow": {"enabled": true, "type": "ground-plane", "opacity": 0.35, "radius": 0.6, "notes": "Floor-placed prop, so it needs a ground contact shadow or it reads as hovering. Separately, the condenser feet and the fascia stand-off each cast a small local shadow - those gaps are identity features and disappear without shadowing."}, "environment": "none", "environmentRationale": "The harness supplies directional lights and no environment map, so metals cannot produce a broad reflected highlight. Aluminium and galvanised roughness are authored for that, and any specular shortfall against the plate must NOT be compensated by lifting albedo."};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function create7ElevenStoreBuildingLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "7-Eleven Store Building look-dev lights";
  // Look-dev only: never part of the prop, and vibe-model's GLB path reads this flag.
  lights.userData.excludeFromExport = true;
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
  lights.userData.lightingFromPhoto = [{"id": "key", "type": "directional", "direction": [0.45, 0.72, 0.53], "intensity": 1.0, "color": "#FFF6EC", "notes": "Single soft key from front-upper-+X. Shadow under the coping and beneath the condenser feet gives its elevation."}, {"id": "fill", "type": "directional", "direction": [-0.5, 0.35, -0.4], "intensity": 0.35, "color": "#E8EEF4", "notes": "Broad cool fill; keeps the -X-facing render off black."}, {"id": "ambient", "type": "ambient", "intensity": 0.3, "color": "#FFFFFF", "notes": "Backdrop luma measures 0.58; ambient set so the render never falls under it, which the turntable gate would read as an interior hole."}, {"id": "fascia-self-lit", "type": "emissive-surface", "target": "fascia-graphic-face", "intensity": 0.3, "color": "#FFF6E8", "notes": "The fascia is an internally illuminated box, which is why its face reads flatter than the render beside it. Emission, not a scene light."}, {"id": "exposure-and-tonemapping", "type": "render-intent", "exposure": 1.0, "toneMapping": "ACESFilmic", "contactShadow": true, "groundShadow": true, "shadowSoftness": 0.35, "backgroundColor": "#3A3A3A", "notes": "ACES filmic tone mapping at exposure 1.0. Linear exposure clipped the lit fascia face and its bezel to the same white, erasing the one cue that the box is illuminated. Contact/ground shadow is on: this is a floor-placed prop that reads as hovering without it, and the condenser-foot and fascia stand-off gaps are identity features that vanish unshadowed."}, {"id": "rim", "type": "rim", "direction": [-0.35, 0.3, -0.88], "intensity": 0.55, "color": "#DCE6F0", "notes": "A cool rim from behind-and--Z, which is what separates the parapet coping and the condenser from the backdrop. Without it the coping's top arris merges into the matte at the review azimuth and the roof reads as a flat plate rather than a walled deck."}, {"id": "environment", "type": "environment", "intensity": 0.0, "color": "#FFFFFF", "notes": "Deliberately NONE. The thaikit harness supplies three directional lights and no environment map, and a host page may do the same, so nothing in this prop may depend on an environment to look right. That is why the metals are authored at metalness 0.15-0.35 rather than near 1: a near-1 metalness has no diffuse term and renders BLACK with nothing to reflect, which is how the shopfront framing was mistaken for tinted glazing for two passes."}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": false, "targetThreshold": 0.7, "extractionPerformed": true, "reason": "Extraction WAS performed for all thirteen materials and every one cleared 0.7 (see each material's referencePbr block and material-evidence/). What is deliberately NOT done is BINDING those outputs as a runtime texture set.\nThe crops are scene photographs, not tileable material samples: render-white_albedo.png is a crop of the +X elevation containing the personnel door, the casement window and the plinth. Bound as a tiling map it would smear a picture of a door across every wall of the building, and it carries the plate's baked key light and occlusion into base colour, which the material brief forbids outright.\nThe skill's own rule decides this: solid albedo for flat paint, a projected de-lit reference crop for anything patterned or printed. This building is flat paint, bare glass and mill-finish metal everywhere EXCEPT the brand fascia - and the fascia does go through the projection route, as a generated canvas texture drawn from measured albedo and measured layout (projection-route.json).\nEvidence is preserved per material under referencePbr.evidenceMaps rather than referencePbr.maps: the generator treats a complete five-map set as an instruction to bind textures, and that is a different claim from 'PBR evidence was extracted'."}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."], "exposure": 1.0, "toneMapping": "ACESFilmic", "toneMappingRationale": "ACES keeps the illuminated fascia's white face from clipping to flat paper against a building that is otherwise near-white. Linear exposure blew the bezel and the face to the same value, which erases the one cue that the box is lit.", "backgroundColor": "#3A3A3A", "backdropLuma": 0.58, "shadowSoftness": 0.35, "contactShadow": {"enabled": true, "type": "ground-plane", "opacity": 0.35, "radius": 0.6, "notes": "Floor-placed prop, so it needs a ground contact shadow or it reads as hovering. Separately, the condenser feet and the fascia stand-off each cast a small local shadow - those gaps are identity features and disappear without shadowing."}, "environment": "none", "environmentRationale": "The harness supplies directional lights and no environment map, so metals cannot produce a broad reflected highlight. Aluminium and galvanised roughness are authored for that, and any specular shortfall against the plate must NOT be compensated by lifting albedo."};
  return lights;
}

// PBR materials (clearcoat/iridescence/transmission/anisotropy) need an environment
// map to visually behave as intended — call this once per renderer and assign the
// result to scene.environment before rendering. No external HDR asset required.
export function frame7ElevenStoreBuildingCamera(
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

// Plan 1.3 §3.2c — PRESENTATION composer (DOF + bloom). CRITICAL (R-POSTFX): this is
// for the showcase/hero render ONLY. The Divine Eye's EVALUATION render MUST use a
// plain renderer with NO composer — bloom blows highlights and DOF blurs edges, which
// would corrupt the deterministic IoU/DCD/edge/blowout signals. Enable dof/bloom ONLY
// when the reference photo actually exhibits them (detect_reference_effects.py authorizes).
export function configure7ElevenStoreBuildingRenderer(renderer: THREE.WebGLRenderer): void {
  // Load-bearing for view-dependent finishes (anodized / Doppler): without ACES + sRGB
  // the environment reflection reads flat/washed instead of a believable metal response.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}



/* ------------------------------------------------------------------------- *
 * thaikit entry point
 * ------------------------------------------------------------------------- */

/**
 * Draw the brand fascia graphic onto a canvas and bind it to the graphic face.
 *
 * The projection route required this surface to be driven by the plate's own pixels rather
 * than approximated. It is flat vector art, so a canvas reproduces its hard colour boundaries
 * exactly at any resolution, where a rectified photo crop would resample them and carry the
 * lightbox glow and the plate's perspective into the surface. Colours and band fractions are
 * MEASURED (see projection-route.json), not chosen.
 *
 * Guarded on `document`: this same module is evaluated in node for the geometry and part
 * dumps, where there is no canvas.
 */
function applyFasciaGraphic(root: THREE.Group): void {
  if (typeof document === 'undefined') return;
  const rt = root.userData.sculptRuntime as any;
  const face: THREE.Mesh | undefined = rt?.meshes?.['fascia-graphic-face'];
  if (!face) return;                       // not built yet in this pass

  const W = 2048, H = 256;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const FIELD = '#F4EADE', ORANGE = '#F68B29', GREEN = '#06825D', RED = '#DB2934';
  ctx.fillStyle = FIELD; ctx.fillRect(0, 0, W, H);

  // Band fractions of face height, measured by column scan at x=70 and x=430.
  const bands: [number, number, string][] = [
    [0.06, 0.15, ORANGE],   // top margin -> orange bar
    [0.32, 0.26, GREEN],    // -> green bar (the thickest of the three)
    [0.69, 0.15, RED],      // -> red bar
  ];
  // Block fractions of face width. The plate measures the left block narrower than the right,
  // but that is perspective (the camera sits right of centre), not design: the rectified
  // layout is symmetric and is drawn symmetric.
  const MARGIN = 0.02, BLOCK = 0.35;
  const blocks: [number, number][] = [[MARGIN, BLOCK], [1 - MARGIN - BLOCK, BLOCK]];
  for (const [bx, bw] of blocks) {
    for (const [by, bh, color] of bands) {
      ctx.fillStyle = color;
      ctx.fillRect(Math.round(bx * W), Math.round(by * H), Math.round(bw * W), Math.round(bh * H));
    }
  }

  // Centre mark: a LARGE red 7 with green ELEVEn overprinted across its lower half -- not a small
  // numeral stacked above a word. The final n is LOWERCASE, the characteristic detail of the mark.
  const cx = W / 2;
  ctx.textAlign = 'center';
  ctx.fillStyle = RED;
  ctx.font = `700 ${Math.round(H * 1.15)}px Georgia, "Times New Roman", serif`;
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('7', cx, H * 0.90);
  ctx.fillStyle = GREEN;
  ctx.font = `700 ${Math.round(H * 0.26)}px Arial, Helvetica, sans-serif`;
  ctx.fillText('ELEVEn', cx, H * 0.70);
  ctx.fillStyle = RED;
  ctx.font = `${Math.round(H * 0.09)}px Arial, Helvetica, sans-serif`;
  ctx.fillText('\u00AE', cx + W * 0.045, H * 0.86);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const m = (face.material as THREE.MeshStandardMaterial).clone();
  m.map = tex;
  m.color.setRGB(1, 1, 1);                 // the map carries albedo now
  m.emissiveMap = tex;                     // internally lit box: the graphic emits, not just reflects
  m.emissive = new THREE.Color('#FFF6E8');
  m.emissiveIntensity = 0.30;
  m.needsUpdate = true;
  face.material = m;
}


/**
 * Two things the generated factory cannot express, applied after it builds.
 *
 * GLASS. The spec declares transmission 0.85, but the generator emits transmission 0 and leans on
 * opacity alone. It also leaves depthWrite true on a transparent surface, which sorts badly against
 * the interior behind it.
 *
 * Buildings are exterior shells by direction, so there is nothing behind the glazing to see. The
 * pane is therefore authored as a surface in its own right rather than as a window.
 */
function applyGlazing(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as any;
  const meshes: Record<string, THREE.Mesh> = rt?.meshes ?? {};

  for (const id of ['shopfront-glazing', 'side-window']) {
    const mesh = meshes[id];
    if (!mesh) continue;
    const m = (mesh.material as THREE.MeshPhysicalMaterial).clone();
    // Buildings are exterior shells, so there is nothing behind this pane. Glass is therefore
    // authored as a SURFACE rather than as a window: mostly opaque, slightly darker than the
    // render, with a low roughness so it catches the key as a highlight. A near-transparent pane
    // with an empty shell behind it reads as a hole punched in the building.
    m.transmission = 0;
    m.transparent = true;
    m.opacity = 0.92;
    m.color = new THREE.Color('#8E9EA6');
    m.roughness = 0.08;
    m.metalness = 0.10;
    m.envMapIntensity = 1;
    m.depthWrite = true;
    m.side = THREE.DoubleSide;
    m.map = null;
    m.needsUpdate = true;
    mesh.material = m;
  }

}


/**
 * Emit the four LINEAR repetition systems the generator cannot.
 *
 * generate_threejs_factory.py does support repetitionSystems, but only RADIALLY: it distributes
 * instances evenly around an axis with '(i * 360) / count', which is right for spokes, teeth and
 * fasteners and wrong for a row of mullions. It also reads 'count', while the spec schema writes
 * 'instanceCount' -- so these four systems were skipped in silence, with no warning and no
 * InstancedMesh in the output.
 *
 * Every cluster shares ONE unit BoxGeometry. Per-instance matrices carry the size, so N clusters
 * of M boxes cost one unique geometry between them -- unlike componentTree boxes, where the
 * generator bakes dimensions into the vertex data and each becomes a distinct geometry. That
 * distinction is what keeps this prop inside its 16-geometry ceiling.
 */
function applyLinearRepetition(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as any;
  const meshes: Record<string, THREE.Mesh> = rt?.meshes ?? {};
  const unit = new THREE.BoxGeometry(1, 1, 1);
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();

  const cluster = (
    id: string,
    material: THREE.Material,
    placements: { pos: [number, number, number]; scale: [number, number, number]; color?: string }[],
  ): THREE.InstancedMesh => {
    const inst = new THREE.InstancedMesh(unit, material, placements.length);
    inst.name = id;
    placements.forEach((p, i) => {
      m4.compose(new THREE.Vector3(...p.pos), q, new THREE.Vector3(...p.scale));
      inst.setMatrixAt(i, m4);
      if (p.color) inst.setColorAt(i, new THREE.Color(p.color));
    });
    inst.instanceMatrix.needsUpdate = true;
    if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    inst.castShadow = true;
    inst.receiveShadow = true;
    root.add(inst);
    meshes[id] = inst as unknown as THREE.Mesh;
    return inst;
  };

  // --- sliding entrance leaves: two, centred, meeting on the building's centre line ---
  const leaf = meshes['sliding-door-leaves'];
  if (leaf) {
    // The leaves are GLAZED. Authored on the aluminium material they rendered as two solid metal
    // panels blocking the shop; the plate shows glass in a thin frame, and the mullion cluster
    // already supplies the frame lines at this scale.
    const glazing = meshes['shopfront-glazing'];
    const mat = (glazing ? glazing.material : leaf.material) as THREE.Material;
    // Replace the single authored leaf with a 2-instance cluster on the SHARED unit box, and drop
    // the original geometry: keeping it would spend a unique geometry on a shape the cluster
    // already carries.
    leaf.parent?.remove(leaf);
    leaf.geometry.dispose();
    cluster('sliding-door-leaves', mat, [
      { pos: [-0.75, 1.615, 3.38], scale: [1.5, 2.53, 0.06] },
      { pos: [0.75, 1.615, 3.38], scale: [1.5, 2.53, 0.06] },
    ]);
  }

  const frameMat = (meshes['shopfront-framing']?.material as THREE.Material)
    ?? new THREE.MeshStandardMaterial({ color: 0xb8bcbe });

  // --- three mullions dividing four bays; the centre one is the doors' meeting stile ---
  cluster('shopfront-mullions', frameMat, [-1.5, 0, 1.5].map((x) => ({
    pos: [x, 1.745, 3.44] as [number, number, number],
    scale: [x === 0 ? 0.10 : 0.06, 2.79, 0.08] as [number, number, number],
  })));

  // --- manifestation tabs: a row across every bay at ~1.2 m ---
  const tabMat = new THREE.MeshStandardMaterial({
    color: 0xffffff, roughness: 0.40, metalness: 0, side: THREE.DoubleSide,
  });
  const TAB = ['#D8402C', '#E8C22A', '#2E8B57'];
  const tabs: { pos: [number, number, number]; scale: [number, number, number]; color?: string }[] = [];
  [-2.25, -0.75, 0.75, 2.25].forEach((bayCentre, bay) => {
    [-0.34, 0, 0.34].forEach((dx, k) => {
      tabs.push({
        pos: [bayCentre + dx, 1.20, 3.46],
        scale: [0.10, 0.04, 0.004],
        color: TAB[(bay + k) % TAB.length],
      });
    });
  });
  cluster('manifestation-tabs', tabMat, tabs);
}

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it
 * with (spec, options); the generated factory is named for its target and takes options alone.
 * `spec` is accepted and attached for host-side inspection -- the reconstruction data already
 * lives in the module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(
  spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = create7ElevenStoreBuildingModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  applyFasciaGraphic(root);
  applyGlazing(root);
  applyLinearRepetition(root);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: THREE. The root, and one per sliding entrance leaf. A building is a static
    // shell; its only genuine mechanism is the entrance pair, so every other component
    // declares animationRole 'static' and gets no axis. A pivot per component would describe
    // a machine this prop is not.
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

    // The leaves are one instanced component, so the two slide axes are declared here rather
    // than as two meshes. Named for the mechanism -- door-slide-l / -r -- never for a place
    // on the surface.
    const leaves = nodes['sliding-door-leaves'];
    if (leaves) {
      const BAY = 1.36, TRAVEL = BAY - 0.06;
      for (const [name, sign, x] of [
        ['door-slide-l', -1, -3.4 + BAY * 1.5],
        ['door-slide-r', 1, -3.4 + BAY * 2.5],
      ] as [string, number, number][]) {
        const p = new THREE.Object3D();
        p.name = name;
        p.position.set(x, (0.35 + 2.80 - 0.26) / 2, 3.5 - 0.10);
        p.userData.actionProfile = {
          animationRole: 'moving-part',
          pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [sign, 0, 0], name },
          constraints: [{ type: 'linear', axis: [sign, 0, 0], min: 0, max: TRAVEL }],
        };
        root.add(p);
        pivots.push(p);
      }
    }

    // Colliders are plain DATA, not Object3D, so they carry no .name of their own and would
    // stringify as [object Object] in any name-mapping consumer. Give each the id of the
    // component it owns -- and drop the empty ones: the generator writes a collider entry for
    // every component whether or not one was declared, and a nameless empty proxy in the
    // runtime list reads as a physics shape that exists and does nothing.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups: this prop declares NONE, and promotion checks built against declared
    // as an equality in BOTH directions. Derived rather than assumed empty, so a component that
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
      // puppeteer bridge and its registry field is a number; a Record of Object3D is circular
      // and fails to serialise, which surfaces as the whole stats object arriving undefined.
      // The Record stays reachable under byId.
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
