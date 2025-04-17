import Team from "../models/Team.js"

export const createTeam = async (data) => {
    return await Team.create({ ...data })
}


export const getAllTeams = async () => {
    return await Team.find({})
}

export const getAvailableTeams = async () => {
    // updateOne, findByIdAndUpdate, findOneAndUpdate
    const availableTeam = await Team.findOneAndUpdate(
        {
            availability: true
        }, //le filtre de recherche
        {
            availability: false
        },
         // Le champ que je veux mettre à jour, en l'occurence je change la disponibilité de l'équipe
        {
            sort: { updatedAt: 1 }
        } // Exemple:  Team A a cloturé un incident à 14h00 => Availability : true DONC updatedAt: 14h00
        // Team B cloture un incidentà 10h00 => Availability: true DONC updatedAt: 10h00
        // En réalisant le sort, il me prendra l'équipe de 10h00
        // Team C on modifie son type à 17h00 mais son availability est true depuis 9h00
        // Le sort prendra toujours en compte la Team B
    )
    console.log(availableTeam);

    if (!availableTeam) {
        throw new Error("No available teams to assign to the incident")
    }

    return availableTeam
}