# Walkable shrine porch and bamboo canopy

The Chinese Shrine and Bamboo Half-Pipe Canopy Module now use hand-tuned
compounds that preserve passage beneath their roofs. Their model geometry is
unchanged. Both are static props.

## Parts and budgets

- **Chinese Shrine: 46 parts, budget 48.** Seventeen cylinders cover eight
  independent columns, eight stone drum bases and the censer. Twenty-nine boxes
  cover two plinth steps, the closed hall, two side walls, the overhead front
  beam and 23 roof/ceiling sections. The porch is open; the closed hall stays
  solid. The two dragon-wrapped front columns use a 0.51 m radius; the other
  shafts use 0.30 m, with separate 0.42 m bases.
- **Bamboo canopy: 24 parts, budget 24.** Four cylinders cover the individual
  posts (0.085 m radius, 2.37 m tall); twenty boxes cover beams and roof layers.
  The two solid post walls and the full-width low slab were removed. The two
  lowest beam proxy undersides sit at 1.82 m, 3 cm inside the round bamboo,
  allowing a 1.8 m player to pass underneath.

`physics.maxColliderParts` is an optional per-asset budget override. It is
validated as an integer from 1 to 128; dynamic bodies use half the stated
budget. Assets without an override keep their existing class limits. It can
be edited with `scripts/edit-assets.mjs` without staling the model.

## Measured results

| Prop | Footprint coverage | p95 height error | Maximum error | Ledges |
| --- | ---: | ---: | ---: | ---: |
| Chinese Shrine | 98.26% | 0.2847 m | 0.6997 m | 8/8 |
| Bamboo canopy | 99.90% | 0.0947 m | 0.7941 m | 8/8 |

The shrine's maximum occurs at the edge of a decorative ridge-end collider,
around local x ±0.55 m, z −4.15 m. Ninety-eight of 10,114 samples hitting both
geometry and collision overshoot by more than 0.30 m (0.97%). Its roof remains
a stepped approximation; p95 is not an exact surface fit. The canopy maximum
occurs at four samples near x −1.77 m, z ±0.14–0.17 m, where a roof proxy bridges
a small gap above a lower beam. The remaining canopy samples overshoot by less
than 0.30 m. Neither maximum describes the walkable space beneath the roof.

Before this change, shrine/canopy p95 errors were 0.3635/0.2830 m and ledge
counts were 3/8 and 7/8. Top-down coverage cannot establish under-roof clearance,
so it was checked separately with capsule tests.

## Validation and delivery

- Inspected both compounds in the localhost:3733 preview with colliders visible.
- Rapier tests use a 1.8 m tall, 0.7 m wide capsule to check entry and circulation
  in the shrine porch, crossing the canopy in both directions, all individual
  supports, and the closed hall. Both compounds pass the current shipping gates.
- All 16 targeted collider/registry tests passed.
- Refreshed both installed pack items. Their model bundle versions did not change.
- Applied the same compounds to the two meshes already used by BangkokSoi in
  Unreal, preserving geometry and materials. Unreal uses boxes and 24-sided
  convex prisms for the cylinders. Saved both mesh assets and BangkokSoi.
- Eight Unreal capsule sweeps passed: six unobstructed paths and two positive
  controls hitting a shrine pillar and a canopy post. These isolate the target
  prop from surrounding actors; they are not a full character-controller playtest.

Working scripts, pre-change compounds, original Unreal mesh backups, detailed
error samples and Unreal verification results are in
`scratch/open-support-colliders/`. No level bake was performed.
