import { createNewTeam, fetchTeams } from "../services/teamService.js"

export const createTeam = async (req, res) => {
    try {
        const { type } = req.body

        const newTeam = await createNewTeam(type)

        res.status(200).json({ message: "Team created with success", team: newTeam, success: true })

    } catch (err) {
        res.status(500).json({ error: err.message, success: false })
    }
}

export const getTeams = async (req, res) => {
    try {
        const teams = await fetchTeams();
        res.status(200).json(teams)
    } catch (err) {
        res.status(500).json({ error: err.message, success: false })

    }
}