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

export const sentToS3 = (filename, path) => {

    const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: filename,
    Body: path,
    ContentType: "",
    ACL: "public-read",
    });
}

