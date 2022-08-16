import express from "express";
import { getLoads } from "../controllers/loads.js";

const router = express.Router();

router.get("/", getLoads);

export default router;
