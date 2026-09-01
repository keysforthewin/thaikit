/**
 * The browse thumbnail: a rendered hero frame resized to a small webp.
 * promote-model.mjs and render-model.mjs --thumb both write it through here
 * so the two can never disagree on size or quality.
 */
import sharp from 'sharp';

export async function writeThumb(src, dest, size = 512) {
  await sharp(src)
    .resize(size, size, { fit: 'inside' })
    .webp({ quality: 82 })
    .toFile(dest);
  return dest;
}
