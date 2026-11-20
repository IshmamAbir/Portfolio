/* eslint-env node, es2021 */
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const { test } = require("node:test");

const source = readFileSync(join(__dirname, "../src/includes/preferences.js"), "utf8");
const preferences = import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);

function replaceGlobal(t, name, value) {
  const original = Object.getOwnPropertyDescriptor(globalThis, name);
  Object.defineProperty(globalThis, name, { value, configurable: true });
  t.after(() => {
    if (original) Object.defineProperty(globalThis, name, original);
    else delete globalThis[name];
  });
}

test("preferences validate saved values and prioritize the chosen language", async (t) => {
  const { initialTheme, initialLocale, savePreference } = await preferences;
  const values = new Map();
  const browser = { languages: ["ja-JP"] };
  replaceGlobal(t, "navigator", browser);
  replaceGlobal(t, "localStorage", {
    getItem: (key) => values.get(key),
    setItem: (key, value) => values.set(key, value),
  });
  assert.equal(initialTheme(), "light");
  assert.equal(initialLocale(), "ja");
  savePreference("portfolio-theme", "dark");
  savePreference("portfolio-locale", "en");
  assert.equal(initialTheme(), "dark");
  assert.equal(initialLocale(), "en");
  values.set("portfolio-theme", "sepia");
  values.set("portfolio-locale", "fr");
  assert.equal(initialTheme(), "light");
  assert.equal(initialLocale(), "ja");
  browser.languages = ["fr-FR"];
  assert.equal(initialLocale(), "en");
  browser.languages = [];
  browser.language = "ja-JP";
  assert.equal(initialLocale(), "ja");
});

test("unavailable browser storage preserves defaults without throwing", async (t) => {
  const { initialTheme, initialLocale, readPreference, savePreference } = await preferences;
  replaceGlobal(t, "navigator", { languages: ["ja-JP"] });
  replaceGlobal(t, "localStorage", undefined);
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    get() { throw new Error("Storage is blocked"); },
  });
  assert.equal(initialTheme(), "light");
  assert.equal(initialLocale(), "ja");
  assert.equal(readPreference("anything", ["en"], "en"), "en");
  assert.doesNotThrow(() => savePreference("portfolio-theme", "dark"));
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem() { throw new Error("Storage read failed"); },
      setItem() { throw new Error("Storage write failed"); },
    },
  });
  assert.equal(initialTheme(), "light");
  assert.doesNotThrow(() => savePreference("portfolio-locale", "en"));
});
