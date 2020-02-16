const connection = require('../../config/dbConnection')

module.exports = (app) => {

    app.post('/card', (req, res) => {
        connection.query(`SELECT id_user, id_user_from, username, img_url_user, id_card, nome_card, caracteristicas, img_url_card, qtd_likes FROM
        user INNER JOIN card ON id_user = id_user_from `,
            (error, result) => {
                res.send(result)

            })


    })
}