const connection = require('../../config/dbConnection')

module.exports = (app) => {

    app.post('/login', (req, res, next) => {
        if (req.body.email === req.body.emaillogin && req.body.password === req.body.password) {
            console.log('verificado com sucesso')
                /* const id = 1; //esse id viria do banco de dados
                var token = jwt.sign({ id }, process.env.SECRET, {
                  expiresIn: 300 // expires in 5min
                });
                res.status(200).send({ auth: true, token: token }); */
        }

        res.status(500).send('Login inválido!');
    })



}