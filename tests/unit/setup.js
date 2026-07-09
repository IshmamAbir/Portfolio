import { config } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createI18n } from 'vue-i18n';
import en from '../../src/locales/en.json';
import ja from '../../src/locales/ja.json';

// Create Vuetify instance for tests
const vuetify = createVuetify({
  components,
  directives,
});

// Create i18n instance for tests
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'ja',
  messages: { en, ja },
});

// Install plugins globally for all tests
config.global.plugins = [vuetify, i18n];

// Stub router-link and router-view by default
config.global.stubs = {
  'router-link': true,
  'router-view': true,
};
