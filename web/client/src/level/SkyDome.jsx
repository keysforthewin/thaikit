import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { buildSky } from '@thaikit/level-runtime/sky';

import { baseSource, skyUrl } from './sky.js';

/**
 * The sky in the editor viewport.
 *
 * The domes and the star shader come from `@thaikit/level-runtime/sky` -- the
 * same module `loadLevel()` calls -- so what is authored here is what ships.
 * This component's whole job is the one thing the runtime does differently:
 * loading the images from `/levels/<id>/sky/` rather than out of a baked GLB.
 *
 * The sky is all domes, so `scene.background` stays the flat colour and simply
 * shows through wherever no layer covers it. It is set explicitly here (and
 * again on cleanup) because `Viewport` swaps its `<color attach="background">`
 * out for this component, and r3f will not re-run that attach on the way back.
 */

/** Load whatever the base layer needs -- one equirect, or six faces as a cube. */
function useBaseTexture(levelId, source, rev) {
  const [texture, setTexture] = useState(null);
  const [error, setError] = useState(null);
  // The URLs, not the source object: a re-render must not reload the images.
  const key = useMemo(
    () => (source ? `${source.mode}:${source.mode === 'cube' ? source.files.join('|') : source.file}:${rev}` : ''),
    [source, rev],
  );

  useEffect(() => {
    if (!source || !levelId) { setTexture(null); setError(null); return undefined; }
    let cancelled = false;
    let loaded = null;
    const onLoad = (tex) => {
      if (cancelled) { tex.dispose(); return; }
      loaded = tex;
      setTexture(tex);
      setError(null);
    };
    const onError = (err) => { if (!cancelled) setError(err?.message || 'could not load the sky image'); };

    if (source.mode === 'cube') {
      new THREE.CubeTextureLoader().load(source.files.map((f) => skyUrl(levelId, f, rev)), onLoad, undefined, onError);
    } else {
      new THREE.TextureLoader().load(skyUrl(levelId, source.file, rev), onLoad, undefined, onError);
    }
    return () => { cancelled = true; loaded?.dispose(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [levelId, key]);

  return [texture, error];
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
  const source = useMemo(() => baseSource(sky), [sky]);
  const [base, baseError] = useBaseTexture(levelId, source, rev);
  const clouds = useCloudTexture(levelId, sky?.clouds?.file, rev);
  const built = useRef(null);

  useEffect(() => { onError?.(baseError); }, [baseError, onError]);

  useEffect(() => {
    // `owned: false` -- the textures belong to the hooks above, which dispose
    // them when their URL changes. Letting buildSky dispose them too would free
    // a texture the next render still holds.
    //
    // buildSky reads `base.isCubeTexture`, so six faces and one panorama both
    // go in here unchanged; the background stays the flat colour underneath,
    // which is what shows through when no base layer is set.
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
