# thaikit registry browser.
#
# App code lives at /app; the repo's data is bind-mounted at /repo. Keeping them
# apart is what avoids the classic "host node_modules shadows the container's"
# bind-mount failure -- the production service mounts data only.
FROM node:22-slim AS base
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends tini ca-certificates \
 && rm -rf /var/lib/apt/lists/*
# tini means Ctrl-C on `docker compose up` exits immediately instead of waiting
# out a 10-second SIGKILL timeout.
ENTRYPOINT ["/usr/bin/tini", "--"]

FROM base AS deps
COPY package.json package-lock.json ./
COPY packages/registry-core/package.json packages/registry-core/
COPY web/server/package.json            web/server/
COPY web/client/package.json            web/client/
RUN npm ci

FROM deps AS build
COPY . .
RUN npm run build --workspace @thaikit/client

FROM base AS runtime
ENV NODE_ENV=production \
    PORT=3733 \
    THAIKIT_REPO_ROOT=/repo \
    THAIKIT_REGISTRY_PATH=/repo/registry.json \
    THAIKIT_ASSETS_DIR=/repo/assets \
    THAIKIT_SCRATCH_DIR=/repo/scratch \
    THAIKIT_CLIENT_DIST=/app/web/client/dist

COPY package.json package-lock.json ./
COPY packages/registry-core/package.json packages/registry-core/
COPY web/server/package.json            web/server/
RUN npm ci --omit=dev --workspace @thaikit/server --workspace @thaikit/registry-core \
 && npm cache clean --force

COPY packages/registry-core packages/registry-core
COPY web/server            web/server
COPY scripts               scripts
COPY prompts               prompts
COPY --from=build /app/web/client/dist web/client/dist

USER node
EXPOSE 3733
# Node has fetch built in, so the image needs neither curl nor wget.
HEALTHCHECK --interval=15s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3733/api/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "web/server/src/index.js"]

# ---------------------------------------------------------------------------
# Development. Ships NO source: /app is a bind mount, so the file you edit on
# the host IS the file the server reads -- there is nothing to rebuild.
#
# It is built from `deps` rather than `runtime` because it needs the
# devDependencies: the server runs Vite in MIDDLEWARE mode (see app.js, IS_DEV),
# which puts HMR on the API's own port. That is the whole switch -- NODE_ENV
# anything but "production" and the client is served from source.
#
# node_modules must NOT come from the host, so compose masks it with an
# anonymous volume; this stage is where its contents come from. The chown is
# load-bearing: the anonymous volume inherits the image's ownership, npm ci ran
# as root, and Vite writes its dependency pre-bundle into node_modules/.vite on
# the first request. Left root-owned, that is EACCES at first page load rather
# than a slow start.
FROM deps AS dev
ENV NODE_ENV=development \
    PORT=3733 \
    THAIKIT_REPO_ROOT=/repo \
    THAIKIT_REGISTRY_PATH=/repo/registry.json \
    THAIKIT_ASSETS_DIR=/repo/assets \
    THAIKIT_SCRATCH_DIR=/repo/scratch \
    THAIKIT_CLIENT_DIST=/app/web/client/dist
# The mkdir is not redundant. npm hoists every workspace's dependencies to
# /app/node_modules, so these nested directories do not otherwise exist -- and
# Docker seeds an anonymous volume from the image, creating the path as ROOT
# when the image has nothing there. Vite's cacheDir is
# <client root>/node_modules/.vite, so that root-owned directory is exactly
# where the first page load fails. Create them, then chown, and the volumes
# inherit an ownership the container's non-root user can write.
RUN mkdir -p /app/node_modules \
             /app/web/client/node_modules \
             /app/web/server/node_modules \
             /app/packages/registry-core/node_modules \
 && chown -R 1000:1000 /app
EXPOSE 3733
# Restart on SERVER edits only, and note that the paths are explicit for a
# reason. Bare `--watch` follows every loaded module, which here means all of
# node_modules -- and Vite's optimizer writing its pre-bundle then reads as a
# source change. That is a restart loop of roughly 1.5 per second which never
# stays up long enough to serve a page. --watch-path is macOS/Windows-only in
# older Node; it works on Linux under the Node 22 this image pins.
#
# Client files are deliberately absent from this list. They must NOT restart the
# process: Vite HMR swaps them into the running page, which is what keeps the
# UI's state across an edit.
CMD ["node", \
     "--watch-path=/app/web/server/src", \
     "--watch-path=/app/packages/registry-core/src", \
     "--watch-path=/app/scripts", \
     "web/server/src/index.js"]
