import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser"
import { connectMongo } from "./database/db.js";
import authRoutes from "./routes/auth.routes.js"
import taskRoutes from "./routes/task.routes.js";
export const app = express();
connectMongo();


app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use (authRoutes);
app.use (taskRoutes);