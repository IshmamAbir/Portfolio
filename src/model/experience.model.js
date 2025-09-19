import { DatedModel } from "./DatedModel";

export class ExperienceClass extends DatedModel {
  /**
   * Constructor for ExperienceClass.
   * @param {Object} data - The data object from the json file.
   * @property {number} id - The id of the experience.
   * @property {string} position - The position of the experience.
   * @property {string} companyName - The name of the company.
   * @property {string} companyWebsite - The website of the company.
   * @property {string} imageUrl - The url of the image.
   * @property {string} startTime - The start time of the experience.
   * @property {string} endTime - The end time of the experience.
   * @property {Object} shortDescription - The short description of the experience in both English and Japanese.
   * @property {Object} description - The description of the experience in both English and Japanese.
   * @property {Object} companyLocation - The location of the company in both English and Japanese.
   */
  constructor(data) {
    this.id = data.id;
    this.position = data.position;
    this.companyName = data.company_name;
    this.companyWebsite = data.company_website;
    this.imageUrl = data.img_url || "";
    this.startTime = data.start_time;
    this.endTime = data.end_time;
    this.shortDescription = {
      en: data.short_description_en,
      ja: data.short_description_ja,
    };
    this.description = {
      en: data.description_en,
      ja: data.description_ja,
    };
    this.companyLocation = {
      en: data.company_location_en,
      ja: data.company_location_ja,
    };
  }

  // inherits dateRange & getLocalizedProperty() from DatedModel
}
