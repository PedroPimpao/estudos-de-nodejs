const express = require('express')
const app = express()

app.get("/", (req, res)=>{
    res.send("Seja bem vindo ao nosso site")
})

app.get("/artigos/:id", (req, res)=>{
    if(req.params.id == '1'){
        res.send('1 - Como criar aplicativos Android e IOS')
    }else if(req.params.id == '2'){
        res.send('2 - Como usar o Node.Js')
    }else{
        res.send('Não encontrado...')
    }
})

app.get("/contato", (req, res)=>{
    res.send('Deixe sua mensagem...')
})

app.listen(8081, ()=>{
    console.log('O servidor está rodando...')
})

