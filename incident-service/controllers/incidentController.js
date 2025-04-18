import { CreateIncidentDTO } from "../dtos/createIncidentDto.js";
import { UpdateIncidentStatusDTO } from "../dtos/updateIncidentStatusDto.js";
import { IncidentDTO } from "../dtos/incidentDto.js";
import incidentRepository from "../repositories/incidentRepository.js";

/**
 * Controller to create a new incident
 */
export const createIncident = async (req, res) => {
  try {
    const createIncidentDTO = CreateIncidentDTO.fromJSON(req.body);
    const incident = await incidentRepository.createIncident(createIncidentDTO);
    res.status(201).json(IncidentDTO.fromEntity(incident).toJSON());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Controller to get all incidents
 */
export const getAllIncidents = async (req, res) => {
  try {
    const incidents = await incidentRepository.getAllIncidents();
    const incidentDTOs = await Promise.all(
      incidents.map((incident) => IncidentDTO.fromEntity(incident))
    );
    res.status(200).json(incidentDTOs.map((dto) => dto.toJSON()));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Controller to update the status of an incident
 */
export const updateIncidentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const updateIncidentStatusDTO = UpdateIncidentStatusDTO.fromJSON(req.body);
    const updatedIncident = await incidentRepository.updateIncidentStatus(id, updateIncidentStatusDTO.status);
    res.status(200).json(IncidentDTO.fromEntity(updatedIncident).toJSON());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};