//ENDPOINTS DEL SERVIDOR

import {Router} from "express"
import {register,login} from "../controllers/auth.controller.js"

const routes = Router()

//Rutas para el registro de Usuario

routes.post("/register", register)


//Rutas para el login

routes.post("/login", login)

export default routes;