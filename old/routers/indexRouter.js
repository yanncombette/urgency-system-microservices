import { Router } from "express";
import callerRouter from "./callerRouter.js";
import operatorRouter from "./operatorRouter.js";
import teamRouter from "./teamRouter.js";
import incidentRouter from "./incidentRouter.js";

const router = Router();

router.use("/callers", callerRouter );
router.use("/operators", operatorRouter );
router.use("/teams", teamRouter);
router.use("/incidents", incidentRouter)


export default router;