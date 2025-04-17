import express from "express";
import {
    createCallerController,
    getAllCallersController,
    getCallerByIdController
} from "../controllers/callerController.js";

const router = express.Router();

router.post("/", createCallerController);

router.get("/", getAllCallersController);

router.get("/:id", getCallerByIdController);

export default router;