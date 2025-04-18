import express from "express";

import {
  createTeam,
  getAllTeams,
  getAvailableTeam,
  updateTeamAvailability,
  getTeamById,
} from "../controllers/teamControllers.js";

const teamRoutes = express.Router();

teamRoutes.post("/teams", createTeam);
teamRoutes.get("/teams", getAllTeams);
teamRoutes.get("/teams/available", getAvailableTeam);
teamRoutes.get("/teams/:id", getTeamById);
teamRoutes.patch("/teams/:id", updateTeamAvailability);

export default teamRoutes;
