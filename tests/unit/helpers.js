import { mount, shallowMount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createI18n } from 'vue-i18n';
import { createTestingPinia } from '@pinia/testing';
import en from '../../src/locales/en.json';
import ja from '../../src/locales/ja.json';

/**
 * Creates common mount options for Vue components that use Vuetify, i18n, and Pinia.
 * @param {Object} overrides - Additional options to merge
 * @returns {Object} Mount options
 */
export function createMountOptions(overrides = {}) {
  const vuetify = createVuetify({ components, directives });
  const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'ja',
    messages: { en, ja },
  });

  const defaultOptions = {
    global: {
      plugins: [
        vuetify,
        i18n,
        createTestingPinia({
          createSpy: vi.fn,
          ...(overrides.piniaOptions || {}),
        }),
      ],
      stubs: {
        'router-link': true,
        'router-view': true,
        ...(overrides.stubs || {}),
      },
    },
  };

  const { piniaOptions, stubs, ...rest } = overrides;
  return { ...defaultOptions, ...rest };
}

/**
 * Helper to mount a component with all plugins pre-configured.
 */
export function mountWithPlugins(component, options = {}) {
  return mount(component, createMountOptions(options));
}

/**
 * Helper to shallow mount a component with all plugins pre-configured.
 */
export function shallowMountWithPlugins(component, options = {}) {
  return shallowMount(component, createMountOptions(options));
}
