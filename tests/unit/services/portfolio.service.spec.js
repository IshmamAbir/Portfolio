import { describe, it, expect, vi } from 'vitest';

vi.mock('@/includes/i18n', () => ({
  default: { global: { locale: 'en', t: (key) => key } },
}));

import { PortfolioService } from '@/services/portfolio.service';
import { UserInfoClass } from '@/model/user.model';
import { CertificationClass } from '@/model/Certification.model';
import { AchievementClass } from '@/model/Achievement.model';
import { EducationClass } from '@/model/Education.model';
import { ExperienceClass } from '@/model/Experience.model';
import { ProjectClass } from '@/model/Project.model';

describe('PortfolioService', () => {
  describe('getUserInfo', () => {
    it('returns a UserInfoClass instance', async () => {
      const result = await PortfolioService.getUserInfo();
      expect(result.constructor.name).toBe('UserInfoClass');
    });

    it('returns user with required properties', async () => {
      const result = await PortfolioService.getUserInfo();
      expect(result.email).toBeDefined();
      expect(result.firstName).toBeDefined();
      expect(result.fullName).toBeDefined();
    });
  });

  describe('getSocialMediaItems', () => {
    it('returns an array of social items', async () => {
      const result = await PortfolioService.getSocialMediaItems();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('each social item has url property', async () => {
      const result = await PortfolioService.getSocialMediaItems();
      result.forEach((item) => { expect(item.url).toBeDefined(); });
    });
  });

  describe('getTechnicalSkills', () => {
    it('returns an array of skills with name and percentage', async () => {
      const result = await PortfolioService.getTechnicalSkills();
      expect(Array.isArray(result)).toBe(true);
      result.forEach((skill) => {
        expect(skill.name).toBeDefined();
        expect(skill.percentage).toBeGreaterThanOrEqual(0);
        expect(skill.percentage).toBeLessThanOrEqual(100);
      });
    });
  });

  describe('getCertifications', () => {
    it('returns CertificationClass instances', async () => {
      const result = await PortfolioService.getCertifications();
      result.forEach((cert) => { expect(cert).toBeInstanceOf(CertificationClass); });
    });
  });

  describe('getAchievements', () => {
    it('returns AchievementClass instances', async () => {
      const result = await PortfolioService.getAchievements();
      result.forEach((a) => { expect(a).toBeInstanceOf(AchievementClass); });
    });
  });

  describe('getEducationList', () => {
    it('returns EducationClass instances', async () => {
      const result = await PortfolioService.getEducationList();
      result.forEach((edu) => { expect(edu).toBeInstanceOf(EducationClass); });
    });
  });

  describe('getJobExperiences', () => {
    it('returns ExperienceClass instances', async () => {
      const result = await PortfolioService.getJobExperiences();
      result.forEach((job) => { expect(job).toBeInstanceOf(ExperienceClass); });
    });
  });

  describe('getProjects', () => {
    it('returns ProjectClass instances', async () => {
      const result = await PortfolioService.getProjects();
      result.forEach((p) => { expect(p).toBeInstanceOf(ProjectClass); });
    });
  });
});
