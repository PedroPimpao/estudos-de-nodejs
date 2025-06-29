import express from 'express'
import { Produto } from './models/Produtos.js'
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express()
export const PORT=3000

// Configurando Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// /Configurando Body Parser

app.use(cors())

// Create
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


// Read
app.get('/', (req, res)=>{
    Produto.findAll().then((produtos)=>{
        res.send(produtos)
    }).catch((erro)=>{
        res.send(`Erro ao buscar dados: ${erro}`)
    })
})

app.get('/:nome', (req, res)=>{
    Produto.findAll({where: {"nome": req.params.nome}}).then((produto)=>{
        res.send(produto)
    }).catch((erro)=>{
        res.send(`Produto não encontrado: ${erro}`)
    })
})


// Update
app.patch("/atualizar/:id", (req, res)=>{
    Produto.update({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao},
        {where: {"id": req.params.id}}
    ).then(()=>{
        res.send('Sucesso ao atualizar os dados do produto')
    }).catch((erro)=>{
        res.send(`Erro ao atualizar os dados do produto: ${erro}`)
    })
})


// Delete
app.delete("/deletar/:id", (req, res)=>{
    Produto.destroy({where: {"id":req.params.id}}).then(()=>{
        res.send("Produto deletado com sucesso")
    }).catch((erro)=>{
        res.send(`Erro ao deletar produto: ${erro}`)
    })
})


app.listen(PORT, ()=>{
    console.log('O servidor está rodando...')
})

