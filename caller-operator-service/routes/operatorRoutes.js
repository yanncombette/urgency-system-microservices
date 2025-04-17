import express from "express";
import {
    createOperatorController,
    getAllOperatorsController,
    getOperatorByIdController
} from "../controllers/operatorController.js";

const router = express.Router();

// POST /api/operators - Créer un opérateur
router.post("/", createOperatorController);

// GET /api/operators - Lister tous les opérateurs
router.get("/", getAllOperatorsController);

// GET /api/operators/:id - Récupérer un opérateur par ID
router.get("/:id", getOperatorByIdController);

export default router;