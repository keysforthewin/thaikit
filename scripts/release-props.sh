#!/usr/bin/env bash
# Release @thai-kit/props -- the vibe3d pack of thaikit's shipped props.
#
# Export -> verify -> version -> npm publish -> commit and tag. Split across two
# processes on purpose:
#
#   the CONTAINER does the export, the verification and the publish, because
#   node, npm and esbuild live in the image and a release must not depend on
#   whichever Node the host happens to have;
#
#   the HOST does git, because there is no git in the image and the commit
#   identity and signing config are the host's.
#
# Credentials: the host's ~/.npmrc is mounted read-only at /tmp/.npmrc, which is
# where npm looks because HOME is /tmp in there. Nothing is copied into the image
# and no token is ever written into the repo. Set NPM_CONFIG_USERCONFIG if your
# token lives elsewhere.
#
#   ./scripts/release-props.sh              # patch bump, export, verify, publish
#   ./scripts/release-props.sh minor
#   ./scripts/release-props.sh 1.0.0
#   ./scripts/release-props.sh --dry-run    # build + verify + npm pack, nothing pushed
#   ./scripts/release-props.sh patch --tag next
#   ALLOW_DIRTY=1 ./scripts/release-props.sh
set -euo pipefail

cd "$(dirname "$0")/.."

NPMRC="${NPM_CONFIG_USERCONFIG:-$HOME/.npmrc}"
if [ ! -f "$NPMRC" ]; then
  echo "release-props: no npmrc at $NPMRC -- run 'npm login' on the host first" >&2
  exit 1
fi

# A release must be reproducible from a commit, so an uncommitted source edit is
# a hard stop. The generated pack is gitignored and never shows up here.
DIRTY="$(git status --porcelain)"
if [ -n "$DIRTY" ] && [ "${ALLOW_DIRTY:-}" != "1" ]; then
  echo "release-props: working tree is dirty; commit or stash first, or set ALLOW_DIRTY=1" >&2
  echo "$DIRTY" >&2
  exit 1
fi

# The script prints human progress on stderr and ONE JSON line on stdout, this
# repo's convention -- so stderr passes straight through to the terminal and
# stdout is captured for the version.
RESULT="$(docker compose run --rm --no-deps \
  -e HOME=/tmp \
  -e npm_config_cache=/tmp/npm-cache \
  -v "$NPMRC:/tmp/.npmrc:ro" \
  -T \
  web node scripts/release-props.mjs "$@")"

echo "$RESULT"

read -r OK VERSION DRY < <(node -e '
  const r = JSON.parse(process.argv[1].trim().split("\n").pop());
  console.log(r.ok, r.version ?? "", r.dryRun ? "dry" : "live");
' "$RESULT")

if [ "$OK" != "true" ]; then
  echo "release-props: publish failed; nothing committed" >&2
  exit 1
fi

if [ "$DRY" = "dry" ]; then
  echo "release-props: dry run complete, nothing published or committed" >&2
  exit 0
fi

TAG="props-v${VERSION}"
git add packages/props/package.json
git commit -m "📦 Release @thai-kit/props@${VERSION}"
git tag -a "$TAG" -m "@thai-kit/props@${VERSION}"
echo "release-props: committed and tagged ${TAG} -- push with: git push && git push origin ${TAG}" >&2
