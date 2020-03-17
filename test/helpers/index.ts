import supertest from "supertest";
import app from "../../src/app";

export const get = function (path: string): supertest.Test {
  return supertest(app).get(path);
};
