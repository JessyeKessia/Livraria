// Serve para fazer o controle dos métodos
// Os controllers atuam como intermediários entre a camada responsável pelo recebimento dos inputs de dados, que em nossa API está sendo feito através das rotas, e os models. Controllers também são a camada responsável pelo “caminho inverso”, pegando o resultado do processamento feito pelos models e “repassando” de volta.
import { autor } from "../models/Autor.js"

class AutorController {
    // static é usado para pegar metodos de uma classe sem chamá-la.
    static async listarAutores(req, res) {
        try {
            // controller chama o model Livro com o find({})
            const autoresLivros = await autor.find({});
            res
                .status(200)
                .json(autoresLivros);
        } catch(erro) {
            res
                .status(500)
                .json({mensage: `${erro.message} - falha na requisição`});
        }
    };
    static async cadastarAutor(req, res) {
        try {
            // controller chama o model Livro 
        const novoAutor = await autor.create(req.body)
        res
            .status(201)
            .json({message: `Autor criado com sucesso`})
        } catch(erro) {
            res
                .status(500)
                .json({mensage: `${erro.message} - falha ao cadastrar livro`})
        }
    }
    static async buscarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const AutorEncontrado = await autor.findById(id);
            res
                .status(200)
                .json(AutorEncontrado);
        } catch(erro) {
            res
                .status(500)
                .json({mensage: `${erro.message} - falha na requisição do autor`});
        }
    };
    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res
                .status(200)
                .json({menssagem: "Autor atualizado"});
        } catch(erro) {
            res
                .status(500)
                .json({mensage: `${erro.message} - falha na atualização do autor`});
        }
    };
    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res
                .status(200)
                .json({menssagem: "Autor removido com sucesso"});
        } catch(erro) {
            res
                .status(500)
                .json({mensage: `${erro.message} - falha na deleção do autor`});
        }
    };

}

export default AutorController;