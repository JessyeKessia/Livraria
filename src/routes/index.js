import express from "express";
import livros from "./livroRoutes.js"
import autores from "./autoresRoutes.js"

// O ponto de entrada das rotas, e é esse ponto de entrada que o resto da aplicação acessará.
const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"))

    app.use(express.json(), livros, autores);
};

export default routes;