import "dotenv/config";
import express from "express";

const app = express();
const { PORT } = process.env;

//mongodb+srv://andreluismachadoabreu_db_user:9kBHyJqmxkbSbOlQ@cluster0.muoh6jk.mongodb.net/hashbnb?appName=Cluster0

app.get("/", (req, res) => {
    res.json({ ola: "Olá, Mundo!" });
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});