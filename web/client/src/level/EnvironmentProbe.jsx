import { useEffect, useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import { buildEnvironment, applyEnvironment } from '@thai-kit/level-runtime/environment';

/**
 * Image-based lighting in the editor viewport.
 *
 * `buildEnvironment` comes from `@thai-kit/level-runtime` -- the same function
 * `loadLevel()` calls -- so the reflections art-directed here are the ones that
 * ship. Only the source of the base texture differs: files under
 * `/levels/<id>/sky/` rather than a KTX2 image inside the baked GLB.
 *
 * Mounted UNCONDITIONALLY, unlike `SkyDome`, which mounts only when a sky layer
 * is actually on. A level with no sky picture still gets an environment -- built
 * from the hemisphere ramp -- and that is the whole reason the HemisphereLight
 * can be switched off: the gradient probe reproduces its diffuse and adds grey
 * specular on top.
 *
 * The prefilter runs in an EFFECT, never during the render loop:
 * `PMREMGenerator.fromScene` swaps the renderer's tone mapping, autoClear, XR
 * flag and render target and puts them back, which is not safe mid-frame.
 */
export function EnvironmentProbe({ sky, base = null, hemisphere = null, ibl = null, onBuilt }) {
  const scene = useThree((s) => s.scene);
  const renderer = useThree((s) => s.gl);

  const enabled = ibl?.enabled !== false;
  const size = ibl?.size ?? 256;
  const intensity = ibl?.intensity ?? 1;
  const rotationDeg = sky?.base?.rotationDeg ?? 0;

  /**
   * Everything the PREFILTER actually reads, as a value.
   *
   * It cannot depend on the `sky` or `hemisphere` OBJECTS: every `setSetting`
   * commits a new document, so those identities change on any edit anywhere in
   * the level and the probe would re-prefilter when you nudge the exposure. The
   * hemisphere only matters when there is no base texture, because that is the
   * only case the gradient fallback is built from.
   */
  const bakeKey = useMemo(() => JSON.stringify([
    base ? sky?.base?.mode ?? null : 'gradient',
    base ? [sky?.base?.elevation ?? null, sky?.base?.nadir ?? null] : null,
    base ? null : [hemisphere?.sky ?? null, hemisphere?.ground ?? null, hemisphere?.intensity ?? null],
  ]), [base, sky, hemisphere]);

  // The prefilter depends on the PIXELS and the probe size, and on nothing
  // else. Intensity and bearing ride on `scene.environmentIntensity` and
  // `scene.environmentRotation`, so dragging either slider must not re-run it --
  // which is what the separate effect below is for.
  useEffect(() => {
    if (!enabled || !renderer) return undefined;
    const env = buildEnvironment(renderer, sky, { base, hemisphere, size });
    if (!env) return undefined;
    const restore = applyEnvironment(scene, env.texture, { intensity, rotationDeg });
    onBuilt?.(env);
    return () => {
      restore();
      env.dispose();
      onBuilt?.(null);
    };
    // `sky` and `hemisphere` are read through `bakeKey`, which holds every
    // field the prefilter uses; `intensity` and `rotationDeg` are applied by
    // the effect below without rebuilding.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene, renderer, enabled, base, size, bakeKey]);

  useEffect(() => {
    if (!scene.environment) return;
    scene.environmentIntensity = intensity;
    scene.environmentRotation.set(0, (rotationDeg * Math.PI) / 180, 0);
  }, [scene, intensity, rotationDeg]);

  return null;
}
