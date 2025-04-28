import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./includes/i18n";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia } from "pinia";
loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .use(createPinia())
  .mount("#app");
