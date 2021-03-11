const express = require( "express" );
const app = express();

const plants = require( "./carnivorous_plants.json" );

app.use( express.json() );

app.get( "/plants", ( req, res ) => {
    res.send( plants );
} );

app.get( "/plants/:id", ( req, res ) => {
    const id = parseInt( req.params.id );
    
    if ( id >= 0 && id < plants.length ) {
        res.send( plants.find( ( plant ) => {
            return plant.id === id;
        } ) );
    } else {
        res.send( {
            exception: "No carnivorous plant with the given id was found"
        } );   
    }
} );

app.listen( "8080", ( error ) => {
    if ( error ) {
        console.log( error );
    }
    console.log( "Server running on port: ", 8080 );
} );