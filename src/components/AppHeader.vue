<template>
  <header class="site-header">
    <div class="site-container header-inner">
      <a class="wordmark" href="#home" :aria-label="'Ishmam Abir — ' + $t('header.home')"><span class="brand-mark" aria-hidden="true">{ }</span>Ishmam Abir</a>
      <nav class="desktop-nav" :aria-label="$t('ui.open_menu')">
        <a v-for="item in navigation" :key="item.id" :href="item.href">{{ $t('ui.' + item.id) }}</a>
      </nav>
      <div class="header-controls">
        <v-btn class="locale-button" variant="text" :aria-label="$t('ui.switch_language')" @click="toggleLocale">
          <span :lang="$i18n.locale === 'en' ? 'ja' : 'en'">{{ $i18n.locale === 'en' ? '日本語' : 'EN' }}</span>
        </v-btn>
        <v-btn variant="text" :icon="dark ? 'mdi-weather-sunny' : 'mdi-weather-night'" :aria-label="$t(dark ? 'ui.light_mode' : 'ui.dark_mode')" @click="toggleTheme" />
        <v-btn id="navigation-trigger" class="mobile-menu-button" variant="text" icon="mdi-menu" :aria-label="$t('ui.open_menu')" :aria-expanded="menuOpen" aria-controls="mobile-navigation" @click="menuOpen = true" />
      </div>
    </div>
    <v-dialog v-model="menuOpen" class="navigation-dialog" max-width="400" transition="slide-x-reverse-transition" activator="#navigation-trigger" :open-on-click="false" :aria-label="$t('ui.open_menu')">
      <v-card id="mobile-navigation" class="mobile-navigation">
        <div class="mobile-navigation-top">
          <a class="wordmark" href="#home" @click="navigate('#home', $event)"><span class="brand-mark" aria-hidden="true">{ }</span>Ishmam Abir</a>
          <v-btn variant="text" icon="mdi-close" :aria-label="$t('ui.close_menu')" @click="menuOpen = false" />
        </div>
        <nav :aria-label="$t('ui.open_menu')" class="mobile-links">
          <a v-for="item in navigation" :key="item.id" :href="item.href" @click="navigate(item.href, $event)">{{ $t('ui.' + item.id) }}</a>
        </nav>
        <div class="mobile-preferences">
          <v-btn variant="outlined" prepend-icon="mdi-translate" @click="toggleLocale">{{ $i18n.locale === 'en' ? '日本語' : 'English' }}</v-btn>
          <v-btn variant="outlined" :prepend-icon="dark ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="toggleTheme">{{ $t(dark ? 'ui.light_mode' : 'ui.dark_mode') }}</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </header>
</template>
<script>
import { savePreference } from "@/includes/preferences";
import { siteInfo } from "@/data/site.data";
export default {
  name: "AppHeader",
  data: () => ({ menuOpen: false, pendingAnchor: null }),
  computed: {
    dark() { return this.$vuetify.theme.global.current.dark; },
    navigation() {
      return [
        { id: "work", href: "#project" },
        { id: "experience", href: "#experience" },
        { id: "about", href: "#about" },
        { id: "blog", href: siteInfo.blogUrl || "#blog" },
        { id: "contact", href: "#contacts" },
      ];
    },
  },
  watch: {
    "$vuetify.display.mdAndUp"(expanded) { if (expanded) this.menuOpen = false; },
  },
  methods: {
    async navigate(href, event) {
      this.pendingAnchor = href.startsWith('#') ? href : null;
      this.menuOpen = false;
      if (!this.pendingAnchor) return;
      event.preventDefault();
      // Wait for Vuetify to release scrolling and restore its activator first.
      await this.$nextTick();
      await this.$nextTick();
      this.finishNavigation();
    },
    finishNavigation() {
      const href = this.pendingAnchor;
      this.pendingAnchor = null;
      if (!href) return;
      const target = document.querySelector(href);
      if (!target) return;
      window.location.hash = href;
      target.scrollIntoView();
      const heading = target.querySelector('h1, h2, h3') || target;
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    },
    toggleLocale() { this.$i18n.locale = this.$i18n.locale === "en" ? "ja" : "en"; },
    toggleTheme() {
      const theme = this.dark ? "light" : "dark";
      this.$vuetify.theme.global.name = theme;
      savePreference("portfolio-theme", theme);
    },
  },
};
</script>
<style scoped>
.site-header { position: sticky; top: 0; z-index: 100; border-bottom: 1px solid rgb(var(--v-theme-outline)); background: rgb(var(--v-theme-background)); }
.header-inner { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 32px; min-height: 80px; padding-block: 12px; }
.wordmark { display: inline-flex; align-items: center; gap: 12px; color: rgb(var(--v-theme-on-surface)); font-family: var(--font-mono); font-weight: 500; font-size: 1rem; text-decoration: none; white-space: nowrap; }
.brand-mark { color: rgb(var(--v-theme-primary)); font-size: 1.25rem; }
.desktop-nav { display: flex; flex-wrap: wrap; align-items: center; justify-content: end; gap: 8px 28px; margin-left: auto; }
.desktop-nav a { color: rgb(var(--v-theme-secondary)); font-family: var(--font-mono); font-size: .875rem; text-decoration: none; transition: color .15s; }
.desktop-nav a:hover { color: rgb(var(--v-theme-primary)); }
.header-controls { display: flex; flex-shrink: 0; align-items: center; gap: 0; margin-left: auto; }
.locale-button { min-width: 56px; padding-inline: 8px; font-size: .875rem; }
.mobile-menu-button { display: none; }
.mobile-navigation { height: 100%; min-height: 100%; padding: 20px; overflow-y: auto; }
.mobile-navigation > * { flex-shrink: 0; }
.navigation-dialog :deep(.v-overlay__content) { align-self: stretch; margin: 0 0 0 auto; height: 100dvh; max-height: 100%; max-width: 100%; }
.navigation-dialog :deep(.v-card) { border-radius: 0; }
.mobile-navigation-top { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.mobile-links { display: flex; flex-direction: column; gap: 8px; margin-block: 40px; }
.mobile-links a { display: block; padding: 12px 8px; color: rgb(var(--v-theme-on-surface)); text-decoration: none; font-size: 1.5rem; }
.mobile-preferences { display: flex; flex-wrap: wrap; gap: 12px; }
@media (max-width: 959px) {
  .header-inner { min-height: 72px; gap: 8px; }
  .desktop-nav { display: none; }
  .header-controls { margin-left: auto; }
  .mobile-menu-button { display: inline-flex; }
}
@media (max-width: 399px) {
  .header-inner { gap: 0; }
  .header-controls :deep(.v-btn--icon) { width: 40px; height: 44px; }
  .wordmark { font-size: .875rem; gap: 8px; }
}
</style>
