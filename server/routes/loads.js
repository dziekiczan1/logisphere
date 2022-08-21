import express from "express";
import { getLoads, addLoad, updateLoad } from "../controllers/loads.js";

const router = express.Router();

router.get("/", getLoads);
router.post("/", addLoad);
router.patch("/:id", updateLoad);

export default router;
