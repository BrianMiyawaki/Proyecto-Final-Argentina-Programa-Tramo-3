import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectMongo } from "./database/db.js";
import authRoutes from "./routes/auth.routes.js";



export const app = express();
connectMongo();


app.use(morgan("tiny"));
app.use(cors);
app.use(express.json())

app.use (authRoutes);