import test from 'node:test';
import assert from 'node:assert/strict';
import { slimColliders } from './packs/sidecar.mjs';
test('explicitly disabled decorative collision survives sidecar loading',()=>{
 assert.equal(slimColliders({parts:[],disabled:true}).disabled,true);
 assert.deepEqual(slimColliders({parts:[],disabled:true}).parts,[]);
 assert.equal(slimColliders({parts:[]}).disabled,undefined);
});
