import * as teamRepository from "../repositories/teamRepository.js";
import { teamDto } from "../dtos/teamDto.js";

export const createTeam = async (req, res) => {
  try {
    const team = await teamRepository.createTeam(req.body);
    res.status(201).json(teamDto(team));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllTeams = async (req, res) => {
  try {
    const teams = await teamRepository.getAllTeams();
    res.status(200).json(teams.map(teamDto));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAvailableTeam = async (req, res) => {
  try {
    const team = await teamRepository.getAvailableTeam();
    if (!team) {
      return res.status(404).json({ message: "No available team" });
    }
    res.status(200).json(teamDto(team));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTeamAvailability = async (req, res) => {
  try {
    const team = await teamRepository.updateTeamAvailability(
      req.params.id,
      req.body.availability
    );
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }
    res.status(200).json(teamDto(team));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
