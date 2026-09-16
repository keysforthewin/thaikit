# BangkokSoi low export: geometry after fence and rain-tree optimization

Final file: **161.074 MB**, previously 192.300 MB; saving **31.226 MB** (16.2%). Decimal MB throughout.

SHA-256: `2630ee9a493c3394a7bbb6586b4798c48517a94d48f5fcf39233d445d70904eb`.

## File contents

| Payload | Before MB | After MB | Saved MB |
| --- | ---: | ---: | ---: |
| Compressed geometry | 95.126 | 72.365 | 22.761 |
| Material images | 58.216 | 58.461 | -0.245 |
| Lightmaps | 31.491 | 22.849 | 8.642 |
| Sky and clouds | 0.439 | 0.439 | 0.000 |
| Scene JSON | 7.009 | 6.942 | 0.067 |
| Other binary data, headers and padding | 0.019 | 0.018 | 0.001 |

Lightmaps use 2,048 lighting samples and 512 moon-shadow samples, with low resolution unchanged at 6 texels/metre and 4,096-pixel pages. Sample count affects bake time/noise rather than atlas dimensions. The final visual check is recorded in the task evidence.

## Stored geometry by detail level

| Tier | Before triangles | After triangles | After vertices | Draws |
| --- | ---: | ---: | ---: | ---: |
| LOD0 | 3,015,566 | 2,617,286 | 4,460,208 | 2,320 |
| LOD1 | 1,810,469 | 1,500,716 | 2,664,079 | 2,320 |
| LOD2 | 1,403,870 | 1,147,951 | 2,235,723 | 2,320 |
| dynamic | 21,398 | 21,398 | 19,654 | 99 |

These are stored/placed counts. The three static LOD tiers are alternatives; their triangle counts are not all drawn simultaneously. Vertex counts count primitive references and include lightmap seams; compressed bytes account for shared buffers separately. The transfer surface gate accepted 781 candidates and kept 465 on their original-UV fallback path. The existing low preset then shares 439 accepted near LODs with the far tier to avoid storing separate geometry and lighting for those nodes.

## Requested models

| Mesh | Placements | Before triangles per placement | After | Placed triangles saved |
| --- | ---: | ---: | ---: | ---: |
| ZincSheetHoardingPanel | 70 | 3,894 | 50 | 269,080 |
| ChainLinkFencePanel | 64 | 1,840 | 62 | 113,792 |
| RainTree | 1 | 9,988 | 7,740 | 2,248 |
| RainTreeExterior | 14 | 5,380 | 4,440 | 13,160 |

Both fences have exactly one left post and a two-triangle surface. Nano Banana 2 supplied the fence textures. The rain-tree canopy attributes and indices are unchanged at all three authored detail levels; only branch sampling was reduced. Its source LODs are 7,740 / 4,440 / 2,224 triangles. Unreal uses the middle variant for the exterior trees.

**Correction to the earlier diagnosis:** the 6.31 MB bucket labelled RainTreeExterior included shared bark from other tree species. The shared bark material had 263,656 LOD0 triangles, of which 39,032 came from the rain trees. This was material-name attribution, not stale or duplicated rain-tree geometry.

All 149 affected Unreal placements were refreshed. Masked material settings were verified through a real selected-actor round trip and all 64 chain materials in the final level export. The new importer preserves the alpha cutoff across future round trips.

[Repeated one-post fences](../scratch/mesh-simplify-20260916/repeated-fences.png) · [Rain tree before/after](../scratch/mesh-simplify-20260916/tree-before-after.png) · [Model and collision review](../scratch/mesh-simplify-20260916/model-review.md)

## Compressed geometry ownership

Materials are merged across asset families. Bytes below are assigned to one asset only when source tracing establishes a single owner. Mixed material groups and buffers remain explicitly shared; their compressed bytes cannot be precisely divided by triangle proportion. No shared bytes are silently credited to the rain tree or another first-named asset. Shared-buffer rows have zero additional triangles because those triangles are already counted under their primitive groups.

[Complete compressed-byte CSV](../scratch/mesh-simplify-20260916/geometry-breakdown.csv) · [Full ownership JSON](../scratch/mesh-simplify-20260916/geometry-breakdown.json)

