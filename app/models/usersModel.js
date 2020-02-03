 dbConnection = require('../../config/dbConnection')


//model de usuários

const Usuario = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING,
    },
    sobrenome: {
        type: db.Sequelize.STRING,
    },
    senha: {
        type: db.Sequelize.STRING,
    },
    email: {
        type: db.Sequelize.STRING,
    },
    celular: {
        type: db.Sequelize.INTEGER
    }
})
module.exports = Usuario
 

//Usuario.sync({ force: true }) //-> não tirar este comentário!!




// cria um novo registro de usuário na tabela Usuario no banco


Usuario.create({
                nome: "Bruno",
                sobrenome: "Cabral",
                senha: "123456",
                email: "cabralbruno000@gmail.com",
                celular: 988734469

 }) 
