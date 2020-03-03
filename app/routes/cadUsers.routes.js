const connection = require('../../config/dbConnection')

module.exports = (app) => {

    app.post('/cadastro', (req, res) => {
        connection.query(`INSERT  INTO user (username, lastname, password, email, celphone) VALUES ('${req.body.nome}','${req.body.sobrenome}', '${req.body.senha }', '${req.body.email}', '${req.body.celular}' );`)
        res.redirect("/CadastroRealizado")

    });
}