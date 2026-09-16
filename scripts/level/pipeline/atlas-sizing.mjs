/** Capacity accounting from a successful layout, without a lighting render. */
export function atlasSizing(coverage, layout) {
  if (coverage.ok !== true || coverage.failures?.length) throw new Error('Atlas sizing requires a passing layout');
  const size = coverage.size, density = coverage.texelsPerMeter, pages = coverage.atlasCount;
  if (!(size > 0 && density > 0 && pages > 0) || layout.size !== size || layout.count !== pages) throw new Error('Inconsistent atlas dimensions');
  const surfaceArea = coverage.objects.reduce((n, o) => n + o.worldArea, 0);
  const chartPixels = coverage.objects.reduce((n, o) => n + o.lightmapPixelArea, 0);
  const paddedRectanglePixels = layout.rectangles.reduce((n, r) => n + r.width * r.height, 0);
  const allocatedPixels = pages * size ** 2;
  if (![surfaceArea, chartPixels, paddedRectanglePixels].every(Number.isFinite) || paddedRectanglePixels > allocatedPixels) throw new Error('Invalid atlas accounting');
  return {
    texelsPerMeter: density, pageSize: size, pages, eligibleSurfaceM2: surfaceArea,
    targetSurfacePixels: surfaceArea * density ** 2,
    chartPixels, paddedRectanglePixels, allocatedPixels,
    rectangleOccupancy: paddedRectanglePixels / allocatedPixels,
    surfaceOccupancy: chartPixels / allocatedPixels,
    areaLowerBoundPages: Math.ceil(surfaceArea * density ** 2 / size ** 2),
    rectangleLowerBoundPages: Math.ceil(paddedRectanglePixels / size ** 2),
    rgba8BytesWithMips: pages * Array.from({length: Math.floor(Math.log2(size)) + 1}, (_, i) => Math.max(1, Math.floor(size / 2 ** i)) ** 2 * 4).reduce((a, b) => a + b, 0),
    charts: coverage.charts,
    status: 'layout-validated',
    note: 'Page count is a valid packing at the requested density, not proof of a globally minimal packing. Area bounds ignore chart shape and placement. Lighting and final compressed size have not been measured.',
  };
}
