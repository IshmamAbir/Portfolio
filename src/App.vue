<template>
  <v-app>
    <a class="skip-link" href="#main-content">{{ $t("ui.skip_content") }}</a>
    <app-header />
    <v-main tag="div">
      <router-view @open-cv="openCv" />
    </v-main>
    <app-footer @open-cv="openCv" />
    <PdfViewer v-if="cvLoaded && user" v-model="showCv" :pdf-path="assetUrl(user.cv)" :activator="cvActivator" />
  </v-app>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapState } from "pinia";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
import { useUserStore } from "@/stores/user.store";
import { assetUrl } from "@/includes/assets";
import { savePreference } from "@/includes/preferences";

export default {
  name: "App",
  components: { AppHeader, AppFooter, PdfViewer: defineAsyncComponent(() => import("@/components/PdfViewer.vue")) },
  data: () => ({ showCv: false, cvLoaded: false, cvActivator: null }),
  computed: { ...mapState(useUserStore, ["user"]) },
  watch: {
    "$vuetify.theme.global.name": {
      immediate: true,
      handler(theme) {
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0B1625" : "#FCFBF8");
      },
    },
    "$i18n.locale": {
      immediate: true,
      handler(locale) {
        document.documentElement.lang = locale;
        document.title = this.$t("ui.page_title");
        document.querySelector('meta[name="description"]')?.setAttribute("content", this.$t("ui.page_description"));
        savePreference("portfolio-locale", locale);
      },
    },
  },
  created() { this.fetchUserInfo(); },
  methods: {
    ...mapActions(useUserStore, ["fetchUserInfo"]),
    assetUrl,
    openCv(activator) { this.cvActivator = activator; this.cvLoaded = true; this.showCv = true; },
  },
};
</script>
