# ts-api

Restful API developed with nodejs, typescript and docker.

## Requirements

- nodejs
- docker
- docker-compose

## Install

- Install devDependencies `npm install --only=dev` for VSC
- Start docker with `docker-compose up --build`

## references

- https://github.com/microsoft/TypeScript-Node-Starter
- https://medium.com/better-programming/create-an-express-server-using-typescript-dec8a51e7f8d

## TODO

- [x] setup docker
- [ ] fix initial setup that fails as dist folder does not exists, it should wait
- [ ] add middlewares
- [ ] add routes
- [ ] add authentications
- [ ] (optional) save logs
- [ ] building scripts for production
- [ ] (optional) add nginx as a proxy for local development