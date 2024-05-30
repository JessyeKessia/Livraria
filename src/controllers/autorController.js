// Serve para fazer o controle dos métodos
// Os controllers atuam como intermediários entre a camada responsável pelo recebimento dos inputs de dados, que em nossa API está sendo feito através das rotas, e os models. Controllers também são a camada responsável pelo “caminho inverso”, pegando o resultado do processamento feito pelos models e “repassando” de volta.
import { autor } from "../models/Autor.js"

class AutorController {
    // static é usado para pegar metodos de uma classe sem chamá-la.
    static async listarAutores(req, res, next) {
        try {
            // controller chama o model Livro com o find({})
            const autoresLivros = await autor.find({});
            res
                .status(200)
                .json(autoresLivros);
        } catch(erro) {
            next(erro);
        }
    };
    static async cadastarAutor(req, res, next) {
        try {
            // controller chama o model Livro 
        const novoAutor = await autor.create(req.body)
        res
            .status(201)
            .json({message: `Autor criado com sucesso`})
        } catch(erro) {
            next(erro);
        };
    }
    static async buscarAutorPorId(req, res, next) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            if (autorEncontrado !== null) {
                res
                    .status(200)
                    .json(autorEncontrado);
            } else {
                res
                    .status(404)
                    .json({mensage: "Id do Autor não localizado."});
            }
        } catch(erro) {
            next(erro);
        };
    };
    static async atualizarAutor(req, res, next) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res
                .status(200)
                .json({menssagem: "Autor atualizado"});
        } catch(erro) {
            next(erro);
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
           next(erro);
        }
    };

}

export default AutorController;