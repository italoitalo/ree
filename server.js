/* este arquivo se compromete em colocar o "servidor " front e back para funcionar juntos, ele também lida com 
as rodas dinamicas usando consign, bem como estabelece a porta que ambos os "servidores irão usar;"
*/


const express = require('express');
var consign = require('consign');

const app = express();

//app.set('view engine','ejs')
app.set('view engine', 'react')
app.set('views', './app/views')

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);
module.exports = app



const port = process.env.PORT || 5000;
/* 
app.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Hello From Express' });
}); */

app.listen(port, () => console.log(`Listening on port ${port}`));