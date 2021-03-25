const express = require( "express" );
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 8080;

const welcomePath = __dirname + "/public/welcome.html";
const folderPath = __dirname + "/public";

app.use( express.static( "public" ) );


app.get( "/", ( req, res ) => {
    res.sendFile( welcomePath );
} );

app.get( "/dragons", ( req, res ) => {
    res.sendFile ( folderPath + "/dragons.html" );
} );

app.get( "/potato", ( req, res ) => {
    if ( req.query.query === "spud" ) {
        return res.send( { response: "petite potato" } );
    }
    return res.send( { response: "adult potato" } );
} );

app.listen( PORT, ( error ) => {
    if ( error ) {
        console.log( error );
    }
    console.log( "Server running on port: ", Number( PORT ) );
    // $env:PORT="3000"; nodemon app.js - POWERSHELL
    // set PORT=3000 & nodemon app.js - CMD
} );