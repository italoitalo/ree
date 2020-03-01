const connection = require('../../config/dbConnection')

module.exports = (app) => {

    app.post('/cadastroproduto', (req, res) => {
        connection.query(`INSERT  INTO card (nome_card, estado_do_produto, caracteristicas) VALUES ('${req.body.nome}','${req.body.estado}', '${req.body.caracteristicas }' );`)
        res.json("<h1> produto cadastrado </h1>")


    });
}