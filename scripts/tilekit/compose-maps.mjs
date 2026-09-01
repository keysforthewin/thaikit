#!/usr/bin/env node
/**
 * Compose a ground tile's PBR maps from the shared substrates plus its own layout.
 *
 * This is the half of the tile pipeline that CANNOT be generative. Every tile
 * edge has to meet every other one without a visible join, and a crossroads has
 * to be identical to the pixel under a 90-degree rotation. A diffusion model has
 * no way to promise either. So the substrates are generated once and seamlessly,
 * and everything that makes a tile that particular tile -- where the carriageway
 * stops, where the paint goes, where a drain lid sits -- is stamped here, in
 * metres, from the same constants regions.mjs uses. Two tiles that compute the
 * same edge from the same constant cannot disagree about it.
 *
 * Every tile shares one texel density, PX_PER_M, which is the other half of the
 * seam guarantee: substrate grain that changes scale across a join reads as a
 * join even when the geometry lines up perfectly.
 *
 * Five maps come out: albedo, roughness, normal, height and ao. patina does not
 * return AO, so it is derived from height here -- and the factory needs all five
 * or it silently drops the whole set and falls back to a flat colour.
 *
 * Usage:
 *   node scripts/tilekit/compose-maps.mjs --id road-straight-tile [--px-per-m 256]
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

import { REPO_ROOT, workDir, toRepoRelative } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from '../lib/out.mjs';
import { TILES } from './regions.mjs';
import { MARKINGS, DECALS } from './markings.mjs';
import { substratePath } from './substrates.mjs';

/**
 * Texel density, shared by every tile in the kit.
 *
 * 256 px/m puts an 8 m tile at 2048 and a 4 m alley tile at 1024, which keeps
 * every map a power of two without any tile having to change scale.
 */
export const PX_PER_M = 256;

/** Substrate maps are square and represent this much ground, seamlessly. */
const SUBSTRATE_METRES = 4;

/**
 * Albedo targets MEASURED off each tile's own reference plate, and the crop each
 * came from.
 *
 * A generated substrate is photoreal but it is not this street: patina returned a
 * neutral cold grey for the sidewalk where the plate's slabs are distinctly warm
 * ochre, and a road tile that ships the wrong concrete is the wrong prop no
 * matter how good the grain is. The correction is a per-channel gain onto the
 * measured mean rather than a tint, so the substrate's own variation survives it.
 *
 * Measured with scripts/tilekit/sample-palette.mjs against
 * packages/props/src/models/road-straight-tile/preview.jpg, and verified with crop-overlay.mjs that
 * each crop sits on the surface it claims -- the first sidewalk crop landed on
 * asphalt and would have carried the road's tone onto the pavement.
 */
export const PALETTE = {
  // crop 0.44,0.28,0.56,0.36 -- open carriageway, clear of markings and the pothole patch
  asphalt:  { target: [137, 133, 127], from: [120, 124, 129] },
  // crop 0.10,0.36,0.22,0.44 -- the left sidewalk slab top, clear of the kerb face
  sidewalk: { target: [210, 195, 175], from: [207, 208, 206] },
  // crop 0.44,0.40,0.58,0.52 -- the alley paving between the two lid runs, on
  // packages/props/src/models/soi-alley-straight-tile/preview.jpg. Its slabs are markedly warmer and
  // dirtier than the road's sidewalk; the substrate came back near-white, which
  // read as fresh concrete rather than a back lane.
  alley:    { target: [152, 139, 119], from: [201, 203, 200] },
};

/**
 * Extra darkening applied to the SURROUND band only, on the alley pieces.
 *
 * A soi has no separated sidewalk -- it is a shared surface with a 0.5 m edge
 * band each side where the drain lids run and where grime pools against the
 * buildings. Without this the alley tiles fill inside and outside from the same
 * substrate and the band vanishes: the corner tile in particular came out as one
 * undifferentiated sheet of paving with no edge at all.
 */
const SURROUND_SHADE = { alley: 0.82 };

/**
 * Output resolution per role, as a fraction of the composed density.
 *
 * Composition happens at the full PX_PER_M so that a marking edge lands on the
 * right pixel, but shipping every map at that size is what a low-end GPU
 * actually pays: four 2048 maps are 85 MB of VRAM for ONE tile, and the kit
 * expects forty tiles on screen. The 7-Eleven's 64 MB is on record in CLAUDE.md
 * as a defect, and this would have been worse.
 *
 * The split follows what each channel actually carries. Albedo holds the paint
 * and the slab coursing, so it keeps the most. Normal holds the surface grain,
 * which is what sells a flat quad as a road, so it keeps the same. Roughness and
 * AO are both low-frequency -- a wet-looking patch and a shadowed joint are
 * broad, soft things -- and halving them again is invisible at prop distance.
 * Together this is ~14 MB a tile instead of 85.
 */
