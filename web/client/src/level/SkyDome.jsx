import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { buildSky } from '@thaikit/level-runtime/sky';
import { resolveNadirFade } from '@thaikit/level-schema';

import { baseSource, skyUrl } from './sky.js';
import { equirectToCubeTexture } from './equirectCube.js';

/**
 * The sky in the editor viewport.
 *
 * The domes and the star shader come from `@thaikit/level-runtime/sky` -- the
 * same module `loadLevel()` calls -- so what is authored here is what ships.
 * This component's whole job is the one thing the runtime does differently:
 * loading the images from `/levels/<id>/sky/` rather than out of a baked GLB.
 *
 * The base layer reaches `buildSky` as a CUBEMAP either way. Six faces load as
 * one; a panorama is resampled into one here, on the GPU, the moment it lands
 * (`equirectCube.js` says why -- an unmipped 8192x2048 equirect sampled across
 * a full-screen dome is the slow thing this avoids). So the editor and the
 * shipped level take the same branch of the same shader, and the synthesised
 * ground is resampled in rather than previewed by a second code path.
 *
 * The sky is all domes, so `scene.background` stays the flat colour and simply
 * shows through wherever no layer covers it. It is set explicitly here (and
 * again on cleanup) because `Viewport` swaps its `<color attach="background">`
 * out for this component, and r3f will not re-run that attach on the way back.
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

function useCloudTexture(levelId, file, rev) {
  const [texture, setTexture] = useState(null);
  useEffect(() => {
    if (!file || !levelId) { setTexture(null); return undefined; }
    let cancelled = false;
    let loaded = null;
    new THREE.TextureLoader().load(skyUrl(levelId, file, rev), (tex) => {
      if (cancelled) { tex.dispose(); return; }
      loaded = tex;
      setTexture(tex);
    });
    return () => { cancelled = true; loaded?.dispose(); };
  }, [levelId, file, rev]);
  return texture;
}

export function SkyDome({ sky, levelId, rev, fallbackColor, onError }) {
  const scene = useThree((s) => s.scene);
  const renderer = useThree((s) => s.gl);
  const source = useMemo(() => baseSource(sky), [sky]);
  const [faces, facesError] = useCubeFaces(levelId, source, rev);
  const [panorama, panoramaError] = usePanoramaCube(renderer, levelId, source, rev, sky?.base);
  const base = source?.mode === 'cube' ? faces : panorama;
  const baseError = (source?.mode === 'cube' ? facesError : panoramaError) ?? null;
  const clouds = useCloudTexture(levelId, sky?.clouds?.file, rev);
  const built = useRef(null);

  useEffect(() => { onError?.(baseError); }, [baseError, onError]);

  useEffect(() => {
    // `owned: false` -- the textures belong to the hooks above, which dispose
    // them when their URL changes. Letting buildSky dispose them too would free
    // a texture the next render still holds.
    //
    // buildSky reads `base.isCubeTexture`, and both routes above produce one,
    // so the dome always takes the CUBE_SOURCE branch -- the same one the
    // shipped level takes over its KTX2 cubemap.
    const built_ = buildSky(sky, { base, clouds, owned: false });
    built.current = built_;
    scene.background = fallbackColor;
    scene.add(built_.group);
    return () => {
      built_.dispose();
      built.current = null;
      scene.background = fallbackColor;
    };
  }, [scene, sky, base, clouds, fallbackColor]);

  useFrame((state, dt) => built.current?.update(dt, state.camera.position));

  return null;
}
