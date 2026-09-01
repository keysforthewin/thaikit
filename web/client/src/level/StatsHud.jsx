const mb = (n) => `${(n / 1048576).toFixed(1)} MB`;

export function StatsHud({ stats, onOpenTextures }) {
  if (!stats) return null;
  const cells = [...stats.cells.values()];
  const worst = cells.reduce((m, c) => Math.max(m, c.mergedDrawCalls), 0);
  return (
    <div className="hud">
      <div>
        {stats.vertices.toLocaleString()} verts · {stats.triangles.toLocaleString()} tris · {stats.drawCalls} draw calls · {stats.materials} materials
      </div>
      <div onClick={onOpenTextures} style={{ cursor: 'pointer' }} title="every texture in the level">
        {stats.textures} textures · {mb(stats.gpuBytes)} VRAM
      </div>
      <div className="muted">
        {cells.length} cell{cells.length === 1 ? '' : 's'}{cells.length ? ` · worst ${worst} dc after merge` : ''}
        {stats.loading ? ` · ${stats.loading} building…` : ''}
        {stats.missing ? <span className="score-bad"> · {stats.missing} missing</span> : ''}
        {stats.buildMs > 0 ? ` · factories ${(stats.buildMs / 1000).toFixed(1)} s` : ''}
      </div>
    </div>
  );
}

export function TexturesModalBody({ stats }) {
  const list = [...stats.textureList].sort((a, b) => b.bytes - a.bytes);
  return (
    <table>
      <thead><tr><th>texture</th><th>from</th><th>size</th><th>format</th><th>VRAM</th><th>uses</th></tr></thead>
      <tbody>
        {list.map((t) => (
          <tr key={t.uuid}>
            <td className="mono">{t.name}</td>
            <td>{t.item}</td>
            <td className="mono">{t.width}×{t.height}</td>
            <td className={t.format === 'ktx2' ? 'score-good mono' : 'score-mid mono'}>{t.format === 'ktx2' ? 'KTX2' : 'RGBA (uncompressed)'}</td>
            <td className="mono">{mb(t.bytes)}</td>
            <td>{t.uses}</td>
          </tr>
        ))}
        {list.length === 0 && <tr><td colSpan={6} className="muted">no textures in the level</td></tr>}
      </tbody>
    </table>
  );
}
