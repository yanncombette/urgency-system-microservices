import { Router } from "express";
import { createCaller, getCallers } from "../controllers/callerController.js";


const callerRouter = Router();

callerRouter.get("/", getCallers)
callerRouter.post("/", createCaller)

export default callerRouter