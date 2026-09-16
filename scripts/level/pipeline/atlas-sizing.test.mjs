import test from 'node:test';
import assert from 'node:assert/strict';
import { atlasSizing } from './atlas-sizing.mjs';
const coverage = {ok:true, size:64, texelsPerMeter:12, atlasCount:2, charts:2, objects:[{worldArea:25,lightmapPixelArea:3600}]};
const layout = {size:64,count:2,rectangles:[{width:50,height:50},{width:40,height:40}]};
test('accounts separately for density, padding, packing and mip memory', () => {
 const r=atlasSizing(coverage,layout);
 assert.equal(r.targetSurfacePixels,3600);
 assert.equal(r.paddedRectanglePixels,4100);
 assert.equal(r.areaLowerBoundPages,1);
 assert.equal(r.rectangleLowerBoundPages,2);
 assert.equal(r.allocatedPixels,8192);
 assert.equal(r.rgba8BytesWithMips,43688);
 const low=atlasSizing({...coverage,texelsPerMeter:6},layout);
 assert.equal(low.targetSurfacePixels,r.targetSurfacePixels/4);
});
test('refuses failed or mismatched layout evidence', () => {
 assert.throws(()=>atlasSizing({...coverage,ok:false},layout),/passing/);
 assert.throws(()=>atlasSizing(coverage,{...layout,count:1}),/Inconsistent/);
 assert.throws(()=>atlasSizing(coverage,{...layout,rectangles:[{width:200,height:200}]}),/accounting/);
});
