const express = require( "express" );
const app = express();

const PORT = process.env.PORT || 8080;

//const plants = require( "./carnivorous_plants.json" );

let plants = [
    {
        "id": 1,
        "name": "Cephalotus follicularis"
    },
    {
        "id": 2,
        "name": "Sarracenia purpurea"
    }
];
let ID = plants.length;

app.use( express.json() );

app.get( "/plants", ( req, res ) => {
    res.send( plants );
} );

app.get( "/plants/:id", ( req, res ) => {
    const id = parseInt( req.params.id );
    
    const foundPlant = plants.find( ( plant ) => {
        return plant.id === id;
    } );

    const response = foundPlant ? foundPlant : {
        exception: "No carnivorous plant with the given id was found"
    };

    res.send( response );
} );

app.post( "/plants", ( req, res ) => {
    const newPlant = req.body;
    newPlant.id = ++ID;
    plants.push( newPlant );
    res.send( newPlant );
} );

app.patch( "/plants/:id", ( req, res ) => {
    const id = parseInt( req.params.id );
    let hasUpdated = false

    plants = plants.map( plant => { 
        if ( plant.id === id ) {
            hasUpdated = true;
            return { ...plant, ...req.body, id: plant.id };
        }
        return plant;
    } );

    res.send( { hasUpdated: hasUpdated } );
} );

app.delete( "/plants/:id", ( req, res ) => {
    const id = parseInt( req.params.id );

    plants = plants.filter( plant => plant.id !== id );

    res.send( { } );
} );

app.listen( PORT, ( error ) => {
    if ( error ) {
        console.log( error );
    }
    console.log( "Server running on port: ", PORT );
} );