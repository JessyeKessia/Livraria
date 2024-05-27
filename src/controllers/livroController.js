// Serve para fazer o controle dos métodos
// Os controllers atuam como intermediários entre a camada responsável pelo recebimento dos inputs de dados, que em nossa API está sendo feito através das rotas, e os models. Controllers também são a camada responsável pelo “caminho inverso”, pegando o resultado do processamento feito pelos models e “repassando” de volta.
import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js"

class LivroController {
    // static é usado para pegar metodos de uma classe sem chamá-la.
    static async listarLivros (req, res) {
        try {
            // controller chama o model Livro com o find({})
            const listaLivros = await livro.find({});
            res
                .status(200)
                .json(listaLivros);
        } catch(erro) {
            res
                .status(500)
                .json({mensage: `${erro.message} - falha na requisição`});
        }
    };
    
    static async cadastrarLivro (req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res
                .status(201)
                .json({message: `Livro criado com sucesso`})
        } catch(erro) {
            res
                .status(500)
                .json({mensage: `${erro.message} - falha ao cadastrar livro`})
        }
    }
    static async buscarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res
                .status(200)
                .json(livroEncontrado);
        } catch(erro) {
            res
                .status(500)
                .json({mensage: `${erro.message} - falha na requisição do livro`});
        }
    };
    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res
                .status(200)
                .json({menssagem: "Livro atualizado"});
        } catch(erro) {
            res
                .status(500)
                .json({mensage: `${erro.message} - falha na atualização do livro`});
        }
    };
    static async deletarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res
                .status(200)
                .json({menssagem: "Livro removido com sucesso"});
        } catch(erro) {
            res
                .status(500)
                .json({mensage: `${erro.message} - falha na deleção do livro`});
        }
    };
    static async listarLivrosPorEditora(req, res) {
        const editora = req.query.editora
        try {
            const livrosPorEditora = await livro.find({ editora })
            res
                .status(200)
                .json(livrosPorEditora)
        } catch (erro) {
            res
                .status(500)
                .json({mensage: `${erro.message} - falha na busca`});
        }
    }

}

export default LivroController;