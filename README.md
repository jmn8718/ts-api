# ts-api

Restful API developed with nodejs, typescript and docker.

## Requirements

- nodejs
- docker
- docker-compose

## Install

- Install devDependencies `npm install --only=dev` for VSC
- Start docker with `docker-compose up --build`

## TODO

- [x] setup docker
- [X] fix initial setup that fails as dist folder does not exists, it should wait
- [x] setup folder for middlewares
- [x] add middlewares
- [x] setup folder for routes
- [ ] add routes
- [ ] add authentication
- [x] (optional) setup logger
- [ ] building scripts for production
- [ ] (optional) add nginx as a proxy for local development
- [ ] (optional) setup swagger
- [ ] Include test
- [ ] add debugger for docker

## references

- https://github.com/microsoft/TypeScript-Node-Starter
- https://github.com/microsoft/vscode-recipes/tree/master/Docker-TypeScript
- https://docs.docker.com/compose/extends/
- https://medium.com/better-programming/create-an-express-server-using-typescript-dec8a51e7f8d
- https://developer.okta.com/blog/2018/11/15/node-express-typescript
- https://www.hebergb.com/docker-node-typescript

## Modules

- https://getpino.io/#/docs/api