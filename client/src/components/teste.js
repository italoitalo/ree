/* // Importa o módulo



const connection = require('./../../../config/dbConnection')





// Substitua pelo seu comando
var queryString = 'SELECT * FROM users';

 

// Executa o comando SQL
connection.query(queryString, function(err, rows, fields) {
if (err) throw err;

 

// Faz o laço para retornar os dados
for (var i in rows) {
console.log('Retorno: ', rows[i].username);
}
});

 

// Fecha conexão
connection.end(); */