const ROLE_SCALE = { albedo: 0.5, normal: 0.5, roughness: 0.25, ao: 0.25, height: 0.25 };

/** Metres (tile-centred, +x right, +z down in image space) to pixels. */
function toPx(x, z, wM, dM) {
  return [Math.round((x + wM / 2) * PX_PER_M), Math.round((z + dM / 2) * PX_PER_M)];
}

/** An SVG path for a closed polygon given in metres. */
function polygonPath(points, wM, dM) {
  return points
    .map(([x, z], i) => {
      const [px, pz] = toPx(x, z, wM, dM);
      return `${i === 0 ? 'M' : 'L'}${px},${pz}`;
    })
    .join(' ') + ' Z';
}

/**
 * Tile a substrate map across the full footprint.
 *
 * `sharp`'s tile composite repeats the input edge to edge, which is exactly what
 * a seamless source is for -- and why the substrate must genuinely tile rather
 * than merely look like it does.
 */
async function tiled(name, role, wPx, hPx, shade = 1) {
  const src = substratePath(name, role);
  const side = Math.round(SUBSTRATE_METRES * PX_PER_M);
  let patch = sharp(src).resize(side, side, { fit: 'fill' });
  // Only the albedo is re-toned. Correcting a roughness or normal map towards a
  // colour measured off a lit photograph would be meaningless -- those channels
  // are not colours.
  const tone = role === 'basecolor' ? PALETTE[name] : null;
  if (tone) {
    const gain = tone.target.map((t, i) => (t / tone.from[i]) * shade);
    patch = patch.linear(gain, [0, 0, 0]);
  } else if (shade !== 1 && role === 'basecolor') {
    patch = patch.linear(shade, 0);
  }
  patch = await patch.png().toBuffer();
  return sharp({ create: { width: wPx, height: hPx, channels: 3, background: { r: 0, g: 0, b: 0 } } })
    .composite([{ input: patch, tile: true, blend: 'over' }])
    .png()
    .toBuffer();
}

/** Mask for the carriageway region, white inside. */
async function regionMask(points, wM, dM, wPx, hPx) {
  const svg = `<svg width="${wPx}" height="${hPx}"><path d="${polygonPath(points, wM, dM)}" fill="#fff"/></svg>`;
  return sharp(Buffer.from(svg)).png().toBuffer();
}

/**
 * Fill outside the region with the surround substrate and inside with the
 * carriageway one, using the region mask.
 */
async function substrateLayer(tile, role, wM, dM, wPx, hPx) {
  const inner = await tiled(tile.substrate, role, wPx, hPx);
  const outerName = tile.surround === 'sidewalk' ? 'sidewalk' : 'alley';
  const outer = await tiled(outerName, role, wPx, hPx, SURROUND_SHADE[outerName] ?? 1);
  const mask = await regionMask(tile.region(), wM, dM, wPx, hPx);

  const innerMasked = await sharp(inner)
    .ensureAlpha()
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  return sharp(outer).composite([{ input: innerMasked, blend: 'over' }]).png().toBuffer();
}

/** SVG for one marking or decal shape, in the given fill. */
function shapeSvg(s, wM, dM, fill, opacity) {
  const [px, pz] = toPx(s.x, s.z, wM, dM);
  if (s.shape === 'circle') {
    const r = Math.round((s.w / 2) * PX_PER_M);
    const [cx, cz] = toPx(s.x + s.w / 2, s.z + s.d / 2, wM, dM);
    return `<circle cx="${cx}" cy="${cz}" r="${r}" fill="${fill}" fill-opacity="${opacity}"/>`;
  }
  return `<rect x="${px}" y="${pz}" width="${Math.round(s.w * PX_PER_M)}" ` +
    `height="${Math.round(s.d * PX_PER_M)}" fill="${fill}" fill-opacity="${opacity}"/>`;
}

const rgb = (c) => `rgb(${c.r},${c.g},${c.b})`;

/**
 * Decal tones, per map. A grate is dark and rough; a manhole cover is the
 * rust-brown cast iron the plate shows.
 */
