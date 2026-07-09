import { describe, it, expect, vi } from 'vitest';

vi.mock('@/includes/i18n', () => ({
  default: {
    global: {
      locale: 'en',
      t: (key) => {
        const translations = { 'common.continuing': 'Continuing' };
        return translations[key] || key;
      },
    },
  },
}));

import { ExperienceClass } from '@/model/Experience.model';

const mockExperienceData = {
  id: 1,
  position: 'Senior Developer',
  company_name: 'Tech Corp',
  company_website: 'https://techcorp.com',
  img_url: '/images/techcorp.png',
  start_time: 'Jan 2022',
  end_time: 'Dec 2023',
  short_description_en: 'Led the backend team',
  short_description_ja: 'バックエンドチームをリード',
  description_en: 'Full description in English',
  description_ja: '日本語の詳細説明',
  company_location_en: 'Tokyo, Japan',
  company_location_ja: '東京、日本',
};

describe('ExperienceClass', () => {
  it('maps all properties correctly', () => {
    const exp = new ExperienceClass(mockExperienceData);
    expect(exp.id).toBe(1);
    expect(exp.position).toBe('Senior Developer');
    expect(exp.companyName).toBe('Tech Corp');
    expect(exp.companyWebsite).toBe('https://techcorp.com');
    expect(exp.imageUrl).toBe('/images/techcorp.png');
  });

  it('defaults imageUrl to empty string when not provided', () => {
    const data = { ...mockExperienceData, img_url: undefined };
    const exp = new ExperienceClass(data);
    expect(exp.imageUrl).toBe('');
  });

  it('builds i18n objects for descriptions and location', () => {
    const exp = new ExperienceClass(mockExperienceData);
    expect(exp.shortDescription).toEqual({ en: 'Led the backend team', ja: 'バックエンドチームをリード' });
    expect(exp.description).toEqual({ en: 'Full description in English', ja: '日本語の詳細説明' });
    expect(exp.companyLocation).toEqual({ en: 'Tokyo, Japan', ja: '東京、日本' });
  });

  it('inherits dateRange from DatedModel', () => {
    const exp = new ExperienceClass(mockExperienceData);
    expect(exp.dateRange).toBe('Jan 2022 - Dec 2023');
  });

  it('shows Continuing for current jobs', () => {
    const data = { ...mockExperienceData, end_time: undefined };
    const exp = new ExperienceClass(data);
    expect(exp.dateRange).toBe('Jan 2022 - Continuing');
  });
});
