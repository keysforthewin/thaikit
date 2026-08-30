# thaikit registry browser.
#
# THIS IMAGE CARRIES A TOOLCHAIN AND NOTHING ELSE.
#
# No source, no node_modules, no built client -- in EITHER stage. Everything
# that belongs to the project lives on the host and arrives through a bind
# mount, in production exactly as in development; the only difference between
# the two stages is NODE_ENV and which CMD they run. `apt` installs the
# environment, the mount supplies the project, and there is nothing in here
# that a `docker compose build` has to be remembered for.
#
# That symmetry is deliberate. A production image that bakes its own copy of
# the source has a second, invisible answer to "what is running", and the two
# answers drift: this file used to `npm ci --workspace @thaikit/server
# --workspace @thaikit/registry-core` and COPY three directories, which meant
# `@thai-kit/level-schema` -- imported in eight places by web/server -- was
# simply absent, and every /level route in the production stack died on
# ERR_MODULE_NOT_FOUND. Nothing baked, nothing to drift.
#
# Install and build with the container, into the mount:
#
#   docker compose run --rm --no-deps -e HOME=/tmp \
#     -e npm_config_cache=/tmp/npm-cache web npm ci
#   docker compose run --rm --no-deps -e HOME=/tmp \
#     -e npm_config_cache=/tmp/npm-cache web npm run build --workspace @thaikit/client
#
# The second line is needed only by the production stack, which serves
# web/client/dist as static files (dev mounts Vite as middleware instead).
FROM node:22-slim AS base
WORKDIR /app
# chromium is here for one job: scripts/lib/packs/previews.mjs renders a
# thumbnail for every item of an installed vibe3d pack, because a pack ships no
# pictures and the Add-object grid is otherwise a wall of "no preview". It is
# the same headless route render-model.mjs uses for thaikit's own props, so both
# tiles come out of one rig. It costs a few hundred MB of image; puppeteer-core
# is deliberately the dependency, so nothing downloads a SECOND browser at
# npm install time.
RUN apt-get update && apt-get install -y --no-install-recommends \
      tini ca-certificates chromium fonts-liberation \
 && rm -rf /var/lib/apt/lists/*
ENV CHROME_PATH=/usr/bin/chromium
# tini means Ctrl-C on `docker compose up` exits immediately instead of waiting
# out a 10-second SIGKILL timeout.
ENTRYPOINT ["/usr/bin/tini", "--"]

# ---------------------------------------------------------------------------
# Production. Same shape as `dev`: FROM base, nothing baked.
#
# The user is set by compose (`user: ${THAIKIT_UID}`) in both stacks, so there
# is no USER here -- it would only disagree with the uid that owns the mounted
# tree. `npm ci --omit=dev` is gone with everything else: there is ONE
# node_modules, the one the container installed into the mount, and it is the
# same tree the dev stack and every script in scripts/ resolves against.
FROM base AS runtime
ENV NODE_ENV=production \
    PORT=3733 \
    THAIKIT_REPO_ROOT=/repo \
    THAIKIT_REGISTRY_PATH=/repo/registry.json \
    THAIKIT_ASSETS_DIR=/repo/assets \
    THAIKIT_SCRATCH_DIR=/repo/scratch \
    THAIKIT_CLIENT_DIST=/app/web/client/dist
EXPOSE 3733
# Node has fetch built in, so the image needs neither curl nor wget.
HEALTHCHECK --interval=15s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3733/api/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "web/server/src/index.js"]

# ---------------------------------------------------------------------------
# Development. The container is a SERVICE, not a build step.
#
# It ships no source and no node_modules, and nothing it needs is ever run on
# the host. The image carries the TOOLCHAIN -- Node, npm, tini, chromium, the
# things `apt` and the base image are for. The host carries source files and
# keeps what the container writes. Those are the only two jobs.
#
# So `npm ci` runs INSIDE a container, writing through the bind mount:
#
#   docker compose run --rm --no-deps -e HOME=/tmp \
#     -e npm_config_cache=/tmp/npm-cache web npm ci
#
# node_modules then sits at ./node_modules on the host, installed by this
# image's own npm and its own Node. A dependency change needs no rebuild of
# this stage and no restart -- rerun the line above.
#
# It is therefore built FROM base, not from `deps`. `deps` runs `npm ci` and
# exists only to feed the production `build` and `runtime` stages, which are a
# different thing on purpose: a shipped image bakes its dependencies because
# nothing is mounted into it.
#
# NODE_ENV is the whole dev switch: web/server/src/paths.js reads anything but
# "production" as IS_DEV, and app.js then mounts Vite in MIDDLEWARE mode on the
# API's own port, so HMR needs no second port, no proxy and no CORS.
FROM base AS dev
ENV NODE_ENV=development \
    PORT=3733 \
    THAIKIT_REPO_ROOT=/repo \
    THAIKIT_REGISTRY_PATH=/repo/registry.json \
    THAIKIT_ASSETS_DIR=/repo/assets \
    THAIKIT_SCRATCH_DIR=/repo/scratch \
    THAIKIT_CLIENT_DIST=/app/web/client/dist
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
