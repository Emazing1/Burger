
//this was adjusted from the original to include jaws

var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4742Cire',
    database: 'burgers_db'
  });
};

connection.connect();
module.exports = connection;