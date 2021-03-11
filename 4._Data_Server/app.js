const express = require( "express" );
const app = express();

const cat = require( "./cat.json" );

console.log( cat );

app.use(express.json());

app.get( "/querystring", ( req, res ) => {
    res.send( req.query );
} );

app.get( "/pathvariable/:title/:message", ( req, res ) => {
    res.send( {
        title: req.params.title,
        message: req.params.message
    } );
} );

app.get( "/cat", ( req, res ) => {
    res.send( cat );
} );

app.post( "/whatever", ( req, res ) => {
    // Get what is in the body and send it back
    res.send( req.body );
} );

app.listen( "8080", ( error ) => { 
    if ( error ) {
        console.log( error );
    }
    console.log( "Server is running on port ", 8080 );
 } );