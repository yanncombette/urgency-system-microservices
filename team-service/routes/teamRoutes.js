import express from "express";

import {
  createTeam,
  getAllTeams,
  getAvailableTeam,
  updateTeamAvailability,
} from "../controllers/teamControllers.js";

const teamRoutes = express.Router();

teamRoutes.post("/teams", createTeam);
teamRoutes.get("/teams", getAllTeams);
teamRoutes.get("/teams/available", getAvailableTeam);
teamRoutes.patch("/teams/:id", updateTeamAvailability);

export default teamRoutes;
