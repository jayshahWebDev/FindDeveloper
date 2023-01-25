import express from "express";
import {
  createAvailability,
  getAllAvailability,
  removeAvailability,
  updateAvailability,
} from "../controllers/availability.js";
const router = express.Router();
import { isAdmin } from "../middlewares/auth.js";

router.post("/addAvailability", isAdmin, createAvailability);
router.get("/getAllAvailability", isAdmin, getAllAvailability);
router.put("/updateAvailability", isAdmin, updateAvailability);
router.delete("/removeAvailability", isAdmin, removeAvailability);

export default router;
