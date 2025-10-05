import { BaseModel } from "@/model/BaseModel";

export class UserInfoClass extends BaseModel {
  /**
   * Constructor for UserInfoClass
   * @param {Object} data - The data object to be used for constructing the UserInfoClass object
   * @property {number} id - The user id
   * @property {Object} firstName - The user's first name in both English and Japanese
   * @property {Object} middlename - The user's middle name in both English and Japanese
   * @property {Object} lastname - The user's last name in both English and Japanese
   * @property {string} email - The user's email
   * @property {string} backgrounImage - The URL of the user's background image
   * @property {string} centerImage - The URL of the user's center image
   * @property {string} sidebarImage - The URL of the user's sidebar image
   * @property {string} bottomImage - The URL of the user's bottom image
   * @property {Object} fullName - The user's full name in both English and Japanese
   * @property {Object} designation - The user's designation in both English and Japanese
   * @property {Object} bannerDesignation - The user's banner designation in both English and Japanese
   * @property {Object} bannerIntroduction - The user's banner introduction in both English and Japanese
   * @property {Object} raw - The raw data object used for constructing the UserInfoClass object
   */
  constructor(data) {
    super(data);

    this.id = data.id;
    this.firstName = {
      en: data.first_name_en,
      ja: data.first_name_ja,
    };
    this.middlename = {
      en: data.middle_name_en,
      ja: data.middle_name_ja,
    };
    this.lastname = {
      en: data.last_name_en,
      ja: data.last_name_ja,
    };
    this.email = data.email;
    this.backgroundImage = data.background_image;
    this.centerImage = data.center_image;
    this.sidebarImage = data.sidebar_image;
    this.bottomImage = data.bottom_image;
    this.fullName = {
      en: (
        data.first_name_en +
        (data.middle_name_en ? " " + data.middle_name_en + " " : " ") +
        data.last_name_en
      ).toUpperCase(),
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
    this.bannerDesignation = data.banner_designation;
    this.bannerIntroduction = {
      en: data.banner_introduction_en,
      ja: data.banner_introduction_ja,
    };
    this.raw = data;
  }

  // inherits getLocalizedProperty() from BaseModel
}
