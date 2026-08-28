/**
 * The GLB container, read and written without a scene graph.
 *
 * A level file is a GLB and the server needs its JSON chunk -- the scene extras
 * that name it, its placements, its lights -- without parsing geometry. Twelve
 * bytes of header, a JSON chunk, an optional BIN chunk: cheap to read, and
 * cheap to rewrite when all that changes is a timestamp in the extras.
 */
const MAGIC = 0x46546c67; // 'glTF'
const CHUNK_JSON = 0x4e4f534a;
const CHUNK_BIN = 0x004e4942;

/** Split a GLB into { json, bin } where bin may be null. */
export function parseGlb(buffer) {
  const buf = Buffer.isBuffer(buffer) ? buffer : Buffer.from(buffer);
  if (buf.length < 12 || buf.readUInt32LE(0) !== MAGIC) throw new Error('not a GLB: bad magic');
  const version = buf.readUInt32LE(4);
  if (version !== 2) throw new Error(`unsupported GLB version ${version}`);
  const total = buf.readUInt32LE(8);
  if (total > buf.length) throw new Error('truncated GLB');

  let offset = 12;
  let json = null;
  let bin = null;
  while (offset + 8 <= total) {
    const length = buf.readUInt32LE(offset);
    const type = buf.readUInt32LE(offset + 4);
    const data = buf.subarray(offset + 8, offset + 8 + length);
    if (type === CHUNK_JSON) json = JSON.parse(data.toString('utf8'));
    else if (type === CHUNK_BIN) bin = data;
    offset += 8 + length;
  }
  if (!json) throw new Error('GLB has no JSON chunk');
  return { json, bin };
}

export function readGlbJson(buffer) {
  return parseGlb(buffer).json;
}

const pad = (n, to) => (to - (n % to)) % to;

/** Assemble a GLB from a glTF JSON object and an optional BIN buffer. */
export function buildGlb(json, bin = null) {
  const jsonBytes = Buffer.from(JSON.stringify(json), 'utf8');
  const jsonPad = pad(jsonBytes.length, 4);
  const chunks = [Buffer.alloc(8), jsonBytes, Buffer.alloc(jsonPad, 0x20)];
  chunks[0].writeUInt32LE(jsonBytes.length + jsonPad, 0);
  chunks[0].writeUInt32LE(CHUNK_JSON, 4);
  if (bin && bin.length) {
    const binPad = pad(bin.length, 4);
    const head = Buffer.alloc(8);
    head.writeUInt32LE(bin.length + binPad, 0);
    head.writeUInt32LE(CHUNK_BIN, 4);
    chunks.push(head, bin, Buffer.alloc(binPad, 0));
  }
  const body = Buffer.concat(chunks);
  const header = Buffer.alloc(12);
  header.writeUInt32LE(MAGIC, 0);
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(12 + body.length, 8);
  return Buffer.concat([header, body]);
}

/** Replace the JSON chunk, keeping the BIN chunk byte for byte. */
export function rewriteGlbJson(buffer, mutate) {
  const { json, bin } = parseGlb(buffer);
  const next = mutate(json) ?? json;
  return buildGlb(next, bin);
}

/** The scene extras of a level GLB, or null when it is not one. */
export function levelExtrasOf(json) {
  const scene = json.scenes?.[json.scene ?? 0];
  return scene?.extras?.thaikitLevel ?? null;
}
