/**
 * The baked level's manifest, read without three: from a parsed glTF scene's
 * userData in the browser, or straight from the GLB's JSON chunk on a server.
 */
import { ManifestExtras } from '@thaikit/level-schema';

const MAGIC = 0x46546c67;

/** Parse only the JSON chunk of a GLB (ArrayBuffer | Uint8Array). */
export function readGlbJson(data) {
  const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (view.getUint32(0, true) !== MAGIC) throw new Error('not a GLB');
  const length = view.getUint32(12, true);
  const type = view.getUint32(16, true);
  if (type !== 0x4e4f534a) throw new Error('first GLB chunk is not JSON');
  const text = new TextDecoder().decode(bytes.subarray(20, 20 + length));
  return JSON.parse(text);
}

export function manifestFromJson(json) {
  const scene = json.scenes?.[json.scene ?? 0];
  const raw = scene?.extras?.thaikitManifest;
  if (!raw) throw new Error('this GLB has no scene.extras.thaikitManifest; it is not a baked thaikit level');
  return ManifestExtras.parse(raw);
}

export function manifestFromScene(sceneObject) {
  const raw = sceneObject?.userData?.thaikitManifest;
  if (!raw) throw new Error('scene.userData.thaikitManifest is missing; was this GLB baked by the level editor?');
  return ManifestExtras.parse(raw);
}
