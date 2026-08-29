import fs from 'node:fs/promises';
import path from 'node:path';

import { PACKS_DIR, writeFileAtomic } from '@thaikit/registry-core';

export const INDEX_FILE = path.join(PACKS_DIR, 'index.json');

export async function readIndex() {
  try {
    return JSON.parse(await fs.readFile(INDEX_FILE, 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') return { schemaVersion: 1, packs: [] };
    throw err;
  }
}

export async function writeIndex(index) {
  await fs.mkdir(PACKS_DIR, { recursive: true });
  index.packs.sort((a, b) => a.id.localeCompare(b.id));
  await writeFileAtomic(INDEX_FILE, `${JSON.stringify(index, null, 2)}\n`);
}
