# The thaikit export, by street role

`exports/unreal/manifest.json` is the authority on what exported; this file says
what each thing is FOR. Asset names are `SM_TK_<PascalCase>`; sizes are the
manifest's `size` in metres (w x d x h). Categories in the manifest:
`building-part` (86), `lighting` (15), `street-furniture` (13), `container`
(10), `signage` (10), `vehicle` (9), `vendor` (6), `utility` (3), `religious` (2).

## Ground (8 x 8 m tiles, soi 4 x 8; butt-join on a metre grid)

| Role | Assets |
| --- | --- |
| Road spine | `RoadStraightTile`, `RoadStraightSolidCentre`, `RoadStraightLaneArrows`, `RoadStraightZebraCrossing`, `RoadStraightJunctionApproach`, `RoadMarkingsEnd`, `AsphaltRoadTilePlain`, `AsphaltRoadTileLaneMarked` |
| Junctions / ends | `RoadCrossroads`, `RoadCrossroadsYellowBox`, `RoadTJunction`, `RoadCorner`, `RoadDeadEnd`, `RoadCulDeSacApproach`, `RoadCulDeSacBulbEdge`, `RoadWideCurveEntry/Inner/Outer/Exit` |
| Parking | `RoadParallelParkingStrip`, `RoadPerpendicularParkingBays`, `RoadAngledParkingBays`, `RoadMotorcycleParkingBays` |
| Dug-up / utility | `RoadDrainAndUtilityTile` (put cones and a water barrier on it) |
| Soi | `SoiAlleyStraightTile` (4 x 8) |
| Pavement | `InterlockingConcretePaverTile`, `PebbleWashTerrazzoPavingTile`, `PouredConcreteApronTile`, `RedBrickHerringbonePavingTile`, `CobblestonePavingTile`, `TempleGraniteFlagstoneTile` (temple forecourt only) |
| Unpaved | `CompactedLateriteDirtTile`, `PatchyGrassGroundTile` |
| Details | `CastIronManholeCover` (0.65), `KerbsideStormDrainGrate` (0.45 x 0.56) -- put these where puddles are |

## Buildings

| Role | Assets | Notes |
| --- | --- | --- |
| Retail module, 8 x 7 x 4.6 m | `7ElevenStoreBuilding`, `FamilymartStoreBuilding`, `CafeAmazonStoreBuilding`, `AisShopBuilding`, `LotusSStoreBuilding`, `BigCStoreBuilding`, `ScbBankBranchBuilding`, `MkRestaurantsBuilding`, `KingPowerStoreBuilding`, `MakroStoreBuilding`, `FlashExpressParcelShopBuilding`, `BangkokHospitalClinicBuilding` (6 m tall) | Fronts face +Z in glTF. Shoulder to shoulder, one line. 7-Eleven is the light anchor. |
| Fuel | `PttStationBuilding` (10 x 8) | Main road only, with its own apron tiles. |
| Residential | `BangkokApartmentBlock` (15 x 12 x 19), `ConcreteWalkUpFlatBlock` (26.5 x 10.5 x 17.5), `LowRiseCondominium` (22 x 17 x 21), `StudentDormitoryBlock` (15 x 13 x 24) | Set back behind a fence; second row or street end. |
| Religious (end of street, behind a wall) | `Ubosot` (14 x 24 x 17), `Chedi` (7 x 7 x 14), `Prang` (9 x 9 x 18), `RecliningBuddhaHall`, `KhmerStoneSanctuary`, `Mosque` (14 x 16 x 12), `ChineseShrine` (8.7 x 12 x 9.2), `BrahmanStreetShrine` (5 x 5 x 6, can sit at a corner) | Their `placement` says `wall`: they were authored to be seen from one side. |
| Fences / edges | `PrecastConcreteFencePanel` (2.4), `SteelPicketPropertyFence` (3), `ChainLinkFencePanel` (3), `BambooFencePanel` (2), `ZincSheetHoardingPanel` (3) | Tile along a lot line; hoarding closes a vacant lot. |
| Canopies (4 x 4 m bays) | `TarpaulinCanopyModule`, `CorrugatedMetalCanopyModule`, `BambooHalfPipeCanopyModule`, `BambooSlatPergolaModule`, `NipaThatchCanopyModule`, `VetiverThatchCanopyModule`, `SquarePatioUmbrella` | Over carts and stools. Tarp is the urban one; thatch is provincial. |
| Facade bits | `FireEscapeLadderSegment` (wall), `ElectricMeterBox` (wall, near cable drops) | |

