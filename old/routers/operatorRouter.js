import { Router } from "express";
import { createOperator, getOperators } from "../controllers/operatorController.js";

const operatorRouter = Router();

operatorRouter.get("/", getOperators);
operatorRouter.post("/", createOperator);
export default operatorRouter;