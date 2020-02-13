// /* este arquivo se compromete em colocar o "servidor " front e back para funcionar juntos, ele também lida com 
// as rodas dinamicas usando consign, bem como estabelece a porta que ambos os "servidores irão usar;"
// */


const express = require('express');
const consign = require('consign');
const connection = require('./config/dbConnection')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(cors())

// app.use(routes)
app.set('view engine', 'react')
app.set('views', './app/views')

//configurando o body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// configurando o consign
consign()
    .include('app/routes', './server.js')
    .then('config/dbConnection.js')
    .into(app);
module.exports = app

// rota de conecção do backend com frontend, não apagar rota;
app.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Hello From Express' });
});





app.post('/cadastro', (req, res) => {
    connection.query(`INSERT  INTO user (username, lastname, password, email, celphone) VALUES ('${req.body.nome}','${req.body.sobrenome}', '${req.body.senha }', '${req.body.email}', '${req.body.celular}' );`)
    res.send("<h1> enviado </h1>")


});

app.post('/cadastroproduto', (req, res) => {
    connection.query(`INSERT  INTO card (nome_card, estado_do_produto, caracteristicas) VALUES ('${req.body.nome}','${req.body.estado}', '${req.body.caracteristicas }' );`)
    res.json("<h1> produto cadastrado </h1>")


});




app.post('/card', async(req, res) => {
    await connection.query(`SELECT id_user, id_user_from, username, img_url_user, id_card, nome_card, caracteristicas, img_url_card, qtd_likes FROM
    user INNER JOIN card ON id_user = id_user_from `,
        (error, result) => {
            res.send(result)

        })


})

//porta servidor
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

//!     ROTA DE VALIDAÇÃO DE USUÁRIOS
/* 
app.post('/authh', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.user = true;
				request.session.username = username;
				response.redirect('/');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/', function(request, response) {
	if (request.session.username) {
        response.redirect('/cadastro');      
        response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

 */