| Asset or shared material group | Geometry MB | LOD0 triangles | LOD1 triangles | LOD2 triangles | Dynamic triangles |
| --- | ---: | ---: | ---: | ---: | ---: |
| HondaWave | 9.439 | 166,068 | 129,436 | 129,436 | 0 |
| [shared material] M_TK_RainTreeExterior_bark | 5.824 | 250,496 | 97,570 | 35,340 | 0 |
| Songthaew | 2.868 | 78,420 | 43,069 | 26,676 | 0 |
| [shared material] M_TK_SoiLampOnUtilityPole_crossarm_steel_pole_soilamp | 2.774 | 54,088 | 21,776 | 21,105 | 0 |
| IsuzuDMax | 2.491 | 59,960 | 32,150 | 32,150 | 0 |
| SoiLampOnUtilityPole | 2.285 | 42,300 | 24,645 | 24,097 | 0 |
| FluorescentBattenLight | 2.188 | 42,704 | 17,171 | 17,171 | 0 |
| ToyotaFortuner | 2.146 | 54,504 | 27,570 | 24,732 | 0 |
| FireEscapeLadderSegment | 2.104 | 34,720 | 15,573 | 15,573 | 0 |
| [shared between assets] | 2.079 | 0 | 0 | 0 | 0 |
| BambooFencePanel | 2.024 | 32,928 | 14,208 | 14,208 | 0 |
| PrecastConcreteFencePanel | 1.878 | 40,572 | 40,572 | 30,382 | 0 |
| TukTuk | 1.289 | 31,380 | 18,598 | 16,382 | 12,552 |
| [shared material] M_TK_Bougainvillea_bark_tk_foliage_plant_176 | 1.283 | 76,592 | 30,128 | 10,714 | 0 |
| [shared material] M_TK_BigCStoreBuilding_parapet_block_BigCStoreBuilding | 0.907 | 86,844 | 39,872 | 19,472 | 0 |
| CrowdControlBarrier | 0.847 | 15,392 | 9,332 | 9,332 | 0 |
| OrnamentalLampPost | 0.803 | 17,732 | 9,107 | 9,107 | 0 |
| TarpaulinCanopyModule | 0.740 | 10,992 | 10,046 | 7,118 | 0 |
| MonoblocPlasticStool | 0.718 | 10,626 | 5,290 | 5,290 | 0 |
| OilDrum | 0.687 | 11,368 | 6,612 | 3,398 | 0 |
| [shared material] M_TK_TukTuk_mat1 | 0.682 | 12,936 | 10,722 | 10,722 | 3,408 |
| PedestrianBridgeSteelStairFlight | 0.682 | 12,240 | 12,096 | 11,704 | 0 |
| MonoblocPlasticArmchair | 0.680 | 9,280 | 7,507 | 7,507 | 0 |
| [shared material] M_WalkupLED_warm | 0.658 | 15,552 | 7,360 | 7,360 | 0 |
| KhmerStoneSanctuary | 0.582 | 10,948 | 7,644 | 7,474 | 0 |
| BangkokApartmentBlock | 0.528 | 168,872 | 68,288 | 16,146 | 0 |
| ShrineOfferingSet | 0.526 | 6,390 | 5,276 | 1,104 | 0 |
| ToyotaHilux | 0.508 | 13,604 | 8,244 | 8,244 | 0 |
| ToyotaCommuterVan | 0.494 | 11,722 | 5,817 | 5,557 | 0 |
| TyreStackBin | 0.475 | 11,136 | 4,442 | 4,442 | 0 |
| [shared material] M_TK_CafeAmazonStoreBuilding_timber_CafeAmazonStoreBuilding | 0.466 | 110,492 | 44,780 | 19,328 | 0 |
| RainTreeExterior | 0.458 | 36,288 | 36,288 | 36,288 | 0 |
| MangoTreeExterior | 0.448 | 28,512 | 28,512 | 28,512 | 0 |
| [shared material] M_TK_LannaClothHangingLantern_cream_cloth_lanna_0 | 0.445 | 64,720 | 27,206 | 12,607 | 0 |
| SteelPicketPropertyFence | 0.439 | 8,520 | 8,516 | 2,832 | 0 |
| [shared material] M_TK_StudentDormitoryBlock_cond_StudentDormitoryBlock | 0.428 | 95,220 | 41,474 | 12,130 | 0 |
| BanyanExterior | 0.425 | 33,696 | 33,696 | 33,696 | 0 |
| FoldingPaddedBanquetChair | 0.422 | 5,904 | 4,466 | 4,466 | 0 |
| FourWheelPlasticRefuseBin | 0.412 | 6,504 | 6,326 | 6,326 | 0 |
| [shared material] M_TK_SwingLidRecyclingBin_lidplastic_SwingLidRecyclingBin | 0.406 | 9,792 | 9,024 | 9,024 | 0 |
| EnamelShadeMarketBulb | 0.401 | 8,064 | 3,222 | 3,222 | 0 |
| Banyan | 0.390 | 15,552 | 15,552 | 15,552 | 0 |
| [shared material] M_TK_LowRiseCondominium_alu_LowRiseCondominium | 0.384 | 151,592 | 47,720 | 26,000 | 0 |
| [shared material] M_TK_FlashExpressParcelShopBuilding_galv_FlashExpressParcelShopBuilding | 0.367 | 5,828 | 4,958 | 4,958 | 0 |
| QueensCrapeMyrtleExterior | 0.364 | 28,512 | 28,512 | 28,512 | 0 |
| Mosque | 0.360 | 6,936 | 5,319 | 5,319 | 0 |
| Prang | 0.354 | 7,932 | 4,087 | 4,087 | 0 |
| BrahmanStreetShrine | 0.350 | 8,864 | 3,617 | 3,617 | 0 |
| SomTamCart | 0.340 | 3,836 | 3,760 | 3,760 | 0 |
| SteelCobraHeadStreetLamp | 0.338 | 4,980 | 4,640 | 1,186 | 0 |
| TropicalAlmondExterior | 0.336 | 28,512 | 28,512 | 28,512 | 0 |
| GoldenShowerExterior | 0.333 | 28,512 | 28,512 | 28,512 | 0 |
| Chedi | 0.312 | 7,880 | 3,756 | 3,756 | 0 |
| IcedFruitCart | 0.305 | 3,796 | 2,904 | 2,082 | 0 |
| ChineseShrine | 0.288 | 5,058 | 3,796 | 3,500 | 0 |
| TamarindExterior | 0.282 | 31,104 | 31,104 | 31,104 | 0 |
| NoodleSoupCart | 0.280 | 3,772 | 3,490 | 3,490 | 0 |
| [shared material] M_TK_StainlessSteelNoodleShopTable_steel_frame_table_0 | 0.266 | 10,332 | 4,376 | 3,336 | 0 |
| Tamarind | 0.265 | 10,368 | 10,368 | 10,368 | 0 |
| [shared material] M_TK_ScbBankBranchBuilding_deck_ScbBankBranchBuilding | 0.258 | 4,144 | 2,908 | 2,908 | 0 |
| IndianMastTreeExterior | 0.247 | 28,512 | 28,512 | 28,512 | 0 |
| StainlessPavementLitterBin | 0.247 | 4,536 | 3,549 | 3,549 | 0 |
| [shared material] M_TK_RedChineseHangingLantern_red_silk_lantern_red_0 | 0.240 | 4,620 | 1,854 | 1,854 | 0 |
| PedestrianBridgeConcreteStairFlight | 0.238 | 5,500 | 4,852 | 4,804 | 0 |
| RecliningBuddhaHall | 0.235 | 3,204 | 3,104 | 3,104 | 0 |
| NipaThatchCanopyModule | 0.234 | 3,120 | 2,798 | 1,464 | 0 |
| [shared material] M_TK_LowRiseCondominium_plant_LowRiseCondominium | 0.229 | 26,384 | 12,024 | 5,064 | 0 |
| SidecarMotorcycle | 0.227 | 3,494 | 2,332 | 954 | 0 |
| MunicipalWheelieBin | 0.227 | 3,600 | 3,540 | 3,540 | 0 |
| IronBuffaloWalkingTractor | 0.224 | 3,712 | 3,378 | 3,378 | 0 |
| [shared material] M_TK_7ElevenStoreBuilding_decal_tab_7ElevenStoreBuilding | 0.220 | 5,820 | 2,672 | 2,486 | 0 |
| [shared material] M_TK_ZincSheetHoardingPanel_steel_ZincSheetHoardingPanel | 0.219 | 6,432 | 6,254 | 6,254 | 0 |
| BambooHalfPipeCanopyModule | 0.218 | 3,480 | 2,016 | 1,466 | 0 |
| [shared material] M_TK_BangkokHospitalClinicBuilding_galv_BangkokHospitalClinicBuilding | 0.213 | 2,892 | 2,644 | 2,388 | 0 |
| MangoTree | 0.207 | 15,552 | 15,552 | 15,552 | 0 |
| SteelTwinArmStreetLamp | 0.206 | 4,160 | 3,351 | 1,625 | 0 |
| [shared material] M_TK_ExpresswayBoxGirderDeckModule_steel_kit_xway_deck_01 | 0.197 | 5,424 | 2,792 | 1,779 | 0 |
| OpenTopSteelSkipBin | 0.196 | 3,552 | 2,194 | 2,194 | 0 |
| RedChineseHangingLantern | 0.188 | 4,656 | 1,860 | 1,860 | 0 |
| Ubosot | 0.187 | 5,280 | 5,280 | 5,280 | 0 |
| LowBambooSlatTable | 0.185 | 3,280 | 2,122 | 1,080 | 0 |
| SpiritHouse | 0.181 | 3,096 | 1,516 | 1,516 | 0 |
| SoiLedFloodlightOnUtilityPole | 0.153 | 3,712 | 2,416 | 2,144 | 0 |
| RainTree | 0.146 | 5,184 | 5,184 | 5,184 | 0 |
| CorrugatedMetalCanopyModule | 0.145 | 3,188 | 1,996 | 1,996 | 0 |
| SquarePatioUmbrella | 0.137 | 2,560 | 1,912 | 1,315 | 0 |
| PedestrianBridgePavementColumn | 0.137 | 3,416 | 3,416 | 2,168 | 0 |
| HookLiftRollOffSkip | 0.136 | 1,760 | 1,740 | 1,740 | 0 |
| [shared material] M_TK_MooPingSkewerBrazier_skewer_MooPingSkewerBrazier | 0.135 | 2,268 | 972 | 972 | 0 |
| MooPingSkewerBrazier | 0.132 | 1,730 | 1,298 | 496 | 0 |
| PttStationBuilding | 0.124 | 3,968 | 3,968 | 3,968 | 0 |
| LowRiseCondominium | 0.123 | 35,244 | 11,964 | 5,934 | 0 |
| ElectricMeterBox | 0.120 | 2,400 | 1,937 | 1,465 | 0 |
| [shared material] M_TK_PedestrianBridgeRoofedSteelSpan_zinc_kit_bridge_west_span | 0.117 | 3,208 | 1,832 | 1,832 | 0 |
| LedFloodPanelWallLight | 0.115 | 1,424 | 1,372 | 356 | 0 |
| RoundPlasticGardenTable | 0.114 | 2,752 | 1,539 | 1,539 | 0 |
| ConcreteStreetBin | 0.111 | 3,096 | 1,236 | 1,236 | 0 |
| ConcreteWalkUpFlatBlock | 0.107 | 39,200 | 14,786 | 7,441 | 0 |
| RotiGriddleStand | 0.101 | 1,660 | 1,406 | 1,050 | 0 |
| LannaClothHangingLantern | 0.093 | 2,352 | 939 | 939 | 0 |
| PedestrianBridgeTopLandingJunction | 0.092 | 2,480 | 2,480 | 2,480 | 0 |
| PedestrianBridgeRoofedStairFlight | 0.091 | 1,680 | 1,398 | 1,398 | 0 |
| [shared material] M_TK_BangkokHospitalClinicBuilding_wall_BangkokHospitalClinicBuilding | 0.089 | 19,560 | 6,440 | 3,530 | 0 |
| PedestrianBridgeRoofedSteelSpan | 0.089 | 1,596 | 1,246 | 1,246 | 0 |
| ExpresswayGantrySign | 0.086 | 1,292 | 1,006 | 1,006 | 0 |
| PedestrianBridgeMedianColumn | 0.082 | 1,668 | 1,248 | 1,248 | 0 |
| StreetStallCanopyCart | 0.082 | 1,160 | 886 | 524 | 0 |
| MunicipalSteelDumpster | 0.079 | 1,068 | 1,056 | 1,040 | 0 |
| [shared material] M_TK_ConcreteWalkUpFlatBlock_cloth_ConcreteWalkUpFlatBlock | 0.077 | 22,992 | 8,720 | 4,056 | 0 |
| PedestrianBridgeOpenSteelSpan | 0.075 | 1,860 | 1,858 | 1,858 | 0 |
| [shared material] M_TK_LotusSStoreBuilding_aluminium_LotusSStoreBuilding | 0.073 | 1,296 | 1,280 | 1,280 | 0 |
| StainlessSteelNoodleShopTable | 0.072 | 2,304 | 920 | 920 | 0 |
| PoliceTrafficBarrier | 0.072 | 652 | 644 | 228 | 0 |
| PedestrianBridgeSwitchbackLanding | 0.068 | 1,120 | 1,120 | 774 | 0 |
| SolarLedStreetLamp | 0.065 | 820 | 730 | 329 | 0 |
| FoldingLaminateTrestleTable | 0.064 | 828 | 500 | 374 | 0 |
| Ixora | 0.063 | 5,280 | 5,280 | 5,280 | 0 |
| WaterFilledPlasticBarrier | 0.062 | 948 | 652 | 652 | 0 |
| ConcreteJerseyBarrier | 0.060 | 1,088 | 1,088 | 720 | 0 |
| ExpresswayNoiseBarrierModule | 0.059 | 2,920 | 1,696 | 994 | 0 |
| [shared material] M_TK_StudentDormitoryBlock_steel_StudentDormitoryBlock | 0.057 | 8,964 | 2,912 | 1,382 | 0 |
| [shared material] M_TK_Mosque_dark_Mosque | 0.056 | 1,336 | 670 | 670 | 0 |
| [shared material] M_TK_ChainLinkFencePanel_concrete_ChainLinkFencePanel | 0.054 | 3,328 | 1,920 | 1,046 | 0 |
| VetiverThatchCanopyModule | 0.054 | 1,864 | 1,069 | 1,069 | 0 |
| [shared material] M_TK_StudentDormitoryBlock_tile_StudentDormitoryBlock | 0.054 | 9,944 | 3,244 | 2,104 | 0 |
| LotusSStoreBuilding | 0.053 | 1,360 | 1,196 | 1,196 | 0 |
| ArecaPalm | 0.052 | 3,360 | 3,360 | 3,360 | 0 |
| FutsalFloodlightMast | 0.049 | 540 | 536 | 312 | 0 |
| PedestrianBridgeSwitchbackRampModule | 0.049 | 844 | 844 | 768 | 0 |
| BambooSlatPergolaModule | 0.047 | 1,416 | 1,416 | 1,416 | 0 |
| 7ElevenStoreBuilding | 0.045 | 1,628 | 854 | 854 | 0 |
| SwingLidRecyclingBin | 0.044 | 1,296 | 632 | 632 | 0 |
| [shared material] M_TK_StudentDormitoryBlock_tank_StudentDormitoryBlock | 0.040 | 7,920 | 3,220 | 1,180 | 0 |
| DwarfPlumeria | 0.037 | 1,440 | 1,440 | 1,440 | 0 |
| HalogenTripodWorkLight | 0.036 | 468 | 448 | 448 | 0 |
| Bougainvillea | 0.033 | 1,920 | 1,920 | 1,920 | 0 |
| DwarfBanana | 0.032 | 4,480 | 4,480 | 4,480 | 0 |
| PedestrianBridgeGroundEntryPlinth | 0.032 | 1,020 | 780 | 780 | 0 |
| ConcreteStreetLampColumn | 0.031 | 768 | 364 | 332 | 0 |
| PedestrianBridgeConcreteSpan | 0.030 | 596 | 476 | 476 | 0 |
| BigCStoreBuilding | 0.029 | 868 | 868 | 868 | 0 |
| [shared material] M_TK_ConcreteStreetLampColumn_acrylic_refractor_pole_column | 0.028 | 720 | 402 | 376 | 0 |
| [shared material] M_TK_Songthaew_mat1 | 0.027 | 1,168 | 540 | 540 | 0 |
| PedestrianBridgeElevatorTower | 0.025 | 648 | 648 | 648 | 0 |
| ExpresswayDeckCurveSegment | 0.025 | 1,328 | 452 | 124 | 0 |
| [shared material] M_TK_CafeAmazonStoreBuilding_frame_CafeAmazonStoreBuilding | 0.024 | 588 | 584 | 584 | 0 |
| PedestrianBridgeAdvertisingSpan | 0.024 | 676 | 676 | 676 | 0 |
| ExpresswayIGirderDeckModule | 0.024 | 1,376 | 1,160 | 1,080 | 0 |
| FamilymartStoreBuilding | 0.024 | 696 | 630 | 630 | 0 |
| [shared material] M_TK_FamilymartStoreBuilding_decal_FamilymartStoreBuilding | 0.023 | 576 | 286 | 286 | 0 |
| SkywalkCoveredWalkwayModule | 0.023 | 676 | 676 | 676 | 0 |
| TouristAttractionSign | 0.022 | 428 | 216 | 216 | 0 |
| [shared material] M_TK_MakroStoreBuilding_frame_MakroStoreBuilding | 0.022 | 536 | 344 | 344 | 0 |
| ExpresswayBoxGirderDeckModule | 0.022 | 1,012 | 698 | 598 | 0 |
| [shared material] M_TK_ScbBankBranchBuilding_metal_ScbBankBranchBuilding | 0.021 | 804 | 742 | 742 | 0 |
| [shared material] M_TK_ScbBankBranchBuilding_frame_ScbBankBranchBuilding | 0.021 | 592 | 592 | 496 | 0 |
| ExpresswayHammerheadPier | 0.021 | 1,024 | 500 | 422 | 0 |
| FoxtailPalm | 0.019 | 2,304 | 2,304 | 2,304 | 0 |
| Cylinder | 0.018 | 512 | 204 | 204 | 0 |
| FoxtailPalmExterior | 0.016 | 2,112 | 2,112 | 2,112 | 0 |
| [shared material] M_TK_ConcreteStreetLampColumn_cast_aluminium_pole_column | 0.016 | 696 | 616 | 601 | 0 |
| BangkokHospitalClinicBuilding | 0.016 | 576 | 576 | 576 | 0 |
| ExpresswayBladeWallPier | 0.016 | 540 | 266 | 186 | 0 |
| MotorcycleLaneSign | 0.015 | 248 | 150 | 150 | 0 |
| SpeedLimitSign | 0.015 | 292 | 114 | 114 | 0 |
| CoconutPalmExterior | 0.014 | 1,584 | 1,584 | 1,584 | 0 |
| UTurnSign | 0.013 | 248 | 192 | 192 | 0 |
| FloodDepthMarker | 0.011 | 304 | 182 | 182 | 0 |
| MakroStoreBuilding | 0.011 | 312 | 312 | 312 | 0 |
| [shared material] M_TK_StudentDormitoryBlock_band_StudentDormitoryBlock | 0.011 | 2,772 | 1,252 | 492 | 0 |
| ExpresswayStraddleBentPier | 0.011 | 376 | 376 | 376 | 0 |
| KilometreStone | 0.010 | 296 | 118 | 118 | 0 |
| Croton | 0.010 | 576 | 576 | 576 | 0 |
| ExpresswayAbutmentAndWingWalls | 0.010 | 360 | 138 | 46 | 0 |
| NoParkingSign | 0.010 | 268 | 156 | 156 | 0 |
| [shared material] M_TK_KingPowerStoreBuilding_navy_KingPowerStoreBuilding | 0.010 | 1,620 | 756 | 342 | 0 |
| TrafficCone | 0.009 | 0 | 0 | 0 | 5,280 |
| ScbBankBranchBuilding | 0.009 | 280 | 250 | 250 | 0 |
| Pandan | 0.009 | 5,440 | 5,440 | 5,440 | 0 |
| SoiNameSign | 0.009 | 196 | 78 | 78 | 0 |
| KingPowerStoreBuilding | 0.009 | 264 | 264 | 264 | 0 |
| [shared material] M_TK_StudentDormitoryBlock_grille_StudentDormitoryBlock | 0.009 | 2,640 | 1,040 | 250 | 0 |
| FlashExpressParcelShopBuilding | 0.009 | 264 | 264 | 264 | 0 |
| [shared material] M_TK_FamilymartStoreBuilding_deck_FamilymartStoreBuilding | 0.008 | 744 | 440 | 440 | 0 |
| CompactedLateriteDirtTile | 0.008 | 538 | 538 | 538 | 0 |
| ExpresswayTwinColumnPortalPier | 0.008 | 480 | 282 | 244 | 0 |
| TerrazzoPedestalParkTable | 0.008 | 108 | 108 | 72 | 0 |
| MkRestaurantsBuilding | 0.008 | 292 | 196 | 196 | 0 |
| ElephantCrossingSign | 0.008 | 192 | 133 | 133 | 0 |
| CoconutPalm | 0.007 | 1,728 | 1,728 | 1,728 | 0 |
| BirdsNestFern | 0.007 | 4,928 | 4,928 | 4,928 | 0 |
| [shared material] M_TK_AisShopBuilding_wall_AisShopBuilding | 0.007 | 216 | 216 | 216 | 0 |
| ExpresswayYForkPier | 0.006 | 380 | 167 | 182 | 0 |
| SnakePlant | 0.006 | 768 | 768 | 768 | 0 |
| [shared material] M_TK_StudentDormitoryBlock_paint_StudentDormitoryBlock | 0.006 | 1,452 | 532 | 292 | 0 |
| ElephantEar | 0.006 | 2,112 | 2,112 | 2,112 | 0 |
| @thaikit/ground | 0.005 | 128 | 128 | 128 | 0 |
| ChainLinkFencePanel | 0.004 | 128 | 128 | 128 | 0 |
| ZincSheetHoardingPanel | 0.003 | 140 | 140 | 140 | 0 |
| AisShopBuilding | 0.003 | 96 | 96 | 96 | 0 |
| CafeAmazonStoreBuilding | 0.003 | 84 | 84 | 84 | 0 |
| InterlockingConcretePaverTile | 0.002 | 128 | 124 | 124 | 0 |
| ExpresswayDeckRampSegment | 0.002 | 92 | 32 | 12 | 0 |
| PatchyGrassGroundTile | 0.002 | 252 | 248 | 248 | 0 |
| [shared material] M_TK_AisShopBuilding_deck_AisShopBuilding | 0.002 | 36 | 36 | 36 | 0 |
| [shared material] M_TK_StudentDormitoryBlock_streak_StudentDormitoryBlock | 0.002 | 440 | 50 | 50 | 0 |
| [shared material] M_TK_StudentDormitoryBlock_shutter_StudentDormitoryBlock | 0.001 | 396 | 156 | 46 | 0 |
| PouredConcreteApronTile | 0.001 | 34 | 34 | 34 | 0 |
| [shared material] M_TK_BangkokHospitalClinicBuilding_deck_BangkokHospitalClinicBuilding | 0.001 | 36 | 36 | 36 | 0 |
| [shared material] M_TK_StudentDormitoryBlock_glass_StudentDormitoryBlock | 0.001 | 132 | 52 | 52 | 0 |
| [shared material] M_TK_StudentDormitoryBlock_sign_StudentDormitoryBlock | 0.001 | 132 | 52 | 22 | 0 |
| TempleGraniteFlagstoneTile | 0.001 | 56 | 56 | 56 | 0 |
| KerbsideStormDrainGrate | 0.001 | 14 | 14 | 14 | 0 |
| SoiAlleyStraightTile | 0.000 | 10 | 10 | 10 | 0 |
| RoadStraightSolidCentre | 0.000 | 12 | 12 | 12 | 0 |
| AsphaltRoadTileLaneMarked | 0.000 | 10 | 10 | 10 | 0 |
| PebbleWashTerrazzoPavingTile | 0.000 | 10 | 10 | 10 | 0 |
| CastIronManholeCover | 0.000 | 6 | 6 | 6 | 0 |
| RoadStraightJunctionApproach | 0.000 | 6 | 6 | 6 | 0 |
| RoadStraightLaneArrows | 0.000 | 4 | 4 | 4 | 0 |
| RoadStraightTile | 0.000 | 4 | 4 | 4 | 0 |
| RoadDrainAndUtilityTile | 0.000 | 4 | 4 | 4 | 0 |
| RoadDeadEnd | 0.000 | 4 | 4 | 4 | 0 |
| RoadStraightZebraCrossing | 0.000 | 2 | 2 | 2 | 0 |
| RoadCulDeSacApproach | 0.000 | 2 | 2 | 2 | 0 |
| MallPodiumWithTwinTowers | 0.000 | 0 | 0 | 0 | 2 |
| LongSlabResidentialTower | 0.000 | 0 | 0 | 0 | 2 |
| TropicalAlmondBillboard | 0.000 | 0 | 0 | 0 | 14 |
| TamarindBillboard | 0.000 | 0 | 0 | 0 | 14 |
| RainTreeBillboard | 0.000 | 0 | 0 | 0 | 12 |
| BanyanBillboard | 0.000 | 0 | 0 | 0 | 12 |
| GlassFinCondoTower | 0.000 | 0 | 0 | 0 | 2 |
| PixelCutGlassSkyscraper | 0.000 | 0 | 0 | 0 | 2 |
| TaperedSupertallOfficeTower | 0.000 | 0 | 0 | 0 | 2 |
| LedWrappedAdvertisingTower | 0.000 | 0 | 0 | 0 | 2 |
| ElephantShapedTripleTower | 0.000 | 0 | 0 | 0 | 2 |
| SlenderTowerWithGoldCrown | 0.000 | 0 | 0 | 0 | 2 |
| CurvedRiversideCondoTower | 0.000 | 0 | 0 | 0 | 2 |
| UnfinishedConcreteGhostTower | 0.000 | 0 | 0 | 0 | 2 |
| TwinOfficeTowersWithSkyBridge | 0.000 | 0 | 0 | 0 | 2 |
| GoldenDomeNeoclassicalTower | 0.000 | 0 | 0 | 0 | 2 |
| RobotFaceSteppedOfficeTower | 0.000 | 0 | 0 | 0 | 2 |
| BeigeTiledCondoTower | 0.000 | 0 | 0 | 0 | 2 |
| QueensCrapeMyrtleBillboard | 0.000 | 0 | 0 | 0 | 12 |
| IndianMastTreeBillboard | 0.000 | 0 | 0 | 0 | 12 |
| CoconutPalmBillboard | 0.000 | 0 | 0 | 0 | 12 |
| CobblestonePavingTile | 0.000 | 2 | 2 | 2 | 0 |
| RoadMotorcycleParkingBays | 0.000 | 2 | 2 | 2 | 0 |
| RedBrickHerringbonePavingTile | 0.000 | 2 | 2 | 2 | 0 |
| RoadParallelParkingStrip | 0.000 | 2 | 2 | 2 | 0 |
| RoadWideCurveOuter | 0.000 | 2 | 2 | 2 | 0 |
| RoadWideCurveExit | 0.000 | 2 | 2 | 2 | 0 |
| RoadCorner | 0.000 | 2 | 2 | 2 | 0 |
| RoadCrossroadsYellowBox | 0.000 | 2 | 2 | 2 | 0 |
| RoadWideCurveEntry | 0.000 | 2 | 2 | 2 | 0 |
| RoadWideCurveInner | 0.000 | 2 | 2 | 2 | 0 |
| AsphaltRoadTilePlain | 0.000 | 2 | 2 | 2 | 0 |
| RoadAngledParkingBays | 0.000 | 2 | 2 | 2 | 0 |
| RoadCrossroads | 0.000 | 2 | 2 | 2 | 0 |
| RoadMarkingsEnd | 0.000 | 2 | 2 | 2 | 0 |
| RoadPerpendicularParkingBays | 0.000 | 2 | 2 | 2 | 0 |
| RoadTJunction | 0.000 | 2 | 2 | 2 | 0 |
| RoadCulDeSacBulbEdge | 0.000 | 2 | 2 | 2 | 0 |
| BrownMirroredSteppedOfficeBlock | 0.000 | 0 | 0 | 0 | 2 |
| FoxtailPalmBillboard | 0.000 | 0 | 0 | 0 | 12 |
| GoldenShowerBillboard | 0.000 | 0 | 0 | 0 | 14 |
| MangoTreeBillboard | 0.000 | 0 | 0 | 0 | 14 |

