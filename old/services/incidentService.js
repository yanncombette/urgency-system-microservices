import { createIncident, getAllIncidents, updateIncidentStatus } from "../repositories/incidentRepository.js"
import { getAvailableTeams } from "../repositories/teamRepository.js"

export const reportIncident = async (description, localisation, operatorId, callerId) => {

    const teamAvailable = await getAvailableTeams()

    return await createIncident({ description, localisation, operatorId, callerId, teamId: teamAvailable._id })

}


export const fetchIncidents = async () => {
    return await getAllIncidents();
}


export const editStatusIncident = async (id, status) => {
    return await updateIncidentStatus(id, status)
}