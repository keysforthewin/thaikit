// Vendored from the vibe3d CLI package (npm "vibe3d" 0.0.1, MIT), templates/materials.ts.
// vibe3d init writes this file into a consuming app; packs import it as @vibe3d/materials.ts.
import type { Material } from 'three'

export interface MaterialRequest {
  readonly slot: string
  readonly model: string
  readonly variant?: string
}

export interface MaterialHandle<T extends Material = Material> {
  readonly material: T
  release(): void
}

export interface MaterialSource {
  acquire(request: MaterialRequest): MaterialHandle
}

export function borrowedMaterial<T extends Material>(material: T): MaterialHandle<T> {
  return { material, release: () => undefined }
}
