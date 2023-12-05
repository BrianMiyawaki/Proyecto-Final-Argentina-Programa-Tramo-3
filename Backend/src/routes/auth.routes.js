import { Router } from "express";
import {register, login, logout, profile} from "../controllers/auth.controller.js"
import {authRequired} from "../middlewares/validateToken.js"

const routes = Router();

//Rutas para el registro de usuario
routes.post("/register",register)

//Rutas para el login
routes.post("/login",login)

//Rutas para el logout
routes.post("/logout",logout)

//Rutas para el profile
routes.get("/profile",authRequired ,profile)

export default routes;