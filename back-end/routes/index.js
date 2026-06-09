import { Router } from "express";
import userRoutes from "../domains/users/routes.js";
import placesRoutes from "../domains/places/routes.js";
import bookingRoutes from "../domains/bookings/routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/places", placesRoutes);
router.use("/bookings", bookingRoutes);

export default router;
