import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import ja from "@/locales/ja.json";

export default createI18n({
  // locale: 'ja',
  locale: navigator.languages[0].split("-")[0],
  fallbackLocale: "ja",
  messages: {
    en,
    ja,
  },
});
