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

// Generated from ObjectSculptSpec target: Soi Name Sign
// Sculpt build pass: blockout
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createSoiNameSignModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Soi Name Sign";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["sheeting"] = createSculptMaterial(
    "sheeting",
    {"id": "sheeting", "name": "Painted folded-steel street-name plate", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#FFFFFF", "secondary": ["#2B4278", "#CED2D7", "#55678D"], "samplingNotes": "White on purpose. The albedo is delivered by the face atlas assigned after material construction, and any tint here would multiply into the printed graphic."}, "colorVariation": {"palette": ["#2B4278", "#CED2D7", "#55678D"], "pattern": "authored-regions", "amplitude": 0.0, "heightCorrelation": 0.0}, "roughness": {"base": 0.42, "variation": 0.06, "map": "none", "localResponse": "Calendered vinyl over aluminium: smooth, with no tight highlight anywhere on the plate."}, "metalness": {"base": 0.0, "variation": 0.0, "notes": "Dielectric. The vinyl is what is seen; the plate underneath never reaches the surface on the front cap."}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "Flat plate, no cavities."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "field-blue", "color": "#2B4278", "region": "the plate's blue ground, everywhere inside the border rule", "evidenceRef": "region-field", "notes": "Trimmed mean #2B4278 over the full 5400 px of (400,380,90,60). A DEEP navy, markedly darker and less cyan than the #3370AB of the motorcycle plate or the #4871A2 of the u-turn plate measured in the same session - Thai street-name plates use a different blue from the informatory signs, and pooling those measurements would have got all three wrong."}, {"id": "legend-white", "color": "#CED2D7", "region": "the border rule and both legend lines", "evidenceRef": "region-legend", "notes": "Trimmed mean of the 2694 bright px (luma>170) of (430,330,180,60), across the Thai line. A vertical scanline through the plate reads 206-213 on the white and 61-64 on the navy, so the boundary is hard and carries no relief."}, {"id": "edge-galv", "color": "#55678D", "region": "the folded edge return and the whole back cap", "evidenceRef": "region-edge", "notes": "Trimmed mean #55678D over 4680 px at (240,330,26,180), on the plate's left edge return. NOTE this is not a bare metal grey like the siblings': the return reads BLUE, because the plate is a folded pressing painted round its edge rather than a cut sheet showing bare galvanising. That is what the atlas ground texel carries, and assuming a grey return here would have put a metal band round a painted plate."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["Reference plate, navy field at (400,380,90,60): 5400 px trimming to #2B4278 with no resolvable relief. The variation across the crop is print and weathering, not a height field.", "Reference plate, painted edge return at (240,330,26,180): 4680 px trimming to #55678D - a painted folded return, not bare metal, so there is no mill grain to reproduce either.", "The identity of this surface is PRINTED, not textured. It arrives as a canvas atlas assigned after material construction, which the textureless declaration does not touch.", "Measured cost: five synthesised canvases at 1024 would cost roughly 1.9 s inside createObjectModel for this one material, for a surface whose height field is flat."]}},
    options
  );
  materialMap["galvanised"] = createSculptMaterial(
    "galvanised",
    {"id": "galvanised", "name": "Hot-dip galvanised steel, weathering to rust at the foot", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#777F81", "secondary": ["#644632"], "samplingNotes": "White base colour because the measured vertical ramp is delivered as VERTEX COLOURS, not a texture - a tint here would multiply into it."}, "colorVariation": {"palette": ["#777F81", "#644632"], "pattern": "mottled", "amplitude": 0.18, "heightCorrelation": 0.0}, "roughness": {"base": 0.62, "variation": 0.12, "map": "none", "localResponse": "Mill-finish galvanising scatters rather than reflecting a lobe; the rusted foot is rougher still."}, "metalness": {"base": 0.25, "variation": 0.0, "notes": "Held at 0.25, not the high value a zinc coating suggests by name. There is no environment map in the target harness, so a high metalness has nothing to reflect and renders near-black. The measured luma spread of the shaft is scatter, not a lobe."}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "Prismatic solid, no cavities."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "galv-spangle", "color": "#777F81", "region": "the tube above the splash line", "evidenceRef": "region-post", "notes": "Trimmed mean #777F81 over the 3945 NEUTRAL pixels (|R-B|<12) of (500,600,45,140). Filtering to neutral pixels matters: an unfiltered trim of a crop holding both coating and rust reports a grey-brown that is on neither surface."}, {"id": "foot-rust", "color": "#644632", "region": "the lowest 0.45 m of the tube", "evidenceRef": "region-foot", "notes": "Trimmed mean #644632 over the 2586 ORANGE-BIASED px (R-B>28) of (495,860,50,90). The most saturated rust of the eight signage props and the most extensive: 2586 of 4500 px in the foot crop pass the orange filter, against 584 of 4050 on the u-turn post. This tube is rusting properly, not just staining, and the ramp reaches further up in consequence."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["Reference plate, tube midsection at (500,600,45,140): 3945 NEUTRAL px (|R-B|<12) trimming to #777F81. Hot-dip spangle is a flat crystalline blotch, and the crop's spread is colour, not height.", "Reference plate, tube foot at (495,860,50,90): 2586 ORANGE-BIASED px (R-B>28) trimming to #644632 - a surface bloom on a smooth tube, not a pitted profile at prop distance.", "The spangle and the rust ramp arrive as VERTEX COLOURS over 12 height segments, so a synthesised five-canvas set would be discarded work.", "Measured cost: five canvases at 1024 for this material alone is roughly 1.9 s inside createObjectModel, on a support whose whole geometry is 312 triangles."]}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_sign_plate_0 = makeAttachmentEndpoint(null);
  const node_sign_plate_0 = new THREE.Group();
  node_sign_plate_0.name = "Street-name plate__pivot";
  node_sign_plate_0.scale.set(1, 1, 1);
  if (endpoint_sign_plate_0) {
    node_sign_plate_0.position.copy(endpoint_sign_plate_0.start);
    node_sign_plate_0.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_sign_plate_0.position.set(0.0, 2.09, 0.0275);
    node_sign_plate_0.rotation.set(0.0, 0.0, 0.0);
  }
  node_sign_plate_0.userData.sculptComponent = {"id": "sign-plate", "name": "Street-name plate", "level": "macro", "role": "panel", "importance": 1.0, "confidence": 0.85, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A flat rounded-corner plate with a folded edge return: two parallel planar caps joined by a short wall, closed and rigid. Not an open-shell, because the plate has real thickness and is sealed.", "geometryDescriptor": {"topologyIntent": "ExtrudeGeometry over a rounded-rectangle profile, 0.75 x 0.22, corner radius 0.012, depth 0.035.", "profile2D": {"kind": "rounded-rect", "halfWidth": 0.375, "halfHeight": 0.11, "cornerRadius": 0.012, "cornerSegments": 4, "depth": 0.035, "points": [[0.363, -0.11], [0.36759, -0.10909], [0.37149, -0.10649], [0.37409, -0.10259], [0.375, -0.098], [0.375, 0.098], [0.37409, 0.10259], [0.37149, 0.10649], [0.36759, 0.10909], [0.363, 0.11], [-0.363, 0.11], [-0.36759, 0.10909], [-0.37149, 0.10649], [-0.37409, 0.10259], [-0.375, 0.098], [-0.375, -0.098], [-0.37409, -0.10259], [-0.37149, -0.10649], [-0.36759, -0.10909], [-0.363, -0.11]], "note": "The explicit polygon the layer builds, written out so the spec documents the geometry rather than gesturing at it. 20 points: four 4-segment corner arcs joined by four straight runs. The extrusion is bevelEnabled:false - THREE.ExtrudeGeometry rounds every corner by default, which would round the authored radius a second time."}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - rewritten after generation into a two-region atlas: front-cap vertices take the printed graphic region, every wall and back-cap vertex collapses to a single bare-galvanised texel. This is what lets one material carry a printed front and a plain back without spending the second draw call.", "normalStrategy": "flat-shaded caps, flat wall", "segmentRationale": "Four segments per corner. The corner radius is the only curve this plate has and it is what separates a road sign from a sheet of metal; everything else here is straight and gets one segment."}, "parent": null, "attachment": null, "dimensions": {"width": 0.75, "height": 0.22, "depth": 0.035, "units": "m", "confidence": 0.75}, "transform": {"position": [0, 2.09, 0.0275], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The plate does not turn on anything; this is the component's own transform origin, and the model exposes exactly ONE named pivot, the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0, 0], "scale": [0.375, 0.0175, 0.375], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A convex proxy circumscribing the plate - the cheap volume a projectile tests against instead of the plate's extrusion."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}}, "material": "sheeting", "materialLayers": ["sheeting"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "border-rule", "description": "White inset rule following the plate's outline, a single thin rectangle about 0.02 m in from the edge.", "representation": "texture-region"}, {"id": "legend-lines", "description": "Three white legend elements: a large Thai soi name, a Latin transliteration beneath it, and the soi number set large at the right end.", "representation": "texture-region"}, {"id": "painted-edge-return", "description": "Folded edge return painted the same navy as the face rather than left as bare metal, which is what distinguishes this plate from the cut-sheet signs in the set.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#2B4278", "stops": [{"position": 0.0, "color": "rgba(85,103,141,1.0)", "note": "PAINTED folded edge return, measured #55678D over 4680 px - navy, not the bare metal grey every sibling sign shows"}, {"position": 0.06, "color": "rgba(206,210,215,1.0)", "note": "white border rule inset about 0.02 m, measured #CED2D7"}, {"position": 0.12, "color": "rgba(43,66,120,1.0)", "note": "deep navy field begins, measured #2B4278 over 5400 px"}, {"position": 1.0, "color": "rgba(43,66,120,1.0)", "note": "navy field across the plate; the legend sits on top of it as solid fill, not as ramp stops"}], "finishStyle": "satin", "notes": "An ordered ramp measured INWARD from the plate edge. Every boundary is hard-edged paint, so the stops are doubled at each edge rather than blended. The base is a DEEP navy - two sibling signs measured in the same session read #3370AB and #4871A2, and using either here would have made this plate a different sign.", "dominantAlbedo": "rgba(43,66,120,1.0)", "secondaryAlbedo": "rgba(206,210,215,1.0)", "materialClass": "plastic", "materialClassConfidence": 0.8}};
  node_sign_plate_0.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The plate does not turn on anything; this is the component's own transform origin, and the model exposes exactly ONE named pivot, the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0, 0], "scale": [0.375, 0.0175, 0.375], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A convex proxy circumscribing the plate - the cheap volume a projectile tests against instead of the plate's extrusion."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}};
  (nodes["root"] ?? root).add(node_sign_plate_0);
  nodes["sign-plate"] = node_sign_plate_0;
  const mesh_sign_plate_0Geometry = endpoint_sign_plate_0
    ? new THREE.CylinderGeometry(endpoint_sign_plate_0.endRadius, endpoint_sign_plate_0.baseRadius, endpoint_sign_plate_0.length, 8, 4)
    : buildExtrudeGeometry({"kind": "rounded-rect", "halfWidth": 0.375, "halfHeight": 0.11, "cornerRadius": 0.012, "cornerSegments": 4, "depth": 0.035, "points": [[0.363, -0.11], [0.36759, -0.10909], [0.37149, -0.10649], [0.37409, -0.10259], [0.375, -0.098], [0.375, 0.098], [0.37409, 0.10259], [0.37149, 0.10649], [0.36759, 0.10909], [0.363, 0.11], [-0.363, 0.11], [-0.36759, 0.10909], [-0.37149, 0.10649], [-0.37409, 0.10259], [-0.375, 0.098], [-0.375, -0.098], [-0.37409, -0.10259], [-0.37149, -0.10649], [-0.36759, -0.10909], [-0.363, -0.11]], "note": "The explicit polygon the layer builds, written out so the spec documents the geometry rather than gesturing at it. 20 points: four 4-segment corner arcs joined by four straight runs. The extrusion is bevelEnabled:false - THREE.ExtrudeGeometry rounds every corner by default, which would round the authored radius a second time."});
  if (!endpoint_sign_plate_0) {
    mesh_sign_plate_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_sign_plate_0 = new THREE.Mesh(
    mesh_sign_plate_0Geometry,
    materialMap["sheeting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_sign_plate_0.name = "Street-name plate";
  if (endpoint_sign_plate_0) {
    mesh_sign_plate_0.position.copy(endpoint_sign_plate_0.midpoint);
    mesh_sign_plate_0.quaternion.copy(endpoint_sign_plate_0.quaternion);
  }
  mesh_sign_plate_0.castShadow = options.castShadow ?? true;
  mesh_sign_plate_0.receiveShadow = options.receiveShadow ?? true;
  mesh_sign_plate_0.userData.sculptComponent = {"id": "sign-plate", "name": "Street-name plate", "level": "macro", "role": "panel", "importance": 1.0, "confidence": 0.85, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A flat rounded-corner plate with a folded edge return: two parallel planar caps joined by a short wall, closed and rigid. Not an open-shell, because the plate has real thickness and is sealed.", "geometryDescriptor": {"topologyIntent": "ExtrudeGeometry over a rounded-rectangle profile, 0.75 x 0.22, corner radius 0.012, depth 0.035.", "profile2D": {"kind": "rounded-rect", "halfWidth": 0.375, "halfHeight": 0.11, "cornerRadius": 0.012, "cornerSegments": 4, "depth": 0.035, "points": [[0.363, -0.11], [0.36759, -0.10909], [0.37149, -0.10649], [0.37409, -0.10259], [0.375, -0.098], [0.375, 0.098], [0.37409, 0.10259], [0.37149, 0.10649], [0.36759, 0.10909], [0.363, 0.11], [-0.363, 0.11], [-0.36759, 0.10909], [-0.37149, 0.10649], [-0.37409, 0.10259], [-0.375, 0.098], [-0.375, -0.098], [-0.37409, -0.10259], [-0.37149, -0.10649], [-0.36759, -0.10909], [-0.363, -0.11]], "note": "The explicit polygon the layer builds, written out so the spec documents the geometry rather than gesturing at it. 20 points: four 4-segment corner arcs joined by four straight runs. The extrusion is bevelEnabled:false - THREE.ExtrudeGeometry rounds every corner by default, which would round the authored radius a second time."}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - rewritten after generation into a two-region atlas: front-cap vertices take the printed graphic region, every wall and back-cap vertex collapses to a single bare-galvanised texel. This is what lets one material carry a printed front and a plain back without spending the second draw call.", "normalStrategy": "flat-shaded caps, flat wall", "segmentRationale": "Four segments per corner. The corner radius is the only curve this plate has and it is what separates a road sign from a sheet of metal; everything else here is straight and gets one segment."}, "parent": null, "attachment": null, "dimensions": {"width": 0.75, "height": 0.22, "depth": 0.035, "units": "m", "confidence": 0.75}, "transform": {"position": [0, 2.09, 0.0275], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The plate does not turn on anything; this is the component's own transform origin, and the model exposes exactly ONE named pivot, the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0, 0], "scale": [0.375, 0.0175, 0.375], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A convex proxy circumscribing the plate - the cheap volume a projectile tests against instead of the plate's extrusion."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}}, "material": "sheeting", "materialLayers": ["sheeting"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "border-rule", "description": "White inset rule following the plate's outline, a single thin rectangle about 0.02 m in from the edge.", "representation": "texture-region"}, {"id": "legend-lines", "description": "Three white legend elements: a large Thai soi name, a Latin transliteration beneath it, and the soi number set large at the right end.", "representation": "texture-region"}, {"id": "painted-edge-return", "description": "Folded edge return painted the same navy as the face rather than left as bare metal, which is what distinguishes this plate from the cut-sheet signs in the set.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#2B4278", "stops": [{"position": 0.0, "color": "rgba(85,103,141,1.0)", "note": "PAINTED folded edge return, measured #55678D over 4680 px - navy, not the bare metal grey every sibling sign shows"}, {"position": 0.06, "color": "rgba(206,210,215,1.0)", "note": "white border rule inset about 0.02 m, measured #CED2D7"}, {"position": 0.12, "color": "rgba(43,66,120,1.0)", "note": "deep navy field begins, measured #2B4278 over 5400 px"}, {"position": 1.0, "color": "rgba(43,66,120,1.0)", "note": "navy field across the plate; the legend sits on top of it as solid fill, not as ramp stops"}], "finishStyle": "satin", "notes": "An ordered ramp measured INWARD from the plate edge. Every boundary is hard-edged paint, so the stops are doubled at each edge rather than blended. The base is a DEEP navy - two sibling signs measured in the same session read #3370AB and #4871A2, and using either here would have made this plate a different sign.", "dominantAlbedo": "rgba(43,66,120,1.0)", "secondaryAlbedo": "rgba(206,210,215,1.0)", "materialClass": "plastic", "materialClassConfidence": 0.8}};
  node_sign_plate_0.add(mesh_sign_plate_0);
  meshes["sign-plate"] = mesh_sign_plate_0;
  colliders["sign-plate"] = {"type": "cylinder", "offset": [0, 0, 0], "scale": [0.375, 0.0175, 0.375], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A convex proxy circumscribing the plate - the cheap volume a projectile tests against instead of the plate's extrusion."};

  const attachment_post_1 = null;
  const endpoint_post_1 = makeAttachmentEndpoint(attachment_post_1);
  const node_post_1 = new THREE.Group();
  node_post_1.name = "Galvanised round tube__pivot";
  node_post_1.scale.set(1, 1, 1);
  if (endpoint_post_1) {
    node_post_1.position.copy(endpoint_post_1.start);
    node_post_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_post_1.position.set(0.0, 0.0, 0.0);
    node_post_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_post_1.userData.sculptComponent = {"id": "post", "name": "Galvanised round tube", "level": "macro", "role": "support", "importance": 0.85, "confidence": 0.8, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "A single vertical tube of circular section, continuous around its axis and never deforming. A cylinder is the exact primitive; a box would be the wrong solid entirely and is what every other support in this set uses.", "geometryDescriptor": {"topologyIntent": "CylinderGeometry(0.024, 0.024, 1.98, 12, 12), translated so it runs from y=0 to y=1.98.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "none - the weathering ramp arrives as VERTEX COLOURS across 12 height segments, not as a texture", "normalStrategy": "flat", "note": "A ROUND tube, not the square section every other post in this set uses - the reference shows a continuous curved highlight down the shaft with no arris anywhere, and drilled fixing holes on its face. 12 radial segments: the tube's circular section is a silhouette feature at this diameter, and 12 is where the outline stops reading as a polygon at prop distance. The 12 height segments carry the rust ramp without a texture.", "mergedAssembly": {"reason": "Nothing to merge: the reference crops the tube at the bottom of the frame and shows no flange, no cap and no footing. Recorded explicitly so a later pass does not invent a footplate this sign does not have. The drilled fixing holes visible on the shaft are NOT modelled - they are 8 mm features on a 48 mm tube, under a pixel at prop distance, and cutting them would cost geometry on a prop whose ceilings are full.", "parts": [{"id": "post-tube", "level": "meso", "primitive": "cylinder", "extent": {"width": 0.048, "height": 1.98, "depth": 0.048}, "localOffset": [0.0, 0.99, -0.02], "note": "48 mm round tube running from ground contact at y=0 up to y=1.98, PAST the plate's bottom edge at y=1.98 - the reference shows the tube ending just under the plate rather than continuing behind it."}], "jointNote": "In DEPTH the plate's back face sits at z=+0.010 and the tube's front face at z=+0.004: a 6 mm standoff, so the plate stands proud and no two same-facing surfaces are coincident. Prop depth spans z -0.044 to +0.045, 0.089 m against a declared 0.08 within the asset's 0.1 tolerance."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.048, "height": 1.98, "depth": 0.048, "units": "m", "confidence": 0.8}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center. This is the ONLY named pivot in the prop, and it is the correct count: a bolted roadside sign has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0.99, -0.02], "scale": [0.024, 0.99, 0.024], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, and here the proxy is EXACT rather than circumscribing: the support really is a round tube, so the cheap convex volume and the visual mesh are the same shape."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}}, "material": "galvanised", "materialLayers": ["galvanised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "galv-spangle", "description": "Mottled grey hot-dip spangle over the tube, with a continuous soft highlight running down its curved face rather than the flat facets a square post shows.", "representation": "texture-region"}, {"id": "foot-rust", "description": "Orange-brown rust over the lowest stretch of the tube, heavier here than on the square-post siblings and reaching further up.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#777F81", "stops": [{"position": 0.0, "color": "rgba(119,127,129,1.0)", "note": "tube under the plate, cleanest coating, measured #777F81 over 3945 neutral px"}, {"position": 0.72, "color": "rgba(119,127,129,1.0)", "note": "held clean down to roughly 0.55 m above ground"}, {"position": 0.78, "color": "rgba(100,70,50,1.0)", "note": "transition into the rust, softer than the siblings' hard splash line because this tube is rusting rather than staining"}, {"position": 1.0, "color": "rgba(100,70,50,1.0)", "note": "rust to ground contact, measured #644632 over 2586 orange-biased px - the most saturated and most extensive rust of the eight"}], "finishStyle": "satin", "notes": "An ordered vertical ramp measured DOWNWARD from the tube top. Unlike the square-post siblings this transition is a RAMP rather than a step: 2586 of 4500 px in the foot crop pass the orange filter against 584 of 4050 on the u-turn post, so this tube is corroding through rather than carrying a splash stain, and a hard edge would be the wrong shape for it.", "dominantAlbedo": "rgba(119,127,129,1.0)", "secondaryAlbedo": "rgba(100,70,50,1.0)", "materialClass": "metal", "materialClassConfidence": 0.88}};
  node_post_1.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center. This is the ONLY named pivot in the prop, and it is the correct count: a bolted roadside sign has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0.99, -0.02], "scale": [0.024, 0.99, 0.024], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, and here the proxy is EXACT rather than circumscribing: the support really is a round tube, so the cheap convex volume and the visual mesh are the same shape."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}};
  (nodes["root"] ?? root).add(node_post_1);
  nodes["post"] = node_post_1;
  const mesh_post_1Geometry = endpoint_post_1
    ? new THREE.CylinderGeometry(endpoint_post_1.endRadius, endpoint_post_1.baseRadius, endpoint_post_1.length, 8, 4)
    : new THREE.CylinderGeometry(0.5, 0.5, 1, 10, 4);
  if (!endpoint_post_1) {
    mesh_post_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_post_1 = new THREE.Mesh(
    mesh_post_1Geometry,
    materialMap["galvanised"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_post_1.name = "Galvanised round tube";
  if (endpoint_post_1) {
    mesh_post_1.position.copy(endpoint_post_1.midpoint);
    mesh_post_1.quaternion.copy(endpoint_post_1.quaternion);
  }
  mesh_post_1.castShadow = options.castShadow ?? true;
  mesh_post_1.receiveShadow = options.receiveShadow ?? true;
  mesh_post_1.userData.sculptComponent = {"id": "post", "name": "Galvanised round tube", "level": "macro", "role": "support", "importance": 0.85, "confidence": 0.8, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "A single vertical tube of circular section, continuous around its axis and never deforming. A cylinder is the exact primitive; a box would be the wrong solid entirely and is what every other support in this set uses.", "geometryDescriptor": {"topologyIntent": "CylinderGeometry(0.024, 0.024, 1.98, 12, 12), translated so it runs from y=0 to y=1.98.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "none - the weathering ramp arrives as VERTEX COLOURS across 12 height segments, not as a texture", "normalStrategy": "flat", "note": "A ROUND tube, not the square section every other post in this set uses - the reference shows a continuous curved highlight down the shaft with no arris anywhere, and drilled fixing holes on its face. 12 radial segments: the tube's circular section is a silhouette feature at this diameter, and 12 is where the outline stops reading as a polygon at prop distance. The 12 height segments carry the rust ramp without a texture.", "mergedAssembly": {"reason": "Nothing to merge: the reference crops the tube at the bottom of the frame and shows no flange, no cap and no footing. Recorded explicitly so a later pass does not invent a footplate this sign does not have. The drilled fixing holes visible on the shaft are NOT modelled - they are 8 mm features on a 48 mm tube, under a pixel at prop distance, and cutting them would cost geometry on a prop whose ceilings are full.", "parts": [{"id": "post-tube", "level": "meso", "primitive": "cylinder", "extent": {"width": 0.048, "height": 1.98, "depth": 0.048}, "localOffset": [0.0, 0.99, -0.02], "note": "48 mm round tube running from ground contact at y=0 up to y=1.98, PAST the plate's bottom edge at y=1.98 - the reference shows the tube ending just under the plate rather than continuing behind it."}], "jointNote": "In DEPTH the plate's back face sits at z=+0.010 and the tube's front face at z=+0.004: a 6 mm standoff, so the plate stands proud and no two same-facing surfaces are coincident. Prop depth spans z -0.044 to +0.045, 0.089 m against a declared 0.08 within the asset's 0.1 tolerance."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.048, "height": 1.98, "depth": 0.048, "units": "m", "confidence": 0.8}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center. This is the ONLY named pivot in the prop, and it is the correct count: a bolted roadside sign has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0.99, -0.02], "scale": [0.024, 0.99, 0.024], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, and here the proxy is EXACT rather than circumscribing: the support really is a round tube, so the cheap convex volume and the visual mesh are the same shape."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}}, "material": "galvanised", "materialLayers": ["galvanised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "galv-spangle", "description": "Mottled grey hot-dip spangle over the tube, with a continuous soft highlight running down its curved face rather than the flat facets a square post shows.", "representation": "texture-region"}, {"id": "foot-rust", "description": "Orange-brown rust over the lowest stretch of the tube, heavier here than on the square-post siblings and reaching further up.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#777F81", "stops": [{"position": 0.0, "color": "rgba(119,127,129,1.0)", "note": "tube under the plate, cleanest coating, measured #777F81 over 3945 neutral px"}, {"position": 0.72, "color": "rgba(119,127,129,1.0)", "note": "held clean down to roughly 0.55 m above ground"}, {"position": 0.78, "color": "rgba(100,70,50,1.0)", "note": "transition into the rust, softer than the siblings' hard splash line because this tube is rusting rather than staining"}, {"position": 1.0, "color": "rgba(100,70,50,1.0)", "note": "rust to ground contact, measured #644632 over 2586 orange-biased px - the most saturated and most extensive rust of the eight"}], "finishStyle": "satin", "notes": "An ordered vertical ramp measured DOWNWARD from the tube top. Unlike the square-post siblings this transition is a RAMP rather than a step: 2586 of 4500 px in the foot crop pass the orange filter against 584 of 4050 on the u-turn post, so this tube is corroding through rather than carrying a splash stain, and a hard edge would be the wrong shape for it.", "dominantAlbedo": "rgba(119,127,129,1.0)", "secondaryAlbedo": "rgba(100,70,50,1.0)", "materialClass": "metal", "materialClassConfidence": 0.88}};
  node_post_1.add(mesh_post_1);
  meshes["post"] = mesh_post_1;
  colliders["post"] = {"type": "cylinder", "offset": [0, 0.99, -0.02], "scale": [0.024, 0.99, 0.024], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, and here the proxy is EXACT rather than circumscribing: the support really is a round tube, so the cheap convex volume and the visual mesh are the same shape."};

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createSoiNameSignLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Soi Name Sign look-dev lights";
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
  lights.userData.lightingFromPhoto = [{"role": "key", "type": "area", "directionHint": [-0.38, 0.56, 0.74], "intensity": 1.0, "colorTemperatureK": 5600, "evidence": "The plate's top face reads luma 162-166 against the navy front face's 61-64, so the key is well above the plate; the tube's left side reads brighter than its right, so it is also camera-left."}, {"role": "fill", "type": "hemisphere", "directionHint": [0.55, 0.2, -0.4], "intensity": 0.34, "colorTemperatureK": 6500, "evidence": "The painted edge return, turned away from the key, still trims to #55678D at luma 102 rather than going black, which only happens with real fill."}, {"role": "rim", "type": "directional", "directionHint": [0.6, 0.3, -0.75], "intensity": 0.22, "colorTemperatureK": 6500, "evidence": "A bright line runs along the plate's top-right fold, separating it from the backdrop at luma 166 against 131."}, {"role": "environment", "type": "studio-context", "environment": "studio softbox on a flat neutral backdrop", "exposure": 1.0, "toneMapping": "ACESFilmic", "evidence": "Border-ring scan over 1024 samples trimming to #838383. The backdrop was MEASURED rather than assumed to be the grey the prompt asked for.", "note": "The render harness backs onto a darker ground than the plate does, so a candidate render reads darker overall and that difference is the backdrop, not the prop."}, {"role": "contact-shadow", "type": "ground-shadow", "intensity": 0.5, "evidence": "The reference crops the tube at the bottom of the frame and shows no ground contact, so the contact shadow is grounded at y=0 by construction rather than matched to an observed one.", "behavior": "Grounded at y=0, the prop's origin, so a placed instance darkens where it actually touches. Ambient occlusion is left at zero on both materials: a closed tube and a sealed plate have no cavity for AO to find, and baking any into base colour is what the material pass forbids."}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  return lights;
}


// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameSoiNameSignCamera(
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


export function configureSoiNameSignRenderer(renderer: THREE.WebGLRenderer): void {
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

/** Measured off assets/soi-name-sign/preview.jpg. See the spec's localOverrides for crops. */
const PALETTE = {
  field: '#2B4278',    // 5400 px at (400,380,90,60) - a DEEP navy, not the siblings' blues
  legend: '#CED2D7',   // 2694 bright px of (430,330,180,60), across the Thai line
  edge: '#55678D',     // 4680 px of (240,330,26,180) - the return is PAINTED, not bare metal
  galv: '#777F81',     // 3945 neutral px of (500,600,45,140)
  rust: '#644632',     // 2586 orange-biased px of (495,860,50,90) - the heaviest rust of the set
} as const;

/** Geometry, in metres, from the spec. Origin base-center: y=0 is ground contact. */
const DIM = {
  plateW: 0.75, plateH: 0.22, plateT: 0.035, plateR: 0.012,
  plateCY: 2.09, plateCZ: 0.0275,
  postR: 0.024, postH: 1.98, postZ: -0.020,
} as const;

let faceAtlasCache: THREE.CanvasTexture | null | undefined;

/**
 * One 512px canvas for the whole sheeting material. The canvas GROUND is the bare edge
 * return, and the printed face is drawn as an inset rounded rect on top of it: that is
 * what lets the atlas send every wall and back-cap vertex to a corner texel and still get
 * a printed front, on one material and one draw call.
 */
function faceAtlas(size: number): THREE.CanvasTexture | null {
  if (faceAtlasCache !== undefined) return faceAtlasCache;
  // No DOM outside the browser. The geometry-only tools evaluate this module in bare Node
  // and must get a working prop rather than a throw.
  if (typeof document === 'undefined') { faceAtlasCache = null; return null; }
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) { faceAtlasCache = null; return null; }

  // The ground. Every non-front-cap vertex lands on this.
  ctx.fillStyle = PALETTE.edge;
  ctx.fillRect(0, 0, size, size);

  // The face occupies the middle 90% so the corner texel stays clear of it.
  const M = size * 0.05, S = size * 0.90;
  ctx.fillStyle = PALETTE.field;
  ctx.fillRect(M, M, S, S);

  // Border rule: a thin white inset stroke, ~0.02 m in on a 0.75 m plate.
  ctx.strokeStyle = PALETTE.legend;
  ctx.lineWidth = Math.max(2, S * 0.010);
  const bi = S * 0.030;
  ctx.strokeRect(M + bi, M + bi, S - 2 * bi, S - 2 * bi);

  // The legend. A large Thai soi name with a Latin transliteration beneath it, and the soi
  // NUMBER set large at the right end. The arrangement is asymmetric, so the front-cap UV
  // mapping must not mirror it. Representative text, not a transcription of one street.
  ctx.fillStyle = PALETTE.legend;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  const lx = M + S * 0.085;
  fitText(ctx, 'ซอย สุขุมวิท', S * 0.50, SANS_R, S * 0.30);
  ctx.fillText('ซอย สุขุมวิท', lx, M + S * 0.400);
  fitText(ctx, 'SOI SUKHUMVIT', S * 0.46, SANS, S * 0.20);
  ctx.fillText('SOI SUKHUMVIT', lx, M + S * 0.660);
  ctx.textAlign = 'right';
  fitText(ctx, '11', S * 0.13, SANS, S * 0.36);
  ctx.fillText('11', M + S * 0.925, M + S * 0.440);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  faceAtlasCache = tex;
  return tex;
}

function buildGeometry(root: THREE.Group): void {
  // --- plate: a rounded-rect extrusion, with the two-region atlas authored onto it ----
  const shape = roundedRectShape(DIM.plateW / 2, DIM.plateH / 2, DIM.plateR, 4);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: DIM.plateT, bevelEnabled: false, curveSegments: 4,
  });
  geo.translate(0, 0, -DIM.plateT / 2);
  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  const nrm = geo.getAttribute('normal') as THREE.BufferAttribute;
  const uv = new Float32Array(pos.count * 2);
  const M = 0.05, S = 0.90; // must match faceAtlas
  for (let i = 0; i < pos.count; i += 1) {
    if (nrm.getZ(i) > 0.5) {
      // Front cap. +X maps to atlas +u and +Y to atlas +v (flipY makes v=1 the canvas top),
      // so the chiral arrow is NOT mirrored.
      uv[i * 2] = M + S * (pos.getX(i) / DIM.plateW + 0.5);
      uv[i * 2 + 1] = M + S * (pos.getY(i) / DIM.plateH + 0.5);
    } else {
      // Wall and back cap collapse to one corner texel, outside the printed face and
      // therefore bare galvanised. This is what buys a printed front and a plain back
      // without spending the second material or the second draw call.
      uv[i * 2] = 0.015;
      uv[i * 2 + 1] = 0.015;
    }
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  // Built at the ORIGIN and left there. The generator already applied the component's
  // transform.position to the parent NODE, so positioning the mesh as well offsets the
  // plate twice and floats it clear of the post.
  setMeshGeometry(root, 'sign-plate', geo);

  // --- tube: a ROUND section, which is this prop's one structural difference from the
  // square-post siblings. 12 radial segments is where the outline stops reading as a
  // polygon at prop distance, and 12 height segments carry the rust ramp without a texture.
  const post = tubeAt(DIM.postR, DIM.postH, 0, DIM.postH / 2, DIM.postZ, 12, 12);
  // Heights in METRES up from y=0. A RAMP here, not the hard splash line the square-post
  // siblings get: 2586 of 4500 px in this tube's foot crop pass the orange filter against
  // 584 of 4050 on the u-turn post, so it is corroding through rather than carrying a
  // splash stain, and a hard edge would be the wrong shape for it.
  bakeRamp(post, [
    [0.00, PALETTE.rust],
    [0.35, PALETTE.rust],
    [0.58, PALETTE.galv],
    [DIM.postH, PALETTE.galv],
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

/** Assign the face atlas AFTER material construction - the textureless declaration does not touch this route. */
function applyAtlases(root: THREE.Group, options: ProceduralModelOptions): void {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const mesh = rt?.meshes?.['sign-plate'];
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
  const root = createSoiNameSignModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  buildGeometry(root);
  applyAtlases(root, options);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. A bolted street-name plate has no hinge, bearing, lid or wheel, so the root is the only axis it has. A pivot per component would describe a machine that does not exist.
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
