import {Router} from "express"
import { createTask, deleteTask, getAllTask, getTaskById, updateTask } from "../controllers/task.controller.js";
import {authRequired} from "../middlewares/validateToken.js"

const routes = Router();

routes.get("/task",authRequired, getAllTask);
routes.get("/task/:id",authRequired, getTaskById);
routes.post("/task", authRequired, createTask);
routes.put("/task/:id", authRequired, updateTask);
routes.delete("/task/:id", authRequired, deleteTask);

export default routes;