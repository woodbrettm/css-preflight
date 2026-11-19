# https://github.com/nodejs/docker-node

FROM docker.io/library/node:26

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN npm install --global corepack@latest && corepack enable

USER node
WORKDIR /home/node/css-preflight

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"

# Temporarily mounts the package.json file so Corepack can read
# the packageManager field when activating
RUN --mount=type=bind,source=package.json,target=package.json \
    corepack prepare --activate

EXPOSE 5173