## Geometry bytes by scene region

| Region / shared buffer | Before MB | After MB |
| --- | ---: | ---: |
| baked cells | 80.014 | 57.643 |
| unbaked scenery | 12.339 | 12.550 |
| baked cells + dynamic + unbaked scenery | 2.634 | 2.034 |
| dynamic | 0.100 | 0.100 |
| baked cells + unbaked scenery | 0.039 | 0.039 |
| baked cells + dynamic | 0.000 | 0.000 |

Baked cells carry unique lightmap UVs and their own LOD geometry. Exterior scenery has many triangles but fewer indexed attributes and better sharing/compression. This is why source triangle totals and download-byte rankings differ.

## Exact source geometry by asset

This table is measured before material merging and lightmap UV seams. It includes every placed source mesh, including dynamic objects and distant variants. The source names retain Unreal variant distinctions. Vertices in the CSV are also measured before the pipeline adds lightmap seams.

[Complete source CSV](../scratch/mesh-simplify-20260916/source-geometry.csv) · [Source ownership JSON](../scratch/mesh-simplify-20260916/source-ownership.json)

| Source mesh | Placements | Static triangles | Dynamic triangles |
| --- | ---: | ---: | ---: |
| SM_TK_BangkokApartmentBlock | 19 | 525,616 | 0 |
| SM_TK_LowRiseCondominium | 11 | 207,284 | 0 |
| SM_TK_HondaWave | 14 | 166,068 | 0 |
| SM_TK_SoiLampOnUtilityPole | 75 | 94,500 | 0 |
| SM_TK_Songthaew | 6 | 83,748 | 0 |
| SM_TK_BanyanExterior | 13 | 69,940 | 0 |
| SM_TK_TamarindExterior | 12 | 64,560 | 0 |
| SM_TK_RainTreeExterior | 14 | 62,160 | 0 |
| SM_TK_IsuzuDMax | 5 | 59,960 | 0 |
| SM_TK_TropicalAlmondExterior | 11 | 59,180 | 0 |
| SM_TK_MangoTreeExterior | 11 | 59,180 | 0 |
| SM_TK_GoldenShowerExterior | 11 | 59,180 | 0 |
| SM_TK_QueensCrapeMyrtleExterior | 11 | 59,180 | 0 |
| SM_TK_IndianMastTreeExterior | 11 | 59,180 | 0 |
| SM_TK_StudentDormitoryBlock | 10 | 58,000 | 0 |
| SM_TK_FluorescentBattenLight | 157 | 57,776 | 0 |
| SM_TK_TukTuk | 7 | 39,900 | 15,960 |
| SM_TK_ToyotaFortuner | 4 | 54,504 | 0 |
| SM_TK_ConcreteWalkUpFlatBlock | 14 | 45,584 | 0 |
| SM_TK_PrecastConcreteFencePanel | 161 | 40,572 | 0 |
| SM_TK_FireEscapeLadderSegment | 31 | 34,720 | 0 |
| SM_TK_BambooFencePanel | 12 | 32,928 | 0 |
| SM_TK_Banyan | 3 | 29,964 | 0 |
| SM_TK_MangoTree | 3 | 29,964 | 0 |
| SM_TK_Tamarind | 2 | 19,976 | 0 |
| SM_TK_Prang | 1 | 18,012 | 0 |
| SM_TK_OrnamentalLampPost | 13 | 17,732 | 0 |
| SM_TK_Mosque | 1 | 16,568 | 0 |
| SM_TK_Ixora | 11 | 15,554 | 0 |
| SM_TK_CrowdControlBarrier | 8 | 15,392 | 0 |
| SM_TK_ToyotaHilux | 1 | 13,908 | 0 |
| SM_TK_BrahmanStreetShrine | 1 | 13,504 | 0 |
| SM_TK_PedestrianBridgeSteelStairFlight | 12 | 12,240 | 0 |
| SM_TK_ToyotaCommuterVan | 1 | 11,722 | 0 |
| SM_TK_OilDrum | 7 | 11,368 | 0 |
| SM_TK_KhmerStoneSanctuary | 1 | 11,188 | 0 |
| SM_TK_TyreStackBin | 6 | 11,136 | 0 |
| SM_TK_TarpaulinCanopyModule | 3 | 10,992 | 0 |
| SM_TK_MonoblocPlasticStool | 21 | 10,626 | 0 |
| SM_TK_ElephantEar | 11 | 10,560 | 0 |
| SM_TK_MonoblocPlasticArmchair | 5 | 9,280 | 0 |
| SM_TK_DwarfBanana | 10 | 9,280 | 0 |
| SM_TK_RedChineseHangingLantern | 6 | 9,264 | 0 |
| SM_TK_SteelPicketPropertyFence | 10 | 8,520 | 0 |
| SM_TK_Chedi | 1 | 8,248 | 0 |
| SM_TK_EnamelShadeMarketBulb | 6 | 8,064 | 0 |
| SM_TK_ChineseShrine | 1 | 7,994 | 0 |
| SM_TK_RainTree | 1 | 7,740 | 0 |
| SM_TK_LannaClothHangingLantern | 3 | 7,032 | 0 |
| SM_TK_FourWheelPlasticRefuseBin | 6 | 6,504 | 0 |
| SM_TK_ShrineOfferingSet | 3 | 6,390 | 0 |
| SM_TK_Bougainvillea | 4 | 6,296 | 0 |
| SM_TK_FoldingPaddedBanquetChair | 4 | 5,904 | 0 |
| SM_TK_ArecaPalm | 3 | 5,640 | 0 |
| SM_StudentDormitory_ClimbableTower | 1 | 5,608 | 0 |
| SM_TK_SoiLedFloodlightOnUtilityPole | 8 | 5,600 | 0 |
| SM_TK_PedestrianBridgeConcreteStairFlight | 5 | 5,500 | 0 |
| SM_TK_Ubosot | 1 | 5,496 | 0 |
| SM_TK_SteelCobraHeadStreetLamp | 5 | 5,460 | 0 |
| SM_TK_Pandan | 10 | 5,440 | 0 |
| SM_TK_TrafficCone | 6 | 0 | 5,280 |
| Cylinder | 10 | 5,120 | 0 |
| SM_TK_PttStationBuilding | 1 | 5,064 | 0 |
| SM_TK_SteelTwinArmStreetLamp | 4 | 4,928 | 0 |
| SM_TK_BirdsNestFern | 11 | 4,928 | 0 |
| SM_TK_DwarfPlumeria | 3 | 4,722 | 0 |
| SM_TK_StainlessPavementLitterBin | 3 | 4,536 | 0 |
| SM_TK_StainlessSteelNoodleShopTable | 4 | 4,480 | 0 |
| SM_TK_ChainLinkFencePanel | 64 | 3,968 | 0 |
| SM_TK_MooPingSkewerBrazier | 1 | 3,892 | 0 |
| SM_TK_SomTamCart | 1 | 3,836 | 0 |
| SM_TK_SidecarMotorcycle | 1 | 3,806 | 0 |
| SM_TK_IcedFruitCart | 1 | 3,796 | 0 |
| SM_TK_NoodleSoupCart | 1 | 3,772 | 0 |
| SM_TK_IronBuffaloWalkingTractor | 1 | 3,712 | 0 |
| SM_TK_MunicipalWheelieBin | 6 | 3,600 | 0 |
| SM_TK_OpenTopSteelSkipBin | 4 | 3,552 | 0 |
| SM_TK_PedestrianBridgeRoofedSteelSpan | 1 | 3,548 | 0 |
| SM_TK_FlashExpressParcelShopBuilding | 1 | 3,528 | 0 |
| SM_TK_ZincSheetHoardingPanel | 70 | 3,500 | 0 |
| SM_TK_BambooHalfPipeCanopyModule | 1 | 3,480 | 0 |
| SM_TK_PedestrianBridgePavementColumn | 14 | 3,416 | 0 |
| SM_TK_MakroStoreBuilding | 1 | 3,408 | 0 |
| SM_TK_ExpresswayBoxGirderDeckModule | 11 | 3,388 | 0 |
| SM_TK_Croton | 3 | 3,360 | 0 |
| SM_TK_LowBambooSlatTable | 2 | 3,280 | 0 |
| SM_TK_RecliningBuddhaHall | 1 | 3,204 | 0 |
| SM_TK_CorrugatedMetalCanopyModule | 1 | 3,188 | 0 |
| SM_TK_NipaThatchCanopyModule | 1 | 3,120 | 0 |
| SM_TK_ConcreteStreetBin | 2 | 3,096 | 0 |
| SM_TK_SpiritHouse | 2 | 3,096 | 0 |
| SM_TK_ScbBankBranchBuilding | 1 | 3,076 | 0 |
| SM_TK_FoxtailPalm | 6 | 3,024 | 0 |
| SM_TK_PedestrianBridgeRoofedStairFlight | 1 | 2,936 | 0 |
| SM_TK_ExpresswayNoiseBarrierModule | 5 | 2,920 | 0 |
| SM_TK_FoxtailPalmExterior | 11 | 2,904 | 0 |
| SM_TK_RoundPlasticGardenTable | 2 | 2,752 | 0 |
| SM_TK_SwingLidRecyclingBin | 2 | 2,576 | 0 |
| SM_TK_SquarePatioUmbrella | 2 | 2,560 | 0 |
| SM_TK_PedestrianBridgeTopLandingJunction | 5 | 2,480 | 0 |
| SM_TK_CoconutPalm | 6 | 2,448 | 0 |
| SM_TK_ElectricMeterBox | 4 | 2,400 | 0 |
| SM_TK_CoconutPalmExterior | 11 | 2,376 | 0 |
| SM_TK_ExpresswayDeckCurveSegment | 2 | 2,360 | 0 |
| SM_TK_CafeAmazonStoreBuilding | 1 | 2,152 | 0 |
| SM_TK_BigCStoreBuilding | 1 | 2,140 | 0 |
| SM_TK_7ElevenStoreBuilding | 1 | 1,952 | 0 |
| SM_TK_VetiverThatchCanopyModule | 1 | 1,864 | 0 |
| SM_TK_PedestrianBridgeOpenSteelSpan | 3 | 1,860 | 0 |
| SM_TK_HookLiftRollOffSkip | 1 | 1,760 | 0 |
| SM_TK_MkRestaurantsBuilding | 1 | 1,740 | 0 |
| SM_TK_LotusSStoreBuilding | 1 | 1,672 | 0 |
| SM_TK_PedestrianBridgeMedianColumn | 3 | 1,668 | 0 |
| SM_TK_RotiGriddleStand | 1 | 1,660 | 0 |
| SM_TK_ExpresswayYForkPier | 5 | 1,580 | 0 |
| SM_TK_KingPowerStoreBuilding | 1 | 1,540 | 0 |
| SM_TK_LedFloodPanelWallLight | 2 | 1,424 | 0 |
| SM_TK_BambooSlatPergolaModule | 1 | 1,416 | 0 |
| SM_TK_AisShopBuilding | 1 | 1,400 | 0 |
| SM_TK_ExpresswayIGirderDeckModule | 4 | 1,376 | 0 |
| SM_TK_ExpresswayGantrySign | 1 | 1,292 | 0 |
| SM_TK_SnakePlant | 3 | 1,248 | 0 |
| SM_TK_BangkokHospitalClinicBuilding | 1 | 1,212 | 0 |
| SM_TK_StreetStallCanopyCart | 1 | 1,160 | 0 |
| SM_TK_PedestrianBridgeSwitchbackLanding | 2 | 1,120 | 0 |
| SM_TK_ExpresswayHammerheadPier | 4 | 1,120 | 0 |
| SM_TK_ConcreteJerseyBarrier | 4 | 1,088 | 0 |
| SM_TK_MunicipalSteelDumpster | 1 | 1,068 | 0 |
| SM_TK_PedestrianBridgeGroundEntryPlinth | 5 | 1,020 | 0 |
| Sphere | 1 | 960 | 0 |
| SM_TK_WaterFilledPlasticBarrier | 3 | 948 | 0 |
| SM_TK_ConcreteStreetLampColumn | 2 | 936 | 0 |
| SM_TK_ExpresswayBladeWallPier | 3 | 900 | 0 |
| SM_TK_PedestrianBridgeSwitchbackRampModule | 1 | 844 | 0 |
| SM_TK_FoldingLaminateTrestleTable | 1 | 828 | 0 |
| SM_TK_SolarLedStreetLamp | 2 | 820 | 0 |
| SM_TK_FamilymartStoreBuilding | 1 | 804 | 0 |
| SM_TK_PedestrianBridgeAdvertisingSpan | 1 | 676 | 0 |
| SM_TK_SkywalkCoveredWalkwayModule | 1 | 676 | 0 |
| SM_TK_PoliceTrafficBarrier | 1 | 652 | 0 |
| SM_TK_PedestrianBridgeElevatorTower | 1 | 648 | 0 |
| SM_TK_PedestrianBridgeConcreteSpan | 1 | 596 | 0 |
| SM_TK_ExpresswayTwinColumnPortalPier | 4 | 576 | 0 |
| SM_TK_FutsalFloodlightMast | 1 | 540 | 0 |
| SM_TK_CompactedLateriteDirtTile | 269 | 538 | 0 |
| Cube | 10 | 480 | 0 |
| SM_TK_HalogenTripodWorkLight | 1 | 468 | 0 |
| SM_TK_TouristAttractionSign | 1 | 428 | 0 |
| SM_TK_ExpresswayStraddleBentPier | 2 | 424 | 0 |
| SM_TK_ExpresswayAbutmentAndWingWalls | 1 | 360 | 0 |
| SM_TK_ExpresswayDeckRampSegment | 1 | 308 | 0 |
| SM_TK_FloodDepthMarker | 1 | 304 | 0 |
| SM_TK_KilometreStone | 1 | 296 | 0 |
| SM_TK_SpeedLimitSign | 1 | 292 | 0 |
| SM_TK_NoParkingSign | 1 | 268 | 0 |
| SM_TK_PatchyGrassGroundTile | 126 | 252 | 0 |
| SM_TK_MotorcycleLaneSign | 1 | 248 | 0 |
| SM_TK_UTurnSign | 1 | 248 | 0 |
| SM_TK_SoiNameSign | 1 | 196 | 0 |
| SM_TK_ElephantCrossingSign | 1 | 192 | 0 |
| SM_TK_InterlockingConcretePaverTile | 64 | 128 | 0 |
| @thaikit/ground | 64 | 128 | 0 |
| SM_TK_TerrazzoPedestalParkTable | 1 | 108 | 0 |
| SM_TK_TempleGraniteFlagstoneTile | 28 | 56 | 0 |
| SM_TK_PouredConcreteApronTile | 17 | 34 | 0 |
| SM_TK_KerbsideStormDrainGrate | 7 | 14 | 0 |
| SM_TK_TropicalAlmondBillboard | 7 | 0 | 14 |
| SM_TK_MangoTreeBillboard | 7 | 0 | 14 |
| SM_TK_TamarindBillboard | 7 | 0 | 14 |
| SM_TK_GoldenShowerBillboard | 7 | 0 | 14 |
| SM_TK_RoadStraightSolidCentre | 6 | 12 | 0 |
| SM_TK_QueensCrapeMyrtleBillboard | 6 | 0 | 12 |
| SM_TK_IndianMastTreeBillboard | 6 | 0 | 12 |
| SM_TK_CoconutPalmBillboard | 6 | 0 | 12 |
| SM_TK_FoxtailPalmBillboard | 6 | 0 | 12 |
| SM_TK_RainTreeBillboard | 6 | 0 | 12 |
| SM_TK_BanyanBillboard | 6 | 0 | 12 |
| SM_TK_AsphaltRoadTileLaneMarked | 5 | 10 | 0 |
| SM_TK_SoiAlleyStraightTile | 5 | 10 | 0 |
| SM_TK_PebbleWashTerrazzoPavingTile | 5 | 10 | 0 |
| SM_TK_RoadStraightJunctionApproach | 3 | 6 | 0 |
| SM_TK_CastIronManholeCover | 3 | 6 | 0 |
| SM_TK_RoadStraightLaneArrows | 2 | 4 | 0 |
| SM_TK_RoadDeadEnd | 2 | 4 | 0 |
| SM_TK_RoadStraightTile | 2 | 4 | 0 |
| SM_TK_RoadDrainAndUtilityTile | 2 | 4 | 0 |
| SM_TK_RoadCrossroadsYellowBox | 1 | 2 | 0 |
| SM_TK_RoadParallelParkingStrip | 1 | 2 | 0 |
| SM_TK_RoadMotorcycleParkingBays | 1 | 2 | 0 |
| SM_TK_RoadStraightZebraCrossing | 1 | 2 | 0 |
| SM_TK_AsphaltRoadTilePlain | 1 | 2 | 0 |
| SM_TK_RoadAngledParkingBays | 1 | 2 | 0 |
| SM_TK_RoadPerpendicularParkingBays | 1 | 2 | 0 |
| SM_TK_RoadTJunction | 1 | 2 | 0 |
| SM_TK_RoadWideCurveEntry | 1 | 2 | 0 |
| SM_TK_RoadWideCurveOuter | 1 | 2 | 0 |
| SM_TK_RoadWideCurveExit | 1 | 2 | 0 |
| SM_TK_RoadWideCurveInner | 1 | 2 | 0 |
| SM_TK_RoadCrossroads | 1 | 2 | 0 |
| SM_TK_RoadMarkingsEnd | 1 | 2 | 0 |
| SM_TK_RoadCulDeSacApproach | 1 | 2 | 0 |
| SM_TK_RoadCulDeSacBulbEdge | 1 | 2 | 0 |
| SM_TK_RedBrickHerringbonePavingTile | 1 | 2 | 0 |
| SM_TK_CobblestonePavingTile | 1 | 2 | 0 |
| SM_TK_MallPodiumWithTwinTowers | 1 | 0 | 2 |
| SM_TK_GlassFinCondoTower | 1 | 0 | 2 |
| SM_TK_PixelCutGlassSkyscraper | 1 | 0 | 2 |
| SM_TK_TaperedSupertallOfficeTower | 1 | 0 | 2 |
| SM_TK_LedWrappedAdvertisingTower | 1 | 0 | 2 |
| SM_TK_ElephantShapedTripleTower | 1 | 0 | 2 |
| SM_TK_SlenderTowerWithGoldCrown | 1 | 0 | 2 |
| SM_TK_CurvedRiversideCondoTower | 1 | 0 | 2 |
| SM_TK_UnfinishedConcreteGhostTower | 1 | 0 | 2 |
| SM_TK_TwinOfficeTowersWithSkyBridge | 1 | 0 | 2 |
| SM_TK_BrownMirroredSteppedOfficeBlock | 1 | 0 | 2 |
| SM_TK_GoldenDomeNeoclassicalTower | 1 | 0 | 2 |
| SM_TK_RobotFaceSteppedOfficeTower | 1 | 0 | 2 |
| SM_TK_BeigeTiledCondoTower | 1 | 0 | 2 |
| SM_TK_LongSlabResidentialTower | 1 | 0 | 2 |
| SM_TK_RoadCorner | 1 | 2 | 0 |

