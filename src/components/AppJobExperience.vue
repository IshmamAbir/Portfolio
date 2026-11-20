<template>
  <section id="experience" class="section career-section" aria-labelledby="career-heading">
    <div class="site-container">
      <div class="section-header">
        <div>
        <p class="file-label"><span aria-hidden="true">experience.log</span><span>{{ $t("career.eyebrow") }}</span></p>
        <h2 id="career-heading" class="section-heading">{{ $t("career.title") }}</h2>
        <p class="section-intro">{{ $t("career.intro") }}</p>
        </div>
      </div>
      <div class="career-list">
        <article v-for="item in timeline" :key="item.id" class="career-entry">
          <div class="career-meta">
            <p class="career-dates">{{ item.dateRange }}</p>
            <p>{{ item.getLocalizedProperty("companyLocation") }}</p>
          </div>
          <div class="career-content">
            <h3>{{ item.position }}</h3>
            <a class="company-name" :href="item.companyWebsite" target="_blank" rel="noopener noreferrer">
              {{ item.companyName }}
            </a>
            <p class="career-summary">{{ item.getLocalizedProperty("summary") }}</p>
            <button type="button" class="text-link career-details" @click="openRole(item, $event)">
              {{ $t("career.details") }}
              <span class="d-sr-only">: {{ item.position }}, {{ item.companyName }}</span>
            </button>
          </div>
        </article>
      </div>
    </div>
    <JobDescriptionPopup v-model="showRole" :company-data="companyData" :activator="roleActivator" />
  </section>
</template>

<script>
import { PortfolioService } from "@/services/portfolio.service";
import JobDescriptionPopup from "./JobDescriptionPopup.vue";

export default {
  name: "AppJobExperience",
  components: { JobDescriptionPopup },
  data() {
    return {
      timeline: [],
      companyData: null,
      roleActivator: null,
      showRole: false,
    };
  },
  async created() {
    this.timeline = await PortfolioService.getJobExperiences();
  },
  methods: {
    openRole(item, event) {
      this.companyData = item;
      this.roleActivator = event.currentTarget;
      this.showRole = true;
    },
  },
};
</script>

<style scoped>
.file-label { display: flex; flex-wrap: wrap; gap: .75rem; }
.file-label > span + span { color: rgb(var(--v-theme-secondary)); }
.career-list { border-top: 1px solid rgb(var(--v-theme-outline)); }
.career-entry { display: grid; grid-template-columns: 208px minmax(0, 1fr); gap: 24px; border-bottom: 1px solid rgb(var(--v-theme-outline)); }
.career-meta { padding-block: 28px; color: rgb(var(--v-theme-secondary)); font-family: var(--font-mono); font-size: .875rem; line-height: 1.8; }
.career-meta p { margin: 0; }
.career-dates { color: rgb(var(--v-theme-on-surface)); margin-bottom: 6px !important; }
.career-content { position: relative; padding: 28px 0 28px 32px; border-left: 1px solid rgb(var(--v-theme-outline)); min-width: 0; }
.career-content::before { content: ""; position: absolute; top: 36px; left: -4px; width: 7px; height: 7px; background: rgb(var(--v-theme-primary)); border-radius: 1px; }
.career-content h3 { margin: 0 0 6px; font-size: 1.25rem; line-height: 1.4; letter-spacing: -.025em; }
.company-name { color: rgb(var(--v-theme-secondary)); text-decoration: none; }
.company-name:hover { color: rgb(var(--v-theme-primary)); text-decoration: underline; }
.career-summary { max-width: 44rem; margin: 16px 0 12px; color: rgb(var(--v-theme-secondary)); line-height: 1.8; }
.career-details { min-height: 44px; color: rgb(var(--v-theme-primary)); cursor: pointer; text-decoration: underline; text-underline-offset: .25rem; text-align: start; font-size: .9375rem; }
@media (max-width: 767px) {
  .career-entry { grid-template-columns: 160px minmax(0, 1fr); gap: 16px; }
  .career-content { padding-left: 24px; }
}
@media (max-width: 599px) {
  .career-entry { grid-template-columns: minmax(0, 1fr); gap: 0; }
  .career-meta { border-left: 1px solid rgb(var(--v-theme-outline)); padding: 24px 0 0 24px; display: flex; flex-wrap: wrap; gap: 4px 16px; }
  .career-dates { margin-bottom: 0 !important; }
  .career-content { padding-top: 10px; padding-bottom: 24px; }
  .career-content::before { top: 18px; }
}
</style>
