import TeamService from "./teamService.js";
import IncidentRepository from "../repositories/incidentRepository.js";
import { IncidentStatus } from "../enums/incidentStatusEnum.js";

class IncidentService {
  /**
   * Reports a new incident and assigns a team if available.
   * @param {string} location - The location of the incident.
   * @param {string} description - The description of the incident.
   * @param {string|null} callerId - The ID of the caller (optional).
   * @param {string|null} operatorId - The ID of the operator (optional).
   * @returns {Promise<Object>} - The newly created incident with populated details.
   */
  async reportIncident(location, description, callerId = null, operatorId = null) {
    try {
      const availableTeam = await TeamService.getAvailableTeams();

      if (availableTeam) {
        await TeamService.updateTeamAvailability(availableTeam.id, false);
      }

      const status = availableTeam ? IncidentStatus.IN_PROGRESS : IncidentStatus.PENDING;

      const incidentData = {
        localisation: location,
        description,
        callerId,
        operatorId,
        teamId: availableTeam ? availableTeam.id : null, // Use the `id` field from the response
        status,
        reportedAt: new Date(),
        updatedAt: new Date(),
      };

      const newIncident = await IncidentRepository.createIncident(incidentData);

      return newIncident;
    } catch (error) {
      throw new Error(`Error reporting incident: ${error.message}`);
    }
  }

  /**
   * Edits the status of an incident and updates related entities if necessary.
   * @param {string} incidentId - The ID of the incident to update.
   * @param {string} newStatus - The new status of the incident.
   * @returns {Promise<Object>} - The updated incident with populated details.
   */
  async editStatusIncidents(incidentId, newStatus) {
    try {
      const incident = await IncidentRepository.getIncidentById(incidentId);

      if (!incident) {
        throw new Error("Incident not found");
      }

      incident.status = newStatus;
      incident.updatedAt = new Date();

      if (newStatus === IncidentStatus.RESOLVED) {
        if (incident.teamId) {
          await TeamService.updateTeamAvailability(incident.teamId, true);

          const nextIncident = await IncidentRepository.getAllIncidents({
            status: IncidentStatus.PENDING,
            teamId: null,
          })

          if (nextIncident.length > 0) {
            const nextIncidentToUpdate = nextIncident[0];
            nextIncidentToUpdate.teamId = incident.teamId;
            nextIncidentToUpdate.status = IncidentStatus.IN_PROGRESS;
            nextIncidentToUpdate.updatedAt = new Date();

            await IncidentRepository.createIncident(nextIncidentToUpdate);
            await TeamService.updateTeamAvailability(incident.teamId, false);
          }
        }
      }

      await IncidentRepository.createIncident(incident);

      return incident; // Optionally, populate details if needed.
    } catch (error) {
      throw new Error(`Error editing incident status: ${error.message}`);
    }
  }
}

export default new IncidentService();