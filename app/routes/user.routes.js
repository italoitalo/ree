const connection = require('../../config/dbConnection')

module.exports = (app) => {

    app.post('/user', (req, res) => {
        connection.query(`SELECT id_user, username, password FROM user`,
            (error, result) => {
                res.send(result)

            })

    })

    app.post('/test', (req, res) => {
        res.redirect('/chat')

    })
}