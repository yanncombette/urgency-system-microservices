import { editStatusIncident, fetchIncidents, reportIncident } from "../services/incidentService.js"

export const createIncident = async (req, res) => {
    try {
        const { description, localisation, operatorId, callerId } = req.body;

        const newIncident = await reportIncident(description, localisation, operatorId, callerId);

        res.status(200).json({ message: "Incident created with success", incident: newIncident, success: true })
    } catch (err) {
        res.status(500).json({ error: err.message, success: false })
    }
}


export const getIncidents = async (req, res) => {
    try {
        const incidents = await fetchIncidents();

        res.status(200).json({ incidents, success: true })
    } catch (err) {
        res.status(500).json({ error: err.message, success: false })

    }
}

export const editStatus = async (req, res) => {
    try {

        const { id } = req.params;
        const { status } = req.body;

        const editStatus = await editStatusIncident(id, status)

        res.status(200).json({message: "Status updated with success", incident: editStatus, success: true})

    } catch (err) {
        res.status(500).json({ error: err.message, success: false })

    }
}
