/**
 * Stable serialisation and ETags.
 *
 * Key order and asset order are deterministic so that two writers producing the
 * same logical registry produce byte-identical files. That is what keeps git
 * diffs to one hunk per changed asset -- which is what lets git auto-merge two
 * contributors adding different props.
 */
import crypto from 'node:crypto';

function sortValue(value) {
  if (Array.isArray(value)) return value.map(sortValue);
  if (value && typeof value === 'object' && value.constructor === Object) {
    const out = {};
    for (const key of Object.keys(value).sort()) out[key] = sortValue(value[key]);
    return out;
  }
  return value;
}

/** Canonical JSON: assets sorted by id, keys sorted, 2-space indent, trailing newline. */
export function serializeRegistry(registry) {
  const normalized = {
    ...registry,
    assets: [...(registry.assets ?? [])].sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)),
  };
  return JSON.stringify(sortValue(normalized), null, 2) + '\n';
}

export function hashRegistry(registry) {
  return crypto.createHash('sha256').update(serializeRegistry(registry)).digest('hex');
}

/** Weak ETag over the canonical form, for optimistic concurrency on PATCH. */
export function etagFor(registry) {
  return `"${hashRegistry(registry).slice(0, 32)}"`;
}

/**
 * ETag for a single asset, which is what an editor should actually be holding.
 *
 * A registry-wide ETag makes every concurrent write a conflict: a generation
 * skill writing asset X invalidates an open editor on asset Y, the save fails,
 * and because the 409 carries no fresh ETag the editor stays wedged until the
 * page is reloaded. Scoping the check to the asset being written means only a
 * real double-edit of the SAME asset conflicts.
 */
export function etagForAsset(asset) {
  const canonical = JSON.stringify(sortValue(asset));
  return `"${crypto.createHash('sha256').update(canonical).digest('hex').slice(0, 32)}"`;
}
