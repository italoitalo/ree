const  mysql = require('mysql2')

var connection = mysql.createConnection({
    host: 'quadroecia.com',
    user: 'quadro64_italo',
    password: '123456',
    database: 'quadro64_ree'
});

module.exports = connection;

