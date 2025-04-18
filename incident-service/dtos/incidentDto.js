import incidentRepository from "../repositories/incidentRepository.js";
import CallerService from "../services/callerService.js";

export class IncidentDTO {
  /**
   * @param {string} id - Incident identifier
   * @param {string} localisation - Location of the incident
   * @param {string} description - Description of the incident
   * @param {string} status - Status of the incident
   * @param {Object} caller - Full caller object
   * @param {Object} operator - Full operator object
   * @param {string} teamId - Identifier of the team
   * @param {Date} reportedAt - Date the incident was reported
   * @param {Date} createdAt - Date the incident was created
   * @param {Date} updatedAt - Date the incident was last updated
   */
  constructor(id, localisation, description, status, caller, operator, teamId, reportedAt, createdAt, updatedAt) {
    this.id = id;
    this.localisation = localisation;
    this.description = description;
    this.status = status;
    this.caller = caller;
    this.operator = operator;
    this.teamId = teamId;
    this.reportedAt = reportedAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  /**
   * Creates a DTO from an Incident entity and populates related data
   * @param {Incident} incident - The Incident entity
   * @returns {Promise<IncidentDTO>} - The DTO
   */
  static async fromEntity(incident) {
    const [caller, operator, team] = await Promise.all([
      CallerService.getCallerById(incident.callerId),
      CallerService.getOperatorById(incident.operatorId), // Assuming operator is handled similarly
    ]);

    return new IncidentDTO(
      incident._id,
      incident.localisation,
      incident.description,
      incident.status,
      caller,
      operator,
      incident.teamId,
      incident.reportedAt,
      incident.createdAt,
      incident.updatedAt
    );
  }

  /**
   * Transforms the DTO into a JSON object
   * @returns {Object} - A JSON object
   */
  toJSON() {
    return {
      id: this.id,
      localisation: this.localisation,
      description: this.description,
      status: this.status,
      caller: this.caller,
      operator: this.operator,
      teamId: this.teamId,
      reportedAt: this.reportedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

 /**
   * Fetches an incident by its ID
   * @param {string} id - The ID of the incident
   * @returns {Promise<IncidentDTO>} - The incident as a DTO
   */
  static async getIncidentById(id) {
    const incident = await incidentRepository.getIncidentById(id);
    if (!incident) {
      throw new Error(`Incident with ID ${id} not found`);
    }
    return IncidentDTO.fromEntity(incident);
  }

  /**
   * Fetches all incidents
   * @param {Object} [filter={}] - Optional filter for incidents
   * @returns {Promise<IncidentDTO[]>} - A list of incidents as DTOs
   */
  static async getAllIncidents(filter = {}) {
    const incidents = await incidentRepository.getAllIncidents(filter);
    return incidents.map((incident) => IncidentDTO.fromEntity(incident));
  }
}