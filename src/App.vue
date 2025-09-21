<template>
  <v-app>
    <v-main>
      <!-- Header area -->
      <app-header />
      <!-- <gpt-header /> -->

      <router-view />

      <!-- Start Footer Area -->
      <app-footer />
    </v-main>
  </v-app>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
import { mapActions } from "pinia";
import { useUserStore } from "@/stores/user.store";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {
    // This helper maps the 'fetchUserInfo' action to 'this.fetchUserInfo()'
    ...mapActions(useUserStore, ["fetchUserInfo"]),
  },

  created() {
    this.fetchUserInfo();
  },
};
</script>
