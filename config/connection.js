//connection to database and export to be used for orm
//this was adjusted from the original to include jaws
var mysql = require('mysql');
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "4742Cire",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
