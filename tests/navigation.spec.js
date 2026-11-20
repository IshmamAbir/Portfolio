/* eslint-env node, es2021 */
const assert = require("node:assert/strict");
const { test } = require("node:test");
const { createServer: createHttpServer } = require("node:http");

test("mobile navigation focuses its destination after the dialog closes", async (t) => {
  const { createServer } = await import("vite");
  const server = await createServer({
    server: { middlewareMode: true, hmr: { server: createHttpServer() } },
    optimizeDeps: { disabled: true },
    ssr: { noExternal: ["vuetify"] },
  });
  t.after(() => server.close());
  const { default: header } = await server.ssrLoadModule("/src/components/AppHeader.vue");
  const calls = [];
  const heading = {
    setAttribute: (name, value) => calls.push([name, value]),
    focus: (options) => calls.push(["focus", options]),
  };
  const target = {
    scrollIntoView: () => calls.push(["scroll"]),
    querySelector: () => heading,
  };
  const originalDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  Object.defineProperty(globalThis, "document", { configurable: true, value: { querySelector: () => target } });
  Object.defineProperty(globalThis, "window", { configurable: true, value: { location: { hash: "" } } });
  t.after(() => {
    if (originalDocument) Object.defineProperty(globalThis, "document", originalDocument);
    else delete globalThis.document;
    if (originalWindow) Object.defineProperty(globalThis, "window", originalWindow);
    else delete globalThis.window;
  });
  const context = { menuOpen: true, pendingAnchor: null, $nextTick: async () => {} };
  context.finishNavigation = () => header.methods.finishNavigation.call(context);
  const navigation = header.methods.navigate.call(context, "#about", { preventDefault: () => calls.push(["preventDefault"]) });
  assert.equal(context.menuOpen, false);
  assert.equal(context.pendingAnchor, "#about");
  assert.deepEqual(calls, [["preventDefault"]]);
  await navigation;
  assert.equal(globalThis.window.location.hash, "#about");
  assert.equal(context.pendingAnchor, null);
  assert.deepEqual(calls.slice(1), [["scroll"], ["tabindex", "-1"], ["focus", { preventScroll: true }]]);
});
