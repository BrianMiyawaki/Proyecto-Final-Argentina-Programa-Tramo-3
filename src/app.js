import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectMongo } from "./database/db.js";
import authRoutes from "./routes/auth.routes.js";

connectMongo();

export const app = express();


app.use(morgan("tiny"));
app.use(cors());
app.use(express.json)

app.use (authRoutes);