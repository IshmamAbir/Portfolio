import i18n from "@/includes/i18n";

export class ExperienceClass {
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
      return `${this.startTime} - ${i18n.global.t("common.continuing")}`;
    }
    return this.endTime || "N/A";
  }
}
