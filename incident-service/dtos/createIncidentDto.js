import IncidentService from "../services/incidentService.js";

export class CreateIncidentDTO {
  /**
   * @param {string} localisation - The location of the incident
   * @param {string} description - The description of the incident
   * @param {string} callerId - The ID of the caller
   * @param {string} operatorId - The ID of the operator
   * @param {string} teamId - The ID of the team
   */
  constructor(localisation, description, callerId, operatorId, teamId) {
    this.localisation = localisation;
    this.description = description;
    this.callerId = callerId;
    this.operatorId = operatorId;
    this.teamId = teamId;
    this.reportedAt = new Date();
    this.status = "pending"; // Default status
    this.validate();
  }

  /**
   * Validates the DTO data
   * @throws {Error} If the data is invalid
   */
  validate() {
    if (!this.localisation || typeof this.localisation !== "string") {
      throw new Error("The localisation is required and must be a string.");
    }

    if (!this.description || typeof this.description !== "string") {
      throw new Error("The description is required and must be a string.");
    }

    if (!this.callerId || typeof this.callerId !== "string") {
      throw new Error("The callerId is required and must be a string.");
    }

    if (!this.operatorId || typeof this.operatorId !== "string") {
      throw new Error("The operatorId is required and must be a string.");
    }

  }

  /**
   * Creates a DTO from a JSON object
   * @param {Object} json - The JSON object
   * @returns {CreateIncidentDTO} - The DTO
   */
  static fromJSON(json) {
    if (!json || typeof json !== "object") {
      throw new Error("The JSON data is required.");
    }

    return new CreateIncidentDTO(
      json.localisation,
      json.description,
      json.callerId,
      json.operatorId,
    );
  }

  /**
   * Creates an incident using the IncidentService
   * @returns {Promise<Object>} - The created incident
   */
  async createIncident() {
    return await IncidentService.reportIncident(
      this.localisation,
      this.description,
      this.callerId,
      this.operatorId
    );
  }
}