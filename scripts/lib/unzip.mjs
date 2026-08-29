/**
 * A minimal ZIP reader: entries out of a Buffer, with no dependency.
 *
 * The only thing that needs this is the sky panel's six-face upload, where the
 * archive is a handful of images somebody exported from a skybox tool. Node has
 * no zip in its standard library and the one copy of `fflate` on disk is a
 * TRANSITIVE client dependency hoisted here by chance -- importing that from
 * the server would break the first time drei stopped pulling it in. Stored (0)
 * and deflate (8) are the only methods anything writes; anything else is
 * reported by name rather than silently skipped.
 *
 * Reads the CENTRAL DIRECTORY rather than walking local headers, because a
 * streamed archive writes its sizes to a data descriptor AFTER the payload and
 * the local header's copies are then zero.
 */
import zlib from 'node:zlib';

const EOCD = 0x06054b50;
const CENTRAL = 0x02014b50;
const LOCAL = 0x04034b50;

/** Find the end-of-central-directory record, scanning back over its comment. */
function findEocd(buf) {
  const min = Math.max(0, buf.length - 0xffff - 22);
  for (let i = buf.length - 22; i >= min; i -= 1) {
    if (buf.readUInt32LE(i) === EOCD) return i;
  }
  return -1;
}

/**
 * @param {Buffer} buf
 * @returns {{name: string, data: Buffer}[]} every file entry, directories dropped.
 */
export function unzipSync(buf) {
  if (!Buffer.isBuffer(buf) || buf.length < 22) throw new Error('not a zip archive');
  const eocd = findEocd(buf);
  if (eocd < 0) throw new Error('not a zip archive (no end-of-central-directory record)');
  const count = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16);
  if (p === 0xffffffff) throw new Error('zip64 archives are not supported');

  const out = [];
  for (let i = 0; i < count; i += 1) {
    if (p + 46 > buf.length || buf.readUInt32LE(p) !== CENTRAL) throw new Error('corrupt zip central directory');
    const method = buf.readUInt16LE(p + 10);
    const compressed = buf.readUInt32LE(p + 20);
    const uncompressed = buf.readUInt32LE(p + 24);
    const nameLen = buf.readUInt16LE(p + 28);
    const extraLen = buf.readUInt16LE(p + 30);
    const commentLen = buf.readUInt16LE(p + 32);
    const localAt = buf.readUInt32LE(p + 42);
    const name = buf.toString('utf8', p + 46, p + 46 + nameLen);
    p += 46 + nameLen + extraLen + commentLen;

    if (name.endsWith('/')) continue;
    if (compressed === 0xffffffff || localAt === 0xffffffff) throw new Error(`zip64 entry "${name}" is not supported`);
    if (buf.readUInt32LE(localAt) !== LOCAL) throw new Error(`corrupt zip entry "${name}"`);
    // The local header's name and extra lengths are its own -- the extra field
    // legitimately differs from the central directory's copy.
    const start = localAt + 30 + buf.readUInt16LE(localAt + 26) + buf.readUInt16LE(localAt + 28);
    const raw = buf.subarray(start, start + compressed);
    let data;
    if (method === 0) data = Buffer.from(raw);
    else if (method === 8) data = zlib.inflateRawSync(raw);
    else throw new Error(`zip entry "${name}" uses unsupported compression method ${method}`);
    if (data.length !== uncompressed) throw new Error(`zip entry "${name}" unpacked to ${data.length} bytes, expected ${uncompressed}`);
    out.push({ name, data });
  }
  return out;
}
