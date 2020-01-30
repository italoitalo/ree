// exportando  tudo  que é  necessario para a consulta
const express = require('express');
const app =  express()
const bodyParser = require('body-parser')
const port = 3000 //porta padrao
const mysql = require('mysql')

//configurando o body parser para pegar POSTS 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router)

router.get('/clientes', (req, res) =>{
    execSQLQuery('SELECT * FROM user', res);
})

//concecta ao banco de dados
function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host: 'quadroecia.com',
        user: 'quadro64_italo',
        password: '123456',
        database: 'quadro64_ree'
    });
  
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
  }

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

