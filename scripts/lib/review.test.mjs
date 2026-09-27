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

test('refining an accepted pass reopens it without losing earlier reviews or correction counts', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'thaikit-review-'));
  try {
    const specPath = path.join(dir, 'spec.json');
    const statePath = path.join(dir, 'state.json');
    const history = [
      { passId: 'blockout', action: 'continue', estimatedFidelity: .9 },
      { passId: 'optimization-pass', action: 'continue', estimatedFidelity: .9 },
      { passId: 'optimization-pass', action: 'refine-code', estimatedFidelity: .95 },
    ];
    await fs.writeFile(specPath, JSON.stringify({ reviewHistory: history }));
    await fs.writeFile(statePath, JSON.stringify({
      status: 'active', currentPass: 'optimization-pass',
      loops: { total: 8, maxTotal: 10, perPass: { blockout: 6, 'optimization-pass': 2 } },
    }));
    const draft = await readSkillReview({ specPath, statePath });
    assert.deepEqual(draft.passesComplete, ['blockout']);
    assert.equal(draft.score, 95);
    assert.equal(draft.passed, false);
    assert.equal(draft.corrections.perPass, 2);
    assert.equal(draft.corrections.total, 8);
    assert.deepEqual(JSON.parse(await fs.readFile(specPath, 'utf8')).reviewHistory, history);

    history.push({ passId: 'optimization-pass', action: 'continue', estimatedFidelity: .95 });
    await fs.writeFile(specPath, JSON.stringify({ reviewHistory: history }));
    const accepted = await readSkillReview({ specPath, statePath });
    assert.deepEqual(accepted.passesComplete, ['blockout', 'optimization-pass']);
    assert.equal(accepted.passed, true);
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
});
