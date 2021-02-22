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

app.get( "/students/:id", ( req, res ) => {
    res.send( data[req.params.id] );
  } );

app.get( "/welcome", ( req, res ) => {
    res.send( "<h1>Welcome</h1>" );
} );

app.get( "/me", ( req, res ) => {
    res.send( {
        name: "Alex",
        age: 12,
        height: 1.4
    } );
} );

app.listen( 5000 );