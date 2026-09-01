/**
 * Where a prop's CommonJS bundle is, for the Node-side gates.
 *
 * There are exactly two places one can exist. During authoring,
 * `build-model-module.mjs` writes `scratch/<id>/model.bundle.js` from the
 * scratch source, and that is what the harness renders. Once promoted, the ONLY
 * bundle is the pack installer's, at packs/@thai-kit/<tag>/<id>/model.bundle.js
 * -- the source tree never carries one. `from` picks which.
 */
import fs from 'node:fs/promises';

import { workDir } from '@thaikit/registry-core';

import { packItemBundle } from './packs/index.mjs';

export const THAIKIT_PACK = '@thai-kit';

/**
 * @param {string} id
 * @param {'pack'|'scratch'} from
 * @returns {Promise<string>} absolute path; throws when there is no such bundle
 */
export async function resolveBundle(id, from = 'pack') {
  if (from === 'scratch') {
    const file = `${workDir(id)}/model.bundle.js`;
    await fs.access(file).catch(() => {
      throw new Error(`no scratch bundle for ${id} at ${file}; run scripts/build-model-module.mjs --id ${id}`);
    });
    return file;
  }
  if (from !== 'pack') throw new Error(`unknown bundle source "${from}" (expected pack or scratch)`);
  const file = await packItemBundle(THAIKIT_PACK, id);
  if (!file) {
    throw new Error(
      `${id} is not installed in the ${THAIKIT_PACK} pack; run node scripts/install-pack.mjs --refresh-item ${THAIKIT_PACK}/${id} --add (or --from scratch)`,
    );
  }
  await fs.access(file).catch(() => {
    throw new Error(`${THAIKIT_PACK}/${id} is in packs/index.json but its bundle is missing at ${file}; refresh the item`);
  });
  return file;
}
