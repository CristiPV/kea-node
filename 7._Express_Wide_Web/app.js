const express = require( "express" );
const app = express();

const welcomePath = __dirname + "/public/welcome.html";
const folderPath = __dirname + "/public";


app.get( "/", ( req, res ) => {
    res.sendFile( welcomePath );
} );

app.get( "/dragons", ( req, res ) => {
    res.sendFile ( folderPath + "/dragons.html" );
} );

app.listen( 8080, ( error ) => {
    if ( error ) {
        console.log( error );
    }
    console.log( "Server running on port: ", 8080 );
} );