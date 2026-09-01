/**
 * The guard-detection regression suite.
 *
 * This exists because the check it covers was wrong for the life of the file
 * and shipped 35 false positives on a 134-prop kit -- it demanded one literal
 * spelling of a DOM guard and counted it file-wide. False positives are worse
 * than no check: they teach the reader to scroll past the warning that matters.
 *
 * So the contract is two-sided, and both sides are asserted here: every guard
 * spelling the shipped kit actually uses must pass CLEAN, and genuinely
 * unguarded DOM access must still warn.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';

import { domReport } from './dom-guard.mjs';

const warns = (source) => {
  const { hits, guarded } = domReport(source);
  return hits.length > 0 && !guarded;
};

test('warns on genuinely unguarded DOM access', () => {
  assert.equal(warns("const c = document.createElement('canvas');\nc.width = 8;"), true);
  assert.equal(warns("const t = new THREE.TextureLoader().load('maps/albedo.webp');"), true);
  assert.equal(warns('const dpr = window.devicePixelRatio;'), true);
});

test('accepts the baseUrl guard', () => {
  // The Node-side gates call the factory with `{}`, so the branch is dead there.
  assert.equal(
    warns(
      'const base = options.baseUrl;\n' +
        'if (base) {\n' +
        "  const t = new THREE.TextureLoader().load(new URL('maps/albedo.webp', base).href);\n" +
        '}',
    ),
    false,
  );
});

test('accepts a DOM predicate held in a variable', () => {
  // ubosot and prang spell it `hasDom`; student-dormitory-block spells it
  // `inBrowser`. A grep for the literal test misses both.
  assert.equal(
    warns(
      "const hasDom = typeof document !== 'undefined';\n" +
        'if (!hasDom) return null;\n' +
        "const cv = document.createElement('canvas');",
    ),
    false,
  );
  assert.equal(
    warns(
      "const inBrowser = typeof document !== 'undefined';\n" +
        "if (!inBrowser) { mat.color.set('#888'); } else { const c = document.createElement('canvas'); }",
    ),
    false,
  );
});

test('accepts the classic inline === form', () => {
  assert.equal(
    warns("if (typeof document === 'undefined') return g;\nconst c = document.createElement('canvas');"),
    false,
  );
});

test('reports nothing for source that never touches the DOM', () => {
  const { hits, guarded } = domReport('const g = new THREE.Group();\ng.name = "x";');
  assert.equal(hits.length, 0);
  assert.equal(guarded, true);
});

test('ignores DOM words inside comments', () => {
  const { hits } = domReport('// document.createElement is what would throw here\n * window.foo\nconst g = 1;');
  assert.equal(hits.length, 0);
});

/**
 * The real regression: run it over every shipped prop. All 134 construct under
 * plain Node -- promote-model.mjs gates on exactly that, and the pack installer
 * built all 134 from the published tarball -- so not one of them may warn.
 */
test('no shipped prop warns', { skip: !fs.existsSync('packages/props/src/models') }, async () => {
  const { readRegistry, shipsAsset } = await import('@thaikit/registry-core');
  const registry = await readRegistry();
  const offenders = [];
  for (const asset of registry.assets.filter(shipsAsset)) {
    if (!asset.model.source || !fs.existsSync(asset.model.source)) continue;
    const source = fs.readFileSync(asset.model.source, 'utf8');
    const { hits, guarded } = domReport(source);
    if (hits.length && !guarded) offenders.push(`${asset.id} (lines ${hits.slice(0, 4).join(', ')})`);
  }
  assert.deepEqual(offenders, [], `props flagged as unguarded:\n  ${offenders.join('\n  ')}`);
});
