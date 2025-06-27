import express from 'express'
import { Produto } from './models/Produtos.js'
import bodyParser from 'body-parser'

const app = express()
const PORT=3000

// Configurando Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/cadastro', (req, res)=>{
    Produto.create({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    }).then(()=>{
        res.send('Produto cadastrado com sucesso!')
    }).catch((erro)=>{
        res.send(`Erro ao cadastrar produto: ${erro}`)
    })
})

app.listen(PORT, ()=>{
    console.log('O servidor está rodando...')
})

