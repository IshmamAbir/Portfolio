import { BaseModel } from "./BaseModel";

export class ProjectClass extends BaseModel {
  /**
   * Constructor for ProjectClass.
   * @param {Object} data - Object containing the data
   * @property {number} id - The id of the project
   * @property {string} name - The name of the project
   * @property {string} url - The URL of the project
   * @property {string} img_url - The URL of the project image
   * @property {string} project_type - The type of the project
   * @property {string[]} technology_used - The technologies used in the project
   * @property {Object} my_role - The role of the person in the project
   * @property {Object} description - The description of the project
   */
  constructor(data) {
    super(data);

    this.id = data.id;
    this.name = data.name;
    this.url = data.url;
    this.imgUrl = data.img_url;
    this.projectType = data.project_type;
    this.technologyUsed = data.technology_used;
    this.myRole = {
      en: data.my_role_en,
      ja: data.my_role_ja,
    };
    this.description = {
      en: data.description_en,
      ja: data.description_ja,
    };
  }

  // inherits getLocalizedProperty() from BaseModel
}
