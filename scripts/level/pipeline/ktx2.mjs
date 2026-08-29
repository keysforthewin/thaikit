/**
 * KTX2 / Basis Universal encoding through the KTX-Software `ktx` CLI.
 *
 * gltf-transform 4.x moved its toktx transform into the CLI package, and that
 * package is a lot of dependency for one shell-out. This does the shell-out:
 * PNG in, KTX2 out, with the encoder chosen per texture role. ETC1S for colour
 * (smallest), UASTC for data maps (normals and roughness do not survive the
 * ETC1S palette). `ktx` lives wherever the user put it -- the doctor probe
 * says where.
 */
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import sharp from 'sharp';

const run = promisify(execFile);

const CANDIDATES = [
  process.env.THAIKIT_KTX_BIN,
  'ktx',
  path.join(os.homedir(), '.local/opt/ktx/bin/ktx'),
  '/usr/local/bin/ktx',
  '/usr/bin/ktx',
].filter(Boolean);

let resolved = null;

/** The ktx binary, or null with a message about how to get one. */
export async function findKtx() {
  if (resolved) return resolved;
  for (const bin of CANDIDATES) {
    try {
      const { stdout } = await run(bin, ['--version']);
      resolved = { bin, version: stdout.trim() };
      return resolved;
    } catch { /* next */ }
  }
  return null;
}

export const KTX_INSTALL_HINT =
  'KTX-Software is not installed. Download KTX-Software-4.4.x-Linux-x86_64.deb from ' +
  'https://github.com/KhronosGroup/KTX-Software/releases and either `sudo dpkg -i` it or ' +
  '`dpkg-deb -x` it into ~/.local/opt/ktx (no root needed); or set THAIKIT_KTX_BIN.';

/**
 * Encode one image.
 *
 * @param {Uint8Array} bytes  PNG / JPEG / WebP
 * @param {object} opts
 * @param {'etc1s'|'uastc'} opts.mode
 * @param {boolean} opts.srgb   colour data (base colour, emissive) vs linear data
 * @param {boolean} opts.mipmaps
 * @param {number}  opts.maxSize
 */
export async function encodeKtx2(bytes, { mode = 'etc1s', srgb = true, mipmaps = true, maxSize = 2048, quality = 160, uastcLevel = 2, zstd = 18 } = {}) {
  const ktx = await findKtx();
  if (!ktx) throw new Error(KTX_INSTALL_HINT);
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'thaikit-ktx-'));
  try {
    // Block compression wants dimensions that are multiples of 4, and a mip
    // chain wants power-of-two friendliness; resize to the nearest multiple of
    // 4 within the cap, never enlarging.
    const img = sharp(bytes, { failOn: 'none' });
    const meta = await img.metadata();
    let w = Math.min(meta.width ?? 4, maxSize);
    let h = Math.min(meta.height ?? 4, maxSize);
    w = Math.max(4, Math.floor(w / 4) * 4);
    h = Math.max(4, Math.floor(h / 4) * 4);
    const src = path.join(dir, 'in.png');
    const out = path.join(dir, 'out.ktx2');
    await img.resize(w, h, { fit: 'fill' }).ensureAlpha().png().toFile(src);

    const args = ['create', '--format', srgb ? 'R8G8B8A8_SRGB' : 'R8G8B8A8_UNORM', '--assign-tf', srgb ? 'srgb' : 'linear'];
    if (mipmaps) args.push('--generate-mipmap');
    if (mode === 'etc1s') args.push('--encode', 'basis-lz', '--qlevel', String(Math.max(1, Math.min(255, Math.round(quality)))));
    else args.push('--encode', 'uastc', '--uastc-quality', String(uastcLevel), '--zstd', String(zstd));
    args.push(src, out);
    try {
      await run(ktx.bin, args, { maxBuffer: 64 * 1024 * 1024 });
    } catch (err) {
      throw new Error(`ktx create failed: ${err.stderr?.toString().trim() || err.message}`);
    }
    const encoded = await fs.readFile(out);
    return { bytes: new Uint8Array(encoded), width: w, height: h, mode };
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
}

/**
 * Encode six cube faces into ONE KTX2 with `faceCount: 6`.
 *
 * This is the thing that makes a compressed sky cubemap possible at all. Six
 * separate KTX2 files cannot be assembled into a `CubeTexture` -- three has no
 * loader that stitches compressed 2D images into one -- but `ktx create
 * --cubemap` writes a single container holding all six, and three's
 * `KTX2Loader` returns a `CompressedCubeTexture` for it without being asked.
 *
 * Two constraints the CLI enforces and we would otherwise discover as a
 * failure a long way downstream: every face must be square, and all six must
 * be the same size.
 *
 * @param {Uint8Array[]} faces  px, nx, py, ny, pz, nz -- in that order, which
 *                              is the order the KTX2 face index means
 */
export async function encodeKtx2Cubemap(faces, { mode = 'etc1s', srgb = true, mipmaps = true, maxSize = 1024, quality = 160, uastcLevel = 2, zstd = 18 } = {}) {
  const ktx = await findKtx();
  if (!ktx) throw new Error(KTX_INSTALL_HINT);
  if (faces.length !== 6) throw new Error(`a cubemap needs 6 faces, got ${faces.length}`);
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'thaikit-ktxcube-'));
  try {
    // One edge for all six: the first face's, squared, clamped and rounded down
    // to a multiple of 4 for block compression.
    const first = await sharp(faces[0], { failOn: 'none' }).metadata();
    let edge = Math.min(Math.max(first.width ?? 4, first.height ?? 4), maxSize);
    edge = Math.max(4, Math.floor(edge / 4) * 4);

    const paths = [];
    for (let i = 0; i < 6; i += 1) {
      const p = path.join(dir, `face${i}.png`);
      await sharp(faces[i], { failOn: 'none' }).resize(edge, edge, { fit: 'fill' }).ensureAlpha().png().toFile(p);
      paths.push(p);
    }
    const out = path.join(dir, 'out.ktx2');

    const args = ['create', '--format', srgb ? 'R8G8B8A8_SRGB' : 'R8G8B8A8_UNORM', '--assign-tf', srgb ? 'srgb' : 'linear', '--cubemap'];
    if (mipmaps) args.push('--generate-mipmap');
    if (mode === 'etc1s') args.push('--encode', 'basis-lz', '--qlevel', String(Math.max(1, Math.min(255, Math.round(quality)))));
    else args.push('--encode', 'uastc', '--uastc-quality', String(uastcLevel), '--zstd', String(zstd));
    args.push(...paths, out);
    try {
      await run(ktx.bin, args, { maxBuffer: 64 * 1024 * 1024 });
    } catch (err) {
      throw new Error(`ktx create --cubemap failed: ${err.stderr?.toString().trim() || err.message}`);
    }
    const encoded = await fs.readFile(out);
    return { bytes: new Uint8Array(encoded), width: edge, height: edge, faces: 6, mode };
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
}
