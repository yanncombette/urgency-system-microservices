import express from "express";
import incidentRoutes from "./incidentRoutes.js";

const router = express.Router();

// Routes for incidents
router.use("/incidents", incidentRoutes);

export default router;