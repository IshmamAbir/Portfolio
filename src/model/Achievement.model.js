import { DatedModel } from "./DatedModel";

export class AchievementClass extends DatedModel {
  /**
   * Constructor for AchievementClass
   * @param {object} data - Data object containing information about the achievement
   * @property {number} id - Unique identifier for the achievement
   * @property {string} title - Title of the achievement
   * @property {string} location - Location where the achievement took place
   * @property {string} url - URL link to the achievement
   * @property {string} achieveTime - Time when the achievement was achieved
   * @property {object} description - Object containing the description of the achievement in both English and Japanese
   */
  constructor(data) {
    super(data);

    this.id = data.id;
    this.title = data.title;
    this.location = data.location;
    this.url = data.url;
    this.achieveTime = data.achieve_time;
    this.description = {
      en: data.description_en,
      ja: data.description_ja,
    };
  }

  // inherits dateRange & getLocalizedProperty() from DatedModel
}
