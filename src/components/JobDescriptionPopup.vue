<template>
  <v-dialog
    v-model="isOpen"
    :activator="activator"
    :open-on-click="false"
    :fullscreen="$vuetify.display.xs"
    max-width="960"
    scrollable
    aria-labelledby="career-dialog-title"
    @after-leave="restoreFocus"
  >
    <v-card v-if="companyData" class="career-dialog">
      <div class="dialog-header">
        <p class="file-label"><span aria-hidden="true">role.md</span><span>{{ $t("career.eyebrow") }}</span></p>
        <v-btn variant="text" @click="isOpen = false">{{ $t("common.close") }}</v-btn>
      </div>
      <v-card-text class="career-dialog-content">
        <p class="role-meta">{{ companyData.dateRange }} · {{ companyData.getLocalizedProperty("companyLocation") }}</p>
        <h2 id="career-dialog-title">{{ companyData.position }}</h2>
        <a class="company-name" :href="companyData.companyWebsite" target="_blank" rel="noopener noreferrer">
          {{ companyData.companyName }}
        </a>
        <img v-if="companyData.imageUrl" :src="assetUrl(companyData.imageUrl)" alt="" class="role-image" />
        <div class="rich-text" v-html="companyData.getLocalizedProperty('description')"></div>
        <a class="text-link" :href="companyData.companyWebsite" target="_blank" rel="noopener noreferrer">
          {{ $t("career.company_website") }}
        </a>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { assetUrl } from "@/includes/assets";
import { ExperienceClass } from "@/model/Experience.model";

export default {
  name: "JobDescriptionPopup",
  props: {
    modelValue: Boolean,
    companyData: { type: ExperienceClass, default: null },
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
.career-dialog {
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
.dialog-header .file-label {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: .75rem;
}
.career-dialog-content {
  padding: 2rem !important;
  line-height: 1.8;
  font-size: 1rem !important;
}
.role-meta {
  font-family: var(--font-mono);
  color: rgba(var(--v-theme-on-surface), 0.65);
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}
.career-dialog-content h2 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.2;
  letter-spacing: -0.03em;
}
.company-name {
  color: rgb(var(--v-theme-primary));
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}
.role-image {
  display: block;
  width: 100%;
  max-height: 24rem;
  object-fit: contain;
  margin-top: 2rem;
}
.rich-text {
  margin: 2rem 0;
  color: rgba(var(--v-theme-on-surface), 0.8);
  overflow-wrap: anywhere;
}
.rich-text :deep(h4),
.rich-text :deep(h6) {
  color: rgb(var(--v-theme-on-surface));
  margin: 2rem 0 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
}
.rich-text :deep(p) {
  margin: 0 0 1rem;
}
.rich-text :deep(ul) {
  padding-left: 1.5rem;
  margin: 0.75rem 0 1.5rem;
}
.rich-text :deep(li) {
  margin-bottom: 0.5rem;
}
.rich-text :deep(a) {
  color: rgb(var(--v-theme-primary));
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}
@media (max-width: 599px) {
  .career-dialog {
    border-radius: 0;
  }
  .dialog-header {
    padding: 0.75rem 1rem;
  }
  .career-dialog-content {
    padding: 1.5rem !important;
  }
}
</style>
