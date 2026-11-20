/* eslint-env node, es2021 */
const assert = require("node:assert/strict");
const { test } = require("node:test");

test("article fetching preserves query parameters and rejects HTTP errors", async (t) => {
  const { createServer } = await import("vite");
  const server = await createServer({ server: { middlewareMode: true } });
  t.after(() => server.close());
  const { PortfolioService } = await server.ssrLoadModule(
    "/src/services/portfolio.service.js"
  );
  const articles = [{ id: 1, title: "Article" }];
  const fetch = t.mock.method(globalThis, "fetch", async (url) => {
    const query = new URL(url).searchParams;
    assert.equal(query.get("username"), "name with spaces");
    assert.equal(query.get("order"), "created_at desc");
    return { ok: true, json: async () => articles };
  });

  assert.deepEqual(
    await PortfolioService.getBlogArticles("name with spaces"),
    articles
  );
  fetch.mock.mockImplementation(async () => ({ ok: false, status: 503 }));
  await assert.rejects(PortfolioService.getBlogArticles("name"), /503/);
  fetch.mock.mockImplementation(async () => {
    throw new Error("Offline");
  });
  await assert.rejects(PortfolioService.getBlogArticles("name"), /Offline/);
});
