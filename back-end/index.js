import "dotenv/config";
import express from "express";

const app = express();
const { PORT } = process.env;

app.get("/", (req, res) => {
    res.json({ ola: "Olá, Mundo!" });
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});