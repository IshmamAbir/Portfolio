import { BaseModel } from "@/model/BaseModel";

export class UserInfoClass extends BaseModel {
  /**
   * Constructor for UserInfoClass
   * @param {Object} data - The data object to be used for constructing the UserInfoClass object
   * @property {number} id - The user id
   * @property {string} email - The user's email
   * @property {string} backgrounImage - The URL of the user's background image
   * @property {string} centerImage - The URL of the user's center image
   * @property {string} sidebarImage - The URL of the user's sidebar image
   * @property {string} bottomImage - The URL of the user's bottom image
   * @property {Object} fullName - The user's full name in both English and Japanese
   * @property {Object} designation - The user's designation in both English and Japanese
   * @property {Object} bannerIntroduction - The user's banner introduction in both English and Japanese
   * @property {string} cv - User's cv location path
   */
  constructor(data) {
    super(data);

    this.id = data.id;
    this.email = data.email;
    this.backgroundImage = data.background_image;
    this.centerImage = data.center_image;
    this.sidebarImage = data.sidebar_image;
    this.bottomImage = data.bottom_image;
    this.cv = data.cv;
    this.fullName = {
      en: (
        data.first_name_en +
        (data.middle_name_en ? " " + data.middle_name_en + " " : " ") +
        data.last_name_en
      ),
      ja:
        data.last_name_ja +
        "　" +
        data.first_name_ja +
        (data.middle_name_ja ? "　" + data.middle_name_ja : ""),
    };
    this.designation = {
      en: data.designation_en,
      ja: data.designation_ja,
    };
    this.bannerIntroduction = {
      en: data.banner_introduction_en,
      ja: data.banner_introduction_ja,
    };
    this.heroHeadline = {
      en: data.hero_headline_en,
      ja: data.hero_headline_ja,
    };
    this.heroSummary = {
      en: data.hero_summary_en,
      ja: data.hero_summary_ja,
    };
  }

  // inherits getLocalizedProperty() from BaseModel
}
