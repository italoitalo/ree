// /* este arquivo se compromete em colocar o "servidor " front e back para funcionar juntos, ele também lida com 
// as rodas dinamicas usando consign, bem como estabelece a porta que ambos os "servidores irão usar;"
// */

const jwt = require('jsonwebtoken');
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser')
const cors = require('cors')
/* require("dotenv-safe").config(); */


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



//porta servidor
const port = process.env.PORT || 8093;
app.listen(port, () => console.log(`Listening on port ${port}`));