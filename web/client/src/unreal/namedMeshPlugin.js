/** Preserve mesh names where Unreal Interchange looks for UCX collision. */
export function namedMeshPlugin() {
  return { writeMesh(object, definition) { definition.name = object.name; } };
}
