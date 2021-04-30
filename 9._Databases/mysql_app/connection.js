// Homework - set up mysql connection
 
// I'm running this file with: node connection.js --createdb

// if the user ran the file with the "--createdb" option then console log "success"

// hint use argv
require('dotenv').config()


password = require( "./secretPassword.json" ).password;
console.log(password);
console.log( process.env.DB_PASS);

if ( process.argv.includes( "--createdb" ) ) {
    console.log( "success" );
} 

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// CREATE TABLE IF NOT EXISTS actors ( id INT AUTO_INCREMENT, name VARCHAR(70), height INT, PRIMARY KEY( id ) )
if ( process.argv.includes( "--createdb" ) ) {
    connection.query( "CREATE TABLE IF NOT EXISTS actors ( id INT AUTO_INCREMENT, name VARCHAR(70), height INT, PRIMARY KEY( id ) )",
                    ( error, result ) => {
        if ( error ) {
                throw error;
        }

        console.log( result );

        connection.end();
    } );
}  

connection.end();

module.exports = {
    connection
};

