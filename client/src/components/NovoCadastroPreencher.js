
const express = require('express');
var consign = require('consign');
const bodyParser = require('body-parser')

const app = express();

app.post('/cadastro', (req, res) => {
    usuario.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        senha: req.body.senha,
        email: req.body.email,
        celular: req.body.celular,
    }).then(() => {
        res.send("ususário cadastrado com sucesso")
    }).catch((erro) => {
        res.send("ususário não cadastrado, houve um erro" + erro)
    })
}) 

