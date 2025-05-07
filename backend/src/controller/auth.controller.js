import { User } from "../models/users.model.js";

export const authCallback = async (req, res, next) => { 
  try {
    const { clerkId, userName, imageUrl } = req.body;

    const user = await User.findOne({ clerkId });

    if (!user) {
      await User.create({
        clerkId,
        userName,
        imageURL: imageUrl,
      });

    }
    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Error in auth callback route:", error);
    next(error);
  }
};