import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

import * as tar from 'tar';

/** Download a tarball, verify its SRI integrity, extract it with the top-level dir stripped. */
export async function fetchTarball(url, { integrity, cacheFile, extractTo }) {
  await fs.mkdir(path.dirname(cacheFile), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download failed: ${res.status} ${url}`);
  const bytes = Buffer.from(await res.arrayBuffer());
  if (integrity) {
    const [algo, expected] = integrity.split('-', 2);
    const actual = createHash(algo).update(bytes).digest('base64');
    if (actual !== expected) throw new Error(`integrity mismatch for ${url}: expected ${integrity}`);
  }
  await fs.writeFile(cacheFile, bytes);
  await fs.rm(extractTo, { recursive: true, force: true });
  await fs.mkdir(extractTo, { recursive: true });
  await tar.x({ file: cacheFile, cwd: extractTo, strip: 1 });
  return { bytes: bytes.length };
}
