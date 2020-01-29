var mysql = require('mysql2');

var con = mysql.createConnection({
    host: 'quadroecia.com',
    user: 'quadro64_italo',
    password: '123456',
    database: 'quadro64_ree'
});

con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    // res.send(result)
    console.log(result);
  });
});
