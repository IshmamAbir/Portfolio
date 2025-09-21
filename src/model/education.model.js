import { DatedModel } from "@/model/DatedModel";

export class EducationClass extends DatedModel {
  /**
   * Constructor for EducationClass.
   * @param {Object} data - The data object from the json file.
   * @property {number} id - The id of the education.
   * @property {string} degree - The degree of the education.
   * @property {string} institute - The institute of the education.
   * @property {string} location - The location of the education.
   * @property {string} startTime - The start time of the education.
   * @property {string} endTime - The end time of the education.
   * @property {Object} description - The description of the education in both English and Japanese.
   */
  constructor(data) {
    super(data);

    this.id = data.id;
    this.degree = data.degree;
    this.institute = data.institute;
    this.location = data.location;
    this.startTime = data.start_time;
    this.endTime = data.end_time;
    this.description = {
      en: data.description_en,
      ja: data.description_ja,
    };
  }

  // inherits dateRange & getLocalizedProperty() from DatedModel
}
