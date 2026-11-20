<template>
  <section id="project" class="section" aria-labelledby="work-heading">
    <div class="site-container">
      <div class="section-header">
        <div>
          <p class="eyebrow">{{ $t("work.eyebrow") }}</p>
          <h2 id="work-heading" class="section-heading">{{ $t("work.title") }}</h2>
          <p class="section-intro">{{ $t("work.intro") }}</p>
        </div>
      </div>

      <div class="featured-projects">
        <article v-for="item in featuredProjects" :key="item.id" class="featured-project">
          <div class="project-copy">
            <p class="project-kind">{{ getProjectType(item.projectType) }}</p>
            <h3>{{ item.name }}</h3>
            <p class="project-summary">{{ item.getLocalizedProperty("summary") }}</p>
            <p class="project-approach">{{ item.getLocalizedProperty("problem") }}</p>
            <ul class="technology-list" :aria-label="$t('work.technologies')">
              <li v-for="technology in item.technologyUsed" :key="technology">{{ technology }}</li>
            </ul>
            <div class="project-actions">
              <button type="button" class="text-link project-details" @click="openProject(item, $event)">
                {{ $t("work.details") }}
                <span class="d-sr-only">: {{ item.name }}</span>
              </button>
              <a class="text-link repository-link" :href="item.url" target="_blank" rel="noopener noreferrer">
                {{ $t("work.repository") }}
                <span class="d-sr-only">: {{ item.name }}</span>
              </a>
            </div>
          </div>

          <figure class="project-architecture blueprint-grid" :aria-labelledby="'architecture-' + item.id">
            <figcaption :id="'architecture-' + item.id" class="diagram-header">
              <span>{{ $t("blueprint.architecture") }}</span>
              <span class="file-label">architecture.md</span>
            </figcaption>
            <ol class="diagram-flow">
              <li v-for="(node, index) in item.getLocalizedProperty('architecture')" :key="index" class="diagram-node">
                <strong>{{ node.name }}</strong>
                <span>{{ node.detail }}</span>
              </li>
            </ol>
            <p v-if="item.getLocalizedProperty('backgroundFlow')" class="background-flow">{{ item.getLocalizedProperty("backgroundFlow") }}</p>
            <a class="diagram-source" :href="item.architectureSource" target="_blank" rel="noopener noreferrer">{{ $t("blueprint.source_note") }}</a>
          </figure>
        </article>
      </div>

      <div class="project-toggle">
        <v-btn variant="outlined" color="primary" :aria-expanded="showAll" aria-controls="other-projects" @click="showAll = !showAll">
          {{ $t(showAll ? "work.show_less" : "work.show_all") }}
        </v-btn>
      </div>

      <div v-if="showAll" id="other-projects" class="more-projects">
        <h3 class="more-heading">{{ $t("work.more_title") }}</h3>
        <div class="other-projects-grid">
          <article v-for="item in otherProjects" :key="item.id" class="archive-project">
            <img v-if="item.imgUrl" :src="assetUrl(item.imgUrl)" alt="" loading="lazy" class="project-image" />
            <div class="archive-project-content">
              <p class="project-kind">{{ getProjectType(item.projectType) }}</p>
              <h3>{{ item.name }}</h3>
              <p class="project-summary">{{ item.getLocalizedProperty("summary") }}</p>
              <button type="button" class="text-link project-details" @click="openProject(item, $event)">
                {{ $t("work.details") }}
                <span class="d-sr-only">: {{ item.name }}</span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
    <ProjectPopup v-model="showProject" :project-data="projectData" :activator="projectActivator" />
  </section>
</template>

<script>
import { assetUrl } from "@/includes/assets";
import { PortfolioService } from "@/services/portfolio.service";
import ProjectPopup from "./ProjectPopup.vue";

export default {
  name: "AppProjects",
  components: { ProjectPopup },
  data() {
    return { projectList: [], projectData: null, projectActivator: null, showProject: false, showAll: false };
  },
  computed: {
    featuredProjects() {
      return this.projectList.filter((item) => item.featured).sort((a, b) => a.featuredOrder - b.featuredOrder);
    },
    otherProjects() { return this.projectList.filter((item) => !item.featured); },
  },
  async created() { this.projectList = await PortfolioService.getProjects(); },
  methods: {
    assetUrl,
    getProjectType(code) { return this.$t(`project_type.${code.toLowerCase()}`); },
    openProject(item, event) {
      this.projectData = item;
      this.projectActivator = event.currentTarget;
      this.showProject = true;
    },
  },
};
</script>

