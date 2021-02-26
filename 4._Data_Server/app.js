const express = require( "express" );
const app = express();

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

app.post( "/whatever", ( req, res ) => {
    // Get what is in the body and send it back
    res.send( req.body );
} );

app.listen( "3000" );