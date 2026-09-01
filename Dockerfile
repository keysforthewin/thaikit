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
#
# python3 is here because the MODEL pipeline is Python. img2threejs owns quality,
# iteration and verification, and every one of its gates -- forge/next.py,
# state.py, the stage4 review scripts, validate_sculpt_spec.py -- is a Python
# program, as are the per-prop facts_*/go_* runners under scratch/. Without it
# `npm run doctor` fails fatally on "python >= 3.10" and no prop can be built or
# rebuilt inside the container, which left the whole model route as the one thing
# that still had to run on the host. Bookworm's python3 is 3.11, which clears the
# 3.10 floor. NOTHING is pip-installed: the gates this repo's routes invoke are
# stdlib-only (argparse, json, pathlib, struct, zlib plus the skill's own
# sibling modules), so the heavy optional deps -- numpy, PIL, torch, mediapipe,
# trimesh -- belong to img2threejs's character/CS2 tracks, which thaikit never
# takes. If a route ever needs one, add it explicitly here rather than pip
# installing into a running container, where it would vanish on the next `up`.
RUN apt-get update && apt-get install -y --no-install-recommends \
      tini ca-certificates chromium fonts-liberation python3 \
 && rm -rf /var/lib/apt/lists/*
ENV CHROME_PATH=/usr/bin/chromium

# KTX-Software's `ktx` CLI, for the level bake's KTX2 / Basis Universal
# encoding (scripts/level/pipeline/ktx2.mjs shells out to it, because
# gltf-transform 4.x moved toktx into its CLI package). It is a TOOL, so it
# belongs in the image beside chromium -- not unpacked into ~/.local/opt/ktx on
# somebody's host, which is what `findKtx`'s CANDIDATES list and the
# KTX_INSTALL_HINT were working around. A bake that shells out to a binary only
# one machine has is not reproducible, and `ktx` missing fails the pipeline at
# stage 4 after the Blender bake has already run.
#
# Installed via apt rather than `dpkg -i` so the deb's own dependencies
# resolve, and the published .sha1 is checked because this is a binary from
# outside the image. Fetched with the image's own node -- it has fetch built
# in, so this needs no curl or wget.
ARG KTX_VERSION=4.4.2
RUN set -eux; \
    case "$(dpkg --print-architecture)" in \
      amd64) ktxarch=x86_64 ;; \
      arm64) ktxarch=arm64 ;; \
      *) echo "no KTX-Software build for $(dpkg --print-architecture)" >&2; exit 1 ;; \
    esac; \
    base="https://github.com/KhronosGroup/KTX-Software/releases/download/v${KTX_VERSION}"; \
    deb="KTX-Software-${KTX_VERSION}-Linux-${ktxarch}.deb"; \
    node -e ' \
      const [url, out] = process.argv.slice(1); \
      const fs = require("fs"), crypto = require("crypto"); \
      const get = async (u) => { const r = await fetch(u, { redirect: "follow" }); \
        if (!r.ok) throw new Error(u + " -> HTTP " + r.status); \
        return Buffer.from(await r.arrayBuffer()); }; \
      (async () => { \
        const bin = await get(url); \
        const want = (await get(url + ".sha1")).toString().trim().split(/\s+/)[0]; \
        const got = crypto.createHash("sha1").update(bin).digest("hex"); \
        if (want !== got) throw new Error("sha1 mismatch: want " + want + ", got " + got); \
        fs.writeFileSync(out, bin); \
        console.log("ktx deb ok, sha1 " + got + ", " + bin.length + " bytes"); \
      })(); \
    ' "$base/$deb" /tmp/ktx.deb; \
    apt-get update; \
    apt-get install -y --no-install-recommends /tmp/ktx.deb; \
    rm -rf /tmp/ktx.deb /var/lib/apt/lists/*; \
    ktx --version

# Blender, for the level bake's Cycles lightmap pass (scripts/level/bakers/).
#
# It used to be blender.exe on WINDOWS, driven from WSL over UNC at
# \\wsl.localhost\<distro>\... -- which meant the bake only ran on one machine,
# on one OS, and `toBlenderPath()` existed solely to translate every path across
# that boundary. In the container none of that applies: WSL_DISTRO_NAME is
# unset, so `blenderRepoRoot()` returns REPO_ROOT unchanged and toBlenderPath is
# a no-op. `blenderExe()` already probes /usr/local/bin/blender, which is where
# the symlink below puts it.
#
# The OFFICIAL tarball, not Debian's `blender` package: bookworm ships 3.4,
# which is years behind the 5.x this pipeline is written against (CLAUDE.md
# notes the UNC bridge was verified on 5.2). Pinned by ARG, verified against
# Blender's own published .sha256.
#
# This is the expensive layer -- roughly 1.2 GB extracted -- and it lands in
# `base`, so dev and prod both carry it. That is deliberate: the bake is not a
# side tool, it is spawned by the web server itself
# (web/server/src/lib/bake.js -> scripts/level/bake-level.mjs) when the editor
# POSTs to /api/levels/:id/bake, so the image serving the app is the image that
# has to be able to bake. The locale data is dropped; nothing here renders UI.
ARG BLENDER_VERSION=5.2.1
RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
      xz-utils libx11-6 libxi6 libxxf86vm1 libxfixes3 libxrender1 libxext6 \
      libxkbcommon0 libsm6 libice6 libgl1 libegl1 libglu1-mesa libgomp1; \
    series="$(echo "$BLENDER_VERSION" | cut -d. -f1,2)"; \
    rel="https://download.blender.org/release/Blender${series}"; \
    node -e ' \
      const [url, sums, out] = process.argv.slice(1); \
      const fs = require("fs"), crypto = require("crypto"); \
      const get = async (u) => { const r = await fetch(u, { redirect: "follow" }); \
        if (!r.ok) throw new Error(u + " -> HTTP " + r.status); \
        return Buffer.from(await r.arrayBuffer()); }; \
      (async () => { \
        const name = url.split("/").pop(); \
        const row = (await get(sums)).toString().split("\n") \
          .map((l) => l.trim().split(/\s+/)).find((p) => p[1] === name); \
        if (!row) throw new Error("no sha256 published for " + name); \
        const bin = await get(url); \
        const got = crypto.createHash("sha256").update(bin).digest("hex"); \
        if (got !== row[0]) throw new Error("sha256 mismatch: want " + row[0] + ", got " + got); \
        fs.writeFileSync(out, bin); \
        console.log("blender tarball ok, sha256 " + got + ", " + bin.length + " bytes"); \
      })(); \
    ' "$rel/blender-${BLENDER_VERSION}-linux-x64.tar.xz" \
      "$rel/blender-${BLENDER_VERSION}.sha256" /tmp/blender.tar.xz; \
    mkdir -p /opt/blender; \
    tar -xJf /tmp/blender.tar.xz -C /opt/blender --strip-components=1; \
    rm -f /tmp/blender.tar.xz; \
    rm -rf /opt/blender/*/datafiles/locale; \
    ln -s /opt/blender/blender /usr/local/bin/blender; \
    rm -rf /var/lib/apt/lists/*; \
    blender --version | head -2
# OPTIX IS NOT AVAILABLE HERE, AND THAT IS NOT A CONFIGURATION MISTAKE.
#
# The bake used to run blender.exe on WINDOWS and got OPTIX. A Linux Blender in
# a container under WSL2 cannot: the nvidia runtime injects the host driver, so
# libcuda.so.1 resolves and Cycles gets full GPU rendering on CUDA -- but the
# real OptiX implementation on WSL is nvoptix.dll, a WINDOWS library, and the
# only Linux-side piece is /usr/lib/wsl/lib/libnvoptix.so.1, a 14 KB shim whose
# entire exported symbol table is dxcore_init, dxcore_adapter_load_library and
# four siblings. `optixQueryFunctionTable` is not among them, which is precisely
# what Cycles reports as "OptiX initialization failed with error code 7805" --
# OPTIX_ERROR_ENTRY_SYMBOL_NOT_FOUND.
#
# Do not try to fix this by aliasing libnvoptix_loader.so.1 to libnvoptix.so.1.
# It was tried: the two are the same file (hardlinked, 14224 bytes), the alias
# makes dlopen succeed, and Cycles then fails at 7805 exactly as before, because
# the symbol was never the problem. On a NATIVE Linux host with a real driver,
# libnvoptix.so.1 is the genuine article and bake_lightmap.py's
# OPTIX -> CUDA -> HIP probe picks OPTIX with nothing added here.
#
# So under WSL2 the bake runs on CUDA. That is GPU Cycles on the real card, not
# a CPU fallback -- check the "cycles device:" line bake_lightmap.py logs.

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
