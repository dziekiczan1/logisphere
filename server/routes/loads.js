import express from "express";
import { getLoads, addLoads } from "../controllers/loads.js";

const router = express.Router();

router.get("/", getLoads);
router.post("/", addLoads);

export default router;
