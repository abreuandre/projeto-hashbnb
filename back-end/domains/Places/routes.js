import { Router } from "express";
import Place from "./models.js";
import { JWTVerify } from "../../utils/jwt.js";
import { connectDb } from "../../config/db.js";
import { downloadImage, uploadImage } from "./controller.js";

const router = Router();

router.post("/", async (req, res) => {
  connectDb();

const {
  title,
  city,
  photos,
  description,
  extras,
  price,
  perks,
  checkin,
  checkout,
  guests,
} = req.body;

try {
  const { _id: owner } = await JWTVerify(req);

  const newPlaceDoc = await Place.create({
    owner,
    title,
    city,
    photos,
    description,
    extras,
    perks,
    price,
    checkin,
    checkout,
    guests,
  });

  res.json(newPlaceDoc)
} catch (error) {
  console.error(error);
  res.status(500).json("Deu erro ao criar o novo lugar");
}
});

router.post("/upload/link", async (req, res) => {
  const { link } = req.body;

  try {
    const { filename, fullPath, mimeType } = await downloadImage(link);
    //Após fazer a configuração da AWS então configurar as chaves abaixo no arquivo .env. Não esquecer de ver o vídeo da aula 10.
    // S3_ACCESS_KEY= aqui digitamos a chave.
    // S3_SECRET_KEY= aqui é uma outra chave.

    const fileURL = await sendToS3(filename, fullPath, mimeType);

    res.json(fileURL);
  } catch (error) {
    console.error(error);
    res.status(500).json("Deu erro ao baixar a imagem");
  } 
});

router.post("/upload", uploadImage().array("files", 10), async (req, res) => {
  const {files} = req;

  const filesPromise = new Promise((resolve, reject) => {
    const fileURLArray = [];

    files.forEach(async (file, index) => {
      const { filename, path, mimetype } = file;

      try {
        const fileURL = await sendToS3(filename, path, mimetype);

        if (fileURL) {
          fileURLArray.push(fileURL);
          console.log({ fileURLArray });
        

          if (index === files.length - 1) {
            console.log(`Antes do Resolve: ${fileURLArray}`);
            resolve(fileURLArray);
          }
        }
      } catch (error) {
        console.error("Deu algum erro ao subir para o S3", error);
        reject(error);
      }
    });
  });
  
  const fileURLArrayResolved = await filesPromise;

  res.json(fileURLArrayResolved);
});

export default router;
