import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import ja from "@/locales/ja.json";
import { initialLocale } from "@/includes/preferences";

export default createI18n({
  locale: initialLocale(),
  fallbackLocale: "en",
  messages: { en, ja },
});
