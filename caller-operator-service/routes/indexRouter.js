import express from "express";
import callerRoutes from "./callerRoutes.js";
import operatorRoutes from "./operatorRoutes.js";

const router = express.Router();

// Routes for callers
router.use("/callers", callerRoutes);

// Routes for operators
router.use("/operators", operatorRoutes);

export default router;