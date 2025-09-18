// Service is currently getting dummy data from `portfolio.data.js`

import {
  educations,
  JobExperiences,
  socialItems,
  technicalSkills,
  userData,
} from "../data/portfolio.data";
import { EducationClass } from "../model/education.model";
import { ExperienceClass } from "../model/experience.model";
import { UserInfoClass } from "../model/user.model";

// replace with your data fetch code to get data from database
export const PortfolioService = {
  async getUserInfo() {
    console.log("getUserInfo ->", new UserInfoClass(userData));
    return new UserInfoClass(userData);
  },

  async getSocialMediaItems() {
    return socialItems;
  },

  async getTechnicalSkills() {
    return technicalSkills;
  },

  async getEducationList() {
    return educations.map((education) => new EducationClass(education));
  },

  async getJobExperiences() {
    return JobExperiences.map((job) => new ExperienceClass(job));
  },
};
