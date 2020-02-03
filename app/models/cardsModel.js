/* db = require('./../../config/dbConnection')


//model de cards

const CardsModel = db.sequelize.define('cards', {
    titulo: {
        type: db.Sequelize.STRING,
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//CardsModel.sync({ force: true })       -> não tirar este comentário!!


// cria um novo registo de card na tabela CardsModel

/* CardsModel.create({
    titulo: "cooler",
    conteudo: "aparelho usado mas em boas condições",
}) */ */