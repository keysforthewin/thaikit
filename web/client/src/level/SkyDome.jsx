import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { buildSky } from '@thai-kit/level-runtime/sky';

import { skyUrl } from './sky.js';

/**
 * The sky in the editor viewport.
 *
 * The domes and the star shader come from `@thai-kit/level-runtime/sky` -- the
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

export function SkyDome({ sky, levelId, rev, fallbackColor, base = null, baseError = null, onError }) {
  const scene = useThree((s) => s.scene);
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
