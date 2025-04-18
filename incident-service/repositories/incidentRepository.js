import Incident from "../models/Incident.js";

class IncidentRepository {
    async createIncident(data) {
        try {
            const incident = new Incident(data);
            return await incident.save();
        } catch (error) {
            throw new Error(`Error creating incident: ${error.message}`);
        }
    }

    async getIncidentById(id) {
        try {
            return await Incident.findById(id);
        } catch (error) {
            throw new Error(`Error fetching incident by ID: ${error.message}`);
        }
    }

    async getAllIncidents(filter = {}) {
        try {
            return Incident.find(filter); // Return the query object
        } catch (error) {
            throw new Error(`Error fetching incidents: ${error.message}`);
        }
    }

    async updateIncidentStatus(id, status) {
        try {
            return await Incident.findByIdAndUpdate(
                id,
                { status },
                { new: true }
            );
        } catch (error) {
            throw new Error(`Error updating incident status: ${error.message}`);
        }
    }

}

export default new IncidentRepository();