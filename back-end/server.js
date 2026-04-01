import express from "express";
import UserRoutes from "./domains/users/routes.js";
import PlaceRoutes from "./domains/Places/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use("/users", UserRoutes);
app.use("/places", PlaceRoutes);