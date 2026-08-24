#!/usr/bin/env node
/**
 * Upload local files to the fal CDN and print their URLs.
 *
 * The fal MCP server is reached over HTTP, and its `upload_file` tool refuses
 * `file_path` on an HTTP transport -- the server has no access to this machine's
 * filesystem. Its only other route is a base64 payload passed through the model's
 * context, which caps out around 30 KB and burns tokens on binary data. This
 * script talks to the fal REST storage API directly instead: no size limit, no
 * base64, and the bytes never touch the conversation.
 *
 * Usage:
 *   node scripts/upload-to-fal.mjs <file> [file...]
 *
 * Needs FAL_KEY in the environment (see .env.example). Node 22 loads .env with
 * --env-file, and npm run upload wires that up.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { basename } from 'node:path';

const INITIATE = 'https://rest.alpha.fal.ai/storage/upload/initiate';

const CONTENT_TYPES = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.glb': 'model/gltf-binary',
  '.mp4': 'video/mp4',
};

function contentTypeFor(file) {
  const ext = path.extname(file).toLowerCase();
  const type = CONTENT_TYPES[ext];
  if (!type) throw new Error(`unknown content type for ${ext} (${file})`);
  return type;
}

async function uploadOne(key, file) {
  const bytes = await fs.readFile(file);
  const contentType = contentTypeFor(file);

  // Step 1: ask fal where to put it. The response carries a public file_url and
  // a signed upload_url; only the signed one accepts the PUT.
  const initRes = await fetch(INITIATE, {
    method: 'POST',
    headers: { Authorization: `Key ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ file_name: basename(file), content_type: contentType }),
  });
  if (!initRes.ok) {
    throw new Error(`initiate failed for ${file}: ${initRes.status} ${await initRes.text()}`);
  }
  const { file_url: url, upload_url: uploadUrl } = await initRes.json();

  // Step 2: the bytes themselves. No auth header here -- the signature in the
  // URL is the credential, and sending the key too makes fal reject it.
  const putRes = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': contentType },
    body: bytes,
  });
  if (!putRes.ok) {
    throw new Error(`upload failed for ${file}: ${putRes.status} ${await putRes.text()}`);
  }

  console.error(`uploaded ${file} (${bytes.length} bytes) -> ${url}`);
  return { file, url, bytes: bytes.length, contentType };
}

async function main() {
  const files = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  if (!files.length) {
    console.error('usage: node scripts/upload-to-fal.mjs <file> [file...]');
    process.exit(2);
  }

  const key = process.env.FAL_KEY;
  if (!key) {
    console.error('FAL_KEY is not set. Copy .env.example to .env and fill it in,');
    console.error('then run via: npm run upload -- <file>...');
    process.exit(2);
  }

  // Sequential: fal rate-limits the storage API, and a handful of reference
  // images is never the slow part of a generation run.
  const uploads = [];
  for (const file of files) uploads.push(await uploadOne(key, file));

  process.stdout.write(JSON.stringify({ ok: true, uploads }) + '\n');
}

main().catch((err) => {
  console.error(err.message);
  process.stdout.write(JSON.stringify({ ok: false, error: err.message }) + '\n');
  process.exit(1);
});
