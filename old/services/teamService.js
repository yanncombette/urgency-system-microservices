import { createTeam, getAllTeams } from "../repositories/teamRepository.js"

export const createNewTeam = async (type) => {
    return await createTeam({ type });
}


export const fetchTeams = async () => {
    return await getAllTeams();
}