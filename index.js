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

if(!produto.nome || typeof produto.nome != "string"|| produto.nome.trim()=='') {
    return res.status(400).send("Nome do produto é obrigatório e deve ser uma string não vazia.")
}

if (produto.preco== undefined || typeof produto.preco != "number" || produto.preco <=0){
return res.status(400).send("Preço deve ser um número positivo.")
}

if (produto.quantidade == undefindes || !Number.isInteger(produto.quantidade)|| produto.quantidade<0){
    return res.status(400).send("Quantidade deve ser um númeroninteiro maior ou igual a 0.")
}

produtos.push(produto)

res.status(201).send("Produtos cadastrados com sucesso!")