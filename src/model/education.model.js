import i18n from "@/includes/i18n";

export class EducationClass {
  constructor({
    id,
    degree,
    institute,
    location,
    startTime,
    endTime,
    description_en,
    description_ja,
  }) {
    this.id = id;
    this.degree = degree;
    this.institute = institute;
    this.location = location;
    this.startTime = startTime;
    this.endTime = endTime;
    this.description = {
      en: description_en,
      ja: description_ja,
    };
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

  /**
   * A getter for a computed date range. If both startTime and endTime
   * are set, the date range is returned as "startTime - endTime".
   * If endDate is not set, the date range is returned as "startTime -
   * ${this.$t("common.continuing")}".
   * @return {string} The computed date range
   */
  get dateRange() {
    if (this.startTime && this.endTime) {
      return `${this.startTime} - ${this.endTime}`;
    } else if (this.startTime && !this.endTime) {
      return `${this.startTime} - ${this.$t("common.continuing")}`;
    }
    return this.endTime || "N/A";
  }
}
