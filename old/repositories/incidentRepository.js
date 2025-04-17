import Incident from "../models/Incident.js"
import Team from "../models/Team.js"


export const createIncident = async (data) => {

    // console.log(data);

    return await Incident.create({ ...data })

}


export const getAllIncidents = async () => {

    return await Incident.find().populate("callerId", "name phone -_id")
        .populate("operatorId", " name __v").populate("teamId", "type availability -_id")

}

export const updateIncidentStatus = async (id, status) => {

    const incident = await Incident.findByIdAndUpdate(id, { status })

    // Gérer le statut de l'équipe affectée si l'incident est clos (la remettre disponible)
    if(status === "resolved" && incident.teamId){
        await Team.findByIdAndUpdate(incident.teamId, {availability: true})
    }

    return incident
}