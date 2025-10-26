import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

try{
    mongoose.connect(MONGO_URL);
    console.log("Deu certo ao conectar com o banco!");
} catch (error) {
    console.log("Não deu certo ao conectar com o banco!", error);

}
