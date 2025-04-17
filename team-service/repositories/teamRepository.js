import Team from "../models/Team.js";

export const createTeam = async (teamData) => {
  const team = new Team(teamData);
  await team.save();
  return team;
};

export const getAllTeams = async () => {
  return Team.find();
};

export const getAvailableTeam = async () => {
  return Team.findOne({ availability: true });
};

export const updateTeamAvailability = async (teamId, availability) => {
  return Team.findByIdAndUpdate(teamId, { availability }, { new: true });
};
