import express from "express";
import {
  getLoads,
  getLoadsBySearch,
  addLoad,
  updateLoad,
  deleteLoad,
  bookLoad,
} from "../controllers/loads.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getLoads);
router.get("/search", getLoadsBySearch);
router.post("/", auth, addLoad);
router.patch("/:id", auth, updateLoad);
router.delete("/:id", auth, deleteLoad);

// router.patch("/:id", auth, bookLoad);
// router.get("/:id", auth, bookLoad);
router.post("/:id", auth, bookLoad);
export default router;
