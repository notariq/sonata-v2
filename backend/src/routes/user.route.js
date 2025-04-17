import { Router } from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectedRoute, (req, res) => { 
  req.auth.userId
  res.send("User route is working!");
});

export default router;