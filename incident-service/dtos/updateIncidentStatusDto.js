import { IncidentStatus } from "../enums/incidentStatusEnum.js";

export class UpdateIncidentStatusDTO {
  /**
   * @param {string} status - The new status of the incident
   */
  constructor(status) {
    this.status = status;
    this.validate();
  }

  /**
   * Validates the DTO data
   * @throws {Error} If the data is invalid
   */
  validate() {
    const validStatuses = Object.values(IncidentStatus);
    if (!this.status || !validStatuses.includes(this.status)) {
      throw new Error(
        `Invalid status. Allowed values are: ${validStatuses.join(", ")}`
      );
    }
  }

  /**
   * Creates a DTO from a JSON object
   * @param {Object} json - The JSON object
   * @returns {UpdateIncidentStatusDTO} - The DTO
   */
  static fromJSON(json) {
    if (!json || typeof json !== "object") {
      throw new Error("The JSON data is required.");
    }

    return new UpdateIncidentStatusDTO(json.status);
  }
}