/**
 * Where a pack comes from, and which version of it.
 *
 * `npm:<name>[@range]`, a bare `@scope/name`, `https://…registry.json`, or
 * `file:…`. Versions are resolved against the npm registry directly -- one GET
 * for the packument, one for the tarball -- rather than through npm or pacote:
 * a pack is a JSON file with source inlined, it has no lifecycle scripts, and
 * it never enters node_modules.
 */
import semver from 'semver';

export function parseSource(raw) {
  const s = String(raw).trim();
  if (/^https?:\/\//.test(s)) return { kind: 'https', url: s, spec: s };
  if (s.startsWith('file:')) return { kind: 'file', path: s.slice(5).replace(/^\/\//, '/'), spec: s };
  const body = s.startsWith('npm:') ? s.slice(4) : s;
  // '@scope/name@^1.2' -> name '@scope/name', range '^1.2'.
  const at = body.lastIndexOf('@');
  let name = body;
  let range = 'latest';
  if (at > 0) {
    name = body.slice(0, at);
    range = body.slice(at + 1) || 'latest';
  }
  if (!/^(@[a-z0-9][\w.-]*\/)?[a-z0-9][\w.-]*$/i.test(name)) {
    throw new Error(`not a pack source I understand: ${raw}`);
  }
  return { kind: 'npm', name, range, spec: `npm:${name}@${range}` };
}

export async function resolveNpm(name, range = 'latest') {
  const res = await fetch(`https://registry.npmjs.org/${name.replace('/', '%2F')}`, {
    // The full document, not the abbreviated install-v1 one: that strips
    // custom fields, and `vibe3d.registry` is the one this needs.
    headers: { accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`npm registry answered ${res.status} for ${name}`);
  const packument = await res.json();
  const versions = Object.keys(packument.versions ?? {});
  let version;
  if (packument['dist-tags']?.[range]) version = packument['dist-tags'][range];
  else if (versions.includes(range)) version = range;
  else version = semver.maxSatisfying(versions, range);
  if (!version) throw new Error(`no version of ${name} satisfies "${range}" (have ${versions.slice(-5).join(', ')})`);
  const manifest = packument.versions[version];
  if (!manifest.vibe3d?.registry) {
    throw new Error(`${name}@${version} declares no "vibe3d.registry" in its package.json; it is not a vibe3d pack`);
  }
  return {
    name,
    version,
    tarball: manifest.dist.tarball,
    integrity: manifest.dist.integrity ?? null,
    registryPath: manifest.vibe3d.registry,
    license: manifest.license ?? null,
    description: manifest.description ?? '',
    homepage: manifest.homepage ?? null,
  };
}