<style scoped>
.featured-projects { border-top: 1px solid rgb(var(--v-theme-outline)); }
.featured-project {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  align-items: center;
  gap: 64px;
  padding-block: 48px;
  border-bottom: 1px solid rgb(var(--v-theme-outline));
}
.project-kind {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: rgb(var(--v-theme-secondary));
  font-family: var(--font-mono);
  font-size: .875rem;
}
.featured-project h3 { font-size: clamp(1.5rem, 2.6vw, 2rem); letter-spacing: -.035em; margin-bottom: 20px; }
.project-summary { color: rgb(var(--v-theme-on-surface)); margin-bottom: 16px; line-height: 1.8; }
.project-approach { color: rgb(var(--v-theme-secondary)); font-size: .9375rem; margin-bottom: 24px; }
.technology-list { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; padding: 0; margin: 0 0 24px; }
.technology-list li { font-family: var(--font-mono); font-size: .875rem; padding: 3px 8px; border: 1px solid rgb(var(--v-theme-outline)); border-radius: 4px; }
.project-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 24px; }
.project-details, .repository-link { display: inline-flex; align-items: center; min-height: 44px; text-align: start; color: rgb(var(--v-theme-primary)); cursor: pointer; text-decoration: underline; font-size: .9375rem; }
.project-architecture { margin: 0; border: 1px solid rgb(var(--v-theme-outline)); border-radius: 8px; overflow: hidden; }
.diagram-header { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; padding: 14px 20px; border-bottom: 1px solid rgb(var(--v-theme-outline)); background: rgb(var(--v-theme-surface)); font-size: .875rem; }
.diagram-header > span:first-child { font-weight: 600; }
.diagram-header .file-label { color: rgb(var(--v-theme-secondary)); }
.diagram-flow { display: grid; gap: 20px; list-style: none; margin: 0; padding: 28px; }
.diagram-node { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 4px 16px; position: relative; padding: 14px 16px; min-height: 64px; border: 1px solid rgb(var(--v-theme-outline)); border-radius: 4px; background: rgb(var(--v-theme-surface)); }
.diagram-node:last-child { border-color: rgb(var(--v-theme-primary)); }
.diagram-node:not(:last-child)::after { content: ""; position: absolute; left: 50%; top: 100%; height: 21px; border-left: 1px solid rgb(var(--v-theme-primary)); }
.diagram-node strong { font-size: .9375rem; font-weight: 500; }
.diagram-node span { color: rgb(var(--v-theme-secondary)); font-family: var(--font-mono); font-size: .875rem; overflow-wrap: anywhere; }
.background-flow { margin: 0 28px 16px; padding: 12px; border-left: 2px solid rgb(var(--v-theme-accent)); background: rgb(var(--v-theme-surface)); font-family: var(--font-mono); font-size: .875rem; }
.diagram-source { display: flex; align-items: center; min-height: 44px; padding: 0 28px 12px; font-size: .875rem; color: rgb(var(--v-theme-secondary)); text-underline-offset: .2em; }
.project-toggle { margin-top: 32px; }
.more-projects { padding-top: 40px; }
.more-heading { margin-bottom: 24px; font-size: 1.25rem; }
.other-projects-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.archive-project { display: flex; flex-direction: column; border: 1px solid rgb(var(--v-theme-outline)); border-radius: 8px; overflow: hidden; background: rgb(var(--v-theme-surface)); }
.project-image { width: 100%; aspect-ratio: 16 / 10; object-fit: cover; object-position: top; border-bottom: 1px solid rgb(var(--v-theme-outline)); }
.archive-project-content { display: flex; flex-direction: column; align-items: start; flex: 1; padding: 24px; }
.archive-project h3 { font-size: 1.25rem; margin-bottom: 16px; }
.archive-project .project-kind { margin-bottom: 12px; }
.archive-project .project-details { margin-top: auto; }
@media (max-width: 959px) {
  .featured-project { gap: 32px; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
  .diagram-flow { padding: 20px; }
  .diagram-source { padding-inline: 20px; }
  .background-flow { margin-inline: 20px; }
  .other-projects-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 767px) {
  .featured-project { grid-template-columns: minmax(0, 1fr); gap: 28px; padding-block: 32px; }
  .project-architecture { width: 100%; }
}
@media (max-width: 599px) {
  .other-projects-grid { grid-template-columns: minmax(0, 1fr); gap: 16px; }
  .diagram-header { padding: 12px 16px; }
  .diagram-flow { padding: 20px 16px; gap: 16px; }
  .diagram-node { padding: 12px; flex-direction: column; align-items: start; }
  .diagram-node:not(:last-child)::after { height: 17px; }
  .background-flow { margin-inline: 16px; }
  .diagram-source { padding-inline: 16px; }
}
</style>
