import { Router } from "express";

import { getAllSongs } from "../controller/songs.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectedRoute, requireAdmin, getAllSongs);

export default router;