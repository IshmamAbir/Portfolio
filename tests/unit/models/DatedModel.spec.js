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

import { DatedModel } from '@/model/DatedModel';

describe('DatedModel', () => {
  it('extends BaseModel and stores rawData', () => {
    const data = { start_time: '2020', end_time: '2021' };
    const model = new DatedModel(data);
    expect(model.rawData).toEqual(data);
  });

  it('sets startTime and endTime from data', () => {
    const model = new DatedModel({ start_time: 'Jan 2020', end_time: 'Dec 2021' });
    expect(model.startTime).toBe('Jan 2020');
    expect(model.endTime).toBe('Dec 2021');
  });

  it('uses achieve_time as endTime fallback', () => {
    const model = new DatedModel({ start_time: '2020', achieve_time: '2022' });
    expect(model.endTime).toBe('2022');
  });

  describe('dateRange getter', () => {
    it('returns "startTime - endTime" when both are set', () => {
      const model = new DatedModel({ start_time: 'Jan 2020', end_time: 'Dec 2021' });
      expect(model.dateRange).toBe('Jan 2020 - Dec 2021');
    });

    it('returns "startTime - Continuing" when endTime is not set', () => {
      const model = new DatedModel({ start_time: 'Jan 2020' });
      expect(model.dateRange).toBe('Jan 2020 - Continuing');
    });

    it('returns endTime when only endTime is set', () => {
      const model = new DatedModel({ end_time: '2021' });
      expect(model.dateRange).toBe('2021');
    });

    it('returns "N/A" when neither startTime nor endTime is set', () => {
      const model = new DatedModel({});
      expect(model.dateRange).toBe('N/A');
    });
  });
});
