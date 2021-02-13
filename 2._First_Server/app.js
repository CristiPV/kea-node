const express = require( "express" );
const app = express();

app.get( "/", ( req, res ) => {
    res.send( {message: "This is my response"} );
} );

app.listen( 8080 );