<template>
  <footer class="site-footer">
    <div class="site-container footer-inner">
      <div>
        <p class="footer-name">© {{ new Date().getFullYear() }} Ishmam Abir Chowdhury</p>
        <p class="footer-note">{{ $t("ui.footer_note") }}</p>
      </div>
      <nav class="footer-links" :aria-label="$t('ui.contact')">
        <a v-if="user" :href="'mailto:' + user.email">{{ $t("contact.email") }}</a>
        <a v-for="social in professionalSocials" :key="social.title" :href="social.url" target="_blank" rel="noopener noreferrer">{{ social.title }}</a>
        <button @click="$emit('open-cv', $event.currentTarget)">{{ $t("ui.view_cv") }}</button>
        <a href="#home">{{ $t("ui.back_to_top") }}</a>
      </nav>
    </div>
  </footer>
</template>
<script>
import { mapState } from "pinia";
import { useUserStore } from "@/stores/user.store";
import { PortfolioService } from "@/services/portfolio.service";
export default {
  name: "AppFooter",
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
.site-footer { padding-block: 32px; border-top: 1px solid rgb(var(--v-theme-outline)); font-family: var(--font-mono); }
.footer-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; }
.footer-name { margin-bottom: 4px; font-size: .875rem; }
.footer-note { margin: 0; color: rgb(var(--v-theme-secondary)); font-size: .875rem; }
.footer-links { display: flex; flex-wrap: wrap; gap: 16px 24px; }
.footer-links a, .footer-links button { color: rgb(var(--v-theme-secondary)); font-size: .875rem; text-decoration: none; cursor: pointer; }
.footer-links a:hover, .footer-links button:hover { color: rgb(var(--v-theme-primary)); text-decoration: underline; }
@media (max-width: 959px) { .footer-inner { flex-direction: column; align-items: start; gap: 24px; } }
</style>
