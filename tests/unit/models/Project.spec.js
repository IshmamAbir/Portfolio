import { describe, it, expect, vi } from 'vitest';

vi.mock('@/includes/i18n', () => ({
  default: {
    global: {
      locale: 'en',
      t: (key) => key,
    },
  },
}));

import { ProjectClass } from '@/model/Project.model';

const mockProjectData = {
  id: 1,
  name: 'Portfolio Website',
  url: 'https://portfolio.example.com',
  img_url: '/images/portfolio.png',
  project_type: 'personal',
  technology_used: ['Vue.js', 'Vuetify', 'Pinia'],
  my_role_en: 'Full Stack Developer',
  my_role_ja: 'フルスタック開発者',
  description_en: 'A personal portfolio website',
  description_ja: 'ポートフォリオサイト',
};

describe('ProjectClass', () => {
  it('maps all properties correctly', () => {
    const project = new ProjectClass(mockProjectData);
    expect(project.id).toBe(1);
    expect(project.name).toBe('Portfolio Website');
    expect(project.url).toBe('https://portfolio.example.com');
    expect(project.imgUrl).toBe('/images/portfolio.png');
    expect(project.projectType).toBe('personal');
    expect(project.technologyUsed).toEqual(['Vue.js', 'Vuetify', 'Pinia']);
  });

  it('builds i18n objects for myRole and description', () => {
    const project = new ProjectClass(mockProjectData);
    expect(project.myRole).toEqual({ en: 'Full Stack Developer', ja: 'フルスタック開発者' });
    expect(project.description).toEqual({ en: 'A personal portfolio website', ja: 'ポートフォリオサイト' });
  });

  it('inherits getLocalizedProperty from BaseModel', () => {
    const project = new ProjectClass(mockProjectData);
    expect(project.getLocalizedProperty('description')).toBe('A personal portfolio website');
  });

  it('does not extend DatedModel (no dateRange)', () => {
    const project = new ProjectClass(mockProjectData);
    expect(project.dateRange).toBeUndefined();
  });
});
