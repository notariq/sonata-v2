import { Router } from "express";

import { checkAdmin, createSong, deleteSong, createAlbum, deleteAlbum } from "../controller/admin.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.use(protectedRoute);
router.use(requireAdmin);

router.get("/checkAdmin", checkAdmin);

router.post("/songs", createSong);
router.delete("/songs/:id", deleteSong);

router.delete("/songs/:id", createAlbum);
router.delete("/songs/:id", deleteAlbum);

export default router;