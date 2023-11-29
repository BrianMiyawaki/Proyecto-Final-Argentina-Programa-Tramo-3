import express from "express"
import morgan from "morgan"
import cors from "cors"
import { connectMongo } from "./database/db.js";

connectMongo();

export const app = express();


app.use(morgan("tiny"));
app.use(cors());
app.use(express.json)

app.use ("/", (req,res) => {
    res.send("Bienvenidos")

})