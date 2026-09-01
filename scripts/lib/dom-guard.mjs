/**
 * Whether a prop's source still constructs outside a browser.
 *
 * Lives here rather than inside the vibe3d exporter so it can be tested: the
 * first version of this check reported 35 of 134 shipped props as unguarded
 * when every one of them was fine, and nothing caught that because nothing
 * exercised it. See dom-guard.test.mjs for the spellings it must accept.
 */
/**
 * Does this source still construct outside a browser?
 *
 * Vibe3D captures previews and exports GLBs headlessly, where a bare
 * `document.createElement` throws. thaikit's props already handle that, in
 * THREE idiomatic spellings, and the first version of this check knew only one
 * of them -- it demanded the literal `typeof document === 'undefined'` and
 * counted it file-wide, so it reported 35 of 134 props as unguarded when every
 * one of them was fine. Those false positives are worse than no check: they
 * trained the reader to scroll past the warning that matters.
 *
 * The three blessed patterns, all of which appear in the shipped kit:
 *
 *   1. `const base = options.baseUrl; if (base) { ...load... }` -- the Node-side
 *      gates call the factory with `{}`, so the load never runs. CLAUDE.md names
 *      this the better pattern where the texture is a shipped map.
 *   2. `const hasDom = typeof document !== 'undefined'; if (!hasDom) return null;`
 *      -- the same test held in a variable, which a grep for the literal misses.
 *   3. `const inBrowser = typeof document !== 'undefined'; if (!inBrowser) {...}`
 *      -- the same thing again under another name.
 *
 * So: find the DOM references, then find whether the file establishes a DOM or
 * baseUrl predicate at all. This is still a heuristic and still only warns --
 * the real proof is construction, which `promote-model.mjs` already performs
 * headlessly before any prop is allowed into `assets/`, and which the pack
 * installer repeats on every item it builds. What this catches is a source that
 * touches the DOM having never established a guard anywhere, which is the shape
 * of the bug worth looking at.
 */
export function domReport(source) {
  const lines = source.split('\n');
  const hits = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*(?:\/\/|\*|\/\*)/.test(line)) continue;
    if (/\b(?:document|window|navigator)\s*\./.test(line) || /new\s+THREE\.TextureLoader\b/.test(line)) {
      hits.push(i + 1);
    }
  }
  if (!hits.length) return { hits, guarded: true };

  // A DOM predicate in either direction, named or inline.
  const domGuard = /typeof\s+(?:document|window)\s*[!=]==?\s*['"]undefined['"]/.test(source);
  // A load gated on the caller having supplied a base URL. The Node-side gates
  // pass `{}`, so an ungiven baseUrl is what makes the branch dead there.
  const baseGuard = /\boptions\.baseUrl\b/.test(source) && /\bnew URL\(/.test(source);

  return { hits, guarded: domGuard || baseGuard };
}

