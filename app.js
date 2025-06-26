import express from 'express'
import { Produto } from './models/Produtos.js'
const app = express()

app.get("/", (req, res)=>{
    res.send("Seja bem vindo ao nosso site")
})

app.get("/artigos/", (req, res)=>{
    res.send('Todos os artigos')
})

app.get("/contato", (req, res)=>{
    res.send('Deixe sua mensagem...')
})

app.listen(8081, ()=>{
    console.log('O servidor está rodando...')
})

