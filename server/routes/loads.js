import express from "express";
import {
  getLoads,
  addLoad,
  updateLoad,
  deleteLoad,
} from "../controllers/loads.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getLoads);
router.post("/", addLoad);
router.patch("/:id", updateLoad);
router.delete("/:id", deleteLoad);

export default router;
