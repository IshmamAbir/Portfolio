<template>
  <section id="contacts" class="section" v-if="user" aria-labelledby="contact-heading">
    <div class="site-container contact-layout">
      <div>
        <span class="file-label" aria-hidden="true">contact.md</span>
        <p class="eyebrow">{{ $t("ui.contact") }}</p>
        <h2 id="contact-heading" class="section-heading">{{ $t("ui.contact_title") }}</h2>
        <p class="section-intro">{{ $t("ui.contact_intro") }}</p>
      </div>
      <div class="contact-actions">
        <v-btn color="primary" size="large" :href="'mailto:' + user.email">{{ $t("ui.email_me") }}</v-btn>
        <a class="contact-email" :href="'mailto:' + user.email">{{ user.email }}</a>
        <div class="contact-links">
          <a v-for="social in professionalSocials" :key="social.title" :href="social.url" target="_blank" rel="noopener noreferrer">{{ social.title }}</a>
          <button class="text-link" @click="$emit('open-cv', $event.currentTarget)">{{ $t("ui.view_cv") }}</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from "pinia";
import { useUserStore } from "@/stores/user.store";
import { PortfolioService } from "@/services/portfolio.service";
export default {
  name: "AppContact",
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
.contact-layout { display: grid; grid-template-columns: 1.3fr 1fr; gap: 64px; align-items: center; }
.section-heading { max-width: 560px; }
.contact-actions { display: flex; flex-direction: column; align-items: start; gap: 16px; }
.contact-email { color: rgb(var(--v-theme-secondary)); font-family: var(--font-mono); font-size: .875rem; overflow-wrap: anywhere; }
.contact-links { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 8px; }
.contact-links a, .contact-links button { color: rgb(var(--v-theme-primary)); font-weight: 500; text-decoration: underline; text-underline-offset: .25em; cursor: pointer; }
.contact-links { font-family: var(--font-mono); font-size: .875rem; }
@media (max-width: 767px) { .contact-layout { grid-template-columns: 1fr; gap: 32px; } }
</style>
