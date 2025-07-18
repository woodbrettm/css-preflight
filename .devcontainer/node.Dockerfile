# https://github.com/nodejs/docker-node
FROM node:22

RUN npm install -g pnpm

EXPOSE 5173

USER node
