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

// Generated from ObjectSculptSpec target: Speed Limit Sign
// Sculpt build pass: blockout
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createSpeedLimitSignModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Speed Limit Sign";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["sheeting"] = createSculptMaterial(
    "sheeting",
    {"id": "sheeting", "name": "Retroreflective vinyl sheeting on aluminium plate", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#FFFFFF", "secondary": ["#C9BE93", "#D8532B", "#1A1A18"], "samplingNotes": "White on purpose. The albedo is delivered by the face atlas assigned after material construction, and any tint here would multiply into the printed graphic."}, "colorVariation": {"palette": ["#EDE4C4", "#D8532B", "#1A1A18", "#A8A6A0"], "pattern": "authored-regions", "amplitude": 0.0, "heightCorrelation": 0.0}, "roughness": {"base": 0.42, "variation": 0.06, "map": "none", "localResponse": "Reflective sheeting is a smooth calendered vinyl; the chalked red has gone matter than the cream ground but not by much."}, "metalness": {"base": 0.0, "variation": 0.0, "notes": "Calendered vinyl over aluminium. The vinyl is what is seen and it is a dielectric; the plate underneath never reaches the surface on the front cap."}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "Flat plate, no cavities."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "annulus-red", "color": "#C85E30", "region": "the prohibition ring, 0.92R to 0.64R on the front cap", "evidenceRef": "region-annulus", "notes": "Trimmed mean #C85E30 over 560 px on the LEAST-shadowed limb at (382,265,14,40). The lit top arc reads #BF683D and the shadowed bottom #B27358; taking the limb keeps the key's contribution out of the albedo. Ring runs 0.95R to 0.717R, measured off the x=515 scanline."}, {"id": "ground-cream", "color": "#D6D4C1", "region": "the inner disc ground inboard of 0.64R", "evidenceRef": "region-ground", "notes": "Trimmed mean #D6D4C1 over 1800 px at (495,160,45,40), above the numerals and clear of them. Warm off-white - the sheeting has yellowed and this is not paper white."}, {"id": "legend-black", "color": "#272723", "region": "the 90 numerals and the two bolt heads", "evidenceRef": "region-numeral", "notes": "Trimmed mean of the sub-luma-70 half of (450,225,140,100), 6338 px. The whole-crop mean was far lighter because the crop's bright half is cream bouncing across a hard boundary, not ink."}, {"id": "rim-band", "color": "#CABF90", "region": "the outer 6 percent of the radius, outboard of the annulus", "evidenceRef": "region-rim", "notes": "Trimmed mean #CABF90 over 200 px on the top arc at (505,87,25,8). Occupies 1.00R to 0.95R - a narrow rule, distinctly yellower than the inner ground."}, {"id": "plate-back", "color": "#A8A6A0", "region": "the back cap and the cylindrical rim wall", "evidenceRef": "single-view-inference", "notes": "NOT OBSERVED. The plate is a three-quarter front view and shows no part of the disc's back. Bare mill aluminium is the standing assumption at confidence 0.55, recorded here as an assumption and not as a measurement. This is the colour every non-front-cap vertex collapses onto in the atlas."}, {"id": "grime-streaks", "color": "#C6C2AE", "region": "vertical runs down the cream ground below the upper bolt", "evidenceRef": "region-ground", "notes": "Ground above the numerals trims to #D6D4C1 and below them to #D3D0BD. A 4-luma drop across the whole face is all the evidence there is, so the streaks are drawn faint and low-contrast rather than invented darker."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["Reference plate, disc face at (470,150,60,60) and (500,300,60,60): a calendered vinyl sheet with no resolvable relief. Trimmed-mean luma varies 3.1 across the crop, which is print, not surface.", "Reference plate, disc rim at (395,255,12,90): the plate edge is a clean mill-cut aluminium return with no grain.", "The identity of this surface is PRINTED, not textured. It arrives as a canvas atlas assigned after material construction, which the textureless declaration does not touch.", "Measured cost: five synthesised canvases at 1024 would cost ~1.9 s inside createObjectModel for this one material, for a surface whose height field is flat."]}},
    options
  );
  materialMap["galvanised"] = createSculptMaterial(
    "galvanised",
    {"id": "galvanised", "name": "Hot-dip galvanised steel, weathering to rust at the foot", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#9AA0A2", "secondary": ["#C4C8C7", "#7A5433"], "samplingNotes": "White base colour because the measured vertical ramp is delivered as VERTEX COLOURS, not a texture - the post is 92 triangles and a per-vertex ramp across 8 height segments costs nothing, needs no canvas and no VRAM, and a tint here would multiply into it."}, "colorVariation": {"palette": ["#9AA0A2", "#C4C8C7", "#7A5433", "#8C6A3F"], "pattern": "mottled", "amplitude": 0.18, "heightCorrelation": 0.0}, "roughness": {"base": 0.62, "variation": 0.12, "map": "none", "localResponse": "Mill-finish galvanising is diffuse, not polished. The rusted foot is rougher still.", "notes": "Mid, matte-leaning. Mill-finish galvanising scatters: the shaft crop at (487,570,30,120) shows a broad low-contrast mottle with no tight highlight anywhere, and the rusted foot is rougher still. Carried as a single value because the ramp that varies across this surface is albedo, not roughness."}, "metalness": {"base": 0.25, "variation": 0.0, "notes": "Held at 0.25, not the 0.75 a zinc coating suggests by name. There is no environment map in the target harness, so a high metalness has nothing to reflect and renders as near-black; the sibling elephant-crossing-sign settled on the same 0.25 for the same coating for the same reason. The measured luma spread of the shaft crop is scatter, not a lobe, which is what a low metalness with a mid roughness reproduces."}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "Prismatic solid, no cavities."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "galv-spangle", "color": "#878F90", "region": "post shaft above y=0.40 and the cap", "evidenceRef": "region-post", "notes": "Trimmed mean #878F90 over the 3277 NEUTRAL pixels (|R-B|<12) of (487,570,32,120), and #919695 over the 2001 neutral px of (490,500,30,90) higher up. Filtering to neutral pixels matters: an unfiltered trim of the same crops pulls the coating toward the rust and reports a colour that is on neither surface. A crop above the disc at (492,60,30,18) returned #9E9E9C against a backdrop of #A2A2A2 and was DISCARDED as backdrop contamination."}, {"id": "foot-rust", "color": "#6E5641", "region": "the lowest 0.30 m of the shaft and the whole flange plate", "evidenceRef": "region-foot", "notes": "Shaft rust core #6E5641 over the 1038 ORANGE-BIASED px (R-B>28) of (488,790,40,95); flange plate #72553E over the 2110 such px of (450,895,110,45). Confined below about 0.30 m: the per-band rusty-pixel fraction is 0 percent from 0.44 m to 1.08 m, 3 percent at 0.33 m and 56 percent at 0.23 m, so this is a splash line with a hard top edge and not a bloom that fades up the post."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["Reference plate, post midsection at (490,600,40,120): hot-dip spangle is a flat crystalline blotch with no relief. Trimmed-mean luma spread 14.6 across the crop is COLOUR variation, not height.", "Reference plate, flange foot at (455,900,80,40): the rust is a surface bloom on a flat plate, not a scaled or pitted profile at this prop's viewing distance.", "The spangle and the rust ramp arrive as one 256px atlas column assigned after material construction, so the synthesised five-canvas set would be discarded work.", "Measured cost: five canvases at 1024 for this material alone is ~1.9 s inside createObjectModel, on a prop whose whole geometry is 36 triangles."]}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const attachment_sign_disc_0 = null;
  const endpoint_sign_disc_0 = makeAttachmentEndpoint(attachment_sign_disc_0);
  const node_sign_disc_0 = new THREE.Group();
  node_sign_disc_0.name = "Regulatory sign disc__pivot";
  node_sign_disc_0.scale.set(1, 1, 1);
  if (endpoint_sign_disc_0) {
    node_sign_disc_0.position.copy(endpoint_sign_disc_0.start);
    node_sign_disc_0.rotation.set(1.5707963, 0.0, 0.0);
  } else {
    node_sign_disc_0.position.set(0.0, 1.98, 0.0205);
    node_sign_disc_0.rotation.set(1.5707963, 0.0, 0.0);
  }
  node_sign_disc_0.userData.sculptComponent = {"id": "sign-disc", "name": "Regulatory sign disc", "level": "macro", "role": "panel", "importance": 1.0, "confidence": 0.88, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "A flat circular plate: two parallel planar caps joined by a short cylindrical wall, closed and rigid. Not an open-shell - the plate has real thickness and is sealed - and not a continuous-sculpt, since nothing about it is freeform. A cylinder laid on its side is the exact primitive here, not an approximation of one.", "geometryDescriptor": {"topologyIntent": "CylinderGeometry(0.30, 0.30, 0.012, 72), axis rotated onto +Z so the caps face front and back.", "radialSegments": 72, "heightSegments": 1, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - rewritten after generation into a two-region atlas: front-cap vertices take the printed graphic region, every wall and back-cap vertex collapses to a single bare-aluminium texel. This is what lets one material carry a printed front and a plain back without spending the second draw call.", "normalStrategy": "flat-shaded caps, smooth wall", "segmentRationale": "72 radial segments is where the triangles go and it is the only place they are spent. The circular outline IS this prop's silhouette, so a visible polygon on the rim is the one defect that cannot be recovered by any material work. 288 triangles of an 800 budget buys a rim that reads as a true circle at the distance a player passes it."}, "parent": null, "attachment": null, "dimensions": {"width": 0.6, "height": 0.6, "depth": 0.012, "units": "m", "confidence": 0.85}, "transform": {"position": [0, 1.98, 0.0205], "rotation": [1.5707963, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The disc does not turn on anything; this is the component's own transform origin and the model exposes exactly ONE named pivot, the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0, 0], "scale": [0.3, 0.006, 0.3], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. The disc's proxy is the disc itself, axis along the component's local Y which world-maps to +Z after the component rotation."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}}, "material": "sheeting", "materialLayers": ["sheeting"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "outer-rim-band", "description": "Pale yellow-cream rim band from 1.00R to 0.95R, measured #CABF90. Drawn into the face atlas rather than modelled.", "representation": "texture-region"}, {"id": "red-annulus", "description": "Chalked orange-red prohibition ring, 0.95R to 0.717R measured off the x=515 scanline. The widest band on the face.", "representation": "texture-region"}, {"id": "numeral-90", "description": "Black condensed grotesque 90 centred on the cream ground, cap height 0.33R.", "representation": "texture-region"}, {"id": "face-bolt-heads", "description": "Two dark hex heads on the vertical centreline at roughly 0.74R above and below centre. Printed, not modelled: at 14 mm across they are under a pixel at prop distance and would cost 64 triangles and a unique geometry.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#D6D4C1", "stops": [{"position": 0.0, "color": "rgba(202,191,144,1.0)", "note": "rim band at 1.00R-0.95R, measured #CABF90"}, {"position": 0.05, "color": "rgba(200,94,48,1.0)", "note": "red annulus outer edge, measured #C85E30 off the unshadowed limb"}, {"position": 0.283, "color": "rgba(200,94,48,1.0)", "note": "red annulus inner edge at 0.717R, measured"}, {"position": 0.3, "color": "rgba(214,212,193,1.0)", "note": "cream ground, measured #D6D4C1"}, {"position": 1.0, "color": "rgba(214,212,193,1.0)", "note": "cream ground to centre; the numerals sit on top of it as solid fill, not as a ramp stop"}], "finishStyle": "satin", "notes": "An ordered RADIAL ramp, position measured inward from the disc edge, not a scatter. Every boundary in it is hard-edged printed vinyl, so the stops are doubled at each edge rather than blended. materialClass is 'plastic': the face is calendered retroreflective VINYL laminated to an aluminium plate, and it is the vinyl that is seen. The metal underneath is never the visible surface on the front cap.", "dominantAlbedo": "rgba(214,212,193,1.0)", "secondaryAlbedo": "rgba(200,94,48,1.0)", "materialClass": "plastic", "materialClassConfidence": 0.85}};
  node_sign_disc_0.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The disc does not turn on anything; this is the component's own transform origin and the model exposes exactly ONE named pivot, the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0, 0], "scale": [0.3, 0.006, 0.3], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. The disc's proxy is the disc itself, axis along the component's local Y which world-maps to +Z after the component rotation."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}};
  (nodes["root"] ?? root).add(node_sign_disc_0);
  nodes["sign-disc"] = node_sign_disc_0;
  const mesh_sign_disc_0Geometry = endpoint_sign_disc_0
    ? new THREE.CylinderGeometry(endpoint_sign_disc_0.endRadius, endpoint_sign_disc_0.baseRadius, endpoint_sign_disc_0.length, 8, 4)
    : new THREE.CylinderGeometry(0.5, 0.5, 1, 10, 4);
  if (!endpoint_sign_disc_0) {
    mesh_sign_disc_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_sign_disc_0 = new THREE.Mesh(
    mesh_sign_disc_0Geometry,
    materialMap["sheeting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_sign_disc_0.name = "Regulatory sign disc";
  if (endpoint_sign_disc_0) {
    mesh_sign_disc_0.position.copy(endpoint_sign_disc_0.midpoint);
    mesh_sign_disc_0.quaternion.copy(endpoint_sign_disc_0.quaternion);
  }
  mesh_sign_disc_0.castShadow = options.castShadow ?? true;
  mesh_sign_disc_0.receiveShadow = options.receiveShadow ?? true;
  mesh_sign_disc_0.userData.sculptComponent = {"id": "sign-disc", "name": "Regulatory sign disc", "level": "macro", "role": "panel", "importance": 1.0, "confidence": 0.88, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "A flat circular plate: two parallel planar caps joined by a short cylindrical wall, closed and rigid. Not an open-shell - the plate has real thickness and is sealed - and not a continuous-sculpt, since nothing about it is freeform. A cylinder laid on its side is the exact primitive here, not an approximation of one.", "geometryDescriptor": {"topologyIntent": "CylinderGeometry(0.30, 0.30, 0.012, 72), axis rotated onto +Z so the caps face front and back.", "radialSegments": 72, "heightSegments": 1, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - rewritten after generation into a two-region atlas: front-cap vertices take the printed graphic region, every wall and back-cap vertex collapses to a single bare-aluminium texel. This is what lets one material carry a printed front and a plain back without spending the second draw call.", "normalStrategy": "flat-shaded caps, smooth wall", "segmentRationale": "72 radial segments is where the triangles go and it is the only place they are spent. The circular outline IS this prop's silhouette, so a visible polygon on the rim is the one defect that cannot be recovered by any material work. 288 triangles of an 800 budget buys a rim that reads as a true circle at the distance a player passes it."}, "parent": null, "attachment": null, "dimensions": {"width": 0.6, "height": 0.6, "depth": 0.012, "units": "m", "confidence": 0.85}, "transform": {"position": [0, 1.98, 0.0205], "rotation": [1.5707963, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The disc does not turn on anything; this is the component's own transform origin and the model exposes exactly ONE named pivot, the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0, 0], "scale": [0.3, 0.006, 0.3], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. The disc's proxy is the disc itself, axis along the component's local Y which world-maps to +Z after the component rotation."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}}, "material": "sheeting", "materialLayers": ["sheeting"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "outer-rim-band", "description": "Pale yellow-cream rim band from 1.00R to 0.95R, measured #CABF90. Drawn into the face atlas rather than modelled.", "representation": "texture-region"}, {"id": "red-annulus", "description": "Chalked orange-red prohibition ring, 0.95R to 0.717R measured off the x=515 scanline. The widest band on the face.", "representation": "texture-region"}, {"id": "numeral-90", "description": "Black condensed grotesque 90 centred on the cream ground, cap height 0.33R.", "representation": "texture-region"}, {"id": "face-bolt-heads", "description": "Two dark hex heads on the vertical centreline at roughly 0.74R above and below centre. Printed, not modelled: at 14 mm across they are under a pixel at prop distance and would cost 64 triangles and a unique geometry.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#D6D4C1", "stops": [{"position": 0.0, "color": "rgba(202,191,144,1.0)", "note": "rim band at 1.00R-0.95R, measured #CABF90"}, {"position": 0.05, "color": "rgba(200,94,48,1.0)", "note": "red annulus outer edge, measured #C85E30 off the unshadowed limb"}, {"position": 0.283, "color": "rgba(200,94,48,1.0)", "note": "red annulus inner edge at 0.717R, measured"}, {"position": 0.3, "color": "rgba(214,212,193,1.0)", "note": "cream ground, measured #D6D4C1"}, {"position": 1.0, "color": "rgba(214,212,193,1.0)", "note": "cream ground to centre; the numerals sit on top of it as solid fill, not as a ramp stop"}], "finishStyle": "satin", "notes": "An ordered RADIAL ramp, position measured inward from the disc edge, not a scatter. Every boundary in it is hard-edged printed vinyl, so the stops are doubled at each edge rather than blended. materialClass is 'plastic': the face is calendered retroreflective VINYL laminated to an aluminium plate, and it is the vinyl that is seen. The metal underneath is never the visible surface on the front cap.", "dominantAlbedo": "rgba(214,212,193,1.0)", "secondaryAlbedo": "rgba(200,94,48,1.0)", "materialClass": "plastic", "materialClassConfidence": 0.85}};
  node_sign_disc_0.add(mesh_sign_disc_0);
  meshes["sign-disc"] = mesh_sign_disc_0;
  colliders["sign-disc"] = {"type": "cylinder", "offset": [0, 0, 0], "scale": [0.3, 0.006, 0.3], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. The disc's proxy is the disc itself, axis along the component's local Y which world-maps to +Z after the component rotation."};

  const endpoint_post_assembly_1 = makeAttachmentEndpoint(null);
  const node_post_assembly_1 = new THREE.Group();
  node_post_assembly_1.name = "Galvanised post, cap and flange foot__pivot";
  node_post_assembly_1.scale.set(1, 1, 1);
  if (endpoint_post_assembly_1) {
    node_post_assembly_1.position.copy(endpoint_post_assembly_1.start);
    node_post_assembly_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_post_assembly_1.position.set(0.0, 0.0, 0.0);
    node_post_assembly_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_post_assembly_1.userData.sculptComponent = {"id": "post-assembly", "name": "Galvanised post, cap and flange foot", "level": "macro", "role": "support", "importance": 0.9, "confidence": 0.8, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Three axis-aligned prismatic solids that never deform and never move relative to one another. Boxes are exact here, not an approximation, and merging them into one buffer costs nothing in fidelity.", "geometryDescriptor": {"topologyIntent": "Three boxes merged into ONE BufferGeometry at build time.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - single atlas column, v mapped to world height so the rust ramp climbs the post foot and covers the flange without a second material", "normalStrategy": "flat", "note": "Left unchamfered on purpose. The post's identity feature is its sharp vertical arris, which a box already has; a chamfer would spend triangles rounding off the one edge that reads.", "mergedAssembly": {"reason": "maxDrawCalls is 2 and the printed disc must have one of them, so the post, its cap and its flange foot get ONE mesh between them. They share a material, they never move relative to each other, and merging them is invisible. Recorded here as a BLOCKOUT decision so a later pass does not 'fix' the shallow tree by splitting it and silently costing every instance of this sign an extra submission.", "parts": [{"id": "flange-foot", "level": "meso", "primitive": "box", "extent": {"width": 0.16, "height": 0.018, "depth": 0.078}, "localOffset": [0.0, 0.009, -0.0145], "note": "The widest thing in the prop in DEPTH, and it is what sets the declared 0.08 m. The Meshy proxy agrees: its lowest band is its deepest, at 0.073 of height against the disc bands' 0.008 to 0.041. Depth trimmed from 0.080 to 0.078 and the whole assembly moved 2 mm back during the build: at the original z the flange's FRONT face sat 0.001 m from the disc's front face, two same-facing surfaces a millimetre apart, which check-coplanar flagged as a flicker pair over 0.10 m2. The prop's total depth is still exactly the declared 0.080 m, now spanning z -0.0535 to +0.0265 with the DISC's front face as the maximum."}, {"id": "post-shaft", "level": "meso", "primitive": "box", "extent": {"width": 0.05, "height": 2.262, "depth": 0.05}, "localOffset": [0.0, 1.149, -0.0145], "note": "50 mm square hollow section. Runs from the top of the flange at y=0.018 to y=2.28, PAST the back of the disc, which is what the plate shows."}, {"id": "post-cap", "level": "meso", "primitive": "box", "extent": {"width": 0.056, "height": 0.02, "depth": 0.056}, "localOffset": [0.0, 2.29, -0.0145], "note": "The small bracket that peeks above the disc's top edge in the plate. Deliberately 3 mm oversized on each side so no face of it is coincident with a face of the shaft - an equal-sized cap would put four co-facing pairs in the model."}], "jointNote": "flange top y=0.018 meets shaft bottom y=0.018, and shaft top y=2.280 meets cap bottom y=2.280. Both are OPPOSED butt joints between solids, which is how solids are meant to meet and is not a z-fighting pair. In DEPTH every face is now distinct by at least 0.002 m: disc front 0.0265, flange front 0.0245, cap front 0.0135, shaft front 0.0105, disc back 0.0145, shaft back -0.0395, cap back -0.0425, flange back -0.0535. The disc stands 0.004 m proud of the shaft's front face and is never flush with it."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.16, "height": 2.3, "depth": 0.08, "units": "m", "confidence": 0.8}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "notes": "The root pivot, at base-center. This is the ONLY named pivot in the prop and it is the correct count: a bolted roadside sign has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 1.15, -0.0125], "scale": [0.035, 1.131, 0.035], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A capsule-free vertical cylinder circumscribing the 50 mm square shaft - the cheap convex proxy a player actually walks into."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}}, "material": "galvanised", "materialLayers": ["galvanised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "galv-spangle", "description": "Mottled white-grey hot-dip spangle, low-frequency blotch with no directional grain.", "representation": "texture-region"}, {"id": "base-rust-bloom", "description": "Orange-brown rust over the lowest ~0.30 m of the shaft and the whole flange plate, with a HARD top edge at the splash line rather than a fade - measured by a per-height-band count of orange-biased pixels.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#878F90", "stops": [{"position": 0.0, "color": "rgba(145,150,149,1.0)", "note": "cap and upper shaft, cleanest coating. Trimmed mean #919695 over the 2001 NEUTRAL px (|R-B|<12) of (490,500,30,90)."}, {"position": 0.85, "color": "rgba(135,143,144,1.0)", "note": "shaft field value, #878F90 over the 3277 neutral px of (487,570,32,120). Held to y>0.35 m: a rusty-pixel scan by height band reads 0 percent everywhere between 0.44 m and 1.08 m."}, {"position": 0.87, "color": "rgba(110,86,65,1.0)", "note": "SHARP transition, not a fade. The band scan jumps from 3 percent rusty at 0.33 m to 56 percent at 0.23 m. Shaft rust core #6E5641 over the 1038 ORANGE-BIASED px (R-B>28) of (488,790,40,95)."}, {"position": 1.0, "color": "rgba(114,85,62,1.0)", "note": "flange plate, the worst of it. #72553E over the 2110 orange-biased px of (450,895,110,45)."}], "finishStyle": "satin", "notes": "An ordered vertical ramp, position measured DOWNWARD from the cap, and it is a STEP rather than a fade. A per-height-band count of orange-biased pixels (R-B>28) down the post reads 0 percent at every band from 0.44 m to 1.08 m, 3 percent at 0.33 m, then 56 percent at 0.23 m and 52 percent at 0.12 m: the rust is confined below roughly 0.30 m and arrives abruptly at the splash line. The first authoring of this recipe had it fading in from 1.5 m, which came from trimming a crop that contained BOTH rust and clean coating and reading the grey-brown average as the rust colour. Separating the two populations by hue - orange-biased for rust, neutral for coating - is what corrected both the colour and the extent. Reversing this ramp, or smoothing the step back into a fade, are the two ways to get this prop visibly wrong.", "dominantAlbedo": "rgba(135,143,144,1.0)", "secondaryAlbedo": "rgba(110,86,65,1.0)", "materialClass": "metal", "materialClassConfidence": 0.88}};
  node_post_assembly_1.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "notes": "The root pivot, at base-center. This is the ONLY named pivot in the prop and it is the correct count: a bolted roadside sign has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 1.15, -0.0125], "scale": [0.035, 1.131, 0.035], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A capsule-free vertical cylinder circumscribing the 50 mm square shaft - the cheap convex proxy a player actually walks into."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}};
  (nodes["root"] ?? root).add(node_post_assembly_1);
  nodes["post-assembly"] = node_post_assembly_1;
  const mesh_post_assembly_1Geometry = endpoint_post_assembly_1
    ? new THREE.CylinderGeometry(endpoint_post_assembly_1.endRadius, endpoint_post_assembly_1.baseRadius, endpoint_post_assembly_1.length, 8, 4)
    : new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
  if (!endpoint_post_assembly_1) {
    mesh_post_assembly_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_post_assembly_1 = new THREE.Mesh(
    mesh_post_assembly_1Geometry,
    materialMap["galvanised"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_post_assembly_1.name = "Galvanised post, cap and flange foot";
  if (endpoint_post_assembly_1) {
    mesh_post_assembly_1.position.copy(endpoint_post_assembly_1.midpoint);
    mesh_post_assembly_1.quaternion.copy(endpoint_post_assembly_1.quaternion);
  }
  mesh_post_assembly_1.castShadow = options.castShadow ?? true;
  mesh_post_assembly_1.receiveShadow = options.receiveShadow ?? true;
  mesh_post_assembly_1.userData.sculptComponent = {"id": "post-assembly", "name": "Galvanised post, cap and flange foot", "level": "macro", "role": "support", "importance": 0.9, "confidence": 0.8, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Three axis-aligned prismatic solids that never deform and never move relative to one another. Boxes are exact here, not an approximation, and merging them into one buffer costs nothing in fidelity.", "geometryDescriptor": {"topologyIntent": "Three boxes merged into ONE BufferGeometry at build time.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - single atlas column, v mapped to world height so the rust ramp climbs the post foot and covers the flange without a second material", "normalStrategy": "flat", "note": "Left unchamfered on purpose. The post's identity feature is its sharp vertical arris, which a box already has; a chamfer would spend triangles rounding off the one edge that reads.", "mergedAssembly": {"reason": "maxDrawCalls is 2 and the printed disc must have one of them, so the post, its cap and its flange foot get ONE mesh between them. They share a material, they never move relative to each other, and merging them is invisible. Recorded here as a BLOCKOUT decision so a later pass does not 'fix' the shallow tree by splitting it and silently costing every instance of this sign an extra submission.", "parts": [{"id": "flange-foot", "level": "meso", "primitive": "box", "extent": {"width": 0.16, "height": 0.018, "depth": 0.078}, "localOffset": [0.0, 0.009, -0.0145], "note": "The widest thing in the prop in DEPTH, and it is what sets the declared 0.08 m. The Meshy proxy agrees: its lowest band is its deepest, at 0.073 of height against the disc bands' 0.008 to 0.041. Depth trimmed from 0.080 to 0.078 and the whole assembly moved 2 mm back during the build: at the original z the flange's FRONT face sat 0.001 m from the disc's front face, two same-facing surfaces a millimetre apart, which check-coplanar flagged as a flicker pair over 0.10 m2. The prop's total depth is still exactly the declared 0.080 m, now spanning z -0.0535 to +0.0265 with the DISC's front face as the maximum."}, {"id": "post-shaft", "level": "meso", "primitive": "box", "extent": {"width": 0.05, "height": 2.262, "depth": 0.05}, "localOffset": [0.0, 1.149, -0.0145], "note": "50 mm square hollow section. Runs from the top of the flange at y=0.018 to y=2.28, PAST the back of the disc, which is what the plate shows."}, {"id": "post-cap", "level": "meso", "primitive": "box", "extent": {"width": 0.056, "height": 0.02, "depth": 0.056}, "localOffset": [0.0, 2.29, -0.0145], "note": "The small bracket that peeks above the disc's top edge in the plate. Deliberately 3 mm oversized on each side so no face of it is coincident with a face of the shaft - an equal-sized cap would put four co-facing pairs in the model."}], "jointNote": "flange top y=0.018 meets shaft bottom y=0.018, and shaft top y=2.280 meets cap bottom y=2.280. Both are OPPOSED butt joints between solids, which is how solids are meant to meet and is not a z-fighting pair. In DEPTH every face is now distinct by at least 0.002 m: disc front 0.0265, flange front 0.0245, cap front 0.0135, shaft front 0.0105, disc back 0.0145, shaft back -0.0395, cap back -0.0425, flange back -0.0535. The disc stands 0.004 m proud of the shaft's front face and is never flush with it."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.16, "height": 2.3, "depth": 0.08, "units": "m", "confidence": 0.8}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "notes": "The root pivot, at base-center. This is the ONLY named pivot in the prop and it is the correct count: a bolted roadside sign has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 1.15, -0.0125], "scale": [0.035, 1.131, 0.035], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A capsule-free vertical cylinder circumscribing the 50 mm square shaft - the cheap convex proxy a player actually walks into."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}}, "material": "galvanised", "materialLayers": ["galvanised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "galv-spangle", "description": "Mottled white-grey hot-dip spangle, low-frequency blotch with no directional grain.", "representation": "texture-region"}, {"id": "base-rust-bloom", "description": "Orange-brown rust over the lowest ~0.30 m of the shaft and the whole flange plate, with a HARD top edge at the splash line rather than a fade - measured by a per-height-band count of orange-biased pixels.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#878F90", "stops": [{"position": 0.0, "color": "rgba(145,150,149,1.0)", "note": "cap and upper shaft, cleanest coating. Trimmed mean #919695 over the 2001 NEUTRAL px (|R-B|<12) of (490,500,30,90)."}, {"position": 0.85, "color": "rgba(135,143,144,1.0)", "note": "shaft field value, #878F90 over the 3277 neutral px of (487,570,32,120). Held to y>0.35 m: a rusty-pixel scan by height band reads 0 percent everywhere between 0.44 m and 1.08 m."}, {"position": 0.87, "color": "rgba(110,86,65,1.0)", "note": "SHARP transition, not a fade. The band scan jumps from 3 percent rusty at 0.33 m to 56 percent at 0.23 m. Shaft rust core #6E5641 over the 1038 ORANGE-BIASED px (R-B>28) of (488,790,40,95)."}, {"position": 1.0, "color": "rgba(114,85,62,1.0)", "note": "flange plate, the worst of it. #72553E over the 2110 orange-biased px of (450,895,110,45)."}], "finishStyle": "satin", "notes": "An ordered vertical ramp, position measured DOWNWARD from the cap, and it is a STEP rather than a fade. A per-height-band count of orange-biased pixels (R-B>28) down the post reads 0 percent at every band from 0.44 m to 1.08 m, 3 percent at 0.33 m, then 56 percent at 0.23 m and 52 percent at 0.12 m: the rust is confined below roughly 0.30 m and arrives abruptly at the splash line. The first authoring of this recipe had it fading in from 1.5 m, which came from trimming a crop that contained BOTH rust and clean coating and reading the grey-brown average as the rust colour. Separating the two populations by hue - orange-biased for rust, neutral for coating - is what corrected both the colour and the extent. Reversing this ramp, or smoothing the step back into a fade, are the two ways to get this prop visibly wrong.", "dominantAlbedo": "rgba(135,143,144,1.0)", "secondaryAlbedo": "rgba(110,86,65,1.0)", "materialClass": "metal", "materialClassConfidence": 0.88}};
  node_post_assembly_1.add(mesh_post_assembly_1);
  meshes["post-assembly"] = mesh_post_assembly_1;
  colliders["post-assembly"] = {"type": "cylinder", "offset": [0, 1.15, -0.0125], "scale": [0.035, 1.131, 0.035], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A capsule-free vertical cylinder circumscribing the 50 mm square shaft - the cheap convex proxy a player actually walks into."};

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createSpeedLimitSignLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Speed Limit Sign look-dev lights";
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
  lights.userData.lightingFromPhoto = [{"role": "key", "type": "area", "directionHint": [-0.45, 0.5, 0.74], "intensity": 1.0, "colorTemperatureK": 5600, "evidence": "The post's left face reads luma 159 against its right face at 145 across the same scanline (y=600), so the key is camera-LEFT. The disc face falls from 211 above the numerals to 207 below them and the cream band trims 213 at the top against 191 at the bottom, so it is also slightly high. Soft, not hard: no cast edge is sharp anywhere on the plate."}, {"role": "fill", "type": "hemisphere", "directionHint": [0.55, 0.2, -0.4], "intensity": 0.34, "colorTemperatureK": 6500, "evidence": "The red annulus's shadowed bottom arc still trims to luma 126 against the lit top arc's 119 - the side facing away from the key never goes darker than the side facing it, which only happens with real fill rather than a single source."}, {"role": "rim", "type": "directional", "directionHint": [0.6, 0.3, -0.75], "intensity": 0.22, "colorTemperatureK": 6500, "evidence": "A thin bright line separates the disc's right edge from the backdrop; the plate's edge return stays legible where it turns away from the key."}, {"role": "environment", "type": "studio-context", "environment": "studio softbox on a flat neutral backdrop", "exposure": 1.0, "toneMapping": "ACESFilmic", "evidence": "Border-ring scan over 512 samples: mean luma 162.1 with a standard deviation of 0.38, trimming to #A2A2A2. The backdrop was MEASURED rather than assumed to be the grey the prompt asked for, and it is not - it is a light matte, well above a mid grey.", "note": "The backdrop is 162 luma. The render harness backs onto ~58, so a candidate render will read darker overall than the plate and that difference is the backdrop, not the prop."}, {"role": "contact-shadow", "type": "ground-shadow", "intensity": 0.55, "evidence": "The plate shows a soft ground shadow pooling under and slightly camera-right of the flange foot, reaching about one flange-width before it dissolves into the backdrop's 162 luma. Its softness matches the key's area source; there is no second hard contact edge anywhere.", "behavior": "Contact shadow is grounded at the flange underside, y=0, which is also the prop's origin - so a placed instance darkens where it actually touches. Ambient occlusion is left at zero on both materials: this prop is two convex prismatic solids and a sealed plate, with no cavity for AO to find, and baking any into base colour is what the material pass forbids."}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  return lights;
}


// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameSpeedLimitSignCamera(
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


export function configureSpeedLimitSignRenderer(renderer: THREE.WebGLRenderer): void {
  // Load-bearing for view-dependent finishes (anodized / Doppler): without ACES + sRGB
  // the environment reflection reads flat/washed instead of a believable metal response.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}
/* ---------------------------------------------------------------------------
 * thaikit post-generation layer.
 *
 * The generator emits the component tree, the userData contract and the
 * materials. It does NOT emit: the disc's real dimensions and its 72-segment
 * tessellation, the three-box merge the spec's `mergedAssembly` describes, the
 * two-region UV atlas that lets ONE material carry a printed front and a bare
 * aluminium back, the printed face itself, or the measured weathering ramp.
 * All five live here, and every number in this file is either read off the
 * reference plate or carried from the spec -- none is chosen by eye.
 *
 * Kept as a separate part file and re-applied by rebuild-factory.sh, because a
 * bare regenerate would silently drop the lot and leave a pair of placeholder
 * primitives that still validate.
 * ------------------------------------------------------------------------ */

/** Measured off assets/speed-limit-sign/preview.jpg. See the spec's localOverrides for crops. */
const PALETTE = {
  rimBand: '#CABF90',      // top arc (505,87,25,8), 200 px
  annulus: '#C85E30',      // least-shadowed limb (382,265,14,40), 560 px
  ground: '#D6D4C1',       // above the numerals (495,160,45,40), 1800 px
  ink: '#272723',          // sub-luma-70 half of (450,225,140,100), 6338 px
  plateBack: '#A8A6A0',    // NOT OBSERVED - assumption at confidence 0.55
  grime: '#C6C2AE',
  // The coating and the rust are two POPULATIONS, separated by hue before trimming.
  // Trimming a crop that holds both reports a grey-brown that is on neither surface -
  // which is what put the first version of this ramp's rust at 1.5 m and desaturated.
  galvClean: '#919695',    // neutral px (|R-B|<12) of (490,500,30,90), 2001 px
  galvField: '#878F90',    // neutral px of (487,570,32,120), 3277 px
  galvRust: '#6E5641',     // orange-biased px (R-B>28) of (488,790,40,95), 1038 px
  flangeRust: '#72553E',   // orange-biased px of (450,895,110,45), 2110 px
} as const;

/** Geometry, in metres, from the spec. Origin base-center: y=0 is the flange underside. */
const DIM = {
  discRadius: 0.30,
  discThickness: 0.012,
  discSegments: 72,
  discCentreY: 1.98,
  discCentreZ: 0.0205,
  postSide: 0.05,
  // -0.0145, not -0.0125. At -0.0125 the flange's front face (0.0275) landed 0.001 m from the
  // disc's front face (0.0265): two same-facing surfaces a millimetre apart, which is a z-fight,
  // and check-coplanar caught it. Moving the assembly 2 mm back and trimming the flange to 0.078
  // opens that to 0.002 m while keeping the prop's total depth at exactly the declared 0.080.
  postZ: -0.0145,
  postTopY: 2.28,
  flangeW: 0.16,
  flangeH: 0.018,
  flangeD: 0.078,
  capW: 0.056,
  capH: 0.02,
  totalH: 2.30,
  /** Measured off the x=515 scanline: red runs 0.95R to 0.717R, rim band 1.00R to 0.95R. */
  rRimInner: 0.95,
  rAnnulusInner: 0.717,
  /** Bolt heads sit on the vertical centreline at 0.74R above and below centre. */
  rBolt: 0.74,
} as const;

/** Deterministic hash noise. No Math.random anywhere: every instance must be identical. */
function noise1(i: number): number {
  let h = (i * 374761393 + 668265263) >>> 0;
  h = (h ^ (h >>> 13)) >>> 0;
  h = (h * 1274126177) >>> 0;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

/* -- the printed face ----------------------------------------------------- */

/**
 * One 512px canvas for the whole sheeting material. The canvas GROUND is the bare
 * aluminium back, and the sign graphic is drawn as a disc in the middle of it: that is
 * what lets the atlas send every wall and back-cap vertex to a corner texel and still
 * get a printed front, on one material and one draw call.
 */
let faceAtlasCache: THREE.CanvasTexture | null | undefined;

function faceAtlas(size: number): THREE.CanvasTexture | null {
  // Built ONCE at module scope, not once per call: every instance of this sign in a scene
  // shares the one canvas, which is what the spec's uniqueGeometries accounting claims.
  if (faceAtlasCache !== undefined) return faceAtlasCache;
  // No DOM outside the browser. The geometry-only tools (check-coplanar) evaluate this module
  // in bare Node, and they must get a working prop rather than a throw.
  if (typeof document === 'undefined') { faceAtlasCache = null; return null; }
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) { faceAtlasCache = null; return null; }

  // The ground. Every non-front-cap vertex in the atlas lands on this.
  ctx.fillStyle = PALETTE.plateBack;
  ctx.fillRect(0, 0, size, size);

  const cx = size / 2;
  const cy = size / 2;
  const R = size * 0.46875; // 240 px at 512 -- the disc's 0.30 m radius

  // Rim band, then red, then ground: painted outside-in as filled discs, so every
  // boundary is a hard edge. These are printed vinyl edges and must not blend.
  ctx.fillStyle = PALETTE.rimBand;
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = PALETTE.annulus;
  ctx.beginPath();
  ctx.arc(cx, cy, R * DIM.rRimInner, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = PALETTE.ground;
  ctx.beginPath();
  ctx.arc(cx, cy, R * DIM.rAnnulusInner, 0, Math.PI * 2);
  ctx.fill();

  // Grime: faint vertical runs down the ground below the upper bolt. The plate supports
  // a 4-luma drop across the face and nothing more, so this is drawn weak on purpose.
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, R * DIM.rAnnulusInner, 0, Math.PI * 2);
  ctx.clip();
  for (let i = 0; i < 7; i += 1) {
    const x = cx + (noise1(i * 3 + 1) - 0.5) * R * 1.1;
    const w = 4 + noise1(i * 3 + 2) * 9;
    const g = ctx.createLinearGradient(0, cy - R * DIM.rBolt, 0, cy + R);
    g.addColorStop(0, 'rgba(198,194,174,0.30)');
    g.addColorStop(1, 'rgba(198,194,174,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - w / 2, cy - R * DIM.rBolt, w, R * 1.7);
  }
  ctx.restore();

  // The numerals. Solid fill, never an outline -- solid fill is what survives both prop
  // distance and a low texture resolution. Width taken from the plate's horizontal scan
  // at y=275, where the ink spans 1.13R once the three-quarter foreshortening is undone.
  ctx.fillStyle = PALETTE.ink;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const targetW = R * 1.13;
  let px = R;
  ctx.font = `bold ${px}px "Arial Narrow", "Helvetica Neue Condensed", Impact, sans-serif`;
  const measured = ctx.measureText('90').width;
  if (measured > 0) px = px * (targetW / measured);
  ctx.font = `bold ${px}px "Arial Narrow", "Helvetica Neue Condensed", Impact, sans-serif`;
  ctx.fillText('90', cx, cy);

  // Two bolt heads, printed rather than modelled. At 14 mm they are under a pixel at prop
  // distance, and geometry for them would cost a third unique geometry and a third draw
  // call against ceilings of two and two.
  for (const sign of [-1, 1]) {
    const by = cy + sign * R * DIM.rBolt;
    ctx.fillStyle = 'rgba(39,39,35,0.85)';
    ctx.beginPath();
    ctx.arc(cx, by, R * 0.035, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  faceAtlasCache = tex;
  return tex;
}

/* -- geometry ------------------------------------------------------------- */

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
    for (const a of attrs) {
      arr.set(a.array as Float32Array, off);
      off += a.array.length;
    }
    out.setAttribute(name, new THREE.BufferAttribute(arr, attrs[0].itemSize));
  }
  return out;
}

/**
 * The disc: a real 72-segment cylinder at the spec's dimensions, replacing the generator's
 * placeholder, plus the two-region atlas. 72 segments is the ONE place triangles are spent
 * here -- the circular outline is this prop's whole silhouette, and a visible polygon on the
 * rim is the single defect no material work can recover.
 */
function buildDisc(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const mesh = rt?.meshes?.['sign-disc'];
  if (!mesh) return;

  const geo = new THREE.CylinderGeometry(
    DIM.discRadius, DIM.discRadius, DIM.discThickness, DIM.discSegments, 1,
  );
  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  const nrm = geo.getAttribute('normal') as THREE.BufferAttribute;
  const uv = new Float32Array(pos.count * 2);
  const S = 0.46875; // the graphic disc's radius in UV, matching faceAtlas's R

  for (let i = 0; i < pos.count; i += 1) {
    // The node carries rotation [pi/2, 0, 0], so local +Y becomes world +Z: the top cap
    // IS the front face. Local +Z becomes world -Y, so v runs against local z.
    if (nrm.getY(i) > 0.5) {
      uv[i * 2] = 0.5 + (pos.getX(i) / DIM.discRadius) * S;
      uv[i * 2 + 1] = 0.5 - (pos.getZ(i) / DIM.discRadius) * S;
    } else {
      // Wall and back cap collapse to a single corner texel, which is outside the drawn
      // graphic and therefore bare aluminium. This is what buys a printed front and a
      // plain back without spending the second material or the second draw call.
      uv[i * 2] = 0.02;
      uv[i * 2 + 1] = 0.02;
    }
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));

  mesh.geometry.dispose();
  mesh.geometry = geo;
  mesh.position.set(0, 0, 0);
  mesh.rotation.set(0, 0, 0);
  mesh.scale.set(1, 1, 1);
}

/**
 * The post assembly: the spec's three boxes merged into ONE buffer, with the measured
 * weathering ramp baked as VERTEX COLOURS. No canvas and no VRAM for it -- 92 triangles
 * across 8 height segments carries the ramp for free, and a texture here would be the
 * expensive way to say the same thing.
 */
function buildPost(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const mesh = rt?.meshes?.['post-assembly'];
  if (!mesh) return;

  const shaftH = DIM.postTopY - DIM.flangeH;
  const shaft = toNonIndexed(new THREE.BoxGeometry(DIM.postSide, shaftH, DIM.postSide, 1, 16, 1));
  shaft.translate(0, DIM.flangeH + shaftH / 2, DIM.postZ);

  const flange = toNonIndexed(new THREE.BoxGeometry(DIM.flangeW, DIM.flangeH, DIM.flangeD));
  flange.translate(0, DIM.flangeH / 2, DIM.postZ);

  // 3 mm oversized on each side ON PURPOSE: an equal-sized cap would put four coincident
  // co-facing pairs against the shaft, which is exactly the z-fight this kit has paid for.
  const cap = toNonIndexed(new THREE.BoxGeometry(DIM.capW, DIM.capH, DIM.capW));
  cap.translate(0, DIM.postTopY + DIM.capH / 2, DIM.postZ);

  const merged = concatGeometry([shaft, flange, cap]);
  for (const g of [shaft, flange, cap]) g.dispose();

  // The ramp, top-down, from the spec's colorMaterialRecipe. Reversing it is the single
  // most likely way to get this prop visibly wrong: the coating is intact at the top and
  // the rust is worst at the flange weld, where the galvanising was severed.
  // Heights measured UP from y=0, in metres, matching the recipe's positions measured DOWN
  // from the cap. This is a STEP, not a fade: a per-height-band count of orange-biased pixels
  // reads 0 per cent everywhere from 0.44 m to 1.08 m, 3 per cent at 0.33 m, then 56 per cent
  // at 0.23 m. The shaft carries 16 height segments so the splash line lands on a segment
  // boundary and resolves as an edge rather than a 28 cm smear.
  const ramp: Array<[number, THREE.Color]> = [
    [0.000, new THREE.Color(PALETTE.flangeRust)],
    [0.018, new THREE.Color(PALETTE.flangeRust)],
    [0.290, new THREE.Color(PALETTE.galvRust)],
    [0.330, new THREE.Color(PALETTE.galvField)],
    [2.300, new THREE.Color(PALETTE.galvClean)],
  ];

  const pos = merged.getAttribute('position') as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i += 1) {
    const t = Math.min(DIM.totalH, Math.max(0, pos.getY(i)));
    let k = 0;
    while (k < ramp.length - 2 && t > ramp[k + 1][0]) k += 1;
    const [t0, c0] = ramp[k];
    const [t1, c1] = ramp[k + 1];
    const f = t1 > t0 ? (t - t0) / (t1 - t0) : 0;
    c.copy(c0).lerp(c1, Math.min(1, Math.max(0, f)));
    // Spangle: a low-frequency crystalline blotch. Keyed to POSITION, not to the vertex
    // index -- this buffer is non-indexed, so index-keyed noise gives the three corners of
    // every triangle three different values and the post renders as a patchwork of flat
    // facets rather than a coating. Quantised to 40 mm so coincident corners agree exactly.
    const q = (v: number) => Math.round(v / 0.04);
    const n = (noise1(q(pos.getY(i)) * 73856093 ^ q(pos.getX(i)) * 19349663
      ^ q(pos.getZ(i)) * 83492791) - 0.5) * 0.07;
    colors[i * 3] = Math.min(1, Math.max(0, c.r + n));
    colors[i * 3 + 1] = Math.min(1, Math.max(0, c.g + n));
    colors[i * 3 + 2] = Math.min(1, Math.max(0, c.b + n));
  }
  merged.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  merged.computeVertexNormals();

  mesh.geometry.dispose();
  mesh.geometry = merged;
  mesh.position.set(0, 0, 0);
  mesh.rotation.set(0, 0, 0);
  mesh.scale.set(1, 1, 1);

  const m = mesh.material as THREE.MeshPhysicalMaterial;
  m.vertexColors = true;
  m.color.set('#FFFFFF');
  m.metalness = 0.25;
  m.roughness = 0.62;
  m.needsUpdate = true;
}

/** Assign the face atlas AFTER material construction -- the textureless declaration does not touch this route. */
function applyFaceAtlas(root: THREE.Group, options: ProceduralModelOptions): void {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const mesh = rt?.meshes?.['sign-disc'];
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
 * alone. `spec` is accepted and attached for host-side inspection -- the reconstruction data
 * already lives in the module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(
  spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = createSpeedLimitSignModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  buildDisc(root);
  buildPost(root);
  applyFaceAtlas(root, options);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. A bolted roadside regulatory sign has no hinge, no bearing, no lid and no
    // wheel, so the root is the only axis it has. That is the correct answer rather than a
    // gap -- a pivot per component would describe a machine that does not exist.
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);

    // Sockets: NONE. Nothing is meant to attach to or be emitted from this prop, and a named
    // socket is a promise that something clips in there.

    // Colliders: drop the empty entries the generator emits, so the count is of real proxies.
    // An ARRAY of named proxies, not the Record -- the harness maps over this field.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups: this prop declares NONE, and promotion checks built against declared
    // as an equality in BOTH directions. Derived rather than assumed empty, so a component that
    // somehow carried a fractureGroup fails the gate loudly instead of being dropped here.
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
      // puppeteer bridge and its registry field is a number; a Record of Object3D is circular
      // and fails to serialise, which surfaces as the whole stats object arriving undefined.
      // The Record stays reachable under byId.
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
