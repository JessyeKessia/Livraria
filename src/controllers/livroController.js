// Serve para fazer o controle dos métodos
// Os controllers atuam como intermediários entre a camada responsável pelo recebimento dos inputs de dados, que em nossa API está sendo feito através das rotas, e os models. Controllers também são a camada responsável pelo “caminho inverso”, pegando o resultado do processamento feito pelos models e “repassando” de volta.
import livro from "../models/Livro.js"

class LivroController {
    // static é usado para pegar metodos de uma classe sem chamá-la.
    static async listarLivros (req, res) {
        try {
            // controller chama o model Livro com o find({})
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch(erro) {
            res
                .status(500)
                .json({mensage: $`{erro.message} - falha na requisição`});
        }
    }

};

export default LivroController;