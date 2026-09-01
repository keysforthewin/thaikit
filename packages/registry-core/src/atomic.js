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

/**
 * Remove temp files orphaned by a killed writer. Called on server boot.
 *
 * Given a FILE, sweeps `<file>.tmp-*` beside it. Given the models DIRECTORY,
 * sweeps `<dir>/*.tmp-*` and every `<dir>/<id>/*.tmp-*` -- one level down,
 * which is where every `thaikit.json` and `colliders.json` lives.
 */
export async function sweepTempFiles(target) {
  const stat = await fs.stat(target).catch(() => null);
  const swept = [];
  const sweepDir = async (dir, prefix) => {
    const entries = await fs.readdir(dir).catch(() => []);
    for (const entry of entries) {
      if (entry.startsWith(prefix) && /\.tmp-\d+-[0-9a-f]+$/.test(entry)) {
        await fs.unlink(path.join(dir, entry)).catch(() => {});
        swept.push(path.join(dir, entry));
      }
    }
  };
  if (stat?.isDirectory()) {
    await sweepDir(target, '');
    const entries = await fs.readdir(target, { withFileTypes: true }).catch(() => []);
    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('.')) await sweepDir(path.join(target, entry.name), '');
    }
    return swept;
  }
  await sweepDir(path.dirname(target), `${path.basename(target)}.tmp-`);
  return swept;
}
