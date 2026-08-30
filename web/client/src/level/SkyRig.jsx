import { useThree } from '@react-three/fiber';

import { useSkyBaseTexture } from './skyTexture.js';
import { SkyDome } from './SkyDome.jsx';
import { EnvironmentProbe } from './EnvironmentProbe.jsx';

/**
 * The sky's texture, loaded once, used twice.
 *
 * The dome you look at and the environment you see reflected are the same
 * pixels, and decoding them twice would cost a second 16-megapixel decode and a
 * second GPU resample of the panorama. So the hook lives here, above both.
 *
 * This has to be a component rather than a few lines in `Viewport` because the
 * hook needs the renderer, and `useThree` only works inside the Canvas.
 */
export function SkyRig({ sky, levelId, rev, fallbackColor, hasSky, ibl, hemisphere, onError, onEnvBuilt }) {
  const renderer = useThree((s) => s.gl);
  const [base, baseError] = useSkyBaseTexture(renderer, levelId, sky, rev);

  return (
    <>
      {hasSky && (
        <SkyDome
          sky={sky}
          levelId={levelId}
          rev={rev}
          fallbackColor={fallbackColor}
          base={base}
          baseError={baseError}
          onError={onError}
        />
      )}
      <EnvironmentProbe
        sky={sky}
        // With no sky layer on there is nothing to prefilter FROM, so the probe
        // falls back to the hemisphere ramp rather than reflecting a dome that
        // is not being drawn.
        base={hasSky ? base : null}
        hemisphere={hemisphere}
        ibl={ibl}
        onBuilt={onEnvBuilt}
      />
    </>
  );
}
