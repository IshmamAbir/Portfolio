<template>
  <v-dialog v-model="open" :activator="activator" :open-on-click="false" :aria-label="$t('ui.cv')" :fullscreen="$vuetify.display.xs" max-width="1120" scrollable @after-leave="restoreFocus">
    <v-card class="pdf-card" :aria-label="$t('ui.cv')">
      <div class="pdf-toolbar">
        <h2>{{ $t("ui.cv") }}</h2>
        <v-btn variant="text" :href="pdfPath" target="_blank" rel="noopener noreferrer">{{ $t("ui.open_pdf") }}</v-btn>
        <v-btn icon="mdi-close" variant="text" :aria-label="$t('ui.close')" @click="open = false" />
      </div>
      <v-card-text class="pdf-body">
        <p class="pdf-fallback">{{ $t("ui.pdf_error") }} <a :href="pdfPath" target="_blank" rel="noopener noreferrer">{{ $t("ui.open_pdf") }}</a></p>
        <vue-pdf-app v-if="open" class="pdf-preview" page-scale="page-fit" :pdf="pdfPath" :config="config" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import VuePdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";
export default {
  name: "PdfViewer",
  components: { VuePdfApp },
  props: {
    pdfPath: { type: String, required: true },
    modelValue: { type: Boolean, default: false },
    activator: { type: Object, default: null },
  },
  emits: ["update:modelValue"],
  data: () => ({
    config: {
      secondaryToolbar: { secondaryOpenFile: false, secondaryPrint: false, secondaryDownload: false, secondaryViewBookmark: false },
      toolbar: { toolbarViewerRight: { openFile: false, print: false, download: false, viewBookmark: false } },
    },
  }),
  computed: {
    open: {
      get() { return this.modelValue; },
      set(value) { this.$emit("update:modelValue", value); },
    },
  },
  methods: { restoreFocus() { this.activator?.focus(); } },
};
</script>
<style scoped>
.pdf-card { height: min(880px, 92dvh); border-radius: 8px; }
.pdf-toolbar { display: flex; align-items: center; gap: 8px; padding: 16px 24px; border-bottom: 1px solid rgba(var(--v-theme-on-surface), .12); }
.pdf-toolbar h2 { flex: 1; font-family: var(--font-mono); font-size: 1rem; }
.pdf-body { display: flex; flex-direction: column; min-height: 0; padding: 16px !important; }
.pdf-fallback { color: rgb(var(--v-theme-secondary)); font-size: .875rem; }
.pdf-preview { flex: 1; min-height: 300px; height: 65dvh; }
@media (max-width: 599px) {
  .pdf-card { height: 100dvh; border-radius: 0; }
  .pdf-toolbar { padding: 12px 16px; flex-wrap: wrap; }
  .pdf-toolbar h2 { font-size: 1rem; }
}
</style>
