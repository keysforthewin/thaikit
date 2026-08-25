/**
 * Carry img2threejs's own review verdict into the registry.
 *
 * thaikit has no rubric and no judge: re-scoring a model here would be a second
 * opinion with no evidence behind it. But the skill DOES score, in detail and
 * with evidence, and until now nothing carried that across -- the drawer's
 * quality tab was shaped exactly around this data and was filled in by hand or
 * not at all, which is worse than empty. A number nobody generated still looks
 * like a measurement.
 *
 * The verdict lives in two files and neither is optional reading:
 *
 * - `object-sculpt-spec.json` → `reviewHistory[]`, one entry per pass, each with
 *   `estimatedFidelity`, `layerScores`, `featureReviews[]` and the `action` that
 *   unlocked the next pass. This is the quality record.
 * - `.img2threejs/state.json` → `loops`, the correction counts against their
 *   ceilings. This is the effort record, and a prop that reached its score on the
 *   last correction of ten is not the same prop as one that reached it on the
 *   first.
 *
 * Everything is read defensively: the shape belongs to the skill, which is a
 * shared checkout that moves independently of this repo. A field that is not
 * there yet must degrade to "unknown", never to a confident zero.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { REPO_ROOT, toRepoRelative } from '@thaikit/registry-core';

async function readJson(file) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'));
  } catch {
    return null;
  }
}

const isNumber = (value) => typeof value === 'number' && Number.isFinite(value);

/**
 * img2threejs writes absolute paths; the registry stores repo-relative POSIX
 * ones so the same entry resolves on the host and inside the container.
 */
function asRepoPath(value) {
  if (typeof value !== 'string' || !value) return null;
  const absolute = path.isAbsolute(value) ? value : path.resolve(REPO_ROOT, value);
  const relative = toRepoRelative(absolute);
  // A path outside the repo cannot be served, and recording it would put a
  // broken image in the UI rather than an honest blank.
  return relative.startsWith('..') ? null : relative;
}

export async function readSkillReview({ specPath, statePath }) {
  const spec = specPath ? await readJson(specPath) : null;
  const state = statePath ? await readJson(statePath) : null;
  if (!spec && !state) return null;

  const history = Array.isArray(spec?.reviewHistory) ? spec.reviewHistory : [];
  const last = history[history.length - 1] ?? null;

  // A pass counts as complete when its review said `continue` -- that is the
  // literal thing that unlocks the next one. The state file's own passHistory is
  // rewritten per pass and holds only the current one, so it cannot answer this.
  const passesComplete = [
    ...new Set(
      history
        .filter((entry) => entry?.action === 'continue' && typeof entry.passId === 'string')
        .map((entry) => entry.passId),
    ),
  ];

  const fidelity = isNumber(last?.estimatedFidelity)
    ? last.estimatedFidelity
    : isNumber(last?.aiVisionScore)
      ? last.aiVisionScore
      : null;
  const bar = isNumber(last?.visualAcceptanceThreshold)
    ? last.visualAcceptanceThreshold
    : isNumber(spec?.qualityTargets?.targetFidelity)
      ? spec.qualityTargets.targetFidelity
      : 0.85;

  const loops = state?.loops ?? {};
  const perPass = loops.perPass && typeof loops.perPass === 'object'
    ? Object.values(loops.perPass).reduce((a, n) => a + (isNumber(n) ? n : 0), 0)
    : 0;

  return {
    fidelity,
    score: fidelity == null ? null : Math.round(fidelity * 1000) / 10,
    threshold: Math.round(bar * 100),
    passed: fidelity != null && fidelity >= bar,
    passesComplete,
    layerScores: last?.layerScores && typeof last.layerScores === 'object' ? last.layerScores : {},
    featureReviews: Array.isArray(last?.featureReviews) ? last.featureReviews : [],
    corrections: {
      perPass,
      total: isNumber(loops.total) ? loops.total : 0,
      maxTotal: isNumber(loops.maxTotal) && loops.maxTotal > 0 ? loops.maxTotal : 10,
    },
    decision: typeof last?.action === 'string' ? last.action : '',
    critique: typeof last?.summary === 'string' ? last.summary : '',
    comparisonImage: asRepoPath(last?.visualEvidence?.comparisonImage),
    judgedAt: typeof last?.timestamp === 'string' ? new Date(last.timestamp).toISOString() : null,
  };
}
