// Os models são responsáveis pela representação dos dados e da lógica de negócio da aplicação, ou seja, é responsabilidade do model gerenciar o relacionamento entre a API e a camada de dados, incluindo validação, armazenamento e manipulação dos dados, interação com a base de dados e suas regras.
import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;