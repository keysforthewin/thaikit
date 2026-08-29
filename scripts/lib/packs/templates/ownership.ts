// Vendored from the vibe3d CLI package (npm "vibe3d" 0.0.1, MIT), templates/ownership.ts.
// vibe3d init writes this file into a consuming app; packs import it as @vibe3d/ownership.ts.
import type { BufferGeometry, Material, Texture } from 'three'

export class ResourceScope {
  readonly #geometries = new Set<BufferGeometry>()
  readonly #materials = new Set<Material>()
  readonly #textures = new Set<Texture>()
  #disposed = false

  ownGeometry<T extends BufferGeometry>(geometry: T): T {
    this.#geometries.add(geometry)
    return geometry
  }

  ownMaterial<T extends Material>(material: T): T {
    this.#materials.add(material)
    return material
  }

  ownTexture<T extends Texture>(texture: T): T {
    this.#textures.add(texture)
    return texture
  }

  dispose(): void {
    if (this.#disposed) return
    this.#disposed = true
    for (const texture of this.#textures) texture.dispose()
    for (const material of this.#materials) material.dispose()
    for (const geometry of this.#geometries) geometry.dispose()
  }
}
