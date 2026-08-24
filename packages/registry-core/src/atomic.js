/**
 * Crash-safe file writing.
 *
 * rename() is atomic only within a single filesystem, and this repo is a Docker
 * bind mount -- writing the temp file to /tmp and renaming across the boundary
 * silently degrades to copy+unlink, which is not atomic. So the temp file always
 * lands in the SAME DIRECTORY as its target.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

export async function writeFileAtomic(filePath, contents) {
  const dir = path.dirname(filePath);
  const tmp = path.join(
    dir,
    `${path.basename(filePath)}.tmp-${process.pid}-${crypto.randomBytes(4).toString('hex')}`,
  );

  let handle;
  try {
    handle = await fs.open(tmp, 'w');
    await handle.writeFile(contents);
    // fsync before rename, or a power loss can leave a renamed-but-empty file.
    await handle.sync();
    await handle.close();
    handle = null;
    await fs.rename(tmp, filePath);
  } catch (err) {
    if (handle) await handle.close().catch(() => {});
    await fs.unlink(tmp).catch(() => {});
    throw err;
  }
}

/** Remove temp files orphaned by a killed writer. Called on server boot. */
export async function sweepTempFiles(filePath) {
  const dir = path.dirname(filePath);
  const prefix = `${path.basename(filePath)}.tmp-`;
  const entries = await fs.readdir(dir).catch(() => []);
  const swept = [];
  for (const entry of entries) {
    if (entry.startsWith(prefix)) {
      await fs.unlink(path.join(dir, entry)).catch(() => {});
      swept.push(entry);
    }
  }
  return swept;
}