## Lighting props (they glow; YOU add the Unreal light)

| Asset | Height | Light to add |
| --- | --- | --- |
| `SoiLampOnUtilityPole` | 8.5 m, head ~7.5 m, arm to +X | amber spot; the pole also anchors cables |
| `SoiLedFloodlightOnUtilityPole` | 8.5 m | cool spot |
| `ConcreteStreetLampColumn` | 8 m | sodium spot |
| `SteelCobraHeadStreetLamp` | 9 m | sodium or 4000 K spot |
| `SteelTwinArmStreetLamp` | 10 m, two heads | main road median |
| `OrnamentalLampPost` | 4.2 m | warm point, temple / park edge |
| `SolarLedStreetLamp` | 4.6 m | cool spot, provincial |
| `FutsalFloodlightMast` | 12 m | 2-4 cool spots, over a court or lot |
| `FluorescentBattenLight` | 1.25 m tube, ceiling/wall | cool rect light under canopies |
| `EnamelShadeMarketBulb` | ceiling | warm point over a cart |
| `RedChineseHangingLantern`, `LannaClothHangingLantern` | ceiling | red / warm point inside |
| `BulkheadWallPackLight`, `LedFloodPanelWallLight` | wall | small cool spot on a facade |
| `HalogenTripodWorkLight` | 1.75 m | hot warm spot at the dug-up tile |

## Street life

| Role | Assets |
| --- | --- |
| Vehicles (`physics.enabled` on most) | `HondaWave` (bike, the most common thing on any Thai street), `SidecarMotorcycle`, `TukTuk`, `Songthaew`, `ToyotaHilux`, `IsuzuDMax`, `ToyotaFortuner`, `ToyotaCommuterVan`, `IronBuffaloWalkingTractor` (provincial) |
| Carts | `NoodleSoupCart`, `SomTamCart`, `MooPingSkewerBrazier`, `RotiGriddleStand`, `IcedFruitCart`, `StreetStallCanopyCart` |
| Seating | `MonoblocPlasticStool` (0.2 m, red/blue), `MonoblocPlasticArmchair`, `FoldingPaddedBanquetChair`, `LowBambooSlatTable`, `StainlessSteelNoodleShopTable`, `RoundPlasticGardenTable`, `FoldingLaminateTrestleTable`, `TerrazzoPedestalParkTable` |
| Bins (clusters of 2-4) | `MunicipalWheelieBin`, `FourWheelPlasticRefuseBin`, `MunicipalSteelDumpster`, `OpenTopSteelSkipBin`, `HookLiftRollOffSkip`, `OilDrum`, `TyreStackBin`, `SwingLidRecyclingBin`, `ConcreteStreetBin`, `StainlessPavementLitterBin` |
| Barriers | `TrafficCone`, `WaterFilledPlasticBarrier`, `ConcreteJerseyBarrier`, `CrowdControlBarrier`, `PoliceTrafficBarrier` |
| Religious | `SpiritHouse` (1.3 m, corner of every lot, faces the street) + `ShrineOfferingSet` on its plinth |
| Signs | `SoiNameSign`, `NoParkingSign`, `MotorcycleLaneSign`, `SpeedLimitSign`, `UTurnSign`, `TouristAttractionSign`, `ElephantCrossingSign` (provincial road), `KilometreStone`, `FloodDepthMarker`, `ExpresswayGantrySign` (main road, 7 m) |

## Skyline imposters (tag `imposter`; unlit quads, stand 150-300 m out)

`BeigeTiledCondoTower`, `BrownMirroredSteppedOfficeBlock`, `CurvedRiversideCondoTower`,
`ElephantShapedTripleTower`, `GlassFinCondoTower`, `GoldenDomeNeoclassicalTower`,
`LedWrappedAdvertisingTower`, `LongSlabResidentialTower`, `MallPodiumWithTwinTowers`,
`PixelCutGlassSkyscraper`, `RobotFaceSteppedOfficeTower`, `SlenderTowerWithGoldCrown`,
`TaperedSupertallOfficeTower`, `TwinOfficeTowersWithSkyBridge`, `UnfinishedConcreteGhostTower`.
Two or three per view. They face +Z in glTF and have no depth: never let the
player walk round one.

## What the kit does NOT have (use Unreal for these)

Cables and wires, rain, puddles, fog, the moon and sky, transformers on poles,
air-con units, laundry, people, dogs, banners and bunting, neon tubes as
geometry, a canal. `references/unreal-recipes.md` covers the first five.
