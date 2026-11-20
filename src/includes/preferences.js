/* eslint-env browser */
export function readPreference(key, allowed, fallback) {
  try {
    const value = globalThis.localStorage?.getItem(key);
    return allowed.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

export function savePreference(key, value) {
  try {
    globalThis.localStorage?.setItem(key, value);
  } catch {
    // Preferences still work for this visit when storage is unavailable.
  }
}

export function initialLocale() {
  const language = globalThis.navigator?.languages?.[0] || globalThis.navigator?.language || "en";
  return readPreference("portfolio-locale", ["en", "ja"], language.startsWith("ja") ? "ja" : "en");
}

export function initialTheme() {
  return readPreference("portfolio-theme", ["light", "dark"], "light");
}