## Why the remaining large models have so many triangles

The current procedural factories provide a component-level guide below; the per-placement exported counts above remain authoritative for this level.

| Model | Component | Copies within one model | Triangles in one model |
| --- | --- | ---: | ---: |
| bangkok-apartment-block | Balcony railings | 40 | 8,160 |
| bangkok-apartment-block | Rooftop water tanks | 6 | 5,760 |
| bangkok-apartment-block | Sliding-door frames, pipes and laundry rails | 40 | 5,120 |
| bangkok-apartment-block | Air-conditioning condensers | 40 | 3,680 |
| bangkok-apartment-block | Rendered shell | 1 | 2,860 |
| low-rise-condominium | Timber screen battens | 580 | 6,960 |
| low-rise-condominium | Aluminium mullions, rails and jambs | 332 | 3,984 |
| low-rise-condominium | White rendered shell | 1 | 1,764 |
| low-rise-condominium | Planter shrubs | 20 | 1,600 |
| low-rise-condominium | Louvre slats | 132 | 1,584 |
| honda-wave | body | 1 | 3,756 |
| honda-wave | steering-paint | 1 | 2,648 |
| honda-wave | static-metal | 1 | 2,600 |
| honda-wave | front-wheel | 1 | 1,096 |
| honda-wave | rear-wheel | 1 | 1,096 |

