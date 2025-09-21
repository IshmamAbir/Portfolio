import { DatedModel } from "./DatedModel";

export class CertificationClass extends DatedModel {
  /**
   * Constructor for CertificationClass
   * @param {Object} data - Data object containing information about the certification
   * @property {number} id - Unique identifier for the certification
   * @property {string} title - Title of the certification
   * @property {string} instituteName - Name of the institute that issued the certification
   * @property {string} url - URL link to the certification
   * @property {string} startTime - Start time of the certification
   * @property {string} endTime - End time of the certification
   * @property {Object} description - Object containing the description of the certification in both English and Japanese
   */
  constructor(data) {
    super(data);

    this.id = data.id;
    this.title = data.title;
    this.instituteName = data.institute_name;
    this.url = data.url;
    this.startTime = data.start_time;
    this.endTime = data.end_time;
    this.description = {
      en: data.description_en,
      ja: data.description_ja,
    };
  }

  // inherits dateRange & getLocalizedProperty() from DatedModel
}
