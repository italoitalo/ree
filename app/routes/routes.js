/*  const {Router} = require ('express')
const  routes = Router()
const  connection = require('../../config/dbConnection')



routes.post('/cadastro', (req, res) => {
    connection.query(INSERT INTO user (username, lastname, password, email, celphone) VALUES ('${req.body.nome}','${req.body.sobrenome}', '${req.body.senha }', '${req.body.email}', '${req.body.celular}' );)
    res.send("<h1> enviado </h1>")

    
});
module.exports = routes
 
 */