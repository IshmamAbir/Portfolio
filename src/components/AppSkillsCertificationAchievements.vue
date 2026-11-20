<template>
  <section id="about" class="section about-section" aria-labelledby="about-title">
    <div class="site-container">
      <div class="section-header">
        <div>
          <p class="file-label"><span aria-hidden="true">about.md</span><span>{{ $t("about_content.eyebrow") }}</span></p>
          <h2 id="about-title" class="section-heading">{{ $t("about_content.title") }}</h2>
        </div>
      </div>
      <div class="about-introduction">
        <figure v-if="user" class="profile-portrait blueprint-grid">
          <img :src="assetUrl(user.centerImage)" :alt="$t('ui.portrait_alt')" width="320" height="400" loading="lazy" />
          <figcaption>{{ user.getLocalizedProperty("fullName") }}</figcaption>
        </figure>
        <div>
          <p class="section-intro">{{ $t("about_content.intro") }}</p>
          <p class="personal-note">{{ $t("about_content.personal_note") }}</p>
        </div>
      </div>

      <div class="capabilities" aria-labelledby="skills">
        <h3 id="skills" class="subsection-heading">{{ $t("about_content.capabilities") }}</h3>
        <dl class="skill-groups">
          <div v-for="group in skillGroups" :key="group.key" class="skill-group">
            <dt>{{ $t("about_content." + group.key) }}</dt>
            <dd>
              <ul><li v-for="skill in group.items" :key="skill">{{ skill }}</li></ul>
            </dd>
          </div>
        </dl>
      </div>

      <v-expansion-panels class="about-details" variant="accordion" multiple>
        <v-expansion-panel v-if="user" elevation="0">
          <v-expansion-panel-title>{{ $t("about_content.full_profile") }}</v-expansion-panel-title>
          <v-expansion-panel-text>
            <p class="profile-copy">{{ user.getLocalizedProperty("bannerIntroduction") }}</p>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel elevation="0">
          <v-expansion-panel-title>
            {{ $t("about_content.certifications", { count: certificationList.length }) }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div class="credential-list">
              <article v-for="item in certificationList" :key="item.id" class="credential">
                <div class="credential-heading">
                  <h4><a class="text-link" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.title }}</a></h4>
                  <span class="credential-date">{{ item.dateRange }}</span>
                </div>
                <p class="credential-institute">{{ item.instituteName }}</p>
                <p>{{ item.getLocalizedProperty("description") }}</p>
              </article>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel elevation="0">
          <v-expansion-panel-title>
            {{ $t("about_content.achievements", { count: achievementList.length }) }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div class="credential-list">
              <article v-for="item in achievementList" :key="item.id" class="credential">
                <div class="credential-heading">
                  <h4><a class="text-link" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.title }}</a></h4>
                  <span class="credential-date">{{ item.dateRange }}</span>
                </div>
                <p class="credential-institute">{{ item.location }}</p>
                <p>{{ item.getLocalizedProperty("description") }}</p>
              </article>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </section>
</template>

<script>
import { mapState } from "pinia";
import { useUserStore } from "@/stores/user.store";
import { PortfolioService } from "@/services/portfolio.service";
import { assetUrl } from "@/includes/assets";

export default {
  name: "AppSkillsCertificationAchievements",
  data() {
    return {
      certificationList: [],
      achievementList: [],
      skillGroups: [
        { key: "backend", items: ["Go", "Java", "Spring Boot"] },
        { key: "data", items: ["PostgreSQL", "MySQL", "Redis"] },
        { key: "frontend", items: ["Vue", "Vuetify"] },
        { key: "delivery", items: ["Docker", "GitHub", "GitHub Actions"] },
      ],
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
  methods: { assetUrl },
  async created() {
    [this.certificationList, this.achievementList] = await Promise.all([
      PortfolioService.getCertifications(),
      PortfolioService.getAchievements(),
    ]);
  },
};
</script>

<style scoped>
.file-label { display: flex; flex-wrap: wrap; gap: .75rem; }
.file-label > span + span { color: rgb(var(--v-theme-secondary)); }
.about-introduction { display: grid; grid-template-columns: 192px minmax(0, 1fr); gap: 48px; align-items: center; max-width: 900px; }
.profile-portrait { margin: 0; padding: 10px; border: 1px solid rgb(var(--v-theme-outline)); border-radius: 8px; }
.profile-portrait img { width: 100%; height: auto; aspect-ratio: 4 / 5; object-fit: cover; object-position: center 32%; border-radius: 4px; filter: saturate(.6); }
.profile-portrait figcaption { margin-top: 10px; color: rgb(var(--v-theme-secondary)); font-size: .875rem; line-height: 1.5; overflow-wrap: anywhere; }
.personal-note { margin-top: 20px; color: rgb(var(--v-theme-secondary)); line-height: 1.8; }
.capabilities { margin-block: 48px; }
.subsection-heading { font-size: 1.125rem; font-weight: 600; margin-bottom: 24px; }
.skill-groups { margin: 0; border: 1px solid rgb(var(--v-theme-outline)); border-radius: 8px; overflow: hidden; background: rgb(var(--v-theme-surface)); }
.skill-group { display: grid; grid-template-columns: 192px minmax(0, 1fr); gap: 32px; padding: 20px 24px; }
.skill-group + .skill-group { border-top: 1px solid rgb(var(--v-theme-outline)); }
.skill-group dt { font-family: var(--font-mono); font-size: .875rem; color: rgb(var(--v-theme-secondary)); line-height: 1.9; }
.skill-group dd { margin: 0; min-width: 0; }
.skill-group ul { display: flex; flex-wrap: wrap; gap: 8px 32px; list-style: none; padding: 0; font-weight: 500; }
.skill-group li { overflow-wrap: anywhere; }
.about-details { border-top: 1px solid rgb(var(--v-theme-outline)); }
.about-details :deep(.v-expansion-panel) { color: rgb(var(--v-theme-on-surface)); background: transparent; border-bottom: 1px solid rgb(var(--v-theme-outline)); }
.about-details :deep(.v-expansion-panel-title) { padding: 24px 0; min-height: 72px; font-size: 1rem; font-weight: 500; }
.about-details :deep(.v-expansion-panel-text__wrapper) { padding: 0 0 24px; }
.profile-copy { max-width: 74ch; white-space: pre-line; line-height: 1.9; color: rgb(var(--v-theme-secondary)); }
.credential-list { display: grid; gap: 28px; }
.credential + .credential { border-top: 1px solid rgb(var(--v-theme-outline)); padding-top: 28px; }
.credential-heading { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; }
.credential h4 { font-weight: 500; font-size: 1rem; line-height: 1.6; }
.credential-date { flex-shrink: 0; font-family: var(--font-mono); font-size: .875rem; color: rgb(var(--v-theme-secondary)); }
.credential p { max-width: 76ch; color: rgb(var(--v-theme-secondary)); margin-top: 10px; line-height: 1.8; }
.credential .credential-institute { margin-top: 4px; font-size: .875rem; }
@media (max-width: 800px) {
  .about-introduction { grid-template-columns: 144px minmax(0, 1fr); gap: 24px; }
  .credential-heading { flex-direction: column; gap: 4px; }
}
@media (max-width: 599px) {
  .about-introduction { grid-template-columns: 1fr; gap: 24px; }
  .profile-portrait { width: 160px; }
  .skill-group { grid-template-columns: minmax(0, 1fr); gap: 8px; padding: 16px 20px; }
  .skill-group ul { gap: 8px 24px; }
}
</style>
