<template>
  <section id="home" class="hero" v-if="user" aria-labelledby="hero-heading">
    <div class="site-container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">{{ $t("ui.based_in") }}</p>
        <p class="hero-name">{{ user.getLocalizedProperty("fullName") }}</p>
        <h1 id="hero-heading">{{ user.getLocalizedProperty("heroHeadline") }}</h1>
        <p class="hero-summary">{{ user.getLocalizedProperty("heroSummary") }}</p>
        <div class="hero-actions">
          <v-btn color="primary" size="large" href="#project">{{ $t("ui.view_work") }}</v-btn>
          <v-btn variant="outlined" size="large" @click="$emit('open-cv', $event.currentTarget)">{{ $t("ui.view_cv") }}</v-btn>
        </div>
        <div class="hero-links">
          <a v-for="item in professionalSocials" :key="item.title" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
        </div>
      </div>
      <div class="profile-panel blueprint-grid" aria-hidden="true">
        <div class="profile-tab"><span class="code-file-mark">{ }</span>profile.go</div>
        <pre class="profile-code"><code><span class="code-keyword">package</span> portfolio

<span class="code-keyword">var</span> profile = <span class="code-keyword">map</span>[string]any{
  <span class="code-key">"name"</span>:  "{{ user.getLocalizedProperty("fullName") }}",
  <span class="code-key">"based"</span>: "{{ $t("blueprint.japan") }}",
  <span class="code-key">"stack"</span>: []string{
    "Go", "Java", "Vue",
  },
}</code></pre>
        <div class="profile-caption"><span class="caption-rule"></span>{{ $t("blueprint.profile_caption") }}</div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from "pinia";
import { useUserStore } from "@/stores/user.store";
import { PortfolioService } from "@/services/portfolio.service";
export default {
  name: "AppSlider",
  emits: ["open-cv"],
  data: () => ({ socials: [] }),
  computed: {
    ...mapState(useUserStore, ["user"]),
    professionalSocials() { return this.socials.filter(item => ["GitHub", "LinkedIn"].includes(item.title)); },
  },
  async created() { this.socials = await PortfolioService.getSocialMediaItems(); },
};
</script>
<style scoped>
.hero { padding-block: 96px 104px; border-bottom: 1px solid rgb(var(--v-theme-outline)); }
.hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(0, 1fr); align-items: center; gap: 64px; }
.hero-copy, .profile-panel { min-width: 0; }
.hero-name { color: rgb(var(--v-theme-secondary)); margin-bottom: 20px; font-size: 1.125rem; }
h1 { font-size: clamp(2.5rem, 4.7vw, 3.75rem); letter-spacing: -.055em; line-height: 1.08; margin-bottom: 28px; text-wrap: balance; }
.hero-summary { max-width: 560px; font-size: 1.0625rem; color: rgb(var(--v-theme-secondary)); line-height: 1.85; margin-bottom: 32px; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
.hero-links { display: flex; gap: 24px; margin-top: 28px; }
.hero-links a { color: rgb(var(--v-theme-on-surface)); font-family: var(--font-mono); font-size: .875rem; text-decoration: none; }
.hero-links a:hover { color: rgb(var(--v-theme-primary)); text-decoration: underline; }
.profile-panel { border: 1px solid rgb(var(--v-theme-outline)); border-radius: 8px; overflow: hidden; position: relative; }
.profile-tab { display: flex; align-items: center; gap: 12px; padding: 16px 24px; border-bottom: 1px solid rgb(var(--v-theme-outline)); background: rgb(var(--v-theme-surface)); font-family: var(--font-mono); font-size: .875rem; }
.code-file-mark { color: rgb(var(--v-theme-primary)); }
.profile-code { padding: 32px 24px; margin: 0; font-family: var(--font-mono); font-size: .875rem; line-height: 2; white-space: pre-wrap; overflow-wrap: anywhere; }
.profile-code code { font: inherit; }
.code-keyword { color: rgb(var(--v-theme-primary)); font-weight: 500; }
.code-key { color: rgb(var(--v-theme-secondary)); }
.profile-caption { display: flex; gap: 12px; align-items: center; padding: 16px 24px; font-family: var(--font-mono); font-size: .875rem; color: rgb(var(--v-theme-secondary)); border-top: 1px solid rgb(var(--v-theme-outline)); background: rgb(var(--v-theme-surface)); }
.caption-rule { display: block; width: 24px; height: 3px; flex: 0 0 24px; background: rgb(var(--v-theme-accent)); }
@media (max-width: 959px) {
  .hero { padding-block: 64px 72px; }
  .hero-grid { gap: 32px; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
  h1 { font-size: 2.75rem; }
  .profile-code { padding: 24px 20px; }
}
@media (max-width: 699px) {
  .hero-grid { grid-template-columns: minmax(0, 1fr); gap: 40px; }
  h1 { font-size: clamp(2.25rem, 7vw, 3rem); max-width: 600px; }
  .hero-summary, .hero-name { font-size: 1rem; }
  .profile-tab, .profile-caption { padding-inline: 20px; }
}
</style>
