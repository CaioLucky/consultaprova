const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Servidor Express!");
})

app.get('/sobre', (req, res) => {
    res.send("bem vindo ao Express!");
})

app.post('/comprar', (req, res) => {
    const produto = req.body.produto
    const preco = req.body.preco
    const quantidade = req.body.quantidade

    res.send( "preço total:" + preco*quantidade )
})

app.listen(3000,( )=> {
    console.log("Servidor rodando em http://localhost:3000")
})