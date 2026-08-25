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

function buildLatheGeometry(profile: { points: [number, number][]; segments?: number }): THREE.LatheGeometry {
  const points = profile.points.map(([x, y]) => new THREE.Vector2(Math.max(0.0001, x), y));
  return new THREE.LatheGeometry(points, profile.segments ?? 24);
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

function referenceMapUrl(_spec: SculptMaterialSpec, _channel: string): string | null {
  // thaikit adaptation: referencePbr is EVIDENCE, not a runtime asset manifest. This factory
  // ships no texture files, so every channel resolves to null and the procedural canvas path
  // is taken instead. See scratch/oil-drum/projection-route.json for why the pixels are not
  // baked in the first place.
  return null;
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

// Generated from ObjectSculptSpec target: Oil Drum
// Sculpt build pass: optimization-pass
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createOilDrumModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Oil Drum";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["steel-painted-worn"] = createSculptMaterial(
    "steel-painted-worn",
    {"id": "steel-painted-worn", "name": "Worn blue enamel over steel", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#326C84", "color": "#326C84", "albedo": {"dominant": "#326C84", "secondary": ["#24566A", "#4A8098", "#9F613B", "#7F3F1E"], "samplingNotes": "De-lit palette measured by extract_pbr_evidence.py from crop-paint at confidence 0.751. The broad vertical bright bands on each panel are specular response to the studio key, not albedo, and are deliberately not sampled.", "renderedRangeNote": "The painter authors the enamel over #24566A..#4A8098 with a #326C84 mid, which is BRIGHTER than the de-lit stops recorded in referencePbr. Recorded here because it is a deliberate deviation from the extraction, not drift. Authored at the de-lit stops the drum rendered at a median luma of 62 facing the harness key and 48 facing away, against a review backdrop of 58; turntable_gate then read the sub-backdrop regions as interior HOLES and failed. The plate s own body row measures median 67, p95 105, max 142, so every lifted stop stays inside the reference s measured range. Two separate effects were distinguished before changing anything: the render s p95 of 71 against the plate s 105 is MISSING SPECULAR -- the harness supplies three directional lights and no environment map, so a satin dielectric cannot produce the plate s broad highlight bands -- and that shortfall was deliberately NOT compensated by baking brightness into base colour.", "measuredAfterLift": {"renderMedianLuma": {"az0": 83, "az90": 71, "az180": 66, "az270": 67}, "plateMedianLuma": 67, "backdropLuma": 58}}, "colorVariation": {"palette": ["#326C84", "#24566A", "#4A8098", "#9F613B", "#7F3F1E"], "pattern": "gravity-directed rust streaking over mottled enamel", "amplitude": 0.45, "heightCorrelation": 0.55, "paletteNote": "FOUR enamel stops to one oxide stop, deliberately. makeProceduralTextureSet mottles across the palette roughly evenly, so an earlier 3-rust-to-2-blue palette rendered the drum predominantly orange -- the inverse of the plate, where oxide is a minority region at the chimes and in the streaks. The palette sets the BASE enamel; the measured oxide placement is the wear painter's job, not the mottler's."}, "textureResolution": 1024, "textureProjection": {"mode": "uv", "repeat": [1.0, 1.0], "anisotropy": 4, "texelDensityIntent": "One unwrap over the whole lathe. 1024 square over a 1.82 m circumference x 0.88 m shell is ~1.1 mm per texel, which resolves a rust streak edge and nothing finer. Generated once at runtime and shared by every instance in the level, so it is one upload for the whole kit rather than one per placed drum."}, "surfaceFrequencyBands": [{"id": "macro", "frequency": 1.5, "amplitude": 0.4, "role": "panel-scale tonal mottling in the enamel and the large rust blooms at the chimes"}, {"id": "meso", "frequency": 8.0, "amplitude": 0.28, "role": "individual rust streaks falling from the top chime and each hoop"}, {"id": "micro", "frequency": 40.0, "amplitude": 0.12, "role": "rolled-steel grain and oxidation pitting"}], "roughness": {"base": 0.5, "variation": 0.35, "map": "generated-roughness-canvas: 0.30 on the worn hoop crowns, 0.50 on intact enamel, 0.88 on oxidised regions", "notes": "Base 0.5 comes from the painted-metal finish recipe in analyze_texture.py. The pixel-derived roughnessBase of 0.784 is NOT used: extract_pbr_evidence itself warned \"low value range weakens height/roughness inference\" on this crop, and a 0.78 base contradicts the visible satin sheen."}, "metalness": 0.0, "normal": {"pattern": "derived-from-independent-height-field", "strength": 0.35, "scale": 24.0, "space": "tangent"}, "bump": {"pattern": "none", "amplitude": 0.0, "scale": 1.0}, "displacement": {"pattern": "none", "amplitude": 0.0, "scale": 1.0, "silhouetteAffects": false}, "ambientOcclusion": {"source": "generated-ao-canvas", "strength": 0.45, "cavityBias": 0.6, "notes": "Darkens the two hoop roots and both chime recesses, where a rolled edge traps dirt. Independent of albedo."}, "wear": {"edgeWear": 0.55, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "rust-crown-chimes", "region": "both chime curls, y < 0.03 and y > 0.855", "channels": {"albedo": "#9A552A", "roughness": 0.88, "metalness": 0.2}, "coverage": 0.85, "confidence": 0.92, "evidenceRef": "scratch/oil-drum/crops/base-chime.png", "notes": "The heaviest oxidation on the object, near-continuous around both curls. It follows the curl rather than pooling randomly, because a rolled edge is where the coating thins."}, {"id": "rust-streaks-gravity", "region": "body panels, falling from the top chime and each hoop", "channels": {"albedo": "#8A4A24", "roughness": 0.8, "metalness": 0.15}, "coverage": 0.25, "confidence": 0.88, "direction": "downward, widening with distance from the source", "evidenceRef": "plate zones r1c1, r1c2, r2c1, r2c2", "notes": "Gravity-directed and top-weighted. Seeded independently around the full 360 degrees rather than mirrored -- mirrored wear reads as bilateral symmetry the moment the prop is orbited, which is the defect a turntable gate exists to catch."}, {"id": "specular-crown-bare-steel", "region": "both hoop crowns, y = 0.2886 and y = 0.5870", "channels": {"albedo": "#9FB0B8", "roughness": 0.3, "metalness": 0.8}, "coverage": 0.4, "confidence": 0.85, "evidenceRef": "scratch/oil-drum/crops/hoop-upper.png", "notes": "Paint worn through to bare metal on the proudest band. The only near-metallic response on the object, and what gives each hoop its tight highlight."}, {"id": "paint-mottle-panels", "region": "body panels", "channels": {"albedo": "#24505F", "roughness": 0.5, "metalness": 0.0}, "coverage": 0.3, "confidence": 0.8, "evidenceRef": "plate zone r1c1", "notes": "Low-frequency tonal mottling in the enamel itself, separate from the rust. Without it the panels read as flat vinyl."}], "shaderNotes": ["Albedo, roughness, normal and AO all arrive as ONE generated canvas set at runtime; the factory ships no texture files.", "metalness stays a scalar 0.0 because enamel is a dielectric coat. The rust and bare-steel regions raise their apparent metallic response through roughness and albedo alone, which is a deliberate approximation: a metalnessMap would be a fourth 1024 canvas for a difference that is not resolvable at prop scale.", "analyze_texture.py proposes clearcoat 1.0 (MeshPhysicalMaterial). Shipped as MeshStandardMaterial instead: a clearcoat lobe is an extra BRDF evaluation per fragment on a prop a level builder places hundreds of, and at 0.58 m across the difference is a slightly tighter highlight. Recorded as a deliberate downgrade, not an oversight."], "notes": "ONE material for three visual regions. A colour difference is not a material difference: enamel, rust and bare steel differ in albedo and roughness, which maps express, and giving each its own material would cost a shader switch per region.", "referencePbr": {"usable": true, "confidence": 0.751, "estimatedFidelity": 0.751, "verdict": "pass", "sourceCrop": "crop-paint", "palette": ["#0D3E53", "#07374A", "#1B4A5C", "#3B6473", "#1B3740"], "mapStats": {"valueRange": 0.1244, "heightP90Gradient": 0.11297, "roughnessBase": 0.784, "roughnessVariation": 0.17, "normalStrength": 0.289, "blurRadius": 21}, "maps": {"albedo": {"path": "/home/mulligan/code/thaikit/scratch/oil-drum/pbr-evidence/paint/steel-painted-worn_albedo.png", "url": "steel-painted-worn_albedo.png", "channel": "albedo", "source": "reference-pixel-extraction"}, "roughness": {"path": "/home/mulligan/code/thaikit/scratch/oil-drum/pbr-evidence/paint/steel-painted-worn_roughness.png", "url": "steel-painted-worn_roughness.png", "channel": "roughness", "source": "reference-pixel-extraction"}, "height": {"path": "/home/mulligan/code/thaikit/scratch/oil-drum/pbr-evidence/paint/steel-painted-worn_height.png", "url": "steel-painted-worn_height.png", "channel": "height", "source": "reference-pixel-extraction"}, "normal": {"path": "/home/mulligan/code/thaikit/scratch/oil-drum/pbr-evidence/paint/steel-painted-worn_normal.png", "url": "steel-painted-worn_normal.png", "channel": "normal", "source": "reference-pixel-extraction"}, "ao": {"path": "/home/mulligan/code/thaikit/scratch/oil-drum/pbr-evidence/paint/steel-painted-worn_ao.png", "url": "steel-painted-worn_ao.png", "channel": "ao", "source": "reference-pixel-extraction"}}, "extractedBy": "forge/stage1_intake/extract_pbr_evidence.py --target-threshold 0.7", "notes": "Confidence 0.751, above the 0.7 stop signal. The extractor warned that object/background separation is weak on this crop; that affects its height and roughness inference, which is why the roughness base is taken from the finish recipe instead."}},
    options
  );
  materialMap["steel-bare-oxidised"] = createSculptMaterial(
    "steel-bare-oxidised",
    {"id": "steel-bare-oxidised", "name": "Bare oxidised steel", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#605751", "color": "#605751", "albedo": {"dominant": "#605751", "secondary": ["#513F31", "#9C8271", "#1D1410"], "samplingNotes": "Measured DIRECTLY off the plate at the bung s own location (x 668-726, y 110-144): mean #605751, median luma 73. That settles a disagreement between two weaker readings. It was first authored #9C8271 -- the SECOND stop of extract_pbr_evidence s palette, taken as dominant by mistake, luma 134, which rendered the bung as a pale tan disc. Correcting to the first stop #513F31 (luma 66) was the right direction; the direct measurement then places the true value just above it. extract_pbr_evidence s bung report (confidence 0.86) remains the evidence for the metalness and roughness scalars."}, "colorVariation": {"palette": ["#9C8271", "#513F31", "#1D1410"], "pattern": "mottled", "amplitude": 0.25, "heightCorrelation": 0.0}, "roughness": {"base": 0.7, "variation": 0.08, "map": "generated-roughness-canvas: oxidation mottling around a 0.70 base", "notes": "Taken directly from the pixel-derived roughnessBase of 0.698. Trusted here, unlike on the enamel, because this crop has a valueRange of 0.81 and drew no low-contrast warning."}, "metalness": 0.35, "ambientOcclusion": {"source": "vertex-cavity", "strength": 0.3, "cavityBias": 0.5, "notes": "The cap is recessed inside the flange; that step is the only occlusion the part has."}, "wear": {"edgeWear": 0.3, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [], "shaderNotes": ["Solid albedo, no generated maps, by an explicit textureless declaration.", "A second MATERIAL rather than a region of the first because its metalness is 0.35 against the enamel s 0.0, and a scalar metalness cannot differ within one material without a metalnessMap."], "notes": "The second and last material. maxMaterials is 2. Declared textureless -- see textureless.evidence for the measurement and the VRAM this saves.", "textureless": {"declared": true, "evidence": ["The part is a 64 mm bung flange on a 580 mm drum. At the review framing it spans about 65 px of a 1024 px render, and in a level it is a handful of pixels -- below the scale at which any of its oxidation mottling is resolvable.", "extract_pbr_evidence.py on scratch/oil-drum/crops/mat-bung.png returned confidence 0.86 with a valueRange of 0.8079, and that evidence is kept in scratch/oil-drum/pbr-bung-report.json. It is used to set the SOLID albedo #9C8271, metalness 0.35 and roughness 0.70 -- scalars, not maps.", "Measured cost of not declaring this: render-model.mjs reported 8 textures and 44.7 MB of gpuBytesEstimate, against 4 textures and 22.4 MB with the shell alone. The generator was building a second full 1024 square canvas set -- albedo, roughness, normal, AO -- for a part that shows no texture. That is 22 MB of VRAM per level, for nothing a viewer can see."], "identityCarriedBy": "silhouette and proportion: a raised annulus with a recessed cap, and the flat colour step between the two."}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_drum_shell_0 = makeAttachmentEndpoint(null);
  const node_drum_shell_0 = new THREE.Group();
  node_drum_shell_0.name = "Drum shell__pivot";
  node_drum_shell_0.scale.set(1, 1, 1);
  if (endpoint_drum_shell_0) {
    node_drum_shell_0.position.copy(endpoint_drum_shell_0.start);
    node_drum_shell_0.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_drum_shell_0.position.set(0.0, 0.0, 0.0);
    node_drum_shell_0.rotation.set(0.0, 0.0, 0.0);
  }
  node_drum_shell_0.userData.sculptComponent = {"id": "drum-shell", "name": "Drum shell", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.93, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Every feature except the bung lies on ONE profile swept 360 degrees: base curl, three body panels, two rolling hoops, top curl and head plate. Splitting them into components would cost a draw call each, for the life of the prop, to express parts that are continuous with the same sheet of steel.", "geometryDescriptor": {"topologyIntent": "surface of revolution; one closed lathe, capped at both ends", "latheProfile": {"points": [[0.0001, 0.02209], [0.26, 0.02117], [0.275, 0.0], [0.287, 0.01105], [0.278, 0.02669], [0.278, 0.23011], [0.284, 0.24852], [0.29, 0.26564], [0.284, 0.28276], [0.278, 0.30117], [0.278, 0.50478], [0.284, 0.52319], [0.29, 0.54031], [0.284, 0.55743], [0.278, 0.57584], [0.278, 0.78331], [0.287, 0.79895], [0.275, 0.81], [0.26, 0.80172], [0.0001, 0.79988]], "segments": 44, "heightScaleNote": "Y scaled by 0.92045 (0.88 m -> 0.81 m) to the plate s own proportions. Radii are unchanged: they are independent measurements the plate and the Meshy proxy agree on."}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "44 radial segments at the 0.29 m hoop radius gives 0.74 mm of chord error. On a 1024 px review render where the drum spans 590 px that is 0.75 px -- sub-pixel, so the silhouette cost is not resolvable. Chosen to the budget UP FRONT rather than decimated afterwards, which keeps the measured profile points exact instead of letting a quadric collapse move them."}, "parent": null, "attachment": null, "dimensions": {"width": 0.58, "height": 0.81, "depth": 0.58, "units": "meters", "confidence": 0.93}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "root", "notes": "base-center, as the asset declares. The prop is sealed and moves as one rigid body, so this is the ONLY pivot it has."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0.405, 0], "scale": [0.287, 0.405, 0.287], "isTrigger": false, "notes": "Declared cylinder on the asset. Radius is the CHIME radius, not the body radius: the chimes are what a physics query first touches."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "", "notes": "Not breakable, by explicit decision on the asset. The registry declares an EMPTY destructionGroups list and promotion checks built against declared as an equality, so a single invented group fails."}}, "material": "steel-painted-worn", "materialLayers": ["steel-painted-worn"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "rolling-hoop-lower", "kind": "contour", "confidence": 0.95, "placement": {"y": 0.26564, "crownRadius": 0.29, "proudOfBody": 0.012}, "notes": "Convex outward bead. Realised as profile points 6-9."}, {"id": "rolling-hoop-upper", "kind": "contour", "confidence": 0.95, "placement": {"y": 0.54031, "crownRadius": 0.29, "proudOfBody": 0.012}, "notes": "The two hoops divide the body into panels of 0.326 / 0.338 / 0.336 -- equal thirds."}, {"id": "chime-curl-base", "kind": "contour", "confidence": 0.92, "placement": {"y": 0.0, "outerRadius": 0.287, "curlRadius": 0.012}, "notes": "GROUND CONTACT. Profile point 3 sits at y = 0; the body panel never touches the floor."}, {"id": "chime-curl-top", "kind": "contour", "confidence": 0.9, "placement": {"y": 0.81, "outerRadius": 0.287, "curlRadius": 0.012}, "notes": "Highest point of the model. The head plate is RECESSED 9 mm below the curl crown."}, {"id": "head-plate-dish", "kind": "contour", "confidence": 0.7, "placement": {"rimY": 0.80172, "centreY": 0.79988, "dish": 0.002}, "notes": "Read as flat with a slight dish; low confidence and low consequence at a 12 degree camera."}, {"id": "base-plate-dish", "kind": "contour", "confidence": 0.6, "placement": {"rimY": 0.02117, "centreY": 0.02209, "dish": 0.001}, "notes": "Present so the shell is a CLOSED solid. Never seen."}], "surfaceDetail": {"macroRoughness": 0.12, "microRoughness": 0.35, "bumpAmplitude": 0.35, "normalPattern": "fine rolled-steel grain with oxidation pitting concentrated at both chimes", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "paint worn through to bare metal along both hoop crowns", "notes": "Carried by the runtime canvas maps, not by geometry."}, "evidenceRefs": ["full-object", "silhouette-profile", "reference-mesh-bands", "crop-base-chime", "crop-hoop", "crop-paint", "crop-rust"], "details": [], "fidelityTier": "final", "colorMaterialRecipe": {"baseColor": {"hex": "#326C84", "evidenceRef": "crop-paint", "notes": "Enamel mid-tone as BUILT by the wear painter."}, "regions": [{"id": "enamel-panels", "hex": "#326C84", "coverage": 0.6, "evidenceRef": "crop-paint"}, {"id": "oxidised-chimes", "hex": "#9F613B", "coverage": 0.25, "evidenceRef": "crop-rust"}, {"id": "worn-hoop-crowns", "hex": "#9FB0B8", "coverage": 0.15, "evidenceRef": "crop-hoop"}], "finishStyle": "satin enamel over rolled steel, oxidising from both rolled edges inward", "materialRef": "steel-painted-worn", "dominantAlbedo": "rgba(50, 108, 132, 1.0)", "secondaryAlbedo": "rgba(159, 97, 59, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.95, "colorGradient": {"type": "linear", "axis": "y", "stops": [{"position": 0.0, "color": "rgba(127, 63, 30, 1.0)", "note": "base chime crown, heaviest oxide"}, {"position": 0.08, "color": "rgba(50, 108, 132, 1.0)", "note": "lower panel, intact enamel"}, {"position": 0.33, "color": "rgba(159, 176, 184, 1.0)", "note": "lower hoop crown, worn to bare metal"}, {"position": 0.5, "color": "rgba(50, 108, 132, 1.0)", "note": "middle panel"}, {"position": 0.67, "color": "rgba(159, 176, 184, 1.0)", "note": "upper hoop crown"}, {"position": 0.92, "color": "rgba(50, 108, 132, 1.0)", "note": "upper panel"}, {"position": 1.0, "color": "rgba(159, 97, 59, 1.0)", "note": "top chime crown and head"}], "notes": "Measured stop positions, not a decorative ramp: they are the chime and hoop heights from silhouette-measurements.json. The oxide is top- and bottom-weighted because a rolled edge is where the coating thins."}, "consistencyNote": "These hexes track the wear painter, not the raw de-lit extraction. They were left at the de-lit #1B4A5C after the enamel range was lifted, and diagnose_render -- which scores the render s dominant clusters AGAINST this recipe -- reported a per-part delta-E of 20.28 against its 20.0 threshold. That gate was measuring the spec disagreeing with itself, not the model disagreeing with the plate."}};
  node_drum_shell_0.userData.actionProfile = {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "root", "notes": "base-center, as the asset declares. The prop is sealed and moves as one rigid body, so this is the ONLY pivot it has."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0.405, 0], "scale": [0.287, 0.405, 0.287], "isTrigger": false, "notes": "Declared cylinder on the asset. Radius is the CHIME radius, not the body radius: the chimes are what a physics query first touches."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "", "notes": "Not breakable, by explicit decision on the asset. The registry declares an EMPTY destructionGroups list and promotion checks built against declared as an equality, so a single invented group fails."}};
  (nodes["root"] ?? root).add(node_drum_shell_0);
  nodes["drum-shell"] = node_drum_shell_0;
  const mesh_drum_shell_0Geometry = endpoint_drum_shell_0
    ? new THREE.CylinderGeometry(endpoint_drum_shell_0.endRadius, endpoint_drum_shell_0.baseRadius, endpoint_drum_shell_0.length, 8, 4)
    : buildLatheGeometry({"points": [[0.0001, 0.02209], [0.26, 0.02117], [0.275, 0.0], [0.287, 0.01105], [0.278, 0.02669], [0.278, 0.23011], [0.284, 0.24852], [0.29, 0.26564], [0.284, 0.28276], [0.278, 0.30117], [0.278, 0.50478], [0.284, 0.52319], [0.29, 0.54031], [0.284, 0.55743], [0.278, 0.57584], [0.278, 0.78331], [0.287, 0.79895], [0.275, 0.81], [0.26, 0.80172], [0.0001, 0.79988]], "segments": 44, "heightScaleNote": "Y scaled by 0.92045 (0.88 m -> 0.81 m) to the plate s own proportions. Radii are unchanged: they are independent measurements the plate and the Meshy proxy agree on."});
  if (!endpoint_drum_shell_0) {
    mesh_drum_shell_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_drum_shell_0 = new THREE.Mesh(
    mesh_drum_shell_0Geometry,
    materialMap["steel-painted-worn"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_drum_shell_0.name = "Drum shell";
  if (endpoint_drum_shell_0) {
    mesh_drum_shell_0.position.copy(endpoint_drum_shell_0.midpoint);
    mesh_drum_shell_0.quaternion.copy(endpoint_drum_shell_0.quaternion);
  }
  mesh_drum_shell_0.castShadow = options.castShadow ?? true;
  mesh_drum_shell_0.receiveShadow = options.receiveShadow ?? true;
  mesh_drum_shell_0.userData.sculptComponent = {"id": "drum-shell", "name": "Drum shell", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.93, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Every feature except the bung lies on ONE profile swept 360 degrees: base curl, three body panels, two rolling hoops, top curl and head plate. Splitting them into components would cost a draw call each, for the life of the prop, to express parts that are continuous with the same sheet of steel.", "geometryDescriptor": {"topologyIntent": "surface of revolution; one closed lathe, capped at both ends", "latheProfile": {"points": [[0.0001, 0.02209], [0.26, 0.02117], [0.275, 0.0], [0.287, 0.01105], [0.278, 0.02669], [0.278, 0.23011], [0.284, 0.24852], [0.29, 0.26564], [0.284, 0.28276], [0.278, 0.30117], [0.278, 0.50478], [0.284, 0.52319], [0.29, 0.54031], [0.284, 0.55743], [0.278, 0.57584], [0.278, 0.78331], [0.287, 0.79895], [0.275, 0.81], [0.26, 0.80172], [0.0001, 0.79988]], "segments": 44, "heightScaleNote": "Y scaled by 0.92045 (0.88 m -> 0.81 m) to the plate s own proportions. Radii are unchanged: they are independent measurements the plate and the Meshy proxy agree on."}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "44 radial segments at the 0.29 m hoop radius gives 0.74 mm of chord error. On a 1024 px review render where the drum spans 590 px that is 0.75 px -- sub-pixel, so the silhouette cost is not resolvable. Chosen to the budget UP FRONT rather than decimated afterwards, which keeps the measured profile points exact instead of letting a quadric collapse move them."}, "parent": null, "attachment": null, "dimensions": {"width": 0.58, "height": 0.81, "depth": 0.58, "units": "meters", "confidence": 0.93}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "root", "notes": "base-center, as the asset declares. The prop is sealed and moves as one rigid body, so this is the ONLY pivot it has."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0.405, 0], "scale": [0.287, 0.405, 0.287], "isTrigger": false, "notes": "Declared cylinder on the asset. Radius is the CHIME radius, not the body radius: the chimes are what a physics query first touches."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "", "notes": "Not breakable, by explicit decision on the asset. The registry declares an EMPTY destructionGroups list and promotion checks built against declared as an equality, so a single invented group fails."}}, "material": "steel-painted-worn", "materialLayers": ["steel-painted-worn"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "rolling-hoop-lower", "kind": "contour", "confidence": 0.95, "placement": {"y": 0.26564, "crownRadius": 0.29, "proudOfBody": 0.012}, "notes": "Convex outward bead. Realised as profile points 6-9."}, {"id": "rolling-hoop-upper", "kind": "contour", "confidence": 0.95, "placement": {"y": 0.54031, "crownRadius": 0.29, "proudOfBody": 0.012}, "notes": "The two hoops divide the body into panels of 0.326 / 0.338 / 0.336 -- equal thirds."}, {"id": "chime-curl-base", "kind": "contour", "confidence": 0.92, "placement": {"y": 0.0, "outerRadius": 0.287, "curlRadius": 0.012}, "notes": "GROUND CONTACT. Profile point 3 sits at y = 0; the body panel never touches the floor."}, {"id": "chime-curl-top", "kind": "contour", "confidence": 0.9, "placement": {"y": 0.81, "outerRadius": 0.287, "curlRadius": 0.012}, "notes": "Highest point of the model. The head plate is RECESSED 9 mm below the curl crown."}, {"id": "head-plate-dish", "kind": "contour", "confidence": 0.7, "placement": {"rimY": 0.80172, "centreY": 0.79988, "dish": 0.002}, "notes": "Read as flat with a slight dish; low confidence and low consequence at a 12 degree camera."}, {"id": "base-plate-dish", "kind": "contour", "confidence": 0.6, "placement": {"rimY": 0.02117, "centreY": 0.02209, "dish": 0.001}, "notes": "Present so the shell is a CLOSED solid. Never seen."}], "surfaceDetail": {"macroRoughness": 0.12, "microRoughness": 0.35, "bumpAmplitude": 0.35, "normalPattern": "fine rolled-steel grain with oxidation pitting concentrated at both chimes", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "paint worn through to bare metal along both hoop crowns", "notes": "Carried by the runtime canvas maps, not by geometry."}, "evidenceRefs": ["full-object", "silhouette-profile", "reference-mesh-bands", "crop-base-chime", "crop-hoop", "crop-paint", "crop-rust"], "details": [], "fidelityTier": "final", "colorMaterialRecipe": {"baseColor": {"hex": "#326C84", "evidenceRef": "crop-paint", "notes": "Enamel mid-tone as BUILT by the wear painter."}, "regions": [{"id": "enamel-panels", "hex": "#326C84", "coverage": 0.6, "evidenceRef": "crop-paint"}, {"id": "oxidised-chimes", "hex": "#9F613B", "coverage": 0.25, "evidenceRef": "crop-rust"}, {"id": "worn-hoop-crowns", "hex": "#9FB0B8", "coverage": 0.15, "evidenceRef": "crop-hoop"}], "finishStyle": "satin enamel over rolled steel, oxidising from both rolled edges inward", "materialRef": "steel-painted-worn", "dominantAlbedo": "rgba(50, 108, 132, 1.0)", "secondaryAlbedo": "rgba(159, 97, 59, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.95, "colorGradient": {"type": "linear", "axis": "y", "stops": [{"position": 0.0, "color": "rgba(127, 63, 30, 1.0)", "note": "base chime crown, heaviest oxide"}, {"position": 0.08, "color": "rgba(50, 108, 132, 1.0)", "note": "lower panel, intact enamel"}, {"position": 0.33, "color": "rgba(159, 176, 184, 1.0)", "note": "lower hoop crown, worn to bare metal"}, {"position": 0.5, "color": "rgba(50, 108, 132, 1.0)", "note": "middle panel"}, {"position": 0.67, "color": "rgba(159, 176, 184, 1.0)", "note": "upper hoop crown"}, {"position": 0.92, "color": "rgba(50, 108, 132, 1.0)", "note": "upper panel"}, {"position": 1.0, "color": "rgba(159, 97, 59, 1.0)", "note": "top chime crown and head"}], "notes": "Measured stop positions, not a decorative ramp: they are the chime and hoop heights from silhouette-measurements.json. The oxide is top- and bottom-weighted because a rolled edge is where the coating thins."}, "consistencyNote": "These hexes track the wear painter, not the raw de-lit extraction. They were left at the de-lit #1B4A5C after the enamel range was lifted, and diagnose_render -- which scores the render s dominant clusters AGAINST this recipe -- reported a per-part delta-E of 20.28 against its 20.0 threshold. That gate was measuring the spec disagreeing with itself, not the model disagreeing with the plate."}};
  node_drum_shell_0.add(mesh_drum_shell_0);
  meshes["drum-shell"] = mesh_drum_shell_0;
  colliders["drum-shell"] = {"type": "cylinder", "offset": [0, 0.405, 0], "scale": [0.287, 0.405, 0.287], "isTrigger": false, "notes": "Declared cylinder on the asset. Radius is the CHIME radius, not the body radius: the chimes are what a physics query first touches."};

  const endpoint_head_bung_1 = makeAttachmentEndpoint(null);
  const node_head_bung_1 = new THREE.Group();
  node_head_bung_1.name = "Head bung__pivot";
  node_head_bung_1.scale.set(1, 1, 1);
  if (endpoint_head_bung_1) {
    node_head_bung_1.position.copy(endpoint_head_bung_1.start);
    node_head_bung_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_head_bung_1.position.set(0.1816, 0.80034, 0.0353);
    node_head_bung_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_head_bung_1.userData.sculptComponent = {"id": "head-bung", "name": "Head bung", "level": "micro", "role": "hardware", "importance": 0.55, "confidence": 0.8, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "A raised annular flange with a recessed cap -- itself a small surface of revolution, about its own axis rather than the drum s.", "geometryDescriptor": {"topologyIntent": "small surface of revolution: raised flange with a recessed cap", "latheProfile": {"points": [[0.0001, 0.0], [0.032, 0.0], [0.032, 0.0055], [0.029, 0.01], [0.0215, 0.007], [0.018, 0.002], [0.0001, 0.002]], "segments": 16, "profileNote": "Flange raised from 7.5 mm to 10 mm proud and the cap recess deepened from 4 mm to 8 mm. At the first form render the bung read as a 7 px crescent -- geometrically the right size, but too shallow to separate from the head plate. The plate crop shows a chunky raised collar around a clearly sunken cap. Same six points, so the triangle cost is unchanged.", "closureNote": "Closed AND wound in the same direction as the drum shell: axis at the base, out along the underside, up the outside, over the flange, back in to the axis. Two separate defects were found here. First the profile ended at (0.032, 0) and never returned to the axis, leaving an OPEN shell with no underside -- 23 of 102 vertices read as interior, because a ray-parity test on a surface with a hole is undefined rather than inaccurate. Closing it by appending (0.0001, 0) made it WORSE, 97 of 119: appending ran the profile top-to-bottom overall, which reverses LatheGeometry s winding and turns the part inside out. Re-tracing in the shell s direction fixes both. Neither showed up in the beauty render, because a 64 mm part rendered inside-out at 7 px still looks like a small dark ring."}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "16 segments on a 32 mm radius is 0.19 mm of chord error. The part is 64 mm across on a 580 mm drum -- it spans about 65 px of a 1024 px review render, so more segments buy nothing measurable."}, "parent": "drum-shell", "attachment": {"parentSocket": null, "contactType": "embed", "confidence": 0.8, "notes": "Flange base is flush on the head plate; the cap is recessed inside it."}, "dimensions": {"width": 0.064, "height": 0.01, "depth": 0.064, "units": "meters", "confidence": 0.8}, "transform": {"position": [0.1816, 0.80034, 0.0353], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "NOT a mechanism. This bung does not unscrew: the prop is sealed by explicit decision, and a named pivot is a promise a game can turn it."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": ""}}, "material": "steel-bare-oxidised", "materialLayers": ["steel-bare-oxidised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "bung-flange", "kind": "fastener-cluster", "confidence": 0.85, "placement": {"outerDiameter": 0.064, "radiusFromAxis": 0.185, "azimuthDeg": 79.0}, "notes": "The ONLY break in the drum s radial symmetry."}], "surfaceDetail": {"macroRoughness": 0.1, "microRoughness": 0.5, "bumpAmplitude": 0.2, "normalPattern": "oxidation pitting", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "bare steel throughout -- no paint ever covered it", "notes": ""}, "evidenceRefs": ["crop-bung"], "details": [], "fidelityTier": "final", "colorMaterialRecipe": {"baseColor": {"hex": "#605751", "evidenceRef": "crop-bung", "notes": "Oxidised bare steel; never painted."}, "regions": [{"id": "flange", "hex": "#605751", "coverage": 0.7, "evidenceRef": "crop-bung"}, {"id": "recessed-cap", "hex": "#1D1410", "coverage": 0.3, "evidenceRef": "crop-bung"}], "finishStyle": "matte oxide over steel", "materialRef": "steel-bare-oxidised", "dominantAlbedo": "rgba(96, 87, 81, 1.0)", "secondaryAlbedo": "rgba(81, 63, 49, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.9}, "levelRationale": "Reclassified macro -> micro. It is 64 mm on an 880 mm drum: a feature-scale part, not an assembly. It is a separate COMPONENT only because it breaks the radial symmetry the shell lathe depends on, which is a geometry constraint rather than a claim about its importance. Draw calls are counted per componentTree entry and are unaffected."};
  node_head_bung_1.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "NOT a mechanism. This bung does not unscrew: the prop is sealed by explicit decision, and a named pivot is a promise a game can turn it."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": ""}};
  (nodes["drum-shell"] ?? root).add(node_head_bung_1);
  nodes["head-bung"] = node_head_bung_1;
  const mesh_head_bung_1Geometry = endpoint_head_bung_1
    ? new THREE.CylinderGeometry(endpoint_head_bung_1.endRadius, endpoint_head_bung_1.baseRadius, endpoint_head_bung_1.length, 8, 4)
    : buildLatheGeometry({"points": [[0.0001, 0.0], [0.032, 0.0], [0.032, 0.0055], [0.029, 0.01], [0.0215, 0.007], [0.018, 0.002], [0.0001, 0.002]], "segments": 16, "profileNote": "Flange raised from 7.5 mm to 10 mm proud and the cap recess deepened from 4 mm to 8 mm. At the first form render the bung read as a 7 px crescent -- geometrically the right size, but too shallow to separate from the head plate. The plate crop shows a chunky raised collar around a clearly sunken cap. Same six points, so the triangle cost is unchanged.", "closureNote": "Closed AND wound in the same direction as the drum shell: axis at the base, out along the underside, up the outside, over the flange, back in to the axis. Two separate defects were found here. First the profile ended at (0.032, 0) and never returned to the axis, leaving an OPEN shell with no underside -- 23 of 102 vertices read as interior, because a ray-parity test on a surface with a hole is undefined rather than inaccurate. Closing it by appending (0.0001, 0) made it WORSE, 97 of 119: appending ran the profile top-to-bottom overall, which reverses LatheGeometry s winding and turns the part inside out. Re-tracing in the shell s direction fixes both. Neither showed up in the beauty render, because a 64 mm part rendered inside-out at 7 px still looks like a small dark ring."});
  if (!endpoint_head_bung_1) {
    mesh_head_bung_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_head_bung_1 = new THREE.Mesh(
    mesh_head_bung_1Geometry,
    materialMap["steel-bare-oxidised"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_head_bung_1.name = "Head bung";
  if (endpoint_head_bung_1) {
    mesh_head_bung_1.position.copy(endpoint_head_bung_1.midpoint);
    mesh_head_bung_1.quaternion.copy(endpoint_head_bung_1.quaternion);
  }
  mesh_head_bung_1.castShadow = options.castShadow ?? true;
  mesh_head_bung_1.receiveShadow = options.receiveShadow ?? true;
  mesh_head_bung_1.userData.sculptComponent = {"id": "head-bung", "name": "Head bung", "level": "micro", "role": "hardware", "importance": 0.55, "confidence": 0.8, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "A raised annular flange with a recessed cap -- itself a small surface of revolution, about its own axis rather than the drum s.", "geometryDescriptor": {"topologyIntent": "small surface of revolution: raised flange with a recessed cap", "latheProfile": {"points": [[0.0001, 0.0], [0.032, 0.0], [0.032, 0.0055], [0.029, 0.01], [0.0215, 0.007], [0.018, 0.002], [0.0001, 0.002]], "segments": 16, "profileNote": "Flange raised from 7.5 mm to 10 mm proud and the cap recess deepened from 4 mm to 8 mm. At the first form render the bung read as a 7 px crescent -- geometrically the right size, but too shallow to separate from the head plate. The plate crop shows a chunky raised collar around a clearly sunken cap. Same six points, so the triangle cost is unchanged.", "closureNote": "Closed AND wound in the same direction as the drum shell: axis at the base, out along the underside, up the outside, over the flange, back in to the axis. Two separate defects were found here. First the profile ended at (0.032, 0) and never returned to the axis, leaving an OPEN shell with no underside -- 23 of 102 vertices read as interior, because a ray-parity test on a surface with a hole is undefined rather than inaccurate. Closing it by appending (0.0001, 0) made it WORSE, 97 of 119: appending ran the profile top-to-bottom overall, which reverses LatheGeometry s winding and turns the part inside out. Re-tracing in the shell s direction fixes both. Neither showed up in the beauty render, because a 64 mm part rendered inside-out at 7 px still looks like a small dark ring."}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "16 segments on a 32 mm radius is 0.19 mm of chord error. The part is 64 mm across on a 580 mm drum -- it spans about 65 px of a 1024 px review render, so more segments buy nothing measurable."}, "parent": "drum-shell", "attachment": {"parentSocket": null, "contactType": "embed", "confidence": 0.8, "notes": "Flange base is flush on the head plate; the cap is recessed inside it."}, "dimensions": {"width": 0.064, "height": 0.01, "depth": 0.064, "units": "meters", "confidence": 0.8}, "transform": {"position": [0.1816, 0.80034, 0.0353], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "NOT a mechanism. This bung does not unscrew: the prop is sealed by explicit decision, and a named pivot is a promise a game can turn it."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": ""}}, "material": "steel-bare-oxidised", "materialLayers": ["steel-bare-oxidised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "bung-flange", "kind": "fastener-cluster", "confidence": 0.85, "placement": {"outerDiameter": 0.064, "radiusFromAxis": 0.185, "azimuthDeg": 79.0}, "notes": "The ONLY break in the drum s radial symmetry."}], "surfaceDetail": {"macroRoughness": 0.1, "microRoughness": 0.5, "bumpAmplitude": 0.2, "normalPattern": "oxidation pitting", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "bare steel throughout -- no paint ever covered it", "notes": ""}, "evidenceRefs": ["crop-bung"], "details": [], "fidelityTier": "final", "colorMaterialRecipe": {"baseColor": {"hex": "#605751", "evidenceRef": "crop-bung", "notes": "Oxidised bare steel; never painted."}, "regions": [{"id": "flange", "hex": "#605751", "coverage": 0.7, "evidenceRef": "crop-bung"}, {"id": "recessed-cap", "hex": "#1D1410", "coverage": 0.3, "evidenceRef": "crop-bung"}], "finishStyle": "matte oxide over steel", "materialRef": "steel-bare-oxidised", "dominantAlbedo": "rgba(96, 87, 81, 1.0)", "secondaryAlbedo": "rgba(81, 63, 49, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.9}, "levelRationale": "Reclassified macro -> micro. It is 64 mm on an 880 mm drum: a feature-scale part, not an assembly. It is a separate COMPONENT only because it breaks the radial symmetry the shell lathe depends on, which is a geometry constraint rather than a claim about its importance. Draw calls are counted per componentTree entry and are unaffected."};
  node_head_bung_1.add(mesh_head_bung_1);
  meshes["head-bung"] = mesh_head_bung_1;
  colliders["head-bung"] = {};

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createOilDrumLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Oil Drum look-dev lights";
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
  lights.userData.lightingFromPhoto = [{"id": "key", "type": "directional", "direction": [-0.35, 0.85, 0.4], "intensity": 1.15, "color": "#FFFFFF", "confidence": 0.8, "evidence": "The broad vertical specular band sits left of centre on each panel and the top chime crown is the brightest region in the plate, so the key is high and slightly to the camera-left."}, {"id": "fill", "type": "directional", "direction": [0.7, 0.25, 0.3], "intensity": 0.45, "color": "#E8EEF2", "confidence": 0.75, "evidence": "The camera-right side of the drum never goes to black -- its darkest panel value is still well above the shadow floor -- which is a soft fill, not bounce."}, {"id": "ambient", "type": "hemisphere", "skyColor": "#F4F4F4", "groundColor": "#B8B4AE", "intensity": 0.55, "confidence": 0.85, "evidence": "The plate is a lightbox: prepare-image measured the backdrop at 243.6 mean luma with a 2.5 stdev, and there is no cast shadow anywhere in frame."}, {"id": "rim", "type": "none", "intensity": 0.0, "confidence": 0.9, "evidence": "Deliberately absent. The plate has no rim separation -- the silhouette is defined by the backdrop being brighter than the object, not by a back light."}, {"id": "render-intent", "type": "grading", "toneMapping": "ACESFilmic", "exposure": 1.0, "outputColorSpace": "srgb", "confidence": 0.8, "evidence": "The plate is a lightbox with no clipped highlights outside the top chime crown, so exposure sits at 1.0 and ACES filmic keeps that crown from blowing out in the render the way a linear curve would.", "contactShadow": "none -- there is no ground shadow in the plate and prepare-image.mjs rejects a contact shadow outright, because it bakes into the albedo as a permanent dark smear. The prop carries its own ambient occlusion instead: the AO response darkens the two hoop roots and both chime recesses, which is occlusion the geometry actually causes rather than a floor it is standing on.", "groundShadow": "left to the host scene; a level builder lights its own floor."}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  return lights;
}

// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameOilDrumCamera(
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

// >>> thaikit-adapter appended below; regenerated on every run

// ---------------------------------------------------------------------------
// Wear painter -- the refine-code layer generate_threejs_factory.py cannot emit.
//
// The sculpt spec's material.localOverrides carry MEASURED placements: rust heaviest at
// both chime crowns, gravity-directed streaks falling from the top chime and each rolling
// hoop, paint worn to bare metal along the hoop crowns. The generator passes those through
// as data and never reads them. This is where they become pixels.
//
// UV LAYOUT. THREE.LatheGeometry sets u = segment/segments around the circumference and
// v = profileIndex/(points-1) along the profile -- linear in INDEX, not in arc length or
// height. For this drum's 20-point profile that puts the landmarks at fixed v:
//
//     v 0.000-0.053  base plate            (never visible on a floor prop)
//     v 0.053-0.211  BASE CHIME curl       heaviest oxide; ground contact at v 0.105
//     v 0.211-0.316  lower panel
//     v 0.316-0.421  lower rolling hoop    crown at v 0.368, worn to bare metal
//     v 0.421-0.579  middle panel
//     v 0.579-0.684  upper rolling hoop    crown at v 0.632
//     v 0.684-0.842  upper panel
//     v 0.842-0.895  TOP CHIME curl        heaviest oxide
//     v 0.895-1.000  head plate
//
// The curls occupy 5% of v each for a few millimetres of height, which is the right way
// round: texel density follows detail, not extent.
//
// TWO THINGS THIS FIXES that the generator's procedural set got wrong:
//
//  1. The PINWHEEL. Both end plates converge to r = 0.0001, so every texel column in the
//     cap's v band is squeezed onto one point. Any u-frequency content there smears into
//     radial rays -- the head plate rendered as a spoked fan. So u-variation is faded out
//     as v approaches either axis, leaving a clean radial gradient, which is exactly what
//     the geometry can represent.
//  2. The DISTRIBUTION. The generic mottler spreads the palette evenly, so oxide appeared
//     over the whole shell. Here it is placed where it was measured.
//
// Wear is SEEDED, never mirrored: a mirrored pattern reads as bilateral symmetry the moment
// the prop is orbited, which is the defect the turntable gate exists to catch. Seeds are
// fixed constants so two builds of the same spec produce the same prop.
// ---------------------------------------------------------------------------

type WearMaps = {
  map: THREE.CanvasTexture;
  roughnessMap: THREE.CanvasTexture;
  aoMap: THREE.CanvasTexture;
  normalMap: THREE.CanvasTexture;
};

const DRUM_WEAR_SEED = 0x5eed1952;

function drumRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Value noise on a lattice that WRAPS in u, so the seam at u = 0 is invisible. */
function makeWrapNoise(cols: number, rows: number, seed: number) {
  const rnd = drumRng(seed);
  const g: number[] = [];
  for (let i = 0; i < cols * rows; i += 1) g.push(rnd());
  const at = (x: number, y: number) => g[((y + rows) % rows) * cols + ((x + cols) % cols)];
  const fade = (t: number) => t * t * (3 - 2 * t);
  return (u: number, v: number) => {
    const x = u * cols, y = v * rows;
    const x0 = Math.floor(x), y0 = Math.floor(y);
    const fx = fade(x - x0), fy = fade(y - y0);
    const a = at(x0, y0), b = at(x0 + 1, y0), c = at(x0, y0 + 1), d = at(x0 + 1, y0 + 1);
    return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy;
  };
}

function fbm(fns: Array<(u: number, v: number) => number>, u: number, v: number): number {
  let sum = 0, amp = 1, norm = 0;
  for (const f of fns) { sum += f(u, v) * amp; norm += amp; amp *= 0.5; }
  return sum / norm;
}

const mixCh = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01v = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
/** 1 inside [a,b], falling to 0 over `soft` on each side. */
function band(v: number, a: number, b: number, soft: number): number {
  if (v < a - soft || v > b + soft) return 0;
  if (v < a) return clamp01v((v - (a - soft)) / soft);
  if (v > b) return clamp01v((b + soft - v) / soft);
  return 1;
}

/**
 * v -> height, in metres.
 *
 * LatheGeometry's v is linear in profile INDEX, and this profile's three long body panels
 * are ONE segment each. Measured: a panel segment buys 3.9 m of drum per unit of v, while a
 * chime curl buys 0.21 m and the head plate 0.035 m -- a 20x distortion. Placing wear by v
 * therefore places it nowhere in particular: a 0.03 soft edge on the base-chime band spilled
 * 144 mm of oxide up the lower panel, which rendered as an orange skirt halfway up a drum
 * whose plate shows rust confined to the chime.
 *
 * So everything physical -- oxide bands, streak sources, streak lengths -- is placed in
 * METRES and converted here. Only the two features that are genuinely profile landmarks
 * rather than heights (the hoop crowns, the head plate's radial gradient) stay in v.
 */
const DRUM_PROFILE_Y: number[] = [
  0.0221, 0.0212, 0.0000, 0.0111, 0.0267, 0.2301, 0.2485, 0.2656, 0.2828, 0.3012,
  0.5048, 0.5232, 0.5403, 0.5574, 0.5758, 0.7833, 0.7990, 0.8100, 0.8017, 0.7999,
];

function vToY(v: number): number {
  const n = DRUM_PROFILE_Y.length - 1;
  const t = clamp01v(v) * n;
  const i = Math.min(n - 1, Math.floor(t));
  return DRUM_PROFILE_Y[i] + (DRUM_PROFILE_Y[i + 1] - DRUM_PROFILE_Y[i]) * (t - i);
}

/** `band`, but its bounds and softness are METRES of drum height. */
function bandY(y: number, a: number, b: number, softM: number): number {
  return band(y, a, b, softM);
}

/** Gravity-directed streaks. Each falls DOWNWARD in v from a source band and widens. */
type Streak = { u: number; fromY: number; lenY: number; w: number; strength: number };
function makeStreaks(): Streak[] {
  const rnd = drumRng(DRUM_WEAR_SEED ^ 0x51ea4);
  const out: Streak[] = [];
  // Sources are the three places oxide actually starts on the plate: the top chime and the
  // two hoop crowns. Heights and lengths are METRES. Counts are weighted top-heavy, which is
  // what the plate shows -- most of the streaking falls from the top chime.
  const sources: Array<[number, number, number, number]> = [
    // [source height, count, min length m, max length m]
    [0.7930, 22, 0.10, 0.42],
    [0.5353, 10, 0.05, 0.20],
    [0.2606, 8, 0.04, 0.16],
  ];
  for (const [fromY, count, lo, hi] of sources) {
    for (let i = 0; i < count; i += 1) {
      out.push({
        u: rnd(),
        fromY,
        lenY: lo + rnd() * (hi - lo),
        w: 0.004 + rnd() * 0.012,
        strength: 0.35 + rnd() * 0.65,
      });
    }
  }
  return out;
}

function streakAmount(streaks: Streak[], u: number, y: number): number {
  let acc = 0;
  for (const s of streaks) {
    const drop = s.fromY - y;                      // downward only, in metres
    if (drop < 0 || drop > s.lenY) continue;
    const t = drop / s.lenY;
    const width = s.w * (1 + t * 1.8);             // widens as it falls
    // Wrap in u: compare against the nearest periodic image.
    let du = Math.abs(u - s.u);
    if (du > 0.5) du = 1 - du;
    if (du > width) continue;
    const across = 1 - du / width;
    const along = (1 - t) * (t < 0.06 ? t / 0.06 : 1);   // fades in at the source, out at the tip
    acc += s.strength * across * across * along;
  }
  return clamp01v(acc);
}

function paintDrumWear(size: number): WearMaps | null {
  if (typeof document === 'undefined') return null;

  const mk = () => {
    const c = document.createElement('canvas');
    c.width = size; c.height = size;
    return { c, d: c.getContext('2d')!.createImageData(size, size) };
  };
  const alb = mk(), rgh = mk(), ao = mk(), hgt = mk();

  const oxide = [makeWrapNoise(12, 12, DRUM_WEAR_SEED), makeWrapNoise(28, 28, DRUM_WEAR_SEED ^ 7), makeWrapNoise(64, 64, DRUM_WEAR_SEED ^ 13)];
  const mottle = [makeWrapNoise(5, 5, DRUM_WEAR_SEED ^ 0x9e), makeWrapNoise(14, 14, DRUM_WEAR_SEED ^ 0x3f)];
  const grain = [makeWrapNoise(160, 160, DRUM_WEAR_SEED ^ 0xa5)];
  const streaks = makeStreaks();

  // Measured colours: de-lit enamel palette and oxide palette from extract_pbr_evidence.py.
  // ENAMEL RANGE, and why it is brighter than the de-lit extraction.
  //
  // extract_pbr_evidence.py returned a de-lit palette whose stops run #07374A..#3B6473, and it
  // warned on that crop that "object/background separation is weak" and "low value range
  // weakens height/roughness inference". Authored straight, those stops rendered the drum at a
  // median luma of 62 facing the key and 48 facing away -- against a review backdrop of 58.
  // The plate's own body row measures median 67, p95 105, max 142.
  //
  // Two things are going on and only one of them is the albedo's fault. The harness supplies
  // three directional lights and NO environment map, so a satin dielectric gets narrow
  // highlights instead of the broad specular bands the plate's lightbox produced -- which is
  // why the render's p95 is 71 against the plate's 105. That is not something albedo should be
  // asked to fix. But the drum also sat at or below the backdrop on the dim side, which broke
  // turntable_gate's segmentation into a false interior "hole" and would make the prop
  // invisible against a dark wall in a level.
  //
  // So the range is lifted to sit around the plate's MEASURED median rather than its de-lit
  // dark end. Every stop stays well inside the plate's own value range; none of the missing
  // specular range is faked into base colour.
  const ENAMEL: [number, number, number] = [0x32, 0x6c, 0x84];
  const ENAMEL_D: [number, number, number] = [0x24, 0x56, 0x6a];
  const ENAMEL_L: [number, number, number] = [0x4a, 0x80, 0x98];
  const RUST: [number, number, number] = [0x9f, 0x61, 0x3b];
  const RUST_D: [number, number, number] = [0x7f, 0x3f, 0x1e];
  const RUST_L: [number, number, number] = [0xc4, 0xaa, 0x95];
  const STEEL: [number, number, number] = [0x9f, 0xb0, 0xb8];

  for (let py = 0; py < size; py += 1) {
    // Canvas row 0 is the TOP; a CanvasTexture is flipY, so v = 1 at row 0.
    const v = 1 - (py + 0.5) / size;
    // Fade u-variation out at BOTH axis convergences, or it smears into a pinwheel.
    const axisFade = clamp01v(Math.min(v - 0.02, 0.985 - v) / 0.045);

    for (let px = 0; px < size; px += 1) {
      const u = (px + 0.5) / size;
      const uf = axisFade;

      const n = fbm(oxide, u, v);
      const nm = fbm(mottle, u, v);
      const ng = fbm(grain, u, v);
      const y = vToY(v);
      const isHead = v >= 0.895;          // the head plate: a radial cap, placed by v

      // --- oxide amount -------------------------------------------------
      // Both chime curls carry near-continuous oxide, and it follows the CURL because a
      // rolled edge is where the coating thins. Placed in metres: the base oxide reaches
      // 28 mm up the drum with a 22 mm falloff, which is what the plate shows. The earlier
      // v-space version reached 144 mm and rendered as an orange skirt.
      let rust: number;
      if (isHead) {
        // Radial gradient across the head: oxidised at the rim it is seamed into, enamel at
        // the centre. u-variation is already faded out here, so this cannot pinwheel.
        const toCentre = clamp01v((v - 0.895) / 0.105);
        rust = clamp01v((0.80 - 0.62 * toCentre) * (0.6 + 0.4 * n));
      } else {
        const chimeBase = bandY(y, 0.0, 0.028, 0.022);
        const chimeTop = v > 0.78 ? bandY(y, 0.792, 0.812, 0.012) : 0;
        const chime = Math.max(chimeBase, chimeTop);
        rust = clamp01v(chime * (0.55 + 0.45 * n * uf));
        rust = clamp01v(rust + streakAmount(streaks, u, y) * 0.85 * uf);
        // Sparse blooms on the panels, so the flat areas are not sterile.
        rust = clamp01v(rust + Math.max(0, n - 0.74) * 2.2 * uf * bandY(y, 0.035, 0.780, 0.02));
      }

      // --- bare metal on the hoop crowns --------------------------------
      // The crowns are the proudest band, so the paint wears through there first. Kept well
      // short of solid: the first material render made them read as painted white stripes,
      // where the plate shows a pale blue-grey sheen with the enamel still showing through.
      const crown = isHead ? 0 : Math.max(
        bandY(y, 0.2606, 0.2706, 0.006),
        bandY(y, 0.5353, 0.5453, 0.006),
      );
      const bare = clamp01v(crown * (0.20 + 0.30 * nm * uf) * (1 - rust * 0.7));

      // --- albedo -------------------------------------------------------
      const enamelMix = clamp01v(nm * uf + (1 - uf) * 0.5);
      let r = mixCh(ENAMEL_D[0], ENAMEL_L[0], enamelMix);
      let g = mixCh(ENAMEL_D[1], ENAMEL_L[1], enamelMix);
      let b = mixCh(ENAMEL_D[2], ENAMEL_L[2], enamelMix);
      r = mixCh(r, ENAMEL[0], 0.35); g = mixCh(g, ENAMEL[1], 0.35); b = mixCh(b, ENAMEL[2], 0.35);

      const rustTone = clamp01v(n * uf + (1 - uf) * 0.5);
      const rr = rustTone < 0.5 ? mixCh(RUST_D[0], RUST[0], rustTone * 2) : mixCh(RUST[0], RUST_L[0], (rustTone - 0.5) * 2);
      const rg = rustTone < 0.5 ? mixCh(RUST_D[1], RUST[1], rustTone * 2) : mixCh(RUST[1], RUST_L[1], (rustTone - 0.5) * 2);
      const rb = rustTone < 0.5 ? mixCh(RUST_D[2], RUST[2], rustTone * 2) : mixCh(RUST[2], RUST_L[2], (rustTone - 0.5) * 2);

      r = mixCh(r, rr, rust); g = mixCh(g, rg, rust); b = mixCh(b, rb, rust);
      r = mixCh(r, STEEL[0], bare); g = mixCh(g, STEEL[1], bare); b = mixCh(b, STEEL[2], bare);

      const gr = (ng - 0.5) * 10 * uf;
      const i4 = (py * size + px) * 4;
      alb.d.data[i4] = clamp01v((r + gr) / 255) * 255;
      alb.d.data[i4 + 1] = clamp01v((g + gr) / 255) * 255;
      alb.d.data[i4 + 2] = clamp01v((b + gr) / 255) * 255;
      alb.d.data[i4 + 3] = 255;

      // --- roughness: 0.50 enamel, 0.88 oxide, 0.30 worn crown ----------
      let rough = 0.50 + (nm - 0.5) * 0.06 * uf;
      rough = mixCh(rough, 0.88, rust);
      rough = mixCh(rough, 0.30, bare);
      const rv = clamp01v(rough) * 255;
      rgh.d.data[i4] = rv; rgh.d.data[i4 + 1] = rv; rgh.d.data[i4 + 2] = rv; rgh.d.data[i4 + 3] = 255;

      // --- AO: the hoop roots and both chime recesses trap dirt ---------
      // Hoop roots and both chime recesses, in metres -- the places a rolled edge traps dirt.
      const roots = Math.max(
        bandY(y, 0.2455, 0.2530, 0.005), bandY(y, 0.2790, 0.2860, 0.005),
        bandY(y, 0.5200, 0.5275, 0.005), bandY(y, 0.5540, 0.5610, 0.005),
        bandY(y, 0.0245, 0.0300, 0.005), bandY(y, 0.7800, 0.7870, 0.005),
      );
      const av = clamp01v(1 - roots * 0.45 - rust * 0.12) * 255;
      ao.d.data[i4] = av; ao.d.data[i4 + 1] = av; ao.d.data[i4 + 2] = av; ao.d.data[i4 + 3] = 255;

      // --- height field feeding the normal map --------------------------
      const hv = clamp01v(0.5 + (ng - 0.5) * 0.5 * uf + rust * 0.28 * (n - 0.5)) * 255;
      hgt.d.data[i4] = hv; hgt.d.data[i4 + 1] = hv; hgt.d.data[i4 + 2] = hv; hgt.d.data[i4 + 3] = 255;
    }
  }

  // Sobel the height field into a tangent-space normal map. Independent of albedo, which is
  // what the spec's `normal.pattern: derived-from-independent-height-field` promises.
  const nrm = mk();
  const H = (x: number, y: number) => hgt.d.data[((((y % size) + size) % size) * size + (((x % size) + size) % size)) * 4] / 255;
  const STRENGTH = 0.35;
  for (let py = 0; py < size; py += 1) {
    for (let px = 0; px < size; px += 1) {
      const dx = (H(px + 1, py) - H(px - 1, py)) * STRENGTH * 6;
      const dy = (H(px, py + 1) - H(px, py - 1)) * STRENGTH * 6;
      const len = Math.hypot(-dx, -dy, 1);
      const i4 = (py * size + px) * 4;
      nrm.d.data[i4] = ((-dx / len) * 0.5 + 0.5) * 255;
      nrm.d.data[i4 + 1] = ((-dy / len) * 0.5 + 0.5) * 255;
      nrm.d.data[i4 + 2] = (1 / len) * 0.5 * 255 + 127.5;
      nrm.d.data[i4 + 3] = 255;
    }
  }

  const finish = (o: { c: HTMLCanvasElement; d: ImageData }, srgb: boolean) => {
    o.c.getContext('2d')!.putImageData(o.d, 0, 0);
    const t = new THREE.CanvasTexture(o.c);
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.ClampToEdgeWrapping;
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    t.needsUpdate = true;
    return t;
  };

  return {
    map: finish(alb, true),
    roughnessMap: finish(rgh, false),
    aoMap: finish(ao, false),
    normalMap: finish(nrm, false),
  };
}

/** Replace the drum shell's generated material maps with the measured wear set. */
function applyDrumWear(root: THREE.Group): void {
  const shell = root.getObjectByName('Drum shell') as THREE.Mesh | undefined;
  if (!shell) return;
  const wear = paintDrumWear(1024);
  if (!wear) return;                       // node: no canvas, geometry dumps still work

  const geom = shell.geometry as THREE.BufferGeometry;
  // aoMap samples uv2/uv1; the lathe only authors uv, so alias it rather than leaving AO
  // silently unsampled.
  if (geom.getAttribute('uv') && !geom.getAttribute('uv1')) {
    geom.setAttribute('uv1', geom.getAttribute('uv'));
  }

  const m = (shell.material as THREE.MeshPhysicalMaterial).clone();
  m.map = wear.map;
  m.roughnessMap = wear.roughnessMap;
  m.aoMap = wear.aoMap;
  m.aoMapIntensity = 0.45;                 // spec: ambientOcclusion.strength
  m.normalMap = wear.normalMap;
  m.normalScale = new THREE.Vector2(0.35, 0.35);
  m.color.setRGB(1, 1, 1);                 // the map carries albedo now
  m.roughness = 1;                         // and the roughnessMap carries roughness
  m.metalness = 0.0;                       // enamel is a dielectric coat
  m.needsUpdate = true;
  shell.material = m;
}

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it
 * with (spec, options); the generated factory is named for its target and takes options
 * alone. `spec` is accepted and attached for host-side inspection -- the reconstruction
 * data already lives in the module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(
  spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = createOilDrumModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  // Paint the measured wear onto the drum shell. The spec's localOverrides carry the
  // placements; generate_threejs_factory.py passes them through as data and never reads
  // them, so this is where they become pixels. Guarded on document: the same module is
  // evaluated in node for the geometry and part dumps, where there is no canvas.
  applyDrumWear(root);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // ONE pivot: the root, at base-center. This drum is sealed -- it has no moving parts and
    // nothing attaches to it -- so a second pivot would be a promise the prop cannot keep.
    // A previous attempt shipped eight pivots and ten sockets for a welded steel cylinder.
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);

    // Colliders are plain DATA, not Object3D, so they carry no .name of their own and would
    // stringify as [object Object] in any name-mapping consumer. Give each the id of the
    // component it owns -- and drop the empty ones: the generator writes a collider entry for
    // every component whether or not one was declared, and a nameless empty proxy in the
    // runtime list reads as a physics shape that exists and does nothing.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups: this prop declares NONE, and promotion checks built against
    // declared as an equality in both directions. Derived rather than assumed empty, so that
    // a component that somehow carried a fractureGroup would show up here and fail the gate
    // loudly instead of being quietly dropped at the boundary.
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
      // puppeteer bridge and its registry field is a number; a Record of Object3D is
      // circular and fails to serialise, which surfaces as the whole stats object arriving
      // undefined. The Record stays reachable under byId.
      nodes: Object.keys(nodes).length,
      pivots: [rootPivot],
      sockets: Object.values((rt.sockets ?? {}) as Record<string, THREE.Object3D>),
      colliders,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: rt.sockets ?? {} },
    };
  }
  return root;
}
