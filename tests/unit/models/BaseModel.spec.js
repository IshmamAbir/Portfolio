import { describe, it, expect, vi } from 'vitest';

vi.mock('@/includes/i18n', () => ({
  default: {
    global: {
      locale: 'en',
      t: (key) => key,
    },
  },
}));

import { BaseModel } from '@/model/BaseModel';

describe('BaseModel', () => {
  it('stores raw data on construction', () => {
    const data = { foo: 'bar', baz: 42 };
    const model = new BaseModel(data);
    expect(model.rawData).toEqual(data);
  });

  describe('getLocalizedProperty', () => {
    it('returns the value directly if it is not an object', () => {
      const model = new BaseModel({});
      model.name = 'Simple String';
      expect(model.getLocalizedProperty('name')).toBe('Simple String');
    });

    it('returns the localized value for current locale (en)', () => {
      const model = new BaseModel({});
      model.title = { en: 'Hello', ja: 'こんにちは' };
      expect(model.getLocalizedProperty('title')).toBe('Hello');
    });

    it('falls back to English when locale value is missing', async () => {
      const i18n = (await import('@/includes/i18n')).default;
      i18n.global.locale = 'fr';

      const model = new BaseModel({});
      model.title = { en: 'Hello', ja: 'こんにちは' };
      expect(model.getLocalizedProperty('title')).toBe('Hello');

      i18n.global.locale = 'en';
    });

    it('returns the Japanese value when locale is ja', async () => {
      const i18n = (await import('@/includes/i18n')).default;
      i18n.global.locale = 'ja';

      const model = new BaseModel({});
      model.description = { en: 'English desc', ja: '日本語の説明' };
      expect(model.getLocalizedProperty('description')).toBe('日本語の説明');

      i18n.global.locale = 'en';
    });

    it('returns undefined for non-existent properties', () => {
      const model = new BaseModel({});
      expect(model.getLocalizedProperty('nonExistent')).toBeUndefined();
    });

    it('returns null if property is null', () => {
      const model = new BaseModel({});
      model.something = null;
      expect(model.getLocalizedProperty('something')).toBeNull();
    });
  });
});
