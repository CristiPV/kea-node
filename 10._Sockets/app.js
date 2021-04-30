const express = require( "express" );
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 8080;

io.on( 'connection', ( socket ) => {
    console.log( "A socket connected:", socket.id ); 

    socket.on( "colorSelected", ( data ) => {
        console.log( data );

        // changes the color for all the sockets on the io
        //io.emit( "changeColor", data );

        // changes the color for the same socket that changed the color initially
        //socket.emit( "changeColor", data );

        // changes the color for all the sockets but the one that changed the color initially
        socket.broadcast.emit( "changeColor", data );
    } );
} );

app.get( "/colors", ( req, res ) => {
    res.sendFile( __dirname + "/public/colors.html" );
} );

server.listen( PORT, ( error ) => {
    if ( error ) {
        console.log( error );
    }

    console.log( "Server running on port:", server.address().port );
} );