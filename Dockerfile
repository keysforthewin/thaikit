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
