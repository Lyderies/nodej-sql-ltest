var express    = require("express");
var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'username',
  password : 'Wh!t3C!ff370MAN',
  database : 'test'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");  
} else {
    console.log("Error connecting database ... \n\n");  
}
});
app.listen(3232);