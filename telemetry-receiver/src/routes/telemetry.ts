import express from "express";
import controller from "../controllers/telemetry";
const router = express.Router();

router.post("/", controller.getTelemetry);
router.post("/telemetry", controller.addTelemetry);

export = router;
