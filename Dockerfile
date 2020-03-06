ARG NODE_VERSION=12.16.1-stretch-slim

FROM node:${NODE_VERSION} as base

EXPOSE 3000

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . /app

# We have to initialize the project as the build/server.js does not exits
RUN /app/node_modules/typescript/bin/tsc -p /app/tsconfig.json

CMD ["npm", "run", "watch"]
