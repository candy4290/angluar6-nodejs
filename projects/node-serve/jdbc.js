var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1qaz@WSX',
  port: '3306',
  database : 'Cxx'
});

connection.connect();

connection.query('SELECT * from mp3s', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0]);
});
