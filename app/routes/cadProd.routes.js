const connection = require('../../config/dbConnection')

module.exports = (app) => {

    app.post('/cadastroproduto', (req, res) => {
        connection.query(`INSERT  INTO card (nome_card, estado_do_produto, caracteristicas, id_user_from, img_url_card) VALUES ('${req.body.nome}','${req.body.estado}', '${req.body.caracteristicas }', '${req.body.id}', '${req.body.foto}' );`)
        res.redirect('/doacaoenviada')


    });
}