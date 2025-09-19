import { BaseModel } from "./BaseModel";

export class DatedModel extends BaseModel {
  /**
   * Constructor for the DatedModel class.
   * @param {Object} data - The JSON data to construct the model from.
   * The data object should contain the following properties:
   * start_time: The start time of the model.
   * end_time: The end time of the model.
   * achieve_time: The achieve time of the model.
   */
  constructor(data) {
    super(data);
    this.startTime = data.start_time;
    this.endTime = data.end_time || data.achieve_time;
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
