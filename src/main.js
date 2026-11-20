import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./includes/i18n";
import vuetify from "./plugins/vuetify";
import router from "./router";

createApp(App)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .use(createPinia())
  .mount("#app");
