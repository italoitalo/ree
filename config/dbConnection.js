/* var connMysql = () => {
    console.log('Conexao com o bd foi estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'testeree'
    });
};

module.exports = () => {
    console.log('O autoload carregou o modulo de conexão com o BD')
    return connMysql
} */

const Sequelize = require('sequelize')



const sequelize = new Sequelize('testeree', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'

})

sequelize.authenticate().then(() => {
    console.log('Banco conectado com sucesso!')
}).catch(erro => {
    console.log('Falha ao se concetar ao banco de Dados:' + erro)
})

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}