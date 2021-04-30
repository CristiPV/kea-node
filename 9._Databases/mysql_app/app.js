const db = require( "./connection" ).connection;

console.log( process.env.DB_PASS );

db.query( "INSERT INTO actors ()", ( error, result, fields ) => {
    console.log( fields );
} );

db.query( "SELECT * FROM actors;", ( error, result, fields ) => {
    console.log( fields );
} );

//                                       variable  Statement to insert
db.query(`INSERT INTO actors (name, height) VALUES( ?, ? );`, ["Peter Griffin", 10], (error, result, fields) => {
    if (error) {
        throw error;
    }
    console.log(result);
    //console.log(fields);
});