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

// Generated from ObjectSculptSpec target: Flood Depth Marker
// Sculpt build pass: blockout
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createFloodDepthMarkerModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Flood Depth Marker";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["painted-concrete"] = createSculptMaterial(
    "painted-concrete",
    {"id": "painted-concrete", "name": "Cast concrete with masked painted gradation bands", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#A94240", "secondary": ["#CBCDCE", "#785C50", "#321C1B"], "samplingNotes": "White base colour because every band, label and stain is delivered by the atlas assigned after material construction; a tint here would multiply into all four at once."}, "colorVariation": {"palette": ["#A94240", "#CBCDCE", "#785C50", "#321C1B"], "pattern": "authored-bands", "amplitude": 0.0, "heightCorrelation": 1.0}, "roughness": {"base": 0.84, "variation": 0.06, "map": "none", "localResponse": "Chalky and matte. Cast concrete and masked paint both scatter completely; there is no tight highlight anywhere on this reference."}, "metalness": {"base": 0.0, "variation": 0.0, "notes": "Concrete and paint are both dielectric."}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "A convex prism with no cavity for AO to find, and baking any into base colour is what the material pass forbids."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "band-red", "color": "#A94240", "region": "the three red gradation bands", "evidenceRef": "region-band-red", "notes": "Averaged from #C5544E over 2700 lit px at (530,390,45,60) and #8F2F2D over 3000 shaded px at (462,390,50,60). A 41-luma spread across two faces at right angles is far too large to take either face as albedo, so the value is taken BETWEEN them - a de-lighting judgement made without a de-lit reference, and the least certain colour in this spec."}, {"id": "band-white", "color": "#CBCDCE", "region": "the three white gradation bands", "evidenceRef": "region-band-white", "notes": "Averaged from #DBDCDB over 2250 lit px and #BABCC0 over 2500 shaded px, a 32-luma spread. Same reasoning as the red."}, {"id": "algae-stain", "color": "#785C50", "region": "the lowest 0.7 m of the post, heaviest where it meets the pad", "evidenceRef": "region-foot", "notes": "Trimmed mean #785C50 over 3300 px at (462,700,55,60) - 55 luma below the clean white band above it. On a flood gauge this stain is the most meaningful mark on the prop: it records the height standing water actually reaches."}, {"id": "label-ink", "color": "#321C1B", "region": "the four metre gradation labels, on one face only", "evidenceRef": "region-label", "notes": "Trimmed mean of the 770 sub-luma-70 px of (450,160,70,60). The whole-crop mean was far lighter because the crop's bright half is the red band bouncing across a hard boundary, not ink."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["Reference plate, red band at (530,390,45,60) and (462,390,50,60): 2700 and 3000 px trimming to #C5544E and #8F2F2D. Masked paint over cast concrete, flat across both faces with no resolvable relief.", "Reference plate, white band at (530,290,45,50) and (462,290,50,50): 2250 and 2500 px trimming to #DBDCDB and #BABCC0, again flat.", "The bands, labels and algae arrive as one canvas atlas assigned after material construction, which the textureless declaration does not touch. Letting the generator synthesise a texture set here would additionally force color to white and roughness to 1 and read both from the generated maps - discarding the measured band colours that make this prop a depth gauge.", "Measured cost: five synthesised canvases at 1024 would cost roughly 1.9 s inside createObjectModel, on a component whose whole geometry is 196 triangles."]}},
    options
  );
  materialMap["bare-concrete"] = createSculptMaterial(
    "bare-concrete",
    {"id": "bare-concrete", "name": "Bare cast concrete pad with rusted holding-down bolts", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#8F8C87", "secondary": ["#8A8678", "#363927"], "samplingNotes": "White base colour because the pad's soiling ramp and the bolts' dark heads are delivered as VERTEX COLOURS; a tint here would multiply into both."}, "colorVariation": {"palette": ["#8F8C87", "#8A8678", "#363927"], "pattern": "mottled", "amplitude": 0.1, "heightCorrelation": 0.4}, "roughness": {"base": 0.88, "variation": 0.05, "map": "none", "localResponse": "The roughest surface of the eight props: an unpainted cast slab that has been rained on for years, plus four corroded bolt heads."}, "metalness": {"base": 0.0, "variation": 0.0, "notes": "Held at zero even though the bolts are steel. They are 26 mm features sharing the slab's material, and a metallic response on them would be invisible at prop distance while costing the correctness of the slab."}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "A flat slab and four small cylinders; no cavity for AO to find, and baking any into base colour is what the material pass forbids."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "pad-side", "color": "#8F8C87", "region": "the pad's four vertical faces", "evidenceRef": "region-pad-side", "notes": "Trimmed mean #8F8C87 over 5700 px at (390,930,190,30)."}, {"id": "pad-top", "color": "#8A8678", "region": "the pad's upward face", "evidenceRef": "region-pad-top", "notes": "Trimmed mean #8A8678 over 7200 px at (400,880,180,40). Marginally warmer and darker than the sides - dirt settles on the face that points at the sky, and the ramp reproduces that rather than flattening the pad to one colour."}, {"id": "bolt-dark", "color": "#363927", "region": "the four holding-down bolt heads", "evidenceRef": "region-bolt", "notes": "Trimmed mean #363927 over the 420 sub-luma-70 px of (500,860,40,40). Dark and rust-stained - the only near-black on the prop apart from the labels, which is what makes four 26 mm features read at all at prop distance."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["Reference plate, pad side at (390,930,190,30): 5700 px trimming to #8F8C87 with no resolvable relief at prop distance.", "Reference plate, pad top at (400,880,180,40): 7200 px trimming to #8A8678 - marginally warmer and darker than the side, which is dirt settling on the upward face rather than a different material.", "The pad's soiling ramp and the bolts' dark heads arrive as VERTEX COLOURS, so a synthesised five-canvas set would be discarded work.", "Measured cost: five canvases at 1024 for this material alone is roughly 1.9 s inside createObjectModel, on a component whose whole geometry is 108 triangles."]}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_marker_post_0 = makeAttachmentEndpoint(null);
  const node_marker_post_0 = new THREE.Group();
  node_marker_post_0.name = "Banded concrete marker post__pivot";
  node_marker_post_0.scale.set(1, 1, 1);
  if (endpoint_marker_post_0) {
    node_marker_post_0.position.copy(endpoint_marker_post_0.start);
    node_marker_post_0.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_marker_post_0.position.set(0.0, 0.0, 0.0);
    node_marker_post_0.rotation.set(0.0, 0.0, 0.0);
  }
  node_marker_post_0.userData.sculptComponent = {"id": "marker-post", "name": "Banded concrete marker post", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A single square-section prismatic solid that never deforms. A box is exact here, not an approximation.", "geometryDescriptor": {"topologyIntent": "BoxGeometry(0.15, 2.86, 0.15, 1, 24, 1), translated so it runs from y=0.14 to y=3.00.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - a two-region atlas. One face takes the full graphic region with the metre gradation labels; the other three faces and both caps take a band COLUMN at the same height fraction, so the red and white bands wrap continuously round the post and meet the lettered face exactly. This is the same problem the kilometre stone has and the opposite of the plate signs, whose paint sits on a printed front.", "normalStrategy": "flat", "note": "24 height segments, the most of any prop in this set. They are NOT for a smooth ramp: the six alternating 0.5 m bands have hard edges and the atlas draws those. They are there so the algae gradient over the lowest 0.7 m has vertices to sit on, and so the post's own vertical soiling reads. A box with one height segment would put the whole stain in the texture.", "mergedAssembly": {"reason": "Nothing to merge into the post: the base pad is a separate material and a separate component. Recorded so the two are not collapsed by a later pass, which would lose the pad's bare-concrete albedo into the post's painted one.", "parts": [{"id": "post-shaft", "level": "meso", "primitive": "box", "extent": {"width": 0.15, "height": 2.86, "depth": 0.15}, "localOffset": [0.0, 1.5699999999999998, 0.0], "note": "150 mm square section standing on the pad top at y=0.14 and finishing at y=3.00, which is the declared height."}], "jointNote": "The post's bottom face at y=0.14 meets the pad's top face at y=0.14: an OPPOSED butt joint between two solids, which is how solids are meant to meet and is not a z-fighting pair. Nothing else on this prop touches."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.15, "height": 2.86, "depth": 0.15, "units": "m", "confidence": 0.85}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center. This is the ONLY named pivot in the prop, and it is the correct count: a bolted-down concrete marker has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 1.5699999999999998, 0], "scale": [0.106, 1.43, 0.106], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A vertical cylinder circumscribing the 150 mm square post - the cheap convex proxy a player walks into."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "painted-concrete"}}, "material": "painted-concrete", "materialLayers": ["painted-concrete"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "gradation-bands", "description": "Six alternating red and white bands of 0.5 m each, wrapping the whole post, which are what makes this a depth gauge rather than a bollard.", "representation": "texture-region"}, {"id": "metre-labels", "description": "Four black metre gradation labels reading 2.0, 1.5, 1.0 and 0.5 followed by the Thai abbreviation for metres, each set at the depth it marks.", "representation": "texture-region"}, {"id": "algae-staining", "description": "Green-black algae over the lowest 0.7 m of the post, marking the height standing water actually reaches.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#A94240", "stops": [{"position": 0.0, "color": "rgba(120,92,80,1.0)", "note": "algae-stained concrete at the foot, measured #785C50 over 3300 px"}, {"position": 0.2, "color": "rgba(203,205,206,1.0)", "note": "the lowest white band, emerging from the staining"}, {"position": 0.32, "color": "rgba(169,66,64,1.0)", "note": "red band, averaged from #C5544E lit over 2700 px and #8F2F2D shaded over 3000 px"}, {"position": 0.49, "color": "rgba(203,205,206,1.0)", "note": "white band, averaged from #DBDCDB lit over 2250 px and #BABCC0 shaded over 2500 px"}, {"position": 0.66, "color": "rgba(169,66,64,1.0)", "note": "red band"}, {"position": 0.83, "color": "rgba(203,205,206,1.0)", "note": "white band"}, {"position": 1.0, "color": "rgba(169,66,64,1.0)", "note": "red band at the crown"}], "finishStyle": "matte", "notes": "An ordered vertical ramp of ALTERNATING 0.5 m bands measured up from the pad, with hard edges at every boundary - this is masked paint on cast concrete, so the boundaries are lines and not blends, and the recipe's stops describe where each band sits rather than a gradient between them. Both band colours are averaged BETWEEN the lit and shaded faces: the red reads #C5544E against #8F2F2D and the white #DBDCDB against #BABCC0, spreads of 41 and 32 luma across two faces at right angles, which is far too much to take either face as albedo.", "dominantAlbedo": "rgba(169,66,64,1.0)", "secondaryAlbedo": "rgba(203,205,206,1.0)", "materialClass": "stone", "materialClassConfidence": 0.88}};
  node_marker_post_0.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center. This is the ONLY named pivot in the prop, and it is the correct count: a bolted-down concrete marker has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 1.5699999999999998, 0], "scale": [0.106, 1.43, 0.106], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A vertical cylinder circumscribing the 150 mm square post - the cheap convex proxy a player walks into."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "painted-concrete"}};
  (nodes["root"] ?? root).add(node_marker_post_0);
  nodes["marker-post"] = node_marker_post_0;
  const mesh_marker_post_0Geometry = endpoint_marker_post_0
    ? new THREE.CylinderGeometry(endpoint_marker_post_0.endRadius, endpoint_marker_post_0.baseRadius, endpoint_marker_post_0.length, 8, 4)
    : new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
  if (!endpoint_marker_post_0) {
    mesh_marker_post_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_marker_post_0 = new THREE.Mesh(
    mesh_marker_post_0Geometry,
    materialMap["painted-concrete"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_marker_post_0.name = "Banded concrete marker post";
  if (endpoint_marker_post_0) {
    mesh_marker_post_0.position.copy(endpoint_marker_post_0.midpoint);
    mesh_marker_post_0.quaternion.copy(endpoint_marker_post_0.quaternion);
  }
  mesh_marker_post_0.castShadow = options.castShadow ?? true;
  mesh_marker_post_0.receiveShadow = options.receiveShadow ?? true;
  mesh_marker_post_0.userData.sculptComponent = {"id": "marker-post", "name": "Banded concrete marker post", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A single square-section prismatic solid that never deforms. A box is exact here, not an approximation.", "geometryDescriptor": {"topologyIntent": "BoxGeometry(0.15, 2.86, 0.15, 1, 24, 1), translated so it runs from y=0.14 to y=3.00.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - a two-region atlas. One face takes the full graphic region with the metre gradation labels; the other three faces and both caps take a band COLUMN at the same height fraction, so the red and white bands wrap continuously round the post and meet the lettered face exactly. This is the same problem the kilometre stone has and the opposite of the plate signs, whose paint sits on a printed front.", "normalStrategy": "flat", "note": "24 height segments, the most of any prop in this set. They are NOT for a smooth ramp: the six alternating 0.5 m bands have hard edges and the atlas draws those. They are there so the algae gradient over the lowest 0.7 m has vertices to sit on, and so the post's own vertical soiling reads. A box with one height segment would put the whole stain in the texture.", "mergedAssembly": {"reason": "Nothing to merge into the post: the base pad is a separate material and a separate component. Recorded so the two are not collapsed by a later pass, which would lose the pad's bare-concrete albedo into the post's painted one.", "parts": [{"id": "post-shaft", "level": "meso", "primitive": "box", "extent": {"width": 0.15, "height": 2.86, "depth": 0.15}, "localOffset": [0.0, 1.5699999999999998, 0.0], "note": "150 mm square section standing on the pad top at y=0.14 and finishing at y=3.00, which is the declared height."}], "jointNote": "The post's bottom face at y=0.14 meets the pad's top face at y=0.14: an OPPOSED butt joint between two solids, which is how solids are meant to meet and is not a z-fighting pair. Nothing else on this prop touches."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.15, "height": 2.86, "depth": 0.15, "units": "m", "confidence": 0.85}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center. This is the ONLY named pivot in the prop, and it is the correct count: a bolted-down concrete marker has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 1.5699999999999998, 0], "scale": [0.106, 1.43, 0.106], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A vertical cylinder circumscribing the 150 mm square post - the cheap convex proxy a player walks into."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "painted-concrete"}}, "material": "painted-concrete", "materialLayers": ["painted-concrete"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "gradation-bands", "description": "Six alternating red and white bands of 0.5 m each, wrapping the whole post, which are what makes this a depth gauge rather than a bollard.", "representation": "texture-region"}, {"id": "metre-labels", "description": "Four black metre gradation labels reading 2.0, 1.5, 1.0 and 0.5 followed by the Thai abbreviation for metres, each set at the depth it marks.", "representation": "texture-region"}, {"id": "algae-staining", "description": "Green-black algae over the lowest 0.7 m of the post, marking the height standing water actually reaches.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#A94240", "stops": [{"position": 0.0, "color": "rgba(120,92,80,1.0)", "note": "algae-stained concrete at the foot, measured #785C50 over 3300 px"}, {"position": 0.2, "color": "rgba(203,205,206,1.0)", "note": "the lowest white band, emerging from the staining"}, {"position": 0.32, "color": "rgba(169,66,64,1.0)", "note": "red band, averaged from #C5544E lit over 2700 px and #8F2F2D shaded over 3000 px"}, {"position": 0.49, "color": "rgba(203,205,206,1.0)", "note": "white band, averaged from #DBDCDB lit over 2250 px and #BABCC0 shaded over 2500 px"}, {"position": 0.66, "color": "rgba(169,66,64,1.0)", "note": "red band"}, {"position": 0.83, "color": "rgba(203,205,206,1.0)", "note": "white band"}, {"position": 1.0, "color": "rgba(169,66,64,1.0)", "note": "red band at the crown"}], "finishStyle": "matte", "notes": "An ordered vertical ramp of ALTERNATING 0.5 m bands measured up from the pad, with hard edges at every boundary - this is masked paint on cast concrete, so the boundaries are lines and not blends, and the recipe's stops describe where each band sits rather than a gradient between them. Both band colours are averaged BETWEEN the lit and shaded faces: the red reads #C5544E against #8F2F2D and the white #DBDCDB against #BABCC0, spreads of 41 and 32 luma across two faces at right angles, which is far too much to take either face as albedo.", "dominantAlbedo": "rgba(169,66,64,1.0)", "secondaryAlbedo": "rgba(203,205,206,1.0)", "materialClass": "stone", "materialClassConfidence": 0.88}};
  node_marker_post_0.add(mesh_marker_post_0);
  meshes["marker-post"] = mesh_marker_post_0;
  colliders["marker-post"] = {"type": "cylinder", "offset": [0, 1.5699999999999998, 0], "scale": [0.106, 1.43, 0.106], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A vertical cylinder circumscribing the 150 mm square post - the cheap convex proxy a player walks into."};

  const endpoint_base_pad_1 = makeAttachmentEndpoint(null);
  const node_base_pad_1 = new THREE.Group();
  node_base_pad_1.name = "Cast base pad with holding-down bolts__pivot";
  node_base_pad_1.scale.set(1, 1, 1);
  if (endpoint_base_pad_1) {
    node_base_pad_1.position.copy(endpoint_base_pad_1.start);
    node_base_pad_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_base_pad_1.position.set(0.0, 0.0, 0.0);
    node_base_pad_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_base_pad_1.userData.sculptComponent = {"id": "base-pad", "name": "Cast base pad with holding-down bolts", "level": "macro", "role": "support", "importance": 0.7, "confidence": 0.8, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A flat cast slab with four holding-down bolts standing proud of it. Merged into ONE buffer because the bolts share the slab's material, never move relative to it, and are far too small to be worth a draw call each.", "geometryDescriptor": {"topologyIntent": "BoxGeometry(0.4, 0.14, 0.4) plus four 6-segment bolt cylinders, merged into ONE BufferGeometry.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "none - the pad is a single measured concrete albedo with a position-keyed blotch, delivered as vertex colours", "normalStrategy": "flat", "note": "The pad is what makes this prop's declared footprint wrong and is the reason the asset's w and d were corrected from 0.15 to 0.40 before any geometry was built: the reference shows it at roughly 2.6x the post width, so a 0.15 m bounding box could not contain the prop.", "mergedAssembly": {"reason": "The four holding-down bolts are merged into the slab rather than instanced. A repetitionSystem would emit an InstancedMesh and cost a DRAW CALL, and this asset has exactly two; four 24-triangle bolts cost 96 triangles against a 4000 budget, which is the cheap side of that trade by a wide margin.", "parts": [{"id": "pad-slab", "level": "meso", "primitive": "box", "extent": {"width": 0.4, "height": 0.14, "depth": 0.4}, "localOffset": [0.0, 0.07, 0.0], "note": "The cast slab, 0.40 m square and 0.14 m thick, sitting on the ground at y=0."}, {"id": "bolt-nw", "level": "micro", "primitive": "cylinder", "extent": {"width": 0.026, "height": 0.045, "depth": 0.026}, "localOffset": [-0.135, 0.1625, -0.135], "note": "Holding-down bolt at the pad's near-left corner, standing 45 mm proud."}, {"id": "bolt-ne", "level": "micro", "primitive": "cylinder", "extent": {"width": 0.026, "height": 0.045, "depth": 0.026}, "localOffset": [0.135, 0.1625, -0.135], "note": "Its mirror across x. A left/right pair is a REFLECTION - the lateral axis negated and nothing else."}, {"id": "bolt-sw", "level": "micro", "primitive": "cylinder", "extent": {"width": 0.026, "height": 0.045, "depth": 0.026}, "localOffset": [-0.135, 0.1625, 0.135], "note": "Far-left corner."}, {"id": "bolt-se", "level": "micro", "primitive": "cylinder", "extent": {"width": 0.026, "height": 0.045, "depth": 0.026}, "localOffset": [0.135, 0.1625, 0.135], "note": "Far-right corner, the mirror of bolt-sw."}], "jointNote": "Each bolt's bottom cap at y=0.14 is coincident with the pad's top face, but they are OPPOSED - the cap looks down and the pad top looks up - and an opposed butt joint between solids is not a z-fighting pair. The bolts stand 45 mm proud of the pad and 25 mm clear of the post's faces, so nothing is flush with anything."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.4, "height": 0.14, "depth": 0.4, "units": "m", "confidence": 0.75}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The pad does not turn on anything; the prop's single named pivot is the root, on the post."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0.07, 0], "scale": [0.283, 0.07, 0.283], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, so the pad's proxy circumscribes its square footprint. That makes the proxy larger than the pad at the corners, which for a flat slab at ankle height is the harmless direction to be wrong in."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "bare-concrete"}}, "material": "bare-concrete", "materialLayers": ["bare-concrete"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "holding-bolts", "description": "Four dark rust-stained holding-down bolts standing proud of the pad at its corners.", "representation": "geometry"}, {"id": "pad-soiling", "description": "Dirt settled on the pad's upward face, marginally warmer and darker than its sides.", "representation": "vertex-colour"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#8F8C87", "stops": [{"position": 0.0, "color": "rgba(143,140,135,1.0)", "note": "pad side, measured #8F8C87 over 5700 px"}, {"position": 0.7, "color": "rgba(138,134,120,1.0)", "note": "pad top, measured #8A8678 over 7200 px - marginally warmer and darker than the side, which is dirt settling on the upward face"}, {"position": 1.0, "color": "rgba(54,57,39,1.0)", "note": "the bolt heads, measured #363927 over 420 sub-luma-70 px - dark, rust-stained and the only near-black on the prop apart from the lettering"}], "finishStyle": "matte", "notes": "An ordered ramp up the pad and onto the bolts, not a scatter. The bolts are darker than anything else on this prop except the labels, which is what makes four 26 mm features read at all at prop distance.", "dominantAlbedo": "rgba(143,140,135,1.0)", "secondaryAlbedo": "rgba(54,57,39,1.0)", "materialClass": "stone", "materialClassConfidence": 0.85}};
  node_base_pad_1.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The pad does not turn on anything; the prop's single named pivot is the root, on the post."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0.07, 0], "scale": [0.283, 0.07, 0.283], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, so the pad's proxy circumscribes its square footprint. That makes the proxy larger than the pad at the corners, which for a flat slab at ankle height is the harmless direction to be wrong in."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "bare-concrete"}};
  (nodes["root"] ?? root).add(node_base_pad_1);
  nodes["base-pad"] = node_base_pad_1;
  const mesh_base_pad_1Geometry = endpoint_base_pad_1
    ? new THREE.CylinderGeometry(endpoint_base_pad_1.endRadius, endpoint_base_pad_1.baseRadius, endpoint_base_pad_1.length, 8, 4)
    : new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
  if (!endpoint_base_pad_1) {
    mesh_base_pad_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_base_pad_1 = new THREE.Mesh(
    mesh_base_pad_1Geometry,
    materialMap["bare-concrete"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_base_pad_1.name = "Cast base pad with holding-down bolts";
  if (endpoint_base_pad_1) {
    mesh_base_pad_1.position.copy(endpoint_base_pad_1.midpoint);
    mesh_base_pad_1.quaternion.copy(endpoint_base_pad_1.quaternion);
  }
  mesh_base_pad_1.castShadow = options.castShadow ?? true;
  mesh_base_pad_1.receiveShadow = options.receiveShadow ?? true;
  mesh_base_pad_1.userData.sculptComponent = {"id": "base-pad", "name": "Cast base pad with holding-down bolts", "level": "macro", "role": "support", "importance": 0.7, "confidence": 0.8, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A flat cast slab with four holding-down bolts standing proud of it. Merged into ONE buffer because the bolts share the slab's material, never move relative to it, and are far too small to be worth a draw call each.", "geometryDescriptor": {"topologyIntent": "BoxGeometry(0.4, 0.14, 0.4) plus four 6-segment bolt cylinders, merged into ONE BufferGeometry.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "none - the pad is a single measured concrete albedo with a position-keyed blotch, delivered as vertex colours", "normalStrategy": "flat", "note": "The pad is what makes this prop's declared footprint wrong and is the reason the asset's w and d were corrected from 0.15 to 0.40 before any geometry was built: the reference shows it at roughly 2.6x the post width, so a 0.15 m bounding box could not contain the prop.", "mergedAssembly": {"reason": "The four holding-down bolts are merged into the slab rather than instanced. A repetitionSystem would emit an InstancedMesh and cost a DRAW CALL, and this asset has exactly two; four 24-triangle bolts cost 96 triangles against a 4000 budget, which is the cheap side of that trade by a wide margin.", "parts": [{"id": "pad-slab", "level": "meso", "primitive": "box", "extent": {"width": 0.4, "height": 0.14, "depth": 0.4}, "localOffset": [0.0, 0.07, 0.0], "note": "The cast slab, 0.40 m square and 0.14 m thick, sitting on the ground at y=0."}, {"id": "bolt-nw", "level": "micro", "primitive": "cylinder", "extent": {"width": 0.026, "height": 0.045, "depth": 0.026}, "localOffset": [-0.135, 0.1625, -0.135], "note": "Holding-down bolt at the pad's near-left corner, standing 45 mm proud."}, {"id": "bolt-ne", "level": "micro", "primitive": "cylinder", "extent": {"width": 0.026, "height": 0.045, "depth": 0.026}, "localOffset": [0.135, 0.1625, -0.135], "note": "Its mirror across x. A left/right pair is a REFLECTION - the lateral axis negated and nothing else."}, {"id": "bolt-sw", "level": "micro", "primitive": "cylinder", "extent": {"width": 0.026, "height": 0.045, "depth": 0.026}, "localOffset": [-0.135, 0.1625, 0.135], "note": "Far-left corner."}, {"id": "bolt-se", "level": "micro", "primitive": "cylinder", "extent": {"width": 0.026, "height": 0.045, "depth": 0.026}, "localOffset": [0.135, 0.1625, 0.135], "note": "Far-right corner, the mirror of bolt-sw."}], "jointNote": "Each bolt's bottom cap at y=0.14 is coincident with the pad's top face, but they are OPPOSED - the cap looks down and the pad top looks up - and an opposed butt joint between solids is not a z-fighting pair. The bolts stand 45 mm proud of the pad and 25 mm clear of the post's faces, so nothing is flush with anything."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.4, "height": 0.14, "depth": 0.4, "units": "m", "confidence": 0.75}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The pad does not turn on anything; the prop's single named pivot is the root, on the post."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0.07, 0], "scale": [0.283, 0.07, 0.283], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, so the pad's proxy circumscribes its square footprint. That makes the proxy larger than the pad at the corners, which for a flat slab at ankle height is the harmless direction to be wrong in."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "bare-concrete"}}, "material": "bare-concrete", "materialLayers": ["bare-concrete"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "holding-bolts", "description": "Four dark rust-stained holding-down bolts standing proud of the pad at its corners.", "representation": "geometry"}, {"id": "pad-soiling", "description": "Dirt settled on the pad's upward face, marginally warmer and darker than its sides.", "representation": "vertex-colour"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#8F8C87", "stops": [{"position": 0.0, "color": "rgba(143,140,135,1.0)", "note": "pad side, measured #8F8C87 over 5700 px"}, {"position": 0.7, "color": "rgba(138,134,120,1.0)", "note": "pad top, measured #8A8678 over 7200 px - marginally warmer and darker than the side, which is dirt settling on the upward face"}, {"position": 1.0, "color": "rgba(54,57,39,1.0)", "note": "the bolt heads, measured #363927 over 420 sub-luma-70 px - dark, rust-stained and the only near-black on the prop apart from the lettering"}], "finishStyle": "matte", "notes": "An ordered ramp up the pad and onto the bolts, not a scatter. The bolts are darker than anything else on this prop except the labels, which is what makes four 26 mm features read at all at prop distance.", "dominantAlbedo": "rgba(143,140,135,1.0)", "secondaryAlbedo": "rgba(54,57,39,1.0)", "materialClass": "stone", "materialClassConfidence": 0.85}};
  node_base_pad_1.add(mesh_base_pad_1);
  meshes["base-pad"] = mesh_base_pad_1;
  colliders["base-pad"] = {"type": "cylinder", "offset": [0, 0.07, 0], "scale": [0.283, 0.07, 0.283], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, so the pad's proxy circumscribes its square footprint. That makes the proxy larger than the pad at the corners, which for a flat slab at ankle height is the harmless direction to be wrong in."};

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createFloodDepthMarkerLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Flood Depth Marker look-dev lights";
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
  lights.userData.lightingFromPhoto = [{"role": "key", "type": "area", "directionHint": [0.46, 0.58, 0.67], "intensity": 1.0, "colorTemperatureK": 5600, "evidence": "The red bands read #C5544E at luma 108 on the right face against #8F2F2D at 67 on the left, and the white bands #DBDCDB at 220 against #BABCC0 at 188 - a key high and camera-RIGHT, the same hand as the kilometre stone and the opposite of the plate signs. Measured rather than assumed."}, {"role": "fill", "type": "hemisphere", "directionHint": [-0.55, 0.2, -0.35], "intensity": 0.3, "colorTemperatureK": 6500, "evidence": "The shaded face's white band holds luma 188 rather than falling away, so there is real fill - but the 32-luma spread is much larger than the kilometre stone's 2, so the fill here is weaker and the de-lighting judgement correspondingly harder."}, {"role": "rim", "type": "directional", "directionHint": [-0.6, 0.35, -0.7], "intensity": 0.18, "colorTemperatureK": 6500, "evidence": "A soft bright edge runs down the post's left arris separating it from the backdrop."}, {"role": "environment", "type": "studio-context", "environment": "studio softbox on a flat neutral backdrop", "exposure": 1.0, "toneMapping": "ACESFilmic", "evidence": "Border-ring scan trimming to #A5A5A5. MEASURED rather than assumed to be the grey the prompt asked for.", "note": "The render harness backs onto a much darker ground, so a candidate render reads darker overall and that difference is the backdrop, not the prop."}, {"role": "contact-shadow", "type": "ground-shadow", "intensity": 0.6, "evidence": "The reference shows a soft shadow pooling under the pad's full 0.40 m footprint, which is the second largest ground contact of the eight props after the kilometre stone.", "behavior": "Grounded at y=0, the prop's origin, over the pad's full footprint rather than the post's. Ambient occlusion is left at zero on both materials: two convex solids and four small cylinders have no cavity for AO to find, and baking any into base colour is what the material pass forbids."}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  return lights;
}


// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameFloodDepthMarkerCamera(
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


export function configureFloodDepthMarkerRenderer(renderer: THREE.WebGLRenderer): void {
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

/**
 * Draw text into an ANISOTROPIC atlas region.
 *
 * A band column plus a face region maps a tall narrow face onto a square-ish patch of
 * canvas, so one atlas pixel is not the same number of millimetres across as it is down.
 * On the flood marker that stretch is 16x, and text drawn normally into it comes out as
 * an illegible vertical smear. The fix is to pick the font by the world WIDTH the label
 * should occupy and then squash the glyphs vertically by exactly the region's anisotropy,
 * so the label lands on the prop at its real proportions.
 *
 * `pxPerMU` / `pxPerMV` are canvas pixels per metre along each axis of the region.
 */
function drawWorldText(
  ctx: CanvasRenderingContext2D, text: string,
  cx: number, cy: number,
  worldW: number, worldCapH: number,
  pxPerMU: number, pxPerMV: number,
  font: (px: number) => string,
): void {
  const targetPxW = worldW * pxPerMU;
  const targetPxH = worldCapH * pxPerMV;
  const px = fitText(ctx, text, targetPxW, font, Math.max(8, targetPxW * 0.4));
  // fitText leaves the font set at `px`; cap height is about 0.72 of the em for these faces.
  const squash = targetPxH / Math.max(1e-6, px * 0.72);
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(1, squash);
  ctx.fillText(text, 0, 0);
  ctx.restore();
}

/** Measured off assets/flood-depth-marker/preview.jpg. See the spec's localOverrides for crops. */
const PALETTE = {
  // Both band colours are AVERAGED between the lit and shaded faces. Spreads of 41 and 32
  // luma across two faces at right angles are far too large to take either as albedo.
  red: '#A94240',      // from #C5544E lit (2700 px) and #8F2F2D shaded (3000 px)
  white: '#CBCDCE',    // from #DBDCDB lit (2250 px) and #BABCC0 shaded (2500 px)
  algae: '#785C50',    // 3300 px of (462,700,55,60), 55 luma below the white above it
  ink: '#321C1B',      // 770 sub-luma-70 px of (450,160,70,60)
  // The pad tones were measured off the plate's LIT face and shipped straight in, so the slab
  // rendered as a clean cream block against a plate whose pad is grimy grey concrete with algae
  // creeping up its edges. Taken down and greened, and the ramp's blotch amplitude raised from 0.05
  // to 0.14 so it reads as cast concrete rather than as a solid.
  padSide: '#aaa9a8',  // was #8F8C87, 5700 px of (390,930,190,30) -- the LIT face
  padTop:  '#9e9c97',  // was #8A8678, 7200 px of (400,880,180,40) - dirt settles on the upward face
  bolt: '#4a3524',     // 420 sub-luma-70 px of (500,860,40,40), warmed toward the rust the plate shows on them
} as const;

/** Geometry, in metres, from the spec. Origin base-center: y=0 is the pad's underside. */
/* SECTION CORRECTED 2026-09-01: post 0.150 -> 0.267 m, pad 0.400 -> 0.700 m.
 *
 * The ten-band proxy comparison read the candidate at a flat 0.050 of HEIGHT in every one of bands
 * 1-9 against the reference's 0.084, and 0.133 against 0.224 at band 0 -- a uniform shortfall in
 * every band, which is a section and not a shape. The plate agrees independently. Measured off its
 * silhouette: the post's median row is 0.130 of the total height and the pad's WIDEST row, at 0.89
 * of the height, is 0.341. Both are apparent widths at the plate's ~35 degree azimuth, where a
 * square section projects as s(cos35 + sin35) = 1.393 s, so the true fractions are 0.0933 and
 * 0.245 against the proxy's 0.084 and 0.224 -- agreement inside 11%.
 *
 * At the unchanged 3.00 m height that is a 0.28 m post by the plate and 0.25 by the proxy, and a
 * 0.70 m pad by the plate against 0.67 by the proxy. Shipped at 0.267 and 0.700.
 *
 * A first pass at the pad measured it from the MEDIAN row below 0.93 of the height and got 0.196,
 * which disagreed with the proxy by 40% and looked like a real conflict. It was not: the pad is a
 * slab seen from above, so its widest row is at 0.89 and the rows below that are its front edge
 * alone. Take the maximum over the band, not the median.
 *
 * The labels rescale on their own -- drawWorldText derives pxPerMU from DIM.postW -- so the metre
 * gradations grow with the post instead of staying the illegible smear a 0.15 m face made of them.
 */
const DIM = {
  postW: 0.267, postH: 2.86, postY0: 0.14, postTop: 3.00,
  padW: 0.70, padH: 0.14, padD: 0.70,
  boltR: 0.019, boltH: 0.058, boltX: 0.245, boltSegs: 6,
  /** 0.5 m band pitch, read off the reference's own 2.0 / 1.5 / 1.0 / 0.5 labels. */
  bandPitch: 0.5,
    // The top of the FIRST RED band: the crown carries 0.118 m of white above it.
    crownTop: 2.882,
} as const;

/** Band column for three faces and both caps; graphic region for the lettered face only. */
const ATLAS = { colU: 0.05, faceU0: 0.14, faceW: 0.86 } as const;

let faceAtlasCache: THREE.CanvasTexture | null | undefined;

/** v is the height fraction over the POST's own span, so bands meet the lettered face exactly. */
function postV(y: number): number {
  return Math.min(1, Math.max(0, (y - DIM.postY0) / DIM.postH));
}

/**
 * The Thai unit glyph MO MA, drawn as PATHS rather than typed.
 *
 * The labels read "2.0 <MO>." on the plate and the unit is half of what says this is a Thai
 * flood gauge and not a generic bollard. It cannot be typed: the factory runs on whatever
 * machine loads the level, `fillText` needs a Thai face installed to draw it, and the render
 * harness has none -- every label came back as "2.0 [tofu]". Six segments cost nothing and
 * are the same on every host.
 *
 * Authored in a unit box, x right and y UP from the baseline; the caller supplies the
 * anisotropic scale so the glyph is squashed exactly as much as the digits beside it.
 */
function drawThaiMo(ctx: CanvasRenderingContext2D, x: number, y: number,
                    pxW: number, pxH: number, color: string): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(pxW, -pxH);
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.15;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  // the head loop, bottom left
  ctx.beginPath();
  ctx.arc(0.21, 0.20, 0.185, 0, Math.PI * 2);
  ctx.stroke();
  // the stem: up out of the loop, over the top, down to the baseline
  ctx.beginPath();
  ctx.moveTo(0.40, 0.20);
  ctx.lineTo(0.40, 0.78);
  ctx.quadraticCurveTo(0.40, 1.00, 0.62, 1.00);
  ctx.quadraticCurveTo(0.84, 1.00, 0.84, 0.78);
  ctx.lineTo(0.84, 0.00);
  ctx.stroke();
  ctx.restore();
  // the abbreviation stop
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(x + pxW * 1.02, y - pxH * 0.06, pxW * 0.075, pxH * 0.075, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function paintBands(ctx: CanvasRenderingContext2D, x: number, w: number, size: number): void {
  // Alternating 0.5 m bands measured DOWN from the crown, so the pitch is anchored where
  // the reference anchors it rather than at the stained foot.
  //
  // The crown is NOT the first red band. Scanning the plate's centre column for red/white
  // transitions puts them at image rows 80, 216, 365, 499, 623 and 741; calibrating on the
  // post itself (crown at row 48, pad top at row 824, so 2.86 m over 776 px = 271.3 px/m)
  // makes those 2.882, 2.381, 1.832, 1.337, 0.880 and 0.446 m -- gaps of 0.501, 0.549,
  // 0.495, 0.457 and 0.434, which is a 0.50 m pitch read through a camera looking slightly
  // DOWN, shortening the lower bands. What the first row settles is the phase: the top
  // 0.118 m is WHITE, and the first red band starts under it. The build had red starting at
  // the crown, which put every band half a pitch out.
  //
  // The plate's LABELS are not evidence about the pitch and were not followed. Their ink
  // centres sit at 2.488, 1.758, 1.094 and 0.460 m -- 0.73, 0.66 and 0.63 apart, against the
  // 0.5 they are lettered with. A generated plate can be internally inconsistent, and a
  // gauge whose labels are 0.68 m apart while reading 0.5 is a gauge that lies. The labels
  // stay at their marks; the bands stay at 0.50.
  ctx.fillStyle = PALETTE.white;
  ctx.fillRect(x, (1 - postV(DIM.postTop)) * size, w, size);
  for (let i = 0; i < 8; i += 1) {
    const yTop = DIM.crownTop - i * DIM.bandPitch;
    const yBot = Math.max(DIM.postY0, yTop - DIM.bandPitch);
    if (yTop <= DIM.postY0) break;
    const vTop = postV(yTop), vBot = postV(yBot);
    ctx.fillStyle = i % 2 === 0 ? PALETTE.red : PALETTE.white;
    ctx.fillRect(x, (1 - vTop) * size, w, (vTop - vBot) * size);
  }

  // Algae over the lowest 0.9 m. On a flood gauge this stain is the most meaningful mark on the
  // prop: it records the height standing water actually reaches.
  //
  // IT IS GREEN, and the first build's #785C50 is not. That tone was honestly measured, but off a
  // crop high in the stain where it has dried to a brown film; sampled at the FOOT the plate reads
  // #70725d -- green minus red +2, green minus blue +21, which is unambiguously green. The stain is
  // a two-stop ramp now: the dried brown film at its top, live algae at the bottom.
  const vAlgae = postV(DIM.postY0 + 1.32);
  const g = ctx.createLinearGradient(0, (1 - vAlgae) * size, 0, size);
  g.addColorStop(0.00, 'rgba(122, 96, 82, 0)');
  g.addColorStop(0.26, 'rgba(122, 96, 82, 0.22)');
  g.addColorStop(0.55, 'rgba(116, 104, 78, 0.52)');
  g.addColorStop(0.70, 'rgba( 98, 104, 74, 0.80)');
  g.addColorStop(1.00, 'rgba( 72,  86, 52, 0.97)');
  ctx.fillStyle = g;
  ctx.fillRect(x, (1 - vAlgae) * size, w, vAlgae * size);

  // WEATHERING over the whole column. The plate's post is a twenty-year-old concrete gauge standing
  // in floodwater: its white bands are grey-green and blotched, its red is faded and patchy, and
  // both carry dirt washing down from every band edge. The first build shipped six flat rectangles
  // of masked paint, which is what the prop looked like on the day it was cast.
  //
  // Seeded off the column's own x so the lettered face and the wrapped band column do not repeat
  // the identical pattern round three sides.
  let sd = (1013904223 + Math.round(x * 7919)) >>> 0;
  const rnd = () => (((sd = (sd * 1664525 + 1013904223) >>> 0) >>> 8) / 16777216);
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, 0, w, size);
  ctx.clip();
  // dirt washing down from each band edge, strongest low on the post
  for (let i = 0; i < 90; i += 1) {
    const y0 = rnd() * size;
    const len = size * (0.02 + rnd() * rnd() * 0.16);
    const sw = w * (0.02 + rnd() * rnd() * 0.30);
    const gg = ctx.createLinearGradient(0, y0, 0, y0 + len);
    const a = 0.05 + rnd() * 0.20 * (0.35 + 0.65 * (y0 / size));
    gg.addColorStop(0, `rgba(86,84,68,${a.toFixed(3)})`);
    gg.addColorStop(1, 'rgba(86,84,68,0)');
    ctx.fillStyle = gg;
    ctx.fillRect(x + rnd() * w, y0, sw, len);
  }
  // Grey-green blotching, weighted toward the foot but present all the way up: on the plate the
  // white bands are grey-green over their whole height, not only where the water reaches.
  //
  // The mark ASPECT is the thing to get right here and it is not 1:1. The face region maps 0.267 m
  // of post width onto 0.86 of u and 2.86 m of height onto 1.0 of v, so a canvas pixel is 9.2x
  // wider in world terms than it is tall. A first pass ran the blotches at up to 0.42 w by 0.022
  // size -- about 16:1, well past the 9.2:1 that reads as round -- and 130 of them clustered in the
  // bottom third merged into horizontal SCANLINES across the white bands.
  for (let i = 0; i < 150; i += 1) {
    const py = size * (1 - Math.pow(rnd(), 1.25));
    const rx = w * (0.04 + rnd() * 0.20), ry = size * (0.006 + rnd() * 0.030);
    const gg = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
    const a = 0.07 + rnd() * 0.26;
    gg.addColorStop(0, `rgba(104,108,84,${a.toFixed(3)})`);
    gg.addColorStop(1, 'rgba(104,108,84,0)');
    ctx.save();
    ctx.translate(x + rnd() * w, py);
    ctx.scale(rx, ry);
    ctx.fillStyle = gg;
    ctx.beginPath();
    ctx.arc(0, 0, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  // chalking: pale patches where the paint has powdered off, which is what fades the red
  // Broad and faint, NOT spots. A first pass ran 70 patches at alpha up to 0.21 and they
  // read across the red bands as pale polka dots; chalking is a paint film powdering off
  // evenly, so it is many more marks at a third the strength, each half again as wide.
  for (let i = 0; i < 210; i += 1) {
    const gg = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
    const a = 0.02 + rnd() * 0.055;
    gg.addColorStop(0, `rgba(214,206,196,${a.toFixed(3)})`);
    gg.addColorStop(1, 'rgba(214,206,196,0)');
    ctx.save();
    ctx.translate(x + rnd() * w, rnd() * size);
    ctx.scale(w * (0.10 + rnd() * 0.30), size * (0.010 + rnd() * 0.034));
    ctx.fillStyle = gg;
    ctx.beginPath();
    ctx.arc(0, 0, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  for (let i = 0; i < 2200; i += 1) {
    ctx.globalAlpha = 0.03 + rnd() * 0.09;
    ctx.fillStyle = rnd() < 0.5 ? '#56543f' : '#d2ccc2';
    ctx.fillRect(x + rnd() * w, rnd() * size, 1 + rnd() * 2, 1 + rnd() * 2);
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}

function faceAtlas(size: number): THREE.CanvasTexture | null {
  if (faceAtlasCache !== undefined) return faceAtlasCache;
  if (typeof document === 'undefined') { faceAtlasCache = null; return null; }
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) { faceAtlasCache = null; return null; }

  paintBands(ctx, 0, size * ATLAS.faceU0, size);                     // the band column
  const fx = size * ATLAS.faceU0, fw = size * ATLAS.faceW;
  paintBands(ctx, fx, fw, size);                                     // the lettered face

  // Four metre gradation labels, each set at the depth it marks. On ONE face only, which
  // is what the reference shows, so the atlas must not be mirrored.
  //
  // The face region is ANISOTROPIC by about 16x - it maps 0.15 m of post width onto 0.86
  // of u and 2.86 m of height onto 1.0 of v - so the labels are drawn through
  // drawWorldText, which picks the font by the world width the label should occupy and
  // squashes the glyphs by exactly that anisotropy. Drawn normally they come out as an
  // illegible vertical smear, which is what the first build of this prop produced.
  const pxPerMU = fw / DIM.postW;
  const pxPerMV = size / DIM.postH;
  ctx.fillStyle = PALETTE.ink;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (const mark of [2.0, 1.5, 1.0, 0.5]) {
    const v = postV(mark + 0.12);
    const cy = (1 - v) * size;
    // The digits are ASCII and safe to type; the unit is drawn. Together they occupy the
    // same 0.78 of the post's width the typed label used to.
    const wPx = DIM.postW * 0.78 * pxPerMU;
    drawWorldText(ctx, mark.toFixed(1), fx + fw * 0.50 - wPx * 0.17, cy,
      DIM.postW * 0.50, 0.055, pxPerMU, pxPerMV, SANS_R);
    drawThaiMo(ctx, fx + fw * 0.50 + wPx * 0.16, cy + 0.055 * pxPerMV * 0.5,
      0.055 * 0.76 * pxPerMU, 0.055 * pxPerMV * 1.00, PALETTE.ink);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  faceAtlasCache = tex;
  return tex;
}

let padTexCache: THREE.CanvasTexture | null | undefined;

/**
 * The pad's own multiply map. The plate's slab is stained, cracked and speckled cast
 * concrete; the render's was one flat tone, which is the whole of what was left between
 * this prop and its reference once the section was corrected. It is a TEXTURE, not a
 * material: the pad mesh already exists and already carries box UVs, so this costs no
 * draw call, no material and no geometry -- all three of which are at their ceiling.
 *
 * It multiplies, so it can only darken. Its mean is ~0.88 and PALETTE.padSide/padTop are
 * authored 1/0.88 brighter than the measurement to land back on it.
 */
function padTexture(size: number): THREE.CanvasTexture | null {
  if (padTexCache !== undefined) return padTexCache;
  if (typeof document === 'undefined') { padTexCache = null; return null; }
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D | null;
  if (!ctx) { padTexCache = null; return null; }

  let sd = 0x5f3a91b7 >>> 0;
  const rnd = () => { sd = (sd * 1664525 + 1013904223) >>> 0; return sd / 4294967296; };
  const rr = (a: number, b: number) => a + (b - a) * rnd();

  ctx.fillStyle = '#f2f2f0';
  ctx.fillRect(0, 0, size, size);

  // Broad cloudy drift: cast concrete is never one tone across a 0.7 m face.
  for (let i = 0; i < 90; i += 1) {
    const cx = rr(0, size), cy = rr(0, size), r = rr(size * 0.06, size * 0.24);
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    const a = rr(0.07, 0.22);
    g.addColorStop(0, `rgba(148,148,148,${a.toFixed(3)})`);
    g.addColorStop(1, 'rgba(148,148,148,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.ellipse(cx, cy, r, r * rr(0.55, 1.0), rr(0, Math.PI), 0, Math.PI * 2); ctx.fill();
  }

  // Ground-line staining. v = 0 is the bottom of every side face, and a slab sitting in
  // silt is darkest where it meets it.
  const gs = ctx.createLinearGradient(0, size, 0, size * 0.55);
  gs.addColorStop(0, 'rgba(104,104,100,0.42)');
  gs.addColorStop(1, 'rgba(104,104,100,0)');
  ctx.fillStyle = gs; ctx.fillRect(0, 0, size, size);

  // Hairline cracks: three, each a jittered polyline, thin enough to read as a line and
  // not as a scratch.
  ctx.lineCap = 'round';
  for (let c = 0; c < 3; c += 1) {
    let x = rr(0, size), y = rr(0, size);
    const dir = rr(0, Math.PI * 2);
    ctx.strokeStyle = `rgba(58,55,48,${rr(0.45, 0.72).toFixed(3)})`;
    ctx.lineWidth = rr(1.0, 2.2);
    ctx.beginPath(); ctx.moveTo(x, y);
    for (let k = 0; k < 14; k += 1) {
      const a = dir + rr(-0.7, 0.7);
      x += Math.cos(a) * rr(size * 0.02, size * 0.06);
      y += Math.sin(a) * rr(size * 0.02, size * 0.06);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Rust bleed. The four anchor bolts are the only ferrous thing touching this slab and
  // the plate shows a halo round every one of them. The pad's box UVs put the bolt
  // centres at u,v = 0.5 +- boltX/padW on the TOP face; the same four marks land near the
  // corners of the side faces, where run-off from those bolts is exactly what stains a
  // kerb slab.
  {
    const f = DIM.boltX / DIM.padW;
    for (const su of [-1, 1]) {
      for (const sv of [-1, 1]) {
        const cx = (0.5 + su * f) * size, cy = (0.5 + sv * f) * size;
        const rr0 = size * rr(0.055, 0.085);
        const g = ctx.createRadialGradient(cx, cy, rr0 * 0.15, cx, cy, rr0);
        g.addColorStop(0, 'rgba(150,88,44,0.46)');
        g.addColorStop(0.45, 'rgba(168,110,66,0.24)');
        g.addColorStop(1, 'rgba(168,110,66,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(cx, cy, rr0, 0, Math.PI * 2); ctx.fill();
      }
    }
  }

  // Aggregate speck: the exposed stones in a rained-on cast face.
  for (let i = 0; i < 5200; i += 1) {
    const v = rr(0.08, 0.26);
    ctx.fillStyle = `rgba(${(122 + rnd() * 60) | 0},${(122 + rnd() * 60) | 0},${(118 + rnd() * 58) | 0},${v.toFixed(3)})`;
    ctx.fillRect(rr(0, size), rr(0, size), rr(1, 2.6), rr(1, 2.6));
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.needsUpdate = true;
  padTexCache = tex;
  return tex;
}

function buildGeometry(root: THREE.Group): void {
  // --- the post: bands wrap it, so v is the height fraction for every vertex ----------
  // 24 height segments are NOT for a smooth ramp - the bands have hard edges and the
  // atlas draws those. They exist so the algae gradient has vertices to sit on.
  const post = boxAt(DIM.postW, DIM.postH, DIM.postW, 0, DIM.postY0 + DIM.postH / 2, 0, 24);
  {
    const pos = post.getAttribute('position') as THREE.BufferAttribute;
    const nrm = post.getAttribute('normal') as THREE.BufferAttribute;
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i += 1) {
      uv[i * 2] = nrm.getZ(i) > 0.5
        ? ATLAS.faceU0 + ATLAS.faceW * (pos.getX(i) / DIM.postW + 0.5)
        : ATLAS.colU;
      uv[i * 2 + 1] = postV(pos.getY(i));
    }
    post.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  }
  setMeshGeometry(root, 'marker-post', post);

  // --- the pad, with the four bolts MERGED into its buffer rather than instanced ------
  // An InstancedMesh is a draw call and this asset has two, both spent. Four 24-triangle
  // bolts cost 96 triangles against a 4000 budget instead.
  const parts = [boxAt(DIM.padW, DIM.padH, DIM.padD, 0, DIM.padH / 2, 0)];
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      parts.push(tubeAt(DIM.boltR, DIM.boltH,
        sx * DIM.boltX, DIM.padH + DIM.boltH / 2, sz * DIM.boltX, DIM.boltSegs, 1));
    }
  }
  const pad = concatGeometry(parts);
  for (const g of parts) g.dispose();
  // Ramp up the pad and onto the bolts. The bolts are darker than anything else on this
  // prop except the labels, which is what makes four 26 mm features read at prop distance.
  bakeRamp(pad, [
    [0.00, PALETTE.padSide],
    [DIM.padH * 0.92, PALETTE.padSide],
    [DIM.padH, PALETTE.padTop],
    [DIM.padH + 0.006, PALETTE.bolt],
    [DIM.padH + DIM.boltH, PALETTE.bolt],
  ], 0.14);
  pad.computeVertexNormals();
  const pm = setMeshGeometry(root, 'base-pad', pad);
  if (pm) {
    const m = pm.material as THREE.MeshPhysicalMaterial;
    m.vertexColors = true;
    m.color.set('#FFFFFF');
    m.metalness = 0.0;
    // The roughest surface of the eight: an unpainted slab rained on for years.
    m.roughness = 0.88;
    m.needsUpdate = true;
  }
}

/** Assign the atlas AFTER material construction - the textureless declaration does not touch this route. */
function applyAtlases(root: THREE.Group, options: ProceduralModelOptions): void {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const mesh = rt?.meshes?.['marker-post'];
  if (!mesh) return;
  const tex = faceAtlas(options.textureSize ?? 512);
  if (!tex) return;
  tex.anisotropy = options.textureAnisotropy ?? 4;
  const m = mesh.material as THREE.MeshPhysicalMaterial;
  m.map = tex;
  m.color.set('#FFFFFF');
  m.metalness = 0.0;
  m.roughness = 0.84;
  m.needsUpdate = true;

  const padMesh = rt?.meshes?.['base-pad'];
  if (!padMesh) return;
  const ptex = padTexture(Math.min(512, options.textureSize ?? 512));
  if (!ptex) return;
  ptex.anisotropy = options.textureAnisotropy ?? 4;
  const pm2 = padMesh.material as THREE.MeshPhysicalMaterial;
  pm2.map = ptex;
  pm2.needsUpdate = true;
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
  const root = createFloodDepthMarkerModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  buildGeometry(root);
  applyAtlases(root, options);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. static prop: the root is the only axis it has.
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
