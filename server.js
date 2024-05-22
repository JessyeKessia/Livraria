import app from "./src/app.js";
const PORT = 3000;

// const rotas = {
//     // fazendo rotas
//     "/": "Livraria",
//     "/livros": "Entrei na rota livros",
//     "/autores": "Entrei na rota autores"
// }

// criando o server
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(rotas[req.url]);
//     // o url é uma requisição do req, que pega as rotas da url
// })

app.listen(PORT, () => {
    console.log("Servidor escutando!")
})

