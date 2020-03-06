ARG NODE_VERSION=12.16.1-stretch-slim

FROM node:${NODE_VERSION} as base

EXPOSE 3000

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . /app

ENTRYPOINT ["npm", "run", "watch"]
