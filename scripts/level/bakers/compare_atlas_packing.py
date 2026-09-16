"""Measure alternative rectangle packings without changing UVs or baking lighting.

Run with Blender Python:
  blender -b --python-exit-code 1 --python compare_atlas_packing.py -- layout.json output.json
The source layout must come from a successful geometric coverage preflight.
"""
import collections
import json
import math
import os
import sys
import time

import numpy as np

sys.path.insert(0, os.path.dirname(__file__))
from lightmap_atlas import PagePacker, PADDING


def compare(layout):
    rectangles = layout['rectangles']
    size = layout['size']
    results = []
    strategies = ['height', 'longest', 'cell-height', 'cell-longest', 'object-height', 'object-longest']
    for strategy in strategies:
        start = time.monotonic()
        packer = PagePacker(size, max(32, layout['count']))
        placed = []
        splits = collections.defaultdict(set)
        preferred = {}

        def sort_key(rect):
            small, large = sorted((rect['width'], rect['height']))
            return (-small, -large) if strategy.endswith('height') else (-large, -small)

        def group_key(rect):
            return rect['source'].split('.')[0] if strategy.startswith('cell-') else rect['source']

        if '-' in strategy:
            groups = collections.defaultdict(list)
            for rect in rectangles:
                groups[group_key(rect)].append(rect)
            groups = sorted(groups.values(), key=lambda group: -sum(r['width'] * r['height'] for r in group))
            ordered = [rect for group in groups for rect in sorted(group, key=sort_key)]
        else:
            ordered = sorted(rectangles, key=sort_key)

        for rect in ordered:
            group = group_key(rect)
            page, x, y, rotate = packer.place(
                rect['width'] - 2 * PADDING, rect['height'] - 2 * PADDING,
                preferred.get(group) if '-' in strategy else None,
            )
            preferred[group] = page
            width, height = rect['width'], rect['height']
            if rotate:
                width, height = height, width
            placed.append((page, x - PADDING, y - PADDING, width, height))
            splits[rect['source']].add(page)

        # Independently validate the full padded rectangles, not just packer counters.
        masks = [np.zeros((size, size), dtype=bool) for _ in packer.pages]
        for page, x, y, width, height in placed:
            if not (0 <= x and 0 <= y and x + width <= size and y + height <= size):
                raise ValueError('Rectangle outside atlas')
            region = masks[page][y:y + height, x:x + width]
            if region.any():
                raise ValueError('Overlapping padded rectangles')
            region[:] = True
        result = {
            'strategy': strategy,
            'pages': len(packer.pages),
            'splitObjects': sum(len(pages) for pages in splits.values()),
            'rectanglesValidated': len(placed),
            'seconds': time.monotonic() - start,
        }
        results.append(result)
        print(json.dumps(result), flush=True)
        del masks, placed

    lower_bound = math.ceil(sum(r['width'] * r['height'] for r in rectangles) / size ** 2)
    best = min(results, key=lambda result: (result['pages'], result['splitObjects']))
    return {
        'pageSize': size,
        'baselinePages': layout['count'],
        'baselineSplitObjects': len(layout['objects']),
        'rectangleAreaLowerBound': lower_bound,
        'best': best,
        'minimumProvedForTheseRectangles': best['pages'] == lower_bound,
        'alternatives': results,
        'note': 'Packing study only; not applied to geometry or the production allocator. '
                'Bounds and overlap are validated. A minimum for these rectangles is not '
                'a minimum over every possible UV unwrap. Lighting has not been rendered.',
    }


if __name__ == '__main__':
    args = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
    if len(args) != 2:
        raise ValueError('Expected -- <atlas-layout.json> <output.json>')
    with open(args[0]) as source:
        result = compare(json.load(source))
    with open(args[1], 'w') as output:
        json.dump(result, output, indent=2)
