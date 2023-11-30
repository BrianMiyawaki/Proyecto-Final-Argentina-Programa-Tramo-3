import { Router } from "express";
import {register, login} from "../controllers/auth.controller.js"

const routes = Router();

routes.post("/register",register)

export default routes;