# Vehicle colliders — 2026-09-14 release

All seven compounds were rebuilt from the current installed procedural bundles and checked in front, rear and side overlay renders. Each has eight boxes, within the static hero budget. Existing static physics settings are retained. The pickup bed and TukTuk passenger entry remain open; canopies retain separate collision slabs.

These are coarse game collision proxies, not exact mesh collision. All pass `colliderVerdict` (coverage ≥95%, no more than 15% of the footprint over 30 cm too high). Height discrepancies remain around sloped glazing, curved roofs, rails and wheel envelopes; the table records them rather than treating the budget gate as an accuracy guarantee. Maxima below have not been individually classified as edge artifacts.

| Vehicle | Boxes | Coverage | p95 height error (m) | Max height error (m) | >30 cm overshoot | Ledges preserved | Missing ledge heights (m) |
|---|---:|---:|---:|---:|---:|---:|---|
| isuzu-d-max | 8 | 98.40% | 0.4154 | 0.6630 | 9.49% | 5/6 | 1.65 |
| songthaew | 8 | 96.46% | 0.4664 | 1.6584 | 6.30% | 7/8 | 0.65 |
| toyota-commuter-van | 8 | 97.63% | 0.6317 | 1.1191 | 13.73% | 5/8 | 0.5, 1.95, 1.8 |
| toyota-fortuner | 8 | 96.64% | 0.4552 | 0.9224 | 6.22% | 5/5 | None |
| toyota-hilux | 8 | 96.43% | 0.3250 | 0.9638 | 0.13% | 6/7 | 0.5 |
| tuk-tuk | 8 | 96.16% | 0.2528 | 1.5123 | 4.04% | 2/2 | None |
| honda-wave | 8 | 97.20% | 0.4328 | 0.8028 | 10.04% | 0/0 | None detected |

## Manual adjustments

- **Hilux:** replaced the broad merged slabs with a chassis/bed floor, front and rear axle envelopes, left and right bed rails, cab, windscreen and hood. This removes the original slab across the open bed and reduces excessive height overshoot from 28.25% to 0.13%. The paired-wheel envelopes and missing 0.5 m ledge remain approximations.
- **Honda Wave:** the final package audit found this additional missing compound. Regenerated and expanded each box by 2 cm sideways and fore/aft; coverage improves from 92.13% to 97.20%. Thin mirrors and curved wheels make this a coarse exterior approximation (20.36% footprint overshoot, volume ratio 2.025).
- **TukTuk:** expanded every derived box by 2 cm per side and 2.5 cm fore/aft. Coverage rises from 94.02% to 96.16%, keeping the separate canopy and entry gap.
- **Isuzu D-Max, Songthaew, Commuter Van and Fortuner:** retained the regenerated shapes after overlay review; no manual shape edits. The Commuter Van has the largest p95 discrepancy (0.6317 m), principally a coarse stepped approximation of its sloping front. These proxies are suitable for basic exterior blocking but do not promise accurate traversal of every small ledge.

Final measurements and registry metadata were written by `scripts/derive-colliders.mjs`, using `--measure` for the three hand-tuned compounds. The published props registry must contain the exact seven `colliders.json` payloads alongside their model source. Existing baked level GLBs do not change when an npm package is updated; rebuild the level to embed the new colliders.
