 const mysql = require('mysql2')

 var connection = mysql.createConnection({
     host: 'quadroecia.com',
     user: 'quadro64_italo',
     password: '123456',
     database: 'quadro64_ree'
 });

 module.exports = connection;

 /* 
 const mysql = require('mysql2')
 const express = require('express')


 var connection = () => {
     console.log('Conexao com o bd foi estabelecida');
     return mysql.createConnection({
         host: '127.0.0.1',
         user: 'root',
         password: '123456',
         database: 'testeree'
     })
 }


 module.exports = () => {
     console.log('O autoload carregou o modulo de conexão com o BD')
     return connection
 } */