import i18n from "@/includes/i18n";

export class BaseModel {
  /**
   * Constructs a new BaseModel object.
   *
   * @param {Object} data - The raw data object to be used for constructing the BaseModel object.
   */
  constructor(data) {
    this.rawData = data;
  }

  /**
   * A powerful helper method for i18n that returns a localized property
   * given its name. If the property is not an object, it is returned as is.
   * If the property is an object, it is assumed to contain a localized
   * version of the property in both English and Japanese, and the
   * localized version for the current locale is returned. If the
   * localized version does not exist, the English version is returned
   * as a fallback.
   *
   * @param {string} propertyName - The name of the property to localize
   * @return {*} The localized property value
   */
  getLocalizedProperty(propertyName) {
    const value = this[propertyName];
    if (value && typeof value === "object") {
      return value[i18n.global.locale] || value["en"]; // Fallback to English
    }
    return value; // Return as is if not an i18n object
  }
}
