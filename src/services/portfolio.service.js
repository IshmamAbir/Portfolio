/* eslint-env browser */
// Portfolio content is local; articles are fetched from dev.to.

import {
  achievements,
  certifications,
  educations,
  JobExperiences,
  projects,
  socialItems,
  technicalSkills,
  userData,
} from "@/data/portfolio.data";
import { AchievementClass } from "@/model/Achievement.model";
import { CertificationClass } from "@/model/Certification.model";
import { EducationClass } from "@/model/Education.model";
import { ExperienceClass } from "@/model/Experience.model";
import { ProjectClass } from "@/model/Project.model";
import { UserInfoClass } from "@/model/User.model";

// replace with your data fetch code to get data from database
export const PortfolioService = {
  async getBlogArticles(username) {
    const query = new URLSearchParams({ username, order: "created_at desc" });
    const response = await fetch(`https://dev.to/api/articles?${query}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch articles (${response.status})`);
    }
    return response.json();
  },

  async getUserInfo() {
    return new UserInfoClass(userData);
  },

  async getSocialMediaItems() {
    return socialItems;
  },

  async getTechnicalSkills() {
    return technicalSkills;
  },

  async getCertifications() {
    return certifications.map(
      (certification) => new CertificationClass(certification)
    );
  },
  async getAchievements() {
    return achievements.map((achievement) => new AchievementClass(achievement));
  },

  async getEducationList() {
    return educations.map((education) => new EducationClass(education));
  },

  async getJobExperiences() {
    return JobExperiences.map((job) => new ExperienceClass(job));
  },

  async getProjects() {
    return projects.map((project) => new ProjectClass(project));
  },
};
