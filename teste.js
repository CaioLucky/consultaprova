const express = require('express')
const mysql = require('mysql2')

const app = express()

app.use(express.json())

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja'
})

app.post('/produtos', (req, res) => {
    const produto = {nome,preco,quantidade,} = req.body

    conexao.query(
        'INSERT INTO produtos (nome, preco, quantidade) VALUES (?,?,?)',
        [
            nome,
            preco, 
            quantidade, 
        ],
        () => {
            res.status(201).send('Consulta cadastrada com sucesso!')
    })
})

app.get('/produtos', (req, res) => {
    conexao.query('SELECT * FROM  produtos', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscas produtos')
        }

        res.status(200).send(results)
    })
})


app.listen(3000, () => {
    console.log("Servidor backend rodando em http://localhost:3000")
})

app.delete('/produtos/:id', (req, res) => { // deletar
    const { id } = req.params;

    conexao.query('DELETE FROM produtos WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao deletar');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Produto não encontrado');
        }

        res.status(200).send('Produto deletado com sucesso');
    });
});


app.put('/produtos/:id', (req, res) => {            //por   
    const { id } = req.params;
    const { nome, preco } = req.body;

    const query = 'UPDATE produtos SET nome = ?, preco = ? WHERE id = ?';
    conexao.query(query, [nome, preco, id], (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao atualizar produto');
        }

        if (results.affectedRows === 0) {
            return res.status(404).send('Produto não encontrado');
        }

        res.status(200).send('Produto atualizado com sucesso');
    });
});
