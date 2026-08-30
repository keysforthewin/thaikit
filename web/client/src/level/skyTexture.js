import { useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import { resolveNadirFade } from '@thai-kit/level-schema';

import { baseSource, skyUrl } from './sky.js';
import { equirectToCubeTexture } from './equirectCube.js';

/**
 * The sky's BASE texture, as a cubemap, loaded from `/levels/<id>/sky/`.
 *
 * Lifted out of `SkyDome` because two things now want it: the dome the viewport
 * draws, and the environment probe that prefilters the same pixels into
 * reflections. Calling the hook twice would mean two 16-megapixel decodes and
 * two GPU resamples of the same panorama, so it is called ONCE by `SkyRig` and
 * the texture is handed to both.
 *
 * Either route ends in a CubeTexture, which is what makes the editor take the
 * same `CUBE_SOURCE` shader branch as a shipped level over its KTX2 cubemap.
 */

/** Six faces straight into a CubeTexture -- already the shipped shape. */
function useCubeFaces(levelId, source, rev) {
  const [texture, setTexture] = useState(null);
  const [error, setError] = useState(null);
  // The URLs, not the source object: a re-render must not reload the images.
  const key = useMemo(
    () => (source?.mode === 'cube' && levelId ? source.files.map((f) => skyUrl(levelId, f, rev)).join('|') : ''),
    [source, levelId, rev],
  );

  useEffect(() => {
    if (!key) { setTexture(null); setError(null); return undefined; }
    let cancelled = false;
    let loaded = null;
    new THREE.CubeTextureLoader().load(
      key.split('|'),
      (tex) => {
        if (cancelled) { tex.dispose(); return; }
        loaded = tex;
        setTexture(tex);
        setError(null);
      },
      undefined,
      (err) => { if (!cancelled) setError(err?.message || 'could not load the sky image'); },
    );
    return () => { cancelled = true; loaded?.dispose(); };
  }, [key]);

  return [texture, error];
}

/**
 * One panorama, resampled into a cubemap as soon as it decodes.
 *
 * The decoded IMAGE is kept and the GPU texture is not: re-baking on a nudge of
 * the spans or the ground fade then costs one upload and six face renders --
 * milliseconds -- instead of re-fetching and re-decoding 16 megapixels, while
 * the 64 MB the panorama would occupy as a live texture is never resident
 * between bakes.
 */
function usePanoramaCube(renderer, levelId, source, rev, base) {
  const url = source?.mode === 'panoramic' && levelId ? skyUrl(levelId, source.file, rev) : null;
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) { setImage(null); setError(null); return undefined; }
    let cancelled = false;
    new THREE.ImageLoader().load(
      url,
      (img) => { if (!cancelled) { setImage(img); setError(null); } },
      undefined,
      (err) => { if (!cancelled) setError(err?.message || 'could not load the sky image'); },
    );
    return () => { cancelled = true; };
  }, [url]);

  // Only what the resample actually reads. Rotation and intensity are uniforms
  // on the dome, so turning the sky must not re-bake it.
  const bakeKey = useMemo(() => {
    const fade = resolveNadirFade(base?.nadir ?? {});
    return JSON.stringify([
      base?.elevation?.minDeg ?? -90,
      base?.elevation?.maxDeg ?? 90,
      base?.nadir?.color ?? null,
      fade.startDeg,
      fade.endDeg,
    ]);
  }, [base?.elevation?.minDeg, base?.elevation?.maxDeg, base?.nadir?.color, base?.nadir?.mode, base?.nadir?.startDeg, base?.nadir?.endDeg]);

  const [cube, setCube] = useState(null);
  useEffect(() => {
    if (!image || !renderer) { setCube(null); return undefined; }
    let built = null;
    try {
      built = equirectToCubeTexture(renderer, image, base);
      setCube(built.texture);
      setError(null);
    } catch (err) {
      setCube(null);
      setError(err?.message || 'could not resample the panorama');
    }
    return () => built?.dispose();
    // `base` is read through `bakeKey`, which is every field the resample uses.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderer, image, bakeKey]);

  return [cube, error];
}

/**
 * The base layer as a cubemap, whichever mode the level authored.
 *
 * @returns {[THREE.Texture|null, string|null]} texture and the load error, if any
 */
export function useSkyBaseTexture(renderer, levelId, sky, rev) {
  const source = useMemo(() => baseSource(sky), [sky]);
  const [faces, facesError] = useCubeFaces(levelId, source, rev);
  const [panorama, panoramaError] = usePanoramaCube(renderer, levelId, source, rev, sky?.base);
  const isCube = source?.mode === 'cube';
  return [isCube ? faces : panorama, (isCube ? facesError : panoramaError) ?? null];
}
