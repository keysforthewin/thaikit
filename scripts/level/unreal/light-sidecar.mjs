// glTF has no area lights or source dimensions. Preserve these for Cycles,
// using point records plus bakeShape metadata that never reaches the runtime.
const hex = (linear) => '#' + linear.map((v) => Math.round(Math.min(1, Math.max(0, v <= 0.0031308 ? v * 12.92 : 1.055 * v ** (1 / 2.4) - 0.055)) * 255).toString(16).padStart(2, '0')).join('');
export function applyLightSidecar(bake, sidecar, scale = 1, moonShadow = null, includeDisabled = false) {
  const moon = bake.lights.filter((l) => l.role === 'moon');
  if (moon.length !== 1) throw new Error('Expected exactly one moon');
  if (moonShadow) moon[0].shadow = { ...moon[0].shadow, ...moonShadow };
  const allLamps = sidecar.lights.filter((l) => ['PointLightComponent', 'SpotLightComponent', 'RectLightComponent'].includes(l.class));
  const disabled = (l) => l.affects_world === false || l.visible === false;
  const lamps = allLamps.filter((l) => includeDisabled || !disabled(l));
  const labels = new Set();
  const rows = lamps.map((l, i) => {
    if (labels.has(l.label)) throw new Error(`Duplicate light label ${l.label}`);
    labels.add(l.label);
    if (!String(l.intensity_units).includes('CANDELAS')) throw new Error(`Light ${l.label} must use candelas`);
    const spot = l.class === 'SpotLightComponent';
    const area = l.class === 'RectLightComponent';
    const outer = spot ? l.outer_cone_angle * Math.PI / 180 : null;
    return {
      id: `ue-lamp-${i}`, node: `light_ue-lamp-${i}`, name: l.label,
      type: spot ? 'spot' : 'point', role: null, position: l.position,
      direction: spot || area ? l.direction : null, color: hex(l.colorLinear),
      intensity: l.intensity * scale, distance: l.attenuation_radius * 0.01,
      angle: outer, penumbra: spot ? 1 - l.inner_cone_angle / l.outer_cone_angle : null,
      decay: 2, castShadow: false, shadow: null,
      bakeShape: area ? 'rectangle' : null, bakeColor: l.colorLinear,
      bakeCastShadow: l.cast_shadows, sourceRadius: (l.source_radius ?? 0) * 0.01,
      sourceWidth: (l.source_width ?? 0) * 0.01, sourceHeight: (l.source_height ?? 0) * 0.01,
      up: l.up, right: l.right,
    };
  });
  bake.lights = [...moon, ...rows];
  const skies = sidecar.lights.filter((l) => l.class === 'SkyLightComponent');
  if (skies.length > 1) throw new Error('Multiple SkyLights need an explicit environment composition');
  if (skies.length) bake.skyLight = { intensity: skies[0].intensity * scale, color: skies[0].colorLinear, name: skies[0].label };
  bake.source.lightInventory = { lamps: rows.length, rect: rows.filter((l) => l.bakeShape).length, sky: skies.length, moon: 1 };
  if (!includeDisabled && allLamps.some(disabled)) bake.source.lightInventory.disabled = allLamps.filter(disabled).map((l) => l.label);
  return bake.source.lightInventory;
}
