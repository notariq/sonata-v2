import { clerkClient, clerkMiddleware } from "@clerk/express";

export const protectedRoute = (req, res, next) => {
    if(!req.auth.userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
};

export const requireAdmin = async (req, res, next) => {
    try {
        const currentUser = await clerkClient.users.getUser(req.auth.userId);
		const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

        if (!isAdmin) {
            return res.status(403).json({ message: "Forbidden GET OUT" });
        };

        next();
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};