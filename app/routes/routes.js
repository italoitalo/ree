/* const server = require('./../../server')
const db = require('./../../config/dbConnection')
const usuario = require('./../models/usersModel')




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
}) */