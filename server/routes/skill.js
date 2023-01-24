import express from "express";
import {
  createSkill,
  getAllSkill,
  removeSkill,
  updateSkill,
} from "../controllers/skill.js";
const router = express.Router();
import { isAdmin } from "../middlewares/auth.js";

router.post("/addSkill", isAdmin, createSkill);
router.get("/getAllSkill", isAdmin, getAllSkill);
router.put("/updateSkill", isAdmin, updateSkill);
router.delete("/removeSkill", isAdmin, removeSkill);

export default router;