const DECAL_TONE = {
  grate:     { albedo: 'rgb(72,66,58)',    roughness: 'rgb(215,215,215)', height: 'rgb(96,96,96)' },
  manhole:   { albedo: 'rgb(122,86,58)',   roughness: 'rgb(200,200,200)', height: 'rgb(150,150,150)' },
  pad:       { albedo: 'rgb(150,146,138)', roughness: 'rgb(205,205,205)', height: 'rgb(140,140,140)' },
  'lid-run': { albedo: 'rgb(138,132,122)', roughness: 'rgb(198,198,198)', height: 'rgb(146,146,146)' },
};

/**
 * Draw a decal with its actual structure rather than as a flat fill.
 *
 * This matters more here than it would on a prop with geometry. A drain on this
 * tile is not a hole -- the tile is a flat quad and nothing may catch a player's
 * feet -- so the ONLY thing that makes it read as a drain is the slats, the frame
 * and the shadow line between them. A solid dark rectangle reads as a hole
 * punched in the road, which is exactly the failure the flat-quad design has to
 * avoid to be worth making.
 */
function decalSvg(d, wM, dM, role) {
  const tone = DECAL_TONE[d.kind];
  if (!tone || !tone[role]) return '';
  const [px, pz] = toPx(d.x, d.z, wM, dM);
  const w = Math.round(d.w * PX_PER_M);
  const h = Math.round(d.d * PX_PER_M);
  const body = tone[role];
  const parts = [];

  if (d.kind === 'grate') {
    // Cast frame, recessed bed, and slats running across the flow.
    parts.push(`<rect x="${px}" y="${pz}" width="${w}" height="${h}" fill="${body}"/>`);
    const inset = Math.round(0.04 * PX_PER_M);
    parts.push(
      `<rect x="${px + inset}" y="${pz + inset}" width="${w - 2 * inset}" height="${h - 2 * inset}" ` +
        `fill="${role === 'albedo' ? 'rgb(38,34,30)' : role === 'height' ? 'rgb(60,60,60)' : 'rgb(225,225,225)'}"/>`,
    );
    const slat = Math.round(0.055 * PX_PER_M);
    const gap = Math.round(0.045 * PX_PER_M);
    const slatFill = role === 'albedo' ? 'rgb(88,80,70)' : role === 'height' ? 'rgb(150,150,150)' : 'rgb(205,205,205)';
    for (let y = pz + inset * 2; y + slat < pz + h - inset; y += slat + gap) {
      parts.push(`<rect x="${px + inset}" y="${y}" width="${w - 2 * inset}" height="${slat}" fill="${slatFill}"/>`);
    }
    return parts.join('');
  }

  if (d.kind === 'manhole') {
    const r = Math.round((d.w / 2) * PX_PER_M);
    const [cx, cz] = toPx(d.x + d.w / 2, d.z + d.d / 2, wM, dM);
    // The sunken patched asphalt collar around a cover reads before the cover does.
    if (role !== 'roughness') {
      parts.push(
        `<circle cx="${cx}" cy="${cz}" r="${Math.round(r * 1.22)}" ` +
          `fill="${role === 'albedo' ? 'rgb(96,92,86)' : 'rgb(112,112,112)'}" fill-opacity="0.75"/>`,
      );
    }
    parts.push(`<circle cx="${cx}" cy="${cz}" r="${r}" fill="${body}"/>`);
    parts.push(
      `<circle cx="${cx}" cy="${cz}" r="${Math.round(r * 0.82)}" fill="none" ` +
        `stroke="${role === 'albedo' ? 'rgb(88,60,40)' : 'rgb(120,120,120)'}" stroke-width="${Math.max(2, Math.round(r * 0.09))}"/>`,
    );
    return parts.join('');
  }

  if (d.kind === 'lid-run') {
    // A continuous covered channel: one long slab run broken by lid joints.
    parts.push(`<rect x="${px}" y="${pz}" width="${w}" height="${h}" fill="${body}"/>`);
    const pitch = Math.round(0.9 * PX_PER_M);
    const joint = role === 'albedo' ? 'rgb(84,80,74)' : role === 'height' ? 'rgb(70,70,70)' : 'rgb(220,220,220)';
    for (let y = pz + pitch; y < pz + h; y += pitch) {
      parts.push(`<rect x="${px}" y="${y}" width="${w}" height="${Math.max(2, Math.round(0.035 * PX_PER_M))}" fill="${joint}"/>`);
    }
    return parts.join('');
  }

  // pad: a plain cast collar around a pole base.
  parts.push(`<rect x="${px}" y="${pz}" width="${w}" height="${h}" fill="${body}"/>`);
  return parts.join('');
}

