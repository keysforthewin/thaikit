import test from 'node:test';
import assert from 'node:assert/strict';
import { packedUv } from './pack-lod-atlases.mjs';

test('packed UVs keep source texel centres and bottom-up ownership in all four quadrants', () => {
  for (let page=0;page<8;page++) for (const [x,y] of [[0,0],[2047,2047],[17,900]]) {
    const uv=[(x+.5)/2048,1-(y+.5)/2048];
    const result=packedUv(uv,page);
    assert.equal(result[0]*4096,x+.5+(page%2)*2048);
    assert.equal((1-result[1])*4096,y+.5+Math.floor((page%4)/2)*2048);
  }
});
