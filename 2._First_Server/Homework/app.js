const express = require( "express" );
const app = express();

const data = [
    {
        name: "Cristi",
        age: "20",
        university: "KEA"
    },
    {
        name: "Alex",
        age: "28",
        university: "KEA"
    },
    {
        name: "Peter",
        age: "32",
        university: "ITU"
    }
];

app.get( "/students", ( req, res ) => {
    res.send( data );
} );

app.get('/students/:id', ( req, res ) => {
    res.send( data[req.params.id] );
  } );

app.listen( 5000 );