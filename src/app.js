import express from 'express';
import connectNaDataBase from '../src/config/dbConnect.js';
import routes from "./routes/index.js"

// banco de dados
const conexao = await connectNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express();
routes(app);

export default app;
