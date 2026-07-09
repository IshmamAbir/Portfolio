import { describe, it, expect, vi } from 'vitest';

vi.mock('@/includes/i18n', () => ({
  default: {
    global: {
      locale: 'en',
      t: (key) => key,
    },
  },
}));

import { UserInfoClass } from '@/model/user.model';

const mockUserData = {
  id: 1,
  first_name_en: 'John',
  first_name_ja: 'ジョン',
  middle_name_en: 'Michael',
  middle_name_ja: 'マイケル',
  last_name_en: 'Doe',
  last_name_ja: 'ドー',
  email: 'john@example.com',
  background_image: '/images/bg.jpg',
  center_image: '/images/center.jpg',
  sidebar_image: '/images/sidebar.jpg',
  bottom_image: '/images/bottom.jpg',
  cv: '/files/cv.pdf',
  designation_en: 'Software Engineer',
  designation_ja: 'ソフトウェアエンジニア',
  banner_designation: ['Developer', 'Designer'],
  banner_introduction_en: 'Hello, I am John',
  banner_introduction_ja: 'こんにちは、ジョンです',
};

describe('UserInfoClass', () => {
  it('constructs with all properties mapped correctly', () => {
    const user = new UserInfoClass(mockUserData);
    expect(user.id).toBe(1);
    expect(user.email).toBe('john@example.com');
    expect(user.backgroundImage).toBe('/images/bg.jpg');
    expect(user.centerImage).toBe('/images/center.jpg');
    expect(user.sidebarImage).toBe('/images/sidebar.jpg');
    expect(user.bottomImage).toBe('/images/bottom.jpg');
    expect(user.cv).toBe('/files/cv.pdf');
  });

  it('builds i18n firstName, middlename, lastname objects', () => {
    const user = new UserInfoClass(mockUserData);
    expect(user.firstName).toEqual({ en: 'John', ja: 'ジョン' });
    expect(user.middlename).toEqual({ en: 'Michael', ja: 'マイケル' });
    expect(user.lastname).toEqual({ en: 'Doe', ja: 'ドー' });
  });

  it('computes English fullName correctly (with middle name)', () => {
    const user = new UserInfoClass(mockUserData);
    expect(user.fullName.en).toBe('JOHN MICHAEL DOE');
  });

  it('computes English fullName correctly (without middle name)', () => {
    const dataNoMiddle = { ...mockUserData, middle_name_en: '' };
    const user = new UserInfoClass(dataNoMiddle);
    expect(user.fullName.en).toBe('JOHN DOE');
  });

  it('computes Japanese fullName correctly (with middle name)', () => {
    const user = new UserInfoClass(mockUserData);
    expect(user.fullName.ja).toBe('ドー　ジョン　マイケル');
  });

  it('computes Japanese fullName correctly (without middle name)', () => {
    const dataNoMiddle = { ...mockUserData, middle_name_ja: '' };
    const user = new UserInfoClass(dataNoMiddle);
    expect(user.fullName.ja).toBe('ドー　ジョン');
  });

  it('builds designation i18n object', () => {
    const user = new UserInfoClass(mockUserData);
    expect(user.designation).toEqual({ en: 'Software Engineer', ja: 'ソフトウェアエンジニア' });
  });

  it('stores bannerDesignation directly', () => {
    const user = new UserInfoClass(mockUserData);
    expect(user.bannerDesignation).toEqual(['Developer', 'Designer']);
  });

  it('builds bannerIntroduction i18n object', () => {
    const user = new UserInfoClass(mockUserData);
    expect(user.bannerIntroduction).toEqual({ en: 'Hello, I am John', ja: 'こんにちは、ジョンです' });
  });

  it('preserves raw data reference', () => {
    const user = new UserInfoClass(mockUserData);
    expect(user.raw).toBe(mockUserData);
    expect(user.rawData).toBe(mockUserData);
  });

  it('inherits getLocalizedProperty from BaseModel', () => {
    const user = new UserInfoClass(mockUserData);
    expect(user.getLocalizedProperty('firstName')).toBe('John');
    expect(user.getLocalizedProperty('designation')).toBe('Software Engineer');
  });
});
