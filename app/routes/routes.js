const {Router} = require ('express')
const  routes = Router()
const  connection = require('../../config/dbConnection')



routes.post('/cadastro', (req, res) => {
    connection.query(`INSERT  INTO user (username, email) VALUES ('${req.body.nome}', '${req.body.email}' );`) 
    res.send("<h1> enviado </h1>")

    
});
module.exports = routes
