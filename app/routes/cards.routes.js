const connection = require('../../config/dbConnection')

module.exports = (app) => {

    app.post('/card', async (req, res) => {
         try {
            const resultado =  await  connection.query(`SELECT id_user, id_user_from, username, img_url_user, id_card, nome_card, caracteristicas, img_url_card, qtd_likes FROM
            user INNER JOIN card ON id_user = id_user_from `,
                (error, result) => {
                    res.send(result)
     
                })
            
        } catch (error) {
            console.log("A Requisição deu Erro",error)
        } 
        
    //    connection.query(`SELECT id_user, id_user_from, username, img_url_user, id_card, nome_card, caracteristicas, img_url_card, qtd_likes FROM
    //         user INNER JOIN card ON id_user = id_user_from `, function (error, result, fields) {
    //             if (error) throw error; 
    //             res.send(result)
    //           }).end() //OLHANDO A DOCUMENTAÇÃO DA 'MYSQL BIBLIOTECA' FALTAVA .END() NO FINAL DA REQUISIÇÃO
              
            
        

    })
}

// conn.query('select * from produtos', function(err, results) {
//     res.render('produtos/lista', {
//         lista : results
//     });
// }).end(); // fechando a conexão