## Instancing and remaining opportunities

Instancing can reduce repeated mesh storage, memory and draw calls. It does not reduce the triangles drawn for the same visible copies. Some procedural factories already instance repeated components, but the prop-to-Unreal GLB exporter expands them into a combined Static Mesh. The level cell-merging path then expands repeated placements and uses unique baked lightmap coordinates; sharing baked meshes needs a per-instance lightmap-addressing design. Unbaked exterior objects are the simpler first candidates. That broader pipeline change was not part of these mesh revisions.

The source table identifies remaining triangle-heavy buildings and props. The byte table identifies the models whose indexed attributes and LOD copies cost most in the actual download. Prioritize using the relevant metric rather than assuming a high triangle count always implies an equally high compressed byte cost.

## Validation, visual comparison and delivery

The full file verifier passed with zero failures, no unused accessors or texture payloads, and zero final compressed atlas coverage failures. It reports 51 advisory warnings for draw-call budgets and conservative LOD reduction. These are remaining optimization opportunities, not a claim that every original budget has been met.

Windows Chrome on the RTX 5070 Ti rendered all three LODs at the identical baseline camera, plus close views of both fences, with no browser errors or warnings. The new 2048/512 bake visibly reduces the large speckled patches on walls, roofs and paving. Residual low-density variation remains, and forced LOD2 still differs in lighting. This whole-level comparison also includes changed meshes and atlas packing; only the earlier paired-seed calibration isolated sample count.

| View | Before | After |
| --- | --- | --- |
| Matching street camera | [128-sample baseline](../scratch/mesh-simplify-20260916/before-street.png) | [2048 / 512 samples](../scratch/mesh-simplify-20260916/after-street.png) |
| Chain-link close-up | — | [Final exported level](../scratch/mesh-simplify-20260916/after-fence.png) |
| Zinc close-up | — | [Final exported level](../scratch/mesh-simplify-20260916/after-zinc.png) |

[Forced LOD1](../scratch/mesh-simplify-20260916/after-street-lod1.png) · [Forced LOD2](../scratch/mesh-simplify-20260916/after-street-lod2.png) · [Sample calibration](level-quality-calibration.md)

The checked file was delivered atomically to `Operation-X/GLB/bangkoksoi_low.glb` at 2026-09-16T05:58:35.434754+00:00. Its SHA-256 matches the build and the header of this report. The previous game file was hash-checked before replacement and retained in the recovery archive. [Delivery receipt](../scratch/mesh-simplify-20260916/delivery.json).
