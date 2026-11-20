<template>
  <v-dialog
    v-model="isOpen"
    :activator="activator"
    :open-on-click="false"
    :fullscreen="$vuetify.display.xs"
    max-width="880"
    scrollable
    aria-labelledby="project-dialog-title"
    @after-leave="restoreFocus"
  >
    <v-card v-if="projectData" class="project-dialog">
      <div class="dialog-header">
        <p class="eyebrow">{{ $t(`project_type.${projectData.projectType.toLowerCase()}`) }}</p>
        <v-btn variant="text" @click="isOpen = false">{{ $t("common.close") }}</v-btn>
      </div>
      <v-card-text class="project-dialog-content">
        <h2 id="project-dialog-title">{{ projectData.name }}</h2>
        <img v-if="!projectData.featured && projectData.imgUrl" :src="assetUrl(projectData.imgUrl)" alt="" class="dialog-image" />
        <dl v-if="projectData.featured" class="project-brief">
          <div v-for="field in ['problem', 'approach', 'contribution']" :key="field">
            <dt>{{ $t('blueprint.' + field) }}</dt>
            <dd>{{ projectData.getLocalizedProperty(field) }}</dd>
          </div>
        </dl>
        <h3>{{ $t("work.description") }}</h3>
        <div class="project-description" v-html="projectData.getLocalizedProperty('description')"></div>
        <template v-if="projectData.getLocalizedProperty('myRole')">
          <h3>{{ $t("work.role") }}</h3>
          <p>{{ projectData.getLocalizedProperty("myRole") }}</p>
        </template>
        <h3>{{ $t("work.technologies") }}</h3>
        <ul class="technology-list">
          <li v-for="(technology, index) in projectData.technologyUsed" :key="index">{{ technology }}</li>
        </ul>
        <a class="text-link" :href="projectData.url" target="_blank" rel="noopener noreferrer">{{ $t("work.visit") }}</a>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { assetUrl } from "@/includes/assets";
import { ProjectClass } from "@/model/Project.model";

export default {
  name: "ProjectPopup",
  props: {
    modelValue: Boolean,
    projectData: { type: ProjectClass, default: null },
    activator: { type: Object, default: null },
  },
  emits: ["update:modelValue"],
  computed: {
    isOpen: {
      get() { return this.modelValue; },
      set(value) { this.$emit("update:modelValue", value); },
    },
  },
  methods: {
    assetUrl,
    restoreFocus() {
      if (this.activator?.isConnected) this.activator.focus({ preventScroll: true });
    },
  },
};
</script>

<style scoped>
.project-dialog {
  border-radius: 8px;
}
.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}
.dialog-header .eyebrow {
  margin: 0;
}
.project-dialog-content {
  padding: 2rem !important;
  line-height: 1.8;
  font-size: 1rem !important;
}
.project-dialog-content h2 {
  margin: 0 0 2rem;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.2;
  letter-spacing: -0.03em;
}
.project-brief { margin: 0 0 32px; }
.project-brief > div { padding-block: 18px; border-bottom: 1px solid rgb(var(--v-theme-outline)); }
.project-brief dt { font-family: var(--font-mono); font-size: .875rem; color: rgb(var(--v-theme-primary)); margin-bottom: 8px; }
.project-brief dd { margin: 0; color: rgb(var(--v-theme-secondary)); }
.project-dialog-content h3 {
  margin: 2rem 0 0.75rem;
  font-size: 1.125rem;
}
.project-description,
.project-dialog-content p {
  color: rgba(var(--v-theme-on-surface), 0.8);
}
.dialog-image {
  display: block;
  width: 100%;
  max-height: 24rem;
  object-fit: contain;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
  border-radius: 0.5rem;
}
.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
}
@media (max-width: 599px) {
  .project-dialog {
    border-radius: 0;
  }
  .dialog-header {
    padding: 0.75rem 1rem;
  }
  .project-dialog-content {
    padding: 1.5rem !important;
  }
}
</style>
