import express from 'express';
import connectNaDataBase from '../src/config/dbConnect.js';
import routes from "./routes/index.js"
import manipuladorDeErros from './middlewares/manipuladorDeErros.js';
import manipulador404 from './middlewares/manipulador404.js';

// banco de dados
const conexao = await connectNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404)

app.use(manipuladorDeErros);


export default app;
