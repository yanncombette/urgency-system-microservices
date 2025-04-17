import { Router } from "express";
import { createTeam, getTeams } from "../controllers/teamController.js";

const teamRouter = Router();

teamRouter.get("/", getTeams);
teamRouter.post("/", createTeam);

export default teamRouter;