import { CreateIncidentDTO } from "../dtos/createIncidentDto.js";
import { UpdateIncidentStatusDTO } from "../dtos/updateIncidentStatusDto.js";
import { IncidentDTO } from "../dtos/incidentDto.js";
import incidentRepository from "../repositories/incidentRepository.js";
import IncidentService from "../services/incidentService.js";

/**
 * Controller to create a new incident
 */
export const createIncident = async (req, res) => {
  try {
    const createIncidentDTO = CreateIncidentDTO.fromJSON(req.body);

    const incident = await createIncidentDTO.createIncident();

    res.status(201).json(incident);
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

    const updatedIncident = await IncidentService.editStatusIncidents(
      id,
      updateIncidentStatusDTO.status
    );

    const incidentDTO = await IncidentDTO.fromEntity(updatedIncident);
    res.status(200).json(incidentDTO.toJSON());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};