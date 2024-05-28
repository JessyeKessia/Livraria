// serve para estabelecer as rotas
import autorController from "../controllers/autorController.js";
import express from "express";

const routes = express.Router();

routes.get("/autores", autorController.listarAutores);
routes.get("/autores/:id", autorController.buscarAutorPorId);
routes.post("/autores", autorController.cadastarAutor);
routes.put("/autores/:id", autorController.atualizarAutor);
routes.delete("/autores/:id", autorController.deletarAutor);

export default routes;