#!/usr/bin/env bash
# Deploy the PUBLIC, read-only thaikit to DEPLOY_TARGET (from .env).
#
#   ./deploy.sh
#
# Builds the client (inside the LOCAL container, with THAIKIT_BASE_PATH from
# DEPLOY_URL), rsyncs source + build products + data to the server, installs
# node_modules there with the image's own npm, and (re)starts
# compose.public.yaml. The server's own .env is never touched.
set -euo pipefail
cd "$(dirname "$0")"

env_get() { grep -E "^$1=" .env 2>/dev/null | head -1 | cut -d= -f2- | tr -d '"' ; }
DEPLOY_TARGET="$(env_get DEPLOY_TARGET)"
DEPLOY_URL="$(env_get DEPLOY_URL)"
if [ -z "$DEPLOY_TARGET" ]; then
  echo "DEPLOY_TARGET is not set in .env (e.g. DEPLOY_TARGET=user@host:/home/user/thaikit)" >&2
  exit 1
fi
host="${DEPLOY_TARGET%%:*}"
dir="${DEPLOY_TARGET#*:}"
# The URL path is the app's base path: https://outdoordevs.com/thaikit -> /thaikit
base_path="$(printf '%s' "$DEPLOY_URL" | sed -E 's#^[a-z]+://[^/]+##; s#/+$##')"

echo "==> building client (base path '${base_path:-/}') in the container"
docker compose run --rm --no-deps -T -e HOME=/tmp -e npm_config_cache=/tmp/npm-cache \
  -e THAIKIT_BASE_PATH="$base_path" web npm run build --workspace @thaikit/client -- --outDir dist-public \
  2>&1 | grep -v -i 'tini\|subreaper' || true
test -f web/client/dist-public/index.html

echo "==> rsync -> $DEPLOY_TARGET"
ssh "$host" "mkdir -p '$dir'"
# Source and the tracked data, plus the gitignored build products the site
# needs and cannot make on a small VPS: the installed packs (bundles, previews,
# index) and each level's GLB. Not: node_modules (installed there), scratch,
# level build/ dirs, the server's .env.
rsync -az --delete \
  --exclude '.git' --exclude 'node_modules' --exclude '.env' --exclude '.env.local' \
  --exclude 'scratch' --exclude 'levels/*/build' --exclude 'web/client/dist' \
  --exclude 'web/client/dist-public' --exclude '*.tmp-*' \
  ./ "$DEPLOY_TARGET/"
# The client bundle built above lands where the production server serves from.
rsync -az --delete web/client/dist-public/ "$DEPLOY_TARGET/web/client/dist/"

echo "==> installing node_modules and starting the public stack on $host"
ssh "$host" "cd '$dir' \
  && docker compose -f compose.public.yaml build -q \
  && docker compose -f compose.public.yaml run --rm --no-deps -T -e HOME=/tmp -e npm_config_cache=/tmp/npm-cache web npm ci --no-audit --no-fund 2>&1 | grep -v -i 'tini\|subreaper' \
  ; docker compose -f compose.public.yaml up -d"

sleep 5
port="$(ssh "$host" "grep -E '^THAIKIT_PORT=' '$dir/.env' 2>/dev/null | cut -d= -f2")"
port="${port:-3733}"
if ssh "$host" "curl -fsS 'http://127.0.0.1:${port}${base_path}/api/health'" >/dev/null; then
  echo "Deployed. ${DEPLOY_URL:-http://127.0.0.1:${port}${base_path}}/"
else
  echo "health check failed; recent logs:" >&2
  ssh "$host" "cd '$dir' && docker compose -f compose.public.yaml logs --tail=40"
  exit 1
fi
