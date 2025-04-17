import { Router } from "express";
import { createIncident, editStatus, getIncidents } from "../controllers/incidentController.js";

const incidentRouter = Router();

incidentRouter.patch("/update-status/:id", editStatus)
incidentRouter.post("/", createIncident)
incidentRouter.get("/", getIncidents)

export default incidentRouter