import { Request, Response, Router } from "express";
import RegisterController from "../api/controllers/Register/Register.controller";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("Bem-Vindo a HastyCatálogo");
});

routes.post("/register", RegisterController.RegisterOwner);

export default routes;
