/* eslint-env node, es2021 */
const assert = require("node:assert/strict");
const { test } = require("node:test");
const { createServer: createHttpServer } = require("node:http");

test("articles are modeled and request parameters and failures are preserved", async (t) => {
  const { createServer } = await import("vite");
  const server = await createServer({
    server: { middlewareMode: true, hmr: { server: createHttpServer() } },
    // This SSR check must not rewrite a running dev server's browser cache.
    optimizeDeps: { disabled: true },
  });
  t.after(() => server.close());
  const { PortfolioService } = await server.ssrLoadModule(
    "/src/services/portfolio.service.js"
  );
  const { ArticleClass } = await server.ssrLoadModule("/src/model/Article.model.js");
  const articles = [{
    id: 1,
    title: "Article",
    url: "https://dev.to/author/article",
    published_at: "2026-11-20T09:00:00Z",
    reading_time_minutes: 4,
  }];
  const fetch = t.mock.method(globalThis, "fetch", async (url) => {
    const query = new URL(url).searchParams;
    assert.equal(query.get("username"), "name with spaces");
    assert.equal(query.get("order"), "created_at desc");
    return { ok: true, json: async () => articles };
  });

  const result = await PortfolioService.getBlogArticles("name with spaces");
  assert.equal(result.length, 1);
  assert.ok(result[0] instanceof ArticleClass);
  assert.equal(result[0].title, "Article");
  assert.equal(result[0].url, articles[0].url);
  assert.equal(result[0].publishedAt, "2026-11-20T09:00:00.000Z");
  assert.equal(result[0].readingTime, 4);
  assert.equal(result[0].getLocalizedProperty("title"), "Article");

  fetch.mock.mockImplementation(async () => ({ ok: true, json: async () => [] }));
  assert.deepEqual(await PortfolioService.getBlogArticles("name"), []);
  fetch.mock.mockImplementation(async () => ({ ok: true, json: async () => ({}) }));
  await assert.rejects(PortfolioService.getBlogArticles("name"), /Invalid article response/);
  fetch.mock.mockImplementation(async () => ({
    ok: true,
    json: async () => [
      { id: 2, title: "Unsafe link", url: "javascript:alert(1)" },
      { id: 3, title: "", url: "https://dev.to/author/empty" },
    ],
  }));
  assert.deepEqual(await PortfolioService.getBlogArticles("name"), []);

  const incompleteArticle = new ArticleClass({ title: "No metadata", url: articles[0].url });
  assert.equal(incompleteArticle.publishedAt, null);
  assert.equal(incompleteArticle.readingTime, null);
  fetch.mock.mockImplementation(async () => ({ ok: false, status: 503 }));
  await assert.rejects(PortfolioService.getBlogArticles("name"), /503/);
  fetch.mock.mockImplementation(async () => {
    throw new Error("Offline");
  });
  await assert.rejects(PortfolioService.getBlogArticles("name"), /Offline/);
});
