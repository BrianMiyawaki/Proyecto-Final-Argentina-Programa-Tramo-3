import { Router } from "express";
import {register, login, logout} from "../controllers/auth.controller.js"

const routes = Router();

routes.post("/register",register)

routes.post("/login",login)

routes.post("/logout",logout)
export default routes;