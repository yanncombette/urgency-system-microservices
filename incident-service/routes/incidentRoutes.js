import express from "express";
import {
  createIncident,
  getAllIncidents,
  updateIncidentStatus,
} from "../controllers/incidentController.js";

const router = express.Router();

router.post("/", createIncident);

router.get("/", getAllIncidents);

router.patch("/:id/status", updateIncidentStatus);

export default router;