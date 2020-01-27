
var app = require('./config/server')


/* var rotaHome=require('./app/routes/home')(app)
var rotaFront=require('./app/routes/frontend')(app)
var rotaBack=require('./app/routes/backend')(app)
var rotaInfra=require('./app/routes/infraestrutura')(app) */

app.listen(3000, ()=>{
    console.log('servidor rodando com express')
})
