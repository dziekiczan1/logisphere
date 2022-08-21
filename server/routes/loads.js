import express from "express";
import { getLoads, addLoads, updateLoad } from "../controllers/loads.js";

const router = express.Router();

router.get("/", getLoads);
router.post("/", addLoads);
router.patch("/:id", updateLoad);

export default router;
