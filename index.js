const express = require('express')

const app = express()

app.get('/', (req, res) =>  {
    res.send("Servidor Express Funcionando!!")
})

app.listen(3000,() =>{
    console.log ("Servidor backend rodando em http://localhost:3000")
})

app.use(express.json())

const produtos = []

app.post("/produtos", (req, res) => {
    const produto = {
        nome: req.body.nome,
        preco:  req.body.preco,
        quantidade:  req.body.quantidade,
    }

    produtos.push(produto)

    res.send("Produtos cadastrados com sucesso!")
})

app.get("/produtos", (req, res) =>{
    res.send(produtos)
})
