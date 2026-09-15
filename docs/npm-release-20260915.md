# npm release — 2026-09-15

Status: all three packages are published under npm `latest`. Registry versions and integrity hashes were verified against the tested tarballs on 2026-09-15 at 17:33 UTC.

| Package | Version | Change |
|---|---|---|
| `@thai-kit/level-schema` | `0.2.2` | Validate manifest v2 with multiple lightmap atlases while retaining v1 single-image support. |
| `@thai-kit/level-runtime` | `0.2.4` | Load and bind each material to its lightmap atlas, apply per-page lighting ranges, and dispose embedded textures on failed loads. Requires schema `^0.2.2`. |
| `@thai-kit/props` | `0.4.3` | Ship the current 180-model kit, including per-asset collider budgets and the hand-tuned spirit-house and canopy compounds. |

## Validation

- Container test suite: 228 passed, 0 failed, 1 skipped (the optional `soi-test` baked fixture is absent).
- Props release verification: 180 models, 180 previews, 59 binary artifacts; all declared content hashes and required files verified.
- Actual npm tarballs inspected and installed together in an isolated consumer directory.
- The packed runtime loads the completed BangkokSoi low and medium GLBs headlessly: manifest v2, 30 atlas pages, 210 cells and 16 spawns in each. Browser entry import and the installed 180-model props registry also pass.
- The same runtime source passed Windows Chrome GPU smoke and player-height checks for both baked tiers before release preparation.
- Package versions and the workspace lockfile are updated together. Unreal export sidecars are outside this release.

Tarballs, integrity hashes and check logs are in `scratch/release-20260915/`. Publish order is schema, runtime, then props; all use npm's `latest` tag. Baked GLBs are separate files and are not included in these npm packages.