/**
 * Stamp markings and decals onto one map.
 *
 * Paint is not only an albedo change: it is smoother than the asphalt it sits on
 * and a shade proud of it, so roughness and height get their own pass. Skipping
 * that is what makes a painted line read as a decal stuck to the surface.
 */
async function stampLayer(base, id, role, wM, dM, wPx, hPx) {
  const marks = MARKINGS[id] ?? [];
  const decals = DECALS[id] ?? [];
  const parts = [];

  for (const m of marks) {
    // `wear` is how much of the asphalt shows through: paint on a Thai street is
    // thinned to nothing in the wheel tracks and nearly solid at the edges.
    const opacity = 1 - (m.wear ?? 0.4);
    if (role === 'albedo') parts.push(shapeSvg(m, wM, dM, rgb(m.color), opacity));
    // Paint is smoother than asphalt: darker in a roughness map.
    else if (role === 'roughness') parts.push(shapeSvg(m, wM, dM, 'rgb(150,150,150)', opacity * 0.85));
    else if (role === 'height') parts.push(shapeSvg(m, wM, dM, 'rgb(140,140,140)', opacity * 0.5));
  }

  for (const d of decals) {
    const svg = decalSvg(d, wM, dM, role);
    if (svg) parts.push(svg);
  }

  if (!parts.length) return base;
  const svg = `<svg width="${wPx}" height="${hPx}">${parts.join('')}</svg>`;
  return sharp(base).composite([{ input: Buffer.from(svg), blend: 'over' }]).png().toBuffer();
}

/**
 * Ambient occlusion from height.
 *
 * patina does not return AO and the factory needs all five maps or it drops the
 * set entirely. A blurred inverse of height is a cheap, honest approximation: it
 * darkens what sits below its surroundings, which on a road tile is exactly the
 * slab joints, the drain channels and the sunken asphalt around a cover.
 */
async function aoFromHeight(heightBuf) {
  return sharp(heightBuf)
    .greyscale()
    .blur(6)
    .linear(0.65, 90)
    .png()
    .toBuffer();
}

async function main() {
  const args = parseArgs();
  const id = args.id;
  if (!id) return fail('need --id');
  const tile = TILES[id];
  if (!tile) return fail(`${id} is not a ground tile; known: ${Object.keys(TILES).join(', ')}`);

  const [wM, dM] = tile.footprint;
  const wPx = Math.round(wM * PX_PER_M);
  const hPx = Math.round(dM * PX_PER_M);
  const outDir = path.join(workDir(id), 'maps');
  await fs.mkdir(outDir, { recursive: true });

  log(`tile   : ${id} — ${wM} x ${dM} m at ${PX_PER_M} px/m → ${wPx} x ${hPx}`);

  const written = [];
  let heightBuf = null;

  for (const role of ['albedo', 'roughness', 'normal', 'height']) {
    // The substrate maps are named by patina's roles; albedo is its basecolor.
    const srcRole = role === 'albedo' ? 'basecolor' : role;
    let buf = await substrateLayer(tile, srcRole, wM, dM, wPx, hPx);
    // The normal map is not stamped: a painted line's relief is carried by
    // height, and drawing flat colour into a normal map would flatten the
    // substrate's own detail wherever it landed.
    if (role !== 'normal') buf = await stampLayer(buf, id, role, wM, dM, wPx, hPx);
    if (role === 'height') heightBuf = buf;

    const dest = path.join(outDir, `${role}.webp`);
    await sharp(buf)
      .resize(Math.round(wPx * ROLE_SCALE[role]), Math.round(hPx * ROLE_SCALE[role]), { fit: 'fill' })
      .webp({ quality: role === 'albedo' ? 90 : 84 })
      .toFile(dest);
    written.push({ role, file: toRepoRelative(dest) });
  }

  const aoDest = path.join(outDir, 'ao.webp');
  await sharp(await aoFromHeight(heightBuf))
    .resize(Math.round(wPx * ROLE_SCALE.ao), Math.round(hPx * ROLE_SCALE.ao), { fit: 'fill' })
    .webp({ quality: 84 })
    .toFile(aoDest);
  written.push({ role: 'ao', file: toRepoRelative(aoDest) });

  for (const w of written) {
    const { size } = await fs.stat(path.join(REPO_ROOT, w.file));
    log(`map    : ${w.role.padEnd(9)} ${w.file} (${(size / 1024).toFixed(0)} KB)`);
  }

  ok({ id, pxPerM: PX_PER_M, width: wPx, height: hPx, maps: written });
}

if (import.meta.url === `file://${process.argv[1]}`) main().catch((err) => fail(err));
