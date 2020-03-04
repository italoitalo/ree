const connection = require('../../config/dbConnection')

/* import api2 from './../../client/src/services/api2' */

module.exports = (app) => {
    
    app.post('/login', (req, res, next) => {

        if (req.body.emaillogin) {
            console.log('Verificado com Sucesso!')
            res.redirect('/private')
                /* const id = 1; //esse id viria do banco de dados
                var token = jwt.sign({ id }, process.env.SECRET, {
                  expiresIn: 300 // expires in 5min
                });
                res.status(200).send({ auth: true, token: token }); */
        }
        else{
        res.status(500).send('Login inválido! ');
        }
    })


    
}