import "dotenv/config";
import express from "express";
import { connectDb } from "./config/db.js";
import User from "./models/User.js";

const app = express();
const { PORT } = process.env;

app.get("/users", async (req, res) => {
  connectDb();

  const userDoc = await User.find();

  res.json(userDoc);
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});