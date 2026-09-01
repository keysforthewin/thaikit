import * as THREE from 'three';

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

// Generated from ObjectSculptSpec target: No Parking Sign
// Sculpt build pass: blockout
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createNoParkingSignModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "No Parking Sign";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["sheeting"] = createSculptMaterial(
    "sheeting",
    {"id": "sheeting", "name": "Retroreflective vinyl sheeting on aluminium plate", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#FFFFFF", "secondary": ["#337AB9", "#BF6149", "#ACADA9"], "samplingNotes": "White on purpose. The albedo is delivered by the face atlas assigned after material construction, and any tint here would multiply into the printed graphic."}, "colorVariation": {"palette": ["#337AB9", "#BF6149", "#ACADA9", "#303131", "#9B9697"], "pattern": "authored-regions", "amplitude": 0.0, "heightCorrelation": 0.0}, "roughness": {"base": 0.42, "variation": 0.06, "map": "none", "localResponse": "Calendered vinyl over aluminium: smooth, with no tight highlight anywhere on the plate."}, "metalness": {"base": 0.0, "variation": 0.0, "notes": "Dielectric. The vinyl is what is seen; the plate underneath never reaches the surface on the front cap."}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "Flat plate, no cavities."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "field-blue", "color": "#337AB9", "region": "the disc's blue ground inside the red border", "evidenceRef": "region-field", "notes": "Trimmed mean #337AB9 over the full 3600 px of (470,200,60,60), high on the disc and clear of the diagonal slash. A vertical scanline at x=520 reads #2C73B3 to #3983C2 through this region, so the crop is representative rather than a lucky patch."}, {"id": "border-red", "color": "#BF6149", "region": "the prohibition border, 1.00R to 0.83R, and the diagonal slash", "evidenceRef": "region-border", "notes": "Trimmed mean #BF6149 over 676 px at (420,170,26,26) on the border's upper-left, the least shadowed part of it. The slash measured separately at (520,290,30,20) returns #BF7358 - lighter because it faces the key more directly - and the BORDER value is taken for both, because they are the same paint and the difference is the key's work."}, {"id": "supp-white", "color": "#ACADA9", "region": "the supplementary plate's ground", "evidenceRef": "region-supp", "notes": "Trimmed mean #ACADA9 over 1500 px at (430,650,50,30). Distinctly grubbier than the sheeting whites measured on the sibling signs; this plate is the dirtiest printed surface of the eight."}, {"id": "supp-ink", "color": "#303131", "region": "both legend lines on the supplementary plate", "evidenceRef": "region-supp-ink", "notes": "Trimmed mean of the 3092 sub-luma-70 px of (450,540,180,90). The whole-crop mean was far lighter because the crop's bright half is the white ground bouncing across a hard boundary, not ink."}, {"id": "plate-back", "color": "#9B9697", "region": "both back caps and the disc's rim wall", "evidenceRef": "region-rim", "notes": "Trimmed mean #9B9697 over 720 px at (350,250,12,60), on the disc's left edge return, which the three-quarter view shows directly. This is the colour every non-front-cap vertex collapses onto in the atlas. The BACKS are NOT OBSERVED and are assumed to share it at confidence 0.55."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["Reference plate, blue field at (470,200,60,60): 3600 px trimming to #337AB9 with no resolvable relief; the variation across the crop is print and weathering, not a height field.", "Reference plate, disc rim return at (350,250,12,60): 720 px trimming to #9B9697 - a clean mill-cut aluminium return with no grain.", "The identity of BOTH printed faces is PRINTED, not textured. They arrive as regions of one canvas atlas assigned after material construction, which the textureless declaration does not touch.", "Measured cost: five synthesised canvases at 1024 would cost roughly 1.9 s inside createObjectModel for this one material, for two surfaces whose height fields are flat."]}},
    options
  );
  materialMap["galvanised"] = createSculptMaterial(
    "galvanised",
    {"id": "galvanised", "name": "Hot-dip galvanised steel, weathering to rust at the foot", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#949C9F", "secondary": ["#725642"], "samplingNotes": "White base colour because the measured vertical ramp is delivered as VERTEX COLOURS, not a texture - a tint here would multiply into it."}, "colorVariation": {"palette": ["#949C9F", "#725642"], "pattern": "mottled", "amplitude": 0.18, "heightCorrelation": 0.0}, "roughness": {"base": 0.62, "variation": 0.12, "map": "none", "localResponse": "Mill-finish galvanising scatters rather than reflecting a lobe; the rusted foot is rougher still."}, "metalness": {"base": 0.25, "variation": 0.0, "notes": "Held at 0.25, not the high value a zinc coating suggests by name. There is no environment map in the target harness, so a high metalness has nothing to reflect and renders near-black. The measured luma spread of the shaft is scatter, not a lobe."}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "Prismatic solid, no cavities."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "galv-spangle", "color": "#949C9F", "region": "the post shaft above the splash line", "evidenceRef": "region-post", "notes": "Trimmed mean #949C9F over the 186 NEUTRAL pixels (|R-B|<12) of (490,740,36,90), with #A2A5A8 over 446 neutral px on the stub above the disc. Only 186 of 3240 px in the lower crop pass a strict neutral filter: this post is heavily weathered and the clean value is honest but THIN, which is recorded rather than hidden behind a fuller-looking unfiltered number."}, {"id": "foot-rust", "color": "#725642", "region": "the lowest 0.30 m of the shaft", "evidenceRef": "region-foot", "notes": "Trimmed mean #725642 over the 1060 ORANGE-BIASED px (R-B>28) of (495,880,34,60). A per-height-band scan reads 0 per cent at every band from y=520 to y=860, then 42 per cent at y=880 and 58 per cent at y=920 - a splash line with a hard top edge. The 46 per cent reading at y=480 is the disc's RED BORDER passing the orange filter, not rust, and was discarded."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["Reference plate, post midsection at (490,740,36,90): 186 NEUTRAL px (|R-B|<12) trimming to #949C9F. Hot-dip spangle is a flat crystalline blotch and the crop's spread is colour, not height.", "Reference plate, post foot at (495,880,34,60): 1060 ORANGE-BIASED px (R-B>28) trimming to #725642 - a surface bloom on a flat section, not a pitted profile at prop distance.", "The spangle and the rust ramp arrive as VERTEX COLOURS over 14 height segments, so a synthesised five-canvas set would be discarded work.", "Measured cost: five canvases at 1024 for this material alone is roughly 1.9 s inside createObjectModel, on a support whose whole geometry is 116 triangles."]}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const attachment_sign_plates_0 = null;
  const endpoint_sign_plates_0 = makeAttachmentEndpoint(attachment_sign_plates_0);
  const node_sign_plates_0 = new THREE.Group();
  node_sign_plates_0.name = "Prohibition disc and supplementary plate__pivot";
  node_sign_plates_0.scale.set(1, 1, 1);
  if (endpoint_sign_plates_0) {
    node_sign_plates_0.position.copy(endpoint_sign_plates_0.start);
    node_sign_plates_0.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_sign_plates_0.position.set(0.0, 0.0, 0.0);
    node_sign_plates_0.rotation.set(0.0, 0.0, 0.0);
  }
  node_sign_plates_0.userData.sculptComponent = {"id": "sign-plates", "name": "Prohibition disc and supplementary plate", "level": "macro", "role": "panel", "importance": 1.0, "confidence": 0.85, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Two flat plates, each two parallel planar caps joined by a short wall, closed and rigid. Merged into ONE buffer because they share a material, share a plane and never move relative to one another.", "geometryDescriptor": {"topologyIntent": "A 72-segment disc and a rounded-rect plate, merged into ONE BufferGeometry at build time.", "radialSegments": 72, "heightSegments": 1, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - rewritten after generation into a THREE-region atlas: the disc's front cap takes the prohibition graphic, the supplementary plate's front cap takes the NO PARKING legend, and every wall and back-cap vertex collapses to a single bare-aluminium texel. Two printed faces and a plain back on ONE material and ONE draw call.", "normalStrategy": "flat-shaded caps, smooth disc wall", "segmentRationale": "72 radial segments on the disc, which is where the triangles go and the only place they are spent. The circular outline IS this prop's silhouette and a visible polygon on the rim is the one defect no material work can recover. The supplementary plate gets 4 segments per corner and nothing else.", "mergedAssembly": {"reason": "maxDrawCalls is 2 and the post must have one of them, so the disc and the supplementary plate get ONE mesh between them. They share a material, sit in the same plane and never move relative to each other, so merging is invisible. Recorded as a BLOCKOUT decision so a later pass does not 'fix' the shallow tree by splitting it and silently costing every instance of this sign an extra submission.", "parts": [{"id": "prohibition-disc", "level": "meso", "primitive": "cylinder", "extent": {"width": 0.6, "height": 0.6, "depth": 0.012}, "localOffset": [0.0, 2.0, 0.0205], "note": "The 0.6 m regulatory disc, which sets the DECLARED width. Rotated so its axis lies on +Z and its caps face front and back."}, {"id": "supplementary-plate", "level": "meso", "primitive": "extrude", "extent": {"width": 0.46, "height": 0.155, "depth": 0.012}, "localOffset": [0.0, 1.53, 0.0205], "note": "The white NO PARKING plate hung under the disc. Narrower than the disc, so it does NOT set the prop's width - the reference confirms this, its 285 px against the disc's 372 px across the same view."}], "jointNote": "The two plates share a plane at z=+0.0145 to +0.0265 but do not touch: a 0.32 m vertical gap separates the disc's bottom edge at y=1.70 from the plate's top at y=1.61. Coplanar and co-facing surfaces that do not OVERLAP cannot z-fight, which is why they may share a plane where a panel sitting flush on a wall may not."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.6, "height": 0.94, "depth": 0.012, "units": "m", "confidence": 0.8}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. Neither plate turns on anything; this is the merged component's transform origin, and the model exposes exactly ONE named pivot, the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 2.0, 0.0205], "scale": [0.3, 0.006, 0.3], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, and the proxy is put on the DISC because the disc is what a projectile meets. The supplementary plate is inside the disc's swept footprint in plan and needs no proxy of its own."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}}, "material": "sheeting", "materialLayers": ["sheeting"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "red-border", "description": "Wide red prohibition border, 1.00R to about 0.83R, chalked toward orange.", "representation": "texture-region"}, {"id": "blue-field", "description": "Blue ground filling the disc inside the border.", "representation": "texture-region"}, {"id": "red-slash", "description": "Single red diagonal bar across the disc, running upper-left to lower-right, the same red as the border.", "representation": "texture-region"}, {"id": "supp-legend", "description": "Two dark legend lines on the white supplementary plate, Thai over Latin NO PARKING.", "representation": "texture-region"}, {"id": "face-bolt-heads", "description": "Two dark hex bolt heads on the disc's vertical centreline. Printed, not modelled.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#337AB9", "stops": [{"position": 0.0, "color": "rgba(155,150,151,1.0)", "note": "bare aluminium rim return, measured #9B9697 over 720 px on the disc's left edge"}, {"position": 0.02, "color": "rgba(191,97,73,1.0)", "note": "red prohibition border outer edge, measured #BF6149"}, {"position": 0.17, "color": "rgba(191,97,73,1.0)", "note": "red border inner edge at 0.83R, read off the x=520 scanline"}, {"position": 0.2, "color": "rgba(51,122,185,1.0)", "note": "blue field begins, measured #337AB9 over 3600 px"}, {"position": 1.0, "color": "rgba(51,122,185,1.0)", "note": "blue field to centre; the diagonal slash sits on top of it as solid fill, not as a ramp stop"}], "finishStyle": "satin", "notes": "An ordered RADIAL ramp measured inward from the disc edge. Every boundary is hard-edged printed vinyl, so the stops are doubled at each edge rather than blended. The supplementary plate is NOT on this ramp - it is a separate printed region of the same material, white ground with dark legend, and it rides its own patch of the atlas.", "dominantAlbedo": "rgba(51,122,185,1.0)", "secondaryAlbedo": "rgba(191,97,73,1.0)", "materialClass": "plastic", "materialClassConfidence": 0.88}};
  node_sign_plates_0.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. Neither plate turns on anything; this is the merged component's transform origin, and the model exposes exactly ONE named pivot, the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 2.0, 0.0205], "scale": [0.3, 0.006, 0.3], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, and the proxy is put on the DISC because the disc is what a projectile meets. The supplementary plate is inside the disc's swept footprint in plan and needs no proxy of its own."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}};
  (nodes["root"] ?? root).add(node_sign_plates_0);
  nodes["sign-plates"] = node_sign_plates_0;
  const mesh_sign_plates_0Geometry = endpoint_sign_plates_0
    ? new THREE.CylinderGeometry(endpoint_sign_plates_0.endRadius, endpoint_sign_plates_0.baseRadius, endpoint_sign_plates_0.length, 8, 4)
    : new THREE.CylinderGeometry(0.5, 0.5, 1, 10, 4);
  if (!endpoint_sign_plates_0) {
    mesh_sign_plates_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_sign_plates_0 = new THREE.Mesh(
    mesh_sign_plates_0Geometry,
    materialMap["sheeting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_sign_plates_0.name = "Prohibition disc and supplementary plate";
  if (endpoint_sign_plates_0) {
    mesh_sign_plates_0.position.copy(endpoint_sign_plates_0.midpoint);
    mesh_sign_plates_0.quaternion.copy(endpoint_sign_plates_0.quaternion);
  }
  mesh_sign_plates_0.castShadow = options.castShadow ?? true;
  mesh_sign_plates_0.receiveShadow = options.receiveShadow ?? true;
  mesh_sign_plates_0.userData.sculptComponent = {"id": "sign-plates", "name": "Prohibition disc and supplementary plate", "level": "macro", "role": "panel", "importance": 1.0, "confidence": 0.85, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Two flat plates, each two parallel planar caps joined by a short wall, closed and rigid. Merged into ONE buffer because they share a material, share a plane and never move relative to one another.", "geometryDescriptor": {"topologyIntent": "A 72-segment disc and a rounded-rect plate, merged into ONE BufferGeometry at build time.", "radialSegments": 72, "heightSegments": 1, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - rewritten after generation into a THREE-region atlas: the disc's front cap takes the prohibition graphic, the supplementary plate's front cap takes the NO PARKING legend, and every wall and back-cap vertex collapses to a single bare-aluminium texel. Two printed faces and a plain back on ONE material and ONE draw call.", "normalStrategy": "flat-shaded caps, smooth disc wall", "segmentRationale": "72 radial segments on the disc, which is where the triangles go and the only place they are spent. The circular outline IS this prop's silhouette and a visible polygon on the rim is the one defect no material work can recover. The supplementary plate gets 4 segments per corner and nothing else.", "mergedAssembly": {"reason": "maxDrawCalls is 2 and the post must have one of them, so the disc and the supplementary plate get ONE mesh between them. They share a material, sit in the same plane and never move relative to each other, so merging is invisible. Recorded as a BLOCKOUT decision so a later pass does not 'fix' the shallow tree by splitting it and silently costing every instance of this sign an extra submission.", "parts": [{"id": "prohibition-disc", "level": "meso", "primitive": "cylinder", "extent": {"width": 0.6, "height": 0.6, "depth": 0.012}, "localOffset": [0.0, 2.0, 0.0205], "note": "The 0.6 m regulatory disc, which sets the DECLARED width. Rotated so its axis lies on +Z and its caps face front and back."}, {"id": "supplementary-plate", "level": "meso", "primitive": "extrude", "extent": {"width": 0.46, "height": 0.155, "depth": 0.012}, "localOffset": [0.0, 1.53, 0.0205], "note": "The white NO PARKING plate hung under the disc. Narrower than the disc, so it does NOT set the prop's width - the reference confirms this, its 285 px against the disc's 372 px across the same view."}], "jointNote": "The two plates share a plane at z=+0.0145 to +0.0265 but do not touch: a 0.32 m vertical gap separates the disc's bottom edge at y=1.70 from the plate's top at y=1.61. Coplanar and co-facing surfaces that do not OVERLAP cannot z-fight, which is why they may share a plane where a panel sitting flush on a wall may not."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.6, "height": 0.94, "depth": 0.012, "units": "m", "confidence": 0.8}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. Neither plate turns on anything; this is the merged component's transform origin, and the model exposes exactly ONE named pivot, the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 2.0, 0.0205], "scale": [0.3, 0.006, 0.3], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, and the proxy is put on the DISC because the disc is what a projectile meets. The supplementary plate is inside the disc's swept footprint in plan and needs no proxy of its own."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}}, "material": "sheeting", "materialLayers": ["sheeting"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "red-border", "description": "Wide red prohibition border, 1.00R to about 0.83R, chalked toward orange.", "representation": "texture-region"}, {"id": "blue-field", "description": "Blue ground filling the disc inside the border.", "representation": "texture-region"}, {"id": "red-slash", "description": "Single red diagonal bar across the disc, running upper-left to lower-right, the same red as the border.", "representation": "texture-region"}, {"id": "supp-legend", "description": "Two dark legend lines on the white supplementary plate, Thai over Latin NO PARKING.", "representation": "texture-region"}, {"id": "face-bolt-heads", "description": "Two dark hex bolt heads on the disc's vertical centreline. Printed, not modelled.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#337AB9", "stops": [{"position": 0.0, "color": "rgba(155,150,151,1.0)", "note": "bare aluminium rim return, measured #9B9697 over 720 px on the disc's left edge"}, {"position": 0.02, "color": "rgba(191,97,73,1.0)", "note": "red prohibition border outer edge, measured #BF6149"}, {"position": 0.17, "color": "rgba(191,97,73,1.0)", "note": "red border inner edge at 0.83R, read off the x=520 scanline"}, {"position": 0.2, "color": "rgba(51,122,185,1.0)", "note": "blue field begins, measured #337AB9 over 3600 px"}, {"position": 1.0, "color": "rgba(51,122,185,1.0)", "note": "blue field to centre; the diagonal slash sits on top of it as solid fill, not as a ramp stop"}], "finishStyle": "satin", "notes": "An ordered RADIAL ramp measured inward from the disc edge. Every boundary is hard-edged printed vinyl, so the stops are doubled at each edge rather than blended. The supplementary plate is NOT on this ramp - it is a separate printed region of the same material, white ground with dark legend, and it rides its own patch of the atlas.", "dominantAlbedo": "rgba(51,122,185,1.0)", "secondaryAlbedo": "rgba(191,97,73,1.0)", "materialClass": "plastic", "materialClassConfidence": 0.88}};
  node_sign_plates_0.add(mesh_sign_plates_0);
  meshes["sign-plates"] = mesh_sign_plates_0;
  colliders["sign-plates"] = {"type": "cylinder", "offset": [0, 2.0, 0.0205], "scale": [0.3, 0.006, 0.3], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, and the proxy is put on the DISC because the disc is what a projectile meets. The supplementary plate is inside the disc's swept footprint in plan and needs no proxy of its own."};

  const endpoint_post_1 = makeAttachmentEndpoint(null);
  const node_post_1 = new THREE.Group();
  node_post_1.name = "Galvanised square post__pivot";
  node_post_1.scale.set(1, 1, 1);
  if (endpoint_post_1) {
    node_post_1.position.copy(endpoint_post_1.start);
    node_post_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_post_1.position.set(0.0, 0.0, 0.0);
    node_post_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_post_1.userData.sculptComponent = {"id": "post", "name": "Galvanised square post", "level": "macro", "role": "support", "importance": 0.85, "confidence": 0.8, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A single axis-aligned prismatic solid that never deforms. A box is exact here, not an approximation.", "geometryDescriptor": {"topologyIntent": "BoxGeometry(0.05, 2.30, 0.05, 1, 14, 1), translated so it runs from y=0 to y=2.30.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "none - the weathering ramp arrives as VERTEX COLOURS across 14 height segments, not as a texture", "normalStrategy": "flat", "note": "Left unchamfered on purpose: the arris is the identity feature and a box already has it. This post runs the FULL height of the prop and past the top of the disc, which the reference shows clearly - a stub of post is visible above the disc's crown.", "mergedAssembly": {"reason": "Nothing to merge: the reference shows no flange and no cap, the post simply runs out of the bottom of the frame. Recorded explicitly so a later pass does not invent a footplate this sign does not have.", "parts": [{"id": "post-shaft", "level": "meso", "primitive": "box", "extent": {"width": 0.05, "height": 2.3, "depth": 0.05}, "localOffset": [0.0, 1.15, -0.0125], "note": "50 mm square hollow section running the full 2.30 m from ground contact to a cut top just above the disc's crown, which is what the reference shows."}], "jointNote": "In DEPTH the plates' back faces sit at z=+0.0145 and the post's front face at z=+0.0125: a 2 mm standoff, so the plates stand proud and no two same-facing surfaces are coincident."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.05, "height": 2.3, "depth": 0.05, "units": "m", "confidence": 0.8}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center. This is the ONLY named pivot in the prop, and it is the correct count: a bolted roadside sign has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 1.15, -0.0125], "scale": [0.035, 1.15, 0.035], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A vertical cylinder circumscribing the 50 mm square shaft - what a player actually walks into."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}}, "material": "galvanised", "materialLayers": ["galvanised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "galv-spangle", "description": "Mottled grey hot-dip spangle over the post.", "representation": "texture-region"}, {"id": "foot-rust", "description": "Orange-brown rust over the lowest stretch of the shaft, arriving abruptly at a splash line.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#949C9F", "stops": [{"position": 0.0, "color": "rgba(162,165,168,1.0)", "note": "post stub above the disc, cleanest coating, measured #A2A5A8 over 446 neutral px"}, {"position": 0.62, "color": "rgba(148,156,159,1.0)", "note": "shaft field value, measured #949C9F over 186 neutral px"}, {"position": 0.88, "color": "rgba(148,156,159,1.0)", "note": "held clean: the per-band rusty-pixel scan reads 0 per cent at every band from y=520 to y=860"}, {"position": 0.9, "color": "rgba(114,86,66,1.0)", "note": "SHARP transition at the splash line. The scan jumps to 42 per cent at y=880 and 58 per cent at y=920."}, {"position": 1.0, "color": "rgba(114,86,66,1.0)", "note": "rust to ground contact, measured #725642 over 1060 orange-biased px"}], "finishStyle": "satin", "notes": "An ordered vertical ramp measured DOWNWARD from the post top, and it is a STEP rather than a fade. The clean value was taken from only 186 neutral pixels because this post is heavily weathered and little of it passes a strict neutral filter - the number is honest but thin, and it is why this ramp's confidence sits below the siblings'.", "dominantAlbedo": "rgba(148,156,159,1.0)", "secondaryAlbedo": "rgba(114,86,66,1.0)", "materialClass": "metal", "materialClassConfidence": 0.8}};
  node_post_1.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center. This is the ONLY named pivot in the prop, and it is the correct count: a bolted roadside sign has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 1.15, -0.0125], "scale": [0.035, 1.15, 0.035], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A vertical cylinder circumscribing the 50 mm square shaft - what a player actually walks into."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}};
  (nodes["root"] ?? root).add(node_post_1);
  nodes["post"] = node_post_1;
  const mesh_post_1Geometry = endpoint_post_1
    ? new THREE.CylinderGeometry(endpoint_post_1.endRadius, endpoint_post_1.baseRadius, endpoint_post_1.length, 8, 4)
    : new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
  if (!endpoint_post_1) {
    mesh_post_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_post_1 = new THREE.Mesh(
    mesh_post_1Geometry,
    materialMap["galvanised"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_post_1.name = "Galvanised square post";
  if (endpoint_post_1) {
    mesh_post_1.position.copy(endpoint_post_1.midpoint);
    mesh_post_1.quaternion.copy(endpoint_post_1.quaternion);
  }
  mesh_post_1.castShadow = options.castShadow ?? true;
  mesh_post_1.receiveShadow = options.receiveShadow ?? true;
  mesh_post_1.userData.sculptComponent = {"id": "post", "name": "Galvanised square post", "level": "macro", "role": "support", "importance": 0.85, "confidence": 0.8, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A single axis-aligned prismatic solid that never deforms. A box is exact here, not an approximation.", "geometryDescriptor": {"topologyIntent": "BoxGeometry(0.05, 2.30, 0.05, 1, 14, 1), translated so it runs from y=0 to y=2.30.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "none - the weathering ramp arrives as VERTEX COLOURS across 14 height segments, not as a texture", "normalStrategy": "flat", "note": "Left unchamfered on purpose: the arris is the identity feature and a box already has it. This post runs the FULL height of the prop and past the top of the disc, which the reference shows clearly - a stub of post is visible above the disc's crown.", "mergedAssembly": {"reason": "Nothing to merge: the reference shows no flange and no cap, the post simply runs out of the bottom of the frame. Recorded explicitly so a later pass does not invent a footplate this sign does not have.", "parts": [{"id": "post-shaft", "level": "meso", "primitive": "box", "extent": {"width": 0.05, "height": 2.3, "depth": 0.05}, "localOffset": [0.0, 1.15, -0.0125], "note": "50 mm square hollow section running the full 2.30 m from ground contact to a cut top just above the disc's crown, which is what the reference shows."}], "jointNote": "In DEPTH the plates' back faces sit at z=+0.0145 and the post's front face at z=+0.0125: a 2 mm standoff, so the plates stand proud and no two same-facing surfaces are coincident."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.05, "height": 2.3, "depth": 0.05, "units": "m", "confidence": 0.8}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center. This is the ONLY named pivot in the prop, and it is the correct count: a bolted roadside sign has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 1.15, -0.0125], "scale": [0.035, 1.15, 0.035], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A vertical cylinder circumscribing the 50 mm square shaft - what a player actually walks into."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}}, "material": "galvanised", "materialLayers": ["galvanised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "galv-spangle", "description": "Mottled grey hot-dip spangle over the post.", "representation": "texture-region"}, {"id": "foot-rust", "description": "Orange-brown rust over the lowest stretch of the shaft, arriving abruptly at a splash line.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#949C9F", "stops": [{"position": 0.0, "color": "rgba(162,165,168,1.0)", "note": "post stub above the disc, cleanest coating, measured #A2A5A8 over 446 neutral px"}, {"position": 0.62, "color": "rgba(148,156,159,1.0)", "note": "shaft field value, measured #949C9F over 186 neutral px"}, {"position": 0.88, "color": "rgba(148,156,159,1.0)", "note": "held clean: the per-band rusty-pixel scan reads 0 per cent at every band from y=520 to y=860"}, {"position": 0.9, "color": "rgba(114,86,66,1.0)", "note": "SHARP transition at the splash line. The scan jumps to 42 per cent at y=880 and 58 per cent at y=920."}, {"position": 1.0, "color": "rgba(114,86,66,1.0)", "note": "rust to ground contact, measured #725642 over 1060 orange-biased px"}], "finishStyle": "satin", "notes": "An ordered vertical ramp measured DOWNWARD from the post top, and it is a STEP rather than a fade. The clean value was taken from only 186 neutral pixels because this post is heavily weathered and little of it passes a strict neutral filter - the number is honest but thin, and it is why this ramp's confidence sits below the siblings'.", "dominantAlbedo": "rgba(148,156,159,1.0)", "secondaryAlbedo": "rgba(114,86,66,1.0)", "materialClass": "metal", "materialClassConfidence": 0.8}};
  node_post_1.add(mesh_post_1);
  meshes["post"] = mesh_post_1;
  colliders["post"] = {"type": "cylinder", "offset": [0, 1.15, -0.0125], "scale": [0.035, 1.15, 0.035], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A vertical cylinder circumscribing the 50 mm square shaft - what a player actually walks into."};

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createNoParkingSignLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "No Parking Sign look-dev lights";
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
  lights.userData.lightingFromPhoto = [{"role": "key", "type": "area", "directionHint": [-0.44, 0.52, 0.73], "intensity": 1.0, "colorTemperatureK": 5600, "evidence": "The disc's blue field reads 100-106 on its upper-left arc against 118-124 lower-right, and the red slash reads #BF7358 where the border reads #BF6149 - a soft key, high and camera-left, lifting the lower-right of the disc."}, {"role": "fill", "type": "hemisphere", "directionHint": [0.55, 0.2, -0.4], "intensity": 0.34, "colorTemperatureK": 6500, "evidence": "The disc's rim return stays at luma 151 where it turns away from the key, which only happens with real fill rather than a single source."}, {"role": "rim", "type": "directional", "directionHint": [0.6, 0.3, -0.75], "intensity": 0.22, "colorTemperatureK": 6500, "evidence": "A thin bright line separates the disc's upper-right arc from the backdrop."}, {"role": "environment", "type": "studio-context", "environment": "studio softbox on a flat neutral backdrop", "exposure": 1.0, "toneMapping": "ACESFilmic", "evidence": "Border-ring scan over 1024 samples: mean luma 167.0 with a standard deviation of 0.03, trimming to #A7A7A7. The flattest backdrop of the eight, and MEASURED rather than assumed to be the grey the prompt asked for.", "note": "The render harness backs onto a much darker ground, so a candidate render reads darker overall and that difference is the backdrop, not the prop."}, {"role": "contact-shadow", "type": "ground-shadow", "intensity": 0.5, "evidence": "The reference runs the post out of the bottom of the frame and shows no ground contact, so the contact shadow is grounded at y=0 by construction rather than matched to an observed one.", "behavior": "Grounded at y=0, the prop's origin. Ambient occlusion is left at zero on both materials: a convex prism and two sealed plates have no cavity for AO to find, and baking any into base colour is what the material pass forbids."}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  return lights;
}


// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameNoParkingSignCamera(
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


export function configureNoParkingSignRenderer(renderer: THREE.WebGLRenderer): void {
  // Load-bearing for view-dependent finishes (anodized / Doppler): without ACES + sRGB
  // the environment reflection reads flat/washed instead of a believable metal response.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}
/* ---------------------------------------------------------------------------
 * thaikit post-generation layer — shared helpers.
 *
 * The generator emits the component tree, the userData contract and the materials.
 * It does NOT emit real dimensions, the merged assemblies the specs' `mergedAssembly`
 * blocks describe, the UV atlases that let ONE material carry a printed front and a
 * bare back, the printed faces, or the measured weathering ramps. Those live here and
 * are re-applied by rebuild-factory.sh, because a bare regenerate would silently drop
 * them and leave placeholder primitives that still validate.
 * ------------------------------------------------------------------------ */

/** Deterministic hash noise. No Math.random anywhere: every instance must be identical. */
function noise1(i: number): number {
  let h = (i * 374761393 + 668265263) >>> 0;
  h = (h ^ (h >>> 13)) >>> 0;
  h = (h * 1274126177) >>> 0;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

/**
 * Position-keyed noise, quantised so coincident corners agree EXACTLY. Keying noise to
 * the vertex index instead gives the three corners of every triangle three different
 * values on a non-indexed buffer, and the surface renders as a patchwork of flat facets.
 */
function posNoise(x: number, y: number, z: number, q = 0.04): number {
  const k = (v: number) => Math.round(v / q);
  return noise1((k(y) * 73856093) ^ (k(x) * 19349663) ^ (k(z) * 83492791));
}

function toNonIndexed(g: THREE.BufferGeometry): THREE.BufferGeometry {
  return g.index ? g.toNonIndexed() : g;
}

/** Hand-rolled concat: BufferGeometryUtils lives under three/examples, which this bundle cannot import. */
function concatGeometry(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const out = new THREE.BufferGeometry();
  for (const name of ['position', 'normal', 'uv']) {
    const attrs = parts.map((p) => p.getAttribute(name) as THREE.BufferAttribute);
    if (attrs.some((a) => !a)) continue;
    const total = attrs.reduce((s, a) => s + a.array.length, 0);
    const arr = new Float32Array(total);
    let off = 0;
    for (const a of attrs) { arr.set(a.array as Float32Array, off); off += a.array.length; }
    out.setAttribute(name, new THREE.BufferAttribute(arr, attrs[0].itemSize));
  }
  return out;
}

/** A box, non-indexed and translated into place, ready to merge. */
function boxAt(w: number, h: number, d: number, x: number, y: number, z: number,
               hSeg = 1): THREE.BufferGeometry {
  const g = toNonIndexed(new THREE.BoxGeometry(w, h, d, 1, hSeg, 1));
  g.translate(x, y, z);
  return g;
}

/** A vertical round tube, non-indexed and translated into place. */
function tubeAt(r: number, h: number, x: number, y: number, z: number,
                radial = 10, hSeg = 1): THREE.BufferGeometry {
  const g = toNonIndexed(new THREE.CylinderGeometry(r, r, h, radial, hSeg));
  g.translate(x, y, z);
  return g;
}

/**
 * Bake an ordered vertical colour ramp onto a geometry as VERTEX COLOURS, plus a
 * low-amplitude position-keyed blotch. Heights are in METRES, measured up from y=0.
 * This is how the weathering arrives on every support in this set: a texture would be
 * the expensive way to say the same thing, and these supports are tens of triangles.
 */
function bakeRamp(geo: THREE.BufferGeometry, ramp: Array<[number, string]>,
                  blotch = 0.07): void {
  const stops = ramp.map(([t, c]) => [t, new THREE.Color(c)] as [number, THREE.Color]);
  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i += 1) {
    const y = pos.getY(i);
    let k = 0;
    while (k < stops.length - 2 && y > stops[k + 1][0]) k += 1;
    const [t0, c0] = stops[k];
    const [t1, c1] = stops[k + 1];
    const f = t1 > t0 ? (y - t0) / (t1 - t0) : 0;
    c.copy(c0).lerp(c1, Math.min(1, Math.max(0, f)));
    const n = (posNoise(pos.getX(i), y, pos.getZ(i)) - 0.5) * blotch;
    colors[i * 3] = Math.min(1, Math.max(0, c.r + n));
    colors[i * 3 + 1] = Math.min(1, Math.max(0, c.g + n));
    colors[i * 3 + 2] = Math.min(1, Math.max(0, c.b + n));
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
}

/** Swap a component's placeholder geometry for the real one and neutralise the mesh transform. */
function setMeshGeometry(root: THREE.Group, id: string, geo: THREE.BufferGeometry): THREE.Mesh | null {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const mesh = rt?.meshes?.[id];
  if (!mesh) return null;
  mesh.geometry.dispose();
  mesh.geometry = geo;
  mesh.position.set(0, 0, 0);
  mesh.rotation.set(0, 0, 0);
  mesh.scale.set(1, 1, 1);
  return mesh;
}

/** A rounded-rectangle path, for plates whose corner radius is an identity feature. */
function roundedRectShape(hw: number, hh: number, r: number, seg = 4): THREE.Shape {
  const s = new THREE.Shape();
  const k = Math.min(r, hw, hh);
  s.moveTo(-hw + k, -hh);
  s.lineTo(hw - k, -hh);
  s.absarc(hw - k, -hh + k, k, -Math.PI / 2, 0, false);
  s.lineTo(hw, hh - k);
  s.absarc(hw - k, hh - k, k, 0, Math.PI / 2, false);
  s.lineTo(-hw + k, hh);
  s.absarc(-hw + k, hh - k, k, Math.PI / 2, Math.PI, false);
  s.lineTo(-hw, -hh + k);
  s.absarc(-hw + k, -hh + k, k, Math.PI, Math.PI * 1.5, false);
  void seg;
  return s;
}

/** Fit text to a target width by measuring, then re-setting the font. */
function fitText(ctx: CanvasRenderingContext2D, text: string, targetW: number,
                 font: (px: number) => string, startPx: number): number {
  let px = startPx;
  ctx.font = font(px);
  const m = ctx.measureText(text).width;
  if (m > 0) px = px * (targetW / m);
  ctx.font = font(px);
  return px;
}

const SANS = (px: number) => `bold ${px}px "Arial Narrow", "Helvetica Neue Condensed", Impact, sans-serif`;
const SANS_R = (px: number) => `${px}px "Noto Sans Thai", "Arial", sans-serif`;

/** Measured off assets/no-parking-sign/preview.jpg. See the spec's localOverrides for crops. */
const PALETTE = {
  field: '#337AB9',    // 3600 px at (470,200,60,60), clear of the slash
  red: '#BF6149',      // 676 px at (420,170,26,26), the least-shadowed border arc
  suppWhite: '#ACADA9',// 1500 px at (430,650,50,30) - the grubbiest printed white of the eight
  suppInk: '#303131',  // 3092 sub-luma-70 px of (450,540,180,90)
  back: '#9B9697',     // 720 px at (350,250,12,60), the disc's bare aluminium rim return
  galv: '#949C9F',     // only 186 neutral px of (490,740,36,90) - honest but THIN
  galvClean: '#A2A5A8',// 446 neutral px of (470,100,40,40), the stub above the disc
  rust: '#725642',     // 1060 orange-biased px of (495,880,34,60)
} as const;

/** Geometry, in metres, from the spec. Origin base-center: y=0 is ground contact. */
const DIM = {
  discR: 0.30, discT: 0.012, discSegs: 72, discCY: 2.00, plateZ: 0.0205,
  suppW: 0.46, suppH: 0.155, suppT: 0.012, suppR: 0.010, suppCY: 1.53,
  postSide: 0.05, postH: 2.30, postZ: -0.0125,
  /** Border runs 1.00R to 0.83R, read off the x=520 scanline. */
  rBorderInner: 0.83,
} as const;

/** The atlas packs TWO printed faces plus a plain patch. Regions in normalised uv. */
const ATLAS = {
  disc: { cx: 0.28, cy: 0.28, r: 0.26 },   // the prohibition disc, upper-left quadrant
  supp: { x: 0.56, y: 0.06, w: 0.40, h: 0.14 }, // the NO PARKING plate, upper-right
  plain: { u: 0.5, v: 0.85 },              // one texel of bare aluminium, lower half
} as const;

let faceAtlasCache: THREE.CanvasTexture | null | undefined;

/**
 * ONE canvas for the whole sheeting material, carrying the disc graphic, the supplementary
 * plate's legend AND the bare-aluminium back in three regions. This is what lets a blue
 * disc, a white plate and a plain back share one material and one draw call; giving the
 * supplementary plate its own material would have cost a material AND a draw call.
 */
function faceAtlas(size: number): THREE.CanvasTexture | null {
  if (faceAtlasCache !== undefined) return faceAtlasCache;
  // No DOM outside the browser. The geometry-only tools evaluate this module in bare Node.
  if (typeof document === 'undefined') { faceAtlasCache = null; return null; }
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) { faceAtlasCache = null; return null; }

  // The ground: bare aluminium. Every wall and back-cap vertex lands on this.
  ctx.fillStyle = PALETTE.back;
  ctx.fillRect(0, 0, size, size);

  // --- the prohibition disc -------------------------------------------------
  const dcx = ATLAS.disc.cx * size, dcy = ATLAS.disc.cy * size, R = ATLAS.disc.r * size;
  ctx.fillStyle = PALETTE.red;
  ctx.beginPath(); ctx.arc(dcx, dcy, R, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = PALETTE.field;
  ctx.beginPath(); ctx.arc(dcx, dcy, R * DIM.rBorderInner, 0, Math.PI * 2); ctx.fill();

  // The diagonal slash. It runs upper-LEFT to lower-RIGHT and that is chiral: a slash the
  // other way is a different sign, so the front-cap UV mapping must not mirror it.
  ctx.save();
  ctx.beginPath(); ctx.arc(dcx, dcy, R * DIM.rBorderInner, 0, Math.PI * 2); ctx.clip();
  ctx.strokeStyle = PALETTE.red;
  ctx.lineWidth = R * 0.20;
  ctx.beginPath();
  ctx.moveTo(dcx - R * 0.80, dcy - R * 0.80);
  ctx.lineTo(dcx + R * 0.80, dcy + R * 0.80);
  ctx.stroke();
  ctx.restore();

  // Two bolt heads on the vertical centreline. Printed, not modelled: at 14 mm they are
  // under a pixel at prop distance and geometry for them would cost a unique geometry.
  ctx.fillStyle = 'rgba(48,49,49,0.85)';
  for (const s of [-1, 1]) {
    ctx.beginPath(); ctx.arc(dcx, dcy + s * R * 0.74, R * 0.035, 0, Math.PI * 2); ctx.fill();
  }

  // --- the supplementary NO PARKING plate -----------------------------------
  const sx = ATLAS.supp.x * size, sy = ATLAS.supp.y * size;
  const sw = ATLAS.supp.w * size, sh = ATLAS.supp.h * size;
  ctx.fillStyle = PALETTE.suppWhite;
  ctx.fillRect(sx, sy, sw, sh);
  ctx.fillStyle = PALETTE.suppInk;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  fitText(ctx, 'ห้ามจอด', sw * 0.52, SANS_R, sh * 0.52);
  ctx.fillText('ห้ามจอด', sx + sw * 0.5, sy + sh * 0.36);
  fitText(ctx, 'NO PARKING', sw * 0.62, SANS, sh * 0.36);
  ctx.fillText('NO PARKING', sx + sw * 0.5, sy + sh * 0.74);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  faceAtlasCache = tex;
  return tex;
}

function buildGeometry(root: THREE.Group): void {
  // --- the disc: 72 segments, laid on its side so the caps face front and back --------
  const disc = toNonIndexed(new THREE.CylinderGeometry(DIM.discR, DIM.discR, DIM.discT, DIM.discSegs, 1));
  disc.rotateX(Math.PI / 2);
  disc.translate(0, DIM.discCY, DIM.plateZ);
  {
    const pos = disc.getAttribute('position') as THREE.BufferAttribute;
    const nrm = disc.getAttribute('normal') as THREE.BufferAttribute;
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i += 1) {
      // After rotateX the front cap faces +Z. +X maps to atlas +u and +Y to atlas +v, so
      // the chiral slash is NOT mirrored.
      if (nrm.getZ(i) > 0.5) {
        uv[i * 2] = ATLAS.disc.cx + ATLAS.disc.r * (pos.getX(i) / DIM.discR);
        uv[i * 2 + 1] = 1 - (ATLAS.disc.cy + ATLAS.disc.r * (-(pos.getY(i) - DIM.discCY) / DIM.discR));
      } else {
        uv[i * 2] = ATLAS.plain.u; uv[i * 2 + 1] = ATLAS.plain.v;
      }
    }
    disc.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  }

  // --- the supplementary plate, merged into the SAME buffer ---------------------------
  const suppShape = roundedRectShape(DIM.suppW / 2, DIM.suppH / 2, DIM.suppR, 4);
  const supp = toNonIndexed(new THREE.ExtrudeGeometry(suppShape, {
    depth: DIM.suppT, bevelEnabled: false, curveSegments: 4,
  }));
  supp.translate(0, DIM.suppCY, DIM.plateZ - DIM.suppT / 2);
  {
    const pos = supp.getAttribute('position') as THREE.BufferAttribute;
    const nrm = supp.getAttribute('normal') as THREE.BufferAttribute;
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i += 1) {
      if (nrm.getZ(i) > 0.5) {
        uv[i * 2] = ATLAS.supp.x + ATLAS.supp.w * (pos.getX(i) / DIM.suppW + 0.5);
        uv[i * 2 + 1] = 1 - (ATLAS.supp.y + ATLAS.supp.h * (0.5 - (pos.getY(i) - DIM.suppCY) / DIM.suppH));
      } else {
        uv[i * 2] = ATLAS.plain.u; uv[i * 2 + 1] = ATLAS.plain.v;
      }
    }
    supp.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  }

  const merged = concatGeometry([disc, supp]);
  disc.dispose(); supp.dispose();
  setMeshGeometry(root, 'sign-plates', merged);

  // --- the post: full height, past the disc's crown, ramp as vertex colours -----------
  const post = boxAt(DIM.postSide, DIM.postH, DIM.postSide, 0, DIM.postH / 2, DIM.postZ, 14);
  // A STEP at the splash line, not a fade: the per-band rusty-pixel scan reads 0 per cent
  // at every band from y=520 to y=860, then 42 per cent at y=880 and 58 per cent at y=920.
  bakeRamp(post, [
    [0.00, PALETTE.rust],
    [0.24, PALETTE.rust],
    [0.28, PALETTE.galv],
    [0.90, PALETTE.galv],
    [DIM.postH, PALETTE.galvClean],
  ]);
  post.computeVertexNormals();
  const pm = setMeshGeometry(root, 'post', post);
  if (pm) {
    const m = pm.material as THREE.MeshPhysicalMaterial;
    m.vertexColors = true;
    m.color.set('#FFFFFF');
    m.metalness = 0.25;
    m.roughness = 0.62;
    m.needsUpdate = true;
  }
}

/** Assign the atlas AFTER material construction - the textureless declaration does not touch this route. */
function applyAtlases(root: THREE.Group, options: ProceduralModelOptions): void {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const mesh = rt?.meshes?.['sign-plates'];
  if (!mesh) return;
  const tex = faceAtlas(options.textureSize ?? 512);
  if (!tex) return;
  tex.anisotropy = options.textureAnisotropy ?? 4;
  const m = mesh.material as THREE.MeshPhysicalMaterial;
  m.map = tex;
  m.color.set('#FFFFFF');
  m.metalness = 0.0;
  m.roughness = 0.42;
  m.needsUpdate = true;
}

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it
 * with (spec, options); the generated factory is named for its target and takes options
 * alone. `spec` is accepted and attached for host-side inspection - the reconstruction data
 * already lives in the module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(
  spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = createNoParkingSignModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  buildGeometry(root);
  applyAtlases(root, options);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. A bolted roadside sign has no hinge, bearing, lid or wheel, so the root is the only axis it has. A pivot per component would describe a machine that does not exist.
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);

    // Sockets: NONE. Nothing attaches to or is emitted from this prop, and a named socket
    // is a promise that something clips in there.

    // Colliders: drop the empty entries the generator emits, so the count is of REAL
    // proxies. An ARRAY of named proxies, not the Record - the harness maps over this.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups: this prop declares NONE, and promotion checks built against
    // declared as an equality in BOTH directions. Derived rather than assumed empty.
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
      // A COUNT, not the Record. thaikit's harness returns this field straight across the
      // puppeteer bridge and its registry field is a number; a Record of Object3D is
      // circular and fails to serialise, which surfaces as the whole stats object arriving
      // undefined. The Record stays reachable under byId.
      nodes: Object.keys(nodes).length,
      pivots: [rootPivot],
      sockets: [],
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
