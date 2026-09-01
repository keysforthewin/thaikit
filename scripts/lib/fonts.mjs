/**
 * Does this machine have a Thai font for a canvas to draw with?
 *
 * Several props bake their legend into a canvas texture at construction time
 * (a kilometre stone IS its distance and its province name), and headless
 * Chromium draws with whatever fontconfig can resolve. The image installs
 * fonts-thai-tlwg for exactly this, but a container built before that line
 * was added still answers `:lang=th` with a Liberation face -- and then every
 * Thai glyph in a thumbnail is a tofu box, on a valid PNG that looks like a
 * finished render. This asks fontconfig the same question Chromium will.
 *
 * Returns { ok, family, reason }. Never throws; a caller decides whether a
 * missing font is fatal (a shipped thumbnail) or a warning (pack previews,
 * which must never fail an install).
 */
import { execFileSync } from 'node:child_process';

const REBUILD_HINT =
  'Rebuild the image so fonts-thai-tlwg lands: ' +
  '`docker compose build web && docker compose up -d --force-recreate web`, ' +
  'then check with `docker exec thaikit-web fc-match ":lang=th"`.';

export function checkThaiFont() {
  let family;
  try {
    family = execFileSync('fc-match', ['-f', '%{family}', ':lang=th'], {
      encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], timeout: 5000,
    }).trim();
  } catch {
    return { ok: false, family: null, reason: `fc-match is not available, so no Thai font can be confirmed. ${REBUILD_HINT}` };
  }
  // fontconfig always answers something; with no Thai face installed the answer
  // is the closest Latin one, which draws Thai as boxes.
  if (!family || /liberation|dejavu/i.test(family)) {
    return { ok: false, family, reason: `fontconfig resolves :lang=th to "${family || 'nothing'}", which has no Thai glyphs. ${REBUILD_HINT}` };
  }
  return { ok: true, family, reason: null };
}
