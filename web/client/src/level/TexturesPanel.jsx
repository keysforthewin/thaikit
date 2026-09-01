import { TexturesModalBody } from './StatsHud.jsx';

/**
 * Every texture the level holds on the GPU.
 *
 * Procedural props synthesise their textures at runtime; an asset that ships
 * image files (ground tiles, skyline imposters) ships them as webp. Both become
 * KTX2 when the level is BAKED -- the bake re-encodes every texture itself --
 * so there is nothing to compress ahead of time.
 */
export function TexturesPanel({ stats }) {
  return (
    <>
      <p className="muted" style={{ marginTop: 0 }}>
        What the editor holds on the GPU right now. Every texture, procedural or shipped, is re-encoded to KTX2 by the bake, so uncompressed here does not mean uncompressed in the exported level.
      </p>
      <TexturesModalBody stats={stats} />
    </>
  );
}
