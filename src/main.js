import axios from "axios";
import { createPinia } from "pinia";
import { createApp } from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";
import i18n from "./includes/i18n";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueAxios, axios)
  .use(i18n)
  .use(createPinia())
  .mount("#app");
