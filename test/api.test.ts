import { get } from "./helpers";

describe("GET /api", () => {
  it("should return 200 OK", async () => {
    await get("/").expect(200, { success: true });
  });

  it("should return 404 OK", async () => {
    await get("/notfound").expect(404);
  });
});