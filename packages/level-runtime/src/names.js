import * as THREE from 'three';

/**
 * Find a node by the name the MANIFEST uses, under the name the LOADER gave it.
 *
 * GLTFLoader passes every node name through `PropertyBinding.sanitizeNodeName`,
 * which drops `[ ] . : /` and turns spaces into underscores, so the bake's
 * `dynamic/<placement>` holder arrives as `dynamicdyn-tuktuk`. `getObjectByName`
 * with the manifest's spelling then finds NOTHING -- and for the life of the
 * runtime it found nothing: every dynamic placement was skipped by the shadow
 * flags, the billboard list, the physics sync and (worse) the material split
 * ahead of the lightmap patch, which is how a dynamic tuk-tuk whose materials
 * the bake had merged with its static twins shipped solid black. The exact
 * name is tried first so a scene assembled by hand still resolves.
 */
export function findNode(root, name) {
  if (!root || !name) return null;
  return root.getObjectByName(name) ?? root.getObjectByName(THREE.PropertyBinding.sanitizeNodeName(name)) ?? null;
}
