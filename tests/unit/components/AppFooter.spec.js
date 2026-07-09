import { describe, it, expect, vi, beforeEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createI18n } from 'vue-i18n';
import { createTestingPinia } from '@pinia/testing';
import en from '../../../src/locales/en.json';
import ja from '../../../src/locales/ja.json';
import AppFooter from '@/components/AppFooter.vue';

vi.mock('@/services/portfolio.service', () => ({
  PortfolioService: {
    getSocialMediaItems: vi.fn().mockResolvedValue([
      { name: 'GitHub', url: 'https://github.com/test', primaryContact: true },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/test', primaryContact: false },
    ]),
  },
}));

describe('AppFooter', () => {
  let vuetify, i18n;

  beforeEach(() => {
    vuetify = createVuetify({ components, directives });
    i18n = createI18n({ locale: 'en', fallbackLocale: 'ja', messages: { en, ja } });
  });

  function createWrapper(userState = null) {
    return shallowMount(AppFooter, {
      global: {
        plugins: [
          vuetify, i18n,
          createTestingPinia({ createSpy: vi.fn, initialState: { user: { user: userState } } }),
        ],
      },
    });
  }

  it('renders the component', () => {
    const wrapper = createWrapper();
    expect(wrapper.exists()).toBe(true);
  });

  it('displays copyright with current year when user is available', async () => {
    const mockUser = {
      getLocalizedProperty: vi.fn((prop) => prop === 'fullName' ? 'JOHN DOE' : ''),
    };
    const wrapper = createWrapper(mockUser);
    await wrapper.vm.$nextTick();
    const text = wrapper.text();
    expect(text).toContain(new Date().getFullYear().toString());
    expect(text).toContain('All rights reserved');
  });

  it('does not display copyright when user is null', () => {
    const wrapper = createWrapper(null);
    expect(wrapper.find('.description').exists()).toBe(false);
  });
});
