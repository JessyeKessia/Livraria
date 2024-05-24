// serve para estabelecer as rotas
import LivroController from "../controllers/livroController";
import express from "express";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros)