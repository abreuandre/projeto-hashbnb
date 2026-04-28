import "dotenv/config";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";

const { S3_ACCESS_KEY, S3_SECRET_KEY, BUCKET } = process.env;
//BUCKET = hashbnb - youtube; - coloque essa informação no arquivo .env ou process.env

const client = new S3Client({ 
    region: "us-east-2", 
    credentials: {
        accessKeyId: S3_ACCESS_KEY,
        secretAccessKey: S3_SECRET_KEY,
    }, 
});

export const sentToS3 = async (filename, path, mimetype) => {
    const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: filename,
    Body: fs.readFileSync(path),
    ContentType: mimetype,
    ACL: "public-read",
    });

    try {
      await client.send(command);

      return `https://${BUCKET}.s3.us-east-2.amazonaws.com/${filename}`;
    } catch (error) {
        throw error;
    }
};

