<template>
  <section class="section education-section" aria-labelledby="educations">
    <div class="site-container">
      <div class="section-header education-header">
        <p class="file-label"><span aria-hidden="true">education.yml</span><span>{{ $t("about_content.education_eyebrow") }}</span></p>
        <h2 id="educations" class="section-heading">{{ $t("about_content.education_title") }}</h2>
      </div>
      <v-expansion-panels variant="accordion" multiple class="education-list">
        <v-expansion-panel v-for="item in timeline" :key="item.id" elevation="0">
          <v-expansion-panel-title>
            <span class="education-summary">
              <span>
                <strong class="education-degree">{{ item.degree }}</strong>
                <span class="education-institute">{{ item.institute }}</span>
              </span>
              <span class="education-date">{{ item.dateRange }}</span>
            </span>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p class="education-description">{{ item.getLocalizedProperty("description") }}</p>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </section>
</template>

<script>
import { PortfolioService } from "@/services/portfolio.service";

export default {
  name: "AppEducation",
  data() {
    return { timeline: [] };
  },
  async created() {
    this.timeline = await PortfolioService.getEducationList();
  },
};
</script>

<style scoped>
.file-label { display: flex; flex-wrap: wrap; gap: .75rem; }
.file-label > span + span { color: rgb(var(--v-theme-secondary)); }
.education-header {
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: start;
  gap: 0;
}
.education-header .section-heading {
  font-size: clamp(1.5rem, 3vw, 2rem);
}
.education-list {
  border-top: 1px solid rgba(var(--v-theme-on-surface), .12);
}
.education-list :deep(.v-expansion-panel) {
  background: transparent;
  color: rgb(var(--v-theme-on-surface));
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), .12);
}
.education-list :deep(.v-expansion-panel-title) {
  padding: 1.5rem 0;
}
.education-list :deep(.v-expansion-panel-text__wrapper) {
  padding: 0 0 1.5rem;
}
.education-summary {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  gap: 1.5rem;
  padding-right: 1.5rem;
}
.education-degree {
  display: block;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
}
.education-institute {
  display: block;
  margin-top: .4rem;
  font-size: .875rem;
  color: rgba(var(--v-theme-on-surface), .65);
  line-height: 1.7;
}
.education-date {
  font-family: var(--font-mono);
  font-size: .875rem;
  flex-shrink: 0;
  color: rgba(var(--v-theme-on-surface), .65);
}
.education-description {
  max-width: 76ch;
  line-height: 1.9;
  color: rgba(var(--v-theme-on-surface), .75);
}
@media (max-width: 600px) {
  .education-summary {
    flex-direction: column;
    gap: .65rem;
  }
}
</style>
