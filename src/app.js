import express from 'express';

const app = express();
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id == Number(id) //precisa passar para number pq os elementos na internet trafegam em string
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Livro");
})

// Método de busca
app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index])
})

app.get("/livros", (req, res) =>{
    res.status(200).json(livros)
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso")
})

app.put("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo; // titulo antigo = titulo novo(body.nome é a requisicao)
    res.status(200).json(livros)
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
});

export default app;