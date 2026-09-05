# What a Thai street looks like at night

The reference is a soi in Bangkok, Chiang Mai or a provincial town between about
20:00 and 02:00, after rain. Every rule below is something the eye reads in the
first second; a level that misses three of them reads as "generic Asian street"
or "clean city sample".

## The big reads, in order of importance

1. **Two colour temperatures at war.** Amber sodium and bare tungsten from the
   poles and carts; hard cool white-green fluorescent from every shophouse,
   7-Eleven, batten and LED flood. They overlap on the wet road as orange and
   cyan puddles side by side. A single-temperature street is the first thing
   that looks wrong.
2. **The sky is full of wire.** Bundles of black cable sag between concrete poles
   on ONE side of the street, cross to the other side every pole or two, drop to
   each shopfront, and knot into loops at the poles. Transformers and meter boxes
   ride the poles and facades. Look up anywhere and there are 10-30 lines in
   frame.
3. **The 7-Eleven glow.** One bright white box mid-block with its green-orange-red
   stripe, light spilling 10 m across the pavement and reflecting in the road.
   Motorbikes nose-in outside, a stool or two, a soi dog if there were one.
4. **Wet, reflective ground.** Asphalt dark and glossy, puddles in the ruts and at
   the kerb, drain grates and manholes glinting, pavement tiles darker where
   water pooled. Rain either falling or just stopped (mist in the lamp cones).
5. **Clutter at the kerb.** Carts under tarps and umbrellas, red and blue
   monobloc stools, stainless tables, gas bottles, bins in clusters, a tyre
   stack, cones and a water barrier around a hole, parked bikes in a ragged row.
   Nothing aligned; everything slightly askew.
6. **Shrines and lanterns.** A spirit house on a plinth at the corner of every
   lot, garlanded, with fairy lights and a red glow; a Chinese shrine or a red
   lantern row at a restaurant; incense smoke if there is FX budget.
7. **Vertical layers.** Shophouses 3-5 storeys, shutters down, signs stacked up
   the facade (Thai script), air-con units and balconies with laundry, a
   condo or office tower two streets back, an unfinished concrete tower and a
   lit advertising tower on the skyline. The street canyon is narrow relative to
   height on a soi (6-8 m wide, 12-15 m tall walls).
8. **Haze.** Warm-tinted fog low, bluish above, dense enough that the far end of
   the street loses contrast and the pole lamps have visible cones.

## Colour and material notes

- Sodium: `#FFA040`–`#FF8C1A`, 1900-2200 K. Tungsten bulbs: `#FFC780`, 2700 K.
- Fluorescent: `#E6F0FF` with a green cast `#DDF5E8` for older tubes, 5000-6500 K.
- 7-Eleven interior: cool white with the shelving's own colours reflecting; the
  sign's green `#008C5A`, orange `#F58220`, red `#EE2E24`.
- Wet asphalt base: `#1C1C1E` in shadow, roughness 0.15-0.3; puddles 0.02.
- Concrete poles: warm grey with black cable stains at the crossarms.
- Tarps: blue `#1D4E9E` and orange underside, bleached; sometimes green.
- Sky: very dark blue-violet with an orange glow at the horizon over the city;
  no visible stars in Bangkok, a few in the provinces.

## Composition of a block (60 x 40 m default)

```
 [tower imposters 200 m out]                        [apartment block, set back]
 ┌────────────────────────────────────────────────────────────────────────────┐
 │ shophouse  shophouse  7-ELEVEN  shophouse  clinic  shophouse  [hoarding]   │  north row, fronts on one line
 │ ---pavement--- bins  bikes bikes bikes  cart+stools  bikes  spirit house  │
 │ P.......................P.......................P.......................P  │  poles every 32 m, cables overhead
 │ ========================== road (2 lanes, or a 4 m soi) ================== │  puddles at kerbs and centre
 │ ---pavement--- tuk-tuk   cart under tarp   songthaew   cones/barrier hole  │
 │ shophouse  AIS  Cafe Amazon  shophouse  FamilyMart  shophouse  [fence]    │  south row
 └────────────────────────────────────────────────────────────────────────────┘
                                          [temple wall + chedi at the street end]
```

A soi variant is the same with a 4 m road, single-storey walls and fences on
one side, poles on the wall side, and one lamp per pole doing all the work.

## Checklist for the screenshot

- [ ] At least two colour temperatures visible in one frame
- [ ] Cables cross the sky in the main view; at least one pole in frame
- [ ] One dominant white shopfront; the rest darker
- [ ] Road reflects lights; at least two puddles visible
- [ ] Nothing perfectly aligned along the kerb
- [ ] A shrine or lantern glow somewhere in frame
- [ ] The far end of the street fades into haze
- [ ] Rain visible against a light, or the ground reads freshly wet
- [ ] Skyline above the roofline, faintly lit
- [ ] Dark stays dark: no auto-exposure lift, blacks not grey
