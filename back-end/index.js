import "dotenv/config";
import { fileURLToPath } from "url";
import { dirname } from "node:path";
import { app } from "./server.js";

const { PORT } = process.env;

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
