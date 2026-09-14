import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { readSkillReview } from './review.mjs';

test('preview review retains failed verdict and explicitly unlimited correction count', async () => {
  const dir=await fs.mkdtemp(path.join(os.tmpdir(),'thaikit-review-'));
  try {
    const specPath=path.join(dir,'spec.json'),statePath=path.join(dir,'state.json');
    await fs.writeFile(specPath,JSON.stringify({reviewHistory:[{estimatedFidelity:.88,visualAcceptanceThreshold:.92,action:'refine-code',summary:'Still improving'}]}));
    await fs.writeFile(statePath,JSON.stringify({status:'active',loops:{total:23,maxTotal:20,perPass:{blockout:23},stopLimitsDisabled:true}}));
    const r=await readSkillReview({specPath,statePath});
    assert.equal(r.preview,true);assert.equal(r.passed,false);assert.equal(r.score,88);assert.equal(r.corrections.total,23);assert.equal(r.corrections.stopLimitsDisabled,true);
    await fs.writeFile(specPath,JSON.stringify({reviewHistory:[{estimatedFidelity:0,summary:'UNSCORED deterministic failure',action:'refine-code'}]}));
    const unknown=await readSkillReview({specPath,statePath});assert.equal(unknown.score,null);assert.equal(unknown.fidelity,null);assert.equal(unknown.passed,false);
    await fs.writeFile(specPath,JSON.stringify({reviewHistory:[{estimatedFidelity:.94,visualAcceptanceThreshold:.92,summary:'Visible score; geometry gate failed',action:'refine-code'}]}));
    const failed=await readSkillReview({specPath,statePath});assert.equal(failed.score,94);assert.equal(failed.passed,false);
    await fs.writeFile(specPath,JSON.stringify({reviewHistory:[{estimatedFidelity:.94,visualAcceptanceThreshold:.92,summary:'Pass accepted with evidence',action:'continue'}]}));
    const accepted=await readSkillReview({specPath,statePath});assert.equal(accepted.score,94);assert.equal(accepted.passed,true);
  } finally {await fs.rm(dir,{recursive:true,force:true});}
});
