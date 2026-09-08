"""Fill empty lightmap gutter texels without changing any baked surface texel."""
import numpy as np


def prepare_bake_images(scene, images):
    """No per-batch dilation; retain the union coverage in temporary alpha."""
    scene.render.bake.margin = 0
    for image in images:
        image.generated_color = (0, 0, 0, 0)


def dilate_lightmap(image, covered, pixels):
    """Extend RGBA in-place into empty neighbours, after ALL bake batches.

    `covered` is geometric coverage, including surfaces whose irradiance is
    exactly black. Testing RGB != 0 would overwrite those real shadows.
    Source coverage is frozen for each step so fills cannot cascade beyond
    the requested radius. Existing surface texels are never overwritten.
    """
    valid = np.asarray(covered, dtype=bool).copy()
    height, width = valid.shape
    for _ in range(max(0, int(pixels))):
        grown = valid.copy()
        # Prefer edge neighbours before diagonals at equal grid distance.
        for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1),
                       (-1, -1), (-1, 1), (1, -1), (1, 1)):
            y0, y1 = max(0, -dy), min(height, height - dy)
            x0, x1 = max(0, -dx), min(width, width - dx)
            dst = (slice(y0, y1), slice(x0, x1))
            src = (slice(y0 + dy, y1 + dy), slice(x0 + dx, x1 + dx))
            fill = ~grown[dst] & valid[src]
            image[dst][fill] = image[src][fill]
            grown[dst][fill] = True
        valid = grown
    return valid
