// Serve para fazer o controle dos métodos
// Os controllers atuam como intermediários entre a camada responsável pelo recebimento dos inputs de dados, que em nossa API está sendo feito através das rotas, e os models. Controllers também são a camada responsável pelo “caminho inverso”, pegando o resultado do processamento feito pelos models e “repassando” de volta.
import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js"

class LivroController {
    // static é usado para pegar metodos de uma classe sem chamá-la.
    static async listarLivros (req, res, next) {
        try {
            // controller chama o model Livro com o find({})
            const listaLivros = await livro.find({});
            res
                .status(200)
                .json(listaLivros);
        } catch(erro) {
            next(erro);
        }
    };
    
    static async cadastrarLivro (req, res, next) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res
                .status(201)
                .json({message: `Livro criado com sucesso`})
        } catch(erro) {
            next(erro);
        }
    }
    static async buscarLivroPorId(req, res, next) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
                .status(200)
                .json(livroEncontrado);
        } catch(erro) {
            next(erro);
        }
    };
    static async atualizarLivro(req, res, next) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res
                .status(200)
                .json({menssagem: "Livro atualizado"});
        } catch(erro) {
            next(erro);
        }
    };
    static async deletarLivro (req, res, next) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res
                .status(200)
                .json({menssagem: "Livro removido com sucesso"});
        } catch(erro) {
            next(erro);
        }
    };
    static async listarLivrosPorEditora(req, res, next) {
        const editora = req.query.editora
        try {
            const livrosPorEditora = await livro.find({ editora })
            res
                .status(200)
                .json(livrosPorEditora)
        } catch (erro) {
            next(erro);
        }
    }

}

export default LivroController;